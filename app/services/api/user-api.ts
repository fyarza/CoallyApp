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

export interface cargoInterface {
  nombrecargo?: string
  duracion?: string
  ubicacion?: string
  descripcion?: string
}
export interface experienciaInterface {
  Nombreempresa?: string
  totalDuracion?: string
  cargos?: cargoInterface[]
}

export interface educacionInterface {
  NombreInstitucion?: string
  Titulo_Certificacion?: string
  duracion?: string
}

export interface languagesInterface {
  Language: string
  Nivel: string
}
export interface infoCVInterface {
  info_personal?: {
    nombre?: string
    profesion_actual?: string
    ubicacion?: string
  }
  contacto?: string[]
  aptitudes_principales?: string[]
  languages?: languagesInterface[]
  certifications?: string[]
  honors?: string[]
  extracto?: string[]
  experiencia?: experienciaInterface[]
  educacion?: educacionInterface[]
}

export interface readCV {
  usuario: string
  infoCV: infoCVInterface
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

  async uploadCvPersonalized(data: uploadCvData): Promise<GetUploadCvResult> {
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
        api.config.url + "/user/readCVPersonalized",
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

  async readCvFromBody(data: readCV): Promise<GetUploadCvResult> {
    try {
      const response: ApiResponse<any> = await api.apisauce.post(
        api.config.url + "/user/readCVFromBody",
        JSON.stringify(data),
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
