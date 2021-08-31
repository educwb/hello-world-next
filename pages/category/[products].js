import { useRouter } from "next/router"

const Products = () => {
  const router = useRouter()

  console.log(router)

  return (
    <div>
      <h1>Produtos</h1>
      <p>{router.query.products}</p>
    </div>
  )
}

export default Products