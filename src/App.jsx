import ThemeToggle from './components/ThemeToggle';
import useThemeStore from './store/store';

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`min-h-screen flex items-center justify-center ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`}>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Zustand Theme Toggle</h1>
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
