import { Stack} from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine, RiProductHuntLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">

      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/" >Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users" >Clientes</NavLink>
        <NavLink icon={RiProductHuntLine} href="/products" >Produtos</NavLink>
      </NavSection>

   {/*    <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms">Formularios</NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
      </NavSection> */}


    </Stack>
  )
}