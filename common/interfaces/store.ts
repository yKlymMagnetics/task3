import { IUser } from "./user";

export interface IRootStoreState {
    users: IUser[] | null;
}