import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ApiModel = types
  .model("Api")
  .props({
    status: types.optional(types.string, ""),
    message: types.optional(types.string, ""),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Api extends Instance<typeof ApiModel> {}
export interface ApiSnapshotOut extends SnapshotOut<typeof ApiModel> {}
export interface ApiSnapshotIn extends SnapshotIn<typeof ApiModel> {}
export const createApiDefaultModel = () => types.optional(ApiModel, {})
