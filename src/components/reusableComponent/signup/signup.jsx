import React, { useState } from "react";
import { Form, Col, Button, Container, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./_index.scss";
import { signUp } from "../../myApp/userSlice";
import { useDispatch } from "react-redux";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("false");
  const history = useHistory();

  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(
      signUp({
        name: name,
        email: email,
        password: password,
      })
    );
    alert(
      "your account has been created you must move to the loggin screen Thankyou!"
    );
  };
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <section id="signup-section">
      <div className="signup">
        <Card className="my-card">
          <Container>
            <Form>
              <h1 className="my-header">Sign Up! To Self Assessment</h1>
              <hr className="hr"></hr>
              <Form.Row className="link-style">
                <Form.Group as={Col} lg="8" className="form-font ">
                  {hasAccount ? (
                    <p>
                      Already Having account ?
                      <Button
                        variant="link"
                        onClick={() => setHasAccount(!hasAccount)}
                        onClick={handleLogin}
                      >
                        Sign in
                      </Button>
                    </p>
                  ) : (
                    ""
                  )}
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formBasicEmail" className="form-font">
                <Form.Label>Enter Full Name</Form.Label>
                <Form.Control
                  className="form-font"
                  type="text"
                  placeholder="Enter your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p>{emailError}</p>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="form-font">
                <Form.Label>Enter Email Address</Form.Label>
                <Form.Control
                  className="form-font"
                  type="email"
                  placeholder="Enter your E-mail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p>{emailError}</p>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="form-font">
                <Form.Label>Enter Password</Form.Label>
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
                <Form.Group as={Col} lg="6" className="form-font form-pad">
                  <Button
                    className="mybutton"
                    variant="primary"
                    onClick={handleSignUp}
                  >
                    Join Now
                  </Button>
                </Form.Group>
                <Form.Group as={Col} lg="6" className="form-font form-pad">
                  <Button
                    className="my-button"
                    variant="outline-primary"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          </Container>
        </Card>
      </div>
    </section>
  );
};

export default Signup;
