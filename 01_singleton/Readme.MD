## Singleton pattern

### Singleton Class
Singletons are classes which can be instantiated once, and can be accessed globally.

Singleton should only be able to get instantiated once.

way to make sure that only one instance can be created, is by creating a variable called instance. In the constructor of `Counter`, set instance equal to a reference to the instance when new instance is created. This prevent new instantiations by checking if the instance variable had value. If that's the case, an instance already exists. This shouldn't happen: an error should get thrown

```
let instance: Counter;

class Counter {
    constructor() {
        if (instance) {
            throw new Error(
                "You can only create one instance!"
            );
        }
        instance = this;
    }
    ...
}
const c1 = new Counter();
const c2 = new Counter();
//Error: You can only create one instance!
```

App uses 2 instances of button in two separate files, `IncrementButton` and `DecrementButton` each of them imports the Singleton instance and updates its `count` value. As a side effect `onClick` triggers state update on parent component `App`


 Disadvantages:
 - singleton is an anti pattern in Javascript. since JS can create objects without the need of creating classes this case is an overkill.
 - even tho singleton's instance is available throughout the app, parent component still needed to create state hooks in order to update render values
 - more suited for Object oriented languages like Java / Swift / C++ etc

 ### Singleton Object

 in Js it is possible to wite much smaller code using simply objects. This is how Counter.ts looks refactored to object instead of class
 ```
 let count = 0;

const counter = {
  increment() {
    return ++count;
  },

  decrement() {
    return --count;
  },
  getCount() {
    return count;
  },
};

Object.freeze(counter);
export const singletonCounter = counter;
```
Since objects are passed by reference, both `IncrementButton` and `DecrementButton` are using same singleton instance. Modifying the count in either of these files changes the value of singletonCounter. Also using `Object.freeze` helps it from being overwritten later on in code

## Testing
Testing singleton can be tricky since it can hold only one instance. All tests rely on the modification of global instance of the previous test. The order of which tests are executed matters.
Another approach would be to reset the singleton state to it's initial value on each test.


## Global behavior
- having global variables is generally considered a bed design decision. Global scope pollution can end up in accidentally overriding the value of a global variable, which can lead to lots of unexpected errors. This why it is imperative to use ES2015 `let` and `const` keywords when declaring variables.

- common use case for Singleton is to have some sort of global state throughout the application. Having multiple parts in codebase rely on the same mutable object can lead to unexpected behaviour

- the order of execution here is important: we don't want to accidentally consume data first , when there is no data to consume yet. Understanding data flow using global state can get very tricky as your application grows.

## State Management
- instead of having one mutable object, redux pattern is much better suited for react - only pure function reducers can update the state, after a component has sent and action through the dispatcher
- also redux pattern is better because we can make sure that the global state is mutated the way we intend to, since components cannot update the state directly