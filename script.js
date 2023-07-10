// document.addEventListener ('contextmenu', event => event.preventDefault ());

  function errormsg(){
    Swal.fire({
      icon: 'error',
      title: 'ERROR 404',
      text: 'Něco se pokazilo při načítání stránky.',
    })
  }
  
  function working(){
    Swal.fire({
      title: 'Již brzy!',
      text: 'Na tomto příběhu momentálně pracuji.',
    })
  }

  function soon(){
    Swal.fire({
      title: 'Již brzy!',
      text: 'Na této funkci webu momentálně pracuji.',
    })
  }

  function redirect(){
    Swal.fire({
      icon: 'success',
      title: 'Úspěšně přesměrováno.',
    })
  }

  function inspect(){
    Swal.fire({
      icon: 'error',
      title: 'Inspect nemůžeš používat.',
    })
  }

  function copy(){
    Swal.fire({
      icon: 'error',
      title: 'Kopírování je zakázáno.',
    })
  }
  function source(){
    Swal.fire({
      icon: 'error',
      title: 'Nemůžeš si zobrazit zdrojový kód.',
    })
  }

  window.addEventListener("keydown", function (e) {
    // pokud je stisknuto ctrl+c
    if (e.ctrlKey && e.keyCode == 67) {
      // zruš akci
      e.preventDefault();
      // zobraz zprávu
      copy();
    }
    if (e.metaKey && e.keyCode == 67) {
      // zruš akci
      e.preventDefault();
      // zobraz zprávu
      copy();
    }
    if (e.keyCode == 123) {
      // zruš akci
      e.preventDefault();
      // zobraz zprávu
      inspect();
    }
    if ((e.ctrlKey || e.metaKey) && e.keyCode == 85) {
      // zruš akci
      e.preventDefault();
      // zobraz zprávu
      source();
    }
  });
  
  // Funkce pro načítání jiného HTML souboru
  var resizeTimeout;

  function loadHtmlFile(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.open();
        document.write(xhr.responseText);
        document.close();
      }
    };
    xhr.send();
  }
  
  function checkScreenSize() {
    clearTimeout(resizeTimeout);
  
    resizeTimeout = setTimeout(function() {
      if (window.innerWidth < 800) {
        loadHtmlFile('mobile.html');
      } else {
        loadHtmlFile('index.html');
      }
    }, 200);
  }
  
  checkScreenSize();
  
  window.addEventListener('resize', checkScreenSize);
  