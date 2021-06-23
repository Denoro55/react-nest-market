export interface IDepartment {
  id: number;
  title: string;
  address: string;
}

export interface IUser {
  departments: IDepartment[];
}
