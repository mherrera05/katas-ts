export class BowlingGame {
    rolls: number[] = [];

    roll(pins: number) {
        this.rolls.push(pins)
    }

    score() {
        return this.rolls.reduce((total, currentValue) => (total + currentValue))
    }
}