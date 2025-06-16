/*
Smooth Scroll behavior polyfill( for Safari & IE )
https://github.com/iamdustan/smoothscroll
*/
!function(){"use strict";function o(){var o=window,t=document;if(!("scrollBehavior"in t.documentElement.style&&!0!==o.__forceSmoothScrollPolyfill__)){var l,e=o.HTMLElement||o.Element,r=468,i={scroll:o.scroll||o.scrollTo,scrollBy:o.scrollBy,elementScroll:e.prototype.scroll||n,scrollIntoView:e.prototype.scrollIntoView},s=o.performance&&o.performance.now?o.performance.now.bind(o.performance):Date.now,c=(l=o.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);o.scroll=o.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?h.call(o,t.body,void 0!==arguments[0].left?~~arguments[0].left:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:o.scrollY||o.pageYOffset):i.scroll.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:o.scrollX||o.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:o.scrollY||o.pageYOffset))},o.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?i.scrollBy.call(o,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):h.call(o,t.body,~~arguments[0].left+(o.scrollX||o.pageXOffset),~~arguments[0].top+(o.scrollY||o.pageYOffset)))},e.prototype.scroll=e.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var o=arguments[0].left,t=arguments[0].top;h.call(this,this,void 0===o?this.scrollLeft:~~o,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},e.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):i.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},e.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var l=function(o){for(;o!==t.body&&!1===(e=p(l=o,"Y")&&a(l,"Y"),r=p(l,"X")&&a(l,"X"),e||r);)o=o.parentNode||o.host;var l,e,r;return o}(this),e=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(h.call(this,l,l.scrollLeft+r.left-e.left,l.scrollTop+r.top-e.top),"fixed"!==o.getComputedStyle(l).position&&o.scrollBy({left:e.left,top:e.top,behavior:"smooth"})):o.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else i.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function n(o,t){this.scrollLeft=o,this.scrollTop=t}function f(o){if(null===o||"object"!=typeof o||void 0===o.behavior||"auto"===o.behavior||"instant"===o.behavior)return!0;if("object"==typeof o&&"smooth"===o.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+o.behavior+" is not a valid value for enumeration ScrollBehavior.")}function p(o,t){return"Y"===t?o.clientHeight+c<o.scrollHeight:"X"===t?o.clientWidth+c<o.scrollWidth:void 0}function a(t,l){var e=o.getComputedStyle(t,null)["overflow"+l];return"auto"===e||"scroll"===e}function d(t){var l,e,i,c,n=(s()-t.startTime)/r;c=n=n>1?1:n,l=.5*(1-Math.cos(Math.PI*c)),e=t.startX+(t.x-t.startX)*l,i=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,e,i),e===t.x&&i===t.y||o.requestAnimationFrame(d.bind(o,t))}function h(l,e,r){var c,f,p,a,h=s();l===t.body?(c=o,f=o.scrollX||o.pageXOffset,p=o.scrollY||o.pageYOffset,a=i.scroll):(c=l,f=l.scrollLeft,p=l.scrollTop,a=n),d({scrollable:c,method:a,startTime:h,startX:f,startY:p,x:e,y:r})}}"object"==typeof exports&&"undefined"!=typeof module?module.exports={polyfill:o}:o()}();

// 閲覧モードの管理
function viewModeManager() {
  const viewModeBtn = document.querySelector('#modeChangeBtn');
  // 閲覧モード切り替え
  if (viewModeBtn) {
    viewModeBtn.addEventListener('click', () => {
      let currentMode = window.document.documentElement.dataset.colorMode;
      if (currentMode === 'dark') {
        window.document.documentElement.dataset.colorMode = 'light';
        localStorage.setItem('kokyushobo-color-mode', 'light');
      }
      else {
        window.document.documentElement.dataset.colorMode = 'dark';
        localStorage.setItem('kokyushobo-color-mode', 'dark');
      }
    });
  }
}

// 「TOPへ戻る」のスムーススクロール処理
function smoothscroll() {
  const pagetopBtn = document.querySelector('#btn-to-top');
  if (pagetopBtn) {
    pagetopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });  
  }  
}

// 外部リンクに rel="noopener noreferrer" を追加
function linkUpdate() {
  const linkArray = document.querySelectorAll('a[href^="http"]');
  linkArray.forEach(link => {
    if (link.hostname !== location.hostname) {
      link.setAttribute('rel', 'noopener noreferrer');
      link.setAttribute('target', '_blank');
    }
  });
}

// グロナビ開閉
function toggleOpen(target) {
  target?.addEventListener('click', function(){
    this.classList.toggle("open")
  })  
}

// Tab Function
function tab(wrapperId) {
  const element = document.getElementById(wrapperId);
  if(element) {
    const tabList = element?.querySelector('[role="tablist"]');
    const tabButtonList = element?.querySelectorAll('[role="tab"]');
    const tabArrayList = [].slice.call(tabButtonList);
  
    // Initialize tabFocus
    const activeTab = element?.querySelector('[aria-selected="true"]');
    const indexNum = tabArrayList.indexOf(activeTab);
    let tabFocus = indexNum || 0;
  
    // Toggle function
    const toggleTab = (event) => {
      const eventTarget = event.currentTarget;
      const targetPanel = eventTarget.getAttribute('aria-controls');
      const activeTab = element?.querySelector('[aria-selected="true"]');
      const activeContent = element?.querySelector('[aria-hidden="false"]');
  
      // Toggle tab's aria-selected
      activeTab?.setAttribute('aria-selected', 'false');
      activeTab?.setAttribute('tabindex', '-1');
      eventTarget?.setAttribute('aria-selected', 'true');
      eventTarget?.setAttribute('tabindex', '0');
      const indexNum = tabArrayList.indexOf(eventTarget);
      tabFocus = indexNum;
  
      // Toggle content's aria-hidden
      activeContent?.setAttribute('aria-hidden', 'true');
      element?.querySelector(`#${targetPanel || 'not-supplied'}`)?.setAttribute('aria-hidden', 'false');
      event.preventDefault();
    };
  
    // Tab click EventListener
    tabButtonList?.forEach((item) => {
      item.addEventListener('click', toggleTab);
    });
  
    // Keydown function
    const keydownFocus = (event) => {
      // Detect arrow direction
      if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
        // Reset tabindex
        tabButtonList && tabButtonList[tabFocus].setAttribute('tabindex', '-1');
        // Move Right
        if (tabButtonList && event.code === 'ArrowRight') {
          tabFocus += 1;
          // If you are at the end, go back to the start
          if (tabFocus >= tabButtonList.length) {
            tabFocus = 0;
          }
        } else if (tabButtonList && event.code === 'ArrowLeft') {
          tabFocus -= 1;
          // If you are at the start, move to the end
          if (tabFocus < 0) {
            tabFocus = tabButtonList.length - 1;
          }
        }
        // Change tabindex
        const tabFocused = tabButtonList && (tabButtonList[tabFocus]);
        tabFocused && tabFocused.setAttribute('tabindex', '0');
        tabFocused && tabFocused.focus();
      }
    };
  
    // Tab keydown EventListener
    tabList?.addEventListener('keydown', keydownFocus);
  }
}

// Random Show
function randomShow(targetId, targetItem) {
  const target = document.getElementById(targetId);
  if(target) {
    const itemArray = target.querySelectorAll(targetItem),
          total = itemArray.length;
    let randomNum = Math.floor( Math.random() * total );
    itemArray[randomNum].classList.remove('hidden');
  }
}

// 関数実行
window.addEventListener('DOMContentLoaded', () => {
  viewModeManager();
  linkUpdate();
  smoothscroll();

  const gnavBtn = document.querySelector('#mobileGnavBtn');
  toggleOpen(gnavBtn) ;

  tab('tabBookList');

  randomShow('randomNovel', '.random-novel__item');
  randomShow('homeFirstView', '.home__firstview-item');
  
});