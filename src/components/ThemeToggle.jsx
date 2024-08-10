import useThemeStore from "../store/store";

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded ${
        theme === "light"
          ? "bg-gray-800 text-white"
          : "bg-yellow-400 text-black"
      }`}
    >
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ThemeToggle;
