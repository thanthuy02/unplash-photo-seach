

// async function getImg(){
//     const apiKey = "QVS6VhqctYCraIpP3h20Ew9sx6kie1r0QIOgiqouIow";
//     let initialCount = 2;
//     let apiURL = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${initialCount}`;
//     let response = await window.fetch(apiURL)
//     let result = await response.json();
//      B1: lay 1 chi so ngau nhien trong mang
//      let index = Math.floor(Math.random()*result.length)
//      console.log(result[index]);
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

//let ready = false;
let totalImage = 0;
let imagesLoaded = 0;
function imageLoaded(){
    imagesLoaded++;
    console.log(imagesLoaded);
    if(imagesLoaded === totalImage){
        //ready = true;
        loader.hidden = true;
        //count = 20;
    }
}


function setAttributes(elem, attr){
    for(const keu in attr){
        elem.setAttributes(key, attr[key]);
    }
}