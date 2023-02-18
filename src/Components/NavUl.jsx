import { Link } from "react-scroll";
const NavUl = ({ menuOpen, handleMenuClose }) => {
  const liMenu = [
    { name: "About", span: true },
    { name: "Skills", span: true },
    { name: "Projects", span: true },
    { name: "Contact", span: false },
  ];

  return (
    <>
      <ul className="w-full h-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-8 md:gap-2 text-3xl">
        {liMenu.map((item) => (
          <li key={item.name}>
            <Link
              to={item.name}
              onClick={handleMenuClose}
              smooth={true}
              offset={-140}
              duration={500}
              tabIndex={menuOpen === true ? 0 : -1}
              href={`#${item.name}`}
              rel="noreferrer"
              className="slideDown1 underlineText flex"
            >
              {item.name}
              {item.span && <span className="hidden md:block ml-2">|</span>}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavUl;
