import storeItems from '../data/items.json'
import { StoreItem } from '../component/cardItems';


function Store() {
    return (
        <div>
            <h1 className='text-4xl font-medium text-center my-8 underline'>Store</h1>
          <div className='flex flex-wrap gap-12 justify-center items-center'>
            {
                storeItems.map(item => (
                   <div key={item.id}>
                    <StoreItem {...item} /> 
                   </div>
                ))
            }
          </div>
            
        </div>
    )
}

export default Store;