import { useState } from "react";
import { Menu } from "lucide-react";
import ResponsiveMenu from "./ResponsiveMenu";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="block lg:hidden">
      <button
        className="block justify-end mt-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Menu className="text-[#D87D4A]" />
        ) : (
          <Menu className="text-[#ffffff]" />
        )}
      </button>
      <ResponsiveMenu
        isOpen={isOpen}
        toggleBasket={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
