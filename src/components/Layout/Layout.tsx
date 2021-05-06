import { ReactNode, useState } from "react";
import Navbar from "../navigation/navbar/Navbar";
import SideNav from "../navigation/sidenav/SideNav";
import useStyles from './styles';

interface LayoutProps
{
    children: ReactNode
}


function Layout({ children }: LayoutProps)
{
    const styles = useStyles();
    const [open_mobile, setMobileOpen] = useState(false);

    return (
        <div className={styles.container}>
            <Navbar open_mobile={open_mobile} setOpenMobile={setMobileOpen} />
            <SideNav open_mobile={open_mobile} setOpenMobile={setMobileOpen} />
            <div className={styles.page_content}>
                <div className={styles.toolbar} />
                {children}
            </div>
        </div>
    )
}

export default Layout;