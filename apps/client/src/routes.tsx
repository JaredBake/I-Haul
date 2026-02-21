import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "src/components/layouts/RootLayout";
import { UserTypeSelection } from "src/pages/auth/UserTypeSelection";
import { Login } from "src/pages/auth/Login";
import { Signup } from "src/pages/auth/Signup";
import { DriverDashboard } from "src/pages/driver/DriverDashboard";
import { DriverEarnings } from "src/pages/driver/DriverEarnings";
import { DriverProfile } from "src/pages/driver/DriverProfile";
import { BusinessDashboard } from "src/pages/business/BusinessDashboard";
import { JobCreation } from "src/pages/business/JobCreation";
import { BusinessProfile } from "src/pages/business/BusinessProfile";

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
