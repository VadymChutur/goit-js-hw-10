fetch("https://restcountries.com/v2/name/ukraine").then((o=>{if(!o)throw new Error(o.status);return o.json()})).then((o=>{!function(o){const{name:l,capital:n,population:e,flags:{svg:s},languages:c}=o[0];console.log(o[0]),console.log(o[0].name.official),console.log(o[0].capital[0]),console.log(o[0].population),console.log(o[0].flags.svg),console.log(o[0].languages),console.log(l),console.log(n),console.log(e),console.log(s),console.log(c[0])}(o)})).catch((o=>console.log(o)));
//# sourceMappingURL=index.c9d3c9ae.js.map