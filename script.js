const images = [
  { left: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_480,h_380/https://iies.in/wp-content/uploads/2023/10/3-min-480x380.png", center: "https://img.freepik.com/premium-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner_128772-898.jpg", right: "https://img.freepik.com/premium-vector/program-coding-concept_24640-24012.jpg?semt=ais_hybrid" },
  { left: "https://img.freepik.com/premium-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner_128772-898.jpg", center: "https://img.freepik.com/premium-vector/program-coding-concept_24640-24012.jpg?semt=ais_hybrid", right: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_480,h_380/https://iies.in/wp-content/uploads/2023/10/3-min-480x380.png" },
  { left: "https://img.freepik.com/premium-vector/program-coding-concept_24640-24012.jpg?semt=ais_hybrid", center: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_480,h_380/https://iies.in/wp-content/uploads/2023/10/3-min-480x380.png", right: "https://img.freepik.com/premium-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner_128772-898.jpg" },
];

let currentIndex = 0;

function updateSlider() {
  document.querySelector("#left-img").src = images[currentIndex].left;
  document.querySelector("#center-img").src = images[currentIndex].center;
  document.querySelector("#right-img").src = images[currentIndex].right;

  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateSlider, 5000);

updateSlider();
