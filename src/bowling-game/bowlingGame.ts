type Score = {
    total: number
    index: number
}

export class BowlingGame {
    private MAX_PINS: number = 10
    private rolls: number[] = []

    public roll(pins: number) {
        this.rolls.push(pins)
    }

    public score(): number {
        return this.calculateScore().total
    }

    private calculateScore(): Score {
        return this.getFrames().reduce(({ total, index }: Score) => {
            if (this.isASpare(index))
                return {
                    total: total + this.MAX_PINS + this.sparePoint(index),
                    index: index + 2
                }
            if (this.isAStrike(index))
                return {
                    total: total + this.MAX_PINS + this.strikePoint(index),
                    index: index + 1
                }
            return {
                total: total + this.rolls[index] + this.rolls[index + 1],
                index: index + 2
            }
        }, { total: 0, index: 0 })
    }

    private isASpare(index: number): boolean {
        return this.rolls[index] + this.rolls[index + 1] == this.MAX_PINS
    }

    private sparePoint(index: number): number {
        return this.rolls[index + 2]
    }

    private isAStrike(index: number): boolean {
        return this.rolls[index] == this.MAX_PINS
    }

    private strikePoint(index: number): number {
        return this.rolls[index + 1] + this.rolls[index + 2]
    }

    private getFrames(): number[] {
        const numberOfFrames: number = 10
        return Array.from({ length: numberOfFrames }).map((_, index) => index)
    }
}