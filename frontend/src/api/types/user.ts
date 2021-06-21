export interface IDepartment {
  id: number;
  title: string;
}

export interface IUser {
  departments: IDepartment[];
}
