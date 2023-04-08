import Image from "next/image";

const Find = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="hero  bg-white justify-center">
        <div className="flex gap-10 flex-col lg:flex-row-reverse ">
          <div className="w-full">
            <h1 className="text-5xl font-bold">
              Find the AI-Matching best relevant candidate in your city without
              any consultant.{" "}
            </h1>
            <div className="card-actions lg:ml-20   mt-24">
              <button className="btn btn-success">Join as Recruiter</button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative ">
              <div className="  ">
                <Image
                  src="/imag.png"
                  height={30}
                  width={700}
                  className="mt-[px] h-[416px] w-[100s0px] "
                ></Image>
              </div>

              <div className=" absolute  bottom-[3px] ">
                <Image
                  src="/Home page 2.png"
                  height={130}
                  width={395}
                  className=" h-[400px] w-[624px] "
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
