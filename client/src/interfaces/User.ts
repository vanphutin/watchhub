export interface UserLogin {
  username: string;
  password: string;
}
type Status = "active" | "blocked";
type Role = "user" | "admin";

export interface User {
  accessToken: string;
  user_id: string;
  username: string;
  avatar: string;
  is_vip: number;
  status: Status;
  role: Role;
  created_at: string;
  updated_at: string;
}
