import ReactDOM from 'react-dom'

function Logo() {
    return(
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    );
}
function LogoMobile() {
    return(
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>
    );
}

function InstagramMobile() {
    return(
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>
    );
}

function Pesquisa() {
    return(
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    );
}
function Icones() {
    return(
          <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>
    );
}

function IconesMobile() {
    return(
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}
function Navbar() {
    return(
        <div class ='container'>
            <Logo />
            <LogoMobile />
            <InstagramMobile />
            <Pesquisa />
            <Icones />
            <IconesMobile />
        </div>
    );
}

function Esquerda() {
    return(
        <div>
            <Stories />
            <Posts />
        </div>
    );
}

function Stories() {
    const storiesData = [["assets/img/9gag.svg",'9gag'],
                        ["assets/img/meowed.svg",'meowed'],
                        ["assets/img/barked.svg",'barked'],
                        ["assets/img/nathanwpylestrangeplanet.svg",'nathanwpylestrangeplanet'],
                        ["assets/img/wawawicomics.svg",'wawawicomics'],
                        ["assets/img/respondeai.svg",'respondeai'],
                        ["assets/img/filomoderna.svg",'filomoderna'],
                        ["assets/img/memeriagourmet.svg",'memeriagourmet']]
 
    return(
        <div>			
            {storiesData.map(data => <Story image={data[0]} username={data[1]}/>)}
            <Setinha />
        </div>
    );
}

function Story(props) {
    return(
            <div class="story">
              <div class="imagem">
                <img src={props.image} />
              </div>
              <div class="usuario">
                {props.username}
              </div>
            </div>
    );
}

function Posts() {
    const postsData = [
        ["assets/img/meowed.svg", 'meowed', "assets/img/gato-telefone.svg", "assets/img/respondeai.svg", 'respondeai', '101.523'],
        ["assets/img/barked.svg", 'barked', "assets/img/dog.svg", "assets/img/adorable_animals.svg", 'adorable_animals', '99.159']
    ]
    return(
        <div>
            {postsData.map(data => <Post image={data[0]} username={data[1]} content={data[2]} likedByImage={data[3]} likedByUsername={data[4]} likes={data[5]}/>)}
        </div>
    );
}

function Post(props) {
    return(
        <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.image} />
                  {props.username}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.content} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.likedByImage} />
                  <div class="texto">
                    Curtido por <strong>{props.likedByUsername}</strong> e <strong>outras {props.likes} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    );
}

function Setinha() {
    return(
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
    );
}

function Sidebar() {
    return(
        <div>
            <UsuarioPrincipal image="assets/img/catanacomics.svg" username="catanacomics" name="Catana"/>
            <Sugestoes />
            <Links />
            <Copyright />
        </div>
    );
}

function UsuarioPrincipal(props) {
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

function Titulo(){
    return(
        <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
        </div>
    );
}
function Sugestoes() {
    return(
        <div>
            <Titulo />
        </div>
    );
}

function Sugestao(props) {
    return(
            <div class="sugestao">
              <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                  <div class="nome">{props.username}</div>
                  <div class="razao">{props.reason}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>
    );
}

function Links() {
    return(
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    );
}

function Copyright() {
    return(
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    );
}

function FundoMobile() {
    return(
        <div class="fundo-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

function Corpo() {
    return(
        <div>
            <Esquerda />
            <Sidebar />
            <FundoMobile />
        </div>
    );
}




ReactDOM.render(<Corpo />, document.querySelector(".root"));
