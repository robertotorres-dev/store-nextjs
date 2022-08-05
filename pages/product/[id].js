import React from 'react'
import { useRouter } from 'next/router'

const ProductItem = () => {
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    window.fetch('/api/avo', {
      method: 'GET',
      body: JSON.stringify(id),
    }).then

    return () => {
      second
    }
  }, [third])

  return <div>ProductItem: {id}</div>
}

export default ProductItem
