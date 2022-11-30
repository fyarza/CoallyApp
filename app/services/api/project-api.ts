import { ApiResponse } from "apisauce"
import { api } from "./api"
import { GetProjectsResult } from "./api.types"
import { getGeneralApiProblem } from "./apiProblem"

export interface dataFindAllProject {
  skip?: number
  limit?: number
  status?: string
  key?: string
}

export class ProjectApi {
  async findAllProjectsService(data: dataFindAllProject): Promise<GetProjectsResult> {
    try {
      const response: ApiResponse<any> = await api.apisauce.get(api.config.url + "/Project", data)

      if (!response.ok || !response.data) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }
      const projects = response.data
      return { kind: "ok", data: projects }
    } catch (e) {
      __DEV__ && console.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
