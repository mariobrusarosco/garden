const Paragraph = ({ ...props }) => {
  return (
    <p className="my-4 text-lg font-sans font-light lg:text-2xl" {...props} />
  );
};

export { Paragraph };
