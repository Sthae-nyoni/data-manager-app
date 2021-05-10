import { Typography } from '@material-ui/core';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartData } from '../../../constants/StaticData';
import useStyles from './styles';


interface CustomBarChartProps
{
    title: string;
    data: ChartData[];
}

function CustomBarChart({ title, data }: CustomBarChartProps)
{
    const styles = useStyles();
    return (
        <div>
            <ChartTitle title={title} />
            <div>
                <Chart data={data} />
            </div>
        </div>
    )
}


interface ChartTitleProps
{
    title: string;
}
function ChartTitle({ title }: ChartTitleProps)
{
    const styles = useStyles();
    return (
        <div className={styles.title}>
            <Typography variant='h6' align='center'>{title}</Typography>
        </div>
    )
}


interface ChartProps
{
    data: ChartData[];
}

function Chart({ data }: ChartProps)
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