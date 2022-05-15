import GymItem from "./gym-item";

export default function GymList(props) {
  const { items } = props;

  if (!items) {
    return <p>Loading gym data</p>;
  }

  return (
    <ul style={{ padding: 0 }}>
      {items.map((gym) => (
        <GymItem
          key={gym._id}
          id={gym._id}
          name={gym.name}
          description={gym.description}
          image={gym.image}
          address={gym.address}
        />
      ))}
    </ul>
  );
}
