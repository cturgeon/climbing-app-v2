import { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const AdminRouteForm = dynamic(() =>
  import("../../../../../components/admin/forms/route-form")
);
const AdminRouteList = dynamic(() =>
  import("../../../../../components/admin/ui/route-list")
);

export default function WallFormEditPage() {
  const [gymData, setGymData] = useState();
  const [gymWall, setGymWall] = useState();
  const router = useRouter();
  const { gymId } = router.query;
  const wallId = router.query.wallId;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch(`/api/gymData`)
        .then((res) => res.json())
        .then((data) => {
          if (data.gymData.find((gym) => gym._id === gymId)) {
            const gym = data.gymData.find((gym) => gym._id === gymId);
            const gymWall = gym.walls[wallId];
            setGymData(gym);
            setGymWall(gymWall);
            setIsLoading(false);
          }
        });
    };
    fetchData();
  }, [gymId, wallId]);

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      {gymData && (
        <Fragment>
          <AdminRouteList items={gymWall} />
          <AdminRouteForm items={{ gymData, gymWall }} />
        </Fragment>
      )}
    </>
  );
}
