export default function UsuarioPrincipal(props) {
    return(
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
              <strong>{props.username}</strong>
              {props.name}
            </div>
        </div>
    );
}