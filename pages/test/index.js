import { ObjectId } from "mongodb";
import {
  connectToDatabase,
  getGymById,
  getGymIds,
} from "../../helpers/db-util";

export default function TestPage(props) {
  const { gymData } = props;
  console.log(gymData);
  return (
    <div>
      <h1>Testing Grounds</h1>
    </div>
  );
}

export async function getStaticProps() {
  let client;
  let id = new ObjectId("62815c8f16d48adedb8651c6");
  try {
    client = await connectToDatabase();
    const gymData = await getGymById(client, "gym-data", { _id: id });
    const gymIds = JSON.parse(JSON.stringify(gymData));
    return {
      props: {
        gymData: gymIds,
      },
    };
  } catch (error) {
    console.error(error);
    return;
  }
}
