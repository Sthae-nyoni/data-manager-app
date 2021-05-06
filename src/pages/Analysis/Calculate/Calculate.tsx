import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const budget_retrack = 'Calculate the required usage rate In order to get back on budget within the specified number of days below';
const package_finish = 'Calculate the required usage rate in order to finish the current data within the specified number of days';

interface CalculationSectionProps
{
    description: string;
    heading: string;
}

function Calculate()
{
    const styles = useStyles();
    return (
        <Container>
            <Typography variant='h5' align='center' className={styles.title} >Use these sections to do utility calculations</Typography>
            <CalculationSection heading='Get back on track' description={budget_retrack} />

            <CalculationSection heading='Finish a packge' description={package_finish} />
        </Container>
    )
}

function CalculationSection({ description, heading }: CalculationSectionProps)
{
    const styles = useStyles()
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel1a-header" >
                <Typography className={styles.heading}>{heading}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant='h6'>{description}</Typography>
                    </Grid>
                    <Grid item container xs={12}  spacing={2}>
                        <CalculationForm />
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

function CalculationForm()
{
    const styles = useStyles();
    return (
        <>
            <Grid item xs={12} className={styles.flex_container}>
                <div >
                    <TextField label='Days' />
                </div>
                <Button className={styles.button} variant='contained' color='primary'> Calculate</Button>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h6'>The required usage rate is 0.54GB</Typography>
            </Grid>
        </>
    )
}

export default Calculate;