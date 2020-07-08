import React, { Component } from "react";
import "./Register.scss";

/***********antd组件********/
import { Form, Input, Button,Row, Col } from 'antd';
import { UserOutlined, LockOutlined, InsuranceOutlined } from '@ant-design/icons';
/**
 * 注册组件
 * */
class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    render() {
        return (
            <div id="register">
                <div className="content-wrap">
                    <div className="tip flex justify-between align-items">
                        <h4>注册</h4>
                        <span>账号登录</span>
                    </div>
                    <div className="form-wrap">
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={this.onFinish}
                        >
                            {/* 账号 */}
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入账号' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                            </Form.Item>
                            {/* 密码1 */}
                            <Form.Item
                                name="password1"
                                rules={[{ required: true, message: '请输入密码' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </Form.Item>

                            {/* 密码2 */}
                            <Form.Item
                                name="password2"
                                rules={[{ required: true, message: '请输入密码' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="请再次输入密码"
                                />
                            </Form.Item>

                            {/* 验证码 */}
                            <Form.Item
                                name="username2"
                                rules={[{ required: true, message: '请输入验证码' }]}
                            >
                                <Row gutter={8}>
                                    <Col span={15}>
                                        <Input
                                            prefix={<InsuranceOutlined className="site-form-item-icon" />}
                                            type="username"
                                            placeholder="验证码"
                                        />
                                    </Col>
                                    <Col span={9}>
                                        <Button type="danger" htmlType="submit" className="login-form-button">
                                            获取验证码</Button>
                                    </Col>
                                </Row>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" block className="login-form-button">
                                    注册</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterForm;