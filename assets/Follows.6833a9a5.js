import{_ as m,u as w,s as f,A as c,r,o as t,c as s,a as l,b as p,d as y,e as i,w as x,g as a,h as C}from"./index.16961ad9.js";import{C as k}from"./Card.780b0282.js";import{R as F}from"./RightPage.e1f128b4.js";const v={components:{Card:k,RightPage:F},setup(){const e=w();return{getUser:()=>e.getUser,logIn:e.logIn}},data(){return{follows:[],slug:f}},methods:{async retrieveData(){try{this.follows=await c.getFollows(this.getUser()._id)}catch(e){console.log(e),alert("C\xF3 l\u1ED7i x\u1EA3y ra! Vui l\xF2ng t\u1EA3i l\u1EA1i trang!")}},async deleteFilm(e){try{await c.unFollow(e,this.getUser()._id),this.retrieveData(),this.logIn()}catch(n){console.log(n),alert("C\xF3 l\u1ED7i x\u1EA3y ra!")}}},created(){this.retrieveData()}},D={class:"row row-cols-2"},U={class:"col-9"},B={key:0,class:"row mt-3"},R={class:"row row-cols-3 row-cols-md-5"},V={key:1,class:"row mt-3"},I={class:"text-center fs-4 text-light"},N=a("Kh\xF4ng t\xECm th\u1EA5y k\u1EBFt qu\u1EA3 n\xE0o! Quay l\u1EA1i "),P=a("Trang Ch\u1EE7"),A=a("?");function S(e,n,T,b,o,_){const h=r("Card"),d=r("router-link"),g=r("RightPage");return t(),s("article",D,[l("div",U,[o.follows.length>0?(t(),s("section",B,[l("div",R,[(t(!0),s(p,null,y(o.follows,u=>(t(),C(h,{film:u,slug:o.slug,showDelete:"true",onDeleteFilm:_.deleteFilm},null,8,["film","slug","onDeleteFilm"]))),256))])])):(t(),s("section",V,[l("h3",I,[N,i(d,{to:"/"},{default:x(()=>[P]),_:1}),A])]))]),i(g)])}const L=m(v,[["render",S]]);export{L as default};
