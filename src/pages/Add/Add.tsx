import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { DataForm } from "../../components";
import useStyles from './styles';


interface AddProps
{
    previous_reading: DataReadingDisplayProps[];
}

function Add({ previous_reading }: AddProps)
{
    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <PreviousReading data_items={previous_reading} />
            <DataForm form_title='Add recent usage recording' />
        </Container>
    )
}

interface PreviousReadingProps
{
    data_items: DataReadingDisplayProps[];
}

function PreviousReading({ data_items }: PreviousReadingProps)
{
    const styles = useStyles()
    return (
        <Paper className={styles.spacing}>
            <Grid container spacing={2}>
                {data_items.map(item => <DataReadingDisplay key={item.title} title={item.title} value={item.value} />)}
            </Grid>
        </Paper >
    )
}


interface DataReadingDisplayProps
{
    title: string;
    value: number;
}

function DataReadingDisplay({ title, value }: DataReadingDisplayProps)
{
    return (
        <Grid item md={6}>
            <Container>
                <Typography variant='body2' color='textSecondary'>{title}</Typography>
                <Typography variant='h5' >{value}</Typography>
            </Container>
        </Grid>
    )
}





export default Add;