import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

type FieldType = {
  email?: string;
  name?: string;
  secret?: string;
};


const RegisterForm: React.FC = () => {
    const onFinish:  FormProps<FieldType>['onFinish'] = async (values) => {
        const {email, name, secret} = values
        await axios.post(`https://no23.lavina.tech/signup`, {name, email, secret, key: 'Mason1'}).then((res) => {
            console.log(res)
            // localStorage.setItem('user', JSON.stringify(res.data.user))
            // localStorage.setItem('token', res.data.accessToken)
        }).catch((err) => {
            if(err.status == 409) {
                toast.error('User Not found, please Try again')
            } else {
                toast.error('Something went wrong')
            }
        })
    };

    const getData = async () => {
        const res = await axios.get('http://devtest.lavina.tech/test/books')
        console.log(res)
    }
    return (
        <Form
            name="layout-multiple-horizontal"
            layout="horizontal"
            requiredMark={false}
            onFinish={(values) => onFinish(values)}
            initialValues={{
                email: "",
                name: "",
                secret: ""
            }}
        >
            <h2 className='text-[36px] font-[700] leading-[100%] text-[#151515] text-center mb-[36px]'>Sign up</h2>
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true }]}
                layout="vertical"
                className='h-[60px] w-[270px] sm:w-[374px] username_label'
            >
                <Input placeholder='Enter your name'/>
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true }]}
                layout="vertical"
                className='h-[60px] w-[270px] sm:w-[374px] username_label'
            >
                <Input placeholder='Enter your email' type='email'/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="secret"
                rules={[{ required: true }]}
                layout="vertical"
                className='h-[60px] w-[270px] sm:w-[374px] username_label'
            >
                <Input placeholder='Enter your password'/>
            </Form.Item>
            <Form.Item
                label="Confirm password"
                name="confirmPassword"
                rules={[{ required: true }]}
                layout="vertical"
                className='h-[60px] w-[270px] sm:w-[374px] password_label'
            >
                <Input placeholder='Enter your confirm password'/>
            </Form.Item>


            <Form.Item label={null}>
                <Button 
                    htmlType="submit"
                >
                    Button
                </Button>
            </Form.Item>
            <button onClick={getData}>get books</button>
            <h2 className='text-[14px] text-[#24272C] text-center leading-[120%] font-[300]'>Already signed up? <Link to={'/'} className='text-[#1B28BC]'>Go to sign in.</Link></h2>
        </Form>
    )
}

export default RegisterForm;