function myDisplayer(some) {
  console.log(some);
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

console.log(
  "For Id demo-class " +
    "Browser inner window width: " +
    window.innerWidth +
    "px<br>" +
    "Browser inner window height: " +
    window.innerHeight +
    "px"
);
