import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postDirectory = path.join(process.cwd(), 'posts');

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/,''); // removes file extension
    const filePath = path.join(postDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getPostsFiles() {
    return fs.readdirSync(postDirectory);
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    // for(const  postFile of postFiles) {
        // getPostData(postFile);
    // }

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 :1);

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}