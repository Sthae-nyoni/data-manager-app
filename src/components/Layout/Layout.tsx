import { ReactNode } from "react";
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

    return (
        <div className={styles.container}>
            <Navbar />
            <SideNav />
            <div className={styles.page_content}>
                <div className={styles.toolbar} />
                {children}
            </div>
        </div>
    )
}

export default Layout;