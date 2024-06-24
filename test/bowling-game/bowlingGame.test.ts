import { BowlingGame } from '../../src/bowling-game/bowlingGame'

let game

describe('bowling game', () => {
    beforeEach(() => {
        game = new BowlingGame()
    })
    it('should create a bowling game instance', () => {
        expect(game).toBeInstanceOf(BowlingGame)
    })

    it('should make a roll throwing pins', () => {
        game.roll(5)

        expect(game.rolls).toHaveLength(1)
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
        makeRolls(17,0)

        expect(game.score()).toBe(20)
    })

    function makeRolls(quantity: number, pins: number) {
        Array.from({ length: quantity }).map(() => game.roll(pins))
    }
})