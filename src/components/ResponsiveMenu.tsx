import { AnimatePresence, motion } from "framer-motion";
import Category from "./Category";

export default function ResponsiveMenu({ isOpen }: ResponsiveMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className=" z-50 absolute top-[80px] left-0 w-full bg-[#ffffff] px-6 py-10 flex flex-col gap-6"
        >
          <Category />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
