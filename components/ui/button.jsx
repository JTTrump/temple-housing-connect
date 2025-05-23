export function Button({ children, onClick, className = "", variant = "default", ...props }) {
    const styles =
      variant === "default"
        ? "bg-red-700 text-white hover:bg-red-800"
        : "border border-red-700 text-red-700 hover:bg-red-100";
    return (
      <button
        onClick={onClick}
        className={`rounded px-4 py-2 ${styles} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  