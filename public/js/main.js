let searchBtn = document.querySelector(".search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector(".login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector(".form-close")
let menuBtn = document.querySelector(".menu-bar");
let navbar = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".vid-btn");

/** login pop-up form */
let userLoginForm = loginForm.querySelector("form");

/** get the errors */
const emailError = loginForm.querySelector(".error.email");
const passwordError = loginForm.querySelector(".error.password");



const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event)

    /** reset the errors */
    emailError.textContent = " ";
    passwordError.textContent = " ";

    /** get the form values */
    const email = userLoginForm.email.value;
    const password = userLoginForm.password.value;
    
    /** make a post request to the server */
    const res = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {"Content-Type":"application/json"}
    })

    const data = await res.json();
    console.log(data)
    if (data.errors) {
        emailError.textContent = data.errors.email;
        passwordError.textContent = data.errors.password;
    }
    
    if (data.user) {
        location.assign("/");
    }
}

userLoginForm.addEventListener("submit", handleSubmit)




window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");

    loginForm.classList.remove("active");

    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
}
searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
})

formClose.addEventListener("click", () => {
    loginForm.classList.remove("active");
});

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

videoBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector('.controls .active').classList.remove("active");
        btn.classList.add("active");

        let src = btn.getAttribute("data-src");
        document.querySelector(".video-slider").src = src;

    })
})



const packagesContainer = document.querySelector(".packages .box-container");

const generatePackages = () => {
    return (packagesContainer.innerHTML = packages.map(package => {
        const { id, title, imgUrl, destination, price, ratings } = package;

        return `
        <div id=product-id-${id} class="box">
            <img src=${imgUrl} alt=${title}>
            <div class="content">
                <h3><i class="fas fa-map-marker-alt"></i>${destination}</h3>
                <p>${title}</p>
                <div class="stars">
                    ${ratings.join("")}
                </div>
                <div class="price">$ ${price}</div>
                <a href="/api/booking/:${destination}" class="btn">book now</a>
            </div>
        </div>  
        `
    }).join("") )
}

generatePackages()


const galleryContainer = document.querySelector(".gallery .box-container");

const generateGallery = () => {
    return (galleryContainer.innerHTML = gallery.map(item => {
        const { galleryTitle, galleryImage } = item;

        return `
        <div id=gallery-id-${galleryTitle} class="box">
            <img src=${galleryImage} alt=${galleryTitle}>
            <div class="content">
                <h3>${galleryTitle}</h3>
                <a href="/" class="btn">see more</a>
            </div>
        </div>   
        `
    }).join(""))
}

generateGallery();


const sliderContainer = document.querySelector(".reviews .swiper .swiper-wrapper")

const generateReviewsSlider = () => {
    return (sliderContainer.innerHTML = testimonials.map(item => {
        const { name, title, testimonial, imgUrl, ratings } = item;

        return `
            <div class="swiper-slide">
                <div id=testimonial-id-${title} class="box">
                    <img src=${imgUrl} alt=${title} />
                    <h3>${name}</h3>
                    <p>${testimonial}</p>
                    <div class="stars">
                        ${ratings.join("")}
                    </div>
                </div>
            </div>
        `
    }).join(""))
}

generateReviewsSlider();

let testimonialSwiper = new Swiper(".swiper", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3
        }
    }
})


let brandSwiper = new Swiper(".brand-slider", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4
        },
        1200: {
            slidesPerView: 5
        }
    }
})


/**
 * ! BOOKING FROM THE HOME PAGE
 */

const homePageBookingForm = document.getElementById("home--page-booking-form");
const formSubmitBtn = homePageBookingForm.querySelector(".btn");

const destination = homePageBookingForm.querySelector("#location");
const guests = homePageBookingForm.querySelector("#guests");
const arrival = homePageBookingForm.querySelector("#arrival");
const departure = homePageBookingForm.querySelector("#departure");

homePageBookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const response = await fetch("/book", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "include",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            destination: destination.value,
            guests: guests.value,
            arrival: arrival.value,
            departure: departure.value
        })
    })

    if (response.ok) {
        location.assign("/api/booking/packages")
    }
    
})



/**
 * ! CONTACT FORM 
 */

const contactForm = document.getElementById("contact--form");
const contactSubmitBtn = contactForm.querySelector(".btn");

const contactFormEmail = contactForm.querySelector("#email");
const contactFormName = contactForm.querySelector("#fullname");
const contactFormPhone = contactForm.querySelector("#telephone");
const contactFormSubject = contactForm.querySelector("#subject");
const contactFormMessage = contactForm.querySelector("#message")

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const response = await fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        cache: 'no-cache',
        credentials: "include",
        body: JSON.stringify({
            fullName: contactFormName.value,
            userEmail: contactFormEmail.value,
            userPhoneNumber: contactFormPhone.value,
            userSubject: contactFormSubject.value,
            userMessage: contactFormMessage.value
        })

    });

    if (response.ok) {
        alert("Thank you for contacting us!!")
    }

        contactFormName.value = "",
        contactFormEmail.value = "",
        contactFormPhone.value = "",
        contactFormSubject.value = "",
        contactFormMessage.value = ""
    
})



