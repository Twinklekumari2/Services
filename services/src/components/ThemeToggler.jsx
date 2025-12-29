import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./../features/themeSlie";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-2 py-1 md:px-4 md:py-2 rounded-full cursor-pointer border border-black outline-none"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
