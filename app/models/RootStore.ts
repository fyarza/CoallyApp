import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ApiModel } from "./api/api"
import { AuthModel } from "./auth/auth"
import { AuthenticationStoreModel } from "./AuthenticationStore" // @demo remove-current-line
import { EpisodeStoreModel } from "./EpisodeStore" // @demo remove-current-line
import { ProjectStoreModel } from "./project-store/project-store"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}), // @demo remove-current-line
  episodeStore: types.optional(EpisodeStoreModel, {}), // @demo remove-current-line
  authStore: types.optional(AuthModel, {} as any),
  apiStore: types.optional(ApiModel, {} as any),
  projectsStore: types.optional(ProjectStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
