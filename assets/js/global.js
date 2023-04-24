/**
 * Tab Function
 */

function tab(wrapperId) {
  const element = document.getElementById(wrapperId);
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

// Execute function
tab('tabBookList');

/**
 * Random Show
 */
function randomShow(targetId, targetItem) {
  const target = document.getElementById(targetId);
  if(target) {
    const itemArray = target.querySelectorAll(targetItem),
          total = itemArray.length;
    let randomNum = Math.floor( Math.random() * total );
    itemArray[randomNum].classList.remove('hidden');
  }
}
randomShow('randomNovel', '.random-novel__item');
randomShow('homeFirstView', '.home__firstview-item');