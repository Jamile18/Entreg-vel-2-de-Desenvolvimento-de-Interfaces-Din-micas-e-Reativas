function Button({ variant = "primary", children, onClick }) {
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg font-medium transition-colors ${variants[variant] || variants.primary}`}>
      {children}
    </button>
  );
}

export default Button;
