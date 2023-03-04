document.getElementById("navbar-motorworks").innerHTML =
    `   
    <!-- motorWorksSpinner Start Motor Works -->
    <div id="motorWorksSpinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="motorWorksSpinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Motor Works</span>
        </div>
    </div>
    <!-- motorWorksSpinner End Motor Works -->

    <!-- modal start Motor Works -->
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header-motorworks">
                Contact us
                <div class="close-btn">
                    &times;
                </div>
            </div>
            <br>
            <div class="row g-5" style="width: 100%;height: 100%">
                <div class="col-lg-6">
                    <p class="m-2">
                        <a href="https://goo.gl/maps/3yNKWD2SFm7wboXC7">
                            <i class="fa fa-map-marker-alt me-3"></i>locate us on map
                        </a>
                    </p>
                    <br>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3325547852833!2d73.9066703!3d18.5590401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13ddf6014b1%3A0x2df3060ce99affb9!2sTHE%20MOTOR%20WORKS%3A%20Best%20Car%20Garage%20Car%20Service%20Center%20Car%20Denting%20painting%20Car%20Ac%20Work%20Car%20Repairing%20In%20Viman%20Nagar!5e0!3m2!1sen!2sus!4v1676468267293!5m2!1sen!2sus"
                        style="border:3px solid white;width: 100%;height:70%" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div class="col-lg-6">
                    <p class="mb-2"><a href="tel:+91-8806730003"><i class="fa fa-phone-alt me-3"></i>+91-8806730003</a></p>
                    <p class="mb-2"><a href="mailto:themotorworkspune@gmail.com"><i
                                class="fa fa-envelope me-3"></i>Email us</a>
                    </p>
                    <br>
                    <p class="mb-2" style="color:white">
                        <b>
                            <i class="fa fa-comments me-3"></i>
                            connect with us
                        </b>
                    </p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social" target="blank"
                            href="https://m.facebook.com/themotorworkspune/"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social" target="blank"
                            href="https://api.whatsapp.com/send?phone=8806730003&text=Hello%2C%20Welcome%20to%20Motor%20Works."><i
                                class="fab fa-whatsapp"></i></a>
                        <a class="btn btn-outline-light btn-social" target="blank"
                            href="https://www.instagram.com/themotorworkspune/?igshid=Zjc2ZTc4Nzk%3D"><i
                                class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- modal ends Motor Works --> 
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top">
        <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img src="images/MotorWorksLogo.png" />
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="index.html" id="index" class="nav-item nav-link active">Home</a>
                <a href="service.html" id="service" class="nav-item nav-link active">Our Services</a>
                <a href="about.html" id="about" class="nav-item nav-link active">About Us</a>
                <a href="contacts.html" id="contacts" class="nav-item nav-link active">Contact Us</a>
            </div>
        </div>
    </nav>`;
