import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ProjectModel = types
  .model("Project")
  .props({
    tipoDeServicioDeseado: types.maybe(types.string),
    modalidadDeContratacion: types.maybe(types.string),
    link: types.maybe(types.string),
    Anonimo: types.maybe(types.string),
    nombre: types.maybe(types.string),
    NombreEmpresa: types.maybe(types.string),
    Oportunidad: types.maybe(types.string),
    Detalle: types.maybe(types.string),
    NombreOportunidad: types.maybe(types.string),
    DescribeProyecto: types.maybe(types.string),
    DescrobeProyectoAudio: types.maybe(types.string),
    SeleccionaCarrera: types.maybe(types.string),
    Niveldeconocimiento: types.optional(types.array(types.string), []),
    Lenguaje: types.optional(types.array(types.string), []),
    habilidadesRequeridas: types.optional(types.array(types.string), []),
    estimadoDuración: types.maybe(types.string),
    modalidadPago: types.maybe(types.string),
    presupuesto: types.maybe(types.string),
    codigoPromocional: types.maybe(types.string),
    modalidaddepago: types.maybe(types.string),
    profesionales: types.maybe(types.string),
    contacted_users: types.optional(types.array(types.string), []),
    status: types.maybe(types.string),
    isVisible: types.maybe(types.boolean),
    lenguajes_prog: types.maybe(types.string),
    linea_negocio: types.maybe(types.string),
    ciudad: types.maybe(types.string),
    imageUrl: types.maybe(types.string),
    entregables: types.optional(types.array(types.string), []),
    methodology_list: types.optional(types.array(types.string), []),
    voice_noite: types.optional(types.array(types.string), []),
    url_voice: types.optional(types.array(types.string), []),
    problema_seleccion: types.maybe(types.string),
    causa_empresa: types.maybe(types.string),
    causa_seleccion: types.maybe(types.string),
    nivle_ingles: types.maybe(types.string),
    objetivos: types.maybe(types.string),
    _id: types.maybe(types.string),
    fecha_inicio: types.maybe(types.string),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Project extends Instance<typeof ProjectModel> {}
export interface ProjectSnapshotOut extends SnapshotOut<typeof ProjectModel> {}
export interface ProjectSnapshotIn extends SnapshotIn<typeof ProjectModel> {}
export const createProjectDefaultModel = () => types.optional(ProjectModel, {})
