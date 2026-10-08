var Hn,On,Vn,kn,Gn,Wn,Xn,Yn,jn,Sr=1e3,At=1001,yr=1002,De=1003,so=1004,oo=1005,Ce=1006,lo=1007,ki=1008,dt=1009,co=1010,ho=1011,Kn=1012,uo=1013,Mt=1014,Gi=1015,Ct=1016,Jn=1017,qn=1018,Zn=1020,fo=35902,go=35899,po=1021,mo=1022,pi=1023,mi=1026,$n=1027,vo=1028,Aa=1029,Wi=1030,ea=1031,ta=1033,wo=33776,Po=33777,Do=33778,Eo=33779,Bo=35840,Mo=35841,Co=35842,xo=35843,_o=36196,So=37492,yo=37496,Qo=37488,To=37489,Io=37490,bo=37491,Ro=37808,Lo=37809,Uo=37810,Fo=37811,zo=37812,No=37813,Ho=37814,Oo=37815,Vo=37816,ko=37817,Go=37818,Wo=37819,Xo=37820,Yo=37821,jo=36492,Ko=36494,Jo=36495,qo=36283,Zo=36284,$o=36285,Al=36286,Xi=2300,Qr=2301,Tr=2302,ia=2303,ra=2400,na=2401,aa=2402,el=3200,xe="srgb",Ir="srgb-linear",Yi="linear",ji="srgb",br=7680,tl=35044,Ht=2e3;function il(A){for(let e=A.length-1;e>=0;--e)if(A[e]>=65535)return!0;return!1}function rl(A){return ArrayBuffer.isView(A)&&!(A instanceof DataView)}function Ki(A){return document.createElementNS("http://www.w3.org/1999/xhtml",A)}function nl(){const A=Ki("canvas");return A.style.display="block",A}var sa={},Ot=null;function oa(...A){const e="THREE."+A.shift();Ot?Ot("log",e,...A):console.log(e,...A)}function la(A){const e=A[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=A[1];t&&t.isStackTrace?A[0]+=" "+t.getLocation():A[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return A}function MA(...A){A=la(A);const e="THREE."+A.shift();if(Ot)Ot("warn",e,...A);else{const t=A[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...A)}}function yA(...A){A=la(A);const e="THREE."+A.shift();if(Ot)Ot("error",e,...A);else{const t=A[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...A)}}function Vt(...A){const e=A.join(" ");e in sa||(sa[e]=!0,MA(...A))}function al(A,e,t){return new Promise(function(i,r){function n(){switch(A.clientWaitSync(e,A.SYNC_FLUSH_COMMANDS_BIT,0)){case A.WAIT_FAILED:r();break;case A.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}var sl={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},xt=class{addEventListener(A,e){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(e)===-1&&t[A].push(e)}hasEventListener(A,e){const t=this._listeners;return t===void 0?!1:t[A]!==void 0&&t[A].indexOf(e)!==-1}removeEventListener(A,e){const t=this._listeners;if(t===void 0)return;const i=t[A];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(A){const e=this._listeners;if(e===void 0)return;const t=e[A.type];if(t!==void 0){A.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,A);A.target=null}}},ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=1234567,vi=Math.PI/180,wi=180/Math.PI;function kt(){const A=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ve[A&255]+ve[A>>8&255]+ve[A>>16&255]+ve[A>>24&255]+"-"+ve[e&255]+ve[e>>8&255]+"-"+ve[e>>16&15|64]+ve[e>>24&255]+"-"+ve[t&63|128]+ve[t>>8&255]+"-"+ve[t>>16&255]+ve[t>>24&255]+ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]).toLowerCase()}function zA(A,e,t){return Math.max(e,Math.min(t,A))}function Rr(A,e){return(A%e+e)%e}function ol(A,e,t,i,r){return i+(A-e)*(r-i)/(t-e)}function ll(A,e,t){return A!==e?(t-A)/(e-A):0}function Pi(A,e,t){return(1-t)*A+t*e}function cl(A,e,t,i){return Pi(A,e,1-Math.exp(-t*i))}function hl(A,e=1){return e-Math.abs(Rr(A,e*2)-e)}function ul(A,e,t){return A<=e?0:A>=t?1:(A=(A-e)/(t-e),A*A*(3-2*A))}function fl(A,e,t){return A<=e?0:A>=t?1:(A=(A-e)/(t-e),A*A*A*(A*(A*6-15)+10))}function dl(A,e){return A+Math.floor(Math.random()*(e-A+1))}function gl(A,e){return A+Math.random()*(e-A)}function pl(A){return A*(.5-Math.random())}function ml(A){A!==void 0&&(ca=A);let e=ca+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vl(A){return A*vi}function wl(A){return A*wi}function Pl(A){return(A&A-1)===0&&A!==0}function Dl(A){return Math.pow(2,Math.ceil(Math.log(A)/Math.LN2))}function El(A){return Math.pow(2,Math.floor(Math.log(A)/Math.LN2))}function Bl(A,e,t,i,r){const n=Math.cos,a=Math.sin,s=n(t/2),l=a(t/2),o=n((e+i)/2),c=a((e+i)/2),u=n((e-i)/2),h=a((e-i)/2),g=n((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":A.set(s*c,l*u,l*h,s*o);break;case"YZY":A.set(l*h,s*c,l*u,s*o);break;case"ZXZ":A.set(l*u,l*h,s*c,s*o);break;case"XZX":A.set(s*c,l*v,l*g,s*o);break;case"YXY":A.set(l*g,s*c,l*v,s*o);break;case"ZYZ":A.set(l*v,l*g,s*c,s*o);break;default:MA("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Gt(A,e){switch(e.constructor){case Float32Array:return A;case Uint32Array:return A/4294967295;case Uint16Array:return A/65535;case Uint8Array:return A/255;case Int32Array:return Math.max(A/2147483647,-1);case Int16Array:return Math.max(A/32767,-1);case Int8Array:return Math.max(A/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ee(A,e){switch(e.constructor){case Float32Array:return A;case Uint32Array:return Math.round(A*4294967295);case Uint16Array:return Math.round(A*65535);case Uint8Array:return Math.round(A*255);case Int32Array:return Math.round(A*2147483647);case Int16Array:return Math.round(A*32767);case Int8Array:return Math.round(A*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var He={DEG2RAD:vi,RAD2DEG:wi,generateUUID:kt,clamp:zA,euclideanModulo:Rr,mapLinear:ol,inverseLerp:ll,lerp:Pi,damp:cl,pingpong:hl,smoothstep:ul,smootherstep:fl,randInt:dl,randFloat:gl,randFloatSpread:pl,seededRandom:ml,degToRad:vl,radToDeg:wl,isPowerOfTwo:Pl,ceilPowerOfTwo:Dl,floorPowerOfTwo:El,setQuaternionFromProperEuler:Bl,normalize:Ee,denormalize:Gt};Xn=Symbol.iterator;var IA=class{constructor(A=0,e=0){this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const e=this.x,t=this.y,i=A.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=zA(this.x,A.x,e.x),this.y=zA(this.y,A.y,e.y),this}clampScalar(A,e){return this.x=zA(this.x,A,e),this.y=zA(this.y,A,e),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(zA(t,A,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(zA(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y;return e*e+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){const t=Math.cos(e),i=Math.sin(e),r=this.x-A.x,n=this.y-A.y;return this.x=r*t-n*i+A.x,this.y=r*i+n*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Xn](){yield this.x,yield this.y}};Hn=IA,Hn.prototype.isVector2=!0;var _t=class{constructor(A=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=t,this._w=i}static slerpFlat(A,e,t,i,r,n,a){let s=t[i+0],l=t[i+1],o=t[i+2],c=t[i+3],u=r[n+0],h=r[n+1],g=r[n+2],v=r[n+3];if(c!==v||s!==u||l!==h||o!==g){let P=s*u+l*h+o*g+c*v;P<0&&(u=-u,h=-h,g=-g,v=-v,P=-P);let d=1-a;if(P<.9995){const f=Math.acos(P),C=Math.sin(f);d=Math.sin(d*f)/C,a=Math.sin(a*f)/C,s=s*d+u*a,l=l*d+h*a,o=o*d+g*a,c=c*d+v*a}else{s=s*d+u*a,l=l*d+h*a,o=o*d+g*a,c=c*d+v*a;const f=1/Math.sqrt(s*s+l*l+o*o+c*c);s*=f,l*=f,o*=f,c*=f}}A[e]=s,A[e+1]=l,A[e+2]=o,A[e+3]=c}static multiplyQuaternionsFlat(A,e,t,i,r,n){const a=t[i],s=t[i+1],l=t[i+2],o=t[i+3],c=r[n],u=r[n+1],h=r[n+2],g=r[n+3];return A[e]=a*g+o*c+s*h-l*u,A[e+1]=s*g+o*u+l*c-a*h,A[e+2]=l*g+o*h+a*u-s*c,A[e+3]=o*g-a*c-s*u-l*h,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,t,i){return this._x=A,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e=!0){const t=A._x,i=A._y,r=A._z,n=A._order,a=Math.cos,s=Math.sin,l=a(t/2),o=a(i/2),c=a(r/2),u=s(t/2),h=s(i/2),g=s(r/2);switch(n){case"XYZ":this._x=u*o*c+l*h*g,this._y=l*h*c-u*o*g,this._z=l*o*g+u*h*c,this._w=l*o*c-u*h*g;break;case"YXZ":this._x=u*o*c+l*h*g,this._y=l*h*c-u*o*g,this._z=l*o*g-u*h*c,this._w=l*o*c+u*h*g;break;case"ZXY":this._x=u*o*c-l*h*g,this._y=l*h*c+u*o*g,this._z=l*o*g+u*h*c,this._w=l*o*c-u*h*g;break;case"ZYX":this._x=u*o*c-l*h*g,this._y=l*h*c+u*o*g,this._z=l*o*g-u*h*c,this._w=l*o*c+u*h*g;break;case"YZX":this._x=u*o*c+l*h*g,this._y=l*h*c+u*o*g,this._z=l*o*g-u*h*c,this._w=l*o*c-u*h*g;break;case"XZY":this._x=u*o*c-l*h*g,this._y=l*h*c-u*o*g,this._z=l*o*g+u*h*c,this._w=l*o*c+u*h*g;break;default:MA("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,e){const t=e/2,i=Math.sin(t);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const e=A.elements,t=e[0],i=e[4],r=e[8],n=e[1],a=e[5],s=e[9],l=e[2],o=e[6],c=e[10],u=t+a+c;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(o-s)*h,this._y=(r-l)*h,this._z=(n-i)*h}else if(t>a&&t>c){const h=2*Math.sqrt(1+t-a-c);this._w=(o-s)/h,this._x=.25*h,this._y=(i+n)/h,this._z=(r+l)/h}else if(a>c){const h=2*Math.sqrt(1+a-t-c);this._w=(r-l)/h,this._x=(i+n)/h,this._y=.25*h,this._z=(s+o)/h}else{const h=2*Math.sqrt(1+c-t-a);this._w=(n-i)/h,this._x=(r+l)/h,this._y=(s+o)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let t=A.dot(e)+1;return t<1e-8?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(zA(this.dot(A),-1,1)))}rotateTowards(A,e){const t=this.angleTo(A);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){const t=A._x,i=A._y,r=A._z,n=A._w,a=e._x,s=e._y,l=e._z,o=e._w;return this._x=t*o+n*a+i*l-r*s,this._y=i*o+n*s+r*a-t*l,this._z=r*o+n*l+t*s-i*a,this._w=n*o-t*a-i*s-r*l,this._onChangeCallback(),this}slerp(A,e){let t=A._x,i=A._y,r=A._z,n=A._w,a=this.dot(A);a<0&&(t=-t,i=-i,r=-r,n=-n,a=-a);let s=1-e;if(a<.9995){const l=Math.acos(a),o=Math.sin(l);s=Math.sin(s*l)/o,e=Math.sin(e*l)/o,this._x=this._x*s+t*e,this._y=this._y*s+i*e,this._z=this._z*s+r*e,this._w=this._w*s+n*e,this._onChangeCallback()}else this._x=this._x*s+t*e,this._y=this._y*s+i*e,this._z=this._z*s+r*e,this._w=this._w*s+n*e,this.normalize();return this}slerpQuaternions(A,e,t){return this.copy(A).slerp(e,t)}random(){const A=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),i=Math.sqrt(1-t),r=Math.sqrt(t);return this.set(i*Math.sin(A),i*Math.cos(A),r*Math.sin(e),r*Math.cos(e))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};Yn=Symbol.iterator;var z=class{constructor(A=0,e=0,t=0){this.x=A,this.y=e,this.z=t}set(A,e,t){return t===void 0&&(t=this.z),this.x=A,this.y=e,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return this.applyQuaternion(ha.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(ha.setFromAxisAngle(A,e))}applyMatrix3(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[3]*t+r[6]*i,this.y=r[1]*e+r[4]*t+r[7]*i,this.z=r[2]*e+r[5]*t+r[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=A.elements,n=1/(r[3]*e+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*t+r[8]*i+r[12])*n,this.y=(r[1]*e+r[5]*t+r[9]*i+r[13])*n,this.z=(r[2]*e+r[6]*t+r[10]*i+r[14])*n,this}applyQuaternion(A){const e=this.x,t=this.y,i=this.z,r=A.x,n=A.y,a=A.z,s=A.w,l=2*(n*i-a*t),o=2*(a*e-r*i),c=2*(r*t-n*e);return this.x=e+s*l+n*c-a*o,this.y=t+s*o+a*l-r*c,this.z=i+s*c+r*o-n*l,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[4]*t+r[8]*i,this.y=r[1]*e+r[5]*t+r[9]*i,this.z=r[2]*e+r[6]*t+r[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=zA(this.x,A.x,e.x),this.y=zA(this.y,A.y,e.y),this.z=zA(this.z,A.z,e.z),this}clampScalar(A,e){return this.x=zA(this.x,A,e),this.y=zA(this.y,A,e),this.z=zA(this.z,A,e),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(zA(t,A,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,e){const t=A.x,i=A.y,r=A.z,n=e.x,a=e.y,s=e.z;return this.x=i*s-r*a,this.y=r*n-t*s,this.z=t*a-i*n,this}projectOnVector(A){const e=A.lengthSq();if(e===0)return this.set(0,0,0);const t=A.dot(this)/e;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return Lr.copy(this).projectOnVector(A),this.sub(Lr)}reflect(A){return this.sub(Lr.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const e=Math.sqrt(this.lengthSq()*A.lengthSq());if(e===0)return Math.PI/2;const t=this.dot(A)/e;return Math.acos(zA(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,t){const i=Math.sin(e)*A;return this.x=i*Math.sin(t),this.y=Math.cos(e)*A,this.z=i*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,t){return this.x=A*Math.sin(e),this.y=t,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){const e=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,e*4)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,e*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,e=Math.random()*2-1,t=Math.sqrt(1-e*e);return this.x=t*Math.cos(A),this.y=e,this.z=t*Math.sin(A),this}*[Yn](){yield this.x,yield this.y,yield this.z}};On=z,On.prototype.isVector3=!0;var Lr=new z,ha=new _t,bA=class{constructor(A,e,t,i,r,n,a,s,l){this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,e,t,i,r,n,a,s,l)}set(A,e,t,i,r,n,a,s,l){const o=this.elements;return o[0]=A,o[1]=i,o[2]=a,o[3]=e,o[4]=r,o[5]=s,o[6]=t,o[7]=n,o[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(A,e,t){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){const t=A.elements,i=e.elements,r=this.elements,n=t[0],a=t[3],s=t[6],l=t[1],o=t[4],c=t[7],u=t[2],h=t[5],g=t[8],v=i[0],P=i[3],d=i[6],f=i[1],C=i[4],x=i[7],D=i[2],M=i[5],S=i[8];return r[0]=n*v+a*f+s*D,r[3]=n*P+a*C+s*M,r[6]=n*d+a*x+s*S,r[1]=l*v+o*f+c*D,r[4]=l*P+o*C+c*M,r[7]=l*d+o*x+c*S,r[2]=u*v+h*f+g*D,r[5]=u*P+h*C+g*M,r[8]=u*d+h*x+g*S,this}multiplyScalar(A){const e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],n=A[4],a=A[5],s=A[6],l=A[7],o=A[8];return e*n*o-e*a*l-t*r*o+t*a*s+i*r*l-i*n*s}invert(){const A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],n=A[4],a=A[5],s=A[6],l=A[7],o=A[8],c=o*n-a*l,u=a*s-o*r,h=l*r-n*s,g=e*c+t*u+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return A[0]=c*v,A[1]=(i*l-o*t)*v,A[2]=(a*t-i*n)*v,A[3]=u*v,A[4]=(o*e-i*s)*v,A[5]=(i*r-a*e)*v,A[6]=h*v,A[7]=(t*s-l*e)*v,A[8]=(n*e-t*r)*v,this}transpose(){let A;const e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,t,i,r,n,a){const s=Math.cos(r),l=Math.sin(r);return this.set(t*s,t*l,-t*(s*n+l*a)+n+A,-i*l,i*s,-i*(-l*n+s*a)+a+e,0,0,1),this}scale(A,e){return Vt("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ur.makeScale(A,e)),this}rotate(A){return Vt("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ur.makeRotation(-A)),this}translate(A,e){return Vt("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ur.makeTranslation(A,e)),this}makeTranslation(A,e){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,e,0,0,1),this}makeRotation(A){const e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,t,e,0,0,0,1),this}makeScale(A,e){return this.set(A,0,0,0,e,0,0,0,1),this}equals(A){const e=this.elements,t=A.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<9;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){const t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}};Vn=bA,Vn.prototype.isMatrix3=!0;var Ur=new bA,ua=new bA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fa=new bA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ml(){const A={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(r,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer==="srgb"&&(r.r=et(r.r),r.g=et(r.g),r.b=et(r.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[n].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Wt(r.r),r.g=Wt(r.g),r.b=Wt(r.b))),r},workingToColorSpace:function(r,n){return this.convert(r,this.workingColorSpace,n)},colorSpaceToWorking:function(r,n){return this.convert(r,n,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Yi:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,n=this.workingColorSpace){return r.fromArray(this.spaces[n].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,n,a){return r.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,n){return Vt("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),A.workingToColorSpace(r,n)},toWorkingColorSpace:function(r,n){return Vt("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),A.colorSpaceToWorking(r,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return A.define({[Ir]:{primaries:e,whitePoint:i,transfer:Yi,toXYZ:ua,fromXYZ:fa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:e,whitePoint:i,transfer:ji,toXYZ:ua,fromXYZ:fa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),A}var HA=Ml();function et(A){return A<.04045?A*.0773993808:Math.pow(A*.9478672986+.0521327014,2.4)}function Wt(A){return A<.0031308?A*12.92:1.055*Math.pow(A,.41666)-.055}var Xt,Cl=class{static getDataURL(A,e="image/png"){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let t;if(A instanceof HTMLCanvasElement)t=A;else{Xt===void 0&&(Xt=Ki("canvas")),Xt.width=A.width,Xt.height=A.height;const i=Xt.getContext("2d");A instanceof ImageData?i.putImageData(A,0,0):i.drawImage(A,0,0,A.width,A.height),t=Xt}return t.toDataURL(e)}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const e=Ki("canvas");e.width=A.width,e.height=A.height;const t=e.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const i=t.getImageData(0,0,A.width,A.height),r=i.data;for(let n=0;n<r.length;n++)r[n]=et(r[n]/255)*255;return t.putImageData(i,0,0),e}else if(A.data){const e=A.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(et(e[t]/255)*255):e[t]=et(e[t]);return{data:e,width:A.width,height:A.height}}else return MA("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}},xl=0,Fr=class{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xl++}),this.uuid=kt(),this.data=A,this.dataReady=!0,this.version=0}getSize(A){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?A.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?A.set(e.displayWidth,e.displayHeight,0):e!==null?A.set(e.width,e.height,e.depth||0):A.set(0,0,0),A}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const e=A===void 0||typeof A=="string";if(!e&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let n=0,a=i.length;n<a;n++)i[n].isDataTexture?r.push(zr(i[n].image)):r.push(zr(i[n]))}else r=zr(i);t.url=r}return e||(A.images[this.uuid]=t),t}};function zr(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap?Cl.getDataURL(A):A.data?{data:Array.from(A.data),width:A.width,height:A.height,type:A.data.constructor.name}:(MA("Texture: Unable to serialize Texture."),{})}var _l=0,Nr=new z,Ue=class Mr extends xt{constructor(e=Mr.DEFAULT_IMAGE,t=Mr.DEFAULT_MAPPING,i=At,r=At,n=Ce,a=ki,s=pi,l=dt,o=Mr.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_l++}),this.uuid=kt(),this.name="",this.source=new Fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=a,this.anisotropy=o,this.format=s,this.internalFormat=null,this.type=l,this.offset=new IA(0,0),this.repeat=new IA(1,1),this.center=new IA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nr).x}get height(){return this.source.getSize(Nr).y}get depth(){return this.source.getSize(Nr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){MA(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){MA(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sr:e.x=e.x-Math.floor(e.x);break;case At:e.x=e.x<0?0:1;break;case yr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sr:e.y=e.y-Math.floor(e.y);break;case At:e.y=e.y<0?0:1;break;case yr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null,Ue.DEFAULT_MAPPING=300,Ue.DEFAULT_ANISOTROPY=1,jn=Symbol.iterator;var ie=class{constructor(A=0,e=0,t=0,i=1){this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const e=this.x,t=this.y,i=this.z,r=this.w,n=A.elements;return this.x=n[0]*e+n[4]*t+n[8]*i+n[12]*r,this.y=n[1]*e+n[5]*t+n[9]*i+n[13]*r,this.z=n[2]*e+n[6]*t+n[10]*i+n[14]*r,this.w=n[3]*e+n[7]*t+n[11]*i+n[15]*r,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,t,i,r;const n=A.elements,a=n[0],s=n[4],l=n[8],o=n[1],c=n[5],u=n[9],h=n[2],g=n[6],v=n[10];if(Math.abs(s-o)<.01&&Math.abs(l-h)<.01&&Math.abs(u-g)<.01){if(Math.abs(s+o)<.1&&Math.abs(l+h)<.1&&Math.abs(u+g)<.1&&Math.abs(a+c+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const d=(a+1)/2,f=(c+1)/2,C=(v+1)/2,x=(s+o)/4,D=(l+h)/4,M=(u+g)/4;return d>f&&d>C?d<.01?(t=0,i=.707106781,r=.707106781):(t=Math.sqrt(d),i=x/t,r=D/t):f>C?f<.01?(t=.707106781,i=0,r=.707106781):(i=Math.sqrt(f),t=x/i,r=M/i):C<.01?(t=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),t=D/r,i=M/r),this.set(t,i,r,e),this}let P=Math.sqrt((g-u)*(g-u)+(l-h)*(l-h)+(o-s)*(o-s));return Math.abs(P)<.001&&(P=1),this.x=(g-u)/P,this.y=(l-h)/P,this.z=(o-s)/P,this.w=Math.acos((a+c+v-1)/2),this}setFromMatrixPosition(A){const e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=zA(this.x,A.x,e.x),this.y=zA(this.y,A.y,e.y),this.z=zA(this.z,A.z,e.z),this.w=zA(this.w,A.w,e.w),this}clampScalar(A,e){return this.x=zA(this.x,A,e),this.y=zA(this.y,A,e),this.z=zA(this.z,A,e),this.w=zA(this.w,A,e),this}clampLength(A,e){const t=this.length();return this.divideScalar(t||1).multiplyScalar(zA(t,A,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this.w=A.w+(e.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e){return this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[jn](){yield this.x,yield this.y,yield this.z,yield this.w}};kn=ie,kn.prototype.isVector4=!0;var Sl=class extends xt{constructor(A=1,e=1,t={}){super(),t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},t),this.isRenderTarget=!0,this.width=A,this.height=e,this.depth=t.depth,this.scissor=new ie(0,0,A,e),this.scissorTest=!1,this.viewport=new ie(0,0,A,e),this.textures=[];const i=new Ue({width:A,height:e,depth:t.depth}),r=t.count;for(let n=0;n<r;n++)this.textures[n]=i.clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;this._setTextureOptions(t),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=t.depthTexture,this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture}_setTextureOptions(A={}){const e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};A.mapping!==void 0&&(e.mapping=A.mapping),A.wrapS!==void 0&&(e.wrapS=A.wrapS),A.wrapT!==void 0&&(e.wrapT=A.wrapT),A.wrapR!==void 0&&(e.wrapR=A.wrapR),A.magFilter!==void 0&&(e.magFilter=A.magFilter),A.minFilter!==void 0&&(e.minFilter=A.minFilter),A.format!==void 0&&(e.format=A.format),A.type!==void 0&&(e.type=A.type),A.anisotropy!==void 0&&(e.anisotropy=A.anisotropy),A.colorSpace!==void 0&&(e.colorSpace=A.colorSpace),A.flipY!==void 0&&(e.flipY=A.flipY),A.generateMipmaps!==void 0&&(e.generateMipmaps=A.generateMipmaps),A.internalFormat!==void 0&&(e.internalFormat=A.internalFormat);for(let t=0;t<this.textures.length;t++)this.textures[t].setValues(e)}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}set depthTexture(A){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),A!==null&&(A.renderTarget=this),this._depthTexture=A}get depthTexture(){return this._depthTexture}setSize(A,e,t=1){if(this.width!==A||this.height!==e||this.depth!==t){this.width=A,this.height=e,this.depth=t;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=A,this.textures[i].image.height=e,this.textures[i].image.depth=t,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let e=0,t=A.textures.length;e<t;e++){this.textures[e]=A.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},A.textures[e].image);this.textures[e].source=new Fr(i)}return this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this.multiview=A.multiview,this.useArrayDepthTexture=A.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Sl{constructor(A=1,e=1,t={}){super(A,e,t),this.isWebGLRenderTarget=!0}},da=class extends Ue{constructor(A=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}},yl=class extends Ue{constructor(A=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=At,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ae=class Js{constructor(e,t,i,r,n,a,s,l,o,c,u,h,g,v,P,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,a,s,l,o,c,u,h,g,v,P,d)}set(e,t,i,r,n,a,s,l,o,c,u,h,g,v,P,d){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=n,f[5]=a,f[9]=s,f[13]=l,f[2]=o,f[6]=c,f[10]=u,f[14]=h,f[3]=g,f[7]=v,f[11]=P,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Js().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Yt.setFromMatrixColumn(e,0).length(),n=1/Yt.setFromMatrixColumn(e,1).length(),a=1/Yt.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),o=Math.sin(r),c=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const h=a*c,g=a*u,v=s*c,P=s*u;t[0]=l*c,t[4]=-l*u,t[8]=o,t[1]=g+v*o,t[5]=h-P*o,t[9]=-s*l,t[2]=P-h*o,t[6]=v+g*o,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,g=l*u,v=o*c,P=o*u;t[0]=h+P*s,t[4]=v*s-g,t[8]=a*o,t[1]=a*u,t[5]=a*c,t[9]=-s,t[2]=g*s-v,t[6]=P+h*s,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,g=l*u,v=o*c,P=o*u;t[0]=h-P*s,t[4]=-a*u,t[8]=v+g*s,t[1]=g+v*s,t[5]=a*c,t[9]=P-h*s,t[2]=-a*o,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,g=a*u,v=s*c,P=s*u;t[0]=l*c,t[4]=v*o-g,t[8]=h*o+P,t[1]=l*u,t[5]=P*o+h,t[9]=g*o-v,t[2]=-o,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,g=a*o,v=s*l,P=s*o;t[0]=l*c,t[4]=P-h*u,t[8]=v*u+g,t[1]=u,t[5]=a*c,t[9]=-s*c,t[2]=-o*c,t[6]=g*u+v,t[10]=h-P*u}else if(e.order==="XZY"){const h=a*l,g=a*o,v=s*l,P=s*o;t[0]=l*c,t[4]=-u,t[8]=o*c,t[1]=h*u+P,t[5]=a*c,t[9]=g*u-v,t[2]=v*u-g,t[6]=s*c,t[10]=P*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ql,e,Tl)}lookAt(e,t,i){const r=this.elements;return _e.subVectors(e,t),_e.lengthSq()===0&&(_e.z=1),_e.normalize(),gt.crossVectors(i,_e),gt.lengthSq()===0&&(Math.abs(i.z)===1?_e.x+=1e-4:_e.z+=1e-4,_e.normalize(),gt.crossVectors(i,_e)),gt.normalize(),Ji.crossVectors(_e,gt),r[0]=gt.x,r[4]=Ji.x,r[8]=_e.x,r[1]=gt.y,r[5]=Ji.y,r[9]=_e.y,r[2]=gt.z,r[6]=Ji.z,r[10]=_e.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,a=i[0],s=i[4],l=i[8],o=i[12],c=i[1],u=i[5],h=i[9],g=i[13],v=i[2],P=i[6],d=i[10],f=i[14],C=i[3],x=i[7],D=i[11],M=i[15],S=r[0],y=r[4],m=r[8],B=r[12],W=r[1],_=r[5],V=r[9],G=r[13],k=r[2],N=r[6],X=r[10],L=r[14],J=r[3],AA=r[7],eA=r[11],hA=r[15];return n[0]=a*S+s*W+l*k+o*J,n[4]=a*y+s*_+l*N+o*AA,n[8]=a*m+s*V+l*X+o*eA,n[12]=a*B+s*G+l*L+o*hA,n[1]=c*S+u*W+h*k+g*J,n[5]=c*y+u*_+h*N+g*AA,n[9]=c*m+u*V+h*X+g*eA,n[13]=c*B+u*G+h*L+g*hA,n[2]=v*S+P*W+d*k+f*J,n[6]=v*y+P*_+d*N+f*AA,n[10]=v*m+P*V+d*X+f*eA,n[14]=v*B+P*G+d*L+f*hA,n[3]=C*S+x*W+D*k+M*J,n[7]=C*y+x*_+D*N+M*AA,n[11]=C*m+x*V+D*X+M*eA,n[15]=C*B+x*G+D*L+M*hA,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],a=e[1],s=e[5],l=e[9],o=e[13],c=e[2],u=e[6],h=e[10],g=e[14],v=e[3],P=e[7],d=e[11],f=e[15],C=l*g-o*h,x=s*g-o*u,D=s*h-l*u,M=a*g-o*c,S=a*h-l*c,y=a*u-s*c;return t*(P*C-d*x+f*D)-i*(v*C-d*M+f*S)+r*(v*x-P*M+f*y)-n*(v*D-P*S+d*y)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[1],a=e[5],s=e[9],l=e[2],o=e[6],c=e[10];return t*(a*c-s*o)-i*(n*c-s*l)+r*(n*o-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],s=e[5],l=e[6],o=e[7],c=e[8],u=e[9],h=e[10],g=e[11],v=e[12],P=e[13],d=e[14],f=e[15],C=t*s-i*a,x=t*l-r*a,D=t*o-n*a,M=i*l-r*s,S=i*o-n*s,y=r*o-n*l,m=c*P-u*v,B=c*d-h*v,W=c*f-g*v,_=u*d-h*P,V=u*f-g*P,G=h*f-g*d,k=C*G-x*V+D*_+M*W-S*B+y*m;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=(s*G-l*V+o*_)*N,e[1]=(r*V-i*G-n*_)*N,e[2]=(P*y-d*S+f*M)*N,e[3]=(h*S-u*y-g*M)*N,e[4]=(l*W-a*G-o*B)*N,e[5]=(t*G-r*W+n*B)*N,e[6]=(d*D-v*y-f*x)*N,e[7]=(c*y-h*D+g*x)*N,e[8]=(a*V-s*W+o*m)*N,e[9]=(i*W-t*V-n*m)*N,e[10]=(v*S-P*D+f*C)*N,e[11]=(u*D-c*S-g*C)*N,e[12]=(s*B-a*_-l*m)*N,e[13]=(t*_-i*B+r*m)*N,e[14]=(P*x-v*M-d*C)*N,e[15]=(c*M-u*x+h*C)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,a=e.x,s=e.y,l=e.z,o=n*a,c=n*s;return this.set(o*a+i,o*s-r*l,o*l+r*s,0,o*s+r*l,c*s+i,c*l-r*a,0,o*l-r*s,c*l+r*a,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,a){return this.set(1,i,n,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,a=t._y,s=t._z,l=t._w,o=n+n,c=a+a,u=s+s,h=n*o,g=n*c,v=n*u,P=a*c,d=a*u,f=s*u,C=l*o,x=l*c,D=l*u,M=i.x,S=i.y,y=i.z;return r[0]=(1-(P+f))*M,r[1]=(g+D)*M,r[2]=(v-x)*M,r[3]=0,r[4]=(g-D)*S,r[5]=(1-(h+f))*S,r[6]=(d+C)*S,r[7]=0,r[8]=(v+x)*y,r[9]=(d-C)*y,r[10]=(1-(h+P))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const n=this.determinantAffine();if(n===0)return i.set(1,1,1),t.identity(),this;let a=Yt.set(r[0],r[1],r[2]).length();const s=Yt.set(r[4],r[5],r[6]).length(),l=Yt.set(r[8],r[9],r[10]).length();n<0&&(a=-a),Oe.copy(this);const o=1/a,c=1/s,u=1/l;return Oe.elements[0]*=o,Oe.elements[1]*=o,Oe.elements[2]*=o,Oe.elements[4]*=c,Oe.elements[5]*=c,Oe.elements[6]*=c,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,t.setFromRotationMatrix(Oe),i.x=a,i.y=s,i.z=l,this}makePerspective(e,t,i,r,n,a,s=Ht,l=!1){const o=this.elements,c=2*n/(t-e),u=2*n/(i-r),h=(t+e)/(t-e),g=(i+r)/(i-r);let v,P;if(l)v=n/(a-n),P=a*n/(a-n);else if(s===2e3)v=-(a+n)/(a-n),P=-2*a*n/(a-n);else if(s===2001)v=-a/(a-n),P=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=u,o[9]=g,o[13]=0,o[2]=0,o[6]=0,o[10]=v,o[14]=P,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,n,a,s=Ht,l=!1){const o=this.elements,c=2/(t-e),u=2/(i-r),h=-(t+e)/(t-e),g=-(i+r)/(i-r);let v,P;if(l)v=1/(a-n),P=a/(a-n);else if(s===2e3)v=-2/(a-n),P=-(a+n)/(a-n);else if(s===2001)v=-1/(a-n),P=-n/(a-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return o[0]=c,o[4]=0,o[8]=0,o[12]=h,o[1]=0,o[5]=u,o[9]=0,o[13]=g,o[2]=0,o[6]=0,o[10]=v,o[14]=P,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Gn=ae,Gn.prototype.isMatrix4=!0;var Yt=new z,Oe=new ae,Ql=new z(0,0,0),Tl=new z(1,1,1),gt=new z,Ji=new z,_e=new z,ga=new ae,pa=new _t,Di=class qs{constructor(e=0,t=0,i=0,r=qs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],a=r[4],s=r[8],l=r[1],o=r[5],c=r[9],u=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(zA(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,g),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(h,o),this._z=0);break;case"YXZ":this._x=Math.asin(-zA(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(zA(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-zA(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(zA(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,o),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-zA(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,o),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-c,g),this._y=0);break;default:MA("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ga,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pa.setFromEuler(this),this.setFromQuaternion(pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var ma=class{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}},Il=0,va=new z,jt=new _t,tt=new ae,qi=new z,Ei=new z,bl=new z,Rl=new _t,wa=new z(1,0,0),Pa=new z(0,1,0),Da=new z(0,0,1),Ea={type:"added"},Ll={type:"removed"},Kt={type:"childadded",child:null},Hr={type:"childremoved",child:null},Se=class Cr extends xt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=kt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cr.DEFAULT_UP.clone();const e=new z,t=new Di,i=new _t,r=new z(1,1,1);function n(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ae},normalMatrix:{value:new bA}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Cr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jt.setFromAxisAngle(e,t),this.quaternion.multiply(jt),this}rotateOnWorldAxis(e,t){return jt.setFromAxisAngle(e,t),this.quaternion.premultiply(jt),this}rotateX(e){return this.rotateOnAxis(wa,e)}rotateY(e){return this.rotateOnAxis(Pa,e)}rotateZ(e){return this.rotateOnAxis(Da,e)}translateOnAxis(e,t){return va.copy(e).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wa,e)}translateY(e){return this.translateOnAxis(Pa,e)}translateZ(e){return this.translateOnAxis(Da,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qi.copy(e):qi.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tt.lookAt(Ei,qi,this.up):tt.lookAt(qi,Ei,this.up),this.quaternion.setFromRotationMatrix(tt),r&&(tt.extractRotation(r.matrixWorld),jt.setFromRotationMatrix(tt),this.quaternion.premultiply(jt.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yA("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ea),Kt.child=e,this.dispatchEvent(Kt),Kt.child=null):yA("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ll),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tt.multiply(e.parent.matrixWorld)),e.applyMatrix4(tt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ea),Kt.child=e,this.dispatchEvent(Kt),Kt.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let n=0,a=r.length;n<a;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,bl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,Rl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,n=this.matrix.elements;n[12]+=t-n[0]*t-n[4]*i-n[8]*r,n[13]+=i-n[1]*t-n[5]*i-n[9]*r,n[14]+=r-n[2]*t-n[6]*i-n[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(s=>({...s})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function n(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let o=0,c=l.length;o<c;o++){const u=l[o];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,o=this.material.length;l<o;l++)s.push(n(e.materials,this.material[l]));r.material=s}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(n(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),o=a(e.textures),c=a(e.images),u=a(e.shapes),h=a(e.skeletons),g=a(e.animations),v=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),o.length>0&&(i.textures=o),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(s){const l=[];for(const o in s){const c=s[o];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};Se.DEFAULT_UP=new z(0,1,0),Se.DEFAULT_MATRIX_AUTO_UPDATE=!0,Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zi=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ul={type:"move"},Or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const e=this._hand;if(e)for(const t of A.hand.values())this._getHandJoint(e,t)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,e,t){let i=null,r=null,n=null;const a=this._targetRay,s=this._grip,l=this._hand;if(A&&e.session.visibilityState!=="visible-blurred"){if(l&&A.hand){n=!0;for(const v of A.hand.values()){const P=e.getJointPose(v,t),d=this._getHandJoint(l,v);P!==null&&(d.matrix.fromArray(P.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=P.radius),d.visible=P!==null}const o=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],u=o.position.distanceTo(c.position),h=.02,g=.005;l.inputState.pinching&&u>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!l.inputState.pinching&&u<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else s!==null&&A.gripSpace&&(r=e.getPose(A.gripSpace,t),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:"gripUpdated",data:A,target:this})));a!==null&&(i=e.getPose(A.targetRaySpace,t),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ul)))}return a!==null&&(a.visible=i!==null),s!==null&&(s.visible=r!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(A,e){if(A.joints[e.jointName]===void 0){const t=new Zi;t.matrixAutoUpdate=!1,t.visible=!1,A.joints[e.jointName]=t,A.add(t)}return A.joints[e.jointName]}},Ba={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pt={h:0,s:0,l:0},$i={h:0,s:0,l:0};function Vr(A,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?A+(e-A)*6*t:t<1/2?e:t<2/3?A+(e-A)*6*(2/3-t):A}var OA=class{constructor(A,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,e,t)}set(A,e,t){if(e===void 0&&t===void 0){const i=A;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(A,e,t);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=xe){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,HA.colorSpaceToWorking(this,e),this}setRGB(A,e,t,i=HA.workingColorSpace){return this.r=A,this.g=e,this.b=t,HA.colorSpaceToWorking(this,i),this}setHSL(A,e,t,i=HA.workingColorSpace){if(A=Rr(A,1),e=zA(e,0,1),t=zA(t,0,1),e===0)this.r=this.g=this.b=t;else{const r=t<=.5?t*(1+e):t+e-t*e,n=2*t-r;this.r=Vr(n,r,A+1/3),this.g=Vr(n,r,A),this.b=Vr(n,r,A-1/3)}return HA.colorSpaceToWorking(this,i),this}setStyle(A,e=xe){function t(r){r!==void 0&&parseFloat(r)<1&&MA("Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(A)){let r;const n=i[1],a=i[2];switch(n){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return t(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:MA("Color: Unknown color model "+A)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const r=i[1],n=r.length;if(n===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(n===6)return this.setHex(parseInt(r,16),e);MA("Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,e);return this}setColorName(A,e=xe){const t=Ba[A.toLowerCase()];return t!==void 0?this.setHex(t,e):MA("Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=et(A.r),this.g=et(A.g),this.b=et(A.b),this}copyLinearToSRGB(A){return this.r=Wt(A.r),this.g=Wt(A.g),this.b=Wt(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=xe){return HA.workingToColorSpace(we.copy(this),A),Math.round(zA(we.r*255,0,255))*65536+Math.round(zA(we.g*255,0,255))*256+Math.round(zA(we.b*255,0,255))}getHexString(A=xe){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=HA.workingColorSpace){HA.workingToColorSpace(we.copy(this),e);const t=we.r,i=we.g,r=we.b,n=Math.max(t,i,r),a=Math.min(t,i,r);let s,l;const o=(a+n)/2;if(a===n)s=0,l=0;else{const c=n-a;switch(l=o<=.5?c/(n+a):c/(2-n-a),n){case t:s=(i-r)/c+(i<r?6:0);break;case i:s=(r-t)/c+2;break;case r:s=(t-i)/c+4;break}s/=6}return A.h=s,A.s=l,A.l=o,A}getRGB(A,e=HA.workingColorSpace){return HA.workingToColorSpace(we.copy(this),e),A.r=we.r,A.g=we.g,A.b=we.b,A}getStyle(A=xe){HA.workingToColorSpace(we.copy(this),A);const e=we.r,t=we.g,i=we.b;return A!=="srgb"?`color(${A} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(A,e,t){return this.getHSL(pt),this.setHSL(pt.h+A,pt.s+e,pt.l+t)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,t){return this.r=A.r+(e.r-A.r)*t,this.g=A.g+(e.g-A.g)*t,this.b=A.b+(e.b-A.b)*t,this}lerpHSL(A,e){this.getHSL(pt),A.getHSL($i);const t=Pi(pt.h,$i.h,e),i=Pi(pt.s,$i.s,e),r=Pi(pt.l,$i.l,e);return this.setHSL(t,i,r),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const e=this.r,t=this.g,i=this.b,r=A.elements;return this.r=r[0]*e+r[3]*t+r[6]*i,this.g=r[1]*e+r[4]*t+r[7]*i,this.b=r[2]*e+r[5]*t+r[8]*i,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new OA;OA.NAMES=Ba;var Fl=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,e){return super.copy(A,e),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const e=super.toJSON(A);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ve=new z,it=new z,kr=new z,rt=new z,Jt=new z,qt=new z,Ma=new z,Gr=new z,Wr=new z,Xr=new z,Yr=new ie,jr=new ie,Kr=new ie,Bi=class fi{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ve.subVectors(e,t),r.cross(Ve);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Ve.subVectors(r,t),it.subVectors(i,t),kr.subVectors(e,t);const a=Ve.dot(Ve),s=Ve.dot(it),l=Ve.dot(kr),o=it.dot(it),c=it.dot(kr),u=a*o-s*s;if(u===0)return n.set(0,0,0),null;const h=1/u,g=(o*l-s*c)*h,v=(a*c-s*l)*h;return n.set(1-g-v,v,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,rt)===null?!1:rt.x>=0&&rt.y>=0&&rt.x+rt.y<=1}static getInterpolation(e,t,i,r,n,a,s,l){return this.getBarycoord(e,t,i,r,rt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,rt.x),l.addScaledVector(a,rt.y),l.addScaledVector(s,rt.z),l)}static getInterpolatedAttribute(e,t,i,r,n,a){return Yr.setScalar(0),jr.setScalar(0),Kr.setScalar(0),Yr.fromBufferAttribute(e,t),jr.fromBufferAttribute(e,i),Kr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yr,n.x),a.addScaledVector(jr,n.y),a.addScaledVector(Kr,n.z),a}static isFrontFacing(e,t,i,r){return Ve.subVectors(i,t),it.subVectors(e,t),Ve.cross(it).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ve.subVectors(this.c,this.b),it.subVectors(this.a,this.b),Ve.cross(it).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let a,s;Jt.subVectors(r,i),qt.subVectors(n,i),Gr.subVectors(e,i);const l=Jt.dot(Gr),o=qt.dot(Gr);if(l<=0&&o<=0)return t.copy(i);Wr.subVectors(e,r);const c=Jt.dot(Wr),u=qt.dot(Wr);if(c>=0&&u<=c)return t.copy(r);const h=l*u-c*o;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Jt,a);Xr.subVectors(e,n);const g=Jt.dot(Xr),v=qt.dot(Xr);if(v>=0&&g<=v)return t.copy(n);const P=g*o-l*v;if(P<=0&&o>=0&&v<=0)return s=o/(o-v),t.copy(i).addScaledVector(qt,s);const d=c*v-g*u;if(d<=0&&u-c>=0&&g-v>=0)return Ma.subVectors(n,r),s=(u-c)/(u-c+(g-v)),t.copy(r).addScaledVector(Ma,s);const f=1/(d+P+h);return a=P*f,s=h*f,t.copy(i).addScaledVector(Jt,a).addScaledVector(qt,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mi=class{constructor(A=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e+=3)this.expandByPoint(ke.fromArray(A,e));return this}setFromBufferAttribute(A){this.makeEmpty();for(let e=0,t=A.count;e<t;e++)this.expandByPoint(ke.fromBufferAttribute(A,e));return this}setFromPoints(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){const t=ke.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){A.updateWorldMatrix(!1,!1);const t=A.geometry;if(t!==void 0){const r=t.getAttribute("position");if(e===!0&&r!==void 0&&A.isInstancedMesh!==!0)for(let n=0,a=r.count;n<a;n++)A.isMesh===!0?A.getVertexPosition(n,ke):ke.fromBufferAttribute(r,n),ke.applyMatrix4(A.matrixWorld),this.expandByPoint(ke);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),Ar.copy(A.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)),Ar.applyMatrix4(A.matrixWorld),this.union(Ar)}const i=A.children;for(let r=0,n=i.length;r<n;r++)this.expandByObject(i[r],e);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,ke),ke.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,t;return A.normal.x>0?(e=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),e<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(Ci),er.subVectors(this.max,Ci),Zt.subVectors(A.a,Ci),$t.subVectors(A.b,Ci),Ai.subVectors(A.c,Ci),mt.subVectors($t,Zt),vt.subVectors(Ai,$t),St.subVectors(Zt,Ai);let e=[0,-mt.z,mt.y,0,-vt.z,vt.y,0,-St.z,St.y,mt.z,0,-mt.x,vt.z,0,-vt.x,St.z,0,-St.x,-mt.y,mt.x,0,-vt.y,vt.x,0,-St.y,St.x,0];return!Jr(e,Zt,$t,Ai,er)||(e=[1,0,0,0,1,0,0,0,1],!Jr(e,Zt,$t,Ai,er))?!1:(tr.crossVectors(mt,vt),e=[tr.x,tr.y,tr.z],Jr(e,Zt,$t,Ai,er))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,ke).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(ke).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(nt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),nt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),nt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),nt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),nt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),nt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),nt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),nt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(nt),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(A){return this.min.fromArray(A.min),this.max.fromArray(A.max),this}},nt=[new z,new z,new z,new z,new z,new z,new z,new z],ke=new z,Ar=new Mi,Zt=new z,$t=new z,Ai=new z,mt=new z,vt=new z,St=new z,Ci=new z,er=new z,tr=new z,yt=new z;function Jr(A,e,t,i,r){for(let n=0,a=A.length-3;n<=a;n+=3){yt.fromArray(A,n);const s=r.x*Math.abs(yt.x)+r.y*Math.abs(yt.y)+r.z*Math.abs(yt.z),l=e.dot(yt),o=t.dot(yt),c=i.dot(yt);if(Math.max(-Math.max(l,o,c),Math.min(l,o,c))>s)return!1}return!0}var se=new z,ir=new IA,zl=0,je=class extends xt{constructor(A,e,t=!1){if(super(),Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zl++}),this.name="",this.array=A,this.itemSize=e,this.count=A!==void 0?A.length/e:0,this.normalized=t,this.usage=tl,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,e){this.updateRanges.push({start:A,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,e,t){A*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[A+i]=e.array[t+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(A),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(A),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(A){for(let e=0,t=this.count;e<t;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(A),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(A){for(let e=0,t=this.count;e<t;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(A),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(A){for(let e=0,t=this.count;e<t;e++)se.fromBufferAttribute(this,e),se.transformDirection(A),this.setXYZ(e,se.x,se.y,se.z);return this}set(A,e=0){return this.array.set(A,e),this}getComponent(A,e){let t=this.array[A*this.itemSize+e];return this.normalized&&(t=Gt(t,this.array)),t}setComponent(A,e,t){return this.normalized&&(t=Ee(t,this.array)),this.array[A*this.itemSize+e]=t,this}getX(A){let e=this.array[A*this.itemSize];return this.normalized&&(e=Gt(e,this.array)),e}setX(A,e){return this.normalized&&(e=Ee(e,this.array)),this.array[A*this.itemSize]=e,this}getY(A){let e=this.array[A*this.itemSize+1];return this.normalized&&(e=Gt(e,this.array)),e}setY(A,e){return this.normalized&&(e=Ee(e,this.array)),this.array[A*this.itemSize+1]=e,this}getZ(A){let e=this.array[A*this.itemSize+2];return this.normalized&&(e=Gt(e,this.array)),e}setZ(A,e){return this.normalized&&(e=Ee(e,this.array)),this.array[A*this.itemSize+2]=e,this}getW(A){let e=this.array[A*this.itemSize+3];return this.normalized&&(e=Gt(e,this.array)),e}setW(A,e){return this.normalized&&(e=Ee(e,this.array)),this.array[A*this.itemSize+3]=e,this}setXY(A,e,t){return A*=this.itemSize,this.normalized&&(e=Ee(e,this.array),t=Ee(t,this.array)),this.array[A+0]=e,this.array[A+1]=t,this}setXYZ(A,e,t,i){return A*=this.itemSize,this.normalized&&(e=Ee(e,this.array),t=Ee(t,this.array),i=Ee(i,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this}setXYZW(A,e,t,i,r){return A*=this.itemSize,this.normalized&&(e=Ee(e,this.array),t=Ee(t,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==35044&&(A.usage=this.usage),A}dispose(){this.dispatchEvent({type:"dispose"})}},Ca=class extends je{constructor(A,e,t){super(new Uint16Array(A),e,t)}},xa=class extends je{constructor(A,e,t){super(new Uint32Array(A),e,t)}},at=class extends je{constructor(A,e,t){super(new Float32Array(A),e,t)}},Nl=new Mi,xi=new z,qr=new z,Zr=class{constructor(A=new z,e=-1){this.isSphere=!0,this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){const t=this.center;e!==void 0?t.copy(e):Nl.setFromPoints(A).getCenter(t);let i=0;for(let r=0,n=A.length;r<n;r++)i=Math.max(i,t.distanceToSquared(A[r]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){const t=this.center.distanceToSquared(A);return e.copy(A),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;xi.subVectors(A,this.center);const e=xi.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(xi,i/t),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(qr.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(xi.copy(A.center).add(qr)),this.expandByPoint(xi.copy(A.center).sub(qr))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(A){return this.radius=A.radius,this.center.fromArray(A.center),this}},Hl=0,Fe=new ae,$r=new Se,ei=new z,ye=new Mi,_i=new Mi,fe=new z,Qt=class Zs extends xt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=kt(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(il(e)?xa:Ca)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new bA().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fe.makeRotationFromQuaternion(e),this.applyMatrix4(Fe),this}rotateX(e){return Fe.makeRotationX(e),this.applyMatrix4(Fe),this}rotateY(e){return Fe.makeRotationY(e),this.applyMatrix4(Fe),this}rotateZ(e){return Fe.makeRotationZ(e),this.applyMatrix4(Fe),this}translate(e,t,i){return Fe.makeTranslation(e,t,i),this.applyMatrix4(Fe),this}scale(e,t,i){return Fe.makeScale(e,t,i),this.applyMatrix4(Fe),this}lookAt(e){return $r.lookAt(e),$r.updateMatrix(),this.applyMatrix4($r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,n=e.length;r<n;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&MA("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yA("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];ye.setFromBufferAttribute(n),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yA('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yA("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(ye.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(ye.min,_i.min),ye.expandByPoint(fe),fe.addVectors(ye.max,_i.max),ye.expandByPoint(fe)):(ye.expandByPoint(_i.min),ye.expandByPoint(_i.max))}ye.getCenter(i);let r=0;for(let n=0,a=e.count;n<a;n++)fe.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(fe));if(t)for(let n=0,a=t.length;n<a;n++){const s=t[n],l=this.morphTargetsRelative;for(let o=0,c=s.count;o<c;o++)fe.fromBufferAttribute(s,o),l&&(ei.fromBufferAttribute(e,o),fe.add(ei)),r=Math.max(r,i.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&yA('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yA("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,n=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new je(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const s=[],l=[];for(let m=0;m<i.count;m++)s[m]=new z,l[m]=new z;const o=new z,c=new z,u=new z,h=new IA,g=new IA,v=new IA,P=new z,d=new z;function f(m,B,W){o.fromBufferAttribute(i,m),c.fromBufferAttribute(i,B),u.fromBufferAttribute(i,W),h.fromBufferAttribute(n,m),g.fromBufferAttribute(n,B),v.fromBufferAttribute(n,W),c.sub(o),u.sub(o),g.sub(h),v.sub(h);const _=1/(g.x*v.y-v.x*g.y);isFinite(_)&&(P.copy(c).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(_),d.copy(u).multiplyScalar(g.x).addScaledVector(c,-v.x).multiplyScalar(_),s[m].add(P),s[B].add(P),s[W].add(P),l[m].add(d),l[B].add(d),l[W].add(d))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let m=0,B=C.length;m<B;++m){const W=C[m],_=W.start,V=W.count;for(let G=_,k=_+V;G<k;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new z,D=new z,M=new z,S=new z;function y(m){M.fromBufferAttribute(r,m),S.copy(M);const B=s[m];x.copy(B),x.sub(M.multiplyScalar(M.dot(B))).normalize(),D.crossVectors(S,B);const W=D.dot(l[m])<0?-1:1;a.setXYZW(m,x.x,x.y,x.z,W)}for(let m=0,B=C.length;m<B;++m){const W=C[m],_=W.start,V=W.count;for(let G=_,k=_+V;G<k;G+=3)y(e.getX(G+0)),y(e.getX(G+1)),y(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new je(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new z,n=new z,a=new z,s=new z,l=new z,o=new z,c=new z,u=new z;if(e)for(let h=0,g=e.count;h<g;h+=3){const v=e.getX(h+0),P=e.getX(h+1),d=e.getX(h+2);r.fromBufferAttribute(t,v),n.fromBufferAttribute(t,P),a.fromBufferAttribute(t,d),c.subVectors(a,n),u.subVectors(r,n),c.cross(u),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,P),o.fromBufferAttribute(i,d),s.add(c),l.add(c),o.add(c),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(P,l.x,l.y,l.z),i.setXYZ(d,o.x,o.y,o.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,n),u.subVectors(r,n),c.cross(u),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fe.fromBufferAttribute(e,t),fe.normalize(),e.setXYZ(t,fe.x,fe.y,fe.z)}toNonIndexed(){function e(s,l){const o=s.array,c=s.itemSize,u=s.normalized,h=new o.constructor(l.length*c);let g=0,v=0;for(let P=0,d=l.length;P<d;P++){s.isInterleavedBufferAttribute?g=l[P]*s.data.stride+s.offset:g=l[P]*c;for(let f=0;f<c;f++)h[v++]=o[g++]}return new je(h,c,u)}if(this.index===null)return MA("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zs,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],o=e(l,i);t.setAttribute(s,o)}const n=this.morphAttributes;for(const s in n){const l=[],o=n[s];for(let c=0,u=o.length;c<u;c++){const h=o[c],g=e(h,i);l.push(g)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const o=a[s];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const o in l)l[o]!==void 0&&(e[o]=l[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const o=i[l];e.data.attributes[l]=o.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const o=this.morphAttributes[l],c=[];for(let u=0,h=o.length;u<h;u++){const g=o[u];c.push(g.toJSON(e.data))}c.length>0&&(r[l]=c,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const o in r){const c=r[o];this.setAttribute(o,c.clone(t))}const n=e.morphAttributes;for(const o in n){const c=[],u=n[o];for(let h=0,g=u.length;h<g;h++)c.push(u[h].clone(t));this.morphAttributes[o]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];this.addGroup(u.start,u.count,u.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ol=0,Si=class extends xt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=kt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new OA(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const e in A){const t=A[e];if(t===void 0){MA(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){MA(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector2&&t&&t.isVector2||i&&i.isEuler&&t&&t.isEuler||i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(A){const e=A===void 0||typeof A=="string";e&&(A={textures:{},images:{}});const t={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(t.sheenColorMap=this.sheenColorMap.toJSON(A).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(t.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(A).uuid),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(t.blending=this.blending),this.side!==0&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==204&&(t.blendSrc=this.blendSrc),this.blendDst!==205&&(t.blendDst=this.blendDst),this.blendEquation!==100&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(t.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.allowOverride===!1&&(t.allowOverride=!1),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(r){const n=[];for(const a in r){const s=r[a];delete s.metadata,n.push(s)}return n}if(e){const r=i(A.textures),n=i(A.images);r.length>0&&(t.textures=r),n.length>0&&(t.images=n)}return t}fromJSON(A,e){if(A.uuid!==void 0&&(this.uuid=A.uuid),A.name!==void 0&&(this.name=A.name),A.color!==void 0&&this.color!==void 0&&this.color.setHex(A.color),A.roughness!==void 0&&(this.roughness=A.roughness),A.metalness!==void 0&&(this.metalness=A.metalness),A.sheen!==void 0&&(this.sheen=A.sheen),A.sheenColor!==void 0&&(this.sheenColor=new OA().setHex(A.sheenColor)),A.sheenRoughness!==void 0&&(this.sheenRoughness=A.sheenRoughness),A.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(A.emissive),A.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(A.specular),A.specularIntensity!==void 0&&(this.specularIntensity=A.specularIntensity),A.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(A.specularColor),A.shininess!==void 0&&(this.shininess=A.shininess),A.clearcoat!==void 0&&(this.clearcoat=A.clearcoat),A.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=A.clearcoatRoughness),A.dispersion!==void 0&&(this.dispersion=A.dispersion),A.iridescence!==void 0&&(this.iridescence=A.iridescence),A.iridescenceIOR!==void 0&&(this.iridescenceIOR=A.iridescenceIOR),A.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=A.iridescenceThicknessRange),A.transmission!==void 0&&(this.transmission=A.transmission),A.thickness!==void 0&&(this.thickness=A.thickness),A.attenuationDistance!==void 0&&(this.attenuationDistance=A.attenuationDistance),A.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(A.attenuationColor),A.anisotropy!==void 0&&(this.anisotropy=A.anisotropy),A.anisotropyRotation!==void 0&&(this.anisotropyRotation=A.anisotropyRotation),A.fog!==void 0&&(this.fog=A.fog),A.flatShading!==void 0&&(this.flatShading=A.flatShading),A.blending!==void 0&&(this.blending=A.blending),A.combine!==void 0&&(this.combine=A.combine),A.side!==void 0&&(this.side=A.side),A.shadowSide!==void 0&&(this.shadowSide=A.shadowSide),A.opacity!==void 0&&(this.opacity=A.opacity),A.transparent!==void 0&&(this.transparent=A.transparent),A.alphaTest!==void 0&&(this.alphaTest=A.alphaTest),A.alphaHash!==void 0&&(this.alphaHash=A.alphaHash),A.depthFunc!==void 0&&(this.depthFunc=A.depthFunc),A.depthTest!==void 0&&(this.depthTest=A.depthTest),A.depthWrite!==void 0&&(this.depthWrite=A.depthWrite),A.colorWrite!==void 0&&(this.colorWrite=A.colorWrite),A.blendSrc!==void 0&&(this.blendSrc=A.blendSrc),A.blendDst!==void 0&&(this.blendDst=A.blendDst),A.blendEquation!==void 0&&(this.blendEquation=A.blendEquation),A.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=A.blendSrcAlpha),A.blendDstAlpha!==void 0&&(this.blendDstAlpha=A.blendDstAlpha),A.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=A.blendEquationAlpha),A.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(A.blendColor),A.blendAlpha!==void 0&&(this.blendAlpha=A.blendAlpha),A.stencilWriteMask!==void 0&&(this.stencilWriteMask=A.stencilWriteMask),A.stencilFunc!==void 0&&(this.stencilFunc=A.stencilFunc),A.stencilRef!==void 0&&(this.stencilRef=A.stencilRef),A.stencilFuncMask!==void 0&&(this.stencilFuncMask=A.stencilFuncMask),A.stencilFail!==void 0&&(this.stencilFail=A.stencilFail),A.stencilZFail!==void 0&&(this.stencilZFail=A.stencilZFail),A.stencilZPass!==void 0&&(this.stencilZPass=A.stencilZPass),A.stencilWrite!==void 0&&(this.stencilWrite=A.stencilWrite),A.wireframe!==void 0&&(this.wireframe=A.wireframe),A.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=A.wireframeLinewidth),A.wireframeLinecap!==void 0&&(this.wireframeLinecap=A.wireframeLinecap),A.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=A.wireframeLinejoin),A.rotation!==void 0&&(this.rotation=A.rotation),A.linewidth!==void 0&&(this.linewidth=A.linewidth),A.dashSize!==void 0&&(this.dashSize=A.dashSize),A.gapSize!==void 0&&(this.gapSize=A.gapSize),A.scale!==void 0&&(this.scale=A.scale),A.polygonOffset!==void 0&&(this.polygonOffset=A.polygonOffset),A.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=A.polygonOffsetFactor),A.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=A.polygonOffsetUnits),A.dithering!==void 0&&(this.dithering=A.dithering),A.alphaToCoverage!==void 0&&(this.alphaToCoverage=A.alphaToCoverage),A.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=A.premultipliedAlpha),A.forceSinglePass!==void 0&&(this.forceSinglePass=A.forceSinglePass),A.allowOverride!==void 0&&(this.allowOverride=A.allowOverride),A.visible!==void 0&&(this.visible=A.visible),A.toneMapped!==void 0&&(this.toneMapped=A.toneMapped),A.userData!==void 0&&(this.userData=A.userData),A.vertexColors!==void 0&&(typeof A.vertexColors=="number"?this.vertexColors=A.vertexColors>0:this.vertexColors=A.vertexColors),A.size!==void 0&&(this.size=A.size),A.sizeAttenuation!==void 0&&(this.sizeAttenuation=A.sizeAttenuation),A.map!==void 0&&(this.map=e[A.map]||null),A.matcap!==void 0&&(this.matcap=e[A.matcap]||null),A.alphaMap!==void 0&&(this.alphaMap=e[A.alphaMap]||null),A.bumpMap!==void 0&&(this.bumpMap=e[A.bumpMap]||null),A.bumpScale!==void 0&&(this.bumpScale=A.bumpScale),A.normalMap!==void 0&&(this.normalMap=e[A.normalMap]||null),A.normalMapType!==void 0&&(this.normalMapType=A.normalMapType),A.normalScale!==void 0){let t=A.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new IA().fromArray(t)}return A.displacementMap!==void 0&&(this.displacementMap=e[A.displacementMap]||null),A.displacementScale!==void 0&&(this.displacementScale=A.displacementScale),A.displacementBias!==void 0&&(this.displacementBias=A.displacementBias),A.roughnessMap!==void 0&&(this.roughnessMap=e[A.roughnessMap]||null),A.metalnessMap!==void 0&&(this.metalnessMap=e[A.metalnessMap]||null),A.emissiveMap!==void 0&&(this.emissiveMap=e[A.emissiveMap]||null),A.emissiveIntensity!==void 0&&(this.emissiveIntensity=A.emissiveIntensity),A.specularMap!==void 0&&(this.specularMap=e[A.specularMap]||null),A.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[A.specularIntensityMap]||null),A.specularColorMap!==void 0&&(this.specularColorMap=e[A.specularColorMap]||null),A.envMap!==void 0&&(this.envMap=e[A.envMap]||null),A.envMapRotation!==void 0&&this.envMapRotation.fromArray(A.envMapRotation),A.envMapIntensity!==void 0&&(this.envMapIntensity=A.envMapIntensity),A.reflectivity!==void 0&&(this.reflectivity=A.reflectivity),A.refractionRatio!==void 0&&(this.refractionRatio=A.refractionRatio),A.lightMap!==void 0&&(this.lightMap=e[A.lightMap]||null),A.lightMapIntensity!==void 0&&(this.lightMapIntensity=A.lightMapIntensity),A.aoMap!==void 0&&(this.aoMap=e[A.aoMap]||null),A.aoMapIntensity!==void 0&&(this.aoMapIntensity=A.aoMapIntensity),A.gradientMap!==void 0&&(this.gradientMap=e[A.gradientMap]||null),A.clearcoatMap!==void 0&&(this.clearcoatMap=e[A.clearcoatMap]||null),A.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[A.clearcoatRoughnessMap]||null),A.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[A.clearcoatNormalMap]||null),A.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new IA().fromArray(A.clearcoatNormalScale)),A.iridescenceMap!==void 0&&(this.iridescenceMap=e[A.iridescenceMap]||null),A.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[A.iridescenceThicknessMap]||null),A.transmissionMap!==void 0&&(this.transmissionMap=e[A.transmissionMap]||null),A.thicknessMap!==void 0&&(this.thicknessMap=e[A.thicknessMap]||null),A.anisotropyMap!==void 0&&(this.anisotropyMap=e[A.anisotropyMap]||null),A.sheenColorMap!==void 0&&(this.sheenColorMap=e[A.sheenColorMap]||null),A.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[A.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const e=A.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.allowOverride=A.allowOverride,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}},st=new z,An=new z,rr=new z,wt=new z,en=new z,nr=new z,tn=new z,Vl=class{constructor(A=new z,e=new z(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,st)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const e=st.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(st.copy(this.origin).addScaledVector(this.direction,e),st.distanceToSquared(A))}distanceSqToSegment(A,e,t,i){An.copy(A).add(e).multiplyScalar(.5),rr.copy(e).sub(A).normalize(),wt.copy(this.origin).sub(An);const r=A.distanceTo(e)*.5,n=-this.direction.dot(rr),a=wt.dot(this.direction),s=-wt.dot(rr),l=wt.lengthSq(),o=Math.abs(1-n*n);let c,u,h,g;if(o>0)if(c=n*s-a,u=n*a-s,g=r*o,c>=0)if(u>=-g)if(u<=g){const v=1/o;c*=v,u*=v,h=c*(c+n*u+2*a)+u*(n*c+u+2*s)+l}else u=r,c=Math.max(0,-(n*u+a)),h=-c*c+u*(u+2*s)+l;else u=-r,c=Math.max(0,-(n*u+a)),h=-c*c+u*(u+2*s)+l;else u<=-g?(c=Math.max(0,-(-n*r+a)),u=c>0?-r:Math.min(Math.max(-r,-s),r),h=-c*c+u*(u+2*s)+l):u<=g?(c=0,u=Math.min(Math.max(-r,-s),r),h=u*(u+2*s)+l):(c=Math.max(0,-(n*r+a)),u=c>0?r:Math.min(Math.max(-r,-s),r),h=-c*c+u*(u+2*s)+l);else u=n>0?-r:r,c=Math.max(0,-(n*u+a)),h=-c*c+u*(u+2*s)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(An).addScaledVector(rr,u),h}intersectSphere(A,e){st.subVectors(A.center,this.origin);const t=st.dot(this.direction),i=st.dot(st)-t*t,r=A.radius*A.radius;if(i>r)return null;const n=Math.sqrt(r-i),a=t-n,s=t+n;return s<0?null:a<0?this.at(s,e):this.at(a,e)}intersectsSphere(A){return A.radius<0?!1:this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const e=A.normal.dot(this.direction);if(e===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/e;return t>=0?t:null}intersectPlane(A,e){const t=this.distanceToPlane(A);return t===null?null:this.at(t,e)}intersectsPlane(A){const e=A.distanceToPoint(this.origin);return e===0||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let t,i,r,n,a,s;const l=1/this.direction.x,o=1/this.direction.y,c=1/this.direction.z,u=this.origin;return l>=0?(t=(A.min.x-u.x)*l,i=(A.max.x-u.x)*l):(t=(A.max.x-u.x)*l,i=(A.min.x-u.x)*l),o>=0?(r=(A.min.y-u.y)*o,n=(A.max.y-u.y)*o):(r=(A.max.y-u.y)*o,n=(A.min.y-u.y)*o),t>n||r>i||((r>t||isNaN(t))&&(t=r),(n<i||isNaN(i))&&(i=n),c>=0?(a=(A.min.z-u.z)*c,s=(A.max.z-u.z)*c):(a=(A.max.z-u.z)*c,s=(A.min.z-u.z)*c),t>s||a>i)||((a>t||t!==t)&&(t=a),(s<i||i!==i)&&(i=s),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(A){return this.intersectBox(A,st)!==null}intersectTriangle(A,e,t,i,r){en.subVectors(e,A),nr.subVectors(t,A),tn.crossVectors(en,nr);let n=this.direction.dot(tn),a;if(n>0){if(i)return null;a=1}else if(n<0)a=-1,n=-n;else return null;wt.subVectors(this.origin,A);const s=a*this.direction.dot(nr.crossVectors(wt,nr));if(s<0)return null;const l=a*this.direction.dot(en.cross(wt));if(l<0||s+l>n)return null;const o=-a*wt.dot(tn);return o<0?null:this.at(o/n,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_a=class extends Si{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new OA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}},Sa=new ae,Tt=new Vl,ar=new Zr,ya=new z,sr=new z,or=new z,lr=new z,rn=new z,cr=new z,Qa=new z,hr=new z,ze=class extends Se{constructor(A=new Qt,e=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,e=Object.keys(A);if(e.length>0){const t=A[e[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++){const n=t[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=i}}}}getVertexPosition(A,e){const t=this.geometry,i=t.attributes.position,r=t.morphAttributes.position,n=t.morphTargetsRelative;e.fromBufferAttribute(i,A);const a=this.morphTargetInfluences;if(r&&a){cr.set(0,0,0);for(let s=0,l=r.length;s<l;s++){const o=a[s],c=r[s];o!==0&&(rn.fromBufferAttribute(c,A),n?cr.addScaledVector(rn,o):cr.addScaledVector(rn.sub(e),o))}e.add(cr)}return e}raycast(A,e){const t=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere),ar.applyMatrix4(r),Tt.copy(A.ray).recast(A.near),!(ar.containsPoint(Tt.origin)===!1&&(Tt.intersectSphere(ar,ya)===null||Tt.origin.distanceToSquared(ya)>(A.far-A.near)**2))&&(Sa.copy(r).invert(),Tt.copy(A.ray).applyMatrix4(Sa),!(t.boundingBox!==null&&Tt.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(A,e,Tt)))}_computeIntersections(A,e,t){let i;const r=this.geometry,n=this.material,a=r.index,s=r.attributes.position,l=r.attributes.uv,o=r.attributes.uv1,c=r.attributes.normal,u=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(n))for(let g=0,v=u.length;g<v;g++){const P=u[g],d=n[P.materialIndex],f=Math.max(P.start,h.start),C=Math.min(a.count,Math.min(P.start+P.count,h.start+h.count));for(let x=f,D=C;x<D;x+=3){const M=a.getX(x),S=a.getX(x+1),y=a.getX(x+2);i=ur(this,d,A,t,l,o,c,M,S,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=P.materialIndex,e.push(i))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let P=g,d=v;P<d;P+=3){const f=a.getX(P),C=a.getX(P+1),x=a.getX(P+2);i=ur(this,n,A,t,l,o,c,f,C,x),i&&(i.faceIndex=Math.floor(P/3),e.push(i))}}else if(s!==void 0)if(Array.isArray(n))for(let g=0,v=u.length;g<v;g++){const P=u[g],d=n[P.materialIndex],f=Math.max(P.start,h.start),C=Math.min(s.count,Math.min(P.start+P.count,h.start+h.count));for(let x=f,D=C;x<D;x+=3){const M=x,S=x+1,y=x+2;i=ur(this,d,A,t,l,o,c,M,S,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=P.materialIndex,e.push(i))}}else{const g=Math.max(0,h.start),v=Math.min(s.count,h.start+h.count);for(let P=g,d=v;P<d;P+=3){const f=P,C=P+1,x=P+2;i=ur(this,n,A,t,l,o,c,f,C,x),i&&(i.faceIndex=Math.floor(P/3),e.push(i))}}}};function kl(A,e,t,i,r,n,a,s){let l;if(e.side===1?l=i.intersectTriangle(a,n,r,!0,s):l=i.intersectTriangle(r,n,a,e.side===0,s),l===null)return null;hr.copy(s),hr.applyMatrix4(A.matrixWorld);const o=t.ray.origin.distanceTo(hr);return o<t.near||o>t.far?null:{distance:o,point:hr.clone(),object:A}}function ur(A,e,t,i,r,n,a,s,l,o){A.getVertexPosition(s,sr),A.getVertexPosition(l,or),A.getVertexPosition(o,lr);const c=kl(A,e,t,i,sr,or,lr,Qa);if(c){const u=new z;Bi.getBarycoord(Qa,sr,or,lr,u),r&&(c.uv=Bi.getInterpolatedAttribute(r,s,l,o,u,new IA)),n&&(c.uv1=Bi.getInterpolatedAttribute(n,s,l,o,u,new IA)),a&&(c.normal=Bi.getInterpolatedAttribute(a,s,l,o,u,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a:s,b:l,c:o,normal:new z,materialIndex:0};Bi.getNormal(sr,or,lr,h.normal),c.face=h,c.barycoord=u}return c}var Gl=class extends Ue{constructor(A=null,e=1,t=1,i,r,n,a,s,l=De,o=De,c,u){super(null,n,a,s,l,o,i,r,c,u),this.isDataTexture=!0,this.image={data:A,width:e,height:t},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nn=new z,Wl=new z,Xl=new bA,It=class{constructor(A=new z(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,t,i){return this.normal.set(A,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,t){const i=nn.subVectors(t,e).cross(Wl.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,e,t=!0){const i=A.delta(nn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(A.start)===0?e.copy(A.start):null;const n=-(A.start.dot(this.normal)+this.constant)/r;return t===!0&&(n<0||n>1)?null:e.copy(A.start).addScaledVector(i,n)}intersectsLine(A){const e=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return e<0&&t>0||t<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){const t=e||Xl.getNormalMatrix(A),i=this.coplanarPoint(nn).applyMatrix4(A),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}},bt=new Zr,Yl=new IA(.5,.5),fr=new z,an=class{constructor(A=new It,e=new It,t=new It,i=new It,r=new It,n=new It){this.planes=[A,e,t,i,r,n]}set(A,e,t,i,r,n){const a=this.planes;return a[0].copy(A),a[1].copy(e),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(n),this}copy(A){const e=this.planes;for(let t=0;t<6;t++)e[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A,e=Ht,t=!1){const i=this.planes,r=A.elements,n=r[0],a=r[1],s=r[2],l=r[3],o=r[4],c=r[5],u=r[6],h=r[7],g=r[8],v=r[9],P=r[10],d=r[11],f=r[12],C=r[13],x=r[14],D=r[15];if(i[0].setComponents(l-n,h-o,d-g,D-f).normalize(),i[1].setComponents(l+n,h+o,d+g,D+f).normalize(),i[2].setComponents(l+a,h+c,d+v,D+C).normalize(),i[3].setComponents(l-a,h-c,d-v,D-C).normalize(),t)i[4].setComponents(s,u,P,x).normalize(),i[5].setComponents(l-s,h-u,d-P,D-x).normalize();else if(i[4].setComponents(l-s,h-u,d-P,D-x).normalize(),e===2e3)i[5].setComponents(l+s,h+u,d+P,D+x).normalize();else if(e===2001)i[5].setComponents(s,u,P,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),bt.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const e=A.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bt.copy(e.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(bt)}intersectsSprite(A){return bt.center.set(0,0,0),bt.radius=.7071067811865476+Yl.distanceTo(A.center),bt.applyMatrix4(A.matrixWorld),this.intersectsSphere(bt)}intersectsSphere(A){const e=this.planes,t=A.center,i=-A.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(A){const e=this.planes;for(let t=0;t<6;t++){const i=e[t];if(fr.x=i.normal.x>0?A.max.x:A.min.x,fr.y=i.normal.y>0?A.max.y:A.min.y,fr.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(fr)<0)return!1}return!0}containsPoint(A){const e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ta=class extends Ue{constructor(A=[],e=301,t,i,r,n,a,s,l,o){super(A,e,t,i,r,n,a,s,l,o),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}},jl=class extends Ue{constructor(A,e,t,i,r,n,a,s,l){super(A,e,t,i,r,n,a,s,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ti=class extends Ue{constructor(A,e,t=Mt,i,r,n,a=De,s=De,l,o=mi,c=1){if(o!==1026&&o!==1027)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:A,height:e,depth:c},i,r,n,a,s,o,t,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.source=new Fr(Object.assign({},A.image)),this.compareFunction=A.compareFunction,this}toJSON(A){const e=super.toJSON(A);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Kl=class extends ti{constructor(A,e=Mt,t=301,i,r,n=De,a=De,s,l=mi){const o={width:A,height:A,depth:1},c=[o,o,o,o,o,o];super(A,A,e,t,i,r,n,a,s,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(A){this.image=A}},Ia=class extends Ue{constructor(A=null){super(),this.sourceTexture=A,this.isExternalTexture=!0}copy(A){return super.copy(A),this.sourceTexture=A.sourceTexture,this}},sn=class $s extends Qt{constructor(e=1,t=1,i=1,r=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:a};const s=this;r=Math.floor(r),n=Math.floor(n),a=Math.floor(a);const l=[],o=[],c=[],u=[];let h=0,g=0;v("z","y","x",-1,-1,i,t,e,a,n,0),v("z","y","x",1,-1,i,t,-e,a,n,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,n,4),v("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(u,2));function v(P,d,f,C,x,D,M,S,y,m,B){const W=D/y,_=M/m,V=D/2,G=M/2,k=S/2,N=y+1,X=m+1;let L=0,J=0;const AA=new z;for(let eA=0;eA<X;eA++){const hA=eA*_-G;for(let PA=0;PA<N;PA++)AA[P]=(PA*W-V)*C,AA[d]=hA*x,AA[f]=k,o.push(AA.x,AA.y,AA.z),AA[P]=0,AA[d]=0,AA[f]=S>0?1:-1,c.push(AA.x,AA.y,AA.z),u.push(PA/y),u.push(1-eA/m),L+=1}for(let eA=0;eA<m;eA++)for(let hA=0;hA<y;hA++){const PA=h+hA+N*eA,kA=h+hA+N*(eA+1),YA=h+(hA+1)+N*(eA+1),Y=h+(hA+1)+N*eA;l.push(PA,kA,Y),l.push(kA,YA,Y),J+=6}s.addGroup(g,J,B),g+=J,h+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},yi=class Ao extends Qt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,a=t/2,s=Math.floor(i),l=Math.floor(r),o=s+1,c=l+1,u=e/s,h=t/l,g=[],v=[],P=[],d=[];for(let f=0;f<c;f++){const C=f*h-a;for(let x=0;x<o;x++){const D=x*u-n;v.push(D,-C,0),P.push(0,0,1),d.push(x/s),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let C=0;C<s;C++){const x=C+o*f,D=C+o*(f+1),M=C+1+o*(f+1),S=C+1+o*f;g.push(x,D,S),g.push(D,M,S)}this.setIndex(g),this.setAttribute("position",new at(v,3)),this.setAttribute("normal",new at(P,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.width,e.height,e.widthSegments,e.heightSegments)}},Jl=class extends Si{constructor(A){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new OA(0),this.transparent=!0,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.fog=A.fog,this}};function ii(A){const e={};for(const t in A){e[t]={};for(const i in A[t]){const r=A[t][i];if(ba(r))r.isRenderTargetTexture?(MA("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(ba(r[0])){const n=[];for(let a=0,s=r.length;a<s;a++)n[a]=r[a].clone();e[t][i]=n}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Be(A){const e={};for(let t=0;t<A.length;t++){const i=ii(A[t]);for(const r in i)e[r]=i[r]}return e}function ba(A){return A&&(A.isColor||A.isMatrix3||A.isMatrix4||A.isVector2||A.isVector3||A.isVector4||A.isTexture||A.isQuaternion)}function ql(A){const e=[];for(let t=0;t<A.length;t++)e.push(A[t].clone());return e}function Ra(A){const e=A.getRenderTarget();return e===null?A.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:HA.workingColorSpace}var La={clone:ii,merge:Be},Zl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$l=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends Si{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zl,this.fragmentShader=$l,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=ii(A.uniforms),this.uniformsGroups=ql(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this.defaultAttributeValues=Object.assign({},A.defaultAttributeValues),this.index0AttributeName=A.index0AttributeName,this.uniformsNeedUpdate=A.uniformsNeedUpdate,this}toJSON(A){const e=super.toJSON(A);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(A).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const t={};for(const i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}fromJSON(A,e){if(super.fromJSON(A,e),A.uniforms!==void 0)for(const t in A.uniforms){const i=A.uniforms[t];switch(this.uniforms[t]={},i.type){case"t":this.uniforms[t].value=e[i.value]||null;break;case"c":this.uniforms[t].value=new OA().setHex(i.value);break;case"v2":this.uniforms[t].value=new IA().fromArray(i.value);break;case"v3":this.uniforms[t].value=new z().fromArray(i.value);break;case"v4":this.uniforms[t].value=new ie().fromArray(i.value);break;case"m3":this.uniforms[t].value=new bA().fromArray(i.value);break;case"m4":this.uniforms[t].value=new ae().fromArray(i.value);break;default:this.uniforms[t].value=i.value}}if(A.defines!==void 0&&(this.defines=A.defines),A.vertexShader!==void 0&&(this.vertexShader=A.vertexShader),A.fragmentShader!==void 0&&(this.fragmentShader=A.fragmentShader),A.glslVersion!==void 0&&(this.glslVersion=A.glslVersion),A.extensions!==void 0)for(const t in A.extensions)this.extensions[t]=A.extensions[t];return A.lights!==void 0&&(this.lights=A.lights),A.clipping!==void 0&&(this.clipping=A.clipping),this}},Ac=class extends Qe{constructor(A){super(A),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ec=class extends Si{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=el,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}},tc=class extends Si{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}};function dr(A,e){return!A||A.constructor===e?A:typeof e.BYTES_PER_ELEMENT=="number"?new e(A):Array.prototype.slice.call(A)}var Qi=class{constructor(A,e,t,i){this.parameterPositions=A,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t,this.settings=null,this.DefaultSettings_={}}evaluate(A){const e=this.parameterPositions;let t=this._cachedIndex,i=e[t],r=e[t-1];t:{A:{let n;e:{i:if(!(A<i)){for(let a=t+2;;){if(i===void 0){if(A<r)break i;return t=e.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===a)break;if(r=i,i=e[++t],A<i)break A}n=e.length;break e}if(!(A>=r)){const a=e[1];A<a&&(t=2,r=a);for(let s=t-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(t===s)break;if(i=r,r=e[--t-1],A>=r)break A}n=t,t=0;break e}break t}for(;t<n;){const a=t+n>>>1;A<e[a]?n=a:t=a+1}if(i=e[t],r=e[t-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return t=e.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,r,i)}return this.interpolate_(t,r,A,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(A){const e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,r=A*i;for(let n=0;n!==i;++n)e[n]=t[r+n];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ic=class extends Qi{constructor(A,e,t,i){super(A,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ra,endingEnd:ra}}intervalChanged_(A,e,t){const i=this.parameterPositions;let r=A-2,n=A+1,a=i[r],s=i[n];if(a===void 0)switch(this.getSettings_().endingStart){case na:r=A,a=2*e-t;break;case aa:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=A,a=t}if(s===void 0)switch(this.getSettings_().endingEnd){case na:n=A,s=2*t-e;break;case aa:n=1,s=t+i[1]-i[0];break;default:n=A-1,s=e}const l=(t-e)*.5,o=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(s-t),this._offsetPrev=r*o,this._offsetNext=n*o}interpolate_(A,e,t,i){const r=this.resultBuffer,n=this.sampleValues,a=this.valueSize,s=A*a,l=s-a,o=this._offsetPrev,c=this._offsetNext,u=this._weightPrev,h=this._weightNext,g=(t-e)/(i-e),v=g*g,P=v*g,d=-u*P+2*u*v-u*g,f=(1+u)*P+(-1.5-2*u)*v+(-.5+u)*g+1,C=(-1-h)*P+(1.5+h)*v+.5*g,x=h*P-h*v;for(let D=0;D!==a;++D)r[D]=d*n[o+D]+f*n[l+D]+C*n[s+D]+x*n[c+D];return r}},rc=class extends Qi{constructor(A,e,t,i){super(A,e,t,i)}interpolate_(A,e,t,i){const r=this.resultBuffer,n=this.sampleValues,a=this.valueSize,s=A*a,l=s-a,o=(t-e)/(i-e),c=1-o;for(let u=0;u!==a;++u)r[u]=n[l+u]*c+n[s+u]*o;return r}},nc=class extends Qi{constructor(A,e,t,i){super(A,e,t,i)}interpolate_(A){return this.copySampleValue_(A-1)}},ac=class extends Qi{interpolate_(A,e,t,i){const r=this.resultBuffer,n=this.sampleValues,a=this.valueSize,s=A*a,l=s-a,o=this.inTangents,c=this.outTangents;if(!o||!c){const g=(t-e)/(i-e),v=1-g;for(let P=0;P!==a;++P)r[P]=n[l+P]*v+n[s+P]*g;return r}const u=a*2,h=A-1;for(let g=0;g!==a;++g){const v=n[l+g],P=n[s+g],d=h*u+g*2,f=c[d],C=c[d+1],x=A*u+g*2,D=o[x],M=o[x+1];let S=(t-e)/(i-e),y,m,B,W,_;for(let V=0;V<8;V++){y=S*S,m=y*S,B=1-S,W=B*B,_=W*B;const G=_*e+3*W*S*f+3*B*y*D+m*i-t;if(Math.abs(G)<1e-10)break;const k=3*W*(f-e)+6*B*S*(D-f)+3*y*(i-D);if(Math.abs(k)<1e-10)break;S=S-G/k,S=Math.max(0,Math.min(1,S))}r[g]=_*v+3*W*S*C+3*B*y*M+m*P}return r}},Ke=class{constructor(A,e,t,i){if(A===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+A);this.name=A,this.times=dr(e,this.TimeBufferType),this.values=dr(t,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(A){const e=A.constructor;let t;if(e.toJSON!==this.toJSON)t=e.toJSON(A);else{t={name:A.name,times:dr(A.times,Array),values:dr(A.values,Array)};const i=A.getInterpolation();i!==A.DefaultInterpolation&&(t.interpolation=i)}return t.type=A.ValueTypeName,t}InterpolantFactoryMethodDiscrete(A){return new nc(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodLinear(A){return new rc(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodSmooth(A){return new ic(this.times,this.values,this.getValueSize(),A)}InterpolantFactoryMethodBezier(A){const e=new ac(this.times,this.values,this.getValueSize(),A);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(A){let e;switch(A){case Xi:e=this.InterpolantFactoryMethodDiscrete;break;case Qr:e=this.InterpolantFactoryMethodLinear;break;case Tr:e=this.InterpolantFactoryMethodSmooth;break;case ia:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(A!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return MA("KeyframeTrack:",t),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xi;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Tr;case this.InterpolantFactoryMethodBezier:return ia}}getValueSize(){return this.values.length/this.times.length}shift(A){if(A!==0){const e=this.times;for(let t=0,i=e.length;t!==i;++t)e[t]+=A}return this}scale(A){if(A!==1){const e=this.times;for(let t=0,i=e.length;t!==i;++t)e[t]*=A}return this}trim(A,e){const t=this.times,i=t.length;let r=0,n=i-1;for(;r!==i&&t[r]<A;)++r;for(;n!==-1&&t[n]>e;)--n;if(++n,r!==0||n!==i){r>=n&&(n=Math.max(n,1),r=n-1);const a=this.getValueSize();this.times=t.slice(r,n),this.values=this.values.slice(r*a,n*a)}return this}validate(){let A=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(yA("KeyframeTrack: Invalid value size in track.",this),A=!1);const t=this.times,i=this.values,r=t.length;r===0&&(yA("KeyframeTrack: Track is empty.",this),A=!1);let n=null;for(let a=0;a!==r;a++){const s=t[a];if(typeof s=="number"&&isNaN(s)){yA("KeyframeTrack: Time is not a valid number.",this,a,s),A=!1;break}if(n!==null&&n>s){yA("KeyframeTrack: Out of order keys.",this,a,s,n),A=!1;break}n=s}if(i!==void 0&&rl(i))for(let a=0,s=i.length;a!==s;++a){const l=i[a];if(isNaN(l)){yA("KeyframeTrack: Value is not a valid number.",this,a,l),A=!1;break}}return A}optimize(){const A=this.times.slice(),e=this.values.slice(),t=this.getValueSize(),i=this.getInterpolation()===Tr,r=A.length-1;let n=1;for(let a=1;a<r;++a){let s=!1;const l=A[a];if(l!==A[a+1]&&(a!==1||l!==A[0]))if(i)s=!0;else{const o=a*t,c=o-t,u=o+t;for(let h=0;h!==t;++h){const g=e[o+h];if(g!==e[c+h]||g!==e[u+h]){s=!0;break}}}if(s){if(a!==n){A[n]=A[a];const o=a*t,c=n*t;for(let u=0;u!==t;++u)e[c+u]=e[o+u]}++n}}if(r>0){A[n]=A[r];for(let a=r*t,s=n*t,l=0;l!==t;++l)e[s+l]=e[a+l];++n}return n!==A.length?(this.times=A.slice(0,n),this.values=e.slice(0,n*t)):(this.times=A,this.values=e),this}clone(){const A=this.times.slice(),e=this.values.slice(),t=this.constructor,i=new t(this.name,A,e);return i.createInterpolant=this.createInterpolant,i}};Ke.prototype.ValueTypeName="",Ke.prototype.TimeBufferType=Float32Array,Ke.prototype.ValueBufferType=Float32Array,Ke.prototype.DefaultInterpolation=Qr;var Ti=class extends Ke{constructor(A,e,t){super(A,e,t)}};Ti.prototype.ValueTypeName="bool",Ti.prototype.ValueBufferType=Array,Ti.prototype.DefaultInterpolation=Xi,Ti.prototype.InterpolantFactoryMethodLinear=void 0,Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends Ke{constructor(A,e,t,i){super(A,e,t,i)}};sc.prototype.ValueTypeName="color";var oc=class extends Ke{constructor(A,e,t,i){super(A,e,t,i)}};oc.prototype.ValueTypeName="number";var lc=class extends Qi{constructor(A,e,t,i){super(A,e,t,i)}interpolate_(A,e,t,i){const r=this.resultBuffer,n=this.sampleValues,a=this.valueSize,s=(t-e)/(i-e);let l=A*a;for(let o=l+a;l!==o;l+=4)_t.slerpFlat(r,0,n,l-a,n,l,s);return r}},Ua=class extends Ke{constructor(A,e,t,i){super(A,e,t,i)}InterpolantFactoryMethodLinear(A){return new lc(this.times,this.values,this.getValueSize(),A)}};Ua.prototype.ValueTypeName="quaternion",Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends Ke{constructor(A,e,t){super(A,e,t)}};Ii.prototype.ValueTypeName="string",Ii.prototype.ValueBufferType=Array,Ii.prototype.DefaultInterpolation=Xi,Ii.prototype.InterpolantFactoryMethodLinear=void 0,Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var cc=class extends Ke{constructor(A,e,t,i){super(A,e,t,i)}};cc.prototype.ValueTypeName="vector";var hc=class{constructor(A,e,t){const i=this;let r=!1,n=0,a=0,s;const l=[];this.onStart=void 0,this.onLoad=A,this.onProgress=e,this.onError=t,this._abortController=null,this.itemStart=function(o){a++,r===!1&&i.onStart!==void 0&&i.onStart(o,n,a),r=!0},this.itemEnd=function(o){n++,i.onProgress!==void 0&&i.onProgress(o,n,a),n===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(o){i.onError!==void 0&&i.onError(o)},this.resolveURL=function(o){return o=o.normalize("NFC"),s?s(o):o},this.setURLModifier=function(o){return s=o,this},this.addHandler=function(o,c){return l.push(o,c),this},this.removeHandler=function(o){const c=l.indexOf(o);return c!==-1&&l.splice(c,2),this},this.getHandler=function(o){for(let c=0,u=l.length;c<u;c+=2){const h=l[c],g=l[c+1];if(h.global&&(h.lastIndex=0),h.test(o))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},uc=new hc,fc=class{constructor(A){this.manager=A!==void 0?A:uc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(A,e){const t=this;return new Promise(function(i,r){t.load(A,i,e,r)})}parse(){}setCrossOrigin(A){return this.crossOrigin=A,this}setWithCredentials(A){return this.withCredentials=A,this}setPath(A){return this.path=A,this}setResourcePath(A){return this.resourcePath=A,this}setRequestHeader(A){return this.requestHeader=A,this}abort(){return this}};fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var dc=class extends Se{constructor(A,e=1){super(),this.isLight=!0,this.type="Light",this.color=new OA(A),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(A,e){return super.copy(A,e),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const e=super.toJSON(A);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},on=new ae,Fa=new z,za=new z,gc=class{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new IA(512,512),this.mapType=dt,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new an,this._frameExtents=new IA(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const e=this.camera,t=this.matrix;Fa.setFromMatrixPosition(A.matrixWorld),e.position.copy(Fa),za.setFromMatrixPosition(A.target.matrixWorld),e.lookAt(za),e.updateMatrixWorld(),on.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(on,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth?t.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(on)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.autoUpdate=A.autoUpdate,this.needsUpdate=A.needsUpdate,this.normalBias=A.normalBias,this.blurSamples=A.blurSamples,this.mapSize.copy(A.mapSize),this.biasNode=A.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.intensity!==1&&(A.intensity=this.intensity),this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}},gr=new z,pr=new _t,Je=new z,Na=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Ht,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorld.decompose(gr,pr,Je),Je.x===1&&Je.y===1&&Je.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,pr,Je.set(1,1,1)).invert()}updateWorldMatrix(A,e,t=!1){super.updateWorldMatrix(A,e,t),this.matrixWorld.decompose(gr,pr,Je),Je.x===1&&Je.y===1&&Je.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gr,pr,Je.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pt=new z,Ha=new IA,Oa=new IA,Ge=class extends Na{constructor(A=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const e=.5*this.getFilmHeight()/A;this.fov=wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(vi*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return wi*2*Math.atan(Math.tan(vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,e,t){Pt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pt.x,Pt.y).multiplyScalar(-A/Pt.z),Pt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pt.x,Pt.y).multiplyScalar(-A/Pt.z)}getViewSize(A,e){return this.getViewBounds(A,Ha,Oa),e.subVectors(Oa,Ha)}setViewOffset(A,e,t,i,r,n){this.aspect=A/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let e=A*Math.tan(vi*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i;const n=this.view;if(this.view!==null&&this.view.enabled){const s=n.fullWidth,l=n.fullHeight;r+=n.offsetX*i/s,e-=n.offsetY*t/l,i*=n.width/s,t*=n.height/l}const a=this.filmOffset;a!==0&&(r+=A*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,A,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mr=class extends Na{constructor(A=-1,e=1,t=1,i=-1,r=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=n,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,e,t,i,r,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=t-A,n=t+A,a=i+e,s=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,o=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,n=r+l*this.view.width,a-=o*this.view.offsetY,s=a-o*this.view.height}this.projectionMatrix.makeOrthographic(r,n,a,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pc=class extends gc{constructor(){super(new mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mc=class extends dc{constructor(A,e){super(A,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new pc}dispose(){super.dispose(),this.shadow.dispose()}copy(A){return super.copy(A),this.target=A.target.clone(),this.shadow=A.shadow.clone(),this}toJSON(A){const e=super.toJSON(A);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},ri=-90,ni=1,vc=class extends Se{constructor(A,e,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(ri,ni,A,e);i.layers=this.layers,this.add(i);const r=new Ge(ri,ni,A,e);r.layers=this.layers,this.add(r);const n=new Ge(ri,ni,A,e);n.layers=this.layers,this.add(n);const a=new Ge(ri,ni,A,e);a.layers=this.layers,this.add(a);const s=new Ge(ri,ni,A,e);s.layers=this.layers,this.add(s);const l=new Ge(ri,ni,A,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const A=this.coordinateSystem,e=this.children.concat(),[t,i,r,n,a,s]=e;for(const l of e)this.remove(l);if(A===2e3)t.up.set(0,1,0),t.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(A===2001)t.up.set(0,-1,0),t.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const l of e)this.add(l),l.updateMatrixWorld()}update(A,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:t,activeMipmapLevel:i}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[r,n,a,s,l,o]=this.children,c=A.getRenderTarget(),u=A.getActiveCubeFace(),h=A.getActiveMipmapLevel(),g=A.xr.enabled;A.xr.enabled=!1;const v=t.texture.generateMipmaps;t.texture.generateMipmaps=!1;let P=!1;A.isWebGLRenderer===!0?P=A.state.buffers.depth.getReversed():P=A.reversedDepthBuffer,A.setRenderTarget(t,0,i),P&&A.autoClear===!1&&A.clearDepth(),A.render(e,r),A.setRenderTarget(t,1,i),P&&A.autoClear===!1&&A.clearDepth(),A.render(e,n),A.setRenderTarget(t,2,i),P&&A.autoClear===!1&&A.clearDepth(),A.render(e,a),A.setRenderTarget(t,3,i),P&&A.autoClear===!1&&A.clearDepth(),A.render(e,s),A.setRenderTarget(t,4,i),P&&A.autoClear===!1&&A.clearDepth(),A.render(e,l),t.texture.generateMipmaps=v,A.setRenderTarget(t,5,i),P&&A.autoClear===!1&&A.clearDepth(),A.render(e,o),A.setRenderTarget(c,u,h),A.xr.enabled=g,t.texture.needsPMREMUpdate=!0}},wc=class extends Ge{constructor(A=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=A}},ln="\\[\\]\\.:\\/",Pc=new RegExp("["+ln+"]","g"),cn="[^"+ln+"]",Dc="[^"+ln.replace("\\.","")+"]",Ec=/((?:WC+[\/:])*)/.source.replace("WC",cn),Bc=/(WCOD+)?/.source.replace("WCOD",Dc),Mc=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cn),Cc=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cn),xc=new RegExp("^"+Ec+Bc+Mc+Cc+"$"),_c=["material","materials","bones","map"],Sc=class{constructor(A,e,t){const i=t||re.parseTrackName(e);this._targetGroup=A,this._bindings=A.subscribe_(e,i)}getValue(A,e){this.bind();const t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(A,e)}setValue(A,e){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=t.length;i!==r;++i)t[i].setValue(A,e)}bind(){const A=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=A.length;e!==t;++e)A[e].bind()}unbind(){const A=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=A.length;e!==t;++e)A[e].unbind()}},re=class di{constructor(e,t,i){this.path=t,this.parsedPath=i||di.parseTrackName(t),this.node=di.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new di.Composite(e,t,i):new di(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Pc,"")}static parseTrackName(e){const t=xc.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const n=i.nodeName.substring(r+1);_c.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let a=0;a<n.length;a++){const s=n[a];if(s.name===t||s.uuid===t)return s;const l=i(s.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let n=t.propertyIndex;if(e||(e=di.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){MA("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material){yA("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){yA("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){yA("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===o){o=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){yA("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){yA("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){yA("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(o!==void 0){if(e[o]===void 0){yA("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}const a=e[r];if(a===void 0){const o=t.nodeName;yA("PropertyBinding: Trying to update property for track: "+o+"."+r+" but it wasn't found.",e);return}let s=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?s=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){yA("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){yA("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=n}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};re.Composite=Sc,re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},re.prototype.GetterByBindingType=[re.prototype._getValue_direct,re.prototype._getValue_array,re.prototype._getValue_arrayElement,re.prototype._getValue_toArray],re.prototype.SetterByBindingTypeAndVersioning=[[re.prototype._setValue_direct,re.prototype._setValue_direct_setNeedsUpdate,re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[re.prototype._setValue_array,re.prototype._setValue_array_setNeedsUpdate,re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[re.prototype._setValue_arrayElement,re.prototype._setValue_arrayElement_setNeedsUpdate,re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[re.prototype._setValue_fromArray,re.prototype._setValue_fromArray_setNeedsUpdate,re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yc=class{constructor(A,e,t,i){this.elements=[1,0,0,1],A!==void 0&&this.set(A,e,t,i)}identity(){return this.set(1,0,0,1),this}fromArray(A,e=0){for(let t=0;t<4;t++)this.elements[t]=A[t+e];return this}set(A,e,t,i){const r=this.elements;return r[0]=A,r[2]=e,r[1]=t,r[3]=i,this}};Wn=yc,Wn.prototype.isMatrix2=!0;function Va(A,e,t,i){const r=Qc(i);switch(t){case po:return A*e;case vo:return A*e/r.components*r.byteLength;case Aa:return A*e/r.components*r.byteLength;case Wi:return A*e*2/r.components*r.byteLength;case ea:return A*e*2/r.components*r.byteLength;case mo:return A*e*3/r.components*r.byteLength;case pi:return A*e*4/r.components*r.byteLength;case ta:return A*e*4/r.components*r.byteLength;case wo:case Po:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*8;case Do:case Eo:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*16;case Mo:case xo:return Math.max(A,16)*Math.max(e,8)/4;case Bo:case Co:return Math.max(A,8)*Math.max(e,8)/2;case _o:case So:case Qo:case To:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*8;case yo:case Io:case bo:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((A+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((A+4)/5)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((A+4)/5)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((A+5)/6)*Math.floor((e+4)/5)*16;case zo:return Math.floor((A+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((A+7)/8)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((A+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((A+7)/8)*Math.floor((e+7)/8)*16;case Vo:return Math.floor((A+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((A+9)/10)*Math.floor((e+5)/6)*16;case Go:return Math.floor((A+9)/10)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((A+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((A+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((A+11)/12)*Math.floor((e+11)/12)*16;case jo:case Ko:case Jo:return Math.ceil(A/4)*Math.ceil(e/4)*16;case qo:case Zo:return Math.ceil(A/4)*Math.ceil(e/4)*8;case $o:case Al:return Math.ceil(A/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qc(A){switch(A){case dt:case co:return{byteLength:1,components:1};case Kn:case ho:case Ct:return{byteLength:2,components:1};case Jn:case qn:return{byteLength:2,components:4};case Mt:case uo:case Gi:return{byteLength:4,components:1};case fo:case go:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${A}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}})),typeof window<"u"&&(window.__THREE__?MA("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function ka(){let A=null,e=!1,t=null,i=null;function r(n,a){t(n,a),i=A.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&A!==null&&(i=A.requestAnimationFrame(r),e=!0)},stop:function(){A!==null&&A.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){A=n}}}function Tc(A){const e=new WeakMap;function t(s,l){const o=s.array,c=s.usage,u=o.byteLength,h=A.createBuffer();A.bindBuffer(l,h),A.bufferData(l,o,c),s.onUploadCallback();let g;if(o instanceof Float32Array)g=A.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)g=A.HALF_FLOAT;else if(o instanceof Uint16Array)s.isFloat16BufferAttribute?g=A.HALF_FLOAT:g=A.UNSIGNED_SHORT;else if(o instanceof Int16Array)g=A.SHORT;else if(o instanceof Uint32Array)g=A.UNSIGNED_INT;else if(o instanceof Int32Array)g=A.INT;else if(o instanceof Int8Array)g=A.BYTE;else if(o instanceof Uint8Array)g=A.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)g=A.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:h,type:g,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:u}}function i(s,l,o){const c=l.array,u=l.updateRanges;if(A.bindBuffer(o,s),u.length===0)A.bufferSubData(o,0,c);else{u.sort((g,v)=>g.start-v.start);let h=0;for(let g=1;g<u.length;g++){const v=u[h],P=u[g];P.start<=v.start+v.count+1?v.count=Math.max(v.count,P.start+P.count-v.start):(++h,u[h]=P)}u.length=h+1;for(let g=0,v=u.length;g<v;g++){const P=u[g];A.bufferSubData(o,P.start*c.BYTES_PER_ELEMENT,c,P.start,P.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function n(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(A.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const c=e.get(s);(!c||c.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const o=e.get(s);if(o===void 0)e.set(s,t(s,l));else if(o.version<s.version){if(o.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,s,l),o.version=s.version}}return{get:r,remove:n,update:a}}var RA={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <cube_uv_reflection_fragment>
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},aA={common:{diffuse:{value:new OA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bA},alphaMap:{value:null},alphaMapTransform:{value:new bA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bA}},envmap:{envMap:{value:null},envMapRotation:{value:new bA},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bA},normalScale:{value:new IA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new OA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new OA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bA},alphaTest:{value:0},uvTransform:{value:new bA}},sprite:{diffuse:{value:new OA(16777215)},opacity:{value:1},center:{value:new IA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bA},alphaMap:{value:null},alphaMapTransform:{value:new bA},alphaTest:{value:0}}},qe={basic:{uniforms:Be([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.fog]),vertexShader:RA.meshbasic_vert,fragmentShader:RA.meshbasic_frag},lambert:{uniforms:Be([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,aA.lights,{emissive:{value:new OA(0)},envMapIntensity:{value:1}}]),vertexShader:RA.meshlambert_vert,fragmentShader:RA.meshlambert_frag},phong:{uniforms:Be([aA.common,aA.specularmap,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,aA.lights,{emissive:{value:new OA(0)},specular:{value:new OA(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:RA.meshphong_vert,fragmentShader:RA.meshphong_frag},standard:{uniforms:Be([aA.common,aA.envmap,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.roughnessmap,aA.metalnessmap,aA.fog,aA.lights,{emissive:{value:new OA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:RA.meshphysical_vert,fragmentShader:RA.meshphysical_frag},toon:{uniforms:Be([aA.common,aA.aomap,aA.lightmap,aA.emissivemap,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.gradientmap,aA.fog,aA.lights,{emissive:{value:new OA(0)}}]),vertexShader:RA.meshtoon_vert,fragmentShader:RA.meshtoon_frag},matcap:{uniforms:Be([aA.common,aA.bumpmap,aA.normalmap,aA.displacementmap,aA.fog,{matcap:{value:null}}]),vertexShader:RA.meshmatcap_vert,fragmentShader:RA.meshmatcap_frag},points:{uniforms:Be([aA.points,aA.fog]),vertexShader:RA.points_vert,fragmentShader:RA.points_frag},dashed:{uniforms:Be([aA.common,aA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:RA.linedashed_vert,fragmentShader:RA.linedashed_frag},depth:{uniforms:Be([aA.common,aA.displacementmap]),vertexShader:RA.depth_vert,fragmentShader:RA.depth_frag},normal:{uniforms:Be([aA.common,aA.bumpmap,aA.normalmap,aA.displacementmap,{opacity:{value:1}}]),vertexShader:RA.meshnormal_vert,fragmentShader:RA.meshnormal_frag},sprite:{uniforms:Be([aA.sprite,aA.fog]),vertexShader:RA.sprite_vert,fragmentShader:RA.sprite_frag},background:{uniforms:{uvTransform:{value:new bA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:RA.background_vert,fragmentShader:RA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bA}},vertexShader:RA.backgroundCube_vert,fragmentShader:RA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:RA.cube_vert,fragmentShader:RA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:RA.equirect_vert,fragmentShader:RA.equirect_frag},distance:{uniforms:Be([aA.common,aA.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:RA.distance_vert,fragmentShader:RA.distance_frag},shadow:{uniforms:Be([aA.lights,aA.fog,{color:{value:new OA(0)},opacity:{value:1}}]),vertexShader:RA.shadow_vert,fragmentShader:RA.shadow_frag}};qe.physical={uniforms:Be([qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bA},clearcoatNormalScale:{value:new IA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bA},sheen:{value:0},sheenColor:{value:new OA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bA},transmissionSamplerSize:{value:new IA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bA},attenuationDistance:{value:0},attenuationColor:{value:new OA(0)},specularColor:{value:new OA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bA},anisotropyVector:{value:new IA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bA}}]),vertexShader:RA.meshphysical_vert,fragmentShader:RA.meshphysical_frag};var vr={r:0,b:0,g:0},Ic=new ae,Ga=new bA;Ga.set(-1,0,0,0,1,0,0,0,1);function bc(A,e,t,i,r,n){const a=new OA(0);let s=r===!0?0:1,l,o,c=null,u=0,h=null;function g(C){let x=C.isScene===!0?C.background:null;if(x&&x.isTexture){const D=C.backgroundBlurriness>0;x=e.get(x,D)}return x}function v(C){let x=!1;const D=g(C);D===null?d(a,s):D&&D.isColor&&(d(D,1),x=!0);const M=A.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,n):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,n),(A.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil))}function P(C,x){const D=g(x);D&&(D.isCubeTexture||D.mapping===306)?(o===void 0&&(o=new ze(new sn(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:ii(qe.backgroundCube.uniforms),vertexShader:qe.backgroundCube.vertexShader,fragmentShader:qe.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(M,S,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=D,o.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Ic.makeRotationFromEuler(x.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Ga),o.material.toneMapped=HA.getTransfer(D.colorSpace)!==ji,(c!==D||u!==D.version||h!==A.toneMapping)&&(o.material.needsUpdate=!0,c=D,u=D.version,h=A.toneMapping),o.layers.enableAll(),C.unshift(o,o.geometry,o.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new ze(new yi(2,2),new Qe({name:"BackgroundMaterial",uniforms:ii(qe.background.uniforms),vertexShader:qe.background.vertexShader,fragmentShader:qe.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=HA.getTransfer(D.colorSpace)!==ji,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(c!==D||u!==D.version||h!==A.toneMapping)&&(l.material.needsUpdate=!0,c=D,u=D.version,h=A.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function d(C,x){C.getRGB(vr,Ra(A)),t.buffers.color.setClear(vr.r,vr.g,vr.b,x,n)}function f(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(C,x=1){a.set(C),s=x,d(a,s)},getClearAlpha:function(){return s},setClearAlpha:function(C){s=C,d(a,s)},render:v,addToRenderList:P,dispose:f}}function Rc(A,e){const t=A.getParameter(A.MAX_VERTEX_ATTRIBS),i={},r=h(null);let n=r,a=!1;function s(_,V,G,k,N){let X=!1;const L=u(_,k,G,V);n!==L&&(n=L,o(n.object)),X=g(_,k,G,N),X&&v(_,k,G,N),N!==null&&e.update(N,A.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,D(_,V,G,k),N!==null&&A.bindBuffer(A.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return A.createVertexArray()}function o(_){return A.bindVertexArray(_)}function c(_){return A.deleteVertexArray(_)}function u(_,V,G,k){const N=k.wireframe===!0;let X=i[V.id];X===void 0&&(X={},i[V.id]=X);const L=_.isInstancedMesh===!0?_.id:0;let J=X[L];J===void 0&&(J={},X[L]=J);let AA=J[G.id];AA===void 0&&(AA={},J[G.id]=AA);let eA=AA[N];return eA===void 0&&(eA=h(l()),AA[N]=eA),eA}function h(_){const V=[],G=[],k=[];for(let N=0;N<t;N++)V[N]=0,G[N]=0,k[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:G,attributeDivisors:k,object:_,attributes:{},index:null}}function g(_,V,G,k){const N=n.attributes,X=V.attributes;let L=0;const J=G.getAttributes();for(const AA in J)if(J[AA].location>=0){const eA=N[AA];let hA=X[AA];if(hA===void 0&&(AA==="instanceMatrix"&&_.instanceMatrix&&(hA=_.instanceMatrix),AA==="instanceColor"&&_.instanceColor&&(hA=_.instanceColor)),eA===void 0||eA.attribute!==hA||hA&&eA.data!==hA.data)return!0;L++}return n.attributesNum!==L||n.index!==k}function v(_,V,G,k){const N={},X=V.attributes;let L=0;const J=G.getAttributes();for(const AA in J)if(J[AA].location>=0){let eA=X[AA];eA===void 0&&(AA==="instanceMatrix"&&_.instanceMatrix&&(eA=_.instanceMatrix),AA==="instanceColor"&&_.instanceColor&&(eA=_.instanceColor));const hA={};hA.attribute=eA,eA&&eA.data&&(hA.data=eA.data),N[AA]=hA,L++}n.attributes=N,n.attributesNum=L,n.index=k}function P(){const _=n.newAttributes;for(let V=0,G=_.length;V<G;V++)_[V]=0}function d(_){f(_,0)}function f(_,V){const G=n.newAttributes,k=n.enabledAttributes,N=n.attributeDivisors;G[_]=1,k[_]===0&&(A.enableVertexAttribArray(_),k[_]=1),N[_]!==V&&(A.vertexAttribDivisor(_,V),N[_]=V)}function C(){const _=n.newAttributes,V=n.enabledAttributes;for(let G=0,k=V.length;G<k;G++)V[G]!==_[G]&&(A.disableVertexAttribArray(G),V[G]=0)}function x(_,V,G,k,N,X,L){L===!0?A.vertexAttribIPointer(_,V,G,N,X):A.vertexAttribPointer(_,V,G,k,N,X)}function D(_,V,G,k){P();const N=k.attributes,X=G.getAttributes(),L=V.defaultAttributeValues;for(const J in X){const AA=X[J];if(AA.location>=0){let eA=N[J];if(eA===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(eA=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(eA=_.instanceColor)),eA!==void 0){const hA=eA.normalized,PA=eA.itemSize,kA=e.get(eA);if(kA===void 0)continue;const YA=kA.buffer,Y=kA.type,iA=kA.bytesPerElement,fA=Y===A.INT||Y===A.UNSIGNED_INT||eA.gpuType===1013;if(eA.isInterleavedBufferAttribute){const uA=eA.data,CA=uA.stride,_A=eA.offset;if(uA.isInstancedInterleavedBuffer){for(let QA=0;QA<AA.locationSize;QA++)f(AA.location+QA,uA.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=uA.meshPerAttribute*uA.count)}else for(let QA=0;QA<AA.locationSize;QA++)d(AA.location+QA);A.bindBuffer(A.ARRAY_BUFFER,YA);for(let QA=0;QA<AA.locationSize;QA++)x(AA.location+QA,PA/AA.locationSize,Y,hA,CA*iA,(_A+PA/AA.locationSize*QA)*iA,fA)}else{if(eA.isInstancedBufferAttribute){for(let uA=0;uA<AA.locationSize;uA++)f(AA.location+uA,eA.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=eA.meshPerAttribute*eA.count)}else for(let uA=0;uA<AA.locationSize;uA++)d(AA.location+uA);A.bindBuffer(A.ARRAY_BUFFER,YA);for(let uA=0;uA<AA.locationSize;uA++)x(AA.location+uA,PA/AA.locationSize,Y,hA,PA*iA,PA/AA.locationSize*uA*iA,fA)}}else if(L!==void 0){const hA=L[J];if(hA!==void 0)switch(hA.length){case 2:A.vertexAttrib2fv(AA.location,hA);break;case 3:A.vertexAttrib3fv(AA.location,hA);break;case 4:A.vertexAttrib4fv(AA.location,hA);break;default:A.vertexAttrib1fv(AA.location,hA)}}}}C()}function M(){B();for(const _ in i){const V=i[_];for(const G in V){const k=V[G];for(const N in k){const X=k[N];for(const L in X)c(X[L].object),delete X[L];delete k[N]}}delete i[_]}}function S(_){if(i[_.id]===void 0)return;const V=i[_.id];for(const G in V){const k=V[G];for(const N in k){const X=k[N];for(const L in X)c(X[L].object),delete X[L];delete k[N]}}delete i[_.id]}function y(_){for(const V in i){const G=i[V];for(const k in G){const N=G[k];if(N[_.id]===void 0)continue;const X=N[_.id];for(const L in X)c(X[L].object),delete X[L];delete N[_.id]}}}function m(_){for(const V in i){const G=i[V],k=_.isInstancedMesh===!0?_.id:0,N=G[k];if(N!==void 0){for(const X in N){const L=N[X];for(const J in L)c(L[J].object),delete L[J];delete N[X]}delete G[k],Object.keys(G).length===0&&delete i[V]}}}function B(){W(),a=!0,n!==r&&(n=r,o(n.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:B,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:m,releaseStatesOfProgram:y,initAttributes:P,enableAttribute:d,disableUnusedAttributes:C}}function Lc(A,e,t){let i;function r(l){i=l}function n(l,o){A.drawArrays(i,l,o),t.update(o,i,1)}function a(l,o,c){c!==0&&(A.drawArraysInstanced(i,l,o,c),t.update(o,i,c))}function s(l,o,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,o,0,c);let u=0;for(let h=0;h<c;h++)u+=o[h];t.update(u,i,1)}this.setMode=r,this.render=n,this.renderInstances=a,this.renderMultiDraw=s}function Uc(A,e,t,i){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=A.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==1023&&i.convert(y)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(y){const m=y===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==1009&&i.convert(y)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==1015&&!m)}function l(y){if(y==="highp"){if(A.getShaderPrecisionFormat(A.VERTEX_SHADER,A.HIGH_FLOAT).precision>0&&A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&A.getShaderPrecisionFormat(A.VERTEX_SHADER,A.MEDIUM_FLOAT).precision>0&&A.getShaderPrecisionFormat(A.FRAGMENT_SHADER,A.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const c=l(o);c!==o&&(MA("WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&MA("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=A.getParameter(A.MAX_TEXTURE_IMAGE_UNITS),v=A.getParameter(A.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=A.getParameter(A.MAX_TEXTURE_SIZE),d=A.getParameter(A.MAX_CUBE_MAP_TEXTURE_SIZE),f=A.getParameter(A.MAX_VERTEX_ATTRIBS),C=A.getParameter(A.MAX_VERTEX_UNIFORM_VECTORS),x=A.getParameter(A.MAX_VARYING_VECTORS),D=A.getParameter(A.MAX_FRAGMENT_UNIFORM_VECTORS),M=A.getParameter(A.MAX_SAMPLES),S=A.getParameter(A.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:o,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:v,maxTextureSize:P,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:C,maxVaryings:x,maxFragmentUniforms:D,maxSamples:M,samples:S}}function Fc(A){const e=this;let t=null,i=0,r=!1,n=!1;const a=new It,s=new bA,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const g=u.length!==0||h||i!==0||r;return r=h,i=u.length,g},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(u,h){t=c(u,h,0)},this.setState=function(u,h,g){const v=u.clippingPlanes,P=u.clipIntersection,d=u.clipShadows,f=A.get(u);if(!r||v===null||v.length===0||n&&!d)n?c(null):o();else{const C=n?0:i,x=C*4;let D=f.clippingState||null;l.value=D,D=c(v,h,x,g);for(let M=0;M!==x;++M)D[M]=t[M];f.clippingState=D,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=C}};function o(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(u,h,g,v){const P=u!==null?u.length:0;let d=null;if(P!==0){if(d=l.value,v!==!0||d===null){const f=g+P*4,C=h.matrixWorldInverse;s.getNormalMatrix(C),(d===null||d.length<f)&&(d=new Float32Array(f));for(let x=0,D=g;x!==P;++x,D+=4)a.copy(u[x]).applyMatrix4(C,s),a.normal.toArray(d,D),d[D+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,d}}var Dt=4,Wa=[.125,.215,.35,.446,.526,.582],Rt=20,zc=256,bi=new mr,Xa=new OA,hn=null,un=0,fn=0,dn=!1,Nc=new z,Ya=class{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(A,e=0,t=.1,i=100,r={}){const{size:n=256,position:a=Nc}=r;hn=this._renderer.getRenderTarget(),un=this._renderer.getActiveCubeFace(),fn=this._renderer.getActiveMipmapLevel(),dn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(A,t,i,s,a),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodMeshes.length;A++)this._lodMeshes[A].geometry.dispose()}_cleanup(A){this._renderer.setRenderTarget(hn,un,fn),this._renderer.xr.enabled=dn,A.scissorTest=!1,ai(A,0,0,A.width,A.height)}_fromTexture(A,e){A.mapping===301||A.mapping===302?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),hn=this._renderer.getRenderTarget(),un=this._renderer.getActiveCubeFace(),fn=this._renderer.getActiveMipmapLevel(),dn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const t=e||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Ct,format:pi,colorSpace:Ir,depthBuffer:!1},i=ja(A,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(A,e,t);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Hc(r)),this._blurMaterial=Vc(r,A,e),this._ggxMaterial=Oc(r,A,e)}return i}_compileMaterial(A){const e=new ze(new Qt,A);this._renderer.compile(e,bi)}_sceneToCubeUV(A,e,t,i,r){const n=new Ge(90,1,e,t),a=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,o=l.autoClear,c=l.toneMapping;l.getClearColor(Xa),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new sn,new _a({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,h=u.material;let g=!1;const v=A.background;v?v.isColor&&(h.color.copy(v),A.background=null,g=!0):(h.color.copy(Xa),g=!0);for(let P=0;P<6;P++){const d=P%3;d===0?(n.up.set(0,a[P],0),n.position.set(r.x,r.y,r.z),n.lookAt(r.x+s[P],r.y,r.z)):d===1?(n.up.set(0,0,a[P]),n.position.set(r.x,r.y,r.z),n.lookAt(r.x,r.y+s[P],r.z)):(n.up.set(0,a[P],0),n.position.set(r.x,r.y,r.z),n.lookAt(r.x,r.y,r.z+s[P]));const f=this._cubeSize;ai(i,d*f,P>2?f:0,f,f),l.setRenderTarget(i),g&&l.render(u,n),l.render(A,n)}l.toneMapping=c,l.autoClear=o,A.background=v}_textureToCubeUV(A,e){const t=this._renderer,i=A.mapping===301||A.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const r=i?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=r;const a=r.uniforms;a.envMap.value=A;const s=this._cubeSize;ai(e,0,0,3*s,2*s),t.setRenderTarget(e),t.render(n,bi)}_applyPMREM(A){const e=this._renderer,t=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(A,r-1,r);e.autoClear=t}_applyGGXFilter(A,e,t){const i=this._renderer,r=this._pingPongRenderTarget,n=this._ggxMaterial,a=this._lodMeshes[t];a.material=n;const s=n.uniforms,l=t/(this._lodMeshes.length-1),o=e/(this._lodMeshes.length-1),c=Math.sqrt(l*l-o*o)*(0+l*1.25),{_lodMax:u}=this,h=this._sizeLods[t],g=3*h*(t>u-Dt?t-u+Dt:0),v=4*(this._cubeSize-h);s.envMap.value=A.texture,s.roughness.value=c,s.mipInt.value=u-e,ai(r,g,v,3*h,2*h),i.setRenderTarget(r),i.render(a,bi),s.envMap.value=r.texture,s.roughness.value=0,s.mipInt.value=u-t,ai(A,g,v,3*h,2*h),i.setRenderTarget(A),i.render(a,bi)}_blur(A,e,t,i,r){const n=this._pingPongRenderTarget;this._halfBlur(A,n,e,t,i,"latitudinal",r),this._halfBlur(n,A,t,t,i,"longitudinal",r)}_halfBlur(A,e,t,i,r,n,a){const s=this._renderer,l=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&yA("blur direction must be either latitudinal or longitudinal!");const o=3,c=this._lodMeshes[i];c.material=l;const u=l.uniforms,h=this._sizeLods[t]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Rt-1),v=r/g,P=isFinite(r)?1+Math.floor(o*v):Rt;P>Rt&&MA(`sigmaRadians, ${r}, is too large and will clip, as it requested ${P} samples when the maximum is set to ${Rt}`);const d=[];let f=0;for(let D=0;D<Rt;++D){const M=D/v,S=Math.exp(-M*M/2);d.push(S),D===0?f+=S:D<P&&(f+=2*S)}for(let D=0;D<d.length;D++)d[D]=d[D]/f;u.envMap.value=A.texture,u.samples.value=P,u.weights.value=d,u.latitudinal.value=n==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:C}=this;u.dTheta.value=g,u.mipInt.value=C-t;const x=this._sizeLods[i];ai(e,3*x*(i>C-Dt?i-C+Dt:0),4*(this._cubeSize-x),3*x,2*x),s.setRenderTarget(e),s.render(c,bi)}};function Hc(A){const e=[],t=[],i=[];let r=A;const n=A-Dt+1+Wa.length;for(let a=0;a<n;a++){const s=Math.pow(2,r);e.push(s);let l=1/s;a>A-Dt?l=Wa[a-A+Dt-1]:a===0&&(l=0),t.push(l);const o=1/(s-2),c=-o,u=1+o,h=[c,c,u,c,u,u,c,c,u,u,c,u],g=6,v=6,P=3,d=2,f=1,C=new Float32Array(P*v*g),x=new Float32Array(d*v*g),D=new Float32Array(f*v*g);for(let S=0;S<g;S++){const y=S%3*2/3-1,m=S>2?0:-1,B=[y,m,0,y+2/3,m,0,y+2/3,m+1,0,y,m,0,y+2/3,m+1,0,y,m+1,0];C.set(B,P*v*S),x.set(h,d*v*S);const W=[S,S,S,S,S,S];D.set(W,f*v*S)}const M=new Qt;M.setAttribute("position",new je(C,P)),M.setAttribute("uv",new je(x,d)),M.setAttribute("faceIndex",new je(D,f)),i.push(new ze(M,null)),r>Dt&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ja(A,e,t){const i=new Ye(A,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ai(A,e,t,i,r){A.viewport.set(e,t,i,r),A.scissor.set(e,t,i,r)}function Oc(A,e,t){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zc,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${A}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Vc(A,e,t){const i=new Float32Array(Rt),r=new z(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Rt,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${A}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ka(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ja(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var qa=class extends Ye{constructor(A=1,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},i=[t,t,t,t,t,t];this.texture=new Ta(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new sn(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:ii(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const n=new ze(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=Ce),new vc(1,10,this).update(A,n),e.minFilter=a,n.geometry.dispose(),n.material.dispose(),this}clear(A,e=!0,t=!0,i=!0){const r=A.getRenderTarget();for(let n=0;n<6;n++)A.setRenderTarget(this,n),A.clear(e,t,i);A.setRenderTarget(r)}};function kc(A){let e=new WeakMap,t=new WeakMap,i=null;function r(h,g=!1){return h==null?null:g?a(h):n(h)}function n(h){if(h&&h.isTexture){const g=h.mapping;if(g===303||g===304)if(e.has(h)){const v=e.get(h).texture;return s(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const P=new qa(v.height);return P.fromEquirectangularTexture(A,h),e.set(h,P),h.addEventListener("dispose",o),s(P.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const g=h.mapping,v=g===303||g===304,P=g===301||g===302;if(v||P){let d=t.get(h);const f=d!==void 0?d.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Ya(A)),d=v?i.fromEquirectangular(h,d):i.fromCubemap(h,d),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),d.texture;if(d!==void 0)return d.texture;{const C=h.image;return v&&C&&C.height>0||P&&C&&l(C)?(i===null&&(i=new Ya(A)),d=v?i.fromEquirectangular(h):i.fromCubemap(h),d.texture.pmremVersion=h.pmremVersion,t.set(h,d),h.addEventListener("dispose",c),d.texture):null}}}return h}function s(h,g){return g===303?h.mapping=301:g===304&&(h.mapping=302),h}function l(h){let g=0;const v=6;for(let P=0;P<v;P++)h[P]!==void 0&&g++;return g===v}function o(h){const g=h.target;g.removeEventListener("dispose",o);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function c(h){const g=h.target;g.removeEventListener("dispose",c);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function Gc(A){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=A.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vt("WebGLRenderer: "+i+" extension not supported."),r}}}function Wc(A,e,t,i){const r={},n=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const g=n.get(h);g&&(e.remove(g),n.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(u,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)e.update(h[g],A.ARRAY_BUFFER)}function o(u){const h=[],g=u.index,v=u.attributes.position;let P=0;if(v===void 0)return;if(g!==null){const C=g.array;P=g.version;for(let x=0,D=C.length;x<D;x+=3){const M=C[x+0],S=C[x+1],y=C[x+2];h.push(M,S,S,y,y,M)}}else{const C=v.array;P=v.version;for(let x=0,D=C.length/3-1;x<D;x+=3){const M=x+0,S=x+1,y=x+2;h.push(M,S,S,y,y,M)}}const d=new(v.count>=65535?xa:Ca)(h,1);d.version=P;const f=n.get(u);f&&e.remove(f),n.set(u,d)}function c(u){const h=n.get(u);if(h){const g=u.index;g!==null&&h.version<g.version&&o(u)}else o(u);return n.get(u)}return{get:s,update:l,getWireframeAttribute:c}}function Xc(A,e,t){let i;function r(u){i=u}let n,a;function s(u){n=u.type,a=u.bytesPerElement}function l(u,h){A.drawElements(i,h,n,u*a),t.update(h,i,1)}function o(u,h,g){g!==0&&(A.drawElementsInstanced(i,h,n,u*a,g),t.update(h,i,g))}function c(u,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,n,u,0,g);let v=0;for(let P=0;P<g;P++)v+=h[P];t.update(v,i,1)}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=o,this.renderMultiDraw=c}function Yc(A){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,a,s){switch(t.calls++,a){case A.TRIANGLES:t.triangles+=s*(n/3);break;case A.LINES:t.lines+=s*(n/2);break;case A.LINE_STRIP:t.lines+=s*(n-1);break;case A.LINE_LOOP:t.lines+=s*n;break;case A.POINTS:t.points+=s*n;break;default:yA("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function jc(A,e,t){const i=new WeakMap,r=new ie;function n(a,s,l){const o=a.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,u=c!==void 0?c.length:0;let h=i.get(s);if(h===void 0||h.count!==u){let g=function(){m.dispose(),i.delete(s),s.removeEventListener("dispose",g)};h!==void 0&&h.texture.dispose();const v=s.morphAttributes.position!==void 0,P=s.morphAttributes.normal!==void 0,d=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],C=s.morphAttributes.normal||[],x=s.morphAttributes.color||[];let D=0;v===!0&&(D=1),P===!0&&(D=2),d===!0&&(D=3);let M=s.attributes.position.count*D,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const y=new Float32Array(M*S*4*u),m=new da(y,M,S,u);m.type=Gi,m.needsUpdate=!0;const B=D*4;for(let W=0;W<u;W++){const _=f[W],V=C[W],G=x[W],k=M*S*4*W;for(let N=0;N<_.count;N++){const X=N*B;v===!0&&(r.fromBufferAttribute(_,N),y[k+X+0]=r.x,y[k+X+1]=r.y,y[k+X+2]=r.z,y[k+X+3]=0),P===!0&&(r.fromBufferAttribute(V,N),y[k+X+4]=r.x,y[k+X+5]=r.y,y[k+X+6]=r.z,y[k+X+7]=0),d===!0&&(r.fromBufferAttribute(G,N),y[k+X+8]=r.x,y[k+X+9]=r.y,y[k+X+10]=r.z,y[k+X+11]=G.itemSize===4?r.w:1)}}h={count:u,texture:m,size:new IA(M,S)},i.set(s,h),s.addEventListener("dispose",g)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(A,"morphTexture",a.morphTexture,t);else{let g=0;for(let P=0;P<o.length;P++)g+=o[P];const v=s.morphTargetsRelative?1:1-g;l.getUniforms().setValue(A,"morphTargetBaseInfluence",v),l.getUniforms().setValue(A,"morphTargetInfluences",o)}l.getUniforms().setValue(A,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(A,"morphTargetsTextureSize",h.size)}return{update:n}}function Kc(A,e,t,i,r){let n=new WeakMap;function a(o){const c=r.render.frame,u=o.geometry,h=e.get(o,u);if(n.get(h)!==c&&(e.update(h),n.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),n.get(o)!==c&&(t.update(o.instanceMatrix,A.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,A.ARRAY_BUFFER),n.set(o,c))),o.isSkinnedMesh){const g=o.skeleton;n.get(g)!==c&&(g.update(),n.set(g,c))}return h}function s(){n=new WeakMap}function l(o){const c=o.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}var Jc={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function qc(A,e,t,i,r,n){const a=new Ye(e,t,{type:A,depthBuffer:r,stencilBuffer:n,samples:i?4:0,depthTexture:r?new ti(e,t):void 0}),s=new Ye(e,t,{type:Ct,depthBuffer:!1,stencilBuffer:!1}),l=new Qt;l.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new at([0,2,0,0,2,0],2));const o=new Ac({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ze(l,o),u=new mr(-1,1,1,-1,0,1);let h=null,g=null,v=!1,P,d=null,f=[],C=!1;this.setSize=function(x,D){a.setSize(x,D),s.setSize(x,D);for(let M=0;M<f.length;M++){const S=f[M];S.setSize&&S.setSize(x,D)}},this.setEffects=function(x){f=x,C=f.length>0&&f[0].isRenderPass===!0;const D=a.width,M=a.height;for(let S=0;S<f.length;S++){const y=f[S];y.setSize&&y.setSize(D,M)}},this.begin=function(x,D){if(v||x.toneMapping===0&&f.length===0)return!1;if(d=D,D!==null){const M=D.width,S=D.height;(a.width!==M||a.height!==S)&&this.setSize(M,S)}return C===!1&&x.setRenderTarget(a),P=x.toneMapping,x.toneMapping=0,!0},this.hasRenderPass=function(){return C},this.end=function(x,D){x.toneMapping=P,v=!0;let M=a,S=s;for(let y=0;y<f.length;y++){const m=f[y];if(m.enabled!==!1&&(m.render(x,S,M,D),m.needsSwap!==!1)){const B=M;M=S,S=B}}if(h!==x.outputColorSpace||g!==x.toneMapping){h=x.outputColorSpace,g=x.toneMapping,o.defines={},HA.getTransfer(h)==="srgb"&&(o.defines.SRGB_TRANSFER="");const y=Jc[g];y&&(o.defines[y]=""),o.needsUpdate=!0}o.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(d),x.render(c,u),d=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),s.dispose(),l.dispose(),o.dispose()}}var Za=new Ue,gn=new ti(1,1),$a=new da,As=new yl,es=new Ta,ts=[],is=[],rs=new Float32Array(16),ns=new Float32Array(9),as=new Float32Array(4);function si(A,e,t){const i=A[0];if(i<=0||i>0)return A;const r=e*t;let n=ts[r];if(n===void 0&&(n=new Float32Array(r),ts[r]=n),e!==0){i.toArray(n,0);for(let a=1,s=0;a!==e;++a)s+=t,A[a].toArray(n,s)}return n}function le(A,e){if(A.length!==e.length)return!1;for(let t=0,i=A.length;t<i;t++)if(A[t]!==e[t])return!1;return!0}function ce(A,e){for(let t=0,i=e.length;t<i;t++)A[t]=e[t]}function Pr(A,e){let t=is[e];t===void 0&&(t=new Int32Array(e),is[e]=t);for(let i=0;i!==e;++i)t[i]=A.allocateTextureUnit();return t}function Zc(A,e){const t=this.cache;t[0]!==e&&(A.uniform1f(this.addr,e),t[0]=e)}function $c(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(le(t,e))return;A.uniform2fv(this.addr,e),ce(t,e)}}function Ah(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(A.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(le(t,e))return;A.uniform3fv(this.addr,e),ce(t,e)}}function eh(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(le(t,e))return;A.uniform4fv(this.addr,e),ce(t,e)}}function th(A,e){const t=this.cache,i=e.elements;if(i===void 0){if(le(t,e))return;A.uniformMatrix2fv(this.addr,!1,e),ce(t,e)}else{if(le(t,i))return;as.set(i),A.uniformMatrix2fv(this.addr,!1,as),ce(t,i)}}function ih(A,e){const t=this.cache,i=e.elements;if(i===void 0){if(le(t,e))return;A.uniformMatrix3fv(this.addr,!1,e),ce(t,e)}else{if(le(t,i))return;ns.set(i),A.uniformMatrix3fv(this.addr,!1,ns),ce(t,i)}}function rh(A,e){const t=this.cache,i=e.elements;if(i===void 0){if(le(t,e))return;A.uniformMatrix4fv(this.addr,!1,e),ce(t,e)}else{if(le(t,i))return;rs.set(i),A.uniformMatrix4fv(this.addr,!1,rs),ce(t,i)}}function nh(A,e){const t=this.cache;t[0]!==e&&(A.uniform1i(this.addr,e),t[0]=e)}function ah(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(le(t,e))return;A.uniform2iv(this.addr,e),ce(t,e)}}function sh(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(le(t,e))return;A.uniform3iv(this.addr,e),ce(t,e)}}function oh(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(le(t,e))return;A.uniform4iv(this.addr,e),ce(t,e)}}function lh(A,e){const t=this.cache;t[0]!==e&&(A.uniform1ui(this.addr,e),t[0]=e)}function ch(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(le(t,e))return;A.uniform2uiv(this.addr,e),ce(t,e)}}function hh(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(le(t,e))return;A.uniform3uiv(this.addr,e),ce(t,e)}}function uh(A,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(le(t,e))return;A.uniform4uiv(this.addr,e),ce(t,e)}}function fh(A,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r);let n;this.type===A.SAMPLER_2D_SHADOW?(gn.compareFunction=t.isReversedDepthBuffer()?518:515,n=gn):n=Za,t.setTexture2D(e||n,r)}function dh(A,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||As,r)}function gh(A,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||es,r)}function ph(A,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$a,r)}function mh(A){switch(A){case 5126:return Zc;case 35664:return $c;case 35665:return Ah;case 35666:return eh;case 35674:return th;case 35675:return ih;case 35676:return rh;case 5124:case 35670:return nh;case 35667:case 35671:return ah;case 35668:case 35672:return sh;case 35669:case 35673:return oh;case 5125:return lh;case 36294:return ch;case 36295:return hh;case 36296:return uh;case 35678:case 36198:case 36298:case 36306:case 35682:return fh;case 35679:case 36299:case 36307:return dh;case 35680:case 36300:case 36308:case 36293:return gh;case 36289:case 36303:case 36311:case 36292:return ph}}function vh(A,e){A.uniform1fv(this.addr,e)}function wh(A,e){const t=si(e,this.size,2);A.uniform2fv(this.addr,t)}function Ph(A,e){const t=si(e,this.size,3);A.uniform3fv(this.addr,t)}function Dh(A,e){const t=si(e,this.size,4);A.uniform4fv(this.addr,t)}function Eh(A,e){const t=si(e,this.size,4);A.uniformMatrix2fv(this.addr,!1,t)}function Bh(A,e){const t=si(e,this.size,9);A.uniformMatrix3fv(this.addr,!1,t)}function Mh(A,e){const t=si(e,this.size,16);A.uniformMatrix4fv(this.addr,!1,t)}function Ch(A,e){A.uniform1iv(this.addr,e)}function xh(A,e){A.uniform2iv(this.addr,e)}function _h(A,e){A.uniform3iv(this.addr,e)}function Sh(A,e){A.uniform4iv(this.addr,e)}function yh(A,e){A.uniform1uiv(this.addr,e)}function Qh(A,e){A.uniform2uiv(this.addr,e)}function Th(A,e){A.uniform3uiv(this.addr,e)}function Ih(A,e){A.uniform4uiv(this.addr,e)}function bh(A,e,t){const i=this.cache,r=e.length,n=Pr(t,r);le(i,n)||(A.uniform1iv(this.addr,n),ce(i,n));let a;this.type===A.SAMPLER_2D_SHADOW?a=gn:a=Za;for(let s=0;s!==r;++s)t.setTexture2D(e[s]||a,n[s])}function Rh(A,e,t){const i=this.cache,r=e.length,n=Pr(t,r);le(i,n)||(A.uniform1iv(this.addr,n),ce(i,n));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||As,n[a])}function Lh(A,e,t){const i=this.cache,r=e.length,n=Pr(t,r);le(i,n)||(A.uniform1iv(this.addr,n),ce(i,n));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||es,n[a])}function Uh(A,e,t){const i=this.cache,r=e.length,n=Pr(t,r);le(i,n)||(A.uniform1iv(this.addr,n),ce(i,n));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$a,n[a])}function Fh(A){switch(A){case 5126:return vh;case 35664:return wh;case 35665:return Ph;case 35666:return Dh;case 35674:return Eh;case 35675:return Bh;case 35676:return Mh;case 5124:case 35670:return Ch;case 35667:case 35671:return xh;case 35668:case 35672:return _h;case 35669:case 35673:return Sh;case 5125:return yh;case 36294:return Qh;case 36295:return Th;case 36296:return Ih;case 35678:case 36198:case 36298:case 36306:case 35682:return bh;case 35679:case 36299:case 36307:return Rh;case 35680:case 36300:case 36308:case 36293:return Lh;case 36289:case 36303:case 36311:case 36292:return Uh}}var zh=class{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.type=e.type,this.setValue=mh(e.type)}},Nh=class{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fh(e.type)}},Hh=class{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,t){const i=this.seq;for(let r=0,n=i.length;r!==n;++r){const a=i[r];a.setValue(A,e[a.id],t)}}},pn=/(\w+)(\])?(\[|\.)?/g;function ss(A,e){A.seq.push(e),A.map[e.id]=e}function Oh(A,e,t){const i=A.name,r=i.length;for(pn.lastIndex=0;;){const n=pn.exec(i),a=pn.lastIndex;let s=n[1];const l=n[2]==="]",o=n[3];if(l&&(s=s|0),o===void 0||o==="["&&a+2===r){ss(t,o===void 0?new zh(s,A,e):new Nh(s,A,e));break}else{let c=t.map[s];c===void 0&&(c=new Hh(s),ss(t,c)),t=c}}}var Dr=class{constructor(A,e){this.seq=[],this.map={};const t=A.getProgramParameter(e,A.ACTIVE_UNIFORMS);for(let n=0;n<t;++n){const a=A.getActiveUniform(e,n);Oh(a,A.getUniformLocation(e,a.name),this)}const i=[],r=[];for(const n of this.seq)n.type===A.SAMPLER_2D_SHADOW||n.type===A.SAMPLER_CUBE_SHADOW||n.type===A.SAMPLER_2D_ARRAY_SHADOW?i.push(n):r.push(n);i.length>0&&(this.seq=i.concat(r))}setValue(A,e,t,i){const r=this.map[e];r!==void 0&&r.setValue(A,t,i)}setOptional(A,e,t){const i=e[t];i!==void 0&&this.setValue(A,t,i)}static upload(A,e,t,i){for(let r=0,n=e.length;r!==n;++r){const a=e[r],s=t[a.id];s.needsUpdate!==!1&&a.setValue(A,s.value,i)}}static seqWithValue(A,e){const t=[];for(let i=0,r=A.length;i!==r;++i){const n=A[i];n.id in e&&t.push(n)}return t}};function os(A,e,t){const i=A.createShader(e);return A.shaderSource(i,t),A.compileShader(i),i}var Vh=37297,kh=0;function Gh(A,e){const t=A.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=r;a<n;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}var ls=new bA;function Wh(A){HA._getMatrix(ls,HA.workingColorSpace,A);const e=`mat3( ${ls.elements.map(t=>t.toFixed(4))} )`;switch(HA.getTransfer(A)){case Yi:return[e,"LinearTransferOETF"];case ji:return[e,"sRGBTransferOETF"];default:return MA("WebGLProgram: Unsupported color space: ",A),[e,"LinearTransferOETF"]}}function cs(A,e,t){const i=A.getShaderParameter(e,A.COMPILE_STATUS),r=(A.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const a=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+Gh(A.getShaderSource(e),a)}else return r}function Xh(A,e){const t=Wh(e);return[`vec4 ${A}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Yh={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function jh(A,e){const t=Yh[e];return t===void 0?(MA("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+A+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+A+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Er=new z;function Kh(){return HA.getLuminanceCoefficients(Er),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Er.x.toFixed(4)}, ${Er.y.toFixed(4)}, ${Er.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jh(A){return[A.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",A.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function qh(A){const e=[];for(const t in A){const i=A[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Zh(A,e){const t={},i=A.getProgramParameter(e,A.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const n=A.getActiveAttrib(e,r),a=n.name;let s=1;n.type===A.FLOAT_MAT2&&(s=2),n.type===A.FLOAT_MAT3&&(s=3),n.type===A.FLOAT_MAT4&&(s=4),t[a]={type:n.type,location:A.getAttribLocation(e,a),locationSize:s}}return t}function Ri(A){return A!==""}function hs(A,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return A.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function us(A,e){return A.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $h=/^[ \t]*#include +<([\w\d./]+)>/gm;function mn(A){return A.replace($h,eu)}var Au=new Map;function eu(A,e){let t=RA[e];if(t===void 0){const i=Au.get(e);if(i!==void 0)t=RA[i],MA('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mn(t)}var tu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fs(A){return A.replace(tu,iu)}function iu(A,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function ds(A){let e=`precision ${A.precision} float;
	precision ${A.precision} int;
	precision ${A.precision} sampler2D;
	precision ${A.precision} samplerCube;
	precision ${A.precision} sampler3D;
	precision ${A.precision} sampler2DArray;
	precision ${A.precision} sampler2DShadow;
	precision ${A.precision} samplerCubeShadow;
	precision ${A.precision} sampler2DArrayShadow;
	precision ${A.precision} isampler2D;
	precision ${A.precision} isampler3D;
	precision ${A.precision} isamplerCube;
	precision ${A.precision} isampler2DArray;
	precision ${A.precision} usampler2D;
	precision ${A.precision} usampler3D;
	precision ${A.precision} usamplerCube;
	precision ${A.precision} usampler2DArray;
	`;return A.precision==="highp"?e+=`
#define HIGH_PRECISION`:A.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:A.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var ru={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function nu(A){return ru[A.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var au={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function su(A){return A.envMap===!1?"ENVMAP_TYPE_CUBE":au[A.envMapMode]||"ENVMAP_TYPE_CUBE"}var ou={302:"ENVMAP_MODE_REFRACTION"};function lu(A){return A.envMap===!1?"ENVMAP_MODE_REFLECTION":ou[A.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cu={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function hu(A){return A.envMap===!1?"ENVMAP_BLENDING_NONE":cu[A.combine]||"ENVMAP_BLENDING_NONE"}function uu(A){const e=A.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fu(A,e,t,i){const r=A.getContext(),n=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=nu(t),o=su(t),c=lu(t),u=hu(t),h=uu(t),g=Jh(t),v=qh(n),P=r.createProgram();let d,f,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),f.length>0&&(f+=`
`)):(d=[ds(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),f=[ds(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?RA.tonemapping_pars_fragment:"",t.toneMapping!==0?jh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",RA.colorspace_pars_fragment,Xh("linearToOutputTexel",t.outputColorSpace),Kh(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),a=mn(a),a=hs(a,t),a=us(a,t),s=mn(s),s=hs(s,t),s=us(s,t),a=fs(a),s=fs(s),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",t.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=C+d+a,D=C+f+s,M=os(r,r.VERTEX_SHADER,x),S=os(r,r.FRAGMENT_SHADER,D);r.attachShader(P,M),r.attachShader(P,S),t.index0AttributeName!==void 0?r.bindAttribLocation(P,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(P,0,"position"),r.linkProgram(P);function y(_){if(A.debug.checkShaderErrors){const V=r.getProgramInfoLog(P)||"",G=r.getShaderInfoLog(M)||"",k=r.getShaderInfoLog(S)||"",N=V.trim(),X=G.trim(),L=k.trim();let J=!0,AA=!0;if(r.getProgramParameter(P,r.LINK_STATUS)===!1)if(J=!1,typeof A.debug.onShaderError=="function")A.debug.onShaderError(r,P,M,S);else{const eA=cs(r,M,"vertex"),hA=cs(r,S,"fragment");yA("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(P,r.VALIDATE_STATUS)+`

Material Name: `+_.name+`
Material Type: `+_.type+`

Program Info Log: `+N+`
`+eA+`
`+hA)}else N!==""?MA("WebGLProgram: Program Info Log:",N):(X===""||L==="")&&(AA=!1);AA&&(_.diagnostics={runnable:J,programLog:N,vertexShader:{log:X,prefix:d},fragmentShader:{log:L,prefix:f}})}r.deleteShader(M),r.deleteShader(S),m=new Dr(r,P),B=Zh(r,P)}let m;this.getUniforms=function(){return m===void 0&&y(this),m};let B;this.getAttributes=function(){return B===void 0&&y(this),B};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(P,Vh)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kh++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=M,this.fragmentShader=S,this}var du=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A,e,t){const i=this._getShaderCacheForMaterial(A);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(t)===!1&&(i.add(t),t.usedTimes++),this}remove(A){const e=this.materialCache.get(A);for(const t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderStage(A){return this._getShaderStage(A.vertexShader)}getFragmentShaderStage(A){return this._getShaderStage(A.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const e=this.materialCache;let t=e.get(A);return t===void 0&&(t=new Set,e.set(A,t)),t}_getShaderStage(A){const e=this.shaderCache;let t=e.get(A);return t===void 0&&(t=new pu(A),e.set(A,t)),t}},pu=class{constructor(A){this.id=du++,this.code=A,this.usedTimes=0}};function mu(A){return A===1030||A===37490||A===36285}function vu(A,e,t,i,r,n){const a=new ma,s=new gu,l=new Set,o=[],c=new Map,u=i.logarithmicDepthBuffer;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}function P(m,B,W,_,V,G){const k=_.fog,N=V.geometry,X=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?_.environment:null,L=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,J=e.get(m.envMap||X,L),AA=J&&J.mapping===306?J.image.height:null,eA=g[m.type];m.precision!==null&&(h=i.getMaxPrecision(m.precision),h!==m.precision&&MA("WebGLProgram.getParameters:",m.precision,"not supported, using",h,"instead."));const hA=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,PA=hA!==void 0?hA.length:0;let kA=0;N.morphAttributes.position!==void 0&&(kA=1),N.morphAttributes.normal!==void 0&&(kA=2),N.morphAttributes.color!==void 0&&(kA=3);let YA,Y,iA,fA;if(eA){const xA=qe[eA];YA=xA.vertexShader,Y=xA.fragmentShader}else{YA=m.vertexShader,Y=m.fragmentShader;const xA=s.getVertexShaderStage(m),Pe=s.getFragmentShaderStage(m);s.update(m,xA,Pe),iA=xA.id,fA=Pe.id}const uA=A.getRenderTarget(),CA=A.state.buffers.depth.getReversed(),_A=V.isInstancedMesh===!0,QA=V.isBatchedMesh===!0,GA=!!m.map,NA=!!m.matcap,ZA=!!J,de=!!m.aoMap,Me=!!m.lightMap,be=!!m.bumpMap&&m.wireframe===!1,$A=!!m.normalMap,ge=!!m.displacementMap,ue=!!m.emissiveMap,oe=!!m.metalnessMap,T=!!m.roughnessMap,Re=m.anisotropy>0,WA=m.clearcoat>0,Ae=m.dispersion>0,E=m.iridescence>0,p=m.sheen>0,Q=m.transmission>0,O=Re&&!!m.anisotropyMap,K=WA&&!!m.clearcoatMap,nA=WA&&!!m.clearcoatNormalMap,oA=WA&&!!m.clearcoatRoughnessMap,b=E&&!!m.iridescenceMap,tA=E&&!!m.iridescenceThicknessMap,sA=p&&!!m.sheenColorMap,mA=p&&!!m.sheenRoughnessMap,$=!!m.specularMap,DA=!!m.specularColorMap,EA=!!m.specularIntensityMap,TA=Q&&!!m.transmissionMap,XA=Q&&!!m.thicknessMap,I=!!m.gradientMap,j=!!m.alphaMap,q=m.alphaTest>0,dA=!!m.alphaHash,vA=!!m.extensions;let Z=0;m.toneMapped&&(uA===null||uA.isXRRenderTarget===!0)&&(Z=A.toneMapping);const lA={shaderID:eA,shaderType:m.type,shaderName:m.name,vertexShader:YA,fragmentShader:Y,defines:m.defines,customVertexShaderID:iA,customFragmentShaderID:fA,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:h,batching:QA,batchingColor:QA&&V._colorsTexture!==null,instancing:_A,instancingColor:_A&&V.instanceColor!==null,instancingMorph:_A&&V.morphTexture!==null,outputColorSpace:uA===null?A.outputColorSpace:uA.isXRRenderTarget===!0?uA.texture.colorSpace:HA.workingColorSpace,alphaToCoverage:!!m.alphaToCoverage,map:GA,matcap:NA,envMap:ZA,envMapMode:ZA&&J.mapping,envMapCubeUVHeight:AA,aoMap:de,lightMap:Me,bumpMap:be,normalMap:$A,displacementMap:ge,emissiveMap:ue,normalMapObjectSpace:$A&&m.normalMapType===1,normalMapTangentSpace:$A&&m.normalMapType===0,packedNormalMap:$A&&m.normalMapType===0&&mu(m.normalMap.format),metalnessMap:oe,roughnessMap:T,anisotropy:Re,anisotropyMap:O,clearcoat:WA,clearcoatMap:K,clearcoatNormalMap:nA,clearcoatRoughnessMap:oA,dispersion:Ae,iridescence:E,iridescenceMap:b,iridescenceThicknessMap:tA,sheen:p,sheenColorMap:sA,sheenRoughnessMap:mA,specularMap:$,specularColorMap:DA,specularIntensityMap:EA,transmission:Q,transmissionMap:TA,thicknessMap:XA,gradientMap:I,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:j,alphaTest:q,alphaHash:dA,combine:m.combine,mapUv:GA&&v(m.map.channel),aoMapUv:de&&v(m.aoMap.channel),lightMapUv:Me&&v(m.lightMap.channel),bumpMapUv:be&&v(m.bumpMap.channel),normalMapUv:$A&&v(m.normalMap.channel),displacementMapUv:ge&&v(m.displacementMap.channel),emissiveMapUv:ue&&v(m.emissiveMap.channel),metalnessMapUv:oe&&v(m.metalnessMap.channel),roughnessMapUv:T&&v(m.roughnessMap.channel),anisotropyMapUv:O&&v(m.anisotropyMap.channel),clearcoatMapUv:K&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:nA&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oA&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:b&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:tA&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:sA&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:mA&&v(m.sheenRoughnessMap.channel),specularMapUv:$&&v(m.specularMap.channel),specularColorMapUv:DA&&v(m.specularColorMap.channel),specularIntensityMapUv:EA&&v(m.specularIntensityMap.channel),transmissionMapUv:TA&&v(m.transmissionMap.channel),thicknessMapUv:XA&&v(m.thicknessMap.channel),alphaMapUv:j&&v(m.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&($A||Re),vertexNormals:!!N.attributes.normal,vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!N.attributes.uv&&(GA||j),fog:!!k,useFog:m.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||N.attributes.normal===void 0&&$A===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:CA,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:PA,morphTextureStride:kA,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:m.dithering,shadowMapEnabled:A.shadowMap.enabled&&W.length>0,shadowMapType:A.shadowMap.type,toneMapping:Z,decodeVideoTexture:GA&&m.map.isVideoTexture===!0&&HA.getTransfer(m.map.colorSpace)==="srgb",decodeVideoTextureEmissive:ue&&m.emissiveMap.isVideoTexture===!0&&HA.getTransfer(m.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:vA&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vA&&m.extensions.multiDraw===!0||QA)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return lA.vertexUv1s=l.has(1),lA.vertexUv2s=l.has(2),lA.vertexUv3s=l.has(3),l.clear(),lA}function d(m){const B=[];if(m.shaderID?B.push(m.shaderID):(B.push(m.customVertexShaderID),B.push(m.customFragmentShaderID)),m.defines!==void 0)for(const W in m.defines)B.push(W),B.push(m.defines[W]);return m.isRawShaderMaterial===!1&&(f(B,m),C(B,m),B.push(A.outputColorSpace)),B.push(m.customProgramCacheKey),B.join()}function f(m,B){m.push(B.precision),m.push(B.outputColorSpace),m.push(B.envMapMode),m.push(B.envMapCubeUVHeight),m.push(B.mapUv),m.push(B.alphaMapUv),m.push(B.lightMapUv),m.push(B.aoMapUv),m.push(B.bumpMapUv),m.push(B.normalMapUv),m.push(B.displacementMapUv),m.push(B.emissiveMapUv),m.push(B.metalnessMapUv),m.push(B.roughnessMapUv),m.push(B.anisotropyMapUv),m.push(B.clearcoatMapUv),m.push(B.clearcoatNormalMapUv),m.push(B.clearcoatRoughnessMapUv),m.push(B.iridescenceMapUv),m.push(B.iridescenceThicknessMapUv),m.push(B.sheenColorMapUv),m.push(B.sheenRoughnessMapUv),m.push(B.specularMapUv),m.push(B.specularColorMapUv),m.push(B.specularIntensityMapUv),m.push(B.transmissionMapUv),m.push(B.thicknessMapUv),m.push(B.combine),m.push(B.fogExp2),m.push(B.sizeAttenuation),m.push(B.morphTargetsCount),m.push(B.morphAttributeCount),m.push(B.numDirLights),m.push(B.numPointLights),m.push(B.numSpotLights),m.push(B.numSpotLightMaps),m.push(B.numHemiLights),m.push(B.numRectAreaLights),m.push(B.numDirLightShadows),m.push(B.numPointLightShadows),m.push(B.numSpotLightShadows),m.push(B.numSpotLightShadowsWithMaps),m.push(B.numLightProbes),m.push(B.shadowMapType),m.push(B.toneMapping),m.push(B.numClippingPlanes),m.push(B.numClipIntersection),m.push(B.depthPacking)}function C(m,B){a.disableAll(),B.instancing&&a.enable(0),B.instancingColor&&a.enable(1),B.instancingMorph&&a.enable(2),B.matcap&&a.enable(3),B.envMap&&a.enable(4),B.normalMapObjectSpace&&a.enable(5),B.normalMapTangentSpace&&a.enable(6),B.clearcoat&&a.enable(7),B.iridescence&&a.enable(8),B.alphaTest&&a.enable(9),B.vertexColors&&a.enable(10),B.vertexAlphas&&a.enable(11),B.vertexUv1s&&a.enable(12),B.vertexUv2s&&a.enable(13),B.vertexUv3s&&a.enable(14),B.vertexTangents&&a.enable(15),B.anisotropy&&a.enable(16),B.alphaHash&&a.enable(17),B.batching&&a.enable(18),B.dispersion&&a.enable(19),B.batchingColor&&a.enable(20),B.gradientMap&&a.enable(21),B.packedNormalMap&&a.enable(22),B.vertexNormals&&a.enable(23),m.push(a.mask),a.disableAll(),B.fog&&a.enable(0),B.useFog&&a.enable(1),B.flatShading&&a.enable(2),B.logarithmicDepthBuffer&&a.enable(3),B.reversedDepthBuffer&&a.enable(4),B.skinning&&a.enable(5),B.morphTargets&&a.enable(6),B.morphNormals&&a.enable(7),B.morphColors&&a.enable(8),B.premultipliedAlpha&&a.enable(9),B.shadowMapEnabled&&a.enable(10),B.doubleSided&&a.enable(11),B.flipSided&&a.enable(12),B.useDepthPacking&&a.enable(13),B.dithering&&a.enable(14),B.transmission&&a.enable(15),B.sheen&&a.enable(16),B.opaque&&a.enable(17),B.pointsUvs&&a.enable(18),B.decodeVideoTexture&&a.enable(19),B.decodeVideoTextureEmissive&&a.enable(20),B.alphaToCoverage&&a.enable(21),B.numLightProbeGrids>0&&a.enable(22),B.hasPositionAttribute&&a.enable(23),m.push(a.mask)}function x(m){const B=g[m.type];let W;if(B){const _=qe[B];W=La.clone(_.uniforms)}else W=m.uniforms;return W}function D(m,B){let W=c.get(B);return W!==void 0?++W.usedTimes:(W=new fu(A,B,m,r),o.push(W),c.set(B,W)),W}function M(m){if(--m.usedTimes===0){const B=o.indexOf(m);o[B]=o[o.length-1],o.pop(),c.delete(m.cacheKey),m.destroy()}}function S(m){s.remove(m)}function y(){s.dispose()}return{getParameters:P,getProgramCacheKey:d,getUniforms:x,acquireProgram:D,releaseProgram:M,releaseShaderCache:S,programs:o,dispose:y}}function wu(){let A=new WeakMap;function e(a){return A.has(a)}function t(a){let s=A.get(a);return s===void 0&&(s={},A.set(a,s)),s}function i(a){A.delete(a)}function r(a,s,l){A.get(a)[s]=l}function n(){A=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:n}}function Pu(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.material.id!==e.material.id?A.material.id-e.material.id:A.materialVariant!==e.materialVariant?A.materialVariant-e.materialVariant:A.z!==e.z?A.z-e.z:A.id-e.id}function gs(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.z!==e.z?e.z-A.z:A.id-e.id}function ps(){const A=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function s(h,g,v,P,d,f){let C=A[e];return C===void 0?(C={id:h.id,object:h,geometry:g,material:v,materialVariant:a(h),groupOrder:P,renderOrder:h.renderOrder,z:d,group:f},A[e]=C):(C.id=h.id,C.object=h,C.geometry=g,C.material=v,C.materialVariant=a(h),C.groupOrder=P,C.renderOrder=h.renderOrder,C.z=d,C.group=f),e++,C}function l(h,g,v,P,d,f){const C=s(h,g,v,P,d,f);v.transmission>0?i.push(C):v.transparent===!0?r.push(C):t.push(C)}function o(h,g,v,P,d,f){const C=s(h,g,v,P,d,f);v.transmission>0?i.unshift(C):v.transparent===!0?r.unshift(C):t.unshift(C)}function c(h,g,v){t.length>1&&t.sort(h||Pu),i.length>1&&i.sort(g||gs),r.length>1&&r.sort(g||gs),v&&(t.reverse(),i.reverse(),r.reverse())}function u(){for(let h=e,g=A.length;h<g;h++){const v=A[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:l,unshift:o,finish:u,sort:c}}function Du(){let A=new WeakMap;function e(i,r){const n=A.get(i);let a;return n===void 0?(a=new ps,A.set(i,[a])):r>=n.length?(a=new ps,n.push(a)):a=n[r],a}function t(){A=new WeakMap}return{get:e,dispose:t}}function Eu(){const A={};return{get:function(e){if(A[e.id]!==void 0)return A[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new OA};break;case"SpotLight":t={position:new z,direction:new z,color:new OA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new OA,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new OA,groundColor:new OA};break;case"RectAreaLight":t={color:new OA,position:new z,halfWidth:new z,halfHeight:new z};break}return A[e.id]=t,t}}}function Bu(){const A={};return{get:function(e){if(A[e.id]!==void 0)return A[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new IA,shadowCameraNear:1,shadowCameraFar:1e3};break}return A[e.id]=t,t}}}var Mu=0;function Cu(A,e){return(e.castShadow?2:0)-(A.castShadow?2:0)+(e.map?1:0)-(A.map?1:0)}function xu(A){const e=new Eu,t=Bu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new z);const r=new z,n=new ae,a=new ae;function s(o){let c=0,u=0,h=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let g=0,v=0,P=0,d=0,f=0,C=0,x=0,D=0,M=0,S=0,y=0;o.sort(Cu);for(let B=0,W=o.length;B<W;B++){const _=o[B],V=_.color,G=_.intensity,k=_.distance;let N=null;if(_.shadow&&_.shadow.map&&(_.shadow.map.texture.format===1030?N=_.shadow.map.texture:N=_.shadow.map.depthTexture||_.shadow.map.texture),_.isAmbientLight)c+=V.r*G,u+=V.g*G,h+=V.b*G;else if(_.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(_.sh.coefficients[X],G);y++}else if(_.isDirectionalLight){const X=e.get(_);if(X.color.copy(_.color).multiplyScalar(_.intensity),_.castShadow){const L=_.shadow,J=t.get(_);J.shadowIntensity=L.intensity,J.shadowBias=L.bias,J.shadowNormalBias=L.normalBias,J.shadowRadius=L.radius,J.shadowMapSize=L.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=N,i.directionalShadowMatrix[g]=_.shadow.matrix,C++}i.directional[g]=X,g++}else if(_.isSpotLight){const X=e.get(_);X.position.setFromMatrixPosition(_.matrixWorld),X.color.copy(V).multiplyScalar(G),X.distance=k,X.coneCos=Math.cos(_.angle),X.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),X.decay=_.decay,i.spot[P]=X;const L=_.shadow;if(_.map&&(i.spotLightMap[M]=_.map,M++,L.updateMatrices(_),_.castShadow&&S++),i.spotLightMatrix[P]=L.matrix,_.castShadow){const J=t.get(_);J.shadowIntensity=L.intensity,J.shadowBias=L.bias,J.shadowNormalBias=L.normalBias,J.shadowRadius=L.radius,J.shadowMapSize=L.mapSize,i.spotShadow[P]=J,i.spotShadowMap[P]=N,D++}P++}else if(_.isRectAreaLight){const X=e.get(_);X.color.copy(V).multiplyScalar(G),X.halfWidth.set(_.width*.5,0,0),X.halfHeight.set(0,_.height*.5,0),i.rectArea[d]=X,d++}else if(_.isPointLight){const X=e.get(_);if(X.color.copy(_.color).multiplyScalar(_.intensity),X.distance=_.distance,X.decay=_.decay,_.castShadow){const L=_.shadow,J=t.get(_);J.shadowIntensity=L.intensity,J.shadowBias=L.bias,J.shadowNormalBias=L.normalBias,J.shadowRadius=L.radius,J.shadowMapSize=L.mapSize,J.shadowCameraNear=L.camera.near,J.shadowCameraFar=L.camera.far,i.pointShadow[v]=J,i.pointShadowMap[v]=N,i.pointShadowMatrix[v]=_.shadow.matrix,x++}i.point[v]=X,v++}else if(_.isHemisphereLight){const X=e.get(_);X.skyColor.copy(_.color).multiplyScalar(G),X.groundColor.copy(_.groundColor).multiplyScalar(G),i.hemi[f]=X,f++}}d>0&&(A.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=aA.LTC_FLOAT_1,i.rectAreaLTC2=aA.LTC_FLOAT_2):(i.rectAreaLTC1=aA.LTC_HALF_1,i.rectAreaLTC2=aA.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=h;const m=i.hash;(m.directionalLength!==g||m.pointLength!==v||m.spotLength!==P||m.rectAreaLength!==d||m.hemiLength!==f||m.numDirectionalShadows!==C||m.numPointShadows!==x||m.numSpotShadows!==D||m.numSpotMaps!==M||m.numLightProbes!==y)&&(i.directional.length=g,i.spot.length=P,i.rectArea.length=d,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=D+M-S,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=y,m.directionalLength=g,m.pointLength=v,m.spotLength=P,m.rectAreaLength=d,m.hemiLength=f,m.numDirectionalShadows=C,m.numPointShadows=x,m.numSpotShadows=D,m.numSpotMaps=M,m.numLightProbes=y,i.version=Mu++)}function l(o,c){let u=0,h=0,g=0,v=0,P=0;const d=c.matrixWorldInverse;for(let f=0,C=o.length;f<C;f++){const x=o[f];if(x.isDirectionalLight){const D=i.directional[u];D.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),u++}else if(x.isSpotLight){const D=i.spot[g];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(d),D.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(d),g++}else if(x.isRectAreaLight){const D=i.rectArea[v];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(d),a.identity(),n.copy(x.matrixWorld),n.premultiply(d),a.extractRotation(n),D.halfWidth.set(x.width*.5,0,0),D.halfHeight.set(0,x.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const D=i.point[h];D.position.setFromMatrixPosition(x.matrixWorld),D.position.applyMatrix4(d),h++}else if(x.isHemisphereLight){const D=i.hemi[P];D.direction.setFromMatrixPosition(x.matrixWorld),D.direction.transformDirection(d),P++}}}return{setup:s,setupView:l,state:i}}function ms(A){const e=new xu(A),t=[],i=[],r=[];function n(h){u.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function l(h){r.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:u,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s,pushLightProbeGrid:l}}function _u(A){let e=new WeakMap;function t(r,n=0){const a=e.get(r);let s;return a===void 0?(s=new ms(A),e.set(r,[s])):n>=a.length?(s=new ms(A),a.push(s)):s=a[n],s}function i(){e=new WeakMap}return{get:t,dispose:i}}var Su=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yu=`uniform sampler2D shadow_pass;
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
}`,Qu=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],Tu=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],vs=new ae,Li=new z,vn=new z;function Iu(A,e,t){let i=new an;const r=new IA,n=new IA,a=new ie,s=new ec,l=new tc,o={},c=t.maxTextureSize,u={0:1,1:0,2:2},h=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new IA},radius:{value:4}},vertexShader:Su,fragmentShader:yu}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const v=new Qt;v.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new ze(v,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(S,y,m){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||S.length===0)return;this.type===2&&(MA("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const B=A.getRenderTarget(),W=A.getActiveCubeFace(),_=A.getActiveMipmapLevel(),V=A.state;V.setBlending(0),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=f!==this.type;G&&y.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(N=>N.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,N=S.length;k<N;k++){const X=S[k],L=X.shadow;if(L===void 0){MA("WebGLShadowMap:",X,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const J=L.getFrameExtents();r.multiply(J),n.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(n.x=Math.floor(c/J.x),r.x=n.x*J.x,L.mapSize.x=n.x),r.y>c&&(n.y=Math.floor(c/J.y),r.y=n.y*J.y,L.mapSize.y=n.y));const AA=A.state.buffers.depth.getReversed();if(L.camera._reversedDepth=AA,L.map===null||G===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===3){if(X.isPointLight){MA("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new Ye(r.x,r.y,{format:Wi,type:Ct,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),L.map.texture.name=X.name+".shadowMap",L.map.depthTexture=new ti(r.x,r.y,Gi),L.map.depthTexture.name=X.name+".shadowMapDepth",L.map.depthTexture.format=mi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=De,L.map.depthTexture.magFilter=De}else X.isPointLight?(L.map=new qa(r.x),L.map.depthTexture=new Kl(r.x,Mt)):(L.map=new Ye(r.x,r.y),L.map.depthTexture=new ti(r.x,r.y,Mt)),L.map.depthTexture.name=X.name+".shadowMap",L.map.depthTexture.format=mi,this.type===1?(L.map.depthTexture.compareFunction=AA?518:515,L.map.depthTexture.minFilter=Ce,L.map.depthTexture.magFilter=Ce):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=De,L.map.depthTexture.magFilter=De);L.camera.updateProjectionMatrix()}const eA=L.map.isWebGLCubeRenderTarget?6:1;for(let hA=0;hA<eA;hA++){if(L.map.isWebGLCubeRenderTarget)A.setRenderTarget(L.map,hA),A.clear();else{hA===0&&(A.setRenderTarget(L.map),A.clear());const PA=L.getViewport(hA);a.set(n.x*PA.x,n.y*PA.y,n.x*PA.z,n.y*PA.w),V.viewport(a)}if(X.isPointLight){const PA=L.camera,kA=L.matrix,YA=X.distance||PA.far;YA!==PA.far&&(PA.far=YA,PA.updateProjectionMatrix()),Li.setFromMatrixPosition(X.matrixWorld),PA.position.copy(Li),vn.copy(PA.position),vn.add(Qu[hA]),PA.up.copy(Tu[hA]),PA.lookAt(vn),PA.updateMatrixWorld(),kA.makeTranslation(-Li.x,-Li.y,-Li.z),vs.multiplyMatrices(PA.projectionMatrix,PA.matrixWorldInverse),L._frustum.setFromProjectionMatrix(vs,PA.coordinateSystem,PA.reversedDepth)}else L.updateMatrices(X);i=L.getFrustum(),D(y,m,L.camera,X,this.type)}L.isPointLightShadow!==!0&&this.type===3&&C(L,m),L.needsUpdate=!1}f=this.type,d.needsUpdate=!1,A.setRenderTarget(B,W,_)};function C(S,y){const m=e.update(P);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,g.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ye(r.x,r.y,{format:Wi,type:Ct})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,A.setRenderTarget(S.mapPass),A.clear(),A.renderBufferDirect(y,null,m,h,P,null),g.uniforms.shadow_pass.value=S.mapPass.texture,g.uniforms.resolution.value=S.mapSize,g.uniforms.radius.value=S.radius,A.setRenderTarget(S.map),A.clear(),A.renderBufferDirect(y,null,m,g,P,null)}function x(S,y,m,B){let W=null;const _=m.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(_!==void 0)W=_;else if(W=m.isPointLight===!0?l:s,A.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const V=W.uuid,G=y.uuid;let k=o[V];k===void 0&&(k={},o[V]=k);let N=k[G];N===void 0&&(N=W.clone(),k[G]=N,y.addEventListener("dispose",M)),W=N}if(W.visible=y.visible,W.wireframe=y.wireframe,B===3?W.side=y.shadowSide!==null?y.shadowSide:y.side:W.side=y.shadowSide!==null?y.shadowSide:u[y.side],W.alphaMap=y.alphaMap,W.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,W.map=y.map,W.clipShadows=y.clipShadows,W.clippingPlanes=y.clippingPlanes,W.clipIntersection=y.clipIntersection,W.displacementMap=y.displacementMap,W.displacementScale=y.displacementScale,W.displacementBias=y.displacementBias,W.wireframeLinewidth=y.wireframeLinewidth,W.linewidth=y.linewidth,m.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const V=A.properties.get(W);V.light=m}return W}function D(S,y,m,B,W){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&W===3)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,S.matrixWorld);const V=e.update(S),G=S.material;if(Array.isArray(G)){const k=V.groups;for(let N=0,X=k.length;N<X;N++){const L=k[N],J=G[L.materialIndex];if(J&&J.visible){const AA=x(S,J,B,W);S.onBeforeShadow(A,S,y,m,V,AA,L),A.renderBufferDirect(m,null,V,AA,S,L),S.onAfterShadow(A,S,y,m,V,AA,L)}}}else if(G.visible){const k=x(S,G,B,W);S.onBeforeShadow(A,S,y,m,V,k,null),A.renderBufferDirect(m,null,V,k,S,null),S.onAfterShadow(A,S,y,m,V,k,null)}}const _=S.children;for(let V=0,G=_.length;V<G;V++)D(_[V],y,m,B,W)}function M(S){S.target.removeEventListener("dispose",M);for(const y in o){const m=o[y],B=S.target.uuid;B in m&&(m[B].dispose(),delete m[B])}}}function bu(A,e){function t(){let I=!1;const j=new ie;let q=null;const dA=new ie(0,0,0,0);return{setMask:function(vA){q!==vA&&!I&&(A.colorMask(vA,vA,vA,vA),q=vA)},setLocked:function(vA){I=vA},setClear:function(vA,Z,lA,xA,Pe){Pe===!0&&(vA*=xA,Z*=xA,lA*=xA),j.set(vA,Z,lA,xA),dA.equals(j)===!1&&(A.clearColor(vA,Z,lA,xA),dA.copy(j))},reset:function(){I=!1,q=null,dA.set(-1,0,0,0)}}}function i(){let I=!1,j=!1,q=null,dA=null,vA=null;return{setReversed:function(Z){if(j!==Z){const lA=e.get("EXT_clip_control");Z?lA.clipControlEXT(lA.LOWER_LEFT_EXT,lA.ZERO_TO_ONE_EXT):lA.clipControlEXT(lA.LOWER_LEFT_EXT,lA.NEGATIVE_ONE_TO_ONE_EXT),j=Z;const xA=vA;vA=null,this.setClear(xA)}},getReversed:function(){return j},setTest:function(Z){Z?uA(A.DEPTH_TEST):CA(A.DEPTH_TEST)},setMask:function(Z){q!==Z&&!I&&(A.depthMask(Z),q=Z)},setFunc:function(Z){if(j&&(Z=sl[Z]),dA!==Z){switch(Z){case 0:A.depthFunc(A.NEVER);break;case 1:A.depthFunc(A.ALWAYS);break;case 2:A.depthFunc(A.LESS);break;case 3:A.depthFunc(A.LEQUAL);break;case 4:A.depthFunc(A.EQUAL);break;case 5:A.depthFunc(A.GEQUAL);break;case 6:A.depthFunc(A.GREATER);break;case 7:A.depthFunc(A.NOTEQUAL);break;default:A.depthFunc(A.LEQUAL)}dA=Z}},setLocked:function(Z){I=Z},setClear:function(Z){vA!==Z&&(vA=Z,j&&(Z=1-Z),A.clearDepth(Z))},reset:function(){I=!1,q=null,dA=null,vA=null,j=!1}}}function r(){let I=!1,j=null,q=null,dA=null,vA=null,Z=null,lA=null,xA=null,Pe=null;return{setTest:function(JA){I||(JA?uA(A.STENCIL_TEST):CA(A.STENCIL_TEST))},setMask:function(JA){j!==JA&&!I&&(A.stencilMask(JA),j=JA)},setFunc:function(JA,We,$e){(q!==JA||dA!==We||vA!==$e)&&(A.stencilFunc(JA,We,$e),q=JA,dA=We,vA=$e)},setOp:function(JA,We,$e){(Z!==JA||lA!==We||xA!==$e)&&(A.stencilOp(JA,We,$e),Z=JA,lA=We,xA=$e)},setLocked:function(JA){I=JA},setClear:function(JA){Pe!==JA&&(A.clearStencil(JA),Pe=JA)},reset:function(){I=!1,j=null,q=null,dA=null,vA=null,Z=null,lA=null,xA=null,Pe=null}}}const n=new t,a=new i,s=new r,l=new WeakMap,o=new WeakMap;let c={},u={},h={},g=new WeakMap,v=[],P=null,d=!1,f=null,C=null,x=null,D=null,M=null,S=null,y=null,m=new OA(0,0,0),B=0,W=!1,_=null,V=null,G=null,k=null,N=null;const X=A.getParameter(A.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,J=0;const AA=A.getParameter(A.VERSION);AA.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(AA)[1]),L=J>=1):AA.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(AA)[1]),L=J>=2);let eA=null,hA={};const PA=A.getParameter(A.SCISSOR_BOX),kA=A.getParameter(A.VIEWPORT),YA=new ie().fromArray(PA),Y=new ie().fromArray(kA);function iA(I,j,q,dA){const vA=new Uint8Array(4),Z=A.createTexture();A.bindTexture(I,Z),A.texParameteri(I,A.TEXTURE_MIN_FILTER,A.NEAREST),A.texParameteri(I,A.TEXTURE_MAG_FILTER,A.NEAREST);for(let lA=0;lA<q;lA++)I===A.TEXTURE_3D||I===A.TEXTURE_2D_ARRAY?A.texImage3D(j,0,A.RGBA,1,1,dA,0,A.RGBA,A.UNSIGNED_BYTE,vA):A.texImage2D(j+lA,0,A.RGBA,1,1,0,A.RGBA,A.UNSIGNED_BYTE,vA);return Z}const fA={};fA[A.TEXTURE_2D]=iA(A.TEXTURE_2D,A.TEXTURE_2D,1),fA[A.TEXTURE_CUBE_MAP]=iA(A.TEXTURE_CUBE_MAP,A.TEXTURE_CUBE_MAP_POSITIVE_X,6),fA[A.TEXTURE_2D_ARRAY]=iA(A.TEXTURE_2D_ARRAY,A.TEXTURE_2D_ARRAY,1,1),fA[A.TEXTURE_3D]=iA(A.TEXTURE_3D,A.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),s.setClear(0),uA(A.DEPTH_TEST),a.setFunc(3),be(!1),$A(1),uA(A.CULL_FACE),de(0);function uA(I){c[I]!==!0&&(A.enable(I),c[I]=!0)}function CA(I){c[I]!==!1&&(A.disable(I),c[I]=!1)}function _A(I,j){return h[I]!==j?(A.bindFramebuffer(I,j),h[I]=j,I===A.DRAW_FRAMEBUFFER&&(h[A.FRAMEBUFFER]=j),I===A.FRAMEBUFFER&&(h[A.DRAW_FRAMEBUFFER]=j),!0):!1}function QA(I,j){let q=v,dA=!1;if(I){q=g.get(j),q===void 0&&(q=[],g.set(j,q));const vA=I.textures;if(q.length!==vA.length||q[0]!==A.COLOR_ATTACHMENT0){for(let Z=0,lA=vA.length;Z<lA;Z++)q[Z]=A.COLOR_ATTACHMENT0+Z;q.length=vA.length,dA=!0}}else q[0]!==A.BACK&&(q[0]=A.BACK,dA=!0);dA&&A.drawBuffers(q)}function GA(I){return P!==I?(A.useProgram(I),P=I,!0):!1}const NA={100:A.FUNC_ADD,101:A.FUNC_SUBTRACT,102:A.FUNC_REVERSE_SUBTRACT};NA[103]=A.MIN,NA[104]=A.MAX;const ZA={200:A.ZERO,201:A.ONE,202:A.SRC_COLOR,204:A.SRC_ALPHA,210:A.SRC_ALPHA_SATURATE,208:A.DST_COLOR,206:A.DST_ALPHA,203:A.ONE_MINUS_SRC_COLOR,205:A.ONE_MINUS_SRC_ALPHA,209:A.ONE_MINUS_DST_COLOR,207:A.ONE_MINUS_DST_ALPHA,211:A.CONSTANT_COLOR,212:A.ONE_MINUS_CONSTANT_COLOR,213:A.CONSTANT_ALPHA,214:A.ONE_MINUS_CONSTANT_ALPHA};function de(I,j,q,dA,vA,Z,lA,xA,Pe,JA){if(I===0){d===!0&&(CA(A.BLEND),d=!1);return}if(d===!1&&(uA(A.BLEND),d=!0),I!==5){if(I!==f||JA!==W){if((C!==100||M!==100)&&(A.blendEquation(A.FUNC_ADD),C=100,M=100),JA)switch(I){case 1:A.blendFuncSeparate(A.ONE,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA);break;case 2:A.blendFunc(A.ONE,A.ONE);break;case 3:A.blendFuncSeparate(A.ZERO,A.ONE_MINUS_SRC_COLOR,A.ZERO,A.ONE);break;case 4:A.blendFuncSeparate(A.DST_COLOR,A.ONE_MINUS_SRC_ALPHA,A.ZERO,A.ONE);break;default:yA("WebGLState: Invalid blending: ",I);break}else switch(I){case 1:A.blendFuncSeparate(A.SRC_ALPHA,A.ONE_MINUS_SRC_ALPHA,A.ONE,A.ONE_MINUS_SRC_ALPHA);break;case 2:A.blendFuncSeparate(A.SRC_ALPHA,A.ONE,A.ONE,A.ONE);break;case 3:yA("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:yA("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yA("WebGLState: Invalid blending: ",I);break}x=null,D=null,S=null,y=null,m.set(0,0,0),B=0,f=I,W=JA}return}vA=vA||j,Z=Z||q,lA=lA||dA,(j!==C||vA!==M)&&(A.blendEquationSeparate(NA[j],NA[vA]),C=j,M=vA),(q!==x||dA!==D||Z!==S||lA!==y)&&(A.blendFuncSeparate(ZA[q],ZA[dA],ZA[Z],ZA[lA]),x=q,D=dA,S=Z,y=lA),(xA.equals(m)===!1||Pe!==B)&&(A.blendColor(xA.r,xA.g,xA.b,Pe),m.copy(xA),B=Pe),f=I,W=!1}function Me(I,j){I.side===2?CA(A.CULL_FACE):uA(A.CULL_FACE);let q=I.side===1;j&&(q=!q),be(q),I.blending===1&&I.transparent===!1?de(0):de(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),n.setMask(I.colorWrite);const dA=I.stencilWrite;s.setTest(dA),dA&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?uA(A.SAMPLE_ALPHA_TO_COVERAGE):CA(A.SAMPLE_ALPHA_TO_COVERAGE)}function be(I){_!==I&&(I?A.frontFace(A.CW):A.frontFace(A.CCW),_=I)}function $A(I){I!==0?(uA(A.CULL_FACE),I!==V&&(I===1?A.cullFace(A.BACK):I===2?A.cullFace(A.FRONT):A.cullFace(A.FRONT_AND_BACK))):CA(A.CULL_FACE),V=I}function ge(I){I!==G&&(L&&A.lineWidth(I),G=I)}function ue(I,j,q){I?(uA(A.POLYGON_OFFSET_FILL),(k!==j||N!==q)&&(k=j,N=q,a.getReversed()&&(j=-j),A.polygonOffset(j,q))):CA(A.POLYGON_OFFSET_FILL)}function oe(I){I?uA(A.SCISSOR_TEST):CA(A.SCISSOR_TEST)}function T(I){I===void 0&&(I=A.TEXTURE0+X-1),eA!==I&&(A.activeTexture(I),eA=I)}function Re(I,j,q){q===void 0&&(eA===null?q=A.TEXTURE0+X-1:q=eA);let dA=hA[q];dA===void 0&&(dA={type:void 0,texture:void 0},hA[q]=dA),(dA.type!==I||dA.texture!==j)&&(eA!==q&&(A.activeTexture(q),eA=q),A.bindTexture(I,j||fA[I]),dA.type=I,dA.texture=j)}function WA(){const I=hA[eA];I!==void 0&&I.type!==void 0&&(A.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ae(){try{A.compressedTexImage2D(...arguments)}catch(I){yA("WebGLState:",I)}}function E(){try{A.compressedTexImage3D(...arguments)}catch(I){yA("WebGLState:",I)}}function p(){try{A.texSubImage2D(...arguments)}catch(I){yA("WebGLState:",I)}}function Q(){try{A.texSubImage3D(...arguments)}catch(I){yA("WebGLState:",I)}}function O(){try{A.compressedTexSubImage2D(...arguments)}catch(I){yA("WebGLState:",I)}}function K(){try{A.compressedTexSubImage3D(...arguments)}catch(I){yA("WebGLState:",I)}}function nA(){try{A.texStorage2D(...arguments)}catch(I){yA("WebGLState:",I)}}function oA(){try{A.texStorage3D(...arguments)}catch(I){yA("WebGLState:",I)}}function b(){try{A.texImage2D(...arguments)}catch(I){yA("WebGLState:",I)}}function tA(){try{A.texImage3D(...arguments)}catch(I){yA("WebGLState:",I)}}function sA(I){return u[I]!==void 0?u[I]:A.getParameter(I)}function mA(I,j){u[I]!==j&&(A.pixelStorei(I,j),u[I]=j)}function $(I){YA.equals(I)===!1&&(A.scissor(I.x,I.y,I.z,I.w),YA.copy(I))}function DA(I){Y.equals(I)===!1&&(A.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function EA(I,j){let q=o.get(j);q===void 0&&(q=new WeakMap,o.set(j,q));let dA=q.get(I);dA===void 0&&(dA=A.getUniformBlockIndex(j,I.name),q.set(I,dA))}function TA(I,j){const q=o.get(j).get(I);l.get(j)!==q&&(A.uniformBlockBinding(j,q,I.__bindingPointIndex),l.set(j,q))}function XA(){A.disable(A.BLEND),A.disable(A.CULL_FACE),A.disable(A.DEPTH_TEST),A.disable(A.POLYGON_OFFSET_FILL),A.disable(A.SCISSOR_TEST),A.disable(A.STENCIL_TEST),A.disable(A.SAMPLE_ALPHA_TO_COVERAGE),A.blendEquation(A.FUNC_ADD),A.blendFunc(A.ONE,A.ZERO),A.blendFuncSeparate(A.ONE,A.ZERO,A.ONE,A.ZERO),A.blendColor(0,0,0,0),A.colorMask(!0,!0,!0,!0),A.clearColor(0,0,0,0),A.depthMask(!0),A.depthFunc(A.LESS),a.setReversed(!1),A.clearDepth(1),A.stencilMask(4294967295),A.stencilFunc(A.ALWAYS,0,4294967295),A.stencilOp(A.KEEP,A.KEEP,A.KEEP),A.clearStencil(0),A.cullFace(A.BACK),A.frontFace(A.CCW),A.polygonOffset(0,0),A.activeTexture(A.TEXTURE0),A.bindFramebuffer(A.FRAMEBUFFER,null),A.bindFramebuffer(A.DRAW_FRAMEBUFFER,null),A.bindFramebuffer(A.READ_FRAMEBUFFER,null),A.useProgram(null),A.lineWidth(1),A.scissor(0,0,A.canvas.width,A.canvas.height),A.viewport(0,0,A.canvas.width,A.canvas.height),A.pixelStorei(A.PACK_ALIGNMENT,4),A.pixelStorei(A.UNPACK_ALIGNMENT,4),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,!1),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),A.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,A.BROWSER_DEFAULT_WEBGL),A.pixelStorei(A.PACK_ROW_LENGTH,0),A.pixelStorei(A.PACK_SKIP_PIXELS,0),A.pixelStorei(A.PACK_SKIP_ROWS,0),A.pixelStorei(A.UNPACK_ROW_LENGTH,0),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,0),A.pixelStorei(A.UNPACK_SKIP_PIXELS,0),A.pixelStorei(A.UNPACK_SKIP_ROWS,0),A.pixelStorei(A.UNPACK_SKIP_IMAGES,0),c={},u={},eA=null,hA={},h={},g=new WeakMap,v=[],P=null,d=!1,f=null,C=null,x=null,D=null,M=null,S=null,y=null,m=new OA(0,0,0),B=0,W=!1,_=null,V=null,G=null,k=null,N=null,YA.set(0,0,A.canvas.width,A.canvas.height),Y.set(0,0,A.canvas.width,A.canvas.height),n.reset(),a.reset(),s.reset()}return{buffers:{color:n,depth:a,stencil:s},enable:uA,disable:CA,bindFramebuffer:_A,drawBuffers:QA,useProgram:GA,setBlending:de,setMaterial:Me,setFlipSided:be,setCullFace:$A,setLineWidth:ge,setPolygonOffset:ue,setScissorTest:oe,activeTexture:T,bindTexture:Re,unbindTexture:WA,compressedTexImage2D:Ae,compressedTexImage3D:E,texImage2D:b,texImage3D:tA,pixelStorei:mA,getParameter:sA,updateUBOMapping:EA,uniformBlockBinding:TA,texStorage2D:nA,texStorage3D:oA,texSubImage2D:p,texSubImage3D:Q,compressedTexSubImage2D:O,compressedTexSubImage3D:K,scissor:$,viewport:DA,reset:XA}}function Ru(A,e,t,i,r,n,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new IA,c=new WeakMap,u=new Set;let h;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(E,p){return v?new OffscreenCanvas(E,p):Ki("canvas")}function d(E,p,Q){let O=1;const K=Ae(E);if((K.width>Q||K.height>Q)&&(O=Q/Math.max(K.width,K.height)),O<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const nA=Math.floor(O*K.width),oA=Math.floor(O*K.height);h===void 0&&(h=P(nA,oA));const b=p?P(nA,oA):h;return b.width=nA,b.height=oA,b.getContext("2d").drawImage(E,0,0,nA,oA),MA("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+nA+"x"+oA+")."),b}else return"data"in E&&MA("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function f(E){return E.generateMipmaps}function C(E){A.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?A.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?A.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?A.TEXTURE_2D_ARRAY:A.TEXTURE_2D}function D(E,p,Q,O,K,nA=!1){if(E!==null){if(A[E]!==void 0)return A[E];MA("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let oA;O&&(oA=e.get("EXT_texture_norm16"),oA||MA("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let b=p;if(p===A.RED&&(Q===A.FLOAT&&(b=A.R32F),Q===A.HALF_FLOAT&&(b=A.R16F),Q===A.UNSIGNED_BYTE&&(b=A.R8),Q===A.UNSIGNED_SHORT&&oA&&(b=oA.R16_EXT),Q===A.SHORT&&oA&&(b=oA.R16_SNORM_EXT)),p===A.RED_INTEGER&&(Q===A.UNSIGNED_BYTE&&(b=A.R8UI),Q===A.UNSIGNED_SHORT&&(b=A.R16UI),Q===A.UNSIGNED_INT&&(b=A.R32UI),Q===A.BYTE&&(b=A.R8I),Q===A.SHORT&&(b=A.R16I),Q===A.INT&&(b=A.R32I)),p===A.RG&&(Q===A.FLOAT&&(b=A.RG32F),Q===A.HALF_FLOAT&&(b=A.RG16F),Q===A.UNSIGNED_BYTE&&(b=A.RG8),Q===A.UNSIGNED_SHORT&&oA&&(b=oA.RG16_EXT),Q===A.SHORT&&oA&&(b=oA.RG16_SNORM_EXT)),p===A.RG_INTEGER&&(Q===A.UNSIGNED_BYTE&&(b=A.RG8UI),Q===A.UNSIGNED_SHORT&&(b=A.RG16UI),Q===A.UNSIGNED_INT&&(b=A.RG32UI),Q===A.BYTE&&(b=A.RG8I),Q===A.SHORT&&(b=A.RG16I),Q===A.INT&&(b=A.RG32I)),p===A.RGB_INTEGER&&(Q===A.UNSIGNED_BYTE&&(b=A.RGB8UI),Q===A.UNSIGNED_SHORT&&(b=A.RGB16UI),Q===A.UNSIGNED_INT&&(b=A.RGB32UI),Q===A.BYTE&&(b=A.RGB8I),Q===A.SHORT&&(b=A.RGB16I),Q===A.INT&&(b=A.RGB32I)),p===A.RGBA_INTEGER&&(Q===A.UNSIGNED_BYTE&&(b=A.RGBA8UI),Q===A.UNSIGNED_SHORT&&(b=A.RGBA16UI),Q===A.UNSIGNED_INT&&(b=A.RGBA32UI),Q===A.BYTE&&(b=A.RGBA8I),Q===A.SHORT&&(b=A.RGBA16I),Q===A.INT&&(b=A.RGBA32I)),p===A.RGB&&(Q===A.UNSIGNED_SHORT&&oA&&(b=oA.RGB16_EXT),Q===A.SHORT&&oA&&(b=oA.RGB16_SNORM_EXT),Q===A.UNSIGNED_INT_5_9_9_9_REV&&(b=A.RGB9_E5),Q===A.UNSIGNED_INT_10F_11F_11F_REV&&(b=A.R11F_G11F_B10F)),p===A.RGBA){const tA=nA?Yi:HA.getTransfer(K);Q===A.FLOAT&&(b=A.RGBA32F),Q===A.HALF_FLOAT&&(b=A.RGBA16F),Q===A.UNSIGNED_BYTE&&(b=tA==="srgb"?A.SRGB8_ALPHA8:A.RGBA8),Q===A.UNSIGNED_SHORT&&oA&&(b=oA.RGBA16_EXT),Q===A.SHORT&&oA&&(b=oA.RGBA16_SNORM_EXT),Q===A.UNSIGNED_SHORT_4_4_4_4&&(b=A.RGBA4),Q===A.UNSIGNED_SHORT_5_5_5_1&&(b=A.RGB5_A1)}return(b===A.R16F||b===A.R32F||b===A.RG16F||b===A.RG32F||b===A.RGBA16F||b===A.RGBA32F)&&e.get("EXT_color_buffer_float"),b}function M(E,p){let Q;return E?p===null||p===1014||p===1020?Q=A.DEPTH24_STENCIL8:p===1015?Q=A.DEPTH32F_STENCIL8:p===1012&&(Q=A.DEPTH24_STENCIL8,MA("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===1014||p===1020?Q=A.DEPTH_COMPONENT24:p===1015?Q=A.DEPTH_COMPONENT32F:p===1012&&(Q=A.DEPTH_COMPONENT16),Q}function S(E,p){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==1003&&E.minFilter!==1006?Math.log2(Math.max(p.width,p.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?p.mipmaps.length:1}function y(E){const p=E.target;p.removeEventListener("dispose",y),B(p),p.isVideoTexture&&c.delete(p),p.isHTMLTexture&&u.delete(p)}function m(E){const p=E.target;p.removeEventListener("dispose",m),_(p)}function B(E){const p=i.get(E);if(p.__webglInit===void 0)return;const Q=E.source,O=g.get(Q);if(O){const K=O[p.__cacheKey];K.usedTimes--,K.usedTimes===0&&W(E),Object.keys(O).length===0&&g.delete(Q)}i.remove(E)}function W(E){const p=i.get(E);A.deleteTexture(p.__webglTexture);const Q=E.source,O=g.get(Q);delete O[p.__cacheKey],a.memory.textures--}function _(E){const p=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(p.__webglFramebuffer[O]))for(let K=0;K<p.__webglFramebuffer[O].length;K++)A.deleteFramebuffer(p.__webglFramebuffer[O][K]);else A.deleteFramebuffer(p.__webglFramebuffer[O]);p.__webglDepthbuffer&&A.deleteRenderbuffer(p.__webglDepthbuffer[O])}else{if(Array.isArray(p.__webglFramebuffer))for(let O=0;O<p.__webglFramebuffer.length;O++)A.deleteFramebuffer(p.__webglFramebuffer[O]);else A.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&A.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&A.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let O=0;O<p.__webglColorRenderbuffer.length;O++)p.__webglColorRenderbuffer[O]&&A.deleteRenderbuffer(p.__webglColorRenderbuffer[O]);p.__webglDepthRenderbuffer&&A.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const Q=E.textures;for(let O=0,K=Q.length;O<K;O++){const nA=i.get(Q[O]);nA.__webglTexture&&(A.deleteTexture(nA.__webglTexture),a.memory.textures--),i.remove(Q[O])}i.remove(E)}let V=0;function G(){V=0}function k(){return V}function N(E){V=E}function X(){const E=V;return E>=r.maxTextures&&MA("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),V+=1,E}function L(E){const p=[];return p.push(E.wrapS),p.push(E.wrapT),p.push(E.wrapR||0),p.push(E.magFilter),p.push(E.minFilter),p.push(E.anisotropy),p.push(E.internalFormat),p.push(E.format),p.push(E.type),p.push(E.generateMipmaps),p.push(E.premultiplyAlpha),p.push(E.flipY),p.push(E.unpackAlignment),p.push(E.colorSpace),p.join()}function J(E,p){const Q=i.get(E);if(E.isVideoTexture&&Re(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&Q.__version!==E.version){const O=E.image;if(O===null)MA("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)MA("WebGLRenderer: Texture marked for update but image is incomplete");else{CA(Q,E,p);return}}else E.isExternalTexture&&(Q.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(A.TEXTURE_2D,Q.__webglTexture,A.TEXTURE0+p)}function AA(E,p){const Q=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&Q.__version!==E.version){CA(Q,E,p);return}else E.isExternalTexture&&(Q.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(A.TEXTURE_2D_ARRAY,Q.__webglTexture,A.TEXTURE0+p)}function eA(E,p){const Q=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&Q.__version!==E.version){CA(Q,E,p);return}t.bindTexture(A.TEXTURE_3D,Q.__webglTexture,A.TEXTURE0+p)}function hA(E,p){const Q=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&Q.__version!==E.version){_A(Q,E,p);return}t.bindTexture(A.TEXTURE_CUBE_MAP,Q.__webglTexture,A.TEXTURE0+p)}const PA={[Sr]:A.REPEAT,[At]:A.CLAMP_TO_EDGE,[yr]:A.MIRRORED_REPEAT},kA={[De]:A.NEAREST,[so]:A.NEAREST_MIPMAP_NEAREST,[oo]:A.NEAREST_MIPMAP_LINEAR,[Ce]:A.LINEAR,[lo]:A.LINEAR_MIPMAP_NEAREST,[ki]:A.LINEAR_MIPMAP_LINEAR},YA={512:A.NEVER,519:A.ALWAYS,513:A.LESS,515:A.LEQUAL,514:A.EQUAL,518:A.GEQUAL,516:A.GREATER,517:A.NOTEQUAL};function Y(E,p){if(p.type===1015&&e.has("OES_texture_float_linear")===!1&&(p.magFilter===1006||p.magFilter===1007||p.magFilter===1005||p.magFilter===1008||p.minFilter===1006||p.minFilter===1007||p.minFilter===1005||p.minFilter===1008)&&MA("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),A.texParameteri(E,A.TEXTURE_WRAP_S,PA[p.wrapS]),A.texParameteri(E,A.TEXTURE_WRAP_T,PA[p.wrapT]),(E===A.TEXTURE_3D||E===A.TEXTURE_2D_ARRAY)&&A.texParameteri(E,A.TEXTURE_WRAP_R,PA[p.wrapR]),A.texParameteri(E,A.TEXTURE_MAG_FILTER,kA[p.magFilter]),A.texParameteri(E,A.TEXTURE_MIN_FILTER,kA[p.minFilter]),p.compareFunction&&(A.texParameteri(E,A.TEXTURE_COMPARE_MODE,A.COMPARE_REF_TO_TEXTURE),A.texParameteri(E,A.TEXTURE_COMPARE_FUNC,YA[p.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===1003||p.minFilter!==1005&&p.minFilter!==1008||p.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||i.get(p).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");A.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,r.getMaxAnisotropy())),i.get(p).__currentAnisotropy=p.anisotropy}}}function iA(E,p){let Q=!1;E.__webglInit===void 0&&(E.__webglInit=!0,p.addEventListener("dispose",y));const O=p.source;let K=g.get(O);K===void 0&&(K={},g.set(O,K));const nA=L(p);if(nA!==E.__cacheKey){K[nA]===void 0&&(K[nA]={texture:A.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),K[nA].usedTimes++;const oA=K[E.__cacheKey];oA!==void 0&&(K[E.__cacheKey].usedTimes--,oA.usedTimes===0&&W(p)),E.__cacheKey=nA,E.__webglTexture=K[nA].texture}return Q}function fA(E,p,Q){return Math.floor(Math.floor(E/Q)/p)}function uA(E,p,Q,O){const K=E.updateRanges;if(K.length===0)t.texSubImage2D(A.TEXTURE_2D,0,0,0,p.width,p.height,Q,O,p.data);else{K.sort((sA,mA)=>sA.start-mA.start);let nA=0;for(let sA=1;sA<K.length;sA++){const mA=K[nA],$=K[sA],DA=mA.start+mA.count,EA=fA($.start,p.width,4),TA=fA(mA.start,p.width,4);$.start<=DA+1&&EA===TA&&fA($.start+$.count-1,p.width,4)===EA?mA.count=Math.max(mA.count,$.start+$.count-mA.start):(++nA,K[nA]=$)}K.length=nA+1;const oA=t.getParameter(A.UNPACK_ROW_LENGTH),b=t.getParameter(A.UNPACK_SKIP_PIXELS),tA=t.getParameter(A.UNPACK_SKIP_ROWS);t.pixelStorei(A.UNPACK_ROW_LENGTH,p.width);for(let sA=0,mA=K.length;sA<mA;sA++){const $=K[sA],DA=Math.floor($.start/4),EA=Math.ceil($.count/4),TA=DA%p.width,XA=Math.floor(DA/p.width),I=EA;t.pixelStorei(A.UNPACK_SKIP_PIXELS,TA),t.pixelStorei(A.UNPACK_SKIP_ROWS,XA),t.texSubImage2D(A.TEXTURE_2D,0,TA,XA,I,1,Q,O,p.data)}E.clearUpdateRanges(),t.pixelStorei(A.UNPACK_ROW_LENGTH,oA),t.pixelStorei(A.UNPACK_SKIP_PIXELS,b),t.pixelStorei(A.UNPACK_SKIP_ROWS,tA)}}function CA(E,p,Q){let O=A.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(O=A.TEXTURE_2D_ARRAY),p.isData3DTexture&&(O=A.TEXTURE_3D);const K=iA(E,p),nA=p.source;t.bindTexture(O,E.__webglTexture,A.TEXTURE0+Q);const oA=i.get(nA);if(nA.version!==oA.__version||K===!0){if(t.activeTexture(A.TEXTURE0+Q),!(typeof ImageBitmap<"u"&&p.image instanceof ImageBitmap)){const j=HA.getPrimaries(HA.workingColorSpace),q=p.colorSpace===""?null:HA.getPrimaries(p.colorSpace),dA=p.colorSpace===""||j===q?A.NONE:A.BROWSER_DEFAULT_WEBGL;t.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,dA)}t.pixelStorei(A.UNPACK_ALIGNMENT,p.unpackAlignment);let b=d(p.image,!1,r.maxTextureSize);b=WA(p,b);const tA=n.convert(p.format,p.colorSpace),sA=n.convert(p.type);let mA=D(p.internalFormat,tA,sA,p.normalized,p.colorSpace,p.isVideoTexture);Y(O,p);let $;const DA=p.mipmaps,EA=p.isVideoTexture!==!0,TA=oA.__version===void 0||K===!0,XA=nA.dataReady,I=S(p,b);if(p.isDepthTexture)mA=M(p.format===$n,p.type),TA&&(EA?t.texStorage2D(A.TEXTURE_2D,1,mA,b.width,b.height):t.texImage2D(A.TEXTURE_2D,0,mA,b.width,b.height,0,tA,sA,null));else if(p.isDataTexture)if(DA.length>0){EA&&TA&&t.texStorage2D(A.TEXTURE_2D,I,mA,DA[0].width,DA[0].height);for(let j=0,q=DA.length;j<q;j++)$=DA[j],EA?XA&&t.texSubImage2D(A.TEXTURE_2D,j,0,0,$.width,$.height,tA,sA,$.data):t.texImage2D(A.TEXTURE_2D,j,mA,$.width,$.height,0,tA,sA,$.data);p.generateMipmaps=!1}else EA?(TA&&t.texStorage2D(A.TEXTURE_2D,I,mA,b.width,b.height),XA&&uA(p,b,tA,sA)):t.texImage2D(A.TEXTURE_2D,0,mA,b.width,b.height,0,tA,sA,b.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){EA&&TA&&t.texStorage3D(A.TEXTURE_2D_ARRAY,I,mA,DA[0].width,DA[0].height,b.depth);for(let j=0,q=DA.length;j<q;j++)if($=DA[j],p.format!==1023)if(tA!==null)if(EA){if(XA)if(p.layerUpdates.size>0){const dA=Va($.width,$.height,p.format,p.type);for(const vA of p.layerUpdates){const Z=$.data.subarray(vA*dA/$.data.BYTES_PER_ELEMENT,(vA+1)*dA/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(A.TEXTURE_2D_ARRAY,j,0,0,vA,$.width,$.height,1,tA,Z)}p.clearLayerUpdates()}else t.compressedTexSubImage3D(A.TEXTURE_2D_ARRAY,j,0,0,0,$.width,$.height,b.depth,tA,$.data)}else t.compressedTexImage3D(A.TEXTURE_2D_ARRAY,j,mA,$.width,$.height,b.depth,0,$.data,0,0);else MA("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else EA?XA&&t.texSubImage3D(A.TEXTURE_2D_ARRAY,j,0,0,0,$.width,$.height,b.depth,tA,sA,$.data):t.texImage3D(A.TEXTURE_2D_ARRAY,j,mA,$.width,$.height,b.depth,0,tA,sA,$.data)}else{EA&&TA&&t.texStorage2D(A.TEXTURE_2D,I,mA,DA[0].width,DA[0].height);for(let j=0,q=DA.length;j<q;j++)$=DA[j],p.format!==1023?tA!==null?EA?XA&&t.compressedTexSubImage2D(A.TEXTURE_2D,j,0,0,$.width,$.height,tA,$.data):t.compressedTexImage2D(A.TEXTURE_2D,j,mA,$.width,$.height,0,$.data):MA("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):EA?XA&&t.texSubImage2D(A.TEXTURE_2D,j,0,0,$.width,$.height,tA,sA,$.data):t.texImage2D(A.TEXTURE_2D,j,mA,$.width,$.height,0,tA,sA,$.data)}else if(p.isDataArrayTexture)if(EA){if(TA&&t.texStorage3D(A.TEXTURE_2D_ARRAY,I,mA,b.width,b.height,b.depth),XA)if(p.layerUpdates.size>0){const j=Va(b.width,b.height,p.format,p.type);for(const q of p.layerUpdates){const dA=b.data.subarray(q*j/b.data.BYTES_PER_ELEMENT,(q+1)*j/b.data.BYTES_PER_ELEMENT);t.texSubImage3D(A.TEXTURE_2D_ARRAY,0,0,0,q,b.width,b.height,1,tA,sA,dA)}p.clearLayerUpdates()}else t.texSubImage3D(A.TEXTURE_2D_ARRAY,0,0,0,0,b.width,b.height,b.depth,tA,sA,b.data)}else t.texImage3D(A.TEXTURE_2D_ARRAY,0,mA,b.width,b.height,b.depth,0,tA,sA,b.data);else if(p.isData3DTexture)EA?(TA&&t.texStorage3D(A.TEXTURE_3D,I,mA,b.width,b.height,b.depth),XA&&t.texSubImage3D(A.TEXTURE_3D,0,0,0,0,b.width,b.height,b.depth,tA,sA,b.data)):t.texImage3D(A.TEXTURE_3D,0,mA,b.width,b.height,b.depth,0,tA,sA,b.data);else if(p.isFramebufferTexture){if(TA)if(EA)t.texStorage2D(A.TEXTURE_2D,I,mA,b.width,b.height);else{let j=b.width,q=b.height;for(let dA=0;dA<I;dA++)t.texImage2D(A.TEXTURE_2D,dA,mA,j,q,0,tA,sA,null),j>>=1,q>>=1}}else if(p.isHTMLTexture){if("texElementImage2D"in A){const j=A.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),b.parentNode!==j){j.appendChild(b),u.add(p),j.onpaint=q=>{const dA=q.changedElements;for(const vA of u)dA.includes(vA.image)&&(vA.needsUpdate=!0)},j.requestPaint();return}if(A.texElementImage2D.length===3)A.texElementImage2D(A.TEXTURE_2D,A.RGBA8,b);else{const q=A.RGBA,dA=A.RGBA,vA=A.UNSIGNED_BYTE;A.texElementImage2D(A.TEXTURE_2D,0,q,dA,vA,b)}A.texParameteri(A.TEXTURE_2D,A.TEXTURE_MIN_FILTER,A.LINEAR),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_WRAP_S,A.CLAMP_TO_EDGE),A.texParameteri(A.TEXTURE_2D,A.TEXTURE_WRAP_T,A.CLAMP_TO_EDGE)}}else if(DA.length>0){if(EA&&TA){const j=Ae(DA[0]);t.texStorage2D(A.TEXTURE_2D,I,mA,j.width,j.height)}for(let j=0,q=DA.length;j<q;j++)$=DA[j],EA?XA&&t.texSubImage2D(A.TEXTURE_2D,j,0,0,tA,sA,$):t.texImage2D(A.TEXTURE_2D,j,mA,tA,sA,$);p.generateMipmaps=!1}else if(EA){if(TA){const j=Ae(b);t.texStorage2D(A.TEXTURE_2D,I,mA,j.width,j.height)}XA&&t.texSubImage2D(A.TEXTURE_2D,0,0,0,tA,sA,b)}else t.texImage2D(A.TEXTURE_2D,0,mA,tA,sA,b);f(p)&&C(O),oA.__version=nA.version,p.onUpdate&&p.onUpdate(p)}E.__version=p.version}function _A(E,p,Q){if(p.image.length!==6)return;const O=iA(E,p),K=p.source;t.bindTexture(A.TEXTURE_CUBE_MAP,E.__webglTexture,A.TEXTURE0+Q);const nA=i.get(K);if(K.version!==nA.__version||O===!0){t.activeTexture(A.TEXTURE0+Q);const oA=HA.getPrimaries(HA.workingColorSpace),b=p.colorSpace===""?null:HA.getPrimaries(p.colorSpace),tA=p.colorSpace===""||oA===b?A.NONE:A.BROWSER_DEFAULT_WEBGL;t.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,p.flipY),t.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),t.pixelStorei(A.UNPACK_ALIGNMENT,p.unpackAlignment),t.pixelStorei(A.UNPACK_COLORSPACE_CONVERSION_WEBGL,tA);const sA=p.isCompressedTexture||p.image[0].isCompressedTexture,mA=p.image[0]&&p.image[0].isDataTexture,$=[];for(let Z=0;Z<6;Z++)!sA&&!mA?$[Z]=d(p.image[Z],!0,r.maxCubemapSize):$[Z]=mA?p.image[Z].image:p.image[Z],$[Z]=WA(p,$[Z]);const DA=$[0],EA=n.convert(p.format,p.colorSpace),TA=n.convert(p.type),XA=D(p.internalFormat,EA,TA,p.normalized,p.colorSpace),I=p.isVideoTexture!==!0,j=nA.__version===void 0||O===!0,q=K.dataReady;let dA=S(p,DA);Y(A.TEXTURE_CUBE_MAP,p);let vA;if(sA){I&&j&&t.texStorage2D(A.TEXTURE_CUBE_MAP,dA,XA,DA.width,DA.height);for(let Z=0;Z<6;Z++){vA=$[Z].mipmaps;for(let lA=0;lA<vA.length;lA++){const xA=vA[lA];p.format!==1023?EA!==null?I?q&&t.compressedTexSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lA,0,0,xA.width,xA.height,EA,xA.data):t.compressedTexImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lA,XA,xA.width,xA.height,0,xA.data):MA("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?q&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lA,0,0,xA.width,xA.height,EA,TA,xA.data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lA,XA,xA.width,xA.height,0,EA,TA,xA.data)}}}else{if(vA=p.mipmaps,I&&j){vA.length>0&&dA++;const Z=Ae($[0]);t.texStorage2D(A.TEXTURE_CUBE_MAP,dA,XA,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(mA){I?q&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,$[Z].width,$[Z].height,EA,TA,$[Z].data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,XA,$[Z].width,$[Z].height,0,EA,TA,$[Z].data);for(let lA=0;lA<vA.length;lA++){const xA=vA[lA].image[Z].image;I?q&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lA+1,0,0,xA.width,xA.height,EA,TA,xA.data):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lA+1,XA,xA.width,xA.height,0,EA,TA,xA.data)}}else{I?q&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,EA,TA,$[Z]):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,XA,EA,TA,$[Z]);for(let lA=0;lA<vA.length;lA++){const xA=vA[lA];I?q&&t.texSubImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lA+1,0,0,EA,TA,xA.image[Z]):t.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lA+1,XA,EA,TA,xA.image[Z])}}}f(p)&&C(A.TEXTURE_CUBE_MAP),nA.__version=K.version,p.onUpdate&&p.onUpdate(p)}E.__version=p.version}function QA(E,p,Q,O,K,nA){const oA=n.convert(Q.format,Q.colorSpace),b=n.convert(Q.type),tA=D(Q.internalFormat,oA,b,Q.normalized,Q.colorSpace),sA=i.get(p),mA=i.get(Q);if(mA.__renderTarget=p,!sA.__hasExternalTextures){const $=Math.max(1,p.width>>nA),DA=Math.max(1,p.height>>nA);K===A.TEXTURE_3D||K===A.TEXTURE_2D_ARRAY?t.texImage3D(K,nA,tA,$,DA,p.depth,0,oA,b,null):t.texImage2D(K,nA,tA,$,DA,0,oA,b,null)}t.bindFramebuffer(A.FRAMEBUFFER,E),T(p)?s.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,O,K,mA.__webglTexture,0,oe(p)):(K===A.TEXTURE_2D||K>=A.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=A.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&A.framebufferTexture2D(A.FRAMEBUFFER,O,K,mA.__webglTexture,nA),t.bindFramebuffer(A.FRAMEBUFFER,null)}function GA(E,p,Q){if(A.bindRenderbuffer(A.RENDERBUFFER,E),p.depthBuffer){const O=p.depthTexture,K=O&&O.isDepthTexture?O.type:null,nA=M(p.stencilBuffer,K),oA=p.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT;T(p)?s.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,oe(p),nA,p.width,p.height):Q?A.renderbufferStorageMultisample(A.RENDERBUFFER,oe(p),nA,p.width,p.height):A.renderbufferStorage(A.RENDERBUFFER,nA,p.width,p.height),A.framebufferRenderbuffer(A.FRAMEBUFFER,oA,A.RENDERBUFFER,E)}else{const O=p.textures;for(let K=0;K<O.length;K++){const nA=O[K],oA=n.convert(nA.format,nA.colorSpace),b=n.convert(nA.type),tA=D(nA.internalFormat,oA,b,nA.normalized,nA.colorSpace);T(p)?s.renderbufferStorageMultisampleEXT(A.RENDERBUFFER,oe(p),tA,p.width,p.height):Q?A.renderbufferStorageMultisample(A.RENDERBUFFER,oe(p),tA,p.width,p.height):A.renderbufferStorage(A.RENDERBUFFER,tA,p.width,p.height)}}A.bindRenderbuffer(A.RENDERBUFFER,null)}function NA(E,p,Q){const O=p.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(A.FRAMEBUFFER,E),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(p.depthTexture);if(K.__renderTarget=p,(!K.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),O){if(K.__webglInit===void 0&&(K.__webglInit=!0,p.depthTexture.addEventListener("dispose",y)),K.__webglTexture===void 0){K.__webglTexture=A.createTexture(),t.bindTexture(A.TEXTURE_CUBE_MAP,K.__webglTexture),Y(A.TEXTURE_CUBE_MAP,p.depthTexture);const sA=n.convert(p.depthTexture.format),mA=n.convert(p.depthTexture.type);let $;p.depthTexture.format===1026?$=A.DEPTH_COMPONENT24:p.depthTexture.format===1027&&($=A.DEPTH24_STENCIL8);for(let DA=0;DA<6;DA++)A.texImage2D(A.TEXTURE_CUBE_MAP_POSITIVE_X+DA,0,$,p.width,p.height,0,sA,mA,null)}}else J(p.depthTexture,0);const nA=K.__webglTexture,oA=oe(p),b=O?A.TEXTURE_CUBE_MAP_POSITIVE_X+Q:A.TEXTURE_2D,tA=p.depthTexture.format===1027?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT;if(p.depthTexture.format===1026)T(p)?s.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,tA,b,nA,0,oA):A.framebufferTexture2D(A.FRAMEBUFFER,tA,b,nA,0);else if(p.depthTexture.format===1027)T(p)?s.framebufferTexture2DMultisampleEXT(A.FRAMEBUFFER,tA,b,nA,0,oA):A.framebufferTexture2D(A.FRAMEBUFFER,tA,b,nA,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ZA(E){const p=i.get(E),Q=E.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==E.depthTexture){const O=E.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),O){const K=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,O.removeEventListener("dispose",K)};O.addEventListener("dispose",K),p.__depthDisposeCallback=K}p.__boundDepthTexture=O}if(E.depthTexture&&!p.__autoAllocateDepthBuffer)if(Q)for(let O=0;O<6;O++)NA(p.__webglFramebuffer[O],E,O);else{const O=E.texture.mipmaps;O&&O.length>0?NA(p.__webglFramebuffer[0],E,0):NA(p.__webglFramebuffer,E,0)}else if(Q){p.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(A.FRAMEBUFFER,p.__webglFramebuffer[O]),p.__webglDepthbuffer[O]===void 0)p.__webglDepthbuffer[O]=A.createRenderbuffer(),GA(p.__webglDepthbuffer[O],E,!1);else{const K=E.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,nA=p.__webglDepthbuffer[O];A.bindRenderbuffer(A.RENDERBUFFER,nA),A.framebufferRenderbuffer(A.FRAMEBUFFER,K,A.RENDERBUFFER,nA)}}else{const O=E.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(A.FRAMEBUFFER,p.__webglFramebuffer[0]):t.bindFramebuffer(A.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=A.createRenderbuffer(),GA(p.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,nA=p.__webglDepthbuffer;A.bindRenderbuffer(A.RENDERBUFFER,nA),A.framebufferRenderbuffer(A.FRAMEBUFFER,K,A.RENDERBUFFER,nA)}}t.bindFramebuffer(A.FRAMEBUFFER,null)}function de(E,p,Q){const O=i.get(E);p!==void 0&&QA(O.__webglFramebuffer,E,E.texture,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,0),Q!==void 0&&ZA(E)}function Me(E){const p=E.texture,Q=i.get(E),O=i.get(p);E.addEventListener("dispose",m);const K=E.textures,nA=E.isWebGLCubeRenderTarget===!0,oA=K.length>1;if(oA||(O.__webglTexture===void 0&&(O.__webglTexture=A.createTexture()),O.__version=p.version,a.memory.textures++),nA){Q.__webglFramebuffer=[];for(let b=0;b<6;b++)if(p.mipmaps&&p.mipmaps.length>0){Q.__webglFramebuffer[b]=[];for(let tA=0;tA<p.mipmaps.length;tA++)Q.__webglFramebuffer[b][tA]=A.createFramebuffer()}else Q.__webglFramebuffer[b]=A.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){Q.__webglFramebuffer=[];for(let b=0;b<p.mipmaps.length;b++)Q.__webglFramebuffer[b]=A.createFramebuffer()}else Q.__webglFramebuffer=A.createFramebuffer();if(oA)for(let b=0,tA=K.length;b<tA;b++){const sA=i.get(K[b]);sA.__webglTexture===void 0&&(sA.__webglTexture=A.createTexture(),a.memory.textures++)}if(E.samples>0&&T(E)===!1){Q.__webglMultisampledFramebuffer=A.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(A.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let b=0;b<K.length;b++){const tA=K[b];Q.__webglColorRenderbuffer[b]=A.createRenderbuffer(),A.bindRenderbuffer(A.RENDERBUFFER,Q.__webglColorRenderbuffer[b]);const sA=n.convert(tA.format,tA.colorSpace),mA=n.convert(tA.type),$=D(tA.internalFormat,sA,mA,tA.normalized,tA.colorSpace,E.isXRRenderTarget===!0),DA=oe(E);A.renderbufferStorageMultisample(A.RENDERBUFFER,DA,$,E.width,E.height),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+b,A.RENDERBUFFER,Q.__webglColorRenderbuffer[b])}A.bindRenderbuffer(A.RENDERBUFFER,null),E.depthBuffer&&(Q.__webglDepthRenderbuffer=A.createRenderbuffer(),GA(Q.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(A.FRAMEBUFFER,null)}}if(nA){t.bindTexture(A.TEXTURE_CUBE_MAP,O.__webglTexture),Y(A.TEXTURE_CUBE_MAP,p);for(let b=0;b<6;b++)if(p.mipmaps&&p.mipmaps.length>0)for(let tA=0;tA<p.mipmaps.length;tA++)QA(Q.__webglFramebuffer[b][tA],E,p,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+b,tA);else QA(Q.__webglFramebuffer[b],E,p,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+b,0);f(p)&&C(A.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oA){for(let b=0,tA=K.length;b<tA;b++){const sA=K[b],mA=i.get(sA);let $=A.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?A.TEXTURE_3D:A.TEXTURE_2D_ARRAY),t.bindTexture($,mA.__webglTexture),Y($,sA),QA(Q.__webglFramebuffer,E,sA,A.COLOR_ATTACHMENT0+b,$,0),f(sA)&&C($)}t.unbindTexture()}else{let b=A.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(b=E.isWebGL3DRenderTarget?A.TEXTURE_3D:A.TEXTURE_2D_ARRAY),t.bindTexture(b,O.__webglTexture),Y(b,p),p.mipmaps&&p.mipmaps.length>0)for(let tA=0;tA<p.mipmaps.length;tA++)QA(Q.__webglFramebuffer[tA],E,p,A.COLOR_ATTACHMENT0,b,tA);else QA(Q.__webglFramebuffer,E,p,A.COLOR_ATTACHMENT0,b,0);f(p)&&C(b),t.unbindTexture()}E.depthBuffer&&ZA(E)}function be(E){const p=E.textures;for(let Q=0,O=p.length;Q<O;Q++){const K=p[Q];if(f(K)){const nA=x(E),oA=i.get(K).__webglTexture;t.bindTexture(nA,oA),C(nA),t.unbindTexture()}}}const $A=[],ge=[];function ue(E){if(E.samples>0){if(T(E)===!1){const p=E.textures,Q=E.width,O=E.height;let K=A.COLOR_BUFFER_BIT;const nA=E.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT,oA=i.get(E),b=p.length>1;if(b)for(let sA=0;sA<p.length;sA++)t.bindFramebuffer(A.FRAMEBUFFER,oA.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+sA,A.RENDERBUFFER,null),t.bindFramebuffer(A.FRAMEBUFFER,oA.__webglFramebuffer),A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0+sA,A.TEXTURE_2D,null,0);t.bindFramebuffer(A.READ_FRAMEBUFFER,oA.__webglMultisampledFramebuffer);const tA=E.texture.mipmaps;tA&&tA.length>0?t.bindFramebuffer(A.DRAW_FRAMEBUFFER,oA.__webglFramebuffer[0]):t.bindFramebuffer(A.DRAW_FRAMEBUFFER,oA.__webglFramebuffer);for(let sA=0;sA<p.length;sA++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=A.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=A.STENCIL_BUFFER_BIT)),b){A.framebufferRenderbuffer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.RENDERBUFFER,oA.__webglColorRenderbuffer[sA]);const mA=i.get(p[sA]).__webglTexture;A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,mA,0)}A.blitFramebuffer(0,0,Q,O,0,0,Q,O,K,A.NEAREST),l===!0&&($A.length=0,ge.length=0,$A.push(A.COLOR_ATTACHMENT0+sA),E.depthBuffer&&E.resolveDepthBuffer===!1&&($A.push(nA),ge.push(nA),A.invalidateFramebuffer(A.DRAW_FRAMEBUFFER,ge)),A.invalidateFramebuffer(A.READ_FRAMEBUFFER,$A))}if(t.bindFramebuffer(A.READ_FRAMEBUFFER,null),t.bindFramebuffer(A.DRAW_FRAMEBUFFER,null),b)for(let sA=0;sA<p.length;sA++){t.bindFramebuffer(A.FRAMEBUFFER,oA.__webglMultisampledFramebuffer),A.framebufferRenderbuffer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+sA,A.RENDERBUFFER,oA.__webglColorRenderbuffer[sA]);const mA=i.get(p[sA]).__webglTexture;t.bindFramebuffer(A.FRAMEBUFFER,oA.__webglFramebuffer),A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0+sA,A.TEXTURE_2D,mA,0)}t.bindFramebuffer(A.DRAW_FRAMEBUFFER,oA.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const p=E.stencilBuffer?A.DEPTH_STENCIL_ATTACHMENT:A.DEPTH_ATTACHMENT;A.invalidateFramebuffer(A.DRAW_FRAMEBUFFER,[p])}}}function oe(E){return Math.min(r.maxSamples,E.samples)}function T(E){const p=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function Re(E){const p=a.render.frame;c.get(E)!==p&&(c.set(E,p),E.update())}function WA(E,p){const Q=E.colorSpace,O=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||Q!=="srgb-linear"&&Q!==""&&(HA.getTransfer(Q)==="srgb"?(O!==1023||K!==1009)&&MA("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yA("WebGLTextures: Unsupported texture color space:",Q)),p}function Ae(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(o.width=E.naturalWidth||E.width,o.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(o.width=E.displayWidth,o.height=E.displayHeight):(o.width=E.width,o.height=E.height),o}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.getTextureUnits=k,this.setTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=AA,this.setTexture3D=eA,this.setTextureCube=hA,this.rebindTextures=de,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ZA,this.setupFrameBufferTexture=QA,this.useMultisampledRTT=T,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Lu(A,e){function t(i,r=""){let n;const a=HA.getTransfer(r);if(i===1009)return A.UNSIGNED_BYTE;if(i===1017)return A.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return A.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return A.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return A.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return A.BYTE;if(i===1011)return A.SHORT;if(i===1012)return A.UNSIGNED_SHORT;if(i===1013)return A.INT;if(i===1014)return A.UNSIGNED_INT;if(i===1015)return A.FLOAT;if(i===1016)return A.HALF_FLOAT;if(i===1021)return A.ALPHA;if(i===1022)return A.RGB;if(i===1023)return A.RGBA;if(i===1026)return A.DEPTH_COMPONENT;if(i===1027)return A.DEPTH_STENCIL;if(i===1028)return A.RED;if(i===1029)return A.RED_INTEGER;if(i===1030)return A.RG;if(i===1031)return A.RG_INTEGER;if(i===1033)return A.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===33776)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===33776)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===35840)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===36196||i===37492)return a==="srgb"?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return n.COMPRESSED_R11_EAC;if(i===37489)return n.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return n.COMPRESSED_RG11_EAC;if(i===37491)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===37808)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===36492)return a==="srgb"?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===36283)return n.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?A.UNSIGNED_INT_24_8:A[i]!==void 0?A[i]:null}return{convert:t}}var Uu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fu=`
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

}`,zu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(A,e){if(this.texture===null){const t=new Ia(A.texture);(A.depthNear!==e.depthNear||A.depthFar!==e.depthFar)&&(this.depthNear=A.depthNear,this.depthFar=A.depthFar),this.texture=t}}getMesh(A){if(this.texture!==null&&this.mesh===null){const e=A.cameras[0].viewport,t=new Qe({vertexShader:Uu,fragmentShader:Fu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new yi(20,20),t)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nu=class extends xt{constructor(A,e){super();const t=this;let i=null,r=1,n=null,a="local-floor",s=1,l=null,o=null,c=null,u=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",P=new zu,d={},f=e.getContextAttributes();let C=null,x=null;const D=[],M=[],S=new IA;let y=null;const m=new Ge;m.viewport=new ie;const B=new Ge;B.viewport=new ie;const W=[m,B],_=new wc;let V=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let iA=D[Y];return iA===void 0&&(iA=new Or,D[Y]=iA),iA.getTargetRaySpace()},this.getControllerGrip=function(Y){let iA=D[Y];return iA===void 0&&(iA=new Or,D[Y]=iA),iA.getGripSpace()},this.getHand=function(Y){let iA=D[Y];return iA===void 0&&(iA=new Or,D[Y]=iA),iA.getHandSpace()};function k(Y){const iA=M.indexOf(Y.inputSource);if(iA===-1)return;const fA=D[iA];fA!==void 0&&(fA.update(Y.inputSource,Y.frame,l||n),fA.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<D.length;Y++){const iA=M[Y];iA!==null&&(M[Y]=null,D[Y].disconnect(iA))}V=null,G=null,P.reset();for(const Y in d)delete d[Y];A.setRenderTarget(C),h=null,u=null,c=null,i=null,x=null,YA.stop(),t.isPresenting=!1,A.setPixelRatio(y),A.setSize(S.width,S.height,!1),t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,t.isPresenting===!0&&MA("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,t.isPresenting===!0&&MA("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return c===null&&v&&(c=new XRWebGLBinding(i,e)),c},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(C=A.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),y=A.getPixelRatio(),A.getSize(S),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let iA=null,fA=null,uA=null;f.depth&&(uA=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,iA=f.stencil?$n:mi,fA=f.stencil?Zn:Mt);const CA={colorFormat:e.RGBA8,depthFormat:uA,scaleFactor:r};c=this.getBinding(),u=c.createProjectionLayer(CA),i.updateRenderState({layers:[u]}),A.setPixelRatio(1),A.setSize(u.textureWidth,u.textureHeight,!1),x=new Ye(u.textureWidth,u.textureHeight,{format:pi,type:dt,depthTexture:new ti(u.textureWidth,u.textureHeight,fA,void 0,void 0,void 0,void 0,void 0,void 0,iA),stencilBuffer:f.stencil,colorSpace:A.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const iA={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,iA),i.updateRenderState({baseLayer:h}),A.setPixelRatio(1),A.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Ye(h.framebufferWidth,h.framebufferHeight,{format:pi,type:dt,colorSpace:A.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),l=null,n=await i.requestReferenceSpace(a),YA.setContext(i),YA.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function X(Y){for(let iA=0;iA<Y.removed.length;iA++){const fA=Y.removed[iA],uA=M.indexOf(fA);uA>=0&&(M[uA]=null,D[uA].disconnect(fA))}for(let iA=0;iA<Y.added.length;iA++){const fA=Y.added[iA];let uA=M.indexOf(fA);if(uA===-1){for(let _A=0;_A<D.length;_A++)if(_A>=M.length){M.push(fA),uA=_A;break}else if(M[_A]===null){M[_A]=fA,uA=_A;break}if(uA===-1)break}const CA=D[uA];CA&&CA.connect(fA)}}const L=new z,J=new z;function AA(Y,iA,fA){L.setFromMatrixPosition(iA.matrixWorld),J.setFromMatrixPosition(fA.matrixWorld);const uA=L.distanceTo(J),CA=iA.projectionMatrix.elements,_A=fA.projectionMatrix.elements,QA=CA[14]/(CA[10]-1),GA=CA[14]/(CA[10]+1),NA=(CA[9]+1)/CA[5],ZA=(CA[9]-1)/CA[5],de=(CA[8]-1)/CA[0],Me=(_A[8]+1)/_A[0],be=QA*de,$A=QA*Me,ge=uA/(-de+Me),ue=ge*-de;if(iA.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ue),Y.translateZ(ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),CA[10]===-1)Y.projectionMatrix.copy(iA.projectionMatrix),Y.projectionMatrixInverse.copy(iA.projectionMatrixInverse);else{const oe=QA+ge,T=GA+ge,Re=be-ue,WA=$A+(uA-ue),Ae=NA*GA/T*oe,E=ZA*GA/T*oe;Y.projectionMatrix.makePerspective(Re,WA,Ae,E,oe,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function eA(Y,iA){iA===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(iA.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let iA=Y.near,fA=Y.far;P.texture!==null&&(P.depthNear>0&&(iA=P.depthNear),P.depthFar>0&&(fA=P.depthFar)),_.near=B.near=m.near=iA,_.far=B.far=m.far=fA,(V!==_.near||G!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),V=_.near,G=_.far),_.layers.mask=Y.layers.mask|6,m.layers.mask=_.layers.mask&-5,B.layers.mask=_.layers.mask&-3;const uA=Y.parent,CA=_.cameras;eA(_,uA);for(let _A=0;_A<CA.length;_A++)eA(CA[_A],uA);CA.length===2?AA(_,m,B):_.projectionMatrix.copy(m.projectionMatrix),hA(Y,_,uA)};function hA(Y,iA,fA){fA===null?Y.matrix.copy(iA.matrixWorld):(Y.matrix.copy(fA.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(iA.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(iA.projectionMatrix),Y.projectionMatrixInverse.copy(iA.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&h===null))return s},this.setFoveation=function(Y){s=Y,u!==null&&(u.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(_)},this.getCameraTexture=function(Y){return d[Y]};let PA=null;function kA(Y,iA){if(o=iA.getViewerPose(l||n),g=iA,o!==null){const fA=o.views;h!==null&&(A.setRenderTargetFramebuffer(x,h.framebuffer),A.setRenderTarget(x));let uA=!1;fA.length!==_.cameras.length&&(_.cameras.length=0,uA=!0);for(let _A=0;_A<fA.length;_A++){const QA=fA[_A];let GA=null;if(h!==null)GA=h.getViewport(QA);else{const ZA=c.getViewSubImage(u,QA);GA=ZA.viewport,_A===0&&(A.setRenderTargetTextures(x,ZA.colorTexture,ZA.depthStencilTexture),A.setRenderTarget(x))}let NA=W[_A];NA===void 0&&(NA=new Ge,NA.layers.enable(_A),NA.viewport=new ie,W[_A]=NA),NA.matrix.fromArray(QA.transform.matrix),NA.matrix.decompose(NA.position,NA.quaternion,NA.scale),NA.projectionMatrix.fromArray(QA.projectionMatrix),NA.projectionMatrixInverse.copy(NA.projectionMatrix).invert(),NA.viewport.set(GA.x,GA.y,GA.width,GA.height),_A===0&&(_.matrix.copy(NA.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),uA===!0&&_.cameras.push(NA)}const CA=i.enabledFeatures;if(CA&&CA.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){c=t.getBinding();const _A=c.getDepthInformation(fA[0]);_A&&_A.isValid&&_A.texture&&P.init(_A,i.renderState)}if(CA&&CA.includes("camera-access")&&v){A.state.unbindTexture(),c=t.getBinding();for(let _A=0;_A<fA.length;_A++){const QA=fA[_A].camera;if(QA){let GA=d[QA];GA||(GA=new Ia,d[QA]=GA);const NA=c.getCameraImage(QA);GA.sourceTexture=NA}}}}for(let fA=0;fA<D.length;fA++){const uA=M[fA],CA=D[fA];uA!==null&&CA!==void 0&&CA.update(uA,iA,l||n)}PA&&PA(Y,iA),iA.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:iA}),g=null}const YA=new ka;YA.setAnimationLoop(kA),this.setAnimationLoop=function(Y){PA=Y},this.dispose=function(){}}},Hu=new ae,ws=new bA;ws.set(-1,0,0,0,1,0,0,0,1);function Ou(A,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,Ra(A)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function r(d,f,C,x,D){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(d,f):f.isMeshLambertMaterial?(n(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(d,f),u(d,f)):f.isMeshPhongMaterial?(n(d,f),c(d,f),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(d,f),h(d,f),f.isMeshPhysicalMaterial&&g(d,f,D)):f.isMeshMatcapMaterial?(n(d,f),v(d,f)):f.isMeshDepthMaterial?n(d,f):f.isMeshDistanceMaterial?(n(d,f),P(d,f)):f.isMeshNormalMaterial?n(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&s(d,f)):f.isPointsMaterial?l(d,f,C,x):f.isSpriteMaterial?o(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===1&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===1&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const C=e.get(f),x=C.envMap,D=C.envMapRotation;x&&(d.envMap.value=x,d.envMapRotation.value.setFromMatrix4(Hu.makeRotationFromEuler(D)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(ws),d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function s(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,C,x){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*C,d.scale.value=x*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function g(d,f,C){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=C.texture,d.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,f){f.matcap&&(d.matcap.value=f.matcap)}function P(d,f){const C=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(C.matrixWorld),d.nearDistance.value=C.shadow.camera.near,d.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vu(A,e,t,i){let r={},n={},a=[];const s=A.getParameter(A.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,M){const S=M.program;i.uniformBlockBinding(D,S)}function o(D,M){let S=r[D.id];S===void 0&&(d(D),S=c(D),r[D.id]=S,D.addEventListener("dispose",C));const y=M.program;i.updateUBOMapping(D,y);const m=e.render.frame;n[D.id]!==m&&(h(D),n[D.id]=m)}function c(D){const M=u();D.__bindingPointIndex=M;const S=A.createBuffer(),y=D.__size,m=D.usage;return A.bindBuffer(A.UNIFORM_BUFFER,S),A.bufferData(A.UNIFORM_BUFFER,y,m),A.bindBuffer(A.UNIFORM_BUFFER,null),A.bindBufferBase(A.UNIFORM_BUFFER,M,S),S}function u(){for(let D=0;D<s;D++)if(a.indexOf(D)===-1)return a.push(D),D;return yA("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(D){const M=r[D.id],S=D.uniforms,y=D.__cache;A.bindBuffer(A.UNIFORM_BUFFER,M);for(let m=0,B=S.length;m<B;m++){const W=S[m];if(Array.isArray(W))for(let _=0,V=W.length;_<V;_++)g(W[_],m,_,y);else g(W,m,0,y)}A.bindBuffer(A.UNIFORM_BUFFER,null)}function g(D,M,S,y){if(P(D,M,S,y)===!0){const m=D.__offset,B=D.value;if(Array.isArray(B)){let W=0;for(let _=0;_<B.length;_++){const V=B[_],G=f(V);v(V,D.__data,W),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(W+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(B,D.__data,0);A.bufferSubData(A.UNIFORM_BUFFER,m,D.__data)}}function v(D,M,S){typeof D=="number"||typeof D=="boolean"?M[0]=D:D.isMatrix3?(M[0]=D.elements[0],M[1]=D.elements[1],M[2]=D.elements[2],M[3]=0,M[4]=D.elements[3],M[5]=D.elements[4],M[6]=D.elements[5],M[7]=0,M[8]=D.elements[6],M[9]=D.elements[7],M[10]=D.elements[8],M[11]=0):ArrayBuffer.isView(D)?M.set(new D.constructor(D.buffer,D.byteOffset,M.length)):D.toArray(M,S)}function P(D,M,S,y){const m=D.value,B=M+"_"+S;if(y[B]===void 0)return typeof m=="number"||typeof m=="boolean"?y[B]=m:ArrayBuffer.isView(m)?y[B]=m.slice():y[B]=m.clone(),!0;{const W=y[B];if(typeof m=="number"||typeof m=="boolean"){if(W!==m)return y[B]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(W.equals(m)===!1)return W.copy(m),!0}}return!1}function d(D){const M=D.uniforms;let S=0;const y=16;for(let B=0,W=M.length;B<W;B++){const _=Array.isArray(M[B])?M[B]:[M[B]];for(let V=0,G=_.length;V<G;V++){const k=_[V],N=Array.isArray(k.value)?k.value:[k.value];for(let X=0,L=N.length;X<L;X++){const J=N[X],AA=f(J),eA=S%y,hA=eA%AA.boundary,PA=eA+hA;S+=hA,PA!==0&&y-PA<AA.storage&&(S+=y-PA),k.__data=new Float32Array(AA.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=AA.storage}}}const m=S%y;return m>0&&(S+=y-m),D.__size=S,D.__cache={},this}function f(D){const M={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(M.boundary=4,M.storage=4):D.isVector2?(M.boundary=8,M.storage=8):D.isVector3||D.isColor?(M.boundary=16,M.storage=12):D.isVector4?(M.boundary=16,M.storage=16):D.isMatrix3?(M.boundary=48,M.storage=48):D.isMatrix4?(M.boundary=64,M.storage=64):D.isTexture?MA("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(M.boundary=16,M.storage=D.byteLength):MA("WebGLRenderer: Unsupported uniform value type.",D),M}function C(D){const M=D.target;M.removeEventListener("dispose",C);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),A.deleteBuffer(r[M.id]),delete r[M.id],delete n[M.id]}function x(){for(const D in r)A.deleteBuffer(r[D]);a=[],r={},n={}}return{bind:l,update:o,dispose:x}}var ku=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ze=null;function Gu(){return Ze===null&&(Ze=new Gl(ku,16,16,Wi,Ct),Ze.name="DFG_LUT",Ze.minFilter=Ce,Ze.magFilter=Ce,Ze.wrapS=At,Ze.wrapT=At,Ze.generateMipmaps=!1,Ze.needsUpdate=!0),Ze}var Wu=class{constructor(A={}){const{canvas:e=nl(),context:t=null,depth:i=!0,stencil:r=!1,alpha:n=!1,antialias:a=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:l=!1,powerPreference:o="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:u=!1,outputBufferType:h=dt}=A;this.isWebGLRenderer=!0;let g;if(t!==null){if(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=t.getContextAttributes().alpha}else g=n;const v=h,P=new Set([ta,ea,Aa]),d=new Set([dt,Mt,Kn,Zn,Jn,qn]),f=new Uint32Array(4),C=new Int32Array(4),x=new z;let D=null,M=null;const S=[],y=[];let m=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let W=!1,_=null,V=null,G=null,k=null;this._outputColorSpace=xe;let N=0,X=0,L=null,J=-1,AA=null;const eA=new ie,hA=new ie;let PA=null;const kA=new OA(0);let YA=0,Y=e.width,iA=e.height,fA=1,uA=null,CA=null;const _A=new ie(0,0,Y,iA),QA=new ie(0,0,Y,iA);let GA=!1;const NA=new an;let ZA=!1,de=!1;const Me=new ae,be=new z,$A=new ie,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function oe(){return L===null?fA:1}let T=t;function Re(w,R){return e.getContext(w,R)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:o,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r185"),e.addEventListener("webglcontextlost",xA,!1),e.addEventListener("webglcontextrestored",Pe,!1),e.addEventListener("webglcontextcreationerror",JA,!1),T===null){const R="webgl2";if(T=Re(R,w),T===null)throw Re(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw yA("WebGLRenderer: "+w.message),w}let WA,Ae,E,p,Q,O,K,nA,oA,b,tA,sA,mA,$,DA,EA,TA,XA,I,j,q,dA,vA;function Z(){WA=new Gc(T),WA.init(),q=new Lu(T,WA),Ae=new Uc(T,WA,A,q),E=new bu(T,WA),Ae.reversedDepthBuffer&&u&&E.buffers.depth.setReversed(!0),V=T.createFramebuffer(),G=T.createFramebuffer(),k=T.createFramebuffer(),p=new Yc(T),Q=new wu,O=new Ru(T,WA,E,Q,Ae,q,p),K=new kc(B),nA=new Tc(T),dA=new Rc(T,nA),oA=new Wc(T,nA,p,dA),b=new Kc(T,oA,nA,dA,p),XA=new jc(T,Ae,O),DA=new Fc(Q),tA=new vu(B,K,WA,Ae,dA,DA),sA=new Ou(B,Q),mA=new Du,$=new _u(WA),TA=new bc(B,K,E,b,g,s),EA=new Iu(B,b,Ae),vA=new Vu(T,p,Ae,E),I=new Lc(T,WA,p),j=new Xc(T,WA,p),p.programs=tA.programs,B.capabilities=Ae,B.extensions=WA,B.properties=Q,B.renderLists=mA,B.shadowMap=EA,B.state=E,B.info=p}Z(),v!==1009&&(m=new qc(v,e.width,e.height,a,i,r));const lA=new Nu(B,T);this.xr=lA,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const w=WA.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=WA.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return fA},this.setPixelRatio=function(w){w!==void 0&&(fA=w,this.setSize(Y,iA,!1))},this.getSize=function(w){return w.set(Y,iA)},this.setSize=function(w,R,H=!0){if(lA.isPresenting){MA("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,iA=R,e.width=Math.floor(w*fA),e.height=Math.floor(R*fA),H===!0&&(e.style.width=w+"px",e.style.height=R+"px"),m!==null&&m.setSize(e.width,e.height),this.setViewport(0,0,w,R)},this.getDrawingBufferSize=function(w){return w.set(Y*fA,iA*fA).floor()},this.setDrawingBufferSize=function(w,R,H){Y=w,iA=R,fA=H,e.width=Math.floor(w*H),e.height=Math.floor(R*H),this.setViewport(0,0,w,R)},this.setEffects=function(w){if(v===1009){yA("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let R=0;R<w.length;R++)if(w[R].isOutputPass===!0){MA("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}m.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(eA)},this.getViewport=function(w){return w.copy(_A)},this.setViewport=function(w,R,H,F){w.isVector4?_A.set(w.x,w.y,w.z,w.w):_A.set(w,R,H,F),E.viewport(eA.copy(_A).multiplyScalar(fA).round())},this.getScissor=function(w){return w.copy(QA)},this.setScissor=function(w,R,H,F){w.isVector4?QA.set(w.x,w.y,w.z,w.w):QA.set(w,R,H,F),E.scissor(hA.copy(QA).multiplyScalar(fA).round())},this.getScissorTest=function(){return GA},this.setScissorTest=function(w){E.setScissorTest(GA=w)},this.setOpaqueSort=function(w){uA=w},this.setTransparentSort=function(w){CA=w},this.getClearColor=function(w){return w.copy(TA.getClearColor())},this.setClearColor=function(){TA.setClearColor(...arguments)},this.getClearAlpha=function(){return TA.getClearAlpha()},this.setClearAlpha=function(){TA.setClearAlpha(...arguments)},this.clear=function(w=!0,R=!0,H=!0){let F=0;if(w){let U=!1;if(L!==null){const rA=L.texture.format;U=P.has(rA)}if(U){const rA=L.texture.type,cA=d.has(rA),gA=TA.getClearColor(),pA=TA.getClearAlpha(),SA=gA.r,UA=gA.g,FA=gA.b;cA?(f[0]=SA,f[1]=UA,f[2]=FA,f[3]=pA,T.clearBufferuiv(T.COLOR,0,f)):(C[0]=SA,C[1]=UA,C[2]=FA,C[3]=pA,T.clearBufferiv(T.COLOR,0,C))}else F|=T.COLOR_BUFFER_BIT}R&&(F|=T.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(F|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&T.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),_=w},this.dispose=function(){e.removeEventListener("webglcontextlost",xA,!1),e.removeEventListener("webglcontextrestored",Pe,!1),e.removeEventListener("webglcontextcreationerror",JA,!1),TA.dispose(),mA.dispose(),$.dispose(),Q.dispose(),K.dispose(),b.dispose(),dA.dispose(),vA.dispose(),tA.dispose(),lA.dispose(),lA.removeEventListener("sessionstart",In),lA.removeEventListener("sessionend",bn),Et.stop()};function xA(w){w.preventDefault(),oa("WebGLRenderer: Context Lost."),W=!0}function Pe(){oa("WebGLRenderer: Context Restored."),W=!1;const w=p.autoReset,R=EA.enabled,H=EA.autoUpdate,F=EA.needsUpdate,U=EA.type;Z(),p.autoReset=w,EA.enabled=R,EA.autoUpdate=H,EA.needsUpdate=F,EA.type=U}function JA(w){yA("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function We(w){const R=w.target;R.removeEventListener("dispose",We),$e(R)}function $e(w){eo(w),Q.remove(w)}function eo(w){const R=Q.get(w).programs;R!==void 0&&(R.forEach(function(H){tA.releaseProgram(H)}),w.isShaderMaterial&&tA.releaseShaderCache(w))}this.renderBufferDirect=function(w,R,H,F,U,rA){R===null&&(R=ge);const cA=U.isMesh&&U.matrixWorld.determinantAffine()<0,gA=ro(w,R,H,F,U);E.setMaterial(F,cA);let pA=H.index,SA=1;if(F.wireframe===!0){if(pA=oA.getWireframeAttribute(H),pA===void 0)return;SA=2}const UA=H.drawRange,FA=H.attributes.position;let BA=UA.start*SA,qA=(UA.start+UA.count)*SA;rA!==null&&(BA=Math.max(BA,rA.start*SA),qA=Math.min(qA,(rA.start+rA.count)*SA)),pA!==null?(BA=Math.max(BA,0),qA=Math.min(qA,pA.count)):FA!=null&&(BA=Math.max(BA,0),qA=Math.min(qA,FA.count));const ee=qA-BA;if(ee<0||ee===1/0)return;dA.setup(U,F,gA,H,pA);let te,VA=I;if(pA!==null&&(te=nA.get(pA),VA=j,VA.setIndex(te)),U.isMesh)F.wireframe===!0?(E.setLineWidth(F.wireframeLinewidth*oe()),VA.setMode(T.LINES)):VA.setMode(T.TRIANGLES);else if(U.isLine){let me=F.linewidth;me===void 0&&(me=1),E.setLineWidth(me*oe()),U.isLineSegments?VA.setMode(T.LINES):U.isLineLoop?VA.setMode(T.LINE_LOOP):VA.setMode(T.LINE_STRIP)}else U.isPoints?VA.setMode(T.POINTS):U.isSprite&&VA.setMode(T.TRIANGLES);if(U.isBatchedMesh)if(WA.get("WEBGL_multi_draw"))VA.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const me=U._multiDrawStarts,wA=U._multiDrawCounts,Ne=U._multiDrawCount,Bt=pA?nA.get(pA).bytesPerElement:1,Le=Q.get(F).currentProgram.getUniforms();for(let Xe=0;Xe<Ne;Xe++)Le.setValue(T,"_gl_DrawID",Xe),VA.render(me[Xe]/Bt,wA[Xe])}else if(U.isInstancedMesh)VA.renderInstances(BA,ee,U.count);else if(H.isInstancedBufferGeometry){const me=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,wA=Math.min(H.instanceCount,me);VA.renderInstances(BA,ee,wA)}else VA.render(BA,ee)};function Tn(w,R,H){w.transparent===!0&&w.side===2&&w.forceSinglePass===!1?(w.side=1,w.needsUpdate=!0,Vi(w,R,H),w.side=0,w.needsUpdate=!0,Vi(w,R,H),w.side=2):Vi(w,R,H)}this.compile=function(w,R,H=null){H===null&&(H=w),M=$.get(H),M.init(R),y.push(M),H.traverseVisible(function(U){U.isLight&&U.layers.test(R.layers)&&(M.pushLight(U),U.castShadow&&M.pushShadow(U))}),w!==H&&w.traverseVisible(function(U){U.isLight&&U.layers.test(R.layers)&&(M.pushLight(U),U.castShadow&&M.pushShadow(U))}),M.setupLights();const F=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const rA=U.material;if(rA)if(Array.isArray(rA))for(let cA=0;cA<rA.length;cA++){const gA=rA[cA];Tn(gA,H,U),F.add(gA)}else Tn(rA,H,U),F.add(rA)}),M=y.pop(),F},this.compileAsync=function(w,R,H=null){const F=this.compile(w,R,H);return new Promise(U=>{function rA(){if(F.forEach(function(cA){Q.get(cA).currentProgram.isReady()&&F.delete(cA)}),F.size===0){U(w);return}setTimeout(rA,10)}WA.get("KHR_parallel_shader_compile")!==null?rA():setTimeout(rA,10)})};let xr=null;function to(w){xr&&xr(w)}function In(){Et.stop()}function bn(){Et.start()}const Et=new ka;Et.setAnimationLoop(to),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(w){xr=w,lA.setAnimationLoop(w),w===null?Et.stop():Et.start()},lA.addEventListener("sessionstart",In),lA.addEventListener("sessionend",bn),this.render=function(w,R){if(R!==void 0&&R.isCamera!==!0){yA("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;_!==null&&_.renderStart(w,R);const H=lA.enabled===!0&&lA.isPresenting===!0,F=m!==null&&(L===null||H)&&m.begin(B,L);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),lA.enabled===!0&&lA.isPresenting===!0&&(m===null||m.isCompositing()===!1)&&(lA.cameraAutoUpdate===!0&&lA.updateCamera(R),R=lA.getCamera()),w.isScene===!0&&w.onBeforeRender(B,w,R,L),M=$.get(w,y.length),M.init(R),M.state.textureUnits=O.getTextureUnits(),y.push(M),Me.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),NA.setFromProjectionMatrix(Me,Ht,R.reversedDepth),de=this.localClippingEnabled,ZA=DA.init(this.clippingPlanes,de),D=mA.get(w,S.length),D.init(),S.push(D),lA.enabled===!0&&lA.isPresenting===!0){const rA=B.xr.getDepthSensingMesh();rA!==null&&_r(rA,R,-1/0,B.sortObjects)}_r(w,R,0,B.sortObjects),D.finish(),B.sortObjects===!0&&D.sort(uA,CA,R.reversedDepth),ue=lA.enabled===!1||lA.isPresenting===!1||lA.hasDepthSensing()===!1,ue&&TA.addToRenderList(D,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ZA===!0&&DA.beginShadows();const U=M.state.shadowsArray;if(EA.render(U,w,R),ZA===!0&&DA.endShadows(),(F&&m.hasRenderPass())===!1){const rA=D.opaque,cA=D.transmissive;if(M.setupLights(),R.isArrayCamera){const gA=R.cameras;if(cA.length>0)for(let pA=0,SA=gA.length;pA<SA;pA++){const UA=gA[pA];Ln(rA,cA,w,UA)}ue&&TA.render(w);for(let pA=0,SA=gA.length;pA<SA;pA++){const UA=gA[pA];Rn(D,w,UA,UA.viewport)}}else cA.length>0&&Ln(rA,cA,w,R),ue&&TA.render(w),Rn(D,w,R)}L!==null&&X===0&&(O.updateMultisampleRenderTarget(L),O.updateRenderTargetMipmap(L)),F&&m.end(B),w.isScene===!0&&w.onAfterRender(B,w,R),dA.resetDefaultState(),J=-1,AA=null,y.pop(),y.length>0?(M=y[y.length-1],O.setTextureUnits(M.state.textureUnits),ZA===!0&&DA.setGlobalState(B.clippingPlanes,M.state.camera)):M=null,S.pop(),S.length>0?D=S[S.length-1]:D=null,_!==null&&_.renderEnd()};function _r(w,R,H,F){if(w.visible===!1)return;if(w.layers.test(R.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(R);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||NA.intersectsSprite(w)){F&&$A.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);const rA=b.update(w),cA=w.material;cA.visible&&D.push(w,rA,cA,H,$A.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||NA.intersectsObject(w))){const rA=b.update(w),cA=w.material;if(F&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$A.copy(w.boundingSphere.center)):(rA.boundingSphere===null&&rA.computeBoundingSphere(),$A.copy(rA.boundingSphere.center)),$A.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(cA)){const gA=rA.groups;for(let pA=0,SA=gA.length;pA<SA;pA++){const UA=gA[pA],FA=cA[UA.materialIndex];FA&&FA.visible&&D.push(w,rA,FA,H,$A.z,UA)}}else cA.visible&&D.push(w,rA,cA,H,$A.z,null)}}const U=w.children;for(let rA=0,cA=U.length;rA<cA;rA++)_r(U[rA],R,H,F)}function Rn(w,R,H,F){const{opaque:U,transmissive:rA,transparent:cA}=w;M.setupLightsView(H),ZA===!0&&DA.setGlobalState(B.clippingPlanes,H),F&&E.viewport(eA.copy(F)),U.length>0&&Oi(U,R,H),rA.length>0&&Oi(rA,R,H),cA.length>0&&Oi(cA,R,H),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ln(w,R,H,F){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[F.id]===void 0){const FA=WA.has("EXT_color_buffer_half_float")||WA.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[F.id]=new Ye(1,1,{generateMipmaps:!0,type:FA?Ct:dt,minFilter:ki,samples:Math.max(4,Ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:HA.workingColorSpace})}const U=M.state.transmissionRenderTarget[F.id],rA=F.viewport||eA;U.setSize(rA.z*B.transmissionResolutionScale,rA.w*B.transmissionResolutionScale);const cA=B.getRenderTarget(),gA=B.getActiveCubeFace(),pA=B.getActiveMipmapLevel();B.setRenderTarget(U),B.getClearColor(kA),YA=B.getClearAlpha(),YA<1&&B.setClearColor(16777215,.5),B.clear(),ue&&TA.render(H);const SA=B.toneMapping;B.toneMapping=0;const UA=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),M.setupLightsView(F),ZA===!0&&DA.setGlobalState(B.clippingPlanes,F),Oi(w,H,F),O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U),WA.has("WEBGL_multisampled_render_to_texture")===!1){let FA=!1;for(let BA=0,qA=R.length;BA<qA;BA++){const{object:ee,geometry:te,material:VA,group:me}=R[BA];if(VA.side===2&&ee.layers.test(F.layers)){const wA=VA.side;VA.side=1,VA.needsUpdate=!0,Un(ee,H,F,te,VA,me),VA.side=wA,VA.needsUpdate=!0,FA=!0}}FA===!0&&(O.updateMultisampleRenderTarget(U),O.updateRenderTargetMipmap(U))}B.setRenderTarget(cA,gA,pA),B.setClearColor(kA,YA),UA!==void 0&&(F.viewport=UA),B.toneMapping=SA}function Oi(w,R,H){const F=R.isScene===!0?R.overrideMaterial:null;for(let U=0,rA=w.length;U<rA;U++){const cA=w[U],{object:gA,geometry:pA,group:SA}=cA;let UA=cA.material;UA.allowOverride===!0&&F!==null&&(UA=F),gA.layers.test(H.layers)&&Un(gA,R,H,pA,UA,SA)}}function Un(w,R,H,F,U,rA){w.onBeforeRender(B,R,H,F,U,rA),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(B,R,H,F,w,rA),U.transparent===!0&&U.side===2&&U.forceSinglePass===!1?(U.side=1,U.needsUpdate=!0,B.renderBufferDirect(H,R,F,U,w,rA),U.side=0,U.needsUpdate=!0,B.renderBufferDirect(H,R,F,U,w,rA),U.side=2):B.renderBufferDirect(H,R,F,U,w,rA),w.onAfterRender(B,R,H,F,U,rA)}function Vi(w,R,H){R.isScene!==!0&&(R=ge);const F=Q.get(w),U=M.state.lights,rA=M.state.shadowsArray,cA=U.state.version,gA=tA.getParameters(w,U.state,rA,R,H,M.state.lightProbeGridArray),pA=tA.getProgramCacheKey(gA);let SA=F.programs;F.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?R.environment:null,F.fog=R.fog;const UA=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;F.envMap=K.get(w.envMap||F.environment,UA),F.envMapRotation=F.environment!==null&&w.envMap===null?R.environmentRotation:w.envMapRotation,SA===void 0&&(w.addEventListener("dispose",We),SA=new Map,F.programs=SA);let FA=SA.get(pA);if(FA!==void 0){if(F.currentProgram===FA&&F.lightsStateVersion===cA)return zn(w,gA),FA}else gA.uniforms=tA.getUniforms(w),_!==null&&w.isNodeMaterial&&_.build(w,H,gA),w.onBeforeCompile(gA,B),FA=tA.acquireProgram(gA,pA),SA.set(pA,FA),F.uniforms=gA.uniforms;const BA=F.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(BA.clippingPlanes=DA.uniform),zn(w,gA),F.needsLights=ao(w),F.lightsStateVersion=cA,F.needsLights&&(BA.ambientLightColor.value=U.state.ambient,BA.lightProbe.value=U.state.probe,BA.directionalLights.value=U.state.directional,BA.directionalLightShadows.value=U.state.directionalShadow,BA.spotLights.value=U.state.spot,BA.spotLightShadows.value=U.state.spotShadow,BA.rectAreaLights.value=U.state.rectArea,BA.ltc_1.value=U.state.rectAreaLTC1,BA.ltc_2.value=U.state.rectAreaLTC2,BA.pointLights.value=U.state.point,BA.pointLightShadows.value=U.state.pointShadow,BA.hemisphereLights.value=U.state.hemi,BA.directionalShadowMatrix.value=U.state.directionalShadowMatrix,BA.spotLightMatrix.value=U.state.spotLightMatrix,BA.spotLightMap.value=U.state.spotLightMap,BA.pointShadowMatrix.value=U.state.pointShadowMatrix),F.lightProbeGrid=M.state.lightProbeGridArray.length>0,F.currentProgram=FA,F.uniformsList=null,FA}function Fn(w){if(w.uniformsList===null){const R=w.currentProgram.getUniforms();w.uniformsList=Dr.seqWithValue(R.seq,w.uniforms)}return w.uniformsList}function zn(w,R){const H=Q.get(w);H.outputColorSpace=R.outputColorSpace,H.batching=R.batching,H.batchingColor=R.batchingColor,H.instancing=R.instancing,H.instancingColor=R.instancingColor,H.instancingMorph=R.instancingMorph,H.skinning=R.skinning,H.morphTargets=R.morphTargets,H.morphNormals=R.morphNormals,H.morphColors=R.morphColors,H.morphTargetsCount=R.morphTargetsCount,H.numClippingPlanes=R.numClippingPlanes,H.numIntersection=R.numClipIntersection,H.vertexAlphas=R.vertexAlphas,H.vertexTangents=R.vertexTangents,H.toneMapping=R.toneMapping}function io(w,R){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;x.setFromMatrixPosition(R.matrixWorld);for(let H=0,F=w.length;H<F;H++){const U=w[H];if(U.texture!==null&&U.boundingBox.containsPoint(x))return U}return null}function ro(w,R,H,F,U){R.isScene!==!0&&(R=ge),O.resetTextureUnits();const rA=R.fog,cA=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?R.environment:null,gA=L===null?B.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:HA.workingColorSpace,pA=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,SA=K.get(F.envMap||cA,pA),UA=F.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,FA=!!H.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),BA=!!H.morphAttributes.position,qA=!!H.morphAttributes.normal,ee=!!H.morphAttributes.color;let te=0;F.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(te=B.toneMapping);const VA=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,me=VA!==void 0?VA.length:0,wA=Q.get(F),Ne=M.state.lights;if(ZA===!0&&(de===!0||w!==AA)){const jA=w===AA&&F.id===J;DA.setState(F,w,jA)}let Bt=!1;F.version===wA.__version?(wA.needsLights&&wA.lightsStateVersion!==Ne.state.version||wA.outputColorSpace!==gA||U.isBatchedMesh&&wA.batching===!1||!U.isBatchedMesh&&wA.batching===!0||U.isBatchedMesh&&wA.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wA.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wA.instancing===!1||!U.isInstancedMesh&&wA.instancing===!0||U.isSkinnedMesh&&wA.skinning===!1||!U.isSkinnedMesh&&wA.skinning===!0||U.isInstancedMesh&&wA.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wA.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wA.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wA.instancingMorph===!1&&U.morphTexture!==null||wA.envMap!==SA||F.fog===!0&&wA.fog!==rA||wA.numClippingPlanes!==void 0&&(wA.numClippingPlanes!==DA.numPlanes||wA.numIntersection!==DA.numIntersection)||wA.vertexAlphas!==UA||wA.vertexTangents!==FA||wA.morphTargets!==BA||wA.morphNormals!==qA||wA.morphColors!==ee||wA.toneMapping!==te||wA.morphTargetsCount!==me||!!wA.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,wA.__version=F.version);let Le=wA.currentProgram;Bt===!0&&(Le=Vi(F,R,U),_&&F.isNodeMaterial&&_.onUpdateProgram(F,Le,wA));let Xe=!1,ut=!1,zt=!1;const KA=Le.getUniforms(),ne=wA.uniforms;if(E.useProgram(Le.program)&&(Xe=!0,ut=!0,zt=!0),F.id!==J&&(J=F.id,ut=!0),wA.needsLights){const jA=io(M.state.lightProbeGridArray,U);wA.lightProbeGrid!==jA&&(wA.lightProbeGrid=jA,ut=!0)}if(Xe||AA!==w){E.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),KA.setValue(T,"projectionMatrix",w.projectionMatrix),KA.setValue(T,"viewMatrix",w.matrixWorldInverse);const jA=KA.map.cameraPosition;jA!==void 0&&jA.setValue(T,be.setFromMatrixPosition(w.matrixWorld)),Ae.logarithmicDepthBuffer&&KA.setValue(T,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&KA.setValue(T,"isOrthographic",w.isOrthographicCamera===!0),AA!==w&&(AA=w,ut=!0,zt=!0)}if(wA.needsLights&&(Ne.state.directionalShadowMap.length>0&&KA.setValue(T,"directionalShadowMap",Ne.state.directionalShadowMap,O),Ne.state.spotShadowMap.length>0&&KA.setValue(T,"spotShadowMap",Ne.state.spotShadowMap,O),Ne.state.pointShadowMap.length>0&&KA.setValue(T,"pointShadowMap",Ne.state.pointShadowMap,O)),U.isSkinnedMesh){KA.setOptional(T,U,"bindMatrix"),KA.setOptional(T,U,"bindMatrixInverse");const jA=U.skeleton;jA&&(jA.boneTexture===null&&jA.computeBoneTexture(),KA.setValue(T,"boneTexture",jA.boneTexture,O))}U.isBatchedMesh&&(KA.setOptional(T,U,"batchingTexture"),KA.setValue(T,"batchingTexture",U._matricesTexture,O),KA.setOptional(T,U,"batchingIdTexture"),KA.setValue(T,"batchingIdTexture",U._indirectTexture,O),KA.setOptional(T,U,"batchingColorTexture"),U._colorsTexture!==null&&KA.setValue(T,"batchingColorTexture",U._colorsTexture,O));const ft=H.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&XA.update(U,H,Le),(ut||wA.receiveShadow!==U.receiveShadow)&&(wA.receiveShadow=U.receiveShadow,KA.setValue(T,"receiveShadow",U.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&R.environment!==null&&(ne.envMapIntensity.value=R.environmentIntensity),ne.dfgLUT!==void 0&&(ne.dfgLUT.value=Gu()),ut){if(KA.setValue(T,"toneMappingExposure",B.toneMappingExposure),wA.needsLights&&no(ne,zt),rA&&F.fog===!0&&sA.refreshFogUniforms(ne,rA),sA.refreshMaterialUniforms(ne,F,fA,iA,M.state.transmissionRenderTarget[w.id]),wA.needsLights&&wA.lightProbeGrid){const jA=wA.lightProbeGrid;ne.probesSH.value=jA.texture,ne.probesMin.value.copy(jA.boundingBox.min),ne.probesMax.value.copy(jA.boundingBox.max),ne.probesResolution.value.copy(jA.resolution)}Dr.upload(T,Fn(wA),ne,O)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Dr.upload(T,Fn(wA),ne,O),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&KA.setValue(T,"center",U.center),KA.setValue(T,"modelViewMatrix",U.modelViewMatrix),KA.setValue(T,"normalMatrix",U.normalMatrix),KA.setValue(T,"modelMatrix",U.matrixWorld),F.uniformsGroups!==void 0){const jA=F.uniformsGroups;for(let gi=0,Nt=jA.length;gi<Nt;gi++){const Nn=jA[gi];vA.update(Nn,Le),vA.bind(Nn,Le)}}return Le}function no(w,R){w.ambientLightColor.needsUpdate=R,w.lightProbe.needsUpdate=R,w.directionalLights.needsUpdate=R,w.directionalLightShadows.needsUpdate=R,w.pointLights.needsUpdate=R,w.pointLightShadows.needsUpdate=R,w.spotLights.needsUpdate=R,w.spotLightShadows.needsUpdate=R,w.rectAreaLights.needsUpdate=R,w.hemisphereLights.needsUpdate=R}function ao(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,R,H){const F=Q.get(w);F.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Q.get(w.texture).__webglTexture=R,Q.get(w.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:H,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,R){const H=Q.get(w);H.__webglFramebuffer=R,H.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(w,R=0,H=0){L=w,N=R,X=H;let F=null,U=!1,rA=!1;if(w){const cA=Q.get(w);if(cA.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(T.FRAMEBUFFER,cA.__webglFramebuffer),eA.copy(w.viewport),hA.copy(w.scissor),PA=w.scissorTest,E.viewport(eA),E.scissor(hA),E.setScissorTest(PA),J=-1;return}else if(cA.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(cA.__hasExternalTextures)O.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const SA=w.depthTexture;if(cA.__boundDepthTexture!==SA){if(SA!==null&&Q.has(SA)&&(w.width!==SA.image.width||w.height!==SA.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const gA=w.texture;(gA.isData3DTexture||gA.isDataArrayTexture||gA.isCompressedArrayTexture)&&(rA=!0);const pA=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(pA[R])?F=pA[R][H]:F=pA[R],U=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?F=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(pA)?F=pA[H]:F=pA,eA.copy(w.viewport),hA.copy(w.scissor),PA=w.scissorTest}else eA.copy(_A).multiplyScalar(fA).floor(),hA.copy(QA).multiplyScalar(fA).floor(),PA=GA;if(H!==0&&(F=V),E.bindFramebuffer(T.FRAMEBUFFER,F)&&E.drawBuffers(w,F),E.viewport(eA),E.scissor(hA),E.setScissorTest(PA),U){const cA=Q.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+R,cA.__webglTexture,H)}else if(rA){const cA=R;for(let gA=0;gA<w.textures.length;gA++){const pA=Q.get(w.textures[gA]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+gA,pA.__webglTexture,H,cA)}}else if(w!==null&&H!==0){const cA=Q.get(w.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,cA.__webglTexture,H)}J=-1},this.readRenderTargetPixels=function(w,R,H,F,U,rA,cA,gA=0){if(!(w&&w.isWebGLRenderTarget)){yA("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pA=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&cA!==void 0&&(pA=pA[cA]),pA){E.bindFramebuffer(T.FRAMEBUFFER,pA);try{const SA=w.textures[gA],UA=SA.format,FA=SA.type;if(w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+gA),!Ae.textureFormatReadable(UA)){yA("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(FA)){yA("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=w.width-F&&H>=0&&H<=w.height-U&&T.readPixels(R,H,F,U,q.convert(UA),q.convert(FA),rA)}finally{const SA=L!==null?Q.get(L).__webglFramebuffer:null;E.bindFramebuffer(T.FRAMEBUFFER,SA)}}},this.readRenderTargetPixelsAsync=async function(w,R,H,F,U,rA,cA,gA=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pA=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&cA!==void 0&&(pA=pA[cA]),pA)if(R>=0&&R<=w.width-F&&H>=0&&H<=w.height-U){E.bindFramebuffer(T.FRAMEBUFFER,pA);const SA=w.textures[gA],UA=SA.format,FA=SA.type;if(w.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+gA),!Ae.textureFormatReadable(UA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(FA))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const BA=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,BA),T.bufferData(T.PIXEL_PACK_BUFFER,rA.byteLength,T.STREAM_READ),T.readPixels(R,H,F,U,q.convert(UA),q.convert(FA),0);const qA=L!==null?Q.get(L).__webglFramebuffer:null;E.bindFramebuffer(T.FRAMEBUFFER,qA);const ee=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await al(T,ee,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,BA),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,rA),T.deleteBuffer(BA),T.deleteSync(ee),rA}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,R=null,H=0){const F=Math.pow(2,-H),U=Math.floor(w.image.width*F),rA=Math.floor(w.image.height*F),cA=R!==null?R.x:0,gA=R!==null?R.y:0;O.setTexture2D(w,0),T.copyTexSubImage2D(T.TEXTURE_2D,H,0,0,cA,gA,U,rA),E.unbindTexture()},this.copyTextureToTexture=function(w,R,H=null,F=null,U=0,rA=0){let cA,gA,pA,SA,UA,FA,BA,qA,ee;const te=w.isCompressedTexture?w.mipmaps[rA]:w.image;if(H!==null)cA=H.max.x-H.min.x,gA=H.max.y-H.min.y,pA=H.isBox3?H.max.z-H.min.z:1,SA=H.min.x,UA=H.min.y,FA=H.isBox3?H.min.z:0;else{const ne=Math.pow(2,-U);cA=Math.floor(te.width*ne),gA=Math.floor(te.height*ne),w.isDataArrayTexture?pA=te.depth:w.isData3DTexture?pA=Math.floor(te.depth*ne):pA=1,SA=0,UA=0,FA=0}F!==null?(BA=F.x,qA=F.y,ee=F.z):(BA=0,qA=0,ee=0);const VA=q.convert(R.format),me=q.convert(R.type);let wA;R.isData3DTexture?(O.setTexture3D(R,0),wA=T.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(O.setTexture2DArray(R,0),wA=T.TEXTURE_2D_ARRAY):(O.setTexture2D(R,0),wA=T.TEXTURE_2D),E.activeTexture(T.TEXTURE0),E.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,R.flipY),E.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),E.pixelStorei(T.UNPACK_ALIGNMENT,R.unpackAlignment);const Ne=E.getParameter(T.UNPACK_ROW_LENGTH),Bt=E.getParameter(T.UNPACK_IMAGE_HEIGHT),Le=E.getParameter(T.UNPACK_SKIP_PIXELS),Xe=E.getParameter(T.UNPACK_SKIP_ROWS),ut=E.getParameter(T.UNPACK_SKIP_IMAGES);E.pixelStorei(T.UNPACK_ROW_LENGTH,te.width),E.pixelStorei(T.UNPACK_IMAGE_HEIGHT,te.height),E.pixelStorei(T.UNPACK_SKIP_PIXELS,SA),E.pixelStorei(T.UNPACK_SKIP_ROWS,UA),E.pixelStorei(T.UNPACK_SKIP_IMAGES,FA);const zt=w.isDataArrayTexture||w.isData3DTexture,KA=R.isDataArrayTexture||R.isData3DTexture;if(w.isDepthTexture){const ne=Q.get(w),ft=Q.get(R),jA=Q.get(ne.__renderTarget),gi=Q.get(ft.__renderTarget);E.bindFramebuffer(T.READ_FRAMEBUFFER,jA.__webglFramebuffer),E.bindFramebuffer(T.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Nt=0;Nt<pA;Nt++)zt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,U,FA+Nt),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,rA,ee+Nt)),T.blitFramebuffer(SA,UA,cA,gA,BA,qA,cA,gA,T.DEPTH_BUFFER_BIT,T.NEAREST);E.bindFramebuffer(T.READ_FRAMEBUFFER,null),E.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(U!==0||w.isRenderTargetTexture||Q.has(w)){const ne=Q.get(w),ft=Q.get(R);E.bindFramebuffer(T.READ_FRAMEBUFFER,G),E.bindFramebuffer(T.DRAW_FRAMEBUFFER,k);for(let jA=0;jA<pA;jA++)zt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ne.__webglTexture,U,FA+jA):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ne.__webglTexture,U),KA?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,ft.__webglTexture,rA,ee+jA):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ft.__webglTexture,rA),U!==0?T.blitFramebuffer(SA,UA,cA,gA,BA,qA,cA,gA,T.COLOR_BUFFER_BIT,T.NEAREST):KA?T.copyTexSubImage3D(wA,rA,BA,qA,ee+jA,SA,UA,cA,gA):T.copyTexSubImage2D(wA,rA,BA,qA,SA,UA,cA,gA);E.bindFramebuffer(T.READ_FRAMEBUFFER,null),E.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else KA?w.isDataTexture||w.isData3DTexture?T.texSubImage3D(wA,rA,BA,qA,ee,cA,gA,pA,VA,me,te.data):R.isCompressedArrayTexture?T.compressedTexSubImage3D(wA,rA,BA,qA,ee,cA,gA,pA,VA,te.data):T.texSubImage3D(wA,rA,BA,qA,ee,cA,gA,pA,VA,me,te):w.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,rA,BA,qA,cA,gA,VA,me,te.data):w.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,rA,BA,qA,te.width,te.height,VA,te.data):T.texSubImage2D(T.TEXTURE_2D,rA,BA,qA,cA,gA,VA,me,te);E.pixelStorei(T.UNPACK_ROW_LENGTH,Ne),E.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Bt),E.pixelStorei(T.UNPACK_SKIP_PIXELS,Le),E.pixelStorei(T.UNPACK_SKIP_ROWS,Xe),E.pixelStorei(T.UNPACK_SKIP_IMAGES,ut),rA===0&&R.generateMipmaps&&T.generateMipmap(wA),E.unbindTexture()},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),E.unbindTexture()},this.resetState=function(){N=0,X=0,L=null,E.reset(),dA.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ht}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(A){this._outputColorSpace=A;const e=this.getContext();e.drawingBufferColorSpace=HA._getDrawingBufferColorSpace(A),e.unpackColorSpace=HA._getUnpackColorSpace()}},wn=`
  uniform float uPeel;
  uniform float uPeelDepth;
  uniform float uDetachedTension;
  uniform float uRadius;
  uniform float uMaxAngle;
  uniform float uWind;
  uniform float uTime;
  uniform vec2 uOrigin;
  uniform vec2 uPeelDir;
  uniform vec2 uMeshSize;
  uniform float uEntranceScaleProgress;
  uniform float uPreEntranceProgress;
  uniform vec2 uEntranceAxis;

  vec3 scaleEntranceSlice(vec3 base) {
    if (uEntranceScaleProgress < 0.0) return base;

    float entranceCoordinate = abs(uEntranceAxis.x) > 0.5
      ? (uEntranceAxis.x > 0.0
          ? base.x / uMeshSize.x + 0.5
          : 0.5 - base.x / uMeshSize.x)
      : (uEntranceAxis.y < 0.0
          ? 0.5 - base.y / uMeshSize.y
          : base.y / uMeshSize.y + 0.5);
    float sliceProgress = clamp(
      uEntranceScaleProgress * 1.42 - entranceCoordinate * 0.42,
      0.0,
      1.0
    );
    float springResponse = 1.0
      - exp(-3.8 * sliceProgress) * cos(9.0 * sliceProgress);
    float sliceScale = mix(0.6, 1.0, springResponse);
    base.xy *= sliceScale;
    return base;
  }

  vec3 deformSticker(vec3 base) {
    float preEntrance = smoothstep(
      0.0,
      1.0,
      clamp(uPreEntranceProgress, 0.0, 1.0)
    );
    base.xy *= mix(1.0, 0.6, preEntrance);
    base = scaleEntranceSlice(base);
    if (uPeelDepth <= 0.00001 || uPeel <= 0.0) return base;

    vec2 direction = normalize(uPeelDir + vec2(0.00001));
    vec2 tangent = vec2(-direction.y, direction.x);
    vec2 relative = base.xy - uOrigin;
    float side = dot(relative, tangent);
    float along = dot(relative, direction);
    float front = uPeelDepth;
    float arcDistance = front - along;
    if (arcDistance <= 0.0) return base;

    float radius = max(uRadius, 0.001);
    float maxAngle = clamp(uMaxAngle, 2.55, 3.14159265);
    float arcLength = radius * maxAngle;
    float angle = min(arcDistance / radius, maxAngle);
    float projected = -radius * sin(angle);
    float elevation = radius * (1.0 - cos(angle));

    if (arcDistance > arcLength) {
      float freeLength = arcDistance - arcLength;
      projected += -freeLength * cos(maxAngle);
      elevation += freeLength * sin(maxAngle);
    }

    vec3 curved = base;
    vec2 crease = base.xy + direction * (front - along);
    curved.xy = crease + direction * projected;
    curved.z = elevation;

    float normalizedPeel = clamp(arcDistance / max(front, 0.001), 0.0, 1.0);
    float flutterEnvelope = sin(normalizedPeel * 3.14159265);
    float windWave =
      sin(uTime * 3.1 + side * 4.6 + arcDistance * 2.2) * 0.72 +
      sin(uTime * 7.4 - side * 6.8 + arcDistance * 4.1) * 0.28;
    float windDisplacement = windWave * uWind * flutterEnvelope;
    curved.z += windDisplacement * 0.032;
    curved.xy += tangent * windDisplacement * 0.04;
    curved.xy += direction * windDisplacement * 0.01;
    // Pulling a detached sheet taut unfolds the curl without turning the
    // sticker back over. Reflecting it across the peel front keeps the back
    // face toward the viewer when the sheet becomes flat.
    vec3 tautBack = base;
    tautBack.xy += direction * (2.0 * arcDistance);
    curved = mix(curved, tautBack, clamp(uDetachedTension, 0.0, 1.0));
    return curved;
  }

  vec3 stickerSurfaceNormal(vec3 base) {
    if (uPeelDepth <= 0.00001 || uPeel <= 0.0) {
      return vec3(0.0, 0.0, 1.0);
    }

    vec2 direction = normalize(uPeelDir + vec2(0.00001));
    float along = dot(base.xy - uOrigin, direction);
    float arcDistance = uPeelDepth - along;
    if (arcDistance <= 0.0) return vec3(0.0, 0.0, 1.0);

    float radius = max(uRadius, 0.001);
    float maxAngle = clamp(uMaxAngle, 2.55, 3.14159265);
    float angle = min(arcDistance / radius, maxAngle);
    vec3 curledNormal = normalize(vec3(direction * sin(angle), cos(angle)));
    return normalize(mix(
      curledNormal,
      vec3(0.0, 0.0, -1.0),
      clamp(uDetachedTension, 0.0, 1.0)
    ));
  }
`,Xu=`
  ${wn}
  #include <common>
  #include <shadowmap_pars_vertex>

  varying vec2 vUv;
  varying vec3 vNormalView;
  varying vec3 vViewPosition;
  varying float vLift;
  varying float vCurl;
  varying float vAdhered;
  varying float vShadowReceiverProximity;

  void main() {
    vUv = uv;
    vec3 deformed = deformSticker(position);
    vec3 localNormal = stickerSurfaceNormal(position);

    vec2 direction = normalize(uPeelDir + vec2(0.00001));
    vec2 relative = position.xy - uOrigin;
    float along = dot(relative, direction);
    float front = uPeelDepth;
    float arcDistance = max(front - along, 0.0);
    float peelMask =
      step(along, front) * step(0.00001, uPeelDepth);
    float effectiveRadius = max(uRadius, 0.001);
    float normalizedArc = arcDistance / effectiveRadius;
    float receiverFeather = max(min(uMeshSize.x, uMeshSize.y) * 0.006, 0.004);
    float activePeel = step(0.00001, uPeelDepth);
    float receiverDistance = max(along - front, 0.0);
    float receiverShadowReach = max(effectiveRadius * 1.6, receiverFeather * 3.0);

    vLift = max(deformed.z, 0.0);
    vCurl = peelMask
      * sin(clamp(normalizedArc, 0.0, 3.14159265))
      * (1.0 - clamp(uDetachedTension, 0.0, 1.0));
    vAdhered = mix(
      1.0,
      smoothstep(front - receiverFeather, front + receiverFeather, along),
      activePeel
    );
    vShadowReceiverProximity =
      activePeel
      * (1.0 - smoothstep(
        receiverFeather,
        receiverShadowReach,
        receiverDistance
      ));

    vec4 viewPosition = modelViewMatrix * vec4(deformed, 1.0);
    vViewPosition = viewPosition.xyz;
    vNormalView = normalize(normalMatrix * localNormal);
    vec3 transformedNormal = vNormalView;
    vec4 worldPosition = modelMatrix * vec4(deformed, 1.0);
    #include <shadowmap_vertex>
    gl_Position = projectionMatrix * viewPosition;
  }
`,id=`
  ${wn}

  uniform vec2 uShadowDirection;
  uniform float uShadowDistance;
  uniform float uShadowLiftScale;

  varying vec2 vShadowUv;

  void main() {
    vShadowUv = uv;
    vec3 deformed = deformSticker(position);
    vec4 worldPosition = modelMatrix * vec4(deformed, 1.0);
    float projectionDistance =
      uShadowDistance + max(deformed.z, 0.0) * uShadowLiftScale;
    worldPosition.xy += normalize(uShadowDirection) * projectionDistance;
    worldPosition.z = -0.004;
    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`,Yu=`
  uniform sampler2D uMap;
  uniform sampler2D uPreparedMap;
  uniform float uPreparedMix;
  uniform vec2 uTexel;
  uniform float uEdgeFinishScale;
  uniform float uEdgeBevelWidth;
  uniform float uEdgeFinishStrength;
  uniform vec3 uBackColor;
  uniform float uGloss;
  uniform float uRoughness;
  uniform vec3 uLightDirection;
  uniform float uLightIntensity;
  uniform float uAmbientLight;
  uniform float uLightSoftness;
  uniform float uMaterialType;
  uniform float uMaterialIntensity;
  uniform float uMaterialScale;
  uniform float uHolographicGrain;
  uniform float uMaterialSeed;
  uniform float uMaterialBaked;
  uniform vec3 uHolographicColorA;
  uniform vec3 uHolographicColorB;
  uniform vec3 uHolographicColorC;
  uniform vec3 uShadowColor;
  uniform float uShadowOpacity;
  uniform float uSurfaceShadowEnabled;
  uniform float uEntranceSweep;
  uniform vec2 uEntranceAxis;
  uniform float uLaserCoreWidth;
  uniform float uLaserBandWidth;
  uniform float uLaserBandOpacity;
  uniform float uLaserBrightness;
  uniform float uLaserHighlightIntensity;
  uniform float uBackgroundRemovalDistortion;
  uniform float uRemovalDistortionRange;
  uniform float uRemovalDistortionStrength;
  uniform float uRemovalRippleDensity;
  uniform float uRemovalRippleSpeed;
  uniform float uInteractionHint;
  uniform float uInteractionHintRadius;
  uniform vec3 uInteractionHintColor;
  uniform float uTime;
  uniform float uPeel;
  uniform float uPreserveFrontColor;
  uniform float uOpacity;

  varying vec2 vUv;
  varying vec3 vNormalView;
  varying vec3 vViewPosition;
  varying float vLift;
  varying float vCurl;
  varying float vAdhered;
  varying float vShadowReceiverProximity;

  #include <common>
  #include <packing>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>

  float hash21(vec2 point) {
    point = fract(point * vec2(123.34, 456.21));
    point += dot(point, point + 45.32);
    return fract(point.x * point.y);
  }

  vec4 artworkSample(vec2 uv) {
    vec2 safeUv = clamp(uv, vec2(0.0), vec2(1.0));
    vec4 artwork = texture2D(uMap, safeUv);
    if (uPreparedMix > 0.0) {
      artwork = mix(
        artwork,
        texture2D(uPreparedMap, safeUv),
        uPreparedMix
      );
    }
    return artwork;
  }

  vec3 spectralPalette(float phase) {
    return 0.55 + 0.45 * cos(
      6.2831853 * (phase + vec3(0.0, 0.333333, 0.666667))
    );
  }

  vec3 screenBlend(vec3 base, vec3 layer) {
    return 1.0 - (1.0 - base) * (1.0 - layer);
  }

  vec3 holographicPalette(float phase) {
    float position = fract(phase);
    if (position < 0.333333) {
      return mix(
        uHolographicColorA,
        uHolographicColorB,
        position * 3.0
      );
    }
    if (position < 0.666667) {
      return mix(
        uHolographicColorB,
        uHolographicColorC,
        (position - 0.333333) * 3.0
      );
    }
    return mix(
      uHolographicColorC,
      uHolographicColorA,
      (position - 0.666667) * 3.0
    );
  }

  float previewGradientPhase() {
    float aspect = uTexel.y / max(uTexel.x, 0.000001);
    float aspectSquared = aspect * aspect;
    float horizontalWeight = aspectSquared / (aspectSquared + 1.0);
    return vUv.x * horizontalWeight
      + vUv.y * (1.0 - horizontalWeight);
  }

  float previewReflectiveOpacity(float phase) {
    float position = fract(phase);
    if (position < 0.25 || position > 0.78) return 0.0;
    if (position < 0.46) {
      return mix(0.0, 0.7, (position - 0.25) / 0.21);
    }
    if (position < 0.58) {
      return mix(0.7, 0.14, (position - 0.46) / 0.12);
    }
    return mix(0.14, 0.0, (position - 0.58) / 0.2);
  }

  vec3 applyFrontMaterial(
    vec3 base,
    vec3 normal,
    vec3 viewDirection,
    vec3 lightDirection,
    vec3 halfDirection,
    float finishActivation,
    float deformation
  ) {
    float kind = floor(uMaterialType + 0.5);
    // The default path is deliberately a no-op so it is pixel-identical to
    // Sticker Forge's front material before selectable finishes were added.
    if (kind < 0.5) return base;

    float amount =
      clamp(uMaterialIntensity, 0.0, 1.0)
      * clamp(finishActivation, 0.0, 1.0);
    float scale = max(uMaterialScale, 0.2);
    vec2 detailUv = vUv * scale;
    float facing = max(dot(normal, viewDirection), 0.0);
    float directLight = max(dot(normal, lightDirection), 0.0);
    float materialLight = clamp(
      uAmbientLight + directLight * uLightIntensity,
      0.0,
      1.65
    );
    float ndh = max(dot(normal, halfDirection), 0.0);
    float edge = pow(1.0 - facing, 3.0);
    float grain = hash21(detailUv * 913.7 + uMaterialSeed * 71.3) - 0.5;
    float fineGrain = hash21(detailUv * 2471.0 + uMaterialSeed * 131.0);
    float sharpSpec = pow(ndh, 72.0);

    // Diffractive holographic film.
    if (kind < 1.5) {
      // Keep the diffraction bands anchored to the undeformed sticker.
      // Match the gallery thumbnail's single, soft diagonal color wash. Light
      // and view changes move that wash without replacing the printed artwork.
      vec3 defaultLightDirection = normalize(vec3(-0.38, 0.52, 0.76));
      float holographicLightShift =
        dot(
          lightDirection.xy - defaultLightDirection.xy,
          vec2(0.32, -0.26)
        );
      float holographicViewShift =
        (1.0 - facing) * 0.12
        + vCurl * 0.08;
      float phase =
        (previewGradientPhase() - 0.5) * scale + 0.5
        + holographicLightShift
        + holographicViewShift;
      vec3 rainbow = holographicPalette(phase);
      float broadSpec = pow(ndh, 12.0);
      float lightStrength = clamp(
        1.0 + (uLightIntensity - 0.8) * 0.35,
        0.6,
        1.3
      );
      float holographicMix =
        0.24
        * amount
        * lightStrength;
      vec3 holographicBase = mix(
        base,
        rainbow,
        holographicMix
      );
      float frostGrain =
        hash21(detailUv * 1380.0 + uMaterialSeed * 113.0) - 0.5;
      float frostAmount =
        clamp(uHolographicGrain, 0.0, 1.0) * amount;
      holographicBase *= 1.0 + frostGrain * 0.22 * frostAmount;
      holographicBase = mix(
        holographicBase,
        vec3(0.92 + frostGrain * 0.16),
        abs(frostGrain) * 0.1 * frostAmount
      );
      float holographicHighlight =
        broadSpec * 0.1
        + sharpSpec * 0.16
        + vCurl * 0.035;
      holographicHighlight *= smoothstep(0.0, 0.18, deformation);
      return screenBlend(
        holographicBase,
        rainbow
          * holographicHighlight
          * amount
          * uLightIntensity
      );
    }

    // Glitter laminate.
    if (kind < 2.5) {
      vec2 cell = floor(detailUv * 115.0);
      float flake = hash21(cell + uMaterialSeed * 97.0);
      float orientation = hash21(cell.yx + uMaterialSeed * 43.0);
      float twinkle = pow(
        max(0.0, cos((orientation - dot(normal.xy, vec2(0.47, 0.83))) * 6.2831853)),
        18.0
      );
      float sparkle = smoothstep(0.91, 0.995, flake) * twinkle;
      vec3 sparkleColor = mix(vec3(1.0), spectralPalette(flake), 0.46);
      return base * (1.0 + grain * 0.04 * amount)
        + sparkleColor * sparkle * amount * 1.35
        + sharpSpec * 0.08 * amount;
    }

    // Retroreflective film.
    float retroAlignment = max(dot(lightDirection, viewDirection), 0.0);
    float retroCone = pow(
      retroAlignment,
      mix(10.0, 3.0, clamp(uLightSoftness, 0.0, 1.0))
    );
    vec3 defaultLightDirection = normalize(vec3(-0.38, 0.52, 0.76));
    float reflectivePhase =
      (previewGradientPhase() - 0.5) * scale + 0.5
      + dot(
        lightDirection.xy - defaultLightDirection.xy,
        vec2(0.28, -0.22)
      );
    float reflectivePreview = previewReflectiveOpacity(
      reflectivePhase
    );
    float lightStrength = clamp(
      1.0 + (uLightIntensity - 0.8) * 0.5,
      0.5,
      1.4
    );
    float retro = reflectivePreview * lightStrength
      + retroCone
        * mix(0.42, 1.0, directLight)
        * smoothstep(0.0, 0.18, deformation)
        * 0.18;
    float beads = 0.78 + fineGrain * 0.28;
    float reflectiveLift = retro * beads * amount;
    return mix(base, vec3(1.0), clamp(reflectiveLift, 0.0, 0.78))
      + edge * 0.025 * amount * materialLight;
  }

  float interactionHitArea(vec2 uv, float centerAlpha, float radius) {
    vec2 hitOffset = uTexel * radius;
    vec2 diagonalOffset = hitOffset * 0.70710678;
    float sampledAlpha = min(
      min(
        min(
          texture2D(uMap, uv + vec2(hitOffset.x, 0.0)).a,
          texture2D(uMap, uv - vec2(hitOffset.x, 0.0)).a
        ),
        min(
          texture2D(uMap, uv + vec2(0.0, hitOffset.y)).a,
          texture2D(uMap, uv - vec2(0.0, hitOffset.y)).a
        )
      ),
      min(
        min(
          texture2D(uMap, uv + diagonalOffset).a,
          texture2D(uMap, uv - diagonalOffset).a
        ),
        min(
          texture2D(
            uMap,
            uv + vec2(diagonalOffset.x, -diagonalOffset.y)
          ).a,
          texture2D(
            uMap,
            uv + vec2(-diagonalOffset.x, diagonalOffset.y)
          ).a
        )
      )
    );
    return smoothstep(0.04, 0.28, centerAlpha)
      * (1.0 - smoothstep(0.08, 0.72, sampledAlpha));
  }

  void main() {
    vec2 surfaceUv = vUv;
    if (uBackgroundRemovalDistortion > 0.5 && uEntranceSweep >= 0.0) {
      vec2 scanDirection = abs(uEntranceAxis.x) > 0.5
        ? vec2(sign(uEntranceAxis.x), 0.0)
        : vec2(0.0, sign(uEntranceAxis.y));
      vec2 scanTangent = vec2(-scanDirection.y, scanDirection.x);
      float scanCoordinate = abs(uEntranceAxis.x) > 0.5
        ? (uEntranceAxis.x > 0.0 ? vUv.x : 1.0 - vUv.x)
        : (uEntranceAxis.y < 0.0 ? 1.0 - vUv.y : vUv.y);
      float tangentCoordinate = dot(vUv - vec2(0.5), scanTangent);
      float sweepCenter = mix(-0.3, 1.3, uEntranceSweep);
      float sweepDelta = scanCoordinate - sweepCenter;
      float distortionEnvelope =
        1.0 - smoothstep(
          uRemovalDistortionRange * 0.15,
          uRemovalDistortionRange,
          abs(sweepDelta)
        );
      float ripplePhase =
        tangentCoordinate * uRemovalRippleDensity;
      float rippleAcross = sweepDelta * uRemovalRippleDensity;
      float waterWaveA = sin(
        ripplePhase * 0.55
        + rippleAcross * 0.8
        + uTime * uRemovalRippleSpeed
      );
      float waterWaveB = sin(
        ripplePhase * 0.31
        - rippleAcross * 0.45
        - uTime * uRemovalRippleSpeed * 0.63
        + 1.7
      );
      float waterWaveC = sin(
        ripplePhase * 0.18
        + uTime * uRemovalRippleSpeed * 0.37
        + 3.1
      );
      float waterRipple =
        (waterWaveA * 0.58 + waterWaveB * 0.3 + waterWaveC * 0.12)
        * 0.0045
        * distortionEnvelope
        * uRemovalDistortionStrength;
      surfaceUv += scanTangent * waterRipple;
      surfaceUv +=
        scanDirection
        * (
          cos(ripplePhase * 0.42 + uTime * uRemovalRippleSpeed * 0.48)
          * 0.65
          + sin(ripplePhase * 0.23 - uTime * uRemovalRippleSpeed * 0.31)
          * 0.35
        )
        * distortionEnvelope
        * uRemovalDistortionStrength
        * 0.0016;
      surfaceUv = clamp(surfaceUv, vec2(0.001), vec2(0.999));
    }

    vec4 printSample = artworkSample(surfaceUv);
    float finishScale = clamp(uEdgeFinishScale, 0.75, 8.0);
    vec2 bevelOffset = uTexel * clamp(
      uEdgeBevelWidth * finishScale,
      0.5,
      24.0
    );
    float alphaLeft = artworkSample(
      surfaceUv - vec2(bevelOffset.x, 0.0)
    ).a;
    float alphaRight = artworkSample(
      surfaceUv + vec2(bevelOffset.x, 0.0)
    ).a;
    float alphaUp = artworkSample(
      surfaceUv + vec2(0.0, bevelOffset.y)
    ).a;
    float alphaDown = artworkSample(
      surfaceUv - vec2(0.0, bevelOffset.y)
    ).a;
    float innerAlpha = min(
      min(alphaLeft, alphaRight),
      min(alphaUp, alphaDown)
    );
    float edgeBand = smoothstep(0.06, 0.56, printSample.a)
      * (1.0 - smoothstep(0.1, 0.88, innerAlpha));
    vec2 inwardGradient = vec2(
      alphaRight - alphaLeft,
      alphaUp - alphaDown
    );
    vec2 outwardNormal = -inwardGradient
      / max(length(inwardGradient), 0.0001);
    vec2 edgeLightDirection = length(uLightDirection.xy) > 0.001
      ? normalize(uLightDirection.xy)
      : normalize(vec2(-0.65, 0.76));
    float directionalEdgeLight =
      dot(outwardNormal, edgeLightDirection);
    float edgeHighlight = pow(
      max(directionalEdgeLight, 0.0),
      1.35
    );
    float edgeShade = pow(
      max(-directionalEdgeLight, 0.0),
      1.2
    );

    if (printSample.a < 0.1) discard;

    vec3 surfaceNormal = normalize(vNormalView);
    vec3 viewDirection = normalize(-vViewPosition);
    float frontDeformation = clamp(vCurl * 0.82 + vLift * 0.48, 0.0, 1.0);
    float preservedFront = uPreserveFrontColor * (
      1.0 - smoothstep(0.025, 0.34, frontDeformation)
    );
    float signedFacing = dot(surfaceNormal, viewDirection);
    float frontMix = smoothstep(-0.035, 0.035, signedFacing);
    frontMix = mix(
      frontMix,
      step(0.0, signedFacing),
      preservedFront
    );
    vec3 normal = signedFacing < 0.0 ? -surfaceNormal : surfaceNormal;
    vec3 lightDirection = length(uLightDirection) > 0.0001
      ? normalize(uLightDirection)
      : normalize(vec3(-0.38, 0.52, 0.76));
    vec3 halfDirection = normalize(lightDirection + viewDirection);
    float normalLight = max(dot(normal, lightDirection), 0.0);
    float lightLevel = clamp(
      uAmbientLight + normalLight * uLightIntensity,
      0.0,
      1.65
    );
    float facing = max(dot(normal, viewDirection), 0.0);
    float fresnel = pow(1.0 - facing, 3.0);
    float micro = (hash21(vUv * 970.0) - 0.5) * 0.018;

    float highlightExponent = mix(52.0, 18.0, uLightSoftness);
    float printHighlight =
      pow(max(dot(normal, halfDirection), 0.0), highlightExponent)
      * 0.068
      * uLightIntensity
      * mix(1.0, 0.68, uLightSoftness);
    float frontDiffuse = mix(
      1.0,
      lightLevel,
      0.18 + frontDeformation * 0.82
    );
    vec3 litFrontColor = printSample.rgb * frontDiffuse + printHighlight;
    litFrontColor += fresnel * 0.025;
    vec3 neutralFrontColor = mix(
      litFrontColor,
      printSample.rgb,
      preservedFront
    );
    float materialFinishActivation = mix(
      1.0,
      smoothstep(0.0, 0.22, frontDeformation) * 0.35,
      clamp(uMaterialBaked, 0.0, 1.0)
    );
    vec3 frontColor = applyFrontMaterial(
      neutralFrontColor,
      normal,
      viewDirection,
      lightDirection,
      halfDirection,
      materialFinishActivation,
      frontDeformation
    );
    frontColor = mix(
      frontColor,
      vec3(1.0),
      edgeBand
        * edgeHighlight
        * clamp(uEdgeFinishStrength, 0.0, 1.0)
        * 0.2
    );
    frontColor *= 1.0
      - edgeBand
        * edgeShade
        * clamp(uEdgeFinishStrength, 0.0, 1.0)
        * 0.12;

    float exponent =
      mix(17.0, 86.0, clamp(uGloss, 0.0, 1.0))
      * mix(1.2, 0.42, uLightSoftness);
    float specular = pow(max(dot(normal, halfDirection), 0.0), exponent);
    specular *=
      mix(0.06, 0.3, uGloss)
      * (1.0 - uRoughness * 0.58)
      * uLightIntensity
      * mix(1.0, 0.72, uLightSoftness);
    float satinBand = pow(max(vCurl, 0.0), 1.7) * (0.045 + uGloss * 0.1);
    vec3 backColor = uBackColor * mix(0.76, 1.0, lightLevel);
    backColor += specular + fresnel * (0.055 + 0.085 * uGloss) + satinBand + micro;

    vec3 color = mix(backColor, frontColor, frontMix);

    float projectedShadow =
      (1.0 - getShadowMask())
      * vAdhered
      * vShadowReceiverProximity;
    float peelShadowActivation = smoothstep(0.001, 0.035, uPeel);
    color = mix(
      color,
      uShadowColor,
      clamp(
        projectedShadow
          * uShadowOpacity
          * uSurfaceShadowEnabled
          * peelShadowActivation,
        0.0,
        1.0
      )
    );

    if (uEntranceSweep >= 0.0) {
      float sweepCoordinate = abs(uEntranceAxis.x) > 0.5
        ? (uEntranceAxis.x > 0.0 ? vUv.x : 1.0 - vUv.x)
        : (uEntranceAxis.y < 0.0 ? 1.0 - vUv.y : vUv.y);
      float sweepCenter = mix(-0.3, 1.3, uEntranceSweep);
      float laserDistance = abs(sweepCoordinate - sweepCenter);
      float laserCore =
        1.0 - smoothstep(0.0, uLaserCoreWidth, laserDistance);
      float laserHalo =
        1.0 - smoothstep(uLaserCoreWidth, uLaserBandWidth, laserDistance);
      float laserPhase =
        (sweepCoordinate - sweepCenter) * 3.6 + uEntranceSweep * 1.7;
      vec3 laserColor = 0.58 + 0.42 * cos(
        6.2831853 * (laserPhase + vec3(0.0, 0.33, 0.67))
      );
      color = mix(
        color,
        laserColor * uLaserBrightness,
        laserHalo * uLaserBandOpacity
      );
      color += laserColor * (
        laserCore * uLaserHighlightIntensity
        + laserHalo * uLaserBandOpacity * 0.347826
      );
    }

    if (uInteractionHint > 0.0) {
      float hitArea = interactionHitArea(
        vUv,
        printSample.a,
        uInteractionHintRadius
      );
      float nearbyAlpha = min(
        min(
          texture2D(uMap, vUv + vec2(uTexel.x * 3.0, 0.0)).a,
          texture2D(uMap, vUv - vec2(uTexel.x * 3.0, 0.0)).a
        ),
        min(
          texture2D(uMap, vUv + vec2(0.0, uTexel.y * 3.0)).a,
          texture2D(uMap, vUv - vec2(0.0, uTexel.y * 3.0)).a
        )
      );
      float edge = smoothstep(0.04, 0.28, printSample.a)
        * (1.0 - smoothstep(0.08, 0.72, nearbyAlpha));
      float innerLineWidth = max(2.0, uInteractionHintRadius * 0.09);
      float innerEdgeOuter = interactionHitArea(
        vUv,
        printSample.a,
        uInteractionHintRadius + innerLineWidth
      );
      float innerEdgeInner = interactionHitArea(
        vUv,
        printSample.a,
        max(0.0, uInteractionHintRadius - innerLineWidth)
      );
      float innerEdge = clamp(
        innerEdgeOuter - innerEdgeInner,
        0.0,
        1.0
      ) * (1.0 - edge);
      float dash = smoothstep(
        -0.22,
        0.22,
        sin((gl_FragCoord.x + gl_FragCoord.y) * 0.72)
      );
      color = mix(
        color,
        uInteractionHintColor,
        hitArea * 0.28 * uInteractionHint
      );
      color = mix(
        color,
        uInteractionHintColor,
        max(edge, innerEdge) * dash * uInteractionHint
      );
    }

    gl_FragColor = vec4(color, printSample.a * uOpacity);
    #include <colorspace_fragment>
  }
`,ju=`
  uniform float uPeelDepth;
  uniform vec2 uOrigin;
  uniform vec2 uPeelDir;
  uniform vec2 uMeshSize;

  varying vec2 vResidueUv;
  varying float vResidueReveal;

  void main() {
    vResidueUv = uv;
    vec2 direction = normalize(uPeelDir + vec2(0.00001));
    float along = dot(position.xy - uOrigin, direction);
    float revealFeather = max(min(uMeshSize.x, uMeshSize.y) * 0.012, 0.004);
    float peeledArea = 1.0 - smoothstep(
      uPeelDepth - revealFeather,
      uPeelDepth + revealFeather,
      along
    );
    vResidueReveal = peeledArea * step(0.00001, uPeelDepth);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Ku=`
  uniform sampler2D uMap;
  uniform float uOpacity;

  varying vec2 vResidueUv;
  varying float vResidueReveal;

  float residueNoise(vec2 point) {
    point = fract(point * vec2(127.1, 311.7));
    point += dot(point, point + 19.19);
    return fract(point.x * point.y);
  }

  void main() {
    float artworkAlpha = texture2D(uMap, vResidueUv).a;
    if (artworkAlpha < 0.1 || vResidueReveal < 0.001) discard;

    float grain = mix(0.82, 1.0, residueNoise(vResidueUv * 760.0));
    float residueAlpha = artworkAlpha * vResidueReveal * grain * 0.085;
    gl_FragColor = vec4(vec3(0.34), residueAlpha * uOpacity);
    #include <colorspace_fragment>
  }
`,Ju=`
  ${wn}

  varying vec2 vDepthUv;

  void main() {
    vDepthUv = uv;
    vec3 deformed = deformSticker(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(deformed, 1.0);
  }
`,qu=`
  uniform sampler2D uMap;
  varying vec2 vDepthUv;

  void main() {
    float artworkAlpha = texture2D(uMap, vDepthUv).a;
    if (artworkAlpha < 0.04) discard;
    gl_FragColor = vec4(1.0);
  }
`,Zu="data:audio/mpeg;base64,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UQCH0q01oGmnLht0AgjKHjedpdG/krlVFsiA60xsCOJAJGxQuctRBikVDCbaTUEF7DKXioqWTRMvieniNKzXbJ6NvOpKCgDxTTANikDcLwMN8CzIFjAfQHyARlBkVDZE5GJFwIIxIJyQfAOQCYCCcDBODEhAIyg2gFKQfNeshgoqDChdrP15//3v85///rrojcHrwn0eMNntU1Rsg88/YYvkE//7nMy//HEVLmXZQCAAAbVTAQmCCEoRa7S0SGUTSCFcrJUbr1BWmTqTNpmJsUw7wFJMnQgms6ssYNkEwC2N1DkOK5nhuNHNPqsyBYo0Vcq5muk0rVtDRXZ8mmJENNkZThQ9cqa7Evt6eQobp2H/+5LEMoAhRhFMmYeAAz2wLj8w8ADMeYQ5CyEpBvLgIEdY2SFGchpdi9K57cqgaRKUugS7k7EHLgoUAkFadBvkob0k/YkdRdKKxxGuJjKJwonEvhYlaczezIcX9aLehZ/s6NY4qAXmk5WtDmZhZYV4J2pVvUT0Q414AjyFOZ7D6Rl2CLK2nAuz6U101Taof2k1lTR5ewul00VgQqGTG4tMH///////////saaaluT///////////q5zk1d3dxkxcPURDtt8miWQiW17cAsRoaRSkmOPkgWLCa63i69KoM3ao8gMAMAHqGmW8slSaaOEcLqOc9BbRIC4Cbk7OtVLsekeMdJni7OhOeCn04wriKac8JvSScVbgwKCBEljRWWdhv3kWj7xP3jyIxwW672RktWl3mqIXe6rxzTUceKxqBTN7AuntsUpi1s70z70h6Hs6GKyJam2uVacWeeBPesbWYcCDWPqPnMTV3jJEfv7vHlI8N+7dNMd6wwHF5L9OLXaDDawAiElSf//AKltttttciUSiSJRJBIKKlIloqtQhUVMrQN//uSxAwAGS2VabmHgBsesWx3MYADBaA20IArpwV3FzC9DVIumsfwk6H4AhjWSBklxujILxbXkJP9kUTTAbUPgRrOacVK5bEIVLArDuZYM0JsljVXRpVmu/fxFer4MVlVsmVxMzWYltFK9csTpONrYpYT5igOS4a6M2JbVcZnl77zOz2iPLNvfMU7LNqLLF0+vBe1g2pEeRLut0xS0img+TMXeqq1iznP8JVWxSl7pyBL4je513msKLNtcLmKwsV7wp2uSCuoUT0kizlSiUSIIBAA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yRlBLhYGgLd9+38EiTWIMZ09+TzAAV4ZQFSSZgFGhccLCJrrYDKv5/////////////////yCBN9////////////////W64MsCKTcSSAeIK4nY6UwrXGqYs1MckZOqA8YO+sqtlueq9v/Ha8NK9F21jn/+5LEsoAngg8Y2PyAAoszZG+ewAG1Wo4Phk6XfD9DJ5aeuxZdv48YhhWk0xMS6uv8P8zafOrR/ZpHlsaOoGvddaeTNWfXm30axw4+zSx1aYh6TaPLjJbTk6UkmJ6691IW25epl08nKW0Dzh8TicISFEOo6oy6VTEmiS6erX77WKJ1a5b9vq7HIGmv3auulQU2o0QgHgjGgeAVoKiEoVsUA2K562c+h36Gu7uzt+96n97K+BaurHl9a3Z5bAWzNQV1yH8DCxdaJYvPF2x3j1G+8kO2N+q6J5Gy8WT51UgD/Gsu7T59mq9ktxJYWYT41H5YW1DZ0lJLXITrCXUqGcVcfWIyavhV5TdlpmT4SRKJJK6i+ygjmK4OzAljocjsTSVy7oUi5b8CZew/B0bD9LX62fOrH/AIAAAALzoVIGAYsQ0AAZ7XvQnJ1mWiqszaXue1UCBDwcld9balSKxcTKQWluLsU3dUaQDoODYEzl6ljWFAFhQcDSiBglDrVd11VjrJgNk6W67KdNNCcgqlSNAW8ph4Es+MtzTSdOVs7csQARIu//uSxImAFLGbJXSWAAT0weLXM6AACg6tyjih6AZhqYbSWauA78eEgRQUYw3FUDDZQk6ISxdhJAyYcOHiwhlLQYAbVp7zveztoRax32TyhgzXmJNbcIOQCIQXwMMIMsCTUL2EAEDE3ZRvdd4YchpmELrxllIoFbuzlVddrFGZp0uyuuGmxqquioA7ZEPauzdDmcg4Sgb7MuM1Rsx7v4YT0//+eSTTTWHS3z/9St2t9/0a1nNdVTMwGWSjneldO4Zc8vWWQLsb////////////////////////////////////+BHX6rV0+HAGAAImYEKOGTDqxwAcQgGI2Cjw54qR+2uAQAsI3dN4DCoBTXMCBBABFVBWiizJQMDSDdNVF21oxeH18JWGAHJmGFFGCJyxMdl7Ny3jd11go2vhOUzgMMnGJZBw9ti5QsASUSMVgoXflip4eYWFwYADAYewMQkmGLUXSs0SCrTZIDhiO4cDf9NC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0ZOnULjZ60vEEKnO1en5xJYKRanqkuxIKLRosiRzm4dPc3Dkqd//3mXqt7VpqKoARlNOLMTRJGlFOz0aceZG5/s07xakiJxoEKLKPhyizCni1JGnFvV1dJpKkJY6ojUTODIKh4ugXSOnDp1JdScJw3YyVSThNJZNK6tY6cLJpKrEI0Hxg4dLHTh0oNjAeGyAnPEwpEQyMh4bICc8TCkiIipYqWKh4bGDhdRdJNIuUSXhOF1axxpRZRZQGBAR5l5v+TU1JxpwGJAjyCaKRpx1VVVMQf/7ksRSA9QloIJDJNtIAAA0gAAABE1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",$u="data:audio/wav;base64,UklGRpD2AABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YWz2AAD///3//v///wAA+//+/wEAAAD7//7//v//////AAD8//3/AAABAPv//P8AAAIA+//8/wEAAgD7//z///8CAP7//P/9/wMA/v/8////AgD9//7///8AAP7/AAD9//7/AAACAP7//f/+/wIAAAD+//3///8BAAIA/f/9/wAAAgD+//7/AQAAAP7/AAAAAP7//v8CAAAA/P///wEAAQD+//3///8CAAIA/P/8/wMAAwD9//v/AgAEAP7//P8AAAIAAgD///3///8DAAIA/v///wIAAgAAAAEAAQAAAP//AwAEAP////8FAAIA//8BAAQAAQABAAIAAgACAAMAAAABAAMAAwABAAIAAgACAAEAAwACAAEAAQAEAAMA//8BAAYAAgD//wIAAwABAAEAAwACAAAAAQACAAIAAQACAAEAAAACAAQAAQD+/wEABAACAP3/AAAHAAIA+////wcABAD+//3/AQAFAAMA/v/+/wIAAgAAAAEAAQABAP7/AAAEAAEA/f8BAAMAAAD+/wMAAgD9////BQABAP7/AAADAP//AAACAAAA/v8CAAIAAAD//wIAAQAAAP//AgAAAP//AAAEAAEA/v///wMAAgD///3/AgAEAAEA/P8AAAQAAgD9////AwACAP7/AAACAAEAAAAAAAAAAQAAAP//AQABAP//AQAEAP7//f8DAAIA/P8AAAMAAAD+/wMAAAD+/wIAAwD9////AwADAP////8AAAMAAgAAAP//AwABAAAAAgADAP7///8DAAUA///+/wIABAABAAEA//8CAAQAAQD+/wMABQAAAP//BAACAAAAAgADAAEAAgACAAIAAQACAAMAAgAAAAEAAwADAAIAAQAAAAMABQAAAP7/BQAGAP3///8IAAQA+/8BAAgAAQD9/wQABQAAAP//AwAEAAAAAQABAAEAAwADAP//AQADAAEAAAADAAAA//8DAAQA/v8AAAQAAgD9/wIAAwABAP//AQABAAIAAQABAAAAAgABAAEAAQACAAEAAAAAAAQAAgD//wEAAwACAAEAAQABAAIAAwACAP//AQAEAAMAAAADAAIAAQABAAMAAgADAAIAAQAAAAMABAACAP//AQADAAMAAQACAAEAAAACAAUAAgD+/wAABgADAP7///8GAAUA/v/+/wYABgD///3/AwAGAAMA//8BAAMABAADAAEAAAADAAQAAwAAAAMABAADAAEABAAEAAMAAAAEAAYABAD+/wMACAAGAP7/AwAGAAYAAQACAAQABgACAAIABAAGAAEAAwAFAAYAAgACAAMABwAEAAIAAAAFAAYAAwABAAUABQAEAAEABAAEAAUAAgACAAQABwABAAIABgAGAP//AgAGAAYAAgABAAEABwAGAAAA//8IAAUAAAABAAQABAAEAAEAAgAEAAQAAAADAAMAAgADAAUAAAABAAYAAwD+/wMABAACAAEABAACAAAAAwAEAP//AAAGAAQA/f///wgABAD8/wEABQABAAEAAwABAP7/BAAGAP///f8EAAYAAAD+/wIAAgACAAMAAQD+/wIABAABAP7/AAADAAMA///+/wIABAD/////AgABAP7/AQACAAAA/v8BAAIAAAD+/wIAAQD+//7/AwACAP///v8CAAEA///+/wIAAQD///7/AgACAAAA/P8BAAMAAAD8/wIAAwD///3/AwABAP////8CAAEAAAD//wIAAgABAP7/AQACAAIA/////wAAAwABAAEA//8AAAEABAD/////AQAAAP//BAACAP3///8FAAEA/v8AAAIAAQABAAAAAAABAAIAAAD//wAAAgAAAAAAAAAAAAEAAQAAAP//AAABAP//AAACAAAA/v8AAAEAAQAAAP7/AQACAAAA/v8AAAIAAAD+////AgABAP3/AAADAP7//P8DAAMA/P/9/wQAAQD8/wAAAwD+//3/AgADAP3//f8CAAIA///+////AAABAAEA/v/9/wEAAwAAAPz///8CAAEA/f/9/wIAAwD+//z///8FAAEA+//9/wQAAgD9//3/AwAAAP3/AAACAP7/AAABAAAA/P8BAAIA/v/9/wIAAgD///7/AgAAAP//AQABAP7/AQADAAAA/f8CAAIAAQABAP////8EAAIA/v8BAAQAAAD//wQAAQD//wIAAwABAAEAAQACAAIAAgABAAMAAQABAAIAAwAAAAIAAwAEAAAAAAAEAAUA//8AAAMABQABAAEAAQADAAIAAQABAAQAAgACAAAAAgADAAIA/v8CAAQAAgD//wMAAgAAAP//BQACAP//AAACAAIAAwAAAP//AAAEAAEA/////wMAAgD/////BAABAP//AAADAP//AAACAAIA/v8BAAEAAQABAAIA//8AAAAAAgACAAAA/P8CAAMAAAD//wIAAAD//wAABAAAAP7///8DAAAAAAAAAAAA//8BAAIAAQD9/wAAAwAAAPv/AQAFAP7//P8CAAIA///+////AQABAP7///8BAAAA/v8AAAEA///+/wAAAwD///z/AAACAP////////7///8DAP///f///wEA//////7/AAAAAP///f8AAAAA/v/+/wIA/v/8/wAAAwD8//v/AQADAPz//f8AAAAA/v/////////+//7///8AAP3///8AAP7//f8AAAAA/v/9//7/AAABAP7//f///wEAAAD9//7/AAD+//7/AQAAAPv///8CAP7//P///wAA///+//7///8AAP///f/+/wAA///9//7/AAD////////9////AQD///z//v8AAP7/AAAAAPz//P8BAAIA/P/6/wAAAQD+//v//v8BAP///P/9////AAD8//z///8AAP3//P///wIA/P/6//7/AQD8//z//v////z//v/9/////f/8//z/AQD+//r/+v8BAP7//P/7/////v/9//r///////v/+f8AAP///P/6//3//v////n//P/+////+//8//z//v/+//z/+f/+/////v/8//3/+//9//7////6//v//f8AAPz/+//7/wAA/v/8//v////8//z//f////z//f/9/wAA/P/7//z/AQD///z//P8AAP7//v/8//7//v8AAP7//P/9/wIA///7//z/AgD///7//f///////v/9/wAA//////7///8AAAEA/f/9/wEAAAD8/wAAAQD///3/AQAAAP///f/+/wEAAQD8////AgD+//3/BAAAAPr///8EAP3//f8BAAAA/v//////AAABAP///f///wIAAQD8//7/AQAAAP////8AAAAAAAD+////AgAAAP3///8CAAAA/v8AAAAA//8AAAAA/////wEA///+/wEAAAD///////8BAAAA/v///wAAAAAAAAAA/v///wEA//////////8BAAAA/f///wIA/////wAAAAD//wEAAQD///7/AAABAAIA///9////BAACAP7//v8BAAEAAgD///3///8FAAMA/f/7/wMABgAAAPr/AQAEAAAA/v8DAAEA/P8BAAQA/v/+/wMAAQD9/wAAAgD/////AQD/////AQACAP///f8AAAMAAAD9/wAAAwAAAP7///8AAAIAAgD9//3/AwACAP3/AAACAP///v8CAAEA/////wEA//8CAAEA/f///wUAAAD9/wAABAD/////AQABAP//AQABAAEA//8AAAAAAgD/////AQABAP//AQAAAP////8EAP///P8BAAYA///7/wAABgD///z/AQAEAP7//v8CAAIA/v8AAAAA//8BAAMA/v/9/wEABAD///7///8BAAAAAgD///7/AQADAP7//v8AAAMAAAD///7/AwABAP7///8CAP//AAABAAAA/v8CAAAA/////wIA/////wAAAQAAAAAA/f8BAAMA///7/wIAAgD+//3/AgABAAAA/v//////AgAAAP///f8AAAIAAgD9//3/AQADAP7//v8BAAEA/v8BAAEAAAD//wEAAAD//wAAAQD//wAAAQAAAP//AgAAAP7/AAACAAAAAAAAAAAAAQABAP//AAACAAAA//8CAAEAAAAAAAAAAQABAAIA///+/wIABAD+//3/AgADAAAA//8AAAIAAQAAAP7/AQADAP///f8DAAMA/v/9/wQAAQD+/wAAAgD/////AgACAP3/AAADAAEA/v8AAAEAAQD//wAAAQACAP///v8CAAMA/f///wMAAAD+/wMAAgD9////AwABAP///f8BAAMAAQD8////AgABAP//AAD//wAA//8BAAEA/v/8/wMAAwD9//3/AwD///7//v8BAP//AAD+//7/AAACAPz//v8AAAAA/P8BAAAA/v/7/wEAAAD+//3////9/wAA//////v///8BAP//+v/+////AAD9//7//P/////////7////AAD+//r/AAAAAP7/+//+////AgD9//v///8DAPz//P8AAAEA/P8AAP///f/+/wIA///+//7/AQD+/wAA////////AAD//wIA///+////AwAAAP////8BAP//AQAAAAAA//8BAAIAAQD+/wAAAQACAP//AQABAP////8EAAIA/P/9/wYAAwD9//7/AwACAAAA/v8AAAEAAgAAAAAA//8BAAIAAQD+/wAAAgAAAP7/AgACAP///v8BAAEAAAAAAAEA/////wEAAQD//wAA/////wIAAQD//wAAAQD+/wAAAwAAAP3/AAABAAIAAAD/////AwABAP////8BAP//AQABAAAA//8DAAAAAQAAAAAA/v8CAAEAAgAAAAAA/v8FAAIA/f/+/wYAAQD+////BQAAAP//AAAFAP////8CAAMA/f8DAAIAAAD//wQAAAAAAAEAAgD+/wIAAQABAP//AgAAAAIAAAACAP//AAAAAAMAAAAAAP//AgAAAAIA//8AAAAAAwAAAP///v8DAAAAAAAAAAIA/v/+/wEABAD+//3///8EAAEA/v/+/wMAAQD/////AgD//wEAAQABAP//AQABAAIA/v///wMABQD9//7/AwAFAP7//P8CAAYAAAD9/wEAAwD//wIAAgD+////BQACAP7/AAADAAEAAgAAAAAAAgACAP//AgADAAEA//8DAAMAAAD//wIAAgADAAAAAQADAAMA//8BAAIAAgAAAAIAAQADAAEAAAABAAQA//8AAAQABAD9/wAAAwACAP//AgABAAAAAQAEAAAA/v///wIAAgACAP3//v8CAAQAAAD+////AQABAAIA///9//7/BAADAP7//f8BAAIAAgD+//7/AQADAP///v8BAAIAAAD//wAAAgAAAP//AgACAP3///8EAAIA/v///wEAAgACAAAA/v8BAAQAAAD9/wIABAD+//3/BAAEAP////8AAAEAAgACAP7///8DAAIA//8AAAAAAQACAAEA/f8CAAQA///+/wIAAgABAAAAAAABAAIA//8BAAQAAQD9/wIABAAAAPz/AgAFAAAA/f8DAAQA/v///wUAAQD9/wEABgD///3/AwAEAP3///8GAAIA+/8CAAUAAQD+/wEAAAACAAEA/////wUAAgD9//7/BgADAPv//P8HAAQA/f/9/wQAAQABAAEAAAD+/wIAAgACAP7/AAADAAMAAAAAAAAAAgAAAAIAAQABAP//AQADAAIA/f8AAAIAAwAAAAAAAAAAAAEAAwD///7/AQAEAAAA/f8BAAMAAAD//wAAAQABAAEA//8AAAMAAAD+/wEAAgD//wEAAgD/////AwABAAAAAQAAAP//BAADAPz//v8GAAQA/v/9/wMAAwD/////AgACAAAAAAADAAEA/////wEAAgABAAAAAAAAAAIAAAABAAEA/v8AAAMAAAD9/wEAAgD+////AgAAAP////8BAAAA//8BAP///f8BAAIA/v/9/wIAAQD+/wAAAQD9////AgAAAPz/AAACAAAA/v///wAAAAABAAAA/P8AAAMAAQD8//7/AgABAP//AAD9////AwADAPz//P8DAAMA/v/+/wAAAgABAP///v8BAAIA///9/wIAAgD+////AgAAAP//AQAAAAAAAgAAAP7/AAABAAEAAgD///z/BAAGAP3/+v8EAAUA/f/+/wMAAAD+/wEAAgD///7/AQABAP///v8AAAAA//8AAAEA/f/+/wEAAQD8//3/AgACAPz//f8CAAEA/P///wAA/v/8/wIAAQD8//z/AQAAAP7//f8AAP///v/+/wAA/f/8////AwD9//r//v8DAP//+//9/wEAAAD9//3/AAD///3//v8AAP///f/8////AAD+//3///8AAP7//f/+///////9//3///////7////+//z///8CAP//+//+/wEA/v/+/////f/+/wIAAAD7//7/AwAAAPz//f8BAAEA/v/+/wAAAQD///7///8CAAAA/f///wIAAQD/////AAD//wEAAQD///3/AQADAAEA/v///wAABAABAP3//v8FAAIA/f8AAAQAAAD+/wAAAwACAP///v8DAAMAAAD//wEAAQABAAAA/v8BAAUA///6/wQACAD8//n/BgAGAPr//P8GAAMA/f///wIAAQAAAP//AAAAAAAAAAABAP7//v8BAAIA///9////AgAAAP7//v8BAAAA//8BAP///v8BAAEA/v///wEA/////wEAAAD+/wAAAAAAAAAA/v/+/wIAAwD9//v/AgADAP3//f8CAAEA/v8AAAEA/v/+/wIAAAD9////BAABAP3///8CAAAAAAD//wEAAAD//wAAAwAAAP7/AQADAP//AAAAAAEAAAAAAAEAAwD/////AgADAP7/AAABAAEAAAACAAEAAQAAAAAAAQADAP////8BAAIAAAABAAEAAQAAAAEAAQAAAP//AgADAP///v8DAAIA/v8AAAIAAAAAAAIAAgD//wAAAgACAAAA/v8BAAQAAAD9/wIABQD///7/AwACAP7///8DAAEA//8BAAEAAAACAAEA/v8AAAMA//8AAAIA///+/wMAAQD//wAAAQAAAAIAAQD+//7/AwAEAP///P8DAAUA///8/wEAAwACAP///v8BAAUAAAD8/wAABQAAAP7/AgACAP7/AAACAAEA/v///wIAAwAAAP7/AQABAAAAAQD///7/AgAEAAAA/f///wIAAgD///3/AAACAAAA//8BAAEA/v///wEAAAAAAAAA/v/+/wMAAgD9//7/AgABAP7///8AAP//AAAAAAAAAAD+//7/AwABAPv//v8DAP7//v8BAP///P8BAAIA/f/8/wEAAQD9//3/AQD///3///8BAPz//v8AAP7//f8AAP///v/+/wAA/v///////v///wEA/P/9/wEAAwD8//v/AAAEAP///P/9/wMAAQD8//z/BAABAPz///8EAP///P8BAAMA/v8AAAIAAAD//wIAAgD///7/AgADAAEA//8AAAMAAgD+/wAABAACAP3/AQAGAAEA/v8BAAIAAQACAAEAAAACAAIA//8BAAMAAQD//wIAAwABAP//AQACAAIAAAABAAEAAgACAAEA//8CAAMAAQD+/wIAAwAAAP//AwABAAAAAQABAAAAAwABAP//AAAFAAAA/f8BAAUAAAD+/wEABQAAAP7///8EAAIA//8AAAIA//8CAAIA///9/wMAAwABAP//AQAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAD//wMAAAD//wEAAwD+//7/AQACAP//AAAAAAEAAAD//wAAAgD+//7/AQACAP/////+/wAAAwAAAPr///8FAAIA+v/+/wQAAgD8//7/AwABAPz/AQADAP///v8CAAIA/////wIAAAD//wIAAwD/////AwADAP7/AQADAAAA//8CAAUAAAD8/wIABgABAP3/AgAFAAAA//8EAAMA//8AAAMAAwAAAAEAAwACAAEAAgABAAAAAgAFAAAA//8EAAQAAQAAAAEAAgAFAAMA/v8CAAcAAwD+/wEABQAEAAEAAQACAAMAAgACAAIAAgAAAAQABQABAP//AwADAAAAAQAEAAEAAgACAAIAAAACAAMAAQD//wMAAgABAAAAAgACAAIAAAAAAAIAAwD//wAAAQACAAAAAQABAAEAAAABAAEAAQD//wAAAQADAAMA/v/9/wMABQD+//z/AwAEAP////8CAAIAAAD/////AgACAAAA//8AAAEAAgABAP///v8BAAEAAQABAP///v8CAAMA///9/wEAAgABAAAA/v///wIAAQD+////AQAAAP//AAAAAAAA//8AAAAA/v/+/wIAAgD8//3/BAACAPz//f8CAAEA/f///wIAAAD9/wAAAgD+//z/AQACAPz//v8DAAAA/P/+/wEAAAD9////AAAAAP////8AAP7//v8BAP///////////v8BAAAA/f/9/wIAAgD+//z/AAACAAAA+/8BAAQA/f/6/wQABAD8//v/AgABAAEAAAD9//3/BQACAPz//f8EAAEA///+/wEAAAAAAAAAAQD+/wEAAAAAAP7/AgAAAP3//v8FAP///P///wMA///////////+/wIAAAD+//3/AQAAAAAA/P///////////wAA/v///wAA///+/wEA///8//7/AgAAAP3//v8BAAEA/f/+/wEA///9////AgD+//v/AgADAPv/+/8DAAIA/P/9/wEA/////wAA/v/9/wAAAAD////////+////AAABAP3//P8AAAMA///7////AAD+////AAD+//3/AAABAP7//P8BAAMA/P/8/wIAAgD9//7//////wIAAAD7////BAAAAPz/AAABAP7/AAABAP7///8CAP///f8BAAIA/v///wEAAQAAAAEA/v///wIAAgD/////AAACAAEAAAD+/wEAAgABAP7/AAACAAMA/v///wIABAD/////AAADAAEAAQD+/wIAAwADAP3///8DAAUA/f///wIABAD//wEAAQACAP//AgABAAIA/v8CAAEAAgD//wMAAQAAAP//BAABAAAA/v8DAAEAAQD+/wAAAwACAPv/AQAEAAAA+/8CAAIA/v///wIA/f///wEAAAD9/wEAAgD///v/AQACAP7/+/8AAAIAAAD9/wAA/v/9/wAAAwD8//v/AgADAPv//v8AAP7//v8CAP///f/+/wEA//////3//v///wEA///+//z/AAABAP///P/+/wAAAQD+//3//f8CAAEA/P/7/wIAAgD9//z/AAAAAP7//v////7/AAD///3//v8AAAAA/v/+//3///8BAP7//P///wAAAAD9//3///////3///////7//f8AAP7//v////7/+////wEA///8//7///8BAP7//P/9/wEA///9//7/AAD+/////v////7/AAD+//3///8CAP3//P8AAAIA/v/+/wAAAAD+/wAA/v///wEAAAD9////AgACAPz//v8BAAEA///+/wAAAgD+////AQACAP7//f8CAAMA////////AAAAAAIA///+/wAAAwD///7/AgADAP3//v8CAAIA/v///wEAAQD+/wAAAAABAP7//////wEA//8AAP/////+/wAA//8AAP7//////wIA/f/9/wAAAgD8//3/AAABAP3////+/wAA/v8AAP7//v/9/wEA///+//z///8BAAIA+//7/wEABQD7//n/AAAEAP7//f/+/wAA//8BAP7//f/+/wIAAQD///z///8CAAEA/f8AAAIAAAD8/wEAAwD///3/AwADAP7//v8DAAIAAAD+/wAAAgADAP////8BAAMAAAD//wEAAgD/////AgADAP//AAAAAAAAAQABAP7///8BAAIAAAD/////AQAAAP7///8CAAAA/f///wMA/v/8/wEAAgD+//3/AAACAP///f///wIA///9/wEAAQD9////AQD/////AQD///7/AAABAP7//v8BAAEA/f/9/wEAAwD9//z/AgACAP3//v8BAP///f8BAAEA/v/+/wEAAgD+//z/AAACAAAA/P/+/wEAAQD+//7//////wAAAAD+////AQD///3/AAAAAP7//v8AAP///v8AAAAA/f/9/wAAAQD9//7/AAD+//3/AQAAAPz//f8BAAEA/f/7/wAAAgD///v//v8BAAAA/f/8/wAAAwD+//v///8CAP7//v/+////AQD///3///8CAP///P8AAAIAAAD8//3/AwADAPv/+/8EAAQA+//8/wQAAQD7/wAAAwD+//7/AQAAAP//AQD///7/AAACAAAA//8AAAEAAAD/////AgABAP7//v8EAAIA/f///wQAAAD+/wEAAgD+/wEAAQABAAAA//8AAAMA/////wEAAQD+/wMAAgD9//3/BQACAP7//v8EAAEA///+/wQAAQD+//7/BAABAAAA/v8CAAEAAgD//wEAAAABAP//AwD//wAAAAAEAAAAAAD+/wUAAgD///v/BgAFAP7//P8FAAEAAQABAAIA/f8EAAIAAAD//wMA//8CAAEAAAD//wQA///+/wEABQD+//7/AQADAP7///8AAAAA//8CAAAA/v/+/wIAAAD+//7/AgD///7///8AAP////////////8AAP///f/+/wAAAQD///z///8CAAAA+//+/wQA///7////AgAAAP7///////7/AAABAAAA/v///wEAAQD9//7/AgABAP3/AAACAAAAAAABAP7///8CAAIA//8AAAEAAQAAAAEA//8AAAEAAgAAAP//AAAEAAEA/f///wUAAQD+/wAAAgABAAEAAAAAAAEAAwAAAP7/AAADAAEA/v///wIAAQABAAAA/////wIAAQD+/wAAAQAAAAEAAAD//wAAAgAAAP7/AQABAP//AAAAAAEAAQD/////AQACAP////8BAAIAAAD+/wAABAACAP7///8CAAEAAQABAP//AAAEAAIAAAAAAAMAAgAAAAEAAwABAAAAAgADAAEAAgADAAAA//8EAAUAAAD+/wMABQABAAAAAgACAAIAAgACAAEAAAABAAMAAgD//wIAAwABAP7/AAACAAIA/v8AAAIAAgD+/wAAAQAAAP//AQAAAAEAAAABAP//AAAAAAEAAAABAP7/AAACAAEA/f8BAAEA/////wQA///8/wEABAD//wAAAAAAAAAAAgAAAAEAAQD/////BQADAP3//f8EAAQA///+/wMAAwABAP//AQADAAIA/v8BAAQAAQD+/wMABAD///7/BAADAAAAAAADAAAAAAABAAMAAAD//wEABQAAAP3/AgAGAP///f8BAAQAAQAAAP7/AgACAAAA//8DAAEA/v8AAAUAAQD9////BQABAP7/AAABAAEAAwD///7/AQAEAP///v8BAAIA/////wIAAgD9/wAABAAAAP3/AQAEAAAA/v8AAAMAAQD+/wAAAwAAAAAAAQAAAAEAAQD+////BAABAPv/AQAFAP///P8DAAIA/v///wMAAAD//wAAAgAAAP////8BAAAA/////wEAAAAAAP////8AAAAA//8AAP///////wAA//8BAP////8BAAAA/f8AAAEAAQD+//7///8DAAEA/v/+/wAAAgACAPz//f8EAAQA+//+/wUAAwD9////AQACAAEAAQD//wIAAgACAAEAAgD//wEABAADAP//AgADAAQAAQACAAIABAABAAIAAwAEAAAABAAFAAQA//8DAAYABQD+/wMABgAGAAEAAgACAAgABQABAAEACAADAAIABQAGAAAABgAGAAMAAQAHAAQAAwADAAUAAwAGAAMAAgADAAgABAABAAEABwAFAAEAAQAIAAUAAAACAAYAAgACAAMABQACAAMABAAEAAIAAgADAAUAAQACAAQAAwABAAMABAADAAIAAwACAAMAAwADAAMAAgAAAAQABQABAAAABQADAAIAAwAFAAAAAAAEAAYAAQAAAAMABQAAAAQABQD+//7/CAAGAP7///8FAAIAAgAEAAEA//8DAAMAAQAAAAIAAgACAAEAAAACAAMAAQD+/wAAAwADAAAA/v8BAAMAAQABAP//AAABAAIA//8AAAIAAQD9/wEAAwAAAP3/AgACAP///v8CAAEA///+/wEAAgABAP7///8AAAMAAQD9//z/AgAEAAEA/P/9/wMABgD8//v/AwAFAPv//P8EAAQA/f8AAAAAAAAAAAIA/v/+/wMAAgD6/wEABgAAAPn/AgAFAP///P8BAAAAAgABAP///v8DAAEA/v///wMA/////wIAAwD9////AgACAP7/AAACAAEA/v8BAAEAAAD//wEAAQABAAEA/v///wQA///+/wEAAQD+/wEAAgD+//3/AgAAAAAA////////AQAAAP///f8AAAEAAAD9/wAA/////wAAAAD8/wEAAAD9//3/AgD+//7/AAD+//v/AgAAAPz/+/8BAP///v/9////+//+///////8//7//v////z//f/9/wEA/f/7//3/AgD9//r//v8CAPv//f/+/////P/+//3//v/8/////f/+//3//v/7///////8//n/AwD9//n/+/8DAPv/+//9//7//P8AAPr//f/9//7/+v/+//3//v/7//7/+/////z//f/6/////v/9//n////+//7/+v/+//3//v/8//7//f8AAPv//P/+/wEA/P/7//3/AQD///7/+v/+/wAA///8//3///8AAP7//f/8/wEAAAD8//z/AAAAAP3//f8AAAAA/v/9////AgD+//v///8DAAEA/P/8/wIAAQD///7/AAAAAAAA//8BAP/////+/wEAAQD/////AQD//wAAAAABAP7/AAAAAAEAAAAAAP7/AgACAAAA/P8BAAIAAwD+//7/AAAEAAAA/v///wMA/v///wIAAgD9/wAAAAACAP//AAD//wEAAAACAP//AAD//wQAAAD+////BAAAAAEA//8BAAAAAwD//wAAAQADAP3/AgACAAEA/f8CAAIAAgD9/wEAAgADAPz///8DAAUA/P/+/wIABQD9////AQADAP7/AAD//wIAAAABAP7/AQAAAAIA/v8AAP//AAD//wIA//8AAP//AQD+////AAABAP3/AQACAP7//P8EAAEA+//+/wQA///+/wIAAAD8/wEAAgABAP3//v8BAAQAAAD8//7/AwABAP//AAABAP//AAACAAAA/P/+/wMAAgD+////AQABAP//AAD/////AAAAAAEAAQD+/wAAAgD///3/AgAAAP7/AQACAP////8AAAAAAQABAPz//v8DAAIA/f/+/wIAAQD+/wAAAQD///3/AgACAP3//v8CAAEA/f///wEAAAD+////AAABAP7//f8AAAIA/v/+/////////wIA///8//7/AwAAAP3//f8BAAAA///9/wAAAAAAAPz///8CAAEA/P/+/wAAAAD//wEA/v/+////AgD///7//f8AAAEAAQD+//7//v8BAAAA///9/wEAAAD+//7/AQAAAP///f///wAAAQD8//7/AAAAAP3//v8AAAAA/f////7/AAD///7//v8AAP7//f/+/wIA/f/8/wAAAgD9//z/AAABAPv//f8BAAEA+//8/wEAAQD8//3//v/////////8//7/AQD+//v/AAAAAPz//f8CAP//+//9/wIAAAD9//3///8CAAAA+////wQA///6/wIABAD8//z/BAAAAP3/AAADAP///////wEAAgABAPz/AAADAAEA/v8BAAEAAQABAAAA//8CAAAA//8BAAIA/v8BAAQA///8/wQABAD9//7/AwABAP7/AQACAP7/AAADAAAA/f8BAAMA/////wEAAAAAAAEA///+/wIABAD9//3/AwADAP3//f8BAAMAAAD9////BAAAAPv/AAAEAP//+/8AAAMAAAD+//7/AAABAP///v/+/wAAAgAAAPz//v8EAAIA+//8/wIAAwD+//z/AAABAAAA/////////v8BAAEA/v/9////AQAAAP3///8AAP////8BAP///P///wEA//////////////////8BAAAA/P///wMAAAD9//7/AAABAAAA//8AAAEA/v/9/wIAAgD+//3/AQAEAAAA/v8AAAAA//8BAAMAAAD8/wAABQADAPv//f8FAAQA/P///wQAAgD9////AgACAP7//v8DAAQA/f/9/wIABAD+//3/AQAEAAAA/v///wMAAQAAAP//AgABAP//AAACAP7/AQADAAAA/f8CAAMA///+/wIAAAAAAAEAAgD+/wAAAgABAP//AgAAAAAAAAABAAEAAgD+//7/AwAEAPz//v8DAAIA/v8AAAAAAAABAAIA/////wAAAwAAAAAA/v8BAAIAAQD//wEAAAABAAEAAQD9/wIAAgD/////AwD//wAAAgADAP3/AAABAAMAAQABAP//AwABAAIA//8DAAIAAAD//wUAAwAAAP//BQAAAAAAAgAFAAAA//8AAAUAAQABAAIAAgD+/wQABAABAP7/AwABAAIABAADAP3/AQADAAMAAAABAAEAAgABAAEAAQABAP//AgADAAAA//8DAAIA/v///wQAAwAAAP7/AQAEAAMA/f///wMAAwABAAAA//8AAAQAAwD8//7/BAAFAP///v8CAAMAAAABAAAAAgACAAEAAAADAAEAAQABAAIAAAACAAMAAQAAAAIAAgABAAAAAgACAP//AQADAAEAAAABAAEAAgADAAAA//8EAAMA/f///wYAAgD9/wAABQACAP//AAACAAEAAgAAAAAAAQADAAAAAAACAAIA//8CAAIA//8AAAQAAgD//wAAAwABAAEA//8AAAMAAQD//wMAAgD+////BAABAP3/AAAEAAIA/v/+/wMAAgD+//7/AgAAAAAAAQABAP3/AAADAAAA/P8BAAIAAAD9/wIAAgD///7/AwABAP///f8DAAEA/////wIAAAACAAAAAQD+/wEAAgACAP7/AgABAAEA//8CAAAAAgABAAAAAAAGAP///f8CAAUA/v///wQABAD8/wIAAwAAAP//BAAAAP7/AgAFAP7/AAAAAAIAAQABAP//AgAAAP//AgADAPz/AQADAAAA/P8DAAMA/f/9/wQAAQD+//7/AwABAP7//v8BAAAAAAAAAAEA/v/+/wIAAwD9//3/AQACAP//AAAAAP7/AAACAP////8AAAAAAAABAAAA/v8BAAEA//8BAAIA//8AAAIAAAD+/wIAAgD+//7/BQAEAPz//P8GAAUA/P/8/wUAAwD+/wAAAwD//wAAAwADAP3/AAAEAAIA/f8BAAMAAQD9/wIAAwAAAP7/AwACAP///v8BAAAAAQAAAP///v8DAAEA///+/wEAAAAAAP7/AAD//wAA//8AAP7/AAABAAAA+////wIAAQD9//7//f8BAAMA///5/wAABAD///z/AAD///3/AAADAPz//P8CAAEA/f///wAA/v/+/wIA///+////AAD//wAA//8AAP////8AAAIA///9/wAAAwD+//3/AQABAP7///8BAAAA//8BAP7//v8CAAEA/P/+/wMAAgD8//7/AwABAPv//v8DAP///P8AAAEA//////7//v8BAAAA/f/+////AQAAAP3//P8BAAIA/v/9/wAA//////7/AQD+//z/AAAEAP//+//9/wIAAQD///7/AAD/////AgABAPz//v8DAAIAAAD/////AQADAAEA/f///wQAAgAAAP//AAACAAIAAQAAAP//AAADAAQA/////wIAAgD//wEAAgABAAAAAAACAAMAAAD+/wIAAgD+////BAAAAP3/AQADAP7/AAAAAP//AAABAP3///8EAAAA+v8CAAQA/f/8/wMAAQD8//7/BAD///v/AAAEAP7//v8BAAAA/f8BAAAA/f/+/wIAAAD+//3/AgACAP3/+/8CAAMA/f/8/wMAAgD9////AwAAAP3/AAADAP7//v8BAAIAAAD/////AgABAP///f8BAAMAAQD8////BQADAP3///8BAAAAAgADAP3//v8FAAMA/P8BAAUA/v/8/wYABQD7//v/BgAGAP3/+/8CAAMAAQD+////AAADAAAA/f8AAAMA///+/wAAAgAAAAAA/////wAAAAD//wEAAAD+////AwAAAPz///8DAAAA/v8AAAEAAQAAAP7/AAADAAIA/v/+/wIAAwAAAP//AQABAAAAAQABAAAAAgAAAP//AgACAP//AAABAAEAAQABAAAAAgAAAP//AwABAP7/AQACAAAAAAABAP//AQACAP///v8BAAMA///9////AQABAAAA/v/+/wEAAwD///3///8BAAIA///8/wAAAQAAAAAAAAD9/wAABQD///j/AgAFAP3/+/8DAAIA/v/+/wAAAAACAP7//f8BAAMA/v/+/wIAAAD8/wIABAD9//v/AgAEAP///P8BAAEA/////wEAAAD+/wEAAgD/////AAABAAAA//8AAAEAAAAAAAAA///+/wIAAgD9//z/AgADAP//+v///wQAAgD6//z/AwACAPr//v8DAP//+/8BAAIA/v/6/wAAAgD+//n///8BAP7/+/8CAP7/+//+/wAA/P/9//7/AAD9//3//f8AAP//+//7/wIAAQD8//n/AAACAPz/+v8AAAEA/f/8/wAA///9//7/AAD+//z/AAACAP7//P///wEA///+//7///8BAAAA/f/+/wIAAgD9//v/AgAEAP7/+/8AAAUAAQD6////BQAAAPr///8FAAAA/P///wIAAQD+//3///8BAAAA/////wAA/////////v/+/wIAAAD7//7/AgD///3//f///wAAAAD9//7/AAD///3//v/9/wAAAQD8//r/AgADAPz/+f8AAAIA///7//7///8AAP///v/9/wAA///+////AgD8//z/AgABAPv///8BAAAA/f8AAAEAAAD9//7/AgACAPz///8CAAEA/f8AAAAAAAABAAIA/v///wAAAgAAAP///v8CAAEAAQD///////8CAAAA/v///wIAAAAAAP7///8CAAIA+////wQAAQD7/wEAAgD+//7/BAD///z/AAADAP///f///wAAAAD///7/AAD/////////////AAD+//7/AQAAAPz/AAABAPz//v8DAP7/+/8AAAMA/v/9////AAAAAP///f/+/wEAAQD9////AQAAAP3/AAABAP///v8BAP////8AAAIA/////wAAAQD//wEAAAAAAP//AgABAAAA//8CAAEAAAD//wEAAQABAAAAAQAAAAEAAgAAAP7/AQADAAAA/v8BAAIAAgD//wAAAgAAAAAAAwABAP7/AQAEAP///v8CAAIA//8AAAIAAQAAAAEAAQAAAP//AgACAP//AAACAAAAAAAAAAIAAAD//wAABAACAP3//v8FAAIA/v/9/wIABAABAP7/AQACAAIA//8AAAAAAgAAAAAAAgADAP////8AAAIAAQAAAP7/AQADAAMA///+////BgAEAPv//P8GAAUA/v/9/wMAAgACAAEAAAD//wMAAgAAAAAAAwABAAEAAQABAAEAAgAAAP//AwADAP////8CAAIAAAAAAAEAAQABAAEAAQABAAAAAAADAAIA/////wMAAwAAAP//AgACAAAA//8DAAIAAAAAAAIAAgABAAAAAQAAAAIAAgAAAAAABAADAP3//v8GAAUA/f/9/wUABAD/////AgADAAEA//8BAAMAAgD/////AwADAAAA//8CAAQAAAD+/wEAAwAAAP//AAACAAIAAAD+/wEABAAAAPz/AQAEAP///v8DAAEA//8AAAEAAQACAP///v8BAAMA//8AAAEAAgD/////AAADAAEA/f/+/wQAAgD+//3/AQADAAEA/P///wQAAwD7//z/AgAEAP7/+/8AAAUA///8/wAAAwD+//3///8BAP/////+/wAA////////AQD8//7/AQABAPz//v8AAP///v8BAP3//v8AAAAA/P8BAAAA/f/8/wEAAAD+//z/AAAAAP///v8BAPz//v8CAAAA+/8AAP///f///wQA/P/7/wAAAwD8//3///8BAPz///8AAP///P/+////AgD9//z//v8EAP3/+////wMA/v/9//7/AQD+/wAA//////z/AQACAAAA+/8AAAEAAQAAAP7//P8DAAIA///9/wEA//8BAAEAAAD+/wAAAAADAAEA/P/+/wUAAQD+/wAAAwAAAP7/AQACAAAA/////wIAAgAAAAAAAAAAAAAAAgABAAAAAAACAAIAAQD9/wEABAABAP7/AwADAAEA//8CAAEAAwAAAAIAAwADAP//AQACAAUA/////wQABQD+/wEABAADAP7/AwADAAIAAAADAAEAAgACAAMAAAABAAIABQD/////AwAFAP7/AAAEAAMA//8DAAIAAAD//wMAAQABAAEAAwAAAAEAAgADAP7/AQADAAIA//8BAAIAAgD//wEAAgADAP//AgACAAIA//8BAAIABAD//wAAAwAFAP7//v8DAAUA//8AAAAAAwADAAIA/v8AAAIABAACAAAA/v8EAAMAAQABAAMA//8CAAUAAgD9/wEABQAEAP7/AQAEAAIA//8DAAMA/v///wYAAwD+////BAADAAEAAAABAAEAAwABAAEAAQACAAEAAgABAAEAAQACAAAAAQACAAEA//8AAAIAAgD//wAAAQACAAAA//8AAAIAAQD///7/AgADAP///f8BAAMAAAD8/wAABAABAPz/AAAEAAAA/f8AAAEAAAD+/wAAAwABAP3///8DAAEA/f///wEAAQAAAP////8CAAEA/v///wIAAAD+/wEAAQD+/wEAAgD+//3/AgADAP7//f8BAAMAAQD9//7/AQABAAAA/////wAAAQAAAAAA/v///wAAAAD//wAAAAD/////AQD///////8AAAAAAAD//wAA/v/+/wAAAwD///3///8CAAEAAAD9//7/AAADAAEA/f/+/wIA//8BAAIAAAD8/wAABAABAP3///8BAAMAAAD//wEAAAD//wMAAQD9////BQAAAP3/AQADAP///v8BAAMA//8AAAIAAQD//wIAAQD+////BAABAP//AQADAP//AQABAAEA//8BAAEAAgAAAAAAAQADAP//AAAAAAEAAQADAP7///8EAAMA/P8BAAMAAAD+/wQAAAD//wMAAwD7/wEABAD///7/AwAAAAAAAgABAP3/AgABAP7/AAADAP7//v8DAAIA/f///wIAAQD//wEA//8AAAEAAAAAAAAA//8BAAIA///+/wMAAgD+////AgABAP7/AAACAAIA/v8AAAMAAQD+////AgACAP7/AAABAAEAAAAAAP//AQACAP///v8CAAEA/////wAA//8CAAEA/f///wMAAAD9////AgD/////AQAAAP7///8CAP///P8AAAIA/v/9/wEAAgD+//7//v8AAAEA///9////////////AQD///3///8CAAAA/f/9/wEAAAD+////AQAAAP7//v8BAAAA///+////AQAAAP7/AAACAP///f8CAAMA/v/9/wEAAwAAAP7/AAADAAAA/f8BAAMA/v/+/wIAAwD/////AAABAAEA///+/wMAAQD9/wAABQD///3/AgADAP3/AQADAP7//f8FAAMA/P/9/wUAAgD9//7/AwACAAAA/v8BAAEAAAD//wAAAAAAAAAAAQD/////AQACAP3//f8DAAQA/f/8/wEAAQD//wAA/////wEAAAD+/wAAAAD9////BAD///v/AAAEAP//+////wMAAAD+//7/AQABAAAA/f8AAAIAAAD9/wIAAQD+////AgAAAAAA//////7/BAACAP3//P8CAAMAAAD8/wAAAQAAAP7/AQAAAP7///8CAAAA/v///wIA/v/9/wEAAwD+//3/AQABAP7/AAAAAP7///8BAAAA/v///wAAAAD///7///8AAAEA///8/wAAAwAAAP3///8BAP////8AAP////8BAAAA/v8BAAIA/v/+/wEAAQD///////8AAAAAAQABAP///f8AAAMAAAD+/wAAAAD//wEAAgD+//7/AQABAAAA////////AQABAP7///8BAAEA///9/wEAAgD9//7/AgABAP3//v8BAAEAAAD+//7/AQAAAP7///////7/AQAAAP////8BAAAA/////wAA//8AAAAAAAD+/wEAAQD///7/AgD//wAAAQD///7/AgABAP7//v8BAAEAAQD+//7/AgACAP7///8CAAEA//8AAAAAAQABAP7/AAADAAAA/f8CAAMA/v/9/wMAAgD///7/AQABAAEA/////wAAAwAAAP3/AAAFAAAA/P///wQAAAD//wAAAQAAAAEA/////wAAAgD+////AwABAP3/AAACAAAA/f8AAAEAAQD/////AQACAP3//v8CAAMA/f/8/wEABQD///v//f8FAAMA/P/6/wMABQD+//r/AQADAAAA//8AAP7///8CAAIA/P/+/wIAAQD//wAA////////AgAAAP7///8BAAAA/v8AAAMA/P/9/wQAAgD6////BgD///n/AQAEAP7//P8BAAIA///+/wAAAAD///7/AQAAAP7///8BAP///v8AAAEA/v8AAP////8AAAAA/v8AAP///////wEA/f///wIAAQD7//7/AgACAP3//f/+/wQAAQD8//z/AwABAP7//f8AAAAAAAD9/wAAAAD///3/AgAAAP3//f8AAAAAAQD9//z/AAAEAP7//P///wIA///+//3/AAAAAP///v///wAAAgD9//z///8CAP/////+////AAABAP3///8AAP////8BAP///v///wIA///+////AQAAAP///P///wIAAQD8//7/AgABAP3//////wAA///+////AQD///7/AAABAP///v///wEA/v/8/wAAAgD+//7/AQD///3///8BAP7//P/+/wIAAAD7//7/BAD+//r/AAADAPz//P8BAAAA/f////7///8BAP7//P8AAAAA///9////AAAAAP3///8BAP//+/8AAAEA/v/9/wEAAAAAAP3//v8BAAAA+////wMAAAD6/wEAAgD+//3/AgAAAP7///8DAP7//v8BAAIA/P8AAAMAAQD7////AwADAP7//v///wQAAQD///7/AgACAAAA/f8CAAMAAQD9/wEAAwAAAP3/AwADAP///v8CAAMAAQD9/wAAAgADAP////8CAAIA//8AAAEAAgD//wAAAQACAAEA/f/+/wQAAwD+//3/AwACAAAA//8AAAAAAQD//wAAAQAAAP//AQAAAP//AAACAP7//f8CAAQA/P/9/wQABAD7//3/BAADAPz//P8BAAUAAQD7//7/BAABAP7//v8AAAEAAQAAAP////8AAAIAAgD+//3/AgAEAP///P8BAAQAAQD+/wAAAAACAAEA/v8AAAMAAAD//wIAAgD//wAAAgABAAAAAQAAAAEAAQAAAAAAAgABAAAAAAABAAEAAAAAAAIAAAD+/wAABAACAP3///8DAAIA//8AAAIAAQAAAAAAAQACAAEAAAAAAAIAAwABAP//AQADAAIAAAD//wIABQAAAP//AwAEAAAAAQADAAEAAAADAAIAAgACAAEAAAAEAAQAAAD+/wQABgABAP3/BQAFAAAA//8FAAMAAQABAAQAAgADAAEAAgABAAUAAwAAAAAABQACAAAAAgAFAP//AAAEAAUA/////wEABQACAAAAAAAEAAMAAQD//wIAAgACAAEAAgABAAIAAQABAAEAAQABAAEAAQABAAEAAgABAAAAAAACAAEA//8AAAIAAQD//wEAAwAAAP3/AQAFAP7//P8CAAUA///+/wEAAwAAAP//AAACAAAAAAAAAAEAAQABAP////8CAAIA/v///wIAAwD+//7/AgABAP//AgABAP7///8EAAIA/P/+/wUAAwD7//7/BQABAPz/AQADAAAA//8BAP//AAAAAAEAAAAAAP7/AgABAP///P8DAAIA///8/wAAAgADAP3//f///wYAAAD8//z/AgACAAEA/P///wEAAwD9//7/AQACAP3/AAABAAEA/f8BAAAAAAD//wIA/////wIAAwD8////BAADAPz/AAACAAAA//8CAP7///8DAAMA/f///wIA///9/wMAAQD9//3/BAACAP7//P8AAAIAAAD9/wAAAQD/////AgD9//7/AAAAAP7/AAD///////8AAP7/AAD///7///8BAP////////7//v8DAAEA+//9/wQAAgD8//7/AgD+//7/AQABAP3///8BAP7///8CAP7//f8BAAIA/v///wEA/////wAA//8AAAEA///+/wAAAQAAAP///////wAAAQD///3/AAACAAAA/f/+/wMAAgD8//3/AwADAPv//v8EAAEA/P/+/wMAAgD9//7/AgABAP7/AAABAP////8CAAAA/f8AAAMA///9/wAAAgD+////AgD///7/AQAAAP///v8AAAAA/v///wIA///9/wEAAQD+////AgD///3/AQABAP////8AAAAA//8CAAEA/f///wIAAQAAAP////8AAAMAAQD+/wEAAgD//wEAAgAAAP//AwABAAAAAgACAAEAAgD//wAABAADAP7/AAACAAQAAgD+//3/BQAEAP3///8EAAAAAAABAAEA/v8CAAIAAgD+/wAABAAEAPv///8FAAQA/P///wEABAADAP3/+v8FAAYA/f/7/wUAAgD+////AwAAAAEA/////wEABAD+//7/AgACAP7/AQACAP///f8CAAIAAAD//wAAAQACAP////8BAAIAAAAAAAEAAQAAAAAAAAACAAEAAAABAAMAAgAAAP//AQACAAIAAAACAAEAAAACAAUAAAD8/wIABwD///3/BAAGAP3//v8EAAQA/v8BAAMAAQAAAAQAAgD/////BAADAAIA//8AAAQABAD+//7/BQAGAP7//v8EAAMA//8BAAQAAQD+/wIABQD///7/AgACAAEAAwD///7/AwAEAP7//v8DAAIA//8AAAAAAgABAAAA//8AAAEAAAD//wEAAAD//wAAAgAAAP7/AAACAP7//v8BAAIA/v/+/wEAAQD///7///8DAAAA+/8AAAQA///9/wAAAQD+////AQAAAP///////wEAAAD///7/AAABAAAA/f/+/wIAAgD7//7/AwAAAPz/AQAAAP3///8BAP3/AAABAPz/+/8DAAIA/f/8//////8BAP7//f/+/wAA/f8AAAAA/P/6/wEAAwD///n//v8BAAAA/P/9//7/AAD+//7//v////3///////7//P8AAP/////+/wAA/f/9////AgD9//3//v8AAP//AgD9//v//v8EAP7//v////7//f8FAAEA+P/8/wkAAAD3//3/BwD///z///8CAP7//////wAA/v8BAAAA/v/+/wMAAAD+//3/AQABAAAA/v8AAAAA/////wIA/v/+/wEAAAD9/wIAAAD9//7/AQD/////AAD///7/AAD//wAA/v/9/wAAAgD+//3/AAAAAP//AAD///3///8BAAAA/v/9/wAAAQD///////8AAP7/AAABAP///f8BAAIAAAD8/wIAAwD+//z/BAADAP///P8DAAIAAAD+/wEAAQACAP//AAAAAAMA/////wEABAD//wEAAAABAAAAAwD//wAAAgADAP7///8DAAQA/P/+/wQABgD9//3/AwAEAP////8AAAIAAQACAAAAAAABAAIAAQAAAAAAAgAAAAAAAAADAAIA/v/+/wQABAD+//3/AwACAP//AAADAAEA//8AAAMAAAD//wEAAwAAAAAAAQACAP//AgAAAP//AgAEAP7//f8CAAQA/v/+/wEAAwAAAAAAAAABAP7/AQADAAAA/P8CAAMAAAD+/wAAAQACAP7//v8BAAMA/v/+/wIAAgD9/wAAAgAAAP7/AAAAAAIA///9////BQAAAP3/AQADAP7///8AAAAAAAACAP3//f8DAAQA/P/9/wEAAgD+////AAD/////AgD///7/AAAAAP7/AQAAAP3///8EAP7/+/8CAAMA/f/8/wIAAQD9////AAD+/wAAAAD///7/AAAAAAAAAQD+//z/AgAEAP7/+v8CAAQA/v/9/wEAAAAAAAAAAAD9/wEAAgD+//v/AgAEAP7/+v8BAAMA///8////AQABAPz//v8BAAAA/P///wEA/v/9/wEA///9//3/AQAAAP3/+/8AAAIA/f/6/wAAAAD///7//v/9////AQD+//v///8AAP///v/+//3/AAABAP3/+/8BAAAA/f/9/////v////3///8AAP7//P///////v/8//7/AQABAPv//P8BAAAA+f///wEA/f/8/wIA///7//3/AQD8//3/AAD///r///8BAP//+v/+/wAA/v/8/wAAAAD9//z/AQD///7//f////7///8AAAAA/P/9/wAAAgD8//3/AQAAAP3//////wAA/v/+//7/AAD//////v/+//7/AQD///7//P///wEA///8/wAAAAD+//3/AQD///7//v8AAP//AAD+/////v8AAP//AAD+/wAAAAD/////AAD+/wAAAAABAP7/AAAAAP7///8DAP///f8CAAQA/P/9/wQAAgD9/wAAAgAAAAAAAgAAAP3/AAAEAAEA/f8CAAMA/f///wUAAAD6/wEABQD+//7/AwD///3/BAACAPz//v8EAAIA/////wAAAAACAAEAAAD//wEAAwAAAPz/AgAFAP//+/8CAAUAAgD8////AwAEAP7//v8CAAMA//8BAAAAAgAAAAAAAAAEAAAA/v8CAAUA/v///wIAAgD//wIAAQAAAAAABAABAP///v8DAAMAAQD//wIAAQABAAEAAwD///3/AgAHAAAA/P8AAAYAAgD9//7/BAADAAAA//8BAAIAAwD/////AgAEAP7///8EAAQA/v8AAAIAAgABAAIA/v8BAAQAAgD+/wEAAwABAP//AgACAAAA//8CAAIAAgD/////AQAEAAEA//8AAAIAAgACAP//AAACAAIAAAABAAEAAQABAAAAAAACAAEAAAABAAEAAQADAP///v8EAAQA/f8AAAQAAQD//wMAAgD//wIAAwD//wEABAACAP7/AQAFAAIA/v8BAAMAAwD//wAABAACAP//AQADAAEA//8DAAMA//8AAAMAAgAAAAAAAwACAAAAAAADAAMAAAD//wIAAwAAAAAAAwABAAAAAQADAAEAAAAAAAIABAAAAPz/AgAGAAEA/f8AAAIAAwABAP//AAAEAAIA/////wIAAwABAPz/AgAHAAAA/P8DAAMA//8BAAIA//8CAAIA//8CAAQA/v/+/wUABQD+//7/AwAEAAAA//8AAAMABAABAP7/AAAFAAMA/f///wUABAAAAAAAAQACAAMAAwD/////BAAFAP////8CAAQAAwAAAP7/AQAFAAMA/v/+/wIABQADAP7//f8EAAQAAQD//wEAAwACAP//AQAEAAEA/v8DAAMA//8BAAQAAAD//wMAAgD//wEAAgD//wAAAgACAAAAAAAAAAEAAQABAP7/AQADAAAA/v8CAAQAAAD8/wEABgACAPz/AAAEAAIA//8CAAEA//8AAAQAAgD+//7/BAAEAAAA/f8CAAMAAQD//wIAAgAAAP//AgACAAIAAAAAAAIAAwD//wAAAgABAP//AQACAAIAAAAAAAAAAgAAAAEAAQD///7/AwACAP///v8BAAIAAQD/////AgADAP7//f8CAAUA/v/7/wEABgAAAP3/AQACAP//AAACAAEA/v8AAAIAAwAAAP7/AQADAAAA//8CAAMA/v///wIAAwD///7/AQAEAAEA//8AAAEA//8CAAMAAAD+/wIAAgAAAAAAAQAAAAIAAgAAAP//AwADAP7///8EAAUA///+/wIABAACAP7//v8EAAUA///9/wUAAwD9/wEABAD+////BAADAPz/AQAFAAEA/P8BAAUAAQD8/wMABAD///z/BAADAP7//v8DAAEAAQABAAAA/v8CAAIA///8/wMAAwD///7/AgAAAAAAAAAAAP//AgD//wAAAAADAAAA///9/wUAAwD+//z/AwAEAAAA/P8BAAMAAwD8/wAAAgACAP//AAAAAAIA//8AAAAAAwD///7/AAADAAAA///+/wEAAgAAAPz/AAADAAAA/P8AAAIA/v/+/wEA/v/+/wIAAAD7////BAD///r/AAADAP7/+////wMA///8/wAAAgD///z///8CAP///P8AAAIA/v/9/wEAAgD8//z/AgABAP3//v8BAP///P8AAAMA/v/7////AwAAAP3//v//////AAD/////AAD+//3/AgACAPv//P8CAAAA/f///wAA////////AAAAAP7//v8CAAAA/f8AAAMA/v/8/wIAAgD9//7/BAACAPv//f8FAAMA+v/8/wUAAwD7//3/BAABAP3//v8DAAAA/P///wMA///+/wEAAQD9/wAAAgAAAP7/AAAAAAEAAQD///3/AgACAP7//f8DAAAA/v8BAAEA/f8BAAIA/v/9/wIAAQAAAAAA//8AAAEAAAD/////AAACAAAA/v8AAAAAAAAAAP///f8AAAIA///9//////8BAAEA/f/8/wIAAgD9//3/AQAAAP7//v8BAAAA/v/7/wAAAwD+//j/AQAEAPz/+P8BAAEA/f/7//////8AAP3//f///////P/+//3/AAD///3//f8BAPz/+////wEA/P/9//3/AAD///3/+f/+/wEAAAD6//v//v8DAP3/+v/7/wEA/v/9//r//v//////+v/+//3//v/9////+v/9//7/AAD5//7//v////r////9//7/+v////3////9//7/+f///////v/4/////v/+//v//v/8/wAA/P/8//3/AgD6//v///8CAPz//P/+/wEA/P/+////AAD7//7///////3/AAD8//7///8CAPz//P/+/wIA/f/+/wAAAQD7////AwABAPv//v8BAAMA//////3/AQADAAAA/P8CAAMA/v/8/wUAAwD9//7/BQAAAP7/AQACAAAAAQABAAEAAQAAAAEAAwABAP7/AwADAAAAAQACAP//AQADAAMAAQABAAAAAgACAAIA//8CAAQAAQD+/wMABAD+//3/BQADAP////8DAAIAAQD//wAAAQACAAEAAAAAAAEAAQACAAAA/v8AAAUAAgD8//7/BQACAP7///8CAAAA//8BAAIA////////AwAAAAAA/v8BAAAAAAAAAAIA/f///wEAAgD7/wAAAgACAPv///8AAAIA/v////z/AgABAAEA+f8AAAMAAgD7/wAAAAACAP7/AAD+//////8DAP3///8BAAMA+//+/wMAAgD7////AgADAP3///8BAAEA/P8CAAMA/f/7/wUAAwD+//z/AgACAAAA/f///wIAAQD8////AgABAPz///8AAAEAAAD///3/AQACAP7//P8BAAAA/f8AAAEA/P/9/wMAAQD7//3/AAAAAP/////+//3/AAACAP///P/8/wIAAwD+//3///8AAP//AgD///v//v8EAAMA/f/+/wEAAgAAAP//AQABAP7/AAACAAIA/v///wIAAgD//wAAAQAAAP//AQD//wEAAAD/////AgAAAP////8BAP//AAAAAAEA/v/+/wEAAwD9//z/AAADAP7//v/+////AAAAAP3//f8AAAEA/P///wAA///9/wAAAAD///3//v8AAAEA/f/9/wAAAQD+/wEA///+//7/AgABAP7//f8AAAIAAgD8//7/AQADAP3//f8DAAMA/P///wMAAgD9////AQADAP7/AAACAAQA/v/+/wIAAwAAAAEA//8BAAEABAABAAEA//8BAAQABQD9////BAAFAP//AQADAAQAAQAAAAAABAADAAAAAAAEAAIAAQABAAMAAQABAAIABAAAAAAAAQAEAAIAAQAAAAQAAgACAAAAAQABAAMAAQAAAAIAAgD//wIAAgAAAP//AwADAAAA//8BAAIAAQD/////AgACAP7//v8DAAAA/P8AAAMA///9/wIAAQD9////AQD///7/AgAAAP7//v8CAP3//v8CAAEA+/8CAAIA/v/7/wUAAAD7//7/BgD///7///8DAP7/AQAAAAIA//8CAP7/AQD+/wEA//8CAPz/AgADAAIA+v8BAAMAAwD4////AwADAPj/AQABAAIA+f8CAP3////9/wEA+/8BAP7/AAD5/wEA//////j/AAAAAAAA+P8AAAEA///5/wEA///+//v/AgD+//3//P8CAP3////8/wAA/P/+//7/AQD7//3//f8CAPz//P/7/wEAAAD9//j/AAABAP7/+P///////v/8/////P/9//7////9//3//P8BAP///P/6/wIAAAD7//r/AgAAAP7/+v8AAAIA///7/wAAAgD+//3/AwABAP3/AQADAAEAAAABAAAABAADAAAA//8EAAIAAgACAAMAAgAEAAMAAwACAAQAAQAFAAUABAAAAAUABgAEAAIABAADAAgABgACAAAACgAGAAMAAwAIAAQABgAEAAUAAwAIAAUABAADAAUABAAHAAQAAwADAAgABAAFAAQABQACAAcABwADAAAACAAGAAMAAgAGAAQABQACAAMAAwAIAAMAAQACAAgABAADAAAABgAEAAYAAAAEAAQABgABAAQAAwAEAAEABQADAAQAAAAFAAUABQD9/wUABQADAP//BwADAAEAAAAIAAEAAQAAAAYAAAAEAP//BQD//wMAAQAFAPz/AQACAAcA/f8BAP7/BQAAAAcA/P8BAAAABwD//wIA//8DAP//BQD//wQA/v8GAAEAAwD9/wYAAQACAP7/BAAAAAMA//8DAP7/BQD//wAAAgAHAPz/AAACAAYA//8CAAAABAABAAQAAAACAAIABAABAAMAAQADAAIABAACAAEAAgAFAAQAAwACAAIAAgAFAAQAAAABAAIAAwABAAMA//8BAP//AQABAAMA/f8AAAAAAwD+////AAADAPz/AgAAAAAA/v8DAP7/AQAAAAQA/f8AAP//BAD+////+/8FAAAA/v/8/wQA/v////3/AAD+/wMA/f/9//7/BAD9//7//P8CAAEA///8/wIAAgD+//z/BAAAAP7//f8EAAAAAQD8/wAAAAADAP//AQD+/wIA/v8CAP7/AQD7/wQA//////v/BQAAAP3//f8FAP///v/+/wQA/v/+//z/BQD///7//f8EAAEA///+/wIA//8BAP3/AwD+/wEA/P8BAP3/AQD5/wAA/f8BAPn/AAD9/wAA+f8DAPz//f/6/wMA/f////n/AgD7/wAA/f8BAPf/AQD+/wEA9v8BAP//BAD3/wIA/v8DAPv/AgD9/wMA/f8CAP3/BQD9/wEA//8GAP7/AQD//wQAAQACAP//AwAEAAQA/v8CAAMABgD+////AwAIAAAA//8DAAcAAQD+/wQABgADAAIAAQADAAQAAgACAAIAAQABAAQAAwAAAAEAAwABAAIABAACAP7/AwADAAQAAAAFAAAABwADAAcAAQAEAAIABwABAAMAAwAHAP//BAAEAAYA/f8GAAMABwAAAAYAAAAHAAAABwAAAAUA/v8GAAAABwD+/wEA/v8GAP///v/8/wMA+/8BAPz//v/6/wEA/P/+//r//v/8//7/9//+//z//v/3////+v////r/AAD3//z//f////X//P/9//7/9v/9//z////4////+v8AAPv/AAD6/wAA/P8CAPn/AAD7/wMA/P/+//n/AwD+//3/+P8DAP3//f/6/wIA/P/8//z/AQD8//z/+v8CAP3//f/6/wEA+//7//7/AwD4//n//v8FAPr/+f/6/wMA/f/7//r/AQD7//3//P////z//v/9//7//P////3////7/wEA/f/+//3/AQD9//7/AAD9//z//v8AAP7/+//+/wEAAAD8//z/AwAAAPz//P8CAAAA/f/8/wEAAAAAAP3/AAABAAEA/f8AAP//AwD///7//f8EAAIA/v/8/wQAAwD//wAABAACAAAAAwAGAP7///8BAAUAAQD+//7/AgAEAP//AAAAAAMAAQABAP//AgADAP3//f8AAAMA///+//z/AgAAAP3//P8CAP///f/+/wAA/P8AAP///f/8/wIA/v/8//3/AAAAAP///f/+/wEAAAD+//z/AQABAAAA/v/+/wAAAgD//wEAAAABAAEAAwD+////AQADAP////8AAAAA//8DAP/////+////AwD9//3//P8EAP///v/7/wEAAAD///7/AAD+/wQA/P////v/AgD7/wAA+f////z/AwD8//7//P8EAPz//v/9/wYA+f/+////BAD6/wEA//8CAP3/BAD9/wAA/v8DAPz/AAAAAAIA+/8BAAAAAAD7/wIA/f/9//z/AgD5//3/+P8BAPf/+//3////9//5//X//P/5//j/8//8//T/9//0//3/8P/5//b/+v/x//v/9P/3//T//P/x//j/9//7//L/9//6//3/8v/3//v//v/x//n//f/8//T/+//6//z/+P/8//v/+v/6//3/+//7//X//v/6//j/8//+//v/9//0//7/+P/0//f/AAD2//X/+f////f/9//6/wAA8//5//b//v/0//z/9P/7//L//f/z//j/8v/8//P/+f/x//n/8P/7//D/+f/x//v/8f/2//L//P/3//j/8v/9//b/+v/2//v/8v/+//n/9//x/wIA9v/5//P//f/2//v/9f/8//b////1//z/+P/+//f/AAD2//z/+f8BAPb//f/4/wAA9//+//r////5//7//P////n/AQD7//3/+v8FAPz/+//6/wMA/P/+//j/AQAAAAEA9/8BAAEAAQD9/wAAAwACAAUAAgADAAEABgAFAAYAAAADAAcACgD//wYABgAPAAEACwAFABAABAAQAAQAEgAFABEABAARAAgAEwAHABIACgAVAAcAFAAKABcABgAZAAkAGAAJABgABwAXAAkAFgAGABgABwAWAAgAHQAGABcACwAeAAgAGwAMACAABwAgAA0AIgAKACAACgAjAA0AHgAHAB0ADgAaAAcAFgAJABsABAAZAAYAGQADABwAAwAZAAQAFQACABgAAQASAAAAFQD+/xAAAQATAPv/DwADABAA+f8JAAIADQD6/woAAQANAPv/DAABAA4A/v8OAAMADQABAA0AAQAQAAUADgAEABEACAAOAAYADwALABEABwATAAsAFAAHABcADQAVAAoAGAASABUACgAVABMAGQALABcAEQAcABAAGQASABgAEgAWAA8AGQAQABYADgAWABEAEQAOAA0ADAAPAAoACwALAAsACQAGAAcACAAHAAQAAAADAAcAAgD7/wAABAD9//r//P/+//n/+f/4//r/9//5//X/8//1//f/8//y//H/9f/z//P/8//1//H/+P/w//X/9P/3//T/9v/y//b/9//3//L/+f/0//f/8P/4//P/9P/w//n/8//5/+3/9v/x//z/8P/3//D/+v/3//z/8f/8//P/AADz//n/8v8AAPX/+//w/wAA8f/9/+7////v//3/7P/9/+3////u//3/7P/+//L//f/t/wAA7v8AAPD/AADu//7/7//+//P////w/wEA8P8AAOv/AQDu/wAA5/8CAO3//P/u//7/7v/+//L/AgDw//v/9/8EAPP/+v/x/wMA8v/+//L/AQDy/wMA8v/9//T/AgDz////9v////L//v/5//3/9v8AAPj//P/+////9//9//3/AQD4////+P/9//n//f/1//v/9v/7//L/+v/v//r/7P/3/+z/+P/s//X/7v/y//D/9v/y//P/8f/2//P/8//u//X/7f/1/+r/8v/s//T/5P/v/+n/8v/o/+//6f/z/+3/9P/n//P/8P/3/+z/9P/x//v/8v/1//P//f/1//3/9P8DAPb////5/wQA+f8BAAEABQD7/wgAAgAJAPv/DQD//woAAgAQAAIACwALABIACQANAAkAFAAPAA8ABwAVABAADwAHABUADwATAA0AFwALABMADgAVAAoAEQANABEACgAQAA8ADAAIABEACAAOAAEACwAJAAsABwAIAAoACwAKAAoACwAJAA0ADAALAAgADwAHAA0ACQAQAAgADAAHABIACAAOAAQAFQAJABIABwAVAAgAGAAIABcABgAcAAkAHQAFAB8ACQAiAAYAIwAGACQACAAmAAQAIAAHACUAAwAcAAYAIwAHABkAAwAfAAcAGwAAAB4ACQAaAP//HQAGABUA//8bAAIAGAABABgA/v8WAAMAEAD8/xAAAwAIAPv/CwD//wgA+/8KAPz/CwD5/w0A+/8MAPn/CwD+/wQA+P8JAPn/AQD2/wUA9P8BAPj////y/wAA+P/3//T//v/2//b/9//+//X/+v/6////9f/8//r//P/2//j/+//5//n/9//8//H/+//0//z/9f/+/+7//P/4/wAA7//9//n/AwD4/wIA/P8IAP//BAAAAAsAAAAGAAIACwD+/wcAAgALAP3/CwD6/woA//8KAPj/CQAAAAsA+/8HAP3/CgABAAYA//8JAAMABgD8/wYAAgAEAPb/BwD9/wIA9P8EAPn/BgDy/wIA9f8FAPX/AgD7/wIA9/8FAPj/AQD7/wIA/v8CAAAABQABAAcAAAAHAAUACAAHAAcABgAKAAYABgABAAoAAAAHAAAABQAAAAYABAD//wEABQACAP3/+/8AAPj/+//0//n/9P/4/+7/9P/x//D/6//x//H/8v/t//D/7f/z/+z/6f/u//D/7f/r/+z/7f/l/+z/6f/r/+H/6v/l/+v/5P/i/+n/6f/q/+b/5v/o/+f/6//n/+b/6v/u/+z/5v/w/+z/8v/o//n/7P/3/+z/+P/r//f/7v/x/+r/8P/u//H/6P/4/+z/+f/v//v/8P/8//L/AwDx/wkA9/8MAPj/EwD8/xEA/v8ZAAEAFgADABQABQAXAAUAEwAHABcACQAYAAcAGwAPABoADQAcABAAGgAOABwADwAbAA8AHwASABcAEwAaABIAEgAUABMAEQASABEADQAPAA4ADgAKAAsADAAPAAMACQAIAAoAAAAIAAIABwD7/woA/v8FAP7/BAADAAUA/P8HAAAABQD3/wgA/f8FAPP/CAD1/woA9/8GAPj/CQD//wUAAQAHAAMABAAGAAsA//8GAAUACgD//wgAAAAJAP3/CQD8/wwAAQAFAAIACwAFAAEAAwAJAAcABAABAAcAAgAAAAMABAD9/wAABAAGAPr/AAACAP7///8BAAAA+//9/wEA/P/5//3/AQD4//r//f/9//r/+f/+//v/+//8//j//f/2//3/9v/8//b//P/2//r/9f/9//f//P/4/wEA+f/8//f/BAD7//v/+P8AAP3/+//7/wEA+/////z/AQD6////+/8CAPv/BAD7/wQA/v8CAP3/AwD9////+/8CAPz/+//6/wIA///4//r//v/+//j/+v/5////+//6//n//f/8//r/+v/9//z//P/7//z//f/+//v//v/7/wAA+v8AAP3/AAD7/////f/9//7//f////3//v8EAP7/BAD//wgAAgAIAP//DQD8/xAAAAANAAIACwAEAAYAAQAGAAEACAD+/wcAAAANAPv/CgABABIA/f8MAP7/FAD//xAA//8UAAMAFQABABMABgAXAAIADwAKABYA//8SAAcAFgACABcABgAOAAcAEQAKAAUADAAFAAcACAAFAAgACAAQAAYADQAPAA8ABAAQABAACgAKAAsADwADAAsAAgAOAAEACwD//w8A/v8MAAMACAABAAwACQADAAkACwAEAAgABwAIAP3/BwAJAAgAAQAJAAoACQAEAAgACAADAAYABgAAAAEAAgACAPr///8AAP3//P/7/wEA+v/9//n/BAD7//3/+f/+//3//f/5//z/+/8BAPn//v/7/wAA+//8///////9//j/AAD2////+f////b//v//////+v/9//n/BQD7////9f8FAPf/AgD1/wUA9/8HAPn/CQD2/wsA+v8MAPX/DgD4/wwA8/8RAPf/EAD3/xIA9/8SAPj/FwD0/xQA+/8bAPH/EwD7/xgA9v8YAPz/FgD+/x4A+v8YAP//HgD//xoABAAWAAcAHwAIABoACQAeAAsAHwAKABwACgAlAAgAHgAKABsADAAeAAoAFgAJABcADgAVAAwAEAAQABcACQARAA8ADgAPAAwAEQAIAA8ADAAOAAgADAALAAkABwAEAAUACgACAAMAAAAKAP7/AgD//woA+v8IAPn/CwD1/woA9/8IAPP/DAD1/wQA7f8OAPD/DgDs/xMA8v8RAO//CgDv/w0A6P8KAOn/CwDn/wkA6P8JAOL/CwDj/woA3/8KAOP/AgDb/wYA4f8AANn/AQDi//7/1/8BAN//AQDZ/wIA4P/9/97//P/f//r/4P/2/+H/9//g//X/4P/3/+D/9//j//L/4//z/+X/8f/n//X/4//1/+z/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7//1//L/8P/x/+//9v/v//j/6//5/+z/+//s//z/6f/9/+7/AADl/wEA8P8EAOT/BgDw/wkA5/8HAO//CwDt/wcA7/8LAPD/CADy/wwA8f8LAPb/DQD0/w0A+P8OAPv/DAD5/w4AAAAJAP3/CwAEAAkAAgAJAAcACgAIAAoACgALAA0ACwARAAoAEwAJABYACQAXAAkAGgAMABsACwAeAA0AHgAMACAACgAhAAkAJAAIACMABwAjAAsAIwAKACIADwAeAAsAJAAQABoACgAfAAoAGwAIABUABAAXAAgAEAADAA0ACAAJAAQABwAJAP//AgABAAgA9v/+//b/BADx//3/6//6/+f//f/j//L/3v/6/9z/8f/X//X/1f/w/9P/8P/S/+z/zP/u/9L/6v/I/+v/0f/p/8z/5//R/+j/0//m/9P/5//X/+n/2v/q/93/7P/j/+7/5P/x/+//8v/v//b/+v/6//z//P8EAAEABwAHABIABgASABMAIQAPAB4AGQArABsAKQAaADUAJgAxAB0APQAoADgAJQA+ACgAPQAuAD4AKQA+AC4AQAAoADkAKQA9ACYAMQAiADUAJgAnABoAKgAeABwAEgAfABMAEgALAA0ACQAHAAIA/P////v/+v/u//T/7v/w/+P/6P/e/+X/2v/c/9H/2v/S/9P/x//T/8r/zv/A/87/xf/N/8D/yv/A/87/xf/I/7//y//K/8v/xP/J/87/0P/K/87/1v/W/9f/1//f/9z/5v/d/+v/5//y/+j/9v/0/wEA9f8AAP7/EQACAA0ABAAbAAwAGgALACQAFAAkABcALAAbACsAIQAwACIAMQAoADQAJgAxACgANgAmAC4AJQAxACYAKwAjACgAIgAjAB8AIQAcABsAGwAWABcAEgASAAgAEAAHAAwA/P8JAPz/BQDw/wIA8P/7/+j/+v/k//T/4f/x/9v/8v/a/+3/1v/x/9b/8P/T/+z/1v/x/9T/6f/X/+z/2f/s/9v/6v/e//L/4v/z/+T/+f/s//n/8P/+//b//v8AAAMAAAAGAAwACgAOABIAFwATAB0AHgAkABoAKQAjADIAIQA0ACUAPQApADsAKgBEADQARAAtAEUAOABJAC4ARQA1AEgAKwBEADAAQwAmAD0ALQA7ACUAMwAkAC8AIAAoABoAIgASABkADgAUAAYABwD//wUA/f/2//f/9P/y/+b/8//m/+b/2P/r/9f/3f/O/+H/yP/Y/8f/2f+7/9j/vv/T/7j/1v+2/87/uP/T/7X/z/+3/9L/uP/Y/7r/1/+8/97/wv/h/8P/4//M/+f/0P/q/9X/6v/f//T/4v/y/+v//v/z//7/9v8IAAYACQAEABIAEgASABcAGAAbABoAKAAdACcAIAAwACMANQAlADYAKgA+ACcAPgAuAEMAKgBCAC4ARgAtAEIAKwBFAC4AQgAnAD8AKQA/ACIAOgAiADcAHgA0AB4ALQAcACoAGQAjABgAHgAVABoAEQARABAADgAIAAUACAAAAP//+v////P/+P/s//f/6v/1/+D/9f/f//L/1//z/9b/7v/R/+z/0P/r/8z/5v/K/+b/yf/l/8j/5//J/+T/yf/r/8n/4P/P/+v/zf/h/9P/6P/U/+X/2P/m/9z/6v/h/+f/5f/o/+v/7f/u/+b/9f/x//n/6v////L/BQD0/wgA8/8PAPr/EgD0/xgA+/8dAPX/HgD7/yQA+f8kAPz/KQABACoAAgApAAYALwAHACgACQAwAAkAKAAKAC0ACQAmAAwAJgALACQAEQAfAA4AIAAUABkAEwAXABUAEwAWABAAFQALABkACAAVAAQAGQD+/xIA/f8XAPf/EwD3/xEA7/8XAPP/DgDp/xgA7/8SAOf/FADs/xUA5v8QAOr/EADm/wsA6v8JAOn/BwDr/wUA7v8EAOv/AgDz/wQA8P8BAPT/AAD5//7/+P/7//7/+P/9//f/AgD0/wQA8/8GAPH/CQDt/woA7f8NAOv/EADr/w4A6/8RAOz/EADq/xMA6/8QAOn/EwDl/w4A6P8RAOT/CwDo/w8A6P8IAOn/CgDu/wYA7v8EAPP/AwD0////9v/8//r/+//6//f//P/4//3/8f////L/AwDt/wUA7/8GAOr/DQDr/wsA5/8SAOr/DgDm/xQA6f8PAOX/FwDq/w4A5/8VAOr/DQDq/xIA7f8PAO3/DwDw/xEA8f8MAPX/DQD5/wkA+f8FAP3/BgACAAAAAQADAAsA/P8GAP7/EAD7/xEA+P8SAPv/GAD1/xUA9/8cAPX/HADy/xsA8/8iAPD/GwDx/yIA7/8dAPH/HgDy/x8A8/8aAPb/HAD1/xcA+v8XAPf/FQD+/xAA+f8RAP7/CQD9/wsA/f8FAAMAAwADAP//BwD9/woA+v8HAPb/CwD2/wwA7/8LAPL/EgDr/wkA7P8RAOr/CQDp/wsA6P8KAOj/BwDm/w4A5f8IAOj/DwDj/wUA6/8JAOb/AQDs////6v///+v/+f/w//r/7P/4//X/9P/x//X/9f/x//n/8v/1//D////v//n/7/8BAOr//v/t/wIA5/8EAOr/AgDn/wgA6v8EAOj/CADu/wcA6f8IAPP/CQDs/wcA9P8MAPD/CADz/wsA9/8LAPb/CAD6/w4A/f8HAP//DgAFAAgABwANAAkACQANAAwADgAMAA8ACQATAA8AEQAIABgADwAUAAkAGgANABkACwAaAA0AHQAJABwACwAcAAoAHAAJABsACgAYAAgAFwAHABQACQARAAMAEAAHAA4AAQAKAAMACQAAAAUA/v8AAP7/AAD4//f//P/3//T/7//3/+//8//o//D/6f/v/+X/7f/k/+r/4v/p/9//6P/e/+X/2//k/9r/4//X/+D/2v/g/9b/4P/Z/97/1v/f/9r/3v/b/9//3//f/+D/3//j/+P/5v/h/+f/5v/r/+f/6//p/+7/7f/y/+7/9f/y//r/9v/8//j/AwD8/wYA/v8MAAMADQAIABIACQATAA8AFgASABgAEwAYABsAHAAYAB0AIAAeACAAIwAhAB8AJgAnACQAIAAnACYAKAAiACcAIAApACIAJwAZACcAHwAlABQAJgAaACAAEwAiABMAGQATAB8ADQASAA4AGQAIAAsABgASAAUABgAAAAgA/f8AAPz////2//r/+f/3//L/8f/2//H/8v/s//D/6v/y/+b/6P/k/+//4//n/9//6f/i/+j/2v/o/97/5//b/+r/2//n/9v/6v/c/+n/2//q/97/6//d/+v/3//t/+P/7P/j/+7/5//v/+f/8f/s//H/7P/0//H/9f/0//n/9v/5//n/+//9///////9/wMAAwAGAAAABQACAA8ABgAJAAMAEgAJAA8ABwARAAkAFgALABIACgAYAAsAFwANABcACgAbABEAFwALABsAEwAaABEAGAARABwAFwAWABEAHgAYABMAFAAdABgAEwASABoAGQATABAAFgAZABIAEwAUABYADgAVABEAFAANABQACwASAAwAEgADABIACwAPAP//DgAEAAoA/v8KAPv/BQD8/wgA9v8AAPb/BgD0//7/7v8AAPD//P/r//r/7f/4/+j/9P/o//X/5P/u/+b/8v/h/+3/4v/u/+L/6//e/+r/4//o/9v/6P/j/+b/3P/m/+T/5P/e/+P/4//k/+X/4P/i/+X/6v/h/+T/5//t/+T/6//p//D/6v/x/+z/9P/u//r/8f/3//P/AQD1//7/+P8GAPn/BQD5/wwAAQAKAP7/EgAHAA8ABwAWAAoAFwAOABoADQAZABAAIQARABoAEAAkABQAHQATACIAFAAgABQAIAAUAB8AFAAfABIAHQAPABsAEgAZAAoAGQARABIABgAXAA0ACAADABIABwADAAAACQD//////P////j/+v/3//X/9P/1//D/7v/x/+3/6P/r/+z/5P/m/+b/5v/e/+f/4f/j/9r/5//f/+L/1//l/97/4P/X/+b/3P/i/9n/5//c/+X/3//r/9z/6f/l//H/3//s/+r/9//l//X/8P/8/+z/AQD5//7/8/8KAAEABgD8/w8ACQARAAQAEgARABgADQAZABcAHAAXACEAGgAhACAAJQAhACUAJAAlACYAJgAqACUAJwAmAC4AJQAoACcALAAiAC0AJgAnAB8ALAAdACcAHQAmABQAJQAVACAADwAhAAsAGQAJABsAAwATAAEAEgD//w4A+f8HAPz/BgDy/wIA9f/8/+///f/w//L/7f/2/+3/7f/r/+3/6f/q/+n/5f/r/+X/6P/k//D/3//r/+L/8v/e/+//3v/z/+H/9f/e//j/4f/5/+D////i//7/4/8EAOb/AwDp/wcA6f8IAO3/DADu/wwA8v8QAPX/DgD3/xMA/P8TAP3/EgACABgABAASAAcAGgAJABMADgAZAA4AEQATABUAFAARABQAEAAYAA4AGAAOABgACgAcAAoAGAAGABoABgAbAAQAGAABABkAAAAZAPz/EwD9/xYA+P8RAPj/EAD0/xAA8v8JAPL/CwDs/wQA8v8FAOr////w/wEA7P/2/+3//v/u//D/6//5/+3/7f/q//H/7v/s/+v/7P/v/+n/7f/o//H/6P/v/+b/9P/p//D/5P/0/+r/9P/l//T/6//5/+f/9f/t//v/6v/6//H/+v/x/wEA8f/8//f/BQD3/wAA/P8FAP//BgD//wMABQAJAAQABAALAAYACgAIABAABgAPAAgAFAALABMACAAWAAwAGQAMABYACQAcAAwAGQAHABkACQAbAAYAFgAHABkABAAVAAcAFwAAABEABgAVAP7/DAACABEA/f8IAP//DAD8/wQA/v8GAPz/AAD7/wEA+v/7//n//P/4//n/9v/2//n/9f/4//H/+//x//j/7v/9/+7/+P/u//j/6//7/+3/9v/o////7//9/+b/AQDx/wUA6v8CAPH/CADw/wUA8/8JAPP/CAD4/wwA9/8KAP7/DQD7/wwAAgALAAEAEAAIAAkABgAUAAsADAAJABIADwAQAA8ADgAQAA8AFQAOAA8ACwAZAAoAEAAKABgACAATAAkAFgAHABUABgAVAAQAFAAEABIAAwAUAAAADwABABAA//8OAPr/CwD//woA+P8HAPz/BgD5/wEA+/8BAPj////5//r/9P/9//f/9f/1//f/9P/0//X/8v/z//P/9//w//T/8P/3/+//+P/w//r/7f/7//P//v/t//3/9f/+//D/AQD0////9v8DAPX/BQD8/wUA9/8JAP//CQD9/wsAAQANAAIADQAGABAAAwAMAAsAEQAFAAoADQARAAoACwAOAA8ACwANAA8ADQAMAAwAEQANAA4ACQANAA4AEQAHAAsACQAQAAkADAAAAA0ABwAKAPz/DQACAAMA/v8MAAEAAgD7/wYAAAAEAPn/AQD8/wIA9//+//r/AAD0//v/9v////T/+v/1//z/9f/8//b/+P/2//3/+v/4//f//f/+//v/+P/9//3//P/+/////f/+/wMAAQD/////BgAEAAQAAgALAAUACgAGABAABgAOAAkAEwALABEACQASAA4AEgALABQADQARAA4AFgAMABAADwAWAAwAEAAMABUADQAOAAoAEQALAA4ACQAKAAkADQAFAAEACAAHAAIA//8CAP//AgD9//3/+/8AAPf/+f/3//3/9P/2//L/+v/w//T/7//2/+r/8//r//P/6P/x/+j/7//n//L/5//t/+r/8P/p/+3/7P/v/+n/7//s//D/6v/w/+3/8P/t//L/8P/y//H/9P/1//X/9//2//f/+f/+//n/+//9/wMA+/8DAAAABAAAAAcAAgAGAAYACAAEAAoACAAJAAcADQAJAAwACwANAAkADwAPAA0ACgAOAA8ADgANAAsADAALAA8ACQAMAAgADAAHAA0ABQAKAAQACQADAAoAAwAGAAAACAD+/wQA/v8FAPn/AQD+/wMA9P/+//r////y//3/9v/7//L//P/0//f/8f/7//f/9f/y//f/+f/2//L/9v/5//X/8f/1//n/9f/z//L/+v/4//j/8P/7//j/+//z////9/////b/AgD3/wQA9/8FAPr/BgD7/wkA+/8IAP7/DQD8/wwAAAAOAAAAEwAEAA4AAwAVAAYAEAAGABQACQAUAAgAEwAKABQADQASAAoAEgAPABEADgARAAwAEAASABAADAARABIADQAPABAAEQAKABAADQAPAAcAEgALAA4ABAARAAYADwACAA0AAwAQAP7/CwADAA0A+/8MAAAACAD5/wkA/f8GAPj/BQD4/wQA9v8BAPT////z////8//7//D/+f/z//n/7v/0//L/9//t//D/7//0/+z/7f/u/+//6//t/+7/6v/s/+7/7//o/+r/6//y/+j/6v/p//T/6v/w/+n/9P/p//X/7P/0/+n/9//w//b/6f/4//P/+P/s//3/9v/4//H/AwD3//v/9/8FAPr////9/wcA/v8DAAAABwAEAAcABAAJAAcABwALAAwACQAIABAACwAMAAsAEwAKAA4ADAAVAAsAEQAMABYACgAUAAkAFAALABcABwASAAgAFgAEABEABwAUAAMAEAAEABAABAAOAAEADAACAAsA//8IAAAACAD+/wIA/f8HAP///f/7/wIA///6//v//f/9//j//P/4//3/9v/9//H//v/2//7/7v8AAPT//v/s/wAA8f///+3////u/wIA7v/+/+v/AwDw////6f8DAPL/AADr/wEA7/8CAO7/AQDw/wMA7v////T/AADw/wEA9P/9//P/AgD3//v/9P8BAPv//P/2/////f/8//r//f/+//v//v/9/wEA+f8AAPz/AwD4/wIA/P8FAPj/BAD9/wkA+f8DAP3/CwD7/wgA/f8JAPz/DgD//wcA/f8OAAEACwD9/wwAAgAMAP//CwACAA0AAAAIAAMADwADAAYAAwALAAQACgAEAAUAAwALAAQABAAFAAQAAQAGAAUAAAABAAQAAwD9//////8CAPv//v/+//7/9//+//v/+f/2//3/9v/2//b//P/z//T/9P/6//L/8v/w//f/8//z/+7/8//z//T/8P/y//D/8v/y//T/8f/v//L/9v/2//D/8v/3//r/8//1//n/+v/3//v//f/8//n//////wEA/P8DAAIAAwAAAAgABgAHAAUACgAJAAwADQANAAsADgAOABEAEAAQAA0AEwAUABIADQASABYAFAAMABIAFgASAA0AEQASABIADAANAA8AEQANAAoACwANAAsACAAHAAgABQAFAAQABAD+/wIA/P/+//r//P/1//n/9//4/+//9f/x//P/7f/w/+v/7//r/+3/5//r/+j/6v/l/+n/5P/n/+X/6P/i/+b/5//l/+P/6P/n/+X/5f/o/+r/6v/p/+j/7//t//D/7f/y//H/9//x//T/9//9//P/+f/9/wIA+v////7/BgADAAcAAAALAAgADAAHAA4ACgANAA4AFAALAA8AFAAWAAwAEwAVABUAEgAUABIAFgAXABUAEQAVABYAEwASABQAEwASABMAEAAQABAAEAAMAA8ADAALAAgADAAIAAgABQAIAAIABAADAAQA+////wAAAQD4//z/+f/7//f/+f/y//f/9f/2/+//9P/y//L/7//z//L/8P/u//H/8v/v//H/8P/w/+//8//x//P/8f/y//L/+f/x//X/8//7//T//P/2//z/9/8CAPn/AAD6/wMA/P8FAP3/BQD//wkAAQAIAAEACwAGAAsABAALAAgAEAAGAAsACgARAAkADQANAA8ACgAPAAwADAANAA4ACgAJAA8ACwAJAAgADQAHAAsAAwAIAAcACQAAAAgAAwAGAP//BgD+/wIA/v8EAPv//v/6/wIA9//7//b//P/2//v/8//1//T/+//y//L/8//1//H/8v/y//L/8v/x//L/8f/x/+7/8f/w//L/7//x//D/8//t//P/8f/3/+//9f/y//3/8P/3//T//v/1//z/9f////n//v/4/wUA+/8AAP7/BwD9/wYAAgAHAAIACwAEAAkABwAPAAcADgAKABIADAAQAAwAFgAQAA4ADwAaABAADwAUABgADwASABcAFAAQABIAFgATABIAEgAUABAAEwATABAACgAUABEADgAHABEACwAPAAYACQAIAA8AAwAFAAQADQACAAEA/f8JAP///v/5/wQA+//9//f//P/5//v/9f/6//f/9v/z//r/9v/y//H/9//2//H/8v/1//b/8f/0//P/9P/x//f/8v/0//H/+P/0//f/8P/6//f/+P/y//7/+P/9//T//v/8/wIA+P8AAP3/BAD9/wQA//8EAAEABwAEAAYAAwAHAAgADAAGAAYACwAOAAsACQAMAAwADwAOAA8ACgAQAA8AEQALABIADgARAAkAFQAMABAABgAVAAkADwAGABQABQAOAAUAEgADAAwAAQAOAAMACwD9/woA//8JAPv/BgD4/wUA/P8CAPP/AQD5//7/9f/8//T/+v/2//n/8v/3//X/9f/x//P/9f/z//H/8P/2//L/8//u//X/8f/1/+7/9//v//n/7//4//D/+//t//z/9P/9/+3//v/3/wAA8P8BAPj/AgD0/wMA+v8DAPj/BgD+/wUA/P8JAAAABQABAAsAAwAGAAQADQAHAAYABwAMAAkABwANAAkACAAIABIABgAJAAgAEwAEAAwABwAQAAQAEQACAA4ABgASAP//DgAFAA4AAQARAP//CwACABAA/f8LAP7/CwAAAAsA/P8JAP//BgD//wkA+/8DAAEABwD5/wEAAgADAPn/AQACAAAA/v8AAAAA/v8BAP7/AAD+/wMA/f8CAPz/BAD8/wUA/f8FAP3/BwD9/wcA/P8JAP3/CAD//w0A//8GAP//DgABAAsA//8KAAQADQACAAkAAwANAAYACwADAAwABwAKAAcACgAHAAoACQAIAAkACQAHAAUADAAKAAcAAQALAAoACgD//woABgAKAAAACQACAAkAAQAJAP//CQABAAgA/f8GAAAACAAAAAQA/f8IAAIAAQD9/wcAAQD//wEABwD///7/AwAFAP///f8EAAQAAAD8/wQAAQAFAP7/AgD//wYA/f8EAP7/BQD+/wYA/f8EAP3/BwD8/wUA/v8GAPz/BQD//wQA+/8FAAAABAD6/wMAAQADAPr/AQACAAEA/P8BAAEA///+//7/AAAAAAAA+///////AgD6/wAA/P8BAPr/AQD5/wEA+/8CAPf/AQD6/wIA9v8BAPn/AgD2/wMA+f8CAPb/AgD4/wMA9v8BAPn/BAD2/wEA+/8BAPj/AwD7/wAA+v8DAPz/AQD8/wMA/f////7/BQD/////AAACAAIAAwACAP//AgAEAAQAAAAEAAIABQACAAYAAQAHAAEABwACAAcAAAAJAAQABwD//wkAAgAJAAIACAD+/woAAwAHAAEABwD+/wgABQAFAPz/BQADAAQA//8EAAAAAQAAAAQAAAD//wAAAgD//wAAAAD+/wAA/v/+//v/AwD///v/+f8FAP3/+//5/wQA+//8//v/AgD5/////P8DAPf//v/+/wQA+P/9//z/BAD8/wAA+v8CAP//AAD7/wMA/v////7/BAD9/wEA/v8BAAEAAwD/////AAADAAIAAQAAAAEAAwAEAAQA//8BAAMABwACAAMAAAAHAAQABQAAAAQAAgAIAAMAAgD//woAAwABAAEACQD//wIABAAIAPz/AwADAAcA//8EAP//BAABAAQA/P8DAAIAAgD9/wMA/v8AAAAAAQD5////AQD+//v////9//7//P/9//v//v/9//r/+//8//v/+//8//j/+f/6//7/+P/3//f//v/5//j/9f/7//r/+//1//r/+v/8//b/+v/4//3/9//6//n//v/2//z/+v/8//X//f/6//7/9//7//j/AAD5//z/+f/+//n////8//7/+v////7//f/8/wIA/f/7//3/BQD///3//f8BAAIAAAD/////AQACAAMA//8CAAMAAgD+/wYAAwAAAP7/BwAEAAEA/v8GAAQAAQD9/wcABAAAAP3/CAACAAEA//8FAP//AwD//wIAAAAEAPz/AAAAAAQA/f/+//z/AwAAAPz/+v////7//f/7//z//P/9//v//P/8//r/+f/9//z/9v/5//z/+v/2//n/+//5//f/+v/4//b/9//8//r/9f/0//r/+//3//P/+f/8//f/9v/4//r/+P/4//j/+P/4//z/+f/6//X/+v/8//7/9//4//r/AAD7//v/9//+//3/AAD3//z//v8DAPn//f/9/wIA/P/+//v/AQD+/wAA/P8CAPz//////wMA/P8AAAAAAQD//wEA/P/9/wIABAD6//z/AwADAP7//P/+/wEAAQD+//7//P//////AAD7//7//f8BAP3//P/6/wIA///7//r/AQD///7/+f/8//7/AAD6//v///////r//v////v/+////wEA+//8//7/AwD9//r//f8FAP3/+//9/wYA/v////z/BAD+/wQA/P8CAP//BQD9/wMA/v8GAP7/BQD8/wUAAQAGAPv/BAABAAcA/P8EAP//BQD//wQA/P8EAAAABAD8/wQA//8CAP7/AwD9/wMA/v////3/AwD+//z//f8BAP3//f/9////+//8/////f/7//7//P/6//z//v/9//r/+v/8/wAA+//4//z////4//v//v/+//n/+//7/wAA/f/7//n/AAD///7//P/+//z/AQAAAP7//v8DAP////8BAAMA/v8AAAMABAABAAIABAADAAUABQAEAAMABwAHAAUABgAKAAQABQALAAwAAgAGAAwACwAGAAkABwAJAAsACgAEAAkACwAJAAQACwAKAAYABAAMAAkABgACAAkABwAHAAMABgAEAAMAAwAHAAAAAAADAAMA/v8AAAEA///+/wAA/f/9/////v/5//z/AAD6//j//P/8//j/+f/7//n/+P/6//n/+f/2//b/+v/8//b/9P/4//3/+P/1//j/+v/6//r/+v/4//r//v/8//n/+v/9/////v/7//v/AAACAP///f8CAAIAAQAAAAUAAwAEAAIABgAGAAcAAgAHAAkACQACAAcACwAMAAQABwALAAwABwALAAkACQAIAA4ACgALAAgACwAKAA0ACAAKAAgADQAJAAoABwAKAAgACQAHAAkABQAGAAcACAADAAQABgAHAAIABAADAAIAAwADAAAAAAADAAEA/v/9/wAA///+//z////8//v/+/////r/+//6//z/+P/9//n/+f/5//7/9//7//z/+//1/////f/6//f//v/7////+//7//r/AgD///z/+/8DAAAA/v8AAAQAAAAAAAIABAADAAMAAgAEAAgABgAAAAQACAAHAAUABgAGAAYACAAGAAcACAAIAAUACQAJAAoABgAHAAcACwAGAAgACAAJAAQACAAIAAcAAwAHAAUACQAEAAMABAAHAAEABQADAAIAAQAGAAIAAAD//wMAAAADAAAA/P///wMA/v/7/wAAAQD6//z/AgD///r/+/////3//f/9//z/+f8BAP//+v/6/wAA/P/+//3//P/6/wQAAAD6//n/AwAAAP//+v8AAAIAAgD8/wEAAQACAP//AgAAAAUAAwABAAAABgACAAMABAAGAAEABAAGAAcAAwACAAYACgAEAAIABQAKAAgAAwACAAkACwAEAAIACQAIAAMABgALAAUAAQAHAAoABgADAAcABgAFAAUABgAFAAUABgAFAAMAAwAGAAcAAgD//wUACAAEAP//AgAFAAgA///+/wMACAD/////AwAFAP//BQADAAEA/f8GAAIAAgD+/wMA/f8GAAIAAgD6/wQAAgAEAPv/AgAAAAQA/P8EAP//AQD+/wcA/f/+/wAABwD9/wEAAAADAP//BQAAAP//AQAHAP///v8EAAcA/v/+/wMABwACAP//AgAFAAQAAAAFAAUAAQABAAgABQADAAEABQAFAAcAAwAEAAMABwAGAAcAAgAGAAYACAAEAAcABQAGAAYACAAEAAMABgAKAAUAAQAFAAkABQABAAUABgAFAAIABAADAAUAAgADAAAABAADAAIA/v8FAAMAAAD7/wUAAgAAAPr/AwD//wEA+f8AAP3/AgD4/////f8AAPX/AAD///3/8v8AAAAA/v/x//7//v/+//T//v/7//7/9v/9//r////4//v/+v8AAPr//P/6/wAA+//8//z/AAD8//7//v8AAP7/AAD+/wAAAQABAAAAAAABAAMAAQACAAEAAgAFAAIAAQADAAkAAwAAAAUACgACAAIABQAHAAQABQAFAAUABQAFAAUABgAEAAQABQAEAAQABQAEAAAABQAFAAMA//8EAAIAAgD//wIA/v8EAAAA/v/8/wUA/v/8//z/AwD6//7//f////j//v/9////+P/7//r/AAD5//v/9//9//v//P/1//z/+//7//f//f/6//n/9//+//z/+v/4//z//f/8//n/+//9//3/+//9//3/+//9/wAA/f/6////AwD///r///8CAAAA/f///wEAAgACAP////8DAAEAAAACAAIAAAACAAMAAQABAAMAAgD//wIABAABAP//AwACAP//AQAFAAAA/v8CAAMA/////wAAAgD+//7//f8EAP7/+f/8/wUA/f/5//3/AQD9//z/+v/+//z//P/6//7/+v/7//3//f/4//r//P/9//n/+//9//z/+P/8//3/+v/5//3/+//6//3//f/7//3//f/6//3////+//r//f8AAAAA/P////3//v8BAAIA+//9/wIABgD9//7/AAAHAAAA/////wQAAQADAP//AgADAAMA/f8BAAQAAwD9/wIAAwABAP7/AgACAP///f8BAAMA///7//3/BAABAPr/+/8CAP7//P/6//3/+v8AAPz/+f/3/wAA+//5//f//P/6//z/9v/5//r/+//1//v/+f/4//T//P/2//b/9v/6//X/+P/2//n/9v/4//b/+P/2//f/9//6//b/9//4//r/+P/3//b/+P/5//n/+f/4//j/+f/6//v/+v/2//j//P/+//j/+P/6/wAA/P/5//j/AAD+//z/9//7/wAAAwD4//f///8EAPv//P/8/wAA/v8AAPz/AgAAAP3//P8EAAAA///9/wIA//8AAAAAAwD9////AQAEAP7///8AAAEA/v8AAAEA///8/wEAAgD9//z/AQD+//3//v8AAP7//f/8///////7//n//P8AAP3/+P/6/////P/4//r//v/7//j/+//8//r/+f/5//v/+//5//j/+//7//j/+P/7//n/+P/7//n/9//6//3/+P/2//n//f/5//b/+P/+//r/9v/4////+f/3//n//f/6//r/+f/6//n//f/6//v/+f/9//v/+//6/wEA+v/6//z/AgD5//3//f/+//r/AgD+//7/+f8BAP/////6/wMA//////z/BAD/////+/8DAAEAAQD8/wIAAAABAP7/AwD+/wEAAgAEAPv/AAAEAAMA/P8BAAIAAQAAAAIA//8BAAEAAAD//wQAAgD+//7/AwACAP///v/+/wMAAQD8//z/AwABAPv//f8CAAAA/v/+//3//v8BAP///P/+//7//v////7//f/+//7//P/+/wEA/P/9////AAD8//3///8BAPz//f/+/wMA/P/+////AgD8//////8EAPz////+/wIA//8CAPv//f8CAAYA+v/8/wEABwD9//7//f8FAAEA///7/wEAAQACAPz//v///wMA///8//z/AgABAP3/+/8AAP7//v///wAA+//+/wEA/v/8/////f/8////AQD6//v/AQD///v//f/+//z//f////z/+//+/////P/7//7/AAD7//3////9//v/AAD///r//P8BAP7//f/8////AAAAAPr///8DAAIA+v8AAAMAAQD8/wMAAQABAAAABAD//wEABAAEAP7/AwADAAUAAgAEAAAABAAEAAQAAgAGAAEABAAEAAcAAQAEAAQABgABAAYABAAFAAAAAwAFAAYAAAACAAMABQACAAMAAQACAAIAAgD//wQAAwD///7/AwADAP7//P8CAAMA/f/9/wIAAAD8////AgD9//7/AgD///v///8CAP7/+v8AAAMA///7/wAAAwD///r/AQAEAAAA+/8BAAMAAgD//wEA//8EAAMAAwD+/wUABAAEAAAABwAEAAQAAQAJAAQABQACAAcABgAGAAEACQAIAAcAAAAKAAkABwACAAkABwAJAAMACQAHAAgAAwAJAAcABgAEAAkABAAFAAYABwADAAUABAAHAAMAAwAEAAgAAgABAAMABgACAAMAAgADAAEABAABAAAAAgACAP//AAACAAAA/v///wEA///+//3/AAAAAP///P/+/wAA///8//7///////7/AAD8//7///8BAP7//v/8/wEAAQD///v/AQD//wAA//8CAP7/AQABAAIA/P8CAAQAAgD8/wIABQAEAP7/AwADAAQAAgADAAEABQAEAAMAAQAGAAQAAgADAAcAAwABAAMACAAEAAIAAQAEAAQABgABAAEAAgAFAAMABQAAAP//AwAHAP////8CAAQAAAACAAEAAAABAAIA/v8CAAIA/v/9/wUAAQD8//7/AwAAAAAA/f///wEAAwD+//3///8DAAEA///9/wMAAwAAAP//AwABAAAAAgAGAAAAAAAEAAYAAAACAAUABgACAAQABAAGAAQABQACAAcABwAFAAIABwAHAAgABQAFAAQACgAIAAUAAwAJAAgABwADAAcACAAHAAMACAAHAAYAAwAGAAUABwAEAAUAAwAFAAMABgAEAAMAAQAEAAYABAD//wEABAAFAAIA//8BAAQABAAAAP//AQADAAAA//8AAAQA/////wIAAwD9/wAAAAABAP//AQAAAAAA/f8BAAEAAwD9//7/AQAFAP3//f8BAAYA/////wAABAACAAEA/f8BAAUABAD+/wEABAAEAAEAAQAEAAQAAQACAAYAAwAAAAMACAACAAEABAAIAAEAAwADAAYAAQAFAAQABAABAAcABAAEAAAABgAEAAQAAQAGAAUABAAAAAYABQAEAP//BQAEAAQAAQAFAAEAAwADAAQAAAADAAQABAAAAAIABQAFAP//AAAGAAQAAQACAAIAAgAGAAIA//8DAAUAAQACAAIAAQABAAQAAgABAAAAAgAEAAMA//8BAAMAAgABAAMAAgD//wIABgABAP3/AwAFAAAA/v8FAAIAAAD//wQAAgACAP//AQABAAQA//8BAAAAAwD//wMAAAACAP//BAD+/wEAAAAEAP//AQD9/wUAAgAAAPv/BQACAP///v8FAP//AAABAAMA/f8BAAIAAwD9/wAAAwAEAP////8AAAUAAQD+////BQAEAP3///8GAAQA/f8AAAUAAgAAAAMAAQD//wIABAD/////AgADAAIAAQD//wAAAgAFAAEA/f8AAAUAAgD+/wEAAgAAAAAAAgABAAEAAAABAAAAAQD//wMAAQD///7/AwACAAAA//8CAAAAAgAAAAAA//8DAAEA///+/wQAAQD///3/BAAAAP3///8EAP3//v8CAAMA+////wMAAwA=",Ps=Zu,Af=$u,Ds=5,ef=7e-4,Es=.018,Bs=.012,Pn=.006,Ui=.985,Dn=.95,En=4,tf=90,rf=48,Fi=null,nf=8,af=2,Lt=new Map,Ut=new Map,oi=[],Br=0,Ms=.16;function Te(A,e,t,i){return{key:A,start:e-Ms,end:t-Ms,trim:i}}var sf={lift:Te("lift",.178,.325,2.65),micro:[Te("micro-a",.185,.205,2.9),Te("micro-b",.282,.322,2.8),Te("micro-c",.407,.44,2.75),Te("micro-d",.483,.565,2.65),Te("micro-e",.603,.698,2.55),Te("micro-f",.724,.92,2.45)],body:[Te("body-a",.94,1.126,.64),Te("body-b",1.352,1.446,.7),Te("body-c",1.558,1.708,.68)],accent:[Te("accent-a",1.222,1.292,.58),Te("accent-b",1.574,1.715,.62)],finish:Te("finish",1.73,1.795,.72)};function he(A,e,t){return Math.min(t,Math.max(e,A))}function Cs(A,e,t){const i=he((t-A)/(e-A),0,1);return i*i*(3-2*i)}function ot(A,e){return A+Math.random()*(e-A)}function of(A){const e=Array.from({length:A},(t,i)=>i);for(let t=e.length-1;t>0;t-=1){const i=Math.floor(Math.random()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}function xs(A){return 10**(A/20)}function zi(A){return 2**(ot(-A,A)/12)}function _s(){return he(-Math.log(Math.max(.001,1-Math.random())),.55,1.8)}function Ss(){return typeof performance>"u"?Date.now():performance.now()}function Ni(){if(Fi)return Fi;if(typeof window>"u")return null;const A=window.AudioContext??window.webkitAudioContext;if(!A)return null;try{Fi=new A({latencyHint:"interactive"})}catch{return null}return Fi}function li(){return new DOMException("Audio load was evicted.","AbortError")}function Bn(){for(let A=oi.length-1;A>=0;A-=1){const e=oi[A];e.load.invalidated&&(oi.splice(A,1),e.encoded=null,e.reject(li()))}for(;Br<af&&oi.length>0;){const A=oi.shift();if(!A)return;if(A.load.invalidated){A.encoded=null,A.reject(li());continue}const e=A.encoded;if(A.encoded=null,!e){A.reject(li());continue}Br+=1;let t;try{t=A.context.decodeAudioData(e)}catch(i){Br-=1,A.reject(i);continue}t.then(i=>{if(A.load.invalidated){A.reject(li());return}A.resolve(i)},i=>A.reject(i)).finally(()=>{Br-=1,Bn()})}}function lf(A,e,t){return t.invalidated?Promise.reject(li()):new Promise((i,r)=>{oi.push({context:A,encoded:e,load:t,resolve:i,reject:r}),Bn()})}function cf(A){A.invalidated||(A.invalidated=!0,A.settled||A.controller.abort(),Bn())}function hf(){for(;Ut.size>nf;){const A=Ut.keys().next().value;if(typeof A!="string")return;Ut.delete(A);const e=Lt.get(A);!e||e.pinned||e.references>0||(Lt.delete(A),cf(e.load))}}function ys(A,e){let t=Lt.get(A);if(!t){const n={controller:new AbortController,invalidated:!1,settled:!1},a=fetch(A,{signal:n.controller.signal}).then(l=>{if(!l.ok)throw new Error(`Peel audio request failed with ${l.status}.`);return l.arrayBuffer()}).then(l=>{if(n.invalidated)throw li();return lf(e,l,n)}).finally(()=>{n.settled=!0});t={promise:a,references:0,pinned:A===Ps||A===Af,load:n},Lt.set(A,t);const s=t;a.catch(()=>{Lt.get(A)===s&&(Lt.delete(A),Ut.delete(A))})}t.references+=1,Ut.delete(A);const i=t;let r=!1;return{src:A,promise:i.promise,release:()=>{r||(r=!0,Lt.get(A)===i&&(i.references=Math.max(0,i.references-1),!(i.references>0||i.pinned)&&(Ut.delete(A),Ut.set(A,!0),hf())))}}}function lt(A,e,t,i,r=1){return{key:A,start:e*t,end:e*i,trim:r}}function uf(A){return{lift:lt("lift",A,.02,.18,1.2),micro:[lt("micro-a",A,.12,.32,1.05),lt("micro-b",A,.28,.48,1),lt("micro-c",A,.44,.62,.95)],body:[lt("body-a",A,.32,.56,.9),lt("body-b",A,.52,.76,.86),lt("body-c",A,.7,.88,.82)],accent:[lt("accent",A,.58,.78,.82)],finish:lt("finish",A,.8,.98,.9)}}var ff=class{constructor(){this.enabled=!1,this.src="",this.volume=.7,this.useBuiltInProfile=!1,this.buffer=null,this.bufferLease=null,this.reappearBuffer=null,this.reappearBufferLease=null,this.profile=null,this.loadRevision=0,this.masterGain=null,this.compressor=null,this.activeVoices=new Set,this.gestureActive=!1,this.lastProgress=0,this.lastUpdateTime=0,this.smoothedVelocity=0,this.smoothedAcceleration=0,this.forwardTravel=0,this.backwardTravel=0,this.nextForwardSpacing=.006,this.nextBackwardSpacing=.025,this.liftArmed=!0,this.finishArmed=!0,this.fullyDetached=!1,this.lastAccentTime=-1/0,this.holdTimer=null,this.panWalk=0,this.lastSliceKey="",this.sliceBags={micro:[],body:[],accent:[]},this.destroyed=!1}configure(A){if(this.destroyed)return;const e=A.src.trim(),t=!!A.useBuiltInProfile,i=e!==this.src,r=t!==this.useBuiltInProfile;if(i&&(this.bufferLease?.release(),this.bufferLease=null),this.enabled=A.enabled&&!!e,this.src=e,this.volume=he(A.volume,0,1),this.useBuiltInProfile=t,this.masterGain&&this.masterGain.gain.setTargetAtTime(this.volume,this.masterGain.context.currentTime,.012),(i||r)&&(this.reset(0),this.buffer=null,this.profile=null,this.loadRevision+=1),!this.enabled){this.reset(this.lastProgress);return}this.buffer||this.preload(),this.reappearBuffer||this.preloadReappear()}unlock(){if(!this.enabled||this.destroyed)return;const A=Ni();A&&(A.state==="suspended"&&A.resume().catch(()=>{}),this.buffer||this.preload(),this.reappearBuffer||this.preloadReappear())}begin(A,e=Ss()){this.clearHoldTimer(),this.gestureActive=!0,this.lastProgress=he(A,0,1),this.lastUpdateTime=e,this.smoothedVelocity=0,this.smoothedAcceleration=0,this.forwardTravel=0,this.backwardTravel=0,this.nextForwardSpacing=ot(.004,.008),this.nextBackwardSpacing=ot(.018,.032),this.lastAccentTime=-1/0,this.panWalk=0,this.stopVoices(new Set(["texture","reattach"]),.012),this.lastProgress<=Pn&&(this.liftArmed=!0),this.lastProgress<Dn?(this.fullyDetached=!1,this.finishArmed=!0):this.lastProgress>=Ui&&(this.fullyDetached=!0,this.finishArmed=!1)}update(A,e=Ss(),t=0){const i=he(A,0,1);if(!this.gestureActive){this.begin(i,e);return}const r=this.lastProgress,n=Math.max((e-this.lastUpdateTime)/1e3,0),a=i-r;if(this.lastProgress=i,this.lastUpdateTime=e,i<=Pn&&(this.liftArmed=!0),i<Dn&&(this.fullyDetached=!1,this.finishArmed=!0),Math.abs(a)<ef){const f=Math.exp(-Math.min(n,.12)/.045);this.smoothedVelocity*=f,this.smoothedAcceleration*=f;return}this.armHoldSilence();const s=he(n||1/60,1/240,.25);n>.14&&(this.smoothedVelocity=0,this.smoothedAcceleration=0);const l=a/s,o=this.smoothedVelocity,c=1-Math.exp(-s/.045);this.smoothedVelocity+=(l-this.smoothedVelocity)*c;const u=(this.smoothedVelocity-o)/s,h=this.smoothedAcceleration,g=1-Math.exp(-s/.075);this.smoothedAcceleration+=(u-this.smoothedAcceleration)*g;const v=Math.abs(l)*.52+Math.abs(this.smoothedVelocity)*.48,P=he(Math.log1p(8*v)/Math.log(13),0,1);this.panWalk=he(this.panWalk+ot(-.018,.018),-.05,.05);const d=he(t*.08+this.panWalk,-.12,.12);if(this.fullyDetached&&i>=Dn){this.forwardTravel=0,this.backwardTravel=0,this.stopVoices(new Set(["texture","reattach"]),.01);return}if(a>0&&v>=Es){if(this.stopVoices(new Set(["reattach"]),.012),this.liftArmed&&r<=Bs&&i>=Bs&&(this.playLift(P,d),this.liftArmed=!1),this.finishArmed&&r<Ui&&i>=Ui){this.playFinish(P,d),this.finishArmed=!1,this.fullyDetached=!0,this.forwardTravel=0,this.backwardTravel=0;return}if(!this.fullyDetached){this.forwardTravel+=a;const f=he(v/(6+44*P**.75),.0032,.035);let C=0;for(;this.forwardTravel>=this.nextForwardSpacing&&C<2;){const x=Cs(.008,.035,i)*(1-.28*Cs(.86,.98,i));this.playTexture(P,x,d),this.forwardTravel-=this.nextForwardSpacing,this.nextForwardSpacing=f*_s(),C+=1}C===2&&this.forwardTravel>=this.nextForwardSpacing&&(this.forwardTravel=0)}if(h<=En&&this.smoothedAcceleration>En&&P>.2&&e-this.lastAccentTime>=tf&&i<Ui){const f=he((this.smoothedAcceleration-En)/8,0,1);this.playAccent(P,f,d),this.lastAccentTime=e}this.backwardTravel=0;return}if(a<0&&v>=Es){this.stopVoices(new Set(["texture"]),.014),this.backwardTravel+=-a;const f=he(v/(2+12*P**.8),.008,.07);let C=0;for(;this.backwardTravel>=this.nextBackwardSpacing&&C<1;)this.playReattach(P,d),this.backwardTravel-=this.nextBackwardSpacing,this.nextBackwardSpacing=f*_s(),C+=1;C&&this.backwardTravel>=this.nextBackwardSpacing&&(this.backwardTravel=0),this.forwardTravel=0}}end(A){this.clearHoldTimer(),this.gestureActive=!1,this.lastProgress=he(A,0,1),this.smoothedVelocity=0,this.smoothedAcceleration=0,this.forwardTravel=0,this.backwardTravel=0,this.stopVoices(new Set(["texture","reattach"]),.016)}playReappear(){if(!this.enabled||this.destroyed)return;const A=Ni(),e=this.reappearBuffer;if(!A||!e||this.activeVoices.size>=Ds){e||this.preloadReappear();return}const t=A.currentTime+.002,i=e.duration,r=A.createBufferSource(),n=A.createGain(),a=.82,s=Math.min(.004,i*.12),l=Math.min(.025,i*.2);r.buffer=e,n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(a,t+s),n.gain.setValueAtTime(a,Math.max(t+s,t+i-l)),n.gain.linearRampToValueAtTime(0,t+i),r.connect(n),n.connect(this.ensureOutput(A));const o=[r,n],c={source:r,gain:n,nodes:o,kind:"reappear"};this.activeVoices.add(c),r.addEventListener("ended",()=>{this.activeVoices.delete(c);for(const u of o)u.disconnect()},{once:!0}),r.start(t)}reset(A=0){this.clearHoldTimer(),this.gestureActive=!1,this.lastProgress=he(A,0,1),this.lastUpdateTime=0,this.smoothedVelocity=0,this.smoothedAcceleration=0,this.forwardTravel=0,this.backwardTravel=0,this.liftArmed=this.lastProgress<=Pn,this.fullyDetached=this.lastProgress>=Ui,this.finishArmed=!this.fullyDetached,this.lastAccentTime=-1/0,this.stopVoices(void 0,.012)}stop(){this.clearHoldTimer(),this.gestureActive=!1,this.stopVoices(void 0,.012)}destroy(){this.destroyed||(this.destroyed=!0,this.loadRevision+=1,this.stop(),this.masterGain?.disconnect(),this.compressor?.disconnect(),this.masterGain=null,this.compressor=null,this.buffer=null,this.bufferLease?.release(),this.bufferLease=null,this.reappearBuffer=null,this.reappearBufferLease?.release(),this.reappearBufferLease=null,this.src="",this.profile=null)}preload(){const A=Ni();if(!A||!this.enabled||!this.src||this.destroyed)return;(!this.bufferLease||this.bufferLease.src!==this.src)&&(this.bufferLease?.release(),this.bufferLease=ys(this.src,A));const e=this.bufferLease,t=++this.loadRevision;e.promise.then(i=>{this.destroyed||t!==this.loadRevision||(this.buffer=i,this.profile=this.useBuiltInProfile?sf:uf(i.duration),this.sliceBags={micro:[],body:[],accent:[]})}).catch(()=>{this.bufferLease===e&&(e.release(),this.bufferLease=null)})}preloadReappear(){const A=Ni();if(!A||!this.enabled||this.destroyed)return;this.reappearBufferLease??(this.reappearBufferLease=ys("data:audio/wav;base64,UklGRpD2AABXQVZFZm10IBAAAAABAAIAgLsAAADuAgAEABAAZGF0YWz2AAD///3//v///wAA+//+/wEAAAD7//7//v//////AAD8//3/AAABAPv//P8AAAIA+//8/wEAAgD7//z///8CAP7//P/9/wMA/v/8////AgD9//7///8AAP7/AAD9//7/AAACAP7//f/+/wIAAAD+//3///8BAAIA/f/9/wAAAgD+//7/AQAAAP7/AAAAAP7//v8CAAAA/P///wEAAQD+//3///8CAAIA/P/8/wMAAwD9//v/AgAEAP7//P8AAAIAAgD///3///8DAAIA/v///wIAAgAAAAEAAQAAAP//AwAEAP////8FAAIA//8BAAQAAQABAAIAAgACAAMAAAABAAMAAwABAAIAAgACAAEAAwACAAEAAQAEAAMA//8BAAYAAgD//wIAAwABAAEAAwACAAAAAQACAAIAAQACAAEAAAACAAQAAQD+/wEABAACAP3/AAAHAAIA+////wcABAD+//3/AQAFAAMA/v/+/wIAAgAAAAEAAQABAP7/AAAEAAEA/f8BAAMAAAD+/wMAAgD9////BQABAP7/AAADAP//AAACAAAA/v8CAAIAAAD//wIAAQAAAP//AgAAAP//AAAEAAEA/v///wMAAgD///3/AgAEAAEA/P8AAAQAAgD9////AwACAP7/AAACAAEAAAAAAAAAAQAAAP//AQABAP//AQAEAP7//f8DAAIA/P8AAAMAAAD+/wMAAAD+/wIAAwD9////AwADAP////8AAAMAAgAAAP//AwABAAAAAgADAP7///8DAAUA///+/wIABAABAAEA//8CAAQAAQD+/wMABQAAAP//BAACAAAAAgADAAEAAgACAAIAAQACAAMAAgAAAAEAAwADAAIAAQAAAAMABQAAAP7/BQAGAP3///8IAAQA+/8BAAgAAQD9/wQABQAAAP//AwAEAAAAAQABAAEAAwADAP//AQADAAEAAAADAAAA//8DAAQA/v8AAAQAAgD9/wIAAwABAP//AQABAAIAAQABAAAAAgABAAEAAQACAAEAAAAAAAQAAgD//wEAAwACAAEAAQABAAIAAwACAP//AQAEAAMAAAADAAIAAQABAAMAAgADAAIAAQAAAAMABAACAP//AQADAAMAAQACAAEAAAACAAUAAgD+/wAABgADAP7///8GAAUA/v/+/wYABgD///3/AwAGAAMA//8BAAMABAADAAEAAAADAAQAAwAAAAMABAADAAEABAAEAAMAAAAEAAYABAD+/wMACAAGAP7/AwAGAAYAAQACAAQABgACAAIABAAGAAEAAwAFAAYAAgACAAMABwAEAAIAAAAFAAYAAwABAAUABQAEAAEABAAEAAUAAgACAAQABwABAAIABgAGAP//AgAGAAYAAgABAAEABwAGAAAA//8IAAUAAAABAAQABAAEAAEAAgAEAAQAAAADAAMAAgADAAUAAAABAAYAAwD+/wMABAACAAEABAACAAAAAwAEAP//AAAGAAQA/f///wgABAD8/wEABQABAAEAAwABAP7/BAAGAP///f8EAAYAAAD+/wIAAgACAAMAAQD+/wIABAABAP7/AAADAAMA///+/wIABAD/////AgABAP7/AQACAAAA/v8BAAIAAAD+/wIAAQD+//7/AwACAP///v8CAAEA///+/wIAAQD///7/AgACAAAA/P8BAAMAAAD8/wIAAwD///3/AwABAP////8CAAEAAAD//wIAAgABAP7/AQACAAIA/////wAAAwABAAEA//8AAAEABAD/////AQAAAP//BAACAP3///8FAAEA/v8AAAIAAQABAAAAAAABAAIAAAD//wAAAgAAAAAAAAAAAAEAAQAAAP//AAABAP//AAACAAAA/v8AAAEAAQAAAP7/AQACAAAA/v8AAAIAAAD+////AgABAP3/AAADAP7//P8DAAMA/P/9/wQAAQD8/wAAAwD+//3/AgADAP3//f8CAAIA///+////AAABAAEA/v/9/wEAAwAAAPz///8CAAEA/f/9/wIAAwD+//z///8FAAEA+//9/wQAAgD9//3/AwAAAP3/AAACAP7/AAABAAAA/P8BAAIA/v/9/wIAAgD///7/AgAAAP//AQABAP7/AQADAAAA/f8CAAIAAQABAP////8EAAIA/v8BAAQAAAD//wQAAQD//wIAAwABAAEAAQACAAIAAgABAAMAAQABAAIAAwAAAAIAAwAEAAAAAAAEAAUA//8AAAMABQABAAEAAQADAAIAAQABAAQAAgACAAAAAgADAAIA/v8CAAQAAgD//wMAAgAAAP//BQACAP//AAACAAIAAwAAAP//AAAEAAEA/////wMAAgD/////BAABAP//AAADAP//AAACAAIA/v8BAAEAAQABAAIA//8AAAAAAgACAAAA/P8CAAMAAAD//wIAAAD//wAABAAAAP7///8DAAAAAAAAAAAA//8BAAIAAQD9/wAAAwAAAPv/AQAFAP7//P8CAAIA///+////AQABAP7///8BAAAA/v8AAAEA///+/wAAAwD///z/AAACAP////////7///8DAP///f///wEA//////7/AAAAAP///f8AAAAA/v/+/wIA/v/8/wAAAwD8//v/AQADAPz//f8AAAAA/v/////////+//7///8AAP3///8AAP7//f8AAAAA/v/9//7/AAABAP7//f///wEAAAD9//7/AAD+//7/AQAAAPv///8CAP7//P///wAA///+//7///8AAP///f/+/wAA///9//7/AAD////////9////AQD///z//v8AAP7/AAAAAPz//P8BAAIA/P/6/wAAAQD+//v//v8BAP///P/9////AAD8//z///8AAP3//P///wIA/P/6//7/AQD8//z//v////z//v/9/////f/8//z/AQD+//r/+v8BAP7//P/7/////v/9//r///////v/+f8AAP///P/6//3//v////n//P/+////+//8//z//v/+//z/+f/+/////v/8//3/+//9//7////6//v//f8AAPz/+//7/wAA/v/8//v////8//z//f////z//f/9/wAA/P/7//z/AQD///z//P8AAP7//v/8//7//v8AAP7//P/9/wIA///7//z/AgD///7//f///////v/9/wAA//////7///8AAAEA/f/9/wEAAAD8/wAAAQD///3/AQAAAP///f/+/wEAAQD8////AgD+//3/BAAAAPr///8EAP3//f8BAAAA/v//////AAABAP///f///wIAAQD8//7/AQAAAP////8AAAAAAAD+////AgAAAP3///8CAAAA/v8AAAAA//8AAAAA/////wEA///+/wEAAAD///////8BAAAA/v///wAAAAAAAAAA/v///wEA//////////8BAAAA/f///wIA/////wAAAAD//wEAAQD///7/AAABAAIA///9////BAACAP7//v8BAAEAAgD///3///8FAAMA/f/7/wMABgAAAPr/AQAEAAAA/v8DAAEA/P8BAAQA/v/+/wMAAQD9/wAAAgD/////AQD/////AQACAP///f8AAAMAAAD9/wAAAwAAAP7///8AAAIAAgD9//3/AwACAP3/AAACAP///v8CAAEA/////wEA//8CAAEA/f///wUAAAD9/wAABAD/////AQABAP//AQABAAEA//8AAAAAAgD/////AQABAP//AQAAAP////8EAP///P8BAAYA///7/wAABgD///z/AQAEAP7//v8CAAIA/v8AAAAA//8BAAMA/v/9/wEABAD///7///8BAAAAAgD///7/AQADAP7//v8AAAMAAAD///7/AwABAP7///8CAP//AAABAAAA/v8CAAAA/////wIA/////wAAAQAAAAAA/f8BAAMA///7/wIAAgD+//3/AgABAAAA/v//////AgAAAP///f8AAAIAAgD9//3/AQADAP7//v8BAAEA/v8BAAEAAAD//wEAAAD//wAAAQD//wAAAQAAAP//AgAAAP7/AAACAAAAAAAAAAAAAQABAP//AAACAAAA//8CAAEAAAAAAAAAAQABAAIA///+/wIABAD+//3/AgADAAAA//8AAAIAAQAAAP7/AQADAP///f8DAAMA/v/9/wQAAQD+/wAAAgD/////AgACAP3/AAADAAEA/v8AAAEAAQD//wAAAQACAP///v8CAAMA/f///wMAAAD+/wMAAgD9////AwABAP///f8BAAMAAQD8////AgABAP//AAD//wAA//8BAAEA/v/8/wMAAwD9//3/AwD///7//v8BAP//AAD+//7/AAACAPz//v8AAAAA/P8BAAAA/v/7/wEAAAD+//3////9/wAA//////v///8BAP//+v/+////AAD9//7//P/////////7////AAD+//r/AAAAAP7/+//+////AgD9//v///8DAPz//P8AAAEA/P8AAP///f/+/wIA///+//7/AQD+/wAA////////AAD//wIA///+////AwAAAP////8BAP//AQAAAAAA//8BAAIAAQD+/wAAAQACAP//AQABAP////8EAAIA/P/9/wYAAwD9//7/AwACAAAA/v8AAAEAAgAAAAAA//8BAAIAAQD+/wAAAgAAAP7/AgACAP///v8BAAEAAAAAAAEA/////wEAAQD//wAA/////wIAAQD//wAAAQD+/wAAAwAAAP3/AAABAAIAAAD/////AwABAP////8BAP//AQABAAAA//8DAAAAAQAAAAAA/v8CAAEAAgAAAAAA/v8FAAIA/f/+/wYAAQD+////BQAAAP//AAAFAP////8CAAMA/f8DAAIAAAD//wQAAAAAAAEAAgD+/wIAAQABAP//AgAAAAIAAAACAP//AAAAAAMAAAAAAP//AgAAAAIA//8AAAAAAwAAAP///v8DAAAAAAAAAAIA/v/+/wEABAD+//3///8EAAEA/v/+/wMAAQD/////AgD//wEAAQABAP//AQABAAIA/v///wMABQD9//7/AwAFAP7//P8CAAYAAAD9/wEAAwD//wIAAgD+////BQACAP7/AAADAAEAAgAAAAAAAgACAP//AgADAAEA//8DAAMAAAD//wIAAgADAAAAAQADAAMA//8BAAIAAgAAAAIAAQADAAEAAAABAAQA//8AAAQABAD9/wAAAwACAP//AgABAAAAAQAEAAAA/v///wIAAgACAP3//v8CAAQAAAD+////AQABAAIA///9//7/BAADAP7//f8BAAIAAgD+//7/AQADAP///v8BAAIAAAD//wAAAgAAAP//AgACAP3///8EAAIA/v///wEAAgACAAAA/v8BAAQAAAD9/wIABAD+//3/BAAEAP////8AAAEAAgACAP7///8DAAIA//8AAAAAAQACAAEA/f8CAAQA///+/wIAAgABAAAAAAABAAIA//8BAAQAAQD9/wIABAAAAPz/AgAFAAAA/f8DAAQA/v///wUAAQD9/wEABgD///3/AwAEAP3///8GAAIA+/8CAAUAAQD+/wEAAAACAAEA/////wUAAgD9//7/BgADAPv//P8HAAQA/f/9/wQAAQABAAEAAAD+/wIAAgACAP7/AAADAAMAAAAAAAAAAgAAAAIAAQABAP//AQADAAIA/f8AAAIAAwAAAAAAAAAAAAEAAwD///7/AQAEAAAA/f8BAAMAAAD//wAAAQABAAEA//8AAAMAAAD+/wEAAgD//wEAAgD/////AwABAAAAAQAAAP//BAADAPz//v8GAAQA/v/9/wMAAwD/////AgACAAAAAAADAAEA/////wEAAgABAAAAAAAAAAIAAAABAAEA/v8AAAMAAAD9/wEAAgD+////AgAAAP////8BAAAA//8BAP///f8BAAIA/v/9/wIAAQD+/wAAAQD9////AgAAAPz/AAACAAAA/v///wAAAAABAAAA/P8AAAMAAQD8//7/AgABAP//AAD9////AwADAPz//P8DAAMA/v/+/wAAAgABAP///v8BAAIA///9/wIAAgD+////AgAAAP//AQAAAAAAAgAAAP7/AAABAAEAAgD///z/BAAGAP3/+v8EAAUA/f/+/wMAAAD+/wEAAgD///7/AQABAP///v8AAAAA//8AAAEA/f/+/wEAAQD8//3/AgACAPz//f8CAAEA/P///wAA/v/8/wIAAQD8//z/AQAAAP7//f8AAP///v/+/wAA/f/8////AwD9//r//v8DAP//+//9/wEAAAD9//3/AAD///3//v8AAP///f/8////AAD+//3///8AAP7//f/+///////9//3///////7////+//z///8CAP//+//+/wEA/v/+/////f/+/wIAAAD7//7/AwAAAPz//f8BAAEA/v/+/wAAAQD///7///8CAAAA/f///wIAAQD/////AAD//wEAAQD///3/AQADAAEA/v///wAABAABAP3//v8FAAIA/f8AAAQAAAD+/wAAAwACAP///v8DAAMAAAD//wEAAQABAAAA/v8BAAUA///6/wQACAD8//n/BgAGAPr//P8GAAMA/f///wIAAQAAAP//AAAAAAAAAAABAP7//v8BAAIA///9////AgAAAP7//v8BAAAA//8BAP///v8BAAEA/v///wEA/////wEAAAD+/wAAAAAAAAAA/v/+/wIAAwD9//v/AgADAP3//f8CAAEA/v8AAAEA/v/+/wIAAAD9////BAABAP3///8CAAAAAAD//wEAAAD//wAAAwAAAP7/AQADAP//AAAAAAEAAAAAAAEAAwD/////AgADAP7/AAABAAEAAAACAAEAAQAAAAAAAQADAP////8BAAIAAAABAAEAAQAAAAEAAQAAAP//AgADAP///v8DAAIA/v8AAAIAAAAAAAIAAgD//wAAAgACAAAA/v8BAAQAAAD9/wIABQD///7/AwACAP7///8DAAEA//8BAAEAAAACAAEA/v8AAAMA//8AAAIA///+/wMAAQD//wAAAQAAAAIAAQD+//7/AwAEAP///P8DAAUA///8/wEAAwACAP///v8BAAUAAAD8/wAABQAAAP7/AgACAP7/AAACAAEA/v///wIAAwAAAP7/AQABAAAAAQD///7/AgAEAAAA/f///wIAAgD///3/AAACAAAA//8BAAEA/v///wEAAAAAAAAA/v/+/wMAAgD9//7/AgABAP7///8AAP//AAAAAAAAAAD+//7/AwABAPv//v8DAP7//v8BAP///P8BAAIA/f/8/wEAAQD9//3/AQD///3///8BAPz//v8AAP7//f8AAP///v/+/wAA/v///////v///wEA/P/9/wEAAwD8//v/AAAEAP///P/9/wMAAQD8//z/BAABAPz///8EAP///P8BAAMA/v8AAAIAAAD//wIAAgD///7/AgADAAEA//8AAAMAAgD+/wAABAACAP3/AQAGAAEA/v8BAAIAAQACAAEAAAACAAIA//8BAAMAAQD//wIAAwABAP//AQACAAIAAAABAAEAAgACAAEA//8CAAMAAQD+/wIAAwAAAP//AwABAAAAAQABAAAAAwABAP//AAAFAAAA/f8BAAUAAAD+/wEABQAAAP7///8EAAIA//8AAAIA//8CAAIA///9/wMAAwABAP//AQAAAAIAAAAAAAAAAgAAAAAAAAACAAAAAAD//wMAAAD//wEAAwD+//7/AQACAP//AAAAAAEAAAD//wAAAgD+//7/AQACAP/////+/wAAAwAAAPr///8FAAIA+v/+/wQAAgD8//7/AwABAPz/AQADAP///v8CAAIA/////wIAAAD//wIAAwD/////AwADAP7/AQADAAAA//8CAAUAAAD8/wIABgABAP3/AgAFAAAA//8EAAMA//8AAAMAAwAAAAEAAwACAAEAAgABAAAAAgAFAAAA//8EAAQAAQAAAAEAAgAFAAMA/v8CAAcAAwD+/wEABQAEAAEAAQACAAMAAgACAAIAAgAAAAQABQABAP//AwADAAAAAQAEAAEAAgACAAIAAAACAAMAAQD//wMAAgABAAAAAgACAAIAAAAAAAIAAwD//wAAAQACAAAAAQABAAEAAAABAAEAAQD//wAAAQADAAMA/v/9/wMABQD+//z/AwAEAP////8CAAIAAAD/////AgACAAAA//8AAAEAAgABAP///v8BAAEAAQABAP///v8CAAMA///9/wEAAgABAAAA/v///wIAAQD+////AQAAAP//AAAAAAAA//8AAAAA/v/+/wIAAgD8//3/BAACAPz//f8CAAEA/f///wIAAAD9/wAAAgD+//z/AQACAPz//v8DAAAA/P/+/wEAAAD9////AAAAAP////8AAP7//v8BAP///////////v8BAAAA/f/9/wIAAgD+//z/AAACAAAA+/8BAAQA/f/6/wQABAD8//v/AgABAAEAAAD9//3/BQACAPz//f8EAAEA///+/wEAAAAAAAAAAQD+/wEAAAAAAP7/AgAAAP3//v8FAP///P///wMA///////////+/wIAAAD+//3/AQAAAAAA/P///////////wAA/v///wAA///+/wEA///8//7/AgAAAP3//v8BAAEA/f/+/wEA///9////AgD+//v/AgADAPv/+/8DAAIA/P/9/wEA/////wAA/v/9/wAAAAD////////+////AAABAP3//P8AAAMA///7////AAD+////AAD+//3/AAABAP7//P8BAAMA/P/8/wIAAgD9//7//////wIAAAD7////BAAAAPz/AAABAP7/AAABAP7///8CAP///f8BAAIA/v///wEAAQAAAAEA/v///wIAAgD/////AAACAAEAAAD+/wEAAgABAP7/AAACAAMA/v///wIABAD/////AAADAAEAAQD+/wIAAwADAP3///8DAAUA/f///wIABAD//wEAAQACAP//AgABAAIA/v8CAAEAAgD//wMAAQAAAP//BAABAAAA/v8DAAEAAQD+/wAAAwACAPv/AQAEAAAA+/8CAAIA/v///wIA/f///wEAAAD9/wEAAgD///v/AQACAP7/+/8AAAIAAAD9/wAA/v/9/wAAAwD8//v/AgADAPv//v8AAP7//v8CAP///f/+/wEA//////3//v///wEA///+//z/AAABAP///P/+/wAAAQD+//3//f8CAAEA/P/7/wIAAgD9//z/AAAAAP7//v////7/AAD///3//v8AAAAA/v/+//3///8BAP7//P///wAAAAD9//3///////3///////7//f8AAP7//v////7/+////wEA///8//7///8BAP7//P/9/wEA///9//7/AAD+/////v////7/AAD+//3///8CAP3//P8AAAIA/v/+/wAAAAD+/wAA/v///wEAAAD9////AgACAPz//v8BAAEA///+/wAAAgD+////AQACAP7//f8CAAMA////////AAAAAAIA///+/wAAAwD///7/AgADAP3//v8CAAIA/v///wEAAQD+/wAAAAABAP7//////wEA//8AAP/////+/wAA//8AAP7//////wIA/f/9/wAAAgD8//3/AAABAP3////+/wAA/v8AAP7//v/9/wEA///+//z///8BAAIA+//7/wEABQD7//n/AAAEAP7//f/+/wAA//8BAP7//f/+/wIAAQD///z///8CAAEA/f8AAAIAAAD8/wEAAwD///3/AwADAP7//v8DAAIAAAD+/wAAAgADAP////8BAAMAAAD//wEAAgD/////AgADAP//AAAAAAAAAQABAP7///8BAAIAAAD/////AQAAAP7///8CAAAA/f///wMA/v/8/wEAAgD+//3/AAACAP///f///wIA///9/wEAAQD9////AQD/////AQD///7/AAABAP7//v8BAAEA/f/9/wEAAwD9//z/AgACAP3//v8BAP///f8BAAEA/v/+/wEAAgD+//z/AAACAAAA/P/+/wEAAQD+//7//////wAAAAD+////AQD///3/AAAAAP7//v8AAP///v8AAAAA/f/9/wAAAQD9//7/AAD+//3/AQAAAPz//f8BAAEA/f/7/wAAAgD///v//v8BAAAA/f/8/wAAAwD+//v///8CAP7//v/+////AQD///3///8CAP///P8AAAIAAAD8//3/AwADAPv/+/8EAAQA+//8/wQAAQD7/wAAAwD+//7/AQAAAP//AQD///7/AAACAAAA//8AAAEAAAD/////AgABAP7//v8EAAIA/f///wQAAAD+/wEAAgD+/wEAAQABAAAA//8AAAMA/////wEAAQD+/wMAAgD9//3/BQACAP7//v8EAAEA///+/wQAAQD+//7/BAABAAAA/v8CAAEAAgD//wEAAAABAP//AwD//wAAAAAEAAAAAAD+/wUAAgD///v/BgAFAP7//P8FAAEAAQABAAIA/f8EAAIAAAD//wMA//8CAAEAAAD//wQA///+/wEABQD+//7/AQADAP7///8AAAAA//8CAAAA/v/+/wIAAAD+//7/AgD///7///8AAP////////////8AAP///f/+/wAAAQD///z///8CAAAA+//+/wQA///7////AgAAAP7///////7/AAABAAAA/v///wEAAQD9//7/AgABAP3/AAACAAAAAAABAP7///8CAAIA//8AAAEAAQAAAAEA//8AAAEAAgAAAP//AAAEAAEA/f///wUAAQD+/wAAAgABAAEAAAAAAAEAAwAAAP7/AAADAAEA/v///wIAAQABAAAA/////wIAAQD+/wAAAQAAAAEAAAD//wAAAgAAAP7/AQABAP//AAAAAAEAAQD/////AQACAP////8BAAIAAAD+/wAABAACAP7///8CAAEAAQABAP//AAAEAAIAAAAAAAMAAgAAAAEAAwABAAAAAgADAAEAAgADAAAA//8EAAUAAAD+/wMABQABAAAAAgACAAIAAgACAAEAAAABAAMAAgD//wIAAwABAP7/AAACAAIA/v8AAAIAAgD+/wAAAQAAAP//AQAAAAEAAAABAP//AAAAAAEAAAABAP7/AAACAAEA/f8BAAEA/////wQA///8/wEABAD//wAAAAAAAAAAAgAAAAEAAQD/////BQADAP3//f8EAAQA///+/wMAAwABAP//AQADAAIA/v8BAAQAAQD+/wMABAD///7/BAADAAAAAAADAAAAAAABAAMAAAD//wEABQAAAP3/AgAGAP///f8BAAQAAQAAAP7/AgACAAAA//8DAAEA/v8AAAUAAQD9////BQABAP7/AAABAAEAAwD///7/AQAEAP///v8BAAIA/////wIAAgD9/wAABAAAAP3/AQAEAAAA/v8AAAMAAQD+/wAAAwAAAAAAAQAAAAEAAQD+////BAABAPv/AQAFAP///P8DAAIA/v///wMAAAD//wAAAgAAAP////8BAAAA/////wEAAAAAAP////8AAAAA//8AAP///////wAA//8BAP////8BAAAA/f8AAAEAAQD+//7///8DAAEA/v/+/wAAAgACAPz//f8EAAQA+//+/wUAAwD9////AQACAAEAAQD//wIAAgACAAEAAgD//wEABAADAP//AgADAAQAAQACAAIABAABAAIAAwAEAAAABAAFAAQA//8DAAYABQD+/wMABgAGAAEAAgACAAgABQABAAEACAADAAIABQAGAAAABgAGAAMAAQAHAAQAAwADAAUAAwAGAAMAAgADAAgABAABAAEABwAFAAEAAQAIAAUAAAACAAYAAgACAAMABQACAAMABAAEAAIAAgADAAUAAQACAAQAAwABAAMABAADAAIAAwACAAMAAwADAAMAAgAAAAQABQABAAAABQADAAIAAwAFAAAAAAAEAAYAAQAAAAMABQAAAAQABQD+//7/CAAGAP7///8FAAIAAgAEAAEA//8DAAMAAQAAAAIAAgACAAEAAAACAAMAAQD+/wAAAwADAAAA/v8BAAMAAQABAP//AAABAAIA//8AAAIAAQD9/wEAAwAAAP3/AgACAP///v8CAAEA///+/wEAAgABAP7///8AAAMAAQD9//z/AgAEAAEA/P/9/wMABgD8//v/AwAFAPv//P8EAAQA/f8AAAAAAAAAAAIA/v/+/wMAAgD6/wEABgAAAPn/AgAFAP///P8BAAAAAgABAP///v8DAAEA/v///wMA/////wIAAwD9////AgACAP7/AAACAAEA/v8BAAEAAAD//wEAAQABAAEA/v///wQA///+/wEAAQD+/wEAAgD+//3/AgAAAAAA////////AQAAAP///f8AAAEAAAD9/wAA/////wAAAAD8/wEAAAD9//3/AgD+//7/AAD+//v/AgAAAPz/+/8BAP///v/9////+//+///////8//7//v////z//f/9/wEA/f/7//3/AgD9//r//v8CAPv//f/+/////P/+//3//v/8/////f/+//3//v/7///////8//n/AwD9//n/+/8DAPv/+//9//7//P8AAPr//f/9//7/+v/+//3//v/7//7/+/////z//f/6/////v/9//n////+//7/+v/+//3//v/8//7//f8AAPv//P/+/wEA/P/7//3/AQD///7/+v/+/wAA///8//3///8AAP7//f/8/wEAAAD8//z/AAAAAP3//f8AAAAA/v/9////AgD+//v///8DAAEA/P/8/wIAAQD///7/AAAAAAAA//8BAP/////+/wEAAQD/////AQD//wAAAAABAP7/AAAAAAEAAAAAAP7/AgACAAAA/P8BAAIAAwD+//7/AAAEAAAA/v///wMA/v///wIAAgD9/wAAAAACAP//AAD//wEAAAACAP//AAD//wQAAAD+////BAAAAAEA//8BAAAAAwD//wAAAQADAP3/AgACAAEA/f8CAAIAAgD9/wEAAgADAPz///8DAAUA/P/+/wIABQD9////AQADAP7/AAD//wIAAAABAP7/AQAAAAIA/v8AAP//AAD//wIA//8AAP//AQD+////AAABAP3/AQACAP7//P8EAAEA+//+/wQA///+/wIAAAD8/wEAAgABAP3//v8BAAQAAAD8//7/AwABAP//AAABAP//AAACAAAA/P/+/wMAAgD+////AQABAP//AAD/////AAAAAAEAAQD+/wAAAgD///3/AgAAAP7/AQACAP////8AAAAAAQABAPz//v8DAAIA/f/+/wIAAQD+/wAAAQD///3/AgACAP3//v8CAAEA/f///wEAAAD+////AAABAP7//f8AAAIA/v/+/////////wIA///8//7/AwAAAP3//f8BAAAA///9/wAAAAAAAPz///8CAAEA/P/+/wAAAAD//wEA/v/+////AgD///7//f8AAAEAAQD+//7//v8BAAAA///9/wEAAAD+//7/AQAAAP///f///wAAAQD8//7/AAAAAP3//v8AAAAA/f////7/AAD///7//v8AAP7//f/+/wIA/f/8/wAAAgD9//z/AAABAPv//f8BAAEA+//8/wEAAQD8//3//v/////////8//7/AQD+//v/AAAAAPz//f8CAP//+//9/wIAAAD9//3///8CAAAA+////wQA///6/wIABAD8//z/BAAAAP3/AAADAP///////wEAAgABAPz/AAADAAEA/v8BAAEAAQABAAAA//8CAAAA//8BAAIA/v8BAAQA///8/wQABAD9//7/AwABAP7/AQACAP7/AAADAAAA/f8BAAMA/////wEAAAAAAAEA///+/wIABAD9//3/AwADAP3//f8BAAMAAAD9////BAAAAPv/AAAEAP//+/8AAAMAAAD+//7/AAABAP///v/+/wAAAgAAAPz//v8EAAIA+//8/wIAAwD+//z/AAABAAAA/////////v8BAAEA/v/9////AQAAAP3///8AAP////8BAP///P///wEA//////////////////8BAAAA/P///wMAAAD9//7/AAABAAAA//8AAAEA/v/9/wIAAgD+//3/AQAEAAAA/v8AAAAA//8BAAMAAAD8/wAABQADAPv//f8FAAQA/P///wQAAgD9////AgACAP7//v8DAAQA/f/9/wIABAD+//3/AQAEAAAA/v///wMAAQAAAP//AgABAP//AAACAP7/AQADAAAA/f8CAAMA///+/wIAAAAAAAEAAgD+/wAAAgABAP//AgAAAAAAAAABAAEAAgD+//7/AwAEAPz//v8DAAIA/v8AAAAAAAABAAIA/////wAAAwAAAAAA/v8BAAIAAQD//wEAAAABAAEAAQD9/wIAAgD/////AwD//wAAAgADAP3/AAABAAMAAQABAP//AwABAAIA//8DAAIAAAD//wUAAwAAAP//BQAAAAAAAgAFAAAA//8AAAUAAQABAAIAAgD+/wQABAABAP7/AwABAAIABAADAP3/AQADAAMAAAABAAEAAgABAAEAAQABAP//AgADAAAA//8DAAIA/v///wQAAwAAAP7/AQAEAAMA/f///wMAAwABAAAA//8AAAQAAwD8//7/BAAFAP///v8CAAMAAAABAAAAAgACAAEAAAADAAEAAQABAAIAAAACAAMAAQAAAAIAAgABAAAAAgACAP//AQADAAEAAAABAAEAAgADAAAA//8EAAMA/f///wYAAgD9/wAABQACAP//AAACAAEAAgAAAAAAAQADAAAAAAACAAIA//8CAAIA//8AAAQAAgD//wAAAwABAAEA//8AAAMAAQD//wMAAgD+////BAABAP3/AAAEAAIA/v/+/wMAAgD+//7/AgAAAAAAAQABAP3/AAADAAAA/P8BAAIAAAD9/wIAAgD///7/AwABAP///f8DAAEA/////wIAAAACAAAAAQD+/wEAAgACAP7/AgABAAEA//8CAAAAAgABAAAAAAAGAP///f8CAAUA/v///wQABAD8/wIAAwAAAP//BAAAAP7/AgAFAP7/AAAAAAIAAQABAP//AgAAAP//AgADAPz/AQADAAAA/P8DAAMA/f/9/wQAAQD+//7/AwABAP7//v8BAAAAAAAAAAEA/v/+/wIAAwD9//3/AQACAP//AAAAAP7/AAACAP////8AAAAAAAABAAAA/v8BAAEA//8BAAIA//8AAAIAAAD+/wIAAgD+//7/BQAEAPz//P8GAAUA/P/8/wUAAwD+/wAAAwD//wAAAwADAP3/AAAEAAIA/f8BAAMAAQD9/wIAAwAAAP7/AwACAP///v8BAAAAAQAAAP///v8DAAEA///+/wEAAAAAAP7/AAD//wAA//8AAP7/AAABAAAA+////wIAAQD9//7//f8BAAMA///5/wAABAD///z/AAD///3/AAADAPz//P8CAAEA/f///wAA/v/+/wIA///+////AAD//wAA//8AAP////8AAAIA///9/wAAAwD+//3/AQABAP7///8BAAAA//8BAP7//v8CAAEA/P/+/wMAAgD8//7/AwABAPv//v8DAP///P8AAAEA//////7//v8BAAAA/f/+////AQAAAP3//P8BAAIA/v/9/wAA//////7/AQD+//z/AAAEAP//+//9/wIAAQD///7/AAD/////AgABAPz//v8DAAIAAAD/////AQADAAEA/f///wQAAgAAAP//AAACAAIAAQAAAP//AAADAAQA/////wIAAgD//wEAAgABAAAAAAACAAMAAAD+/wIAAgD+////BAAAAP3/AQADAP7/AAAAAP//AAABAP3///8EAAAA+v8CAAQA/f/8/wMAAQD8//7/BAD///v/AAAEAP7//v8BAAAA/f8BAAAA/f/+/wIAAAD+//3/AgACAP3/+/8CAAMA/f/8/wMAAgD9////AwAAAP3/AAADAP7//v8BAAIAAAD/////AgABAP///f8BAAMAAQD8////BQADAP3///8BAAAAAgADAP3//v8FAAMA/P8BAAUA/v/8/wYABQD7//v/BgAGAP3/+/8CAAMAAQD+////AAADAAAA/f8AAAMA///+/wAAAgAAAAAA/////wAAAAD//wEAAAD+////AwAAAPz///8DAAAA/v8AAAEAAQAAAP7/AAADAAIA/v/+/wIAAwAAAP//AQABAAAAAQABAAAAAgAAAP//AgACAP//AAABAAEAAQABAAAAAgAAAP//AwABAP7/AQACAAAAAAABAP//AQACAP///v8BAAMA///9////AQABAAAA/v/+/wEAAwD///3///8BAAIA///8/wAAAQAAAAAAAAD9/wAABQD///j/AgAFAP3/+/8DAAIA/v/+/wAAAAACAP7//f8BAAMA/v/+/wIAAAD8/wIABAD9//v/AgAEAP///P8BAAEA/////wEAAAD+/wEAAgD/////AAABAAAA//8AAAEAAAAAAAAA///+/wIAAgD9//z/AgADAP//+v///wQAAgD6//z/AwACAPr//v8DAP//+/8BAAIA/v/6/wAAAgD+//n///8BAP7/+/8CAP7/+//+/wAA/P/9//7/AAD9//3//f8AAP//+//7/wIAAQD8//n/AAACAPz/+v8AAAEA/f/8/wAA///9//7/AAD+//z/AAACAP7//P///wEA///+//7///8BAAAA/f/+/wIAAgD9//v/AgAEAP7/+/8AAAUAAQD6////BQAAAPr///8FAAAA/P///wIAAQD+//3///8BAAAA/////wAA/////////v/+/wIAAAD7//7/AgD///3//f///wAAAAD9//7/AAD///3//v/9/wAAAQD8//r/AgADAPz/+f8AAAIA///7//7///8AAP///v/9/wAA///+////AgD8//z/AgABAPv///8BAAAA/f8AAAEAAAD9//7/AgACAPz///8CAAEA/f8AAAAAAAABAAIA/v///wAAAgAAAP///v8CAAEAAQD///////8CAAAA/v///wIAAAAAAP7///8CAAIA+////wQAAQD7/wEAAgD+//7/BAD///z/AAADAP///f///wAAAAD///7/AAD/////////////AAD+//7/AQAAAPz/AAABAPz//v8DAP7/+/8AAAMA/v/9////AAAAAP///f/+/wEAAQD9////AQAAAP3/AAABAP///v8BAP////8AAAIA/////wAAAQD//wEAAAAAAP//AgABAAAA//8CAAEAAAD//wEAAQABAAAAAQAAAAEAAgAAAP7/AQADAAAA/v8BAAIAAgD//wAAAgAAAAAAAwABAP7/AQAEAP///v8CAAIA//8AAAIAAQAAAAEAAQAAAP//AgACAP//AAACAAAAAAAAAAIAAAD//wAABAACAP3//v8FAAIA/v/9/wIABAABAP7/AQACAAIA//8AAAAAAgAAAAAAAgADAP////8AAAIAAQAAAP7/AQADAAMA///+////BgAEAPv//P8GAAUA/v/9/wMAAgACAAEAAAD//wMAAgAAAAAAAwABAAEAAQABAAEAAgAAAP//AwADAP////8CAAIAAAAAAAEAAQABAAEAAQABAAAAAAADAAIA/////wMAAwAAAP//AgACAAAA//8DAAIAAAAAAAIAAgABAAAAAQAAAAIAAgAAAAAABAADAP3//v8GAAUA/f/9/wUABAD/////AgADAAEA//8BAAMAAgD/////AwADAAAA//8CAAQAAAD+/wEAAwAAAP//AAACAAIAAAD+/wEABAAAAPz/AQAEAP///v8DAAEA//8AAAEAAQACAP///v8BAAMA//8AAAEAAgD/////AAADAAEA/f/+/wQAAgD+//3/AQADAAEA/P///wQAAwD7//z/AgAEAP7/+/8AAAUA///8/wAAAwD+//3///8BAP/////+/wAA////////AQD8//7/AQABAPz//v8AAP///v8BAP3//v8AAAAA/P8BAAAA/f/8/wEAAAD+//z/AAAAAP///v8BAPz//v8CAAAA+/8AAP///f///wQA/P/7/wAAAwD8//3///8BAPz///8AAP///P/+////AgD9//z//v8EAP3/+////wMA/v/9//7/AQD+/wAA//////z/AQACAAAA+/8AAAEAAQAAAP7//P8DAAIA///9/wEA//8BAAEAAAD+/wAAAAADAAEA/P/+/wUAAQD+/wAAAwAAAP7/AQACAAAA/////wIAAgAAAAAAAAAAAAAAAgABAAAAAAACAAIAAQD9/wEABAABAP7/AwADAAEA//8CAAEAAwAAAAIAAwADAP//AQACAAUA/////wQABQD+/wEABAADAP7/AwADAAIAAAADAAEAAgACAAMAAAABAAIABQD/////AwAFAP7/AAAEAAMA//8DAAIAAAD//wMAAQABAAEAAwAAAAEAAgADAP7/AQADAAIA//8BAAIAAgD//wEAAgADAP//AgACAAIA//8BAAIABAD//wAAAwAFAP7//v8DAAUA//8AAAAAAwADAAIA/v8AAAIABAACAAAA/v8EAAMAAQABAAMA//8CAAUAAgD9/wEABQAEAP7/AQAEAAIA//8DAAMA/v///wYAAwD+////BAADAAEAAAABAAEAAwABAAEAAQACAAEAAgABAAEAAQACAAAAAQACAAEA//8AAAIAAgD//wAAAQACAAAA//8AAAIAAQD///7/AgADAP///f8BAAMAAAD8/wAABAABAPz/AAAEAAAA/f8AAAEAAAD+/wAAAwABAP3///8DAAEA/f///wEAAQAAAP////8CAAEA/v///wIAAAD+/wEAAQD+/wEAAgD+//3/AgADAP7//f8BAAMAAQD9//7/AQABAAAA/////wAAAQAAAAAA/v///wAAAAD//wAAAAD/////AQD///////8AAAAAAAD//wAA/v/+/wAAAwD///3///8CAAEAAAD9//7/AAADAAEA/f/+/wIA//8BAAIAAAD8/wAABAABAP3///8BAAMAAAD//wEAAAD//wMAAQD9////BQAAAP3/AQADAP///v8BAAMA//8AAAIAAQD//wIAAQD+////BAABAP//AQADAP//AQABAAEA//8BAAEAAgAAAAAAAQADAP//AAAAAAEAAQADAP7///8EAAMA/P8BAAMAAAD+/wQAAAD//wMAAwD7/wEABAD///7/AwAAAAAAAgABAP3/AgABAP7/AAADAP7//v8DAAIA/f///wIAAQD//wEA//8AAAEAAAAAAAAA//8BAAIA///+/wMAAgD+////AgABAP7/AAACAAIA/v8AAAMAAQD+////AgACAP7/AAABAAEAAAAAAP//AQACAP///v8CAAEA/////wAA//8CAAEA/f///wMAAAD9////AgD/////AQAAAP7///8CAP///P8AAAIA/v/9/wEAAgD+//7//v8AAAEA///9////////////AQD///3///8CAAAA/f/9/wEAAAD+////AQAAAP7//v8BAAAA///+////AQAAAP7/AAACAP///f8CAAMA/v/9/wEAAwAAAP7/AAADAAAA/f8BAAMA/v/+/wIAAwD/////AAABAAEA///+/wMAAQD9/wAABQD///3/AgADAP3/AQADAP7//f8FAAMA/P/9/wUAAgD9//7/AwACAAAA/v8BAAEAAAD//wAAAAAAAAAAAQD/////AQACAP3//f8DAAQA/f/8/wEAAQD//wAA/////wEAAAD+/wAAAAD9////BAD///v/AAAEAP//+////wMAAAD+//7/AQABAAAA/f8AAAIAAAD9/wIAAQD+////AgAAAAAA//////7/BAACAP3//P8CAAMAAAD8/wAAAQAAAP7/AQAAAP7///8CAAAA/v///wIA/v/9/wEAAwD+//3/AQABAP7/AAAAAP7///8BAAAA/v///wAAAAD///7///8AAAEA///8/wAAAwAAAP3///8BAP////8AAP////8BAAAA/v8BAAIA/v/+/wEAAQD///////8AAAAAAQABAP///f8AAAMAAAD+/wAAAAD//wEAAgD+//7/AQABAAAA////////AQABAP7///8BAAEA///9/wEAAgD9//7/AgABAP3//v8BAAEAAAD+//7/AQAAAP7///////7/AQAAAP////8BAAAA/////wAA//8AAAAAAAD+/wEAAQD///7/AgD//wAAAQD///7/AgABAP7//v8BAAEAAQD+//7/AgACAP7///8CAAEA//8AAAAAAQABAP7/AAADAAAA/f8CAAMA/v/9/wMAAgD///7/AQABAAEA/////wAAAwAAAP3/AAAFAAAA/P///wQAAAD//wAAAQAAAAEA/////wAAAgD+////AwABAP3/AAACAAAA/f8AAAEAAQD/////AQACAP3//v8CAAMA/f/8/wEABQD///v//f8FAAMA/P/6/wMABQD+//r/AQADAAAA//8AAP7///8CAAIA/P/+/wIAAQD//wAA////////AgAAAP7///8BAAAA/v8AAAMA/P/9/wQAAgD6////BgD///n/AQAEAP7//P8BAAIA///+/wAAAAD///7/AQAAAP7///8BAP///v8AAAEA/v8AAP////8AAAAA/v8AAP///////wEA/f///wIAAQD7//7/AgACAP3//f/+/wQAAQD8//z/AwABAP7//f8AAAAAAAD9/wAAAAD///3/AgAAAP3//f8AAAAAAQD9//z/AAAEAP7//P///wIA///+//3/AAAAAP///v///wAAAgD9//z///8CAP/////+////AAABAP3///8AAP////8BAP///v///wIA///+////AQAAAP///P///wIAAQD8//7/AgABAP3//////wAA///+////AQD///7/AAABAP///v///wEA/v/8/wAAAgD+//7/AQD///3///8BAP7//P/+/wIAAAD7//7/BAD+//r/AAADAPz//P8BAAAA/f////7///8BAP7//P8AAAAA///9////AAAAAP3///8BAP//+/8AAAEA/v/9/wEAAAAAAP3//v8BAAAA+////wMAAAD6/wEAAgD+//3/AgAAAP7///8DAP7//v8BAAIA/P8AAAMAAQD7////AwADAP7//v///wQAAQD///7/AgACAAAA/f8CAAMAAQD9/wEAAwAAAP3/AwADAP///v8CAAMAAQD9/wAAAgADAP////8CAAIA//8AAAEAAgD//wAAAQACAAEA/f/+/wQAAwD+//3/AwACAAAA//8AAAAAAQD//wAAAQAAAP//AQAAAP//AAACAP7//f8CAAQA/P/9/wQABAD7//3/BAADAPz//P8BAAUAAQD7//7/BAABAP7//v8AAAEAAQAAAP////8AAAIAAgD+//3/AgAEAP///P8BAAQAAQD+/wAAAAACAAEA/v8AAAMAAAD//wIAAgD//wAAAgABAAAAAQAAAAEAAQAAAAAAAgABAAAAAAABAAEAAAAAAAIAAAD+/wAABAACAP3///8DAAIA//8AAAIAAQAAAAAAAQACAAEAAAAAAAIAAwABAP//AQADAAIAAAD//wIABQAAAP//AwAEAAAAAQADAAEAAAADAAIAAgACAAEAAAAEAAQAAAD+/wQABgABAP3/BQAFAAAA//8FAAMAAQABAAQAAgADAAEAAgABAAUAAwAAAAAABQACAAAAAgAFAP//AAAEAAUA/////wEABQACAAAAAAAEAAMAAQD//wIAAgACAAEAAgABAAIAAQABAAEAAQABAAEAAQABAAEAAgABAAAAAAACAAEA//8AAAIAAQD//wEAAwAAAP3/AQAFAP7//P8CAAUA///+/wEAAwAAAP//AAACAAAAAAAAAAEAAQABAP////8CAAIA/v///wIAAwD+//7/AgABAP//AgABAP7///8EAAIA/P/+/wUAAwD7//7/BQABAPz/AQADAAAA//8BAP//AAAAAAEAAAAAAP7/AgABAP///P8DAAIA///8/wAAAgADAP3//f///wYAAAD8//z/AgACAAEA/P///wEAAwD9//7/AQACAP3/AAABAAEA/f8BAAAAAAD//wIA/////wIAAwD8////BAADAPz/AAACAAAA//8CAP7///8DAAMA/f///wIA///9/wMAAQD9//3/BAACAP7//P8AAAIAAAD9/wAAAQD/////AgD9//7/AAAAAP7/AAD///////8AAP7/AAD///7///8BAP////////7//v8DAAEA+//9/wQAAgD8//7/AgD+//7/AQABAP3///8BAP7///8CAP7//f8BAAIA/v///wEA/////wAA//8AAAEA///+/wAAAQAAAP///////wAAAQD///3/AAACAAAA/f/+/wMAAgD8//3/AwADAPv//v8EAAEA/P/+/wMAAgD9//7/AgABAP7/AAABAP////8CAAAA/f8AAAMA///9/wAAAgD+////AgD///7/AQAAAP///v8AAAAA/v///wIA///9/wEAAQD+////AgD///3/AQABAP////8AAAAA//8CAAEA/f///wIAAQAAAP////8AAAMAAQD+/wEAAgD//wEAAgAAAP//AwABAAAAAgACAAEAAgD//wAABAADAP7/AAACAAQAAgD+//3/BQAEAP3///8EAAAAAAABAAEA/v8CAAIAAgD+/wAABAAEAPv///8FAAQA/P///wEABAADAP3/+v8FAAYA/f/7/wUAAgD+////AwAAAAEA/////wEABAD+//7/AgACAP7/AQACAP///f8CAAIAAAD//wAAAQACAP////8BAAIAAAAAAAEAAQAAAAAAAAACAAEAAAABAAMAAgAAAP//AQACAAIAAAACAAEAAAACAAUAAAD8/wIABwD///3/BAAGAP3//v8EAAQA/v8BAAMAAQAAAAQAAgD/////BAADAAIA//8AAAQABAD+//7/BQAGAP7//v8EAAMA//8BAAQAAQD+/wIABQD///7/AgACAAEAAwD///7/AwAEAP7//v8DAAIA//8AAAAAAgABAAAA//8AAAEAAAD//wEAAAD//wAAAgAAAP7/AAACAP7//v8BAAIA/v/+/wEAAQD///7///8DAAAA+/8AAAQA///9/wAAAQD+////AQAAAP///////wEAAAD///7/AAABAAAA/f/+/wIAAgD7//7/AwAAAPz/AQAAAP3///8BAP3/AAABAPz/+/8DAAIA/f/8//////8BAP7//f/+/wAA/f8AAAAA/P/6/wEAAwD///n//v8BAAAA/P/9//7/AAD+//7//v////3///////7//P8AAP/////+/wAA/f/9////AgD9//3//v8AAP//AgD9//v//v8EAP7//v////7//f8FAAEA+P/8/wkAAAD3//3/BwD///z///8CAP7//////wAA/v8BAAAA/v/+/wMAAAD+//3/AQABAAAA/v8AAAAA/////wIA/v/+/wEAAAD9/wIAAAD9//7/AQD/////AAD///7/AAD//wAA/v/9/wAAAgD+//3/AAAAAP//AAD///3///8BAAAA/v/9/wAAAQD///////8AAP7/AAABAP///f8BAAIAAAD8/wIAAwD+//z/BAADAP///P8DAAIAAAD+/wEAAQACAP//AAAAAAMA/////wEABAD//wEAAAABAAAAAwD//wAAAgADAP7///8DAAQA/P/+/wQABgD9//3/AwAEAP////8AAAIAAQACAAAAAAABAAIAAQAAAAAAAgAAAAAAAAADAAIA/v/+/wQABAD+//3/AwACAP//AAADAAEA//8AAAMAAAD//wEAAwAAAAAAAQACAP//AgAAAP//AgAEAP7//f8CAAQA/v/+/wEAAwAAAAAAAAABAP7/AQADAAAA/P8CAAMAAAD+/wAAAQACAP7//v8BAAMA/v/+/wIAAgD9/wAAAgAAAP7/AAAAAAIA///9////BQAAAP3/AQADAP7///8AAAAAAAACAP3//f8DAAQA/P/9/wEAAgD+////AAD/////AgD///7/AAAAAP7/AQAAAP3///8EAP7/+/8CAAMA/f/8/wIAAQD9////AAD+/wAAAAD///7/AAAAAAAAAQD+//z/AgAEAP7/+v8CAAQA/v/9/wEAAAAAAAAAAAD9/wEAAgD+//v/AgAEAP7/+v8BAAMA///8////AQABAPz//v8BAAAA/P///wEA/v/9/wEA///9//3/AQAAAP3/+/8AAAIA/f/6/wAAAAD///7//v/9////AQD+//v///8AAP///v/+//3/AAABAP3/+/8BAAAA/f/9/////v////3///8AAP7//P///////v/8//7/AQABAPv//P8BAAAA+f///wEA/f/8/wIA///7//3/AQD8//3/AAD///r///8BAP//+v/+/wAA/v/8/wAAAAD9//z/AQD///7//f////7///8AAAAA/P/9/wAAAgD8//3/AQAAAP3//////wAA/v/+//7/AAD//////v/+//7/AQD///7//P///wEA///8/wAAAAD+//3/AQD///7//v8AAP//AAD+/////v8AAP//AAD+/wAAAAD/////AAD+/wAAAAABAP7/AAAAAP7///8DAP///f8CAAQA/P/9/wQAAgD9/wAAAgAAAAAAAgAAAP3/AAAEAAEA/f8CAAMA/f///wUAAAD6/wEABQD+//7/AwD///3/BAACAPz//v8EAAIA/////wAAAAACAAEAAAD//wEAAwAAAPz/AgAFAP//+/8CAAUAAgD8////AwAEAP7//v8CAAMA//8BAAAAAgAAAAAAAAAEAAAA/v8CAAUA/v///wIAAgD//wIAAQAAAAAABAABAP///v8DAAMAAQD//wIAAQABAAEAAwD///3/AgAHAAAA/P8AAAYAAgD9//7/BAADAAAA//8BAAIAAwD/////AgAEAP7///8EAAQA/v8AAAIAAgABAAIA/v8BAAQAAgD+/wEAAwABAP//AgACAAAA//8CAAIAAgD/////AQAEAAEA//8AAAIAAgACAP//AAACAAIAAAABAAEAAQABAAAAAAACAAEAAAABAAEAAQADAP///v8EAAQA/f8AAAQAAQD//wMAAgD//wIAAwD//wEABAACAP7/AQAFAAIA/v8BAAMAAwD//wAABAACAP//AQADAAEA//8DAAMA//8AAAMAAgAAAAAAAwACAAAAAAADAAMAAAD//wIAAwAAAAAAAwABAAAAAQADAAEAAAAAAAIABAAAAPz/AgAGAAEA/f8AAAIAAwABAP//AAAEAAIA/////wIAAwABAPz/AgAHAAAA/P8DAAMA//8BAAIA//8CAAIA//8CAAQA/v/+/wUABQD+//7/AwAEAAAA//8AAAMABAABAP7/AAAFAAMA/f///wUABAAAAAAAAQACAAMAAwD/////BAAFAP////8CAAQAAwAAAP7/AQAFAAMA/v/+/wIABQADAP7//f8EAAQAAQD//wEAAwACAP//AQAEAAEA/v8DAAMA//8BAAQAAAD//wMAAgD//wEAAgD//wAAAgACAAAAAAAAAAEAAQABAP7/AQADAAAA/v8CAAQAAAD8/wEABgACAPz/AAAEAAIA//8CAAEA//8AAAQAAgD+//7/BAAEAAAA/f8CAAMAAQD//wIAAgAAAP//AgACAAIAAAAAAAIAAwD//wAAAgABAP//AQACAAIAAAAAAAAAAgAAAAEAAQD///7/AwACAP///v8BAAIAAQD/////AgADAP7//f8CAAUA/v/7/wEABgAAAP3/AQACAP//AAACAAEA/v8AAAIAAwAAAP7/AQADAAAA//8CAAMA/v///wIAAwD///7/AQAEAAEA//8AAAEA//8CAAMAAAD+/wIAAgAAAAAAAQAAAAIAAgAAAP//AwADAP7///8EAAUA///+/wIABAACAP7//v8EAAUA///9/wUAAwD9/wEABAD+////BAADAPz/AQAFAAEA/P8BAAUAAQD8/wMABAD///z/BAADAP7//v8DAAEAAQABAAAA/v8CAAIA///8/wMAAwD///7/AgAAAAAAAAAAAP//AgD//wAAAAADAAAA///9/wUAAwD+//z/AwAEAAAA/P8BAAMAAwD8/wAAAgACAP//AAAAAAIA//8AAAAAAwD///7/AAADAAAA///+/wEAAgAAAPz/AAADAAAA/P8AAAIA/v/+/wEA/v/+/wIAAAD7////BAD///r/AAADAP7/+////wMA///8/wAAAgD///z///8CAP///P8AAAIA/v/9/wEAAgD8//z/AgABAP3//v8BAP///P8AAAMA/v/7////AwAAAP3//v//////AAD/////AAD+//3/AgACAPv//P8CAAAA/f///wAA////////AAAAAP7//v8CAAAA/f8AAAMA/v/8/wIAAgD9//7/BAACAPv//f8FAAMA+v/8/wUAAwD7//3/BAABAP3//v8DAAAA/P///wMA///+/wEAAQD9/wAAAgAAAP7/AAAAAAEAAQD///3/AgACAP7//f8DAAAA/v8BAAEA/f8BAAIA/v/9/wIAAQAAAAAA//8AAAEAAAD/////AAACAAAA/v8AAAAAAAAAAP///f8AAAIA///9//////8BAAEA/f/8/wIAAgD9//3/AQAAAP7//v8BAAAA/v/7/wAAAwD+//j/AQAEAPz/+P8BAAEA/f/7//////8AAP3//f///////P/+//3/AAD///3//f8BAPz/+////wEA/P/9//3/AAD///3/+f/+/wEAAAD6//v//v8DAP3/+v/7/wEA/v/9//r//v//////+v/+//3//v/9////+v/9//7/AAD5//7//v////r////9//7/+v////3////9//7/+f///////v/4/////v/+//v//v/8/wAA/P/8//3/AgD6//v///8CAPz//P/+/wEA/P/+////AAD7//7///////3/AAD8//7///8CAPz//P/+/wIA/f/+/wAAAQD7////AwABAPv//v8BAAMA//////3/AQADAAAA/P8CAAMA/v/8/wUAAwD9//7/BQAAAP7/AQACAAAAAQABAAEAAQAAAAEAAwABAP7/AwADAAAAAQACAP//AQADAAMAAQABAAAAAgACAAIA//8CAAQAAQD+/wMABAD+//3/BQADAP////8DAAIAAQD//wAAAQACAAEAAAAAAAEAAQACAAAA/v8AAAUAAgD8//7/BQACAP7///8CAAAA//8BAAIA////////AwAAAAAA/v8BAAAAAAAAAAIA/f///wEAAgD7/wAAAgACAPv///8AAAIA/v////z/AgABAAEA+f8AAAMAAgD7/wAAAAACAP7/AAD+//////8DAP3///8BAAMA+//+/wMAAgD7////AgADAP3///8BAAEA/P8CAAMA/f/7/wUAAwD+//z/AgACAAAA/f///wIAAQD8////AgABAPz///8AAAEAAAD///3/AQACAP7//P8BAAAA/f8AAAEA/P/9/wMAAQD7//3/AAAAAP/////+//3/AAACAP///P/8/wIAAwD+//3///8AAP//AgD///v//v8EAAMA/f/+/wEAAgAAAP//AQABAP7/AAACAAIA/v///wIAAgD//wAAAQAAAP//AQD//wEAAAD/////AgAAAP////8BAP//AAAAAAEA/v/+/wEAAwD9//z/AAADAP7//v/+////AAAAAP3//f8AAAEA/P///wAA///9/wAAAAD///3//v8AAAEA/f/9/wAAAQD+/wEA///+//7/AgABAP7//f8AAAIAAgD8//7/AQADAP3//f8DAAMA/P///wMAAgD9////AQADAP7/AAACAAQA/v/+/wIAAwAAAAEA//8BAAEABAABAAEA//8BAAQABQD9////BAAFAP//AQADAAQAAQAAAAAABAADAAAAAAAEAAIAAQABAAMAAQABAAIABAAAAAAAAQAEAAIAAQAAAAQAAgACAAAAAQABAAMAAQAAAAIAAgD//wIAAgAAAP//AwADAAAA//8BAAIAAQD/////AgACAP7//v8DAAAA/P8AAAMA///9/wIAAQD9////AQD///7/AgAAAP7//v8CAP3//v8CAAEA+/8CAAIA/v/7/wUAAAD7//7/BgD///7///8DAP7/AQAAAAIA//8CAP7/AQD+/wEA//8CAPz/AgADAAIA+v8BAAMAAwD4////AwADAPj/AQABAAIA+f8CAP3////9/wEA+/8BAP7/AAD5/wEA//////j/AAAAAAAA+P8AAAEA///5/wEA///+//v/AgD+//3//P8CAP3////8/wAA/P/+//7/AQD7//3//f8CAPz//P/7/wEAAAD9//j/AAABAP7/+P///////v/8/////P/9//7////9//3//P8BAP///P/6/wIAAAD7//r/AgAAAP7/+v8AAAIA///7/wAAAgD+//3/AwABAP3/AQADAAEAAAABAAAABAADAAAA//8EAAIAAgACAAMAAgAEAAMAAwACAAQAAQAFAAUABAAAAAUABgAEAAIABAADAAgABgACAAAACgAGAAMAAwAIAAQABgAEAAUAAwAIAAUABAADAAUABAAHAAQAAwADAAgABAAFAAQABQACAAcABwADAAAACAAGAAMAAgAGAAQABQACAAMAAwAIAAMAAQACAAgABAADAAAABgAEAAYAAAAEAAQABgABAAQAAwAEAAEABQADAAQAAAAFAAUABQD9/wUABQADAP//BwADAAEAAAAIAAEAAQAAAAYAAAAEAP//BQD//wMAAQAFAPz/AQACAAcA/f8BAP7/BQAAAAcA/P8BAAAABwD//wIA//8DAP//BQD//wQA/v8GAAEAAwD9/wYAAQACAP7/BAAAAAMA//8DAP7/BQD//wAAAgAHAPz/AAACAAYA//8CAAAABAABAAQAAAACAAIABAABAAMAAQADAAIABAACAAEAAgAFAAQAAwACAAIAAgAFAAQAAAABAAIAAwABAAMA//8BAP//AQABAAMA/f8AAAAAAwD+////AAADAPz/AgAAAAAA/v8DAP7/AQAAAAQA/f8AAP//BAD+////+/8FAAAA/v/8/wQA/v////3/AAD+/wMA/f/9//7/BAD9//7//P8CAAEA///8/wIAAgD+//z/BAAAAP7//f8EAAAAAQD8/wAAAAADAP//AQD+/wIA/v8CAP7/AQD7/wQA//////v/BQAAAP3//f8FAP///v/+/wQA/v/+//z/BQD///7//f8EAAEA///+/wIA//8BAP3/AwD+/wEA/P8BAP3/AQD5/wAA/f8BAPn/AAD9/wAA+f8DAPz//f/6/wMA/f////n/AgD7/wAA/f8BAPf/AQD+/wEA9v8BAP//BAD3/wIA/v8DAPv/AgD9/wMA/f8CAP3/BQD9/wEA//8GAP7/AQD//wQAAQACAP//AwAEAAQA/v8CAAMABgD+////AwAIAAAA//8DAAcAAQD+/wQABgADAAIAAQADAAQAAgACAAIAAQABAAQAAwAAAAEAAwABAAIABAACAP7/AwADAAQAAAAFAAAABwADAAcAAQAEAAIABwABAAMAAwAHAP//BAAEAAYA/f8GAAMABwAAAAYAAAAHAAAABwAAAAUA/v8GAAAABwD+/wEA/v8GAP///v/8/wMA+/8BAPz//v/6/wEA/P/+//r//v/8//7/9//+//z//v/3////+v////r/AAD3//z//f////X//P/9//7/9v/9//z////4////+v8AAPv/AAD6/wAA/P8CAPn/AAD7/wMA/P/+//n/AwD+//3/+P8DAP3//f/6/wIA/P/8//z/AQD8//z/+v8CAP3//f/6/wEA+//7//7/AwD4//n//v8FAPr/+f/6/wMA/f/7//r/AQD7//3//P////z//v/9//7//P////3////7/wEA/f/+//3/AQD9//7/AAD9//z//v8AAP7/+//+/wEAAAD8//z/AwAAAPz//P8CAAAA/f/8/wEAAAAAAP3/AAABAAEA/f8AAP//AwD///7//f8EAAIA/v/8/wQAAwD//wAABAACAAAAAwAGAP7///8BAAUAAQD+//7/AgAEAP//AAAAAAMAAQABAP//AgADAP3//f8AAAMA///+//z/AgAAAP3//P8CAP///f/+/wAA/P8AAP///f/8/wIA/v/8//3/AAAAAP///f/+/wEAAAD+//z/AQABAAAA/v/+/wAAAgD//wEAAAABAAEAAwD+////AQADAP////8AAAAA//8DAP/////+////AwD9//3//P8EAP///v/7/wEAAAD///7/AAD+/wQA/P////v/AgD7/wAA+f////z/AwD8//7//P8EAPz//v/9/wYA+f/+////BAD6/wEA//8CAP3/BAD9/wAA/v8DAPz/AAAAAAIA+/8BAAAAAAD7/wIA/f/9//z/AgD5//3/+P8BAPf/+//3////9//5//X//P/5//j/8//8//T/9//0//3/8P/5//b/+v/x//v/9P/3//T//P/x//j/9//7//L/9//6//3/8v/3//v//v/x//n//f/8//T/+//6//z/+P/8//v/+v/6//3/+//7//X//v/6//j/8//+//v/9//0//7/+P/0//f/AAD2//X/+f////f/9//6/wAA8//5//b//v/0//z/9P/7//L//f/z//j/8v/8//P/+f/x//n/8P/7//D/+f/x//v/8f/2//L//P/3//j/8v/9//b/+v/2//v/8v/+//n/9//x/wIA9v/5//P//f/2//v/9f/8//b////1//z/+P/+//f/AAD2//z/+f8BAPb//f/4/wAA9//+//r////5//7//P////n/AQD7//3/+v8FAPz/+//6/wMA/P/+//j/AQAAAAEA9/8BAAEAAQD9/wAAAwACAAUAAgADAAEABgAFAAYAAAADAAcACgD//wYABgAPAAEACwAFABAABAAQAAQAEgAFABEABAARAAgAEwAHABIACgAVAAcAFAAKABcABgAZAAkAGAAJABgABwAXAAkAFgAGABgABwAWAAgAHQAGABcACwAeAAgAGwAMACAABwAgAA0AIgAKACAACgAjAA0AHgAHAB0ADgAaAAcAFgAJABsABAAZAAYAGQADABwAAwAZAAQAFQACABgAAQASAAAAFQD+/xAAAQATAPv/DwADABAA+f8JAAIADQD6/woAAQANAPv/DAABAA4A/v8OAAMADQABAA0AAQAQAAUADgAEABEACAAOAAYADwALABEABwATAAsAFAAHABcADQAVAAoAGAASABUACgAVABMAGQALABcAEQAcABAAGQASABgAEgAWAA8AGQAQABYADgAWABEAEQAOAA0ADAAPAAoACwALAAsACQAGAAcACAAHAAQAAAADAAcAAgD7/wAABAD9//r//P/+//n/+f/4//r/9//5//X/8//1//f/8//y//H/9f/z//P/8//1//H/+P/w//X/9P/3//T/9v/y//b/9//3//L/+f/0//f/8P/4//P/9P/w//n/8//5/+3/9v/x//z/8P/3//D/+v/3//z/8f/8//P/AADz//n/8v8AAPX/+//w/wAA8f/9/+7////v//3/7P/9/+3////u//3/7P/+//L//f/t/wAA7v8AAPD/AADu//7/7//+//P////w/wEA8P8AAOv/AQDu/wAA5/8CAO3//P/u//7/7v/+//L/AgDw//v/9/8EAPP/+v/x/wMA8v/+//L/AQDy/wMA8v/9//T/AgDz////9v////L//v/5//3/9v8AAPj//P/+////9//9//3/AQD4////+P/9//n//f/1//v/9v/7//L/+v/v//r/7P/3/+z/+P/s//X/7v/y//D/9v/y//P/8f/2//P/8//u//X/7f/1/+r/8v/s//T/5P/v/+n/8v/o/+//6f/z/+3/9P/n//P/8P/3/+z/9P/x//v/8v/1//P//f/1//3/9P8DAPb////5/wQA+f8BAAEABQD7/wgAAgAJAPv/DQD//woAAgAQAAIACwALABIACQANAAkAFAAPAA8ABwAVABAADwAHABUADwATAA0AFwALABMADgAVAAoAEQANABEACgAQAA8ADAAIABEACAAOAAEACwAJAAsABwAIAAoACwAKAAoACwAJAA0ADAALAAgADwAHAA0ACQAQAAgADAAHABIACAAOAAQAFQAJABIABwAVAAgAGAAIABcABgAcAAkAHQAFAB8ACQAiAAYAIwAGACQACAAmAAQAIAAHACUAAwAcAAYAIwAHABkAAwAfAAcAGwAAAB4ACQAaAP//HQAGABUA//8bAAIAGAABABgA/v8WAAMAEAD8/xAAAwAIAPv/CwD//wgA+/8KAPz/CwD5/w0A+/8MAPn/CwD+/wQA+P8JAPn/AQD2/wUA9P8BAPj////y/wAA+P/3//T//v/2//b/9//+//X/+v/6////9f/8//r//P/2//j/+//5//n/9//8//H/+//0//z/9f/+/+7//P/4/wAA7//9//n/AwD4/wIA/P8IAP//BAAAAAsAAAAGAAIACwD+/wcAAgALAP3/CwD6/woA//8KAPj/CQAAAAsA+/8HAP3/CgABAAYA//8JAAMABgD8/wYAAgAEAPb/BwD9/wIA9P8EAPn/BgDy/wIA9f8FAPX/AgD7/wIA9/8FAPj/AQD7/wIA/v8CAAAABQABAAcAAAAHAAUACAAHAAcABgAKAAYABgABAAoAAAAHAAAABQAAAAYABAD//wEABQACAP3/+/8AAPj/+//0//n/9P/4/+7/9P/x//D/6//x//H/8v/t//D/7f/z/+z/6f/u//D/7f/r/+z/7f/l/+z/6f/r/+H/6v/l/+v/5P/i/+n/6f/q/+b/5v/o/+f/6//n/+b/6v/u/+z/5v/w/+z/8v/o//n/7P/3/+z/+P/r//f/7v/x/+r/8P/u//H/6P/4/+z/+f/v//v/8P/8//L/AwDx/wkA9/8MAPj/EwD8/xEA/v8ZAAEAFgADABQABQAXAAUAEwAHABcACQAYAAcAGwAPABoADQAcABAAGgAOABwADwAbAA8AHwASABcAEwAaABIAEgAUABMAEQASABEADQAPAA4ADgAKAAsADAAPAAMACQAIAAoAAAAIAAIABwD7/woA/v8FAP7/BAADAAUA/P8HAAAABQD3/wgA/f8FAPP/CAD1/woA9/8GAPj/CQD//wUAAQAHAAMABAAGAAsA//8GAAUACgD//wgAAAAJAP3/CQD8/wwAAQAFAAIACwAFAAEAAwAJAAcABAABAAcAAgAAAAMABAD9/wAABAAGAPr/AAACAP7///8BAAAA+//9/wEA/P/5//3/AQD4//r//f/9//r/+f/+//v/+//8//j//f/2//3/9v/8//b//P/2//r/9f/9//f//P/4/wEA+f/8//f/BAD7//v/+P8AAP3/+//7/wEA+/////z/AQD6////+/8CAPv/BAD7/wQA/v8CAP3/AwD9////+/8CAPz/+//6/wIA///4//r//v/+//j/+v/5////+//6//n//f/8//r/+v/9//z//P/7//z//f/+//v//v/7/wAA+v8AAP3/AAD7/////f/9//7//f////3//v8EAP7/BAD//wgAAgAIAP//DQD8/xAAAAANAAIACwAEAAYAAQAGAAEACAD+/wcAAAANAPv/CgABABIA/f8MAP7/FAD//xAA//8UAAMAFQABABMABgAXAAIADwAKABYA//8SAAcAFgACABcABgAOAAcAEQAKAAUADAAFAAcACAAFAAgACAAQAAYADQAPAA8ABAAQABAACgAKAAsADwADAAsAAgAOAAEACwD//w8A/v8MAAMACAABAAwACQADAAkACwAEAAgABwAIAP3/BwAJAAgAAQAJAAoACQAEAAgACAADAAYABgAAAAEAAgACAPr///8AAP3//P/7/wEA+v/9//n/BAD7//3/+f/+//3//f/5//z/+/8BAPn//v/7/wAA+//8///////9//j/AAD2////+f////b//v//////+v/9//n/BQD7////9f8FAPf/AgD1/wUA9/8HAPn/CQD2/wsA+v8MAPX/DgD4/wwA8/8RAPf/EAD3/xIA9/8SAPj/FwD0/xQA+/8bAPH/EwD7/xgA9v8YAPz/FgD+/x4A+v8YAP//HgD//xoABAAWAAcAHwAIABoACQAeAAsAHwAKABwACgAlAAgAHgAKABsADAAeAAoAFgAJABcADgAVAAwAEAAQABcACQARAA8ADgAPAAwAEQAIAA8ADAAOAAgADAALAAkABwAEAAUACgACAAMAAAAKAP7/AgD//woA+v8IAPn/CwD1/woA9/8IAPP/DAD1/wQA7f8OAPD/DgDs/xMA8v8RAO//CgDv/w0A6P8KAOn/CwDn/wkA6P8JAOL/CwDj/woA3/8KAOP/AgDb/wYA4f8AANn/AQDi//7/1/8BAN//AQDZ/wIA4P/9/97//P/f//r/4P/2/+H/9//g//X/4P/3/+D/9//j//L/4//z/+X/8f/n//X/4//1/+z/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7//1//L/8P/x/+//9v/v//j/6//5/+z/+//s//z/6f/9/+7/AADl/wEA8P8EAOT/BgDw/wkA5/8HAO//CwDt/wcA7/8LAPD/CADy/wwA8f8LAPb/DQD0/w0A+P8OAPv/DAD5/w4AAAAJAP3/CwAEAAkAAgAJAAcACgAIAAoACgALAA0ACwARAAoAEwAJABYACQAXAAkAGgAMABsACwAeAA0AHgAMACAACgAhAAkAJAAIACMABwAjAAsAIwAKACIADwAeAAsAJAAQABoACgAfAAoAGwAIABUABAAXAAgAEAADAA0ACAAJAAQABwAJAP//AgABAAgA9v/+//b/BADx//3/6//6/+f//f/j//L/3v/6/9z/8f/X//X/1f/w/9P/8P/S/+z/zP/u/9L/6v/I/+v/0f/p/8z/5//R/+j/0//m/9P/5//X/+n/2v/q/93/7P/j/+7/5P/x/+//8v/v//b/+v/6//z//P8EAAEABwAHABIABgASABMAIQAPAB4AGQArABsAKQAaADUAJgAxAB0APQAoADgAJQA+ACgAPQAuAD4AKQA+AC4AQAAoADkAKQA9ACYAMQAiADUAJgAnABoAKgAeABwAEgAfABMAEgALAA0ACQAHAAIA/P////v/+v/u//T/7v/w/+P/6P/e/+X/2v/c/9H/2v/S/9P/x//T/8r/zv/A/87/xf/N/8D/yv/A/87/xf/I/7//y//K/8v/xP/J/87/0P/K/87/1v/W/9f/1//f/9z/5v/d/+v/5//y/+j/9v/0/wEA9f8AAP7/EQACAA0ABAAbAAwAGgALACQAFAAkABcALAAbACsAIQAwACIAMQAoADQAJgAxACgANgAmAC4AJQAxACYAKwAjACgAIgAjAB8AIQAcABsAGwAWABcAEgASAAgAEAAHAAwA/P8JAPz/BQDw/wIA8P/7/+j/+v/k//T/4f/x/9v/8v/a/+3/1v/x/9b/8P/T/+z/1v/x/9T/6f/X/+z/2f/s/9v/6v/e//L/4v/z/+T/+f/s//n/8P/+//b//v8AAAMAAAAGAAwACgAOABIAFwATAB0AHgAkABoAKQAjADIAIQA0ACUAPQApADsAKgBEADQARAAtAEUAOABJAC4ARQA1AEgAKwBEADAAQwAmAD0ALQA7ACUAMwAkAC8AIAAoABoAIgASABkADgAUAAYABwD//wUA/f/2//f/9P/y/+b/8//m/+b/2P/r/9f/3f/O/+H/yP/Y/8f/2f+7/9j/vv/T/7j/1v+2/87/uP/T/7X/z/+3/9L/uP/Y/7r/1/+8/97/wv/h/8P/4//M/+f/0P/q/9X/6v/f//T/4v/y/+v//v/z//7/9v8IAAYACQAEABIAEgASABcAGAAbABoAKAAdACcAIAAwACMANQAlADYAKgA+ACcAPgAuAEMAKgBCAC4ARgAtAEIAKwBFAC4AQgAnAD8AKQA/ACIAOgAiADcAHgA0AB4ALQAcACoAGQAjABgAHgAVABoAEQARABAADgAIAAUACAAAAP//+v////P/+P/s//f/6v/1/+D/9f/f//L/1//z/9b/7v/R/+z/0P/r/8z/5v/K/+b/yf/l/8j/5//J/+T/yf/r/8n/4P/P/+v/zf/h/9P/6P/U/+X/2P/m/9z/6v/h/+f/5f/o/+v/7f/u/+b/9f/x//n/6v////L/BQD0/wgA8/8PAPr/EgD0/xgA+/8dAPX/HgD7/yQA+f8kAPz/KQABACoAAgApAAYALwAHACgACQAwAAkAKAAKAC0ACQAmAAwAJgALACQAEQAfAA4AIAAUABkAEwAXABUAEwAWABAAFQALABkACAAVAAQAGQD+/xIA/f8XAPf/EwD3/xEA7/8XAPP/DgDp/xgA7/8SAOf/FADs/xUA5v8QAOr/EADm/wsA6v8JAOn/BwDr/wUA7v8EAOv/AgDz/wQA8P8BAPT/AAD5//7/+P/7//7/+P/9//f/AgD0/wQA8/8GAPH/CQDt/woA7f8NAOv/EADr/w4A6/8RAOz/EADq/xMA6/8QAOn/EwDl/w4A6P8RAOT/CwDo/w8A6P8IAOn/CgDu/wYA7v8EAPP/AwD0////9v/8//r/+//6//f//P/4//3/8f////L/AwDt/wUA7/8GAOr/DQDr/wsA5/8SAOr/DgDm/xQA6f8PAOX/FwDq/w4A5/8VAOr/DQDq/xIA7f8PAO3/DwDw/xEA8f8MAPX/DQD5/wkA+f8FAP3/BgACAAAAAQADAAsA/P8GAP7/EAD7/xEA+P8SAPv/GAD1/xUA9/8cAPX/HADy/xsA8/8iAPD/GwDx/yIA7/8dAPH/HgDy/x8A8/8aAPb/HAD1/xcA+v8XAPf/FQD+/xAA+f8RAP7/CQD9/wsA/f8FAAMAAwADAP//BwD9/woA+v8HAPb/CwD2/wwA7/8LAPL/EgDr/wkA7P8RAOr/CQDp/wsA6P8KAOj/BwDm/w4A5f8IAOj/DwDj/wUA6/8JAOb/AQDs////6v///+v/+f/w//r/7P/4//X/9P/x//X/9f/x//n/8v/1//D////v//n/7/8BAOr//v/t/wIA5/8EAOr/AgDn/wgA6v8EAOj/CADu/wcA6f8IAPP/CQDs/wcA9P8MAPD/CADz/wsA9/8LAPb/CAD6/w4A/f8HAP//DgAFAAgABwANAAkACQANAAwADgAMAA8ACQATAA8AEQAIABgADwAUAAkAGgANABkACwAaAA0AHQAJABwACwAcAAoAHAAJABsACgAYAAgAFwAHABQACQARAAMAEAAHAA4AAQAKAAMACQAAAAUA/v8AAP7/AAD4//f//P/3//T/7//3/+//8//o//D/6f/v/+X/7f/k/+r/4v/p/9//6P/e/+X/2//k/9r/4//X/+D/2v/g/9b/4P/Z/97/1v/f/9r/3v/b/9//3//f/+D/3//j/+P/5v/h/+f/5v/r/+f/6//p/+7/7f/y/+7/9f/y//r/9v/8//j/AwD8/wYA/v8MAAMADQAIABIACQATAA8AFgASABgAEwAYABsAHAAYAB0AIAAeACAAIwAhAB8AJgAnACQAIAAnACYAKAAiACcAIAApACIAJwAZACcAHwAlABQAJgAaACAAEwAiABMAGQATAB8ADQASAA4AGQAIAAsABgASAAUABgAAAAgA/f8AAPz////2//r/+f/3//L/8f/2//H/8v/s//D/6v/y/+b/6P/k/+//4//n/9//6f/i/+j/2v/o/97/5//b/+r/2//n/9v/6v/c/+n/2//q/97/6//d/+v/3//t/+P/7P/j/+7/5//v/+f/8f/s//H/7P/0//H/9f/0//n/9v/5//n/+//9///////9/wMAAwAGAAAABQACAA8ABgAJAAMAEgAJAA8ABwARAAkAFgALABIACgAYAAsAFwANABcACgAbABEAFwALABsAEwAaABEAGAARABwAFwAWABEAHgAYABMAFAAdABgAEwASABoAGQATABAAFgAZABIAEwAUABYADgAVABEAFAANABQACwASAAwAEgADABIACwAPAP//DgAEAAoA/v8KAPv/BQD8/wgA9v8AAPb/BgD0//7/7v8AAPD//P/r//r/7f/4/+j/9P/o//X/5P/u/+b/8v/h/+3/4v/u/+L/6//e/+r/4//o/9v/6P/j/+b/3P/m/+T/5P/e/+P/4//k/+X/4P/i/+X/6v/h/+T/5//t/+T/6//p//D/6v/x/+z/9P/u//r/8f/3//P/AQD1//7/+P8GAPn/BQD5/wwAAQAKAP7/EgAHAA8ABwAWAAoAFwAOABoADQAZABAAIQARABoAEAAkABQAHQATACIAFAAgABQAIAAUAB8AFAAfABIAHQAPABsAEgAZAAoAGQARABIABgAXAA0ACAADABIABwADAAAACQD//////P////j/+v/3//X/9P/1//D/7v/x/+3/6P/r/+z/5P/m/+b/5v/e/+f/4f/j/9r/5//f/+L/1//l/97/4P/X/+b/3P/i/9n/5//c/+X/3//r/9z/6f/l//H/3//s/+r/9//l//X/8P/8/+z/AQD5//7/8/8KAAEABgD8/w8ACQARAAQAEgARABgADQAZABcAHAAXACEAGgAhACAAJQAhACUAJAAlACYAJgAqACUAJwAmAC4AJQAoACcALAAiAC0AJgAnAB8ALAAdACcAHQAmABQAJQAVACAADwAhAAsAGQAJABsAAwATAAEAEgD//w4A+f8HAPz/BgDy/wIA9f/8/+///f/w//L/7f/2/+3/7f/r/+3/6f/q/+n/5f/r/+X/6P/k//D/3//r/+L/8v/e/+//3v/z/+H/9f/e//j/4f/5/+D////i//7/4/8EAOb/AwDp/wcA6f8IAO3/DADu/wwA8v8QAPX/DgD3/xMA/P8TAP3/EgACABgABAASAAcAGgAJABMADgAZAA4AEQATABUAFAARABQAEAAYAA4AGAAOABgACgAcAAoAGAAGABoABgAbAAQAGAABABkAAAAZAPz/EwD9/xYA+P8RAPj/EAD0/xAA8v8JAPL/CwDs/wQA8v8FAOr////w/wEA7P/2/+3//v/u//D/6//5/+3/7f/q//H/7v/s/+v/7P/v/+n/7f/o//H/6P/v/+b/9P/p//D/5P/0/+r/9P/l//T/6//5/+f/9f/t//v/6v/6//H/+v/x/wEA8f/8//f/BQD3/wAA/P8FAP//BgD//wMABQAJAAQABAALAAYACgAIABAABgAPAAgAFAALABMACAAWAAwAGQAMABYACQAcAAwAGQAHABkACQAbAAYAFgAHABkABAAVAAcAFwAAABEABgAVAP7/DAACABEA/f8IAP//DAD8/wQA/v8GAPz/AAD7/wEA+v/7//n//P/4//n/9v/2//n/9f/4//H/+//x//j/7v/9/+7/+P/u//j/6//7/+3/9v/o////7//9/+b/AQDx/wUA6v8CAPH/CADw/wUA8/8JAPP/CAD4/wwA9/8KAP7/DQD7/wwAAgALAAEAEAAIAAkABgAUAAsADAAJABIADwAQAA8ADgAQAA8AFQAOAA8ACwAZAAoAEAAKABgACAATAAkAFgAHABUABgAVAAQAFAAEABIAAwAUAAAADwABABAA//8OAPr/CwD//woA+P8HAPz/BgD5/wEA+/8BAPj////5//r/9P/9//f/9f/1//f/9P/0//X/8v/z//P/9//w//T/8P/3/+//+P/w//r/7f/7//P//v/t//3/9f/+//D/AQD0////9v8DAPX/BQD8/wUA9/8JAP//CQD9/wsAAQANAAIADQAGABAAAwAMAAsAEQAFAAoADQARAAoACwAOAA8ACwANAA8ADQAMAAwAEQANAA4ACQANAA4AEQAHAAsACQAQAAkADAAAAA0ABwAKAPz/DQACAAMA/v8MAAEAAgD7/wYAAAAEAPn/AQD8/wIA9//+//r/AAD0//v/9v////T/+v/1//z/9f/8//b/+P/2//3/+v/4//f//f/+//v/+P/9//3//P/+/////f/+/wMAAQD/////BgAEAAQAAgALAAUACgAGABAABgAOAAkAEwALABEACQASAA4AEgALABQADQARAA4AFgAMABAADwAWAAwAEAAMABUADQAOAAoAEQALAA4ACQAKAAkADQAFAAEACAAHAAIA//8CAP//AgD9//3/+/8AAPf/+f/3//3/9P/2//L/+v/w//T/7//2/+r/8//r//P/6P/x/+j/7//n//L/5//t/+r/8P/p/+3/7P/v/+n/7//s//D/6v/w/+3/8P/t//L/8P/y//H/9P/1//X/9//2//f/+f/+//n/+//9/wMA+/8DAAAABAAAAAcAAgAGAAYACAAEAAoACAAJAAcADQAJAAwACwANAAkADwAPAA0ACgAOAA8ADgANAAsADAALAA8ACQAMAAgADAAHAA0ABQAKAAQACQADAAoAAwAGAAAACAD+/wQA/v8FAPn/AQD+/wMA9P/+//r////y//3/9v/7//L//P/0//f/8f/7//f/9f/y//f/+f/2//L/9v/5//X/8f/1//n/9f/z//L/+v/4//j/8P/7//j/+//z////9/////b/AgD3/wQA9/8FAPr/BgD7/wkA+/8IAP7/DQD8/wwAAAAOAAAAEwAEAA4AAwAVAAYAEAAGABQACQAUAAgAEwAKABQADQASAAoAEgAPABEADgARAAwAEAASABAADAARABIADQAPABAAEQAKABAADQAPAAcAEgALAA4ABAARAAYADwACAA0AAwAQAP7/CwADAA0A+/8MAAAACAD5/wkA/f8GAPj/BQD4/wQA9v8BAPT////z////8//7//D/+f/z//n/7v/0//L/9//t//D/7//0/+z/7f/u/+//6//t/+7/6v/s/+7/7//o/+r/6//y/+j/6v/p//T/6v/w/+n/9P/p//X/7P/0/+n/9//w//b/6f/4//P/+P/s//3/9v/4//H/AwD3//v/9/8FAPr////9/wcA/v8DAAAABwAEAAcABAAJAAcABwALAAwACQAIABAACwAMAAsAEwAKAA4ADAAVAAsAEQAMABYACgAUAAkAFAALABcABwASAAgAFgAEABEABwAUAAMAEAAEABAABAAOAAEADAACAAsA//8IAAAACAD+/wIA/f8HAP///f/7/wIA///6//v//f/9//j//P/4//3/9v/9//H//v/2//7/7v8AAPT//v/s/wAA8f///+3////u/wIA7v/+/+v/AwDw////6f8DAPL/AADr/wEA7/8CAO7/AQDw/wMA7v////T/AADw/wEA9P/9//P/AgD3//v/9P8BAPv//P/2/////f/8//r//f/+//v//v/9/wEA+f8AAPz/AwD4/wIA/P8FAPj/BAD9/wkA+f8DAP3/CwD7/wgA/f8JAPz/DgD//wcA/f8OAAEACwD9/wwAAgAMAP//CwACAA0AAAAIAAMADwADAAYAAwALAAQACgAEAAUAAwALAAQABAAFAAQAAQAGAAUAAAABAAQAAwD9//////8CAPv//v/+//7/9//+//v/+f/2//3/9v/2//b//P/z//T/9P/6//L/8v/w//f/8//z/+7/8//z//T/8P/y//D/8v/y//T/8f/v//L/9v/2//D/8v/3//r/8//1//n/+v/3//v//f/8//n//////wEA/P8DAAIAAwAAAAgABgAHAAUACgAJAAwADQANAAsADgAOABEAEAAQAA0AEwAUABIADQASABYAFAAMABIAFgASAA0AEQASABIADAANAA8AEQANAAoACwANAAsACAAHAAgABQAFAAQABAD+/wIA/P/+//r//P/1//n/9//4/+//9f/x//P/7f/w/+v/7//r/+3/5//r/+j/6v/l/+n/5P/n/+X/6P/i/+b/5//l/+P/6P/n/+X/5f/o/+r/6v/p/+j/7//t//D/7f/y//H/9//x//T/9//9//P/+f/9/wIA+v////7/BgADAAcAAAALAAgADAAHAA4ACgANAA4AFAALAA8AFAAWAAwAEwAVABUAEgAUABIAFgAXABUAEQAVABYAEwASABQAEwASABMAEAAQABAAEAAMAA8ADAALAAgADAAIAAgABQAIAAIABAADAAQA+////wAAAQD4//z/+f/7//f/+f/y//f/9f/2/+//9P/y//L/7//z//L/8P/u//H/8v/v//H/8P/w/+//8//x//P/8f/y//L/+f/x//X/8//7//T//P/2//z/9/8CAPn/AAD6/wMA/P8FAP3/BQD//wkAAQAIAAEACwAGAAsABAALAAgAEAAGAAsACgARAAkADQANAA8ACgAPAAwADAANAA4ACgAJAA8ACwAJAAgADQAHAAsAAwAIAAcACQAAAAgAAwAGAP//BgD+/wIA/v8EAPv//v/6/wIA9//7//b//P/2//v/8//1//T/+//y//L/8//1//H/8v/y//L/8v/x//L/8f/x/+7/8f/w//L/7//x//D/8//t//P/8f/3/+//9f/y//3/8P/3//T//v/1//z/9f////n//v/4/wUA+/8AAP7/BwD9/wYAAgAHAAIACwAEAAkABwAPAAcADgAKABIADAAQAAwAFgAQAA4ADwAaABAADwAUABgADwASABcAFAAQABIAFgATABIAEgAUABAAEwATABAACgAUABEADgAHABEACwAPAAYACQAIAA8AAwAFAAQADQACAAEA/f8JAP///v/5/wQA+//9//f//P/5//v/9f/6//f/9v/z//r/9v/y//H/9//2//H/8v/1//b/8f/0//P/9P/x//f/8v/0//H/+P/0//f/8P/6//f/+P/y//7/+P/9//T//v/8/wIA+P8AAP3/BAD9/wQA//8EAAEABwAEAAYAAwAHAAgADAAGAAYACwAOAAsACQAMAAwADwAOAA8ACgAQAA8AEQALABIADgARAAkAFQAMABAABgAVAAkADwAGABQABQAOAAUAEgADAAwAAQAOAAMACwD9/woA//8JAPv/BgD4/wUA/P8CAPP/AQD5//7/9f/8//T/+v/2//n/8v/3//X/9f/x//P/9f/z//H/8P/2//L/8//u//X/8f/1/+7/9//v//n/7//4//D/+//t//z/9P/9/+3//v/3/wAA8P8BAPj/AgD0/wMA+v8DAPj/BgD+/wUA/P8JAAAABQABAAsAAwAGAAQADQAHAAYABwAMAAkABwANAAkACAAIABIABgAJAAgAEwAEAAwABwAQAAQAEQACAA4ABgASAP//DgAFAA4AAQARAP//CwACABAA/f8LAP7/CwAAAAsA/P8JAP//BgD//wkA+/8DAAEABwD5/wEAAgADAPn/AQACAAAA/v8AAAAA/v8BAP7/AAD+/wMA/f8CAPz/BAD8/wUA/f8FAP3/BwD9/wcA/P8JAP3/CAD//w0A//8GAP//DgABAAsA//8KAAQADQACAAkAAwANAAYACwADAAwABwAKAAcACgAHAAoACQAIAAkACQAHAAUADAAKAAcAAQALAAoACgD//woABgAKAAAACQACAAkAAQAJAP//CQABAAgA/f8GAAAACAAAAAQA/f8IAAIAAQD9/wcAAQD//wEABwD///7/AwAFAP///f8EAAQAAAD8/wQAAQAFAP7/AgD//wYA/f8EAP7/BQD+/wYA/f8EAP3/BwD8/wUA/v8GAPz/BQD//wQA+/8FAAAABAD6/wMAAQADAPr/AQACAAEA/P8BAAEA///+//7/AAAAAAAA+///////AgD6/wAA/P8BAPr/AQD5/wEA+/8CAPf/AQD6/wIA9v8BAPn/AgD2/wMA+f8CAPb/AgD4/wMA9v8BAPn/BAD2/wEA+/8BAPj/AwD7/wAA+v8DAPz/AQD8/wMA/f////7/BQD/////AAACAAIAAwACAP//AgAEAAQAAAAEAAIABQACAAYAAQAHAAEABwACAAcAAAAJAAQABwD//wkAAgAJAAIACAD+/woAAwAHAAEABwD+/wgABQAFAPz/BQADAAQA//8EAAAAAQAAAAQAAAD//wAAAgD//wAAAAD+/wAA/v/+//v/AwD///v/+f8FAP3/+//5/wQA+//8//v/AgD5/////P8DAPf//v/+/wQA+P/9//z/BAD8/wAA+v8CAP//AAD7/wMA/v////7/BAD9/wEA/v8BAAEAAwD/////AAADAAIAAQAAAAEAAwAEAAQA//8BAAMABwACAAMAAAAHAAQABQAAAAQAAgAIAAMAAgD//woAAwABAAEACQD//wIABAAIAPz/AwADAAcA//8EAP//BAABAAQA/P8DAAIAAgD9/wMA/v8AAAAAAQD5////AQD+//v////9//7//P/9//v//v/9//r/+//8//v/+//8//j/+f/6//7/+P/3//f//v/5//j/9f/7//r/+//1//r/+v/8//b/+v/4//3/9//6//n//v/2//z/+v/8//X//f/6//7/9//7//j/AAD5//z/+f/+//n////8//7/+v////7//f/8/wIA/f/7//3/BQD///3//f8BAAIAAAD/////AQACAAMA//8CAAMAAgD+/wYAAwAAAP7/BwAEAAEA/v8GAAQAAQD9/wcABAAAAP3/CAACAAEA//8FAP//AwD//wIAAAAEAPz/AAAAAAQA/f/+//z/AwAAAPz/+v////7//f/7//z//P/9//v//P/8//r/+f/9//z/9v/5//z/+v/2//n/+//5//f/+v/4//b/9//8//r/9f/0//r/+//3//P/+f/8//f/9v/4//r/+P/4//j/+P/4//z/+f/6//X/+v/8//7/9//4//r/AAD7//v/9//+//3/AAD3//z//v8DAPn//f/9/wIA/P/+//v/AQD+/wAA/P8CAPz//////wMA/P8AAAAAAQD//wEA/P/9/wIABAD6//z/AwADAP7//P/+/wEAAQD+//7//P//////AAD7//7//f8BAP3//P/6/wIA///7//r/AQD///7/+f/8//7/AAD6//v///////r//v////v/+////wEA+//8//7/AwD9//r//f8FAP3/+//9/wYA/v////z/BAD+/wQA/P8CAP//BQD9/wMA/v8GAP7/BQD8/wUAAQAGAPv/BAABAAcA/P8EAP//BQD//wQA/P8EAAAABAD8/wQA//8CAP7/AwD9/wMA/v////3/AwD+//z//f8BAP3//f/9////+//8/////f/7//7//P/6//z//v/9//r/+v/8/wAA+//4//z////4//v//v/+//n/+//7/wAA/f/7//n/AAD///7//P/+//z/AQAAAP7//v8DAP////8BAAMA/v8AAAMABAABAAIABAADAAUABQAEAAMABwAHAAUABgAKAAQABQALAAwAAgAGAAwACwAGAAkABwAJAAsACgAEAAkACwAJAAQACwAKAAYABAAMAAkABgACAAkABwAHAAMABgAEAAMAAwAHAAAAAAADAAMA/v8AAAEA///+/wAA/f/9/////v/5//z/AAD6//j//P/8//j/+f/7//n/+P/6//n/+f/2//b/+v/8//b/9P/4//3/+P/1//j/+v/6//r/+v/4//r//v/8//n/+v/9/////v/7//v/AAACAP///f8CAAIAAQAAAAUAAwAEAAIABgAGAAcAAgAHAAkACQACAAcACwAMAAQABwALAAwABwALAAkACQAIAA4ACgALAAgACwAKAA0ACAAKAAgADQAJAAoABwAKAAgACQAHAAkABQAGAAcACAADAAQABgAHAAIABAADAAIAAwADAAAAAAADAAEA/v/9/wAA///+//z////8//v/+/////r/+//6//z/+P/9//n/+f/5//7/9//7//z/+//1/////f/6//f//v/7////+//7//r/AgD///z/+/8DAAAA/v8AAAQAAAAAAAIABAADAAMAAgAEAAgABgAAAAQACAAHAAUABgAGAAYACAAGAAcACAAIAAUACQAJAAoABgAHAAcACwAGAAgACAAJAAQACAAIAAcAAwAHAAUACQAEAAMABAAHAAEABQADAAIAAQAGAAIAAAD//wMAAAADAAAA/P///wMA/v/7/wAAAQD6//z/AgD///r/+/////3//f/9//z/+f8BAP//+v/6/wAA/P/+//3//P/6/wQAAAD6//n/AwAAAP//+v8AAAIAAgD8/wEAAQACAP//AgAAAAUAAwABAAAABgACAAMABAAGAAEABAAGAAcAAwACAAYACgAEAAIABQAKAAgAAwACAAkACwAEAAIACQAIAAMABgALAAUAAQAHAAoABgADAAcABgAFAAUABgAFAAUABgAFAAMAAwAGAAcAAgD//wUACAAEAP//AgAFAAgA///+/wMACAD/////AwAFAP//BQADAAEA/f8GAAIAAgD+/wMA/f8GAAIAAgD6/wQAAgAEAPv/AgAAAAQA/P8EAP//AQD+/wcA/f/+/wAABwD9/wEAAAADAP//BQAAAP//AQAHAP///v8EAAcA/v/+/wMABwACAP//AgAFAAQAAAAFAAUAAQABAAgABQADAAEABQAFAAcAAwAEAAMABwAGAAcAAgAGAAYACAAEAAcABQAGAAYACAAEAAMABgAKAAUAAQAFAAkABQABAAUABgAFAAIABAADAAUAAgADAAAABAADAAIA/v8FAAMAAAD7/wUAAgAAAPr/AwD//wEA+f8AAP3/AgD4/////f8AAPX/AAD///3/8v8AAAAA/v/x//7//v/+//T//v/7//7/9v/9//r////4//v/+v8AAPr//P/6/wAA+//8//z/AAD8//7//v8AAP7/AAD+/wAAAQABAAAAAAABAAMAAQACAAEAAgAFAAIAAQADAAkAAwAAAAUACgACAAIABQAHAAQABQAFAAUABQAFAAUABgAEAAQABQAEAAQABQAEAAAABQAFAAMA//8EAAIAAgD//wIA/v8EAAAA/v/8/wUA/v/8//z/AwD6//7//f////j//v/9////+P/7//r/AAD5//v/9//9//v//P/1//z/+//7//f//f/6//n/9//+//z/+v/4//z//f/8//n/+//9//3/+//9//3/+//9/wAA/f/6////AwD///r///8CAAAA/f///wEAAgACAP////8DAAEAAAACAAIAAAACAAMAAQABAAMAAgD//wIABAABAP//AwACAP//AQAFAAAA/v8CAAMA/////wAAAgD+//7//f8EAP7/+f/8/wUA/f/5//3/AQD9//z/+v/+//z//P/6//7/+v/7//3//f/4//r//P/9//n/+//9//z/+P/8//3/+v/5//3/+//6//3//f/7//3//f/6//3////+//r//f8AAAAA/P////3//v8BAAIA+//9/wIABgD9//7/AAAHAAAA/////wQAAQADAP//AgADAAMA/f8BAAQAAwD9/wIAAwABAP7/AgACAP///f8BAAMA///7//3/BAABAPr/+/8CAP7//P/6//3/+v8AAPz/+f/3/wAA+//5//f//P/6//z/9v/5//r/+//1//v/+f/4//T//P/2//b/9v/6//X/+P/2//n/9v/4//b/+P/2//f/9//6//b/9//4//r/+P/3//b/+P/5//n/+f/4//j/+f/6//v/+v/2//j//P/+//j/+P/6/wAA/P/5//j/AAD+//z/9//7/wAAAwD4//f///8EAPv//P/8/wAA/v8AAPz/AgAAAP3//P8EAAAA///9/wIA//8AAAAAAwD9////AQAEAP7///8AAAEA/v8AAAEA///8/wEAAgD9//z/AQD+//3//v8AAP7//f/8///////7//n//P8AAP3/+P/6/////P/4//r//v/7//j/+//8//r/+f/5//v/+//5//j/+//7//j/+P/7//n/+P/7//n/9//6//3/+P/2//n//f/5//b/+P/+//r/9v/4////+f/3//n//f/6//r/+f/6//n//f/6//v/+f/9//v/+//6/wEA+v/6//z/AgD5//3//f/+//r/AgD+//7/+f8BAP/////6/wMA//////z/BAD/////+/8DAAEAAQD8/wIAAAABAP7/AwD+/wEAAgAEAPv/AAAEAAMA/P8BAAIAAQAAAAIA//8BAAEAAAD//wQAAgD+//7/AwACAP///v/+/wMAAQD8//z/AwABAPv//f8CAAAA/v/+//3//v8BAP///P/+//7//v////7//f/+//7//P/+/wEA/P/9////AAD8//3///8BAPz//f/+/wMA/P/+////AgD8//////8EAPz////+/wIA//8CAPv//f8CAAYA+v/8/wEABwD9//7//f8FAAEA///7/wEAAQACAPz//v///wMA///8//z/AgABAP3/+/8AAP7//v///wAA+//+/wEA/v/8/////f/8////AQD6//v/AQD///v//f/+//z//f////z/+//+/////P/7//7/AAD7//3////9//v/AAD///r//P8BAP7//f/8////AAAAAPr///8DAAIA+v8AAAMAAQD8/wMAAQABAAAABAD//wEABAAEAP7/AwADAAUAAgAEAAAABAAEAAQAAgAGAAEABAAEAAcAAQAEAAQABgABAAYABAAFAAAAAwAFAAYAAAACAAMABQACAAMAAQACAAIAAgD//wQAAwD///7/AwADAP7//P8CAAMA/f/9/wIAAAD8////AgD9//7/AgD///v///8CAP7/+v8AAAMA///7/wAAAwD///r/AQAEAAAA+/8BAAMAAgD//wEA//8EAAMAAwD+/wUABAAEAAAABwAEAAQAAQAJAAQABQACAAcABgAGAAEACQAIAAcAAAAKAAkABwACAAkABwAJAAMACQAHAAgAAwAJAAcABgAEAAkABAAFAAYABwADAAUABAAHAAMAAwAEAAgAAgABAAMABgACAAMAAgADAAEABAABAAAAAgACAP//AAACAAAA/v///wEA///+//3/AAAAAP///P/+/wAA///8//7///////7/AAD8//7///8BAP7//v/8/wEAAQD///v/AQD//wAA//8CAP7/AQABAAIA/P8CAAQAAgD8/wIABQAEAP7/AwADAAQAAgADAAEABQAEAAMAAQAGAAQAAgADAAcAAwABAAMACAAEAAIAAQAEAAQABgABAAEAAgAFAAMABQAAAP//AwAHAP////8CAAQAAAACAAEAAAABAAIA/v8CAAIA/v/9/wUAAQD8//7/AwAAAAAA/f///wEAAwD+//3///8DAAEA///9/wMAAwAAAP//AwABAAAAAgAGAAAAAAAEAAYAAAACAAUABgACAAQABAAGAAQABQACAAcABwAFAAIABwAHAAgABQAFAAQACgAIAAUAAwAJAAgABwADAAcACAAHAAMACAAHAAYAAwAGAAUABwAEAAUAAwAFAAMABgAEAAMAAQAEAAYABAD//wEABAAFAAIA//8BAAQABAAAAP//AQADAAAA//8AAAQA/////wIAAwD9/wAAAAABAP//AQAAAAAA/f8BAAEAAwD9//7/AQAFAP3//f8BAAYA/////wAABAACAAEA/f8BAAUABAD+/wEABAAEAAEAAQAEAAQAAQACAAYAAwAAAAMACAACAAEABAAIAAEAAwADAAYAAQAFAAQABAABAAcABAAEAAAABgAEAAQAAQAGAAUABAAAAAYABQAEAP//BQAEAAQAAQAFAAEAAwADAAQAAAADAAQABAAAAAIABQAFAP//AAAGAAQAAQACAAIAAgAGAAIA//8DAAUAAQACAAIAAQABAAQAAgABAAAAAgAEAAMA//8BAAMAAgABAAMAAgD//wIABgABAP3/AwAFAAAA/v8FAAIAAAD//wQAAgACAP//AQABAAQA//8BAAAAAwD//wMAAAACAP//BAD+/wEAAAAEAP//AQD9/wUAAgAAAPv/BQACAP///v8FAP//AAABAAMA/f8BAAIAAwD9/wAAAwAEAP////8AAAUAAQD+////BQAEAP3///8GAAQA/f8AAAUAAgAAAAMAAQD//wIABAD/////AgADAAIAAQD//wAAAgAFAAEA/f8AAAUAAgD+/wEAAgAAAAAAAgABAAEAAAABAAAAAQD//wMAAQD///7/AwACAAAA//8CAAAAAgAAAAAA//8DAAEA///+/wQAAQD///3/BAAAAP3///8EAP3//v8CAAMA+////wMAAwA=",A));const e=this.reappearBufferLease;e.promise.then(t=>{this.destroyed||(this.reappearBuffer=t)}).catch(()=>{this.reappearBufferLease===e&&(e.release(),this.reappearBufferLease=null)})}armHoldSilence(){typeof window>"u"||(this.clearHoldTimer(),this.holdTimer=window.setTimeout(()=>{this.holdTimer=null,this.gestureActive&&(this.smoothedVelocity=0,this.smoothedAcceleration=0,this.stopVoices(new Set(["texture","reattach"]),.012))},rf))}clearHoldTimer(){this.holdTimer===null||typeof window>"u"||(window.clearTimeout(this.holdTimer),this.holdTimer=null)}playLift(A,e){const t=this.profile?.lift;t&&this.playSlice(t,{kind:"lift",duration:.07+A*.025,playbackRate:(.94+A*.12)*zi(.5),gain:.11+A*.065,lowpass:4200+A*5400,highpass:180,attack:.004,release:.018,pan:e})}playTexture(A,e,t){if(!this.profile||e<=.001)return;const i=Math.random()<he(.12+.58*A,0,.72),r=this.takeSlice(i?"body":"micro");if(!r)return;const n=ot(.85,1.15)*(.066-.032*A);this.playSlice(r,{kind:"texture",duration:n,playbackRate:(.92+A*.18)*zi(.7),gain:(.07+.2*A**.65)*e*xs(ot(-1.5,1.5)),lowpass:2400+A*9e3,highpass:210,attack:.006-A*.0035,release:.017-A*.008,pan:t})}playReattach(A,e){const t=this.takeSlice("micro");t&&this.playSlice(t,{kind:"reattach",duration:ot(.03,.05),playbackRate:(.67+A*.17)*zi(.5),gain:(.024+.052*A**.7)*xs(ot(-1.2,1.2)),lowpass:1500+A*2400,highpass:120,attack:.005,release:.02,pan:e*.6})}playAccent(A,e,t){const i=this.takeSlice("accent");i&&this.playSlice(i,{kind:"accent",duration:ot(.045,.072),playbackRate:(.96+A*.12)*(1+e*.08)*zi(.45),gain:(.14+A*.1)*(1+e*.35),lowpass:5200+A*6e3,highpass:220,attack:.002,release:.024,pan:t})}playFinish(A,e){const t=this.profile?.finish;t&&(this.stopVoices(new Set(["texture","reattach"]),.01),this.playSlice(t,{kind:"finish",duration:.064,playbackRate:(.97+A*.08)*zi(.35),gain:.2+A*.12,lowpass:7500+A*4500,highpass:180,attack:.0015,release:.038,pan:e}))}takeSlice(A){const e=this.profile?.[A]??[];if(!e.length)return null;let t=this.sliceBags[A];t.length||(t=of(e.length),t.length>1&&e[t[t.length-1]]?.key===this.lastSliceKey&&([t[0],t[t.length-1]]=[t[t.length-1],t[0]]),this.sliceBags[A]=t);const i=e[t.pop()??0]??null;return i&&(this.lastSliceKey=i.key),i}playSlice(A,e){if(!this.enabled||this.destroyed||this.activeVoices.size>=Ds)return;const t=Ni(),i=this.buffer;if(!t||!i)return;const r=he(A.start,0,Math.max(i.duration-.004,0)),n=he(A.end,r+.004,i.duration)-r;if(n<.004)return;const a=Math.min(e.duration*e.playbackRate,n),s=Math.max(n-a,0),l=r+(s?Math.random()*s:0),o=a/e.playbackRate,c=t.currentTime+.002,u=Math.min(e.attack,o*.36),h=Math.min(e.release,o*.48),g=Math.max(c+u,c+o-h),v=he(e.gain*A.trim,0,1.1),P=t.createBufferSource(),d=t.createBiquadFilter(),f=t.createBiquadFilter(),C=t.createGain(),x=typeof t.createStereoPanner=="function"?t.createStereoPanner():null;P.buffer=i,P.playbackRate.setValueAtTime(e.playbackRate,c),d.type="highpass",d.frequency.setValueAtTime(e.highpass,c),d.Q.setValueAtTime(.7,c),f.type="lowpass",f.frequency.setValueAtTime(he(e.lowpass,600,t.sampleRate*.46),c),f.Q.setValueAtTime(.72,c),x&&x.pan.setValueAtTime(e.pan,c),C.gain.setValueAtTime(0,c),C.gain.linearRampToValueAtTime(v,c+u),C.gain.setValueAtTime(v,g),C.gain.linearRampToValueAtTime(0,c+o),P.connect(d),d.connect(f);const D=x??f;x&&f.connect(x),D.connect(C),C.connect(this.ensureOutput(t));const M=[P,d,f];x&&M.push(x),M.push(C);const S={source:P,gain:C,nodes:M,kind:e.kind};this.activeVoices.add(S),P.addEventListener("ended",()=>{this.activeVoices.delete(S);for(const y of M)y.disconnect()},{once:!0}),P.start(c,l,a)}stopVoices(A,e){const t=Fi;if(!t)return;const i=t.currentTime;for(const r of[...this.activeVoices])if(!(A&&!A.has(r.kind))){try{r.gain.gain.cancelScheduledValues(i),r.gain.gain.setTargetAtTime(0,i,Math.max(e/3,.002)),r.source.stop(i+e)}catch{}this.activeVoices.delete(r)}}ensureOutput(A){return this.masterGain?this.masterGain:(this.masterGain=A.createGain(),this.compressor=A.createDynamicsCompressor(),this.masterGain.gain.setValueAtTime(this.volume,A.currentTime),this.compressor.threshold.setValueAtTime(-14,A.currentTime),this.compressor.knee.setValueAtTime(8,A.currentTime),this.compressor.ratio.setValueAtTime(4,A.currentTime),this.compressor.attack.setValueAtTime(.003,A.currentTime),this.compressor.release.setValueAtTime(.1,A.currentTime),this.masterGain.connect(this.compressor),this.compressor.connect(A.destination),this.masterGain)}},df={sweepDuration:950,cycleDuration:1210,coreWidth:.04,bandWidth:.3,bandOpacity:.46,brightness:1.18,highlightIntensity:.62,distortionRange:.41,distortionStrength:3.15,rippleDensity:18,rippleSpeed:6},gf={...df};function Qs(){return gf}var pf=["original","holographic","glitter","reflective"];function Ts(A){const e=pf.indexOf(A);return e<0?0:e}var Hi={source:void 0,outline:{width:18,color:"#ffffff"},edge:{width:2.4,strength:.7},shadow:{color:"#191823",opacity:.22,blur:22,distance:16,angle:42},lighting:{direction:{x:-.38,y:.52,z:.76},intensity:.8,ambient:.35,softness:.6},peel:{radius:.12,stiffness:.72,grabWidth:22,maxAngle:3.55,detachThreshold:.74,residue:!0,surfaceShadow:!0,release:"snap"},back:{color:"#f7f5f2",gloss:.7,roughness:.3},material:{type:"original",intensity:.86,scale:1,holographicGrain:.72,seed:.37,holographicColors:["#f2a7c5","#8edfd5","#9db4ea"]},sound:{src:"",volume:.7,enabled:!0},display:{width:0,height:0},tilt:-3,wind:.25,quality:"high"};function ci(A,e={}){const t=A??Hi;return{source:e.source??t.source,outline:{...t.outline,...e.outline},edge:{...t.edge,...e.edge},shadow:{...t.shadow,...e.shadow},lighting:{...t.lighting,...e.lighting,direction:{...t.lighting.direction,...e.lighting?.direction}},peel:{...t.peel,...e.peel},back:{...t.back,...e.back},material:{...t.material,...e.material},sound:{...t.sound,...e.sound},display:{...t.display,...e.display},tilt:e.tilt??t.tilt,wind:e.wind??t.wind,quality:e.quality??t.quality}}var Ft=2147483647,Mn=48271,hi=96,mf=6,Is=5,vf=new Map,wf=new Map;function bs(A){return Math.floor(A*Ft)||1}function Rs(A,e,t){const i=A.get(e);if(i!==void 0)return A.delete(e),A.set(e,i),i;const r=t();if(A.set(e,r),A.size>mf){const n=A.keys().next().value;n!==void 0&&A.delete(n)}return r}function Pf(A){const e=bs(A);return Rs(vf,e,()=>{let t=e;const i=new Uint8ClampedArray(hi*hi*4);for(let r=0;r<i.length;r+=4){t=t*Mn%Ft;const n=t/Ft>.48?255:20;i[r]=n,i[r+1]=n,i[r+2]=n,t=t*Mn%Ft,i[r+3]=Math.round(38+t/Ft*74)}return{pixels:i}})}function Df(A){const e=Pf(A);if(e.canvas)return e.canvas;const t=document.createElement("canvas");t.width=hi,t.height=hi;const i=t.getContext("2d",{alpha:!0});if(!i)return null;const r=i.createImageData(hi,hi);return r.data.set(e.pixels),i.putImageData(r,0,0),e.canvas=t,t}function Ef(A,e){const t=bs(A),i=Rs(wf,t,()=>({state:t,values:new Float64Array(0)})),r=e*Is;if(i.values.length>=r)return i.values;const n=new Float64Array(r);n.set(i.values);let a=i.state;for(let s=i.values.length;s<r;s+=1)a=a*Mn%Ft,n[s]=a/Ft;return i.state=a,i.values=n,n}function Cn(A,e){return(A-.5)*e+.5}function Bf(A){const e=A-Math.floor(A);return e<.25||e>.78?0:e<.46?.7*(e-.25)/.21:e<.58?.7+-.5599999999999999*(e-.46)/.12:.14*(1-(e-.58)/.2)}function Mf(A,e,t,i){const r=Math.max(32,Math.ceil(48*e));for(let n=0;n<=r;n+=1){const a=n/r,s=Bf(Cn(a,e)+i);A.addColorStop(a,`rgba(255,255,255,${s*t})`)}}function Cf(A,e,t,i){const r=Cn(0,e)+i,n=Cn(1,e)+i,a=Math.floor(r*3),s=Math.ceil(n*3);A.addColorStop(0,t[(a%3+3)%3]);for(let l=a;l<=s;l+=1){const o=(l/3-r)/e;o<=0||o>=1||A.addColorStop(o,t[(l%3+3)%3])}A.addColorStop(1,t[(s%3+3)%3])}function xf(A,e,t,i,r,n,a){const s=Df(a);if(!s)return;const l=A.createPattern(s,"repeat");l&&(l.setTransform(new DOMMatrix().scaleSelf(1/Math.sqrt(n),1/Math.sqrt(n))),A.save(),A.globalAlpha=.42*i*r,A.fillStyle=l,A.fillRect(0,0,e,t),A.restore())}function _f(A,e,t,i,r){const n={...Hi.material,...i};if(n.type==="original"||n.intensity<=0)return;const a=Math.min(1,Math.max(0,n.intensity)),s=Math.min(4,Math.max(.2,n.scale)),l={...Hi.lighting,...r,direction:{...Hi.lighting.direction,...r?.direction}},o=Math.hypot(l.direction.x,l.direction.y,l.direction.z)||1,c=l.direction.x/o,u=l.direction.y/o,h=Hi.lighting.direction,g=Math.hypot(h.x,h.y,h.z),v=h.x/g,P=h.y/g,d=Math.min(1.5,Math.max(0,l.intensity));if(A.save(),A.globalCompositeOperation="source-atop",n.type==="reflective"){const f=A.createLinearGradient(0,t,e,0),C=(c-v)*.28+(u-P)*-.22;Mf(f,s,a*Math.min(1.4,Math.max(.5,1+(d-.8)*.5)),C),A.fillStyle=f,A.fillRect(0,0,e,t)}else if(n.type==="holographic"){const f=A.createLinearGradient(0,t,e,0),C=(c-v)*.32+(u-P)*-.26;Cf(f,s,n.holographicColors,C),A.fillStyle=f,A.globalAlpha=.24*a*Math.min(1.3,Math.max(.6,1+(d-.8)*.35)),A.fillRect(0,0,e,t),xf(A,e,t,a,Math.min(1,Math.max(0,n.holographicGrain)),s,n.seed)}if(n.type==="glitter"){const f=Math.atan2(u,c),C=Math.min(1.4,Math.max(.45,.5+d*.625)),x=Math.min(8e3,Math.round(e*t/520*s*s)),D=Ef(n.seed,x);for(let M=0;M<x;M+=1){const S=M*Is,y=D[S]*e,m=D[S+1]*t,B=D[S+2]>.5,W=D[S+3],_=(y*.013+m*.017+n.seed*7)%1*Math.PI*2,V=.18+Math.pow(Math.max(0,Math.cos(_-f)),10)*.82;A.globalAlpha=.38*a*W*V*C,A.fillStyle=B?"#ffffff":"#34281f";const G=(.7+D[S+4]*1.8)/Math.sqrt(s);A.fillRect(y,m,G,G)}}A.restore()}function Sf(A,e,t,i,r){const n=document.createElement("canvas");n.width=e,n.height=t;const a=n.getContext("2d",{alpha:!0});if(!a)throw new Error("Canvas 2D is unavailable.");return a.clearRect(0,0,e,t),a.imageSmoothingEnabled=!0,a.imageSmoothingQuality="high",a.drawImage(A,0,0,e,t),_f(a,e,t,i,r),n}var ui=2048,ct=320,xn=.1*255;function pe(A,e,t){return Math.min(t,Math.max(e,A))}function yf(A,e,t){const i=new Uint8Array(e*t),r=new Int32Array(e*t);let n=0,a=0;const s=(l,o)=>{if(l<0||l>=e||o<0||o>=t)return;const c=o*e+l;i[c]||A[c]>=xn||(i[c]=1,r[a]=c,a+=1)};for(let l=0;l<e;l+=1)s(l,0),s(l,t-1);for(let l=1;l<t-1;l+=1)s(0,l),s(e-1,l);for(;n<a;){const l=r[n];n+=1;const o=l%e,c=Math.floor(l/e);s(o-1,c),s(o+1,c),s(o,c-1),s(o,c+1)}return i}function Ls(A){if(!A)return null;const e=Number.parseFloat(A);return Number.isFinite(e)&&e>0?e:null}function Us(A){if(A.length>2e6)throw new Error("SVG markup must be smaller than 2 MB.");const e=new DOMParser().parseFromString(A,"image/svg+xml");if(e.querySelector("parsererror"))throw new Error("The SVG could not be parsed.");const t=e.documentElement;if(t.localName.toLowerCase()!=="svg")throw new Error("The uploaded file is not an SVG document.");t.querySelectorAll("script, foreignObject, iframe, object, embed, audio, video, canvas, style, animate, animateMotion, animateTransform, set").forEach(i=>i.remove());for(const i of[t,...Array.from(t.querySelectorAll("*"))])for(const r of Array.from(i.attributes)){const n=r.name.toLowerCase(),a=r.value.trim();if(n.startsWith("on")){i.removeAttribute(r.name);continue}if(n==="href"||n==="xlink:href"){a.startsWith("#")||i.removeAttribute(r.name);continue}/url\s*\(/i.test(a)&&!/url\s*\(\s*["']?#/i.test(a)&&i.removeAttribute(r.name),(/^javascript:/i.test(a)||/^data:text\/html/i.test(a))&&i.removeAttribute(r.name)}return t.setAttribute("xmlns","http://www.w3.org/2000/svg"),new XMLSerializer().serializeToString(t)}function Qf(A){const e=new DOMParser().parseFromString(A,"image/svg+xml").documentElement,t=e.getAttribute("viewBox")?.trim().split(/[\s,]+/).map(Number);if(t?.length===4&&Number.isFinite(t[2])&&Number.isFinite(t[3])&&t[2]>0&&t[3]>0)return pe(t[2]/t[3],.15,8);const i=Ls(e.getAttribute("width")),r=Ls(e.getAttribute("height"));return i&&r?pe(i/r,.15,8):1}async function Tf(A){const e=new Blob([A],{type:"image/svg+xml;charset=utf-8"}),t=URL.createObjectURL(e);try{const i=new Image;return i.decoding="async",i.src=t,await i.decode(),i}finally{URL.revokeObjectURL(t)}}async function Fs(A){if(!/^(data:|blob:|https?:|\/)/i.test(A))throw new Error("The image URL must use data, blob, HTTP, or HTTPS.");const e=new Image;if(e.decoding="async",/^https?:/i.test(A)&&(e.crossOrigin="anonymous"),e.src=A,await e.decode(),!e.naturalWidth||!e.naturalHeight)throw new Error("The image has no drawable dimensions.");return e}function zs(A){const e=Math.min(1,640/Math.max(A.naturalWidth,A.naturalHeight)),t=Math.max(1,Math.round(A.naturalWidth*e)),i=Math.max(1,Math.round(A.naturalHeight*e)),r=document.createElement("canvas");r.width=t,r.height=i;const n=r.getContext("2d",{willReadFrequently:!0});if(!n)throw new Error("Canvas 2D is unavailable.");n.clearRect(0,0,t,i),n.drawImage(A,0,0,t,i);const a=n.getImageData(0,0,t,i).data;for(let s=3;s<a.length;s+=4)if(a[s]<255)return!0;return!1}async function If(A){return zs(await Fs(A))}async function bf(A){const e=A.fontFamily??"Arial Rounded MT Bold, Arial Black, sans-serif",t=A.fontWeight??900,i=A.richText?.blocks.filter(f=>f.runs.length);if(i?.length){const f=document.createElement("canvas").getContext("2d");if(!f)throw new Error("Canvas 2D is unavailable.");const C=144,x=G=>{const k=i.map(N=>{let X=0,L=0,J=0,AA=0;const eA=N.runs.map(PA=>{const kA=pe((PA.fontSize??28)*G,24,720);AA=Math.max(AA,kA);const YA=PA.fontWeight??t;f.font=`${YA} ${kA}px ${e}`;const Y=f.measureText(PA.text||" "),iA=Y.actualBoundingBoxAscent||Math.max(kA*.76,1),fA=Y.actualBoundingBoxDescent||Math.max(kA*.2,1),uA=PA.text?Y.width:0;return X+=uA,L=Math.max(L,iA),J=Math.max(J,fA),{...PA,fontSize:kA,fontWeight:YA,width:uA}}),hA=AA||28*G;return(!eA.length||L+J<1)&&(L=hA*.76,J=hA*.24),{align:N.align??"center",runs:eA,width:X,ascent:L,descent:J,height:Math.max(L+J,hA)*pe(N.lineHeight??1.2,.7,3)}});return{lines:k,contentWidth:Math.max(1,...k.map(N=>N.width)),contentHeight:k.reduce((N,X)=>N+X.height,0)}};let D=8,M=x(D);const S=1750/Math.max(M.contentWidth,1),y=1790/Math.max(M.contentHeight,1);if((S<1||y<1)&&(D*=Math.min(S,y),M=x(D)),document.fonts?.load){const G=new Set;for(const k of M.lines)for(const N of k.runs)G.add(`${N.fontWeight} ${N.fontSize}px ${e}`);await Promise.all([...G].map(k=>document.fonts.load(k).catch(()=>[]))),M=x(D)}const m=pe(Math.ceil(M.contentWidth+C*2),ct,ui),B=pe(Math.ceil(M.contentHeight+C*2),ct,ui),W=document.createElement("canvas");W.width=m,W.height=B;const _=W.getContext("2d",{willReadFrequently:!0});if(!_)throw new Error("Canvas 2D is unavailable.");_.clearRect(0,0,m,B),_.textBaseline="alphabetic";let V=(B-M.contentHeight)/2;for(const G of M.lines){const k=G.align==="left"?C:G.align==="right"?m-C-G.width:(m-G.width)/2,N=V+(G.height-G.ascent-G.descent)/2+G.ascent;let X=k;for(const L of G.runs){if(_.font=`${L.fontWeight} ${L.fontSize}px ${e}`,_.fillStyle=L.color??A.color??"#19191d",_.fillText(L.text,X,N),L.underline&&L.width>0){const J=Math.max(2,L.fontSize*.045);_.fillRect(X,N+Math.max(2,L.fontSize*.07),L.width,J)}X+=L.width}V+=G.height}return W}const r=t;let n=420;const a=document.createElement("canvas").getContext("2d");if(!a)throw new Error("Canvas 2D is unavailable.");if(document.fonts?.load)try{await document.fonts.load(`${r} ${n}px ${e}`)}catch{}const s=A.text||" ";a.font=`${r} ${n}px ${e}`;let l=a.measureText(s);const o=Math.max(1,l.width);o>1750&&(n*=1750/o,a.font=`${r} ${n}px ${e}`,l=a.measureText(s));const c=l.actualBoundingBoxAscent||Math.max(n*.76,1),u=l.actualBoundingBoxDescent||Math.max(n*.2,1),h=144,g=pe(Math.ceil(l.width+h*2),ct,ui),v=pe(Math.ceil(c+u+h*2),ct,1280),P=document.createElement("canvas");P.width=g,P.height=v;const d=P.getContext("2d",{willReadFrequently:!0});if(!d)throw new Error("Canvas 2D is unavailable.");return d.clearRect(0,0,g,v),d.font=`${r} ${n}px ${e}`,d.textBaseline="alphabetic",d.textAlign="center",d.fillStyle=A.color??"#19191d",d.fillText(s,g/2,(v+c-u)/2),P}async function Rf(A){const e=Us(A.svg),t=Qf(e),i=1740,r=144,n=t>=1?i:i*t,a=t>=1?i/t:i,s=pe(Math.ceil(n+r*2),ct,ui),l=pe(Math.ceil(a+r*2),ct,ui),o=document.createElement("canvas");o.width=s,o.height=l;const c=o.getContext("2d",{willReadFrequently:!0});if(!c)throw new Error("Canvas 2D is unavailable.");const u=await Tf(e);return c.drawImage(u,r,r,s-r*2,l-r*2),o}async function Lf(A){const e=await Fs(A.src),t=zs(e),i=pe(e.naturalWidth/e.naturalHeight,.15,8),r=pe(A.padding??144,0,512),n=pe(A.textureMaxEdge??ui,ct,8192),a=Math.max(1,n-r*2),s=i>=1?a:a*i,l=i>=1?a/i:a,o=pe(Math.ceil(s+r*2),ct,n),c=pe(Math.ceil(l+r*2),ct,n),u=document.createElement("canvas");u.width=o,u.height=c;const h=u.getContext("2d",{willReadFrequently:!0});if(!h)throw new Error("Canvas 2D is unavailable.");return h.clearRect(0,0,o,c),h.drawImage(e,r,r,o-r*2,c-r*2),{canvas:u,hasTransparency:t}}function Uf(A,e){const t=document.createElement("canvas");t.width=A.width,t.height=A.height;const i=t.getContext("2d");if(!i)throw new Error("Canvas 2D is unavailable.");return i.fillStyle=e,i.fillRect(0,0,t.width,t.height),i.globalCompositeOperation="destination-in",i.drawImage(A,0,0),t}var Ff=1e12;function Ns(A,e,t,i,r,n,a,s,l){let o=0;s[0]=0,l[0]=Number.NEGATIVE_INFINITY,l[1]=Number.POSITIVE_INFINITY;for(let c=1;c<a;c+=1){let u=s[o],h=(A[e+c*t]+c*c-(A[e+u*t]+u*u))/(2*c-2*u);for(;h<=l[o];)o-=1,u=s[o],h=(A[e+c*t]+c*c-(A[e+u*t]+u*u))/(2*c-2*u);o+=1,s[o]=c,l[o]=h,l[o+1]=Number.POSITIVE_INFINITY}o=0;for(let c=0;c<a;c+=1){for(;l[o+1]<c;)o+=1;const u=s[o],h=c-u;i[r+c*n]=h*h+A[e+u*t]}}function zf(A,e){const t=A.width,i=A.height,r=A.getContext("2d",{willReadFrequently:!0});if(!r)throw new Error("Canvas 2D is unavailable.");const n=r.getImageData(0,0,t,i).data,a=t*i,s=new Float32Array(a),l=new Float32Array(a);let o=!1;for(let d=0;d<a;d+=1){const f=n[d*4+3]>=xn;s[d]=f?0:Ff,o||(o=f)}const c=Math.max(t,i),u=new Int32Array(c),h=new Float64Array(c+1);if(o){for(let d=0;d<i;d+=1)Ns(s,d*t,1,l,d*t,1,t,u,h);for(let d=0;d<t;d+=1)Ns(l,d,t,s,d,t,i,u,h)}const g=document.createElement("canvas");g.width=t,g.height=i;const v=g.getContext("2d");if(!v)throw new Error("Canvas 2D is unavailable.");const P=v.createImageData(t,i);for(let d=0;d<a;d+=1){const f=o?pe(e+.5-Math.sqrt(s[d]),0,1):0,C=d*4;P.data[C]=255,P.data[C+1]=255,P.data[C+2]=255,P.data[C+3]=Math.round(f*255)}return v.putImageData(P,0,0),g}function Nf(A,e){const t=document.createElement("canvas");t.width=A.width,t.height=A.height;const i=t.getContext("2d",{willReadFrequently:!0});if(!i)throw new Error("Canvas 2D is unavailable.");const r=pe(e.width*2.35,0,112);if(r>.25){const n=zf(A,r);i.drawImage(Uf(n,e.color),0,0)}return i.drawImage(A,0,0),t}async function Hs(A,e){const t=A.type==="image"?await Lf(A):{canvas:A.type==="text"?await bf(A):await Rf(A),hasTransparency:!0},i=t.canvas,r=Nf(i,e),n=r.getContext("2d",{willReadFrequently:!0});if(!n)throw new Error("Canvas 2D is unavailable.");const a=n.getImageData(0,0,r.width,r.height),s=new Uint8ClampedArray(r.width*r.height);for(let o=3,c=0;o<a.data.length;o+=4)s[c]=a.data[o],c+=1;const l=[];for(let o=0;o<r.height;o+=1){const c=o*r.width;let u=-1,h=-1;for(let v=0;v<r.width;v+=1)s[c+v]<xn||(u<0&&(u=v),h=v);if(u<0)continue;const g=o/Math.max(r.height-1,1);l.push(u/Math.max(r.width-1,1),g),h!==u&&l.push(h/Math.max(r.width-1,1),g)}return{canvas:r,width:r.width,height:r.height,aspect:r.width/r.height,alpha:s,exteriorAlpha:yf(s,r.width,r.height),support:new Float32Array(l),hasTransparency:t.hasTransparency}}var ht={type:"text",text:`PEEL ME
@cats_juice`,color:"#19191d",fontFamily:"Arial Rounded MT Bold, Arial Black, sans-serif",fontWeight:900,richText:{blocks:[{align:"center",lineHeight:1.2,runs:[{text:"PEEL ",color:"#19191d",fontSize:28,fontWeight:900},{text:"ME",color:"rgb(36, 126, 245)",fontSize:28,fontWeight:900}]},{align:"center",lineHeight:.8,runs:[{text:"@cats_juice",color:"#19191d",fontSize:10,fontWeight:500}]}]}},Os=2.55,Hf=Math.PI,Of=1.28,Vs=.004,ks=-.22,Vf=.035,_n=.74,kf=760,Gf=520,Wf=720,Gs=720/1e3,Ws=.06,Xf=.42,Yf=.32,jf=.9,Kf="rgb(36, 126, 245)";function Xs(A){const e=A.payload,t=A.consume;return A.payload=null,A.consume=null,{payload:e,consume:t}}function Sn(A,e){const{payload:t,consume:i}=Xs(A);t&&i&&i(e,t)}function Jf(A){return{commit(){Sn(A,"commit")},commitWithEntrance(){Sn(A,"entrance")},dispose(){Sn(A,"dispose")}}}function LA(A,e,t){return Math.min(t,Math.max(e,A))}function yn(A,e,t){const i=LA((t-A)/(e-A),0,1);return i*i*(3-2*i)}function Ie(A,e){try{return new OA(A)}catch{return new OA(e)}}function Ys(A,e){return{...A,...e,outline:{...A.outline,...e.outline},edge:{...A.edge,...e.edge},shadow:{...A.shadow,...e.shadow},lighting:{...A.lighting,...e.lighting,direction:e.lighting?.direction??A.lighting?.direction},peel:{...A.peel,...e.peel},back:{...A.back,...e.back},material:{...A.material,...e.material},sound:{...A.sound,...e.sound},display:{...A.display,...e.display}}}var qf=class{constructor(A,e={}){this.camera=new mr(-1,1,1,-1,.01,10),this.scene=new Fl,this.peelAudio=new ff,this.groundShadowGeometry=new yi(1,1),this.peelShadowLight=new mc(16777215,1),this.peelShadowTarget=new Se,this.geometry=new yi(1,1,2,2),this.texture=null,this.artwork=null,this.source=ht,this.requestedSource=ht,this.sourceRevision=0,this.sourceRebuildTimer=null,this.preparedSourceStates=new Set,this.destroyed=!1,this.resizeObserver=null,this.resizeFrameRequest=0,this.renderedWidth=0,this.renderedHeight=0,this.renderedPixelRatio=0,this.measuredClientWidth=-1,this.measuredClientHeight=-1,this.geometryWidth=1,this.geometryHeight=1,this.geometrySegmentsX=2,this.geometrySegmentsY=2,this.viewWidth=2,this.viewHeight=2,this.viewportHeightPx=420,this.renderScale=1,this.meshWidth=1.6,this.meshHeight=.62,this.pointerId=null,this.grabOrigin=new IA(-.8,0),this.grabStart=new IA,this.grabDirection=new IA(1,0),this.activeDirection=new IA(1,0),this.grabExtent=1.6,this.creaseDepth=0,this.basePeelRadius=.08,this.effectivePeelRadius=.08,this.grabProjection=0,this.springVelocity=0,this.springActive=!1,this.springTargetDepth=0,this.dragDetached=!1,this.detachedTension=0,this.detachedExitActive=!1,this.detachedExitElapsed=0,this.detachedExitSpin=0,this.entranceActive=!1,this.entranceElapsed=0,this.preparedEntrance=null,this.backgroundRemovalEffectActive=!1,this.backgroundRemovalEffectElapsed=0,this.interactionHintActive=!1,this.interactionHintElapsed=0,this.entranceAxis=new IA(1,0),this.reducedMotionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this.hoverFrameRequest=0,this.hoverClientX=0,this.hoverClientY=0,this.frameRequest=0,this.lastFrameTime=0,this.state={ready:!1,dragging:!1,progress:0,grabPoint:null,pointer:null},this.resize=()=>{this.resizeInternal(!0)},this.resizeObserved=()=>{this.resizeInternal(!1)},this.scheduleResize=()=>{this.destroyed||this.resizeFrameRequest||(this.resizeFrameRequest=requestAnimationFrame(()=>{this.resizeFrameRequest=0,this.resizeObserved()}))},this.onPointerDown=i=>{if(this.destroyed||!this.state.ready||this.detachedExitActive||this.entranceActive||i.button!==0)return;this.hoverFrameRequest&&(cancelAnimationFrame(this.hoverFrameRequest),this.hoverFrameRequest=0);const r=this.screenToLocal(i.clientX,i.clientY),n=this.hitEdge(r);if(!n){this.startInteractionHint();return}this.interactionHintActive=!1,this.interactionHintElapsed=0,this.uniforms.uInteractionHint.value=0,i.preventDefault(),this.renderer.domElement.focus({preventScroll:!0}),this.renderer.domElement.setPointerCapture(i.pointerId),this.pointerId=i.pointerId,this.grabOrigin.copy(n.local),this.grabStart.copy(n.local),this.grabDirection.copy(n.inward),this.activeDirection.copy(n.inward),this.grabExtent=this.projectionExtent(this.grabOrigin,this.grabDirection),this.setCreaseDepth(0),this.springActive=!1,this.springVelocity=0,this.springTargetDepth=0,this.dragDetached=!1,this.state.dragging=!0,this.state.grabPoint={x:n.local.x,y:n.local.y},this.state.pointer={x:r.x,y:r.y},this.renderer.domElement.style.cursor="grabbing",this.peelAudio.unlock(),this.peelAudio.begin(this.state.progress,i.timeStamp),this.updatePeelUniforms(),this.emit("peelstart",{amount:this.state.progress,progress:this.state.progress,origin:this.state.grabPoint}),this.requestRender()},this.onPointerMove=i=>{if(this.destroyed||!this.state.ready)return;if(this.state.dragging&&i.pointerId===this.pointerId&&i.buttons===0){this.finishPointerDrag(i.timeStamp);return}if(!this.state.dragging||i.pointerId!==this.pointerId){this.hoverClientX=i.clientX,this.hoverClientY=i.clientY,this.hoverFrameRequest||(this.hoverFrameRequest=requestAnimationFrame(this.updateHoverCursor));return}i.preventDefault();const r=this.screenToLocal(i.clientX,i.clientY),n=r.clone().sub(this.grabStart),a=n.length();let s=0,l=!1;if(this.dragDetached){const o=a>Vs?n.clone().normalize():this.grabDirection;o.dot(this.grabDirection)>=ks&&(this.activeDirection.copy(o),this.grabExtent=this.projectionExtent(this.grabOrigin,this.activeDirection),a<this.peelModelForDepth(this.grabExtent).projection&&(this.dragDetached=!1))}if(this.dragDetached){const o=this.peelModelForDepth(this.grabExtent).projection;this.springActive=!1,this.springVelocity=0,this.springTargetDepth=this.grabExtent,this.setCreaseDepth(this.grabExtent),this.setDetachedDragOffset(n.x-this.activeDirection.x*o,n.y-this.activeDirection.y*o)}else{if(a>Vs){const o=n.clone().normalize();o.dot(this.grabDirection)>=ks?(this.activeDirection.copy(o),s=a):l=!0}else this.activeDirection.copy(this.grabDirection);if(this.grabExtent=this.projectionExtent(this.grabOrigin,this.activeDirection),l)this.springActive||(this.springActive=!0,this.springVelocity=0),this.springTargetDepth=0;else{const o=this.peelModelForDepth(this.grabExtent).projection,c=this.solveCreaseDepth(s);this.creaseDepth-c>this.grabExtent*Vf||this.springActive&&c<this.creaseDepth?(this.springActive||(this.springActive=!0,this.springVelocity=0),this.springTargetDepth=c):(this.springActive=!1,this.springVelocity=0,this.springTargetDepth=c,this.setCreaseDepth(c));const u=Math.max(0,s-o);this.setDetachedDragOffset(this.activeDirection.x*u,this.activeDirection.y*u),this.state.progress>=1-Number.EPSILON&&(this.dragDetached=!0)}}this.peelAudio.update(this.state.progress,i.timeStamp,this.activeDirection.x),this.state.pointer={x:r.x,y:r.y},this.updatePeelUniforms(),this.emit("peelchange",{amount:this.state.progress,progress:this.state.progress,direction:{x:this.activeDirection.x,y:this.activeDirection.y}}),this.requestRender()},this.onPointerUp=i=>{!this.state.dragging||i.pointerId!==this.pointerId||this.finishPointerDrag(i.timeStamp)},this.onWindowPointerEnd=i=>{!this.state.dragging||i.pointerId!==this.pointerId||this.finishPointerDrag(i.timeStamp)},this.onLostPointerCapture=i=>{!this.state.dragging||i.pointerId!==this.pointerId||this.finishPointerDrag(i.timeStamp)},this.onWindowBlur=()=>{this.finishPointerDrag(performance.now())},this.onVisibilityChange=()=>{document.visibilityState==="hidden"&&this.finishPointerDrag(performance.now())},this.onPointerLeave=()=>{this.state.dragging||(this.hoverFrameRequest&&(cancelAnimationFrame(this.hoverFrameRequest),this.hoverFrameRequest=0),this.renderer.domElement.style.cursor!=="default"&&(this.renderer.domElement.style.cursor="default"))},this.updateHoverCursor=()=>{if(this.hoverFrameRequest=0,this.destroyed||this.state.dragging)return;const i=this.hitEdge(this.screenToLocal(this.hoverClientX,this.hoverClientY))?"grab":"default";this.renderer.domElement.style.cursor!==i&&(this.renderer.domElement.style.cursor=i)},this.onKeyDown=i=>{if(!this.state.ready)return;const r=i.key==="ArrowUp"||i.key==="ArrowRight",n=i.key==="ArrowDown"||i.key==="ArrowLeft";if(!r&&!n&&i.key!==" ")return;if(i.preventDefault(),this.peelAudio.unlock(),i.key===" "){this.reset();return}this.grabOrigin.set(-this.meshWidth/2,0),this.activeDirection.set(1,0),this.grabDirection.copy(this.activeDirection),this.grabExtent=this.meshWidth;const a=this.state.progress,s=LA(a+(r?.08:-.08),0,1);this.setCreaseDepth(s*this.grabExtent),this.peelAudio.begin(a,i.timeStamp-72),this.peelAudio.update(this.state.progress,i.timeStamp,this.activeDirection.x),this.peelAudio.end(this.state.progress),this.state.pointer={x:this.grabOrigin.x+this.activeDirection.x*this.grabProjection,y:this.grabOrigin.y+this.activeDirection.y*this.grabProjection},this.updatePeelUniforms(),this.emit("peelchange",{amount:this.state.progress,progress:this.state.progress}),this.requestRender()},this.onContextLost=i=>{i.preventDefault(),this.emit("error",{message:"The WebGL context was lost. Reload the page to restore the sticker."})},this.renderFrame=i=>{if(this.frameRequest=0,this.destroyed)return;const r=this.lastFrameTime?Math.min((i-this.lastFrameTime)/1e3,1/20):1/60;this.lastFrameTime=i;const n=this.reducedMotionQuery.matches;if(this.springActive&&n)if(this.state.dragging)this.setCreaseDepth(this.springTargetDepth),this.springVelocity=0,this.springActive=!1,this.updatePeelUniforms(),this.emit("peelchange",{amount:this.state.progress,progress:this.state.progress});else{this.reset();return}if(this.springActive){const s=132+LA(this.options.peel.stiffness,0,1)*146,l=Math.sqrt(s)*1.83;let o=r,c=this.creaseDepth;for(;o>0;){const u=Math.min(o,.008333333333333333),h=-s*(c-this.springTargetDepth)-l*this.springVelocity;this.springVelocity+=h*u,c+=this.springVelocity*u,o-=u}Math.abs(c-this.springTargetDepth)<=this.grabExtent*8e-4&&Math.abs(this.springVelocity)<this.grabExtent*.018?(this.setCreaseDepth(this.springTargetDepth),this.springVelocity=0,this.springActive=!1,!this.state.dragging&&this.springTargetDepth===0&&(this.state.pointer=null,this.state.grabPoint=null)):(this.setCreaseDepth(Math.max(0,c)),this.state.dragging||(this.state.pointer={x:this.grabOrigin.x+this.activeDirection.x*this.grabProjection,y:this.grabOrigin.y+this.activeDirection.y*this.grabProjection})),this.updatePeelUniforms(),this.emit("peelchange",{amount:this.state.progress,progress:this.state.progress})}if(this.detachedExitActive){this.detachedExitElapsed+=r;const s=Math.max(this.viewWidth,this.viewHeight)*(1.45+this.detachedExitElapsed*3.2);if(this.stickerMesh.position.x+=this.activeDirection.x*s*r,this.stickerMesh.position.y+=this.activeDirection.y*s*r,this.stickerMesh.rotation.z+=this.detachedExitSpin*r,this.detachedExitElapsed>=.46){if(this.emit("detachcomplete",{progress:1}),this.destroyed)return;this.startEntranceAnimation();return}}if(this.preparedEntrance){this.preparedEntrance.elapsed+=r;const s=LA(this.preparedEntrance.elapsed/Yf,0,1),l=yn(0,1,s);if(this.uniforms.uPreparedMix.value=l,this.uniforms.uPreEntranceProgress.value=l,s>=1){const o=this.preparedEntrance;this.preparedEntrance=null,this.sourceRevision+=1,this.requestedSource=o.source,this.source=o.source,this.options=ci(this.options,{...o.options,source:o.source}),this.applyArtwork(o.artwork,o.texture),this.startEntranceAnimation();return}}if(this.entranceActive&&(this.entranceElapsed+=r,this.applyEntranceElapsed(this.entranceElapsed)&&(this.entranceActive=!1,this.clearEntrancePose(),this.emit("cyclecomplete",{progress:0}))),this.interactionHintActive){this.interactionHintElapsed+=r;const s=LA(this.interactionHintElapsed/jf,0,1);if(n)this.uniforms.uInteractionHint.value=s<.72?1:0;else{const l=yn(0,.12,s),o=1-yn(.58,1,s),c=.9+Math.sin(s*Math.PI*2)*.1;this.uniforms.uInteractionHint.value=l*o*c}s>=1&&(this.interactionHintActive=!1,this.uniforms.uInteractionHint.value=0)}if(this.backgroundRemovalEffectActive){const s=Qs();if(this.applyLaserEffectSettings(),n)this.uniforms.uEntranceSweep.value=.5;else{this.backgroundRemovalEffectElapsed+=r;const l=this.backgroundRemovalEffectElapsed%(s.cycleDuration/1e3);this.uniforms.uEntranceSweep.value=Math.min(l/(s.sweepDuration/1e3),1)}}this.uniforms.uTime.value=i/1e3,this.renderer.render(this.scene,this.camera);const a=!n&&this.options.wind>.001&&this.state.progress>.01;(this.springActive||this.detachedExitActive||this.preparedEntrance!==null||this.entranceActive||this.interactionHintActive||this.backgroundRemovalEffectActive&&!n||a)&&this.requestRender()},this.container=A,this.options=ci(void 0,e),this.camera.position.z=3,this.renderer=new Wu({alpha:!0,antialias:!0,powerPreference:"high-performance",premultipliedAlpha:!0,preserveDrawingBuffer:!0}),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=xe,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.renderer.domElement.style.touchAction="none",this.renderer.domElement.style.cursor="default",this.renderer.domElement.tabIndex=0,this.renderer.domElement.setAttribute("role","slider"),this.renderer.domElement.setAttribute("aria-valuemin","0"),this.renderer.domElement.setAttribute("aria-valuemax","100"),this.renderer.domElement.setAttribute("aria-valuenow","0"),this.renderer.domElement.setAttribute("aria-label","Interactive sticker. Drag a visible edge, or use arrow keys to preview the peel."),this.renderer.domElement.setAttribute("aria-keyshortcuts","ArrowUp ArrowRight ArrowDown ArrowLeft Space"),this.uniforms={uMap:{value:null},uPreparedMap:{value:null},uPreparedMix:{value:0},uPeel:{value:0},uPeelDepth:{value:0},uDetachedTension:{value:0},uRadius:{value:.08},uMaxAngle:{value:3.55},uWind:{value:this.options.wind},uTime:{value:0},uOrigin:{value:this.grabOrigin.clone()},uPeelDir:{value:this.activeDirection.clone()},uMeshSize:{value:new IA(this.meshWidth,this.meshHeight)},uTexel:{value:new IA(1/1024,1/512)},uEdgeFinishScale:{value:1},uEdgeBevelWidth:{value:this.options.edge.width},uEdgeFinishStrength:{value:this.options.edge.strength},uBackColor:{value:Ie(this.options.back.color,"#f7f5f2")},uGloss:{value:this.options.back.gloss},uRoughness:{value:this.options.back.roughness},uLightDirection:{value:new z(this.options.lighting.direction.x,this.options.lighting.direction.y,this.options.lighting.direction.z).normalize()},uLightIntensity:{value:this.options.lighting.intensity},uAmbientLight:{value:this.options.lighting.ambient},uLightSoftness:{value:this.options.lighting.softness},uMaterialType:{value:Ts(this.options.material.type)},uMaterialIntensity:{value:this.options.material.intensity},uMaterialScale:{value:this.options.material.scale},uHolographicGrain:{value:this.options.material.holographicGrain},uMaterialSeed:{value:this.options.material.seed},uMaterialBaked:{value:0},uHolographicColorA:{value:Ie(this.options.material.holographicColors[0],"#f2a7c5")},uHolographicColorB:{value:Ie(this.options.material.holographicColors[1],"#8edfd5")},uHolographicColorC:{value:Ie(this.options.material.holographicColors[2],"#9db4ea")},uShadowColor:{value:Ie(this.options.shadow.color,"#191823")},uShadowOpacity:{value:this.options.shadow.opacity},uSurfaceShadowEnabled:{value:this.options.peel.surfaceShadow?1:0},uShadowBlur:{value:this.options.shadow.blur},uShadowDistance:{value:.04},uShadowDirection:{value:new IA(.7,-.7)},uEntranceSweep:{value:-1},uEntranceAxis:{value:this.entranceAxis.clone()},uEntranceScaleProgress:{value:-1},uPreEntranceProgress:{value:0},uLaserCoreWidth:{value:.04},uLaserBandWidth:{value:.3},uLaserBandOpacity:{value:.46},uLaserBrightness:{value:1.18},uLaserHighlightIntensity:{value:.62},uBackgroundRemovalDistortion:{value:0},uRemovalDistortionRange:{value:.37},uRemovalDistortionStrength:{value:2.25},uRemovalRippleDensity:{value:12},uRemovalRippleSpeed:{value:4.2},uInteractionHint:{value:0},uInteractionHintRadius:{value:3},uInteractionHintColor:{value:Ie(Kf,"rgb(36, 126, 245)")},uPreserveFrontColor:{value:1},uOpacity:{value:1}};const t={...La.clone(aA.lights),...this.uniforms};this.stickerMaterial=new Qe({uniforms:t,vertexShader:Xu,fragmentShader:Yu,lights:!0,side:2,transparent:!0,depthTest:!0,depthWrite:!0}),this.stickerMaterial.alphaTest=.008,this.stickerMesh=new ze(this.geometry,this.stickerMaterial),this.stickerMesh.renderOrder=20,this.stickerMesh.receiveShadow=!0,this.residueMaterial=new Qe({uniforms:{...this.uniforms},vertexShader:ju,fragmentShader:Ku,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),this.residueMesh=new ze(this.geometry,this.residueMaterial),this.residueMesh.position.z=-.006,this.residueMesh.renderOrder=10,this.peelShadowDepthMaterial=new Qe({uniforms:{...this.uniforms},vertexShader:Ju,fragmentShader:qu,side:2,depthTest:!0,depthWrite:!0}),this.stickerMesh.castShadow=!0,this.stickerMesh.customDepthMaterial=this.peelShadowDepthMaterial,this.peelShadowLight.castShadow=!0,this.peelShadowLight.shadow.mapSize.set(this.options.quality==="high"?2048:1024,this.options.quality==="high"?2048:1024),this.peelShadowLight.shadow.bias=-1e-4,this.peelShadowLight.shadow.normalBias=.0015,this.peelShadowLight.target=this.peelShadowTarget,this.scene.add(this.peelShadowTarget,this.peelShadowLight),this.groundShadowMaterial=new Jl({color:Ie(this.options.shadow.color,"#191823"),opacity:this.options.shadow.opacity,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),this.groundShadowMesh=new ze(this.groundShadowGeometry,this.groundShadowMaterial),this.groundShadowMesh.position.z=-.012,this.groundShadowMesh.receiveShadow=!0,this.groundShadowMesh.renderOrder=5,this.scene.add(this.groundShadowMesh),this.scene.add(this.residueMesh),this.scene.add(this.stickerMesh);try{this.attach()}catch(i){throw this.destroy(),i}}attach(){const A=this.renderer.domElement;this.container.appendChild(A),A.addEventListener("pointerdown",this.onPointerDown),A.addEventListener("pointermove",this.onPointerMove),A.addEventListener("pointerup",this.onPointerUp),A.addEventListener("pointercancel",this.onPointerUp),A.addEventListener("lostpointercapture",this.onLostPointerCapture),A.addEventListener("pointerleave",this.onPointerLeave),A.addEventListener("keydown",this.onKeyDown),A.addEventListener("webglcontextlost",this.onContextLost),window.addEventListener("pointerup",this.onWindowPointerEnd,!0),window.addEventListener("pointercancel",this.onWindowPointerEnd,!0),window.addEventListener("blur",this.onWindowBlur),document.addEventListener("visibilitychange",this.onVisibilityChange),typeof ResizeObserver<"u"?(this.resizeObserver=new ResizeObserver(this.resizeObserved),this.resizeObserver.observe(this.container)):window.addEventListener("resize",this.scheduleResize),this.resize()}async setSource(A){if(this.destroyed)return;this.cancelPreparedEntrance(),this.requestedSource=A,this.sourceRebuildTimer!==null&&(window.clearTimeout(this.sourceRebuildTimer),this.sourceRebuildTimer=null);const e=++this.sourceRevision;try{const t=await Hs(A,this.options.outline);if(this.destroyed||e!==this.sourceRevision)return;this.source=A,this.options.source=A,this.applyArtwork(t)}catch(t){const i=t instanceof Error?t.message:"The sticker source failed to render.";throw this.emit("error",{message:i}),t}}async prepareSource(A,e={}){if(this.destroyed)throw new Error("The sticker renderer has been destroyed.");const t=ci(this.options,e),i=await Hs(A,t.outline);if(this.destroyed)throw new Error("The sticker renderer has been destroyed.");const r=this.createArtworkTexture(i,t.material,t.lighting);try{this.renderer.initTexture(r)}catch(a){throw r.dispose(),a}const n={payload:{artwork:i,texture:r,source:A,options:e},consume:null};return n.consume=(a,s)=>{if(this.preparedSourceStates.delete(n),a==="dispose"||this.destroyed){s.texture.dispose();return}if(a==="commit"){this.sourceRevision+=1,this.requestedSource=s.source,this.source=s.source,this.options=ci(this.options,{...s.options,source:s.source}),this.applyArtwork(s.artwork,s.texture);return}a==="entrance"&&(this.cancelPreparedEntrance(),this.entranceActive=!1,this.clearEntrancePose(),this.preparedEntrance={artwork:s.artwork,texture:s.texture,source:s.source,options:s.options,elapsed:0},this.uniforms.uPreparedMap.value=s.texture,this.uniforms.uPreparedMix.value=0,this.uniforms.uPreEntranceProgress.value=0,this.requestRender())},this.preparedSourceStates.add(n),Jf(n)}setOptions(A){if(this.destroyed)return;const e=this.options.outline,t=this.options.quality,i=this.options.display,r=this.materialKey();this.options=ci(this.options,A),this.artwork&&this.materialKey()!==r&&!A.source&&this.refreshMaterialTexture(),A.source&&this.setSource(A.source).catch(()=>{}),A.outline&&(this.options.outline.width!==e.width||this.options.outline.color!==e.color)&&!A.source&&(this.sourceRebuildTimer!==null&&window.clearTimeout(this.sourceRebuildTimer),this.sourceRebuildTimer=window.setTimeout(()=>{this.sourceRebuildTimer=null,this.setSource(this.requestedSource).catch(()=>{})},70)),(this.options.quality!==t||this.options.display.width!==i.width||this.options.display.height!==i.height)&&this.artwork&&this.updateMeshGeometry(this.artwork.aspect),this.applyOptionsToRenderer(),this.requestRender()}reset(){const A=this.pointerId;this.pointerId=null,this.state.dragging=!1,A!==null&&this.renderer.domElement.hasPointerCapture(A)&&this.renderer.domElement.releasePointerCapture(A),this.springActive=!1,this.springVelocity=0,this.springTargetDepth=0,this.dragDetached=!1,this.detachedTension=0,this.detachedExitActive=!1,this.detachedExitElapsed=0,this.detachedExitSpin=0,this.entranceActive=!1,this.entranceElapsed=0,this.interactionHintActive=!1,this.interactionHintElapsed=0,this.stickerMesh.position.set(0,0,0),this.stickerMesh.scale.set(1,1,1),this.stickerMesh.rotation.z=He.degToRad(this.options.tilt),this.uniforms.uEntranceSweep.value=-1,this.uniforms.uEntranceScaleProgress.value=-1,this.uniforms.uInteractionHint.value=0,this.peelAudio.reset(0),this.setCreaseDepth(0),this.state.pointer=null,this.state.grabPoint=null,this.renderer.domElement.style.cursor="default",this.updatePeelUniforms(),this.emit("peelchange",{amount:0,progress:0}),this.requestRender()}setPeelProgress(A,e={origin:{x:0,y:.5},target:{x:1,y:.5}}){if(this.destroyed||!this.artwork)return;this.springActive=!1,this.springVelocity=0,this.detachedExitActive=!1,this.entranceActive=!1,this.interactionHintActive=!1,this.state.dragging=!1,this.stickerMesh.position.set(0,0,0),this.stickerMesh.scale.set(1,1,1),this.stickerMesh.rotation.z=He.degToRad(this.options.tilt),this.uniforms.uEntranceSweep.value=-1,this.uniforms.uEntranceScaleProgress.value=-1,this.uniforms.uInteractionHint.value=0;const t=LA(e.origin.x,0,1)-.5,i=.5-LA(e.origin.y,0,1),r=e.target.x-.5,n=.5-e.target.y;this.grabOrigin.set(t*this.meshWidth,i*this.meshHeight);const a=(r-t)*this.meshWidth,s=(n-i)*this.meshHeight,l=Math.hypot(a,s);this.grabDirection.set(a,s),this.grabDirection.lengthSq()<1e-4&&this.grabDirection.set(1,0),this.grabDirection.normalize(),this.activeDirection.copy(this.grabDirection),this.grabExtent=this.projectionExtent(this.grabOrigin,this.activeDirection);const o=this.peelModelForDepth(this.grabExtent).projection,c=Math.max(l,o),u=LA(A,0,1)*c;this.setCreaseDepth(this.solveCreaseDepth(u));const h=Math.max(0,u-o);this.setDetachedDragOffset(this.activeDirection.x*h,this.activeDirection.y*h),this.state.grabPoint={x:this.grabOrigin.x,y:this.grabOrigin.y},this.state.pointer={x:this.grabOrigin.x+this.activeDirection.x*u,y:this.grabOrigin.y+this.activeDirection.y*u},this.updatePeelUniforms(),this.renderer.render(this.scene,this.camera)}setEntranceProgress(A){this.destroyed||!this.artwork||(this.springActive=!1,this.springVelocity=0,this.detachedExitActive=!1,this.entranceActive=!1,this.interactionHintActive=!1,this.state.dragging=!1,this.detachedTension=0,this.stickerMesh.position.set(0,0,0),this.stickerMesh.scale.set(1,1,1),this.stickerMesh.rotation.z=He.degToRad(this.options.tilt),this.uniforms.uInteractionHint.value=0,this.setCreaseDepth(0),this.state.grabPoint=null,this.state.pointer=null,this.configureEntranceAxis(),this.applyEntranceElapsed(LA(A,0,1)*Gs)&&this.clearEntrancePose(),this.updatePeelUniforms(),this.renderer.render(this.scene,this.camera))}setBackgroundRemovalEffect(A){this.destroyed||(this.backgroundRemovalEffectActive=A,this.backgroundRemovalEffectElapsed=0,this.configureEntranceAxis(),this.uniforms.uBackgroundRemovalDistortion.value=A?1:0,this.entranceActive||(this.uniforms.uEntranceSweep.value=A?0:-1),this.requestRender())}reappear(){this.destroyed||this.startEntranceAnimation()}setRenderScale(A){if(this.destroyed)return;const e=LA(A,1,6);Math.abs(e-this.renderScale)<.001||(this.renderScale=e,this.resize())}getRenderSnapshot(){const A=this.uniforms.uOrigin.value,e=this.uniforms.uPeelDir.value;return{progress:this.uniforms.uPeel.value,peelDepth:this.uniforms.uPeelDepth.value,peelRadius:this.uniforms.uRadius.value,detachedTension:this.uniforms.uDetachedTension.value,origin:{x:A.x,y:A.y},direction:{x:e.x,y:e.y},position:{x:this.stickerMesh.position.x,y:this.stickerMesh.position.y},scale:{x:this.stickerMesh.scale.x,y:this.stickerMesh.scale.y},rotation:this.stickerMesh.rotation.z,entranceSweep:this.uniforms.uEntranceSweep.value,entranceScaleProgress:this.uniforms.uEntranceScaleProgress.value,time:this.uniforms.uTime.value}}setRenderSnapshot(A){this.destroyed||!this.artwork||(this.springActive=!1,this.detachedExitActive=!1,this.entranceActive=!1,this.interactionHintActive=!1,this.state.dragging=!1,this.state.progress=A.progress,this.creaseDepth=A.peelDepth,this.effectivePeelRadius=A.peelRadius,this.detachedTension=A.detachedTension,this.grabOrigin.set(A.origin.x,A.origin.y),this.activeDirection.set(A.direction.x,A.direction.y),this.stickerMesh.position.set(A.position.x,A.position.y,0),this.stickerMesh.scale.set(A.scale.x,A.scale.y,1),this.stickerMesh.rotation.z=A.rotation,this.uniforms.uPeel.value=A.progress,this.uniforms.uPeelDepth.value=A.peelDepth,this.uniforms.uRadius.value=A.peelRadius,this.uniforms.uDetachedTension.value=A.detachedTension,this.uniforms.uOrigin.value.copy(this.grabOrigin),this.uniforms.uPeelDir.value.copy(this.activeDirection),this.uniforms.uEntranceSweep.value=A.entranceSweep,this.uniforms.uEntranceScaleProgress.value=A.entranceScaleProgress,this.uniforms.uTime.value=A.time,this.renderer.render(this.scene,this.camera))}resizeInternal(A){if(this.destroyed)return;const e=this.container.clientWidth,t=this.container.clientHeight,i=e!==this.measuredClientWidth||t!==this.measuredClientHeight;this.measuredClientWidth=e,this.measuredClientHeight=t;const r=Math.max(2,Math.round(e||640)),n=Math.max(2,Math.round(t||420)),a=this.options.quality==="low"?1.25:2,s=Math.min(Math.min(window.devicePixelRatio||1,a)*this.renderScale,6),l=r!==this.renderedWidth||n!==this.renderedHeight||s!==this.renderedPixelRatio;if(l){this.renderedWidth=r,this.renderedHeight=n,this.renderedPixelRatio=s,this.renderer.setPixelRatio(s),this.renderer.setSize(r,n,!1),this.viewportHeightPx=n,this.viewHeight=2,this.viewWidth=r/n*this.viewHeight,this.groundShadowMesh.scale.set(this.viewWidth*1.2,this.viewHeight*1.2,1),this.camera.left=-this.viewWidth/2,this.camera.right=this.viewWidth/2,this.camera.top=this.viewHeight/2,this.camera.bottom=-this.viewHeight/2,this.camera.updateProjectionMatrix();const c=this.peelShadowLight.shadow.camera,u=Math.max(this.viewWidth,this.viewHeight)*.9;c.left=-u,c.right=u,c.top=u,c.bottom=-u,c.near=.1,c.far=16,c.updateProjectionMatrix()}const o=this.artwork?this.updateMeshGeometry(this.artwork.aspect,A||l||i):!1;!l&&!o&&!i&&!A||(this.applyOptionsToRenderer(),this.renderer.render(this.scene,this.camera))}getState(){return{ready:this.state.ready,dragging:this.state.dragging,progress:this.state.progress,grabPoint:this.state.grabPoint?{...this.state.grabPoint}:null,pointer:this.state.pointer?{...this.state.pointer}:null}}destroy(){if(this.destroyed)return;this.destroyed=!0,cancelAnimationFrame(this.frameRequest),cancelAnimationFrame(this.resizeFrameRequest),cancelAnimationFrame(this.hoverFrameRequest),this.frameRequest=0,this.resizeFrameRequest=0,this.hoverFrameRequest=0;for(const e of this.preparedSourceStates){const{payload:t}=Xs(e);t?.texture.dispose()}this.preparedSourceStates.clear(),this.cancelPreparedEntrance(),this.sourceRebuildTimer!==null&&(window.clearTimeout(this.sourceRebuildTimer),this.sourceRebuildTimer=null),this.resizeObserver?.disconnect(),this.resizeObserver=null,window.removeEventListener("resize",this.scheduleResize);const A=this.renderer.domElement;A.removeEventListener("pointerdown",this.onPointerDown),A.removeEventListener("pointermove",this.onPointerMove),A.removeEventListener("pointerup",this.onPointerUp),A.removeEventListener("pointercancel",this.onPointerUp),A.removeEventListener("lostpointercapture",this.onLostPointerCapture),A.removeEventListener("pointerleave",this.onPointerLeave),A.removeEventListener("keydown",this.onKeyDown),A.removeEventListener("webglcontextlost",this.onContextLost),window.removeEventListener("pointerup",this.onWindowPointerEnd,!0),window.removeEventListener("pointercancel",this.onWindowPointerEnd,!0),window.removeEventListener("blur",this.onWindowBlur),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.texture?.dispose(),this.texture=null,this.artwork=null,this.source=ht,this.requestedSource=ht,this.options=ci(void 0,{}),this.uniforms.uMap.value=null,this.uniforms.uPreparedMap.value=null,this.geometry.dispose();for(const e of Object.keys(this.geometry.attributes))this.geometry.deleteAttribute(e);this.geometry.setIndex(null),this.groundShadowGeometry.dispose(),this.stickerMaterial.dispose(),this.residueMaterial.dispose(),this.peelShadowDepthMaterial.dispose(),this.groundShadowMaterial.dispose(),this.peelAudio.destroy(),this.renderer.dispose(),this.renderer.forceContextLoss(),A.width=1,A.height=1,A.remove()}materialKey(){const A=this.options.material,e=this.options.lighting;return JSON.stringify([A.type,A.intensity,A.scale,A.holographicGrain,A.seed,...A.holographicColors,e.direction.x,e.direction.y,e.direction.z,e.intensity])}createArtworkTexture(A,e=this.options.material,t=this.options.lighting){const i=Sf(A.canvas,A.width,A.height,e,t),r=new jl(i);return r.colorSpace=xe,r.minFilter=ki,r.magFilter=Ce,r.generateMipmaps=!0,r.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),r.needsUpdate=!0,r}refreshMaterialTexture(){if(!this.artwork)return;const A=this.texture,e=this.createArtworkTexture(this.artwork);this.texture=e,this.uniforms.uMap.value=e,this.uniforms.uPreparedMap.value===A&&(this.uniforms.uPreparedMap.value=e),this.uniforms.uMaterialBaked.value=1,A?.dispose()}cancelPreparedEntrance(){const A=this.preparedEntrance;this.preparedEntrance=null,A&&A.texture.dispose(),this.uniforms.uPreparedMix.value=0,this.uniforms.uPreEntranceProgress.value=0,this.uniforms.uPreparedMap.value=this.texture}applyArtwork(A,e=this.createArtworkTexture(A)){this.artwork=A;const t=this.texture;this.texture=e,this.uniforms.uMap.value=e,this.uniforms.uPreparedMap.value=e,this.uniforms.uPreparedMix.value=0,this.uniforms.uMaterialBaked.value=1,this.uniforms.uPreEntranceProgress.value=0,this.uniforms.uTexel.value.set(1/A.width,1/A.height),this.updateMeshGeometry(A.aspect),this.applyOptionsToRenderer(),this.reset(),this.state.ready=!0,t?.dispose(),this.emit("ready",{width:A.width,height:A.height,hasTransparency:A.hasTransparency})}updateMeshGeometry(A,e=!1){const t=this.viewHeight/Math.max(1,this.viewportHeightPx);let i,r;if(this.options.display.width>0&&this.options.display.height>0)i=this.options.display.width*t,r=this.options.display.height*t;else{const h=Math.min(this.viewWidth*.78,kf*t),g=Math.min(this.viewHeight*.58,Gf*t);i=h,r=i/A,r>g&&(r=g,i=r*A)}const n=this.options.display.width>0?Math.max(.001,i):Math.max(.34,i),a=this.options.display.height>0?Math.max(.001,r):Math.max(.25,r),s=this.options.quality==="high"?240:this.options.quality==="medium"?160:96,l=LA(Math.round(s),64,256),o=LA(Math.round(s/Math.max(A,.35)),56,192),c=l!==this.geometrySegmentsX||o!==this.geometrySegmentsY,u=Math.abs(n-this.geometryWidth)>1e-6||Math.abs(a-this.geometryHeight)>1e-6;if(!c&&!u)return e&&this.resetGeometryPeelState(),!1;if(this.meshWidth=n,this.meshHeight=a,c){const h=new yi(this.meshWidth,this.meshHeight,l,o),g=this.geometry;this.geometry=h,this.stickerMesh.geometry=h,this.residueMesh.geometry=h,g.dispose(),this.geometrySegmentsX=l,this.geometrySegmentsY=o}else{const h=this.geometry.attributes.position;let g=0;for(let v=0;v<=o;v+=1){const P=(.5-v/o)*this.meshHeight;for(let d=0;d<=l;d+=1){const f=(d/l-.5)*this.meshWidth;h.setXYZ(g,f,P,0),g+=1}}h.needsUpdate=!0,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere()}return this.geometryWidth=this.meshWidth,this.geometryHeight=this.meshHeight,this.resetGeometryPeelState(),!0}resetGeometryPeelState(){this.uniforms.uMeshSize.value.set(this.meshWidth,this.meshHeight),this.grabOrigin.set(-this.meshWidth/2,0),this.grabDirection.set(1,0),this.activeDirection.copy(this.grabDirection),this.grabExtent=this.meshWidth,this.setCreaseDepth(0),this.updatePeelUniforms()}applyOptionsToRenderer(){const A=He.degToRad(this.options.tilt);this.stickerMesh.rotation.z=A,this.residueMesh.rotation.z=A,this.uniforms.uBackColor.value=Ie(this.options.back.color,"#f7f5f2"),this.uniforms.uEdgeBevelWidth.value=LA(this.options.edge.width,.5,6),this.uniforms.uEdgeFinishStrength.value=LA(this.options.edge.strength,0,1),this.uniforms.uGloss.value=LA(this.options.back.gloss,0,1),this.uniforms.uRoughness.value=LA(this.options.back.roughness,0,1),this.uniforms.uMaterialType.value=Ts(this.options.material.type),this.uniforms.uMaterialIntensity.value=LA(this.options.material.intensity,0,1),this.uniforms.uMaterialScale.value=LA(this.options.material.scale,.2,4),this.uniforms.uHolographicGrain.value=LA(this.options.material.holographicGrain,0,1),this.uniforms.uMaterialSeed.value=this.options.material.seed,this.uniforms.uHolographicColorA.value=Ie(this.options.material.holographicColors[0],"#f2a7c5"),this.uniforms.uHolographicColorB.value=Ie(this.options.material.holographicColors[1],"#8edfd5"),this.uniforms.uHolographicColorC.value=Ie(this.options.material.holographicColors[2],"#9db4ea"),this.uniforms.uWind.value=Math.max(0,this.options.wind);const e=this.uniforms.uLightDirection.value;e.set(this.options.lighting.direction.x,this.options.lighting.direction.y,Math.max(.001,this.options.lighting.direction.z)),e.lengthSq()<1e-4?e.set(-.38,.52,.76):e.normalize();const t=LA(this.options.lighting.intensity,0,1.5),i=LA(this.options.lighting.ambient,0,1),r=LA(this.options.lighting.softness,0,1);this.uniforms.uLightIntensity.value=t,this.uniforms.uAmbientLight.value=i,this.uniforms.uLightSoftness.value=r;const n=this.options.sound.src.trim();this.peelAudio.configure({enabled:this.options.sound.enabled,src:n||Ps,volume:this.options.sound.volume,useBuiltInProfile:!n});const a=this.options.peel.maxAngle,s=a>Math.PI*2?He.degToRad(a):a;this.uniforms.uMaxAngle.value=LA(s,Os,Hf);const l=this.options.peel.radius,o=this.container.getBoundingClientRect(),c=l<=1?Math.max(.008,Math.min(this.meshWidth,this.meshHeight)*l):Math.max(.008,l/Math.max(o.height,1)*this.viewHeight);this.basePeelRadius=c*He.lerp(.82,1.16,LA(this.options.peel.stiffness,0,1)),this.residueMesh.visible=this.options.peel.residue,this.uniforms.uSurfaceShadowEnabled.value=this.options.peel.surfaceShadow?1:0,this.setCreaseDepth(this.creaseDepth),this.uniforms.uShadowColor.value=Ie(this.options.shadow.color,"#191823");const u=(.45+t*.75)*(1-i*.35),h=LA(this.options.shadow.opacity*u,0,.9);this.uniforms.uShadowOpacity.value=h,this.groundShadowMaterial.color.copy(Ie(this.options.shadow.color,"#191823")),this.groundShadowMaterial.opacity=h;const g=this.meshWidth/Math.max(this.viewWidth,.001)*Math.max(this.renderer.domElement.clientWidth,1),v=this.artwork?this.artwork.width/Math.max(g,1):1;this.uniforms.uEdgeFinishScale.value=LA(v,.75,8),this.uniforms.uInteractionHintRadius.value=this.artwork?LA(this.options.peel.grabWidth*v,3,Math.min(this.artwork.width,this.artwork.height)*.13):3;const P=He.lerp(.55,1.3,r);this.uniforms.uShadowBlur.value=Math.max(0,this.options.shadow.blur)*v*.34*P,this.uniforms.uShadowDistance.value=Math.max(0,this.options.shadow.distance)/Math.max(o.width||1,1)*this.viewWidth;const d=this.uniforms.uShadowDirection.value;if(d.set(-e.x,-e.y),d.lengthSq()<1e-4){const x=He.degToRad(this.options.shadow.angle);d.set(Math.cos(x),-Math.sin(x))}d.normalize();const f=1.6+this.uniforms.uShadowDistance.value*34;this.peelShadowLight.position.set(e.x*f,e.y*f,Math.max(.8,e.z*f)),this.peelShadowTarget.position.set(0,0,0),this.peelShadowLight.shadow.radius=LA(this.options.shadow.blur*He.lerp(.42,.72,r),1,56);const C=this.options.quality==="high"?2048:1024;this.peelShadowLight.shadow.mapSize.set(C,C),this.peelShadowLight.shadow.needsUpdate=!0}updatePeelUniforms(){this.uniforms.uPeel.value=this.state.progress,this.uniforms.uPeelDepth.value=this.creaseDepth,this.uniforms.uDetachedTension.value=this.detachedTension,this.uniforms.uRadius.value=this.effectivePeelRadius,this.uniforms.uOrigin.value.copy(this.grabOrigin),this.uniforms.uPeelDir.value.copy(this.activeDirection);const A=Math.round(LA(this.state.progress,0,1)*100);this.renderer.domElement.setAttribute("aria-valuenow",String(A)),this.renderer.domElement.setAttribute("aria-valuetext",`${A}% peeled`)}projectedGrabDistance(A,e,t=this.uniforms.uMaxAngle.value){if(A<=0)return 0;const i=Math.max(e,.001),r=Math.min(A/i,t),n=i*t;let a=-i*Math.sin(r);return A>n&&(a-=(A-n)*Math.cos(t)),Math.max(0,A+a)}peelModelForDepth(A){const e=LA(A,0,Math.max(this.grabExtent,.001));if(e<=1e-6)return{depth:0,radius:this.basePeelRadius,projection:0};const t=this.projectedGrabDistance(e,this.basePeelRadius);if(t>=e/Of)return{depth:e,radius:this.basePeelRadius,projection:t};const i=e/Os;return{depth:e,radius:i,projection:this.projectedGrabDistance(e,i)}}setCreaseDepth(A){const e=this.peelModelForDepth(A);this.creaseDepth=e.depth,this.effectivePeelRadius=e.radius,this.grabProjection=e.projection,this.state.progress=LA(this.creaseDepth/Math.max(this.grabExtent,.001),0,1)}solveCreaseDepth(A){const e=Math.max(0,A),t=this.peelModelForDepth(this.grabExtent);if(e>=t.projection)return t.depth;if(e<=1e-6)return 0;let i=0,r=this.grabExtent;for(let n=0;n<16;n+=1){const a=(i+r)*.5;this.peelModelForDepth(a).projection<e?i=a:r=a}return(i+r)*.5}setDetachedDragOffset(A,e){const t=He.degToRad(this.options.tilt),i=Math.cos(t),r=Math.sin(t),n=LA(Math.hypot(A,e)/Math.max(this.grabExtent*.45,.12),0,1);this.detachedTension=n*n*(3-2*n);const a=this.grabProjection-this.grabExtent*2,s=A+this.activeDirection.x*a*this.detachedTension,l=e+this.activeDirection.y*a*this.detachedTension;this.stickerMesh.position.set(s*i-l*r,s*r+l*i,0)}screenToLocal(A,e){const t=this.renderer.domElement.getBoundingClientRect(),i=(A-t.left)/Math.max(t.width,1)*2-1,r=1-(e-t.top)/Math.max(t.height,1)*2,n=i*(this.viewWidth/2),a=r*(this.viewHeight/2),s=-He.degToRad(this.options.tilt),l=Math.cos(s),o=Math.sin(s);return new IA(n*l-a*o,n*o+a*l)}sampleAlpha(A,e){if(!this.artwork)return 0;const t=LA(Math.round(A),0,this.artwork.width-1),i=LA(Math.round(e),0,this.artwork.height-1);return this.artwork.alpha[i*this.artwork.width+t]/255}sampleExterior(A,e){if(!this.artwork)return!1;const t=Math.round(A),i=Math.round(e);return t<0||t>=this.artwork.width||i<0||i>=this.artwork.height?!0:this.artwork.exteriorAlpha[i*this.artwork.width+t]===1}hitEdge(A){if(!this.artwork)return null;const e=A.x/this.meshWidth+.5,t=A.y/this.meshHeight+.5;if(e<-.04||e>1.04||t<-.04||t>1.04)return null;const i=e*(this.artwork.width-1),r=(1-t)*(this.artwork.height-1),n=this.meshWidth/Math.max(this.viewWidth,.001)*this.renderer.domElement.clientWidth,a=this.artwork.width/Math.max(n,1),s=LA(this.options.peel.grabWidth*a,3,Math.min(this.artwork.width,this.artwork.height)*.13),l=Math.ceil(s),o=Math.max(0,Math.floor(i-l)),c=Math.min(this.artwork.width-1,Math.ceil(i+l)),u=Math.max(0,Math.floor(r-l)),h=Math.min(this.artwork.height-1,Math.ceil(r+l));let g=-1,v=-1,P=s*s+1;for(let x=u;x<=h;x+=1)for(let D=o;D<=c;D+=1){const M=D-i,S=x-r,y=M*M+S*S;y>=P||y>s*s||this.sampleAlpha(D,x)<.1||(this.sampleExterior(D-1,x)||this.sampleExterior(D+1,x)||this.sampleExterior(D,x-1)||this.sampleExterior(D,x+1))&&(g=D,v=x,P=y)}if(g<0||v<0)return null;const d=new IA((g/Math.max(this.artwork.width-1,1)-.5)*this.meshWidth,(.5-v/Math.max(this.artwork.height-1,1))*this.meshHeight),f=LA(s*.14,1.5,4.5),C=new IA(this.sampleAlpha(g+f,v)-this.sampleAlpha(g-f,v),-(this.sampleAlpha(g,v+f)-this.sampleAlpha(g,v-f)));return C.lengthSq()<.008&&C.set(-d.x,-d.y),C.lengthSq()<1e-4&&C.set(1,0),C.normalize(),{local:d,inward:C}}projectionExtent(A,e){if(!this.artwork)return Math.max(this.meshHeight*.35,this.meshWidth);let t=this.meshHeight*.35;for(let i=0;i<this.artwork.support.length;i+=2){const r=(this.artwork.support[i]-.5)*this.meshWidth,n=(.5-this.artwork.support[i+1])*this.meshHeight;t=Math.max(t,(r-A.x)*e.x+(n-A.y)*e.y)}return Math.max(this.meshHeight*.35,t+this.meshHeight*.025)}finishPointerDrag(A){if(!this.state.dragging)return;const e=this.pointerId;this.pointerId=null,this.state.dragging=!1,e!==null&&this.renderer.domElement.hasPointerCapture(e)&&this.renderer.domElement.releasePointerCapture(e),this.renderer.domElement.style.cursor="grab";const t=this.options.peel.release,i=this.springActive?Math.min(this.state.progress,LA(this.springTargetDepth/Math.max(this.grabExtent,.001),0,1)):this.state.progress,r=t==="snap"&&i>=_n||t==="snap"&&this.options.peel.detachThreshold<_n&&i>=LA(this.options.peel.detachThreshold,.1,_n);r&&(this.setCreaseDepth(this.grabExtent),this.state.pointer={x:this.grabOrigin.x+this.activeDirection.x*this.grabProjection,y:this.grabOrigin.y+this.activeDirection.y*this.grabProjection},this.updatePeelUniforms(),this.peelAudio.update(this.state.progress,A,this.activeDirection.x)),this.peelAudio.end(this.state.progress);const n=t==="reset"||t==="snap"&&!r,a=this.reducedMotionQuery.matches;if(n||(this.springActive=!1,this.springVelocity=0,this.springTargetDepth=this.creaseDepth),n&&!a&&(this.springActive=!0,this.springVelocity=0,this.springTargetDepth=0),this.emit("peelend",{amount:this.state.progress,progress:this.state.progress,willReset:n}),r){if(a){if(this.emit("detachcomplete",{progress:1}),this.destroyed)return;this.reset();return}this.detachedExitActive=!0,this.detachedExitElapsed=0,this.detachedExitSpin=this.activeDirection.x>=0?-.42:.42}if(n&&a){this.reset();return}this.requestRender()}requestRender(){this.destroyed||this.frameRequest||(this.frameRequest=requestAnimationFrame(this.renderFrame))}startInteractionHint(){this.interactionHintActive=!0,this.interactionHintElapsed=0,this.uniforms.uInteractionHint.value=1,this.requestRender()}configureEntranceAxis(){this.entranceAxis.set(this.meshWidth>=this.meshHeight?1:0,this.meshWidth>=this.meshHeight?0:-1),this.uniforms.uEntranceAxis.value.copy(this.entranceAxis)}applyEntranceElapsed(A){const e=LA(A/Gs,0,1);this.uniforms.uEntranceScaleProgress.value=e;const t=LA((A-Ws)/Xf,0,1);return this.uniforms.uEntranceSweep.value=A<Ws?-1:t,e>=1&&t>=1}clearEntrancePose(){this.uniforms.uEntranceScaleProgress.value=-1,this.uniforms.uEntranceSweep.value=-1}startEntranceAnimation(){this.reset(),this.peelAudio.playReappear(),this.entranceActive=!0,this.entranceElapsed=0,this.configureEntranceAxis(),this.applyLaserEffectSettings(),this.applyEntranceElapsed(0),this.requestRender()}applyLaserEffectSettings(){const A=Qs();this.uniforms.uLaserCoreWidth.value=A.coreWidth,this.uniforms.uLaserBandWidth.value=A.bandWidth,this.uniforms.uLaserBandOpacity.value=A.bandOpacity,this.uniforms.uLaserBrightness.value=A.brightness,this.uniforms.uLaserHighlightIntensity.value=A.highlightIntensity,this.uniforms.uRemovalDistortionRange.value=A.distortionRange,this.uniforms.uRemovalDistortionStrength.value=A.distortionStrength,this.uniforms.uRemovalRippleDensity.value=A.rippleDensity,this.uniforms.uRemovalRippleSpeed.value=A.rippleSpeed}emit(A,e){this.container.dispatchEvent(new CustomEvent(A,{detail:e}))}};function Zf(A){return{ready:A.ready,dragging:A.dragging,progress:A.progress,grabPoint:A.grabPoint?{...A.grabPoint}:null,pointer:A.pointer?{...A.pointer}:null}}function $f(A){return{...A,origin:{...A.origin},direction:{...A.direction},position:{...A.position},scale:{...A.scale}}}var Ad=class{constructor(A){this.resize=()=>{this.renderer?.resize()},this.renderer=A,this.lastState=A.getState(),this.lastSnapshot=A.getRenderSnapshot()}async setSource(A){await this.renderer?.setSource(A)}async prepareSource(A,e){if(!this.renderer)throw new Error("The sticker renderer has been destroyed.");return this.renderer.prepareSource(A,e)}setOptions(A){this.renderer?.setOptions(A)}reset(){this.renderer?.reset()}setPeelProgress(A,e){this.renderer?.setPeelProgress(A,e)}setEntranceProgress(A){this.renderer?.setEntranceProgress(A)}setBackgroundRemovalEffect(A){this.renderer?.setBackgroundRemovalEffect(A)}reappear(){this.renderer?.reappear()}setRenderScale(A){this.renderer?.setRenderScale(A)}getRenderSnapshot(){return this.renderer?(this.lastSnapshot=this.renderer.getRenderSnapshot(),this.lastSnapshot):$f(this.lastSnapshot)}setRenderSnapshot(A){this.renderer?.setRenderSnapshot(A)}getState(){return this.renderer?(this.lastState=this.renderer.getState(),this.lastState):Zf(this.lastState)}destroy(){const A=this.renderer;if(A){this.lastState=A.getState(),this.lastSnapshot=A.getRenderSnapshot();try{A.destroy()}finally{this.renderer=null}}}};function ed(A){return new Ad(A)}async function js(A,e={}){if(typeof document>"u")throw new Error("Sticker Forge can only be created in a browser.");const t=typeof A=="string"?document.querySelector(A):A;if(!t)throw new Error("Sticker Forge could not find its target element.");const i=new qf(t,e);try{return await i.setSource(e.source??ht),ed(i)}catch(r){throw i.destroy(),r}}var td=typeof HTMLElement>"u"?class{}:HTMLElement,Qn=class extends td{constructor(...A){super(...A),this.instance=null,this.instancePromise=null,this.mountElement=null,this.pendingOptions={},this.pendingSource=null,this.lifecycleRevision=0}static get observedAttributes(){return["text"]}connectedCallback(){if(!this.shadowRoot){const A=this.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=`
        :host { display: block; min-width: 160px; min-height: 120px; }
        .mount { width: 100%; height: 100%; min-height: inherit; }
      `,this.mountElement=document.createElement("div"),this.mountElement.className="mount",A.append(e,this.mountElement);for(const t of["peelstart","peelchange","peelend","detachcomplete","cyclecomplete","error"])this.mountElement.addEventListener(t,i=>{this.dispatchEvent(new CustomEvent(t,{detail:i.detail,bubbles:!0,composed:!0}))})}this.pendingSource||(this.pendingSource={...ht,text:this.getAttribute("text")||ht.text}),this.ensureInstance().catch(()=>{})}disconnectedCallback(){this.destroy()}attributeChangedCallback(A,e,t){if(A==="text"&&e!==t){const i={...ht,text:t||" "};this.pendingSource=i,this.isConnected&&this.setSource(i).catch(()=>{})}}async setSource(A){this.pendingSource=A,await(await this.ensureInstance()).setSource(A)}async prepareSource(A,e){return(await this.ensureInstance()).prepareSource(A,e)}setOptions(A){this.pendingOptions=Ys(this.pendingOptions,A),this.instance?.setOptions(A)}reset(){this.instance?.reset()}setPeelProgress(A,e){this.instance?.setPeelProgress(A,e)}setEntranceProgress(A){this.instance?.setEntranceProgress(A)}setBackgroundRemovalEffect(A){this.instance?.setBackgroundRemovalEffect(A)}reappear(){this.instance?.reappear()}setRenderScale(A){this.instance?.setRenderScale(A)}getRenderSnapshot(){return this.instance?.getRenderSnapshot()??{progress:0,peelDepth:0,peelRadius:0,detachedTension:0,origin:{x:0,y:0},direction:{x:1,y:0},position:{x:0,y:0},scale:{x:1,y:1},rotation:0,entranceSweep:-1,entranceScaleProgress:-1,time:0}}setRenderSnapshot(A){this.instance?.setRenderSnapshot(A)}resize(){this.instance?.resize()}getState(){return this.instance?.getState()??{ready:!1,dragging:!1,progress:0,grabPoint:null,pointer:null}}destroy(){this.lifecycleRevision+=1;const A=this.instancePromise;this.instance?.destroy(),this.instance=null,this.instancePromise=null,A&&A.then(e=>{e.destroy()}).catch(()=>{})}ensureInstance(){if(this.instance)return Promise.resolve(this.instance);if(this.instancePromise)return this.instancePromise;if(!this.mountElement)return Promise.reject(new Error("The sticker element is not connected."));const A=Ys(this.pendingOptions,{source:this.pendingSource??ht}),e=this.lifecycleRevision,t=js(this.mountElement,A);return this.instancePromise=t,t.then(i=>{if(this.instancePromise===t&&(this.instancePromise=null),e!==this.lifecycleRevision||!this.isConnected){i.destroy();return}this.instance=i,this.dispatchEvent(new CustomEvent("ready",{bubbles:!0,composed:!0}))}).catch(i=>{this.instancePromise===t&&(this.instancePromise=null);const r=i instanceof Error?i.message:"Sticker Forge could not initialize.";this.dispatchEvent(new CustomEvent("error",{detail:{message:r},bubbles:!0,composed:!0}))}),t}};function Ks(A="sticker-forge"){if(!(typeof customElements>"u")&&!customElements.get(A)){const e=A==="sticker-forge"?Qn:class extends Qn{};customElements.define(A,e)}}Ks();export{Wf as STICKER_ENTRANCE_DURATION_MS,Qn as StickerForgeElement,js as createSticker,Ks as defineStickerForge,If as imageSourceHasTransparency,Us as sanitizeSvgMarkup};
