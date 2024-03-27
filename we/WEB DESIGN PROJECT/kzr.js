var burger = document.querySelector("#menu");
var menu = document.querySelector("#list");

burger.addEventListener("click",()=>{

    if(menu.classList.contains("hidden")){
            menu.classList.remove("hidden");
    }else{
            menu.classList.add("hidden");
    }
})



var quiz = document.getElementById('quiz');
var quizDialog = document.querySelector("#quizDialog");

quiz.addEventListener("click", () => {
    if(quizDialog.classList.contains("hidden")){
        quizDialog.classList.remove("hidden");
}else{
    quizDialog.classList.add("hidden");
}
});


// 
const javaLink = document.getElementById('java');

        // Add click event listener
        javaLink.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Redirect to java_page.html
            window.location.href = 'java_page.html';
        });

        const Angular = document.getElementById('angular');

        // Add click event listener
        Angular.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Redirect to java_page.html
            window.location.href = 'angular.html';
        });


        const C = document.getElementById('C');

        // Add click event listener
        C.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Redirect to java_page.html
            window.location.href = 'c.html';
        });


        const cpp = document.getElementById('cpp');

        // Add click event listener
        cpp.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Redirect to java_page.html
            window.location.href = 'cpp.html';
        });


        const python = document.getElementById('python');

        // Add click event listener
        python.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();
            
            // Redirect to java_page.html
            window.location.href = 'python.html';
        });
        

        // 







var home = document.querySelector("#home");
home.addEventListener('click', function(event) {
event.preventDefault();
window.location.href = 'kzr.html';
        });





