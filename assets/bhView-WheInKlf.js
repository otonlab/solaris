import{c as e,l as t,n,p as r,s as i}from"./i18n-BfdGLJmI.js";import{Er as a,Gt as o,It as s,J as c,Jn as l,K as u,O as d,Ot as f,Pn as ee,S as p,V as te,Vn as ne,Xn as re,Zn as ie,_t as ae,dr as m,f as oe,ft as h,ht as g,l as _,qt as se,u as v,v as y}from"./three.core-B_bJb1fe.js";import{a as ce,o as le}from"./three.module-CQo4q4Mc.js";import{a as ue,n as b}from"./bhDirectory-BXIio4H8.js";import{_ as de,a as x,o as S,r as C,t as fe,v as pe,y as w}from"./milkyWay-DEH_hv_2.js";var me=13271244e4,T=299792.458,E=Math.sqrt(27);function he(e){return me*e/(T*T)}function ge(e){return he(e)/T}function _e(e,t){return 2*Math.PI*e**1.5*ge(t)}function D(e){let t=Math.min(1,E*Math.sqrt(1-2/e)/e);return e>=3?Math.PI-Math.asin(t):Math.asin(t)}function ve(e){return Math.PI-D(e)}var O=.35,ye=e=>e**-1.5,be=e=>-1.5*e**-2.5,k=e=>(1-2/e)/Math.sqrt(1-3/e),A=e=>Math.sqrt(e)/Math.sqrt(1-3/e),xe=e=>{let t=1e-5*e;return(A(e+t)-A(e-t))/(2*t)};function Se(e,t=400){if(e<=6)return 0;let n=t%2?t+1:t,r=(e-6)/n,i=0;for(let e=0;e<=n;e++){let t=6+e*r,a=e===0||e===n?1:e%2?4:2;i+=a*(k(t)-ye(t)*A(t))*xe(t)}i*=r/3;let a=k(e)-ye(e)*A(e);return-be(e)/(4*Math.PI*e*a*a)*i}function j(e=64,t=46){let n=(t-6)/(e-1),r=new Float32Array(e),i=0,a=6;for(let t=0;t<e;t++)r[t]=Se(6+t*n),r[t]>i&&(i=r[t],a=6+t*n);for(let t=0;t<e;t++)r[t]=r[t]/i;return{r0:6,dr:n,f:r,rPeak:a}}function Ce(e){return 1+Math.sqrt(1-e*e)}function we(e){let t=1+Math.cbrt(1-e*e)*(Math.cbrt(1+e)+Math.cbrt(1-e)),n=Math.sqrt(3*e*e+t*t);return 3+n-Math.sqrt((3-t)*(3+t+2*n))}function M(e,t,n=400){let r=we(t);if(e<=r)return 0;let i=e=>1/(e**1.5+t),a=e=>e**.75*Math.sqrt(e**1.5-3*Math.sqrt(e)+2*t),o=e=>(e**1.5-2*Math.sqrt(e)+t)/a(e),s=e=>(e*e-2*t*Math.sqrt(e)+t*t)/a(e),c=(e,t)=>{let n=1e-5*t;return(e(t+n)-e(t-n))/(2*n)},l=n%2?n+1:n,u=(e-r)/l,d=0;for(let e=0;e<=l;e++){let t=r+e*u,n=e===0||e===l?1:e%2?4:2;d+=n*(o(t)-i(t)*s(t))*c(s,t)}d*=u/3;let f=o(e)-i(e)*s(e);return-c(i,e)/(4*Math.PI*e*f*f)*d}function Te(e,t=64,n=46){let r=we(e),i=(n-r)/(t-1),a=new Float32Array(t),o=0;for(let n=0;n<t;n++)a[n]=M(r+n*i,e),o=Math.max(o,a[n]);for(let e=0;e<t;e++)a[e]=a[e]/o;return{r0:r,dr:i,f:a}}var Ee=[`lens`,`kerr`,`riaf`,`disk`,`hotspot`,`companion`,`jet`,`gcSky`,`sStars`],De={lens:{ja:`光の道と影`,model:r(`自転なし（シュヴァルツシルト）の光の道をこのアプリで計算・影の縁は Synge 1966`),fill:[]},kerr:{ja:`自転（カー）`,model:r(`自転するブラックホールの光の道をミノの時間で計算（Mino 2003）・ISCO は Bardeen ほか 1972・影の縁は Bardeen 1973`),fill:[r(`自転の 0.5・0.94 は仮定（観測で決まった値ではない）`),r(`カメラは「その場で回らない観測者」`)]},riaf:{ja:`回るガス（熱くふくらんだ流れ）`,model:r(`振動数の比 g（ドップラー＋重力赤方偏移）・ケプラー回転と ISCO の内側の落ちこみ・明るさの傾き（Broderick & Loeb 2006 型を簡略化）`),fill:[r(`ガスの乱れの模様`),r(`自然の色（人の目）の明るさ`)]},disk:{ja:`薄い円盤`,model:r(`面の明るさは Novikov–Thorne（Page & Thorne 1974）・g⁴ の明るさと色`),fill:[r(`円盤の面の模様`),r(`温度の擬似色`)],needs:e=>e.disk?null:r(`円盤の温度と外の端の値が無い`)},hotspot:{ja:`フレア（ホットスポット）`,model:r(`ISCO の近くを回る明るい点（半径 {HOTSPOT_R} Rg・GRAVITY 2018 の近赤外フレア）`,{HOTSPOT_R:8}),fill:[r(`起きる間隔と明るさ`)],needs:e=>e.modules.riaf?.use===`engine`?null:r(`回るガス（riaf）が無いと描けない`)},companion:{ja:`伴星`,model:r(`黒体の色・半径と間隔から見かけの大きさ`),fill:[r(`周辺減光と表面のむら`)],needs:e=>e.companion?null:r(`伴星の半径・温度・間隔の値が無い`)},jet:{ja:`ジェット`,model:r(`（部品なし）`),fill:[]},gcSky:{ja:`銀河中心から見た空`,model:r(`ミニスパイラル（Zhao ほか 2009 の軌道）・CND（Jackson ほか 1993）`),fill:[r(`中心の星団と天の川（推定の模型・実際の星の位置ではない）`),r(`ミニスパイラルの光り方`),r(`明るい星の明るさを丸める`)],needs:e=>e.id===`sgra`?null:r(`銀河中心の空のデータはいて座A*だけ`)},sStars:{ja:`S星`,model:r(`観測の軌道（Gillessen ほか 2017 表 3）・ケプラーの式で位置を出す`),fill:[r(`1 秒＝1 年の速さ`)],needs:e=>e.modules.gcSky?.use===`engine`?null:r(`銀河中心の空（gcSky）が無いと描けない`)}};function Oe(t){return Ee.map(n=>{let i=De[n],a=t.modules[n],o=e(i);if(!a)return{id:n,name:o,status:`off`,why:r(`この天体には当てはまらない`),ref:null};if(a.use===`off`)return{id:n,name:o,status:`off`,why:a.why.v,ref:a.why.ref};if(a.use===`nomodel`)return{id:n,name:o,status:`nomodel`,why:a.why,ref:null};let s=i.needs?.(t);return s?{id:n,name:o,status:`nomodel`,why:s,ref:null}:{id:n,name:o,status:`engine`,why:i.model,ref:null}})}function N(e,t){return Oe(e).find(e=>e.id===t).status===`engine`}var ke=[.5,.94];function Ae(e){return N(e,`kerr`)?[0,...ke,...e.spin?[e.spin.v]:[]]:[0]}function je(e,t){return t===0?null:e.spin&&t===e.spin.v?e.spin.src:`assumption`}var P=(e,t,n)=>({label:e,value:n(t.v),src:t.src,ref:t.ref}),F=e=>e>=1e4?e.toExponential(3).replace(`e+`,`×10^`):String(e);function I(e){let n=[P(r(`質量`),e.mass,e=>r(`太陽の {p} 倍`,{p:F(e)})),P(r(`距離`),e.distPc,e=>`${F(e)} pc`),P(r(`空の上の位置`),e.pos,e=>r(`赤経 {p}°・赤緯 {p2}°`,{p:e.raDeg.toFixed(4),p2:e.decDeg.toFixed(4)})),P(r(`ガスの回転軸`),e.axis,e=>e.kind===`jet`?r(`視線から {inclDeg}°・空の上の向き {paDeg}°`,{inclDeg:e.inclDeg,paDeg:e.paDeg}):e.kind===`galactic`?r(`銀河面の北`):r(`天の北`))];if(e.spin&&n.push(P(r(`自転`),e.spin,()=>e.spin.text)),N(e,`disk`)&&e.disk&&n.push(P(r(`円盤のいちばん熱い所`),e.disk.tMaxK,e=>`${F(e)} K`),P(r(`円盤の描く外の端`),e.disk.rOut,e=>`${e} Rg`)),N(e,`companion`)&&e.companion){let i=e.companion;n.push(P(r(`伴星 {nameJa} の半径`,{nameJa:t(i)}),i.radiusRsun,e=>r(`太陽の {x} 倍`,{x:e})),P(r(`伴星の表面温度`),i.tempK,e=>`${e.toLocaleString(`ja-JP`)} K`),P(r(`伴星との距離`),i.sepAu,e=>`${e} au`),P(r(`伴星の位置`),i.place,e=>e))}let i=Oe(e);return{rows:n,fills:i.filter(e=>e.status===`engine`).flatMap(e=>De[e.id].fill.map(t=>r(`{name}：{f}`,{name:e.name,f:t}))),missing:i.filter(e=>e.status===`nomodel`).map(e=>r(`{name}：{why}`,{name:e.name,why:e.why}))}}function Me(e){let{rows:t,fills:n,missing:i}=I(e),a=e=>t.filter(t=>t.src===e).map(e=>r(`・{label}：{value}（{ref}）`,{label:e.label,value:e.value,ref:e.ref})),o=(e,t)=>t.length?[`【${e}】`,...t]:[];return[...o(b.observed,a(`observed`)),...o(b.model,a(`model`)),...o(b.unknown,a(`unknown`)),...o(b.assumption,[...a(`assumption`),...n.map(e=>r(`・{f}`,{f:e}))]),...o(r(`まだ描いていないもの`),i.map(e=>r(`・{m}`,{m:e})))].join(`
`)}var L=[{name:`S1`,a:.595,e:.556,i:119.14,Om:342.04,w:122.3,tP:2001.8,T:166,sp:`e`,mK:14.7},{name:`S2`,a:.1255,e:.8839,i:134.18,Om:226.94,w:65.51,tP:2002.33,T:16,sp:`e`,mK:13.95},{name:`S4`,a:.357,e:.3905,i:80.33,Om:258.84,w:290.8,tP:1957.4,T:77,sp:`e`,mK:14.4},{name:`S6`,a:.6574,e:.84,i:87.24,Om:85.07,w:116.23,tP:2108.61,T:192,sp:`e`,mK:15.4},{name:`S8`,a:.4047,e:.8031,i:74.37,Om:315.43,w:346.7,tP:1983.64,T:92.9,sp:`e`,mK:14.5},{name:`S9`,a:.2724,e:.644,i:82.41,Om:156.6,w:150.6,tP:1976.71,T:51.3,sp:`e`,mK:15.1},{name:`S12`,a:.2987,e:.8883,i:33.56,Om:230.1,w:317.9,tP:1995.59,T:58.9,sp:`e`,mK:15.5},{name:`S13`,a:.2641,e:.425,i:24.7,Om:74.5,w:245.2,tP:2004.86,T:49,sp:`e`,mK:15.8},{name:`S14`,a:.2863,e:.9761,i:100.59,Om:226.38,w:334.59,tP:2000.12,T:55.3,sp:`e`,mK:15.7},{name:`S17`,a:.3559,e:.397,i:96.83,Om:191.62,w:326,tP:1991.19,T:76.6,sp:`l`,mK:15.3},{name:`S18`,a:.2379,e:.471,i:110.67,Om:49.11,w:349.46,tP:1993.86,T:41.9,sp:`e`,mK:16.7},{name:`S19`,a:.52,e:.75,i:71.96,Om:344.6,w:155.2,tP:2005.39,T:135,sp:`e`,mK:16},{name:`S21`,a:.219,e:.764,i:58.8,Om:259.64,w:166.4,tP:2027.4,T:37,sp:`l`,mK:16.9},{name:`S22`,a:1.31,e:.449,i:105.76,Om:291.7,w:95,tP:1996.9,T:540,sp:`e`,mK:16.6},{name:`S23`,a:.253,e:.56,i:48,Om:249,w:39,tP:2024.7,T:45.8,sp:`e`,mK:17.8},{name:`S24`,a:.944,e:.897,i:103.67,Om:7.93,w:290,tP:2024.5,T:331,sp:`l`,mK:15.6},{name:`S29`,a:.428,e:.728,i:105.8,Om:161.96,w:346.5,tP:2025.96,T:101,sp:`e`,mK:16.7},{name:`S31`,a:.449,e:.5497,i:109.03,Om:137.16,w:308,tP:2018.07,T:108,sp:`e`,mK:15.7},{name:`S33`,a:.657,e:.608,i:60.5,Om:100.1,w:303.7,tP:1928,T:192,sp:`e`,mK:16},{name:`S38`,a:.1416,e:.8201,i:171.1,Om:101.06,w:17.99,tP:2003.19,T:19.2,sp:`l`,mK:17},{name:`S39`,a:.37,e:.9236,i:89.36,Om:159.03,w:23.3,tP:2000.06,T:81.1,sp:`?`,mK:16.8},{name:`S42`,a:.95,e:.567,i:67.16,Om:196.14,w:35.8,tP:2008.24,T:335,sp:`e`,mK:17.5},{name:`S54`,a:1.2,e:.893,i:62.2,Om:288.35,w:140.8,tP:2004.46,T:477,sp:`e`,mK:17.5},{name:`S55`,a:.1078,e:.7209,i:150.1,Om:325.5,w:331.5,tP:2009.34,T:12.8,sp:`?`,mK:17.5},{name:`S60`,a:.3877,e:.7179,i:126.87,Om:170.54,w:29.37,tP:2023.89,T:87.1,sp:`e`,mK:16.3},{name:`S66`,a:1.502,e:.128,i:128.5,Om:92.3,w:134,tP:1771,T:664,sp:`e`,mK:14.8},{name:`S67`,a:1.126,e:.293,i:136,Om:96.5,w:213.5,tP:1705,T:431,sp:`e`,mK:12.1},{name:`S71`,a:.973,e:.899,i:74,Om:35.16,w:337.8,tP:1695,T:346,sp:`e`,mK:16.1},{name:`S83`,a:1.49,e:.365,i:127.2,Om:87.7,w:203.6,tP:2046.8,T:656,sp:`e`,mK:13.6},{name:`S85`,a:4.6,e:.78,i:84.78,Om:107.36,w:156.3,tP:1930.2,T:3580,sp:`l`,mK:15.6},{name:`S87`,a:2.74,e:.224,i:119.54,Om:106.32,w:336.1,tP:611,T:1640,sp:`e`,mK:13.6},{name:`S89`,a:1.081,e:.639,i:87.61,Om:238.99,w:126.4,tP:1783,T:406,sp:`l`,mK:15.3},{name:`S91`,a:1.917,e:.303,i:114.49,Om:105.35,w:356.4,tP:1108,T:958,sp:`e`,mK:12.2},{name:`S96`,a:1.499,e:.174,i:126.36,Om:115.66,w:233.6,tP:1646,T:662,sp:`e`,mK:10},{name:`S97`,a:2.32,e:.35,i:113,Om:113.2,w:28,tP:2132,T:1270,sp:`e`,mK:10.3},{name:`S145`,a:1.12,e:.5,i:83.7,Om:263.92,w:185,tP:1808,T:426,sp:`l`,mK:17.5},{name:`S175`,a:.414,e:.9867,i:88.53,Om:326.83,w:68.52,tP:2009.51,T:96.2,sp:`e`,mK:17.5},{name:`R34`,a:1.81,e:.641,i:136,Om:330,w:57,tP:1522,T:877,sp:`e`,mK:14},{name:`R44`,a:3.9,e:.27,i:131,Om:80.5,w:217,tP:1963,T:2730,sp:`e`,mK:14}];function Ne(e,t){let n=t<.8?e:Math.PI;for(let r=0;r<50;r++){let r=(n-t*Math.sin(n)-e)/(1-t*Math.cos(n));if(n-=r,Math.abs(r)<1e-13)break}return n}function R(e,t,n){let r=Math.PI/180,i=e.a*n,a=Ne(2*Math.PI*((t-e.tP)/e.T%1),e.e),o=2*Math.atan2(Math.sqrt(1+e.e)*Math.sin(a/2),Math.sqrt(1-e.e)*Math.cos(a/2)),s=i*(1-e.e*Math.cos(a)),c=e.w*r+o,l=e.Om*r,u=e.i*r;return{n:s*(Math.cos(c)*Math.cos(l)-Math.sin(c)*Math.sin(l)*Math.cos(u)),e:s*(Math.cos(c)*Math.sin(l)+Math.sin(c)*Math.cos(l)*Math.cos(u)),z:s*Math.sin(c)*Math.sin(u)}}var z={slopeIn:1.15,slopeOut:2.5,breakPc:3,rMinPc:.04,rMaxPc:12,count:6e4,lMin:10,lMax:1e5,lfSlope:2},B={count:100,rMinPc:.04,rMaxPc:.5,lMin:1e4,lMax:1e6},Pe=5e10,V=2.46,H=-.8,U=3;function W(e){let t=Math.min(400,Math.max(10,e/100)),n=t<=66?1:Math.min(1,1.292936*(t-60)**-.1332047),r=t<=66?Math.min(1,Math.max(0,.3900816*Math.log(t)-.6318414)):Math.min(1,1.1298909*(t-60)**-.0755148),i=t>=66?1:t<=19?0:Math.min(1,Math.max(0,.5432068*Math.log(t-10)-1.1962541));return new y(n,r,i).convertSRGBToLinear()}function G(){let e=Math.PI/180,t=w*e,n=pe*e,r=new a(Math.cos(n)*Math.cos(t),Math.cos(n)*Math.sin(t),Math.sin(n)),i=new a(0,0,1).cross(r).normalize();return{s:r,east:i,north:new a().crossVectors(r,i)}}var Fe=206264.806;function Ie(e){let{s:t,east:n,north:r}=G(),i=5*Math.log10(de/10);return L.map(o=>{let s=R(o,e,de),c=o.mK-i-V+(o.sp===`l`?U:H);return{name:o.name,posAu:new a().addScaledVector(r,s.n).addScaledVector(n,s.e).addScaledVector(t,s.z),L:10**(-.4*(c-4.83)),color:W(o.sp===`l`?3800:o.sp===`e`?25e3:9e3)}})}function K(e,t,n){let{s:r,east:i,north:o}=G();return new a().addScaledVector(i,e).addScaledVector(o,t).addScaledVector(r,n)}var Le=[{name:`northern`,ja:`北の腕`,aPc:.99,e:.83,Om:64,w:132,i:139},{name:`eastern`,ja:`東の腕`,aPc:1.4,e:.82,Om:-42,w:-280,i:122},{name:`western`,ja:`西の弧`,aPc:1.11,e:.2,Om:71,w:22,i:117}];function Re(e,t){let n=Math.PI/180,r=e.Om*n,i=e.i*n,a=e.w*n+t,o=e.aPc*(1-e.e*e.e)/(1+e.e*Math.cos(t));return[o*(Math.cos(r)*Math.cos(a)-Math.sin(r)*Math.sin(a)*Math.cos(i)),o*(Math.sin(r)*Math.cos(a)+Math.cos(r)*Math.sin(a)*Math.cos(i)),o*Math.sin(a)*Math.sin(i)]}function ze(e=20261105){let t=x(e),n=[],r=new y(1,.22,.32);for(let e of Le){let i=9e3;for(let a=0;a<i;a++){let[o,s,c]=Re(e,-Math.PI+2*Math.PI*(a+t())/i),l=Math.hypot(o,s,c);if(l>1.5)continue;let u=()=>(t()-.5)*.05,d=K(o+u(),s+u(),c+u()),f=d.length();n.push({dir:d.normalize(),flux:4*(.4+t())*Math.min(4,.5/l)/(f*f),color:r,angPc:.02,distPc:f})}}return n}var q={rInPc:1.5,rOutPc:4,hPc:.25,inclDeg:70,paDeg:25,tauPerPc:6};function J(){let e=Math.PI/180,t=(q.paDeg+90)*e,n=q.inclDeg*e;return K(Math.sin(t)*Math.sin(n),Math.cos(t)*Math.sin(n),Math.cos(n)).normalize()}function Be(e,t,n=J()){let r=Math.min(t,q.rOutPc*1.4)/28,i=e.dot(n),a=0;for(let t=0;t<28;t++){let n=(t+.5)*r,o=n*i,s=Math.sqrt(Math.max(0,n*n-o*o));if(s<q.rInPc*.85||s>q.rOutPc*1.2)continue;let c=Math.min(1,(s-q.rInPc*.85)/(q.rInPc*.3))*Math.min(1,(q.rOutPc*1.2-s)/(q.rOutPc*.4)),l=.5+.5*Math.sin(e.x*37+e.y*23)*Math.sin(e.z*41+s*3.1);a+=q.tauPerPc*Math.exp(-(o*o)/(2*q.hPc*q.hPc))*c*(.4+.9*l)*r}return a}function Ve(e=20261104){let t=x(e),n=[],r=()=>{let e=2*t()-1,n=2*Math.PI*t(),r=Math.sqrt(1-e*e);return new a(r*Math.cos(n),r*Math.sin(n),e)},{slopeIn:i,slopeOut:o,breakPc:s,rMinPc:c,rMaxPc:l}=z,u=(e,t,n)=>(t**(3-n)-e**(3-n))/(3-n),d=u(c,s,i),f=s**(o-i)*u(s,l,o),ee=()=>{let[e,n,r]=t()<d/(d+f)?[c,s,i]:[s,l,o],a=3-r,u=t();return(e**a+u*(n**a-e**a))**(1/a)},p=(e,n)=>{let r=t();return 1/(1/e-r*(1/e-1/n))};for(let e=0;e<z.count;e++){let e=ee(),i=p(z.lMin,z.lMax),a=i>3e4&&t()<.3?15e3+15e3*t():3400+1200*t();n.push({dir:r(),flux:i/(e*e),color:W(a),angPc:0,distPc:e})}for(let e=0;e<B.count;e++){let e=B.rMinPc*(B.rMaxPc/B.rMinPc)**t(),i=B.lMin*(B.lMax/B.lMin)**t();n.push({dir:r(),flux:i/(e*e),color:W(25e3+15e3*t()),angPc:0,distPc:e})}return n}function Y(){let e=C(),t=[],n=0;for(let t=0;t<e.count;t++)e.kind[t]!==fe.Dust&&(n+=e.lum[t]);let r=Pe/n;for(let n=0;n<e.count;n++){if(e.kind[n]===fe.Dust)continue;let i=[e.model[3*n],e.model[3*n+1],e.model[3*n+2]],o=Math.hypot(i[0],i[1],i[2]);if(o<20)continue;let s=new a().addScaledVector(new a(...S.ex),i[0]/o).addScaledVector(new a(...S.er),i[1]/o).addScaledVector(new a(...S.nz),i[2]/o);t.push({dir:s.normalize(),flux:r*e.lum[n]/(o*o),color:new y(e.color[3*n],e.color[3*n+1],e.color[3*n+2]),angPc:e.size[n],distPc:o})}return t}var He=`
attribute float flux; attribute float ang; attribute vec3 col;
uniform float uPxPerRad; uniform float uFluxRef;
varying vec3 vCol; varying float vI;
void main() {
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position * 100.0, 1.0);
  gl_Position = p;
  // 点の大きさ：広がった粒（天の川）は見かけの大きさ、星は明るいほど大きくにじませる（演出）
  float glow = 1.6 + 1.5 * max(0.0, log(flux / uFluxRef) / log(10.0));
  float s = max(ang * uPxPerRad, glow);
  gl_PointSize = clamp(s, 1.5, 96.0);
  vCol = col;
  // とても明るい星（基準の 100 倍より上）は明るさを丸める（そのままだと平らな白い円になる＝演出の丸め・画面に注記）
  float f = flux > 100.0 ? 100.0 * pow(flux / 100.0, 0.4) : flux;
  // 点の合計の明るさを保つ：面積で割る
  vI = f / (gl_PointSize * gl_PointSize);
}`,Ue=`
varying vec3 vCol; varying float vI;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0; float rr = dot(q, q);
  if (rr > 1.0) discard;
  float k = (1.0 - rr); k *= k;
  gl_FragColor = vec4(vCol * vI * exp(-4.0 * rr) * k * 3.5, 1.0);
}`;function We(e,t,n=1024){let r=new ce(n,{type:c,generateMipmaps:!0,minFilter:ae}),i=Ve(),a=Y(),o=ze(),s=J();for(let e of[...i,...a,...o]){let t=Be(e.dir,e.distPc,s);t>0&&(e.flux*=Math.exp(-t))}let l=[...a,...i,...o],u=i.map(e=>e.flux).sort((e,t)=>e-t),d=u[Math.floor(u.length*.5)],f=new Float32Array(l.length*3),ee=new Float32Array(l.length*3),te=new Float32Array(l.length),ne=new Float32Array(l.length);l.forEach((e,t)=>{f.set([e.dir.x,e.dir.y,e.dir.z],3*t),ee.set([e.color.r,e.color.g,e.color.b],3*t),te[t]=e.flux/d,ne[t]=e.angPc>0?e.angPc/e.distPc:0});let m=new v;m.setAttribute(`position`,new _(f,3)),m.setAttribute(`col`,new _(ee,3)),m.setAttribute(`flux`,new _(te,1)),m.setAttribute(`ang`,new _(ne,1));let oe=new ie({vertexShader:He,fragmentShader:Ue,uniforms:{uPxPerRad:{value:n/2},uFluxRef:{value:1}},blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),h=new re;h.add(new se(m,oe));let g=new p(.1,1e3,r),le=e.getClearColor(new y),ue=e.getClearAlpha();return e.setClearColor(0,1),g.update(e,h),e.setClearColor(le,ue),m.dispose(),oe.dispose(),{target:r,fluxRef:d,counts:{milkyWay:a.length,cluster:i.length,minispiral:o.length,sStars:L.length}}}var Ge=class{fluxRef;target;scene=new re;cam;pts;lines;orbitsAu;showOrbits=!1;constructor(e,t=512){this.fluxRef=e,this.target=new ce(t,{type:c,generateMipmaps:!0,minFilter:ae}),this.cam=new p(.1,1e3,this.target);let n=L.length,r=new v;r.setAttribute(`position`,new _(new Float32Array(3*n),3)),r.setAttribute(`col`,new _(new Float32Array(3*n),3)),r.setAttribute(`flux`,new _(new Float32Array(n),1)),r.setAttribute(`ang`,new _(new Float32Array(n),1)),this.pts=new se(r,new ie({vertexShader:He,fragmentShader:Ue,uniforms:{uPxPerRad:{value:t/2},uFluxRef:{value:1}},blending:2,depthTest:!1,depthWrite:!1,transparent:!0})),this.pts.frustumCulled=!1;let{s:i,east:o,north:s}=G();this.orbitsAu=[...L].sort((e,t)=>e.T-t.T).slice(0,8).map(e=>{let t=new Float32Array(384);for(let n=0;n<128;n++){let r=R(e,e.tP+e.T*n/128,de),c=new a().addScaledVector(s,r.n).addScaledVector(o,r.e).addScaledVector(i,r.z);t.set([c.x,c.y,c.z],3*n)}return t});let l=new v;l.setAttribute(`position`,new _(new Float32Array(this.orbitsAu.length*128*2*3),3)),this.lines=new g(l,new h({color:new y(.2,.32,.55),blending:2,depthTest:!1,depthWrite:!1,transparent:!0})),this.lines.frustumCulled=!1,this.scene.add(this.lines,this.pts)}update(e,t,n){let r=Ie(t),i=this.pts.geometry,o=i.getAttribute(`position`),s=i.getAttribute(`col`),c=i.getAttribute(`flux`),l=[];if(r.forEach((e,t)=>{let r=e.posAu.clone().sub(n),i=Math.max(.001,r.length()),a=i/Fe;r.divideScalar(i),o.setXYZ(t,r.x*100,r.y*100,r.z*100),s.setXYZ(t,e.color.r,e.color.g,e.color.b),c.setX(t,e.L/(a*a)/this.fluxRef),l.push({name:e.name,dirFromCam:r,dAu:i,rAu:e.posAu.length()})}),o.needsUpdate=!0,s.needsUpdate=!0,c.needsUpdate=!0,this.showOrbits){let e=this.lines.geometry.getAttribute(`position`),t=new a,r=0;for(let i of this.orbitsAu)for(let a=0;a<128;a++)for(let o of[a,(a+1)%128])t.set(i[3*o]-n.x,i[3*o+1]-n.y,i[3*o+2]-n.z).normalize().multiplyScalar(100),e.setXYZ(r++,t.x,t.y,t.z);e.needsUpdate=!0}this.lines.visible=this.showOrbits;let u=e.getClearColor(new y),d=e.getClearAlpha();return e.setClearColor(0,1),this.cam.update(e,this.scene),e.setClearColor(u,d),l}dispose(){this.target.dispose(),this.pts.geometry.dispose(),this.lines.geometry.dispose(),this.pts.material.dispose(),this.lines.material.dispose()}},Ke=j(64,46),qe=149597870.7,Je=2.6,Ye=2e4,Xe=2048,Ze=3*Math.PI*8**1.5,Qe=21600,$e=2e3,X=Math.PI/180,et=(e,t)=>new a(Math.cos(t*X)*Math.cos(e*X),Math.cos(t*X)*Math.sin(e*X),Math.sin(t*X));function tt(e){let t=et(e.pos.v.raDeg,e.pos.v.decDeg),n=t.clone().negate(),r=e.axis.v,i;if(r.kind===`galactic`)i=new a(...S.nz);else if(r.kind===`jet`){let e=new a(0,0,1).cross(t).normalize(),o=new a().crossVectors(t,e).multiplyScalar(Math.cos(r.paDeg*X)).addScaledVector(e,Math.sin(r.paDeg*X)),s=n.clone().multiplyScalar(Math.cos(r.inclDeg*X)).addScaledVector(o,Math.sin(r.inclDeg*X));i=r.awayFromEarth?s.negate():s}else i=new a(0,0,1);i.normalize();let o=Math.asin(Math.max(-1,Math.min(1,n.dot(i)))),s=n.clone().addScaledVector(i,-n.dot(i));return s.lengthSq()<1e-8&&(s=new a(1,0,0).addScaledVector(i,-i.x)),s.normalize(),{X:s,Y:new a().crossVectors(i,s),Z:i,earthLat:o}}var nt=`
out vec2 vNdc;
void main() { vNdc = position.xy; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Z=e=>e.toFixed(6),rt=`
layout(location = 0) out highp vec4 pc_fragColor;
#define gl_FragColor pc_fragColor
#define PI 3.141592653589793
#define R_OUT ${Z(50)}
#define R_ISCO ${Z(6)}
#define H_R ${Z(O)}
#define J_SLOPE ${Z(3)}
#define G_POW ${Z(2)}
#define HS_R ${Z(8)}
#define HS_LIFE ${Z(Ze)}
uniform sampler2D uSky; uniform float uSkyW; uniform float uSkyK;
uniform samplerCube uCube; uniform float uCubeW; uniform int uSkyMode; uniform float uGcK;
uniform samplerCube uCubeS; uniform float uCubeSW; uniform float uSOn;
uniform sampler2D uTab; uniform int uN; uniform float uXMin; uniform float uLogR; uniform float uBetaC;
uniform float uLens; uniform float uExposure;
uniform vec3 uPos; uniform vec3 uRight; uniform vec3 uUp; uniform vec3 uFwd; uniform float uTanHalf; uniform float uAspect;
uniform int uGas; uniform int uSteps; uniform float uGasK; uniform float uT; uniform vec3 uHS; uniform float uOct2;
uniform vec3 uAX; uniform vec3 uAY; uniform vec3 uAZ;
// 薄い円盤（Novikov–Thorne の F/F_max の表）と伴星
uniform int uDisk; uniform float uNT[64]; uniform float uNTr0; uniform float uNTdr; uniform float uTmax; uniform float uDiskROut;
uniform float uCompOn; uniform vec3 uCompDir; uniform float uCompCos; uniform float uCompT; uniform float uCompK;
float ntF(float r) {
  float s = clamp((r - uNTr0) / uNTdr, 0.0, 62.999); int i = int(floor(s)); float w = s - float(i);
  return mix(uNT[i], uNT[i + 1], w);
}
// X 線の温度の擬似色：温度の比 x（1＝いちばん熱い所）で 赤 → 橙 → 黄白 → 青白
vec3 xrayColor(float x) {
  vec3 col = mix(vec3(0.9, 0.16, 0.02), vec3(1.0, 0.5, 0.1), smoothstep(0.3, 0.6, x));
  col = mix(col, vec3(1.0, 0.88, 0.62), smoothstep(0.6, 0.95, x));
  return pow(mix(col, vec3(0.8, 0.88, 1.0), smoothstep(1.05, 1.5, x)), vec3(2.2)); // 色は sRGB で決めて線形へ（最後に sRGB へ戻る）
}
in vec2 vNdc;

// ---- 自転（カー）：画素ごとに光の道をミノの時間で解く（式は src/view/bh/kerr.ts と同じ・テストで確認） ----
// カメラから逆にたどる＝「自転 −a の時空で前へ」（kerrCamRay・kerrTraceBack）。uA は本当の自転、AP はたどるときの −a
uniform int uKerr; uniform float uA; uniform float uRh; uniform float uIscoK; uniform float uKREnd; uniform int uKSteps;
#define AP (-uA)
float kdR(float r, float L, float Q) { return 4.0 * r * (r * r + uA * uA - AP * L) - (2.0 * r - 2.0) * (Q + (L - AP) * (L - AP)); }
float kdTh(float th, float L) {
  float sn = sin(th), s = max(1e-4, abs(sn)) * (sn < 0.0 ? -1.0 : 1.0), c = cos(th);
  return 2.0 * s * c * (L * L / (s * s) - uA * uA) + 2.0 * L * L * c * c * c / (s * s * s);
}
float kdPh(float r, float th, float L) {
  float s2 = max(1e-8, sin(th) * sin(th)), D = r * r - 2.0 * r + uA * uA;
  return AP * (r * r + uA * uA - AP * L) / D - AP + L / s2;
}
// 遠くでの光の向き（デカルト・回転軸が z。kerrTrace の出口と同じ）
vec3 kDir(float r, float th, float ph, float vr, float vt, float L) {
  float dph = kdPh(r, th, L), q = sqrt(r * r + uA * uA), dq = r * vr / q, sx = sin(th), cx = cos(th);
  return normalize(vec3(dq * sx * cos(ph) + q * cx * vt * cos(ph) - q * sx * sin(ph) * dph,
                        dq * sx * sin(ph) + q * cx * vt * sin(ph) + q * sx * cos(ph) * dph,
                        vr * cx - r * sx * vt));
}
// その場で回らない観測者（ZAMO）：x＝α（時間の進み）、y＝ω（引きずり）、z＝√g_φφ（本当の自転 uA で）
vec3 kZamo(float r, float th) {
  float s = sin(th), c = cos(th), S = r * r + uA * uA * c * c, D = r * r - 2.0 * r + uA * uA;
  float A = (r * r + uA * uA) * (r * r + uA * uA) - uA * uA * D * s * s;
  return vec3(sqrt(max(S * D / A, 1e-9)), 2.0 * uA * r / A, sqrt(A / S) * abs(s));
}
// ガスの角速度（kerrGasOmega と同じ）と振動数の比 g（kerrG と同じ）
float kOmega(float R, float r, float th) {
  float Rc = max(R, 1e-3);
  float om = Rc >= uIscoK ? 1.0 / (pow(Rc, 1.5) + uA) : 1.0 / (pow(uIscoK, 1.5) + uA) * (uIscoK / Rc) * (uIscoK / Rc);
  vec3 z = kZamo(r, th); float vm = 0.95 * z.x / max(z.z, 1e-6);
  return clamp(om, z.y - vm, z.y + vm);
}
float kG(float r, float th, float om, float ez, float Lreal) {
  vec3 z = kZamo(r, th); float v = (om - z.y) * z.z / z.x;
  float ut = 1.0 / (z.x * sqrt(max(1e-9, 1.0 - v * v)));
  return ez / (ut * (1.0 - om * Lreal));
}

vec2 tabEsc(float x) {
  float s = clamp(log(x / uXMin) / uLogR * float(uN - 1), 0.0, float(uN - 1) - 1e-3);
  int i = int(floor(s)); float w = s - float(i);
  return mix(texelFetch(uTab, ivec2(i, 0), 0).rg, texelFetch(uTab, ivec2(i + 1, 0), 0).rg, w);
}
float tabCap(float q) {
  float s = min(clamp(q, 0.0, 1.0) * float(uN - 1), float(uN - 1) - 1e-3); int i = int(floor(s)); float w = s - float(i);
  return mix(texelFetch(uTab, ivec2(i, 1), 0).g, texelFetch(uTab, ivec2(i + 1, 1), 0).g, w);
}

// ---- ガス（式は src/view/bh/gas.ts と同じ） ----
float omegaGas(float R, float r) {
  float Rc = max(R, 1e-3);
  float om = Rc >= R_ISCO ? pow(Rc, -1.5) : pow(R_ISCO, -1.5) * (R_ISCO / Rc) * (R_ISCO / Rc);
  return min(om, 0.95 * sqrt(max(0.0, 1.0 - 2.0 / r)) / Rc);
}
float hash3(vec3 p) { p = fract(p * 0.3183099 + vec3(0.11, 0.17, 0.13)); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vnoise(vec3 x) {
  vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash3(i), hash3(i + vec3(1, 0, 0)), f.x), mix(hash3(i + vec3(0, 1, 0)), hash3(i + vec3(1, 1, 0)), f.x), f.y),
             mix(mix(hash3(i + vec3(0, 0, 1)), hash3(i + vec3(1, 0, 1)), f.x), mix(hash3(i + vec3(0, 1, 1)), hash3(i + vec3(1, 1, 1)), f.x), f.y), f.z);
}
// 差動回転で引き伸ばされる乱れ：その半径の公転で回した座標で雑音を引く。巻きつきすぎないよう、2 つの層を 1.5 周ごとに入れかえる（重みが 0 の時に入れかえるので継ぎ目は見えない）
float turb(float R, float ph, float z, float om) {
  float acc = 0.0, ws = 0.0;
  float Tr = 1.5 * 2.0 * PI * pow(max(R, 3.0), 1.5);
  for (int k = 0; k < 2; k++) {
    float p = uT / Tr + 0.5 * float(k), fr = fract(p), cyc = floor(p);
    float w = 1.0 - abs(2.0 * fr - 1.0);
    float phc = ph - om * fr * Tr + cyc * 2.39996;
    vec3 q = vec3(R * cos(phc), R * sin(phc), z * 1.6) * 0.55 + cyc * vec3(7.13, 3.31, 1.77);
    float n = vnoise(q);
    if (uOct2 > 0.5) n = 0.62 * n + 0.38 * vnoise(q * 2.13 + 11.0);
    acc += w * n; ws += w;
  }
  return acc / max(ws, 1e-3);
}
float hotspot(float R, float ph, float z, float om) {
  float age = uT - uHS.x;
  if (uHS.z <= 0.0 || age < 0.0 || age > HS_LIFE) return 0.0;
  float a = age / HS_LIFE, env = smoothstep(0.0, 0.12, a) * (1.0 - smoothstep(0.45, 1.0, a)); // すばやく明るくなり、ゆっくり消える
  float d = ph - uHS.y - om * age; d = d - 2.0 * PI * floor((d + PI) / (2.0 * PI));
  float q = (R - HS_R) * (R - HS_R) + (R * d) * (R * d) + z * z;
  return uHS.z * env * exp(-q / (2.0 * 1.3 * 1.3));
}
// 黒体の色の近似（sRGB・Helland の式）。自然表示の色だけに使う（シンクロトロンの光は黒体ではない＝近似）
vec3 bbColor(float T) {
  float t = clamp(T, 1000.0, 40000.0) / 100.0;
  float r = t <= 66.0 ? 1.0 : clamp(1.292936 * pow(t - 60.0, -0.1332047), 0.0, 1.0);
  float g = t <= 66.0 ? clamp(0.3900816 * log(t) - 0.6318414, 0.0, 1.0) : clamp(1.1298909 * pow(t - 60.0, -0.0755148), 0.0, 1.0);
  float b = t >= 66.0 ? 1.0 : (t <= 19.0 ? 0.0 : clamp(0.5432068 * log(t - 10.0) - 1.1962541, 0.0, 1.0));
  return pow(vec3(r, g, b), vec3(2.2));
}

void main() {
  vec3 d = normalize(uFwd + vNdc.x * uTanHalf * uAspect * uRight + vNdc.y * uTanHalf * uUp);
  vec3 D = d; float hole = 0.0;
  float r0 = length(uPos);
  vec3 e1 = uPos / r0;
  float c1 = dot(d, e1); vec3 perp = d - c1 * e1; float s = length(perp);
  vec3 e2 = s > 1e-7 ? perp / s : normalize(cross(e1, abs(e1.z) < 0.9 ? vec3(0, 0, 1) : vec3(1, 0, 0)));
  float x = atan(s, -c1) - uBetaC; // 内向きの方向から測った角 − 影の半径（縁からの距離・小さい角でも精度が落ちない形）
  float phiIn = -1.0;
  // 自転あり：表を使わず、カメラから光の道を解く。ガス・円盤の光も道に沿って一緒に集める（色にするのは空を引いたあと）
  bool kHit = false; float kI = 0.0; vec3 kCol = vec3(0.0); float kRc = 0.0, kGd = 1.0, kGph = 0.0;
  if (uLens > 0.5 && uKerr == 1) {
    vec3 pB = vec3(dot(uPos, uAX), dot(uPos, uAY), dot(uPos, uAZ)), dB = vec3(dot(d, uAX), dot(d, uAY), dot(d, uAZ));
    float th = acos(clamp(pB.z / r0, -1.0, 1.0)), ph = atan(pB.y, pB.x);
    vec3 er = pB / r0, ep = normalize(vec3(-pB.y, pB.x, 0.0) + vec3(1e-9, 0.0, 0.0)), et = cross(ep, er);
    float nr = dot(dB, er), nth = dot(dB, et), nph = dot(dB, ep);
    // 初めの値（kerrCamRay：自転 −a で kerrInit）
    float sn0 = sin(th), cs0 = cos(th), S0 = r0 * r0 + uA * uA * cs0 * cs0, D0 = r0 * r0 - 2.0 * r0 + uA * uA;
    vec3 z0 = kZamo(r0, th);
    float ez = 1.0 / (z0.x - z0.y * z0.z * nph);
    float L = z0.z * nph * ez, Lreal = -L;
    float vr = sqrt(D0 * S0) * nr * ez, vt = sqrt(S0) * nth * ez;
    float Q = vt * vt + cs0 * cs0 * (L * L / max(1e-8, sn0 * sn0) - uA * uA);
    // 極から 0.01 rad より近くを通る光は、極限の L＝0（ちょうど極を通る）として扱う：極のそばで φ が半周まわるのを刻みきれず（θ の式が硬くなる）、回転軸の真上の列に点が出た。
    //   ただし影に落ちる光（b² ＝ Q＋L² が影の縁 27 の近くより小さい）は丸めない：丸めると影の中のガスを通る道が少し動き、影の中に縦の線が出た（CPU で比べて決めた・2026-11-04）
    if (abs(L) < 1e-2 * sqrt(max(Q, 1e-6)) && Q + L * L > 30.0) { L = 0.0; Lreal = 0.0; }
    float r = r0, cPrev = cs0;
    hole = 1.0; // 道が尽きたら落ちたとみなす
    for (int i = 0; i < 900; i++) {
      if (i >= uKSteps) break;
      // 刻み：近くは Δr/r ≈ 7%・遠くは上限 0.15。極のそばを通る光は φ が急に回るので、その速さ |L|/sin²θ でも刻む（入れないと回転軸の上下にのこぎりの模様が出た）
      // 2026-11-04 実機計測（iPhone 14 Pro Max で自転＋ガスが 24 fps）のあと：近くの刻みを 0.04→0.07 に粗く・遠くの上限は 0.2→0.15 に細かく。
      //   CPU で同じ刻みを再現して、ごく細かい刻みと比べた：近くの場面の歩数 −25〜40%・向きのずれは 99% の画素で 0.7 画素以下（前は遠くで 3 画素）
      float h = min(0.07 * max(r / 15.0, 1.0), 0.15) / (abs(vr) / r + abs(vt) + abs(L) / max(sin(th) * sin(th), 1e-6) + 0.05 / r);
      float rO = r, tO = th, pO = ph, vrO = vr, vtO = vt;
      float a1 = vr, b1 = vt, p1 = kdPh(r, th, L), A1 = 0.5 * kdR(r, L, Q), B1 = 0.5 * kdTh(th, L);
      float a2 = vr + 0.5 * h * A1, b2 = vt + 0.5 * h * B1; float r2 = r + 0.5 * h * a1, t2 = th + 0.5 * h * b1;
      float p2 = kdPh(r2, t2, L), A2 = 0.5 * kdR(r2, L, Q), B2 = 0.5 * kdTh(t2, L);
      float a3 = vr + 0.5 * h * A2, b3 = vt + 0.5 * h * B2; float r3 = r + 0.5 * h * a2, t3 = th + 0.5 * h * b2;
      float p3 = kdPh(r3, t3, L), A3 = 0.5 * kdR(r3, L, Q), B3 = 0.5 * kdTh(t3, L);
      float a4 = vr + h * A3, b4 = vt + h * B3; float r4 = r + h * a3, t4 = th + h * b3;
      float p4 = kdPh(r4, t4, L), A4 = 0.5 * kdR(r4, L, Q), B4 = 0.5 * kdTh(t4, L);
      float rn = r + h / 6.0 * (a1 + 2.0 * a2 + 2.0 * a3 + a4);
      float tn = th + h / 6.0 * (b1 + 2.0 * b2 + 2.0 * b3 + b4);
      float pn = ph + h / 6.0 * (p1 + 2.0 * p2 + 2.0 * p3 + p4);
      vr += h / 6.0 * (A1 + 2.0 * A2 + 2.0 * A3 + A4);
      vt += h / 6.0 * (B1 + 2.0 * B2 + 2.0 * B3 + B4);
      // 速さを保存量で直す（kerrTrace と同じ）
      float ww = rn * rn + uA * uA - AP * L, Rv = ww * ww - (rn * rn - 2.0 * rn + uA * uA) * (Q + (L - AP) * (L - AP));
      if (Rv > 0.01 * rn * rn * rn * rn) vr = (vr < 0.0 ? -1.0 : 1.0) * sqrt(Rv);
      float cn = cos(tn), Tv = Q - cn * cn * (L * L / max(1e-8, sin(tn) * sin(tn)) - uA * uA);
      if (Tv > 0.01 * (Q + L * L + uA * uA)) vt = (vt < 0.0 ? -1.0 : 1.0) * sqrt(Tv);
      // 回るガス（RIAF）：道の中点で光を積む（dλ_affine＝Σ dλ_Mino・E＝1）
      float rm = 0.5 * (r + rn);
      if (uGas > 0 && uDisk == 0 && rm < R_OUT && rm > uRh * 1.02) {
        float tm = 0.5 * (th + tn), pm = 0.5 * (ph + pn), z = rm * cos(tm), R = rm * abs(sin(tm));
        float H = H_R * max(R, 2.0);
        float sm = pow(rm / R_ISCO, -J_SLOPE) * exp(-z * z / (2.0 * H * H)) * smoothstep(R_OUT, R_OUT * 0.55, rm) * smoothstep(uRh * 1.02, uRh * 1.25, rm);
        if (sm > 1e-4) {
          float om = kOmega(R, rm, tm);
          float n = turb(R, pm, z, om);
          float j = sm * (0.25 + 1.6 * n * n) + hotspot(R, pm, z, om) * pow(rm / HS_R, -1.0);
          float g = kG(rm, tm, om, ez, Lreal);
          float dl = h * (rm * rm + uA * uA * cos(tm) * cos(tm));
          if (uGas == 1) kI += pow(g, G_POW) * j * dl;
          else kCol += bbColor(3600.0 * g) * pow(g, 4.0) * j * dl;
        }
      }
      // 薄い円盤：初めて赤道面を横切った所（ISCO〜外の端）を覚える。空の向きを出すため、道はそのまま続ける
      if (uDisk == 1 && !kHit) {
        if (cPrev * cn < 0.0) {
          float t = cPrev / (cPrev - cn), rc = mix(r, rn, t);
          if (rc >= uIscoK && rc <= uDiskROut) { kHit = true; kRc = rc; kGph = mix(ph, pn, t); kGd = kG(rc, 0.5 * PI, 1.0 / (pow(rc, 1.5) + uA), ez, Lreal); }
        }
        cPrev = cn;
      }
      r = rn; th = tn; ph = pn;
      if (r < uRh * 1.01) break;
      if (r > uKREnd && vr > 0.0) {
        // 遠くでは光はほぼ真っすぐ：向きは、境目（uKREnd）の前後の 2 点からちょうど境目の所へ補間する（打ち切る所が画素ごとに飛ぶと、空に細かい波の模様が出た）
        float t = clamp((uKREnd - rO) / max(r - rO, 1e-6), 0.0, 1.0);
        vec3 nb = normalize(mix(vrO > 0.0 ? kDir(rO, tO, pO, vrO, vtO, L) : kDir(r, th, ph, vr, vt, L), kDir(r, th, ph, vr, vt, L), t));
        D = nb.x * uAX + nb.y * uAY + nb.z * uAZ; hole = 0.0;
        break;
      }
    }
  } else if (uLens > 0.5) {
    if (x <= uXMin) { hole = 1.0; phiIn = tabCap(atan(s, -c1) / max(uBetaC, 1e-9)); }
    else { vec2 t = tabEsc(x); float phi = atan(s, c1) + t.x; D = cos(phi) * e1 + sin(phi) * e2; phiIn = t.y; }
  }
  // 曲がった向きの変わり方から、空の画像のぼかし（LOD）を決める（何重もの像が縮んだ所はちらつかず、なめらかに平均される）
  // 自転ありでは、回転軸の真上を通る 1 列だけ φ の枝が隣とずれる（座標の極）→ 縦と横の小さいほうで決める（大きいほうだと、その列だけ強くぼけて線が見えた）
  float px = uKerr == 1 ? min(length(dFdx(D)), length(dFdy(D))) : max(length(dFdx(D)), length(dFdy(D)));
  float lod = log2(max(px * uSkyW / (2.0 * PI), 1e-6));
  vec3 c;
  if (uSkyMode == 1) {
    // 銀河中心から見た空（6 面の画像・線形の明るさ）→ 1−e^−x で丸める
    vec3 L = textureLod(uCube, D, log2(max(px * uCubeW * 0.5, 1e-6))).rgb;
    // S星（動く層・カメラから見た向き）を足す
    if (uSOn > 0.5) L += textureLod(uCubeS, D, log2(max(px * uCubeSW * 0.5, 1e-6))).rgb;
    c = (vec3(1.0) - exp(-L * uGcK)) * uSkyK * (1.0 - hole);
  } else {
    vec2 uv = vec2(fract(0.5 - atan(D.y, D.x) / (2.0 * PI)), 0.5 + asin(clamp(D.z, -1.0, 1.0)) / PI);
    c = textureLod(uSky, uv, lod).rgb * uExposure * uSkyK * (1.0 - hole);
  }

  // ---- 伴星（連星のとき）：曲がった向きで円盤の形の星を描く（遠いので向きだけで決まる） ----
  // 星の面：端ほど暗い（周辺減光・係数は目安）・表面のむら（演出）・外のにじみ（演出）。明るさは 1−e^−x で丸める
  if (uCompOn > 0.5 && hole < 0.5) {
    float ang = acos(clamp(dot(D, uCompDir), -1.0, 1.0)), R = acos(uCompCos);
    vec3 bb = bbColor(uCompT);
    if (ang < R) {
      float q = ang / R, mu = sqrt(max(0.0, 1.0 - q * q));
      float limb = 0.3 + 0.7 * mu;
      float gran = 0.85 + 0.3 * vnoise(D * 9.0 / max(R, 1e-3)) * vnoise(D * 31.0 / max(R, 1e-3) + 3.0);
      // 中心は白く飛び、端は暗く青い（熱い星の見え方）
      c = vec3(1.0) - exp(-bb * uCompK * limb * limb * gran); // 背景を暗くする表示（電波・X線）でも星は暗くしない
    } else c += bb * 0.8 * exp(-(ang - R) / (0.06 * R));
  }
  // ---- ガス：光の道をガスの範囲の中で解き直し、道に沿って光を積む ----
  if (uKerr == 1 && uLens > 0.5 && uGas > 0) {
    if (kHit) {
      float F = ntF(kRc), Tem = uTmax * pow(F, 0.25);
      float tex = 0.78 + 0.44 * turb(kRc, kGph, 0.0, 1.0 / (pow(kRc, 1.5) + uA));
      vec3 dc;
      if (uGas == 1) { float Ib = pow(kGd, 4.0) * F * tex; dc = xrayColor(kGd * Tem / uTmax) * (1.0 - exp(-Ib * uGasK)); }
      else { float Iv = kGd * pow(F, 0.25) * tex; dc = bbColor(kGd * Tem) * (1.0 - exp(-Iv * uGasK)); }
      c = mix(c, dc, smoothstep(uDiskROut, uDiskROut * 0.8, kRc));
    } else if (uDisk == 1) {}
    else if (uGas == 1) {
      float t = 1.0 - exp(-kI * uGasK);
      c += vec3(smoothstep(0.0, 0.42, t), smoothstep(0.18, 0.8, t) * 0.92, smoothstep(0.55, 1.0, t) * 0.85) * t * 1.15;
    } else c += (vec3(1.0) - exp(-kCol * uGasK));
  }
  if (uKerr == 0 && uGas > 0 && uLens > 0.5 && (r0 <= R_OUT || phiIn >= 0.0)) {
    float b = max(r0 * s / sqrt(1.0 - 2.0 / r0), 1e-6);
    float lamZ = -b * dot(cross(e1, e2), uAZ); // 光（カメラへ来る向き）の角運動量の回転軸の成分
    float gObs = 1.0 / sqrt(1.0 - 2.0 / r0);
    float u, v, ph;
    if (r0 <= R_OUT) { u = 1.0 / r0; v = -u * sqrt(1.0 - 2.0 * u) * c1 / max(s, 1e-7); ph = 0.0; }
    else { u = 1.0 / R_OUT; v = sqrt(max(0.0, 1.0 / (b * b) - u * u * (1.0 - 2.0 * u))); ph = phiIn; }
    float I = 0.0; vec3 col = vec3(0.0);
    bool hitDisk = false; vec3 diskC = vec3(0.0);
    float zPrev = dot((cos(ph) * e1 + sin(ph) * e2) / u, uAZ);
    for (int i = 0; i < 400; i++) {
      if (i >= uSteps) break;
      float h = min(0.035, 0.04 * u / max(abs(v), 1e-9));
      float k1u = v, k1v = 3.0 * u * u - u;
      float u2 = u + 0.5 * h * k1u; float k2u = v + 0.5 * h * k1v, k2v = 3.0 * u2 * u2 - u2;
      float u3 = u + 0.5 * h * k2u; float k3u = v + 0.5 * h * k2v, k3v = 3.0 * u3 * u3 - u3;
      float u4 = u + h * k3u; float k4u = v + h * k3v, k4v = 3.0 * u4 * u4 - u4;
      float un = u + h / 6.0 * (k1u + 2.0 * k2u + 2.0 * k3u + k4u);
      float vn = v + h / 6.0 * (k1v + 2.0 * k2v + 2.0 * k3v + k4v);
      float um = 0.5 * (u + un), r = 1.0 / um, phm = ph + 0.5 * h;
      if (uDisk == 1) {
        // 薄い円盤：光の道が赤道面を横切った所で止める（円盤は光を通さない）。何度目の横切りかで「上下に回りこんだ像」になる
        float zN = dot((cos(ph + h) * e1 + sin(ph + h) * e2) / un, uAZ);
        if (zPrev * zN < 0.0) {
          float t = zPrev / (zPrev - zN), rc = 1.0 / mix(u, un, t), pc = ph + t * h;
          if (rc >= R_ISCO && rc <= uDiskROut) {
            vec3 Pc = rc * (cos(pc) * e1 + sin(pc) * e2);
            float gph = atan(dot(Pc, uAY), dot(Pc, uAX)), om = pow(rc, -1.5);
            float g = sqrt(1.0 - 3.0 / rc) * gObs / (1.0 - om * lamZ);
            float F = ntF(rc), Tem = uTmax * pow(F, 0.25);
            float tex = 0.78 + 0.44 * turb(rc, gph, 0.0, om); // 面の模様（演出）
            if (uGas == 1) { float Ib = pow(g, 4.0) * F * tex; diskC = xrayColor(g * Tem / uTmax) * (1.0 - exp(-Ib * uGasK)); }
            else { float Iv = g * pow(F, 0.25) * tex; diskC = bbColor(g * Tem) * (1.0 - exp(-Iv * uGasK)); }
            // 外の端（描くのをやめる所）はなめらかに消す（本当の円盤はもっと外まで続く）
            diskC = mix(c, diskC, smoothstep(uDiskROut, uDiskROut * 0.8, rc));
            hitDisk = true; break;
          }
        }
        zPrev = zN;
      }
      if (uDisk == 0 && r > 2.05) {
        vec3 P = r * (cos(phm) * e1 + sin(phm) * e2);
        float z = dot(P, uAZ), R = sqrt(max(r * r - z * z, 1e-6));
        float H = H_R * max(R, 2.0);
        float sm = pow(r / R_ISCO, -J_SLOPE) * exp(-z * z / (2.0 * H * H)) * smoothstep(R_OUT, R_OUT * 0.55, r) * smoothstep(2.05, 2.5, r);
        if (sm > 1e-4) {
          float gph = atan(dot(P, uAY), dot(P, uAX));
          float om = omegaGas(R, r);
          float n = turb(R, gph, z, om);
          float j = sm * (0.25 + 1.6 * n * n) + hotspot(R, gph, z, om) * pow(r / HS_R, -1.0);
          float g = sqrt(max(1e-6, 1.0 - 2.0 / r - om * om * R * R)) * gObs / (1.0 - om * lamZ);
          float dl = h * r * r / b;
          if (uGas == 1) I += pow(g, G_POW) * j * dl;
          else col += bbColor(3600.0 * g) * pow(g, 4.0) * j * dl;
        }
      }
      u = un; v = vn; ph += h;
      if (u >= 0.5 || (u < 1.0 / R_OUT && v < 0.0)) break;
    }
    if (hitDisk) c = diskC;
    else if (uDisk == 1) {}
    else if (uGas == 1) {
      // 活動の可視化（擬似色）：強さを 1−e^−x で丸めて、暗い赤 → 橙 → 黄 → 白
      float t = 1.0 - exp(-I * uGasK);
      c += vec3(smoothstep(0.0, 0.42, t), smoothstep(0.18, 0.8, t) * 0.92, smoothstep(0.55, 1.0, t) * 0.85) * t * 1.15;
    } else {
      c += (vec3(1.0) - exp(-col * uGasK));
    }
  }
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`,it={from:2e4,to:40,ms:9e3};function at(e,c={}){let p=!0,h=c.profile??ue,g=h.mass.v,_=he(g),se=ge(g),{X:v,Y:y,Z:b,earthLat:de}=tt(h),x=10**Math.round(Math.log10(g/ue.mass.v)),S=[1,10,100,1e3].map(e=>e*x),C=N(h,`disk`),fe=C||N(h,`riaf`),pe=N(h,`companion`)&&h.companion?(()=>{let e=h.companion,t=Math.PI-40*X;return{dir:v.clone().multiplyScalar(Math.cos(t)).addScaledVector(y,Math.sin(t)).normalize(),cos:Math.cos(Math.asin(Math.min(.99,e.radiusRsun.v*695700/(e.sepAu.v*149597870.7))))}})():null,w=new le({antialias:!1}),me=Math.min(window.devicePixelRatio,2),T=Math.min(me,1.5);w.setPixelRatio(T),e.appendChild(w.domElement);let E=w.domElement;E.style.cssText=`position:fixed;inset:0;width:100%;height:100%;touch-action:none;display:block`;let D=new d(new Float32Array(4*Xe),Xe,2,ee,te);D.minFilter=D.magFilter=s,D.needsUpdate=!0;let O=new ie({glslVersion:u,vertexShader:nt,fragmentShader:rt,depthTest:!1,depthWrite:!1,uniforms:{uSky:{value:null},uSkyW:{value:4096},uSkyK:{value:1},uCube:{value:null},uCubeW:{value:1024},uSkyMode:{value:1},uGcK:{value:.6},uCubeS:{value:null},uCubeSW:{value:512},uSOn:{value:0},uTab:{value:D},uN:{value:Xe},uXMin:{value:1e-6},uLogR:{value:1},uBetaC:{value:.1},uLens:{value:1},uExposure:{value:.9},uPos:{value:new a},uRight:{value:new a},uUp:{value:new a},uFwd:{value:new a},uTanHalf:{value:Math.tan(30*X)},uAspect:{value:1},uGas:{value:1},uSteps:{value:220},uGasK:{value:.12},uT:{value:0},uHS:{value:new a(0,0,0)},uOct2:{value:1},uAX:{value:v},uAY:{value:y},uAZ:{value:b},uDisk:{value:+!!C},uNT:{value:Array.from(Ke.f)},uNTr0:{value:Ke.r0},uNTdr:{value:Ke.dr},uTmax:{value:h.disk?.tMaxK.v??1e6},uDiskROut:{value:Math.min(h.disk?.rOut.v??40,48)},uKerr:{value:0},uA:{value:0},uRh:{value:2},uIscoK:{value:6},uKREnd:{value:400},uKSteps:{value:700},uCompOn:{value:+!!pe},uCompDir:{value:pe?.dir??new a(1,0,0)},uCompCos:{value:pe?.cos??1},uCompT:{value:h.companion?.tempK.v??5800},uCompK:{value:7}}}),ye=new Date,be=ye.getUTCFullYear()+(ye.getTime()-Date.UTC(ye.getUTCFullYear(),0,1))/315576e5,k=N(h,`gcSky`)?We(w,be,1024):null;if(k)O.uniforms.uCube.value=k.target.texture;else{let e=new ce(4);O.uniforms.uCube.value=e.texture}let A=k&&N(h,`sStars`)?new Ge(k.fluxRef,512):null;A?(O.uniforms.uCubeS.value=A.target.texture,O.uniforms.uSOn.value=1):O.uniforms.uCubeS.value=O.uniforms.uCube.value;let xe=be,Se=-1,j=``,M=[],Ee=k?1e5:Ye,De=new re,Oe=new oe;De.add(new f(new o(2,2),O));let ke=new m,P=r(`読み込み中`),F=(e,t)=>{e.colorSpace=l,e.generateMipmaps=!0,e.minFilter=ae,e.wrapS=ne,e.anisotropy=w.capabilities.getMaxAnisotropy(),O.uniforms.uSky.value=e,O.uniforms.uSkyW.value=t,P=t>=8192?`8K`:`4K`};ke.load(`./packs/sky-starmap-2020/starmap_2020_4k.jpg`,e=>{P!==`8K`&&F(e,4096)}),ke.load(`./packs/sky-starmap-2020-8k/starmap_2020_8k.jpg`,e=>F(e,8192),void 0,()=>{});let I={r:c.embedded?it.from:h.startR??40,lon:0,lat:(h.startLatDeg===`earth`?de/X:h.startLatDeg)*X,lookYaw:0,lookPitch:0,mode:`orbit`,lens:!0,spin:!1,fovDeg:60,a:0,sMove:!1,gas:+!!fe,sky:+!!k,speed:S[2],tSim:0,hsT0:-1e9,hsPhi:0,autoQ:!0},L=new Worker(new URL(new URL(`lensWorker-DPuGEoxD.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),Ne=0,R=!1,z=0;L.onmessage=e=>{let t=e.data;R=!1,z=t.r0,D.image.data.set(t.tex),D.needsUpdate=!0;let n=O.uniforms;n.uXMin.value=t.xMin,n.uLogR.value=Math.log(t.alphaC/t.xMin),n.uBetaC.value=Math.PI-t.alphaC};let B=()=>{R||z&&Math.abs(I.r/z-1)<.002||(R=!0,L.postMessage({id:++Ne,r0:I.r,n:Xe}))},Pe=()=>{I.hsT0=I.tSim/se,I.hsPhi=Math.random()*2*Math.PI},V=c.embedded?performance.now():-1,H=document.createElement(`div`);H.dataset.role=`bh-hud`,H.style.cssText=`position:fixed;left:10px;right:10px;top:calc(env(safe-area-inset-top) + 8px);color:#dfe6f0;font:12px/1.5 system-ui,sans-serif;pointer-events:none;text-shadow:0 0 4px #000;white-space:pre-wrap`,e.appendChild(H);let U=document.createElement(`div`);U.style.cssText=`position:fixed;left:0;top:0;color:#bcd6ff;font:12px system-ui,sans-serif;pointer-events:none;text-shadow:0 0 4px #000;display:none;transform:translate(8px,-50%)`,U.textContent=`S2`,e.appendChild(U);let W=U.cloneNode();W.textContent=h.label,e.appendChild(W);let G=document.createElement(`div`);G.style.cssText=`position:fixed;left:0;right:0;bottom:calc(env(safe-area-inset-bottom) + 10px);display:flex;gap:6px;justify-content:center;flex-wrap:wrap;padding:0 8px`,e.appendChild(G);let Fe=[],Ie=()=>Fe.forEach(e=>e()),K=(e,t,n)=>{let r=document.createElement(`button`);r.dataset.role=e,r.style.cssText=`background:rgba(20,26,40,.82);color:#e8eef8;border:1px solid #4a5670;border-radius:16px;padding:7px 11px;font:13px system-ui,sans-serif`,r.addEventListener(`click`,()=>{n(),Ie()}),Fe.push(()=>{r.textContent=t()}),G.appendChild(r)};c.embedded&&K(`bh-exit`,()=>`‹ ${c.backLabel??r(`銀河へもどる`)}`,()=>c.onExit?.());let Le=e=>e>=1?r(`{p}倍`,{p:e.toLocaleString(`ja-JP`)}):r(`{p}分の1（スロー）`,{p:Math.round(1/e).toLocaleString(`ja-JP`)});if(c.music){let e=c.music,t={none:r(`🎵 音楽を入れる（5.3 MB）`),loading:r(`🎵 音楽を読みこみ中…`),paused:r(`▶ タップで音楽を再開`),on:r(`🎵 音楽 ON`),off:r(`🔇 音楽 OFF`)};K(`bh-music`,()=>t[e.state()],()=>e.toggle())}let Re=C?[r(`⚫ 円盤なし`),r(`🔥 X線（温度の擬似色）`),r(`🌌 人の目（可視光の近似）`)]:[r(`⚫ ガスなし`),r(`🔥 活動（電波・擬似色）`),r(`🌌 自然（人の目・仮）`)];fe&&(K(`bh-gas`,()=>Re[I.gas],()=>{I.gas=(I.gas+1)%3}),K(`bh-speed`,()=>r(`⏩ 時間 {p}`,{p:Le(I.speed)}),()=>{I.speed=S[(S.indexOf(I.speed)+1)%S.length]}),N(h,`hotspot`)&&K(`bh-flare`,()=>r(`✨ フレア`),Pe)),k&&K(`bh-sky`,()=>I.sky===1?r(`🌌 空：銀河中心から`):r(`🗺 空：地球から（仮）`),()=>{I.sky=I.sky===1?0:1}),A&&K(`bh-sstar`,()=>I.sMove?r(`🌟 S星 1秒＝1年（止める）`):r(`🌟 S星を動かす`),()=>{I.sMove=!I.sMove,A.showOrbits=I.sMove,j=``}),A&&K(`bh-orbit`,()=>r(`🔭 S2 の軌道の全体`),()=>{I.r=6e4,I.lat=35*X,I.sMove=!0,A.showOrbits=!0,j=``});let ze=Ae(h),q=e=>je(h,e)===`assumption`?r(`仮定`):r(`観測の推定`);ze.length>1&&K(`bh-kerr`,()=>I.a===0?r(`🌀 自転 なし`):r(`🌀 自転 a＝{a}（{p}）`,{a:I.a,p:q(I.a)}),()=>{I.a=ze[(ze.indexOf(I.a)+1)%ze.length],Ve()}),K(`bh-spin`,()=>I.spin?r(`⏸ 周回を止める`):r(`🛰 周りを回る`),()=>{I.spin=!I.spin}),K(`bh-mode`,()=>I.mode===`orbit`?r(`🔄 回り込む`):r(`👀 見回す`),()=>{I.mode=I.mode===`orbit`?`look`:`orbit`,I.mode===`orbit`&&(I.lookYaw=0,I.lookPitch=0)}),K(`bh-lens`,()=>I.lens?r(`🌀 レンズ あり`):r(`◻️ レンズ なし`),()=>{I.lens=!I.lens}),K(`bh-far`,()=>r(`🔭 遠く`),()=>{I.r=3e3}),K(`bh-near`,()=>r(`🎯 近く`),()=>{I.r=25});let J=document.createElement(`div`);J.dataset.role=`bh-ledger`,J.style.cssText=`position:fixed;left:10px;right:10px;top:calc(env(safe-area-inset-top) + 8px);bottom:calc(env(safe-area-inset-bottom) + 120px);overflow:auto;display:none;background:rgba(10,14,24,.92);color:#dfe6f0;border:1px solid #4a5670;border-radius:12px;padding:12px;font:12px/1.6 system-ui,sans-serif;white-space:pre-wrap`,J.textContent=r(`{nameJa}：値の区分と出典

{p}`,{nameJa:t(h),p:Me(h)}),e.appendChild(J),K(`bh-ledger`,()=>J.style.display===`none`?r(`📋 区分`):r(`📋 区分を閉じる`),()=>{let e=J.style.display===`none`;J.style.display=e?`block`:`none`,H.style.visibility=e?`hidden`:`visible`}),Ie();let Be=0,Ve=()=>{let e=O.uniforms,t=I.a;if(e.uA.value=t,e.uRh.value=Ce(t),e.uIscoK.value=we(t),C&&Be!==t){let n=t===0?Ke:Te(t,64,46);e.uNT.value=Array.from(n.f),e.uNTr0.value=n.r0,e.uNTdr.value=n.dr,Be=t}},Y=new Map,He=0,Ue=I.r,Ze=e=>Math.max(Je,Math.min(Ee,e));E.addEventListener(`pointerdown`,e=>{if(V=-1,E.setPointerCapture(e.pointerId),Y.set(e.pointerId,{x:e.clientX,y:e.clientY}),Y.size===2){let[e,t]=[...Y.values()];He=Math.hypot(e.x-t.x,e.y-t.y),Ue=I.r}});let et=e=>{Y.delete(e.pointerId)};E.addEventListener(`pointerup`,et),E.addEventListener(`pointercancel`,et),E.addEventListener(`pointermove`,e=>{let t=Y.get(e.pointerId);if(!t)return;let n=e.clientX-t.x,r=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,Y.size===2){let[e,t]=[...Y.values()],n=Math.hypot(e.x-t.x,e.y-t.y);He>0&&(I.r=Ze(Ue*He/n));return}let i=I.fovDeg*X/E.clientHeight;I.mode===`orbit`?(I.lon-=n*i*1.5,I.lat=Math.max(-89*X,Math.min(89*X,I.lat+r*i*1.5))):(I.lookYaw-=n*i,I.lookPitch=Math.max(-80*X,Math.min(80*X,I.lookPitch+r*i)))}),E.addEventListener(`wheel`,e=>{e.preventDefault(),V=-1,I.r=Ze(I.r*Math.exp(e.deltaY*.0015))},{passive:!1});let Z=0,at=0,ot=performance.now(),st=0,ct=0,lt=()=>{I.autoQ&&(Z<42?(st++,ct=0):Z>57?(ct++,st=0):st=ct=0,st>=2&&T>.5&&(T=Math.max(.5,T-.15),w.setPixelRatio(T),st=0),ct>=6&&T<me&&(T=Math.min(me,T+.1),w.setPixelRatio(T),ct=0),O.uniforms.uOct2.value=+(T>=.8))};window.__bh={set:e=>{V=-1,e.pr&&(T=e.pr,w.setPixelRatio(T)),Object.assign(I,e),e.a!==void 0&&Ve(),Ie()},get:()=>({...I,kerr:I.a>0&&I.r<=$e,tabR:z,skyName:P,fps:Z,pr:T,gcCounts:k?.counts,profile:h.id,sYear:xe,s2:M.find(e=>e.name===`S2`)?{rAu:M.find(e=>e.name===`S2`).rAu}:null}),ready:()=>z>0&&P!==r(`読み込み中`),flare:Pe};let Q=new a,ut=new a,dt=new a,ft=new a,$=new a,pt=new a,mt=new a,ht=performance.now(),gt=e=>i()?e>=1e8?r(`{p}億`,{p:(e/1e8).toPrecision(2)}):e>=1e4?r(`{p}万`,{p:(e/1e4).toPrecision(3)}):e.toPrecision(3):e>=1e4?n(e,3):e.toPrecision(3),_t=e=>e>=1e4?e.toExponential(2).replace(`e+`,`×10^`):e.toPrecision(3),vt=_e(6,g)/60,yt=e=>e>=2880?r(`{p} 日`,{p:(e/1440).toFixed(0)}):e>=120?r(`{p} 時間`,{p:(e/60).toFixed(0)}):e>=1?r(`{p} 分`,{p:e.toFixed(0)}):r(`{p} ミリ秒`,{p:(e*60*1e3).toPrecision(2)}),bt=e=>{if(!p)return;if(V>=0){let t=Math.min(1,(e-V)/it.ms),n=t*t*(3-2*t);I.r=it.from*((h.startR??it.to)/it.from)**n,t>=1&&(V=-1)}let n=Math.min(.1,(e-ht)/1e3);ht=e,c.onFrame?.(I.r),I.spin&&(I.lon+=n*.25*Math.min(1,30/I.r));let i=I.tSim;I.tSim+=n*I.speed,N(h,`hotspot`)&&Math.floor(I.tSim/(Qe*x))>Math.floor(i/(Qe*x))&&Pe(),B(),Q.set(0,0,0).addScaledVector(v,Math.cos(I.lat)*Math.cos(I.lon)).addScaledVector(y,Math.cos(I.lat)*Math.sin(I.lon)).addScaledVector(b,Math.sin(I.lat)).multiplyScalar(I.r),ut.copy(Q).negate().normalize(),dt.crossVectors(ut,b).normalize(),ft.crossVectors(dt,ut),$.copy(ut).multiplyScalar(Math.cos(I.lookYaw)).addScaledVector(dt,Math.sin(I.lookYaw)).multiplyScalar(Math.cos(I.lookPitch)).addScaledVector(ft,Math.sin(I.lookPitch)).normalize(),pt.crossVectors($,ft).normalize(),mt.crossVectors(pt,$);let a=E.clientWidth,o=E.clientHeight;E.width!==Math.round(a*T)&&w.setSize(a,o,!1);let s=O.uniforms;s.uPos.value.copy(Q),s.uFwd.value.copy($),s.uRight.value.copy(pt),s.uUp.value.copy(mt),s.uAspect.value=a/o,s.uTanHalf.value=Math.tan(I.fovDeg/2*X),s.uLens.value=+!!I.lens;let l=I.a>0&&I.r<=$e;if(s.uKerr.value=+!!l,s.uKREnd.value=Math.max(400,1.5*I.r),s.uGas.value=I.gas,s.uT.value=I.tSim/se,s.uHS.value.set(I.hsT0,I.hsPhi,3),A&&I.sky===1){A.showOrbits!==I.sMove&&(A.showOrbits=I.sMove,j=``),I.sMove&&(xe+=n);let t=`${Q.x.toPrecision(4)},${Q.y.toPrecision(4)},${Q.z.toPrecision(4)}`;(I.sMove||t!==j)&&e-Se>33&&(Se=e,j=t,M=A.update(w,xe,Q.clone().multiplyScalar(_/qe)));let r=M.find(e=>e.name===`S2`);if(r){let e=r.dirFromCam.dot($),t=Math.tan(I.fovDeg/2*X),n=r.dirFromCam.dot(pt)/e/(a/o*t),i=r.dirFromCam.dot(mt)/e/t,s=e>0&&Math.abs(n)<1&&Math.abs(i)<1;U.style.display=s?`block`:`none`,s&&(U.style.transform=`translate(${(n+1)/2*a+8}px, ${(1-i)/2*o}px) translateY(-50%)`)}}else U.style.display=`none`;{let e=-Q.clone().normalize().dot($),t=I.r>1500&&e>.9;if(W.style.display=t?`block`:`none`,t){let t=Q.clone().negate().normalize(),n=Math.tan(I.fovDeg/2*X),r=t.dot(pt)/e/(a/o*n),i=t.dot(mt)/e/n;W.style.transform=`translate(${(r+1)/2*a+8}px, ${(1-i)/2*o}px) translateY(-50%)`}}s.uGasK.value=C?I.gas===1?1.1:1:I.gas===1?.16:.035,s.uSkyK.value=I.gas===1?.45:1,s.uSkyMode.value=I.sky,w.render(De,Oe),at++,e-ot>1e3&&(Z=at*1e3/(e-ot),at=0,ot=e,lt(),c.music&&Ie());let u=2*ve(I.r)/X,d=C?I.gas===1?r(`
🔥 X 線で光る円盤。明るさ（g⁴）と温度を色にした擬似色（赤＝ぬるい・白＝熱い）`):I.gas===2?r(`
🌌 人の目の色の近似（とても熱いので青白い）。明るさは見やすく丸めた`):``:I.gas===1?r(`
🔥 電波（1.3 mm・EHT の波長）の明るさを見やすい色にした擬似色`):I.gas===2?r(`
🌌 人の目の色の近似。明るさは見やすくした仮の値（可視光では本当はずっと暗い見込み）`):``;H.textContent=r(`{nameJa}{p}  {p2} fps・画質 ×{p3}
`,{nameJa:t(h),p:c.embedded?``:r(`（試作）`),p2:Z.toFixed(0),p3:T.toFixed(2)})+r(`太陽の {p} 倍（{ref}）・{distText}
`,{p:gt(g),ref:h.mass.ref,distText:h.distText})+r(`距離 {p} Rg ＝ {p2} km ＝ {p3} au・影の見かけ {p4}°
`,{p:_t(I.r),p2:_t(I.r*_),p3:_t(I.r*_/qe),p4:u>=1?u.toFixed(1):u.toPrecision(2)})+(fe?r(`時間 {p}（ISCO の 1 周 {p2}＝画面で {p3} 秒）`,{p:Le(I.speed),p2:yt(vt),p3:(vt*60/I.speed).toPrecision(2)})+d+r(C?`
⚠ 円盤の面の模様は演出`:`
⚠ ガスの模様とフレアの起き方は演出`)+(C&&l?r(`
🌀 いちばん内側の温度は観測の値に固定：自転が速いと熱い所が ISCO のそばに集まり、外側はぬるく（赤く）見える`):``)+`
`:``)+(I.a===0?r(`⚠ 自転なしとして計算`):l?r(`🌀 自転 a＝{a} のカー時空で光の道を計算（{p}・ISCO {p2} Rg）`,{a:I.a,p:je(h,I.a)===`assumption`?r(`自転の大きさは仮定`):r(`観測の推定 {text}・{ref}`,{text:h.spin.text,ref:h.spin.ref}),p2:we(I.a).toFixed(2)}):r(`🌀 自転 a＝{a}（{p}）：遠いので差は 1 画素より小さい→ 自転なしの表で描いています`,{a:I.a,p:q(I.a)}))+(h.notes.length?r(`・{p}`,{p:h.notes.join(r(`・`))}):``)+`
`+(I.sky===1&&k?r(`🌟 S星 {sStars} 個は観測の軌道：{p} 年の位置{p2}{p3}
🌌 ミニスパイラルは観測の軌道（光り方は推定）・CND の塵と中心の星団と天の川は推定の模型・明るい星は明るさを丸めた（演出）
`,{sStars:k.counts.sStars,p:xe.toFixed(1),p2:I.sMove?r(`（1 秒＝1 年・ガスとは別の速さ）`):``,p3:M.find(e=>e.name===`S2`)?r(`・S2 は BH から {p} au`,{p:M.find(e=>e.name===`S2`).rAu.toFixed(0)}):``}):h.notes.some(e=>e.includes(`背景`)||/background/i.test(e))?``:r(`⚠ 背景は地球から見た星図（{skyName}）
`,{skyName:P}))+r(l?`⚠ カメラはその場で回らない観測者（ZAMO）・ガスの形は自転なしと同じ模型`:`⚠ カメラは止まっている観測者`),requestAnimationFrame(bt)};return requestAnimationFrame(bt),{dispose(){p&&(p=!1,L.terminate(),k?.target.dispose(),A?.dispose(),D.dispose(),O.dispose(),O.uniforms.uSky.value?.dispose(),w.dispose(),w.forceContextLoss(),e.replaceChildren(),delete window.__bh)}}}export{at as n,tt as t};