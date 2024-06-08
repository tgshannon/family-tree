import React from 'react';
import Tree from 'react-d3-tree';
import Person from './Person';

const FamilyTree = ({ data }) => {
  const containerStyles = {
    width: '100%',
    height: '100vh',
  };

  const renderCustomNode = ({ nodeDatum }) => (
    <foreignObject width="200" height="100" x="-100" y="-50">
      <Person nodeData={nodeDatum} />
    </foreignObject>
  );

  return (
    <div style={containerStyles}>
      <Tree
        data={data}
        renderCustomNodeElement={renderCustomNode}
        orientation="vertical"
      />
    </div>
  );
};

export default FamilyTree;


