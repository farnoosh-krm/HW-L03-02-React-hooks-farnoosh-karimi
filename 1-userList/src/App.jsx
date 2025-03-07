import { useState, useEffect } from "react";
import "./App.css";
import CostumeButton from "./components/CostumeButton";
import CostumeCard from "./components/CostumeCard";
import CostumeInput from "./components/CostumeInput";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stateUser, setStateUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setStateUser(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleAdd = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("Fill in all fields.");
      return;
    }

    const newUser = {
      id: stateUser.length + 1,
      name: name,
      email: email,
      username: name.toLowerCase().trim(),
      phone: "N/A",
    };

    setStateUser([...stateUser, newUser]);
    setName("");
    setEmail("");
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleRemove = (id) => {
    setStateUser(stateUser.filter((user) => user.id !== id));
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <CostumeCard>
        <CostumeInput
          label={"name"}
          value={name}
          variant={"text"}
          onChange={handleChangeName}
        />
        <CostumeInput
          label={"E-mail"}
          value={email}
          variant={"email"}
          onChange={handleChangeEmail}
        />
        <CostumeButton label={"add user"} variant={"add"} onClick={handleAdd} />
      </CostumeCard>
      <CostumeCard>
        <table className="createTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>User Name</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {stateUser.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <CostumeButton
                    label={"remove"}
                    variant={"remove"}
                    onClick={() => handleRemove(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CostumeCard>
    </>
  );
}

export default App;
