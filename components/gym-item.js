import GymCard from "./ui/gym-card";

// props from ClimbList <- [wallId]
// TODO maybe use redux/context or composition change
export default function GymItem(props) {
  const { id, name, description, image, address } = props;
  return (
    <div>
      <GymCard
        id={id}
        name={name}
        description={description}
        image={image}
        address={address}
      />
    </div>
  );
}
