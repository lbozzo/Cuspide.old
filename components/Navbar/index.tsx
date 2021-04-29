import Logo from "../Logo";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-row justify-between items-center py-2">
      <div className="px-1">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <Logo width={23} height={23} />
        </button>
      </div>
    </div>
  );
}
