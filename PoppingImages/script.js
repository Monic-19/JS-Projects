const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        //console.log(now - prev, delay);

        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

function getRndInteger(min, max) {
    return Math.floor( (Math.random() * (max - min + 1) ) + min );
}



var center = document.querySelector(".center")
    .addEventListener("mouseover", throttleFunction((delts) => {
        //console.log("Clicked")
        // less repetation code

        images = [
            "https://images.unsplash.com/photo-1694807865565-70252084fa27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80",
            "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
            "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2880&q=80",
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80",
            "https://images.unsplash.com/photo-1620921575116-fb8902865f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80",
            "https://images.unsplash.com/photo-1531160038068-e8e80b3318c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
            "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
            "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
            "https://images.unsplash.com/photo-1533910534207-90f31029a78e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
        
        ];

        var div = document.createElement("div");
        div.classList.add('imagediv');
        div.style.left = delts.clientX+'px';
        div.style.top = delts.clientY+'px';
        var degree = getRndInteger(-15,15);
        //console.log(degree + "deg")
        div.style.transform = `rotate(${degree}deg)`;


        // set image

        var image = document.createElement("img");
        let src = images[Math.floor(Math.random() * 10)];
        image.setAttribute("src" , src);
        div.appendChild(image);

        document.body.appendChild(div);

        gsap.to(image, {
            y : "0",
            ease : Power1,
            })

        gsap.to(image, {
            y : "100%",
            ease : Power2,
            delay : .5
        })

        setTimeout(function(){
           div.remove();  
        },2000)

    }, 4)
);




