import storeItems from '../../data/items.json';
import { StoreItem } from './StoreItems';

function StoreGrid() {
    return (
        <div>
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

export default StoreGrid