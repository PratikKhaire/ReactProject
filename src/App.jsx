import "./App.css";
import { useState } from "react";
import Profile from "./Profile";

export default function App() {
  // const [name, setName] = useState("UserName");
  // const [pic, setPic] = useState(
  //   "https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90fGVufDB8fDB8fHww"
  // );
  // const [title, setTitle] = useState("manager");
  const data = [
    {
      Name: "Pratik",
      title: "developer",
      photo:
        "https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90fGVufDB8fDB8fHww",
    },
    {
      Name: "Pratik",
      title: "developer",
      photo:
        "https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGUlMjBwaG90fGVufDB8fDB8fHww",
    },
  ];
  return (
    <>
      <div id="container">
        {data.map((value, index) => {
          return (
            <Profile
              key={index}
              name={value.Name}
              title={value.title}
              pic={value.photo}
            />
          );
        })}
      </div>
    </>
  );
}


