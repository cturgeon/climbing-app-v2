import { Fragment, useEffect, useState } from "react";
import { prisma } from "../../../../../prisma/db";

import dynamic from "next/dynamic";

const AdminRouteForm = dynamic(() =>
  import("../../../../../components/admin/forms/route-form")
);
const AdminRouteList = dynamic(() =>
  import("../../../../../components/admin/ui/route-list")
);

export default function WallFormEditPage(props) {
  const [routes, setRoutes] = useState([]);
  const { wall } = props;
  if (!wall) {
    return <p>Loading...</p>;
  }

  useEffect(() => {
    fetch(`/api/gyms/${wall.gymId}/${wall.id}`)
      .then((res) => res.json())
      .then((data) => setRoutes(data.routes));
  }, []);

  return (
    <>
      {wall && (
        <Fragment>
          <AdminRouteList items={routes} />
          <AdminRouteForm items={wall} />
        </Fragment>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const wallId = context.params.wallId;
  const result = await prisma.wall.findUnique({
    where: { id: wallId },
  });
  return { props: { wall: result } };
}
