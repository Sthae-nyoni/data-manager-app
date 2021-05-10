

export const bar_chart_data = [
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





function createData(date: string, day_usage: number, night_usage: number, total_usage: number, budget: number)
{
    return { date, day_usage, night_usage, total_usage, budget };
}

export interface ChartData extends Record<string, number | string>
{
    name: string;
}

export const pie_chart_data = {
    data: [
        { name: 'Dumo', value: 350 },
        { name: 'Nkosi', value: 300 },
        { name: 'Sthae', value: 600 },
        { name: 'Mama', value: 100 },
        { name: 'Sasthae', value: 120 },
    ],
    colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#82ca9d']
};


export const report_items = [
    { title: 'Usage Report', reports: ['You have used 4.65 GB of the night package', 'You have used 4.65 GB of the night package'] },
    { title: 'Budget Report', reports: ['You are 4 days behind budget on the night package', 'You are 7 days behind budget on the night package'] },
]


export const default_values = [
    { name: 'Default optimal usage', value: 0.85 },
    { name: 'Default warning threshold', value: 1.05 },
    { name: 'Default over usage threshold', value: 1.50 },
    { name: 'Default under usage threshold', value: 0.25 },
]

export const previous_reading = [
    { title: 'Previous night package reading', value: 23.56 },
    { title: 'Previous day package reading', value: 15.89 },
]

export const default_values_form_object = {
    optimal_usage_threshold: '',
    warning_threshold: '',
    over_usage_threshold: '',
    under_usage_threshold: ''
}

export const default_value_fields = [
    { label: 'Optimal usage threshold', name: 'optimal_usage_threshold' },
    { label: 'Warning threshold', name: 'warning_threshold' },
    { label: 'Over usage threshold', name: 'over_usage_threshold' },
    { label: 'Under usage threshold', name: 'under_usage_threshold' }
];


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

