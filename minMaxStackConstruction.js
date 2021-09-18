// Feel free to add new properties and methods to the class.
class MinMaxStack {
    constructor() {
        this.stack = []
        this.min = null
        this.max = null
    }
    _setMinMax(number) {
        this._setMin(number)
        this._setMax(number)
    }
    _setMin(number) {
        if (this.min === null || this.min.value >= number) {
            this.min = { value: number, last: this.min }
        }
    }
    _setMax(number) {
        if (this.max === null || this.max.value <= number) {
            this.max = { value: number, last: this.max }
        }
    }

    _updateMinMax(number) {
        this._updateMin(number)
        this._updateMax(number)
    }
    _updateMin(number) {
        if (this.min !== null && this.min.value === number) {
            this.min = this.min.last
        }
    }
    _updateMax(number) {
        if (this.max !== null && this.max.value === number) {
            this.max = this.max.last
        }
    }

    get stackLastIndex() {
        return this.stack.length - 1
    }
    peek() {
        return this.stack[this.stackLastIndex]
    }

    pop() {
        let value = this.stack.pop()
        this._updateMinMax(value)
        return value
    }

    push(number) {
        this.stack.push(number)
        this._setMinMax(number)
    }

    getMin() {
        return this.min && this.min.value
    }

    getMax() {
        return this.max && this.max.value
    }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
