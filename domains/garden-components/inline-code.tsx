const InlineCode = ({ ...props }) => {
  return (
    <span
      className="text-base text-red-500 font-semibold bg-teal-100  py-1 px-2 rounded-lg"
      {...props}
    />
  );
};

export { InlineCode };
