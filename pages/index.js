import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      
      <Link href="/category/products">
        <a> Produtos</a>
      </Link>
    </div>
  )
}

export default Index