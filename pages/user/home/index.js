import { getSession } from "next-auth/react";

import HomeGymSettings from "../../../components/settings/home-gym";

export default function UserHomePage(props) {
  return (
    <div>
      <h2>Hi {props.user.name.split(" ")[0]} </h2>
      <h3>This can also be updated in the settings tab</h3>
      <HomeGymSettings />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const gymId = session?.user.gymId;
  console.log(gymId);

  if (gymId) {
    return {
      redirect: {
        permanent: false,
        destination: `/${gymId}`,
      },
    };
  }

  return { props: session };
}
