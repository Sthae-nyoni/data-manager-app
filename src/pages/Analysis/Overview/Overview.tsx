import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { CustomBarChart, DoughnutChart } from "../../../components";
import useStyles from './styles'



interface OverviewProps
{
    report_items: DataItem[];
    charts: React.ReactNode[];

}

function Overview({ report_items, charts }: OverviewProps)
{
    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <ReportSection report_items={report_items} />
            <ChartSection charts={charts} />
        </Container >
    )
}

interface ReportSectionProps
{
    report_items: DataItem[];
}

function ReportSection({ report_items }: ReportSectionProps)
{
    return (
        <Grid container spacing={2} >
            {report_items.map(item => <DataDisplay key={item.title} title={item.title} reports={item.reports} />)}
        </Grid>
    )
}

interface ChartSectionProps
{
    charts: React.ReactNode[];
}

function ChartSection({ charts }: ChartSectionProps)
{
    const styles = useStyles();
    return (
        <Grid container className={styles.graph_container}>
            {charts.map((chart, i) => <ChartObject key={i} chart={chart} />)}
        </Grid>
    )
}

interface ChartObjectProps
{
    chart: React.ReactNode;
}

function ChartObject({ chart }: ChartObjectProps)
{
    return (
        <Grid item xs={12} sm={6}>
            {chart}
        </Grid>
    )
}

interface DataItem
{
    title: string;
    reports: string[];
}

function DataDisplay({ title, reports }: DataItem)
{
    const styles = useStyles();
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant='h5' >{title}</Typography>
            <Paper className={styles.info_container}>
                {reports.map((report, i) => <Typography key={i} variant='body1' color='textSecondary' >{report}</Typography>)}
            </Paper>
        </Grid>
        
    )
}


export default Overview;