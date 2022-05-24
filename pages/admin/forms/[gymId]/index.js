import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import AdminWallForm from "../../../../components/admin/forms/wall-form";
import AdminWallList from "../../../../components/admin/ui/wall-list";

export default function WallForm() {
  const [gym, setGym] = useState();
  const router = useRouter();
  const { gymId } = router.query;

  useEffect(() => {
    fetch(`/api/gymData`)
      .then((res) => res.json())
      .then((data) => {
        if (data.gymData.find((gym) => gym._id === gymId)) {
          const gym = data.gymData.find((gym) => gym._id === gymId);
          setGym(gym);
        }
      });
  }, []);

  if (!gym) return <p>loading...</p>;

  return (
    <>
      <AdminWallForm items={gym} />
      {gym.walls.length > 0 && <AdminWallList items={gym} />}
    </>
  );
}
