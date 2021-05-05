import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({

    title: {
        marginBottom: theme.spacing(2)
    },
    flex_container: {
        display: 'flex'
    },
    spacing: {
        maringRight: theme.spacing(2)
    },
    parameter_control_section: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(3)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default useStyles;