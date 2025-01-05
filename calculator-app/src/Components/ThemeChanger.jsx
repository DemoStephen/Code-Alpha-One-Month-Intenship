import Theme from "./Theme";

export default function ThemeChanger() {
  return (
    <form>
      <p>THEME</p>
      <fieldset>
        <div>
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
