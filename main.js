$(document).ready(function(){
  // this is grabbing the selector 'plan'
  $('#plan').on('change', function() {
    var priceText;
    // switch is similar to case statement in ruby
    switch(this.value) {
      case 'monthly':
        priceText = '$10.00 /mo';
        break;
      case 'quarterly':
        priceText = '$9.00 /mo';
        break;
      case 'yearly':
        priceText = '$7.00 /mo';
        break;
    }
    // this changes the value after you make a different selection
    // # is an ID so this calls ID and makes the change
    $('#price').text(priceText);
  });

  $('#add').on('click', function() {
    var plan = $('#plan');
    var installment = plan.val();
    var price = $('#price').text();
    var inCart = $('#in-cart');
    var numeric = price.replace(/[[A-Za-z$\/\s]/g, '');
    var data = 'data-price="' + numeric + '" data-plan="' + installment + '"';
    // ES5
    inCart.append('<li class="entry"' + data + '>' + installment + ' - ' + price + '<button class="remove">X</button></li>');
    // ES6
    // inCart.append(`<li class='entry' ${data}> ${installment} - ${price} </li>`);
    updateTotal();
  });

  function updateTotal() {
    var total = 0;
    var entries = $('.entry');

    if(entries.length)
      $('#empty').show();
    else 
      $('#empty').hide();

    // classes are saved as an array
    entries.each( function(index, entry) {
      var data = $(entry).data();
      var installment = data.plan;
      var price = parseFloat(data.price);
      switch(installment) {
        case 'monthly':
          total += price;
          break;
        case 'quarterly':
          total += price * 3;
          break;
        case 'yearly':
          total += price * 12;
          break;
      }
    });

    $('#total').text('$' + total);
  }

  $('#empty').on('click', function() {
   $('#in-cart').empty();
   updateTotal();
  });


  $(document).on('click', '.remove', function() {
    $(this).parents('li').remove();
    updateTotal();
    // alert('Button clicked');
    // this alert will show up once the button is clicked
  });

  $('#display-cart').on('click', function() {
    var cart = $('#cart');
    var button = $(this);
    
    if(button.text() === 'Hide Cart')
      button.text('Show Cart');
    else 
      button.text('Hide Cart');

    cart.slideToggle();
  });

  $('#purchase').on('click',function(){
    $('#complete')
    .html('<h2>PURCHASE COMPLETE</h2>')
    .css({
      'backgroun-color': '#bca',
      'width': '25%',
      'border': '1px solid green',
      'text-align': 'center',
    })
    .animate({
      width: '95%',
      opacity: 0.4,
      marginLeft: '0.6in',
      fontSize: '3em',
      borderWidth: '10px'
    }, 1500 );
  })

});
