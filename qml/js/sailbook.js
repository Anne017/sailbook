window.addEventListener("load", function(event) {
    console.log("Loaded");
    main();
});

window.onload = (event) => {
  console.log('page is fully loaded');
};

document.addEventListener('readystatechange', event => {
    console.log(event.target.readyState);
    if (event.target.readyState === "complete") {
        console.log("Completed");
    }
});

var check = 0;
var checkExist = setInterval(function() {
   if (document.getElementById('app').getElementsByClassName('browser')[0]) {
       clean();
       location.reload();
   } else {
       if (document.getElementById('app').getElementsByClassName('landing-wrapper').length) {
      		document.getElementById('app').getElementsByClassName('landing-wrapper')[0].style.minWidth = 'auto';
    			document.getElementById('app').getElementsByClassName('landing-header')[0].style.display = 'none';
       }
       if (document.getElementById("app").getElementsByClassName('app two')[0].childNodes.length) {
          console.log("Exists!");
          if ( check == 0 ) {
            clearInterval(checkExist);
            clean();
            main();
          }
          check = 1;
       }
   }
}, 100);

window.addEventListener("click", function() {
  console.log("Click");
  var check = 0;
  var checkExist = setInterval(function() {
    if (document.getElementById("app").getElementsByClassName('app two')[0].childNodes[2].style.display == 'none') {
      console.log("Exists!");
      if ( check == 0 ) {
        clearInterval(checkExist);
        //clean();
        menu();
      }
      check = 1;
    }
  }, 100);
});

function main(){
      document.getElementById("app").getElementsByClassName('app two')[0].childNodes[3].style.display = 'none';
      document.getElementById('app').getElementsByClassName('app two')[0].style.minWidth = 'auto';
      document.getElementById('app').getElementsByClassName('app two')[0].style.minHeight = 'auto';

/*
      window.addEventListener("click", () => {
        if (document.getElementById("app").getElementsByClassName("app two")[0]) {
          document.getElementById("app").getElementsByClassName("app two")[0].getElementsByClassName("o_uNe")[0].parentNode.style.flex = "100%";
          document.getElementById("app").getElementsByClassName("app two")[0].getElementsByClassName("o_uNe")[0].parentNode.style.WebkitFlex = "100%";
          document.getElementById("app").getElementsByClassName("app two")[0].getElementsByClassName("o_uNe")[1].parentNode.style.WebKitFlex = "0%";
          document.getElementById("app").getElementsByClassName("app two")[0].getElementsByClassName("o_uNe")[1].parentNode.style.flex = "0%";
          if (document.getElementById("derecha")) { document.getElementById("derecha").style.width = "0%"; }
        }
        if (document.getElementById("app").getElementsByClassName("app three")[0]) {
          document.getElementById("app").getElementsByClassName("app three")[0].getElementsByTagName("SPAN")[2].parentNode.style.width = "100%";
          document.getElementById("app").getElementsByClassName("app three")[0].getElementsByTagName("SPAN")[2].parentNode.id = "derecha";
        }
      });
*/

      var elems = document.getElementById("pane-side").getElementsByTagName("DIV");
      for (var i = 0; i<elems.length; i++) {
        elems[i].onclick = function() {

          document.getElementById("app").getElementsByClassName('app two')[0].childNodes[3].style.display = '';
          document.getElementById("app").getElementsByClassName('app two')[0].childNodes[2].style.display = 'none';
          menu();

        };
      }
}


function menu(){


  function addCss(cssString) {
      var head = document.getElementsByTagName('head')[0];
      var newCss = document.createElement('style');
      newCss.type = "text/css";
      newCss.innerHTML = cssString;
      head.appendChild(newCss);
  }
  function addJS(jsString) {
      var head = document.getElementsByTagName('head')[0];
      var newJS = document.createElement('script');
      newJS.innerHTML = jsString;
      head.appendChild(newJS);
  }

  check = 0;
  if ( check == 0 ) {
    addCss(".back_button { position:absolute; left: 5px; bottom:50%; z-index:200; width:42px; height:42px; display:-webkit-flex; display:flex; -webkit-align-items:center; align-items:center; -webkit-justify-content:center; justify-content:center } html[dir] .back_button { border-radius:50%; background-color:#fff; box-shadow:0 1px 1px 0 rgba(0,0,0,.06),0 2px 5px 0 rgba(0,0,0,.2) } html[dir=ltr] .back_button { right:11px } html[dir=rtl] .back_button { left:11px } .back_button path { fill:#93999c; fill-opacity:1 } .svg_back { transform: rotate(90deg); }");

  	addJS('window.onscroll = function() {myFunction()}; var navbar = document.getElementById("navbar"); var sticky = navbar.offsetTop; function myFunction() { if (window.pageYOffset >= sticky) { navbar.classList.add("sticky") } else { navbar.classList.remove("sticky"); } } ');

    var newHTML         = document.createElement('div');
    newHTML.className += "back_button";
    newHTML.style = "";
    newHTML.innerHTML   = "<a href='#' onclick=\"document.getElementById('app').getElementsByClassName('app two')[0].childNodes[3].style.display = 'none'; document.getElementById('app').getElementsByClassName('app two')[0].childNodes[2].style.display = 'block'; \"><span data-icon='left'><svg class='svg_back' id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21' width='21' height='21'><path fill='#263238' fill-opacity='.33' d='M4.8 6.1l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z'></path></svg></span></a>";

    //document.body.appendChild(newHTML);
    var eElement = document.getElementById("app").getElementsByClassName('copyable-area')[0];
    eElement.insertBefore(newHTML, eElement.firstChild);

    check = check + 1;
  }

}

function clean() {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
  for(let registration of registrations) {
          registration.unregister()
  }}).catch(function(err) {
      console.log('Service Worker registration failed: ', err);
  });
}
