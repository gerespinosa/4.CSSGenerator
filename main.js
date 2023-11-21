window.onload = () => {
  let shape = document.getElementById("shape");
  let corner = document.getElementById("corner");
  let cornerValue = document.getElementById("cornerValue");
  let borderSizeValue = document.getElementById("borderSizeValue");
  let borderSize = document.getElementById("borderSize");
  let borderStyle = document.getElementById("borderStyle");
  let width = document.getElementById("width");
  let widthValue = document.getElementById("widthValue");
  let height = document.getElementById("height");
  let heightValue = document.getElementById("heightValue");
  let color = document.getElementById("color");
  const setter = document.getElementById("setter");
  const generatorText = document.getElementById("generatorText");
  const generatorBtn = document.getElementById("generatorBtn");

  setter.onchange = (e) => {
    e.preventDefault();
    generatorBtn.style.display = "block";

    width.onchange = (e) => {
      e.preventDefault();
      let widthValueStr = width.value + "px";
      widthValue.value = widthValueStr;
      shape.style.width = widthValueStr;
    };
    height.onchange = (e) => {
      e.preventDefault();
      let heightValueStr = height.value + "px";
      heightValue.value = heightValueStr;
      shape.style.height = heightValueStr;
    };
    corner.onchange = (e) => {
      e.preventDefault();
      let cornerValueStr = corner.value + "px";
      cornerValue.value = cornerValueStr;
      shape.style.borderRadius = cornerValueStr;
    };
    borderSize.onchange = (e) => {
      e.preventDefault();
      let borderSizeValueStr = borderSize.value + "px";
      borderSizeValue.value = borderSizeValueStr;
      shape.style.borderWidth = borderSizeValueStr;
    };
    borderStyle.onchange = (e) => {
      e.preventDefault();
      shape.style.borderStyle = borderStyle.value;
    };
    color.onchange = (e) => {
      e.preventDefault();
      shape.style.backgroundColor = color.value;
    };

    generatorText.innerHTML =
      "width: " +
      widthValue.value +
      ";" +
      "<br>" +
      "height: " +
      heightValue.value +
      ";" +
      "<br>" +
      "border-radius: " +
      cornerValue.value +
      ";" +
      "<br>" +
      "border-width: " +
      borderSizeValue.value +
      ";" +
      "<br>" +
      "border-style: " +
      borderStyle.value +
      ";" +
      "<br>" +
      "background-color: " +
      color.value +
      ";" +
      "<br>";

    let texto = generatorText.innerText;
    generatorBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(texto);
    });
  };
};
