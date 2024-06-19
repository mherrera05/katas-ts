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
        Array.from({ length: 20 }).map(() => {
            game.roll(0)
        })

        expect(game.score()).toBe(0)
    })

    it('should score 20 when when it knock down 1 per throw', () => {
        Array.from({ length: 20 }).map(() => {
            game.roll(1)
        })

        expect(game.score()).toBe(20)
    })
})