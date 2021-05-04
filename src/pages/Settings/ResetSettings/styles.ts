import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    container: {
        margingTop: theme.spacing(5)
    },
    data_item: {
        display: 'flex',
        marginLeft: theme.spacing(3)
    },
    filler: {
        flexGrow: 1
    }
}))

export default useStyles;