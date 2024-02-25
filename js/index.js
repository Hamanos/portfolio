'use strict'; /* 厳格にエラーをチェック */

{
    /* ローカルスコープ */

    // DOM取得
    const tabMenus = document.querySelectorAll('.tab__menu-item');
    console.log(tabMenus);

    // イベント付加
    tabMenus.forEach((tabMenu) => {
        tabMenu.addEventListener('click', tabSwitch);
    })

    // イベントの処理
    function tabSwitch(e) {

        // クリックされた要素のデータ属性を取得
        const tabTargetData = e.currentTarget.dataset.tab;

        // クリックされた要素の親要素と、その子要素を取得
        const tabList = e.currentTarget.closest('.tab__menu');
        console.log(tabList);
        const tabItems = tabList.querySelectorAll('.tab__menu-item');
        console.log(tabItems);

        // クリックされた要素の親要素の兄弟要素の子要素を取得
        const tabPanelItems = tabList.
        nextElementSibling.querySelectorAll('.tab__panel-box');
        console.log(tabPanelItems);

        // クリックされたtabの同階層のmenuとpanelのクラスを削除
        tabItems.forEach((tabItem) => {
            tabItem.classList.remove('is-active');
        })
        tabPanelItems.forEach((tabPanelItem) => {
            tabPanelItem.classList.remove('is-show');
        })

        // クリックされたmenu要素にis-activeクラスを付加
        e.currentTarget.classList.add('is-active');

        // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
        tabPanelItems.forEach((tabPanelItem) => {
            if (tabPanelItem.dataset.panel === tabTargetData) {
                tabPanelItem.classList.add('is-show');
            }
        })

    }

}

const getScrollY = () => {
    const scrolled = window.scrollY;
    const pageTop = document.querySelector('#page-top');

    if (scrolled >= 800) {
        pageTop.classList.add( 'open' );
    } else {
        pageTop.classList.remove( 'open' );
    }
};

window.addEventListener('scroll',getScrollY);

// 監視対象が範囲内に現れたら実行する動作
const animateScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('displayed');
        
      }
    });
  };
  
  // 監視設定
  const scrollObserver = new IntersectionObserver(animateScroll);
  
  // 監視の指示
  const scrollElements = document.querySelectorAll('.sec-title');
  scrollElements.forEach((scrollElement) => {
    scrollObserver.observe(scrollElement);
  });
