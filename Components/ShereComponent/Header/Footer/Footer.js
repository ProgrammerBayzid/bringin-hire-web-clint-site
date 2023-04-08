import Image from "next/image";

const Footer = () => {
  return (
    <section className="mt-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
    <div className="lg:h-[366px] p-10 bg-[#E9F4E7] text-center">
    <footer className="footer mx-auto">
        <div className="lg:ml-12">
          <Image
            src="/Logo.png"
            height={51}
            width={236}
            className="cursor-pointer"
          ></Image>
          <p className="text-[20px]">Instant Chat - Hire Direct</p>

          <div className="mt-10">
            <div className="flex items-center gap-2">
              <Image src="/Mail Icon.png" height={0} width={30}></Image>
              <p className="text-[15px] ">hello@bringin</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/whatsapp.png" height={0} width={30}></Image>
              <p className="text-[15px] ">hello@bringin</p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[16px] ">Get the App</p>

            <div className="flex">
              <Image src="/An.png" height={0} width={30}></Image>

              <Image src="/Ap.png" height={0} width={30}></Image>
            </div>
          </div>
        </div>
        <div className=" mx-auto sm:mx-0">
          <span className="text-[19px] text-black font-medium">
            Recruiters{" "}
          </span>
          <a className="link link-hover ">Pricing</a>
          <a className="link link-hover">Enterprise Solutions</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div className=" mx-auto sm:mx-0">
          <span className="text-[19px] text-black font-medium">
            Job Seekers
          </span>
          <a className="link link-hover">Guideline</a>
          <a className="link link-hover">FAQ</a>
        </div>
        <div className="mx-auto sm:mx-0">
          <span className="text-[19px] text-black font-medium">Bringin</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us </a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">How It Works</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Condition</a>
        </div>
        <div className="mx-auto sm:mx-0">
          <span className="text-[19px] text-black font-medium">Follow Us</span>
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Youtube</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
        </div>


      </footer>
      
<div >  <p className="flex justify-center">© Bringin Technologies Limited. All Rights Reserved.</p></div>


    </div>
    </section>
  );
};

export default Footer;
