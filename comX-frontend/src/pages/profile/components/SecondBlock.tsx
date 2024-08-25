import HeatMap from "./second-block/HeatMap";
import TaskCircle from "./second-block/TaskCircle";

const SecondBlock: React.FC = () => {
  const Tasks = [10 * 2, 30 * 2, 85 * 2];

  return (
    <>
      <div className="lg:h-8 w-full text-xs text-black p-4">hello</div>
      <div className="bg-black text-white rounded-lg w-[97%] z-10 flex gap-8 flex-wrap xl:flex-nowrap justify-between">
        <TaskCircle tasks={Tasks} />
        <TaskCircle tasks={Tasks} />
      </div>
      <div>
        <HeatMap />
      </div>
      <div className="bg-black text-white rounded-lg w-[97%] z-10 flex gap-8 flex-wrap xl:flex-nowrap justify-between">
        <TaskCircle tasks={Tasks} />
        <TaskCircle tasks={Tasks} />
      </div>
      <div className="lg:h-8 w-full text-xs text-black">hello</div>
    </>
  );
};

export default SecondBlock;
