import React from "react"
import Link from "next/link"
import Card from "../card"
import styles from "./RecipeCard.module.scss"

interface RecipeCardProps {
  title: string
  href: string
  category?: string
  imageUrl?: string
}

export const RecipeCard = ({ title, href, imageUrl }: RecipeCardProps) => {
  return (
    <Card as={Link} href={href} clickable className={styles.recipeCard}>
      {imageUrl && (
        <picture className={styles.recipe_image}>
          <img className={styles.recipe_image} src={imageUrl} alt={title} />
        </picture>
      )}
      <h3>{title}</h3>
    </Card>
  )
}
