import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/main-layout.js"
import LoginPage from "./pages/login-page.js"
import RegisterPage from "./pages/register-page.js"
import DashboardPage from "./pages/dashboard.js"
import NotFound from "./pages/not-found.js"
import { ReactNode } from "react"

function App() {
  const isAuth = () => {
    return localStorage.getItem('token')
  }
  function ProtectedRoute({children}: { children: ReactNode }) {
    if(isAuth()) {
      return children
    } else {
      return <NotFound/>
    }
  }
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App