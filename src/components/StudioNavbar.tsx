import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";
import Logo from "./Logo";

// Define the type for the props
interface StudioNavbarProps {
  renderDefault: (props: Record<string, unknown>) => JSX.Element;
}

const StudioNavbar = ({ renderDefault }: StudioNavbarProps) => {
  return (
    <div>
      <div className="p-5 bg-black text-gray-100 flex items-center justify-between">
        <Link
          href={"/"}
          className="flex items-center gap-3 font-semibold hover:text-blue-600 duration-200"
        >
          <IoReturnDownBack className="text-2xl" />
          Go to Website
        </Link>
        <Logo
          title="Anams Blog"
          className="text-2xl hidden md:inline-flex"
        />
        <p className="text-sm">Studio for Blog Content</p>
      </div>
      {/* Ensure that renderDefault function is executed correctly */}
      {renderDefault && renderDefault({})}
    </div>
  );
};

export default StudioNavbar;
