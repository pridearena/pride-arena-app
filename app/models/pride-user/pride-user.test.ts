import { PrideUserModel, PrideUser } from "./pride-user"

test("can be created", () => {
  const instance: PrideUser = PrideUserModel.create({})

  expect(instance).toBeTruthy()
})