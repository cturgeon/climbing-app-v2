import { Fragment } from "react";
import { prisma } from "../../../../../prisma/db";

import dynamic from "next/dynamic";

const AdminRouteForm = dynamic(() =>
  import("../../../../../components/admin/forms/route-form")
);
const AdminRouteList = dynamic(() =>
  import("../../../../../components/admin/ui/route-list")
);

export default function WallFormEditPage(props) {
  const wall = props;
  return (
    <>
      {wall && (
        <Fragment>
          <AdminRouteList items={wall} />
          <AdminRouteForm items={wall} />
        </Fragment>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const wallId = context.params.wallId;
  try {
    const result = await prisma.wall.findUnique({
      where: { id: wallId },
    });
    return { props: { wall: result } };
  } catch (error) {
    return { props: { hasError: error } };
  }
}
