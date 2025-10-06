import Link from 'next/link';

const navItems = [
  { href: "/topics", label: "Topics" },
  { href: "/series", label: "series" },
  { href: "/use-cases", label: "use cases" },
  { href: "/pocs", label: "POCs" },
  { href: "/learning-history", label: "learning history" }
];

const Navbar = () => {
  return (
    <nav
      data-ui="navigation-area"
      className="overflow-auto py-3 h-fit"
    >
      <ul className="flex gap-6 font-serif font-thin justify-between text-midnight-blue lowercase text-xl [&>p]:rounded-lg [&>p]:p-1 [&>p]:cursor-pointer [&>p:hover]:text-dark-pink">
        {navItems.map((item) => (
          <p key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </p>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
