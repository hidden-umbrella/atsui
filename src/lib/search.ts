import consts from './Constants'
import { Item } from './Types'
import * as c from '@aero/centra'

export default class Search {
	/**
	 * Get one result
	 * @param {string} query Game name to search for.
	 * @param {string} country Country to show the price in the country's currency
	 * @param {string} lang Language to translate to
	 * @async
	 * @returns {Promise<Record<string, unknown>>}
	 */
	public async Get (query: string, country?: string, lang?: string): Promise<Item> {
		if (query.trim().length === 0) throw new Error('No query / term provided')

		const { items }: { items: Item } = await c(consts.baseURL)
			.query({
				l: lang ?? 'en',
				cc: country ?? 'us',
				term: query
			})
			.json()

		return items[0]
	}

	/**
	 * Get all results
	 * @param {string} query Game name to search for.
	 * @param {string} country Country to show the price in the country's currency
	 * @param {string} lang Language to translate to
	 * @async
	 * @returns {Promise<Record<string, unknown>>}
	 */
	public async _Get (query: string, country?: string, lang?: string): Promise<Record<string, unknown>> {
		if (query.trim().length === 0) throw new Error('No query / term provided')

		const { items, results }: { items: Item[], results: number} = await c(consts.baseURL)
			.query({
				l: lang ?? 'en',
				cc: country ?? 'us',
				term: query
			})
			.json()

		return { results, items }
	}
}
