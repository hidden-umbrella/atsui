import Search from '../src/index'

async function index () {
	const search = new Search()

	return search.Get('Team Fortress 2', 'AU')
}

describe('Testing index function', () => {
	test('CERTAINLY should pass', async () => {
		expect(typeof await index()).toBe('object')
	})
})
