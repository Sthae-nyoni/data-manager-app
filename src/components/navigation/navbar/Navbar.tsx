import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from './styles'

function Navbar()
{
    const styles = useStyles();
    return (
        <AppBar elevation={0} className={styles.appbar} >
            <Toolbar>
                <Typography variant='h5'>Home</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;