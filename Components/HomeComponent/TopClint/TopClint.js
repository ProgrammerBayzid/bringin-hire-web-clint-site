import Image from "next/image";

const TopClint = () => {
  return (
    <div className="mt-[68px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="mb-[46px]">
        <h1 className="text-[40px] font-medium text-center">Top Clint</h1>
        </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-[58px] justify-center">
        <div className="card w-[213px] h-[211px] bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <Image
              src="/salman-preeom-mO1_udD5iCs-unsplash.jpg"
              height={130}
              width={395}
              className="mt-[px] sm:w-[256.7px] lg:w-[149.06px] rounded rounded-xl"
            ></Image>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-[25px]">Dhaka</h2>
          </div>
        </div>
        <div className="card w-[213px] h-[211px] bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <Image
              src="/salman-preeom-mO1_udD5iCs-unsplash.jpg"
              height={130}
              width={395}
              className="mt-[px] sm:w-[256.7px] lg:w-[149.06px] rounded rounded-xl"
            ></Image>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-[25px]">Dhaka</h2>
          </div>
        </div>
        <div className="card w-[213px] h-[211px] bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <Image
              src="/salman-preeom-mO1_udD5iCs-unsplash.jpg"
              height={130}
              width={395}
              className="mt-[px] sm:w-[256.7px] lg:w-[149.06px] rounded rounded-xl"
            ></Image>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-[25px]">Dhaka</h2>
          </div>
        </div>
        <div className="card w-[213px] h-[211px] bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <Image
              src="/salman-preeom-mO1_udD5iCs-unsplash.jpg"
              height={130}
              width={395}
              className="mt-[px] sm:w-[256.7px] lg:w-[149.06px] rounded rounded-xl"
            ></Image>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="text-[25px]">Dhaka</h2>
          </div>
        </div>
        <div className="card w-[212px] h-[211px] bg-[#F6FCF6] shadow-xl">
          <div className=" mx-auto my-auto "> 
            <h2 className="text-[20px]">Find More</h2>
            <Image
                      src="/plus.png"
                      height={80}
                      width={80}
                      className=" rounded"
                    ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopClint;
