document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const handleSubmit = (e) => {
    e.preventDefault();
    const favInput = document.querySelector(".favorite-input");
    const favorite = favInput.value;
    favInput.value = "";

    const newListLi = document.createElement("li");
    newListLi.textContent = favorite;

    const favsList = document.getElementById("sf-places");
    favsList.appendChild(newListLi);
  };

  const submitButton = document.querySelector(".favorite-submit");
  submitButton.addEventListener("click", handleSubmit);

  // adding new photos

  const displayPhotoForm = (e) => {
      const photoFormDiv = document.querySelector(".photo-form-container");
      if (photoFormDiv.className === "photo-form-container") {
        photoFormDiv.className = "photo-form-container hidden";
      } else {
        photoFormDiv.className = "photo-form-container";
      }
    };

    const formShowButton = document.querySelector(".photo-show-button");
    formShowButton.addEventListener("click", displayPhotoForm);


    const handlePhotoSubmit = (e) => {
      e.preventDefault();

      const photoUrlInput = document.querySelector(".photo-url-input");
      const photoUrl = photoUrlInput.value;
      photoUrlInput.value = "";

      const newImg = document.createElement("img");
      newImg.src = photoUrl;

      const newPhotoLi = document.createElement("li");
      newPhotoLi.appendChild(newImg);

      const dogPhotosList = document.querySelector(".dog-photos");
      dogPhotosList.appendChild(newPhotoLi);
    };

    const photoSubmitButton = document.querySelector(".photo-url-submit");
    photoSubmitButton.addEventListener("click", handlePhotoSubmit);

});
