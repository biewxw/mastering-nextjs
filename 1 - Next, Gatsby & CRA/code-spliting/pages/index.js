import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Hello from the home page</div>
      <Link href="/about">About</Link>
    </>
  );
}
