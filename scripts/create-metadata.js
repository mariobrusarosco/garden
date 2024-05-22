console.log("create-metadata for topics!");

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const dirPath = "domains/garden-content";
const files = fs
  .readdirSync(dirPath)
  .filter((file) => path.extname(file) === ".mdx");

let metadata = {};

files.forEach((file) => {
  console.log("[READING FILE]: ", file);
  const content = fs.readFileSync(path.join(dirPath, file), "utf8");
  const frontmatter = matter(content).data;

  if (frontmatter["related-topics"]) {
    frontmatter["related-topics"].forEach((topic) => {
      if (!metadata[topic]) {
        metadata[topic] = [file];
      } else {
        metadata[topic].push(file);
      }
    });
  }
});

fs.writeFileSync("metadata.json", JSON.stringify(metadata, null, 2));
