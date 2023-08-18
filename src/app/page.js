export default function Home() {
  console.log(process.env.NODE_ENV);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-mono text-white text-3xl">Hello Amplify</h1>
      <p className="text-white">{process.env.NEXTAUTH_UR}</p>
    </main>
  );
}
