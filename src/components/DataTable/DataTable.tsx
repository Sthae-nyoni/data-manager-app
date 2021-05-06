
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import useStyles from './styles';


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



function DataTable()
{
    const styles = useStyles();
    return (
        <Table className={styles.table} >
            <DataTableHeading />
            <DataTableBody />
        </Table>
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


function createData(date: string, day_usage: number, night_usage: number, total_usage: number, budget: number)
{
    return { date, day_usage, night_usage, total_usage, budget };
}

const rows = [
    createData('Sun', 0, 0, 0, 0),
    createData('Mon', 0.96, .32, 1.56, -2.33),
    createData('Tue', 1.24, 0.80, 3.5, -5.77),
    createData('Wed', 0.13, 0.10, 0.25, -4.6),
    createData('Thu', 0.13, 0.10, 0.25, -4.6),
    createData('Fri', 0.13, 0.10, 0.25, -4.6),
    createData('Sat', 0.13, 0.10, 0.25, -4.6),
];



export default DataTable;