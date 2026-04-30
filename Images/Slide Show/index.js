 const left = document.querySelector(".left");
        const right = document.querySelector(".right");
        const images = document.querySelector("img");
        const caption = document.querySelector(".caption");
        const dotes = document.querySelectorAll(".dotes");
        const dote = document.querySelector(".dote");
        const page = document.querySelector(".page");
        let count = 0;

        const img = ["nature1.avif" , "nature2.jpg" , 'nature3.avif'];
        const text = ["Caption Text" , "Caption Two" , 'Caption Three'];

        const direction = {
            plus(number) {
                images.src = `./public/${img[number]}`;
                clearDote(number);
                page.textContent = +number + 1;
                images.classList.add("opacity");

                setTimeout( 
                    () => {
                        images.classList.remove("opacity");
                } ,  500 )
            },

            minus(number) {
                const index = img.length + number;
                images.src = `./public/${img[index]}`;
                images.classList.add("opacity");
                clearDote(number);
                page.textContent = index + 1;
                
                setTimeout( 
                    () => {
                        images.classList.remove("opacity");
                } ,  500 )
            }
        };

        const { minus , plus } = direction;

        function clearDote(number) {
           dotes.forEach( dote => dote.classList.remove("active"))

           if ( number < 0 ) {
                dotes[ dotes.length + number].classList.add("active");
                caption.textContent =  text[text.length + number];
                return
           }

            dotes[number].classList.add("active");
            caption.textContent = text[number];
        }

        dote.onclick = function(e) {
            if (e.target.className === "dote") {
                return
            }

            plus(e.target.value);
            count = e.target.value;
        }

        right.onclick = function() {
            if ( count >= img.length - 1 ) {
                count = 0;
                plus(count);
                return
            }

            count++;

            if ( count < 0 ) {
                minus(count);
                return
            }

            plus(count);
        }

        left.onclick = function() {
            count--;
            if ( count < 0 ) {
                if ( count <= -img.length ) {
                    count = 0;
                    plus(count);
                    return
                }

                minus(count);
                return
            }

            plus(count);
        }