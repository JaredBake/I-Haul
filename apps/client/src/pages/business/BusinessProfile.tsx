import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function BusinessProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="bg-white border-b border-gray-200">
        <div className="px-4 py-4">
          <button
            onClick={() => navigate("/business/dashboard")}
            className="text-[#2563EB] hover:underline mb-4"
          >
            ← Back
          </button>
          <h1 className="text-2xl text-gray-900 font-bold">Business Profile</h1>
        </div>
      </header>
      <div className="px-4 py-6 max-w-2xl mx-auto">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-2xl font-bold">
              AC
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Acme Corporation
              </h2>
              <p className="text-gray-600">Member since 2022</p>
            </div>
          </div>

          <div className="space-y-4 border-t border-gray-200 pt-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Company Name
              </label>
              <p className="text-gray-600">Acme Corporation</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Email
              </label>
              <p className="text-gray-600">contact@acme.com</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Phone
              </label>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Address
              </label>
              <p className="text-gray-600">
                1234 Business Ave, Chicago, IL 60601
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
            <Button variant="destructive" className="w-full">
              Logout
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
