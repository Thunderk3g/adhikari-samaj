import Provider from "./providers";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Provider>
      <AppRoutes />
    </Provider>
  );
};

export default App;
