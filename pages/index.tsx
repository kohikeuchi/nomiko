import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("create-events");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="title">
        Read <Link href="/create-events">this page!</Link>
      </h1>
    </main>
  );
}
