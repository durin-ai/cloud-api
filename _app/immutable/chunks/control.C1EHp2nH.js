var r;const o=((r=globalThis.__sveltekit_uubam1)==null?void 0:r.base)??"/cloud-api";var a;const c=((a=globalThis.__sveltekit_uubam1)==null?void 0:a.assets)??o;class l{constructor(t,s){this.status=t,typeof s=="string"?this.body={message:s}:s?this.body=s:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class u{constructor(t,s){this.status=t,this.location=s}}class h extends Error{constructor(t,s,i){super(i),this.status=t,this.text=s}}export{l as H,u as R,h as S,c as a,o as b};
