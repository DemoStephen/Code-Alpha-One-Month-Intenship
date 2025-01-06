import ThemeChanger from "./ThemeChanger";

export default function Navigation() {
  return (
    <nav className="text-white flex items-center justify-between">
      <header className="text-3xl">
        <h1>calc</h1>
      </header>
      <ThemeChanger />
    </nav>
  );
}
