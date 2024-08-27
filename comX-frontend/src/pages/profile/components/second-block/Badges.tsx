interface PAGEPROPS {
  badges: Array<any>;
}

const Badges: React.FC<PAGEPROPS> = ({ badges }) => {
  return (
    <>
      <div className="flex w-full">
        <div className="bg-[#262626] rounded-xl xl:max-w-[540px] w-full h-[270px] flex px-8 py-4 flex-col">
            <div className="h-[30%] flex flex-col justify-center items-start">
                <p className="text-sm font-semibold text-[#999]">Badges</p>
                <p className="font-bold text-2xl pl-1">{badges.length}</p>
            </div>
            <div className="h-[40%] w-[100%] flex flex-row justify-center items-center gap-4">
                {badges.length>2 && <img src={`${badges[badges.length-2].link}`} className="h-[80%] hover:h-[100%] transition-all"/>}
                <img src={`${badges[badges.length-1].link}`} className="h-[100%] hover:h-[120%] transition-all"/>
                {badges.length>1 && <img src={`${badges[badges.length-3].link}`} className="h-[80%] hover:h-[100%] transition-all"/>}
            </div>
            <div className="h-[30%] flex flex-col justify-center items-start">
                <p className="text-sm font-semibold text-[#999]">Most Recent Badge</p>
                <p className="font-bold text-2xl">{badges[badges.length-1].name}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Badges;
