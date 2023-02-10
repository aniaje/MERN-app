import { useState, useEffect } from "react";
import styled from "styled-components";
import PostListItem from "./userListItem";
import { useForm } from "react-hook-form";
import Axios from "axios";
import "./App.css";
import GlobalStyle from "./globalStyles";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/getUsers`).then((response) => {
      const users = response.data;
      setUsers(users);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addUser = (data) => {
    Axios.post(`http://localhost:3001/addUser`, data).then((response) => {
      const user = response.data;
      setUsers([...users, user]);
    });
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <h1>our team</h1>
      <form onSubmit={handleSubmit(addUser)}>
        <input
          placeholder="name"
          type="text"
          {...register("name", { required: true })}
        />

        <input type="email" {...register("username", { required: true })} />

        <input type="number" {...register("experience", { required: true })} />

        {errors.name ||
          errors.username ||
          (errors.experience && <span>All fields are required</span>)}

        <input type="submit" />
      </form>
      <div className="App">
        {users.map((user) => {
          return (
            <PostListItem
              name={user.name}
              username={user.username}
              experience={user.experience}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}

export default App;
