// Shared request/response contracts for jobs.
export interface CreateJobRequest {
  pickupLocation: string;
  dropoffLocation: string;
  itemDescription: string;
  priceOfferedCents: number;
  pickupWindowStart: string;
  pickupWindowEnd: string;
  dropoffWindowStart: string;
  dropoffWindowEnd: string;
}

export interface JobSummary {
  id: string;
  pickupLocation: string;
  dropoffLocation: string;
  priceOfferedCents: number;
  status: "draft" | "posted" | "accepted" | "in_progress" | "completed" | "canceled";
}
