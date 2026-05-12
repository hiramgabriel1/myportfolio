import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

const Experience = lazy(() => import("./pages/Experience"));

const Projects = lazy(() => import("./pages/Projects"));


const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "Hiram Gabriel - Full Stack Developer",
    description:
      "Hiram Gabriel — Full Stack Developer specializing in React.js, Node.js and modern Web Technologies. Based in Sonora, México.",
  },
  "/about": {
    title: "About - Hiram Gabriel | Full Stack Developer",
    description:
      "Learn about Hiram Gabriel — Full Stack Developer from Sonora, México with expertise in React.js, Node.js and modern web technologies.",
  },
  "/projects": {
    title: "Projects - Hiram Gabriel | Full Stack Developer Portfolio",
    description:
      "Explore projects built by Hiram Gabriel using React.js, Node.js, MongoDB and modern web technologies.",
  },

  "/experience": {
    title: "Experience - Hiram Gabriel | Full Stack Developer",
    description:
      "Professional experience of Hiram Gabriel in full stack web development.",
  },



};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Hiram Gabriel - Full Stack Developer",
      description:
        "Portfolio of Hiram Gabriel — Full Stack Developer specializing in React.js, Node.js and modern web technologies.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://hiramgabriel1.vercel.app${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://hiramgabriel1.vercel.app${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
        <Background3D />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              <Route path="/experience" element={<Experience />} />

              <Route path="/projects" element={<Projects />} />


              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
