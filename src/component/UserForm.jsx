import { useState, useEffect } from "react";
import { TextField, Button, Typography } from "@mui/material";
import "./UserForm.css"
function UserForm() {
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [isFormChanged, setIsFormChanged] = useState(false);

  // Generate unique user ID when component mounts
  useEffect(() => {
    setFormData((prev) => ({ ...prev, userId: `USER-${Date.now()}` }));
  }, []);

  // Warn user on unsaved changes before closing the tab
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isFormChanged) {
        event.preventDefault();
        event.returnValue = "You have unsaved changes!";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isFormChanged]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormChanged(true);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData)); // Save to localStorage
    setIsFormChanged(false);
    alert("User Data Saved!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <Typography variant="h5">User Data Form</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="User ID"
          name="userId"
          value={formData.userId}
          fullWidth
          margin="normal"
          disabled
        />
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UserForm;
