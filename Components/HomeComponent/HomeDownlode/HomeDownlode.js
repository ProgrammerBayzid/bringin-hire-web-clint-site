import Image from "next/image";

const HomeDownlode = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="hero bg-[#00DC9A] h-[516px]">
          <div className="hero-content w-full flex-col lg:gap-80 lg:flex-row-reverse">
            <div className="text-center lg:text-left ">
              <h1 className="text-[40px] text-black font-bold">
                Download the bringin App
              </h1>
              <div className="py-6">
                <div class="flex">
                  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    +880
                  </span>
                  <div className="flex gap-5">
                    <input
                      type="text"
                      placeholder="Enter Mobile Number"
                      className="input rounded  w-full "
                    />
                    <button className="bg-white btn  btn-success">
                      <p className="text-black ">Get App</p>
                    </button>
                  </div>
                </div>
                <p className="text-[12px] w-3/4 mt-4">
                  Download the bringin App +880 Enter Mobile Number Get App We
                  will send you a download link via SMS. Click the link to
                  download the app and install now.
                </p>
              </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm hidden sm:block ">
              <div className="lg:mt-[87px] sm">
                <Image
                  src="/phone1.png"
                  height={130}
                  width={129}
                  className="mt-[px] sm:w-[134px] lg:w-[295px] "
                ></Image>
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
};

export default HomeDownlode;
