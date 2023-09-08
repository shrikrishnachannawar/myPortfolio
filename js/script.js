/*toggle icon navbar*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('.active')
    
};


/*=================== scroll section active link==============*/
let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{
    sections.forEach(sec=>
    {
        let top=window.screenY;
        let offset=sec.offset-150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id')

        if(top>= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector('header nav a[herf*='+id+']').classList.add('active');
            });
        }
    });

    /*sticky navbar*/
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100)

     /*remove toggle icon navbar when click navbar links (score)*/
     menuIcon.classList.remove('bx-x');
     navbar.classList.toggle('active')
};

/*scroll reveal*/
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200 });

    ScrollReveal().reveal('.home-contant, .heading',{origin:'top'});
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
    ScrollReveal().reveal('.home-contant h1, .about-img',{origin:'left'});
    ScrollReveal().reveal('.home-contant p, .about-contant',{origin:'right'});

    /* typed js*/
    const typed=new Typed('.multiple-text',{
        strings:['Data Analyst','Frontend Developer',' Machine Learning Engineer'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });

    function MoreLess(){
        var dots=document.getElementById("dots");
        var moretext=document.getElementById("more");
        var btntext=document.getElementById("btn")
        if(dots.style.display!='none'){
            dots.style.display='none';
            moretext.style.display="inline";
            btntext.innerHTML="Read Less";
        }

        else{
            dots.style.display='inline';
            moretext.style.display="none" ;
            btntext.innerHTML="Read More";
        }
    }
  
