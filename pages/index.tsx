import { useEffect, useState } from 'react'
import Layout from '@components/Layout'
//import KawaiHeader from '../components/KawaiHeader'
import ProductList from '@components/ProductList'

const HomePage = () => {
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
    <Layout>
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
