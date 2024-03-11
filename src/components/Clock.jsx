import { useEffect, useState } from 'react'

function Clock (props) {
  // init état local de l'horloge
  const [date, setDate] = useState(new Date())

  /**
   * Fonction pour mettre à jour la date
   */
  const tick = () => {
    setDate(new Date())
  }

  /**
   * Méthode fournie par react s'exécutant à l'apparition du composant
   * La fonction retourner est automatiquement appelé à la disparition du composant
   */
  useEffect(() => {
    const interval = setInterval(() => {
      tick()
    }, props.interval)

    return () => {
      clearInterval(interval)
    }
  }, [props.interval])

  // on retourne l'affichage du composant
  return (
    <h1>{date.toLocaleTimeString()}:{date.getMilliseconds()}</h1>
  )
}

export default Clock
