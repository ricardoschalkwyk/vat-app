import { Outlet } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Layout() {
  return (
    <>
      <nav className="sticky top-0 flex justify-between bg-linear-to-r p-2.5 text-center shadow-sm outline-1 backdrop-blur-sm">
        <h1 className="text-3xl font-extrabold">Vat Calculator</h1>

        <ModeToggle />
      </nav>

      <div className="mx-auto max-w-4xl px-5">
        <Outlet />
      </div>
    </>
  );
}
