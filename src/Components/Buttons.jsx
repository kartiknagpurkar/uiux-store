 function Button({ children, onClick, type="button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        background: "var(--color-primary)",
        color: "white",
        border: "none",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)"
      }}
    >
      {children}
    </button>
  );
}
export default Button;