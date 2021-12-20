document.querySelectorAll(".boutonSound").forEach(
    (element, index, array) => {
        element.addEventListener('click',function () {
            s1 = document.getElementById('sound1')
            s1.pause();
            s1.addEventListener('click',function () {
                document.getElementById("sound1").play();
            });
            
            s2 = document.getElementById('sound2')
            s2.pause();
            s2.addEventListener('click',function () {
                document.getElementById("sound2").play();
            });
            
            s3 = document.getElementById('sound3')
            s3.pause();
            s3.addEventListener('click',function () {
                document.getElementById("sound3").play();
            });
            
            s4 = document.getElementById('sound4')
            s4.pause();
            s4.addEventListener('click',function () {
                document.getElementById("sound4").play();
            });
        });
    }
);