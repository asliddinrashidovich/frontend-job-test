import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Modal } from "antd"
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";
interface Ibooks {
  id: number
  title: string
  author: string
  cover: string
  pages: number
  published: number
  isbn: string
}

function HeaderTop() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get('id') || ""
    const search = searchParams.get('search') || ""

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };
    
    const onFinish = async (values:Ibooks) => {
        await axios.post(`https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/book-fake-api`, values).then((res) => {
        setIsModalOpen(false);
        searchParams.set("id", res.data.id)
        setSearchParams(searchParams)
      }).catch(() => {
        toast.error("something went wrong")
      })
    }
    const fetchBooks = async () => {
      const res = await axios.get(`https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/book-fake-api`);
      return res.data
    };
    const { data: books} = useQuery({
        queryKey: ["book", isModalOpen, id, search],
        queryFn: fetchBooks,
    });

  return (
    <section className="px-5 md:px-10 py-12">
        <div className="max-w-[1240px] mx-auto flex justify-between items-center pb-3">
            <h2 className="text-[36px] font-[700] leading-[100%] text-[#fff]">You’ve got <span className="text-[#6200EE]">{books?.length} book</span>  </h2>
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
               <Form
                  name="layout-multiple-horizontal"
                  layout="horizontal"
                  requiredMark={false}
                  onFinish={(values) => onFinish(values)}
                  initialValues={{
                      title: "",
                      author: "",
                      cover: "",
                      pages: null,
                      published: null,
                      isbn: null
                  }}
              >
                  <Form.Item
                      label="Title"
                      name="title"
                      rules={[{ required: true }]}
                      layout="vertical"
                      className='h-[60px] w-[270px] sm:w-[100%] username_label'
                  >
                      <Input placeholder='Title' />
                  </Form.Item>

                  <Form.Item
                      label="Author"
                      name="author"
                      rules={[{ required: true }]}
                      layout="vertical"
                      className='h-[60px] w-[270px] sm:w-[100%] username_label'
                  >
                      <Input placeholder='Author'/>
                  </Form.Item>
                  <Form.Item
                      label="Cover"
                      name="cover"
                      rules={[{ required: true }]}
                      layout="vertical"
                      className='h-[60px] w-[270px] sm:w-[100%] username_label'
                  >
                      <Input placeholder='Cover'/>
                  </Form.Item>
                  <Form.Item
                      label="Pages"
                      name="pages"
                      rules={[{ required: true }]}
                      layout="vertical"
                      className='h-[60px] w-[270px] sm:w-[100%] username_label'
                  >
                      <Input type="number" placeholder='Pages'/>
                  </Form.Item>
                  <Form.Item
                      label="Published"
                      name="published"
                      rules={[{ required: true }]}
                      layout="vertical"
                      className='h-[60px] w-[270px] sm:w-[100%] username_label'
                  >
                      <Input type="number" placeholder='Published'/>
                  </Form.Item>
                  <Form.Item
                      label="Isbn"
                      name="isbn"
                      rules={[{ required: true }]}
                      layout="vertical"
                      className='h-[60px] w-[270px] sm:w-[100%] username_label'
                  >
                      <Input type="number" placeholder='Isbn'/>
                  </Form.Item>


                  <Form.Item label={null}>
                      <Button 
                          htmlType="submit"
                      >
                          Submit
                      </Button>
                  </Form.Item>
              </Form>
            </Modal>
        </div>
        <div className="max-w-[1240px] mx-auto">
            <p className="text-[#FEFEFE] text-[20px] font-[400] leading-[100%]">Your books today</p>
        </div>
    </section>
  )
}

export default HeaderTop