import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <h2>Fake Store</h2>
        <Nav />
      </div>
    </header>
  );
}
