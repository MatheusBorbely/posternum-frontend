import { Button } from "@/components/ui/button"
import { Newspaper, SquareUser } from "lucide-react"
import Link from "next/link"

export default function NavItems() {
  const navItems = [
    {
      label: "Currículos",
      icon: Newspaper,
      path: "/dashboard/resumes"
    },
    {
      label: "Configurações de Conta",
      icon: SquareUser,
      path: "/dashboard/account"
    }
  ]
  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
        {navItems.map((item) => {
          return(
            <Link key={item.path} href={item.path} title={item.label}>
              <Button variant="ghost" className="w-full gap-2 justify-start">
                <item.icon size={16} />
                {item.label}
              </Button>
            </Link>
          )
        })}
    </nav>
  )
}
