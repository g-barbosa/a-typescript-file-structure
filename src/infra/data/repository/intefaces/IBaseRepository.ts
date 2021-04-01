export interface IBaseRepository {
  create: (data: any) => any
  get: (data: any) => Promise<any>
  getById: (id: string) => Promise<any>
  update: (id: string) => Promise<any>
  delete: (id: string) => Promise<any>
}
