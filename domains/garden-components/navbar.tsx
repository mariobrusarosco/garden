const Navbar = () => {
  return (
    <nav
      data-ui="navigation-area"
      className="overflow-auto global-x-spacing py-3 lg:max-w-[420px] h-fit"
    >
      <ul className="flex justify-between text-wenge-300">
        <p className=" rounded-lg p-1 cursor-pointer lowercase font-serif font-thin text-lg hover:text-puce-300">
          <a href="/topics">Topics</a>
        </p>

        <p className="rounded-lg p-1 cursor-pointer lowercase  font-serif font-thin text-lg hover:text-puce-300">
          <a href="/series">series</a>
        </p>

        <p className="rounded-lg p-1 cursor-pointer lowercase  font-serif font-thin text-lg hover:text-puce-300">
          <a href="/use-cases">use cases</a>
        </p>

        <p className="rounded-lg p-1 cursor-pointer lowercase  font-serif font-thin text-lg hover:text-puce-300">
          <a href="/pocs">POCs</a>
        </p>
      </ul>
    </nav>
  );
};

export { Navbar };
