const Callout = ({ ...props }) => {
  return (
    <aside
      className="text-lg font-sans font-light p-4 my-8 bg-sunken-cascades text-tundra-frost rounded-lg *>p{text-tundra-frost}"
      {...props}
    />
  );
};

export { Callout };
