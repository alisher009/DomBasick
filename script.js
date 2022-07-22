const width = document.querySelector('.Alpine-Green')
const silver = document.querySelector('.Silver')
const gold = document.querySelector('.Gold')
const graphite = document.querySelector('.Graphite')
const sierraBlue = document.querySelector('.Sierra-Blue')
const boxIphone = document.querySelector('.imgiPhone2')
const modalc = document.querySelector('.Modal')

const modal = document.querySelector('.modal')
const modal_bg = document.querySelector('.modal_bg')
const ExitModal = document.querySelector('.exitModal')


function Img(){
    boxIphone.classList.remove('imgiPhone7')
    boxIphone.classList.remove('imgiPhone3')
    boxIphone.classList.remove('imgiPhone4')
    boxIphone.classList.remove('imgiPhone5')
    boxIphone.classList.remove('imgiPhone6')
}


width.onclick = () => {
    Img()
    boxIphone.classList.add('imgiPhone3')
}
silver.onclick = () => {
    Img()
    boxIphone.classList.add('imgiPhone4')
 }
gold.onclick = () => {
    Img()
    boxIphone.classList.add('imgiPhone5')
 }
graphite.onclick = () => {
    Img()
    boxIphone.classList.add('imgiPhone6')
 }
sierraBlue.onclick = () => {
    Img()
    boxIphone.classList.add('imgiPhone7')
 }

 modalc.onclick = () =>{
    // console.log("click");
    modal.style.display = "block"
    modal_bg.style.display = "block"
    document.body.style.overflow = "hidden"
    setTimeout(() => {
        modal_bg.style.opacity = "1"
        modal.style.opacity = "1"
        
        modal.style.transform = "translate(-50%, -50%) scale(1)  "
    }, 200);
 }

 ExitModal.onclick = () => {
     modal.style.display = "none"
     modal_bg.style.display = "none"
     document.body.style.overflow = ""
setTimeout(() => {
      modal.style.top = "50%"
}, 500);
 }






// let  acc = document.getElementsByClassName("accordion");
// let  i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");

//     let panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }





const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
//     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//        currentlyActiveAccordionItemHeader.classList.toggle("active");
//        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//      }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});