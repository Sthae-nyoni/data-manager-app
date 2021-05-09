import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import useStyles from './styles';



interface HomeContentProps
{
    table_data: RecentSectionProps;
    overview_data: DataItemProps[];
}

function Home({ table_data, overview_data }: HomeContentProps)
{
    const styles = useStyles();

    return (
        <Container className={styles.section}>
            <OverviewSection overview_items={overview_data} />
            <RecentSection columns={table_data.columns} row_data={table_data.row_data} />
        </Container>
    )
}


interface RecentSectionProps
{
    columns: string[];
    row_data: DataRow[];
}

function RecentSection({ columns, row_data }: RecentSectionProps)
{
    const styles = useStyles();

    return (
        <section className={styles.section}>
            <Typography variant='h5' >Recent Usage</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <DataTableHeading column_names={columns} />
                    <DataTableBody rows={row_data} />
                </Table>
            </TableContainer>
        </section >
    )
}


interface TableHeadingProps
{
    column_names: string[]
}

function DataTableHeading({ column_names }: TableHeadingProps)
{
    return (
        <TableHead>
            <TableRow>
                {column_names.map(column => <TableCell key={column}>{column}</TableCell>)}
            </TableRow>
        </TableHead>
    )
}


interface TableBodyProps
{
    rows: DataRow[];
}

function DataTableBody({ rows }: TableBodyProps)
{
    return (
        <TableBody>
            {rows.map(row => <DataTableRow key={row.date} row={row} />)}
        </TableBody>
    )
}



interface DataRow
{
    date: string;
    day_usage: number;
    night_usage: number;
    total_usage: number;
    budget: number;
}

interface DataTableRowProps
{
    row: DataRow;
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


interface OverviewSectionProps
{
    overview_items: DataItemProps[];
}

function OverviewSection({ overview_items }: OverviewSectionProps)
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




interface DataItemProps
{
    description: string;
    value: number;
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