import { useEffect, useRef, useState } from "react";
import css from "./TaskCircle.module.css";

interface PAGEPROPS {
  tasks: any;
}

const TaskCircle: React.FC<PAGEPROPS> = ({ tasks }) => {
  const parent: any = useRef(null);
  const one: any = useRef(null);
  const two: any = useRef(null);
  const three: any = useRef(null);
  const [width, setWidth] = useState(0);

  window.addEventListener("resize", () => {
    if (parent.current.offsetWidth > 400)
      setWidth(parent.current.offsetWidth / 2);
    else setWidth(parent.current.offsetWidth);
  });

  useEffect(() => {
    if (parent.current.offsetWidth > 400)
      setWidth(parent.current.offsetWidth / 2);
    else setWidth(parent.current.offsetWidth);
  }, [parent.current]);

  return (
    <>
      <div className="flex w-full">
        <div
          className="bg-[#262626] rounded-xl xl:max-w-[540px] w-full h-[270px]"
          ref={parent}
        >
          <div className="flex justify-center items-center w-full text-xl font-bold pt-4">
            Tasks Status
          </div>
          <div className="flex justify-start">
            <svg
              height="220"
              width={width}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                strokeDasharray={`${tasks[0]} 1000`}
                className={`${css.TaskCircleGreen}`}
                ref={one}
                onMouseOver={() => {
                  one.current.style.stroke = `#FFD433`;
                  two.current.style.stroke = `#159191`;
                  three.current.style.stroke = `#C12B2B`;
                }}
                onMouseLeave={() => {
                  one.current.style.stroke = `#FFB700`;
                  two.current.style.stroke = `#1CBABA`;
                  three.current.style.stroke = `#F63737`;
                }}
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                strokeDasharray={`0 ${tasks[0]} ${tasks[1]} 1000`}
                className={`${css.TaskCircleYellow}`}
                ref={two}
                onMouseOver={() => {
                  one.current.style.stroke = `#CC9200`;
                  two.current.style.stroke = `#36E3E3`;
                  three.current.style.stroke = `#C12B2B`;
                }}
                onMouseLeave={() => {
                  one.current.style.stroke = `#FFB700`;
                  two.current.style.stroke = `#1CBABA`;
                  three.current.style.stroke = `#F63737`;
                }}
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                strokeDasharray={`0 ${tasks[0] + tasks[1]} ${tasks[2]} 50 1000`}
                className={`${css.TaskCircleRed}`}
                ref={three}
                onMouseOver={() => {
                  one.current.style.stroke = `#CC9200`;
                  two.current.style.stroke = `#159191`;
                  three.current.style.stroke = `#FF4848`;
                }}
                onMouseLeave={() => {
                  one.current.style.stroke = `#FFB700`;
                  two.current.style.stroke = `#1CBABA`;
                  three.current.style.stroke = `#F63737`;
                }}
              />
            </svg>
            <div className="flex justify-center items-center w-[50%] flex-col gap-6 mr-4 md:mr-0">
              <div
                className="w-[120px] bg-[#353535] rounded-sm px-8 py-1"
                onMouseOver={() => {
                  one.current.style.stroke = `#CC9200`;
                  two.current.style.stroke = `#36E3E3`;
                  three.current.style.stroke = `#C12B2B`;
                }}
                onMouseLeave={() => {
                  one.current.style.stroke = `#FFB700`;
                  two.current.style.stroke = `#1CBABA`;
                  three.current.style.stroke = `#F63737`;
                }}
              >
                <h1 className="text-sm font-bold flex justify-center items-center text-[#1cbaba]">
                  Completed
                </h1>
                <p className="flex justify-center items-center">{tasks[0]}</p>
              </div>
              <div
                className="w-[120px] bg-[#353535] rounded-sm px-8 py-1"
                onMouseOver={() => {
                  one.current.style.stroke = `#FFD433`;
                  two.current.style.stroke = `#159191`;
                  three.current.style.stroke = `#C12B2B`;
                }}
                onMouseLeave={() => {
                  one.current.style.stroke = `#FFB700`;
                  two.current.style.stroke = `#1CBABA`;
                  three.current.style.stroke = `#F63737`;
                }}
              >
                <h1 className="text-sm font-bold flex justify-center items-center text-[#ffb700]">
                  Pending
                </h1>
                <p className="flex justify-center items-center">{tasks[1]}</p>
              </div>
              <div
                className="w-[120px] bg-[#353535] rounded-sm px-8 py-1"
                onMouseOver={() => {
                  one.current.style.stroke = `#CC9200`;
                  two.current.style.stroke = `#159191`;
                  three.current.style.stroke = `#FF4848`;
                }}
                onMouseLeave={() => {
                  one.current.style.stroke = `#FFB700`;
                  two.current.style.stroke = `#1CBABA`;
                  three.current.style.stroke = `#F63737`;
                }}
              >
                <h1 className="text-sm font-bold flex justify-center items-center text-[#f63737]">
                  Missing
                </h1>
                <p className="flex justify-center items-center">{tasks[2]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskCircle;
