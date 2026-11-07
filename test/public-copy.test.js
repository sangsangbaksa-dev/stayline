/* Guards public wording that this audit checked in source.
   It is not a legal certification, and it does not verify the live checkout. */
const test = require('node:test'), assert = require('node:assert'), fs = require('node:fs'), path = require('node:path');
const root = path.join(__dirname, '..');
const read = (rel) => fs.readFileSync(path.join(root, rel), 'utf8');
const CFG = require('../config.js');
const L = require('../scripts/landing-strings.json');
const X = require('../scripts/site-i18n.js');
const I = require('../app/i18n.js');

const LANGS = ['en', 'ko', 'ja', 'zh', 'es'];
const CHECKOUT = 'https://quickbillapp.lemonsqueezy.com/checkout/buy/77e23ea2-67e5-42cf-aa37-640751e9e71d';

test('payment configuration stays on the existing checkout and price', () => {
  assert.equal(CFG.checkoutUrl, CHECKOUT);
  assert.equal(CFG.price, '$19');
  assert.equal(CFG.priceAmount, '19');
  assert.equal(CFG.priceCurrency, 'USD');
  assert.equal(CFG.licenseApi, '/api/license');
  const licence = read('api/license.js');
  assert.match(licence, /https:\/\/api\.lemonsqueezy\.com\/v1\/licenses\/validate/);
  assert.match(licence, /license_key/);
  assert.equal(read('app/sw.js').includes("var V='stayline-v8'"), true);
});

test('existing refund promises are unchanged in every locale', () => {
  assert.equal(L.en.payNote, 'Not right for you? Refund within 14 days of purchase.');
  assert.equal(L.ko.payNote, '맞지 않으면 구매 후 14일 이내 환불.');
  assert.equal(L.ja.payNote, '合わない場合は、購入から14日以内に返金。');
  assert.equal(L.zh.payNote, '如不适合，购买后14天内可退款。');
  assert.equal(L.es.payNote, 'Si no te sirve, reembolso dentro de los 14 días posteriores a la compra.');
  assert.equal(X.en.term[2], 'Refunds: if Pro does not work for you, write to {email} within 14 days of purchase and we will refund you. Rights you have under the law where you live are not affected.');
  assert.match(X.ko.term[2], /14일/);
  assert.match(X.ja.term[2], /14日/);
  assert.match(X.zh.term[2], /14 天/);
  assert.match(X.es.term[2], /14 días/);
  assert.equal(I.L.en.payRefund, 'Not right for you? Email us within 14 days of purchase and we refund you.');
  for (const l of LANGS) assert.match(I.L[l].payRefund, /14/);
});

test('privacy, terms and FAQ describe optional cloud backup without absolute local-only claims', () => {
  const banned = ['In this browser only', 'Nothing else is sent', 'for a short time', 'uses no cookies', 'Your data lives on your device', 'We cannot recover'];
  for (const l of LANGS) {
    const blob = [L[l].a3, X[l].priv.join('\n'), X[l].term.join('\n'), X[l].metaDesc].join('\n');
    assert.match(L[l].a3, /Supabase/);
    assert.match(X[l].priv[0], /Supabase/);
    assert.match(X[l].term[3], /Supabase/);
    for (const phrase of banned) assert.equal(blob.includes(phrase), false, l + ' still says ' + phrase);
    const page = l === 'en' ? 'index.html' : l + '/index.html';
    const html = read(page);
    assert.equal(html.includes(L[l].a3), true, page + ' FAQ was not rebuilt');
    assert.equal(html.includes(CHECKOUT), true);
  }
  assert.match(X.en.priv[0], /does not remove the cloud copy/);
  assert.match(X.en.priv[1], /no control that deletes a cloud copy/);
  assert.match(X.en.priv[3], /licence key/);
  assert.match(X.en.priv[3], /IP addresses/);
  assert.equal(X.en.priv.join('\n').includes('for a short time'), false);
  assert.match(X.en.priv[4], /Cloudflare Pages/);
  assert.match(X.en.term[3], /Recovery is not guaranteed/);
});

test('immigration and tax claims are qualified in every locale', () => {
  for (const l of LANGS) {
    const landing = [L[l].h1, L[l].lead, L[l].s3, L[l].fx2, L[l].fx5, L[l].fx6, X[l].metaDesc].join('\n');
    assert.equal(/see exactly|earliest day you can return|183-day tax rule|Tax residency:/.test(landing), false, l);
    assert.match(I.L[l].r_tax183, /183/);
    assert.equal(I.L[l].r_tax183.includes('Tax residency:'), false);
    assert.match(I.L[l].borderDisc, /\S/);
    assert.match(I.L[l].disclaimer, /\S/);
    assert.match(I.L[l].explain_tax183, /183/);
  }
  assert.match(L.en.lead, /do not decide immigration status or tax residency/);
  assert.match(L.en.fx2, /visa, permit and official rules/);
  assert.match(L.en.fx5, /do not determine tax residency/);
  assert.match(L.en.fx6, /not an official immigration document/);
  assert.match(I.L.en.borderDisc, /Not an official immigration document/);
  assert.match(I.L.en.explain_tax183, /does not decide tax residency/);
  assert.match(I.L.en.disclaimer, /not an immigration or tax decision/);
  assert.match(L.ko.lead, /정해지지 않습니다/);
  assert.match(L.ja.lead, /決まりません/);
  assert.match(L.zh.lead, /不能决定/);
  assert.match(L.es.lead, /no decide/);
  assert.equal(I.L.ko.r_tax183.includes('세법상 거주자:'), false);
  assert.equal(I.L.ja.r_tax183.includes('税務上の居住者'), false);
  assert.match(I.L.zh.r_tax183, /不是税务居民判定/);
  assert.equal(I.L.zh.r_tax183.includes('税务居民：'), false);
  assert.equal(I.L.es.r_tax183.includes('Residencia fiscal:'), false);
});
