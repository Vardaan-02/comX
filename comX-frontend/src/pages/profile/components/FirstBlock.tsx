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
      <div className="bg-black text-white rounded-lg w-[97%] lg:max-w-[400px] z-0 md:z-auto">
        <Top info={info}></Top>
        <LinkBelowProfile links={links} />
        <SkillSet skills={skills}></SkillSet>
      </div>
    </>
  );
};

export default FirstBlock;
