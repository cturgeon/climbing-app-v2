import { useRouter } from "next/router";

import WallCard from "./wall-card";

// would it be better to query to get the wallId or to have gym:{wall:{gymId}} -- the gymId nested inside the wall
// should a wall always be tied to a gym?
export default function WallItem(props) {
  const { id, image, name } = props;
  const router = useRouter();
  const gym = router.query.gymId;
  return (
    <div>
      <div>
        <WallCard id={id} name={name} image={image} gymId={gym} />
      </div>
    </div>
  );
}
