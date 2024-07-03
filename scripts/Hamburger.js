document.getElementById ("hamburger-icon")
    .addEventListener ("click", function () {
        var menu = document.querySelector ("header nav ul"); // Finds navigation links to be included in the hamburger menu for the media queries.
        if (window.getComputedStyle (menu).display === "none") 
            {menu.style.display = "block";}
        else {menu.style.removeProperty ("display");}                                                                              
}); 