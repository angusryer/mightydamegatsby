import axios from "axios"
import path from "path"

const fs = require("fs")

function getImageKey(url) {
  const split = url.split("/")
  const key = split[split.length - 1]
  const keyItems = key.split("?")
  const imageKey = keyItems[0]
  return imageKey
}

function getPathName(url) {
  let reqPath = path.join(__dirname, "..")
  let key = getImageKey(url)
  key = key.replace(/%/g, "")
  const rawPath = path.join(reqPath, "public", key)

  return rawPath
}

async function downloadImage(url) {
  return new Promise(async (resolve, reject) => {
    const path = getPathName(url)
    const writer = fs.createWriteStream(path)
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    })
    response.data.pipe(writer)
    writer.on("finish", resolve)
    writer.on("error", reject)
  })
}

export default downloadImage
