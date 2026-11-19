function Badge({ variant = "success", children }) {
  const variants = {
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${variants[variant] || variants.success}`}>
      {children}
    </span>
  );
}

export default Badge;
