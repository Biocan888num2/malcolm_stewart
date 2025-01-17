import HamburgerMenu from './HamburgerMenu'; // Import the HamburgerMenu component

const Footer = () => {
  return (
    <footer className="bg-primary p-4 text-right fixed bottom-0 w-full lg:hidden z-50">
      <div className="flex items-center">
        <HamburgerMenu /> {/* Include the HamburgerMenu component on the left */}
        <div className="navbar-label inter-extrabold ml-auto">
          Andrew Warnke<br />
          Junior Developer
        </div>
      </div>
    </footer>
  );
};

export default Footer;



  