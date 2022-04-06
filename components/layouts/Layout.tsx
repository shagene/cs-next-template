import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";
import styles from "./Layout.module.css";


// @ts-ignore
export default function Layout({ children }) {
    return (
        <div className={"container"}>
            <SideNav />
            <div className={styles.mainWrapper}>
                <Header />
                <main>{children}</main>      
                <Footer />
            </div>


        </div>
    )
}