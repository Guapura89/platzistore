import Header from "components/Header";

const Layout = ({ children }) => {
  return (
    <div className="Layout h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
