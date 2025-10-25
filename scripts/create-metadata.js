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
  
  // Step 1: Build files array for each topic
  files.forEach((file) => {
    console.log("[READING TOPIC FILE]: ", file);
    const content = fs.readFileSync(`${dirPath}/${file}`, "utf8");
    const frontmatter = matter(content).data;

    if (frontmatter["related-topics"]) {
      frontmatter["related-topics"].forEach((topic) => {
        if (!topics[topic]) {
          topics[topic] = { files: [file], summary: "", category: "concepts", icon: "" };
        } else {
          topics[topic].files.push(file);
        }
      });
    }
  });
  
  // Step 2: Find primary file for each topic and extract metadata
  Object.keys(topics).forEach((topicSlug) => {
    // Try to find primary file (e.g., "react.mdx" for topic "react")
    const primaryFileName = `${topicSlug}.mdx`;
    const primaryFilePath = path.join(dirPath, primaryFileName);
    
    if (fs.existsSync(primaryFilePath)) {
      console.log(`[FOUND PRIMARY FILE FOR "${topicSlug}"]: ${primaryFileName}`);
      const fileContent = fs.readFileSync(primaryFilePath, "utf8");
      const parsed = matter(fileContent);
      const frontmatter = parsed.data;
      const content = parsed.content;
      
      // Extract metadata from frontmatter
      topics[topicSlug].category = frontmatter.category || "concepts";
      topics[topicSlug].summary = frontmatter.summary || "";
      topics[topicSlug].icon = frontmatter.icon || ""; // Optional: defaults to empty string
    } else {
      console.log(`[WARNING] No primary file found for topic "${topicSlug}"`);
    }
  });

  fs.writeFileSync("metadata-topics.json", JSON.stringify(topics, null, 2));
};

const createSeriesMetadata = () => {
  let series = {};
  const dirPath = path.join("domains", "garden-content", "series");
  const files = readFolderFiles(dirPath);

  // Step 1: Build files array for each serie
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
      series[serieName] = { files: [file], summary: "", category: "concepts", icon: "" };
    } else {
      series[serieName].files.push(file);
    }
  });

  // Step 2: Find primary file for each serie and extract metadata
  Object.keys(series).forEach((serieSlug) => {
    // Try to find primary file (e.g., "ai.mdx" for serie "ai")
    const primaryFileName = `${serieSlug}.mdx`;
    const primaryFilePath = path.join(dirPath, primaryFileName);

    if (fs.existsSync(primaryFilePath)) {
      console.log(`[FOUND PRIMARY FILE FOR SERIE "${serieSlug}"]: ${primaryFileName}`);
      const fileContent = fs.readFileSync(primaryFilePath, "utf8");
      const parsed = matter(fileContent);
      const frontmatter = parsed.data;

      // Extract metadata from frontmatter
      series[serieSlug].category = frontmatter.category || "concepts";
      series[serieSlug].summary = frontmatter.summary || "";
      series[serieSlug].icon = frontmatter.icon || ""; // Optional: defaults to empty string
    } else {
      console.log(`[WARNING] No primary file found for serie "${serieSlug}"`);
    }
  });

  fs.writeFileSync("metadata-series.json", JSON.stringify(series, null, 2));
};

createTopicsMetadata();
createSeriesMetadata();

console.log("[METADATA CREATED SUCCESSFULLY]");
