import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography } from "@material-ui/core";
import { AddCircleOutline, HomeOutlined } from "@material-ui/icons";
import useStyles from './styles'
import HomeIcon from '@material-ui/icons/Home';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { useHistory } from "react-router";
import { useState } from "react";


interface MenuItemProps
{
    item: MenuItem;
    selected_item: string;
    setSelectedItem: (value: string) => void;
}

interface MenuItem
{
    text: string;
    icon: React.ReactNode;
    path: string;
}

const menu_items = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Add', path: '/add', icon: <AddCircleIcon /> },
    { text: 'Settings', path: '/settings', icon: <SettingsIcon /> },
    { text: 'Analysis', path: '/analysis', icon: <AssessmentIcon /> },
]

function SideNav()
{
    const styles = useStyles();
    const [selected_text, setSelectedText] = useState('Home');

    return (
        <Drawer variant='permanent' anchor='left' className={styles.drawer} classes={{ paper: styles.drawer }}>
            <Typography variant='h5' >Menu</Typography>
            <List>
                {menu_items.map(item => <MenuItem selected_item={selected_text} setSelectedItem={setSelectedText} key={item.text} item={item} />)}
            </List>
        </Drawer>
    )
}


function MenuItem({ item, selected_item, setSelectedItem }: MenuItemProps)
{
    const history = useHistory();
    const handleClick = () => { history.push(item.path); setSelectedItem(item.text) }

    return (
        <ListItem button selected={item.text === selected_item} onClick={handleClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
        </ListItem>
    )
}


export default SideNav;