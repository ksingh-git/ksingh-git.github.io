import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

//Get Categories list
export async function getCategoriesList() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  // All Categories
  const categories = [
    ...new Set(
      fileNames
        .map((fileName) => {
          // Read markdown file as string
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          // Use gray-matter to parse the post metadata section
          const matterResult = matter(fileContents);
          // Returns a single matter result.
          return matterResult.data.categories;
        })
        .flat(1)
    ),
  ];
  return categories;
}
