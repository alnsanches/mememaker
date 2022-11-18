function enablePhotoUpload() {
    const imageInput = document.querySelector("#image-input")

    imageInput.addEventListener("change", function () {
        const reader = new FileReader()

        reader.addEventListener("load", () => {
            const uploadImage = reader.result

            changeMemePicture(uploadImage)
            // document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList() {
    const memesObject = [
        {
            "name": "Business Cat",
            "path": "pictures/business-cat.jpg"
        },
        {
            "name": "Capivara",
            "path": "pictures/capibara.jpg"
        },
        {
            "name": "Car",
            "path": "pictures/car.png"
        },
        {
            "name": "Cat",
            "path": "pictures/cat2.jpg"
        },
        {
            "name": "Creepy Condescending Wonka",
            "path": "pictures/creepy-condescending-wonka.jpg"
        },
        {
            "name": "Crying Peter Parker",
            "path": "pictures/crying-peter-parker.jpg"
        },
        {
            "name": "Laughing Leo",
            "path": "pictures/dicaprio.png"
        },
        {
            "name": "Distracted Boyfriend",
            "path": "pictures/distracted-boyfriend.png"
        },
        {
            "name": "Dog",
            "path": "pictures/dog.png"
        },
        {
            "name": "Elmo Fire",
            "path": "pictures/elmo-fire.jpg"
        },
        {
            "name": "Evil Raccoon",
            "path": "pictures/evil-raccoon.jpg"
        },
        {
            "name": "Explain",
            "path": "pictures/explain.jpg"
        },
        {
            "name": "Girl House in Fire",
            "path": "pictures/girl-house-in-fire.png"
        },
        {
            "name": "Girl Running",
            "path": "pictures/girl-running.jpg"
        },
        {
            "name": "Grandmother",
            "path": "pictures/grandmother.png"
        },
        {
            "name": "Jack Sparrow",
            "path": "pictures/jack-sparrow.jpg"
        },
        {
            "name": "Jay Jay Plane",
            "path": "pictures/jay-jay-plane.png"
        },
        {
            "name": "Kermit",
            "path": "pictures/kermit.jpg"
        },
        {
            "name": "Michael Jackson",
            "path": "pictures/michael-jackson.jpg"
        },
        {
            "name": "Jack Sparrow",
            "path": "pictures/jack-sparrow.jpg"
        },
        {
            "name": "Neck Vein Guy",
            "path": "pictures/neck-vein-guy.jpg"
        },
        {
            "name": "Nick Young",
            "path": "pictures/nick-young.jpg"
        },
        {
            "name": "Salty Bae",
            "path": "pictures/salty-bea.jpg"
        },
        {
            "name": "Scared Cat",
            "path": "pictures/scared-cat.jpg"
        },
        {
            "name": "Smeagol",
            "path": "pictures/smeagol.jpg"
        },
        {
            "name": "Sparta",
            "path": "pictures/sparta-leonidas.jpg"
        },
        {
            "name": "Spiderman Triple",
            "path": "pictures/spiderman.jpg"
        },
        {
            "name": "Success Kid",
            "path": "pictures/success-kid.jpg"
        },
        {
            "name": "The Flash",
            "path": "pictures/the-flash.png"
        },
        {
            "name": "Thinking",
            "path": "pictures/thinking.png"            
        },
        {
            "name": "Walk into Mordor",
            "path": "pictures/walk-into-mordor.png"
        },
        {
            "name": "Welcome Internet",
            "path": "pictures/welcome-internet.jpg"
        },
        {
            "name": "Yoda",
            "path": "pictures/yoda.jpg"            
        },
    ]
    return memesObject
}

async function createGallery(imageList) {
    const memeSelector = document.querySelector("#meme-list")

    imageList.forEach(picture => {
        let newOption = document.createElement("option")
        newOption.text = picture.name.toUpperCase()
        newOption.value = picture.path
        memeSelector.appendChild(newOption)
    });
}


async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}


async function main() {
    const memesImageList = await mapImageList()

    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[0].path)

}

main()