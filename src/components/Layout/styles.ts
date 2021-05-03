import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    container: {
        display: 'flex'
    },
    page_content: {
        width: '100%'
    }
})
)

export default useStyles;