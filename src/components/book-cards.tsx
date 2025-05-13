function BookCards() {
  return (
    <section className="px-5 md:px-10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-3 gap-[40px]">
            <div className=" relative group ">
                <div className="absolute right-[0%] group-hover:translate-x-[105%] transition-all duration-300 translate-x-0 top-4 z-10">
                    <button className="flex items-center justify-center w-8 h-8 rounded-tl-[6px]  rounded-tr-[6px] rounded-br-[6px] bg-[#FF4D4F] cursor-pointer mb-[2px]">
                        <img src="/Icon (2).svg" alt="delete" />
                    </button>
                    <button className="flex items-center justify-center w-8 h-8 rounded-bl-[6px]  rounded-tr-[6px] rounded-br-[6px] bg-[#6200EE] cursor-pointer ">
                        <img src="/icon_12.svg" alt="edit" />
                    </button>
                </div>
                <div className="rounded-[12px] border-[1px] border-[#EBEBEB] shadow-xl p-8 bg-[#fff] z-20 relative">
                    <h2 className="text-[#151515] text-[16px] font-[600] leading-[100%] mb-[6px]">Raspberry Pi User Guide</h2>
                    <p className="text-[14px] font-[400] leading-[150%]">Cover: 
                        <a href="http://url.to.book.cover" className="text-[#01A4FF]"> http://url.to.book.cover</a>
                    </p>
                    <p className="text-[14px] font-[400] leading-[150%]">Pages: <span>221</span></p>
                    <p className="text-[14px] font-[400] leading-[150%]">Published: <span>2012</span></p>
                    <p className="text-[14px] font-[400] leading-[150%] mb-[16px]">Isbn: <span>97811184644652012</span></p>
                    <div className="flex justify-between items-center">
                        <h2 className="text-[14px] font-[500] leading-[15px] text-[#333333]">Eben Upton / 2012</h2>
                        <button className="py-[2px] px-3 bg-[#FF0000] rounded-[8.5px] text-[#fff] font-[700] text-[16px] leadig-[100%] cursor-pointer">
                            New
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookCards