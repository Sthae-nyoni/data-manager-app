import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import useStyles from './styles'



interface Props
{
    default_values: Item[];
}

function ResetSettings({ default_values }: Props)
{
    const styles = useStyles();
    return (
        <Container className={styles.container}>
            <PageTitle />
            <Paper>
                <Grid container spacing={2}>
                    {default_values.map(value => <DataItem key={value.name} name={value.name} value={value.value} />)}
                </Grid>
            </Paper>
            <ResetButton />
        </Container>
    )
}

function PageTitle()
{
    const styles = useStyles();
    return (
        <>
            <div className={styles.toolbar} />
            <Typography variant='h4' >Reset values to the defaults given below</Typography>
            <div className={styles.toolbar} />
        </>
    )
}


function ResetButton()
{
    const styles = useStyles();
    return (
        <>
            <div className={styles.toolbar} />
            <Button variant='contained' color='primary' size='large'>Reset</Button>
        </>
    )
}

interface Item
{
    name: string;
    value: number;
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