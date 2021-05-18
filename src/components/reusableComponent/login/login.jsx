import React, { useState } from "react";
import { Form, Col, Button, Card, Container } from "react-bootstrap";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./_index.scss";
import { login } from "../../myApp/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("false");
  const history = useHistory();
  const userInfo = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const handleSignup = () => {
    history.push("/signup");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user1 = userInfo.filter(
      (user) =>
        user.email === email && user.password === password && user.name === name
    );

    if (user1.length > 0) {
      history.push(`/dashboard/home/${user1[0].name}`);
      dispatch(login(true));
    } else {
      alert("Email & Password is incorrect");
    }
  };
  return (
    <section id="login">
      <div className="login-form">
        {user ? (
          <Redirect from="/login" to="/dashboard/home" />
        ) : (
          <Card className="my-card">
            <Container>
              <Form>
                <h1 className="my-header">Login! To Self Assessment</h1>
                <hr className="hr" />
                <Form.Row>
                  <Form.Group as={Col} lg="8" className="form-font">
                    {hasAccount ? (
                      <p>
                        Not having account ?
                        <Button
                          variant="link"
                          onClick={() => setHasAccount(!hasAccount)}
                          onClick={handleSignup}
                        >
                          Sign-up here
                        </Button>
                      </p>
                    ) : (
                      ""
                    )}
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="form-font">User Name</Form.Label>
                  <Form.Control
                    className="form-font"
                    type="text"
                    placeholder="Enter UserName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>{emailError}</p>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="form-font">Email address</Form.Label>
                  <Form.Control
                    className="form-font"
                    type="email"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p>{emailError}</p>
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Row className="form-font">
                    <Form.Label as={Col} lg="6" className="form-padding">
                      Enter Password
                    </Form.Label>
                    <Form.Label as={Col} lg="6" className="my-row">
                      <Link
                        from="/login"
                        to="/forgetpassword"
                        className="text-muted"
                      >
                        Forget Password ?
                      </Link>
                    </Form.Label>
                  </Form.Row>
                  <Form.Control
                    className="form-font"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p>{passwordError}</p>
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} lg="6" className="form-pad">
                    <Button
                      className="mybutton"
                      variant="primary"
                      onClick={handleLogin}
                    >
                      login
                    </Button>
                  </Form.Group>
                  <Form.Group as={Col} lg="6" className="form-pad">
                    <Button
                      className="my-button"
                      variant="outline-primary"
                      type="submit"
                      onClick={handleSignup}
                    >
                      signUp
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Container>
          </Card>
        )}
      </div>
    </section>
  );
};
export default Login;
