import storeItems from '../data/items.json'
import { StoreItem } from '../component/StoreItems';


function Store() {
    return (
        <div className='bg-[#fbfafa]'>
            <h1 className='text-4xl font-medium text-center py-10 underline'>Store</h1>
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