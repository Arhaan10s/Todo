import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000/api/tasks";

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, { title, description });
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Task</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="form-control"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success" type="submit">Create</button>
      </form>
    </div>
  );
}
