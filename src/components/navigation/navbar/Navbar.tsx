import { AppBar, Toolbar, Tooltip } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import RestoreIcon from '@material-ui/icons/Restore';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FunctionsIcon from '@material-ui/icons/Functions';

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
    icon: React.ReactNode;
}


const add_nav_items = [
    { text: 'Current session', path: '/add', icon: <DataUsageIcon fontSize='large' /> },
    { text: 'Add custom session', path: '/add/custom_session', icon: <AddBoxIcon fontSize='large' /> },
]

const settings_nav_items = [
    { text: 'Package settings', path: '/settings', icon: <SettingsApplicationsIcon fontSize='large' /> },
    { text: 'Reset value settings', path: '/settings/reset', icon: <RestoreIcon fontSize='large' /> },
]

const analysis_nav_items = [
    { text: 'Overview', path: '/analysis/overview', icon: <TrendingUpIcon fontSize='large' /> },
    { text: 'Insights', path: '/analysis/insights', icon: <EmojiObjectsIcon fontSize='large' /> },
    { text: 'Calculate', path: '/analysis/calculate', icon: <FunctionsIcon fontSize='large' /> },
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
            <Tooltip title={nav_item.text}>
                <IconButton onClick={() => history.push(nav_item.path)} >
                    {nav_item.icon}
                </IconButton>
            </Tooltip>
        </>
    )
}

function syncNavItems(path: string, nav_items: NavItem[], setNavItems: (nav_items: NavItem[]) => void)
{
    if (path === '/' && nav_items.length > 0)
        setNavItems([]);
    else if (path.includes('/add') && nav_items !== add_nav_items)
        setNavItems(add_nav_items)
    else if (path.includes('/settings') && nav_items !== settings_nav_items)
        setNavItems(settings_nav_items);
    else if (path.includes('/analysis') && nav_items !== analysis_nav_items)
        setNavItems(analysis_nav_items);
}



export default Navbar;