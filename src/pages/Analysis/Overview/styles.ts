import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(3)
    },
    graph_container: {
        marginTop:theme.spacing(7)
    },
    info_container: {
        height: 100,
        paddingLeft: theme.spacing(4),
        paddingTop: theme.spacing(2)
    },

})
);

export default useStyles;