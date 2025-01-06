import Theme from "./Theme";

export default function ThemeChanger() {
  return (
    <form className="flex items-end gap-4">
      <p className="text-sm">THEME</p>
      <fieldset>
        <div className="flex text-xs">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div>
          <Theme label={1} />
          <Theme label={2} />
          <Theme label={3} />
        </div>
      </fieldset>
    </form>
  );
}
