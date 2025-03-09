import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export interface User {
  id: number;
  email: string;
  name?: string;
}

export interface AuthPayload {
  token: string;
  user: User;
}

export interface LoginMutationResponse {
  login: AuthPayload;
}

export interface RegisterMutationResponse {
  register: AuthPayload;
}

export interface LogoutResponse {
  success: boolean;
  message?: string;
}

export interface LogoutMutationResponse {
  logout: LogoutResponse;
}
