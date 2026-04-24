const float = document.querySelector(".float-container");
        const grid = document.querySelector(".grid-container");
        const flex = document.querySelector(".flex-container");

        const images = [
            { 
                img_url:"./public/nature1.avif",
                className:"left",
            },
            {
                img_url:'./public/nature4.jpg',
                className:"right",
            },
            
            {
                img_url:"./public/nature3.avif",
                className:"center"
            }
        ];

        images.forEach(
            img => float.innerHTML += `<img class=${img.className} src=${img.img_url} >`
        )

        images.forEach(
            img => grid.innerHTML += `<img class='grid-container__images' src=${img.img_url} >`
        )

        images.forEach(
            img => flex.innerHTML += `<img class= 'flex-container__images' src=${img.img_url} >`
        )