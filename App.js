import "./styles.css";
import React, { useState } from "react";
function AddPerson(props) {
  const [addData, setAddData] = useState({
    Name: "",
    Address: ""
  });

  function ChangeForm(event) {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { addData };
    newFormData[fieldName] = fieldValue;

    setAddData(newFormData);

    const newPerson = {
      Name: addData.Name,
      Address: addData.Address
    };

    const newPersons = [props.persons, newPerson];
    props.setPersons(newPersons);
    props.persons = newPersons;
  }

  return (
    <div>
      <h2>Add a Person</h2>
      <form>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter a name..."
          onChange={ChangeForm}
        />
        <input
          type="text"
          name="Address"
          required="required"
          placeholder="Enter your address..."
          onChange={ChangeForm}
        />
        {/* <button type="submit">Add</button> */}
      </form>
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
      <h2>Hello {props.name}</h2>
      <h2>Your address is {props.address}</h2>
    </div>
  );
}

export default function App() {
  var persons = [
    { name: "Abhiram", address: "US" },
    { name: "Srinath", address: "Arizona" }
  ];
  const [Persons, setPersons] = useState(persons);
  return (
    <div className="App">
      <h1>Hello User</h1>
      {/* <Person name="Srinath" address="US" /> */}
      <PersonList persons={persons} />
      <AddPerson setPersons={setPersons} persons={persons} />
    </div>
  );
}
