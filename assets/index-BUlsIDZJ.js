(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const $a="187",Yc=0,To=1,Zc=2,rs=1,$c=2,is=3,oi=0,Ge=1,Ze=2,Pi=0,Li=1,na=2,wo=3,Ao=4,Kc=5,Ri=100,Jc=101,Qc=102,jc=103,th=104,eh=200,nh=201,ih=202,sh=203,Hl=204,Vl=205,rh=206,ah=207,oh=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,ia=0,sa=1,ra=2,ls=3,aa=4,oa=5,la=6,ca=7,Wl=0,ph=1,mh=2,Ln=0,Xl=1,ql=2,Yl=3,Ka=4,Zl=5,$l=6,Kl=7,Jl=300,Ui=301,cs=302,Mr=303,Sr=304,ai=1e3,xn=1001,ha=1002,Re=1003,gh=1004,_s=1005,Fe=1006,yr=1007,Vn=1008,$e=1009,Ql=1010,jl=1011,hs=1012,Ja=1013,Mn=1014,un=1015,Sn=1016,Qa=1017,ja=1018,Fi=1020,tc=35902,ec=35899,nc=1021,ic=1022,dn=1023,Zn=1026,Wn=1027,to=1028,eo=1029,li=1030,no=1031,io=1033,$s=33776,Ks=33777,Js=33778,Qs=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37488,va=37489,sr=37490,Ma=37491,Sa=37808,ya=37809,Ea=37810,ba=37811,Ta=37812,wa=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,La=37818,Da=37819,Ia=37820,Na=37821,Ua=36492,Fa=36494,Oa=36495,za=36283,Ba=36284,rr=36285,ka=36286,_h=3200,Ga=0,xh=1,cn="",ke="srgb",ar="srgb-linear",or="linear",ie="srgb",Er=7680,vh=519,Mh=512,Sh=513,yh=514,sc=515,Eh=516,bh=517,rc=518,ac=519,Th=35044,xs=35048,Ro="300 es",fn=2e3,us=2001;function wh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ah(){const i=lr("canvas");return i.style.display="block",i}const Co={};function Po(...i){const t="THREE."+i.shift();console.log(t,...i)}function oc(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=oc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=oc(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function js(...i){const t=i.join(" ");t in Co||(Co[t]=!0,Ft(...i))}function Rh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ch={[ia]:ia,[ra]:la,[aa]:aa,[ls]:oa,[sa]:sa,[la]:ra,[ca]:ca,[oa]:ls};class hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,Ha=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Ph(i,t){return(i%t+t)%t}function Tr(i,t,e){return(1-e)*i+e*t}function Lh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function so(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dh(i,t){if(t.constructor===Float32Array)return i;const e=so(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Ih(i,t){if(t.constructor===Float32Array)return i;const e=so(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}class Wt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],x=r[a+2],S=r[a+3];if(f!==S||l!==d||c!==p||h!==x){let m=l*d+c*p+h*x+f*S;m<0&&(d=-d,p=-p,x=-x,S=-S,m=-m);let u=1-o;if(m<.9995){const g=Math.acos(m),M=Math.sin(g);u=Math.sin(u*g)/M,o=Math.sin(o*g)/M,l=l*u+d*o,c=c*u+p*o,h=h*u+x*o,f=f*u+S*o}else{l=l*u+d*o,c=c*u+p*o,h=h*u+x*o,f=f*u+S*o;const g=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=g,c*=g,h*=g,f*=g}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+h*f+l*p-c*d,t[e+1]=l*x+h*d+c*f-o*p,t[e+2]=c*x+h*p+o*d-l*f,t[e+3]=h*x-o*f-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"YXZ":this._x=d*h*f+c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"ZXY":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f-d*p*x;break;case"ZYX":this._x=d*h*f-c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f+d*p*x;break;case"YZX":this._x=d*h*f+c*p*x,this._y=c*p*f+d*h*x,this._z=c*h*x-d*p*f,this._w=c*h*f-d*p*x;break;case"XZY":this._x=d*h*f-c*p*x,this._y=c*p*f-d*h*x,this._z=c*h*x+d*p*f,this._w=c*h*f+d*p*x;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wr.copy(this).projectOnVector(t),this.sub(wr)}reflect(t){return this.sub(wr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new F,Lo=new Bi;class Bt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],d=n[2],p=n[5],x=n[8],S=s[0],m=s[3],u=s[6],g=s[1],M=s[4],v=s[7],w=s[2],T=s[5],_=s[8];return r[0]=a*S+o*g+l*w,r[3]=a*m+o*M+l*T,r[6]=a*u+o*v+l*_,r[1]=c*S+h*g+f*w,r[4]=c*m+h*M+f*T,r[7]=c*u+h*v+f*_,r[2]=d*S+p*g+x*w,r[5]=d*m+p*M+x*T,r[8]=d*u+p*v+x*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,p=c*r-a*l,x=e*f+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=f*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=d*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Bt,Do=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Io=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nh(){const i={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cn?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ar]:{primaries:t,whitePoint:n,transfer:or,toXYZ:Do,fromXYZ:Io,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Do,fromXYZ:Io,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}const Yt=Nh();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let di;class Uh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{di===void 0&&(di=lr("canvas")),di.width=t.width,di.height=t.height;const s=di.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=di}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Dn(e[n]/255)*255):e[n]=Dn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fh=0;class ro{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rr(s[a].image)):r.push(Rr(s[a]))}else r=Rr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let Oh=0;const Cr=new F;class Oe extends hi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=xn,s=xn,r=Fe,a=Vn,o=dn,l=$e,c=Oe.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=fs(),this.name="",this.source=new ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Jl;Oe.DEFAULT_ANISOTROPY=1;class ge{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],p=l[5],x=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(p+1)/2,w=(u+1)/2,T=(h+d)/4,_=(f+S)/4,E=(x+m)/4;return M>v&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=_/n):v>w?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=_/r,s=E/r),this.set(n,s,r,e),this}let g=Math.sqrt((m-x)*(m-x)+(f-S)*(f-S)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(f-S)/g,this.z=(d-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends hi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Oe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Fe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ro(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends zh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lc extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bh extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class te{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,f,d,p,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,d,p,x,S,m)}set(t,e,n,s,r,a,o,l,c,h,f,d,p,x,S,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=d,u[3]=p,u[7]=x,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),a=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*f,x=o*h,S=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+x*c,e[5]=d-S*c,e[9]=-o*l,e[2]=S-d*c,e[6]=x+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*f,x=c*h,S=c*f;e[0]=d+S*o,e[4]=x*o-p,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=p*o-x,e[6]=S+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*f,x=c*h,S=c*f;e[0]=d-S*o,e[4]=-a*f,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*h,e[9]=S-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*f,x=o*h,S=o*f;e[0]=l*h,e[4]=x*c-p,e[8]=d*c+S,e[1]=l*f,e[5]=S*c+d,e[9]=p*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,x=o*l,S=o*c;e[0]=l*h,e[4]=S-d*f,e[8]=x*f+p,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*f+x,e[10]=d-S*f}else if(t.order==="XZY"){const d=a*l,p=a*c,x=o*l,S=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+S,e[5]=a*h,e[9]=p*f-x,e[2]=x*f-p,e[6]=o*h,e[10]=S*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kh,t,Gh)}lookAt(t,e,n){const s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Un.crossVectors(n,Xe),Un.lengthSq()===0&&(Math.abs(n.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Un.crossVectors(n,Xe)),Un.normalize(),vs.crossVectors(Xe,Un),s[0]=Un.x,s[4]=vs.x,s[8]=Xe.x,s[1]=Un.y,s[5]=vs.y,s[9]=Xe.y,s[2]=Un.z,s[6]=vs.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],d=n[9],p=n[13],x=n[2],S=n[6],m=n[10],u=n[14],g=n[3],M=n[7],v=n[11],w=n[15],T=s[0],_=s[4],E=s[8],R=s[12],C=s[1],D=s[5],N=s[9],O=s[13],L=s[2],H=s[6],q=s[10],B=s[14],et=s[3],W=s[7],j=s[11],tt=s[15];return r[0]=a*T+o*C+l*L+c*et,r[4]=a*_+o*D+l*H+c*W,r[8]=a*E+o*N+l*q+c*j,r[12]=a*R+o*O+l*B+c*tt,r[1]=h*T+f*C+d*L+p*et,r[5]=h*_+f*D+d*H+p*W,r[9]=h*E+f*N+d*q+p*j,r[13]=h*R+f*O+d*B+p*tt,r[2]=x*T+S*C+m*L+u*et,r[6]=x*_+S*D+m*H+u*W,r[10]=x*E+S*N+m*q+u*j,r[14]=x*R+S*O+m*B+u*tt,r[3]=g*T+M*C+v*L+w*et,r[7]=g*_+M*D+v*H+w*W,r[11]=g*E+M*N+v*q+w*j,r[15]=g*R+M*O+v*B+w*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],p=t[14],x=t[3],S=t[7],m=t[11],u=t[15],g=l*p-c*d,M=o*p-c*f,v=o*d-l*f,w=a*p-c*h,T=a*d-l*h,_=a*f-o*h;return e*(S*g-m*M+u*v)-n*(x*g-m*w+u*T)+s*(x*M-S*w+u*_)-r*(x*v-S*T+m*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],p=t[11],x=t[12],S=t[13],m=t[14],u=t[15],g=e*o-n*a,M=e*l-s*a,v=e*c-r*a,w=n*l-s*o,T=n*c-r*o,_=s*c-r*l,E=h*S-f*x,R=h*m-d*x,C=h*u-p*x,D=f*m-d*S,N=f*u-p*S,O=d*u-p*m,L=g*O-M*N+v*D+w*C-T*R+_*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/L;return t[0]=(o*O-l*N+c*D)*H,t[1]=(s*N-n*O-r*D)*H,t[2]=(S*_-m*T+u*w)*H,t[3]=(d*T-f*_-p*w)*H,t[4]=(l*C-a*O-c*R)*H,t[5]=(e*O-s*C+r*R)*H,t[6]=(m*v-x*_-u*M)*H,t[7]=(h*_-d*v+p*M)*H,t[8]=(a*N-o*C+c*E)*H,t[9]=(n*C-e*N-r*E)*H,t[10]=(x*T-S*v+u*g)*H,t[11]=(f*v-h*T-p*g)*H,t[12]=(o*R-a*D-l*E)*H,t[13]=(e*D-n*R+s*E)*H,t[14]=(S*M-x*w-m*g)*H,t[15]=(h*w-f*M+d*g)*H,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,p=r*h,x=r*f,S=a*h,m=a*f,u=o*f,g=l*c,M=l*h,v=l*f,w=n.x,T=n.y,_=n.z;return s[0]=(1-(S+u))*w,s[1]=(p+v)*w,s[2]=(x-M)*w,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(d+u))*T,s[6]=(m+g)*T,s[7]=0,s[8]=(x+M)*_,s[9]=(m-g)*_,s[10]=(1-(d+S))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=fi.set(s[0],s[1],s[2]).length();const o=fi.set(s[4],s[5],s[6]).length(),l=fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),sn.copy(this);const c=1/a,h=1/o,f=1/l;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,e.setFromRotationMatrix(sn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=fn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===fn)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===us)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=fn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===fn)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===us)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fi=new F,sn=new te,kh=new F(0,0,0),Gh=new F(1,1,1),Un=new F,vs=new F,Xe=new F,No=new te,Uo=new Bi;class $n{constructor(t=0,e=0,n=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return No.makeRotationFromQuaternion(t),this.setFromRotationMatrix(No,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class cc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hh=0;const Fo=new F,pi=new Bi,bn=new te,Ms=new F,Wi=new F,Vh=new F,Wh=new Bi,Oo=new F(1,0,0),zo=new F(0,1,0),Bo=new F(0,0,1),ko={type:"added"},Xh={type:"removed"},mi={type:"childadded",child:null},Pr={type:"childremoved",child:null};class ve extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new F,e=new $n,n=new Bi,s=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Bt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Oo,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(Bo,t)}translateOnAxis(t,e){return Fo.copy(t).applyQuaternion(this.quaternion),this.position.add(Fo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oo,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(Bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Wi,Ms,this.up):bn.lookAt(Ms,Wi,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(bn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ko),mi.child=t,this.dispatchEvent(mi),mi.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xh),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ko),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,Vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ve.DEFAULT_UP=new F(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xn extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qh={type:"move"};class Lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&d>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Ph(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Dr(a,r,t+1/3),this.g=Dr(a,r,t),this.b=Dr(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=hc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Dn(t.r),this.g=Dn(t.g),this.b=Dn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Yt.workingToColorSpace(Ne.copy(this),t),Math.round(Zt(Ne.r*255,0,255))*65536+Math.round(Zt(Ne.g*255,0,255))*256+Math.round(Zt(Ne.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=ke){Yt.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Ss);const n=Tr(Fn.h,Ss.h,e),s=Tr(Fn.s,Ss.s,e),r=Tr(Fn.l,Ss.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Vt;Vt.NAMES=hc;class ao{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new ao(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yh extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const rn=new F,Tn=new F,Ir=new F,wn=new F,gi=new F,_i=new F,Go=new F,Nr=new F,Ur=new F,Fr=new F,Or=new ge,zr=new ge,Br=new ge;class hn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Tn.subVectors(n,e),Ir.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(Tn),l=rn.dot(Ir),c=Tn.dot(Tn),h=Tn.dot(Ir),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*h)*d,x=(a*h-o*l)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Or.setScalar(0),zr.setScalar(0),Br.setScalar(0),Or.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Or,r.x),a.addScaledVector(zr,r.y),a.addScaledVector(Br,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Tn.subVectors(t,e),rn.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),rn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;gi.subVectors(s,n),_i.subVectors(r,n),Nr.subVectors(t,n);const l=gi.dot(Nr),c=_i.dot(Nr);if(l<=0&&c<=0)return e.copy(n);Ur.subVectors(t,s);const h=gi.dot(Ur),f=_i.dot(Ur);if(h>=0&&f<=h)return e.copy(s);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(gi,a);Fr.subVectors(t,r);const p=gi.dot(Fr),x=_i.dot(Fr);if(x>=0&&p<=x)return e.copy(r);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(_i,o);const m=h*x-p*f;if(m<=0&&f-h>=0&&p-x>=0)return Go.subVectors(r,s),o=(f-h)/(f-h+(p-x)),e.copy(s).addScaledVector(Go,o);const u=1/(m+S+d);return a=S*u,o=d*u,e.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ui{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(t.matrixWorld),this.union(ys)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),Es.subVectors(this.max,Xi),xi.subVectors(t.a,Xi),vi.subVectors(t.b,Xi),Mi.subVectors(t.c,Xi),On.subVectors(vi,xi),zn.subVectors(Mi,vi),jn.subVectors(xi,Mi);let e=[0,-On.z,On.y,0,-zn.z,zn.y,0,-jn.z,jn.y,On.z,0,-On.x,zn.z,0,-zn.x,jn.z,0,-jn.x,-On.y,On.x,0,-zn.y,zn.x,0,-jn.y,jn.x,0];return!kr(e,xi,vi,Mi,Es)||(e=[1,0,0,0,1,0,0,0,1],!kr(e,xi,vi,Mi,Es))?!1:(bs.crossVectors(On,zn),e=[bs.x,bs.y,bs.z],kr(e,xi,vi,Mi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const An=[new F,new F,new F,new F,new F,new F,new F,new F],an=new F,ys=new ui,xi=new F,vi=new F,Mi=new F,On=new F,zn=new F,jn=new F,Xi=new F,Es=new F,bs=new F,ti=new F;function kr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const xe=new F,Ts=new Wt;let Zh=0;class Yn extends hi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?so(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ts.fromBufferAttribute(this,e),Ts.applyMatrix3(t),this.setXY(e,Ts.x,Ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Dh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Ih(t,this.array)}}class uc extends Yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class dc extends Yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Yn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const $h=new ui,qi=new F,Gr=new F;class ki{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$h.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(Gr)),this.expandByPoint(qi.copy(t.center).sub(Gr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Kh=0;const Ke=new te,Hr=new ve,Si=new F,qe=new ui,Yi=new ui,we=new F;class Ce extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wh(t)?dc:uc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(qe.min,Yi.min),qe.expandByPoint(we),we.addVectors(qe.max,Yi.max),qe.expandByPoint(we)):(qe.expandByPoint(Yi.min),qe.expandByPoint(Yi.max))}qe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(Si.fromBufferAttribute(t,c),we.add(Si)),s=Math.max(s,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Yn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new F,l[R]=new F;const h=new F,f=new F,d=new F,p=new Wt,x=new Wt,S=new Wt,m=new F,u=new F;function g(R,C,D){c[R]=c[C]=c[D]=1,h.fromBufferAttribute(n,R),f.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),p.fromBufferAttribute(r,R),x.fromBufferAttribute(r,C),S.fromBufferAttribute(r,D),f.sub(h),d.sub(h),x.sub(p),S.sub(p);const N=1/(x.x*S.y-S.x*x.y);isFinite(N)&&(m.copy(f).multiplyScalar(S.y).addScaledVector(d,-x.y).multiplyScalar(N),u.copy(d).multiplyScalar(x.x).addScaledVector(f,-S.x).multiplyScalar(N),o[R].add(m),o[C].add(m),o[D].add(m),l[R].add(u),l[C].add(u),l[D].add(u))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,C=M.length;R<C;++R){const D=M[R],N=D.start,O=D.count;for(let L=N,H=N+O;L<H;L+=3)g(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const v=new F,w=new F,T=new F,_=new F;function E(R){T.fromBufferAttribute(s,R),_.copy(T);const C=o[R];v.copy(C),v.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(_,C);const N=w.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,N)}for(let R=0,C=n.count;R<C;++R)c[R]&&E(R);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Yn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,f=new F;if(t)for(let d=0,p=t.count;d<p;d+=3){const x=t.getX(d+0),S=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*h;for(let u=0;u<h;u++)d[x++]=c[p++]}return new Yn(d,h,f)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vr=new F,Jh=new F,Qh=new Bt;class Gn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vr.subVectors(n,e).cross(Jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Vr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qh.getNormalMatrix(t),s=this.coplanarPoint(Vr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let jh=0;class Gi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Li,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Vl,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Rn=new F,Wr=new F,ws=new F,As=new F;class fc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wr.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),As.copy(this.origin).sub(Wr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ws),o=As.dot(this.direction),l=-As.dot(ws),c=As.lengthSq(),h=Math.abs(1-a*a);let f,d,p,x;if(h>0)if(f=a*l-o,d=a*o-l,x=r*h,f>=0)if(d>=-x)if(d<=x){const S=1/h;f*=S,d*=S,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wr).addScaledVector(ws,d),p}intersectSphere(t,e){if(t.radius<0)return null;Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,p=t.z-a.z,x=e.x-a.x,S=e.y-a.y,m=e.z-a.z,u=n.x-a.x,g=n.y-a.y,M=n.z-a.z,v=Math.abs(l),w=Math.abs(c),T=Math.abs(h);let _,E,R,C,D,N,O,L,H,q,B,et;if(v>=w&&v>=T?(R=l,N=f,H=x,et=u,l>=0?(_=c,E=h,C=d,D=p,O=S,L=m,q=g,B=M):(_=h,E=c,C=p,D=d,O=m,L=S,q=M,B=g)):w>=T?(R=c,N=d,H=S,et=g,c>=0?(_=h,E=l,C=p,D=f,O=m,L=x,q=M,B=u):(_=l,E=h,C=f,D=p,O=x,L=m,q=u,B=M)):(R=h,N=p,H=m,et=M,h>=0?(_=l,E=c,C=f,D=d,O=x,L=S,q=u,B=g):(_=c,E=l,C=d,D=f,O=S,L=x,q=g,B=u)),R===0)return null;const W=_/R,j=E/R,tt=1/R,bt=C-W*N,It=D-j*N,Z=O-W*H,mt=L-j*H,yt=q-W*et,Rt=B-j*et,gt=yt*mt-Rt*Z,Ut=bt*Rt-It*yt,ue=Z*It-mt*bt;if(s){if(gt<0||Ut<0||ue<0)return null}else if((gt<0||Ut<0||ue<0)&&(gt>0||Ut>0||ue>0))return null;const Q=gt+Ut+ue;if(Q===0)return null;const ft=tt*(gt*N+Ut*H+ue*et);return(Q>0?ft<0:ft>0)?null:this.at(ft/Q,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Va extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ho=new te,ei=new fc,Rs=new ki,Vo=new F,Cs=new F,Ps=new F,Ls=new F,Xr=new F,Ds=new F,Wo=new F,Is=new F;class he extends ve{constructor(t=new Ce,e=new Va){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ds.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Xr.fromBufferAttribute(f,t),a?Ds.addScaledVector(Xr,h):Ds.addScaledVector(Xr.sub(e),h))}e.add(Ds)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Rs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Rs,Vo)===null||ei.origin.distanceToSquared(Vo)>(t.far-t.near)**2))&&(Ho.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Ho),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const m=d[x],u=a[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,w=M;v<w;v+=3){const T=o.getX(v),_=o.getX(v+1),E=o.getX(v+2);s=Ns(this,u,t,n,c,h,f,T,_,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=x,u=S;m<u;m+=3){const g=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Ns(this,a,t,n,c,h,f,g,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=d.length;x<S;x++){const m=d[x],u=a[m.materialIndex],g=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,w=M;v<w;v+=3){const T=v,_=v+1,E=v+2;s=Ns(this,u,t,n,c,h,f,T,_,E),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,u=S;m<u;m+=3){const g=m,M=m+1,v=m+2;s=Ns(this,a,t,n,c,h,f,g,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function tu(i,t,e,n,s,r,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;Is.copy(o),Is.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Is);return c<e.near||c>e.far?null:{distance:c,point:Is.clone(),object:i}}function Ns(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Cs),i.getVertexPosition(l,Ps),i.getVertexPosition(c,Ls);const h=tu(i,t,e,n,Cs,Ps,Ls,Wo);if(h){const f=new F;hn.getBarycoord(Wo,Cs,Ps,Ls,f),s&&(h.uv=hn.getInterpolatedAttribute(s,o,l,c,f,new Wt)),r&&(h.uv1=hn.getInterpolatedAttribute(r,o,l,c,f,new Wt)),a&&(h.normal=hn.getInterpolatedAttribute(a,o,l,c,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};hn.getNormal(Cs,Ps,Ls,d.normal),h.face=d,h.barycoord=f}return h}class cr extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Re,h=Re,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo extends Yn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yi=new te,qo=new te,Us=[],Yo=new ui,eu=new te,Zi=new he,$i=new ki;class Ei extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,eu)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),Yo.copy(t.boundingBox).applyMatrix4(yi),this.boundingBox.union(Yo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,yi),$i.copy(t.boundingSphere).applyMatrix4(yi),this.boundingSphere.union($i)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Zi.geometry=this.geometry,Zi.material=this.material,Zi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$i.copy(this.boundingSphere),$i.applyMatrix4(n),t.ray.intersectsSphere($i)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yi),qo.multiplyMatrices(n,yi),Zi.matrixWorld=qo,Zi.raycast(t,Us);for(let a=0,o=Us.length;a<o;a++){const l=Us[a];l.instanceId=r,l.object=this,e.push(l)}Us.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(s*this.count),s,this.count,to,un));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ni=new ki,nu=new Wt(.5,.5),Fs=new F;class ds{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],p=r[7],x=r[8],S=r[9],m=r[10],u=r[11],g=r[12],M=r[13],v=r[14],w=r[15];if(s[0].setComponents(c-a,p-h,u-x,w-g).normalize(),s[1].setComponents(c+a,p+h,u+x,w+g).normalize(),s[2].setComponents(c+o,p+f,u+S,w+M).normalize(),s[3].setComponents(c-o,p-f,u-S,w-M).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,p-d,u-m,w-v).normalize();else if(s[4].setComponents(c-l,p-d,u-m,w-v).normalize(),e===fn)s[5].setComponents(c+l,p+d,u+m,w+v).normalize();else if(e===us)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){ni.center.set(0,0,0);const e=nu.distanceTo(t.center);return ni.radius=.7071067811865476+e,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Zo=new te;class oo{constructor(){this.coordinateSystem=fn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Zo.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ds),n[s].setFromProjectionMatrix(Zo,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ds),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new oo().copy(this)}}class iu extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $o=new te,Wa=new fc,Os=new ki,zs=new F;class su extends ve{constructor(t=new Ce,e=new iu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Os.radius+=r,t.ray.intersectsSphere(Os)===!1)return;$o.copy(s).invert(),Wa.copy(t.ray).applyMatrix4($o);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=d,S=p;x<S;x++){const m=c.getX(x);zs.fromBufferAttribute(f,m),Ko(zs,m,l,s,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=d,S=p;x<S;x++)zs.fromBufferAttribute(f,x),Ko(zs,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ko(i,t,e,n,s,r,a){const o=Wa.distanceSqToPoint(i);if(o<e){const l=new F;Wa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class lo extends Oe{constructor(t=[],e=Ui,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ru extends Oe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oi extends Oe{constructor(t,e,n=Mn,s,r,a,o=Re,l=Re,c,h=Zn,f=1){if(h!==Zn&&h!==Wn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ro(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class pc extends Oi{constructor(t,e=Mn,n=Ui,s,r,a=Re,o=Re,l,c=Zn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class mc extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class tn extends Ce{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(f,2));function x(S,m,u,g,M,v,w,T,_,E,R){const C=v/_,D=w/E,N=v/2,O=w/2,L=T/2,H=_+1,q=E+1;let B=0,et=0;const W=new F;for(let j=0;j<q;j++){const tt=j*D-O;for(let bt=0;bt<H;bt++){const It=bt*C-N;W[S]=It*g,W[m]=tt*M,W[u]=L,c.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[u]=T>0?1:-1,h.push(W.x,W.y,W.z),f.push(bt/_),f.push(1-j/E),B+=1}}for(let j=0;j<E;j++)for(let tt=0;tt<_;tt++){const bt=d+tt+H*j,It=d+tt+H*(j+1),Z=d+(tt+1)+H*(j+1),mt=d+(tt+1)+H*j;l.push(bt,It,mt),l.push(It,Z,mt),et+=6}o.addGroup(p,et,R),p+=et,d+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class je extends Ce{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],d=[],p=[];let x=0;const S=[],m=n/2;let u=0;g(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new $t(f,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(p,2));function g(){const v=new F,w=new F;let T=0;const _=(e-t)/n;for(let E=0;E<=r;E++){const R=[],C=E/r,D=C*(e-t)+t;for(let N=0;N<=s;N++){const O=N/s,L=O*l+o,H=Math.sin(L),q=Math.cos(L);w.x=D*H,w.y=-C*n+m,w.z=D*q,f.push(w.x,w.y,w.z),v.set(H,_,q).normalize(),d.push(v.x,v.y,v.z),p.push(O,1-C),R.push(x++)}S.push(R)}for(let E=0;E<s;E++)for(let R=0;R<r;R++){const C=S[R][E],D=S[R+1][E],N=S[R+1][E+1],O=S[R][E+1];(t>0||R!==0)&&(h.push(C,D,O),T+=3),(e>0||R!==r-1)&&(h.push(D,N,O),T+=3)}c.addGroup(u,T,0),u+=T}function M(v){const w=x,T=new Wt,_=new F;let E=0;const R=v===!0?t:e,C=v===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,m*C,0),d.push(0,C,0),p.push(.5,.5),x++;const D=x;for(let N=0;N<=s;N++){const L=N/s*l+o,H=Math.cos(L),q=Math.sin(L);_.x=R*q,_.y=m*C,_.z=R*H,f.push(_.x,_.y,_.z),d.push(0,C,0),T.x=H*.5+.5,T.y=q*.5*C+.5,p.push(T.x,T.y),x++}for(let N=0;N<s;N++){const O=w+N,L=D+N;v===!0?h.push(L,L+1,O):h.push(L+1,L,O),E+=3}c.addGroup(u,E,v===!0?1:2),u+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class as extends je{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new as(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class co extends Ce{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const M=new F,v=new F,w=new F;for(let T=0;T<e.length;T+=3)p(e[T+0],M),p(e[T+1],v),p(e[T+2],w),l(M,v,w,g)}function l(g,M,v,w){const T=w+1,_=[];for(let E=0;E<=T;E++){_[E]=[];const R=g.clone().lerp(v,E/T),C=M.clone().lerp(v,E/T),D=T-E;for(let N=0;N<=D;N++)N===0&&E===T?_[E][N]=R:_[E][N]=R.clone().lerp(C,N/D)}for(let E=0;E<T;E++)for(let R=0;R<2*(T-E)-1;R++){const C=Math.floor(R/2);R%2===0?(d(_[E][C+1]),d(_[E+1][C]),d(_[E][C])):(d(_[E][C+1]),d(_[E+1][C+1]),d(_[E+1][C]))}}function c(g){const M=new F;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(g),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const g=new F;for(let M=0;M<r.length;M+=3){g.x=r[M+0],g.y=r[M+1],g.z=r[M+2];const v=m(g)/2/Math.PI+.5,w=u(g)/Math.PI+.5;a.push(v,1-w)}x(),f()}function f(){for(let g=0;g<a.length;g+=6){const M=a[g+0],v=a[g+2],w=a[g+4],T=Math.max(M,v,w),_=Math.min(M,v,w);T>.9&&_<.1&&(M<.2&&(a[g+0]+=1),v<.2&&(a[g+2]+=1),w<.2&&(a[g+4]+=1))}}function d(g){r.push(g.x,g.y,g.z)}function p(g,M){const v=g*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function x(){const g=new F,M=new F,v=new F,w=new F,T=new Wt,_=new Wt,E=new Wt;for(let R=0,C=0;R<r.length;R+=9,C+=6){g.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),v.set(r[R+6],r[R+7],r[R+8]),T.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),w.copy(g).add(M).add(v).divideScalar(3);const D=m(w);S(T,C+0,g,D),S(_,C+2,M,D),S(E,C+4,v,D)}}function S(g,M,v,w){w<0&&g.x===1&&(a[M]=g.x-1),v.x===0&&v.z===0&&(a[M]=w/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new co(t.vertices,t.indices,t.radius,t.detail)}}class hr extends co{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hr(t.radius,t.detail)}}class ci extends Ce{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,d=e/l,p=[],x=[],S=[],m=[];for(let u=0;u<h;u++){const g=u*d-a;for(let M=0;M<c;M++){const v=M*f-r;x.push(v,-g,0),S.push(0,0,1),m.push(M/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const M=g+c*u,v=g+c*(u+1),w=g+1+c*(u+1),T=g+1+c*u;p.push(M,v,T),p.push(v,w,T)}this.setIndex(p),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(S,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.widthSegments,t.heightSegments)}}class ho extends Ce{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let f=t;const d=(e-t)/s,p=new F,x=new Wt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){const u=r+m/n*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/e+1)/2,x.y=(p.y/e+1)/2,h.push(x.x,x.y)}f+=d}for(let S=0;S<s;S++){const m=S*(n+1);for(let u=0;u<n;u++){const g=u+m,M=g,v=g+n+1,w=g+n+2,T=g+1;o.push(M,v,T),o.push(v,w,T)}}this.setIndex(o),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ho(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class pr extends Ce{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new F,d=new F,p=[],x=[],S=[],m=[];for(let u=0;u<=n;u++){const g=[],M=u/n,v=a+M*o,w=t*Math.cos(v),T=Math.sqrt(t*t-w*w);let _=0;u===0&&a===0?_=.5/e:u===n&&l===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){const R=E/e,C=s+R*r;f.x=-T*Math.cos(C),f.y=w,f.z=T*Math.sin(C),x.push(f.x,f.y,f.z),d.copy(f).normalize(),S.push(d.x,d.y,d.z),m.push(R+_,1-M),g.push(c++)}h.push(g)}for(let u=0;u<n;u++)for(let g=0;g<e;g++){const M=h[u][g+1],v=h[u][g],w=h[u+1][g],T=h[u+1][g+1];(u!==0||a>0)&&p.push(M,v,T),(u!==n-1||l<Math.PI)&&p.push(v,w,T)}this.setIndex(p),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(S,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function zi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Jo(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Jo(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=zi(i[e]);for(const s in n)t[s]=n[s]}return t}function Jo(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function au(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const ou={clone:zi,merge:Be};var lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=au(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Vt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new te().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class hu extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ue extends Gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uu extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class du extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class mr extends ve{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class fu extends mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const qr=new te,Qo=new F,jo=new F;class _c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Qo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qo),jo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jo),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){qr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(qr,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bs=new F,ks=new Bi,pn=new F;class xc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bs,ks,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bs,ks,pn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bs,ks,pn),pn.x===1&&pn.y===1&&pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bs,ks,pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new F,tl=new Wt,el=new Wt;class Qe extends xc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ha*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,tl,el),e.subVectors(el,tl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class pu extends _c{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}}class nl extends mr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new pu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class vc extends xc{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class mu extends _c{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gu extends mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new mu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class _u extends mr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const bi=-90,Ti=1;class Xa extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(bi,Ti,t,e);s.layers=this.layers,this.add(s);const r=new Qe(bi,Ti,t,e);r.layers=this.layers,this.add(r);const a=new Qe(bi,Ti,t,e);a.layers=this.layers,this.add(a);const o=new Qe(bi,Ti,t,e);o.layers=this.layers,this.add(o);const l=new Qe(bi,Ti,t,e);l.layers=this.layers,this.add(l);const c=new Qe(bi,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class xu extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}function il(i,t,e,n){const s=vu(n);switch(e){case nc:return i*t;case to:return i*t/s.components*s.byteLength;case eo:return i*t/s.components*s.byteLength;case li:return i*t*2/s.components*s.byteLength;case no:return i*t*2/s.components*s.byteLength;case ic:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case io:return i*t*4/s.components*s.byteLength;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(t,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(t,8)/2;case ma:case ga:case xa:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _a:case sr:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ua:case Fa:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case za:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rr:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vu(i){switch(i){case $e:case Ql:return{byteLength:1,components:1};case hs:case jl:case Sn:return{byteLength:2,components:1};case Qa:case ja:return{byteLength:2,components:4};case Mn:case Ja:case un:return{byteLength:4,components:1};case tc:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);function Mc(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mu(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,x)=>p.start-x.start);let d=0;for(let p=1;p<f.length;p++){const x=f[d],S=f[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++d,f[d]=S)}f.length=d+1;for(let p=0,x=f.length;p<x;p++){const S=f[p];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ru=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Pu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ku=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ju=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yd=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Id=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Od=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,af=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ff=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Af=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Pf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$f=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Su,alphahash_pars_fragment:yu,alphamap_fragment:Eu,alphamap_pars_fragment:bu,alphatest_fragment:Tu,alphatest_pars_fragment:wu,aomap_fragment:Au,aomap_pars_fragment:Ru,batching_pars_vertex:Cu,batching_vertex:Pu,begin_vertex:Lu,beginnormal_vertex:Du,bsdfs:Iu,iridescence_fragment:Nu,bumpmap_pars_fragment:Uu,clipping_planes_fragment:Fu,clipping_planes_pars_fragment:Ou,clipping_planes_pars_vertex:zu,clipping_planes_vertex:Bu,color_fragment:ku,color_pars_fragment:Gu,color_pars_vertex:Hu,color_vertex:Vu,common:Wu,defaultnormal_vertex:Xu,displacementmap_pars_vertex:qu,displacementmap_vertex:Yu,emissivemap_fragment:Zu,emissivemap_pars_fragment:$u,colorspace_fragment:Ku,colorspace_pars_fragment:Ju,envmap_fragment:Qu,envmap_common_pars_fragment:ju,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:dd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:hd,lights_pars_begin:ud,lights_toon_fragment:fd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:gd,lights_physical_fragment:_d,lights_physical_pars_fragment:xd,lights_fragment_begin:vd,lights_fragment_maps:Md,lights_fragment_end:Sd,lightprobes_pars_fragment:yd,logdepthbuf_fragment:Ed,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:wd,map_fragment:Ad,map_pars_fragment:Rd,map_particle_fragment:Cd,map_particle_pars_fragment:Pd,metalnessmap_fragment:Ld,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Id,morphcolor_vertex:Nd,morphnormal_vertex:Ud,morphtarget_pars_vertex:Fd,morphtarget_vertex:Od,normal_fragment_begin:zd,normal_fragment_maps:Bd,normal_pars_fragment:kd,normal_pars_vertex:Gd,normal_vertex:Hd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Wd,clearcoat_normal_fragment_maps:Xd,clearcoat_pars_fragment:qd,iridescence_pars_fragment:Yd,opaque_fragment:Zd,packing:$d,premultiplied_alpha_fragment:Kd,project_vertex:Jd,dithering_fragment:Qd,dithering_pars_fragment:jd,roughnessmap_fragment:tf,roughnessmap_pars_fragment:ef,shadowmap_pars_fragment:nf,shadowmap_pars_vertex:sf,shadowmap_vertex:rf,shadowmask_pars_fragment:af,skinbase_vertex:of,skinning_pars_vertex:lf,skinning_vertex:cf,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:df,tonemapping_fragment:ff,tonemapping_pars_fragment:pf,transmission_fragment:mf,transmission_pars_fragment:gf,uv_pars_fragment:_f,uv_pars_vertex:xf,uv_vertex:vf,worldpos_vertex:Mf,background_vert:Sf,background_frag:yf,backgroundCube_vert:Ef,backgroundCube_frag:bf,cube_vert:Tf,cube_frag:wf,depth_vert:Af,depth_frag:Rf,distance_vert:Cf,distance_frag:Pf,equirect_vert:Lf,equirect_frag:Df,linedashed_vert:If,linedashed_frag:Nf,meshbasic_vert:Uf,meshbasic_frag:Ff,meshlambert_vert:Of,meshlambert_frag:zf,meshmatcap_vert:Bf,meshmatcap_frag:kf,meshnormal_vert:Gf,meshnormal_frag:Hf,meshphong_vert:Vf,meshphong_frag:Wf,meshphysical_vert:Xf,meshphysical_frag:qf,meshtoon_vert:Yf,meshtoon_frag:Zf,points_vert:$f,points_frag:Kf,shadow_vert:Jf,shadow_frag:Qf,sprite_vert:jf,sprite_frag:tp},xt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},_n={basic:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Be([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Be([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Be([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Be([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Be([xt.points,xt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Be([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Be([xt.common,xt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Be([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Be([xt.sprite,xt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Be([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Be([xt.lights,xt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};_n.physical={uniforms:Be([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Gs={r:0,b:0,g:0},ep=new te,Sc=new Bt;Sc.set(-1,0,0,0,1,0,0,0,1);function np(i,t,e,n,s,r){const a=new Vt(0);let o=s===!0?0:1,l,c,h=null,f=0,d=null;function p(g){let M=g.isScene===!0?g.background:null;if(M&&M.isTexture){const v=g.backgroundBlurriness>0;M=t.get(M,v)}return M}function x(g){let M=!1;const v=p(g);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(g,M){const v=p(M);v&&v.isCubeTexture?(c===void 0&&(c=new he(new tn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:zi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ep.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sc),c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==ie,(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new he(new ci(2,2),new en({name:"BackgroundMaterial",uniforms:zi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,M){g.getRGB(Gs,gc(i)),e.buffers.color.setClear(Gs.r,Gs.g,Gs.b,M,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,M=1){a.set(g),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(a,o)},render:x,addToRenderList:S,dispose:u}}function ip(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(D,N,O,L,H){let q=!1;const B=f(D,L,O,N);r!==B&&(r=B,c(r.object)),q=p(D,L,O,H),q&&x(D,L,O,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(D,N,O,L),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,N,O,L){const H=L.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const B=D.isInstancedMesh===!0?D.id:0;let et=q[B];et===void 0&&(et={},q[B]=et);let W=et[O.id];W===void 0&&(W={},et[O.id]=W);let j=W[H];return j===void 0&&(j=d(l()),W[H]=j),j}function d(D){const N=[],O=[],L=[];for(let H=0;H<e;H++)N[H]=0,O[H]=0,L[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:L,object:D,attributes:{},index:null}}function p(D,N,O,L){const H=r.attributes,q=N.attributes;let B=0;const et=O.getAttributes();for(const W in et)if(et[W].location>=0){const tt=H[W];let bt=q[W];if(bt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(bt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(bt=D.instanceColor)),tt===void 0||tt.attribute!==bt||bt&&tt.data!==bt.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function x(D,N,O,L){const H={},q=N.attributes;let B=0;const et=O.getAttributes();for(const W in et)if(et[W].location>=0){let tt=q[W];tt===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));const bt={};bt.attribute=tt,tt&&tt.data&&(bt.data=tt.data),H[W]=bt,B++}r.attributes=H,r.attributesNum=B,r.index=L}function S(){const D=r.newAttributes;for(let N=0,O=D.length;N<O;N++)D[N]=0}function m(D){u(D,0)}function u(D,N){const O=r.newAttributes,L=r.enabledAttributes,H=r.attributeDivisors;O[D]=1,L[D]===0&&(i.enableVertexAttribArray(D),L[D]=1),H[D]!==N&&(i.vertexAttribDivisor(D,N),H[D]=N)}function g(){const D=r.newAttributes,N=r.enabledAttributes;for(let O=0,L=N.length;O<L;O++)N[O]!==D[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function M(D,N,O,L,H,q,B){B===!0?i.vertexAttribIPointer(D,N,O,H,q):i.vertexAttribPointer(D,N,O,L,H,q)}function v(D,N,O,L){S();const H=L.attributes,q=O.getAttributes(),B=N.defaultAttributeValues;for(const et in q){const W=q[et];if(W.location>=0){let j=H[et];if(j===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const tt=j.normalized,bt=j.itemSize,It=t.get(j);if(It===void 0)continue;const Z=It.buffer,mt=It.type,yt=It.bytesPerElement,Rt=mt===i.INT||mt===i.UNSIGNED_INT||j.gpuType===Ja;if(j.isInterleavedBufferAttribute){const gt=j.data,Ut=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,ue=j.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)u(W.location+Q,gt.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Q=0;Q<W.locationSize;Q++)m(W.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Q=0;Q<W.locationSize;Q++)M(W.location+Q,bt/W.locationSize,mt,tt,Ut*yt,(ue+bt/W.locationSize*Q)*yt,Rt)}else{if(j.isInstancedBufferAttribute){for(let gt=0;gt<W.locationSize;gt++)u(W.location+gt,j.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let gt=0;gt<W.locationSize;gt++)m(W.location+gt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let gt=0;gt<W.locationSize;gt++)M(W.location+gt,bt/W.locationSize,mt,tt,bt*yt,bt/W.locationSize*gt*yt,Rt)}}else if(B!==void 0){const tt=B[et];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}g()}function w(){R();for(const D in n){const N=n[D];for(const O in N){const L=N[O];for(const H in L){const q=L[H];for(const B in q)h(q[B].object),delete q[B];delete L[H]}}delete n[D]}}function T(D){if(n[D.id]===void 0)return;const N=n[D.id];for(const O in N){const L=N[O];for(const H in L){const q=L[H];for(const B in q)h(q[B].object),delete q[B];delete L[H]}}delete n[D.id]}function _(D){for(const N in n){const O=n[N];for(const L in O){const H=O[L];if(H[D.id]===void 0)continue;const q=H[D.id];for(const B in q)h(q[B].object),delete q[B];delete H[D.id]}}}function E(D){for(const N in n){const O=n[N],L=D.isInstancedMesh===!0?D.id:0,H=O[L];if(H!==void 0){for(const q in H){const B=H[q];for(const et in B)h(B[et].object),delete B[et];delete H[q]}delete O[L],Object.keys(O).length===0&&delete n[N]}}}function R(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function sp(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let p=0;p<h;p++)d+=c[p];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==dn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const E=_===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==$e&&_!==un&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:M,maxFragmentUniforms:v,maxSamples:w,samples:T}}function ap(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Gn,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,p){const x=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const g=r?0:n,M=g*4;let v=u.clippingState||null;l.value=v,v=h(x,d,M,p);for(let w=0;w!==M;++w)v[w]=e[w];u.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,p,x){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const u=p+S*4,g=d.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let M=0,v=p;M!==S;++M,v+=4)a.copy(f[M]).applyMatrix4(g,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}class uo extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new tn(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Pi});r.uniforms.tEquirect.value=e;const a=new he(s,r),o=e.minFilter;return e.minFilter===Vn&&(e.minFilter=Fe),new Xa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const sl=256,op=3,lp=20,yc=256,Ec=16,cp=3,hp=new F,up=new Vt;class ur{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xa(1,10,null),this._boxMesh=new he(new tn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=hp}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,x=l.autoClearStencil,S=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,S===null&&(t.background=l.getClearColor(up));const m=new Xa(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=x,t.background=S,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(sl,Lh(t))}_fromTexture(t,e){t.mapping===Ui||t.mapping===cs?this._setSize(t.image.length===0?sl:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=rl(t,!1,!1),n=Math.log2(t)-op;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=rl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Ui||t.mapping===cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=al()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=dp(),this._integrationMaterial=fp());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ec);for(let a=0;a<=n;a++){const o=ur.lodToRoughness(a,n);if(a>n-cp)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(yc*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=pp());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function rl(i,t,e){return new uo(i,{minFilter:Vn,generateMipmaps:t,type:Sn,colorSpace:ar,depthBuffer:e})}function ps(i,t,e){return new en({name:i,uniforms:t,vertexShader:Ht.cube_vert,fragmentShader:e,side:Ge,blending:Pi,depthTest:!1,depthWrite:!1})}function dp(){return ps("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${yc}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function fp(){return ps("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ec}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pp(){return ps("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lp}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function al(){return ps("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ol(){return ps("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mp(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Mr||p===Sr)if(t.has(d)){const x=t.get(d).texture;return o(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const S=new uo(x.height);return S.fromEquirectangularTexture(i,d),t.set(d,S),d.addEventListener("dispose",c),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,x=p===Mr||p===Sr,S=p===Ui||p===cs;if(x||S){let m=e.get(d);const u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new ur(i)),m=x?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const g=d.image;return x&&g&&g.height>0||S&&g&&l(g)?(n===null&&(n=new ur(i)),m=x?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,p){return p===Mr?d.mapping=Ui:p===Sr&&(d.mapping=cs),d}function l(d){let p=0;const x=6;for(let S=0;S<x;S++)d[S]!==void 0&&p++;return p===x}function c(d){const p=d.target;p.removeEventListener("dispose",c);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function h(d){const p=d.target;p.removeEventListener("dispose",h);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function gp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&js("WebGLRenderer: "+n+" extension not supported."),s}}}function _p(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&t.remove(x.index);for(const m in x.attributes)t.remove(x.attributes[m]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);const S=r.get(x);S&&(t.remove(S),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function c(x,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),e.memory.geometries++),S}function h(x){const S=x.attributes;for(const m in S)t.update(S[m],i.ARRAY_BUFFER)}function f(x){const S=x.index,m=x.attributes.position;let u=0;if(m===void 0)return;const g=S!==null?S.array.length:m.array.length/3-1,M=m.count>=65535?dc:uc,v=new M(Math.ceil(g/3)*6,1),w=v.array;if(S!==null){const _=S.array;u=S.version;for(let E=0,R=0;E<g;E+=3){const C=_[E+0],D=_[E+1],N=_[E+2];w[R++]=C,w[R++]=D,w[R++]=D,w[R++]=N,w[R++]=N,w[R++]=C}}else{u=m.version;for(let _=0,E=0;_<g;_+=3){const R=_+0,C=_+1,D=_+2;w[E++]=R,w[E++]=C,w[E++]=C,w[E++]=D,w[E++]=D,w[E++]=R}}v.version=u;const T=r.get(x);T&&t.remove(T),r.set(x,v)}function d(x){const S=r.get(x);if(S){const m=x.index;m!==null&&S.version<m.version&&f(x)}else f(x);return r.get(x)}function p(){for(const x in s){const S=s[x].deref();S!==void 0&&l(S)}}return{get:c,update:h,getWireframeAttribute:d,dispose:p}}function xp(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),e.update(d,n,p))}function h(f,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let S=0;for(let m=0;m<p;m++)S+=d[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mp(i,t,e){const n=new WeakMap,s=new ge;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let C=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var p=C;d!==void 0&&d.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let w=o.attributes.position.count*v,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const _=new Float32Array(w*T*4*f),E=new lc(_,w,T,f);E.type=un,E.needsUpdate=!0;const R=v*4;for(let D=0;D<f;D++){const N=u[D],O=g[D],L=M[D],H=w*T*4*D;for(let q=0;q<N.count;q++){const B=q*R;x===!0&&(s.fromBufferAttribute(N,q),_[H+B+0]=s.x,_[H+B+1]=s.y,_[H+B+2]=s.z,_[H+B+3]=0),S===!0&&(s.fromBufferAttribute(O,q),_[H+B+4]=s.x,_[H+B+5]=s.y,_[H+B+6]=s.z,_[H+B+7]=0),m===!0&&(s.fromBufferAttribute(L,q),_[H+B+8]=s.x,_[H+B+9]=s.y,_[H+B+10]=s.z,_[H+B+11]=L.itemSize===4?s.w:1)}}d={count:f,texture:E,size:new Wt(w,T)},n.set(o,d),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Sp(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const yp={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Ka]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[Zl]:"CUSTOM_TONE_MAPPING"};function Ep(i,t,e,n,s,r){const a=new vn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Ce;h.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new $t([0,2,0,0,2,0],2));const f=new hu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new he(h,f),p=new vc(-1,1,1,-1,0,1);let x=null,S=null,m=!1,u,g=null,M=[],v=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let _=0;_<M.length;_++){const E=M[_];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){M=w,v=M.length>0&&M[0].isRenderPass===!0;const T=a.width,_=a.height;M.length>0&&o===null&&(o=new vn(T,_,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new vn(T,_,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));const E=s===!0&&M.some(R=>R.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Oi(T,_),r===!0&&(c.format=Wn,c.type=Fi)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let R=0;R<M.length;R++){const C=M[R];C.setSize&&C.setSize(T,_),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,T){if(m||w.toneMapping===Ln&&M.length===0)return!1;if(g=T,T!==null){const _=T.width,E=T.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return v===!1&&w.setRenderTarget(a),u=w.toneMapping,w.toneMapping=Ln,!0},this.hasRenderPass=function(){return v},this.end=function(w,T){w.toneMapping=u,m=!0;let _=a,E=o;for(let R=0;R<M.length;R++){const C=M[R];C.enabled!==!1&&(C.render(w,E,_,T),C.needsSwap!==!1&&(_=E,E=E===o?l:o))}if(x!==w.outputColorSpace||S!==w.toneMapping){x=w.outputColorSpace,S=w.toneMapping,f.defines={},Yt.getTransfer(x)===ie&&(f.defines.SRGB_TRANSFER="");const R=yp[S];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(g),w.render(d,p),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const bc=new Oe,Tc=new Oi(1,1),wc=new pc(1),Ac=new lc,Rc=new Bh,Cc=new lo,ll=[],cl=[],hl=new Float32Array(16),ul=new Float32Array(9),dl=new Float32Array(4);function Hi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ll[s];if(r===void 0&&(r=new Float32Array(s),ll[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gr(i,t){let e=cl[t];e===void 0&&(e=new Int32Array(t),cl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Rp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;dl.set(n),i.uniformMatrix2fv(this.addr,!1,dl),Ee(e,n)}}function Cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;ul.set(n),i.uniformMatrix3fv(this.addr,!1,ul),Ee(e,n)}}function Pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;hl.set(n),i.uniformMatrix4fv(this.addr,!1,hl),Ee(e,n)}}function Lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Up(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function _r(i){return i.version===0&&(i.compareFunction=ac,i.needsUpdate=!0),i}function Bp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=_r(Tc):r=bc,e.setTexture2D(t||r,s)}function kp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rc,s)}function Gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=_r(wc):r=Cc,e.setTextureCube(t||r,s)}function Hp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ac,s)}function Vp(i){switch(i){case 5126:return bp;case 35664:return Tp;case 35665:return wp;case 35666:return Ap;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Lp;case 35667:case 35671:return Dp;case 35668:case 35672:return Ip;case 35669:case 35673:return Np;case 5125:return Up;case 36294:return Fp;case 36295:return Op;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Hp}}function Wp(i,t){i.uniform1fv(this.addr,t)}function Xp(i,t){const e=Hi(t,this.size,2);i.uniform2fv(this.addr,e)}function qp(i,t){const e=Hi(t,this.size,3);i.uniform3fv(this.addr,e)}function Yp(i,t){const e=Hi(t,this.size,4);i.uniform4fv(this.addr,e)}function Zp(i,t){const e=Hi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $p(i,t){const e=Hi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Kp(i,t){const e=Hi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jp(i,t){i.uniform1iv(this.addr,t)}function Qp(i,t){i.uniform2iv(this.addr,t)}function jp(i,t){i.uniform3iv(this.addr,t)}function tm(i,t){i.uniform4iv(this.addr,t)}function em(i,t){i.uniform1uiv(this.addr,t)}function nm(i,t){i.uniform2uiv(this.addr,t)}function im(i,t){i.uniform3uiv(this.addr,t)}function sm(i,t){i.uniform4uiv(this.addr,t)}function rm(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=_r(Tc):a=bc;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function am(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Rc,r[a])}function om(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=_r(wc):a=Cc;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function lm(i,t,e){const n=this.cache,s=t.length,r=gr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ac,r[a])}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return $p;case 35676:return Kp;case 5124:case 35670:return Jp;case 35667:case 35671:return Qp;case 35668:case 35672:return jp;case 35669:case 35673:return tm;case 5125:return em;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}class hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vp(e.type)}}class um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cm(e.type)}}class dm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function fl(i,t){i.seq.push(t),i.map[t.id]=t}function fm(i,t,e){const n=i.name,s=n.length;for(Yr.lastIndex=0;;){const r=Yr.exec(n),a=Yr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fl(e,c===void 0?new hm(o,i,t):new um(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new dm(o),fl(e,f)),e=f}}}class tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);fm(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function pl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pm=37297;let mm=0;function gm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ml=new Bt;function _m(i){Yt._getMatrix(ml,Yt.workingColorSpace,i);const t=`mat3( ${ml.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case or:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+gm(i.getShaderSource(t),o)}else return r}function xm(i,t){const e=_m(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const vm={[Xl]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[Ka]:"ACESFilmic",[$l]:"AgX",[Kl]:"Neutral",[Zl]:"Custom"};function Mm(i,t){const e=vm[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hs=new F;function Sm(){Yt.getLuminanceCoefficients(Hs);const i=Hs.x.toFixed(4),t=Hs.y.toFixed(4),e=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Em(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function bm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ss(i){return i!==""}function _l(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(i){return i.replace(Tm,wm)}function wm(i,t){const e=Ht[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return qa(e)}const Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(Am,Rm)}function Rm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ml(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Cm={[rs]:"SHADOWMAP_TYPE_PCF",[is]:"SHADOWMAP_TYPE_VSM"};function Pm(i){return Cm[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lm={[cs]:"ENVMAP_MODE_REFRACTION"};function Dm(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Lm[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Im={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function Nm(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Im[i.combine]||"ENVMAP_BLENDING_NONE"}function Um(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Pm(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dm(e),f=Nm(e),d=ym(e),p=Em(r),x=s.createProgram();let S,m,u=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ss).join(`
`),S.length>0&&(S+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ss).join(`
`),m.length>0&&(m+=`
`)):(S=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),m=[Ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),Sm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=qa(a),a=_l(a,e),a=xl(a,e),o=qa(o),o=_l(o,e),o=xl(o,e),a=vl(a),o=vl(o),e.isRawShaderMaterial!==!0&&(u=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,m=["#define varying in",e.glslVersion===Ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const g=u+S+a,M=u+m+o,v=pl(s,s.VERTEX_SHADER,g),w=pl(s,s.FRAGMENT_SHADER,M);s.attachShader(x,v),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(C){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(v)||"",O=s.getShaderInfoLog(w)||"",L=D.trim(),H=N.trim(),q=O.trim();let B=!0,et=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,w);else{const W=gl(s,v,"vertex"),j=gl(s,w,"fragment");jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+W+`
`+j)}else L!==""?Ft("WebGLProgram: Program Info Log:",L):(H===""||q==="")&&(et=!1);et&&(C.diagnostics={runnable:B,programLog:L,vertexShader:{log:H,prefix:S},fragmentShader:{log:q,prefix:m}})}s.deleteShader(v),s.deleteShader(w),_=new tr(s,x),E=bm(s,x)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,pm)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=w,this}let Fm=0;class Om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zm(t),e.set(t,n)),n}}class zm{constructor(t){this.id=Fm++,this.code=t,this.usedTimes=0}}function Bm(i){return i===li||i===sr||i===rr}function km(i,t,e,n,s,r){const a=new cc,o=new Om,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,R,C,D,N){const O=C.fog,L=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,B=t.get(_.envMap||H,q),et=d[_.type];let W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&Ft("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));const j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,tt=j!==void 0?j.length:0;let bt=0;L.morphAttributes.position!==void 0&&(bt=1),L.morphAttributes.normal!==void 0&&(bt=2),L.morphAttributes.color!==void 0&&(bt=3);let It,Z,mt,yt;if(et){const _t=_n[et];It=_t.vertexShader,Z=_t.fragmentShader}else{It=_.vertexShader,Z=_.fragmentShader;const _t=o.getVertexShaderStage(_),ne=o.getFragmentShaderStage(_);o.update(_,_t,ne),mt=_t.id,yt=ne.id}const Rt=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Ut=D.isInstancedMesh===!0,ue=D.isBatchedMesh===!0,Q=!!_.map,ft=!!_.matcap,Mt=!!B,ct=Mt&&B.isPMREMTexture===!0,Ct=!!_.aoMap,Jt=!!_.lightMap,ae=!!_.bumpMap&&_.wireframe===!1,ee=!!_.normalMap,me=!!_.displacementMap,Me=!!_.emissiveMap,oe=!!_.metalnessMap,He=!!_.roughnessMap,Pe=_.anisotropy>0,U=_.clearcoat>0,We=_.diffuseRoughness>0,se=_.dispersion>0,ce=_.retroreflectivity>0,pt=_.iridescence>0,Se=_.sheen>0,Nt=_.transmission>0,Ot=Pe&&!!_.anisotropyMap,A=U&&!!_.clearcoatMap,y=U&&!!_.clearcoatNormalMap,k=U&&!!_.clearcoatRoughnessMap,nt=We&&!!_.diffuseRoughnessMap,J=pt&&!!_.iridescenceMap,rt=pt&&!!_.iridescenceThicknessMap,ut=Se&&!!_.sheenColorMap,Y=Se&&!!_.sheenRoughnessMap,$=!!_.specularMap,ot=!!_.specularColorMap,P=!!_.specularIntensityMap,K=Nt&&!!_.transmissionMap,X=Nt&&!!_.thicknessMap,lt=!!_.gradientMap,st=!!_.alphaMap,at=_.alphaTest>0,Pt=!!_.alphaHash,Gt=!!_.extensions;let it=Ln;_.toneMapped&&(Rt===null||Rt.isXRRenderTarget===!0)&&(it=i.toneMapping);const Lt=ct?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,kt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:It,fragmentShader:Z,defines:_.defines,customVertexShaderID:mt,customFragmentShaderID:yt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:ue,batchingColor:ue&&D._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&D.instanceColor!==null,instancingMorph:Ut&&D.morphTexture!==null,outputColorSpace:Rt===null?i.outputColorSpace:Rt.isXRRenderTarget===!0?Rt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Q,matcap:ft,envMap:Mt,envMapMode:Mt&&B.mapping,envMapPMREM:ct,envMapMaxLod:ct?Lt.length-1:null,envMapSize:ct?Lt[0].width:null,aoMap:Ct,lightMap:Jt,bumpMap:ae,normalMap:ee,displacementMap:me,emissiveMap:Me,normalMapObjectSpace:ee&&_.normalMapType===xh,normalMapTangentSpace:ee&&_.normalMapType===Ga,packedNormalMap:ee&&_.normalMapType===Ga&&Bm(_.normalMap.format),metalnessMap:oe,roughnessMap:He,anisotropy:Pe,anisotropyMap:Ot,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:k,diffuseRoughness:We,diffuseRoughnessMap:nt,dispersion:se,retroreflection:ce,iridescence:pt,iridescenceMap:J,iridescenceThicknessMap:rt,sheen:Se,sheenColorMap:ut,sheenRoughnessMap:Y,specularMap:$,specularColorMap:ot,specularIntensityMap:P,transmission:Nt,transmissionMap:K,thicknessMap:X,gradientMap:lt,opaque:_.transparent===!1&&_.blending===Li&&_.alphaToCoverage===!1,alphaMap:st,alphaTest:at,alphaHash:Pt,combine:_.combine,mapUv:Q&&p(_.map.channel),aoMapUv:Ct&&p(_.aoMap.channel),lightMapUv:Jt&&p(_.lightMap.channel),bumpMapUv:ae&&p(_.bumpMap.channel),normalMapUv:ee&&p(_.normalMap.channel),displacementMapUv:me&&p(_.displacementMap.channel),emissiveMapUv:Me&&p(_.emissiveMap.channel),metalnessMapUv:oe&&p(_.metalnessMap.channel),roughnessMapUv:He&&p(_.roughnessMap.channel),anisotropyMapUv:Ot&&p(_.anisotropyMap.channel),clearcoatMapUv:A&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&p(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&p(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&p(_.sheenRoughnessMap.channel),specularMapUv:$&&p(_.specularMap.channel),specularColorMapUv:ot&&p(_.specularColorMap.channel),specularIntensityMapUv:P&&p(_.specularIntensityMap.channel),transmissionMapUv:K&&p(_.transmissionMap.channel),thicknessMapUv:X&&p(_.thicknessMap.channel),alphaMapUv:st&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ee||Pe),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Q||st),fog:!!O,useFog:_.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&ee===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:gt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:bt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:N.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Q&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:Me&&_.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ze,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Gt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&_.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function S(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(E,_),u(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function u(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function g(_){const E=d[_.type];let R;if(E){const C=_n[E];R=ou.clone(C.uniforms)}else R=_.uniforms;return R}function M(_,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new Um(i,E,_,s),c.push(R),h.set(E,R)),R}function v(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function T(){o.dispose()}return{getParameters:x,getProgramCacheKey:S,getUniforms:g,acquireProgram:M,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:T}}function Gm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Hm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,x,S,m,u){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:p,material:x,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:m,group:u},i[t]=g):(g.id=d.id,g.object=d,g.geometry=p,g.material=x,g.materialVariant=a(d),g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=m,g.group=u),t++,g}function l(d,p,x,S,m,u,g){g.reversedDepth===!0&&(m=-m);const M=o(d,p,x,S,m,u);x.transmission>0?n.push(M):x.transparent===!0?s.push(M):e.push(M)}function c(d,p,x,S,m,u){const g=o(d,p,x,S,m,u);x.transmission>0?n.unshift(g):x.transparent===!0?s.unshift(g):e.unshift(g)}function h(d,p){e.length>1&&e.sort(d||Hm),n.length>1&&n.sort(p||Sl),s.length>1&&s.sort(p||Sl)}function f(){for(let d=t,p=i.length;d<p;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Vm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new yl,i.set(n,[a])):s>=r.length?(a=new yl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Wm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Vt};break;case"SpotLight":e={position:new F,direction:new F,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Xm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let qm=0;function Ym(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zm(i){const t=new Wm,e=Xm(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,r=new te,a=new te;function o(c){let h=0,f=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,x=0,S=0,m=0,u=0,g=0,M=0,v=0,w=0,T=0,_=0,E=0,R=0,C=0;c.sort(Ym);for(let N=0,O=c.length;N<O;N++){const L=c[N],H=L.color,q=L.intensity,B=L.distance;let et=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===li?et=L.shadow.map.texture:et=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=H.r*q,f+=H.g*q,d+=H.b*q;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],q);C++}else if(L.isSunLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[x]=tt,n.sunShadowMap[x]=et;const bt=j.getViewportCount();for(let It=0;It<bt;It++)n.sunShadowMatrix[S+It]=j.getMatrix(It),n.sunShadowCascade[S+It]=j._cascadeData[It];S+=bt,x++}n.sun[p]=W,p++}else if(L.isDirectionalLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.directionalShadow[m]=tt,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=L.shadow.matrix,w++}n.directional[m]=W,m++}else if(L.isSpotLight){const W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(H).multiplyScalar(q),W.distance=B,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[g]=W;const j=L.shadow;if(L.map&&(n.spotLightMap[E]=L.map,E++,j.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[g]=j.matrix,L.castShadow){const tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,n.spotShadow[g]=tt,n.spotShadowMap[g]=et,_++}g++}else if(L.isRectAreaLight){const W=t.get(L);W.color.copy(H).multiplyScalar(q),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[M]=W,M++}else if(L.isPointLight){const W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const j=L.shadow,tt=e.get(L);tt.shadowIntensity=j.intensity,tt.shadowBias=j.bias,tt.shadowNormalBias=j.normalBias,tt.shadowRadius=j.radius,tt.shadowMapSize=j.mapSize,tt.shadowCameraNear=j.camera.near,tt.shadowCameraFar=j.camera.far,n.pointShadow[u]=tt,n.pointShadowMap[u]=et,n.pointShadowMatrix[u]=L.shadow.matrix,T++}n.point[u]=W,u++}else if(L.isHemisphereLight){const W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(q),W.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[v]=W,v++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const D=n.hash;(D.sunLength!==p||D.directionalLength!==m||D.pointLength!==u||D.spotLength!==g||D.rectAreaLength!==M||D.hemiLength!==v||D.numSunShadows!==x||D.numDirectionalShadows!==w||D.numPointShadows!==T||D.numSpotShadows!==_||D.numSpotMaps!==E||D.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=g,n.rectArea.length=M,n.point.length=u,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-R,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,D.sunLength=p,D.directionalLength=m,D.pointLength=u,D.spotLength=g,D.rectAreaLength=M,D.hemiLength=v,D.numSunShadows=x,D.numDirectionalShadows=w,D.numPointShadows=T,D.numSpotShadows=_,D.numSpotMaps=E,D.numLightProbes=C,n.version=qm++)}function l(c,h){let f=0,d=0,p=0,x=0,S=0,m=0;const u=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const v=c[g];if(v.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(u),f++}else if(v.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),d++}else if(v.isSpotLight){const w=n.spot[x];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),x++}else if(v.isRectAreaLight){const w=n.rectArea[S];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),a.identity(),r.copy(v.matrixWorld),r.premultiply(u),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(u),p++}else if(v.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(u),m++}}}return{setup:o,setupView:l,state:n}}function El(i){const t=new Zm(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $m(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new El(i),t.set(s,[o])):r>=a.length?(o=new El(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qm=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],jm=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],bl=new te,Ki=new F,Zr=new F;function t0(i,t,e){let n=new ds;const s=new Wt,r=new Wt,a=new ge,o=new uu,l=new du,c={},h=e.maxTextureSize,f={[oi]:Ge,[Ge]:oi,[Ze]:Ze},d=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Km,fragmentShader:Jm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const x=new Ce;x.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new he(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let u=this.type;this.render=function(T,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===$c&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);const R=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Pi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=u!==this.type;O&&_.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(H=>H.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,H=T.length;L<H;L++){const q=T[L],B=q.shadow;if(B===void 0){Ft("WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const et=B.getFrameExtents();s.multiply(et),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,B.mapSize.y=r.y));const W=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||O===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===is){if(q.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new vn(s.x,s.y,{format:li,type:Sn,minFilter:Fe,magFilter:Fe,generateMipmaps:!1}),B.map.texture.name=q.name+".shadowMap",B.map.depthTexture=new Oi(s.x,s.y,un),B.map.depthTexture.name=q.name+".shadowMapDepth",B.map.depthTexture.format=Zn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Re,B.map.depthTexture.magFilter=Re}else q.isPointLight?(B.map=new uo(s.x),B.map.depthTexture=new pc(s.x,Mn)):(B.map=new vn(s.x,s.y),B.map.depthTexture=new Oi(s.x,s.y,Mn)),B.map.depthTexture.name=q.name+".shadowMap",B.map.depthTexture.format=Zn,this.type===rs?(B.map.depthTexture.compareFunction=W?rc:sc,B.map.depthTexture.minFilter=Fe,B.map.depthTexture.magFilter=Fe):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Re,B.map.depthTexture.magFilter=Re);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const j=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();q.isPointLight!==!0&&B.updateMatrices(q,E);const tt=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:E.layers;for(let bt=0;bt<j;bt++){const It=B.getCamera(bt);if(q.isPointLight){const Z=B.camera,mt=B.matrix,yt=q.distance||Z.far;yt!==Z.far&&(Z.far=yt,Z.updateProjectionMatrix()),Ki.setFromMatrixPosition(q.matrixWorld),Z.position.copy(Ki),Zr.copy(Z.position),Zr.add(Qm[bt]),Z.up.copy(jm[bt]),Z.lookAt(Zr),Z.updateMatrixWorld(),mt.makeTranslation(-Ki.x,-Ki.y,-Ki.z),bl.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(bl,Z.coordinateSystem,Z.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(B.map),i.clear());const Z=B.getViewport(bt);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),N.viewport(a)}n=B.getFrustum(bt),v(_,E,It,q,tt,this.type)}B.isPointLightShadow!==!0&&this.type===is&&g(B,E),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(R,C,D)};function g(T,_){const E=t.update(S);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new vn(s.x,s.y,{format:li,type:Sn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,E,d,S,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,E,p,S,null)}function M(T,_,E,R){let C=null;const D=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=E.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const N=C.uuid,O=_.uuid;let L=c[N];L===void 0&&(L={},c[N]=L);let H=L[O];H===void 0&&(H=C.clone(),L[O]=H,_.addEventListener("dispose",w)),C=H}if(C.visible=_.visible,C.wireframe=_.wireframe,R===is?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=i.properties.get(C);N.light=E}return C}function v(T,_,E,R,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===is)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const L=t.update(T),H=T.material;if(Array.isArray(H)){const q=L.groups;for(let B=0,et=q.length;B<et;B++){const W=q[B],j=H[W.materialIndex];if(j&&j.visible){const tt=M(T,j,R,D);T.onBeforeShadow(i,T,_,E,L,tt,W),i.renderBufferDirect(E,null,L,tt,T,W),T.onAfterShadow(i,T,_,E,L,tt,W)}}}else if(H.visible){const q=M(T,H,R,D);T.onBeforeShadow(i,T,_,E,L,q,null),i.renderBufferDirect(E,null,L,q,T,null),T.onAfterShadow(i,T,_,E,L,q,null)}}const O=T.children;for(let L=0,H=O.length;L<H;L++)v(O[L],_,E,R,C,D)}function w(T){T.target.removeEventListener("dispose",w);for(const E in c){const R=c[E],C=T.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function e0(i,t){function e(){let P=!1;const K=new ge;let X=null;const lt=new ge(0,0,0,0);return{setMask:function(st){X!==st&&!P&&(i.colorMask(st,st,st,st),X=st)},setLocked:function(st){P=st},setClear:function(st,at,Pt,Gt,it){it===!0&&(st*=Gt,at*=Gt,Pt*=Gt),K.set(st,at,Pt,Gt),lt.equals(K)===!1&&(i.clearColor(st,at,Pt,Gt),lt.copy(K))},reset:function(){P=!1,X=null,lt.set(-1,0,0,0)}}}function n(){let P=!1,K=!1,X=null,lt=null,st=null;return{setReversed:function(at){if(K!==at){const Pt=t.get("EXT_clip_control");at?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),K=at;const Gt=st;st=null,this.setClear(Gt)}},getReversed:function(){return K},setTest:function(at){at?gt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(at){X!==at&&!P&&(i.depthMask(at),X=at)},setFunc:function(at){if(K&&(at=Ch[at]),lt!==at){switch(at){case ia:i.depthFunc(i.NEVER);break;case sa:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=at}},setLocked:function(at){P=at},setClear:function(at){st!==at&&(st=at,K&&(at=1-at),i.clearDepth(at))},reset:function(){P=!1,X=null,lt=null,st=null,K=!1}}}function s(){let P=!1,K=null,X=null,lt=null,st=null,at=null,Pt=null,Gt=null,it=null;return{setTest:function(Lt){P||(Lt?gt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Lt){K!==Lt&&!P&&(i.stencilMask(Lt),K=Lt)},setFunc:function(Lt,kt,_t){(X!==Lt||lt!==kt||st!==_t)&&(i.stencilFunc(Lt,kt,_t),X=Lt,lt=kt,st=_t)},setOp:function(Lt,kt,_t){(at!==Lt||Pt!==kt||Gt!==_t)&&(i.stencilOp(Lt,kt,_t),at=Lt,Pt=kt,Gt=_t)},setLocked:function(Lt){P=Lt},setClear:function(Lt){it!==Lt&&(i.clearStencil(Lt),it=Lt)},reset:function(){P=!1,K=null,X=null,lt=null,st=null,at=null,Pt=null,Gt=null,it=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},f={},d={},p=new WeakMap,x=[],S=null,m=!1,u=null,g=null,M=null,v=null,w=null,T=null,_=null,E=new Vt(0,0,0),R=0,C=!1,D=null,N=null,O=null,L=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,et=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=et>=2);let j=null,tt={};const bt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),Z=new ge().fromArray(bt),mt=new ge().fromArray(It);function yt(P,K,X,lt){const st=new Uint8Array(4),at=i.createTexture();i.bindTexture(P,at),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<X;Pt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(K+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return at}const Rt={};Rt[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(ls),ae(!1),ee(To),gt(i.CULL_FACE),Ct(Pi);function gt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ut(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function ue(P,K){return d[P]!==K?(i.bindFramebuffer(P,K),d[P]=K,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Q(P,K){let X=x,lt=!1;if(P){X=p.get(K),X===void 0&&(X=[],p.set(K,X));const st=P.textures;if(X.length!==st.length||X[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Pt=st.length;at<Pt;at++)X[at]=i.COLOR_ATTACHMENT0+at;X.length=st.length,lt=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,lt=!0);lt&&i.drawBuffers(X)}function ft(P){return S!==P?(i.useProgram(P),S=P,!0):!1}const Mt={[Ri]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[Qc]:i.FUNC_REVERSE_SUBTRACT};Mt[jc]=i.MIN,Mt[th]=i.MAX;const ct={[eh]:i.ZERO,[nh]:i.ONE,[ih]:i.SRC_COLOR,[Hl]:i.SRC_ALPHA,[ch]:i.SRC_ALPHA_SATURATE,[oh]:i.DST_COLOR,[rh]:i.DST_ALPHA,[sh]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[ah]:i.ONE_MINUS_DST_ALPHA,[hh]:i.CONSTANT_COLOR,[uh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ct(P,K,X,lt,st,at,Pt,Gt,it,Lt){if(P===Pi){m===!0&&(Ut(i.BLEND),m=!1);return}if(m===!1&&(gt(i.BLEND),m=!0),P!==Kc){if(P!==u||Lt!==C){if((g!==Ri||w!==Ri)&&(i.blendEquation(i.FUNC_ADD),g=Ri,w=Ri),Lt)switch(P){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFunc(i.ONE,i.ONE);break;case wo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ao:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",P);break}else switch(P){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case na:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wo:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ao:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",P);break}M=null,v=null,T=null,_=null,E.set(0,0,0),R=0,u=P,C=Lt}return}st=st||K,at=at||X,Pt=Pt||lt,(K!==g||st!==w)&&(i.blendEquationSeparate(Mt[K],Mt[st]),g=K,w=st),(X!==M||lt!==v||at!==T||Pt!==_)&&(i.blendFuncSeparate(ct[X],ct[lt],ct[at],ct[Pt]),M=X,v=lt,T=at,_=Pt),(Gt.equals(E)===!1||it!==R)&&(i.blendColor(Gt.r,Gt.g,Gt.b,it),E.copy(Gt),R=it),u=P,C=!1}function Jt(P,K){P.side===Ze?Ut(i.CULL_FACE):gt(i.CULL_FACE);let X=P.side===Ge;K&&(X=!X),ae(X),P.blending===Li&&P.transparent===!1?Ct(Pi):Ct(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const lt=P.stencilWrite;o.setTest(lt),lt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(P){D!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),D=P)}function ee(P){P!==Yc?(gt(i.CULL_FACE),P!==N&&(P===To?i.cullFace(i.BACK):P===Zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),N=P}function me(P){P!==O&&(B&&i.lineWidth(P),O=P)}function Me(P,K,X){P?(gt(i.POLYGON_OFFSET_FILL),(L!==K||H!==X)&&(L=K,H=X,a.getReversed()&&(K=-K,X=-X),i.polygonOffset(K,X))):Ut(i.POLYGON_OFFSET_FILL)}function oe(P){P?gt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function He(P){P===void 0&&(P=i.TEXTURE0+q-1),j!==P&&(i.activeTexture(P),j=P)}function Pe(P,K,X){X===void 0&&(j===null?X=i.TEXTURE0+q-1:X=j);let lt=tt[X];lt===void 0&&(lt={type:void 0,texture:void 0},tt[X]=lt),(lt.type!==P||lt.texture!==K)&&(j!==X&&(i.activeTexture(X),j=X),i.bindTexture(P,K||Rt[P]),lt.type=P,lt.texture=K)}function U(){const P=tt[j];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function We(){try{i.compressedTexImage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function se(){try{i.compressedTexImage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function ce(){try{i.texSubImage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function pt(){try{i.texSubImage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function Se(){try{i.compressedTexSubImage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function Ot(){try{i.texStorage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function y(){try{i.texImage2D(...arguments)}catch(P){jt("WebGLState:",P)}}function k(){try{i.texImage3D(...arguments)}catch(P){jt("WebGLState:",P)}}function nt(P){return f[P]!==void 0?f[P]:i.getParameter(P)}function J(P,K){f[P]!==K&&(i.pixelStorei(P,K),f[P]=K)}function rt(P){Z.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function ut(P){mt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),mt.copy(P))}function Y(P,K){let X=c.get(K);X===void 0&&(X=new WeakMap,c.set(K,X));let lt=X.get(P);lt===void 0&&(lt=i.getUniformBlockIndex(K,P.name),i.uniformBlockBinding(K,lt,lt),X.set(P,lt))}function $(P,K,X){const st=c.get(K).get(P);l[st]!==X&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,X),l[st]=X)}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,tt={},d={},l={},p=new WeakMap,x=[],S=null,m=!1,u=null,g=null,M=null,v=null,w=null,T=null,_=null,E=new Vt(0,0,0),R=0,C=!1,D=null,N=null,O=null,L=null,H=null,Z.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:Ut,bindFramebuffer:ue,drawBuffers:Q,useProgram:ft,setBlending:Ct,setMaterial:Jt,setFlipSided:ae,setCullFace:ee,setLineWidth:me,setPolygonOffset:Me,setScissorTest:oe,activeTexture:He,bindTexture:Pe,unbindTexture:U,compressedTexImage2D:We,compressedTexImage3D:se,texImage2D:y,texImage3D:k,pixelStorei:J,getParameter:nt,updateUBOMapping:Y,uniformBlockBinding:$,texStorage2D:Ot,texStorage3D:A,texSubImage2D:ce,texSubImage3D:pt,compressedTexSubImage2D:Se,compressedTexSubImage3D:Nt,scissor:rt,viewport:ut,reset:ot}}function n0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,f=new Set;let d;const p=new WeakMap,x=new Set,S=new FinalizationRegistry(A=>x.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(A,y){return m?new OffscreenCanvas(A,y):lr("canvas")}function g(A,y,k){let nt=1;const J=Ot(A);if((J.width>k||J.height>k)&&(nt=k/Math.max(J.width,J.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const rt=Math.floor(nt*J.width),ut=Math.floor(nt*J.height);d===void 0&&(d=u(rt,ut));const Y=y?u(rt,ut):d;return Y.width=rt,Y.height=ut,Y.getContext("2d").drawImage(A,0,0,rt,ut),Ft("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+rt+"x"+ut+")."),Y}else return"data"in A&&Ft("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function M(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(A,y,k,nt,J,rt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;nt&&(ut=t.get("EXT_texture_norm16"),ut||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8),k===i.UNSIGNED_SHORT&&ut&&(Y=ut.R16_EXT),k===i.SHORT&&ut&&(Y=ut.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),y===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8),k===i.UNSIGNED_SHORT&&ut&&(Y=ut.RG16_EXT),k===i.SHORT&&ut&&(Y=ut.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&ut&&(Y=ut.RGB16_EXT),k===i.SHORT&&ut&&(Y=ut.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){const $=rt?or:Yt.getTransfer(J);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=$===ie?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ut&&(Y=ut.RGBA16_EXT),k===i.SHORT&&ut&&(Y=ut.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(A,y){let k;return A?y===null||y===Mn||y===Fi?k=i.DEPTH24_STENCIL8:y===un?k=i.DEPTH32F_STENCIL8:y===hs&&(k=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Mn||y===Fi?k=i.DEPTH_COMPONENT24:y===un?k=i.DEPTH_COMPONENT32F:y===hs&&(k=i.DEPTH_COMPONENT16),k}function E(A,y){return M(A)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==Fe?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function R(A){const y=new WeakRef(A);n.get(A).__ref=y,x.add(y),S.register(A,y,y)}function C(A){const y=n.get(A).__ref;y!==void 0&&(x.delete(y),S.unregister(y))}function D(A){O(A.target)}function N(A){L(A.target)}function O(A){A.removeEventListener("dispose",D),C(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function L(A){A.removeEventListener("dispose",N),C(A),et(A)}function H(){for(const A of x){const y=A.deref();y!==void 0&&(y.isRenderTarget===!0?L(y):O(y))}x.clear(),f.clear()}function q(A){const y=n.get(A);if(y.__webglInit===void 0)return;const k=A.source,nt=p.get(k);if(nt){const J=nt[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&B(A),Object.keys(nt).length===0&&p.delete(k)}n.remove(A)}function B(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const k=A.source,nt=p.get(k);delete nt[y.__cacheKey],a.memory.textures--}function et(A){const y=n.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();const k=A.depthTexture;if(k&&k.renderTarget===A&&O(k),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let rt=0;rt<y.__webglFramebuffer[J].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[J][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const nt=A.textures;for(let J=0,rt=nt.length;J<rt;J++){const ut=n.get(nt[J]);ut.__webglTexture&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(nt[J])}n.remove(A)}let W=0;function j(){W=0}function tt(){return W}function bt(A){W=A}function It(){const A=W;return A>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function Z(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function mt(A,y){const k=n.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){const nt=A.image;if(nt===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Jt(k,A,y);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function yt(A,y){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Jt(k,A,y);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function Rt(A,y){const k=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Jt(k,A,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function gt(A,y){const k=n.get(A);if(A.version>0&&k.__version!==A.version){ae(k,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const Ut={[ai]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[ha]:i.MIRRORED_REPEAT},ue={[Re]:i.NEAREST,[gh]:i.NEAREST_MIPMAP_NEAREST,[_s]:i.NEAREST_MIPMAP_LINEAR,[Fe]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Q={[Mh]:i.NEVER,[ac]:i.ALWAYS,[Sh]:i.LESS,[sc]:i.LEQUAL,[yh]:i.EQUAL,[rc]:i.GEQUAL,[Eh]:i.GREATER,[bh]:i.NOTEQUAL};function ft(A,y){if(y.type===un&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Fe||y.magFilter===yr||y.magFilter===_s||y.magFilter===Vn||y.minFilter===Fe||y.minFilter===yr||y.minFilter===_s||y.minFilter===Vn)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Ut[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Ut[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Ut[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ue[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Q[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Re||y.minFilter!==_s&&y.minFilter!==Vn||y.type===un&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Mt(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",D),R(y));const nt=y.source;let J=p.get(nt);J===void 0&&(J={},p.set(nt,J));const rt=Z(y);if(rt!==A.__cacheKey){J[rt]===void 0&&(J[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),J[rt].usedTimes++;const ut=J[A.__cacheKey];ut!==void 0&&(J[A.__cacheKey].usedTimes--,ut.usedTimes===0&&B(y)),A.__cacheKey=rt,A.__webglTexture=J[rt].texture}return k}function ct(A,y,k){return Math.floor(Math.floor(A/k)/y)}function Ct(A,y,k,nt){const rt=A.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,nt,y.data);else{rt.sort((P,K)=>P.start-K.start);let ut=0;for(let P=1;P<rt.length;P++){const K=rt[ut],X=rt[P],lt=K.start+K.count,st=ct(X.start,y.width,4),at=ct(K.start,y.width,4);X.start<=lt+1&&st===at&&ct(X.start+X.count-1,y.width,4)===st?K.count=Math.max(K.count,X.start+X.count-K.start):(++ut,rt[ut]=X)}rt.length=ut+1;const Y=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),ot=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let P=0,K=rt.length;P<K;P++){const X=rt[P],lt=Math.floor(X.start/4),st=Math.ceil(X.count/4),at=lt%y.width,Pt=Math.floor(lt/y.width),Gt=st,it=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(i.TEXTURE_2D,0,at,Pt,Gt,it,k,nt,y.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,ot)}}function Jt(A,y,k){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);const J=Mt(A,y),rt=y.source;e.bindTexture(nt,A.__webglTexture,i.TEXTURE0+k);const ut=n.get(rt);if(rt.version!==ut.__version||J===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const it=Yt.getPrimaries(Yt.workingColorSpace),Lt=y.colorSpace===cn?null:Yt.getPrimaries(y.colorSpace),kt=y.colorSpace===cn||it===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let $=g(y.image,!1,s.maxTextureSize);$=Nt(y,$);const ot=r.convert(y.format,y.colorSpace),P=r.convert(y.type);let K=T(y.internalFormat,ot,P,y.normalized,y.colorSpace,y.isVideoTexture);ft(nt,y);let X;const lt=y.mipmaps,st=y.isVideoTexture!==!0,at=ut.__version===void 0||J===!0,Pt=rt.dataReady,Gt=E(y,$);if(y.isDepthTexture)K=_(y.format===Wn,y.type),at&&(st?e.texStorage2D(i.TEXTURE_2D,1,K,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,K,$.width,$.height,0,ot,P,null));else if(y.isDataTexture)if(lt.length>0){st&&at&&e.texStorage2D(i.TEXTURE_2D,Gt,K,lt[0].width,lt[0].height);for(let it=0,Lt=lt.length;it<Lt;it++)X=lt[it],st?Pt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,X.width,X.height,ot,P,X.data):e.texImage2D(i.TEXTURE_2D,it,K,X.width,X.height,0,ot,P,X.data);y.generateMipmaps=!1}else st?(at&&e.texStorage2D(i.TEXTURE_2D,Gt,K,$.width,$.height),Pt&&Ct(y,$,ot,P)):e.texImage2D(i.TEXTURE_2D,0,K,$.width,$.height,0,ot,P,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){st&&at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,K,lt[0].width,lt[0].height,$.depth);for(let it=0,Lt=lt.length;it<Lt;it++)if(X=lt[it],y.format!==dn)if(ot!==null)if(st){if(Pt)if(y.layerUpdates.size>0){const kt=il(X.width,X.height,y.format,y.type);for(const _t of y.layerUpdates){const ne=X.data.subarray(_t*kt/X.data.BYTES_PER_ELEMENT,(_t+1)*kt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,_t,X.width,X.height,1,ot,ne)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,X.width,X.height,$.depth,ot,X.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,it,K,X.width,X.height,$.depth,0,X.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,it,0,0,0,X.width,X.height,$.depth,ot,P,X.data):e.texImage3D(i.TEXTURE_2D_ARRAY,it,K,X.width,X.height,$.depth,0,ot,P,X.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{st&&at&&e.texStorage2D(i.TEXTURE_2D,Gt,K,lt[0].width,lt[0].height);for(let it=0,Lt=lt.length;it<Lt;it++)X=lt[it],y.format!==dn?ot!==null?st?Pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,it,0,0,X.width,X.height,ot,X.data):e.compressedTexImage2D(i.TEXTURE_2D,it,K,X.width,X.height,0,X.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Pt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,X.width,X.height,ot,P,X.data):e.texImage2D(i.TEXTURE_2D,it,K,X.width,X.height,0,ot,P,X.data)}else if(y.isDataArrayTexture)if(st){if(at&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,K,$.width,$.height,$.depth),Pt)if(y.layerUpdates.size>0){const it=il($.width,$.height,y.format,y.type);for(const Lt of y.layerUpdates){const kt=$.data.subarray(Lt*it/$.data.BYTES_PER_ELEMENT,(Lt+1)*it/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Lt,$.width,$.height,1,ot,P,kt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ot,P,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,K,$.width,$.height,$.depth,0,ot,P,$.data);else if(y.isData3DTexture)st?(at&&e.texStorage3D(i.TEXTURE_3D,Gt,K,$.width,$.height,$.depth),Pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ot,P,$.data)):e.texImage3D(i.TEXTURE_3D,0,K,$.width,$.height,$.depth,0,ot,P,$.data);else if(y.isFramebufferTexture){if(at)if(st)e.texStorage2D(i.TEXTURE_2D,Gt,K,$.width,$.height);else{let it=$.width,Lt=$.height;for(let kt=0;kt<Gt;kt++)e.texImage2D(i.TEXTURE_2D,kt,K,it,Lt,0,ot,P,null),it>>=1,Lt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const it=i.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),$.parentNode!==it){it.appendChild($),f.add(y),it.onpaint=Lt=>{const kt=Lt.changedElements;for(const _t of f)kt.includes(_t.image)&&(_t.needsUpdate=!0)},it.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{const kt=i.RGBA,_t=i.RGBA,ne=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,kt,_t,ne,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(lt.length>0){if(st&&at){const it=Ot(lt[0]);e.texStorage2D(i.TEXTURE_2D,Gt,K,it.width,it.height)}for(let it=0,Lt=lt.length;it<Lt;it++)X=lt[it],st?Pt&&e.texSubImage2D(i.TEXTURE_2D,it,0,0,ot,P,X):e.texImage2D(i.TEXTURE_2D,it,K,ot,P,X);y.generateMipmaps=!1}else if(st){if(at){const it=Ot($);e.texStorage2D(i.TEXTURE_2D,Gt,K,it.width,it.height)}Pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,P,$)}else e.texImage2D(i.TEXTURE_2D,0,K,ot,P,$);M(y)&&y.mipmapsAutoUpdate===!0&&v(nt),ut.__version=rt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ae(A,y,k){if(y.image.length!==6)return;const nt=Mt(A,y),J=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const rt=n.get(J);if(J.version!==rt.__version||nt===!0){e.activeTexture(i.TEXTURE0+k);const ut=Yt.getPrimaries(Yt.workingColorSpace),Y=y.colorSpace===cn?null:Yt.getPrimaries(y.colorSpace),$=y.colorSpace===cn||ut===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const ot=y.isCompressedTexture||y.image[0].isCompressedTexture,P=y.image[0]&&y.image[0].isDataTexture,K=[];for(let _t=0;_t<6;_t++)!ot&&!P?K[_t]=g(y.image[_t],!0,s.maxCubemapSize):K[_t]=P?y.image[_t].image:y.image[_t],K[_t]=Nt(y,K[_t]);const X=K[0],lt=r.convert(y.format,y.colorSpace),st=r.convert(y.type);let at=T(y.internalFormat,lt,st,y.normalized,y.colorSpace);const Pt=y.isVideoTexture!==!0,Gt=rt.__version===void 0||nt===!0,it=J.dataReady;let Lt=E(y,X);ft(i.TEXTURE_CUBE_MAP,y);let kt;if(y.isDepthTexture){if(at=_(y.format===Wn,y.type),Gt)if(Pt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,at,X.width,X.height);else for(let _t=0;_t<6;_t++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,at,X.width,X.height,0,lt,st,null)}else if(ot){Pt&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,at,X.width,X.height);for(let _t=0;_t<6;_t++){kt=K[_t].mipmaps;for(let ne=0;ne<kt.length;ne++){const be=kt[ne];y.format!==dn?lt!==null?Pt?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ne,0,0,be.width,be.height,lt,be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ne,at,be.width,be.height,0,be.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ne,0,0,be.width,be.height,lt,st,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ne,at,be.width,be.height,0,lt,st,be.data)}}}else{if(kt=y.mipmaps,Pt&&Gt){kt.length>0&&Lt++;const _t=Ot(K[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,at,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(P){Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,K[_t].width,K[_t].height,lt,st,K[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,at,K[_t].width,K[_t].height,0,lt,st,K[_t].data);for(let ne=0;ne<kt.length;ne++){const In=kt[ne].image[_t].image;Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ne+1,0,0,In.width,In.height,lt,st,In.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ne+1,at,In.width,In.height,0,lt,st,In.data)}}else{Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,lt,st,K[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,at,lt,st,K[_t]);for(let ne=0;ne<kt.length;ne++){const be=kt[ne];Pt?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ne+1,0,0,lt,st,be.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ne+1,at,lt,st,be.image[_t])}}}M(y)&&y.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),rt.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ee(A,y,k,nt,J,rt){const ut=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),$=T(k.internalFormat,ut,Y,k.normalized,k.colorSpace),ot=n.get(y),P=n.get(k);if(P.__renderTarget=y,!ot.__hasExternalTextures){const K=Math.max(1,y.width>>rt),X=Math.max(1,y.height>>rt);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,rt,$,K,X,y.depth,0,ut,Y,null):e.texImage2D(J,rt,$,K,X,0,ut,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,J,P.__webglTexture,0,ce(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,J,P.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(A,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const nt=y.depthTexture,J=nt&&nt.isDepthTexture?nt.type:null,rt=_(y.stencilBuffer,J),ut=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(y),rt,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(y),rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,A)}else{const nt=y.textures;for(let J=0;J<nt.length;J++){const rt=nt[J],ut=r.convert(rt.format,rt.colorSpace),Y=r.convert(rt.type),$=T(rt.internalFormat,ut,Y,rt.normalized,rt.colorSpace);pt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce(y),$,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce(y),$,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,$,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(A,y,k){const nt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(y.depthTexture);J.__renderTarget=y;const rt=nt?y.depthTexture.image[0]:y.depthTexture.image;(!J.__webglTexture||rt.width!==y.width||rt.height!==y.height)&&(rt.width=y.width,rt.height=y.height,y.depthTexture.needsUpdate=!0),nt?gt(y.depthTexture,0):mt(y.depthTexture,0);const ut=J.__webglTexture,Y=ce(y),$=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ot=y.depthTexture.format===Wn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Zn)pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,$,ut,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ot,$,ut,0);else if(y.depthTexture.format===Wn)pt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,$,ut,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ot,$,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(A){const y=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const nt=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",J)};nt.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=nt}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let nt=0;nt<6;nt++)Me(y.__webglFramebuffer[nt],A,nt);else A.texture.mipmaps.length>0?Me(y.__webglFramebuffer[0],A,0):Me(y.__webglFramebuffer,A,0);else if(k){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=i.createRenderbuffer(),me(y.__webglDepthbuffer[nt],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,rt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),me(y.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,rt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,y,k){const nt=n.get(A);y!==void 0&&ee(nt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&oe(A)}function Pe(A){const y=A.texture,k=n.get(A),nt=n.get(y);A.addEventListener("dispose",N),R(A);const J=A.textures,rt=A.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,a.memory.textures++),rt){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let $=0;$<y.mipmaps.length;$++)k.__webglFramebuffer[Y][$]=i.createFramebuffer()}else k.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)k.__webglFramebuffer[Y]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ut)for(let Y=0,$=J.length;Y<$;Y++){const ot=n.get(J[Y]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&pt(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<J.length;Y++){const $=J[Y];k.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const ot=r.convert($.format,$.colorSpace),P=r.convert($.type),K=T($.internalFormat,ot,P,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),X=ce(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,X,K,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),me(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),ft(i.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)ee(k.__webglFramebuffer[Y][$],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else ee(k.__webglFramebuffer[Y],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);M(y)?v(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(ut){for(let Y=0,$=J.length;Y<$;Y++){const ot=J[Y],P=n.get(ot);let K=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,P.__webglTexture),ft(K,ot),ee(k.__webglFramebuffer,A,ot,i.COLOR_ATTACHMENT0+Y,K,0),M(ot)&&v(K)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,nt.__webglTexture),ft(Y,y),y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)ee(k.__webglFramebuffer[$],A,y,i.COLOR_ATTACHMENT0,Y,$);else ee(k.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,Y,0);M(y)?v(Y):y.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&oe(A)}function U(A){const y=A.textures;for(let k=0,nt=y.length;k<nt;k++){const J=y[k];if(M(J)&&J.mipmapsAutoUpdate===!0){const rt=w(A),ut=n.get(J).__webglTexture;e.bindTexture(rt,ut),v(rt),e.unbindTexture()}}}const We=[];function se(A){if(A.samples>0){if(pt(A)===!1){const y=A.textures,k=A.width,nt=A.height;let J=i.COLOR_BUFFER_BIT;const rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(A),Y=y.length>1;if(Y)for(let ot=0;ot<y.length;ot++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ot=0;ot<y.length;ot++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);const P=n.get(y[ot]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,k,nt,0,0,k,nt,J,i.NEAREST),l===!0&&(We.length=0,We.push(i.COLOR_ATTACHMENT0+ot),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&We.push(rt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ot=0;ot<y.length;ot++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ot]);const P=n.get(y[ot]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ce(A){return Math.min(s.maxSamples,A.samples)}function pt(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(A){const y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Nt(A,y){const k=A.colorSpace,nt=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==ar&&k!==cn&&(Yt.getTransfer(k)===ie?(nt!==dn||J!==$e)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",k)),y}function Ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=It,this.resetTextureUnits=j,this.getTextureUnits=tt,this.setTextureUnits=bt,this.setTexture2D=mt,this.setTexture2DArray=yt,this.setTexture3D=Rt,this.setTextureCube=gt,this.rebindTextures=He,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=pt,this.dispose=H}function i0(i,t){function e(n,s=cn){let r;const a=Yt.getTransfer(s);if(n===$e)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ql)return i.BYTE;if(n===jl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===Mn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Sn)return i.HALF_FLOAT;if(n===nc)return i.ALPHA;if(n===ic)return i.RGB;if(n===dn)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===Wn)return i.DEPTH_STENCIL;if(n===to)return i.RED;if(n===eo)return i.RED_INTEGER;if(n===li)return i.RG;if(n===no)return i.RG_INTEGER;if(n===io)return i.RGBA_INTEGER;if(n===$s||n===Ks||n===Js||n===Qs)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a||n===xa||n===va||n===sr||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xa)return r.COMPRESSED_R11_EAC;if(n===va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sr)return r.COMPRESSED_RG11_EAC;if(n===Ma)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Sa||n===ya||n===Ea||n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Na)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Sa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Na)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ua||n===Fa||n===Oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ua)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===za||n===Ba||n===rr||n===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const s0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class a0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new mc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new en({vertexShader:s0,fragmentShader:r0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o0 extends hi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",m=new a0,u={},g=e.getContextAttributes();let M=null,v=null;const w=[],T=[],_=new Wt;let E=null,R=null;const C=new Qe;C.viewport=new ge;const D=new Qe;D.viewport=new ge;const N=[C,D],O=new xu;let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let mt=w[Z];return mt===void 0&&(mt=new Lr,w[Z]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(Z){let mt=w[Z];return mt===void 0&&(mt=new Lr,w[Z]=mt),mt.getGripSpace()},this.getHand=function(Z){let mt=w[Z];return mt===void 0&&(mt=new Lr,w[Z]=mt),mt.getHandSpace()};function q(Z){const mt=T.indexOf(Z.inputSource);if(mt===-1)return;const yt=w[mt];yt!==void 0&&(yt.update(Z.inputSource,Z.frame,c||a),yt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",et);for(let Z=0;Z<w.length;Z++){const mt=T[Z];mt!==null&&(T[Z]=null,w[Z].disconnect(mt))}L=null,H=null,m.reset();for(const Z in u)delete u[Z];if(t.setRenderTarget(M),p=null,d=null,f=null,s=null,v=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),R!==null){const Z=R.camera;Z.fov=R.fov,Z.zoom=R.zoom,Z.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",B),s.addEventListener("inputsourceschange",et),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,gt=null;g.depth&&(gt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=g.stencil?Wn:Zn,Rt=g.stencil?Fi:Mn);const Ut={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new vn(d.textureWidth,d.textureHeight,{format:dn,type:$e,depthTexture:new Oi(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const yt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new vn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(Z){for(let mt=0;mt<Z.removed.length;mt++){const yt=Z.removed[mt],Rt=T.indexOf(yt);Rt>=0&&(T[Rt]=null,w[Rt].disconnect(yt))}for(let mt=0;mt<Z.added.length;mt++){const yt=Z.added[mt];let Rt=T.indexOf(yt);if(Rt===-1){for(let Ut=0;Ut<w.length;Ut++)if(Ut>=T.length){T.push(yt),Rt=Ut;break}else if(T[Ut]===null){T[Ut]=yt,Rt=Ut;break}if(Rt===-1)break}const gt=w[Rt];gt&&gt.connect(yt)}}function W(Z,mt){mt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(mt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let mt=Z.near,yt=Z.far;m.texture!==null&&(m.depthNear>0&&(mt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),O.near=D.near=C.near=mt,O.far=D.far=C.far=yt,(L!==O.near||H!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,H=O.far),O.layers.mask=Z.layers.mask|6,C.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const Rt=Z.parent,gt=O.cameras;W(O,Rt);for(let Ut=0;Ut<gt.length;Ut++)W(gt[Ut],Rt);O.projectionMatrix.copy(C.projectionMatrix),O.projectionMatrixInverse.copy(C.projectionMatrixInverse),R===null&&Z.isPerspectiveCamera&&(R={camera:Z,fov:Z.fov,zoom:Z.zoom}),j(Z,O,Rt)};function j(Z,mt,yt){yt===null?Z.matrix.copy(mt.matrixWorld):(Z.matrix.copy(yt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(mt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(mt.projectionMatrix),Z.projectionMatrixInverse.copy(mt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ha*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return u[Z]};let tt=null;function bt(Z,mt){if(h=mt.getViewerPose(c||a),x=mt,h!==null){const yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Rt=!1;yt.length!==O.cameras.length&&(O.cameras.length=0,Rt=!0);for(let Q=0;Q<yt.length;Q++){const ft=yt[Q];let Mt=null;if(p!==null)Mt=p.getViewport(ft);else{const Ct=f.getViewSubImage(d,ft);Mt=Ct.viewport,Q===0&&(t.setRenderTargetTextures(v,Ct.colorTexture,Ct.depthStencilTexture),t.setRenderTarget(v))}let ct=N[Q];ct===void 0&&(ct=new Qe,ct.layers.enable(Q),ct.viewport=new ge,N[Q]=ct),ct.matrix.fromArray(ft.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(ft.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Q===0&&(O.matrix.copy(ct.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Rt===!0&&O.cameras.push(ct)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=n.getBinding();const Q=f.getDepthInformation(yt[0]);Q&&Q.isValid&&Q.texture&&m.init(Q,s.renderState)}if(gt&&gt.includes("camera-access")&&S){t.state.unbindTexture(),f=n.getBinding();for(let Q=0;Q<yt.length;Q++){const ft=yt[Q].camera;if(ft){let Mt=u[ft];Mt||(Mt=new mc,u[ft]=Mt);const ct=f.getCameraImage(ft);Mt.sourceTexture=ct}}}}for(let yt=0;yt<w.length;yt++){const Rt=T[yt],gt=w[yt];Rt!==null&&gt!==void 0&&gt.update(Rt,mt,c||a)}tt&&tt(Z,mt),mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:mt}),x=null}const It=new Mc;It.setAnimationLoop(bt),this.setAnimationLoop=function(Z){tt=Z},this.dispose=function(){}}}const l0=new te,Pc=new Bt;Pc.set(-1,0,0,0,1,0,0,0,1);function c0(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,gc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,M,v){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(m,u):u.isMeshLambertMaterial?(r(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),x(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),S(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,M):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ge&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ge&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=t.get(u),M=g.envMap,v=g.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(l0.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pc),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,M){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=M*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.diffuseRoughness>0&&(m.diffuseRoughness.value=u.diffuseRoughness,u.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=u.diffuseRoughnessMap,e(u.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ge&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=u.iridescenceThicknessMaximum,u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function h0(i,t,e,n){let s={},r={};function a(g,M){const v=M.program;n.uniformBlockBinding(g,v,s[g.id])}function o(g,M){let v=s[g.id];v===void 0&&(x(g),v=l(g),s[g.id]=v,g.addEventListener("dispose",m));const w=M.program;n.updateUBOMapping(g,w);const T=t.render.frame;r[g.id]!==T&&(c(g),r[g.id]=T)}function l(g){const M=i.createBuffer(),v=g.__size,w=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,v,w),i.bindBuffer(i.UNIFORM_BUFFER,null),M}function c(g){const M=s[g.id],v=g.uniforms,w=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,_=v.length;T<_;T++){const E=v[T];if(Array.isArray(E))for(let R=0,C=E.length;R<C;R++)h(E[R],T,R,w);else h(E,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(g,M,v,w){if(d(g,M,v,w)===!0){const T=g.__offset,_=g.value;if(Array.isArray(_)){let E=0;for(let R=0;R<_.length;R++){const C=_[R],D=S(C,!0);f(C,g.__data,E),E+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,g.__data)}}function f(g,M,v){typeof g=="number"||typeof g=="boolean"?M[v]=g:g.isMatrix3?(M[v]=g.elements[0],M[v+1]=g.elements[1],M[v+2]=g.elements[2],M[v+3]=0,M[v+4]=g.elements[3],M[v+5]=g.elements[4],M[v+6]=g.elements[5],M[v+7]=0,M[v+8]=g.elements[6],M[v+9]=g.elements[7],M[v+10]=g.elements[8],M[v+11]=0):ArrayBuffer.isView(g)?M.set(g.subarray(0,M.length-v),v):g.toArray(M,v)}function d(g,M,v,w){const T=g.value,_=M+"_"+v;if(Array.isArray(T)){w[_]===void 0&&(w[_]=[]);const E=w[_];let R=!1;for(let C=0;C<T.length;C++)p(T[C],E,C)===!0&&(R=!0);return R}return p(T,w,_)}function p(g,M,v){if(M[v]===void 0)return typeof g=="number"||typeof g=="boolean"?M[v]=g:ArrayBuffer.isView(g)?M[v]=g.slice():M[v]=g.clone(),!0;{const w=M[v];if(typeof g=="number"||typeof g=="boolean"){if(w!==g)return M[v]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(w.equals(g)===!1)return w.copy(g),!0}}return!1}function x(g){const M=g.uniforms;let v=0;const w=16;for(let _=0,E=M.length;_<E;_++){const R=Array.isArray(M[_])?M[_]:[M[_]];for(let C=0,D=R.length;C<D;C++){const N=R[C],O=Array.isArray(N.value)?N.value:[N.value],L=Array.isArray(M[_])||Array.isArray(N.value);let H=v;for(let B=0,et=O.length;B<et;B++){const W=O[B],j=S(W,L),tt=v%w,bt=tt%j.boundary,It=tt+bt;v+=bt,It!==0&&w-It<j.storage&&(v+=w-It),B===0&&(H=v),v+=j.storage}const q=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new q((v-H)/Float32Array.BYTES_PER_ELEMENT),N.__offset=H}}const T=v%w;return T>0&&(v+=w-T),g.__size=v,g.__cache={},this}function S(g,M){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=16,v.storage=48):g.isMatrix4?(v.boundary=16,v.storage=64):g.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(v.boundary=16,v.storage=g.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",g),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(g){const M=g.target;M.removeEventListener("dispose",m),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(const g in s)i.deleteBuffer(s[g]);s={},r={}}return{bind:a,update:o,dispose:u}}const u0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let mn=null;function d0(){return mn===null&&(mn=new cr(u0,16,16,li,Sn),mn.name="DFG_LUT",mn.minFilter=Fe,mn.magFilter=Fe,mn.wrapS=xn,mn.wrapT=xn,mn.generateMipmaps=!1,mn.needsUpdate=!0),mn}class f0{constructor(t={}){const{canvas:e=Ah(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=$e}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const S=p,m=new Set([io,no,eo]),u=new Set([$e,Mn,hs,Fi,Qa,ja]),g=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let w=null,T=null;const _=[],E=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,N=null,O=null,L=null,H=null;this._outputColorSpace=ke;let q=0,B=0,et=null,W=-1,j=null;const tt=new ge,bt=new ge;let It=null;const Z=new Vt(0);let mt=0,yt=e.width,Rt=e.height,gt=1,Ut=null,ue=null;const Q=new ge(0,0,yt,Rt),ft=new ge(0,0,yt,Rt);let Mt=!1;const ct=new ds,Ct=new oo;let Jt=!1,ae=!1;const ee=new te,me=new F,Me=new ge,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function Pe(){return et===null?gt:1}let U=n;function We(b,I){return e.getContext(b,I)}let se,ce,pt,Se,Nt,Ot,A,y,k,nt,J,rt,ut,Y,$,ot,P,K,X,lt,st,at,Pt;try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$a}`),e.addEventListener("webglcontextlost",Lt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),U===null){const I="webgl2";if(U=We(I,b),U===null)throw We(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(b){throw e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),jt("WebGLRenderer: "+b.message),b}function Gt(){se=new gp(U),se.init(),st=new i0(U,se),ce=new rp(U,se,t,st),pt=new e0(U,se),ce.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),O=U.createFramebuffer(),L=U.createFramebuffer(),H=U.createFramebuffer(),Se=new vp(U),Nt=new Gm,Ot=new n0(U,se,pt,Nt,ce,st,Se),A=new mp(C),y=new Mu(U),at=new ip(U,y),k=new _p(U,y,Se,at),nt=new Sp(U,k,y,at,Se),K=new Mp(U,ce,Ot),$=new ap(Nt),J=new km(C,A,se,ce,at,$),rt=new c0(C,Nt),ut=new Vm,Y=new $m(se),P=new np(C,A,pt,nt,x,l),ot=new t0(C,nt,ce),Pt=new h0(U,Se,ce,pt),X=new sp(U,se,Se),lt=new xp(U,se,Se),Se.programs=J.programs,C.capabilities=ce,C.extensions=se,C.properties=Nt,C.renderLists=ut,C.shadowMap=ot,C.state=pt,C.info=Se}S!==$e&&(R=new Ep(S,e.width,e.height,o,s,r));const it=new o0(C,U);this.xr=it,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(b){b!==void 0&&(gt=b,this.setSize(yt,Rt,!1))},this.getSize=function(b){return b.set(yt,Rt)},this.setSize=function(b,I,V=!0){if(it.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}yt=b,Rt=I,e.width=Math.floor(b*gt),e.height=Math.floor(I*gt),V===!0&&(e.style.width=b+"px",e.style.height=I+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(yt*gt,Rt*gt).floor()},this.setDrawingBufferSize=function(b,I,V){yt=b,Rt=I,gt=V,e.width=Math.floor(b*V),e.height=Math.floor(I*V),this.setViewport(0,0,b,I)},this.setEffects=function(b){if(S===$e){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let I=0;I<b.length;I++)if(b[I].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(tt)},this.getViewport=function(b){return b.copy(Q)},this.setViewport=function(b,I,V,z){b.isVector4?Q.set(b.x,b.y,b.z,b.w):Q.set(b,I,V,z),pt.viewport(tt.copy(Q).multiplyScalar(Pe()).round())},this.getScissor=function(b){return b.copy(ft)},this.setScissor=function(b,I,V,z){b.isVector4?ft.set(b.x,b.y,b.z,b.w):ft.set(b,I,V,z),pt.scissor(bt.copy(ft).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(b){pt.setScissorTest(Mt=b)},this.setOpaqueSort=function(b){Ut=b},this.setTransparentSort=function(b){ue=b},this.getClearColor=function(b){return b.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(b=!0,I=!0,V=!0){let z=0;if(b){let G=!1;if(et!==null){const dt=et.texture.format;G=m.has(dt)}if(G){const dt=et.texture.type,Et=u.has(dt),ht=P.getClearColor(),vt=P.getClearAlpha(),At=ht.r,zt=ht.g,Xt=ht.b;Et?(g[0]=At,g[1]=zt,g[2]=Xt,g[3]=vt,U.clearBufferuiv(U.COLOR,0,g)):(M[0]=At,M[1]=zt,M[2]=Xt,M[3]=vt,U.clearBufferiv(U.COLOR,0,M))}else z|=U.COLOR_BUFFER_BIT}I&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),N=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Lt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),P.dispose(),ut.dispose(),Y.dispose(),Ot.dispose(),Nt.dispose(),A.dispose(),nt.dispose(),k.dispose(),at.dispose(),Pt.dispose(),J.dispose(),it.dispose(),it.removeEventListener("sessionstart",mo),it.removeEventListener("sessionend",go),Kn.stop()};function Lt(b){b.preventDefault(),Po("WebGLRenderer: Context Lost."),D=!0}function kt(){Po("WebGLRenderer: Context Restored."),D=!1;const b=Se.autoReset,I=ot.enabled,V=ot.autoUpdate,z=ot.needsUpdate,G=ot.type;Gt(),Se.autoReset=b,ot.enabled=I,ot.autoUpdate=V,ot.needsUpdate=z,ot.type=G}function _t(b){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ne(b){const I=b.target;I.removeEventListener("dispose",ne),be(I)}function be(b){In(b),Nt.remove(b)}function In(b){const I=Nt.get(b).programs;I!==void 0&&(I.forEach(function(V){J.releaseProgram(V)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,V,z,G,dt){I===null&&(I=oe);const Et=G.isMesh&&G.matrixWorld.determinantAffine()<0,ht=Wc(b,I,V,z,G);pt.setMaterial(z,Et);let vt=V.index,At=1;if(z.wireframe===!0){if(vt=k.getWireframeAttribute(V),vt===void 0)return;At=2}const zt=V.drawRange,Xt=V.attributes.position;let Tt=zt.start*At,qt=(zt.start+zt.count)*At;dt!==null&&(Tt=Math.max(Tt,dt.start*At),qt=Math.min(qt,(dt.start+dt.count)*At)),vt!==null?(Tt=Math.max(Tt,0),qt=Math.min(qt,vt.count)):Xt!=null&&(Tt=Math.max(Tt,0),qt=Math.min(qt,Xt.count));const _e=qt-Tt;if(_e<0||_e===1/0)return;at.setup(G,z,ht,V,vt);let le,re=X;if(vt!==null&&(le=y.get(vt),re=lt,re.setIndex(le)),G.isMesh)z.wireframe===!0?(pt.setLineWidth(z.wireframeLinewidth*Pe()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if(G.isLine){let Le=z.linewidth;Le===void 0&&(Le=1),pt.setLineWidth(Le*Pe()),G.isLineSegments?re.setMode(U.LINES):G.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else G.isPoints?re.setMode(U.POINTS):G.isSprite&&re.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(se.get("WEBGL_multi_draw"))re.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Le=G._multiDrawStarts,wt=G._multiDrawCounts,ze=G._multiDrawCount,Qt=vt?y.get(vt).bytesPerElement:1,Jn=Nt.get(z).currentProgram.getUniforms();for(let De=0;De<ze;De++)Jn.setValue(U,"_gl_DrawID",De),re.render(Le[De]/Qt,wt[De])}else if(G.isInstancedMesh)re.renderInstances(Tt,_e,G.count);else if(V.isInstancedBufferGeometry){const Le=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,wt=Math.min(V.instanceCount,Le);re.renderInstances(Tt,_e,wt)}else re.render(Tt,_e)};function po(b,I,V,z){N!==null&&b.isNodeMaterial&&N.setObject(z,b),Jt===!0&&$.setState(b,V,!1),b.transparent===!0&&b.side===Ze&&b.forceSinglePass===!1?(b.side=Ge,b.needsUpdate=!0,Vi(b,I,z),b.side=oi,b.needsUpdate=!0,Vi(b,I,z),b.side=Ze):Vi(b,I,z)}this.compile=function(b,I,V=null){V===null&&(V=b),N!==null&&N.renderStart(b,I,V),T=Y.get(V),T.init(I),E.push(T),V.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==V&&b.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,Jt=$.init(this.clippingPlanes,ae),Jt===!0&&$.setGlobalState(this.clippingPlanes,I),N!==null&&ot.render(T.state.shadowsArray,V,I);const z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const dt=G.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const ht=dt[Et];po(ht,V,I,G),z.add(ht)}else po(dt,V,I,G),z.add(dt)}),T=E.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(b,I,V=null){const z=this.compile(b,I,V);return new Promise(G=>{function dt(){if(z.forEach(function(Et){const vt=Nt.get(Et).currentProgram;(vt===void 0||vt.isReady())&&z.delete(Et)}),z.size===0){G(b);return}setTimeout(dt,10)}se.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let xr=null;function Hc(b){xr&&xr(b)}function mo(){Kn.stop()}function go(){Kn.start()}const Kn=new Mc;Kn.setAnimationLoop(Hc),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(b){xr=b,it.setAnimationLoop(b),b===null?Kn.stop():Kn.start()},it.addEventListener("sessionstart",mo),it.addEventListener("sessionend",go),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;N!==null&&N.renderStart(b,I);const V=it.enabled===!0&&it.isPresenting===!0,z=R!==null&&(et===null||V)&&R.begin(C,et);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(I),I=it.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,I,et),T=Y.get(b,E.length),T.init(I),T.state.textureUnits=Ot.getTextureUnits(),E.push(T),ee.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Ct.setFromArrayCamera(I):ct.setFromProjectionMatrix(ee,fn,I.reversedDepth),ae=this.localClippingEnabled,Jt=$.init(this.clippingPlanes,ae),w=ut.get(b,_.length),w.init(),_.push(w),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){const Et=C.xr.getDepthSensingMesh();Et!==null&&vr(Et,I,-1/0,C.sortObjects)}vr(b,I,0,C.sortObjects),w.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Ut,ue),He=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,He&&P.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),Jt===!0&&$.beginShadows();const G=T.state.shadowsArray;if(ot.render(G,b,I),Jt===!0&&$.endShadows(),(z&&R.hasRenderPass())===!1){const Et=w.opaque,ht=w.transmissive;if(T.setupLights(),I.isArrayCamera){const vt=I.cameras;if(ht.length>0)for(let At=0,zt=vt.length;At<zt;At++){const Xt=vt[At];xo(Et,ht,b,Xt)}He&&P.render(b);for(let At=0,zt=vt.length;At<zt;At++){const Xt=vt[At];_o(w,b,Xt,Xt.viewport)}}else ht.length>0&&xo(Et,ht,b,I),He&&P.render(b),_o(w,b,I)}et!==null&&B===0&&(Ot.updateMultisampleRenderTarget(et),Ot.updateRenderTargetMipmap(et)),z&&R.end(C),b.isScene===!0&&b.onAfterRender(C,b,I),at.resetDefaultState(),W=-1,j=null,E.pop(),E.length>0?(T=E[E.length-1],Ot.setTextureUnits(T.state.textureUnits),Jt===!0&&$.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,N!==null&&N.renderEnd()};function vr(b,I,V,z){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Et=I.isArrayCamera?Ct:ct;if(!b.frustumCulled||b.intersectsFrustum(Et)){z&&Me.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ee);const ht=nt.update(b),vt=b.material;vt.visible&&w.push(b,ht,vt,V,Me.z,null,I)}}else if(b.isMesh||b.isLine||b.isPoints){const Et=I.isArrayCamera?Ct:ct;if(!b.frustumCulled||b.intersectsFrustum(Et)){const ht=nt.update(b),vt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Me.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Me.copy(ht.boundingSphere.center)),Me.applyMatrix4(b.matrixWorld).applyMatrix4(ee)),Array.isArray(vt)){const At=ht.groups;for(let zt=0,Xt=At.length;zt<Xt;zt++){const Tt=At[zt],qt=vt[Tt.materialIndex];qt&&qt.visible&&w.push(b,ht,qt,V,Me.z,Tt,I)}}else vt.visible&&w.push(b,ht,vt,V,Me.z,null,I)}}}const dt=b.children;for(let Et=0,ht=dt.length;Et<ht;Et++)vr(dt[Et],I,V,z)}function _o(b,I,V,z){const{opaque:G,transmissive:dt,transparent:Et}=b;T.setupLightsView(V),Jt===!0&&$.setGlobalState(C.clippingPlanes,V),z&&pt.viewport(tt.copy(z)),G.length>0&&ms(G,I,V),dt.length>0&&ms(dt,I,V),Et.length>0&&ms(Et,I,V),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function xo(b,I,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[z.id]===void 0){const Tt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[z.id]=new vn(1,1,{generateMipmaps:!0,type:Tt?Sn:$e,minFilter:Vn,samples:Math.max(4,ce.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const dt=T.state.transmissionRenderTarget[z.id],Et=z.viewport||tt;dt.setSize(Et.z*C.transmissionResolutionScale,Et.w*C.transmissionResolutionScale);const ht=C.getRenderTarget(),vt=C.getActiveCubeFace(),At=C.getActiveMipmapLevel();C.setRenderTarget(dt),C.getClearColor(Z),mt=C.getClearAlpha(),mt<1&&C.setClearColor(16777215,.5),C.clear(),He&&P.render(V);const zt=C.toneMapping;C.toneMapping=Ln;const Xt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),T.setupLightsView(z),Jt===!0&&$.setGlobalState(C.clippingPlanes,z),ms(b,V,z),Ot.updateMultisampleRenderTarget(dt),Ot.updateRenderTargetMipmap(dt),se.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let qt=0,_e=I.length;qt<_e;qt++){const le=I[qt],{object:re,geometry:Le,material:wt,group:ze}=le;if(wt.side===Ze&&re.layers.test(z.layers)){const Qt=wt.side;wt.side=Ge,wt.needsUpdate=!0,vo(re,V,z,Le,wt,ze),wt.side=Qt,wt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Ot.updateMultisampleRenderTarget(dt),Ot.updateRenderTargetMipmap(dt))}C.setRenderTarget(ht,vt,At),C.setClearColor(Z,mt),Xt!==void 0&&(z.viewport=Xt),C.toneMapping=zt}function ms(b,I,V){const z=I.isScene===!0?I.overrideMaterial:null;for(let G=0,dt=b.length;G<dt;G++){const Et=b[G],{object:ht,geometry:vt,group:At}=Et;let zt=Et.material;zt.allowOverride===!0&&z!==null&&(zt=z),ht.layers.test(V.layers)&&vo(ht,I,V,vt,zt,At)}}function vo(b,I,V,z,G,dt){N!==null&&G.isNodeMaterial&&N.setObject(b,G),b.onBeforeRender(C,I,V,z,G,dt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(C,I,V,z,b,dt),G.transparent===!0&&G.side===Ze&&G.forceSinglePass===!1?(G.side=Ge,G.needsUpdate=!0,C.renderBufferDirect(V,I,z,G,b,dt),G.side=oi,G.needsUpdate=!0,C.renderBufferDirect(V,I,z,G,b,dt),G.side=Ze):C.renderBufferDirect(V,I,z,G,b,dt),b.onAfterRender(C,I,V,z,G,dt)}function Mo(b){let I=0;for(const V of b)V.texture!==null&&I++;return I}function Vi(b,I,V){I.isScene!==!0&&(I=oe);const z=Nt.get(b),G=T.state.lights,dt=T.state.shadowsArray,Et=G.state.version,ht=J.getParameters(b,G.state,dt,I,V,T.state.lightProbeGridArray),vt=J.getProgramCacheKey(ht);let At=z.programs;z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const zt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;z.envMap=A.get(b.envMap||z.environment,zt),z.envMapRotation=z.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",ne),At=new Map,z.programs=At,z.programVariants=new Map);let Xt=At.get(vt);if(Xt!==void 0){if(z.currentProgram===Xt&&z.lightsStateVersion===Et)return yo(b,ht),Xt}else ht.uniforms=J.getUniforms(b),N!==null&&b.isNodeMaterial&&N.build(b,V,ht),b.onBeforeCompile(ht,C),Xt=J.acquireProgram(ht,vt),At.set(vt,Xt),z.uniforms=ht.uniforms;const Tt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=$.uniform),yo(b,ht),z.needsLights=qc(b),z.lightsStateVersion=Et,z.needsLights&&(Tt.ambientLightColor.value=G.state.ambient,Tt.lightProbe.value=G.state.probe,Tt.sunLights.value=G.state.sun,Tt.sunLightShadows.value=G.state.sunShadow,Tt.directionalLights.value=G.state.directional,Tt.directionalLightShadows.value=G.state.directionalShadow,Tt.spotLights.value=G.state.spot,Tt.spotLightShadows.value=G.state.spotShadow,Tt.rectAreaLights.value=G.state.rectArea,Tt.ltc_1.value=G.state.rectAreaLTC1,Tt.ltc_2.value=G.state.rectAreaLTC2,Tt.pointLights.value=G.state.point,Tt.pointLightShadows.value=G.state.pointShadow,Tt.hemisphereLights.value=G.state.hemi,Tt.sunShadowMatrix.value=G.state.sunShadowMatrix,Tt.sunShadowCascade.value=G.state.sunShadowCascade,Tt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Tt.spotLightMatrix.value=G.state.spotLightMatrix,Tt.spotLightMap.value=G.state.spotLightMap,Tt.pointShadowMatrix.value=G.state.pointShadowMatrix),z.numLightProbeGrids=Mo(T.state.lightProbeGridArray),z.currentProgram=Xt,z.uniformsList=null,Xt}function Vc(b,I,V,z,G){const dt=Nt.get(b),Et=dt.currentProgram.id+","+z+","+G;let ht=dt.programVariants.get(Et);return ht===void 0?(ht=Vi(b,I,V),dt.programVariants.set(Et,ht)):(dt.currentProgram=ht,dt.uniformsList=null,dt.outputColorSpace=z,dt.toneMapping=G),ht}function So(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=tr.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function yo(b,I){const V=Nt.get(b);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Wc(b,I,V,z,G){I.isScene!==!0&&(I=oe),Ot.resetTextureUnits();const dt=I.fog,Et=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,ht=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:Yt.workingColorSpace,vt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,At=A.get(z.envMap||Et,vt),zt=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Xt=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!V.morphAttributes.position,qt=!!V.morphAttributes.normal,_e=!!V.morphAttributes.color;let le=Ln;z.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(le=C.toneMapping);const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Le=re!==void 0?re.length:0,wt=Nt.get(z),ze=T.state.lights;if(Jt===!0&&(ae===!0||b!==j)){const de=b===j&&z.id===W;$.setState(z,b,de)}let Qt=!1,Jn=!1;z.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==ze.state.version||G.isBatchedMesh&&wt.batching===!1||!G.isBatchedMesh&&wt.batching===!0||G.isBatchedMesh&&wt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&wt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&wt.instancing===!1||!G.isInstancedMesh&&wt.instancing===!0||G.isSkinnedMesh&&wt.skinning===!1||!G.isSkinnedMesh&&wt.skinning===!0||G.isInstancedMesh&&wt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&wt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&wt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&wt.instancingMorph===!1&&G.morphTexture!==null||wt.envMap!==At||z.fog===!0&&wt.fog!==dt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==$.numPlanes||wt.numIntersection!==$.numIntersection)||wt.vertexAlphas!==zt||wt.vertexTangents!==Xt||wt.morphTargets!==Tt||wt.morphNormals!==qt||wt.morphColors!==_e||wt.morphTargetsCount!==Le||wt.numLightProbeGrids!==Mo(T.state.lightProbeGridArray)?Qt=!0:(wt.outputColorSpace!==ht||wt.toneMapping!==le)&&(Jn=!0):(Qt=!0,wt.__version=z.version);let De=wt.currentProgram;(Qt===!0||Jn===!0)&&(De=Jn===!0?Vc(z,I,G,ht,le):Vi(z,I,G),N&&z.isNodeMaterial&&N.onUpdateProgram(z,De,wt));let gs=!1,Nn=!1,Qn=!1;const Kt=De.getUniforms(),Ae=wt.uniforms;if(pt.useProgram(De.program)&&(gs=!0,Nn=!0,Qn=!0),z.id!==W&&(W=z.id,Nn=!0),gs||j!==b){pt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Kt.setValue(U,"projectionMatrix",b.projectionMatrix),Kt.setValue(U,"viewMatrix",b.matrixWorldInverse);const Te=Kt.map.cameraPosition;Te!==void 0&&Te.setValue(U,me.setFromMatrixPosition(b.matrixWorld)),ce.logarithmicDepthBuffer&&Kt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Kt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Nn=!0,Qn=!0)}if(wt.needsLights&&(ze.state.sunShadowMap.length>0&&Kt.setValue(U,"sunShadowMap",ze.state.sunShadowMap,Ot),ze.state.directionalShadowMap.length>0&&Kt.setValue(U,"directionalShadowMap",ze.state.directionalShadowMap,Ot),ze.state.spotShadowMap.length>0&&Kt.setValue(U,"spotShadowMap",ze.state.spotShadowMap,Ot),ze.state.pointShadowMap.length>0&&Kt.setValue(U,"pointShadowMap",ze.state.pointShadowMap,Ot)),G.isSkinnedMesh){Kt.setOptional(U,G,"bindMatrix"),Kt.setOptional(U,G,"bindMatrixInverse");const de=G.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),Kt.setValue(U,"boneTexture",de.boneTexture,Ot))}G.isBatchedMesh&&(Kt.setOptional(U,G,"batchingTexture"),Kt.setValue(U,"batchingTexture",G._matricesTexture,Ot),Kt.setOptional(U,G,"batchingIdTexture"),Kt.setValue(U,"batchingIdTexture",G._indirectTexture,Ot),Kt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&Kt.setValue(U,"batchingColorTexture",G._colorsTexture,Ot));const nn=V.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&K.update(G,V,De),(Nn||wt.receiveShadow!==G.receiveShadow)&&(wt.receiveShadow=G.receiveShadow,Kt.setValue(U,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Ae.envMapIntensity.value=I.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=d0()),Nn){if(Kt.setValue(U,"toneMappingExposure",C.toneMappingExposure),wt.needsLights&&Xc(Ae,Qn),dt&&z.fog===!0&&rt.refreshFogUniforms(Ae,dt),rt.refreshMaterialUniforms(Ae,z,gt,Rt,T.state.transmissionRenderTarget[b.id]),wt.needsLights&&wt.numLightProbeGrids>0){const de=v;let Te=0;for(const En of T.state.lightProbeGridArray)En.texture!==null&&(de.textures[Te]=En.texture,de.min[Te]=En.boundingBox.min,de.max[Te]=En.boundingBox.max,de.resolution[Te]=En.resolution,Te++);for(const En in de)de[En].length=Te;Ae.probesSH.value=de.textures,Ae.probesMin.value=de.min,Ae.probesMax.value=de.max,Ae.probesResolution.value=de.resolution}tr.upload(U,So(wt),Ae,Ot)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(tr.upload(U,So(wt),Ae,Ot),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Kt.setValue(U,"center",G.center),Kt.setValue(U,"modelViewMatrix",G.modelViewMatrix),Kt.setValue(U,"normalMatrix",G.normalMatrix),Kt.setValue(U,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const de=z.uniformsGroups;for(let Te=0,En=de.length;Te<En;Te++){const bo=de[Te];Pt.update(bo,De),Pt.bind(bo,De)}}return De}function Xc(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.sunLights.needsUpdate=I,b.sunLightShadows.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function qc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(b,I,V){const z=Nt.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Nt.get(b.texture).__webglTexture=I,Nt.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,I){const V=Nt.get(b);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,V=0){et=b,q=I,B=V;let z=null,G=!1,dt=!1;if(b){const ht=Nt.get(b);if(ht.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(U.FRAMEBUFFER,ht.__webglFramebuffer),tt.copy(b.viewport),bt.copy(b.scissor),It=b.scissorTest,pt.viewport(tt),pt.scissor(bt),pt.setScissorTest(It),W=-1;return}else if(ht.__webglFramebuffer===void 0)Ot.setupRenderTarget(b);else if(ht.__hasExternalTextures)Ot.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const zt=b.depthTexture;if(ht.__boundDepthTexture!==zt){if(zt!==null&&Nt.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(b)}}const vt=b.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(dt=!0);const At=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[I])?z=At[I][V]:z=At[I],G=!0):b.samples>0&&Ot.useMultisampledRTT(b)===!1?z=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?z=At[V]:z=At,tt.copy(b.viewport),bt.copy(b.scissor),It=b.scissorTest}else tt.copy(Q).multiplyScalar(gt).floor(),bt.copy(ft).multiplyScalar(gt).floor(),It=Mt;if(V!==0&&(z=O),pt.bindFramebuffer(U.FRAMEBUFFER,z)&&pt.drawBuffers(b,z),pt.viewport(tt),pt.scissor(bt),pt.setScissorTest(It),G){const ht=Nt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,ht.__webglTexture,V)}else if(dt){const ht=I;for(let vt=0;vt<b.textures.length;vt++){const At=Nt.get(b.textures[vt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+vt,At.__webglTexture,V,ht)}}else if(b!==null&&V!==0){const ht=Nt.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ht.__webglTexture,V)}W=-1};function Eo(b){const I=Nt.get(b);return(I.__readFormat!==b.format||I.__readType!==b.type)&&(I.__readFormat=b.format,I.__readType=b.type,I.__formatReadable=ce.textureFormatReadable(b.format),I.__typeReadable=ce.textureTypeReadable(b.type)),I}this.readRenderTargetPixels=function(b,I,V,z,G,dt,Et,ht=0){if(!(b&&b.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(vt=vt[Et],Array.isArray(vt)&&(vt=vt[0])),vt){pt.bindFramebuffer(U.FRAMEBUFFER,vt);try{const At=b.textures[ht],zt=At.format,Xt=At.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);const Tt=Eo(At);if(Tt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-z&&V>=0&&V<=b.height-G&&U.readPixels(I,V,z,G,st.convert(zt),st.convert(Xt),dt)}finally{const At=et!==null?Nt.get(et).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,I,V,z,G,dt,Et,ht=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(vt=vt[Et],Array.isArray(vt)&&(vt=vt[0])),vt)if(I>=0&&I<=b.width-z&&V>=0&&V<=b.height-G){pt.bindFramebuffer(U.FRAMEBUFFER,vt);const At=b.textures[ht],zt=At.format,Xt=At.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ht);const Tt=Eo(At);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,qt),U.bufferData(U.PIXEL_PACK_BUFFER,dt.byteLength,U.STREAM_READ),U.readPixels(I,V,z,G,st.convert(zt),st.convert(Xt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const _e=et!==null?Nt.get(et).__webglFramebuffer:null;pt.bindFramebuffer(U.FRAMEBUFFER,_e);const le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Rh(U,le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,qt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,dt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(qt),U.deleteSync(le),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,I=null,V=0){const z=Math.pow(2,-V),G=Math.floor(b.image.width*z),dt=Math.floor(b.image.height*z),Et=I!==null?I.x:0,ht=I!==null?I.y:0;Ot.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,Et,ht,G,dt),pt.unbindTexture()},this.copyTextureToTexture=function(b,I,V=null,z=null,G=0,dt=0){let Et,ht,vt,At,zt,Xt,Tt,qt,_e;const le=b.isCompressedTexture?b.mipmaps[dt]:b.image;if(V!==null)Et=V.max.x-V.min.x,ht=V.max.y-V.min.y,vt=V.isBox3?V.max.z-V.min.z:1,At=V.min.x,zt=V.min.y,Xt=V.isBox3?V.min.z:0;else{const Kt=Math.pow(2,-G);Et=Math.floor(le.width*Kt),ht=Math.floor(le.height*Kt),b.isDataArrayTexture?vt=le.depth:b.isData3DTexture?vt=Math.floor(le.depth*Kt):vt=1,At=0,zt=0,Xt=0}z!==null?(Tt=z.x,qt=z.y,_e=z.z):(Tt=0,qt=0,_e=0);const re=st.convert(I.format),Le=st.convert(I.type);let wt;I.isData3DTexture?(Ot.setTexture3D(I,0),wt=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ot.setTexture2DArray(I,0),wt=U.TEXTURE_2D_ARRAY):(Ot.setTexture2D(I,0),wt=U.TEXTURE_2D),pt.activeTexture(U.TEXTURE0),pt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),pt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),pt.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const ze=pt.getParameter(U.UNPACK_ROW_LENGTH),Qt=pt.getParameter(U.UNPACK_IMAGE_HEIGHT),Jn=pt.getParameter(U.UNPACK_SKIP_PIXELS),De=pt.getParameter(U.UNPACK_SKIP_ROWS),gs=pt.getParameter(U.UNPACK_SKIP_IMAGES);pt.pixelStorei(U.UNPACK_ROW_LENGTH,le.width),pt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le.height),pt.pixelStorei(U.UNPACK_SKIP_PIXELS,At),pt.pixelStorei(U.UNPACK_SKIP_ROWS,zt),pt.pixelStorei(U.UNPACK_SKIP_IMAGES,Xt);const Nn=b.isDataArrayTexture||b.isData3DTexture,Qn=I.isDataArrayTexture||I.isData3DTexture;if(b.isDepthTexture){const Kt=Nt.get(b),Ae=Nt.get(I),nn=Nt.get(Kt.__renderTarget),de=Nt.get(Ae.__renderTarget);pt.bindFramebuffer(U.READ_FRAMEBUFFER,nn.__webglFramebuffer),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Te=0;Te<vt;Te++)Nn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,G,Xt+Te),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nt.get(I).__webglTexture,dt,_e+Te)),U.blitFramebuffer(At,zt,At+Et,zt+ht,Tt,qt,Tt+Et,qt+ht,U.DEPTH_BUFFER_BIT,U.NEAREST);pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||Nt.has(b)){const Kt=Nt.get(b),Ae=Nt.get(I);pt.bindFramebuffer(U.READ_FRAMEBUFFER,L),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let nn=0;nn<vt;nn++)Nn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,G,Xt+nn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kt.__webglTexture,G),Qn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,dt,_e+nn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,dt),G!==0?U.blitFramebuffer(At,zt,At+Et,zt+ht,Tt,qt,Tt+Et,qt+ht,U.COLOR_BUFFER_BIT,U.NEAREST):Qn?U.copyTexSubImage3D(wt,dt,Tt,qt,_e+nn,At,zt,Et,ht):U.copyTexSubImage2D(wt,dt,Tt,qt,At,zt,Et,ht);pt.bindFramebuffer(U.READ_FRAMEBUFFER,null),pt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Qn?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(wt,dt,Tt,qt,_e,Et,ht,vt,re,Le,le.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,dt,Tt,qt,_e,Et,ht,vt,re,le.data):U.texSubImage3D(wt,dt,Tt,qt,_e,Et,ht,vt,re,Le,le):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,dt,Tt,qt,Et,ht,re,Le,le.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,dt,Tt,qt,le.width,le.height,re,le.data):U.texSubImage2D(U.TEXTURE_2D,dt,Tt,qt,Et,ht,re,Le,le);pt.pixelStorei(U.UNPACK_ROW_LENGTH,ze),pt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qt),pt.pixelStorei(U.UNPACK_SKIP_PIXELS,Jn),pt.pixelStorei(U.UNPACK_SKIP_ROWS,De),pt.pixelStorei(U.UNPACK_SKIP_IMAGES,gs),dt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&U.generateMipmap(wt),pt.unbindTexture()},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&Ot.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ot.setTextureCube(b,0):b.isData3DTexture?Ot.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ot.setTexture2DArray(b,0):Ot.setTexture2D(b,0),pt.unbindTexture()},this.resetState=function(){q=0,B=0,et=null,pt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const pe=Math.PI/180;function Dt(i,t,e){return Math.max(t,Math.min(e,i))}function Ve(i,t,e){return i+(t-i)*e}function Lc(i,t,e,n){return Ve(i,t,1-Math.exp(-e*n))}function er(i,t,e){const n=Dt((e-i)/(t-i),0,1);return n*n*(3-2*n)}function Dc(i,t){let e=(t-i)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function ln(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ri(i){return[Math.sin(i),Math.cos(i)]}function Ic(i,t,e){const n=Math.cos(e),s=Math.sin(e);return[i*n+t*s,-i*s+t*n]}function dr(i,t,e){const n=Math.cos(e),s=Math.sin(e);return[i*n-t*s,i*s+t*n]}const St={size:420,half:210,segments:180,water:0,borderStart:190,baseZ:176,baseR:16,spawnZ:150},nr=[{id:0,label:"Performance",dpr:1,shadow:1024,range:56,trees:150,grass:650,reeds:200,rocks:70,treeShadow:!1,particles:220},{id:1,label:"Balanced",dpr:1.3,shadow:1536,range:74,trees:300,grass:1400,reeds:380,rocks:130,treeShadow:!1,particles:380},{id:2,label:"High",dpr:1.65,shadow:2048,range:92,trees:460,grass:2400,reeds:560,rocks:190,treeShadow:!0,particles:560}];function p0(){const i=new URLSearchParams(location.search).get("quality");if(i==="0"||i==="1"||i==="2")return Number(i);const t=navigator.hardwareConcurrency||4;return navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches?t<=4?0:1:t>=8?2:t<=4?0:1}const ir={lynx:{id:"lynx",name:"Lynx",role:"Light",blurb:"A fast scout with a quick gun and paper-thin plate. Keep moving, spot the valley, and take the long way around.",hp:980,mass:22,accel:11,lowGear:.92,maxSpeed:16.8,reverse:7.4,drag:.16,rollResist:1.35,brake:16,turn:1.28,neutralTurn:.78,yawAccel:4.2,turretTurn:1.05,gunSlew:.85,dep:10*pe,elev:22*pe,reload:4.05,damage:185,pen:148,shellSpeed:440,caliber:75,baseDisp:.3,moveDisp:.42,hullDisp:.28,turretDisp:.2,fireDisp:.7,aimRate:3.6,view:285,ricochet:70*pe,normalization:4*pe,armorHull:[46,28,18,12],armorTurret:[44,26,16,10],length:5.15,width:2.15,height:.78,turretLen:1.45,turretWid:1.15,turretH:.38,turretZ:.05,gunLen:3.35,gunR:.045,wheels:4,susp:78,suspDamp:11,rangeNear:80,rangeFar:180},vanguard:{id:"vanguard",name:"Vanguard",role:"Medium",blurb:"The company workhorse. Enough glacis to angle on a ridge, enough pace to leave a bad piece of ground.",hp:1480,mass:36,accel:7.6,lowGear:1.12,maxSpeed:11.4,reverse:5.1,drag:.2,rollResist:1.7,brake:12,turn:.82,neutralTurn:.46,yawAccel:2.6,turretTurn:.64,gunSlew:.5,dep:8*pe,elev:20*pe,reload:6.3,damage:290,pen:176,shellSpeed:350,caliber:90,baseDisp:.35,moveDisp:.72,hullDisp:.38,turretDisp:.28,fireDisp:.95,aimRate:2.25,view:245,ricochet:70*pe,normalization:5*pe,armorHull:[96,62,42,20],armorTurret:[118,74,46,22],length:6.35,width:2.85,height:.95,turretLen:2.15,turretWid:1.7,turretH:.52,turretZ:.12,gunLen:4.15,gunR:.065,wheels:5,susp:52,suspDamp:9,rangeNear:45,rangeFar:150},bulwark:{id:"bulwark",name:"Bulwark",role:"Heavy",blurb:"A rolling bunker. Point the front at the enemy, creep the ridge, and make them waste shells on your glacis.",hp:2100,mass:54,accel:5.4,lowGear:1.38,maxSpeed:7.7,reverse:3.3,drag:.24,rollResist:2.05,brake:9,turn:.5,neutralTurn:.28,yawAccel:1.5,turretTurn:.38,gunSlew:.32,dep:6*pe,elev:18*pe,reload:9.6,damage:430,pen:218,shellSpeed:285,caliber:122,baseDisp:.42,moveDisp:1.05,hullDisp:.48,turretDisp:.34,fireDisp:1.15,aimRate:1.45,view:215,ricochet:70*pe,normalization:5*pe,armorHull:[188,96,62,28],armorTurret:[214,118,72,30],length:7.15,width:3.35,height:1.12,turretLen:2.55,turretWid:2.15,turretH:.7,turretZ:.18,gunLen:4.6,gunR:.09,wheels:6,susp:34,suspDamp:7.5,rangeNear:30,rangeFar:120}},m0=["lynx","vanguard","bulwark"],Tl=["Warden","Ash","Bramble","Cob","Drift","Ember","Flint"],g0=["Barrow","Dunn","Holt","Keel","Marsh","Pike","Quinn"],_0=["lynx","vanguard","vanguard","bulwark","lynx","bulwark"],x0=["lynx","vanguard","bulwark","vanguard","vanguard","bulwark","lynx"];function yn(i){return Math.sin(i*.0115)*9+Math.sin(i*.0042+.6)*5}function v0(i){return 10.5+Math.exp(-((i+155)**2)/2592)*18}const qn=[-88,76];function M0(i){let e=-2.45-Math.exp(-((i+155)**2)/1800)*1.6;for(const n of qn){const s=Math.exp(-((i-n)**2)/450);e=e*(1-s)+-.18*s}return e}function Ii(){return{x:0,z:yn(0),halfX:5.2,halfZ:15.5,deckY:1.08}}function Nc(){const i=Ii(),t=yn(qn[0]),e=yn(qn[1]),n=-150,s=St.spawnZ;return[[{x:-6,z:n},{x:-36,z:-108},{x:-72,z:-58},{x:qn[0],z:t},{x:-104,z:36},{x:-64,z:96},{x:-8,z:s}],[{x:0,z:n},{x:-6,z:-96},{x:0,z:i.z-34},{x:0,z:i.z},{x:0,z:i.z+34},{x:6,z:100},{x:0,z:s}],[{x:6,z:n},{x:28,z:-78},{x:58,z:e-26},{x:qn[1],z:e},{x:108,z:48},{x:64,z:108},{x:8,z:s}]]}function S0(){const i=Ii(),t=yn(qn[0]),e=yn(qn[1]);return[{x:-14,z:-52,lane:1},{x:8,z:i.z-30,lane:1},{x:-8,z:i.z+28,lane:1},{x:12,z:78,lane:1},{x:-70,z:-36,lane:0},{x:-96,z:t+18,lane:0},{x:-78,z:58,lane:0},{x:86,z:e-18,lane:2},{x:78,z:e+16,lane:2},{x:118,z:34,lane:2},{x:104,z:62,lane:2},{x:70,z:118,lane:2},{x:46,z:-58,lane:2},{x:-40,z:118,lane:0}]}const Hn={x:116,z:52,r:26};function wl(i){const t=i===0?-1:1,e=i===0?0:Math.PI,n=[-18,-9,0,9,18,-13,13],s=[0,-7,-1,-7,0,7,7];return n.map((r,a)=>({x:r,z:t*St.spawnZ+t*s[a],yaw:e}))}function Uc(i,t=1){const e=Math.max(0,i.angle-i.normalization);if(!(i.caliber>i.thickness*2.5)&&e>i.ricochet)return"ricochet";const s=i.thickness/Math.max(.2,Math.cos(e));return i.pen*t>=s?"pen":"bounce"}function y0(){return[{name:"heavy front vs light gun",expect:"bounce",q:{thickness:188,angle:0,pen:148,caliber:75,ricochet:70*pe,normalization:5*pe}},{name:"heavy side vs heavy gun",expect:"pen",q:{thickness:96,angle:0,pen:218,caliber:122,ricochet:70*pe,normalization:5*pe}},{name:"grazing side plate",expect:"ricochet",q:{thickness:96,angle:80*pe,pen:218,caliber:90,ricochet:70*pe,normalization:5*pe}},{name:"overmatch thin roof",expect:"pen",q:{thickness:12,angle:75*pe,pen:148,caliber:75,ricochet:70*pe,normalization:5*pe}}].map(t=>{const e=Uc(t.q,1);return{name:t.name,got:e,expect:t.expect,ok:e===t.expect}})}const Vs=new F,Ws=new F,Ji=new F,ii=new F,Qi=new F;function Fc(i,t,e){if(i<.8)return Math.atan2(t,Math.max(.2,i));const n=9.8,s=e*e,r=s*s-n*(n*i*i+2*t*s);return r<=0?Math.atan2(t,i):Math.atan((s-Math.sqrt(r))/(n*i))}function Oc(i,t,e,n,s,r,a,o,l,c,h,f){const d=[i,t,e],p=[n-i,s-t,r-e],x=[a,o,l],S=[c,h,f];let m=0,u=1,g=0,M=0,v=0;for(let T=0;T<3;T++){if(Math.abs(p[T])<1e-8){if(d[T]<x[T]||d[T]>S[T])return null;continue}let _=(x[T]-d[T])/p[T],E=(S[T]-d[T])/p[T],R=-1;if(_>E){const C=_;_=E,E=C,R=1}if(_>m&&(m=_,g=T===0?R:0,M=T===1?R:0,v=T===2?R:0),u=Math.min(u,E),m>u)return null}return u<0||m>1?null:{t:m>=0?m:0,nx:g,ny:M,nz:v}}class E0{events=[];shells=[];tracerGeo=new tn(.08,.08,1.25);allyMat=new Va({color:16769698});foeMat=new Va({color:14148863});anchor;constructor(t){this.anchor=t}get activeShells(){return this.shells.filter(t=>t.alive).length}clear(){for(const t of this.shells)t.mesh.removeFromParent();this.shells=[],this.events.length=0}tryFire(t){if(!t.alive||t.reload>0)return!1;t.group.updateMatrixWorld(!0),t.muzzle.getWorldPosition(ii),t.muzzle.getWorldDirection(Qi);const e=Math.atan(t.dispersion/100),n=Math.random()*Math.PI*2,s=Math.sqrt(Math.random())*e,r=Math.atan2(Qi.x,Qi.z)+Math.cos(n)*s,a=Math.asin(Math.max(-1,Math.min(1,Qi.y)))+Math.sin(n)*s,o=Math.cos(a),l=Math.sin(r)*o,c=Math.sin(a),h=Math.cos(r)*o,f=t.spec.shellSpeed,d=new he(this.tracerGeo,t.team===0?this.allyMat:this.foeMat);return this.anchor.add(d),this.shells.push({alive:!0,x:ii.x+l*.6,y:ii.y+c*.6,z:ii.z+h*.6,vx:l*f,vy:c*f,vz:h*f,owner:t.id,team:t.team,damage:t.spec.damage,pen:t.spec.pen,caliber:t.spec.caliber,life:3.2,mesh:d}),t.fired(),this.events.push({type:"fire",a:t.id,b:-1,x:ii.x,y:ii.y,z:ii.z,n:0,dx:l,dy:c,dz:h}),!0}update(t,e,n,s,r){for(const a of this.shells){if(!a.alive)continue;a.life-=t;const o=Math.hypot(a.vx,a.vy,a.vz),l=Math.max(1,Math.ceil(o*t/.8)),c=t/l;let h=!1;for(let f=0;f<l&&!h;f++){const d=a.x,p=a.y,x=a.z;a.x+=a.vx*c,a.y+=a.vy*c,a.z+=a.vz*c,a.vy-=9.8*c,h=this.impact(a,d,p,x,e,n,s,r)}a.life<=0?this.killShell(a):this.pose(a)}this.shells=this.shells.filter(a=>a.alive)}pose(t){t.mesh.position.set(t.x,t.y,t.z),t.mesh.lookAt(t.x+t.vx,t.y+t.vy,t.z+t.vz)}killShell(t){t.alive=!1,t.mesh.removeFromParent()}impact(t,e,n,s,r,a,o,l){let c=1,h="",f=null,d=new F,p=null,x=!0;Math.hypot(t.x-e,t.y-n,t.z-s);for(const w of r){if(w.id===t.owner||w.team===t.team)continue;const T=this.hitMesh(w.hullMesh,w.hullBox,e,n,s,t.x,t.y,t.z),_=this.hitMesh(w.turretMesh,w.turretBox,e,n,s,t.x,t.y,t.z),E=b0(T,_);!E||E.t>=c||(c=E.t,h="tank",f=w,d=E.n,p=E.mesh,x=E.mesh===w.hullMesh)}for(const w of o){const T=w0(e,n,s,t.x,t.y,t.z,w);T&&T.t<c&&(c=T.t,h="solid",f=null)}for(const w of l){const T=A0(e,n,s,t.x,t.y,t.z,w);T&&T<c&&(c=T,h="post",f=null)}const S=e+(t.x-e)*c,m=n+(t.y-n)*c,u=s+(t.z-s)*c;if(h===""&&m<=a.groundAt(S,u)+.08&&(h="ground",c=Math.min(c,1)),h==="")return!1;const g=e+(t.x-e)*c,M=h==="ground"?a.groundAt(S,u):n+(t.y-n)*c,v=s+(t.z-s)*c;if(t.x=g,t.y=M,t.z=v,h==="tank"&&f&&p)if(!f.alive)this.events.push({type:"ground",a:t.owner,b:f.id,x:g,y:M,z:v,n:0,dx:0,dy:1,dz:0});else{Ji.copy(d).transformDirection(p.matrixWorld).normalize();const w=Qi.set(t.vx,t.vy,t.vz).normalize(),T=Math.acos(Math.max(-1,Math.min(1,-w.dot(Ji)))),_=T0(d),E=x?f.spec.armorHull:f.spec.armorTurret,R=_==="front"?E[0]:_==="side"?E[1]:_==="rear"?E[2]:E[3],C=.85+Math.random()*.3;if(Uc({thickness:R,angle:T,pen:t.pen,caliber:t.caliber,ricochet:f.spec.ricochet,normalization:f.spec.normalization},C)==="pen"){const N=t.damage*(.9+Math.random()*.2);f.hp-=N;const O=r.find(L=>L.id===t.owner);O&&(O.hits++,O.pens++,O.damageDealt+=N),this.events.push({type:"pen",a:t.owner,b:f.id,x:g,y:M,z:v,n:N,dx:w.x,dy:w.y,dz:w.z}),f.hp<=0&&(f.kill(),O&&O.kills++,this.events.push({type:"kill",a:t.owner,b:f.id,x:g,y:M+1,z:v,n:N,dx:0,dy:1,dz:0}))}else{const N=r.find(O=>O.id===t.owner);N&&N.hits++,f.blocked+=t.damage,this.events.push({type:"bounce",a:t.owner,b:f.id,x:g,y:M,z:v,n:t.damage,dx:Ji.x,dy:Ji.y,dz:Ji.z})}}else this.events.push({type:"ground",a:t.owner,b:-1,x:g,y:M,z:v,n:0,dx:0,dy:1,dz:0});return this.killShell(t),!0}hitMesh(t,e,n,s,r,a,o,l){t.updateWorldMatrix(!0,!1),$r.copy(t.matrixWorld).invert(),Vs.set(n,s,r).applyMatrix4($r),Ws.set(a,o,l).applyMatrix4($r);const c=Oc(Vs.x,Vs.y,Vs.z,Ws.x,Ws.y,Ws.z,e.min.x,e.min.y,e.min.z,e.max.x,e.max.y,e.max.z);return c?{t:c.t,n:new F(c.nx,c.ny,c.nz),mesh:t}:null}}const $r=new te;function b0(i,t){return i?t?i.t<=t.t?i:t:i:t}function T0(i){const t=Math.abs(i.x),e=Math.abs(i.y),n=Math.abs(i.z);return e>=t&&e>=n?"roof":n>=t?i.z>0?"front":"rear":"side"}function w0(i,t,e,n,s,r,a){const[o,l]=dr(i-a.x,e-a.z,a.rot),[c,h]=dr(n-a.x,r-a.z,a.rot),f=Oc(o,t-a.y,l,c,s-a.y,h,-a.hx,-a.hy,-a.hz,a.hx,a.hy,a.hz);return f?{t:f.t}:null}function A0(i,t,e,n,s,r,a){const o=n-i,l=r-e,c=i-a.x,h=e-a.z,f=o*o+l*l;if(f<1e-6)return null;const d=Math.max(0,Math.min(1,-(c*o+h*l)/f)),p=i+o*d,x=e+l*d,S=t+(s-t)*d;return(p-a.x)**2+(x-a.z)**2>a.r*a.r||S<a.y0||S>a.y1?null:d}const Xs=Nc(),R0=S0();function C0(i,t,e,n,s){const r=new Set;for(const a of i){if(!a.alive)continue;const o=a.y+2.15;for(const l of i){if(!l.alive||l.team===a.team)continue;const c=l.x-a.x,h=l.z-a.z,f=Math.hypot(c,l.y-a.y,h);f>a.spec.view&&f>48||f>48&&f>a.spec.view||!(f<46)&&!zc(t,e,n,a.x,o,a.z,l.x,l.y+1.25,l.z)||r.add(l.id)}}for(const a of i)r.has(a.id)?a.detected=3:a.detected=Math.max(0,a.detected-s)}class P0{mem=new Map;bind(t){this.mem.clear();let e=0,n=0;for(const s of t){if(s.player)continue;const r=s.team===0?e++:n++;this.mem.set(s.id,{lane:r%3,wp:0,hold:0,stuck:0,reverse:0,think:s.id*.05,hesitate:.4,target:-1})}}drive(t,e,n,s){const r=this.mem.get(t.id);if(!r||!t.alive)return{throttle:0,steer:0};r.think-=s,r.hesitate=Math.max(0,r.hesitate-s),r.reverse=Math.max(0,r.reverse-s);const a=e.filter(R=>R.alive&&R.team!==t.team),o=e.filter(R=>R.alive&&R.team===t.team);if(r.think<=0){r.think=.32;let R=-1,C=1/0;for(const O of a){if(O.detected<=0)continue;const L=Math.hypot(O.x-t.x,O.z-t.z);L<C&&(C=L,R=O.id)}r.target=R;const D=e.find(O=>O.id===R);t.hp/t.spec.hp<.3&&D&&C<90&&(r.hold=0),a.length<=2&&o.length>=a.length&&(r.hold=0)}const l=e.find(R=>R.id===r.target&&R.alive&&R.detected>0),c=Xs[r.lane]??Xs[0],h=t.team===0?c:[...c].reverse(),f=t.team===0?{x:0,z:St.baseZ}:{x:0,z:-176},d=t.team===0?{x:0,z:-176}:{x:0,z:St.baseZ};let p=h[Math.min(r.wp,h.length-1)];const x=t.hp/t.spec.hp<.3,S=l?Math.hypot(l.x-t.x,l.z-t.z):9999;if(a.length===0||a.length<=2&&!x)p=f;else if(x&&S<100)p=d;else if(l&&S<t.spec.rangeFar&&S>18){const R=L0(t,r.lane);R&&t.spec.id!=="lynx"&&(p=R),r.hold=t.spec.id==="lynx"?0:.4}const m=p.x-t.x,u=p.z-t.z;Math.hypot(m,u)<9&&r.wp<h.length-1&&p!==f&&p!==d&&r.wp++;let g=Math.atan2(m,u);l&&r.hold>0&&t.spec.id!=="lynx"&&(g=Math.atan2(l.x-t.x,l.z-t.z)+(t.spec.id==="bulwark"?.32:.22)*(t.id%2===0?1:-1));let M=Dc(t.yaw,g),v=Dt(M/.42,-1,1),w=Math.abs(M)>1?.3:1;r.hold>0&&l&&Math.abs(M)<.35&&t.spec.id!=="lynx"&&(w=0),r.reverse>0&&(w=-.65,v=-v);const[T,_]=ri(t.yaw);if(n.sample(t.x+T*7,t.z+_*7).deep){const R=n.sample(t.x-_*6,t.z+T*6),C=n.sample(t.x+_*6,t.z-T*6);v=R.waterDepth<C.waterDepth?-1:1,w=.45}return w>.4&&Math.abs(t.speed)<.4?r.stuck+=s:r.stuck=Math.max(0,r.stuck-s*.5),r.stuck>1.25&&(r.reverse=.85,r.stuck=0,r.wp=Math.max(0,r.wp-1)),{throttle:w,steer:v}}aim(t,e,n,s,r,a){const o=this.mem.get(t.id);if(!o||!t.alive)return;const l=e.find(R=>R.id===o.target&&R.alive&&R.detected>0);if(!l){const R=Xs[o.lane]??Xs[0],C=t.team===0?R:[...R].reverse(),D=C[Math.min(o.wp,C.length-1)];t.aim(Math.atan2(D.x-t.x,D.z-t.z),0,a);return}const c=Math.hypot(l.x-t.x,l.z-t.z),h=c/t.spec.shellSpeed,[f,d]=ri(l.yaw),p=l.x+f*l.speed*h,x=l.z+d*l.speed*h,S=l.y+1.15;t.group.updateMatrixWorld(!0),t.muzzle.getWorldPosition(si);const m=Math.hypot(p-si.x,x-si.z),u=Fc(m,S-si.y,t.spec.shellSpeed);t.aim(Math.atan2(p-t.x,x-t.z),u,a),t.group.updateMatrixWorld(!0),t.muzzle.getWorldDirection(qs);const g=p-si.x,M=S-si.y,v=x-si.z,w=Math.hypot(g,M,v)||1,T=qs.x*(g/w)+qs.y*(M/w)+qs.z*(v/w),_=zc(n,s,r,t.x,t.y+2.1,t.z,p,S,x),E=t.dispersion<t.spec.baseDisp+t.spec.moveDisp*.8;T>.996&&_&&E&&t.reload<=0&&o.hesitate<=0&&c<t.spec.view&&(t.aiFire=!0,o.hesitate=.2+Math.random()*.7)}}const si=new F,qs=new F;function L0(i,t){let e=null,n=28;for(const s of R0){if(s.lane!==t)continue;const r=Math.hypot(s.x-i.x,s.z-i.z);r<n&&(n=r,e=s)}return e}function zc(i,t,e,n,s,r,a,o,l){const c=a-n,h=o-s,f=l-r,d=Math.hypot(c,h,f),p=Math.max(2,Math.ceil(d/4));for(let x=1;x<p;x++){const S=x/p,m=n+c*S,u=s+h*S,g=r+f*S;if(u<i.groundAt(m,g)+.4)return!1}for(const x of t)if(!(Math.abs((n+a)/2-x.x)>d&&Math.abs((r+l)/2-x.z)>d)&&D0(n,s,r,a,o,l,x))return!1;for(const x of e)if(N0(n,s,r,a,o,l,x))return!1;return!0}function D0(i,t,e,n,s,r,a){const o=n-i,l=s-t,c=r-e,h=6;for(let f=1;f<h;f++){const d=f/h,[p,x]=I0(i+o*d-a.x,e+c*d-a.z,a.rot),S=t+l*d-a.y;if(Math.abs(p)<=a.hx&&Math.abs(S)<=a.hy&&Math.abs(x)<=a.hz)return!0}return!1}function I0(i,t,e){const n=Math.cos(e),s=Math.sin(e);return[i*n-t*s,i*s+t*n]}function N0(i,t,e,n,s,r,a){const o=n-i,l=r-e,c=o*o+l*l||1,h=Dt(-((i-a.x)*o+(e-a.z)*l)/c,0,1),f=i+o*h,d=e+l*h,p=t+(s-t)*h;return(f-a.x)**2+(d-a.z)**2<=a.r*a.r&&p>=a.y0&&p<=a.y1}function U0(i,t,e,n,s){const r=i.createGain();return r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(Math.max(.001,s),t+e),r.gain.exponentialRampToValueAtTime(1e-4,t+n),r}class F0{ctx=null;master=null;engineGain=null;engineFilter=null;oscA=null;oscB=null;lfo=null;started=!1;volume=.75;ensure(){if(this.ctx)return this.ctx;const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;const e=new t,n=e.createGain();return n.gain.value=this.volume,n.connect(e.destination),this.ctx=e,this.master=n,e}async unlock(){const t=this.ensure();t&&(t.state==="suspended"&&await t.resume(),this.startLoops())}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}suspend(){this.ctx?.suspend()}resume(){this.ctx?.resume()}noiseBuffer(t){const e=this.ctx;if(!e)return null;const n=Math.floor(e.sampleRate*t),s=e.createBuffer(1,n,e.sampleRate),r=s.getChannelData(0);let a=0;for(let o=0;o<n;o++){const l=Math.random()*2-1;a=a*.96+l*.04,r[o]=a*3.2}return s}startLoops(){if(this.started||!this.ctx||!this.master)return;this.started=!0;const t=this.ctx,e=t.createGain();e.gain.value=1e-4;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=180,n.Q.value=.7;const s=t.createOscillator();s.type="sawtooth",s.frequency.value=42;const r=t.createOscillator();r.type="square",r.frequency.value=84;const a=t.createGain();a.gain.value=.22;const o=t.createGain();o.gain.value=.08,s.connect(a),r.connect(o),a.connect(n),o.connect(n);const l=this.noiseBuffer(2);if(l){const p=t.createBufferSource();p.buffer=l,p.loop=!0;const x=t.createGain();x.gain.value=.35,p.connect(x),x.connect(n),p.start()}n.connect(e),e.connect(this.master);const c=t.createOscillator();c.frequency.value=12;const h=t.createGain();h.gain.value=90,c.connect(h),h.connect(n.frequency);const f=t.createGain();f.gain.value=.04,c.connect(f),f.connect(e.gain),s.start(),r.start(),c.start(),this.engineGain=e,this.engineFilter=n,this.oscA=s,this.oscB=r,this.lfo=c;const d=this.noiseBuffer(3);if(d){const p=t.createBufferSource();p.buffer=d,p.loop=!0;const x=t.createBiquadFilter();x.type="bandpass",x.frequency.value=420,x.Q.value=.4;const S=t.createGain();S.gain.value=.035,p.connect(x),x.connect(S),S.connect(this.master),p.start()}}updateEngine(t,e,n){if(!this.ctx||!this.oscA||!this.oscB||!this.engineFilter||!this.engineGain||!this.lfo)return;const s=Math.min(1,Math.abs(t)/Math.max(1,e)),r=Math.min(1,Math.abs(n)),a=this.ctx.currentTime,o=36+s*78+r*10;this.oscA.frequency.setTargetAtTime(o,a,.08),this.oscB.frequency.setTargetAtTime(o*2.02,a,.08),this.lfo.frequency.setTargetAtTime(7+s*18,a,.1),this.engineFilter.frequency.setTargetAtTime(140+s*900+r*220,a,.08);const l=.04+s*.09+r*.03;this.engineGain.gain.setTargetAtTime(l,a,.06)}silenceEngine(){!this.ctx||!this.engineGain||this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.1)}burst(t,e,n=1){const s=this.ensure();if(!s||!this.master)return;const r=s.currentTime,a=t==="boom"?.85:t==="shot"?.28:t==="bounce"?.22:.12,o=U0(s,r,.012,a,e);if(o.connect(this.master),t==="shot"||t==="boom"||t==="pen"){const h=this.noiseBuffer(a);if(h){const f=s.createBufferSource();f.buffer=h,f.playbackRate.value=n;const d=s.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(t==="boom"?420:1800,r),d.frequency.exponentialRampToValueAtTime(t==="boom"?80:240,r+a),f.connect(d),d.connect(o),f.start(r),f.stop(r+a)}}const l=s.createOscillator();l.type=t==="bounce"?"triangle":"sine",t==="shot"?(l.frequency.setValueAtTime(150*n,r),l.frequency.exponentialRampToValueAtTime(40,r+a)):t==="boom"?(l.frequency.setValueAtTime(70,r),l.frequency.exponentialRampToValueAtTime(28,r+a)):t==="bounce"?(l.frequency.setValueAtTime(1400*n,r),l.frequency.exponentialRampToValueAtTime(500,r+a)):t==="pen"?(l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(90,r+.08)):l.frequency.setValueAtTime(640,r);const c=s.createGain();c.gain.value=t==="boom"?.8:.35,l.connect(c),c.connect(o),l.start(r),l.stop(r+a)}shot(t){const e=Math.min(.55,8/Math.max(6,t));this.burst("shot",e,.85+Math.random()*.3)}boom(t){const e=Math.min(.7,18/Math.max(8,t));this.burst("boom",e,.8+Math.random()*.3)}pen(){this.burst("pen",.22,.9+Math.random()*.2)}bounce(){this.burst("bounce",.16,.85+Math.random()*.4)}ui(){this.burst("ui",.06,1)}}class O0{throttle=0;steer=0;pauseEdge=!1;mapEdge=!1;zoomDelta=0;keys=new Set;fireLatch=!1;lookX=0;lookY=0;sniperToggle=!1;enabled=!1;stickId=null;lookId=null;originX=0;originY=0;lastX=0;lastY=0;stickX=0;stickY=0;sens=.00235;layer;stick;knob;constructor(t,e,n){this.layer=t,this.stick=e,this.knob=n,window.addEventListener("keydown",o=>{o.repeat||(this.keys.add(o.code),this.enabled&&(o.code==="Space"&&(o.preventDefault(),this.fireLatch=!0),o.code==="KeyC"&&(this.sniperToggle=!this.sniperToggle),o.code==="KeyM"&&(this.mapEdge=!0),o.code==="Escape"&&(this.pauseEdge=!0)))}),window.addEventListener("keyup",o=>this.keys.delete(o.code)),window.addEventListener("blur",()=>this.keys.clear()),t.addEventListener("contextmenu",o=>o.preventDefault()),t.addEventListener("pointerdown",o=>this.onDown(o)),window.addEventListener("pointermove",o=>this.onMove(o)),window.addEventListener("pointerup",o=>this.onUp(o)),window.addEventListener("pointercancel",o=>this.onUp(o)),t.addEventListener("wheel",o=>{this.enabled&&(o.preventDefault(),this.zoomDelta+=o.deltaY)},{passive:!1});const s=document.querySelector("#btn-fire"),r=document.querySelector("#btn-zoom"),a=document.querySelector("#btn-pause");s?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.fireLatch=!0)}),r?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.sniperToggle=!this.sniperToggle)}),a?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.pauseEdge=!0)})}setEnabled(t){this.enabled=t,this.layer.hidden=!t,t||this.release()}setSniper(t){this.sens=t?7e-4:.00235}isSniper(){return this.sniperToggle||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}consumeFire(){const t=this.fireLatch;return this.fireLatch=!1,t}consumeLook(){const t={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,t}sample(){let t=0,e=0;if(this.keys.has("KeyW")&&(t+=1),this.keys.has("KeyS")&&(t-=1),this.keys.has("KeyA")&&(e-=1),this.keys.has("KeyD")&&(e+=1),this.stickId!==null&&(t=this.stickY,e=this.stickX),!this.enabled){this.throttle=0,this.steer=0;return}this.throttle=Al(t),this.steer=Al(e)}onDown(t){if(!(!this.enabled||t.target.closest("[data-control]"))){if(t.pointerType==="touch"||t.pointerType==="pen"){const n=this.layer.getBoundingClientRect();t.clientX-n.left<n.width*.48&&this.stickId===null?(this.stickId=t.pointerId,this.originX=t.clientX,this.originY=t.clientY,this.placeStick(0,0),this.capture(t.pointerId)):this.lookId===null&&(this.lookId=t.pointerId,this.lastX=t.clientX,this.lastY=t.clientY,this.capture(t.pointerId));return}if(t.button===2){this.sniperToggle=!this.sniperToggle;return}t.button===0&&(this.fireLatch=!0,document.pointerLockElement!==this.layer&&this.layer.requestPointerLock?.())}}onMove(t){if(this.enabled){if(t.pointerId===this.stickId){const e=t.clientX-this.originX,n=t.clientY-this.originY,s=58,r=Math.hypot(e,n)||1,a=Math.min(s,r)/r;this.placeStick(e*a,n*a);const o=e*a/s,l=-(n*a)/s,c=.14;this.stickX=Math.abs(o)<c?0:o,this.stickY=Math.abs(l)<c?0:l}else t.pointerId===this.lookId&&(this.lookX+=t.clientX-this.lastX,this.lookY+=t.clientY-this.lastY,this.lastX=t.clientX,this.lastY=t.clientY);document.pointerLockElement===this.layer&&t.pointerType==="mouse"&&(this.lookX+=t.movementX,this.lookY+=t.movementY)}}onUp(t){t.pointerId===this.stickId&&(this.stickId=null,this.stickX=0,this.stickY=0,this.stick.hidden=!0),t.pointerId===this.lookId&&(this.lookId=null)}capture(t){try{this.layer.setPointerCapture(t)}catch{}}placeStick(t,e){this.stick.hidden=!1,this.stick.style.left=`${this.originX}px`,this.stick.style.top=`${this.originY}px`,this.knob.style.left=`${t}px`,this.knob.style.top=`${e}px`}release(){this.stickId=null,this.lookId=null,this.stickX=0,this.stickY=0,this.throttle=0,this.steer=0,this.stick.hidden=!0,document.pointerLockElement===this.layer&&document.exitPointerLock?.()}}function Al(i){return Math.max(-1,Math.min(1,i))}function z0(i,t){return new en({transparent:!0,depthWrite:!1,blending:t?na:Li,uniforms:{uSprite:{value:i}},vertexShader:`
      attribute float size;
      attribute float alpha;
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        vAlpha = alpha;
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (320.0 / max(8.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      precision highp float;
      uniform sampler2D uSprite;
      varying float vAlpha;
      varying vec3 vColor;
      void main() {
        float a = texture2D(uSprite, gl_PointCoord).a * vAlpha;
        if (a < 0.03) discard;
        gl_FragColor = vec4(vColor, a);
        #include <colorspace_fragment>
      }
    `})}class Rl{specks=[];pos;col;size;alpha;points;constructor(t,e,n){const s=new Ce;this.pos=new $t(new Float32Array(n*3),3),this.col=new $t(new Float32Array(n*3),3),this.size=new $t(new Float32Array(n),1),this.alpha=new $t(new Float32Array(n),1),this.pos.setUsage(xs),this.col.setUsage(xs),this.size.setUsage(xs),this.alpha.setUsage(xs),s.setAttribute("position",this.pos),s.setAttribute("color",this.col),s.setAttribute("size",this.size),s.setAttribute("alpha",this.alpha);const r=z0(t,e);r.vertexColors=!0,this.points=new su(s,r),this.points.frustumCulled=!1,this.points.renderOrder=e?3:2}spawn(t){if(this.specks.length<this.pos.count)this.specks.push(t);else{let e=0;for(let n=1;n<this.specks.length;n++)this.specks[n].life<this.specks[e].life&&(e=n);this.specks[e].life<t.life&&(this.specks[e]=t)}}update(t){const e=this.pos.count;for(let n=0;n<e;n++){const s=this.specks[n];if(!s||s.life<=0){this.alpha.setX(n,0),this.size.setX(n,0);continue}s.life-=t,s.vx*=Math.max(0,1-s.drag*t),s.vy*=Math.max(0,1-s.drag*t),s.vz*=Math.max(0,1-s.drag*t),s.vy+=s.grav*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t;const r=Math.max(0,s.life/s.max);this.pos.setXYZ(n,s.x,s.y,s.z),this.col.setXYZ(n,s.r,s.g,s.b),this.size.setX(n,s.size*(.6+(1-r)*1.4)),this.alpha.setX(n,r*r)}this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.size.needsUpdate=!0,this.alpha.needsUpdate=!0}}class B0{fire;smoke;budget;constructor(t,e){this.budget=e,this.fire=new Rl(t,!0,Math.max(80,e)),this.smoke=new Rl(t,!1,Math.max(120,e))}get objects(){return[this.smoke.points,this.fire.points]}setBudget(t){this.budget=t}update(t){this.fire.update(t),this.smoke.update(t)}muzzle(t,e,n,s,r,a){this.fire.spawn({life:.08,max:.08,x:t,y:e,z:n,vx:s*2,vy:r*2,vz:a*2,size:2.4,r:1,g:.85,b:.45,drag:2,grav:0});for(let o=0;o<5;o++)this.smoke.spawn({life:.7,max:.7,x:t+s*.4,y:e,z:n+a*.4,vx:s*2+(Math.random()-.5),vy:.6+Math.random(),vz:a*2+(Math.random()-.5),size:1.1,r:.65,g:.62,b:.55,drag:1.4,grav:.2})}blast(t,e,n){const s=Math.min(28,Math.floor(this.budget/18));for(let r=0;r<s;r++){const a=Math.random()*Math.PI*2,o=Math.random(),l=3+Math.random()*8;this.fire.spawn({life:.35+Math.random()*.3,max:.6,x:t,y:e,z:n,vx:Math.cos(a)*l*(1-o),vy:2+o*8,vz:Math.sin(a)*l*(1-o),size:1.6+Math.random()*2.2,r:1,g:.45+Math.random()*.3,b:.12,drag:1.2,grav:-4})}for(let r=0;r<s;r++){const a=Math.random()*Math.PI*2;this.smoke.spawn({life:1.4+Math.random()*.8,max:2,x:t,y:e+.4,z:n,vx:Math.cos(a)*(1+Math.random()*2),vy:1.5+Math.random()*2.5,vz:Math.sin(a)*(1+Math.random()*2),size:2.2+Math.random(),r:.25,g:.22,b:.2,drag:.6,grav:.4})}}dust(t,e,n){this.smoke.spawn({life:.55,max:.55,x:t,y:e,z:n,vx:(Math.random()-.5)*.8,vy:.4+Math.random()*.5,vz:(Math.random()-.5)*.8,size:.9,r:.62,g:.52,b:.36,drag:1.5,grav:.1})}splash(t,e,n){this.fire.spawn({life:.4,max:.4,x:t,y:e,z:n,vx:(Math.random()-.5)*2,vy:2+Math.random()*2,vz:(Math.random()-.5)*2,size:.7,r:.75,g:.85,b:.9,drag:1,grav:-6})}spark(t,e,n,s){for(let r=0;r<6;r++)this.fire.spawn({life:.25,max:.25,x:t,y:e,z:n,vx:(Math.random()-.5)*6,vy:Math.random()*4,vz:(Math.random()-.5)*6,size:.45,r:1,g:s?.75:.85,b:s?.3:.7,drag:1.5,grav:-8})}dirt(t,e,n){for(let s=0;s<8;s++)this.smoke.spawn({life:.5,max:.5,x:t,y:e,z:n,vx:(Math.random()-.5)*4,vy:1+Math.random()*3,vz:(Math.random()-.5)*4,size:.8,r:.45,g:.36,b:.24,drag:1.2,grav:-6})}}const Cl=new te;function Ni(i){const t=i.filter(c=>c.getAttribute("position")?.count),e=new Ce;if(!t.length)return e.setAttribute("position",new $t([0,0,0],3)),e;const n=t.map(c=>c.index?c.toNonIndexed():c);let s=0;for(const c of n)s+=c.getAttribute("position").count;const r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Float32Array(s*2);let l=0;for(const c of n){c.getAttribute("normal")||c.computeVertexNormals();const h=c.getAttribute("position"),f=c.getAttribute("normal"),d=c.getAttribute("uv");for(let p=0;p<h.count;p++)r[(l+p)*3]=h.getX(p),r[(l+p)*3+1]=h.getY(p),r[(l+p)*3+2]=h.getZ(p),a[(l+p)*3]=f.getX(p),a[(l+p)*3+1]=f.getY(p),a[(l+p)*3+2]=f.getZ(p),o[(l+p)*2]=d?d.getX(p):0,o[(l+p)*2+1]=d?d.getY(p):0;l+=h.count}return e.setAttribute("position",new $t(r,3)),e.setAttribute("normal",new $t(a,3)),e.setAttribute("uv",new $t(o,2)),e}function kn(i,t,e,n,s){return Cl.makeRotationY(t).setPosition(e,n,s),i.applyMatrix4(Cl),i}function Pl(i){const e=[],n=[];for(let o=0;o<i.length;o++){const l=i[o],c=[[l.xb,l.yb],[l.xm,l.ym],[l.xt,l.yt],[-l.xt,l.yt],[-l.xm,l.ym],[-l.xb,l.yb]];for(let h=0;h<6;h++)e.push(c[h][0],c[h][1],l.z),n.push(h/6,o/(i.length-1))}const s=[];for(let o=0;o<i.length-1;o++)for(let l=0;l<6;l++){const c=o*6+l,h=o*6+(l+1)%6,f=(o+1)*6+l,d=(o+1)*6+(l+1)%6;s.push(c,f,h,h,f,d)}const r=(o,l)=>{const c=o*6,h=e.length/3,f=i[o];e.push(0,(f.yb+f.yt)*.5,f.z),n.push(.5,o===0?0:1);for(let d=0;d<6;d++){const p=c+d,x=c+(d+1)%6;l?s.push(h,p,x):s.push(h,x,p)}};r(0,!0),r(i.length-1,!1);const a=new Ce;return a.setAttribute("position",new $t(e,3)),a.setAttribute("uv",new $t(n,2)),a.setIndex(s),a.computeVertexNormals(),a}const Bc=Math.sqrt(3),k0=.5*(Bc-1),ji=(3-Bc)/6,Ll=i=>Math.floor(i)|0,Dl=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Ci(i=Math.random){const t=G0(i),e=new Float64Array(t).map(s=>Dl[s%12*2]),n=new Float64Array(t).map(s=>Dl[s%12*2+1]);return function(r,a){let o=0,l=0,c=0;const h=(r+a)*k0,f=Ll(r+h),d=Ll(a+h),p=(f+d)*ji,x=f-p,S=d-p,m=r-x,u=a-S;let g,M;m>u?(g=1,M=0):(g=0,M=1);const v=m-g+ji,w=u-M+ji,T=m-1+2*ji,_=u-1+2*ji,E=f&255,R=d&255;let C=.5-m*m-u*u;if(C>=0){const O=E+t[R],L=e[O],H=n[O];C*=C,o=C*C*(L*m+H*u)}let D=.5-v*v-w*w;if(D>=0){const O=E+g+t[R+M],L=e[O],H=n[O];D*=D,l=D*D*(L*v+H*w)}let N=.5-T*T-_*_;if(N>=0){const O=E+1+t[R+1],L=e[O],H=n[O];N*=N,c=N*N*(L*T+H*_)}return 70*(o+l+c)}}function G0(i){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=e[n];e[n]=e[s],e[s]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const H0=-8,V0=56;function W0(i){const t=Dt((i-H0)/V0,0,1),e=Math.floor(t*65535);return[e>>8&255,e&255]}class X0{seg=St.segments;heights;road;field;mesh;minimap;shaderTime=null;constructor(t){const e=Ci(ln(679441)),n=this.seg+1,s=new Float32Array(n*n),r=new Float32Array(n*n),a=(g,M)=>{let v=0,w=1,T=1,_=0;for(let E=0;E<5;E++)v+=e(g*T,M*T)*w,_+=w,w*=.5,T*=2.07;return v/_};for(let g=0;g<n;g++)for(let M=0;M<n;M++){const v=-210+M/this.seg*St.size,w=-210+g/this.seg*St.size;let T=6.4+a(v*.0105,w*.0105)*7.4;T+=a(v*.027+30,w*.027)*1.7;const _=v-80,E=w-114;T+=Math.exp(-(_*_+E*E)/5e3)*15;const R=v+125,C=w-8;T+=Math.exp(-(R*R+C*C)/18050)*4.2;const D=v+10,N=w+46;T+=Math.exp(-(D*D)/2312-N*N/9248)*5.8;const O=Math.max(Math.abs(v),Math.abs(w));T+=er(St.borderStart,St.half,O)*24,s[g*n+M]=T}const o=new Float32Array(s.length);for(let g=0;g<n;g++)for(let M=0;M<n;M++){let v=0,w=0;for(let T=-1;T<=1;T++)for(let _=-1;_<=1;_++){const E=Dt(M+_,0,this.seg),R=Dt(g+T,0,this.seg);v+=s[R*n+E],w++}o[g*n+M]=v/w}s.set(o);for(let g=0;g<n;g++)for(let M=0;M<n;M++){const v=-210+M/this.seg*St.size,w=-210+g/this.seg*St.size,T=yn(v),_=v0(v),E=Math.abs(w-T),R=g*n+M;if(E<_+7){const C=Math.max(s[R],1.6),D=M0(v);if(E<=_){const N=E/_,O=N*N*(3-2*N);s[R]=Ve(D,C,O)}else{const N=(E-_)/7;s[R]=Ve(Math.max(C,1.8),s[R],N)}}}this.heights=s,this.road=r;for(const g of Nc())this.paintRoad(g,7.2);this.paintRoad([{x:40,z:70},{x:90,z:58},{x:Hn.x,z:Hn.z},{x:150,z:36}],5.5),this.rampBridge(),this.flatten(-176,22,void 0),this.flatten(St.baseZ,22,void 0),this.flattenDisk(0,-150,26,.85),this.flattenDisk(0,St.spawnZ,26,.85),this.flattenDisk(Hn.x,Hn.z,Hn.r,.45);for(const g of qn)this.flattenDisk(g,yn(g),9,.65);const l=new Uint8Array(n*n*4);for(let g=0;g<n;g++)for(let M=0;M<n;M++){const v=g*n+M,w=-210+M/this.seg*St.size,T=-210+g/this.seg*St.size,[_,E]=W0(s[v]),R=v*4;l[R]=Math.floor(Dt(r[v],0,1)*255),l[R+1]=_,l[R+2]=E,l[R+3]=Math.floor(Dt(fr(w,T),0,1)*255)}const c=new cr(l,n,n,dn);c.colorSpace=cn,c.wrapS=c.wrapT=xn,c.magFilter=Fe,c.minFilter=Fe,c.generateMipmaps=!1,c.flipY=!1,c.needsUpdate=!0,this.field=c;const h=new Ce,f=new Float32Array(n*n*3),d=new Float32Array(n*n*2);for(let g=0;g<n;g++)for(let M=0;M<n;M++){const v=g*n+M;f[v*3]=-210+M/this.seg*St.size,f[v*3+1]=s[v],f[v*3+2]=-210+g/this.seg*St.size,d[v*2]=M/this.seg,d[v*2+1]=g/this.seg}const p=new Uint32Array(this.seg*this.seg*6);let x=0;for(let g=0;g<this.seg;g++)for(let M=0;M<this.seg;M++){const v=g*n+M,w=v+1,T=v+n,_=T+1;p[x++]=v,p[x++]=T,p[x++]=w,p[x++]=w,p[x++]=T,p[x++]=_}h.setAttribute("position",new $t(f,3)),h.setAttribute("uv",new $t(d,2)),h.setIndex(Array.from(p)),h.computeVertexNormals();const S=h.getAttribute("normal");let m=0;for(let g=0;g<S.count;g++)m+=S.getY(g);if(m<0){for(let g=0;g<p.length;g+=3){const M=p[g];p[g]=p[g+1],p[g+1]=M}h.setIndex(Array.from(p)),h.computeVertexNormals()}h.computeBoundingSphere();const u=this.makeMaterial(t,c);this.mesh=new he(h,u),this.mesh.receiveShadow=!0,this.mesh.name="terrain",this.minimap=this.drawMinimap()}tick(t){this.shaderTime&&(this.shaderTime.value=t)}cell(t,e){const n=this.seg+1;return this.heights[Dt(e,0,this.seg)*n+Dt(t,0,this.seg)]}roadAt(t,e){const n=this.seg+1;return this.road[Dt(e,0,this.seg)*n+Dt(t,0,this.seg)]}setH(t,e,n){const s=this.seg+1;this.heights[Dt(e,0,this.seg)*s+Dt(t,0,this.seg)]=n}setRoad(t,e,n){const s=this.seg+1,r=Dt(e,0,this.seg)*s+Dt(t,0,this.seg);this.road[r]=Math.max(this.road[r],n)}worldOf(t,e){return[-210+t/this.seg*St.size,-210+e/this.seg*St.size]}nearest(t,e){const n=Dt(Math.round((t+St.half)/St.size*this.seg),0,this.seg),s=Dt(Math.round((e+St.half)/St.size*this.seg),0,this.seg);return[n,s]}groundAt(t,e){const n=(t+St.half)/St.size*this.seg,s=(e+St.half)/St.size*this.seg,r=Dt(Math.floor(n),0,this.seg-1),a=Dt(Math.floor(s),0,this.seg-1),o=Dt(n-r,0,1),l=Dt(s-a,0,1),c=this.cell(r,a),h=this.cell(r+1,a),f=this.cell(r,a+1),d=this.cell(r+1,a+1);return Ve(Ve(c,h,o),Ve(f,d,o),l)}sample(t,e){const n=this.groundAt(t,e),s=Ii(),r=Math.abs(t-s.x)<=s.halfX&&Math.abs(e-s.z)<=s.halfZ,a=r?Math.max(n,s.deckY):n,o=1.6,l=this.groundAt(t+o,e)-this.groundAt(t-o,e),c=this.groundAt(t,e+o)-this.groundAt(t,e-o),h=o*2,f=Math.hypot(l,h,c)||1,d=(t+St.half)/St.size*this.seg,p=(e+St.half)/St.size*this.seg,x=Dt(Math.floor(d),0,this.seg-1),S=Dt(Math.floor(p),0,this.seg-1),m=Math.max(this.roadAt(x,S),this.roadAt(x+1,S),this.roadAt(x,S+1)),u=Math.max(0,St.water-n);return{h:a,ground:n,nx:-l/f,ny:h/f,nz:-c/f,road:m,waterDepth:u,deep:!r&&u>1.02,onBridge:r}}paintRoad(t,e){const n=t.map(r=>{const[a,o]=this.nearest(r.x,r.z);return this.cell(a,o)});for(let r=0;r<3;r++){const a=n.slice();for(let o=1;o<n.length-1;o++)a[o]=n[o]*.5+n[o-1]*.25+n[o+1]*.25;for(let o=1;o<n.length-1;o++)n[o]=a[o]}const s=Ii();for(let r=0;r<t.length;r++){const a=t[r],o=Math.abs(a.z-s.z);if(Math.abs(a.x-s.x)<s.halfX+6&&o<s.halfZ+24){const l=Dt((o-s.halfZ)/18,0,1);n[r]=Ve(s.deckY,n[r],l*l)}}for(let r=0;r<t.length-1;r++){const a=t[r],o=t[r+1],l=o.x-a.x,c=o.z-a.z,h=l*l+c*c||1,f=Dt(Math.floor((Math.min(a.x,o.x)-e+St.half)/St.size*this.seg),0,this.seg),d=Dt(Math.ceil((Math.max(a.x,o.x)+e+St.half)/St.size*this.seg),0,this.seg),p=Dt(Math.floor((Math.min(a.z,o.z)-e+St.half)/St.size*this.seg),0,this.seg),x=Dt(Math.ceil((Math.max(a.z,o.z)+e+St.half)/St.size*this.seg),0,this.seg);for(let S=p;S<=x;S++)for(let m=f;m<=d;m++){const[u,g]=this.worldOf(m,S),M=Dt(((u-a.x)*l+(g-a.z)*c)/h,0,1),v=a.x+l*M,w=a.z+c*M,T=Math.hypot(u-v,g-w);if(T>e)continue;const _=Math.abs(u-s.x)<=s.halfX&&Math.abs(g-s.z)<=s.halfZ,E=1-er(e*.35,e,T);_||this.setH(m,S,Ve(this.cell(m,S),Ve(n[r],n[r+1],M),E*.9)),this.setRoad(m,S,E)}}}rampBridge(){const t=Ii(),e=16;for(let n=0;n<=this.seg;n++)for(let s=0;s<=this.seg;s++){const[r,a]=this.worldOf(s,n);if(Math.abs(r-t.x)>t.halfX+1)continue;const o=Math.abs(a-t.z);if(o<=t.halfZ||o>t.halfZ+e)continue;const c=1-(o-t.halfZ)/e;this.setH(s,n,Ve(this.cell(s,n),t.deckY,c*c*(3-2*c)))}}flatten(t,e,n){this.flattenDisk(0,t,e,1,n)}flattenDisk(t,e,n,s,r){const[a,o]=this.nearest(t,e),l=r??this.cell(a,o),c=Dt(Math.floor((t-n+St.half)/St.size*this.seg),0,this.seg),h=Dt(Math.ceil((t+n+St.half)/St.size*this.seg),0,this.seg),f=Dt(Math.floor((e-n+St.half)/St.size*this.seg),0,this.seg),d=Dt(Math.ceil((e+n+St.half)/St.size*this.seg),0,this.seg);for(let p=f;p<=d;p++)for(let x=c;x<=h;x++){const[S,m]=this.worldOf(x,p),u=Math.hypot(S-t,m-e)/n;if(u>=1)continue;const g=(1-er(.45,1,u))*s;this.setH(x,p,Ve(this.cell(x,p),l,g))}}drawMinimap(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");if(!e)return t;const n=e.createImageData(256,256);for(let s=0;s<256;s++)for(let r=0;r<256;r++){const a=-210+r/255*St.size,o=St.half-s/255*St.size,l=this.sample(a,o);let c=92,h=104,f=58;if(l.waterDepth>.35&&!l.onBridge)c=36,h=92,f=104;else if(l.onBridge||l.road>.55)c=150,h=132,f=96;else if(l.ny<.82)c=120,h=116,f=108;else if(fr(a,o)>.45)c=58,h=78,f=46;else{const p=Dt((l.ground-4)/16,0,1);c=110+p*30,h=118-p*10,f=64}const d=(s*256+r)*4;n.data[d]=c,n.data[d+1]=h,n.data[d+2]=f,n.data[d+3]=255}return e.putImageData(n,0,0),t}makeMaterial(t,e){const n=new Uint8Array([128,128,255,255]),s=new cr(n,1,1);s.colorSpace=cn,s.needsUpdate=!0;const r={value:0};this.shaderTime=r;const a=new Ue({roughness:.94,metalness:.02,normalMap:s,normalScale:new Wt(.75,.75)});return a.customProgramCacheKey=()=>"ashen-terrain-v1",a.onBeforeCompile=o=>{o.uniforms.uField={value:e},o.uniforms.uGrass={value:t.grass},o.uniforms.uDirt={value:t.dirt},o.uniforms.uRock={value:t.rock},o.uniforms.uSand={value:t.sand},o.uniforms.uGrassN={value:t.grassN},o.uniforms.uDirtN={value:t.dirtN},o.uniforms.uRockN={value:t.rockN},o.uniforms.uSandN={value:t.sandN},o.uniforms.uCloud={value:t.cloud},o.uniforms.uTime=r,o.uniforms.uWater={value:St.water},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTerrainWorld;
varying vec3 vTerrainNorm;
varying vec2 vTerrainUv;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vTerrainUv = uv;
vTerrainWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
vTerrainNorm = normalize(mat3(modelMatrix) * objectNormal);`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTerrainWorld;
varying vec3 vTerrainNorm;
varying vec2 vTerrainUv;
uniform sampler2D uField;
uniform sampler2D uGrass;
uniform sampler2D uDirt;
uniform sampler2D uRock;
uniform sampler2D uSand;
uniform sampler2D uGrassN;
uniform sampler2D uDirtN;
uniform sampler2D uRockN;
uniform sampler2D uSandN;
uniform sampler2D uCloud;
uniform float uTime;
uniform float uWater;
vec4 terrainW() {
  vec3 nrm = normalize(vTerrainNorm);
  float slope = 1.0 - clamp(nrm.y, 0.0, 1.0);
  float rock = smoothstep(0.22, 0.58, slope);
  float road = texture2D(uField, vTerrainUv).r;
  float above = vTerrainWorld.y - uWater;
  float sand = smoothstep(1.4, 0.05, above) * (1.0 - rock) * (1.0 - road);
  float dirt = clamp(road + sand * 0.3, 0.0, 1.0);
  return vec4(road, dirt, sand, rock);
}`).replace("#include <color_fragment>",`#include <color_fragment>
{
  vec4 w = terrainW();
  vec2 p = vTerrainWorld.xz;
  vec3 col = texture2D(uGrass, p * 0.105).rgb;
  col = mix(col, texture2D(uDirt, p * 0.12).rgb, clamp(w.y + smoothstep(0.55, 0.82, texture2D(uCloud, p * 0.02).r) * 0.2 * (1.0 - w.x), 0.0, 1.0));
  col = mix(col, texture2D(uSand, p * 0.14).rgb, w.z);
  col = mix(col, texture2D(uRock, p * 0.09).rgb, w.w);
  float forest = texture2D(uField, vTerrainUv).a;
  col *= mix(vec3(1.05, 1.02, 0.9), vec3(0.7, 0.84, 0.64), forest);
  col *= mix(vec3(1.0), vec3(0.9, 0.93, 0.98), smoothstep(10.0, 24.0, vTerrainWorld.y));
  float cloud = texture2D(uCloud, p * 0.0032 + vec2(uTime * 0.004, uTime * 0.001)).r;
  col *= mix(0.66, 1.0, smoothstep(0.32, 0.75, cloud));
  diffuseColor.rgb *= col;
}`).replace("vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;",`vec4 wN = terrainW();
vec2 pN = vTerrainWorld.xz;
vec3 mapN = texture2D(uGrassN, pN * 0.105).xyz * 2.0 - 1.0;
mapN = mix(mapN, texture2D(uDirtN, pN * 0.12).xyz * 2.0 - 1.0, clamp(wN.y, 0.0, 1.0));
mapN = mix(mapN, texture2D(uSandN, pN * 0.14).xyz * 2.0 - 1.0, wN.z);
mapN = mix(mapN, texture2D(uRockN, pN * 0.09).xyz * 2.0 - 1.0, wN.w);
mapN = normalize(mapN);`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
{
  vec4 wR = terrainW();
  roughnessFactor = mix(roughnessFactor, 0.78, wR.x);
  roughnessFactor = mix(roughnessFactor, 0.98, wR.w);
}`)},a}}function fr(i,t){let e=er(28,-90,i)*.95;const n=yn(i);return e=Math.max(e,Math.exp(-((i+150)**2+(t-n)**2)/9800)),e=Math.max(e,Math.exp(-((i+30)**2+(t-125)**2)/4608)*.75),Math.hypot(i-Hn.x,t-Hn.z)<Hn.r+6&&(e*=.15),Math.abs(i)<34&&Math.abs(t)>132&&(e*=.08),Math.hypot(i-48,t+60)<16&&(e*=.2),Dt(e,0,1)}const on=nr[2],fe=new ve;function wi(i,t,e=.04){return new Ue({map:i,roughness:t,metalness:e})}function kc(i,t,e,n,s,r,a,o,l,c,h){const[f,d]=Ic(r,o,t);i.push({x:e+f,y:n+a,z:s+d,hx:l/2,hy:c/2,hz:h/2,rot:t})}function Ai(i,t,e,n,s,r,a,o,l,c,h,f){const d=new tn(c,h,f);d.translate(a,o,l),kn(d,e,n,s,r),i.push(d),t&&kc(t,e,n,s,r,a,o,l,c,h,f)}function ts(i,t,e,n,s,r){const a=i.getContext("2d");if(!a)return;const o=(t+St.half)/St.size*256,l=(St.half-e)/St.size*256;a.fillStyle=r,a.fillRect(o-n,l-s,n*2,s*2)}function q0(i,t){const e=ln(12648430),n=new Xn;n.name="scenery";const s=[],r=[],a=[],o=[],l=[],c=[],h=[],f={value:0},d=(Q,ft,Mt,ct,Ct,Jt,ae)=>{const ee=i.sample(Q,ft).h,me=.32;if([{lx:0,lz:Ct/2-me/2,sx:ct,sz:me},{lx:0,lz:-Ct/2+me/2,sx:ct,sz:me},{lx:ct/2-me/2,lz:0,sx:me,sz:Ct-me},{lx:-ct/2+me/2,lz:0,sx:me,sz:Ct-me}].forEach((oe,He)=>{if(ae&&e()<.22&&He!==0)return;const Pe=Jt*(ae?.42+e()*.58:1),U=e()<.25?o:a;if(Ai(U,s,Mt,Q,ee,ft,oe.lx,Pe/2,oe.lz,oe.sx,Pe,oe.sz),e()<.7&&Pe>1.6){const se=new tn(.55,.7,.08);se.translate(oe.lx,1.35,oe.lz+Math.sign(oe.lz||1)*.05),kn(se,Mt,Q,ee,ft),h.push(se)}}),!ae||e()>.35){const oe=new as(Math.max(ct,Ct)*.48,1.15,4);oe.rotateY(Math.PI/4),oe.translate(0,Jt+.35,0),ae&&oe.scale(.75,.55,.75),kn(oe,Mt,Q,ee,ft),l.push(oe)}ts(i.minimap,Q,ft,3.2,2.4,"#6b5344")},p=[[104,40,.4,8,6,3.2,!0],[118,36,1.2,7,5.5,2.8,!0],[128,48,.2,9,6.5,3.4,!1],[112,58,2.4,6.5,5,2.6,!0],[136,62,.8,7.5,5,3,!0],[100,66,1.7,8,6,2.4,!0],[148,44,.6,6,5,2.8,!0],[90,46,2.8,7,4.5,2.5,!0]];for(const Q of p)d(Q[0],Q[1],Q[2],Q[3],Q[4],Q[5],Q[6]);{const Mt=i.sample(122,70).h;Ai(c,s,.2,122,Mt,70,0,2.2,0,4.2,4.4,4.2),Ai(c,s,.2,122,Mt,70,0,5.6,0,3.2,2.6,3.2),Ai(c,null,.2,122,Mt,70,.4,7.4,0,2.2,1.4,2.2),ts(i.minimap,122,70,3,3,"#8a8174")}{const Mt=i.sample(48,-62).h,ct=new je(2.1,2.2,8,10);ct.translate(0,4,0),kn(ct,0,48,Mt,-62),a.push(ct),s.push({x:48,y:Mt+4,z:-62,hx:2.2,hy:4,hz:2.2,rot:0});const Ct=new as(2.4,1.8,10);Ct.translate(0,8.6,0),kn(Ct,0,48,Mt,-62),l.push(Ct),ts(i.minimap,48,-62,2,2,"#b7aa96")}const x=[[96,30,0,16],[116,28,.15,14],[138,32,-.2,12],[-20,-40,.4,10],[70,yn(76)+14,.3,8]];for(const[Q,ft,Mt,ct]of x){const Ct=i.sample(Q,ft).h;Ai(c,s,Mt,Q,Ct,ft,0,.58,0,ct,1.16,.45),ts(i.minimap,Q,ft,ct*.12,1,"#9a9286")}const S=Ii(),m=.42,u=new tn(S.halfX*2,m,S.halfZ*2);u.translate(0,S.deckY-m/2,0),kn(u,0,S.x,0,S.z),c.push(u);for(const Q of[-1,1])Ai(c,s,0,S.x,0,S.z,Q*(S.halfX-.18),S.deckY+.42,0,.28,.84,S.halfZ*2);for(const Q of[-8,0,8]){const ft=new tn(1.1,2.4,1.4);ft.translate(0,-.4,Q),kn(ft,0,S.x,0,S.z),c.push(ft)}ts(i.minimap,S.x,S.z,2,6,"#d9c7a4");const g=(Q,ft)=>{if(!Q.length)return;const Mt=new he(Ni(Q),ft);Mt.castShadow=!0,Mt.receiveShadow=!0,n.add(Mt)};g(a,wi(t.plaster,.86)),g(o,wi(t.timber,.8)),g(l,wi(t.roof,.74)),g(c,wi(t.stone,.9)),g(h,new Ue({color:1710358,roughness:.7}));const M=new je(.18,.32,2.5,6);M.translate(0,1.25,0);const v=new hr(1.45,1);v.translate(0,3.15,0);const w=new as(1.35,3.4,7);w.translate(0,3.5,0);const T=new Ei(M,new Ue({color:5916212,roughness:.92}),on.trees),_=new Ue({color:7244348,roughness:.82}),E=new Ue({color:4086324,roughness:.8});Kr(_,f,.05),Kr(E,f,.04);const R=new Ei(v,_,on.trees),C=new Ei(w,E,on.trees);let D=0,N=0;const O=[],L=(Q,ft,Mt)=>{for(let ct=0;ct<O.length;ct++){const Ct=O[ct],Jt=Ct.x-Q,ae=Ct.z-ft;if(Jt*Jt+ae*ae<Mt*Mt)return!1}return!0};for(let Q=-190;Q<=190&&D+N<on.trees;Q+=7)for(let ft=-190;ft<=190&&D+N<on.trees;ft+=7){const Mt=ft+(e()-.5)*5,ct=Q+(e()-.5)*5;if(fr(Mt,ct)<.34)continue;const Ct=i.sample(Mt,ct);if(Ct.deep||Ct.waterDepth>.25||Ct.road>.35||Ct.ny<.8||Math.hypot(Mt,ct+St.spawnZ)<28||Math.hypot(Mt,ct-St.spawnZ)<28||!L(Mt,ct,6.2))continue;const Jt=e()<.28,ae=.75+e()*.7;fe.position.set(Mt,Ct.h,ct),fe.rotation.set(0,e()*6.28,0),fe.scale.setScalar(ae),fe.updateMatrix();const ee=D+N;T.setMatrixAt(ee,fe.matrix),Jt?(C.setMatrixAt(N,fe.matrix),N++):(R.setMatrixAt(D,fe.matrix),D++),O.push({x:Mt,z:ct}),r.push({x:Mt,z:ct,r:.42*ae,y0:Ct.h,y1:Ct.h+4.5*ae})}T.count=D+N,R.count=D,C.count=N;for(const Q of[T,R,C])Q.instanceMatrix.needsUpdate=!0,Q.castShadow=!1,Q.receiveShadow=!0,Q.computeBoundingSphere(),n.add(Q);const H=new hr(1,1),q=H.getAttribute("position");for(let Q=0;Q<q.count;Q++){const ft=.75+e()*.5;q.setXYZ(Q,q.getX(Q)*ft,q.getY(Q)*(.6+e()*.4),q.getZ(Q)*ft)}H.computeVertexNormals();const B=new Ei(H,wi(t.rock,.88,.08),on.rocks+24);let et=0;for(let Q=0;Q<900&&et<on.rocks;Q++){const ft=(e()-.5)*380,Mt=(e()-.5)*380,ct=i.sample(ft,Mt);if(ct.deep||ct.road>.4||ct.waterDepth>.3||ct.ny>.9&&e()>.15)continue;const Ct=ct.ny<.75?1.2+e()*2.2:.45+e()*1.1;fe.position.set(ft,ct.h+Ct*.25,Mt),fe.rotation.set(e(),e(),e()),fe.scale.set(Ct,Ct*.75,Ct),fe.updateMatrix(),B.setMatrixAt(et++,fe.matrix),Ct>1.1&&r.push({x:ft,z:Mt,r:Ct*.75,y0:ct.h,y1:ct.h+Ct})}B.count=et,B.instanceMatrix.needsUpdate=!0,B.castShadow=!0,B.receiveShadow=!0,B.computeBoundingSphere(),n.add(B);const W=new ci(.7,.95,1,3);W.translate(0,.48,0);const j=W.clone().rotateY(Math.PI/2),tt=Ni([W,j]),bt=new Ue({map:t.blade,alphaTest:.45,roughness:.95,side:Ze,color:13030538});Kr(bt,f,.12);const It=new Ei(tt,bt,on.grass);let Z=0;for(let Q=0;Q<9e3&&Z<on.grass;Q++){const ft=(e()-.5)*390,Mt=(e()-.5)*390;if(fr(ft,Mt)<.2&&e()>.18)continue;const Ct=i.sample(ft,Mt);Ct.deep||Ct.road>.45||Ct.waterDepth>.15||Ct.ny<.72||(fe.position.set(ft,Ct.h,Mt),fe.rotation.set(0,e()*6,0),fe.scale.setScalar(.7+e()*.8),fe.updateMatrix(),It.setMatrixAt(Z++,fe.matrix))}It.count=Z,It.instanceMatrix.needsUpdate=!0,It.receiveShadow=!1,It.castShadow=!1,It.computeBoundingSphere(),n.add(It);const mt=new ci(.35,1.4);mt.translate(0,.7,0);const yt=new Ue({color:9083480,roughness:.9,side:Ze}),Rt=new Ei(mt,yt,on.reeds);let gt=0;for(let Q=0;Q<4e3&&gt<on.reeds;Q++){const ft=(e()-.5)*360,Mt=yn(ft)+(e()-.5)*(Y0(ft)+4),ct=i.sample(ft,Mt);ct.waterDepth<.05||ct.waterDepth>.9||ct.onBridge||(fe.position.set(ft,ct.h,Mt),fe.rotation.set(0,e()*6,0),fe.scale.setScalar(.8+e()*.7),fe.updateMatrix(),Rt.setMatrixAt(gt++,fe.matrix))}Rt.count=gt,Rt.instanceMatrix.needsUpdate=!0,Rt.computeBoundingSphere(),n.add(Rt);const Ut=[];for(let Q=0;Q<14;Q++){const ft=-40-e()*120,Mt=(e()-.5)*160,ct=i.sample(ft,Mt);if(ct.deep||ct.road>.3)continue;const Ct=e()*3,Jt=new je(.28,.32,4.2,6);Jt.rotateZ(Math.PI/2),kn(Jt,Ct,ft,ct.h+.28,Mt),Ut.push(Jt),kc(s,Ct,ft,ct.h,Mt,0,.28,0,4.2,.56,.6)}if(Ut.length){const Q=new he(Ni(Ut),wi(t.timber,.84));Q.castShadow=!0,Q.receiveShadow=!0,n.add(Q)}Il(n,i,s,f,0,-176,new F(.85,.55,.22),t.emblemCinder),Il(n,i,s,f,0,St.baseZ,new F(.55,.62,.7),t.emblemSlate);const ue=[];return n.traverse(Q=>{const ft=Q;ft.material instanceof en&&ft.material.uniforms.uTime&&ue.push(ft.material)}),{group:n,solids:s,posts:r,trunks:T,broad:R,pines:C,grass:It,reeds:Rt,rocks:B,tick:Q=>{f.value=Q;for(const ft of ue)ft.uniforms.uTime.value=Q}}}function Y0(i){return 12+Math.exp(-((i+155)**2)/2e3)*16}function Kr(i,t,e){i.onBeforeCompile=n=>{n.uniforms.uTime=t,n.uniforms.uAmp={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uAmp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
#ifdef USE_INSTANCING
  float wx = instanceMatrix[3][0];
  float wz = instanceMatrix[3][2];
#else
  float wx = 0.0;
  float wz = 0.0;
#endif
float gust = sin(uTime * 1.35 + wx * 0.17 + wz * 0.11);
transformed.x += gust * uAmp * transformed.y;
transformed.z += cos(uTime * 1.1 + wz * 0.2) * uAmp * 0.6 * transformed.y;`)}}function Il(i,t,e,n,s,r,a,o){const l=t.sample(s,r).h,c=new he(new ho(St.baseR-.6,St.baseR,40),new Ue({color:new Vt(a.x,a.y,a.z),roughness:.5,metalness:.2,side:Ze}));c.rotation.x=-Math.PI/2,c.position.set(s,l+.25,r),c.receiveShadow=!0,i.add(c);const h=new he(new je(.08,.1,6,6),new Ue({color:2894116,metalness:.6,roughness:.4}));h.position.set(s,l+3,r),h.castShadow=!0,i.add(h),e.push({x:s,y:l+3,z:r,hx:.2,hy:3,hz:.2,rot:0});const f=new ci(1.8,1.05,10,4);f.translate(.9,0,0);const d=new en({side:Ze,uniforms:{uTime:n,uMap:{value:o},uColor:{value:a}},vertexShader:`
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec3 p = position;
        p.z += sin(position.x * 5.0 + uTime * 3.2) * 0.16 * position.x;
        p.y += sin(position.x * 3.0 + uTime * 2.0) * 0.05 * position.x;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      uniform sampler2D uMap;
      uniform vec3 uColor;
      varying vec2 vUv;
      void main() {
        vec4 e = texture2D(uMap, vec2(vUv.x * 0.8 + 0.05, vUv.y));
        vec3 col = mix(uColor, vec3(0.96, 0.93, 0.86), e.a);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `}),p=new he(f,d);p.position.set(s,l+5.2,r),i.add(p);const x=new he(new pr(.7,8,6),new Ue({color:9275260,roughness:.9}));x.scale.y=.45,x.position.set(s,l+.2,r),i.add(x)}const fo=new F(-.58,.46,-.34).normalize(),Z0=`
varying vec3 vDir;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vDir = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,$0=`
precision highp float;
varying vec3 vDir;
uniform vec3 uSun;
uniform float uTime;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.0;
  float w = 0.5;
  for (int i = 0; i < 4; i++) {
    a += noise(p) * w;
    p *= 2.05;
    w *= 0.5;
  }
  return a;
}

void main() {
  vec3 dir = normalize(vDir);
  float h = dir.y;
  vec3 zenith = vec3(0.20, 0.40, 0.72);
  vec3 mid = vec3(0.50, 0.66, 0.84);
  vec3 hor = vec3(0.93, 0.74, 0.55);
  vec3 below = vec3(0.45, 0.38, 0.30);
  vec3 col = mix(hor, mid, smoothstep(0.0, 0.22, h));
  col = mix(col, zenith, smoothstep(0.12, 0.72, h));
  col = mix(below, col, smoothstep(-0.18, 0.04, h));

  float sun = max(dot(dir, normalize(uSun)), 0.0);
  col += vec3(1.0, 0.92, 0.75) * pow(sun, 1800.0) * 1.6;
  col += vec3(1.0, 0.72, 0.42) * pow(sun, 12.0) * 0.55;
  col += vec3(1.0, 0.82, 0.6) * pow(sun, 3.0) * 0.18;

  vec2 cuv = dir.xz / max(0.15, dir.y + 0.35);
  float clouds = fbm(cuv * 1.6 + vec2(uTime * 0.008, 0.0));
  float mask = smoothstep(0.02, 0.2, h) * smoothstep(0.52, 0.72, clouds);
  vec3 cloudCol = mix(vec3(0.72, 0.58, 0.48), vec3(1.0, 0.97, 0.93), clouds);
  cloudCol *= 0.72 + 0.5 * pow(sun, 0.35);
  col = mix(col, cloudCol, mask);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function K0(){const i=new pr(900,28,16),t=new en({side:Ge,depthWrite:!1,uniforms:{uSun:{value:fo.clone()},uTime:{value:0}},vertexShader:Z0,fragmentShader:$0}),e=new he(i,t);return e.frustumCulled=!1,e.renderOrder=-1,e.name="sky",e}function J0(i,t){const e=i.material;e.uniforms.uTime.value=t}const os=new Vt(13812398),Nl=new Map,Ul=new te,Cn=new F,Jr=new F,es=new F;function Fl(i,t,e,n){const s=n;return[{z:i*.5,xb:t*.22,xm:t*.3,xt:t*.12,yb:s+.04,ym:s+e*.28,yt:s+e*.4},{z:i*.32,xb:t*.38,xm:t*.46,xt:t*.24,yb:s,ym:s+e*.48,yt:s+e*.75},{z:i*.08,xb:t*.42,xm:t*.5,xt:t*.4,yb:s,ym:s+e*.58,yt:s+e},{z:-i*.24,xb:t*.42,xm:t*.5,xt:t*.4,yb:s,ym:s+e*.55,yt:s+e*.94},{z:-i*.42,xb:t*.36,xm:t*.44,xt:t*.28,yb:s,ym:s+e*.4,yt:s+e*.68},{z:-i*.5,xb:t*.28,xm:t*.34,xt:t*.18,yb:s+.02,ym:s+e*.24,yt:s+e*.42}]}function Q0(i){const t=Pl(Fl(i.length,i.width,i.height,.34)),e=Pl(Fl(i.turretLen,i.turretWid,i.turretH,.02).map(S=>({...S,yb:Math.max(0,S.yb-.02)}))),n=new je(.16,.18,.16,8);n.translate(0,i.turretH+.08,-i.turretLen*.05);const s=new tn(i.turretWid*.55,i.turretH*.55,.28);s.translate(0,i.turretH*.48,i.turretLen*.42);const r=Ni([e,n,s]),a=new je(i.gunR,i.gunR*.92,i.gunLen,8);a.rotateX(Math.PI/2),a.translate(0,0,i.gunLen/2);const o=new je(i.gunR*1.7,i.gunR*1.7,i.gunR*3,8);o.rotateX(Math.PI/2),o.translate(0,0,i.gunLen);const l=Ni([a,o]),c=[],h=.3,f=i.length*.72;for(let S=0;S<i.wheels;S++){const m=-f/2+f/Math.max(1,i.wheels-1)*S;for(const u of[-1,1]){const g=new je(h,h,.22,8);g.rotateZ(Math.PI/2),g.translate(u*(i.width*.46),h,m),c.push(g)}}const d=S=>{for(const m of[-1,1]){const u=new je(h*1.15,h*1.15,.2,8);u.rotateZ(Math.PI/2),u.translate(m*(i.width*.46),h,S),c.push(u)}};d(i.length*.42),d(-i.length*.44);const p=Ni(c),x=new tn(.36,.52,i.length*.96);return{hull:t,turret:r,gun:l,gear:p,track:x,muzzleZ:i.gunLen+i.gunR*2}}function j0(i){let t=Nl.get(i.id);return t||(t=Q0(i),Nl.set(i.id,t)),t}class Qr{spec;team;name;player;id;hp;alive=!0;x=0;y=0;z=0;yaw=0;speed=0;yawVel=0;turretYaw=0;turretYawVel=0;gunPitch=0;reload=0;dispersion;detected=0;shots=0;hits=0;pens=0;kills=0;damageDealt=0;blocked=0;distance=0;aiFire=!1;group;turret;gun;muzzle;hullMesh;turretMesh;hullBox;turretBox;visualUp=new F(0,1,0);yVel=0;trackMat;dustAcc=0;splashAcc=0;constructor(t,e,n,s,r,a,o,l,c){this.id=t,this.spec=e,this.team=n,this.name=s,this.player=r,this.hp=e.hp,this.dispersion=e.baseDisp;const h=j0(e),f=new Ue({map:a,roughness:.62,metalness:.2});this.group=new Xn,this.group.name=s,this.hullMesh=new he(h.hull,f),this.hullMesh.castShadow=!0,this.hullMesh.receiveShadow=!0,this.group.add(this.hullMesh);const d=new he(h.gear,l);d.castShadow=!0,this.group.add(d);const p=o.clone();p.wrapS=p.wrapT=ai,p.repeat.set(1,5),p.needsUpdate=!0,this.trackMat=new Ue({map:p,roughness:.86,metalness:.35,color:9077108});for(const S of[-1,1]){const m=new he(h.track,this.trackMat);m.position.set(S*(e.width*.5+.02),.3,0),m.castShadow=!0,this.group.add(m)}this.turret=new Xn,this.turret.position.set(0,.34+e.height,e.turretZ),this.group.add(this.turret),this.turretMesh=new he(h.turret,f),this.turretMesh.castShadow=!0,this.turretMesh.receiveShadow=!0,this.turret.add(this.turretMesh),this.gun=new Xn,this.gun.position.set(0,e.turretH*.42,e.turretLen*.2),this.turret.add(this.gun);const x=new he(h.gun,c);x.castShadow=!0,this.gun.add(x),this.muzzle=new ve,this.muzzle.position.set(0,0,h.muzzleZ),this.gun.add(this.muzzle),h.hull.computeBoundingBox(),h.turret.computeBoundingBox(),this.hullBox=h.hull.boundingBox.clone(),this.turretBox=h.turret.boundingBox.clone()}spawn(t,e,n,s){this.x=t,this.z=e,this.yaw=n,this.turretYaw=n,this.speed=0,this.yawVel=0,this.y=s.sample(t,e).h,this.alive=!0,this.hp=this.spec.hp,this.reload=0,this.dispersion=this.spec.baseDisp,this.applyVisual(s.sample(t,e))}integrate(t,e,n){if(!this.alive)return;const s=this.spec,r=n.sample(this.x,this.z),[a,o]=ri(this.yaw),l=n.sample(this.x+a*2.2,this.z+o*2.2),c=n.sample(this.x-a*2.2,this.z-o*2.2),h=(l.h-c.h)/4.4,f=-9.8*h/Math.sqrt(1+h*h),d=Math.min(1,Math.abs(this.speed)/s.maxSpeed),p=Dt(t.throttle,-1,1);let x=0;if(Math.abs(p)>.04){const T=Math.sign(p),_=s.accel*(s.lowGear+(1-s.lowGear)*(1-d));x=T*_*(T<0?.72:1)}const S=p>.2&&this.speed<-.4||p<-.2&&this.speed>.4;let m=x+f-this.speed*s.drag;Math.abs(this.speed)>.25&&(m-=Math.sign(this.speed)*s.rollResist),S&&(m-=Math.sign(this.speed)*s.brake),r.waterDepth>.2&&(m-=this.speed*(1.2+r.waterDepth*2.4)),this.speed+=m*e,this.speed=Dt(this.speed,-s.reverse,s.maxSpeed),Math.abs(p)<.04&&Math.abs(this.speed)<.18&&Math.abs(f)<.35&&(this.speed=0);const u=s.neutralTurn+(s.turn-s.neutralTurn)*Math.min(1,Math.abs(this.speed)/s.maxSpeed),g=Dt(t.steer,-1,1)*u,M=s.yawAccel*e;this.yawVel+=Dt(g-this.yawVel,-M,M),this.yaw+=this.yawVel*e;const[v,w]=ri(this.yaw);this.x+=v*this.speed*e,this.z+=w*this.speed*e,this.distance+=Math.abs(this.speed)*e,this.trackMat.map.offset.y=this.distance*.22}collide(t,e,n){if(!this.alive)return;const s=tg();this.x=Dt(this.x,-s,s),this.z=Dt(this.z,-s,s);const r=t.sample(this.x,this.z);if(r.deep){let a=this.x,o=this.z,l=r.waterDepth;for(const[c,h]of[[3,0],[-3,0],[0,3],[0,-3]]){const f=t.sample(this.x+c,this.z+h);f.waterDepth<l&&(l=f.waterDepth,a=this.x+c,o=this.z+h)}this.x+=(a-this.x)*.65,this.z+=(o-this.z)*.65,this.speed*=.4}for(let a=0;a<2;a++){const o=this.bodyCircles();for(const l of o){for(const c of e){if(c.y+c.hy<.45||c.y-c.hy>1.8||Math.abs(l.x-c.x)>c.hx+c.hz+l.r+1||Math.abs(l.z-c.z)>c.hx+c.hz+l.r+1)continue;const h=eg(l.x,l.z,l.r,c);h&&(this.x+=h[0],this.z+=h[1],l.x+=h[0],l.z+=h[1])}for(const c of n){const h=l.x-c.x,f=l.z-c.z,d=Math.hypot(h,f),p=l.r+c.r;if(d<p&&d>1e-4){const x=(p-d)/d;this.x+=h*x,this.z+=f*x,l.x+=h*x,l.z+=f*x}}}}}stick(t,e){const n=t.sample(this.x,this.z),r=(n.h+.02-this.y)*this.spec.susp-this.yVel*this.spec.suspDamp;this.yVel=Dt(this.yVel+r*e,-4,4),this.y+=this.yVel*e,es.set(n.nx,n.ny,n.nz),es.lengthSq()<.2&&es.set(0,1,0),es.normalize();const a=this.spec.id==="bulwark"?4.5:this.spec.id==="lynx"?10:7;return this.visualUp.lerp(es,1-Math.exp(-a*e)).normalize(),n}applyVisual(t){const[e,n]=ri(this.yaw);Cn.set(e,0,n),Cn.addScaledVector(this.visualUp,-Cn.dot(this.visualUp)),Cn.lengthSq()<1e-4&&Cn.set(e,0,n),Cn.normalize(),Jr.crossVectors(this.visualUp,Cn).normalize(),Cn.crossVectors(Jr,this.visualUp).normalize(),Ul.makeBasis(Jr,this.visualUp,Cn),this.group.position.set(this.x,this.y,this.z),this.group.quaternion.setFromRotationMatrix(Ul),this.group.updateMatrixWorld(!0)}aim(t,e,n){if(!this.alive)return;const s=this.spec.turretTurn*n,r=Dt(Dc(this.turretYaw,t),-s,s);this.turretYawVel=n>0?r/n:0,this.turretYaw+=r;const a=Dt(e,-this.spec.dep,this.spec.elev),o=this.spec.gunSlew*n;this.gunPitch+=Dt(a-this.gunPitch,-o,o),this.turret.rotation.y=this.turretYaw-this.yaw,this.gun.rotation.x=-this.gunPitch}settle(t){const e=this.spec,n=Math.min(1,Math.abs(this.speed)/e.maxSpeed),s=Math.min(1,Math.abs(this.yawVel)/Math.max(.15,e.turn)),r=Math.min(1,Math.abs(this.turretYawVel)/Math.max(.12,e.turretTurn)),a=e.baseDisp+e.moveDisp*n+e.hullDisp*s+e.turretDisp*r;a>this.dispersion?this.dispersion=a:this.dispersion=Lc(this.dispersion,a,e.aimRate,t),this.reload>0&&(this.reload=Math.max(0,this.reload-t))}fired(){this.reload=this.spec.reload,this.dispersion+=this.spec.fireDisp,this.shots++}kill(){this.alive&&(this.alive=!1,this.speed=0,this.hp=0,this.group.traverse(t=>{const e=t;if(!e.isMesh)return;const n=e.material;if(n instanceof Ue){const s=n.clone();s.color.multiplyScalar(.32),s.emissive.setHex(2756620),s.emissiveIntensity=.4,e.material=s}}))}bodyCircles(){const[t,e]=ri(this.yaw),n=this.spec.length*.22,s=this.spec.width*.4;return[{x:this.x+t*n,z:this.z+e*n,r:s},{x:this.x-t*n,z:this.z-e*n,r:s}]}exhaust(t,e,n,s){if(this.alive){if(Math.abs(this.speed)>2&&(this.dustAcc+=t*Math.abs(this.speed),this.dustAcc>.18)){this.dustAcc=0;const[r,a]=ri(this.yaw);n(this.x-r*this.spec.length*.4,this.y+.3,this.z-a*this.spec.length*.4)}e.waterDepth>.12&&Math.abs(this.speed)>1.5&&(this.splashAcc+=t,this.splashAcc>.12&&(this.splashAcc=0,s(this.x,e.ground+.1,this.z)))}}}function tg(){return 196}function eg(i,t,e,n){const[s,r]=dr(i-n.x,t-n.z,n.rot),a=Dt(s,-n.hx,n.hx),o=Dt(r,-n.hz,n.hz);let l=s-a,c=r-o,h=Math.hypot(l,c);if(h>=e)return null;if(h<1e-4){const m=n.hx-Math.abs(s),u=n.hz-Math.abs(r);m<u?(l=Math.sign(s||1),c=0):(c=Math.sign(r||1),l=0),h=0}const f=l/(h||1),d=c/(h||1),[p,x]=Ic(f,d,n.rot),S=e-h;return[p*S,x*S]}function ng(i){for(let t=0;t<i.length;t++){const e=i[t];for(let n=t+1;n<i.length;n++){const s=i[n],r=s.x-e.x,a=s.z-e.z,o=Math.hypot(r,a),l=e.spec.width*.55+s.spec.width*.55;if(o>=l||o<1e-4)continue;const c=(l-o)/o,h=s.spec.mass/(e.spec.mass+s.spec.mass),f=e.spec.mass/(e.spec.mass+s.spec.mass);e.alive&&(e.x-=r*c*h,e.z-=a*c*h),s.alive&&(s.x+=r*c*f,s.z+=a*c*f)}}}function ig(){return{gear:new Ue({color:1711130,roughness:.55,metalness:.7}),gun:new Ue({color:2764330,roughness:.4,metalness:.78})}}function Ya(i,t,e=!1){const n=new ru(i);return n.colorSpace=t?ke:cn,n.wrapS=n.wrapT=e?ai:n.wrapS,e&&(n.wrapS=ai,n.wrapT=ai),n.needsUpdate=!0,n}function Ys(i,t,e){let n=0,s=1,r=1,a=0;for(let o=0;o<4;o++)n+=i(t*r,e*r)*s,a+=s,s*=.5,r*=2;return n/a}function Za(i,t,e,n){const s=Ys(i,t,e),r=Ys(i,t-n,e),a=Ys(i,t,e-n),o=Ys(i,t-n,e-n),l=t/n,c=e/n,h=l*l*(3-2*l),f=c*c*(3-2*c);return Ve(Ve(s,r,h),Ve(a,o,h),f)}async function Gc(){await new Promise(i=>setTimeout(i,0))}async function Zs(i,t,e,n){const s=new Float32Array(e*e),r=new Uint8ClampedArray(e*e*4),a={grass:[86,98,52],dirt:[124,96,62],rock:[128,124,116],sand:[196,176,132]}[i];for(let x=0;x<e;x++){for(let S=0;S<e;S++){const m=Za(t,S,x,e);s[x*e+S]=m;const u=Za(t,S*.35+20,x*.35,e);let g=a[0],M=a[1],v=a[2];if(i==="grass")g+=m*28+u*10,M+=m*24+8,v+=m*12,u>.45&&(g+=24,M+=16,v-=6);else if(i==="dirt")g+=m*22,M+=m*16,v+=m*10,u>.55&&(g-=20,M-=16,v-=12);else if(i==="rock"){const T=Math.abs(m)>.62?-30:0;g+=m*18+T,M+=m*16+T,v+=m*14+T*.6}else g+=m*16+u*8,M+=m*14+u*6,v+=m*10;const w=(x*e+S)*4;r[w]=Dt(g,0,255),r[w+1]=Dt(M,0,255),r[w+2]=Dt(v,0,255),r[w+3]=255}x%24===0&&(n(x/e),await Gc())}const o=document.createElement("canvas");o.width=e,o.height=e;const l=o.getContext("2d");if(!l)throw new Error("2d context unavailable");l.putImageData(new ImageData(r,e,e),0,0);const c=new Uint8ClampedArray(e*e*4),h=(x,S)=>s[(S+e)%e*e+(x+e)%e],f=i==="rock"?2.4:i==="sand"?.8:1.5;for(let x=0;x<e;x++)for(let S=0;S<e;S++){const m=h(S+1,x)-h(S-1,x),u=h(S,x+1)-h(S,x-1);let g=-m*f,M=-u*f,v=1;const w=Math.hypot(g,M,v)||1;g/=w,M/=w,v/=w;const T=(x*e+S)*4;c[T]=(g*.5+.5)*255,c[T+1]=(M*.5+.5)*255,c[T+2]=(v*.5+.5)*255,c[T+3]=255}const d=document.createElement("canvas");d.width=e,d.height=e;const p=d.getContext("2d");if(!p)throw new Error("2d context unavailable");return p.putImageData(new ImageData(c,e,e),0,0),{color:Ya(o,!0,!0),normal:Ya(d,!1,!0)}}function gn(i,t,e,n=!0){const s=document.createElement("canvas");s.width=s.height=i;const r=s.getContext("2d");if(!r)throw new Error("2d context unavailable");return t(r,i),Ya(s,e,n)}async function sg(i){const t=Ci(ln(334462)),e=512;i(.05,"Weaving the grass");const n=await Zs("grass",t,e,u=>i(.05+u*.2,"Weaving the grass"));i(.28,"Turning the soil");const s=await Zs("dirt",Ci(ln(6595)),e,u=>i(.28+u*.16,"Turning the soil"));i(.46,"Cutting the rock");const r=await Zs("rock",Ci(ln(30635)),e,u=>i(.46+u*.16,"Cutting the rock"));i(.64,"Sifting the banks");const a=await Zs("sand",Ci(ln(17105)),384,u=>i(.64+u*.12,"Sifting the banks")),o=gn(256,(u,g)=>{const M=u.createImageData(g,g),v=Ci(ln(99));for(let w=0;w<g;w++)for(let T=0;T<g;T++){const _=Za(v,T*1.4,w*1.4,g*1.4),E=Math.floor(Dt(_*.5+.5,0,1)*255),R=(w*g+T)*4;M.data[R]=M.data[R+1]=M.data[R+2]=E,M.data[R+3]=255}u.putImageData(M,0,0)},!1,!0),l=gn(256,(u,g)=>{u.fillStyle="#d9d0bd",u.fillRect(0,0,g,g);const M=ln(3);for(let v=0;v<40;v++)u.fillStyle=`rgba(90, 70, 50, ${.04+M()*.08})`,u.beginPath(),u.ellipse(M()*g,M()*g,10+M()*40,8+M()*24,M()*3,0,Math.PI*2),u.fill();u.strokeStyle="rgba(60,40,30,0.25)",u.lineWidth=1;for(let v=0;v<8;v++)u.beginPath(),u.moveTo(M()*g,M()*g),u.lineTo(M()*g,M()*g),u.stroke()},!0),c=gn(256,(u,g)=>{for(let M=0;M<g;M+=32){const v=90+M/32%2*18;u.fillStyle=`rgb(${v+30}, ${v*.7}, ${v*.45})`,u.fillRect(0,M,g,30),u.strokeStyle="rgba(40,24,12,0.45)",u.strokeRect(0,M,g,30),u.globalAlpha=.2,u.beginPath();for(let w=0;w<4;w++)u.moveTo(0,M+6+w*6),u.lineTo(g,M+8+w*6);u.stroke(),u.globalAlpha=1}},!0),h=gn(256,(u,g)=>{u.fillStyle="#6e3d32",u.fillRect(0,0,g,g);for(let M=0;M<g;M+=18){u.fillStyle=M%36===0?"#7d4a3c":"#5e342c";for(let v=-20;v<g;v+=22){const w=M/18%2===0?0:11;u.beginPath(),u.moveTo(v+w,M+16),u.lineTo(v+w+11,M+2),u.lineTo(v+w+22,M+16),u.closePath(),u.fill()}}},!0),f=gn(256,(u,g)=>{u.fillStyle="#8d877c",u.fillRect(0,0,g,g);const M=ln(11);for(let v=0;v<g;v+=28){const w=v/28%2===0?0:24;for(let T=-40;T<g;T+=48){const _=(M()-.5)*8;u.fillStyle=`rgb(${120+_}, ${116+_}, ${108+_})`,u.fillRect(T+w+2,v+2,44,24),u.strokeStyle="rgba(50,46,40,0.55)",u.strokeRect(T+w+2,v+2,44,24)}}},!0),d=gn(128,(u,g)=>{u.fillStyle="#1c1b18",u.fillRect(0,0,64,g);for(let M=0;M<g;M+=8)u.fillStyle=M%16===0?"#3a342c":"#2a261f",u.fillRect(4,M,56,5),u.fillStyle="#111",u.fillRect(0,M+6,64,2)},!0);d.repeat.set(1,6);const p=(u,g)=>gn(256,(M,v)=>{M.fillStyle=u[0],M.fillRect(0,0,v,v);const w=ln(g);for(let T=0;T<18;T++)M.fillStyle=u[1+T%(u.length-1)],M.globalAlpha=.55+w()*.4,M.beginPath(),M.ellipse(w()*v,w()*v,28+w()*50,18+w()*36,w()*6,0,Math.PI*2),M.fill();M.globalAlpha=1},!0,!0),x=gn(128,(u,g)=>{u.clearRect(0,0,g,g);const M=ln(21);for(let v=0;v<7;v++){const w=16+M()*(g-32);u.fillStyle=v%2===0?"#6f8a3e":"#8aa45a",u.beginPath(),u.moveTo(w,g),u.quadraticCurveTo(w+(M()-.5)*16,g*.45,w+(M()-.5)*10,8),u.quadraticCurveTo(w+4,g*.5,w+5,g),u.fill()}},!0,!1),S=u=>gn(128,(g,M)=>{g.clearRect(0,0,M,M),g.translate(M/2,M/2),u==="cinder"?(g.fillStyle="#e0a84a",g.beginPath(),g.moveTo(0,-36),g.lineTo(28,30),g.lineTo(0,14),g.lineTo(-28,30),g.closePath(),g.fill()):(g.fillStyle="#d5dbe3",g.rotate(Math.PI/4),g.fillRect(-22,-22,44,44))},!0,!1),m=gn(64,(u,g)=>{const M=u.createRadialGradient(g/2,g/2,2,g/2,g/2,g/2);M.addColorStop(0,"rgba(255,255,255,1)"),M.addColorStop(.4,"rgba(255,255,255,0.65)"),M.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=M,u.fillRect(0,0,g,g)},!1,!1);return i(.82,"Painting the company"),await Gc(),{grass:n.color,grassN:n.normal,dirt:s.color,dirtN:s.normal,rock:r.color,rockN:r.normal,sand:a.color,sandN:a.normal,cloud:o,plaster:l,timber:c,roof:h,stone:f,track:d,camoCinder:p(["#5e6240","#3e442c","#7a7048","#2f3324"],4),camoSlate:p(["#4e5964","#2c343c","#6a6458","#1e252b"],8),blade:x,emblemCinder:S("cinder"),emblemSlate:S("slate"),sprite:m,anisotropy:8}}class rg{selected="vanguard";onDeploy=()=>{};onAgain=()=>{};onGarage=()=>{};onResume=()=>{};onQuit=()=>{};onQuality=()=>{};onVolume=()=>{};onMap=()=>{};qualityButtons=[];allyNodes=[];enemyNodes=[];floaterNodes=[];hitTimer=0;constructor(){const t=document.querySelector("#tank-list");if(!t)return;for(const a of m0){const o=ir[a],l=document.createElement("button");l.type="button",l.className="tank-card"+(a===this.selected?" selected":""),l.dataset.tank=a;const c=Math.round(o.maxSpeed/16.8*100),h=Math.round(o.armorHull[0]/200*100),f=Math.round(o.damage/o.reload/50*100);l.innerHTML=`<span class="role">${o.role}</span><strong>${o.name}</strong><p>${o.blurb}</p>
        ${jr("Pace",c)}${jr("Plate",h)}${jr("Bite",f)}`,l.addEventListener("click",()=>{this.selected=a,t.querySelectorAll(".tank-card").forEach(d=>d.classList.toggle("selected",d.dataset.tank===a))}),t.append(l)}const e=document.querySelector("#quality");for(const[a,o]of["Performance","Balanced","High"].entries()){const l=document.createElement("button");l.type="button",l.textContent=o,l.addEventListener("click",()=>this.onQuality(a)),e?.append(l),this.qualityButtons.push(l)}document.querySelector("#battle")?.addEventListener("click",()=>this.onDeploy(this.selected)),document.querySelector("#again")?.addEventListener("click",()=>this.onAgain()),document.querySelector("#garage")?.addEventListener("click",()=>this.onGarage()),document.querySelector("#resume")?.addEventListener("click",()=>this.onResume()),document.querySelector("#quit")?.addEventListener("click",()=>this.onQuit()),document.querySelector("#minimap-wrap")?.addEventListener("click",()=>this.onMap());const n=document.querySelector("#volume"),s=localStorage.getItem("ashen-volume");n&&s&&(n.value=s),n?.addEventListener("input",()=>{localStorage.setItem("ashen-volume",n.value),this.onVolume(Number(n.value))});const r=document.querySelector("#floaters");for(let a=0;a<24;a++){const o=document.createElement("div");o.className="floater",o.hidden=!0,r?.append(o),this.floaterNodes.push(o)}}volume(){const t=document.querySelector("#volume");return t?Number(t.value):.75}setQuality(t){this.qualityButtons.forEach((e,n)=>e.classList.toggle("on",n===t))}progress(t,e){const n=document.querySelector("#load-fill"),s=document.querySelector("#load-label");n&&(n.style.width=`${Math.round(t*100)}%`),s&&(s.textContent=e)}showMenu(){Je("#loading",!1),Je("#menu",!0),Je("#hud",!1),Je("#end",!1),Je("#pause",!1)}showBattle(){Je("#menu",!1),Je("#loading",!1),Je("#end",!1),Je("#pause",!1),Je("#hud",!0)}showPause(t){Je("#pause",t)}showEnd(t){Je("#end",!0);const e=document.querySelector("#end-title"),n=document.querySelector("#end-sub"),s=document.querySelector("#end-stats");e&&(e.textContent=t.title),n&&(n.textContent=t.subtitle),s&&(s.innerHTML=t.rows.map(([r,a])=>`<dt>${r}</dt><dd>${a}</dd>`).join(""))}ensureRosters(t,e){this.allyNodes=Ol(document.querySelector("#allies"),t,this.allyNodes),this.enemyNodes=Ol(document.querySelector("#enemies"),e,this.enemyNodes)}update(t){Pn("#clock",t.time),Pn("#ally-count",String(t.allies)),Pn("#enemy-count",String(t.enemies));const e=document.querySelector("#hud");e?.classList.toggle("sniper",t.sniper),e?.classList.toggle("ready",t.ready);const n=document.querySelector("#spotted");n&&(n.hidden=!t.spotted);const s=document.querySelector("#banner");s&&(s.hidden=!t.banner,s.textContent=t.banner);const r=document.querySelector("#cap");r&&(r.hidden=!t.cap,r.classList.toggle("bad",t.capBad)),Pn("#cap-label",t.cap);const a=document.querySelector("#cap-fill");a&&(a.style.width=`${Math.round(t.capP*100)}%`),Pn("#tank-name",t.tankName),Pn("#tank-role",t.role),Pn("#speed",`${Math.round(Math.abs(t.speed)*3.6)} km/h`),Pn("#hp-num",String(Math.max(0,Math.round(t.hp))));const o=document.querySelector("#hp"),l=t.maxHp>0?t.hp/t.maxHp:0;o?.classList.toggle("low",l<.3),o?.classList.toggle("mid",l>=.3&&l<.6);const c=document.querySelector("#hp-fill");c&&(c.style.width=`${Math.max(0,l)*100}%`);const h=t.reloadTime>0?1-t.reload/t.reloadTime:1,f=document.querySelector("#reload-fill");f&&(f.style.width=`${Math.max(0,Math.min(1,h))*100}%`);const d=document.querySelector("#aim-circle");if(d){const m=Math.max(12,t.aimPx*2);d.style.width=`${m}px`,d.style.height=`${m}px`}const p=document.querySelector("#gun-mark");if(p&&(p.hidden=!t.gunVisible,p.style.left=`${t.gunX}px`,p.style.top=`${t.gunY}px`),t.hit){const m=document.querySelector("#hit-mark");m?.classList.remove("show","bounce"),m?.offsetWidth,m?.classList.add("show"),t.hit==="bounce"&&m?.classList.add("bounce")}const x=document.querySelector("#hurt-ring");x&&(x.style.opacity=String(t.hurt),x.style.transform=`translate(-50%, -50%) rotate(${t.hurtAngle}rad)`,x.style.borderTopColor=`rgba(227, 109, 92, ${t.hurt})`),Pn("#fps",`${t.fps} fps`),zl(this.allyNodes,t.alliesRows),zl(this.enemyNodes,t.enemyRows);const S=document.querySelector("#feed");S&&(S.innerHTML=t.feed.map(m=>`<p class="${m.kind}">${m.text}</p>`).join(""));for(let m=0;m<this.floaterNodes.length;m++){const u=this.floaterNodes[m],g=t.floaters[m];if(!g){u.hidden=!0;continue}u.hidden=!1,u.className=`floater ${g.kind}`,u.style.left=`${g.x}px`,u.style.top=`${g.y}px`,u.textContent=g.text,u.style.opacity=String(Math.max(0,Math.min(1,g.life)))}this.hitTimer}drawMap(t,e,n,s,r){const a=document.querySelector("#minimap"),o=a?.getContext("2d");if(!a||!o)return;o.clearRect(0,0,256,256),o.drawImage(t,0,0,256,256);const l=h=>(h+210)/420*256,c=h=>(210-h)/420*256;kl(o,l(0),c(176),16,r.north,"#e0a84a"),kl(o,l(0),c(-176),16,r.south,"#7f93ad");for(const h of s)Bl(o,l(h.x),c(h.z),h.dead?"#5a403c":"#e36d5c");for(const h of n)Bl(o,l(h.x),c(h.z),h.dead?"#44523a":"#9dce7c");e&&(o.save(),o.translate(l(e.x),c(e.z)),o.rotate(-e.yaw),o.fillStyle="#f4efe2",o.beginPath(),o.moveTo(0,-7),o.lineTo(5,6),o.lineTo(-5,6),o.closePath(),o.fill(),o.restore())}}function jr(i,t){return`<div class="stat"><span>${i}</span><i><span style="width:${Math.max(6,Math.min(100,t))}%"></span></i></div>`}function Je(i,t){const e=document.querySelector(i);e&&(e.hidden=!t)}function Pn(i,t){const e=document.querySelector(i);e&&e.textContent!==t&&(e.textContent=t)}function Ol(i,t,e){if(!i)return e;i.innerHTML="";const n=[];for(let s=0;s<t;s++){const r=document.createElement("div");r.className="row-tank",r.innerHTML='<span class="tag"></span><div><b></b><div class="mini"><span></span></div></div><em></em>',i.append(r),n.push(r)}return n}function zl(i,t){for(let e=0;e<i.length;e++){const n=i[e],s=t[e];if(!s)continue;n.classList.toggle("dead",s.dead),n.classList.toggle("self",s.self);const r=n.querySelector(".tag"),a=n.querySelector("b"),o=n.querySelector(".mini span"),l=n.querySelector("em");r&&(r.textContent=s.role.slice(0,1)),a&&(a.textContent=s.name),l&&(l.textContent=s.dead?"—":String(Math.max(0,Math.round(s.hp)))),o&&(o.style.width=`${s.max>0?Math.max(0,s.hp/s.max)*100:0}%`)}}function Bl(i,t,e,n){i.fillStyle=n,i.beginPath(),i.arc(t,e,3.2,0,Math.PI*2),i.fill()}function kl(i,t,e,n,s,r){i.strokeStyle=r,i.lineWidth=2,i.beginPath(),i.arc(t,e,n,0,Math.PI*2),i.stroke(),s>0&&(i.beginPath(),i.arc(t,e,n-3,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,s)),i.stroke())}const ag=`
varying vec3 vWorld;
varying vec2 vUv;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,og=`
precision highp float;
varying vec3 vWorld;
varying vec2 vUv;
uniform sampler2D uField;
uniform vec3 uSun;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uTime;

float groundHeight(vec2 uv) {
  vec4 texel = texture2D(uField, uv);
  float u = texel.g * (65280.0 / 65535.0) + texel.b * (255.0 / 65535.0);
  return u * 56.0 - 8.0;
}

void main() {
  float h = groundHeight(vUv);
  float depth = -h;
  if (depth < 0.04) discard;

  float t = uTime;
  float w1 = sin(vWorld.x * 0.42 + t * 1.25);
  float w2 = sin(vWorld.z * 0.55 - t * 1.05 + vWorld.x * 0.18);
  float w3 = sin((vWorld.x + vWorld.z) * 0.85 + t * 1.7);
  vec3 nrm = normalize(vec3(w1 * 0.035 + w3 * 0.02, 1.0, w2 * 0.03 + w3 * 0.018));
  vec3 view = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(view, nrm), 0.0), 3.0);
  vec3 deep = vec3(0.025, 0.11, 0.13);
  vec3 shallow = vec3(0.30, 0.48, 0.40);
  float dk = smoothstep(0.08, 2.4, depth);
  vec3 waterCol = mix(shallow, deep, dk);
  vec3 refl = mix(vec3(0.78, 0.64, 0.50), vec3(0.42, 0.58, 0.74), clamp(nrm.y * 0.5 + 0.2, 0.0, 1.0));
  float spec = pow(max(dot(reflect(-normalize(uSun), nrm), view), 0.0), 80.0);
  vec3 col = mix(waterCol, refl, fres * 0.58 + 0.04);
  col += vec3(1.0, 0.9, 0.7) * spec * 0.75;
  float shore = smoothstep(0.7, 0.0, depth);
  float foam = sin(vWorld.x * 1.6 + t * 2.1) * sin(vWorld.z * 1.4 - t * 1.5);
  col = mix(col, vec3(0.86, 0.9, 0.84), shore * smoothstep(0.15, 0.85, foam) * 0.85);
  float alpha = max(mix(0.34, 0.88, dk), fres * 0.4);
  float dist = length(cameraPosition - vWorld);
  float fog = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
  col = mix(col, uFogColor, clamp(fog, 0.0, 1.0));
  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function lg(i){const t=new Ce,e=St.half,n=.02,s=new Float32Array([-e,n,-e,e,n,-e,-e,n,e,e,n,e]),r=new Float32Array([0,0,1,0,0,1,1,1]);t.setAttribute("position",new $t(s,3)),t.setAttribute("uv",new $t(r,2)),t.setIndex([0,2,1,1,2,3]),t.computeVertexNormals();const a=new en({transparent:!0,depthWrite:!1,uniforms:{uField:{value:i},uSun:{value:fo.clone()},uFogColor:{value:new F(os.r,os.g,os.b)},uFogDensity:{value:.00315},uTime:{value:0}},vertexShader:ag,fragmentShader:og}),o=new he(t,a);return o.renderOrder=2,o.name="water",o}function cg(i,t){i.material.uniforms.uTime.value=t}const ta=1/60,ea=new F,Ye=new F,hg=new F,ns=new F,Gl=new F;class ug{phase="boot";capTime=48;canvas;ui=new rg;audio=new F0;input;scene=new Yh;camera=new Qe(58,1,.15,1400);renderer;terrain;scenery;skyMesh;waterMesh;particles;combat;ai=new P0;tex;sun;boom=new nl(16742195,0,26,2);flash=new nl(16769194,0,12,2);tanks=[];player=null;profile=nr[p0()];lockQuality;counts={trees:1,broad:1,pines:1,grass:1,reeds:1,rocks:1};camYaw=0;camPitch=-.32;camDist=15;sniper=0;look=new F;timeLeft=420;countdown=0;capNorth=0;capSouth=0;elapsed=0;acc=0;last=0;fps=60;fpsFrames=0;fpsAccum=0;lowTimer=0;shake=0;hurt=0;hurtAngle=0;hit="";feed=[];floaters=[];result=null;pausedFrom="battle";mapBig=!1;constructor(){const t=document.querySelector("#view");if(!(t instanceof HTMLCanvasElement))throw new Error("Missing view canvas");this.canvas=t;const e=document.querySelector("#input-layer"),n=document.querySelector("#stick"),s=document.querySelector("#knob");if(!(e instanceof HTMLElement)||!(n instanceof HTMLElement)||!(s instanceof HTMLElement))throw new Error("Missing touch controls");this.input=new O0(e,n,s),this.lockQuality=new URLSearchParams(location.search).has("quality"),this.ui.onDeploy=r=>{this.audio.unlock(),this.start(r)},this.ui.onAgain=()=>{this.audio.unlock(),this.player&&this.start(this.player.spec.id)},this.ui.onGarage=()=>this.garage(),this.ui.onResume=()=>this.resume(),this.ui.onQuit=()=>this.garage(),this.ui.onQuality=r=>this.applyQuality(r),this.ui.onVolume=r=>this.audio.setVolume(r),this.ui.onMap=()=>{this.mapBig=!this.mapBig,document.querySelector("#minimap-wrap")?.classList.toggle("big",this.mapBig)},this.audio.setVolume(this.ui.volume()),document.addEventListener("visibilitychange",()=>{document.hidden?this.audio.suspend():this.audio.resume()})}async boot(){this.renderer=new f0({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.renderer.outputColorSpace=ke,this.renderer.toneMapping=Ka,this.renderer.toneMappingExposure=1.06,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=rs,this.renderer.setClearColor(os,1),this.ui.progress(.02,"Opening the valley"),this.tex=await sg((n,s)=>this.ui.progress(.02+n*.7,s));const t=this.renderer.capabilities.getMaxAnisotropy();for(const n of Object.values(this.tex))n&&typeof n=="object"&&"anisotropy"in n&&(n.anisotropy=Math.min(8,t));this.ui.progress(.78,"Raising Emberfield"),await pg(),this.terrain=new X0(this.tex),this.scene.add(this.terrain.mesh),this.skyMesh=K0(),this.scene.add(this.skyMesh),this.waterMesh=lg(this.terrain.field),this.scene.add(this.waterMesh),this.scenery=q0(this.terrain,this.tex),this.scene.add(this.scenery.group),this.counts={trees:this.scenery.trunks.count,broad:this.scenery.broad.count,pines:this.scenery.pines.count,grass:this.scenery.grass.count,reeds:this.scenery.reeds.count,rocks:this.scenery.rocks.count},this.particles=new B0(this.tex.sprite,this.profile.particles);for(const n of this.particles.objects)this.scene.add(n);this.combat=new E0(this.scene),this.scene.fog=new ao(os,.00315),this.scene.environment=fg(),this.scene.environmentIntensity=.48,this.sun=new gu(16773330,3.15),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(this.profile.shadow,this.profile.shadow),this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=340,this.sun.shadow.bias=-28e-5,this.sun.shadow.normalBias=.045,this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.add(new fu(12043992,6970178,.62)),this.scene.add(new _u(9674928,.18)),this.scene.add(this.boom),this.scene.add(this.flash),this.applyQuality(this.profile.id),this.ui.setQuality(this.profile.id),this.resize(),window.addEventListener("resize",()=>this.resize()),this.phase="menu",this.ui.progress(1,"Company ready"),this.ui.showMenu(),document.body.dataset.phase="menu";const e=new URLSearchParams(location.search).get("autostart");this.publish(),(e==="lynx"||e==="vanguard"||e==="bulwark")&&this.start(e),this.last=performance.now(),this.renderer.setAnimationLoop(n=>this.frame(n))}start(t){this.clearMatch();const e=ig(),n=wl(0),s=wl(1),r=new Qr(0,ir[t],0,Tl[0],!0,this.tex.camoCinder,this.tex.track,e.gear,e.gun);r.spawn(n[2].x,n[2].z,n[2].yaw,this.terrain),this.tanks.push(r),this.player=r;const a=n.filter((l,c)=>c!==2);_0.forEach((l,c)=>{const h=a[c],f=new Qr(this.tanks.length,ir[l],0,Tl[c+1],!1,this.tex.camoCinder,this.tex.track,e.gear,e.gun);f.spawn(h.x,h.z,h.yaw,this.terrain),this.tanks.push(f)}),x0.forEach((l,c)=>{const h=s[c],f=new Qr(this.tanks.length,ir[l],1,g0[c],!1,this.tex.camoSlate,this.tex.track,e.gear,e.gun);f.spawn(h.x,h.z,h.yaw,this.terrain),this.tanks.push(f)});for(const l of this.tanks)this.scene.add(l.group);this.ai.bind(this.tanks),this.ui.ensureRosters(7,7),this.timeLeft=420;const o=new URLSearchParams(location.search).get("countdown");this.countdown=o===null?3:Math.max(0,Number(o)),this.capNorth=0,this.capSouth=0,this.result=null,this.feed=[],this.floaters=[],this.camYaw=0,this.camPitch=-.3,this.sniper=0,this.phase="countdown",this.input.setEnabled(!0),this.ui.showBattle(),document.body.dataset.phase="countdown",this.player&&this.look.set(this.player.x,this.player.y+2,this.player.z)}garage(){this.clearMatch(),this.phase="menu",this.input.setEnabled(!1),this.ui.showMenu(),document.body.dataset.phase="menu",this.audio.silenceEngine()}resume(){this.phase==="pause"&&(this.phase=this.pausedFrom,this.input.setEnabled(!0),this.ui.showPause(!1),document.body.dataset.phase=this.phase)}clearMatch(){for(const t of this.tanks)t.group.removeFromParent();this.tanks=[],this.player=null,this.combat?.clear(),this.result=null}frame(t){const e=Math.min(.05,(t-this.last)/1e3);if(this.last=t,this.elapsed+=e,this.fpsAccum+=e,this.fpsFrames++,this.fpsAccum>=.4&&(this.fps=Math.round(this.fpsFrames/this.fpsAccum),this.fpsFrames=0,this.fpsAccum=0,!this.lockQuality&&this.phase==="battle"&&(this.fps<40?this.lowTimer+=.4:this.lowTimer=0,this.lowTimer>3&&this.profile.id>0&&(this.lowTimer=0,this.applyQuality(this.profile.id-1),this.ui.setQuality(this.profile.id)))),this.input.pauseEdge&&(this.input.pauseEdge=!1,this.phase==="battle"||this.phase==="countdown"?(this.pausedFrom=this.phase,this.phase="pause",this.input.setEnabled(!1),this.ui.showPause(!0),document.body.dataset.phase="pause"):this.phase==="pause"&&this.resume()),this.input.mapEdge&&(this.input.mapEdge=!1,this.ui.onMap()),this.phase==="battle"||this.phase==="countdown"){this.acc+=e;let n=0;for(;this.acc>=ta&&n<4;){try{this.simulate(ta)}catch(s){console.error(s),this.acc=0;break}this.acc-=ta,n++}}else this.acc=0;this.present(e),this.renderer.render(this.scene,this.camera)}simulate(t){if(!this.player)return;this.input.sample();const e=this.phase==="battle",n=new Map;for(const s of this.tanks)s.alive&&(e?s.player?n.set(s.id,{throttle:this.input.throttle,steer:this.input.steer}):n.set(s.id,this.ai.drive(s,this.tanks,this.terrain,t)):n.set(s.id,{throttle:0,steer:0}));for(const s of this.tanks)s.alive&&s.integrate(n.get(s.id)??{throttle:0,steer:0},t,this.terrain);for(const s of this.tanks)s.collide(this.terrain,this.scenery.solids,this.scenery.posts);ng(this.tanks);for(const s of this.tanks){const r=s.stick(this.terrain,t);s.applyVisual(r),s.exhaust(t,r,(a,o,l)=>this.particles.dust(a,o,l),(a,o,l)=>this.particles.splash(a,o,l)),s.settle(t)}if(C0(this.tanks,this.terrain,this.scenery.solids,this.scenery.posts,t),this.player.alive){const s=this.aimRay(this.player),r=this.rayHit(s.ox,s.oy,s.oz,s.dx,s.dy,s.dz),a=Math.atan2(r.x-this.player.x,r.z-this.player.z),o=Math.hypot(r.x-this.player.x,r.z-this.player.z),l=Fc(o,r.y-(this.player.y+1.6),this.player.spec.shellSpeed);this.player.aim(a,l,t)}for(const s of this.tanks)!s.player&&s.alive&&this.ai.aim(s,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts,t);if(e){this.player.alive&&this.input.consumeFire()?this.combat.tryFire(this.player):this.input.consumeFire();for(const s of this.tanks)s.aiFire&&(this.combat.tryFire(s),s.aiFire=!1);this.combat.update(t,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts),this.consumeEvents(),this.updateCaps(t),this.timeLeft-=t,this.checkEnd()}else this.phase==="countdown"&&(this.input.consumeFire(),this.countdown-=t,this.countdown<=0&&(this.phase="battle",document.body.dataset.phase="battle"));for(const s of this.floaters)s.life-=t;this.floaters=this.floaters.filter(s=>s.life>0);for(const s of this.feed)s.age+=t;this.feed=this.feed.filter(s=>s.age<6).slice(0,5)}present(t){if((this.phase==="menu"||this.phase==="boot")&&this.terrain){const n=this.elapsed*.045,s=70+Math.cos(n)*48,r=90+Math.sin(n)*26,a=this.terrain.sample(s,r).h+18;this.camera.position.set(s,a,r),this.camera.lookAt(116,this.terrain.sample(116,52).h+5,52),this.camera.fov=58,this.camera.updateProjectionMatrix()}else if(this.player){const n=this.input.consumeLook();this.camYaw-=n.x*this.input.sens,this.camPitch-=n.y*this.input.sens,this.camPitch=Dt(this.camPitch,this.sniper>.5?-.45:-1.05,.42),this.camDist=Dt(this.camDist+this.input.zoomDelta*.01,6,26),this.input.zoomDelta=0;const s=this.input.isSniper()&&this.player.alive&&(this.phase==="battle"||this.phase==="countdown");this.sniper=Lc(this.sniper,s?1:0,9,t),this.input.setSniper(this.sniper>.5);const r=this.subject();if(r){ea.set(r.x,r.y+1.75,r.z),this.look.lengthSq()<1&&this.look.copy(ea),this.look.lerp(ea,1-Math.exp(-8*t));const a=this.aimRay(r);Ye.set(a.dx,a.dy,a.dz);const o=this.look.clone().addScaledVector(Ye,-this.camDist),l=this.pullCamera(this.look,o),c=new F(r.x,r.y+2.4,r.z);this.camera.position.copy(l).lerp(c,this.sniper);const h=this.look.clone().lerp(c.clone().add(Ye),this.sniper);if(this.shake>0){const f=this.shake*this.shake*.35;this.camera.position.x+=(Math.random()-.5)*f,this.camera.position.y+=(Math.random()-.5)*f,this.shake=Math.max(0,this.shake-t*1.6)}this.camera.lookAt(h),this.camera.fov=58+-43*this.sniper,this.camera.updateProjectionMatrix(),r.group.visible=this.sniper<.7||r!==this.player}}if(this.terrain){this.terrain.tick(this.elapsed),J0(this.skyMesh,this.elapsed),cg(this.waterMesh,this.elapsed),this.scenery.tick(this.elapsed),this.skyMesh.position.copy(this.camera.position),this.particles.update(t),this.boom.intensity=Math.max(0,this.boom.intensity-t*80),this.flash.intensity=Math.max(0,this.flash.intensity-t*220),this.hurt=Math.max(0,this.hurt-t*1.4);const n=this.subject()??this.player;n&&(this.audio.updateEngine(n.player?n.speed:0,n.spec.maxSpeed,this.input.throttle),(!n.alive||!n.player)&&this.audio.silenceEngine()),this.updateSun(this.camera.position)}if(this.phase!=="menu"&&this.phase!=="boot"&&this.ui.update(this.hud()),this.terrain&&this.phase!=="boot"){const n=this.subject();this.ui.drawMap(this.terrain.minimap,n?{x:n.x,z:n.z,yaw:this.camYaw}:null,this.tanks.filter(s=>s.team===0).map(s=>({x:s.x,z:s.z,dead:!s.alive})),this.tanks.filter(s=>s.team===1&&(s.detected>0||!s.alive)).map(s=>({x:s.x,z:s.z,dead:!s.alive})),{north:this.capNorth,south:this.capSouth})}this.hit=""}subject(){return this.player?.alive?this.player:this.tanks.find(t=>t.team===0&&t.alive)??this.player}aimRay(t){dg(this.camYaw,this.camPitch,Ye);const e=this.camDist,n=t.x-Ye.x*e*(1-this.sniper),s=t.y+1.75*(1-this.sniper)+2.4*this.sniper-Ye.y*e*(1-this.sniper),r=t.z-Ye.z*e*(1-this.sniper);return{ox:n,oy:s,oz:r,dx:Ye.x,dy:Ye.y,dz:Ye.z}}rayHit(t,e,n,s,r,a){let o=460;for(let l=8;l<=460;l+=3)if(e+r*l<this.terrain.groundAt(t+s*l,n+a*l)+.08){o=l;break}for(const l of this.scenery.solids)for(let c=6;c<o;c+=5){const h=t+s*c,f=e+r*c,d=n+a*c,[p,x]=dr(h-l.x,d-l.z,l.rot);if(Math.abs(p)<=l.hx&&Math.abs(x)<=l.hz&&Math.abs(f-l.y)<=l.hy){o=c;break}}return hg.set(t+s*o,e+r*o,n+a*o)}pullCamera(t,e){const n=e.x-t.x,s=e.y-t.y,r=e.z-t.z,a=Math.hypot(n,s,r);if(a<.5)return e;const o=Math.ceil(a/1.4);let l=a;for(let c=1;c<=o;c++){const h=c/o*a,f=t.x+n/a*h,d=t.y+s/a*h,p=t.z+r/a*h;if(d<this.terrain.sample(f,p).h+.7){l=Math.max(1.4,h-1.2);break}}return new F(t.x+n/a*l,t.y+s/a*l,t.z+r/a*l)}updateSun(t){const e=this.profile.range,n=e*2/this.profile.shadow,s=Math.round(t.x/n)*n,r=Math.round(t.z/n)*n;this.sun.target.position.set(s,0,r),this.sun.position.set(s,0,r).addScaledVector(fo,170);const a=this.sun.shadow.camera;a.left=-e,a.right=e,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}updateCaps(t){let e=0,n=0,s=0,r=0;for(const o of this.tanks){if(!o.alive)continue;const l=Math.hypot(o.x,o.z-St.baseZ)<St.baseR,c=Math.hypot(o.x,o.z+St.baseZ)<St.baseR;l&&o.team===0&&e++,l&&o.team===1&&n++,c&&o.team===1&&r++,c&&o.team===0&&s++}const a=t/this.capTime;e>0&&n===0?this.capNorth+=a*Math.min(3,e):e===0&&n===0&&(this.capNorth=Math.max(0,this.capNorth-t*.1)),r>0&&s===0?this.capSouth+=a*Math.min(3,r):r===0&&s===0&&(this.capSouth=Math.max(0,this.capSouth-t*.1))}checkEnd(){if(this.phase==="end")return;const t=this.tanks.filter(a=>a.team===0&&a.alive),e=this.tanks.filter(a=>a.team===1&&a.alive);let n="",s="";if(this.capNorth>=1)n="Victory",s="Cinder captured the Slate base.";else if(this.capSouth>=1)n="Defeat",s="Slate captured the Cinder base.";else if(e.length===0&&t.length===0)n="Draw",s="Both companies were wiped out.";else if(e.length===0)n="Victory",s="Every Slate tank is burning.";else if(t.length===0)n="Defeat",s="Cinder Company was destroyed.";else if(this.timeLeft<=0){const a=t.reduce((l,c)=>l+c.hp,0),o=e.reduce((l,c)=>l+c.hp,0);t.length>e.length||t.length===e.length&&a>o?(n="Victory",s="Time ran out. Cinder still holds the valley."):e.length>t.length||o>a?(n="Defeat",s="Time ran out. Slate kept the field."):(n="Draw",s="Dusk fell with neither side broken.")}if(!n||!this.player)return;const r=this.player;this.result={title:n,subtitle:s,rows:[["Kills",String(r.kills)],["Damage",String(Math.round(r.damageDealt))],["Blocked",String(Math.round(r.blocked))],["Shots",String(r.shots)],["Hits",String(r.hits)],["Survived",r.alive?"Yes":"No"]]},this.phase="end",this.input.setEnabled(!1),this.ui.showEnd(this.result),document.body.dataset.phase="end",this.audio.silenceEngine()}consumeEvents(){const t=this.camera.position;for(const e of this.combat.events)this.applyEvent(e,t);this.combat.events.length=0}applyEvent(t,e){const n=Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z);if(t.type==="fire")this.particles.muzzle(t.x,t.y,t.z,t.dx,t.dy,t.dz),this.audio.shot(n),t.a===this.player?.id&&(this.flash.position.set(t.x,t.y,t.z),this.flash.intensity=18);else if(t.type==="pen")this.particles.spark(t.x,t.y,t.z,!0),this.floaters.push({x:t.x,y:t.y+1.2,z:t.z,text:String(Math.round(t.n)),life:1.1,max:1.1,kind:t.b===this.player?.id?"hurt":"dmg"}),t.a===this.player?.id&&(this.hit="pen",this.audio.pen()),t.b===this.player?.id&&this.noteHurt(t.x,t.z);else if(t.type==="bounce")this.particles.spark(t.x,t.y,t.z,!1),this.floaters.push({x:t.x,y:t.y+1.2,z:t.z,text:"BOUNCE",life:.9,max:.9,kind:"bounce"}),t.a===this.player?.id&&(this.hit="bounce",this.audio.bounce()),t.b===this.player?.id&&(this.audio.bounce(),this.noteHurt(t.x,t.z));else if(t.type==="kill"){this.particles.blast(t.x,t.y,t.z),this.boom.position.set(t.x,t.y,t.z),this.boom.intensity=90,this.audio.boom(n),this.shake=Math.min(1,this.shake+8/Math.max(6,n));const s=this.tanks.find(a=>a.id===t.a),r=this.tanks.find(a=>a.id===t.b);if(s&&r){const a=s.team===0?"good":"bad";this.feed.unshift({text:`${s.name} destroyed ${r.name}`,kind:a,age:0})}}else t.type==="ground"&&this.particles.dirt(t.x,t.y,t.z)}noteHurt(t,e){this.hurt=1,this.shake=Math.min(1,this.shake+.45);const n=t-(this.player?.x??0),s=e-(this.player?.z??0);this.hurtAngle=Math.atan2(n,s)-this.camYaw}hud(){const t=this.player,e=this.tanks.filter(v=>v.team===0),n=this.tanks.filter(v=>v.team===1);let s="",r=0,a=!1;this.capNorth>.01&&(s="Capturing the Slate base",r=this.capNorth),this.capSouth>this.capNorth&&(s="Cinder base under attack",r=this.capSouth,a=!0);let o="";this.phase==="countdown"?o=this.countdown>.15?String(Math.max(1,Math.ceil(this.countdown-.001))):"Engage":t&&!t.alive&&this.phase==="battle"&&(o="Destroyed — spectating");const l=this.canvas.clientWidth||1,c=this.canvas.clientHeight||1;let h=l/2,f=c/2,d=!1,p=!1;if(t?.alive){t.muzzle.getWorldPosition(Gl),t.muzzle.getWorldDirection(ns);const v=ns.x*Ye.x+ns.y*Ye.y+ns.z*Ye.z;p=t.reload<=0&&v>.998;const w=Gl.clone().addScaledVector(ns,80);w.project(this.camera),w.z<1&&(d=!0,h=(w.x*.5+.5)*l,f=(-w.y*.5+.5)*c)}const x=this.camera.fov*Math.PI/180,S=Math.atan((t?.dispersion??.4)/100),m=Math.tan(S)/Math.tan(x/2)*(c/2),u=Math.floor(this.timeLeft/60),g=Math.max(0,Math.floor(this.timeLeft%60)),M=[];for(const v of this.floaters){const w=new F(v.x,v.y+(1-v.life/v.max)*1.6,v.z);w.project(this.camera),!(w.z>1)&&M.push({x:(w.x*.5+.5)*l,y:(-w.y*.5+.5)*c,text:v.text,life:v.life,kind:v.kind})}return{time:`${u}:${g.toString().padStart(2,"0")}`,allies:e.filter(v=>v.alive).length,enemies:n.filter(v=>v.alive).length,spotted:(t?.detected??0)>0,banner:o,sniper:this.sniper>.55,hp:t?.hp??0,maxHp:t?.spec.hp??1,speed:t?.speed??0,reload:t?.reload??0,reloadTime:t?.spec.reload??1,aimPx:m,ready:p,gunX:h,gunY:f,gunVisible:d,hit:this.hit,hurt:this.hurt,hurtAngle:this.hurtAngle,fps:this.fps,cap:s,capP:r,capBad:a,tankName:t?.spec.name??"",role:t?.spec.role??"",alliesRows:e.map(v=>({name:v.name,role:v.spec.role,hp:v.hp,max:v.spec.hp,dead:!v.alive,self:v.player})),enemyRows:n.map(v=>({name:v.name,role:v.spec.role,hp:v.detected>0||!v.alive?v.hp:v.spec.hp,max:v.spec.hp,dead:!v.alive,self:!1})),feed:this.feed,floaters:M.slice(0,24)}}applyQuality(t){if(this.profile=nr[t],!this.renderer)return;this.resize(),this.sun?.shadow.mapSize.set(this.profile.shadow,this.profile.shadow);const e=this.sun?.shadow;if(e?.map&&(e.map.dispose(),e.map=null),!this.scenery)return;const n=this.counts.trees>0?Math.min(1,this.profile.trees/nr[2].trees):1;this.scenery.trunks.count=Math.max(0,Math.floor(this.counts.trees*n)),this.scenery.broad.count=Math.max(0,Math.floor(this.counts.broad*n)),this.scenery.pines.count=Math.max(0,Math.floor(this.counts.pines*n)),this.scenery.grass.count=Math.min(this.counts.grass,this.profile.grass),this.scenery.reeds.count=Math.min(this.counts.reeds,this.profile.reeds),this.scenery.rocks.count=Math.min(this.counts.rocks,this.profile.rocks),this.scenery.trunks.castShadow=this.profile.treeShadow,this.scenery.broad.castShadow=this.profile.treeShadow,this.scenery.pines.castShadow=this.profile.treeShadow,this.particles?.setBudget(this.profile.particles)}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight,n=Math.min(this.profile.dpr,window.devicePixelRatio||1);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}publish(){const t=this;window.__ASHEN={ready:!0,get phase(){return t.phase},get fps(){return t.fps},start:e=>t.start(e??"vanguard"),damage:(e,n)=>t.debugDamage(e,n),teleport:(e,n)=>t.debugTeleport(e,n),setCapTime:e=>{t.capTime=e},armorCases:y0,getState:()=>t.debugState()}}debugDamage(t,e){const n=this.tanks.find(s=>s.id===t);!n||!n.alive||(n.hp-=e,n.hp<=0&&(n.kill(),this.particles.blast(n.x,n.y+1,n.z)),this.phase==="countdown"&&(this.phase="battle"),this.checkEnd())}debugTeleport(t,e){this.player&&(this.player.x=t,this.player.z=e,this.player.y=this.terrain.sample(t,e).h,this.player.speed=0)}debugState(){const t=this.player;return{phase:this.phase,fps:this.fps,quality:this.profile.id,draws:this.renderer.info.render.calls,tris:this.renderer.info.render.triangles,shells:this.combat?.activeShells??0,result:this.result?.title??"",allies:this.tanks.filter(e=>e.team===0&&e.alive).length,enemies:this.tanks.filter(e=>e.team===1&&e.alive).length,player:t?{id:t.id,x:t.x,y:t.y,z:t.z,hp:t.hp,speed:t.speed,yaw:t.yaw,shots:t.shots,kills:t.kills,alive:t.alive}:null,tanks:this.tanks.map(e=>({id:e.id,name:e.name,team:e.team,hp:e.hp,alive:e.alive,x:e.x,z:e.z}))}}}function dg(i,t,e){const n=Math.cos(t);return e.set(Math.sin(i)*n,Math.sin(t),Math.cos(i)*n)}function fg(){const t=["#9eb6d4","#e2c7a4","#c5daf0","#6a5c48","#8fb0d0","#d8c4a6"].map(n=>{const s=document.createElement("canvas");s.width=s.height=8;const r=s.getContext("2d");return r&&(r.fillStyle=n,r.fillRect(0,0,8,8)),s}),e=new lo(t);return e.colorSpace=ke,e.needsUpdate=!0,e}function pg(){return new Promise(i=>setTimeout(i,0))}const mg=navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches;document.body.classList.toggle("touch-device",mg);const gg=new ug;gg.boot().catch(i=>{const t=document.querySelector("#fatal"),e=document.querySelector("#loading");e&&(e.hidden=!0),t&&(t.hidden=!1,t.textContent=i instanceof Error?i.message:"The valley failed to load.")});
