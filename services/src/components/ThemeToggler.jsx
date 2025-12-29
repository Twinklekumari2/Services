import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./../features/themeSlie";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="px-4 py-2 rounded-full cursor-pointer border border-black outline-none"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
