
import { Button, Container, Grid, TextField } from "@material-ui/core";
import useStyles from './styles';


function AddCustomSession()
{
    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <DataForm />
        </Container>
    )
}


function DataForm()
{
    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField fullWidth required variant='outlined' label='Day package initial reading' />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth required variant='outlined' label='Night package initial reading' />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth required variant='outlined' label='Observer name' />
                </Grid>
                <Grid item xs={12} >
                    <TextField multiline fullWidth variant='outlined' label='Comment' rows={6} />
                </Grid>
                <Grid item >
                    <Button variant='contained' size='large' color='primary'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}


export default AddCustomSession;