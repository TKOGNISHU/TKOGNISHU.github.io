import{q as a,B as r}from"./index.b022611d.js";a(()=>import("./.env.0b4120b2.js"),[]);class t extends r{constructor(e=`${SERVER_URL}/api/groups`){super(e)}async getElementsByName(e){return(await this.api.get(`/search?search=${e}`)).data}async getFilms(e){return(await this.api.get(`/films?group=${e}`)).data}}const o=new t;export{o as G};
