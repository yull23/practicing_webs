import { Doc } from '../types/types'

export const getLaunchesData = async (): Promise<Doc[]> => {
  const link = 'https://api.spacexdata.com/v5/launches/'
  const response = await fetch(link)
  return await response.json()
}
