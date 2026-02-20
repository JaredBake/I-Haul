// Shared request/response contracts for auth.
export interface SignUpRequest {
  email: string;
  password: string;
  role: "business" | "driver";
}

export interface SignUpResponse {
  userId: string;
}
