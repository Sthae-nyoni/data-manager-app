import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from './styles'

interface Item
{
    name: string;
    value: number;
}

const default_values = [
    { name: 'Default optimal usage', value: 0.85 },
    { name: 'Default warning threshold', value: 1.05 },
    { name: 'Default over usage threshold', value: 1.50 },
    { name: 'Default under usage threshold', value: 0.25 },
]

function ResetSettings()
{
    const styles = useStyles();
    return (
        <Container className={styles.container}>
            <div className={styles.toolbar} />
            <Typography variant='h4' >Reset values to the defaults given below</Typography>
            <div className={styles.toolbar} />
            <Paper>
                <Grid container spacing={2}>
                    {default_values.map(value => <DataItem key={value.name} name={value.name} value={value.value} />)}
                </Grid>
            </Paper>
            <div className={styles.toolbar} />
            <Button variant='contained' color='primary' size='large'>Reset</Button>
        </Container>
    )
}


function DataItem({ name, value }: Item)
{
    const styles = useStyles();
    return (
        <Grid item xs={10} className={styles.data_item}>
            <Typography variant='h6' color='textSecondary'>{name} </Typography>
            <div className={styles.filler} />
            <Typography variant='h6' color='textSecondary'>{value} </Typography>
        </Grid>
    )
}

export default ResetSettings;