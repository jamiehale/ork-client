import React, { useState } from 'react';
import * as R from 'ramda';
import useStories from '../hooks/stories';

const NewStoryDialog = ({
  onOk,
  onCancel,
}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (R.isEmpty(name)) {
      setError('Name is required');
      return;
    }
    onOk({ name });
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      {error && (
        <p>{error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={handleChangeName} />
        <button>Ok</button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

const NewStory = () => {
  const [showDialog, setShowDialog] = useState(false);
  const { createNewStory } = useStories();

  const handleShowDialog = () => {
    setShowDialog(!showDialog);
  };

  const handleNewStory = ({ name }) => {
    setShowDialog(false);
    createNewStory(name);
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <>
      <button onClick={handleShowDialog}>Add</button>
      {showDialog && (
        <NewStoryDialog onOk={handleNewStory} onCancel={handleCancel} />
      )}
    </>
  );
};

export default NewStory;
