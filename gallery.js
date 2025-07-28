$(window).on('load', function () {
  const grid = new Muuri('.grid', {
    showDuration: 600,
    showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    hideDuration: 600,
    hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    visibleStyles: {
      opacity: '1',
      transform: 'scale(1)'
    },
    hiddenStyles: {
      opacity: '0',
      transform: 'scale(0.5)'
    }
  });

  // .box をクリック対象にする
  $('.sort-btn .box').on('click', function () {
    $('.sort-btn .box').removeClass('active');
    $(this).addClass('active');

    const filter = $(this).data('filter'); //  "scene" など

    if (filter === 'all') {
      grid.show(); // すべて表示
    } else {
      // 各アイテムの class="item sort01" などに対応
      grid.filter('.sort' + getSortNumberFromFilter(filter));
    }
  });

  // data-filter の値 → sortクラスに対応する番号を返す
  function getSortNumberFromFilter(filter) {
    switch (filter) {
      case 'scene': return '01';
      case 'plant': return '02';
      case 'life':  return '03';
      default:      return '00'; // all
    }
  }
});

$(function () {
  const pagetop = $('#page-top');

  // 最初の判定：スクロール位置を見て表示/非表示
  if ($(window).scrollTop() > 800) {
    pagetop.show(); // ← show()で即表示（fadeだと一瞬消える）
  } else {
    pagetop.hide();
  }

  // スクロールイベントで再判定
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 800) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  // クリックでトップに戻る
  pagetop.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
  });
});

