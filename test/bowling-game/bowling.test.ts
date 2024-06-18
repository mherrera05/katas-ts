class BowlingGame {
    rolls: number[] = [];

    roll(pins: number) {
        this.rolls.push(pins)
    }

    score() {
        return this.rolls.reduce((total, currentValue) => (total + currentValue))
    }
}

describe('bowling game', () => {
    it('should create a bowling game instance', () => {
        let bowlingGame = new BowlingGame();

        expect(bowlingGame).toBeInstanceOf(BowlingGame);
    })

    it('should make a roll throwing pins', () => {
        let bowlingGame = new BowlingGame();

        bowlingGame.roll(5)

        expect(bowlingGame.rolls).toHaveLength(1)
    })

    it('should score 0 when fails all the throws', () => {
        let bowlingGame = new BowlingGame();

        Array.from({ length: 20 }).map(() => {
            bowlingGame.roll(0)
        })

        expect(bowlingGame.score()).toBe(0)
    })

    it('should score 20 when when it knock down 1 per throw', () => {
        let bowlingGame = new BowlingGame();

        Array.from({ length: 20 }).map(() => {
            bowlingGame.roll(1)
        })

        expect(bowlingGame.score()).toBe(20)
    })
})