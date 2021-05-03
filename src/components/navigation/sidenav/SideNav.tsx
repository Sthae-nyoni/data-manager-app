import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { useState } from "react";
import { useHistory } from "react-router";
import useStyles from './styles';


interface SideMenuItemProps
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
    const [selected_text, setSelectedItem] = useState('');


    return (
        <Drawer variant='permanent' anchor='left' className={styles.drawer} classes={{ paper: styles.drawer }}>
            <Typography variant='h5' >Menu</Typography>
            <List>
                {menu_items.map(item => <SideMenuItem selected_item={selected_text} setSelectedItem={setSelectedItem} key={item.text} item={item} />)}
            </List>
        </Drawer>
    )
}


function SideMenuItem({ item, selected_item, setSelectedItem }: SideMenuItemProps)
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