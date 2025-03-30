import { GoBack } from "./go-back";

const PageHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <div className="flex justify-between px-2 my-2 text-wenge bg-misty_rose-900 shadow-lg sticky top-[70px] w-screen py-4 global-spacing ">
    <div>
      <h1 className="text-3xl font-serif font-thin uppercase lg:text-7xl lg:mb-8">
        {title}
      </h1>
      {subtitle && <p className="text-lg text-wenge">{subtitle}</p>}
    </div>
    <GoBack label="back" />
  </div>
);

export { PageHeading };
