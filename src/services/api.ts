import { Gif, GifData, TrendingTerms } from '@/types'
import { API_KEY, BASE_URL } from './settings'

export async function getTrendingTerms(): Promise<TrendingTerms> {
  try {
    const response = await fetch(`${BASE_URL}/trending/searches?api_key=${API_KEY}`)
    if (!response.ok) {
      throw new Error(`Error getting data (${response.status}: ${response.statusText})`)
    }
    const { data } = await response.json()
    return data
  } catch (error) {
    console.error('Request Error:', error)
    throw error
  }
}

export async function getGifs({
  keyword = 'Anime',
  rating = 'g',
  limit = 10,
  page = 0,
}: {
  keyword: string
  rating?: string
  limit?: number
  page?: number
}): Promise<Gif[]> {
  try {
    const response = await fetch(
      `${BASE_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&rating=${rating}&limit=${limit}&offset=${page * limit}`,
    )
    if (!response.ok) {
      throw new Error(`Error getting data (${response.status}: ${response.statusText})`)
    }
    const { data } = await response.json()
    const gifs = data.map((gif: GifData) => {
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

export async function getFavorites({ favs }: { favs: Gif['id'][] }): Promise<Gif[]> {
  try {
    const ids = favs.join(',')

    const response = await fetch(`${BASE_URL}/gifs?api_key=${API_KEY}&ids=${ids}`)
    if (!response.ok) {
      throw new Error(`Error getting data (${response.status}: ${response.statusText})`)
    }
    const { data } = await response.json()
    const gifs = data.map((gif: GifData) => {
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
