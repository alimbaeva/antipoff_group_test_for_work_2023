export interface CreateUserI {
  name: string;
  email: string;
  password: string;
}
export interface SetUserInfoI {
  name: string;
  email: string;
  password: string;
  id: string;
  creadAt: string;
}
export interface UserI {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}
