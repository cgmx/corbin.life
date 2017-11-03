import NavBar from '../components/NavBar'
import Header from '../components/head'
import PostStreamGrid from '../components/entry-stream/stream'
import PostImageCard from '../components/entry-stream/entry-card-with-image'

export default () => (
    <div>
        <Header />
        <NavBar />

        <PostStreamGrid>
            <PostImageCard
                previewImageLink="/static/i/p.jpg"
                imageTitle="Self Portrait"
                headline="A New Beginning With a Blog!"
                shortDesc="A new platform means new design! Enjoy this fresh Material Design blog thanks to MaterialUI!"
                postLink="/posts/p"
            />
        </PostStreamGrid>
    </div>
)