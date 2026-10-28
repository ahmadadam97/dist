import { Analytics } from '@vercel/analytics/next';

const verifyButton = document.querySelector('#verify-button');
const verifyResult = document.querySelector('#verify-result');
let checked = false;
verifyButton.addEventListener('click', () => {
  checked = !checked;
  // An explicitly illustrative, deterministic check. No model or external API is called.
  const source = { recordCount: 12, valuePerRecord: 100, extractedTotal: 1240 };
  const computedTotal = source.recordCount * source.valuePerRecord;
  const discrepancy = Math.abs(source.extractedTotal - computedTotal);
  verifyResult.textContent = checked
    ? `Mismatch caught: ${discrepancy}. Flagged for review.`
    : 'AI proposes. Python verifies.';
  verifyButton.querySelector('span').textContent = checked ? 'Reset example' : 'Run a sample check';
  verifyButton.closest('.finance-sketch').classList.toggle('is-checked', checked);
});

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('ahmadmohabdi@gmail.com');
    status.textContent = 'Email copied. Let’s make something useful.';
  } catch {
    status.textContent = 'You can copy the address above or click it to email me.';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
 
export default MyApp;
