import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <Link href="/" className="font-bold text-2xl">
          <div>TechForge</div>
        </Link>

        {/* Links */}
        <ul className="flex space-x-5">
          <li className="font-bold text-xl">
            <Link href="communities">Communities</Link>
          </li>
          <li>
            <Link href="resources" className="font-bold text-xl">
              Resources
            </Link>
          </li>
          <li>
            <Link href="about" className="font-bold text-xl">
              About
            </Link>
          </li>
        </ul>
        <div className="space-x-3">
          <button>Sign in</button>
          <button>Get Started</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
