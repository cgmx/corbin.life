import Grid from 'material-ui/Grid'


const PostStreamGrid = (props) => (
    <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        spacing={24}
        className="PostGrid-PushDown"
    >
        {props.children}
    </Grid>
)

export default PostStreamGrid