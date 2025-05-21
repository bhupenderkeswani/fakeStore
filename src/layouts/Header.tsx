import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between">
        <h2 className="font-medium">Fake Store</h2>
        <Nav />
      </div>
    </header>
  );
}
