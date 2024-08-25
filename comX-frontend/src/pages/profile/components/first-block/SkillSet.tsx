interface PAGEPROPS {
  skills: any;
}

const SkillSet: React.FC<PAGEPROPS> = ({ skills }) => {
  return (
    <>
      <div className="flex flex-col items-start p-8 gap-2 rounded-b-xl bg-[#262626] w-full">
        <div className="flex justify-between items-center w-full">
          <h1 className="font-xs font-bold">SKILLS</h1>
          <button className="bg-green-600 px-4 py-2 text-gray-300 font-bold rounded-l rounded-r flex items-center justify-center hover:bg-green-500 hover:text-white transition">Add Skills</button>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="bg-red-500 rounded-full h-2 w-2 mt-[4px]"></div>
          <h1>Master</h1>
        </div>

        <div className="flex gap-4 flex-wrap mt-4 max-w-[90%]">
          {skills.master.map((skill: string, idx: number) => (
            <button
              key={idx}
              className="bg-[#3e3e3e] py-1 px-4 text-sm text-white rounded-full hover:bg-[#555] transition"
            >
              {skill}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="bg-yellow-500 rounded-full h-2 w-2 mt-[4px]"></div>
          <h1>Intermediate</h1>
        </div>

        <div className="flex gap-4 flex-wrap mt-4 max-w-[90%]">
          {skills.intermediate.map((skill: string, idx: number) => (
            <button
              key={idx}
              className="bg-[#3e3e3e] py-1 px-4 text-sm text-white rounded-full hover:bg-[#555] transition"
            >
              {skill}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4">
          <div className="bg-green-500 rounded-full h-2 w-2 mt-[4px]"></div>
          <h1>Begineer</h1>
        </div>

        <div className="flex gap-4 flex-wrap mt-4 max-w-[90%]">
          {skills.beginner.map((skill: string, idx: number) => (
            <button
              key={idx}
              className="bg-[#3e3e3e] py-1 px-4 text-sm text-white rounded-full hover:bg-[#555] transition"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
      <div className="lg:h-8 w-full text-xs text-black">hello</div>
    </>
  );
};

export default SkillSet;
