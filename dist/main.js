!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);(()=>{const t=document.querySelector(".club-select"),e=t.querySelector("ul");t.addEventListener("click",()=>{e.style.display?e.style.display="":e.style.display="inline-block"})})();var o=(t,e,n)=>{const o=document.querySelector(t),i=document.getElementById(e);if(!i)throw console.log("ошибка");o?o.addEventListener("click",()=>{n&&(o.style.display="none"),i.style.display="block"}):(n&&(o.style.display="none"),i.style.display="block"),i.addEventListener("click",t=>{const e=t.target;(e.classList.contains("close_icon")||e.classList.contains("close-btn")||!e.closest(".form-content"))&&(i.style.display="")})};(()=>{const t=document.querySelector(".menu-button"),e=document.querySelector(".popup-menu"),n=document.querySelector(".top-menu"),o=()=>{innerWidth<=768&&(t.style.display="block",t.addEventListener("click",()=>{e.style.display="flex"}),e.addEventListener("click",t=>{const n=t.target;(n.matches(".close-menu-btn img")||n.closest(".scroll"))&&(e.style.display="")}),window.addEventListener("scroll",()=>{0===n.getBoundingClientRect().top&&(n.style.cssText=""),n.getBoundingClientRect().top<0&&innerWidth<768&&(n.style.cssText="\n\t\t\t\t\t\t\tposition: fixed;\n\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t")}))};window.addEventListener("resize",()=>{innerWidth>768?(t.style.display="",e.style.display="",n.style.cssText=""):o()}),o()})();var i=(t,e,n)=>{const o=document.getElementById(e),i=document.getElementById(t),s=document.querySelector(n);let r;i&&window.addEventListener("scroll",()=>{r=o.getBoundingClientRect().top,i.style.display=r<=0?"block":""});const l=()=>{let t,e=0;const n=o=>{if(e=o,s){if(s.offsetTop-Math.abs(document.documentElement.scrollTop)<=50||document.documentElement.scrollHeight-Math.abs(document.documentElement.scrollTop)<=document.documentElement.clientHeight)return void(document.documentElement.scrollTop=s.offsetTop);s.offsetTop>document.documentElement.scrollTop&&(document.documentElement.scrollTop+=50),s.offsetTop<document.documentElement.scrollTop&&(document.documentElement.scrollTop-=50),t=requestAnimationFrame(n)}else document.documentElement.scrollTop-=50,0!==document.documentElement.scrollTop&&(t=requestAnimationFrame(n))};n()};i?i.addEventListener("click",t=>{t.preventDefault(),l()}):l()};var s=class{constructor({wrap:t,position:e=0,slidesToShow:n=3,infinity:o=!1,responsive:i=[],button:s=!1,controlPrev:r,controlNext:l,typeTranslate:a="show"}){this.wrap=document.querySelector(t),this.main=this.wrap.parentNode,this.slides=this.wrap.children,this.slidesToShow=n,this.option={typeTranslate:a,position:e,widthSlides:Math.floor(100/this.slidesToShow),infinity:o},this.control={button:s,controlPrev:r,controlNext:l},this.responsive=i}idGen(){return Math.random().toString(36).substring(7)}init(){this.main.id=this.idGen(),this.wrap.id=this.idGen(),this.addArrow(),this.controlSlider(),this.responseInit()}addStyle(){let t=document.getElementById("sliderCarousel-style");t||(t=document.createElement("style"),t.id="sliderCarousel-style",document.head.append(t)),(this.option.typeTranslate="translate")&&(t.textContent=`\n\t\t\t\t${t.textContent}\n\t\t\t\t#${this.main.id}{\n\t\t\t\t\toverflow-x: hidden !important;\n\t\t\t\t}\n\t\t\t\t#${this.wrap.id}{\n\t\t\t\t\tdisplay: flex !important;\n\t\t\t\t\ttransition: transform 0.5s !important;\n\t\t\t\t\twill-change: transform !important;\n\t\t\t\t}\n\t\t\t\t#${this.wrap.id} > .${this.slides[0].className}{\n\t\t\t\t\tflex: 0 0 ${this.option.widthSlides}% !important;\n\t\t\t\t\tmargin: auto 0 !important;\n\t\t\t\t}\n\t\t\t`)}addArrow(){if(this.controlPrev&&this.controlNext)return this.prev=document.querySelector(this.controlPrev),void(this.next=document.querySelector(this.controlNext));this.slides.length>=4&&this.control.button&&(this.prev=document.createElement("button"),this.next=document.createElement("button"),this.main.style.position="relative",this.prev.style.cssText="\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 25%;\n\t\t\t\ttransform: translateY(-35%);\n\t\t\t\tleft: 35px;\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tbackground: #fc0 url('images/arrow-left.png') no-repeat center;\n\t\t\t\tborder: none;\n\t\t\t\tborder-radius: 50%;\n\t\t\t",this.next.style.cssText="\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 25%;\n\t\t\t\ttransform: translateY(-35%);\n\t\t\t\tright: 35px;\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tbackground: #fc0 url('images/arrow-right.png') no-repeat center;\n\t\t\t\tborder: none;\n\t\t\t\tborder-radius: 50%;\n\t\t\t",this.main.append(this.prev),this.main.append(this.next))}prevSlider(){(this.option.infinity||this.option.position>0)&&(--this.option.position,this.option.position<0&&(this.option.position=this.slides.length-this.slidesToShow),"translate"===this.option.typeTranslate&&(this.wrap.style.transform=`\n\t\t\t\t\ttranslateX(-${this.option.position*this.option.widthSlides}%)\n\t\t\t\t`),"show"===this.option.typeTranslate&&(this.slides[this.option.position].display="block"))}nextSlider(){(this.option.infinity||this.option.position<this.slides.length-this.slidesToShow)&&(++this.option.position,this.option.position>this.slides.length-this.slidesToShow&&(this.option.position=0),"translate"===this.option.typeTranslate&&(this.wrap.style.transform=`\n\t\t\t\t\ttranslateX(-${this.option.position*this.option.widthSlides}%)\n\t\t\t\t`),"show"===this.option.typeTranslate&&(this.slides[this.option.position].display="block"))}controlSlider(){this.prev&&this.next&&(this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this)))}responseInit(){if(this.responsive){const t=this.slidesToShow,e=this.responsive.map(t=>t.breakpoint),n=Math.max(...e),o=()=>{const o=document.documentElement.clientWidth;if(1===this.slidesToShow)this.addStyle();else if(o<n)for(let t=0;t<e.length;t++)o<e[t]&&(this.slidesToShow=this.responsive[t].slideToShow,this.option.widthSlides=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=t,this.option.widthSlides=Math.floor(100/this.slidesToShow),this.addStyle()};o(),window.addEventListener("resize",o)}}};var r=t=>{const e=document.getElementById(t),n=document.createElement("h4");n.textContent="Идет отправка...";const i=()=>{n.remove(),[...e.elements].forEach(t=>{"input"===t.tagName&&(t.value="")})},s=t=>{console.error(t),i();const e=document.getElementById("popup-error")||document.getElementById("thanks").cloneNode(!0);e.id="popup-error",e.querySelector("h4").textContent="ОШИБКА",e.querySelector("p").textContent="Отправка не удалась, повторите еще раз!",document.body.append(e),o(null,"popup-error")},r=t=>{if(200!==t.status)throw s(t.status);i(),o(null,"thanks")};e.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(e);let i={};for(let t of o.entries())i[t[0]]=t[1];console.log(i);for(let t of[...e.elements])if(t.classList.contains("error"))return;e.insertAdjacentElement("afterend",n),(t=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"multypart/form-data"},body:JSON.stringify(t)}))(i).then(r).catch(s)})};var l=class{constructor({selector:t,pattern:e={},method:n}){this.form=document.querySelector(t),this.pattern=e,this.method=n,this.elementsForm=[...this.form.elements].filter(t=>"button"!==t.tagName.toLowerCase()&&"button"!==t.type&&"hidden"!==t.type),this.error=new Set}init(){this.applyStyle(),this.setPattern(),this.elementsForm.forEach(t=>t.addEventListener("change",this.checkIt.bind(this))),this.form.addEventListener("submit",t=>{this.elementsForm.forEach(t=>this.checkIt({target:t})),this.error.size&&t.preventDefault()})}radioValid(){for(let t of[...this.form.elements])if("radio"===t.type&&t.checked)return!0;return!1}isValid(t){const e={notEmpty(t){return"radio"===t.type?this.radioValid():!(""===t.value.trim()||"checkbox"===t.type&&!t.checked)},pattern:(t,e)=>e.test(t.value)};if(this.method){if("checkbox"===t.type||"radio"===t.type)return e.notEmpty.call(this,t);const n=/name|email|phone|message/,o=this.method[t.name.match(n)[0]];if(o)return o.every(n=>e[n[0]](t,this.pattern[n[1]]))}else console.warn("Необходимо передать name полей ввода и методы проверки этих полей!");return!0}checkIt(t){const e=t.target;this.isValid(e)?(this.showSuccess(e),this.error.delete(e)):(this.showError(e),this.error.add(e))}showError(t){if(t.classList.remove("success"),t.classList.add("error"),t.nextElementSibling&&t.nextElementSibling.classList.contains("validator-error"))return;const e=document.createElement("div"),n="email"===t.name?"введите email вида mail@mail.ru":"phone"===t.name?"введите телефон форматом 80000000000 или +70000000000":"name"===t.name?"введите имя на русском языке без пробелов":"message"===t.name?"сообщение не должно быть пустым и должно написанно на русском":"checkbox"===t.type?"необходимо согласиться на обработку персональных данных":"radio"===input.type?"необходимо выбрать":"Ошибка в этом поле";e.textContent=n,e.classList.add("validator-error"),t.insertAdjacentElement("beforebegin",e)}showSuccess(t){t.classList.remove("error"),t.classList.add("success"),t.previousElementSibling&&t.previousElementSibling.classList.contains("validator-error")&&(console.log(t.previousElementSibling),t.previousElementSibling.remove())}applyStyle(){const t=document.createElement("style");t.textContent="\n\t\t\tinput.success {\n\t\t\t\tborder: 2px solid green !important;\n\t\t\t}\n\t\t\tinput.error {\n\t\t\t\tborder: 2px solid red !important;\n\t\t\t}\n\t\t\t.validator-error {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-family: sans-serif;\n\t\t\t\tcolor: red;\n\t\t\t}\n\t\t",document.head.append(t)}setPattern(){this.pattern.phone||(this.pattern.phone=/^\+?[78]([-?()]*\d){10}$/),this.pattern.email||(this.pattern.email=/^\w(\w?-?_?)+@\w+\.\w{2,}$/),this.pattern.name||(this.pattern.name=/^[а-я]+$/i),this.pattern.message||(this.pattern.message=/([а-я]|\s|\d)+/gim)}};(()=>{const t={form:document.getElementById("card_order"),priceCollection:document.querySelectorAll('[name="club-name"]'),monthCollection:document.querySelectorAll('[name="card-type"]'),cardPrice:{schelkovo:{1:2999,6:14990,9:21990,12:24990},mozaika:{1:1990,6:9900,9:13900,12:19900}},month:1,price:1990,priceTotal:document.getElementById("price-total")},e=t=>{for(let e of t)if(e.checked)return e.value};t.form.addEventListener("change",n=>{n.target.matches("input")&&(t.month=e(t.monthCollection),t.price=t.cardPrice[e(t.priceCollection)][t.month],t.priceTotal.textContent=t.price)})})();o(".open-popup","free_visit_form"),o(".fixed-gift","gift",!0),o(".callback-btn","callback_form"),i("totop","clubs"),document.querySelector(".hidden-small").addEventListener("click",t=>{t.preventDefault(),t.target.closest("a")&&i(null,null,t.target.hash)});new s({wrap:".services-slider",typeTranslate:"translate",slidesToShow:4,button:!0,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:576,slideToShow:1}]}).init();new s({wrap:".gallery-slider",typeTranslate:"show",slidesToShow:1,button:!0,infinity:!0}).init();new l({selector:"#banner-form",method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init(),r("banner-form");new l({selector:"#form1",method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init(),r("form1");new l({selector:"#form2",method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init(),r("form2");new l({selector:"#footer_form",method:{phone:[["notEmpty"],["pattern","phone"]]}}).init(),r("footer_form");new l({selector:"#card_order",method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init(),r("card_order");new l({selector:"#card_order",method:{name:[["notEmpty"],["pattern","name"]],phone:[["notEmpty"],["pattern","phone"]]}}).init(),r("card_order")}]);