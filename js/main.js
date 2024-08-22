(function ($) {
    "use strict";
    window.addEventListener('load', function() {
        const scrollToSection = localStorage.getItem("scrollTo");
    
        if (scrollToSection && document.getElementById(scrollToSection)) {
            document.getElementById(scrollToSection).scrollIntoView({ behavior: 'smooth' });
            localStorage.removeItem("scrollTo"); // Clean up after scrolling
        }
    });
    
    function redirectIndexToHome() {
    const currentPath = window.location.pathname;

    // Check if the current URL path contains 'index'
    if (currentPath.includes('index')) {
        // Construct the new URL
        const newPath = currentPath.replace('index', 'home');
        // Redirect to the new URL
        window.location.replace(newPath);
    }
}
    
      
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('nav-sticky');
        } else {
            $('#nav').removeClass('nav-sticky');
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a[data-target]');
    
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
    function navigateTo(pageName, url) {
        // Encode the page name for use in the URL
        const encodedName = encodeURIComponent(pageName);
        
        // Update the URL with the new page name
        window.location.href = `${encodedName}`;
    }
        
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills section
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    

    // Clients carousel
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });
    

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });

    $("#sendEmailButton").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var msg = $("#message").val();

        if (name && email && subject && msg) {
            var mailtoLink = "mailto:Contactus@deltainfosec.ca?subject=" 
                            + encodeURIComponent(subject) 
                            + "&body=" 
                            + encodeURIComponent(msg + "\n\nRegards,\n" + name + "\n");

            window.location.href = mailtoLink;
        } else {
            alert("Please fill in all fields before sending the message.");
        }
    });
    // Call the function on page load
window.onload = redirectIndexToHome;
    // Get the button that opens the modal
    /*var contactLink = $("#contact-link");
    var contact = $("#cont");
    // Get the <span> element that closes the modal
    var span = $(".close");

    // Get the send email button
    var sendEmailButton = $("#sendEmailButton");

    // When the user clicks the button, open the modal 
    contactLink.click(function() {
        modal.css("display", "block");
        $("#contactForm")[0].reset();
    });
    contact.click(function() {
        modal.css("display", "block");
        $("#contactForm")[0].reset();
    });
    // When the user clicks on <span> (x), close the modal
    span.click(function() {
        modal.css("display", "none");
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.css("display", "none");
        }
    });

    // When the user clicks the send email button, open mail client
    sendEmailButton.click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var msg=$("#message").val();
        var mailtoLink = "mailto:Contactus@deltainfosec.ca?subject=" + encodeURIComponent(subject) + "&body=" +encodeURIComponent(msg+"\n") + encodeURIComponent("\n"+"\n"+  "Regards,\n" + name + "\n");
        window.location.href = mailtoLink;
    });
    */
    

    // When Blog link is clicked, open modal
   /* $(".nav-link.blog-link,#loc").click(function(e) {
        e.preventDefault(); // Prevent default link behavior (navigating to a new page)
        openGoogleMapsModal();
    });


    // Close modal when close button (X) is clicked
    $(".close").click(function() {
        closeGoogleMapsModal();
    });

    // Close modal when clicking outside the modal content
    $(window).click(function(event) {
        var modal = $("#googleMapsModal");
        if (event.target === modal[0]) {
            closeGoogleMapsModal();
        }
    });

    // Close modal when ESC key is pressed
    $(document).keyup(function(event) {
        if (event.key === "Escape") {
            closeGoogleMapsModal();
        }
    });
*/
})(jQuery);

