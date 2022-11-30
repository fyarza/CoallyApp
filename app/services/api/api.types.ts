import { Api, Auth, Project } from "@/models"
import { GeneralApiProblem } from "./apiProblem"

export type GetLoginResult = { kind: "ok"; data: Auth } | GeneralApiProblem
export type GetRegisterResult = { kind: "ok"; data: Api } | GeneralApiProblem
export type GetSendOtpResult = { kind: "ok"; data: Api } | GeneralApiProblem
export type VerifyOTPResult = { kind: "ok"; data: Api } | GeneralApiProblem
export type GetProjectsResult = { kind: "ok"; data: Project[] } | GeneralApiProblem

export interface EpisodeItem {
  title: string
  pubDate: string
  link: string
  guid: string
  author: string
  thumbnail: string
  description: string
  content: string
  enclosure: {
    link: string
    type: string
    length: number
    duration: number
    rating: { scheme: string; value: string }
  }
  categories: string[]
}

export interface ApiFeedResponse {
  status: string
  feed: {
    url: string
    title: string
    link: string
    author: string
    description: string
    image: string
  }
  items: EpisodeItem[]
}

/**
 * The options used to configure apisauce.
 */
export interface ApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}
