import { dataFindAllProject, ProjectApi } from "@/services/api/project-api"
import { cast, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { ProjectModel, ProjectSnapshotOut } from "../project/project"

/**
 * Model description here for TypeScript hints.
 */
export const ProjectStoreModel = types
  .model("ProjectStore")
  .props({
    projects: types.optional(types.array(ProjectModel), []),
  })
  .views((self) => ({
    get ProjectsList() {
      return self.projects.slice()
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    save: (projects: ProjectSnapshotOut[]) => {
      self.projects = cast(projects)
    },
    addSave: (projects: ProjectSnapshotOut[]) => {
      self.projects = cast(self.projects.concat(projects))
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    getProjects: async (data: dataFindAllProject) => {
      try {
        const api = new ProjectApi()
        const result = await api.findAllProjectsService(data)
        if (result.kind === "ok") {
          if (data.skip === 0) {
            self.save(result.data)
          } else {
            self.addSave(result.data)
          }
          return Promise.resolve(result.data)
        } else {
          return Promise.reject(result)
        }
      } catch (error) {
        __DEV__ && console.log(error)
        return Promise.reject(error)
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface ProjectStore extends Instance<typeof ProjectStoreModel> {}
export interface ProjectStoreSnapshotOut extends SnapshotOut<typeof ProjectStoreModel> {}
export interface ProjectStoreSnapshotIn extends SnapshotIn<typeof ProjectStoreModel> {}
export const createProjectStoreDefaultModel = () => types.optional(ProjectStoreModel, {})
