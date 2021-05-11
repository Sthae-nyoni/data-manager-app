

export interface Statistic
{
    stat: string;
    value: number;
    unit: string
}

export interface UsageStat
{
    period: string;
    data: Usage[];
    statistics: Statistic[];
}

export interface Usage
{
    date: string;
    day_usage: number;
    night_usage: number;
    total_usage: number;
    budget: number;
}

export interface User
{
    id: string;
    name: string;
    usage_stats: UsageStat[];
}
