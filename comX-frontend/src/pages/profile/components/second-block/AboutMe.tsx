import { EditBio } from "./EditBio";

interface PAGEPROPS {
  bio: String;
}

const AboutMe: React.FC<PAGEPROPS> = ({ bio }) => {
  return (
    <>
      <div className="flex w-full">
        <div className="bg-[#262626] rounded-xl xl:max-w-[540px] w-full h-[270px] px-4 py-4">
          <div className="flex justify-between items-center px-4 pb-4">
            <h1 className="text-3xl font-bold pt-4 pl-4">Bio</h1>
            <EditBio />
          </div>
          <div className="p-4 overflow-y-scroll no-scrollbar h-[160px] ">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
