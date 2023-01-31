import Head from "next/head";
import { getPosts, getSlugs } from "../../lib/posts";

export async function getStaticPaths() {
    const slugs = await getSlugs();
    return {
        paths: slugs.map(slug => {
            return {
                params: {
                    slug
                }
            }
        }),
        fallback: false
    }
}

export async function getStaticProps({ params: {slug} }) {
    const post = await getPosts(slug);
    return {
        props: { post }
    }
}

function FirstPostPage({post}) {
    return (
        <>
            <Head>
                <title>{ post.title } - My Blog</title>
            </Head>
            <main>
                <h1>{ post.title }</h1>
                <article dangerouslySetInnerHTML={{ __html: post.body }} />
            </main>
        </>
    )
}

export default FirstPostPage;