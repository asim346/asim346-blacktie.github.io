let mobileNav = document.querySelector('ul');
let listIcon = document.querySelector('.list');

    listIcon.addEventListener('click', function(){
        mobileNav.classList.toggle('active');
        listIcon.classList.toggle('active');
    })



document.getElementById("closebyhome").onclick = function() {closeNav()};
document.getElementById("closebyabout").onclick = function() {closeNav()};
document.getElementById("closebyservices").onclick = function() {closeNav()};
document.getElementById("closebyteam").onclick = function() {closeNav()};
document.getElementById("closebyreviews").onclick = function() {closeNav()};
document.getElementById("closebycontact").onclick = function() {closeNav()};
document.getElementById("closebyappo").onclick = function() {closeNav()};

    function closeNav() {
        mobileNav.classList.toggle('active');;
    }