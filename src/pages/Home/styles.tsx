import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    paper: {
      //  height: 100,
        paddingTop: theme.spacing(3)
    },
    value: {
        marginLeft: theme.spacing(2)
    },
    description: {
        marginLeft: theme.spacing(1)
    },
    table: {
   //     minWidth: 650,
    },
    section: {
        marginTop: theme.spacing(5)
    }

}));

export default useStyles;
