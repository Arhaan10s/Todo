import { useState } from "react";

export default function TaskCard({ task, onDelete, onStatusChange, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const isToDo = task.status === "To Do";
  const isInProgress = task.status === "In Progress";
  const isDone = task.status === "Done";

  const handleSave = () => {
    onUpdate(task.id, {
      title: editedTitle,
      description: editedDescription,
      status: task.status,
    });
    setIsEditing(false);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              className="form-control mb-2"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <div className="mt-2 flex gap-2">
              <button
                onClick={handleSave}
                className="btn btn-outline-success btn-sm"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="btn btn-outline-secondary btn-sm"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <p className="badge bg-secondary">{task.status}</p>

            <div className="mt-3 flex gap-2 flex-wrap">
              <button
                onClick={() => onStatusChange(task.id, "start")}
                className="btn btn-outline-primary btn-sm"
                disabled={!isToDo}
              >
                Start
              </button>
              <button
                onClick={() => onStatusChange(task.id, "stop")}
                className="btn btn-outline-warning btn-sm"
                disabled={!isInProgress}
              >
                Stop
              </button>
              <button
                onClick={() => onStatusChange(task.id, "complete")}
                className="btn btn-outline-success btn-sm"
                disabled={!isInProgress}
              >
                Complete
              </button>
              <button
                onClick={onDelete}
                className="btn btn-outline-danger btn-sm"
              >
                Delete
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-outline-info btn-sm rounded-pill"
                disabled={isDone} 
              >
                Edit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
