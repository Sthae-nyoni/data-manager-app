import { makeStyles } from "@material-ui/core";

import { drawer_width } from '../sidenav/styles'

const useStyles = makeStyles(theme => ({
    appbar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawer_width}px)`,
            marginLeft: drawer_width,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
})
);

export default useStyles;