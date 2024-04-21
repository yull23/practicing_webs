import path from 'path'
import fs from 'fs'
import { ReadFileData } from '../types/types'

export async function readJson(): Promise<ReadFileData> {
  const fileName = 'launches.json'
  const routePath = path.resolve(__dirname, './../../', fileName)
  const data = await fs.promises.readFile(routePath, 'utf-8')
  return JSON.parse(data)
}
