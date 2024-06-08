import React from 'react';

const Person = ({ nodeData }) => {
  const { name, age, gender, picture } = nodeData;

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    background: '#f9f9f9',
  };

  const pictureStyles = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    marginRight: '10px',
  };

  return (
    <div style={containerStyles}>
      {picture && <img src={picture} alt={`${name}'s picture`} style={pictureStyles} />}
      <div>
        <div><strong>Name:</strong> {name}</div>
        {age && <div><strong>Age:</strong> {age}</div>}
        {gender && <div><strong>Gender:</strong> {gender}</div>}
      </div>
    </div>
  );
};

export default Person;


