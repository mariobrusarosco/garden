console.log("[CREATING METADATA] ...");

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const readFolderFiles = (dirPath) => {
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => path.extname(file) === ".mdx");
  return files;
};

const createTopicsMetadata = () => {
  let topics = {};
  const dirPath = path.join("domains", "garden-content", "topics");
  const files = readFolderFiles(dirPath);

  files.forEach((file) => {
    console.log("[READING TOPIC FILE]: ", file);
    const content = fs.readFileSync(`${dirPath}/${file}`, "utf8");
    const frontmatter = matter(content).data;

    if (frontmatter["related-topics"]) {
      frontmatter["related-topics"].forEach((topic) => {
        if (!topics[topic]) {
          topics[topic] = [file];
        } else {
          topics[topic].push(file);
        }
      });
    }
  });

  fs.writeFileSync("metadata-topics.json", JSON.stringify(topics, null, 2));
};

const createSeriesMetadata = () => {
  let series = {};
  const dirPath = path.join("domains", "garden-content", "series");
  const files = readFolderFiles(dirPath);

  files.forEach((file) => {
    console.log("[READING SERIES FILE]: ", file);
    const content = fs.readFileSync(`${dirPath}/${file}`, "utf8");
    const frontmatter = matter(content).data;
    const serieName = frontmatter["serie"];
    if (!serieName) {
      console.log("[SERIE NAME NOT FOUND]: ", file);
      return;
    }

    if (!series[serieName]) {
      series[serieName] = [file];
    } else {
      series[serieName].push(file);
    }
  });

  fs.writeFileSync("metadata-series.json", JSON.stringify(series, null, 2));
};

createTopicsMetadata();
createSeriesMetadata();

console.log("[METADATA CREATED SUCCESSFULLY]");
