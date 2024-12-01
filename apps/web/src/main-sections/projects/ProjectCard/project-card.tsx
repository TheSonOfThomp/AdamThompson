import React from "react"
// import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faNpm } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import styles from "./project-card.module.scss"

import { useCustomProp } from "../../../hooks/useCustomProperty"

const ProjectCard = ({ project }) => {
  const iconObj =
    project.icon === "github"
      ? faGithub
      : project.icon === "npm"
        ? faNpm
        : project.icon === "link"
          ? faExternalLinkAlt
          : null

  const logoPng = `/images/projects/${project.logo}`
  const logoWebp = logoPng.replace(".png", ".webp")

  const cardRef = useCustomProp<HTMLAnchorElement>(
    "--project-color",
    project.color
  )

  return (
    <a
      ref={cardRef}
      className={styles.project_card}
      href={project.url}
      title={project.name}
      target="_blank"
      rel="noreferrer"
    >
      <h2 className={styles.project_title}>{project.name}</h2>
      <span className={styles.project_description}>{project.description}</span>

      <picture className={styles.project_logo}>
        <source srcSet={logoWebp} type="image/webp" />
        <img
          src={logoPng}
          alt={`Logo for ${project.name}`}
          height={96}
          width={192}
        />
      </picture>

      <FontAwesomeIcon
        className={styles.project_icon}
        icon={iconObj}
        size="sm"
      />
      {project.tools && (
        <div className={styles.project_tools_wrapper}>
          <div className={styles.project_tools_label}>Built with</div>
          <div className={styles.project_tools_list}>
            {project.tools.map((tool) => (
              <span className={styles.project_tool} key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </a>
  )
}

export default ProjectCard
