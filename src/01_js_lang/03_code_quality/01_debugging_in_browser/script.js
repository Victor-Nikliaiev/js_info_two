function hello(name) {
    let phrase = `Hello, ${name}`;

    // debugger;

    say(phrase);
}

function say(phrase) {
    console.log(`** ${phrase} **`);
}

hello("John");
