import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { CustomBarChart, DoughnutChart } from "../../../components";
import useStyles from './styles'


interface DataItem
{
    title: string;
    night_report: string;
    day_report: string;
}

const report_items = [
    { title: 'Usage Report', night_report: 'You have used 4.65 GB of the night package', day_report: 'You have used 4.65 GB of the night package' },
    { title: 'Budget Report', night_report: 'You are 4 days behind budget on the night package', day_report: 'You are 7 days behind budget on the night package' },
]

function Overview()
{
    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <Grid container spacing={2} >
                {report_items.map(item => <DataDisplay key={item.title} title={item.title} day_report={item.day_report} night_report={item.night_report} />)}
            </Grid>

            <Grid container className={styles.graph_container}>
                <Grid item xs={12} sm={6}>
                    <CustomBarChart />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DoughnutChart />
                </Grid>
            </Grid>
        </Container >
    )
}

function DataDisplay({ title, day_report, night_report }: DataItem)
{
    const styles = useStyles();
    return (
        <Grid item xs={12} sm={6}>
            <Typography variant='h5' >{title}</Typography>
            <Paper className={styles.info_container}>
                <Typography variant='body1' color='textSecondary' >{day_report}  </Typography>
                <Typography variant='body1' color='textSecondary' >{night_report} </Typography>
            </Paper>
        </Grid>
    )
}


export default Overview;