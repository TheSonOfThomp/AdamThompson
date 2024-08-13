import React, { useEffect, useState } from "react"
import DefaultPage from "../../../templates/default-page/default-template"
import { startCase } from "lodash"

const TalksPage = () => {
  const [files, setFiles] = useState<Array<string>>([])

  useEffect(() => {
    async function fetchFiles() {
      const response = await fetch("/api/fetchTalks")
      const data = await response.json()
      if (data.files) {
        setFiles(data.files)
      }
    }

    fetchFiles()
  }, [])

  return (
    <DefaultPage title="Talks | Adam Thompson">
      <h1>Talks</h1>
      <p>
        I've been fortunate to speak at a few conferences and meetups. Here are
        the talks I've given.
      </p>
      <ul>
        {files.map((file) => (
          <li key={file}>
            <a href={`talks/${file}`}>
              {startCase(file.replace("2024", "").replace(".pdf", ""))}
            </a>
          </li>
        ))}
      </ul>
    </DefaultPage>
  )
}

export default TalksPage
