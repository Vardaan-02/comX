interface PAGEPROPS {
  links: any;
}

const LinkBelowProfile: React.FC<PAGEPROPS> = ({ links }) => {
  return (
    <>
        <div className="flex flex-col items-start px-8 py-4 gap-2 bg-[#262626]">
          {links.map((link: any) => (
            <a className="cursor-pointer">
            <div className="flex gap-2 items-center">
              {link.icon}
              <p>{link.label}</p>
            </div>
            </a>
          ))}
        </div>
    </>
  );
};

export default LinkBelowProfile;
