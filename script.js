gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
	smooth: 2, 
	effects: true, 
});



function animarPagina () {
// Animações Hero

//gsap.to = centro para o lado

//gsap.fom = do lado para o centro

gsap.from(".hero", {
    opacity: 0,
    duration: 4
})

gsap.from("picture:nth-child(2)", {
    y: 200,
    duration: 1
})

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 1
})

gsap.from(".card", {
    opacity: 0,
    stagger: 1,
    filter: "blur(10px)",
    // Só aparecer quando da o scroll
    scrollTrigger: {
        // Cheguei na div cards?, começa a animação
        trigger: ".cards",
        start: "0% 80%",
        end: "100% 70%",
        scrub: true
    }
})

gsap.registerPlugin(ScrollTrigger)

gsap.from(".secaoObrigado ul li", {
  opacity: 0,
  x: 120,
  duration: 2,
  filter: "blur(10px)",
  stagger: 1,
  scrollTrigger: {
    trigger: ".secaoObrigado ul",
    start: "top 80%",
    end: "bottom 50%",
    scrub: true,
  }
})

// Animações footer
gsap.from ("footer", {
    y: -200,
    imediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
})

// Letras surgindo
const grupoTextoSplit = document.querySelectorAll(".textoSplit");

grupoTextoSplit.forEach((textoUnicoSplit) => {
    const split = new SplitText(textoUnicoSplit, {
        type: "chars, lines, words"
    });
    
    gsap.from(split.chars, {
        y: 50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.05,
        scrollTrigger: {
            trigger: textoUnicoSplit,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
}

// PreLoader

const tl = gsap.timeline({
    onComplete() {
        animarPagina ()
        gsap.to("#preLoader", {
            opacity: 0,
            onComplete() {
                gsap.to("#preLoader", {
                    display:"none"
                })
            }
        })
    }
});

tl.to("#preLoader, path", {
    duration: 2,
    strokeDashoffset: 0,
})

tl.to("#preLoader, fill", {
    strokeDashoffset: rgb(168, 19, 19),
    duration: .5,
    strokeDashoffset: 0
})