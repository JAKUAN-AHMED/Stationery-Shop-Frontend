import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import DashboardLayout from "./DashboardLayout";


const Dashboard = () => {
    const token=useAppSelector(useCurrentToken);
    let user=null;
    if(token){
        user=verifyToken(token);
    }
    return (
        <div>
            {
                user?.role==='admin'?
                <DashboardLayout></DashboardLayout>:
                <h1>Not Authorized</h1>
            }
        </div>
    );
};

export default Dashboard;