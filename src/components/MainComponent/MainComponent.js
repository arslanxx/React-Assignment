import React, { useEffect } from 'react'
import items from '../../services/items.json'

export default function MainComponent() {
    useEffect(() => {
console.log(items)
    },[])
  return (
    <div>MainComponent</div>
  )
}
