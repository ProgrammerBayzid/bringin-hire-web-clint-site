import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div className="mb-20  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <h2 className="text-[50px] font-bold mb-12 text-center">
          <span className="text-[#00DC9A] ">Bringin</span> featured on
        </h2>

        <Slider ref={(slider) => (this.slider = slider)} {...settings} >
          
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5 ">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div>
            <div className="card w-[247px] h-[315px] bg-[#00DC9A]">
              <div className="card-body">
                <div className="w-[315px] h-[254px] bg-white rounded shadow-xl">
                  <div className="card-body items-center text-center">
                    <Image
                      src="/the-daily-star-seeklogo.png"
                      height={130}
                      width={395}
                      className="mt-[px] w-[249px] h-[50px] rounded "
                    ></Image>
                    <div className="w-[230px] h-[2px] bg-[#00DC9A] mt-5"></div>
                  </div>
                  <div>
                    <p className="px-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          
        </Slider>
      </div>
    );
  }
}
