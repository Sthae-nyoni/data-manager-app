import { format, subDays, subHours } from 'date-fns';
import { User, Usage } from '../models/models'


export const bar_chart_data = generateRandomUsageDataFor(3);





export const range_map: Record<string, string> = {
    'week': 'usage over the last 7 days',
    'day': 'Usage from yesterday',
    'month': 'Usage over the last 30 days',
    'three_days': 'Usage over the last 3 days',
    'two_weeks': 'Usage over the last 14 days',
}


export const options = {
    users: [
        { name: 'Everyone', value: 'everyone' },
        { name: 'Sthae', value: 'sthae' },
        { name: 'Dumo', value: 'dumo' },
        { name: 'Nkosi', value: 'nkosi' },
        { name: 'Nasthae', value: 'nasthae' },
        { name: 'Sasthae', value: 'sasthae' },
    ],
    periods: [
        { name: 'Week', value: 'week' },
        { name: 'Day', value: 'day' },
        { name: '3 Days', value: 'three_days' },
        { name: '2 Weeks', value: 'two_weeks' },
        { name: 'Month', value: 'month' },
        { name: 'Custom', value: 'custom' }
    ]
}


export const table_columns = ['Date', 'Day usage', 'Night usage', 'Total usage', 'Bugdget'];

export const DEFAULT_RANGE = range_map.week;



function createData(date: string, day_usage: number, night_usage: number, total_usage: number, budget: number)
{
    return { date, day_usage, night_usage, total_usage, budget };
}

export interface ChartData extends Record<string, number | string>
{
    date: string;
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

function r(min: number, max: number)
{
    return parseFloat((min + max * Math.random()).toFixed(2));
}


function generateRandomUsageDataFor(period: number, hours?: boolean)
{
    let random_data = [];

    for (let i = 0; i < period; i++)
    {
        let date = getDay(i + 1);
        let day_usage = hours ? r(0, 0.04) : r(0.1, 1.5);
        let night_usage = hours ? r(0, 0.03) : r(0.05, 0.6);
        let total_usage = day_usage + night_usage;
        let budget = hours ? total_usage - 0.15 : total_usage - 0.7;

        random_data.push(createData(date, day_usage, night_usage, total_usage, budget));
    }

    return random_data;
}

function getDay(period: number, hours?: boolean)
{
    const day = hours ? subHours(new Date(), period) : subDays(new Date(), period);
    return format(day, hours ? 'HH:mm' : 'd MMMM');
}




function getHighOrLowUsage(usage: Usage[], low?: boolean)
{
    return usage.map(usage => usage.total_usage)
        .reduce((a, b) => low ? Math.min(a, b) : Math.max(a, b));
}

function getAverageUsage(usage: Usage[])
{
    const total_usage = usage.map(usage => usage.total_usage)
        .reduce((a, b) => a + b, 0)

    return parseFloat((total_usage / usage.length).toFixed(2));
}

function getBudgetPercentageUsage(usage: Usage[], budget_threshold: number, under_usage?: boolean)
{
    const budget_usage = usage.map(usage => usage.total_usage)
        .filter(value => under_usage ? value < budget_threshold : value > budget_threshold)
        .reduce((a, b) => a + b, 0);

    return parseFloat(((budget_usage / usage.length) * 100).toFixed(2));

}

function getUser(user_name: string)
{
    const day_data = generateRandomUsageDataFor(24, true);
    const three_day_data = generateRandomUsageDataFor(3);
    const week_data = generateRandomUsageDataFor(7);
    const two_week_data = generateRandomUsageDataFor(14);
    const month_data = generateRandomUsageDataFor(30);

    return {
        id: user_name.toLocaleLowerCase(),
        name: user_name,
        usage_stats: [
            {
                period: 'day',
                data: day_data,
                statistics: [
                    { stat: 'Highest recorded usage', value: getHighOrLowUsage(day_data), unit: 'GB in 1 one hour' },
                    { stat: 'Lowest recorded usage', value: getHighOrLowUsage(day_data, true), unit: 'GB in 1 one hour' },
                    { stat: 'Average usage', value: getAverageUsage(day_data), unit: 'GB per hour' },
                    { stat: 'On budget usage', value: getBudgetPercentageUsage(day_data, 0.015, true), unit: '% of the time' },
                    { stat: 'Out of budget usage', value: getBudgetPercentageUsage(day_data, 0.015), unit: '% of the time' }
                ]
            },
            {
                period: 'three_days',
                data: three_day_data,
                statistics: [
                    { stat: 'Highest recorded usage', value: getHighOrLowUsage(three_day_data), unit: 'GB in 1 one day' },
                    { stat: 'Lowest recorded usage', value: getHighOrLowUsage(three_day_data, true), unit: 'GB in 1 one day' },
                    { stat: 'Average usage', value: getAverageUsage(three_day_data), unit: 'GB per day' },
                    { stat: 'On budget usage', value: getBudgetPercentageUsage(three_day_data, 0.3, true), unit: '% of the time' },
                    { stat: 'Out of budget usage', value: getBudgetPercentageUsage(three_day_data, 0.3), unit: '% of the time' }
                ]
            },
            {
                period: 'week',
                data: week_data,
                statistics: [
                    { stat: 'Highest recorded usage', value: getHighOrLowUsage(week_data), unit: 'GB in 1 one day' },
                    { stat: 'Lowest recorded usage', value: getHighOrLowUsage(week_data, true), unit: 'GB in 1 one day' },
                    { stat: 'Average usage', value: getAverageUsage(week_data), unit: 'GB per day' },
                    { stat: 'On budget usage', value: getBudgetPercentageUsage(week_data, 0.3, true), unit: '% of the time' },
                    { stat: 'Out of budget usage', value: getBudgetPercentageUsage(week_data, 0.3), unit: '% of the time' }
                ]
            },
            {
                period: 'two_weeks',
                data: two_week_data,
                statistics: [
                    { stat: 'Highest recorded usage', value: getHighOrLowUsage(two_week_data), unit: 'GB in 1 one day' },
                    { stat: 'Lowest recorded usage', value: getHighOrLowUsage(two_week_data, true), unit: 'GB in 1 one day' },
                    { stat: 'Average usage', value: getAverageUsage(two_week_data), unit: 'GB per day' },
                    { stat: 'On budget usage', value: getBudgetPercentageUsage(two_week_data, 0.3, true), unit: '% of the time' },
                    { stat: 'Out of budget usage', value: getBudgetPercentageUsage(two_week_data, 0.3), unit: '% of the time' }
                ]
            },
            {
                period: 'month',
                data: month_data,
                statistics: [
                    { stat: 'Highest recorded usage', value: getHighOrLowUsage(month_data), unit: 'GB in 1 one day' },
                    { stat: 'Lowest recorded usage', value: getHighOrLowUsage(month_data, true), unit: 'GB in 1 one day' },
                    { stat: 'Average usage', value: getAverageUsage(month_data), unit: 'GB per day' },
                    { stat: 'On budget usage', value: getBudgetPercentageUsage(month_data, 0.3, true), unit: '% of the time' },
                    { stat: 'Out of budget usage', value: getBudgetPercentageUsage(month_data, 0.3), unit: '% of the time' }
                ]
            },
        ]
    }
}


export const users: User[] = [
    getUser('Sthae'),
    getUser('Nkosi'),
    getUser('Dumo'),
    getUser('Nasthae'),
    getUser('Sasthae'),
]


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

