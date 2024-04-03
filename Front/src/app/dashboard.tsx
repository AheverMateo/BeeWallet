import { Outlet } from "react-router-dom"

export default function Dashboard() {
    return (
        <div className="size-full bg-red">
            <Outlet />
        </div>
    )
}