function colorChange() {
    var rect = document.querySelector(".rectangle")
    rect.addEventListener("mousemove", function (delts) {
        var rectLocation = rect.getBoundingClientRect();
        var mid = rectLocation.width / 2;
        // console.log(rectLocation)
        // console.log(delts.clientX)
        var pos = delts.clientX - rectLocation.left;
        // console.log("pos " + pos)

        if (pos > mid) {
            // console.log("right")
            var blueColor = gsap.utils.mapRange(mid, rectLocation.width, 0, 255, pos);
            gsap.to(rect, {
                backgroundColor: `rgba(0,0,${blueColor})`,
                ease: Power4,
            })
        }
        else {
            // console.log("left")
            var redColor = gsap.utils.mapRange(0, mid, 255, 0, pos);
            gsap.to(rect, {
                backgroundColor: `rgba(${redColor}, 0,0)`,
                ease: Power4,
            })
        }
    })

    rect.addEventListener("mouseleave", function () {
        gsap.to(rect, {
            backgroundColor: `rgba(225,225,225)`,
            ease: Power4,
        })
    })
}

colorChange()

