interface Item {
	type: string
	name: string
	id: number
	price?: Record<string, unknown>
	tiny_image: string
	metascore: string
	platforms: Record<string, boolean>
	streamingvideo: boolean
}

export { Item }
