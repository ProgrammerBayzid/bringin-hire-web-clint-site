import Image from "next/image";

const ChatDirect = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
      <div className="hero min-h-screen  bg-white">
        <div className="flex gap-10 flex-col lg:flex-row-reverse ">
          <div className="hidden lg:block">
            <div className="relative ">
              <div className="  ">
                <Image
                  src="/im (2).png"
                  height={30}
                  width={700}
                  className="mt-[px] h-[350px] w-[800px] "
                ></Image>
              </div>

              <div className=" absolute  bottom-[3px] ">
                <Image
                  src="/Home page 1.png"
                  height={130}
                  width={395}
                  className=" h-[420px] w-[700px] ml-20"
                ></Image>
              </div>
            </div>
          </div>

          <div className="ml-20">
            <h1 className="text-5xl font-bold">
              Chat Directly with the Recruiters & Get Hired Instantly.
            </h1>
            <div className="card-actions lg:ml-20   mt-10">
              <button className="btn btn-success">Download App Now</button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDirect;
