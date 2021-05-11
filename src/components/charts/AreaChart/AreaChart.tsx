

import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Usage } from '../../../metadata/models/models';


function gradientOffset(data: Usage[]) 
{
    const max = Math.max(...data.map((i) => i.budget));
    const min = Math.min(...data.map((i) => i.budget));

    if (max <= 0)
        return 0;
    if (min >= 0)
        return 1;

    return max / (max - min);
};

interface Props
{
    title: string;
    data: Usage[];
}

function CustomAreaChart({ title, data }: Props)
{
    return (
        <div>
            <Typography variant='h5' align='center' gutterBottom>{title}</Typography>
            <Chart data={data} />
        </div>
    );
}

interface ChartProps
{
    data: Usage[];
}

function Chart({ data }: ChartProps)
{
    const [offset, setOffset] = useState(0);
    useEffect(() => setOffset(gradientOffset(data)));

    return (
        <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0, }}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value: number, name: string) => [value < 0 ? `Usage is ${Math.abs(value).toFixed(2)}GB under budget` : `Usage is ${value.toFixed(2)}GB over budget`, '']} />
                <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={offset} stopColor="red" stopOpacity={1} />
                        <stop offset={offset} stopColor="green" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="budget" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}
export default CustomAreaChart;