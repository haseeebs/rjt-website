import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useFetchData from "../hooks/useFetchData"

const Layout = () => {
  useFetchData()
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout