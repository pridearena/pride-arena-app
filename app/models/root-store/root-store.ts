import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { NavigationStoreModel } from "../../navigation/navigation-store"
import { PrideUserModel, PrideUserSnapshot, PrideUser } from "../pride-user";

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  navigationStore: types.optional(NavigationStoreModel, {}),
  prideUser: types.maybe(PrideUserModel)
})
.actions(self => ({
  setPrideUser(prideUserSnapshot: PrideUserSnapshot): PrideUser {
    return self.prideUser = PrideUserModel.create(prideUserSnapshot);
  }
}))

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>
