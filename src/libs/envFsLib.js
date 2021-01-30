import axios from "axios"
import path from "path"

export const isBrowser = typeof window !== "undefined"

function getImageKey(url) {
  const split = url.split(/\\|\//g)
  const key = split[split.length - 1]
  const keyItems = key.split("?")
  const imageKey = keyItems[0]
  return imageKey.trim()
}

function getPathName(url) {
  let key = getImageKey(url)
  const cleanKey = key.replace(/%/g, "")
  const rawPath = path.join(__dirname, "..", "..", "public", cleanKey)
  return rawPath
}

export default async function downloadImage(url, fs) {
  const path = getPathName(url)
  const writer = fs.createWriteStream(path)
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  })
  response.data.pipe(writer)
  return new Promise((resolve, reject) => {
    writer.on("finish", resolve({success: true}))
    writer.on("error", reject({success: false}))
  })
}
