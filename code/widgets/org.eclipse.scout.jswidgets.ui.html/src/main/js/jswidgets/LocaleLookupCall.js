jswidgets.LocaleLookupCall = function() {
  jswidgets.LocaleLookupCall.parent.call(this);
};
scout.inherits(jswidgets.LocaleLookupCall, scout.LookupCall);

jswidgets.LocaleLookupCall.prototype.getAll = function() {
  this._newDeferred();
  setTimeout(function() {
    var rows = jswidgets.LocaleLookupCall.DATA.slice(0, 101);
    this.resolveLookup({
      lookupRows: this._dataToLookupRow(rows)
    });
  }.bind(this), 300);
  return this.deferred.promise();
};

jswidgets.LocaleLookupCall.prototype.getByText = function(text) {
  this._newDeferred();
  setTimeout(function() {
    var rows = jswidgets.LocaleLookupCall.DATA.filter(function(data) {
      return scout.strings.startsWith(data[0].toLowerCase(), text.toLowerCase());
    });
    this.resolveLookup({
      lookupRows: this._dataToLookupRow(rows)
    });
  }.bind(this), 200);
  return this.deferred.promise();
};

jswidgets.LocaleLookupCall.prototype.getByKey = function(key) {
  this._newDeferred();
  setTimeout(function() {
    var result = scout.arrays.find(jswidgets.LocaleLookupCall.DATA, function(data) {
      return data[1] === key;
    });
    if (result) {
      this.resolveLookup(new scout.LookupRow(result[1], result[0]));
    } else {
      this.deferred.reject();
    }
  }.bind(this), 100);
  return this.deferred.promise();
};


jswidgets.LocaleLookupCall.prototype.resolveLookup = function(lookupResult) {
  this.deferred.resolve(lookupResult);
};

jswidgets.LocaleLookupCall.prototype._newDeferred = function() {
  if (this.deferred) {
    this.deferred.reject({
      canceled: true
    });
  }
  this.deferred = $.Deferred();
};

jswidgets.LocaleLookupCall.prototype._dataToLookupRow = function(datas) {
  var rows = [];
  datas.forEach(function(data) {
    rows.push(new scout.LookupRow(data[1], data[0]));
  });
  return rows;
};

jswidgets.LocaleLookupCall.DATA = [
  ['Albanian', 'sq'],
  ['Albanian (Albania)', 'sq_AL'],
  ['Arabic', 'ar'],
  ['Arabic (Algeria)', 'ar_DZ'],
  ['Arabic (Bahrain)', 'ar_BH'],
  ['Arabic (Egypt)', 'ar_EG'],
  ['Arabic (Iraq)', 'ar_IQ'],
  ['Arabic (Jordan)', 'ar_JO'],
  ['Arabic (Kuwait)', 'ar_KW'],
  ['Arabic (Lebanon)', 'ar_LB'],
  ['Arabic (Libya)', 'ar_LY'],
  ['Arabic (Morocco)', 'ar_MA'],
  ['Arabic (Oman)', 'ar_OM'],
  ['Arabic (Qatar)', 'ar_QA'],
  ['Arabic (Saudi Arabia)', 'ar_SA'],
  ['Arabic (Sudan)', 'ar_SD'],
  ['Arabic (Syria)', 'ar_SY'],
  ['Arabic (Tunisia)', 'ar_TN'],
  ['Arabic (United Arab Emirates)', 'ar_AE'],
  ['Arabic (Yemen)', 'ar_YE'],
  ['Belarusian', 'be'],
  ['Belarusian (Belarus)', 'be_BY'],
  ['Bulgarian', 'bg'],
  ['Bulgarian (Bulgaria)', 'bg_BG'],
  ['Catalan', 'ca'],
  ['Catalan (Spain)', 'ca_ES'],
  ['Chinese', 'zh'],
  ['Chinese (China)', 'zh_CN'],
  ['Chinese (Hong Kong)', 'zh_HK'],
  ['Chinese (Singapore)', 'zh_SG'],
  ['Chinese (Taiwan)', 'zh_TW'],
  ['Croatian', 'hr'],
  ['Croatian (Croatia)', 'hr_HR'],
  ['Czech', 'cs'],
  ['Czech (Czech Republic)', 'cs_CZ'],
  ['Danish', 'da'],
  ['Danish (Denmark)', 'da_DK'],
  ['Dutch', 'nl'],
  ['Dutch (Belgium)', 'nl_BE'],
  ['Dutch (Netherlands)', 'nl_NL'],
  ['English', 'en'],
  ['English (Australia)', 'en_AU'],
  ['English (Canada)', 'en_CA'],
  ['English (India)', 'en_IN'],
  ['English (Ireland)', 'en_IE'],
  ['English (Malta)', 'en_MT'],
  ['English (New Zealand)', 'en_NZ'],
  ['English (Philippines)', 'en_PH'],
  ['English (Singapore)', 'en_SG'],
  ['English (South Africa)', 'en_ZA'],
  ['English (United Kingdom)', 'en_GB'],
  ['English (United States)', 'en_US'],
  ['Estonian', 'et'],
  ['Estonian (Estonia)', 'et_EE'],
  ['Finnish', 'fi'],
  ['Finnish (Finland)', 'fi_FI'],
  ['French', 'fr'],
  ['French (Belgium)', 'fr_BE'],
  ['French (Canada)', 'fr_CA'],
  ['French (France)', 'fr_FR'],
  ['French (Luxembourg)', 'fr_LU'],
  ['French (Switzerland)', 'fr_CH'],
  ['German', 'de'],
  ['German (Austria)', 'de_AT'],
  ['German (Germany)', 'de_DE'],
  ['German (Luxembourg)', 'de_LU'],
  ['German (Switzerland)', 'de_CH'],
  ['Greek', 'el'],
  ['Greek (Cyprus)', 'el_CY'],
  ['Greek (Greece)', 'el_GR'],
  ['Hebrew', 'iw'],
  ['Hebrew (Israel)', 'iw_IL'],
  ['Hindi (India)', 'hi_IN'],
  ['Hungarian', 'hu'],
  ['Hungarian (Hungary)', 'hu_HU'],
  ['Icelandic', 'is'],
  ['Icelandic (Iceland)', 'is_IS'],
  ['Indonesian', 'in'],
  ['Indonesian (Indonesia)', 'in_ID'],
  ['Irish', 'ga'],
  ['Irish (Ireland)', 'ga_IE'],
  ['Italian', 'it'],
  ['Italian (Italy)', 'it_IT'],
  ['Italian (Switzerland)', 'it_CH'],
  ['Japanese', 'ja'],
  ['Japanese (Japan)', 'ja_JP'],
  ['Japanese (Japan,JP)', 'ja_JP_JP_#u-ca-japanese'],
  ['Korean', 'ko'],
  ['Korean (South Korea)', 'ko_KR'],
  ['Latvian', 'lv'],
  ['Latvian (Latvia)', 'lv_LV'],
  ['Lithuanian', 'lt'],
  ['Lithuanian (Lithuania)', 'lt_LT'],
  ['Macedonian', 'mk'],
  ['Macedonian (Macedonia)', 'mk_MK'],
  ['Malay', 'ms'],
  ['Malay (Malaysia)', 'ms_MY'],
  ['Maltese', 'mt'],
  ['Maltese (Malta)', 'mt_MT'],
  ['Norwegian', 'no'],
  ['Norwegian (Norway)', 'no_NO'],
  ['Norwegian (Norway,Nynorsk)', 'no_NO_NY'],
  ['Polish', 'pl'],
  ['Polish (Poland)', 'pl_PL'],
  ['Portuguese', 'pt'],
  ['Portuguese (Brazil)', 'pt_BR'],
  ['Portuguese (Portugal)', 'pt_PT'],
  ['Romanian', 'ro'],
  ['Romanian (Romania)', 'ro_RO'],
  ['Russian', 'ru'],
  ['Russian (Russia)', 'ru_RU'],
  ['Serbian', 'sr'],
  ['Serbian (Bosnia and Herzegovina)', 'sr_BA'],
  ['Serbian (Latin)', 'sr__#Latn'],
  ['Serbian (Latin,Bosnia and Herzegovina)', 'sr_BA_#Latn'],
  ['Serbian (Latin,Montenegro)', 'sr_ME_#Latn'],
  ['Serbian (Latin,Serbia)', 'sr_RS_#Latn'],
  ['Serbian (Montenegro)', 'sr_ME'],
  ['Serbian (Serbia and Montenegro)', 'sr_CS'],
  ['Serbian (Serbia)', 'sr_RS'],
  ['Slovak', 'sk'],
  ['Slovak (Slovakia)', 'sk_SK'],
  ['Slovenian', 'sl'],
  ['Slovenian (Slovenia)', 'sl_SI'],
  ['Spanish', 'es'],
  ['Spanish (Argentina)', 'es_AR'],
  ['Spanish (Bolivia)', 'es_BO'],
  ['Spanish (Chile)', 'es_CL'],
  ['Spanish (Colombia)', 'es_CO'],
  ['Spanish (Costa Rica)', 'es_CR'],
  ['Spanish (Dominican Republic)', 'es_DO'],
  ['Spanish (Ecuador)', 'es_EC'],
  ['Spanish (El Salvador)', 'es_SV'],
  ['Spanish (Guatemala)', 'es_GT'],
  ['Spanish (Honduras)', 'es_HN'],
  ['Spanish (Mexico)', 'es_MX'],
  ['Spanish (Nicaragua)', 'es_NI'],
  ['Spanish (Panama)', 'es_PA'],
  ['Spanish (Paraguay)', 'es_PY'],
  ['Spanish (Peru)', 'es_PE'],
  ['Spanish (Puerto Rico)', 'es_PR'],
  ['Spanish (Spain)', 'es_ES'],
  ['Spanish (United States)', 'es_US'],
  ['Spanish (Uruguay)', 'es_UY'],
  ['Spanish (Venezuela)', 'es_VE'],
  ['Swedish', 'sv'],
  ['Swedish (Sweden)', 'sv_SE'],
  ['Thai', 'th'],
  ['Thai (Thailand)', 'th_TH'],
  ['Thai (Thailand,TH)', 'th_TH_TH_#u-nu-thai'],
  ['Turkish', 'tr'],
  ['Turkish (Turkey)', 'tr_TR'],
  ['Ukrainian', 'uk'],
  ['Ukrainian (Ukraine)', 'uk_UA'],
  ['Vietnamese', 'vi'],
  ['Vietnamese (Vietnam)', 'vi_VN']
];