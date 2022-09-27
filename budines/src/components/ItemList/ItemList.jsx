import Item from '../Item/Item';

function ItemList({ data }) {
    return (
        <div className='productos-container container'>
            {
                data.map((items) => (
                    <Item key={items.id} id={items.id} data={items} />
                ))
            }
        </div>
    )
}

export default ItemList;
