     // const container = document.querySelector('.container');
    
        const data = [ 'The Woods' , "Cinque Terre" , 'Mountains and fjords' , 'Northern Lights' , 'Nature and sunrise' , 'Snowy Mountains' ];
        // const img_url = [ 'img_woods.jpg' , 'img_5terre_wide.jpg' , 'img_mountains_wide.jpg' , 'img_lights_wide.jpg' , 'img_nature.jpg' , 'img_snow_wide.jpg' ];

        // function classChange(className) {
        //     return  img_url.map(
        //                  item => `<img class = ${className} src =  "./assets/${item}">`
        //             ).join('');
        // }

        // container.innerHTML = classChange('images');



        let count = 0;
        const images = document.querySelectorAll(".images");
        const next = document.querySelector(".next");
        const prev = document.querySelector('.prev');
        const name = document.querySelector(".name");
        const order = document.querySelector(".order");
        const previews = document.querySelectorAll('.previews');

        next.onclick = function() {
            count++;

            if ( count >= images.length )
                count = 0;

            sameActions(count)
        }

        prev.onclick = function() {
            count--;

            if ( count < 0 )
                count = images.length - 1;

            sameActions(count);
        }

        function currentSlide(current) {
            sameActions(current)          
        }


        function sameActions(current) {
            images.forEach(
                item => item.style.display = "none"
            );

            previews.forEach(
                item => item.style.opacity = "0.5"
            )

            images[current].style.display = 'block';
            name.textContent = data[current];
            order.textContent = current + 1;
            previews[current].style.opacity = '1';
        }