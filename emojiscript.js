const SearchEmoji = e=>
{
    e.preventDefault();
    const value = document.getElementById("search_field").value;
    console.log(value);
    displaySearchResults(value);
    return false;
}
const autosearch = e=>
{
    const value =e.target.value;
    console.log(value);
    displaySearchResults(value);
}

const displaySearchResults = (SearchQuery="")=>
{
    const filterd = emojilist.filter( e =>
        {
            if(e.description.indexOf(SearchQuery)!= -1){ return true;}

            if(e.aliases.some(elem => elem.startsWith(SearchQuery))){return true;}

            if(e.tags.some(elem =>elem.startsWith(SearchQuery))){return true;}
        });

        const parent = document.getElementById("search_result_container");
        parent.innerHTML="";
        filterd.forEach(e=>
            {
                const new_row = document.createElement('tr');
                const new_emoji = document.createElement('td');
                const new_aliases = document.createElement('td');
                const new_desc = document.createElement('td');

                new_emoji.innerText = e.emoji;
                new_aliases.innerText=e.aliases.join(", ");
                new_desc.innerText=e.description.join;
                new_aliases.innerText = new_aliases.innerText.replaceAll('_', " ");


                new_emoji.classList.add("emoji");
                new_aliases.classList.add("aliases");
                new_desc.classList.add("desc");

                new_row.appendChild(new_emoji);
                new_row.appendChild(new_aliases);
                new_row.appendChild(new_desc);

                parent.appendChild(new_row);


            })



}





document.getElementById("Search_form").addEventListener('submit', SearchEmoji);
document.getElementById("search_field").addEventListener("keyup", autosearch);
window.onload = ()=> displaySearchResults();
