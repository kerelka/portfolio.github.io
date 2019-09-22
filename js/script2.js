
// Script Personal information
const pInfo = document.getElementById('personalInfo');
const personal = document.getElementById('personal');
const pButton = document.getElementById('btn_expand');
function expand_info() {
  if (pInfo.classList.contains('hidden')){
    pInfo.classList.remove('hidden');
    personal.classList.add('personalBeauty');
    pButton.classList.add('btn_expand');
    pButton.classList.remove('btn_hide');
    pButton.innerHTML = '>> Hide <<';
  }else{
    pInfo.classList.add('hidden');
    personal.classList.remove('personalBeauty');
    pButton.classList.remove('btn_expand');
    pButton.classList.add('btn_hide');
    pButton.innerHTML = '<< Expand >>';
  }
}
