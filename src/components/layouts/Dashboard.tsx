import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import DashboardLayout from "./DashboardLayout";
import UserLayout from "./userDashboardLayout";

const Dashboard = () => {
    const token=useAppSelector(useCurrentToken);
    let user=null;
    if(token){
        user=verifyToken(token);
    }
    return (
      <div>
        {user?.role === "admin" ? (
          <DashboardLayout></DashboardLayout>
        ) : (
          <UserLayout></UserLayout>
        )}
      </div>
    );
};

export default Dashboard;