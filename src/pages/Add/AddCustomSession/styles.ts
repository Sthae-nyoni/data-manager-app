import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    spacing: {
        marginBottom: theme.spacing(4)
    },
    container: {
        marginTop: theme.spacing(5),
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}));

export default useStyles;