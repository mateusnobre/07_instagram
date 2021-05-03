export default function Sugestao(props) {
    return(
            <div class="sugestao">
              <div class="usuario">
                <img src={props.image} alt='User'/>
                <div class="texto">
                  <div class="nome">{props.username}</div>
                  <div class="razao">{props.reason}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
    );
}