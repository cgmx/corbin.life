import Card, { CardActions, CardContent, CardMedia, CardHeader } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'


const PostImageCard = (props) => (
    <Card className="PostImageCard" xs={6} sm={4}>
        <CardHeader
            avatar={
            <Avatar aria-label="Avatar" src="/static/i/p.jpg" />
            }
            title="Corbin Matschull"
            subheader="November 2, 2017"
        />
        <CardMedia
            className="PostImageCard_ImageHeight"
            image={props.previewImageLink}
            title={props.imageTitle}
        />
        <CardContent>
            <Typography type="headline" component="h2">
                {props.headline}
            </Typography>
            <Typography component="p">
                {props.shortDesc}
            </Typography>
        </CardContent>
        <CardActions>
            <Button dense color="primary" href={props.postLink}>
                Read More
            </Button>
        </CardActions>
    </Card>
)

export default PostImageCard