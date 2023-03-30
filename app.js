let toggleButton = document.querySelector('.menu-icon');
let sidebar = document.querySelector('.sidebar');


toggleButton.addEventListener("click", () => {
        if(toggleButton.firstElementChild.classList.contains("bx-menu-alt-left")){
                toggleButton.firstElementChild.classList.replace("bx-menu-alt-left","bx-menu-alt-right");
                sidebar.classList.remove('hidden');
        } else {
                toggleButton.firstElementChild.classList.replace("bx-menu-alt-right","bx-menu-alt-left");
                sidebar.classList.remove('hidden');
        }

        sidebar.classList.toggle("show-sidebar");
})

let home = document.querySelector('.home');
let about = document.querySelector('.about');
let services = document.querySelector('.services');
let skills = document.querySelector('.skills');
let projects = document.querySelector('.projects');
let contact = document.querySelector('.contact');
const sidebarNavigations = [home, about, services, skills, projects, contact];

for(let x = 0; x < sidebarNavigations.length; x++){
        sidebarNavigations[x].addEventListener("click", () => {
                toggleButton.firstElementChild.classList.replace("bx-menu-alt-right","bx-menu-alt-left");
                sidebar.classList.toggle("show-sidebar");
        })
}



const service = document.querySelector('.service');
const education = document.querySelector('.education');
const forServices = document.querySelector('.forServiceText');
const forEducation = document.querySelector('.forEducationText');


service.addEventListener('click', () => {
        service.classList.add('activeLink');
        education.classList.remove('activeLink');
        forServices.classList.remove('hidden');
        forEducation.classList.add('hidden');
})

education.addEventListener('click', () => {
        service.classList.remove('activeLink');
        education.classList.add('activeLink');
        forServices.classList.add('hidden');
        forEducation.classList.remove('hidden');
})

var showBtn = document.querySelector('.hiddenButton');
var hiddenProducts = document.querySelectorAll('.hiddenProduct');
var borderHdnProducts = document.querySelectorAll('.productallHidden');

var state = true;

showBtn.addEventListener('click', () => {    
        if(state == true){
                for(let i = 0; i < hiddenProducts.length; i++){
                        hiddenProducts[i].style.height = '50vh';
                }
                showBtn.textContent = "Show Less";
                state = false;
        } 
        else if(state == false){
                for(let i = 0; i < hiddenProducts.length; i++){
                        hiddenProducts[i].style.height = '0vh';
                }
                showBtn.textContent = "Show More";
                state = true;
        }
})