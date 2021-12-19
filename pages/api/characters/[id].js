import { characters } from '../../../data'

export default function characterHandler({ query: { id } }, res) {
  const filtered = characters.filter((p) => p.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({message: `Could not find character with id: ${id}.`})
  }
}
