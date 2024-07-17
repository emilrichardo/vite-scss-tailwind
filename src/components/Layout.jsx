export default function Layout({ children }) {
  return (
    <div className=" p-4 m-4 border border-green-300">
      <h2>Layout component</h2>
      <main>{children}</main>
    </div>
  );
}
