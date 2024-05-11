import { getRandomColor } from '@/utils/functions'

export default function Category({ term }: { term: string }) {
  const randomColor = getRandomColor()
  return (
    <li
      className={`text-nowrap rounded-lg border-2 p-2 text-center text-sm font-semibold`}
      style={{
        backgroundColor: `${randomColor.bg}0d`,
        borderColor: `${randomColor.border}`,
        color: `${randomColor.border}`,
      }}
    >
      {term}
    </li>
  )
}
