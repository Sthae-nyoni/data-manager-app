import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import useStyles from './styles';


function Add()
{
    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <PreviousReading />
            <DataForm />
        </Container>
    )
}


function PreviousReading()
{
    const styles = useStyles()
    return (
        <Paper className={styles.spacing}>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <Container>
                        <Typography variant='body2' color='textSecondary'>Previous day package reading</Typography>
                        <Typography variant='h5' >23.56GB</Typography>
                    </Container>
                </Grid>
                <Grid item md={6}>
                    <Container>
                        <Typography variant='body2' color='textSecondary'>Previous night package reading</Typography>
                        <Typography variant='h5' >27.45GB</Typography>
                    </Container>
                </Grid>
            </Grid>
        </Paper>
    )
}

function DataForm()
{
    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField fullWidth required variant='outlined' label='Day package reading' />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth required variant='outlined' label='Night package reading' />
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


export default Add;