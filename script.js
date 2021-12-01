document.querySelectorAll('a[href^="#"]').forEach(link=> {
    link.addEventListener('click', e => {
     e.preventDefault()

     const target = document.querySelector(link.hash),
            adjust = 85,
            offsetTop = window.pageYOffset + target.getBoundingClientRect().top - adjust

     window.scrollTo({
         top: offsetTop,
         behavior: 'smooth'
     })
    })
})

window.onload = function(){
   
    //画像を配列に格納
    var images =['url(https://dotup.org/uploda/dotup.org2660574.jpg_o3ZFzs4EzPN2iiiVFTqz/dotup.org2660574.jpg)',
                 'url(https://dotup.org/uploda/dotup.org2660575.jpg_51NOJfpxbEzpRtau36Z7/dotup.org2660575.jpg)',
                 'url(https://dotup.org/uploda/dotup.org2660576.jpg_ro4nHtBppZ4B0KFpPKpi/dotup.org2660576.jpg)']

    //要素をHTMLから取得
    //画像
    var target = document.getElementById('slide');
    //>,<
    var right = document.getElementById('right');
    var left = document.getElementById('left');


    //クリックしたときに変わるようにカウント変数
    var count = 0;

    //クリックしたら画像変更
   function change(){
       target.style.backgroundImage = images[count];
    }

   //>をクリックしたらcountを+1する
   function goNext(){
       if(count == 2){
           count = 0;
       }else{
           count++;
       }
       change();
   }
   
   //<をクリックしたらcountを-1する
   function goBack(){
       if(count == 0){
           count = 2;
       }else{
           count--;
       }
       change();
   }

   //クリックイベント
   right.addEventListener('click',goNext,false);
   left.addEventListener('click',goBack,false);
};

