function addHeader() {
  const header = document.createElement("header");
  const headingH1 = document.createElement("h1");
  const content = document.createTextNode("RESTURANT PLACEHOLDER");
  headingH1.appendChild(content);
  header.appendChild(headingH1);
  console.log("done adding header");
  return header;
}

export { addHeader };
