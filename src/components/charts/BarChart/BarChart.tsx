import { Typography } from '@material-ui/core';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useStyles from './styles';


const data = [
    {
        name: 'Mon',
        day_usage: 1.35,
        night_usage: 0.45
    },
    {
        name: 'Tue',
        day_usage: 0.35,
        night_usage: 0.25
    },
    {
        name: 'Wed',
        day_usage: 1.75,
        night_usage: 0.73
    },
    {
        name: 'Thu',
        day_usage: 0.62,
        night_usage: 0.33
    },
    {
        name: 'Fri',
        day_usage: 0.77,
        night_usage: 1.23
    },
];


function CustomBarChart()
{
    const styles = useStyles();
    return (
        <>
            <div className={styles.title}>
                <Typography variant='h6' align='center'>Overall Usage</Typography>
            </div>
            <div>
                <Chart />
            </div>
        </>
    )
}

function Chart()
{
    return (
        <ResponsiveContainer width='100%' height={350}>
            <BarChart data={data} >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip cursor={false} contentStyle={{ background: '#424242' }} formatter={(value: number, name: string) => [value + ' GB', name.replace('_', ' ')]} />
                <Legend formatter={(value: string) => value.replace('_', ' ')} />
                <Bar dataKey="day_usage" fill="rgba(54, 125, 235, 0.5)" />
                <Bar dataKey="night_usage" fill="#82ca9d" />
             </BarChart>
        </ResponsiveContainer >
    )
}

export default CustomBarChart;