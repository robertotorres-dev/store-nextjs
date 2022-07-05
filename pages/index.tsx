import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      {' '}
      <Navbar />
      <h1>Hello Richi</h1>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default Home
