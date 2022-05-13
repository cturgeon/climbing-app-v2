import ClimbCard from "./ui/climb-card";

// props from ClimbList <- [wallId]
// TODO maybe use redux/context or composition change
export default function ClimbItem(props) {
  const { id, grade, name, description, image, color } = props;
  return (
    <ClimbCard
      id={id}
      grade={grade}
      name={name}
      description={description}
      image={image}
      color={color}
    />
  );
}
