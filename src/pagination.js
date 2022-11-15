function calculatePages(){
    return Math.ceil(events.length / 5);
}

function createPages(){
    let totalPages = calculatePages();
    let paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    for(let i = 0; i< totalPages; i++){
        let newPage = createTag('a', null, i + 1);
        newPage.addEventListener('click', (e) => {
            let page = Number(e.target.innerHTML);
            displayPageEvents(page);
        });
        paginationDiv.appendChild(newPage);
    }

    return totalPages;

}

function displayPageEvents(page){
    let currenntPage = events.slice((page - 1 ) * 5, page * 5);
    clearScreen();
    displayEvents(currenntPage)
}
