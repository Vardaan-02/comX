import AboutMe from "./second-block/AboutMe";
import Badges from "./second-block/Badges";
import Friends from "./second-block/Friends";
import HeatMap from "./second-block/HeatMap";
import TaskCircle from "./second-block/TaskCircle";

const SecondBlock: React.FC = () => {
  const Tasks = [40 * 2, 30 * 2, 25 * 2];

  const dataValue = [
    3, 3, 2, 0, 1, 2, 4, 0, 1, 0, 3, 2, 0, 5, 2, 3, 1, 4, 5, 3, 3, 4, 4, 3, 2,
    3, 5, 5, 1, 5, 1, 0, 3, 4, 3, 5, 3, 0, 4, 3, 0, 5, 2, 4, 1, 2, 2, 1, 2, 2,
    0, 0, 2, 2, 1, 1, 2, 3, 5, 5, 0, 3, 2, 4, 5, 1, 5, 5, 3, 0, 3, 1, 0, 4, 3,
    0, 4, 0, 2, 3, 0, 3, 2, 2, 4, 3, 3, 4, 4, 1, 2, 3, 4, 1, 4, 1, 1, 3, 1, 3,
    3, 5, 2, 5, 5, 3, 0, 4, 5, 3, 1, 3, 3, 3, 2, 0, 0, 1, 2, 4, 4, 3, 3, 3, 2,
    2, 3, 5, 3, 1, 1, 5, 4, 1, 0, 3, 4, 1, 4, 1, 4, 5, 5, 3, 2, 5, 3, 5, 1, 4,
    1, 0, 4, 5, 5, 0, 0, 0, 1, 4, 5, 5, 5, 4, 2, 3, 5, 5, 0, 2, 4, 0, 4, 4, 3,
    4, 4, 1, 4, 1, 2, 3, 1, 2, 3, 1, 5, 1, 4, 3, 1, 2, 3, 1, 0, 5, 0, 4, 5, 0,
    3, 2, 1, 0, 4, 5, 0, 4, 0, 4, 4, 1, 5, 0, 3, 2, 0, 5, 1, 1, 2, 1, 0, 3, 3,
    5, 2, 5, 0, 1, 2, 1, 0, 5, 5, 0, 2, 2, 2, 3, 3, 3, 0, 4, 5, 5, 3, 5, 4, 2,
    2, 3, 4, 0, 1, 0, 3, 4, 4, 1, 0, 0, 4, 5, 2, 1, 5, 1, 4, 5, 0, 1, 1, 5, 2,
    0, 5, 3, 1, 1, 1, 1, 3, 0, 0, 5, 1, 2, 2, 2, 0, 1, 0, 5, 1, 1, 3, 4, 3, 2,
    3, 1, 5, 4, 5, 1, 4, 5, 5, 5, 0, 2, 3, 5, 3, 1, 0, 3, 2, 0, 0, 1, 3, 4, 1,
    2, 5, 3, 4, 0, 0, 3, 0, 3, 1, 0, 3, 4, 3, 0, 2, 5, 1, 0, 0, 0, 2, 2, 0, 3,
    1, 5, 5, 1, 1, 3, 3, 1, 0, 2, 3, 0, 2, 4, 5,
  ];

  const badges: Array<object> = [
    {
      name: "Hello",
      link: "https://www.svgrepo.com/show/275090/badges-star.svg",
    },
    {
      name: "Bye",
      link: "https://www.svgrepo.com/show/269889/badges-star.svg",
    },
    {
      name: "This",
      link: "https://www.svgrepo.com/show/182156/badges-badge.svg",
    },
    {
      name: "That",
      link: "https://www.svgrepo.com/show/178831/badges-money.svg",
    },
  ];

  const friendRequestList: any = [
    {
      name: "Vardaan",
      profileImage:
        "https://assets.leetcode.com/users/avatars/avatar_1692767168.png",
      position : "Student IIITA",
    },
    {
      name: "Vardaan",
      profileImage:
        "https://assets.leetcode.com/users/avatars/avatar_1692767168.png",
      position : "Student IIITA",
    },
    {
      name: "Vardaan",
      profileImage:
        "https://assets.leetcode.com/users/avatars/avatar_1692767168.png",
      position : "Student IIITA",
    },
    {
      name: "Vardaan",
      profileImage:
        "https://assets.leetcode.com/users/avatars/avatar_1692767168.png",
      position : "Student IIITA",
    },
    {
      name: "Vardaan",
      profileImage:
        "https://assets.leetcode.com/users/avatars/avatar_1692767168.png",
      position : "Student IIITA",
    },
  ];

  const bio =
    '🎨 Graphic Designer | NYC 🌆 | Passionate about photography 📸, hiking 🥾, and culinary adventures 🍳. Bookworm 📚 with a love for classics like "The Catcher in the Rye" and "1984." 🏞️ Dreaming of traveling the world and capturing stories through design. 🌍✨Graphic Designer | NYC 🌆 | Passionate about photography 📸, hiking 🥾, and culinary adventures 🍳. Bookworm 📚 with a love for classics like "The Catcher in the Rye" and "1984." 🏞️ Dreaming of traveling the world and capturing stories through design. 🌍✨Graphic Designer | NYC 🌆 | Passionate about photography 📸, hiking 🥾, and culinary adventures 🍳. Bookworm 📚 with a love for classics like "The Catcher in the Rye" and "1984." 🏞️ Dreaming of traveling the world and capturing stories through design. 🌍✨';

  return (
    <>
      <div className="lg:h-8 w-full text-xs text-black p-4">hello</div>
      <div className="bg-black text-white rounded-lg w-[97%] z-10 flex gap-8 flex-wrap xl:flex-nowrap justify-between">
        <TaskCircle tasks={Tasks} />
        <Badges badges={badges} />
      </div>
      <div>
        <HeatMap
          startDate={"2023-9-27"}
          endDate={"2024-08-27"}
          dataValue={dataValue}
        />
      </div>
      <div className="bg-black text-white rounded-lg w-[97%] z-10 flex gap-8 flex-wrap xl:flex-nowrap justify-between">
        <AboutMe bio={bio} />
        <Friends
          friendRequestList={friendRequestList}
        />
      </div>
      <div className="lg:h-8 w-full text-xs text-black">hello</div>
    </>
  );
};

export default SecondBlock;
