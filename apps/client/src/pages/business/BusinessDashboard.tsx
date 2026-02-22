import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export function BusinessDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl text-gray-900 font-bold">
            Business Dashboard
          </h1>
          <Button
            onClick={() => navigate("/business/create-job")}
            className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
        </div>
      </header>

      <div className="px-4 py-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-6">
          <Card className="p-4">
            <div className="text-2xl font-bold text-[#2563EB] mb-1">8</div>
            <div className="text-sm text-gray-600">Active Jobs</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-[#10B981] mb-1">15</div>
            <div className="text-sm text-gray-600">Completed</div>
          </Card>
          <Card className="p-4">
            <div className="text-2xl font-bold text-[#F59E0B] mb-1">
              $24,500
            </div>
            <div className="text-sm text-gray-600">Total Spent</div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Jobs
          </h2>
          <div className="space-y-3">
            <div className="border-b border-gray-200 pb-3">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-gray-900">
                  Chicago → Milwaukee
                </span>
                <span className="text-green-600 font-semibold">$850</span>
              </div>
              <p className="text-sm text-gray-600">
                Palletized Goods • 2,400 lbs
              </p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-gray-900">
                  Gary → Indianapolis
                </span>
                <span className="text-amber-600 font-semibold">$1,250</span>
              </div>
              <p className="text-sm text-gray-600">
                Heavy Machinery • 3,800 lbs
              </p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <span className="font-medium text-gray-900">
                  Naperville → Aurora
                </span>
                <span className="text-blue-600 font-semibold">$425</span>
              </div>
              <p className="text-sm text-gray-600">Electronics • 850 lbs</p>
            </div>
          </div>
        </Card>

        <div className="mt-6">
          <Button
            onClick={() => navigate("/driver/profile")}
            variant="outline"
            className="w-full"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
