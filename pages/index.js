import Head from "next/head";
import { getSlugs } from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
    const slugs = await getSlugs();
    return {
        props: {slugs}
    }
}

function HomePage({ slugs }) {
    console.log(slugs)
    return (
        <>
            <Head>
                <title>My Blog</title>
            </Head>
            <main>
                <h1>My Blog</h1>
                <ul>
                    { slugs.length && slugs.map(slug => <li><Link href={`posts/${slug}`}>{ slug }</Link></li>) }
                </ul>
            </main>
        </>
    )
}

export default HomePage;