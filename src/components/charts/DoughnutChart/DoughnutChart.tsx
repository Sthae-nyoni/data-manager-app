import { Typography } from '@material-ui/core';
import { Cell, Pie, PieChart, Tooltip, Legend } from 'recharts';
import useStyles from './styles';

const data = [
    { name: 'Dumo', value: 350 },
    { name: 'Nkosi', value: 300 },
    { name: 'Sthae', value: 600 },
    { name: 'Mama', value: 100 },
    { name: 'Sasthae', value: 120 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#82ca9d'];

function DoughnutChart()
{
    const styles = useStyles();
    return (
        <>
            <div className={styles.title}>
                <Typography variant='h6' align='center'>Member Usage</Typography>
            </div>
            <div>
                <Chart />
            </div>
        </>
    )
}

function Chart()
{
    const total = data.reduce((sum, current) => sum + current.value, 0);


    return (
        <PieChart width={600} height={300} >
            <Pie data={data} innerRadius={75} outerRadius={120} cx='45%' cy='45%' fill="#8884d8" dataKey="value"  >
                {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip formatter={(value: number, name: string) => [(value / total * 100).toFixed(2) + '%', name + ' used']} />
            <Legend />
        </PieChart>
    )
}


export default DoughnutChart;