import{_ as p,i as C,o as e,c as o,b as f,d as w,k as x,g as k,t as r,n as N,C as v,s as A,F as u,r as i,a as t,e as m,w as h,h as E}from"./index.16961ad9.js";const H={props:{data:{type:Array,default:[]}},methods:{showExist:C}},V={class:"list-group-item"};function b(a,g,l,$,c,d){return e(),o("ul",{class:N("list-group"+d.showExist(a.$attrs.class,""))},[(e(!0),o(f,null,w(l.data,(n,_)=>(e(),o("li",V,[x(a.$slots,"default",{data:n},()=>[k(r(n.name),1)])]))),256))],2)}const z=p(H,[["render",b]]),B={components:{ListGroup:z,CardHorizontal:v},data(){return{news:[],newAnimes:[],slug:A}},methods:{async retrieveData(){try{this.newAnimes=await u.topView(),this.news=await u.news()}catch(a){console.log(a),alert("C\xF3 l\u1ED7i x\u1EA3y ra! Vui l\xF2ng t\u1EA3i l\u1EA1i trang!")}}},created(){this.retrieveData()}},D={class:"col-3 rounded overflow-hidden"},L={class:"row bg-secondary p-2"},F=t("h3",{class:"fw-normal fs-3"},"ANIME M\u1EDAI",-1),G={class:"col-9"},I={class:"col-3"},M={class:"row bg-secondary mt-2 p-2"},S=t("h3",{class:"fw-normal fs-3"},"XEM NHI\u1EC0U NH\u1EA4T",-1);function R(a,g,l,$,c,d){const n=i("router-link"),_=i("ListGroup"),y=i("CardHorizontal");return e(),o("aside",D,[t("section",L,[F,m(_,{class:"bg-secondary",data:c.news},{default:h(s=>[m(n,{to:`/films/${s.data.slug}`,class:"row"},{default:h(()=>[t("p",G,r(s.data.name),1),t("p",I,r(s.data.episodes.length)+"/"+r(s.data.length),1)]),_:2},1032,["to"])]),_:1},8,["data"])]),t("section",M,[S,(e(!0),o(f,null,w(c.newAnimes,(s,T)=>(e(),E(y,{film:s},null,8,["film"]))),256))])])}const X=p(B,[["render",R]]);export{X as R};
