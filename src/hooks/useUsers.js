import { useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// Custom hook: API fetch. useEffect abhi nahi parha, is liye
// fetch button click (event) par hota hai, page load par nahi.
function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("Could not load classmates. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return { users, loading, error, loadUsers };
}

export default useUsers;
