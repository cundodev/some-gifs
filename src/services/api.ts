import { Gif, TrendingTerms } from '@/types'
import { API_KEY, BASE_URL } from './settings'

export async function getTrendingTerms(): Promise<TrendingTerms> {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/searches?api_key=${API_KEY}`,
    )
    if (!response.ok) {
      throw new Error(
        `Error getting data (${response.status}: ${response.statusText})`,
      )
    }
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error('Request Error:', error)
    throw error
  }
}

export async function getGifs({ keyword }: { keyword: string }): Promise<Gif> {
  try {
    const response = await fetch(
      `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=5`,
    )
    if (!response.ok) {
      throw new Error(
        `Error getting data (${response.status}: ${response.statusText})`,
      )
    }
    const { data } = await response.json()
    const gifs = data.map((gif: Gif) => {
      const { images, title, id } = gif
      const { url, webp, height, width } = images.fixed_height
      return { title, id, url, webp, height, width }
    })
    return gifs
  } catch (error) {
    console.error('Request Error:', error)
    throw error
  }
}
