import Heading from "../components/heading.mdx";

function CustomH1({ children }) {
  return <h1 style={{ color: "blue", fontSize: "100px" }}>{children}</h1>;
}

const overrideComponents = {
  h1: CustomH1,
};

const PlantsPage = () => {
  return (
    <div>
      <h1>Plants</h1>
      <Heading components={overrideComponents} />
    </div>
  );
};

export default PlantsPage;
