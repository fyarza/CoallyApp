import { Platform } from "react-native"

export const dlog = (message: string, ...optionalParams: any) => {
  if (__DEV__) {
    console.log(message, ...optionalParams)
  }
}

const mimeTypes = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  pdf: "application/pdf",
  txt: "text/plain",
}

export const uploadFile = (uri: string, uploadUrl: string) => {
  const path = uri
  const extention = path.substr(path.lastIndexOf(".") + 1)
  const filename = Math.random().toString(36).substring(7) + "." + extention
  const type: string = mimeTypes[extention]

  // 1. initialize request
  const xhr = new XMLHttpRequest()

  // 2. open request
  xhr.open("POST", uploadUrl)

  // 3. set up callback for request
  xhr.onload = () => {
    const response = JSON.parse(xhr.response)
    console.log(response)
  }
  // 4. catch for request error
  xhr.onerror = (e) => {
    console.log(e, "upload failed")
  }

  // 4. catch for request timeout
  xhr.ontimeout = (e) => {
    console.log(e, "upload timeout")
  }

  // 5. create formData to upload
  const formData = new FormData()
  const urii: string = Platform.select({ ios: uri, android: `file://${path || uri}` })

  formData.append("file", {
    uri: urii, // this is the path to your file. see Expo ImagePicker or React Native ImagePicker
    type, // example: image/jpg
    name: filename, // example: upload.jpg
  } as any)
  // 6. upload the request
  xhr.send(formData)

  // 7. track upload progress
  if (xhr.upload) {
    xhr.upload.onprogress = ({ total, loaded }) => {
      const uploadProgress = loaded / total
      console.log(uploadProgress)
    }
  }
}
