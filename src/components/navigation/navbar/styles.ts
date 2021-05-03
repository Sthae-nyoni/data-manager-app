import { makeStyles } from "@material-ui/core";

import {drawer_width} from '../sidenav/styles'

const useStyles = makeStyles({
    appbar: {
        width: `calc(100% - ${drawer_width}px)`
    }
});

export default useStyles;