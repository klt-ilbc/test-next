import Link from "next/link";

const Me = ({ params }) => {
  console.log(params, "from post");
  return (
    <div className="text-white gap-8 flex justify-center items-center min-h-screen ">
      <Link href="/">
        <span className="underline hover:text-red-500">Home</span>
      </Link>
      <h1 className="text-3xl font-2xl"> {params.me}</h1>
    </div>
  );
};

export default Me;
