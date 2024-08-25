interface PAGEPROPS {
  info:any
}

const Top: React.FC<PAGEPROPS> = ({info}) => {
  return (
    <>
      <div className="h-8 w-full text-xs text-black">hello</div>
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 rounded-t-xl bg-[#262626]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNWPhXbh68-pBV7iNSR76TAgOVQRSqkuogA&s"
          alt="Avatar"
          className="rounded-xl h-28 w-28 sm:h-40 sm:w-40"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="">
            <h1 className="font-bold">{info.firstName}</h1>
            <h1 className="font-semibold text-xs">{info.userName}</h1>
          </div>
          <button className="sm:text-xs lg:text-s h-5 w-full bg-green-600 pt-5 pb-5 pl-7 pr-7 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Top;