export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className='max-w-64 text-balance text-left text-red-700'>
      <span>*{message}</span>
    </div>
  )
}
