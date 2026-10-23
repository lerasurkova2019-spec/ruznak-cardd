const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const langBtn = document.getElementById('langBtn');
const translations = {
  ru: { save:'Сохранить контакт',book:'Записаться на встречу',aboutTitle:'О компании',aboutLead:'РУЗНАК — портал по управлению маркировкой «Честный Знак», объединяющий возможности:',feature1:'Документооборота',feature2:'Маркировки',feature3:'Аналитики',feature4:'Интеграции с системой учёта данных',linksTitle:'Ссылки и материалы',linksPending:'Материалы будут добавлены позже.' },
  en: { save:'Save contact',book:'Book a meeting',aboutTitle:'About the company',aboutLead:'RUZNAK is a portal for managing Chestny ZNAK product labeling, combining:',feature1:'Document management',feature2:'Product labeling',feature3:'Analytics',feature4:'Integration with accounting systems',linksTitle:'Links & materials',linksPending:'Materials will be added later.' }
};
function setTheme(theme){root.dataset.theme=theme;themeBtn.textContent=theme==='light'?'☾ Dark':'☀ Light';localStorage.setItem('ruznak-theme',theme)}
function setLang(lang){root.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=translations[lang][el.dataset.i18n]});langBtn.textContent=lang==='ru'?'EN':'RU';document.title=lang==='ru'?'Ирина Романова · РУЗНАК':'Irina Romanova · RUZNAK';localStorage.setItem('ruznak-lang',lang)}
setTheme(localStorage.getItem('ruznak-theme')==='light'?'light':'dark');
setLang(localStorage.getItem('ruznak-lang')==='en'?'en':'ru');
themeBtn.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
langBtn.addEventListener('click',()=>setLang(root.lang==='ru'?'en':'ru'));
const vcard = ['BEGIN:VCARD','VERSION:3.0','N:Романова;Ирина;;;','FN:Ирина Романова','ORG:РУЗНАК','TITLE:CEO','TEL;TYPE=WORK:+74992898859','TEL;TYPE=CELL:+79185828302','EMAIL;TYPE=INTERNET:ru.znak@mail.ru','URL:https://ru-znak.ru','END:VCARD'].join('\r\n')+'\r\n';
document.getElementById('saveContact').addEventListener('click',event=>{event.preventDefault();const blob=new Blob(['\ufeff',vcard],{type:'text/vcard;charset=utf-8'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='Irina-Romanova.vcf';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)});
