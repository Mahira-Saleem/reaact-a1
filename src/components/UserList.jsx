import useUsers from "../hooks/useUsers";

function UserList() {
  const { users, loading, error, loadUsers } = useUsers(); // custom hook

  return (
    <>
      {/* React Fragment: extra div ki zaroorat nahi */}
      <button className="btn btn-primary" onClick={loadUsers} disabled={loading}>
        {loading ? "Loading…" : users.length > 0 ? "Reload" : "Load classmates"}
      </button>

      {error && <p className="status error">{error}</p>}

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <span className="avatar">{user.name.charAt(0)}</span>
            <div>
              <strong>{user.name}</strong>
              <small>{user.email}</small>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
