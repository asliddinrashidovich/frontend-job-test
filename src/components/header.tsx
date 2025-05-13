import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="px-5 md:px-10 py-3">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center">
            <div className="flex gap-[24px] items-center">
                <Link to={'/dashboard'}>
                    <img src="/public/logo.svg" alt="logo" />
                </Link>
                <form className="flex gap-3 items-center group py-3 px-[26px] rounded-[6px] hover:bg-[#fff] transition-all duration-200 max-w-[380px]">
                    <button className="relative">
                        <img className="absolute opacity-100 group-hover:opacity-0 transition-all duration-200" src="/public/search.svg" alt="search" />
                        <img className=" opacity-0 group-hover:opacity-100  transition-all duration-200" src="/public/search_black.svg" alt="search" />
                    </button>
                    <input type="text" className="text-[#151515] text-[16px] font-[400] leading-[100%] border-none outline-none w-[380px]" placeholder="Search for any training you want " />
                </form>
            </div>
            <div className="flex items-center gap-[27px]">
                <button className="cursor-pointer">
                    <img src="/ring.svg" alt="ring" />
                </button>
                <button className="border-[2px] border-[#FD648E] rounded-full w-8 h-8 overflow-hidden cursor-pointer">
                    <img src="/avatar.png" alt="avatar" className="object-cover w-full"/>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header