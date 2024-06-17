export default function Layout({ children }) {
  return (
    <>
      <div className=" text-center text-xl py-4">Admin Panel</div>
      <main>{children}</main>
      <div className="py-4">It can access admin only</div>
    </>
  );
}
