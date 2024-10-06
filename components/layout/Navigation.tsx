import Logo from "../common/Logo";
import ResponsiveNav from "../common/Nav";

function Navigation() {
  return (
    <div className="flex items-center justify-between pt-2 mb-3 md:mb-5">
      <Logo className="w-12 md:w-14" />
      <ResponsiveNav />
    </div>
  );
}

export default Navigation;
