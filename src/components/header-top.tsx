import { Button } from "antd"
import { FaPlus } from "react-icons/fa6";

function HeaderTop() {
  return (
    <section className="px-5 md:px-10 py-12">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center pb-3">
            <h2 className="text-[36px] font-[700] leading-[100%] text-[#fff]">You’ve got <span className="text-[#6200EE]">7 book</span>  </h2>
            <Button className="add__btn">
                <FaPlus />
                <span className=" text-[16px] font-[500] leading-[100%]">Create a book</span>
            </Button>
        </div>
        <div className="max-w-[1240px] mx-auto">
            <p className="text-[#FEFEFE] text-[20px] font-[400] leading-[100%]">Your books today</p>
        </div>
    </section>
  )
}

export default HeaderTop