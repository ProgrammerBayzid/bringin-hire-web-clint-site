import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const menuItems = (
    <>
      <ul class="flex flex-col font-medium p-4 md:flex-row md:space-x-8 ">
        <li>
          <Link
            href="#"
            class=" py-1 px-2 text-black text-[19px] hover:border border-[#00DC9A] hover:rounded-full "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            class=" py-1 px-2 text-black text-[19px] hover:border border-[#00DC9A] hover:rounded-full "
          >
            Recruiters
          </Link>
        </li>
        <li>
          <Link
            href="#"
            class=" py-1 px-2 text-black text-[19px] hover:border border-[#00DC9A] hover:rounded-full "
          >
            Job Seekers
          </Link>
        </li>
        <li>
          <Link
            href="#"
            class=" py-1 px-2 text-black text-[19px] hover:border border-[#00DC9A] hover:rounded-full "
          >
            Recruiter Login
          </Link>
        </li>
        <li>
          <Link
            href="#"
            class=" py-1 px-2 text-black text-[19px] hover:border border-[#00DC9A] hover:rounded-full "
          >
            Download App
          </Link>
        </li>
        <li className="mt-2">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0}>
              {" "}
              <Image
                src="/bars.png"
                height={30}
                width={30}
                className="cursor-pointer"
              ></Image>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 w-52 mt-4"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </>
  );

  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl">
      <nav class="bg-white  h-[85px]  shadow drop-shadow-md">
        <div class="lg:mr-10 md:mr-7 sm:mr-5 flex flex-wrap items-center justify-between py-2">
          <Link href="#" class="lg:ml-[67px] md:ml-[30px] sm:ml-[10px] ">
            <Image src="/Logo.png" height={40} width={181}></Image>
          </Link>

          <div className="lg:hidden dropdown dropdown-end ">
            <label tabIndex={0}>
              {" "}
              <Image
                src="/bars.png"
                height={30}
                width={30}
                className="cursor-pointer"
              ></Image>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 w-52 mt-4"
            >
              {menuItems}
            </ul>
          </div>

          <div class="hidden w-full md:block md:w-auto">{menuItems}</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
