(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Do="187",Wh=0,pl=1,Xh=2,As=1,qh=2,Es=3,Ai=0,je=1,He=2,on=0,ts=1,Ns=2,ml=3,gl=4,zc=5,li=100,Yh=101,Zh=102,$h=103,Kh=104,ka=200,Jh=201,Qh=202,jh=203,Bc=204,kc=205,Gc=206,tu=207,Hc=208,eu=209,nu=210,iu=211,su=212,ru=213,au=214,Ga=0,Ha=1,Va=2,Is=3,Wa=4,Xa=5,qa=6,Ya=7,Vc=0,ou=1,lu=2,Zn=0,Lo=1,No=2,Io=3,Kr=4,Uo=5,Fo=6,Oo=7,Wc=300,is=301,Us=302,Lr=303,ra=304,En=1e3,mn=1001,Za=1002,Ce=1003,cu=1004,Ys=1005,Te=1006,aa=1007,Wn=1008,ln=1009,Xc=1010,qc=1011,Fs=1012,zo=1013,Dn=1014,sn=1015,Pe=1016,Bo=1017,ko=1018,Ri=1020,Yc=35902,Zc=35899,$c=1021,Kc=1022,yn=1023,pi=1026,Xn=1027,Jr=1028,Go=1029,Ci=1030,Ho=1031,Vo=1033,Nr=33776,Ir=33777,Ur=33778,Fr=33779,$a=35840,Ka=35841,Ja=35842,Qa=35843,ja=36196,to=37492,eo=37496,no=37488,io=37489,Hr=37490,so=37491,ro=37808,ao=37809,oo=37810,lo=37811,co=37812,ho=37813,uo=37814,fo=37815,po=37816,mo=37817,go=37818,_o=37819,xo=37820,vo=37821,Mo=36492,So=36494,yo=36495,bo=36283,Eo=36284,Vr=36285,To=36286,hu=3200,Wr=0,uu=1,pn="",Qe="srgb",ss="srgb-linear",Xr="linear",he="srgb",oa=7680,du=519,fu=512,pu=513,mu=514,Jc=515,gu=516,_u=517,Qc=518,jc=519,xu=35044,Zs=35048,_l="300 es",bn=2e3,Os=2001;function vu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mu(){const s=zs("canvas");return s.style.display="block",s}const xl={};function vl(...s){const t="THREE."+s.shift();console.log(t,...s)}function th(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Bt(...s){s=th(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ae(...s){s=th(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Or(...s){const t=s.join(" ");t in xl||(xl[t]=!0,Bt(...s))}function Su(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const yu={[Ga]:Ga,[Va]:qa,[Wa]:Wa,[Is]:Xa,[Ha]:Ha,[qa]:Va,[Ya]:Ya,[Xa]:Is};class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ml=1234567;const Rs=Math.PI/180,Bs=180/Math.PI;function ls(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[s&255]+qe[s>>8&255]+qe[s>>16&255]+qe[s>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Jt(s,t,e){return Math.max(t,Math.min(e,s))}function Wo(s,t){return(s%t+t)%t}function bu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Eu(s,t,e){return s!==t?(e-s)/(t-s):0}function Cs(s,t,e){return(1-e)*s+e*t}function Tu(s,t,e,n){return Cs(s,t,1-Math.exp(-e*n))}function wu(s,t=1){return t-Math.abs(Wo(s,t*2)-t)}function Au(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ru(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Cu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Pu(s,t){return s+Math.random()*(t-s)}function Du(s){return s*(.5-Math.random())}function Lu(s){s!==void 0&&(Ml=s);let t=Ml+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nu(s){return s*Rs}function Iu(s){return s*Bs}function Uu(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Fu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function eh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ou(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xo(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nh(s,t){if(t.constructor===Float32Array)return s;const e=Xo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function ih(s,t){if(t.constructor===Float32Array)return s;const e=Xo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const zu={DEG2RAD:Rs,RAD2DEG:Bs,generateUUID:ls,clamp:Jt,euclideanModulo:Wo,mapLinear:bu,inverseLerp:Eu,lerp:Cs,damp:Tu,pingpong:wu,smoothstep:Au,smootherstep:Ru,randInt:Cu,randFloat:Pu,randFloatSpread:Du,seededRandom:Lu,degToRad:Nu,radToDeg:Iu,isPowerOfTwo:Uu,ceilPowerOfTwo:Fu,floorPowerOfTwo:eh,setQuaternionFromProperEuler:Ou,normalize:ih,denormalize:nh};class zt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ni{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(f!==v||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*v;m<0&&(u=-u,d=-d,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){const x=Math.acos(m),y=Math.sin(x);g=Math.sin(g*x)/y,o=Math.sin(o*x)/y,l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+v*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+v*o;const x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-o*d,t[e+2]=c*p+h*d+o*u-l*f,t[e+3]=h*p-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new U,Sl=new Ni;class Vt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],p=n[8],v=i[0],m=i[3],g=i[6],x=i[1],y=i[4],M=i[7],b=i[2],E=i[5],_=i[8];return r[0]=a*v+o*x+l*b,r[3]=a*m+o*y+l*E,r[6]=a*g+o*M+l*_,r[1]=c*v+h*x+f*b,r[4]=c*m+h*y+f*E,r[7]=c*g+h*M+f*_,r[2]=u*v+d*x+p*b,r[5]=u*m+d*y+p*E,r[8]=u*g+d*M+p*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=e*f+n*u+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=f*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ca.makeScale(t,e)),this}rotate(t){return Or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ca.makeRotation(-t)),this}translate(t,e){return Or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new Vt,yl=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bu(){const s={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pn?Xr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ss]:{primaries:t,whitePoint:n,transfer:Xr,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:he,toXYZ:yl,fromXYZ:bl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),s}const te=Bu();function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Oi;class ku{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=zs("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gu=0;class qo{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ha(i[a].image)):r.push(ha(i[a]))}else r=ha(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ha(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ku.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let Hu=0;const ua=new U;class Ve extends Li{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=mn,i=mn,r=Te,a=Wn,o=yn,l=ln,c=Ve.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ls(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ua).x}get height(){return this.source.getSize(ua).y}get depth(){return this.source.getSize(ua).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case En:t.x=t.x-Math.floor(t.x);break;case mn:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case En:t.y=t.y-Math.floor(t.y);break;case mn:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Wc;Ve.DEFAULT_ANISOTROPY=1;class Ee{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,M=(d+1)/2,b=(g+1)/2,E=(h+u)/4,_=(f+v)/4,S=(p+m)/4;return y>M&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=_/n):M>b?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=E/i,r=S/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=_/r,i=S/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-p)*(m-p)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(f-v)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vu extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Te,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Ve({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Te,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new qo(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends Vu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sh extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wu extends Ve{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class se{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,a,o,l,c,h,f,u,d,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,f,u,d,p,v,m)}set(t,e,n,i,r,a,o,l,c,h,f,u,d,p,v,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,p=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,p=c*h,v=c*f;e[0]=u+v*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,p=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,p=o*h,v=o*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=p*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-v*f}else if(t.order==="XZY"){const u=a*l,d=a*c,p=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xu,t,qu)}lookAt(t,e,n){const i=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Qn.crossVectors(n,rn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Qn.crossVectors(n,rn)),Qn.normalize(),$s.crossVectors(rn,Qn),i[0]=Qn.x,i[4]=$s.x,i[8]=rn.x,i[1]=Qn.y,i[5]=$s.y,i[9]=rn.y,i[2]=Qn.z,i[6]=$s.z,i[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],y=n[7],M=n[11],b=n[15],E=i[0],_=i[4],S=i[8],A=i[12],R=i[1],D=i[5],L=i[9],F=i[13],P=i[2],z=i[6],B=i[10],W=i[14],tt=i[3],H=i[7],q=i[11],j=i[15];return r[0]=a*E+o*R+l*P+c*tt,r[4]=a*_+o*D+l*z+c*H,r[8]=a*S+o*L+l*B+c*q,r[12]=a*A+o*F+l*W+c*j,r[1]=h*E+f*R+u*P+d*tt,r[5]=h*_+f*D+u*z+d*H,r[9]=h*S+f*L+u*B+d*q,r[13]=h*A+f*F+u*W+d*j,r[2]=p*E+v*R+m*P+g*tt,r[6]=p*_+v*D+m*z+g*H,r[10]=p*S+v*L+m*B+g*q,r[14]=p*A+v*F+m*W+g*j,r[3]=x*E+y*R+M*P+b*tt,r[7]=x*_+y*D+M*z+b*H,r[11]=x*S+y*L+M*B+b*q,r[15]=x*A+y*F+M*W+b*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],v=t[7],m=t[11],g=t[15],x=l*d-c*u,y=o*d-c*f,M=o*u-l*f,b=a*d-c*h,E=a*u-l*h,_=a*f-o*h;return e*(v*x-m*y+g*M)-n*(p*x-m*b+g*E)+i*(p*y-v*b+g*_)-r*(p*M-v*E+m*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],v=t[13],m=t[14],g=t[15],x=e*o-n*a,y=e*l-i*a,M=e*c-r*a,b=n*l-i*o,E=n*c-r*o,_=i*c-r*l,S=h*v-f*p,A=h*m-u*p,R=h*g-d*p,D=f*m-u*v,L=f*g-d*v,F=u*g-d*m,P=x*F-y*L+M*D+b*R-E*A+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return t[0]=(o*F-l*L+c*D)*z,t[1]=(i*L-n*F-r*D)*z,t[2]=(v*_-m*E+g*b)*z,t[3]=(u*E-f*_-d*b)*z,t[4]=(l*R-a*F-c*A)*z,t[5]=(e*F-i*R+r*A)*z,t[6]=(m*M-p*_-g*y)*z,t[7]=(h*_-u*M+d*y)*z,t[8]=(a*L-o*R+c*S)*z,t[9]=(n*R-e*L-r*S)*z,t[10]=(p*E-v*M+g*x)*z,t[11]=(f*M-h*E-d*x)*z,t[12]=(o*A-a*D-l*S)*z,t[13]=(e*D-n*A+i*S)*z,t[14]=(v*y-p*b-m*x)*z,t[15]=(h*b-f*y+u*x)*z,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,v=a*h,m=a*f,g=o*f,x=l*c,y=l*h,M=l*f,b=n.x,E=n.y,_=n.z;return i[0]=(1-(v+g))*b,i[1]=(d+M)*b,i[2]=(p-y)*b,i[3]=0,i[4]=(d-M)*E,i[5]=(1-(u+g))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(p+y)*_,i[9]=(m-x)*_,i[10]=(1-(u+v))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=zi.set(i[0],i[1],i[2]).length();const o=zi.set(i[4],i[5],i[6]).length(),l=zi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),_n.copy(this);const c=1/a,h=1/o,f=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,r,a,o=bn,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===bn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Os)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=bn,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-i),u=-(e+t)/(e-t),d=-(n+i)/(n-i);let p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===bn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Os)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new U,_n=new se,Xu=new U(0,0,0),qu=new U(1,1,1),Qn=new U,$s=new U,rn=new U,El=new se,Tl=new Ni;class mi{constructor(t=0,e=0,n=0,i=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return El.makeRotationFromQuaternion(t),this.setFromRotationMatrix(El,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yu=0;const wl=new U,Bi=new Ni,Un=new se,Ks=new U,ds=new U,Zu=new U,$u=new Ni,Al=new U(1,0,0),Rl=new U(0,1,0),Cl=new U(0,0,1),Pl={type:"added"},Ku={type:"removed"},ki={type:"childadded",child:null},da={type:"childremoved",child:null};class Re extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new U,e=new mi,n=new Ni,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Vt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Al,t)}rotateY(t){return this.rotateOnAxis(Rl,t)}rotateZ(t){return this.rotateOnAxis(Cl,t)}translateOnAxis(t,e){return wl.copy(t).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Al,t)}translateY(t){return this.translateOnAxis(Rl,t)}translateZ(t){return this.translateOnAxis(Cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ks.copy(t):Ks.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(ds,Ks,this.up):Un.lookAt(Ks,ds,this.up),this.quaternion.setFromRotationMatrix(Un),i&&(Un.extractRotation(i.matrixWorld),Bi.setFromRotationMatrix(Un),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pl),ki.child=t,this.dispatchEvent(ki),ki.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ku),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pl),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,Zu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,$u,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Re.DEFAULT_UP=new U(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qn extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ju={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ju)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function pa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Wo(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=pa(a,r,t+1/3),this.g=pa(a,r,t),this.b=pa(a,r,t-1/3)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return te.workingToColorSpace(Ye.copy(this),t),Math.round(Jt(Ye.r*255,0,255))*65536+Math.round(Jt(Ye.g*255,0,255))*256+Math.round(Jt(Ye.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,i=Ye.g,r=Ye.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Qe){te.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,i=Ye.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Js);const n=Cs(jn.h,Js.h,e),i=Cs(jn.s,Js.s,e),r=Cs(jn.l,Js.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new kt;kt.NAMES=ah;class Yo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new Yo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qu extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const xn=new U,Fn=new U,ma=new U,On=new U,Gi=new U,Hi=new U,Dl=new U,ga=new U,_a=new U,xa=new U,va=new Ee,Ma=new Ee,Sa=new Ee;class Sn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),xn.subVectors(t,e),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){xn.subVectors(i,e),Fn.subVectors(n,e),ma.subVectors(t,e);const a=xn.dot(xn),o=xn.dot(Fn),l=xn.dot(ma),c=Fn.dot(Fn),h=Fn.dot(ma),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return va.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),va.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),Sa.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(va,r.x),a.addScaledVector(Ma,r.y),a.addScaledVector(Sa,r.z),a}static isFrontFacing(t,e,n,i){return xn.subVectors(n,e),Fn.subVectors(t,e),xn.cross(Fn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),xn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Gi.subVectors(i,n),Hi.subVectors(r,n),ga.subVectors(t,n);const l=Gi.dot(ga),c=Hi.dot(ga);if(l<=0&&c<=0)return e.copy(n);_a.subVectors(t,i);const h=Gi.dot(_a),f=Hi.dot(_a);if(h>=0&&f<=h)return e.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Gi,a);xa.subVectors(t,r);const d=Gi.dot(xa),p=Hi.dot(xa);if(p>=0&&d<=p)return e.copy(r);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Hi,o);const m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return Dl.subVectors(r,i),o=(f-h)/(f-h+(d-p)),e.copy(i).addScaledVector(Dl,o);const g=1/(m+v+u);return a=v*g,o=u*g,e.copy(n).addScaledVector(Gi,a).addScaledVector(Hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ii{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),js.subVectors(this.max,fs),Vi.subVectors(t.a,fs),Wi.subVectors(t.b,fs),Xi.subVectors(t.c,fs),ti.subVectors(Wi,Vi),ei.subVectors(Xi,Wi),vi.subVectors(Vi,Xi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-vi.z,vi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,vi.z,0,-vi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-vi.y,vi.x,0];return!ya(e,Vi,Wi,Xi,js)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,Vi,Wi,Xi,js))?!1:(tr.crossVectors(ti,ei),e=[tr.x,tr.y,tr.z],ya(e,Vi,Wi,Xi,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const zn=[new U,new U,new U,new U,new U,new U,new U,new U],vn=new U,Qs=new Ii,Vi=new U,Wi=new U,Xi=new U,ti=new U,ei=new U,vi=new U,fs=new U,js=new U,tr=new U,Mi=new U;function ya(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Mi.fromArray(s,r);const o=i.x*Math.abs(Mi.x)+i.y*Math.abs(Mi.y)+i.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Vn=ju();function ju(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function td(s){Math.abs(s)>65504&&Bt("DataUtils.toHalfFloat(): Value out of range."),s=Jt(s,-65504,65504),Vn.floatView[0]=s;const t=Vn.uint32View[0],e=t>>23&511;return Vn.baseTable[e]+((t&8388607)>>Vn.shiftTable[e])}function ed(s){const t=s>>10;return Vn.uint32View[0]=Vn.mantissaTable[Vn.offsetTable[t]+(s&1023)]+Vn.exponentTable[t],Vn.floatView[0]}class er{static toHalfFloat(t){return td(t)}static fromHalfFloat(t){return ed(t)}}const Ae=new U,nr=new zt;let nd=0;class fi extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xu,this.updateRanges=[],this.gpuType=sn,this.version=0,this._normalizationScale=t!==void 0?Xo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):nh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):ih(t,this.array)}}class oh extends fi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lh extends fi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Yt extends fi{constructor(t,e,n){super(new Float32Array(t),e,n)}}const id=new Ii,ps=new U,ba=new U;class cs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):id.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ps,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ba.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(ba)),this.expandByPoint(ps.copy(t.center).sub(ba))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let sd=0;const un=new se,Ea=new Re,qi=new U,an=new Ii,ms=new Ii,Fe=new U;class Ne extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vu(t)?lh:oh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(an.min,ms.min),an.expandByPoint(Fe),Fe.addVectors(an.max,ms.max),an.expandByPoint(Fe)):(an.expandByPoint(ms.min),an.expandByPoint(ms.max))}an.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(t,c),Fe.add(qi)),i=Math.max(i,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new fi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)o[A]=new U,l[A]=new U;const h=new U,f=new U,u=new U,d=new zt,p=new zt,v=new zt,m=new U,g=new U;function x(A,R,D){c[A]=c[R]=c[D]=1,h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,R),u.fromBufferAttribute(n,D),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,R),v.fromBufferAttribute(r,D),f.sub(h),u.sub(h),p.sub(d),v.sub(d);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(m.copy(f).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(L),g.copy(u).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(L),o[A].add(m),o[R].add(m),o[D].add(m),l[A].add(g),l[R].add(g),l[D].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,R=y.length;A<R;++A){const D=y[A],L=D.start,F=D.count;for(let P=L,z=L+F;P<z;P+=3)x(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new U,b=new U,E=new U,_=new U;function S(A){E.fromBufferAttribute(i,A),_.copy(E);const R=o[A];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),b.crossVectors(_,R);const L=b.dot(l[A])<0?-1:1;a.setXYZW(A,M.x,M.y,M.z,L)}for(let A=0,R=n.count;A<R;++A)c[A]&&S(A);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new fi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){const p=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new fi(u,h,f)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new U,rd=new U,ad=new Vt;class ai{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ta.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Ta),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),i=this.coplanarPoint(Ta).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let od=0;class Ui extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=ts,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=kc,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ai().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new zt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new zt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Bn=new U,wa=new U,ir=new U,sr=new U;class ch{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wa.copy(t).add(e).multiplyScalar(.5),ir.copy(e).sub(t).normalize(),sr.copy(this.origin).sub(wa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ir),o=sr.dot(this.direction),l=-sr.dot(ir),c=sr.lengthSq(),h=Math.abs(1-a*a);let f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){const v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(wa).addScaledVector(ir,u),d}intersectSphere(t,e){if(t.radius<0)return null;Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),i=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,p=e.x-a.x,v=e.y-a.y,m=e.z-a.z,g=n.x-a.x,x=n.y-a.y,y=n.z-a.z,M=Math.abs(l),b=Math.abs(c),E=Math.abs(h);let _,S,A,R,D,L,F,P,z,B,W,tt;if(M>=b&&M>=E?(A=l,L=f,z=p,tt=g,l>=0?(_=c,S=h,R=u,D=d,F=v,P=m,B=x,W=y):(_=h,S=c,R=d,D=u,F=m,P=v,B=y,W=x)):b>=E?(A=c,L=u,z=v,tt=x,c>=0?(_=h,S=l,R=d,D=f,F=m,P=p,B=y,W=g):(_=l,S=h,R=f,D=d,F=p,P=m,B=g,W=y)):(A=h,L=d,z=m,tt=y,h>=0?(_=l,S=c,R=f,D=u,F=p,P=v,B=g,W=x):(_=c,S=l,R=u,D=f,F=v,P=p,B=x,W=g)),A===0)return null;const H=_/A,q=S/A,j=1/A,gt=R-H*L,Rt=D-q*L,Y=F-H*z,it=P-q*z,Mt=B-H*tt,At=W-q*tt,ht=Mt*it-At*Y,Dt=gt*At-Rt*Mt,ne=Y*Rt-it*gt;if(i){if(ht<0||Dt<0||ne<0)return null}else if((ht<0||Dt<0||ne<0)&&(ht>0||Dt>0||ne>0))return null;const It=ht+Dt+ne;if(It===0)return null;const ee=j*(ht*L+Dt*z+ne*tt);return(It>0?ee<0:ee>0)?null:this.at(ee/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rs extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ll=new se,Si=new ch,rr=new cs,Nl=new U,ar=new U,or=new U,lr=new U,Aa=new U,cr=new U,Il=new U,hr=new U;class Me extends Re{constructor(t=new Ne,e=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Aa.fromBufferAttribute(f,t),a?cr.addScaledVector(Aa,h):cr.addScaledVector(Aa.sub(e),h))}e.add(cr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(rr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(rr,Nl)===null||Si.origin.distanceToSquared(Nl)>(t.far-t.near)**2))&&(Ll.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Ll),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=u.length;p<v;p++){const m=u[p],g=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,b=y;M<b;M+=3){const E=o.getX(M),_=o.getX(M+1),S=o.getX(M+2);i=ur(this,g,t,n,c,h,f,E,_,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const x=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=ur(this,a,t,n,c,h,f,x,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=u.length;p<v;p++){const m=u[p],g=a[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=x,b=y;M<b;M+=3){const E=M,_=M+1,S=M+2;i=ur(this,g,t,n,c,h,f,E,_,S),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const x=m,y=m+1,M=m+2;i=ur(this,a,t,n,c,h,f,x,y,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function ld(s,t,e,n,i,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ai,o),l===null)return null;hr.copy(o),hr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:s}}function ur(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ar),s.getVertexPosition(l,or),s.getVertexPosition(c,lr);const h=ld(s,t,e,n,ar,or,lr,Il);if(h){const f=new U;Sn.getBarycoord(Il,ar,or,lr,f),i&&(h.uv=Sn.getInterpolatedAttribute(i,o,l,c,f,new zt)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,o,l,c,f,new zt)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Sn.getNormal(ar,or,lr,u.normal),h.face=u,h.barycoord=f}return h}class Pi extends Ve{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ce,h=Ce,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ul extends fi{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new se,Fl=new se,dr=[],Ol=new Ii,cd=new se,gs=new Me,_s=new cs;class si extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ul(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),Ol.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Ol)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),_s.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Yi),Fl.multiplyMatrices(n,Yi),gs.matrixWorld=Fl,gs.raycast(t,dr);for(let a=0,o=dr.length;a<o;a++){const l=dr[a];l.instanceId=r,l.object=this,e.push(l)}dr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ul(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pi(new Float32Array(i*this.count),i,this.count,Jr,sn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yi=new cs,hd=new zt(.5,.5),fr=new U;class ks{constructor(t=new ai,e=new ai,n=new ai,i=new ai,r=new ai,a=new ai){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){const i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],v=r[9],m=r[10],g=r[11],x=r[12],y=r[13],M=r[14],b=r[15];if(i[0].setComponents(c-a,d-h,g-p,b-x).normalize(),i[1].setComponents(c+a,d+h,g+p,b+x).normalize(),i[2].setComponents(c+o,d+f,g+v,b+y).normalize(),i[3].setComponents(c-o,d-f,g-v,b-y).normalize(),n)i[4].setComponents(l,u,m,M).normalize(),i[5].setComponents(c-l,d-u,g-m,b-M).normalize();else if(i[4].setComponents(c-l,d-u,g-m,b-M).normalize(),e===bn)i[5].setComponents(c+l,d+u,g+m,b+M).normalize();else if(e===Os)i[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);const e=hd.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(fr.x=i.normal.x>0?t.max.x:t.min.x,fr.y=i.normal.y>0?t.max.y:t.min.y,fr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const zl=new se;class Zo{constructor(){this.coordinateSystem=bn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];zl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new ks),n[i].setFromProjectionMatrix(zl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new ks),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new Zo().copy(this)}}class ud extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bl=new se,wo=new ch,pr=new cs,mr=new U;class dd extends Re{constructor(t=new Ne,e=new ud){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;Bl.copy(i).invert(),wo.copy(t.ray).applyMatrix4(Bl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,v=d;p<v;p++){const m=c.getX(p);mr.fromBufferAttribute(f,m),kl(mr,m,l,i,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,v=d;p<v;p++)mr.fromBufferAttribute(f,p),kl(mr,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function kl(s,t,e,n,i,r,a){const o=wo.distanceSqToPoint(s);if(o<e){const l=new U;wo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class hh extends Ve{constructor(t=[],e=is,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fd extends Ve{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di extends Ve{constructor(t,e,n=Dn,i,r,a,o=Ce,l=Ce,c,h=pi,f=1){if(h!==pi&&h!==Xn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class uh extends Di{constructor(t,e=Dn,n=is,i,r,a=Ce,o=Ce,l,c=pi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dh extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class hn extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(f,2));function p(v,m,g,x,y,M,b,E,_,S,A){const R=M/_,D=b/S,L=M/2,F=b/2,P=E/2,z=_+1,B=S+1;let W=0,tt=0;const H=new U;for(let q=0;q<B;q++){const j=q*D-F;for(let gt=0;gt<z;gt++){const Rt=gt*R-L;H[v]=Rt*x,H[m]=j*y,H[g]=P,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[g]=E>0?1:-1,h.push(H.x,H.y,H.z),f.push(gt/_),f.push(1-q/S),W+=1}}for(let q=0;q<S;q++)for(let j=0;j<_;j++){const gt=u+j+z*q,Rt=u+j+z*(q+1),Y=u+(j+1)+z*(q+1),it=u+(j+1)+z*q;l.push(gt,Rt,it),l.push(Rt,Y,it),tt+=6}o.addGroup(d,tt,A),d+=tt,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class nn extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let p=0;const v=[],m=n/2;let g=0;x(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Yt(f,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(d,2));function x(){const M=new U,b=new U;let E=0;const _=(e-t)/n;for(let S=0;S<=r;S++){const A=[],R=S/r,D=R*(e-t)+t;for(let L=0;L<=i;L++){const F=L/i,P=F*l+o,z=Math.sin(P),B=Math.cos(P);b.x=D*z,b.y=-R*n+m,b.z=D*B,f.push(b.x,b.y,b.z),M.set(z,_,B).normalize(),u.push(M.x,M.y,M.z),d.push(F,1-R),A.push(p++)}v.push(A)}for(let S=0;S<i;S++)for(let A=0;A<r;A++){const R=v[A][S],D=v[A+1][S],L=v[A+1][S+1],F=v[A][S+1];(t>0||A!==0)&&(h.push(R,D,F),E+=3),(e>0||A!==r-1)&&(h.push(D,L,F),E+=3)}c.addGroup(g,E,0),g+=E}function y(M){const b=p,E=new zt,_=new U;let S=0;const A=M===!0?t:e,R=M===!0?1:-1;for(let L=1;L<=i;L++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),p++;const D=p;for(let L=0;L<=i;L++){const P=L/i*l+o,z=Math.cos(P),B=Math.sin(P);_.x=A*B,_.y=m*R,_.z=A*z,f.push(_.x,_.y,_.z),u.push(0,R,0),E.x=z*.5+.5,E.y=B*.5*R+.5,d.push(E.x,E.y),p++}for(let L=0;L<i;L++){const F=b+L,P=D+L;M===!0?h.push(P,P+1,F):h.push(P+1,P,F),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qr extends nn{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new qr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $o extends Ne{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new U,M=new U,b=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],y),d(e[E+1],M),d(e[E+2],b),l(y,M,b,x)}function l(x,y,M,b){const E=b+1,_=[];for(let S=0;S<=E;S++){_[S]=[];const A=x.clone().lerp(M,S/E),R=y.clone().lerp(M,S/E),D=E-S;for(let L=0;L<=D;L++)L===0&&S===E?_[S][L]=A:_[S][L]=A.clone().lerp(R,L/D)}for(let S=0;S<E;S++)for(let A=0;A<2*(E-S)-1;A++){const R=Math.floor(A/2);A%2===0?(u(_[S][R+1]),u(_[S+1][R]),u(_[S][R])):(u(_[S][R+1]),u(_[S+1][R+1]),u(_[S+1][R]))}}function c(x){const y=new U;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(x),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){const x=new U;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const M=m(x)/2/Math.PI+.5,b=g(x)/Math.PI+.5;a.push(M,1-b)}p(),f()}function f(){for(let x=0;x<a.length;x+=6){const y=a[x+0],M=a[x+2],b=a[x+4],E=Math.max(y,M,b),_=Math.min(y,M,b);E>.9&&_<.1&&(y<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),b<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,y){const M=x*3;y.x=t[M+0],y.y=t[M+1],y.z=t[M+2]}function p(){const x=new U,y=new U,M=new U,b=new U,E=new zt,_=new zt,S=new zt;for(let A=0,R=0;A<r.length;A+=9,R+=6){x.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),M.set(r[A+6],r[A+7],r[A+8]),E.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),S.set(a[R+4],a[R+5]),b.copy(x).add(y).add(M).divideScalar(3);const D=m(b);v(E,R+0,x,D),v(_,R+2,y,D),v(S,R+4,M,D)}}function v(x,y,M,b){b<0&&x.x===1&&(a[y]=x.x-1),M.x===0&&M.z===0&&(a[y]=b/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.vertices,t.indices,t.radius,t.detail)}}class Ko extends $o{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ko(t.radius,t.detail)}}class Ln extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=t/o,u=e/l,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const x=g*u-a;for(let y=0;y<c;y++){const M=y*f-r;p.push(M,-x,0),v.push(0,0,1),m.push(y/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const y=x+c*g,M=x+c*(g+1),b=x+1+c*(g+1),E=x+1+c*g;d.push(y,M,E),d.push(M,b,E)}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jo extends Ne{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=t;const u=(e-t)/i,d=new U,p=new zt;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const g=r+m/n*a;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}f+=u}for(let v=0;v<i;v++){const m=v*(n+1);for(let g=0;g<n;g++){const x=g+m,y=x,M=x+n+1,b=x+n+2,E=x+1;o.push(y,M,E),o.push(M,b,E)}}this.setIndex(o),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Hs extends Ne{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new U,u=new U,d=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){const x=[],y=g/n,M=a+y*o,b=t*Math.cos(M),E=Math.sqrt(t*t-b*b);let _=0;g===0&&a===0?_=.5/e:g===n&&l===Math.PI&&(_=-.5/e);for(let S=0;S<=e;S++){const A=S/e,R=i+A*r;f.x=-E*Math.cos(R),f.y=b,f.z=E*Math.sin(R),p.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(A+_,1-y),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const y=h[g][x+1],M=h[g][x],b=h[g+1][x],E=h[g+1][x+1];(g!==0||a>0)&&d.push(y,M,E),(g!==n-1||l<Math.PI)&&d.push(M,b,E)}this.setIndex(d),this.setAttribute("position",new Yt(p,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Yr extends Ne{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],u=new U,d=new U,p=new U;for(let v=0;v<=n;v++){const m=a+v/n*o;for(let g=0;g<=i;g++){const x=g/i*r;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(g/i),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=i;m++){const g=(i+1)*v+m-1,x=(i+1)*(v-1)+m-1,y=(i+1)*(v-1)+m,M=(i+1)*v+m;l.push(g,x,M),l.push(x,y,M)}this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function as(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Gl(i))i.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Gl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const n=as(s[e]);for(const i in n)t[i]=n[i]}return t}function Gl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function pd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function fh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Yn={clone:as,merge:Je};var md=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=md,this.fragmentShader=gd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=pd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new zt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new U().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ph extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ge extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _d extends Ui{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wr,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class xd extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vd extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ps={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Hl(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Hl(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Hl(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class mh{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Md=new mh;class Vs{constructor(t){this.manager=t!==void 0?t:Md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class Sd extends Error{constructor(t,e){super(t),this.response=e}}class yd extends Vs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ps.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(kn[t]!==void 0){kn[t].push({onLoad:e,onProgress:n,onError:i});return}kn[t]=[],kn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Bt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=kn[t],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,p=d!==0;let v=0;const m=new ReadableStream({start(g){x();function x(){f.read().then(({done:y,value:M})=>{if(y)g.close();else{v+=M.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let E=0,_=h.length;E<_;E++){const S=h[E];S.onProgress&&S.onProgress(b)}g.enqueue(M),x()}},y=>{g.error(y)})}}});return new Response(m)}else throw new Sd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ps.add(`file:${t}`,c);const h=kn[t];delete kn[t];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=kn[t];if(h===void 0)throw this.manager.itemError(t),c;delete kn[t];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zi=new WeakMap;class bd extends Vs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Ps.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Zi.get(a);f===void 0&&(f=[],Zi.set(a,f)),f.push({onLoad:e,onError:i})}return a}const o=zs("img");function l(){h(),e&&e(this);const f=Zi.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Zi.delete(this),r.manager.itemEnd(t)}function c(f){h(),i&&i(f),Ps.remove(`image:${t}`);const u=Zi.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onError&&p.onError(f)}Zi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ps.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}}class Ed extends Vs{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new Pi,o=new yd(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):ae(h);return}r._applyTexData(a,c),e&&e(a,c)},n,i),a}createDataTexture(t){const e=new Pi;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:mn,t.wrapT=e.wrapT!==void 0?e.wrapT:mn,t.magFilter=e.magFilter!==void 0?e.magFilter:Te,t.minFilter=e.minFilter!==void 0?e.minFilter:Te,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=Wn),e.mipmapCount===1&&(t.minFilter=Te),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class Td extends Vs{constructor(t){super(t)}load(t,e,n,i){const r=new Ve,a=new bd(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Qr extends Re{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class wd extends Qr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Ra=new se,Vl=new U,Wl=new U;class gh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Vl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vl),Wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ra,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Os||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Ra)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const gr=new U,_r=new Ni,Tn=new U;class _h extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(gr,_r,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,_r,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(gr,_r,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,_r,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ni=new U,Xl=new zt,ql=new zt;class fn extends _h{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Rs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Xl,ql),e.subVectors(ql,Xl)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ad extends gh{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}}class Yl extends Qr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ad}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Qo extends _h{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Rd extends gh{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cd extends Qr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new Rd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Pd extends Qr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const $i=-90,Ki=1;class Ao extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fn($i,Ki,t,e);i.layers=this.layers,this.add(i);const r=new fn($i,Ki,t,e);r.layers=this.layers,this.add(r);const a=new fn($i,Ki,t,e);a.layers=this.layers,this.add(a);const o=new fn($i,Ki,t,e);o.layers=this.layers,this.add(o);const l=new fn($i,Ki,t,e);l.layers=this.layers,this.add(l);const c=new fn($i,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Dd extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class Ld{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Nd.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Nd(){this._document.hidden===!1&&this.reset()}function Zl(s,t,e,n){const i=Id(n);switch(e){case $c:return s*t;case Jr:return s*t/i.components*i.byteLength;case Go:return s*t/i.components*i.byteLength;case Ci:return s*t*2/i.components*i.byteLength;case Ho:return s*t*2/i.components*i.byteLength;case Kc:return s*t*3/i.components*i.byteLength;case yn:return s*t*4/i.components*i.byteLength;case Vo:return s*t*4/i.components*i.byteLength;case Nr:case Ir:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Fr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ka:case Qa:return Math.max(s,16)*Math.max(t,8)/4;case $a:case Ja:return Math.max(s,8)*Math.max(t,8)/2;case ja:case to:case no:case io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case eo:case Hr:case so:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ao:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case oo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case lo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case co:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ho:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case uo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case po:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case mo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case go:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case vo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Mo:case So:case yo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case bo:case Eo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Vr:case To:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Id(s){switch(s){case ln:case Xc:return{byteLength:1,components:1};case Fs:case qc:case Pe:return{byteLength:2,components:1};case Bo:case ko:return{byteLength:2,components:4};case Dn:case zo:case sn:return{byteLength:4,components:1};case Yc:case Zc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);function xh(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ud(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){const p=f[u],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){const v=f[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
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
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
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
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,af=`#define PI 3.141592653589793
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
} // validated`,of=`vec3 transformedNormal = objectNormal;
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
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,df="gl_FragColor = linearToOutputTexel( gl_FragColor );",ff=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pf=`#ifdef USE_ENVMAP
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
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Cf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nf=`PhysicalMaterial material;
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
#endif`,If=`uniform sampler2D dfgLUT;
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
}`,Uf=`
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
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
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
#endif`,Of=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qf=`#if defined( USE_POINTS_UV )
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
#endif`,Yf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
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
#endif`,jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rp=`#ifdef USE_NORMALMAP
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
#endif`,ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,up=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Op=`uniform sampler2D t2D;
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform float backgroundBlurriness;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`#include <common>
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
}`,Vp=`#if DEPTH_PACKING == 3200
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
}`,Wp=`#define DISTANCE
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
}`,Xp=`#define DISTANCE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,$p=`uniform vec3 diffuse;
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
}`,Kp=`#include <common>
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Qp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,tm=`#define MATCAP
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
}`,em=`#define MATCAP
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
}`,nm=`#define NORMAL
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
}`,im=`#define NORMAL
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
}`,sm=`#define PHONG
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
}`,rm=`#define PHONG
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
}`,am=`#define STANDARD
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
}`,om=`#define STANDARD
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
}`,lm=`#define TOON
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
}`,cm=`#define TOON
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
}`,hm=`uniform float size;
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
}`,um=`uniform vec3 diffuse;
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
}`,dm=`#include <common>
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
}`,fm=`uniform vec3 color;
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
}`,pm=`uniform float rotation;
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
}`,mm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Fd,alphahash_pars_fragment:Od,alphamap_fragment:zd,alphamap_pars_fragment:Bd,alphatest_fragment:kd,alphatest_pars_fragment:Gd,aomap_fragment:Hd,aomap_pars_fragment:Vd,batching_pars_vertex:Wd,batching_vertex:Xd,begin_vertex:qd,beginnormal_vertex:Yd,bsdfs:Zd,iridescence_fragment:$d,bumpmap_pars_fragment:Kd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:jd,clipping_planes_vertex:tf,color_fragment:ef,color_pars_fragment:nf,color_pars_vertex:sf,color_vertex:rf,common:af,defaultnormal_vertex:of,displacementmap_pars_vertex:lf,displacementmap_vertex:cf,emissivemap_fragment:hf,emissivemap_pars_fragment:uf,colorspace_fragment:df,colorspace_pars_fragment:ff,envmap_fragment:pf,envmap_common_pars_fragment:mf,envmap_pars_fragment:gf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Rf,envmap_vertex:xf,fog_vertex:vf,fog_pars_vertex:Mf,fog_fragment:Sf,fog_pars_fragment:yf,gradientmap_pars_fragment:bf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:wf,lights_pars_begin:Af,lights_toon_fragment:Cf,lights_toon_pars_fragment:Pf,lights_phong_fragment:Df,lights_phong_pars_fragment:Lf,lights_physical_fragment:Nf,lights_physical_pars_fragment:If,lights_fragment_begin:Uf,lights_fragment_maps:Ff,lights_fragment_end:Of,lightprobes_pars_fragment:zf,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:kf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Hf,map_fragment:Vf,map_pars_fragment:Wf,map_particle_fragment:Xf,map_particle_pars_fragment:qf,metalnessmap_fragment:Yf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:$f,morphcolor_vertex:Kf,morphnormal_vertex:Jf,morphtarget_pars_vertex:Qf,morphtarget_vertex:jf,normal_fragment_begin:tp,normal_fragment_maps:ep,normal_pars_fragment:np,normal_pars_vertex:ip,normal_vertex:sp,normalmap_pars_fragment:rp,clearcoat_normal_fragment_begin:ap,clearcoat_normal_fragment_maps:op,clearcoat_pars_fragment:lp,iridescence_pars_fragment:cp,opaque_fragment:hp,packing:up,premultiplied_alpha_fragment:dp,project_vertex:fp,dithering_fragment:pp,dithering_pars_fragment:mp,roughnessmap_fragment:gp,roughnessmap_pars_fragment:_p,shadowmap_pars_fragment:xp,shadowmap_pars_vertex:vp,shadowmap_vertex:Mp,shadowmask_pars_fragment:Sp,skinbase_vertex:yp,skinning_pars_vertex:bp,skinning_vertex:Ep,skinnormal_vertex:Tp,specularmap_fragment:wp,specularmap_pars_fragment:Ap,tonemapping_fragment:Rp,tonemapping_pars_fragment:Cp,transmission_fragment:Pp,transmission_pars_fragment:Dp,uv_pars_fragment:Lp,uv_pars_vertex:Np,uv_vertex:Ip,worldpos_vertex:Up,background_vert:Fp,background_frag:Op,backgroundCube_vert:zp,backgroundCube_frag:Bp,cube_vert:kp,cube_frag:Gp,depth_vert:Hp,depth_frag:Vp,distance_vert:Wp,distance_frag:Xp,equirect_vert:qp,equirect_frag:Yp,linedashed_vert:Zp,linedashed_frag:$p,meshbasic_vert:Kp,meshbasic_frag:Jp,meshlambert_vert:Qp,meshlambert_frag:jp,meshmatcap_vert:tm,meshmatcap_frag:em,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:dm,shadow_frag:fm,sprite_vert:pm,sprite_frag:mm},vt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Pn={basic:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Je([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Je([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Je([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Je([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Je([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Je([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Je([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Je([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Je([vt.common,vt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Je([vt.lights,vt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Pn.physical={uniforms:Je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const xr={r:0,b:0,g:0},gm=new se,vh=new Vt;vh.set(-1,0,0,0,1,0,0,0,1);function _m(s,t,e,n,i,r){const a=new kt(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const M=x.backgroundBlurriness>0;y=t.get(y,M)}return y}function p(x){let y=!1;const M=d(x);M===null?m(a,o):M&&M.isColor&&(m(M,1),y=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(x,y){const M=d(y);M&&M.isCubeTexture?(c===void 0&&(c=new Me(new hn(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:as(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vh),c.material.toneMapped=te.getTransfer(M.colorSpace)!==he,(h!==M||f!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Me(new Ln(2,2),new be({name:"BackgroundMaterial",uniforms:as(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=te.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(xr,fh(s)),e.buffers.color.setClear(xr.r,xr.g,xr.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:v,dispose:g}}function xm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(D,L,F,P,z){let B=!1;const W=f(D,P,F,L);r!==W&&(r=W,c(r.object)),B=d(D,P,F,z),B&&p(D,P,F,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,M(D,L,F,P),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,L,F,P){const z=P.wireframe===!0;let B=n[L.id];B===void 0&&(B={},n[L.id]=B);const W=D.isInstancedMesh===!0?D.id:0;let tt=B[W];tt===void 0&&(tt={},B[W]=tt);let H=tt[F.id];H===void 0&&(H={},tt[F.id]=H);let q=H[z];return q===void 0&&(q=u(l()),H[z]=q),q}function u(D){const L=[],F=[],P=[];for(let z=0;z<e;z++)L[z]=0,F[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,L,F,P){const z=r.attributes,B=L.attributes;let W=0;const tt=F.getAttributes();for(const H in tt)if(tt[H].location>=0){const j=z[H];let gt=B[H];if(gt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(gt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(gt=D.instanceColor)),j===void 0||j.attribute!==gt||gt&&j.data!==gt.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function p(D,L,F,P){const z={},B=L.attributes;let W=0;const tt=F.getAttributes();for(const H in tt)if(tt[H].location>=0){let j=B[H];j===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const gt={};gt.attribute=j,j&&j.data&&(gt.data=j.data),z[H]=gt,W++}r.attributes=z,r.attributesNum=W,r.index=P}function v(){const D=r.newAttributes;for(let L=0,F=D.length;L<F;L++)D[L]=0}function m(D){g(D,0)}function g(D,L){const F=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;F[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),z[D]!==L&&(s.vertexAttribDivisor(D,L),z[D]=L)}function x(){const D=r.newAttributes,L=r.enabledAttributes;for(let F=0,P=L.length;F<P;F++)L[F]!==D[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function y(D,L,F,P,z,B,W){W===!0?s.vertexAttribIPointer(D,L,F,z,B):s.vertexAttribPointer(D,L,F,P,z,B)}function M(D,L,F,P){v();const z=P.attributes,B=F.getAttributes(),W=L.defaultAttributeValues;for(const tt in B){const H=B[tt];if(H.location>=0){let q=z[tt];if(q===void 0&&(tt==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),tt==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){const j=q.normalized,gt=q.itemSize,Rt=t.get(q);if(Rt===void 0)continue;const Y=Rt.buffer,it=Rt.type,Mt=Rt.bytesPerElement,At=it===s.INT||it===s.UNSIGNED_INT||q.gpuType===zo;if(q.isInterleavedBufferAttribute){const ht=q.data,Dt=ht.isInterleavedBuffer===!0?ht.stride:ht.itemSize,ne=q.offset;if(ht.isInstancedInterleavedBuffer||ht.isInstancedBufferAttribute){for(let It=0;It<H.locationSize;It++)g(H.location+It,ht.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let It=0;It<H.locationSize;It++)m(H.location+It);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let It=0;It<H.locationSize;It++)y(H.location+It,gt/H.locationSize,it,j,Dt*Mt,(ne+gt/H.locationSize*It)*Mt,At)}else{if(q.isInstancedBufferAttribute){for(let ht=0;ht<H.locationSize;ht++)g(H.location+ht,q.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ht=0;ht<H.locationSize;ht++)m(H.location+ht);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let ht=0;ht<H.locationSize;ht++)y(H.location+ht,gt/H.locationSize,it,j,gt*Mt,gt/H.locationSize*ht*Mt,At)}}else if(W!==void 0){const j=W[tt];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(H.location,j);break;case 3:s.vertexAttrib3fv(H.location,j);break;case 4:s.vertexAttrib4fv(H.location,j);break;default:s.vertexAttrib1fv(H.location,j)}}}}x()}function b(){A();for(const D in n){const L=n[D];for(const F in L){const P=L[F];for(const z in P){const B=P[z];for(const W in B)h(B[W].object),delete B[W];delete P[z]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const L=n[D.id];for(const F in L){const P=L[F];for(const z in P){const B=P[z];for(const W in B)h(B[W].object),delete B[W];delete P[z]}}delete n[D.id]}function _(D){for(const L in n){const F=n[L];for(const P in F){const z=F[P];if(z[D.id]===void 0)continue;const B=z[D.id];for(const W in B)h(B[W].object),delete B[W];delete z[D.id]}}}function S(D){for(const L in n){const F=n[L],P=D.isInstancedMesh===!0?D.id:0,z=F[P];if(z!==void 0){for(const B in z){const W=z[B];for(const tt in W)h(W[tt].object),delete W[tt];delete z[B]}delete F[P],Object.keys(F).length===0&&delete n[L]}}}function A(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function vm(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Mm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==yn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===Pe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ln&&_!==sn&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Bt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:M,maxSamples:b,samples:E}}function Sm(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ai,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const p=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let M=g.clippingState||null;l.value=M,M=h(p,u,y,d);for(let b=0;b!==y;++b)M[b]=e[b];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,p){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=d+v*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=d;y!==v;++y,M+=4)a.copy(f[y]).applyMatrix4(x,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}class jo extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hh(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hn(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:on});r.uniforms.tEquirect.value=e;const a=new Me(i,r),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=Te),new Ao(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const $l=256,ym=3,bm=20,Mh=256,Sh=16,Em=3,Tm=new U,wm=new kt;class Gs{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ao(1,10,null),this._boxMesh=new Me(new hn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=Tm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(wm));const m=new Ao(n,i,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=p,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max($l,eh(t))}_fromTexture(t,e){t.mapping===is||t.mapping===Us?this._setSize(t.image.length===0?$l:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Kl(t,!1,!1),n=Math.log2(t)-ym;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Kl(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===is||t.mapping===Us?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Jl()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Am(),this._integrationMaterial=Rm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Sh);for(let a=0;a<=n;a++){const o=Gs.lodToRoughness(a,n);if(a>n-Em)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Mh*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Cm());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function Kl(s,t,e){return new jo(s,{minFilter:Wn,generateMipmaps:t,type:Pe,colorSpace:ss,depthBuffer:e})}function Ws(s,t,e){return new be({name:s,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:je,blending:on,depthTest:!1,depthWrite:!1})}function Am(){return Ws("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mh}u

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
	`)}function Rm(){return Ws("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Sh}},`

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
	`)}function Cm(){return Ws("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${bm}
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
	`)}function Jl(){return Ws("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ql(){return Ws("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Pm(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Lr||d===ra)if(t.has(u)){const p=t.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const v=new jo(p.height);return v.fromEquirectangularTexture(s,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const d=u.mapping,p=d===Lr||d===ra,v=d===is||d===Us;if(p||v){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Gs(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return p&&x&&x.height>0||v&&x&&l(x)?(n===null&&(n=new Gs(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===Lr?u.mapping=is:d===ra&&(u.mapping=Us),u}function l(u){let d=0;const p=6;for(let v=0;v<p;v++)u[v]!==void 0&&d++;return d===p}function c(u){const d=u.target;d.removeEventListener("dispose",c);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Dm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Or("WebGLRenderer: "+n+" extension not supported."),i}}}function Lm(s,t,e,n){const i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);const v=r.get(p);v&&(t.remove(v),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,v){return i[v.id]!==void 0||(v.addEventListener("dispose",o),i[v.id]=new WeakRef(v),a.register(v,v.id,v),e.memory.geometries++),v}function h(p){const v=p.attributes;for(const m in v)t.update(v[m],s.ARRAY_BUFFER)}function f(p){const v=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const x=v!==null?v.array.length:m.array.length/3-1,y=m.count>=65535?lh:oh,M=new y(Math.ceil(x/3)*6,1),b=M.array;if(v!==null){const _=v.array;g=v.version;for(let S=0,A=0;S<x;S+=3){const R=_[S+0],D=_[S+1],L=_[S+2];b[A++]=R,b[A++]=D,b[A++]=D,b[A++]=L,b[A++]=L,b[A++]=R}}else{g=m.version;for(let _=0,S=0;_<x;_+=3){const A=_+0,R=_+1,D=_+2;b[S++]=A,b[S++]=R,b[S++]=R,b[S++]=D,b[S++]=D,b[S++]=A}}M.version=g;const E=r.get(p);E&&t.remove(E),r.set(p,M)}function u(p){const v=r.get(p);if(v){const m=p.index;m!==null&&v.version<m.version&&f(p)}else f(p);return r.get(p)}function d(){for(const p in i){const v=i[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Nm(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];e.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Im(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:ae("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Um(s,t,e){const n=new WeakMap,i=new Ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let A=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let M=o.attributes.position.count*y,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const E=new Float32Array(M*b*4*f),_=new sh(E,M,b,f);_.type=sn,_.needsUpdate=!0;const S=y*4;for(let R=0;R<f;R++){const D=m[R],L=g[R],F=x[R],P=M*b*4*R;for(let z=0;z<D.count;z++){const B=z*S;d===!0&&(i.fromBufferAttribute(D,z),E[P+B+0]=i.x,E[P+B+1]=i.y,E[P+B+2]=i.z,E[P+B+3]=0),p===!0&&(i.fromBufferAttribute(L,z),E[P+B+4]=i.x,E[P+B+5]=i.y,E[P+B+6]=i.z,E[P+B+7]=0),v===!0&&(i.fromBufferAttribute(F,z),E[P+B+8]=i.x,E[P+B+9]=i.y,E[P+B+10]=i.z,E[P+B+11]=F.itemSize===4?i.w:1)}}u={count:f,texture:_,size:new zt(M,b)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Fm(s,t,e,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Om={[Lo]:"LINEAR_TONE_MAPPING",[No]:"REINHARD_TONE_MAPPING",[Io]:"CINEON_TONE_MAPPING",[Kr]:"ACES_FILMIC_TONE_MAPPING",[Fo]:"AGX_TONE_MAPPING",[Oo]:"NEUTRAL_TONE_MAPPING",[Uo]:"CUSTOM_TONE_MAPPING"};function zm(s,t,e,n,i,r){const a=new Ze(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Ne;h.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const f=new ph({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Me(h,f),d=new Qo(-1,1,1,-1,0,1);let p=null,v=null,m=!1,g,x=null,y=[],M=!1;this.setSize=function(b,E){a.setSize(b,E),o!==null&&o.setSize(b,E),l!==null&&l.setSize(b,E);for(let _=0;_<y.length;_++){const S=y[_];S.setSize&&S.setSize(b,E)}},this.setEffects=function(b){y=b,M=y.length>0&&y[0].isRenderPass===!0;const E=a.width,_=a.height;y.length>0&&o===null&&(o=new Ze(E,_,{type:Pe,depthBuffer:!1,stencilBuffer:!1}),l=new Ze(E,_,{type:Pe,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&y.some(A=>A.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Di(E,_),r===!0&&(c.format=Xn,c.type=Ri)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let A=0;A<y.length;A++){const R=y[A];R.setSize&&R.setSize(E,_),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(b,E){if(m||b.toneMapping===Zn&&y.length===0)return!1;if(x=E,E!==null){const _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return M===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=Zn,!0},this.hasRenderPass=function(){return M},this.end=function(b,E){b.toneMapping=g,m=!0;let _=a,S=o;for(let A=0;A<y.length;A++){const R=y[A];R.enabled!==!1&&(R.render(b,S,_,E),R.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(p!==b.outputColorSpace||v!==b.toneMapping){p=b.outputColorSpace,v=b.toneMapping,f.defines={},te.getTransfer(p)===he&&(f.defines.SRGB_TRANSFER="");const A=Om[v];A&&(f.defines[A]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(x),b.render(u,d),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const yh=new Ve,bh=new Di(1,1),Eh=new uh(1),Th=new sh,wh=new Wu,Ah=new hh,jl=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function hs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=jl[i];if(r===void 0&&(r=new Float32Array(i),jl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Le(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function jr(s,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Bm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function km(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Le(e,t)}}function Gm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Le(e,t)}}function Hm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Le(e,t)}}function Vm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;ic.set(n),s.uniformMatrix2fv(this.addr,!1,ic),Le(e,n)}}function Wm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;nc.set(n),s.uniformMatrix3fv(this.addr,!1,nc),Le(e,n)}}function Xm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;ec.set(n),s.uniformMatrix4fv(this.addr,!1,ec),Le(e,n)}}function qm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ym(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Le(e,t)}}function Zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Le(e,t)}}function $m(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Le(e,t)}}function Km(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Le(e,t)}}function Qm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Le(e,t)}}function jm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Le(e,t)}}function ta(s){return s.version===0&&(s.compareFunction=jc,s.needsUpdate=!0),s}function t0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=ta(bh):r=yh,e.setTexture2D(t||r,i)}function e0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wh,i)}function n0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=ta(Eh):r=Ah,e.setTextureCube(t||r,i)}function i0(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Th,i)}function s0(s){switch(s){case 5126:return Bm;case 35664:return km;case 35665:return Gm;case 35666:return Hm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return Jm;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}function r0(s,t){s.uniform1fv(this.addr,t)}function a0(s,t){const e=hs(t,this.size,2);s.uniform2fv(this.addr,e)}function o0(s,t){const e=hs(t,this.size,3);s.uniform3fv(this.addr,e)}function l0(s,t){const e=hs(t,this.size,4);s.uniform4fv(this.addr,e)}function c0(s,t){const e=hs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function h0(s,t){const e=hs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function u0(s,t){const e=hs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function d0(s,t){s.uniform1iv(this.addr,t)}function f0(s,t){s.uniform2iv(this.addr,t)}function p0(s,t){s.uniform3iv(this.addr,t)}function m0(s,t){s.uniform4iv(this.addr,t)}function g0(s,t){s.uniform1uiv(this.addr,t)}function _0(s,t){s.uniform2uiv(this.addr,t)}function x0(s,t){s.uniform3uiv(this.addr,t)}function v0(s,t){s.uniform4uiv(this.addr,t)}function M0(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=ta(bh):a=yh;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function S0(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||wh,r[a])}function y0(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=ta(Eh):a=Ah;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function b0(s,t,e){const n=this.cache,i=t.length,r=jr(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Le(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Th,r[a])}function E0(s){switch(s){case 5126:return r0;case 35664:return a0;case 35665:return o0;case 35666:return l0;case 35674:return c0;case 35675:return h0;case 35676:return u0;case 5124:case 35670:return d0;case 35667:case 35671:return f0;case 35668:case 35672:return p0;case 35669:case 35673:return m0;case 5125:return g0;case 36294:return _0;case 36295:return x0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return b0}}class T0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=s0(e.type)}}class w0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=E0(e.type)}}class A0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function sc(s,t){s.seq.push(t),s.map[t.id]=t}function R0(s,t,e){const n=s.name,i=n.length;for(Ca.lastIndex=0;;){const r=Ca.exec(n),a=Ca.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){sc(e,c===void 0?new T0(o,s,t):new w0(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new A0(o),sc(e,f)),e=f}}}class zr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);R0(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function rc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const C0=37297;let P0=0;function D0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ac=new Vt;function L0(s){te._getMatrix(ac,te.workingColorSpace,s);const t=`mat3( ${ac.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Xr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function oc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+D0(s.getShaderSource(t),o)}else return r}function N0(s,t){const e=L0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const I0={[Lo]:"Linear",[No]:"Reinhard",[Io]:"Cineon",[Kr]:"ACESFilmic",[Fo]:"AgX",[Oo]:"Neutral",[Uo]:"Custom"};function U0(s,t){const e=I0[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vr=new U;function F0(){te.getLuminanceCoefficients(vr);const s=vr.x.toFixed(4),t=vr.y.toFixed(4),e=vr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function z0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ts(s){return s!==""}function lc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ro(s){return s.replace(k0,G0)}function G0(s,t){const e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ro(e)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(s){return s.replace(H0,V0)}function V0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const W0={[As]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function X0(s){return W0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q0={[Us]:"ENVMAP_MODE_REFRACTION"};function Y0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":q0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z0={[Vc]:"ENVMAP_BLENDING_MULTIPLY",[ou]:"ENVMAP_BLENDING_MIX",[lu]:"ENVMAP_BLENDING_ADD"};function $0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Z0[s.combine]||"ENVMAP_BLENDING_NONE"}function K0(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=X0(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Y0(e),f=$0(e),u=O0(e),d=z0(r),p=i.createProgram();let v,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ts).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ts).join(`
`),m.length>0&&(m+=`
`)):(v=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),m=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?$t.tonemapping_pars_fragment:"",e.toneMapping!==Zn?U0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),F0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Ro(a),a=lc(a,e),a=cc(a,e),o=Ro(o),o=lc(o,e),o=cc(o,e),a=hc(a),o=hc(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=g+v+a,y=g+m+o,M=rc(i,i.VERTEX_SHADER,x),b=rc(i,i.FRAGMENT_SHADER,y);i.attachShader(p,M),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(R){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(M)||"",F=i.getShaderInfoLog(b)||"",P=D.trim(),z=L.trim(),B=F.trim();let W=!0,tt=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,M,b);else{const H=oc(i,M,"vertex"),q=oc(i,b,"fragment");ae("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+H+`
`+q)}else P!==""?Bt("WebGLProgram: Program Info Log:",P):(z===""||B==="")&&(tt=!1);tt&&(R.diagnostics={runnable:W,programLog:P,vertexShader:{log:z,prefix:v},fragmentShader:{log:B,prefix:m}})}i.deleteShader(M),i.deleteShader(b),_=new zr(i,p),S=B0(i,p)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(p,C0)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=P0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}let J0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new j0(t),e.set(t,n)),n}}class j0{constructor(t){this.id=J0++,this.code=t,this.usedTimes=0}}function tg(s){return s===Ci||s===Hr||s===Vr}function eg(s,t,e,n,i,r){const a=new rh,o=new Q0,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,A,R,D,L){const F=R.fog,P=D.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=t.get(_.envMap||z,B),tt=u[_.type];let H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));const q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=q!==void 0?q.length:0;let gt=0;P.morphAttributes.position!==void 0&&(gt=1),P.morphAttributes.normal!==void 0&&(gt=2),P.morphAttributes.color!==void 0&&(gt=3);let Rt,Y,it,Mt;if(tt){const xt=Pn[tt];Rt=xt.vertexShader,Y=xt.fragmentShader}else{Rt=_.vertexShader,Y=_.fragmentShader;const xt=o.getVertexShaderStage(_),de=o.getFragmentShaderStage(_);o.update(_,xt,de),it=xt.id,Mt=de.id}const At=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),Dt=D.isInstancedMesh===!0,ne=D.isBatchedMesh===!0,It=!!_.map,ee=!!_.matcap,Kt=!!W,Gt=Kt&&W.isPMREMTexture===!0,Se=!!_.aoMap,ge=!!_.lightMap,st=!!_.bumpMap&&_.wireframe===!1,ut=!!_.normalMap,bt=!!_.displacementMap,_t=!!_.emissiveMap,Nt=!!_.metalnessMap,re=!!_.roughnessMap,_e=_.anisotropy>0,O=_.clearcoat>0,ce=_.diffuseRoughness>0,oe=_.dispersion>0,Wt=_.retroreflectivity>0,ct=_.iridescence>0,ue=_.sheen>0,Pt=_.transmission>0,Ot=_e&&!!_.anisotropyMap,C=O&&!!_.clearcoatMap,T=O&&!!_.clearcoatNormalMap,k=O&&!!_.clearcoatRoughnessMap,et=ce&&!!_.diffuseRoughnessMap,Q=ct&&!!_.iridescenceMap,rt=ct&&!!_.iridescenceThicknessMap,lt=ue&&!!_.sheenColorMap,Z=ue&&!!_.sheenRoughnessMap,K=!!_.specularMap,at=!!_.specularColorMap,N=!!_.specularIntensityMap,J=Pt&&!!_.transmissionMap,$=Pt&&!!_.thicknessMap,ft=!!_.gradientMap,ot=!!_.alphaMap,dt=_.alphaTest>0,Lt=!!_.alphaHash,Zt=!!_.extensions;let nt=Zn;_.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Ft=Gt?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,qt={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:Rt,fragmentShader:Y,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:ne,batchingColor:ne&&D._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&D.instanceColor!==null,instancingMorph:Dt&&D.morphTexture!==null,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:It,matcap:ee,envMap:Kt,envMapMode:Kt&&W.mapping,envMapPMREM:Gt,envMapMaxLod:Gt?Ft.length-1:null,envMapSize:Gt?Ft[0].width:null,aoMap:Se,lightMap:ge,bumpMap:st,normalMap:ut,displacementMap:bt,emissiveMap:_t,normalMapObjectSpace:ut&&_.normalMapType===uu,normalMapTangentSpace:ut&&_.normalMapType===Wr,packedNormalMap:ut&&_.normalMapType===Wr&&tg(_.normalMap.format),metalnessMap:Nt,roughnessMap:re,anisotropy:_e,anisotropyMap:Ot,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:T,clearcoatRoughnessMap:k,diffuseRoughness:ce,diffuseRoughnessMap:et,dispersion:oe,retroreflection:Wt,iridescence:ct,iridescenceMap:Q,iridescenceThicknessMap:rt,sheen:ue,sheenColorMap:lt,sheenRoughnessMap:Z,specularMap:K,specularColorMap:at,specularIntensityMap:N,transmission:Pt,transmissionMap:J,thicknessMap:$,gradientMap:ft,opaque:_.transparent===!1&&_.blending===ts&&_.alphaToCoverage===!1,alphaMap:ot,alphaTest:dt,alphaHash:Lt,combine:_.combine,mapUv:It&&d(_.map.channel),aoMapUv:Se&&d(_.aoMap.channel),lightMapUv:ge&&d(_.lightMap.channel),bumpMapUv:st&&d(_.bumpMap.channel),normalMapUv:ut&&d(_.normalMap.channel),displacementMapUv:bt&&d(_.displacementMap.channel),emissiveMapUv:_t&&d(_.emissiveMap.channel),metalnessMapUv:Nt&&d(_.metalnessMap.channel),roughnessMapUv:re&&d(_.roughnessMap.channel),anisotropyMapUv:Ot&&d(_.anisotropyMap.channel),clearcoatMapUv:C&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:T&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:et&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(_.sheenRoughnessMap.channel),specularMapUv:K&&d(_.specularMap.channel),specularColorMapUv:at&&d(_.specularColorMap.channel),specularIntensityMapUv:N&&d(_.specularIntensityMap.channel),transmissionMapUv:J&&d(_.transmissionMap.channel),thicknessMapUv:$&&d(_.thicknessMap.channel),alphaMapUv:ot&&d(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ut||_e),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(It||ot),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ut===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:gt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:It&&_.map.isVideoTexture===!0&&te.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:_t&&_.emissiveMap.isVideoTexture===!0&&te.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===He,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||ne)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function v(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)S.push(A),S.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const S=u[_.type];let A;if(S){const R=Pn[S];A=Yn.clone(R.uniforms)}else A=_.uniforms;return A}function y(_,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new K0(s,S,_,i),c.push(A),h.set(S,A)),A}function M(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function E(){o.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:E}}function ng(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function ig(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function dc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,v,m,g){let x=s[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},s[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=p,x.materialVariant=a(u),x.groupOrder=v,x.renderOrder=u.renderOrder,x.z=m,x.group=g),t++,x}function l(u,d,p,v,m,g,x){x.reversedDepth===!0&&(m=-m);const y=o(u,d,p,v,m,g);p.transmission>0?n.push(y):p.transparent===!0?i.push(y):e.push(y)}function c(u,d,p,v,m,g){const x=o(u,d,p,v,m,g);p.transmission>0?n.unshift(x):p.transparent===!0?i.unshift(x):e.unshift(x)}function h(u,d){e.length>1&&e.sort(u||ig),n.length>1&&n.sort(d||dc),i.length>1&&i.sort(d||dc)}function f(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function sg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new fc,s.set(n,[a])):i>=r.length?(a=new fc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function rg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function ag(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let og=0;function lg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function cg(s){const t=new rg,e=ag(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,r=new se,a=new se;function o(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,x=0,y=0,M=0,b=0,E=0,_=0,S=0,A=0,R=0;c.sort(lg);for(let L=0,F=c.length;L<F;L++){const P=c[L],z=P.color,B=P.intensity,W=P.distance;let tt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ci?tt=P.shadow.map.texture:tt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*B,f+=z.g*B,u+=z.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);R++}else if(P.isSunLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,j=e.get(P);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=tt;const gt=q.getViewportCount();for(let Rt=0;Rt<gt;Rt++)n.sunShadowMatrix[v+Rt]=q.getMatrix(Rt),n.sunShadowCascade[v+Rt]=q._cascadeData[Rt];v+=gt,p++}n.sun[d]=H,d++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,j=e.get(P);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=P.shadow.matrix,b++}n.directional[m]=H,m++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[x]=H;const q=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,q.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=q.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=tt,_++}x++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(z).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[y]=H,y++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const q=P.shadow,j=e.get(P);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[M]=H,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==y||D.hemiLength!==M||D.numSunShadows!==p||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=y,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.sunLength=d,D.directionalLength=m,D.pointLength=g,D.spotLength=x,D.rectAreaLength=y,D.hemiLength=M,D.numSunShadows=p,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=R,n.version=og++)}function l(c,h){let f=0,u=0,d=0,p=0,v=0,m=0;const g=h.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){const M=c[x];if(M.isSunLight){const b=n.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),f++}else if(M.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(M.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),a.identity(),r.copy(M.matrixWorld),r.premultiply(g),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function pc(s){const t=new cg(s),e=[],n=[],i=[];function r(f){h.camera=f,e.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),i.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hg(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new pc(s),t.set(i,[o])):r>=a.length?(o=new pc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`,fg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],pg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],mc=new se,xs=new U,Pa=new U;function mg(s,t,e){let n=new ks;const i=new zt,r=new zt,a=new Ee,o=new xd,l=new vd,c={},h=e.maxTextureSize,f={[Ai]:je,[je]:Ai,[He]:He},u=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:ug,fragmentShader:dg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const p=new Ne;p.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Me(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=As;let g=this.type;this.render=function(E,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===qh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=As);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(on),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=g!==this.type;F&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=E.length;P<z;P++){const B=E[P],W=B.shadow;if(W===void 0){Bt("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const tt=W.getFrameExtents();i.multiply(tt),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,W.mapSize.y=r.y));const H=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||F===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Es){if(B.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ze(i.x,i.y,{format:Ci,type:Pe,minFilter:Te,magFilter:Te,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Di(i.x,i.y,sn),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=pi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ce,W.map.depthTexture.magFilter=Ce}else B.isPointLight?(W.map=new jo(i.x),W.map.depthTexture=new uh(i.x,Dn)):(W.map=new Ze(i.x,i.y),W.map.depthTexture=new Di(i.x,i.y,Dn)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=pi,this.type===As?(W.map.depthTexture.compareFunction=H?Qc:Jc,W.map.depthTexture.minFilter=Te,W.map.depthTexture.magFilter=Te):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ce,W.map.depthTexture.magFilter=Ce);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,S);const j=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let gt=0;gt<q;gt++){const Rt=W.getCamera(gt);if(B.isPointLight){const Y=W.camera,it=W.matrix,Mt=B.distance||Y.far;Mt!==Y.far&&(Y.far=Mt,Y.updateProjectionMatrix()),xs.setFromMatrixPosition(B.matrixWorld),Y.position.copy(xs),Pa.copy(Y.position),Pa.add(fg[gt]),Y.up.copy(pg[gt]),Y.lookAt(Pa),Y.updateMatrixWorld(),it.makeTranslation(-xs.x,-xs.y,-xs.z),mc.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W._frustum.setFromProjectionMatrix(mc,Y.coordinateSystem,Y.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,gt),s.clear();else{gt===0&&(s.setRenderTarget(W.map),s.clear());const Y=W.getViewport(gt);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(a)}n=W.getFrustum(gt),M(_,S,Rt,B,j,this.type)}W.isPointLightShadow!==!0&&this.type===Es&&x(W,S),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(A,R,D)};function x(E,_){const S=t.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Ze(i.x,i.y,{format:Ci,type:Pe}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,S,u,v,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,S,d,v,null)}function y(E,_,S,A){let R=null;const D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const L=R.uuid,F=_.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let z=P[F];z===void 0&&(z=R.clone(),P[F]=z,_.addEventListener("dispose",b)),R=z}if(R.visible=_.visible,R.wireframe=_.wireframe,A===Es?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:f[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=s.properties.get(R);L.light=S}return R}function M(E,_,S,A,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Es)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const P=t.update(E),z=E.material;if(Array.isArray(z)){const B=P.groups;for(let W=0,tt=B.length;W<tt;W++){const H=B[W],q=z[H.materialIndex];if(q&&q.visible){const j=y(E,q,A,D);E.onBeforeShadow(s,E,_,S,P,j,H),s.renderBufferDirect(S,null,P,j,E,H),E.onAfterShadow(s,E,_,S,P,j,H)}}}else if(z.visible){const B=y(E,z,A,D);E.onBeforeShadow(s,E,_,S,P,B,null),s.renderBufferDirect(S,null,P,B,E,null),E.onAfterShadow(s,E,_,S,P,B,null)}}const F=E.children;for(let P=0,z=F.length;P<z;P++)M(F[P],_,S,A,R,D)}function b(E){E.target.removeEventListener("dispose",b);for(const S in c){const A=c[S],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function gg(s,t){function e(){let N=!1;const J=new Ee;let $=null;const ft=new Ee(0,0,0,0);return{setMask:function(ot){$!==ot&&!N&&(s.colorMask(ot,ot,ot,ot),$=ot)},setLocked:function(ot){N=ot},setClear:function(ot,dt,Lt,Zt,nt){nt===!0&&(ot*=Zt,dt*=Zt,Lt*=Zt),J.set(ot,dt,Lt,Zt),ft.equals(J)===!1&&(s.clearColor(ot,dt,Lt,Zt),ft.copy(J))},reset:function(){N=!1,$=null,ft.set(-1,0,0,0)}}}function n(){let N=!1,J=!1,$=null,ft=null,ot=null;return{setReversed:function(dt){if(J!==dt){const Lt=t.get("EXT_clip_control");dt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),J=dt;const Zt=ot;ot=null,this.setClear(Zt)}},getReversed:function(){return J},setTest:function(dt){dt?ht(s.DEPTH_TEST):Dt(s.DEPTH_TEST)},setMask:function(dt){$!==dt&&!N&&(s.depthMask(dt),$=dt)},setFunc:function(dt){if(J&&(dt=yu[dt]),ft!==dt){switch(dt){case Ga:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case Va:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case Wa:s.depthFunc(s.EQUAL);break;case Xa:s.depthFunc(s.GEQUAL);break;case qa:s.depthFunc(s.GREATER);break;case Ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ft=dt}},setLocked:function(dt){N=dt},setClear:function(dt){ot!==dt&&(ot=dt,J&&(dt=1-dt),s.clearDepth(dt))},reset:function(){N=!1,$=null,ft=null,ot=null,J=!1}}}function i(){let N=!1,J=null,$=null,ft=null,ot=null,dt=null,Lt=null,Zt=null,nt=null;return{setTest:function(Ft){N||(Ft?ht(s.STENCIL_TEST):Dt(s.STENCIL_TEST))},setMask:function(Ft){J!==Ft&&!N&&(s.stencilMask(Ft),J=Ft)},setFunc:function(Ft,qt,xt){($!==Ft||ft!==qt||ot!==xt)&&(s.stencilFunc(Ft,qt,xt),$=Ft,ft=qt,ot=xt)},setOp:function(Ft,qt,xt){(dt!==Ft||Lt!==qt||Zt!==xt)&&(s.stencilOp(Ft,qt,xt),dt=Ft,Lt=qt,Zt=xt)},setLocked:function(Ft){N=Ft},setClear:function(Ft){nt!==Ft&&(s.clearStencil(Ft),nt=Ft)},reset:function(){N=!1,J=null,$=null,ft=null,ot=null,dt=null,Lt=null,Zt=null,nt=null}}}const r=new e,a=new n,o=new i;let l={};const c=new WeakMap;let h={},f={},u={},d=new WeakMap,p=[],v=null,m=!1,g=null,x=null,y=null,M=null,b=null,E=null,_=null,S=new kt(0,0,0),A=0,R=!1,D=null,L=null,F=null,P=null,z=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,tt=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=tt>=2);let q=null,j={};const gt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),Y=new Ee().fromArray(gt),it=new Ee().fromArray(Rt);function Mt(N,J,$,ft){const ot=new Uint8Array(4),dt=s.createTexture();s.bindTexture(N,dt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Lt=0;Lt<$;Lt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,ft,0,s.RGBA,s.UNSIGNED_BYTE,ot):s.texImage2D(J+Lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ot);return dt}const At={};At[s.TEXTURE_2D]=Mt(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=Mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),At[s.TEXTURE_2D_ARRAY]=Mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=Mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(s.DEPTH_TEST),a.setFunc(Is),st(!1),ut(pl),ht(s.CULL_FACE),Se(on);function ht(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Dt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function ne(N,J){return u[N]!==J?(s.bindFramebuffer(N,J),u[N]=J,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=J),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=J),!0):!1}function It(N,J){let $=p,ft=!1;if(N){$=d.get(J),$===void 0&&($=[],d.set(J,$));const ot=N.textures;if($.length!==ot.length||$[0]!==s.COLOR_ATTACHMENT0){for(let dt=0,Lt=ot.length;dt<Lt;dt++)$[dt]=s.COLOR_ATTACHMENT0+dt;$.length=ot.length,ft=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,ft=!0);ft&&s.drawBuffers($)}function ee(N){return v!==N?(s.useProgram(N),v=N,!0):!1}const Kt={[li]:s.FUNC_ADD,[Yh]:s.FUNC_SUBTRACT,[Zh]:s.FUNC_REVERSE_SUBTRACT};Kt[$h]=s.MIN,Kt[Kh]=s.MAX;const Gt={[ka]:s.ZERO,[Jh]:s.ONE,[Qh]:s.SRC_COLOR,[Bc]:s.SRC_ALPHA,[nu]:s.SRC_ALPHA_SATURATE,[Hc]:s.DST_COLOR,[Gc]:s.DST_ALPHA,[jh]:s.ONE_MINUS_SRC_COLOR,[kc]:s.ONE_MINUS_SRC_ALPHA,[eu]:s.ONE_MINUS_DST_COLOR,[tu]:s.ONE_MINUS_DST_ALPHA,[iu]:s.CONSTANT_COLOR,[su]:s.ONE_MINUS_CONSTANT_COLOR,[ru]:s.CONSTANT_ALPHA,[au]:s.ONE_MINUS_CONSTANT_ALPHA};function Se(N,J,$,ft,ot,dt,Lt,Zt,nt,Ft){if(N===on){m===!0&&(Dt(s.BLEND),m=!1);return}if(m===!1&&(ht(s.BLEND),m=!0),N!==zc){if(N!==g||Ft!==R){if((x!==li||b!==li)&&(s.blendEquation(s.FUNC_ADD),x=li,b=li),Ft)switch(N){case ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ns:s.blendFunc(s.ONE,s.ONE);break;case ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ae("WebGLState: Invalid blending: ",N);break}else switch(N){case ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ml:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",N);break}y=null,M=null,E=null,_=null,S.set(0,0,0),A=0,g=N,R=Ft}return}ot=ot||J,dt=dt||$,Lt=Lt||ft,(J!==x||ot!==b)&&(s.blendEquationSeparate(Kt[J],Kt[ot]),x=J,b=ot),($!==y||ft!==M||dt!==E||Lt!==_)&&(s.blendFuncSeparate(Gt[$],Gt[ft],Gt[dt],Gt[Lt]),y=$,M=ft,E=dt,_=Lt),(Zt.equals(S)===!1||nt!==A)&&(s.blendColor(Zt.r,Zt.g,Zt.b,nt),S.copy(Zt),A=nt),g=N,R=!1}function ge(N,J){N.side===He?Dt(s.CULL_FACE):ht(s.CULL_FACE);let $=N.side===je;J&&($=!$),st($),N.blending===ts&&N.transparent===!1?Se(on):Se(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ft=N.stencilWrite;o.setTest(ft),ft&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_t(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function ut(N){N!==Wh?(ht(s.CULL_FACE),N!==L&&(N===pl?s.cullFace(s.BACK):N===Xh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Dt(s.CULL_FACE),L=N}function bt(N){N!==F&&(W&&s.lineWidth(N),F=N)}function _t(N,J,$){N?(ht(s.POLYGON_OFFSET_FILL),(P!==J||z!==$)&&(P=J,z=$,a.getReversed()&&(J=-J,$=-$),s.polygonOffset(J,$))):Dt(s.POLYGON_OFFSET_FILL)}function Nt(N){N?ht(s.SCISSOR_TEST):Dt(s.SCISSOR_TEST)}function re(N){N===void 0&&(N=s.TEXTURE0+B-1),q!==N&&(s.activeTexture(N),q=N)}function _e(N,J,$){$===void 0&&(q===null?$=s.TEXTURE0+B-1:$=q);let ft=j[$];ft===void 0&&(ft={type:void 0,texture:void 0},j[$]=ft),(ft.type!==N||ft.texture!==J)&&(q!==$&&(s.activeTexture($),q=$),s.bindTexture(N,J||At[N]),ft.type=N,ft.texture=J)}function O(){const N=j[q];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ce(){try{s.compressedTexImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function oe(){try{s.compressedTexImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function Wt(){try{s.texSubImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function ct(){try{s.texSubImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function Ot(){try{s.texStorage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function C(){try{s.texStorage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function T(){try{s.texImage2D(...arguments)}catch(N){ae("WebGLState:",N)}}function k(){try{s.texImage3D(...arguments)}catch(N){ae("WebGLState:",N)}}function et(N){return f[N]!==void 0?f[N]:s.getParameter(N)}function Q(N,J){f[N]!==J&&(s.pixelStorei(N,J),f[N]=J)}function rt(N){Y.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Y.copy(N))}function lt(N){it.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),it.copy(N))}function Z(N,J){let $=c.get(J);$===void 0&&($=new WeakMap,c.set(J,$));let ft=$.get(N);ft===void 0&&(ft=s.getUniformBlockIndex(J,N.name),s.uniformBlockBinding(J,ft,ft),$.set(N,ft))}function K(N,J,$){const ot=c.get(J).get(N);l[ot]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,ot,$),l[ot]=$)}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},q=null,j={},u={},l={},d=new WeakMap,p=[],v=null,m=!1,g=null,x=null,y=null,M=null,b=null,E=null,_=null,S=new kt(0,0,0),A=0,R=!1,D=null,L=null,F=null,P=null,z=null,Y.set(0,0,s.canvas.width,s.canvas.height),it.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Dt,bindFramebuffer:ne,drawBuffers:It,useProgram:ee,setBlending:Se,setMaterial:ge,setFlipSided:st,setCullFace:ut,setLineWidth:bt,setPolygonOffset:_t,setScissorTest:Nt,activeTexture:re,bindTexture:_e,unbindTexture:O,compressedTexImage2D:ce,compressedTexImage3D:oe,texImage2D:T,texImage3D:k,pixelStorei:Q,getParameter:et,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Ot,texStorage3D:C,texSubImage2D:Wt,texSubImage3D:ct,compressedTexSubImage2D:ue,compressedTexSubImage3D:Pt,scissor:rt,viewport:lt,reset:at}}function _g(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap,f=new Set;let u;const d=new WeakMap,p=new Set,v=new FinalizationRegistry(C=>p.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return m?new OffscreenCanvas(C,T):zs("canvas")}function x(C,T,k){let et=1;const Q=Ot(C);if((Q.width>k||Q.height>k)&&(et=k/Math.max(Q.width,Q.height)),et<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const rt=Math.floor(et*Q.width),lt=Math.floor(et*Q.height);u===void 0&&(u=g(rt,lt));const Z=T?g(rt,lt):u;return Z.width=rt,Z.height=lt,Z.getContext("2d").drawImage(C,0,0,rt,lt),Bt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+rt+"x"+lt+")."),Z}else return"data"in C&&Bt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function y(C){return C.generateMipmaps}function M(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,T,k,et,Q,rt=!1){if(C!==null){if(s[C]!==void 0)return s[C];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt;et&&(lt=t.get("EXT_texture_norm16"),lt||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=T;if(T===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),k===s.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),T===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),T===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),k===s.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),T===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),T===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),T===s.RGB&&(k===s.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),k===s.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),T===s.RGBA){const K=rt?Xr:te.getTransfer(Q);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=K===he?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),k===s.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(C,T){let k;return C?T===null||T===Dn||T===Ri?k=s.DEPTH24_STENCIL8:T===sn?k=s.DEPTH32F_STENCIL8:T===Fs&&(k=s.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Dn||T===Ri?k=s.DEPTH_COMPONENT24:T===sn?k=s.DEPTH_COMPONENT32F:T===Fs&&(k=s.DEPTH_COMPONENT16),k}function S(C,T){return y(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ce&&C.minFilter!==Te?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function A(C){const T=new WeakRef(C);n.get(C).__ref=T,p.add(T),v.register(C,T,T)}function R(C){const T=n.get(C).__ref;T!==void 0&&(p.delete(T),v.unregister(T))}function D(C){F(C.target)}function L(C){P(C.target)}function F(C){C.removeEventListener("dispose",D),R(C),B(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&f.delete(C)}function P(C){C.removeEventListener("dispose",L),R(C),tt(C)}function z(){for(const C of p){const T=C.deref();T!==void 0&&(T.isRenderTarget===!0?P(T):F(T))}p.clear(),f.clear()}function B(C){const T=n.get(C);if(T.__webglInit===void 0)return;const k=C.source,et=d.get(k);if(et){const Q=et[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&W(C),Object.keys(et).length===0&&d.delete(k)}n.remove(C)}function W(C){const T=n.get(C);s.deleteTexture(T.__webglTexture);const k=C.source,et=d.get(k);delete et[T.__cacheKey],a.memory.textures--}function tt(C){const T=n.get(C);T.__depthDisposeCallback&&T.__depthDisposeCallback();const k=C.depthTexture;if(k&&k.renderTarget===C&&F(k),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let rt=0;rt<T.__webglFramebuffer[Q].length;rt++)s.deleteFramebuffer(T.__webglFramebuffer[Q][rt]);else s.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)s.deleteFramebuffer(T.__webglFramebuffer[Q]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=C.textures;for(let Q=0,rt=et.length;Q<rt;Q++){const lt=n.get(et[Q]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(et[Q])}n.remove(C)}let H=0;function q(){H=0}function j(){return H}function gt(C){H=C}function Rt(){const C=H;return C>=i.maxTextures&&Bt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,C}function Y(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.mipmapsAutoUpdate),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function it(C,T){const k=n.get(C);if(C.isVideoTexture&&ue(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const et=C.image;if(et===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(k,C,T);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+T)}function Mt(C,T){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ge(k,C,T);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+T)}function At(C,T){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ge(k,C,T);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+T)}function ht(C,T){const k=n.get(C);if(C.version>0&&k.__version!==C.version){st(k,C,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+T)}const Dt={[En]:s.REPEAT,[mn]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},ne={[Ce]:s.NEAREST,[cu]:s.NEAREST_MIPMAP_NEAREST,[Ys]:s.NEAREST_MIPMAP_LINEAR,[Te]:s.LINEAR,[aa]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},It={[fu]:s.NEVER,[jc]:s.ALWAYS,[pu]:s.LESS,[Jc]:s.LEQUAL,[mu]:s.EQUAL,[Qc]:s.GEQUAL,[gu]:s.GREATER,[_u]:s.NOTEQUAL};function ee(C,T){if(T.type===sn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Te||T.magFilter===aa||T.magFilter===Ys||T.magFilter===Wn||T.minFilter===Te||T.minFilter===aa||T.minFilter===Ys||T.minFilter===Wn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Dt[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Dt[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Dt[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ne[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,It[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ce||T.minFilter!==Ys&&T.minFilter!==Wn||T.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Kt(C,T){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",D),A(T));const et=T.source;let Q=d.get(et);Q===void 0&&(Q={},d.set(et,Q));const rt=Y(T);if(rt!==C.__cacheKey){Q[rt]===void 0&&(Q[rt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[rt].usedTimes++;const lt=Q[C.__cacheKey];lt!==void 0&&(Q[C.__cacheKey].usedTimes--,lt.usedTimes===0&&W(T)),C.__cacheKey=rt,C.__webglTexture=Q[rt].texture}return k}function Gt(C,T,k){return Math.floor(Math.floor(C/k)/T)}function Se(C,T,k,et){const rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,k,et,T.data);else{rt.sort((N,J)=>N.start-J.start);let lt=0;for(let N=1;N<rt.length;N++){const J=rt[lt],$=rt[N],ft=J.start+J.count,ot=Gt($.start,T.width,4),dt=Gt(J.start,T.width,4);$.start<=ft+1&&ot===dt&&Gt($.start+$.count-1,T.width,4)===ot?J.count=Math.max(J.count,$.start+$.count-J.start):(++lt,rt[lt]=$)}rt.length=lt+1;const Z=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),at=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let N=0,J=rt.length;N<J;N++){const $=rt[N],ft=Math.floor($.start/4),ot=Math.ceil($.count/4),dt=ft%T.width,Lt=Math.floor(ft/T.width),Zt=ot,nt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(s.TEXTURE_2D,0,dt,Lt,Zt,nt,k,et,T.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function ge(C,T,k){let et=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(et=s.TEXTURE_3D);const Q=Kt(C,T),rt=T.source;e.bindTexture(et,C.__webglTexture,s.TEXTURE0+k);const lt=n.get(rt);if(rt.version!==lt.__version||Q===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const nt=te.getPrimaries(te.workingColorSpace),Ft=T.colorSpace===pn?null:te.getPrimaries(T.colorSpace),qt=T.colorSpace===pn||nt===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let K=x(T.image,!1,i.maxTextureSize);K=Pt(T,K);const at=r.convert(T.format,T.colorSpace),N=r.convert(T.type);let J=E(T.internalFormat,at,N,T.normalized,T.colorSpace,T.isVideoTexture);ee(et,T);let $;const ft=T.mipmaps,ot=T.isVideoTexture!==!0,dt=lt.__version===void 0||Q===!0,Lt=rt.dataReady,Zt=S(T,K);if(T.isDepthTexture)J=_(T.format===Xn,T.type),dt&&(ot?e.texStorage2D(s.TEXTURE_2D,1,J,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,at,N,null));else if(T.isDataTexture)if(ft.length>0){ot&&dt&&e.texStorage2D(s.TEXTURE_2D,Zt,J,ft[0].width,ft[0].height);for(let nt=0,Ft=ft.length;nt<Ft;nt++)$=ft[nt],ot?Lt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,$.width,$.height,at,N,$.data):e.texImage2D(s.TEXTURE_2D,nt,J,$.width,$.height,0,at,N,$.data);T.generateMipmaps=!1}else ot?(dt&&e.texStorage2D(s.TEXTURE_2D,Zt,J,K.width,K.height),Lt&&Se(T,K,at,N)):e.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,at,N,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Zt,J,ft[0].width,ft[0].height,K.depth);for(let nt=0,Ft=ft.length;nt<Ft;nt++)if($=ft[nt],T.format!==yn)if(at!==null)if(ot){if(Lt)if(T.layerUpdates.size>0){const qt=Zl($.width,$.height,T.format,T.type);for(const xt of T.layerUpdates){const de=$.data.subarray(xt*qt/$.data.BYTES_PER_ELEMENT,(xt+1)*qt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,xt,$.width,$.height,1,at,de)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,$.width,$.height,K.depth,at,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,J,$.width,$.height,K.depth,0,$.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?Lt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,$.width,$.height,K.depth,at,N,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,J,$.width,$.height,K.depth,0,at,N,$.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ot&&dt&&e.texStorage2D(s.TEXTURE_2D,Zt,J,ft[0].width,ft[0].height);for(let nt=0,Ft=ft.length;nt<Ft;nt++)$=ft[nt],T.format!==yn?at!==null?ot?Lt&&e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,$.width,$.height,at,$.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,J,$.width,$.height,0,$.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?Lt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,$.width,$.height,at,N,$.data):e.texImage2D(s.TEXTURE_2D,nt,J,$.width,$.height,0,at,N,$.data)}else if(T.isDataArrayTexture)if(ot){if(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Zt,J,K.width,K.height,K.depth),Lt)if(T.layerUpdates.size>0){const nt=Zl(K.width,K.height,T.format,T.type);for(const Ft of T.layerUpdates){const qt=K.data.subarray(Ft*nt/K.data.BYTES_PER_ELEMENT,(Ft+1)*nt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ft,K.width,K.height,1,at,N,qt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,at,N,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,at,N,K.data);else if(T.isData3DTexture)ot?(dt&&e.texStorage3D(s.TEXTURE_3D,Zt,J,K.width,K.height,K.depth),Lt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,at,N,K.data)):e.texImage3D(s.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,at,N,K.data);else if(T.isFramebufferTexture){if(dt)if(ot)e.texStorage2D(s.TEXTURE_2D,Zt,J,K.width,K.height);else{let nt=K.width,Ft=K.height;for(let qt=0;qt<Zt;qt++)e.texImage2D(s.TEXTURE_2D,qt,J,nt,Ft,0,at,N,null),nt>>=1,Ft>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const nt=s.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),K.parentNode!==nt){nt.appendChild(K),f.add(T),nt.onpaint=Ft=>{const qt=Ft.changedElements;for(const xt of f)qt.includes(xt.image)&&(xt.needsUpdate=!0)},nt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const qt=s.RGBA,xt=s.RGBA,de=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,qt,xt,de,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ft.length>0){if(ot&&dt){const nt=Ot(ft[0]);e.texStorage2D(s.TEXTURE_2D,Zt,J,nt.width,nt.height)}for(let nt=0,Ft=ft.length;nt<Ft;nt++)$=ft[nt],ot?Lt&&e.texSubImage2D(s.TEXTURE_2D,nt,0,0,at,N,$):e.texImage2D(s.TEXTURE_2D,nt,J,at,N,$);T.generateMipmaps=!1}else if(ot){if(dt){const nt=Ot(K);e.texStorage2D(s.TEXTURE_2D,Zt,J,nt.width,nt.height)}Lt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at,N,K)}else e.texImage2D(s.TEXTURE_2D,0,J,at,N,K);y(T)&&T.mipmapsAutoUpdate===!0&&M(et),lt.__version=rt.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function st(C,T,k){if(T.image.length!==6)return;const et=Kt(C,T),Q=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const rt=n.get(Q);if(Q.version!==rt.__version||et===!0){e.activeTexture(s.TEXTURE0+k);const lt=te.getPrimaries(te.workingColorSpace),Z=T.colorSpace===pn?null:te.getPrimaries(T.colorSpace),K=T.colorSpace===pn||lt===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const at=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,J=[];for(let xt=0;xt<6;xt++)!at&&!N?J[xt]=x(T.image[xt],!0,i.maxCubemapSize):J[xt]=N?T.image[xt].image:T.image[xt],J[xt]=Pt(T,J[xt]);const $=J[0],ft=r.convert(T.format,T.colorSpace),ot=r.convert(T.type);let dt=E(T.internalFormat,ft,ot,T.normalized,T.colorSpace);const Lt=T.isVideoTexture!==!0,Zt=rt.__version===void 0||et===!0,nt=Q.dataReady;let Ft=S(T,$);ee(s.TEXTURE_CUBE_MAP,T);let qt;if(T.isDepthTexture){if(dt=_(T.format===Xn,T.type),Zt)if(Lt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,dt,$.width,$.height);else for(let xt=0;xt<6;xt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,dt,$.width,$.height,0,ft,ot,null)}else if(at){Lt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,dt,$.width,$.height);for(let xt=0;xt<6;xt++){qt=J[xt].mipmaps;for(let de=0;de<qt.length;de++){const Ie=qt[de];T.format!==yn?ft!==null?Lt?nt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de,0,0,Ie.width,Ie.height,ft,Ie.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de,dt,Ie.width,Ie.height,0,Ie.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de,0,0,Ie.width,Ie.height,ft,ot,Ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de,dt,Ie.width,Ie.height,0,ft,ot,Ie.data)}}}else{if(qt=T.mipmaps,Lt&&Zt){qt.length>0&&Ft++;const xt=Ot(J[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Ft,dt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(N){Lt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,J[xt].width,J[xt].height,ft,ot,J[xt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,dt,J[xt].width,J[xt].height,0,ft,ot,J[xt].data);for(let de=0;de<qt.length;de++){const Kn=qt[de].image[xt].image;Lt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de+1,0,0,Kn.width,Kn.height,ft,ot,Kn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de+1,dt,Kn.width,Kn.height,0,ft,ot,Kn.data)}}else{Lt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,ft,ot,J[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,dt,ft,ot,J[xt]);for(let de=0;de<qt.length;de++){const Ie=qt[de];Lt?nt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de+1,0,0,ft,ot,Ie.image[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,de+1,dt,ft,ot,Ie.image[xt])}}}y(T)&&T.mipmapsAutoUpdate===!0&&M(s.TEXTURE_CUBE_MAP),rt.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ut(C,T,k,et,Q,rt){const lt=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),K=E(k.internalFormat,lt,Z,k.normalized,k.colorSpace),at=n.get(T),N=n.get(k);if(N.__renderTarget=T,!at.__hasExternalTextures){const J=Math.max(1,T.width>>rt),$=Math.max(1,T.height>>rt);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,rt,K,J,$,T.depth,0,lt,Z,null):e.texImage2D(Q,rt,K,J,$,0,lt,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),ct(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,Q,N.__webglTexture,0,Wt(T)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,Q,N.__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(C,T,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer){const et=T.depthTexture,Q=et&&et.isDepthTexture?et.type:null,rt=_(T.stencilBuffer,Q),lt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ct(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(T),rt,T.width,T.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(T),rt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,rt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,C)}else{const et=T.textures;for(let Q=0;Q<et.length;Q++){const rt=et[Q],lt=r.convert(rt.format,rt.colorSpace),Z=r.convert(rt.type),K=E(rt.internalFormat,lt,Z,rt.normalized,rt.colorSpace);ct(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(T),K,T.width,T.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(T),K,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,K,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _t(C,T,k){const et=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(T.depthTexture);Q.__renderTarget=T;const rt=et?T.depthTexture.image[0]:T.depthTexture.image;(!Q.__webglTexture||rt.width!==T.width||rt.height!==T.height)&&(rt.width=T.width,rt.height=T.height,T.depthTexture.needsUpdate=!0),et?ht(T.depthTexture,0):it(T.depthTexture,0);const lt=Q.__webglTexture,Z=Wt(T),K=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,at=T.depthTexture.format===Xn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===pi)ct(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,K,lt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,at,K,lt,0);else if(T.depthTexture.format===Xn)ct(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,at,K,lt,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,at,K,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(C){const T=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const et=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),et){const Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,et.removeEventListener("dispose",Q)};et.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=et}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(k)for(let et=0;et<6;et++)_t(T.__webglFramebuffer[et],C,et);else C.texture.mipmaps.length>0?_t(T.__webglFramebuffer[0],C,0):_t(T.__webglFramebuffer,C,0);else if(k){T.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[et]),T.__webglDepthbuffer[et]===void 0)T.__webglDepthbuffer[et]=s.createRenderbuffer(),bt(T.__webglDepthbuffer[et],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,rt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),bt(T.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function re(C,T,k){const et=n.get(C);T!==void 0&&ut(et.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Nt(C)}function _e(C){const T=C.texture,k=n.get(C),et=n.get(T);C.addEventListener("dispose",L),A(C);const Q=C.textures,rt=C.isWebGLCubeRenderTarget===!0,lt=Q.length>1;if(lt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=T.version,a.memory.textures++),rt){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(T.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let K=0;K<T.mipmaps.length;K++)k.__webglFramebuffer[Z][K]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(T.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<T.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(lt)for(let Z=0,K=Q.length;Z<K;Z++){const at=n.get(Q[Z]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&ct(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){const K=Q[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const at=r.convert(K.format,K.colorSpace),N=r.convert(K.type),J=E(K.internalFormat,at,N,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),$=Wt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,J,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),ee(s.TEXTURE_CUBE_MAP,T);for(let Z=0;Z<6;Z++)if(T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)ut(k.__webglFramebuffer[Z][K],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else ut(k.__webglFramebuffer[Z],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);y(T)?M(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}else if(lt){for(let Z=0,K=Q.length;Z<K;Z++){const at=Q[Z],N=n.get(at);let J=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,N.__webglTexture),ee(J,at),ut(k.__webglFramebuffer,C,at,s.COLOR_ATTACHMENT0+Z,J,0),y(at)&&M(J)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,et.__webglTexture),ee(Z,T),T.mipmaps.length>0)for(let K=0;K<T.mipmaps.length;K++)ut(k.__webglFramebuffer[K],C,T,s.COLOR_ATTACHMENT0,Z,K);else ut(k.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,Z,0);y(T)?M(Z):T.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&Nt(C)}function O(C){const T=C.textures;for(let k=0,et=T.length;k<et;k++){const Q=T[k];if(y(Q)&&Q.mipmapsAutoUpdate===!0){const rt=b(C),lt=n.get(Q).__webglTexture;e.bindTexture(rt,lt),M(rt),e.unbindTexture()}}}const ce=[];function oe(C){if(C.samples>0){if(ct(C)===!1){const T=C.textures,k=C.width,et=C.height;let Q=s.COLOR_BUFFER_BIT;const rt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(C),Z=T.length>1;if(Z)for(let at=0;at<T.length;at++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let at=0;at<T.length;at++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[at]);const N=n.get(T[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,k,et,0,0,k,et,Q,s.NEAREST),l===!0&&(ce.length=0,ce.push(s.COLOR_ATTACHMENT0+at),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ce.push(rt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let at=0;at<T.length;at++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,lt.__webglColorRenderbuffer[at]);const N=n.get(T[at]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,N,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const T=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Wt(C){return Math.min(i.maxSamples,C.samples)}function ct(C){const T=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ue(C){const T=a.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function Pt(C,T){const k=C.colorSpace,et=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==ss&&k!==pn&&(te.getTransfer(k)===he?(et!==yn||Q!==ln)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",k)),T}function Ot(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Rt,this.resetTextureUnits=q,this.getTextureUnits=j,this.setTextureUnits=gt,this.setTexture2D=it,this.setTexture2DArray=Mt,this.setTexture3D=At,this.setTextureCube=ht,this.rebindTextures=re,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ct,this.dispose=z}function xg(s,t){function e(n,i=pn){let r;const a=te.getTransfer(i);if(n===ln)return s.UNSIGNED_BYTE;if(n===Bo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Zc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xc)return s.BYTE;if(n===qc)return s.SHORT;if(n===Fs)return s.UNSIGNED_SHORT;if(n===zo)return s.INT;if(n===Dn)return s.UNSIGNED_INT;if(n===sn)return s.FLOAT;if(n===Pe)return s.HALF_FLOAT;if(n===$c)return s.ALPHA;if(n===Kc)return s.RGB;if(n===yn)return s.RGBA;if(n===pi)return s.DEPTH_COMPONENT;if(n===Xn)return s.DEPTH_STENCIL;if(n===Jr)return s.RED;if(n===Go)return s.RED_INTEGER;if(n===Ci)return s.RG;if(n===Ho)return s.RG_INTEGER;if(n===Vo)return s.RGBA_INTEGER;if(n===Nr||n===Ir||n===Ur||n===Fr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$a||n===Ka||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$a)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===to||n===eo||n===no||n===io||n===Hr||n===so)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ja||n===to)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===eo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===no)return r.COMPRESSED_R11_EAC;if(n===io)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Hr)return r.COMPRESSED_RG11_EAC;if(n===so)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ro)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ao)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ho)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===po)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===So||n===yo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mo)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===So)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bo||n===Eo||n===Vr||n===To)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
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

}`;class Sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new dh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new be({vertexShader:vg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yg extends Li{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null;const v=typeof XRWebGLBinding<"u",m=new Sg,g={},x=e.getContextAttributes();let y=null,M=null;const b=[],E=[],_=new zt;let S=null,A=null;const R=new fn;R.viewport=new Ee;const D=new fn;D.viewport=new Ee;const L=[R,D],F=new Dd;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=b[Y];return it===void 0&&(it=new fa,b[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=b[Y];return it===void 0&&(it=new fa,b[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=b[Y];return it===void 0&&(it=new fa,b[Y]=it),it.getHandSpace()};function B(Y){const it=E.indexOf(Y.inputSource);if(it===-1)return;const Mt=b[it];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",tt);for(let Y=0;Y<b.length;Y++){const it=E[Y];it!==null&&(E[Y]=null,b[Y].disconnect(it))}P=null,z=null,m.reset();for(const Y in g)delete g[Y];if(t.setRenderTarget(y),d=null,u=null,f=null,i=null,M=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),A!==null){const Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(i,e)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",tt),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,At=null,ht=null;x.depth&&(ht=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=x.stencil?Xn:pi,At=x.stencil?Ri:Dn);const Dt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Dt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ze(u.textureWidth,u.textureHeight,{format:yn,type:ln,depthTexture:new Di(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Mt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ze(d.framebufferWidth,d.framebufferHeight,{format:yn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(Y){for(let it=0;it<Y.removed.length;it++){const Mt=Y.removed[it],At=E.indexOf(Mt);At>=0&&(E[At]=null,b[At].disconnect(Mt))}for(let it=0;it<Y.added.length;it++){const Mt=Y.added[it];let At=E.indexOf(Mt);if(At===-1){for(let Dt=0;Dt<b.length;Dt++)if(Dt>=E.length){E.push(Mt),At=Dt;break}else if(E[Dt]===null){E[Dt]=Mt,At=Dt;break}if(At===-1)break}const ht=b[At];ht&&ht.connect(Mt)}}function H(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let it=Y.near,Mt=Y.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),F.near=D.near=R.near=it,F.far=D.far=R.far=Mt,(P!==F.near||z!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,z=F.far),F.layers.mask=Y.layers.mask|6,R.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;const At=Y.parent,ht=F.cameras;H(F,At);for(let Dt=0;Dt<ht.length;Dt++)H(ht[Dt],At);F.projectionMatrix.copy(R.projectionMatrix),F.projectionMatrixInverse.copy(R.projectionMatrixInverse),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),q(Y,F,At)};function q(Y,it,Mt){Mt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return g[Y]};let j=null;function gt(Y,it){if(h=it.getViewerPose(c||a),p=it,h!==null){const Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let At=!1;Mt.length!==F.cameras.length&&(F.cameras.length=0,At=!0);for(let It=0;It<Mt.length;It++){const ee=Mt[It];let Kt=null;if(d!==null)Kt=d.getViewport(ee);else{const Se=f.getViewSubImage(u,ee);Kt=Se.viewport,It===0&&(t.setRenderTargetTextures(M,Se.colorTexture,Se.depthStencilTexture),t.setRenderTarget(M))}let Gt=L[It];Gt===void 0&&(Gt=new fn,Gt.layers.enable(It),Gt.viewport=new Ee,L[It]=Gt),Gt.matrix.fromArray(ee.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(ee.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),It===0&&(F.matrix.copy(Gt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),At===!0&&F.cameras.push(Gt)}const ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const It=f.getDepthInformation(Mt[0]);It&&It.isValid&&It.texture&&m.init(It,i.renderState)}if(ht&&ht.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let It=0;It<Mt.length;It++){const ee=Mt[It].camera;if(ee){let Kt=g[ee];Kt||(Kt=new dh,g[ee]=Kt);const Gt=f.getCameraImage(ee);Kt.sourceTexture=Gt}}}}for(let Mt=0;Mt<b.length;Mt++){const At=E[Mt],ht=b[Mt];At!==null&&ht!==void 0&&ht.update(At,it,c||a)}j&&j(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),p=null}const Rt=new xh;Rt.setAnimationLoop(gt),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}const bg=new se,Rh=new Vt;Rh.set(-1,0,0,0,1,0,0,0,1);function Eg(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,fh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,y,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===je&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===je&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),y=x.envMap,M=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(bg.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Rh),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===je&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tg(s,t,e,n){let i={},r={};function a(x,y){const M=y.program;n.uniformBlockBinding(x,M,i[x.id])}function o(x,y){let M=i[x.id];M===void 0&&(p(x),M=l(x),i[x.id]=M,x.addEventListener("dispose",m));const b=y.program;n.updateUBOMapping(x,b);const E=t.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){const y=s.createBuffer(),M=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,b),s.bindBuffer(s.UNIFORM_BUFFER,null),y}function c(x){const y=i[x.id],M=x.uniforms,b=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,_=M.length;E<_;E++){const S=M[E];if(Array.isArray(S))for(let A=0,R=S.length;A<R;A++)h(S[A],E,A,b);else h(S,E,0,b)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,y,M,b){if(u(x,y,M,b)===!0){const E=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let A=0;A<_.length;A++){const R=_[A],D=v(R,!0);f(R,x.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,x.__data)}}function f(x,y,M){typeof x=="number"||typeof x=="boolean"?y[M]=x:x.isMatrix3?(y[M]=x.elements[0],y[M+1]=x.elements[1],y[M+2]=x.elements[2],y[M+3]=0,y[M+4]=x.elements[3],y[M+5]=x.elements[4],y[M+6]=x.elements[5],y[M+7]=0,y[M+8]=x.elements[6],y[M+9]=x.elements[7],y[M+10]=x.elements[8],y[M+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-M),M):x.toArray(y,M)}function u(x,y,M,b){const E=x.value,_=y+"_"+M;if(Array.isArray(E)){b[_]===void 0&&(b[_]=[]);const S=b[_];let A=!1;for(let R=0;R<E.length;R++)d(E[R],S,R)===!0&&(A=!0);return A}return d(E,b,_)}function d(x,y,M){if(y[M]===void 0)return typeof x=="number"||typeof x=="boolean"?y[M]=x:ArrayBuffer.isView(x)?y[M]=x.slice():y[M]=x.clone(),!0;{const b=y[M];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return y[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function p(x){const y=x.uniforms;let M=0;const b=16;for(let _=0,S=y.length;_<S;_++){const A=Array.isArray(y[_])?y[_]:[y[_]];for(let R=0,D=A.length;R<D;R++){const L=A[R],F=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(y[_])||Array.isArray(L.value);let z=M;for(let W=0,tt=F.length;W<tt;W++){const H=F[W],q=v(H,P),j=M%b,gt=j%q.boundary,Rt=j+gt;M+=gt,Rt!==0&&b-Rt<q.storage&&(M+=b-Rt),W===0&&(z=M),M+=q.storage}const B=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new B((M-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}const E=M%b;return E>0&&(M+=b-E),x.__size=M,x.__cache={},this}function v(x,y){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(x){const y=x.target;y.removeEventListener("dispose",m),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(const x in i)s.deleteBuffer(i[x]);i={},r={}}return{bind:a,update:o,dispose:g}}const wg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function Ag(){return wn===null&&(wn=new Pi(wg,16,16,Ci,Pe),wn.name="DFG_LUT",wn.minFilter=Te,wn.magFilter=Te,wn.wrapS=mn,wn.wrapT=mn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class Rg{constructor(t={}){const{canvas:e=Mu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ln}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const v=d,m=new Set([Vo,Ho,Go]),g=new Set([ln,Dn,Fs,Ri,Bo,ko]),x=new Uint32Array(4),y=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let b=null,E=null;const _=[],S=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,L=null,F=null,P=null,z=null;this._outputColorSpace=Qe;let B=0,W=0,tt=null,H=-1,q=null;const j=new Ee,gt=new Ee;let Rt=null;const Y=new kt(0);let it=0,Mt=e.width,At=e.height,ht=1,Dt=null,ne=null;const It=new Ee(0,0,Mt,At),ee=new Ee(0,0,Mt,At);let Kt=!1;const Gt=new ks,Se=new Zo;let ge=!1,st=!1;const ut=new se,bt=new U,_t=new Ee,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function _e(){return tt===null?ht:1}let O=n;function ce(w,I){return e.getContext(w,I)}let oe,Wt,ct,ue,Pt,Ot,C,T,k,et,Q,rt,lt,Z,K,at,N,J,$,ft,ot,dt,Lt;try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),O===null){const I="webgl2";if(O=ce(I,w),O===null)throw ce(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(w){throw e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ae("WebGLRenderer: "+w.message),w}function Zt(){oe=new Dm(O),oe.init(),ot=new xg(O,oe),Wt=new Mm(O,oe,t,ot),ct=new gg(O,oe),Wt.reversedDepthBuffer&&u&&ct.buffers.depth.setReversed(!0),F=O.createFramebuffer(),P=O.createFramebuffer(),z=O.createFramebuffer(),ue=new Im(O),Pt=new ng,Ot=new _g(O,oe,ct,Pt,Wt,ot,ue),C=new Pm(R),T=new Ud(O),dt=new xm(O,T),k=new Lm(O,T,ue,dt),et=new Fm(O,k,T,dt,ue),J=new Um(O,Wt,Ot),K=new Sm(Pt),Q=new eg(R,C,oe,Wt,dt,K),rt=new Eg(R,Pt),lt=new sg,Z=new hg(oe),N=new _m(R,C,ct,et,p,l),at=new mg(R,et,Wt),Lt=new Tg(O,ue,Wt,ct),$=new vm(O,oe,ue),ft=new Nm(O,oe,ue),ue.programs=Q.programs,R.capabilities=Wt,R.extensions=oe,R.properties=Pt,R.renderLists=lt,R.shadowMap=at,R.state=ct,R.info=ue}v!==ln&&(A=new zm(v,e.width,e.height,o,i,r));const nt=new yg(R,O);this.xr=nt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(w){w!==void 0&&(ht=w,this.setSize(Mt,At,!1))},this.getSize=function(w){return w.set(Mt,At)},this.setSize=function(w,I,X=!0){if(nt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=w,At=I,e.width=Math.floor(w*ht),e.height=Math.floor(I*ht),X===!0&&(e.style.width=w+"px",e.style.height=I+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(Mt*ht,At*ht).floor()},this.setDrawingBufferSize=function(w,I,X){Mt=w,At=I,ht=X,e.width=Math.floor(w*X),e.height=Math.floor(I*X),this.setViewport(0,0,w,I)},this.setEffects=function(w){if(v===ln){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let I=0;I<w.length;I++)if(w[I].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(j)},this.getViewport=function(w){return w.copy(It)},this.setViewport=function(w,I,X,G){w.isVector4?It.set(w.x,w.y,w.z,w.w):It.set(w,I,X,G),ct.viewport(j.copy(It).multiplyScalar(_e()).round())},this.getScissor=function(w){return w.copy(ee)},this.setScissor=function(w,I,X,G){w.isVector4?ee.set(w.x,w.y,w.z,w.w):ee.set(w,I,X,G),ct.scissor(gt.copy(ee).multiplyScalar(_e()).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){ct.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){Dt=w},this.setTransparentSort=function(w){ne=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,I=!0,X=!0){let G=0;if(w){let V=!1;if(tt!==null){const mt=tt.texture.format;V=m.has(mt)}if(V){const mt=tt.texture.type,Et=g.has(mt),pt=N.getClearColor(),St=N.getClearAlpha(),Ct=pt.r,Ht=pt.g,Qt=pt.b;Et?(x[0]=Ct,x[1]=Ht,x[2]=Qt,x[3]=St,O.clearBufferuiv(O.COLOR,0,x)):(y[0]=Ct,y[1]=Ht,y[2]=Qt,y[3]=St,O.clearBufferiv(O.COLOR,0,y))}else G|=O.COLOR_BUFFER_BIT}I&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),N.dispose(),lt.dispose(),Z.dispose(),Ot.dispose(),Pt.dispose(),C.dispose(),et.dispose(),k.dispose(),dt.dispose(),Lt.dispose(),Q.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",sl),nt.removeEventListener("sessionend",rl),gi.stop()};function Ft(w){w.preventDefault(),vl("WebGLRenderer: Context Lost."),D=!0}function qt(){vl("WebGLRenderer: Context Restored."),D=!1;const w=ue.autoReset,I=at.enabled,X=at.autoUpdate,G=at.needsUpdate,V=at.type;Zt(),ue.autoReset=w,at.enabled=I,at.autoUpdate=X,at.needsUpdate=G,at.type=V}function xt(w){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function de(w){const I=w.target;I.removeEventListener("dispose",de),Ie(I)}function Ie(w){Kn(w),Pt.remove(w)}function Kn(w){const I=Pt.get(w).programs;I!==void 0&&(I.forEach(function(X){Q.releaseProgram(X)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,X,G,V,mt){I===null&&(I=Nt);const Et=V.isMesh&&V.matrixWorld.determinantAffine()<0,pt=Gh(w,I,X,G,V);ct.setMaterial(G,Et);let St=X.index,Ct=1;if(G.wireframe===!0){if(St=k.getWireframeAttribute(X),St===void 0)return;Ct=2}const Ht=X.drawRange,Qt=X.attributes.position;let Tt=Ht.start*Ct,jt=(Ht.start+Ht.count)*Ct;mt!==null&&(Tt=Math.max(Tt,mt.start*Ct),jt=Math.min(jt,(mt.start+mt.count)*Ct)),St!==null?(Tt=Math.max(Tt,0),jt=Math.min(jt,St.count)):Qt!=null&&(Tt=Math.max(Tt,0),jt=Math.min(jt,Qt.count));const we=jt-Tt;if(we<0||we===1/0)return;dt.setup(V,G,pt,X,St);let xe,pe=$;if(St!==null&&(xe=T.get(St),pe=ft,pe.setIndex(xe)),V.isMesh)G.wireframe===!0?(ct.setLineWidth(G.wireframeLinewidth*_e()),pe.setMode(O.LINES)):pe.setMode(O.TRIANGLES);else if(V.isLine){let We=G.linewidth;We===void 0&&(We=1),ct.setLineWidth(We*_e()),V.isLineSegments?pe.setMode(O.LINES):V.isLineLoop?pe.setMode(O.LINE_LOOP):pe.setMode(O.LINE_STRIP)}else V.isPoints?pe.setMode(O.POINTS):V.isSprite&&pe.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const We=V._multiDrawStarts,wt=V._multiDrawCounts,$e=V._multiDrawCount,le=St?T.get(St).bytesPerElement:1,_i=Pt.get(G).currentProgram.getUniforms();for(let Xe=0;Xe<$e;Xe++)_i.setValue(O,"_gl_DrawID",Xe),pe.render(We[Xe]/le,wt[Xe])}else if(V.isInstancedMesh)pe.renderInstances(Tt,we,V.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wt=Math.min(X.instanceCount,We);pe.renderInstances(Tt,we,wt)}else pe.render(Tt,we)};function il(w,I,X,G){L!==null&&w.isNodeMaterial&&L.setObject(G,w),ge===!0&&K.setState(w,X,!1),w.transparent===!0&&w.side===He&&w.forceSinglePass===!1?(w.side=je,w.needsUpdate=!0,us(w,I,G),w.side=Ai,w.needsUpdate=!0,us(w,I,G),w.side=He):us(w,I,G)}this.compile=function(w,I,X=null){X===null&&(X=w),L!==null&&L.renderStart(w,I,X),E=Z.get(X),E.init(I),S.push(E),X.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),w!==X&&w.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),st=this.localClippingEnabled,ge=K.init(this.clippingPlanes,st),ge===!0&&K.setGlobalState(this.clippingPlanes,I),L!==null&&at.render(E.state.shadowsArray,X,I);const G=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const mt=V.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const pt=mt[Et];il(pt,X,I,V),G.add(pt)}else il(mt,X,I,V),G.add(mt)}),E=S.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(w,I,X=null){const G=this.compile(w,I,X);return new Promise(V=>{function mt(){if(G.forEach(function(Et){const St=Pt.get(Et).currentProgram;(St===void 0||St.isReady())&&G.delete(Et)}),G.size===0){V(w);return}setTimeout(mt,10)}oe.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ia=null;function Bh(w){ia&&ia(w)}function sl(){gi.stop()}function rl(){gi.start()}const gi=new xh;gi.setAnimationLoop(Bh),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){ia=w,nt.setAnimationLoop(w),w===null?gi.stop():gi.start()},nt.addEventListener("sessionstart",sl),nt.addEventListener("sessionend",rl),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(w,I);const X=nt.enabled===!0&&nt.isPresenting===!0,G=A!==null&&(tt===null||X)&&A.begin(R,tt);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(I),I=nt.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,I,tt),E=Z.get(w,S.length),E.init(I),E.state.textureUnits=Ot.getTextureUnits(),S.push(E),ut.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Se.setFromArrayCamera(I):Gt.setFromProjectionMatrix(ut,bn,I.reversedDepth),st=this.localClippingEnabled,ge=K.init(this.clippingPlanes,st),b=lt.get(w,_.length),b.init(),_.push(b),this.info.render.frame++,nt.enabled===!0&&nt.isPresenting===!0){const Et=R.xr.getDepthSensingMesh();Et!==null&&sa(Et,I,-1/0,R.sortObjects)}sa(w,I,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(E.state.lightsArray),R.sortObjects===!0&&b.sort(Dt,ne),re=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,re&&N.addToRenderList(b,w),this.info.autoReset===!0&&this.info.reset(),ge===!0&&K.beginShadows();const V=E.state.shadowsArray;if(at.render(V,w,I),ge===!0&&K.endShadows(),(G&&A.hasRenderPass())===!1){const Et=b.opaque,pt=b.transmissive;if(E.setupLights(),I.isArrayCamera){const St=I.cameras;if(pt.length>0)for(let Ct=0,Ht=St.length;Ct<Ht;Ct++){const Qt=St[Ct];ol(Et,pt,w,Qt)}re&&N.render(w);for(let Ct=0,Ht=St.length;Ct<Ht;Ct++){const Qt=St[Ct];al(b,w,Qt,Qt.viewport)}}else pt.length>0&&ol(Et,pt,w,I),re&&N.render(w),al(b,w,I)}tt!==null&&W===0&&(Ot.updateMultisampleRenderTarget(tt),Ot.updateRenderTargetMipmap(tt)),G&&A.end(R),w.isScene===!0&&w.onAfterRender(R,w,I),dt.resetDefaultState(),H=-1,q=null,S.pop(),S.length>0?(E=S[S.length-1],Ot.setTextureUnits(E.state.textureUnits),ge===!0&&K.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?b=_[_.length-1]:b=null,L!==null&&L.renderEnd()};function sa(w,I,X,G){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){const Et=I.isArrayCamera?Se:Gt;if(!w.frustumCulled||w.intersectsFrustum(Et)){G&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ut);const pt=et.update(w),St=w.material;St.visible&&b.push(w,pt,St,X,_t.z,null,I)}}else if(w.isMesh||w.isLine||w.isPoints){const Et=I.isArrayCamera?Se:Gt;if(!w.frustumCulled||w.intersectsFrustum(Et)){const pt=et.update(w),St=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),_t.copy(pt.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(ut)),Array.isArray(St)){const Ct=pt.groups;for(let Ht=0,Qt=Ct.length;Ht<Qt;Ht++){const Tt=Ct[Ht],jt=St[Tt.materialIndex];jt&&jt.visible&&b.push(w,pt,jt,X,_t.z,Tt,I)}}else St.visible&&b.push(w,pt,St,X,_t.z,null,I)}}}const mt=w.children;for(let Et=0,pt=mt.length;Et<pt;Et++)sa(mt[Et],I,X,G)}function al(w,I,X,G){const{opaque:V,transmissive:mt,transparent:Et}=w;E.setupLightsView(X),ge===!0&&K.setGlobalState(R.clippingPlanes,X),G&&ct.viewport(j.copy(G)),V.length>0&&Xs(V,I,X),mt.length>0&&Xs(mt,I,X),Et.length>0&&Xs(Et,I,X),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function ol(w,I,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Tt=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Ze(1,1,{generateMipmaps:!0,type:Tt?Pe:ln,minFilter:Wn,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:te.workingColorSpace})}const mt=E.state.transmissionRenderTarget[G.id],Et=G.viewport||j;mt.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);const pt=R.getRenderTarget(),St=R.getActiveCubeFace(),Ct=R.getActiveMipmapLevel();R.setRenderTarget(mt),R.getClearColor(Y),it=R.getClearAlpha(),it<1&&R.setClearColor(16777215,.5),R.clear(),re&&N.render(X);const Ht=R.toneMapping;R.toneMapping=Zn;const Qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),ge===!0&&K.setGlobalState(R.clippingPlanes,G),Xs(w,X,G),Ot.updateMultisampleRenderTarget(mt),Ot.updateRenderTargetMipmap(mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let jt=0,we=I.length;jt<we;jt++){const xe=I[jt],{object:pe,geometry:We,material:wt,group:$e}=xe;if(wt.side===He&&pe.layers.test(G.layers)){const le=wt.side;wt.side=je,wt.needsUpdate=!0,ll(pe,X,G,We,wt,$e),wt.side=le,wt.needsUpdate=!0,Tt=!0}}Tt===!0&&(Ot.updateMultisampleRenderTarget(mt),Ot.updateRenderTargetMipmap(mt))}R.setRenderTarget(pt,St,Ct),R.setClearColor(Y,it),Qt!==void 0&&(G.viewport=Qt),R.toneMapping=Ht}function Xs(w,I,X){const G=I.isScene===!0?I.overrideMaterial:null;for(let V=0,mt=w.length;V<mt;V++){const Et=w[V],{object:pt,geometry:St,group:Ct}=Et;let Ht=Et.material;Ht.allowOverride===!0&&G!==null&&(Ht=G),pt.layers.test(X.layers)&&ll(pt,I,X,St,Ht,Ct)}}function ll(w,I,X,G,V,mt){L!==null&&V.isNodeMaterial&&L.setObject(w,V),w.onBeforeRender(R,I,X,G,V,mt),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(R,I,X,G,w,mt),V.transparent===!0&&V.side===He&&V.forceSinglePass===!1?(V.side=je,V.needsUpdate=!0,R.renderBufferDirect(X,I,G,V,w,mt),V.side=Ai,V.needsUpdate=!0,R.renderBufferDirect(X,I,G,V,w,mt),V.side=He):R.renderBufferDirect(X,I,G,V,w,mt),w.onAfterRender(R,I,X,G,V,mt)}function cl(w){let I=0;for(const X of w)X.texture!==null&&I++;return I}function us(w,I,X){I.isScene!==!0&&(I=Nt);const G=Pt.get(w),V=E.state.lights,mt=E.state.shadowsArray,Et=V.state.version,pt=Q.getParameters(w,V.state,mt,I,X,E.state.lightProbeGridArray),St=Q.getProgramCacheKey(pt);let Ct=G.programs;G.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const Ht=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;G.envMap=C.get(w.envMap||G.environment,Ht),G.envMapRotation=G.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",de),Ct=new Map,G.programs=Ct,G.programVariants=new Map);let Qt=Ct.get(St);if(Qt!==void 0){if(G.currentProgram===Qt&&G.lightsStateVersion===Et)return ul(w,pt),Qt}else pt.uniforms=Q.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,X,pt),w.onBeforeCompile(pt,R),Qt=Q.acquireProgram(pt,St),Ct.set(St,Qt),G.uniforms=pt.uniforms;const Tt=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Tt.clippingPlanes=K.uniform),ul(w,pt),G.needsLights=Vh(w),G.lightsStateVersion=Et,G.needsLights&&(Tt.ambientLightColor.value=V.state.ambient,Tt.lightProbe.value=V.state.probe,Tt.sunLights.value=V.state.sun,Tt.sunLightShadows.value=V.state.sunShadow,Tt.directionalLights.value=V.state.directional,Tt.directionalLightShadows.value=V.state.directionalShadow,Tt.spotLights.value=V.state.spot,Tt.spotLightShadows.value=V.state.spotShadow,Tt.rectAreaLights.value=V.state.rectArea,Tt.ltc_1.value=V.state.rectAreaLTC1,Tt.ltc_2.value=V.state.rectAreaLTC2,Tt.pointLights.value=V.state.point,Tt.pointLightShadows.value=V.state.pointShadow,Tt.hemisphereLights.value=V.state.hemi,Tt.sunShadowMatrix.value=V.state.sunShadowMatrix,Tt.sunShadowCascade.value=V.state.sunShadowCascade,Tt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Tt.spotLightMatrix.value=V.state.spotLightMatrix,Tt.spotLightMap.value=V.state.spotLightMap,Tt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.numLightProbeGrids=cl(E.state.lightProbeGridArray),G.currentProgram=Qt,G.uniformsList=null,Qt}function kh(w,I,X,G,V){const mt=Pt.get(w),Et=mt.currentProgram.id+","+G+","+V;let pt=mt.programVariants.get(Et);return pt===void 0?(pt=us(w,I,X),mt.programVariants.set(Et,pt)):(mt.currentProgram=pt,mt.uniformsList=null,mt.outputColorSpace=G,mt.toneMapping=V),pt}function hl(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=zr.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function ul(w,I){const X=Pt.get(w);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function Gh(w,I,X,G,V){I.isScene!==!0&&(I=Nt),Ot.resetTextureUnits();const mt=I.fog,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,pt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:te.workingColorSpace,St=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ct=C.get(G.envMap||Et,St),Ht=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qt=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!X.morphAttributes.position,jt=!!X.morphAttributes.normal,we=!!X.morphAttributes.color;let xe=Zn;G.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(xe=R.toneMapping);const pe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,We=pe!==void 0?pe.length:0,wt=Pt.get(G),$e=E.state.lights;if(ge===!0&&(st===!0||w!==q)){const ye=w===q&&G.id===H;K.setState(G,w,ye)}let le=!1,_i=!1;G.version===wt.__version?wt.needsLights&&wt.lightsStateVersion!==$e.state.version||V.isBatchedMesh&&wt.batching===!1||!V.isBatchedMesh&&wt.batching===!0||V.isBatchedMesh&&wt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&wt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&wt.instancing===!1||!V.isInstancedMesh&&wt.instancing===!0||V.isSkinnedMesh&&wt.skinning===!1||!V.isSkinnedMesh&&wt.skinning===!0||V.isInstancedMesh&&wt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&wt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&wt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&wt.instancingMorph===!1&&V.morphTexture!==null||wt.envMap!==Ct||G.fog===!0&&wt.fog!==mt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==K.numPlanes||wt.numIntersection!==K.numIntersection)||wt.vertexAlphas!==Ht||wt.vertexTangents!==Qt||wt.morphTargets!==Tt||wt.morphNormals!==jt||wt.morphColors!==we||wt.morphTargetsCount!==We||wt.numLightProbeGrids!==cl(E.state.lightProbeGridArray)?le=!0:(wt.outputColorSpace!==pt||wt.toneMapping!==xe)&&(_i=!0):(le=!0,wt.__version=G.version);let Xe=wt.currentProgram;(le===!0||_i===!0)&&(Xe=_i===!0?kh(G,I,V,pt,xe):us(G,I,V),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Xe,wt));let qs=!1,Jn=!1,xi=!1;const ie=Xe.getUniforms(),Be=wt.uniforms;if(ct.useProgram(Xe.program)&&(qs=!0,Jn=!0,xi=!0),G.id!==H&&(H=G.id,Jn=!0),qs||q!==w){ct.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ie.setValue(O,"projectionMatrix",w.projectionMatrix),ie.setValue(O,"viewMatrix",w.matrixWorldInverse);const Ue=ie.map.cameraPosition;Ue!==void 0&&Ue.setValue(O,bt.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&ie.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ie.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,Jn=!0,xi=!0)}if(wt.needsLights&&($e.state.sunShadowMap.length>0&&ie.setValue(O,"sunShadowMap",$e.state.sunShadowMap,Ot),$e.state.directionalShadowMap.length>0&&ie.setValue(O,"directionalShadowMap",$e.state.directionalShadowMap,Ot),$e.state.spotShadowMap.length>0&&ie.setValue(O,"spotShadowMap",$e.state.spotShadowMap,Ot),$e.state.pointShadowMap.length>0&&ie.setValue(O,"pointShadowMap",$e.state.pointShadowMap,Ot)),V.isSkinnedMesh){ie.setOptional(O,V,"bindMatrix"),ie.setOptional(O,V,"bindMatrixInverse");const ye=V.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ie.setValue(O,"boneTexture",ye.boneTexture,Ot))}V.isBatchedMesh&&(ie.setOptional(O,V,"batchingTexture"),ie.setValue(O,"batchingTexture",V._matricesTexture,Ot),ie.setOptional(O,V,"batchingIdTexture"),ie.setValue(O,"batchingIdTexture",V._indirectTexture,Ot),ie.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&ie.setValue(O,"batchingColorTexture",V._colorsTexture,Ot));const gn=X.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&J.update(V,X,Xe),(Jn||wt.receiveShadow!==V.receiveShadow)&&(wt.receiveShadow=V.receiveShadow,ie.setValue(O,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Be.envMapIntensity.value=I.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Ag()),Jn){if(ie.setValue(O,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&Hh(Be,xi),mt&&G.fog===!0&&rt.refreshFogUniforms(Be,mt),rt.refreshMaterialUniforms(Be,G,ht,At,E.state.transmissionRenderTarget[w.id]),wt.needsLights&&wt.numLightProbeGrids>0){const ye=M;let Ue=0;for(const In of E.state.lightProbeGridArray)In.texture!==null&&(ye.textures[Ue]=In.texture,ye.min[Ue]=In.boundingBox.min,ye.max[Ue]=In.boundingBox.max,ye.resolution[Ue]=In.resolution,Ue++);for(const In in ye)ye[In].length=Ue;Be.probesSH.value=ye.textures,Be.probesMin.value=ye.min,Be.probesMax.value=ye.max,Be.probesResolution.value=ye.resolution}zr.upload(O,hl(wt),Be,Ot)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(zr.upload(O,hl(wt),Be,Ot),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ie.setValue(O,"center",V.center),ie.setValue(O,"modelViewMatrix",V.modelViewMatrix),ie.setValue(O,"normalMatrix",V.normalMatrix),ie.setValue(O,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const ye=G.uniformsGroups;for(let Ue=0,In=ye.length;Ue<In;Ue++){const fl=ye[Ue];Lt.update(fl,Xe),Lt.bind(fl,Xe)}}return Xe}function Hh(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.sunLights.needsUpdate=I,w.sunLightShadows.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Vh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(w,I,X){const G=Pt.get(w);G.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Pt.get(w.texture).__webglTexture=I,Pt.get(w.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,I){const X=Pt.get(w);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,X=0){tt=w,B=I,W=X;let G=null,V=!1,mt=!1;if(w){const pt=Pt.get(w);if(pt.__useDefaultFramebuffer!==void 0){ct.bindFramebuffer(O.FRAMEBUFFER,pt.__webglFramebuffer),j.copy(w.viewport),gt.copy(w.scissor),Rt=w.scissorTest,ct.viewport(j),ct.scissor(gt),ct.setScissorTest(Rt),H=-1;return}else if(pt.__webglFramebuffer===void 0)Ot.setupRenderTarget(w);else if(pt.__hasExternalTextures)Ot.rebindTextures(w,Pt.get(w.texture).__webglTexture,Pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ht=w.depthTexture;if(pt.__boundDepthTexture!==Ht){if(Ht!==null&&Pt.has(Ht)&&(w.width!==Ht.image.width||w.height!==Ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(w)}}const St=w.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(mt=!0);const Ct=Pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ct[I])?G=Ct[I][X]:G=Ct[I],V=!0):w.samples>0&&Ot.useMultisampledRTT(w)===!1?G=Pt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ct)?G=Ct[X]:G=Ct,j.copy(w.viewport),gt.copy(w.scissor),Rt=w.scissorTest}else j.copy(It).multiplyScalar(ht).floor(),gt.copy(ee).multiplyScalar(ht).floor(),Rt=Kt;if(X!==0&&(G=F),ct.bindFramebuffer(O.FRAMEBUFFER,G)&&ct.drawBuffers(w,G),ct.viewport(j),ct.scissor(gt),ct.setScissorTest(Rt),V){const pt=Pt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,pt.__webglTexture,X)}else if(mt){const pt=I;for(let St=0;St<w.textures.length;St++){const Ct=Pt.get(w.textures[St]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+St,Ct.__webglTexture,X,pt)}}else if(w!==null&&X!==0){const pt=Pt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pt.__webglTexture,X)}H=-1};function dl(w){const I=Pt.get(w);return(I.__readFormat!==w.format||I.__readType!==w.type)&&(I.__readFormat=w.format,I.__readType=w.type,I.__formatReadable=Wt.textureFormatReadable(w.format),I.__typeReadable=Wt.textureTypeReadable(w.type)),I}this.readRenderTargetPixels=function(w,I,X,G,V,mt,Et,pt=0){if(!(w&&w.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(St=St[Et],Array.isArray(St)&&(St=St[0])),St){ct.bindFramebuffer(O.FRAMEBUFFER,St);try{const Ct=w.textures[pt],Ht=Ct.format,Qt=Ct.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pt);const Tt=dl(Ct);if(Tt.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Tt.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-G&&X>=0&&X<=w.height-V&&O.readPixels(I,X,G,V,ot.convert(Ht),ot.convert(Qt),mt)}finally{const Ct=tt!==null?Pt.get(tt).__webglFramebuffer:null;ct.bindFramebuffer(O.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,I,X,G,V,mt,Et,pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(St=St[Et],Array.isArray(St)&&(St=St[0])),St)if(I>=0&&I<=w.width-G&&X>=0&&X<=w.height-V){ct.bindFramebuffer(O.FRAMEBUFFER,St);const Ct=w.textures[pt],Ht=Ct.format,Qt=Ct.type;w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pt);const Tt=dl(Ct);if(Tt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Tt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,jt),O.bufferData(O.PIXEL_PACK_BUFFER,mt.byteLength,O.STREAM_READ),O.readPixels(I,X,G,V,ot.convert(Ht),ot.convert(Qt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const we=tt!==null?Pt.get(tt).__webglFramebuffer:null;ct.bindFramebuffer(O.FRAMEBUFFER,we);const xe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Su(O,xe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,jt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,mt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(jt),O.deleteSync(xe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,I=null,X=0){const G=Math.pow(2,-X),V=Math.floor(w.image.width*G),mt=Math.floor(w.image.height*G),Et=I!==null?I.x:0,pt=I!==null?I.y:0;Ot.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,Et,pt,V,mt),ct.unbindTexture()},this.copyTextureToTexture=function(w,I,X=null,G=null,V=0,mt=0){let Et,pt,St,Ct,Ht,Qt,Tt,jt,we;const xe=w.isCompressedTexture?w.mipmaps[mt]:w.image;if(X!==null)Et=X.max.x-X.min.x,pt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Ht=X.min.y,Qt=X.isBox3?X.min.z:0;else{const ie=Math.pow(2,-V);Et=Math.floor(xe.width*ie),pt=Math.floor(xe.height*ie),w.isDataArrayTexture?St=xe.depth:w.isData3DTexture?St=Math.floor(xe.depth*ie):St=1,Ct=0,Ht=0,Qt=0}G!==null?(Tt=G.x,jt=G.y,we=G.z):(Tt=0,jt=0,we=0);const pe=ot.convert(I.format),We=ot.convert(I.type);let wt;I.isData3DTexture?(Ot.setTexture3D(I,0),wt=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ot.setTexture2DArray(I,0),wt=O.TEXTURE_2D_ARRAY):(Ot.setTexture2D(I,0),wt=O.TEXTURE_2D),ct.activeTexture(O.TEXTURE0),ct.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),ct.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ct.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const $e=ct.getParameter(O.UNPACK_ROW_LENGTH),le=ct.getParameter(O.UNPACK_IMAGE_HEIGHT),_i=ct.getParameter(O.UNPACK_SKIP_PIXELS),Xe=ct.getParameter(O.UNPACK_SKIP_ROWS),qs=ct.getParameter(O.UNPACK_SKIP_IMAGES);ct.pixelStorei(O.UNPACK_ROW_LENGTH,xe.width),ct.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xe.height),ct.pixelStorei(O.UNPACK_SKIP_PIXELS,Ct),ct.pixelStorei(O.UNPACK_SKIP_ROWS,Ht),ct.pixelStorei(O.UNPACK_SKIP_IMAGES,Qt);const Jn=w.isDataArrayTexture||w.isData3DTexture,xi=I.isDataArrayTexture||I.isData3DTexture;if(w.isDepthTexture){const ie=Pt.get(w),Be=Pt.get(I),gn=Pt.get(ie.__renderTarget),ye=Pt.get(Be.__renderTarget);ct.bindFramebuffer(O.READ_FRAMEBUFFER,gn.__webglFramebuffer),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ue=0;Ue<St;Ue++)Jn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(w).__webglTexture,V,Qt+Ue),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(I).__webglTexture,mt,we+Ue)),O.blitFramebuffer(Ct,Ht,Ct+Et,Ht+pt,Tt,jt,Tt+Et,jt+pt,O.DEPTH_BUFFER_BIT,O.NEAREST);ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Pt.has(w)){const ie=Pt.get(w),Be=Pt.get(I);ct.bindFramebuffer(O.READ_FRAMEBUFFER,P),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let gn=0;gn<St;gn++)Jn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ie.__webglTexture,V,Qt+gn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ie.__webglTexture,V),xi?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Be.__webglTexture,mt,we+gn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Be.__webglTexture,mt),V!==0?O.blitFramebuffer(Ct,Ht,Ct+Et,Ht+pt,Tt,jt,Tt+Et,jt+pt,O.COLOR_BUFFER_BIT,O.NEAREST):xi?O.copyTexSubImage3D(wt,mt,Tt,jt,we+gn,Ct,Ht,Et,pt):O.copyTexSubImage2D(wt,mt,Tt,jt,Ct,Ht,Et,pt);ct.bindFramebuffer(O.READ_FRAMEBUFFER,null),ct.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xi?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(wt,mt,Tt,jt,we,Et,pt,St,pe,We,xe.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(wt,mt,Tt,jt,we,Et,pt,St,pe,xe.data):O.texSubImage3D(wt,mt,Tt,jt,we,Et,pt,St,pe,We,xe):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,mt,Tt,jt,Et,pt,pe,We,xe.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,mt,Tt,jt,xe.width,xe.height,pe,xe.data):O.texSubImage2D(O.TEXTURE_2D,mt,Tt,jt,Et,pt,pe,We,xe);ct.pixelStorei(O.UNPACK_ROW_LENGTH,$e),ct.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le),ct.pixelStorei(O.UNPACK_SKIP_PIXELS,_i),ct.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),ct.pixelStorei(O.UNPACK_SKIP_IMAGES,qs),mt===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&O.generateMipmap(wt),ct.unbindTexture()},this.initRenderTarget=function(w){Pt.get(w).__webglFramebuffer===void 0&&Ot.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ot.setTextureCube(w,0):w.isData3DTexture?Ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ot.setTexture2DArray(w,0):Ot.setTexture2D(w,0),ct.unbindTexture()},this.resetState=function(){B=0,W=0,tt=null,ct.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const wi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Fi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cg=new Qo(-1,1,1,-1,0,1);class Pg extends Ne{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}}const Dg=new Pg;class ea{constructor(t){this._mesh=new Me(Dg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Cg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ch extends Fi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Yn.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ea(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class gc extends Fi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Lg extends Fi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ng{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new zt);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ch(wi),this.copyPass.material.blending=on,this.timer=new Ld}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}gc!==void 0&&(a instanceof gc?n=!0:a instanceof Lg&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new zt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Mr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ig extends Fi{constructor(){super(),this.isOutputPass=!0,this.uniforms=Yn.clone(Mr.uniforms),this.material=new ph({name:Mr.name,uniforms:this.uniforms,vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this._fsQuad=new ea(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===No?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Io?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Uo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ug extends Fi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new kt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}class Fg{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r;const a=.5*(Math.sqrt(3)-1),o=(t+e)*a,l=Math.floor(t+o),c=Math.floor(e+o),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,p=t-u,v=e-d;let m,g;p>v?(m=1,g=0):(m=0,g=1);const x=p-m+h,y=v-g+h,M=p-1+2*h,b=v-1+2*h,E=l&255,_=c&255,S=this.perm[E+this.perm[_]]%12,A=this.perm[E+m+this.perm[_+g]]%12,R=this.perm[E+1+this.perm[_+1]]%12;let D=.5-p*p-v*v;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[S],p,v));let L=.5-x*x-y*y;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[A],x,y));let F=.5-M*M-b*b;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[R],M,b)),70*(n+i+r)}noise3d(t,e,n){let i,r,a,o;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),f=Math.floor(e+c),u=Math.floor(n+c),d=1/6,p=(h+f+u)*d,v=h-p,m=f-p,g=u-p,x=t-v,y=e-m,M=n-g;let b,E,_,S,A,R;x>=y?y>=M?(b=1,E=0,_=0,S=1,A=1,R=0):x>=M?(b=1,E=0,_=0,S=1,A=0,R=1):(b=0,E=0,_=1,S=1,A=0,R=1):y<M?(b=0,E=0,_=1,S=0,A=1,R=1):x<M?(b=0,E=1,_=0,S=0,A=1,R=1):(b=0,E=1,_=0,S=1,A=1,R=0);const D=x-b+d,L=y-E+d,F=M-_+d,P=x-S+2*d,z=y-A+2*d,B=M-R+2*d,W=x-1+3*d,tt=y-1+3*d,H=M-1+3*d,q=h&255,j=f&255,gt=u&255,Rt=this.perm[q+this.perm[j+this.perm[gt]]]%12,Y=this.perm[q+b+this.perm[j+E+this.perm[gt+_]]]%12,it=this.perm[q+S+this.perm[j+A+this.perm[gt+R]]]%12,Mt=this.perm[q+1+this.perm[j+1+this.perm[gt+1]]]%12;let At=.6-x*x-y*y-M*M;At<0?i=0:(At*=At,i=At*At*this._dot3(this.grad3[Rt],x,y,M));let ht=.6-D*D-L*L-F*F;ht<0?r=0:(ht*=ht,r=ht*ht*this._dot3(this.grad3[Y],D,L,F));let Dt=.6-P*P-z*z-B*B;Dt<0?a=0:(Dt*=Dt,a=Dt*Dt*this._dot3(this.grad3[it],P,z,B));let ne=.6-W*W-tt*tt-H*H;return ne<0?o=0:(ne*=ne,o=ne*ne*this._dot3(this.grad3[Mt],W,tt,H)),32*(i+r+a+o)}noise4d(t,e,n,i){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,f,u,d,p;const v=(t+e+n+i)*l,m=Math.floor(t+v),g=Math.floor(e+v),x=Math.floor(n+v),y=Math.floor(i+v),M=(m+g+x+y)*c,b=m-M,E=g-M,_=x-M,S=y-M,A=t-b,R=e-E,D=n-_,L=i-S,F=A>R?32:0,P=A>D?16:0,z=R>D?8:0,B=A>L?4:0,W=R>L?2:0,tt=D>L?1:0,H=F+P+z+B+W+tt,q=a[H][0]>=3?1:0,j=a[H][1]>=3?1:0,gt=a[H][2]>=3?1:0,Rt=a[H][3]>=3?1:0,Y=a[H][0]>=2?1:0,it=a[H][1]>=2?1:0,Mt=a[H][2]>=2?1:0,At=a[H][3]>=2?1:0,ht=a[H][0]>=1?1:0,Dt=a[H][1]>=1?1:0,ne=a[H][2]>=1?1:0,It=a[H][3]>=1?1:0,ee=A-q+c,Kt=R-j+c,Gt=D-gt+c,Se=L-Rt+c,ge=A-Y+2*c,st=R-it+2*c,ut=D-Mt+2*c,bt=L-At+2*c,_t=A-ht+3*c,Nt=R-Dt+3*c,re=D-ne+3*c,_e=L-It+3*c,O=A-1+4*c,ce=R-1+4*c,oe=D-1+4*c,Wt=L-1+4*c,ct=m&255,ue=g&255,Pt=x&255,Ot=y&255,C=o[ct+o[ue+o[Pt+o[Ot]]]]%32,T=o[ct+q+o[ue+j+o[Pt+gt+o[Ot+Rt]]]]%32,k=o[ct+Y+o[ue+it+o[Pt+Mt+o[Ot+At]]]]%32,et=o[ct+ht+o[ue+Dt+o[Pt+ne+o[Ot+It]]]]%32,Q=o[ct+1+o[ue+1+o[Pt+1+o[Ot+1]]]]%32;let rt=.6-A*A-R*R-D*D-L*L;rt<0?h=0:(rt*=rt,h=rt*rt*this._dot4(r[C],A,R,D,L));let lt=.6-ee*ee-Kt*Kt-Gt*Gt-Se*Se;lt<0?f=0:(lt*=lt,f=lt*lt*this._dot4(r[T],ee,Kt,Gt,Se));let Z=.6-ge*ge-st*st-ut*ut-bt*bt;Z<0?u=0:(Z*=Z,u=Z*Z*this._dot4(r[k],ge,st,ut,bt));let K=.6-_t*_t-Nt*Nt-re*re-_e*_e;K<0?d=0:(K*=K,d=K*K*this._dot4(r[et],_t,Nt,re,_e));let at=.6-O*O-ce*ce-oe*oe-Wt*Wt;return at<0?p=0:(at*=at,p=at*at*this._dot4(r[Q],O,ce,oe,Wt)),27*(h+f+u+d+p)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}}const Sr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new zt},cameraProjectionMatrix:{value:new se},cameraInverseProjectionMatrix:{value:new se},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		#ifdef USE_REVERSED_DEPTH_BUFFER

			const float depthThreshold = 0.0;

		#else

			const float depthThreshold = 1.0;

		#endif

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == depthThreshold ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},yr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},br={uniforms:{tDiffuse:{value:null},resolution:{value:new zt}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class ci extends Fi{constructor(t,e,n=512,i=512,r=32){super(),this.width=n,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const a=new Di;a.format=Xn,a.type=Ri,this.normalRenderTarget=new Ze(this.width,this.height,{minFilter:Ce,magFilter:Ce,type:Pe,depthTexture:a}),this.ssaoRenderTarget=new Ze(this.width,this.height,{type:Pe,depthBuffer:!1}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new be({defines:Object.assign({},Sr.defines),uniforms:Yn.clone(Sr.uniforms),vertexShader:Sr.vertexShader,fragmentShader:Sr.fragmentShader,blending:on}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new _d,this.normalMaterial.blending=on,this.blurMaterial=new be({defines:Object.assign({},br.defines),uniforms:Yn.clone(br.uniforms),vertexShader:br.vertexShader,fragmentShader:br.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new be({defines:Object.assign({},yr.defines),uniforms:Yn.clone(yr.uniforms),vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,blending:on}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new be({uniforms:Yn.clone(wi.uniforms),vertexShader:wi.vertexShader,fragmentShader:wi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Hc,blendDst:ka,blendEquation:li,blendSrcAlpha:Gc,blendDstAlpha:ka,blendEquationAlpha:li}),this._fsQuad=new ea(null),this._originalClearColor=new kt}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(t,e,n){switch(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case ci.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=on,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=on,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.Depth:this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=on,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case ci.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=zc,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);const a=t.getClearAlpha(),o=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=o,t.setClearColor(this._originalClearColor),t.setClearAlpha(a)}_generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const i=new U;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=n/t;r=zu.lerp(.1,1,r*r),i.multiplyScalar(r),e.push(i)}}_generateRandomKernelRotations(){const n=new Fg,i=16,r=new Float32Array(i);for(let a=0;a<i;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=n.noise3d(o,l,c)}this.noiseTexture=new Pi(r,4,4,Jr,sn),this.noiseTexture.wrapS=En,this.noiseTexture.wrapT=En,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}}ci.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Og={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class os extends Fi{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new zt(t.x,t.y):new zt(256,256),this.clearColor=new kt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,a,{type:Pe,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Ze(r,a,{type:Pe,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const u=new Ze(r,a,{type:Pe,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=Og;this.highPassUniforms=Yn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new zt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yn.clone(wi.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:wi.vertexShader,fragmentShader:wi.fragmentShader,premultipliedAlpha:!0,blending:Ns,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new kt,this._oldClearAlpha=1,this._basic=new rs,this._fsQuad=new ea(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new zt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=os.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],l=a+1<t?e[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new be({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new zt(.5,.5)},direction:{value:new zt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}os.BlurDirectionX=new zt(1,0);os.BlurDirectionY=new zt(0,1);const ve=Math.PI/180;function Ut(s,t,e){return Math.max(t,Math.min(e,s))}function en(s,t,e){return s+(t-s)*e}function Ph(s,t,e,n){return en(s,t,1-Math.exp(-e*n))}function Da(s,t,e,n,i,r){const a=n*i,o=1/(1+a+.48*a*a+.235*a*a*a),l=s-t,c=(e+n*l)*i;r.v=(e-n*c)*o,r.x=t+(l+c)*o}function Br(s,t,e){const n=Ut((e-s)/(t-s),0,1);return n*n*(3-2*n)}function Co(s,t){let e=(t-s)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function ui(s){let t=s>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function oi(s){return[Math.sin(s),Math.cos(s)]}function Dh(s,t,e){const n=Math.cos(e),i=Math.sin(e);return[s*n+t*i,-s*i+t*n]}function Po(s,t,e){const n=Math.cos(e),i=Math.sin(e);return[s*n-t*i,s*i+t*n]}const yt={size:420,half:210,segments:180,water:0,borderStart:190,baseZ:176,baseR:16,spawnZ:150},ws=[{id:0,label:"Performance",dpr:1,shadow:1024,range:56,trees:150,grass:650,reeds:200,rocks:70,treeShadow:!1,particles:220},{id:1,label:"Balanced",dpr:1.15,shadow:1536,range:70,trees:280,grass:5600,reeds:320,rocks:120,treeShadow:!1,particles:320},{id:2,label:"High",dpr:1.35,shadow:2048,range:80,trees:380,grass:8200,reeds:480,rocks:150,treeShadow:!1,particles:520}];function zg(){const s=new URLSearchParams(location.search).get("quality");if(s==="0"||s==="1"||s==="2")return Number(s);const t=navigator.hardwareConcurrency||4;return navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches?t<=4?0:2:t>=8?2:t<=4?0:1}const kr={halberd:{id:"halberd",name:"Halberd",role:"Medium",blurb:"A modern gun tank. Long barrel, wedge turret, and enough pace to take a hill without waiting on the engine.",hp:1620,mass:42,accel:7.8,lowGear:1.22,maxSpeed:8.7,reverse:4,drag:.17,rollResist:1.35,brake:11,turn:.7,neutralTurn:.43,yawAccel:4.4,turretTurn:.81,gunSlew:.62,dep:8*ve,elev:20*ve,reload:9.3,damage:330,pen:198,shellSpeed:330,caliber:105,baseDisp:.32,moveDisp:.58,hullDisp:.32,turretDisp:.22,fireDisp:.85,aimRate:2.6,view:250,ricochet:70*ve,normalization:5*ve,armorHull:[130,70,45,24],armorTurret:[160,90,50,28],length:7.05,width:3.25,height:.86,turretLen:2.65,turretWid:2.15,turretH:.58,turretZ:-.15,gunLen:4.9,gunR:.075,wheels:6,susp:64,suspDamp:10,rangeNear:40,rangeFar:160},lynx:{id:"lynx",name:"Lynx",role:"Light",blurb:"A fast scout with a quick gun and paper-thin plate. Keep moving, spot the valley, and take the long way around.",hp:980,mass:22,accel:9.1,lowGear:1,maxSpeed:10.9,reverse:4.8,drag:.16,rollResist:1.35,brake:12,turn:.83,neutralTurn:.51,yawAccel:4.9,turretTurn:1.01,gunSlew:.75,dep:10*ve,elev:22*ve,reload:5.5,damage:185,pen:148,shellSpeed:375,caliber:75,baseDisp:.3,moveDisp:.42,hullDisp:.28,turretDisp:.2,fireDisp:.7,aimRate:3.6,view:285,ricochet:70*ve,normalization:4*ve,armorHull:[46,28,18,12],armorTurret:[44,26,16,10],length:5.15,width:2.15,height:.78,turretLen:1.45,turretWid:1.15,turretH:.38,turretZ:.05,gunLen:3.35,gunR:.045,wheels:4,susp:78,suspDamp:11,rangeNear:80,rangeFar:180},vanguard:{id:"vanguard",name:"Vanguard",role:"Medium",blurb:"The company workhorse. Enough glacis to angle on a ridge, enough pace to leave a bad piece of ground.",hp:1480,mass:36,accel:7.2,lowGear:1.2,maxSpeed:7.9,reverse:3.3,drag:.2,rollResist:1.7,brake:9,turn:.53,neutralTurn:.3,yawAccel:3.6,turretTurn:.72,gunSlew:.55,dep:8*ve,elev:20*ve,reload:8.5,damage:290,pen:176,shellSpeed:300,caliber:90,baseDisp:.35,moveDisp:.72,hullDisp:.38,turretDisp:.28,fireDisp:.95,aimRate:2.25,view:245,ricochet:70*ve,normalization:5*ve,armorHull:[96,62,42,20],armorTurret:[118,74,46,22],length:6.35,width:2.85,height:.95,turretLen:2.15,turretWid:1.7,turretH:.52,turretZ:.12,gunLen:4.15,gunR:.065,wheels:5,susp:52,suspDamp:9,rangeNear:45,rangeFar:150},bulwark:{id:"bulwark",name:"Bulwark",role:"Heavy",blurb:"A rolling bunker. Point the front at the enemy, creep the ridge, and make them waste shells on your glacis.",hp:2100,mass:54,accel:4.7,lowGear:1.45,maxSpeed:5.5,reverse:2.1,drag:.24,rollResist:2.05,brake:7,turn:.33,neutralTurn:.18,yawAccel:2.2,turretTurn:.47,gunSlew:.36,dep:6*ve,elev:18*ve,reload:13,damage:430,pen:218,shellSpeed:242,caliber:122,baseDisp:.42,moveDisp:1.05,hullDisp:.48,turretDisp:.34,fireDisp:1.15,aimRate:1.45,view:215,ricochet:70*ve,normalization:5*ve,armorHull:[188,96,62,28],armorTurret:[214,118,72,30],length:7.15,width:3.35,height:1.12,turretLen:2.55,turretWid:2.15,turretH:.7,turretZ:.18,gunLen:4.6,gunR:.09,wheels:6,susp:34,suspDamp:7.5,rangeNear:30,rangeFar:120}},Bg=["halberd","lynx","vanguard","bulwark"],_c=["Warden","Ash","Bramble","Cob","Drift","Ember","Flint"],kg=["Barrow","Dunn","Holt","Keel","Marsh","Pike","Quinn"],Gg=["lynx","vanguard","vanguard","bulwark","lynx","bulwark"],Hg=["lynx","vanguard","bulwark","vanguard","vanguard","bulwark","lynx"];function Nn(s){return Math.sin(s*.0115)*9+Math.sin(s*.0042+.6)*5}function Vg(s){return 10.5+Math.exp(-((s+155)**2)/2592)*18}const di=[-88,76];function Wg(s){let e=-2.45-Math.exp(-((s+155)**2)/1800)*1.6;for(const n of di){const i=Math.exp(-((s-n)**2)/450);e=e*(1-i)+-.18*i}return e}function ns(){return{x:0,z:Nn(0),halfX:5.2,halfZ:15.5,deckY:1.08}}function Lh(){const s=ns(),t=Nn(di[0]),e=Nn(di[1]),n=-150,i=yt.spawnZ;return[[{x:-6,z:n},{x:-36,z:-108},{x:-72,z:-58},{x:di[0],z:t},{x:-104,z:36},{x:-64,z:96},{x:-8,z:i}],[{x:0,z:n},{x:-6,z:-96},{x:0,z:s.z-34},{x:0,z:s.z},{x:0,z:s.z+34},{x:6,z:100},{x:0,z:i}],[{x:6,z:n},{x:28,z:-78},{x:58,z:e-26},{x:di[1],z:e},{x:108,z:48},{x:64,z:108},{x:8,z:i}]]}function Xg(){const s=ns(),t=Nn(di[0]),e=Nn(di[1]);return[{x:-14,z:-52,lane:1},{x:8,z:s.z-30,lane:1},{x:-8,z:s.z+28,lane:1},{x:12,z:78,lane:1},{x:-70,z:-36,lane:0},{x:-96,z:t+18,lane:0},{x:-78,z:58,lane:0},{x:86,z:e-18,lane:2},{x:78,z:e+16,lane:2},{x:118,z:34,lane:2},{x:104,z:62,lane:2},{x:70,z:118,lane:2},{x:46,z:-58,lane:2},{x:-40,z:118,lane:0}]}const hi={x:116,z:52,r:26};function xc(s){const t=s===0?-1:1,e=s===0?0:Math.PI,n=[-18,-9,0,9,18,-13,13],i=[0,-7,-1,-7,0,7,7];return n.map((r,a)=>({x:r,z:t*yt.spawnZ+t*i[a],yaw:e}))}function Nh(s,t=1){const e=Math.max(0,s.angle-s.normalization);if(!(s.caliber>s.thickness*2.5)&&e>s.ricochet)return"ricochet";const i=s.thickness/Math.max(.2,Math.cos(e));return s.pen*t>=i?"pen":"bounce"}function qg(){return[{name:"heavy front vs light gun",expect:"bounce",q:{thickness:188,angle:0,pen:148,caliber:75,ricochet:70*ve,normalization:5*ve}},{name:"heavy side vs heavy gun",expect:"pen",q:{thickness:96,angle:0,pen:218,caliber:122,ricochet:70*ve,normalization:5*ve}},{name:"grazing side plate",expect:"ricochet",q:{thickness:96,angle:80*ve,pen:218,caliber:90,ricochet:70*ve,normalization:5*ve}},{name:"overmatch thin roof",expect:"pen",q:{thickness:12,angle:75*ve,pen:148,caliber:75,ricochet:70*ve,normalization:5*ve}}].map(t=>{const e=Nh(t.q,1);return{name:t.name,got:e,expect:t.expect,ok:e===t.expect}})}const Er=new U,Tr=new U,bi=new U,Ei=new U,vs=new U;function Gr(s,t,e){if(s<.8)return Math.atan2(t,Math.max(.2,s));const n=9.8,i=e*e,r=i*i-n*(n*s*s+2*t*i);return r<=0?Math.atan2(t,s):Math.atan((i-Math.sqrt(r))/(n*s))}function Ih(s,t,e,n,i,r,a,o,l,c,h,f){const u=[s,t,e],d=[n-s,i-t,r-e],p=[a,o,l],v=[c,h,f];let m=0,g=1,x=0,y=0,M=0;for(let E=0;E<3;E++){if(Math.abs(d[E])<1e-8){if(u[E]<p[E]||u[E]>v[E])return null;continue}let _=(p[E]-u[E])/d[E],S=(v[E]-u[E])/d[E],A=-1;if(_>S){const R=_;_=S,S=R,A=1}if(_>m&&(m=_,x=E===0?A:0,y=E===1?A:0,M=E===2?A:0),g=Math.min(g,S),m>g)return null}return g<0||m>1?null:{t:m>=0?m:0,nx:x,ny:y,nz:M}}class Yg{events=[];tracerGeo=new hn(.08,.08,1.25);allyMat=new rs({color:16769698});foeMat=new rs({color:14148863});anchor;pool=[];lastFired=null;constructor(t){this.anchor=t;for(let e=0;e<32;e++){const n=new Me(this.tracerGeo,this.allyMat);n.visible=!1,n.frustumCulled=!1,t.add(n),this.pool.push({alive:!1,x:0,y:0,z:0,vx:0,vy:0,vz:0,owner:-1,team:0,damage:0,pen:0,caliber:0,life:0,mesh:n})}}steerLast(t,e,n,i,r,a){const o=this.lastFired;if(!o?.alive)return;const l=i-t,c=r-e,h=a-n,f=Math.hypot(l,c,h)||1,u=Math.hypot(o.vx,o.vy,o.vz)||1;o.x=t,o.y=e,o.z=n,o.vx=l/f*u,o.vy=c/f*u,o.vz=h/f*u}get activeShells(){let t=0;for(const e of this.pool)e.alive&&t++;return t}clear(){for(const t of this.pool)t.alive=!1,t.mesh.visible=!1;this.lastFired=null,this.events.length=0}tryFire(t){if(!t.alive||t.reload>0)return!1;t.group.updateMatrixWorld(!0),t.muzzle.getWorldPosition(Ei),t.muzzle.getWorldDirection(vs);const e=Math.atan(t.dispersion/100),n=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*e,r=Math.atan2(vs.x,vs.z)+Math.cos(n)*i,a=Math.asin(Math.max(-1,Math.min(1,vs.y)))+Math.sin(n)*i,o=Math.cos(a),l=Math.sin(r)*o,c=Math.sin(a),h=Math.cos(r)*o,f=t.spec.shellSpeed;let u=null;for(const d of this.pool)if(!d.alive){u=d;break}return u?(u.alive=!0,u.x=Ei.x+l*.15,u.y=Ei.y+c*.15,u.z=Ei.z+h*.15,u.vx=l*f,u.vy=c*f,u.vz=h*f,u.owner=t.id,u.team=t.team,u.damage=t.spec.damage,u.pen=t.spec.pen,u.caliber=t.spec.caliber,u.life=3.2,u.mesh.material=t.team===0?this.allyMat:this.foeMat,u.mesh.visible=!0,this.lastFired=u,t.fired(),this.events.push({type:"fire",a:t.id,b:-1,x:Ei.x,y:Ei.y,z:Ei.z,n:0,dx:l,dy:c,dz:h}),!0):!1}update(t,e,n,i,r){for(const a of this.pool){if(!a.alive)continue;a.life-=t;const o=Math.hypot(a.vx,a.vy,a.vz),l=Math.max(1,Math.ceil(o*t/.35)),c=t/l;let h=!1;for(let f=0;f<l&&!h;f++){const u=a.x,d=a.y,p=a.z;a.x+=a.vx*c,a.y+=a.vy*c,a.z+=a.vz*c,a.vy-=9.8*c,h=this.impact(a,u,d,p,e,n,i,r)}a.life<=0?this.killShell(a):this.pose(a)}}pose(t){t.mesh.position.set(t.x,t.y,t.z),t.mesh.lookAt(t.x+t.vx,t.y+t.vy,t.z+t.vz)}killShell(t){t.alive=!1,t.mesh.visible=!1}impact(t,e,n,i,r,a,o,l){let c=1,h="",f=null,u=wr,d=null,p=!0;Math.hypot(t.x-e,t.y-n,t.z-i);for(const b of r){if(b.id===t.owner||b.team===t.team)continue;const E=this.hitMesh(b.hullMesh,b.hullBox,e,n,i,t.x,t.y,t.z,wr),_=this.hitMesh(b.turretMesh,b.turretBox,e,n,i,t.x,t.y,t.z,Na),S=E&&(!_||E.t<=_.t)?E:_;!S||S.t>=c||(c=S.t,h="tank",f=b,bi.copy(S.n),u=bi,d=S.mesh,p=S.mesh===b.hullMesh)}for(const b of o){const E=vc(e,n,i,t.x,t.y,t.z,b);E&&E.t<c&&(c=E.t,h="solid",f=null)}for(const b of l){const E=Mc(e,n,i,t.x,t.y,t.z,b);E&&E<c&&(c=E,h="post",f=null)}const v=e+(t.x-e)*c,m=n+(t.y-n)*c,g=i+(t.z-i)*c;if(h===""&&m<=a.groundAt(v,g)+.08&&(h="ground",c=Math.min(c,1)),h==="")return!1;const x=e+(t.x-e)*c,y=h==="ground"?a.groundAt(v,g):n+(t.y-n)*c,M=i+(t.z-i)*c;if(t.x=x,t.y=y,t.z=M,h==="tank"&&f&&d)if(!f.alive)this.events.push({type:"ground",a:t.owner,b:f.id,x,y,z:M,n:0,dx:0,dy:1,dz:0});else{bi.copy(u).transformDirection(d.matrixWorld).normalize();const b=vs.set(t.vx,t.vy,t.vz).normalize(),E=Math.acos(Math.max(-1,Math.min(1,-b.dot(bi)))),_=Zg(u),S=p?f.spec.armorHull:f.spec.armorTurret,A=_==="front"?S[0]:_==="side"?S[1]:_==="rear"?S[2]:S[3],R=.85+Math.random()*.3,D=Nh({thickness:A,angle:E,pen:t.pen,caliber:t.caliber,ricochet:f.spec.ricochet,normalization:f.spec.normalization},R);if(D==="pen"){const L=_==="side"||_==="rear"||R>1.08;let F=t.damage*(.9+Math.random()*.2);L&&(F*=1.15),f.hp-=F;const P=r.find(z=>z.id===t.owner);P&&(P.hits++,P.pens++,P.damageDealt+=F),this.events.push({type:"pen",a:t.owner,b:f.id,x,y,z:M,n:F,dx:b.x,dy:b.y,dz:b.z,note:L?"crit":"pen"}),f.hp<=0&&(f.kill(),P&&P.kills++,this.events.push({type:"kill",a:t.owner,b:f.id,x,y:y+1,z:M,n:F,dx:0,dy:1,dz:0}))}else{const L=r.find(F=>F.id===t.owner);L&&L.hits++,f.blocked+=t.damage,this.events.push({type:"bounce",a:t.owner,b:f.id,x,y,z:M,n:0,dx:bi.x,dy:bi.y,dz:bi.z,note:D==="ricochet"?"ricochet":"nodmg"})}}else this.events.push({type:"ground",a:t.owner,b:-1,x,y,z:M,n:0,dx:0,dy:1,dz:0});return this.killShell(t),!0}castTanks(t,e,n,i,r,a,o,l,c){const h=t+i*o,f=e+r*o,u=n+a*o;let d=1,p=null;for(const v of l){if(!v.alive||v.id===c)continue;const m=this.hitMesh(v.hullMesh,v.hullBox,t,e,n,h,f,u,wr),g=this.hitMesh(v.turretMesh,v.turretBox,t,e,n,h,f,u,Na),x=m&&(!g||m.t<=g.t)?m:g;!x||x.t>=d||(d=x.t,p=v)}return p?{t:d*o,tank:p}:null}castBlock(t,e,n,i,r,a,o,l,c,h,f,u){let d=1,p=null,v="";for(const y of o){if(y.id===f||y.team===u)continue;const M=this.hitMesh(y.hullMesh,y.hullBox,t,e,n,i,r,a,wr),b=this.hitMesh(y.turretMesh,y.turretBox,t,e,n,i,r,a,Na),E=M&&(!b||M.t<=b.t)?M:b;!E||E.t>=d||(d=E.t,p=y.alive?y:null,v="tank")}for(const y of l){const M=vc(t,e,n,i,r,a,y);M&&M.t<d&&(d=M.t,p=null,v="solid")}for(const y of c){const M=Mc(t,e,n,i,r,a,y);M!==null&&M<d&&(d=M,p=null,v="post")}const m=e+(r-e)*d,g=t+(i-t)*d,x=n+(a-n)*d;return v===""&&m<=h.groundAt(g,x)+.08?{u:1,enemy:null,ground:!0}:v===""?null:{u:d,enemy:p,ground:!1}}hitMesh(t,e,n,i,r,a,o,l,c){t.updateWorldMatrix(!0,!1),La.copy(t.matrixWorld).invert(),Er.set(n,i,r).applyMatrix4(La),Tr.set(a,o,l).applyMatrix4(La);const h=.2,f=Ih(Er.x,Er.y,Er.z,Tr.x,Tr.y,Tr.z,e.min.x-h,e.min.y-h,e.min.z-h,e.max.x+h,e.max.y+h,e.max.z+h);return f?(c.set(f.nx,f.ny,f.nz),{t:f.t,n:c,mesh:t}):null}}const La=new se,wr=new U,Na=new U;function Zg(s){const t=Math.abs(s.x),e=Math.abs(s.y),n=Math.abs(s.z);return e>=t&&e>=n?"roof":n>=t?s.z>0?"front":"rear":"side"}function vc(s,t,e,n,i,r,a){const[o,l]=Po(s-a.x,e-a.z,a.rot),[c,h]=Po(n-a.x,r-a.z,a.rot),f=Ih(o,t-a.y,l,c,i-a.y,h,-a.hx,-a.hy,-a.hz,a.hx,a.hy,a.hz);return f?{t:f.t}:null}function Mc(s,t,e,n,i,r,a){const o=n-s,l=r-e,c=s-a.x,h=e-a.z,f=o*o+l*l;if(f<1e-6)return null;const u=Math.max(0,Math.min(1,-(c*o+h*l)/f)),d=s+o*u,p=e+l*u,v=t+(i-t)*u;return(d-a.x)**2+(p-a.z)**2>a.r*a.r||v<a.y0||v>a.y1?null:u}const Ar=Lh(),$g=Xg();function Kg(s,t,e,n,i){const r=new Set;for(const a of s){if(!a.alive)continue;const o=a.y+2.15;for(const l of s){if(!l.alive||l.team===a.team)continue;const c=l.x-a.x,h=l.z-a.z,f=Math.hypot(c,l.y-a.y,h);f>a.spec.view&&f>48||f>48&&f>a.spec.view||!(f<46)&&!Uh(t,e,n,a.x,o,a.z,l.x,l.y+1.25,l.z)||r.add(l.id)}}for(const a of s)r.has(a.id)?a.detected=3:a.detected=Math.max(0,a.detected-i)}class Jg{mem=new Map;bind(t){this.mem.clear();let e=0,n=0;for(const i of t){if(i.player)continue;const r=i.team===0?e++:n++;this.mem.set(i.id,{lane:r%3,wp:0,hold:0,stuck:0,reverse:0,think:i.id*.05,hesitate:.4,target:-1})}}drive(t,e,n,i){const r=this.mem.get(t.id);if(!r||!t.alive)return{throttle:0,steer:0};r.think-=i,r.hesitate=Math.max(0,r.hesitate-i),r.reverse=Math.max(0,r.reverse-i);const a=e.filter(A=>A.alive&&A.team!==t.team),o=e.filter(A=>A.alive&&A.team===t.team);if(r.think<=0){r.think=.32;let A=-1,R=1/0;for(const F of a){if(F.detected<=0)continue;const P=Math.hypot(F.x-t.x,F.z-t.z);P<R&&(R=P,A=F.id)}r.target=A;const D=e.find(F=>F.id===A);t.hp/t.spec.hp<.3&&D&&R<90&&(r.hold=0),a.length<=2&&o.length>=a.length&&(r.hold=0)}const l=e.find(A=>A.id===r.target&&A.alive&&A.detected>0),c=Ar[r.lane]??Ar[0],h=t.team===0?c:[...c].reverse(),f=t.team===0?{x:0,z:yt.baseZ}:{x:0,z:-176},u=t.team===0?{x:0,z:-176}:{x:0,z:yt.baseZ};let d=h[Math.min(r.wp,h.length-1)];const p=t.hp/t.spec.hp<.3,v=l?Math.hypot(l.x-t.x,l.z-t.z):9999;if(a.length===0||a.length<=2&&!p)d=f;else if(p&&v<100)d=u;else if(l&&v<t.spec.rangeFar&&v>18){const A=Qg(t,r.lane);A&&t.spec.id!=="lynx"&&(d=A),r.hold=t.spec.id==="lynx"?0:.4}const m=d.x-t.x,g=d.z-t.z;Math.hypot(m,g)<9&&r.wp<h.length-1&&d!==f&&d!==u&&r.wp++;let x=Math.atan2(m,g);l&&r.hold>0&&t.spec.id!=="lynx"&&(x=Math.atan2(l.x-t.x,l.z-t.z)+(t.spec.id==="bulwark"?.32:.22)*(t.id%2===0?1:-1));let y=Co(t.yaw,x),M=Ut(y/.42,-1,1),b=Math.abs(y)>1?.3:1;r.hold>0&&l&&Math.abs(y)<.35&&t.spec.id!=="lynx"&&(b=0),r.reverse>0&&(b=-.65,M=-M);const[E,_]=oi(t.yaw);if(n.sample(t.x+E*7,t.z+_*7).deep){const A=n.sample(t.x-_*6,t.z+E*6),R=n.sample(t.x+_*6,t.z-E*6);M=A.waterDepth<R.waterDepth?-1:1,b=.45}return b>.4&&Math.abs(t.speed)<.4?r.stuck+=i:r.stuck=Math.max(0,r.stuck-i*.5),r.stuck>1.25&&(r.reverse=.85,r.stuck=0,r.wp=Math.max(0,r.wp-1)),{throttle:b,steer:M}}aim(t,e,n,i,r,a){const o=this.mem.get(t.id);if(!o||!t.alive)return;const l=e.find(A=>A.id===o.target&&A.alive&&A.detected>0);if(!l){const A=Ar[o.lane]??Ar[0],R=t.team===0?A:[...A].reverse(),D=R[Math.min(o.wp,R.length-1)];t.aim(Math.atan2(D.x-t.x,D.z-t.z),0,a);return}const c=Math.hypot(l.x-t.x,l.z-t.z),h=c/t.spec.shellSpeed,[f,u]=oi(l.yaw),d=l.x+f*l.speed*h,p=l.z+u*l.speed*h,v=l.y+1.15;t.group.updateMatrixWorld(!0),t.muzzle.getWorldPosition(Ti);const m=Math.hypot(d-Ti.x,p-Ti.z),g=Gr(m,v-Ti.y,t.spec.shellSpeed);t.aim(Math.atan2(d-t.x,p-t.z),g,a),t.group.updateMatrixWorld(!0),t.muzzle.getWorldDirection(Rr);const x=d-Ti.x,y=v-Ti.y,M=p-Ti.z,b=Math.hypot(x,y,M)||1,E=Rr.x*(x/b)+Rr.y*(y/b)+Rr.z*(M/b),_=Uh(n,i,r,t.x,t.y+2.1,t.z,d,v,p),S=t.dispersion<t.spec.baseDisp+t.spec.moveDisp*.8;E>.996&&_&&S&&t.reload<=0&&o.hesitate<=0&&c<t.spec.view&&(t.aiFire=!0,o.hesitate=.2+Math.random()*.7)}}const Ti=new U,Rr=new U;function Qg(s,t){let e=null,n=28;for(const i of $g){if(i.lane!==t)continue;const r=Math.hypot(i.x-s.x,i.z-s.z);r<n&&(n=r,e=i)}return e}function Uh(s,t,e,n,i,r,a,o,l){const c=a-n,h=o-i,f=l-r,u=Math.hypot(c,h,f),d=Math.max(2,Math.ceil(u/4));for(let p=1;p<d;p++){const v=p/d,m=n+c*v,g=i+h*v,x=r+f*v;if(g<s.groundAt(m,x)+.4)return!1}for(const p of t)if(!(Math.abs((n+a)/2-p.x)>u&&Math.abs((r+l)/2-p.z)>u)&&jg(n,i,r,a,o,l,p))return!1;for(const p of e)if(e_(n,i,r,a,o,l,p))return!1;return!0}function jg(s,t,e,n,i,r,a){const o=n-s,l=i-t,c=r-e,h=6;for(let f=1;f<h;f++){const u=f/h,[d,p]=t_(s+o*u-a.x,e+c*u-a.z,a.rot),v=t+l*u-a.y;if(Math.abs(d)<=a.hx&&Math.abs(v)<=a.hy&&Math.abs(p)<=a.hz)return!0}return!1}function t_(s,t,e){const n=Math.cos(e),i=Math.sin(e);return[s*n-t*i,s*i+t*n]}function e_(s,t,e,n,i,r,a){const o=n-s,l=r-e,c=o*o+l*l||1,h=Ut(-((s-a.x)*o+(e-a.z)*l)/c,0,1),f=s+o*h,u=e+l*h,d=t+(i-t)*h;return(f-a.x)**2+(u-a.z)**2<=a.r*a.r&&d>=a.y0&&d<=a.y1}function n_(s,t,e,n,i){const r=s.createGain();return r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(Math.max(.001,i),t+e),r.gain.exponentialRampToValueAtTime(1e-4,t+n),r}class i_{ctx=null;master=null;engineGain=null;engineFilter=null;oscA=null;oscB=null;lfo=null;started=!1;volume=.75;ensure(){if(this.ctx)return this.ctx;const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;const e=new t,n=e.createGain();return n.gain.value=this.volume,n.connect(e.destination),this.ctx=e,this.master=n,e}async unlock(){const t=this.ensure();t&&(t.state==="suspended"&&await t.resume(),this.startLoops())}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}suspend(){this.ctx?.suspend()}resume(){this.ctx?.resume()}noiseBuffer(t){const e=this.ctx;if(!e)return null;const n=Math.floor(e.sampleRate*t),i=e.createBuffer(1,n,e.sampleRate),r=i.getChannelData(0);let a=0;for(let o=0;o<n;o++){const l=Math.random()*2-1;a=a*.96+l*.04,r[o]=a*3.2}return i}startLoops(){if(this.started||!this.ctx||!this.master)return;this.started=!0;const t=this.ctx,e=t.createGain();e.gain.value=1e-4;const n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=180,n.Q.value=.7;const i=t.createOscillator();i.type="sawtooth",i.frequency.value=42;const r=t.createOscillator();r.type="square",r.frequency.value=84;const a=t.createGain();a.gain.value=.22;const o=t.createGain();o.gain.value=.08,i.connect(a),r.connect(o),a.connect(n),o.connect(n);const l=this.noiseBuffer(2);if(l){const d=t.createBufferSource();d.buffer=l,d.loop=!0;const p=t.createGain();p.gain.value=.35,d.connect(p),p.connect(n),d.start()}n.connect(e),e.connect(this.master);const c=t.createOscillator();c.frequency.value=12;const h=t.createGain();h.gain.value=90,c.connect(h),h.connect(n.frequency);const f=t.createGain();f.gain.value=.04,c.connect(f),f.connect(e.gain),i.start(),r.start(),c.start(),this.engineGain=e,this.engineFilter=n,this.oscA=i,this.oscB=r,this.lfo=c;const u=this.noiseBuffer(3);if(u){const d=t.createBufferSource();d.buffer=u,d.loop=!0;const p=t.createBiquadFilter();p.type="bandpass",p.frequency.value=420,p.Q.value=.4;const v=t.createGain();v.gain.value=.035,d.connect(p),p.connect(v),v.connect(this.master),d.start()}}updateEngine(t,e,n){if(!this.ctx||!this.oscA||!this.oscB||!this.engineFilter||!this.engineGain||!this.lfo)return;const i=Math.min(1,Math.abs(t)/Math.max(1,e)),r=Math.min(1,Math.abs(n)),a=this.ctx.currentTime,o=36+i*78+r*10;this.oscA.frequency.setTargetAtTime(o,a,.08),this.oscB.frequency.setTargetAtTime(o*2.02,a,.08),this.lfo.frequency.setTargetAtTime(7+i*18,a,.1),this.engineFilter.frequency.setTargetAtTime(140+i*900+r*220,a,.08);const l=.04+i*.09+r*.03;this.engineGain.gain.setTargetAtTime(l,a,.06)}silenceEngine(){!this.ctx||!this.engineGain||this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.1)}burst(t,e,n=1){const i=this.ensure();if(!i||!this.master)return;const r=i.currentTime,a=t==="boom"?.85:t==="shot"?.28:t==="bounce"?.22:.12,o=n_(i,r,.012,a,e);if(o.connect(this.master),t==="shot"||t==="boom"||t==="pen"){const h=this.noiseBuffer(a);if(h){const f=i.createBufferSource();f.buffer=h,f.playbackRate.value=n;const u=i.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(t==="boom"?420:1800,r),u.frequency.exponentialRampToValueAtTime(t==="boom"?80:240,r+a),f.connect(u),u.connect(o),f.start(r),f.stop(r+a)}}const l=i.createOscillator();l.type=t==="bounce"?"triangle":"sine",t==="shot"?(l.frequency.setValueAtTime(150*n,r),l.frequency.exponentialRampToValueAtTime(40,r+a)):t==="boom"?(l.frequency.setValueAtTime(70,r),l.frequency.exponentialRampToValueAtTime(28,r+a)):t==="bounce"?(l.frequency.setValueAtTime(1400*n,r),l.frequency.exponentialRampToValueAtTime(500,r+a)):t==="pen"?(l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(90,r+.08)):l.frequency.setValueAtTime(640,r);const c=i.createGain();c.gain.value=t==="boom"?.8:.35,l.connect(c),c.connect(o),l.start(r),l.stop(r+a)}shot(t){const e=Math.min(.55,8/Math.max(6,t));this.burst("shot",e,.85+Math.random()*.3)}boom(t){const e=Math.min(.7,18/Math.max(8,t));this.burst("boom",e,.8+Math.random()*.3)}pen(){this.burst("pen",.22,.9+Math.random()*.2)}bounce(){this.burst("bounce",.16,.85+Math.random()*.4)}ui(){this.burst("ui",.06,1)}}class s_{throttle=0;steer=0;pauseEdge=!1;mapEdge=!1;zoomDelta=0;keys=new Set;fireLatch=!1;lookX=0;lookY=0;sniperToggle=!1;zoomId=null;enabled=!1;stickId=null;lookId=null;originX=0;originY=0;lastX=0;lastY=0;stickX=0;stickY=0;sens=.0033;layer;stick;knob;constructor(t,e,n){this.layer=t,this.stick=e,this.knob=n,window.addEventListener("keydown",a=>{a.repeat||(this.keys.add(a.code),this.enabled&&(a.code==="Space"&&(a.preventDefault(),this.fireLatch=!0),a.code==="KeyC"&&(this.sniperToggle=!this.sniperToggle),a.code==="KeyM"&&(this.mapEdge=!0),a.code==="Escape"&&(this.pauseEdge=!0)))}),window.addEventListener("keyup",a=>this.keys.delete(a.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.exitSniper()}),document.addEventListener("visibilitychange",()=>{document.hidden&&this.exitSniper()}),window.addEventListener("pagehide",()=>this.exitSniper()),t.addEventListener("contextmenu",a=>a.preventDefault()),this.layer.style.touchAction="none",t.addEventListener("pointerdown",a=>this.onDown(a),{passive:!0}),window.addEventListener("pointermove",a=>this.onMove(a),{passive:!0}),window.addEventListener("pointerup",a=>{this.onUp(a),this.finishZoom(a)},{passive:!0}),window.addEventListener("pointercancel",a=>{this.onUp(a),this.cancelZoom()},{passive:!0}),window.addEventListener("touchcancel",()=>this.cancelZoom(),{passive:!0}),window.addEventListener("lostpointercapture",a=>{const o=a instanceof PointerEvent?a.pointerId:-1;this.zoomId!==null&&o===this.zoomId&&this.cancelZoom()}),t.addEventListener("wheel",a=>{this.enabled&&(a.preventDefault(),this.zoomDelta+=a.deltaY)},{passive:!1});const i=document.querySelector("#btn-zoom"),r=document.querySelector("#btn-pause");this.bindFire(document.querySelector("#btn-fire")),this.bindFire(document.querySelector("#btn-fire-left")),i?.addEventListener("pointerdown",a=>this.onZoomDown(a)),r?.addEventListener("pointerdown",a=>{a.stopPropagation(),a.preventDefault(),this.enabled&&(this.pauseEdge=!0)})}setEnabled(t){this.enabled=t,this.layer.hidden=!t,t||this.release()}setSniper(t){this.sens=t?.00105:.0033}exitSniper(){this.sniperToggle=!1,this.zoomId=null,this.keys.delete("ShiftLeft"),this.keys.delete("ShiftRight")}isSniper(){return this.sniperToggle||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}consumeFire(){const t=this.fireLatch;return this.fireLatch=!1,t}consumeLook(t){t.x=this.lookX,t.y=this.lookY,this.lookX=0,this.lookY=0}sample(t){let e=0,n=0;if(this.keys.has("KeyW")&&(e+=1),this.keys.has("KeyS")&&(e-=1),this.keys.has("KeyA")&&(n+=1),this.keys.has("KeyD")&&(n-=1),this.stickId!==null&&(e=this.stickY,n=-this.stickX),!this.enabled){this.throttle=0,this.steer=0;return}const i=1-Math.exp(-10*Math.max(0,t));this.throttle+=(Sc(e)-this.throttle)*i,this.steer+=(Sc(n)-this.steer)*i}onZoomDown(t){if(t.stopPropagation(),t.preventDefault(),!this.enabled)return;this.zoomId=t.pointerId;const e=t.currentTarget;if(e instanceof HTMLElement)try{e.setPointerCapture(t.pointerId)}catch{}}finishZoom(t){if(this.zoomId===null||t.pointerId!==this.zoomId)return;const e=document.querySelector("#btn-zoom"),n=document.elementFromPoint(t.clientX,t.clientY),i=e instanceof HTMLElement&&!!n&&e.contains(n);this.zoomId=null,i&&this.enabled?this.sniperToggle=!this.sniperToggle:this.exitSniper()}cancelZoom(){this.zoomId=null,this.exitSniper()}bindFire(t){if(!(t instanceof HTMLElement))return;const e=i=>{if(i.stopPropagation(),i.preventDefault(),!!this.enabled){this.fireLatch=!0,t.classList.add("down");try{t.setPointerCapture(i.pointerId)}catch{}}},n=()=>t.classList.remove("down");t.addEventListener("pointerdown",e),t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}onDown(t){if(!(!this.enabled||t.target.closest("[data-control]"))){if(t.pointerType==="touch"||t.pointerType==="pen"){const n=this.layer.getBoundingClientRect();t.clientX-n.left<n.width*.48&&this.stickId===null?(this.stickId=t.pointerId,this.originX=t.clientX,this.originY=t.clientY,this.placeStick(0,0),this.capture(t.pointerId)):this.lookId===null&&(this.lookId=t.pointerId,this.lastX=t.clientX,this.lastY=t.clientY,this.capture(t.pointerId));return}if(t.button===2){this.sniperToggle=!this.sniperToggle;return}t.button===0&&(this.fireLatch=!0,document.pointerLockElement!==this.layer&&this.layer.requestPointerLock?.())}}onMove(t){if(this.enabled){if(t.pointerId===this.stickId){const e=t.clientX-this.originX,n=t.clientY-this.originY,i=58,r=Math.hypot(e,n)||1,a=Math.min(i,r)/r;this.placeStick(e*a,n*a);const o=e*a/i,l=-(n*a)/i;this.stickX=yc(o),this.stickY=yc(l)}else t.pointerId===this.lookId&&(this.lookX+=t.clientX-this.lastX,this.lookY+=t.clientY-this.lastY,this.lastX=t.clientX,this.lastY=t.clientY);document.pointerLockElement===this.layer&&t.pointerType==="mouse"&&(this.lookX+=t.movementX,this.lookY+=t.movementY)}}onUp(t){t.pointerId===this.stickId&&(this.stickId=null,this.stickX=0,this.stickY=0,this.stick.hidden=!0),t.pointerId===this.lookId&&(this.lookId=null)}capture(t){try{this.layer.setPointerCapture(t)}catch{}}placeStick(t,e){this.stick.hidden=!1,this.stick.style.left=`${this.originX}px`,this.stick.style.top=`${this.originY}px`,this.knob.style.left=`${t}px`,this.knob.style.top=`${e}px`}release(){this.stickId=null,this.lookId=null,this.stickX=0,this.stickY=0,this.throttle=0,this.steer=0,this.stick.hidden=!0,document.pointerLockElement===this.layer&&document.exitPointerLock?.()}}function Sc(s){return Math.max(-1,Math.min(1,s))}function yc(s){const e=Math.abs(s);if(e<.06)return 0;const n=Math.min(1,(e-.06)/(1-.06)),i=n*n*(3-2*n);return Math.sign(s)*i}function r_(s,t){return new be({transparent:!0,depthWrite:!1,blending:t?Ns:ts,uniforms:{uSprite:{value:s}},vertexShader:`
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
    `})}class bc{slots=[];pos;col;size;alpha;points;constructor(t,e,n){const i=new Ne;this.pos=new Yt(new Float32Array(n*3),3),this.col=new Yt(new Float32Array(n*3),3),this.size=new Yt(new Float32Array(n),1),this.alpha=new Yt(new Float32Array(n),1),this.pos.setUsage(Zs),this.col.setUsage(Zs),this.size.setUsage(Zs),this.alpha.setUsage(Zs),i.setAttribute("position",this.pos),i.setAttribute("color",this.col),i.setAttribute("size",this.size),i.setAttribute("alpha",this.alpha);const r=r_(t,e);r.vertexColors=!0,this.points=new dd(i,r),this.points.frustumCulled=!1,this.points.renderOrder=e?3:2;for(let a=0;a<n;a++)this.slots.push({life:0,max:1,x:0,y:0,z:0,vx:0,vy:0,vz:0,size:0,r:1,g:1,b:1,drag:0,grav:0})}emit(t,e,n,i,r,a,o,l,c,h,f,u,d,p){let v=this.slots[0];for(let m=1;m<this.slots.length;m++){if(this.slots[m].life<=0){v=this.slots[m];break}this.slots[m].life<v.life&&(v=this.slots[m])}v.life>0&&v.life>t||(v.life=t,v.max=e,v.x=n,v.y=i,v.z=r,v.vx=a,v.vy=o,v.vz=l,v.size=c,v.r=h,v.g=f,v.b=u,v.drag=d,v.grav=p)}update(t){const e=this.pos.count;for(let n=0;n<e;n++){const i=this.slots[n];if(!i||i.life<=0){this.alpha.setX(n,0),this.size.setX(n,0);continue}i.life-=t,i.vx*=Math.max(0,1-i.drag*t),i.vy*=Math.max(0,1-i.drag*t),i.vz*=Math.max(0,1-i.drag*t),i.vy+=i.grav*t,i.x+=i.vx*t,i.y+=i.vy*t,i.z+=i.vz*t;const r=Math.max(0,i.life/i.max);this.pos.setXYZ(n,i.x,i.y,i.z),this.col.setXYZ(n,i.r,i.g,i.b),this.size.setX(n,i.size*(.6+(1-r)*1.4)),this.alpha.setX(n,r*r)}this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.size.needsUpdate=!0,this.alpha.needsUpdate=!0}}class a_{fire;smoke;budget;constructor(t,e){this.budget=e,this.fire=new bc(t,!0,Math.max(80,e)),this.smoke=new bc(t,!1,Math.max(120,e))}get objects(){return[this.smoke.points,this.fire.points]}setBudget(t){this.budget=t}update(t){this.fire.update(t),this.smoke.update(t)}muzzle(t,e,n,i,r,a){this.fire.emit(.08,.08,t,e,n,i*2,r*2,a*2,2.4,1,.85,.45,2,0);for(let o=0;o<5;o++)this.smoke.emit(.7,.7,t+i*.4,e,n+a*.4,i*2+(Math.random()-.5),.6+Math.random(),a*2+(Math.random()-.5),1.1,.65,.62,.55,1.4,.2)}blast(t,e,n){const i=Math.min(42,Math.floor(this.budget/12));for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2,o=Math.random(),l=3+Math.random()*8,c=.35+Math.random()*.3;this.fire.emit(c,.6,t,e,n,Math.cos(a)*l*(1-o),2+o*8,Math.sin(a)*l*(1-o),1.6+Math.random()*2.2,1,.45+Math.random()*.3,.12,1.2,-4)}for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2,o=2.2+Math.random()*1.4;this.smoke.emit(o,3.2,t,e+.4,n,Math.cos(a)*(1+Math.random()*2),1.5+Math.random()*2.5,Math.sin(a)*(1+Math.random()*2),2.2+Math.random(),.25,.22,.2,.6,.35)}for(let r=0;r<10;r++)this.smoke.emit(3.1,3.1,t,e+r*.12,n,(Math.random()-.5)*.5,1.1+r*.18,(Math.random()-.5)*.5,2.2+r*.35,.16,.15,.13,.35,.2)}dust(t,e,n){this.smoke.emit(.55,.55,t,e,n,(Math.random()-.5)*.8,.4+Math.random()*.5,(Math.random()-.5)*.8,.9,.62,.52,.36,1.5,.1)}splash(t,e,n){this.fire.emit(.4,.4,t,e,n,(Math.random()-.5)*2,2+Math.random()*2,(Math.random()-.5)*2,.7,.75,.85,.9,1,-6)}spark(t,e,n,i){for(let r=0;r<6;r++)this.fire.emit(.25,.25,t,e,n,(Math.random()-.5)*6,Math.random()*4,(Math.random()-.5)*6,.45,1,i?.75:.85,i?.3:.7,1.5,-8)}dirt(t,e,n){for(let i=0;i<8;i++)this.smoke.emit(.5,.5,t,e,n,(Math.random()-.5)*4,1+Math.random()*3,(Math.random()-.5)*4,.8,.45,.36,.24,1.2,-6)}}const Ms=new se;class o_{mesh;index=0;constructor(t=900){const e=new Ln(.5,.95);e.rotateX(-Math.PI/2);const n=new rs({color:2893342,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new si(e,n,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1;for(let i=0;i<t;i++)Ms.makeScale(.001,.001,.001),this.mesh.setMatrixAt(i,Ms);this.mesh.instanceMatrix.needsUpdate=!0}stamp(t,e,n,i,r){const a=this.mesh.instanceMatrix.count;for(const o of[-1,1]){const l=Math.cos(i)*o*r*.38,c=-Math.sin(i)*o*r*.38;Ms.makeRotationY(i),Ms.setPosition(t+l,e+.04,n+c),this.mesh.setMatrixAt(this.index%a,Ms),this.index++}this.mesh.instanceMatrix.needsUpdate=!0}}const Ec=new se;function cn(s){const t=s.filter(c=>c.getAttribute("position")?.count),e=new Ne;if(!t.length)return e.setAttribute("position",new Yt([0,0,0],3)),e;const n=t.map(c=>c.index?c.toNonIndexed():c);let i=0;for(const c of n)i+=c.getAttribute("position").count;const r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i*2);let l=0;for(const c of n){c.getAttribute("normal")||c.computeVertexNormals();const h=c.getAttribute("position"),f=c.getAttribute("normal"),u=c.getAttribute("uv");for(let d=0;d<h.count;d++)r[(l+d)*3]=h.getX(d),r[(l+d)*3+1]=h.getY(d),r[(l+d)*3+2]=h.getZ(d),a[(l+d)*3]=f.getX(d),a[(l+d)*3+1]=f.getY(d),a[(l+d)*3+2]=f.getZ(d),o[(l+d)*2]=u?u.getX(d):0,o[(l+d)*2+1]=u?u.getY(d):0;l+=h.count}return e.setAttribute("position",new Yt(r,3)),e.setAttribute("normal",new Yt(a,3)),e.setAttribute("uv",new Yt(o,2)),e}function Zr(s,t){const e=s.getAttribute("position"),n=s.getAttribute("normal");if(!e||!n)return s;const i=new Float32Array(e.count*2);for(let r=0;r<e.count;r++){const a=e.getX(r),o=e.getY(r),l=e.getZ(r),c=Math.abs(n.getX(r)),h=Math.abs(n.getY(r)),f=Math.abs(n.getZ(r)),u=h>=c&&h>=f?a:c>=f?l:a,d=h>=c&&h>=f?l:(c>=f,o);i[r*2]=u/t,i[r*2+1]=d/t}return s.setAttribute("uv",new Yt(i,2)),s}function ri(s,t,e,n,i){return Ec.makeRotationY(t).setPosition(e,n,i),s.applyMatrix4(Ec),s}function $r(s){const e=[],n=[];for(let o=0;o<s.length;o++){const l=s[o],c=[[l.xb,l.yb],[l.xm,l.ym],[l.xt,l.yt],[-l.xt,l.yt],[-l.xm,l.ym],[-l.xb,l.yb]];for(let h=0;h<6;h++)e.push(c[h][0],c[h][1],l.z),n.push(h/6,o/(s.length-1))}const i=[];for(let o=0;o<s.length-1;o++)for(let l=0;l<6;l++){const c=o*6+l,h=o*6+(l+1)%6,f=(o+1)*6+l,u=(o+1)*6+(l+1)%6;i.push(c,f,h,h,f,u)}const r=(o,l)=>{const c=o*6,h=e.length/3,f=s[o];e.push(0,(f.yb+f.yt)*.5,f.z),n.push(.5,o===0?0:1);for(let u=0;u<6;u++){const d=c+u,p=c+(u+1)%6;l?i.push(h,d,p):i.push(h,p,d)}};r(0,!0),r(s.length-1,!1);const a=new Ne;return a.setAttribute("position",new Yt(e,3)),a.setAttribute("uv",new Yt(n,2)),a.setIndex(i),a.computeVertexNormals(),a}const Fh=Math.sqrt(3),l_=.5*(Fh-1),Ss=(3-Fh)/6,Tc=s=>Math.floor(s)|0,wc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function tl(s=Math.random){const t=c_(s),e=new Float64Array(t).map(i=>wc[i%12*2]),n=new Float64Array(t).map(i=>wc[i%12*2+1]);return function(r,a){let o=0,l=0,c=0;const h=(r+a)*l_,f=Tc(r+h),u=Tc(a+h),d=(f+u)*Ss,p=f-d,v=u-d,m=r-p,g=a-v;let x,y;m>g?(x=1,y=0):(x=0,y=1);const M=m-x+Ss,b=g-y+Ss,E=m-1+2*Ss,_=g-1+2*Ss,S=f&255,A=u&255;let R=.5-m*m-g*g;if(R>=0){const F=S+t[A],P=e[F],z=n[F];R*=R,o=R*R*(P*m+z*g)}let D=.5-M*M-b*b;if(D>=0){const F=S+x+t[A+y],P=e[F],z=n[F];D*=D,l=D*D*(P*M+z*b)}let L=.5-E*E-_*_;if(L>=0){const F=S+1+t[A+1],P=e[F],z=n[F];L*=L,c=L*L*(P*E+z*_)}return 70*(o+l+c)}}function c_(s){const e=new Uint8Array(512);for(let n=0;n<512/2;n++)e[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=e[n];e[n]=e[i],e[i]=r}for(let n=256;n<512;n++)e[n]=e[n-256];return e}const h_=-8,u_=56;function d_(s){const t=Ut((s-h_)/u_,0,1),e=Math.floor(t*65535);return[e>>8&255,e&255]}class f_{seg=yt.segments;heights;road;field;mesh;minimap;shaderTime=null;constructor(t){const e=tl(ui(679441)),n=this.seg+1,i=new Float32Array(n*n),r=new Float32Array(n*n),a=(x,y)=>{let M=0,b=1,E=1,_=0;for(let S=0;S<5;S++)M+=e(x*E,y*E)*b,_+=b,b*=.5,E*=2.07;return M/_};for(let x=0;x<n;x++)for(let y=0;y<n;y++){const M=-210+y/this.seg*yt.size,b=-210+x/this.seg*yt.size;let E=6.4+a(M*.0105,b*.0105)*7.4;E+=a(M*.027+30,b*.027)*1.7;const _=M-80,S=b-114;E+=Math.exp(-(_*_+S*S)/5e3)*15;const A=M+125,R=b-8;E+=Math.exp(-(A*A+R*R)/18050)*4.2;const D=M+10,L=b+46;E+=Math.exp(-(D*D)/2312-L*L/9248)*5.8;const F=Math.max(Math.abs(M),Math.abs(b));E+=Br(yt.borderStart,yt.half,F)*24,i[x*n+y]=E}const o=new Float32Array(i.length);for(let x=0;x<n;x++)for(let y=0;y<n;y++){let M=0,b=0;for(let E=-1;E<=1;E++)for(let _=-1;_<=1;_++){const S=Ut(y+_,0,this.seg),A=Ut(x+E,0,this.seg);M+=i[A*n+S],b++}o[x*n+y]=M/b}i.set(o);for(let x=0;x<n;x++)for(let y=0;y<n;y++){const M=-210+y/this.seg*yt.size,b=-210+x/this.seg*yt.size,E=Nn(M),_=Vg(M),S=Math.abs(b-E),A=x*n+y;if(S<_+7){const R=Math.max(i[A],1.6),D=Wg(M);if(S<=_){const L=S/_,F=L*L*(3-2*L);i[A]=en(D,R,F)}else{const L=(S-_)/7;i[A]=en(Math.max(R,1.8),i[A],L)}}}this.heights=i,this.road=r;for(const x of Lh())this.paintRoad(x,7.2);this.paintRoad([{x:40,z:70},{x:90,z:58},{x:hi.x,z:hi.z},{x:150,z:36}],5.5),this.rampBridge(),this.flatten(-176,22,void 0),this.flatten(yt.baseZ,22,void 0),this.flattenDisk(0,-150,26,.85),this.flattenDisk(0,yt.spawnZ,26,.85),this.flattenDisk(hi.x,hi.z,hi.r,.45);for(const x of di)this.flattenDisk(x,Nn(x),9,.65);const l=new Uint8Array(n*n*4);for(let x=0;x<n;x++)for(let y=0;y<n;y++){const M=x*n+y,b=-210+y/this.seg*yt.size,E=-210+x/this.seg*yt.size,[_,S]=d_(i[M]),A=M*4;l[A]=Math.floor(Ut(r[M],0,1)*255),l[A+1]=_,l[A+2]=S,l[A+3]=Math.floor(Ut(Ds(b,E),0,1)*255)}const c=new Pi(l,n,n,yn);c.colorSpace=pn,c.wrapS=c.wrapT=mn,c.magFilter=Te,c.minFilter=Te,c.generateMipmaps=!1,c.flipY=!1,c.needsUpdate=!0,this.field=c;const h=new Ne,f=new Float32Array(n*n*3),u=new Float32Array(n*n*2);for(let x=0;x<n;x++)for(let y=0;y<n;y++){const M=x*n+y;f[M*3]=-210+y/this.seg*yt.size,f[M*3+1]=i[M],f[M*3+2]=-210+x/this.seg*yt.size,u[M*2]=y/this.seg,u[M*2+1]=x/this.seg}const d=new Uint32Array(this.seg*this.seg*6);let p=0;for(let x=0;x<this.seg;x++)for(let y=0;y<this.seg;y++){const M=x*n+y,b=M+1,E=M+n,_=E+1;d[p++]=M,d[p++]=E,d[p++]=b,d[p++]=b,d[p++]=E,d[p++]=_}h.setAttribute("position",new Yt(f,3)),h.setAttribute("uv",new Yt(u,2)),h.setIndex(Array.from(d)),h.computeVertexNormals();const v=h.getAttribute("normal");let m=0;for(let x=0;x<v.count;x++)m+=v.getY(x);if(m<0){for(let x=0;x<d.length;x+=3){const y=d[x];d[x]=d[x+1],d[x+1]=y}h.setIndex(Array.from(d)),h.computeVertexNormals()}h.computeBoundingSphere();const g=this.makeMaterial(t,c);this.mesh=new Me(h,g),this.mesh.receiveShadow=!0,this.mesh.name="terrain",this.minimap=this.drawMinimap()}tick(t){this.shaderTime&&(this.shaderTime.value=t)}cell(t,e){const n=this.seg+1;return this.heights[Ut(e,0,this.seg)*n+Ut(t,0,this.seg)]}roadAt(t,e){const n=this.seg+1;return this.road[Ut(e,0,this.seg)*n+Ut(t,0,this.seg)]}setH(t,e,n){const i=this.seg+1;this.heights[Ut(e,0,this.seg)*i+Ut(t,0,this.seg)]=n}setRoad(t,e,n){const i=this.seg+1,r=Ut(e,0,this.seg)*i+Ut(t,0,this.seg);this.road[r]=Math.max(this.road[r],n)}worldOf(t,e){return[-210+t/this.seg*yt.size,-210+e/this.seg*yt.size]}nearest(t,e){const n=Ut(Math.round((t+yt.half)/yt.size*this.seg),0,this.seg),i=Ut(Math.round((e+yt.half)/yt.size*this.seg),0,this.seg);return[n,i]}groundAt(t,e){const n=(t+yt.half)/yt.size*this.seg,i=(e+yt.half)/yt.size*this.seg,r=Ut(Math.floor(n),0,this.seg-1),a=Ut(Math.floor(i),0,this.seg-1),o=Ut(n-r,0,1),l=Ut(i-a,0,1),c=this.cell(r,a),h=this.cell(r+1,a),f=this.cell(r,a+1),u=this.cell(r+1,a+1);return en(en(c,h,o),en(f,u,o),l)}sample(t,e){const n=this.groundAt(t,e),i=ns(),r=Math.abs(t-i.x)<=i.halfX&&Math.abs(e-i.z)<=i.halfZ,a=r?Math.max(n,i.deckY):n,o=1.6,l=this.groundAt(t+o,e)-this.groundAt(t-o,e),c=this.groundAt(t,e+o)-this.groundAt(t,e-o),h=o*2,f=Math.hypot(l,h,c)||1,u=(t+yt.half)/yt.size*this.seg,d=(e+yt.half)/yt.size*this.seg,p=Ut(Math.floor(u),0,this.seg-1),v=Ut(Math.floor(d),0,this.seg-1),m=Math.max(this.roadAt(p,v),this.roadAt(p+1,v),this.roadAt(p,v+1)),g=Math.max(0,yt.water-n);return{h:a,ground:n,nx:-l/f,ny:h/f,nz:-c/f,road:m,waterDepth:g,deep:!r&&g>1.02,onBridge:r}}paintRoad(t,e){const n=t.map(r=>{const[a,o]=this.nearest(r.x,r.z);return this.cell(a,o)});for(let r=0;r<3;r++){const a=n.slice();for(let o=1;o<n.length-1;o++)a[o]=n[o]*.5+n[o-1]*.25+n[o+1]*.25;for(let o=1;o<n.length-1;o++)n[o]=a[o]}const i=ns();for(let r=0;r<t.length;r++){const a=t[r],o=Math.abs(a.z-i.z);if(Math.abs(a.x-i.x)<i.halfX+6&&o<i.halfZ+24){const l=Ut((o-i.halfZ)/18,0,1);n[r]=en(i.deckY,n[r],l*l)}}for(let r=0;r<t.length-1;r++){const a=t[r],o=t[r+1],l=o.x-a.x,c=o.z-a.z,h=l*l+c*c||1,f=Ut(Math.floor((Math.min(a.x,o.x)-e+yt.half)/yt.size*this.seg),0,this.seg),u=Ut(Math.ceil((Math.max(a.x,o.x)+e+yt.half)/yt.size*this.seg),0,this.seg),d=Ut(Math.floor((Math.min(a.z,o.z)-e+yt.half)/yt.size*this.seg),0,this.seg),p=Ut(Math.ceil((Math.max(a.z,o.z)+e+yt.half)/yt.size*this.seg),0,this.seg);for(let v=d;v<=p;v++)for(let m=f;m<=u;m++){const[g,x]=this.worldOf(m,v),y=Ut(((g-a.x)*l+(x-a.z)*c)/h,0,1),M=a.x+l*y,b=a.z+c*y,E=Math.hypot(g-M,x-b);if(E>e)continue;const _=Math.abs(g-i.x)<=i.halfX&&Math.abs(x-i.z)<=i.halfZ,S=1-Br(e*.35,e,E);_||this.setH(m,v,en(this.cell(m,v),en(n[r],n[r+1],y),S*.9)),this.setRoad(m,v,S)}}}rampBridge(){const t=ns(),e=16;for(let n=0;n<=this.seg;n++)for(let i=0;i<=this.seg;i++){const[r,a]=this.worldOf(i,n);if(Math.abs(r-t.x)>t.halfX+1)continue;const o=Math.abs(a-t.z);if(o<=t.halfZ||o>t.halfZ+e)continue;const c=1-(o-t.halfZ)/e;this.setH(i,n,en(this.cell(i,n),t.deckY,c*c*(3-2*c)))}}flatten(t,e,n){this.flattenDisk(0,t,e,1,n)}flattenDisk(t,e,n,i,r){const[a,o]=this.nearest(t,e),l=r??this.cell(a,o),c=Ut(Math.floor((t-n+yt.half)/yt.size*this.seg),0,this.seg),h=Ut(Math.ceil((t+n+yt.half)/yt.size*this.seg),0,this.seg),f=Ut(Math.floor((e-n+yt.half)/yt.size*this.seg),0,this.seg),u=Ut(Math.ceil((e+n+yt.half)/yt.size*this.seg),0,this.seg);for(let d=f;d<=u;d++)for(let p=c;p<=h;p++){const[v,m]=this.worldOf(p,d),g=Math.hypot(v-t,m-e)/n;if(g>=1)continue;const x=(1-Br(.45,1,g))*i;this.setH(p,d,en(this.cell(p,d),l,x))}}drawMinimap(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");if(!e)return t;const n=e.createImageData(256,256);for(let i=0;i<256;i++)for(let r=0;r<256;r++){const a=-210+r/255*yt.size,o=yt.half-i/255*yt.size,l=this.sample(a,o);let c=92,h=104,f=58;if(l.waterDepth>.35&&!l.onBridge)c=36,h=92,f=104;else if(l.onBridge||l.road>.55)c=150,h=132,f=96;else if(l.ny<.82)c=120,h=116,f=108;else if(Ds(a,o)>.45)c=58,h=78,f=46;else{const d=Ut((l.ground-4)/16,0,1);c=110+d*30,h=118-d*10,f=64}const u=(i*256+r)*4;n.data[u]=c,n.data[u+1]=h,n.data[u+2]=f,n.data[u+3]=255}return e.putImageData(n,0,0),t}makeMaterial(t,e){const n=new Uint8Array([128,128,255,255]),i=new Pi(n,1,1);i.colorSpace=pn,i.needsUpdate=!0;const r={value:0};this.shaderTime=r;const a=new Ge({roughness:.94,metalness:.02,normalMap:i,normalScale:new zt(.75,.75)});return a.customProgramCacheKey=()=>"ashen-terrain-v6",a.onBeforeCompile=o=>{o.uniforms.uField={value:e},o.uniforms.uGrass={value:t.grass},o.uniforms.uDirt={value:t.dirt},o.uniforms.uRock={value:t.rock},o.uniforms.uSand={value:t.sand},o.uniforms.uGrassN={value:t.grassN},o.uniforms.uDirtN={value:t.dirtN},o.uniforms.uRockN={value:t.rockN},o.uniforms.uSandN={value:t.sandN},o.uniforms.uGrassR={value:t.grassR},o.uniforms.uDirtR={value:t.dirtR},o.uniforms.uRockR={value:t.rockR},o.uniforms.uCloud={value:t.cloud},o.uniforms.uTime=r,o.uniforms.uWater={value:yt.water},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
uniform sampler2D uGrassR;
uniform sampler2D uDirtR;
uniform sampler2D uRockR;
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
  vec3 grass = texture2D(uGrass, p * 0.085).rgb;
  vec3 detail = texture2D(uGrass, p * 0.34).rgb;
  vec3 dirt = texture2D(uDirt, p * 0.1).rgb;
  vec3 col = mix(grass, detail, 0.42);
  float blotch = texture2D(uCloud, p * 0.018).r;
  float speck = texture2D(uCloud, p * 0.05 + 2.7).r;
  col = mix(col, dirt, clamp(w.y * 0.9 + smoothstep(0.58, 0.86, blotch) * 0.62, 0.0, 1.0));
  col = mix(col, dirt * vec3(0.82, 0.74, 0.58), smoothstep(0.42, 0.78, speck) * 0.5);
  col = mix(col, texture2D(uSand, p * 0.12).rgb, w.z);
  col = mix(col, texture2D(uRock, p * 0.075).rgb, w.w);
  float rut = smoothstep(0.12, 0.45, w.x) * (1.0 - smoothstep(0.7, 0.95, w.x));
  col = mix(col, dirt * 0.7, rut * 0.7 + w.x * 0.55);
  float forest = texture2D(uField, vTerrainUv).a;
  col *= mix(vec3(1.0), vec3(0.82, 0.9, 0.74), forest * 0.4);
  col *= mix(vec3(1.05, 1.0, 0.92), vec3(0.86, 0.84, 0.8), smoothstep(8.0, 22.0, vTerrainWorld.y));
  float cloud = texture2D(uCloud, p * 0.0032 + vec2(uTime * 0.004, uTime * 0.001)).r;
  col *= mix(0.9, 1.0, smoothstep(0.3, 0.72, cloud));
  vec3 nrm = normalize(vTerrainNorm);
  float crease = length(dFdx(nrm)) + length(dFdy(nrm));
  col *= clamp(1.0 - crease * 1.6, 0.62, 1.0);
  diffuseColor.rgb *= col;
}`).replace("vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;",`vec4 wN = terrainW();
vec2 pN = vTerrainWorld.xz;
vec3 mapN = texture2D(uGrassN, pN * 0.105).xyz * 2.0 - 1.0;
mapN = mix(mapN, texture2D(uDirtN, pN * 0.12).xyz * 2.0 - 1.0, clamp(wN.y, 0.0, 1.0));
mapN = mix(mapN, texture2D(uSandN, pN * 0.14).xyz * 2.0 - 1.0, wN.z);
mapN = mix(mapN, texture2D(uRockN, pN * 0.09).xyz * 2.0 - 1.0, wN.w);
mapN = normalize(mapN);
mapN.xy *= 1.35;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
{
  vec4 wR = terrainW();
  vec2 pR = vTerrainWorld.xz;
  float rough = texture2D(uGrassR, pR * 0.105).g;
  rough = mix(rough, texture2D(uDirtR, pR * 0.12).g, clamp(wR.y, 0.0, 1.0));
  rough = mix(rough, texture2D(uRockR, pR * 0.09).g, wR.w);
  roughnessFactor = mix(rough, 0.72, wR.x * 0.45);
}`)},a}}function Ds(s,t){let e=Br(28,-90,s)*.95;const n=Nn(s);return e=Math.max(e,Math.exp(-((s+150)**2+(t-n)**2)/9800)),e=Math.max(e,Math.exp(-((s+30)**2+(t-125)**2)/4608)*.75),Math.hypot(s-hi.x,t-hi.z)<hi.r+6&&(e*=.15),Math.abs(s)<34&&Math.abs(t)>132&&(e*=.08),Math.hypot(s-48,t+60)<16&&(e*=.2),Ut(e,0,1)}const Mn=ws[2],me=new Re;function Ji(s,t,e=.04,n){const i=new Ge({map:s,roughness:t,metalness:e,envMapIntensity:.7});return n&&(i.normalMap=n),i}function Oh(s,t,e,n,i,r,a,o,l,c,h){const[f,u]=Dh(r,o,t);s.push({x:e+f,y:n+a,z:i+u,hx:l/2,hy:c/2,hz:h/2,rot:t})}function Qi(s,t,e,n,i,r,a,o,l,c,h,f){const u=new hn(c,h,f);u.translate(a,o,l),ri(u,e,n,i,r),s.push(u),t&&Oh(t,e,n,i,r,a,o,l,c,h,f)}function ys(s,t,e,n,i,r){const a=s.getContext("2d");if(!a)return;const o=(t+yt.half)/yt.size*256,l=(yt.half-e)/yt.size*256;a.fillStyle=r,a.fillRect(o-n,l-i,n*2,i*2)}function p_(s,t){const e=ui(12648430),n=new qn;n.name="scenery";const i=[],r=[],a=[],o=[],l=[],c=[],h=[],f={value:0},u=(st,ut,bt,_t,Nt,re,_e)=>{const O=s.sample(st,ut).h,ce=.32;if([{lx:0,lz:Nt/2-ce/2,sx:_t,sz:ce},{lx:0,lz:-Nt/2+ce/2,sx:_t,sz:ce},{lx:_t/2-ce/2,lz:0,sx:ce,sz:Nt-ce},{lx:-_t/2+ce/2,lz:0,sx:ce,sz:Nt-ce}].forEach((Wt,ct)=>{if(_e&&e()<.22&&ct!==0)return;const ue=re*(_e?.42+e()*.58:1),Pt=e()<.25?o:a;if(Qi(Pt,i,bt,st,O,ut,Wt.lx,ue/2,Wt.lz,Wt.sx,ue,Wt.sz),e()<.7&&ue>1.6){const C=new hn(.55,.7,.08);C.translate(Wt.lx,1.35,Wt.lz+Math.sign(Wt.lz||1)*.05),ri(C,bt,st,O,ut),h.push(C)}}),!_e||e()>.35){const Wt=new qr(Math.max(_t,Nt)*.48,1.15,4);Wt.rotateY(Math.PI/4),Wt.translate(0,re+.35,0),_e&&Wt.scale(.75,.55,.75),ri(Wt,bt,st,O,ut),l.push(Wt)}ys(s.minimap,st,ut,3.2,2.4,"#6b5344")},d=[[104,40,.4,8,6,3.2,!0],[118,36,1.2,7,5.5,2.8,!0],[128,48,.2,9,6.5,3.4,!1],[112,58,2.4,6.5,5,2.6,!0],[136,62,.8,7.5,5,3,!0],[100,66,1.7,8,6,2.4,!0],[148,44,.6,6,5,2.8,!0],[90,46,2.8,7,4.5,2.5,!0]];for(const st of d)u(st[0],st[1],st[2],st[3],st[4],st[5],st[6]);{const bt=s.sample(122,70).h;Qi(c,i,.2,122,bt,70,0,2.2,0,4.2,4.4,4.2),Qi(c,i,.2,122,bt,70,0,5.6,0,3.2,2.6,3.2),Qi(c,null,.2,122,bt,70,.4,7.4,0,2.2,1.4,2.2),ys(s.minimap,122,70,3,3,"#8a8174")}{const bt=s.sample(48,-62).h,_t=new nn(2.1,2.2,8,10);_t.translate(0,4,0),ri(_t,0,48,bt,-62),a.push(_t),i.push({x:48,y:bt+4,z:-62,hx:2.2,hy:4,hz:2.2,rot:0});const Nt=new qr(2.4,1.8,10);Nt.translate(0,8.6,0),ri(Nt,0,48,bt,-62),l.push(Nt),ys(s.minimap,48,-62,2,2,"#b7aa96")}const p=[[96,30,0,16],[116,28,.15,14],[138,32,-.2,12],[-20,-40,.4,10],[70,Nn(76)+14,.3,8]];for(const[st,ut,bt,_t]of p){const Nt=s.sample(st,ut).h;Qi(c,i,bt,st,Nt,ut,0,.58,0,_t,1.16,.45),ys(s.minimap,st,ut,_t*.12,1,"#9a9286")}const v=ns(),m=.42,g=new hn(v.halfX*2,m,v.halfZ*2);g.translate(0,v.deckY-m/2,0),ri(g,0,v.x,0,v.z),c.push(g);for(const st of[-1,1])Qi(c,i,0,v.x,0,v.z,st*(v.halfX-.18),v.deckY+.42,0,.28,.84,v.halfZ*2);for(const st of[-8,0,8]){const ut=new hn(1.1,2.4,1.4);ut.translate(0,-.4,st),ri(ut,0,v.x,0,v.z),c.push(ut)}ys(s.minimap,v.x,v.z,2,6,"#d9c7a4");const x=(st,ut)=>{if(!st.length)return;const bt=new Me(cn(st),ut);bt.castShadow=!0,bt.receiveShadow=!0,n.add(bt)};x(a,Ji(t.plaster,.86)),x(o,Ji(t.timber,.8)),x(l,Ji(t.roof,.74)),x(c,Ji(t.concrete,.84,.04,t.concreteN)),x(h,new Ge({color:1710358,roughness:.7}));const y=new nn(.18,.32,3.4,8);y.translate(0,1.7,0);const M=new nn(.06,.1,1.3,6);M.rotateZ(.9),M.translate(.55,2.5,0);const b=M.clone().rotateY(2.2),E=cn([y,M,b]),_=m_(),S=g_(),A=new si(E,new Ge({map:t.bark,normalMap:t.barkN,roughness:.9,color:16777215}),Mn.trees),R=new Ge({map:t.leaf,alphaTest:.18,side:He,color:13027492,roughness:.92}),D=new Ge({map:t.leaf,alphaTest:.18,side:He,color:9345140,roughness:.92});Ia(R,f,.05),Ia(D,f,.04);const L=new si(_,R,Mn.trees),F=new si(S,D,Mn.trees);let P=0,z=0;const B=[],W=(st,ut,bt)=>{for(let _t=0;_t<B.length;_t++){const Nt=B[_t],re=Nt.x-st,_e=Nt.z-ut;if(re*re+_e*_e<bt*bt)return!1}return!0};for(let st=-190;st<=190&&P+z<Mn.trees;st+=7)for(let ut=-190;ut<=190&&P+z<Mn.trees;ut+=7){const bt=ut+(e()-.5)*5,_t=st+(e()-.5)*5;if(Ds(bt,_t)<.24)continue;const Nt=s.sample(bt,_t);if(Nt.deep||Nt.waterDepth>.25||Nt.road>.35||Nt.ny<.8||Math.hypot(bt,_t+yt.spawnZ)<28||Math.hypot(bt,_t-yt.spawnZ)<28||!W(bt,_t,5.2))continue;const re=e()<.34,_e=Math.hypot(bt,_t),O=(.62+e()*.95)*(_e>150?.78:1);me.position.set(bt,Nt.h,_t),me.rotation.set(0,e()*6.28,0),me.scale.set(O*(.85+e()*.3),O,O*(.85+e()*.3)),me.updateMatrix();const ce=P+z;A.setMatrixAt(ce,me.matrix);const oe=!re&&e()<.28;A.setColorAt(ce,new kt(oe?14012612:re?10128244:16777215)),re?(F.setMatrixAt(z,me.matrix),z++):(L.setMatrixAt(P,me.matrix),P++),B.push({x:bt,z:_t}),r.push({x:bt,z:_t,r:.42*O,y0:Nt.h,y1:Nt.h+4.5*O})}A.count=P+z,L.count=P,F.count=z,A.instanceColor&&(A.instanceColor.needsUpdate=!0);for(const st of[A,L,F])st.instanceMatrix.needsUpdate=!0,st.castShadow=!1,st.receiveShadow=!0,st.computeBoundingSphere(),n.add(st);const tt=new Ko(1,2),H=tt.getAttribute("position");for(let st=0;st<H.count;st++){const ut=.45+e()*.9;H.setXYZ(st,H.getX(st)*ut,H.getY(st)*(.35+e()*.7),H.getZ(st)*(.5+e()*.8))}tt.computeVertexNormals();const q=new si(tt,Ji(t.rock,.86,.06,t.rockN),Mn.rocks+24);let j=0;for(let st=0;st<900&&j<Mn.rocks;st++){const ut=(e()-.5)*380,bt=(e()-.5)*380,_t=s.sample(ut,bt);if(_t.deep||_t.road>.4||_t.waterDepth>.3||_t.ny>.9&&e()>.15)continue;const Nt=_t.ny<.75?1.2+e()*2.2:.45+e()*1.1;me.position.set(ut,_t.h+Nt*.25,bt),me.rotation.set(e(),e(),e()),me.scale.set(Nt,Nt*.75,Nt),me.updateMatrix(),q.setMatrixAt(j++,me.matrix),Nt>1.1&&r.push({x:ut,z:bt,r:Nt*.75,y0:_t.h,y1:_t.h+Nt})}q.count=j,q.instanceMatrix.needsUpdate=!0,q.castShadow=!0,q.receiveShadow=!0,q.computeBoundingSphere(),n.add(q);const gt=[0,1,2].map(st=>{const ut=new Ln(.58,.58);return ut.translate(0,.31,0),ut.rotateY(st*Math.PI/3),ut}),Rt=cn(gt),Y=new Ge({map:t.blade,alphaTest:.35,roughness:.95,side:He,color:16777215});Ia(Y,f,.12);const it=new si(Rt,Y,Mn.grass);let Mt=0;for(let st=0;st<48e3&&Mt<Mn.grass;st++){const ut=(e()-.5)*390,bt=(e()-.5)*390;if(Ds(ut,bt)<.05&&e()>.45)continue;const Nt=s.sample(ut,bt);if(Nt.deep||Nt.road>.5||Nt.waterDepth>.12||Nt.ny<.68)continue;me.position.set(ut,Nt.h,bt),me.rotation.set(0,e()*6,0),me.scale.setScalar(.7+e()*.55),me.updateMatrix(),it.setMatrixAt(Mt,me.matrix);const re=new kt().setHSL(.22+e()*.06,.22+e()*.12,.34+e()*.1);it.setColorAt(Mt,re),Mt++}it.count=Mt,it.instanceMatrix.needsUpdate=!0,it.instanceColor&&(it.instanceColor.needsUpdate=!0),it.receiveShadow=!1,it.castShadow=!1,it.computeBoundingSphere(),n.add(it);const At=__(),ht=new Ge({map:t.leaf,alphaTest:.18,side:He,color:12040338,roughness:.94}),Dt=new si(At,ht,480);let ne=0;for(let st=0;st<2200&&ne<480;st++){const ut=(e()-.5)*360,bt=(e()-.5)*360,_t=s.sample(ut,bt);_t.deep||_t.road>.4||_t.waterDepth>.1||_t.ny<.78||Ds(ut,bt)<.2&&e()>.4||(me.position.set(ut,_t.h,bt),me.rotation.set(0,e()*6,0),me.scale.setScalar(.55+e()*.55),me.updateMatrix(),Dt.setMatrixAt(ne++,me.matrix))}Dt.count=ne,Dt.instanceMatrix.needsUpdate=!0,Dt.computeBoundingSphere(),n.add(Dt);const It=new Ln(.35,1.4);It.translate(0,.7,0);const ee=new Ge({color:9083480,roughness:.9,side:He}),Kt=new si(It,ee,Mn.reeds);let Gt=0;for(let st=0;st<4e3&&Gt<Mn.reeds;st++){const ut=(e()-.5)*360,bt=Nn(ut)+(e()-.5)*(x_(ut)+4),_t=s.sample(ut,bt);_t.waterDepth<.05||_t.waterDepth>.9||_t.onBridge||(me.position.set(ut,_t.h,bt),me.rotation.set(0,e()*6,0),me.scale.setScalar(.8+e()*.7),me.updateMatrix(),Kt.setMatrixAt(Gt++,me.matrix))}Kt.count=Gt,Kt.instanceMatrix.needsUpdate=!0,Kt.computeBoundingSphere(),n.add(Kt);const Se=[];for(let st=0;st<14;st++){const ut=-40-e()*120,bt=(e()-.5)*160,_t=s.sample(ut,bt);if(_t.deep||_t.road>.3)continue;const Nt=e()*3,re=new nn(.28,.32,4.2,6);re.rotateZ(Math.PI/2),ri(re,Nt,ut,_t.h+.28,bt),Se.push(re),Oh(i,Nt,ut,_t.h,bt,0,.28,0,4.2,.56,.6)}if(Se.length){const st=new Me(cn(Se),Ji(t.timber,.84));st.castShadow=!0,st.receiveShadow=!0,n.add(st)}Ac(n,s,i,f,0,-176,new U(.85,.55,.22),t.emblemCinder),Ac(n,s,i,f,0,yt.baseZ,new U(.55,.62,.7),t.emblemSlate);const ge=[];return n.traverse(st=>{const ut=st;ut.material instanceof be&&ut.material.uniforms.uTime&&ge.push(ut.material)}),{group:n,solids:i,posts:r,trunks:A,broad:L,pines:F,grass:it,reeds:Kt,rocks:q,tick:st=>{f.value=st;for(const ut of ge)ut.uniforms.uTime.value=st}}}function el(s,t,e,n,i,r,a){const o=ui(t),l=[];for(let c=0;c<s;c++){const h=new Ln(i*(.75+o()*.4),r*(.75+o()*.35)),f=c/s,u=e+f*n,d=a?(1.15-f)*.85:.35+o()*.85,p=o()*Math.PI*2;h.translate(Math.cos(p)*d,u,Math.sin(p)*d),h.rotateY(o()*Math.PI),h.rotateX((o()-.5)*.8),l.push(h)}return cn(l)}function m_(){return el(14,11,2.05,2.15,1.85,1.05,!1)}function g_(){return el(12,29,1.7,2.8,1.9,.85,!0)}function __(){return el(8,47,.25,.7,.85,.48,!1)}function x_(s){return 12+Math.exp(-((s+155)**2)/2e3)*16}function Ia(s,t,e){s.customProgramCacheKey=()=>`wind-${e}`,s.onBeforeCompile=n=>{n.uniforms.uTime=t,n.uniforms.uAmp={value:e},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
transformed.z += cos(uTime * 1.1 + wz * 0.2) * uAmp * 0.6 * transformed.y;`)}}function Ac(s,t,e,n,i,r,a,o){const l=t.sample(i,r).h,c=new Me(new Jo(yt.baseR-.6,yt.baseR,40),new Ge({color:new kt(a.x,a.y,a.z),roughness:.5,metalness:.2,side:He}));c.rotation.x=-Math.PI/2,c.position.set(i,l+.25,r),c.receiveShadow=!0,s.add(c);const h=new Me(new nn(.08,.1,6,6),new Ge({color:2894116,metalness:.6,roughness:.4}));h.position.set(i,l+3,r),h.castShadow=!0,s.add(h),e.push({x:i,y:l+3,z:r,hx:.2,hy:3,hz:.2,rot:0});const f=new Ln(1.8,1.05,10,4);f.translate(.9,0,0);const u=new be({side:He,uniforms:{uTime:n,uMap:{value:o},uColor:{value:a}},vertexShader:`
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
    `}),d=new Me(f,u);d.position.set(i,l+5.2,r),s.add(d);const p=new Me(new Hs(.7,8,6),new Ge({color:9275260,roughness:.9}));p.scale.y=.45,p.position.set(i,l+.2,r),s.add(p)}const na=new U(-.58,.46,-.34).normalize(),v_=`
varying vec3 vDir;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vDir = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,M_=`
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
`;function S_(){const s=new Hs(900,28,16),t=new be({side:je,depthWrite:!1,uniforms:{uSun:{value:na.clone()},uTime:{value:0}},vertexShader:v_,fragmentShader:M_}),e=new Me(s,t);return e.frustumCulled=!1,e.renderOrder=-1,e.name="sky",e}function y_(s,t){const e=s.material;e.uniforms.uTime.value=t}const Ls=new kt(10136474);function b_(){const s=new qn,t=new rs({color:16769712,transparent:!0,opacity:.16,depthWrite:!1,fog:!1,blending:Ns,side:He});for(let e=0;e<5;e++){const n=new Me(new Ln(16,70),t);n.position.set(-80+e*42,130,-40+e%2*50),n.lookAt(n.position.clone().add(na)),n.rotateZ(e*.35),s.add(n)}return s}function An(s,t,e,n,i,r){const a=new hn(s,t,e);return a.translate(n,i,r),a}function Ke(s,t,e,n,i,r,a,o="y"){const l=new nn(s,t,e,n);return o==="x"&&l.rotateZ(Math.PI/2),o==="z"&&l.rotateX(Math.PI/2),l.translate(i,r,a),l}function E_(){const s=(d,p,v,m,g,x,y)=>({z:d,xb:p,xm:v,xt:m,yb:g,ym:x,yt:y}),t=[];t.push($r([s(3.15,1.05,1.15,.55,.28,.48,.62),s(2.15,1.32,1.4,1.05,.24,.62,.95),s(.6,1.4,1.48,1.22,.22,.7,1.08),s(-1.2,1.38,1.46,1.18,.22,.68,1.02),s(-3.15,1.2,1.28,.95,.24,.55,.78)])),t.push(An(.12,.42,4.8,1.46,.46,.1)),t.push(An(.12,.42,4.8,-1.46,.46,.1)),t.push(An(2.55,.42,.12,0,.48,-3.15)),t.push(An(1.5,.05,1.35,0,1.02,-1.55));for(const d of[-1.05,1.05])t.push(An(.16,.1,.2,d,.7,3.05)),t.push(Ke(.045,.045,.26,8,d,.36,-3.18,"z"));t.push(Ke(.07,.09,.32,10,-.62,.5,-3.18,"z")),t.push(Ke(.07,.09,.32,10,.62,.5,-3.18,"z"));const e=[];e.push($r([s(1.15,.42,.5,.28,.02,.14,.22),s(.45,.85,.98,.62,0,.26,.4),s(-.35,1.02,1.08,.7,0,.3,.48),s(-1.15,.78,.86,.48,.02,.2,.32)])),e.push(An(1.55,.14,.42,0,.16,-1.2)),e.push(Ke(.26,.3,.18,12,-.12,.58,-.28)),e.push(An(.2,.08,.2,-.12,.7,-.28)),e.push(An(.32,.1,.18,.32,.52,.18)),e.push(Ke(.03,.03,.48,8,.55,.62,.22,"z")),e.push(Ke(.018,.018,1.65,6,-.32,1.35,-.4)),e.push(Ke(.018,.018,1.8,6,.26,1.42,-.15));const n=4.9,i=[];i.push(Ke(.09,.11,.35,10,0,0,.2,"z")),i.push(Ke(.07,.075,n,12,0,0,n/2+.15,"z")),i.push(Ke(.11,.11,.28,12,0,0,n-.05,"z")),i.push(Ke(.095,.095,.16,12,0,0,n+.18,"z"));const r=new Hs(.13,10,8);r.scale(1,1,.7),r.translate(0,0,.05),i.push(r);const a=[],o=.33,l=[1.22,-1.22],c=[-2.15,-1.3,-.45,.4,1.25,2.05];for(const d of l){for(const p of c)a.push(Ke(o,o,.22,14,d,o,p,"x"));a.push(Ke(o*1.18,o*1.18,.24,12,d,o*1.05,-2.55,"x")),a.push(Ke(o*.95,o*.95,.2,12,d,o*.95,2.55,"x"));for(const p of[-1.2,.2,1.4])a.push(Ke(.1,.1,.16,8,d,.78,p,"x"))}const h=[];h.push(An(.46,.16,5.15,0,.12,.05)),h.push(An(.42,.12,4.15,0,.78,0));const f=new Yr(.38,.13,6,12,Math.PI);f.rotateY(Math.PI/2),f.rotateZ(Math.PI),f.translate(0,.42,2.45),h.push(f);const u=new Yr(.42,.14,6,12,Math.PI);return u.rotateY(Math.PI/2),u.translate(0,.48,-2.45),h.push(u),{hull:Zr(cn(t),.72),turret:Zr(cn(e),.72),gun:cn(i),gear:cn(a),track:cn(h),muzzleZ:n+.28}}const Rc=new Map,Cr=new se,Oe=new U,ji=new U,tn=new U;function Cc(s,t,e,n){const i=n;return[{z:s*.5,xb:t*.22,xm:t*.3,xt:t*.12,yb:i+.04,ym:i+e*.28,yt:i+e*.4},{z:s*.32,xb:t*.38,xm:t*.46,xt:t*.24,yb:i,ym:i+e*.48,yt:i+e*.75},{z:s*.08,xb:t*.42,xm:t*.5,xt:t*.4,yb:i,ym:i+e*.58,yt:i+e},{z:-s*.24,xb:t*.42,xm:t*.5,xt:t*.4,yb:i,ym:i+e*.55,yt:i+e*.94},{z:-s*.42,xb:t*.36,xm:t*.44,xt:t*.28,yb:i,ym:i+e*.4,yt:i+e*.68},{z:-s*.5,xb:t*.28,xm:t*.34,xt:t*.18,yb:i+.02,ym:i+e*.24,yt:i+e*.42}]}function T_(s){const t=$r(Cc(s.length,s.width,s.height,.34)),e=$r(Cc(s.turretLen,s.turretWid,s.turretH,.02).map(v=>({...v,yb:Math.max(0,v.yb-.02)}))),n=new nn(.16,.18,.16,8);n.translate(0,s.turretH+.08,-s.turretLen*.05);const i=new hn(s.turretWid*.55,s.turretH*.55,.28);i.translate(0,s.turretH*.48,s.turretLen*.42);const r=cn([e,n,i]),a=new nn(s.gunR,s.gunR*.92,s.gunLen,8);a.rotateX(Math.PI/2),a.translate(0,0,s.gunLen/2);const o=new nn(s.gunR*1.7,s.gunR*1.7,s.gunR*3,8);o.rotateX(Math.PI/2),o.translate(0,0,s.gunLen);const l=cn([a,o]),c=[],h=.3,f=s.length*.72;for(let v=0;v<s.wheels;v++){const m=-f/2+f/Math.max(1,s.wheels-1)*v;for(const g of[-1,1]){const x=new nn(h,h,.22,8);x.rotateZ(Math.PI/2),x.translate(g*(s.width*.46),h,m),c.push(x)}}const u=v=>{for(const m of[-1,1]){const g=new nn(h*1.15,h*1.15,.2,8);g.rotateZ(Math.PI/2),g.translate(m*(s.width*.46),h,v),c.push(g)}};u(s.length*.42),u(-s.length*.44);const d=cn(c),p=new hn(.36,.52,s.length*.96);return Zr(t,Math.max(.7,s.length/3.3)),Zr(r,Math.max(.55,s.turretLen/3.1)),{hull:t,turret:r,gun:l,gear:d,track:p,muzzleZ:s.gunLen+s.gunR*2}}function w_(s){let t=Rc.get(s.id);return t||(t=s.id==="halberd"?{...E_()}:T_(s),Rc.set(s.id,t)),t}class Ua{spec;team;name;player;id;hp;alive=!0;x=0;y=0;z=0;yaw=0;speed=0;yawVel=0;turretYaw=0;turretYawVel=0;gunPitch=0;reload=0;dispersion;detected=0;shots=0;hits=0;pens=0;kills=0;damageDealt=0;blocked=0;distance=0;lastMark=0;aiFire=!1;group;turret;gun;muzzle;hullMesh;turretMesh;hullBox;turretBox;visualUp=new U(0,1,0);prevUp=new U(0,1,0);prevX=0;prevY=0;prevZ=0;prevYaw=0;yVel=0;gunPitchVel=0;circles=[{x:0,z:0,r:0},{x:0,z:0,r:0}];trackMat;dustAcc=0;splashAcc=0;constructor(t,e,n,i,r,a,o,l,c){this.id=t,this.spec=e,this.team=n,this.name=i,this.player=r,this.hp=e.hp,this.dispersion=e.baseDisp;const h=w_(e),f=e.id==="halberd",u=new Ge({map:a,roughness:.58,metalness:.18,envMapIntensity:.42});this.group=new qn,this.group.name=i,this.hullMesh=new Me(h.hull,u),this.hullMesh.castShadow=!0,this.hullMesh.receiveShadow=!0,this.group.add(this.hullMesh);const d=new Me(h.gear,l);d.castShadow=!0,this.group.add(d);const p=o.clone();p.wrapS=p.wrapT=En,p.repeat.set(1,5),p.needsUpdate=!0,this.trackMat=new Ge({map:p,roughness:f?.55:.72,metalness:f?.62:.4,color:16777215,envMapIntensity:.8});for(const g of[-1,1]){const x=new Me(h.track,this.trackMat);x.position.set(g*(f?1.22:e.width*.5+.02),f?0:.3,0),x.castShadow=!0,this.group.add(x)}this.turret=new qn,this.turret.position.set(0,.34+e.height,e.turretZ),this.group.add(this.turret),this.turretMesh=new Me(h.turret,u),this.turretMesh.castShadow=!0,this.turretMesh.receiveShadow=!0,this.turret.add(this.turretMesh),this.gun=new qn,this.gun.position.set(0,e.turretH*.42,e.turretLen*.2),this.turret.add(this.gun);const v=f?c.clone():c;f&&(v.map=p,v.color.set(16777215),v.metalness=.84,v.roughness=.38);const m=new Me(h.gun,v);m.castShadow=!0,this.gun.add(m),this.muzzle=new Re,this.muzzle.position.set(0,0,h.muzzleZ),this.gun.add(this.muzzle),h.hull.computeBoundingBox(),h.turret.computeBoundingBox(),this.hullBox=h.hull.boundingBox.clone(),this.turretBox=h.turret.boundingBox.clone()}spawn(t,e,n,i){this.x=t,this.z=e,this.yaw=n,this.turretYaw=n,this.speed=0,this.yawVel=0,this.y=i.sample(t,e).h,this.prevX=this.x,this.prevY=this.y,this.prevZ=this.z,this.prevYaw=this.yaw,this.prevUp.set(0,1,0),this.alive=!0,this.hp=this.spec.hp,this.reload=0,this.dispersion=this.spec.baseDisp,this.applyVisual(i.sample(t,e))}capturePrev(){this.prevX=this.x,this.prevY=this.y,this.prevZ=this.z,this.prevYaw=this.yaw,this.prevUp.copy(this.visualUp)}integrate(t,e,n){if(!this.alive)return;this.capturePrev();const i=this.spec,r=n.sample(this.x,this.z),[a,o]=oi(this.yaw),l=n.sample(this.x+a*2.2,this.z+o*2.2),c=n.sample(this.x-a*2.2,this.z-o*2.2),h=(l.h-c.h)/4.4,f=-9.8*h/Math.sqrt(1+h*h),u=Math.min(1,Math.abs(this.speed)/i.maxSpeed),d=Ut(t.throttle,-1,1);let p=0;if(Math.abs(d)>.04){const E=Math.sign(d),_=i.accel*(i.lowGear+(1-i.lowGear)*(1-u));p=E*_*(E<0?.72:1)}const v=d>.2&&this.speed<-.4||d<-.2&&this.speed>.4;let m=p+f-this.speed*i.drag;Math.abs(this.speed)>.25&&(m-=Math.sign(this.speed)*i.rollResist),v&&(m-=Math.sign(this.speed)*i.brake),r.waterDepth>.2&&(m-=this.speed*(1.2+r.waterDepth*2.4)),this.speed+=m*e,this.speed=Ut(this.speed,-i.reverse,i.maxSpeed),Math.abs(d)<.04&&Math.abs(this.speed)<.18&&Math.abs(f)<.35&&(this.speed=0);const g=i.neutralTurn+(i.turn-i.neutralTurn)*Math.min(1,Math.abs(this.speed)/i.maxSpeed),x=Ut(t.steer,-1,1)*g,y=i.yawAccel*e;this.yawVel+=Ut(x-this.yawVel,-y,y),this.yaw+=this.yawVel*e;const[M,b]=oi(this.yaw);this.x+=M*this.speed*e,this.z+=b*this.speed*e,this.distance+=Math.abs(this.speed)*e,this.trackMat.map.offset.y=this.distance*.22}collide(t,e,n){if(!this.alive)return;const i=A_();this.x=Ut(this.x,-i,i),this.z=Ut(this.z,-i,i);const r=t.sample(this.x,this.z);if(r.deep){let a=this.x,o=this.z,l=r.waterDepth;for(const[c,h]of[[3,0],[-3,0],[0,3],[0,-3]]){const f=t.sample(this.x+c,this.z+h);f.waterDepth<l&&(l=f.waterDepth,a=this.x+c,o=this.z+h)}this.x+=(a-this.x)*.65,this.z+=(o-this.z)*.65,this.speed*=.4}for(let a=0;a<2;a++){const o=this.bodyCircles();for(const l of o){for(const c of e){if(c.y+c.hy<.45||c.y-c.hy>1.8||Math.abs(l.x-c.x)>c.hx+c.hz+l.r+1||Math.abs(l.z-c.z)>c.hx+c.hz+l.r+1)continue;const h=R_(l.x,l.z,l.r,c);h&&(this.x+=h[0],this.z+=h[1],l.x+=h[0],l.z+=h[1])}for(const c of n){const h=l.x-c.x,f=l.z-c.z,u=Math.hypot(h,f),d=l.r+c.r;if(u<d&&u>1e-4){const p=(d-u)/u;this.x+=h*p,this.z+=f*p,l.x+=h*p,l.z+=f*p}}}}}stick(t,e){const n=t.sample(this.x,this.z),i=n.h+.02,r=Math.sqrt(Math.max(4,this.spec.susp)),a=i-this.y,o=r*r*a-2*r*this.yVel;this.yVel=Ut(this.yVel+o*e,-4,4),this.y+=this.yVel*e,tn.set(n.nx,n.ny,n.nz),tn.lengthSq()<.2&&tn.set(0,1,0),tn.normalize();const l=this.spec.id==="bulwark"?4.5:this.spec.id==="lynx"?10:7;return this.visualUp.lerp(tn,1-Math.exp(-l*e)).normalize(),n}applyVisual(t){const[e,n]=oi(this.yaw);Oe.set(e,0,n),Oe.addScaledVector(this.visualUp,-Oe.dot(this.visualUp)),Oe.lengthSq()<1e-4&&Oe.set(e,0,n),Oe.normalize(),ji.crossVectors(this.visualUp,Oe).normalize(),Oe.crossVectors(ji,this.visualUp).normalize(),Cr.makeBasis(ji,this.visualUp,Oe),this.group.position.set(this.x,this.y,this.z),this.group.quaternion.setFromRotationMatrix(Cr),this.group.updateMatrixWorld(!0)}aim(t,e,n){if(!this.alive)return;const i=Ut(e,-this.spec.dep,this.spec.elev);if(n>.5)this.turretYaw=t,this.gunPitch=i,this.turretYawVel=0,this.gunPitchVel=0;else{const o=81*Co(this.turretYaw,t)-18*this.turretYawVel;this.turretYawVel=Ut(this.turretYawVel+o*n,-this.spec.turretTurn,this.spec.turretTurn),this.turretYaw+=this.turretYawVel*n;const c=81*(i-this.gunPitch)-18*this.gunPitchVel;this.gunPitchVel=Ut(this.gunPitchVel+c*n,-this.spec.gunSlew,this.spec.gunSlew),this.gunPitch+=this.gunPitchVel*n}this.turret.rotation.y=this.turretYaw-this.yaw,this.gun.rotation.x=-this.gunPitch}pose(t){const e=Ut(t,0,1),n=this.prevX+(this.x-this.prevX)*e,i=this.prevY+(this.y-this.prevY)*e,r=this.prevZ+(this.z-this.prevZ)*e,a=this.prevYaw+Co(this.prevYaw,this.yaw)*e;tn.copy(this.prevUp).lerp(this.visualUp,e),tn.lengthSq()<.2&&tn.set(0,1,0),tn.normalize();const[o,l]=oi(a);Oe.set(o,0,l),Oe.addScaledVector(tn,-Oe.dot(tn)),Oe.lengthSq()<1e-4&&Oe.set(o,0,l),Oe.normalize(),ji.crossVectors(tn,Oe).normalize(),Oe.crossVectors(ji,tn).normalize(),Cr.makeBasis(ji,tn,Oe),this.group.position.set(n,i,r),this.group.quaternion.setFromRotationMatrix(Cr)}settle(t){const e=this.spec,n=Math.min(1,Math.abs(this.speed)/e.maxSpeed),i=Math.min(1,Math.abs(this.yawVel)/Math.max(.15,e.turn)),r=Math.min(1,Math.abs(this.turretYawVel)/Math.max(.12,e.turretTurn)),a=e.baseDisp+e.moveDisp*n+e.hullDisp*i+e.turretDisp*r;a>this.dispersion?this.dispersion=a:this.dispersion=Ph(this.dispersion,a,e.aimRate,t),this.reload>0&&(this.reload=Math.max(0,this.reload-t))}fired(){this.reload=this.spec.reload,this.dispersion+=this.spec.fireDisp,this.shots++}kill(){this.alive&&(this.alive=!1,this.speed=0,this.hp=0,this.group.traverse(t=>{const e=t;if(!e.isMesh)return;const n=e.material;if(n instanceof Ge){const i=n.clone();i.color.multiplyScalar(.32),i.emissive.setHex(2756620),i.emissiveIntensity=.4,e.material=i}}))}bodyCircles(){const[t,e]=oi(this.yaw),n=this.spec.length*.22,i=this.spec.width*.4;return this.circles[0].x=this.x+t*n,this.circles[0].z=this.z+e*n,this.circles[0].r=i,this.circles[1].x=this.x-t*n,this.circles[1].z=this.z-e*n,this.circles[1].r=i,this.circles}exhaust(t,e,n,i){if(this.alive){if(Math.abs(this.speed)>1.6&&(this.dustAcc+=t*Math.abs(this.speed),this.dustAcc>.09)){this.dustAcc=0;const[r,a]=oi(this.yaw);n(this.x-r*this.spec.length*.4,this.y+.3,this.z-a*this.spec.length*.4)}e.waterDepth>.12&&Math.abs(this.speed)>1.5&&(this.splashAcc+=t,this.splashAcc>.12&&(this.splashAcc=0,i(this.x,e.ground+.1,this.z)))}}}function A_(){return 196}const Fa=[0,0];function R_(s,t,e,n){const[i,r]=Po(s-n.x,t-n.z,n.rot),a=Ut(i,-n.hx,n.hx),o=Ut(r,-n.hz,n.hz);let l=i-a,c=r-o,h=Math.hypot(l,c);if(h>=e)return null;if(h<1e-4){const m=n.hx-Math.abs(i),g=n.hz-Math.abs(r);m<g?(l=Math.sign(i||1),c=0):(c=Math.sign(r||1),l=0),h=0}const f=l/(h||1),u=c/(h||1),[d,p]=Dh(f,u,n.rot),v=e-h;return Fa[0]=d*v,Fa[1]=p*v,Fa}function C_(s){for(let t=0;t<s.length;t++){const e=s[t];for(let n=t+1;n<s.length;n++){const i=s[n],r=i.x-e.x,a=i.z-e.z,o=Math.hypot(r,a),l=e.spec.width*.55+i.spec.width*.55;if(o>=l||o<1e-4)continue;const c=(l-o)/o,h=i.spec.mass/(e.spec.mass+i.spec.mass),f=e.spec.mass/(e.spec.mass+i.spec.mass);e.alive&&(e.x-=r*c*h,e.z-=a*c*h),i.alive&&(i.x+=r*c*f,i.z+=a*c*f)}}}function P_(){return{gear:new Ge({color:3816504,roughness:.48,metalness:.62}),gun:new Ge({color:7238510,roughness:.38,metalness:.7})}}class D_ extends Ed{constructor(t){super(t),this.type=Pe}parse(t){const a=function(S,A){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(A||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(A||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(A||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(A||""))}},f=function(S,A,R){A=A||1024;let L=S.pos,F=-1,P=0,z="",B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));for(;0>(F=B.indexOf(`
`))&&P<A&&L<S.byteLength;)z+=B,P+=B.length,L+=128,B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));return-1<F?(S.pos+=P+F+1,z+B.slice(0,F)):!1},u=function(S){const A=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,F=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,B;for((S.pos>=S.byteLength||!(z=f(S)))&&a(1,"no header found"),(B=z.match(A))||a(3,"bad initial token"),P.valid|=1,P.programtype=B[1],P.string+=z+`
`;z=f(S),z!==!1;){if(P.string+=z+`
`,z.charAt(0)==="#"){P.comments+=z+`
`;continue}if((B=z.match(R))&&(P.gamma=parseFloat(B[1])),(B=z.match(D))&&(P.exposure=parseFloat(B[1])),(B=z.match(L))&&(P.valid|=2,P.format=B[1]),(B=z.match(F))&&(P.valid|=4,P.height=parseInt(B[1],10),P.width=parseInt(B[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},d=function(S,A,R){const D=A;if(D<8||D>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);D!==(S[2]<<8|S[3])&&a(3,"wrong scanline width");const L=new Uint8Array(4*A*R);L.length||a(4,"unable to allocate buffer space");let F=0,P=0;const z=4*D,B=new Uint8Array(4),W=new Uint8Array(z);let tt=R;for(;tt>0&&P<S.byteLength;){P+4>S.byteLength&&a(1),B[0]=S[P++],B[1]=S[P++],B[2]=S[P++],B[3]=S[P++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=D)&&a(3,"bad rgbe scanline format");let H=0,q;for(;H<z&&P<S.byteLength;){q=S[P++];const gt=q>128;if(gt&&(q-=128),(q===0||H+q>z)&&a(3,"bad scanline data"),gt){const Rt=S[P++];for(let Y=0;Y<q;Y++)W[H++]=Rt}else W.set(S.subarray(P,P+q),H),H+=q,P+=q}const j=D;for(let gt=0;gt<j;gt++){let Rt=0;L[F]=W[gt+Rt],Rt+=D,L[F+1]=W[gt+Rt],Rt+=D,L[F+2]=W[gt+Rt],Rt+=D,L[F+3]=W[gt+Rt],F+=4}tt--}return L},p=function(S,A,R,D){const L=S[A+3],F=Math.pow(2,L-128)/255;R[D+0]=S[A+0]*F,R[D+1]=S[A+1]*F,R[D+2]=S[A+2]*F,R[D+3]=1},v=function(S,A,R,D){const L=S[A+3],F=Math.pow(2,L-128)/255;R[D+0]=er.toHalfFloat(Math.min(S[A+0]*F,65504)),R[D+1]=er.toHalfFloat(Math.min(S[A+1]*F,65504)),R[D+2]=er.toHalfFloat(Math.min(S[A+2]*F,65504)),R[D+3]=er.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const g=u(m),x=g.width,y=g.height,M=d(m.subarray(m.pos),x,y);let b,E,_;switch(this.type){case sn:_=M.length/4;const S=new Float32Array(_*4);for(let R=0;R<_;R++)p(M,R*4,S,R*4);b=S,E=sn;break;case Pe:_=M.length/4;const A=new Uint16Array(_*4);for(let R=0;R<_;R++)v(M,R*4,A,R*4);b=A,E=Pe;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:y,data:b,header:g.string,gamma:g.gamma,exposure:g.exposure,type:E,colorSpace:ss,minFilter:Te,magFilter:Te,generateMipmaps:!1,flipY:!0}}setDataType(t){return this.type=t,this}}class L_ extends D_{constructor(t){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(t)}}const N_=""+new URL("grass_diff-vig3bC4b.jpg",import.meta.url).href,I_=""+new URL("grass_nor-Cp8RKkAj.jpg",import.meta.url).href,U_=""+new URL("grass_rough-Cb20WbX1.jpg",import.meta.url).href,F_=""+new URL("dirt_diff-B9P7P3b1.jpg",import.meta.url).href,O_=""+new URL("dirt_nor-BR9vrr9r.jpg",import.meta.url).href,z_=""+new URL("dirt_rough-Db88IvB1.jpg",import.meta.url).href,B_=""+new URL("rock_diff-Clx6WbHJ.jpg",import.meta.url).href,k_=""+new URL("rock_nor-B8WSHJ2I.jpg",import.meta.url).href,G_=""+new URL("rock_rough-rTGZWDKj.jpg",import.meta.url).href,H_=""+new URL("sand_diff-DqxI4022.jpg",import.meta.url).href,V_=""+new URL("sand_nor-BtdEeoec.jpg",import.meta.url).href,W_=""+new URL("bark_diff-BEBFBPsY.jpg",import.meta.url).href,X_=""+new URL("bark_nor-DnOM-dyB.jpg",import.meta.url).href,q_=""+new URL("concrete_diff-5XU0sVYe.jpg",import.meta.url).href,Y_=""+new URL("concrete_nor-CXvJtMJ2.jpg",import.meta.url).href,Z_=""+new URL("metal_diff-BDFqcIP1.jpg",import.meta.url).href,$_=""+new URL("metal_nor-B-V-k_xH.jpg",import.meta.url).href,K_=""+new URL("metal_rough-Zm_YpI4I.jpg",import.meta.url).href,J_=""+new URL("sky-C35ymwQp.hdr",import.meta.url).href;function nl(s,t,e=!1){const n=new fd(s);return n.colorSpace=t?Qe:pn,n.wrapS=n.wrapT=e?En:n.wrapS,e&&(n.wrapS=En,n.wrapT=En),n.needsUpdate=!0,n}function Pr(s,t,e){let n=0,i=1,r=1,a=0;for(let o=0;o<4;o++)n+=s(t*r,e*r)*i,a+=i,i*=.5,r*=2;return n/a}function Q_(s,t,e,n){const i=Pr(s,t,e),r=Pr(s,t-n,e),a=Pr(s,t,e-n),o=Pr(s,t-n,e-n),l=t/n,c=e/n,h=l*l*(3-2*l),f=c*c*(3-2*c);return en(en(i,r,h),en(a,o,h),f)}async function j_(){await new Promise(s=>setTimeout(s,0))}function Rn(s,t,e,n=!0){const i=document.createElement("canvas");i.width=i.height=s;const r=i.getContext("2d");if(!r)throw new Error("2d context unavailable");return t(r,s),nl(i,e,n)}function ze(s,t,e){const n=s.load(t);return n.colorSpace=e?Qe:pn,n.wrapS=n.wrapT=En,n.anisotropy=8,n}function tx(s){return s(.08,"Unrolling surveyed ground"),new Promise((t,e)=>{const n=new mh,i=new Td(n),r={grass:ze(i,N_,!0),grassN:ze(i,I_,!1),grassR:ze(i,U_,!1),dirt:ze(i,F_,!0),dirtN:ze(i,O_,!1),dirtR:ze(i,z_,!1),rock:ze(i,B_,!0),rockN:ze(i,k_,!1),rockR:ze(i,G_,!1),sand:ze(i,H_,!0),sandN:ze(i,V_,!1),bark:ze(i,W_,!0),barkN:ze(i,X_,!1),concrete:ze(i,q_,!0),concreteN:ze(i,Y_,!1),metal:ze(i,Z_,!0),metalN:ze(i,$_,!1),metalR:ze(i,K_,!1),sky:new L_(n).load(J_)};r.sky.mapping=Lr,r.sky.colorSpace=ss,n.onLoad=()=>t(r),n.onError=a=>e(new Error(`Texture failed: ${a}`))})}async function ex(s){const t=await tx(s);s(.55,"Weathering the company");const e=Rn(256,(u,d)=>{const p=u.createImageData(d,d),v=tl(ui(99));for(let m=0;m<d;m++)for(let g=0;g<d;g++){const x=Q_(v,g*1.4,m*1.4,d*1.4),y=Math.floor(Ut(x*.5+.5,0,1)*255),M=(m*d+g)*4;p.data[M]=p.data[M+1]=p.data[M+2]=y,p.data[M+3]=255}u.putImageData(p,0,0)},!1,!0),n=Rn(256,(u,d)=>{u.fillStyle="#d9d0bd",u.fillRect(0,0,d,d);const p=ui(3);for(let v=0;v<40;v++)u.fillStyle=`rgba(90, 70, 50, ${.04+p()*.08})`,u.beginPath(),u.ellipse(p()*d,p()*d,10+p()*40,8+p()*24,p()*3,0,Math.PI*2),u.fill();u.strokeStyle="rgba(60,40,30,0.25)",u.lineWidth=1;for(let v=0;v<8;v++)u.beginPath(),u.moveTo(p()*d,p()*d),u.lineTo(p()*d,p()*d),u.stroke()},!0),i=Rn(256,(u,d)=>{u.fillStyle="#c4b5a4",u.fillRect(0,0,d,d);for(let p=0;p<d;p+=28){const v=p/28%2===0?0:22;for(let m=-40;m<d;m+=46){const g=(m+p)%17-8;u.fillStyle=`rgb(${148+g}, ${72+g*.4}, 58)`,u.fillRect(m+v+2,p+2,40,22)}}},!0),r=Rn(256,(u,d)=>{u.fillStyle="#6e3d32",u.fillRect(0,0,d,d);for(let p=0;p<d;p+=18){u.fillStyle=p%36===0?"#7d4a3c":"#5e342c";for(let v=-20;v<d;v+=22){const m=p/18%2===0?0:11;u.beginPath(),u.moveTo(v+m,p+16),u.lineTo(v+m+11,p+2),u.lineTo(v+m+22,p+16),u.closePath(),u.fill()}}},!0),a=Rn(256,(u,d)=>{u.fillStyle="#8d877c",u.fillRect(0,0,d,d);const p=ui(11);for(let v=0;v<d;v+=28){const m=v/28%2===0?0:24;for(let g=-40;g<d;g+=48){const x=(p()-.5)*8;u.fillStyle=`rgb(${120+x}, ${116+x}, ${108+x})`,u.fillRect(g+m+2,v+2,44,24),u.strokeStyle="rgba(50,46,40,0.55)",u.strokeRect(g+m+2,v+2,44,24)}}},!0),o=Rn(128,(u,d)=>{u.fillStyle="#1c1b18",u.fillRect(0,0,64,d);for(let p=0;p<d;p+=8)u.fillStyle=p%16===0?"#3a342c":"#2a261f",u.fillRect(4,p,56,5),u.fillStyle="#111",u.fillRect(0,p+6,64,2)},!0);o.repeat.set(1,6);const l=(u,d)=>Rn(512,(p,v)=>{p.fillStyle=u[0],p.fillRect(0,0,v,v);const m=ui(d);for(let g=0;g<5;g++){const x=m()*v,y=m()*v;p.fillStyle=u[1+g%(u.length-1)],p.beginPath(),p.ellipse(x,y,v*(.22+m()*.16),v*(.12+m()*.1),m()*3,0,Math.PI*2),p.fill(),p.strokeStyle=u[u.length-1],p.lineWidth=6,p.stroke()}},!0,!0),c=Rn(128,(u,d)=>{u.clearRect(0,0,d,d);const p=["rgba(92,104,62,0.95)","rgba(74,86,52,0.92)","rgba(112,118,74,0.9)"];[28,52,74,98].forEach((m,g)=>{u.fillStyle=p[g%p.length],u.beginPath(),u.moveTo(m-5,d),u.quadraticCurveTo(m+(g%2===0?6:-8),d*.45,m+(g%2===0?-2:4),10),u.quadraticCurveTo(m+8,d*.5,m+6,d),u.fill()})},!0,!1);c.premultiplyAlpha=!1;const h=u=>Rn(128,(d,p)=>{d.clearRect(0,0,p,p),d.translate(p/2,p/2),u==="cinder"?(d.fillStyle="#e0a84a",d.beginPath(),d.moveTo(0,-36),d.lineTo(28,30),d.lineTo(0,14),d.lineTo(-28,30),d.closePath(),d.fill()):(d.fillStyle="#d5dbe3",d.rotate(Math.PI/4),d.fillRect(-22,-22,44,44))},!0,!1),f=Rn(64,(u,d)=>{const p=u.createRadialGradient(d/2,d/2,2,d/2,d/2,d/2);p.addColorStop(0,"rgba(255,255,255,1)"),p.addColorStop(.4,"rgba(255,255,255,0.65)"),p.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=p,u.fillRect(0,0,d,d)},!1,!1);for(const u of[n,i,r])u.wrapS=u.wrapT=En,u.repeat.set(3,3);return s(.82,"Painting the company"),await j_(),{...t,cloud:e,plaster:n,timber:i,roof:r,stone:a,track:o,camoCinder:l(["#7d8a56","#3f4e2c","#c6c68a","#243018"],4),camoSlate:l(["#8d959c","#46525c","#d5d8d2","#2a3138"],8),halberd:nx(),blade:c,leaf:ix(),emblemCinder:h("cinder"),emblemSlate:h("slate"),sprite:f,anisotropy:8}}function nx(){const t=document.createElement("canvas");t.width=t.height=1024;const e=t.getContext("2d");if(!e)throw new Error("2d context unavailable");e.fillStyle="#1a3f66",e.fillRect(0,0,1024,1024);const n="#efe0c2",i="#e2c89a";e.lineJoin="round",e.lineCap="round",Pc(e,1024*.5,1024*.48,1024*.92,n),Pc(e,1024*.08,1024*.92,1024*.34,i),e.strokeStyle="#0c243c",e.lineWidth=14,e.stroke();const r=e.getImageData(0,0,1024,1024),a=tl(ui(99));for(let l=0;l<1024;l++)for(let c=0;c<1024;c++){const h=(l*1024+c)*4,f=a(c*.004,l*.004)>.62?-18:0;r.data[h]=Ut(r.data[h]+f*.4,0,255),r.data[h+1]=Ut(r.data[h+1]+f*.7,0,255),r.data[h+2]=Ut(r.data[h+2]+f*.25,0,255)}e.putImageData(r,0,0);const o=nl(t,!0,!0);return o.anisotropy=8,o}function Pc(s,t,e,n,i){s.save(),s.translate(t,e),s.fillStyle=i,s.strokeStyle="#0c243c",s.lineWidth=Math.max(10,n*.035),s.beginPath(),s.moveTo(-n*.42,-n*.08),s.lineTo(-n*.42,-n*.34),s.quadraticCurveTo(n*.1,-n*.4,n*.36,-n*.05),s.quadraticCurveTo(n*.48,n*.18,n*.12,n*.28),s.quadraticCurveTo(-n*.05,n*.34,-n*.08,n*.08),s.quadraticCurveTo(-n*.1,-n*.08,n*.08,-n*.12),s.quadraticCurveTo(n*.18,-n*.14,n*.16,n*.02),s.lineTo(-n*.02,n*.08),s.closePath(),s.fill(),s.stroke(),s.restore()}function ix(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d");if(!e)throw new Error("2d context unavailable");e.clearRect(0,0,256,256);const n=[[118,132,78,36,.4,"rgba(86,96,58,0.95)"],[150,108,64,28,-.6,"rgba(112,118,72,0.92)"],[96,96,58,26,1.1,"rgba(70,80,50,0.94)"],[168,156,52,22,.2,"rgba(98,104,64,0.9)"],[128,150,70,24,-.2,"rgba(78,88,54,0.93)"]];for(const[r,a,o,l,c,h]of n){e.save(),e.translate(r,a),e.rotate(c);const f=e.createRadialGradient(0,0,o*.15,0,0,o);f.addColorStop(0,h),f.addColorStop(.72,h),f.addColorStop(1,"rgba(70,80,50,0)"),e.fillStyle=f,e.beginPath(),e.ellipse(0,0,o,l,0,0,Math.PI*2),e.fill(),e.restore()}const i=nl(t,!0,!1);return i.premultiplyAlpha=!1,i}class sx{selected="halberd";onDeploy=()=>{};onAgain=()=>{};onGarage=()=>{};onResume=()=>{};onQuit=()=>{};onQuality=()=>{};onVolume=()=>{};onMap=()=>{};qualityButtons=[];allyNodes=[];enemyNodes=[];floaterNodes=[];plateNodes=[];hitTimer=0;lastDealt=0;fireRing=null;constructor(){const t=document.querySelector("#tank-list");if(!t)return;for(const o of Bg){const l=kr[o],c=document.createElement("button");c.type="button",c.className="tank-card"+(o===this.selected?" selected":""),c.dataset.tank=o;const h=Math.round(l.maxSpeed/10.9*100),f=Math.round(l.armorHull[0]/200*100),u=Math.round(l.damage/l.reload/50*100);c.innerHTML=`<span class="role">${l.role}</span><strong>${l.name}</strong><p>${l.blurb}</p>
        ${Oa("Pace",h)}${Oa("Plate",f)}${Oa("Bite",u)}`,c.addEventListener("click",()=>{this.selected=o,t.querySelectorAll(".tank-card").forEach(d=>d.classList.toggle("selected",d.dataset.tank===o))}),t.append(c)}const e=document.querySelector("#quality");for(const[o,l]of["Performance","Balanced","High"].entries()){const c=document.createElement("button");c.type="button",c.textContent=l,c.addEventListener("click",()=>this.onQuality(o)),e?.append(c),this.qualityButtons.push(c)}document.querySelector("#battle")?.addEventListener("click",()=>this.onDeploy(this.selected)),document.querySelector("#again")?.addEventListener("click",()=>this.onAgain()),document.querySelector("#garage")?.addEventListener("click",()=>this.onGarage()),document.querySelector("#resume")?.addEventListener("click",()=>this.onResume()),document.querySelector("#quit")?.addEventListener("click",()=>this.onQuit()),document.querySelector("#minimap-wrap")?.addEventListener("click",()=>this.onMap());const n=document.querySelector("#volume"),i=localStorage.getItem("ashen-volume");n&&i&&(n.value=i),n?.addEventListener("input",()=>{localStorage.setItem("ashen-volume",n.value),this.onVolume(Number(n.value))}),this.fireRing=document.querySelector("#fire-left-ring");const r=document.querySelector("#floaters");for(let o=0;o<24;o++){const l=document.createElement("div");l.className="floater",l.hidden=!0,r?.append(l),this.floaterNodes.push(l)}const a=document.querySelector("#plates");for(let o=0;o<14;o++){const l=document.createElement("div");l.className="plate",l.hidden=!0,l.innerHTML="<b></b><i><span></span></i><em></em>",a?.append(l),this.plateNodes.push(l)}}volume(){const t=document.querySelector("#volume");return t?Number(t.value):.75}setQuality(t){this.qualityButtons.forEach((e,n)=>e.classList.toggle("on",n===t))}progress(t,e){const n=document.querySelector("#load-fill"),i=document.querySelector("#load-label");n&&(n.style.width=`${Math.round(t*100)}%`),i&&(i.textContent=e)}showMenu(){dn("#loading",!1),dn("#menu",!0),dn("#hud",!1),dn("#end",!1),dn("#pause",!1)}showBattle(){dn("#menu",!1),dn("#loading",!1),dn("#end",!1),dn("#pause",!1),dn("#hud",!0)}showPause(t){dn("#pause",t)}showEnd(t){dn("#end",!0);const e=document.querySelector("#end-title"),n=document.querySelector("#end-sub"),i=document.querySelector("#end-stats");e&&(e.textContent=t.title),n&&(n.textContent=t.subtitle),i&&(i.innerHTML=t.rows.map(([r,a])=>`<dt>${r}</dt><dd>${a}</dd>`).join(""))}ensureRosters(t,e){this.allyNodes=Dc(document.querySelector("#allies"),t,this.allyNodes),this.enemyNodes=Dc(document.querySelector("#enemies"),e,this.enemyNodes)}update(t){Cn("#clock",t.time),Cn("#ally-count",String(t.allies)),Cn("#enemy-count",String(t.enemies));const e=document.querySelector("#hud");e?.classList.toggle("sniper",t.sniper),e?.classList.toggle("locked",t.locked),e?.classList.toggle("ready",t.ready),document.querySelector("#btn-fire")?.classList.toggle("armed",t.ready),document.querySelector("#btn-fire-left")?.classList.toggle("armed",t.ready);const n=document.querySelector("#btn-zoom");n&&(n.textContent=t.sniper?"Exit":"Zoom",n.classList.toggle("zoomed",t.sniper),n.setAttribute("aria-label",t.sniper?"Exit zoom":"Zoom"));const i=document.querySelector("#spotted");i&&(i.hidden=!t.spotted);const r=document.querySelector("#banner");r&&(r.hidden=!t.banner,r.textContent=t.banner);const a=document.querySelector("#cap");a&&(a.hidden=!t.cap,a.classList.toggle("bad",t.capBad)),Cn("#cap-label",t.cap);const o=document.querySelector("#cap-fill");o&&(o.style.width=`${Math.round(t.capP*100)}%`),Cn("#tank-name",t.tankName),Cn("#tank-role",t.role),Cn("#speed",`${Math.round(Math.abs(t.speed)*3.6)} km/h`),Cn("#hp-num",String(Math.max(0,Math.round(t.hp))));const l=document.querySelector("#hp"),c=t.maxHp>0?t.hp/t.maxHp:0;l?.classList.toggle("low",c<.3),l?.classList.toggle("mid",c>=.3&&c<.6);const h=document.querySelector("#hp-fill");h&&(h.style.width=`${Math.max(0,c)*100}%`);const f=t.reloadTime>0?1-t.reload/t.reloadTime:1,u=document.querySelector("#reload-fill");u&&(u.style.width=`${Math.max(0,Math.min(1,f))*100}%`),this.fireRing&&(this.fireRing.style.strokeDashoffset=String((1-Math.max(0,Math.min(1,f)))*289));const d=document.querySelector("#aim-circle");if(d){const x=Math.max(12,t.aimPx*2);d.style.width=`${x}px`,d.style.height=`${x}px`}const p=document.querySelector("#gun-mark");if(p&&(p.hidden=!t.gunVisible,p.style.left=`${t.gunX}px`,p.style.top=`${t.gunY}px`),t.hit){const x=document.querySelector("#hit-mark");x?.classList.remove("show","bounce"),x?.offsetWidth,x?.classList.add("show"),t.hit==="bounce"&&x?.classList.add("bounce")}const v=document.querySelector("#hit-flash");if(v){const x=50+Math.sin(t.hurtAngle)*46,y=50-Math.cos(t.hurtAngle)*46;v.style.setProperty("--hx",`${x}%`),v.style.setProperty("--hy",`${y}%`),v.style.opacity=String(Math.min(1,t.hurt))}const m=document.querySelector("#dealt");Cn("#dealt-num",Math.round(t.dealt).toLocaleString()),m&&t.dealt!==this.lastDealt&&(this.lastDealt=t.dealt,m.classList.remove("tick"),m.offsetWidth,t.dealt>0&&m.classList.add("tick")),Cn("#fps",`${t.fps} fps`),Lc(this.allyNodes,t.alliesRows),Lc(this.enemyNodes,t.enemyRows);const g=document.querySelector("#feed");g&&(g.innerHTML=t.feed.map(x=>`<p class="${x.kind}">${x.text}</p>`).join(""));for(let x=0;x<this.floaterNodes.length;x++){const y=this.floaterNodes[x],M=t.floaters[x];if(!M||M.life<=0){y.hidden=!0;continue}y.hidden=!1,y.className=`floater ${M.kind}`,y.style.left=`${M.x}px`,y.style.top=`${M.y}px`,y.textContent=M.text,y.style.opacity=String(Math.max(0,Math.min(1,M.life)))}for(let x=0;x<this.plateNodes.length;x++){const y=this.plateNodes[x],M=t.plates[x];if(!M||!M.show){y.hidden=!0;continue}y.hidden=!1,y.className=M.ally?"plate ally":"plate enemy",y.style.left=`${M.x}px`,y.style.top=`${M.y}px`;const b=y.querySelector("b"),E=y.querySelector("span"),_=y.querySelector("em");b&&(b.textContent=M.name),_&&(_.textContent=String(Math.max(0,Math.round(M.hp)))),E&&(E.style.width=`${M.max>0?Math.max(0,M.hp/M.max)*100:0}%`)}this.hitTimer}drawMap(t,e,n,i,r){const a=document.querySelector("#minimap"),o=a?.getContext("2d");if(!a||!o)return;o.clearRect(0,0,256,256),o.drawImage(t,0,0,256,256);const l=h=>(h+210)/420*256,c=h=>(210-h)/420*256;Ic(o,l(0),c(176),16,r.north,"#e0a84a"),Ic(o,l(0),c(-176),16,r.south,"#7f93ad");for(const h of i)Nc(o,l(h.x),c(h.z),h.dead?"#5a403c":"#e36d5c");for(const h of n)Nc(o,l(h.x),c(h.z),h.dead?"#44523a":"#9dce7c");e&&(o.save(),o.translate(l(e.x),c(e.z)),o.rotate(-e.yaw),o.fillStyle="#f4efe2",o.beginPath(),o.moveTo(0,-7),o.lineTo(5,6),o.lineTo(-5,6),o.closePath(),o.fill(),o.restore())}}function Oa(s,t){return`<div class="stat"><span>${s}</span><i><span style="width:${Math.max(6,Math.min(100,t))}%"></span></i></div>`}function dn(s,t){const e=document.querySelector(s);e&&(e.hidden=!t)}function Cn(s,t){const e=document.querySelector(s);e&&e.textContent!==t&&(e.textContent=t)}function Dc(s,t,e){if(!s)return e;s.innerHTML="";const n=[];for(let i=0;i<t;i++){const r=document.createElement("div");r.className="row-tank",r.innerHTML='<span class="tag"></span><div><b></b><div class="mini"><span></span></div></div><em></em>',s.append(r),n.push(r)}return n}function Lc(s,t){for(let e=0;e<s.length;e++){const n=s[e],i=t[e];if(!i)continue;n.classList.toggle("dead",i.dead),n.classList.toggle("self",i.self);const r=n.querySelector(".tag"),a=n.querySelector("b"),o=n.querySelector(".mini span"),l=n.querySelector("em");r&&(r.textContent=i.role.slice(0,1)),a&&(a.textContent=i.name),l&&(l.textContent=i.dead?"—":String(Math.max(0,Math.round(i.hp)))),o&&(o.style.width=`${i.max>0?Math.max(0,i.hp/i.max)*100:0}%`)}}function Nc(s,t,e,n){s.fillStyle=n,s.beginPath(),s.arc(t,e,3.2,0,Math.PI*2),s.fill()}function Ic(s,t,e,n,i,r){s.strokeStyle=r,s.lineWidth=2,s.beginPath(),s.arc(t,e,n,0,Math.PI*2),s.stroke(),i>0&&(s.beginPath(),s.arc(t,e,n-3,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,i)),s.stroke())}const rx=`
varying vec3 vWorld;
varying vec2 vUv;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,ax=`
precision highp float;
varying vec3 vWorld;
varying vec2 vUv;
uniform sampler2D uField;
uniform sampler2D uSky;
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
  vec3 deep = vec3(0.015, 0.14, 0.18);
  vec3 shallow = vec3(0.16, 0.46, 0.38);
  float dk = smoothstep(0.08, 2.4, depth);
  vec3 waterCol = mix(shallow, deep, dk);
  vec3 R = reflect(-view, nrm);
  vec2 skyUv = vec2(atan(R.z, R.x) * 0.1591549 + 0.5, asin(clamp(R.y, -1.0, 1.0)) * 0.31831 + 0.5);
  vec3 refl = texture2D(uSky, skyUv).rgb;
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
`;function ox(s,t){const e=new Ne,n=yt.half,i=.02,r=new Float32Array([-n,i,-n,n,i,-n,-n,i,n,n,i,n]),a=new Float32Array([0,0,1,0,0,1,1,1]);e.setAttribute("position",new Yt(r,3)),e.setAttribute("uv",new Yt(a,2)),e.setIndex([0,2,1,1,2,3]),e.computeVertexNormals();const o=new be({transparent:!0,depthWrite:!1,uniforms:{uField:{value:s},uSky:{value:t},uSun:{value:na.clone()},uFogColor:{value:new U(Ls.r,Ls.g,Ls.b)},uFogDensity:{value:.00225},uTime:{value:0}},vertexShader:rx,fragmentShader:ax}),l=new Me(e,o);return l.renderOrder=2,l.name="water",l}function lx(s,t){s.material.uniforms.uTime.value=t}const ii=1/60,za=new U,fe=new U,ke=new U,Xt=new U,Uc=new U,Dr=new U,Ba=new U,bs=new U,Gn=new U,Hn={x:0,v:0};class cx{phase="boot";capTime=48;canvas;ui=new sx;audio=new i_;input;scene=new Qu;camera=new fn(58,1,.15,1400);renderer;terrain;scenery;skyMesh;waterMesh;particles;tracks;composer=null;combat;ai=new Jg;tex;sun;boom=new Yl(16742195,0,26,2);flash=new Yl(16769194,0,12,2);tanks=[];player=null;profile=ws[zg()];lockQuality;counts={trees:1,broad:1,pines:1,grass:1,reeds:1,rocks:1};camYaw=0;camPitch=-.32;camDist=15;sniper=0;look=new U;timeLeft=420;countdown=0;capNorth=0;capSouth=0;elapsed=0;acc=0;last=0;fps=60;fpsFrames=0;fpsAccum=0;lowTimer=0;shake=0;hurt=0;hurtAngle=0;hit="";hitAge=0;feed=[];floaters=Array.from({length:24},()=>({x:0,y:0,z:0,text:"",life:0,max:1,kind:"pen"}));screenFloaters=Array.from({length:24},()=>({x:0,y:0,text:"",life:0,kind:"pen"}));plateBuf=Array.from({length:14},()=>({x:0,y:0,name:"",hp:0,max:1,ally:!0,show:!1}));allyMarks=Array.from({length:8},()=>({x:0,z:0,dead:!1}));enemyMarks=Array.from({length:8},()=>({x:0,z:0,dead:!1}));camSmooth=new U;camVel=new U;focusSmooth=new U;focusVel=new U;lookVel=new U;lookDelta={x:0,y:0};aimPoint=new U;gunPoint=new U;launchDir=new U;localDir=new U;invQuat=new Ni;holdSniper=!1;aimReady=!1;lastRim=null;postGrid=null;postBuf=[];resScale=1;treeLod=1;wall=0;result=null;pausedFrom="battle";mapBig=!1;platePoint=new U;constructor(){const t=document.querySelector("#view");if(!(t instanceof HTMLCanvasElement))throw new Error("Missing view canvas");this.canvas=t;const e=document.querySelector("#input-layer"),n=document.querySelector("#stick"),i=document.querySelector("#knob");if(!(e instanceof HTMLElement)||!(n instanceof HTMLElement)||!(i instanceof HTMLElement))throw new Error("Missing touch controls");this.input=new s_(e,n,i),this.lockQuality=new URLSearchParams(location.search).has("quality"),this.ui.onDeploy=r=>{this.audio.unlock(),this.start(r)},this.ui.onAgain=()=>{this.audio.unlock(),this.player&&this.start(this.player.spec.id)},this.ui.onGarage=()=>this.garage(),this.ui.onResume=()=>this.resume(),this.ui.onQuit=()=>this.garage(),this.ui.onQuality=r=>this.applyQuality(r),this.ui.onVolume=r=>this.audio.setVolume(r),this.ui.onMap=()=>{this.mapBig=!this.mapBig,document.querySelector("#minimap-wrap")?.classList.toggle("big",this.mapBig)},this.audio.setVolume(this.ui.volume()),document.addEventListener("visibilitychange",()=>{document.hidden?this.audio.suspend():this.audio.resume()})}async boot(){this.renderer=new Rg({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.renderer.outputColorSpace=Qe,this.renderer.toneMapping=Kr,this.renderer.toneMappingExposure=.82,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=As,this.renderer.setClearColor(Ls,1),this.ui.progress(.02,"Opening the valley"),this.tex=await ex((r,a)=>this.ui.progress(.02+r*.7,a));const t=this.renderer.capabilities.getMaxAnisotropy();for(const r of Object.values(this.tex))r&&typeof r=="object"&&"anisotropy"in r&&(r.anisotropy=Math.min(8,t));this.ui.progress(.78,"Raising Emberfield"),await ux(),this.terrain=new f_(this.tex),this.scene.add(this.terrain.mesh),this.skyMesh=S_(),this.waterMesh=ox(this.terrain.field,this.tex.sky),this.scene.add(this.waterMesh),this.scenery=p_(this.terrain,this.tex),this.scene.add(this.scenery.group),this.counts={trees:this.scenery.trunks.count,broad:this.scenery.broad.count,pines:this.scenery.pines.count,grass:this.scenery.grass.count,reeds:this.scenery.reeds.count,rocks:this.scenery.rocks.count},this.particles=new a_(this.tex.sprite,this.profile.particles);for(const r of this.particles.objects)this.scene.add(r);this.tracks=new o_,this.scene.add(this.tracks.mesh),this.combat=new Yg(this.scene),this.scene.fog=new Yo(Ls,.0034),this.scene.add(b_());const e=new Gs(this.renderer);e.compileEquirectangularShader();const n=e.fromEquirectangular(this.tex.sky);this.scene.environment=n.texture,this.scene.environmentIntensity=1,this.scene.background=this.tex.sky,e.dispose(),this.sun=new Cd(16773330,2.45),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(this.profile.shadow,this.profile.shadow),this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=340,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.sun.shadow.radius=2.5,this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.add(new wd(12043992,6970178,.62)),this.scene.add(new Pd(9674928,.18)),this.scene.add(this.boom),this.scene.add(this.flash),this.applyQuality(this.profile.id),this.ui.setQuality(this.profile.id),this.resize(),window.addEventListener("resize",()=>this.resize()),this.phase="menu",this.ui.progress(1,"Company ready"),this.ui.showMenu(),document.body.dataset.phase="menu";const i=new URLSearchParams(location.search).get("autostart");this.publish(),(i==="lynx"||i==="vanguard"||i==="bulwark"||i==="halberd")&&this.start(i),this.last=performance.now(),this.renderer.setAnimationLoop(r=>this.frame(r))}start(t){this.clearMatch();const e=P_(),n=xc(0),i=xc(1),r=new Ua(0,kr[t],0,_c[0],!0,this.paintFor(t,0),this.trackFor(t),e.gear,e.gun);r.spawn(n[2].x,n[2].z,n[2].yaw,this.terrain),this.tanks.push(r),this.player=r;const a=n.filter((l,c)=>c!==2);Gg.forEach((l,c)=>{const h=a[c],f=new Ua(this.tanks.length,kr[l],0,_c[c+1],!1,this.paintFor(l,0),this.trackFor(l),e.gear,e.gun);f.spawn(h.x,h.z,h.yaw,this.terrain),this.tanks.push(f)}),Hg.forEach((l,c)=>{const h=i[c],f=new Ua(this.tanks.length,kr[l],1,kg[c],!1,this.paintFor(l,1),this.trackFor(l),e.gear,e.gun);f.spawn(h.x,h.z,h.yaw,this.terrain),this.tanks.push(f)});for(const l of this.tanks)this.scene.add(l.group);this.ai.bind(this.tanks),this.ui.ensureRosters(7,7),this.timeLeft=420;const o=new URLSearchParams(location.search).get("countdown");this.countdown=o===null?3:Math.max(0,Number(o)),this.capNorth=0,this.capSouth=0,this.result=null,this.feed=[];for(const l of this.floaters)l.life=0;this.camYaw=0,this.camPitch=new URLSearchParams(location.search).get("close")==="1"?-.18:-.3,this.camDist=new URLSearchParams(location.search).get("close")==="1"?8.5:15,this.sniper=0,this.holdSniper=!1,this.input.exitSniper(),this.phase="countdown",this.input.setEnabled(!0),this.ui.showBattle(),document.body.dataset.phase="countdown",this.player&&this.look.set(this.player.x,this.player.y+2,this.player.z)}garage(){this.clearMatch(),this.phase="menu",this.input.setEnabled(!1),this.ui.showMenu(),document.body.dataset.phase="menu",this.audio.silenceEngine()}resume(){this.phase==="pause"&&(this.phase=this.pausedFrom,this.input.setEnabled(!0),this.ui.showPause(!1),document.body.dataset.phase=this.phase)}clearMatch(){for(const t of this.tanks)t.group.removeFromParent();this.tanks=[],this.player=null,this.combat?.clear(),this.result=null}frame(t){const e=(t-this.last)/1e3;if(this.last=t,!(e>0))return;const n=Math.min(.05,e);if(this.elapsed+=n,this.wall+=e,this.fpsAccum+=e,this.fpsFrames++,this.fpsAccum>=.4&&(this.fps=Math.round(this.fpsFrames/this.fpsAccum),this.fpsFrames=0,this.fpsAccum=0,this.phase==="battle"&&(this.wall>2&&this.fps<55?this.adaptDown():this.fps>58&&this.adaptUp()),!this.lockQuality&&this.phase==="battle"&&(this.elapsed>4&&this.fps<50?this.lowTimer+=.4:this.lowTimer=0,this.lowTimer>1.6&&this.profile.id>0&&(this.lowTimer=0,this.applyQuality(this.profile.id-1),this.ui.setQuality(this.profile.id)))),this.input.pauseEdge&&(this.input.pauseEdge=!1,this.phase==="battle"||this.phase==="countdown"?(this.pausedFrom=this.phase,this.phase="pause",this.input.setEnabled(!1),this.ui.showPause(!0),document.body.dataset.phase="pause"):this.phase==="pause"&&this.resume()),this.input.mapEdge&&(this.input.mapEdge=!1,this.ui.onMap()),this.phase==="battle"||this.phase==="countdown"){this.acc+=n,this.acc>ii*3&&(this.acc=ii*3);let i=0;for(;this.acc>=ii&&i<3;){try{this.simulate(ii)}catch(r){console.error(r),this.acc=0;break}this.acc-=ii,i++}}else this.acc=0;this.present(n),this.composer&&this.profile.id>0?this.composer.render():this.renderer.render(this.scene,this.camera)}simulate(t){if(!this.player)return;this.input.sample(t);const e=this.phase==="battle",n=new Map;for(const i of this.tanks)i.alive&&(e?i.player?n.set(i.id,{throttle:this.input.throttle,steer:this.input.steer}):n.set(i.id,this.ai.drive(i,this.tanks,this.terrain,t)):n.set(i.id,{throttle:0,steer:0}));for(const i of this.tanks)if(i.alive&&(i.integrate(n.get(i.id)??{throttle:0,steer:0},t,this.terrain),e&&i.alive&&Math.abs(i.speed)>1.4&&i.distance-i.lastMark>.65)){i.lastMark=i.distance;const r=this.terrain.sample(i.x,i.z);this.tracks.stamp(i.x,r.h,i.z,i.yaw,i.spec.width)}for(const i of this.tanks)i.collide(this.terrain,this.scenery.solids,this.scenery.posts);C_(this.tanks);for(const i of this.tanks){const r=i.stick(this.terrain,t);i.applyVisual(r),i.exhaust(t,r,(a,o,l)=>this.particles.dust(a,o,l),(a,o,l)=>this.particles.splash(a,o,l)),i.settle(t)}Kg(this.tanks,this.terrain,this.scenery.solids,this.scenery.posts,t),this.player.alive&&this.aimReady&&this.solveAim(this.player,this.aimPoint,t);for(const i of this.tanks)!i.player&&i.alive&&this.ai.aim(i,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts,t);if(e){this.player.alive&&this.input.consumeFire()?this.combat.tryFire(this.player):this.input.consumeFire();for(const i of this.tanks)i.aiFire&&(this.combat.tryFire(i),i.aiFire=!1);this.combat.update(t,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts),this.consumeEvents(),this.updateCaps(t),this.timeLeft-=t,this.checkEnd()}else this.phase==="countdown"&&(this.input.consumeFire(),this.countdown-=t,this.countdown<=0&&(this.phase="battle",document.body.dataset.phase="battle"));for(const i of this.floaters)i.life>0&&(i.life-=t);for(const i of this.feed)i.age+=t;this.feed=this.feed.filter(i=>i.age<6).slice(0,5)}present(t){const e=this.phase==="menu"||this.phase==="boot";if(new URLSearchParams(location.search).get("view")==="hero"&&this.player&&this.player)this.camera.position.set(this.player.x+8.5,this.player.y+3.4,this.player.z+6.2),this.camera.lookAt(this.player.x,this.player.y+1.3,this.player.z+.4),this.camera.fov=42,this.camera.updateProjectionMatrix();else if(e&&this.terrain){const i=this.elapsed*.045,r=70+Math.cos(i)*48,a=90+Math.sin(i)*26,o=this.terrain.sample(r,a).h+18;this.camera.position.set(r,o,a),this.camera.lookAt(116,this.terrain.sample(116,52).h+5,52),this.camera.fov=58,this.camera.updateProjectionMatrix()}else if(this.player){this.input.consumeLook(this.lookDelta),this.camYaw-=this.lookDelta.x*this.input.sens,this.camPitch-=this.lookDelta.y*this.input.sens,this.camPitch=Ut(this.camPitch,this.sniper>.5?-.45:-1.05,.42),this.camDist=Ut(this.camDist+this.input.zoomDelta*.01,6,26),this.input.zoomDelta=0;const i=this.player.alive&&(this.phase==="battle"||this.phase==="countdown");i||(this.holdSniper=!1,this.input.exitSniper(),this.sniper=0);const r=i&&(this.holdSniper||this.input.isSniper());i&&(this.sniper=Ph(this.sniper,r?1:0,9,t)),this.input.setSniper(this.sniper>.5);const a=this.subject();if(a){const o=this.acc/ii;for(const c of this.tanks)c.pose(o);za.set(a.group.position.x,a.group.position.y+1.75,a.group.position.z),this.look.lengthSq()<1&&this.look.copy(za),this.followVec(this.look,za,this.lookVel,7,t);const l=this.aimRay(a);if(fe.set(l.dx,l.dy,l.dz),Uc.copy(this.look).addScaledVector(fe,-this.camDist),this.pullCamera(this.look,Uc,Dr),Ba.set(a.group.position.x,a.group.position.y+2.4,a.group.position.z),Dr.lerp(Ba,this.sniper),bs.copy(Ba).add(fe),bs.lerpVectors(this.look,bs,this.sniper),this.camSmooth.lengthSq()<1&&this.camSmooth.copy(Dr),this.focusSmooth.lengthSq()<1&&this.focusSmooth.copy(bs),this.followVec(this.camSmooth,Dr,this.camVel,8,t),this.followVec(this.focusSmooth,bs,this.focusVel,8,t),this.camera.position.copy(this.camSmooth),this.shake>0){const c=this.shake*this.shake*.35;this.camera.position.x+=(Math.random()-.5)*c,this.camera.position.y+=(Math.random()-.5)*c,this.shake=Math.max(0,this.shake-t*1.6)}this.camera.lookAt(this.focusSmooth),this.camera.fov=Math.max(22,58+-34*this.sniper),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(!0),a.group.visible=this.sniper<.7||a!==this.player,this.captureAim()}}if(this.terrain){this.terrain.tick(this.elapsed),y_(this.skyMesh,this.elapsed),lx(this.waterMesh,this.elapsed),this.scenery.tick(this.elapsed),this.skyMesh.position.copy(this.camera.position),this.particles.update(t),this.boom.intensity=Math.max(0,this.boom.intensity-t*80),this.flash.intensity=Math.max(0,this.flash.intensity-t*220),this.hurt=Math.max(0,this.hurt-t*1.4);const i=this.subject()??this.player;i&&(this.audio.updateEngine(i.player?i.speed:0,i.spec.maxSpeed,this.input.throttle),(!i.alive||!i.player)&&this.audio.silenceEngine()),this.updateSun(this.camera.position)}if(this.phase!=="menu"&&this.phase!=="boot"&&this.ui.update(this.hud()),this.terrain&&this.phase!=="boot"){const i=this.subject();this.ui.drawMap(this.terrain.minimap,i?{x:i.x,z:i.z,yaw:this.camYaw}:null,this.markTeam(this.allyMarks,0,!1),this.markTeam(this.enemyMarks,1,!0),{north:this.capNorth,south:this.capSouth})}this.hitAge>0&&(this.hitAge=Math.max(0,this.hitAge-t))}markHit(t){this.hit=t,this.hitAge=.7}subject(){return this.player?.alive?this.player:this.tanks.find(t=>t.team===0&&t.alive)??this.player}captureAim(){if(!this.player||!this.combat||!this.terrain)return;this.camera.getWorldPosition(Xt),this.camera.getWorldDirection(fe);let e=this.rayGround(Xt.x,Xt.y,Xt.z,fe.x,fe.y,fe.z,480);const n=this.combat.castTanks(Xt.x,Xt.y,Xt.z,fe.x,fe.y,fe.z,e,this.tanks,this.player.id);n&&(e=n.t),this.aimPoint.set(Xt.x+fe.x*e,Xt.y+fe.y*e,Xt.z+fe.z*e),document.body.classList.contains("touch-device")&&this.assistAim(),this.aimReady=!0}assistAim(){if(!this.player)return;this.camera.getWorldDirection(fe);let t=null,e=.04;for(const n of this.tanks){if(!n.alive||n.team===this.player.team)continue;ke.set(n.x-this.camera.position.x,n.y+n.spec.height*.55-this.camera.position.y,n.z-this.camera.position.z);const i=ke.length();if(i<6||i>400)continue;ke.multiplyScalar(1/i);const r=Math.acos(Math.max(-1,Math.min(1,fe.dot(ke))));r<e&&(e=r,t=n)}t&&this.aimPoint.lerp(ke.set(t.x,t.y+t.spec.height*.55,t.z),.35)}rayGround(t,e,n,i,r,a,o){let l=o,c=0,h=!1;for(let f=3;f<=o;f+=8)if(e+r*f<=this.terrain.groundAt(t+i*f,n+a*f)+.05){l=f,c=Math.max(0,f-8),h=!0;break}if(!h)return o;for(let f=0;f<8;f++){const u=(c+l)*.5;e+r*u<=this.terrain.groundAt(t+i*u,n+a*u)+.02?l=u:c=u}return l}solveAim(t,e,n){const i=n>.5?2:1;for(let r=0;r<i;r++){t.group.updateMatrixWorld(!0),t.muzzle.getWorldPosition(Xt);const a=e.x-Xt.x,o=e.y-Xt.y,l=e.z-Xt.z,c=Math.hypot(a,l),h=Math.atan2(a,l),f=this.tunedPitch(c,o,t.spec.shellSpeed),u=Math.cos(f);this.launchDir.set(Math.sin(h)*u,Math.sin(f),Math.cos(h)*u),this.invQuat.copy(t.group.quaternion).invert(),this.localDir.copy(this.launchDir).applyQuaternion(this.invQuat);const d=Math.atan2(this.localDir.x,this.localDir.z),p=Math.atan2(this.localDir.y,Math.hypot(this.localDir.x,this.localDir.z));t.aim(t.yaw+d,p,n)}}tunedPitch(t,e,n){const i=Gr(t,e,n);if(t<1.2)return i;let r=i-.2,a=i+.2;for(let o=0;o<8;o++){const l=(r+a)*.5;this.arcHeight(t,l,n)>e?a=l:r=l}return(r+a)*.5}arcHeight(t,e,n){const i=Math.cos(e),r=Math.sin(e);let a=i*.15,o=r*.15,l=i*n,c=r*n;const h=1/60;for(let f=0;f<200&&a<t;f++){const u=Math.hypot(l,c)||1,d=Math.max(1,Math.ceil(u*h/.35)),p=h/d;for(let v=0;v<d&&a<t;v++){const m=a+l*p,g=o+c*p;if(m>=t)return o+(g-o)*((t-a)/(m-a||1));a=m,o=g,c-=9.8*p}}return o}predictImpact(t){t.muzzle.getWorldPosition(Xt),t.muzzle.getWorldDirection(ke);const e=t.spec.shellSpeed;let n=Xt.x+ke.x*.15,i=Xt.y+ke.y*.15,r=Xt.z+ke.z*.15,a=ke.x*e,o=ke.y*e,l=ke.z*e,c=null;for(let h=0;h<90;h++){const f=Math.hypot(a,o,l)||1,u=Math.max(1,Math.ceil(f*(1/60)/.35)),d=1/60/u;let p=!1;for(let v=0;v<u&&!p;v++){const m=n+a*d,g=i+o*d,x=r+l*d,y=this.postsNear(n,r,m,x),M=this.combat?this.combat.castBlock(n,i,r,m,g,x,this.tanks,this.scenery.solids,y,this.terrain,t.id,t.team):null;if(M){M.ground?this.gunPoint.set(m,this.terrain.groundAt(m,x),x):this.gunPoint.set(n+(m-n)*M.u,i+(g-i)*M.u,r+(x-r)*M.u),c=M.enemy,p=!0;break}n=m,i=g,r=x,o-=9.8*d}if(p)break;h===89&&this.gunPoint.set(n,i,r)}return c}postsNear(t,e,n,i){if(!this.postGrid&&this.scenery){this.postGrid=new Map;for(const h of this.scenery.posts){const f=Math.floor(h.x/12)+64<<8|Math.floor(h.z/12)+64,u=this.postGrid.get(f);u?u.push(h):this.postGrid.set(f,[h])}}const r=this.postBuf;r.length=0;const a=Math.floor(Math.min(t,n)/12)-1,o=Math.floor(Math.max(t,n)/12)+1,l=Math.floor(Math.min(e,i)/12)-1,c=Math.floor(Math.max(e,i)/12)+1;for(let h=a;h<=o;h++)for(let f=l;f<=c;f++){const u=this.postGrid?.get(h+64<<8|f+64);if(u)for(const d of u)r.push(d)}return r}laneOpen(t,e,n,i,r){const a=t+n*r,o=e+i*r;if(Math.abs(t)>160||Math.abs(e)>160||Math.abs(a)>160||Math.abs(o)>160)return!1;const l=this.terrain.sample(t,e),c=this.terrain.sample(a,o);if(l.deep||c.deep)return!1;const h=330,f=l.h+2.15,u=Gr(r,c.h+.05-f,h),d=Math.cos(u),p=Math.sin(u);if(d<.25)return!1;const v=r/(h*d),m=Math.max(8,Math.ceil(r/4));for(let A=1;A<m;A++){const R=v*(A/m),D=h*d*R,L=f+h*p*R-4.9*R*R;if(this.terrain.groundAt(t+n*D,e+i*D)+1.35>L)return!1}const g=t-n*6,x=l.h+3.1,y=e-i*6,M=a-g,b=c.h+.02-x,E=o-y,_=Math.hypot(M,b,E)||1,S=this.rayGround(g,x,y,M/_,b/_,E/_,_+12);return S>_-5&&S<_+2}paintRim(t,e){const n=t.hullMesh.material;e>0?(n.emissive.setHex(16722456),n.emissiveIntensity=e):(n.emissive.setHex(0),n.emissiveIntensity=0)}aimRay(t){Fc(this.camYaw,this.camPitch,fe);const e=this.camDist,n=t.x-fe.x*e*(1-this.sniper),i=t.y+1.75*(1-this.sniper)+2.4*this.sniper-fe.y*e*(1-this.sniper),r=t.z-fe.z*e*(1-this.sniper);return{ox:n,oy:i,oz:r,dx:fe.x,dy:fe.y,dz:fe.z}}markTeam(t,e,n){let i=0;for(const r of this.tanks){if(r.team!==e||n&&r.alive&&r.detected<=0)continue;const a=t[i];if(!a)break;a.x=r.x,a.z=r.z,a.dead=!r.alive,i++}return t.length=i,t}followVec(t,e,n,i,r){Da(t.x,e.x,n.x,i,r,Hn),t.x=Hn.x,n.x=Hn.v,Da(t.y,e.y,n.y,i,r,Hn),t.y=Hn.x,n.y=Hn.v,Da(t.z,e.z,n.z,i,r,Hn),t.z=Hn.x,n.z=Hn.v}pullCamera(t,e,n){const i=e.x-t.x,r=e.y-t.y,a=e.z-t.z,o=Math.hypot(i,r,a);if(o<.5){n.copy(e);return}const l=Math.ceil(o/1.4);let c=o;for(let h=1;h<=l;h++){const f=h/l*o,u=t.x+i/o*f,d=t.y+r/o*f,p=t.z+a/o*f;if(d<this.terrain.sample(u,p).h+.7){c=Math.max(1.4,f-1.2);break}}n.set(t.x+i/o*c,t.y+r/o*c,t.z+a/o*c)}updateSun(t){const e=this.profile.range,n=e*2/this.profile.shadow,i=Math.round(t.x/n)*n,r=Math.round(t.z/n)*n;this.sun.target.position.set(i,0,r),this.sun.position.set(i,0,r).addScaledVector(na,170);const a=this.sun.shadow.camera;a.left=-e,a.right=e,a.top=e,a.bottom=-e,a.updateProjectionMatrix()}updateCaps(t){let e=0,n=0,i=0,r=0;for(const o of this.tanks){if(!o.alive)continue;const l=Math.hypot(o.x,o.z-yt.baseZ)<yt.baseR,c=Math.hypot(o.x,o.z+yt.baseZ)<yt.baseR;l&&o.team===0&&e++,l&&o.team===1&&n++,c&&o.team===1&&r++,c&&o.team===0&&i++}const a=t/this.capTime;e>0&&n===0?this.capNorth+=a*Math.min(3,e):e===0&&n===0&&(this.capNorth=Math.max(0,this.capNorth-t*.1)),r>0&&i===0?this.capSouth+=a*Math.min(3,r):r===0&&i===0&&(this.capSouth=Math.max(0,this.capSouth-t*.1))}checkEnd(){if(this.phase==="end")return;const t=this.tanks.filter(a=>a.team===0&&a.alive),e=this.tanks.filter(a=>a.team===1&&a.alive);let n="",i="";if(this.capNorth>=1)n="Victory",i="Cinder captured the Slate base.";else if(this.capSouth>=1)n="Defeat",i="Slate captured the Cinder base.";else if(e.length===0&&t.length===0)n="Draw",i="Both companies were wiped out.";else if(e.length===0)n="Victory",i="Every Slate tank is burning.";else if(t.length===0)n="Defeat",i="Cinder Company was destroyed.";else if(this.timeLeft<=0){const a=t.reduce((l,c)=>l+c.hp,0),o=e.reduce((l,c)=>l+c.hp,0);t.length>e.length||t.length===e.length&&a>o?(n="Victory",i="Time ran out. Cinder still holds the valley."):e.length>t.length||o>a?(n="Defeat",i="Time ran out. Slate kept the field."):(n="Draw",i="Dusk fell with neither side broken.")}if(!n||!this.player)return;const r=this.player;this.result={title:n,subtitle:i,rows:[["Damage dealt",Math.round(r.damageDealt).toLocaleString()],["Kills",String(r.kills)],["Shots fired",String(r.shots)],["Hits",String(r.hits)],["Blocked",Math.round(r.blocked).toLocaleString()],["Survived",r.alive?"Yes":"No"]]},this.phase="end",this.input.setEnabled(!1),this.ui.showEnd(this.result),document.body.dataset.phase="end",this.audio.silenceEngine()}consumeEvents(){const t=this.camera.position;for(const e of this.combat.events)this.applyEvent(e,t);this.combat.events.length=0}applyEvent(t,e){const n=Math.hypot(t.x-e.x,t.y-e.y,t.z-e.z);if(t.type==="fire")this.particles.muzzle(t.x,t.y,t.z,t.dx,t.dy,t.dz),this.audio.shot(n),t.a===this.player?.id&&(this.flash.position.set(t.x,t.y,t.z),this.flash.intensity=18);else if(t.type==="pen"){this.particles.spark(t.x,t.y,t.z,!0);const i=t.a===this.player?.id,r=t.b===this.player?.id;if(i||r){const a=t.note==="crit";this.placeFloater(t.x,t.y+2.2,t.z,`${r?"":"-"}${Math.round(t.n)}${a?" CRITICAL":""}`,1.6,r?"hurt":a?"crit":"pen",t.b)}if(i){this.markHit("pen"),this.audio.pen();const a=this.tanks.find(o=>o.id===t.b);a&&(a.detected=Math.max(a.detected,8))}r&&this.noteHurt(t.x,t.z,Math.round(t.n))}else if(t.type==="bounce"){this.particles.spark(t.x,t.y,t.z,!1);const i=t.a===this.player?.id,r=t.b===this.player?.id;if(i||r){const a=t.note==="ricochet";this.placeFloater(t.x,t.y+2.2,t.z,a?"RICOCHET":"NO DAMAGE",1.45,a?"ricochet":"nodmg",t.b)}if(i){this.markHit("bounce"),this.audio.bounce();const a=this.tanks.find(o=>o.id===t.b);a&&(a.detected=Math.max(a.detected,8))}r&&(this.audio.bounce(),this.noteHurt(t.x,t.z,0))}else if(t.type==="kill"){this.particles.blast(t.x,t.y,t.z),this.boom.position.set(t.x,t.y,t.z),this.boom.intensity=90,this.audio.boom(n),this.shake=Math.min(1,this.shake+8/Math.max(6,n));const i=this.tanks.find(a=>a.id===t.a),r=this.tanks.find(a=>a.id===t.b);if(i&&r){const a=i.team===0?"good":"bad";this.feed.unshift({text:`${i.name} destroyed ${r.name}`,kind:a,age:0}),(i.player||r.player)&&this.placeFloater(t.x,t.y+2.6,t.z,"DESTROYED",1.8,"kill",t.b)}}else t.type==="ground"&&this.particles.dirt(t.x,t.y,t.z)}noteHurt(t,e,n){this.hurt=1,this.shake=Math.min(1,this.shake+.45);const i=t-(this.player?.x??0),r=e-(this.player?.z??0);this.hurtAngle=Math.atan2(i,r)-this.camYaw}hud(){const t=this.player,e=this.tanks.filter(b=>b.team===0),n=this.tanks.filter(b=>b.team===1);let i="",r=0,a=!1;this.capNorth>.01&&(i="Capturing the Slate base",r=this.capNorth),this.capSouth>this.capNorth&&(i="Cinder base under attack",r=this.capSouth,a=!0);let o="";this.phase==="countdown"?o=this.countdown>.15?String(Math.max(1,Math.ceil(this.countdown-.001))):"Engage":t&&!t.alive&&this.phase==="battle"&&(o="Destroyed — spectating");const l=this.canvas.clientWidth||1,c=this.canvas.clientHeight||1;let h=l/2,f=c/2,u=!1,d=!1,p=!1;if(t?.alive&&this.combat&&this.terrain){const b=this.predictImpact(t);this.lastRim&&this.lastRim!==b&&this.paintRim(this.lastRim,0),p=!!b,t.muzzle.getWorldDirection(ke),this.camera.getWorldDirection(fe);const E=ke.dot(fe)>.992,_=p&&t.reload<=0&&E;b&&this.paintRim(b,_?1.5+Math.abs(Math.sin(this.elapsed*8)):1.05),this.lastRim=b,d=_,Gn.copy(this.gunPoint).project(this.camera),Gn.z<1&&(u=!0,h=(Gn.x*.5+.5)*l,f=(-Gn.y*.5+.5)*c)}else this.lastRim&&(this.paintRim(this.lastRim,0),this.lastRim=null);const v=this.camera.fov*Math.PI/180,m=Math.atan((t?.dispersion??.4)/100),g=Math.tan(m)/Math.tan(v/2)*(c/2),x=Math.floor(this.timeLeft/60),y=Math.max(0,Math.floor(this.timeLeft%60));let M=0;for(const b of this.floaters){if(b.life<=0)continue;let E=b.x,_=b.y,S=b.z;if(b.follow!==void 0){const R=this.tanks.find(D=>D.id===b.follow);R&&(E=R.x,_=R.y+R.spec.height+3.1,S=R.z)}Gn.set(E,_+(1-b.life/b.max)*2.2,S),Gn.project(this.camera);const A=this.screenFloaters[M];Gn.z>1||!A||(A.x=(Gn.x*.5+.5)*l,A.y=(-Gn.y*.5+.5)*c,A.text=b.text,A.life=b.life,A.kind=b.kind,M++)}for(let b=M;b<this.screenFloaters.length;b++)this.screenFloaters[b].life=0;return{time:`${x}:${y.toString().padStart(2,"0")}`,allies:e.filter(b=>b.alive).length,enemies:n.filter(b=>b.alive).length,spotted:(t?.detected??0)>0,banner:o,sniper:this.sniper>.55,hp:t?.hp??0,maxHp:t?.spec.hp??1,speed:t?.speed??0,reload:t?.reload??0,reloadTime:t?.spec.reload??1,aimPx:g,ready:d,locked:p,gunX:h,gunY:f,gunVisible:u,hit:this.hitAge>.55?this.hit:"",hurt:this.hurt,hurtAngle:this.hurtAngle,fps:this.fps,cap:i,capP:r,capBad:a,tankName:t?.spec.name??"",role:t?.spec.role??"",alliesRows:e.map(b=>({name:b.name,role:b.spec.role,hp:b.hp,max:b.spec.hp,dead:!b.alive,self:b.player})),enemyRows:n.map(b=>({name:b.name,role:b.spec.role,hp:b.detected>0||!b.alive?b.hp:b.spec.hp,max:b.spec.hp,dead:!b.alive,self:!1})),feed:this.feed,floaters:this.screenFloaters,plates:this.nameplates(l,c),dealt:t?.damageDealt??0}}nameplates(t,e){const n=this.platePoint;let i=0;for(const r of this.tanks){const a=this.plateBuf[i];if(!a)break;if(!r.alive)continue;const o=r.team===0;!o&&r.detected<=0||(n.set(r.x,r.y+r.spec.height+2.6,r.z),n.project(this.camera),a.x=(n.x*.5+.5)*t,a.y=(-n.y*.5+.5)*e,a.name=r.player?"You":r.name,a.hp=r.hp,a.max=r.spec.hp,a.ally=o,a.show=n.z<1,i++)}for(let r=i;r<this.plateBuf.length;r++)this.plateBuf[r].show=!1;return this.plateBuf}paintFor(t,e){return t==="halberd"?this.tex.halberd:e===0?this.tex.camoCinder:this.tex.camoSlate}trackFor(t){return t==="halberd"?this.tex.metal:this.tex.track}setupComposer(){if(this.composer=null,!this.renderer||this.profile.id===0)return;const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight,n=new Ng(this.renderer);if(n.addPass(new Ug(this.scene,this.camera)),this.profile.id===2){const i=new ci(this.scene,this.camera,Math.max(1,t*.5),Math.max(1,e*.5));i.kernelRadius=12,i.minDistance=.001,i.maxDistance=.18,n.addPass(i)}n.addPass(new os(new zt(Math.max(1,t*.5),Math.max(1,e*.5)),.12,.35,.9)),n.addPass(new Ch(hx)),n.addPass(new Ig),this.composer=n}applyQuality(t){if(this.profile=ws[t],!this.renderer)return;this.resize(),this.sun?.shadow.mapSize.set(this.profile.shadow,this.profile.shadow);const e=this.sun?.shadow;if(e?.map&&(e.map.dispose(),e.map=null),!this.scenery)return;const n=this.counts.trees>0?Math.min(1,this.profile.trees/ws[2].trees):1;this.scenery.trunks.count=Math.max(0,Math.floor(this.counts.trees*n)),this.scenery.broad.count=Math.max(0,Math.floor(this.counts.broad*n)),this.scenery.pines.count=Math.max(0,Math.floor(this.counts.pines*n)),this.scenery.grass.count=Math.min(this.counts.grass,this.profile.grass),this.scenery.reeds.count=Math.min(this.counts.reeds,this.profile.reeds),this.scenery.rocks.count=Math.min(this.counts.rocks,this.profile.rocks),this.scenery.trunks.castShadow=this.profile.treeShadow,this.scenery.broad.castShadow=this.profile.treeShadow,this.scenery.pines.castShadow=this.profile.treeShadow,this.particles?.setBudget(this.profile.particles),this.setupComposer(),this.applyLod()}adaptDown(){let t=!1;this.resScale>.7&&(this.resScale=Math.max(.7,this.resScale-.15),t=!0),this.treeLod>.45&&(this.treeLod=Math.max(.45,this.treeLod-.2),t=!0),t&&(this.resize(),this.applyLod())}adaptUp(){if(this.treeLod<1){this.treeLod=Math.min(1,this.treeLod+.1),this.applyLod();return}this.resScale<1&&(this.resScale=Math.min(1,this.resScale+.05),this.resize())}applyLod(){if(!this.scenery)return;const t=(this.counts.trees>0?Math.min(1,this.profile.trees/ws[2].trees):1)*this.treeLod;this.scenery.trunks.count=Math.max(1,Math.floor(this.counts.trees*t)),this.scenery.broad.count=Math.max(0,Math.floor(this.counts.broad*t)),this.scenery.pines.count=Math.max(0,Math.floor(this.counts.pines*t)),this.scenery.grass.count=Math.max(1,Math.floor(Math.min(this.counts.grass,this.profile.grass)*this.treeLod)),this.scenery.reeds.count=Math.min(this.counts.reeds,this.profile.reeds),this.scenery.rocks.count=Math.min(this.counts.rocks,this.profile.rocks);const e=this.treeLod<.85?Math.min(this.profile.shadow,1024):this.profile.shadow;if(this.sun&&this.sun.shadow.mapSize.x!==e){this.sun.shadow.mapSize.set(e,e);const n=this.sun.shadow;n.map&&(n.map.dispose(),n.map=null)}}placeFloater(t,e,n,i,r,a,o){let l=this.floaters[0];for(let c=1;c<this.floaters.length;c++){if(this.floaters[c].life<=0){l=this.floaters[c];break}this.floaters[c].life<l.life&&(l=this.floaters[c])}l.x=t,l.y=e,l.z=n,l.text=i,l.life=r,l.max=r,l.kind=a,l.follow=o}resize(){const t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight,n=Math.min(1.5,this.profile.dpr*this.resScale,window.devicePixelRatio||1);this.renderer.setPixelRatio(n),this.renderer.setSize(t,e,!1),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix(),this.composer?.setSize(t,e)}publish(){const t=this;window.__ASHEN={ready:!0,get phase(){return t.phase},get fps(){return t.fps},start:e=>t.start(e??"vanguard"),damage:(e,n)=>t.debugDamage(e,n),fireAt:e=>t.debugFireAt(e),accuracy:(e,n)=>t.debugAccuracy(e,!!n),stageReady:e=>t.debugStageReady(e),teleport:(e,n)=>t.debugTeleport(e,n),setCapTime:e=>{t.capTime=e},armorCases:qg,getState:()=>t.debugState()}}arcFits(t,e,n,i){t.muzzle.getWorldPosition(Xt);const r=t.x+e*i,a=t.z+n*i,o=this.terrain.groundAt(r,a)+.02,l=r-Xt.x,c=o-Xt.y,h=a-Xt.z,f=Math.hypot(l,h),u=Gr(f,c,t.spec.shellSpeed),d=Math.atan2(l,h),p=Math.cos(u);if(p<.25)return!1;const v=f/(t.spec.shellSpeed*p),m=Math.max(8,Math.ceil(f/4));for(let g=1;g<m;g++){const x=v*(g/m),y=t.spec.shellSpeed*p*x,M=Xt.y+t.spec.shellSpeed*Math.sin(u)*x-4.9*x*x;if(this.terrain.groundAt(Xt.x+Math.sin(d)*y,Xt.z+Math.cos(d)*y)+.45>M)return!1}return!0}debugAccuracy(t,e){const n={markerError:999,aimError:999,range:t,align:0,horiz:0,drop:0,muzzleH:0,trim:0,ax:0,az:0,ix:0,iz:0,px:0,pz:0};if(!this.player||!this.combat||!this.terrain||!this.scenery)return n;const i=[],r=(l,c,h,f,u)=>{i.push({s:l,x:c,z:h,dx:f,dz:u}),i.sort((d,p)=>p.s-d.s),i.length>6&&(i.length=6)};if(e)for(let l=-100;l<=80;l+=8)for(let c=-100;c<=100;c+=8){const h=this.terrain.sample(c,l);if(h.deep||h.ny<.55||h.ny>.9)continue;const f=this.terrain.groundAt(c+2,l)-this.terrain.groundAt(c-2,l),u=this.terrain.groundAt(c,l+2)-this.terrain.groundAt(c,l-2),d=Math.hypot(f,u)||1,p=-f/d,v=-u/d;this.laneOpen(c,l,p,v,t)&&r(1-h.ny,c,l,p,v)}else for(let l=-140;l<=40;l+=8)for(let c=-120;c<=120;c+=8){if(!this.laneOpen(c,l,0,1,t))continue;const h=this.terrain.sample(c,l),f=this.terrain.sample(c,l+t);r(h.ny+f.ny-Math.abs(h.h-f.h)*.04,c,l,0,1)}let a=n;const o=this.player;for(const l of this.tanks)l!==o&&(l.x=480,l.z=480,l.group.position.set(480,40,480),l.group.updateMatrixWorld(!0));for(const l of i){if(this.debugTeleport(l.x,l.z),o.yaw=Math.atan2(l.dx,l.dz),o.speed=0,o.applyVisual(this.terrain.sample(o.x,o.z)),o.aim(Math.atan2(l.dx,l.dz),0,5),o.group.updateMatrixWorld(!0),!this.arcFits(o,l.dx,l.dz,t))continue;const c=o.x+l.dx*t,h=o.z+l.dz*t,f=this.terrain.groundAt(c,h)+.02;this.camera.position.set(o.x-l.dx*7,o.y+2.6,o.z-l.dz*7),this.camera.lookAt(c,f,h),this.camera.updateMatrixWorld(!0),this.captureAim(),o.dispersion=0,o.reload=0,this.solveAim(o,this.aimPoint,5),o.group.updateMatrixWorld(!0),o.muzzle.getWorldPosition(Xt),o.muzzle.getWorldDirection(ke);const u=ke.dot(this.launchDir);this.predictImpact(o);const d=this.gunPoint.x,p=this.gunPoint.y,v=this.gunPoint.z,m=this.aimPoint.x,g=this.aimPoint.y,x=this.aimPoint.z;if(!this.combat.tryFire(o))continue;let y=d,M=p,b=v,E=!1;for(let A=0;A<300;A++){this.combat.update(ii,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts);const R=this.combat.events.find(D=>D.type!=="fire"&&D.a===o.id);if(R){y=R.x,M=R.y,b=R.z,E=!0;break}}if(this.combat.events.length=0,!E)continue;const _=Math.hypot(y-m,M-g,b-x),S={range:t,markerError:Math.hypot(y-d,M-p,b-v),aimError:_,align:Number(u.toFixed(3)),horiz:Math.round(Math.hypot(m-Xt.x,x-Xt.z)),drop:Number((g-Xt.y).toFixed(2)),muzzleH:Number((Xt.y-this.terrain.groundAt(Xt.x,Xt.z)).toFixed(2)),trim:Number((this.arcHeight(Math.hypot(m-Xt.x,x-Xt.z),Math.asin(Math.max(-1,Math.min(1,ke.y))),o.spec.shellSpeed)-(g-Xt.y)).toFixed(3)),ax:Math.round(m),az:Math.round(x),ix:Math.round(y),iz:Math.round(b),px:Math.round(o.x),pz:Math.round(o.z)};if(S.aimError<a.aimError&&(a=S),a.aimError<1.5&&a.markerError<1.5)break}return a}debugStageReady(t){const e=this.tanks.find(a=>a.id===t&&a.alive);if(!this.player||!e)return!1;this.debugTeleport(e.x,e.z-20),this.player.yaw=0,this.player.speed=0,this.player.reload=0,this.player.dispersion=.04;const n=e.x-this.player.x,i=e.z-this.player.z;this.camYaw=Math.atan2(n,i),this.camPitch=-.02,this.sniper=1,this.holdSniper=!0,this.camVel.set(0,0,0),this.focusVel.set(0,0,0),this.lookVel.set(0,0,0),this.player.applyVisual(this.terrain.sample(this.player.x,this.player.z)),Fc(this.camYaw,this.camPitch,fe),this.look.set(this.player.x,this.player.y+1.75,this.player.z),this.camSmooth.set(this.player.x,this.player.y+2.4,this.player.z),this.focusSmooth.set(this.player.x+fe.x,this.player.y+2.4+fe.y,this.player.z+fe.z),this.shake=0,this.player.group.updateMatrixWorld(!0),this.player.muzzle.getWorldPosition(Xt);const r=e.y+e.spec.height*.55;return this.aimPoint.set(e.x,r,e.z),this.aimReady=!0,this.solveAim(this.player,this.aimPoint,5),this.phase==="countdown"&&(this.phase="battle",document.body.dataset.phase="battle"),!0}debugFireAt(t){const e=this.tanks.find(h=>h.id===t&&h.alive);if(!this.player||!e||!this.combat||!this.terrain||!this.scenery)return!1;const n=e.x-this.player.x,i=e.z-this.player.z,r=Math.hypot(n,i),a=Math.atan2(n,i);this.camYaw=a,this.camPitch=-.05,this.player.dispersion=.02,this.player.reload=0,this.player.group.updateMatrixWorld(!0),this.player.muzzle.getWorldPosition(Xt);const o=e.y+Math.max(.8,e.spec.height*.7),l=Math.atan2(o-Xt.y,Math.max(1,r));this.player.aim(a,l,5),this.player.group.updateMatrixWorld(!0);const c=this.combat.tryFire(this.player);this.player.muzzle.getWorldPosition(Xt),this.combat.steerLast(Xt.x,Xt.y,Xt.z,e.x,o,e.z);for(let h=0;h<24;h++)this.combat.update(ii,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts);return this.consumeEvents(),this.phase==="countdown"&&(this.phase="battle",document.body.dataset.phase="battle"),c}debugDamage(t,e){const n=this.tanks.find(r=>r.id===t);if(!n||!n.alive)return;n.hp-=e,n.detected=3;const i=n.player;this.player&&!i&&n.team!==this.player.team&&(this.player.damageDealt+=e),this.placeFloater(n.x,n.y+2.4,n.z,`-${Math.round(e)}`,1.6,i?"hurt":"pen",n.id),i&&this.noteHurt(n.x-8,n.z+12,e),n.hp<=0&&(n.kill(),this.particles.blast(n.x,n.y+1,n.z),this.placeFloater(n.x,n.y+3.4,n.z,"DESTROYED",1.6,"kill",n.id)),this.phase==="countdown"&&(this.phase="battle"),this.checkEnd()}debugTeleport(t,e){this.player&&(this.player.x=t,this.player.z=e,this.player.y=this.terrain.sample(t,e).h,this.player.speed=0)}debugState(){const t=this.player;return{phase:this.phase,fps:this.fps,quality:this.profile.id,resScale:this.resScale,treeLod:this.treeLod,draws:this.renderer.info.render.calls,tris:this.renderer.info.render.triangles,shells:this.combat?.activeShells??0,result:this.result?.title??"",allies:this.tanks.filter(e=>e.team===0&&e.alive).length,enemies:this.tanks.filter(e=>e.team===1&&e.alive).length,camYaw:this.camYaw,sniper:this.sniper,fov:this.camera.fov,player:t?{id:t.id,x:t.x,y:t.y,z:t.z,hp:t.hp,speed:t.speed,yaw:t.yaw,shots:t.shots,hits:t.hits,damageDealt:t.damageDealt,kills:t.kills,alive:t.alive}:null,tanks:this.tanks.map(e=>({id:e.id,name:e.name,team:e.team,hp:e.hp,alive:e.alive,x:e.x,z:e.z}))}}}const hx={uniforms:{tDiffuse:{value:null}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, 1.16);
      c = (c - 0.5) * 1.04 + 0.5;
      c *= vec3(1.01, 1.0, 0.97);
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }
  `};function Fc(s,t,e){const n=Math.cos(t);return e.set(Math.sin(s)*n,Math.sin(t),Math.cos(s)*n)}function ux(){return new Promise(s=>setTimeout(s,0))}const dx=navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches;document.body.classList.toggle("touch-device",dx);const zh=s=>s.preventDefault();for(const s of["gesturestart","gesturechange","gestureend"])document.addEventListener(s,zh,{passive:!1});document.addEventListener("dblclick",zh);let Oc=0;document.addEventListener("touchend",s=>{const t=performance.now();t-Oc<320&&s.preventDefault(),Oc=t},{passive:!1});document.addEventListener("touchmove",s=>{s.touches.length>1&&s.preventDefault()},{passive:!1});const fx=new cx;fx.boot().catch(s=>{const t=document.querySelector("#fatal"),e=document.querySelector("#loading");e&&(e.hidden=!0),t&&(t.hidden=!1,t.textContent=s instanceof Error?s.message:"The valley failed to load.")});
