'use strict';

const all = document.querySelectorAll('#con1 button');
const hp = document.querySelectorAll('#con2 button');
const bn = document.querySelectorAll('#con3 button');
const ot = document.querySelectorAll('#con4 button');
const modal = document.querySelector('#modal');
const mask = document.querySelector('#mask');
const contents = document.querySelector('#contents');
const close = document.querySelector('#close');

const hideKeyframes = {
    opacity: [1, 0],
    visibility: 'hidden',
};
const options = {
    duration: 800,
    easing: 'ease',
    fill: 'forwards',
};

// モーダルウィンドウを開く

for (let i = 0; i < all.length; i++) {

    all[i].addEventListener('click', (e) => {
        

        const showKeyframes = {
            opacity: [0, 1],
            visibility: 'visible',
            transform: 'translate(-450px, 0px)',
        };

        const options = {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        };

        const hideKeyframes = {
            opacity: [1, 0],
            visibility: 'hidden',
        };

        modal.animate(showKeyframes, options);
        mask.animate(showKeyframes, options);


        const content = `<iframe src="all/work${[i] + 1}.html" frameborder="0"></iframe>`;
        contents.insertAdjacentHTML('beforeend', content);

        // モーダルウィンドウを閉じる
        close.addEventListener('click', () => {
            modal.animate(hideKeyframes, options);
            mask.animate(hideKeyframes, options);
            // location.replace('index.html#work');
            document.location.reload('index.html#work');
            document.querySelector('.tab__panel-box002').dataset.tab;
        });

        // マスクをクリックしてモーダルウィンドウを閉じる
        mask.addEventListener('click', () => {
            close.click();
            // location.replace('index.html#work');
            document.location.reload('index.html#work');
        });


    });
};

// モーダルウィンドウを開く

for (let i = 0; i < hp.length; i++) {

    hp[i].addEventListener('click', (e) => {


        const showKeyframes = {
            opacity: [0, 1],
            visibility: 'visible',
            transform: 'translate(-450px, 0px)',
        };

        const options = {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        };

        const hideKeyframes = {
            opacity: [1, 0],
            visibility: 'hidden',
        };

        modal.animate(showKeyframes, options);
        mask.animate(showKeyframes, options);


        const content = `<iframe src="hp/work${[i] + 1}.html" frameborder="0"></iframe>`;
        contents.insertAdjacentHTML('beforeend', content);

                // モーダルウィンドウを閉じる
                close.addEventListener('click', () => {
                    modal.animate(hideKeyframes, options);
                    mask.animate(hideKeyframes, options);
                    document.location.reload();
                    
                });
        
                // マスクをクリックしてモーダルウィンドウを閉じる
                mask.addEventListener('click', () => {
                    close.click();
                    document.location.reload();
                    
                });
    });
};

// モーダルウィンドウを開く

for (let i = 0; i < bn.length; i++) {

    bn[i].addEventListener('click', (e) => {


        const showKeyframes = {
            opacity: [0, 1],
            visibility: 'visible',
            transform: 'translate(-450px, 0px)',
        };

        const options = {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        };

        const hideKeyframes = {
            opacity: [1, 0],
            visibility: 'hidden',
        };

        modal.animate(showKeyframes, options);
        mask.animate(showKeyframes, options);


        const content = `<iframe src="bn/work${[i] + 1}.html" frameborder="0"></iframe>`;
        contents.insertAdjacentHTML('beforeend', content);

                // モーダルウィンドウを閉じる
                close.addEventListener('click', () => {
                    modal.animate(hideKeyframes, options);
                    mask.animate(hideKeyframes, options);
                    document.location.reload();
                });
        
                // マスクをクリックしてモーダルウィンドウを閉じる
                mask.addEventListener('click', () => {
                    close.click();
                    document.location.reload();
                });
    });
};

// モーダルウィンドウを開く

for (let i = 0; i < ot.length; i++) {

    ot[i].addEventListener('click', (e) => {


        const showKeyframes = {
            opacity: [0, 1],
            visibility: 'visible',
            transform: 'translate(-450px, 0px)',
        };

        const options = {
            duration: 800,
            easing: 'ease',
            fill: 'forwards',
        };

        const hideKeyframes = {
            opacity: [1, 0],
            visibility: 'hidden',
        };

        modal.animate(showKeyframes, options);
        mask.animate(showKeyframes, options);


        const content = `<iframe src="ot/work${[i] + 1}.html" frameborder="0"></iframe>`;
        contents.insertAdjacentHTML('beforeend', content);

                // モーダルウィンドウを閉じる
                close.addEventListener('click', () => {
                    modal.animate(hideKeyframes, options);
                    mask.animate(hideKeyframes, options);
                    document.location.reload();
                });
        
                // マスクをクリックしてモーダルウィンドウを閉じる
                mask.addEventListener('click', () => {
                    close.click();
                    document.location.reload();
                });
    });
};

//スキルモーダル
const modalWrapOpen = function(e) {
    const dataModalOpen = e.currentTarget.dataset.modalOpen;
    Array.from(document.querySelectorAll('.skill_modal_wrapper')).forEach((e, i) => {
      if(e.getAttribute('data-modal') === dataModalOpen){
        e.classList.toggle('is_open');
      }
    })
  }
  
  Array.from(document.querySelectorAll('.skill_modal_open')).forEach((modalOpenElement) => {
    modalOpenElement.addEventListener('click', modalWrapOpen);
  })
  
  const modalCloseAction = function(e) {
    const targetModal = e.currentTarget.closest('.skill_modal_wrapper');
    targetModal.classList.toggle('is_open')
  };
  
  Array.from(document.querySelectorAll('.skill_modal_close')).forEach((modalCloseElement) => {
    modalCloseElement.addEventListener('click', modalCloseAction)
  })

  