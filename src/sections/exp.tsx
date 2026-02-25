import { aboutCards } from "../data/data";

export default function AboutSection() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {aboutCards.map((card) => (
        <div
          key={card.id}
          className="rounded-2xl border p-6 shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{card.description}</p>
        </div>
      ))}
    </section>
  );
}