import Theme from "./Theme";

export default function ThemeChanger() {
  return (
    <form className="flex items-end gap-4">
      <p className="text-sm">THEME</p>
      <fieldset>
        <div className="flex justify-between text-[0.65rem] px-2 py-0.5 rounded-xl">
          <label htmlFor="theme-1" className="cursor-pointer">
            1
          </label>
          <label htmlFor="theme-2" className="cursor-pointer">
            2
          </label>
          <label htmlFor="theme-3" className="cursor-pointer">
            3
          </label>
        </div>
        <div className="flex gap-1 py-0.5 px-1 bg-[#637097] rounded-xl">
          <Theme label={1} />
          <Theme label={2} />
          <Theme label={3} />
        </div>
      </fieldset>
    </form>
  );
}
