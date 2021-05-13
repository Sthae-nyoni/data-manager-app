import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Grid, TextField, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react'
import useStyles from './styles';

const budget_retrack = 'Calculate the required usage rate In order to get back on budget within the specified number of days below';
const package_finish = 'Calculate the required usage rate in order to finish the current data within the specified number of days';


interface CalculateProps
{
    off_budget_days: number;
    daily_usage_cap: number;
    remaining_package: number;
}

function Calculate({ off_budget_days, daily_usage_cap, remaining_package }: CalculateProps)
{

    const getBackOnTrackCalculator = (value: string) => getBackOnTrack(value, off_budget_days, daily_usage_cap);
    const finishApackageCalculator = (value: string) => getUsageRateToFinishApackageWithin(value, remaining_package);

    const styles = useStyles();
    return (
        <Container>
            <Typography variant='h5' align='center' className={styles.title} >Use these sections to do utility calculations</Typography>
            <CalculationSection calculatorFunction={getBackOnTrackCalculator} heading='Get back on track' description={budget_retrack} />
            <CalculationSection calculatorFunction={finishApackageCalculator} heading='Finish a packge' description={package_finish} />
        </Container>
    )
}



interface CalculationSectionProps
{
    description: string;
    heading: string;
    calculatorFunction: (value: string) => string;
}
function CalculationSection({ description, heading, calculatorFunction }: CalculationSectionProps)
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
                    <Grid item container xs={12} spacing={2}>
                        <CalculationForm calculatorFunction={calculatorFunction} />
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

interface FormProps
{
    calculatorFunction: (value: string) => string;
}

function CalculationForm({ calculatorFunction }: FormProps)
{
    const styles = useStyles();
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');

    const handleClick = () => setResult(calculatorFunction(value));

    return (
        <>
            <Grid item xs={12} className={styles.flex_container}>
                <div >
                    <TextField type='number' value={value} onChange={e => { setValue(e.target.value); setResult('') }} label='Days' />
                </div>
                <Button onClick={handleClick} className={styles.button} variant='contained' color='primary'> Calculate</Button>
            </Grid>
            <Grid item xs={12} >
                <Typography variant='h6'>{result}</Typography>
            </Grid>
        </>
    )
}

function getUsageRateToFinishApackageWithin(specified_number_of_days: string, remaining_package: number)
{
    const value = parseFloat(specified_number_of_days);

    const result = remaining_package / value;

    return `The required usage to finish the package in ${specified_number_of_days} days is ${result} GB per day`;
}

function getBackOnTrack(specified_number_of_days: string, off_budget_days: number, daily_usage: number)
{

    const value = parseFloat(specified_number_of_days);

    const result = daily_usage * (1 - off_budget_days / value);

    if (result < 0)
        return `It is impossible to get back on track within ${specified_number_of_days} days try to recalculate with a value greater than ${off_budget_days} days`
    else
        return `The required usage rate is ${result.toFixed(2)} GB per day`;
}



export default Calculate;