$(document).ready((function(){$(window).on("load scroll",(function(){$(window).scrollTop()<=120?$(".main-h-header").removeClass("sticky"):$(".main-h-header").addClass("sticky")})),$(window).on("load scroll",(function(){$(window).scrollTop()<=20?$(".main-h-header-mobile").removeClass("sticky"):$(".main-h-header-mobile").addClass("sticky")})),$(".menu-animate").on("click",(function(){$(this).toggleClass("open"),$(".main-menu-mobile").toggleClass("is-show")})),$(".accordion li:first-child").addClass("is-show"),$(".accordion li").on("click",(function(){$(".accordion li").removeClass("is-show"),$(this).addClass("is-show")})),document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault(),$(".h-header__menu a").removeClass("active"),this.classList.add("active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}),$(window).on("load scroll",(function(){var e=$('.h-header__menu a[href^="#"]');const o=$(window).scrollTop(),s=document.getElementById("queEs"),a=document.getElementById("conoceMas"),n=document.getElementById("aprendePrevenir"),t=document.getElementById("preguntasFrecuentes");o>=s.offsetTop&&o<a.offsetTop&&(e.removeClass("active"),$('.h-header__menu a[href="#queEs"]').addClass("active")),o>=a.offsetTop&&o<n.offsetTop&&(e.removeClass("active"),$('.h-header__menu a[href="#conoceMas"]').addClass("active")),o>=n.offsetTop&&o<t.offsetTop&&(e.removeClass("active"),$('.h-header__menu a[href="#aprendePrevenir"]').addClass("active")),o>=t.offsetTop&&(e.removeClass("active"),$('.h-header__menu a[href="#preguntasFrecuentes"]').addClass("active"))}))}));