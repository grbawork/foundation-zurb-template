import $ from 'jquery';
import 'what-input';
//import ib_country2phone from './ib_country2phone.js'; // add import statement 
//import ib_validatemail from './ib_validatemail.js'; // add import statement 

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

// $(document).ready(() => {
//   ib_country2phone.init();
//   ib_validatemail.init();
// }); // call your custom module however you'd like


$(document)
  // form validation passed, form will submit if submit event not returned false
  .on("formvalid.zf.abide", function(ev,frm) {
    //console.log("Form id "+frm.attr('id')+" is valid");
    // ajax post form
    var myPhone = $("#mobile_phone").val();
    var myCountryName = $("#country option:selected").text();
    //$('input[name=Redirect]').val("/ru/kampaniya/infobip-i-microsoft-azure-evolyutsiya-kliyentskogo-opyta/spasibo?vm=ev-wb-microsoft-cx");
    //console.log("Entered Phone: "+myPhone);
    //console.log("Selected Country ISO Code: "+myCountryIso);
    //console.log("Selected Country Name: "+myCountryName);
    //add that country to value
    $('#country').append('<option value="'+myCountryName+'" selected="selected">'+myCountryName+'</option>');
    //check value before post
    var myCountryName = $("#country").val();
    //console.log("Selected Country ISO Code to Name: "+myCountryName);
    //double check if number changed
    myPhone = $("#mobile_phone").val();
    //console.log("Entered Phone: "+myPhone);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
    'event': 'trackInteraction',
    'eventCategory': 'Form',
    'eventAction': 'Submit',
    'eventLabel': 'Webinar Signup'
    });
  })
  // to prevent form from submitting upon successful validation
  .on("submit", function(ev) {
    /*
    ev.preventDefault();
    console.log("Submit for form id "+ev.target.id+" intercepted");
    var myCountryName = $("#country").val();
    console.log("Selected Country ISO Code to Name: "+myCountryName);
    */
  });

  

  //CHANGE NAV ITEM COLOR ON SCROLL
  if ($(window).width() >= 1024) {
    // $(function() {
    //   var header = $("#nav-neg");
  
    //   $(window).scroll(function() {
    //       var scroll = $(window).scrollTop();
    //       if (scroll >= 710) {
    //           header.addClass("light");
    //       } else {
    //           header.removeClass("light");
    //       }
    //   });
    // });
    var stickyOffset = $("#nav-neg").offset();
    var $contentDivs = $(".section-content");
    $(document).scroll(function() {
        $contentDivs.each(function(k) {
            var _thisOffset = $(this).offset();
            var _actPosition = _thisOffset.top - $(window).scrollTop();
            if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 0) {
                $("#nav-neg").removeClass("light dark").addClass($(this).hasClass("light") ? "light" : "dark");
                return false;
            }
        });
    });
 }

 //VIDEO MODAL
$('.without-overlay').click(function(e){
  var loc = document.getElementById('ib-video').src;
  var stoploc = loc.replace("?autoplay=1", "");
  document.getElementById('ib-video').setAttribute('src', stoploc);
});

$('.playVideo').click(function(e){
  var loc = document.getElementById('ib-video').src;
  var autoloc = loc + "?autoplay=1";
  document.getElementById('ib-video').setAttribute('src', autoloc);
});


// HIDE MENU ON ITEM CLICK
if(($(window).width() <= 1440)) {
  $('#toggle-menu li a').click(function() { 
    $('#toggle-menu').css('display', 'none');
  });
};