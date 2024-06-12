import "./Nav.css";
export default function Nav({ handleChange, change, varry }) {
  return (
    <nav className={varry}>
      <h1>Todo</h1>
      <div className="toggle">
        <button className="toggle" onClick={handleChange}>
          {change ? "🌙" : "🌅"}
        </button>
      </div>
    </nav>
  );
}
