import Post from './Post';

export default function Posts() {
    const postsData = [
        ["assets/img/meowed.svg", 'meowed', "assets/img/gato-telefone.svg", "assets/img/respondeai.svg", 'respondeai', '101.523'],
        ["assets/img/barked.svg", 'barked', "assets/img/dog.svg", "assets/img/adorable_animals.svg", 'adorable_animals', '99.159']
    ]
    return(
        <div class='posts'>
            {postsData.map(data => <Post image={data[0]} username={data[1]} content={data[2]} likedByImage={data[3]} likedByUsername={data[4]} likes={data[5]}/>)}
        </div>
    );
}