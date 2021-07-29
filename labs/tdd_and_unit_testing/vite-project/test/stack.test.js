//custom Stack class
class Stack {
    constructor() {
        //signifies current top index of stack
        this.top = -1;
        //signifies current items within the stack
        this.items = {}
    }

    //pops the last element from the obj and changes this.top to match
    pop() {
        //delete the current top values within the stack
        delete this.items[this.top];
        //deduct 1 from the top to show the new top index
        this.top = this.top -1;
    }
    //appends a key value pair to the obj and changes the top value to match
    push(item) {
        //this.items last index + 1 is equal to the current item being pushed
        this.items[this.top + 1] = item;
        //top value is changed to signify new top index
        this.top = this.top + 1;
    }
    //has a look at the current top value
    get peek() {
        console.log("peek", this.items)
        //return the value of the top of the stack
        return this.items[this.top];
    }
}

describe('My Stack', () => {

    let stack;
    //a hook that runs before each of the test cases in this stack
    beforeEach(() => {
        //stack equals a new stack class instance
        stack = new Stack;
    })

    it('Is created', () => {
        //top should represent index of item on top of stack
        //expects the stack top index to be -1 because it should be empty
        expect(stack.top).toBe(-1);
        //and the items obj should also be empty used with the to equal so that it checks the
        // if stack.items is equal to an empty obj instead of using toBe which
        //would return false in this case because they are the same but stored in the
        //in different memory locations, toBe can be used with values, toEqual with types
        expect(stack.items).toEqual({})
    });

    it('can push to top', () => {
        //push this value to stack.items
        stack.push('lala')
        //we are expecting stack.top to be 0 if false will fail
        expect(stack.top).toBe(0);
        //we use the peek method to compare the current top with the top we were expecting
        //if false will fail
        expect(stack.peek).toBe('lala')
    });

    it('can pop off', () => {
        //pops the last element off of the stack
        stack.pop();

    });
})