import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div>
      <h1>The Wild Oasis. Welcome to Paradise!</h1>
      <Link href="/cabins">Cabins</Link>
    </div>
  );
}
