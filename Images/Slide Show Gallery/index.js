    
        const data = [ 'The Woods' , "Cinque Terre" , 'Mountains and fjords' , 'Northern Lights' , 'Nature and sunrise' , 'Snowy Mountains' ];
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