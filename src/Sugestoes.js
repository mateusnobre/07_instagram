import Titulo from './Titulo';
import Sugestao from './Sugestao';

export default function Sugestoes() {
    const suggestionsData = [
        ["assets/img/bad.vibes.memes.svg", 'bad.vibes.memes', 'Segue você'],
        ["assets/img/chibirdart.svg", 'chibirdart', 'Segue você'],
        ["assets/img/razoesparaacreditar.svg", 'razoesparaacreditar', 'Novo no Instagram'],
        ["assets/img/adorable_animals.svg", 'adorable_animals', 'Segue você'],
        ["assets/img/smallcutecats.svg", 'smallcutecats', 'Segue você'],
    ]
    return(
        <div class='sugestoes'>
            <Titulo />
            {suggestionsData.map(data => <Sugestao image={data[0]} username={data[1]} reason={data[2]}/>)}
        </div>
    );
}