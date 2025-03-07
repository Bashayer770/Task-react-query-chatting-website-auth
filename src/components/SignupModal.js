import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import { useRegister } from "../utils/api/auth";

function SignupModal() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState();
  const register = useRegister();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    register.mutate(user);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Signup
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Username</InputGroup.Text>
              <FormControl
                placeholder="Your username"
                name="username"
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Password</InputGroup.Text>
              <FormControl
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Password"
              />
            </InputGroup>
            <Button variant="outline-dark" type="submit">
              Signup
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignupModal;
