const events =
[
    new Event(new Date(new Date() - Math.random()*(1e+12)),  "Bergen International Film Festival", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
    'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 10 , false, ['Learning']),
    new Event(new Date(new Date() - Math.random()*(1e+12)),  "Wool Week", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
    'https://images.pexels.com/photos/306046/pexels-photo-306046.jpeg?cs=srgb&dl=pexels-lukas-306046.jpg&fm=jpg&_gl=1*1gu8knw*_ga*MTI4NzI2MjI3Ni4xNjY4NDM2MDQ4*_ga_8JE65Q40S6*MTY2ODQ0MDM1OC4yLjAuMTY2ODQ0MDM1OC4wLjAuMA.', 20 , false, ['Meeting', 'Party']),
    new Event(new Date(new Date() - Math.random()*(1e+12)),  "Light park at Bergenhus Fortress", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
    'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 12.50, false, ['Learning'] ),
    new Event(new Date(new Date() - Math.random()*(1e+12)),  "Vivaldi - The Four Seasons", 'Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small. Felicity now law securing breeding likewise extended and. Roused either who favour why ham.',
    'https://images.pexels.com/photos/4028878/pexels-photo-4028878.jpeg?auto=compress&cs=tinysrgb&w=1600', 10 , false, ['Learning']),
    new Event(new Date(new Date() - Math.random()*(1e+12)),  "London Comic Con Winter 2022", 'Also when you use plain Lorem ipsum text, your design will look like a million other designs out there. With Random Text Generator your designs will look more unique while still containing text which truly means nothing.',
    'https://images.pexels.com/photos/7524996/pexels-photo-7524996.jpeg?auto=compress&cs=tinysrgb&w=1600', 0 , false, ['Party', 'Meeting']),
    new Event(new Date(),  "Birthday party", 'Also when you use plain Lorem ipsum text, your design will look like a million other designs out there. With Random Text Generator your designs will look more unique while still containing text which truly means nothing.',
    'https://images.pexels.com/photos/903400/pexels-photo-903400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 25 , false, ['Party', 'Learning']),

];


const eventContainer = document.getElementById('events');
let displayBox;

window.addEventListener("load", () => {
    createPages();
    displayPageEvents(1);
});

function displayEvents(events){
    for(let i =0 ; i< events.length; i++){
        eventContainer.appendChild(createEventCard(events[i]));
    }
}

function clearScreen(){
    eventContainer.innerHTML = '';
}


function createEventCard(event){

    displayBox = createTag('div', 'event-card', null);

    let displayDate = createTag('div', 'left', null);
    let image = document.createElement('img');
    image.src = event.image;
    displayDate.appendChild(image);

    let date = createTag('div', 'date-time', null);
    date.classList.add(`dt${event.date.getMonth()}`);
    let dateText = createTag('p', 'date', getDaysLeft(event.date));
    let dateTime = createTag('p', 'time', event.date.getHours() + ':' + event.date.getMinutes());

    date.appendChild(dateText);
    date.appendChild(dateTime);
    displayDate.appendChild(date);


    let displayInfo = createTag('div', 'event-info', null);

    let eventTitle = createTag('h3', null, event.name)
    let displayDetails = createTag('p', 'event-detail', event.description);

    displayInfo.appendChild(eventTitle);
    displayInfo.appendChild(displayDetails);
    displayInfo.appendChild(createTags(event.tags));
    displayDate.appendChild(displayInfo);


    let buttonDiv = createTag('div', 'right', null);
    let price = createTag('p', 'time', '£' + event.price);
    price.classList.add('center');
    buttonDiv.appendChild(price);
    let button = createTag('a', 'button', event.attend ? "I will attend" : "Not interested");
    button.addEventListener('click', (e) => {
        e.target.innerHTML === "I will attend" ? e.target.innerHTML = "Not interested" : e.target.innerHTML = "I will attend";
    });
    buttonDiv.appendChild(button);

    displayDate.appendChild(buttonDiv);
    displayBox.appendChild(displayDate);

    return displayBox;

}

function createTags(tags){
    let tagDivs = createTag('div', 'tags', null);
    for(let i =0; i < tags.length; i++){
        let newTag = createTag('div', (tags[i]).toLowerCase(), tags[i]);
        newTag.style.height = "20px";
        newTag.style.marginTop = "2px";
        tagDivs.appendChild(newTag);
    }

    return tagDivs;
}
