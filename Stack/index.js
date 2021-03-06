export class Stack {
    constructor() {
        this.count = 0;
        this.items = {}
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    pop() {
        this.count--;
        const result = this.items[this.count]
        delete this.items[this.count];
        return result;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

    clear() {
        while (!this.isEmpty()) this.pop();
        console.log('run once')
    }

    toString() {
        if (this.isEmpty()) return '';
        let objString = `${this.items[0]}`
        for (let index = 1; index < this.count; index++) {
            objString += `,${this.items[index]}`
        }

        return objString;
    }
}


