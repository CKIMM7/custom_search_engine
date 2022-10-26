const searchBtn = document.querySelector('#search-btn');
const luckyBtn = document.querySelector('#rand-btn');

const input = document.querySelector('#input');
const resultsDiv = document.querySelector('#results');
const ul = document.querySelector('#resultsContainer');

searchBtn.addEventListener('click', search)
luckyBtn.addEventListener('click', searchLucky)

let searchResultsGlobal;

function search (e) {
    e.preventDefault();
    if (!input.value) return "Type something!";
    console.log(input.value);   
    callGoogle (input.value);
};

async function callGoogle (q) {

    let endPoint = `http://localhost:3000/search/${q}`

    const res =  await fetch(endPoint);
    const data = await res.json();
    
    searchResultsGlobal = data;

    displayResults ()

    return data;
};

function displayResults () {


    if(ul.childNodes.length > 2) {
        console.log(ul.childNodes.length)
        ul.replaceChildren()
    }

    searchResultsGlobal.items.forEach(element => {

        const li = document.createElement('li');
        const title = document.createElement('p');
        const htmlTitle = document.createElement('p');
        const snippet = document.createElement('p');
        const link = document.createElement('p');
        const a = document.createElement('a');

        title.textContent = element.title;
        title.classList.add("title");
        snippet.textContent = element.snippet;
        a.textContent = 'More Info';
        a.href = element.link;
        a.classList.add("link");

        li.append(title);
        li.append(snippet);
        li.append(a);

        ul.append(li);

    });
}

function randDomGen () {
    let randNum = Math.floor((Math.random() * searchResultsGlobal.items.length));
    console.log(randNum);
    return randNum;
}

function searchLucky (e) {
    e.preventDefault();
    console.log(searchResultsGlobal.items[randDomGen()].link)
    window.location.href = `${searchResultsGlobal.items[randDomGen()].link}`;
    
    //console.log('lucky serach')
    return;
}





