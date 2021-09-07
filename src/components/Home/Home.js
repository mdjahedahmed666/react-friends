import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";
import NavbarHeader from "../NavbarHeader/NavbarHeader";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div>
      <NavbarHeader></NavbarHeader>
      <h1 className="text-center p-2">Friend {friends.length}</h1>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Home;
