import NavBar from '../../components/NavBar'

var styles = {
    header: {
        marginTop: '200px'
    }
}

export default () => (
    <div>
        <NavBar />
        <h1 style={styles.header}>First blog post</h1>
    </div>
)