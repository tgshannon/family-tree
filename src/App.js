import React from 'react';
import FamilyTree from './FamilyTree';

// Sample enriched JSON data
const familyData = {
  name: "John",
  age: 70,
  gender: "Male",
  picture: "path/to/john.jpg",
  children: [
    {
      name: "Jane",
      age: 50,
      gender: "Female",
      picture: "path/to/jane.jpg",
      children: [
        {
          name: "Jake",
          age: 30,
          gender: "Male",
          picture: "path/to/jake.jpg",
          children: []
        },
        {
          name: "Jill",
          age: 28,
          gender: "Female",
          picture: "path/to/jill.jpg",
          children: []
        }
      ]
    },
    {
      name: "Doe",
      age: 45,
      gender: "Male",
      picture: "path/to/doe.jpg",
      children: [
        {
          name: "Daisy",
          age: 20,
          gender: "Female",
          picture: "path/to/daisy.jpg",
          children: []
        }
      ]
    }
  ]
};

const App = () => {
  return (
    <div className="App">
      <h1>Family Tree</h1>
      <FamilyTree data={familyData} />
    </div>
  );
};

export default App;


