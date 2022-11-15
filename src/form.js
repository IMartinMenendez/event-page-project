document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let tags = [];
    const data = Object.fromEntries(new FormData(e.target).entries());

   if (document.getElementById('meeting').classList.contains('meeting-added')) {
        tags.push('Meeting');
   }

   if (document.getElementById('party').classList.contains('party-added')) {
        tags.push('Party');
    }

    if (document.getElementById('learning').classList.contains('learning-added')) {
        tags.push('Learning');
    }

    let newEvent = new Event(new Date(data.newDate), data.newName, data.description, data.newImage, data.newPrice, false, tags)
    events.push(newEvent);
    clearScreen();
    let lastPage = createPages();
    displayPageEvents(lastPage);
    // displayEvents(events);
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});
