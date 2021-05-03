export default function UsuarioPrincipal(props) {
    return(
        <div class="usuario">
            <img src={props.image} alt='User'/>
            <div class="texto">
              <strong>{props.username}</strong>
              {props.name}
            </div>
        </div>
    );
}