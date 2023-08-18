import Link from "next/link";

export default async function Home() {
  const res = await fetch(process.env.CUSTOM_API, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 justify-start p-24">
      <h1 className="text-white text-3xl">Hello Amplify</h1>
      <div className="gap-6 flex items-center">
        <Link href="/profile">
          <span className="px-12 py-4 border-2 border-white rounded-md bg-transparent text-white">
            profile
          </span>
        </Link>
        <Link href="/about/123">
          <span className="px-12 py-4 border-2 border-white rounded-md bg-transparent text-white">
            about
          </span>
        </Link>
      </div>
      <p className="text-white text-md">{JSON.stringify(data)}</p>
    </main>
  );
}
