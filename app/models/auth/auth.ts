import { AuthApi, loginData, registerData } from "@/services/api/auth-api"
import { AUTH_TOKEN, saveString } from "@/utils/storage"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const AuthModel = types
  .model("Auth")
  .props({
    id: types.optional(types.string, ""),
    username: types.optional(types.string, ""),
    email: types.optional(types.string, ""),
    roles: types.optional(types.string, ""),
    accessToken: types.optional(types.string, ""),
    avatar: types.optional(types.string, ""),
    data_plan_premium: types.optional(types.string, ""),
  })
  .actions((self) => ({
    save: (modelSnaphot: AuthSnapshotIn) => {
      self.id = modelSnaphot.id
      self.username = modelSnaphot.username
      self.email = modelSnaphot.email
      self.roles = modelSnaphot.roles
      self.accessToken = modelSnaphot.accessToken
      self.avatar = modelSnaphot.avatar
      self.data_plan_premium = modelSnaphot.data_plan_premium
    },
    reset: () => {
      self.id = ""
      self.username = ""
      self.email = ""
      self.roles = ""
      self.accessToken = ""
      self.avatar = ""
      self.data_plan_premium = ""
    },
  }))
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    signIn: async (data: loginData) => {
      try {
        const api = new AuthApi()
        const result = await api.loginService(data)
        console.log("resultado", result)
        if (result.kind === "ok") {
          // guardamos los datos del token
          self.save(result.data)
          await saveString(AUTH_TOKEN, "Bearer " + result.data.accessToken)
        }
        return result.kind
      } catch (error) {
        __DEV__ && console.log(error)
        return Promise.reject(error)
      }
    },
    signUp: async (data: registerData) => {
      try {
        const api = new AuthApi()
        const result = await api.registerService(data)
        if (result.kind === "ok" && result.data.status !== "error") {
          return Promise.resolve(result)
        } else {
          return Promise.reject(result)
        }
      } catch (error) {
        __DEV__ && console.log(error)
        return Promise.reject(error)
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Auth extends Instance<typeof AuthModel> {}
export interface AuthSnapshotOut extends SnapshotOut<typeof AuthModel> {}
export interface AuthSnapshotIn extends SnapshotIn<typeof AuthModel> {}
export const createAuthDefaultModel = () => types.optional(AuthModel, {})
