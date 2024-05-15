import Hero from '@/components/Hero'
import SearchForm from '@/components/SearchForm'
import TrendingSearchTerms from '@/components/TrendingSearchTerms'

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-8 px-6 py-10'>
      <Hero />
      <SearchForm />
      <TrendingSearchTerms />
    </main>
  )
}
