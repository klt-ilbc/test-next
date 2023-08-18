import Link from "next/link";

const page = () => {
  return (
    <div className="text-white gap-8 flex justify-center items-center min-h-screen ">
      <Link href="/">
        <span className="underline hover:text-red-500">Home</span>
      </Link>
      <h1 className="text-3xl font-2xl"> Profile</h1>
    </div>
  );
};

export default page;
