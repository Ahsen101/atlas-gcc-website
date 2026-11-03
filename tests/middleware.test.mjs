// Run: node tests/middleware.test.mjs  (no dependencies)
import { onRequest } from '../functions/_middleware.js';
import assert from 'node:assert/strict';
const next = async () => new Response('page', { status: 200 });
const call = (u) => onRequest({ request: new Request(u), next });
let r = await call('https://www.atlasges.com/services/surveys/?a=1');
assert.equal(r.status, 301); assert.equal(r.headers.get('location'), 'https://atlasges.com/services/surveys/?a=1'); console.log('www path+query -> 301 apex');
r = await call('http://www.atlasges.com/'); assert.equal(r.headers.get('location'), 'https://atlasges.com/'); console.log('www http -> https apex');
r = await call('https://atlasges.com/services/'); assert.equal(r.status, 200); console.log('apex passes through');
r = await call('https://atlas-ges-bgn.pages.dev/'); assert.equal(r.status, 200); console.log('pages.dev passes through');
console.log('ALL PASS');
