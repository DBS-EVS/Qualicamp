import"./mustache.c5531e42.js";import{b as c}from"./init.8fc33a94.js";import{s as m,r as g,e as n}from"./sign_script.8b8c276b.js";import{p as a,o as h,c as W,d as b,e as A,u as l,a as P,b as f}from"./vars.c54db3b0.js";WA.onInit(async()=>{c().then(()=>{console.log("Scripting API Extra ready")}).catch(p=>console.error(p));const r=await WA.room.website.get("sign6a"),s=await WA.room.website.get("sign6b"),o=new Map([[r,n],[s,n]]);m(o),g(o),WA.room.onEnterZone(a,()=>{h(f,P,l)}),WA.room.onLeaveZone(a,()=>{W()});var e="technician-informed",i="popUpTechnician",t="Techniker ist informiert.";WA.room.onEnterZone(e,()=>{b(i,t,"OK")}),WA.room.onLeaveZone(e,()=>{A()})});
