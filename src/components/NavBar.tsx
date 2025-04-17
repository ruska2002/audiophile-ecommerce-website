import { Link } from "react-router-dom";
const navigation = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export default function NavBar() {
  return (
    <div className="flex lg:flex-col flex-row">
      <nav>
        <ul className="flex flex-col items-center gap-6 md:flex-row">
          {navigation.map((name, index) => (
            <li key={index}>
              <Link
                to={`/${name.toLowerCase()}`}
                className="text-white hover:text-[#D87D4A]"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
