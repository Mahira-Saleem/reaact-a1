// Component Composition: Column ke andar jo bhi likho, wo {children} mein aata hai.
function Column({ title, count, children }) {
  return (
    <section className="column">
      <h3 className="column-head">
        {title} <span className="count">{count}</span>
      </h3>
      {count === 0 ? <p className="empty">Nothing here yet.</p> : <ul className="card-list">{children}</ul>}
    </section>
  );
}

export default Column;
