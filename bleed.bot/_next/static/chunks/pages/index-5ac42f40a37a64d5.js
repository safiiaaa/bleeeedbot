(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1951)}])},5567:function(e,t){"use strict";t.Z={src:"/_next/static/media/bleed.9b1bbade.png",height:500,width:500,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAzElEQVR42mMAAV1GJqaYxFg2BjA4xRXcPGtqcssETwYMkLZKcOqc+psTFk74n9s3fSdc3EpHqy41THFHZpJnTf+U2vdLVnf9r5oyYw5cgb2uwvYAZ/P/UfnF//PKqj9XTJj8P6Bhii9EtmwqI4iy1bGVi6jquBpR1f4/pKTpf1RZYxLcBOvw+FzvnLKWpLZJh5I7p/5PaJ5wKySvUgCuwMDLv8s1Kft9ctvklPimniveGQW/gMI8cAW2vpEsQIoLxLYMjIjT8/TfApMDAEpaSV88JstEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},9151:function(e,t,n){"use strict";function i(e){let{src:t}=e;return t}n.r(t),n.d(t,{default:function(){return i}})},1951:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var i=n(5893),s=n(7294),o=n(6005);function r(e){return[(e>>16&255)/255,(e>>8&255)/255,(255&e)/255]}["SCREEN","LINEAR_LIGHT"].reduce((e,t,n)=>Object.assign(e,{[t]:n}),{});class a{setSize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:640,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;this.width=e,this.height=t,this.canvas.width=e,this.canvas.height=t,this.gl.viewport(0,0,e,t),this.commonUniforms.resolution.value=[e,t],this.commonUniforms.aspectRatio.value=e/t,this.debug("MiniGL.setSize",{width:e,height:t})}setOrthographicCamera(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-2e3,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2e3;this.commonUniforms.projectionMatrix.value=[2/this.width,0,0,0,0,2/this.height,0,0,0,0,2/(i-s),0,e,t,n,1],this.debug("setOrthographicCamera",this.commonUniforms.projectionMatrix.value)}render(){this.gl.clearColor(0,0,0,0),this.gl.clearDepth(1),this.meshes.forEach(e=>e.draw())}constructor(e,t,n,i=!1){let s=this,o=-1!==document.location.search.toLowerCase().indexOf("debug=webgl");s.canvas=e,s.gl=s.canvas.getContext("webgl",{antialias:!0}),s.meshes=[];let r=s.gl;t&&n&&this.setSize(t,n),s.lastDebugMsg,s.debug=i&&o?function(e){let t=new Date;t-s.lastDebugMsg>1e3&&console.log("---"),console.log(t.toLocaleTimeString()+Array(Math.max(0,32-e.length)).join(" ")+e+": ",...Array.from(arguments).slice(1)),s.lastDebugMsg=t}:()=>{},Object.defineProperties(s,{Material:{enumerable:!1,value:class{attachUniforms(e,t){let n=this;void 0===e?Object.entries(t).forEach(e=>{let[t,i]=e;n.attachUniforms(t,i)}):"array"==t.type?t.value.forEach((t,i)=>n.attachUniforms("".concat(e,"[").concat(i,"]"),t)):"struct"==t.type?Object.entries(t.value).forEach(t=>{let[i,s]=t;return n.attachUniforms("".concat(e,".").concat(i),s)}):(s.debug("Material.attachUniforms",{name:e,uniform:t}),n.uniformInstances.push({uniform:t,location:r.getUniformLocation(n.program,e)}))}constructor(e,t,n={}){let i=this;function o(e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS)||console.error(r.getShaderInfoLog(n)),s.debug("Material.compileShaderSource",{source:t}),n}function a(e,t){return Object.entries(e).map(e=>{let[n,i]=e;return i.getDeclaration(n,t)}).join("\n")}i.uniforms=n,i.uniformInstances=[];let l="\n              precision highp float;\n            ";i.vertexSource="\n              ".concat(l,"\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ").concat(a(s.commonUniforms,"vertex"),"\n              ").concat(a(n,"vertex"),"\n              ").concat(e,"\n            "),i.Source="\n              ".concat(l,"\n              ").concat(a(s.commonUniforms,"fragment"),"\n              ").concat(a(n,"fragment"),"\n              ").concat(t,"\n            "),i.vertexShader=o(r.VERTEX_SHADER,i.vertexSource),i.fragmentShader=o(r.FRAGMENT_SHADER,i.Source),i.program=r.createProgram(),r.attachShader(i.program,i.vertexShader),r.attachShader(i.program,i.fragmentShader),r.linkProgram(i.program),r.getProgramParameter(i.program,r.LINK_STATUS)||console.error(r.getProgramInfoLog(i.program)),r.useProgram(i.program),i.attachUniforms(void 0,s.commonUniforms),i.attachUniforms(void 0,i.uniforms)}}},Uniform:{enumerable:!1,value:class{update(e){void 0!==this.value&&r["uniform".concat(this.typeFn)](e,0===this.typeFn.indexOf("Matrix")?this.transpose:this.value,0===this.typeFn.indexOf("Matrix")?this.value:null)}getDeclaration(e,t,n){if(this.excludeFrom!==t){if("array"===this.type)return this.value[0].getDeclaration(e,t,this.value.length)+"\nconst int ".concat(e,"_length = ").concat(this.value.length,";");if("struct"===this.type){let i=e.replace("u_","");return i=i.charAt(0).toUpperCase()+i.slice(1),"uniform struct ".concat(i," \n                                 {\n")+Object.entries(this.value).map(e=>{let[n,i]=e;return i.getDeclaration(n,t).replace(/^uniform/,"")}).join("")+"\n} ".concat(e).concat(n>0?"[".concat(n,"]"):"",";")}return"uniform ".concat(this.type," ").concat(e).concat(n>0?"[".concat(n,"]"):"",";")}}constructor(e){this.type="float",Object.assign(this,e),this.typeFn=({float:"1f",int:"1i",vec2:"2fv",vec3:"3fv",vec4:"4fv",mat4:"Matrix4fv"})[this.type]||"1f",this.update()}}},PlaneGeometry:{enumerable:!1,value:class{setTopology(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this;n.xSegCount=e,n.ySegCount=t,n.vertexCount=(n.xSegCount+1)*(n.ySegCount+1),n.quadCount=n.xSegCount*n.ySegCount*2,n.attributes.uv.values=new Float32Array(2*n.vertexCount),n.attributes.uvNorm.values=new Float32Array(2*n.vertexCount),n.attributes.index.values=new Uint16Array(3*n.quadCount);for(let e=0;e<=n.ySegCount;e++)for(let t=0;t<=n.xSegCount;t++){let i=e*(n.xSegCount+1)+t;if(n.attributes.uv.values[2*i]=t/n.xSegCount,n.attributes.uv.values[2*i+1]=1-e/n.ySegCount,n.attributes.uvNorm.values[2*i]=t/n.xSegCount*2-1,n.attributes.uvNorm.values[2*i+1]=1-e/n.ySegCount*2,t<n.xSegCount&&e<n.ySegCount){let s=e*n.xSegCount+t;n.attributes.index.values[6*s]=i,n.attributes.index.values[6*s+1]=i+1+n.xSegCount,n.attributes.index.values[6*s+2]=i+1,n.attributes.index.values[6*s+3]=i+1,n.attributes.index.values[6*s+4]=i+1+n.xSegCount,n.attributes.index.values[6*s+5]=i+2+n.xSegCount}}n.attributes.uv.update(),n.attributes.uvNorm.update(),n.attributes.index.update(),s.debug("Geometry.setTopology",{uv:n.attributes.uv,uvNorm:n.attributes.uvNorm,index:n.attributes.index})}setSize(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"xz",i=this;i.width=e,i.height=t,i.orientation=n,i.attributes.position.values&&i.attributes.position.values.length===3*i.vertexCount||(i.attributes.position.values=new Float32Array(3*i.vertexCount));let o=-(e/2),r=-(t/2),a=e/i.xSegCount,l=t/i.ySegCount;for(let e=0;e<=i.ySegCount;e++){let t=r+e*l;for(let s=0;s<=i.xSegCount;s++){let r=o+s*a,l=e*(i.xSegCount+1)+s;i.attributes.position.values[3*l+"xyz".indexOf(n[0])]=r,i.attributes.position.values[3*l+"xyz".indexOf(n[1])]=-t}}i.attributes.position.update(),s.debug("Geometry.setSize",{position:i.attributes.position})}constructor(e,t,n,i,o){r.createBuffer(),this.attributes={position:new s.Attribute({target:r.ARRAY_BUFFER,size:3}),uv:new s.Attribute({target:r.ARRAY_BUFFER,size:2}),uvNorm:new s.Attribute({target:r.ARRAY_BUFFER,size:2}),index:new s.Attribute({target:r.ELEMENT_ARRAY_BUFFER,size:3,type:r.UNSIGNED_SHORT})},this.setTopology(n,i),this.setSize(e,t,o)}}},Mesh:{enumerable:!1,value:class{draw(){r.useProgram(this.material.program),this.material.uniformInstances.forEach(e=>{let{uniform:t,location:n}=e;return t.update(n)}),this.attributeInstances.forEach(e=>{let{attribute:t,location:n}=e;return t.use(n)}),r.drawElements(this.wireframe?r.LINES:r.TRIANGLES,this.geometry.attributes.index.values.length,r.UNSIGNED_SHORT,0)}remove(){s.meshes=s.meshes.filter(e=>e!=this)}constructor(e,t){let n=this;n.geometry=e,n.material=t,n.wireframe=!1,n.attributeInstances=[],Object.entries(n.geometry.attributes).forEach(e=>{let[t,i]=e;n.attributeInstances.push({attribute:i,location:i.attach(t,n.material.program)})}),s.meshes.push(n),s.debug("Mesh.constructor",{mesh:n})}}},Attribute:{enumerable:!1,value:class{update(){void 0!==this.values&&(r.bindBuffer(this.target,this.buffer),r.bufferData(this.target,this.values,r.STATIC_DRAW))}attach(e,t){let n=r.getAttribLocation(t,e);return this.target===r.ARRAY_BUFFER&&(r.enableVertexAttribArray(n),r.vertexAttribPointer(n,this.size,this.type,this.normalized,0,0)),n}use(e){r.bindBuffer(this.target,this.buffer),this.target===r.ARRAY_BUFFER&&(r.enableVertexAttribArray(e),r.vertexAttribPointer(e,this.size,this.type,this.normalized,0,0))}constructor(e){this.type=r.FLOAT,this.normalized=!1,this.buffer=r.createBuffer(),Object.assign(this,e),this.update()}}}});let a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];s.commonUniforms={projectionMatrix:new s.Uniform({type:"mat4",value:a}),modelViewMatrix:new s.Uniform({type:"mat4",value:a}),resolution:new s.Uniform({type:"vec2",value:[1,1]}),aspectRatio:new s.Uniform({type:"float",value:1})}}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=class{async connect(){this.shaderFiles={vertex:"varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",noise:"//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",blend:"//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n	return blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n	return 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n	return base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n	return blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n	return max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n	// Note : Same implementation as BlendSubtractf\n	return max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n	// Note : Same implementation as BlendSubtract\n	return max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n	// Note : Same implementation as BlendAddf\n	return min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n	// Note : Same implementation as BlendAdd\n	return min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",fragment:"varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}"},this.conf={presetName:"",wireframe:!1,density:[.06,.16],zoom:1,rotation:0,playing:!0},document.querySelectorAll("canvas").length<1?console.log("DID NOT LOAD CANVAS"):(this.minigl=new a(this.el,null,null,!0),requestAnimationFrame(()=>{this.el&&(this.computedCanvasStyle=getComputedStyle(this.el),this.waitForCssVars())}))}disconnect(){this.scrollObserver&&(window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("keydown",this.handleKeyDown),this.scrollObserver.disconnect()),window.removeEventListener("resize",this.resize)}initMaterial(){this.uniforms={u_time:new this.minigl.Uniform({value:0}),u_shadow_power:new this.minigl.Uniform({value:5}),u_darken_top:new this.minigl.Uniform({value:""===this.el.dataset.jsDarkenTop?1:0}),u_active_colors:new this.minigl.Uniform({value:this.activeColors,type:"vec4"}),u_global:new this.minigl.Uniform({value:{noiseFreq:new this.minigl.Uniform({value:[this.freqX,this.freqY],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:5e-6})},type:"struct"}),u_vertDeform:new this.minigl.Uniform({value:{incline:new this.minigl.Uniform({value:Math.sin(this.angle)/Math.cos(this.angle)}),offsetTop:new this.minigl.Uniform({value:-.5}),offsetBottom:new this.minigl.Uniform({value:-.5}),noiseFreq:new this.minigl.Uniform({value:[3,4],type:"vec2"}),noiseAmp:new this.minigl.Uniform({value:this.amp}),noiseSpeed:new this.minigl.Uniform({value:50}),noiseFlow:new this.minigl.Uniform({value:50}),noiseSeed:new this.minigl.Uniform({value:this.seed})},type:"struct",excludeFrom:"fragment"}),u_baseColor:new this.minigl.Uniform({value:this.sectionColors[0],type:"vec3",excludeFrom:"fragment"}),u_waveLayers:new this.minigl.Uniform({value:[],excludeFrom:"fragment",type:"array"})};for(let e=1;e<this.sectionColors.length;e+=1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({value:{color:new this.minigl.Uniform({value:this.sectionColors[e],type:"vec3"}),noiseFreq:new this.minigl.Uniform({value:[2+e/this.sectionColors.length,3+e/this.sectionColors.length],type:"vec2"}),noiseSpeed:new this.minigl.Uniform({value:11+.3*e}),noiseFlow:new this.minigl.Uniform({value:6.5+.3*e}),noiseSeed:new this.minigl.Uniform({value:this.seed+10*e}),noiseFloor:new this.minigl.Uniform({value:.1}),noiseCeil:new this.minigl.Uniform({value:.63+.07*e})},type:"struct"}));return this.vertexShader=[this.shaderFiles.noise,this.shaderFiles.blend,this.shaderFiles.vertex].join("\n\n"),new this.minigl.Material(this.vertexShader,this.shaderFiles.fragment,this.uniforms)}initMesh(){this.material=this.initMaterial(),this.geometry=new this.minigl.PlaneGeometry,this.mesh=new this.minigl.Mesh(this.geometry,this.material)}shouldSkipFrame(e){return!!window.document.hidden||!this.conf.playing||parseInt(e,10)%2==0||void 0}updateFrequency(e){this.freqX+=e,this.freqY+=e}toggleColor(e){this.activeColors[e]=0===this.activeColors[e]?1:0}showGradientLegend(){this.width>this.minWidth&&(this.isGradientLegendVisible=!0,document.body.classList.add("isGradientLegendVisible"))}hideGradientLegend(){this.isGradientLegendVisible=!1,document.body.classList.remove("isGradientLegendVisible")}init(){this.initGradientColors(),this.initMesh(),this.resize(),requestAnimationFrame(this.animate),window.addEventListener("resize",this.resize)}waitForCssVars(){if(this.computedCanvasStyle&&-1!==this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#"))this.init(),this.addIsLoadedClass();else{if(this.cssVarRetries+=1,this.cssVarRetries>this.maxCssVarRetries)return this.sectionColors=[16711680,16711680,16711935,65280,255],void this.init();requestAnimationFrame(()=>this.waitForCssVars())}}initGradientColors(){this.sectionColors=["--gradient-color-1","--gradient-color-2","--gradient-color-3","--gradient-color-4"].map(e=>{let t=this.computedCanvasStyle.getPropertyValue(e).trim();if(4===t.length){let e=t.substr(1).split("").map(e=>e+e).join("");t="#".concat(e)}return t&&"0x".concat(t.substr(1))}).filter(Boolean).map(r)}destroy(){this.destroyed=!0}constructor(...e){l(this,"destroyed",!1),l(this,"el",void 0),l(this,"cssVarRetries",0),l(this,"maxCssVarRetries",200),l(this,"angle",0),l(this,"isLoadedClass",!1),l(this,"isScrolling",!1),l(this,"scrollingTimeout",void 0),l(this,"scrollingRefreshDelay",200),l(this,"isIntersecting",!1),l(this,"shaderFiles",void 0),l(this,"vertexShader",void 0),l(this,"sectionColors",void 0),l(this,"computedCanvasStyle",void 0),l(this,"conf",void 0),l(this,"uniforms",void 0),l(this,"t",1253106),l(this,"last",0),l(this,"width",void 0),l(this,"minWidth",1111),l(this,"height",600),l(this,"xSegCount",void 0),l(this,"ySegCount",void 0),l(this,"mesh",void 0),l(this,"material",void 0),l(this,"geometry",void 0),l(this,"minigl",void 0),l(this,"scrollObserver",void 0),l(this,"amp",320),l(this,"seed",6),l(this,"freqX",14e-5),l(this,"freqY",29e-5),l(this,"freqDelta",1e-5),l(this,"activeColors",[1,1,1,1]),l(this,"isMetaKey",!1),l(this,"isGradientLegendVisible",!1),l(this,"isMouseDown",!1),l(this,"handleScroll",()=>{clearTimeout(this.scrollingTimeout),this.scrollingTimeout=setTimeout(this.handleScrollEnd,this.scrollingRefreshDelay),this.isGradientLegendVisible&&this.hideGradientLegend(),this.conf.playing&&(this.isScrolling=!0,this.pause())}),l(this,"handleScrollEnd",()=>{this.isScrolling=!1,this.isIntersecting&&this.play()}),l(this,"resize",()=>{this.width=window.innerWidth,this.minigl.setSize(this.width,this.height),this.minigl.setOrthographicCamera(),this.xSegCount=Math.ceil(this.width*this.conf.density[0]),this.ySegCount=Math.ceil(this.height*this.conf.density[1]),this.mesh.geometry.setTopology(this.xSegCount,this.ySegCount),this.mesh.geometry.setSize(this.width,this.height),this.mesh.material.uniforms.u_shadow_power.value=this.width<600?5:6}),l(this,"handleMouseDown",e=>{this.isGradientLegendVisible&&(this.isMetaKey=e.metaKey,this.isMouseDown=!0,!1===this.conf.playing&&requestAnimationFrame(this.animate))}),l(this,"handleMouseUp",()=>{this.isMouseDown=!1}),l(this,"animate",e=>{if(!this.shouldSkipFrame(e)||this.isMouseDown){if(this.t+=Math.min(e-this.last,1e3/15),this.last=e,this.isMouseDown){let e=160;this.isMetaKey&&(e=-160),this.t+=e}this.mesh.material.uniforms.u_time.value=this.t,this.minigl.render()}if(0!==this.last&&this.isStatic)return this.minigl.render(),void this.disconnect();(this.conf.playing||this.isMouseDown)&&requestAnimationFrame(this.animate)}),l(this,"addIsLoadedClass",()=>{this.isLoadedClass||(this.isLoadedClass=!0,this.el.classList.add("isLoaded"),setTimeout(()=>{!this.destroyed&&this.el.parentElement&&this.el.parentElement.classList.add("isLoaded")},3e3))}),l(this,"pause",()=>{this.conf.playing=!1}),l(this,"play",()=>{requestAnimationFrame(this.animate),this.conf.playing=!0}),l(this,"initGradient",e=>(this.el=document.querySelector(e),this.connect(),this))}};let d=()=>{let e=(0,o.q_)({from:{opacity:0},to:{opacity:.4},config:{mass:2,tension:40,friction:30}});return(0,s.useEffect)(()=>{let e=new c;return e.amp=200,e.initGradient("#gradient-canvas"),()=>e.destroy()},[]),(0,i.jsx)(o.q.canvas,{style:e,id:"gradient-canvas"})};var h=n(5675),u=n.n(h),b=n(1664),m=n.n(b),v=n(9178),g=n(8024),f=n(5474),p=n(2461),y=n(5732),x=n(5301);let w={mass:2,tension:150,friction:35};var S=n(5567),C=n(9734),L=n(2077),_=n.n(L);let A=e=>{let{started:t,link:n,linkIndex:r}=e,[a,l]=(0,o.q_)(()=>({from:{opacity:0,y:40},config:w}),[]);return(0,s.useEffect)(()=>{t&&l.start({to:{opacity:1,y:0},delay:1100+50*r})},[t,l,r]),(0,i.jsx)(o.q.div,{style:a,className:"inline-block will-change-transform",children:(0,i.jsxs)(m(),{href:n.href,className:"text-lg font-semibold flex items-center shadow-lg transition duration-200 ease-linear hover:bg-bleed-background-750 gap-x-4 group bg-bleed-background-800 py-3.5 px-4 rounded-2xl",children:[(0,i.jsx)(n.Icon,{className:"h-6 w-6 inline-block text-neutral-400 transition duration-200 ease-linear group-hover:text-bleed-blue-1",strokeWidth:1.5}),n.name]},n.name)})},D=e=>{let{started:t}=e,n=[{name:"cmds",href:"/commands",Icon:v.Z},{name:"faq",href:"/faq",Icon:g.Z},{name:"docs",href:"https://docs.bleed.bot",Icon:f.Z},{name:"discord",href:"https://discord.gg/bleed",Icon:p.Z},{name:"invite",href:"https://discord.com/api/oauth2/authorize?client_id=593921296224747521&permissions=8&scope=bot%20applications.commands",Icon:y.Z},{name:"status",href:"/status",Icon:x.Z}];return(0,i.jsx)("div",{className:"mt-8 max-w-[29rem] mx-auto w-full grid grid-cols-2 sm:grid-cols-3 gap-3",children:n.map((e,n)=>(0,i.jsx)(A,{started:t,link:e,linkIndex:n},n))})},F=()=>{let[e,t]=(0,s.useState)(!1),{usersCount:n,serversCount:r}=function(){let{data:e}=(0,C.ZP)("shards.json",{refreshInterval:1e4});return(0,s.useMemo)(()=>e&&e.shards?{usersCount:_()(e.shards.map(e=>e.cached_user_count).reduce((e,t)=>e+t)).format("0,0"),serversCount:_()(e.shards.map(e=>e.server_count).reduce((e,t)=>e+t)).format("0,0")}:{usersCount:"?",serversCount:"?"},[e])}(),a=(0,o.q_)({from:{opacity:0,scale:.5,y:400},to:{opacity:1,scale:e?1:1.1,y:e?0:100},config:w,delay:400});(0,s.useEffect)(()=>{let e=setTimeout(()=>{t(!0)},600);return()=>clearTimeout(e)},[t]);let[l,c]=(0,o.q_)(()=>({from:{opacity:0,y:100},config:w}),[]),[h,b]=(0,o.q_)(()=>({from:{opacity:0,y:40},config:w}),[]);return(0,s.useEffect)(()=>{e&&(c.start({to:{opacity:1,y:0},delay:500}),b.start({to:{opacity:1,y:0},delay:900}))},[c,b,e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d,{}),(0,i.jsxs)("div",{className:"m-auto w-full text-center z-50 p-6",children:[(0,i.jsx)(o.q.div,{style:a,className:"will-change-transform max-w-[16rem] sm:max-w-[18rem] md:max-w-[20rem] mx-auto max-h-full",children:(0,i.jsx)(u(),{priority:!0,alt:"bleed logo",src:S.Z,quality:100,className:"w-full h-full object-cover logo-shadow"})}),(0,i.jsx)("div",{style:{perspective:"1000px"},className:"mt-6 mx-auto inline-block relative",children:(0,i.jsx)(o.q.h1,{style:l,className:"will-change-transform text-6xl md:text-7xl tracking-tight font-bold",children:(0,i.jsx)("div",{className:"text-transparent bg-clip-text bg-gradient-to-b from-[#caca90] via-white to-[#caca90]",children:"bleed"})})}),(0,i.jsx)("div",{className:"mt-4 block",style:{perspective:"1000px"},children:(0,i.jsxs)(o.q.div,{style:h,className:"inline-block text-neutral-400 will-change-transform",children:["serving"," ",(0,i.jsx)("span",{className:"text-neutral-200 font-medium",children:n})," ","users across"," ",(0,i.jsx)("span",{className:"text-neutral-200 font-medium",children:r})," ","servers"]})}),(0,i.jsx)(D,{started:e})]})]})};var U=F}},function(e){e.O(0,[61,550,455,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);