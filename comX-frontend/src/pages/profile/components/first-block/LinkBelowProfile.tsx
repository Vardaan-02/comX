interface PAGEPROPS {
  links: any;
}

const LinkBelowProfile: React.FC<PAGEPROPS> = ({ links }) => {
  return (
    <>
        <div className="flex flex-col items-start pt-8 pl-8 gap-2">
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
