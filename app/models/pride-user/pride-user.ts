import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { omit } from "ramda"


export const PrideUserModel = types
  .model("PrideUser")
  .props({
    email: types.string,
    name: types.string,
    photo: types.optional(types.string, ""),
    id: types.string,
    inTheClosed: types.optional(types.boolean, false),
    score: types.number,
    bio: types.optional(types.string, ""),
    accessToken: types.maybe(types.string),
    prideTrust: types.number
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    setAccessToken(accessToken: string) {
      self.accessToken = accessToken;
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .postProcessSnapshot(omit(["accessToken"]))

type PrideUserType = Instance<typeof PrideUserModel>
export interface PrideUser extends PrideUserType {}
type PrideUserSnapshotType = SnapshotOut<typeof PrideUserModel>
export interface PrideUserSnapshot extends PrideUserSnapshotType {}
