interface PAGEPROPS {
  startDate: any;
  endDate: any;
  dataValue: any;
}

const HeatMap: React.FC<PAGEPROPS> = ({ startDate, endDate, dataValue }) => {
  let startingDate = new Date(startDate);
  let endingDate = new Date(endDate);

  const totalDays: number =
    (+endingDate - +startingDate) / (1000 * 60 * 60 * 24) + 1;

  const calenderGrid = Array.from({ length: totalDays }, (_, i) => {
    let date: any = new Date(startingDate);
    date.setDate(startingDate.getDate() + i);
    return date.toISOString().slice(0, 10);
  });

  const colors = [
    "#363636",
    "#013e06",
    "#026b0a",
    "#04990f",
    "#05c413",
    "#01f714",
  ];

  return (
    <>
      <div className="flex flex-col w-full py-8">
        <div className="px-8 py-4 bg-[#262626] rounded-xl w-[97%] h-[280px] pt-8 text-[12px] sm:text-lg">
          <div className="flex justify-start items-center ml-12">
            <div className="text-white flex">
              <p className="font-extrabold mr-1">100</p>
              <p className="">Task Done in past one year .</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <div className="flex flex-col text-white gap-5 md:gap-3 justify-center items-end pr-4">
              <p>Mon</p>
              <p>Wed</p>
              <p>Fri</p>
            </div>
            <div
              className="grid grid-flow-col gap-1 overflow-x-scroll no-scrollbar"
              style={{ gridTemplateRows: "repeat(7,minmax(0,1fr))" }}
            >
              {calenderGrid.map((day, index) => {
                return (
                  <div
                    key={index}
                    className={`h-4 w-4 bg-[${
                      colors[dataValue[index]]
                    }] rounded-sm`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeatMap;
