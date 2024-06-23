import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Mobile() {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [widthParent, setWidthParent] = useState(0);
  const [information, setInformation] = useState([]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const mySwiperImage = document.querySelectorAll(".mySwiper .image img");
      //   console.log(mySwiperImage);
      swiperInstance.on("slideChange", () => {
        if (swiperInstance.activeIndex > currentIndex) {
          mySwiperImage.forEach((ele) => {
            ele.style.cssText = ``;
          });
          mySwiperImage[
            swiperInstance.activeIndex
          ].style.cssText = `transform: rotate(45deg);`;
        } else {
          mySwiperImage.forEach((ele) => {
            ele.style.cssText = ``;
          });
          mySwiperImage[
            swiperInstance.activeIndex
          ].style.cssText = `transform: rotate(-45deg);`;
        }
        setCurrentIndex(swiperInstance.activeIndex);
        // before

        // mySwiperImage[currentIndex].style.cssText = `transform:rotate(-45deg)`;
        // after
        // console.log(mySwiperImage[currentIndex]);
        // console.log(currentIndex, "after");
      });

      const childs = document.querySelectorAll(".child");
      childs.forEach((element) => {
        element.classList.remove("active");
      });
      childs[swiperInstance.activeIndex].classList.add("active");
      //   const active = document.querySelector(".swiper-slide-active");
      //   console.log(active);
    }
  }, [currentIndex]);
  //  swiper-slide-active
  const fullScreen = (e) => {
    // set info
    setInformation([
      e.target.dataset.name,
      e.target.dataset.price,
      e.target.dataset.color,
    ]);
    console.log(
      e.target.dataset.name,
      e.target.dataset.price,
      e.target.dataset.color
    );
    console.log(information);
    // const swiper = document.querySelector(".swiper-wrapper");
    // swiper.style.cssText = `transform:none`;
    // e.target.style.cssText = `width:100%; height:100vh; position:fixed;left:0;top:0; z-index:1000;border-radius:0;`;
    e.currentTarget.classList.add("active");
    e.currentTarget.style.cssText = `
    z-index: 1000;
    left: 0px;
    top: -100px;
    width: 100%;
    height: 100vh;
    border-radius:0;
    transform: translate(-12px);
    `;
    const childs = document.querySelectorAll(".child");
    const child = childs[currentIndex];
    const info = child.querySelector(".info");
    const image = child.querySelector(".image");
    info.style.cssText = `opacity:0`;
    // console.log(image);
    image.style.cssText = `transform:translate(-50%, 0%) rotate(360deg);animation:40s 0.5s rotatePizza linear infinite;`;
    // child.parentElement.style.transformRotate = `360deg`;
    // console.log(child.parentElement);
    // console.log(image);
    setWidthParent(e.currentTarget.offsetWidth);
    const popupDown = document.querySelector(".popupDown");
    popupDown.style.width = `${document.documentElement.offsetWidth}px`;
    popupDown.style.transform = `translate(-12px,0%)`;
  };
  const closeScreen = (e) => {
    setTimeout(() => {
      const parent = document.querySelectorAll(".swiperParent");
      parent[
        currentIndex
      ].style.cssText = `width:${widthParent}px;  border-radius:8px;
      transform: translate(0px);margin-right:15px;`;
      const info = parent[currentIndex].querySelector(".info");
      info.style.opacity = "1";
      const image = parent[currentIndex].querySelector(".image");
      image.style.cssText = `transform:translate(-50%, -50%) rotate(0deg);animation:0.5s rotatePizza2 linear;`;
    }, 1000);
    // CLOSE POPUP from bottom
    const popupDown = document.querySelector(".popupDown");
    popupDown.style.width = `${document.documentElement.offsetWidth}px`;
    popupDown.style.transform = `translate(-12px,100%)`;
    // console.log(info);
  };
  return (
    <div className="px-3 py-5 flex flex-col h-screen justify-between">
      <div>
        <h2 className="text-3xl">Most</h2>
        <h2>Popular Food</h2>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={1.15}
        spaceBetween={15}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="mySwiper bg-500-red fixed top-[100px]"
      >
        <>
          <SwiperSlide
            className="relative py-24 px-4 text-start bg-[#417743] swiperParent"
            onClick={fullScreen}
            data-color="#417743"
            data-name="Pizza 1"
            data-price="100"
          >
            <div className="child">
              <div className="image absolute ">
                <img src="/1.png" alt="" className="w-full h-full " />
              </div>

              <div className="info">
                <p className="firstP text-[12px] mb-2 text-center text-sm">
                  Lorem ipsum dolor sit amet.
                </p>
                <p className="firstP text-[12px] leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi iste assumenda fugiat tempore necessitatibus
                  molestias aut dignissimos. Beatae, cumque numquam.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </>

        <SwiperSlide
          className="relative py-24 px-4 text-start bg-[#b46d06] swiperParent"
          onClick={fullScreen}
          data-color="#b46d06"
          data-name="Pizza 2"
          data-price="200"
        >
          <div className="child">
            <div className="image absolute">
              <img src="/2.png" alt="" className="w-full h-full " />
            </div>
            <div className="info">
              <p className="firstP text-[12px] mb-2 text-center text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="firstP text-[12px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iste assumenda fugiat tempore necessitatibus molestias
                aut dignissimos. Beatae, cumque numquam.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="relative py-24 px-4 text-start bg-[#b62b21] swiperParent"
          onClick={fullScreen}
          data-color="#b62b21"
          data-name="Pizza 3"
          data-price="300"
        >
          <div className="child">
            <div className="image absolute ">
              <img src="/3.png" alt="" className="w-full h-full " />
            </div>
            <div className="info">
              <p className="firstP text-[12px] mb-2 text-center text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="firstP text-[12px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iste assumenda fugiat tempore necessitatibus molestias
                aut dignissimos. Beatae, cumque numquam.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative py-24 px-4 text-start bg-[#417743] swiperParent"
          onClick={fullScreen}
          data-color="#417743"
          data-name="Pizza 4"
          data-price="400"
        >
          <div className="child">
            <div className="image absolute ">
              <img src="/4.png" alt="" className="w-full h-full " />
            </div>
            <div className="info">
              <p className=" firstP text-[12px] mb-2 text-center text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="firstP text-[12px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iste assumenda fugiat tempore necessitatibus molestias
                aut dignissimos. Beatae, cumque numquam.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="relative py-24 px-4 text-start bg-[#b46d06] swiperParent"
          onClick={fullScreen}
          data-color="#b46d06"
          data-name="Pizza 5"
          data-price="500"
        >
          <div className="child">
            <div className="image absolute ">
              <img src="/1.png" alt="" className="w-full h-full " />
            </div>
            <div className="info">
              <p className="firstP text-[12px] mb-2 text-center text-sm">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="firstP text-[12px] leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi iste assumenda fugiat tempore necessitatibus molestias
                aut dignissimos. Beatae, cumque numquam.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="popupDown h-[50vh] w-[200px] p-4">
        <FontAwesomeIcon
          icon={faAngleLeft}
          className="text-3xl"
          onClick={closeScreen}
        />
        <h2 className="text-2xl text-black my-3">{information[0]}</h2>
        <div className="flex justify-between items-center">
          <FontAwesomeIcon icon={faPlus} />
          <h5>{information[1]}$</h5>
        </div>
        <p className="secondP mt-3 opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          odio voluptatum nam saepe, quo dolor?
        </p>
        <button
          type="button"
          className={`bg-[${information[2]}] py-1 text-[#ffff] rounded-md px-2 my-4 `}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
