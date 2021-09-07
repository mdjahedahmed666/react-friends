import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Friend = (props) => {
  const { name, email, id } = props.friend;
  const history = useHistory();
  function handleClick(id) {
    history.push(`/friend/${id}`);
  }
  return (
    <Container>
      <div className="border p-4 mb-2 shadow text-center">
        <p className="fw-bold fs-4">Name: {name}</p>
        <p className="fw-bold">Email: {email}</p>
        {/* <p>
          id <Link to={`/friend/${id}`}>show details</Link>
        </p> */}
        <Button varient="primary" onClick={() => handleClick(id)}>
          Show details
        </Button>
      </div>
    </Container>
  );
};

export default Friend;
