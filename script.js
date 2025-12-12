const $ = v=>document.querySelector(v);

$("#showPopup").addEventListener('click',()=>popup('alert'));
$("#showConfirm").addEventListener('click',()=>popup('confirm'));
$("#showPrompt").addEventListener('click',()=>popup('prompt'));