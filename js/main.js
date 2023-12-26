window.onload =  function(){
    //01. gnb 애니메이션
    const menuOpen = document.querySelector('.gnb .menuOpen')
    const menuBox = document.querySelector('.gnb .menuBox')

    menuOpen.addEventListener('click',()=> {
        menuBox.classList.toggle('on')
    })
}

// GSAP 라이브러리 스크롤트리거 등록
gsap.registerPlugin(ScrollTrigger);

// 01. visual
gsap.timeline({
    scrollTrigger: {
        trigger: '.visual',
        start: '100% 100%',
        end: '100% 0%',
        scrub: 1, 
        // scrub scrollTrigger의 이벤트가 스크롤이 사용될때만 재생되도록 만들어주는 속성(안적으면 트리거시점 나오면 스크롤안해도 계속 애니 진행됨) 
        // scrub은 true 나 숫자로 값을 써줄수있는데 true 같은 경우는 스크롤하면 애니 바로 진행되고, 바로 멈추며, 숫자는 그 시점을 따라잡는데 N초가 걸려서 애니가 더 부드러움. 
        //숫자가 클수록 애니가 더 부드러움(1-3)
       //markers: 1 //높이값을 보이도록 설정
    }
})

//to 애니메이션
.to('.logoWrap #j', {x:-150, y:250, rotate:20, ease:'none', duration:5}, 0) 
.to('.logoWrap #y', {x:-30, y:150, rotate: -10, ease: 'none', duration:5}, 0)
.to('.logoWrap #o', {x:0, y:400, rotate: -10, ease: 'none', duration:5}, 0) 
.to('.logoWrap #u', {x:50, y:300, rotate:10, ease:'none', duration:5}, 0) 
.to('.logoWrap #n', {x:100, y:100, rotate: -10, ease:'none', duration:5}, 0) 
.to('.logoWrap #g', {x:50, y:450, rotate:20, ease:'none', duration:5}, 0)


//02. 공통요소 .mainTextBox .title i
gsap.utils.toArray(".mainTextBox .title i").forEach((selector)=>{
    gsap.timeline({
      scrollTrigger: {
          trigger:selector,
          start:'100% 100%',
          end:'100% 100%',
          scrub:1,
          //markers:true
      }
    })
    .fromTo(selector,{opacity:0, y:100}, {opacity:1, y:0, ease:'none', duration:5},0)
  })

//03. 공통요소 subText p
gsap.utils.toArray(".subText p").forEach((selector)=>{
    gsap.timeline({
      scrollTrigger: {
          trigger:selector,
          start:'100% 100%',
          end:'100% 100%',
          scrub:1,
          //markers:true
      }
    })
    .fromTo(selector,{opacity:0, y:100}, {opacity:1, y:0, ease:'none', duration:5},0)
  })

//04. .con1 textAni 텍스트 체인지 gsap 애니메이션
let textAniList = document.querySelectorAll('.con1 .textAni li');
let textAni = gsap.timeline({ repeat:-1});

for(let i = 0; i < textAniList.length; i++ ) {
    textAni.to(textAniList[i], 0.8, {opacity: 1, repeat:1, delay:0, x:0, yoyo:true, ease: "power4.out"})    
    }
textAni.play();

//05. con4 listBox의 스크롤트리거애니메이션
gsap.utils.toArray(".con4 .listBox .box").forEach((selector)=>{
    gsap.timeline({
      scrollTrigger: {
          trigger:selector,
          start:'0% 20%',
          end:'0% 0%',
          scrub:1,
          //markers:true
      }
    })
    .to(selector, {transform:'rotateX(-10deg) scale(0.9)', transformOrigin:'top', filter:'brightness(0.3)'},0)
  })

//06 .con3 ListBox 카드애니메이션
gsap.utils.toArray(".con3 .listBox li").forEach((selector, t) => {
      ScrollTrigger.create({
          trigger:selector,
          start:'30% 50%',
          onEnter: ()=> {
            gsap.set(selector, {
                rotationX: '-65deg',
                z:'-500px',
                opacity:0,
            }),
            gsap.to(selector,{
                rotationX: 0,
                z:0,
                opacity:1,
                delay: t % 3 * .05
                })
          },
          //markers:true
      })
  });

//07 .con5 listBox li 호버시 이미지 보이는 애니 
let listBox = document.querySelectorAll('.con5 .listBox li'); 
let imgBox = document.querySelector('.con5 .imgBox'); 
let img = document.querySelector('.con5 .imgBox img');

for (let i = 0; i <listBox.length; i++) {
    listBox[i].addEventListener('mouseover', () => {
        img.src=`images/img${i}.jpg`
        gsap.set(imgBox, {scale: 0, opacity:0, duration:.3}), 
        gsap.to(imgBox, {scale:1, opacity:1, duration:.3})
    })
    
    listBox[i].addEventListener('mousemove', (e) => {
        let imgBoxX =e.pageX +20;
        let imgBoxY =e.pageY -20;
        imgBox.style.left = imgBoxX + 'px';
        imgBox.style.top = imgBoxY + 'px';
    })
    listBox[i].addEventListener('mouseout', () => {
        gsap.to(imgBox, {scale:0, opacity:0, duration:.3})
    })    
}

//overflow hidden
gsap.timeline({
    scrollTrigger:{
        trigger:'.con5',
        start:'0% 100%',
        end:'100% 0%',
        toggleClass: {targets: '.wrap', className: 'on'} 
    }
});

//08 footer
gsap.timeline({
    scrollTrigger: {
        trigger: 'footer',
        start: '0% 100%',
        end: '100% 0%',
        scrub: 1,
        //markers: true
    }
})
.to('.logoWrap', { top: '20%', ease: 'none', duration: 5 }, 0);


//09 Loading
let loading = document.querySelector('.loading');
let rotate = document.querySelectorAll('.rotate');
let opacity = document.querySelectorAll('.opacity');

setTimeout(() => loading.classList.add("scene1"), 0);
setTimeout(() => loading.classList.add("scene2"), 1500);
setTimeout(() => loading.classList.remove("scene1", "scene2"), 2500);
setTimeout(() => rotate.forEach(rotate => { rotate.classList.add('on'); }), 2500);
setTimeout(() => opacity.forEach(opa => { opa.classList.add('on'); }), 2500);

