import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import { grey } from 'material-ui/colors'
import Tooltip from 'material-ui/Tooltip'


const styles = {
    root: {
        flexGrow: 1,
        marginTop: 120
    },
    rootPaper: {
        padding: 15,
        marginTop: 'theme.spacing.unit * 3'
    },
    header: {
        color: 'rgba(0, 0, 0, 0.54)',
    },
    headerAuthorTag: {
        color: 'rgba(0, 0, 0, 0.54)',
        padding: '0 0 20px 0'
    },
    anchorLink: {
        margin: 10,
        opacity: 0
    },
    svgIcon: {
        width: 20,
        fill: grey[200]
    },
    postContent: {
        fontSize: '13pt'
    }
}



function RenderImagelessContent(props) {
    const gridItemState = {
        direction: 'column',
        justify: 'center',
        alignItems: 'center'
    }
    return (
        <Grid 
            container
            style={styles.root}
            direction={gridItemState.direction}
            justify={gridItemState.justify}
            alignItems={gridItemState.alignItems}
        >
            <Grid item sm={8} xs={6}>
                <Paper
                    style={styles.rootPaper}
                    elevation={0}
                >
                    <Typography
                        id="permalink-container"
                        type="display3"
                        style={styles.header}
                    >
                        {props.PostTitle}

                        <a id="permalink-anchor" href={props.PermaLinkAnchor} style={styles.anchorLink}>
                            <svg viewBox="0 0 48 48" xmlns="http://w3.org/2000/svg" style={styles.svgIcon}>
                                <path d="M46.9 13.9c-.5-.6-1.2-.94-2.07-.94h-6.67l1.86-8.98c.17-.85 0-1.7-.52-2.3-.48-.6-1.2-.94-2.07-.94-1.6 0-3.2 1.27-3.54 2.93l-.5 2.42c0 .07-.07.13-.07.2l-1.37 6.62H20.7l1.88-8.96c.16-.85 0-1.7-.53-2.3-.48-.6-1.2-.94-2.07-.94-1.65 0-3.2 1.27-3.56 2.93l-.52 2.58v.08l-1.37 6.64H7.3c-1.67 0-3.22 1.3-3.58 2.96-.16.86 0 1.7.52 2.3.48.6 1.2.93 2.07.93h6.97l-2 9.65H4c-1.67 0-3.22 1.27-3.56 2.94-.2.8 0 1.67.5 2.27.5.6 1.2.93 2.08.93H10l-1.84 9.05c-.2.84 0 1.67.52 2.3.5.6 1.25.92 2.08.92 1.66 0 3.2-1.3 3.55-2.94l1.94-9.33h11.22l-1.87 9.05c-.15.84.03 1.67.53 2.3.5.6 1.2.92 2.07.92 1.65 0 3.22-1.3 3.56-2.94l1.9-9.33h7c1.6 0 3.2-1.28 3.53-2.93.2-.87 0-1.7-.52-2.3-.48-.62-1.2-.96-2.05-.96h-6.7l2.02-9.65h6.93c1.67 0 3.22-1.27 3.56-2.92.2-.85 0-1.7-.5-2.3l-.04.03zM17.53 28.77l1.95-9.65H30.7l-1.97 9.66H17.5h.03z">
                                </path>
                            </svg>
                        </a>
                    </Typography>
                    <Typography type="subheading" style={styles.headerAuthorTag}>
                            by Corbin Matschull
                        </Typography>
                    <Typography type="body1" style={styles.postContent}>
                        {props.PostBody}
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

function RenderImageContent() {

}

class PostStream extends Component {
    isHeadlessContent = this.props.headlessContent;

    constructor(props) {
        super(props)

        this.state = {
            //  Default header image state to false for continuity
            hasHeaderImage: false,
        }
    }


    render() {
        if(this.isHeadlessContent) {
            return <RenderImagelessContent 
                        PostTitle={this.props.headerTitle}
                        PostBody={this.props.postBody}
                        PermaLinkAnchor={this.props.postBodyAnchor}
                    />
        }
        if(!this.isHeadlessContent) {
            return <RenderImageContent />
        }
    }
}

export default withStyles(styles) (PostStream)