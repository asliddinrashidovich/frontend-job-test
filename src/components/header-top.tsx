import { Button, Input, Modal } from "antd"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { LinkOutlined } from '@ant-design/icons';

function HeaderTop() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <section className="px-5 md:px-10 py-12">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center pb-3">
            <h2 className="text-[36px] font-[700] leading-[100%] text-[#fff]">You’ve got <span className="text-[#6200EE]">7 book</span>  </h2>
            <Button onClick={showModal} className="add__btn">
                <FaPlus />
                <span className=" text-[16px] font-[500] leading-[100%]">Create a book</span>
            </Button>
            <Modal
              title="Create a book"
              closable={{ 'aria-label': 'Custom Close Button' }}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <div className="my-[28px]">
                <h2 className="mb-[4px] text-[14px] font-[500]">ISBN</h2>
                <Input size="large" placeholder="______________" prefix={<LinkOutlined className="cursor-pointer"/>} />
              </div>
              <div className="flex gap-3">
                <Button className="close_btn" onClick={handleCancel}>
                  Close
                </Button>
                <Button className="submit_btn" onClick={handleOk}>
                  Submit
                </Button>
              </div>
            </Modal>
        </div>
        <div className="max-w-[1240px] mx-auto">
            <p className="text-[#FEFEFE] text-[20px] font-[400] leading-[100%]">Your books today</p>
        </div>
    </section>
  )
}

export default HeaderTop