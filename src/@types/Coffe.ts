type LabelType = 'TRADICIONAL' | 'ICED' | 'SPECIAL' | 'ALCOHOLIC' | 'WITH MILK'

export interface Coffee {
  id: string
  name: string
  description: string
  labels: LabelType[]
  thumbnail_url: string
  price: number
}
