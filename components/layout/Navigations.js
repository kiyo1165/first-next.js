import Link from "next/link";

const Navigation = () => {
  return (
    <header className="container flex flex-row items-center mx-auto px-5 py-14 max-2-screen-lg">
      <Link href="/">
        <a className="text-4xl font-bold text-red-300">NextJs Startup</a>
      </Link>
      <nav className="ml-auto">
        <Link href="/about">
          <a className="mr-5">About</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
