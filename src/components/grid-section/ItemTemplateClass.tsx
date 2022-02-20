import { Component } from 'react'
import { Link } from 'react-router-dom';
import { ItemDTO } from '../../models/item';

export default class ItemTemplateClass extends Component<{ data: ItemDTO }>{
    render() {
        return (
            <Link to={{ pathname: "/details", }} state={
                {
                    item: this.props.data,
                }
            } >
                <div className='flex flex-col items-center rounded-md border border-gray-500 mx-3 shadow-md p-3 hover:bg-gray-500 transition ease-linear duration-200'>
                    <div className='pb-3'>
                        <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
                    </div>
                    <div className='h-12 align-middle line-clamp-2 text-ellipsis overflow-hidden w-full'>
                        {this.props.data.title}
                    </div>
                </div>
            </Link>
        )
    }
}
