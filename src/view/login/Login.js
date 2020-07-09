import React, { Component, Fragment } from "react";
import "./Login.scss";

/***********antd组件********/
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined, InsuranceOutlined } from '@ant-design/icons';

/**
 * 校验工具
 * */
import { validate_password } from "../../utils/validate";

/**
 * api
 * */
import { Login, GetCode } from "../../api/account"
/**
 * 登录组件
 * */
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",  // 用户名
        };
    };
    // 登录
    onFinish = values => {
        Login(values).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
        console.log('Received values of form: ', values);
    };
    // 获取验证码
    getCode = () => {
        let username = this.state.username;
        if(!username){
            message.info('用户名不能为空！',1);
            return false
        }
        let responseData = {
            username,
            module: 'register'
        }
        console.log(responseData);
        GetCode(responseData).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    };
    // inputChange输入处理
    inputChange = (e)=>{
        let value = e.target.value;
        this.setState({
            username:value
        })
    };
    /**
     * 子组件给父组件传参
     * */
    toggleForm = () => {
        this.props.switchForm("register");
    };
    render() {
        const {username} = this.state;
        return (
            <Fragment>
                <div id="login">
                    <div className="content-wrap">
                        <div className="tip flex justify-between align-items">
                            <h4>登录</h4>
                            <span onClick={this.toggleForm}>账号注册</span>
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
                                    rules={[
                                        { required: true, message: '用户名不能为空' },
                                        { type: "email", message: "邮箱格式不正确" }
                                    ]}
                                >
                                    <Input value={username} onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
                                </Form.Item>
                                {/* 密码 */}
                                <Form.Item
                                    name="password"
                                    rules={[
                                        { required: true, message: '密码不能为空' },
                                        { pattern: validate_password, message: "请输入大于6小于20位的密码" }
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                </Form.Item>

                                {/* 验证码 */}
                                <Form.Item
                                    name="code"
                                    rules={[
                                        { required: true, message: '验证码不能为空' },
                                        { len: 6, message: "请输入长度为6的验证码" }
                                    ]}
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
                                            <Button onClick={this.getCode} type="danger" className="login-form-button">
                                                获取验证码</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" block className="login-form-button">
                                        登录</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LoginForm;