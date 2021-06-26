import {IUserAddress} from "./userAddress";

export interface IUser {
  name: string,
  userName: string,
  email: string,
  phone: string,
  address: IUserAddress
}
