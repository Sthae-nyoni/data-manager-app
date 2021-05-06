import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    title: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(2)
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    flex_container: {
        display: 'flex'
    },
    field: {
  //      width: '70%'
    },
    paper: {
        width: '80%',
        height: 100
    },
    container: {
   //     width: '50%',
        marginTop: theme.spacing(3),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    button: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2)
    }
}));

export default useStyles;