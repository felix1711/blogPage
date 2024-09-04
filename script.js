

const circle2 = document.querySelector("#pg5cir2");
const circle3 = document.querySelector("#pg5cir3");
const color=document.querySelector("#pg5barcolor");
const img= document.querySelector("#page5img img");
const f1=document.querySelectorAll(".pg5h21");
const f2=document.querySelectorAll(".pg5h22");
const f3=document.querySelectorAll(".pg5h23");

gsap.to("#pg5barcolor",{
    height:"100%",
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        pin:true,
        start:"top 0%",
        scrub:1,
        end:"top -300%",
        onUpdate:function(elem){
            if(elem.progress>0.33){
                circle2.style.backgroundColor="#003366";
                img.src="./Photos/ai-in-healthcare.webp";
                f1.forEach(element => {
                    element.style.color="#6d4c41";
                });
                f2.forEach(element => {
                    element.style.color="#003366";
                });
            }
            else if(elem.progress<0.3){
                circle2.style.backgroundColor="white";
                img.src="./Photos/The-Future-of-Healthcare-Technology.jpg";
                f2.forEach(element => {
                    element.style.color="#6d4c41";
                });
                f1.forEach(element => {
                    element.style.color="#003366";
                });
            }

            if(elem.progress>0.91){
                circle3.style.backgroundColor="#003366";
                img.src = "https://img.freepik.com/premium-photo/healthcare-medicine-medical-technology-doctor-using-ai-robots-diagnosis-medical-research_820340-18406.jpg";
                f2.forEach(element => {
                    element.style.color="#6d4c41";
                });
                f3.forEach(element => {
                    element.style.color="#003366";
                });
            }
            else if(elem.progress<0.9 && elem.progress>0.34){
                circle3.style.backgroundColor="white";
                img.src="/Photos/ai-in-healthcare.webp";
                f3.forEach(element => {
                    element.style.color="#6d4c41";
                });
                f2.forEach(element => {
                    element.style.color="#003366";
                });
            }
        }
    }
})
