const Quote = ({ ...props }) => {
  return (
    <blockquote
      className="my-6 p-4 bg-teal-100 border-l-4 border-l-emerald-800 "
      {...props}
    />
  );
};

export { Quote };
