import { readFile, readdir } from 'fs/promises';
import { marked } from "marked";
import matter from "gray-matter";

export async function getPosts(slug) {
    const source = await readFile(`content/posts/${slug}.md`, 'utf-8');
    const { data: {date, title}, content } = matter(source)
    const body = marked(content);
    return {
        date,
        title,
        body,
    }
}

export async function getSlugs() {
    const ext = ".md";
    const folders = await readdir(`content/posts/`);
    return folders.filter(file => file.endsWith(ext)).map(file => file.slice(0, -ext.length));
}