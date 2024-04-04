import { Outlet } from "react-router-dom"
import { DashboardSidebar } from "./ui/dahsboard-sidebar"

export default function Dashboard() {
    return (
        <div className="size-full">
            <DashboardSidebar />
            <div>
                <Outlet />
            </div>
        </div>
    )
}