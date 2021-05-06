import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(3)
    },
    graph_container: {
        marginTop:theme.spacing(5)
    },
    info_container: {
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(1)
    },

})
);

export default useStyles;