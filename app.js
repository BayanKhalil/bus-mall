'use strickt'

let maxAttempts = 25;
let userAttemptsCounter = 0;
let sectionElement = document.getElementById('product-section');

let leftImageIndex;
let centerImageIndex;
let rightImageIndex;
let productNames = [];
let productClick = [];
let productShown = [];
ProductImage.shown = [];
let lastShown = [];


function ProductImage(name, source) {
  this.name = name;
  this.source = source;
  this.click = 0;
  this.shown = 0;
  productNames.push(name);
  ProductImage.allImages.push(this);
  // ;


}
ProductImage.allImages = [];








let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');

new ProductImage('bag', 'img/bag.jpg');
new ProductImage('boots', 'img/boots.jpg');
new ProductImage('banana', 'img/banana.jpg');
new ProductImage('bathroom', 'img/bathroom.jpg');
new ProductImage('breakfast', 'img/breakfast.jpg');
new ProductImage('bubblegum', 'img/bubblegum.jpg');
new ProductImage('chair', 'img/chair.jpg');
new ProductImage('cthulhu', 'img/cthulhu.jpg');
new ProductImage('dragon', 'img/dragon.jpg');
new ProductImage('pen', 'img/pen.jpg');

new ProductImage('pet-sweep', 'img/pet-sweep.jpg');
new ProductImage('scissors', 'img/scissors.jpg');
new ProductImage('shark', 'img/shark.jpg');
new ProductImage('sweep', 'img/sweep.png');
new ProductImage('tauntaun', 'img/tauntaun.jpg');
new ProductImage('unicorn', 'img/unicorn.jpg');
new ProductImage('usb', 'img/usb.gif');
new ProductImage('water-can', 'img/water-can.jpg');
new ProductImage('wine-glass', 'img/wine-glass.jpg');
new ProductImage('dog-duck', 'img/dog-duck.jpg');

console.log(ProductImage.allImages);

function generateRandomIndex() {
  return Math.floor(Math.random() * ProductImage.allImages.length);
}

function renderThreeImages() {
  do {
    rightImageIndex = generateRandomIndex();
    leftImageIndex = generateRandomIndex();
    centerImageIndex = generateRandomIndex();




  }
  while (leftImageIndex === rightImageIndex || leftImageIndex === centerImageIndex || rightImageIndex === centerImageIndex)


  ProductImage.allImages
  //  console.log(ProductImage.allImages[leftImageIndex]);

  leftImageElement.src = ProductImage.allImages[leftImageIndex].source;
  ProductImage.allImages[leftImageIndex].shown++
  centerImageElement.src = ProductImage.allImages[centerImageIndex].source;
  ProductImage.allImages[centerImageIndex].shown++
  rightImageElement.src = ProductImage.allImages[rightImageIndex].source;
  ProductImage.allImages[rightImageIndex].shown++

}

renderThreeImages();
lastShown.push(leftImageIndex);
lastShown.push(centerImageIndex);
lastShown.push(rightImageIndex);
console.log(lastShown);


sectionElement.addEventListener('click', userClick);

function userClick(event) {
  console.log(event.target.id);

  if (userAttemptsCounter < 25) {
    userAttemptsCounter++;


    if (event.target.id === 'left-image' || event.target.id === 'center-image' || event.target.id === 'right-image') {
      ProductImage.allImages[leftImageIndex].click++
      ProductImage.allImages[centerImageIndex].click++
      ProductImage.allImages[rightImageIndex].click++


      while (leftImageIndex === rightImageIndex || leftImageIndex === centerImageIndex || rightImageIndex === centerImageIndex || lastShown.includes(leftImageIndex) || lastShown.includes(centerImageIndex) || lastShown.includes(rightImageIndex)) {

        rightImageIndex = generateRandomIndex();
        leftImageIndex = generateRandomIndex();
        centerImageIndex = generateRandomIndex();
      }




      lastShown = [];
      lastShown.push(leftImageIndex);
      lastShown.push(centerImageIndex);
      lastShown.push(rightImageIndex);

      ProductImage.allImages

      console.log('after', lastShown);



      renderThreeImages();


    }


  }
  if (userAttemptsCounter >= 25) {

    sectionElement.removeEventListener('click', userClick);



    for (let i = 0; i < ProductImage.allImages.length; i++) {
      productClick.push(ProductImage.allImages[i].click);
      productShown.push(ProductImage.allImages[i].shown);
    }
    settingItems();
    viewChart();
  }
}


// let display = document.getElementById('display')

// display.addEventListener('click', result);

// function result(event){
//   let list=document.getElementById('results-list');
//     let productResult;
//     for(let i=0;i<ProductImage.allImages.length;i++){
//         productResult=document.createElement('li');
//       list.appendChild(productResult);
//       productResult.textContent = ProductImage.allImages[i].name +  ' had ' + ProductImage.allImages[i].click + ' click'+','+'and was seen'+ProductImage.allImages[i].shown+'times' 
//     }
//     display.removeEventListener('click',result);


// }

// function result(event) {

// display.removeEventListener('click', result);


// }



function settingItems() {
  let data = JSON.stringify(ProductImage.allImages);
  console.log(data);
  localStorage.setItem('productImage', data)
}

function gettingItems() {
  let stringObject = localStorage.getItem('productImage');
  let normalObject = JSON.parse(stringObject);
  if (normalObject !== null) {

    ProductImage.allImages = normalObject;
    // console.log("saleh", ProductImage.allImages)
    for (let i = 0; i < ProductImage.allImages.length; i++) {
      productClick.push(ProductImage.allImages[i].click);
      productShown.push(ProductImage.allImages[i].shown);
    }
    viewChart();

  }

}


function viewChart() {

  let ctx = document.getElementById('myChart').getContext('2d');

  let chart = new Chart(ctx, {
    type: 'bar',

    data: {
      labels: productNames,

      datasets: [


        {
          label: 'Product click',
          backgroundColor: 'rgb(245, 188, 66)',
          borderColor: 'rgb(245, 188, 66)',
          data: productClick
        },

        {
          label: 'Product shown',
          backgroundColor: 'rgb(197, 245, 66)',
          borderColor: 'rgb(197, 245, 66)',
          data: productShown
        },


      ]
    },

    options: {}
  });



}



gettingItems();
