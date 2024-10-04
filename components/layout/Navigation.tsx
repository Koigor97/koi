import Logo from "../common/Logo";
import ResponsiveNav from "../common/Nav";

function Navigation() {
  return (
    <div className="flex items-center justify-between pt-2 max-w-custom-clamp-3 mx-auto md:max-w-custom-clamp-2 ">
      <Logo className="w-12 md:w-14" />
      <ResponsiveNav />
    </div>
  );
}

export default Navigation;
