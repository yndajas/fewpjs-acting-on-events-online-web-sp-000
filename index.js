// Your code here

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}

// my solution which works (and accounts for the right edge) but for some reason doesn't pass the test:
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    let width = dodger.offsetWidth;
    let right = left + width;
    let parentWidth = dodger.parentNode.offsetWidth;

    if (right < parentWidth - 1) {
      dodger.style.left = `${left + 1}px`;
    }
}

// Flatiron solution that passes the test (but doesn't account for the right edge):
// function moveDodgerRight() {
//     var leftNumbers = dodger.style.left.replace('px', '');
//     var left = parseInt(leftNumbers, 10)
//     if (left > 0) {
//       dodger.style.left = `${left + 1}px`
//     }
//   }
  
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
  