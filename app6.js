const galleryImg = document.querySelectorAll(".event-image img");
const eventList = document.querySelectorAll(".event-list .text");

eventList.forEach(function (events){
    // add event on ' click',  click for each img//
    events.addEventListener('click', function() {
        const EventImg = events.getAttribute("id");
        //locate each Eventlist by "id"

        //repeat images by delete class "active"//
        galleryImg.forEach(img => {
            img.classList.remove("active");
        });
        // loop back again //
        galleryImg.forEach(img => {
            const CurrentImg = img.getAttribute("alt");
            if(CurrentImg === EventImg) {
                img.classList.add("active");
            }
        });
    });
});