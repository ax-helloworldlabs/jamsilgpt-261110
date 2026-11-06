const address = '서울 송파구 올림픽로35길 123, 9층(신천동, 향군타워) 대강의실';
document.getElementById('copy-address').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(address); status.textContent = '교육장 주소를 복사했습니다.'; }
  catch { status.textContent = address; }
});
let closedForPrint = [];
window.addEventListener('beforeprint', () => {
  closedForPrint = [...document.querySelectorAll('details:not([open])')];
  closedForPrint.forEach(detail => detail.open = true);
});
window.addEventListener('afterprint', () => {
  closedForPrint.forEach(detail => detail.open = false);
  closedForPrint = [];
});
document.getElementById('print-page').addEventListener('click', () => window.print());
