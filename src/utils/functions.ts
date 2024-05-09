import { badgeColors } from './constants'

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * badgeColors.length)
  return badgeColors[randomIndex]
}
