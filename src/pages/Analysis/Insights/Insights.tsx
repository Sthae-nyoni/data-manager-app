import DateFnsUtils from '@date-io/date-fns';
import { Card, CardHeader, CardContent, Avatar, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography, Paper } from "@material-ui/core";
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useState } from "react";
import { CustomAreaChart, CustomBarChart, DataTable, DoughnutChart } from '../../../components';
import useStyles from './styles';


interface SelectItem
{
    name: string;
    value: string;
}

interface Statistic
{
    stat: string;
    value: number;
    unit: string;
}

interface SelectButtonProps
{
    label: string;
    items: SelectItem[];
    reportSelectedRange?: (selected_range: string) => void
}

interface ReportProps
{
    user_id: number;
}

interface AvatarProps
{
    user_name: string;
}

interface User
{
    id: number;
    name: string;
    value: string;
    stats: Statistic[]
}

const users = [
    {
        name: 'Everyone', value: 'everyone', id: 0,
        stats: [
            { stat: 'Highest recorded usage', value: 2.95, unit: 'GB in 1 one day' },
            { stat: 'Lowest recorded usage', value: 0.78, unit: 'GB in 1 one day' },
            { stat: 'Average usage', value: 1.56, unit: 'GB per day' },
            { stat: 'On budget usage', value: 6.9, unit: '% of the time' },
            { stat: 'Out of budget usage', value: 82.7, unit: '% of the time' },
        ]
    },
    {
        name: 'Sthae', value: 'sthae', id: 1,
        stats: [
            { stat: 'Highest recorded usage', value: 2.35, unit: 'GB in 1 one day' },
            { stat: 'Lowest recorded usage', value: 0.35, unit: 'GB in 1 one day' },
            { stat: 'Average usage', value: 1.23, unit: 'GB per day' },
            { stat: 'On budget usage', value: 4.3, unit: '% of the time' },
            { stat: 'Out of budget usage', value: 60, unit: '% of the time' },
        ]
    },
    {
        name: 'Dumo', value: 'dumo', id: 2,
        stats: [
            { stat: 'Highest recorded usage', value: 0.76, unit: 'GB in 1 one day' },
            { stat: 'Lowest recorded usage', value: 0.32, unit: 'GB in 1 one day' },
            { stat: 'Average usage', value: 0.5, unit: 'GB per day' },
            { stat: 'On budget usage', value: 27.2, unit: '% of the time' },
            { stat: 'Out of budget usage', value: 12.4, unit: '% of the time' },
        ]
    },
    {
        name: 'Nkosi', value: 'nkosi', id: 3,
        stats: [
            { stat: 'Highest recorded usage', value: 0.85, unit: 'GB in 1 one day' },
            { stat: 'Lowest recorded usage', value: 0.11, unit: 'GB in 1 one day' },
            { stat: 'Average usage', value: 0.45, unit: 'GB per day' },
            { stat: 'On budget usage', value: 40.3, unit: '% of the time' },
            { stat: 'Out of budget usage', value: 8.5, unit: '% of the time' },
        ]
    },
    {
        name: 'Nasthae', value: 'nasthae', id: 4,
        stats: [
            { stat: 'Highest recorded usage', value: 0.3, unit: 'GB in 1 one day' },
            { stat: 'Lowest recorded usage', value: 0.05, unit: 'GB in 1 one day' },
            { stat: 'Average usage', value: 0.12, unit: 'GB per day' },
            { stat: 'On budget usage', value: 95.3, unit: '% of the time' },
            { stat: 'Out of budget usage', value: 1.4, unit: '% of the time' },
        ]
    },
    {
        name: 'Sasthae', value: 'sasthae', id: 5,
        stats: [
            { stat: 'Highest recorded usage', value: 0.63, unit: 'GB in 1 one day' },
            { stat: 'Lowest recorded usage', value: 0.06, unit: 'GB in 1 one day' },
            { stat: 'Average usage', value: 0.27, unit: 'GB per day' },
            { stat: 'On budget usage', value: 93.2, unit: '% of the time' },
            { stat: 'Out of budget usage', value: 2.5, unit: '% of the time' },
        ]
    },
]

const periods = [
    { name: 'Week', value: 'week' },
    { name: 'Day', value: 'day' },
    { name: '3 Days', value: '3_days' },
    { name: '2 Weeks', value: '2_weeks' },
    { name: 'Month', value: 'month' },
    { name: 'Custom', value: 'custom' },
]



function Insights()
{
    const styles = useStyles();
    const [selected_user, setSelectedUser] = useState(0);
    return (
        <Container className={styles.container}>
            <ParameterSetterSection />
            <ReportSection user_id={selected_user} />
            <ReportVisualisationSection />
        </Container>
    )
}

function ReportVisualisationSection()
{
    const styles = useStyles();
    return (
        <Grid className={styles.spacing} container spacing={2}>
            <Grid item xs={12} >
                <DataTable />
            </Grid>
            <Grid container item xs={12}>
                <Grid item xs={12} sm={6}>
                    <CustomBarChart />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CustomAreaChart />
                </Grid>
            </Grid>
        </Grid>
    )
}

function ReportSection({ user_id }: ReportProps)
{
    const styles = useStyles();
    const user = users[user_id];
    return (
        <Card className={styles.report}>
            <CardHeader title={user.name} subheader="usage between 5 May and 26 May" avatar={<UserAvatar user_name={user.name} />} />
            <CardContent>
                {user.stats.map(stat => <ReportStat key={stat.stat} stat={stat.stat} value={stat.value} unit={stat.unit} />)}
            </CardContent>
        </Card>
    )
}

function UserAvatar({ user_name }: AvatarProps)
{
    const styles = useStyles();
    const avatar_text = user_name.charAt(0);

    return (
        <Avatar className={styles.avatar}>
            <Typography variant='h5' color='textPrimary'>{avatar_text}</Typography>
        </Avatar>
    )
}

function ReportStat({ stat, value, unit }: Statistic)
{
    return (
        <Grid container>
            <Grid item sm={8} >
                <Typography variant='body1'>{stat}</Typography>
            </Grid>
            <Grid item sm={4} >
                <Typography variant='body1'>{value + unit}</Typography>
            </Grid>
        </Grid>
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