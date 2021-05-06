import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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

const analysis_nav_items = [
    { text: 'Overview', path: '/analysis/overview', is_clickable: true },
    { text: 'Insights', path: '/analysis/insights', is_clickable: true },
    { text: 'Calculate', path: '/analysis/calculate', is_clickable: true },
]

interface NavProps
{
    open_mobile: boolean;
    setOpenMobile: (open_mobile: boolean) => void;
}



function Navbar({ open_mobile, setOpenMobile }: NavProps)
{
    const styles = useStyles();
    const [nav_items, setNavItems] = useState<NavItem[]>([]);
    const location = useLocation();

    syncNavItems(location.pathname, nav_items, setNavItems);

    const handleDrawerToggle = () => setOpenMobile(!open_mobile);

    return (
        <AppBar elevation={0} className={styles.appbar} >
            <Toolbar>
                <IconButton onClick={handleDrawerToggle} className={styles.menuButton} color="inherit" aria-label="open drawer" edge="start">
                    <MenuIcon />
                </IconButton>
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

function syncNavItems(path: string, nav_items: NavItem[], setNavItems: (nav_items: NavItem[]) => void)
{
    if (path === '/' && nav_items !== home_nav_items)
        setNavItems(home_nav_items);
    else if (path.includes('/add') && nav_items !== add_nav_items)
        setNavItems(add_nav_items)
    else if (path.includes('/settings') && nav_items !== settings_nav_items)
        setNavItems(settings_nav_items);
    else if (path.includes('/analysis') && nav_items !== analysis_nav_items)
        setNavItems(analysis_nav_items);
}

// if (location.pathname === '/' && nav_items !== home_nav_items)
//     setNavItems(home_nav_items);
// else if (location.pathname.includes('/add') && nav_items !== add_nav_items)
//     setNavItems(add_nav_items)
// else if (location.pathname.includes('/settings') && nav_items !== settings_nav_items)
//     setNavItems(settings_nav_items);
// else if (location.pathname.includes('/analysis') && nav_items !== analysis_nav_items)
//     setNavItems(analysis_nav_items);


export default Navbar;