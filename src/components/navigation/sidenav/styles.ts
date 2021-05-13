import { makeStyles } from "@material-ui/core";

export const drawer_width = 240

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawer_width,
        [theme.breakpoints.up('md')]: {
            flexShrink: 0,
        },
    }
}))

export default useStyles;