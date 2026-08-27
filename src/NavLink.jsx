const NavLink = ({ name, hamButton, setHamButton }) => {
  return (
    <a
      href="#"
      className={`hover:text-[brown] ${hamButton ? "" : "max-sm:hidden"}`}
      onClick={() => {
        setHamButton(false);
      }}
    >
      {name}
    </a>
  );
};

export default NavLink;
