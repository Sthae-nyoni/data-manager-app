import { Button, Container, Grid, TextField } from "@material-ui/core";
import { ChangeEvent, FormEvent, useState } from 'react';
import useStyles from './styles';




interface FormObject
{
    [key: string]: string;
}

interface Props
{
    values: { label: string, name: string }[];
    form_object: FormObject;
}

function Settings({ form_object, values }: Props)
{

    const [default_values, setDefaultValues] = useState(form_object);
    const styles = useStyles();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setDefaultValues({ ...default_values, [e.target.name]: e.target.value });


    function handleFormSubmission(e: FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        console.log(default_values);
    }

    return (
        <Container className={styles.container}>
            <form onSubmit={handleFormSubmission}>
                <Grid container spacing={3}>
                    {values.map(value => <DataField key={value.name} name={value.name} label={value.label} value={default_values[value.name]} handleChange={handleChange} />)}
                    <Grid item >
                        <Button variant='contained' type='submit' size='large' color='primary'>Apply</Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}


interface DataFieldProps
{
    name: string;
    label: string;
    value: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function DataField({ name, label, value, handleChange }: DataFieldProps)
{

    return (
        <Grid item xs={12}>
            <TextField name={name} value={value} onChange={handleChange} fullWidth variant='filled' label={label} />
        </Grid>
    )

}

export default Settings;