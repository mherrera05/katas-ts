class BowlingGame {
    rolls: number[] = [];

    roll(pins: number) {
        this.rolls.push(pins)
    }

    calculateTotal() {
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

    it('should calculate total score as 0 when fails all the throws', () => {
        let bowlingGame = new BowlingGame();

        Array.from({ length: 20 }).map(() => {
            bowlingGame.roll(0)
        })

        expect(bowlingGame.calculateTotal()).toBe(0)
    })
})