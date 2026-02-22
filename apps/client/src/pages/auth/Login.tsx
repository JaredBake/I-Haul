import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Building2, Truck, Mail, Lock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";

export function Login() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userType = searchParams.get("type") || "business";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect based on user type
    if (userType === "driver") {
      navigate("/driver/dashboard");
    } else {
      navigate("/business/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 bg-white rounded-lg">
        <div className="text-center mb-8">
          <div
            className={`w-16 h-16 rounded-full ${
              userType === "driver" ? "bg-[#10B981]" : "bg-[#2563EB]"
            } bg-opacity-10 flex items-center justify-center mx-auto mb-4`}
          >
            {userType === "driver" ? (
              <Truck className={`w-8 h-8 text-[#10B981]`} />
            ) : (
              <Building2 className={`w-8 h-8 text-[#2563EB]`} />
            )}
          </div>
          <h1 className="text-3xl mb-2 text-gray-900 font-bold">
            {userType === "driver" ? "Driver" : "Business"} Login
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white border-gray-300"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-white border-gray-300"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <button
              type="button"
              className="text-sm text-[#2563EB] hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-6 text-base"
          >
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate(`/signup?type=${userType}`)}
              className="text-[#2563EB] hover:underline font-medium"
            >
              Sign up
            </button>
          </p>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-600 hover:underline"
          >
            ← Back to user selection
          </button>
        </div>
      </Card>
    </div>
  );
}
