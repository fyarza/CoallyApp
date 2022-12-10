import { ApiResponse } from "apisauce"
import { api } from "./api"
import { GetUploadCvResult } from "./api.types"
import { getGeneralApiProblem } from "./apiProblem"

export interface uploadCvData {
  name: string
  size: number
  uri: string
  type: string
  user: string
}

export class UserApi {
  async uploadCv(data: uploadCvData): Promise<GetUploadCvResult> {
    try {
      const formData = new FormData()
      formData.append("upload_file", {
        name: data.name,
        size: data.size,
        uri: data.uri,
        type: data.type,
      } as any)
      formData.append("usuario", data.user)

      const response: ApiResponse<any> = await api.apisauce.post(
        api.config.url + "/user/readCV",
        formData,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        },
      )
      if (!response.ok || !response.data) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const result = response.data
      return { kind: "ok", data: result }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
