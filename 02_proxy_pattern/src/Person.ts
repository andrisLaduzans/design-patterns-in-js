const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
  gender: "male",
};

export const personProxy = new Proxy(person, {
  get: (obj: typeof person, prop: keyof typeof person) => {
    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
    return Reflect.get(obj, prop);
  },

  set: (obj: typeof person, prop: keyof typeof person, value: string) => {
    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    return Reflect.set(obj, prop, value);
  },
});
