interface PAGEPROPS {
  info:any
}

const Top: React.FC<PAGEPROPS> = ({info}) => {
  return (
    <>
      <div className="h-[25%] flex items-center pt-10">
        <img
          src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
          width={150}
          height={200}
          alt="Avatar"
          className="rounded-xl ml-6 h-36 w-40"
        />
        <div className="ml-8 flex flex-col justify-center items-start gap-6">
          <div>
            <h1 className="font-bold">{info.firstName}</h1>
            <h1 className="font-semibold text-xs">{info.userName}</h1>
          </div>
          <button className="h-5 w-full bg-green-600 pt-5 pb-5 pl-7 pr-7 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition">
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default Top;