(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const vo="187",Ch=0,nl=1,Ph=2,ys=1,Dh=2,Ms=3,Si=0,$t=1,zt=2,sn=0,Yi=1,Rs=2,il=3,sl=4,yc=5,ni=100,Lh=101,Nh=102,Ih=103,Uh=104,Pa=200,Fh=201,Oh=202,zh=203,bc=204,Ec=205,Tc=206,Bh=207,wc=208,kh=209,Gh=210,Hh=211,Vh=212,Wh=213,Xh=214,Da=0,La=1,Na=2,Cs=3,Ia=4,Ua=5,Fa=6,Oa=7,Ac=0,qh=1,Yh=2,Wn=0,Mo=1,So=2,yo=3,Vr=4,bo=5,Eo=6,To=7,Rc=300,Ki=301,Ps=302,Er=303,Qr=304,Sn=1e3,dn=1001,za=1002,At=1003,Zh=1004,Hs=1005,bt=1006,jr=1007,kn=1008,rn=1009,Cc=1010,Pc=1011,Ds=1012,wo=1013,Rn=1014,jt=1015,Rt=1016,Ao=1017,Ro=1018,yi=1020,Dc=35902,Lc=35899,Nc=1021,Ic=1022,vn=1023,li=1026,Gn=1027,Wr=1028,Co=1029,bi=1030,Po=1031,Do=1033,Tr=33776,wr=33777,Ar=33778,Rr=33779,Ba=35840,ka=35841,Ga=35842,Ha=35843,Va=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,Ir=37490,Za=37491,$a=37808,Ka=37809,Ja=37810,Qa=37811,ja=37812,eo=37813,to=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,Ur=36285,mo=36286,$h=3200,Fr=0,Kh=1,un="",Zt="srgb",Ji="srgb-linear",Or="linear",ct="srgb",ea=7680,Jh=519,Qh=512,jh=513,eu=514,Uc=515,tu=516,nu=517,Fc=518,Oc=519,iu=35044,Vs=35048,rl="300 es",Mn=2e3,Ls=2001;function su(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ru(){const s=Ns("canvas");return s.style.display="block",s}const al={};function ol(...s){const e="THREE."+s.shift();console.log(e,...s)}function zc(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Be(...s){s=zc(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function rt(...s){s=zc(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Cr(...s){const e=s.join(" ");e in al||(al[e]=!0,Be(...s))}function au(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ou={[Da]:Da,[Na]:Fa,[Ia]:Ia,[Cs]:Ua,[La]:La,[Fa]:Na,[Oa]:Oa,[Ua]:Cs};class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ll=1234567;const bs=Math.PI/180,Is=180/Math.PI;function ts(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function Lo(s,e){return(s%e+e)%e}function lu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function cu(s,e,t){return s!==e?(t-s)/(e-s):0}function Es(s,e,t){return(1-t)*s+t*e}function hu(s,e,t,n){return Es(s,e,1-Math.exp(-t*n))}function uu(s,e=1){return e-Math.abs(Lo(s,e*2)-e)}function du(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function fu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function pu(s,e){return s+Math.floor(Math.random()*(e-s+1))}function mu(s,e){return s+Math.random()*(e-s)}function gu(s){return s*(.5-Math.random())}function _u(s){s!==void 0&&(ll=s);let e=ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xu(s){return s*bs}function vu(s){return s*Is}function Mu(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Su(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Bc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yu(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*f,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function No(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kc(s,e){if(e.constructor===Float32Array)return s;const t=No(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function Gc(s,e){if(e.constructor===Float32Array)return s;const t=No(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const bu={DEG2RAD:bs,RAD2DEG:Is,generateUUID:ts,clamp:Ke,euclideanModulo:Lo,mapLinear:lu,inverseLerp:cu,lerp:Es,damp:hu,pingpong:uu,smoothstep:du,smootherstep:fu,randInt:pu,randFloat:mu,randFloatSpread:gu,seededRandom:_u,degToRad:xu,radToDeg:vu,isPowerOfTwo:Mu,ceilPowerOfTwo:Su,floorPowerOfTwo:Bc,setQuaternionFromProperEuler:yu,normalize:Gc,denormalize:kc};class ze{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ns{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],f=n[i+3],u=r[a+0],d=r[a+1],m=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==d||h!==m){let g=l*u+c*d+h*m+f*M;g<0&&(u=-u,d=-d,m=-m,M=-M,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),b=Math.sin(x);p=Math.sin(p*x)/b,o=Math.sin(o*x)/b,l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+M*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+m*o,f=f*p+M*o;const x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*f+l*d-c*u,e[t+1]=l*m+h*u+c*f-o*d,e[t+2]=c*m+h*d+o*u-l*f,e[t+3]=h*m-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),f=o(r/2),u=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f+u*d*m;break;case"YZX":this._x=u*h*f+c*d*m,this._y=c*d*f+u*h*m,this._z=c*h*m-u*d*f,this._w=c*h*f-u*d*m;break;case"XZY":this._x=u*h*f-c*d*m,this._y=c*d*f-u*h*m,this._z=c*h*m+u*d*f,this._w=c*h*f+u*d*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=i+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ta=new O,cl=new ns;class Ve{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],M=i[0],g=i[3],p=i[6],x=i[1],b=i[4],v=i[7],w=i[2],E=i[5],_=i[8];return r[0]=a*M+o*x+l*w,r[3]=a*g+o*b+l*E,r[6]=a*p+o*v+l*_,r[1]=c*M+h*x+f*w,r[4]=c*g+h*b+f*E,r[7]=c*p+h*v+f*_,r[2]=u*M+d*x+m*w,r[5]=u*g+d*b+m*E,r[8]=u*p+d*v+m*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,m=t*f+n*u+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=f*M,e[1]=(i*c-h*n)*M,e[2]=(o*n-i*a)*M,e[3]=u*M,e[4]=(h*t-i*l)*M,e[5]=(i*r-o*t)*M,e[6]=d*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Cr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(na.makeScale(e,t)),this}rotate(e){return Cr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(na.makeRotation(-e)),this}translate(e,t){return Cr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const na=new Ve,hl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Eu(){const s={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(i.r=Xn(i.r),i.g=Xn(i.g),i.b=Xn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=Zi(i.r),i.g=Zi(i.g),i.b=Zi(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===un?Or:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ji]:{primaries:e,whitePoint:n,transfer:Or,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),s}const je=Eu();function Xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Pi;class Tu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=Ns("canvas")),Pi.width=e.width,Pi.height=e.height;const i=Pi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Xn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wu=0;class Io{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ia(i[a].image)):r.push(ia(i[a]))}else r=ia(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ia(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Tu.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Au=0;const sa=new O;class Bt extends wi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=dn,i=dn,r=bt,a=kn,o=vn,l=rn,c=Bt.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=ts(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sa).x}get height(){return this.source.getSize(sa).y}get depth(){return this.source.getSize(sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Rc;Bt.DEFAULT_ANISOTROPY=1;class yt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],m=l[9],M=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(d+1)/2,w=(p+1)/2,E=(h+u)/4,_=(f+M)/4,S=(m+g)/4;return b>v&&b>w?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=E/n,r=_/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=S/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=_/r,i=S/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-M)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ru extends wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Bt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wt extends Ru{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cu extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class it{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,l,c,h,f,u,d,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,f,u,d,m,M,g)}set(e,t,n,i,r,a,o,l,c,h,f,u,d,m,M,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=m,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Di.setFromMatrixColumn(e,0).length(),r=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=a*h,d=a*f,m=o*h,M=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,d=l*f,m=c*h,M=c*f;t[0]=u+M*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,d=l*f,m=c*h,M=c*f;t[0]=u-M*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,d=a*f,m=o*h,M=o*f;t[0]=l*h,t[4]=m*c-d,t[8]=u*c+M,t[1]=l*f,t[5]=M*c+u,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,d=a*c,m=o*l,M=o*c;t[0]=l*h,t[4]=M-u*f,t[8]=m*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+m,t[10]=u-M*f}else if(e.order==="XZY"){const u=a*l,d=a*c,m=o*l,M=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+M,t[5]=a*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pu,e,Du)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Zn.crossVectors(n,en),Zn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Zn.crossVectors(n,en)),Zn.normalize(),Ws.crossVectors(en,Zn),i[0]=Zn.x,i[4]=Ws.x,i[8]=en.x,i[1]=Zn.y,i[5]=Ws.y,i[9]=en.y,i[2]=Zn.z,i[6]=Ws.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],M=n[6],g=n[10],p=n[14],x=n[3],b=n[7],v=n[11],w=n[15],E=i[0],_=i[4],S=i[8],A=i[12],R=i[1],D=i[5],L=i[9],U=i[13],P=i[2],z=i[6],B=i[10],W=i[14],ee=i[3],H=i[7],q=i[11],j=i[15];return r[0]=a*E+o*R+l*P+c*ee,r[4]=a*_+o*D+l*z+c*H,r[8]=a*S+o*L+l*B+c*q,r[12]=a*A+o*U+l*W+c*j,r[1]=h*E+f*R+u*P+d*ee,r[5]=h*_+f*D+u*z+d*H,r[9]=h*S+f*L+u*B+d*q,r[13]=h*A+f*U+u*W+d*j,r[2]=m*E+M*R+g*P+p*ee,r[6]=m*_+M*D+g*z+p*H,r[10]=m*S+M*L+g*B+p*q,r[14]=m*A+M*U+g*W+p*j,r[3]=x*E+b*R+v*P+w*ee,r[7]=x*_+b*D+v*z+w*H,r[11]=x*S+b*L+v*B+w*q,r[15]=x*A+b*U+v*W+w*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],M=e[7],g=e[11],p=e[15],x=l*d-c*u,b=o*d-c*f,v=o*u-l*f,w=a*d-c*h,E=a*u-l*h,_=a*f-o*h;return t*(M*x-g*b+p*v)-n*(m*x-g*w+p*E)+i*(m*b-M*w+p*_)-r*(m*v-M*E+g*_)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],M=e[13],g=e[14],p=e[15],x=t*o-n*a,b=t*l-i*a,v=t*c-r*a,w=n*l-i*o,E=n*c-r*o,_=i*c-r*l,S=h*M-f*m,A=h*g-u*m,R=h*p-d*m,D=f*g-u*M,L=f*p-d*M,U=u*p-d*g,P=x*U-b*L+v*D+w*R-E*A+_*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=(o*U-l*L+c*D)*z,e[1]=(i*L-n*U-r*D)*z,e[2]=(M*_-g*E+p*w)*z,e[3]=(u*E-f*_-d*w)*z,e[4]=(l*R-a*U-c*A)*z,e[5]=(t*U-i*R+r*A)*z,e[6]=(g*v-m*_-p*b)*z,e[7]=(h*_-u*v+d*b)*z,e[8]=(a*L-o*R+c*S)*z,e[9]=(n*R-t*L-r*S)*z,e[10]=(m*E-M*v+p*x)*z,e[11]=(f*v-h*E-d*x)*z,e[12]=(o*A-a*D-l*S)*z,e[13]=(t*D-n*A+i*S)*z,e[14]=(M*b-m*w-g*x)*z,e[15]=(h*w-f*b+u*x)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,m=r*f,M=a*h,g=a*f,p=o*f,x=l*c,b=l*h,v=l*f,w=n.x,E=n.y,_=n.z;return i[0]=(1-(M+p))*w,i[1]=(d+v)*w,i[2]=(m-b)*w,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(u+p))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(m+b)*_,i[9]=(g-x)*_,i[10]=(1-(u+M))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Di.set(i[0],i[1],i[2]).length();const o=Di.set(i[4],i[5],i[6]).length(),l=Di.set(i[8],i[9],i[10]).length();r<0&&(a=-a),pn.copy(this);const c=1/a,h=1/o,f=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,t.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Mn,l=!1){const c=this.elements,h=2*r/(t-e),f=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let m,M;if(l)m=r/(a-r),M=a*r/(a-r);else if(o===Mn)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ls)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Mn,l=!1){const c=this.elements,h=2/(t-e),f=2/(n-i),u=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,M;if(l)m=1/(a-r),M=a/(a-r);else if(o===Mn)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ls)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new O,pn=new it,Pu=new O(0,0,0),Du=new O(1,1,1),Zn=new O,Ws=new O,en=new O,dl=new it,fl=new ns;class ci{constructor(e=0,t=0,n=0,i=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lu=0;const pl=new O,Li=new ns,Ln=new it,Xs=new O,as=new O,Nu=new O,Iu=new ns,ml=new O(1,0,0),gl=new O(0,1,0),_l=new O(0,0,1),xl={type:"added"},Uu={type:"removed"},Ni={type:"childadded",child:null},ra={type:"childremoved",child:null};class wt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new O,t=new ci,n=new ns,i=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new it},normalMatrix:{value:new Ve}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(_l,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(_l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(as,Xs,this.up):Ln.lookAt(Xs,as,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(Ln),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uu),ra.child=e,this.dispatchEvent(ra),ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Iu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.DEFAULT_UP=new O(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fu={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),p=this._getHandJoint(c,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&u>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fu)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},qs={h:0,s:0,l:0};function oa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=je.workingColorSpace){if(e=Lo(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=oa(a,r,e+1/3),this.g=oa(a,r,e),this.b=oa(a,r,e-1/3)}return je.colorSpaceToWorking(this,i),this}setStyle(e,t=Zt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){const n=Wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return je.workingToColorSpace(Vt.copy(this),e),Math.round(Ke(Vt.r*255,0,255))*65536+Math.round(Ke(Vt.g*255,0,255))*256+Math.round(Ke(Vt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,r=Vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-r)/f+(i<r?6:0);break;case i:l=(r-n)/f+2;break;case r:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Zt){je.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(qs);const n=Es($n.h,qs.h,t),i=Es($n.s,qs.s,t),r=Es($n.l,qs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new ke;ke.NAMES=Wc;class Uo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new Uo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ou extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new O,Nn=new O,la=new O,In=new O,Ii=new O,Ui=new O,vl=new O,ca=new O,ha=new O,ua=new O,da=new yt,fa=new yt,pa=new yt;class xn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){mn.subVectors(i,t),Nn.subVectors(n,t),la.subVectors(e,t);const a=mn.dot(mn),o=mn.dot(Nn),l=mn.dot(la),c=Nn.dot(Nn),h=Nn.dot(la),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,m=(a*h-o*l)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,n),pa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(da,r.x),a.addScaledVector(fa,r.y),a.addScaledVector(pa,r.z),a}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),Nn.subVectors(e,t),mn.cross(Nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),mn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ii.subVectors(i,n),Ui.subVectors(r,n),ca.subVectors(e,n);const l=Ii.dot(ca),c=Ui.dot(ca);if(l<=0&&c<=0)return t.copy(n);ha.subVectors(e,i);const h=Ii.dot(ha),f=Ui.dot(ha);if(h>=0&&f<=h)return t.copy(i);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Ii,a);ua.subVectors(e,r);const d=Ii.dot(ua),m=Ui.dot(ua);if(m>=0&&d<=m)return t.copy(r);const M=d*c-l*m;if(M<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ui,o);const g=h*m-d*f;if(g<=0&&f-h>=0&&d-m>=0)return vl.subVectors(r,i),o=(f-h)/(f-h+(d-m)),t.copy(i).addScaledVector(vl,o);const p=1/(g+M+u);return a=M*p,o=u*p,t.copy(n).addScaledVector(Ii,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ai{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Zs.subVectors(this.max,os),Fi.subVectors(e.a,os),Oi.subVectors(e.b,os),zi.subVectors(e.c,os),Kn.subVectors(Oi,Fi),Jn.subVectors(zi,Oi),fi.subVectors(Fi,zi);let t=[0,-Kn.z,Kn.y,0,-Jn.z,Jn.y,0,-fi.z,fi.y,Kn.z,0,-Kn.x,Jn.z,0,-Jn.x,fi.z,0,-fi.x,-Kn.y,Kn.x,0,-Jn.y,Jn.x,0,-fi.y,fi.x,0];return!ma(t,Fi,Oi,zi,Zs)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,Fi,Oi,zi,Zs))?!1:($s.crossVectors(Kn,Jn),t=[$s.x,$s.y,$s.z],ma(t,Fi,Oi,zi,Zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new O,new O,new O,new O,new O,new O,new O,new O],gn=new O,Ys=new Ai,Fi=new O,Oi=new O,zi=new O,Kn=new O,Jn=new O,fi=new O,os=new O,Zs=new O,$s=new O,pi=new O;function ma(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){pi.fromArray(s,r);const o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=e.dot(pi),c=t.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Bn=zu();function zu(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Bu(s){Math.abs(s)>65504&&Be("DataUtils.toHalfFloat(): Value out of range."),s=Ke(s,-65504,65504),Bn.floatView[0]=s;const e=Bn.uint32View[0],t=e>>23&511;return Bn.baseTable[t]+((e&8388607)>>Bn.shiftTable[t])}function ku(s){const e=s>>10;return Bn.uint32View[0]=Bn.mantissaTable[Bn.offsetTable[e]+(s&1023)]+Bn.exponentTable[e],Bn.floatView[0]}class Ks{static toHalfFloat(e){return Bu(e)}static fromHalfFloat(e){return ku(e)}}const Tt=new O,Js=new ze;let Gu=0;class oi extends wi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=jt,this.version=0,this._normalizationScale=e!==void 0?No(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):kc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Gc(e,this.array)}}class Xc extends oi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class qc extends oi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qe extends oi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Hu=new Ai,ls=new O,ga=new O;class is{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hu.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ls,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(ga)),this.expandByPoint(ls.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Vu=0;const ln=new it,_a=new wt,Bi=new O,tn=new Ai,cs=new Ai,It=new O;class Dt extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(su(e)?qc:Xc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(tn.min,cs.min),tn.expandByPoint(It),It.addVectors(tn.max,cs.max),tn.expandByPoint(It)):(tn.expandByPoint(cs.min),tn.expandByPoint(cs.max))}tn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)It.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(e,c),It.add(Bi)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new oi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let A=0;A<n.count;A++)o[A]=new O,l[A]=new O;const h=new O,f=new O,u=new O,d=new ze,m=new ze,M=new ze,g=new O,p=new O;function x(A,R,D){c[A]=c[R]=c[D]=1,h.fromBufferAttribute(n,A),f.fromBufferAttribute(n,R),u.fromBufferAttribute(n,D),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),M.fromBufferAttribute(r,D),f.sub(h),u.sub(h),m.sub(d),M.sub(d);const L=1/(m.x*M.y-M.x*m.y);isFinite(L)&&(g.copy(f).multiplyScalar(M.y).addScaledVector(u,-m.y).multiplyScalar(L),p.copy(u).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(L),o[A].add(g),o[R].add(g),o[D].add(g),l[A].add(p),l[R].add(p),l[D].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,R=b.length;A<R;++A){const D=b[A],L=D.start,U=D.count;for(let P=L,z=L+U;P<z;P+=3)x(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const v=new O,w=new O,E=new O,_=new O;function S(A){E.fromBufferAttribute(i,A),_.copy(E);const R=o[A];v.copy(R),v.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(_,R);const L=w.dot(l[A])<0?-1:1;a.setXYZW(A,v.x,v.y,v.z,L)}for(let A=0,R=n.count;A<R;++A)c[A]&&S(A);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),M=e.getX(u+1),g=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,m=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let p=0;p<h;p++)u[m++]=c[d++]}return new oi(u,h,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xa=new O,Wu=new O,Xu=new Ve;class ti{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xa.subVectors(n,t).cross(Wu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(xa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xu.getNormalMatrix(e),i=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qu=0;class Ri extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Yi,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Ec,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ti().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fn=new O,va=new O,Qs=new O,js=new O;class Yc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){va.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),js.copy(this.origin).sub(va);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Qs),o=js.dot(this.direction),l=-js.dot(Qs),c=js.lengthSq(),h=Math.abs(1-a*a);let f,u,d,m;if(h>0)if(f=a*l-o,u=a*o-l,m=r*h,f>=0)if(u>=-m)if(u<=m){const M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-m?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=m?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(va).addScaledVector(Qs,u),d}intersectSphere(e,t){if(e.radius<0)return null;Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,m=t.x-a.x,M=t.y-a.y,g=t.z-a.z,p=n.x-a.x,x=n.y-a.y,b=n.z-a.z,v=Math.abs(l),w=Math.abs(c),E=Math.abs(h);let _,S,A,R,D,L,U,P,z,B,W,ee;if(v>=w&&v>=E?(A=l,L=f,z=m,ee=p,l>=0?(_=c,S=h,R=u,D=d,U=M,P=g,B=x,W=b):(_=h,S=c,R=d,D=u,U=g,P=M,B=b,W=x)):w>=E?(A=c,L=u,z=M,ee=x,c>=0?(_=h,S=l,R=d,D=f,U=g,P=m,B=b,W=p):(_=l,S=h,R=f,D=d,U=m,P=g,B=p,W=b)):(A=h,L=d,z=g,ee=b,h>=0?(_=l,S=c,R=f,D=u,U=m,P=M,B=p,W=x):(_=c,S=l,R=u,D=f,U=M,P=m,B=x,W=p)),A===0)return null;const H=_/A,q=S/A,j=1/A,ge=R-H*L,Re=D-q*L,Y=U-H*z,ie=P-q*z,Me=B-H*ee,Ae=W-q*ee,he=Me*ie-Ae*Y,De=ge*Ae-Re*Me,tt=Y*Re-ie*ge;if(i){if(he<0||De<0||tt<0)return null}else if((he<0||De<0||tt<0)&&(he>0||De>0||tt>0))return null;const Ie=he+De+tt;if(Ie===0)return null;const et=j*(he*L+De*z+tt*ee);return(Ie>0?et<0:et>0)?null:this.at(et/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ml=new it,mi=new Yc,er=new is,Sl=new O,tr=new O,nr=new O,ir=new O,Ma=new O,sr=new O,yl=new O,rr=new O;class xt extends wt{constructor(e=new Dt,t=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Ma.fromBufferAttribute(f,e),a?sr.addScaledVector(Ma,h):sr.addScaledVector(Ma.sub(t),h))}t.add(sr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),mi.copy(e.ray).recast(e.near),!(er.containsPoint(mi.origin)===!1&&(mi.intersectSphere(er,Sl)===null||mi.origin.distanceToSquared(Sl)>(e.far-e.near)**2))&&(Ml.copy(r).invert(),mi.copy(e.ray).applyMatrix4(Ml),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),b=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,w=b;v<w;v+=3){const E=o.getX(v),_=o.getX(v+1),S=o.getX(v+2);i=ar(this,p,e,n,c,h,f,E,_,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){const x=o.getX(g),b=o.getX(g+1),v=o.getX(g+2);i=ar(this,a,e,n,c,h,f,x,b,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const g=u[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),b=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,w=b;v<w;v+=3){const E=v,_=v+1,S=v+2;i=ar(this,p,e,n,c,h,f,E,_,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){const x=g,b=g+1,v=g+2;i=ar(this,a,e,n,c,h,f,x,b,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Yu(s,e,t,n,i,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Si,o),l===null)return null;rr.copy(o),rr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:s}}function ar(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,tr),s.getVertexPosition(l,nr),s.getVertexPosition(c,ir);const h=Yu(s,e,t,n,tr,nr,ir,yl);if(h){const f=new O;xn.getBarycoord(yl,tr,nr,ir,f),i&&(h.uv=xn.getInterpolatedAttribute(i,o,l,c,f,new ze)),r&&(h.uv1=xn.getInterpolatedAttribute(r,o,l,c,f,new ze)),a&&(h.normal=xn.getInterpolatedAttribute(a,o,l,c,f,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new O,materialIndex:0};xn.getNormal(tr,nr,ir,u.normal),h.face=u,h.barycoord=f}return h}class Ei extends Bt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=At,h=At,f,u){super(null,a,o,l,c,h,i,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl extends oi{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ki=new it,El=new it,or=[],Tl=new Ai,Zu=new it,hs=new xt,us=new is;class jn extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Zu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),Tl.copy(e.boundingBox).applyMatrix4(ki),this.boundingBox.union(Tl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ki),us.copy(e.boundingSphere).applyMatrix4(ki),this.boundingSphere.union(us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hs.geometry=this.geometry,hs.material=this.material,hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ki),El.multiplyMatrices(n,ki),hs.matrixWorld=El,hs.raycast(e,or);for(let a=0,o=or.length;a<o;a++){const l=or[a];l.instanceId=r,l.object=this,t.push(l)}or.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(i*this.count),i,this.count,Wr,jt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gi=new is,$u=new ze(.5,.5),lr=new O;class Us{constructor(e=new ti,t=new ti,n=new ti,i=new ti,r=new ti,a=new ti){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],M=r[9],g=r[10],p=r[11],x=r[12],b=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-a,d-h,p-m,w-x).normalize(),i[1].setComponents(c+a,d+h,p+m,w+x).normalize(),i[2].setComponents(c+o,d+f,p+M,w+b).normalize(),i[3].setComponents(c-o,d-f,p-M,w-b).normalize(),n)i[4].setComponents(l,u,g,v).normalize(),i[5].setComponents(c-l,d-u,p-g,w-v).normalize();else if(i[4].setComponents(c-l,d-u,p-g,w-v).normalize(),t===Mn)i[5].setComponents(c+l,d+u,p+g,w+v).normalize();else if(t===Ls)i[5].setComponents(l,u,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){gi.center.set(0,0,0);const t=$u.distanceTo(e.center);return gi.radius=.7071067811865476+t,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const wl=new it;class Fo{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const r=t[i];wl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Us),n[i].setFromProjectionMatrix(wl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Us),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Fo().copy(this)}}class Ku extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Al=new it,go=new Yc,cr=new is,hr=new O;class Ju extends wt{constructor(e=new Dt,t=new Ku){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(i),cr.radius+=r,e.ray.intersectsSphere(cr)===!1)return;Al.copy(i).invert(),go.copy(e.ray).applyMatrix4(Al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,M=d;m<M;m++){const g=c.getX(m);hr.fromBufferAttribute(f,g),Rl(hr,g,l,i,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=u,M=d;m<M;m++)hr.fromBufferAttribute(f,m),Rl(hr,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rl(s,e,t,n,i,r,a){const o=go.distanceSqToPoint(s);if(o<t){const l=new O;go.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Zc extends Bt{constructor(e=[],t=Ki,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qu extends Bt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ti extends Bt{constructor(e,t,n=Rn,i,r,a,o=At,l=At,c,h=li,f=1){if(h!==li&&h!==Gn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $c extends Ti{constructor(e,t=Rn,n=Ki,i,r,a=At,o=At,l,c=li){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Kc extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class on extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2));function m(M,g,p,x,b,v,w,E,_,S,A){const R=v/_,D=w/S,L=v/2,U=w/2,P=E/2,z=_+1,B=S+1;let W=0,ee=0;const H=new O;for(let q=0;q<B;q++){const j=q*D-U;for(let ge=0;ge<z;ge++){const Re=ge*R-L;H[M]=Re*x,H[g]=j*b,H[p]=P,c.push(H.x,H.y,H.z),H[M]=0,H[g]=0,H[p]=E>0?1:-1,h.push(H.x,H.y,H.z),f.push(ge/_),f.push(1-q/S),W+=1}}for(let q=0;q<S;q++)for(let j=0;j<_;j++){const ge=u+j+z*q,Re=u+j+z*(q+1),Y=u+(j+1)+z*(q+1),ie=u+(j+1)+z*q;l.push(ge,Re,ie),l.push(Re,Y,ie),ee+=6}o.addGroup(d,ee,A),d+=ee,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qt extends Dt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let m=0;const M=[],g=n/2;let p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(d,2));function x(){const v=new O,w=new O;let E=0;const _=(t-e)/n;for(let S=0;S<=r;S++){const A=[],R=S/r,D=R*(t-e)+e;for(let L=0;L<=i;L++){const U=L/i,P=U*l+o,z=Math.sin(P),B=Math.cos(P);w.x=D*z,w.y=-R*n+g,w.z=D*B,f.push(w.x,w.y,w.z),v.set(z,_,B).normalize(),u.push(v.x,v.y,v.z),d.push(U,1-R),A.push(m++)}M.push(A)}for(let S=0;S<i;S++)for(let A=0;A<r;A++){const R=M[A][S],D=M[A+1][S],L=M[A+1][S+1],U=M[A][S+1];(e>0||A!==0)&&(h.push(R,D,U),E+=3),(t>0||A!==r-1)&&(h.push(D,L,U),E+=3)}c.addGroup(p,E,0),p+=E}function b(v){const w=m,E=new ze,_=new O;let S=0;const A=v===!0?e:t,R=v===!0?1:-1;for(let L=1;L<=i;L++)f.push(0,g*R,0),u.push(0,R,0),d.push(.5,.5),m++;const D=m;for(let L=0;L<=i;L++){const P=L/i*l+o,z=Math.cos(P),B=Math.sin(P);_.x=A*B,_.y=g*R,_.z=A*z,f.push(_.x,_.y,_.z),u.push(0,R,0),E.x=z*.5+.5,E.y=B*.5*R+.5,d.push(E.x,E.y),m++}for(let L=0;L<i;L++){const U=w+L,P=D+L;v===!0?h.push(P,P+1,U):h.push(P+1,P,U),S+=3}c.addGroup(p,S,v===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zr extends Qt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new zr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends Dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const b=new O,v=new O,w=new O;for(let E=0;E<t.length;E+=3)d(t[E+0],b),d(t[E+1],v),d(t[E+2],w),l(b,v,w,x)}function l(x,b,v,w){const E=w+1,_=[];for(let S=0;S<=E;S++){_[S]=[];const A=x.clone().lerp(v,S/E),R=b.clone().lerp(v,S/E),D=E-S;for(let L=0;L<=D;L++)L===0&&S===E?_[S][L]=A:_[S][L]=A.clone().lerp(R,L/D)}for(let S=0;S<E;S++)for(let A=0;A<2*(E-S)-1;A++){const R=Math.floor(A/2);A%2===0?(u(_[S][R+1]),u(_[S+1][R]),u(_[S][R])):(u(_[S][R+1]),u(_[S+1][R+1]),u(_[S+1][R]))}}function c(x){const b=new O;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(x),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){const x=new O;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];const v=g(x)/2/Math.PI+.5,w=p(x)/Math.PI+.5;a.push(v,1-w)}m(),f()}function f(){for(let x=0;x<a.length;x+=6){const b=a[x+0],v=a[x+2],w=a[x+4],E=Math.max(b,v,w),_=Math.min(b,v,w);E>.9&&_<.1&&(b<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),w<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,b){const v=x*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function m(){const x=new O,b=new O,v=new O,w=new O,E=new ze,_=new ze,S=new ze;for(let A=0,R=0;A<r.length;A+=9,R+=6){x.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),v.set(r[A+6],r[A+7],r[A+8]),E.set(a[R+0],a[R+1]),_.set(a[R+2],a[R+3]),S.set(a[R+4],a[R+5]),w.copy(x).add(b).add(v).divideScalar(3);const D=g(w);M(E,R+0,x,D),M(_,R+2,b,D),M(S,R+4,v,D)}}function M(x,b,v,w){w<0&&x.x===1&&(a[b]=x.x-1),v.x===0&&v.z===0&&(a[b]=w/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.vertices,e.indices,e.radius,e.detail)}}class zo extends Oo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zo(e.radius,e.detail)}}class Cn extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,f=e/o,u=t/l,d=[],m=[],M=[],g=[];for(let p=0;p<h;p++){const x=p*u-a;for(let b=0;b<c;b++){const v=b*f-r;m.push(v,-x,0),M.push(0,0,1),g.push(b/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const b=x+c*p,v=x+c*(p+1),w=x+1+c*(p+1),E=x+1+c*p;d.push(b,v,E),d.push(v,w,E)}this.setIndex(d),this.setAttribute("position",new qe(m,3)),this.setAttribute("normal",new qe(M,3)),this.setAttribute("uv",new qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bo extends Dt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let f=e;const u=(t-e)/i,d=new O,m=new ze;for(let M=0;M<=i;M++){for(let g=0;g<=n;g++){const p=r+g/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let M=0;M<i;M++){const g=M*(n+1);for(let p=0;p<n;p++){const x=p+g,b=x,v=x+n+1,w=x+n+2,E=x+1;o.push(b,v,E),o.push(v,w,E)}}this.setIndex(o),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Os extends Dt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new O,u=new O,d=[],m=[],M=[],g=[];for(let p=0;p<=n;p++){const x=[],b=p/n,v=a+b*o,w=e*Math.cos(v),E=Math.sqrt(e*e-w*w);let _=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const A=S/t,R=i+A*r;f.x=-E*Math.cos(R),f.y=w,f.z=E*Math.sin(R),m.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),g.push(A+_,1-b),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const b=h[p][x+1],v=h[p][x],w=h[p+1][x],E=h[p+1][x+1];(p!==0||a>0)&&d.push(b,v,E),(p!==n-1||l<Math.PI)&&d.push(v,w,E)}this.setIndex(d),this.setAttribute("position",new qe(m,3)),this.setAttribute("normal",new qe(M,3)),this.setAttribute("uv",new qe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Br extends Dt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],f=[],u=new O,d=new O,m=new O;for(let M=0;M<=n;M++){const g=a+M/n*o;for(let p=0;p<=i;p++){const x=p/i*r;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(p/i),f.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=i;g++){const p=(i+1)*M+g-1,x=(i+1)*(M-1)+g-1,b=(i+1)*(M-1)+g,v=(i+1)*M+g;l.push(p,x,v),l.push(x,b,v)}this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ji(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Cl(i))i.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Cl(i[0])){const r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=ji(s[t]);for(const i in n)e[i]=n[i]}return e}function Cl(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ju(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Vn={clone:ji,merge:Yt};var ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(i.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ve().fromArray(i.value);break;case"m4":this.uniforms[n].value=new it().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Qc extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ot extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nd extends Ri{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fr,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class id extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sd extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ts={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Pl(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Pl(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Pl(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class jc{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const rd=new jc;class zs{constructor(e){this.manager=e!==void 0?e:rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}zs.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class ad extends Error{constructor(e,t){super(e),this.response=t}}class od extends zs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ts.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:i});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=On[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0;let M=0;const g=new ReadableStream({start(p){x();function x(){f.read().then(({done:b,value:v})=>{if(b)p.close();else{M+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:M,total:d});for(let E=0,_=h.length;E<_;E++){const S=h[E];S.onProgress&&S.onProgress(w)}p.enqueue(v),x()}},b=>{p.error(b)})}}});return new Response(g)}else throw new ad(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Ts.add(`file:${e}`,c);const h=On[e];delete On[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=On[e];if(h===void 0)throw this.manager.itemError(e),c;delete On[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Gi=new WeakMap;class ld extends zs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ts.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Gi.get(a);f===void 0&&(f=[],Gi.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=Ns("img");function l(){h(),t&&t(this);const f=Gi.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}Gi.delete(this),r.manager.itemEnd(e)}function c(f){h(),i&&i(f),Ts.remove(`image:${e}`);const u=Gi.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onError&&m.onError(f)}Gi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ts.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}}class cd extends zs{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Ei,o=new od(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):rt(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){const t=new Ei;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:dn,e.wrapT=t.wrapT!==void 0?t.wrapT:dn,e.magFilter=t.magFilter!==void 0?t.magFilter:bt,e.minFilter=t.minFilter!==void 0?t.minFilter:bt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=kn),t.mipmapCount===1&&(e.minFilter=bt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class hd extends zs{constructor(e){super(e)}load(e,t,n,i){const r=new Bt,a=new ld(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Xr extends wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class ud extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Sa=new it,Dl=new O,Ll=new O;class eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dl),Ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ll),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Sa,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Ls||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ur=new O,dr=new ns,yn=new O;class th extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ur,dr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,dr,yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ur,dr,yn),yn.x===1&&yn.y===1&&yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,dr,yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new O,Nl=new ze,Il=new ze;class hn extends th{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Il),t.subVectors(Il,Nl)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class dd extends eh{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ul extends Xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ko extends th{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fd extends eh{constructor(){super(new ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pd extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new fd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class md extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hi=-90,Vi=1;class _o extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(Hi,Vi,e,t);i.layers=this.layers,this.add(i);const r=new hn(Hi,Vi,e,t);r.layers=this.layers,this.add(r);const a=new hn(Hi,Vi,e,t);a.layers=this.layers,this.add(a);const o=new hn(Hi,Vi,e,t);o.layers=this.layers,this.add(o);const l=new hn(Hi,Vi,e,t);l.layers=this.layers,this.add(l);const c=new hn(Hi,Vi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class gd extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class _d{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=xd.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function xd(){this._document.hidden===!1&&this.reset()}function Fl(s,e,t,n){const i=vd(n);switch(t){case Nc:return s*e;case Wr:return s*e/i.components*i.byteLength;case Co:return s*e/i.components*i.byteLength;case bi:return s*e*2/i.components*i.byteLength;case Po:return s*e*2/i.components*i.byteLength;case Ic:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case Do:return s*e*4/i.components*i.byteLength;case Tr:case wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ka:case Ha:return Math.max(s,16)*Math.max(e,8)/4;case Ba:case Ga:return Math.max(s,8)*Math.max(e,8)/2;case Va:case Wa:case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xa:case Ir:case Za:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ja:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case oo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case lo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case co:case ho:case uo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case fo:case po:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ur:case mo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vd(s){switch(s){case rn:case Cc:return{byteLength:1,components:1};case Ds:case Pc:case Rt:return{byteLength:2,components:1};case Ao:case Ro:return{byteLength:2,components:4};case Rn:case wo:case jt:return{byteLength:4,components:1};case Dc:case Lc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);function nh(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Md(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const M=f[d];s.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Sd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ad=`#ifdef USE_AOMAP
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
#endif`,Rd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cd=`#ifdef USE_BATCHING
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
#endif`,Pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wd=`#define PI 3.141592653589793
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
} // validated`,Xd=`vec3 transformedNormal = objectNormal;
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
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$d=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nf=`#ifdef USE_ENVMAP
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
#endif`,sf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lf=`#ifdef USE_GRADIENTMAP
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
}`,cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xf=`PhysicalMaterial material;
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
#endif`,vf=`uniform sampler2D dfgLUT;
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
}`,Mf=`
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
#endif`,Sf=`#if defined( RE_IndirectDiffuse )
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bf=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Ef=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Af=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Df=`#if defined( USE_POINTS_UV )
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
#endif`,Lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uf=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ff=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Of=`#ifdef USE_MORPHTARGETS
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
#endif`,zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wf=`#ifdef USE_NORMALMAP
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
#endif`,Xf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ap=`float getShadowMask() {
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
}`,op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,up=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mp=`#ifdef USE_TRANSMISSION
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
#endif`,gp=`#ifdef USE_TRANSMISSION
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform float backgroundBlurriness;
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
}`,Tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`#include <common>
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
}`,Rp=`#if DEPTH_PACKING == 3200
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
}`,Cp=`#define DISTANCE
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
}`,Pp=`#define DISTANCE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Up=`#include <common>
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Op=`#define LAMBERT
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
}`,zp=`#define LAMBERT
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
}`,Bp=`#define MATCAP
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
}`,kp=`#define MATCAP
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
}`,Gp=`#define NORMAL
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
}`,Hp=`#define NORMAL
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
}`,Vp=`#define PHONG
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
}`,Wp=`#define PHONG
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
}`,Xp=`#define STANDARD
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
}`,qp=`#define STANDARD
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
}`,Yp=`#define TOON
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
}`,Zp=`#define TOON
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
}`,$p=`uniform float size;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,Qp=`uniform vec3 color;
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
}`,jp=`uniform float rotation;
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
}`,em=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Sd,alphahash_pars_fragment:yd,alphamap_fragment:bd,alphamap_pars_fragment:Ed,alphatest_fragment:Td,alphatest_pars_fragment:wd,aomap_fragment:Ad,aomap_pars_fragment:Rd,batching_pars_vertex:Cd,batching_vertex:Pd,begin_vertex:Dd,beginnormal_vertex:Ld,bsdfs:Nd,iridescence_fragment:Id,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Od,clipping_planes_pars_vertex:zd,clipping_planes_vertex:Bd,color_fragment:kd,color_pars_fragment:Gd,color_pars_vertex:Hd,color_vertex:Vd,common:Wd,defaultnormal_vertex:Xd,displacementmap_pars_vertex:qd,displacementmap_vertex:Yd,emissivemap_fragment:Zd,emissivemap_pars_fragment:$d,colorspace_fragment:Kd,colorspace_pars_fragment:Jd,envmap_fragment:Qd,envmap_common_pars_fragment:jd,envmap_pars_fragment:ef,envmap_pars_vertex:tf,envmap_physical_pars_fragment:ff,envmap_vertex:nf,fog_vertex:sf,fog_pars_vertex:rf,fog_fragment:af,fog_pars_fragment:of,gradientmap_pars_fragment:lf,lightmap_pars_fragment:cf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:uf,lights_pars_begin:df,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:gf,lights_phong_pars_fragment:_f,lights_physical_fragment:xf,lights_physical_pars_fragment:vf,lights_fragment_begin:Mf,lights_fragment_maps:Sf,lights_fragment_end:yf,lightprobes_pars_fragment:bf,logdepthbuf_fragment:Ef,logdepthbuf_pars_fragment:Tf,logdepthbuf_pars_vertex:wf,logdepthbuf_vertex:Af,map_fragment:Rf,map_pars_fragment:Cf,map_particle_fragment:Pf,map_particle_pars_fragment:Df,metalnessmap_fragment:Lf,metalnessmap_pars_fragment:Nf,morphinstance_vertex:If,morphcolor_vertex:Uf,morphnormal_vertex:Ff,morphtarget_pars_vertex:Of,morphtarget_vertex:zf,normal_fragment_begin:Bf,normal_fragment_maps:kf,normal_pars_fragment:Gf,normal_pars_vertex:Hf,normal_vertex:Vf,normalmap_pars_fragment:Wf,clearcoat_normal_fragment_begin:Xf,clearcoat_normal_fragment_maps:qf,clearcoat_pars_fragment:Yf,iridescence_pars_fragment:Zf,opaque_fragment:$f,packing:Kf,premultiplied_alpha_fragment:Jf,project_vertex:Qf,dithering_fragment:jf,dithering_pars_fragment:ep,roughnessmap_fragment:tp,roughnessmap_pars_fragment:np,shadowmap_pars_fragment:ip,shadowmap_pars_vertex:sp,shadowmap_vertex:rp,shadowmask_pars_fragment:ap,skinbase_vertex:op,skinning_pars_vertex:lp,skinning_vertex:cp,skinnormal_vertex:hp,specularmap_fragment:up,specularmap_pars_fragment:dp,tonemapping_fragment:fp,tonemapping_pars_fragment:pp,transmission_fragment:mp,transmission_pars_fragment:gp,uv_pars_fragment:_p,uv_pars_vertex:xp,uv_vertex:vp,worldpos_vertex:Mp,background_vert:Sp,background_frag:yp,backgroundCube_vert:bp,backgroundCube_frag:Ep,cube_vert:Tp,cube_frag:wp,depth_vert:Ap,depth_frag:Rp,distance_vert:Cp,distance_frag:Pp,equirect_vert:Dp,equirect_frag:Lp,linedashed_vert:Np,linedashed_frag:Ip,meshbasic_vert:Up,meshbasic_frag:Fp,meshlambert_vert:Op,meshlambert_frag:zp,meshmatcap_vert:Bp,meshmatcap_frag:kp,meshnormal_vert:Gp,meshnormal_frag:Hp,meshphong_vert:Vp,meshphong_frag:Wp,meshphysical_vert:Xp,meshphysical_frag:qp,meshtoon_vert:Yp,meshtoon_frag:Zp,points_vert:$p,points_frag:Kp,shadow_vert:Jp,shadow_frag:Qp,sprite_vert:jp,sprite_frag:em},ve={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},An={basic:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Yt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Yt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Yt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Yt([ve.points,ve.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Yt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Yt([ve.common,ve.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Yt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Yt([ve.sprite,ve.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Yt([ve.common,ve.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Yt([ve.lights,ve.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};An.physical={uniforms:Yt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const fr={r:0,b:0,g:0},tm=new it,ih=new Ve;ih.set(-1,0,0,0,1,0,0,0,1);function nm(s,e,t,n,i,r){const a=new ke(0);let o=i===!0?0:1,l,c,h=null,f=0,u=null;function d(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const v=x.backgroundBlurriness>0;b=e.get(b,v)}return b}function m(x){let b=!1;const v=d(x);v===null?g(a,o):v&&v.isColor&&(g(v,1),b=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(x,b){const v=d(b);v&&v.isCubeTexture?(c===void 0&&(c=new xt(new on(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:ji(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tm.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ih),c.material.toneMapped=je.getTransfer(v.colorSpace)!==ct,(h!==v||f!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new xt(new Cn(2,2),new St({name:"BackgroundMaterial",uniforms:ji(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=je.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,b){x.getRGB(fr,Jc(s)),t.buffers.color.setClear(fr.r,fr.g,fr.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:M,dispose:p}}function im(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(D,L,U,P,z){let B=!1;const W=f(D,P,U,L);r!==W&&(r=W,c(r.object)),B=d(D,P,U,z),B&&m(D,P,U,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,v(D,L,U,P),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function f(D,L,U,P){const z=P.wireframe===!0;let B=n[L.id];B===void 0&&(B={},n[L.id]=B);const W=D.isInstancedMesh===!0?D.id:0;let ee=B[W];ee===void 0&&(ee={},B[W]=ee);let H=ee[U.id];H===void 0&&(H={},ee[U.id]=H);let q=H[z];return q===void 0&&(q=u(l()),H[z]=q),q}function u(D){const L=[],U=[],P=[];for(let z=0;z<t;z++)L[z]=0,U[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:P,object:D,attributes:{},index:null}}function d(D,L,U,P){const z=r.attributes,B=L.attributes;let W=0;const ee=U.getAttributes();for(const H in ee)if(ee[H].location>=0){const j=z[H];let ge=B[H];if(ge===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),j===void 0||j.attribute!==ge||ge&&j.data!==ge.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function m(D,L,U,P){const z={},B=L.attributes;let W=0;const ee=U.getAttributes();for(const H in ee)if(ee[H].location>=0){let j=B[H];j===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));const ge={};ge.attribute=j,j&&j.data&&(ge.data=j.data),z[H]=ge,W++}r.attributes=z,r.attributesNum=W,r.index=P}function M(){const D=r.newAttributes;for(let L=0,U=D.length;L<U;L++)D[L]=0}function g(D){p(D,0)}function p(D,L){const U=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;U[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),z[D]!==L&&(s.vertexAttribDivisor(D,L),z[D]=L)}function x(){const D=r.newAttributes,L=r.enabledAttributes;for(let U=0,P=L.length;U<P;U++)L[U]!==D[U]&&(s.disableVertexAttribArray(U),L[U]=0)}function b(D,L,U,P,z,B,W){W===!0?s.vertexAttribIPointer(D,L,U,z,B):s.vertexAttribPointer(D,L,U,P,z,B)}function v(D,L,U,P){M();const z=P.attributes,B=U.getAttributes(),W=L.defaultAttributeValues;for(const ee in B){const H=B[ee];if(H.location>=0){let q=z[ee];if(q===void 0&&(ee==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),ee==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),q!==void 0){const j=q.normalized,ge=q.itemSize,Re=e.get(q);if(Re===void 0)continue;const Y=Re.buffer,ie=Re.type,Me=Re.bytesPerElement,Ae=ie===s.INT||ie===s.UNSIGNED_INT||q.gpuType===wo;if(q.isInterleavedBufferAttribute){const he=q.data,De=he.isInterleavedBuffer===!0?he.stride:he.itemSize,tt=q.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ie=0;Ie<H.locationSize;Ie++)p(H.location+Ie,he.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ie=0;Ie<H.locationSize;Ie++)g(H.location+Ie);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let Ie=0;Ie<H.locationSize;Ie++)b(H.location+Ie,ge/H.locationSize,ie,j,De*Me,(tt+ge/H.locationSize*Ie)*Me,Ae)}else{if(q.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)p(H.location+he,q.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let he=0;he<H.locationSize;he++)g(H.location+he);s.bindBuffer(s.ARRAY_BUFFER,Y);for(let he=0;he<H.locationSize;he++)b(H.location+he,ge/H.locationSize,ie,j,ge*Me,ge/H.locationSize*he*Me,Ae)}}else if(W!==void 0){const j=W[ee];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(H.location,j);break;case 3:s.vertexAttrib3fv(H.location,j);break;case 4:s.vertexAttrib4fv(H.location,j);break;default:s.vertexAttrib1fv(H.location,j)}}}}x()}function w(){A();for(const D in n){const L=n[D];for(const U in L){const P=L[U];for(const z in P){const B=P[z];for(const W in B)h(B[W].object),delete B[W];delete P[z]}}delete n[D]}}function E(D){if(n[D.id]===void 0)return;const L=n[D.id];for(const U in L){const P=L[U];for(const z in P){const B=P[z];for(const W in B)h(B[W].object),delete B[W];delete P[z]}}delete n[D.id]}function _(D){for(const L in n){const U=n[L];for(const P in U){const z=U[P];if(z[D.id]===void 0)continue;const B=z[D.id];for(const W in B)h(B[W].object),delete B[W];delete z[D.id]}}}function S(D){for(const L in n){const U=n[L],P=D.isInstancedMesh===!0?D.id:0,z=U[P];if(z!==void 0){for(const B in z){const W=z[B];for(const ee in W)h(W[ee].object),delete W[ee];delete z[B]}delete U[P],Object.keys(U).length===0&&delete n[L]}}}function A(){R(),a=!0,r!==i&&(r=i,c(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function sm(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rm(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(_){return!(_!==vn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const S=_===Rt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==rn&&_!==jt&&!S&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:v,maxSamples:w,samples:E}}function am(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ti,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,b=x*4;let v=p.clippingState||null;l.value=v,v=h(m,u,b,d);for(let w=0;w!==b;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=l.value,m!==!0||g===null){const p=d+M*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,v=d;b!==M;++b,v+=4)a.copy(f[b]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}class Go extends Wt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zc(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new on(5,5,5),r=new St({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:sn});r.uniforms.tEquirect.value=t;const a=new xt(i,r),o=t.minFilter;return t.minFilter===kn&&(t.minFilter=bt),new _o(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ol=256,om=3,lm=20,sh=256,rh=16,cm=3,hm=new O,um=new ke;class Fs{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _o(1,10,null),this._boxMesh=new xt(new on(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=hm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,m=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(um));const g=new _o(n,i,h);return g.position.copy(o),g.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=m,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ol,Bc(e))}_fromTexture(e,t){e.mapping===Ki||e.mapping===Ps?this._setSize(e.image.length===0?Ol:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=zl(e,!1,!1),n=Math.log2(e)-om;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=zl(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ki||e.mapping===Ps?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bl()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=dm(),this._integrationMaterial=fm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/rh);for(let a=0;a<=n;a++){const o=Fs.lodToRoughness(a,n);if(a>n-cm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(sh*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=pm());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}}function zl(s,e,t){return new Go(s,{minFilter:kn,generateMipmaps:e,type:Rt,colorSpace:Ji,depthBuffer:t})}function Bs(s,e,t){return new St({name:s,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:$t,blending:sn,depthTest:!1,depthWrite:!1})}function dm(){return Bs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sh}u

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
	`)}function fm(){return Bs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rh}},`

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
	`)}function pm(){return Bs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lm}
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
	`)}function Bl(){return Bs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function kl(){return Bs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mm(s){let e=new WeakMap,t=new WeakMap,n=null;function i(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Er||d===Qr)if(e.has(u)){const m=e.get(u).texture;return o(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const M=new Go(m.height);return M.fromEquirectangularTexture(s,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const d=u.mapping,m=d===Er||d===Qr,M=d===Ki||d===Ps;if(m||M){let g=t.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Fs(s)),g=m?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const x=u.image;return m&&x&&x.height>0||M&&x&&l(x)?(n===null&&(n=new Fs(s)),g=m?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,d){return d===Er?u.mapping=Ki:d===Qr&&(u.mapping=Ps),u}function l(u){let d=0;const m=6;for(let M=0;M<m;M++)u[M]!==void 0&&d++;return d===m}function c(u){const d=u.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function gm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Cr("WebGLRenderer: "+n+" extension not supported."),i}}}function _m(s,e,t,n){const i={},r=new WeakMap,a=new FinalizationRegistry(m=>delete i[m]);function o(m){l(m.target)}function l(m){m.index!==null&&e.remove(m.index);for(const g in m.attributes)e.remove(m.attributes[g]);m.removeEventListener("dispose",o),delete i[m.id],a.unregister(m);const M=r.get(m);M&&(e.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function c(m,M){return i[M.id]!==void 0||(M.addEventListener("dispose",o),i[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(m){const M=m.attributes;for(const g in M)e.update(M[g],s.ARRAY_BUFFER)}function f(m){const M=m.index,g=m.attributes.position;let p=0;if(g===void 0)return;const x=M!==null?M.array.length:g.array.length/3-1,b=g.count>=65535?qc:Xc,v=new b(Math.ceil(x/3)*6,1),w=v.array;if(M!==null){const _=M.array;p=M.version;for(let S=0,A=0;S<x;S+=3){const R=_[S+0],D=_[S+1],L=_[S+2];w[A++]=R,w[A++]=D,w[A++]=D,w[A++]=L,w[A++]=L,w[A++]=R}}else{p=g.version;for(let _=0,S=0;_<x;_+=3){const A=_+0,R=_+1,D=_+2;w[S++]=A,w[S++]=R,w[S++]=R,w[S++]=D,w[S++]=D,w[S++]=A}}v.version=p;const E=r.get(m);E&&e.remove(E),r.set(m,v)}function u(m){const M=r.get(m);if(M){const g=m.index;g!==null&&M.version<g.version&&f(m)}else f(m);return r.get(m)}function d(){for(const m in i){const M=i[m].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function xm(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(s.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let g=0;g<d;g++)M+=u[g];t.update(M,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mm(s,e,t){const n=new WeakMap,i=new yt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let A=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;d===!0&&(b=1),m===!0&&(b=2),M===!0&&(b=3);let v=o.attributes.position.count*b,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*w*4*f),_=new Hc(E,v,w,f);_.type=jt,_.needsUpdate=!0;const S=b*4;for(let R=0;R<f;R++){const D=g[R],L=p[R],U=x[R],P=v*w*4*R;for(let z=0;z<D.count;z++){const B=z*S;d===!0&&(i.fromBufferAttribute(D,z),E[P+B+0]=i.x,E[P+B+1]=i.y,E[P+B+2]=i.z,E[P+B+3]=0),m===!0&&(i.fromBufferAttribute(L,z),E[P+B+4]=i.x,E[P+B+5]=i.y,E[P+B+6]=i.z,E[P+B+7]=0),M===!0&&(i.fromBufferAttribute(U,z),E[P+B+8]=i.x,E[P+B+9]=i.y,E[P+B+10]=i.z,E[P+B+11]=U.itemSize===4?i.w:1)}}u={count:f,texture:_,size:new ze(v,w)},n.set(o,u),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Sm(s,e,t,n,i){let r=new WeakMap;function a(c){const h=i.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const ym={[Mo]:"LINEAR_TONE_MAPPING",[So]:"REINHARD_TONE_MAPPING",[yo]:"CINEON_TONE_MAPPING",[Vr]:"ACES_FILMIC_TONE_MAPPING",[Eo]:"AGX_TONE_MAPPING",[To]:"NEUTRAL_TONE_MAPPING",[bo]:"CUSTOM_TONE_MAPPING"};function bm(s,e,t,n,i,r){const a=new Wt(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new Dt;h.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qe([0,2,0,0,2,0],2));const f=new Qc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new xt(h,f),d=new ko(-1,1,1,-1,0,1);let m=null,M=null,g=!1,p,x=null,b=[],v=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),l!==null&&l.setSize(w,E);for(let _=0;_<b.length;_++){const S=b[_];S.setSize&&S.setSize(w,E)}},this.setEffects=function(w){b=w,v=b.length>0&&b[0].isRenderPass===!0;const E=a.width,_=a.height;b.length>0&&o===null&&(o=new Wt(E,_,{type:Rt,depthBuffer:!1,stencilBuffer:!1}),l=new Wt(E,_,{type:Rt,depthBuffer:!1,stencilBuffer:!1}));const S=i===!0&&b.some(A=>A.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ti(E,_),r===!0&&(c.format=Gn,c.type=yi)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let A=0;A<b.length;A++){const R=b[A];R.setSize&&R.setSize(E,_),S&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(w,E){if(g||w.toneMapping===Wn&&b.length===0)return!1;if(x=E,E!==null){const _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return v===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Wn,!0},this.hasRenderPass=function(){return v},this.end=function(w,E){w.toneMapping=p,g=!0;let _=a,S=o;for(let A=0;A<b.length;A++){const R=b[A];R.enabled!==!1&&(R.render(w,S,_,E),R.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(m!==w.outputColorSpace||M!==w.toneMapping){m=w.outputColorSpace,M=w.toneMapping,f.defines={},je.getTransfer(m)===ct&&(f.defines.SRGB_TRANSFER="");const A=ym[M];A&&(f.defines[A]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(x),w.render(u,d),x=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}const ah=new Bt,oh=new Ti(1,1),lh=new $c(1),ch=new Hc,hh=new Cu,uh=new Zc,Gl=[],Hl=[],Vl=new Float32Array(16),Wl=new Float32Array(9),Xl=new Float32Array(4);function ss(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Gl[i];if(r===void 0&&(r=new Float32Array(i),Gl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function qr(s,e){let t=Hl[e];t===void 0&&(t=new Int32Array(e),Hl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Em(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function wm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function Am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function Rm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Xl.set(n),s.uniformMatrix2fv(this.addr,!1,Xl),Pt(t,n)}}function Cm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Wl.set(n),s.uniformMatrix3fv(this.addr,!1,Wl),Pt(t,n)}}function Pm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Vl.set(n),s.uniformMatrix4fv(this.addr,!1,Vl),Pt(t,n)}}function Dm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function Nm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function Im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function Um(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Fm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function Om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function zm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Yr(s){return s.version===0&&(s.compareFunction=Oc,s.needsUpdate=!0),s}function Bm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Yr(oh):r=ah,t.setTexture2D(e||r,i)}function km(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hh,i)}function Gm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Yr(lh):r=uh,t.setTextureCube(e||r,i)}function Hm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ch,i)}function Vm(s){switch(s){case 5126:return Em;case 35664:return Tm;case 35665:return wm;case 35666:return Am;case 35674:return Rm;case 35675:return Cm;case 35676:return Pm;case 5124:case 35670:return Dm;case 35667:case 35671:return Lm;case 35668:case 35672:return Nm;case 35669:case 35673:return Im;case 5125:return Um;case 36294:return Fm;case 36295:return Om;case 36296:return zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Wm(s,e){s.uniform1fv(this.addr,e)}function Xm(s,e){const t=ss(e,this.size,2);s.uniform2fv(this.addr,t)}function qm(s,e){const t=ss(e,this.size,3);s.uniform3fv(this.addr,t)}function Ym(s,e){const t=ss(e,this.size,4);s.uniform4fv(this.addr,t)}function Zm(s,e){const t=ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $m(s,e){const t=ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Km(s,e){const t=ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Jm(s,e){s.uniform1iv(this.addr,e)}function Qm(s,e){s.uniform2iv(this.addr,e)}function jm(s,e){s.uniform3iv(this.addr,e)}function e0(s,e){s.uniform4iv(this.addr,e)}function t0(s,e){s.uniform1uiv(this.addr,e)}function n0(s,e){s.uniform2uiv(this.addr,e)}function i0(s,e){s.uniform3uiv(this.addr,e)}function s0(s,e){s.uniform4uiv(this.addr,e)}function r0(s,e,t){const n=this.cache,i=e.length,r=qr(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Yr(oh):a=ah;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function a0(s,e,t){const n=this.cache,i=e.length,r=qr(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hh,r[a])}function o0(s,e,t){const n=this.cache,i=e.length,r=qr(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=Yr(lh):a=uh;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function l0(s,e,t){const n=this.cache,i=e.length,r=qr(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||ch,r[a])}function c0(s){switch(s){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return Zm;case 35675:return $m;case 35676:return Km;case 5124:case 35670:return Jm;case 35667:case 35671:return Qm;case 35668:case 35672:return jm;case 35669:case 35673:return e0;case 5125:return t0;case 36294:return n0;case 36295:return i0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return l0}}class h0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vm(t.type)}}class u0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c0(t.type)}}class d0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const ya=/(\w+)(\])?(\[|\.)?/g;function ql(s,e){s.seq.push(e),s.map[e.id]=e}function f0(s,e,t){const n=s.name,i=n.length;for(ya.lastIndex=0;;){const r=ya.exec(n),a=ya.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ql(t,c===void 0?new h0(o,s,e):new u0(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new d0(o),ql(t,f)),t=f}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);f0(o,l,this)}const i=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Yl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const p0=37297;let m0=0;function g0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Zl=new Ve;function _0(s){je._getMatrix(Zl,je.workingColorSpace,s);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(s)){case Or:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $l(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+g0(s.getShaderSource(e),o)}else return r}function x0(s,e){const t=_0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const v0={[Mo]:"Linear",[So]:"Reinhard",[yo]:"Cineon",[Vr]:"ACESFilmic",[Eo]:"AgX",[To]:"Neutral",[bo]:"Custom"};function M0(s,e){const t=v0[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pr=new O;function S0(){je.getLuminanceCoefficients(pr);const s=pr.x.toFixed(4),e=pr.y.toFixed(4),t=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function b0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ss(s){return s!==""}function Kl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(s){return s.replace(T0,w0)}function w0(s,e){const t=Ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xo(t)}const A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(s){return s.replace(A0,R0)}function R0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function jl(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const C0={[ys]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function P0(s){return C0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const D0={[Ps]:"ENVMAP_MODE_REFRACTION"};function L0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":D0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const N0={[Ac]:"ENVMAP_BLENDING_MULTIPLY",[qh]:"ENVMAP_BLENDING_MIX",[Yh]:"ENVMAP_BLENDING_ADD"};function I0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":N0[s.combine]||"ENVMAP_BLENDING_NONE"}function U0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=P0(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=L0(t),f=I0(t),u=y0(t),d=b0(r),m=i.createProgram();let M,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ss).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ss).join(`
`),g.length>0&&(g+=`
`)):(M=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),g=[jl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Wn?M0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,x0("linearToOutputTexel",t.outputColorSpace),S0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=xo(a),a=Kl(a,t),a=Jl(a,t),o=xo(o),o=Kl(o,t),o=Jl(o,t),a=Ql(a),o=Ql(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",t.glslVersion===rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=p+M+a,b=p+g+o,v=Yl(i,i.VERTEX_SHADER,x),w=Yl(i,i.FRAGMENT_SHADER,b);i.attachShader(m,v),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(R){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(m)||"",L=i.getShaderInfoLog(v)||"",U=i.getShaderInfoLog(w)||"",P=D.trim(),z=L.trim(),B=U.trim();let W=!0,ee=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,v,w);else{const H=$l(i,v,"vertex"),q=$l(i,w,"fragment");rt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+H+`
`+q)}else P!==""?Be("WebGLProgram: Program Info Log:",P):(z===""||B==="")&&(ee=!1);ee&&(R.diagnostics={runnable:W,programLog:P,vertexShader:{log:z,prefix:M},fragmentShader:{log:B,prefix:g}})}i.deleteShader(v),i.deleteShader(w),_=new Pr(i,m),S=E0(i,m)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(m,p0)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=w,this}let F0=0;class O0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z0(e),t.set(e,n)),n}}class z0{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}}function B0(s){return s===bi||s===Ir||s===Ur}function k0(s,e,t,n,i,r){const a=new Vc,o=new O0,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,S,A,R,D,L){const U=R.fog,P=D.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||z,B),ee=u[_.type];let H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));const q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=q!==void 0?q.length:0;let ge=0;P.morphAttributes.position!==void 0&&(ge=1),P.morphAttributes.normal!==void 0&&(ge=2),P.morphAttributes.color!==void 0&&(ge=3);let Re,Y,ie,Me;if(ee){const xe=An[ee];Re=xe.vertexShader,Y=xe.fragmentShader}else{Re=_.vertexShader,Y=_.fragmentShader;const xe=o.getVertexShaderStage(_),ut=o.getFragmentShaderStage(_);o.update(_,xe,ut),ie=xe.id,Me=ut.id}const Ae=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),De=D.isInstancedMesh===!0,tt=D.isBatchedMesh===!0,Ie=!!_.map,et=!!_.matcap,$e=!!W,Ge=$e&&W.isPMREMTexture===!0,vt=!!_.aoMap,pt=!!_.lightMap,se=!!_.bumpMap&&_.wireframe===!1,ue=!!_.normalMap,be=!!_.displacementMap,_e=!!_.emissiveMap,Ne=!!_.metalnessMap,st=!!_.roughnessMap,mt=_.anisotropy>0,F=_.clearcoat>0,lt=_.diffuseRoughness>0,at=_.dispersion>0,We=_.retroreflectivity>0,ce=_.iridescence>0,ht=_.sheen>0,Pe=_.transmission>0,Oe=mt&&!!_.anisotropyMap,C=F&&!!_.clearcoatMap,y=F&&!!_.clearcoatNormalMap,k=F&&!!_.clearcoatRoughnessMap,te=lt&&!!_.diffuseRoughnessMap,Q=ce&&!!_.iridescenceMap,re=ce&&!!_.iridescenceThicknessMap,le=ht&&!!_.sheenColorMap,Z=ht&&!!_.sheenRoughnessMap,K=!!_.specularMap,ae=!!_.specularColorMap,N=!!_.specularIntensityMap,J=Pe&&!!_.transmissionMap,$=Pe&&!!_.thicknessMap,fe=!!_.gradientMap,oe=!!_.alphaMap,de=_.alphaTest>0,Le=!!_.alphaHash,Ye=!!_.extensions;let ne=Wn;_.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ne=s.toneMapping);const Ue=Ge?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Xe={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Re,fragmentShader:Y,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:Me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:tt,batchingColor:tt&&D._colorsTexture!==null,instancing:De,instancingColor:De&&D.instanceColor!==null,instancingMorph:De&&D.morphTexture!==null,outputColorSpace:Ae===null?s.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:et,envMap:$e,envMapMode:$e&&W.mapping,envMapPMREM:Ge,envMapMaxLod:Ge?Ue.length-1:null,envMapSize:Ge?Ue[0].width:null,aoMap:vt,lightMap:pt,bumpMap:se,normalMap:ue,displacementMap:be,emissiveMap:_e,normalMapObjectSpace:ue&&_.normalMapType===Kh,normalMapTangentSpace:ue&&_.normalMapType===Fr,packedNormalMap:ue&&_.normalMapType===Fr&&B0(_.normalMap.format),metalnessMap:Ne,roughnessMap:st,anisotropy:mt,anisotropyMap:Oe,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:y,clearcoatRoughnessMap:k,diffuseRoughness:lt,diffuseRoughnessMap:te,dispersion:at,retroreflection:We,iridescence:ce,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:ht,sheenColorMap:le,sheenRoughnessMap:Z,specularMap:K,specularColorMap:ae,specularIntensityMap:N,transmission:Pe,transmissionMap:J,thicknessMap:$,gradientMap:fe,opaque:_.transparent===!1&&_.blending===Yi&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:de,alphaHash:Le,combine:_.combine,mapUv:Ie&&d(_.map.channel),aoMapUv:vt&&d(_.aoMap.channel),lightMapUv:pt&&d(_.lightMap.channel),bumpMapUv:se&&d(_.bumpMap.channel),normalMapUv:ue&&d(_.normalMap.channel),displacementMapUv:be&&d(_.displacementMap.channel),emissiveMapUv:_e&&d(_.emissiveMap.channel),metalnessMapUv:Ne&&d(_.metalnessMap.channel),roughnessMapUv:st&&d(_.roughnessMap.channel),anisotropyMapUv:Oe&&d(_.anisotropyMap.channel),clearcoatMapUv:C&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&d(_.sheenRoughnessMap.channel),specularMapUv:K&&d(_.specularMap.channel),specularColorMapUv:ae&&d(_.specularColorMap.channel),specularIntensityMapUv:N&&d(_.specularIntensityMap.channel),transmissionMapUv:J&&d(_.transmissionMap.channel),thicknessMapUv:$&&d(_.thicknessMap.channel),alphaMapUv:oe&&d(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ue||mt),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ie||oe),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&ue===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:he,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ge,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===ct,decodeVideoTextureEmissive:_e&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===ct,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===zt,flipSided:_.side===$t,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&_.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function M(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)S.push(A),S.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(g(S,_),p(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function g(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const S=u[_.type];let A;if(S){const R=An[S];A=Vn.clone(R.uniforms)}else A=_.uniforms;return A}function b(_,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new U0(s,S,_,i),c.push(A),h.set(S,A)),A}function v(_){if(--_.usedTimes===0){const S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function E(){o.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:x,acquireProgram:b,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:E}}function G0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function H0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ec(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,m,M,g,p){let x=s[e];return x===void 0?(x={id:u.id,object:u,geometry:d,material:m,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:g,group:p},s[e]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=m,x.materialVariant=a(u),x.groupOrder=M,x.renderOrder=u.renderOrder,x.z=g,x.group=p),e++,x}function l(u,d,m,M,g,p,x){x.reversedDepth===!0&&(g=-g);const b=o(u,d,m,M,g,p);m.transmission>0?n.push(b):m.transparent===!0?i.push(b):t.push(b)}function c(u,d,m,M,g,p){const x=o(u,d,m,M,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function h(u,d){t.length>1&&t.sort(u||H0),n.length>1&&n.sort(d||ec),i.length>1&&i.sort(d||ec)}function f(){for(let u=e,d=s.length;u<d;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:f,sort:h}}function V0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new tc,s.set(n,[a])):i>=r.length?(a=new tc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function W0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new ke};break;case"SpotLight":t={position:new O,direction:new O,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function X0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let q0=0;function Y0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Z0(s){const e=new W0,t=X0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,r=new it,a=new it;function o(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,m=0,M=0,g=0,p=0,x=0,b=0,v=0,w=0,E=0,_=0,S=0,A=0,R=0;c.sort(Y0);for(let L=0,U=c.length;L<U;L++){const P=c[L],z=P.color,B=P.intensity,W=P.distance;let ee=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===bi?ee=P.shadow.map.texture:ee=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*B,f+=z.g*B,u+=z.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);R++}else if(P.isSunLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,j=t.get(P);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=ee;const ge=q.getViewportCount();for(let Re=0;Re<ge;Re++)n.sunShadowMatrix[M+Re]=q.getMatrix(Re),n.sunShadowCascade[M+Re]=q._cascadeData[Re];M+=ge,m++}n.sun[d]=H,d++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const q=P.shadow,j=t.get(P);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=ee,n.directionalShadowMatrix[g]=P.shadow.matrix,w++}n.directional[g]=H,g++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(z).multiplyScalar(B),H.distance=W,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[x]=H;const q=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,q.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=q.matrix,P.castShadow){const j=t.get(P);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=ee,_++}x++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(z).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[b]=H,b++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const q=P.shadow,j=t.get(P);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=ee,n.pointShadowMatrix[p]=P.shadow.matrix,E++}n.point[p]=H,p++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[v]=H,v++}}b>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const D=n.hash;(D.sunLength!==d||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==x||D.rectAreaLength!==b||D.hemiLength!==v||D.numSunShadows!==m||D.numDirectionalShadows!==w||D.numPointShadows!==E||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=b,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-A,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,D.sunLength=d,D.directionalLength=g,D.pointLength=p,D.spotLength=x,D.rectAreaLength=b,D.hemiLength=v,D.numSunShadows=m,D.numDirectionalShadows=w,D.numPointShadows=E,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=R,n.version=q0++)}function l(c,h){let f=0,u=0,d=0,m=0,M=0,g=0;const p=h.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){const v=c[x];if(v.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),f++}else if(v.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),u++}else if(v.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const w=n.rectArea[M];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function nc(s){const e=new Z0(s),t=[],n=[],i=[];function r(f){h.camera=f,t.length=0,n.length=0,i.length=0}function a(f){f.isLightProbeGrid?i.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),i.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function $0(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new nc(s),e.set(i,[o])):r>=a.length?(o=new nc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
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
}`,Q0=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],j0=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],ic=new it,ds=new O,ba=new O;function eg(s,e,t){let n=new Us;const i=new ze,r=new ze,a=new yt,o=new id,l=new sd,c={},h=t.maxTextureSize,f={[Si]:$t,[$t]:Si,[zt]:zt},u=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:K0,fragmentShader:J0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new Dt;m.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new xt(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let p=this.type;this.render=function(E,_,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Dh&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);const A=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(sn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=p!==this.type;U&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=E.length;P<z;P++){const B=E[P],W=B.shadow;if(W===void 0){Be("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ee=W.getFrameExtents();i.multiply(ee),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ee.x),i.x=r.x*ee.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ee.y),i.y=r.y*ee.y,W.mapSize.y=r.y));const H=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ms){if(B.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Wt(i.x,i.y,{format:bi,type:Rt,minFilter:bt,magFilter:bt,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Ti(i.x,i.y,jt),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=li,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At}else B.isPointLight?(W.map=new Go(i.x),W.map.depthTexture=new $c(i.x,Rn)):(W.map=new Wt(i.x,i.y),W.map.depthTexture=new Ti(i.x,i.y,Rn)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=li,this.type===ys?(W.map.depthTexture.compareFunction=H?Fc:Uc,W.map.depthTexture.minFilter=bt,W.map.depthTexture.magFilter=bt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=At,W.map.depthTexture.magFilter=At);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);const q=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();B.isPointLight!==!0&&W.updateMatrices(B,S);const j=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let ge=0;ge<q;ge++){const Re=W.getCamera(ge);if(B.isPointLight){const Y=W.camera,ie=W.matrix,Me=B.distance||Y.far;Me!==Y.far&&(Y.far=Me,Y.updateProjectionMatrix()),ds.setFromMatrixPosition(B.matrixWorld),Y.position.copy(ds),ba.copy(Y.position),ba.add(Q0[ge]),Y.up.copy(j0[ge]),Y.lookAt(ba),Y.updateMatrixWorld(),ie.makeTranslation(-ds.x,-ds.y,-ds.z),ic.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W._frustum.setFromProjectionMatrix(ic,Y.coordinateSystem,Y.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,ge),s.clear();else{ge===0&&(s.setRenderTarget(W.map),s.clear());const Y=W.getViewport(ge);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(a)}n=W.getFrustum(ge),v(_,S,Re,B,j,this.type)}W.isPointLightShadow!==!0&&this.type===Ms&&x(W,S),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(A,R,D)};function x(E,_){const S=e.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Wt(i.x,i.y,{format:bi,type:Rt}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(_,null,S,u,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(_,null,S,d,M,null)}function b(E,_,S,A){let R=null;const D=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)R=D;else if(R=S.isPointLight===!0?l:o,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const L=R.uuid,U=_.uuid;let P=c[L];P===void 0&&(P={},c[L]=P);let z=P[U];z===void 0&&(z=R.clone(),P[U]=z,_.addEventListener("dispose",w)),R=z}if(R.visible=_.visible,R.wireframe=_.wireframe,A===Ms?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:f[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const L=s.properties.get(R);L.light=S}return R}function v(E,_,S,A,R,D){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Ms)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const P=e.update(E),z=E.material;if(Array.isArray(z)){const B=P.groups;for(let W=0,ee=B.length;W<ee;W++){const H=B[W],q=z[H.materialIndex];if(q&&q.visible){const j=b(E,q,A,D);E.onBeforeShadow(s,E,_,S,P,j,H),s.renderBufferDirect(S,null,P,j,E,H),E.onAfterShadow(s,E,_,S,P,j,H)}}}else if(z.visible){const B=b(E,z,A,D);E.onBeforeShadow(s,E,_,S,P,B,null),s.renderBufferDirect(S,null,P,B,E,null),E.onAfterShadow(s,E,_,S,P,B,null)}}const U=E.children;for(let P=0,z=U.length;P<z;P++)v(U[P],_,S,A,R,D)}function w(E){E.target.removeEventListener("dispose",w);for(const S in c){const A=c[S],R=E.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function tg(s,e){function t(){let N=!1;const J=new yt;let $=null;const fe=new yt(0,0,0,0);return{setMask:function(oe){$!==oe&&!N&&(s.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){N=oe},setClear:function(oe,de,Le,Ye,ne){ne===!0&&(oe*=Ye,de*=Ye,Le*=Ye),J.set(oe,de,Le,Ye),fe.equals(J)===!1&&(s.clearColor(oe,de,Le,Ye),fe.copy(J))},reset:function(){N=!1,$=null,fe.set(-1,0,0,0)}}}function n(){let N=!1,J=!1,$=null,fe=null,oe=null;return{setReversed:function(de){if(J!==de){const Le=e.get("EXT_clip_control");de?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),J=de;const Ye=oe;oe=null,this.setClear(Ye)}},getReversed:function(){return J},setTest:function(de){de?he(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(de){$!==de&&!N&&(s.depthMask(de),$=de)},setFunc:function(de){if(J&&(de=ou[de]),fe!==de){switch(de){case Da:s.depthFunc(s.NEVER);break;case La:s.depthFunc(s.ALWAYS);break;case Na:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Ia:s.depthFunc(s.EQUAL);break;case Ua:s.depthFunc(s.GEQUAL);break;case Fa:s.depthFunc(s.GREATER);break;case Oa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=de}},setLocked:function(de){N=de},setClear:function(de){oe!==de&&(oe=de,J&&(de=1-de),s.clearDepth(de))},reset:function(){N=!1,$=null,fe=null,oe=null,J=!1}}}function i(){let N=!1,J=null,$=null,fe=null,oe=null,de=null,Le=null,Ye=null,ne=null;return{setTest:function(Ue){N||(Ue?he(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Ue){J!==Ue&&!N&&(s.stencilMask(Ue),J=Ue)},setFunc:function(Ue,Xe,xe){($!==Ue||fe!==Xe||oe!==xe)&&(s.stencilFunc(Ue,Xe,xe),$=Ue,fe=Xe,oe=xe)},setOp:function(Ue,Xe,xe){(de!==Ue||Le!==Xe||Ye!==xe)&&(s.stencilOp(Ue,Xe,xe),de=Ue,Le=Xe,Ye=xe)},setLocked:function(Ue){N=Ue},setClear:function(Ue){ne!==Ue&&(s.clearStencil(Ue),ne=Ue)},reset:function(){N=!1,J=null,$=null,fe=null,oe=null,de=null,Le=null,Ye=null,ne=null}}}const r=new t,a=new n,o=new i;let l={};const c=new WeakMap;let h={},f={},u={},d=new WeakMap,m=[],M=null,g=!1,p=null,x=null,b=null,v=null,w=null,E=null,_=null,S=new ke(0,0,0),A=0,R=!1,D=null,L=null,U=null,P=null,z=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ee>=1):H.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ee>=2);let q=null,j={};const ge=s.getParameter(s.SCISSOR_BOX),Re=s.getParameter(s.VIEWPORT),Y=new yt().fromArray(ge),ie=new yt().fromArray(Re);function Me(N,J,$,fe){const oe=new Uint8Array(4),de=s.createTexture();s.bindTexture(N,de),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<$;Le++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(J+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return de}const Ae={};Ae[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ae[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ae[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(s.DEPTH_TEST),a.setFunc(Cs),se(!1),ue(nl),he(s.CULL_FACE),vt(sn);function he(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function De(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function tt(N,J){return u[N]!==J?(s.bindFramebuffer(N,J),u[N]=J,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=J),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=J),!0):!1}function Ie(N,J){let $=m,fe=!1;if(N){$=d.get(J),$===void 0&&($=[],d.set(J,$));const oe=N.textures;if($.length!==oe.length||$[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Le=oe.length;de<Le;de++)$[de]=s.COLOR_ATTACHMENT0+de;$.length=oe.length,fe=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,fe=!0);fe&&s.drawBuffers($)}function et(N){return M!==N?(s.useProgram(N),M=N,!0):!1}const $e={[ni]:s.FUNC_ADD,[Lh]:s.FUNC_SUBTRACT,[Nh]:s.FUNC_REVERSE_SUBTRACT};$e[Ih]=s.MIN,$e[Uh]=s.MAX;const Ge={[Pa]:s.ZERO,[Fh]:s.ONE,[Oh]:s.SRC_COLOR,[bc]:s.SRC_ALPHA,[Gh]:s.SRC_ALPHA_SATURATE,[wc]:s.DST_COLOR,[Tc]:s.DST_ALPHA,[zh]:s.ONE_MINUS_SRC_COLOR,[Ec]:s.ONE_MINUS_SRC_ALPHA,[kh]:s.ONE_MINUS_DST_COLOR,[Bh]:s.ONE_MINUS_DST_ALPHA,[Hh]:s.CONSTANT_COLOR,[Vh]:s.ONE_MINUS_CONSTANT_COLOR,[Wh]:s.CONSTANT_ALPHA,[Xh]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(N,J,$,fe,oe,de,Le,Ye,ne,Ue){if(N===sn){g===!0&&(De(s.BLEND),g=!1);return}if(g===!1&&(he(s.BLEND),g=!0),N!==yc){if(N!==p||Ue!==R){if((x!==ni||w!==ni)&&(s.blendEquation(s.FUNC_ADD),x=ni,w=ni),Ue)switch(N){case Yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFunc(s.ONE,s.ONE);break;case il:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rt("WebGLState: Invalid blending: ",N);break}else switch(N){case Yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case il:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",N);break}b=null,v=null,E=null,_=null,S.set(0,0,0),A=0,p=N,R=Ue}return}oe=oe||J,de=de||$,Le=Le||fe,(J!==x||oe!==w)&&(s.blendEquationSeparate($e[J],$e[oe]),x=J,w=oe),($!==b||fe!==v||de!==E||Le!==_)&&(s.blendFuncSeparate(Ge[$],Ge[fe],Ge[de],Ge[Le]),b=$,v=fe,E=de,_=Le),(Ye.equals(S)===!1||ne!==A)&&(s.blendColor(Ye.r,Ye.g,Ye.b,ne),S.copy(Ye),A=ne),p=N,R=!1}function pt(N,J){N.side===zt?De(s.CULL_FACE):he(s.CULL_FACE);let $=N.side===$t;J&&($=!$),se($),N.blending===Yi&&N.transparent===!1?vt(sn):vt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const fe=N.stencilWrite;o.setTest(fe),fe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),_e(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(N){D!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),D=N)}function ue(N){N!==Ch?(he(s.CULL_FACE),N!==L&&(N===nl?s.cullFace(s.BACK):N===Ph?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),L=N}function be(N){N!==U&&(W&&s.lineWidth(N),U=N)}function _e(N,J,$){N?(he(s.POLYGON_OFFSET_FILL),(P!==J||z!==$)&&(P=J,z=$,a.getReversed()&&(J=-J,$=-$),s.polygonOffset(J,$))):De(s.POLYGON_OFFSET_FILL)}function Ne(N){N?he(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function st(N){N===void 0&&(N=s.TEXTURE0+B-1),q!==N&&(s.activeTexture(N),q=N)}function mt(N,J,$){$===void 0&&(q===null?$=s.TEXTURE0+B-1:$=q);let fe=j[$];fe===void 0&&(fe={type:void 0,texture:void 0},j[$]=fe),(fe.type!==N||fe.texture!==J)&&(q!==$&&(s.activeTexture($),q=$),s.bindTexture(N,J||Ae[N]),fe.type=N,fe.texture=J)}function F(){const N=j[q];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function We(){try{s.texSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function ce(){try{s.texSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function ht(){try{s.compressedTexSubImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function Pe(){try{s.compressedTexSubImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function Oe(){try{s.texStorage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function C(){try{s.texStorage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function y(){try{s.texImage2D(...arguments)}catch(N){rt("WebGLState:",N)}}function k(){try{s.texImage3D(...arguments)}catch(N){rt("WebGLState:",N)}}function te(N){return f[N]!==void 0?f[N]:s.getParameter(N)}function Q(N,J){f[N]!==J&&(s.pixelStorei(N,J),f[N]=J)}function re(N){Y.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Y.copy(N))}function le(N){ie.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function Z(N,J){let $=c.get(J);$===void 0&&($=new WeakMap,c.set(J,$));let fe=$.get(N);fe===void 0&&(fe=s.getUniformBlockIndex(J,N.name),s.uniformBlockBinding(J,fe,fe),$.set(N,fe))}function K(N,J,$){const oe=c.get(J).get(N);l[oe]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,oe,$),l[oe]=$)}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},q=null,j={},u={},l={},d=new WeakMap,m=[],M=null,g=!1,p=null,x=null,b=null,v=null,w=null,E=null,_=null,S=new ke(0,0,0),A=0,R=!1,D=null,L=null,U=null,P=null,z=null,Y.set(0,0,s.canvas.width,s.canvas.height),ie.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:De,bindFramebuffer:tt,drawBuffers:Ie,useProgram:et,setBlending:vt,setMaterial:pt,setFlipSided:se,setCullFace:ue,setLineWidth:be,setPolygonOffset:_e,setScissorTest:Ne,activeTexture:st,bindTexture:mt,unbindTexture:F,compressedTexImage2D:lt,compressedTexImage3D:at,texImage2D:y,texImage3D:k,pixelStorei:Q,getParameter:te,updateUBOMapping:Z,uniformBlockBinding:K,texStorage2D:Oe,texStorage3D:C,texSubImage2D:We,texSubImage3D:ce,compressedTexSubImage2D:ht,compressedTexSubImage3D:Pe,scissor:re,viewport:le,reset:ae}}function ng(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,f=new Set;let u;const d=new WeakMap,m=new Set,M=new FinalizationRegistry(C=>m.delete(C));let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,y){return g?new OffscreenCanvas(C,y):Ns("canvas")}function x(C,y,k){let te=1;const Q=Oe(C);if((Q.width>k||Q.height>k)&&(te=k/Math.max(Q.width,Q.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const re=Math.floor(te*Q.width),le=Math.floor(te*Q.height);u===void 0&&(u=p(re,le));const Z=y?p(re,le):u;return Z.width=re,Z.height=le,Z.getContext("2d").drawImage(C,0,0,re,le),Be("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+le+")."),Z}else return"data"in C&&Be("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function b(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(C,y,k,te,Q,re=!1){if(C!==null){if(s[C]!==void 0)return s[C];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le;te&&(le=e.get("EXT_texture_norm16"),le||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===s.RED&&(k===s.FLOAT&&(Z=s.R32F),k===s.HALF_FLOAT&&(Z=s.R16F),k===s.UNSIGNED_BYTE&&(Z=s.R8),k===s.UNSIGNED_SHORT&&le&&(Z=le.R16_EXT),k===s.SHORT&&le&&(Z=le.R16_SNORM_EXT)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.R8UI),k===s.UNSIGNED_SHORT&&(Z=s.R16UI),k===s.UNSIGNED_INT&&(Z=s.R32UI),k===s.BYTE&&(Z=s.R8I),k===s.SHORT&&(Z=s.R16I),k===s.INT&&(Z=s.R32I)),y===s.RG&&(k===s.FLOAT&&(Z=s.RG32F),k===s.HALF_FLOAT&&(Z=s.RG16F),k===s.UNSIGNED_BYTE&&(Z=s.RG8),k===s.UNSIGNED_SHORT&&le&&(Z=le.RG16_EXT),k===s.SHORT&&le&&(Z=le.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RG8UI),k===s.UNSIGNED_SHORT&&(Z=s.RG16UI),k===s.UNSIGNED_INT&&(Z=s.RG32UI),k===s.BYTE&&(Z=s.RG8I),k===s.SHORT&&(Z=s.RG16I),k===s.INT&&(Z=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),k===s.UNSIGNED_INT&&(Z=s.RGB32UI),k===s.BYTE&&(Z=s.RGB8I),k===s.SHORT&&(Z=s.RGB16I),k===s.INT&&(Z=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),k===s.UNSIGNED_INT&&(Z=s.RGBA32UI),k===s.BYTE&&(Z=s.RGBA8I),k===s.SHORT&&(Z=s.RGBA16I),k===s.INT&&(Z=s.RGBA32I)),y===s.RGB&&(k===s.UNSIGNED_SHORT&&le&&(Z=le.RGB16_EXT),k===s.SHORT&&le&&(Z=le.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),y===s.RGBA){const K=re?Or:je.getTransfer(Q);k===s.FLOAT&&(Z=s.RGBA32F),k===s.HALF_FLOAT&&(Z=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Z=K===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&le&&(Z=le.RGBA16_EXT),k===s.SHORT&&le&&(Z=le.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(C,y){let k;return C?y===null||y===Rn||y===yi?k=s.DEPTH24_STENCIL8:y===jt?k=s.DEPTH32F_STENCIL8:y===Ds&&(k=s.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Rn||y===yi?k=s.DEPTH_COMPONENT24:y===jt?k=s.DEPTH_COMPONENT32F:y===Ds&&(k=s.DEPTH_COMPONENT16),k}function S(C,y){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==At&&C.minFilter!==bt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=new WeakRef(C);n.get(C).__ref=y,m.add(y),M.register(C,y,y)}function R(C){const y=n.get(C).__ref;y!==void 0&&(m.delete(y),M.unregister(y))}function D(C){U(C.target)}function L(C){P(C.target)}function U(C){C.removeEventListener("dispose",D),R(C),B(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&f.delete(C)}function P(C){C.removeEventListener("dispose",L),R(C),ee(C)}function z(){for(const C of m){const y=C.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):U(y))}m.clear(),f.clear()}function B(C){const y=n.get(C);if(y.__webglInit===void 0)return;const k=C.source,te=d.get(k);if(te){const Q=te[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&W(C),Object.keys(te).length===0&&d.delete(k)}n.remove(C)}function W(C){const y=n.get(C);s.deleteTexture(y.__webglTexture);const k=C.source,te=d.get(k);delete te[y.__cacheKey],a.memory.textures--}function ee(C){const y=n.get(C);y.__depthDisposeCallback&&y.__depthDisposeCallback();const k=C.depthTexture;if(k&&k.renderTarget===C&&U(k),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let re=0;re<y.__webglFramebuffer[Q].length;re++)s.deleteFramebuffer(y.__webglFramebuffer[Q][re]);else s.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const te=C.textures;for(let Q=0,re=te.length;Q<re;Q++){const le=n.get(te[Q]);le.__webglTexture&&(s.deleteTexture(le.__webglTexture),a.memory.textures--),n.remove(te[Q])}n.remove(C)}let H=0;function q(){H=0}function j(){return H}function ge(C){H=C}function Re(){const C=H;return C>=i.maxTextures&&Be("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),H+=1,C}function Y(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.mipmapsAutoUpdate),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ie(C,y){const k=n.get(C);if(C.isVideoTexture&&ht(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const te=C.image;if(te===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function Me(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){pt(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function Ae(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){pt(k,C,y);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function he(C,y){const k=n.get(C);if(C.version>0&&k.__version!==C.version){se(k,C,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const De={[Sn]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[za]:s.MIRRORED_REPEAT},tt={[At]:s.NEAREST,[Zh]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[bt]:s.LINEAR,[jr]:s.LINEAR_MIPMAP_NEAREST,[kn]:s.LINEAR_MIPMAP_LINEAR},Ie={[Qh]:s.NEVER,[Oc]:s.ALWAYS,[jh]:s.LESS,[Uc]:s.LEQUAL,[eu]:s.EQUAL,[Fc]:s.GEQUAL,[tu]:s.GREATER,[nu]:s.NOTEQUAL};function et(C,y){if(y.type===jt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===bt||y.magFilter===jr||y.magFilter===Hs||y.magFilter===kn||y.minFilter===bt||y.minFilter===jr||y.minFilter===Hs||y.minFilter===kn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,De[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,De[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,De[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,tt[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,tt[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===At||y.minFilter!==Hs&&y.minFilter!==kn||y.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $e(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",D),A(y));const te=y.source;let Q=d.get(te);Q===void 0&&(Q={},d.set(te,Q));const re=Y(y);if(re!==C.__cacheKey){Q[re]===void 0&&(Q[re]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[re].usedTimes++;const le=Q[C.__cacheKey];le!==void 0&&(Q[C.__cacheKey].usedTimes--,le.usedTimes===0&&W(y)),C.__cacheKey=re,C.__webglTexture=Q[re].texture}return k}function Ge(C,y,k){return Math.floor(Math.floor(C/k)/y)}function vt(C,y,k,te){const re=C.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,k,te,y.data);else{re.sort((N,J)=>N.start-J.start);let le=0;for(let N=1;N<re.length;N++){const J=re[le],$=re[N],fe=J.start+J.count,oe=Ge($.start,y.width,4),de=Ge(J.start,y.width,4);$.start<=fe+1&&oe===de&&Ge($.start+$.count-1,y.width,4)===oe?J.count=Math.max(J.count,$.start+$.count-J.start):(++le,re[le]=$)}re.length=le+1;const Z=t.getParameter(s.UNPACK_ROW_LENGTH),K=t.getParameter(s.UNPACK_SKIP_PIXELS),ae=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let N=0,J=re.length;N<J;N++){const $=re[N],fe=Math.floor($.start/4),oe=Math.ceil($.count/4),de=fe%y.width,Le=Math.floor(fe/y.width),Ye=oe,ne=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,de),t.pixelStorei(s.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(s.TEXTURE_2D,0,de,Le,Ye,ne,k,te,y.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,Z),t.pixelStorei(s.UNPACK_SKIP_PIXELS,K),t.pixelStorei(s.UNPACK_SKIP_ROWS,ae)}}function pt(C,y,k){let te=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=s.TEXTURE_3D);const Q=$e(C,y),re=y.source;t.bindTexture(te,C.__webglTexture,s.TEXTURE0+k);const le=n.get(re);if(re.version!==le.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ne=je.getPrimaries(je.workingColorSpace),Ue=y.colorSpace===un?null:je.getPrimaries(y.colorSpace),Xe=y.colorSpace===un||ne===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let K=x(y.image,!1,i.maxTextureSize);K=Pe(y,K);const ae=r.convert(y.format,y.colorSpace),N=r.convert(y.type);let J=E(y.internalFormat,ae,N,y.normalized,y.colorSpace,y.isVideoTexture);et(te,y);let $;const fe=y.mipmaps,oe=y.isVideoTexture!==!0,de=le.__version===void 0||Q===!0,Le=re.dataReady,Ye=S(y,K);if(y.isDepthTexture)J=_(y.format===Gn,y.type),de&&(oe?t.texStorage2D(s.TEXTURE_2D,1,J,K.width,K.height):t.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,ae,N,null));else if(y.isDataTexture)if(fe.length>0){oe&&de&&t.texStorage2D(s.TEXTURE_2D,Ye,J,fe[0].width,fe[0].height);for(let ne=0,Ue=fe.length;ne<Ue;ne++)$=fe[ne],oe?Le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,ae,N,$.data):t.texImage2D(s.TEXTURE_2D,ne,J,$.width,$.height,0,ae,N,$.data);y.generateMipmaps=!1}else oe?(de&&t.texStorage2D(s.TEXTURE_2D,Ye,J,K.width,K.height),Le&&vt(y,K,ae,N)):t.texImage2D(s.TEXTURE_2D,0,J,K.width,K.height,0,ae,N,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){oe&&de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ye,J,fe[0].width,fe[0].height,K.depth);for(let ne=0,Ue=fe.length;ne<Ue;ne++)if($=fe[ne],y.format!==vn)if(ae!==null)if(oe){if(Le)if(y.layerUpdates.size>0){const Xe=Fl($.width,$.height,y.format,y.type);for(const xe of y.layerUpdates){const ut=$.data.subarray(xe*Xe/$.data.BYTES_PER_ELEMENT,(xe+1)*Xe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,xe,$.width,$.height,1,ae,ut)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,$.width,$.height,K.depth,ae,$.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,J,$.width,$.height,K.depth,0,$.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,$.width,$.height,K.depth,ae,N,$.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,J,$.width,$.height,K.depth,0,ae,N,$.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{oe&&de&&t.texStorage2D(s.TEXTURE_2D,Ye,J,fe[0].width,fe[0].height);for(let ne=0,Ue=fe.length;ne<Ue;ne++)$=fe[ne],y.format!==vn?ae!==null?oe?Le&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,ae,$.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,J,$.width,$.height,0,$.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,$.width,$.height,ae,N,$.data):t.texImage2D(s.TEXTURE_2D,ne,J,$.width,$.height,0,ae,N,$.data)}else if(y.isDataArrayTexture)if(oe){if(de&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ye,J,K.width,K.height,K.depth),Le)if(y.layerUpdates.size>0){const ne=Fl(K.width,K.height,y.format,y.type);for(const Ue of y.layerUpdates){const Xe=K.data.subarray(Ue*ne/K.data.BYTES_PER_ELEMENT,(Ue+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ue,K.width,K.height,1,ae,N,Xe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ae,N,K.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,J,K.width,K.height,K.depth,0,ae,N,K.data);else if(y.isData3DTexture)oe?(de&&t.texStorage3D(s.TEXTURE_3D,Ye,J,K.width,K.height,K.depth),Le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ae,N,K.data)):t.texImage3D(s.TEXTURE_3D,0,J,K.width,K.height,K.depth,0,ae,N,K.data);else if(y.isFramebufferTexture){if(de)if(oe)t.texStorage2D(s.TEXTURE_2D,Ye,J,K.width,K.height);else{let ne=K.width,Ue=K.height;for(let Xe=0;Xe<Ye;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,J,ne,Ue,0,ae,N,null),ne>>=1,Ue>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ne=s.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),f.add(y),ne.onpaint=Ue=>{const Xe=Ue.changedElements;for(const xe of f)Xe.includes(xe.image)&&(xe.needsUpdate=!0)},ne.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{const Xe=s.RGBA,xe=s.RGBA,ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Xe,xe,ut,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(fe.length>0){if(oe&&de){const ne=Oe(fe[0]);t.texStorage2D(s.TEXTURE_2D,Ye,J,ne.width,ne.height)}for(let ne=0,Ue=fe.length;ne<Ue;ne++)$=fe[ne],oe?Le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ae,N,$):t.texImage2D(s.TEXTURE_2D,ne,J,ae,N,$);y.generateMipmaps=!1}else if(oe){if(de){const ne=Oe(K);t.texStorage2D(s.TEXTURE_2D,Ye,J,ne.width,ne.height)}Le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae,N,K)}else t.texImage2D(s.TEXTURE_2D,0,J,ae,N,K);b(y)&&y.mipmapsAutoUpdate===!0&&v(te),le.__version=re.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function se(C,y,k){if(y.image.length!==6)return;const te=$e(C,y),Q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const re=n.get(Q);if(Q.version!==re.__version||te===!0){t.activeTexture(s.TEXTURE0+k);const le=je.getPrimaries(je.workingColorSpace),Z=y.colorSpace===un?null:je.getPrimaries(y.colorSpace),K=y.colorSpace===un||le===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ae=y.isCompressedTexture||y.image[0].isCompressedTexture,N=y.image[0]&&y.image[0].isDataTexture,J=[];for(let xe=0;xe<6;xe++)!ae&&!N?J[xe]=x(y.image[xe],!0,i.maxCubemapSize):J[xe]=N?y.image[xe].image:y.image[xe],J[xe]=Pe(y,J[xe]);const $=J[0],fe=r.convert(y.format,y.colorSpace),oe=r.convert(y.type);let de=E(y.internalFormat,fe,oe,y.normalized,y.colorSpace);const Le=y.isVideoTexture!==!0,Ye=re.__version===void 0||te===!0,ne=Q.dataReady;let Ue=S(y,$);et(s.TEXTURE_CUBE_MAP,y);let Xe;if(y.isDepthTexture){if(de=_(y.format===Gn,y.type),Ye)if(Le)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,de,$.width,$.height);else for(let xe=0;xe<6;xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,de,$.width,$.height,0,fe,oe,null)}else if(ae){Le&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,de,$.width,$.height);for(let xe=0;xe<6;xe++){Xe=J[xe].mipmaps;for(let ut=0;ut<Xe.length;ut++){const Lt=Xe[ut];y.format!==vn?fe!==null?Le?ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,0,0,Lt.width,Lt.height,fe,Lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,de,Lt.width,Lt.height,0,Lt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,0,0,Lt.width,Lt.height,fe,oe,Lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut,de,Lt.width,Lt.height,0,fe,oe,Lt.data)}}}else{if(Xe=y.mipmaps,Le&&Ye){Xe.length>0&&Ue++;const xe=Oe(J[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,de,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(N){Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,J[xe].width,J[xe].height,fe,oe,J[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,de,J[xe].width,J[xe].height,0,fe,oe,J[xe].data);for(let ut=0;ut<Xe.length;ut++){const qn=Xe[ut].image[xe].image;Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,0,0,qn.width,qn.height,fe,oe,qn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,de,qn.width,qn.height,0,fe,oe,qn.data)}}else{Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,fe,oe,J[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,de,fe,oe,J[xe]);for(let ut=0;ut<Xe.length;ut++){const Lt=Xe[ut];Le?ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,0,0,fe,oe,Lt.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ut+1,de,fe,oe,Lt.image[xe])}}}b(y)&&y.mipmapsAutoUpdate===!0&&v(s.TEXTURE_CUBE_MAP),re.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ue(C,y,k,te,Q,re){const le=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),K=E(k.internalFormat,le,Z,k.normalized,k.colorSpace),ae=n.get(y),N=n.get(k);if(N.__renderTarget=y,!ae.__hasExternalTextures){const J=Math.max(1,y.width>>re),$=Math.max(1,y.height>>re);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,K,J,$,y.depth,0,le,Z,null):t.texImage2D(Q,re,K,J,$,0,le,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),ce(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,Q,N.__webglTexture,0,We(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,Q,N.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(C,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const te=y.depthTexture,Q=te&&te.isDepthTexture?te.type:null,re=_(y.stencilBuffer,Q),le=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ce(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We(y),re,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,We(y),re,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,re,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,C)}else{const te=y.textures;for(let Q=0;Q<te.length;Q++){const re=te[Q],le=r.convert(re.format,re.colorSpace),Z=r.convert(re.type),K=E(re.internalFormat,le,Z,re.normalized,re.colorSpace);ce(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,We(y),K,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,We(y),K,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,K,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(C,y,k){const te=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=n.get(y.depthTexture);Q.__renderTarget=y;const re=te?y.depthTexture.image[0]:y.depthTexture.image;(!Q.__webglTexture||re.width!==y.width||re.height!==y.height)&&(re.width=y.width,re.height=y.height,y.depthTexture.needsUpdate=!0),te?he(y.depthTexture,0):ie(y.depthTexture,0);const le=Q.__webglTexture,Z=We(y),K=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,ae=y.depthTexture.format===Gn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===li)ce(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,K,le,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,ae,K,le,0);else if(y.depthTexture.format===Gn)ce(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,K,le,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,ae,K,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(C){const y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",Q)};te.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=te}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let te=0;te<6;te++)_e(y.__webglFramebuffer[te],C,te);else C.texture.mipmaps.length>0?_e(y.__webglFramebuffer[0],C,0):_e(y.__webglFramebuffer,C,0);else if(k){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=s.createRenderbuffer(),be(y.__webglDepthbuffer[te],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,re)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),be(y.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,re)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function st(C,y,k){const te=n.get(C);y!==void 0&&ue(te.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ne(C)}function mt(C){const y=C.texture,k=n.get(C),te=n.get(y);C.addEventListener("dispose",L),A(C);const Q=C.textures,re=C.isWebGLCubeRenderTarget===!0,le=Q.length>1;if(le||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=y.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let K=0;K<y.mipmaps.length;K++)k.__webglFramebuffer[Z][K]=s.createFramebuffer()}else k.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)k.__webglFramebuffer[Z]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(le)for(let Z=0,K=Q.length;Z<K;Z++){const ae=n.get(Q[Z]);ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&ce(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<Q.length;Z++){const K=Q[Z];k.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const ae=r.convert(K.format,K.colorSpace),N=r.convert(K.type),J=E(K.internalFormat,ae,N,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),$=We(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,J,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),be(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),et(s.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)ue(k.__webglFramebuffer[Z][K],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else ue(k.__webglFramebuffer[Z],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);b(y)?v(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(le){for(let Z=0,K=Q.length;Z<K;Z++){const ae=Q[Z],N=n.get(ae);let J=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,N.__webglTexture),et(J,ae),ue(k.__webglFramebuffer,C,ae,s.COLOR_ATTACHMENT0+Z,J,0),b(ae)&&v(J)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,te.__webglTexture),et(Z,y),y.mipmaps.length>0)for(let K=0;K<y.mipmaps.length;K++)ue(k.__webglFramebuffer[K],C,y,s.COLOR_ATTACHMENT0,Z,K);else ue(k.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,Z,0);b(y)?v(Z):y.mipmaps.length>0&&s.texParameteri(Z,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Ne(C)}function F(C){const y=C.textures;for(let k=0,te=y.length;k<te;k++){const Q=y[k];if(b(Q)&&Q.mipmapsAutoUpdate===!0){const re=w(C),le=n.get(Q).__webglTexture;t.bindTexture(re,le),v(re),t.unbindTexture()}}}const lt=[];function at(C){if(C.samples>0){if(ce(C)===!1){const y=C.textures,k=C.width,te=C.height;let Q=s.COLOR_BUFFER_BIT;const re=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(C),Z=y.length>1;if(Z)for(let ae=0;ae<y.length;ae++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ae=0;ae<y.length;ae++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const N=n.get(y[ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,N,0)}s.blitFramebuffer(0,0,k,te,0,0,k,te,Q,s.NEAREST),l===!0&&(lt.length=0,lt.push(s.COLOR_ATTACHMENT0+ae),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&lt.push(re),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ae=0;ae<y.length;ae++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,le.__webglColorRenderbuffer[ae]);const N=n.get(y[ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,N,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function We(C){return Math.min(i.maxSamples,C.samples)}function ce(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ht(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function Pe(C,y){const k=C.colorSpace,te=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ji&&k!==un&&(je.getTransfer(k)===ct?(te!==vn||Q!==rn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",k)),y}function Oe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Re,this.resetTextureUnits=q,this.getTextureUnits=j,this.setTextureUnits=ge,this.setTexture2D=ie,this.setTexture2DArray=Me,this.setTexture3D=Ae,this.setTextureCube=he,this.rebindTextures=st,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ce,this.dispose=z}function ig(s,e){function t(n,i=un){let r;const a=je.getTransfer(i);if(n===rn)return s.UNSIGNED_BYTE;if(n===Ao)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Dc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cc)return s.BYTE;if(n===Pc)return s.SHORT;if(n===Ds)return s.UNSIGNED_SHORT;if(n===wo)return s.INT;if(n===Rn)return s.UNSIGNED_INT;if(n===jt)return s.FLOAT;if(n===Rt)return s.HALF_FLOAT;if(n===Nc)return s.ALPHA;if(n===Ic)return s.RGB;if(n===vn)return s.RGBA;if(n===li)return s.DEPTH_COMPONENT;if(n===Gn)return s.DEPTH_STENCIL;if(n===Wr)return s.RED;if(n===Co)return s.RED_INTEGER;if(n===bi)return s.RG;if(n===Po)return s.RG_INTEGER;if(n===Do)return s.RGBA_INTEGER;if(n===Tr||n===wr||n===Ar||n===Rr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ba||n===ka||n===Ga||n===Ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===Ir||n===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Wa)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===qa)return r.COMPRESSED_R11_EAC;if(n===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ir)return r.COMPRESSED_RG11_EAC;if(n===Za)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$a||n===Ka||n===Ja||n===Qa||n===ja||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$a)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ka)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ja)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===so)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ro)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ao)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===ho||n===uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===co)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fo||n===po||n===Ur||n===mo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Kc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new St({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class og extends wi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,m=null;const M=typeof XRWebGLBinding<"u",g=new ag,p={},x=t.getContextAttributes();let b=null,v=null;const w=[],E=[],_=new ze;let S=null,A=null;const R=new hn;R.viewport=new yt;const D=new hn;D.viewport=new yt;const L=[R,D],U=new gd;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=w[Y];return ie===void 0&&(ie=new aa,w[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=w[Y];return ie===void 0&&(ie=new aa,w[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=w[Y];return ie===void 0&&(ie=new aa,w[Y]=ie),ie.getHandSpace()};function B(Y){const ie=E.indexOf(Y.inputSource);if(ie===-1)return;const Me=w[ie];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,c||a),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<w.length;Y++){const ie=E[Y];ie!==null&&(E[Y]=null,w[Y].disconnect(ie))}P=null,z=null,g.reset();for(const Y in p)delete p[Y];if(e.setRenderTarget(b),d=null,u=null,f=null,i=null,v=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),A!==null){const Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",W),i.addEventListener("inputsourceschange",ee),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ae=null,he=null;x.depth&&(he=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?Gn:li,Ae=x.stencil?yi:Rn);const De={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(De),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new Wt(u.textureWidth,u.textureHeight,{format:vn,type:rn,depthTexture:new Ti(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Me),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Wt(d.framebufferWidth,d.framebufferHeight,{format:vn,type:rn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(Y){for(let ie=0;ie<Y.removed.length;ie++){const Me=Y.removed[ie],Ae=E.indexOf(Me);Ae>=0&&(E[Ae]=null,w[Ae].disconnect(Me))}for(let ie=0;ie<Y.added.length;ie++){const Me=Y.added[ie];let Ae=E.indexOf(Me);if(Ae===-1){for(let De=0;De<w.length;De++)if(De>=E.length){E.push(Me),Ae=De;break}else if(E[De]===null){E[De]=Me,Ae=De;break}if(Ae===-1)break}const he=w[Ae];he&&he.connect(Me)}}function H(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ie=Y.near,Me=Y.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),U.near=D.near=R.near=ie,U.far=D.far=R.far=Me,(P!==U.near||z!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),P=U.near,z=U.far),U.layers.mask=Y.layers.mask|6,R.layers.mask=U.layers.mask&-5,D.layers.mask=U.layers.mask&-3;const Ae=Y.parent,he=U.cameras;H(U,Ae);for(let De=0;De<he.length;De++)H(he[De],Ae);U.projectionMatrix.copy(R.projectionMatrix),U.projectionMatrixInverse.copy(R.projectionMatrixInverse),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),q(Y,U,Ae)};function q(Y,ie,Me){Me===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Is*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let j=null;function ge(Y,ie){if(h=ie.getViewerPose(c||a),m=ie,h!==null){const Me=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Ae=!1;Me.length!==U.cameras.length&&(U.cameras.length=0,Ae=!0);for(let Ie=0;Ie<Me.length;Ie++){const et=Me[Ie];let $e=null;if(d!==null)$e=d.getViewport(et);else{const vt=f.getViewSubImage(u,et);$e=vt.viewport,Ie===0&&(e.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(v))}let Ge=L[Ie];Ge===void 0&&(Ge=new hn,Ge.layers.enable(Ie),Ge.viewport=new yt,L[Ie]=Ge),Ge.matrix.fromArray(et.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(et.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set($e.x,$e.y,$e.width,$e.height),Ie===0&&(U.matrix.copy(Ge.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ae===!0&&U.cameras.push(Ge)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const Ie=f.getDepthInformation(Me[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(Ie,i.renderState)}if(he&&he.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let Ie=0;Ie<Me.length;Ie++){const et=Me[Ie].camera;if(et){let $e=p[et];$e||($e=new Kc,p[et]=$e);const Ge=f.getCameraImage(et);$e.sourceTexture=Ge}}}}for(let Me=0;Me<w.length;Me++){const Ae=E[Me],he=w[Me];Ae!==null&&he!==void 0&&he.update(Ae,ie,c||a)}j&&j(Y,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Re=new nh;Re.setAnimationLoop(ge),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}}const lg=new it,dh=new Ve;dh.set(-1,0,0,0,1,0,0,0,1);function cg(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Jc(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,b,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$t&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$t&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),b=x.envMap,v=x.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(dh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hg(s,e,t,n){let i={},r={};function a(x,b){const v=b.program;n.uniformBlockBinding(x,v,i[x.id])}function o(x,b){let v=i[x.id];v===void 0&&(m(x),v=l(x),i[x.id]=v,x.addEventListener("dispose",g));const w=b.program;n.updateUBOMapping(x,w);const E=e.render.frame;r[x.id]!==E&&(c(x),r[x.id]=E)}function l(x){const b=s.createBuffer(),v=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,v,w),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function c(x){const b=i[x.id],v=x.uniforms,w=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let E=0,_=v.length;E<_;E++){const S=v[E];if(Array.isArray(S))for(let A=0,R=S.length;A<R;A++)h(S[A],E,A,w);else h(S,E,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(x,b,v,w){if(u(x,b,v,w)===!0){const E=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let A=0;A<_.length;A++){const R=_[A],D=M(R,!0);f(R,x.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,x.__data)}}function f(x,b,v){typeof x=="number"||typeof x=="boolean"?b[v]=x:x.isMatrix3?(b[v]=x.elements[0],b[v+1]=x.elements[1],b[v+2]=x.elements[2],b[v+3]=0,b[v+4]=x.elements[3],b[v+5]=x.elements[4],b[v+6]=x.elements[5],b[v+7]=0,b[v+8]=x.elements[6],b[v+9]=x.elements[7],b[v+10]=x.elements[8],b[v+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-v),v):x.toArray(b,v)}function u(x,b,v,w){const E=x.value,_=b+"_"+v;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);const S=w[_];let A=!1;for(let R=0;R<E.length;R++)d(E[R],S,R)===!0&&(A=!0);return A}return d(E,w,_)}function d(x,b,v){if(b[v]===void 0)return typeof x=="number"||typeof x=="boolean"?b[v]=x:ArrayBuffer.isView(x)?b[v]=x.slice():b[v]=x.clone(),!0;{const w=b[v];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return b[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function m(x){const b=x.uniforms;let v=0;const w=16;for(let _=0,S=b.length;_<S;_++){const A=Array.isArray(b[_])?b[_]:[b[_]];for(let R=0,D=A.length;R<D;R++){const L=A[R],U=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(b[_])||Array.isArray(L.value);let z=v;for(let W=0,ee=U.length;W<ee;W++){const H=U[W],q=M(H,P),j=v%w,ge=j%q.boundary,Re=j+ge;v+=ge,Re!==0&&w-Re<q.storage&&(v+=w-Re),W===0&&(z=v),v+=q.storage}const B=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new B((v-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}const E=v%w;return E>0&&(v+=w-E),x.__size=v,x.__cache={},this}function M(x,b){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function g(x){const b=x.target;b.removeEventListener("dispose",g),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);i={},r={}}return{bind:a,update:o,dispose:p}}const ug=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function dg(){return bn===null&&(bn=new Ei(ug,16,16,bi,Rt),bn.name="DFG_LUT",bn.minFilter=bt,bn.magFilter=bt,bn.wrapS=dn,bn.wrapT=dn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class fg{constructor(e={}){const{canvas:t=ru(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=rn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=d,g=new Set([Do,Po,Co]),p=new Set([rn,Rn,Ds,yi,Ao,Ro]),x=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let w=null,E=null;const _=[],S=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let D=!1,L=null,U=null,P=null,z=null;this._outputColorSpace=Zt;let B=0,W=0,ee=null,H=-1,q=null;const j=new yt,ge=new yt;let Re=null;const Y=new ke(0);let ie=0,Me=t.width,Ae=t.height,he=1,De=null,tt=null;const Ie=new yt(0,0,Me,Ae),et=new yt(0,0,Me,Ae);let $e=!1;const Ge=new Us,vt=new Fo;let pt=!1,se=!1;const ue=new it,be=new O,_e=new yt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function mt(){return ee===null?he:1}let F=n;function lt(T,I){return t.getContext(T,I)}let at,We,ce,ht,Pe,Oe,C,y,k,te,Q,re,le,Z,K,ae,N,J,$,fe,oe,de,Le;try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vo}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",xe,!1),F===null){const I="webgl2";if(F=lt(I,T),F===null)throw lt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(T){throw t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),rt("WebGLRenderer: "+T.message),T}function Ye(){at=new gm(F),at.init(),oe=new ig(F,at),We=new rm(F,at,e,oe),ce=new tg(F,at),We.reversedDepthBuffer&&u&&ce.buffers.depth.setReversed(!0),U=F.createFramebuffer(),P=F.createFramebuffer(),z=F.createFramebuffer(),ht=new vm(F),Pe=new G0,Oe=new ng(F,at,ce,Pe,We,oe,ht),C=new mm(R),y=new Md(F),de=new im(F,y),k=new _m(F,y,ht,de),te=new Sm(F,k,y,de,ht),J=new Mm(F,We,Oe),K=new am(Pe),Q=new k0(R,C,at,We,de,K),re=new cg(R,Pe),le=new V0,Z=new $0(at),N=new nm(R,C,ce,te,m,l),ae=new eg(R,te,We),Le=new hg(F,ht,We,ce),$=new sm(F,at,ht),fe=new xm(F,at,ht),ht.programs=Q.programs,R.capabilities=We,R.extensions=at,R.properties=Pe,R.renderLists=le,R.shadowMap=ae,R.state=ce,R.info=ht}M!==rn&&(A=new bm(M,t.width,t.height,o,i,r));const ne=new og(R,F);this.xr=ne,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(Me,Ae,!1))},this.getSize=function(T){return T.set(Me,Ae)},this.setSize=function(T,I,X=!0){if(ne.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=T,Ae=I,t.width=Math.floor(T*he),t.height=Math.floor(I*he),X===!0&&(t.style.width=T+"px",t.style.height=I+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(Me*he,Ae*he).floor()},this.setDrawingBufferSize=function(T,I,X){Me=T,Ae=I,he=X,t.width=Math.floor(T*X),t.height=Math.floor(I*X),this.setViewport(0,0,T,I)},this.setEffects=function(T){if(M===rn){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let I=0;I<T.length;I++)if(T[I].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(Ie)},this.setViewport=function(T,I,X,G){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,I,X,G),ce.viewport(j.copy(Ie).multiplyScalar(mt()).round())},this.getScissor=function(T){return T.copy(et)},this.setScissor=function(T,I,X,G){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,I,X,G),ce.scissor(ge.copy(et).multiplyScalar(mt()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(T){ce.setScissorTest($e=T)},this.setOpaqueSort=function(T){De=T},this.setTransparentSort=function(T){tt=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,I=!0,X=!0){let G=0;if(T){let V=!1;if(ee!==null){const me=ee.texture.format;V=g.has(me)}if(V){const me=ee.texture.type,Ee=p.has(me),pe=N.getClearColor(),Se=N.getClearAlpha(),Ce=pe.r,He=pe.g,Je=pe.b;Ee?(x[0]=Ce,x[1]=He,x[2]=Je,x[3]=Se,F.clearBufferuiv(F.COLOR,0,x)):(b[0]=Ce,b[1]=He,b[2]=Je,b[3]=Se,F.clearBufferiv(F.COLOR,0,b))}else G|=F.COLOR_BUFFER_BIT}I&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),N.dispose(),le.dispose(),Z.dispose(),Oe.dispose(),Pe.dispose(),C.dispose(),te.dispose(),k.dispose(),de.dispose(),Le.dispose(),Q.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",qo),ne.removeEventListener("sessionend",Yo),hi.stop()};function Ue(T){T.preventDefault(),ol("WebGLRenderer: Context Lost."),D=!0}function Xe(){ol("WebGLRenderer: Context Restored."),D=!1;const T=ht.autoReset,I=ae.enabled,X=ae.autoUpdate,G=ae.needsUpdate,V=ae.type;Ye(),ht.autoReset=T,ae.enabled=I,ae.autoUpdate=X,ae.needsUpdate=G,ae.type=V}function xe(T){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ut(T){const I=T.target;I.removeEventListener("dispose",ut),Lt(I)}function Lt(T){qn(T),Pe.remove(T)}function qn(T){const I=Pe.get(T).programs;I!==void 0&&(I.forEach(function(X){Q.releaseProgram(X)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,X,G,V,me){I===null&&(I=Ne);const Ee=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=wh(T,I,X,G,V);ce.setMaterial(G,Ee);let Se=X.index,Ce=1;if(G.wireframe===!0){if(Se=k.getWireframeAttribute(X),Se===void 0)return;Ce=2}const He=X.drawRange,Je=X.attributes.position;let Te=He.start*Ce,Qe=(He.start+He.count)*Ce;me!==null&&(Te=Math.max(Te,me.start*Ce),Qe=Math.min(Qe,(me.start+me.count)*Ce)),Se!==null?(Te=Math.max(Te,0),Qe=Math.min(Qe,Se.count)):Je!=null&&(Te=Math.max(Te,0),Qe=Math.min(Qe,Je.count));const Et=Qe-Te;if(Et<0||Et===1/0)return;de.setup(V,G,pe,X,Se);let gt,dt=$;if(Se!==null&&(gt=y.get(Se),dt=fe,dt.setIndex(gt)),V.isMesh)G.wireframe===!0?(ce.setLineWidth(G.wireframeLinewidth*mt()),dt.setMode(F.LINES)):dt.setMode(F.TRIANGLES);else if(V.isLine){let kt=G.linewidth;kt===void 0&&(kt=1),ce.setLineWidth(kt*mt()),V.isLineSegments?dt.setMode(F.LINES):V.isLineLoop?dt.setMode(F.LINE_LOOP):dt.setMode(F.LINE_STRIP)}else V.isPoints?dt.setMode(F.POINTS):V.isSprite&&dt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(at.get("WEBGL_multi_draw"))dt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const kt=V._multiDrawStarts,we=V._multiDrawCounts,Xt=V._multiDrawCount,ot=Se?y.get(Se).bytesPerElement:1,ui=Pe.get(G).currentProgram.getUniforms();for(let Gt=0;Gt<Xt;Gt++)ui.setValue(F,"_gl_DrawID",Gt),dt.render(kt[Gt]/ot,we[Gt])}else if(V.isInstancedMesh)dt.renderInstances(Te,Et,V.count);else if(X.isInstancedBufferGeometry){const kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,we=Math.min(X.instanceCount,kt);dt.renderInstances(Te,Et,we)}else dt.render(Te,Et)};function Xo(T,I,X,G){L!==null&&T.isNodeMaterial&&L.setObject(G,T),pt===!0&&K.setState(T,X,!1),T.transparent===!0&&T.side===zt&&T.forceSinglePass===!1?(T.side=$t,T.needsUpdate=!0,rs(T,I,G),T.side=Si,T.needsUpdate=!0,rs(T,I,G),T.side=zt):rs(T,I,G)}this.compile=function(T,I,X=null){X===null&&(X=T),L!==null&&L.renderStart(T,I,X),E=Z.get(X),E.init(I),S.push(E),X.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),se=this.localClippingEnabled,pt=K.init(this.clippingPlanes,se),pt===!0&&K.setGlobalState(this.clippingPlanes,I),L!==null&&ae.render(E.state.shadowsArray,X,I);const G=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){const pe=me[Ee];Xo(pe,X,I,V),G.add(pe)}else Xo(me,X,I,V),G.add(me)}),E=S.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(T,I,X=null){const G=this.compile(T,I,X);return new Promise(V=>{function me(){if(G.forEach(function(Ee){const Se=Pe.get(Ee).currentProgram;(Se===void 0||Se.isReady())&&G.delete(Ee)}),G.size===0){V(T);return}setTimeout(me,10)}at.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Kr=null;function Eh(T){Kr&&Kr(T)}function qo(){hi.stop()}function Yo(){hi.start()}const hi=new nh;hi.setAnimationLoop(Eh),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){Kr=T,ne.setAnimationLoop(T),T===null?hi.stop():hi.start()},ne.addEventListener("sessionstart",qo),ne.addEventListener("sessionend",Yo),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(T,I);const X=ne.enabled===!0&&ne.isPresenting===!0,G=A!==null&&(ee===null||X)&&A.begin(R,ee);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,I,ee),E=Z.get(T,S.length),E.init(I),E.state.textureUnits=Oe.getTextureUnits(),S.push(E),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?vt.setFromArrayCamera(I):Ge.setFromProjectionMatrix(ue,Mn,I.reversedDepth),se=this.localClippingEnabled,pt=K.init(this.clippingPlanes,se),w=le.get(T,_.length),w.init(),_.push(w),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&Jr(Ee,I,-1/0,R.sortObjects)}Jr(T,I,0,R.sortObjects),w.finish(),L!==null&&L.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(De,tt),st=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,st&&N.addToRenderList(w,T),this.info.autoReset===!0&&this.info.reset(),pt===!0&&K.beginShadows();const V=E.state.shadowsArray;if(ae.render(V,T,I),pt===!0&&K.endShadows(),(G&&A.hasRenderPass())===!1){const Ee=w.opaque,pe=w.transmissive;if(E.setupLights(),I.isArrayCamera){const Se=I.cameras;if(pe.length>0)for(let Ce=0,He=Se.length;Ce<He;Ce++){const Je=Se[Ce];$o(Ee,pe,T,Je)}st&&N.render(T);for(let Ce=0,He=Se.length;Ce<He;Ce++){const Je=Se[Ce];Zo(w,T,Je,Je.viewport)}}else pe.length>0&&$o(Ee,pe,T,I),st&&N.render(T),Zo(w,T,I)}ee!==null&&W===0&&(Oe.updateMultisampleRenderTarget(ee),Oe.updateRenderTargetMipmap(ee)),G&&A.end(R),T.isScene===!0&&T.onAfterRender(R,T,I),de.resetDefaultState(),H=-1,q=null,S.pop(),S.length>0?(E=S[S.length-1],Oe.setTextureUnits(E.state.textureUnits),pt===!0&&K.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,L!==null&&L.renderEnd()};function Jr(T,I,X,G){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){const Ee=I.isArrayCamera?vt:Ge;if(!T.frustumCulled||T.intersectsFrustum(Ee)){G&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);const pe=te.update(T),Se=T.material;Se.visible&&w.push(T,pe,Se,X,_e.z,null,I)}}else if(T.isMesh||T.isLine||T.isPoints){const Ee=I.isArrayCamera?vt:Ge;if(!T.frustumCulled||T.intersectsFrustum(Ee)){const pe=te.update(T),Se=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),_e.copy(pe.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Se)){const Ce=pe.groups;for(let He=0,Je=Ce.length;He<Je;He++){const Te=Ce[He],Qe=Se[Te.materialIndex];Qe&&Qe.visible&&w.push(T,pe,Qe,X,_e.z,Te,I)}}else Se.visible&&w.push(T,pe,Se,X,_e.z,null,I)}}}const me=T.children;for(let Ee=0,pe=me.length;Ee<pe;Ee++)Jr(me[Ee],I,X,G)}function Zo(T,I,X,G){const{opaque:V,transmissive:me,transparent:Ee}=T;E.setupLightsView(X),pt===!0&&K.setGlobalState(R.clippingPlanes,X),G&&ce.viewport(j.copy(G)),V.length>0&&ks(V,I,X),me.length>0&&ks(me,I,X),Ee.length>0&&ks(Ee,I,X),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function $o(T,I,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Te=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Wt(1,1,{generateMipmaps:!0,type:Te?Rt:rn,minFilter:kn,samples:Math.max(4,We.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const me=E.state.transmissionRenderTarget[G.id],Ee=G.viewport||j;me.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const pe=R.getRenderTarget(),Se=R.getActiveCubeFace(),Ce=R.getActiveMipmapLevel();R.setRenderTarget(me),R.getClearColor(Y),ie=R.getClearAlpha(),ie<1&&R.setClearColor(16777215,.5),R.clear(),st&&N.render(X);const He=R.toneMapping;R.toneMapping=Wn;const Je=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),pt===!0&&K.setGlobalState(R.clippingPlanes,G),ks(T,X,G),Oe.updateMultisampleRenderTarget(me),Oe.updateRenderTargetMipmap(me),at.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let Qe=0,Et=I.length;Qe<Et;Qe++){const gt=I[Qe],{object:dt,geometry:kt,material:we,group:Xt}=gt;if(we.side===zt&&dt.layers.test(G.layers)){const ot=we.side;we.side=$t,we.needsUpdate=!0,Ko(dt,X,G,kt,we,Xt),we.side=ot,we.needsUpdate=!0,Te=!0}}Te===!0&&(Oe.updateMultisampleRenderTarget(me),Oe.updateRenderTargetMipmap(me))}R.setRenderTarget(pe,Se,Ce),R.setClearColor(Y,ie),Je!==void 0&&(G.viewport=Je),R.toneMapping=He}function ks(T,I,X){const G=I.isScene===!0?I.overrideMaterial:null;for(let V=0,me=T.length;V<me;V++){const Ee=T[V],{object:pe,geometry:Se,group:Ce}=Ee;let He=Ee.material;He.allowOverride===!0&&G!==null&&(He=G),pe.layers.test(X.layers)&&Ko(pe,I,X,Se,He,Ce)}}function Ko(T,I,X,G,V,me){L!==null&&V.isNodeMaterial&&L.setObject(T,V),T.onBeforeRender(R,I,X,G,V,me),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(R,I,X,G,T,me),V.transparent===!0&&V.side===zt&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,R.renderBufferDirect(X,I,G,V,T,me),V.side=Si,V.needsUpdate=!0,R.renderBufferDirect(X,I,G,V,T,me),V.side=zt):R.renderBufferDirect(X,I,G,V,T,me),T.onAfterRender(R,I,X,G,V,me)}function Jo(T){let I=0;for(const X of T)X.texture!==null&&I++;return I}function rs(T,I,X){I.isScene!==!0&&(I=Ne);const G=Pe.get(T),V=E.state.lights,me=E.state.shadowsArray,Ee=V.state.version,pe=Q.getParameters(T,V.state,me,I,X,E.state.lightProbeGridArray),Se=Q.getProgramCacheKey(pe);let Ce=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;const He=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=C.get(T.envMap||G.environment,He),G.envMapRotation=G.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",ut),Ce=new Map,G.programs=Ce,G.programVariants=new Map);let Je=Ce.get(Se);if(Je!==void 0){if(G.currentProgram===Je&&G.lightsStateVersion===Ee)return jo(T,pe),Je}else pe.uniforms=Q.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,X,pe),T.onBeforeCompile(pe,R),Je=Q.acquireProgram(pe,Se),Ce.set(Se,Je),G.uniforms=pe.uniforms;const Te=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=K.uniform),jo(T,pe),G.needsLights=Rh(T),G.lightsStateVersion=Ee,G.needsLights&&(Te.ambientLightColor.value=V.state.ambient,Te.lightProbe.value=V.state.probe,Te.sunLights.value=V.state.sun,Te.sunLightShadows.value=V.state.sunShadow,Te.directionalLights.value=V.state.directional,Te.directionalLightShadows.value=V.state.directionalShadow,Te.spotLights.value=V.state.spot,Te.spotLightShadows.value=V.state.spotShadow,Te.rectAreaLights.value=V.state.rectArea,Te.ltc_1.value=V.state.rectAreaLTC1,Te.ltc_2.value=V.state.rectAreaLTC2,Te.pointLights.value=V.state.point,Te.pointLightShadows.value=V.state.pointShadow,Te.hemisphereLights.value=V.state.hemi,Te.sunShadowMatrix.value=V.state.sunShadowMatrix,Te.sunShadowCascade.value=V.state.sunShadowCascade,Te.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Te.spotLightMatrix.value=V.state.spotLightMatrix,Te.spotLightMap.value=V.state.spotLightMap,Te.pointShadowMatrix.value=V.state.pointShadowMatrix),G.numLightProbeGrids=Jo(E.state.lightProbeGridArray),G.currentProgram=Je,G.uniformsList=null,Je}function Th(T,I,X,G,V){const me=Pe.get(T),Ee=me.currentProgram.id+","+G+","+V;let pe=me.programVariants.get(Ee);return pe===void 0?(pe=rs(T,I,X),me.programVariants.set(Ee,pe)):(me.currentProgram=pe,me.uniformsList=null,me.outputColorSpace=G,me.toneMapping=V),pe}function Qo(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=Pr.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function jo(T,I){const X=Pe.get(T);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function wh(T,I,X,G,V){I.isScene!==!0&&(I=Ne),Oe.resetTextureUnits();const me=I.fog,Ee=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,pe=ee===null?R.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:je.workingColorSpace,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ce=C.get(G.envMap||Ee,Se),He=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Je=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,Et=!!X.morphAttributes.color;let gt=Wn;G.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(gt=R.toneMapping);const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,kt=dt!==void 0?dt.length:0,we=Pe.get(G),Xt=E.state.lights;if(pt===!0&&(se===!0||T!==q)){const Mt=T===q&&G.id===H;K.setState(G,T,Mt)}let ot=!1,ui=!1;G.version===we.__version?we.needsLights&&we.lightsStateVersion!==Xt.state.version||V.isBatchedMesh&&we.batching===!1||!V.isBatchedMesh&&we.batching===!0||V.isBatchedMesh&&we.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&we.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||V.isInstancedMesh&&we.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&we.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&we.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&we.instancingMorph===!1&&V.morphTexture!==null||we.envMap!==Ce||G.fog===!0&&we.fog!==me||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==K.numPlanes||we.numIntersection!==K.numIntersection)||we.vertexAlphas!==He||we.vertexTangents!==Je||we.morphTargets!==Te||we.morphNormals!==Qe||we.morphColors!==Et||we.morphTargetsCount!==kt||we.numLightProbeGrids!==Jo(E.state.lightProbeGridArray)?ot=!0:(we.outputColorSpace!==pe||we.toneMapping!==gt)&&(ui=!0):(ot=!0,we.__version=G.version);let Gt=we.currentProgram;(ot===!0||ui===!0)&&(Gt=ui===!0?Th(G,I,V,pe,gt):rs(G,I,V),L&&G.isNodeMaterial&&L.onUpdateProgram(G,Gt,we));let Gs=!1,Yn=!1,di=!1;const nt=Gt.getUniforms(),Ft=we.uniforms;if(ce.useProgram(Gt.program)&&(Gs=!0,Yn=!0,di=!0),G.id!==H&&(H=G.id,Yn=!0),Gs||q!==T){ce.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),nt.setValue(F,"projectionMatrix",T.projectionMatrix),nt.setValue(F,"viewMatrix",T.matrixWorldInverse);const Nt=nt.map.cameraPosition;Nt!==void 0&&Nt.setValue(F,be.setFromMatrixPosition(T.matrixWorld)),We.logarithmicDepthBuffer&&nt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&nt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),q!==T&&(q=T,Yn=!0,di=!0)}if(we.needsLights&&(Xt.state.sunShadowMap.length>0&&nt.setValue(F,"sunShadowMap",Xt.state.sunShadowMap,Oe),Xt.state.directionalShadowMap.length>0&&nt.setValue(F,"directionalShadowMap",Xt.state.directionalShadowMap,Oe),Xt.state.spotShadowMap.length>0&&nt.setValue(F,"spotShadowMap",Xt.state.spotShadowMap,Oe),Xt.state.pointShadowMap.length>0&&nt.setValue(F,"pointShadowMap",Xt.state.pointShadowMap,Oe)),V.isSkinnedMesh){nt.setOptional(F,V,"bindMatrix"),nt.setOptional(F,V,"bindMatrixInverse");const Mt=V.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),nt.setValue(F,"boneTexture",Mt.boneTexture,Oe))}V.isBatchedMesh&&(nt.setOptional(F,V,"batchingTexture"),nt.setValue(F,"batchingTexture",V._matricesTexture,Oe),nt.setOptional(F,V,"batchingIdTexture"),nt.setValue(F,"batchingIdTexture",V._indirectTexture,Oe),nt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&nt.setValue(F,"batchingColorTexture",V._colorsTexture,Oe));const fn=X.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&J.update(V,X,Gt),(Yn||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,nt.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Ft.envMapIntensity.value=I.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=dg()),Yn){if(nt.setValue(F,"toneMappingExposure",R.toneMappingExposure),we.needsLights&&Ah(Ft,di),me&&G.fog===!0&&re.refreshFogUniforms(Ft,me),re.refreshMaterialUniforms(Ft,G,he,Ae,E.state.transmissionRenderTarget[T.id]),we.needsLights&&we.numLightProbeGrids>0){const Mt=v;let Nt=0;for(const Dn of E.state.lightProbeGridArray)Dn.texture!==null&&(Mt.textures[Nt]=Dn.texture,Mt.min[Nt]=Dn.boundingBox.min,Mt.max[Nt]=Dn.boundingBox.max,Mt.resolution[Nt]=Dn.resolution,Nt++);for(const Dn in Mt)Mt[Dn].length=Nt;Ft.probesSH.value=Mt.textures,Ft.probesMin.value=Mt.min,Ft.probesMax.value=Mt.max,Ft.probesResolution.value=Mt.resolution}Pr.upload(F,Qo(we),Ft,Oe)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Pr.upload(F,Qo(we),Ft,Oe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&nt.setValue(F,"center",V.center),nt.setValue(F,"modelViewMatrix",V.modelViewMatrix),nt.setValue(F,"normalMatrix",V.normalMatrix),nt.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const Mt=G.uniformsGroups;for(let Nt=0,Dn=Mt.length;Nt<Dn;Nt++){const tl=Mt[Nt];Le.update(tl,Gt),Le.bind(tl,Gt)}}return Gt}function Ah(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.sunLights.needsUpdate=I,T.sunLightShadows.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function Rh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(T,I,X){const G=Pe.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Pe.get(T.texture).__webglTexture=I,Pe.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,I){const X=Pe.get(T);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,X=0){ee=T,B=I,W=X;let G=null,V=!1,me=!1;if(T){const pe=Pe.get(T);if(pe.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(F.FRAMEBUFFER,pe.__webglFramebuffer),j.copy(T.viewport),ge.copy(T.scissor),Re=T.scissorTest,ce.viewport(j),ce.scissor(ge),ce.setScissorTest(Re),H=-1;return}else if(pe.__webglFramebuffer===void 0)Oe.setupRenderTarget(T);else if(pe.__hasExternalTextures)Oe.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(pe.__boundDepthTexture!==He){if(He!==null&&Pe.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(T)}}const Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);const Ce=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[I])?G=Ce[I][X]:G=Ce[I],V=!0):T.samples>0&&Oe.useMultisampledRTT(T)===!1?G=Pe.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?G=Ce[X]:G=Ce,j.copy(T.viewport),ge.copy(T.scissor),Re=T.scissorTest}else j.copy(Ie).multiplyScalar(he).floor(),ge.copy(et).multiplyScalar(he).floor(),Re=$e;if(X!==0&&(G=U),ce.bindFramebuffer(F.FRAMEBUFFER,G)&&ce.drawBuffers(T,G),ce.viewport(j),ce.scissor(ge),ce.setScissorTest(Re),V){const pe=Pe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+I,pe.__webglTexture,X)}else if(me){const pe=I;for(let Se=0;Se<T.textures.length;Se++){const Ce=Pe.get(T.textures[Se]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Se,Ce.__webglTexture,X,pe)}}else if(T!==null&&X!==0){const pe=Pe.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,X)}H=-1};function el(T){const I=Pe.get(T);return(I.__readFormat!==T.format||I.__readType!==T.type)&&(I.__readFormat=T.format,I.__readType=T.type,I.__formatReadable=We.textureFormatReadable(T.format),I.__typeReadable=We.textureTypeReadable(T.type)),I}this.readRenderTargetPixels=function(T,I,X,G,V,me,Ee,pe=0){if(!(T&&T.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se){ce.bindFramebuffer(F.FRAMEBUFFER,Se);try{const Ce=T.textures[pe],He=Ce.format,Je=Ce.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);const Te=el(Ce);if(Te.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-G&&X>=0&&X<=T.height-V&&F.readPixels(I,X,G,V,oe.convert(He),oe.convert(Je),me)}finally{const Ce=ee!==null?Pe.get(ee).__webglFramebuffer:null;ce.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,I,X,G,V,me,Ee,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Se=Se[Ee],Array.isArray(Se)&&(Se=Se[0])),Se)if(I>=0&&I<=T.width-G&&X>=0&&X<=T.height-V){ce.bindFramebuffer(F.FRAMEBUFFER,Se);const Ce=T.textures[pe],He=Ce.format,Je=Ce.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);const Te=el(Ce);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(I,X,G,V,oe.convert(He),oe.convert(Je),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Et=ee!==null?Pe.get(ee).__webglFramebuffer:null;ce.bindFramebuffer(F.FRAMEBUFFER,Et);const gt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await au(F,gt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Qe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Qe),F.deleteSync(gt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,I=null,X=0){const G=Math.pow(2,-X),V=Math.floor(T.image.width*G),me=Math.floor(T.image.height*G),Ee=I!==null?I.x:0,pe=I!==null?I.y:0;Oe.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Ee,pe,V,me),ce.unbindTexture()},this.copyTextureToTexture=function(T,I,X=null,G=null,V=0,me=0){let Ee,pe,Se,Ce,He,Je,Te,Qe,Et;const gt=T.isCompressedTexture?T.mipmaps[me]:T.image;if(X!==null)Ee=X.max.x-X.min.x,pe=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,Ce=X.min.x,He=X.min.y,Je=X.isBox3?X.min.z:0;else{const nt=Math.pow(2,-V);Ee=Math.floor(gt.width*nt),pe=Math.floor(gt.height*nt),T.isDataArrayTexture?Se=gt.depth:T.isData3DTexture?Se=Math.floor(gt.depth*nt):Se=1,Ce=0,He=0,Je=0}G!==null?(Te=G.x,Qe=G.y,Et=G.z):(Te=0,Qe=0,Et=0);const dt=oe.convert(I.format),kt=oe.convert(I.type);let we;I.isData3DTexture?(Oe.setTexture3D(I,0),we=F.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Oe.setTexture2DArray(I,0),we=F.TEXTURE_2D_ARRAY):(Oe.setTexture2D(I,0),we=F.TEXTURE_2D),ce.activeTexture(F.TEXTURE0),ce.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,I.flipY),ce.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ce.pixelStorei(F.UNPACK_ALIGNMENT,I.unpackAlignment);const Xt=ce.getParameter(F.UNPACK_ROW_LENGTH),ot=ce.getParameter(F.UNPACK_IMAGE_HEIGHT),ui=ce.getParameter(F.UNPACK_SKIP_PIXELS),Gt=ce.getParameter(F.UNPACK_SKIP_ROWS),Gs=ce.getParameter(F.UNPACK_SKIP_IMAGES);ce.pixelStorei(F.UNPACK_ROW_LENGTH,gt.width),ce.pixelStorei(F.UNPACK_IMAGE_HEIGHT,gt.height),ce.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),ce.pixelStorei(F.UNPACK_SKIP_ROWS,He),ce.pixelStorei(F.UNPACK_SKIP_IMAGES,Je);const Yn=T.isDataArrayTexture||T.isData3DTexture,di=I.isDataArrayTexture||I.isData3DTexture;if(T.isDepthTexture){const nt=Pe.get(T),Ft=Pe.get(I),fn=Pe.get(nt.__renderTarget),Mt=Pe.get(Ft.__renderTarget);ce.bindFramebuffer(F.READ_FRAMEBUFFER,fn.__webglFramebuffer),ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Nt=0;Nt<Se;Nt++)Yn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.get(T).__webglTexture,V,Je+Nt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.get(I).__webglTexture,me,Et+Nt)),F.blitFramebuffer(Ce,He,Ce+Ee,He+pe,Te,Qe,Te+Ee,Qe+pe,F.DEPTH_BUFFER_BIT,F.NEAREST);ce.bindFramebuffer(F.READ_FRAMEBUFFER,null),ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||Pe.has(T)){const nt=Pe.get(T),Ft=Pe.get(I);ce.bindFramebuffer(F.READ_FRAMEBUFFER,P),ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let fn=0;fn<Se;fn++)Yn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nt.__webglTexture,V,Je+fn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nt.__webglTexture,V),di?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.__webglTexture,me,Et+fn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ft.__webglTexture,me),V!==0?F.blitFramebuffer(Ce,He,Ce+Ee,He+pe,Te,Qe,Te+Ee,Qe+pe,F.COLOR_BUFFER_BIT,F.NEAREST):di?F.copyTexSubImage3D(we,me,Te,Qe,Et+fn,Ce,He,Ee,pe):F.copyTexSubImage2D(we,me,Te,Qe,Ce,He,Ee,pe);ce.bindFramebuffer(F.READ_FRAMEBUFFER,null),ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else di?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(we,me,Te,Qe,Et,Ee,pe,Se,dt,kt,gt.data):I.isCompressedArrayTexture?F.compressedTexSubImage3D(we,me,Te,Qe,Et,Ee,pe,Se,dt,gt.data):F.texSubImage3D(we,me,Te,Qe,Et,Ee,pe,Se,dt,kt,gt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,Te,Qe,Ee,pe,dt,kt,gt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,Te,Qe,gt.width,gt.height,dt,gt.data):F.texSubImage2D(F.TEXTURE_2D,me,Te,Qe,Ee,pe,dt,kt,gt);ce.pixelStorei(F.UNPACK_ROW_LENGTH,Xt),ce.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),ce.pixelStorei(F.UNPACK_SKIP_PIXELS,ui),ce.pixelStorei(F.UNPACK_SKIP_ROWS,Gt),ce.pixelStorei(F.UNPACK_SKIP_IMAGES,Gs),me===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&F.generateMipmap(we),ce.unbindTexture()},this.initRenderTarget=function(T){Pe.get(T).__webglFramebuffer===void 0&&Oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Oe.setTextureCube(T,0):T.isData3DTexture?Oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Oe.setTexture2DArray(T,0):Oe.setTexture2D(T,0),ce.unbindTexture()},this.resetState=function(){B=0,W=0,ee=null,ce.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}const Mi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ci{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const pg=new ko(-1,1,1,-1,0,1);class mg extends Dt{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}}const gg=new mg;class Zr{constructor(e){this._mesh=new xt(gg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fh extends Ci{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vn.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Zr(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class sc extends Ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class _g extends Ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class xg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ze);this._width=n.width,this._height=n.height,t=new Wt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fh(Mi),this.copyPass.material.blending=sn,this.timer=new _d}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}sc!==void 0&&(a instanceof sc?n=!0:a instanceof _g&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const mr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class vg extends Ci{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vn.clone(mr.uniforms),this.material=new Qc({name:mr.name,uniforms:this.uniforms,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader}),this._fsQuad=new Zr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},je.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===So?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===To?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mg extends Ci{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ke}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}class Sg{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,m=e-u,M=t-d;let g,p;m>M?(g=1,p=0):(g=0,p=1);const x=m-g+h,b=M-p+h,v=m-1+2*h,w=M-1+2*h,E=l&255,_=c&255,S=this.perm[E+this.perm[_]]%12,A=this.perm[E+g+this.perm[_+p]]%12,R=this.perm[E+1+this.perm[_+1]]%12;let D=.5-m*m-M*M;D<0?n=0:(D*=D,n=D*D*this._dot(this.grad3[S],m,M));let L=.5-x*x-b*b;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[A],x,b));let U=.5-v*v-w*w;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[R],v,w)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o;const c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),u=Math.floor(n+c),d=1/6,m=(h+f+u)*d,M=h-m,g=f-m,p=u-m,x=e-M,b=t-g,v=n-p;let w,E,_,S,A,R;x>=b?b>=v?(w=1,E=0,_=0,S=1,A=1,R=0):x>=v?(w=1,E=0,_=0,S=1,A=0,R=1):(w=0,E=0,_=1,S=1,A=0,R=1):b<v?(w=0,E=0,_=1,S=0,A=1,R=1):x<v?(w=0,E=1,_=0,S=0,A=1,R=1):(w=0,E=1,_=0,S=1,A=1,R=0);const D=x-w+d,L=b-E+d,U=v-_+d,P=x-S+2*d,z=b-A+2*d,B=v-R+2*d,W=x-1+3*d,ee=b-1+3*d,H=v-1+3*d,q=h&255,j=f&255,ge=u&255,Re=this.perm[q+this.perm[j+this.perm[ge]]]%12,Y=this.perm[q+w+this.perm[j+E+this.perm[ge+_]]]%12,ie=this.perm[q+S+this.perm[j+A+this.perm[ge+R]]]%12,Me=this.perm[q+1+this.perm[j+1+this.perm[ge+1]]]%12;let Ae=.6-x*x-b*b-v*v;Ae<0?i=0:(Ae*=Ae,i=Ae*Ae*this._dot3(this.grad3[Re],x,b,v));let he=.6-D*D-L*L-U*U;he<0?r=0:(he*=he,r=he*he*this._dot3(this.grad3[Y],D,L,U));let De=.6-P*P-z*z-B*B;De<0?a=0:(De*=De,a=De*De*this._dot3(this.grad3[ie],P,z,B));let tt=.6-W*W-ee*ee-H*H;return tt<0?o=0:(tt*=tt,o=tt*tt*this._dot3(this.grad3[Me],W,ee,H)),32*(i+r+a+o)}noise4d(e,t,n,i){const r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,f,u,d,m;const M=(e+t+n+i)*l,g=Math.floor(e+M),p=Math.floor(t+M),x=Math.floor(n+M),b=Math.floor(i+M),v=(g+p+x+b)*c,w=g-v,E=p-v,_=x-v,S=b-v,A=e-w,R=t-E,D=n-_,L=i-S,U=A>R?32:0,P=A>D?16:0,z=R>D?8:0,B=A>L?4:0,W=R>L?2:0,ee=D>L?1:0,H=U+P+z+B+W+ee,q=a[H][0]>=3?1:0,j=a[H][1]>=3?1:0,ge=a[H][2]>=3?1:0,Re=a[H][3]>=3?1:0,Y=a[H][0]>=2?1:0,ie=a[H][1]>=2?1:0,Me=a[H][2]>=2?1:0,Ae=a[H][3]>=2?1:0,he=a[H][0]>=1?1:0,De=a[H][1]>=1?1:0,tt=a[H][2]>=1?1:0,Ie=a[H][3]>=1?1:0,et=A-q+c,$e=R-j+c,Ge=D-ge+c,vt=L-Re+c,pt=A-Y+2*c,se=R-ie+2*c,ue=D-Me+2*c,be=L-Ae+2*c,_e=A-he+3*c,Ne=R-De+3*c,st=D-tt+3*c,mt=L-Ie+3*c,F=A-1+4*c,lt=R-1+4*c,at=D-1+4*c,We=L-1+4*c,ce=g&255,ht=p&255,Pe=x&255,Oe=b&255,C=o[ce+o[ht+o[Pe+o[Oe]]]]%32,y=o[ce+q+o[ht+j+o[Pe+ge+o[Oe+Re]]]]%32,k=o[ce+Y+o[ht+ie+o[Pe+Me+o[Oe+Ae]]]]%32,te=o[ce+he+o[ht+De+o[Pe+tt+o[Oe+Ie]]]]%32,Q=o[ce+1+o[ht+1+o[Pe+1+o[Oe+1]]]]%32;let re=.6-A*A-R*R-D*D-L*L;re<0?h=0:(re*=re,h=re*re*this._dot4(r[C],A,R,D,L));let le=.6-et*et-$e*$e-Ge*Ge-vt*vt;le<0?f=0:(le*=le,f=le*le*this._dot4(r[y],et,$e,Ge,vt));let Z=.6-pt*pt-se*se-ue*ue-be*be;Z<0?u=0:(Z*=Z,u=Z*Z*this._dot4(r[k],pt,se,ue,be));let K=.6-_e*_e-Ne*Ne-st*st-mt*mt;K<0?d=0:(K*=K,d=K*K*this._dot4(r[te],_e,Ne,st,mt));let ae=.6-F*F-lt*lt-at*at-We*We;return ae<0?m=0:(ae*=ae,m=ae*ae*this._dot4(r[Q],F,lt,at,We)),27*(h+f+u+d+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}}const gr={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ze},cameraProjectionMatrix:{value:new it},cameraInverseProjectionMatrix:{value:new it},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

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

		}`},_r={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

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

		}`},xr={uniforms:{tDiffuse:{value:null},resolution:{value:new ze}},vertexShader:`varying vec2 vUv;

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

		}`};class ii extends Ci{constructor(e,t,n=512,i=512,r=32){super(),this.width=n,this.height=i,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const a=new Ti;a.format=Gn,a.type=yi,this.normalRenderTarget=new Wt(this.width,this.height,{minFilter:At,magFilter:At,type:Rt,depthTexture:a}),this.ssaoRenderTarget=new Wt(this.width,this.height,{type:Rt,depthBuffer:!1}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new St({defines:Object.assign({},gr.defines),uniforms:Vn.clone(gr.uniforms),vertexShader:gr.vertexShader,fragmentShader:gr.fragmentShader,blending:sn}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new nd,this.normalMaterial.blending=sn,this.blurMaterial=new St({defines:Object.assign({},xr.defines),uniforms:Vn.clone(xr.uniforms),vertexShader:xr.vertexShader,fragmentShader:xr.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new St({defines:Object.assign({},_r.defines),uniforms:Vn.clone(_r.uniforms),vertexShader:_r.vertexShader,fragmentShader:_r.fragmentShader,blending:sn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new St({uniforms:Vn.clone(Mi.uniforms),vertexShader:Mi.vertexShader,fragmentShader:Mi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:wc,blendDst:Pa,blendEquation:ni,blendSrcAlpha:Tc,blendDstAlpha:Pa,blendEquationAlpha:ni}),this._fsQuad=new Zr(null),this._originalClearColor=new ke}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,n){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case ii.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ii.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ii.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:n);break;case ii.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=sn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;case ii.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=yc,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_generateSampleKernel(e){const t=this.kernel;for(let n=0;n<e;n++){const i=new O;i.x=Math.random()*2-1,i.y=Math.random()*2-1,i.z=Math.random(),i.normalize();let r=n/e;r=bu.lerp(.1,1,r*r),i.multiplyScalar(r),t.push(i)}}_generateRandomKernelRotations(){const n=new Sg,i=16,r=new Float32Array(i);for(let a=0;a<i;a++){const o=Math.random()*2-1,l=Math.random()*2-1,c=0;r[a]=n.noise3d(o,l,c)}this.noiseTexture=new Ei(r,4,4,Wr,jt),this.noiseTexture.wrapS=Sn,this.noiseTexture.wrapT=Sn,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){const e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}ii.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const yg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class es extends Ci{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ze(e.x,e.y):new ze(256,256),this.clearColor=new ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wt(r,a,{type:Rt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Wt(r,a,{type:Rt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const u=new Wt(r,a,{type:Rt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}const o=yg;this.highPassUniforms=Vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ze(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vn.clone(Mi.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:Mi.vertexShader,fragmentShader:Mi.fragmentShader,premultipliedAlpha:!0,blending:Rs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ke,this._oldClearAlpha=1,this._basic=new Qi,this._fsQuad=new Zr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ze(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),r.push(c)}return new St({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ze(.5,.5)},direction:{value:new ze(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}es.BlurDirectionX=new ze(1,0);es.BlurDirectionY=new ze(0,1);const _t=Math.PI/180;function Fe(s,e,t){return Math.max(e,Math.min(t,s))}function Jt(s,e,t){return s+(e-s)*t}function ph(s,e,t,n){return Jt(s,e,1-Math.exp(-t*n))}function Dr(s,e,t){const n=Fe((t-s)/(e-s),0,1);return n*n*(3-2*n)}function mh(s,e){let t=(e-s)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function ri(s){let e=s>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function vi(s){return[Math.sin(s),Math.cos(s)]}function gh(s,e,t){const n=Math.cos(t),i=Math.sin(t);return[s*n+e*i,-s*i+e*n]}function kr(s,e,t){const n=Math.cos(t),i=Math.sin(t);return[s*n-e*i,s*i+e*n]}const ye={size:420,half:210,segments:180,water:0,borderStart:190,baseZ:176,baseR:16,spawnZ:150},Lr=[{id:0,label:"Performance",dpr:1,shadow:1024,range:56,trees:150,grass:650,reeds:200,rocks:70,treeShadow:!1,particles:220},{id:1,label:"Balanced",dpr:1.15,shadow:1536,range:70,trees:280,grass:5600,reeds:320,rocks:120,treeShadow:!1,particles:320},{id:2,label:"High",dpr:1.35,shadow:2048,range:80,trees:380,grass:8200,reeds:480,rocks:150,treeShadow:!1,particles:520}];function bg(){const s=new URLSearchParams(location.search).get("quality");if(s==="0"||s==="1"||s==="2")return Number(s);const e=navigator.hardwareConcurrency||4;return navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches?e<=4?0:2:e>=8?2:e<=4?0:1}const Nr={halberd:{id:"halberd",name:"Halberd",role:"Medium",blurb:"A modern gun tank. Long barrel, wedge turret, and enough pace to take a hill without waiting on the engine.",hp:1620,mass:42,accel:7.8,lowGear:1.22,maxSpeed:8.7,reverse:4,drag:.17,rollResist:1.35,brake:11,turn:.7,neutralTurn:.43,yawAccel:4.4,turretTurn:.81,gunSlew:.62,dep:8*_t,elev:20*_t,reload:9.3,damage:330,pen:198,shellSpeed:330,caliber:105,baseDisp:.32,moveDisp:.58,hullDisp:.32,turretDisp:.22,fireDisp:.85,aimRate:2.6,view:250,ricochet:70*_t,normalization:5*_t,armorHull:[130,70,45,24],armorTurret:[160,90,50,28],length:7.05,width:3.25,height:.86,turretLen:2.65,turretWid:2.15,turretH:.58,turretZ:-.15,gunLen:4.9,gunR:.075,wheels:6,susp:64,suspDamp:10,rangeNear:40,rangeFar:160},lynx:{id:"lynx",name:"Lynx",role:"Light",blurb:"A fast scout with a quick gun and paper-thin plate. Keep moving, spot the valley, and take the long way around.",hp:980,mass:22,accel:9.1,lowGear:1,maxSpeed:10.9,reverse:4.8,drag:.16,rollResist:1.35,brake:12,turn:.83,neutralTurn:.51,yawAccel:4.9,turretTurn:1.01,gunSlew:.75,dep:10*_t,elev:22*_t,reload:5.5,damage:185,pen:148,shellSpeed:375,caliber:75,baseDisp:.3,moveDisp:.42,hullDisp:.28,turretDisp:.2,fireDisp:.7,aimRate:3.6,view:285,ricochet:70*_t,normalization:4*_t,armorHull:[46,28,18,12],armorTurret:[44,26,16,10],length:5.15,width:2.15,height:.78,turretLen:1.45,turretWid:1.15,turretH:.38,turretZ:.05,gunLen:3.35,gunR:.045,wheels:4,susp:78,suspDamp:11,rangeNear:80,rangeFar:180},vanguard:{id:"vanguard",name:"Vanguard",role:"Medium",blurb:"The company workhorse. Enough glacis to angle on a ridge, enough pace to leave a bad piece of ground.",hp:1480,mass:36,accel:7.2,lowGear:1.2,maxSpeed:7.9,reverse:3.3,drag:.2,rollResist:1.7,brake:9,turn:.53,neutralTurn:.3,yawAccel:3.6,turretTurn:.72,gunSlew:.55,dep:8*_t,elev:20*_t,reload:8.5,damage:290,pen:176,shellSpeed:300,caliber:90,baseDisp:.35,moveDisp:.72,hullDisp:.38,turretDisp:.28,fireDisp:.95,aimRate:2.25,view:245,ricochet:70*_t,normalization:5*_t,armorHull:[96,62,42,20],armorTurret:[118,74,46,22],length:6.35,width:2.85,height:.95,turretLen:2.15,turretWid:1.7,turretH:.52,turretZ:.12,gunLen:4.15,gunR:.065,wheels:5,susp:52,suspDamp:9,rangeNear:45,rangeFar:150},bulwark:{id:"bulwark",name:"Bulwark",role:"Heavy",blurb:"A rolling bunker. Point the front at the enemy, creep the ridge, and make them waste shells on your glacis.",hp:2100,mass:54,accel:4.7,lowGear:1.45,maxSpeed:5.5,reverse:2.1,drag:.24,rollResist:2.05,brake:7,turn:.33,neutralTurn:.18,yawAccel:2.2,turretTurn:.47,gunSlew:.36,dep:6*_t,elev:18*_t,reload:13,damage:430,pen:218,shellSpeed:242,caliber:122,baseDisp:.42,moveDisp:1.05,hullDisp:.48,turretDisp:.34,fireDisp:1.15,aimRate:1.45,view:215,ricochet:70*_t,normalization:5*_t,armorHull:[188,96,62,28],armorTurret:[214,118,72,30],length:7.15,width:3.35,height:1.12,turretLen:2.55,turretWid:2.15,turretH:.7,turretZ:.18,gunLen:4.6,gunR:.09,wheels:6,susp:34,suspDamp:7.5,rangeNear:30,rangeFar:120}},Eg=["halberd","lynx","vanguard","bulwark"],rc=["Warden","Ash","Bramble","Cob","Drift","Ember","Flint"],Tg=["Barrow","Dunn","Holt","Keel","Marsh","Pike","Quinn"],wg=["lynx","vanguard","vanguard","bulwark","lynx","bulwark"],Ag=["lynx","vanguard","bulwark","vanguard","vanguard","bulwark","lynx"];function Pn(s){return Math.sin(s*.0115)*9+Math.sin(s*.0042+.6)*5}function Rg(s){return 10.5+Math.exp(-((s+155)**2)/2592)*18}const ai=[-88,76];function Cg(s){let t=-2.45-Math.exp(-((s+155)**2)/1800)*1.6;for(const n of ai){const i=Math.exp(-((s-n)**2)/450);t=t*(1-i)+-.18*i}return t}function $i(){return{x:0,z:Pn(0),halfX:5.2,halfZ:15.5,deckY:1.08}}function _h(){const s=$i(),e=Pn(ai[0]),t=Pn(ai[1]),n=-150,i=ye.spawnZ;return[[{x:-6,z:n},{x:-36,z:-108},{x:-72,z:-58},{x:ai[0],z:e},{x:-104,z:36},{x:-64,z:96},{x:-8,z:i}],[{x:0,z:n},{x:-6,z:-96},{x:0,z:s.z-34},{x:0,z:s.z},{x:0,z:s.z+34},{x:6,z:100},{x:0,z:i}],[{x:6,z:n},{x:28,z:-78},{x:58,z:t-26},{x:ai[1],z:t},{x:108,z:48},{x:64,z:108},{x:8,z:i}]]}function Pg(){const s=$i(),e=Pn(ai[0]),t=Pn(ai[1]);return[{x:-14,z:-52,lane:1},{x:8,z:s.z-30,lane:1},{x:-8,z:s.z+28,lane:1},{x:12,z:78,lane:1},{x:-70,z:-36,lane:0},{x:-96,z:e+18,lane:0},{x:-78,z:58,lane:0},{x:86,z:t-18,lane:2},{x:78,z:t+16,lane:2},{x:118,z:34,lane:2},{x:104,z:62,lane:2},{x:70,z:118,lane:2},{x:46,z:-58,lane:2},{x:-40,z:118,lane:0}]}const si={x:116,z:52,r:26};function ac(s){const e=s===0?-1:1,t=s===0?0:Math.PI,n=[-18,-9,0,9,18,-13,13],i=[0,-7,-1,-7,0,7,7];return n.map((r,a)=>({x:r,z:e*ye.spawnZ+e*i[a],yaw:t}))}function xh(s,e=1){const t=Math.max(0,s.angle-s.normalization);if(!(s.caliber>s.thickness*2.5)&&t>s.ricochet)return"ricochet";const i=s.thickness/Math.max(.2,Math.cos(t));return s.pen*e>=i?"pen":"bounce"}function Dg(){return[{name:"heavy front vs light gun",expect:"bounce",q:{thickness:188,angle:0,pen:148,caliber:75,ricochet:70*_t,normalization:5*_t}},{name:"heavy side vs heavy gun",expect:"pen",q:{thickness:96,angle:0,pen:218,caliber:122,ricochet:70*_t,normalization:5*_t}},{name:"grazing side plate",expect:"ricochet",q:{thickness:96,angle:80*_t,pen:218,caliber:90,ricochet:70*_t,normalization:5*_t}},{name:"overmatch thin roof",expect:"pen",q:{thickness:12,angle:75*_t,pen:148,caliber:75,ricochet:70*_t,normalization:5*_t}}].map(e=>{const t=xh(e.q,1);return{name:e.name,got:t,expect:e.expect,ok:t===e.expect}})}const vr=new O,Mr=new O,fs=new O,_i=new O,ps=new O;function vh(s,e,t){if(s<.8)return Math.atan2(e,Math.max(.2,s));const n=9.8,i=t*t,r=i*i-n*(n*s*s+2*e*i);return r<=0?Math.atan2(e,s):Math.atan((i-Math.sqrt(r))/(n*s))}function Mh(s,e,t,n,i,r,a,o,l,c,h,f){const u=[s,e,t],d=[n-s,i-e,r-t],m=[a,o,l],M=[c,h,f];let g=0,p=1,x=0,b=0,v=0;for(let E=0;E<3;E++){if(Math.abs(d[E])<1e-8){if(u[E]<m[E]||u[E]>M[E])return null;continue}let _=(m[E]-u[E])/d[E],S=(M[E]-u[E])/d[E],A=-1;if(_>S){const R=_;_=S,S=R,A=1}if(_>g&&(g=_,x=E===0?A:0,b=E===1?A:0,v=E===2?A:0),p=Math.min(p,S),g>p)return null}return p<0||g>1?null:{t:g>=0?g:0,nx:x,ny:b,nz:v}}class Lg{events=[];shells=[];tracerGeo=new on(.08,.08,1.25);allyMat=new Qi({color:16769698});foeMat=new Qi({color:14148863});anchor;constructor(e){this.anchor=e}steerLast(e,t,n,i,r,a){const o=this.shells[this.shells.length-1];if(!o?.alive)return;const l=i-e,c=r-t,h=a-n,f=Math.hypot(l,c,h)||1,u=Math.hypot(o.vx,o.vy,o.vz)||1;o.x=e,o.y=t,o.z=n,o.vx=l/f*u,o.vy=c/f*u,o.vz=h/f*u}get activeShells(){return this.shells.filter(e=>e.alive).length}clear(){for(const e of this.shells)e.mesh.removeFromParent();this.shells=[],this.events.length=0}tryFire(e){if(!e.alive||e.reload>0)return!1;e.group.updateMatrixWorld(!0),e.muzzle.getWorldPosition(_i),e.muzzle.getWorldDirection(ps);const t=Math.atan(e.dispersion/100),n=Math.random()*Math.PI*2,i=Math.sqrt(Math.random())*t,r=Math.atan2(ps.x,ps.z)+Math.cos(n)*i,a=Math.asin(Math.max(-1,Math.min(1,ps.y)))+Math.sin(n)*i,o=Math.cos(a),l=Math.sin(r)*o,c=Math.sin(a),h=Math.cos(r)*o,f=e.spec.shellSpeed,u=new xt(this.tracerGeo,e.team===0?this.allyMat:this.foeMat);return this.anchor.add(u),this.shells.push({alive:!0,x:_i.x+l*.6,y:_i.y+c*.6,z:_i.z+h*.6,vx:l*f,vy:c*f,vz:h*f,owner:e.id,team:e.team,damage:e.spec.damage,pen:e.spec.pen,caliber:e.spec.caliber,life:3.2,mesh:u}),e.fired(),this.events.push({type:"fire",a:e.id,b:-1,x:_i.x,y:_i.y,z:_i.z,n:0,dx:l,dy:c,dz:h}),!0}update(e,t,n,i,r){for(const a of this.shells){if(!a.alive)continue;a.life-=e;const o=Math.hypot(a.vx,a.vy,a.vz),l=Math.max(1,Math.ceil(o*e/.8)),c=e/l;let h=!1;for(let f=0;f<l&&!h;f++){const u=a.x,d=a.y,m=a.z;a.x+=a.vx*c,a.y+=a.vy*c,a.z+=a.vz*c,a.vy-=9.8*c,h=this.impact(a,u,d,m,t,n,i,r)}a.life<=0?this.killShell(a):this.pose(a)}this.shells=this.shells.filter(a=>a.alive)}pose(e){e.mesh.position.set(e.x,e.y,e.z),e.mesh.lookAt(e.x+e.vx,e.y+e.vy,e.z+e.vz)}killShell(e){e.alive=!1,e.mesh.removeFromParent()}impact(e,t,n,i,r,a,o,l){let c=1,h="",f=null,u=new O,d=null,m=!0;Math.hypot(e.x-t,e.y-n,e.z-i);for(const w of r){if(w.id===e.owner||w.team===e.team)continue;const E=this.hitMesh(w.hullMesh,w.hullBox,t,n,i,e.x,e.y,e.z),_=this.hitMesh(w.turretMesh,w.turretBox,t,n,i,e.x,e.y,e.z),S=Ng(E,_);!S||S.t>=c||(c=S.t,h="tank",f=w,u=S.n,d=S.mesh,m=S.mesh===w.hullMesh)}for(const w of o){const E=Ug(t,n,i,e.x,e.y,e.z,w);E&&E.t<c&&(c=E.t,h="solid",f=null)}for(const w of l){const E=Fg(t,n,i,e.x,e.y,e.z,w);E&&E<c&&(c=E,h="post",f=null)}const M=t+(e.x-t)*c,g=n+(e.y-n)*c,p=i+(e.z-i)*c;if(h===""&&g<=a.groundAt(M,p)+.08&&(h="ground",c=Math.min(c,1)),h==="")return!1;const x=t+(e.x-t)*c,b=h==="ground"?a.groundAt(M,p):n+(e.y-n)*c,v=i+(e.z-i)*c;if(e.x=x,e.y=b,e.z=v,h==="tank"&&f&&d)if(!f.alive)this.events.push({type:"ground",a:e.owner,b:f.id,x,y:b,z:v,n:0,dx:0,dy:1,dz:0});else{fs.copy(u).transformDirection(d.matrixWorld).normalize();const w=ps.set(e.vx,e.vy,e.vz).normalize(),E=Math.acos(Math.max(-1,Math.min(1,-w.dot(fs)))),_=Ig(u),S=m?f.spec.armorHull:f.spec.armorTurret,A=_==="front"?S[0]:_==="side"?S[1]:_==="rear"?S[2]:S[3],R=.85+Math.random()*.3,D=xh({thickness:A,angle:E,pen:e.pen,caliber:e.caliber,ricochet:f.spec.ricochet,normalization:f.spec.normalization},R);if(D==="pen"){const L=_==="side"||_==="rear"||R>1.08;let U=e.damage*(.9+Math.random()*.2);L&&(U*=1.15),f.hp-=U;const P=r.find(z=>z.id===e.owner);P&&(P.hits++,P.pens++,P.damageDealt+=U),this.events.push({type:"pen",a:e.owner,b:f.id,x,y:b,z:v,n:U,dx:w.x,dy:w.y,dz:w.z,note:L?"crit":"pen"}),f.hp<=0&&(f.kill(),P&&P.kills++,this.events.push({type:"kill",a:e.owner,b:f.id,x,y:b+1,z:v,n:U,dx:0,dy:1,dz:0}))}else{const L=r.find(U=>U.id===e.owner);L&&L.hits++,f.blocked+=e.damage,this.events.push({type:"bounce",a:e.owner,b:f.id,x,y:b,z:v,n:0,dx:fs.x,dy:fs.y,dz:fs.z,note:D==="ricochet"?"ricochet":"nodmg"})}}else this.events.push({type:"ground",a:e.owner,b:-1,x,y:b,z:v,n:0,dx:0,dy:1,dz:0});return this.killShell(e),!0}hitMesh(e,t,n,i,r,a,o,l){e.updateWorldMatrix(!0,!1),Ea.copy(e.matrixWorld).invert(),vr.set(n,i,r).applyMatrix4(Ea),Mr.set(a,o,l).applyMatrix4(Ea);const c=.2,h=Mh(vr.x,vr.y,vr.z,Mr.x,Mr.y,Mr.z,t.min.x-c,t.min.y-c,t.min.z-c,t.max.x+c,t.max.y+c,t.max.z+c);return h?{t:h.t,n:new O(h.nx,h.ny,h.nz),mesh:e}:null}}const Ea=new it;function Ng(s,e){return s?e?s.t<=e.t?s:e:s:e}function Ig(s){const e=Math.abs(s.x),t=Math.abs(s.y),n=Math.abs(s.z);return t>=e&&t>=n?"roof":n>=e?s.z>0?"front":"rear":"side"}function Ug(s,e,t,n,i,r,a){const[o,l]=kr(s-a.x,t-a.z,a.rot),[c,h]=kr(n-a.x,r-a.z,a.rot),f=Mh(o,e-a.y,l,c,i-a.y,h,-a.hx,-a.hy,-a.hz,a.hx,a.hy,a.hz);return f?{t:f.t}:null}function Fg(s,e,t,n,i,r,a){const o=n-s,l=r-t,c=s-a.x,h=t-a.z,f=o*o+l*l;if(f<1e-6)return null;const u=Math.max(0,Math.min(1,-(c*o+h*l)/f)),d=s+o*u,m=t+l*u,M=e+(i-e)*u;return(d-a.x)**2+(m-a.z)**2>a.r*a.r||M<a.y0||M>a.y1?null:u}const Sr=_h(),Og=Pg();function zg(s,e,t,n,i){const r=new Set;for(const a of s){if(!a.alive)continue;const o=a.y+2.15;for(const l of s){if(!l.alive||l.team===a.team)continue;const c=l.x-a.x,h=l.z-a.z,f=Math.hypot(c,l.y-a.y,h);f>a.spec.view&&f>48||f>48&&f>a.spec.view||!(f<46)&&!Sh(e,t,n,a.x,o,a.z,l.x,l.y+1.25,l.z)||r.add(l.id)}}for(const a of s)r.has(a.id)?a.detected=3:a.detected=Math.max(0,a.detected-i)}class Bg{mem=new Map;bind(e){this.mem.clear();let t=0,n=0;for(const i of e){if(i.player)continue;const r=i.team===0?t++:n++;this.mem.set(i.id,{lane:r%3,wp:0,hold:0,stuck:0,reverse:0,think:i.id*.05,hesitate:.4,target:-1})}}drive(e,t,n,i){const r=this.mem.get(e.id);if(!r||!e.alive)return{throttle:0,steer:0};r.think-=i,r.hesitate=Math.max(0,r.hesitate-i),r.reverse=Math.max(0,r.reverse-i);const a=t.filter(A=>A.alive&&A.team!==e.team),o=t.filter(A=>A.alive&&A.team===e.team);if(r.think<=0){r.think=.32;let A=-1,R=1/0;for(const U of a){if(U.detected<=0)continue;const P=Math.hypot(U.x-e.x,U.z-e.z);P<R&&(R=P,A=U.id)}r.target=A;const D=t.find(U=>U.id===A);e.hp/e.spec.hp<.3&&D&&R<90&&(r.hold=0),a.length<=2&&o.length>=a.length&&(r.hold=0)}const l=t.find(A=>A.id===r.target&&A.alive&&A.detected>0),c=Sr[r.lane]??Sr[0],h=e.team===0?c:[...c].reverse(),f=e.team===0?{x:0,z:ye.baseZ}:{x:0,z:-176},u=e.team===0?{x:0,z:-176}:{x:0,z:ye.baseZ};let d=h[Math.min(r.wp,h.length-1)];const m=e.hp/e.spec.hp<.3,M=l?Math.hypot(l.x-e.x,l.z-e.z):9999;if(a.length===0||a.length<=2&&!m)d=f;else if(m&&M<100)d=u;else if(l&&M<e.spec.rangeFar&&M>18){const A=kg(e,r.lane);A&&e.spec.id!=="lynx"&&(d=A),r.hold=e.spec.id==="lynx"?0:.4}const g=d.x-e.x,p=d.z-e.z;Math.hypot(g,p)<9&&r.wp<h.length-1&&d!==f&&d!==u&&r.wp++;let x=Math.atan2(g,p);l&&r.hold>0&&e.spec.id!=="lynx"&&(x=Math.atan2(l.x-e.x,l.z-e.z)+(e.spec.id==="bulwark"?.32:.22)*(e.id%2===0?1:-1));let b=mh(e.yaw,x),v=Fe(b/.42,-1,1),w=Math.abs(b)>1?.3:1;r.hold>0&&l&&Math.abs(b)<.35&&e.spec.id!=="lynx"&&(w=0),r.reverse>0&&(w=-.65,v=-v);const[E,_]=vi(e.yaw);if(n.sample(e.x+E*7,e.z+_*7).deep){const A=n.sample(e.x-_*6,e.z+E*6),R=n.sample(e.x+_*6,e.z-E*6);v=A.waterDepth<R.waterDepth?-1:1,w=.45}return w>.4&&Math.abs(e.speed)<.4?r.stuck+=i:r.stuck=Math.max(0,r.stuck-i*.5),r.stuck>1.25&&(r.reverse=.85,r.stuck=0,r.wp=Math.max(0,r.wp-1)),{throttle:w,steer:v}}aim(e,t,n,i,r,a){const o=this.mem.get(e.id);if(!o||!e.alive)return;const l=t.find(A=>A.id===o.target&&A.alive&&A.detected>0);if(!l){const A=Sr[o.lane]??Sr[0],R=e.team===0?A:[...A].reverse(),D=R[Math.min(o.wp,R.length-1)];e.aim(Math.atan2(D.x-e.x,D.z-e.z),0,a);return}const c=Math.hypot(l.x-e.x,l.z-e.z),h=c/e.spec.shellSpeed,[f,u]=vi(l.yaw),d=l.x+f*l.speed*h,m=l.z+u*l.speed*h,M=l.y+1.15;e.group.updateMatrixWorld(!0),e.muzzle.getWorldPosition(xi);const g=Math.hypot(d-xi.x,m-xi.z),p=vh(g,M-xi.y,e.spec.shellSpeed);e.aim(Math.atan2(d-e.x,m-e.z),p,a),e.group.updateMatrixWorld(!0),e.muzzle.getWorldDirection(yr);const x=d-xi.x,b=M-xi.y,v=m-xi.z,w=Math.hypot(x,b,v)||1,E=yr.x*(x/w)+yr.y*(b/w)+yr.z*(v/w),_=Sh(n,i,r,e.x,e.y+2.1,e.z,d,M,m),S=e.dispersion<e.spec.baseDisp+e.spec.moveDisp*.8;E>.996&&_&&S&&e.reload<=0&&o.hesitate<=0&&c<e.spec.view&&(e.aiFire=!0,o.hesitate=.2+Math.random()*.7)}}const xi=new O,yr=new O;function kg(s,e){let t=null,n=28;for(const i of Og){if(i.lane!==e)continue;const r=Math.hypot(i.x-s.x,i.z-s.z);r<n&&(n=r,t=i)}return t}function Sh(s,e,t,n,i,r,a,o,l){const c=a-n,h=o-i,f=l-r,u=Math.hypot(c,h,f),d=Math.max(2,Math.ceil(u/4));for(let m=1;m<d;m++){const M=m/d,g=n+c*M,p=i+h*M,x=r+f*M;if(p<s.groundAt(g,x)+.4)return!1}for(const m of e)if(!(Math.abs((n+a)/2-m.x)>u&&Math.abs((r+l)/2-m.z)>u)&&Gg(n,i,r,a,o,l,m))return!1;for(const m of t)if(Vg(n,i,r,a,o,l,m))return!1;return!0}function Gg(s,e,t,n,i,r,a){const o=n-s,l=i-e,c=r-t,h=6;for(let f=1;f<h;f++){const u=f/h,[d,m]=Hg(s+o*u-a.x,t+c*u-a.z,a.rot),M=e+l*u-a.y;if(Math.abs(d)<=a.hx&&Math.abs(M)<=a.hy&&Math.abs(m)<=a.hz)return!0}return!1}function Hg(s,e,t){const n=Math.cos(t),i=Math.sin(t);return[s*n-e*i,s*i+e*n]}function Vg(s,e,t,n,i,r,a){const o=n-s,l=r-t,c=o*o+l*l||1,h=Fe(-((s-a.x)*o+(t-a.z)*l)/c,0,1),f=s+o*h,u=t+l*h,d=e+(i-e)*h;return(f-a.x)**2+(u-a.z)**2<=a.r*a.r&&d>=a.y0&&d<=a.y1}function Wg(s,e,t,n,i){const r=s.createGain();return r.gain.setValueAtTime(1e-4,e),r.gain.exponentialRampToValueAtTime(Math.max(.001,i),e+t),r.gain.exponentialRampToValueAtTime(1e-4,e+n),r}class Xg{ctx=null;master=null;engineGain=null;engineFilter=null;oscA=null;oscB=null;lfo=null;started=!1;volume=.75;ensure(){if(this.ctx)return this.ctx;const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;const t=new e,n=t.createGain();return n.gain.value=this.volume,n.connect(t.destination),this.ctx=t,this.master=n,t}async unlock(){const e=this.ensure();e&&(e.state==="suspended"&&await e.resume(),this.startLoops())}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}suspend(){this.ctx?.suspend()}resume(){this.ctx?.resume()}noiseBuffer(e){const t=this.ctx;if(!t)return null;const n=Math.floor(t.sampleRate*e),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);let a=0;for(let o=0;o<n;o++){const l=Math.random()*2-1;a=a*.96+l*.04,r[o]=a*3.2}return i}startLoops(){if(this.started||!this.ctx||!this.master)return;this.started=!0;const e=this.ctx,t=e.createGain();t.gain.value=1e-4;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=180,n.Q.value=.7;const i=e.createOscillator();i.type="sawtooth",i.frequency.value=42;const r=e.createOscillator();r.type="square",r.frequency.value=84;const a=e.createGain();a.gain.value=.22;const o=e.createGain();o.gain.value=.08,i.connect(a),r.connect(o),a.connect(n),o.connect(n);const l=this.noiseBuffer(2);if(l){const d=e.createBufferSource();d.buffer=l,d.loop=!0;const m=e.createGain();m.gain.value=.35,d.connect(m),m.connect(n),d.start()}n.connect(t),t.connect(this.master);const c=e.createOscillator();c.frequency.value=12;const h=e.createGain();h.gain.value=90,c.connect(h),h.connect(n.frequency);const f=e.createGain();f.gain.value=.04,c.connect(f),f.connect(t.gain),i.start(),r.start(),c.start(),this.engineGain=t,this.engineFilter=n,this.oscA=i,this.oscB=r,this.lfo=c;const u=this.noiseBuffer(3);if(u){const d=e.createBufferSource();d.buffer=u,d.loop=!0;const m=e.createBiquadFilter();m.type="bandpass",m.frequency.value=420,m.Q.value=.4;const M=e.createGain();M.gain.value=.035,d.connect(m),m.connect(M),M.connect(this.master),d.start()}}updateEngine(e,t,n){if(!this.ctx||!this.oscA||!this.oscB||!this.engineFilter||!this.engineGain||!this.lfo)return;const i=Math.min(1,Math.abs(e)/Math.max(1,t)),r=Math.min(1,Math.abs(n)),a=this.ctx.currentTime,o=36+i*78+r*10;this.oscA.frequency.setTargetAtTime(o,a,.08),this.oscB.frequency.setTargetAtTime(o*2.02,a,.08),this.lfo.frequency.setTargetAtTime(7+i*18,a,.1),this.engineFilter.frequency.setTargetAtTime(140+i*900+r*220,a,.08);const l=.04+i*.09+r*.03;this.engineGain.gain.setTargetAtTime(l,a,.06)}silenceEngine(){!this.ctx||!this.engineGain||this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.1)}burst(e,t,n=1){const i=this.ensure();if(!i||!this.master)return;const r=i.currentTime,a=e==="boom"?.85:e==="shot"?.28:e==="bounce"?.22:.12,o=Wg(i,r,.012,a,t);if(o.connect(this.master),e==="shot"||e==="boom"||e==="pen"){const h=this.noiseBuffer(a);if(h){const f=i.createBufferSource();f.buffer=h,f.playbackRate.value=n;const u=i.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(e==="boom"?420:1800,r),u.frequency.exponentialRampToValueAtTime(e==="boom"?80:240,r+a),f.connect(u),u.connect(o),f.start(r),f.stop(r+a)}}const l=i.createOscillator();l.type=e==="bounce"?"triangle":"sine",e==="shot"?(l.frequency.setValueAtTime(150*n,r),l.frequency.exponentialRampToValueAtTime(40,r+a)):e==="boom"?(l.frequency.setValueAtTime(70,r),l.frequency.exponentialRampToValueAtTime(28,r+a)):e==="bounce"?(l.frequency.setValueAtTime(1400*n,r),l.frequency.exponentialRampToValueAtTime(500,r+a)):e==="pen"?(l.frequency.setValueAtTime(220,r),l.frequency.exponentialRampToValueAtTime(90,r+.08)):l.frequency.setValueAtTime(640,r);const c=i.createGain();c.gain.value=e==="boom"?.8:.35,l.connect(c),c.connect(o),l.start(r),l.stop(r+a)}shot(e){const t=Math.min(.55,8/Math.max(6,e));this.burst("shot",t,.85+Math.random()*.3)}boom(e){const t=Math.min(.7,18/Math.max(8,e));this.burst("boom",t,.8+Math.random()*.3)}pen(){this.burst("pen",.22,.9+Math.random()*.2)}bounce(){this.burst("bounce",.16,.85+Math.random()*.4)}ui(){this.burst("ui",.06,1)}}class qg{throttle=0;steer=0;pauseEdge=!1;mapEdge=!1;zoomDelta=0;keys=new Set;fireLatch=!1;lookX=0;lookY=0;sniperToggle=!1;enabled=!1;stickId=null;lookId=null;originX=0;originY=0;lastX=0;lastY=0;stickX=0;stickY=0;sens=.0033;layer;stick;knob;constructor(e,t,n){this.layer=e,this.stick=t,this.knob=n,window.addEventListener("keydown",o=>{o.repeat||(this.keys.add(o.code),this.enabled&&(o.code==="Space"&&(o.preventDefault(),this.fireLatch=!0),o.code==="KeyC"&&(this.sniperToggle=!this.sniperToggle),o.code==="KeyM"&&(this.mapEdge=!0),o.code==="Escape"&&(this.pauseEdge=!0)))}),window.addEventListener("keyup",o=>this.keys.delete(o.code)),window.addEventListener("blur",()=>this.keys.clear()),e.addEventListener("contextmenu",o=>o.preventDefault()),this.layer.style.touchAction="none",e.addEventListener("pointerdown",o=>this.onDown(o),{passive:!0}),window.addEventListener("pointermove",o=>this.onMove(o),{passive:!0}),window.addEventListener("pointerup",o=>this.onUp(o),{passive:!0}),window.addEventListener("pointercancel",o=>this.onUp(o),{passive:!0}),e.addEventListener("wheel",o=>{this.enabled&&(o.preventDefault(),this.zoomDelta+=o.deltaY)},{passive:!1});const i=document.querySelector("#btn-fire"),r=document.querySelector("#btn-zoom"),a=document.querySelector("#btn-pause");i?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.fireLatch=!0)}),r?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.sniperToggle=!this.sniperToggle)}),a?.addEventListener("pointerdown",o=>{o.stopPropagation(),o.preventDefault(),this.enabled&&(this.pauseEdge=!0)})}setEnabled(e){this.enabled=e,this.layer.hidden=!e,e||this.release()}setSniper(e){this.sens=e?.00105:.0033}isSniper(){return this.sniperToggle||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}consumeFire(){const e=this.fireLatch;return this.fireLatch=!1,e}consumeLook(){const e={x:this.lookX,y:this.lookY};return this.lookX=0,this.lookY=0,e}sample(){let e=0,t=0;if(this.keys.has("KeyW")&&(e+=1),this.keys.has("KeyS")&&(e-=1),this.keys.has("KeyA")&&(t+=1),this.keys.has("KeyD")&&(t-=1),this.stickId!==null&&(e=this.stickY,t=-this.stickX),!this.enabled){this.throttle=0,this.steer=0;return}this.throttle=oc(e),this.steer=oc(t)}onDown(e){if(!(!this.enabled||e.target.closest("[data-control]"))){if(e.pointerType==="touch"||e.pointerType==="pen"){const n=this.layer.getBoundingClientRect();e.clientX-n.left<n.width*.48&&this.stickId===null?(this.stickId=e.pointerId,this.originX=e.clientX,this.originY=e.clientY,this.placeStick(0,0),this.capture(e.pointerId)):this.lookId===null&&(this.lookId=e.pointerId,this.lastX=e.clientX,this.lastY=e.clientY,this.capture(e.pointerId));return}if(e.button===2){this.sniperToggle=!this.sniperToggle;return}e.button===0&&(this.fireLatch=!0,document.pointerLockElement!==this.layer&&this.layer.requestPointerLock?.())}}onMove(e){if(this.enabled){if(e.pointerId===this.stickId){const t=e.clientX-this.originX,n=e.clientY-this.originY,i=58,r=Math.hypot(t,n)||1,a=Math.min(i,r)/r;this.placeStick(t*a,n*a);const o=t*a/i,l=-(n*a)/i;this.stickX=lc(o),this.stickY=lc(l)}else e.pointerId===this.lookId&&(this.lookX+=e.clientX-this.lastX,this.lookY+=e.clientY-this.lastY,this.lastX=e.clientX,this.lastY=e.clientY);document.pointerLockElement===this.layer&&e.pointerType==="mouse"&&(this.lookX+=e.movementX,this.lookY+=e.movementY)}}onUp(e){e.pointerId===this.stickId&&(this.stickId=null,this.stickX=0,this.stickY=0,this.stick.hidden=!0),e.pointerId===this.lookId&&(this.lookId=null)}capture(e){try{this.layer.setPointerCapture(e)}catch{}}placeStick(e,t){this.stick.hidden=!1,this.stick.style.left=`${this.originX}px`,this.stick.style.top=`${this.originY}px`,this.knob.style.left=`${e}px`,this.knob.style.top=`${t}px`}release(){this.stickId=null,this.lookId=null,this.stickX=0,this.stickY=0,this.throttle=0,this.steer=0,this.stick.hidden=!0,document.pointerLockElement===this.layer&&document.exitPointerLock?.()}}function oc(s){return Math.max(-1,Math.min(1,s))}function lc(s){const t=Math.abs(s);if(t<.055)return 0;const n=Math.min(1,(t-.055)/(1-.055));return Math.sign(s)*n}function Yg(s,e){return new St({transparent:!0,depthWrite:!1,blending:e?Rs:Yi,uniforms:{uSprite:{value:s}},vertexShader:`
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
    `})}class cc{specks=[];pos;col;size;alpha;points;constructor(e,t,n){const i=new Dt;this.pos=new qe(new Float32Array(n*3),3),this.col=new qe(new Float32Array(n*3),3),this.size=new qe(new Float32Array(n),1),this.alpha=new qe(new Float32Array(n),1),this.pos.setUsage(Vs),this.col.setUsage(Vs),this.size.setUsage(Vs),this.alpha.setUsage(Vs),i.setAttribute("position",this.pos),i.setAttribute("color",this.col),i.setAttribute("size",this.size),i.setAttribute("alpha",this.alpha);const r=Yg(e,t);r.vertexColors=!0,this.points=new Ju(i,r),this.points.frustumCulled=!1,this.points.renderOrder=t?3:2}spawn(e){if(this.specks.length<this.pos.count)this.specks.push(e);else{let t=0;for(let n=1;n<this.specks.length;n++)this.specks[n].life<this.specks[t].life&&(t=n);this.specks[t].life<e.life&&(this.specks[t]=e)}}update(e){const t=this.pos.count;for(let n=0;n<t;n++){const i=this.specks[n];if(!i||i.life<=0){this.alpha.setX(n,0),this.size.setX(n,0);continue}i.life-=e,i.vx*=Math.max(0,1-i.drag*e),i.vy*=Math.max(0,1-i.drag*e),i.vz*=Math.max(0,1-i.drag*e),i.vy+=i.grav*e,i.x+=i.vx*e,i.y+=i.vy*e,i.z+=i.vz*e;const r=Math.max(0,i.life/i.max);this.pos.setXYZ(n,i.x,i.y,i.z),this.col.setXYZ(n,i.r,i.g,i.b),this.size.setX(n,i.size*(.6+(1-r)*1.4)),this.alpha.setX(n,r*r)}this.pos.needsUpdate=!0,this.col.needsUpdate=!0,this.size.needsUpdate=!0,this.alpha.needsUpdate=!0}}class Zg{fire;smoke;budget;constructor(e,t){this.budget=t,this.fire=new cc(e,!0,Math.max(80,t)),this.smoke=new cc(e,!1,Math.max(120,t))}get objects(){return[this.smoke.points,this.fire.points]}setBudget(e){this.budget=e}update(e){this.fire.update(e),this.smoke.update(e)}muzzle(e,t,n,i,r,a){this.fire.spawn({life:.08,max:.08,x:e,y:t,z:n,vx:i*2,vy:r*2,vz:a*2,size:2.4,r:1,g:.85,b:.45,drag:2,grav:0});for(let o=0;o<5;o++)this.smoke.spawn({life:.7,max:.7,x:e+i*.4,y:t,z:n+a*.4,vx:i*2+(Math.random()-.5),vy:.6+Math.random(),vz:a*2+(Math.random()-.5),size:1.1,r:.65,g:.62,b:.55,drag:1.4,grav:.2})}blast(e,t,n){const i=Math.min(42,Math.floor(this.budget/12));for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2,o=Math.random(),l=3+Math.random()*8;this.fire.spawn({life:.35+Math.random()*.3,max:.6,x:e,y:t,z:n,vx:Math.cos(a)*l*(1-o),vy:2+o*8,vz:Math.sin(a)*l*(1-o),size:1.6+Math.random()*2.2,r:1,g:.45+Math.random()*.3,b:.12,drag:1.2,grav:-4})}for(let r=0;r<i;r++){const a=Math.random()*Math.PI*2;this.smoke.spawn({life:2.2+Math.random()*1.4,max:3.2,x:e,y:t+.4,z:n,vx:Math.cos(a)*(1+Math.random()*2),vy:1.5+Math.random()*2.5,vz:Math.sin(a)*(1+Math.random()*2),size:2.2+Math.random(),r:.25,g:.22,b:.2,drag:.6,grav:.35})}for(let r=0;r<10;r++)this.smoke.spawn({life:3.1,max:3.1,x:e,y:t+r*.12,z:n,vx:(Math.random()-.5)*.5,vy:1.1+r*.18,vz:(Math.random()-.5)*.5,size:2.2+r*.35,r:.16,g:.15,b:.13,drag:.35,grav:.2})}dust(e,t,n){this.smoke.spawn({life:.55,max:.55,x:e,y:t,z:n,vx:(Math.random()-.5)*.8,vy:.4+Math.random()*.5,vz:(Math.random()-.5)*.8,size:.9,r:.62,g:.52,b:.36,drag:1.5,grav:.1})}splash(e,t,n){this.fire.spawn({life:.4,max:.4,x:e,y:t,z:n,vx:(Math.random()-.5)*2,vy:2+Math.random()*2,vz:(Math.random()-.5)*2,size:.7,r:.75,g:.85,b:.9,drag:1,grav:-6})}spark(e,t,n,i){for(let r=0;r<6;r++)this.fire.spawn({life:.25,max:.25,x:e,y:t,z:n,vx:(Math.random()-.5)*6,vy:Math.random()*4,vz:(Math.random()-.5)*6,size:.45,r:1,g:i?.75:.85,b:i?.3:.7,drag:1.5,grav:-8})}dirt(e,t,n){for(let i=0;i<8;i++)this.smoke.spawn({life:.5,max:.5,x:e,y:t,z:n,vx:(Math.random()-.5)*4,vy:1+Math.random()*3,vz:(Math.random()-.5)*4,size:.8,r:.45,g:.36,b:.24,drag:1.2,grav:-6})}}const ms=new it;class $g{mesh;index=0;constructor(e=900){const t=new Cn(.5,.95);t.rotateX(-Math.PI/2);const n=new Qi({color:2893342,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});this.mesh=new jn(t,n,e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1;for(let i=0;i<e;i++)ms.makeScale(.001,.001,.001),this.mesh.setMatrixAt(i,ms);this.mesh.instanceMatrix.needsUpdate=!0}stamp(e,t,n,i,r){const a=this.mesh.instanceMatrix.count;for(const o of[-1,1]){const l=Math.cos(i)*o*r*.38,c=-Math.sin(i)*o*r*.38;ms.makeRotationY(i),ms.setPosition(e+l,t+.04,n+c),this.mesh.setMatrixAt(this.index%a,ms),this.index++}this.mesh.instanceMatrix.needsUpdate=!0}}const hc=new it;function an(s){const e=s.filter(c=>c.getAttribute("position")?.count),t=new Dt;if(!e.length)return t.setAttribute("position",new qe([0,0,0],3)),t;const n=e.map(c=>c.index?c.toNonIndexed():c);let i=0;for(const c of n)i+=c.getAttribute("position").count;const r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i*2);let l=0;for(const c of n){c.getAttribute("normal")||c.computeVertexNormals();const h=c.getAttribute("position"),f=c.getAttribute("normal"),u=c.getAttribute("uv");for(let d=0;d<h.count;d++)r[(l+d)*3]=h.getX(d),r[(l+d)*3+1]=h.getY(d),r[(l+d)*3+2]=h.getZ(d),a[(l+d)*3]=f.getX(d),a[(l+d)*3+1]=f.getY(d),a[(l+d)*3+2]=f.getZ(d),o[(l+d)*2]=u?u.getX(d):0,o[(l+d)*2+1]=u?u.getY(d):0;l+=h.count}return t.setAttribute("position",new qe(r,3)),t.setAttribute("normal",new qe(a,3)),t.setAttribute("uv",new qe(o,2)),t}function Gr(s,e){const t=s.getAttribute("position"),n=s.getAttribute("normal");if(!t||!n)return s;const i=new Float32Array(t.count*2);for(let r=0;r<t.count;r++){const a=t.getX(r),o=t.getY(r),l=t.getZ(r),c=Math.abs(n.getX(r)),h=Math.abs(n.getY(r)),f=Math.abs(n.getZ(r)),u=h>=c&&h>=f?a:c>=f?l:a,d=h>=c&&h>=f?l:(c>=f,o);i[r*2]=u/e,i[r*2+1]=d/e}return s.setAttribute("uv",new qe(i,2)),s}function ei(s,e,t,n,i){return hc.makeRotationY(e).setPosition(t,n,i),s.applyMatrix4(hc),s}function Hr(s){const t=[],n=[];for(let o=0;o<s.length;o++){const l=s[o],c=[[l.xb,l.yb],[l.xm,l.ym],[l.xt,l.yt],[-l.xt,l.yt],[-l.xm,l.ym],[-l.xb,l.yb]];for(let h=0;h<6;h++)t.push(c[h][0],c[h][1],l.z),n.push(h/6,o/(s.length-1))}const i=[];for(let o=0;o<s.length-1;o++)for(let l=0;l<6;l++){const c=o*6+l,h=o*6+(l+1)%6,f=(o+1)*6+l,u=(o+1)*6+(l+1)%6;i.push(c,f,h,h,f,u)}const r=(o,l)=>{const c=o*6,h=t.length/3,f=s[o];t.push(0,(f.yb+f.yt)*.5,f.z),n.push(.5,o===0?0:1);for(let u=0;u<6;u++){const d=c+u,m=c+(u+1)%6;l?i.push(h,d,m):i.push(h,m,d)}};r(0,!0),r(s.length-1,!1);const a=new Dt;return a.setAttribute("position",new qe(t,3)),a.setAttribute("uv",new qe(n,2)),a.setIndex(i),a.computeVertexNormals(),a}const yh=Math.sqrt(3),Kg=.5*(yh-1),gs=(3-yh)/6,uc=s=>Math.floor(s)|0,dc=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Ho(s=Math.random){const e=Jg(s),t=new Float64Array(e).map(i=>dc[i%12*2]),n=new Float64Array(e).map(i=>dc[i%12*2+1]);return function(r,a){let o=0,l=0,c=0;const h=(r+a)*Kg,f=uc(r+h),u=uc(a+h),d=(f+u)*gs,m=f-d,M=u-d,g=r-m,p=a-M;let x,b;g>p?(x=1,b=0):(x=0,b=1);const v=g-x+gs,w=p-b+gs,E=g-1+2*gs,_=p-1+2*gs,S=f&255,A=u&255;let R=.5-g*g-p*p;if(R>=0){const U=S+e[A],P=t[U],z=n[U];R*=R,o=R*R*(P*g+z*p)}let D=.5-v*v-w*w;if(D>=0){const U=S+x+e[A+b],P=t[U],z=n[U];D*=D,l=D*D*(P*v+z*w)}let L=.5-E*E-_*_;if(L>=0){const U=S+1+e[A+1],P=t[U],z=n[U];L*=L,c=L*L*(P*E+z*_)}return 70*(o+l+c)}}function Jg(s){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const i=n+~~(s()*(256-n)),r=t[n];t[n]=t[i],t[i]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const Qg=-8,jg=56;function e_(s){const e=Fe((s-Qg)/jg,0,1),t=Math.floor(e*65535);return[t>>8&255,t&255]}class t_{seg=ye.segments;heights;road;field;mesh;minimap;shaderTime=null;constructor(e){const t=Ho(ri(679441)),n=this.seg+1,i=new Float32Array(n*n),r=new Float32Array(n*n),a=(x,b)=>{let v=0,w=1,E=1,_=0;for(let S=0;S<5;S++)v+=t(x*E,b*E)*w,_+=w,w*=.5,E*=2.07;return v/_};for(let x=0;x<n;x++)for(let b=0;b<n;b++){const v=-210+b/this.seg*ye.size,w=-210+x/this.seg*ye.size;let E=6.4+a(v*.0105,w*.0105)*7.4;E+=a(v*.027+30,w*.027)*1.7;const _=v-80,S=w-114;E+=Math.exp(-(_*_+S*S)/5e3)*15;const A=v+125,R=w-8;E+=Math.exp(-(A*A+R*R)/18050)*4.2;const D=v+10,L=w+46;E+=Math.exp(-(D*D)/2312-L*L/9248)*5.8;const U=Math.max(Math.abs(v),Math.abs(w));E+=Dr(ye.borderStart,ye.half,U)*24,i[x*n+b]=E}const o=new Float32Array(i.length);for(let x=0;x<n;x++)for(let b=0;b<n;b++){let v=0,w=0;for(let E=-1;E<=1;E++)for(let _=-1;_<=1;_++){const S=Fe(b+_,0,this.seg),A=Fe(x+E,0,this.seg);v+=i[A*n+S],w++}o[x*n+b]=v/w}i.set(o);for(let x=0;x<n;x++)for(let b=0;b<n;b++){const v=-210+b/this.seg*ye.size,w=-210+x/this.seg*ye.size,E=Pn(v),_=Rg(v),S=Math.abs(w-E),A=x*n+b;if(S<_+7){const R=Math.max(i[A],1.6),D=Cg(v);if(S<=_){const L=S/_,U=L*L*(3-2*L);i[A]=Jt(D,R,U)}else{const L=(S-_)/7;i[A]=Jt(Math.max(R,1.8),i[A],L)}}}this.heights=i,this.road=r;for(const x of _h())this.paintRoad(x,7.2);this.paintRoad([{x:40,z:70},{x:90,z:58},{x:si.x,z:si.z},{x:150,z:36}],5.5),this.rampBridge(),this.flatten(-176,22,void 0),this.flatten(ye.baseZ,22,void 0),this.flattenDisk(0,-150,26,.85),this.flattenDisk(0,ye.spawnZ,26,.85),this.flattenDisk(si.x,si.z,si.r,.45);for(const x of ai)this.flattenDisk(x,Pn(x),9,.65);const l=new Uint8Array(n*n*4);for(let x=0;x<n;x++)for(let b=0;b<n;b++){const v=x*n+b,w=-210+b/this.seg*ye.size,E=-210+x/this.seg*ye.size,[_,S]=e_(i[v]),A=v*4;l[A]=Math.floor(Fe(r[v],0,1)*255),l[A+1]=_,l[A+2]=S,l[A+3]=Math.floor(Fe(ws(w,E),0,1)*255)}const c=new Ei(l,n,n,vn);c.colorSpace=un,c.wrapS=c.wrapT=dn,c.magFilter=bt,c.minFilter=bt,c.generateMipmaps=!1,c.flipY=!1,c.needsUpdate=!0,this.field=c;const h=new Dt,f=new Float32Array(n*n*3),u=new Float32Array(n*n*2);for(let x=0;x<n;x++)for(let b=0;b<n;b++){const v=x*n+b;f[v*3]=-210+b/this.seg*ye.size,f[v*3+1]=i[v],f[v*3+2]=-210+x/this.seg*ye.size,u[v*2]=b/this.seg,u[v*2+1]=x/this.seg}const d=new Uint32Array(this.seg*this.seg*6);let m=0;for(let x=0;x<this.seg;x++)for(let b=0;b<this.seg;b++){const v=x*n+b,w=v+1,E=v+n,_=E+1;d[m++]=v,d[m++]=E,d[m++]=w,d[m++]=w,d[m++]=E,d[m++]=_}h.setAttribute("position",new qe(f,3)),h.setAttribute("uv",new qe(u,2)),h.setIndex(Array.from(d)),h.computeVertexNormals();const M=h.getAttribute("normal");let g=0;for(let x=0;x<M.count;x++)g+=M.getY(x);if(g<0){for(let x=0;x<d.length;x+=3){const b=d[x];d[x]=d[x+1],d[x+1]=b}h.setIndex(Array.from(d)),h.computeVertexNormals()}h.computeBoundingSphere();const p=this.makeMaterial(e,c);this.mesh=new xt(h,p),this.mesh.receiveShadow=!0,this.mesh.name="terrain",this.minimap=this.drawMinimap()}tick(e){this.shaderTime&&(this.shaderTime.value=e)}cell(e,t){const n=this.seg+1;return this.heights[Fe(t,0,this.seg)*n+Fe(e,0,this.seg)]}roadAt(e,t){const n=this.seg+1;return this.road[Fe(t,0,this.seg)*n+Fe(e,0,this.seg)]}setH(e,t,n){const i=this.seg+1;this.heights[Fe(t,0,this.seg)*i+Fe(e,0,this.seg)]=n}setRoad(e,t,n){const i=this.seg+1,r=Fe(t,0,this.seg)*i+Fe(e,0,this.seg);this.road[r]=Math.max(this.road[r],n)}worldOf(e,t){return[-210+e/this.seg*ye.size,-210+t/this.seg*ye.size]}nearest(e,t){const n=Fe(Math.round((e+ye.half)/ye.size*this.seg),0,this.seg),i=Fe(Math.round((t+ye.half)/ye.size*this.seg),0,this.seg);return[n,i]}groundAt(e,t){const n=(e+ye.half)/ye.size*this.seg,i=(t+ye.half)/ye.size*this.seg,r=Fe(Math.floor(n),0,this.seg-1),a=Fe(Math.floor(i),0,this.seg-1),o=Fe(n-r,0,1),l=Fe(i-a,0,1),c=this.cell(r,a),h=this.cell(r+1,a),f=this.cell(r,a+1),u=this.cell(r+1,a+1);return Jt(Jt(c,h,o),Jt(f,u,o),l)}sample(e,t){const n=this.groundAt(e,t),i=$i(),r=Math.abs(e-i.x)<=i.halfX&&Math.abs(t-i.z)<=i.halfZ,a=r?Math.max(n,i.deckY):n,o=1.6,l=this.groundAt(e+o,t)-this.groundAt(e-o,t),c=this.groundAt(e,t+o)-this.groundAt(e,t-o),h=o*2,f=Math.hypot(l,h,c)||1,u=(e+ye.half)/ye.size*this.seg,d=(t+ye.half)/ye.size*this.seg,m=Fe(Math.floor(u),0,this.seg-1),M=Fe(Math.floor(d),0,this.seg-1),g=Math.max(this.roadAt(m,M),this.roadAt(m+1,M),this.roadAt(m,M+1)),p=Math.max(0,ye.water-n);return{h:a,ground:n,nx:-l/f,ny:h/f,nz:-c/f,road:g,waterDepth:p,deep:!r&&p>1.02,onBridge:r}}paintRoad(e,t){const n=e.map(r=>{const[a,o]=this.nearest(r.x,r.z);return this.cell(a,o)});for(let r=0;r<3;r++){const a=n.slice();for(let o=1;o<n.length-1;o++)a[o]=n[o]*.5+n[o-1]*.25+n[o+1]*.25;for(let o=1;o<n.length-1;o++)n[o]=a[o]}const i=$i();for(let r=0;r<e.length;r++){const a=e[r],o=Math.abs(a.z-i.z);if(Math.abs(a.x-i.x)<i.halfX+6&&o<i.halfZ+24){const l=Fe((o-i.halfZ)/18,0,1);n[r]=Jt(i.deckY,n[r],l*l)}}for(let r=0;r<e.length-1;r++){const a=e[r],o=e[r+1],l=o.x-a.x,c=o.z-a.z,h=l*l+c*c||1,f=Fe(Math.floor((Math.min(a.x,o.x)-t+ye.half)/ye.size*this.seg),0,this.seg),u=Fe(Math.ceil((Math.max(a.x,o.x)+t+ye.half)/ye.size*this.seg),0,this.seg),d=Fe(Math.floor((Math.min(a.z,o.z)-t+ye.half)/ye.size*this.seg),0,this.seg),m=Fe(Math.ceil((Math.max(a.z,o.z)+t+ye.half)/ye.size*this.seg),0,this.seg);for(let M=d;M<=m;M++)for(let g=f;g<=u;g++){const[p,x]=this.worldOf(g,M),b=Fe(((p-a.x)*l+(x-a.z)*c)/h,0,1),v=a.x+l*b,w=a.z+c*b,E=Math.hypot(p-v,x-w);if(E>t)continue;const _=Math.abs(p-i.x)<=i.halfX&&Math.abs(x-i.z)<=i.halfZ,S=1-Dr(t*.35,t,E);_||this.setH(g,M,Jt(this.cell(g,M),Jt(n[r],n[r+1],b),S*.9)),this.setRoad(g,M,S)}}}rampBridge(){const e=$i(),t=16;for(let n=0;n<=this.seg;n++)for(let i=0;i<=this.seg;i++){const[r,a]=this.worldOf(i,n);if(Math.abs(r-e.x)>e.halfX+1)continue;const o=Math.abs(a-e.z);if(o<=e.halfZ||o>e.halfZ+t)continue;const c=1-(o-e.halfZ)/t;this.setH(i,n,Jt(this.cell(i,n),e.deckY,c*c*(3-2*c)))}}flatten(e,t,n){this.flattenDisk(0,e,t,1,n)}flattenDisk(e,t,n,i,r){const[a,o]=this.nearest(e,t),l=r??this.cell(a,o),c=Fe(Math.floor((e-n+ye.half)/ye.size*this.seg),0,this.seg),h=Fe(Math.ceil((e+n+ye.half)/ye.size*this.seg),0,this.seg),f=Fe(Math.floor((t-n+ye.half)/ye.size*this.seg),0,this.seg),u=Fe(Math.ceil((t+n+ye.half)/ye.size*this.seg),0,this.seg);for(let d=f;d<=u;d++)for(let m=c;m<=h;m++){const[M,g]=this.worldOf(m,d),p=Math.hypot(M-e,g-t)/n;if(p>=1)continue;const x=(1-Dr(.45,1,p))*i;this.setH(m,d,Jt(this.cell(m,d),l,x))}}drawMinimap(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(!t)return e;const n=t.createImageData(256,256);for(let i=0;i<256;i++)for(let r=0;r<256;r++){const a=-210+r/255*ye.size,o=ye.half-i/255*ye.size,l=this.sample(a,o);let c=92,h=104,f=58;if(l.waterDepth>.35&&!l.onBridge)c=36,h=92,f=104;else if(l.onBridge||l.road>.55)c=150,h=132,f=96;else if(l.ny<.82)c=120,h=116,f=108;else if(ws(a,o)>.45)c=58,h=78,f=46;else{const d=Fe((l.ground-4)/16,0,1);c=110+d*30,h=118-d*10,f=64}const u=(i*256+r)*4;n.data[u]=c,n.data[u+1]=h,n.data[u+2]=f,n.data[u+3]=255}return t.putImageData(n,0,0),e}makeMaterial(e,t){const n=new Uint8Array([128,128,255,255]),i=new Ei(n,1,1);i.colorSpace=un,i.needsUpdate=!0;const r={value:0};this.shaderTime=r;const a=new Ot({roughness:.94,metalness:.02,normalMap:i,normalScale:new ze(.75,.75)});return a.customProgramCacheKey=()=>"ashen-terrain-v6",a.onBeforeCompile=o=>{o.uniforms.uField={value:t},o.uniforms.uGrass={value:e.grass},o.uniforms.uDirt={value:e.dirt},o.uniforms.uRock={value:e.rock},o.uniforms.uSand={value:e.sand},o.uniforms.uGrassN={value:e.grassN},o.uniforms.uDirtN={value:e.dirtN},o.uniforms.uRockN={value:e.rockN},o.uniforms.uSandN={value:e.sandN},o.uniforms.uGrassR={value:e.grassR},o.uniforms.uDirtR={value:e.dirtR},o.uniforms.uRockR={value:e.rockR},o.uniforms.uCloud={value:e.cloud},o.uniforms.uTime=r,o.uniforms.uWater={value:ye.water},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
}`)},a}}function ws(s,e){let t=Dr(28,-90,s)*.95;const n=Pn(s);return t=Math.max(t,Math.exp(-((s+150)**2+(e-n)**2)/9800)),t=Math.max(t,Math.exp(-((s+30)**2+(e-125)**2)/4608)*.75),Math.hypot(s-si.x,e-si.z)<si.r+6&&(t*=.15),Math.abs(s)<34&&Math.abs(e)>132&&(t*=.08),Math.hypot(s-48,e+60)<16&&(t*=.2),Fe(t,0,1)}const _n=Lr[2],ft=new wt;function Wi(s,e,t=.04,n){const i=new Ot({map:s,roughness:e,metalness:t,envMapIntensity:.7});return n&&(i.normalMap=n),i}function bh(s,e,t,n,i,r,a,o,l,c,h){const[f,u]=gh(r,o,e);s.push({x:t+f,y:n+a,z:i+u,hx:l/2,hy:c/2,hz:h/2,rot:e})}function Xi(s,e,t,n,i,r,a,o,l,c,h,f){const u=new on(c,h,f);u.translate(a,o,l),ei(u,t,n,i,r),s.push(u),e&&bh(e,t,n,i,r,a,o,l,c,h,f)}function _s(s,e,t,n,i,r){const a=s.getContext("2d");if(!a)return;const o=(e+ye.half)/ye.size*256,l=(ye.half-t)/ye.size*256;a.fillStyle=r,a.fillRect(o-n,l-i,n*2,i*2)}function n_(s,e){const t=ri(12648430),n=new Hn;n.name="scenery";const i=[],r=[],a=[],o=[],l=[],c=[],h=[],f={value:0},u=(se,ue,be,_e,Ne,st,mt)=>{const F=s.sample(se,ue).h,lt=.32;if([{lx:0,lz:Ne/2-lt/2,sx:_e,sz:lt},{lx:0,lz:-Ne/2+lt/2,sx:_e,sz:lt},{lx:_e/2-lt/2,lz:0,sx:lt,sz:Ne-lt},{lx:-_e/2+lt/2,lz:0,sx:lt,sz:Ne-lt}].forEach((We,ce)=>{if(mt&&t()<.22&&ce!==0)return;const ht=st*(mt?.42+t()*.58:1),Pe=t()<.25?o:a;if(Xi(Pe,i,be,se,F,ue,We.lx,ht/2,We.lz,We.sx,ht,We.sz),t()<.7&&ht>1.6){const C=new on(.55,.7,.08);C.translate(We.lx,1.35,We.lz+Math.sign(We.lz||1)*.05),ei(C,be,se,F,ue),h.push(C)}}),!mt||t()>.35){const We=new zr(Math.max(_e,Ne)*.48,1.15,4);We.rotateY(Math.PI/4),We.translate(0,st+.35,0),mt&&We.scale(.75,.55,.75),ei(We,be,se,F,ue),l.push(We)}_s(s.minimap,se,ue,3.2,2.4,"#6b5344")},d=[[104,40,.4,8,6,3.2,!0],[118,36,1.2,7,5.5,2.8,!0],[128,48,.2,9,6.5,3.4,!1],[112,58,2.4,6.5,5,2.6,!0],[136,62,.8,7.5,5,3,!0],[100,66,1.7,8,6,2.4,!0],[148,44,.6,6,5,2.8,!0],[90,46,2.8,7,4.5,2.5,!0]];for(const se of d)u(se[0],se[1],se[2],se[3],se[4],se[5],se[6]);{const be=s.sample(122,70).h;Xi(c,i,.2,122,be,70,0,2.2,0,4.2,4.4,4.2),Xi(c,i,.2,122,be,70,0,5.6,0,3.2,2.6,3.2),Xi(c,null,.2,122,be,70,.4,7.4,0,2.2,1.4,2.2),_s(s.minimap,122,70,3,3,"#8a8174")}{const be=s.sample(48,-62).h,_e=new Qt(2.1,2.2,8,10);_e.translate(0,4,0),ei(_e,0,48,be,-62),a.push(_e),i.push({x:48,y:be+4,z:-62,hx:2.2,hy:4,hz:2.2,rot:0});const Ne=new zr(2.4,1.8,10);Ne.translate(0,8.6,0),ei(Ne,0,48,be,-62),l.push(Ne),_s(s.minimap,48,-62,2,2,"#b7aa96")}const m=[[96,30,0,16],[116,28,.15,14],[138,32,-.2,12],[-20,-40,.4,10],[70,Pn(76)+14,.3,8]];for(const[se,ue,be,_e]of m){const Ne=s.sample(se,ue).h;Xi(c,i,be,se,Ne,ue,0,.58,0,_e,1.16,.45),_s(s.minimap,se,ue,_e*.12,1,"#9a9286")}const M=$i(),g=.42,p=new on(M.halfX*2,g,M.halfZ*2);p.translate(0,M.deckY-g/2,0),ei(p,0,M.x,0,M.z),c.push(p);for(const se of[-1,1])Xi(c,i,0,M.x,0,M.z,se*(M.halfX-.18),M.deckY+.42,0,.28,.84,M.halfZ*2);for(const se of[-8,0,8]){const ue=new on(1.1,2.4,1.4);ue.translate(0,-.4,se),ei(ue,0,M.x,0,M.z),c.push(ue)}_s(s.minimap,M.x,M.z,2,6,"#d9c7a4");const x=(se,ue)=>{if(!se.length)return;const be=new xt(an(se),ue);be.castShadow=!0,be.receiveShadow=!0,n.add(be)};x(a,Wi(e.plaster,.86)),x(o,Wi(e.timber,.8)),x(l,Wi(e.roof,.74)),x(c,Wi(e.concrete,.84,.04,e.concreteN)),x(h,new Ot({color:1710358,roughness:.7}));const b=new Qt(.18,.32,3.4,8);b.translate(0,1.7,0);const v=new Qt(.06,.1,1.3,6);v.rotateZ(.9),v.translate(.55,2.5,0);const w=v.clone().rotateY(2.2),E=an([b,v,w]),_=i_(),S=s_(),A=new jn(E,new Ot({map:e.bark,normalMap:e.barkN,roughness:.9,color:16777215}),_n.trees),R=new Ot({map:e.leaf,alphaTest:.18,side:zt,color:13027492,roughness:.92}),D=new Ot({map:e.leaf,alphaTest:.18,side:zt,color:9345140,roughness:.92});Ta(R,f,.05),Ta(D,f,.04);const L=new jn(_,R,_n.trees),U=new jn(S,D,_n.trees);let P=0,z=0;const B=[],W=(se,ue,be)=>{for(let _e=0;_e<B.length;_e++){const Ne=B[_e],st=Ne.x-se,mt=Ne.z-ue;if(st*st+mt*mt<be*be)return!1}return!0};for(let se=-190;se<=190&&P+z<_n.trees;se+=7)for(let ue=-190;ue<=190&&P+z<_n.trees;ue+=7){const be=ue+(t()-.5)*5,_e=se+(t()-.5)*5;if(ws(be,_e)<.24)continue;const Ne=s.sample(be,_e);if(Ne.deep||Ne.waterDepth>.25||Ne.road>.35||Ne.ny<.8||Math.hypot(be,_e+ye.spawnZ)<28||Math.hypot(be,_e-ye.spawnZ)<28||!W(be,_e,5.2))continue;const st=t()<.34,mt=Math.hypot(be,_e),F=(.62+t()*.95)*(mt>150?.78:1);ft.position.set(be,Ne.h,_e),ft.rotation.set(0,t()*6.28,0),ft.scale.set(F*(.85+t()*.3),F,F*(.85+t()*.3)),ft.updateMatrix();const lt=P+z;A.setMatrixAt(lt,ft.matrix);const at=!st&&t()<.28;A.setColorAt(lt,new ke(at?14012612:st?10128244:16777215)),st?(U.setMatrixAt(z,ft.matrix),z++):(L.setMatrixAt(P,ft.matrix),P++),B.push({x:be,z:_e}),r.push({x:be,z:_e,r:.42*F,y0:Ne.h,y1:Ne.h+4.5*F})}A.count=P+z,L.count=P,U.count=z,A.instanceColor&&(A.instanceColor.needsUpdate=!0);for(const se of[A,L,U])se.instanceMatrix.needsUpdate=!0,se.castShadow=!1,se.receiveShadow=!0,se.computeBoundingSphere(),n.add(se);const ee=new zo(1,2),H=ee.getAttribute("position");for(let se=0;se<H.count;se++){const ue=.45+t()*.9;H.setXYZ(se,H.getX(se)*ue,H.getY(se)*(.35+t()*.7),H.getZ(se)*(.5+t()*.8))}ee.computeVertexNormals();const q=new jn(ee,Wi(e.rock,.86,.06,e.rockN),_n.rocks+24);let j=0;for(let se=0;se<900&&j<_n.rocks;se++){const ue=(t()-.5)*380,be=(t()-.5)*380,_e=s.sample(ue,be);if(_e.deep||_e.road>.4||_e.waterDepth>.3||_e.ny>.9&&t()>.15)continue;const Ne=_e.ny<.75?1.2+t()*2.2:.45+t()*1.1;ft.position.set(ue,_e.h+Ne*.25,be),ft.rotation.set(t(),t(),t()),ft.scale.set(Ne,Ne*.75,Ne),ft.updateMatrix(),q.setMatrixAt(j++,ft.matrix),Ne>1.1&&r.push({x:ue,z:be,r:Ne*.75,y0:_e.h,y1:_e.h+Ne})}q.count=j,q.instanceMatrix.needsUpdate=!0,q.castShadow=!0,q.receiveShadow=!0,q.computeBoundingSphere(),n.add(q);const ge=[0,1,2].map(se=>{const ue=new Cn(.58,.58);return ue.translate(0,.31,0),ue.rotateY(se*Math.PI/3),ue}),Re=an(ge),Y=new Ot({map:e.blade,alphaTest:.35,roughness:.95,side:zt,color:16777215});Ta(Y,f,.12);const ie=new jn(Re,Y,_n.grass);let Me=0;for(let se=0;se<48e3&&Me<_n.grass;se++){const ue=(t()-.5)*390,be=(t()-.5)*390;if(ws(ue,be)<.05&&t()>.45)continue;const Ne=s.sample(ue,be);if(Ne.deep||Ne.road>.5||Ne.waterDepth>.12||Ne.ny<.68)continue;ft.position.set(ue,Ne.h,be),ft.rotation.set(0,t()*6,0),ft.scale.setScalar(.7+t()*.55),ft.updateMatrix(),ie.setMatrixAt(Me,ft.matrix);const st=new ke().setHSL(.22+t()*.06,.22+t()*.12,.34+t()*.1);ie.setColorAt(Me,st),Me++}ie.count=Me,ie.instanceMatrix.needsUpdate=!0,ie.instanceColor&&(ie.instanceColor.needsUpdate=!0),ie.receiveShadow=!1,ie.castShadow=!1,ie.computeBoundingSphere(),n.add(ie);const Ae=r_(),he=new Ot({map:e.leaf,alphaTest:.18,side:zt,color:12040338,roughness:.94}),De=new jn(Ae,he,480);let tt=0;for(let se=0;se<2200&&tt<480;se++){const ue=(t()-.5)*360,be=(t()-.5)*360,_e=s.sample(ue,be);_e.deep||_e.road>.4||_e.waterDepth>.1||_e.ny<.78||ws(ue,be)<.2&&t()>.4||(ft.position.set(ue,_e.h,be),ft.rotation.set(0,t()*6,0),ft.scale.setScalar(.55+t()*.55),ft.updateMatrix(),De.setMatrixAt(tt++,ft.matrix))}De.count=tt,De.instanceMatrix.needsUpdate=!0,De.computeBoundingSphere(),n.add(De);const Ie=new Cn(.35,1.4);Ie.translate(0,.7,0);const et=new Ot({color:9083480,roughness:.9,side:zt}),$e=new jn(Ie,et,_n.reeds);let Ge=0;for(let se=0;se<4e3&&Ge<_n.reeds;se++){const ue=(t()-.5)*360,be=Pn(ue)+(t()-.5)*(a_(ue)+4),_e=s.sample(ue,be);_e.waterDepth<.05||_e.waterDepth>.9||_e.onBridge||(ft.position.set(ue,_e.h,be),ft.rotation.set(0,t()*6,0),ft.scale.setScalar(.8+t()*.7),ft.updateMatrix(),$e.setMatrixAt(Ge++,ft.matrix))}$e.count=Ge,$e.instanceMatrix.needsUpdate=!0,$e.computeBoundingSphere(),n.add($e);const vt=[];for(let se=0;se<14;se++){const ue=-40-t()*120,be=(t()-.5)*160,_e=s.sample(ue,be);if(_e.deep||_e.road>.3)continue;const Ne=t()*3,st=new Qt(.28,.32,4.2,6);st.rotateZ(Math.PI/2),ei(st,Ne,ue,_e.h+.28,be),vt.push(st),bh(i,Ne,ue,_e.h,be,0,.28,0,4.2,.56,.6)}if(vt.length){const se=new xt(an(vt),Wi(e.timber,.84));se.castShadow=!0,se.receiveShadow=!0,n.add(se)}fc(n,s,i,f,0,-176,new O(.85,.55,.22),e.emblemCinder),fc(n,s,i,f,0,ye.baseZ,new O(.55,.62,.7),e.emblemSlate);const pt=[];return n.traverse(se=>{const ue=se;ue.material instanceof St&&ue.material.uniforms.uTime&&pt.push(ue.material)}),{group:n,solids:i,posts:r,trunks:A,broad:L,pines:U,grass:ie,reeds:$e,rocks:q,tick:se=>{f.value=se;for(const ue of pt)ue.uniforms.uTime.value=se}}}function Vo(s,e,t,n,i,r,a){const o=ri(e),l=[];for(let c=0;c<s;c++){const h=new Cn(i*(.75+o()*.4),r*(.75+o()*.35)),f=c/s,u=t+f*n,d=a?(1.15-f)*.85:.35+o()*.85,m=o()*Math.PI*2;h.translate(Math.cos(m)*d,u,Math.sin(m)*d),h.rotateY(o()*Math.PI),h.rotateX((o()-.5)*.8),l.push(h)}return an(l)}function i_(){return Vo(14,11,2.05,2.15,1.85,1.05,!1)}function s_(){return Vo(12,29,1.7,2.8,1.9,.85,!0)}function r_(){return Vo(8,47,.25,.7,.85,.48,!1)}function a_(s){return 12+Math.exp(-((s+155)**2)/2e3)*16}function Ta(s,e,t){s.customProgramCacheKey=()=>`wind-${t}`,s.onBeforeCompile=n=>{n.uniforms.uTime=e,n.uniforms.uAmp={value:t},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
transformed.z += cos(uTime * 1.1 + wz * 0.2) * uAmp * 0.6 * transformed.y;`)}}function fc(s,e,t,n,i,r,a,o){const l=e.sample(i,r).h,c=new xt(new Bo(ye.baseR-.6,ye.baseR,40),new Ot({color:new ke(a.x,a.y,a.z),roughness:.5,metalness:.2,side:zt}));c.rotation.x=-Math.PI/2,c.position.set(i,l+.25,r),c.receiveShadow=!0,s.add(c);const h=new xt(new Qt(.08,.1,6,6),new Ot({color:2894116,metalness:.6,roughness:.4}));h.position.set(i,l+3,r),h.castShadow=!0,s.add(h),t.push({x:i,y:l+3,z:r,hx:.2,hy:3,hz:.2,rot:0});const f=new Cn(1.8,1.05,10,4);f.translate(.9,0,0);const u=new St({side:zt,uniforms:{uTime:n,uMap:{value:o},uColor:{value:a}},vertexShader:`
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
    `}),d=new xt(f,u);d.position.set(i,l+5.2,r),s.add(d);const m=new xt(new Os(.7,8,6),new Ot({color:9275260,roughness:.9}));m.scale.y=.45,m.position.set(i,l+.2,r),s.add(m)}const $r=new O(-.58,.46,-.34).normalize(),o_=`
varying vec3 vDir;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vDir = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,l_=`
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
`;function c_(){const s=new Os(900,28,16),e=new St({side:$t,depthWrite:!1,uniforms:{uSun:{value:$r.clone()},uTime:{value:0}},vertexShader:o_,fragmentShader:l_}),t=new xt(s,e);return t.frustumCulled=!1,t.renderOrder=-1,t.name="sky",t}function h_(s,e){const t=s.material;t.uniforms.uTime.value=e}const As=new ke(10136474);function u_(){const s=new Hn,e=new Qi({color:16769712,transparent:!0,opacity:.16,depthWrite:!1,fog:!1,blending:Rs,side:zt});for(let t=0;t<5;t++){const n=new xt(new Cn(16,70),e);n.position.set(-80+t*42,130,-40+t%2*50),n.lookAt(n.position.clone().add($r)),n.rotateZ(t*.35),s.add(n)}return s}function En(s,e,t,n,i,r){const a=new on(s,e,t);return a.translate(n,i,r),a}function qt(s,e,t,n,i,r,a,o="y"){const l=new Qt(s,e,t,n);return o==="x"&&l.rotateZ(Math.PI/2),o==="z"&&l.rotateX(Math.PI/2),l.translate(i,r,a),l}function d_(){const s=(d,m,M,g,p,x,b)=>({z:d,xb:m,xm:M,xt:g,yb:p,ym:x,yt:b}),e=[];e.push(Hr([s(3.15,1.05,1.15,.55,.28,.48,.62),s(2.15,1.32,1.4,1.05,.24,.62,.95),s(.6,1.4,1.48,1.22,.22,.7,1.08),s(-1.2,1.38,1.46,1.18,.22,.68,1.02),s(-3.15,1.2,1.28,.95,.24,.55,.78)])),e.push(En(.12,.42,4.8,1.46,.46,.1)),e.push(En(.12,.42,4.8,-1.46,.46,.1)),e.push(En(2.55,.42,.12,0,.48,-3.15)),e.push(En(1.5,.05,1.35,0,1.02,-1.55));for(const d of[-1.05,1.05])e.push(En(.16,.1,.2,d,.7,3.05)),e.push(qt(.045,.045,.26,8,d,.36,-3.18,"z"));e.push(qt(.07,.09,.32,10,-.62,.5,-3.18,"z")),e.push(qt(.07,.09,.32,10,.62,.5,-3.18,"z"));const t=[];t.push(Hr([s(1.15,.42,.5,.28,.02,.14,.22),s(.45,.85,.98,.62,0,.26,.4),s(-.35,1.02,1.08,.7,0,.3,.48),s(-1.15,.78,.86,.48,.02,.2,.32)])),t.push(En(1.55,.14,.42,0,.16,-1.2)),t.push(qt(.26,.3,.18,12,-.12,.58,-.28)),t.push(En(.2,.08,.2,-.12,.7,-.28)),t.push(En(.32,.1,.18,.32,.52,.18)),t.push(qt(.03,.03,.48,8,.55,.62,.22,"z")),t.push(qt(.018,.018,1.65,6,-.32,1.35,-.4)),t.push(qt(.018,.018,1.8,6,.26,1.42,-.15));const n=4.9,i=[];i.push(qt(.09,.11,.35,10,0,0,.2,"z")),i.push(qt(.07,.075,n,12,0,0,n/2+.15,"z")),i.push(qt(.11,.11,.28,12,0,0,n-.05,"z")),i.push(qt(.095,.095,.16,12,0,0,n+.18,"z"));const r=new Os(.13,10,8);r.scale(1,1,.7),r.translate(0,0,.05),i.push(r);const a=[],o=.33,l=[1.22,-1.22],c=[-2.15,-1.3,-.45,.4,1.25,2.05];for(const d of l){for(const m of c)a.push(qt(o,o,.22,14,d,o,m,"x"));a.push(qt(o*1.18,o*1.18,.24,12,d,o*1.05,-2.55,"x")),a.push(qt(o*.95,o*.95,.2,12,d,o*.95,2.55,"x"));for(const m of[-1.2,.2,1.4])a.push(qt(.1,.1,.16,8,d,.78,m,"x"))}const h=[];h.push(En(.46,.16,5.15,0,.12,.05)),h.push(En(.42,.12,4.15,0,.78,0));const f=new Br(.38,.13,6,12,Math.PI);f.rotateY(Math.PI/2),f.rotateZ(Math.PI),f.translate(0,.42,2.45),h.push(f);const u=new Br(.42,.14,6,12,Math.PI);return u.rotateY(Math.PI/2),u.translate(0,.48,-2.45),h.push(u),{hull:Gr(an(e),.72),turret:Gr(an(t),.72),gun:an(i),gear:an(a),track:an(h),muzzleZ:n+.28}}const pc=new Map,mc=new it,zn=new O,wa=new O,xs=new O;function gc(s,e,t,n){const i=n;return[{z:s*.5,xb:e*.22,xm:e*.3,xt:e*.12,yb:i+.04,ym:i+t*.28,yt:i+t*.4},{z:s*.32,xb:e*.38,xm:e*.46,xt:e*.24,yb:i,ym:i+t*.48,yt:i+t*.75},{z:s*.08,xb:e*.42,xm:e*.5,xt:e*.4,yb:i,ym:i+t*.58,yt:i+t},{z:-s*.24,xb:e*.42,xm:e*.5,xt:e*.4,yb:i,ym:i+t*.55,yt:i+t*.94},{z:-s*.42,xb:e*.36,xm:e*.44,xt:e*.28,yb:i,ym:i+t*.4,yt:i+t*.68},{z:-s*.5,xb:e*.28,xm:e*.34,xt:e*.18,yb:i+.02,ym:i+t*.24,yt:i+t*.42}]}function f_(s){const e=Hr(gc(s.length,s.width,s.height,.34)),t=Hr(gc(s.turretLen,s.turretWid,s.turretH,.02).map(M=>({...M,yb:Math.max(0,M.yb-.02)}))),n=new Qt(.16,.18,.16,8);n.translate(0,s.turretH+.08,-s.turretLen*.05);const i=new on(s.turretWid*.55,s.turretH*.55,.28);i.translate(0,s.turretH*.48,s.turretLen*.42);const r=an([t,n,i]),a=new Qt(s.gunR,s.gunR*.92,s.gunLen,8);a.rotateX(Math.PI/2),a.translate(0,0,s.gunLen/2);const o=new Qt(s.gunR*1.7,s.gunR*1.7,s.gunR*3,8);o.rotateX(Math.PI/2),o.translate(0,0,s.gunLen);const l=an([a,o]),c=[],h=.3,f=s.length*.72;for(let M=0;M<s.wheels;M++){const g=-f/2+f/Math.max(1,s.wheels-1)*M;for(const p of[-1,1]){const x=new Qt(h,h,.22,8);x.rotateZ(Math.PI/2),x.translate(p*(s.width*.46),h,g),c.push(x)}}const u=M=>{for(const g of[-1,1]){const p=new Qt(h*1.15,h*1.15,.2,8);p.rotateZ(Math.PI/2),p.translate(g*(s.width*.46),h,M),c.push(p)}};u(s.length*.42),u(-s.length*.44);const d=an(c),m=new on(.36,.52,s.length*.96);return Gr(e,Math.max(.7,s.length/3.3)),Gr(r,Math.max(.55,s.turretLen/3.1)),{hull:e,turret:r,gun:l,gear:d,track:m,muzzleZ:s.gunLen+s.gunR*2}}function p_(s){let e=pc.get(s.id);return e||(e=s.id==="halberd"?{...d_()}:f_(s),pc.set(s.id,e)),e}class Aa{spec;team;name;player;id;hp;alive=!0;x=0;y=0;z=0;yaw=0;speed=0;yawVel=0;turretYaw=0;turretYawVel=0;gunPitch=0;reload=0;dispersion;detected=0;shots=0;hits=0;pens=0;kills=0;damageDealt=0;blocked=0;distance=0;lastMark=0;aiFire=!1;group;turret;gun;muzzle;hullMesh;turretMesh;hullBox;turretBox;visualUp=new O(0,1,0);yVel=0;trackMat;dustAcc=0;splashAcc=0;constructor(e,t,n,i,r,a,o,l,c){this.id=e,this.spec=t,this.team=n,this.name=i,this.player=r,this.hp=t.hp,this.dispersion=t.baseDisp;const h=p_(t),f=t.id==="halberd",u=new Ot({map:a,roughness:.58,metalness:.18,envMapIntensity:.42});this.group=new Hn,this.group.name=i,this.hullMesh=new xt(h.hull,u),this.hullMesh.castShadow=!0,this.hullMesh.receiveShadow=!0,this.group.add(this.hullMesh);const d=new xt(h.gear,l);d.castShadow=!0,this.group.add(d);const m=o.clone();m.wrapS=m.wrapT=Sn,m.repeat.set(1,5),m.needsUpdate=!0,this.trackMat=new Ot({map:m,roughness:f?.55:.72,metalness:f?.62:.4,color:16777215,envMapIntensity:.8});for(const p of[-1,1]){const x=new xt(h.track,this.trackMat);x.position.set(p*(f?1.22:t.width*.5+.02),f?0:.3,0),x.castShadow=!0,this.group.add(x)}this.turret=new Hn,this.turret.position.set(0,.34+t.height,t.turretZ),this.group.add(this.turret),this.turretMesh=new xt(h.turret,u),this.turretMesh.castShadow=!0,this.turretMesh.receiveShadow=!0,this.turret.add(this.turretMesh),this.gun=new Hn,this.gun.position.set(0,t.turretH*.42,t.turretLen*.2),this.turret.add(this.gun);const M=f?c.clone():c;f&&(M.map=m,M.color.set(16777215),M.metalness=.84,M.roughness=.38);const g=new xt(h.gun,M);g.castShadow=!0,this.gun.add(g),this.muzzle=new wt,this.muzzle.position.set(0,0,h.muzzleZ),this.gun.add(this.muzzle),h.hull.computeBoundingBox(),h.turret.computeBoundingBox(),this.hullBox=h.hull.boundingBox.clone(),this.turretBox=h.turret.boundingBox.clone()}spawn(e,t,n,i){this.x=e,this.z=t,this.yaw=n,this.turretYaw=n,this.speed=0,this.yawVel=0,this.y=i.sample(e,t).h,this.alive=!0,this.hp=this.spec.hp,this.reload=0,this.dispersion=this.spec.baseDisp,this.applyVisual(i.sample(e,t))}integrate(e,t,n){if(!this.alive)return;const i=this.spec,r=n.sample(this.x,this.z),[a,o]=vi(this.yaw),l=n.sample(this.x+a*2.2,this.z+o*2.2),c=n.sample(this.x-a*2.2,this.z-o*2.2),h=(l.h-c.h)/4.4,f=-9.8*h/Math.sqrt(1+h*h),u=Math.min(1,Math.abs(this.speed)/i.maxSpeed),d=Fe(e.throttle,-1,1);let m=0;if(Math.abs(d)>.04){const E=Math.sign(d),_=i.accel*(i.lowGear+(1-i.lowGear)*(1-u));m=E*_*(E<0?.72:1)}const M=d>.2&&this.speed<-.4||d<-.2&&this.speed>.4;let g=m+f-this.speed*i.drag;Math.abs(this.speed)>.25&&(g-=Math.sign(this.speed)*i.rollResist),M&&(g-=Math.sign(this.speed)*i.brake),r.waterDepth>.2&&(g-=this.speed*(1.2+r.waterDepth*2.4)),this.speed+=g*t,this.speed=Fe(this.speed,-i.reverse,i.maxSpeed),Math.abs(d)<.04&&Math.abs(this.speed)<.18&&Math.abs(f)<.35&&(this.speed=0);const p=i.neutralTurn+(i.turn-i.neutralTurn)*Math.min(1,Math.abs(this.speed)/i.maxSpeed),x=Fe(e.steer,-1,1)*p,b=i.yawAccel*t;this.yawVel+=Fe(x-this.yawVel,-b,b),this.yaw+=this.yawVel*t;const[v,w]=vi(this.yaw);this.x+=v*this.speed*t,this.z+=w*this.speed*t,this.distance+=Math.abs(this.speed)*t,this.trackMat.map.offset.y=this.distance*.22}collide(e,t,n){if(!this.alive)return;const i=m_();this.x=Fe(this.x,-i,i),this.z=Fe(this.z,-i,i);const r=e.sample(this.x,this.z);if(r.deep){let a=this.x,o=this.z,l=r.waterDepth;for(const[c,h]of[[3,0],[-3,0],[0,3],[0,-3]]){const f=e.sample(this.x+c,this.z+h);f.waterDepth<l&&(l=f.waterDepth,a=this.x+c,o=this.z+h)}this.x+=(a-this.x)*.65,this.z+=(o-this.z)*.65,this.speed*=.4}for(let a=0;a<2;a++){const o=this.bodyCircles();for(const l of o){for(const c of t){if(c.y+c.hy<.45||c.y-c.hy>1.8||Math.abs(l.x-c.x)>c.hx+c.hz+l.r+1||Math.abs(l.z-c.z)>c.hx+c.hz+l.r+1)continue;const h=g_(l.x,l.z,l.r,c);h&&(this.x+=h[0],this.z+=h[1],l.x+=h[0],l.z+=h[1])}for(const c of n){const h=l.x-c.x,f=l.z-c.z,u=Math.hypot(h,f),d=l.r+c.r;if(u<d&&u>1e-4){const m=(d-u)/u;this.x+=h*m,this.z+=f*m,l.x+=h*m,l.z+=f*m}}}}}stick(e,t){const n=e.sample(this.x,this.z),r=(n.h+.02-this.y)*this.spec.susp-this.yVel*this.spec.suspDamp;this.yVel=Fe(this.yVel+r*t,-4,4),this.y+=this.yVel*t,xs.set(n.nx,n.ny,n.nz),xs.lengthSq()<.2&&xs.set(0,1,0),xs.normalize();const a=this.spec.id==="bulwark"?4.5:this.spec.id==="lynx"?10:7;return this.visualUp.lerp(xs,1-Math.exp(-a*t)).normalize(),n}applyVisual(e){const[t,n]=vi(this.yaw);zn.set(t,0,n),zn.addScaledVector(this.visualUp,-zn.dot(this.visualUp)),zn.lengthSq()<1e-4&&zn.set(t,0,n),zn.normalize(),wa.crossVectors(this.visualUp,zn).normalize(),zn.crossVectors(wa,this.visualUp).normalize(),mc.makeBasis(wa,this.visualUp,zn),this.group.position.set(this.x,this.y,this.z),this.group.quaternion.setFromRotationMatrix(mc),this.group.updateMatrixWorld(!0)}aim(e,t,n){if(!this.alive)return;const i=this.spec.turretTurn*n,r=Fe(mh(this.turretYaw,e),-i,i);this.turretYawVel=n>0?r/n:0,this.turretYaw+=r;const a=Fe(t,-this.spec.dep,this.spec.elev),o=this.spec.gunSlew*n;this.gunPitch+=Fe(a-this.gunPitch,-o,o),this.turret.rotation.y=this.turretYaw-this.yaw,this.gun.rotation.x=-this.gunPitch}settle(e){const t=this.spec,n=Math.min(1,Math.abs(this.speed)/t.maxSpeed),i=Math.min(1,Math.abs(this.yawVel)/Math.max(.15,t.turn)),r=Math.min(1,Math.abs(this.turretYawVel)/Math.max(.12,t.turretTurn)),a=t.baseDisp+t.moveDisp*n+t.hullDisp*i+t.turretDisp*r;a>this.dispersion?this.dispersion=a:this.dispersion=ph(this.dispersion,a,t.aimRate,e),this.reload>0&&(this.reload=Math.max(0,this.reload-e))}fired(){this.reload=this.spec.reload,this.dispersion+=this.spec.fireDisp,this.shots++}kill(){this.alive&&(this.alive=!1,this.speed=0,this.hp=0,this.group.traverse(e=>{const t=e;if(!t.isMesh)return;const n=t.material;if(n instanceof Ot){const i=n.clone();i.color.multiplyScalar(.32),i.emissive.setHex(2756620),i.emissiveIntensity=.4,t.material=i}}))}bodyCircles(){const[e,t]=vi(this.yaw),n=this.spec.length*.22,i=this.spec.width*.4;return[{x:this.x+e*n,z:this.z+t*n,r:i},{x:this.x-e*n,z:this.z-t*n,r:i}]}exhaust(e,t,n,i){if(this.alive){if(Math.abs(this.speed)>1.6&&(this.dustAcc+=e*Math.abs(this.speed),this.dustAcc>.09)){this.dustAcc=0;const[r,a]=vi(this.yaw);n(this.x-r*this.spec.length*.4,this.y+.3,this.z-a*this.spec.length*.4)}t.waterDepth>.12&&Math.abs(this.speed)>1.5&&(this.splashAcc+=e,this.splashAcc>.12&&(this.splashAcc=0,i(this.x,t.ground+.1,this.z)))}}}function m_(){return 196}function g_(s,e,t,n){const[i,r]=kr(s-n.x,e-n.z,n.rot),a=Fe(i,-n.hx,n.hx),o=Fe(r,-n.hz,n.hz);let l=i-a,c=r-o,h=Math.hypot(l,c);if(h>=t)return null;if(h<1e-4){const g=n.hx-Math.abs(i),p=n.hz-Math.abs(r);g<p?(l=Math.sign(i||1),c=0):(c=Math.sign(r||1),l=0),h=0}const f=l/(h||1),u=c/(h||1),[d,m]=gh(f,u,n.rot),M=t-h;return[d*M,m*M]}function __(s){for(let e=0;e<s.length;e++){const t=s[e];for(let n=e+1;n<s.length;n++){const i=s[n],r=i.x-t.x,a=i.z-t.z,o=Math.hypot(r,a),l=t.spec.width*.55+i.spec.width*.55;if(o>=l||o<1e-4)continue;const c=(l-o)/o,h=i.spec.mass/(t.spec.mass+i.spec.mass),f=t.spec.mass/(t.spec.mass+i.spec.mass);t.alive&&(t.x-=r*c*h,t.z-=a*c*h),i.alive&&(i.x+=r*c*f,i.z+=a*c*f)}}}function x_(){return{gear:new Ot({color:3816504,roughness:.48,metalness:.62}),gun:new Ot({color:7238510,roughness:.38,metalness:.7})}}class v_ extends cd{constructor(e){super(e),this.type=Rt}parse(e){const a=function(S,A){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(A||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(A||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(A||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(A||""))}},f=function(S,A,R){A=A||1024;let L=S.pos,U=-1,P=0,z="",B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));for(;0>(U=B.indexOf(`
`))&&P<A&&L<S.byteLength;)z+=B,P+=B.length,L+=128,B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(L,L+128)));return-1<U?(S.pos+=P+U+1,z+B.slice(0,U)):!1},u=function(S){const A=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let z,B;for((S.pos>=S.byteLength||!(z=f(S)))&&a(1,"no header found"),(B=z.match(A))||a(3,"bad initial token"),P.valid|=1,P.programtype=B[1],P.string+=z+`
`;z=f(S),z!==!1;){if(P.string+=z+`
`,z.charAt(0)==="#"){P.comments+=z+`
`;continue}if((B=z.match(R))&&(P.gamma=parseFloat(B[1])),(B=z.match(D))&&(P.exposure=parseFloat(B[1])),(B=z.match(L))&&(P.valid|=2,P.format=B[1]),(B=z.match(U))&&(P.valid|=4,P.height=parseInt(B[1],10),P.width=parseInt(B[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},d=function(S,A,R){const D=A;if(D<8||D>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);D!==(S[2]<<8|S[3])&&a(3,"wrong scanline width");const L=new Uint8Array(4*A*R);L.length||a(4,"unable to allocate buffer space");let U=0,P=0;const z=4*D,B=new Uint8Array(4),W=new Uint8Array(z);let ee=R;for(;ee>0&&P<S.byteLength;){P+4>S.byteLength&&a(1),B[0]=S[P++],B[1]=S[P++],B[2]=S[P++],B[3]=S[P++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=D)&&a(3,"bad rgbe scanline format");let H=0,q;for(;H<z&&P<S.byteLength;){q=S[P++];const ge=q>128;if(ge&&(q-=128),(q===0||H+q>z)&&a(3,"bad scanline data"),ge){const Re=S[P++];for(let Y=0;Y<q;Y++)W[H++]=Re}else W.set(S.subarray(P,P+q),H),H+=q,P+=q}const j=D;for(let ge=0;ge<j;ge++){let Re=0;L[U]=W[ge+Re],Re+=D,L[U+1]=W[ge+Re],Re+=D,L[U+2]=W[ge+Re],Re+=D,L[U+3]=W[ge+Re],U+=4}ee--}return L},m=function(S,A,R,D){const L=S[A+3],U=Math.pow(2,L-128)/255;R[D+0]=S[A+0]*U,R[D+1]=S[A+1]*U,R[D+2]=S[A+2]*U,R[D+3]=1},M=function(S,A,R,D){const L=S[A+3],U=Math.pow(2,L-128)/255;R[D+0]=Ks.toHalfFloat(Math.min(S[A+0]*U,65504)),R[D+1]=Ks.toHalfFloat(Math.min(S[A+1]*U,65504)),R[D+2]=Ks.toHalfFloat(Math.min(S[A+2]*U,65504)),R[D+3]=Ks.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;const p=u(g),x=p.width,b=p.height,v=d(g.subarray(g.pos),x,b);let w,E,_;switch(this.type){case jt:_=v.length/4;const S=new Float32Array(_*4);for(let R=0;R<_;R++)m(v,R*4,S,R*4);w=S,E=jt;break;case Rt:_=v.length/4;const A=new Uint16Array(_*4);for(let R=0;R<_;R++)M(v,R*4,A,R*4);w=A,E=Rt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:b,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E,colorSpace:Ji,minFilter:bt,magFilter:bt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}class M_ extends v_{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}const S_=""+new URL("grass_diff-vig3bC4b.jpg",import.meta.url).href,y_=""+new URL("grass_nor-Cp8RKkAj.jpg",import.meta.url).href,b_=""+new URL("grass_rough-Cb20WbX1.jpg",import.meta.url).href,E_=""+new URL("dirt_diff-B9P7P3b1.jpg",import.meta.url).href,T_=""+new URL("dirt_nor-BR9vrr9r.jpg",import.meta.url).href,w_=""+new URL("dirt_rough-Db88IvB1.jpg",import.meta.url).href,A_=""+new URL("rock_diff-Clx6WbHJ.jpg",import.meta.url).href,R_=""+new URL("rock_nor-B8WSHJ2I.jpg",import.meta.url).href,C_=""+new URL("rock_rough-rTGZWDKj.jpg",import.meta.url).href,P_=""+new URL("sand_diff-DqxI4022.jpg",import.meta.url).href,D_=""+new URL("sand_nor-BtdEeoec.jpg",import.meta.url).href,L_=""+new URL("bark_diff-BEBFBPsY.jpg",import.meta.url).href,N_=""+new URL("bark_nor-DnOM-dyB.jpg",import.meta.url).href,I_=""+new URL("concrete_diff-5XU0sVYe.jpg",import.meta.url).href,U_=""+new URL("concrete_nor-CXvJtMJ2.jpg",import.meta.url).href,F_=""+new URL("metal_diff-BDFqcIP1.jpg",import.meta.url).href,O_=""+new URL("metal_nor-B-V-k_xH.jpg",import.meta.url).href,z_=""+new URL("metal_rough-Zm_YpI4I.jpg",import.meta.url).href,B_=""+new URL("sky-C35ymwQp.hdr",import.meta.url).href;function Wo(s,e,t=!1){const n=new Qu(s);return n.colorSpace=e?Zt:un,n.wrapS=n.wrapT=t?Sn:n.wrapS,t&&(n.wrapS=Sn,n.wrapT=Sn),n.needsUpdate=!0,n}function br(s,e,t){let n=0,i=1,r=1,a=0;for(let o=0;o<4;o++)n+=s(e*r,t*r)*i,a+=i,i*=.5,r*=2;return n/a}function k_(s,e,t,n){const i=br(s,e,t),r=br(s,e-n,t),a=br(s,e,t-n),o=br(s,e-n,t-n),l=e/n,c=t/n,h=l*l*(3-2*l),f=c*c*(3-2*c);return Jt(Jt(i,r,h),Jt(a,o,h),f)}async function G_(){await new Promise(s=>setTimeout(s,0))}function Tn(s,e,t,n=!0){const i=document.createElement("canvas");i.width=i.height=s;const r=i.getContext("2d");if(!r)throw new Error("2d context unavailable");return e(r,s),Wo(i,t,n)}function Ut(s,e,t){const n=s.load(e);return n.colorSpace=t?Zt:un,n.wrapS=n.wrapT=Sn,n.anisotropy=8,n}function H_(s){return s(.08,"Unrolling surveyed ground"),new Promise((e,t)=>{const n=new jc,i=new hd(n),r={grass:Ut(i,S_,!0),grassN:Ut(i,y_,!1),grassR:Ut(i,b_,!1),dirt:Ut(i,E_,!0),dirtN:Ut(i,T_,!1),dirtR:Ut(i,w_,!1),rock:Ut(i,A_,!0),rockN:Ut(i,R_,!1),rockR:Ut(i,C_,!1),sand:Ut(i,P_,!0),sandN:Ut(i,D_,!1),bark:Ut(i,L_,!0),barkN:Ut(i,N_,!1),concrete:Ut(i,I_,!0),concreteN:Ut(i,U_,!1),metal:Ut(i,F_,!0),metalN:Ut(i,O_,!1),metalR:Ut(i,z_,!1),sky:new M_(n).load(B_)};r.sky.mapping=Er,r.sky.colorSpace=Ji,n.onLoad=()=>e(r),n.onError=a=>t(new Error(`Texture failed: ${a}`))})}async function V_(s){const e=await H_(s);s(.55,"Weathering the company");const t=Tn(256,(u,d)=>{const m=u.createImageData(d,d),M=Ho(ri(99));for(let g=0;g<d;g++)for(let p=0;p<d;p++){const x=k_(M,p*1.4,g*1.4,d*1.4),b=Math.floor(Fe(x*.5+.5,0,1)*255),v=(g*d+p)*4;m.data[v]=m.data[v+1]=m.data[v+2]=b,m.data[v+3]=255}u.putImageData(m,0,0)},!1,!0),n=Tn(256,(u,d)=>{u.fillStyle="#d9d0bd",u.fillRect(0,0,d,d);const m=ri(3);for(let M=0;M<40;M++)u.fillStyle=`rgba(90, 70, 50, ${.04+m()*.08})`,u.beginPath(),u.ellipse(m()*d,m()*d,10+m()*40,8+m()*24,m()*3,0,Math.PI*2),u.fill();u.strokeStyle="rgba(60,40,30,0.25)",u.lineWidth=1;for(let M=0;M<8;M++)u.beginPath(),u.moveTo(m()*d,m()*d),u.lineTo(m()*d,m()*d),u.stroke()},!0),i=Tn(256,(u,d)=>{u.fillStyle="#c4b5a4",u.fillRect(0,0,d,d);for(let m=0;m<d;m+=28){const M=m/28%2===0?0:22;for(let g=-40;g<d;g+=46){const p=(g+m)%17-8;u.fillStyle=`rgb(${148+p}, ${72+p*.4}, 58)`,u.fillRect(g+M+2,m+2,40,22)}}},!0),r=Tn(256,(u,d)=>{u.fillStyle="#6e3d32",u.fillRect(0,0,d,d);for(let m=0;m<d;m+=18){u.fillStyle=m%36===0?"#7d4a3c":"#5e342c";for(let M=-20;M<d;M+=22){const g=m/18%2===0?0:11;u.beginPath(),u.moveTo(M+g,m+16),u.lineTo(M+g+11,m+2),u.lineTo(M+g+22,m+16),u.closePath(),u.fill()}}},!0),a=Tn(256,(u,d)=>{u.fillStyle="#8d877c",u.fillRect(0,0,d,d);const m=ri(11);for(let M=0;M<d;M+=28){const g=M/28%2===0?0:24;for(let p=-40;p<d;p+=48){const x=(m()-.5)*8;u.fillStyle=`rgb(${120+x}, ${116+x}, ${108+x})`,u.fillRect(p+g+2,M+2,44,24),u.strokeStyle="rgba(50,46,40,0.55)",u.strokeRect(p+g+2,M+2,44,24)}}},!0),o=Tn(128,(u,d)=>{u.fillStyle="#1c1b18",u.fillRect(0,0,64,d);for(let m=0;m<d;m+=8)u.fillStyle=m%16===0?"#3a342c":"#2a261f",u.fillRect(4,m,56,5),u.fillStyle="#111",u.fillRect(0,m+6,64,2)},!0);o.repeat.set(1,6);const l=(u,d)=>Tn(512,(m,M)=>{m.fillStyle=u[0],m.fillRect(0,0,M,M);const g=ri(d);for(let p=0;p<5;p++){const x=g()*M,b=g()*M;m.fillStyle=u[1+p%(u.length-1)],m.beginPath(),m.ellipse(x,b,M*(.22+g()*.16),M*(.12+g()*.1),g()*3,0,Math.PI*2),m.fill(),m.strokeStyle=u[u.length-1],m.lineWidth=6,m.stroke()}},!0,!0),c=Tn(128,(u,d)=>{u.clearRect(0,0,d,d);const m=["rgba(92,104,62,0.95)","rgba(74,86,52,0.92)","rgba(112,118,74,0.9)"];[28,52,74,98].forEach((g,p)=>{u.fillStyle=m[p%m.length],u.beginPath(),u.moveTo(g-5,d),u.quadraticCurveTo(g+(p%2===0?6:-8),d*.45,g+(p%2===0?-2:4),10),u.quadraticCurveTo(g+8,d*.5,g+6,d),u.fill()})},!0,!1);c.premultiplyAlpha=!1;const h=u=>Tn(128,(d,m)=>{d.clearRect(0,0,m,m),d.translate(m/2,m/2),u==="cinder"?(d.fillStyle="#e0a84a",d.beginPath(),d.moveTo(0,-36),d.lineTo(28,30),d.lineTo(0,14),d.lineTo(-28,30),d.closePath(),d.fill()):(d.fillStyle="#d5dbe3",d.rotate(Math.PI/4),d.fillRect(-22,-22,44,44))},!0,!1),f=Tn(64,(u,d)=>{const m=u.createRadialGradient(d/2,d/2,2,d/2,d/2,d/2);m.addColorStop(0,"rgba(255,255,255,1)"),m.addColorStop(.4,"rgba(255,255,255,0.65)"),m.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=m,u.fillRect(0,0,d,d)},!1,!1);for(const u of[n,i,r])u.wrapS=u.wrapT=Sn,u.repeat.set(3,3);return s(.82,"Painting the company"),await G_(),{...e,cloud:t,plaster:n,timber:i,roof:r,stone:a,track:o,camoCinder:l(["#7d8a56","#3f4e2c","#c6c68a","#243018"],4),camoSlate:l(["#8d959c","#46525c","#d5d8d2","#2a3138"],8),halberd:W_(),blade:c,leaf:X_(),emblemCinder:h("cinder"),emblemSlate:h("slate"),sprite:f,anisotropy:8}}function W_(){const e=document.createElement("canvas");e.width=e.height=1024;const t=e.getContext("2d");if(!t)throw new Error("2d context unavailable");t.fillStyle="#1a3f66",t.fillRect(0,0,1024,1024);const n="#efe0c2",i="#e2c89a";t.lineJoin="round",t.lineCap="round",_c(t,1024*.5,1024*.48,1024*.92,n),_c(t,1024*.08,1024*.92,1024*.34,i),t.strokeStyle="#0c243c",t.lineWidth=14,t.stroke();const r=t.getImageData(0,0,1024,1024),a=Ho(ri(99));for(let l=0;l<1024;l++)for(let c=0;c<1024;c++){const h=(l*1024+c)*4,f=a(c*.004,l*.004)>.62?-18:0;r.data[h]=Fe(r.data[h]+f*.4,0,255),r.data[h+1]=Fe(r.data[h+1]+f*.7,0,255),r.data[h+2]=Fe(r.data[h+2]+f*.25,0,255)}t.putImageData(r,0,0);const o=Wo(e,!0,!0);return o.anisotropy=8,o}function _c(s,e,t,n,i){s.save(),s.translate(e,t),s.fillStyle=i,s.strokeStyle="#0c243c",s.lineWidth=Math.max(10,n*.035),s.beginPath(),s.moveTo(-n*.42,-n*.08),s.lineTo(-n*.42,-n*.34),s.quadraticCurveTo(n*.1,-n*.4,n*.36,-n*.05),s.quadraticCurveTo(n*.48,n*.18,n*.12,n*.28),s.quadraticCurveTo(-n*.05,n*.34,-n*.08,n*.08),s.quadraticCurveTo(-n*.1,-n*.08,n*.08,-n*.12),s.quadraticCurveTo(n*.18,-n*.14,n*.16,n*.02),s.lineTo(-n*.02,n*.08),s.closePath(),s.fill(),s.stroke(),s.restore()}function X_(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(!t)throw new Error("2d context unavailable");t.clearRect(0,0,256,256);const n=[[118,132,78,36,.4,"rgba(86,96,58,0.95)"],[150,108,64,28,-.6,"rgba(112,118,72,0.92)"],[96,96,58,26,1.1,"rgba(70,80,50,0.94)"],[168,156,52,22,.2,"rgba(98,104,64,0.9)"],[128,150,70,24,-.2,"rgba(78,88,54,0.93)"]];for(const[r,a,o,l,c,h]of n){t.save(),t.translate(r,a),t.rotate(c);const f=t.createRadialGradient(0,0,o*.15,0,0,o);f.addColorStop(0,h),f.addColorStop(.72,h),f.addColorStop(1,"rgba(70,80,50,0)"),t.fillStyle=f,t.beginPath(),t.ellipse(0,0,o,l,0,0,Math.PI*2),t.fill(),t.restore()}const i=Wo(e,!0,!1);return i.premultiplyAlpha=!1,i}class q_{selected="halberd";onDeploy=()=>{};onAgain=()=>{};onGarage=()=>{};onResume=()=>{};onQuit=()=>{};onQuality=()=>{};onVolume=()=>{};onMap=()=>{};qualityButtons=[];allyNodes=[];enemyNodes=[];floaterNodes=[];plateNodes=[];hitTimer=0;lastDealt=0;constructor(){const e=document.querySelector("#tank-list");if(!e)return;for(const o of Eg){const l=Nr[o],c=document.createElement("button");c.type="button",c.className="tank-card"+(o===this.selected?" selected":""),c.dataset.tank=o;const h=Math.round(l.maxSpeed/10.9*100),f=Math.round(l.armorHull[0]/200*100),u=Math.round(l.damage/l.reload/50*100);c.innerHTML=`<span class="role">${l.role}</span><strong>${l.name}</strong><p>${l.blurb}</p>
        ${Ra("Pace",h)}${Ra("Plate",f)}${Ra("Bite",u)}`,c.addEventListener("click",()=>{this.selected=o,e.querySelectorAll(".tank-card").forEach(d=>d.classList.toggle("selected",d.dataset.tank===o))}),e.append(c)}const t=document.querySelector("#quality");for(const[o,l]of["Performance","Balanced","High"].entries()){const c=document.createElement("button");c.type="button",c.textContent=l,c.addEventListener("click",()=>this.onQuality(o)),t?.append(c),this.qualityButtons.push(c)}document.querySelector("#battle")?.addEventListener("click",()=>this.onDeploy(this.selected)),document.querySelector("#again")?.addEventListener("click",()=>this.onAgain()),document.querySelector("#garage")?.addEventListener("click",()=>this.onGarage()),document.querySelector("#resume")?.addEventListener("click",()=>this.onResume()),document.querySelector("#quit")?.addEventListener("click",()=>this.onQuit()),document.querySelector("#minimap-wrap")?.addEventListener("click",()=>this.onMap());const n=document.querySelector("#volume"),i=localStorage.getItem("ashen-volume");n&&i&&(n.value=i),n?.addEventListener("input",()=>{localStorage.setItem("ashen-volume",n.value),this.onVolume(Number(n.value))});const r=document.querySelector("#floaters");for(let o=0;o<24;o++){const l=document.createElement("div");l.className="floater",l.hidden=!0,r?.append(l),this.floaterNodes.push(l)}const a=document.querySelector("#plates");for(let o=0;o<14;o++){const l=document.createElement("div");l.className="plate",l.hidden=!0,l.innerHTML="<b></b><i><span></span></i><em></em>",a?.append(l),this.plateNodes.push(l)}}volume(){const e=document.querySelector("#volume");return e?Number(e.value):.75}setQuality(e){this.qualityButtons.forEach((t,n)=>t.classList.toggle("on",n===e))}progress(e,t){const n=document.querySelector("#load-fill"),i=document.querySelector("#load-label");n&&(n.style.width=`${Math.round(e*100)}%`),i&&(i.textContent=t)}showMenu(){cn("#loading",!1),cn("#menu",!0),cn("#hud",!1),cn("#end",!1),cn("#pause",!1)}showBattle(){cn("#menu",!1),cn("#loading",!1),cn("#end",!1),cn("#pause",!1),cn("#hud",!0)}showPause(e){cn("#pause",e)}showEnd(e){cn("#end",!0);const t=document.querySelector("#end-title"),n=document.querySelector("#end-sub"),i=document.querySelector("#end-stats");t&&(t.textContent=e.title),n&&(n.textContent=e.subtitle),i&&(i.innerHTML=e.rows.map(([r,a])=>`<dt>${r}</dt><dd>${a}</dd>`).join(""))}ensureRosters(e,t){this.allyNodes=xc(document.querySelector("#allies"),e,this.allyNodes),this.enemyNodes=xc(document.querySelector("#enemies"),t,this.enemyNodes)}update(e){wn("#clock",e.time),wn("#ally-count",String(e.allies)),wn("#enemy-count",String(e.enemies));const t=document.querySelector("#hud");t?.classList.toggle("sniper",e.sniper),t?.classList.toggle("ready",e.ready);const n=document.querySelector("#spotted");n&&(n.hidden=!e.spotted);const i=document.querySelector("#banner");i&&(i.hidden=!e.banner,i.textContent=e.banner);const r=document.querySelector("#cap");r&&(r.hidden=!e.cap,r.classList.toggle("bad",e.capBad)),wn("#cap-label",e.cap);const a=document.querySelector("#cap-fill");a&&(a.style.width=`${Math.round(e.capP*100)}%`),wn("#tank-name",e.tankName),wn("#tank-role",e.role),wn("#speed",`${Math.round(Math.abs(e.speed)*3.6)} km/h`),wn("#hp-num",String(Math.max(0,Math.round(e.hp))));const o=document.querySelector("#hp"),l=e.maxHp>0?e.hp/e.maxHp:0;o?.classList.toggle("low",l<.3),o?.classList.toggle("mid",l>=.3&&l<.6);const c=document.querySelector("#hp-fill");c&&(c.style.width=`${Math.max(0,l)*100}%`);const h=e.reloadTime>0?1-e.reload/e.reloadTime:1,f=document.querySelector("#reload-fill");f&&(f.style.width=`${Math.max(0,Math.min(1,h))*100}%`);const u=document.querySelector("#aim-circle");if(u){const p=Math.max(12,e.aimPx*2);u.style.width=`${p}px`,u.style.height=`${p}px`}const d=document.querySelector("#gun-mark");if(d&&(d.hidden=!e.gunVisible,d.style.left=`${e.gunX}px`,d.style.top=`${e.gunY}px`),e.hit){const p=document.querySelector("#hit-mark");p?.classList.remove("show","bounce"),p?.offsetWidth,p?.classList.add("show"),e.hit==="bounce"&&p?.classList.add("bounce")}const m=document.querySelector("#hit-flash");if(m){const p=50+Math.sin(e.hurtAngle)*46,x=50-Math.cos(e.hurtAngle)*46;m.style.setProperty("--hx",`${p}%`),m.style.setProperty("--hy",`${x}%`),m.style.opacity=String(Math.min(1,e.hurt))}const M=document.querySelector("#dealt");wn("#dealt-num",Math.round(e.dealt).toLocaleString()),M&&e.dealt!==this.lastDealt&&(this.lastDealt=e.dealt,M.classList.remove("tick"),M.offsetWidth,e.dealt>0&&M.classList.add("tick")),wn("#fps",`${e.fps} fps`),vc(this.allyNodes,e.alliesRows),vc(this.enemyNodes,e.enemyRows);const g=document.querySelector("#feed");g&&(g.innerHTML=e.feed.map(p=>`<p class="${p.kind}">${p.text}</p>`).join(""));for(let p=0;p<this.floaterNodes.length;p++){const x=this.floaterNodes[p],b=e.floaters[p];if(!b){x.hidden=!0;continue}x.hidden=!1,x.className=`floater ${b.kind}`,x.style.left=`${b.x}px`,x.style.top=`${b.y}px`,x.textContent=b.text,x.style.opacity=String(Math.max(0,Math.min(1,b.life)))}for(let p=0;p<this.plateNodes.length;p++){const x=this.plateNodes[p],b=e.plates[p];if(!b||!b.show){x.hidden=!0;continue}x.hidden=!1,x.className=b.ally?"plate ally":"plate enemy",x.style.left=`${b.x}px`,x.style.top=`${b.y}px`;const v=x.querySelector("b"),w=x.querySelector("span"),E=x.querySelector("em");v&&(v.textContent=b.name),E&&(E.textContent=String(Math.max(0,Math.round(b.hp)))),w&&(w.style.width=`${b.max>0?Math.max(0,b.hp/b.max)*100:0}%`)}this.hitTimer}drawMap(e,t,n,i,r){const a=document.querySelector("#minimap"),o=a?.getContext("2d");if(!a||!o)return;o.clearRect(0,0,256,256),o.drawImage(e,0,0,256,256);const l=h=>(h+210)/420*256,c=h=>(210-h)/420*256;Sc(o,l(0),c(176),16,r.north,"#e0a84a"),Sc(o,l(0),c(-176),16,r.south,"#7f93ad");for(const h of i)Mc(o,l(h.x),c(h.z),h.dead?"#5a403c":"#e36d5c");for(const h of n)Mc(o,l(h.x),c(h.z),h.dead?"#44523a":"#9dce7c");t&&(o.save(),o.translate(l(t.x),c(t.z)),o.rotate(-t.yaw),o.fillStyle="#f4efe2",o.beginPath(),o.moveTo(0,-7),o.lineTo(5,6),o.lineTo(-5,6),o.closePath(),o.fill(),o.restore())}}function Ra(s,e){return`<div class="stat"><span>${s}</span><i><span style="width:${Math.max(6,Math.min(100,e))}%"></span></i></div>`}function cn(s,e){const t=document.querySelector(s);t&&(t.hidden=!e)}function wn(s,e){const t=document.querySelector(s);t&&t.textContent!==e&&(t.textContent=e)}function xc(s,e,t){if(!s)return t;s.innerHTML="";const n=[];for(let i=0;i<e;i++){const r=document.createElement("div");r.className="row-tank",r.innerHTML='<span class="tag"></span><div><b></b><div class="mini"><span></span></div></div><em></em>',s.append(r),n.push(r)}return n}function vc(s,e){for(let t=0;t<s.length;t++){const n=s[t],i=e[t];if(!i)continue;n.classList.toggle("dead",i.dead),n.classList.toggle("self",i.self);const r=n.querySelector(".tag"),a=n.querySelector("b"),o=n.querySelector(".mini span"),l=n.querySelector("em");r&&(r.textContent=i.role.slice(0,1)),a&&(a.textContent=i.name),l&&(l.textContent=i.dead?"—":String(Math.max(0,Math.round(i.hp)))),o&&(o.style.width=`${i.max>0?Math.max(0,i.hp/i.max)*100:0}%`)}}function Mc(s,e,t,n){s.fillStyle=n,s.beginPath(),s.arc(e,t,3.2,0,Math.PI*2),s.fill()}function Sc(s,e,t,n,i,r){s.strokeStyle=r,s.lineWidth=2,s.beginPath(),s.arc(e,t,n,0,Math.PI*2),s.stroke(),i>0&&(s.beginPath(),s.arc(e,t,n-3,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.min(1,i)),s.stroke())}const Y_=`
varying vec3 vWorld;
varying vec2 vUv;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorld = world.xyz;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Z_=`
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
`;function $_(s,e){const t=new Dt,n=ye.half,i=.02,r=new Float32Array([-n,i,-n,n,i,-n,-n,i,n,n,i,n]),a=new Float32Array([0,0,1,0,0,1,1,1]);t.setAttribute("position",new qe(r,3)),t.setAttribute("uv",new qe(a,2)),t.setIndex([0,2,1,1,2,3]),t.computeVertexNormals();const o=new St({transparent:!0,depthWrite:!1,uniforms:{uField:{value:s},uSky:{value:e},uSun:{value:$r.clone()},uFogColor:{value:new O(As.r,As.g,As.b)},uFogDensity:{value:.00225},uTime:{value:0}},vertexShader:Y_,fragmentShader:Z_}),l=new xt(t,o);return l.renderOrder=2,l.name="water",l}function K_(s,e){s.material.uniforms.uTime.value=e}const qi=1/60,Ca=new O,nn=new O,J_=new O,vs=new O,Kt=new O;class Q_{phase="boot";capTime=48;canvas;ui=new q_;audio=new Xg;input;scene=new Ou;camera=new hn(58,1,.15,1400);renderer;terrain;scenery;skyMesh;waterMesh;particles;tracks;composer=null;combat;ai=new Bg;tex;sun;boom=new Ul(16742195,0,26,2);flash=new Ul(16769194,0,12,2);tanks=[];player=null;profile=Lr[bg()];lockQuality;counts={trees:1,broad:1,pines:1,grass:1,reeds:1,rocks:1};camYaw=0;camPitch=-.32;camDist=15;sniper=0;look=new O;timeLeft=420;countdown=0;capNorth=0;capSouth=0;elapsed=0;acc=0;last=0;fps=60;fpsFrames=0;fpsAccum=0;lowTimer=0;shake=0;hurt=0;hurtAngle=0;hit="";hitAge=0;feed=[];floaters=[];result=null;pausedFrom="battle";mapBig=!1;platePoint=new O;constructor(){const e=document.querySelector("#view");if(!(e instanceof HTMLCanvasElement))throw new Error("Missing view canvas");this.canvas=e;const t=document.querySelector("#input-layer"),n=document.querySelector("#stick"),i=document.querySelector("#knob");if(!(t instanceof HTMLElement)||!(n instanceof HTMLElement)||!(i instanceof HTMLElement))throw new Error("Missing touch controls");this.input=new qg(t,n,i),this.lockQuality=new URLSearchParams(location.search).has("quality"),this.ui.onDeploy=r=>{this.audio.unlock(),this.start(r)},this.ui.onAgain=()=>{this.audio.unlock(),this.player&&this.start(this.player.spec.id)},this.ui.onGarage=()=>this.garage(),this.ui.onResume=()=>this.resume(),this.ui.onQuit=()=>this.garage(),this.ui.onQuality=r=>this.applyQuality(r),this.ui.onVolume=r=>this.audio.setVolume(r),this.ui.onMap=()=>{this.mapBig=!this.mapBig,document.querySelector("#minimap-wrap")?.classList.toggle("big",this.mapBig)},this.audio.setVolume(this.ui.volume()),document.addEventListener("visibilitychange",()=>{document.hidden?this.audio.suspend():this.audio.resume()})}async boot(){this.renderer=new fg({canvas:this.canvas,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1}),this.renderer.outputColorSpace=Zt,this.renderer.toneMapping=Vr,this.renderer.toneMappingExposure=.82,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ys,this.renderer.setClearColor(As,1),this.ui.progress(.02,"Opening the valley"),this.tex=await V_((r,a)=>this.ui.progress(.02+r*.7,a));const e=this.renderer.capabilities.getMaxAnisotropy();for(const r of Object.values(this.tex))r&&typeof r=="object"&&"anisotropy"in r&&(r.anisotropy=Math.min(8,e));this.ui.progress(.78,"Raising Emberfield"),await tx(),this.terrain=new t_(this.tex),this.scene.add(this.terrain.mesh),this.skyMesh=c_(),this.waterMesh=$_(this.terrain.field,this.tex.sky),this.scene.add(this.waterMesh),this.scenery=n_(this.terrain,this.tex),this.scene.add(this.scenery.group),this.counts={trees:this.scenery.trunks.count,broad:this.scenery.broad.count,pines:this.scenery.pines.count,grass:this.scenery.grass.count,reeds:this.scenery.reeds.count,rocks:this.scenery.rocks.count},this.particles=new Zg(this.tex.sprite,this.profile.particles);for(const r of this.particles.objects)this.scene.add(r);this.tracks=new $g,this.scene.add(this.tracks.mesh),this.combat=new Lg(this.scene),this.scene.fog=new Uo(As,.0034),this.scene.add(u_());const t=new Fs(this.renderer);t.compileEquirectangularShader();const n=t.fromEquirectangular(this.tex.sky);this.scene.environment=n.texture,this.scene.environmentIntensity=1,this.scene.background=this.tex.sky,t.dispose(),this.sun=new pd(16773330,2.45),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(this.profile.shadow,this.profile.shadow),this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=340,this.sun.shadow.bias=-2e-4,this.sun.shadow.normalBias=.06,this.sun.shadow.radius=2.5,this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.add(new ud(12043992,6970178,.62)),this.scene.add(new md(9674928,.18)),this.scene.add(this.boom),this.scene.add(this.flash),this.applyQuality(this.profile.id),this.ui.setQuality(this.profile.id),this.resize(),window.addEventListener("resize",()=>this.resize()),this.phase="menu",this.ui.progress(1,"Company ready"),this.ui.showMenu(),document.body.dataset.phase="menu";const i=new URLSearchParams(location.search).get("autostart");this.publish(),(i==="lynx"||i==="vanguard"||i==="bulwark"||i==="halberd")&&this.start(i),this.last=performance.now(),this.renderer.setAnimationLoop(r=>this.frame(r))}start(e){this.clearMatch();const t=x_(),n=ac(0),i=ac(1),r=new Aa(0,Nr[e],0,rc[0],!0,this.paintFor(e,0),this.trackFor(e),t.gear,t.gun);r.spawn(n[2].x,n[2].z,n[2].yaw,this.terrain),this.tanks.push(r),this.player=r;const a=n.filter((l,c)=>c!==2);wg.forEach((l,c)=>{const h=a[c],f=new Aa(this.tanks.length,Nr[l],0,rc[c+1],!1,this.paintFor(l,0),this.trackFor(l),t.gear,t.gun);f.spawn(h.x,h.z,h.yaw,this.terrain),this.tanks.push(f)}),Ag.forEach((l,c)=>{const h=i[c],f=new Aa(this.tanks.length,Nr[l],1,Tg[c],!1,this.paintFor(l,1),this.trackFor(l),t.gear,t.gun);f.spawn(h.x,h.z,h.yaw,this.terrain),this.tanks.push(f)});for(const l of this.tanks)this.scene.add(l.group);this.ai.bind(this.tanks),this.ui.ensureRosters(7,7),this.timeLeft=420;const o=new URLSearchParams(location.search).get("countdown");this.countdown=o===null?3:Math.max(0,Number(o)),this.capNorth=0,this.capSouth=0,this.result=null,this.feed=[],this.floaters=[],this.camYaw=0,this.camPitch=new URLSearchParams(location.search).get("close")==="1"?-.18:-.3,this.camDist=new URLSearchParams(location.search).get("close")==="1"?8.5:15,this.sniper=0,this.phase="countdown",this.input.setEnabled(!0),this.ui.showBattle(),document.body.dataset.phase="countdown",this.player&&this.look.set(this.player.x,this.player.y+2,this.player.z)}garage(){this.clearMatch(),this.phase="menu",this.input.setEnabled(!1),this.ui.showMenu(),document.body.dataset.phase="menu",this.audio.silenceEngine()}resume(){this.phase==="pause"&&(this.phase=this.pausedFrom,this.input.setEnabled(!0),this.ui.showPause(!1),document.body.dataset.phase=this.phase)}clearMatch(){for(const e of this.tanks)e.group.removeFromParent();this.tanks=[],this.player=null,this.combat?.clear(),this.result=null}frame(e){const t=(e-this.last)/1e3;if(this.last=e,!(t>0))return;const n=Math.min(.05,t);if(this.elapsed+=n,this.fpsAccum+=n,this.fpsFrames++,this.fpsAccum>=.4&&(this.fps=Math.round(this.fpsFrames/this.fpsAccum),this.fpsFrames=0,this.fpsAccum=0,!this.lockQuality&&this.phase==="battle"&&(this.elapsed>4&&this.fps<50?this.lowTimer+=.4:this.lowTimer=0,this.lowTimer>1.6&&this.profile.id>0&&(this.lowTimer=0,this.applyQuality(this.profile.id-1),this.ui.setQuality(this.profile.id)))),this.input.pauseEdge&&(this.input.pauseEdge=!1,this.phase==="battle"||this.phase==="countdown"?(this.pausedFrom=this.phase,this.phase="pause",this.input.setEnabled(!1),this.ui.showPause(!0),document.body.dataset.phase="pause"):this.phase==="pause"&&this.resume()),this.input.mapEdge&&(this.input.mapEdge=!1,this.ui.onMap()),this.phase==="battle"||this.phase==="countdown"){this.acc+=n,this.acc>qi*3&&(this.acc=qi*3);let i=0;for(;this.acc>=qi&&i<3;){try{this.simulate(qi)}catch(r){console.error(r),this.acc=0;break}this.acc-=qi,i++}}else this.acc=0;this.present(n),this.composer&&this.profile.id>0?this.composer.render():this.renderer.render(this.scene,this.camera)}simulate(e){if(!this.player)return;this.input.sample();const t=this.phase==="battle",n=new Map;for(const i of this.tanks)i.alive&&(t?i.player?n.set(i.id,{throttle:this.input.throttle,steer:this.input.steer}):n.set(i.id,this.ai.drive(i,this.tanks,this.terrain,e)):n.set(i.id,{throttle:0,steer:0}));for(const i of this.tanks)if(i.alive&&(i.integrate(n.get(i.id)??{throttle:0,steer:0},e,this.terrain),t&&i.alive&&Math.abs(i.speed)>1.4&&i.distance-i.lastMark>.65)){i.lastMark=i.distance;const r=this.terrain.sample(i.x,i.z);this.tracks.stamp(i.x,r.h,i.z,i.yaw,i.spec.width)}for(const i of this.tanks)i.collide(this.terrain,this.scenery.solids,this.scenery.posts);__(this.tanks);for(const i of this.tanks){const r=i.stick(this.terrain,e);i.applyVisual(r),i.exhaust(e,r,(a,o,l)=>this.particles.dust(a,o,l),(a,o,l)=>this.particles.splash(a,o,l)),i.settle(e)}if(zg(this.tanks,this.terrain,this.scenery.solids,this.scenery.posts,e),this.player.alive){this.player.group.updateMatrixWorld(!0),this.player.muzzle.getWorldPosition(Kt);const i=this.aimRay(this.player),r=this.rayHit(i.ox,i.oy,i.oz,i.dx,i.dy,i.dz),a=Math.atan2(r.x-Kt.x,r.z-Kt.z),o=Math.hypot(r.x-Kt.x,r.z-Kt.z),l=vh(o,r.y-Kt.y,this.player.spec.shellSpeed);this.player.aim(a,l,e)}for(const i of this.tanks)!i.player&&i.alive&&this.ai.aim(i,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts,e);if(t){this.player.alive&&this.input.consumeFire()?this.combat.tryFire(this.player):this.input.consumeFire();for(const i of this.tanks)i.aiFire&&(this.combat.tryFire(i),i.aiFire=!1);this.combat.update(e,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts),this.consumeEvents(),this.updateCaps(e),this.timeLeft-=e,this.checkEnd()}else this.phase==="countdown"&&(this.input.consumeFire(),this.countdown-=e,this.countdown<=0&&(this.phase="battle",document.body.dataset.phase="battle"));for(const i of this.floaters)i.life-=e;this.floaters=this.floaters.filter(i=>i.life>0);for(const i of this.feed)i.age+=e;this.feed=this.feed.filter(i=>i.age<6).slice(0,5)}present(e){const t=this.phase==="menu"||this.phase==="boot";if(new URLSearchParams(location.search).get("view")==="hero"&&this.player&&this.player)this.camera.position.set(this.player.x+8.5,this.player.y+3.4,this.player.z+6.2),this.camera.lookAt(this.player.x,this.player.y+1.3,this.player.z+.4),this.camera.fov=42,this.camera.updateProjectionMatrix();else if(t&&this.terrain){const i=this.elapsed*.045,r=70+Math.cos(i)*48,a=90+Math.sin(i)*26,o=this.terrain.sample(r,a).h+18;this.camera.position.set(r,o,a),this.camera.lookAt(116,this.terrain.sample(116,52).h+5,52),this.camera.fov=58,this.camera.updateProjectionMatrix()}else if(this.player){const i=this.input.consumeLook();this.camYaw-=i.x*this.input.sens,this.camPitch-=i.y*this.input.sens,this.camPitch=Fe(this.camPitch,this.sniper>.5?-.45:-1.05,.42),this.camDist=Fe(this.camDist+this.input.zoomDelta*.01,6,26),this.input.zoomDelta=0;const r=this.input.isSniper()&&this.player.alive&&(this.phase==="battle"||this.phase==="countdown");this.sniper=ph(this.sniper,r?1:0,9,e),this.input.setSniper(this.sniper>.5);const a=this.subject();if(a){Ca.set(a.x,a.y+1.75,a.z),this.look.lengthSq()<1&&this.look.copy(Ca),this.look.lerp(Ca,1-Math.exp(-8*e));const o=this.aimRay(a);nn.set(o.dx,o.dy,o.dz);const l=this.look.clone().addScaledVector(nn,-this.camDist),c=this.pullCamera(this.look,l),h=new O(a.x,a.y+2.4,a.z);this.camera.position.copy(c).lerp(h,this.sniper);const f=this.look.clone().lerp(h.clone().add(nn),this.sniper);if(this.shake>0){const u=this.shake*this.shake*.35;this.camera.position.x+=(Math.random()-.5)*u,this.camera.position.y+=(Math.random()-.5)*u,this.shake=Math.max(0,this.shake-e*1.6)}this.camera.lookAt(f),this.camera.fov=58+-43*this.sniper,this.camera.updateProjectionMatrix(),a.group.visible=this.sniper<.7||a!==this.player}}if(this.terrain){this.terrain.tick(this.elapsed),h_(this.skyMesh,this.elapsed),K_(this.waterMesh,this.elapsed),this.scenery.tick(this.elapsed),this.skyMesh.position.copy(this.camera.position),this.particles.update(e),this.boom.intensity=Math.max(0,this.boom.intensity-e*80),this.flash.intensity=Math.max(0,this.flash.intensity-e*220),this.hurt=Math.max(0,this.hurt-e*1.4);const i=this.subject()??this.player;i&&(this.audio.updateEngine(i.player?i.speed:0,i.spec.maxSpeed,this.input.throttle),(!i.alive||!i.player)&&this.audio.silenceEngine()),this.updateSun(this.camera.position)}if(this.phase!=="menu"&&this.phase!=="boot"&&this.ui.update(this.hud()),this.terrain&&this.phase!=="boot"){const i=this.subject();this.ui.drawMap(this.terrain.minimap,i?{x:i.x,z:i.z,yaw:this.camYaw}:null,this.tanks.filter(r=>r.team===0).map(r=>({x:r.x,z:r.z,dead:!r.alive})),this.tanks.filter(r=>r.team===1&&(r.detected>0||!r.alive)).map(r=>({x:r.x,z:r.z,dead:!r.alive})),{north:this.capNorth,south:this.capSouth})}this.hitAge>0&&(this.hitAge=Math.max(0,this.hitAge-e))}markHit(e){this.hit=e,this.hitAge=.7}subject(){return this.player?.alive?this.player:this.tanks.find(e=>e.team===0&&e.alive)??this.player}aimRay(e){ex(this.camYaw,this.camPitch,nn);const t=this.camDist,n=e.x-nn.x*t*(1-this.sniper),i=e.y+1.75*(1-this.sniper)+2.4*this.sniper-nn.y*t*(1-this.sniper),r=e.z-nn.z*t*(1-this.sniper);return{ox:n,oy:i,oz:r,dx:nn.x,dy:nn.y,dz:nn.z}}rayHit(e,t,n,i,r,a){let o=460;for(let l=8;l<=460;l+=3)if(t+r*l<this.terrain.groundAt(e+i*l,n+a*l)+.08){o=l;break}for(const l of this.scenery.solids)for(let c=6;c<o;c+=5){const h=e+i*c,f=t+r*c,u=n+a*c,[d,m]=kr(h-l.x,u-l.z,l.rot);if(Math.abs(d)<=l.hx&&Math.abs(m)<=l.hz&&Math.abs(f-l.y)<=l.hy){o=c;break}}return J_.set(e+i*o,t+r*o,n+a*o)}pullCamera(e,t){const n=t.x-e.x,i=t.y-e.y,r=t.z-e.z,a=Math.hypot(n,i,r);if(a<.5)return t;const o=Math.ceil(a/1.4);let l=a;for(let c=1;c<=o;c++){const h=c/o*a,f=e.x+n/a*h,u=e.y+i/a*h,d=e.z+r/a*h;if(u<this.terrain.sample(f,d).h+.7){l=Math.max(1.4,h-1.2);break}}return new O(e.x+n/a*l,e.y+i/a*l,e.z+r/a*l)}updateSun(e){const t=this.profile.range,n=t*2/this.profile.shadow,i=Math.round(e.x/n)*n,r=Math.round(e.z/n)*n;this.sun.target.position.set(i,0,r),this.sun.position.set(i,0,r).addScaledVector($r,170);const a=this.sun.shadow.camera;a.left=-t,a.right=t,a.top=t,a.bottom=-t,a.updateProjectionMatrix()}updateCaps(e){let t=0,n=0,i=0,r=0;for(const o of this.tanks){if(!o.alive)continue;const l=Math.hypot(o.x,o.z-ye.baseZ)<ye.baseR,c=Math.hypot(o.x,o.z+ye.baseZ)<ye.baseR;l&&o.team===0&&t++,l&&o.team===1&&n++,c&&o.team===1&&r++,c&&o.team===0&&i++}const a=e/this.capTime;t>0&&n===0?this.capNorth+=a*Math.min(3,t):t===0&&n===0&&(this.capNorth=Math.max(0,this.capNorth-e*.1)),r>0&&i===0?this.capSouth+=a*Math.min(3,r):r===0&&i===0&&(this.capSouth=Math.max(0,this.capSouth-e*.1))}checkEnd(){if(this.phase==="end")return;const e=this.tanks.filter(a=>a.team===0&&a.alive),t=this.tanks.filter(a=>a.team===1&&a.alive);let n="",i="";if(this.capNorth>=1)n="Victory",i="Cinder captured the Slate base.";else if(this.capSouth>=1)n="Defeat",i="Slate captured the Cinder base.";else if(t.length===0&&e.length===0)n="Draw",i="Both companies were wiped out.";else if(t.length===0)n="Victory",i="Every Slate tank is burning.";else if(e.length===0)n="Defeat",i="Cinder Company was destroyed.";else if(this.timeLeft<=0){const a=e.reduce((l,c)=>l+c.hp,0),o=t.reduce((l,c)=>l+c.hp,0);e.length>t.length||e.length===t.length&&a>o?(n="Victory",i="Time ran out. Cinder still holds the valley."):t.length>e.length||o>a?(n="Defeat",i="Time ran out. Slate kept the field."):(n="Draw",i="Dusk fell with neither side broken.")}if(!n||!this.player)return;const r=this.player;this.result={title:n,subtitle:i,rows:[["Damage dealt",Math.round(r.damageDealt).toLocaleString()],["Kills",String(r.kills)],["Shots fired",String(r.shots)],["Hits",String(r.hits)],["Blocked",Math.round(r.blocked).toLocaleString()],["Survived",r.alive?"Yes":"No"]]},this.phase="end",this.input.setEnabled(!1),this.ui.showEnd(this.result),document.body.dataset.phase="end",this.audio.silenceEngine()}consumeEvents(){const e=this.camera.position;for(const t of this.combat.events)this.applyEvent(t,e);this.combat.events.length=0}applyEvent(e,t){const n=Math.hypot(e.x-t.x,e.y-t.y,e.z-t.z);if(e.type==="fire")this.particles.muzzle(e.x,e.y,e.z,e.dx,e.dy,e.dz),this.audio.shot(n),e.a===this.player?.id&&(this.flash.position.set(e.x,e.y,e.z),this.flash.intensity=18);else if(e.type==="pen"){this.particles.spark(e.x,e.y,e.z,!0);const i=e.a===this.player?.id,r=e.b===this.player?.id;if(i||r){const a=e.note==="crit";this.floaters.push({x:e.x,y:e.y+2.2,z:e.z,text:`${r?"":"-"}${Math.round(e.n)}${a?" CRITICAL":""}`,life:1.6,max:1.6,kind:r?"hurt":a?"crit":"pen",follow:e.b})}if(i){this.markHit("pen"),this.audio.pen();const a=this.tanks.find(o=>o.id===e.b);a&&(a.detected=Math.max(a.detected,8))}r&&this.noteHurt(e.x,e.z,Math.round(e.n))}else if(e.type==="bounce"){this.particles.spark(e.x,e.y,e.z,!1);const i=e.a===this.player?.id,r=e.b===this.player?.id;if(i||r){const a=e.note==="ricochet";this.floaters.push({x:e.x,y:e.y+2.2,z:e.z,text:a?"RICOCHET":"NO DAMAGE",life:1.45,max:1.45,kind:a?"ricochet":"nodmg",follow:e.b})}if(i){this.markHit("bounce"),this.audio.bounce();const a=this.tanks.find(o=>o.id===e.b);a&&(a.detected=Math.max(a.detected,8))}r&&(this.audio.bounce(),this.noteHurt(e.x,e.z,0))}else if(e.type==="kill"){this.particles.blast(e.x,e.y,e.z),this.boom.position.set(e.x,e.y,e.z),this.boom.intensity=90,this.audio.boom(n),this.shake=Math.min(1,this.shake+8/Math.max(6,n));const i=this.tanks.find(a=>a.id===e.a),r=this.tanks.find(a=>a.id===e.b);if(i&&r){const a=i.team===0?"good":"bad";this.feed.unshift({text:`${i.name} destroyed ${r.name}`,kind:a,age:0}),(i.player||r.player)&&this.floaters.push({x:e.x,y:e.y+2.6,z:e.z,text:"DESTROYED",life:1.8,max:1.8,kind:"kill",follow:e.b})}}else e.type==="ground"&&this.particles.dirt(e.x,e.y,e.z)}noteHurt(e,t,n){this.hurt=1,this.shake=Math.min(1,this.shake+.45);const i=e-(this.player?.x??0),r=t-(this.player?.z??0);this.hurtAngle=Math.atan2(i,r)-this.camYaw}hud(){const e=this.player,t=this.tanks.filter(v=>v.team===0),n=this.tanks.filter(v=>v.team===1);let i="",r=0,a=!1;this.capNorth>.01&&(i="Capturing the Slate base",r=this.capNorth),this.capSouth>this.capNorth&&(i="Cinder base under attack",r=this.capSouth,a=!0);let o="";this.phase==="countdown"?o=this.countdown>.15?String(Math.max(1,Math.ceil(this.countdown-.001))):"Engage":e&&!e.alive&&this.phase==="battle"&&(o="Destroyed — spectating");const l=this.canvas.clientWidth||1,c=this.canvas.clientHeight||1;let h=l/2,f=c/2,u=!1,d=!1;if(e?.alive){e.muzzle.getWorldPosition(Kt),e.muzzle.getWorldDirection(vs);const v=vs.x*nn.x+vs.y*nn.y+vs.z*nn.z;d=e.reload<=0&&v>.998;const w=Kt.clone().addScaledVector(vs,80);w.project(this.camera),w.z<1&&(u=!0,h=(w.x*.5+.5)*l,f=(-w.y*.5+.5)*c)}const m=this.camera.fov*Math.PI/180,M=Math.atan((e?.dispersion??.4)/100),g=Math.tan(M)/Math.tan(m/2)*(c/2),p=Math.floor(this.timeLeft/60),x=Math.max(0,Math.floor(this.timeLeft%60)),b=[];for(const v of this.floaters){let w=v.x,E=v.y,_=v.z;if(v.follow!==void 0){const A=this.tanks.find(R=>R.id===v.follow);A&&(w=A.x,E=A.y+A.spec.height+3.1,_=A.z)}const S=new O(w,E+(1-v.life/v.max)*2.2,_);S.project(this.camera),!(S.z>1)&&b.push({x:(S.x*.5+.5)*l,y:(-S.y*.5+.5)*c,text:v.text,life:v.life,kind:v.kind})}return{time:`${p}:${x.toString().padStart(2,"0")}`,allies:t.filter(v=>v.alive).length,enemies:n.filter(v=>v.alive).length,spotted:(e?.detected??0)>0,banner:o,sniper:this.sniper>.55,hp:e?.hp??0,maxHp:e?.spec.hp??1,speed:e?.speed??0,reload:e?.reload??0,reloadTime:e?.spec.reload??1,aimPx:g,ready:d,gunX:h,gunY:f,gunVisible:u,hit:this.hitAge>.55?this.hit:"",hurt:this.hurt,hurtAngle:this.hurtAngle,fps:this.fps,cap:i,capP:r,capBad:a,tankName:e?.spec.name??"",role:e?.spec.role??"",alliesRows:t.map(v=>({name:v.name,role:v.spec.role,hp:v.hp,max:v.spec.hp,dead:!v.alive,self:v.player})),enemyRows:n.map(v=>({name:v.name,role:v.spec.role,hp:v.detected>0||!v.alive?v.hp:v.spec.hp,max:v.spec.hp,dead:!v.alive,self:!1})),feed:this.feed,floaters:b.slice(0,24),plates:this.nameplates(l,c),dealt:e?.damageDealt??0}}nameplates(e,t){const n=[],i=this.platePoint;for(const r of this.tanks){if(!r.alive)continue;const a=r.team===0;if(!a&&r.detected<=0)continue;i.set(r.x,r.y+r.spec.height+2.6,r.z),i.project(this.camera);const o=i.z<1;n.push({x:(i.x*.5+.5)*e,y:(-i.y*.5+.5)*t,name:r.player?"You":r.name,hp:r.hp,max:r.spec.hp,ally:a,show:o})}return n}paintFor(e,t){return e==="halberd"?this.tex.halberd:t===0?this.tex.camoCinder:this.tex.camoSlate}trackFor(e){return e==="halberd"?this.tex.metal:this.tex.track}setupComposer(){if(this.composer=null,!this.renderer||this.profile.id===0)return;const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=new xg(this.renderer);if(n.addPass(new Mg(this.scene,this.camera)),this.profile.id===2){const i=new ii(this.scene,this.camera,Math.max(1,e*.5),Math.max(1,t*.5));i.kernelRadius=12,i.minDistance=.001,i.maxDistance=.18,n.addPass(i)}n.addPass(new es(new ze(Math.max(1,e*.5),Math.max(1,t*.5)),.12,.35,.9)),n.addPass(new fh(j_)),n.addPass(new vg),this.composer=n}applyQuality(e){if(this.profile=Lr[e],!this.renderer)return;this.resize(),this.sun?.shadow.mapSize.set(this.profile.shadow,this.profile.shadow);const t=this.sun?.shadow;if(t?.map&&(t.map.dispose(),t.map=null),!this.scenery)return;const n=this.counts.trees>0?Math.min(1,this.profile.trees/Lr[2].trees):1;this.scenery.trunks.count=Math.max(0,Math.floor(this.counts.trees*n)),this.scenery.broad.count=Math.max(0,Math.floor(this.counts.broad*n)),this.scenery.pines.count=Math.max(0,Math.floor(this.counts.pines*n)),this.scenery.grass.count=Math.min(this.counts.grass,this.profile.grass),this.scenery.reeds.count=Math.min(this.counts.reeds,this.profile.reeds),this.scenery.rocks.count=Math.min(this.counts.rocks,this.profile.rocks),this.scenery.trunks.castShadow=this.profile.treeShadow,this.scenery.broad.castShadow=this.profile.treeShadow,this.scenery.pines.castShadow=this.profile.treeShadow,this.particles?.setBudget(this.profile.particles),this.setupComposer()}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight,n=Math.min(this.profile.dpr,window.devicePixelRatio||1);this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.composer?.setSize(e,t)}publish(){const e=this;window.__ASHEN={ready:!0,get phase(){return e.phase},get fps(){return e.fps},start:t=>e.start(t??"vanguard"),damage:(t,n)=>e.debugDamage(t,n),fireAt:t=>e.debugFireAt(t),teleport:(t,n)=>e.debugTeleport(t,n),setCapTime:t=>{e.capTime=t},armorCases:Dg,getState:()=>e.debugState()}}debugFireAt(e){const t=this.tanks.find(h=>h.id===e&&h.alive);if(!this.player||!t||!this.combat||!this.terrain||!this.scenery)return!1;const n=t.x-this.player.x,i=t.z-this.player.z,r=Math.hypot(n,i),a=Math.atan2(n,i);this.camYaw=a,this.camPitch=-.05,this.player.dispersion=.02,this.player.reload=0,this.player.group.updateMatrixWorld(!0),this.player.muzzle.getWorldPosition(Kt);const o=t.y+Math.max(.8,t.spec.height*.7),l=Math.atan2(o-Kt.y,Math.max(1,r));this.player.aim(a,l,5),this.player.group.updateMatrixWorld(!0);const c=this.combat.tryFire(this.player);this.player.muzzle.getWorldPosition(Kt),this.combat.steerLast(Kt.x,Kt.y,Kt.z,t.x,o,t.z);for(let h=0;h<24;h++)this.combat.update(qi,this.tanks,this.terrain,this.scenery.solids,this.scenery.posts);return this.consumeEvents(),this.phase==="countdown"&&(this.phase="battle",document.body.dataset.phase="battle"),c}debugDamage(e,t){const n=this.tanks.find(r=>r.id===e);if(!n||!n.alive)return;n.hp-=t,n.detected=3;const i=n.player;this.player&&!i&&n.team!==this.player.team&&(this.player.damageDealt+=t),this.floaters.push({x:n.x,y:n.y+2.4,z:n.z,text:`-${Math.round(t)}`,life:1.6,max:1.6,kind:i?"hurt":"pen",follow:n.id}),i&&this.noteHurt(n.x-8,n.z+12,t),n.hp<=0&&(n.kill(),this.particles.blast(n.x,n.y+1,n.z),this.floaters.push({x:n.x,y:n.y+3.4,z:n.z,text:"DESTROYED",life:1.6,max:1.6,kind:"kill"})),this.phase==="countdown"&&(this.phase="battle"),this.checkEnd()}debugTeleport(e,t){this.player&&(this.player.x=e,this.player.z=t,this.player.y=this.terrain.sample(e,t).h,this.player.speed=0)}debugState(){const e=this.player;return{phase:this.phase,fps:this.fps,quality:this.profile.id,draws:this.renderer.info.render.calls,tris:this.renderer.info.render.triangles,shells:this.combat?.activeShells??0,result:this.result?.title??"",allies:this.tanks.filter(t=>t.team===0&&t.alive).length,enemies:this.tanks.filter(t=>t.team===1&&t.alive).length,camYaw:this.camYaw,player:e?{id:e.id,x:e.x,y:e.y,z:e.z,hp:e.hp,speed:e.speed,yaw:e.yaw,shots:e.shots,hits:e.hits,damageDealt:e.damageDealt,kills:e.kills,alive:e.alive}:null,tanks:this.tanks.map(t=>({id:t.id,name:t.name,team:t.team,hp:t.hp,alive:t.alive,x:t.x,z:t.z}))}}}const j_={uniforms:{tDiffuse:{value:null}},vertexShader:`
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
  `};function ex(s,e,t){const n=Math.cos(e);return t.set(Math.sin(s)*n,Math.sin(e),Math.cos(s)*n)}function tx(){return new Promise(s=>setTimeout(s,0))}const nx=navigator.maxTouchPoints>0||matchMedia("(pointer: coarse)").matches;document.body.classList.toggle("touch-device",nx);const ix=new Q_;ix.boot().catch(s=>{const e=document.querySelector("#fatal"),t=document.querySelector("#loading");t&&(t.hidden=!0),e&&(e.hidden=!1,e.textContent=s instanceof Error?s.message:"The valley failed to load.")});
