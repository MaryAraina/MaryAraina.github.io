// script.js

$(document).ready(function() {
  // Smooth scrolling for navigation links
  $('nav a').on('click', function(event) {
    // Check if the clicked link has a hash (anchor)
    if (this.hash !== "") {
      event.preventDefault(); // Prevent default behavior of anchor link
      const hash = this.hash; // Store the target hash value
      // Animate scroll to the target element with the specified offset
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800); // 800ms duration for smooth scroll
    }
  });

  // Enhanced form submission with jQuery
  $('form').on('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const email = $('#email').val(); // Get the email value from the form

    // Display a thank you message after form submission
    $('#message')
      .hide() // Hide the existing message
      .html(`Thank you for subscribing, ${email}!`) // Display a custom message
      .fadeIn(800); // Fade in the message with 800ms duration
    
    $(this).trigger('reset'); // Reset the form fields
  });

  // Hover effect for navigation items
  $('nav li').hover(
    function() { $(this).fadeOut(100).fadeIn(100); }, // On hover in, fade out and in quickly
    function() { $(this).css('opacity', '1'); } // On hover out, restore opacity
  );

  // Add animation to promo banner on hover
  $('#promoBanner').hover(
    function() { $(this).animate({opacity: 0.8}, 200); }, // On hover in, reduce opacity
    function() { $(this).animate({opacity: 1}, 200); } // On hover out, restore opacity
  );
});

// Isotope.js functionality for filtering card items
$(document).ready(function() {
  // Initialize Isotope grid layout for filtering
  const $grid = $('.card-container').isotope({
    itemSelector: '.card',
    layoutMode: 'fitRows',
    percentPosition: true
  });

  // Handle filter button click to filter items based on the selected data-filter attribute
  $('.filter-button').on('click', function() {
    const filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue }); // Apply the filter to the grid
  });

  // Handle trends content loading on button click
  $('#loadTrends').click(function() {
    let trendsContent = '<h3>Popular Beauty Trends of 2024</h3>';
    trendsContent += `
      <div class="trend">
        <h4>Skin Streaming: Minimalist Skincare Routines</h4>
        <img src="https://cdn.shopify.com/s/files/1/0342/3079/8482/products/SkinStreaming.jpg" alt="Skin Streaming">
        <p>Simplifying skincare by focusing on three to four essential products to prevent over-exfoliation and ingredient conflicts.</p>
      </div>
      <div class="trend">
        <h4>Honey Blonde Hair Color</h4>
        <img src="https://cdn.shopify.com/s/files/1/0342/3079/8482/products/HoneyBlonde.jpg" alt="Honey Blonde Hair">
        <p>A warm, golden hue that adds radiance, popularized by celebrities like Rihanna.</p>
      </div>
      <div class="trend">
        <h4>Peach Fuzz Makeup</h4>
        <img src="https://cdn.shopify.com/s/files/1/0342/3079/8482/products/PeachFuzz.jpg" alt="Peach Fuzz Makeup">
        <p>Utilizing Pantone's Color of the Year, this trend incorporates peach tones in blush, eyeshadow, and lips for a universally flattering look.</p>
      </div>
    `;
    $('#trendsContainer').html(trendsContent); // Inject trends content into the trends container
  });
});

// Handle the team members button click event
$(document).ready(function() {
  $('#loadTeamButton').on('click', function() {
    // Show the loading message while data is being fetched
    $('#loadingMessage').show();

    // Simulating the team members data
    const teamMembers = [
      {
        name: 'Mary Wilson',
        email: 'mary.wilson@example.com',
        phone: '240-484-3011'
      },
      {
        name: 'Layke Jones',
        email: 'layke.jones@example.com',
        phone: '336-555-0102'
      },
      {
        name: 'Jakale Mcdonald',
        email: 'jakale.mcdonald@example.com',
        phone: '336-555-0103'
      }
    ];

    // Hide the loading message once data is successfully received
    $('#loadingMessage').hide();

    // Create a list of team members
    let teamList = '<ul>';
    $.each(teamMembers, function(index, member) {
      teamList += `
        <li>
          <strong>${member.name}</strong><br>
          <em>Email:</em> ${member.email}<br>
          <em>Phone:</em> ${member.phone}
        </li>
      `;
    });
    teamList += '</ul>';

    // Inject the list into the 'teamInfo' div
    $('#teamInfo').html(teamList);
  });
});



// script.js



$(document).ready(function() {
  // Sample customer reviews (this can be fetched from an external API)
  const reviews = [
    { name: "Alice", review: "I love this product! It’s perfect for my needs." },
    { name: "Bob", review: "Great quality and fast delivery. Highly recommend." },
    { name: "Charlie", review: "Not as expected. The product didn’t meet my standards." },
    { name: "Diana", review: "Excellent customer service and amazing product!" }
  ];

  // jQuery UI datepicker
  $('#scheduleDate').datepicker();

  // When a date is selected, show the confirmation message
  $('#scheduleDate').on('change', function() {
    const selectedDate = $(this).val();
    if (selectedDate) {
      $('#selectedDate').text(selectedDate);
      $('#dateConfirmation').show();
    }
  });

  // Handle the button click event to load reviews
  $('#showReviews').click(function() {
    // Toggle the visibility of the reviews container
    $('#reviewsContainer').toggle();

    // If the reviews are not already loaded, display them
    if ($('#reviewsList').children().length === 0) {
      reviews.forEach(function(review) {
        // Append each review to the reviews list
        $('#reviewsList').append(`
          <li><strong>${review.name}:</strong> ${review.review}</li>
        `);
      });
    }
  });

  
$('#reviewForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the name and review text
    const name = $('#reviewName').val().trim();
    const reviewText = $('#reviewText').val().trim();

    // Log the values to check what's being received
    console.log(`Name: "${name}", Review: "${reviewText}"`);

    // Validation: Ensure both fields are filled
    if (name && reviewText) {
      // Add the new review to the list
      $('#reviewsList').prepend(`
        <li><strong>${name}:</strong> ${reviewText}</li>
      `);

      // Clear the input fields
      $('#reviewName').val('');
      $('#reviewText').val('');
    } else {
      // If the fields are empty, alert the user
      alert("Please enter both your name and review.");
    }
});

  

  // Simulate fetching new reviews via AJAX every 10 seconds
  setInterval(function() {
    // Simulate an AJAX request to fetch new reviews
    $.ajax({
      url: 'https://api.example.com/getNewReviews', // Replace with actual API URL
      method: 'GET',
      success: function(newReviews) {
        // Add the new reviews to the list
        newReviews.forEach(function(review) {
          $('#reviewsList').prepend(`
            <li><strong>${review.name}:</strong> ${review.review}</li>
          `);
        });
      },
      error: function() {
        console.log('Error fetching new reviews.');
      }
    });
  }, 10000); // Refresh every 10 seconds (10000ms)
});
