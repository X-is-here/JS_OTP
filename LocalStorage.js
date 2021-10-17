const commentContainerTag = document.querySelector(".commentContainer")
const buttonTag = document.querySelector(".btn")
const commentInputContainerTag = document.querySelector(".commentInputContainer")
const commentInputTag = document.querySelector(".commentInput")

const localStorageKey = "MyData";

const appendComment = (commentValue) => {
    const commentDiv = document.createElement("div");
    commentDiv.append(commentValue);
    commentDiv.classList.add("comment")
    commentContainerTag.append(commentDiv);
    commentInputTag.value = "";
}

buttonTag.addEventListener("click", () => {
    const commentValue = commentInputTag.value;
    appendComment(commentValue);
    localStorage.setItem(localStorageKey, commentValue)
})
