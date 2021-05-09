
import { Button, Container, Grid, TextField } from "@material-ui/core";
import { DataForm } from "../../../components";
import useStyles from './styles';


function AddCustomSession()
{
    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <DataForm form_title='Add a custom session to track' should_comment={true} />
        </Container>
    )
}


export default AddCustomSession;