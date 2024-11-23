
import product from '../../assets/Product.png'
import stars from '../../assets/Group.png'

const ProductInfo = () => {
    return (
        <div>
                    <div className="max-w-lg mx-auto mt-9 bg-white rounded-lg shadow-md overflow-hidden ">
        <img className="w-full h-48 object-cover" src={product} alt="Lakeside Motel Waterfront"/>
        
        <div className="p-6">
            <h2 className="text-xl font-semibold">Lakeside Motel Waterfront</h2>
            
            <div className="flex items-center mt-2">
            <div className="relative w-24 h-5 overflow-hidden">
                <img src={stars} alt="Étoiles" className="absolute top-0 left-0 w-45 h-full"/>
                <div className="absolute top-0 left-0 bg-white" ></div> 
            </div>
            <span className="text-gray-600 ml-2 text-lg">4.5 (1200 Reviews)</span>
            </div>
            
            <p className="text-red font-semibold mt-3">Non refundable</p>
            
            <div className="mt-4 font-serif mb-4 text-gray-700 text-lg">
            <p>Check in: Sunday, March 18, 2022</p>
            <p>Check out: Tuesday, March 20, 2022</p>
            <p>2 night stay</p>
            </div>
        </div>
        </div>

                
                </div>
    )
}

export default ProductInfo
