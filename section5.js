
///////////////////////////// 1217px 아이콘 8개 /////////////////////////////
if (window.matchMedia("screen and (max-width: 1217px)").matches) {
    $(function () {
        $(".cu-list").hide();
        var array = [];
        var list = document.getElementsByClassName('cu-list');

        for (var i = 0; i < list.length; i++) {
            array.push(list[i]);
        }
        var visiArray = [];
        visiArray = array.slice(0, 8);
        visiArray = visiArray.concat(array.slice(8, 16).reverse());
        visiArray = visiArray.concat(array.slice(16, 24));

        var second = 0;
        for (var i = 0; i < visiArray.length; i++) {
            second = second + 0.1;
            visiArray[i].setAttribute('data-wow-delay', second + 's')
            visiArray[i].style.display = 'block';
        }

        var load = document.getElementsByClassName('h-btn')[0];
        //숨겨진 아이콘
        load.addEventListener('click', function (e) {
            e.preventDefault();
            var hiddenArray = [];
            hiddenArray = array.slice(24, 27);

        var hSecond = 0;
        for (var i = 0; i < hiddenArray.length; i++) {
            hSecond = hSecond + 0.1;
            hiddenArray[i].setAttribute('data-wow-delay', hSecond + 's');
            hiddenArray[i].style.display = 'block';
        }
        load.style.display="none";
    
        window.scrollTo(0, window.pageYOffset + 1);
        window.scrollTo(0, window.pageYOffset - 1);
        });
    });
}


////////////////////////////////  940px 아이콘 4개  ////////////////////////////////////
if (window.matchMedia("screen and (max-width: 940px)").matches) {
    $(function(){
        $(".cu-list").hide();
        var array = [];
        var list = document.getElementsByClassName('cu-list');
        for (var i=0; i<list.length; i++){
            array.push(list[i]);
        }
        var viziArray = [];
        viziArray = array.slice(0, 4);
        viziArray = viziArray.concat(array.slice(4, 8).reverse());
        viziArray = viziArray.concat(array.slice(8, 12));
        
        var third = 0;
        for(var i=0; i<viziArray.length; i++){
            third = third + 0.1;
            viziArray[i].setAttribute('data-wow-delay', third + 's')
            viziArray[i].style.display = 'block';
        }

        var load2 = document.getElementsByClassName('h-btn')[0];
        load2.addEventListener('click', function (e){
            e.preventDefault();
            var hiddenArray2 = [];
            hiddenArray2 = array.slice(12, 27);

            var hthird = 0;
            for(var i=0; i<hiddenArray2.length; i++){
                hthird = hthird + 0.1;
                hiddenArray2[i].setAttribute('data-wow-delay', hthird + 's')
                hiddenArray2[i].style.display = 'block';
            }
            load2.style.display = 'none';

            window.scrollTo(0, window.pageYOffset + 1);
            window.scrollTo(0, window.pageYOffset - 1);
        });
    });
}
function preventClick(e){
    e.preventDefault()
}
