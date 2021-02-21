'use strickt'

let maxAttempts = 25;
let userAttemptsCounter=0;
let sectionElement = document.getElementById('product-section');

// let ulElement = document.getElementById('product-list');
let leftImageIndex ;
let centerImageIndex ;
let rightImageIndex;
// ProductImages.lastShown = [];

function ProductImage(name, source) {
    this.name = name;
    this.source = source;
    this.click = 0;
    this.show=0;
    ProductImage.allImages.push(this);
  }

  
ProductImage.allImages = [];
  
let leftImageElement = document.getElementById('left-image');
let centerImageElement = document.getElementById('center-image');
let rightImageElement = document.getElementById('right-image');

new ProductImage('bag','img/bag.jpg');
new ProductImage('boots','img/boots.jpg');
new ProductImage('banana','img/banana.jpg');
new ProductImage('bathroom','img/bathroom.jpg');
new ProductImage('breakfast','img/breakfast.jpg');
new ProductImage('bubblegum','img/bubblegum.jpg');
new ProductImage('chair','img/chair.jpg');
new ProductImage('cthulhu','img/cthulhu.jpg');
new ProductImage('dragon','img/dragon.jpg');
new ProductImage('pen','img/pen.jpg');

new ProductImage('pet-sweep','img/pet-sweep.jpg');
new ProductImage('scissors','img/scissors.jpg');
new ProductImage('shark','img/shark.jpg');
new ProductImage('sweep','img/sweep.png');
new ProductImage('tauntaun','img/tauntaun.jpg');
new ProductImage('unicorn','img/unicorn.jpg');
new ProductImage('usb','img/usb.gif');
new ProductImage('water-can','img/water-can.jpg');
new ProductImage('wine-glass','img/wine-glass.jpg');
new ProductImage('dog-duck','img/dog-duck.jpg');

console.log(ProductImage.allImages);

function generateRandomIndex() {
    return Math.floor( Math.random() * ProductImage.allImages.length);
   }

   function renderThreeImages() {
 

    
    do{
        rightImageIndex=generateRandomIndex();
        leftImageIndex=generateRandomIndex();
        centerImageIndex = generateRandomIndex();



       }
    while (leftImageIndex === rightImageIndex || leftImageElement===centerImageElement || rightImageElement===centerImageElement)


       ProductImage.allImages
       console.log(ProductImage.allImages[leftImageIndex]);
     
       leftImageElement.src = ProductImage.allImages[leftImageIndex].source;
       centerImageElement.src = ProductImage.allImages[centerImageIndex].source;
       rightImageElement.src = ProductImage.allImages[rightImageIndex].source;


       
       
     }
     renderThreeImages();
  
    sectionElement.addEventListener('click',userClick);
    
     function userClick(event){
         console.log(event.target.id);

         if(userAttemptsCounter<25){       
               userAttemptsCounter++;

            
            if(event.target.id ==='left-image'||event.target.id ==='center-image'||event.target.id ==='right-image'){
              ProductImage.allImages[leftImageIndex].click++
              ProductImage.allImages[centerImageIndex].click++
              ProductImage.allImages[rightImageIndex].click++
              ProductImage.allImages[leftImageIndex].show++
              ProductImage.allImages[centerImageIndex].show++
              ProductImage.allImages[rightImageIndex].show++


            renderThreeImages();

        
            }
            
        
          }
          if (userAttemptsCounter>=25) {

            sectionElement.removeEventListener('click',userClick);
              
          
          
      
    
          }
        }

        let display=document.getElementById('display')

        display.addEventListener('click',result);

        function result(event){
          let list=document.getElementById('results-list');
            let productResult;
            for(let i=0;i<ProductImage.allImages.length;i++){
                productResult=document.createElement('li');
              list.appendChild(productResult);
              productResult.textContent = ProductImage.allImages[i].name +  ' had ' + ProductImage.allImages[i].click + ' click'+','+'and was seen'+ProductImage.allImages[i].show+'times' 
            }
            display.removeEventListener('click',result);


        }
  