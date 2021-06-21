import { get } from "api/instance/request";
import { IUser } from "./types/user";

export const getUser = () => get<IUser>("/user");