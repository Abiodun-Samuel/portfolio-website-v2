import "./App.css";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import HomeLayout from "./Layout/HomeLayout";
import AOS from "aos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  AOS.init({ duration: 500 });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "projects",
          element: <ProjectPage />,
        },
        {
          path: "blogs",
          element: <BlogPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
