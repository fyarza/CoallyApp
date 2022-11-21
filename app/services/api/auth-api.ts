import { ApiResponse } from "apisauce"
import { api } from "./api"
import { GetLoginResult } from "./api.types"
import { getGeneralApiProblem } from "./apiProblem"

export interface loginData {
  email: string
  password: string
}

export class AuthApi {
  async loginService(data: loginData): Promise<GetLoginResult> {
    try {
      const response: ApiResponse<any> = await api.apisauce.post(
        api.config.url + "/auth/signin",
        JSON.stringify(data),
      )

      if (!response.ok || !response.data) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const login = response.data
      return { kind: "ok", data: login }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
