export default async function Home() {
  const res = await fetch(process.env.CUSTOM_API, {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white text-3xl">Hello Amplify</h1>
      <p className="text-white text-md">{JSON.stringify(data)}</p>
    </main>
  );
}
