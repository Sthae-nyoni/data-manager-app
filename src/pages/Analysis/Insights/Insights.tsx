import DateFnsUtils from '@date-io/date-fns';
import { format, subDays } from 'date-fns'
import { Avatar, Card, CardContent, CardHeader, Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useEffect, useState } from "react";
import { CustomAreaChart, CustomBarChart, DataTable } from '../../../components';
import useStyles from './styles';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { column_names as COLUMN_NAMES, range_map } from '../../../metadata/constants/StaticData';
import { Usage, User } from '../../../metadata/models/models';






interface InsightProps
{
    users: User[];
    options: { users: SelectItem[], periods: SelectItem[] }
}

function Insights({ users, options }: InsightProps)
{
    const styles = useStyles();
    const [selected_range, setSelectedRange] = useState('week');
    const [default_range, setDefaultRange] = useState(range_map.week);
    const [selected_user, setSelectedUser] = useState('sthae');
    const [target_user, setTargetUser] = useState(users[0]);
    const [custom_range, setCustomRange] = useState('');


    useEffect(() => setTargetUser(users.find(user => user.id === selected_user) || users[0]), [selected_user])
    useEffect(() => setAnalysisRange(selected_range, setDefaultRange, setCustomRange), [selected_range])


    return (
        <Container className={styles.container}>
            <ParameterSetterSection select_options={options} selected_range={selected_range} setCustomRange={setCustomRange} setSelectedRange={setSelectedRange} selected_user={selected_user} setSelectedUser={setSelectedUser} />
            <ReportSection user={target_user} selected_period={selected_range} range={custom_range || default_range} />
            <ReportVisualisationSection user={target_user} selected_range={selected_range} />
        </Container>
    )
}

interface DataVisualisationProps
{
    user: User;
    selected_range: string;
}

function ReportVisualisationSection({ user, selected_range }: DataVisualisationProps)
{
    const styles = useStyles();
    const [usage_data, setUsageData] = useState<Usage[]>([]);

    useEffect(() => updateTableData(user, selected_range, setUsageData));

    return (
        <div className={styles.section}>
            <Typography variant='h5'>Usage details for {user.name} </Typography>
            <Grid className={styles.spacing} container spacing={2}>
                <TableReport usage_data={usage_data} />
                <ChartReport user_name={user.name} usage_data={usage_data} />
            </Grid>
        </div>
    )
}

interface TableReportProps
{
    usage_data: Usage[];
}

function TableReport({ usage_data }: TableReportProps)
{
    return (
        <Grid item xs={12}>
            <DataTable table_data={usage_data} column_names={COLUMN_NAMES} />
        </Grid>
    )
}

function updateTableData(user: User, selected_range: string, setUsage: (usage: Usage[]) => void)
{
    const usage = user.usage_stats
        .find(stat => stat.period === selected_range)?.data

    setUsage(usage as Usage[]);
}

interface ChartReportProps
{
    user_name: string;
    usage_data: Usage[];
}

function ChartReport({ user_name, usage_data }: ChartReportProps)
{
    return (
        <>
            <Grid item xs={12} sm={6}>
                <CustomBarChart title={`${user_name}'s usage`} data={usage_data} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <CustomAreaChart title={`Budget report for ${user_name}`} data={usage_data} />
            </Grid>
        </>
    )

}


interface Statistic
{
    stat: string;
    value: number;
    unit: string;
}

interface ReportProps
{
    user: User;
    range: string;
    selected_period: string;
}

function ReportSection({ user, range, selected_period }: ReportProps)
{
    const styles = useStyles();
    const [user_stats, setUserStats] = useState<Statistic[]>([]);

    useEffect(() => updateUserStats(user, selected_period, setUserStats));

    return (
        <div>
            <Typography className={styles.title} variant='h4'>Usage summary</Typography>
            <Card >
                <CardHeader title={user.name} subheader={range} avatar={<UserAvatar user_name={user.name} />} />
                <CardContent>
                    {user_stats.map(stat => <ReportStat key={stat.stat} stat={stat.stat} value={stat.value} unit={stat.unit} />)}
                </CardContent>
            </Card>
        </div >
    )
}

function updateUserStats(user: User, range: string, setStats: (stats: Statistic[]) => void)
{
    if (range === 'custom')
        return;

    const user_stats = user.usage_stats
        .find(stat => stat.period === range)?.statistics;

    setStats(user_stats as Statistic[]);
}


interface AvatarProps
{
    user_name: string;
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
        <Grid container spacing={2}>
            <Grid item xs={8} sm={8} >
                <Typography variant='body1'>{stat + ':'}</Typography>
            </Grid>
            <Grid item xs={4} sm={4} >
                <Typography variant='body1'>{value + unit}</Typography>
            </Grid>
        </Grid>
    )
}


interface SelectItem
{
    name: string;
    value: string;
}

interface ParameterSetterSectionProps
{
    selected_range: string;
    selected_user: string;
    select_options: { users: SelectItem[], periods: SelectItem[] }
    setSelectedUser: (selected_user: string) => void
    setSelectedRange: (selected_range: string) => void;
    setCustomRange: (custom_range: string) => void;
}

function ParameterSetterSection({ selected_range, selected_user, select_options, setSelectedRange, setSelectedUser, setCustomRange }: ParameterSetterSectionProps)
{
    const styles = useStyles();

    return (
        <Grid className={styles.parameter_control_section} container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h4'>Set analysis parameters</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ParameterSelectButton label='user' items={select_options.users} selected_option={selected_user} setSelectedOption={setSelectedUser} />
                <ParameterSelectButton label='period' items={select_options.periods} selected_option={selected_range} setSelectedOption={setSelectedRange} />
            </Grid>
            <Grid item xs={12} sm={6}>
                {selected_range === 'custom' && <CustomRangeSelector setCustomRange={setCustomRange} />}
            </Grid>
        </Grid>
    )
}



interface SelectButtonProps
{
    label: string;
    items: SelectItem[];
    selected_option: string;
    setSelectedOption: (selected_option: string) => void
}

function ParameterSelectButton({ label, items, selected_option, setSelectedOption }: SelectButtonProps)
{
    const styles = useStyles();

    return (
        <FormControl variant='outlined' className={styles.formControl}>
            <InputLabel id={label + '_select'}>{label}</InputLabel>
            <Select value={selected_option} onChange={e => setSelectedOption(e.target.value as string)} labelId={label + '_select'} id={label + '_select'} >
                {items.map(item => <MenuItem key={item.name} value={item.value} >{item.name}</MenuItem>)}
            </Select>
        </FormControl>
    )

}

interface CustomRangeSelectorProps
{
    setCustomRange: (custom_range: string) => void;
}

function CustomRangeSelector({ setCustomRange }: CustomRangeSelectorProps)
{
    const [start_date, setStartDate] = useState<Date | null>(new Date());
    const [end_date, setEndDate] = useState<Date | null>(new Date());

    function onChangeStartDate(date: MaterialUiPickersDate, value?: string | undefined | null)
    {
        const selected_range = `Usage between ${value as string} to ${format(end_date as Date, 'd MMMM HH:mm')}`
        setCustomRange(selected_range);
        setStartDate(date);
    }

    function onChangeEndDate(date: MaterialUiPickersDate, value?: string | undefined | null)
    {
        const selected_range = `Usage between ${format(start_date as Date, 'd MMMM HH:mm')} and ${value as string}`;
        setCustomRange(selected_range);
        setEndDate(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={6}>
                    <KeyboardDateTimePicker value={start_date} onChange={onChangeStartDate} onError={console.log} variant="dialog" ampm={false} label="From" disablePast format="d MMMM HH:mm" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <KeyboardDateTimePicker value={end_date} onChange={onChangeEndDate} onError={console.log} variant="dialog" ampm={false} label="To" disablePast format="d MMMM HH:mm" />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider >
    );
}



function setAnalysisRange(selected_range: string, setDefaultRange: (range: string) => void, setCustomRange: (range: string) => void)
{
    if (selected_range === 'custom')
        return;
    else if (selected_range !== '')
    {
        setCustomRange('');
        setDefaultRange(range_map[selected_range]);
    }
}





export default Insights;