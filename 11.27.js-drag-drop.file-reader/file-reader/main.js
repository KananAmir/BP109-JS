const fileInput = document.querySelector("#file");

fileInput.addEventListener("change", function (event) {
  //   console.log(event.target.files);

  const file = event.target.files[0];

  const reader = new FileReader();

  reader.readAsText(file);

  //   console.log(file);

  reader.onload = function () {
    // console.log(reader.result);

    if (file && file.type.startsWith("text")) {
      const textPreview = document.querySelector(".text-preview");

      textPreview.textContent = reader.result;
    } else {
      console.log("select only text document!");
    }
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
});
