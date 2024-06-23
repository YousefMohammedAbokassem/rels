import { useEffect, useState } from "react";

const Pizza = () => {
  const [transition, setTransition] = useState(0);

  useEffect(() => {
    const tap = document.querySelector(".tap"),
      image = document.querySelector(".image.active");

    tap.style.cssText = `width:${image.offsetWidth}px; left:${image.offsetLeft}px`;
    window.addEventListener("resize", () => {
      const image = document.querySelector(".image.active");
      tap.style.cssText = `width:${image.offsetWidth}px; left:${image.offsetLeft}px`;
    });
  }, []);
  const changeTap = (e) => {
    const images = document.querySelectorAll(".image");
    images.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    // before change state
    const index = parseInt(e.target.dataset.index);
    // the real transition
    const trans = index - transition;

    const tap = document.querySelector(".tap"),
      pizzaParent = document.querySelector(".pizzaParent");
    tap.style.cssText = `width:${e.target.offsetWidth}px; left:${e.target.offsetLeft}px`;
    pizzaParent.style.setProperty(
      "--rotate",
      `${e.target.dataset.index * -90}deg`
    );
    document.documentElement.style.setProperty(
      "--transition",
      `${((trans < 0 ? -1 * trans : trans) + 1) / 2}s`
    );
    setTransition(index);
    // set index text top swipe it
    const pizzaName = document.querySelector(".pizzaName");
    pizzaName.style.setProperty("--topText", `${index * -100}%`);
    // change color
    const colorprimary = e.target.dataset.colorprimary;
    const colorsecondary = e.target.dataset.colorsecondary;
    // set colors in local storage
    localStorage.setItem("colorprimary", colorprimary);
    localStorage.setItem("colorsecondary", colorsecondary);
    // remove active class  from all span
    // add active class to the target span
    // set the colors to the project
    document.documentElement.style.setProperty(
      "--primary-color",
      `${colorprimary}`
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      `${colorsecondary}`
    );
  };
  return (
    // md:-mt-24
    <div className="parent overflow-hidden h-screen relative flex md:flex-row flex-col  gap-4 md:gap-7 items-center  mx-auto">
      <svg
        width="898"
        height="823"
        viewBox="0 0 898 823"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute md:h-full md:w-1/2 h-1/2 w-full "
      >
        <path
          d="M880.205 112.329C941.611 341.5 825.729 280.256 751.5 436C638.394 634.632 852 680 636.5 793.5C479.082 876.409 418.623 756.059 252.146 727.978C176.854 715.278 99.7017 758.784 39.969 755.482C-92.7553 748.146 -176.628 684.844 -226.049 500.403C-314.925 168.715 -119.604 -171.813 210.212 -260.187C540.027 -348.561 791.329 -219.359 880.205 112.329Z"
          // fill="#DBDBDB"
          className="fill-[var(--secondary-color)]"
        />
      </svg>

      <div className="info  pt-4 md:pt-0 z-10 flex flex-col gap-3 w-full md:w-[40%] md:text-start text-center  p-[10px] md:p-[0] md:ms-[40px]">
        <span className="capitalize font-bold text-white">today's special</span>
        <div className="overflow-hidden">
          <div className="pizzaName text-4xl relative h-[40px]">
            <h2 className="text-[var(--primary-color)] absolute font-bold left-1/2 -translate-x-1/2 h-[40px]  h2Text text-xl md:text-3xl">
              Blueberry salad
            </h2>
            <h2 className="text-[var(--primary-color)] absolute left-1/2 font-bold -translate-x-1/2 h-[40px]  h2Text text-xl md:text-3xl">
              Kiwi plate
            </h2>
            <h2 className=" text-[var(--primary-color)] absolute left-1/2 font-bold -translate-x-1/2 h-[40px]  h2Text text-xl md:text-3xl">
              Mixed salad
            </h2>
            <h2 className="text-[var(--primary-color)] absolute font-bold left-1/2 -translate-x-1/2 h-[40px]  h2Text text-xl md:text-3xl">
              Strawberry salad
            </h2>
          </div>
        </div>
        <p className="leading-6 text-white ">
          Enjoy our delicious fruit dishes made with fresh ingredients and
          prepared with love. Each fruit dish is crafted to perfection and will
          satisfy your cravings.
        </p>
        <div className="images flex items-center relative  gap-3 justify-center md:justify-start">
          <div
            className="image w-[50px] active cursor-pointer"
            onClick={changeTap}
            data-index="0"
            data-colorprimary="#96C1ED"
            data-colorsecondary="#5397DD"
          >
            <img
              src="/1.png"
              alt="pizza 1"
              className="w-full h-full pointer-events-none filterCircle"
            />
          </div>
          {/* image */}
          <div
            className="image w-[50px] cursor-pointer"
            onClick={changeTap}
            data-index="1"
            data-colorprimary="#B9E56F"
            data-colorsecondary="#8DC432"
          >
            <img
              src="/2.png"
              alt="pizza 2"
              className="w-full h-full pointer-events-none filterCircle"
            />
          </div>
          {/* image */}
          <div
            className="image w-[50px] cursor-pointer"
            onClick={changeTap}
            data-index="2"
            data-colorprimary="#FECC5D"
            data-colorsecondary="#F3A503"
          >
            <img
              src="/3.png"
              alt="pizza 3"
              className="w-full h-full pointer-events-none filterCircle"
            />
          </div>
          {/* image */}
          <div
            className="image w-[50px] cursor-pointer"
            onClick={changeTap}
            data-index="3"
            data-colorprimary="#FE9FB4"
            data-colorsecondary="#FE6B8D"
          >
            <img
              src="/4.png"
              alt="pizza 4"
              className="w-full h-full pointer-events-none filterCircle"
            />
          </div>
          {/* image */}
          <div className="tap absolute left-0 -bottom-2 h-[3px] bg-[var(--primary-color)] w-7"></div>
        </div>
      </div>
      <div className="containerPizza h-full z-10 overflow-visible md:overflow-hidden md:mt-0 mt-[140px] flex-1 relative pointer-events-none">
        <div className="pizzaParent  absolute ">
          <div className="pizzas  h-[300px] w-[300px] md:h-[500px] md:w-[500px]  2xl:h-[500px] 2xl:w-[500px] absolute">
            <img
              src="/1.png"
              alt=""
              className="  w-full h-full filterSpecial"
            />
          </div>
          <div className="pizzas  h-[300px] w-[300px] md:h-[500px] md:w-[500px] 2xl:h-[500px] 2xl:w-[500px] absolute ">
            <img src="/2.png" alt="" className="  w-full h-full filter2" />
          </div>
          <div className="pizzas  h-[300px] w-[300px] md:h-[500px] md:w-[500px] 2xl:h-[500px] 2xl:w-[500px] absolute">
            <img src="/3.png" alt="" className="  w-full h-full  filter3" />
          </div>
          <div className="pizzas  h-[300px] w-[300px] md:h-[500px] md:w-[500px] 2xl:h-[500px] 2xl:w-[500px] absolute">
            <img src="/4.png" alt="" className="w-full h-full filterSpecial" />
          </div>
        </div>
      </div>
      <div className="imageCircle absolute right-[-250px] md:right-[-350px] md:bottom-[-350px] bottom-[-200px] md:h-[800px] h-[500px] w-[500px] md:w-[800px] rounded-full bg-[var(--secondary-color)]"></div>
    </div>
  );
};

export default Pizza;
