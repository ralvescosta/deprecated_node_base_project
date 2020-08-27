export class UserDatasource {
  constructor (
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public createdAt: Date,
    public UpdatedAt: Date
  ) {}
}
