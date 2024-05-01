import { MDXParser } from "@/domains/components/mdx-parser";

export default async function PlantsPage() {
  const source = `
  # 1 
  ## 2
  `;

  return (
    <>
      <h2>Plants</h2>
      <MDXParser source={source} />
    </>
  );
}
