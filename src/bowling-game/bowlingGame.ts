export class BowlingGame {
    MAX_PINS: number = 10
    rolls: number[] = []

    roll(pins: number) {
        this.rolls.push(pins)
    }

    score() {
        return this.calculateScore().total
    }

    calculateScore() {
        return this.rolls.reduce(({ total, index }) => {
            if (this.isOutOfRange(index)) {
                return { total, index }
            }
            if (this.isASpare(index)) {
                total += this.MAX_PINS + this.rolls[index + 2]
                index += 2
            }
            if (this.isAStrike(index)) {
                total += this.MAX_PINS + this.rolls[index + 1] + this.rolls[index + 2]
                index += 1
            } else {
                total += this.rolls[index]
                index++
            }
            return { total, index }
        }, { total: 0, index: 0 })
    }

    isOutOfRange(index: number) {
        return index >= this.rolls.length
    }

    isASpare(index: number) {
        return this.rolls[index] + this.rolls[index + 1] == this.MAX_PINS
    }

    isAStrike(index: number) {
        return this.rolls[index] == this.MAX_PINS
    }
}