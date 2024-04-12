export default function USP({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="glass p-6">
      <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
      <p className="text-[#979797]">{description}</p>
    </div>
  );
}
