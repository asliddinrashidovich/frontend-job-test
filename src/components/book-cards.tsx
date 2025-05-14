import { useQuery } from "@tanstack/react-query"
import { Button, Form, Input, Modal } from "antd"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useSearchParams } from "react-router-dom"

interface Ibooks {
    id: number
    title: string
    author: string
    cover: string
    pages: number
    published: number
    isbn: string
  }

function BookCards() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const id = searchParams.get('id') || ""
    const search = searchParams.get('search') || ""
    
    const handleCancel2 = () => {
        setIsModalOpen2(false);
    };
    const showModal2 = (id: number) => {
        searchParams.set('id', (id).toString())
        setSearchParams(searchParams)
        setIsModalOpen2(true);
    };
   
    const onEdit = async (values:Ibooks) => {
        await axios.put(`https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/book-fake-api/${id}`, values).then(() => {
        setIsModalOpen2(false);
        toast.success("The book is edited successfully")
      }).catch(() => {
        toast.error("something went wrong")
      })
    }

    const handleOk2  = () => {
        setIsModalOpen2(false)
    }

    const showModal = (id: number) => {
        searchParams.set('id', (id).toString())
        setSearchParams(searchParams)
        setIsModalOpen(true);
    };


    const handleCancel = () => {
        setIsModalOpen(false);
    };
   
    const fetchBooks = async () => {
      const res = await axios.get(`https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/book-fake-api`);
      const allProducts =  res.data
      
      const filtered = allProducts.filter((product : Ibooks) =>  product.title.toLowerCase().includes(search.toLowerCase()) );

      return filtered
    };
    const { data: books, isLoading: loading} = useQuery({
        queryKey: ["book", isModalOpen,isModalOpen2, id, search],
        queryFn: fetchBooks,
    });

    const handleOk = async () => {
        await axios.delete(`https://67a209b8409de5ed52540ec2.mockapi.io/api/v1/book-fake-api/${id}`).then(() => {
            toast.success("The book deleted successfully")
            setIsModalOpen(false)
        }).catch((err) => {
            console.log(err)
        })
    }
    if(loading) {
        return (
            <div className="w-full">
                <h2 className="text-center text-[30px] text-[orange]">Loading...</h2>
            </div>
        )
    }
  return (
    <section className="px-5 md:px-10">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px]">
            {books &&  books?.map((item: Ibooks) => (
                <div key={item.id} className=" relative group ">
                    <div className="absolute right-[0%] group-hover:translate-x-[105%] transition-all duration-300 translate-x-0 top-4 z-10">
                        <button onClick={() => showModal(item.id)} className="flex items-center justify-center w-8 h-8 rounded-tl-[6px]  rounded-tr-[6px] rounded-br-[6px] bg-[#FF4D4F] cursor-pointer mb-[2px]">
                            <img src="/Icon (2).svg" alt="delete" />
                        </button>
                        <button onClick={() => showModal2(item.id)} className="flex items-center justify-center w-8 h-8 rounded-bl-[6px]  rounded-tr-[6px] rounded-br-[6px] bg-[#6200EE] cursor-pointer ">
                            <img src="/icon_12.svg" alt="edit" />
                        </button>
                    </div>
                    <div className="rounded-[12px] border-[1px] border-[#EBEBEB] shadow-xl p-8 bg-[rgb(255,255,255)] z-20 relative">
                        <h2 className="text-[#151515] text-[16px] font-[600] leading-[100%] mb-[6px]">{item.title}</h2>
                        <p className="text-[14px] font-[400] leading-[150%]">Cover: 
                            <a href="http://url.to.book.cover" className="text-[#01A4FF]"> {item.cover}</a>
                        </p>
                        <p className="text-[14px] font-[400] leading-[150%]">Pages: <span>{item.pages}</span></p>
                        <p className="text-[14px] font-[400] leading-[150%]">Published: <span>{item.published}</span></p>
                        <p className="text-[14px] font-[400] leading-[150%] mb-[16px]">Isbn: <span>{item.isbn}</span></p>
                        <div className="flex justify-between items-center">
                            <h2 className="text-[14px] font-[500] leading-[15px] text-[#333333]">{item.author} / {item.published}</h2>
                            <button className="py-[2px] px-3 bg-[#FF0000] rounded-[8.5px] text-[#fff] font-[700] text-[16px] leadig-[100%] cursor-pointer">
                                New
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            {!books?.length && (
                <div className="w-full">
                    <h2 className="text-center text-[30px] text-[red]">No data</h2>
                </div>
            )}
        </div>
        <Modal
            title="Edit a book"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen2}
            onOk={handleOk2}
            onCancel={handleCancel2}
            footer={null}
        >
            <Form
                name="layout-multiple-horizontal"
                layout="horizontal"
                requiredMark={false}
                onFinish={(values) => onEdit(values)}
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
        <Modal
            title="Delete Book"
            closable={{ 'aria-label': 'Custom Close Button' }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            <p>Do you want to delete this book</p>
            <div className="flex gap-[10px] mt-[20px]">
                <button onClick={handleCancel} className="px-[20px] cursor-pointer py-[5px] bg-[red] rounded-[5px] text-[#fff]">Cancel</button>
                <button onClick={handleOk} className="px-[20px] cursor-pointer py-[5px] bg-[#6200EE] rounded-[5px] text-[#fff]">Ok</button>
            </div>
        </Modal>
    </section>
  )
}

export default BookCards