import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import { Container, Card } from "react-bootstrap";

const FriendDetails = () => {
  const { friendID } = useParams();
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <NavbarHeader></NavbarHeader>
      <Container>
        <Card className="w-100 mt-4 shadow bg-light">
          <Card.Body className="text-center">
            <Card.Title>This is friend details {friendID}</Card.Title>
            <Card.Subtitle className="my-2 fs-3 fw-bold text-lead">
              Name: {friend.name}
            </Card.Subtitle>
            <Card.Text className="fs-4">Email: {friend.email}</Card.Text>
            <Card.Text className="fs-4">Phone: {friend.phone}</Card.Text>
            <Card.Link href="#" className="btn btn-outline-secondary">
              Add Friend
            </Card.Link>
            <Card.Link href="#" className="btn btn-outline-secondary">
              Message
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default FriendDetails;
