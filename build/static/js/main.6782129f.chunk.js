(this.webpackJsonppokemonapp=this.webpackJsonppokemonapp||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),l=a(1),o=(a(28),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())}),i=function(e){var t;switch(e){case"Feu":t="red lighten-1";break;case"Eau":t="blue lighten-1";break;case"Plante":t="green lighten-1";break;case"Insecte":t="brown lighten-1";break;case"Normal":t="grey lighten-3";break;case"Vol":t="blue lighten-3";break;case"Poison":t="deep-purple accent-1";break;case"F\xe9e":t="pink lighten-4";break;case"Psy":t="deep-purple darken-2";break;case"Electrik":t="lime accent-1";break;case"Combat":t="deep-orange";break;default:t="grey"}return"chip ".concat(t)},m=a(9),u=function(e){var t=e.pokemon,a=e.borderColor,c=void 0===a?"#009688":a,s=Object(n.useState)(),u=Object(l.a)(s,2),p=u[0],d=u[1],v=Object(m.g)();return r.a.createElement("div",{className:"col s6 m4",onClick:function(){return e=t.id,void v.push("/pokemons/".concat(e));var e},onMouseEnter:function(){d(c)},onMouseLeave:function(){d("#f5f5f5")}},r.a.createElement("div",{className:"card horizontal",style:{borderColor:p}},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t.picture,alt:t.name})),r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,t.name),r.a.createElement("p",null,r.a.createElement("small",null,o(t.created))),t.types.map((function(e){return r.a.createElement("span",{key:e,className:i(e)},e)}))))))},p=a(10),d=a(13),v=[{id:1,name:"Bulbizarre",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",types:["Plante","Poison"],created:new Date},{id:2,name:"Salam\xe8che",hp:28,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",types:["Feu"],created:new Date},{id:3,name:"Carapuce",hp:21,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",types:["Eau"],created:new Date},{id:4,name:"Aspicot",hp:16,cp:2,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",types:["Insecte","Poison"],created:new Date},{id:5,name:"Roucool",hp:30,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",types:["Normal","Vol"],created:new Date},{id:6,name:"Rattata",hp:18,cp:6,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png",types:["Normal"],created:new Date},{id:7,name:"Piafabec",hp:14,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png",types:["Normal","Vol"],created:new Date},{id:8,name:"Abo",hp:16,cp:4,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",types:["Poison"],created:new Date},{id:9,name:"Pikachu",hp:21,cp:7,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",types:["Electrik"],created:new Date},{id:10,name:"Sabelette",hp:19,cp:3,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png",types:["Normal"],created:new Date},{id:11,name:"M\xe9lof\xe9e",hp:25,cp:5,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png",types:["F\xe9e"],created:new Date},{id:12,name:"Groupix",hp:17,cp:8,picture:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png",types:["Feu"],created:new Date}],h=function(){function e(){Object(p.a)(this,e)}return Object(d.a)(e,null,[{key:"getPokemons",value:function(){var e=this;return this.isDev?fetch("http://localhost:3001/pokemons").then((function(e){return e.json()})).catch((function(t){return e.handleError(t)})):new Promise((function(t){t(e.pokemons)}))}},{key:"getPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e)).then((function(e){return e.json()})).then((function(e){return t.isEmpty(e)?null:e})).catch((function(e){return t.handleError(e)})):new Promise((function(a){a(t.pokemons.find((function(t){return e===t.id})))}))}},{key:"updatePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){var n=e.id,r=t.pokemons.findIndex((function(e){return e.id===n}));t.pokemons[r]=e,a(e)}))}},{key:"deletePokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons/".concat(e.id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){var n=e.id;t.pokemons=t.pokemons.filter((function(e){return e.id!==n})),a({})}))}},{key:"addPokemon",value:function(e){var t=this;return e.created=new Date(e.created),this.isDev?fetch("http://localhost:3001/pokemons",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){t.pokemons.push(e),a(e)}))}},{key:"searchPokemon",value:function(e){var t=this;return this.isDev?fetch("http://localhost:3001/pokemons?q=".concat(e)).then((function(e){return e.json()})).catch((function(e){return t.handleError(e)})):new Promise((function(a){a(t.pokemons.filter((function(t){return t.name.includes(e)})))}))}},{key:"isEmpty",value:function(e){return 0===Object.keys(e).length}},{key:"handleError",value:function(e){console.error(e)}}]),e}();h.pokemons=v,h.isDev=!1;var f=a(4),E=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),o=Object(l.a)(s,2),i=o[0],m=o[1];return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6 offset-m3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",placeholder:"Rechercher un pok\xe9mon",value:a,onChange:function(e){return function(e){var t=e.target.value;c(t),t.length<=1?m([]):h.searchPokemon(t).then((function(e){return m(e)}))}(e)}})),r.a.createElement("div",{className:"collection"},i.map((function(e){return r.a.createElement(f.b,{key:e.id,to:"/pokemons/".concat(e.id),className:"collection-item"},e.name)})))))))},k=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){h.getPokemons().then((function(e){return c(e)}))}),[]),r.a.createElement("div",null,r.a.createElement("h1",{className:"center"},"Pok\xe9dex"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(E,null),a.map((function(e){return r.a.createElement(u,{key:e.id,pokemon:e})}))),r.a.createElement(f.b,{className:"btn-floating btn-large waves-effect waves-light red z-depth-3",style:{position:"fixed",bottom:"25px",right:"25px"},to:"/pokemon/add"},r.a.createElement("i",{className:"material-icons"},"add"))))},g=function(){return r.a.createElement("div",{className:"preloader-wrapper big active"},r.a.createElement("div",{className:"spinner-layer spinner-blue"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"}))))},b=function(e){var t=e.match,a=Object(n.useState)(null),c=Object(l.a)(a,2),s=c[0],m=c[1];return Object(n.useEffect)((function(){h.getPokemon(+t.params.id).then((function(e){return m(e)}))}),[t.params.id]),r.a.createElement("div",null,s?r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("h2",{className:"header center"},s.name),r.a.createElement("div",{className:"card hoverable"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:s.picture,alt:s.name,style:{width:"250px",margin:"0 auto"}}),r.a.createElement(f.b,{to:"/pokemons/edit/".concat(s.id),className:"btn btn-floating halfway-fab waves-effect waves-light"},r.a.createElement("i",{className:"material-icons"},"edit"))),r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content"},r.a.createElement("table",{className:"bordered striped"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Nom"),r.a.createElement("td",null,r.a.createElement("strong",null,s.name))),r.a.createElement("tr",null,r.a.createElement("td",null,"Points de vie"),r.a.createElement("td",null,r.a.createElement("strong",null,s.hp))),r.a.createElement("tr",null,r.a.createElement("td",null,"D\xe9g\xe2ts"),r.a.createElement("td",null,r.a.createElement("strong",null,s.cp))),r.a.createElement("tr",null,r.a.createElement("td",null,"Types"),r.a.createElement("td",null,s.types.map((function(e){return r.a.createElement("span",{key:e,className:i(e)},e)})))),r.a.createElement("tr",null,r.a.createElement("td",null,"Date de cr\xe9ation"),r.a.createElement("td",null,o(s.created)))))),r.a.createElement("div",{className:"card-action"},r.a.createElement(f.b,{to:"/"},"Retour")))))):r.a.createElement("h4",{className:"center"},r.a.createElement(g,null)))},N=function(){return r.a.createElement("div",{className:"center"},r.a.createElement("img",{src:"http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",alt:"Page non trouv\xe9e"}),r.a.createElement("h1",null,"Hey, cette page n'existe pas !"),r.a.createElement(f.b,{to:"/",className:"waves-effect waves-teal btn-flat"},"Retourner \xe0 l'accueil"))},y=a(3),w=a(11),j=function(e){var t=e.pokemon,a=e.isEditForm,c=Object(n.useState)({picture:{value:t.picture},name:{value:t.name,isValid:!0},hp:{value:t.hp,isValid:!0},cp:{value:t.cp,isValid:!0},types:{value:t.types,isValid:!0}}),s=Object(l.a)(c,2),o=s[0],u=s[1],p=Object(m.g)(),d=function(e){return o.types.value.includes(e)},v=function(e){var t=e.target.name,a=e.target.value,n=Object(w.a)({},t,{value:a});u(Object(y.a)({},o,{},n))},f=function(){return!a},E=function(){var e=o;if(f()){if(o.picture.value.startsWith("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/")&&o.picture.value.endsWith(".png")){var t={value:o.picture.value,error:"",isValid:!0};e=Object(y.a)({},o,{},{picture:t})}else{var a={value:o.picture.value,error:"L'url n'est pas valide.",isValid:!1};e=Object(y.a)({},o,{},{picture:a})}}if(/^[a-zA-Z\xe0\xe9\xe8 ]{3,25}$/.test(o.name.value)){var n={value:o.name.value,error:"",isValid:!0};e=Object(y.a)({},e,{},{name:n})}else{var r={value:o.name.value,error:"Le nom du pok\xe9mon est requis (1-25).",isValid:!1};e=Object(y.a)({},e,{},{name:r})}if(/^[0-9]{1,3}$/.test(o.hp.value)){var c={value:o.hp.value,error:"",isValid:!0};e=Object(y.a)({},e,{},{hp:c})}else{var s={value:o.hp.value,error:"Les points de vie du pok\xe9mon sont compris entre 0 et 999.",isValid:!1};e=Object(y.a)({},e,{},{hp:s})}if(/^[0-9]{1,2}$/.test(o.cp.value)){var l={value:o.cp.value,error:"",isValid:!0};e=Object(y.a)({},e,{},{cp:l})}else{var i={value:o.cp.value,error:"Les d\xe9g\xe2ts du pok\xe9mon sont compris entre 0 et 99",isValid:!1};e=Object(y.a)({},e,{},{cp:i})}return u(e),e.name.isValid&&e.hp.isValid&&e.cp.isValid},k=function(e){return(1!==o.types.value.length||!d(e))&&!(o.types.value.length>=3&&!d(e))},g=function(){h.addPokemon(t).then((function(){return p.push("/pokemons")}))},b=function(){h.updatePokemon(t).then((function(){return p.push("/pokemons/".concat(t.id))}))};return r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),E()&&(t.picture=o.picture.value,t.name=o.name.value,t.hp=o.hp.value,t.types=o.types.value,h.updatePokemon(t).then((function(){return p.push("/pokemons/".concat(t.id))})),a?b():g())}(e)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("div",{className:"card hoverable"},a&&r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t.picture,alt:t.name,style:{width:"250px",margin:"0 auto"}}),r.a.createElement("span",{className:"btn-floating halfway-fab waves-effect waves-light"},r.a.createElement("i",{onClick:function(){h.deletePokemon(t).then((function(){return p.push("/pokemons")}))},className:"material-icons"},"delete"))),r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content"},f()&&r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Image"),r.a.createElement("input",{id:"name",name:"picture",type:"text",className:"form-control",value:o.picture.value,onChange:function(e){return v(e)}}),o.picture.error&&r.a.createElement("div",{className:"card-panel red accent-1"},o.picture.error)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Nom"),r.a.createElement("input",{id:"name",name:"name",type:"text",className:"form-control",value:o.name.value,onChange:function(e){return v(e)}}),o.name.error&&r.a.createElement("div",{className:"card-panel red accent-1"},o.name.error)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"hp"},"Point de vie"),r.a.createElement("input",{id:"hp",name:"hp",type:"number",className:"form-control",value:o.hp.value,onChange:function(e){return v(e)}}),o.hp.error&&r.a.createElement("div",{className:"card-panel red accent-1"},o.hp.error)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"cp"},"D\xe9g\xe2ts"),r.a.createElement("input",{id:"cp",name:"cp",type:"number",className:"form-control",value:o.cp.value,onChange:function(e){return v(e)}}),o.cp.error&&r.a.createElement("div",{className:"card-panel red accent-1"},o.cp.error)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Types"),["Plante","Feu","Eau","Insecte","Normal","Electrik","Poison","Fe\u0301e","Vol","Combat","Psy"].map((function(e){return r.a.createElement("div",{key:e,style:{marginBottom:"10px"}},r.a.createElement("label",null,r.a.createElement("input",{id:e,type:"checkbox",className:"filled-in",value:e,disabled:!k(e),checked:d(e),onChange:function(t){return function(e,t){var a;t.target.checked?a={value:o.types.value.concat([e])}:a={value:o.types.value.filter((function(t){return t!==e}))};u(Object(y.a)({},o,{},{types:a}))}(e,t)}}),r.a.createElement("span",null,r.a.createElement("p",{className:i(e)},e))))})))),r.a.createElement("div",{className:"card-action center"},r.a.createElement("button",{type:"submit",className:"btn"},"Valider")))))))},O=function(e){var t=e.match,a=Object(n.useState)(null),c=Object(l.a)(a,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){h.getPokemon(+t.params.id).then((function(e){return o(e)}))}),[t.params.id]),r.a.createElement("div",null,s?r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"header center"},"\xc9diter ",s.name),r.a.createElement(j,{pokemon:s,isEditForm:!0})):r.a.createElement("h4",{className:"center"},r.a.createElement(g,null)))},x=function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"...",c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:["Normal"],l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new Date;Object(p.a)(this,e),this.id=void 0,this.hp=void 0,this.cp=void 0,this.name=void 0,this.picture=void 0,this.types=void 0,this.created=void 0,this.id=t,this.hp=a,this.cp=n,this.name=r,this.picture=c,this.types=s,this.created=l},P=function(){var e=Object(n.useState)((new Date).getTime()),t=Object(l.a)(e,1)[0],a=Object(n.useState)(new x(t)),c=Object(l.a)(a,1)[0];return r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"header center"},"Ajouter un pok\xe9mon"),r.a.createElement(j,{pokemon:c,isEditForm:!1}))},D=function(){function e(){Object(p.a)(this,e)}return Object(d.a)(e,null,[{key:"login",value:function(e,t){var a=this,n="pikachu"===e&&"pikachu"===t;return new Promise((function(e){setTimeout((function(){a.isAuthenticated=n,e(n)}),1e3)}))}}]),e}();D.isAuthenticated=!1;var V=function(){var e=Object(m.g)(),t=Object(n.useState)({username:{value:""},password:{value:""}}),a=Object(l.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)("Vous \xeates d\xe9connect\xe9. (pikachu / pikachu)"),i=Object(l.a)(o,2),u=i[0],p=i[1],d=function(e){var t=e.target.name,a=e.target.value,n=Object(w.a)({},t,{value:a});s(Object(y.a)({},c,{},n))},v=function(t){t.preventDefault(),function(){var e=c;if(c.username.value.length<3){var t={value:c.username.value,error:"Votre pr\xe9nom doit faire au moins 3 caract\xe8res de long.",isValid:!1};e=Object(y.a)({},e,{},{username:t})}else{var a={value:c.username.value,error:"",isValid:!0};e=Object(y.a)({},e,{},{username:a})}if(c.password.value.length<6){var n={value:c.password.value,error:"Votre mot de passe doit faire au moins 6 caract\xe8res de long.",isValid:!1};e=Object(y.a)({},e,{},{password:n})}else{var r={value:c.password.value,error:"",isValid:!0};e=Object(y.a)({},e,{},{password:r})}return s(e),e.username.isValid&&e.password.isValid}()&&(p("\ud83d\udc49 Tentative de connexion en cours ..."),D.login(c.username.value,c.password.value).then((function(t){t?e.push("/pokemons"):p("\ud83d\udd10 Identifiant ou mot de passe incorrect.")})))};return r.a.createElement("form",{onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("div",{className:"card hoverable"},r.a.createElement("div",{className:"card-stacked"},r.a.createElement("div",{className:"card-content"},u&&r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"card-panel grey lighten-5"},u)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"username"},"Identifiant"),r.a.createElement("input",{id:"username",type:"text",name:"username",className:"form-control",value:c.username.value,onChange:function(e){return d(e)}}),c.username.error&&r.a.createElement("div",{className:"card-panel red accent-1"},c.username.error)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Mot de passe"),r.a.createElement("input",{id:"password",type:"password",name:"password",className:"form-control",value:c.password.value,onChange:function(e){return d(e)}}),c.password.error&&r.a.createElement("div",{className:"card-panel red accent-1"},c.password.error))),r.a.createElement("div",{className:"card-action center"},r.a.createElement("button",{type:"submit",className:"btn"},"Valider")))))))},C=a(22),S=function(e){var t=e.component,a=Object(C.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return D.isAuthenticated?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/login"}})}}))},F=function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper teal"},r.a.createElement(f.b,{to:"/",className:"brand-logo center"},"Pok\xe9dex"))),r.a.createElement(m.d,null,r.a.createElement(S,{exact:!0,path:"/",component:k}),r.a.createElement(m.b,{exact:!0,path:"/login",component:V}),r.a.createElement(S,{exact:!0,path:"/pokemons",component:k}),r.a.createElement(S,{exact:!0,path:"/pokemon/add",component:P}),r.a.createElement(S,{exact:!0,path:"/pokemons/edit/:id",component:O}),r.a.createElement(S,{path:"/pokemons/:id",component:b}),r.a.createElement(m.b,{component:N}))))};s.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6782129f.chunk.js.map