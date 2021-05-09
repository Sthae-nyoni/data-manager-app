import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { FormEvent, useState } from "react";
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
            <DataForm />
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



function DataForm()
{
    const [day_package_reading, setDayPackageReading] = useState('');
    const [night_package_reading, setNightPackageReading] = useState('');
    const [comment, setComment] = useState('');

    const handleFormSubmission = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(`submitted with day_pakage_reading: ${day_package_reading} night_package_reading: ${night_package_reading} comment: ${comment}`);
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField fullWidth value={day_package_reading} onChange={e => setDayPackageReading(e.target.value)} required variant='outlined' label='Day package reading' />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth required value={night_package_reading} onChange={e => setNightPackageReading(e.target.value)} variant='outlined' label='Night package reading' />
                </Grid>
                <Grid item xs={12} >
                    <TextField multiline fullWidth value={comment} onChange={e => setComment(e.target.value)} variant='outlined' label='Comment' rows={6} />
                </Grid>
                <Grid item >
                    <Button type='submit' variant='contained' size='large' color='primary'>Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}


export default Add;