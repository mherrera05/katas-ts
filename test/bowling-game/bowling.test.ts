class BowlingGame {
}

describe('bowling game', () => {
    it('should create a bowling game instance', () => {
        let bowlingGame = new BowlingGame();

        expect(bowlingGame).toBeInstanceOf(BowlingGame);
    })
})