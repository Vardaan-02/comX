import FriendRequest from "./FriendReqest";

interface PAGEPROPS {
  friendRequestList: any;
}

const Friends: React.FC<PAGEPROPS> = ({ friendRequestList }) => {
  return (
    <>
      <div className="flex w-full">
        <div className="bg-[#262626] rounded-xl xl:max-w-[540px] w-full h-[270px] flex px-8 py-4 flex-col">
          <h1 className="w-full font-bold h-[10%] mb-4 text-xl">
            Friend Requests
          </h1>
          <div className="overflow-y-scroll no-scrollbar gap-4 flex flex-col">
            {friendRequestList.map((friend: any, index: number) => {
              return <FriendRequest friend={friend} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
