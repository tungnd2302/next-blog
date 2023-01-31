import Head from "next/head";
import NavBar from "../components/navbar";
import "../styles/global.css"

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header>
                <NavBar />
            </header>
            <Component {...pageProps} />
        </>
    )
}

export default App;