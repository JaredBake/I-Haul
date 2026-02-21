import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";

export function DriverEarnings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 py-4">
          <button
            onClick={() => navigate("/driver/dashboard")}
            className="text-[#2563EB] hover:underline mb-4"
          >
            ← Back
          </button>
          <h1 className="text-2xl text-gray-900 font-bold">Your Earnings</h1>
        </div>
      </header>
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <Card className="p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">$12,450</h2>
          <p className="text-gray-600 mb-6">Total earnings this month</p>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#2563EB]">28</div>
              <div className="text-sm text-gray-600">Jobs Completed</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#10B981]">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#F59E0B]">432</div>
              <div className="text-sm text-gray-600">Miles Driven</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
