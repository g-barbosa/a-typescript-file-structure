export interface IBaseRepository {
  create: (data: any) => any
  get: (data: any) => Promise<any>
  getById: (data: any) => Promise<any>
  update: (data: any) => Promise<any>
  delete: (data: any) => Promise<any>
}
