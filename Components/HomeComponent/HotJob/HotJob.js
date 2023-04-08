import Image from "next/image";

const HotJob = () => {
  return (
    <div className="mt-[67px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="mb-[46px]  ">
        <h1 className="mx-auto text-[40px] font-medium  text-center">Hot Job Industries</h1>
        </div>
     <div className=" ">
     <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-[58px] justify-center">
        <div className="card w-[212px]  h-[130px] bg-[#F6FCF6] hover:shadow-xl">
          <div className="card-body"> 
            <h2 className="text-[20px]">Technology & Engineering</h2>
            <p className="text-[16px]">120+ Candidates</p>
          </div>
        </div>
        <div className="card w-[212px]  h-[130px] bg-[#F6FCF6] hover:shadow-xl">
          <div className="card-body"> 
            <h2 className="text-[20px]">Internet, IT & Online</h2>
            <p className="text-[16px]">90+ Candidates</p>
          </div>
        </div>
        <div className="card w-[212px]  h-[130px] bg-[#F6FCF6] hover:shadow-xl">
          <div className="card-body"> 
            <h2 className="text-[20px]">Manufacturing</h2>
            <p className="text-[16px]">80+ Candidates</p>
          </div>
        </div>
        <div className="card w-[212px]  h-[130px] bg-[#F6FCF6] hover:shadow-xl">
          <div className="card-body"> 
            <h2 className="text-[20px]">Influencers</h2>
            <p className="text-[16px]">95+ Candidates</p>
          </div>
        </div>
        <div className="card w-[212px]  h-[130px] bg-[#F6FCF6] hover:shadow-xl">
          <div className="flex  my-auto items-center"> 
            
            <Image
                      src="/plus.png"
                      height={40}
                      width={69}
                      className=" rounded"
                    ></Image>
            
            <h2 className="text-[20px]">Find More</h2>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default HotJob;
