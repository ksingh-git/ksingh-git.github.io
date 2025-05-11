import Link from "next/link";
export default function Portfolio() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio page!</p>
      <Link href="/blog">Go to Blog</Link>
    </div>
  );
}
