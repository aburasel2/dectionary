const handleSearch = () => {
    const inputSearch = document.getElementById("input-search").value;
    console.log(inputSearch)
    if (inputSearch) {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputSearch}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.title == "No Definitions Found") {
                    alert(data.message)
                } else {
                    displayData(data)
                }
            });
    } else {
        alert("empty data not allow");
    }
}
const displayData = (data) => {
    // console.log(data[0])
    const parentContainer = document.getElementById("audio-container")
    data[0].phonetics.forEach(element => {

        console.log(element)
        const audio = document.createElement("audio");
        audio.src = element.audio;
        const btn = document.createElement("button")
        btn.innerHTML = "play";
        btn.onclick = () => {
            audio.play();
        }
        const container = document.createElement("div");
        parentContainer.appendChild(audio)
        container.appendChild(btn)
            // console.log(parentContainer)
        parentContainer.appendChild(container)


    });
}