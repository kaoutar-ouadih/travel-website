import CovidRestrictions from "../../compenants/CovidRestrictions/CovidRestrictions"
import AvailableRooms from "../../components/AvailableRooms"
import ProductDetails from "../../components/ProductDetails"


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
