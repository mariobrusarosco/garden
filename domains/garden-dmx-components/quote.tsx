const Quote = ({ ...props }) => {
  return (
    <blockquote
      className="my-6 p-4 bg-blue-feather border-l-4 border-l-blue-whale "
      {...props}
    />
  );
};

export { Quote };
