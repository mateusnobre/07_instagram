import UsuarioPrincipal from './UsuarioPrincipal';
import Sugestoes from './Sugestoes';
import Links from './Links';
import Copyright from './Copyright';

export default function Sidebar() {
    return(
        <div class='sidebar'>
            <UsuarioPrincipal image="assets/img/catanacomics.svg" username="catanacomics" name="Catana"/>
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}