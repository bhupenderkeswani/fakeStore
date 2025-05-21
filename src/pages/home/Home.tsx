export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="py-8 flex flex-col items-center gap-4">
        <p>
          This project is Fake store which will have home page and product
          listing page.
        </p>

        <p>
          Product listing page will have gird view and list view. Users can
          choose to toggle between views and sort the products based on price,
          high to low and visa-versa.
        </p>
      </div>
    </div>
  );
}
