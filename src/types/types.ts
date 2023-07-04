import { string } from "yup";

export type loginData = {
  user: {
    id: string;
  };
  token: string;
};
export type token = string;
export interface getUser {
  id: string | null;
  name: string | null;
  email: string | null;
  course_module: string | null;
  bio: string | null;
  contact: string | null;
  techs: [];
  works: [];
  created_at: string | null;
  updated_at: string | null;
  avatar_url: string | null;
}
export interface registerResponse {
  id: string | null;
  name: string | null;
  email: string | null;
  course_module: string | null;
  bio: string | null;
  contact: string | null;
  created_at: string | null;
  updated_at: string | null;
  avatar_url: string | null;
}
export interface loginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    course_module: string;
    bio: string;
    contact: string;
    techs: [];
    works: [];
    created_at: string;
    updated_at: string;
    avatar_url: string;
  };
  token: string;
}
export interface responsetech {
  id: string;
  title: string;
  status: string;
  user: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}
export interface tech {
  title: string;
  status: string;
}
export interface objectregister {
  email: string | null;
  password: string | null;
  name: string | null;
  bio: string | null;
  contact: string | null;
  course_module: string | null;
}
export interface objectlogin {
  email: string;
  password: string;
}
