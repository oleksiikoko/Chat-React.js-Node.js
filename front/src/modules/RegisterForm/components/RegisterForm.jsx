import React from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";

import { Button, Block } from "components";
import { validateField } from "utils/helpers";

const success = false;

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty
  } = props;

  return (
    <div>
      <div className="auth__top">
        <h2>Registration</h2>
        <p>Create your account</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              validateStatus={validateField("email", touched, errors)}
              hasFeedback
              help={!touched.email ? "" : errors.email}
            >
              <Input
                id="email"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="E-Mail"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("fullname", touched, errors)}
              hasFeedback
            >
              <Input
                id="username"
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                size="large"
                placeholder="Fullname"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password", touched, errors)}
              hasFeedback
              help={!touched.password ? "" : errors.password}
            >
              <Input
                id="password"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                size="large"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item
              validateStatus={validateField("password2", touched, errors)}
              hasFeedback
            >
              <Input
                id="password-repeat"
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                size="large"
                placeholder="Repeat password"
                // value={values.password_2}
                // onChange={handleChange}
                // onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              {dirty && !isValid && <span>Error!</span>}
              <Button
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
                size="large"
              >
                Sign in
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
