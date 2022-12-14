import { readCV, uploadCvData, UserApi } from "@/services/api/user-api"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const UserModel = types
  .model("User")
  .props({})
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    setUploadCv: async (data: uploadCvData) => {
      try {
        const api = new UserApi()
        const result = await api.uploadCv(data)
        if (result.kind === "ok") {
          if (result.data.status === "success") {
            return Promise.resolve(result.data)
          } else {
            return Promise.reject(result.data)
          }
        } else {
          return Promise.reject(result)
        }
      } catch (error) {
        __DEV__ && console.log(error)
        return Promise.reject(error)
      }
    },
    setUploadCvPersonalized: async (data: uploadCvData) => {
      try {
        const api = new UserApi()
        const result = await api.uploadCvPersonalized(data)
        if (result.kind === "ok") {
          if (result.data.status === "success") {
            return Promise.resolve(result.data)
          } else {
            return Promise.reject(result.data)
          }
        } else {
          return Promise.reject(result)
        }
      } catch (error) {
        __DEV__ && console.log(error)
        return Promise.reject(error)
      }
    },
    setReadCvFromBody: async (data: readCV) => {
      try {
        const api = new UserApi()
        const result = await api.readCvFromBody(data)
        if (result.kind === "ok") {
          if (result.data.status === "success") {
            return Promise.resolve(result.data)
          } else {
            return Promise.reject(result.data)
          }
        } else {
          return Promise.reject(result)
        }
      } catch (error) {
        __DEV__ && console.log(error)
        return Promise.reject(error)
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface User extends Instance<typeof UserModel> {}
export interface UserSnapshotOut extends SnapshotOut<typeof UserModel> {}
export interface UserSnapshotIn extends SnapshotIn<typeof UserModel> {}
export const createUserDefaultModel = () => types.optional(UserModel, {})
