import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div >
<ul>
  <li>
    <Link href="/about"> About us</Link>
  </li>
  <li>
    <Link href="/contact"> Contact us</Link>
  </li>
  <li>
    <Link href="/services"> Services</Link>
  </li>
  <li>
    <Link href="/app-development"> App development</Link>
  </li>
</ul>
<h1>Welcome to homepage</h1>
    </div>
  );
}
