import { makeStyles } from "@material-ui/core";
import lightBlue from '@material-ui/core/colors/lightBlue'



const useStyles = makeStyles(theme => ({

    container: {
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('xs')]: {
            width: '95%',
            marginRight: 'auto',
            marginLeft: 'auto',
        }
    },
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
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    formControl: {
        // margin: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    avatar: {
        backgroundColor: lightBlue[600],
    },
}));

export default useStyles;