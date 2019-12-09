import React from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "components";
// import { validateField } from "utils/helpers";

const LoginForm = props => {
  return (
    <div>
      <div className="auth__top">
        <h2>Log in</h2>
        <p>Log in to your account</p>
      </div>
      <Block>
        <Form
          // onSubmit={}
          className="login-form"
        >
          <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              size="large"
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              size="large"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Log in
            </Button>
            <Link href="" className="auth__register-link" to="/register">
              Register now!
            </Link>
          </Form.Item>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
