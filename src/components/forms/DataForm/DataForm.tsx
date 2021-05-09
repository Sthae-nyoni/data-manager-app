import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { useState, FormEvent } from 'react';

interface DataFormProps
{
    form_title: string;
    should_comment?: boolean;
}

function DataForm({ form_title, should_comment }: DataFormProps)
{
    const [day_package_reading, setDayPackageReading] = useState('');
    const [night_package_reading, setNightPackageReading] = useState('');
    const [comment, setComment] = useState('');

    function handleFormSubmission(e: FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        console.log(`submitted with day_pakage_reading: ${day_package_reading} night_package_reading: ${night_package_reading} comment: ${comment}`);
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h5' >{form_title}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth value={day_package_reading} onChange={e => setDayPackageReading(e.target.value)} required variant='outlined' label='Day package reading' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth required value={night_package_reading} onChange={e => setNightPackageReading(e.target.value)} variant='outlined' label='Night package reading' />
                </Grid>
                <Grid item xs={12} >
                    <TextField multiline required={should_comment} fullWidth value={comment} onChange={e => setComment(e.target.value)} variant='outlined' label='Comment' rows={6} />
                </Grid>
                <Grid item >
                    <Button type='submit' variant='contained' size='large' color='primary'>Submit</Button>
                </Grid>
            </Grid>
        </form >
    )
}

export default DataForm;