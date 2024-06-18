class BowlingGame {
    rolls: number[] = [];

    roll(pins: number) {
        this.rolls.push(pins)
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
})