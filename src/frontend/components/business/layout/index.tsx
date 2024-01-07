import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="max-w-[1920px] w-full px-5 xl:px-[80px] 2xl:px-[122px] relative">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
