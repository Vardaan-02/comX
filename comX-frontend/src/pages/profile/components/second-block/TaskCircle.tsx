import { useEffect, useRef, useState } from "react";
import css from "./TaskCircle.module.css";

interface PAGEPROPS {
  tasks: any;
}

const TaskCircle: React.FC<PAGEPROPS> = ({ tasks }) => {
  const parent: any = useRef(null);
  const [width, setWidth] = useState(0);

  window.addEventListener("resize", () => {
    setWidth(parent.current.offsetWidth);
  });

  useEffect(() => {
    setWidth(parent.current.offsetWidth);
  }, [parent.current]);

  return (
    <>
      <div className="flex flex-col w-full">
        <div
          className="bg-[#262626] rounded-xl xl:max-w-[540px] w-full h-[280px]"
          ref={parent}
          onClick={() => {
            console.log(parent.current ? parent.current.offsetWidth : 0);
          }}
        >
          <svg
            height="280"
            width={width}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000"
          >
            <circle
              cx="0"
              cy="50"
              r="30"
              stroke-dasharray={`${tasks[0]} 1000`}
              className={`${css.TaskCircleGreen}`}
            />
            <circle
              cx="0"
              cy="50"
              r="30"
              stroke-dasharray={`0 ${tasks[0]} ${tasks[1]} 1000`}
              className={`${css.TaskCircleYellow}`}
            />
            <circle
              cx="0"
              cy="50"
              r="30"
              stroke-dasharray={`0 ${tasks[0]+tasks[1]} ${tasks[2]} 50 1000`}
              className={`${css.TaskCircleRed}`}
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default TaskCircle;
