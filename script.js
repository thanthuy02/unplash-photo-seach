

// async function getImg(){
//     const apiKey = "QVS6VhqctYCraIpP3h20Ew9sx6kie1r0QIOgiqouIow";
//     let initialCount = 2;
//     let apiURL = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${initialCount}`;
//     let response = await window.fetch(apiURL)
//     let result = await response.json();
//     console.log(result);
// }
// getImg();


const apiKey = "QVS6VhqctYCraIpP3h20Ew9sx6kie1r0QIOgiqouIow";
const imgContainer = document.querySelector('.img-container');
const loader = document.querySelector('.loading-gif');

let initialCount = 10;
let apiURL = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${initialCount}`;



function updateCount(picCount){
    let apiURL = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${picCount}`;
}