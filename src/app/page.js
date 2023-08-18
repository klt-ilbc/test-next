"use client";
export default function Home() {
  console.log(process.env.googleClientId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-mono text-white text-3xl">Hello Amplify</h1>
      <h1 className="font-mono text-white text-3xl">
        {process.env.googleClientId}
      </h1>
    </main>
  );
}
