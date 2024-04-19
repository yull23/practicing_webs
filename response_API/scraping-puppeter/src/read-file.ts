import path from 'path'
import fs from 'fs'
import { ReadFileData } from './types'
export async function readJson(): Promise<ReadFileData> {
  // export async function readJson() {
  const fileName = 'links.json'
  const routePath = path.resolve(__dirname, '..', fileName)
  const data = await fs.promises.readFile(routePath, 'utf-8')
  return JSON.parse(data)
}
