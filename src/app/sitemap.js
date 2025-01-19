import allPosts from "../app/blogs/post";

export default () => {
  const posts = allPosts().map((post) => ({
    url: `https://inguzdev.co/blogs/${post.slug}`,
    lastModified: post.metadata?.publishedAt,
  }));

  const routes = ["", "/about", "/projects", "/blogs"].map((route) => ({
    url: `https://inguzdev.co/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
};
