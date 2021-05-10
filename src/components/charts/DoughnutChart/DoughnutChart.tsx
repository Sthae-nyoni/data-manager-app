import { Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { Cell, Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useStyles from './styles';



interface DoughnutChartProps
{
    title: string;
    chart_data: ChartProps;
}
function DoughnutChart({ title, chart_data }: DoughnutChartProps)
{
    return (
        <div>
            <ChartTitle title={title} />
            <Chart data={chart_data.data} colors={chart_data.colors} />
        </div>
    )
}


interface PieChartData
{
    name: string;
    value: number;
}

interface ChartProps
{
    data: PieChartData[];
    colors: string[];
}

function Chart({ data, colors }: ChartProps)
{
    let total = 0;
    useEffect(() => { total = data.reduce((sum, current) => sum + current.value, 0) }, [data])

    return (
        <ResponsiveContainer width='100%' height={350}>
            <PieChart >
                <Pie data={data} innerRadius={90} outerRadius={150} cx='50%' cy='50%' fill="#8884d8" dataKey="value"  >
                    {data.map((entry, index) => <Cell key={`cell-${entry.name}`} fill={colors[index % colors.length]} />)}
                </Pie>
                <Tooltip formatter={(value: number, name: string) => [(value / total * 100).toFixed(2) + '%', name + ' used']} />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
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

export default DoughnutChart;