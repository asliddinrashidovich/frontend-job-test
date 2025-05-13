import { Button } from "antd"
import { useNavigate } from "react-router-dom"

function NotFound() {
    const navigate = useNavigate()
    function handleClick() {
        navigate("/dashboard")
    }
    function handleReload() {
        window.location.reload()
    }
  return (
    <div className='w-full h-[100vh] flex justify-center items-center px-[20px]'>
      <div className=' max-w-[720px] '>
        <img src="/not_found_page.svg" alt="not found" />
        <div className="flex gap-3 justify-center mt-[80px]">
            <Button onClick={handleClick} className="submit_btn" >
                Go Home Page
            </Button>
            <Button onClick={handleReload} className="close_btn" >
                Reload Page
            </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFound