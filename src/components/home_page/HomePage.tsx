import { ItemDTO } from '../../models/item'
import GridSection from '../grid-section/GridSection'

export default function HomePage({data}: {data:ItemDTO[]}) {
  return (
    <GridSection title={"Top Books by Ratings"} data={data} />
  )
}
