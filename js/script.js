$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  /** 新着情報取得用スクリプト ここから**/

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

  var JSON_URL_ANNOUNCEMENT = JSON_URL_BASE + SECTION_ID_ANNOUNCEMENT + JSON_URL_QUERY;
  var JSON_URL_MAINTENANCE = JSON_URL_BASE + SECTION_ID_MAINTENANCE + JSON_URL_QUERY;
  var JSON_URL_FAILURE = JSON_URL_BASE + SECTION_ID_FAILURE + JSON_URL_QUERY;

  // Zendesk 新着情報 URL
  var ZENDESK_URL_BASE = 'https://support.skyway.io/hc/' + prefix + '/sections/';

  var ZENDESK_URL_ANNOUNCEMENT = ZENDESK_URL_BASE + SECTION_ID_ANNOUNCEMENT;
  var ZENDESK_URL_MAINTENANCE = ZENDESK_URL_BASE + SECTION_ID_MAINTENANCE;
  var ZENDESK_URL_FAILURE = ZENDESK_URL_BASE + SECTION_ID_FAILURE;

  $.getJSON(JSON_URL_ANNOUNCEMENT).done(function(data) {
    updateNews(data, 'announce', ZENDESK_URL_ANNOUNCEMENT);
  }).fail(function(data) {
    console.log('xhr failed');
  });

  $.getJSON(JSON_URL_MAINTENANCE).done(function(data) {
    updateNews(data, 'maintenance', ZENDESK_URL_MAINTENANCE);
  }).fail(function(data) {
    console.log('xhr failed');
  });

  $.getJSON(JSON_URL_FAILURE).done(function(data) {
    updateNews(data, 'failure', ZENDESK_URL_FAILURE);
  }).fail(function(data) {
    console.log('xhr failed');
  });

  /** 新着情報取得用スクリプト ここまで **/

  // 最新情報のDom生成
  function updateNews(obj, id, siteurl){
    var dom = '';
    for(var i = 0; i < obj.articles.length; i++){
      dom += '<div class="row"><div class="col-12 col-sm-2"><div class="mini-headline-date">'
        + obj.articles[i].body.substr(4, 10)
        + '</div></div><div class="col-12 col-sm-10"><div class="mini-headline-text">'
        + obj.articles[i].body + '</div></div></div>'
    }
    dom += '<a class="allnewslink btn btn-primary" href=' + siteurl + ' target="_blank">'
      + 'すべてのニュース'
      + '</a>';
    $('#' + id).html(dom);
  }
});

// Anchor
$(function() {
  'use strict';

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
