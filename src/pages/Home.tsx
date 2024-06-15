import Hero from '@/components/Hero'
import SearchForm from '@/components/SearchForm'
import TrendingSearchTerms from '@/components/TrendingSearchTerms'

export default function Home() {
  return (
    <main className='flex max-w-5xl flex-col items-center gap-8 py-10'>
      <Hero />
      <SearchForm />
      <TrendingSearchTerms />
    </main>
  )
}
