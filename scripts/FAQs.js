// Function parameter is the FAQs header which has been clicked on for the "Catering" webpage.
function togglequestion (header) {
    var answer = header.nextElementSibling;
    if (window.getComputedStyle (answer).display === "none") 
        {answer.style.removeProperty ("display");}
    else {answer.style.display = "none";}                                                                              
}
