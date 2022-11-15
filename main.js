const events =
[
    new Event(new Date(new Date() - Math.random()*(1e+12)),  "Bergen International Film Festival", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
    'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 10 , false, ['Learning']),
    new Event(new Date(new Date() - Math.random()*(1e+12)),  "Wool Week", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
    'https://images.pexels.com/photos/306046/pexels-photo-306046.jpeg?cs=srgb&dl=pexels-lukas-306046.jpg&fm=jpg&_gl=1*1gu8knw*_ga*MTI4NzI2MjI3Ni4xNjY4NDM2MDQ4*_ga_8JE65Q40S6*MTY2ODQ0MDM1OC4yLjAuMTY2ODQ0MDM1OC4wLjAuMA.', 20 , false, ['Meeting', 'Party']),
    new Event(new Date(new Date() - Math.random()*(1e+12)),  "Light park at Bergenhus Fortress", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
    'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 20, true, ['Meeting'] ),
];


const eventContainer = document.getElementById('events');
let displayBox;

window.addEventListener("load", () => {
    displayEvents(events);
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
