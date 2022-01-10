import { EmailOptions } from "joi";

type TUser = {
  name: string,
  surname: string,
  password: string,
  email: EmailOptions,
  created_at: Date,
  updated_at: Date
}

type TGetuser = {
  password: string,
  email: EmailOptions,
}

