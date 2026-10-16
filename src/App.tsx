import React from "react";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import { EmailModalProvider } from "./context/EmailModalContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SEOHead } from "./components/SEOHead";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function PageRenderer() {
  const { currentPath } = useNavigation();

  switch (currentPath) {
    case "/":
      return <HomePage />;
    case "/services":
      return <ServicesPage />;
    case "/about":
      return <AboutPage />;
    case "/contact":
      return <ContactPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  return (
    <NavigationProvider>
      <EmailModalProvider>
        <SEOHead />
        <div className="flex flex-col min-h-screen bg-[#F8F9FA] text-[#151D24] selection:bg-[#F59E0B] selection:text-[#08111A]">
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none">
            <PageRenderer />
          </main>
          <Footer />
        </div>
      </EmailModalProvider>
    </NavigationProvider>
  );
}
