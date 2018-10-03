
            // переключение по кнопкам


  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var list1 = document.getElementById('list1');
  var list2 = document.getElementById('list2');
  var text1 = document.getElementById('text1');
  var text2 = document.getElementById('text2');
  var bg2 = document.getElementById('bg2');


    

    button2.addEventListener('click', function () {
        button1.classList.add('colorbutton1');
        button2.classList.add('colorbutton2');
        list1.classList.add('hidden');
        list2.classList.add('visible');
        text1.classList.add('textcolor1');
        text2.classList.add('textcolor2');
        bg2.classList.add('bg2');
    });

    button1.addEventListener('click', function () {
        button1.classList.remove('colorbutton1');
        button2.classList.remove('colorbutton2');
        list1.classList.remove('hidden');
        list2.classList.remove('visible');
        text1.classList.remove('textcolor1');
        text2.classList.remove('textcolor2');
        bg2.classList.remove('bg2');
    });



    // Переключение по времени

    var bgpo4emu = document.getElementById('bgpo4emu');
    var i = 0;
    var classmass = ['bgpo4emu', 'bgpo4emu2', 'bgpo4emu3'];
    function func() {
        bgpo4emu.classList.add(classmass[i]);
        i++;
        if(i > 2){
            i = 0;
        }

    }

    setInterval(func, 2000);



    // popap

    var popap = document.getElementById('popap'); 
    var button = document.getElementById('button');


    button.addEventListener('click', function () {
        popap.classList.add('popapvisibl');
        
    });