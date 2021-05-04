import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useStyles from './styles';



interface TopNavItemProps
{
    nav_item: NavItem;
}

interface NavItem
{
    text: string;
    path: string;
    is_clickable: boolean;
}

const home_nav_items = [
    { text: 'Home', path: '/', is_clickable: false }
]

const add_nav_items = [
    { text: 'Session', path: '/add', is_clickable: true },
    { text: 'Track custom session', path: '/add/custom_session', is_clickable: true },
]

const settings_nav_items = [
    { text: 'Package settings', path: '/settings', is_clickable: true },
    { text: 'Reset', path: '/settings/reset', is_clickable: true },
]


function Navbar()
{
    const styles = useStyles();
    const [nav_items, setNavItems] = useState<NavItem[]>([]);
    const location = useLocation();

    if (location.pathname === '/' && nav_items !== home_nav_items)
        setNavItems(home_nav_items);
    else if (location.pathname.includes('/add') && nav_items !== add_nav_items)
        setNavItems(add_nav_items)
    else if (location.pathname.includes('/settings') && nav_items !== settings_nav_items)
        setNavItems(settings_nav_items);
    else if (location.pathname === '/analysis' && nav_items.length > 0)
        setNavItems([]);


    return (
        <AppBar elevation={0} className={styles.appbar} >
            <Toolbar>
                {nav_items.map(item => <TopNavItem key={item.text} nav_item={item} />)}
            </Toolbar>
        </AppBar>
    )
}


function TopNavItem({ nav_item }: TopNavItemProps)
{
    const history = useHistory()
    return (
        <>
            {
                !nav_item.is_clickable ?
                    <Typography variant='h6'>{nav_item.text}</Typography> :
                    <Button color='inherit' onClick={() => history.push(nav_item.path)} >
                        <Typography variant='h6'>{nav_item.text}</Typography>
                    </Button>
            }
        </>
    )
}

export default Navbar;