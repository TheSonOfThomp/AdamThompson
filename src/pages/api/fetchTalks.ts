import fs from "fs"
import path from "path"

export default function handler(req, res) {
  const directoryPath = path.join(process.cwd(), "public/docs/talks")

  console.log(directoryPath)

  fs.readdir(directoryPath, (err, years) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read directory" })
    }

    console.log(years)

    const files = years
      .map((year) => {
        const yearDirectoryPath = path.join(directoryPath, year)
        const talks = fs.readdirSync(yearDirectoryPath)
        return talks.map((talk) => `${year}/${talk}`)
      })
      .flat()

    res.status(200).json({ files })
  })
}
