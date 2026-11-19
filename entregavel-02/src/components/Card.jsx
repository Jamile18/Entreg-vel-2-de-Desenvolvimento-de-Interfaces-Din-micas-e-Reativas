function Card({ title, children }) {
  return (
    <section className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      {title && <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>}
      {children}
    </section>
  );
}

export default Card;
