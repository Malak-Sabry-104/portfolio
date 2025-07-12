const ErrorPage = () => {
  return (
    <>
      <section id="error-wrapper" className="mb-[60px]  text-center ">
        <h2 className="pulse text-white/40 tracking-wider mb-[2rem] pt-[100px] ">404</h2>
        <h1 className="py-[10px] mb-[1rem] ">Page Not Found</h1>
        <p className="mb-[2.5rem]">
          it seems the page you're looking for doesn't exist. Let's get you back
          on track.
        </p>
        <div className="btns-group flex justify-center items-center gap-6">
          <button
            className="bg-gradient px-4 py-2 rounded-xl backdrop-blur-md text-purple-100 ring-1 ring-purple-300/30 
        hover:scale-[1.04] shadow-md  cursor-pointer"
          >
            Return to HomePage
          </button>
          <button
            className="border-gradient px-4 py-2 rounded-xl text-purple-100 shadow-md 
          cursor-pointer hover:scale-[1.04]"
          >
            Explore Features
          </button>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
