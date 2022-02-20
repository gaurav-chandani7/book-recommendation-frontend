import { ItemDTO } from '../../models/item';
import ItemTemplateClass from './ItemTemplateClass';

export default function GridSection({ title, data}: { title: String, data: ItemDTO[]}) {
    return (
        <div className='bg-gray-300 py-5 mx-5 rounded-md h-min my-5'>
            <div className='text-lg font-bold ml-5 my-3'>
                {title}
            </div>
            <div className='mx-5'>
                <div className='w-full grid gap-4 grid-cols-4 grid-rows-2'>
                    {data.map((ele, idx) =>
                        <ItemTemplateClass key={idx} data={ele}/>
                    )}
                </div>
            </div>
        </div>
    )
}
