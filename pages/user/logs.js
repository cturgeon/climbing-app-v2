import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function UserLogsPage() {
  const { data: session, loading } = useSession();
  const [userLogData, setUserLogData] = useState();

  if (loading) {
    return <p>loading...</p>;
  }
  useEffect(() => {
    fetch("/api/logs")
      .then((res) => res.json())
      .then((data) => setUserLogData(data));
  }, []);

  return (
    <div>
      <h1>See your stats below!</h1>
      {userLogData && (
        <ul>
          {userLogData.logs.map((log) => (
            <li key={log.id}>
              <p>
                {log.grade} : {log.attempts} attempts
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
