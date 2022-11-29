import { ApiResponse } from "apisauce"
import { api } from "./api"
import { GetLoginResult, GetRegisterResult, GetSendOtpResult, VerifyOTPResult } from "./api.types"
import { getGeneralApiProblem } from "./apiProblem"

export interface loginData {
  email: string
  password: string
}

export interface registerData {
  usertype?: string
  username: string
  email: string
  password: string
}

export interface sendOtpData {
  email?: string
  verifyEmail?: string
}

export interface verifyOtpData {
  otp: string
  email: string
  password?: string
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

  async registerService(data: registerData): Promise<GetRegisterResult> {
    try {
      const response: ApiResponse<any> = await api.apisauce.post(
        api.config.url + "/auth/signup",
        JSON.stringify(data),
      )

      if (!response.ok || !response.data) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const register = response.data
      return { kind: "ok", data: register }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async sendOTPService(data: sendOtpData): Promise<GetSendOtpResult> {
    try {
      const response: ApiResponse<any> = await api.apisauce.post(
        api.config.url + "/auth/verifyemail",
        JSON.stringify(data),
      )

      if (!response.ok || !response.data) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const res = response.data
      return { kind: "ok", data: res }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async verifyOTPService(data: verifyOtpData): Promise<VerifyOTPResult> {
    try {
      const response: ApiResponse<any> = await api.apisauce.post(
        api.config.url + "/auth/verifyOTP",
        JSON.stringify(data),
      )

      if (!response.ok || !response.data) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const res = response.data
      return { kind: "ok", data: res }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
