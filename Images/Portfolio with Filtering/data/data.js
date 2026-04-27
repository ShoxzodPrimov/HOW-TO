import images from "./server.js";
        const imgTags = 
        [
            images.nature.map( img => `
            <div class="items">
                <img src = "./src/assets/img/${img.img_url}">
                <h1>${img.title}</h1>
                <p>Lorem ipsum dolor..</p>
            </div>`).join(''),

            images.cars.map( img => `
            <div class="items">
                <img src = "./src/assets/img/${img.img_url}">
                <h1>${img.title}</h1>
                <p>Lorem ipsum dolor..</p>
            </div>`).join(''),

            images.human.map( img => `
            <div class="items">
                <img src = "./src/assets/img/${img.img_url}">
                <h1>${img.title}</h1>
                <p>Lorem ipsum dolor..</p>
            </div>`).join(''),
        ];

export default imgTags;