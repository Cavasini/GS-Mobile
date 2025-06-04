export type Event = {
	id: string
	location: string
	outageDuration: string
	damages: string
	timestamp: number
	locationDetails?: Record<string, any> // <- isso permite armazenar os dados da API
}
