import Story from './Story';
import Setinha from './Setinha';

export default function Stories() {
    const storiesData = [["assets/img/9gag.svg",'9gag'],
                        ["assets/img/meowed.svg",'meowed'],
                        ["assets/img/barked.svg",'barked'],
                        ["assets/img/nathanwpylestrangeplanet.svg",'nathanwpylestrangeplanet'],
                        ["assets/img/wawawicomics.svg",'wawawicomics'],
                        ["assets/img/respondeai.svg",'respondeai'],
                        ["assets/img/filomoderna.svg",'filomoderna'],
                        ["assets/img/memeriagourmet.svg",'memeriagourmet']]
 
    return(
        <div class='stories'>			
            {storiesData.map(data => <Story image={data[0]} username={data[1]}/>)}
            <Setinha />
        </div>
    );
}