function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function titlecase(str) {
  if (!str) return "";
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function main() {
  console.log("--- capitalize ---");
  console.log(capitalize("hello"));
  console.log(capitalize("WORLD"));
  console.log(capitalize("javaScript"));

  console.log("--- titlecase ---");
  console.log(titlecase("hello world"));
  console.log(titlecase("JAVA SCRIPT"));
  console.log(titlecase("javaScript programming"));
}

main();

export { capitalize, titlecase };