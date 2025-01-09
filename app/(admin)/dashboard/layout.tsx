import Menu from "@/components/custom/menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen   flex items-start justify-center gap-2">
      <div className=" h-full flex">
        <Menu />
      </div>
      <div className="flex flex-1 w-full bg-blue-300 min-h-screen items-center justify-center ">
        {children}
      </div>
    </div>
  );
};

export default Layout;
