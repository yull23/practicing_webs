"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLinksWikipedia = exports.getAllLaunches = void 0;
const getAllLaunches = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/");
    const launches = (await res.json());
    return { launches };
};
exports.getAllLaunches = getAllLaunches;
const getAllLinksWikipedia = async () => {
    const res = await fetch("https://api.spacexdata.com/v5/launches/");
    const launches = (await res.json());
    const links = launches.map((launch) => ({
        name: launch.name,
        linkWikipedia: launch.links.wikipedia,
    }));
    // console.log(links);
    return links;
};
exports.getAllLinksWikipedia = getAllLinksWikipedia;
