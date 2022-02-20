import { ItemDTO } from '../../models/item'

export default function SingleItemView({item}: {item:ItemDTO}) {
  return (
    <div className='flex flex-row mx-5'>
        <div className='m-10'>
            <img src={item.imageUrl} alt={item.title}/>
        </div>
        <div className='flex flex-col justify-around my-10'>
            <div>{item.title}</div>
            <div>Authors: {item.authors}</div>
            <div>Year Published: {item.publicationYear}</div>
        </div>
    </div>
  )
}
