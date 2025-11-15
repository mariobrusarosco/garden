const Paragraph = ({ ...props }) => {
  return (
    <p className="mt-4 text-lg font-sans text-night-brown font-light lg:text-xl leading-10" {...props} />
  );
};

export { Paragraph };
