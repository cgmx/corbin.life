import NavBar from '../components/NavBar'

var styles = {
    header: {
        marginTop: '200px'
    }
}

export default () => (
    <div>
        <NavBar />
        <h1 style={styles.header}>ARCHIVE PAGE</h1>
    </div>
)