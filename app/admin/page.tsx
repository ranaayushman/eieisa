"use client";

// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";


const AdminPage = () => {
  const router = useRouter();

  const handleSubmit = () => {
    try {
      router.push("/admin/upload");
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="px-6 py-4">
          <nav className="mt-6">
            <ul className="md:space-y-6">
              <li>
                <Link
                  href="/"
                  className="block py-2 px-3 font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl rounded md:bg-transparent text-zinc-50 md:p-0 dark:text-white md:dark:text-blue-500 hover:bg-blue-800 dark:hover:bg-blue-600"
                  aria-current="page"
                >
                  ISA
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-3 font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl text-zinc-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="block py-2 px-3 font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl text-zinc-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="block py-2 px-3 font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl text-zinc-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Socials
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="flex-1">
        <header className=" shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-zinc-50">Admin Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl justify-center mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500">Main Content Area</span>
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center">
              <h6 className="text-3xl py-4 text-white">Create A New Notice</h6>
              <button
                onClick={handleSubmit}
                // variant="ghost"
                className="w-64 bg-blue-950 mt-4"
              >
                Upload Notice
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPage;