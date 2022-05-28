import { useSession } from "next-auth/react";

export default function UserSettingsPage() {
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div>
      <h1>To be added!</h1>
    </div>
  );
}
