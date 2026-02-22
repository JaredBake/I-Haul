import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/components/layouts/RootLayout";
import { UserTypeSelection } from "@/pages/auth/UserTypeSelection";
import { Login } from "@/pages/auth/Login";
import { Signup } from "@/pages/auth/Signup";
import { DriverDashboard } from "@/pages/driver/DriverDashboard";
import { DriverEarnings } from "@/pages/driver/DriverEarnings";
import { DriverProfile } from "@/pages/driver/DriverProfile";
import { BusinessDashboard } from "@/pages/business/BusinessDashboard";
import { JobCreation } from "@/pages/business/JobCreation";
import { BusinessProfile } from "@/pages/business/BusinessProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: UserTypeSelection },
      { path: "login", Component: Login },
      { path: "signup", Component: Signup },

      // Driver routes
      { path: "driver/dashboard", Component: DriverDashboard },
      { path: "driver/earnings", Component: DriverEarnings },
      { path: "driver/profile", Component: DriverProfile },

      // Business routes
      { path: "business/dashboard", Component: BusinessDashboard },
      { path: "business/create-job", Component: JobCreation },
      { path: "business/profile", Component: BusinessProfile },
    ],
  },
]);
