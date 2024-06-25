import { BowlingGame } from '../../src/bowling-game/bowlingGame'

let game

describe('bowling game', () => {
    beforeEach(() => {
        game = new BowlingGame()
    })

    it('should score 0 when fails all the throws', () => {
        makeRolls(20, 0)

        expect(game.score()).toBe(0)
    })

    it('should score 20 when it knock down 1 per throw', () => {
        makeRolls(20, 1)

        expect(game.score()).toBe(20)
    })

    it('should score 20 when it throws a spare and get an extra ball', () => {
        game.roll(5)
        game.roll(5)
        game.roll(5)
        makeRolls(17, 0)

        expect(game.score()).toBe(20)
    })

    it('should score 20 when it throws a strike and get an extra ball', () => {
        game.roll(10)
        game.roll(2)
        game.roll(3)
        makeRolls(17, 0)

        expect(game.score()).toBe(20)
    })

    it('should score 300 when it is a perfect game', () => {
        makeRolls(12, 10)

        expect(game.score()).toBe(300)
    })

    it('should score 155 whe it throws all as spare', () => {
        makeRolls(20, 5)
        game.roll(10)

        expect(game.score()).toBe(155)
    })
})

function makeRolls(quantity: number, pins: number) {
    Array.from({ length: quantity }).map(() => game.roll(pins))
}