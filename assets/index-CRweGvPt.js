(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const go="187",Ah=0,jo=1,Rh=2,Ms=1,Ch=2,xs=3,Mi=0,Kt=1,Bt=2,nn=0,Xi=1,ws=2,el=3,tl=4,Mc=5,ni=100,Ph=101,Dh=102,Lh=103,Nh=104,Aa=200,Ih=201,Uh=202,Fh=203,Sc=204,yc=205,bc=206,Oh=207,Ec=208,zh=209,Bh=210,kh=211,Gh=212,Hh=213,Vh=214,Ra=0,Ca=1,Pa=2,As=3,Da=4,La=5,Na=6,Ia=7,Tc=0,Wh=1,Xh=2,Wn=0,_o=1,xo=2,vo=3,Br=4,Mo=5,So=6,yo=7,wc=300,Zi=301,Rs=302,yr=303,Zr=304,Sn=1e3,fn=1001,Ua=1002,Rt=1003,qh=1004,ks=1005,Et=1006,$r=1007,kn=1008,sn=1009,Ac=1010,Rc=1011,Cs=1012,bo=1013,An=1014,Qt=1015,Ct=1016,Eo=1017,To=1018,Si=1020,Cc=35902,Pc=35899,Dc=1021,Lc=1022,vn=1023,oi=1026,Gn=1027,kr=1028,wo=1029,yi=1030,Ao=1031,Ro=1033,br=33776,Er=33777,Tr=33778,wr=33779,Fa=35840,Oa=35841,za=35842,Ba=35843,ka=36196,Ga=37492,Ha=37496,Va=37488,Wa=37489,Lr=37490,Xa=37491,qa=37808,Ya=37809,Za=37810,$a=37811,Ka=37812,Ja=37813,Qa=37814,ja=37815,eo=37816,to=37817,no=37818,io=37819,so=37820,ro=37821,ao=36492,oo=36494,lo=36495,co=36283,ho=36284,Nr=36285,uo=36286,Yh=3200,Ir=0,Zh=1,hn="",$t="srgb",$i="srgb-linear",Ur="linear",ct="srgb",Kr=7680,$h=519,Kh=512,Jh=513,Qh=514,Nc=515,jh=516,eu=517,Ic=518,Uc=519,tu=35044,Gs=35048,nl="300 es",Mn=2e3,Ps=2001;function nu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iu(){const s=Ds("canvas");return s.style.display="block",s}const il={};function sl(...s){const e="THREE."+s.shift();console.log(e,...s)}function Fc(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Be(...s){s=Fc(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function st(...s){s=Fc(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ar(...s){const e=s.join(" ");e in il||(il[e]=!0,Be(...s))}function su(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ru={[Ra]:Ra,[Pa]:Na,[Da]:Da,[As]:La,[Ca]:Ca,[Na]:Pa,[Ia]:Ia,[La]:As};class Ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let rl=1234567;const Ss=Math.PI/180,Ls=180/Math.PI;function ji(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function Co(s,e){return(s%e+e)%e}function au(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ou(s,e,t){return s!==e?(t-s)/(e-s):0}function ys(s,e,t){return(1-t)*s+t*e}function lu(s,e,t,n){return ys(s,e,1-Math.exp(-t*n))}function cu(s,e=1){return e-Math.abs(Co(s,e*2)-e)}function hu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function uu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function fu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function du(s,e){return s+Math.random()*(e-s)}function pu(s){return s*(.5-Math.random())}function mu(s){s!==void 0&&(rl=s);let e=rl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gu(s){return s*Ss}function _u(s){return s*Ls}function xu(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function vu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Oc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mu(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Po(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zc(s,e){if(e.constructor===Float32Array)return s;const t=Po(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Bc(s,e){if(e.constructor===Float32Array)return s;const t=Po(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const Su={DEG2RAD:Ss,RAD2DEG:Ls,generateUUID:ji,clamp:$e,euclideanModulo:Co,mapLinear:au,inverseLerp:ou,lerp:ys,damp:lu,pingpong:cu,smoothstep:hu,smootherstep:uu,randInt:fu,randFloat:du,randFloatSpread:pu,seededRandom:mu,degToRad:gu,radToDeg:_u,isPowerOfTwo:xu,ceilPowerOfTwo:vu,floorPowerOfTwo:Oc,setQuaternionFromProperEuler:Mu,normalize:Bc,denormalize:zc};class Oe{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class es{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*M;m<0&&(u=-u,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){const x=Math.acos(m),T=Math.sin(x);p=Math.sin(p*x)/T,o=Math.sin(o*x)/T,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+M*o;const x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(r/2),u=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(al.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(al.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=i+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jr.copy(this).projectOnVector(e),this.sub(Jr)}reflect(e){return this.sub(Jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new F,al=new es;class Ve{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],M=i[0],m=i[3],p=i[6],x=i[1],T=i[4],v=i[7],w=i[2],b=i[5],_=i[8];return r[0]=a*M+o*x+l*w,r[3]=a*m+o*T+l*b,r[6]=a*p+o*v+l*_,r[1]=c*M+h*x+d*w,r[4]=c*m+h*T+d*b,r[7]=c*p+h*v+d*_,r[2]=u*M+f*x+g*w,r[5]=u*m+f*T+g*b,r[8]=u*p+f*v+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=d*M,e[1]=(i*c-h*n)*M,e[2]=(o*n-i*a)*M,e[3]=u*M,e[4]=(h*t-i*l)*M,e[5]=(i*r-o*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ar("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qr.makeScale(e,t)),this}rotate(e){return Ar("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qr.makeRotation(-e)),this}translate(e,t){return Ar("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qr=new Ve,ol=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ll=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yu(){const s={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hn?Ur:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[$i]:{primaries:e,whitePoint:n,transfer:Ur,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:ol,fromXYZ:ll,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),s}const je=yu();function Xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ci;class bu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ci===void 0&&(Ci=Ds("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ci}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eu=0;class Do{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(jr(i[a].image)):r.push(jr(i[a]))}else r=jr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function jr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Tu=0;const ea=new F;class kt extends Ti{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=fn,i=fn,r=Et,a=kn,o=vn,l=sn,c=kt.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=ji(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=wc;kt.DEFAULT_ANISOTROPY=1;class bt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(f+1)/2,w=(p+1)/2,b=(h+u)/4,_=(d+M)/4,S=(g+m)/4;return T>v&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=b/n,r=_/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=S/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=_/r,i=S/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-M)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wu extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Do(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xt extends wu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kc extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Au extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class nt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,d,u,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,M,m)}set(e,t,n,i,r,a,o,l,c,h,d,u,f,g,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*h,f=a*d,g=o*h,M=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,M=c*d;t[0]=u+M*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,M=c*d;t[0]=u-M*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=o*h,M=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+M,t[1]=l*d,t[5]=M*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=M-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-M*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=o*l,M=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+M,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ru,e,Cu)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Zn.crossVectors(n,jt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Zn.crossVectors(n,jt)),Zn.normalize(),Hs.crossVectors(jt,Zn),i[0]=Zn.x,i[4]=Hs.x,i[8]=jt.x,i[1]=Zn.y,i[5]=Hs.y,i[9]=jt.y,i[2]=Zn.z,i[6]=Hs.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],x=n[3],T=n[7],v=n[11],w=n[15],b=i[0],_=i[4],S=i[8],R=i[12],A=i[1],D=i[5],L=i[9],U=i[13],P=i[2],z=i[6],B=i[10],H=i[14],ee=i[3],V=i[7],$=i[11],j=i[15];return r[0]=a*b+o*A+l*P+c*ee,r[4]=a*_+o*D+l*z+c*V,r[8]=a*S+o*L+l*B+c*$,r[12]=a*R+o*U+l*H+c*j,r[1]=h*b+d*A+u*P+f*ee,r[5]=h*_+d*D+u*z+f*V,r[9]=h*S+d*L+u*B+f*$,r[13]=h*R+d*U+u*H+f*j,r[2]=g*b+M*A+m*P+p*ee,r[6]=g*_+M*D+m*z+p*V,r[10]=g*S+M*L+m*B+p*$,r[14]=g*R+M*U+m*H+p*j,r[3]=x*b+T*A+v*P+w*ee,r[7]=x*_+T*D+v*z+w*V,r[11]=x*S+T*L+v*B+w*$,r[15]=x*R+T*U+v*H+w*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],M=e[7],m=e[11],p=e[15],x=l*f-c*u,T=o*f-c*d,v=o*u-l*d,w=a*f-c*h,b=a*u-l*h,_=a*d-o*h;return t*(M*x-m*T+p*v)-n*(g*x-m*w+p*b)+i*(g*T-M*w+p*_)-r*(g*v-M*b+m*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],M=e[13],m=e[14],p=e[15],x=t*o-n*a,T=t*l-i*a,v=t*c-r*a,w=n*l-i*o,b=n*c-r*o,_=i*c-r*l,S=h*M-d*g,R=h*m-u*g,A=h*p-f*g,D=d*m-u*M,L=d*p-f*M,U=u*p-f*m,P=x*U-T*L+v*D+w*A-b*R+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=(o*U-l*L+c*D)*z,e[1]=(i*L-n*U-r*D)*z,e[2]=(M*_-m*b+p*w)*z,e[3]=(u*b-d*_-f*w)*z,e[4]=(l*A-a*U-c*R)*z,e[5]=(t*U-i*A+r*R)*z,e[6]=(m*v-g*_-p*T)*z,e[7]=(h*_-u*v+f*T)*z,e[8]=(a*L-o*A+c*S)*z,e[9]=(n*A-t*L-r*S)*z,e[10]=(g*b-M*v+p*x)*z,e[11]=(d*v-h*b-f*x)*z,e[12]=(o*R-a*D-l*S)*z,e[13]=(t*D-n*R+i*S)*z,e[14]=(M*T-g*w-m*x)*z,e[15]=(h*w-d*T+u*x)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,M=a*h,m=a*d,p=o*d,x=l*c,T=l*h,v=l*d,w=n.x,b=n.y,_=n.z;return i[0]=(1-(M+p))*w,i[1]=(f+v)*w,i[2]=(g-T)*w,i[3]=0,i[4]=(f-v)*b,i[5]=(1-(u+p))*b,i[6]=(m+x)*b,i[7]=0,i[8]=(g+T)*_,i[9]=(m-x)*_,i[10]=(1-(u+M))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Pi.set(i[0],i[1],i[2]).length();const o=Pi.set(i[4],i[5],i[6]).length(),l=Pi.set(i[8],i[9],i[10]).length();r<0&&(a=-a),pn.copy(this);const c=1/a,h=1/o,d=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Mn,l=!1){const c=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===Mn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ps)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Mn,l=!1){const c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===Mn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ps)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new F,pn=new nt,Ru=new F(0,0,0),Cu=new F(1,1,1),Zn=new F,Hs=new F,jt=new F,cl=new nt,hl=new es;class li{constructor(e=0,t=0,n=0,i=li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hl.setFromEuler(this),this.setFromQuaternion(hl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Gc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pu=0;const ul=new F,Di=new es,Dn=new nt,Vs=new F,ss=new F,Du=new F,Lu=new es,fl=new F(1,0,0),dl=new F(0,1,0),pl=new F(0,0,1),ml={type:"added"},Nu={type:"removed"},Li={type:"childadded",child:null},ta={type:"childremoved",child:null};class At extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new F,t=new li,n=new es,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ve}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(dl,e)}rotateZ(e){return this.rotateOnAxis(pl,e)}translateOnAxis(e,t){return ul.copy(e).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(dl,e)}translateZ(e){return this.translateOnAxis(pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Vs.copy(e):Vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ss,Vs,this.up):Dn.lookAt(Vs,ss,this.up),this.quaternion.setFromRotationMatrix(Dn),i&&(Dn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Dn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(st("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ml),Li.child=e,this.dispatchEvent(Li),Li.child=null):st("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ml),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}At.DEFAULT_UP=new F(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iu={type:"move"};class na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ws={h:0,s:0,l:0};function ia(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Co(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ia(a,r,e+1/3),this.g=ia(a,r,e),this.b=ia(a,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){const n=Hc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return je.workingToColorSpace(Wt.copy(this),e),Math.round($e(Wt.r*255,0,255))*65536+Math.round($e(Wt.g*255,0,255))*256+Math.round($e(Wt.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,i=Wt.g,r=Wt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=$t){je.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,i=Wt.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ws);const n=ys($n.h,Ws.h,t),i=ys($n.s,Ws.s,t),r=ys($n.l,Ws.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ge;Ge.NAMES=Hc;class Lo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new Lo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uu extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new F,Ln=new F,sa=new F,Nn=new F,Ni=new F,Ii=new F,gl=new F,ra=new F,aa=new F,oa=new F,la=new bt,ca=new bt,ha=new bt;class xn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),Ln.subVectors(n,t),sa.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(Ln),l=mn.dot(sa),c=Ln.dot(Ln),h=Ln.dot(sa),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(e,t),ca.fromBufferAttribute(e,n),ha.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(la,r.x),a.addScaledVector(ca,r.y),a.addScaledVector(ha,r.z),a}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Ln.subVectors(e,t),mn.cross(Ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),mn.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ni.subVectors(i,n),Ii.subVectors(r,n),ra.subVectors(e,n);const l=Ni.dot(ra),c=Ii.dot(ra);if(l<=0&&c<=0)return t.copy(n);aa.subVectors(e,i);const h=Ni.dot(aa),d=Ii.dot(aa);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ni,a);oa.subVectors(e,r);const f=Ni.dot(oa),g=Ii.dot(oa);if(g>=0&&f<=g)return t.copy(r);const M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ii,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return gl.subVectors(r,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(gl,o);const p=1/(m+M+u);return a=M*p,o=u*p,t.copy(n).addScaledVector(Ni,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),qs.subVectors(this.max,rs),Ui.subVectors(e.a,rs),Fi.subVectors(e.b,rs),Oi.subVectors(e.c,rs),Kn.subVectors(Fi,Ui),Jn.subVectors(Oi,Fi),fi.subVectors(Ui,Oi);let t=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!ua(t,Ui,Fi,Oi,qs)||(t=[1,0,0,0,1,0,0,0,1],!ua(t,Ui,Fi,Oi,qs))?!1:(Ys.crossVectors(Kn,Jn),t=[Ys.x,Ys.y,Ys.z],ua(t,Ui,Fi,Oi,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const In=[new F,new F,new F,new F,new F,new F,new F,new F],gn=new F,Xs=new wi,Ui=new F,Fi=new F,Oi=new F,Kn=new F,Jn=new F,fi=new F,rs=new F,qs=new F,Ys=new F,di=new F;function ua(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){di.fromArray(s,r);const o=i.x*Math.abs(di.x)+i.y*Math.abs(di.y)+i.z*Math.abs(di.z),l=e.dot(di),c=t.dot(di),h=n.dot(di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const zn=Fu();function Fu(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ou(s){Math.abs(s)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),s=$e(s,-65504,65504),zn.floatView[0]=s;const e=zn.uint32View[0],t=e>>23&511;return zn.baseTable[t]+((e&8388607)>>zn.shiftTable[t])}function zu(s){const e=s>>10;return zn.uint32View[0]=zn.mantissaTable[zn.offsetTable[e]+(s&1023)]+zn.exponentTable[e],zn.floatView[0]}class Zs{static toHalfFloat(e){return Ou(e)}static fromHalfFloat(e){return zu(e)}}const wt=new F,$s=new Oe;let Bu=0;class ai extends Ti{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=Qt,this.version=0,this._normalizationScale=e!==void 0?Po(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Bc(e,this.array)}}class Vc extends ai{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wc extends ai{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends ai{constructor(e,t,n){super(new Float32Array(e),t,n)}}const ku=new wi,as=new F,fa=new F;class ts{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ku.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);const t=as.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(fa)),this.expandByPoint(as.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Gu=0;const on=new nt,da=new At,zi=new F,en=new wi,os=new wi,Ut=new F;class Lt extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nu(e)?Wc:Vc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,n){return on.makeTranslation(e,t,n),this.applyMatrix4(on),this}scale(e,t,n){return on.makeScale(e,t,n),this.applyMatrix4(on),this}lookAt(e){return da.lookAt(e),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&st('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){st("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];os.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(en.min,os.min),en.expandByPoint(Ut),Ut.addVectors(en.max,os.max),en.expandByPoint(Ut)):(en.expandByPoint(os.min),en.expandByPoint(os.max))}en.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ut.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(zi.fromBufferAttribute(e,c),Ut.add(zi)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&st('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){st("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ai(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new F,l[R]=new F;const h=new F,d=new F,u=new F,f=new Oe,g=new Oe,M=new Oe,m=new F,p=new F;function x(R,A,D){c[R]=c[A]=c[D]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,A),u.fromBufferAttribute(n,D),f.fromBufferAttribute(r,R),g.fromBufferAttribute(r,A),M.fromBufferAttribute(r,D),d.sub(h),u.sub(h),g.sub(f),M.sub(f);const L=1/(g.x*M.y-M.x*g.y);isFinite(L)&&(m.copy(d).multiplyScalar(M.y).addScaledVector(u,-g.y).multiplyScalar(L),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-M.x).multiplyScalar(L),o[R].add(m),o[A].add(m),o[D].add(m),l[R].add(p),l[A].add(p),l[D].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,A=T.length;R<A;++R){const D=T[R],L=D.start,U=D.count;for(let P=L,z=L+U;P<z;P+=3)x(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const v=new F,w=new F,b=new F,_=new F;function S(R){b.fromBufferAttribute(i,R),_.copy(b);const A=o[R];v.copy(A),v.sub(b.multiplyScalar(b.dot(A))).normalize(),w.crossVectors(_,A);const L=w.dot(l[R])<0?-1:1;a.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,A=n.count;R<A;++R)c[R]&&S(R);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new F,r=new F,a=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new ai(u,h,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Lt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pa=new F,Hu=new F,Vu=new Ve;class ti{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pa.subVectors(n,t).cross(Hu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(pa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vu.getNormalMatrix(e),i=this.coplanarPoint(pa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Wu=0;class Ai extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=Xi,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=yc,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Un=new F,ma=new F,Ks=new F,Js=new F;class Xc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),Ks.copy(t).sub(e).normalize(),Js.copy(this.origin).sub(ma);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ks),o=Js.dot(this.direction),l=-Js.dot(Ks),c=Js.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const M=1/h;d*=M,u*=M,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ma).addScaledVector(Ks,u),f}intersectSphere(e,t){if(e.radius<0)return null;Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=n.x-a.x,x=n.y-a.y,T=n.z-a.z,v=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let _,S,R,A,D,L,U,P,z,B,H,ee;if(v>=w&&v>=b?(R=l,L=d,z=g,ee=p,l>=0?(_=c,S=h,A=u,D=f,U=M,P=m,B=x,H=T):(_=h,S=c,A=f,D=u,U=m,P=M,B=T,H=x)):w>=b?(R=c,L=u,z=M,ee=x,c>=0?(_=h,S=l,A=f,D=d,U=m,P=g,B=T,H=p):(_=l,S=h,A=d,D=f,U=g,P=m,B=p,H=T)):(R=h,L=f,z=m,ee=T,h>=0?(_=l,S=c,A=d,D=u,U=g,P=M,B=p,H=x):(_=c,S=l,A=u,D=d,U=M,P=g,B=x,H=p)),R===0)return null;const V=_/R,$=S/R,j=1/R,de=A-V*L,Se=D-$*L,q=U-V*z,pe=P-$*z,ye=B-V*ee,Ee=H-$*ee,le=ye*pe-Ee*q,Ne=de*Ee-Se*ye,rt=q*Se-pe*de;if(i){if(le<0||Ne<0||rt<0)return null}else if((le<0||Ne<0||rt<0)&&(le>0||Ne>0||rt>0))return null;const De=le+Ne+rt;if(De===0)return null;const Ze=j*(le*L+Ne*z+rt*ee);return(De>0?Ze<0:Ze>0)?null:this.at(Ze/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ki extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _l=new nt,pi=new Xc,Qs=new ts,xl=new F,js=new F,er=new F,tr=new F,ga=new F,nr=new F,vl=new F,ir=new F;class xt extends At{constructor(e=new Lt,t=new Ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(ga.fromBufferAttribute(d,e),a?nr.addScaledVector(ga,h):nr.addScaledVector(ga.sub(t),h))}t.add(nr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(Qs.containsPoint(pi.origin)===!1&&(pi.intersectSphere(Qs,xl)===null||pi.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(_l.copy(r).invert(),pi.copy(e.ray).applyMatrix4(_l),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=T;v<w;v+=3){const b=o.getX(v),_=o.getX(v+1),S=o.getX(v+2);i=sr(this,p,e,n,c,h,d,b,_,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const x=o.getX(m),T=o.getX(m+1),v=o.getX(m+2);i=sr(this,a,e,n,c,h,d,x,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){const m=u[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,w=T;v<w;v+=3){const b=v,_=v+1,S=v+2;i=sr(this,p,e,n,c,h,d,b,_,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const x=m,T=m+1,v=m+2;i=sr(this,a,e,n,c,h,d,x,T,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Xu(s,e,t,n,i,r,a,o){let l;if(e.side===Kt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Mi,o),l===null)return null;ir.copy(o),ir.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ir);return c<t.near||c>t.far?null:{distance:c,point:ir.clone(),object:s}}function sr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,js),s.getVertexPosition(l,er),s.getVertexPosition(c,tr);const h=Xu(s,e,t,n,js,er,tr,vl);if(h){const d=new F;xn.getBarycoord(vl,js,er,tr,d),i&&(h.uv=xn.getInterpolatedAttribute(i,o,l,c,d,new Oe)),r&&(h.uv1=xn.getInterpolatedAttribute(r,o,l,c,d,new Oe)),a&&(h.normal=xn.getInterpolatedAttribute(a,o,l,c,d,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new F,materialIndex:0};xn.getNormal(js,er,tr,u.normal),h.face=u,h.barycoord=d}return h}class bi extends kt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Rt,h=Rt,d,u){super(null,a,o,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml extends ai{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bi=new nt,Sl=new nt,rr=[],yl=new wi,qu=new nt,ls=new xt,cs=new ts;class jn extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ml(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),yl.copy(e.boundingBox).applyMatrix4(Bi),this.boundingBox.union(yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bi),cs.copy(e.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cs.copy(this.boundingSphere),cs.applyMatrix4(n),e.ray.intersectsSphere(cs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Bi),Sl.multiplyMatrices(n,Bi),ls.matrixWorld=Sl,ls.raycast(e,rr);for(let a=0,o=rr.length;a<o;a++){const l=rr[a];l.instanceId=r,l.object=this,t.push(l)}rr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ml(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bi(new Float32Array(i*this.count),i,this.count,kr,Qt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mi=new ts,Yu=new Oe(.5,.5),ar=new F;class Ns{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],x=r[12],T=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-a,f-h,p-g,w-x).normalize(),i[1].setComponents(c+a,f+h,p+g,w+x).normalize(),i[2].setComponents(c+o,f+d,p+M,w+T).normalize(),i[3].setComponents(c-o,f-d,p-M,w-T).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,p-m,w-v).normalize();else if(i[4].setComponents(c-l,f-u,p-m,w-v).normalize(),t===Mn)i[5].setComponents(c+l,f+u,p+m,w+v).normalize();else if(t===Ps)i[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){mi.center.set(0,0,0);const t=Yu.distanceTo(e.center);return mi.radius=.7071067811865476+t,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ar.x=i.normal.x>0?e.max.x:e.min.x,ar.y=i.normal.y>0?e.max.y:e.min.y,ar.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bl=new nt;class No{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];bl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ns),n[i].setFromProjectionMatrix(bl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ns),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new No().copy(this)}}class Zu extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const El=new nt,fo=new Xc,or=new ts,lr=new F;class $u extends At{constructor(e=new Lt,t=new Zu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=r,e.ray.intersectsSphere(or)===!1)return;El.copy(i).invert(),fo.copy(e.ray).applyMatrix4(El);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,M=f;g<M;g++){const m=c.getX(g);lr.fromBufferAttribute(d,m),Tl(lr,m,l,i,e,t,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,M=f;g<M;g++)lr.fromBufferAttribute(d,g),Tl(lr,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Tl(s,e,t,n,i,r,a){const o=fo.distanceSqToPoint(s);if(o<t){const l=new F;fo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qc extends kt{constructor(e=[],t=Zi,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ku extends kt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei extends kt{constructor(e,t,n=An,i,r,a,o=Rt,l=Rt,c,h=oi,d=1){if(h!==oi&&h!==Gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Do(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Yc extends Ei{constructor(e,t=An,n=Zi,i,r,a=Rt,o=Rt,l,c=oi){const h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zc extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class an extends Lt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function g(M,m,p,x,T,v,w,b,_,S,R){const A=v/_,D=w/S,L=v/2,U=w/2,P=b/2,z=_+1,B=S+1;let H=0,ee=0;const V=new F;for(let $=0;$<B;$++){const j=$*D-U;for(let de=0;de<z;de++){const Se=de*A-L;V[M]=Se*x,V[m]=j*T,V[p]=P,c.push(V.x,V.y,V.z),V[M]=0,V[m]=0,V[p]=b>0?1:-1,h.push(V.x,V.y,V.z),d.push(de/_),d.push(1-$/S),H+=1}}for(let $=0;$<S;$++)for(let j=0;j<_;j++){const de=u+j+z*$,Se=u+j+z*($+1),q=u+(j+1)+z*($+1),pe=u+(j+1)+z*$;l.push(de,Se,pe),l.push(Se,q,pe),ee+=6}o.addGroup(f,ee,R),f+=ee,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rn extends Lt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const M=[],m=n/2;let p=0;x(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(f,2));function x(){const v=new F,w=new F;let b=0;const _=(t-e)/n;for(let S=0;S<=r;S++){const R=[],A=S/r,D=A*(t-e)+e;for(let L=0;L<=i;L++){const U=L/i,P=U*l+o,z=Math.sin(P),B=Math.cos(P);w.x=D*z,w.y=-A*n+m,w.z=D*B,d.push(w.x,w.y,w.z),v.set(z,_,B).normalize(),u.push(v.x,v.y,v.z),f.push(U,1-A),R.push(g++)}M.push(R)}for(let S=0;S<i;S++)for(let R=0;R<r;R++){const A=M[R][S],D=M[R+1][S],L=M[R+1][S+1],U=M[R][S+1];(e>0||R!==0)&&(h.push(A,D,U),b+=3),(t>0||R!==r-1)&&(h.push(D,L,U),b+=3)}c.addGroup(p,b,0),p+=b}function T(v){const w=g,b=new Oe,_=new F;let S=0;const R=v===!0?e:t,A=v===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;const D=g;for(let L=0;L<=i;L++){const P=L/i*l+o,z=Math.cos(P),B=Math.sin(P);_.x=R*B,_.y=m*A,_.z=R*z,d.push(_.x,_.y,_.z),u.push(0,A,0),b.x=z*.5+.5,b.y=B*.5*A+.5,f.push(b.x,b.y),g++}for(let L=0;L<i;L++){const U=w+L,P=D+L;v===!0?h.push(P,P+1,U):h.push(P+1,P,U),S+=3}c.addGroup(p,S,v===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fr extends rn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Fr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends Lt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const T=new F,v=new F,w=new F;for(let b=0;b<t.length;b+=3)f(t[b+0],T),f(t[b+1],v),f(t[b+2],w),l(T,v,w,x)}function l(x,T,v,w){const b=w+1,_=[];for(let S=0;S<=b;S++){_[S]=[];const R=x.clone().lerp(v,S/b),A=T.clone().lerp(v,S/b),D=b-S;for(let L=0;L<=D;L++)L===0&&S===b?_[S][L]=R:_[S][L]=R.clone().lerp(A,L/D)}for(let S=0;S<b;S++)for(let R=0;R<2*(b-S)-1;R++){const A=Math.floor(R/2);R%2===0?(u(_[S][A+1]),u(_[S+1][A]),u(_[S][A])):(u(_[S][A+1]),u(_[S+1][A+1]),u(_[S+1][A]))}}function c(x){const T=new F;for(let v=0;v<r.length;v+=3)T.x=r[v+0],T.y=r[v+1],T.z=r[v+2],T.normalize().multiplyScalar(x),r[v+0]=T.x,r[v+1]=T.y,r[v+2]=T.z}function h(){const x=new F;for(let T=0;T<r.length;T+=3){x.x=r[T+0],x.y=r[T+1],x.z=r[T+2];const v=m(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(v,1-w)}g(),d()}function d(){for(let x=0;x<a.length;x+=6){const T=a[x+0],v=a[x+2],w=a[x+4],b=Math.max(T,v,w),_=Math.min(T,v,w);b>.9&&_<.1&&(T<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function f(x,T){const v=x*3;T.x=e[v+0],T.y=e[v+1],T.z=e[v+2]}function g(){const x=new F,T=new F,v=new F,w=new F,b=new Oe,_=new Oe,S=new Oe;for(let R=0,A=0;R<r.length;R+=9,A+=6){x.set(r[R+0],r[R+1],r[R+2]),T.set(r[R+3],r[R+4],r[R+5]),v.set(r[R+6],r[R+7],r[R+8]),b.set(a[A+0],a[A+1]),_.set(a[A+2],a[A+3]),S.set(a[A+4],a[A+5]),w.copy(x).add(T).add(v).divideScalar(3);const D=m(w);M(b,A+0,x,D),M(_,A+2,T,D),M(S,A+4,v,D)}}function M(x,T,v,w){w<0&&x.x===1&&(a[T]=x.x-1),v.x===0&&v.z===0&&(a[T]=w/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.vertices,e.indices,e.radius,e.detail)}}class Uo extends Io{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Uo(e.radius,e.detail)}}class Rn extends Lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const x=p*u-a;for(let T=0;T<c;T++){const v=T*d-r;g.push(v,-x,0),M.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const T=x+c*p,v=x+c*(p+1),w=x+1+c*(p+1),b=x+1+c*p;f.push(T,v,b),f.push(v,w,b)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(M,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fo extends Lt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new F,g=new Oe;for(let M=0;M<=i;M++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let M=0;M<i;M++){const m=M*(n+1);for(let p=0;p<n;p++){const x=p+m,T=x,v=x+n+1,w=x+n+2,b=x+1;o.push(T,v,b),o.push(v,w,b)}}this.setIndex(o),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Us extends Lt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new F,u=new F,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const x=[],T=p/n,v=a+T*o,w=e*Math.cos(v),b=Math.sqrt(e*e-w*w);let _=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const R=S/t,A=i+R*r;d.x=-b*Math.cos(A),d.y=w,d.z=b*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),m.push(R+_,1-T),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const T=h[p][x+1],v=h[p][x],w=h[p+1][x],b=h[p+1][x+1];(p!==0||a>0)&&f.push(T,v,b),(p!==n-1||l<Math.PI)&&f.push(v,w,b)}this.setIndex(f),this.setAttribute("position",new Ye(g,3)),this.setAttribute("normal",new Ye(M,3)),this.setAttribute("uv",new Ye(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Or extends Lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new F,f=new F,g=new F;for(let M=0;M<=n;M++){const m=a+M/n*o;for(let p=0;p<=i;p++){const x=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/i),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=i;m++){const p=(i+1)*M+m-1,x=(i+1)*(M-1)+m-1,T=(i+1)*(M-1)+m,v=(i+1)*M+m;l.push(p,x,v),l.push(x,T,v)}this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ji(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(wl(i))i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(wl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Zt(s){const e={};for(let t=0;t<s.length;t++){const n=Ji(s[t]);for(const i in n)e[i]=n[i]}return e}function wl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ju(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $c(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Vn={clone:Ji,merge:Zt};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yt extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(i.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new F().fromArray(i.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(i.value);break;case"m4":this.uniforms[n].value=new nt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kc extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zt extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ef extends Ai{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ir,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class tf extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nf extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Al(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Al(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Al(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Jc{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const sf=new Jc;class Fs{constructor(e){this.manager=e!==void 0?e:sf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}Fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class rf extends Error{constructor(e,t){super(e),this.response=t}}class af extends Fs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Fn[e],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let M=0;const m=new ReadableStream({start(p){x();function x(){d.read().then(({done:T,value:v})=>{if(T)p.close();else{M+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:M,total:f});for(let b=0,_=h.length;b<_;b++){const S=h[b];S.onProgress&&S.onProgress(w)}p.enqueue(v),x()}},T=>{p.error(T)})}}});return new Response(m)}else throw new rf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{bs.add(`file:${e}`,c);const h=Fn[e];delete Fn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Fn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ki=new WeakMap;class of extends Fs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ki.get(a);d===void 0&&(d=[],ki.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=Ds("img");function l(){h(),t&&t(this);const d=ki.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}ki.delete(this),r.manager.itemEnd(e)}function c(d){h(),i&&i(d),bs.remove(`image:${e}`);const u=ki.get(this)||[];for(let f=0;f<u.length;f++){const g=u[f];g.onError&&g.onError(d)}ki.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bs.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class lf extends Fs{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new bi,o=new af(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):st(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){const t=new bi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:fn,e.wrapT=t.wrapT!==void 0?t.wrapT:fn,e.magFilter=t.magFilter!==void 0?t.magFilter:Et,e.minFilter=t.minFilter!==void 0?t.minFilter:Et,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=kn),t.mipmapCount===1&&(e.minFilter=Et),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class cf extends Fs{constructor(e){super(e)}load(e,t,n,i){const r=new kt,a=new of(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Gr extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class hf extends Gr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const _a=new nt,Rl=new F,Cl=new F;class Qc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){_a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_a,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_a)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cr=new F,hr=new es,yn=new F;class jc extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cr,hr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cr,hr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,hr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new F,Pl=new Oe,Dl=new Oe;class cn extends jc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Pl,Dl),t.subVectors(Dl,Pl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class uf extends Qc{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ll extends Gr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Oo extends jc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ff extends Qc{constructor(){super(new Oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class df extends Gr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new ff}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pf extends Gr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gi=-90,Hi=1;class po extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(Gi,Hi,e,t);i.layers=this.layers,this.add(i);const r=new cn(Gi,Hi,e,t);r.layers=this.layers,this.add(r);const a=new cn(Gi,Hi,e,t);a.layers=this.layers,this.add(a);const o=new cn(Gi,Hi,e,t);o.layers=this.layers,this.add(o);const l=new cn(Gi,Hi,e,t);l.layers=this.layers,this.add(l);const c=new cn(Gi,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class mf extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class gf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=_f.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function _f(){this._document.hidden===!1&&this.reset()}function Nl(s,e,t,n){const i=xf(n);switch(t){case Dc:return s*e;case kr:return s*e/i.components*i.byteLength;case wo:return s*e/i.components*i.byteLength;case yi:return s*e*2/i.components*i.byteLength;case Ao:return s*e*2/i.components*i.byteLength;case Lc:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case Ro:return s*e*4/i.components*i.byteLength;case br:case Er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tr:case wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oa:case Ba:return Math.max(s,16)*Math.max(e,8)/4;case Fa:case za:return Math.max(s,8)*Math.max(e,8)/2;case ka:case Ga:case Va:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Lr:case Xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Za:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case eo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case to:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case no:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case so:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ro:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ao:case oo:case lo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case co:case ho:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nr:case uo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xf(s){switch(s){case sn:case Ac:return{byteLength:1,components:1};case Cs:case Rc:case Ct:return{byteLength:2,components:1};case Eo:case To:return{byteLength:2,components:4};case An:case bo:case Qt:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:go}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=go);function eh(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function vf(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,d[u]=M)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const M=d[f];s.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ef=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vf=`#define PI 3.141592653589793
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
} // validated`,Wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$f="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
}`,od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hd=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ud=`#ifdef USE_ENVMAP
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
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
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
#endif`,_d=`uniform sampler2D dfgLUT;
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
}`,xd=`
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cd=`#if defined( USE_POINTS_UV )
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ld=`#ifdef USE_INSTANCING_MORPH
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
#endif`,Id=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
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
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
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
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sp=`float getShadowMask() {
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
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform float backgroundBlurriness;
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Ap=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,Bp=`#define NORMAL
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
}`,kp=`#define NORMAL
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
}`,Gp=`#define PHONG
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
}`,Hp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,qp=`#define TOON
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
}`,Yp=`uniform float size;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Kp=`uniform vec3 color;
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
}`,Jp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:yf,alphamap_pars_fragment:bf,alphatest_fragment:Ef,alphatest_pars_fragment:Tf,aomap_fragment:wf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:Df,bsdfs:Lf,iridescence_fragment:Nf,bumpmap_pars_fragment:If,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:Ff,clipping_planes_pars_vertex:Of,clipping_planes_vertex:zf,color_fragment:Bf,color_pars_fragment:kf,color_pars_vertex:Gf,color_vertex:Hf,common:Vf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:qf,emissivemap_fragment:Yf,emissivemap_pars_fragment:Zf,colorspace_fragment:$f,colorspace_pars_fragment:Kf,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:jf,envmap_pars_vertex:ed,envmap_physical_pars_fragment:ud,envmap_vertex:td,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:hd,lights_toon_fragment:fd,lights_toon_pars_fragment:dd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:_d,lights_fragment_begin:xd,lights_fragment_maps:vd,lights_fragment_end:Md,lightprobes_pars_fragment:Sd,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:Td,map_fragment:wd,map_pars_fragment:Ad,map_particle_fragment:Rd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Ld,morphcolor_vertex:Nd,morphnormal_vertex:Id,morphtarget_pars_vertex:Ud,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:zd,normal_pars_fragment:Bd,normal_pars_vertex:kd,normal_vertex:Gd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:Zd,premultiplied_alpha_fragment:$d,project_vertex:Kd,dithering_fragment:Jd,dithering_pars_fragment:Qd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:hp,tonemapping_fragment:up,tonemapping_pars_fragment:fp,transmission_fragment:dp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:_p,worldpos_vertex:xp,background_vert:vp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:yp,cube_vert:bp,cube_frag:Ep,depth_vert:Tp,depth_frag:wp,distance_vert:Ap,distance_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Dp,linedashed_frag:Lp,meshbasic_vert:Np,meshbasic_frag:Ip,meshlambert_vert:Up,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:zp,meshnormal_vert:Bp,meshnormal_frag:kp,meshphong_vert:Gp,meshphong_frag:Hp,meshphysical_vert:Vp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:Zp,shadow_vert:$p,shadow_frag:Kp,sprite_vert:Jp,sprite_frag:Qp},ve={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},wn={basic:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Zt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Zt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Zt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Zt([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Zt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Zt([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Zt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Zt([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:Zt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:Zt([ve.lights,ve.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};wn.physical={uniforms:Zt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ur={r:0,b:0,g:0},jp=new nt,th=new Ve;th.set(-1,0,0,0,1,0,0,0,1);function em(s,e,t,n,i,r){const a=new Ge(0);let o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const v=x.backgroundBlurriness>0;T=e.get(T,v)}return T}function g(x){let T=!1;const v=f(x);v===null?m(a,o):v&&v.isColor&&(m(v,1),T=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(x,T){const v=f(T);v&&v.isCubeTexture?(c===void 0&&(c=new xt(new an(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Ji(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(T.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(th),c.material.toneMapped=je.getTransfer(v.colorSpace)!==ct,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new xt(new Rn(2,2),new yt({name:"BackgroundMaterial",uniforms:Ji(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=je.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,T){x.getRGB(ur,$c(s)),t.buffers.color.setClear(ur.r,ur.g,ur.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,T=1){a.set(x),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:M,dispose:p}}function tm(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(D,L,U,P,z){let B=!1;const H=d(D,P,U,L);r!==H&&(r=H,c(r.object)),B=f(D,P,U,z),B&&g(D,P,U,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(D,L,U,P),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,L,U,P){const z=P.wireframe===!0;let B=n[L.id];B===void 0&&(B={},n[L.id]=B);const H=D.isInstancedMesh===!0?D.id:0;let ee=B[H];ee===void 0&&(ee={},B[H]=ee);let V=ee[U.id];V===void 0&&(V={},ee[U.id]=V);let $=V[z];return $===void 0&&($=u(l()),V[z]=$),$}function u(D){const L=[],U=[],P=[];for(let z=0;z<t;z++)L[z]=0,U[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:P,object:D,attributes:{},index:null}}function f(D,L,U,P){const z=r.attributes,B=L.attributes;let H=0;const ee=U.getAttributes();for(const V in ee)if(ee[V].location>=0){const j=z[V];let de=B[V];if(de===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),j===void 0||j.attribute!==de||de&&j.data!==de.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(D,L,U,P){const z={},B=L.attributes;let H=0;const ee=U.getAttributes();for(const V in ee)if(ee[V].location>=0){let j=B[V];j===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const de={};de.attribute=j,j&&j.data&&(de.data=j.data),z[V]=de,H++}r.attributes=z,r.attributesNum=H,r.index=P}function M(){const D=r.newAttributes;for(let L=0,U=D.length;L<U;L++)D[L]=0}function m(D){p(D,0)}function p(D,L){const U=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;U[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),z[D]!==L&&(s.vertexAttribDivisor(D,L),z[D]=L)}function x(){const D=r.newAttributes,L=r.enabledAttributes;for(let U=0,P=L.length;U<P;U++)L[U]!==D[U]&&(s.disableVertexAttribArray(U),L[U]=0)}function T(D,L,U,P,z,B,H){H===!0?s.vertexAttribIPointer(D,L,U,z,B):s.vertexAttribPointer(D,L,U,P,z,B)}function v(D,L,U,P){M();const z=P.attributes,B=U.getAttributes(),H=L.defaultAttributeValues;for(const ee in B){const V=B[ee];if(V.location>=0){let $=z[ee];if($===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const j=$.normalized,de=$.itemSize,Se=e.get($);if(Se===void 0)continue;const q=Se.buffer,pe=Se.type,ye=Se.bytesPerElement,Ee=pe===s.INT||pe===s.UNSIGNED_INT||$.gpuType===bo;if($.isInterleavedBufferAttribute){const le=$.data,Ne=le.isInterleavedBuffer===!0?le.stride:le.itemSize,rt=$.offset;if(le.isInstancedInterleavedBuffer||le.isInstancedBufferAttribute){for(let De=0;De<V.locationSize;De++)p(V.location+De,le.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<V.locationSize;De++)m(V.location+De);s.bindBuffer(s.ARRAY_BUFFER,q);for(let De=0;De<V.locationSize;De++)T(V.location+De,de/V.locationSize,pe,j,Ne*ye,(rt+de/V.locationSize*De)*ye,Ee)}else{if($.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)p(V.location+le,$.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);s.bindBuffer(s.ARRAY_BUFFER,q);for(let le=0;le<V.locationSize;le++)T(V.location+le,de/V.locationSize,pe,j,de*ye,de/V.locationSize*le*ye,Ee)}}else if(H!==void 0){const j=H[ee];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(V.location,j);break;case 3:s.vertexAttrib3fv(V.location,j);break;case 4:s.vertexAttrib4fv(V.location,j);break;default:s.vertexAttrib1fv(V.location,j)}}}}x()}function w(){R();for(const D in n){const L=n[D];for(const U in L){const P=L[U];for(const z in P){const B=P[z];for(const H in B)h(B[H].object),delete B[H];delete P[z]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;const L=n[D.id];for(const U in L){const P=L[U];for(const z in P){const B=P[z];for(const H in B)h(B[H].object),delete B[H];delete P[z]}}delete n[D.id]}function _(D){for(const L in n){const U=n[L];for(const P in U){const z=U[P];if(z[D.id]===void 0)continue;const B=z[D.id];for(const H in B)h(B[H].object),delete B[H];delete z[D.id]}}}function S(D){for(const L in n){const U=n[L],P=D.isInstancedMesh===!0?D.id:0,z=U[P];if(z!==void 0){for(const B in z){const H=z[B];for(const ee in H)h(H[ee].object),delete H[ee];delete z[B]}delete U[P],Object.keys(U).length===0&&delete n[L]}}}function R(){A(),a=!0,r!==i&&(r=i,c(r.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function nm(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function im(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==vn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===Ct&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==sn&&_!==Qt&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),b=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:v,maxSamples:w,samples:b}}function sm(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ti,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,T=x*4;let v=p.clippingState||null;l.value=v,v=h(g,u,T,f);for(let w=0;w!==T;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const p=f+M*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,v=f;T!==M;++T,v+=4)a.copy(d[T]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}class zo extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new an(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:nn});r.uniforms.tEquirect.value=t;const a=new xt(i,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=Et),new po(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Il=256,rm=3,am=20,nh=256,ih=16,om=3,lm=new F,cm=new Ge;class Is{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new po(1,10,null),this._boxMesh=new xt(new an(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=lm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(cm));const m=new po(n,i,h);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Il,Oc(e))}_fromTexture(e,t){e.mapping===Zi||e.mapping===Rs?this._setSize(e.image.length===0?Il:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Ul(e,!1,!1),n=Math.log2(e)-rm;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ul(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Zi||e.mapping===Rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hm(),this._integrationMaterial=um());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/ih);for(let a=0;a<=n;a++){const o=Is.lodToRoughness(a,n);if(a>n-om)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(nh*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fm());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function Ul(s,e,t){return new zo(s,{minFilter:kn,generateMipmaps:e,type:Ct,colorSpace:$i,depthBuffer:t})}function Os(s,e,t){return new yt({name:s,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:t,side:Kt,blending:nn,depthTest:!1,depthWrite:!1})}function hm(){return Os("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${nh}u

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
	`)}function um(){return Os("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ih}},`

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
	`)}function fm(){return Os("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${am}
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
	`)}function Fl(){return Os("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ol(){return Os("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dm(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===yr||f===Zr)if(e.has(u)){const g=e.get(u).texture;return o(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const M=new zo(g.height);return M.fromEquirectangularTexture(s,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const f=u.mapping,g=f===yr||f===Zr,M=f===Zi||f===Rs;if(g||M){let m=t.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Is(s)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const x=u.image;return g&&x&&x.height>0||M&&x&&l(x)?(n===null&&(n=new Is(s)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===yr?u.mapping=Zi:f===Zr&&(u.mapping=Rs),u}function l(u){let f=0;const g=6;for(let M=0;M<g;M++)u[M]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function pm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ar("WebGLRenderer: "+n+" extension not supported."),i}}}function mm(s,e,t,n){const i={},r=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);const M=r.get(g);M&&(e.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,M){return i[M.id]!==void 0||(M.addEventListener("dispose",o),i[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(g){const M=g.attributes;for(const m in M)e.update(M[m],s.ARRAY_BUFFER)}function d(g){const M=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const x=M!==null?M.array.length:m.array.length/3-1,T=m.count>=65535?Wc:Vc,v=new T(Math.ceil(x/3)*6,1),w=v.array;if(M!==null){const _=M.array;p=M.version;for(let S=0,R=0;S<x;S+=3){const A=_[S+0],D=_[S+1],L=_[S+2];w[R++]=A,w[R++]=D,w[R++]=D,w[R++]=L,w[R++]=L,w[R++]=A}}else{p=m.version;for(let _=0,S=0;_<x;_+=3){const R=_+0,A=_+1,D=_+2;w[S++]=R,w[S++]=A,w[S++]=A,w[S++]=D,w[S++]=D,w[S++]=R}}v.version=p;const b=r.get(g);b&&e.remove(b),r.set(g,v)}function u(g){const M=r.get(g);if(M){const m=g.index;m!==null&&M.version<m.version&&d(g)}else d(g);return r.get(g)}function f(){for(const g in i){const M=i[g].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function gm(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=u[m];t.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _m(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:st("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function xm(s,e,t){const n=new WeakMap,i=new bt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let R=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),M===!0&&(T=3);let v=o.attributes.position.count*T,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const b=new Float32Array(v*w*4*d),_=new kc(b,v,w,d);_.type=Qt,_.needsUpdate=!0;const S=T*4;for(let A=0;A<d;A++){const D=m[A],L=p[A],U=x[A],P=v*w*4*A;for(let z=0;z<D.count;z++){const B=z*S;f===!0&&(i.fromBufferAttribute(D,z),b[P+B+0]=i.x,b[P+B+1]=i.y,b[P+B+2]=i.z,b[P+B+3]=0),g===!0&&(i.fromBufferAttribute(L,z),b[P+B+4]=i.x,b[P+B+5]=i.y,b[P+B+6]=i.z,b[P+B+7]=0),M===!0&&(i.fromBufferAttribute(U,z),b[P+B+8]=i.x,b[P+B+9]=i.y,b[P+B+10]=i.z,b[P+B+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:_,size:new Oe(v,w)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function vm(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Mm={[_o]:"LINEAR_TONE_MAPPING",[xo]:"REINHARD_TONE_MAPPING",[vo]:"CINEON_TONE_MAPPING",[Br]:"ACES_FILMIC_TONE_MAPPING",[So]:"AGX_TONE_MAPPING",[yo]:"NEUTRAL_TONE_MAPPING",[Mo]:"CUSTOM_TONE_MAPPING"};function Sm(s,e,t,n,i,r){const a=new Xt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Lt;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));const d=new Kc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new xt(h,d),f=new Oo(-1,1,1,-1,0,1);let g=null,M=null,m=!1,p,x=null,T=[],v=!1;this.setSize=function(w,b){a.setSize(w,b),o!==null&&o.setSize(w,b),l!==null&&l.setSize(w,b);for(let _=0;_<T.length;_++){const S=T[_];S.setSize&&S.setSize(w,b)}},this.setEffects=function(w){T=w,v=T.length>0&&T[0].isRenderPass===!0;const b=a.width,_=a.height;T.length>0&&o===null&&(o=new Xt(b,_,{type:Ct,depthBuffer:!1,stencilBuffer:!1}),l=new Xt(b,_,{type:Ct,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&T.some(R=>R.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ei(b,_),r===!0&&(c.format=Gn,c.type=Si)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let R=0;R<T.length;R++){const A=T[R];A.setSize&&A.setSize(b,_),S&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(w,b){if(m||w.toneMapping===Wn&&T.length===0)return!1;if(x=b,b!==null){const _=b.width,S=b.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return v===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Wn,!0},this.hasRenderPass=function(){return v},this.end=function(w,b){w.toneMapping=p,m=!0;let _=a,S=o;for(let R=0;R<T.length;R++){const A=T[R];A.enabled!==!1&&(A.render(w,S,_,b),A.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==w.outputColorSpace||M!==w.toneMapping){g=w.outputColorSpace,M=w.toneMapping,d.defines={},je.getTransfer(g)===ct&&(d.defines.SRGB_TRANSFER="");const R=Mm[M];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(x),w.render(u,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}const sh=new kt,rh=new Ei(1,1),ah=new Yc(1),oh=new kc,lh=new Au,ch=new qc,zl=[],Bl=[],kl=new Float32Array(16),Gl=new Float32Array(9),Hl=new Float32Array(4);function ns(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zl[i];if(r===void 0&&(r=new Float32Array(i),zl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Dt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Hr(s,e){let t=Bl[e];t===void 0&&(t=new Int32Array(e),Bl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ym(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2fv(this.addr,e),Dt(t,e)}}function Em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;s.uniform3fv(this.addr,e),Dt(t,e)}}function Tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4fv(this.addr,e),Dt(t,e)}}function wm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Hl.set(n),s.uniformMatrix2fv(this.addr,!1,Hl),Dt(t,n)}}function Am(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;Gl.set(n),s.uniformMatrix3fv(this.addr,!1,Gl),Dt(t,n)}}function Rm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Pt(t,n))return;kl.set(n),s.uniformMatrix4fv(this.addr,!1,kl),Dt(t,n)}}function Cm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Pm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2iv(this.addr,e),Dt(t,e)}}function Dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3iv(this.addr,e),Dt(t,e)}}function Lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4iv(this.addr,e),Dt(t,e)}}function Nm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;s.uniform2uiv(this.addr,e),Dt(t,e)}}function Um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;s.uniform3uiv(this.addr,e),Dt(t,e)}}function Fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;s.uniform4uiv(this.addr,e),Dt(t,e)}}function Vr(s){return s.version===0&&(s.compareFunction=Uc,s.needsUpdate=!0),s}function Om(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Vr(rh):r=sh,t.setTexture2D(e||r,i)}function zm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lh,i)}function Bm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Vr(ah):r=ch,t.setTextureCube(e||r,i)}function km(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||oh,i)}function Gm(s){switch(s){case 5126:return ym;case 35664:return bm;case 35665:return Em;case 35666:return Tm;case 35674:return wm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Dm;case 35669:case 35673:return Lm;case 5125:return Nm;case 36294:return Im;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}function Hm(s,e){s.uniform1fv(this.addr,e)}function Vm(s,e){const t=ns(e,this.size,2);s.uniform2fv(this.addr,t)}function Wm(s,e){const t=ns(e,this.size,3);s.uniform3fv(this.addr,t)}function Xm(s,e){const t=ns(e,this.size,4);s.uniform4fv(this.addr,t)}function qm(s,e){const t=ns(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ym(s,e){const t=ns(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Zm(s,e){const t=ns(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $m(s,e){s.uniform1iv(this.addr,e)}function Km(s,e){s.uniform2iv(this.addr,e)}function Jm(s,e){s.uniform3iv(this.addr,e)}function Qm(s,e){s.uniform4iv(this.addr,e)}function jm(s,e){s.uniform1uiv(this.addr,e)}function e0(s,e){s.uniform2uiv(this.addr,e)}function t0(s,e){s.uniform3uiv(this.addr,e)}function n0(s,e){s.uniform4uiv(this.addr,e)}function i0(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Vr(rh):a=sh;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function s0(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||lh,r[a])}function r0(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Vr(ah):a=ch;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function a0(s,e,t){const n=this.cache,i=e.length,r=Hr(t,i);Pt(n,r)||(s.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||oh,r[a])}function o0(s){switch(s){case 5126:return Hm;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Km;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}class l0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gm(t.type)}}class c0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}}class h0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const xa=/(\w+)(\])?(\[|\.)?/g;function Vl(s,e){s.seq.push(e),s.map[e.id]=e}function u0(s,e,t){const n=s.name,i=n.length;for(xa.lastIndex=0;;){const r=xa.exec(n),a=xa.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vl(t,c===void 0?new l0(o,s,e):new c0(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new h0(o),Vl(t,d)),t=d}}}class Rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);u0(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Wl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const f0=37297;let d0=0;function p0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Xl=new Ve;function m0(s){je._getMatrix(Xl,je.workingColorSpace,s);const e=`mat3( ${Xl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Ur:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ql(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+p0(s.getShaderSource(e),o)}else return r}function g0(s,e){const t=m0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const _0={[_o]:"Linear",[xo]:"Reinhard",[vo]:"Cineon",[Br]:"ACESFilmic",[So]:"AgX",[yo]:"Neutral",[Mo]:"Custom"};function x0(s,e){const t=_0[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fr=new F;function v0(){je.getLuminanceCoefficients(fr);const s=fr.x.toFixed(4),e=fr.y.toFixed(4),t=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function S0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function y0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function vs(s){return s!==""}function Yl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mo(s){return s.replace(b0,E0)}function E0(s,e){const t=qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return mo(t)}const T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(s){return s.replace(T0,w0)}function w0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kl(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const A0={[Ms]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function R0(s){return A0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C0={[Rs]:"ENVMAP_MODE_REFRACTION"};function P0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":C0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const D0={[Tc]:"ENVMAP_BLENDING_MULTIPLY",[Wh]:"ENVMAP_BLENDING_MIX",[Xh]:"ENVMAP_BLENDING_ADD"};function L0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":D0[s.combine]||"ENVMAP_BLENDING_NONE"}function N0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=R0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=P0(t),d=L0(t),u=M0(t),f=S0(r),g=i.createProgram();let M,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(vs).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(vs).join(`
`),m.length>0&&(m+=`
`)):(M=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),m=[Kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?qe.tonemapping_pars_fragment:"",t.toneMapping!==Wn?x0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,g0("linearToOutputTexel",t.outputColorSpace),v0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),a=mo(a),a=Yl(a,t),a=Zl(a,t),o=mo(o),o=Yl(o,t),o=Zl(o,t),a=$l(a),o=$l(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=p+M+a,T=p+m+o,v=Wl(i,i.VERTEX_SHADER,x),w=Wl(i,i.FRAGMENT_SHADER,T);i.attachShader(g,v),i.attachShader(g,w),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(A){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(g)||"",L=i.getShaderInfoLog(v)||"",U=i.getShaderInfoLog(w)||"",P=D.trim(),z=L.trim(),B=U.trim();let H=!0,ee=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,v,w);else{const V=ql(i,v,"vertex"),$=ql(i,w,"fragment");st("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+V+`
`+$)}else P!==""?Be("WebGLProgram: Program Info Log:",P):(z===""||B==="")&&(ee=!1);ee&&(A.diagnostics={runnable:H,programLog:P,vertexShader:{log:z,prefix:M},fragmentShader:{log:B,prefix:m}})}i.deleteShader(v),i.deleteShader(w),_=new Rr(i,g),S=y0(i,g)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(g,f0)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=w,this}let I0=0;class U0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new F0(e),t.set(e,n)),n}}class F0{constructor(e){this.id=I0++,this.code=e,this.usedTimes=0}}function O0(s){return s===yi||s===Lr||s===Nr}function z0(s,e,t,n,i,r){const a=new Gc,o=new U0,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,R,A,D,L){const U=A.fog,P=D.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||z,B),ee=u[_.type];let V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));const $=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=$!==void 0?$.length:0;let de=0;P.morphAttributes.position!==void 0&&(de=1),P.morphAttributes.normal!==void 0&&(de=2),P.morphAttributes.color!==void 0&&(de=3);let Se,q,pe,ye;if(ee){const xe=wn[ee];Se=xe.vertexShader,q=xe.fragmentShader}else{Se=_.vertexShader,q=_.fragmentShader;const xe=o.getVertexShaderStage(_),ht=o.getFragmentShaderStage(_);o.update(_,xe,ht),pe=xe.id,ye=ht.id}const Ee=s.getRenderTarget(),le=s.state.buffers.depth.getReversed(),Ne=D.isInstancedMesh===!0,rt=D.isBatchedMesh===!0,De=!!_.map,Ze=!!_.matcap,et=!!H,He=et&&H.isPMREMTexture===!0,ie=!!_.aoMap,_e=!!_.lightMap,be=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,Ie=!!_.displacementMap,Ke=!!_.emissiveMap,ut=!!_.metalnessMap,St=!!_.roughnessMap,ft=_.anisotropy>0,O=_.clearcoat>0,ot=_.diffuseRoughness>0,lt=_.dispersion>0,it=_.retroreflectivity>0,ce=_.iridescence>0,mt=_.sheen>0,Ce=_.transmission>0,ze=ft&&!!_.anisotropyMap,C=O&&!!_.clearcoatMap,y=O&&!!_.clearcoatNormalMap,k=O&&!!_.clearcoatRoughnessMap,te=ot&&!!_.diffuseRoughnessMap,Q=ce&&!!_.iridescenceMap,se=ce&&!!_.iridescenceThicknessMap,oe=mt&&!!_.sheenColorMap,Y=mt&&!!_.sheenRoughnessMap,K=!!_.specularMap,re=!!_.specularColorMap,N=!!_.specularIntensityMap,J=Ce&&!!_.transmissionMap,Z=Ce&&!!_.thicknessMap,ue=!!_.gradientMap,ae=!!_.alphaMap,he=_.alphaTest>0,Le=!!_.alphaHash,Xe=!!_.extensions;let ne=Wn;_.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(ne=s.toneMapping);const Ue=He?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,We={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Se,fragmentShader:q,defines:_.defines,customVertexShaderID:pe,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:rt,batchingColor:rt&&D._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&D.instanceColor!==null,instancingMorph:Ne&&D.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:Ze,envMap:et,envMapMode:et&&H.mapping,envMapPMREM:He,envMapMaxLod:He?Ue.length-1:null,envMapSize:He?Ue[0].width:null,aoMap:ie,lightMap:_e,bumpMap:be,normalMap:ge,displacementMap:Ie,emissiveMap:Ke,normalMapObjectSpace:ge&&_.normalMapType===Zh,normalMapTangentSpace:ge&&_.normalMapType===Ir,packedNormalMap:ge&&_.normalMapType===Ir&&O0(_.normalMap.format),metalnessMap:ut,roughnessMap:St,anisotropy:ft,anisotropyMap:ze,clearcoat:O,clearcoatMap:C,clearcoatNormalMap:y,clearcoatRoughnessMap:k,diffuseRoughness:ot,diffuseRoughnessMap:te,dispersion:lt,retroreflection:it,iridescence:ce,iridescenceMap:Q,iridescenceThicknessMap:se,sheen:mt,sheenColorMap:oe,sheenRoughnessMap:Y,specularMap:K,specularColorMap:re,specularIntensityMap:N,transmission:Ce,transmissionMap:J,thicknessMap:Z,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Xi&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:he,alphaHash:Le,combine:_.combine,mapUv:De&&f(_.map.channel),aoMapUv:ie&&f(_.aoMap.channel),lightMapUv:_e&&f(_.lightMap.channel),bumpMapUv:be&&f(_.bumpMap.channel),normalMapUv:ge&&f(_.normalMap.channel),displacementMapUv:Ie&&f(_.displacementMap.channel),emissiveMapUv:Ke&&f(_.emissiveMap.channel),metalnessMapUv:ut&&f(_.metalnessMap.channel),roughnessMapUv:St&&f(_.roughnessMap.channel),anisotropyMapUv:ze&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:re&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:ae&&f(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ge||ft),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(De||ae),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:de,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:Ke&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bt,flipSided:_.side===Kt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&_.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return We.vertexUv1s=l.has(1),We.vertexUv2s=l.has(2),We.vertexUv3s=l.has(3),l.clear(),We}function M(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(S,_),p(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const S=u[_.type];let R;if(S){const A=wn[S];R=Vn.clone(A.uniforms)}else R=_.uniforms;return R}function T(_,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new N0(s,S,_,i),c.push(R),h.set(S,R)),R}function v(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function b(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:x,acquireProgram:T,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:b}}function B0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function k0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Jl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ql(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,M,m,p){let x=s[e];return x===void 0?(x={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},s[e]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=g,x.materialVariant=a(u),x.groupOrder=M,x.renderOrder=u.renderOrder,x.z=m,x.group=p),e++,x}function l(u,f,g,M,m,p,x){x.reversedDepth===!0&&(m=-m);const T=o(u,f,g,M,m,p);g.transmission>0?n.push(T):g.transparent===!0?i.push(T):t.push(T)}function c(u,f,g,M,m,p){const x=o(u,f,g,M,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?i.unshift(x):t.unshift(x)}function h(u,f){t.length>1&&t.sort(u||k0),n.length>1&&n.sort(f||Jl),i.length>1&&i.sort(f||Jl)}function d(){for(let u=e,f=s.length;u<f;u++){const g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function G0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ql,s.set(n,[a])):i>=r.length?(a=new Ql,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function H0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ge};break;case"SpotLight":t={position:new F,direction:new F,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function V0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let W0=0;function X0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function q0(s){const e=new H0,t=V0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,r=new nt,a=new nt;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,x=0,T=0,v=0,w=0,b=0,_=0,S=0,R=0,A=0;c.sort(X0);for(let L=0,U=c.length;L<U;L++){const P=c[L],z=P.color,B=P.intensity,H=P.distance;let ee=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===yi?ee=P.shadow.map.texture:ee=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*B,d+=z.g*B,u+=z.b*B;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],B);A++}else if(P.isSunLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,j=t.get(P);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=ee;const de=$.getViewportCount();for(let Se=0;Se<de;Se++)n.sunShadowMatrix[M+Se]=$.getMatrix(Se),n.sunShadowCascade[M+Se]=$._cascadeData[Se];M+=de,g++}n.sun[f]=V,f++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,j=t.get(P);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=ee,n.directionalShadowMatrix[m]=P.shadow.matrix,w++}n.directional[m]=V,m++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(z).multiplyScalar(B),V.distance=H,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[x]=V;const $=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,$.updateMatrices(P),P.castShadow&&R++),n.spotLightMatrix[x]=$.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=ee,_++}x++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(z).multiplyScalar(B),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=V,T++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const $=P.shadow,j=t.get(P);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=P.shadow.matrix,b++}n.point[p]=V,p++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(B),V.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[v]=V,v++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==T||D.hemiLength!==v||D.numSunShadows!==g||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=T,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=x,D.rectAreaLength=T,D.hemiLength=v,D.numSunShadows=g,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=A,n.version=W0++)}function l(c,h){let d=0,u=0,f=0,g=0,M=0,m=0;const p=h.matrixWorldInverse;for(let x=0,T=c.length;x<T;x++){const v=c[x];if(v.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),d++}else if(v.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(v.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const w=n.rectArea[M];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function jl(s){const e=new q0(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Y0(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new jl(s),e.set(i,[o])):r>=a.length?(o=new jl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
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
}`,K0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],J0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ec=new nt,hs=new F,va=new F;function Q0(s,e,t){let n=new Ns;const i=new Oe,r=new Oe,a=new bt,o=new tf,l=new nf,c={},h=t.maxTextureSize,d={[Mi]:Kt,[Kt]:Mi,[Bt]:Bt},u=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Z0,fragmentShader:$0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Lt;g.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new xt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let p=this.type;this.render=function(b,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ch&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ms);const R=s.getRenderTarget(),A=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(nn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=p!==this.type;U&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=b.length;P<z;P++){const B=b[P],H=B.shadow;if(H===void 0){Be("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ee=H.getFrameExtents();i.multiply(ee),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,H.mapSize.y=r.y));const V=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===xs){if(B.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Xt(i.x,i.y,{format:yi,type:Ct,minFilter:Et,magFilter:Et,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Ei(i.x,i.y,Qt),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=oi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt}else B.isPointLight?(H.map=new zo(i.x),H.map.depthTexture=new Yc(i.x,An)):(H.map=new Xt(i.x,i.y),H.map.depthTexture=new Ei(i.x,i.y,An)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=oi,this.type===Ms?(H.map.depthTexture.compareFunction=V?Ic:Nc,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Rt,H.map.depthTexture.magFilter=Rt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);const $=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();B.isPointLight!==!0&&H.updateMatrices(B,S);const j=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let de=0;de<$;de++){const Se=H.getCamera(de);if(B.isPointLight){const q=H.camera,pe=H.matrix,ye=B.distance||q.far;ye!==q.far&&(q.far=ye,q.updateProjectionMatrix()),hs.setFromMatrixPosition(B.matrixWorld),q.position.copy(hs),va.copy(q.position),va.add(K0[de]),q.up.copy(J0[de]),q.lookAt(va),q.updateMatrixWorld(),pe.makeTranslation(-hs.x,-hs.y,-hs.z),ec.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ec,q.coordinateSystem,q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,de),s.clear();else{de===0&&(s.setRenderTarget(H.map),s.clear());const q=H.getViewport(de);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),L.viewport(a)}n=H.getFrustum(de),v(_,S,Se,B,j,this.type)}H.isPointLightShadow!==!0&&this.type===xs&&x(H,S),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(R,A,D)};function x(b,_){const S=e.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Xt(i.x,i.y,{format:yi,type:Ct}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(_,null,S,u,M,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(_,null,S,f,M,null)}function T(b,_,S,R){let A=null;const D=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)A=D;else if(A=S.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const L=A.uuid,U=_.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let z=P[U];z===void 0&&(z=A.clone(),P[U]=z,_.addEventListener("dispose",w)),A=z}if(A.visible=_.visible,A.wireframe=_.wireframe,R===xs?A.side=_.shadowSide!==null?_.shadowSide:_.side:A.side=_.shadowSide!==null?_.shadowSide:d[_.side],A.alphaMap=_.alphaMap,A.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,A.map=_.map,A.clipShadows=_.clipShadows,A.clippingPlanes=_.clippingPlanes,A.clipIntersection=_.clipIntersection,A.displacementMap=_.displacementMap,A.displacementScale=_.displacementScale,A.displacementBias=_.displacementBias,A.wireframeLinewidth=_.wireframeLinewidth,A.linewidth=_.linewidth,S.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const L=s.properties.get(A);L.light=S}return A}function v(b,_,S,R,A,D){if(b.visible===!1)return;if(b.layers.test(A)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===xs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const P=e.update(b),z=b.material;if(Array.isArray(z)){const B=P.groups;for(let H=0,ee=B.length;H<ee;H++){const V=B[H],$=z[V.materialIndex];if($&&$.visible){const j=T(b,$,R,D);b.onBeforeShadow(s,b,_,S,P,j,V),s.renderBufferDirect(S,null,P,j,b,V),b.onAfterShadow(s,b,_,S,P,j,V)}}}else if(z.visible){const B=T(b,z,R,D);b.onBeforeShadow(s,b,_,S,P,B,null),s.renderBufferDirect(S,null,P,B,b,null),b.onAfterShadow(s,b,_,S,P,B,null)}}const U=b.children;for(let P=0,z=U.length;P<z;P++)v(U[P],_,S,R,A,D)}function w(b){b.target.removeEventListener("dispose",w);for(const S in c){const R=c[S],A=b.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function j0(s,e){function t(){let N=!1;const J=new bt;let Z=null;const ue=new bt(0,0,0,0);return{setMask:function(ae){Z!==ae&&!N&&(s.colorMask(ae,ae,ae,ae),Z=ae)},setLocked:function(ae){N=ae},setClear:function(ae,he,Le,Xe,ne){ne===!0&&(ae*=Xe,he*=Xe,Le*=Xe),J.set(ae,he,Le,Xe),ue.equals(J)===!1&&(s.clearColor(ae,he,Le,Xe),ue.copy(J))},reset:function(){N=!1,Z=null,ue.set(-1,0,0,0)}}}function n(){let N=!1,J=!1,Z=null,ue=null,ae=null;return{setReversed:function(he){if(J!==he){const Le=e.get("EXT_clip_control");he?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),J=he;const Xe=ae;ae=null,this.setClear(Xe)}},getReversed:function(){return J},setTest:function(he){he?le(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(he){Z!==he&&!N&&(s.depthMask(he),Z=he)},setFunc:function(he){if(J&&(he=ru[he]),ue!==he){switch(he){case Ra:s.depthFunc(s.NEVER);break;case Ca:s.depthFunc(s.ALWAYS);break;case Pa:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case Da:s.depthFunc(s.EQUAL);break;case La:s.depthFunc(s.GEQUAL);break;case Na:s.depthFunc(s.GREATER);break;case Ia:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=he}},setLocked:function(he){N=he},setClear:function(he){ae!==he&&(ae=he,J&&(he=1-he),s.clearDepth(he))},reset:function(){N=!1,Z=null,ue=null,ae=null,J=!1}}}function i(){let N=!1,J=null,Z=null,ue=null,ae=null,he=null,Le=null,Xe=null,ne=null;return{setTest:function(Ue){N||(Ue?le(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Ue){J!==Ue&&!N&&(s.stencilMask(Ue),J=Ue)},setFunc:function(Ue,We,xe){(Z!==Ue||ue!==We||ae!==xe)&&(s.stencilFunc(Ue,We,xe),Z=Ue,ue=We,ae=xe)},setOp:function(Ue,We,xe){(he!==Ue||Le!==We||Xe!==xe)&&(s.stencilOp(Ue,We,xe),he=Ue,Le=We,Xe=xe)},setLocked:function(Ue){N=Ue},setClear:function(Ue){ne!==Ue&&(s.clearStencil(Ue),ne=Ue)},reset:function(){N=!1,J=null,Z=null,ue=null,ae=null,he=null,Le=null,Xe=null,ne=null}}}const r=new t,a=new n,o=new i;let l={};const c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],M=null,m=!1,p=null,x=null,T=null,v=null,w=null,b=null,_=null,S=new Ge(0,0,0),R=0,A=!1,D=null,L=null,U=null,P=null,z=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=ee>=2);let $=null,j={};const de=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),q=new bt().fromArray(de),pe=new bt().fromArray(Se);function ye(N,J,Z,ue){const ae=new Uint8Array(4),he=s.createTexture();s.bindTexture(N,he),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<Z;Le++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(J+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return he}const Ee={};Ee[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(s.DEPTH_TEST),a.setFunc(As),be(!1),ge(jo),le(s.CULL_FACE),ie(nn);function le(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ne(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function rt(N,J){return u[N]!==J?(s.bindFramebuffer(N,J),u[N]=J,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=J),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=J),!0):!1}function De(N,J){let Z=g,ue=!1;if(N){Z=f.get(J),Z===void 0&&(Z=[],f.set(J,Z));const ae=N.textures;if(Z.length!==ae.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Le=ae.length;he<Le;he++)Z[he]=s.COLOR_ATTACHMENT0+he;Z.length=ae.length,ue=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,ue=!0);ue&&s.drawBuffers(Z)}function Ze(N){return M!==N?(s.useProgram(N),M=N,!0):!1}const et={[ni]:s.FUNC_ADD,[Ph]:s.FUNC_SUBTRACT,[Dh]:s.FUNC_REVERSE_SUBTRACT};et[Lh]=s.MIN,et[Nh]=s.MAX;const He={[Aa]:s.ZERO,[Ih]:s.ONE,[Uh]:s.SRC_COLOR,[Sc]:s.SRC_ALPHA,[Bh]:s.SRC_ALPHA_SATURATE,[Ec]:s.DST_COLOR,[bc]:s.DST_ALPHA,[Fh]:s.ONE_MINUS_SRC_COLOR,[yc]:s.ONE_MINUS_SRC_ALPHA,[zh]:s.ONE_MINUS_DST_COLOR,[Oh]:s.ONE_MINUS_DST_ALPHA,[kh]:s.CONSTANT_COLOR,[Gh]:s.ONE_MINUS_CONSTANT_COLOR,[Hh]:s.CONSTANT_ALPHA,[Vh]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(N,J,Z,ue,ae,he,Le,Xe,ne,Ue){if(N===nn){m===!0&&(Ne(s.BLEND),m=!1);return}if(m===!1&&(le(s.BLEND),m=!0),N!==Mc){if(N!==p||Ue!==A){if((x!==ni||w!==ni)&&(s.blendEquation(s.FUNC_ADD),x=ni,w=ni),Ue)switch(N){case Xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFunc(s.ONE,s.ONE);break;case el:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:st("WebGLState: Invalid blending: ",N);break}else switch(N){case Xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case el:st("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:st("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:st("WebGLState: Invalid blending: ",N);break}T=null,v=null,b=null,_=null,S.set(0,0,0),R=0,p=N,A=Ue}return}ae=ae||J,he=he||Z,Le=Le||ue,(J!==x||ae!==w)&&(s.blendEquationSeparate(et[J],et[ae]),x=J,w=ae),(Z!==T||ue!==v||he!==b||Le!==_)&&(s.blendFuncSeparate(He[Z],He[ue],He[he],He[Le]),T=Z,v=ue,b=he,_=Le),(Xe.equals(S)===!1||ne!==R)&&(s.blendColor(Xe.r,Xe.g,Xe.b,ne),S.copy(Xe),R=ne),p=N,A=!1}function _e(N,J){N.side===Bt?Ne(s.CULL_FACE):le(s.CULL_FACE);let Z=N.side===Kt;J&&(Z=!Z),be(Z),N.blending===Xi&&N.transparent===!1?ie(nn):ie(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ue=N.stencilWrite;o.setTest(ue),ue&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function ge(N){N!==Ah?(le(s.CULL_FACE),N!==L&&(N===jo?s.cullFace(s.BACK):N===Rh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),L=N}function Ie(N){N!==U&&(H&&s.lineWidth(N),U=N)}function Ke(N,J,Z){N?(le(s.POLYGON_OFFSET_FILL),(P!==J||z!==Z)&&(P=J,z=Z,a.getReversed()&&(J=-J,Z=-Z),s.polygonOffset(J,Z))):Ne(s.POLYGON_OFFSET_FILL)}function ut(N){N?le(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function St(N){N===void 0&&(N=s.TEXTURE0+B-1),$!==N&&(s.activeTexture(N),$=N)}function ft(N,J,Z){Z===void 0&&($===null?Z=s.TEXTURE0+B-1:Z=$);let ue=j[Z];ue===void 0&&(ue={type:void 0,texture:void 0},j[Z]=ue),(ue.type!==N||ue.texture!==J)&&($!==Z&&(s.activeTexture(Z),$=Z),s.bindTexture(N,J||Ee[N]),ue.type=N,ue.texture=J)}function O(){const N=j[$];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ot(){try{s.compressedTexImage2D(...arguments)}catch(N){st("WebGLState:",N)}}function lt(){try{s.compressedTexImage3D(...arguments)}catch(N){st("WebGLState:",N)}}function it(){try{s.texSubImage2D(...arguments)}catch(N){st("WebGLState:",N)}}function ce(){try{s.texSubImage3D(...arguments)}catch(N){st("WebGLState:",N)}}function mt(){try{s.compressedTexSubImage2D(...arguments)}catch(N){st("WebGLState:",N)}}function Ce(){try{s.compressedTexSubImage3D(...arguments)}catch(N){st("WebGLState:",N)}}function ze(){try{s.texStorage2D(...arguments)}catch(N){st("WebGLState:",N)}}function C(){try{s.texStorage3D(...arguments)}catch(N){st("WebGLState:",N)}}function y(){try{s.texImage2D(...arguments)}catch(N){st("WebGLState:",N)}}function k(){try{s.texImage3D(...arguments)}catch(N){st("WebGLState:",N)}}function te(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function Q(N,J){d[N]!==J&&(s.pixelStorei(N,J),d[N]=J)}function se(N){q.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),q.copy(N))}function oe(N){pe.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),pe.copy(N))}function Y(N,J){let Z=c.get(J);Z===void 0&&(Z=new WeakMap,c.set(J,Z));let ue=Z.get(N);ue===void 0&&(ue=s.getUniformBlockIndex(J,N.name),s.uniformBlockBinding(J,ue,ue),Z.set(N,ue))}function K(N,J,Z){const ae=c.get(J).get(N);l[ae]!==Z&&(s.bindBufferBase(s.UNIFORM_BUFFER,ae,Z),l[ae]=Z)}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},$=null,j={},u={},l={},f=new WeakMap,g=[],M=null,m=!1,p=null,x=null,T=null,v=null,w=null,b=null,_=null,S=new Ge(0,0,0),R=0,A=!1,D=null,L=null,U=null,P=null,z=null,q.set(0,0,s.canvas.width,s.canvas.height),pe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Ne,bindFramebuffer:rt,drawBuffers:De,useProgram:Ze,setBlending:ie,setMaterial:_e,setFlipSided:be,setCullFace:ge,setLineWidth:Ie,setPolygonOffset:Ke,setScissorTest:ut,activeTexture:St,bindTexture:ft,unbindTexture:O,compressedTexImage2D:ot,compressedTexImage3D:lt,texImage2D:y,texImage3D:k,pixelStorei:Q,getParameter:te,updateUBOMapping:Y,uniformBlockBinding:K,texStorage2D:ze,texStorage3D:C,texSubImage2D:it,texSubImage3D:ce,compressedTexSubImage2D:mt,compressedTexSubImage3D:Ce,scissor:se,viewport:oe,reset:re}}function eg(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap,d=new Set;let u;const f=new WeakMap,g=new Set,M=new FinalizationRegistry(C=>g.delete(C));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,y){return m?new OffscreenCanvas(C,y):Ds("canvas")}function x(C,y,k){let te=1;const Q=ze(C);if((Q.width>k||Q.height>k)&&(te=k/Math.max(Q.width,Q.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(te*Q.width),oe=Math.floor(te*Q.height);u===void 0&&(u=p(se,oe));const Y=y?p(se,oe):u;return Y.width=se,Y.height=oe,Y.getContext("2d").drawImage(C,0,0,se,oe),Be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+se+"x"+oe+")."),Y}else return"data"in C&&Be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function T(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,y,k,te,Q,se=!1){if(C!==null){if(s[C]!==void 0)return s[C];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe;te&&(oe=e.get("EXT_texture_norm16"),oe||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===s.RED&&(k===s.FLOAT&&(Y=s.R32F),k===s.HALF_FLOAT&&(Y=s.R16F),k===s.UNSIGNED_BYTE&&(Y=s.R8),k===s.UNSIGNED_SHORT&&oe&&(Y=oe.R16_EXT),k===s.SHORT&&oe&&(Y=oe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.R8UI),k===s.UNSIGNED_SHORT&&(Y=s.R16UI),k===s.UNSIGNED_INT&&(Y=s.R32UI),k===s.BYTE&&(Y=s.R8I),k===s.SHORT&&(Y=s.R16I),k===s.INT&&(Y=s.R32I)),y===s.RG&&(k===s.FLOAT&&(Y=s.RG32F),k===s.HALF_FLOAT&&(Y=s.RG16F),k===s.UNSIGNED_BYTE&&(Y=s.RG8),k===s.UNSIGNED_SHORT&&oe&&(Y=oe.RG16_EXT),k===s.SHORT&&oe&&(Y=oe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RG8UI),k===s.UNSIGNED_SHORT&&(Y=s.RG16UI),k===s.UNSIGNED_INT&&(Y=s.RG32UI),k===s.BYTE&&(Y=s.RG8I),k===s.SHORT&&(Y=s.RG16I),k===s.INT&&(Y=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),k===s.UNSIGNED_INT&&(Y=s.RGB32UI),k===s.BYTE&&(Y=s.RGB8I),k===s.SHORT&&(Y=s.RGB16I),k===s.INT&&(Y=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),k===s.UNSIGNED_INT&&(Y=s.RGBA32UI),k===s.BYTE&&(Y=s.RGBA8I),k===s.SHORT&&(Y=s.RGBA16I),k===s.INT&&(Y=s.RGBA32I)),y===s.RGB&&(k===s.UNSIGNED_SHORT&&oe&&(Y=oe.RGB16_EXT),k===s.SHORT&&oe&&(Y=oe.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),y===s.RGBA){const K=se?Ur:je.getTransfer(Q);k===s.FLOAT&&(Y=s.RGBA32F),k===s.HALF_FLOAT&&(Y=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Y=K===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&oe&&(Y=oe.RGBA16_EXT),k===s.SHORT&&oe&&(Y=oe.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(C,y){let k;return C?y===null||y===An||y===Si?k=s.DEPTH24_STENCIL8:y===Qt?k=s.DEPTH32F_STENCIL8:y===Cs&&(k=s.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===An||y===Si?k=s.DEPTH_COMPONENT24:y===Qt?k=s.DEPTH_COMPONENT32F:y===Cs&&(k=s.DEPTH_COMPONENT16),k}function S(C,y){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==Rt&&C.minFilter!==Et?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=new WeakRef(C);n.get(C).__ref=y,g.add(y),M.register(C,y,y)}function A(C){const y=n.get(C).__ref;y!==void 0&&(g.delete(y),M.unregister(y))}function D(C){U(C.target)}function L(C){P(C.target)}function U(C){C.removeEventListener("dispose",D),A(C),B(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function P(C){C.removeEventListener("dispose",L),A(C),ee(C)}function z(){for(const C of g){const y=C.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):U(y))}g.clear(),d.clear()}function B(C){const y=n.get(C);if(y.__webglInit===void 0)return;const k=C.source,te=f.get(k);if(te){const Q=te[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&H(C),Object.keys(te).length===0&&f.delete(k)}n.remove(C)}function H(C){const y=n.get(C);s.deleteTexture(y.__webglTexture);const k=C.source,te=f.get(k);delete te[y.__cacheKey],a.memory.textures--}function ee(C){const y=n.get(C);y.__depthDisposeCallback&&y.__depthDisposeCallback();const k=C.depthTexture;if(k&&k.renderTarget===C&&U(k),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let se=0;se<y.__webglFramebuffer[Q].length;se++)s.deleteFramebuffer(y.__webglFramebuffer[Q][se]);else s.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const te=C.textures;for(let Q=0,se=te.length;Q<se;Q++){const oe=n.get(te[Q]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(te[Q])}n.remove(C)}let V=0;function $(){V=0}function j(){return V}function de(C){V=C}function Se(){const C=V;return C>=i.maxTextures&&Be("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,C}function q(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.mipmapsAutoUpdate),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function pe(C,y){const k=n.get(C);if(C.isVideoTexture&&mt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const te=C.image;if(te===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function ye(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){_e(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function Ee(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){_e(k,C,y);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function le(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){be(k,C,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const Ne={[Sn]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[Ua]:s.MIRRORED_REPEAT},rt={[Rt]:s.NEAREST,[qh]:s.NEAREST_MIPMAP_NEAREST,[ks]:s.NEAREST_MIPMAP_LINEAR,[Et]:s.LINEAR,[$r]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},De={[Kh]:s.NEVER,[Uc]:s.ALWAYS,[Jh]:s.LESS,[Nc]:s.LEQUAL,[Qh]:s.EQUAL,[Ic]:s.GEQUAL,[jh]:s.GREATER,[eu]:s.NOTEQUAL};function Ze(C,y){if(y.type===Qt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Et||y.magFilter===$r||y.magFilter===ks||y.magFilter===kn||y.minFilter===Et||y.minFilter===$r||y.minFilter===ks||y.minFilter===kn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ne[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ne[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ne[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,rt[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,rt[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,De[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Rt||y.minFilter!==ks&&y.minFilter!==kn||y.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function et(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",D),R(y));const te=y.source;let Q=f.get(te);Q===void 0&&(Q={},f.set(te,Q));const se=q(y);if(se!==C.__cacheKey){Q[se]===void 0&&(Q[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[se].usedTimes++;const oe=Q[C.__cacheKey];oe!==void 0&&(Q[C.__cacheKey].usedTimes--,oe.usedTimes===0&&H(y)),C.__cacheKey=se,C.__webglTexture=Q[se].texture}return k}function He(C,y,k){return Math.floor(Math.floor(C/k)/y)}function ie(C,y,k,te){const se=C.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,k,te,y.data);else{se.sort((N,J)=>N.start-J.start);let oe=0;for(let N=1;N<se.length;N++){const J=se[oe],Z=se[N],ue=J.start+J.count,ae=He(Z.start,y.width,4),he=He(J.start,y.width,4);Z.start<=ue+1&&ae===he&&He(Z.start+Z.count-1,y.width,4)===ae?J.count=Math.max(J.count,Z.start+Z.count-J.start):(++oe,se[oe]=Z)}se.length=oe+1;const Y=t.getParameter(s.UNPACK_ROW_LENGTH),K=t.getParameter(s.UNPACK_SKIP_PIXELS),re=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let N=0,J=se.length;N<J;N++){const Z=se[N],ue=Math.floor(Z.start/4),ae=Math.ceil(Z.count/4),he=ue%y.width,Le=Math.floor(ue/y.width),Xe=ae,ne=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(s.TEXTURE_2D,0,he,Le,Xe,ne,k,te,y.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Y),t.pixelStorei(s.UNPACK_SKIP_PIXELS,K),t.pixelStorei(s.UNPACK_SKIP_ROWS,re)}}function _e(C,y,k){let te=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=s.TEXTURE_3D);const Q=et(C,y),se=y.source;t.bindTexture(te,C.__webglTexture,s.TEXTURE0+k);const oe=n.get(se);if(se.version!==oe.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ne=je.getPrimaries(je.workingColorSpace),Ue=y.colorSpace===hn?null:je.getPrimaries(y.colorSpace),We=y.colorSpace===hn||ne===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let K=x(y.image,!1,i.maxTextureSize);K=Ce(y,K);const re=r.convert(y.format,y.colorSpace),N=r.convert(y.type);let J=b(y.internalFormat,re,N,y.normalized,y.colorSpace,y.isVideoTexture);Ze(te,y);let Z;const ue=y.mipmaps,ae=y.isVideoTexture!==!0,he=oe.__version===void 0||Q===!0,Le=se.dataReady,Xe=S(y,K);if(y.isDepthTexture)J=_(y.format===Gn,y.type),he&&(ae?t.texStorage2D(s.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,re,N,null));else if(y.isDataTexture)if(ue.length>0){ae&&he&&t.texStorage2D(s.TEXTURE_2D,Xe,J,ue[0].width,ue[0].height);for(let ne=0,Ue=ue.length;ne<Ue;ne++)Z=ue[ne],ae?Le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,Z.width,Z.height,re,N,Z.data):t.texImage2D(s.TEXTURE_2D,ne,J,Z.width,Z.height,0,re,N,Z.data);y.generateMipmaps=!1}else ae?(he&&t.texStorage2D(s.TEXTURE_2D,Xe,J,K.width,K.height),Le&&ie(y,K,re,N)):t.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,re,N,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ae&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,J,ue[0].width,ue[0].height,K.depth);for(let ne=0,Ue=ue.length;ne<Ue;ne++)if(Z=ue[ne],y.format!==vn)if(re!==null)if(ae){if(Le)if(y.layerUpdates.size>0){const We=Nl(Z.width,Z.height,y.format,y.type);for(const xe of y.layerUpdates){const ht=Z.data.subarray(xe*We/Z.data.BYTES_PER_ELEMENT,(xe+1)*We/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,xe,Z.width,Z.height,1,re,ht)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,Z.width,Z.height,K.depth,re,Z.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,J,Z.width,Z.height,K.depth,0,Z.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,Z.width,Z.height,K.depth,re,N,Z.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,J,Z.width,Z.height,K.depth,0,re,N,Z.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ae&&he&&t.texStorage2D(s.TEXTURE_2D,Xe,J,ue[0].width,ue[0].height);for(let ne=0,Ue=ue.length;ne<Ue;ne++)Z=ue[ne],y.format!==vn?re!==null?ae?Le&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,Z.width,Z.height,re,Z.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,J,Z.width,Z.height,0,Z.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,Z.width,Z.height,re,N,Z.data):t.texImage2D(s.TEXTURE_2D,ne,J,Z.width,Z.height,0,re,N,Z.data)}else if(y.isDataArrayTexture)if(ae){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Xe,J,K.width,K.height,K.depth),Le)if(y.layerUpdates.size>0){const ne=Nl(K.width,K.height,y.format,y.type);for(const Ue of y.layerUpdates){const We=K.data.subarray(Ue*ne/K.data.BYTES_PER_ELEMENT,(Ue+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ue,K.width,K.height,1,re,N,We)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,re,N,K.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,re,N,K.data);else if(y.isData3DTexture)ae?(he&&t.texStorage3D(s.TEXTURE_3D,Xe,J,K.width,K.height,K.depth),Le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,re,N,K.data)):t.texImage3D(s.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,re,N,K.data);else if(y.isFramebufferTexture){if(he)if(ae)t.texStorage2D(s.TEXTURE_2D,Xe,J,K.width,K.height);else{let ne=K.width,Ue=K.height;for(let We=0;We<Xe;We++)t.texImage2D(s.TEXTURE_2D,We,J,ne,Ue,0,re,N,null),ne>>=1,Ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ne=s.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),d.add(y),ne.onpaint=Ue=>{const We=Ue.changedElements;for(const xe of d)We.includes(xe.image)&&(xe.needsUpdate=!0)},ne.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const We=s.RGBA,xe=s.RGBA,ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,We,xe,ht,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ue.length>0){if(ae&&he){const ne=ze(ue[0]);t.texStorage2D(s.TEXTURE_2D,Xe,J,ne.width,ne.height)}for(let ne=0,Ue=ue.length;ne<Ue;ne++)Z=ue[ne],ae?Le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,re,N,Z):t.texImage2D(s.TEXTURE_2D,ne,J,re,N,Z);y.generateMipmaps=!1}else if(ae){if(he){const ne=ze(K);t.texStorage2D(s.TEXTURE_2D,Xe,J,ne.width,ne.height)}Le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re,N,K)}else t.texImage2D(s.TEXTURE_2D,0,J,re,N,K);T(y)&&y.mipmapsAutoUpdate===!0&&v(te),oe.__version=se.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function be(C,y,k){if(y.image.length!==6)return;const te=et(C,y),Q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const se=n.get(Q);if(Q.version!==se.__version||te===!0){t.activeTexture(s.TEXTURE0+k);const oe=je.getPrimaries(je.workingColorSpace),Y=y.colorSpace===hn?null:je.getPrimaries(y.colorSpace),K=y.colorSpace===hn||oe===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const re=y.isCompressedTexture||y.image[0].isCompressedTexture,N=y.image[0]&&y.image[0].isDataTexture,J=[];for(let xe=0;xe<6;xe++)!re&&!N?J[xe]=x(y.image[xe],!0,i.maxCubemapSize):J[xe]=N?y.image[xe].image:y.image[xe],J[xe]=Ce(y,J[xe]);const Z=J[0],ue=r.convert(y.format,y.colorSpace),ae=r.convert(y.type);let he=b(y.internalFormat,ue,ae,y.normalized,y.colorSpace);const Le=y.isVideoTexture!==!0,Xe=se.__version===void 0||te===!0,ne=Q.dataReady;let Ue=S(y,Z);Ze(s.TEXTURE_CUBE_MAP,y);let We;if(y.isDepthTexture){if(he=_(y.format===Gn,y.type),Xe)if(Le)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,he,Z.width,Z.height);else for(let xe=0;xe<6;xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,Z.width,Z.height,0,ue,ae,null)}else if(re){Le&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,he,Z.width,Z.height);for(let xe=0;xe<6;xe++){We=J[xe].mipmaps;for(let ht=0;ht<We.length;ht++){const Nt=We[ht];y.format!==vn?ue!==null?Le?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht,0,0,Nt.width,Nt.height,ue,Nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht,he,Nt.width,Nt.height,0,Nt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht,0,0,Nt.width,Nt.height,ue,ae,Nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht,he,Nt.width,Nt.height,0,ue,ae,Nt.data)}}}else{if(We=y.mipmaps,Le&&Xe){We.length>0&&Ue++;const xe=ze(J[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,he,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(N){Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,J[xe].width,J[xe].height,ue,ae,J[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,J[xe].width,J[xe].height,0,ue,ae,J[xe].data);for(let ht=0;ht<We.length;ht++){const qn=We[ht].image[xe].image;Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht+1,0,0,qn.width,qn.height,ue,ae,qn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht+1,he,qn.width,qn.height,0,ue,ae,qn.data)}}else{Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ue,ae,J[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,ue,ae,J[xe]);for(let ht=0;ht<We.length;ht++){const Nt=We[ht];Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht+1,0,0,ue,ae,Nt.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht+1,he,ue,ae,Nt.image[xe])}}}T(y)&&y.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),se.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ge(C,y,k,te,Q,se){const oe=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),K=b(k.internalFormat,oe,Y,k.normalized,k.colorSpace),re=n.get(y),N=n.get(k);if(N.__renderTarget=y,!re.__hasExternalTextures){const J=Math.max(1,y.width>>se),Z=Math.max(1,y.height>>se);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,se,K,J,Z,y.depth,0,oe,Y,null):t.texImage2D(Q,se,K,J,Z,0,oe,Y,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),ce(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,Q,N.__webglTexture,0,it(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,Q,N.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(C,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const te=y.depthTexture,Q=te&&te.isDepthTexture?te.type:null,se=_(y.stencilBuffer,Q),oe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ce(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(y),se,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(y),se,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,se,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,C)}else{const te=y.textures;for(let Q=0;Q<te.length;Q++){const se=te[Q],oe=r.convert(se.format,se.colorSpace),Y=r.convert(se.type),K=b(se.internalFormat,oe,Y,se.normalized,se.colorSpace);ce(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,it(y),K,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,it(y),K,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,K,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ke(C,y,k){const te=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(y.depthTexture);Q.__renderTarget=y;const se=te?y.depthTexture.image[0]:y.depthTexture.image;(!Q.__webglTexture||se.width!==y.width||se.height!==y.height)&&(se.width=y.width,se.height=y.height,y.depthTexture.needsUpdate=!0),te?le(y.depthTexture,0):pe(y.depthTexture,0);const oe=Q.__webglTexture,Y=it(y),K=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,re=y.depthTexture.format===Gn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===oi)ce(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,K,oe,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,re,K,oe,0);else if(y.depthTexture.format===Gn)ce(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,K,oe,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,re,K,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(C){const y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",Q)};te.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=te}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let te=0;te<6;te++)Ke(y.__webglFramebuffer[te],C,te);else C.texture.mipmaps.length>0?Ke(y.__webglFramebuffer[0],C,0):Ke(y.__webglFramebuffer,C,0);else if(k){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=s.createRenderbuffer(),Ie(y.__webglDepthbuffer[te],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,se)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Ie(y.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,se)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function St(C,y,k){const te=n.get(C);y!==void 0&&ge(te.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&ut(C)}function ft(C){const y=C.texture,k=n.get(C),te=n.get(y);C.addEventListener("dispose",L),R(C);const Q=C.textures,se=C.isWebGLCubeRenderTarget===!0,oe=Q.length>1;if(oe||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=y.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let K=0;K<y.mipmaps.length;K++)k.__webglFramebuffer[Y][K]=s.createFramebuffer()}else k.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)k.__webglFramebuffer[Y]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(oe)for(let Y=0,K=Q.length;Y<K;Y++){const re=n.get(Q[Y]);re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&ce(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){const K=Q[Y];k.__webglColorRenderbuffer[Y]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);const re=r.convert(K.format,K.colorSpace),N=r.convert(K.type),J=b(K.internalFormat,re,N,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),Z=it(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,J,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Y,s.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),Ze(s.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)ge(k.__webglFramebuffer[Y][K],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,K);else ge(k.__webglFramebuffer[Y],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);T(y)?v(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(oe){for(let Y=0,K=Q.length;Y<K;Y++){const re=Q[Y],N=n.get(re);let J=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,N.__webglTexture),Ze(J,re),ge(k.__webglFramebuffer,C,re,s.COLOR_ATTACHMENT0+Y,J,0),T(re)&&v(J)}t.unbindTexture()}else{let Y=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Y=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Y,te.__webglTexture),Ze(Y,y),y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)ge(k.__webglFramebuffer[K],C,y,s.COLOR_ATTACHMENT0,Y,K);else ge(k.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,Y,0);T(y)?v(Y):y.mipmaps.length>0&&s.texParameteri(Y,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&ut(C)}function O(C){const y=C.textures;for(let k=0,te=y.length;k<te;k++){const Q=y[k];if(T(Q)&&Q.mipmapsAutoUpdate===!0){const se=w(C),oe=n.get(Q).__webglTexture;t.bindTexture(se,oe),v(se),t.unbindTexture()}}}const ot=[];function lt(C){if(C.samples>0){if(ce(C)===!1){const y=C.textures,k=C.width,te=C.height;let Q=s.COLOR_BUFFER_BIT;const se=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=n.get(C),Y=y.length>1;if(Y)for(let re=0;re<y.length;re++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let re=0;re<y.length;re++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),Y){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const N=n.get(y[re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,k,te,0,0,k,te,Q,s.NEAREST),l===!0&&(ot.length=0,ot.push(s.COLOR_ATTACHMENT0+re),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&ot.push(se),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Y)for(let re=0;re<y.length;re++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);const N=n.get(y[re]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function it(C){return Math.min(i.maxSamples,C.samples)}function ce(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function mt(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Ce(C,y){const k=C.colorSpace,te=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==$i&&k!==hn&&(je.getTransfer(k)===ct?(te!==vn||Q!==sn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):st("WebGLTextures: Unsupported texture color space:",k)),y}function ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Se,this.resetTextureUnits=$,this.getTextureUnits=j,this.setTextureUnits=de,this.setTexture2D=pe,this.setTexture2DArray=ye,this.setTexture3D=Ee,this.setTextureCube=le,this.rebindTextures=St,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ce,this.dispose=z}function tg(s,e){function t(n,i=hn){let r;const a=je.getTransfer(i);if(n===sn)return s.UNSIGNED_BYTE;if(n===Eo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===To)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return s.BYTE;if(n===Rc)return s.SHORT;if(n===Cs)return s.UNSIGNED_SHORT;if(n===bo)return s.INT;if(n===An)return s.UNSIGNED_INT;if(n===Qt)return s.FLOAT;if(n===Ct)return s.HALF_FLOAT;if(n===Dc)return s.ALPHA;if(n===Lc)return s.RGB;if(n===vn)return s.RGBA;if(n===oi)return s.DEPTH_COMPONENT;if(n===Gn)return s.DEPTH_STENCIL;if(n===kr)return s.RED;if(n===wo)return s.RED_INTEGER;if(n===yi)return s.RG;if(n===Ao)return s.RG_INTEGER;if(n===Ro)return s.RGBA_INTEGER;if(n===br||n===Er||n===Tr||n===wr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fa||n===Oa||n===za||n===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ga||n===Ha||n===Va||n===Wa||n===Lr||n===Xa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ka||n===Ga)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ha)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lr)return r.COMPRESSED_RG11_EAC;if(n===Xa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qa||n===Ya||n===Za||n===$a||n===Ka||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ya)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===no)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===io)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===so)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===oo||n===lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===ho||n===Nr||n===uo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===co)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ig=`
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

}`;class sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new yt({vertexShader:ng,fragmentShader:ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends Ti{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",m=new sg,p={},x=t.getContextAttributes();let T=null,v=null;const w=[],b=[],_=new Oe;let S=null,R=null;const A=new cn;A.viewport=new bt;const D=new cn;D.viewport=new bt;const L=[A,D],U=new mf;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pe=w[q];return pe===void 0&&(pe=new na,w[q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=w[q];return pe===void 0&&(pe=new na,w[q]=pe),pe.getGripSpace()},this.getHand=function(q){let pe=w[q];return pe===void 0&&(pe=new na,w[q]=pe),pe.getHandSpace()};function B(q){const pe=b.indexOf(q.inputSource);if(pe===-1)return;const ye=w[pe];ye!==void 0&&(ye.update(q.inputSource,q.frame,c||a),ye.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",ee);for(let q=0;q<w.length;q++){const pe=b[q];pe!==null&&(b[q]=null,w[q].disconnect(pe))}P=null,z=null,m.reset();for(const q in p)delete p[q];if(e.setRenderTarget(T),f=null,u=null,d=null,i=null,v=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),R!==null){const q=R.camera;q.fov=R.fov,q.zoom=R.zoom,q.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",H),i.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ee=null,le=null;x.depth&&(le=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?Gn:oi,Ee=x.stencil?Si:An);const Ne={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ne),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Xt(u.textureWidth,u.textureHeight,{format:vn,type:sn,depthTexture:new Ei(u.textureWidth,u.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Xt(f.framebufferWidth,f.framebufferHeight,{format:vn,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(q){for(let pe=0;pe<q.removed.length;pe++){const ye=q.removed[pe],Ee=b.indexOf(ye);Ee>=0&&(b[Ee]=null,w[Ee].disconnect(ye))}for(let pe=0;pe<q.added.length;pe++){const ye=q.added[pe];let Ee=b.indexOf(ye);if(Ee===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=b.length){b.push(ye),Ee=Ne;break}else if(b[Ne]===null){b[Ne]=ye,Ee=Ne;break}if(Ee===-1)break}const le=w[Ee];le&&le.connect(ye)}}function V(q,pe){pe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let pe=q.near,ye=q.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),U.near=D.near=A.near=pe,U.far=D.far=A.far=ye,(P!==U.near||z!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,z=U.far),U.layers.mask=q.layers.mask|6,A.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;const Ee=q.parent,le=U.cameras;V(U,Ee);for(let Ne=0;Ne<le.length;Ne++)V(le[Ne],Ee);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&q.isPerspectiveCamera&&(R={camera:q,fov:q.fov,zoom:q.zoom}),$(q,U,Ee)};function $(q,pe,ye){ye===null?q.matrix.copy(pe.matrixWorld):(q.matrix.copy(ye.matrixWorld),q.matrix.invert(),q.matrix.multiply(pe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ls*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(q){return p[q]};let j=null;function de(q,pe){if(h=pe.getViewerPose(c||a),g=pe,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ee=!1;ye.length!==U.cameras.length&&(U.cameras.length=0,Ee=!0);for(let De=0;De<ye.length;De++){const Ze=ye[De];let et=null;if(f!==null)et=f.getViewport(Ze);else{const ie=d.getViewSubImage(u,Ze);et=ie.viewport,De===0&&(e.setRenderTargetTextures(v,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(v))}let He=L[De];He===void 0&&(He=new cn,He.layers.enable(De),He.viewport=new bt,L[De]=He),He.matrix.fromArray(Ze.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ze.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(et.x,et.y,et.width,et.height),De===0&&(U.matrix.copy(He.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ee===!0&&U.cameras.push(He)}const le=i.enabledFeatures;if(le&&le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const De=d.getDepthInformation(ye[0]);De&&De.isValid&&De.texture&&m.init(De,i.renderState)}if(le&&le.includes("camera-access")&&M){e.state.unbindTexture(),d=n.getBinding();for(let De=0;De<ye.length;De++){const Ze=ye[De].camera;if(Ze){let et=p[Ze];et||(et=new Zc,p[Ze]=et);const He=d.getCameraImage(Ze);et.sourceTexture=He}}}}for(let ye=0;ye<w.length;ye++){const Ee=b[ye],le=w[ye];Ee!==null&&le!==void 0&&le.update(Ee,pe,c||a)}j&&j(q,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Se=new eh;Se.setAnimationLoop(de),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}const ag=new nt,hh=new Ve;hh.set(-1,0,0,0,1,0,0,0,1);function og(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$c(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,T,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),T=x.envMap,v=x.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(v)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lg(s,e,t,n){let i={},r={};function a(x,T){const v=T.program;n.uniformBlockBinding(x,v,i[x.id])}function o(x,T){let v=i[x.id];v===void 0&&(g(x),v=l(x),i[x.id]=v,x.addEventListener("dispose",m));const w=T.program;n.updateUBOMapping(x,w);const b=e.render.frame;r[x.id]!==b&&(c(x),r[x.id]=b)}function l(x){const T=s.createBuffer(),v=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,v,w),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(x){const T=i[x.id],v=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let b=0,_=v.length;b<_;b++){const S=v[b];if(Array.isArray(S))for(let R=0,A=S.length;R<A;R++)h(S[R],b,R,w);else h(S,b,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,T,v,w){if(u(x,T,v,w)===!0){const b=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let R=0;R<_.length;R++){const A=_[R],D=M(A,!0);d(A,x.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,x.__data)}}function d(x,T,v){typeof x=="number"||typeof x=="boolean"?T[v]=x:x.isMatrix3?(T[v]=x.elements[0],T[v+1]=x.elements[1],T[v+2]=x.elements[2],T[v+3]=0,T[v+4]=x.elements[3],T[v+5]=x.elements[4],T[v+6]=x.elements[5],T[v+7]=0,T[v+8]=x.elements[6],T[v+9]=x.elements[7],T[v+10]=x.elements[8],T[v+11]=0):ArrayBuffer.isView(x)?T.set(x.subarray(0,T.length-v),v):x.toArray(T,v)}function u(x,T,v,w){const b=x.value,_=T+"_"+v;if(Array.isArray(b)){w[_]===void 0&&(w[_]=[]);const S=w[_];let R=!1;for(let A=0;A<b.length;A++)f(b[A],S,A)===!0&&(R=!0);return R}return f(b,w,_)}function f(x,T,v){if(T[v]===void 0)return typeof x=="number"||typeof x=="boolean"?T[v]=x:ArrayBuffer.isView(x)?T[v]=x.slice():T[v]=x.clone(),!0;{const w=T[v];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return T[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function g(x){const T=x.uniforms;let v=0;const w=16;for(let _=0,S=T.length;_<S;_++){const R=Array.isArray(T[_])?T[_]:[T[_]];for(let A=0,D=R.length;A<D;A++){const L=R[A],U=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(T[_])||Array.isArray(L.value);let z=v;for(let H=0,ee=U.length;H<ee;H++){const V=U[H],$=M(V,P),j=v%w,de=j%$.boundary,Se=j+de;v+=de,Se!==0&&w-Se<$.storage&&(v+=w-Se),H===0&&(z=v),v+=$.storage}const B=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new B((v-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}const b=v%w;return b>0&&(v+=w-b),x.__size=v,x.__cache={},this}function M(x,T){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",x),T===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(x){const T=x.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);i={},r={}}return{bind:a,update:o,dispose:p}}const cg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function hg(){return bn===null&&(bn=new bi(cg,16,16,yi,Ct),bn.name="DFG_LUT",bn.minFilter=Et,bn.magFilter=Et,bn.wrapS=fn,bn.wrapT=fn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class ug{constructor(e={}){const{canvas:t=iu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=sn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const M=f,m=new Set([Ro,Ao,wo]),p=new Set([sn,An,Cs,Si,Eo,To]),x=new Uint32Array(4),T=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let w=null,b=null;const _=[],S=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1,L=null,U=null,P=null,z=null;this._outputColorSpace=$t;let B=0,H=0,ee=null,V=-1,$=null;const j=new bt,de=new bt;let Se=null;const q=new Ge(0);let pe=0,ye=t.width,Ee=t.height,le=1,Ne=null,rt=null;const De=new bt(0,0,ye,Ee),Ze=new bt(0,0,ye,Ee);let et=!1;const He=new Ns,ie=new No;let _e=!1,be=!1;const ge=new nt,Ie=new F,Ke=new bt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function ft(){return ee===null?le:1}let O=n;function ot(E,I){return t.getContext(E,I)}let lt,it,ce,mt,Ce,ze,C,y,k,te,Q,se,oe,Y,K,re,N,J,Z,ue,ae,he,Le;try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${go}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",xe,!1),O===null){const I="webgl2";if(O=ot(I,E),O===null)throw ot(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(E){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),st("WebGLRenderer: "+E.message),E}function Xe(){lt=new pm(O),lt.init(),ae=new tg(O,lt),it=new im(O,lt,e,ae),ce=new j0(O,lt),it.reversedDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),U=O.createFramebuffer(),P=O.createFramebuffer(),z=O.createFramebuffer(),mt=new _m(O),Ce=new B0,ze=new eg(O,lt,ce,Ce,it,ae,mt),C=new dm(A),y=new vf(O),he=new tm(O,y),k=new mm(O,y,mt,he),te=new vm(O,k,y,he,mt),J=new xm(O,it,ze),K=new sm(Ce),Q=new z0(A,C,lt,it,he,K),se=new og(A,Ce),oe=new G0,Y=new Y0(lt),N=new em(A,C,ce,te,g,l),re=new Q0(A,te,it),Le=new lg(O,mt,it,ce),Z=new nm(O,lt,mt),ue=new gm(O,lt,mt),mt.programs=Q.programs,A.capabilities=it,A.extensions=lt,A.properties=Ce,A.renderLists=oe,A.shadowMap=re,A.state=ce,A.info=mt}M!==sn&&(R=new Sm(M,t.width,t.height,o,i,r));const ne=new rg(A,O);this.xr=ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(E){E!==void 0&&(le=E,this.setSize(ye,Ee,!1))},this.getSize=function(E){return E.set(ye,Ee)},this.setSize=function(E,I,X=!0){if(ne.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=E,Ee=I,t.width=Math.floor(E*le),t.height=Math.floor(I*le),X===!0&&(t.style.width=E+"px",t.style.height=I+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(ye*le,Ee*le).floor()},this.setDrawingBufferSize=function(E,I,X){ye=E,Ee=I,le=X,t.width=Math.floor(E*X),t.height=Math.floor(I*X),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(M===sn){st("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(De)},this.setViewport=function(E,I,X,G){E.isVector4?De.set(E.x,E.y,E.z,E.w):De.set(E,I,X,G),ce.viewport(j.copy(De).multiplyScalar(ft()).round())},this.getScissor=function(E){return E.copy(Ze)},this.setScissor=function(E,I,X,G){E.isVector4?Ze.set(E.x,E.y,E.z,E.w):Ze.set(E,I,X,G),ce.scissor(de.copy(Ze).multiplyScalar(ft()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(E){ce.setScissorTest(et=E)},this.setOpaqueSort=function(E){Ne=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,X=!0){let G=0;if(E){let W=!1;if(ee!==null){const me=ee.texture.format;W=m.has(me)}if(W){const me=ee.texture.type,we=p.has(me),fe=N.getClearColor(),Me=N.getClearAlpha(),Pe=fe.r,ke=fe.g,Je=fe.b;we?(x[0]=Pe,x[1]=ke,x[2]=Je,x[3]=Me,O.clearBufferuiv(O.COLOR,0,x)):(T[0]=Pe,T[1]=ke,T[2]=Je,T[3]=Me,O.clearBufferiv(O.COLOR,0,T))}else G|=O.COLOR_BUFFER_BIT}I&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),L=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),N.dispose(),oe.dispose(),Y.dispose(),ze.dispose(),Ce.dispose(),C.dispose(),te.dispose(),k.dispose(),he.dispose(),Le.dispose(),Q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Vo),ne.removeEventListener("sessionend",Wo),ci.stop()};function Ue(E){E.preventDefault(),sl("WebGLRenderer: Context Lost."),D=!0}function We(){sl("WebGLRenderer: Context Restored."),D=!1;const E=mt.autoReset,I=re.enabled,X=re.autoUpdate,G=re.needsUpdate,W=re.type;Xe(),mt.autoReset=E,re.enabled=I,re.autoUpdate=X,re.needsUpdate=G,re.type=W}function xe(E){st("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ht(E){const I=E.target;I.removeEventListener("dispose",ht),Nt(I)}function Nt(E){qn(E),Ce.remove(E)}function qn(E){const I=Ce.get(E).programs;I!==void 0&&(I.forEach(function(X){Q.releaseProgram(X)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,X,G,W,me){I===null&&(I=ut);const we=W.isMesh&&W.matrixWorld.determinantAffine()<0,fe=Eh(E,I,X,G,W);ce.setMaterial(G,we);let Me=X.index,Pe=1;if(G.wireframe===!0){if(Me=k.getWireframeAttribute(X),Me===void 0)return;Pe=2}const ke=X.drawRange,Je=X.attributes.position;let Ae=ke.start*Pe,Qe=(ke.start+ke.count)*Pe;me!==null&&(Ae=Math.max(Ae,me.start*Pe),Qe=Math.min(Qe,(me.start+me.count)*Pe)),Me!==null?(Ae=Math.max(Ae,0),Qe=Math.min(Qe,Me.count)):Je!=null&&(Ae=Math.max(Ae,0),Qe=Math.min(Qe,Je.count));const Tt=Qe-Ae;if(Tt<0||Tt===1/0)return;he.setup(W,G,fe,X,Me);let gt,dt=Z;if(Me!==null&&(gt=y.get(Me),dt=ue,dt.setIndex(gt)),W.isMesh)G.wireframe===!0?(ce.setLineWidth(G.wireframeLinewidth*ft()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(W.isLine){let Gt=G.linewidth;Gt===void 0&&(Gt=1),ce.setLineWidth(Gt*ft()),W.isLineSegments?dt.setMode(O.LINES):W.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else W.isPoints?dt.setMode(O.POINTS):W.isSprite&&dt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Gt=W._multiDrawStarts,Re=W._multiDrawCounts,qt=W._multiDrawCount,at=Me?y.get(Me).bytesPerElement:1,hi=Ce.get(G).currentProgram.getUniforms();for(let Ht=0;Ht<qt;Ht++)hi.setValue(O,"_gl_DrawID",Ht),dt.render(Gt[Ht]/at,Re[Ht])}else if(W.isInstancedMesh)dt.renderInstances(Ae,Tt,W.count);else if(X.isInstancedBufferGeometry){const Gt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Re=Math.min(X.instanceCount,Gt);dt.renderInstances(Ae,Tt,Re)}else dt.render(Ae,Tt)};function Ho(E,I,X,G){L!==null&&E.isNodeMaterial&&L.setObject(G,E),_e===!0&&K.setState(E,X,!1),E.transparent===!0&&E.side===Bt&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,is(E,I,G),E.side=Mi,E.needsUpdate=!0,is(E,I,G),E.side=Bt):is(E,I,G)}this.compile=function(E,I,X=null){X===null&&(X=E),L!==null&&L.renderStart(E,I,X),b=Y.get(X),b.init(I),S.push(b),X.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),E!==X&&E.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),be=this.localClippingEnabled,_e=K.init(this.clippingPlanes,be),_e===!0&&K.setGlobalState(this.clippingPlanes,I),L!==null&&re.render(b.state.shadowsArray,X,I);const G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const me=W.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const fe=me[we];Ho(fe,X,I,W),G.add(fe)}else Ho(me,X,I,W),G.add(me)}),b=S.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(E,I,X=null){const G=this.compile(E,I,X);return new Promise(W=>{function me(){if(G.forEach(function(we){const Me=Ce.get(we).currentProgram;(Me===void 0||Me.isReady())&&G.delete(we)}),G.size===0){W(E);return}setTimeout(me,10)}lt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let qr=null;function yh(E){qr&&qr(E)}function Vo(){ci.stop()}function Wo(){ci.start()}const ci=new eh;ci.setAnimationLoop(yh),typeof self<"u"&&ci.setContext(self),this.setAnimationLoop=function(E){qr=E,ne.setAnimationLoop(E),E===null?ci.stop():ci.start()},ne.addEventListener("sessionstart",Vo),ne.addEventListener("sessionend",Wo),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){st("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(E,I);const X=ne.enabled===!0&&ne.isPresenting===!0,G=R!==null&&(ee===null||X)&&R.begin(A,ee);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,I,ee),b=Y.get(E,S.length),b.init(I),b.state.textureUnits=ze.getTextureUnits(),S.push(b),ge.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?ie.setFromArrayCamera(I):He.setFromProjectionMatrix(ge,Mn,I.reversedDepth),be=this.localClippingEnabled,_e=K.init(this.clippingPlanes,be),w=oe.get(E,_.length),w.init(),_.push(w),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&Yr(we,I,-1/0,A.sortObjects)}Yr(E,I,0,A.sortObjects),w.finish(),L!==null&&L.updateLights(b.state.lightsArray),A.sortObjects===!0&&w.sort(Ne,rt),St=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,St&&N.addToRenderList(w,E),this.info.autoReset===!0&&this.info.reset(),_e===!0&&K.beginShadows();const W=b.state.shadowsArray;if(re.render(W,E,I),_e===!0&&K.endShadows(),(G&&R.hasRenderPass())===!1){const we=w.opaque,fe=w.transmissive;if(b.setupLights(),I.isArrayCamera){const Me=I.cameras;if(fe.length>0)for(let Pe=0,ke=Me.length;Pe<ke;Pe++){const Je=Me[Pe];qo(we,fe,E,Je)}St&&N.render(E);for(let Pe=0,ke=Me.length;Pe<ke;Pe++){const Je=Me[Pe];Xo(w,E,Je,Je.viewport)}}else fe.length>0&&qo(we,fe,E,I),St&&N.render(E),Xo(w,E,I)}ee!==null&&H===0&&(ze.updateMultisampleRenderTarget(ee),ze.updateRenderTargetMipmap(ee)),G&&R.end(A),E.isScene===!0&&E.onAfterRender(A,E,I),he.resetDefaultState(),V=-1,$=null,S.pop(),S.length>0?(b=S[S.length-1],ze.setTextureUnits(b.state.textureUnits),_e===!0&&K.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,L!==null&&L.renderEnd()};function Yr(E,I,X,G){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){const we=I.isArrayCamera?ie:He;if(!E.frustumCulled||E.intersectsFrustum(we)){G&&Ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const fe=te.update(E),Me=E.material;Me.visible&&w.push(E,fe,Me,X,Ke.z,null,I)}}else if(E.isMesh||E.isLine||E.isPoints){const we=I.isArrayCamera?ie:He;if(!E.frustumCulled||E.intersectsFrustum(we)){const fe=te.update(E),Me=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ke.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ke.copy(fe.boundingSphere.center)),Ke.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(Me)){const Pe=fe.groups;for(let ke=0,Je=Pe.length;ke<Je;ke++){const Ae=Pe[ke],Qe=Me[Ae.materialIndex];Qe&&Qe.visible&&w.push(E,fe,Qe,X,Ke.z,Ae,I)}}else Me.visible&&w.push(E,fe,Me,X,Ke.z,null,I)}}}const me=E.children;for(let we=0,fe=me.length;we<fe;we++)Yr(me[we],I,X,G)}function Xo(E,I,X,G){const{opaque:W,transmissive:me,transparent:we}=E;b.setupLightsView(X),_e===!0&&K.setGlobalState(A.clippingPlanes,X),G&&ce.viewport(j.copy(G)),W.length>0&&zs(W,I,X),me.length>0&&zs(me,I,X),we.length>0&&zs(we,I,X),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function qo(E,I,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Ae=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Xt(1,1,{generateMipmaps:!0,type:Ae?Ct:sn,minFilter:kn,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const me=b.state.transmissionRenderTarget[G.id],we=G.viewport||j;me.setSize(we.z*A.transmissionResolutionScale,we.w*A.transmissionResolutionScale);const fe=A.getRenderTarget(),Me=A.getActiveCubeFace(),Pe=A.getActiveMipmapLevel();A.setRenderTarget(me),A.getClearColor(q),pe=A.getClearAlpha(),pe<1&&A.setClearColor(16777215,.5),A.clear(),St&&N.render(X);const ke=A.toneMapping;A.toneMapping=Wn;const Je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),_e===!0&&K.setGlobalState(A.clippingPlanes,G),zs(E,X,G),ze.updateMultisampleRenderTarget(me),ze.updateRenderTargetMipmap(me),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let Qe=0,Tt=I.length;Qe<Tt;Qe++){const gt=I[Qe],{object:dt,geometry:Gt,material:Re,group:qt}=gt;if(Re.side===Bt&&dt.layers.test(G.layers)){const at=Re.side;Re.side=Kt,Re.needsUpdate=!0,Yo(dt,X,G,Gt,Re,qt),Re.side=at,Re.needsUpdate=!0,Ae=!0}}Ae===!0&&(ze.updateMultisampleRenderTarget(me),ze.updateRenderTargetMipmap(me))}A.setRenderTarget(fe,Me,Pe),A.setClearColor(q,pe),Je!==void 0&&(G.viewport=Je),A.toneMapping=ke}function zs(E,I,X){const G=I.isScene===!0?I.overrideMaterial:null;for(let W=0,me=E.length;W<me;W++){const we=E[W],{object:fe,geometry:Me,group:Pe}=we;let ke=we.material;ke.allowOverride===!0&&G!==null&&(ke=G),fe.layers.test(X.layers)&&Yo(fe,I,X,Me,ke,Pe)}}function Yo(E,I,X,G,W,me){L!==null&&W.isNodeMaterial&&L.setObject(E,W),E.onBeforeRender(A,I,X,G,W,me),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(A,I,X,G,E,me),W.transparent===!0&&W.side===Bt&&W.forceSinglePass===!1?(W.side=Kt,W.needsUpdate=!0,A.renderBufferDirect(X,I,G,W,E,me),W.side=Mi,W.needsUpdate=!0,A.renderBufferDirect(X,I,G,W,E,me),W.side=Bt):A.renderBufferDirect(X,I,G,W,E,me),E.onAfterRender(A,I,X,G,W,me)}function Zo(E){let I=0;for(const X of E)X.texture!==null&&I++;return I}function is(E,I,X){I.isScene!==!0&&(I=ut);const G=Ce.get(E),W=b.state.lights,me=b.state.shadowsArray,we=W.state.version,fe=Q.getParameters(E,W.state,me,I,X,b.state.lightProbeGridArray),Me=Q.getProgramCacheKey(fe);let Pe=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const ke=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=C.get(E.envMap||G.environment,ke),G.envMapRotation=G.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",ht),Pe=new Map,G.programs=Pe,G.programVariants=new Map);let Je=Pe.get(Me);if(Je!==void 0){if(G.currentProgram===Je&&G.lightsStateVersion===we)return Ko(E,fe),Je}else fe.uniforms=Q.getUniforms(E),L!==null&&E.isNodeMaterial&&L.build(E,X,fe),E.onBeforeCompile(fe,A),Je=Q.acquireProgram(fe,Me),Pe.set(Me,Je),G.uniforms=fe.uniforms;const Ae=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=K.uniform),Ko(E,fe),G.needsLights=wh(E),G.lightsStateVersion=we,G.needsLights&&(Ae.ambientLightColor.value=W.state.ambient,Ae.lightProbe.value=W.state.probe,Ae.sunLights.value=W.state.sun,Ae.sunLightShadows.value=W.state.sunShadow,Ae.directionalLights.value=W.state.directional,Ae.directionalLightShadows.value=W.state.directionalShadow,Ae.spotLights.value=W.state.spot,Ae.spotLightShadows.value=W.state.spotShadow,Ae.rectAreaLights.value=W.state.rectArea,Ae.ltc_1.value=W.state.rectAreaLTC1,Ae.ltc_2.value=W.state.rectAreaLTC2,Ae.pointLights.value=W.state.point,Ae.pointLightShadows.value=W.state.pointShadow,Ae.hemisphereLights.value=W.state.hemi,Ae.sunShadowMatrix.value=W.state.sunShadowMatrix,Ae.sunShadowCascade.value=W.state.sunShadowCascade,Ae.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ae.spotLightMatrix.value=W.state.spotLightMatrix,Ae.spotLightMap.value=W.state.spotLightMap,Ae.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Zo(b.state.lightProbeGridArray),G.currentProgram=Je,G.uniformsList=null,Je}function bh(E,I,X,G,W){const me=Ce.get(E),we=me.currentProgram.id+","+G+","+W;let fe=me.programVariants.get(we);return fe===void 0?(fe=is(E,I,X),me.programVariants.set(we,fe)):(me.currentProgram=fe,me.uniformsList=null,me.outputColorSpace=G,me.toneMapping=W),fe}function $o(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Rr.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Ko(E,I){const X=Ce.get(E);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function Eh(E,I,X,G,W){I.isScene!==!0&&(I=ut),ze.resetTextureUnits();const me=I.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,fe=ee===null?A.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:je.workingColorSpace,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Pe=C.get(G.envMap||we,Me),ke=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Je=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ae=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,Tt=!!X.morphAttributes.color;let gt=Wn;G.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(gt=A.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Gt=dt!==void 0?dt.length:0,Re=Ce.get(G),qt=b.state.lights;if(_e===!0&&(be===!0||E!==$)){const Mt=E===$&&G.id===V;K.setState(G,E,Mt)}let at=!1,hi=!1;G.version===Re.__version?Re.needsLights&&Re.lightsStateVersion!==qt.state.version||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==Pe||G.fog===!0&&Re.fog!==me||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==K.numPlanes||Re.numIntersection!==K.numIntersection)||Re.vertexAlphas!==ke||Re.vertexTangents!==Je||Re.morphTargets!==Ae||Re.morphNormals!==Qe||Re.morphColors!==Tt||Re.morphTargetsCount!==Gt||Re.numLightProbeGrids!==Zo(b.state.lightProbeGridArray)?at=!0:(Re.outputColorSpace!==fe||Re.toneMapping!==gt)&&(hi=!0):(at=!0,Re.__version=G.version);let Ht=Re.currentProgram;(at===!0||hi===!0)&&(Ht=hi===!0?bh(G,I,W,fe,gt):is(G,I,W),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Ht,Re));let Bs=!1,Yn=!1,ui=!1;const tt=Ht.getUniforms(),Ot=Re.uniforms;if(ce.useProgram(Ht.program)&&(Bs=!0,Yn=!0,ui=!0),G.id!==V&&(V=G.id,Yn=!0),Bs||$!==E){ce.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),tt.setValue(O,"projectionMatrix",E.projectionMatrix),tt.setValue(O,"viewMatrix",E.matrixWorldInverse);const It=tt.map.cameraPosition;It!==void 0&&It.setValue(O,Ie.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&tt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&tt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),$!==E&&($=E,Yn=!0,ui=!0)}if(Re.needsLights&&(qt.state.sunShadowMap.length>0&&tt.setValue(O,"sunShadowMap",qt.state.sunShadowMap,ze),qt.state.directionalShadowMap.length>0&&tt.setValue(O,"directionalShadowMap",qt.state.directionalShadowMap,ze),qt.state.spotShadowMap.length>0&&tt.setValue(O,"spotShadowMap",qt.state.spotShadowMap,ze),qt.state.pointShadowMap.length>0&&tt.setValue(O,"pointShadowMap",qt.state.pointShadowMap,ze)),W.isSkinnedMesh){tt.setOptional(O,W,"bindMatrix"),tt.setOptional(O,W,"bindMatrixInverse");const Mt=W.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),tt.setValue(O,"boneTexture",Mt.boneTexture,ze))}W.isBatchedMesh&&(tt.setOptional(O,W,"batchingTexture"),tt.setValue(O,"batchingTexture",W._matricesTexture,ze),tt.setOptional(O,W,"batchingIdTexture"),tt.setValue(O,"batchingIdTexture",W._indirectTexture,ze),tt.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&tt.setValue(O,"batchingColorTexture",W._colorsTexture,ze));const dn=X.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&J.update(W,X,Ht),(Yn||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,tt.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Ot.envMapIntensity.value=I.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=hg()),Yn){if(tt.setValue(O,"toneMappingExposure",A.toneMappingExposure),Re.needsLights&&Th(Ot,ui),me&&G.fog===!0&&se.refreshFogUniforms(Ot,me),se.refreshMaterialUniforms(Ot,G,le,Ee,b.state.transmissionRenderTarget[E.id]),Re.needsLights&&Re.numLightProbeGrids>0){const Mt=v;let It=0;for(const Pn of b.state.lightProbeGridArray)Pn.texture!==null&&(Mt.textures[It]=Pn.texture,Mt.min[It]=Pn.boundingBox.min,Mt.max[It]=Pn.boundingBox.max,Mt.resolution[It]=Pn.resolution,It++);for(const Pn in Mt)Mt[Pn].length=It;Ot.probesSH.value=Mt.textures,Ot.probesMin.value=Mt.min,Ot.probesMax.value=Mt.max,Ot.probesResolution.value=Mt.resolution}Rr.upload(O,$o(Re),Ot,ze)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Rr.upload(O,$o(Re),Ot,ze),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&tt.setValue(O,"center",W.center),tt.setValue(O,"modelViewMatrix",W.modelViewMatrix),tt.setValue(O,"normalMatrix",W.normalMatrix),tt.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const Mt=G.uniformsGroups;for(let It=0,Pn=Mt.length;It<Pn;It++){const Qo=Mt[It];Le.update(Qo,Ht),Le.bind(Qo,Ht)}}return Ht}function Th(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.sunLights.needsUpdate=I,E.sunLightShadows.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function wh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(E,I,X){const G=Ce.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ce.get(E.texture).__webglTexture=I,Ce.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const X=Ce.get(E);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,X=0){ee=E,B=I,H=X;let G=null,W=!1,me=!1;if(E){const fe=Ce.get(E);if(fe.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(O.FRAMEBUFFER,fe.__webglFramebuffer),j.copy(E.viewport),de.copy(E.scissor),Se=E.scissorTest,ce.viewport(j),ce.scissor(de),ce.setScissorTest(Se),V=-1;return}else if(fe.__webglFramebuffer===void 0)ze.setupRenderTarget(E);else if(fe.__hasExternalTextures)ze.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ke=E.depthTexture;if(fe.__boundDepthTexture!==ke){if(ke!==null&&Ce.has(ke)&&(E.width!==ke.image.width||E.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(me=!0);const Pe=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?G=Pe[I][X]:G=Pe[I],W=!0):E.samples>0&&ze.useMultisampledRTT(E)===!1?G=Ce.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?G=Pe[X]:G=Pe,j.copy(E.viewport),de.copy(E.scissor),Se=E.scissorTest}else j.copy(De).multiplyScalar(le).floor(),de.copy(Ze).multiplyScalar(le).floor(),Se=et;if(X!==0&&(G=U),ce.bindFramebuffer(O.FRAMEBUFFER,G)&&ce.drawBuffers(E,G),ce.viewport(j),ce.scissor(de),ce.setScissorTest(Se),W){const fe=Ce.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,fe.__webglTexture,X)}else if(me){const fe=I;for(let Me=0;Me<E.textures.length;Me++){const Pe=Ce.get(E.textures[Me]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Me,Pe.__webglTexture,X,fe)}}else if(E!==null&&X!==0){const fe=Ce.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,fe.__webglTexture,X)}V=-1};function Jo(E){const I=Ce.get(E);return(I.__readFormat!==E.format||I.__readType!==E.type)&&(I.__readFormat=E.format,I.__readType=E.type,I.__formatReadable=it.textureFormatReadable(E.format),I.__typeReadable=it.textureTypeReadable(E.type)),I}this.readRenderTargetPixels=function(E,I,X,G,W,me,we,fe=0){if(!(E&&E.isWebGLRenderTarget)){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Me=Me[we],Array.isArray(Me)&&(Me=Me[0])),Me){ce.bindFramebuffer(O.FRAMEBUFFER,Me);try{const Pe=E.textures[fe],ke=Pe.format,Je=Pe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);const Ae=Jo(Pe);if(Ae.__formatReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){st("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-G&&X>=0&&X<=E.height-W&&O.readPixels(I,X,G,W,ae.convert(ke),ae.convert(Je),me)}finally{const Pe=ee!==null?Ce.get(ee).__webglFramebuffer:null;ce.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,I,X,G,W,me,we,fe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Me=Me[we],Array.isArray(Me)&&(Me=Me[0])),Me)if(I>=0&&I<=E.width-G&&X>=0&&X<=E.height-W){ce.bindFramebuffer(O.FRAMEBUFFER,Me);const Pe=E.textures[fe],ke=Pe.format,Je=Pe.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+fe);const Ae=Jo(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Qe),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(I,X,G,W,ae.convert(ke),ae.convert(Je),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Tt=ee!==null?Ce.get(ee).__webglFramebuffer:null;ce.bindFramebuffer(O.FRAMEBUFFER,Tt);const gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await su(O,gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Qe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(Qe),O.deleteSync(gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,X=0){const G=Math.pow(2,-X),W=Math.floor(E.image.width*G),me=Math.floor(E.image.height*G),we=I!==null?I.x:0,fe=I!==null?I.y:0;ze.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,we,fe,W,me),ce.unbindTexture()},this.copyTextureToTexture=function(E,I,X=null,G=null,W=0,me=0){let we,fe,Me,Pe,ke,Je,Ae,Qe,Tt;const gt=E.isCompressedTexture?E.mipmaps[me]:E.image;if(X!==null)we=X.max.x-X.min.x,fe=X.max.y-X.min.y,Me=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,ke=X.min.y,Je=X.isBox3?X.min.z:0;else{const tt=Math.pow(2,-W);we=Math.floor(gt.width*tt),fe=Math.floor(gt.height*tt),E.isDataArrayTexture?Me=gt.depth:E.isData3DTexture?Me=Math.floor(gt.depth*tt):Me=1,Pe=0,ke=0,Je=0}G!==null?(Ae=G.x,Qe=G.y,Tt=G.z):(Ae=0,Qe=0,Tt=0);const dt=ae.convert(I.format),Gt=ae.convert(I.type);let Re;I.isData3DTexture?(ze.setTexture3D(I,0),Re=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(ze.setTexture2DArray(I,0),Re=O.TEXTURE_2D_ARRAY):(ze.setTexture2D(I,0),Re=O.TEXTURE_2D),ce.activeTexture(O.TEXTURE0),ce.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),ce.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ce.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const qt=ce.getParameter(O.UNPACK_ROW_LENGTH),at=ce.getParameter(O.UNPACK_IMAGE_HEIGHT),hi=ce.getParameter(O.UNPACK_SKIP_PIXELS),Ht=ce.getParameter(O.UNPACK_SKIP_ROWS),Bs=ce.getParameter(O.UNPACK_SKIP_IMAGES);ce.pixelStorei(O.UNPACK_ROW_LENGTH,gt.width),ce.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt.height),ce.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),ce.pixelStorei(O.UNPACK_SKIP_ROWS,ke),ce.pixelStorei(O.UNPACK_SKIP_IMAGES,Je);const Yn=E.isDataArrayTexture||E.isData3DTexture,ui=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const tt=Ce.get(E),Ot=Ce.get(I),dn=Ce.get(tt.__renderTarget),Mt=Ce.get(Ot.__renderTarget);ce.bindFramebuffer(O.READ_FRAMEBUFFER,dn.__webglFramebuffer),ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let It=0;It<Me;It++)Yn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(E).__webglTexture,W,Je+It),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.get(I).__webglTexture,me,Tt+It)),O.blitFramebuffer(Pe,ke,Pe+we,ke+fe,Ae,Qe,Ae+we,Qe+fe,O.DEPTH_BUFFER_BIT,O.NEAREST);ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||Ce.has(E)){const tt=Ce.get(E),Ot=Ce.get(I);ce.bindFramebuffer(O.READ_FRAMEBUFFER,P),ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let dn=0;dn<Me;dn++)Yn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tt.__webglTexture,W,Je+dn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tt.__webglTexture,W),ui?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ot.__webglTexture,me,Tt+dn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ot.__webglTexture,me),W!==0?O.blitFramebuffer(Pe,ke,Pe+we,ke+fe,Ae,Qe,Ae+we,Qe+fe,O.COLOR_BUFFER_BIT,O.NEAREST):ui?O.copyTexSubImage3D(Re,me,Ae,Qe,Tt+dn,Pe,ke,we,fe):O.copyTexSubImage2D(Re,me,Ae,Qe,Pe,ke,we,fe);ce.bindFramebuffer(O.READ_FRAMEBUFFER,null),ce.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ui?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Re,me,Ae,Qe,Tt,we,fe,Me,dt,Gt,gt.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(Re,me,Ae,Qe,Tt,we,fe,Me,dt,gt.data):O.texSubImage3D(Re,me,Ae,Qe,Tt,we,fe,Me,dt,Gt,gt):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,Ae,Qe,we,fe,dt,Gt,gt.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,Ae,Qe,gt.width,gt.height,dt,gt.data):O.texSubImage2D(O.TEXTURE_2D,me,Ae,Qe,we,fe,dt,Gt,gt);ce.pixelStorei(O.UNPACK_ROW_LENGTH,qt),ce.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),ce.pixelStorei(O.UNPACK_SKIP_PIXELS,hi),ce.pixelStorei(O.UNPACK_SKIP_ROWS,Ht),ce.pixelStorei(O.UNPACK_SKIP_IMAGES,Bs),me===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&O.generateMipmap(Re),ce.unbindTexture()},this.initRenderTarget=function(E){Ce.get(E).__webglFramebuffer===void 0&&ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ze.setTextureCube(E,0):E.isData3DTexture?ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ze.setTexture2DArray(E,0):ze.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){B=0,H=0,ee=null,ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const vi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ri{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fg=new Oo(-1,1,1,-1,0,1);class dg extends Lt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}}const pg=new dg;class Wr{constructor(e){this._mesh=new xt(pg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class uh extends Ri{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class tc extends Ri{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class mg extends Ri{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ct}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new uh(vi),this.copyPass.material.blending=nn,this.timer=new gf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}tc!==void 0&&(a instanceof tc?n=!0:a instanceof mg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const dr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class _g extends Ri{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vn.clone(dr.uniforms),this.material=new Kc({name:dr.name,uniforms:this.uniforms,vertexShader:dr.vertexShader,fragmentShader:dr.fragmentShader}),this._fsQuad=new Wr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_o?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Br?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===So?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Mo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xg extends Ri{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ge}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class vg{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,d=(l+c)*h,u=l-d,f=c-d,g=e-u,M=t-f;let m,p;g>M?(m=1,p=0):(m=0,p=1);const x=g-m+h,T=M-p+h,v=g-1+2*h,w=M-1+2*h,b=l&255,_=c&255,S=this.perm[b+this.perm[_]]%12,R=this.perm[b+m+this.perm[_+p]]%12,A=this.perm[b+1+this.perm[_+1]]%12;let D=.5-g*g-M*M;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[S],g,M));let L=.5-x*x-T*T;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[R],x,T));let U=.5-v*v-w*w;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[A],v,w)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),d=Math.floor(t+c),u=Math.floor(n+c),f=1/6,g=(h+d+u)*f,M=h-g,m=d-g,p=u-g,x=e-M,T=t-m,v=n-p;let w,b,_,S,R,A;x>=T?T>=v?(w=1,b=0,_=0,S=1,R=1,A=0):x>=v?(w=1,b=0,_=0,S=1,R=0,A=1):(w=0,b=0,_=1,S=1,R=0,A=1):T<v?(w=0,b=0,_=1,S=0,R=1,A=1):x<v?(w=0,b=1,_=0,S=0,R=1,A=1):(w=0,b=1,_=0,S=1,R=1,A=0);const D=x-w+f,L=T-b+f,U=v-_+f,P=x-S+2*f,z=T-R+2*f,B=v-A+2*f,H=x-1+3*f,ee=T-1+3*f,V=v-1+3*f,$=h&255,j=d&255,de=u&255,Se=this.perm[$+this.perm[j+this.perm[de]]]%12,q=this.perm[$+w+this.perm[j+b+this.perm[de+_]]]%12,pe=this.perm[$+S+this.perm[j+R+this.perm[de+A]]]%12,ye=this.perm[$+1+this.perm[j+1+this.perm[de+1]]]%12;let Ee=.6-x*x-T*T-v*v;Ee<0?i=0:(Ee*=Ee,i=Ee*Ee*this._dot3(this.grad3[Se],x,T,v));let le=.6-D*D-L*L-U*U;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[q],D,L,U));let Ne=.6-P*P-z*z-B*B;Ne<0?a=0:(Ne*=Ne,a=Ne*Ne*this._dot3(this.grad3[pe],P,z,B));let rt=.6-H*H-ee*ee-V*V;return rt<0?o=0:(rt*=rt,o=rt*rt*this._dot3(this.grad3[ye],H,ee,V)),32*(i+r+a+o)}noise4d(e,t,n,i){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,d,u,f,g;const M=(e+t+n+i)*l,m=Math.floor(e+M),p=Math.floor(t+M),x=Math.floor(n+M),T=Math.floor(i+M),v=(m+p+x+T)*c,w=m-v,b=p-v,_=x-v,S=T-v,R=e-w,A=t-b,D=n-_,L=i-S,U=R>A?32:0,P=R>D?16:0,z=A>D?8:0,B=R>L?4:0,H=A>L?2:0,ee=D>L?1:0,V=U+P+z+B+H+ee,$=a[V][0]>=3?1:0,j=a[V][1]>=3?1:0,de=a[V][2]>=3?1:0,Se=a[V][3]>=3?1:0,q=a[V][0]>=2?1:0,pe=a[V][1]>=2?1:0,ye=a[V][2]>=2?1:0,Ee=a[V][3]>=2?1:0,le=a[V][0]>=1?1:0,Ne=a[V][1]>=1?1:0,rt=a[V][2]>=1?1:0,De=a[V][3]>=1?1:0,Ze=R-$+c,et=A-j+c,He=D-de+c,ie=L-Se+c,_e=R-q+2*c,be=A-pe+2*c,ge=D-ye+2*c,Ie=L-Ee+2*c,Ke=R-le+3*c,ut=A-Ne+3*c,St=D-rt+3*c,ft=L-De+3*c,O=R-1+4*c,ot=A-1+4*c,lt=D-1+4*c,it=L-1+4*c,ce=m&255,mt=p&255,Ce=x&255,ze=T&255,C=o[ce+o[mt+o[Ce+o[ze]]]]%32,y=o[ce+$+o[mt+j+o[Ce+de+o[ze+Se]]]]%32,k=o[ce+q+o[mt+pe+o[Ce+ye+o[ze+Ee]]]]%32,te=o[ce+le+o[mt+Ne+o[Ce+rt+o[ze+De]]]]%32,Q=o[ce+1+o[mt+1+o[Ce+1+o[ze+1]]]]%32;let se=.6-R*R-A*A-D*D-L*L;se<0?h=0:(se*=se,h=se*se*this._dot4(r[C],R,A,D,L));let oe=.6-Ze*Ze-et*et-He*He-ie*ie;oe<0?d=0:(oe*=oe,d=oe*oe*this._dot4(r[y],Ze,et,He,ie));let Y=.6-_e*_e-be*be-ge*ge-Ie*Ie;Y<0?u=0:(Y*=Y,u=Y*Y*this._dot4(r[k],_e,be,ge,Ie));let K=.6-Ke*Ke-ut*ut-St*St-ft*ft;K<0?f=0:(K*=K,f=K*K*this._dot4(r[te],Ke,ut,St,ft));let re=.6-O*O-ot*ot-lt*lt-it*it;return re<0?g=0:(re*=re,g=re*re*this._dot4(r[Q],O,ot,lt,it)),27*(h+d+u+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}}const pr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new Oe},cameraProjectionMatrix:{value:new nt},cameraInverseProjectionMatrix:{value:new nt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},mr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},gr={uniforms:{tDiffuse:{value:null},resolution:{value:new Oe}},vertexShader:`varying vec2 vUv;

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

		}`};class ii extends Ri{constructor(e,t,n=512,i=512,r=32){super(),this.width=n,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const a=new Ei;a.format=Gn,a.type=Si,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:Rt,magFilter:Rt,type:Ct,depthTexture:a}),this.ssaoRenderTarget=new Xt(this.width,this.height,{type:Ct,depthBuffer:!1}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new yt({defines:Object.assign({},pr.defines),uniforms:Vn.clone(pr.uniforms),vertexShader:pr.vertexShader,fragmentShader:pr.fragmentShader,blending:nn}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new ef,this.normalMaterial.blending=nn,this.blurMaterial=new yt({defines:Object.assign({},gr.defines),uniforms:Vn.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new yt({defines:Object.assign({},mr.defines),uniforms:Vn.clone(mr.uniforms),vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:Vn.clone(vi.uniforms),vertexShader:vi.vertexShader,fragmentShader:vi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ec,blendDst:Aa,blendEquation:ni,blendSrcAlpha:bc,blendDstAlpha:Aa,blendEquationAlpha:ni}),this._fsQuad=new Wr(null),this._originalClearColor=new Ge}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,n){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case ii.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=nn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ii.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=nn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ii.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ii.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ii.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Mc,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const i=new F;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=n/e;r=Su.lerp(.1,1,r*r),i.multiplyScalar(r),t.push(i)}}_generateRandomKernelRotations(){const n=new vg,i=16,r=new Float32Array(i);for(let a=0;a<i;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=n.noise3d(o,l,c)}this.noiseTexture=new bi(r,4,4,kr,Qt),this.noiseTexture.wrapS=Sn,this.noiseTexture.wrapT=Sn,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}ii.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Mg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Qi extends Ri{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new Ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,a,{type:Ct,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Xt(r,a,{type:Ct,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Xt(r,a,{type:Ct,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=Mg;this.highPassUniforms=Vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vn.clone(vi.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:vi.vertexShader,fragmentShader:vi.fragmentShader,premultipliedAlpha:!0,blending:ws,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ge,this._oldClearAlpha=1,this._basic=new Ki,this._fsQuad=new Wr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new yt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Qi.BlurDirectionX=new Oe(1,0);Qi.BlurDirectionY=new Oe(0,1);const _t=Math.PI/180;function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function Jt(s,e,t){return s+(e-s)*t}function fh(s,e,t,n){return Jt(s,e,1-Math.exp(-t*n))}function Cr(s,e,t){const n=Fe((t-s)/(e-s),0,1);return n*n*(3-2*n)}function dh(s,e){let t=(e-s)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Bn(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function xi(s){return[Math.sin(s),Math.cos(s)]}function ph(s,e,t){const n=Math.cos(t),i=Math.sin(t);return[s*n+e*i,-s*i+e*n]}function zr(s,e,t){const n=Math.cos(t),i=Math.sin(t);return[s*n-e*i,s*i+e*n]}const Te={size:420,half:210,segments:180,water:0,borderStart:190,baseZ:176,baseR:16,spawnZ:150},Pr=[{id:0,label:"Performance",dpr:1,shadow:1024,range:56,trees:150,grass:650,reeds:200,rocks:70,treeShadow:!1,particles:220},{id:1,label:"Balanced",dpr:1.15,shadow:1536,range:70,trees:280,grass:5600,reeds:320,rocks:120,treeShadow:!1,particles:320},{id:2,label:"High",dpr:1.35,shadow:2048,range:80,trees:380,grass:8200,reeds:480,rocks:150,treeShadow:!1,particles:520}];function Sg(){const s=new URLSearchParams(location.search).get("quality");if(s==="0"||s==="1"||s==="2")return Number(s);const e=navigator.hardwareConcurrency||4;return navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches?e<=4?0:2:e>=8?2:e<=4?0:1}const Dr={halberd:{id:"halberd",name:"Halberd",role:"Medium",blurb:"A modern gun tank. Long barrel, wedge turret, and enough pace to take a hill without waiting on the engine.",hp:1620,mass:42,accel:12,lowGear:1.22,maxSpeed:13.4,reverse:6.2,drag:.17,rollResist:1.35,brake:15,turn:1.08,neutralTurn:.66,yawAccel:6.8,turretTurn:1.25,gunSlew:.95,dep:8*_t,elev:20*_t,reload:6.9,damage:330,pen:198,shellSpeed:390,caliber:105,baseDisp:.32,moveDisp:.58,hullDisp:.32,turretDisp:.22,fireDisp:.85,aimRate:2.6,view:250,ricochet:70*_t,normalization:5*_t,armorHull:[130,70,45,24],armorTurret:[160,90,50,28],length:7.05,width:3.25,height:.86,turretLen:2.65,turretWid:2.15,turretH:.58,turretZ:-.15,gunLen:4.9,gunR:.075,wheels:6,susp:64,suspDamp:10,rangeNear:40,rangeFar:160},lynx:{id:"lynx",name:"Lynx",role:"Light",blurb:"A fast scout with a quick gun and paper-thin plate. Keep moving, spot the valley, and take the long way around.",hp:980,mass:22,accel:14,lowGear:1,maxSpeed:16.8,reverse:7.4,drag:.16,rollResist:1.35,brake:16,turn:1.28,neutralTurn:.78,yawAccel:7.5,turretTurn:1.55,gunSlew:1.15,dep:10*_t,elev:22*_t,reload:4.05,damage:185,pen:148,shellSpeed:440,caliber:75,baseDisp:.3,moveDisp:.42,hullDisp:.28,turretDisp:.2,fireDisp:.7,aimRate:3.6,view:285,ricochet:70*_t,normalization:4*_t,armorHull:[46,28,18,12],armorTurret:[44,26,16,10],length:5.15,width:2.15,height:.78,turretLen:1.45,turretWid:1.15,turretH:.38,turretZ:.05,gunLen:3.35,gunR:.045,wheels:4,susp:78,suspDamp:11,rangeNear:80,rangeFar:180},vanguard:{id:"vanguard",name:"Vanguard",role:"Medium",blurb:"The company workhorse. Enough glacis to angle on a ridge, enough pace to leave a bad piece of ground.",hp:1480,mass:36,accel:11,lowGear:1.2,maxSpeed:12.2,reverse:5.1,drag:.2,rollResist:1.7,brake:12,turn:.82,neutralTurn:.46,yawAccel:5.6,turretTurn:1.1,gunSlew:.85,dep:8*_t,elev:20*_t,reload:6.3,damage:290,pen:176,shellSpeed:350,caliber:90,baseDisp:.35,moveDisp:.72,hullDisp:.38,turretDisp:.28,fireDisp:.95,aimRate:2.25,view:245,ricochet:70*_t,normalization:5*_t,armorHull:[96,62,42,20],armorTurret:[118,74,46,22],length:6.35,width:2.85,height:.95,turretLen:2.15,turretWid:1.7,turretH:.52,turretZ:.12,gunLen:4.15,gunR:.065,wheels:5,susp:52,suspDamp:9,rangeNear:45,rangeFar:150},bulwark:{id:"bulwark",name:"Bulwark",role:"Heavy",blurb:"A rolling bunker. Point the front at the enemy, creep the ridge, and make them waste shells on your glacis.",hp:2100,mass:54,accel:7.2,lowGear:1.45,maxSpeed:8.4,reverse:3.3,drag:.24,rollResist:2.05,brake:9,turn:.5,neutralTurn:.28,yawAccel:3.4,turretTurn:.72,gunSlew:.55,dep:6*_t,elev:18*_t,reload:9.6,damage:430,pen:218,shellSpeed:285,caliber:122,baseDisp:.42,moveDisp:1.05,hullDisp:.48,turretDisp:.34,fireDisp:1.15,aimRate:1.45,view:215,ricochet:70*_t,normalization:5*_t,armorHull:[188,96,62,28],armorTurret:[214,118,72,30],length:7.15,width:3.35,height:1.12,turretLen:2.55,turretWid:2.15,turretH:.7,turretZ:.18,gunLen:4.6,gunR:.09,wheels:6,susp:34,suspDamp:7.5,rangeNear:30,rangeFar:120}},yg=["halberd","lynx","vanguard","bulwark"],nc=["Warden","Ash","Bramble","Cob","Drift","Ember","Flint"],bg=["Barrow","Dunn","Holt","Keel","Marsh","Pike","Quinn"],Eg=["lynx","vanguard","vanguard","bulwark","lynx","bulwark"],Tg=["lynx","vanguard","bulwark","vanguard","vanguard","bulwark","lynx"];function Cn(s){return Math.sin(s*.0115)*9+Math.sin(s*.0042+.6)*5}function wg(s){return 10.5+Math.exp(-((s+155)**2)/2592)*18}const ri=[-88,76];function Ag(s){let t=-2.45-Math.exp(-((s+155)**2)/1800)*1.6;for(const n of ri){const i=Math.exp(-((s-n)**2)/450);t=t*(1-i)+-.18*i}return t}function Yi(){return{x:0,z:Cn(0),halfX:5.2,halfZ:15.5,deckY:1.08}}function mh(){const s=Yi(),e=Cn(ri[0]),t=Cn(ri[1]),n=-150,i=Te.spawnZ;return[[{x:-6,z:n},{x:-36,z:-108},{x:-72,z:-58},{x:ri[0],z:e},{x:-104,z:36},{x:-64,z:96},{x:-8,z:i}],[{x:0,z:n},{x:-6,z:-96},{x:0,z:s.z-34},{x:0,z:s.z},{x:0,z:s.z+34},{x:6,z:100},{x:0,z:i}],[{x:6,z:n},{x:28,z:-78},{x:58,z:t-26},{x:ri[1],z:t},{x:108,z:48},{x:64,z:108},{x:8,z:i}]]}function Rg(){const s=Yi(),e=Cn(ri[0]),t=Cn(ri[1]);return[{x:-14,z:-52,lane:1},{x:8,z:s.z-30,lane:1},{x:-8,z:s.z+28,lane:1},{x:12,z:78,lane:1},{x:-70,z:-36,lane:0},{x:-96,z:e+18,lane:0},{x:-78,z:58,lane:0},{x:86,z:t-18,lane:2},{x:78,z:t+16,lane:2},{x:118,z:34,lane:2},{x:104,z:62,lane:2},{x:70,z:118,lane:2},{x:46,z:-58,lane:2},{x:-40,z:118,lane:0}]}const si={x:116,z:52,r:26};function ic(s){const e=s===0?-1:1,t=s===0?0:Math.PI,n=[-18,-9,0,9,18,-13,13],i=[0,-7,-1,-7,0,7,7];return n.map((r,a)=>({x:r,z:e*Te.spawnZ+e*i[a],yaw:t}))}function gh(s,e=1){const t=Math.max(0,s.angle-s.normalization);if(!(s.caliber>s.thickness*2.5)&&t>s.ricochet)return"ricochet";const i=s.thickness/Math.max(.2,Math.cos(t));return s.pen*e>=i?"pen":"bounce"}function Cg(){return[{name:"heavy front vs light gun",expect:"bounce",q:{thickness:188,angle:0,pen:148,caliber:75,ricochet:70*_t,normalization:5*_t}},{name:"heavy side vs heavy gun",expect:"pen",q:{thickness:96,angle:0,pen:218,caliber:122,ricochet:70*_t,normalization:5*_t}},{name:"grazing side plate",expect:"ricochet",q:{thickness:96,angle:80*_t,pen:218,caliber:90,ricochet:70*_t,normalization:5*_t}},{name:"overmatch thin roof",expect:"pen",q:{thickness:12,angle:75*_t,pen:148,caliber:75,ricochet:70*_t,normalization:5*_t}}].map(e=>{const t=gh(e.q,1);return{name:e.name,got:t,expect:e.expect,ok:t===e.expect}})}const _r=new F,xr=new F,us=new F,gi=new F,fs=new F;function _h(s,e,t){if(s<.8)return Math.atan2(e,Math.max(.2,s));const n=9.8,i=t*t,r=i*i-n*(n*s*s+2*e*i);return r<=0?Math.atan2(e,s):Math.atan((i-Math.sqrt(r))/(n*s))}function xh(s,e,t,n,i,r,a,o,l,c,h,d){const u=[s,e,t],f=[n-s,i-e,r-t],g=[a,o,l],M=[c,h,d];let m=0,p=1,x=0,T=0,v=0;for(let b=0;b<3;b++){if(Math.abs(f[b])<1e-8){if(u[b]<g[b]||u[b]>M[b])return null;continue}let _=(g[b]-u[b])/f[b],S=(M[b]-u[b])/f[b],R=-1;if(_>S){const A=_;_=S,S=A,R=1}if(_>m&&(m=_,x=b===0?R:0,T=b===1?R:0,v=b===2?R:0),p=Math.min(p,S),m>p)return null}return p<0||m>1?null:{t:m>=0?m:0,nx:x,ny:T,nz:v}}class Pg{events=[];shells=[];tracerGeo=new an(.08,.08,1.25);allyMat=new Ki({color:16769698});foeMat=new Ki({color:14148863});anchor;constructor(e){this.anchor=e}get activeShells(){return this.shells.filter(e=>e.alive).length}clear(){for(const e of this.shells)e.mesh.removeFromParent();this.shells=[],this.events.length=0}tryFire(e){if(!e.alive||e.reload>0)return!1;e.group.updateMatrixWorld(!0),e.muzzle.getWorldPosition(gi),e.muzzle.getWorldDirection(fs);const t=Math.atan(e.dispersion/100),n=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*t,r=Math.atan2(fs.x,fs.z)+Math.cos(n)*i,a=Math.asin(Math.max(-1,Math.min(1,fs.y)))+Math.sin(n)*i,o=Math.cos(a),l=Math.sin(r)*o,c=Math.sin(a),h=Math.cos(r)*o,d=e.spec.shellSpeed,u=new xt(this.tracerGeo,e.team===0?this.allyMat:this.foeMat);return this.anchor.add(u),this.shells.push({alive:!0,x:gi.x+l*.6,y:gi.y+c*.6,z:gi.z+h*.6,vx:l*d,vy:c*d,vz:h*d,owner:e.id,team:e.team,damage:e.spec.damage,pen:e.spec.pen,caliber:e.spec.caliber,life:3.2,mesh:u}),e.fired(),this.events.push({type:"fire",a:e.id,b:-1,x:gi.x,y:gi.y,z:gi.z,n:0,dx:l,dy:c,dz:h}),!0}update(e,t,n,i,r){for(const a of this.shells){if(!a.alive)continue;a.life-=e;const o=Math.hypot(a.vx,a.vy,a.vz),l=Math.max(1,Math.ceil(o*e/.8)),c=e/l;let h=!1;for(let d=0;d<l&&!h;d++){const u=a.x,f=a.y,g=a.z;a.x+=a.vx*c,a.y+=a.vy*c,a.z+=a.vz*c,a.vy-=9.8*c,h=this.impact(a,u,f,g,t,n,i,r)}a.life<=0?this.killShell(a):this.pose(a)}this.shells=this.shells.filter(a=>a.alive)}pose(e){e.mesh.position.set(e.x,e.y,e.z),e.mesh.lookAt(e.x+e.vx,e.y+e.vy,e.z+e.vz)}killShell(e){e.alive=!1,e.mesh.removeFromParent()}impact(e,t,n,i,r,a,o,l){let c=1,h="",d=null,u=new F,f=null,g=!0;Math.hypot(e.x-t,e.y-n,e.z-i);for(const w of r){if(w.id===e.owner||w.team===e.team)continue;const b=this.hitMesh(w.hullMesh,w.hullBox,t,n,i,e.x,e.y,e.z),_=this.hitMesh(w.turretMesh,w.turretBox,t,n,i,e.x,e.y,e.z),S=Dg(b,_);!S||S.t>=c||(c=S.t,h="tank",d=w,u=S.n,f=S.mesh,g=S.mesh===w.hullMesh)}for(const w of o){const b=Ng(t,n,i,e.x,e.y,e.z,w);b&&b.t<c&&(c=b.t,h="solid",d=null)}for(const w of l){const b=Ig(t,n,i,e.x,e.y,e.z,w);b&&b<c&&(c=b,h="post",d=null)}const M=t+(e.x-t)*c,m=n+(e.y-n)*c,p=i+(e.z-i)*c;if(h===""&&m<=a.groundAt(M,p)+.08&&(h="ground",c=Math.min(c,1)),h==="")return!1;const x=t+(e.x-t)*c,T=h==="ground"?a.groundAt(M,p):n+(e.y-n)*c,v=i+(e.z-i)*c;if(e.x=x,e.y=T,e.z=v,h==="tank"&&d&&f)if(!d.alive)this.events.push({type:"ground",a:e.owner,b:d.id,x,y:T,z:v,n:0,dx:0,dy:1,dz:0});else{us.copy(u).transformDirection(f.matrixWorld).normalize();const w=fs.set(e.vx,e.vy,e.vz).normalize(),b=Math.acos(Math.max(-1,Math.min(1,-w.dot(us)))),_=Lg(u),S=g?d.spec.armorHull:d.spec.armorTurret,R=_==="front"?S[0]:_==="side"?S[1]:_==="rear"?S[2]:S[3],A=.85+Math.random()*.3,D=gh({thickness:R,angle:b,pen:e.pen,caliber:e.caliber,ricochet:d.spec.ricochet,normalization:d.spec.normalization},A);if(D==="pen"){const L=_==="side"||_==="rear"||A>1.08;let U=e.damage*(.9+Math.random()*.2);L&&(U*=1.15),d.hp-=U;const P=r.find(z=>z.id===e.owner);P&&(P.hits++,P.pens++,P.damageDealt+=U),this.events.push({type:"pen",a:e.owner,b:d.id,x,y:T,z:v,n:U,dx:w.x,dy:w.y,dz:w.z,note:L?"crit":"pen"}),d.hp<=0&&(d.kill(),P&&P.kills++,this.events.push({type:"kill",a:e.owner,b:d.id,x,y:T+1,z:v,n:U,dx:0,dy:1,dz:0}))}else{const L=r.find(U=>U.id===e.owner);L&&L.hits++,d.blocked+=e.damage,this.events.push({type:"bounce",a:e.owner,b:d.id,x,y:T,z:v,n:0,dx:us.x,dy:us.y,dz:us.z,note:D==="ricochet"?"ricochet":"nodmg"})}}else this.events.push({type:"ground",a:e.owner,b:-1,x,y:T,z:v,n:0,dx:0,dy:1,dz:0});return this.killShell(e),!0}hitMesh(e,t,n,i,r,a,o,l){e.updateWorldMatrix(!0,!1),Ma.copy(e.matrixWorld).invert(),_r.set(n,i,r).applyMatrix4(Ma),xr.set(a,o,l).applyMatrix4(Ma);const c=xh(_r.x,_r.y,_r.z,xr.x,xr.y,xr.z,t.min.x,t.min.y,t.min.z,t.max.x,t.max.y,t.max.z);return c?{t:c.t,n:new F(c.nx,c.ny,c.nz),mesh:e}:null}}const Ma=new nt;function Dg(s,e){return s?e?s.t<=e.t?s:e:s:e}function Lg(s){const e=Math.abs(s.x),t=Math.abs(s.y),n=Math.abs(s.z);return t>=e&&t>=n?"roof":n>=e?s.z>0?"front":"rear":"side"}function Ng(s,e,t,n,i,r,a){const[o,l]=zr(s-a.x,t-a.z,a.rot),[c,h]=zr(n-a.x,r-a.z,a.rot),d=xh(o,e-a.y,l,c,i-a.y,h,-a.hx,-a.hy,-a.hz,a.hx,a.hy,a.hz);return d?{t:d.t}:null}function Ig(s,e,t,n,i,r,a){const o=n-s,l=r-t,c=s-a.x,h=t-a.z,d=o*o+l*l;if(d<1e-6)return null;const u=Math.max(0,Math.min(1,-(c*o+h*l)/d)),f=s+o*u,g=t+l*u,M=e+(i-e)*u;return(f-a.x)**2+(g-a.z)**2>a.r*a.r||M<a.y0||M>a.y1?null:u}const vr=mh(),Ug=Rg();function Fg(s,e,t,n,i){const r=new Set;for(const a of s){if(!a.alive)continue;const o=a.y+2.15;for(const l of s){if(!l.alive||l.team===a.team)continue;const c=l.x-a.x,h=l.z-a.z,d=Math.hypot(c,l.y-a.y,h);d>a.spec.view&&d>48||d>48&&d>a.spec.view||!(d<46)&&!vh(e,t,n,a.x,o,a.z,l.x,l.y+1.25,l.z)||r.add(l.id)}}for(const a of s)r.has(a.id)?a.detected=3:a.detected=Math.max(0,a.detected-i)}class Og{mem=new Map;bind(e){this.mem.clear();let t=0,n=0;for(const i of e){if(i.player)continue;const r=i.team===0?t++:n++;this.mem.set(i.id,{lane:r%3,wp:0,hold:0,stuck:0,reverse:0,think:i.id*.05,hesitate:.4,target:-1})}}drive(e,t,n,i){const r=this.mem.get(e.id);if(!r||!e.alive)return{throttle:0,steer:0};r.think-=i,r.hesitate=Math.max(0,r.hesitate-i),r.reverse=Math.max(0,r.reverse-i);const a=t.filter(R=>R.alive&&R.team!==e.team),o=t.filter(R=>R.alive&&R.team===e.team);if(r.think<=0){r.think=.32;let R=-1,A=1/0;for(const U of a){if(U.detected<=0)continue;const P=Math.hypot(U.x-e.x,U.z-e.z);P<A&&(A=P,R=U.id)}r.target=R;const D=t.find(U=>U.id===R);e.hp/e.spec.hp<.3&&D&&A<90&&(r.hold=0),a.length<=2&&o.length>=a.length&&(r.hold=0)}const l=t.find(R=>R.id===r.target&&R.alive&&R.detected>0),c=vr[r.lane]??vr[0],h=e.team===0?c:[...c].reverse(),d=e.team===0?{x:0,z:Te.baseZ}:{x:0,z:-176},u=e.team===0?{x:0,z:-176}:{x:0,z:Te.baseZ};let f=h[Math.min(r.wp,h.length-1)];const g=e.hp/e.spec.hp<.3,M=l?Math.hypot(l.x-e.x,l.z-e.z):9999;if(a.length===0||a.length<=2&&!g)f=d;else if(g&&M<100)f=u;else if(l&&M<e.spec.rangeFar&&M>18){const R=zg(e,r.lane);R&&e.spec.id!=="lynx"&&(f=R),r.hold=e.spec.id==="lynx"?0:.4}const m=f.x-e.x,p=f.z-e.z;Math.hypot(m,p)<9&&r.wp<h.length-1&&f!==d&&f!==u&&r.wp++;let x=Math.atan2(m,p);l&&r.hold>0&&e.spec.id!=="lynx"&&(x=Math.atan2(l.x-e.x,l.z-e.z)+(e.spec.id==="bulwark"?.32:.22)*(e.id%2===0?1:-1));let T=dh(e.yaw,x),v=Fe(T/.42,-1,1),w=Math.abs(T)>1?.3:1;r.hold>0&&l&&Math.abs(T)<.35&&e.spec.id!=="lynx"&&(w=0),r.reverse>0&&(w=-.65,v=-v);const[b,_]=xi(e.yaw);if(n.sample(e.x+b*7,e.z+_*7).deep){const R=n.sample(e.x-_*6,e.z+b*6),A=n.sample(e.x+_*6,e.z-b*6);v=R.waterDepth<A.waterDepth?-1:1,w=.45}return w>.4&&Math.abs(e.speed)<.4?r.stuck+=i:r.stuck=Math.max(0,r.stuck-i*.5),r.stuck>1.25&&(r.reverse=.85,r.stuck=0,r.wp=Math.max(0,r.wp-1)),{throttle:w,steer:v}}aim(e,t,n,i,r,a){const o=this.mem.get(e.id);if(!o||!e.alive)return;const l=t.find(R=>R.id===o.target&&R.alive&&R.detected>0);if(!l){const R=vr[o.lane]??vr[0],A=e.team===0?R:[...R].reverse(),D=A[Math.min(o.wp,A.length-1)];e.aim(Math.atan2(D.x-e.x,D.z-e.z),0,a);return}const c=Math.hypot(l.x-e.x,l.z-e.z),h=c/e.spec.shellSpeed,[d,u]=xi(l.yaw),f=l.x+d*l.speed*h,g=l.z+u*l.speed*h,M=l.y+1.15;e.group.updateMatrixWorld(!0),e.muzzle.getWorldPosition(_i);const m=Math.hypot(f-_i.x,g-_i.z),p=_h(m,M-_i.y,e.spec.shellSpeed);e.aim(Math.atan2(f-e.x,g-e.z),p,a),e.group.updateMatrixWorld(!0),e.muzzle.getWorldDirection(Mr);const x=f-_i.x,T=M-_i.y,v=g-_i.z,w=Math.hypot(x,T,v)||1,b=Mr.x*(x/w)+Mr.y*(T/w)+Mr.z*(v/w),_=vh(n,i,r,e.x,e.y+2.1,e.z,f,M,g),S=e.dispersion<e.spec.baseDisp+e.spec.moveDisp*.8;b>.996&&_&&S&&e.reload<=0&&o.hesitate<=0&&c<e.spec.view&&(e.aiFire=!0,o.hesitate=.2+Math.random()*.7)}}const _i=new F,Mr=new F;function zg(s,e){let t=null,n=28;for(const i of Ug){if(i.lane!==e)continue;const r=Math.hypot(i.x-s.x,i.z-s.z);r<n&&(n=r,t=i)}return t}function vh(s,e,t,n,i,r,a,o,l){const c=a-n,h=o-i,d=l-r,u=Math.hypot(c,h,d),f=Math.max(2,Math.ceil(u/4));for(let g=1;g<f;g++){const M=g/f,m=n+c*M,p=i+h*M,x=r+d*M;if(p<s.groundAt(m,x)+.4)return!1}for(const g of e)if(!(Math.abs((n+a)/2-g.x)>u&&Math.abs((r+l)/2-g.z)>u)&&Bg(n,i,r,a,o,l,g))return!1;for(const g of t)if(Gg(n,i,r,a,o,l,g))return!1;return!0}function Bg(s,e,t,n,i,r,a){const o=n-s,l=i-e,c=r-t,h=6;for(let d=1;d<h;d++){const u=d/h,[f,g]=kg(s+o*u-a.x,t+c*u-a.z,a.rot),M=e+l*u-a.y;if(Math.abs(f)<=a.hx&&Math.abs(M)<=a.hy&&Math.abs(g)<=a.hz)return!0}return!1}function kg(s,e,t){const n=Math.cos(t),i=Math.sin(t);return[s*n-e*i,s*i+e*n]}function Gg(s,e,t,n,i,r,a){const o=n-s,l=r-t,c=o*o+l*l||1,h=Fe(-((s-a.x)*o+(t-a.z)*l)/c,0,1),d=s+o*h,u=t+l*h,f=e+(i-e)*h;return(d-a.x)**2+(u-a.z)**2<=a.r*a.r&&f>=a.y0&&f<=a.y1}function Hg(s,e,t,n,i){const r=s.createGain();return r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(Math.max(.001,i),e+t),r.gain.exponentialRampToValueAtTime(1e-4,e+n),r}class Vg{ctx=null;master=null;engineGain=null;engineFilter=null;oscA=null;oscB=null;lfo=null;started=!1;volume=.75;ensure(){if(this.ctx)return this.ctx;const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;const t=new e,n=t.createGain();return n.gain.value=this.volume,n.connect(t.destination),this.ctx=t,this.master=n,t}async unlock(){const e=this.ensure();e&&(e.state==="suspended"&&await e.resume(),this.startLoops())}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}suspend(){this.ctx?.suspend()}resume(){this.ctx?.resume()}noiseBuffer(e){const t=this.ctx;if(!t)return null;const n=Math.floor(t.sampleRate*e),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);let a=0;for(let o=0;o<n;o++){const l=Math.random()*2-1;a=a*.96+l*.04,r[o]=a*3.2}return i}startLoops(){if(this.started||!this.ctx||!this.master)return;this.started=!0;const e=this.ctx,t=e.createGain();t.gain.value=1e-4;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=180,n.Q.value=.7;const i=e.createOscillator();i.type="sawtooth",i.frequency.value=42;const r=e.createOscillator();r.type="square",r.frequency.value=84;const a=e.createGain();a.gain.value=.22;const o=e.createGain();o.gain.value=.08,i.connect(a),r.connect(o),a.connect(n),o.connect(n);const l=this.noiseBuffer(2);if(l){const f=e.createBufferSource();f.buffer=l,f.loop=!0;const g=e.createGain();g.gain.value=.35,f.connect(g),g.connect(n),f.start()}n.connect(t),t.connect(this.master);const c=e.createOscillator();c.frequency.value=12;const h=e.createGain();h.gain.value=90,c.connect(h),h.connect(n.frequency);const d=e.createGain();d.gain.value=.04,c.connect(d),d.connect(t.gain),i.start(),r.start(),c.start(),this.engineGain=t,this.engineFilter=n,this.oscA=i,this.oscB=r,this.lfo=c;const u=this.noiseBuffer(3);if(u){const f=e.createBufferSource();f.buffer=u,f.loop=!0;const g=e.createBiquadFilter();g.type="bandpass",g.frequency.value=420,g.Q.value=.4;const M=e.createGain();M.gain.value=.035,f.connect(g),g.connect(M),M.connect(this.master),f.start()}}updateEngine(e,t,n){if(!this.ctx||!this.oscA||!this.oscB||!this.engineFilter||!this.engineGain||!this.lfo)return;const i=Math.min(1,Math.abs(e)/Math.max(1,t)),r=Math.min(1,Math.abs(n)),a=this.ctx.currentTime,o=36+i*78+r*10;this.oscA.frequency.setTargetAtTime(o,a,.08),this.oscB.frequency.setTargetAtTime(o*2.02,a,.08),this.lfo.frequency.setTargetAtTime(7+i*18,a,.1),this.engineFilter.frequency.setTargetAtTime(140+i*900+r*220,a,.08);const l=.04+i*.09+r*.03;this.engineGain.gain.setTargetAtTime(l,a,.06)}silenceEngine(){!this.ctx||!this.engineGain||this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.1)}burst(e,t,n=1){const i=this.ensure();if(!i||!this.master)return;const r=i.currentTime,a=e==="boom"?.85:e==="shot"?.28:e==="bounce"?.22:.12,o=Hg(i,r,.012,a,t);if(o.connect(this.master),e==="shot"||e==="boom"||e==="pen"){const h=this.noiseBuffer(a);if(h){const d=i.createBufferSource();d.buffer=h,d.playbackRate.value=n;const u=i.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(e==="boom"?420:1800,r),u.frequency.exponentialRampToValueAtTime(e==="boom"?80:240,r+a),d.connect(u),u.connect(o),d.start(r),d.stop(r+a)}}const l=i.createOscillator();l.type=e==="bounce"?"triangle":"sine",e==="shot"?(l.frequency.setValueAtTime(150*n,r),l.frequency.exponentialRampToValueAtTime(40,r+a)):e==="boom"?(l.frequency.setValueAtTime(70,r),l.frequency.exponentialRampToValueAtTime(28,r+a)):e==="bounce"?(l.frequency.setValueAtTime(1400*n,r),l.frequency.exponentialRampToValueAtTime(500,r+a)):e==="pen"?(l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(90,r+.08)):l.frequency.setValueAtTime(640,r);const c=i.createGain();c.gain.value=e==="boom"?.8:.35,l.connect(c),c.connect(o),l.start(r),l.stop(r+a)}shot(e){const t=Math.min(.55,8/Math.max(6,e));this.burst("shot",t,.85+Math.random()*.3)}boom(e){const t=Math.min(.7,18/Math.max(8,e));this.burst("boom",t,.8+Math.random()*.3)}pen(){this.burst("pen",.22,.9+Math.random()*.2)}bounce(){this.burst("bounce",.16,.85+Math.random()*.4)}ui(){this.burst("ui",.06,1)}}class Wg{throttle=0;steer=0;pauseEdge=!1;mapEdge=!1;zoomDelta=0;keys=new Set;fireLatch=!1;lookX=0;lookY=0;sniperToggle=!1;enabled=!1;stickId=null;lookId=null;originX=0;originY=0;lastX=0;lastY=0;stickX=0;stickY=0;sens=.0033;layer;stick;knob;constructor(e,t,n){this.layer=e,this.stick=t,this.knob=n,window.addEventListener("keydown",o=>{o.repeat||(this.keys.add(o.code),this.enabled&&(o.code==="Space"&&(o.preventDefault(),this.fireLatch=!0),o.code==="KeyC"&&(this.sniperToggle=!this.sniperToggle),o.code==="KeyM"&&(this.mapEdge=!0),o.code==="Escape"&&(this.pauseEdge=!0)))}),window.addEventListener("keyup",o=>this.keys.delete(o.code)),window.addEventListener("blur",()=>this.keys.clear()),e.addEventListener("contextmenu",o=>o.preventDefault()),this.layer.style.touchAction="none",e.addEventListener("pointerdown",o=>this.onDown(o),{passive:!0}),window.addEventListener("pointermove",o=>this.onMove(o),{passive:!0}),window.addEventListener("pointerup",o=>this.onUp(o),{passive:!0}),window.addEventListener("pointercancel",o=>this.onUp(o),{passive:!0}),e.addEventListener("wheel",o=>{this.enabled&&(o.preventDefault(),this.zoomDelta+=o.deltaY)},{passive:!1});const i=document.querySelector("#btn-fire"),r=document.querySelector("#btn-zoom"),a=document.querySelector("#btn-pause");i?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.fireLatch=!0)}),r?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.sniperToggle=!this.sniperToggle)}),a?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.pauseEdge=!0)})}setEnabled(e){this.enabled=e,this.layer.hidden=!e,e||this.release()}setSniper(e){this.sens=e?.00105:.0033}isSniper(){return this.sniperToggle||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}consumeFire(){const e=this.fireLatch;return this.fireLatch=!1,e}consumeLook(){const e={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,e}sample(){let e=0,t=0;if(this.keys.has("KeyW")&&(e+=1),this.keys.has("KeyS")&&(e-=1),this.keys.has("KeyA")&&(t+=1),this.keys.has("KeyD")&&(t-=1),this.stickId!==null&&(e=this.stickY,t=-this.stickX),!this.enabled){this.throttle=0,this.steer=0;return}this.throttle=sc(e),this.steer=sc(t)}onDown(e){if(!(!this.enabled||e.target.closest("[data-control]"))){if(e.pointerType==="touch"||e.pointerType==="pen"){const n=this.layer.getBoundingClientRect();e.clientX-n.left<n.width*.48&&this.stickId===null?(this.stickId=e.pointerId,this.originX=e.clientX,this.originY=e.clientY,this.placeStick(0,0),this.capture(e.pointerId)):this.lookId===null&&(this.lookId=e.pointerId,this.lastX=e.clientX,this.lastY=e.clientY,this.capture(e.pointerId));return}if(e.button===2){this.sniperToggle=!this.sniperToggle;return}e.button===0&&(this.fireLatch=!0,document.pointerLockElement!==this.layer&&this.layer.requestPointerLock?.())}}onMove(e){if(this.enabled){if(e.pointerId===this.stickId){const t=e.clientX-this.originX,n=e.clientY-this.originY,i=58,r=Math.hypot(t,n)||1,a=Math.min(i,r)/r;this.placeStick(t*a,n*a);const o=t*a/i,l=-(n*a)/i;this.stickX=rc(o),this.stickY=rc(l)}else e.pointerId===this.lookId&&(this.lookX+=e.clientX-this.lastX,this.lookY+=e.clientY-this.lastY,this.lastX=e.clientX,this.lastY=e.clientY);document.pointerLockElement===this.layer&&e.pointerType==="mouse"&&(this.lookX+=e.movementX,this.lookY+=e.movementY)}}onUp(e){e.pointerId===this.stickId&&(this.stickId=null,this.stickX=0,this.stickY=0,this.stick.hidden=!0),e.pointerId===this.lookId&&(this.lookId=null)}capture(e){try{this.layer.setPointerCapture(e)}catch{}}placeStick(e,t){this.stick.hidden=!1,this.stick.style.left=`${this.originX}px`,this.stick.style.top=`${this.originY}px`,this.knob.style.left=`${e}px`,this.knob.style.top=`${t}px`}release(){this.stickId=null,this.lookId=null,this.stickX=0,this.stickY=0,this.throttle=0,this.steer=0,this.stick.hidden=!0,document.pointerLockElement===this.layer&&document.exitPointerLock?.()}}function sc(s){return Math.max(-1,Math.min(1,s))}function rc(s){const t=Math.abs(s);if(t<.055)return 0;const n=Math.min(1,(t-.055)/(1-.055));return Math.sign(s)*n}function Xg(s,e){return new yt({transparent:!0,depthWrite:!1,blending:e?ws:Xi,uniforms:{uSprite:{value:s}},vertexShader:`
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
    `})}class ac{specks=[];pos;col;size;alpha;points;constructor(e,t,n){const i=new Lt;this.pos=new Ye(new Float32Array(n*3),3),this.col=new Ye(new Float32Array(n*3),3),this.size=new Ye(new Float32Array(n),1),this.alpha=new Ye(new Float32Array(n),1),this.pos.setUsage(Gs),this.col.setUsage(Gs),this.size.setUsage(Gs),this.alpha.setUsage(Gs),i.setAttribute("position",this.pos),i.setAttribute("color",this.col),i.setAttribute("size",this.size),i.setAttribute("alpha",this.alpha);const r=Xg(e,t);r.vertexColors=!0,this.points=new $u(i,r),this.points.frustumCulled=!1,this.points.renderOrder=t?3:2}spawn(e){if(this.specks.length<this.pos.count)this.specks.push(e);else{let t=0;for(let n=1;n<this.specks.length;n++)this.specks[n].life<this.specks[t].life&&(t=n);this.specks[t].life<e.life&&(this.specks[t]=e)}}update(e){const t=this.pos.count;for(let n=0;n<t;n++){const i=this.specks[n];if(!i||i.life<=0){this.alpha.setX(n,0),this.size.setX(n,0);continue}i.life-=e,i.vx*=Math.max(0,1-i.drag*e),i.vy*=Math.max(0,1-i.drag*e),i.vz*=Math.max(0,1-i.drag*e),i.vy+=i.grav*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e;const r=Math.max(0,i.life/i.max);this.pos.setXYZ(n,i.x,i.y,i.z),this.col.setXYZ(n,i.r,i.g,i.b),this.size.setX(n,i.size*(.6+(1-r)*1.4)),this.alpha.setX(n,r*r)}this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.size.needsUpdate=!0,this.alpha.needsUpdate=!0}}class qg{fire;smoke;budget;constructor(e,t){this.budget=t,this.fire=new ac(e,!0,Math.max(80,t)),this.smoke=new ac(e,!1,Math.max(120,t))}get objects(){return[this.smoke.points,this.fire.points]}setBudget(e){this.budget=e}update(e){this.fire.update(e),this.smoke.update(e)}muzzle(e,t,n,i,r,a){this.fire.spawn({life:.08,max:.08,x:e,y:t,z:n,vx:i*2,vy:r*2,vz:a*2,size:2.4,r:1,g:.85,b:.45,drag:2,grav:0});for(let o=0;o<5;o++)this.smoke.spawn({life:.7,max:.7,x:e+i*.4,y:t,z:n+a*.4,vx:i*2+(Math.random()-.5),vy:.6+Math.random(),vz:a*2+(Math.random()-.5),size:1.1,r:.65,g:.62,b:.55,drag:1.4,grav:.2})}blast(e,t,n){const i=Math.min(42,Math.floor(this.budget/12));for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2,o=Math.random(),l=3+Math.random()*8;this.fire.spawn({life:.35+Math.random()*.3,max:.6,x:e,y:t,z:n,vx:Math.cos(a)*l*(1-o),vy:2+o*8,vz:Math.sin(a)*l*(1-o),size:1.6+Math.random()*2.2,r:1,g:.45+Math.random()*.3,b:.12,drag:1.2,grav:-4})}for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2;this.smoke.spawn({life:2.2+Math.random()*1.4,max:3.2,x:e,y:t+.4,z:n,vx:Math.cos(a)*(1+Math.random()*2),vy:1.5+Math.random()*2.5,vz:Math.sin(a)*(1+Math.random()*2),size:2.2+Math.random(),r:.25,g:.22,b:.2,drag:.6,grav:.35})}for(let r=0;r<10;r++)this.smoke.spawn({life:3.1,max:3.1,x:e,y:t+r*.12,z:n,vx:(Math.random()-.5)*.5,vy:1.1+r*.18,vz:(Math.random()-.5)*.5,size:2.2+r*.35,r:.16,g:.15,b:.13,drag:.35,grav:.2})}dust(e,t,n){this.smoke.spawn({life:.55,max:.55,x:e,y:t,z:n,vx:(Math.random()-.5)*.8,vy:.4+Math.random()*.5,vz:(Math.random()-.5)*.8,size:.9,r:.62,g:.52,b:.36,drag:1.5,grav:.1})}splash(e,t,n){this.fire.spawn({life:.4,max:.4,x:e,y:t,z:n,vx:(Math.random()-.5)*2,vy:2+Math.random()*2,vz:(Math.random()-.5)*2,size:.7,r:.75,g:.85,b:.9,drag:1,grav:-6})}spark(e,t,n,i){for(let r=0;r<6;r++)this.fire.spawn({life:.25,max:.25,x:e,y:t,z:n,vx:(Math.random()-.5)*6,vy:Math.random()*4,vz:(Math.random()-.5)*6,size:.45,r:1,g:i?.75:.85,b:i?.3:.7,drag:1.5,grav:-8})}dirt(e,t,n){for(let i=0;i<8;i++)this.smoke.spawn({life:.5,max:.5,x:e,y:t,z:n,vx:(Math.random()-.5)*4,vy:1+Math.random()*3,vz:(Math.random()-.5)*4,size:.8,r:.45,g:.36,b:.24,drag:1.2,grav:-6})}}const ds=new nt;class Yg{mesh;index=0;constructor(e=900){const t=new Rn(.5,.95);t.rotateX(-Math.PI/2);const n=new Ki({color:2893342,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new jn(t,n,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1;for(let i=0;i<e;i++)ds.makeScale(.001,.001,.001),this.mesh.setMatrixAt(i,ds);this.mesh.instanceMatrix.needsUpdate=!0}stamp(e,t,n,i,r){const a=this.mesh.instanceMatrix.count;for(const o of[-1,1]){const l=Math.cos(i)*o*r*.38,c=-Math.sin(i)*o*r*.38;ds.makeRotationY(i),ds.setPosition(e+l,t+.04,n+c),this.mesh.setMatrixAt(this.index%a,ds),this.index++}this.mesh.instanceMatrix.needsUpdate=!0}}const oc=new nt;function un(s){const e=s.filter(c=>c.getAttribute("position")?.count),t=new Lt;if(!e.length)return t.setAttribute("position",new Ye([0,0,0],3)),t;const n=e.map(c=>c.index?c.toNonIndexed():c);let i=0;for(const c of n)i+=c.getAttribute("position").count;const r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i*2);let l=0;for(const c of n){c.getAttribute("normal")||c.computeVertexNormals();const h=c.getAttribute("position"),d=c.getAttribute("normal"),u=c.getAttribute("uv");for(let f=0;f<h.count;f++)r[(l+f)*3]=h.getX(f),r[(l+f)*3+1]=h.getY(f),r[(l+f)*3+2]=h.getZ(f),a[(l+f)*3]=d.getX(f),a[(l+f)*3+1]=d.getY(f),a[(l+f)*3+2]=d.getZ(f),o[(l+f)*2]=u?u.getX(f):0,o[(l+f)*2+1]=u?u.getY(f):0;l+=h.count}return t.setAttribute("position",new Ye(r,3)),t.setAttribute("normal",new Ye(a,3)),t.setAttribute("uv",new Ye(o,2)),t}function ei(s,e,t,n,i){return oc.makeRotationY(e).setPosition(t,n,i),s.applyMatrix4(oc),s}function lc(s){const t=[],n=[];for(let o=0;o<s.length;o++){const l=s[o],c=[[l.xb,l.yb],[l.xm,l.ym],[l.xt,l.yt],[-l.xt,l.yt],[-l.xm,l.ym],[-l.xb,l.yb]];for(let h=0;h<6;h++)t.push(c[h][0],c[h][1],l.z),n.push(h/6,o/(s.length-1))}const i=[];for(let o=0;o<s.length-1;o++)for(let l=0;l<6;l++){const c=o*6+l,h=o*6+(l+1)%6,d=(o+1)*6+l,u=(o+1)*6+(l+1)%6;i.push(c,d,h,h,d,u)}const r=(o,l)=>{const c=o*6,h=t.length/3,d=s[o];t.push(0,(d.yb+d.yt)*.5,d.z),n.push(.5,o===0?0:1);for(let u=0;u<6;u++){const f=c+u,g=c+(u+1)%6;l?i.push(h,f,g):i.push(h,g,f)}};r(0,!0),r(s.length-1,!1);const a=new Lt;return a.setAttribute("position",new Ye(t,3)),a.setAttribute("uv",new Ye(n,2)),a.setIndex(i),a.computeVertexNormals(),a}const Mh=Math.sqrt(3),Zg=.5*(Mh-1),ps=(3-Mh)/6,cc=s=>Math.floor(s)|0,hc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Bo(s=Math.random){const e=$g(s),t=new Float64Array(e).map(i=>hc[i%12*2]),n=new Float64Array(e).map(i=>hc[i%12*2+1]);return function(r,a){let o=0,l=0,c=0;const h=(r+a)*Zg,d=cc(r+h),u=cc(a+h),f=(d+u)*ps,g=d-f,M=u-f,m=r-g,p=a-M;let x,T;m>p?(x=1,T=0):(x=0,T=1);const v=m-x+ps,w=p-T+ps,b=m-1+2*ps,_=p-1+2*ps,S=d&255,R=u&255;let A=.5-m*m-p*p;if(A>=0){const U=S+e[R],P=t[U],z=n[U];A*=A,o=A*A*(P*m+z*p)}let D=.5-v*v-w*w;if(D>=0){const U=S+x+e[R+T],P=t[U],z=n[U];D*=D,l=D*D*(P*v+z*w)}let L=.5-b*b-_*_;if(L>=0){const U=S+1+e[R+1],P=t[U],z=n[U];L*=L,c=L*L*(P*b+z*_)}return 70*(o+l+c)}}function $g(s){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=t[n];t[n]=t[i],t[i]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const Kg=-8,Jg=56;function Qg(s){const e=Fe((s-Kg)/Jg,0,1),t=Math.floor(e*65535);return[t>>8&255,t&255]}class jg{seg=Te.segments;heights;road;field;mesh;minimap;shaderTime=null;constructor(e){const t=Bo(Bn(679441)),n=this.seg+1,i=new Float32Array(n*n),r=new Float32Array(n*n),a=(x,T)=>{let v=0,w=1,b=1,_=0;for(let S=0;S<5;S++)v+=t(x*b,T*b)*w,_+=w,w*=.5,b*=2.07;return v/_};for(let x=0;x<n;x++)for(let T=0;T<n;T++){const v=-210+T/this.seg*Te.size,w=-210+x/this.seg*Te.size;let b=6.4+a(v*.0105,w*.0105)*7.4;b+=a(v*.027+30,w*.027)*1.7;const _=v-80,S=w-114;b+=Math.exp(-(_*_+S*S)/5e3)*15;const R=v+125,A=w-8;b+=Math.exp(-(R*R+A*A)/18050)*4.2;const D=v+10,L=w+46;b+=Math.exp(-(D*D)/2312-L*L/9248)*5.8;const U=Math.max(Math.abs(v),Math.abs(w));b+=Cr(Te.borderStart,Te.half,U)*24,i[x*n+T]=b}const o=new Float32Array(i.length);for(let x=0;x<n;x++)for(let T=0;T<n;T++){let v=0,w=0;for(let b=-1;b<=1;b++)for(let _=-1;_<=1;_++){const S=Fe(T+_,0,this.seg),R=Fe(x+b,0,this.seg);v+=i[R*n+S],w++}o[x*n+T]=v/w}i.set(o);for(let x=0;x<n;x++)for(let T=0;T<n;T++){const v=-210+T/this.seg*Te.size,w=-210+x/this.seg*Te.size,b=Cn(v),_=wg(v),S=Math.abs(w-b),R=x*n+T;if(S<_+7){const A=Math.max(i[R],1.6),D=Ag(v);if(S<=_){const L=S/_,U=L*L*(3-2*L);i[R]=Jt(D,A,U)}else{const L=(S-_)/7;i[R]=Jt(Math.max(A,1.8),i[R],L)}}}this.heights=i,this.road=r;for(const x of mh())this.paintRoad(x,7.2);this.paintRoad([{x:40,z:70},{x:90,z:58},{x:si.x,z:si.z},{x:150,z:36}],5.5),this.rampBridge(),this.flatten(-176,22,void 0),this.flatten(Te.baseZ,22,void 0),this.flattenDisk(0,-150,26,.85),this.flattenDisk(0,Te.spawnZ,26,.85),this.flattenDisk(si.x,si.z,si.r,.45);for(const x of ri)this.flattenDisk(x,Cn(x),9,.65);const l=new Uint8Array(n*n*4);for(let x=0;x<n;x++)for(let T=0;T<n;T++){const v=x*n+T,w=-210+T/this.seg*Te.size,b=-210+x/this.seg*Te.size,[_,S]=Qg(i[v]),R=v*4;l[R]=Math.floor(Fe(r[v],0,1)*255),l[R+1]=_,l[R+2]=S,l[R+3]=Math.floor(Fe(Es(w,b),0,1)*255)}const c=new bi(l,n,n,vn);c.colorSpace=hn,c.wrapS=c.wrapT=fn,c.magFilter=Et,c.minFilter=Et,c.generateMipmaps=!1,c.flipY=!1,c.needsUpdate=!0,this.field=c;const h=new Lt,d=new Float32Array(n*n*3),u=new Float32Array(n*n*2);for(let x=0;x<n;x++)for(let T=0;T<n;T++){const v=x*n+T;d[v*3]=-210+T/this.seg*Te.size,d[v*3+1]=i[v],d[v*3+2]=-210+x/this.seg*Te.size,u[v*2]=T/this.seg,u[v*2+1]=x/this.seg}const f=new Uint32Array(this.seg*this.seg*6);let g=0;for(let x=0;x<this.seg;x++)for(let T=0;T<this.seg;T++){const v=x*n+T,w=v+1,b=v+n,_=b+1;f[g++]=v,f[g++]=b,f[g++]=w,f[g++]=w,f[g++]=b,f[g++]=_}h.setAttribute("position",new Ye(d,3)),h.setAttribute("uv",new Ye(u,2)),h.setIndex(Array.from(f)),h.computeVertexNormals();const M=h.getAttribute("normal");let m=0;for(let x=0;x<M.count;x++)m+=M.getY(x);if(m<0){for(let x=0;x<f.length;x+=3){const T=f[x];f[x]=f[x+1],f[x+1]=T}h.setIndex(Array.from(f)),h.computeVertexNormals()}h.computeBoundingSphere();const p=this.makeMaterial(e,c);this.mesh=new xt(h,p),this.mesh.receiveShadow=!0,this.mesh.name="terrain",this.minimap=this.drawMinimap()}tick(e){this.shaderTime&&(this.shaderTime.value=e)}cell(e,t){const n=this.seg+1;return this.heights[Fe(t,0,this.seg)*n+Fe(e,0,this.seg)]}roadAt(e,t){const n=this.seg+1;return this.road[Fe(t,0,this.seg)*n+Fe(e,0,this.seg)]}setH(e,t,n){const i=this.seg+1;this.heights[Fe(t,0,this.seg)*i+Fe(e,0,this.seg)]=n}setRoad(e,t,n){const i=this.seg+1,r=Fe(t,0,this.seg)*i+Fe(e,0,this.seg);this.road[r]=Math.max(this.road[r],n)}worldOf(e,t){return[-210+e/this.seg*Te.size,-210+t/this.seg*Te.size]}nearest(e,t){const n=Fe(Math.round((e+Te.half)/Te.size*this.seg),0,this.seg),i=Fe(Math.round((t+Te.half)/Te.size*this.seg),0,this.seg);return[n,i]}groundAt(e,t){const n=(e+Te.half)/Te.size*this.seg,i=(t+Te.half)/Te.size*this.seg,r=Fe(Math.floor(n),0,this.seg-1),a=Fe(Math.floor(i),0,this.seg-1),o=Fe(n-r,0,1),l=Fe(i-a,0,1),c=this.cell(r,a),h=this.cell(r+1,a),d=this.cell(r,a+1),u=this.cell(r+1,a+1);return Jt(Jt(c,h,o),Jt(d,u,o),l)}sample(e,t){const n=this.groundAt(e,t),i=Yi(),r=Math.abs(e-i.x)<=i.halfX&&Math.abs(t-i.z)<=i.halfZ,a=r?Math.max(n,i.deckY):n,o=1.6,l=this.groundAt(e+o,t)-this.groundAt(e-o,t),c=this.groundAt(e,t+o)-this.groundAt(e,t-o),h=o*2,d=Math.hypot(l,h,c)||1,u=(e+Te.half)/Te.size*this.seg,f=(t+Te.half)/Te.size*this.seg,g=Fe(Math.floor(u),0,this.seg-1),M=Fe(Math.floor(f),0,this.seg-1),m=Math.max(this.roadAt(g,M),this.roadAt(g+1,M),this.roadAt(g,M+1)),p=Math.max(0,Te.water-n);return{h:a,ground:n,nx:-l/d,ny:h/d,nz:-c/d,road:m,waterDepth:p,deep:!r&&p>1.02,onBridge:r}}paintRoad(e,t){const n=e.map(r=>{const[a,o]=this.nearest(r.x,r.z);return this.cell(a,o)});for(let r=0;r<3;r++){const a=n.slice();for(let o=1;o<n.length-1;o++)a[o]=n[o]*.5+n[o-1]*.25+n[o+1]*.25;for(let o=1;o<n.length-1;o++)n[o]=a[o]}const i=Yi();for(let r=0;r<e.length;r++){const a=e[r],o=Math.abs(a.z-i.z);if(Math.abs(a.x-i.x)<i.halfX+6&&o<i.halfZ+24){const l=Fe((o-i.halfZ)/18,0,1);n[r]=Jt(i.deckY,n[r],l*l)}}for(let r=0;r<e.length-1;r++){const a=e[r],o=e[r+1],l=o.x-a.x,c=o.z-a.z,h=l*l+c*c||1,d=Fe(Math.floor((Math.min(a.x,o.x)-t+Te.half)/Te.size*this.seg),0,this.seg),u=Fe(Math.ceil((Math.max(a.x,o.x)+t+Te.half)/Te.size*this.seg),0,this.seg),f=Fe(Math.floor((Math.min(a.z,o.z)-t+Te.half)/Te.size*this.seg),0,this.seg),g=Fe(Math.ceil((Math.max(a.z,o.z)+t+Te.half)/Te.size*this.seg),0,this.seg);for(let M=f;M<=g;M++)for(let m=d;m<=u;m++){const[p,x]=this.worldOf(m,M),T=Fe(((p-a.x)*l+(x-a.z)*c)/h,0,1),v=a.x+l*T,w=a.z+c*T,b=Math.hypot(p-v,x-w);if(b>t)continue;const _=Math.abs(p-i.x)<=i.halfX&&Math.abs(x-i.z)<=i.halfZ,S=1-Cr(t*.35,t,b);_||this.setH(m,M,Jt(this.cell(m,M),Jt(n[r],n[r+1],T),S*.9)),this.setRoad(m,M,S)}}}rampBridge(){const e=Yi(),t=16;for(let n=0;n<=this.seg;n++)for(let i=0;i<=this.seg;i++){const[r,a]=this.worldOf(i,n);if(Math.abs(r-e.x)>e.halfX+1)continue;const o=Math.abs(a-e.z);if(o<=e.halfZ||o>e.halfZ+t)continue;const c=1-(o-e.halfZ)/t;this.setH(i,n,Jt(this.cell(i,n),e.deckY,c*c*(3-2*c)))}}flatten(e,t,n){this.flattenDisk(0,e,t,1,n)}flattenDisk(e,t,n,i,r){const[a,o]=this.nearest(e,t),l=r??this.cell(a,o),c=Fe(Math.floor((e-n+Te.half)/Te.size*this.seg),0,this.seg),h=Fe(Math.ceil((e+n+Te.half)/Te.size*this.seg),0,this.seg),d=Fe(Math.floor((t-n+Te.half)/Te.size*this.seg),0,this.seg),u=Fe(Math.ceil((t+n+Te.half)/Te.size*this.seg),0,this.seg);for(let f=d;f<=u;f++)for(let g=c;g<=h;g++){const[M,m]=this.worldOf(g,f),p=Math.hypot(M-e,m-t)/n;if(p>=1)continue;const x=(1-Cr(.45,1,p))*i;this.setH(g,f,Jt(this.cell(g,f),l,x))}}drawMinimap(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(!t)return e;const n=t.createImageData(256,256);for(let i=0;i<256;i++)for(let r=0;r<256;r++){const a=-210+r/255*Te.size,o=Te.half-i/255*Te.size,l=this.sample(a,o);let c=92,h=104,d=58;if(l.waterDepth>.35&&!l.onBridge)c=36,h=92,d=104;else if(l.onBridge||l.road>.55)c=150,h=132,d=96;else if(l.ny<.82)c=120,h=116,d=108;else if(Es(a,o)>.45)c=58,h=78,d=46;else{const f=Fe((l.ground-4)/16,0,1);c=110+f*30,h=118-f*10,d=64}const u=(i*256+r)*4;n.data[u]=c,n.data[u+1]=h,n.data[u+2]=d,n.data[u+3]=255}return t.putImageData(n,0,0),e}makeMaterial(e,t){const n=new Uint8Array([128,128,255,255]),i=new bi(n,1,1);i.colorSpace=hn,i.needsUpdate=!0;const r={value:0};this.shaderTime=r;const a=new zt({roughness:.94,metalness:.02,normalMap:i,normalScale:new Oe(.75,.75)});return a.customProgramCacheKey=()=>"ashen-terrain-v5",a.onBeforeCompile=o=>{o.uniforms.uField={value:t},o.uniforms.uGrass={value:e.grass},o.uniforms.uDirt={value:e.dirt},o.uniforms.uRock={value:e.rock},o.uniforms.uSand={value:e.sand},o.uniforms.uGrassN={value:e.grassN},o.uniforms.uDirtN={value:e.dirtN},o.uniforms.uRockN={value:e.rockN},o.uniforms.uSandN={value:e.sandN},o.uniforms.uGrassR={value:e.grassR},o.uniforms.uDirtR={value:e.dirtR},o.uniforms.uRockR={value:e.rockR},o.uniforms.uCloud={value:e.cloud},o.uniforms.uTime=r,o.uniforms.uWater={value:Te.water},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
  vec3 col = texture2D(uGrass, p * 0.105).rgb;
  col = mix(col, texture2D(uDirt, p * 0.12).rgb, clamp(w.y + smoothstep(0.55, 0.82, texture2D(uCloud, p * 0.02).r) * 0.2 * (1.0 - w.x), 0.0, 1.0));
  col = mix(col, texture2D(uSand, p * 0.14).rgb, w.z);
  col = mix(col, texture2D(uRock, p * 0.09).rgb, w.w);
  float forest = texture2D(uField, vTerrainUv).a;
  vec3 detail = texture2D(uGrass, p * 0.46).rgb;
  col *= mix(vec3(1.0), detail, 0.55);
  col = pow(max(col, vec3(0.02)), vec3(1.35));
  col *= vec3(0.48, 0.78, 0.3);
  float mottling = texture2D(uCloud, p * 0.014).r;
  col = mix(col * vec3(0.85, 1.05, 0.7), col * vec3(1.15, 0.9, 0.55), mottling);
  col *= mix(vec3(0.7, 0.82, 0.48), vec3(0.42, 0.5, 0.32), forest);
  col *= mix(vec3(1.0), vec3(0.72, 0.7, 0.62), smoothstep(6.0, 20.0, vTerrainWorld.y));
  float cloud = texture2D(uCloud, p * 0.0032 + vec2(uTime * 0.004, uTime * 0.001)).r;
  col *= mix(0.82, 1.0, smoothstep(0.28, 0.7, cloud));
  float valley = exp(-max(vTerrainWorld.y, 0.0) * 0.08);
  col = mix(col, vec3(0.28, 0.36, 0.3), valley * 0.55);
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
}`)},a}}function Es(s,e){let t=Cr(28,-90,s)*.95;const n=Cn(s);return t=Math.max(t,Math.exp(-((s+150)**2+(e-n)**2)/9800)),t=Math.max(t,Math.exp(-((s+30)**2+(e-125)**2)/4608)*.75),Math.hypot(s-si.x,e-si.z)<si.r+6&&(t*=.15),Math.abs(s)<34&&Math.abs(e)>132&&(t*=.08),Math.hypot(s-48,e+60)<16&&(t*=.2),Fe(t,0,1)}const _n=Pr[2],pt=new At;function Vi(s,e,t=.04,n){const i=new zt({map:s,roughness:e,metalness:t,envMapIntensity:.7});return n&&(i.normalMap=n),i}function Sh(s,e,t,n,i,r,a,o,l,c,h){const[d,u]=ph(r,o,e);s.push({x:t+d,y:n+a,z:i+u,hx:l/2,hy:c/2,hz:h/2,rot:e})}function Wi(s,e,t,n,i,r,a,o,l,c,h,d){const u=new an(c,h,d);u.translate(a,o,l),ei(u,t,n,i,r),s.push(u),e&&Sh(e,t,n,i,r,a,o,l,c,h,d)}function ms(s,e,t,n,i,r){const a=s.getContext("2d");if(!a)return;const o=(e+Te.half)/Te.size*256,l=(Te.half-t)/Te.size*256;a.fillStyle=r,a.fillRect(o-n,l-i,n*2,i*2)}function e_(s,e){const t=Bn(12648430),n=new Hn;n.name="scenery";const i=[],r=[],a=[],o=[],l=[],c=[],h=[],d={value:0},u=(ie,_e,be,ge,Ie,Ke,ut)=>{const St=s.sample(ie,_e).h,ft=.32;if([{lx:0,lz:Ie/2-ft/2,sx:ge,sz:ft},{lx:0,lz:-Ie/2+ft/2,sx:ge,sz:ft},{lx:ge/2-ft/2,lz:0,sx:ft,sz:Ie-ft},{lx:-ge/2+ft/2,lz:0,sx:ft,sz:Ie-ft}].forEach((ot,lt)=>{if(ut&&t()<.22&&lt!==0)return;const it=Ke*(ut?.42+t()*.58:1),ce=t()<.25?o:a;if(Wi(ce,i,be,ie,St,_e,ot.lx,it/2,ot.lz,ot.sx,it,ot.sz),t()<.7&&it>1.6){const Ce=new an(.55,.7,.08);Ce.translate(ot.lx,1.35,ot.lz+Math.sign(ot.lz||1)*.05),ei(Ce,be,ie,St,_e),h.push(Ce)}}),!ut||t()>.35){const ot=new Fr(Math.max(ge,Ie)*.48,1.15,4);ot.rotateY(Math.PI/4),ot.translate(0,Ke+.35,0),ut&&ot.scale(.75,.55,.75),ei(ot,be,ie,St,_e),l.push(ot)}ms(s.minimap,ie,_e,3.2,2.4,"#6b5344")},f=[[104,40,.4,8,6,3.2,!0],[118,36,1.2,7,5.5,2.8,!0],[128,48,.2,9,6.5,3.4,!1],[112,58,2.4,6.5,5,2.6,!0],[136,62,.8,7.5,5,3,!0],[100,66,1.7,8,6,2.4,!0],[148,44,.6,6,5,2.8,!0],[90,46,2.8,7,4.5,2.5,!0]];for(const ie of f)u(ie[0],ie[1],ie[2],ie[3],ie[4],ie[5],ie[6]);{const be=s.sample(122,70).h;Wi(c,i,.2,122,be,70,0,2.2,0,4.2,4.4,4.2),Wi(c,i,.2,122,be,70,0,5.6,0,3.2,2.6,3.2),Wi(c,null,.2,122,be,70,.4,7.4,0,2.2,1.4,2.2),ms(s.minimap,122,70,3,3,"#8a8174")}{const be=s.sample(48,-62).h,ge=new rn(2.1,2.2,8,10);ge.translate(0,4,0),ei(ge,0,48,be,-62),a.push(ge),i.push({x:48,y:be+4,z:-62,hx:2.2,hy:4,hz:2.2,rot:0});const Ie=new Fr(2.4,1.8,10);Ie.translate(0,8.6,0),ei(Ie,0,48,be,-62),l.push(Ie),ms(s.minimap,48,-62,2,2,"#b7aa96")}const g=[[96,30,0,16],[116,28,.15,14],[138,32,-.2,12],[-20,-40,.4,10],[70,Cn(76)+14,.3,8]];for(const[ie,_e,be,ge]of g){const Ie=s.sample(ie,_e).h;Wi(c,i,be,ie,Ie,_e,0,.58,0,ge,1.16,.45),ms(s.minimap,ie,_e,ge*.12,1,"#9a9286")}const M=Yi(),m=.42,p=new an(M.halfX*2,m,M.halfZ*2);p.translate(0,M.deckY-m/2,0),ei(p,0,M.x,0,M.z),c.push(p);for(const ie of[-1,1])Wi(c,i,0,M.x,0,M.z,ie*(M.halfX-.18),M.deckY+.42,0,.28,.84,M.halfZ*2);for(const ie of[-8,0,8]){const _e=new an(1.1,2.4,1.4);_e.translate(0,-.4,ie),ei(_e,0,M.x,0,M.z),c.push(_e)}ms(s.minimap,M.x,M.z,2,6,"#d9c7a4");const x=(ie,_e)=>{if(!ie.length)return;const be=new xt(un(ie),_e);be.castShadow=!0,be.receiveShadow=!0,n.add(be)};x(a,Vi(e.plaster,.86)),x(o,Vi(e.timber,.8)),x(l,Vi(e.roof,.74)),x(c,Vi(e.concrete,.84,.04,e.concreteN)),x(h,new zt({color:1710358,roughness:.7}));const T=new rn(.16,.34,2.8,7);T.translate(0,1.4,0);const v=t_(),w=n_(),b=new jn(T,new zt({map:e.bark,normalMap:e.barkN,roughness:.86,color:16777215}),_n.trees),_=new zt({map:e.leaf,alphaTest:.15,side:Bt,color:16777215,roughness:.86}),S=new zt({map:e.leaf,alphaTest:.15,side:Bt,color:9420650,roughness:.84});Sa(_,d,.05),Sa(S,d,.04);const R=new jn(v,_,_n.trees),A=new jn(w,S,_n.trees);let D=0,L=0;const U=[],P=(ie,_e,be)=>{for(let ge=0;ge<U.length;ge++){const Ie=U[ge],Ke=Ie.x-ie,ut=Ie.z-_e;if(Ke*Ke+ut*ut<be*be)return!1}return!0};for(let ie=-190;ie<=190&&D+L<_n.trees;ie+=7)for(let _e=-190;_e<=190&&D+L<_n.trees;_e+=7){const be=_e+(t()-.5)*5,ge=ie+(t()-.5)*5;if(Es(be,ge)<.34)continue;const Ie=s.sample(be,ge);if(Ie.deep||Ie.waterDepth>.25||Ie.road>.35||Ie.ny<.8||Math.hypot(be,ge+Te.spawnZ)<28||Math.hypot(be,ge-Te.spawnZ)<28||!P(be,ge,6.2))continue;const Ke=t()<.28,ut=1.05+t()*.55;pt.position.set(be,Ie.h,ge),pt.rotation.set(0,t()*6.28,0),pt.scale.setScalar(ut),pt.updateMatrix();const St=D+L;b.setMatrixAt(St,pt.matrix),Ke?(A.setMatrixAt(L,pt.matrix),L++):(R.setMatrixAt(D,pt.matrix),D++),U.push({x:be,z:ge}),r.push({x:be,z:ge,r:.42*ut,y0:Ie.h,y1:Ie.h+4.5*ut})}b.count=D+L,R.count=D,A.count=L;for(const ie of[b,R,A])ie.instanceMatrix.needsUpdate=!0,ie.castShadow=!1,ie.receiveShadow=!0,ie.computeBoundingSphere(),n.add(ie);const z=new Uo(1,2),B=z.getAttribute("position");for(let ie=0;ie<B.count;ie++){const _e=.45+t()*.9;B.setXYZ(ie,B.getX(ie)*_e,B.getY(ie)*(.35+t()*.7),B.getZ(ie)*(.5+t()*.8))}z.computeVertexNormals();const H=new jn(z,Vi(e.rock,.86,.06,e.rockN),_n.rocks+24);let ee=0;for(let ie=0;ie<900&&ee<_n.rocks;ie++){const _e=(t()-.5)*380,be=(t()-.5)*380,ge=s.sample(_e,be);if(ge.deep||ge.road>.4||ge.waterDepth>.3||ge.ny>.9&&t()>.15)continue;const Ie=ge.ny<.75?1.2+t()*2.2:.45+t()*1.1;pt.position.set(_e,ge.h+Ie*.25,be),pt.rotation.set(t(),t(),t()),pt.scale.set(Ie,Ie*.75,Ie),pt.updateMatrix(),H.setMatrixAt(ee++,pt.matrix),Ie>1.1&&r.push({x:_e,z:be,r:Ie*.75,y0:ge.h,y1:ge.h+Ie})}H.count=ee,H.instanceMatrix.needsUpdate=!0,H.castShadow=!0,H.receiveShadow=!0,H.computeBoundingSphere(),n.add(H);const V=new Rn(.7,.95,1,3);V.translate(0,.48,0);const $=V.clone().rotateY(Math.PI/2),j=un([V,$]),de=new zt({map:e.blade,roughness:.9,side:Bt,color:16777215});Sa(de,d,.12);const Se=new jn(j,de,_n.grass);let q=0;for(let ie=0;ie<48e3&&q<_n.grass;ie++){const _e=(t()-.5)*390,be=(t()-.5)*390;if(Es(_e,be)<.05&&t()>.45)continue;const Ie=s.sample(_e,be);if(Ie.deep||Ie.road>.5||Ie.waterDepth>.12||Ie.ny<.68)continue;pt.position.set(_e,Ie.h,be),pt.rotation.set(0,t()*6,0),pt.scale.setScalar(.85+t()*.7),pt.updateMatrix(),Se.setMatrixAt(q,pt.matrix);const Ke=new Ge().setHSL(.26+t()*.08,.7,.42+t()*.22);Se.setColorAt(q,Ke),q++}Se.count=q,Se.instanceMatrix.needsUpdate=!0,Se.instanceColor&&(Se.instanceColor.needsUpdate=!0),Se.receiveShadow=!1,Se.castShadow=!1,Se.computeBoundingSphere(),n.add(Se);const pe=ko(.55,.35),ye=new zt({map:e.leaf,alphaTest:.15,side:Bt,color:16777215,roughness:.86}),Ee=new jn(pe,ye,480);let le=0;for(let ie=0;ie<2200&&le<480;ie++){const _e=(t()-.5)*360,be=(t()-.5)*360,ge=s.sample(_e,be);ge.deep||ge.road>.4||ge.waterDepth>.1||ge.ny<.78||Es(_e,be)<.2&&t()>.4||(pt.position.set(_e,ge.h,be),pt.rotation.set(0,t()*6,0),pt.scale.setScalar(.75+t()*1.1),pt.updateMatrix(),Ee.setMatrixAt(le++,pt.matrix))}Ee.count=le,Ee.instanceMatrix.needsUpdate=!0,Ee.computeBoundingSphere(),n.add(Ee);const Ne=new Rn(.35,1.4);Ne.translate(0,.7,0);const rt=new zt({color:9083480,roughness:.9,side:Bt}),De=new jn(Ne,rt,_n.reeds);let Ze=0;for(let ie=0;ie<4e3&&Ze<_n.reeds;ie++){const _e=(t()-.5)*360,be=Cn(_e)+(t()-.5)*(i_(_e)+4),ge=s.sample(_e,be);ge.waterDepth<.05||ge.waterDepth>.9||ge.onBridge||(pt.position.set(_e,ge.h,be),pt.rotation.set(0,t()*6,0),pt.scale.setScalar(.8+t()*.7),pt.updateMatrix(),De.setMatrixAt(Ze++,pt.matrix))}De.count=Ze,De.instanceMatrix.needsUpdate=!0,De.computeBoundingSphere(),n.add(De);const et=[];for(let ie=0;ie<14;ie++){const _e=-40-t()*120,be=(t()-.5)*160,ge=s.sample(_e,be);if(ge.deep||ge.road>.3)continue;const Ie=t()*3,Ke=new rn(.28,.32,4.2,6);Ke.rotateZ(Math.PI/2),ei(Ke,Ie,_e,ge.h+.28,be),et.push(Ke),Sh(i,Ie,_e,ge.h,be,0,.28,0,4.2,.56,.6)}if(et.length){const ie=new xt(un(et),Vi(e.timber,.84));ie.castShadow=!0,ie.receiveShadow=!0,n.add(ie)}uc(n,s,i,d,0,-176,new F(.85,.55,.22),e.emblemCinder),uc(n,s,i,d,0,Te.baseZ,new F(.55,.62,.7),e.emblemSlate);const He=[];return n.traverse(ie=>{const _e=ie;_e.material instanceof yt&&_e.material.uniforms.uTime&&He.push(_e.material)}),{group:n,solids:i,posts:r,trunks:b,broad:R,pines:A,grass:Se,reeds:De,rocks:H,tick:ie=>{d.value=ie;for(const _e of He)_e.uniforms.uTime.value=ie}}}function ko(s,e){const t=[],n=[[e+.1,3.6*s,2.3],[e+1.35,3*s,2.05],[e+2.45,2.1*s,1.7]];for(const[i,r,a]of n)for(let o=0;o<3;o++){const l=new Rn(r,a);l.translate(0,i,0),l.rotateY(o*Math.PI/3+i*.2),t.push(l)}return un(t)}function t_(){return ko(1,2.3)}function n_(){return ko(.72,2.5)}function i_(s){return 12+Math.exp(-((s+155)**2)/2e3)*16}function Sa(s,e,t){s.onBeforeCompile=n=>{n.uniforms.uTime=e,n.uniforms.uAmp={value:t},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
transformed.z += cos(uTime * 1.1 + wz * 0.2) * uAmp * 0.6 * transformed.y;`)}}function uc(s,e,t,n,i,r,a,o){const l=e.sample(i,r).h,c=new xt(new Fo(Te.baseR-.6,Te.baseR,40),new zt({color:new Ge(a.x,a.y,a.z),roughness:.5,metalness:.2,side:Bt}));c.rotation.x=-Math.PI/2,c.position.set(i,l+.25,r),c.receiveShadow=!0,s.add(c);const h=new xt(new rn(.08,.1,6,6),new zt({color:2894116,metalness:.6,roughness:.4}));h.position.set(i,l+3,r),h.castShadow=!0,s.add(h),t.push({x:i,y:l+3,z:r,hx:.2,hy:3,hz:.2,rot:0});const d=new Rn(1.8,1.05,10,4);d.translate(.9,0,0);const u=new yt({side:Bt,uniforms:{uTime:n,uMap:{value:o},uColor:{value:a}},vertexShader:`
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
    `}),f=new xt(d,u);f.position.set(i,l+5.2,r),s.add(f);const g=new xt(new Us(.7,8,6),new zt({color:9275260,roughness:.9}));g.scale.y=.45,g.position.set(i,l+.2,r),s.add(g)}const Xr=new F(-.58,.46,-.34).normalize(),s_=`
varying vec3 vDir;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vDir = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,r_=`
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
`;function a_(){const s=new Us(900,28,16),e=new yt({side:Kt,depthWrite:!1,uniforms:{uSun:{value:Xr.clone()},uTime:{value:0}},vertexShader:s_,fragmentShader:r_}),t=new xt(s,e);return t.frustumCulled=!1,t.renderOrder=-1,t.name="sky",t}function o_(s,e){const t=s.material;t.uniforms.uTime.value=e}const Ts=new Ge(10136474);function l_(){const s=new Hn,e=new Ki({color:16769712,transparent:!0,opacity:.16,depthWrite:!1,fog:!1,blending:ws,side:Bt});for(let t=0;t<5;t++){const n=new xt(new Rn(16,70),e);n.position.set(-80+t*42,130,-40+t%2*50),n.lookAt(n.position.clone().add(Xr)),n.rotateZ(t*.35),s.add(n)}return s}function vt(s,e,t,n,i,r){const a=new an(s,e,t);return a.translate(n,i,r),a}function Yt(s,e,t,n,i,r,a,o="y"){const l=new rn(s,e,t,n);return o==="x"&&l.rotateZ(Math.PI/2),o==="z"&&l.rotateX(Math.PI/2),l.translate(i,r,a),l}function c_(){const s=[];s.push(vt(3.05,.48,6.35,0,.62,-.05));const e=vt(2.95,.16,1.7,0,.95,2.55);e.rotateX(-.42),s.push(e),s.push(vt(2.9,.22,3.4,0,1.05,-.15)),s.push(vt(3.15,.08,4.6,0,1.12,-.2)),s.push(vt(.16,.62,5.15,1.58,.58,.05)),s.push(vt(.16,.62,5.15,-1.58,.58,.05)),s.push(vt(.55,.08,4.8,1.28,.95,.05)),s.push(vt(.55,.08,4.8,-1.28,.95,.05)),s.push(vt(2.7,.55,.16,0,.72,-3.15)),s.push(vt(1.6,.06,1.5,0,1.16,-1.7));for(const m of[-.45,.45])s.push(vt(.55,.04,1.15,m,1.18,-1.65));for(const m of[-1.15,1.15])s.push(vt(.18,.12,.22,m,.78,3.05)),s.push(Yt(.05,.05,.28,6,m,.42,-3.22,"z"));s.push(Yt(.08,.1,.35,8,-.7,.55,-3.2,"z")),s.push(Yt(.08,.1,.35,8,.7,.55,-3.2,"z"));const t=[],n=vt(2.05,.42,2.35,0,.28,-.05);n.scale(1,1,1),t.push(n);const i=vt(2.15,.18,1.5,0,.48,-.15);t.push(i);const r=vt(1.35,.28,.7,0,.32,.95);r.rotateX(-.35),t.push(r),t.push(vt(.55,.32,.85,1.05,.28,-.15)),t.push(vt(.55,.32,.85,-1.05,.28,-.15)),t.push(vt(1.7,.22,.7,0,.32,-1.05)),t.push(Yt(.28,.32,.22,10,-.15,.62,-.35)),t.push(vt(.22,.1,.22,-.15,.76,-.35)),t.push(vt(.36,.14,.22,.35,.58,.15)),t.push(Yt(.035,.035,.55,6,.62,.66,.22,"z")),t.push(Yt(.02,.02,1.7,5,-.35,1.45,-.45)),t.push(Yt(.02,.02,1.85,5,.28,1.52,-.2)),t.push(vt(.16,.12,.2,.85,.55,.55)),t.push(vt(.22,.16,.28,-.72,.5,.35));const a=4.9,o=[];o.push(Yt(.09,.11,.35,10,0,0,.2,"z")),o.push(Yt(.07,.075,a,12,0,0,a/2+.15,"z")),o.push(Yt(.11,.11,.28,12,0,0,a-.05,"z")),o.push(Yt(.095,.095,.16,12,0,0,a+.18,"z"));const l=new Us(.13,10,8);l.scale(1,1,.7),l.translate(0,0,.05),o.push(l);const c=[],h=.33,d=[1.22,-1.22],u=[-2.15,-1.3,-.45,.4,1.25,2.05];for(const m of d){for(const p of u)c.push(Yt(h,h,.22,14,m,h,p,"x"));c.push(Yt(h*1.18,h*1.18,.24,12,m,h*1.05,-2.55,"x")),c.push(Yt(h*.95,h*.95,.2,12,m,h*.95,2.55,"x"));for(const p of[-1.2,.2,1.4])c.push(Yt(.1,.1,.16,8,m,.78,p,"x"))}const f=[];f.push(vt(.46,.16,5.15,0,.12,.05)),f.push(vt(.42,.12,4.15,0,.78,0));const g=new Or(.38,.13,6,12,Math.PI);g.rotateY(Math.PI/2),g.rotateZ(Math.PI),g.translate(0,.42,2.45),f.push(g);const M=new Or(.42,.14,6,12,Math.PI);return M.rotateY(Math.PI/2),M.translate(0,.48,-2.45),f.push(M),{hull:un(s),turret:un(t),gun:un(o),gear:un(c),track:un(f),muzzleZ:a+.28}}const fc=new Map,dc=new nt,On=new F,ya=new F,gs=new F;function pc(s,e,t,n){const i=n;return[{z:s*.5,xb:e*.22,xm:e*.3,xt:e*.12,yb:i+.04,ym:i+t*.28,yt:i+t*.4},{z:s*.32,xb:e*.38,xm:e*.46,xt:e*.24,yb:i,ym:i+t*.48,yt:i+t*.75},{z:s*.08,xb:e*.42,xm:e*.5,xt:e*.4,yb:i,ym:i+t*.58,yt:i+t},{z:-s*.24,xb:e*.42,xm:e*.5,xt:e*.4,yb:i,ym:i+t*.55,yt:i+t*.94},{z:-s*.42,xb:e*.36,xm:e*.44,xt:e*.28,yb:i,ym:i+t*.4,yt:i+t*.68},{z:-s*.5,xb:e*.28,xm:e*.34,xt:e*.18,yb:i+.02,ym:i+t*.24,yt:i+t*.42}]}function h_(s){const e=lc(pc(s.length,s.width,s.height,.34)),t=lc(pc(s.turretLen,s.turretWid,s.turretH,.02).map(M=>({...M,yb:Math.max(0,M.yb-.02)}))),n=new rn(.16,.18,.16,8);n.translate(0,s.turretH+.08,-s.turretLen*.05);const i=new an(s.turretWid*.55,s.turretH*.55,.28);i.translate(0,s.turretH*.48,s.turretLen*.42);const r=un([t,n,i]),a=new rn(s.gunR,s.gunR*.92,s.gunLen,8);a.rotateX(Math.PI/2),a.translate(0,0,s.gunLen/2);const o=new rn(s.gunR*1.7,s.gunR*1.7,s.gunR*3,8);o.rotateX(Math.PI/2),o.translate(0,0,s.gunLen);const l=un([a,o]),c=[],h=.3,d=s.length*.72;for(let M=0;M<s.wheels;M++){const m=-d/2+d/Math.max(1,s.wheels-1)*M;for(const p of[-1,1]){const x=new rn(h,h,.22,8);x.rotateZ(Math.PI/2),x.translate(p*(s.width*.46),h,m),c.push(x)}}const u=M=>{for(const m of[-1,1]){const p=new rn(h*1.15,h*1.15,.2,8);p.rotateZ(Math.PI/2),p.translate(m*(s.width*.46),h,M),c.push(p)}};u(s.length*.42),u(-s.length*.44);const f=un(c),g=new an(.36,.52,s.length*.96);return{hull:e,turret:r,gun:l,gear:f,track:g,muzzleZ:s.gunLen+s.gunR*2}}function u_(s){let e=fc.get(s.id);return e||(e=s.id==="halberd"?{...c_()}:h_(s),fc.set(s.id,e)),e}class ba{spec;team;name;player;id;hp;alive=!0;x=0;y=0;z=0;yaw=0;speed=0;yawVel=0;turretYaw=0;turretYawVel=0;gunPitch=0;reload=0;dispersion;detected=0;shots=0;hits=0;pens=0;kills=0;damageDealt=0;blocked=0;distance=0;lastMark=0;aiFire=!1;group;turret;gun;muzzle;hullMesh;turretMesh;hullBox;turretBox;visualUp=new F(0,1,0);yVel=0;trackMat;dustAcc=0;splashAcc=0;constructor(e,t,n,i,r,a,o,l,c){this.id=e,this.spec=t,this.team=n,this.name=i,this.player=r,this.hp=t.hp,this.dispersion=t.baseDisp;const h=u_(t),d=t.id==="halberd",u=new zt({map:a,roughness:d?.68:.62,metalness:d?.16:.2,envMapIntensity:d?.32:.85});this.group=new Hn,this.group.name=i,this.hullMesh=new xt(h.hull,u),this.hullMesh.castShadow=!0,this.hullMesh.receiveShadow=!0,this.group.add(this.hullMesh);const f=new xt(h.gear,l);f.castShadow=!0,this.group.add(f);const g=o.clone();g.wrapS=g.wrapT=Sn,g.repeat.set(1,5),g.needsUpdate=!0,this.trackMat=new zt({map:g,roughness:d?.62:.86,metalness:d?.72:.35,color:d?16777215:9077108,envMapIntensity:.8});for(const p of[-1,1]){const x=new xt(h.track,this.trackMat);x.position.set(p*(d?1.22:t.width*.5+.02),d?0:.3,0),x.castShadow=!0,this.group.add(x)}this.turret=new Hn,this.turret.position.set(0,.34+t.height,t.turretZ),this.group.add(this.turret),this.turretMesh=new xt(h.turret,u),this.turretMesh.castShadow=!0,this.turretMesh.receiveShadow=!0,this.turret.add(this.turretMesh),this.gun=new Hn,this.gun.position.set(0,t.turretH*.42,t.turretLen*.2),this.turret.add(this.gun);const M=d?c.clone():c;d&&(M.map=g,M.color.set(16777215),M.metalness=.84,M.roughness=.38);const m=new xt(h.gun,M);m.castShadow=!0,this.gun.add(m),this.muzzle=new At,this.muzzle.position.set(0,0,h.muzzleZ),this.gun.add(this.muzzle),h.hull.computeBoundingBox(),h.turret.computeBoundingBox(),this.hullBox=h.hull.boundingBox.clone(),this.turretBox=h.turret.boundingBox.clone()}spawn(e,t,n,i){this.x=e,this.z=t,this.yaw=n,this.turretYaw=n,this.speed=0,this.yawVel=0,this.y=i.sample(e,t).h,this.alive=!0,this.hp=this.spec.hp,this.reload=0,this.dispersion=this.spec.baseDisp,this.applyVisual(i.sample(e,t))}integrate(e,t,n){if(!this.alive)return;const i=this.spec,r=n.sample(this.x,this.z),[a,o]=xi(this.yaw),l=n.sample(this.x+a*2.2,this.z+o*2.2),c=n.sample(this.x-a*2.2,this.z-o*2.2),h=(l.h-c.h)/4.4,d=-9.8*h/Math.sqrt(1+h*h),u=Math.min(1,Math.abs(this.speed)/i.maxSpeed),f=Fe(e.throttle,-1,1);let g=0;if(Math.abs(f)>.04){const b=Math.sign(f),_=i.accel*(i.lowGear+(1-i.lowGear)*(1-u));g=b*_*(b<0?.72:1)}const M=f>.2&&this.speed<-.4||f<-.2&&this.speed>.4;let m=g+d-this.speed*i.drag;Math.abs(this.speed)>.25&&(m-=Math.sign(this.speed)*i.rollResist),M&&(m-=Math.sign(this.speed)*i.brake),r.waterDepth>.2&&(m-=this.speed*(1.2+r.waterDepth*2.4)),this.speed+=m*t,this.speed=Fe(this.speed,-i.reverse,i.maxSpeed),Math.abs(f)<.04&&Math.abs(this.speed)<.18&&Math.abs(d)<.35&&(this.speed=0);const p=i.neutralTurn+(i.turn-i.neutralTurn)*Math.min(1,Math.abs(this.speed)/i.maxSpeed),x=Fe(e.steer,-1,1)*p,T=i.yawAccel*t;this.yawVel+=Fe(x-this.yawVel,-T,T),this.yaw+=this.yawVel*t;const[v,w]=xi(this.yaw);this.x+=v*this.speed*t,this.z+=w*this.speed*t,this.distance+=Math.abs(this.speed)*t,this.trackMat.map.offset.y=this.distance*.22}collide(e,t,n){if(!this.alive)return;const i=f_();this.x=Fe(this.x,-i,i),this.z=Fe(this.z,-i,i);const r=e.sample(this.x,this.z);if(r.deep){let a=this.x,o=this.z,l=r.waterDepth;for(const[c,h]of[[3,0],[-3,0],[0,3],[0,-3]]){const d=e.sample(this.x+c,this.z+h);d.waterDepth<l&&(l=d.waterDepth,a=this.x+c,o=this.z+h)}this.x+=(a-this.x)*.65,this.z+=(o-this.z)*.65,this.speed*=.4}for(let a=0;a<2;a++){const o=this.bodyCircles();for(const l of o){for(const c of t){if(c.y+c.hy<.45||c.y-c.hy>1.8||Math.abs(l.x-c.x)>c.hx+c.hz+l.r+1||Math.abs(l.z-c.z)>c.hx+c.hz+l.r+1)continue;const h=d_(l.x,l.z,l.r,c);h&&(this.x+=h[0],this.z+=h[1],l.x+=h[0],l.z+=h[1])}for(const c of n){const h=l.x-c.x,d=l.z-c.z,u=Math.hypot(h,d),f=l.r+c.r;if(u<f&&u>1e-4){const g=(f-u)/u;this.x+=h*g,this.z+=d*g,l.x+=h*g,l.z+=d*g}}}}}stick(e,t){const n=e.sample(this.x,this.z),r=(n.h+.02-this.y)*this.spec.susp-this.yVel*this.spec.suspDamp;this.yVel=Fe(this.yVel+r*t,-4,4),this.y+=this.yVel*t,gs.set(n.nx,n.ny,n.nz),gs.lengthSq()<.2&&gs.set(0,1,0),gs.normalize();const a=this.spec.id==="bulwark"?4.5:this.spec.id==="lynx"?10:7;return this.visualUp.lerp(gs,1-Math.exp(-a*t)).normalize(),n}applyVisual(e){const[t,n]=xi(this.yaw);On.set(t,0,n),On.addScaledVector(this.visualUp,-On.dot(this.visualUp)),On.lengthSq()<1e-4&&On.set(t,0,n),On.normalize(),ya.crossVectors(this.visualUp,On).normalize(),On.crossVectors(ya,this.visualUp).normalize(),dc.makeBasis(ya,this.visualUp,On),this.group.position.set(this.x,this.y,this.z),this.group.quaternion.setFromRotationMatrix(dc),this.group.updateMatrixWorld(!0)}aim(e,t,n){if(!this.alive)return;const i=this.spec.turretTurn*n,r=Fe(dh(this.turretYaw,e),-i,i);this.turretYawVel=n>0?r/n:0,this.turretYaw+=r;const a=Fe(t,-this.spec.dep,this.spec.elev),o=this.spec.gunSlew*n;this.gunPitch+=Fe(a-this.gunPitch,-o,o),this.turret.rotation.y=this.turretYaw-this.yaw,this.gun.rotation.x=-this.gunPitch}settle(e){const t=this.spec,n=Math.min(1,Math.abs(this.speed)/t.maxSpeed),i=Math.min(1,Math.abs(this.yawVel)/Math.max(.15,t.turn)),r=Math.min(1,Math.abs(this.turretYawVel)/Math.max(.12,t.turretTurn)),a=t.baseDisp+t.moveDisp*n+t.hullDisp*i+t.turretDisp*r;a>this.dispersion?this.dispersion=a:this.dispersion=fh(this.dispersion,a,t.aimRate,e),this.reload>0&&(this.reload=Math.max(0,this.reload-e))}fired(){this.reload=this.spec.reload,this.dispersion+=this.spec.fireDisp,this.shots++}kill(){this.alive&&(this.alive=!1,this.speed=0,this.hp=0,this.group.traverse(e=>{const t=e;if(!t.isMesh)return;const n=t.material;if(n instanceof zt){const i=n.clone();i.color.multiplyScalar(.32),i.emissive.setHex(2756620),i.emissiveIntensity=.4,t.material=i}}))}bodyCircles(){const[e,t]=xi(this.yaw),n=this.spec.length*.22,i=this.spec.width*.4;return[{x:this.x+e*n,z:this.z+t*n,r:i},{x:this.x-e*n,z:this.z-t*n,r:i}]}exhaust(e,t,n,i){if(this.alive){if(Math.abs(this.speed)>1.6&&(this.dustAcc+=e*Math.abs(this.speed),this.dustAcc>.09)){this.dustAcc=0;const[r,a]=xi(this.yaw);n(this.x-r*this.spec.length*.4,this.y+.3,this.z-a*this.spec.length*.4)}t.waterDepth>.12&&Math.abs(this.speed)>1.5&&(this.splashAcc+=e,this.splashAcc>.12&&(this.splashAcc=0,i(this.x,t.ground+.1,this.z)))}}}function f_(){return 196}function d_(s,e,t,n){const[i,r]=zr(s-n.x,e-n.z,n.rot),a=Fe(i,-n.hx,n.hx),o=Fe(r,-n.hz,n.hz);let l=i-a,c=r-o,h=Math.hypot(l,c);if(h>=t)return null;if(h<1e-4){const m=n.hx-Math.abs(i),p=n.hz-Math.abs(r);m<p?(l=Math.sign(i||1),c=0):(c=Math.sign(r||1),l=0),h=0}const d=l/(h||1),u=c/(h||1),[f,g]=ph(d,u,n.rot),M=t-h;return[f*M,g*M]}function p_(s){for(let e=0;e<s.length;e++){const t=s[e];for(let n=e+1;n<s.length;n++){const i=s[n],r=i.x-t.x,a=i.z-t.z,o=Math.hypot(r,a),l=t.spec.width*.55+i.spec.width*.55;if(o>=l||o<1e-4)continue;const c=(l-o)/o,h=i.spec.mass/(t.spec.mass+i.spec.mass),d=t.spec.mass/(t.spec.mass+i.spec.mass);t.alive&&(t.x-=r*c*h,t.z-=a*c*h),i.alive&&(i.x+=r*c*d,i.z+=a*c*d)}}}function m_(){return{gear:new zt({color:1711130,roughness:.55,metalness:.7}),gun:new zt({color:2764330,roughness:.4,metalness:.78})}}class g_ extends lf{constructor(e){super(e),this.type=Ct}parse(e){const a=function(S,R){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},d=function(S,R,A){R=R||1024;let L=S.pos,U=-1,P=0,z="",B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));for(;0>(U=B.indexOf(`
`))&&P<R&&L<S.byteLength;)z+=B,P+=B.length,L+=128,B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));return-1<U?(S.pos+=P+U+1,z+B.slice(0,U)):!1},u=function(S){const R=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,B;for((S.pos>=S.byteLength||!(z=d(S)))&&a(1,"no header found"),(B=z.match(R))||a(3,"bad initial token"),P.valid|=1,P.programtype=B[1],P.string+=z+`
`;z=d(S),z!==!1;){if(P.string+=z+`
`,z.charAt(0)==="#"){P.comments+=z+`
`;continue}if((B=z.match(A))&&(P.gamma=parseFloat(B[1])),(B=z.match(D))&&(P.exposure=parseFloat(B[1])),(B=z.match(L))&&(P.valid|=2,P.format=B[1]),(B=z.match(U))&&(P.valid|=4,P.height=parseInt(B[1],10),P.width=parseInt(B[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},f=function(S,R,A){const D=R;if(D<8||D>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);D!==(S[2]<<8|S[3])&&a(3,"wrong scanline width");const L=new Uint8Array(4*R*A);L.length||a(4,"unable to allocate buffer space");let U=0,P=0;const z=4*D,B=new Uint8Array(4),H=new Uint8Array(z);let ee=A;for(;ee>0&&P<S.byteLength;){P+4>S.byteLength&&a(1),B[0]=S[P++],B[1]=S[P++],B[2]=S[P++],B[3]=S[P++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=D)&&a(3,"bad rgbe scanline format");let V=0,$;for(;V<z&&P<S.byteLength;){$=S[P++];const de=$>128;if(de&&($-=128),($===0||V+$>z)&&a(3,"bad scanline data"),de){const Se=S[P++];for(let q=0;q<$;q++)H[V++]=Se}else H.set(S.subarray(P,P+$),V),V+=$,P+=$}const j=D;for(let de=0;de<j;de++){let Se=0;L[U]=H[de+Se],Se+=D,L[U+1]=H[de+Se],Se+=D,L[U+2]=H[de+Se],Se+=D,L[U+3]=H[de+Se],U+=4}ee--}return L},g=function(S,R,A,D){const L=S[R+3],U=Math.pow(2,L-128)/255;A[D+0]=S[R+0]*U,A[D+1]=S[R+1]*U,A[D+2]=S[R+2]*U,A[D+3]=1},M=function(S,R,A,D){const L=S[R+3],U=Math.pow(2,L-128)/255;A[D+0]=Zs.toHalfFloat(Math.min(S[R+0]*U,65504)),A[D+1]=Zs.toHalfFloat(Math.min(S[R+1]*U,65504)),A[D+2]=Zs.toHalfFloat(Math.min(S[R+2]*U,65504)),A[D+3]=Zs.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=u(m),x=p.width,T=p.height,v=f(m.subarray(m.pos),x,T);let w,b,_;switch(this.type){case Qt:_=v.length/4;const S=new Float32Array(_*4);for(let A=0;A<_;A++)g(v,A*4,S,A*4);w=S,b=Qt;break;case Ct:_=v.length/4;const R=new Uint16Array(_*4);for(let A=0;A<_;A++)M(v,A*4,R,A*4);w=R,b=Ct;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:T,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b,colorSpace:$i,minFilter:Et,magFilter:Et,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}class __ extends g_{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}const x_=""+new URL("grass_diff-vig3bC4b.jpg",import.meta.url).href,v_=""+new URL("grass_nor-Cp8RKkAj.jpg",import.meta.url).href,M_=""+new URL("grass_rough-Cb20WbX1.jpg",import.meta.url).href,S_=""+new URL("dirt_diff-B9P7P3b1.jpg",import.meta.url).href,y_=""+new URL("dirt_nor-BR9vrr9r.jpg",import.meta.url).href,b_=""+new URL("dirt_rough-Db88IvB1.jpg",import.meta.url).href,E_=""+new URL("rock_diff-Clx6WbHJ.jpg",import.meta.url).href,T_=""+new URL("rock_nor-B8WSHJ2I.jpg",import.meta.url).href,w_=""+new URL("rock_rough-rTGZWDKj.jpg",import.meta.url).href,A_=""+new URL("sand_diff-DqxI4022.jpg",import.meta.url).href,R_=""+new URL("sand_nor-BtdEeoec.jpg",import.meta.url).href,C_=""+new URL("bark_diff-BEBFBPsY.jpg",import.meta.url).href,P_=""+new URL("bark_nor-DnOM-dyB.jpg",import.meta.url).href,D_=""+new URL("concrete_diff-5XU0sVYe.jpg",import.meta.url).href,L_=""+new URL("concrete_nor-CXvJtMJ2.jpg",import.meta.url).href,N_=""+new URL("metal_diff-BDFqcIP1.jpg",import.meta.url).href,I_=""+new URL("metal_nor-B-V-k_xH.jpg",import.meta.url).href,U_=""+new URL("metal_rough-Zm_YpI4I.jpg",import.meta.url).href,F_=""+new URL("sky-C35ymwQp.hdr",import.meta.url).href;function Go(s,e,t=!1){const n=new Ku(s);return n.colorSpace=e?$t:hn,n.wrapS=n.wrapT=t?Sn:n.wrapS,t&&(n.wrapS=Sn,n.wrapT=Sn),n.needsUpdate=!0,n}function Sr(s,e,t){let n=0,i=1,r=1,a=0;for(let o=0;o<4;o++)n+=s(e*r,t*r)*i,a+=i,i*=.5,r*=2;return n/a}function O_(s,e,t,n){const i=Sr(s,e,t),r=Sr(s,e-n,t),a=Sr(s,e,t-n),o=Sr(s,e-n,t-n),l=e/n,c=t/n,h=l*l*(3-2*l),d=c*c*(3-2*c);return Jt(Jt(i,r,h),Jt(a,o,h),d)}async function z_(){await new Promise(s=>setTimeout(s,0))}function En(s,e,t,n=!0){const i=document.createElement("canvas");i.width=i.height=s;const r=i.getContext("2d");if(!r)throw new Error("2d context unavailable");return e(r,s),Go(i,t,n)}function Ft(s,e,t){const n=s.load(e);return n.colorSpace=t?$t:hn,n.wrapS=n.wrapT=Sn,n.anisotropy=8,n}function B_(s){return s(.08,"Unrolling surveyed ground"),new Promise((e,t)=>{const n=new Jc,i=new cf(n),r={grass:Ft(i,x_,!0),grassN:Ft(i,v_,!1),grassR:Ft(i,M_,!1),dirt:Ft(i,S_,!0),dirtN:Ft(i,y_,!1),dirtR:Ft(i,b_,!1),rock:Ft(i,E_,!0),rockN:Ft(i,T_,!1),rockR:Ft(i,w_,!1),sand:Ft(i,A_,!0),sandN:Ft(i,R_,!1),bark:Ft(i,C_,!0),barkN:Ft(i,P_,!1),concrete:Ft(i,D_,!0),concreteN:Ft(i,L_,!1),metal:Ft(i,N_,!0),metalN:Ft(i,I_,!1),metalR:Ft(i,U_,!1),sky:new __(n).load(F_)};r.sky.mapping=yr,r.sky.colorSpace=$i,n.onLoad=()=>e(r),n.onError=a=>t(new Error(`Texture failed: ${a}`))})}async function k_(s){const e=await B_(s);s(.55,"Weathering the company");const t=En(256,(u,f)=>{const g=u.createImageData(f,f),M=Bo(Bn(99));for(let m=0;m<f;m++)for(let p=0;p<f;p++){const x=O_(M,p*1.4,m*1.4,f*1.4),T=Math.floor(Fe(x*.5+.5,0,1)*255),v=(m*f+p)*4;g.data[v]=g.data[v+1]=g.data[v+2]=T,g.data[v+3]=255}u.putImageData(g,0,0)},!1,!0),n=En(256,(u,f)=>{u.fillStyle="#d9d0bd",u.fillRect(0,0,f,f);const g=Bn(3);for(let M=0;M<40;M++)u.fillStyle=`rgba(90, 70, 50, ${.04+g()*.08})`,u.beginPath(),u.ellipse(g()*f,g()*f,10+g()*40,8+g()*24,g()*3,0,Math.PI*2),u.fill();u.strokeStyle="rgba(60,40,30,0.25)",u.lineWidth=1;for(let M=0;M<8;M++)u.beginPath(),u.moveTo(g()*f,g()*f),u.lineTo(g()*f,g()*f),u.stroke()},!0),i=En(256,(u,f)=>{u.fillStyle="#c4b5a4",u.fillRect(0,0,f,f);for(let g=0;g<f;g+=28){const M=g/28%2===0?0:22;for(let m=-40;m<f;m+=46){const p=(m+g)%17-8;u.fillStyle=`rgb(${148+p}, ${72+p*.4}, 58)`,u.fillRect(m+M+2,g+2,40,22)}}},!0),r=En(256,(u,f)=>{u.fillStyle="#6e3d32",u.fillRect(0,0,f,f);for(let g=0;g<f;g+=18){u.fillStyle=g%36===0?"#7d4a3c":"#5e342c";for(let M=-20;M<f;M+=22){const m=g/18%2===0?0:11;u.beginPath(),u.moveTo(M+m,g+16),u.lineTo(M+m+11,g+2),u.lineTo(M+m+22,g+16),u.closePath(),u.fill()}}},!0),a=En(256,(u,f)=>{u.fillStyle="#8d877c",u.fillRect(0,0,f,f);const g=Bn(11);for(let M=0;M<f;M+=28){const m=M/28%2===0?0:24;for(let p=-40;p<f;p+=48){const x=(g()-.5)*8;u.fillStyle=`rgb(${120+x}, ${116+x}, ${108+x})`,u.fillRect(p+m+2,M+2,44,24),u.strokeStyle="rgba(50,46,40,0.55)",u.strokeRect(p+m+2,M+2,44,24)}}},!0),o=En(128,(u,f)=>{u.fillStyle="#1c1b18",u.fillRect(0,0,64,f);for(let g=0;g<f;g+=8)u.fillStyle=g%16===0?"#3a342c":"#2a261f",u.fillRect(4,g,56,5),u.fillStyle="#111",u.fillRect(0,g+6,64,2)},!0);o.repeat.set(1,6);const l=(u,f)=>En(256,(g,M)=>{g.fillStyle=u[0],g.fillRect(0,0,M,M);const m=Bn(f);for(let p=0;p<18;p++)g.fillStyle=u[1+p%(u.length-1)],g.globalAlpha=.55+m()*.4,g.beginPath(),g.ellipse(m()*M,m()*M,28+m()*50,18+m()*36,m()*6,0,Math.PI*2),g.fill();g.globalAlpha=1},!0,!0),c=En(128,(u,f)=>{u.fillStyle="#3c7a2e",u.fillRect(0,0,f,f);const g=Bn(21);for(let M=0;M<5;M++){const m=10+g()*(f-20);u.fillStyle=M%2===0?"#5ea33c":"#2d6124",u.fillRect(m,0,7+g()*8,f)}},!0,!1),h=u=>En(128,(f,g)=>{f.clearRect(0,0,g,g),f.translate(g/2,g/2),u==="cinder"?(f.fillStyle="#e0a84a",f.beginPath(),f.moveTo(0,-36),f.lineTo(28,30),f.lineTo(0,14),f.lineTo(-28,30),f.closePath(),f.fill()):(f.fillStyle="#d5dbe3",f.rotate(Math.PI/4),f.fillRect(-22,-22,44,44))},!0,!1),d=En(64,(u,f)=>{const g=u.createRadialGradient(f/2,f/2,2,f/2,f/2,f/2);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(.4,"rgba(255,255,255,0.65)"),g.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=g,u.fillRect(0,0,f,f)},!1,!1);for(const u of[n,i,r])u.wrapS=u.wrapT=Sn,u.repeat.set(3,3);return s(.82,"Painting the company"),await z_(),{...e,cloud:t,plaster:n,timber:i,roof:r,stone:a,track:o,camoCinder:l(["#5e6240","#3e442c","#7a7048","#2f3324"],4),camoSlate:l(["#4e5964","#2c343c","#6a6458","#1e252b"],8),halberd:G_(),blade:c,leaf:V_(),emblemCinder:h("cinder"),emblemSlate:h("slate"),sprite:d,anisotropy:8}}function G_(){const e=document.createElement("canvas");e.width=e.height=1024;const t=e.getContext("2d");if(!t)throw new Error("2d context unavailable");t.fillStyle="#0e2748",t.fillRect(0,0,1024,1024);const n="#e4c898",i="#c9a56a";t.lineJoin="miter",t.lineCap="square";const r=280;for(let c=-r;c<1024+r;c+=r)for(let h=-r;h<1024+r;h+=r){const d=(h+c)/r%2===0;H_(t,h+r*.5,c+r*.5,r*.86,d?n:i,d)}const a=t.getImageData(0,0,1024,1024),o=Bo(Bn(99));for(let c=0;c<1024;c++)for(let h=0;h<1024;h++){const d=(c*1024+h)*4,u=o(h*.04,c*.04)*16,f=o(h*.012,c*.014)>.55?-34:0,g=o(h*.09,c*.09)>.72?18:0;a.data[d]=Fe(a.data[d]+u+f*.5+g,0,255),a.data[d+1]=Fe(a.data[d+1]+u*.85+f+g*.8,0,255),a.data[d+2]=Fe(a.data[d+2]+u*.55+f*.2,0,255)}t.putImageData(a,0,0);const l=Go(e,!0,!0);return l.anisotropy=8,l}function H_(s,e,t,n,i,r){s.save(),s.translate(e,t),r&&s.rotate(Math.PI/2),s.strokeStyle=i,s.fillStyle=i,s.lineWidth=n*.15;const a=n*.5;s.beginPath(),s.moveTo(-a,-a*.15),s.lineTo(-a,-a),s.lineTo(a*.55,-a),s.lineTo(a*.55,a*.15),s.lineTo(-a*.15,a*.15),s.lineTo(-a*.15,-a*.45),s.lineTo(a*.15,-a*.45),s.stroke(),s.beginPath(),s.moveTo(a*.15,a),s.lineTo(a,a),s.lineTo(a,-a*.2),s.lineTo(a*.45,-a*.2),s.stroke(),s.beginPath(),s.arc(0,a*.55,a*.22,.2,Math.PI*1.7),s.stroke(),s.restore()}function V_(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(!t)throw new Error("2d context unavailable");t.fillStyle="#346b2c",t.fillRect(0,0,256,256);const n=Bn(77),i=["#2a5524","#3f7a32","#5a9a40","#1e4a22","#6aaa48","#487a34"];for(let a=0;a<90;a++){const o=n()*256,l=n()*256;t.fillStyle=i[Math.floor(n()*i.length)],t.beginPath(),t.ellipse(o,l,7+n()*14,4+n()*7,n()*3.1,0,Math.PI*2),t.fill()}return Go(e,!0,!1)}class W_{selected="halberd";onDeploy=()=>{};onAgain=()=>{};onGarage=()=>{};onResume=()=>{};onQuit=()=>{};onQuality=()=>{};onVolume=()=>{};onMap=()=>{};qualityButtons=[];allyNodes=[];enemyNodes=[];floaterNodes=[];plateNodes=[];hitTimer=0;constructor(){const e=document.querySelector("#tank-list");if(!e)return;for(const o of yg){const l=Dr[o],c=document.createElement("button");c.type="button",c.className="tank-card"+(o===this.selected?" selected":""),c.dataset.tank=o;const h=Math.round(l.maxSpeed/16.8*100),d=Math.round(l.armorHull[0]/200*100),u=Math.round(l.damage/l.reload/50*100);c.innerHTML=`<span class="role">${l.role}</span><strong>${l.name}</strong><p>${l.blurb}</p>
        ${Ea("Pace",h)}${Ea("Plate",d)}${Ea("Bite",u)}`,c.addEventListener("click",()=>{this.selected=o,e.querySelectorAll(".tank-card").forEach(f=>f.classList.toggle("selected",f.dataset.tank===o))}),e.append(c)}const t=document.querySelector("#quality");for(const[o,l]of["Performance","Balanced","High"].entries()){const c=document.createElement("button");c.type="button",c.textContent=l,c.addEventListener("click",()=>this.onQuality(o)),t?.append(c),this.qualityButtons.push(c)}document.querySelector("#battle")?.addEventListener("click",()=>this.onDeploy(this.selected)),document.querySelector("#again")?.addEventListener("click",()=>this.onAgain()),document.querySelector("#garage")?.addEventListener("click",()=>this.onGarage()),document.querySelector("#resume")?.addEventListener("click",()=>this.onResume()),document.querySelector("#quit")?.addEventListener("click",()=>this.onQuit()),document.querySelector("#minimap-wrap")?.addEventListener("click",()=>this.onMap());const n=document.querySelector("#volume"),i=localStorage.getItem("ashen-volume");n&&i&&(n.value=i),n?.addEventListener("input",()=>{localStorage.setItem("ashen-volume",n.value),this.onVolume(Number(n.value))});const r=document.querySelector("#floaters");for(let o=0;o<24;o++){const l=document.createElement("div");l.className="floater",l.hidden=!0,r?.append(l),this.floaterNodes.push(l)}const a=document.querySelector("#plates");for(let o=0;o<14;o++){const l=document.createElement("div");l.className="plate",l.hidden=!0,l.innerHTML="<b></b><i><span></span></i><em></em>",a?.append(l),this.plateNodes.push(l)}}volume(){const e=document.querySelector("#volume");return e?Number(e.value):.75}setQuality(e){this.qualityButtons.forEach((t,n)=>t.classList.toggle("on",n===e))}progress(e,t){const n=document.querySelector("#load-fill"),i=document.querySelector("#load-label");n&&(n.style.width=`${Math.round(e*100)}%`),i&&(i.textContent=t)}showMenu(){ln("#loading",!1),ln("#menu",!0),ln("#hud",!1),ln("#end",!1),ln("#pause",!1)}showBattle(){ln("#menu",!1),ln("#loading",!1),ln("#end",!1),ln("#pause",!1),ln("#hud",!0)}showPause(e){ln("#pause",e)}showEnd(e){ln("#end",!0);const t=document.querySelector("#end-title"),n=document.querySelector("#end-sub"),i=document.querySelector("#end-stats");t&&(t.textContent=e.title),n&&(n.textContent=e.subtitle),i&&(i.innerHTML=e.rows.map(([r,a])=>`<dt>${r}</dt><dd>${a}</dd>`).join(""))}ensureRosters(e,t){this.allyNodes=mc(document.querySelector("#allies"),e,this.allyNodes),this.enemyNodes=mc(document.querySelector("#enemies"),t,this.enemyNodes)}update(e){Tn("#clock",e.time),Tn("#ally-count",String(e.allies)),Tn("#enemy-count",String(e.enemies));const t=document.querySelector("#hud");t?.classList.toggle("sniper",e.sniper),t?.classList.toggle("ready",e.ready);const n=document.querySelector("#spotted");n&&(n.hidden=!e.spotted);const i=document.querySelector("#banner");i&&(i.hidden=!e.banner,i.textContent=e.banner);const r=document.querySelector("#cap");r&&(r.hidden=!e.cap,r.classList.toggle("bad",e.capBad)),Tn("#cap-label",e.cap);const a=document.querySelector("#cap-fill");a&&(a.style.width=`${Math.round(e.capP*100)}%`),Tn("#tank-name",e.tankName),Tn("#tank-role",e.role),Tn("#speed",`${Math.round(Math.abs(e.speed)*3.6)} km/h`),Tn("#hp-num",String(Math.max(0,Math.round(e.hp))));const o=document.querySelector("#hp"),l=e.maxHp>0?e.hp/e.maxHp:0;o?.classList.toggle("low",l<.3),o?.classList.toggle("mid",l>=.3&&l<.6);const c=document.querySelector("#hp-fill");c&&(c.style.width=`${Math.max(0,l)*100}%`);const h=e.reloadTime>0?1-e.reload/e.reloadTime:1,d=document.querySelector("#reload-fill");d&&(d.style.width=`${Math.max(0,Math.min(1,h))*100}%`);const u=document.querySelector("#aim-circle");if(u){const m=Math.max(12,e.aimPx*2);u.style.width=`${m}px`,u.style.height=`${m}px`}const f=document.querySelector("#gun-mark");if(f&&(f.hidden=!e.gunVisible,f.style.left=`${e.gunX}px`,f.style.top=`${e.gunY}px`),e.hit){const m=document.querySelector("#hit-mark");m?.classList.remove("show","bounce"),m?.offsetWidth,m?.classList.add("show"),e.hit==="bounce"&&m?.classList.add("bounce")}const g=document.querySelector("#hit-flash");if(g){const m=50+Math.sin(e.hurtAngle)*46,p=50-Math.cos(e.hurtAngle)*46;g.style.setProperty("--hx",`${m}%`),g.style.setProperty("--hy",`${p}%`),g.style.opacity=String(Math.min(1,e.hurt))}Tn("#dealt-num",Math.round(e.dealt).toLocaleString()),Tn("#fps",`${e.fps} fps`),gc(this.allyNodes,e.alliesRows),gc(this.enemyNodes,e.enemyRows);const M=document.querySelector("#feed");M&&(M.innerHTML=e.feed.map(m=>`<p class="${m.kind}">${m.text}</p>`).join(""));for(let m=0;m<this.floaterNodes.length;m++){const p=this.floaterNodes[m],x=e.floaters[m];if(!x){p.hidden=!0;continue}p.hidden=!1,p.className=`floater ${x.kind}`,p.style.left=`${x.x}px`,p.style.top=`${x.y}px`,p.textContent=x.text,p.style.opacity=String(Math.max(0,Math.min(1,x.life)))}for(let m=0;m<this.plateNodes.length;m++){const p=this.plateNodes[m],x=e.plates[m];if(!x||!x.show){p.hidden=!0;continue}p.hidden=!1,p.className=x.ally?"plate ally":"plate enemy",p.style.left=`${x.x}px`,p.style.top=`${x.y}px`;const T=p.querySelector("b"),v=p.querySelector("span"),w=p.querySelector("em");T&&(T.textContent=x.name),w&&(w.textContent=String(Math.max(0,Math.round(x.hp)))),v&&(v.style.width=`${x.max>0?Math.max(0,x.hp/x.max)*100:0}%`)}this.hitTimer}drawMap(e,t,n,i,r){const a=document.querySelector("#minimap"),o=a?.getContext("2d");if(!a||!o)return;o.clearRect(0,0,256,256),o.drawImage(e,0,0,256,256);const l=h=>(h+210)/420*256,c=h=>(210-h)/420*256;xc(o,l(0),c(176),16,r.north,"#e0a84a"),xc(o,l(0),c(-176),16,r.south,"#7f93ad");for(const h of i)_c(o,l(h.x),c(h.z),h.dead?"#5a403c":"#e36d5c");for(const h of n)_c(o,l(h.x),c(h.z),h.dead?"#44523a":"#9dce7c");t&&(o.save(),o.translate(l(t.x),c(t.z)),o.rotate(-t.yaw),o.fillStyle="#f4efe2",o.beginPath(),o.moveTo(0,-7),o.lineTo(5,6),o.lineTo(-5,6),o.closePath(),o.fill(),o.restore())}}function Ea(s,e){return`<div class="stat"><span>${s}</span><i><span style="width:${Math.max(6,Math.min(100,e))}%"></span></i></div>`}function ln(s,e){const t=document.querySelector(s);t&&(t.hidden=!e)}function Tn(s,e){const t=document.querySelector(s);t&&t.textContent!==e&&(t.textContent=e)}function mc(s,e,t){if(!s)return t;s.innerHTML="";const n=[];for(let i=0;i<e;i++){const r=document.createElement("div");r.className="row-tank",r.innerHTML='<span class="tag"></span><div><b></b><div class="mini"><span></span></div></div><em></em>',s.append(r),n.push(r)}return n}function gc(s,e){for(let t=0;t<s.length;t++){const n=s[t],i=e[t];if(!i)continue;n.classList.toggle("dead",i.dead),n.classList.toggle("self",i.self);const r=n.querySelector(".tag"),a=n.querySelector("b"),o=n.querySelector(".mini span"),l=n.querySelector("em");r&&(r.textContent=i.role.slice(0,1)),a&&(a.textContent=i.name),l&&(l.textContent=i.dead?"—":String(Math.max(0,Math.round(i.hp)))),o&&(o.style.width=`${i.max>0?Math.max(0,i.hp/i.max)*100:0}%`)}}function _c(s,e,t,n){s.fillStyle=n,s.beginPath(),s.arc(e,t,3.2,0,Math.PI*2),s.fill()}function xc(s,e,t,n,i,r){s.strokeStyle=r,s.lineWidth=2,s.beginPath(),s.arc(e,t,n,0,Math.PI*2),s.stroke(),i>0&&(s.beginPath(),s.arc(e,t,n-3,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,i)),s.stroke())}const X_=`
varying vec3 vWorld;
varying vec2 vUv;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,q_=`
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
`;function Y_(s,e){const t=new Lt,n=Te.half,i=.02,r=new Float32Array([-n,i,-n,n,i,-n,-n,i,n,n,i,n]),a=new Float32Array([0,0,1,0,0,1,1,1]);t.setAttribute("position",new Ye(r,3)),t.setAttribute("uv",new Ye(a,2)),t.setIndex([0,2,1,1,2,3]),t.computeVertexNormals();const o=new yt({transparent:!0,depthWrite:!1,uniforms:{uField:{value:s},uSky:{value:e},uSun:{value:Xr.clone()},uFogColor:{value:new F(Ts.r,Ts.g,Ts.b)},uFogDensity:{value:.00225},uTime:{value:0}},vertexShader:X_,fragmentShader:q_}),l=new xt(t,o);return l.renderOrder=2,l.name="water",l}function Z_(s,e){s.material.uniforms.uTime.value=e}const Ta=1/60,wa=new F,tn=new F,$_=new F,_s=new F,vc=new F;class K_{phase="boot";capTime=48;canvas;ui=new W_;audio=new Vg;input;scene=new Uu;camera=new cn(58,1,.15,1400);renderer;terrain;scenery;skyMesh;waterMesh;particles;tracks;composer=null;combat;ai=new Og;tex;sun;boom=new Ll(16742195,0,26,2);flash=new Ll(16769194,0,12,2);tanks=[];player=null;profile=Pr[Sg()];lockQuality;counts={trees:1,broad:1,pines:1,grass:1,reeds:1,rocks:1};camYaw=0;camPitch=-.32;camDist=15;sniper=0;look=new F;timeLeft=420;countdown=0;capNorth=0;capSouth=0;elapsed=0;acc=0;last=0;fps=60;fpsFrames=0;fpsAccum=0;lowTimer=0;shake=0;hurt=0;hurtAngle=0;hit="";feed=[];floaters=[];result=null;pausedFrom="battle";mapBig=!1;platePoint=new F;constructor(){const e=document.querySelector("#view");if(!(e instanceof HTMLCanvasElement))throw new Error("Missing view canvas");this.canvas=e;const t=document.querySelector("#input-layer"),n=document.querySelector("#stick"),i=document.querySelector("#knob");if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement)||!(i instanceof HTMLElement))throw new Error("Missing touch controls");this.input=new Wg(t,n,i),this.lockQuality=new URLSearchParams(location.search).has("quality"),this.ui.onDeploy=r=>{this.audio.unlock(),this.start(r)},this.ui.onAgain=()=>{this.audio.unlock(),this.player&&this.start(this.player.spec.id)},this.ui.onGarage=()=>this.garage(),this.ui.onResume=()=>this.resume(),this.ui.onQuit=()=>this.garage(),this.ui.onQuality=r=>this.applyQuality(r),this.ui.onVolume=r=>this.audio.setVolume(r),this.ui.onMap=()=>{this.mapBig=!this.mapBig,document.querySelector("#minimap-wrap")?.classList.toggle("big",this.mapBig)},this.audio.setVolume(this.ui.volume()),document.addEventListener("visibilitychange",()=>{document.hidden?this.audio.suspend():this.audio.resume()})}async boot(){this.renderer=new ug({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.renderer.outputColorSpace=$t,this.renderer.toneMapping=Br,this.renderer.toneMappingExposure=.82,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ms,this.renderer.setClearColor(Ts,1),this.ui.progress(.02,"Opening the valley"),this.tex=await k_((r,a)=>this.ui.progress(.02+r*.7,a));const e=this.renderer.capabilities.getMaxAnisotropy();for(const r of Object.values(this.tex))r&&typeof r=="object"&&"anisotropy"in r&&(r.anisotropy=Math.min(8,e));this.ui.progress(.78,"Raising Emberfield"),await j_(),this.terrain=new jg(this.tex),this.scene.add(this.terrain.mesh),this.skyMesh=a_(),this.waterMesh=Y_(this.terrain.field,this.tex.sky),this.scene.add(this.waterMesh),this.scenery=e_(this.terrain,this.tex),this.scene.add(this.scenery.group),this.counts={trees:this.scenery.trunks.count,broad:this.scenery.broad.count,pines:this.scenery.pines.count,grass:this.scenery.grass.count,reeds:this.scenery.reeds.count,rocks:this.scenery.rocks.count},this.particles=new qg(this.tex.sprite,this.profile.particles);for(const r of this.particles.objects)this.scene.add(r);this.tracks=new Yg,this.scene.add(this.tracks.mesh),this.combat=new Pg(this.scene),this.scene.fog=new Lo(Ts,.0034),this.scene.add(l_());const t=new Is(this.renderer);t.compileEquirectangularShader();const n=t.fromEquirectangular(this.tex.sky);this.scene.environment=n.texture,this.scene.environmentIntensity=1,this.scene.background=this.tex.sky,t.dispose(),this.sun=new df(16773330,2.45),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(this.profile.shadow,this.profile.shadow),this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=340,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.sun.shadow.radius=2.5,this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.add(new hf(12043992,6970178,.62)),this.scene.add(new pf(9674928,.18)),this.scene.add(this.boom),this.scene.add(this.flash),this.applyQuality(this.profile.id),this.ui.setQuality(this.profile.id),this.resize(),window.addEventListener("resize",()=>this.resize()),this.phase="menu",this.ui.progress(1,"Company ready"),this.ui.showMenu(),document.body.dataset.phase="menu";const i=new URLSearchParams(location.search).get("autostart");this.publish(),(i==="lynx"||i==="vanguard"||i==="bulwark"||i==="halberd")&&this.start(i),this.last=performance.now(),this.renderer.setAnimationLoop(r=>this.frame(r))}start(e){this.clearMatch();const t=m_(),n=ic(0),i=ic(1),r=new ba(0,Dr[e],0,nc[0],!0,this.paintFor(e,0),this.trackFor(e),t.gear,t.gun);r.spawn(n[2].x,n[2].z,n[2].yaw,this.terrain),this.tanks.push(r),this.player=r;const a=n.filter((l,c)=>c!==2);Eg.forEach((l,c)=>{const h=a[c],d=new ba(this.tanks.length,Dr[l],0,nc[c+1],!1,this.paintFor(l,0),this.trackFor(l),t.gear,t.gun);d.spawn(h.x,h.z,h.yaw,this.terrain),this.tanks.push(d)}),Tg.forEach((l,c)=>{const h=i[c],d=new ba(this.tanks.length,Dr[l],1,bg[c],!1,this.paintFor(l,1),this.trackFor(l),t.gear,t.gun);d.spawn(h.x,h.z,h.yaw,this.terrain),this.tanks.push(d)});for(const l of this.tanks)this.scene.add(l.group);this.ai.bind(this.tanks),this.ui.ensureRosters(7,7),this.timeLeft=420;const o=new URLSearchParams(location.search).get("countdown");this.countdown=o===null?3:Math.max(0,Number(o)),this.capNorth=0,this.capSouth=0,this.result=null,this.feed=[],this.floaters=[],this.camYaw=0,this.camPitch=new URLSearchParams(location.search).get("close")==="1"?-.18:-.3,this.camDist=new URLSearchParams(location.search).get("close")==="1"?8.5:15,this.sniper=0,this.phase="countdown",this.input.setEnabled(!0),this.ui.showBattle(),document.body.dataset.phase="countdown",this.player&&this.look.set(this.player.x,this.player.y+2,this.player.z)}garage(){this.clearMatch(),this.phase="menu",this.input.setEnabled(!1),this.ui.showMenu(),document.body.dataset.phase="menu",this.audio.silenceEngine()}resume(){this.phase==="pause"&&(this.phase=this.pausedFrom,this.input.setEnabled(!0),this.ui.showPause(!1),document.body.dataset.phase=this.phase)}clearMatch(){for(const e of this.tanks)e.group.removeFromParent();this.tanks=[],this.player=null,this.combat?.clear(),this.result=null}frame(e){const t=Math.min(.05,(e-this.last)/1e3);if(this.last=e,this.elapsed+=t,this.fpsAccum+=t,this.fpsFrames++,this.fpsAccum>=.4&&(this.fps=Math.round(this.fpsFrames/this.fpsAccum),this.fpsFrames=0,this.fpsAccum=0,!this.lockQuality&&this.phase==="battle"&&(this.elapsed>4&&this.fps<50?this.lowTimer+=.4:this.lowTimer=0,this.lowTimer>1.6&&this.profile.id>0&&(this.lowTimer=0,this.applyQuality(this.profile.id-1),this.ui.setQuality(this.profile.id)))),this.input.pauseEdge&&(this.input.pauseEdge=!1,this.phase==="battle"||this.phase==="countdown"?(this.pausedFrom=this.phase,this.phase="pause",this.input.setEnabled(!1),this.ui.showPause(!0),document.body.dataset.phase="pause"):this.phase==="pause"&&this.resume()),this.input.mapEdge&&(this.input.mapEdge=!1,this.ui.onMap()),this.phase==="battle"||this.phase==="countdown"){this.acc+=t;let n=0;for(;this.acc>=Ta&&n<4;){try{this.simulate(Ta)}catch(i){console.error(i),this.acc=0;break}this.acc-=Ta,n++}}else this.acc=0;this.present(t),this.composer&&this.profile.id>0?this.composer.render():this.renderer.render(this.scene,this.camera)}simulate(e){if(!this.player)return;this.input.sample();const t=this.phase==="battle",n=new Map;for(const i of this.tanks)i.alive&&(t?i.player?n.set(i.id,{throttle:this.input.throttle,steer:this.input.steer}):n.set(i.id,this.ai.drive(i,this.tanks,this.terrain,e)):n.set(i.id,{throttle:0,steer:0}));for(const i of this.tanks)if(i.alive&&(i.integrate(n.get(i.id)??{throttle:0,steer:0},e,this.terrain),t&&i.alive&&Math.abs(i.speed)>1.4&&i.distance-i.lastMark>.65)){i.lastMark=i.distance;const r=this.terrain.sample(i.x,i.z);this.tracks.stamp(i.x,r.h,i.z,i.yaw,i.spec.width)}for(const i of this.tanks)i.collide(this.terrain,this.scenery.solids,this.scenery.posts);p_(this.tanks);for(const i of this.tanks){const r=i.stick(this.terrain,e);i.applyVisual(r),i.exhaust(e,r,(a,o,l)=>this.particles.dust(a,o,l),(a,o,l)=>this.particles.splash(a,o,l)),i.settle(e)}if(Fg(this.tanks,this.terrain,this.scenery.solids,this.scenery.posts,e),this.player.alive){const i=this.aimRay(this.player),r=this.rayHit(i.ox,i.oy,i.oz,i.dx,i.dy,i.dz),a=Math.atan2(r.x-this.player.x,r.z-this.player.z),o=Math.hypot(r.x-this.player.x,r.z-this.player.z),l=_h(o,r.y-(this.player.y+1.6),this.player.spec.shellSpeed);this.player.aim(a,l,e)}for(const i of this.tanks)!i.player&&i.alive&&this.ai.aim(i,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts,e);if(t){this.player.alive&&this.input.consumeFire()?this.combat.tryFire(this.player):this.input.consumeFire();for(const i of this.tanks)i.aiFire&&(this.combat.tryFire(i),i.aiFire=!1);this.combat.update(e,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts),this.consumeEvents(),this.updateCaps(e),this.timeLeft-=e,this.checkEnd()}else this.phase==="countdown"&&(this.input.consumeFire(),this.countdown-=e,this.countdown<=0&&(this.phase="battle",document.body.dataset.phase="battle"));for(const i of this.floaters)i.life-=e;this.floaters=this.floaters.filter(i=>i.life>0);for(const i of this.feed)i.age+=e;this.feed=this.feed.filter(i=>i.age<6).slice(0,5)}present(e){const t=this.phase==="menu"||this.phase==="boot";if(new URLSearchParams(location.search).get("view")==="hero"&&this.player&&this.player)this.camera.position.set(this.player.x+8.5,this.player.y+3.4,this.player.z+6.2),this.camera.lookAt(this.player.x,this.player.y+1.3,this.player.z+.4),this.camera.fov=42,this.camera.updateProjectionMatrix();else if(t&&this.terrain){const i=this.elapsed*.045,r=70+Math.cos(i)*48,a=90+Math.sin(i)*26,o=this.terrain.sample(r,a).h+18;this.camera.position.set(r,o,a),this.camera.lookAt(116,this.terrain.sample(116,52).h+5,52),this.camera.fov=58,this.camera.updateProjectionMatrix()}else if(this.player){const i=this.input.consumeLook();this.camYaw-=i.x*this.input.sens,this.camPitch-=i.y*this.input.sens,this.camPitch=Fe(this.camPitch,this.sniper>.5?-.45:-1.05,.42),this.camDist=Fe(this.camDist+this.input.zoomDelta*.01,6,26),this.input.zoomDelta=0;const r=this.input.isSniper()&&this.player.alive&&(this.phase==="battle"||this.phase==="countdown");this.sniper=fh(this.sniper,r?1:0,9,e),this.input.setSniper(this.sniper>.5);const a=this.subject();if(a){wa.set(a.x,a.y+1.75,a.z),this.look.lengthSq()<1&&this.look.copy(wa),this.look.lerp(wa,1-Math.exp(-8*e));const o=this.aimRay(a);tn.set(o.dx,o.dy,o.dz);const l=this.look.clone().addScaledVector(tn,-this.camDist),c=this.pullCamera(this.look,l),h=new F(a.x,a.y+2.4,a.z);this.camera.position.copy(c).lerp(h,this.sniper);const d=this.look.clone().lerp(h.clone().add(tn),this.sniper);if(this.shake>0){const u=this.shake*this.shake*.35;this.camera.position.x+=(Math.random()-.5)*u,this.camera.position.y+=(Math.random()-.5)*u,this.shake=Math.max(0,this.shake-e*1.6)}this.camera.lookAt(d),this.camera.fov=58+-43*this.sniper,this.camera.updateProjectionMatrix(),a.group.visible=this.sniper<.7||a!==this.player}}if(this.terrain){this.terrain.tick(this.elapsed),o_(this.skyMesh,this.elapsed),Z_(this.waterMesh,this.elapsed),this.scenery.tick(this.elapsed),this.skyMesh.position.copy(this.camera.position),this.particles.update(e),this.boom.intensity=Math.max(0,this.boom.intensity-e*80),this.flash.intensity=Math.max(0,this.flash.intensity-e*220),this.hurt=Math.max(0,this.hurt-e*1.4);const i=this.subject()??this.player;i&&(this.audio.updateEngine(i.player?i.speed:0,i.spec.maxSpeed,this.input.throttle),(!i.alive||!i.player)&&this.audio.silenceEngine()),this.updateSun(this.camera.position)}if(this.phase!=="menu"&&this.phase!=="boot"&&this.ui.update(this.hud()),this.terrain&&this.phase!=="boot"){const i=this.subject();this.ui.drawMap(this.terrain.minimap,i?{x:i.x,z:i.z,yaw:this.camYaw}:null,this.tanks.filter(r=>r.team===0).map(r=>({x:r.x,z:r.z,dead:!r.alive})),this.tanks.filter(r=>r.team===1&&(r.detected>0||!r.alive)).map(r=>({x:r.x,z:r.z,dead:!r.alive})),{north:this.capNorth,south:this.capSouth})}this.hit=""}subject(){return this.player?.alive?this.player:this.tanks.find(e=>e.team===0&&e.alive)??this.player}aimRay(e){Q_(this.camYaw,this.camPitch,tn);const t=this.camDist,n=e.x-tn.x*t*(1-this.sniper),i=e.y+1.75*(1-this.sniper)+2.4*this.sniper-tn.y*t*(1-this.sniper),r=e.z-tn.z*t*(1-this.sniper);return{ox:n,oy:i,oz:r,dx:tn.x,dy:tn.y,dz:tn.z}}rayHit(e,t,n,i,r,a){let o=460;for(let l=8;l<=460;l+=3)if(t+r*l<this.terrain.groundAt(e+i*l,n+a*l)+.08){o=l;break}for(const l of this.scenery.solids)for(let c=6;c<o;c+=5){const h=e+i*c,d=t+r*c,u=n+a*c,[f,g]=zr(h-l.x,u-l.z,l.rot);if(Math.abs(f)<=l.hx&&Math.abs(g)<=l.hz&&Math.abs(d-l.y)<=l.hy){o=c;break}}return $_.set(e+i*o,t+r*o,n+a*o)}pullCamera(e,t){const n=t.x-e.x,i=t.y-e.y,r=t.z-e.z,a=Math.hypot(n,i,r);if(a<.5)return t;const o=Math.ceil(a/1.4);let l=a;for(let c=1;c<=o;c++){const h=c/o*a,d=e.x+n/a*h,u=e.y+i/a*h,f=e.z+r/a*h;if(u<this.terrain.sample(d,f).h+.7){l=Math.max(1.4,h-1.2);break}}return new F(e.x+n/a*l,e.y+i/a*l,e.z+r/a*l)}updateSun(e){const t=this.profile.range,n=t*2/this.profile.shadow,i=Math.round(e.x/n)*n,r=Math.round(e.z/n)*n;this.sun.target.position.set(i,0,r),this.sun.position.set(i,0,r).addScaledVector(Xr,170);const a=this.sun.shadow.camera;a.left=-t,a.right=t,a.top=t,a.bottom=-t,a.updateProjectionMatrix()}updateCaps(e){let t=0,n=0,i=0,r=0;for(const o of this.tanks){if(!o.alive)continue;const l=Math.hypot(o.x,o.z-Te.baseZ)<Te.baseR,c=Math.hypot(o.x,o.z+Te.baseZ)<Te.baseR;l&&o.team===0&&t++,l&&o.team===1&&n++,c&&o.team===1&&r++,c&&o.team===0&&i++}const a=e/this.capTime;t>0&&n===0?this.capNorth+=a*Math.min(3,t):t===0&&n===0&&(this.capNorth=Math.max(0,this.capNorth-e*.1)),r>0&&i===0?this.capSouth+=a*Math.min(3,r):r===0&&i===0&&(this.capSouth=Math.max(0,this.capSouth-e*.1))}checkEnd(){if(this.phase==="end")return;const e=this.tanks.filter(a=>a.team===0&&a.alive),t=this.tanks.filter(a=>a.team===1&&a.alive);let n="",i="";if(this.capNorth>=1)n="Victory",i="Cinder captured the Slate base.";else if(this.capSouth>=1)n="Defeat",i="Slate captured the Cinder base.";else if(t.length===0&&e.length===0)n="Draw",i="Both companies were wiped out.";else if(t.length===0)n="Victory",i="Every Slate tank is burning.";else if(e.length===0)n="Defeat",i="Cinder Company was destroyed.";else if(this.timeLeft<=0){const a=e.reduce((l,c)=>l+c.hp,0),o=t.reduce((l,c)=>l+c.hp,0);e.length>t.length||e.length===t.length&&a>o?(n="Victory",i="Time ran out. Cinder still holds the valley."):t.length>e.length||o>a?(n="Defeat",i="Time ran out. Slate kept the field."):(n="Draw",i="Dusk fell with neither side broken.")}if(!n||!this.player)return;const r=this.player;this.result={title:n,subtitle:i,rows:[["Damage dealt",Math.round(r.damageDealt).toLocaleString()],["Kills",String(r.kills)],["Shots fired",String(r.shots)],["Hits",String(r.hits)],["Blocked",Math.round(r.blocked).toLocaleString()],["Survived",r.alive?"Yes":"No"]]},this.phase="end",this.input.setEnabled(!1),this.ui.showEnd(this.result),document.body.dataset.phase="end",this.audio.silenceEngine()}consumeEvents(){const e=this.camera.position;for(const t of this.combat.events)this.applyEvent(t,e);this.combat.events.length=0}applyEvent(e,t){const n=Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z);if(e.type==="fire")this.particles.muzzle(e.x,e.y,e.z,e.dx,e.dy,e.dz),this.audio.shot(n),e.a===this.player?.id&&(this.flash.position.set(e.x,e.y,e.z),this.flash.intensity=18);else if(e.type==="pen"){this.particles.spark(e.x,e.y,e.z,!0);const i=e.a===this.player?.id,r=e.b===this.player?.id;if(i||r){const a=e.note==="crit";this.floaters.push({x:e.x,y:e.y+1.4,z:e.z,text:`${r?"":"-"}${Math.round(e.n)}${a?" CRITICAL":""}`,life:1.25,max:1.25,kind:r?"hurt":a?"crit":"pen"})}i&&(this.hit="pen",this.audio.pen()),r&&this.noteHurt(e.x,e.z,Math.round(e.n))}else if(e.type==="bounce"){this.particles.spark(e.x,e.y,e.z,!1);const i=e.a===this.player?.id,r=e.b===this.player?.id;if(i||r){const a=e.note==="ricochet";this.floaters.push({x:e.x,y:e.y+1.4,z:e.z,text:a?"RICOCHET":"NO DAMAGE",life:.95,max:.95,kind:a?"ricochet":"nodmg"})}i&&(this.hit="bounce",this.audio.bounce()),r&&(this.audio.bounce(),this.noteHurt(e.x,e.z,0))}else if(e.type==="kill"){this.particles.blast(e.x,e.y,e.z),this.boom.position.set(e.x,e.y,e.z),this.boom.intensity=90,this.audio.boom(n),this.shake=Math.min(1,this.shake+8/Math.max(6,n));const i=this.tanks.find(a=>a.id===e.a),r=this.tanks.find(a=>a.id===e.b);if(i&&r){const a=i.team===0?"good":"bad";this.feed.unshift({text:`${i.name} destroyed ${r.name}`,kind:a,age:0}),(i.player||r.player)&&this.floaters.push({x:e.x,y:e.y+2.2,z:e.z,text:"DESTROYED",life:1.5,max:1.5,kind:"kill"})}}else e.type==="ground"&&this.particles.dirt(e.x,e.y,e.z)}noteHurt(e,t,n){this.hurt=1,this.shake=Math.min(1,this.shake+.45);const i=e-(this.player?.x??0),r=t-(this.player?.z??0);this.hurtAngle=Math.atan2(i,r)-this.camYaw}hud(){const e=this.player,t=this.tanks.filter(v=>v.team===0),n=this.tanks.filter(v=>v.team===1);let i="",r=0,a=!1;this.capNorth>.01&&(i="Capturing the Slate base",r=this.capNorth),this.capSouth>this.capNorth&&(i="Cinder base under attack",r=this.capSouth,a=!0);let o="";this.phase==="countdown"?o=this.countdown>.15?String(Math.max(1,Math.ceil(this.countdown-.001))):"Engage":e&&!e.alive&&this.phase==="battle"&&(o="Destroyed — spectating");const l=this.canvas.clientWidth||1,c=this.canvas.clientHeight||1;let h=l/2,d=c/2,u=!1,f=!1;if(e?.alive){e.muzzle.getWorldPosition(vc),e.muzzle.getWorldDirection(_s);const v=_s.x*tn.x+_s.y*tn.y+_s.z*tn.z;f=e.reload<=0&&v>.998;const w=vc.clone().addScaledVector(_s,80);w.project(this.camera),w.z<1&&(u=!0,h=(w.x*.5+.5)*l,d=(-w.y*.5+.5)*c)}const g=this.camera.fov*Math.PI/180,M=Math.atan((e?.dispersion??.4)/100),m=Math.tan(M)/Math.tan(g/2)*(c/2),p=Math.floor(this.timeLeft/60),x=Math.max(0,Math.floor(this.timeLeft%60)),T=[];for(const v of this.floaters){const w=new F(v.x,v.y+(1-v.life/v.max)*1.6,v.z);w.project(this.camera),!(w.z>1)&&T.push({x:(w.x*.5+.5)*l,y:(-w.y*.5+.5)*c,text:v.text,life:v.life,kind:v.kind})}return{time:`${p}:${x.toString().padStart(2,"0")}`,allies:t.filter(v=>v.alive).length,enemies:n.filter(v=>v.alive).length,spotted:(e?.detected??0)>0,banner:o,sniper:this.sniper>.55,hp:e?.hp??0,maxHp:e?.spec.hp??1,speed:e?.speed??0,reload:e?.reload??0,reloadTime:e?.spec.reload??1,aimPx:m,ready:f,gunX:h,gunY:d,gunVisible:u,hit:this.hit,hurt:this.hurt,hurtAngle:this.hurtAngle,fps:this.fps,cap:i,capP:r,capBad:a,tankName:e?.spec.name??"",role:e?.spec.role??"",alliesRows:t.map(v=>({name:v.name,role:v.spec.role,hp:v.hp,max:v.spec.hp,dead:!v.alive,self:v.player})),enemyRows:n.map(v=>({name:v.name,role:v.spec.role,hp:v.detected>0||!v.alive?v.hp:v.spec.hp,max:v.spec.hp,dead:!v.alive,self:!1})),feed:this.feed,floaters:T.slice(0,24),plates:this.nameplates(l,c),dealt:e?.damageDealt??0}}nameplates(e,t){const n=[],i=this.platePoint;for(const r of this.tanks){if(!r.alive)continue;const a=r.team===0;if(!a&&r.detected<=0)continue;i.set(r.x,r.y+r.spec.height+2.6,r.z),i.project(this.camera);const o=i.z<1;n.push({x:(i.x*.5+.5)*e,y:(-i.y*.5+.5)*t,name:r.player?"You":r.name,hp:r.hp,max:r.spec.hp,ally:a,show:o})}return n}paintFor(e,t){return e==="halberd"?this.tex.halberd:t===0?this.tex.camoCinder:this.tex.camoSlate}trackFor(e){return e==="halberd"?this.tex.metal:this.tex.track}setupComposer(){if(this.composer=null,!this.renderer||this.profile.id===0)return;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=new gg(this.renderer);if(n.addPass(new xg(this.scene,this.camera)),this.profile.id===2){const i=new ii(this.scene,this.camera,Math.max(1,e*.5),Math.max(1,t*.5));i.kernelRadius=12,i.minDistance=.001,i.maxDistance=.18,n.addPass(i)}n.addPass(new Qi(new Oe(Math.max(1,e*.5),Math.max(1,t*.5)),.12,.35,.9)),n.addPass(new uh(J_)),n.addPass(new _g),this.composer=n}applyQuality(e){if(this.profile=Pr[e],!this.renderer)return;this.resize(),this.sun?.shadow.mapSize.set(this.profile.shadow,this.profile.shadow);const t=this.sun?.shadow;if(t?.map&&(t.map.dispose(),t.map=null),!this.scenery)return;const n=this.counts.trees>0?Math.min(1,this.profile.trees/Pr[2].trees):1;this.scenery.trunks.count=Math.max(0,Math.floor(this.counts.trees*n)),this.scenery.broad.count=Math.max(0,Math.floor(this.counts.broad*n)),this.scenery.pines.count=Math.max(0,Math.floor(this.counts.pines*n)),this.scenery.grass.count=Math.min(this.counts.grass,this.profile.grass),this.scenery.reeds.count=Math.min(this.counts.reeds,this.profile.reeds),this.scenery.rocks.count=Math.min(this.counts.rocks,this.profile.rocks),this.scenery.trunks.castShadow=this.profile.treeShadow,this.scenery.broad.castShadow=this.profile.treeShadow,this.scenery.pines.castShadow=this.profile.treeShadow,this.particles?.setBudget(this.profile.particles),this.setupComposer()}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=Math.min(this.profile.dpr,window.devicePixelRatio||1);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.composer?.setSize(e,t)}publish(){const e=this;window.__ASHEN={ready:!0,get phase(){return e.phase},get fps(){return e.fps},start:t=>e.start(t??"vanguard"),damage:(t,n)=>e.debugDamage(t,n),teleport:(t,n)=>e.debugTeleport(t,n),setCapTime:t=>{e.capTime=t},armorCases:Cg,getState:()=>e.debugState()}}debugDamage(e,t){const n=this.tanks.find(r=>r.id===e);if(!n||!n.alive)return;n.hp-=t,n.detected=3;const i=n.player;this.player&&!i&&n.team!==this.player.team&&(this.player.damageDealt+=t),this.floaters.push({x:n.x,y:n.y+2.4,z:n.z,text:`-${Math.round(t)}`,life:1.6,max:1.6,kind:i?"hurt":"pen"}),i&&this.noteHurt(n.x-8,n.z+12,t),n.hp<=0&&(n.kill(),this.particles.blast(n.x,n.y+1,n.z),this.floaters.push({x:n.x,y:n.y+3.4,z:n.z,text:"DESTROYED",life:1.6,max:1.6,kind:"kill"})),this.phase==="countdown"&&(this.phase="battle"),this.checkEnd()}debugTeleport(e,t){this.player&&(this.player.x=e,this.player.z=t,this.player.y=this.terrain.sample(e,t).h,this.player.speed=0)}debugState(){const e=this.player;return{phase:this.phase,fps:this.fps,quality:this.profile.id,draws:this.renderer.info.render.calls,tris:this.renderer.info.render.triangles,shells:this.combat?.activeShells??0,result:this.result?.title??"",allies:this.tanks.filter(t=>t.team===0&&t.alive).length,enemies:this.tanks.filter(t=>t.team===1&&t.alive).length,camYaw:this.camYaw,player:e?{id:e.id,x:e.x,y:e.y,z:e.z,hp:e.hp,speed:e.speed,yaw:e.yaw,shots:e.shots,kills:e.kills,alive:e.alive}:null,tanks:this.tanks.map(t=>({id:t.id,name:t.name,team:t.team,hp:t.hp,alive:t.alive,x:t.x,z:t.z}))}}}const J_={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
      c = mix(vec3(l), c, 1.35);
      c = (c - 0.5) * 1.08 + 0.46;
      c *= vec3(1.02, 1.0, 0.96);
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }
  `};function Q_(s,e,t){const n=Math.cos(e);return t.set(Math.sin(s)*n,Math.sin(e),Math.cos(s)*n)}function j_(){return new Promise(s=>setTimeout(s,0))}const ex=navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches;document.body.classList.toggle("touch-device",ex);const tx=new K_;tx.boot().catch(s=>{const e=document.querySelector("#fatal"),t=document.querySelector("#loading");t&&(t.hidden=!0),e&&(e.hidden=!1,e.textContent=s instanceof Error?s.message:"The valley failed to load.")});
