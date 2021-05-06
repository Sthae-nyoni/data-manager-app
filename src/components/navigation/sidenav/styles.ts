import { makeStyles } from "@material-ui/core";

export const drawer_width = 240

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawer_width,
            flexShrink: 0,
        },
       
    }
}))

export default useStyles;