import { ProjectModel } from "./Project"

test("can be created", () => {
  const instance = ProjectModel.create({})

  expect(instance).toBeTruthy()
})
