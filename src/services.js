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

