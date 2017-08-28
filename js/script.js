'use strict';

// Constants

var CONST = {};

// 即時実効
(function() {
  // 言語判定（英語ページの場合は英語の情報を取得するため）
  var href = window.location.href;
  var prefix = 'ja';
  if(href.match('\/en')){
    prefix = 'en-us';
  }

  // Zendesk API URL
  var SECTION_ID_ANNOUNCEMENT = '207255008';
  var SECTION_ID_MAINTENANCE = '207271047';
  var SECTION_ID_FAILURE = '207255108';

  var JSON_URL_BASE = 'https://skyway-support.zendesk.com/api/v2/help_center/' + prefix + '/sections/';
  var JSON_URL_QUERY = '/articles.json?sort_by=created_at&sort_order=desc&per_page=3';  // 3件、作成日降順

  CONST.JSON_URL_ANNOUNCEMENT = JSON_URL_BASE + SECTION_ID_ANNOUNCEMENT + JSON_URL_QUERY;
  CONST.JSON_URL_MAINTENANCE = JSON_URL_BASE + SECTION_ID_MAINTENANCE + JSON_URL_QUERY;
  CONST.JSON_URL_FAILURE = JSON_URL_BASE + SECTION_ID_FAILURE + JSON_URL_QUERY;

  // Zendesk 新着情報 URL
  var ZENDESK_URL_BASE = 'https://support.skyway.io/hc/' + prefix + '/sections/';

  CONST.ZENDESK_URL_ANNOUNCEMENT = ZENDESK_URL_BASE + SECTION_ID_ANNOUNCEMENT;
  CONST.ZENDESK_URL_MAINTENANCE = ZENDESK_URL_BASE + SECTION_ID_MAINTENANCE;
  CONST.ZENDESK_URL_FAILURE = ZENDESK_URL_BASE + SECTION_ID_FAILURE;
})();

// DOMが準備できてから実行
$(function() {
  // Twitter Bootstrap Tooltips

  $('[data-toggle="tooltip"]').tooltip();

  // <h2>~<h6>ホバー時にアンカーアイコンを表示

  var headers = '#main > h2, #main > h3, #main > h4, #main > h5, #main > h6';
  $(headers).filter('[id]').each(function () {
    var header    = $(this),
      headerId    = header.attr('id'),
      anchorClass = 'header-link',
      anchorIcon  = '<i class="fa fa-link" aria-hidden="true"></i>';
    if (headerId) {
      header.prepend($('<a />').addClass(anchorClass).attr({ 'href': '#' + headerId, 'aria-hidden': 'true' }).html(anchorIcon));
    }
    return this;
  });
});
