import { Inter } from "next/font/google";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push(href);
  // };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
