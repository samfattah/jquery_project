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
        priceText = '$9.00 /mo'
        break;
      case 'yearly':
        priceText = '$7.00 /mo'
        break;
    }
    // this changes the value after you make a different selection
    // # is an ID so this calls ID and makes the change
    $('#price').text(priceText);
  });

});
