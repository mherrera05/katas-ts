export class BowlingGame {
    MAX_PINS: number = 10
    rolls: number[] = []

    public roll(pins: number) {
        this.rolls.push(pins)
    }

    public score() {
        return this.calculateScore().total
    }

    private calculateScore() {
        return this.getFrames().reduce(({ total, index }) => {
            if (this.isASpare(index)) {
                return {
                    total: total + this.MAX_PINS + this.rolls[index + 2],
                    index: index + 2
                }
            }
            if (this.isAStrike(index)) {
                return {
                    total: total + this.MAX_PINS + this.rolls[index + 1] + this.rolls[index + 2],
                    index: index + 1
                }
            }
            return {
                total: total + this.rolls[index] + this.rolls[index + 1],
                index: index + 2
            }
        }, { total: 0, index: 0 })
    }

    private isASpare(index: number) {
        return this.rolls[index] + this.rolls[index + 1] == this.MAX_PINS
    }

    private isAStrike(index: number) {
        return this.rolls[index] == this.MAX_PINS
    }

    private getFrames() {
        const numberOfFrames: number = 10
        return Array.from({length: numberOfFrames}).map((_, index) => index)
    }
}