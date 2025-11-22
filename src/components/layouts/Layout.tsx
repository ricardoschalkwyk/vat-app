import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="sticky top-0 bg-linear-to-r from-[#161EE9]/40 via-[#7816E9]/40 to-[#1687E9]/40 py-2.5 text-center shadow-sm backdrop-blur-xs">
        <h1 className="text-3xl font-extrabold">Vat Calculator</h1>
      </nav>

      <div className="mx-auto max-w-4xl px-5">
        <Outlet />
      </div>
    </>
  );
}
