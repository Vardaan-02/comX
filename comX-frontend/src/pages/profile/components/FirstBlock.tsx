import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import LinkBelowProfile from "./first-block/LinkBelowProfile";
import Top from "./first-block/Top";
import SkillSet from "./first-block/SkillSet";

const FirstBlock: React.FC = () => {
  const info = {
    firstName: "John Doe",
    userName: "official_JohnDoe",
  };

  const links = [
    {
      label: "Ambala",
      href: "#",
      icon: <FaLocationDot className="text-white h-8 font-4xl" />,
    },
    {
      label: "Vardaan-02",
      href: "#",
      icon: <FaGithub className="text-white h-8 font-4xl" />,
    },
    {
      label: "Vardaan_02",
      href: "#",
      icon: <FaInstagram className="text-white h-8 font-4xl" />,
    },
  ];

  const skills = {
    master: ["master1", "master2", "master3", "master4"],
    intermediate: [
      "intermediate1",
      "intermediate2",
      "intermediate3",
      "intermediate4",
    ],
    beginner: ["beginner1", "beginner2", "beginner3", "beginner4"],
  };

  return (
    <>
      <div className="bg-[#262626] min-h-screen w-[25%] text-white rounded-lg">
        <Top info={info}></Top>
        <hr className="ml-[3%] h-px mt-8 w-[94%]"></hr>
        <LinkBelowProfile links={links} />
        <hr className="ml-[3%] h-px mt-8 w-[94%]"></hr>
        <SkillSet skills={skills}></SkillSet>
      </div>
    </>
  );
};

export default FirstBlock;
