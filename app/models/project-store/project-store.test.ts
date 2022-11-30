import { ProjectStoreModel } from "./ProjectStore"

test("can be created", () => {
  const instance = ProjectStoreModel.create({})

  expect(instance).toBeTruthy()
})
