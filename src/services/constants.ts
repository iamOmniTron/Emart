export interface IUserRegInfo {
  firstname: string;
  lastname: string;
  googleId: string;
  email: string;
  imageUrl?: string;
}

export interface IUserUpdateData {
  firstname?: string;
  lastname?: string;
  phone?: string;
  imageUrl?: string;
}
