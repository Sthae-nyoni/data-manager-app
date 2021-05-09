import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import useStyles from './styles';

interface DataItemProps
{
    description: string;
    value: number;
}

interface DataTableRowProps
{
    row: DataRow;
}

interface DataRow
{
    date: string;
    day_usage: number;
    night_usage: number;
    total_usage: number;
    budget: number;
}

const overview_items = [
    { description: 'Total usage', value: 7.25 },
    { description: 'Day usage', value: 5.23 },
    { description: 'Night usage', value: 2.15 },
    { description: 'Budget report', value: -3.62 },
]




function Home()
{
    const styles = useStyles();

    return (
        <Container className={styles.section}>
            <OverviewSection />
            <RecentSection />
        </Container>
    )
}

function createData(date: string, day_usage: number, night_usage: number, total_usage: number, budget: number)
{
    return { date, day_usage, night_usage, total_usage, budget };
}

const rows = [
    createData('Mon', 0.96, .32, 1.56, -2.33),
    createData('Tue', 1.24, 0.80, 3.5, -5.77),
    createData('Wed', 0.13, 0.10, 0.25, -4.6),
];

function RecentSection()
{
    const styles = useStyles();

    return (
        <section className={styles.section}>
            <Typography variant='h5' >Recent Usage</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <DataTableHeading />
                    <DataTableBody />
                </Table>
            </TableContainer>
        </section >
    )
}

function DataTableHeading()
{
    const columns = ['Date', 'Day usage', 'Night usage', 'Total usage', 'Bugdget'];
    return (
        <TableHead>
            <TableRow>
                {columns.map(column => <TableCell key={column}>{column}</TableCell>)}
            </TableRow>
        </TableHead>
    )
}

function DataTableBody()
{
    return (
        <TableBody>
            {rows.map(row => <DataTableRow key={row.date} row={row} />)}
        </TableBody>
    )
}

function DataTableRow({ row }: DataTableRowProps)
{
    return (
        <StyledTableRow key={row.date}>
            <StyledTableCell component="th" scope="row">{row.date}</StyledTableCell>
            <StyledTableCell >{row.day_usage}</StyledTableCell>
            <StyledTableCell >{row.night_usage}</StyledTableCell>
            <StyledTableCell >{row.total_usage}</StyledTableCell>
            <StyledTableCell >{row.budget}</StyledTableCell>
        </StyledTableRow>
    )
}

function OverviewSection()
{
    const styles = useStyles();
    return (
        <section>
            <Typography variant='h5'>Overview</Typography>
            <Paper className={styles.paper}>
                <Grid container>
                    {overview_items.map(item => <DataItem key={item.description} description={item.description} value={item.value} />)}
                </Grid>
            </Paper>
        </section>
    )
}

function DataItem({ description, value }: DataItemProps)
{
    const styles = useStyles();

    return (
        <Grid item xs={6} md={3}>
            <Typography className={styles.description} variant='body2' color='textSecondary'>{description}</Typography>
            <Typography className={styles.value} variant='h6' color='secondary' >{value}</Typography>
        </Grid>
    )
}


const StyledTableCell = withStyles((theme: Theme) => createStyles({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);


export default Home;