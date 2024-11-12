import AccountNav from "../../compenants/AccountNav/AccountNav"
import AvailableRooms from "../../compenants/AvailableRooms/AvailableRooms"
import CovidRestrictions from "../../compenants/CovidRestrictions/CovidRestrictions"
import ProductDetails from "../../compenants/ProductDetails/ProductDetails"


const ProductDetailsPage = () => {
  return (
    <div>
      <AccountNav/>
      <ProductDetails/>
      <AvailableRooms/>
      <CovidRestrictions/>
    </div>
  )
}

export default ProductDetailsPage
