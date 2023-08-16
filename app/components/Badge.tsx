const Badge = (props) => {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-700 bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-100"
    />
  );
}
export default Badge