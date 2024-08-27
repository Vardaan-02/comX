import { EditProfile } from "./EditProfile";

interface PAGEPROPS {
  info:any
}

const Top: React.FC<PAGEPROPS> = ({info}) => {
  return (
    <>
      <div className="h-8 w-full text-xs text-black">hello</div>
      <div className="flex justify-between items-center px-4 py-4 rounded-t-xl bg-[#262626] pt-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s"
          alt="Avatar"
          className="rounded-xl h-28 w-28 sm:h-32 sm:w-32"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="">
            <h1 className="font-bold">{info.firstName}</h1>
            <h1 className="font-semibold text-xs">{info.userName}</h1>
          </div>
          <EditProfile />
        </div>
      </div>
    </>
  );
};

export default Top;