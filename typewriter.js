const sentence = "hello there from lighthouse labs";

let timeDelay = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(`${char}`);
  }, timeDelay)
  timeDelay += 50;
}

setTimeout(() => {
  process.stdout.write(`\n`);
},timeDelay)

