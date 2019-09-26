import React from 'react'

const mapProductsToItems = ({products}) => {
  console.log(products)
  return (
    <section>
      <div>
        {products.map(product => (
          <div>{product.name}</div>
        ))}
      </div>
    </section>
  )
}

export default mapProductsToItems
