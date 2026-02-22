import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  MapPin,
  DollarSign,
  TrendingUp,
  User,
} from "lucide-react";
import { JobCard, Job } from "@/components/JobCard";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";

// Mock data
const mockJobs: Job[] = [
  {
    id: "1",
    price: 850,
    date: "Feb 22, 2026",
    time: "10:00 AM",
    pickupLocation: "Distribution Center",
    pickupAddress: "1234 Industrial Blvd, Chicago, IL",
    dropoffLocation: "Retail Hub",
    dropoffAddress: "5678 Commerce Dr, Milwaukee, WI",
    weight: 2400,
    distance: 92,
    itemType: "Palletized Goods",
    dimensions: "48 x 40 x 60",
    status: "posted",
  },
  {
    id: "2",
    price: 1250,
    date: "Feb 23, 2026",
    time: "8:00 AM",
    pickupLocation: "Manufacturing Plant",
    pickupAddress: "890 Factory Rd, Gary, IN",
    dropoffLocation: "Warehouse",
    dropoffAddress: "234 Storage Ln, Indianapolis, IN",
    weight: 3800,
    distance: 156,
    itemType: "Heavy Machinery",
    dimensions: "96 x 48 x 72",
    status: "posted",
  },
  {
    id: "3",
    price: 425,
    date: "Feb 21, 2026",
    time: "2:00 PM",
    pickupLocation: "Supply Depot",
    pickupAddress: "456 Logistics Way, Naperville, IL",
    dropoffLocation: "Store",
    dropoffAddress: "789 Retail St, Aurora, IL",
    weight: 850,
    distance: 28,
    itemType: "Electronics",
    status: "posted",
  },
];

export function DriverDashboard() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [activeJob, setActiveJob] = useState<Job | null>(null);

  const filters = [
    { id: "near-me", label: "Near Me", icon: MapPin },
    { id: "high-pay", label: "High Pay", icon: DollarSign },
    { id: "heavy-load", label: "Heavy Load", icon: TrendingUp },
  ];

  const handleAcceptJob = (job: Job) => {
    setActiveJob(job);
    setJobs((prevJobs) => prevJobs.filter((j) => j.id !== job.id));
    setSelectedJob(null);
    alert("Job accepted! Navigate to start your trip.");
  };

  const handleStartTrip = () => {
    if (activeJob) {
      setActiveJob({ ...activeJob, status: "active" });
      alert("Trip started! Safe travels.");
    }
  };

  const handleCompleteDelivery = () => {
    if (activeJob) {
      alert("Delivery completed! Rating modal would open here.");
      setActiveJob(null);
    }
  };

  const getActionLabel = () => {
    if (!activeJob) return "";
    if (activeJob.status === "posted") return "Start Trip";
    if (activeJob.status === "active") return "Confirm Delivery";
    return "";
  };

  const handleAction = () => {
    if (!activeJob) return;
    if (activeJob.status === "posted") {
      handleStartTrip();
    } else if (activeJob.status === "active") {
      handleCompleteDelivery();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl text-gray-900 font-bold">Browse Jobs</h1>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/driver/earnings")}
                className="p-2 hover:bg-gray-100 rounded-lg"
                aria-label="View earnings"
              >
                <DollarSign className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={() => navigate("/driver/profile")}
                className="p-2 hover:bg-gray-100 rounded-lg"
                aria-label="View profile"
              >
                <User className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by location, item type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white border-gray-300"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Badge
                  key={filter.id}
                  onClick={() =>
                    setSelectedFilter(
                      selectedFilter === filter.id ? null : filter.id,
                    )
                  }
                  className={`rounded-full px-4 py-2 cursor-pointer whitespace-nowrap ${
                    selectedFilter === filter.id
                      ? "bg-[#2563EB] text-white"
                      : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                  }`}
                  variant="outline"
                >
                  <Icon className="w-4 h-4 mr-1 inline" />
                  {filter.label}
                </Badge>
              );
            })}
          </div>
        </div>
      </header>

      {/* Active Job Banner */}
      {activeJob && (
        <div className="bg-[#F59E0B] text-white px-4 py-4">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                <span className="font-semibold">Current Job</span>
              </div>
              <span className="text-2xl">${activeJob.price}</span>
            </div>
            <div className="text-sm mb-3">
              {activeJob.pickupLocation} → {activeJob.dropoffLocation}
            </div>
            <Button
              onClick={handleAction}
              className="w-full bg-white text-[#F59E0B] hover:bg-gray-100"
            >
              {getActionLabel()}
            </Button>
          </div>
        </div>
      )}

      {/* Job Feed */}
      <div className="px-4 py-6 max-w-2xl mx-auto">
        {jobs.length === 0 ? (
          <Card className="p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Filter className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl mb-2 text-gray-900 font-semibold">
              No jobs found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your filters or check back later
            </p>
            <Button onClick={() => setSelectedFilter(null)} variant="outline">
              Clear Filters
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onClick={() => setSelectedJob(job)}
                showAction
                actionLabel="View Details"
                onAction={() => setSelectedJob(job)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Job Details Modal */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-lg">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle>Job Details</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl text-[#10B981] font-bold">
                    ${selectedJob.price.toLocaleString()}
                  </span>
                  <Badge className="bg-[#2563EB] text-white rounded-full">
                    Posted
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Pickup</div>
                    <div className="font-medium text-gray-900">
                      {selectedJob.pickupLocation}
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedJob.pickupAddress}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Drop-off</div>
                    <div className="font-medium text-gray-900">
                      {selectedJob.dropoffLocation}
                    </div>
                    <div className="text-sm text-gray-600">
                      {selectedJob.dropoffAddress}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Schedule</div>
                    <div className="text-gray-900">
                      {selectedJob.date} at {selectedJob.time}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Weight</div>
                      <div className="text-gray-900">
                        {selectedJob.weight} lbs
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Distance</div>
                      <div className="text-gray-900">
                        {selectedJob.distance} mi
                      </div>
                    </div>
                  </div>
                  {selectedJob.dimensions && (
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Dimensions
                      </div>
                      <div className="text-gray-900">
                        {selectedJob.dimensions} in
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  onClick={() => handleAcceptJob(selectedJob)}
                  className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-6"
                >
                  Accept Job
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
