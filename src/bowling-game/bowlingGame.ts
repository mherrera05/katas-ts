export class BowlingGame {
    rolls: number[] = [];

    roll(pins: number) {
        this.rolls.push(pins)
    }

    score() {
        return this.calculateScore().total
    }

    calculateScore() {
        return this.rolls.reduce(({ total, index }) => {
            if (index >= this.rolls.length) {
                return { total, index }
            }
            if (this.rolls[index] + this.rolls[index + 1] == 10) {
                total += 10 + this.rolls[index + 2]
                index += 2
            } else {
                total += this.rolls[index]
                index++
            }
            return { total, index }
        }, { total: 0, index: 0 }
        )
    }

}