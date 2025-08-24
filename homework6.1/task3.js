function checkOrder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty";
  } else if (ordered > available) {
    return "Your order is too large, we do not have enough goods";
  } else {
    return "Your order is accepted";
  }
}

console.log(checkOrder(15, 7));
console.log(checkOrder(7, 0));
console.log(checkOrder(7, 18));
