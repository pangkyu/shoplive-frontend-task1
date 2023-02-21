const localStorageSetItem = async () => {
  const inputTitle = document.querySelector(".title").value;
  const inputLikeCount = document.querySelector(".likeCount").value;
  const inputImageUrl = `https://source.unsplash.com/random/?programming`;
  const inputId = Date.now();
  const inputCreatedAt = Date.now();
  if (inputTitle && inputLikeCount !== "") {
    localStorage.setItem(
      inputId,
      JSON.stringify({
        id: inputId,
        title: inputTitle,
        createdAt: inputCreatedAt,
        likeCount: Number(inputLikeCount),
        imageUrl: inputImageUrl,
      })
    );
  } else {
    alert("비어있는 항목이 있습니다. ");
  }
};
export default localStorageSetItem;
