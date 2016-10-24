let items = new Set(['one', 'two', 'three', 'one', 'two']);


console.log(items); // {"one", "two", "three"}
console.log(items.size); // 3
console.log(items.add("four")); // {"one", "two", "three", "four"}
console.log(items.delete("two")); // {"one", "three", "four"}
console.log(items.has("four")); // true
console.log(items.clear()); // {}

items.forEach(item => console.log(item));

for (let item of items) {
    console.log(item)
}

let tags = ['php', 'js', 'vue', 'js'];

let set = new Set(tags);

new Set([...set].filter(tag => tag.length === 3));

let mentionedUsers = new Set(['johndoe', 'janedoe', 'janedoe']);