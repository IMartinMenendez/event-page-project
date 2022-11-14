const events = [new Event(new Date(new Date() - Math.random()*(1e+12)),  "Bergen International Film Festival", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
'https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 10 , false),
new Event(new Date(new Date() - Math.random()*(1e+12)),  "Wool Week", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
'https://images.pexels.com/photos/306046/pexels-photo-306046.jpeg?cs=srgb&dl=pexels-lukas-306046.jpg&fm=jpg&_gl=1*1gu8knw*_ga*MTI4NzI2MjI3Ni4xNjY4NDM2MDQ4*_ga_8JE65Q40S6*MTY2ODQ0MDM1OC4yLjAuMTY2ODQ0MDM1OC4wLjAuMA.', 20 , false),

new Event(new Date(new Date() - Math.random()*(1e+12)),  "Light park at Bergenhus Fortress", 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora saepe similique officia nam atque voluptatem ad necessitatibus consequuntur, nostrum repellendus.',
'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 20, true ),
];

const eventContainer = document.getElementById('event-container');

window.addEventListener("load", (event) => {
    displayEvents();
});

function displayEvents(){
    for(let i =0 ; i< events.length; i++){
        eventContainer.appendChild(createEventCard(events[i]));
    }
}


function createEventCard(event){

    let displayBox = createTag('div', 'event-card', null);

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
    displayDate.appendChild(displayInfo);

    let buttonDiv = createTag('div', 'right', null);
    let button = createTag('a', 'add-to-calender', event.attend ? "I will attend" : "Not interested");
    button.addEventListener('click', (e) => {
        e.target.innerHTML === "I will attend" ? e.target.innerHTML = "Not interested" : e.target.innerHTML = "I will attend";
    });
    buttonDiv.appendChild(button);

    displayDate.appendChild(buttonDiv);
    displayBox.appendChild(displayDate);

    return displayBox;

}

function createTag(tag, className, textTag){
    let newHtml = document.createElement(tag);

    if(className){
        newHtml.classList.add(className);
    }

    if(textTag){
        newHtml.innerHTML = textTag;
    }

    return newHtml;

}

function getDaysLeft(date){
    let today = new Date();

    let diff = Math.floor((Date.parse(date) - Date.parse(today)) / 86400000);
    return diff == 0 ? 'Today' : diff == 1 ? "Tomorrow" : 'in ' + -diff + ' days';
}
