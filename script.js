
const getTarotImages = async () => {
    const response = await fetch('http://127.0.0.1:3000/tarot.json', {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    })
    const tarotData = await response.json();
    const tarotImages = tarotData.tarot
    const tarotImageArray = tarotImages.map(card => {
        return card;
    })
    postData(tarotImageArray)
}
const postData = (data) => {
    console.log("Data")
    console.log(data)
    let tarot_index = Math.floor(Math.random() * data.length)
    console.log("Index")
    console.log(tarot_index)
    let selected_image = data[tarot_index].image
    console.log("Image")
    console.log(selected_image)
    let fortune = data[tarot_index].desc
    console.log("Fortune")
    console.log(fortune)
    
    document.getElementById('flip-card-id').src = `images/${selected_image}`
    document.getElementById("fortune").textContent = fortune;
}

const scroll = document.getElementById("scrollLink")

function rollScroll(){
    const scroll = document.getElementById("scrollLink")
    scroll.scrollIntoView({ behavior: "smooth"});
}
