import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { serialize } from "next-mdx-remote/serialize";

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usag
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}
export async function getPost(slug) {
  try {
    const filePath = path.join("content", `${slug}.mdx`);
    let source = fs.readFileSync(filePath, "utf-8");
    const { content: rawContent, data: metadata } = matter(source);

    const mdxSource = await serialize(rawContent, {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: {
                light: "min-light",
                dark: "min-dark",
              },
              keepBackground: false,
            },
          ],
        ],
      },
    });

    return {
      source: mdxSource,
      metadata,
      slug,
    };
  } catch (error) {
    return {
      source: null,
      metadata: null,
      slug: null,
    };
  }
}

async function getAllPosts(dir) {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      let { metadata, source } = await getPost(slug);

      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  const posts = getAllPosts(path.join(process.cwd(), "content"));
  return posts;
}
