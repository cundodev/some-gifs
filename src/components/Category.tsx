import { getRandomColor } from '@/utils/functions'
import { Link } from 'react-router-dom'

export default function Category({ term }: { term: string }) {
  const randomColor = getRandomColor()
  return (
    <Link
      to={`/?search=${term}`}
      className='text-nowrap rounded-lg border-2 p-2 text-center text-sm font-semibold hover:scale-110'
      style={{
        backgroundColor: `${randomColor.bg}0d`,
        borderColor: `${randomColor.border}`,
        color: `${randomColor.border}`,
      }}
    >
      {term}
    </Link>
  )
}
