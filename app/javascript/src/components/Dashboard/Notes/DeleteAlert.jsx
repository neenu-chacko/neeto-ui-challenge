import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({
  onClose,
  selectedNoteId,
  setNotes,
  setShowDeleteAlert,
}) => {
  const handleDelete = noteId => {
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId));
    setShowDeleteAlert(false);
    Toastr.success("Note Deleted");
  };

  return (
    <Alert
      isOpen
      message="Are you sure you want to continue? This cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={() => {
        handleDelete(selectedNoteId);
      }}
    />
  );
};

export default DeleteAlert;
