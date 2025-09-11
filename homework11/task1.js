function delayedLog(text, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, ms);
  });
}

delayedLog("Hello, world!", 3000).then(() => {
  console.log("Вивід завершено!");
});
