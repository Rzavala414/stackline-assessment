import './ProductOverview.css';


const ProductOverview = ({ data }) => {

  return (
    <div className="container product-container">
      <img className="product-img" src={data.image} alt="product"/>
      <h2>{data.title}</h2>
      <p>{data.subtitle}</p>
      {
        data.tags.map((tag, idx) => {
          return (
            <button key={tag + idx}>{tag}</button>
          )
        })
      }
    </div>
  )
}

export default ProductOverview