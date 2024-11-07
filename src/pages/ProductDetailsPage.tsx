import AvailableRooms from "../components/AvailableRooms"
import CovidRestrictions from "../components/CovidRestrictions"
import ProductDetails from "../components/ProductDetails"

const ProductDetailsPage = () => {
  return (
    <div>
      <ProductDetails/>
      <AvailableRooms/>
      <CovidRestrictions/>
    </div>
  )
}

export default ProductDetailsPage
