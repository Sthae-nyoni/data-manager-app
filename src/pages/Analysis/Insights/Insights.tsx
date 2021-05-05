import DateFnsUtils from '@date-io/date-fns';
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useState } from "react";
import useStyles from './styles';



const users = [
    { name: 'Everyone', value: 'everyone' },
    { name: 'Sthae', value: 'sthae' },
    { name: 'Dumo', value: 'dumo' },
    { name: 'Nkosi', value: 'nkosi' },
    { name: 'Nasthae', value: 'nasthae' },
    { name: 'Sasthae', value: 'sasthae' },
]

const periods = [
    { name: 'Week', value: 'week' },
    { name: 'Day', value: 'day' },
    { name: '3 Days', value: '3_days' },
    { name: '2 Weeks', value: '2_weeks' },
    { name: 'Month', value: 'month' },
    { name: 'Custom', value: 'custom' },
]

interface SelectItem
{
    name: string;
    value: string;
}

interface SelectButtonProps
{
    label: string;
    items: SelectItem[];
    reportSelectedRange?: (selected_range: string) => void
}

function Insights()
{

    return (
        <Container>
            <ParameterSetterSection />
        </Container>
    )
}


function ParameterSetterSection()
{
    const styles = useStyles()
    const [selected_range, setSelectedRange] = useState('');
    return (
        <Grid className={styles.parameter_control_section} container spacing={1}>
            <Grid item xs={12}>
                <Typography variant='h5'>Set analysis parameters</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ParameterSelectButton label='user' items={users} />
                <ParameterSelectButton label='period' items={periods} reportSelectedRange={setSelectedRange} />
            </Grid>
            <Grid item xs={12} sm={6}>
                {selected_range === 'custom' && <CustomRangeSelector />}
            </Grid>
        </Grid>
    )
}

function ParameterSelectButton({ label, items, reportSelectedRange }: SelectButtonProps)
{
    const styles = useStyles();
    const [selected_item, setItem] = useState(items[0].value);
    
    function handleChange(event: React.ChangeEvent<{ value: unknown }>)
    {
        setItem(event.target.value as string);
        if (reportSelectedRange)
            reportSelectedRange(event.target.value as string)
    }

    return (
        <>
            <FormControl variant="outlined" className={styles.formControl}>
                <InputLabel id={label + '_select'}>{label}</InputLabel>
                <Select value={selected_item} label="Age" onChange={handleChange} labelId={label + '_select'} id={label + '_select'} >
                    {items.map(item => <MenuItem key={item.name} value={item.value} >{item.name}</MenuItem>)}
                </Select>
            </FormControl>
        </>
    )

}


function CustomRangeSelector()
{
    const [start_date, setStartDate] = useState<Date | null>(new Date());
    const [end_date, setEndDate] = useState<Date | null>(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6}>
                    <KeyboardDateTimePicker value={start_date} onChange={setStartDate} onError={console.log} variant="dialog" ampm={false} label="From" disablePast format="d MMMM HH:mm" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <KeyboardDateTimePicker value={end_date} onChange={setEndDate} onError={console.log} variant="dialog" ampm={false} label="To" disablePast format="d MMMM HH:mm" />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider >
    );
}

export default Insights;