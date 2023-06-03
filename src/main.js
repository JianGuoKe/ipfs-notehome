import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './base.scss'

import $ from 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

import 'jquery.easing'
// import ScrollReveal from 'scrollreveal'

import SlsTracker from '@aliyun-sls/web-track-browser';

console.log(
  `
    __ _____ _____ _____ _____ _____ _____ _____ _____ 
 __|  |     |  _  |   | |   __|  |  |     |  |  |   __|
|  |  |-   -|     | | | |  |  |  |  |  |  |    -|   __|
|_____|_____|__|__|_|___|_____|_____|_____|__|__|_____|
`
);

const opts = {
  host: 'cn-zhangjiakou.log.aliyuncs.com', // 所在地域的服务入口。例如cn-hangzhou.log.aliyuncs.com
  project: 'jianguoke', // Project名称。
  logstore: 'uba', // Logstore名称。
  time: 10, // 发送日志的时间间隔，默认是10秒。
  count: 10, // 发送日志的数量大小，默认是10条。
  topic: 'notehome',// 自定义日志主题。
  source: location.hostname ,
  tags: {
   cid: new Date().getTime().toString(),
   ua: navigator.userAgent,
   referer: document.referrer
  }
}
const tracker = new SlsTracker(opts);
 
tracker.send({
  page: document.title,
  type: 'open',
})

$('a').click(function(){
  var btn = $(this);
  tracker.send({
    page: document.title,
    type: 'click',
    url: btn.attr('href'),
    name: btn.text()
  })
})

// Smooth scrolling using jQuery easing
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 57)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function () {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 57
});

// Collapse Navbar
var navbarCollapse = function () {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Scroll reveal calls
// window.sr = ScrollReveal();
// sr.reveal('.sr-icons', {
//   duration: 600,
//   scale: 0.3,
//   distance: '0px'
// }, 200);
// sr.reveal('.sr-button', {
//   duration: 1000,
//   delay: 200
// });
// sr.reveal('.sr-contact', {
//   duration: 600,
//   scale: 0.3,
//   distance: '0px'
// }, 300);

