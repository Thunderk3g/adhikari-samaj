import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Provider = ({ children }: IProvider) => {
  return (
    <BrowserRouter>
      <HelmetProvider>{children}</HelmetProvider>
    </BrowserRouter>
  );
};

interface IProvider {
  children: React.ReactNode;
}

export default Provider;
