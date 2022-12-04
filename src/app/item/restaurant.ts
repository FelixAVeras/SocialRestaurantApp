export interface Restaurant {
  id: number
  name: string
  address: string
  image: string
  details: {
    title: string
    description: string
  }[]
}
