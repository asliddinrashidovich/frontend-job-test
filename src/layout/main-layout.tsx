import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <div>
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </div>
        <Outlet/>
    </>
  )
}

export default MainLayout