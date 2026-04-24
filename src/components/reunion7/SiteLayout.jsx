import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const SiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-column bg-black text-white selection:bg-blue-500/30">
      {/* Background Effect Aero Glass */}
      <div className="fixed inset-0 bg-[url('/bg-aero.jpg')] bg-cover bg-center opacity-40 -z-10" />
      
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default SiteLayout;
