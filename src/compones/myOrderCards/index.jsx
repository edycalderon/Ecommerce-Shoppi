
import { ArrowRightIcon } from '@heroicons/react/24/solid'
const OrdersCard = ({ totalPrice, totalProducts }) => {


    return (
        
        <div class="flex flex-col bg-black rounded-2xl">
            <div class="px-6 py-8 sm:p-10 sm:pb-6">
                <div class="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div>
                        <h2 class="text-lg font-medium tracking-tighter text-white lg:text-1xl">
                        Total Productos:  #{totalProducts}
                        
                        </h2>
                        <p class="mt-2 text-sm text-gray-100">Fecha: 01/02/3.</p>
                    </div>
                    <div class="mt-6">
                        <p>
                            <span class="lg:text-2xl font-light tracking-tight text-white">
                            Precio: ${totalPrice}
                            </span>
                            <span class="text-base font-medium text-white"> /GT </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex px-6 pb-8 sm:px-8">
                <p aria-describedby="tier-starter" class="  items-center justify-center  text-black px-6 py-2.5 text-center  duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white" href="#">
                <ArrowRightIcon className='w-6 h-6'/>
                </p>
            </div>
        </div>











        // <div className="flex flex-col bg-white rounded-3xl border-solid ">
        //     <div className="px-5 sm:p-10 ">
        //         <div className="grid items-center justify-center w-full grid-cols-1 text-left">
        //             <div>
        //                 <h2
        //                     className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
        //                 >
        //                     Total Productos:  #{totalProducts}
        //                 </h2>
        //                 <p className="mt-2 text-sm text-gray-500">Fecha: 01.02.3.</p>
        //             </div>
        //             <div className="mt-6">
        //                 <p>
        //                     <span className="text-5xl font-light tracking-tight text-black">
        //                     Precio Total: ${totalPrice}
        //                     </span>
        //                     <span className="text-base font-medium text-gray-500"> GT </span>
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="flex px-6 pb-8 sm:px-8">
        //         <p
        //             aria-describedby="tier-company"
        //             className="flex items-center justify-center  h-10 w-10 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
        //             href="#"
        //         >
        //             <ArrowRightIcon/>
        //         </p>
        //     </div>
        // </div>

    )
}

export default OrdersCard

