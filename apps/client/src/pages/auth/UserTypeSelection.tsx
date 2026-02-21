import { useNavigate } from "react-router-dom";
import { Building2, Truck } from "lucide-react";
import { Card } from "../../components/ui/Card";

export function UserTypeSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2 text-gray-900 font-bold">
            Welcome to I-Haul
          </h1>
          <p className="text-gray-600">Choose how you'd like to continue</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Business Card */}
          <Card
            className="p-8 cursor-pointer hover:shadow-xl transition-all hover:scale-105 border-2 border-gray-200 hover:border-[#2563EB] bg-white rounded-lg"
            onClick={() => navigate("/login?type=business")}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#2563EB] bg-opacity-10 flex items-center justify-center mb-4">
                <Building2 className="w-10 h-10 text-[#2563EB]" />
              </div>
              <h2 className="text-2xl mb-2 text-gray-900 font-semibold">
                I'm a Business
              </h2>
              <p className="text-gray-600 mb-6">
                Post jobs and connect with qualified drivers to transport your
                goods
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  Post freight jobs instantly
                </li>
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  Track deliveries in real-time
                </li>
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  Manage your shipment history
                </li>
              </ul>
            </div>
          </Card>

          {/* Driver Card */}
          <Card
            className="p-8 cursor-pointer hover:shadow-xl transition-all hover:scale-105 border-2 border-gray-200 hover:border-[#2563EB] bg-white rounded-lg"
            onClick={() => navigate("/login?type=driver")}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#10B981] bg-opacity-10 flex items-center justify-center mb-4">
                <Truck className="w-10 h-10 text-[#10B981]" />
              </div>
              <h2 className="text-2xl mb-2 text-gray-900 font-semibold">
                I'm a Driver
              </h2>
              <p className="text-gray-600 mb-6">
                Browse available jobs and earn money hauling freight on your
                schedule
              </p>
              <ul className="text-left text-sm text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  Browse high-paying jobs
                </li>
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  Set your own schedule
                </li>
                <li className="flex items-start">
                  <span className="text-[#10B981] mr-2">✓</span>
                  Track your earnings
                </li>
              </ul>
            </div>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[#2563EB] hover:underline font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
