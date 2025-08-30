import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

//Get Categories list
export async function getCategoriesList() {
    const fileNames = fs.readdirSync(postsDirectory);
    const uniqueCategories = new Set();

    fileNames.forEach((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);
        const {categories} = matterResult.data;

        // Remove duplicates within the categories of the current file (case-insensitive)
        const uniqueCategoriesInFile = new Set(categories.map((category) => category.toLowerCase()));

        // Add unique categories from this file to the main set (case-insensitive)
        uniqueCategoriesInFile.forEach((category) => {
            uniqueCategories.add(category.charAt(0).toUpperCase() + category.slice(1));
        });
    });

    return Array.from(uniqueCategories);
}
