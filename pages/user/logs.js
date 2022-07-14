import { useSession, getSession } from "next-auth/react";
import BarChartContainer from "../../components/log-visuals/bar-chart";

import { prisma } from "../../prisma/db";

export default function UserLogsPage(props) {
  const { data: session, loading } = useSession();
  const userLogData = JSON.parse(props.data);

  if (!session || loading) {
    return null;
  }

  return (
    <>
      <BarChartContainer items={userLogData} />
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  try {
    const logs = await prisma.log.findMany({
      where: {
        userId: session.user.userId,
      },
    });
    return { props: { data: JSON.stringify(logs) } };
  } catch (error) {
    return res.status(500).json({ message: "User not found" });
  }
}
