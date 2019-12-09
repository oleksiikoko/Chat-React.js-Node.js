import React from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "components";
// import { validateField } from "utils/helpers";

const RegisterForm = props => {
  const success = true;
  return (
    <div>
      <div className="auth__top">
        <h2>Registration</h2>
        <p>Create your account</p>
      </div>
      <Block>
        {!success ? (
          <Form
            // onSubmit={}
            className="login-form"
          >
            <Form.Item>
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                size="large"
                placeholder="E-Mail"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                size="large"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                size="large"
                placeholder="Repeat password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Log in
              </Button>
              <Link href="" className="auth__register-link" to="/login">
                Log in now!
              </Link>
            </Form.Item>
          </Form>
        ) : (
          <div className="auth__success-block">
            <Icon type="exclamation-circle" theme="twoTone" />
            <h2>Confirm your account</h2>
            <p>Check your mail</p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegisterForm;
