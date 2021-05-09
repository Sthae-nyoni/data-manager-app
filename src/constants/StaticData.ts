




function createData(date: string, day_usage: number, night_usage: number, total_usage: number, budget: number)
{
    return { date, day_usage, night_usage, total_usage, budget };
}


export const overview_items = [
    { description: 'Total usage', value: 7.25 },
    { description: 'Day usage', value: 5.23 },
    { description: 'Night usage', value: 2.15 },
    { description: 'Budget report', value: -3.62 },
]

export const column_names = ['Date', 'Day usage', 'Night usage', 'Total usage', 'Bugdget'];



export const rows = [
    createData('Mon', 0.96, .32, 1.56, -2.33),
    createData('Tue', 1.24, 0.80, 3.5, -5.77),
    createData('Wed', 0.13, 0.10, 0.25, -4.6),
];

