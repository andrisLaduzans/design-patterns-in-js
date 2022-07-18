## Proxy pattern

Share a single global instance throughout our application

proxy meaning: stand-in for someone else. instead of using an object directly, we want to interact with a proxy object.

in project we create Person.js and person object
```
const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};
```
the second argument of Proxy is an object that represents the handler. in handler object we can define specific behavior based on the type of interaction. two of the most common ones are `get` and `set`.
```
onst personProxy = new Proxy(person, {
  get: (obj: typeof person, prop: keyof typeof person) => {
    console.log(`The value of ${String(prop)} is ${obj[prop]}}`);
  },

  set: (obj: typeof person, prop: keyof typeof person, value: string) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  },
});

personProxy.name;
personProxy.age = 44;
```

using `obj[prop]` type of syntax is very error prone and can be somewhat complicated to guard.
```
set: (obj: typeof person, prop: keyof typeof person, value: string) => {
    const logSuccess = () =>
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);

    if (prop === "age" && typeof value === "number") {
      obj[prop] = value;
      logSuccess();
    } else if (prop !== "age" && typeof value !== "string") {
      obj[prop] = value;
      logSuccess();
    } else {
      console.log("Sorry, you are trying to pass invalid property or value");
    }
    return true;
  },
```
Thankfully Js provides built in object called `Reflect` which makes it easier to manipulate target object when working with proxies.

so instead of using `obj[prop]` we can use `Reflect.get()` and `Reflect.set`. the methods use same arguments as the methods of handler object making code much more concise.
```
export const personProxy = new Proxy(person, {
  get: (obj: typeof person, prop: keyof typeof person) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },

  set: (obj: typeof person, prop: keyof typeof person, value: string) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    return Reflect.set(obj, prop, value);
  },
});
```

Overusing the `Proxy` object of performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code.

### State management
- when using in react, when changing the object, you would still require to update state somehow to trigger re-rendering.