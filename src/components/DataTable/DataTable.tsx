
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Usage } from "../../metadata/models/models";
import useStyles from './styles';




interface TableProps
{
    column_names: string[];
    table_data: Usage[];
}

function DataTable({ column_names, table_data }: TableProps)
{
    const styles = useStyles();
    return (
        <Table className={styles.table} >
            <DataTableHeading columns={column_names} />
            <DataTableBody row_data={table_data} />
        </Table>
    )
}


interface TableHeaderProps
{
    columns: string[];
}

function DataTableHeading({ columns }: TableHeaderProps)
{
    return (
        <TableHead>
            <TableRow>
                {columns.map(column => <TableCell key={column}>{column}</TableCell>)}
            </TableRow>
        </TableHead>
    )
}


interface TableBodyProps
{
    row_data: Usage[];
}

function DataTableBody({ row_data }: TableBodyProps)
{
    return (
        <TableBody>
            {row_data.map(row => <DataTableRow key={row.date} row={row} />)}
        </TableBody>
    )
}




interface TableRowProps
{
    row: Usage;
}

function DataTableRow({ row }: TableRowProps)
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


export default DataTable;