
//extra flatten fucntion
function flatten(array, onlyOneDepth = false) {
  const newArray = [];

  function recurse(collection = [], depth = 0) {
    if (onlyOneDepth && depth > 1) {
      newArray.push(collection);
      return;
    }

    if (typeof collection !== "object") {
      newArray.push(collection);
      return;
    }

    for (const element of collection) {
      recurse(element, depth + 1);
    }
  }

  recurse(array);

  return newArray;
}
