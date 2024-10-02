import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import useFetchData from "../hooks/useFetchData"
import { useSelector } from "react-redux"

const Layout = () => {
  const { isLoading } = useSelector(store => store.package);
  useFetchData()

  return (
    <div>
      <Header />
      <div className={`${isLoading ? 'pt-0' : 'pt-20'} bg-lime-50`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout