// import React from 'react';
import { createRoot } from 'react-dom/client';

console.log('This is the content script! 11111');

function init() {
  const body = document.querySelector('body');
  const root = document.createElement('div');
  root.id = 'a2e-content-root';
  root.textContent = 'a2e text content';
  // document.body.appendChild(root);
  if (body) {
    console.log('🚀 ~ file: index.tsx:11 ~ body:');
    body.appendChild(root);
  }
  const rootContainer = createRoot(root);
  console.log('🚀 ~ file: index.tsx:17 ~ init ~ rootContainer:', rootContainer);
  // rootContainer.render(<h1>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>);
}
// window.onload = () => {
//   // init();
//   console.log('This is the content script! window.onload 111111');
// };

init();
