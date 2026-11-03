// Run: node tests/contact.test.mjs  (no dependencies; fake in-memory D1)
import { onRequest } from '../functions/api/contact.js';
import assert from 'node:assert/strict';
const rows = [];
const DB = { prepare(sql) { return { bind(...a) { return {
  async first() { return { n: rows.filter(r => r.ip_hash === a[0]).length }; },
  async run() { rows.push({ name:a[0], email:a[1], message:a[2], lang:a[3], page:a[4], ua:a[5], ip_hash:a[6] }); return {success:true}; } }; } }; } };
const H = { 'content-type':'application/json', origin:'https://atlas-ges.pages.dev', 'cf-connecting-ip':'1.2.3.4' };
const req = (body, method='POST', headers=H) => new Request('https://atlas-ges.pages.dev/api/contact', { method, headers, body: method==='POST'? (typeof body==='string'?body:JSON.stringify(body)) : undefined });
const call = async (r, env={DB}) => { const res = await onRequest({ request:r, env }); return [res.status, await res.json()]; };
const good = { name:'TEST', email:'a@b.co', message:'hello', lang:'ar', page:'/' };
let r;
r = await call(req(null,'GET')); assert.equal(r[0],405); console.log('GET -> 405');
r = await call(req(good)); assert.equal(r[0],201); assert.equal(rows.length,1); assert.equal(rows[0].lang,'ar'); assert.ok(!rows[0].ip_hash.includes('1.2.3.4')); console.log('valid -> 201, row stored, ip hashed');
r = await call(req({...good, email:'nope'})); assert.equal(r[0],400); console.log('bad email -> 400');
r = await call(req({...good, name:''})); assert.equal(r[0],400); console.log('empty name -> 400');
r = await call(req({...good, message:'x'.repeat(5001)})); assert.equal(r[0],400); console.log('long msg -> 400');
r = await call(req('{not json')); assert.equal(r[0],400); console.log('bad json -> 400');
r = await call(req({...good, website:'spam'})); assert.equal(r[0],200); assert.equal(rows.length,1); console.log('honeypot -> 200, no row');
r = await call(req(good,'POST',{...H, origin:'https://evil.example'})); assert.equal(r[0],403); console.log('foreign origin -> 403');
for (let i=0;i<4;i++) await call(req(good));
assert.equal(rows.length,5); r = await call(req(good)); assert.equal(r[0],429); assert.equal(rows.length,5); console.log('6th in window -> 429');
r = await call(req(good,'POST',{...H,'cf-connecting-ip':'9.9.9.9'})); assert.equal(r[0],201); console.log('other IP -> 201');
r = await call(req(good), {}); assert.equal(r[0],500); assert.deepEqual(r[1],{ok:false,error:'server'}); console.log('no DB -> 500 generic');
const boom = { prepare(){ throw new Error('secret stack'); } };
r = await call(req({...good}), {DB:boom}); assert.equal(r[0],500); assert.ok(!JSON.stringify(r[1]).includes('stack')); console.log('DB throws -> 500, no stack');
console.log('ALL PASS');
