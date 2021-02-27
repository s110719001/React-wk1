
$(function(){
    $(window).scroll(function() {
     if($(this).scrollTop() > 50){
      $('.header').stop().animate({top:"-200px"});
      $('.list').stop().animate({top:"-200px"});
      $('.logoline').stop().animate({top:"-200px"});
     }
     else{
      $('.header').stop().animate({top:"0px"});
      $('.list').stop().animate({top:"0px"});
      $('.logoline').stop().animate({top:"0.5px"});
     }
    }).scroll();
   });
   $(document).ready(function(){
    $('.itemslick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });
  $(document).ready(function(){
    $('#nav-icon1').click(function(){
      $(this).toggleClass('open');
      document.getElementsByClassName('.hamlist').style.display='block';
    });
  });
  var firebaseConfig = {
    apiKey: "AIzaSyCNGaOOLqRce39-8gdQTcifKj3VepmW6Qg",
    authDomain: "final-12e95.firebaseapp.com",
    databaseURL: "https://final-12e95.firebaseio.com",
    projectId: "final-12e95",
    storageBucket: "final-12e95.appspot.com",
    messagingSenderId: "408463186181",
    appId: "1:408463186181:web:fb9cbdaead68f8fe70bf6c",
    measurementId: "G-QCLFPG51D7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.initializeApp(config);

var db = firebase.firestore();


$(document).ready(function () {

  // Load JSON file
  let openingAnimWindow = document.querySelector('#openingLottie');
  let openingAnimData = {
    container: openingAnimWindow,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true,
    // path: 'json/download-icon.json'
    path: 'https://assets4.lottiefiles.com/packages/lf20_gX4IKB.json'
  };
  // set bodymovin
  let openingAnim = bodymovin.loadAnimation(openingAnimData);



});