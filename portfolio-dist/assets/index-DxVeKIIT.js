import{d as u,p as m,r as h,o,c as r,a as f,w as x,b as e,u as c,t as n,F as _,e as b,n as k,f as w,g as y,h as j,i as F,j as L,k as C,_ as I}from"./index-BwrVnHio.js";const N="/img/GLASS_COLOR_PLANT_OFF.png",P={class:"cursor-interaction relative"},S=["src","alt"],B={class:"absolute bottom-[5%] left-[4%] uppercase text-sm md:text-[35px] font-bold text-secondary-white mix-blend-difference"},R={class:"flex -mt-2"},A={class:"scrollable-content md:min-h-[140px] bg-main-black bg-opacity-30 text-lg md:text-xl uppercase"},O={class:"flex items-center"},U={"aria-hidden":""},V=["src"],$=u({__name:"ProjetHome",props:{image_hero:{},image_loop:{},name:{},page_name:{},work_type:{},type:{},categorie:{},date:{},description1:{},description2:{},image1_1:{},image1_2:{},image1_3:{},image1_4:{},image1_5:{},description3:{},image2_1:{},image2_2:{},image2_3:{},image2_4:{},image2_5:{},image2_6:{},description4:{},image3_1:{},image3_2:{},image3_3:{},image_banner:{},id:{},created:{},updated:{},collectionId:{},collectionName:{},expand:{}},setup(p){const a=p,s=a.image_hero,l=s&&m.getFileUrl(a,s,{thumb:"400x400"}),d=a.image_loop,g=d&&m.getFileUrl(a,d,{thumb:"400x400"}),i=a.image_banner;return i&&m.getFileUrl(a,i,{thumb:"400x400"}),(t,G)=>{const v=h("RouterLink");return o(),r(_,null,[f(v,{to:"/projets/"+t.page_name},{default:x(()=>[e("article",P,[e("img",{class:"-mb-1",src:c(l),alt:t.name+"cover"},null,8,S),e("div",B,[e("div",null,n(t.work_type),1),e("div",R,[e("h2",null,n(t.name),1),e("span",null,", "+n(t.type),1)])])])]),_:1},8,["to"]),e("div",{class:"mask-project flex flex-col items-center justify-center relative w-full h-full",style:k({backgroundImage:"url("+c(l)+")"})},[e("div",A,[(o(),r(_,null,b(25,H=>e("div",O,[e("h3",U,n(t.name),1),e("img",{src:c(g),alt:""},null,8,V)])),64))])],4)],64)}}}),z=y('<div class="cover__parent" data-v-0b499e4b><div class="cover__rectangle" data-v-0b499e4b></div><div class="cover__mask" data-v-0b499e4b><ul class="cover__wrapper--hover" data-v-0b499e4b><li class="cover__hover" data-v-0b499e4b><div class="bg-main-black w-full h-full" data-v-0b499e4b></div></li><li class="cover__hover" data-v-0b499e4b><div class="bg-main-black w-full h-full" data-v-0b499e4b></div></li><li class="cover__hover" data-v-0b499e4b><div class="bg-main-black w-full h-full" data-v-0b499e4b></div></li></ul><img src="'+N+'" alt="" data-v-0b499e4b></div></div>',1),D={id:"projects"},E=u({__name:"index",async setup(p){let a,s;const l=([a,s]=w(()=>j()),a=await a,s(),a);return(d,g)=>(o(),r(_,null,[z,e("section",D,[(o(!0),r(_,null,b(c(l),i=>(o(),F($,L(C({...i})),null,16))),256))])],64))}}),q=I(E,[["__scopeId","data-v-0b499e4b"]]);export{q as default};
