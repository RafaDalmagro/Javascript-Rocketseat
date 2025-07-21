console.log(1);

queueMicrotask(() => {
  console.log(2);
});

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);	

Promise.resolve().then(() => {
  console.log(5);
});
