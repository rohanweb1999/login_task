import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const Signin = () => {
    return (
        <div className="signInPage">
            <h2>Sign In</h2>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}

export default Signin;
