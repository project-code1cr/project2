let boxe = document.querySelectorAll(".box");
let resetbt = document.querySelector("#reset-button");
let msgcont = document.querySelector(".msg");
let msg = document.querySelector(".ms");
let newbtn = document.querySelector("#new-btn");
let draww = document.querySelector(".raw");
let droow = document.querySelector(".draw");
let turno = true;

const wPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turno = true;
  enableBoxe();
  msgcont.classList.add("hide");
};

boxe.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");
    if (turno) {
      box.innerText = "O";
      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxe = () => {
  for (let box of boxe) {
    box.disabled = true;
  }
};

const enableBoxe = () => {
  for (let box of boxe) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showwinner = () => {
  msg.innerText = "Congratulation , Winner ";
  msgcont.classList.remove("hide");
  disableBoxe();
};

const draw = () => {
  draww.innerText = " DRAW ";
  droow.classList.remove("draw");
  disableBoxe();
};

const checkWinner = () => {
  for (let pattern of wPatterns) {
    console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxe[pattern[0]], boxe[pattern[1]], boxe[pattern[2]]);
    let post = boxe[pattern[0]].innerText;
    let post1 = boxe[pattern[1]].innerText;
    let post2 = boxe[pattern[2]].innerText;
    console.log(post);
    console.log(post1);
    console.log(post2);

    if (post != "" && post1 != "" && post2 != "") {
      if (post === post1 && post1 === post2 && post === post2) {
        // console.log("winner");
        showwinner();
      } else if (
        (post[0][0] === "O" || post[0][0] === "X") &&
        (post[0][1] === "O" || post[0][1] === "X") &&
        (post[0][2] === "O" || post[0][2] === "X") &&
        (post1[1][0] === "O" || post1[1][0] === "X") &&
        (post1[1][1] === "O" || post1[1][1] === "X") &&
        (post1[1][2] === "O" || post1[1][2] === "X") &&
        (post2[2][0] === "O" || post2[2][0] === "X") &&
        (post2[2][1] === "O" || post2[2][1] === "X") &&
        (post2[2][2] === "O" || post2[2][2] === "X")
      ) {
        draw();
      }
    }
  }
};

newbtn.addEventListener("click", resetGame);
resetbt.addEventListener("click", resetGame);
