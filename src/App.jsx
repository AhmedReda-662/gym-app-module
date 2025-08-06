import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./pages/Login";
import LiveSession from "./pages/LiveSession";
import AppLayout from "./pages/AppLayout";
import { DataContext } from "./context/DataContext";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <DataContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="/livestream" element={<LiveSession />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "18px",
            maxWidth: "500px",
            padding: "16px 24px",
            background: "rgba(34, 34, 34, 0.505)",
            color: "#fff",
            borderRadius: "6px",
          },
        }}
      />
    </DataContext>
  );
}

export default App;
