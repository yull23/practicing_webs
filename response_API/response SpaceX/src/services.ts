import { Doc } from "./types";

export const getAllLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/");
  const launches = (await res.json()) as Doc[];
  return { launches };
};

export const getAllLinksWikipedia = async () => {
  const res = await fetch("https://api.spacexdata.com/v5/launches/");
  const launches = (await res.json()) as Doc[];
  const links = launches.map((launch) => ({
    name: launch.name,
    linkWikipedia: launch.links.wikipedia,
  }));
  // console.log(links);
  return links;
};
