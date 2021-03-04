        let i = 0;

        let box1 = document.getElementById("item-client1");
        let box2 = document.getElementById("item-client2");
        let box3 = document.getElementById("item-client3");
        let dot1 = document.querySelector(".dot1");
        let dot2 = document.querySelector(".dot2");
        let dot3 = document.querySelector(".dot3");
        dot1.onclick = function () {
            box1.style.opacity = 1;
            box2.style.opacity = 0;
            box3.style.opacity = 0;
            i = 0;
        }
        dot2.onclick = function () {
            box1.style.opacity = 0;
            box2.style.opacity = 1;
            box3.style.opacity = 0;
            i = 1;
        }
        dot3.onclick = function () {
            box1.style.opacity = 0;
            box2.style.opacity = 0;
            box3.style.opacity = 1;
            i = 2;
        }
        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 37) {
                right();
            }
        });
        document.addEventListener("keydown", (e) => {
            if (e.keyCode == 39 ) {
                right();
            }
        });

       
