const Me = ({ params }) => {
  console.log(params, "from post");
  return (
    <div className="text-white flex justify-center items-center min-h-screen text-3xl font-2xl">
      {params.me}
    </div>
  );
};

export default Me;
