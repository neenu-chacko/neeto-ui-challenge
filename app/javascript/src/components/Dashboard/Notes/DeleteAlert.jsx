import React from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({
  onClose,
  selectedNoteId,
  setNotes,
  setShowDeleteAlert,
}) => {
  const deleteNote = noteId => {
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    setShowDeleteAlert(false);
  };

  return (
    <Alert
      isOpen
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={() => {
        deleteNote(selectedNoteId);
      }}
    />
  );
};

export default DeleteAlert;
