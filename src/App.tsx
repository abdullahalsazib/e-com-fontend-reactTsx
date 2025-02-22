import { Suspense } from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import AppContent from "./AppContent";

function App() {
  return (
    <Suspense fallback={<p>Loading component...</p>}>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
