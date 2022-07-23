import "./styles.css";
import React, { useState } from "react";
function AddPerson(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  function onNameChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function onAddressChange(event) {
    setAddress(event.target.value);
  }

  function onAddSubmit() {
    var person = { name: name, address: address };
    var persons = [...props.persons, person];
    props.setPersons(persons);
  }

  // function ChangeForm(event) {
  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { addData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddData(newFormData);

  //   const newPerson = {
  //     Name: addData.Name,
  //     Address: addData.Address
  //   };

  //   const newPersons = [props.persons, newPerson];
  //   props.setPersons(newPersons);
  //   props.persons = newPersons;
  // }

  return (
    <div>
      <h2>Add a Person</h2>
      <input
        type="text"
        name="Name"
        required="required"
        placeholder="Enter a name..."
        value={name}
        onChange={onNameChange}
      />
      <input
        type="text"
        name="Address"
        required="required"
        placeholder="Enter your address..."
        value={address}
        onChange={onAddressChange}
      />
      <button type="submit" onClick={onAddSubmit}>
        Add
      </button>
    </div>
  );
}

function PersonList(props) {
  return (
    <div>
      {props.persons.map((person) => (
        <div>
          <Person name={person.name} address={person.address} />
        </div>
      ))}
    </div>
  );
}

function Person(props) {
  return (
    <div>
       {/* <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
          <td>{props.name}</td>
          <td>{props.address}</td>
          </tbody>
        </table> */}
      <h2>Hello {props.name}</h2>
      <h2>Your address is {props.address}</h2>
    </div>
  );
}

export default function App() {
  const [persons, setPersons] = useState([
    { name: "Abhiram", address: "US" },
    { name: "Srinath", address: "Arizona" }
  ]);

  return (
    <div className="App">
      <h1>Hello User</h1>
      {/* <Person name="Srinath" address="US" /> */}
      <PersonList persons={persons} />
      <AddPerson persons={persons} setPersons={setPersons} />
    </div>
  );
}
