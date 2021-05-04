import { Button, Container, Grid, TextField } from "@material-ui/core";

import useStyles from './styles'


interface DataFieldProps
{
    name: string;
}

const values = ['Optimal use', 'Warning threshold', 'Over usage threshold', 'Under usage threshold'];

function Settings()
{
    const styles = useStyles();
    return (
        <Container className={styles.container}>
            <Grid container spacing={3}>
                {values.map(value => <DataField key={value} name={value} />)}
                <Grid item >
                    <Button variant='contained' size='large' color='primary'>Apply</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

function DataField({ name }: DataFieldProps)
{
    return (
        <Grid item xs={12}>
            <TextField fullWidth variant='filled' label={name} />
        </Grid>
    )

}

export default Settings;