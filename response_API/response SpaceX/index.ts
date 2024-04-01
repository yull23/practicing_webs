import { Doc } from "./src/types";

const getAllLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/");
  const launches = (await res.json()) as Doc[];
  const ids = launches.map((launch) => ({
    params: {
      id: `${launch.flight_number}`,
    },
  }));
  console.log(launches);
  return { launches, ids };
};

getAllLaunches();
