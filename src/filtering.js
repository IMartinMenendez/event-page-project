let meetingFilter = document.getElementById('meeting-filter').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('meeting-pressed')) {
        evt.target.classList.remove('meeting-pressed');
        removeClassByElementId('party-filter', 'party-pressed');
        removeClassByElementId('learning-filter', 'party-pressed');
        clearScreen();
        displayEvents(events);
    } else {
        evt.target.classList.add('meeting-pressed');
        removeClassByElementId('party-filter', 'party-pressed');
        removeClassByElementId('learning-filter', 'party-pressed');
        filter('Meeting');
    }
});
let partyFilter = document.getElementById('party-filter').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('party-pressed')) {
        removeClassByElementId('learning-filter', 'learning-pressed');
        removeClassByElementId('meeting-filter', 'meeting-pressed');
        evt.target.classList.remove('party-pressed');
        clearScreen();
        displayEvents(events);
    } else {
        evt.target.classList.add('party-pressed');
        removeClassByElementId('learning-filter', 'learning-pressed');
        removeClassByElementId('meeting-filter', 'meeting-pressed');
        filter('Party');
    }
});
let learningFilter = document.getElementById('learning-filter').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('learning-pressed')) {
        evt.target.classList.remove('learning-pressed');
        removeClassByElementId('party-filter', 'party-pressed');
        removeClassByElementId('meeting-filter', 'meeting-pressed');
        clearScreen();
        displayEvents(events);
    } else {
        removeClassByElementId('party-filter', 'party-pressed');
        removeClassByElementId('meeting-filter', 'meeting-pressed');
        evt.target.classList.add('learning-pressed');
        filter('Learning');
    }
});

let textInput = document.getElementById('filterName').addEventListener('keydown', (evt) => {
    if(evt.key == 'Enter' && evt.target.value != ''){
        evt.preventDefault();
        filterByText(evt.target.value);
    } else if(evt.key == 'Enter' && evt.target.value === ''){
        clearScreen();
        displayPageEvents(0);
    }
})

function filter(tag){
    clearScreen();
    let eventsFound = [];
    events.map(event => {
        if(event && event._tags){
            let found = event._tags.find(x => x == tag);
            if(found){
                eventsFound.push(event);
            }
        }
    });

    displayEvents(eventsFound);

}

function filterByText(text){
    clearScreen();
    let eventsFound = [];

    events.map(event => {
        if(event && event._tags){
            let found = event._name.includes(text) || event._description.includes(text) || event._price == text;
            if(found){
                eventsFound.push(event);
            }
        }
    });

    displayEvents(eventsFound);
}

function removeClassByElementId(id, className){
        document.getElementById(id).classList.remove(className);
}

document.getElementById('meeting').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('meeting-added')) {
        evt.target.classList.remove('meeting-added');
    } else {
        evt.target.classList.add('meeting-added');
    }
});

document.getElementById('party').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('party-added')) {
        evt.target.classList.remove('party-added');
    } else {
        evt.target.classList.add('party-added');
    }
});

document.getElementById('learning').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('learning-added')) {
        evt.target.classList.remove('learning-added');
    } else {
        evt.target.classList.add('learning-added');
    }
});
