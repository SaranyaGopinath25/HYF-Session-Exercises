
import Header from "./Header.jsx"
import MainContent from "./MainContent.jsx"
import Footer from "./Footer.jsx"



const Layout = ({ children }) => {
    return(
        <>
        <Header />
        <MainContent>
            {children}
        </MainContent>
        <Footer />
        </>

    )
}

export default Layout;