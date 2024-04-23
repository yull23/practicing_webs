import { getLaunchesData } from './services/get-data-api'
import fs from 'fs'
import { Doc, LaunchData } from './types/types'

export const initReadFile = async () => {
  const data = (await getLaunchesData()) as Doc[]
  const linksSearchWikipedia: LaunchData[] = data.map((launch) => ({
    flight_number: launch.flight_number,
    name: launch.name,
    launchpad: launch.launchpad,
    imgSmall: launch.links.patch.small,
    imgLarge: launch.links.patch.large,
    dateUtc: launch.date_utc,
    details: launch.details,
    upcoming: launch.upcoming,
    success: launch.success,
    failures: launch.failures,
    linkWikipedia: launch.links.wikipedia,
  }))
  linksSearchWikipedia[0].linkWikipedia =
    'https://en.wikipedia.org/wiki/FalconSAT'
  const jsonData = JSON.stringify(linksSearchWikipedia, null, 2)
  await fs.promises.writeFile('launches.json', jsonData)
}
