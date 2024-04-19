import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo";

export default function Header() {
    const navigate = useNavigate();

    return (
        <header className="grid grid-cols-[auto,1fr,auto] h-20 shadow px-8 gap-8">
            <div className="h-full flex items-center">
                <Link to="/" className="flex size-14">
                    <Logo />
                </Link>
            </div>
            <ul className="flex flex-row justify-start items-center [&>li]:px-4 font-semibold">
                {/* {headerLinks.map((link) => (
                    <li key={link.path}>
                        <NavLink to={link.path} >
                            {link.label}
                        </NavLink>
                    </li>
                ))} */}
            </ul>
            <div className="h-full flex items-center gap-4">
                <Button 
                    variant="secondary" 
                    className="rounded-full"
                    onClick={() => navigate('/login')}
                >
                    Iniciar Sesión
                </Button>
                <Button 
                    className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    variant="secondary"
                    onClick={() => navigate('/register')}
                >
                    Registrarse
                </Button>
            </div>
        </header>
    )
}