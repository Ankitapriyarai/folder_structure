import React, { useState } from 'react';
import './App.css';

const TreeNode = ({ node, onToggle, onAdd, onDelete, onEdit, depth }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  const handleToggle = () => {
    setExpanded(!isExpanded);
    onToggle(node);
  };

  const handleAdd = () => {
    onAdd(node);
  };

  const handleDelete = () => {
    onDelete(node);
  };

  const handleEdit = () => {
    setEditing(true);
    setNewName(node.name);
  };

  const handleSaveEdit = () => {
    onEdit(node, newName);
    setEditing(false);
  };

  return (
    <div style={{ marginLeft: depth * 20 }}>
      <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {node.children && (isExpanded ? '[-]' : '[+]')}{' '}
      </span>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <>
          {node.type === 'folder' ? (
            <span onClick={handleAdd}>[+]</span>
          ) : null}
          {node.type === 'file' ? (
            <span>
              <span onClick={handleEdit}>[Edit]</span>
              <span onClick={handleDelete}>[Delete]</span>
            </span>
          ) : null}
          {node.name}
        </>
      )}
      {isExpanded &&
        node.children &&
        node.children.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            onToggle={onToggle}
            onAdd={onAdd}
            onDelete={onDelete}
            onEdit={onEdit}
            depth={depth + 1}
          />
        ))}
    </div>
  );
};

const FolderStructure = () => {
  const [data, setData] = useState({
    id: 1,
    name: 'Root',
    type: 'folder',
    children: [
      {
        id: 2,
        name: 'Folder 1',
        type: 'folder',
        children: [
          { id: 3, name: 'File 1-1', type: 'file' },
          { id: 4, name: 'File 1-2', type: 'file' },
        ],
      },
      {
        id: 5,
        name: 'Folder 2',
        type: 'folder',
        children: [
          { id: 6, name: 'File 2-1', type: 'file' },
          { id: 7, name: 'File 2-2', type: 'file' },
        ],
      },
      {
        id: 8,
        name: 'Folder 3',
        type: 'folder',
        children: [
          { id: 9, name: 'File 2-1', type: 'file' },
          { id: 10, name: 'File 2-2', type: 'file' },
        ],
      },
    ],
  });

  const handleToggle = (node) => {
    // Implement toggle logic
  };

  const handleAdd = (node) => {
    // Implement add logic
  };

  const handleDelete = (node) => {
    // Implement delete logic
  };

  const handleEdit = (node, newName) => {
    // Implement edit logic
  };

  return (
    <div>
      <h1>Folder Structure</h1>
      <TreeNode
        node={data}
        onToggle={handleToggle}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onEdit={handleEdit}
        depth={0}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FolderStructure />
      </header>
    </div>
  );
}

export default App;

     