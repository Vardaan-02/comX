interface PAGEPROPS {
  friend: any;
}

const FriendRequest: React.FC<PAGEPROPS> = ({ friend }) => {
  if (window.innerWidth > 400)
    return (
      <>
        <div className="flex justify-between items-center w-full gap-8 rounded-xl bg-[#363636] py-4 px-8">
          <img
            src={`${friend.profileImage}`}
            className="h-12 w-12 rounded-full"
          />
          <div className="">
            <span className="font-bold">{friend.name} </span>
            <span>wants to be your friend</span>
            <br />
            {/* <span className="text-sm font-semibold">{friend.position}</span> */}
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-green-600 rounded-full px-4 py-1 hover:bg-green-400 transition text-sm font-bold">
              Accept
            </button>
            <button className="rounded-full px-4 py-1 hover:bg-[#262626] text-sm font-bold transition ">
              Decline
            </button>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="flex justify-between items-center w-full gap-8 rounded-xl bg-[#363636] py-4 px-8">
          <div className="flex flex-col">
            <img
              src={`${friend.profileImage}`}
              className="h-12 w-12 rounded-full"
            />
            <span className="font-bold pt-2 text-sm">{friend.name} </span>

            <span className="font-semibold text-xs">{friend.position}</span>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-green-600 rounded-full px-4 py-1 hover:bg-green-400 transition text-sm font-bold">
              Accept
            </button>
            <button className="rounded-full px-4 py-1 hover:bg-[#262626] text-sm font-bold transition ">
              Decline
            </button>
          </div>
        </div>
      </>
    );
};

export default FriendRequest;
