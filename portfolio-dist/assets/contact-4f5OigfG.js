import{d as p,m as a,c as d,b as t,s as o,v as l,F as _,e as b,o as r,x as h,t as x}from"./index-BwrVnHio.js";const g={class:"bg-main-black text-secondary-white p-6 sm:p-20"},v=t("div",{class:"font-medium md:text-center text-base sm:text-[40px]"},[t("h1",null,"Let’s connect and creating together !"),t("p",{class:"mt-2 md:mt-5 sm:mb-4"},"Contact me and tell me about your project")],-1),f={onsubmit:"sendEmail(); reset()",class:"grid justify-center sm:text-base max-md:py-10 md:p-10"},y={class:""},j=t("label",{for:"ydata"},"Your Data",-1),k={id:"ydata",class:"grid gap-5 sm:grid-cols-2 sm:gap-20 mt-2 sm:mt-4"},U={class:"grid"},w={class:"grid"},V={class:"grid"},B=t("label",{for:"type",class:"mb-4 sm:mb-5 mt-8 sm:mt-12"},"Your are interested in",-1),C={id:"type",class:"flex flex-wrap gap-4 sm:gap-10"},D=["id","value"],Y=["for"],q={class:"grid"},E=t("label",{for:"project",class:"mb-2 sm:mb-4 mt-8 sm:mt-12"},"Your project is",-1),M=t("button",{type:"submit",class:"lg:max-w-[20%] mx-auto mt-10 sm:mt-14"},"Submit Message",-1),L=p({__name:"contact",setup(T){const n=a(""),i=a(""),c=a([]),m=a("");return(F,s)=>(r(),d("div",g,[v,t("form",f,[t("ul",y,[j,t("div",k,[t("li",U,[o(t("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>n.value=e),id:"name",name:"name",type:"text",class:"input__contact",placeholder:"Name*",required:""},null,512),[[l,n.value]])]),t("li",w,[o(t("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>i.value=e),id:"email",name:"email",type:"text",class:"input__contact",placeholder:"Email*",required:""},null,512),[[l,i.value]])])]),t("li",V,[B,t("ul",C,[(r(),d(_,null,b(["UX/UI Design","Brand Identities","Website creation","Album Cover","Youtube/Twitch Thumbnail"],e=>t("li",{class:"list__input",key:e},[o(t("input",{type:"checkbox",id:e,"onUpdate:modelValue":s[2]||(s[2]=u=>c.value=u),value:e,class:"input__contact--checkbox"},null,8,D),[[h,c.value]]),t("label",{for:e,class:"label__contact"},x(e),9,Y)])),64))])]),t("li",q,[E,o(t("input",{"onUpdate:modelValue":s[3]||(s[3]=e=>m.value=e),id:"project",name:"project",type:"text",class:"input__contact",placeholder:"Project details",required:""},null,512),[[l,m.value]])])]),M])]))}});export{L as default};
