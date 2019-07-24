import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { omit } from "ramda"


export const PrideUserModel = types
  .model("PrideUser")
  .props({
    email: types.string,
    name: types.string,
    photo: types.optional(types.string, ""),
    id: types.string,
    inTheCloset: types.optional(types.boolean, false),
    bio: types.optional(types.string, ""),
    accessToken: types.maybe(types.string),
    prideTrust: types.number,
    address: types.string,
    phoneNumber: types.string,
    gender: types.string,
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    setAccessToken(accessToken: string) {
      self.accessToken = accessToken;
    },
    setName(name: string) {
      self.name = name;
    },
    setEmail(email: string) {
      self.email = email;
    },
    setInTheCloset(inTheCloset: boolean) {
      self.inTheCloset = inTheCloset;
    },
    setBio(bio: string) {
      self.bio = bio;
    },
    setPrideTrust(prideTrust: number) {
      self.prideTrust = prideTrust;
    },
    setAddress(address: string) {
      self.address = address;
    },
    setPhoneNumber(phoneNumber: string) {
      self.phoneNumber = phoneNumber;
    },
    setGender(gender: string) {
      self.gender = gender;
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .postProcessSnapshot(omit(["accessToken"]))

type PrideUserType = Instance<typeof PrideUserModel>
export interface PrideUser extends PrideUserType {}
type PrideUserSnapshotType = SnapshotOut<typeof PrideUserModel>
export interface PrideUserSnapshot extends PrideUserSnapshotType {}
