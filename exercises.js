// Question 1
function NewArray() { }
NewArray.prototype = Object.create(Object.getPrototypeOf([]));

NewArray.prototype.first = function() { return this[0]; };

var old_arr = new Array(),
    new_arr = new NewArray();

old_arr.push(1);
old_arr.push(2);
new_arr.push(1);
new_arr.push(2);

console.log(new_arr.first());
console.log(typeof old_arr.first);

// Question 2
function newPerson(name) {
  return Object.defineProperties({ name: name }, {
    log: {
      value: function() {
        console.log(this.name);
      },
      writable: false
    }
  });
}

var person = newPerson("Steve Gomez");
person.log();
person.log = function() { console.log("Walter White"); };
person.log();

// Question 3
var frozen = {
  integer: 11,
  string: 'A string',
  array: ['This', 'is', 'an', 'array'],
  object: {
    prop: 'value'
  },
  func: function() { console.log('This object is frozen'); }
};

Object.freeze(frozen);
frozen.integer = 22;
frozen.string = 'Another string';
frozen.array = [11, 22, 33];
frozen.object.prop = 'Another value';
frozen.func = function() { console.log('This object is NOT frozen'); }

console.log(frozen.integer);
console.log(frozen.string);
console.log(frozen.array);
console.log(frozen.object.prop);
frozen.func();

Object.isFrozen(frozen);
