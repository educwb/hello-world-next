import { useRouter } from "next/router"

const Products = () => {
  const router = useRouter()

  console.log(router)

  return (
    <div>
      <h1>Produtos</h1>
      <p>{router.query.category} / {router.query.products[0]} / {router.query.products[1]}</p>
    </div>
  )
}

export default Products