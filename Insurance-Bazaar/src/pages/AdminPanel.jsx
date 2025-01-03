import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [adminData, setAdminData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/admins/admin_panel", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setAdminData(response.data.message);
      } catch (error) {
        console.error("You are not authorized to access this page.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>{adminData}</p>
    </div>
  );
};

export default AdminPanel;
