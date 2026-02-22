import { MapPin, Package, Ruler, Weight } from "lucide-react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";

export type JobStatus =
  | "draft"
  | "posted"
  | "active"
  | "completed"
  | "cancelled";

export interface Job {
  id: string;
  price: number;
  date: string;
  time: string;
  pickupLocation: string;
  pickupAddress: string;
  dropoffLocation: string;
  dropoffAddress: string;
  weight: number;
  distance: number;
  itemType: string;
  dimensions?: string;
  status: JobStatus;
  posterName?: string;
  driverName?: string;
}

interface JobCardProps {
  job: Job;
  onClick?: () => void;
  showAction?: boolean;
  actionLabel?: string;
  onAction?: () => void;
}

const statusConfig: Record<JobStatus, { color: string; label: string }> = {
  draft: { color: "bg-gray-200 text-gray-700", label: "Draft" },
  posted: { color: "bg-[#2563EB] text-white", label: "Posted" },
  active: { color: "bg-[#F59E0B] text-white", label: "In Progress" },
  completed: { color: "bg-[#10B981] text-white", label: "Completed" },
  cancelled: { color: "bg-gray-400 text-white", label: "Cancelled" },
};

export function JobCard({
  job,
  onClick,
  showAction,
  actionLabel,
  onAction,
}: JobCardProps) {
  const statusInfo = statusConfig[job.status];

  const cardContent = (
    <>
      {/* Header: Price + Date/Time + Status */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-3xl text-[#10B981] mb-1">
            ${job.price.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">
            {job.date} • {job.time}
          </div>
        </div>
        <Badge className={`${statusInfo.color} rounded-full px-3 py-1`}>
          {statusInfo.label}
        </Badge>
      </div>

      {/* Body: Route Timeline */}
      <div className="mb-4 relative">
        {/* Pickup */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-[#2563EB] mt-1"></div>
            <div className="w-0.5 h-12 bg-gray-300 my-1"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Pickup</span>
            </div>
            <div className="font-medium text-gray-900">
              {job.pickupLocation}
            </div>
            <div className="text-sm text-gray-600">{job.pickupAddress}</div>
          </div>
        </div>

        {/* Dropoff */}
        <div className="flex items-start gap-3">
          <div className="w-3 h-3 rounded-full bg-[#10B981] mt-1"></div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Drop-off</span>
            </div>
            <div className="font-medium text-gray-900">
              {job.dropoffLocation}
            </div>
            <div className="text-sm text-gray-600">{job.dropoffAddress}</div>
          </div>
        </div>
      </div>

      {/* Footer: Metadata Pills */}
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge
          variant="outline"
          className="rounded-full bg-gray-50 border-gray-300 text-gray-700"
        >
          <Weight className="w-3 h-3 mr-1" />
          {job.weight} lbs
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full bg-gray-50 border-gray-300 text-gray-700"
        >
          <Ruler className="w-3 h-3 mr-1" />
          {job.distance} mi
        </Badge>
        <Badge
          variant="outline"
          className="rounded-full bg-gray-50 border-gray-300 text-gray-700"
        >
          <Package className="w-3 h-3 mr-1" />
          {job.itemType}
        </Badge>
        {job.dimensions && (
          <Badge
            variant="outline"
            className="rounded-full bg-gray-50 border-gray-300 text-gray-700"
          >
            {job.dimensions}
          </Badge>
        )}
      </div>

      {/* Action Button */}
      {showAction && actionLabel && onAction && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAction();
          }}
          className="w-full py-2.5 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </>
  );

  // If onClick is provided, wrap the card in a button for accessibility
  if (onClick) {
    return (
      <button
        type="button"
        className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 rounded-lg"
        onClick={onClick}
      >
        <Card className="p-4 cursor-pointer hover:shadow-lg transition-shadow border border-gray-200 bg-white rounded-lg">
          {cardContent}
        </Card>
      </button>
    );
  }

  // Otherwise, render as a non-interactive card
  return (
    <Card className="p-4 border border-gray-200 bg-white rounded-lg">
      {cardContent}
    </Card>
  );
}
