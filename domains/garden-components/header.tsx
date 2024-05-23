import Link from "next/link";

export const Header = () => {
  return (
    <header className="container global-spacing sticky top-0 shadow-xl bg-puce">
      <h1 className="text-misty_rose text-2xl font-sans font-light flex items-center justify-between">
        <Link href="/">Digital Garden</Link>
      </h1>
    </header>
  );
};
