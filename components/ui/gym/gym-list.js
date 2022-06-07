import GymCard from "./gym-card";

export default function GymList(props) {
  const { items } = props;

  if (!items) {
    return <p>Loading gym data</p>;
  }

  return (
    <ul style={{ padding: 0 }}>
      {items.map((gym) => (
        <GymCard key={gym.id} items={gym} />
      ))}
    </ul>
  );
}
