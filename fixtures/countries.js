'use strict'

const countries =
[
  {
    'currencies': [
      {
        'code': 'AFN',
        'name': 'Afghan afghani',
        'symbol': '؋'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ps',
        'iso639_2': 'pus',
        'name': 'Pashto',
        'nativeName': 'پښتو'
      },
      {
        'iso639_1': 'uz',
        'iso639_2': 'uzb',
        'name': 'Uzbek',
        'nativeName': 'Oʻzbek'
      },
      {
        'iso639_1': 'tk',
        'iso639_2': 'tuk',
        'name': 'Turkmen',
        'nativeName': 'Türkmen'
      }
    ],
    'translations': {
      'br': 'Afeganistão',
      'pt': 'Afeganistão',
      'nl': 'Afghanistan',
      'hr': 'Afganistan',
      'fa': 'افغانستان',
      'de': 'Afghanistan',
      'es': 'Afganistán',
      'fr': 'Afghanistan',
      'ja': 'アフガニスタン',
      'it': 'Afghanistan'
    },
    'flag': 'https://restcountries.eu/data/afg.svg',
    'name': 'Afghanistan',
    'alpha2Code': 'AF',
    'capital': 'Kabul',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 27657145,
    'borders': [
      'IRN',
      'PAK',
      'TKM',
      'UZB',
      'TJK',
      'CHN'
    ],
    'nativeName': 'افغانستان'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sv',
        'iso639_2': 'swe',
        'name': 'Swedish',
        'nativeName': 'svenska'
      }
    ],
    'translations': {
      'br': 'Ilhas de Aland',
      'pt': 'Ilhas de Aland',
      'nl': 'Ålandeilanden',
      'hr': 'Ålandski otoci',
      'fa': 'جزایر الند',
      'de': 'Åland',
      'es': 'Alandia',
      'fr': 'Åland',
      'ja': 'オーランド諸島',
      'it': 'Isole Aland'
    },
    'flag': 'https://restcountries.eu/data/ala.svg',
    'name': 'Åland Islands',
    'alpha2Code': 'AX',
    'capital': 'Mariehamn',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 28875,
    'borders': [],
    'nativeName': 'Åland'
  },
  {
    'currencies': [
      {
        'code': 'ALL',
        'name': 'Albanian lek',
        'symbol': 'L'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sq',
        'iso639_2': 'sqi',
        'name': 'Albanian',
        'nativeName': 'Shqip'
      }
    ],
    'translations': {
      'br': 'Albânia',
      'pt': 'Albânia',
      'nl': 'Albanië',
      'hr': 'Albanija',
      'fa': 'آلبانی',
      'de': 'Albanien',
      'es': 'Albania',
      'fr': 'Albanie',
      'ja': 'アルバニア',
      'it': 'Albania'
    },
    'flag': 'https://restcountries.eu/data/alb.svg',
    'name': 'Albania',
    'alpha2Code': 'AL',
    'capital': 'Tirana',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 2886026,
    'borders': [
      'MNE',
      'GRC',
      'MKD',
      'KOS'
    ],
    'nativeName': 'Shqipëria'
  },
  {
    'currencies': [
      {
        'code': 'DZD',
        'name': 'Algerian dinar',
        'symbol': 'د.ج'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Argélia',
      'pt': 'Argélia',
      'nl': 'Algerije',
      'hr': 'Alžir',
      'fa': 'الجزایر',
      'de': 'Algerien',
      'es': 'Argelia',
      'fr': 'Algérie',
      'ja': 'アルジェリア',
      'it': 'Algeria'
    },
    'flag': 'https://restcountries.eu/data/dza.svg',
    'name': 'Algeria',
    'alpha2Code': 'DZ',
    'capital': 'Algiers',
    'region': 'Africa',
    'subregion': 'Northern Africa',
    'population': 40400000,
    'borders': [
      'TUN',
      'LBY',
      'NER',
      'ESH',
      'MRT',
      'MLI',
      'MAR'
    ],
    'nativeName': 'الجزائر'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United State Dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'sm',
        'iso639_2': 'smo',
        'name': 'Samoan',
        'nativeName': "gagana fa'a Samoa"
      }
    ],
    'translations': {
      'br': 'Samoa Americana',
      'pt': 'Samoa Americana',
      'nl': 'Amerikaans Samoa',
      'hr': 'Američka Samoa',
      'fa': 'ساموآی آمریکا',
      'de': 'Amerikanisch-Samoa',
      'es': 'Samoa Americana',
      'fr': 'Samoa américaines',
      'ja': 'アメリカ領サモア',
      'it': 'Samoa Americane'
    },
    'flag': 'https://restcountries.eu/data/asm.svg',
    'name': 'American Samoa',
    'alpha2Code': 'AS',
    'capital': 'Pago Pago',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 57100,
    'borders': [],
    'nativeName': 'American Samoa'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ca',
        'iso639_2': 'cat',
        'name': 'Catalan',
        'nativeName': 'català'
      }
    ],
    'translations': {
      'br': 'Andorra',
      'pt': 'Andorra',
      'nl': 'Andorra',
      'hr': 'Andora',
      'fa': 'آندورا',
      'de': 'Andorra',
      'es': 'Andorra',
      'fr': 'Andorre',
      'ja': 'アンドラ',
      'it': 'Andorra'
    },
    'flag': 'https://restcountries.eu/data/and.svg',
    'name': 'Andorra',
    'alpha2Code': 'AD',
    'capital': 'Andorra la Vella',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 78014,
    'borders': [
      'FRA',
      'ESP'
    ],
    'nativeName': 'Andorra'
  },
  {
    'currencies': [
      {
        'code': 'AOA',
        'name': 'Angolan kwanza',
        'symbol': 'Kz'
      }
    ],
    'languages': [
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'Angola',
      'pt': 'Angola',
      'nl': 'Angola',
      'hr': 'Angola',
      'fa': 'آنگولا',
      'de': 'Angola',
      'es': 'Angola',
      'fr': 'Angola',
      'ja': 'アンゴラ',
      'it': 'Angola'
    },
    'flag': 'https://restcountries.eu/data/ago.svg',
    'name': 'Angola',
    'alpha2Code': 'AO',
    'capital': 'Luanda',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 25868000,
    'borders': [
      'COG',
      'COD',
      'ZMB',
      'NAM'
    ],
    'nativeName': 'Angola'
  },
  {
    'currencies': [
      {
        'code': 'XCD',
        'name': 'East Caribbean dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Anguila',
      'pt': 'Anguila',
      'nl': 'Anguilla',
      'hr': 'Angvila',
      'fa': 'آنگویلا',
      'de': 'Anguilla',
      'es': 'Anguilla',
      'fr': 'Anguilla',
      'ja': 'アンギラ',
      'it': 'Anguilla'
    },
    'flag': 'https://restcountries.eu/data/aia.svg',
    'name': 'Anguilla',
    'alpha2Code': 'AI',
    'capital': 'The Valley',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 13452,
    'borders': [],
    'nativeName': 'Anguilla'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      },
      {
        'code': 'GBP',
        'name': 'British pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Antártida',
      'pt': 'Antárctida',
      'nl': 'Antarctica',
      'hr': 'Antarktika',
      'fa': 'جنوبگان',
      'de': 'Antarktika',
      'es': 'Antártida',
      'fr': 'Antarctique',
      'ja': '南極大陸',
      'it': 'Antartide'
    },
    'flag': 'https://restcountries.eu/data/ata.svg',
    'name': 'Antarctica',
    'alpha2Code': 'AQ',
    'capital': '',
    'region': 'Polar',
    'subregion': '',
    'population': 1000,
    'borders': [],
    'nativeName': 'Antarctica'
  },
  {
    'currencies': [
      {
        'code': 'XCD',
        'name': 'East Caribbean dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Antígua e Barbuda',
      'pt': 'Antígua e Barbuda',
      'nl': 'Antigua en Barbuda',
      'hr': 'Antigva i Barbuda',
      'fa': 'آنتیگوا و باربودا',
      'de': 'Antigua und Barbuda',
      'es': 'Antigua y Barbuda',
      'fr': 'Antigua-et-Barbuda',
      'ja': 'アンティグア・バーブーダ',
      'it': 'Antigua e Barbuda'
    },
    'flag': 'https://restcountries.eu/data/atg.svg',
    'name': 'Antigua and Barbuda',
    'alpha2Code': 'AG',
    'capital': "Saint John's",
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 86295,
    'borders': [],
    'nativeName': 'Antigua and Barbuda'
  },
  {
    'currencies': [
      {
        'code': 'ARS',
        'name': 'Argentine peso',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      },
      {
        'iso639_1': 'gn',
        'iso639_2': 'grn',
        'name': 'Guaraní',
        'nativeName': "Avañe'ẽ"
      }
    ],
    'translations': {
      'br': 'Argentina',
      'pt': 'Argentina',
      'nl': 'Argentinië',
      'hr': 'Argentina',
      'fa': 'آرژانتین',
      'de': 'Argentinien',
      'es': 'Argentina',
      'fr': 'Argentine',
      'ja': 'アルゼンチン',
      'it': 'Argentina'
    },
    'flag': 'https://restcountries.eu/data/arg.svg',
    'name': 'Argentina',
    'alpha2Code': 'AR',
    'capital': 'Buenos Aires',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 43590400,
    'borders': [
      'BOL',
      'BRA',
      'CHL',
      'PRY',
      'URY'
    ],
    'nativeName': 'Argentina'
  },
  {
    'currencies': [
      {
        'code': 'AMD',
        'name': 'Armenian dram'
      }
    ],
    'languages': [
      {
        'iso639_1': 'hy',
        'iso639_2': 'hye',
        'name': 'Armenian',
        'nativeName': 'Հայերեն'
      },
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Armênia',
      'pt': 'Arménia',
      'nl': 'Armenië',
      'hr': 'Armenija',
      'fa': 'ارمنستان',
      'de': 'Armenien',
      'es': 'Armenia',
      'fr': 'Arménie',
      'ja': 'アルメニア',
      'it': 'Armenia'
    },
    'flag': 'https://restcountries.eu/data/arm.svg',
    'name': 'Armenia',
    'alpha2Code': 'AM',
    'capital': 'Yerevan',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 2994400,
    'borders': [
      'AZE',
      'GEO',
      'IRN',
      'TUR'
    ],
    'nativeName': 'Հայաստան'
  },
  {
    'currencies': [
      {
        'code': 'AWG',
        'name': 'Aruban florin',
        'symbol': 'ƒ'
      }
    ],
    'languages': [
      {
        'iso639_1': 'nl',
        'iso639_2': 'nld',
        'name': 'Dutch',
        'nativeName': 'Nederlands'
      },
      {
        'iso639_1': 'pa',
        'iso639_2': 'pan',
        'name': '(Eastern) Punjabi',
        'nativeName': 'ਪੰਜਾਬੀ'
      }
    ],
    'translations': {
      'br': 'Aruba',
      'pt': 'Aruba',
      'nl': 'Aruba',
      'hr': 'Aruba',
      'fa': 'آروبا',
      'de': 'Aruba',
      'es': 'Aruba',
      'fr': 'Aruba',
      'ja': 'アルバ',
      'it': 'Aruba'
    },
    'flag': 'https://restcountries.eu/data/abw.svg',
    'name': 'Aruba',
    'alpha2Code': 'AW',
    'capital': 'Oranjestad',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 107394,
    'borders': [],
    'nativeName': 'Aruba'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Austrália',
      'pt': 'Austrália',
      'nl': 'Australië',
      'hr': 'Australija',
      'fa': 'استرالیا',
      'de': 'Australien',
      'es': 'Australia',
      'fr': 'Australie',
      'ja': 'オーストラリア',
      'it': 'Australia'
    },
    'flag': 'https://restcountries.eu/data/aus.svg',
    'name': 'Australia',
    'alpha2Code': 'AU',
    'capital': 'Canberra',
    'region': 'Oceania',
    'subregion': 'Australia and New Zealand',
    'population': 24117360,
    'borders': [],
    'nativeName': 'Australia'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'de',
        'iso639_2': 'deu',
        'name': 'German',
        'nativeName': 'Deutsch'
      }
    ],
    'translations': {
      'br': 'áustria',
      'pt': 'áustria',
      'nl': 'Oostenrijk',
      'hr': 'Austrija',
      'fa': 'اتریش',
      'de': 'Österreich',
      'es': 'Austria',
      'fr': 'Autriche',
      'ja': 'オーストリア',
      'it': 'Austria'
    },
    'flag': 'https://restcountries.eu/data/aut.svg',
    'name': 'Austria',
    'alpha2Code': 'AT',
    'capital': 'Vienna',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 8725931,
    'borders': [
      'CZE',
      'DEU',
      'HUN',
      'ITA',
      'LIE',
      'SVK',
      'SVN',
      'CHE'
    ],
    'nativeName': 'Österreich'
  },
  {
    'currencies': [
      {
        'code': 'AZN',
        'name': 'Azerbaijani manat'
      }
    ],
    'languages': [
      {
        'iso639_1': 'az',
        'iso639_2': 'aze',
        'name': 'Azerbaijani',
        'nativeName': 'azərbaycan dili'
      }
    ],
    'translations': {
      'br': 'Azerbaijão',
      'pt': 'Azerbaijão',
      'nl': 'Azerbeidzjan',
      'hr': 'Azerbajdžan',
      'fa': 'آذربایجان',
      'de': 'Aserbaidschan',
      'es': 'Azerbaiyán',
      'fr': 'Azerbaïdjan',
      'ja': 'アゼルバイジャン',
      'it': 'Azerbaijan'
    },
    'flag': 'https://restcountries.eu/data/aze.svg',
    'name': 'Azerbaijan',
    'alpha2Code': 'AZ',
    'capital': 'Baku',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 9730500,
    'borders': [
      'ARM',
      'GEO',
      'IRN',
      'RUS',
      'TUR'
    ],
    'nativeName': 'Azərbaycan'
  },
  {
    'currencies': [
      {
        'code': 'BSD',
        'name': 'Bahamian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Bahamas',
      'pt': 'Baamas',
      'nl': 'Bahama’s',
      'hr': 'Bahami',
      'fa': 'باهاما',
      'de': 'Bahamas',
      'es': 'Bahamas',
      'fr': 'Bahamas',
      'ja': 'バハマ',
      'it': 'Bahamas'
    },
    'flag': 'https://restcountries.eu/data/bhs.svg',
    'name': 'Bahamas',
    'alpha2Code': 'BS',
    'capital': 'Nassau',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 378040,
    'borders': [],
    'nativeName': 'Bahamas'
  },
  {
    'currencies': [
      {
        'code': 'BHD',
        'name': 'Bahraini dinar',
        'symbol': '.د.ب'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Bahrein',
      'pt': 'Barém',
      'nl': 'Bahrein',
      'hr': 'Bahrein',
      'fa': 'بحرین',
      'de': 'Bahrain',
      'es': 'Bahrein',
      'fr': 'Bahreïn',
      'ja': 'バーレーン',
      'it': 'Bahrein'
    },
    'flag': 'https://restcountries.eu/data/bhr.svg',
    'name': 'Bahrain',
    'alpha2Code': 'BH',
    'capital': 'Manama',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 1404900,
    'borders': [],
    'nativeName': '\u200fالبحرين'
  },
  {
    'currencies': [
      {
        'code': 'BDT',
        'name': 'Bangladeshi taka',
        'symbol': '৳'
      }
    ],
    'languages': [
      {
        'iso639_1': 'bn',
        'iso639_2': 'ben',
        'name': 'Bengali',
        'nativeName': 'বাংলা'
      }
    ],
    'translations': {
      'br': 'Bangladesh',
      'pt': 'Bangladeche',
      'nl': 'Bangladesh',
      'hr': 'Bangladeš',
      'fa': 'بنگلادش',
      'de': 'Bangladesch',
      'es': 'Bangladesh',
      'fr': 'Bangladesh',
      'ja': 'バングラデシュ',
      'it': 'Bangladesh'
    },
    'flag': 'https://restcountries.eu/data/bgd.svg',
    'name': 'Bangladesh',
    'alpha2Code': 'BD',
    'capital': 'Dhaka',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 161006790,
    'borders': [
      'MMR',
      'IND'
    ],
    'nativeName': 'Bangladesh'
  },
  {
    'currencies': [
      {
        'code': 'BBD',
        'name': 'Barbadian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Barbados',
      'pt': 'Barbados',
      'nl': 'Barbados',
      'hr': 'Barbados',
      'fa': 'باربادوس',
      'de': 'Barbados',
      'es': 'Barbados',
      'fr': 'Barbade',
      'ja': 'バルバドス',
      'it': 'Barbados'
    },
    'flag': 'https://restcountries.eu/data/brb.svg',
    'name': 'Barbados',
    'alpha2Code': 'BB',
    'capital': 'Bridgetown',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 285000,
    'borders': [],
    'nativeName': 'Barbados'
  },
  {
    'currencies': [
      {
        'code': 'BYN',
        'name': 'New Belarusian ruble',
        'symbol': 'Br'
      },
      {
        'code': 'BYR',
        'name': 'Old Belarusian ruble',
        'symbol': 'Br'
      }
    ],
    'languages': [
      {
        'iso639_1': 'be',
        'iso639_2': 'bel',
        'name': 'Belarusian',
        'nativeName': 'беларуская мова'
      },
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Bielorrússia',
      'pt': 'Bielorrússia',
      'nl': 'Wit-Rusland',
      'hr': 'Bjelorusija',
      'fa': 'بلاروس',
      'de': 'Weißrussland',
      'es': 'Bielorrusia',
      'fr': 'Biélorussie',
      'ja': 'ベラルーシ',
      'it': 'Bielorussia'
    },
    'flag': 'https://restcountries.eu/data/blr.svg',
    'name': 'Belarus',
    'alpha2Code': 'BY',
    'capital': 'Minsk',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 9498700,
    'borders': [
      'LVA',
      'LTU',
      'POL',
      'RUS',
      'UKR'
    ],
    'nativeName': 'Белару́сь'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'nl',
        'iso639_2': 'nld',
        'name': 'Dutch',
        'nativeName': 'Nederlands'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'de',
        'iso639_2': 'deu',
        'name': 'German',
        'nativeName': 'Deutsch'
      }
    ],
    'translations': {
      'br': 'Bélgica',
      'pt': 'Bélgica',
      'nl': 'België',
      'hr': 'Belgija',
      'fa': 'بلژیک',
      'de': 'Belgien',
      'es': 'Bélgica',
      'fr': 'Belgique',
      'ja': 'ベルギー',
      'it': 'Belgio'
    },
    'flag': 'https://restcountries.eu/data/bel.svg',
    'name': 'Belgium',
    'alpha2Code': 'BE',
    'capital': 'Brussels',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 11319511,
    'borders': [
      'FRA',
      'DEU',
      'LUX',
      'NLD'
    ],
    'nativeName': 'België'
  },
  {
    'currencies': [
      {
        'code': 'BZD',
        'name': 'Belize dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Belize',
      'pt': 'Belize',
      'nl': 'Belize',
      'hr': 'Belize',
      'fa': 'بلیز',
      'de': 'Belize',
      'es': 'Belice',
      'fr': 'Belize',
      'ja': 'ベリーズ',
      'it': 'Belize'
    },
    'flag': 'https://restcountries.eu/data/blz.svg',
    'name': 'Belize',
    'alpha2Code': 'BZ',
    'capital': 'Belmopan',
    'region': 'Americas',
    'subregion': 'Central America',
    'population': 370300,
    'borders': [
      'GTM',
      'MEX'
    ],
    'nativeName': 'Belize'
  },
  {
    'currencies': [
      {
        'code': 'XOF',
        'name': 'West African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Benin',
      'pt': 'Benim',
      'nl': 'Benin',
      'hr': 'Benin',
      'fa': 'بنین',
      'de': 'Benin',
      'es': 'Benín',
      'fr': 'Bénin',
      'ja': 'ベナン',
      'it': 'Benin'
    },
    'flag': 'https://restcountries.eu/data/ben.svg',
    'name': 'Benin',
    'alpha2Code': 'BJ',
    'capital': 'Porto-Novo',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 10653654,
    'borders': [
      'BFA',
      'NER',
      'NGA',
      'TGO'
    ],
    'nativeName': 'Bénin'
  },
  {
    'currencies': [
      {
        'code': 'BMD',
        'name': 'Bermudian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Bermudas',
      'pt': 'Bermudas',
      'nl': 'Bermuda',
      'hr': 'Bermudi',
      'fa': 'برمودا',
      'de': 'Bermuda',
      'es': 'Bermudas',
      'fr': 'Bermudes',
      'ja': 'バミューダ',
      'it': 'Bermuda'
    },
    'flag': 'https://restcountries.eu/data/bmu.svg',
    'name': 'Bermuda',
    'alpha2Code': 'BM',
    'capital': 'Hamilton',
    'region': 'Americas',
    'subregion': 'Northern America',
    'population': 61954,
    'borders': [],
    'nativeName': 'Bermuda'
  },
  {
    'currencies': [
      {
        'code': 'BTN',
        'name': 'Bhutanese ngultrum',
        'symbol': 'Nu.'
      },
      {
        'code': 'INR',
        'name': 'Indian rupee',
        'symbol': '₹'
      }
    ],
    'languages': [
      {
        'iso639_1': 'dz',
        'iso639_2': 'dzo',
        'name': 'Dzongkha',
        'nativeName': 'རྫོང་ཁ'
      }
    ],
    'translations': {
      'br': 'Butão',
      'pt': 'Butão',
      'nl': 'Bhutan',
      'hr': 'Butan',
      'fa': 'بوتان',
      'de': 'Bhutan',
      'es': 'Bután',
      'fr': 'Bhoutan',
      'ja': 'ブータン',
      'it': 'Bhutan'
    },
    'flag': 'https://restcountries.eu/data/btn.svg',
    'name': 'Bhutan',
    'alpha2Code': 'BT',
    'capital': 'Thimphu',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 775620,
    'borders': [
      'CHN',
      'IND'
    ],
    'nativeName': 'ʼbrug-yul'
  },
  {
    'currencies': [
      {
        'code': 'BOB',
        'name': 'Bolivian boliviano',
        'symbol': 'Bs.'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      },
      {
        'iso639_1': 'ay',
        'iso639_2': 'aym',
        'name': 'Aymara',
        'nativeName': 'aymar aru'
      },
      {
        'iso639_1': 'qu',
        'iso639_2': 'que',
        'name': 'Quechua',
        'nativeName': 'Runa Simi'
      }
    ],
    'translations': {
      'br': 'Bolívia',
      'pt': 'Bolívia',
      'nl': 'Bolivia',
      'hr': 'Bolivija',
      'fa': 'بولیوی',
      'de': 'Bolivien',
      'es': 'Bolivia',
      'fr': 'Bolivie',
      'ja': 'ボリビア多民族国',
      'it': 'Bolivia'
    },
    'flag': 'https://restcountries.eu/data/bol.svg',
    'name': 'Bolivia (Plurinational State of)',
    'alpha2Code': 'BO',
    'capital': 'Sucre',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 10985059,
    'borders': [
      'ARG',
      'BRA',
      'CHL',
      'PRY',
      'PER'
    ],
    'nativeName': 'Bolivia'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'nl',
        'iso639_2': 'nld',
        'name': 'Dutch',
        'nativeName': 'Nederlands'
      }
    ],
    'translations': {
      'br': 'Bonaire',
      'pt': 'Bonaire',
      'fa': 'بونیر',
      'de': 'Bonaire, Sint Eustatius und Saba',
      'fr': 'Bonaire, Saint-Eustache et Saba',
      'it': 'Bonaire, Saint-Eustache e Saba'
    },
    'flag': 'https://restcountries.eu/data/bes.svg',
    'name': 'Bonaire, Sint Eustatius and Saba',
    'alpha2Code': 'BQ',
    'capital': 'Kralendijk',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 17408,
    'borders': [],
    'nativeName': 'Bonaire'
  },
  {
    'currencies': [
      {
        'code': 'BAM',
        'name': 'Bosnia and Herzegovina convertible mark'
      }
    ],
    'languages': [
      {
        'iso639_1': 'bs',
        'iso639_2': 'bos',
        'name': 'Bosnian',
        'nativeName': 'bosanski jezik'
      },
      {
        'iso639_1': 'hr',
        'iso639_2': 'hrv',
        'name': 'Croatian',
        'nativeName': 'hrvatski jezik'
      },
      {
        'iso639_1': 'sr',
        'iso639_2': 'srp',
        'name': 'Serbian',
        'nativeName': 'српски језик'
      }
    ],
    'translations': {
      'br': 'Bósnia e Herzegovina',
      'pt': 'Bósnia e Herzegovina',
      'nl': 'Bosnië en Herzegovina',
      'hr': 'Bosna i Hercegovina',
      'fa': 'بوسنی و هرزگوین',
      'de': 'Bosnien und Herzegowina',
      'es': 'Bosnia y Herzegovina',
      'fr': 'Bosnie-Herzégovine',
      'ja': 'ボスニア・ヘルツェゴビナ',
      'it': 'Bosnia ed Erzegovina'
    },
    'flag': 'https://restcountries.eu/data/bih.svg',
    'name': 'Bosnia and Herzegovina',
    'alpha2Code': 'BA',
    'capital': 'Sarajevo',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 3531159,
    'borders': [
      'HRV',
      'MNE',
      'SRB'
    ],
    'nativeName': 'Bosna i Hercegovina'
  },
  {
    'currencies': [
      {
        'code': 'BWP',
        'name': 'Botswana pula',
        'symbol': 'P'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'tn',
        'iso639_2': 'tsn',
        'name': 'Tswana',
        'nativeName': 'Setswana'
      }
    ],
    'translations': {
      'br': 'Botsuana',
      'pt': 'Botsuana',
      'nl': 'Botswana',
      'hr': 'Bocvana',
      'fa': 'بوتسوانا',
      'de': 'Botswana',
      'es': 'Botswana',
      'fr': 'Botswana',
      'ja': 'ボツワナ',
      'it': 'Botswana'
    },
    'flag': 'https://restcountries.eu/data/bwa.svg',
    'name': 'Botswana',
    'alpha2Code': 'BW',
    'capital': 'Gaborone',
    'region': 'Africa',
    'subregion': 'Southern Africa',
    'population': 2141206,
    'borders': [
      'NAM',
      'ZAF',
      'ZMB',
      'ZWE'
    ],
    'nativeName': 'Botswana'
  },
  {
    'currencies': [
      {
        'code': 'NOK',
        'name': 'Norwegian krone',
        'symbol': 'kr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'no',
        'iso639_2': 'nor',
        'name': 'Norwegian',
        'nativeName': 'Norsk'
      },
      {
        'iso639_1': 'nb',
        'iso639_2': 'nob',
        'name': 'Norwegian Bokmål',
        'nativeName': 'Norsk bokmål'
      },
      {
        'iso639_1': 'nn',
        'iso639_2': 'nno',
        'name': 'Norwegian Nynorsk',
        'nativeName': 'Norsk nynorsk'
      }
    ],
    'translations': {
      'br': 'Ilha Bouvet',
      'pt': 'Ilha Bouvet',
      'nl': 'Bouveteiland',
      'hr': 'Otok Bouvet',
      'fa': 'جزیره بووه',
      'de': 'Bouvetinsel',
      'es': 'Isla Bouvet',
      'fr': 'Île Bouvet',
      'ja': 'ブーベ島',
      'it': 'Isola Bouvet'
    },
    'flag': 'https://restcountries.eu/data/bvt.svg',
    'name': 'Bouvet Island',
    'alpha2Code': 'BV',
    'capital': '',
    'region': 'Polar',
    'subregion': '',
    'population': 0,
    'borders': [],
    'nativeName': 'Bouvetøya'
  },
  {
    'currencies': [
      {
        'code': 'BRL',
        'name': 'Brazilian real',
        'symbol': 'R$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'Brasil',
      'pt': 'Brasil',
      'nl': 'Brazilië',
      'hr': 'Brazil',
      'fa': 'برزیل',
      'de': 'Brasilien',
      'es': 'Brasil',
      'fr': 'Brésil',
      'ja': 'ブラジル',
      'it': 'Brasile'
    },
    'flag': 'https://restcountries.eu/data/bra.svg',
    'name': 'Brazil',
    'alpha2Code': 'BR',
    'capital': 'Brasília',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 206135893,
    'borders': [
      'ARG',
      'BOL',
      'COL',
      'GUF',
      'GUY',
      'PRY',
      'PER',
      'SUR',
      'URY',
      'VEN'
    ],
    'nativeName': 'Brasil'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Território Britânico do Oceano íÍdico',
      'pt': 'Território Britânico do Oceano Índico',
      'nl': 'Britse Gebieden in de Indische Oceaan',
      'hr': 'Britanski Indijskooceanski teritorij',
      'fa': 'قلمرو بریتانیا در اقیانوس هند',
      'de': 'Britisches Territorium im Indischen Ozean',
      'es': 'Territorio Británico del Océano Índico',
      'fr': "Territoire britannique de l'océan Indien",
      'ja': 'イギリス領インド洋地域',
      'it': "Territorio britannico dell'oceano indiano"
    },
    'flag': 'https://restcountries.eu/data/iot.svg',
    'name': 'British Indian Ocean Territory',
    'alpha2Code': 'IO',
    'capital': 'Diego Garcia',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 3000,
    'borders': [],
    'nativeName': 'British Indian Ocean Territory'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States Dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Menores Distantes dos Estados Unidos',
      'pt': 'Ilhas Menores Distantes dos Estados Unidos',
      'nl': 'Kleine afgelegen eilanden van de Verenigde Staten',
      'hr': 'Mali udaljeni otoci SAD-a',
      'fa': 'جزایر کوچک حاشیه\u200cای ایالات متحده آمریکا',
      'de': 'Kleinere Inselbesitzungen der Vereinigten Staaten',
      'es': 'Islas Ultramarinas Menores de Estados Unidos',
      'fr': 'Îles mineures éloignées des États-Unis',
      'ja': '合衆国領有小離島',
      'it': "Isole minori esterne degli Stati Uniti d'America"
    },
    'flag': 'https://restcountries.eu/data/umi.svg',
    'name': 'United States Minor Outlying Islands',
    'alpha2Code': 'UM',
    'capital': '',
    'region': 'Americas',
    'subregion': 'Northern America',
    'population': 300,
    'borders': [],
    'nativeName': 'United States Minor Outlying Islands'
  },
  {
    'currencies': [
      {
        'name': '[D]',
        'symbol': '$'
      },
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Virgens Britânicas',
      'pt': 'Ilhas Virgens Britânicas',
      'nl': 'Britse Maagdeneilanden',
      'hr': 'Britanski Djevičanski Otoci',
      'fa': 'جزایر ویرجین بریتانیا',
      'de': 'Britische Jungferninseln',
      'es': 'Islas Vírgenes del Reino Unido',
      'fr': 'Îles Vierges britanniques',
      'ja': 'イギリス領ヴァージン諸島',
      'it': 'Isole Vergini Britanniche'
    },
    'flag': 'https://restcountries.eu/data/vgb.svg',
    'name': 'Virgin Islands (British)',
    'alpha2Code': 'VG',
    'capital': 'Road Town',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 28514,
    'borders': [],
    'nativeName': 'British Virgin Islands'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Virgens Americanas',
      'pt': 'Ilhas Virgens Americanas',
      'nl': 'Verenigde Staten Maagdeneilanden',
      'fa': 'جزایر ویرجین آمریکا',
      'de': 'Amerikanische Jungferninseln',
      'es': 'Islas Vírgenes de los Estados Unidos',
      'fr': 'Îles Vierges des États-Unis',
      'ja': 'アメリカ領ヴァージン諸島',
      'it': 'Isole Vergini americane'
    },
    'flag': 'https://restcountries.eu/data/vir.svg',
    'name': 'Virgin Islands (U.S.)',
    'alpha2Code': 'VI',
    'capital': 'Charlotte Amalie',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 114743,
    'borders': [],
    'nativeName': 'Virgin Islands of the United States'
  },
  {
    'currencies': [
      {
        'code': 'BND',
        'name': 'Brunei dollar',
        'symbol': '$'
      },
      {
        'code': 'SGD',
        'name': 'Singapore dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ms',
        'iso639_2': 'msa',
        'name': 'Malay',
        'nativeName': 'bahasa Melayu'
      }
    ],
    'translations': {
      'br': 'Brunei',
      'pt': 'Brunei',
      'nl': 'Brunei',
      'hr': 'Brunej',
      'fa': 'برونئی',
      'de': 'Brunei',
      'es': 'Brunei',
      'fr': 'Brunei',
      'ja': 'ブルネイ・ダルサラーム',
      'it': 'Brunei'
    },
    'flag': 'https://restcountries.eu/data/brn.svg',
    'name': 'Brunei Darussalam',
    'alpha2Code': 'BN',
    'capital': 'Bandar Seri Begawan',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 411900,
    'borders': [
      'MYS'
    ],
    'nativeName': 'Negara Brunei Darussalam'
  },
  {
    'currencies': [
      {
        'code': 'BGN',
        'name': 'Bulgarian lev',
        'symbol': 'лв'
      }
    ],
    'languages': [
      {
        'iso639_1': 'bg',
        'iso639_2': 'bul',
        'name': 'Bulgarian',
        'nativeName': 'български език'
      }
    ],
    'translations': {
      'br': 'Bulgária',
      'pt': 'Bulgária',
      'nl': 'Bulgarije',
      'hr': 'Bugarska',
      'fa': 'بلغارستان',
      'de': 'Bulgarien',
      'es': 'Bulgaria',
      'fr': 'Bulgarie',
      'ja': 'ブルガリア',
      'it': 'Bulgaria'
    },
    'flag': 'https://restcountries.eu/data/bgr.svg',
    'name': 'Bulgaria',
    'alpha2Code': 'BG',
    'capital': 'Sofia',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 7153784,
    'borders': [
      'GRC',
      'MKD',
      'ROU',
      'SRB',
      'TUR'
    ],
    'nativeName': 'България'
  },
  {
    'currencies': [
      {
        'code': 'XOF',
        'name': 'West African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'ff',
        'iso639_2': 'ful',
        'name': 'Fula',
        'nativeName': 'Fulfulde'
      }
    ],
    'translations': {
      'br': 'Burkina Faso',
      'pt': 'Burquina Faso',
      'nl': 'Burkina Faso',
      'hr': 'Burkina Faso',
      'fa': 'بورکینافاسو',
      'de': 'Burkina Faso',
      'es': 'Burkina Faso',
      'fr': 'Burkina Faso',
      'ja': 'ブルキナファソ',
      'it': 'Burkina Faso'
    },
    'flag': 'https://restcountries.eu/data/bfa.svg',
    'name': 'Burkina Faso',
    'alpha2Code': 'BF',
    'capital': 'Ouagadougou',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 19034397,
    'borders': [
      'BEN',
      'CIV',
      'GHA',
      'MLI',
      'NER',
      'TGO'
    ],
    'nativeName': 'Burkina Faso'
  },
  {
    'currencies': [
      {
        'code': 'BIF',
        'name': 'Burundian franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'rn',
        'iso639_2': 'run',
        'name': 'Kirundi',
        'nativeName': 'Ikirundi'
      }
    ],
    'translations': {
      'br': 'Burundi',
      'pt': 'Burúndi',
      'nl': 'Burundi',
      'hr': 'Burundi',
      'fa': 'بوروندی',
      'de': 'Burundi',
      'es': 'Burundi',
      'fr': 'Burundi',
      'ja': 'ブルンジ',
      'it': 'Burundi'
    },
    'flag': 'https://restcountries.eu/data/bdi.svg',
    'name': 'Burundi',
    'alpha2Code': 'BI',
    'capital': 'Bujumbura',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 10114505,
    'borders': [
      'COD',
      'RWA',
      'TZA'
    ],
    'nativeName': 'Burundi'
  },
  {
    'currencies': [
      {
        'code': 'KHR',
        'name': 'Cambodian riel',
        'symbol': '៛'
      },
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'km',
        'iso639_2': 'khm',
        'name': 'Khmer',
        'nativeName': 'ខ្មែរ'
      }
    ],
    'translations': {
      'br': 'Camboja',
      'pt': 'Camboja',
      'nl': 'Cambodja',
      'hr': 'Kambodža',
      'fa': 'کامبوج',
      'de': 'Kambodscha',
      'es': 'Camboya',
      'fr': 'Cambodge',
      'ja': 'カンボジア',
      'it': 'Cambogia'
    },
    'flag': 'https://restcountries.eu/data/khm.svg',
    'name': 'Cambodia',
    'alpha2Code': 'KH',
    'capital': 'Phnom Penh',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 15626444,
    'borders': [
      'LAO',
      'THA',
      'VNM'
    ],
    'nativeName': 'Kâmpŭchéa'
  },
  {
    'currencies': [
      {
        'code': 'XAF',
        'name': 'Central African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Camarões',
      'pt': 'Camarões',
      'nl': 'Kameroen',
      'hr': 'Kamerun',
      'fa': 'کامرون',
      'de': 'Kamerun',
      'es': 'Camerún',
      'fr': 'Cameroun',
      'ja': 'カメルーン',
      'it': 'Camerun'
    },
    'flag': 'https://restcountries.eu/data/cmr.svg',
    'name': 'Cameroon',
    'alpha2Code': 'CM',
    'capital': 'Yaoundé',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 22709892,
    'borders': [
      'CAF',
      'TCD',
      'COG',
      'GNQ',
      'GAB',
      'NGA'
    ],
    'nativeName': 'Cameroon'
  },
  {
    'currencies': [
      {
        'code': 'CAD',
        'name': 'Canadian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Canadá',
      'pt': 'Canadá',
      'nl': 'Canada',
      'hr': 'Kanada',
      'fa': 'کانادا',
      'de': 'Kanada',
      'es': 'Canadá',
      'fr': 'Canada',
      'ja': 'カナダ',
      'it': 'Canada'
    },
    'flag': 'https://restcountries.eu/data/can.svg',
    'name': 'Canada',
    'alpha2Code': 'CA',
    'capital': 'Ottawa',
    'region': 'Americas',
    'subregion': 'Northern America',
    'population': 36155487,
    'borders': [
      'USA'
    ],
    'nativeName': 'Canada'
  },
  {
    'currencies': [
      {
        'code': 'CVE',
        'name': 'Cape Verdean escudo',
        'symbol': 'Esc'
      }
    ],
    'languages': [
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'Cabo Verde',
      'pt': 'Cabo Verde',
      'nl': 'Kaapverdië',
      'hr': 'Zelenortska Republika',
      'fa': 'کیپ ورد',
      'de': 'Kap Verde',
      'es': 'Cabo Verde',
      'fr': 'Cap Vert',
      'ja': 'カーボベルデ',
      'it': 'Capo Verde'
    },
    'flag': 'https://restcountries.eu/data/cpv.svg',
    'name': 'Cabo Verde',
    'alpha2Code': 'CV',
    'capital': 'Praia',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 531239,
    'borders': [],
    'nativeName': 'Cabo Verde'
  },
  {
    'currencies': [
      {
        'code': 'KYD',
        'name': 'Cayman Islands dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Cayman',
      'pt': 'Ilhas Caimão',
      'nl': 'Caymaneilanden',
      'hr': 'Kajmanski otoci',
      'fa': 'جزایر کیمن',
      'de': 'Kaimaninseln',
      'es': 'Islas Caimán',
      'fr': 'Îles Caïmans',
      'ja': 'ケイマン諸島',
      'it': 'Isole Cayman'
    },
    'flag': 'https://restcountries.eu/data/cym.svg',
    'name': 'Cayman Islands',
    'alpha2Code': 'KY',
    'capital': 'George Town',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 58238,
    'borders': [],
    'nativeName': 'Cayman Islands'
  },
  {
    'currencies': [
      {
        'code': 'XAF',
        'name': 'Central African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'sg',
        'iso639_2': 'sag',
        'name': 'Sango',
        'nativeName': 'yângâ tî sängö'
      }
    ],
    'translations': {
      'br': 'República Centro-Africana',
      'pt': 'República Centro-Africana',
      'nl': 'Centraal-Afrikaanse Republiek',
      'hr': 'Srednjoafrička Republika',
      'fa': 'جمهوری آفریقای مرکزی',
      'de': 'Zentralafrikanische Republik',
      'es': 'República Centroafricana',
      'fr': 'République centrafricaine',
      'ja': '中央アフリカ共和国',
      'it': 'Repubblica Centrafricana'
    },
    'flag': 'https://restcountries.eu/data/caf.svg',
    'name': 'Central African Republic',
    'alpha2Code': 'CF',
    'capital': 'Bangui',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 4998000,
    'borders': [
      'CMR',
      'TCD',
      'COD',
      'COG',
      'SSD',
      'SDN'
    ],
    'nativeName': 'Ködörösêse tî Bêafrîka'
  },
  {
    'currencies': [
      {
        'code': 'XAF',
        'name': 'Central African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Chade',
      'pt': 'Chade',
      'nl': 'Tsjaad',
      'hr': 'Čad',
      'fa': 'چاد',
      'de': 'Tschad',
      'es': 'Chad',
      'fr': 'Tchad',
      'ja': 'チャド',
      'it': 'Ciad'
    },
    'flag': 'https://restcountries.eu/data/tcd.svg',
    'name': 'Chad',
    'alpha2Code': 'TD',
    'capital': "N'Djamena",
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 14497000,
    'borders': [
      'CMR',
      'CAF',
      'LBY',
      'NER',
      'NGA',
      'SSD'
    ],
    'nativeName': 'Tchad'
  },
  {
    'currencies': [
      {
        'code': 'CLP',
        'name': 'Chilean peso',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Chile',
      'pt': 'Chile',
      'nl': 'Chili',
      'hr': 'Čile',
      'fa': 'شیلی',
      'de': 'Chile',
      'es': 'Chile',
      'fr': 'Chili',
      'ja': 'チリ',
      'it': 'Cile'
    },
    'flag': 'https://restcountries.eu/data/chl.svg',
    'name': 'Chile',
    'alpha2Code': 'CL',
    'capital': 'Santiago',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 18191900,
    'borders': [
      'ARG',
      'BOL',
      'PER'
    ],
    'nativeName': 'Chile'
  },
  {
    'currencies': [
      {
        'code': 'CNY',
        'name': 'Chinese yuan',
        'symbol': '¥'
      }
    ],
    'languages': [
      {
        'iso639_1': 'zh',
        'iso639_2': 'zho',
        'name': 'Chinese',
        'nativeName': '中文 (Zhōngwén)'
      }
    ],
    'translations': {
      'br': 'China',
      'pt': 'China',
      'nl': 'China',
      'hr': 'Kina',
      'fa': 'چین',
      'de': 'China',
      'es': 'China',
      'fr': 'Chine',
      'ja': '中国',
      'it': 'Cina'
    },
    'flag': 'https://restcountries.eu/data/chn.svg',
    'name': 'China',
    'alpha2Code': 'CN',
    'capital': 'Beijing',
    'region': 'Asia',
    'subregion': 'Eastern Asia',
    'population': 1377422166,
    'borders': [
      'AFG',
      'BTN',
      'MMR',
      'HKG',
      'IND',
      'KAZ',
      'PRK',
      'KGZ',
      'LAO',
      'MAC',
      'MNG',
      'PAK',
      'RUS',
      'TJK',
      'VNM'
    ],
    'nativeName': '中国'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilha Christmas',
      'pt': 'Ilha do Natal',
      'nl': 'Christmaseiland',
      'hr': 'Božićni otok',
      'fa': 'جزیره کریسمس',
      'de': 'Weihnachtsinsel',
      'es': 'Isla de Navidad',
      'fr': 'Île Christmas',
      'ja': 'クリスマス島',
      'it': 'Isola di Natale'
    },
    'flag': 'https://restcountries.eu/data/cxr.svg',
    'name': 'Christmas Island',
    'alpha2Code': 'CX',
    'capital': 'Flying Fish Cove',
    'region': 'Oceania',
    'subregion': 'Australia and New Zealand',
    'population': 2072,
    'borders': [],
    'nativeName': 'Christmas Island'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Cocos',
      'pt': 'Ilhas dos Cocos',
      'nl': 'Cocoseilanden',
      'hr': 'Kokosovi Otoci',
      'fa': 'جزایر کوکوس',
      'de': 'Kokosinseln',
      'es': 'Islas Cocos o Islas Keeling',
      'fr': 'Îles Cocos',
      'ja': 'ココス（キーリング）諸島',
      'it': 'Isole Cocos e Keeling'
    },
    'flag': 'https://restcountries.eu/data/cck.svg',
    'name': 'Cocos (Keeling) Islands',
    'alpha2Code': 'CC',
    'capital': 'West Island',
    'region': 'Oceania',
    'subregion': 'Australia and New Zealand',
    'population': 550,
    'borders': [],
    'nativeName': 'Cocos (Keeling) Islands'
  },
  {
    'currencies': [
      {
        'code': 'COP',
        'name': 'Colombian peso',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Colômbia',
      'pt': 'Colômbia',
      'nl': 'Colombia',
      'hr': 'Kolumbija',
      'fa': 'کلمبیا',
      'de': 'Kolumbien',
      'es': 'Colombia',
      'fr': 'Colombie',
      'ja': 'コロンビア',
      'it': 'Colombia'
    },
    'flag': 'https://restcountries.eu/data/col.svg',
    'name': 'Colombia',
    'alpha2Code': 'CO',
    'capital': 'Bogotá',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 48759958,
    'borders': [
      'BRA',
      'ECU',
      'PAN',
      'PER',
      'VEN'
    ],
    'nativeName': 'Colombia'
  },
  {
    'currencies': [
      {
        'code': 'KMF',
        'name': 'Comorian franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Comores',
      'pt': 'Comores',
      'nl': 'Comoren',
      'hr': 'Komori',
      'fa': 'کومور',
      'de': 'Union der Komoren',
      'es': 'Comoras',
      'fr': 'Comores',
      'ja': 'コモロ',
      'it': 'Comore'
    },
    'flag': 'https://restcountries.eu/data/com.svg',
    'name': 'Comoros',
    'alpha2Code': 'KM',
    'capital': 'Moroni',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 806153,
    'borders': [],
    'nativeName': 'Komori'
  },
  {
    'currencies': [
      {
        'code': 'XAF',
        'name': 'Central African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'ln',
        'iso639_2': 'lin',
        'name': 'Lingala',
        'nativeName': 'Lingála'
      }
    ],
    'translations': {
      'br': 'Congo',
      'pt': 'Congo',
      'nl': 'Congo [Republiek]',
      'hr': 'Kongo',
      'fa': 'کنگو',
      'de': 'Kongo',
      'es': 'Congo',
      'fr': 'Congo',
      'ja': 'コンゴ共和国',
      'it': 'Congo'
    },
    'flag': 'https://restcountries.eu/data/cog.svg',
    'name': 'Congo',
    'alpha2Code': 'CG',
    'capital': 'Brazzaville',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 4741000,
    'borders': [
      'AGO',
      'CMR',
      'CAF',
      'COD',
      'GAB'
    ],
    'nativeName': 'République du Congo'
  },
  {
    'currencies': [
      {
        'code': 'CDF',
        'name': 'Congolese franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'ln',
        'iso639_2': 'lin',
        'name': 'Lingala',
        'nativeName': 'Lingála'
      },
      {
        'iso639_1': 'kg',
        'iso639_2': 'kon',
        'name': 'Kongo',
        'nativeName': 'Kikongo'
      },
      {
        'iso639_1': 'sw',
        'iso639_2': 'swa',
        'name': 'Swahili',
        'nativeName': 'Kiswahili'
      },
      {
        'iso639_1': 'lu',
        'iso639_2': 'lub',
        'name': 'Luba-Katanga',
        'nativeName': 'Tshiluba'
      }
    ],
    'translations': {
      'br': 'RD Congo',
      'pt': 'RD Congo',
      'nl': 'Congo [DRC]',
      'hr': 'Kongo, Demokratska Republika',
      'fa': 'جمهوری کنگو',
      'de': 'Kongo (Dem. Rep.)',
      'es': 'Congo (Rep. Dem.)',
      'fr': 'Congo (Rép. dém.)',
      'ja': 'コンゴ民主共和国',
      'it': 'Congo (Rep. Dem.)'
    },
    'flag': 'https://restcountries.eu/data/cod.svg',
    'name': 'Congo (Democratic Republic of the)',
    'alpha2Code': 'CD',
    'capital': 'Kinshasa',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 85026000,
    'borders': [
      'AGO',
      'BDI',
      'CAF',
      'COG',
      'RWA',
      'SSD',
      'TZA',
      'UGA',
      'ZMB'
    ],
    'nativeName': 'République démocratique du Congo'
  },
  {
    'currencies': [
      {
        'code': 'NZD',
        'name': 'New Zealand dollar',
        'symbol': '$'
      },
      {
        'code': 'CKD',
        'name': 'Cook Islands dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Cook',
      'pt': 'Ilhas Cook',
      'nl': 'Cookeilanden',
      'hr': 'Cookovo Otočje',
      'fa': 'جزایر کوک',
      'de': 'Cookinseln',
      'es': 'Islas Cook',
      'fr': 'Îles Cook',
      'ja': 'クック諸島',
      'it': 'Isole Cook'
    },
    'flag': 'https://restcountries.eu/data/cok.svg',
    'name': 'Cook Islands',
    'alpha2Code': 'CK',
    'capital': 'Avarua',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 18100,
    'borders': [],
    'nativeName': 'Cook Islands'
  },
  {
    'currencies': [
      {
        'code': 'CRC',
        'name': 'Costa Rican colón',
        'symbol': '₡'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Costa Rica',
      'pt': 'Costa Rica',
      'nl': 'Costa Rica',
      'hr': 'Kostarika',
      'fa': 'کاستاریکا',
      'de': 'Costa Rica',
      'es': 'Costa Rica',
      'fr': 'Costa Rica',
      'ja': 'コスタリカ',
      'it': 'Costa Rica'
    },
    'flag': 'https://restcountries.eu/data/cri.svg',
    'name': 'Costa Rica',
    'alpha2Code': 'CR',
    'capital': 'San José',
    'region': 'Americas',
    'subregion': 'Central America',
    'population': 4890379,
    'borders': [
      'NIC',
      'PAN'
    ],
    'nativeName': 'Costa Rica'
  },
  {
    'currencies': [
      {
        'code': 'HRK',
        'name': 'Croatian kuna',
        'symbol': 'kn'
      }
    ],
    'languages': [
      {
        'iso639_1': 'hr',
        'iso639_2': 'hrv',
        'name': 'Croatian',
        'nativeName': 'hrvatski jezik'
      }
    ],
    'translations': {
      'br': 'Croácia',
      'pt': 'Croácia',
      'nl': 'Kroatië',
      'hr': 'Hrvatska',
      'fa': 'کرواسی',
      'de': 'Kroatien',
      'es': 'Croacia',
      'fr': 'Croatie',
      'ja': 'クロアチア',
      'it': 'Croazia'
    },
    'flag': 'https://restcountries.eu/data/hrv.svg',
    'name': 'Croatia',
    'alpha2Code': 'HR',
    'capital': 'Zagreb',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 4190669,
    'borders': [
      'BIH',
      'HUN',
      'MNE',
      'SRB',
      'SVN'
    ],
    'nativeName': 'Hrvatska'
  },
  {
    'currencies': [
      {
        'code': 'CUC',
        'name': 'Cuban convertible peso',
        'symbol': '$'
      },
      {
        'code': 'CUP',
        'name': 'Cuban peso',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Cuba',
      'pt': 'Cuba',
      'nl': 'Cuba',
      'hr': 'Kuba',
      'fa': 'کوبا',
      'de': 'Kuba',
      'es': 'Cuba',
      'fr': 'Cuba',
      'ja': 'キューバ',
      'it': 'Cuba'
    },
    'flag': 'https://restcountries.eu/data/cub.svg',
    'name': 'Cuba',
    'alpha2Code': 'CU',
    'capital': 'Havana',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 11239004,
    'borders': [],
    'nativeName': 'Cuba'
  },
  {
    'currencies': [
      {
        'code': 'ANG',
        'name': 'Netherlands Antillean guilder',
        'symbol': 'ƒ'
      }
    ],
    'languages': [
      {
        'iso639_1': 'nl',
        'iso639_2': 'nld',
        'name': 'Dutch',
        'nativeName': 'Nederlands'
      },
      {
        'iso639_1': 'pa',
        'iso639_2': 'pan',
        'name': '(Eastern) Punjabi',
        'nativeName': 'ਪੰਜਾਬੀ'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Curaçao',
      'pt': 'Curaçao',
      'nl': 'Curaçao',
      'fa': 'کوراسائو',
      'de': 'Curaçao',
      'fr': 'Curaçao',
      'it': 'Curaçao'
    },
    'flag': 'https://restcountries.eu/data/cuw.svg',
    'name': 'Curaçao',
    'alpha2Code': 'CW',
    'capital': 'Willemstad',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 154843,
    'borders': [],
    'nativeName': 'Curaçao'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'el',
        'iso639_2': 'ell',
        'name': 'Greek (modern)',
        'nativeName': 'ελληνικά'
      },
      {
        'iso639_1': 'tr',
        'iso639_2': 'tur',
        'name': 'Turkish',
        'nativeName': 'Türkçe'
      },
      {
        'iso639_1': 'hy',
        'iso639_2': 'hye',
        'name': 'Armenian',
        'nativeName': 'Հայերեն'
      }
    ],
    'translations': {
      'br': 'Chipre',
      'pt': 'Chipre',
      'nl': 'Cyprus',
      'hr': 'Cipar',
      'fa': 'قبرس',
      'de': 'Zypern',
      'es': 'Chipre',
      'fr': 'Chypre',
      'ja': 'キプロス',
      'it': 'Cipro'
    },
    'flag': 'https://restcountries.eu/data/cyp.svg',
    'name': 'Cyprus',
    'alpha2Code': 'CY',
    'capital': 'Nicosia',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 847000,
    'borders': [
      'GBR'
    ],
    'nativeName': 'Κύπρος'
  },
  {
    'currencies': [
      {
        'code': 'CZK',
        'name': 'Czech koruna',
        'symbol': 'Kč'
      }
    ],
    'languages': [
      {
        'iso639_1': 'cs',
        'iso639_2': 'ces',
        'name': 'Czech',
        'nativeName': 'čeština'
      },
      {
        'iso639_1': 'sk',
        'iso639_2': 'slk',
        'name': 'Slovak',
        'nativeName': 'slovenčina'
      }
    ],
    'translations': {
      'br': 'República Tcheca',
      'pt': 'República Checa',
      'nl': 'Tsjechië',
      'hr': 'Češka',
      'fa': 'جمهوری چک',
      'de': 'Tschechische Republik',
      'es': 'República Checa',
      'fr': 'République tchèque',
      'ja': 'チェコ',
      'it': 'Repubblica Ceca'
    },
    'flag': 'https://restcountries.eu/data/cze.svg',
    'name': 'Czech Republic',
    'alpha2Code': 'CZ',
    'capital': 'Prague',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 10558524,
    'borders': [
      'AUT',
      'DEU',
      'POL',
      'SVK'
    ],
    'nativeName': 'Česká republika'
  },
  {
    'currencies': [
      {
        'code': 'DKK',
        'name': 'Danish krone',
        'symbol': 'kr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'da',
        'iso639_2': 'dan',
        'name': 'Danish',
        'nativeName': 'dansk'
      }
    ],
    'translations': {
      'br': 'Dinamarca',
      'pt': 'Dinamarca',
      'nl': 'Denemarken',
      'hr': 'Danska',
      'fa': 'دانمارک',
      'de': 'Dänemark',
      'es': 'Dinamarca',
      'fr': 'Danemark',
      'ja': 'デンマーク',
      'it': 'Danimarca'
    },
    'flag': 'https://restcountries.eu/data/dnk.svg',
    'name': 'Denmark',
    'alpha2Code': 'DK',
    'capital': 'Copenhagen',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 5717014,
    'borders': [
      'DEU'
    ],
    'nativeName': 'Danmark'
  },
  {
    'currencies': [
      {
        'code': 'DJF',
        'name': 'Djiboutian franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Djibuti',
      'pt': 'Djibuti',
      'nl': 'Djibouti',
      'hr': 'Džibuti',
      'fa': 'جیبوتی',
      'de': 'Dschibuti',
      'es': 'Yibuti',
      'fr': 'Djibouti',
      'ja': 'ジブチ',
      'it': 'Gibuti'
    },
    'flag': 'https://restcountries.eu/data/dji.svg',
    'name': 'Djibouti',
    'alpha2Code': 'DJ',
    'capital': 'Djibouti',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 900000,
    'borders': [
      'ERI',
      'ETH',
      'SOM'
    ],
    'nativeName': 'Djibouti'
  },
  {
    'currencies': [
      {
        'code': 'XCD',
        'name': 'East Caribbean dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Dominica',
      'pt': 'Dominica',
      'nl': 'Dominica',
      'hr': 'Dominika',
      'fa': 'دومینیکا',
      'de': 'Dominica',
      'es': 'Dominica',
      'fr': 'Dominique',
      'ja': 'ドミニカ国',
      'it': 'Dominica'
    },
    'flag': 'https://restcountries.eu/data/dma.svg',
    'name': 'Dominica',
    'alpha2Code': 'DM',
    'capital': 'Roseau',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 71293,
    'borders': [],
    'nativeName': 'Dominica'
  },
  {
    'currencies': [
      {
        'code': 'DOP',
        'name': 'Dominican peso',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'República Dominicana',
      'pt': 'República Dominicana',
      'nl': 'Dominicaanse Republiek',
      'hr': 'Dominikanska Republika',
      'fa': 'جمهوری دومینیکن',
      'de': 'Dominikanische Republik',
      'es': 'República Dominicana',
      'fr': 'République dominicaine',
      'ja': 'ドミニカ共和国',
      'it': 'Repubblica Dominicana'
    },
    'flag': 'https://restcountries.eu/data/dom.svg',
    'name': 'Dominican Republic',
    'alpha2Code': 'DO',
    'capital': 'Santo Domingo',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 10075045,
    'borders': [
      'HTI'
    ],
    'nativeName': 'República Dominicana'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Equador',
      'pt': 'Equador',
      'nl': 'Ecuador',
      'hr': 'Ekvador',
      'fa': 'اکوادور',
      'de': 'Ecuador',
      'es': 'Ecuador',
      'fr': 'Équateur',
      'ja': 'エクアドル',
      'it': 'Ecuador'
    },
    'flag': 'https://restcountries.eu/data/ecu.svg',
    'name': 'Ecuador',
    'alpha2Code': 'EC',
    'capital': 'Quito',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 16545799,
    'borders': [
      'COL',
      'PER'
    ],
    'nativeName': 'Ecuador'
  },
  {
    'currencies': [
      {
        'code': 'EGP',
        'name': 'Egyptian pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Egito',
      'pt': 'Egipto',
      'nl': 'Egypte',
      'hr': 'Egipat',
      'fa': 'مصر',
      'de': 'Ägypten',
      'es': 'Egipto',
      'fr': 'Égypte',
      'ja': 'エジプト',
      'it': 'Egitto'
    },
    'flag': 'https://restcountries.eu/data/egy.svg',
    'name': 'Egypt',
    'alpha2Code': 'EG',
    'capital': 'Cairo',
    'region': 'Africa',
    'subregion': 'Northern Africa',
    'population': 91290000,
    'borders': [
      'ISR',
      'LBY',
      'SDN'
    ],
    'nativeName': 'مصر\u200e'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'El Salvador',
      'pt': 'El Salvador',
      'nl': 'El Salvador',
      'hr': 'Salvador',
      'fa': 'السالوادور',
      'de': 'El Salvador',
      'es': 'El Salvador',
      'fr': 'Salvador',
      'ja': 'エルサルバドル',
      'it': 'El Salvador'
    },
    'flag': 'https://restcountries.eu/data/slv.svg',
    'name': 'El Salvador',
    'alpha2Code': 'SV',
    'capital': 'San Salvador',
    'region': 'Americas',
    'subregion': 'Central America',
    'population': 6520675,
    'borders': [
      'GTM',
      'HND'
    ],
    'nativeName': 'El Salvador'
  },
  {
    'currencies': [
      {
        'code': 'XAF',
        'name': 'Central African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Guiné Equatorial',
      'pt': 'Guiné Equatorial',
      'nl': 'Equatoriaal-Guinea',
      'hr': 'Ekvatorijalna Gvineja',
      'fa': 'گینه استوایی',
      'de': 'Äquatorial-Guinea',
      'es': 'Guinea Ecuatorial',
      'fr': 'Guinée-Équatoriale',
      'ja': '赤道ギニア',
      'it': 'Guinea Equatoriale'
    },
    'flag': 'https://restcountries.eu/data/gnq.svg',
    'name': 'Equatorial Guinea',
    'alpha2Code': 'GQ',
    'capital': 'Malabo',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 1222442,
    'borders': [
      'CMR',
      'GAB'
    ],
    'nativeName': 'Guinea Ecuatorial'
  },
  {
    'currencies': [
      {
        'code': 'ERN',
        'name': 'Eritrean nakfa',
        'symbol': 'Nfk'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ti',
        'iso639_2': 'tir',
        'name': 'Tigrinya',
        'nativeName': 'ትግርኛ'
      },
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Eritreia',
      'pt': 'Eritreia',
      'nl': 'Eritrea',
      'hr': 'Eritreja',
      'fa': 'اریتره',
      'de': 'Eritrea',
      'es': 'Eritrea',
      'fr': 'Érythrée',
      'ja': 'エリトリア',
      'it': 'Eritrea'
    },
    'flag': 'https://restcountries.eu/data/eri.svg',
    'name': 'Eritrea',
    'alpha2Code': 'ER',
    'capital': 'Asmara',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 5352000,
    'borders': [
      'DJI',
      'ETH',
      'SDN'
    ],
    'nativeName': 'ኤርትራ'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'et',
        'iso639_2': 'est',
        'name': 'Estonian',
        'nativeName': 'eesti'
      }
    ],
    'translations': {
      'br': 'Estônia',
      'pt': 'Estónia',
      'nl': 'Estland',
      'hr': 'Estonija',
      'fa': 'استونی',
      'de': 'Estland',
      'es': 'Estonia',
      'fr': 'Estonie',
      'ja': 'エストニア',
      'it': 'Estonia'
    },
    'flag': 'https://restcountries.eu/data/est.svg',
    'name': 'Estonia',
    'alpha2Code': 'EE',
    'capital': 'Tallinn',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 1315944,
    'borders': [
      'LVA',
      'RUS'
    ],
    'nativeName': 'Eesti'
  },
  {
    'currencies': [
      {
        'code': 'ETB',
        'name': 'Ethiopian birr',
        'symbol': 'Br'
      }
    ],
    'languages': [
      {
        'iso639_1': 'am',
        'iso639_2': 'amh',
        'name': 'Amharic',
        'nativeName': 'አማርኛ'
      }
    ],
    'translations': {
      'br': 'Etiópia',
      'pt': 'Etiópia',
      'nl': 'Ethiopië',
      'hr': 'Etiopija',
      'fa': 'اتیوپی',
      'de': 'Äthiopien',
      'es': 'Etiopía',
      'fr': 'Éthiopie',
      'ja': 'エチオピア',
      'it': 'Etiopia'
    },
    'flag': 'https://restcountries.eu/data/eth.svg',
    'name': 'Ethiopia',
    'alpha2Code': 'ET',
    'capital': 'Addis Ababa',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 92206005,
    'borders': [
      'DJI',
      'ERI',
      'KEN',
      'SOM',
      'SSD',
      'SDN'
    ],
    'nativeName': 'ኢትዮጵያ'
  },
  {
    'currencies': [
      {
        'code': 'FKP',
        'name': 'Falkland Islands pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Malvinas',
      'pt': 'Ilhas Falkland',
      'nl': 'Falklandeilanden [Islas Malvinas]',
      'hr': 'Falklandski Otoci',
      'fa': 'جزایر فالکلند',
      'de': 'Falklandinseln',
      'es': 'Islas Malvinas',
      'fr': 'Îles Malouines',
      'ja': 'フォークランド（マルビナス）諸島',
      'it': 'Isole Falkland o Isole Malvine'
    },
    'flag': 'https://restcountries.eu/data/flk.svg',
    'name': 'Falkland Islands (Malvinas)',
    'alpha2Code': 'FK',
    'capital': 'Stanley',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 2563,
    'borders': [],
    'nativeName': 'Falkland Islands'
  },
  {
    'currencies': [
      {
        'code': 'DKK',
        'name': 'Danish krone',
        'symbol': 'kr'
      },
      {
        'code': '(none)',
        'name': 'Faroese króna',
        'symbol': 'kr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fo',
        'iso639_2': 'fao',
        'name': 'Faroese',
        'nativeName': 'føroyskt'
      }
    ],
    'translations': {
      'br': 'Ilhas Faroé',
      'pt': 'Ilhas Faroé',
      'nl': 'Faeröer',
      'hr': 'Farski Otoci',
      'fa': 'جزایر فارو',
      'de': 'Färöer-Inseln',
      'es': 'Islas Faroe',
      'fr': 'Îles Féroé',
      'ja': 'フェロー諸島',
      'it': 'Isole Far Oer'
    },
    'flag': 'https://restcountries.eu/data/fro.svg',
    'name': 'Faroe Islands',
    'alpha2Code': 'FO',
    'capital': 'Tórshavn',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 49376,
    'borders': [],
    'nativeName': 'Føroyar'
  },
  {
    'currencies': [
      {
        'code': 'FJD',
        'name': 'Fijian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'fj',
        'iso639_2': 'fij',
        'name': 'Fijian',
        'nativeName': 'vosa Vakaviti'
      },
      {
        'iso639_1': 'hi',
        'iso639_2': 'hin',
        'name': 'Hindi',
        'nativeName': 'हिन्दी'
      },
      {
        'iso639_1': 'ur',
        'iso639_2': 'urd',
        'name': 'Urdu',
        'nativeName': 'اردو'
      }
    ],
    'translations': {
      'br': 'Fiji',
      'pt': 'Fiji',
      'nl': 'Fiji',
      'hr': 'Fiđi',
      'fa': 'فیجی',
      'de': 'Fidschi',
      'es': 'Fiyi',
      'fr': 'Fidji',
      'ja': 'フィジー',
      'it': 'Figi'
    },
    'flag': 'https://restcountries.eu/data/fji.svg',
    'name': 'Fiji',
    'alpha2Code': 'FJ',
    'capital': 'Suva',
    'region': 'Oceania',
    'subregion': 'Melanesia',
    'population': 867000,
    'borders': [],
    'nativeName': 'Fiji'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fi',
        'iso639_2': 'fin',
        'name': 'Finnish',
        'nativeName': 'suomi'
      },
      {
        'iso639_1': 'sv',
        'iso639_2': 'swe',
        'name': 'Swedish',
        'nativeName': 'svenska'
      }
    ],
    'translations': {
      'br': 'Finlândia',
      'pt': 'Finlândia',
      'nl': 'Finland',
      'hr': 'Finska',
      'fa': 'فنلاند',
      'de': 'Finnland',
      'es': 'Finlandia',
      'fr': 'Finlande',
      'ja': 'フィンランド',
      'it': 'Finlandia'
    },
    'flag': 'https://restcountries.eu/data/fin.svg',
    'name': 'Finland',
    'alpha2Code': 'FI',
    'capital': 'Helsinki',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 5491817,
    'borders': [
      'NOR',
      'SWE',
      'RUS'
    ],
    'nativeName': 'Suomi'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'França',
      'pt': 'França',
      'nl': 'Frankrijk',
      'hr': 'Francuska',
      'fa': 'فرانسه',
      'de': 'Frankreich',
      'es': 'Francia',
      'fr': 'France',
      'ja': 'フランス',
      'it': 'Francia'
    },
    'flag': 'https://restcountries.eu/data/fra.svg',
    'name': 'France',
    'alpha2Code': 'FR',
    'capital': 'Paris',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 66710000,
    'borders': [
      'AND',
      'BEL',
      'DEU',
      'ITA',
      'LUX',
      'MCO',
      'ESP',
      'CHE'
    ],
    'nativeName': 'France'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Guiana Francesa',
      'pt': 'Guiana Francesa',
      'nl': 'Frans-Guyana',
      'hr': 'Francuska Gvajana',
      'fa': 'گویان فرانسه',
      'de': 'Französisch Guyana',
      'es': 'Guayana Francesa',
      'fr': 'Guayane',
      'ja': 'フランス領ギアナ',
      'it': 'Guyana francese'
    },
    'flag': 'https://restcountries.eu/data/guf.svg',
    'name': 'French Guiana',
    'alpha2Code': 'GF',
    'capital': 'Cayenne',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 254541,
    'borders': [
      'BRA',
      'SUR'
    ],
    'nativeName': 'Guyane française'
  },
  {
    'currencies': [
      {
        'code': 'XPF',
        'name': 'CFP franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Polinésia Francesa',
      'pt': 'Polinésia Francesa',
      'nl': 'Frans-Polynesië',
      'hr': 'Francuska Polinezija',
      'fa': 'پلی\u200cنزی فرانسه',
      'de': 'Französisch-Polynesien',
      'es': 'Polinesia Francesa',
      'fr': 'Polynésie française',
      'ja': 'フランス領ポリネシア',
      'it': 'Polinesia Francese'
    },
    'flag': 'https://restcountries.eu/data/pyf.svg',
    'name': 'French Polynesia',
    'alpha2Code': 'PF',
    'capital': 'Papeetē',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 271800,
    'borders': [],
    'nativeName': 'Polynésie française'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Terras Austrais e Antárticas Francesas',
      'pt': 'Terras Austrais e Antárticas Francesas',
      'nl': 'Franse Gebieden in de zuidelijke Indische Oceaan',
      'hr': 'Francuski južni i antarktički teritoriji',
      'fa': 'سرزمین\u200cهای جنوبی و جنوبگانی فرانسه',
      'de': 'Französische Süd- und Antarktisgebiete',
      'es': 'Tierras Australes y Antárticas Francesas',
      'fr': 'Terres australes et antarctiques françaises',
      'ja': 'フランス領南方・南極地域',
      'it': 'Territori Francesi del Sud'
    },
    'flag': 'https://restcountries.eu/data/atf.svg',
    'name': 'French Southern Territories',
    'alpha2Code': 'TF',
    'capital': 'Port-aux-Français',
    'region': 'Africa',
    'subregion': 'Southern Africa',
    'population': 140,
    'borders': [],
    'nativeName': 'Territoire des Terres australes et antarctiques françaises'
  },
  {
    'currencies': [
      {
        'code': 'XAF',
        'name': 'Central African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Gabão',
      'pt': 'Gabão',
      'nl': 'Gabon',
      'hr': 'Gabon',
      'fa': 'گابن',
      'de': 'Gabun',
      'es': 'Gabón',
      'fr': 'Gabon',
      'ja': 'ガボン',
      'it': 'Gabon'
    },
    'flag': 'https://restcountries.eu/data/gab.svg',
    'name': 'Gabon',
    'alpha2Code': 'GA',
    'capital': 'Libreville',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 1802278,
    'borders': [
      'CMR',
      'COG',
      'GNQ'
    ],
    'nativeName': 'Gabon'
  },
  {
    'currencies': [
      {
        'code': 'GMD',
        'name': 'Gambian dalasi',
        'symbol': 'D'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Gâmbia',
      'pt': 'Gâmbia',
      'nl': 'Gambia',
      'hr': 'Gambija',
      'fa': 'گامبیا',
      'de': 'Gambia',
      'es': 'Gambia',
      'fr': 'Gambie',
      'ja': 'ガンビア',
      'it': 'Gambia'
    },
    'flag': 'https://restcountries.eu/data/gmb.svg',
    'name': 'Gambia',
    'alpha2Code': 'GM',
    'capital': 'Banjul',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 1882450,
    'borders': [
      'SEN'
    ],
    'nativeName': 'Gambia'
  },
  {
    'currencies': [
      {
        'code': 'GEL',
        'name': 'Georgian Lari',
        'symbol': 'ლ'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ka',
        'iso639_2': 'kat',
        'name': 'Georgian',
        'nativeName': 'ქართული'
      }
    ],
    'translations': {
      'br': 'Geórgia',
      'pt': 'Geórgia',
      'nl': 'Georgië',
      'hr': 'Gruzija',
      'fa': 'گرجستان',
      'de': 'Georgien',
      'es': 'Georgia',
      'fr': 'Géorgie',
      'ja': 'グルジア',
      'it': 'Georgia'
    },
    'flag': 'https://restcountries.eu/data/geo.svg',
    'name': 'Georgia',
    'alpha2Code': 'GE',
    'capital': 'Tbilisi',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 3720400,
    'borders': [
      'ARM',
      'AZE',
      'RUS',
      'TUR'
    ],
    'nativeName': 'საქართველო'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'de',
        'iso639_2': 'deu',
        'name': 'German',
        'nativeName': 'Deutsch'
      }
    ],
    'translations': {
      'br': 'Alemanha',
      'pt': 'Alemanha',
      'nl': 'Duitsland',
      'hr': 'Njemačka',
      'fa': 'آلمان',
      'de': 'Deutschland',
      'es': 'Alemania',
      'fr': 'Allemagne',
      'ja': 'ドイツ',
      'it': 'Germania'
    },
    'flag': 'https://restcountries.eu/data/deu.svg',
    'name': 'Germany',
    'alpha2Code': 'DE',
    'capital': 'Berlin',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 81770900,
    'borders': [
      'AUT',
      'BEL',
      'CZE',
      'DNK',
      'FRA',
      'LUX',
      'NLD',
      'POL',
      'CHE'
    ],
    'nativeName': 'Deutschland'
  },
  {
    'currencies': [
      {
        'code': 'GHS',
        'name': 'Ghanaian cedi',
        'symbol': '₵'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Gana',
      'pt': 'Gana',
      'nl': 'Ghana',
      'hr': 'Gana',
      'fa': 'غنا',
      'de': 'Ghana',
      'es': 'Ghana',
      'fr': 'Ghana',
      'ja': 'ガーナ',
      'it': 'Ghana'
    },
    'flag': 'https://restcountries.eu/data/gha.svg',
    'name': 'Ghana',
    'alpha2Code': 'GH',
    'capital': 'Accra',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 27670174,
    'borders': [
      'BFA',
      'CIV',
      'TGO'
    ],
    'nativeName': 'Ghana'
  },
  {
    'currencies': [
      {
        'code': 'GIP',
        'name': 'Gibraltar pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Gibraltar',
      'pt': 'Gibraltar',
      'nl': 'Gibraltar',
      'hr': 'Gibraltar',
      'fa': 'جبل\u200cطارق',
      'de': 'Gibraltar',
      'es': 'Gibraltar',
      'fr': 'Gibraltar',
      'ja': 'ジブラルタル',
      'it': 'Gibilterra'
    },
    'flag': 'https://restcountries.eu/data/gib.svg',
    'name': 'Gibraltar',
    'alpha2Code': 'GI',
    'capital': 'Gibraltar',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 33140,
    'borders': [
      'ESP'
    ],
    'nativeName': 'Gibraltar'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'el',
        'iso639_2': 'ell',
        'name': 'Greek (modern)',
        'nativeName': 'ελληνικά'
      }
    ],
    'translations': {
      'br': 'Grécia',
      'pt': 'Grécia',
      'nl': 'Griekenland',
      'hr': 'Grčka',
      'fa': 'یونان',
      'de': 'Griechenland',
      'es': 'Grecia',
      'fr': 'Grèce',
      'ja': 'ギリシャ',
      'it': 'Grecia'
    },
    'flag': 'https://restcountries.eu/data/grc.svg',
    'name': 'Greece',
    'alpha2Code': 'GR',
    'capital': 'Athens',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 10858018,
    'borders': [
      'ALB',
      'BGR',
      'TUR',
      'MKD'
    ],
    'nativeName': 'Ελλάδα'
  },
  {
    'currencies': [
      {
        'code': 'DKK',
        'name': 'Danish krone',
        'symbol': 'kr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'kl',
        'iso639_2': 'kal',
        'name': 'Kalaallisut',
        'nativeName': 'kalaallisut'
      }
    ],
    'translations': {
      'br': 'Groelândia',
      'pt': 'Gronelândia',
      'nl': 'Groenland',
      'hr': 'Grenland',
      'fa': 'گرینلند',
      'de': 'Grönland',
      'es': 'Groenlandia',
      'fr': 'Groenland',
      'ja': 'グリーンランド',
      'it': 'Groenlandia'
    },
    'flag': 'https://restcountries.eu/data/grl.svg',
    'name': 'Greenland',
    'alpha2Code': 'GL',
    'capital': 'Nuuk',
    'region': 'Americas',
    'subregion': 'Northern America',
    'population': 55847,
    'borders': [],
    'nativeName': 'Kalaallit Nunaat'
  },
  {
    'currencies': [
      {
        'code': 'XCD',
        'name': 'East Caribbean dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Granada',
      'pt': 'Granada',
      'nl': 'Grenada',
      'hr': 'Grenada',
      'fa': 'گرنادا',
      'de': 'Grenada',
      'es': 'Grenada',
      'fr': 'Grenade',
      'ja': 'グレナダ',
      'it': 'Grenada'
    },
    'flag': 'https://restcountries.eu/data/grd.svg',
    'name': 'Grenada',
    'alpha2Code': 'GD',
    'capital': "St. George's",
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 103328,
    'borders': [],
    'nativeName': 'Grenada'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Guadalupe',
      'pt': 'Guadalupe',
      'nl': 'Guadeloupe',
      'hr': 'Gvadalupa',
      'fa': 'جزیره گوادلوپ',
      'de': 'Guadeloupe',
      'es': 'Guadalupe',
      'fr': 'Guadeloupe',
      'ja': 'グアドループ',
      'it': 'Guadeloupa'
    },
    'flag': 'https://restcountries.eu/data/glp.svg',
    'name': 'Guadeloupe',
    'alpha2Code': 'GP',
    'capital': 'Basse-Terre',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 400132,
    'borders': [],
    'nativeName': 'Guadeloupe'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'ch',
        'iso639_2': 'cha',
        'name': 'Chamorro',
        'nativeName': 'Chamoru'
      },
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Guam',
      'pt': 'Guame',
      'nl': 'Guam',
      'hr': 'Guam',
      'fa': 'گوام',
      'de': 'Guam',
      'es': 'Guam',
      'fr': 'Guam',
      'ja': 'グアム',
      'it': 'Guam'
    },
    'flag': 'https://restcountries.eu/data/gum.svg',
    'name': 'Guam',
    'alpha2Code': 'GU',
    'capital': 'Hagåtña',
    'region': 'Oceania',
    'subregion': 'Micronesia',
    'population': 184200,
    'borders': [],
    'nativeName': 'Guam'
  },
  {
    'currencies': [
      {
        'code': 'GTQ',
        'name': 'Guatemalan quetzal',
        'symbol': 'Q'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Guatemala',
      'pt': 'Guatemala',
      'nl': 'Guatemala',
      'hr': 'Gvatemala',
      'fa': 'گواتمالا',
      'de': 'Guatemala',
      'es': 'Guatemala',
      'fr': 'Guatemala',
      'ja': 'グアテマラ',
      'it': 'Guatemala'
    },
    'flag': 'https://restcountries.eu/data/gtm.svg',
    'name': 'Guatemala',
    'alpha2Code': 'GT',
    'capital': 'Guatemala City',
    'region': 'Americas',
    'subregion': 'Central America',
    'population': 16176133,
    'borders': [
      'BLZ',
      'SLV',
      'HND',
      'MEX'
    ],
    'nativeName': 'Guatemala'
  },
  {
    'currencies': [
      {
        'code': 'GBP',
        'name': 'British pound',
        'symbol': '£'
      },
      {
        'code': '(none)',
        'name': 'Guernsey pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Guernsey',
      'pt': 'Guernsey',
      'nl': 'Guernsey',
      'hr': 'Guernsey',
      'fa': 'گرنزی',
      'de': 'Guernsey',
      'es': 'Guernsey',
      'fr': 'Guernesey',
      'ja': 'ガーンジー',
      'it': 'Guernsey'
    },
    'flag': 'https://restcountries.eu/data/ggy.svg',
    'name': 'Guernsey',
    'alpha2Code': 'GG',
    'capital': 'St. Peter Port',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 62999,
    'borders': [],
    'nativeName': 'Guernsey'
  },
  {
    'currencies': [
      {
        'code': 'GNF',
        'name': 'Guinean franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'ff',
        'iso639_2': 'ful',
        'name': 'Fula',
        'nativeName': 'Fulfulde'
      }
    ],
    'translations': {
      'br': 'Guiné',
      'pt': 'Guiné',
      'nl': 'Guinee',
      'hr': 'Gvineja',
      'fa': 'گینه',
      'de': 'Guinea',
      'es': 'Guinea',
      'fr': 'Guinée',
      'ja': 'ギニア',
      'it': 'Guinea'
    },
    'flag': 'https://restcountries.eu/data/gin.svg',
    'name': 'Guinea',
    'alpha2Code': 'GN',
    'capital': 'Conakry',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 12947000,
    'borders': [
      'CIV',
      'GNB',
      'LBR',
      'MLI',
      'SEN',
      'SLE'
    ],
    'nativeName': 'Guinée'
  },
  {
    'currencies': [
      {
        'code': 'XOF',
        'name': 'West African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'Guiné-Bissau',
      'pt': 'Guiné-Bissau',
      'nl': 'Guinee-Bissau',
      'hr': 'Gvineja Bisau',
      'fa': 'گینه بیسائو',
      'de': 'Guinea-Bissau',
      'es': 'Guinea-Bisáu',
      'fr': 'Guinée-Bissau',
      'ja': 'ギニアビサウ',
      'it': 'Guinea-Bissau'
    },
    'flag': 'https://restcountries.eu/data/gnb.svg',
    'name': 'Guinea-Bissau',
    'alpha2Code': 'GW',
    'capital': 'Bissau',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 1547777,
    'borders': [
      'GIN',
      'SEN'
    ],
    'nativeName': 'Guiné-Bissau'
  },
  {
    'currencies': [
      {
        'code': 'GYD',
        'name': 'Guyanese dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Guiana',
      'pt': 'Guiana',
      'nl': 'Guyana',
      'hr': 'Gvajana',
      'fa': 'گویان',
      'de': 'Guyana',
      'es': 'Guyana',
      'fr': 'Guyane',
      'ja': 'ガイアナ',
      'it': 'Guyana'
    },
    'flag': 'https://restcountries.eu/data/guy.svg',
    'name': 'Guyana',
    'alpha2Code': 'GY',
    'capital': 'Georgetown',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 746900,
    'borders': [
      'BRA',
      'SUR',
      'VEN'
    ],
    'nativeName': 'Guyana'
  },
  {
    'currencies': [
      {
        'code': 'HTG',
        'name': 'Haitian gourde',
        'symbol': 'G'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'ht',
        'iso639_2': 'hat',
        'name': 'Haitian',
        'nativeName': 'Kreyòl ayisyen'
      }
    ],
    'translations': {
      'br': 'Haiti',
      'pt': 'Haiti',
      'nl': 'Haïti',
      'hr': 'Haiti',
      'fa': 'هائیتی',
      'de': 'Haiti',
      'es': 'Haiti',
      'fr': 'Haïti',
      'ja': 'ハイチ',
      'it': 'Haiti'
    },
    'flag': 'https://restcountries.eu/data/hti.svg',
    'name': 'Haiti',
    'alpha2Code': 'HT',
    'capital': 'Port-au-Prince',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 11078033,
    'borders': [
      'DOM'
    ],
    'nativeName': 'Haïti'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilha Heard e Ilhas McDonald',
      'pt': 'Ilha Heard e Ilhas McDonald',
      'nl': 'Heard- en McDonaldeilanden',
      'hr': 'Otok Heard i otočje McDonald',
      'fa': 'جزیره هرد و جزایر مک\u200cدونالد',
      'de': 'Heard und die McDonaldinseln',
      'es': 'Islas Heard y McDonald',
      'fr': 'Îles Heard-et-MacDonald',
      'ja': 'ハード島とマクドナルド諸島',
      'it': 'Isole Heard e McDonald'
    },
    'flag': 'https://restcountries.eu/data/hmd.svg',
    'name': 'Heard Island and McDonald Islands',
    'alpha2Code': 'HM',
    'capital': '',
    'region': 'Polar',
    'subregion': '',
    'population': 0,
    'borders': [],
    'nativeName': 'Heard Island and McDonald Islands'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'la',
        'iso639_2': 'lat',
        'name': 'Latin',
        'nativeName': 'latine'
      },
      {
        'iso639_1': 'it',
        'iso639_2': 'ita',
        'name': 'Italian',
        'nativeName': 'Italiano'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'de',
        'iso639_2': 'deu',
        'name': 'German',
        'nativeName': 'Deutsch'
      }
    ],
    'translations': {
      'br': 'Vaticano',
      'pt': 'Vaticano',
      'nl': 'Heilige Stoel',
      'hr': 'Sveta Stolica',
      'fa': 'سریر مقدس',
      'de': 'Heiliger Stuhl',
      'es': 'Santa Sede',
      'fr': 'voir Saint',
      'ja': '聖座',
      'it': 'Santa Sede'
    },
    'flag': 'https://restcountries.eu/data/vat.svg',
    'name': 'Holy See',
    'alpha2Code': 'VA',
    'capital': 'Rome',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 451,
    'borders': [
      'ITA'
    ],
    'nativeName': 'Sancta Sedes'
  },
  {
    'currencies': [
      {
        'code': 'HNL',
        'name': 'Honduran lempira',
        'symbol': 'L'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Honduras',
      'pt': 'Honduras',
      'nl': 'Honduras',
      'hr': 'Honduras',
      'fa': 'هندوراس',
      'de': 'Honduras',
      'es': 'Honduras',
      'fr': 'Honduras',
      'ja': 'ホンジュラス',
      'it': 'Honduras'
    },
    'flag': 'https://restcountries.eu/data/hnd.svg',
    'name': 'Honduras',
    'alpha2Code': 'HN',
    'capital': 'Tegucigalpa',
    'region': 'Americas',
    'subregion': 'Central America',
    'population': 8576532,
    'borders': [
      'GTM',
      'SLV',
      'NIC'
    ],
    'nativeName': 'Honduras'
  },
  {
    'currencies': [
      {
        'code': 'HKD',
        'name': 'Hong Kong dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'zh',
        'iso639_2': 'zho',
        'name': 'Chinese',
        'nativeName': '中文 (Zhōngwén)'
      }
    ],
    'translations': {
      'br': 'Hong Kong',
      'pt': 'Hong Kong',
      'nl': 'Hongkong',
      'hr': 'Hong Kong',
      'fa': 'هنگ\u200cکنگ',
      'de': 'Hong Kong',
      'es': 'Hong Kong',
      'fr': 'Hong Kong',
      'ja': '香港',
      'it': 'Hong Kong'
    },
    'flag': 'https://restcountries.eu/data/hkg.svg',
    'name': 'Hong Kong',
    'alpha2Code': 'HK',
    'capital': 'City of Victoria',
    'region': 'Asia',
    'subregion': 'Eastern Asia',
    'population': 7324300,
    'borders': [
      'CHN'
    ],
    'nativeName': '香港'
  },
  {
    'currencies': [
      {
        'code': 'HUF',
        'name': 'Hungarian forint',
        'symbol': 'Ft'
      }
    ],
    'languages': [
      {
        'iso639_1': 'hu',
        'iso639_2': 'hun',
        'name': 'Hungarian',
        'nativeName': 'magyar'
      }
    ],
    'translations': {
      'br': 'Hungria',
      'pt': 'Hungria',
      'nl': 'Hongarije',
      'hr': 'Mađarska',
      'fa': 'مجارستان',
      'de': 'Ungarn',
      'es': 'Hungría',
      'fr': 'Hongrie',
      'ja': 'ハンガリー',
      'it': 'Ungheria'
    },
    'flag': 'https://restcountries.eu/data/hun.svg',
    'name': 'Hungary',
    'alpha2Code': 'HU',
    'capital': 'Budapest',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 9823000,
    'borders': [
      'AUT',
      'HRV',
      'ROU',
      'SRB',
      'SVK',
      'SVN',
      'UKR'
    ],
    'nativeName': 'Magyarország'
  },
  {
    'currencies': [
      {
        'code': 'ISK',
        'name': 'Icelandic króna',
        'symbol': 'kr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'is',
        'iso639_2': 'isl',
        'name': 'Icelandic',
        'nativeName': 'Íslenska'
      }
    ],
    'translations': {
      'br': 'Islândia',
      'pt': 'Islândia',
      'nl': 'IJsland',
      'hr': 'Island',
      'fa': 'ایسلند',
      'de': 'Island',
      'es': 'Islandia',
      'fr': 'Islande',
      'ja': 'アイスランド',
      'it': 'Islanda'
    },
    'flag': 'https://restcountries.eu/data/isl.svg',
    'name': 'Iceland',
    'alpha2Code': 'IS',
    'capital': 'Reykjavík',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 334300,
    'borders': [],
    'nativeName': 'Ísland'
  },
  {
    'currencies': [
      {
        'code': 'INR',
        'name': 'Indian rupee',
        'symbol': '₹'
      }
    ],
    'languages': [
      {
        'iso639_1': 'hi',
        'iso639_2': 'hin',
        'name': 'Hindi',
        'nativeName': 'हिन्दी'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Índia',
      'pt': 'Índia',
      'nl': 'India',
      'hr': 'Indija',
      'fa': 'هند',
      'de': 'Indien',
      'es': 'India',
      'fr': 'Inde',
      'ja': 'インド',
      'it': 'India'
    },
    'flag': 'https://restcountries.eu/data/ind.svg',
    'name': 'India',
    'alpha2Code': 'IN',
    'capital': 'New Delhi',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 1295210000,
    'borders': [
      'AFG',
      'BGD',
      'BTN',
      'MMR',
      'CHN',
      'NPL',
      'PAK',
      'LKA'
    ],
    'nativeName': 'भारत'
  },
  {
    'currencies': [
      {
        'code': 'IDR',
        'name': 'Indonesian rupiah',
        'symbol': 'Rp'
      }
    ],
    'languages': [
      {
        'iso639_1': 'id',
        'iso639_2': 'ind',
        'name': 'Indonesian',
        'nativeName': 'Bahasa Indonesia'
      }
    ],
    'translations': {
      'br': 'Indonésia',
      'pt': 'Indonésia',
      'nl': 'Indonesië',
      'hr': 'Indonezija',
      'fa': 'اندونزی',
      'de': 'Indonesien',
      'es': 'Indonesia',
      'fr': 'Indonésie',
      'ja': 'インドネシア',
      'it': 'Indonesia'
    },
    'flag': 'https://restcountries.eu/data/idn.svg',
    'name': 'Indonesia',
    'alpha2Code': 'ID',
    'capital': 'Jakarta',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 258705000,
    'borders': [
      'TLS',
      'MYS',
      'PNG'
    ],
    'nativeName': 'Indonesia'
  },
  {
    'currencies': [
      {
        'code': 'XOF',
        'name': 'West African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Costa do Marfim',
      'pt': 'Costa do Marfim',
      'nl': 'Ivoorkust',
      'hr': 'Obala Bjelokosti',
      'fa': 'ساحل عاج',
      'de': 'Elfenbeinküste',
      'es': 'Costa de Marfil',
      'fr': "Côte d'Ivoire",
      'ja': 'コートジボワール',
      'it': "Costa D'Avorio"
    },
    'flag': 'https://restcountries.eu/data/civ.svg',
    'name': "Côte d'Ivoire",
    'alpha2Code': 'CI',
    'capital': 'Yamoussoukro',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 22671331,
    'borders': [
      'BFA',
      'GHA',
      'GIN',
      'LBR',
      'MLI'
    ],
    'nativeName': "Côte d'Ivoire"
  },
  {
    'currencies': [
      {
        'code': 'IRR',
        'name': 'Iranian rial',
        'symbol': '﷼'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fa',
        'iso639_2': 'fas',
        'name': 'Persian (Farsi)',
        'nativeName': 'فارسی'
      }
    ],
    'translations': {
      'br': 'Irã',
      'pt': 'Irão',
      'nl': 'Iran',
      'hr': 'Iran',
      'fa': 'ایران',
      'de': 'Iran',
      'es': 'Iran',
      'fr': 'Iran',
      'ja': 'イラン・イスラム共和国'
    },
    'flag': 'https://restcountries.eu/data/irn.svg',
    'name': 'Iran (Islamic Republic of)',
    'alpha2Code': 'IR',
    'capital': 'Tehran',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 79369900,
    'borders': [
      'AFG',
      'ARM',
      'AZE',
      'IRQ',
      'PAK',
      'TUR',
      'TKM'
    ],
    'nativeName': 'ایران'
  },
  {
    'currencies': [
      {
        'code': 'IQD',
        'name': 'Iraqi dinar',
        'symbol': 'ع.د'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      },
      {
        'iso639_1': 'ku',
        'iso639_2': 'kur',
        'name': 'Kurdish',
        'nativeName': 'Kurdî'
      }
    ],
    'translations': {
      'br': 'Iraque',
      'pt': 'Iraque',
      'nl': 'Irak',
      'hr': 'Irak',
      'fa': 'عراق',
      'de': 'Irak',
      'es': 'Irak',
      'fr': 'Irak',
      'ja': 'イラク',
      'it': 'Iraq'
    },
    'flag': 'https://restcountries.eu/data/irq.svg',
    'name': 'Iraq',
    'alpha2Code': 'IQ',
    'capital': 'Baghdad',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 37883543,
    'borders': [
      'IRN',
      'JOR',
      'KWT',
      'SAU',
      'SYR',
      'TUR'
    ],
    'nativeName': 'العراق'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ga',
        'iso639_2': 'gle',
        'name': 'Irish',
        'nativeName': 'Gaeilge'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Irlanda',
      'pt': 'Irlanda',
      'nl': 'Ierland',
      'hr': 'Irska',
      'fa': 'ایرلند',
      'de': 'Irland',
      'es': 'Irlanda',
      'fr': 'Irlande',
      'ja': 'アイルランド',
      'it': 'Irlanda'
    },
    'flag': 'https://restcountries.eu/data/irl.svg',
    'name': 'Ireland',
    'alpha2Code': 'IE',
    'capital': 'Dublin',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 6378000,
    'borders': [
      'GBR'
    ],
    'nativeName': 'Éire'
  },
  {
    'currencies': [
      {
        'code': 'GBP',
        'name': 'British pound',
        'symbol': '£'
      },
      {
        'code': 'IMP[G]',
        'name': 'Manx pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'gv',
        'iso639_2': 'glv',
        'name': 'Manx',
        'nativeName': 'Gaelg'
      }
    ],
    'translations': {
      'br': 'Ilha de Man',
      'pt': 'Ilha de Man',
      'nl': 'Isle of Man',
      'hr': 'Otok Man',
      'fa': 'جزیره من',
      'de': 'Insel Man',
      'es': 'Isla de Man',
      'fr': 'Île de Man',
      'ja': 'マン島',
      'it': 'Isola di Man'
    },
    'flag': 'https://restcountries.eu/data/imn.svg',
    'name': 'Isle of Man',
    'alpha2Code': 'IM',
    'capital': 'Douglas',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 84497,
    'borders': [],
    'nativeName': 'Isle of Man'
  },
  {
    'currencies': [
      {
        'code': 'ILS',
        'name': 'Israeli new shekel',
        'symbol': '₪'
      }
    ],
    'languages': [
      {
        'iso639_1': 'he',
        'iso639_2': 'heb',
        'name': 'Hebrew (modern)',
        'nativeName': 'עברית'
      },
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Israel',
      'pt': 'Israel',
      'nl': 'Israël',
      'hr': 'Izrael',
      'fa': 'اسرائیل',
      'de': 'Israel',
      'es': 'Israel',
      'fr': 'Israël',
      'ja': 'イスラエル',
      'it': 'Israele'
    },
    'flag': 'https://restcountries.eu/data/isr.svg',
    'name': 'Israel',
    'alpha2Code': 'IL',
    'capital': 'Jerusalem',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 8527400,
    'borders': [
      'EGY',
      'JOR',
      'LBN',
      'SYR'
    ],
    'nativeName': 'יִשְׂרָאֵל'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'it',
        'iso639_2': 'ita',
        'name': 'Italian',
        'nativeName': 'Italiano'
      }
    ],
    'translations': {
      'br': 'Itália',
      'pt': 'Itália',
      'nl': 'Italië',
      'hr': 'Italija',
      'fa': 'ایتالیا',
      'de': 'Italien',
      'es': 'Italia',
      'fr': 'Italie',
      'ja': 'イタリア',
      'it': 'Italia'
    },
    'flag': 'https://restcountries.eu/data/ita.svg',
    'name': 'Italy',
    'alpha2Code': 'IT',
    'capital': 'Rome',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 60665551,
    'borders': [
      'AUT',
      'FRA',
      'SMR',
      'SVN',
      'CHE',
      'VAT'
    ],
    'nativeName': 'Italia'
  },
  {
    'currencies': [
      {
        'code': 'JMD',
        'name': 'Jamaican dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Jamaica',
      'pt': 'Jamaica',
      'nl': 'Jamaica',
      'hr': 'Jamajka',
      'fa': 'جامائیکا',
      'de': 'Jamaika',
      'es': 'Jamaica',
      'fr': 'Jamaïque',
      'ja': 'ジャマイカ',
      'it': 'Giamaica'
    },
    'flag': 'https://restcountries.eu/data/jam.svg',
    'name': 'Jamaica',
    'alpha2Code': 'JM',
    'capital': 'Kingston',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 2723246,
    'borders': [],
    'nativeName': 'Jamaica'
  },
  {
    'currencies': [
      {
        'code': 'JPY',
        'name': 'Japanese yen',
        'symbol': '¥'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ja',
        'iso639_2': 'jpn',
        'name': 'Japanese',
        'nativeName': '日本語 (にほんご)'
      }
    ],
    'translations': {
      'br': 'Japão',
      'pt': 'Japão',
      'nl': 'Japan',
      'hr': 'Japan',
      'fa': 'ژاپن',
      'de': 'Japan',
      'es': 'Japón',
      'fr': 'Japon',
      'ja': '日本',
      'it': 'Giappone'
    },
    'flag': 'https://restcountries.eu/data/jpn.svg',
    'name': 'Japan',
    'alpha2Code': 'JP',
    'capital': 'Tokyo',
    'region': 'Asia',
    'subregion': 'Eastern Asia',
    'population': 126960000,
    'borders': [],
    'nativeName': '日本'
  },
  {
    'currencies': [
      {
        'code': 'GBP',
        'name': 'British pound',
        'symbol': '£'
      },
      {
        'code': 'JEP[G]',
        'name': 'Jersey pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Jersey',
      'pt': 'Jersey',
      'nl': 'Jersey',
      'hr': 'Jersey',
      'fa': 'جرزی',
      'de': 'Jersey',
      'es': 'Jersey',
      'fr': 'Jersey',
      'ja': 'ジャージー',
      'it': 'Isola di Jersey'
    },
    'flag': 'https://restcountries.eu/data/jey.svg',
    'name': 'Jersey',
    'alpha2Code': 'JE',
    'capital': 'Saint Helier',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 100800,
    'borders': [],
    'nativeName': 'Jersey'
  },
  {
    'currencies': [
      {
        'code': 'JOD',
        'name': 'Jordanian dinar',
        'symbol': 'د.ا'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Jordânia',
      'pt': 'Jordânia',
      'nl': 'Jordanië',
      'hr': 'Jordan',
      'fa': 'اردن',
      'de': 'Jordanien',
      'es': 'Jordania',
      'fr': 'Jordanie',
      'ja': 'ヨルダン',
      'it': 'Giordania'
    },
    'flag': 'https://restcountries.eu/data/jor.svg',
    'name': 'Jordan',
    'alpha2Code': 'JO',
    'capital': 'Amman',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 9531712,
    'borders': [
      'IRQ',
      'ISR',
      'SAU',
      'SYR'
    ],
    'nativeName': 'الأردن'
  },
  {
    'currencies': [
      {
        'code': 'KZT',
        'name': 'Kazakhstani tenge'
      }
    ],
    'languages': [
      {
        'iso639_1': 'kk',
        'iso639_2': 'kaz',
        'name': 'Kazakh',
        'nativeName': 'қазақ тілі'
      },
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Cazaquistão',
      'pt': 'Cazaquistão',
      'nl': 'Kazachstan',
      'hr': 'Kazahstan',
      'fa': 'قزاقستان',
      'de': 'Kasachstan',
      'es': 'Kazajistán',
      'fr': 'Kazakhstan',
      'ja': 'カザフスタン',
      'it': 'Kazakistan'
    },
    'flag': 'https://restcountries.eu/data/kaz.svg',
    'name': 'Kazakhstan',
    'alpha2Code': 'KZ',
    'capital': 'Astana',
    'region': 'Asia',
    'subregion': 'Central Asia',
    'population': 17753200,
    'borders': [
      'CHN',
      'KGZ',
      'RUS',
      'TKM',
      'UZB'
    ],
    'nativeName': 'Қазақстан'
  },
  {
    'currencies': [
      {
        'code': 'KES',
        'name': 'Kenyan shilling',
        'symbol': 'Sh'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'sw',
        'iso639_2': 'swa',
        'name': 'Swahili',
        'nativeName': 'Kiswahili'
      }
    ],
    'translations': {
      'br': 'Quênia',
      'pt': 'Quénia',
      'nl': 'Kenia',
      'hr': 'Kenija',
      'fa': 'کنیا',
      'de': 'Kenia',
      'es': 'Kenia',
      'fr': 'Kenya',
      'ja': 'ケニア',
      'it': 'Kenya'
    },
    'flag': 'https://restcountries.eu/data/ken.svg',
    'name': 'Kenya',
    'alpha2Code': 'KE',
    'capital': 'Nairobi',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 47251000,
    'borders': [
      'ETH',
      'SOM',
      'SSD',
      'TZA',
      'UGA'
    ],
    'nativeName': 'Kenya'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      },
      {
        'code': '(none)',
        'name': 'Kiribati dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Kiribati',
      'pt': 'Quiribáti',
      'nl': 'Kiribati',
      'hr': 'Kiribati',
      'fa': 'کیریباتی',
      'de': 'Kiribati',
      'es': 'Kiribati',
      'fr': 'Kiribati',
      'ja': 'キリバス',
      'it': 'Kiribati'
    },
    'flag': 'https://restcountries.eu/data/kir.svg',
    'name': 'Kiribati',
    'alpha2Code': 'KI',
    'capital': 'South Tarawa',
    'region': 'Oceania',
    'subregion': 'Micronesia',
    'population': 113400,
    'borders': [],
    'nativeName': 'Kiribati'
  },
  {
    'currencies': [
      {
        'code': 'KWD',
        'name': 'Kuwaiti dinar',
        'symbol': 'د.ك'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Kuwait',
      'pt': 'Kuwait',
      'nl': 'Koeweit',
      'hr': 'Kuvajt',
      'fa': 'کویت',
      'de': 'Kuwait',
      'es': 'Kuwait',
      'fr': 'Koweït',
      'ja': 'クウェート',
      'it': 'Kuwait'
    },
    'flag': 'https://restcountries.eu/data/kwt.svg',
    'name': 'Kuwait',
    'alpha2Code': 'KW',
    'capital': 'Kuwait City',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 4183658,
    'borders': [
      'IRN',
      'SAU'
    ],
    'nativeName': 'الكويت'
  },
  {
    'currencies': [
      {
        'code': 'KGS',
        'name': 'Kyrgyzstani som',
        'symbol': 'с'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ky',
        'iso639_2': 'kir',
        'name': 'Kyrgyz',
        'nativeName': 'Кыргызча'
      },
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Quirguistão',
      'pt': 'Quirguizistão',
      'nl': 'Kirgizië',
      'hr': 'Kirgistan',
      'fa': 'قرقیزستان',
      'de': 'Kirgisistan',
      'es': 'Kirguizistán',
      'fr': 'Kirghizistan',
      'ja': 'キルギス',
      'it': 'Kirghizistan'
    },
    'flag': 'https://restcountries.eu/data/kgz.svg',
    'name': 'Kyrgyzstan',
    'alpha2Code': 'KG',
    'capital': 'Bishkek',
    'region': 'Asia',
    'subregion': 'Central Asia',
    'population': 6047800,
    'borders': [
      'CHN',
      'KAZ',
      'TJK',
      'UZB'
    ],
    'nativeName': 'Кыргызстан'
  },
  {
    'currencies': [
      {
        'code': 'LAK',
        'name': 'Lao kip',
        'symbol': '₭'
      }
    ],
    'languages': [
      {
        'iso639_1': 'lo',
        'iso639_2': 'lao',
        'name': 'Lao',
        'nativeName': 'ພາສາລາວ'
      }
    ],
    'translations': {
      'br': 'Laos',
      'pt': 'Laos',
      'nl': 'Laos',
      'hr': 'Laos',
      'fa': 'لائوس',
      'de': 'Laos',
      'es': 'Laos',
      'fr': 'Laos',
      'ja': 'ラオス人民民主共和国',
      'it': 'Laos'
    },
    'flag': 'https://restcountries.eu/data/lao.svg',
    'name': "Lao People's Democratic Republic",
    'alpha2Code': 'LA',
    'capital': 'Vientiane',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 6492400,
    'borders': [
      'MMR',
      'KHM',
      'CHN',
      'THA',
      'VNM'
    ],
    'nativeName': 'ສປປລາວ'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'lv',
        'iso639_2': 'lav',
        'name': 'Latvian',
        'nativeName': 'latviešu valoda'
      }
    ],
    'translations': {
      'br': 'Letônia',
      'pt': 'Letónia',
      'nl': 'Letland',
      'hr': 'Latvija',
      'fa': 'لتونی',
      'de': 'Lettland',
      'es': 'Letonia',
      'fr': 'Lettonie',
      'ja': 'ラトビア',
      'it': 'Lettonia'
    },
    'flag': 'https://restcountries.eu/data/lva.svg',
    'name': 'Latvia',
    'alpha2Code': 'LV',
    'capital': 'Riga',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 1961600,
    'borders': [
      'BLR',
      'EST',
      'LTU',
      'RUS'
    ],
    'nativeName': 'Latvija'
  },
  {
    'currencies': [
      {
        'code': 'LBP',
        'name': 'Lebanese pound',
        'symbol': 'ل.ل'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Líbano',
      'pt': 'Líbano',
      'nl': 'Libanon',
      'hr': 'Libanon',
      'fa': 'لبنان',
      'de': 'Libanon',
      'es': 'Líbano',
      'fr': 'Liban',
      'ja': 'レバノン',
      'it': 'Libano'
    },
    'flag': 'https://restcountries.eu/data/lbn.svg',
    'name': 'Lebanon',
    'alpha2Code': 'LB',
    'capital': 'Beirut',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 5988000,
    'borders': [
      'ISR',
      'SYR'
    ],
    'nativeName': 'لبنان'
  },
  {
    'currencies': [
      {
        'code': 'LSL',
        'name': 'Lesotho loti',
        'symbol': 'L'
      },
      {
        'code': 'ZAR',
        'name': 'South African rand',
        'symbol': 'R'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'st',
        'iso639_2': 'sot',
        'name': 'Southern Sotho',
        'nativeName': 'Sesotho'
      }
    ],
    'translations': {
      'br': 'Lesoto',
      'pt': 'Lesoto',
      'nl': 'Lesotho',
      'hr': 'Lesoto',
      'fa': 'لسوتو',
      'de': 'Lesotho',
      'es': 'Lesotho',
      'fr': 'Lesotho',
      'ja': 'レソト',
      'it': 'Lesotho'
    },
    'flag': 'https://restcountries.eu/data/lso.svg',
    'name': 'Lesotho',
    'alpha2Code': 'LS',
    'capital': 'Maseru',
    'region': 'Africa',
    'subregion': 'Southern Africa',
    'population': 1894194,
    'borders': [
      'ZAF'
    ],
    'nativeName': 'Lesotho'
  },
  {
    'currencies': [
      {
        'code': 'LRD',
        'name': 'Liberian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Libéria',
      'pt': 'Libéria',
      'nl': 'Liberia',
      'hr': 'Liberija',
      'fa': 'لیبریا',
      'de': 'Liberia',
      'es': 'Liberia',
      'fr': 'Liberia',
      'ja': 'リベリア',
      'it': 'Liberia'
    },
    'flag': 'https://restcountries.eu/data/lbr.svg',
    'name': 'Liberia',
    'alpha2Code': 'LR',
    'capital': 'Monrovia',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 4615000,
    'borders': [
      'GIN',
      'CIV',
      'SLE'
    ],
    'nativeName': 'Liberia'
  },
  {
    'currencies': [
      {
        'code': 'LYD',
        'name': 'Libyan dinar',
        'symbol': 'ل.د'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Líbia',
      'pt': 'Líbia',
      'nl': 'Libië',
      'hr': 'Libija',
      'fa': 'لیبی',
      'de': 'Libyen',
      'es': 'Libia',
      'fr': 'Libye',
      'ja': 'リビア',
      'it': 'Libia'
    },
    'flag': 'https://restcountries.eu/data/lby.svg',
    'name': 'Libya',
    'alpha2Code': 'LY',
    'capital': 'Tripoli',
    'region': 'Africa',
    'subregion': 'Northern Africa',
    'population': 6385000,
    'borders': [
      'DZA',
      'TCD',
      'EGY',
      'NER',
      'SDN',
      'TUN'
    ],
    'nativeName': '\u200fليبيا'
  },
  {
    'currencies': [
      {
        'code': 'CHF',
        'name': 'Swiss franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'de',
        'iso639_2': 'deu',
        'name': 'German',
        'nativeName': 'Deutsch'
      }
    ],
    'translations': {
      'br': 'Liechtenstein',
      'pt': 'Listenstaine',
      'nl': 'Liechtenstein',
      'hr': 'Lihtenštajn',
      'fa': 'لیختن\u200cاشتاین',
      'de': 'Liechtenstein',
      'es': 'Liechtenstein',
      'fr': 'Liechtenstein',
      'ja': 'リヒテンシュタイン',
      'it': 'Liechtenstein'
    },
    'flag': 'https://restcountries.eu/data/lie.svg',
    'name': 'Liechtenstein',
    'alpha2Code': 'LI',
    'capital': 'Vaduz',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 37623,
    'borders': [
      'AUT',
      'CHE'
    ],
    'nativeName': 'Liechtenstein'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'lt',
        'iso639_2': 'lit',
        'name': 'Lithuanian',
        'nativeName': 'lietuvių kalba'
      }
    ],
    'translations': {
      'br': 'Lituânia',
      'pt': 'Lituânia',
      'nl': 'Litouwen',
      'hr': 'Litva',
      'fa': 'لیتوانی',
      'de': 'Litauen',
      'es': 'Lituania',
      'fr': 'Lituanie',
      'ja': 'リトアニア',
      'it': 'Lituania'
    },
    'flag': 'https://restcountries.eu/data/ltu.svg',
    'name': 'Lithuania',
    'alpha2Code': 'LT',
    'capital': 'Vilnius',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 2872294,
    'borders': [
      'BLR',
      'LVA',
      'POL',
      'RUS'
    ],
    'nativeName': 'Lietuva'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'de',
        'iso639_2': 'deu',
        'name': 'German',
        'nativeName': 'Deutsch'
      },
      {
        'iso639_1': 'lb',
        'iso639_2': 'ltz',
        'name': 'Luxembourgish',
        'nativeName': 'Lëtzebuergesch'
      }
    ],
    'translations': {
      'br': 'Luxemburgo',
      'pt': 'Luxemburgo',
      'nl': 'Luxemburg',
      'hr': 'Luksemburg',
      'fa': 'لوکزامبورگ',
      'de': 'Luxemburg',
      'es': 'Luxemburgo',
      'fr': 'Luxembourg',
      'ja': 'ルクセンブルク',
      'it': 'Lussemburgo'
    },
    'flag': 'https://restcountries.eu/data/lux.svg',
    'name': 'Luxembourg',
    'alpha2Code': 'LU',
    'capital': 'Luxembourg',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 576200,
    'borders': [
      'BEL',
      'FRA',
      'DEU'
    ],
    'nativeName': 'Luxembourg'
  },
  {
    'currencies': [
      {
        'code': 'MOP',
        'name': 'Macanese pataca',
        'symbol': 'P'
      }
    ],
    'languages': [
      {
        'iso639_1': 'zh',
        'iso639_2': 'zho',
        'name': 'Chinese',
        'nativeName': '中文 (Zhōngwén)'
      },
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'Macau',
      'pt': 'Macau',
      'nl': 'Macao',
      'hr': 'Makao',
      'fa': 'مکائو',
      'de': 'Macao',
      'es': 'Macao',
      'fr': 'Macao',
      'ja': 'マカオ',
      'it': 'Macao'
    },
    'flag': 'https://restcountries.eu/data/mac.svg',
    'name': 'Macao',
    'alpha2Code': 'MO',
    'capital': '',
    'region': 'Asia',
    'subregion': 'Eastern Asia',
    'population': 649100,
    'borders': [
      'CHN'
    ],
    'nativeName': '澳門'
  },
  {
    'currencies': [
      {
        'code': 'MKD',
        'name': 'Macedonian denar',
        'symbol': 'ден'
      }
    ],
    'languages': [
      {
        'iso639_1': 'mk',
        'iso639_2': 'mkd',
        'name': 'Macedonian',
        'nativeName': 'македонски јазик'
      }
    ],
    'translations': {
      'br': 'Macedônia',
      'pt': 'Macedónia',
      'nl': 'Macedonië',
      'hr': 'Makedonija',
      'fa': '',
      'de': 'Mazedonien',
      'es': 'Macedonia',
      'fr': 'Macédoine',
      'ja': 'マケドニア旧ユーゴスラビア共和国',
      'it': 'Macedonia'
    },
    'flag': 'https://restcountries.eu/data/mkd.svg',
    'name': 'Macedonia (the former Yugoslav Republic of)',
    'alpha2Code': 'MK',
    'capital': 'Skopje',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 2058539,
    'borders': [
      'ALB',
      'BGR',
      'GRC',
      'KOS',
      'SRB'
    ],
    'nativeName': 'Македонија'
  },
  {
    'currencies': [
      {
        'code': 'MGA',
        'name': 'Malagasy ariary',
        'symbol': 'Ar'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'mg',
        'iso639_2': 'mlg',
        'name': 'Malagasy',
        'nativeName': 'fiteny malagasy'
      }
    ],
    'translations': {
      'br': 'Madagascar',
      'pt': 'Madagáscar',
      'nl': 'Madagaskar',
      'hr': 'Madagaskar',
      'fa': 'ماداگاسکار',
      'de': 'Madagaskar',
      'es': 'Madagascar',
      'fr': 'Madagascar',
      'ja': 'マダガスカル',
      'it': 'Madagascar'
    },
    'flag': 'https://restcountries.eu/data/mdg.svg',
    'name': 'Madagascar',
    'alpha2Code': 'MG',
    'capital': 'Antananarivo',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 22434363,
    'borders': [],
    'nativeName': 'Madagasikara'
  },
  {
    'currencies': [
      {
        'code': 'MWK',
        'name': 'Malawian kwacha',
        'symbol': 'MK'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'ny',
        'iso639_2': 'nya',
        'name': 'Chichewa',
        'nativeName': 'chiCheŵa'
      }
    ],
    'translations': {
      'br': 'Malawi',
      'pt': 'Malávi',
      'nl': 'Malawi',
      'hr': 'Malavi',
      'fa': 'مالاوی',
      'de': 'Malawi',
      'es': 'Malawi',
      'fr': 'Malawi',
      'ja': 'マラウイ',
      'it': 'Malawi'
    },
    'flag': 'https://restcountries.eu/data/mwi.svg',
    'name': 'Malawi',
    'alpha2Code': 'MW',
    'capital': 'Lilongwe',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 16832910,
    'borders': [
      'MOZ',
      'TZA',
      'ZMB'
    ],
    'nativeName': 'Malawi'
  },
  {
    'currencies': [
      {
        'code': 'MYR',
        'name': 'Malaysian ringgit',
        'symbol': 'RM'
      }
    ],
    'languages': [
      {
        'iso639_2': 'zsm',
        'name': 'Malaysian',
        'nativeName': 'بهاس مليسيا'
      }
    ],
    'translations': {
      'br': 'Malásia',
      'pt': 'Malásia',
      'nl': 'Maleisië',
      'hr': 'Malezija',
      'fa': 'مالزی',
      'de': 'Malaysia',
      'es': 'Malasia',
      'fr': 'Malaisie',
      'ja': 'マレーシア',
      'it': 'Malesia'
    },
    'flag': 'https://restcountries.eu/data/mys.svg',
    'name': 'Malaysia',
    'alpha2Code': 'MY',
    'capital': 'Kuala Lumpur',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 31405416,
    'borders': [
      'BRN',
      'IDN',
      'THA'
    ],
    'nativeName': 'Malaysia'
  },
  {
    'currencies': [
      {
        'code': 'MVR',
        'name': 'Maldivian rufiyaa',
        'symbol': '.ރ'
      }
    ],
    'languages': [
      {
        'iso639_1': 'dv',
        'iso639_2': 'div',
        'name': 'Divehi',
        'nativeName': 'ދިވެހި'
      }
    ],
    'translations': {
      'br': 'Maldivas',
      'pt': 'Maldivas',
      'nl': 'Maldiven',
      'hr': 'Maldivi',
      'fa': 'مالدیو',
      'de': 'Malediven',
      'es': 'Maldivas',
      'fr': 'Maldives',
      'ja': 'モルディブ',
      'it': 'Maldive'
    },
    'flag': 'https://restcountries.eu/data/mdv.svg',
    'name': 'Maldives',
    'alpha2Code': 'MV',
    'capital': 'Malé',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 344023,
    'borders': [],
    'nativeName': 'Maldives'
  },
  {
    'currencies': [
      {
        'code': 'XOF',
        'name': 'West African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Mali',
      'pt': 'Mali',
      'nl': 'Mali',
      'hr': 'Mali',
      'fa': 'مالی',
      'de': 'Mali',
      'es': 'Mali',
      'fr': 'Mali',
      'ja': 'マリ',
      'it': 'Mali'
    },
    'flag': 'https://restcountries.eu/data/mli.svg',
    'name': 'Mali',
    'alpha2Code': 'ML',
    'capital': 'Bamako',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 18135000,
    'borders': [
      'DZA',
      'BFA',
      'GIN',
      'CIV',
      'MRT',
      'NER',
      'SEN'
    ],
    'nativeName': 'Mali'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'mt',
        'iso639_2': 'mlt',
        'name': 'Maltese',
        'nativeName': 'Malti'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Malta',
      'pt': 'Malta',
      'nl': 'Malta',
      'hr': 'Malta',
      'fa': 'مالت',
      'de': 'Malta',
      'es': 'Malta',
      'fr': 'Malte',
      'ja': 'マルタ',
      'it': 'Malta'
    },
    'flag': 'https://restcountries.eu/data/mlt.svg',
    'name': 'Malta',
    'alpha2Code': 'MT',
    'capital': 'Valletta',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 425384,
    'borders': [],
    'nativeName': 'Malta'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'mh',
        'iso639_2': 'mah',
        'name': 'Marshallese',
        'nativeName': 'Kajin M̧ajeļ'
      }
    ],
    'translations': {
      'br': 'Ilhas Marshall',
      'pt': 'Ilhas Marshall',
      'nl': 'Marshalleilanden',
      'hr': 'Maršalovi Otoci',
      'fa': 'جزایر مارشال',
      'de': 'Marshallinseln',
      'es': 'Islas Marshall',
      'fr': 'Îles Marshall',
      'ja': 'マーシャル諸島',
      'it': 'Isole Marshall'
    },
    'flag': 'https://restcountries.eu/data/mhl.svg',
    'name': 'Marshall Islands',
    'alpha2Code': 'MH',
    'capital': 'Majuro',
    'region': 'Oceania',
    'subregion': 'Micronesia',
    'population': 54880,
    'borders': [],
    'nativeName': 'M̧ajeļ'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Martinica',
      'pt': 'Martinica',
      'nl': 'Martinique',
      'hr': 'Martinique',
      'fa': 'مونتسرات',
      'de': 'Martinique',
      'es': 'Martinica',
      'fr': 'Martinique',
      'ja': 'マルティニーク',
      'it': 'Martinica'
    },
    'flag': 'https://restcountries.eu/data/mtq.svg',
    'name': 'Martinique',
    'alpha2Code': 'MQ',
    'capital': 'Fort-de-France',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 378243,
    'borders': [],
    'nativeName': 'Martinique'
  },
  {
    'currencies': [
      {
        'code': 'MRO',
        'name': 'Mauritanian ouguiya',
        'symbol': 'UM'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Mauritânia',
      'pt': 'Mauritânia',
      'nl': 'Mauritanië',
      'hr': 'Mauritanija',
      'fa': 'موریتانی',
      'de': 'Mauretanien',
      'es': 'Mauritania',
      'fr': 'Mauritanie',
      'ja': 'モーリタニア',
      'it': 'Mauritania'
    },
    'flag': 'https://restcountries.eu/data/mrt.svg',
    'name': 'Mauritania',
    'alpha2Code': 'MR',
    'capital': 'Nouakchott',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 3718678,
    'borders': [
      'DZA',
      'MLI',
      'SEN',
      'ESH'
    ],
    'nativeName': 'موريتانيا'
  },
  {
    'currencies': [
      {
        'code': 'MUR',
        'name': 'Mauritian rupee',
        'symbol': '₨'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Maurício',
      'pt': 'Maurícia',
      'nl': 'Mauritius',
      'hr': 'Mauricijus',
      'fa': 'موریس',
      'de': 'Mauritius',
      'es': 'Mauricio',
      'fr': 'Île Maurice',
      'ja': 'モーリシャス',
      'it': 'Mauritius'
    },
    'flag': 'https://restcountries.eu/data/mus.svg',
    'name': 'Mauritius',
    'alpha2Code': 'MU',
    'capital': 'Port Louis',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 1262879,
    'borders': [],
    'nativeName': 'Maurice'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Mayotte',
      'pt': 'Mayotte',
      'nl': 'Mayotte',
      'hr': 'Mayotte',
      'fa': 'مایوت',
      'de': 'Mayotte',
      'es': 'Mayotte',
      'fr': 'Mayotte',
      'ja': 'マヨット',
      'it': 'Mayotte'
    },
    'flag': 'https://restcountries.eu/data/myt.svg',
    'name': 'Mayotte',
    'alpha2Code': 'YT',
    'capital': 'Mamoudzou',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 226915,
    'borders': [],
    'nativeName': 'Mayotte'
  },
  {
    'currencies': [
      {
        'code': 'MXN',
        'name': 'Mexican peso',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'México',
      'pt': 'México',
      'nl': 'Mexico',
      'hr': 'Meksiko',
      'fa': 'مکزیک',
      'de': 'Mexiko',
      'es': 'México',
      'fr': 'Mexique',
      'ja': 'メキシコ',
      'it': 'Messico'
    },
    'flag': 'https://restcountries.eu/data/mex.svg',
    'name': 'Mexico',
    'alpha2Code': 'MX',
    'capital': 'Mexico City',
    'region': 'Americas',
    'subregion': 'Central America',
    'population': 122273473,
    'borders': [
      'BLZ',
      'GTM',
      'USA'
    ],
    'nativeName': 'México'
  },
  {
    'currencies': [
      {
        'name': '[D]',
        'symbol': '$'
      },
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Micronésia',
      'pt': 'Micronésia',
      'nl': 'Micronesië',
      'hr': 'Mikronezija',
      'fa': 'ایالات فدرال میکرونزی',
      'de': 'Mikronesien',
      'es': 'Micronesia',
      'fr': 'Micronésie',
      'ja': 'ミクロネシア連邦',
      'it': 'Micronesia'
    },
    'flag': 'https://restcountries.eu/data/fsm.svg',
    'name': 'Micronesia (Federated States of)',
    'alpha2Code': 'FM',
    'capital': 'Palikir',
    'region': 'Oceania',
    'subregion': 'Micronesia',
    'population': 102800,
    'borders': [],
    'nativeName': 'Micronesia'
  },
  {
    'currencies': [
      {
        'code': 'MDL',
        'name': 'Moldovan leu',
        'symbol': 'L'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ro',
        'iso639_2': 'ron',
        'name': 'Romanian',
        'nativeName': 'Română'
      }
    ],
    'translations': {
      'br': 'Moldávia',
      'pt': 'Moldávia',
      'nl': 'Moldavië',
      'hr': 'Moldova',
      'fa': 'مولداوی',
      'de': 'Moldawie',
      'es': 'Moldavia',
      'fr': 'Moldavie',
      'ja': 'モルドバ共和国',
      'it': 'Moldavia'
    },
    'flag': 'https://restcountries.eu/data/mda.svg',
    'name': 'Moldova (Republic of)',
    'alpha2Code': 'MD',
    'capital': 'Chișinău',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 3553100,
    'borders': [
      'ROU',
      'UKR'
    ],
    'nativeName': 'Moldova'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Mônaco',
      'pt': 'Mónaco',
      'nl': 'Monaco',
      'hr': 'Monako',
      'fa': 'موناکو',
      'de': 'Monaco',
      'es': 'Mónaco',
      'fr': 'Monaco',
      'ja': 'モナコ',
      'it': 'Principato di Monaco'
    },
    'flag': 'https://restcountries.eu/data/mco.svg',
    'name': 'Monaco',
    'alpha2Code': 'MC',
    'capital': 'Monaco',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 38400,
    'borders': [
      'FRA'
    ],
    'nativeName': 'Monaco'
  },
  {
    'currencies': [
      {
        'code': 'MNT',
        'name': 'Mongolian tögrög',
        'symbol': '₮'
      }
    ],
    'languages': [
      {
        'iso639_1': 'mn',
        'iso639_2': 'mon',
        'name': 'Mongolian',
        'nativeName': 'Монгол хэл'
      }
    ],
    'translations': {
      'br': 'Mongólia',
      'pt': 'Mongólia',
      'nl': 'Mongolië',
      'hr': 'Mongolija',
      'fa': 'مغولستان',
      'de': 'Mongolei',
      'es': 'Mongolia',
      'fr': 'Mongolie',
      'ja': 'モンゴル',
      'it': 'Mongolia'
    },
    'flag': 'https://restcountries.eu/data/mng.svg',
    'name': 'Mongolia',
    'alpha2Code': 'MN',
    'capital': 'Ulan Bator',
    'region': 'Asia',
    'subregion': 'Eastern Asia',
    'population': 3093100,
    'borders': [
      'CHN',
      'RUS'
    ],
    'nativeName': 'Монгол улс'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sr',
        'iso639_2': 'srp',
        'name': 'Serbian',
        'nativeName': 'српски језик'
      },
      {
        'iso639_1': 'bs',
        'iso639_2': 'bos',
        'name': 'Bosnian',
        'nativeName': 'bosanski jezik'
      },
      {
        'iso639_1': 'sq',
        'iso639_2': 'sqi',
        'name': 'Albanian',
        'nativeName': 'Shqip'
      },
      {
        'iso639_1': 'hr',
        'iso639_2': 'hrv',
        'name': 'Croatian',
        'nativeName': 'hrvatski jezik'
      }
    ],
    'translations': {
      'br': 'Montenegro',
      'pt': 'Montenegro',
      'nl': 'Montenegro',
      'hr': 'Crna Gora',
      'fa': 'مونته\u200cنگرو',
      'de': 'Montenegro',
      'es': 'Montenegro',
      'fr': 'Monténégro',
      'ja': 'モンテネグロ',
      'it': 'Montenegro'
    },
    'flag': 'https://restcountries.eu/data/mne.svg',
    'name': 'Montenegro',
    'alpha2Code': 'ME',
    'capital': 'Podgorica',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 621810,
    'borders': [
      'ALB',
      'BIH',
      'HRV',
      'KOS',
      'SRB'
    ],
    'nativeName': 'Црна Гора'
  },
  {
    'currencies': [
      {
        'code': 'XCD',
        'name': 'East Caribbean dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Montserrat',
      'pt': 'Monserrate',
      'nl': 'Montserrat',
      'hr': 'Montserrat',
      'fa': 'مایوت',
      'de': 'Montserrat',
      'es': 'Montserrat',
      'fr': 'Montserrat',
      'ja': 'モントセラト',
      'it': 'Montserrat'
    },
    'flag': 'https://restcountries.eu/data/msr.svg',
    'name': 'Montserrat',
    'alpha2Code': 'MS',
    'capital': 'Plymouth',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 4922,
    'borders': [],
    'nativeName': 'Montserrat'
  },
  {
    'currencies': [
      {
        'code': 'MAD',
        'name': 'Moroccan dirham',
        'symbol': 'د.م.'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Marrocos',
      'pt': 'Marrocos',
      'nl': 'Marokko',
      'hr': 'Maroko',
      'fa': 'مراکش',
      'de': 'Marokko',
      'es': 'Marruecos',
      'fr': 'Maroc',
      'ja': 'モロッコ',
      'it': 'Marocco'
    },
    'flag': 'https://restcountries.eu/data/mar.svg',
    'name': 'Morocco',
    'alpha2Code': 'MA',
    'capital': 'Rabat',
    'region': 'Africa',
    'subregion': 'Northern Africa',
    'population': 33337529,
    'borders': [
      'DZA',
      'ESH',
      'ESP'
    ],
    'nativeName': 'المغرب'
  },
  {
    'currencies': [
      {
        'code': 'MZN',
        'name': 'Mozambican metical',
        'symbol': 'MT'
      }
    ],
    'languages': [
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'Moçambique',
      'pt': 'Moçambique',
      'nl': 'Mozambique',
      'hr': 'Mozambik',
      'fa': 'موزامبیک',
      'de': 'Mosambik',
      'es': 'Mozambique',
      'fr': 'Mozambique',
      'ja': 'モザンビーク',
      'it': 'Mozambico'
    },
    'flag': 'https://restcountries.eu/data/moz.svg',
    'name': 'Mozambique',
    'alpha2Code': 'MZ',
    'capital': 'Maputo',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 26423700,
    'borders': [
      'MWI',
      'ZAF',
      'SWZ',
      'TZA',
      'ZMB',
      'ZWE'
    ],
    'nativeName': 'Moçambique'
  },
  {
    'currencies': [
      {
        'code': 'MMK',
        'name': 'Burmese kyat',
        'symbol': 'Ks'
      }
    ],
    'languages': [
      {
        'iso639_1': 'my',
        'iso639_2': 'mya',
        'name': 'Burmese',
        'nativeName': 'ဗမာစာ'
      }
    ],
    'translations': {
      'br': 'Myanmar',
      'pt': 'Myanmar',
      'nl': 'Myanmar',
      'hr': 'Mijanmar',
      'fa': 'میانمار',
      'de': 'Myanmar',
      'es': 'Myanmar',
      'fr': 'Myanmar',
      'ja': 'ミャンマー',
      'it': 'Birmania'
    },
    'flag': 'https://restcountries.eu/data/mmr.svg',
    'name': 'Myanmar',
    'alpha2Code': 'MM',
    'capital': 'Naypyidaw',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 51419420,
    'borders': [
      'BGD',
      'CHN',
      'IND',
      'LAO',
      'THA'
    ],
    'nativeName': 'Myanma'
  },
  {
    'currencies': [
      {
        'code': 'NAD',
        'name': 'Namibian dollar',
        'symbol': '$'
      },
      {
        'code': 'ZAR',
        'name': 'South African rand',
        'symbol': 'R'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'af',
        'iso639_2': 'afr',
        'name': 'Afrikaans',
        'nativeName': 'Afrikaans'
      }
    ],
    'translations': {
      'br': 'Namíbia',
      'pt': 'Namíbia',
      'nl': 'Namibië',
      'hr': 'Namibija',
      'fa': 'نامیبیا',
      'de': 'Namibia',
      'es': 'Namibia',
      'fr': 'Namibie',
      'ja': 'ナミビア',
      'it': 'Namibia'
    },
    'flag': 'https://restcountries.eu/data/nam.svg',
    'name': 'Namibia',
    'alpha2Code': 'NA',
    'capital': 'Windhoek',
    'region': 'Africa',
    'subregion': 'Southern Africa',
    'population': 2324388,
    'borders': [
      'AGO',
      'BWA',
      'ZAF',
      'ZMB'
    ],
    'nativeName': 'Namibia'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      },
      {
        'code': '(none)',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'na',
        'iso639_2': 'nau',
        'name': 'Nauruan',
        'nativeName': 'Dorerin Naoero'
      }
    ],
    'translations': {
      'br': 'Nauru',
      'pt': 'Nauru',
      'nl': 'Nauru',
      'hr': 'Nauru',
      'fa': 'نائورو',
      'de': 'Nauru',
      'es': 'Nauru',
      'fr': 'Nauru',
      'ja': 'ナウル',
      'it': 'Nauru'
    },
    'flag': 'https://restcountries.eu/data/nru.svg',
    'name': 'Nauru',
    'alpha2Code': 'NR',
    'capital': 'Yaren',
    'region': 'Oceania',
    'subregion': 'Micronesia',
    'population': 10084,
    'borders': [],
    'nativeName': 'Nauru'
  },
  {
    'currencies': [
      {
        'code': 'NPR',
        'name': 'Nepalese rupee',
        'symbol': '₨'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ne',
        'iso639_2': 'nep',
        'name': 'Nepali',
        'nativeName': 'नेपाली'
      }
    ],
    'translations': {
      'br': 'Nepal',
      'pt': 'Nepal',
      'nl': 'Nepal',
      'hr': 'Nepal',
      'fa': 'نپال',
      'de': 'Népal',
      'es': 'Nepal',
      'fr': 'Népal',
      'ja': 'ネパール',
      'it': 'Nepal'
    },
    'flag': 'https://restcountries.eu/data/npl.svg',
    'name': 'Nepal',
    'alpha2Code': 'NP',
    'capital': 'Kathmandu',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 28431500,
    'borders': [
      'CHN',
      'IND'
    ],
    'nativeName': 'नेपाल'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'nl',
        'iso639_2': 'nld',
        'name': 'Dutch',
        'nativeName': 'Nederlands'
      }
    ],
    'translations': {
      'br': 'Holanda',
      'pt': 'Países Baixos',
      'nl': 'Nederland',
      'hr': 'Nizozemska',
      'fa': 'پادشاهی هلند',
      'de': 'Niederlande',
      'es': 'Países Bajos',
      'fr': 'Pays-Bas',
      'ja': 'オランダ',
      'it': 'Paesi Bassi'
    },
    'flag': 'https://restcountries.eu/data/nld.svg',
    'name': 'Netherlands',
    'alpha2Code': 'NL',
    'capital': 'Amsterdam',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 17019800,
    'borders': [
      'BEL',
      'DEU'
    ],
    'nativeName': 'Nederland'
  },
  {
    'currencies': [
      {
        'code': 'XPF',
        'name': 'CFP franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Nova Caledônia',
      'pt': 'Nova Caledónia',
      'nl': 'Nieuw-Caledonië',
      'hr': 'Nova Kaledonija',
      'fa': 'کالدونیای جدید',
      'de': 'Neukaledonien',
      'es': 'Nueva Caledonia',
      'fr': 'Nouvelle-Calédonie',
      'ja': 'ニューカレドニア',
      'it': 'Nuova Caledonia'
    },
    'flag': 'https://restcountries.eu/data/ncl.svg',
    'name': 'New Caledonia',
    'alpha2Code': 'NC',
    'capital': 'Nouméa',
    'region': 'Oceania',
    'subregion': 'Melanesia',
    'population': 268767,
    'borders': [],
    'nativeName': 'Nouvelle-Calédonie'
  },
  {
    'currencies': [
      {
        'code': 'NZD',
        'name': 'New Zealand dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'mi',
        'iso639_2': 'mri',
        'name': 'Māori',
        'nativeName': 'te reo Māori'
      }
    ],
    'translations': {
      'br': 'Nova Zelândia',
      'pt': 'Nova Zelândia',
      'nl': 'Nieuw-Zeeland',
      'hr': 'Novi Zeland',
      'fa': 'نیوزیلند',
      'de': 'Neuseeland',
      'es': 'Nueva Zelanda',
      'fr': 'Nouvelle-Zélande',
      'ja': 'ニュージーランド',
      'it': 'Nuova Zelanda'
    },
    'flag': 'https://restcountries.eu/data/nzl.svg',
    'name': 'New Zealand',
    'alpha2Code': 'NZ',
    'capital': 'Wellington',
    'region': 'Oceania',
    'subregion': 'Australia and New Zealand',
    'population': 4697854,
    'borders': [],
    'nativeName': 'New Zealand'
  },
  {
    'currencies': [
      {
        'code': 'NIO',
        'name': 'Nicaraguan córdoba',
        'symbol': 'C$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Nicarágua',
      'pt': 'Nicarágua',
      'nl': 'Nicaragua',
      'hr': 'Nikaragva',
      'fa': 'نیکاراگوئه',
      'de': 'Nicaragua',
      'es': 'Nicaragua',
      'fr': 'Nicaragua',
      'ja': 'ニカラグア',
      'it': 'Nicaragua'
    },
    'flag': 'https://restcountries.eu/data/nic.svg',
    'name': 'Nicaragua',
    'alpha2Code': 'NI',
    'capital': 'Managua',
    'region': 'Americas',
    'subregion': 'Central America',
    'population': 6262703,
    'borders': [
      'CRI',
      'HND'
    ],
    'nativeName': 'Nicaragua'
  },
  {
    'currencies': [
      {
        'code': 'XOF',
        'name': 'West African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Níger',
      'pt': 'Níger',
      'nl': 'Niger',
      'hr': 'Niger',
      'fa': 'نیجر',
      'de': 'Niger',
      'es': 'Níger',
      'fr': 'Niger',
      'ja': 'ニジェール',
      'it': 'Niger'
    },
    'flag': 'https://restcountries.eu/data/ner.svg',
    'name': 'Niger',
    'alpha2Code': 'NE',
    'capital': 'Niamey',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 20715000,
    'borders': [
      'DZA',
      'BEN',
      'BFA',
      'TCD',
      'LBY',
      'MLI',
      'NGA'
    ],
    'nativeName': 'Niger'
  },
  {
    'currencies': [
      {
        'code': 'NGN',
        'name': 'Nigerian naira',
        'symbol': '₦'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Nigéria',
      'pt': 'Nigéria',
      'nl': 'Nigeria',
      'hr': 'Nigerija',
      'fa': 'نیجریه',
      'de': 'Nigeria',
      'es': 'Nigeria',
      'fr': 'Nigéria',
      'ja': 'ナイジェリア',
      'it': 'Nigeria'
    },
    'flag': 'https://restcountries.eu/data/nga.svg',
    'name': 'Nigeria',
    'alpha2Code': 'NG',
    'capital': 'Abuja',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 186988000,
    'borders': [
      'BEN',
      'CMR',
      'TCD',
      'NER'
    ],
    'nativeName': 'Nigeria'
  },
  {
    'currencies': [
      {
        'code': 'NZD',
        'name': 'New Zealand dollar',
        'symbol': '$'
      },
      {
        'code': '(none)',
        'name': 'Niue dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Niue',
      'pt': 'Niue',
      'nl': 'Niue',
      'hr': 'Niue',
      'fa': 'نیووی',
      'de': 'Niue',
      'es': 'Niue',
      'fr': 'Niue',
      'ja': 'ニウエ',
      'it': 'Niue'
    },
    'flag': 'https://restcountries.eu/data/niu.svg',
    'name': 'Niue',
    'alpha2Code': 'NU',
    'capital': 'Alofi',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 1470,
    'borders': [],
    'nativeName': 'Niuē'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilha Norfolk',
      'pt': 'Ilha Norfolk',
      'nl': 'Norfolkeiland',
      'hr': 'Otok Norfolk',
      'fa': 'جزیره نورفک',
      'de': 'Norfolkinsel',
      'es': 'Isla de Norfolk',
      'fr': 'Île de Norfolk',
      'ja': 'ノーフォーク島',
      'it': 'Isola Norfolk'
    },
    'flag': 'https://restcountries.eu/data/nfk.svg',
    'name': 'Norfolk Island',
    'alpha2Code': 'NF',
    'capital': 'Kingston',
    'region': 'Oceania',
    'subregion': 'Australia and New Zealand',
    'population': 2302,
    'borders': [],
    'nativeName': 'Norfolk Island'
  },
  {
    'currencies': [
      {
        'code': 'KPW',
        'name': 'North Korean won',
        'symbol': '₩'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ko',
        'iso639_2': 'kor',
        'name': 'Korean',
        'nativeName': '한국어'
      }
    ],
    'translations': {
      'br': 'Coreia do Norte',
      'pt': 'Coreia do Norte',
      'nl': 'Noord-Korea',
      'hr': 'Sjeverna Koreja',
      'fa': 'کره جنوبی',
      'de': 'Nordkorea',
      'es': 'Corea del Norte',
      'fr': 'Corée du Nord',
      'ja': '朝鮮民主主義人民共和国',
      'it': 'Corea del Nord'
    },
    'flag': 'https://restcountries.eu/data/prk.svg',
    'name': "Korea (Democratic People's Republic of)",
    'alpha2Code': 'KP',
    'capital': 'Pyongyang',
    'region': 'Asia',
    'subregion': 'Eastern Asia',
    'population': 25281000,
    'borders': [
      'CHN',
      'KOR',
      'RUS'
    ],
    'nativeName': '북한'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'ch',
        'iso639_2': 'cha',
        'name': 'Chamorro',
        'nativeName': 'Chamoru'
      }
    ],
    'translations': {
      'br': 'Ilhas Marianas',
      'pt': 'Ilhas Marianas',
      'nl': 'Noordelijke Marianeneilanden',
      'hr': 'Sjevernomarijanski otoci',
      'fa': 'جزایر ماریانای شمالی',
      'de': 'Nördliche Marianen',
      'es': 'Islas Marianas del Norte',
      'fr': 'Îles Mariannes du Nord',
      'ja': '北マリアナ諸島',
      'it': 'Isole Marianne Settentrionali'
    },
    'flag': 'https://restcountries.eu/data/mnp.svg',
    'name': 'Northern Mariana Islands',
    'alpha2Code': 'MP',
    'capital': 'Saipan',
    'region': 'Oceania',
    'subregion': 'Micronesia',
    'population': 56940,
    'borders': [],
    'nativeName': 'Northern Mariana Islands'
  },
  {
    'currencies': [
      {
        'code': 'NOK',
        'name': 'Norwegian krone',
        'symbol': 'kr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'no',
        'iso639_2': 'nor',
        'name': 'Norwegian',
        'nativeName': 'Norsk'
      },
      {
        'iso639_1': 'nb',
        'iso639_2': 'nob',
        'name': 'Norwegian Bokmål',
        'nativeName': 'Norsk bokmål'
      },
      {
        'iso639_1': 'nn',
        'iso639_2': 'nno',
        'name': 'Norwegian Nynorsk',
        'nativeName': 'Norsk nynorsk'
      }
    ],
    'translations': {
      'br': 'Noruega',
      'pt': 'Noruega',
      'nl': 'Noorwegen',
      'hr': 'Norveška',
      'fa': 'نروژ',
      'de': 'Norwegen',
      'es': 'Noruega',
      'fr': 'Norvège',
      'ja': 'ノルウェー',
      'it': 'Norvegia'
    },
    'flag': 'https://restcountries.eu/data/nor.svg',
    'name': 'Norway',
    'alpha2Code': 'NO',
    'capital': 'Oslo',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 5223256,
    'borders': [
      'FIN',
      'SWE',
      'RUS'
    ],
    'nativeName': 'Norge'
  },
  {
    'currencies': [
      {
        'code': 'OMR',
        'name': 'Omani rial',
        'symbol': 'ر.ع.'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Omã',
      'pt': 'Omã',
      'nl': 'Oman',
      'hr': 'Oman',
      'fa': 'عمان',
      'de': 'Oman',
      'es': 'Omán',
      'fr': 'Oman',
      'ja': 'オマーン',
      'it': 'oman'
    },
    'flag': 'https://restcountries.eu/data/omn.svg',
    'name': 'Oman',
    'alpha2Code': 'OM',
    'capital': 'Muscat',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 4420133,
    'borders': [
      'SAU',
      'ARE',
      'YEM'
    ],
    'nativeName': 'عمان'
  },
  {
    'currencies': [
      {
        'code': 'PKR',
        'name': 'Pakistani rupee',
        'symbol': '₨'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'ur',
        'iso639_2': 'urd',
        'name': 'Urdu',
        'nativeName': 'اردو'
      }
    ],
    'translations': {
      'br': 'Paquistão',
      'pt': 'Paquistão',
      'nl': 'Pakistan',
      'hr': 'Pakistan',
      'fa': 'پاکستان',
      'de': 'Pakistan',
      'es': 'Pakistán',
      'fr': 'Pakistan',
      'ja': 'パキスタン',
      'it': 'Pakistan'
    },
    'flag': 'https://restcountries.eu/data/pak.svg',
    'name': 'Pakistan',
    'alpha2Code': 'PK',
    'capital': 'Islamabad',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 194125062,
    'borders': [
      'AFG',
      'CHN',
      'IND',
      'IRN'
    ],
    'nativeName': 'Pakistan'
  },
  {
    'currencies': [
      {
        'code': '(none)',
        'name': '[E]',
        'symbol': '$'
      },
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Palau',
      'pt': 'Palau',
      'nl': 'Palau',
      'hr': 'Palau',
      'fa': 'پالائو',
      'de': 'Palau',
      'es': 'Palau',
      'fr': 'Palaos',
      'ja': 'パラオ',
      'it': 'Palau'
    },
    'flag': 'https://restcountries.eu/data/plw.svg',
    'name': 'Palau',
    'alpha2Code': 'PW',
    'capital': 'Ngerulmud',
    'region': 'Oceania',
    'subregion': 'Micronesia',
    'population': 17950,
    'borders': [],
    'nativeName': 'Palau'
  },
  {
    'currencies': [
      {
        'code': 'ILS',
        'name': 'Israeli new sheqel',
        'symbol': '₪'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Palestina',
      'pt': 'Palestina',
      'nl': 'Palestijnse gebieden',
      'hr': 'Palestina',
      'fa': 'فلسطین',
      'de': 'Palästina',
      'es': 'Palestina',
      'fr': 'Palestine',
      'ja': 'パレスチナ',
      'it': 'Palestina'
    },
    'flag': 'https://restcountries.eu/data/pse.svg',
    'name': 'Palestine, State of',
    'alpha2Code': 'PS',
    'capital': 'Ramallah',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 4682467,
    'borders': [
      'ISR',
      'EGY',
      'JOR'
    ],
    'nativeName': 'فلسطين'
  },
  {
    'currencies': [
      {
        'code': 'PAB',
        'name': 'Panamanian balboa',
        'symbol': 'B/.'
      },
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Panamá',
      'pt': 'Panamá',
      'nl': 'Panama',
      'hr': 'Panama',
      'fa': 'پاناما',
      'de': 'Panama',
      'es': 'Panamá',
      'fr': 'Panama',
      'ja': 'パナマ',
      'it': 'Panama'
    },
    'flag': 'https://restcountries.eu/data/pan.svg',
    'name': 'Panama',
    'alpha2Code': 'PA',
    'capital': 'Panama City',
    'region': 'Americas',
    'subregion': 'Central America',
    'population': 3814672,
    'borders': [
      'COL',
      'CRI'
    ],
    'nativeName': 'Panamá'
  },
  {
    'currencies': [
      {
        'code': 'PGK',
        'name': 'Papua New Guinean kina',
        'symbol': 'K'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Papua Nova Guiné',
      'pt': 'Papua Nova Guiné',
      'nl': 'Papoea-Nieuw-Guinea',
      'hr': 'Papua Nova Gvineja',
      'fa': 'پاپوآ گینه نو',
      'de': 'Papua-Neuguinea',
      'es': 'Papúa Nueva Guinea',
      'fr': 'Papouasie-Nouvelle-Guinée',
      'ja': 'パプアニューギニア',
      'it': 'Papua Nuova Guinea'
    },
    'flag': 'https://restcountries.eu/data/png.svg',
    'name': 'Papua New Guinea',
    'alpha2Code': 'PG',
    'capital': 'Port Moresby',
    'region': 'Oceania',
    'subregion': 'Melanesia',
    'population': 8083700,
    'borders': [
      'IDN'
    ],
    'nativeName': 'Papua Niugini'
  },
  {
    'currencies': [
      {
        'code': 'PYG',
        'name': 'Paraguayan guaraní',
        'symbol': '₲'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      },
      {
        'iso639_1': 'gn',
        'iso639_2': 'grn',
        'name': 'Guaraní',
        'nativeName': "Avañe'ẽ"
      }
    ],
    'translations': {
      'br': 'Paraguai',
      'pt': 'Paraguai',
      'nl': 'Paraguay',
      'hr': 'Paragvaj',
      'fa': 'پاراگوئه',
      'de': 'Paraguay',
      'es': 'Paraguay',
      'fr': 'Paraguay',
      'ja': 'パラグアイ',
      'it': 'Paraguay'
    },
    'flag': 'https://restcountries.eu/data/pry.svg',
    'name': 'Paraguay',
    'alpha2Code': 'PY',
    'capital': 'Asunción',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 6854536,
    'borders': [
      'ARG',
      'BOL',
      'BRA'
    ],
    'nativeName': 'Paraguay'
  },
  {
    'currencies': [
      {
        'code': 'PEN',
        'name': 'Peruvian sol',
        'symbol': 'S/.'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Peru',
      'pt': 'Peru',
      'nl': 'Peru',
      'hr': 'Peru',
      'fa': 'پرو',
      'de': 'Peru',
      'es': 'Perú',
      'fr': 'Pérou',
      'ja': 'ペルー',
      'it': 'Perù'
    },
    'flag': 'https://restcountries.eu/data/per.svg',
    'name': 'Peru',
    'alpha2Code': 'PE',
    'capital': 'Lima',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 31488700,
    'borders': [
      'BOL',
      'BRA',
      'CHL',
      'COL',
      'ECU'
    ],
    'nativeName': 'Perú'
  },
  {
    'currencies': [
      {
        'code': 'PHP',
        'name': 'Philippine peso',
        'symbol': '₱'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Filipinas',
      'pt': 'Filipinas',
      'nl': 'Filipijnen',
      'hr': 'Filipini',
      'fa': 'جزایر الندفیلیپین',
      'de': 'Philippinen',
      'es': 'Filipinas',
      'fr': 'Philippines',
      'ja': 'フィリピン',
      'it': 'Filippine'
    },
    'flag': 'https://restcountries.eu/data/phl.svg',
    'name': 'Philippines',
    'alpha2Code': 'PH',
    'capital': 'Manila',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 103279800,
    'borders': [],
    'nativeName': 'Pilipinas'
  },
  {
    'currencies': [
      {
        'code': 'NZD',
        'name': 'New Zealand dollar',
        'symbol': '$'
      },
      {
        'name': 'Pitcairn Islands dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Pitcairn',
      'pt': 'Ilhas Picárnia',
      'nl': 'Pitcairneilanden',
      'hr': 'Pitcairnovo otočje',
      'fa': 'پیتکرن',
      'de': 'Pitcairn',
      'es': 'Islas Pitcairn',
      'fr': 'Îles Pitcairn',
      'ja': 'ピトケアン',
      'it': 'Isole Pitcairn'
    },
    'flag': 'https://restcountries.eu/data/pcn.svg',
    'name': 'Pitcairn',
    'alpha2Code': 'PN',
    'capital': 'Adamstown',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 56,
    'borders': [],
    'nativeName': 'Pitcairn Islands'
  },
  {
    'currencies': [
      {
        'code': 'PLN',
        'name': 'Polish złoty',
        'symbol': 'zł'
      }
    ],
    'languages': [
      {
        'iso639_1': 'pl',
        'iso639_2': 'pol',
        'name': 'Polish',
        'nativeName': 'język polski'
      }
    ],
    'translations': {
      'br': 'Polônia',
      'pt': 'Polónia',
      'nl': 'Polen',
      'hr': 'Poljska',
      'fa': 'لهستان',
      'de': 'Polen',
      'es': 'Polonia',
      'fr': 'Pologne',
      'ja': 'ポーランド',
      'it': 'Polonia'
    },
    'flag': 'https://restcountries.eu/data/pol.svg',
    'name': 'Poland',
    'alpha2Code': 'PL',
    'capital': 'Warsaw',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 38437239,
    'borders': [
      'BLR',
      'CZE',
      'DEU',
      'LTU',
      'RUS',
      'SVK',
      'UKR'
    ],
    'nativeName': 'Polska'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'Portugal',
      'pt': 'Portugal',
      'nl': 'Portugal',
      'hr': 'Portugal',
      'fa': 'پرتغال',
      'de': 'Portugal',
      'es': 'Portugal',
      'fr': 'Portugal',
      'ja': 'ポルトガル',
      'it': 'Portogallo'
    },
    'flag': 'https://restcountries.eu/data/prt.svg',
    'name': 'Portugal',
    'alpha2Code': 'PT',
    'capital': 'Lisbon',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 10374822,
    'borders': [
      'ESP'
    ],
    'nativeName': 'Portugal'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Porto Rico',
      'pt': 'Porto Rico',
      'nl': 'Puerto Rico',
      'hr': 'Portoriko',
      'fa': 'پورتو ریکو',
      'de': 'Puerto Rico',
      'es': 'Puerto Rico',
      'fr': 'Porto Rico',
      'ja': 'プエルトリコ',
      'it': 'Porto Rico'
    },
    'flag': 'https://restcountries.eu/data/pri.svg',
    'name': 'Puerto Rico',
    'alpha2Code': 'PR',
    'capital': 'San Juan',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 3474182,
    'borders': [],
    'nativeName': 'Puerto Rico'
  },
  {
    'currencies': [
      {
        'code': 'QAR',
        'name': 'Qatari riyal',
        'symbol': 'ر.ق'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Catar',
      'pt': 'Catar',
      'nl': 'Qatar',
      'hr': 'Katar',
      'fa': 'قطر',
      'de': 'Katar',
      'es': 'Catar',
      'fr': 'Qatar',
      'ja': 'カタール',
      'it': 'Qatar'
    },
    'flag': 'https://restcountries.eu/data/qat.svg',
    'name': 'Qatar',
    'alpha2Code': 'QA',
    'capital': 'Doha',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 2587564,
    'borders': [
      'SAU'
    ],
    'nativeName': 'قطر'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sq',
        'iso639_2': 'sqi',
        'name': 'Albanian',
        'nativeName': 'Shqip'
      },
      {
        'iso639_1': 'sr',
        'iso639_2': 'srp',
        'name': 'Serbian',
        'nativeName': 'српски језик'
      }
    ],
    'translations': {
      'br': 'Kosovo',
      'pt': 'Kosovo',
      'hr': 'Kosovo',
      'fa': 'کوزوو',
      'es': 'Kosovo'
    },
    'flag': 'https://restcountries.eu/data/kos.svg',
    'name': 'Republic of Kosovo',
    'alpha2Code': 'XK',
    'capital': 'Pristina',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 1733842,
    'borders': [
      'ALB',
      'MKD',
      'MNE',
      'SRB'
    ],
    'nativeName': 'Republika e Kosovës'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Reunião',
      'pt': 'Reunião',
      'nl': 'Réunion',
      'hr': 'Réunion',
      'fa': 'رئونیون',
      'de': 'Réunion',
      'es': 'Reunión',
      'fr': 'Réunion',
      'ja': 'レユニオン',
      'it': 'Riunione'
    },
    'flag': 'https://restcountries.eu/data/reu.svg',
    'name': 'Réunion',
    'alpha2Code': 'RE',
    'capital': 'Saint-Denis',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 840974,
    'borders': [],
    'nativeName': 'La Réunion'
  },
  {
    'currencies': [
      {
        'code': 'RON',
        'name': 'Romanian leu',
        'symbol': 'lei'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ro',
        'iso639_2': 'ron',
        'name': 'Romanian',
        'nativeName': 'Română'
      }
    ],
    'translations': {
      'br': 'Romênia',
      'pt': 'Roménia',
      'nl': 'Roemenië',
      'hr': 'Rumunjska',
      'fa': 'رومانی',
      'de': 'Rumänien',
      'es': 'Rumania',
      'fr': 'Roumanie',
      'ja': 'ルーマニア',
      'it': 'Romania'
    },
    'flag': 'https://restcountries.eu/data/rou.svg',
    'name': 'Romania',
    'alpha2Code': 'RO',
    'capital': 'Bucharest',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 19861408,
    'borders': [
      'BGR',
      'HUN',
      'MDA',
      'SRB',
      'UKR'
    ],
    'nativeName': 'România'
  },
  {
    'currencies': [
      {
        'code': 'RUB',
        'name': 'Russian ruble',
        'symbol': '₽'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Rússia',
      'pt': 'Rússia',
      'nl': 'Rusland',
      'hr': 'Rusija',
      'fa': 'روسیه',
      'de': 'Russland',
      'es': 'Rusia',
      'fr': 'Russie',
      'ja': 'ロシア連邦',
      'it': 'Russia'
    },
    'flag': 'https://restcountries.eu/data/rus.svg',
    'name': 'Russian Federation',
    'alpha2Code': 'RU',
    'capital': 'Moscow',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 146599183,
    'borders': [
      'AZE',
      'BLR',
      'CHN',
      'EST',
      'FIN',
      'GEO',
      'KAZ',
      'PRK',
      'LVA',
      'LTU',
      'MNG',
      'NOR',
      'POL',
      'UKR'
    ],
    'nativeName': 'Россия'
  },
  {
    'currencies': [
      {
        'code': 'RWF',
        'name': 'Rwandan franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'rw',
        'iso639_2': 'kin',
        'name': 'Kinyarwanda',
        'nativeName': 'Ikinyarwanda'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Ruanda',
      'pt': 'Ruanda',
      'nl': 'Rwanda',
      'hr': 'Ruanda',
      'fa': 'رواندا',
      'de': 'Ruanda',
      'es': 'Ruanda',
      'fr': 'Rwanda',
      'ja': 'ルワンダ',
      'it': 'Ruanda'
    },
    'flag': 'https://restcountries.eu/data/rwa.svg',
    'name': 'Rwanda',
    'alpha2Code': 'RW',
    'capital': 'Kigali',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 11553188,
    'borders': [
      'BDI',
      'COD',
      'TZA',
      'UGA'
    ],
    'nativeName': 'Rwanda'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'São Bartolomeu',
      'pt': 'São Bartolomeu',
      'nl': 'Saint Barthélemy',
      'hr': 'Saint Barthélemy',
      'fa': 'سن-بارتلمی',
      'de': 'Saint-Barthélemy',
      'es': 'San Bartolomé',
      'fr': 'Saint-Barthélemy',
      'ja': 'サン・バルテルミー',
      'it': 'Antille Francesi'
    },
    'flag': 'https://restcountries.eu/data/blm.svg',
    'name': 'Saint Barthélemy',
    'alpha2Code': 'BL',
    'capital': 'Gustavia',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 9417,
    'borders': [],
    'nativeName': 'Saint-Barthélemy'
  },
  {
    'currencies': [
      {
        'code': 'SHP',
        'name': 'Saint Helena pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Santa Helena',
      'pt': 'Santa Helena',
      'nl': 'Sint-Helena',
      'hr': 'Sveta Helena',
      'fa': 'سنت هلنا، اسنشن و تریستان دا کونا',
      'de': 'Sankt Helena',
      'es': 'Santa Helena',
      'fr': 'Sainte-Hélène',
      'ja': 'セントヘレナ・アセンションおよびトリスタンダクーニャ',
      'it': "Sant'Elena"
    },
    'flag': 'https://restcountries.eu/data/shn.svg',
    'name': 'Saint Helena, Ascension and Tristan da Cunha',
    'alpha2Code': 'SH',
    'capital': 'Jamestown',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 4255,
    'borders': [],
    'nativeName': 'Saint Helena'
  },
  {
    'currencies': [
      {
        'code': 'XCD',
        'name': 'East Caribbean dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'São Cristóvão e Neves',
      'pt': 'São Cristóvão e Neves',
      'nl': 'Saint Kitts en Nevis',
      'hr': 'Sveti Kristof i Nevis',
      'fa': 'سنت کیتس و نویس',
      'de': 'St. Kitts und Nevis',
      'es': 'San Cristóbal y Nieves',
      'fr': 'Saint-Christophe-et-Niévès',
      'ja': 'セントクリストファー・ネイビス',
      'it': 'Saint Kitts e Nevis'
    },
    'flag': 'https://restcountries.eu/data/kna.svg',
    'name': 'Saint Kitts and Nevis',
    'alpha2Code': 'KN',
    'capital': 'Basseterre',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 46204,
    'borders': [],
    'nativeName': 'Saint Kitts and Nevis'
  },
  {
    'currencies': [
      {
        'code': 'XCD',
        'name': 'East Caribbean dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Santa Lúcia',
      'pt': 'Santa Lúcia',
      'nl': 'Saint Lucia',
      'hr': 'Sveta Lucija',
      'fa': 'سنت لوسیا',
      'de': 'Saint Lucia',
      'es': 'Santa Lucía',
      'fr': 'Saint-Lucie',
      'ja': 'セントルシア',
      'it': 'Santa Lucia'
    },
    'flag': 'https://restcountries.eu/data/lca.svg',
    'name': 'Saint Lucia',
    'alpha2Code': 'LC',
    'capital': 'Castries',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 186000,
    'borders': [],
    'nativeName': 'Saint Lucia'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'nl',
        'iso639_2': 'nld',
        'name': 'Dutch',
        'nativeName': 'Nederlands'
      }
    ],
    'translations': {
      'br': 'Saint Martin',
      'pt': 'Ilha São Martinho',
      'nl': 'Saint-Martin',
      'hr': 'Sveti Martin',
      'fa': 'سینت مارتن',
      'de': 'Saint Martin',
      'es': 'Saint Martin',
      'fr': 'Saint-Martin',
      'ja': 'サン・マルタン（フランス領）',
      'it': 'Saint Martin'
    },
    'flag': 'https://restcountries.eu/data/maf.svg',
    'name': 'Saint Martin (French part)',
    'alpha2Code': 'MF',
    'capital': 'Marigot',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 36979,
    'borders': [
      'SXM',
      'NLD'
    ],
    'nativeName': 'Saint-Martin'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Saint-Pierre e Miquelon',
      'pt': 'São Pedro e Miquelon',
      'nl': 'Saint Pierre en Miquelon',
      'hr': 'Sveti Petar i Mikelon',
      'fa': 'سن پیر و میکلن',
      'de': 'Saint-Pierre und Miquelon',
      'es': 'San Pedro y Miquelón',
      'fr': 'Saint-Pierre-et-Miquelon',
      'ja': 'サンピエール島・ミクロン島',
      'it': 'Saint-Pierre e Miquelon'
    },
    'flag': 'https://restcountries.eu/data/spm.svg',
    'name': 'Saint Pierre and Miquelon',
    'alpha2Code': 'PM',
    'capital': 'Saint-Pierre',
    'region': 'Americas',
    'subregion': 'Northern America',
    'population': 6069,
    'borders': [],
    'nativeName': 'Saint-Pierre-et-Miquelon'
  },
  {
    'currencies': [
      {
        'code': 'XCD',
        'name': 'East Caribbean dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'São Vicente e Granadinas',
      'pt': 'São Vicente e Granadinas',
      'nl': 'Saint Vincent en de Grenadines',
      'hr': 'Sveti Vincent i Grenadini',
      'fa': 'سنت وینسنت و گرنادین\u200cها',
      'de': 'Saint Vincent und die Grenadinen',
      'es': 'San Vicente y Granadinas',
      'fr': 'Saint-Vincent-et-les-Grenadines',
      'ja': 'セントビンセントおよびグレナディーン諸島',
      'it': 'Saint Vincent e Grenadine'
    },
    'flag': 'https://restcountries.eu/data/vct.svg',
    'name': 'Saint Vincent and the Grenadines',
    'alpha2Code': 'VC',
    'capital': 'Kingstown',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 109991,
    'borders': [],
    'nativeName': 'Saint Vincent and the Grenadines'
  },
  {
    'currencies': [
      {
        'code': 'WST',
        'name': 'Samoan tālā',
        'symbol': 'T'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sm',
        'iso639_2': 'smo',
        'name': 'Samoan',
        'nativeName': "gagana fa'a Samoa"
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Samoa',
      'pt': 'Samoa',
      'nl': 'Samoa',
      'hr': 'Samoa',
      'fa': 'ساموآ',
      'de': 'Samoa',
      'es': 'Samoa',
      'fr': 'Samoa',
      'ja': 'サモア',
      'it': 'Samoa'
    },
    'flag': 'https://restcountries.eu/data/wsm.svg',
    'name': 'Samoa',
    'alpha2Code': 'WS',
    'capital': 'Apia',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 194899,
    'borders': [],
    'nativeName': 'Samoa'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'it',
        'iso639_2': 'ita',
        'name': 'Italian',
        'nativeName': 'Italiano'
      }
    ],
    'translations': {
      'br': 'San Marino',
      'pt': 'São Marinho',
      'nl': 'San Marino',
      'hr': 'San Marino',
      'fa': 'سان مارینو',
      'de': 'San Marino',
      'es': 'San Marino',
      'fr': 'Saint-Marin',
      'ja': 'サンマリノ',
      'it': 'San Marino'
    },
    'flag': 'https://restcountries.eu/data/smr.svg',
    'name': 'San Marino',
    'alpha2Code': 'SM',
    'capital': 'City of San Marino',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 33005,
    'borders': [
      'ITA'
    ],
    'nativeName': 'San Marino'
  },
  {
    'currencies': [
      {
        'code': 'STD',
        'name': 'São Tomé and Príncipe dobra',
        'symbol': 'Db'
      }
    ],
    'languages': [
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'São Tomé e Príncipe',
      'pt': 'São Tomé e Príncipe',
      'nl': 'Sao Tomé en Principe',
      'hr': 'Sveti Toma i Princip',
      'fa': 'کواترو دو فرویرو',
      'de': 'São Tomé und Príncipe',
      'es': 'Santo Tomé y Príncipe',
      'fr': 'Sao Tomé-et-Principe',
      'ja': 'サントメ・プリンシペ',
      'it': 'São Tomé e Príncipe'
    },
    'flag': 'https://restcountries.eu/data/stp.svg',
    'name': 'Sao Tome and Principe',
    'alpha2Code': 'ST',
    'capital': 'São Tomé',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 187356,
    'borders': [],
    'nativeName': 'São Tomé e Príncipe'
  },
  {
    'currencies': [
      {
        'code': 'SAR',
        'name': 'Saudi riyal',
        'symbol': 'ر.س'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Arábia Saudita',
      'pt': 'Arábia Saudita',
      'nl': 'Saoedi-Arabië',
      'hr': 'Saudijska Arabija',
      'fa': 'عربستان سعودی',
      'de': 'Saudi-Arabien',
      'es': 'Arabia Saudí',
      'fr': 'Arabie Saoudite',
      'ja': 'サウジアラビア',
      'it': 'Arabia Saudita'
    },
    'flag': 'https://restcountries.eu/data/sau.svg',
    'name': 'Saudi Arabia',
    'alpha2Code': 'SA',
    'capital': 'Riyadh',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 32248200,
    'borders': [
      'IRQ',
      'JOR',
      'KWT',
      'OMN',
      'QAT',
      'ARE',
      'YEM'
    ],
    'nativeName': 'العربية السعودية'
  },
  {
    'currencies': [
      {
        'code': 'XOF',
        'name': 'West African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Senegal',
      'pt': 'Senegal',
      'nl': 'Senegal',
      'hr': 'Senegal',
      'fa': 'سنگال',
      'de': 'Senegal',
      'es': 'Senegal',
      'fr': 'Sénégal',
      'ja': 'セネガル',
      'it': 'Senegal'
    },
    'flag': 'https://restcountries.eu/data/sen.svg',
    'name': 'Senegal',
    'alpha2Code': 'SN',
    'capital': 'Dakar',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 14799859,
    'borders': [
      'GMB',
      'GIN',
      'GNB',
      'MLI',
      'MRT'
    ],
    'nativeName': 'Sénégal'
  },
  {
    'currencies': [
      {
        'code': 'RSD',
        'name': 'Serbian dinar',
        'symbol': 'дин.'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sr',
        'iso639_2': 'srp',
        'name': 'Serbian',
        'nativeName': 'српски језик'
      }
    ],
    'translations': {
      'br': 'Sérvia',
      'pt': 'Sérvia',
      'nl': 'Servië',
      'hr': 'Srbija',
      'fa': 'صربستان',
      'de': 'Serbien',
      'es': 'Serbia',
      'fr': 'Serbie',
      'ja': 'セルビア',
      'it': 'Serbia'
    },
    'flag': 'https://restcountries.eu/data/srb.svg',
    'name': 'Serbia',
    'alpha2Code': 'RS',
    'capital': 'Belgrade',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 7076372,
    'borders': [
      'BIH',
      'BGR',
      'HRV',
      'HUN',
      'KOS',
      'MKD',
      'MNE',
      'ROU'
    ],
    'nativeName': 'Србија'
  },
  {
    'currencies': [
      {
        'code': 'SCR',
        'name': 'Seychellois rupee',
        'symbol': '₨'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Seicheles',
      'pt': 'Seicheles',
      'nl': 'Seychellen',
      'hr': 'Sejšeli',
      'fa': 'سیشل',
      'de': 'Seychellen',
      'es': 'Seychelles',
      'fr': 'Seychelles',
      'ja': 'セーシェル',
      'it': 'Seychelles'
    },
    'flag': 'https://restcountries.eu/data/syc.svg',
    'name': 'Seychelles',
    'alpha2Code': 'SC',
    'capital': 'Victoria',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 91400,
    'borders': [],
    'nativeName': 'Seychelles'
  },
  {
    'currencies': [
      {
        'code': 'SLL',
        'name': 'Sierra Leonean leone',
        'symbol': 'Le'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Serra Leoa',
      'pt': 'Serra Leoa',
      'nl': 'Sierra Leone',
      'hr': 'Sijera Leone',
      'fa': 'سیرالئون',
      'de': 'Sierra Leone',
      'es': 'Sierra Leone',
      'fr': 'Sierra Leone',
      'ja': 'シエラレオネ',
      'it': 'Sierra Leone'
    },
    'flag': 'https://restcountries.eu/data/sle.svg',
    'name': 'Sierra Leone',
    'alpha2Code': 'SL',
    'capital': 'Freetown',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 7075641,
    'borders': [
      'GIN',
      'LBR'
    ],
    'nativeName': 'Sierra Leone'
  },
  {
    'currencies': [
      {
        'code': 'BND',
        'name': 'Brunei dollar',
        'symbol': '$'
      },
      {
        'code': 'SGD',
        'name': 'Singapore dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'ms',
        'iso639_2': 'msa',
        'name': 'Malay',
        'nativeName': 'bahasa Melayu'
      },
      {
        'iso639_1': 'ta',
        'iso639_2': 'tam',
        'name': 'Tamil',
        'nativeName': 'தமிழ்'
      },
      {
        'iso639_1': 'zh',
        'iso639_2': 'zho',
        'name': 'Chinese',
        'nativeName': '中文 (Zhōngwén)'
      }
    ],
    'translations': {
      'br': 'Singapura',
      'pt': 'Singapura',
      'nl': 'Singapore',
      'hr': 'Singapur',
      'fa': 'سنگاپور',
      'de': 'Singapur',
      'es': 'Singapur',
      'fr': 'Singapour',
      'ja': 'シンガポール',
      'it': 'Singapore'
    },
    'flag': 'https://restcountries.eu/data/sgp.svg',
    'name': 'Singapore',
    'alpha2Code': 'SG',
    'capital': 'Singapore',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 5535000,
    'borders': [],
    'nativeName': 'Singapore'
  },
  {
    'currencies': [
      {
        'code': 'ANG',
        'name': 'Netherlands Antillean guilder',
        'symbol': 'ƒ'
      }
    ],
    'languages': [
      {
        'iso639_1': 'nl',
        'iso639_2': 'nld',
        'name': 'Dutch',
        'nativeName': 'Nederlands'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Sint Maarten',
      'pt': 'São Martinho',
      'nl': 'Sint Maarten',
      'fa': 'سینت مارتن',
      'de': 'Sint Maarten (niederl. Teil)',
      'fr': 'Saint Martin (partie néerlandaise)',
      'it': 'Saint Martin (parte olandese)'
    },
    'flag': 'https://restcountries.eu/data/sxm.svg',
    'name': 'Sint Maarten (Dutch part)',
    'alpha2Code': 'SX',
    'capital': 'Philipsburg',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 38247,
    'borders': [
      'MAF'
    ],
    'nativeName': 'Sint Maarten'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sk',
        'iso639_2': 'slk',
        'name': 'Slovak',
        'nativeName': 'slovenčina'
      }
    ],
    'translations': {
      'br': 'Eslováquia',
      'pt': 'Eslováquia',
      'nl': 'Slowakije',
      'hr': 'Slovačka',
      'fa': 'اسلواکی',
      'de': 'Slowakei',
      'es': 'República Eslovaca',
      'fr': 'Slovaquie',
      'ja': 'スロバキア',
      'it': 'Slovacchia'
    },
    'flag': 'https://restcountries.eu/data/svk.svg',
    'name': 'Slovakia',
    'alpha2Code': 'SK',
    'capital': 'Bratislava',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 5426252,
    'borders': [
      'AUT',
      'CZE',
      'HUN',
      'POL',
      'UKR'
    ],
    'nativeName': 'Slovensko'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sl',
        'iso639_2': 'slv',
        'name': 'Slovene',
        'nativeName': 'slovenski jezik'
      }
    ],
    'translations': {
      'br': 'Eslovênia',
      'pt': 'Eslovénia',
      'nl': 'Slovenië',
      'hr': 'Slovenija',
      'fa': 'اسلوونی',
      'de': 'Slowenien',
      'es': 'Eslovenia',
      'fr': 'Slovénie',
      'ja': 'スロベニア',
      'it': 'Slovenia'
    },
    'flag': 'https://restcountries.eu/data/svn.svg',
    'name': 'Slovenia',
    'alpha2Code': 'SI',
    'capital': 'Ljubljana',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 2064188,
    'borders': [
      'AUT',
      'HRV',
      'ITA',
      'HUN'
    ],
    'nativeName': 'Slovenija'
  },
  {
    'currencies': [
      {
        'code': 'SBD',
        'name': 'Solomon Islands dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Salomão',
      'pt': 'Ilhas Salomão',
      'nl': 'Salomonseilanden',
      'hr': 'Solomonski Otoci',
      'fa': 'جزایر سلیمان',
      'de': 'Salomonen',
      'es': 'Islas Salomón',
      'fr': 'Îles Salomon',
      'ja': 'ソロモン諸島',
      'it': 'Isole Salomone'
    },
    'flag': 'https://restcountries.eu/data/slb.svg',
    'name': 'Solomon Islands',
    'alpha2Code': 'SB',
    'capital': 'Honiara',
    'region': 'Oceania',
    'subregion': 'Melanesia',
    'population': 642000,
    'borders': [],
    'nativeName': 'Solomon Islands'
  },
  {
    'currencies': [
      {
        'code': 'SOS',
        'name': 'Somali shilling',
        'symbol': 'Sh'
      }
    ],
    'languages': [
      {
        'iso639_1': 'so',
        'iso639_2': 'som',
        'name': 'Somali',
        'nativeName': 'Soomaaliga'
      },
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Somália',
      'pt': 'Somália',
      'nl': 'Somalië',
      'hr': 'Somalija',
      'fa': 'سومالی',
      'de': 'Somalia',
      'es': 'Somalia',
      'fr': 'Somalie',
      'ja': 'ソマリア',
      'it': 'Somalia'
    },
    'flag': 'https://restcountries.eu/data/som.svg',
    'name': 'Somalia',
    'alpha2Code': 'SO',
    'capital': 'Mogadishu',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 11079000,
    'borders': [
      'DJI',
      'ETH',
      'KEN'
    ],
    'nativeName': 'Soomaaliya'
  },
  {
    'currencies': [
      {
        'code': 'ZAR',
        'name': 'South African rand',
        'symbol': 'R'
      }
    ],
    'languages': [
      {
        'iso639_1': 'af',
        'iso639_2': 'afr',
        'name': 'Afrikaans',
        'nativeName': 'Afrikaans'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'nr',
        'iso639_2': 'nbl',
        'name': 'Southern Ndebele',
        'nativeName': 'isiNdebele'
      },
      {
        'iso639_1': 'st',
        'iso639_2': 'sot',
        'name': 'Southern Sotho',
        'nativeName': 'Sesotho'
      },
      {
        'iso639_1': 'ss',
        'iso639_2': 'ssw',
        'name': 'Swati',
        'nativeName': 'SiSwati'
      },
      {
        'iso639_1': 'tn',
        'iso639_2': 'tsn',
        'name': 'Tswana',
        'nativeName': 'Setswana'
      },
      {
        'iso639_1': 'ts',
        'iso639_2': 'tso',
        'name': 'Tsonga',
        'nativeName': 'Xitsonga'
      },
      {
        'iso639_1': 've',
        'iso639_2': 'ven',
        'name': 'Venda',
        'nativeName': 'Tshivenḓa'
      },
      {
        'iso639_1': 'xh',
        'iso639_2': 'xho',
        'name': 'Xhosa',
        'nativeName': 'isiXhosa'
      },
      {
        'iso639_1': 'zu',
        'iso639_2': 'zul',
        'name': 'Zulu',
        'nativeName': 'isiZulu'
      }
    ],
    'translations': {
      'br': 'República Sul-Africana',
      'pt': 'República Sul-Africana',
      'nl': 'Zuid-Afrika',
      'hr': 'Južnoafrička Republika',
      'fa': 'آفریقای جنوبی',
      'de': 'Republik Südafrika',
      'es': 'República de Sudáfrica',
      'fr': 'Afrique du Sud',
      'ja': '南アフリカ',
      'it': 'Sud Africa'
    },
    'flag': 'https://restcountries.eu/data/zaf.svg',
    'name': 'South Africa',
    'alpha2Code': 'ZA',
    'capital': 'Pretoria',
    'region': 'Africa',
    'subregion': 'Southern Africa',
    'population': 55653654,
    'borders': [
      'BWA',
      'LSO',
      'MOZ',
      'NAM',
      'SWZ',
      'ZWE'
    ],
    'nativeName': 'South Africa'
  },
  {
    'currencies': [
      {
        'code': 'GBP',
        'name': 'British pound',
        'symbol': '£'
      },
      {
        'code': '(none)',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Geórgias do Sul e Sandwich do Sul',
      'pt': 'Ilhas Geórgia do Sul e Sanduíche do Sul',
      'nl': 'Zuid-Georgia en Zuidelijke Sandwicheilanden',
      'hr': 'Južna Georgija i otočje Južni Sandwich',
      'fa': 'جزایر جورجیای جنوبی و ساندویچ جنوبی',
      'de': 'Südgeorgien und die Südlichen Sandwichinseln',
      'es': 'Islas Georgias del Sur y Sandwich del Sur',
      'fr': 'Géorgie du Sud-et-les Îles Sandwich du Sud',
      'ja': 'サウスジョージア・サウスサンドウィッチ諸島',
      'it': 'Georgia del Sud e Isole Sandwich Meridionali'
    },
    'flag': 'https://restcountries.eu/data/sgs.svg',
    'name': 'South Georgia and the South Sandwich Islands',
    'alpha2Code': 'GS',
    'capital': 'King Edward Point',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 30,
    'borders': [],
    'nativeName': 'South Georgia'
  },
  {
    'currencies': [
      {
        'code': 'KRW',
        'name': 'South Korean won',
        'symbol': '₩'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ko',
        'iso639_2': 'kor',
        'name': 'Korean',
        'nativeName': '한국어'
      }
    ],
    'translations': {
      'br': 'Coreia do Sul',
      'pt': 'Coreia do Sul',
      'nl': 'Zuid-Korea',
      'hr': 'Južna Koreja',
      'fa': 'کره شمالی',
      'de': 'Südkorea',
      'es': 'Corea del Sur',
      'fr': 'Corée du Sud',
      'ja': '大韓民国',
      'it': 'Corea del Sud'
    },
    'flag': 'https://restcountries.eu/data/kor.svg',
    'name': 'Korea (Republic of)',
    'alpha2Code': 'KR',
    'capital': 'Seoul',
    'region': 'Asia',
    'subregion': 'Eastern Asia',
    'population': 50801405,
    'borders': [
      'PRK'
    ],
    'nativeName': '대한민국'
  },
  {
    'currencies': [
      {
        'code': 'SSP',
        'name': 'South Sudanese pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Sudão do Sul',
      'pt': 'Sudão do Sul',
      'nl': 'Zuid-Soedan',
      'hr': 'Južni Sudan',
      'fa': 'سودان جنوبی',
      'de': 'Südsudan',
      'es': 'Sudán del Sur',
      'fr': 'Soudan du Sud',
      'ja': '南スーダン',
      'it': 'Sudan del sud'
    },
    'flag': 'https://restcountries.eu/data/ssd.svg',
    'name': 'South Sudan',
    'alpha2Code': 'SS',
    'capital': 'Juba',
    'region': 'Africa',
    'subregion': 'Middle Africa',
    'population': 12131000,
    'borders': [
      'CAF',
      'COD',
      'ETH',
      'KEN',
      'SDN',
      'UGA'
    ],
    'nativeName': 'South Sudan'
  },
  {
    'currencies': [
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Espanha',
      'pt': 'Espanha',
      'nl': 'Spanje',
      'hr': 'Španjolska',
      'fa': 'اسپانیا',
      'de': 'Spanien',
      'es': 'España',
      'fr': 'Espagne',
      'ja': 'スペイン',
      'it': 'Spagna'
    },
    'flag': 'https://restcountries.eu/data/esp.svg',
    'name': 'Spain',
    'alpha2Code': 'ES',
    'capital': 'Madrid',
    'region': 'Europa',
    'subregion': 'Southern Europa',
    'population': 46438422,
    'borders': [
      'AND',
      'FRA',
      'GIB',
      'PRT',
      'MAR'
    ],
    'nativeName': 'España'
  },
  {
    'currencies': [
      {
        'code': 'LKR',
        'name': 'Sri Lankan rupee',
        'symbol': 'Rs'
      }
    ],
    'languages': [
      {
        'iso639_1': 'si',
        'iso639_2': 'sin',
        'name': 'Sinhalese',
        'nativeName': 'සිංහල'
      },
      {
        'iso639_1': 'ta',
        'iso639_2': 'tam',
        'name': 'Tamil',
        'nativeName': 'தமிழ்'
      }
    ],
    'translations': {
      'br': 'Sri Lanka',
      'pt': 'Sri Lanka',
      'nl': 'Sri Lanka',
      'hr': 'Šri Lanka',
      'fa': 'سری\u200cلانکا',
      'de': 'Sri Lanka',
      'es': 'Sri Lanka',
      'fr': 'Sri Lanka',
      'ja': 'スリランカ',
      'it': 'Sri Lanka'
    },
    'flag': 'https://restcountries.eu/data/lka.svg',
    'name': 'Sri Lanka',
    'alpha2Code': 'LK',
    'capital': 'Colombo',
    'region': 'Asia',
    'subregion': 'Southern Asia',
    'population': 20966000,
    'borders': [
      'IND'
    ],
    'nativeName': 'śrī laṃkāva'
  },
  {
    'currencies': [
      {
        'code': 'SDG',
        'name': 'Sudanese pound',
        'symbol': 'ج.س.'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Sudão',
      'pt': 'Sudão',
      'nl': 'Soedan',
      'hr': 'Sudan',
      'fa': 'سودان',
      'de': 'Sudan',
      'es': 'Sudán',
      'fr': 'Soudan',
      'ja': 'スーダン',
      'it': 'Sudan'
    },
    'flag': 'https://restcountries.eu/data/sdn.svg',
    'name': 'Sudan',
    'alpha2Code': 'SD',
    'capital': 'Khartoum',
    'region': 'Africa',
    'subregion': 'Northern Africa',
    'population': 39598700,
    'borders': [
      'CAF',
      'TCD',
      'EGY',
      'ERI',
      'ETH',
      'LBY',
      'SSD'
    ],
    'nativeName': 'السودان'
  },
  {
    'currencies': [
      {
        'code': 'SRD',
        'name': 'Surinamese dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'nl',
        'iso639_2': 'nld',
        'name': 'Dutch',
        'nativeName': 'Nederlands'
      }
    ],
    'translations': {
      'br': 'Suriname',
      'pt': 'Suriname',
      'nl': 'Suriname',
      'hr': 'Surinam',
      'fa': 'سورینام',
      'de': 'Suriname',
      'es': 'Surinam',
      'fr': 'Surinam',
      'ja': 'スリナム',
      'it': 'Suriname'
    },
    'flag': 'https://restcountries.eu/data/sur.svg',
    'name': 'Suriname',
    'alpha2Code': 'SR',
    'capital': 'Paramaribo',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 541638,
    'borders': [
      'BRA',
      'GUF',
      'FRA',
      'GUY'
    ],
    'nativeName': 'Suriname'
  },
  {
    'currencies': [
      {
        'code': 'NOK',
        'name': 'Norwegian krone',
        'symbol': 'kr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'no',
        'iso639_2': 'nor',
        'name': 'Norwegian',
        'nativeName': 'Norsk'
      }
    ],
    'translations': {
      'br': 'Svalbard',
      'pt': 'Svalbard',
      'nl': 'Svalbard en Jan Mayen',
      'hr': 'Svalbard i Jan Mayen',
      'fa': 'سوالبارد و یان ماین',
      'de': 'Svalbard und Jan Mayen',
      'es': 'Islas Svalbard y Jan Mayen',
      'fr': 'Svalbard et Jan Mayen',
      'ja': 'スヴァールバル諸島およびヤンマイエン島',
      'it': 'Svalbard e Jan Mayen'
    },
    'flag': 'https://restcountries.eu/data/sjm.svg',
    'name': 'Svalbard and Jan Mayen',
    'alpha2Code': 'SJ',
    'capital': 'Longyearbyen',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 2562,
    'borders': [],
    'nativeName': 'Svalbard og Jan Mayen'
  },
  {
    'currencies': [
      {
        'code': 'SZL',
        'name': 'Swazi lilangeni',
        'symbol': 'L'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'ss',
        'iso639_2': 'ssw',
        'name': 'Swati',
        'nativeName': 'SiSwati'
      }
    ],
    'translations': {
      'br': 'Suazilândia',
      'pt': 'Suazilândia',
      'nl': 'Swaziland',
      'hr': 'Svazi',
      'fa': 'سوازیلند',
      'de': 'Swasiland',
      'es': 'Suazilandia',
      'fr': 'Swaziland',
      'ja': 'スワジランド',
      'it': 'Swaziland'
    },
    'flag': 'https://restcountries.eu/data/swz.svg',
    'name': 'Swaziland',
    'alpha2Code': 'SZ',
    'capital': 'Lobamba',
    'region': 'Africa',
    'subregion': 'Southern Africa',
    'population': 1132657,
    'borders': [
      'MOZ',
      'ZAF'
    ],
    'nativeName': 'Swaziland'
  },
  {
    'currencies': [
      {
        'code': 'SEK',
        'name': 'Swedish krona',
        'symbol': 'kr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sv',
        'iso639_2': 'swe',
        'name': 'Swedish',
        'nativeName': 'svenska'
      }
    ],
    'translations': {
      'br': 'Suécia',
      'pt': 'Suécia',
      'nl': 'Zweden',
      'hr': 'Švedska',
      'fa': 'سوئد',
      'de': 'Schweden',
      'es': 'Suecia',
      'fr': 'Suède',
      'ja': 'スウェーデン',
      'it': 'Svezia'
    },
    'flag': 'https://restcountries.eu/data/swe.svg',
    'name': 'Sweden',
    'alpha2Code': 'SE',
    'capital': 'Stockholm',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 9894888,
    'borders': [
      'FIN',
      'NOR'
    ],
    'nativeName': 'Sverige'
  },
  {
    'currencies': [
      {
        'code': 'CHF',
        'name': 'Swiss franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'de',
        'iso639_2': 'deu',
        'name': 'German',
        'nativeName': 'Deutsch'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      },
      {
        'iso639_1': 'it',
        'iso639_2': 'ita',
        'name': 'Italian',
        'nativeName': 'Italiano'
      }
    ],
    'translations': {
      'br': 'Suíça',
      'pt': 'Suíça',
      'nl': 'Zwitserland',
      'hr': 'Švicarska',
      'fa': 'سوئیس',
      'de': 'Schweiz',
      'es': 'Suiza',
      'fr': 'Suisse',
      'ja': 'スイス',
      'it': 'Svizzera'
    },
    'flag': 'https://restcountries.eu/data/che.svg',
    'name': 'Switzerland',
    'alpha2Code': 'CH',
    'capital': 'Bern',
    'region': 'Europa',
    'subregion': 'Western Europa',
    'population': 8341600,
    'borders': [
      'AUT',
      'FRA',
      'ITA',
      'LIE',
      'DEU'
    ],
    'nativeName': 'Schweiz'
  },
  {
    'currencies': [
      {
        'code': 'SYP',
        'name': 'Syrian pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Síria',
      'pt': 'Síria',
      'nl': 'Syrië',
      'hr': 'Sirija',
      'fa': 'سوریه',
      'de': 'Syrien',
      'es': 'Siria',
      'fr': 'Syrie',
      'ja': 'シリア・アラブ共和国',
      'it': 'Siria'
    },
    'flag': 'https://restcountries.eu/data/syr.svg',
    'name': 'Syrian Arab Republic',
    'alpha2Code': 'SY',
    'capital': 'Damascus',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 18564000,
    'borders': [
      'IRQ',
      'ISR',
      'JOR',
      'LBN',
      'TUR'
    ],
    'nativeName': 'سوريا'
  },
  {
    'currencies': [
      {
        'code': 'TWD',
        'name': 'New Taiwan dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'zh',
        'iso639_2': 'zho',
        'name': 'Chinese',
        'nativeName': '中文 (Zhōngwén)'
      }
    ],
    'translations': {
      'br': 'Taiwan',
      'pt': 'Taiwan',
      'nl': 'Taiwan',
      'hr': 'Tajvan',
      'fa': 'تایوان',
      'de': 'Taiwan',
      'es': 'Taiwán',
      'fr': 'Taïwan',
      'ja': '台湾（中華民国）',
      'it': 'Taiwan'
    },
    'flag': 'https://restcountries.eu/data/twn.svg',
    'name': 'Taiwan',
    'alpha2Code': 'TW',
    'capital': 'Taipei',
    'region': 'Asia',
    'subregion': 'Eastern Asia',
    'population': 23503349,
    'borders': [],
    'nativeName': '臺灣'
  },
  {
    'currencies': [
      {
        'code': 'TJS',
        'name': 'Tajikistani somoni',
        'symbol': 'ЅМ'
      }
    ],
    'languages': [
      {
        'iso639_1': 'tg',
        'iso639_2': 'tgk',
        'name': 'Tajik',
        'nativeName': 'тоҷикӣ'
      },
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Tajiquistão',
      'pt': 'Tajiquistão',
      'nl': 'Tadzjikistan',
      'hr': 'Tađikistan',
      'fa': 'تاجیکستان',
      'de': 'Tadschikistan',
      'es': 'Tayikistán',
      'fr': 'Tadjikistan',
      'ja': 'タジキスタン',
      'it': 'Tagikistan'
    },
    'flag': 'https://restcountries.eu/data/tjk.svg',
    'name': 'Tajikistan',
    'alpha2Code': 'TJ',
    'capital': 'Dushanbe',
    'region': 'Asia',
    'subregion': 'Central Asia',
    'population': 8593600,
    'borders': [
      'AFG',
      'CHN',
      'KGZ',
      'UZB'
    ],
    'nativeName': 'Тоҷикистон'
  },
  {
    'currencies': [
      {
        'code': 'TZS',
        'name': 'Tanzanian shilling',
        'symbol': 'Sh'
      }
    ],
    'languages': [
      {
        'iso639_1': 'sw',
        'iso639_2': 'swa',
        'name': 'Swahili',
        'nativeName': 'Kiswahili'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Tanzânia',
      'pt': 'Tanzânia',
      'nl': 'Tanzania',
      'hr': 'Tanzanija',
      'fa': 'تانزانیا',
      'de': 'Tansania',
      'es': 'Tanzania',
      'fr': 'Tanzanie',
      'ja': 'タンザニア',
      'it': 'Tanzania'
    },
    'flag': 'https://restcountries.eu/data/tza.svg',
    'name': 'Tanzania, United Republic of',
    'alpha2Code': 'TZ',
    'capital': 'Dodoma',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 55155000,
    'borders': [
      'BDI',
      'COD',
      'KEN',
      'MWI',
      'MOZ',
      'RWA',
      'UGA',
      'ZMB'
    ],
    'nativeName': 'Tanzania'
  },
  {
    'currencies': [
      {
        'code': 'THB',
        'name': 'Thai baht',
        'symbol': '฿'
      }
    ],
    'languages': [
      {
        'iso639_1': 'th',
        'iso639_2': 'tha',
        'name': 'Thai',
        'nativeName': 'ไทย'
      }
    ],
    'translations': {
      'br': 'Tailândia',
      'pt': 'Tailândia',
      'nl': 'Thailand',
      'hr': 'Tajland',
      'fa': 'تایلند',
      'de': 'Thailand',
      'es': 'Tailandia',
      'fr': 'Thaïlande',
      'ja': 'タイ',
      'it': 'Tailandia'
    },
    'flag': 'https://restcountries.eu/data/tha.svg',
    'name': 'Thailand',
    'alpha2Code': 'TH',
    'capital': 'Bangkok',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 65327652,
    'borders': [
      'MMR',
      'KHM',
      'LAO',
      'MYS'
    ],
    'nativeName': 'ประเทศไทย'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      },
      {}
    ],
    'languages': [
      {
        'iso639_1': 'pt',
        'iso639_2': 'por',
        'name': 'Portuguese',
        'nativeName': 'Português'
      }
    ],
    'translations': {
      'br': 'Timor Leste',
      'pt': 'Timor Leste',
      'nl': 'Oost-Timor',
      'hr': 'Istočni Timor',
      'fa': 'تیمور شرقی',
      'de': 'Timor-Leste',
      'es': 'Timor Oriental',
      'fr': 'Timor oriental',
      'ja': '東ティモール',
      'it': 'Timor Est'
    },
    'flag': 'https://restcountries.eu/data/tls.svg',
    'name': 'Timor-Leste',
    'alpha2Code': 'TL',
    'capital': 'Dili',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 1167242,
    'borders': [
      'IDN'
    ],
    'nativeName': 'Timor-Leste'
  },
  {
    'currencies': [
      {
        'code': 'XOF',
        'name': 'West African CFA franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Togo',
      'pt': 'Togo',
      'nl': 'Togo',
      'hr': 'Togo',
      'fa': 'توگو',
      'de': 'Togo',
      'es': 'Togo',
      'fr': 'Togo',
      'ja': 'トーゴ',
      'it': 'Togo'
    },
    'flag': 'https://restcountries.eu/data/tgo.svg',
    'name': 'Togo',
    'alpha2Code': 'TG',
    'capital': 'Lomé',
    'region': 'Africa',
    'subregion': 'Western Africa',
    'population': 7143000,
    'borders': [
      'BEN',
      'BFA',
      'GHA'
    ],
    'nativeName': 'Togo'
  },
  {
    'currencies': [
      {
        'code': 'NZD',
        'name': 'New Zealand dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Tokelau',
      'pt': 'Toquelau',
      'nl': 'Tokelau',
      'hr': 'Tokelau',
      'fa': 'توکلائو',
      'de': 'Tokelau',
      'es': 'Islas Tokelau',
      'fr': 'Tokelau',
      'ja': 'トケラウ',
      'it': 'Isole Tokelau'
    },
    'flag': 'https://restcountries.eu/data/tkl.svg',
    'name': 'Tokelau',
    'alpha2Code': 'TK',
    'capital': 'Fakaofo',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 1411,
    'borders': [],
    'nativeName': 'Tokelau'
  },
  {
    'currencies': [
      {
        'code': 'TOP',
        'name': 'Tongan paʻanga',
        'symbol': 'T$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'to',
        'iso639_2': 'ton',
        'name': 'Tonga (Tonga Islands)',
        'nativeName': 'faka Tonga'
      }
    ],
    'translations': {
      'br': 'Tonga',
      'pt': 'Tonga',
      'nl': 'Tonga',
      'hr': 'Tonga',
      'fa': 'تونگا',
      'de': 'Tonga',
      'es': 'Tonga',
      'fr': 'Tonga',
      'ja': 'トンガ',
      'it': 'Tonga'
    },
    'flag': 'https://restcountries.eu/data/ton.svg',
    'name': 'Tonga',
    'alpha2Code': 'TO',
    'capital': "Nuku'alofa",
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 103252,
    'borders': [],
    'nativeName': 'Tonga'
  },
  {
    'currencies': [
      {
        'code': 'TTD',
        'name': 'Trinidad and Tobago dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Trinidad e Tobago',
      'pt': 'Trindade e Tobago',
      'nl': 'Trinidad en Tobago',
      'hr': 'Trinidad i Tobago',
      'fa': 'ترینیداد و توباگو',
      'de': 'Trinidad und Tobago',
      'es': 'Trinidad y Tobago',
      'fr': 'Trinité et Tobago',
      'ja': 'トリニダード・トバゴ',
      'it': 'Trinidad e Tobago'
    },
    'flag': 'https://restcountries.eu/data/tto.svg',
    'name': 'Trinidad and Tobago',
    'alpha2Code': 'TT',
    'capital': 'Port of Spain',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 1349667,
    'borders': [],
    'nativeName': 'Trinidad and Tobago'
  },
  {
    'currencies': [
      {
        'code': 'TND',
        'name': 'Tunisian dinar',
        'symbol': 'د.ت'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Tunísia',
      'pt': 'Tunísia',
      'nl': 'Tunesië',
      'hr': 'Tunis',
      'fa': 'تونس',
      'de': 'Tunesien',
      'es': 'Túnez',
      'fr': 'Tunisie',
      'ja': 'チュニジア',
      'it': 'Tunisia'
    },
    'flag': 'https://restcountries.eu/data/tun.svg',
    'name': 'Tunisia',
    'alpha2Code': 'TN',
    'capital': 'Tunis',
    'region': 'Africa',
    'subregion': 'Northern Africa',
    'population': 11154400,
    'borders': [
      'DZA',
      'LBY'
    ],
    'nativeName': 'تونس'
  },
  {
    'currencies': [
      {
        'code': 'TRY',
        'name': 'Turkish lira'
      }
    ],
    'languages': [
      {
        'iso639_1': 'tr',
        'iso639_2': 'tur',
        'name': 'Turkish',
        'nativeName': 'Türkçe'
      }
    ],
    'translations': {
      'br': 'Turquia',
      'pt': 'Turquia',
      'nl': 'Turkije',
      'hr': 'Turska',
      'fa': 'ترکیه',
      'de': 'Türkei',
      'es': 'Turquía',
      'fr': 'Turquie',
      'ja': 'トルコ',
      'it': 'Turchia'
    },
    'flag': 'https://restcountries.eu/data/tur.svg',
    'name': 'Turkey',
    'alpha2Code': 'TR',
    'capital': 'Ankara',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 78741053,
    'borders': [
      'ARM',
      'AZE',
      'BGR',
      'GEO',
      'GRC',
      'IRN',
      'IRQ',
      'SYR'
    ],
    'nativeName': 'Türkiye'
  },
  {
    'currencies': [
      {
        'code': 'TMT',
        'name': 'Turkmenistan manat',
        'symbol': 'm'
      }
    ],
    'languages': [
      {
        'iso639_1': 'tk',
        'iso639_2': 'tuk',
        'name': 'Turkmen',
        'nativeName': 'Türkmen'
      },
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Turcomenistão',
      'pt': 'Turquemenistão',
      'nl': 'Turkmenistan',
      'hr': 'Turkmenistan',
      'fa': 'ترکمنستان',
      'de': 'Turkmenistan',
      'es': 'Turkmenistán',
      'fr': 'Turkménistan',
      'ja': 'トルクメニスタン',
      'it': 'Turkmenistan'
    },
    'flag': 'https://restcountries.eu/data/tkm.svg',
    'name': 'Turkmenistan',
    'alpha2Code': 'TM',
    'capital': 'Ashgabat',
    'region': 'Asia',
    'subregion': 'Central Asia',
    'population': 4751120,
    'borders': [
      'AFG',
      'IRN',
      'KAZ',
      'UZB'
    ],
    'nativeName': 'Türkmenistan'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Ilhas Turcas e Caicos',
      'pt': 'Ilhas Turcas e Caicos',
      'nl': 'Turks- en Caicoseilanden',
      'hr': 'Otoci Turks i Caicos',
      'fa': 'جزایر تورکس و کایکوس',
      'de': 'Turks- und Caicosinseln',
      'es': 'Islas Turks y Caicos',
      'fr': 'Îles Turques-et-Caïques',
      'ja': 'タークス・カイコス諸島',
      'it': 'Isole Turks e Caicos'
    },
    'flag': 'https://restcountries.eu/data/tca.svg',
    'name': 'Turks and Caicos Islands',
    'alpha2Code': 'TC',
    'capital': 'Cockburn Town',
    'region': 'Americas',
    'subregion': 'Caribbean',
    'population': 31458,
    'borders': [],
    'nativeName': 'Turks and Caicos Islands'
  },
  {
    'currencies': [
      {
        'code': 'AUD',
        'name': 'Australian dollar',
        'symbol': '$'
      },
      {
        'code': 'TVD[G]',
        'name': 'Tuvaluan dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Tuvalu',
      'pt': 'Tuvalu',
      'nl': 'Tuvalu',
      'hr': 'Tuvalu',
      'fa': 'تووالو',
      'de': 'Tuvalu',
      'es': 'Tuvalu',
      'fr': 'Tuvalu',
      'ja': 'ツバル',
      'it': 'Tuvalu'
    },
    'flag': 'https://restcountries.eu/data/tuv.svg',
    'name': 'Tuvalu',
    'alpha2Code': 'TV',
    'capital': 'Funafuti',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 10640,
    'borders': [],
    'nativeName': 'Tuvalu'
  },
  {
    'currencies': [
      {
        'code': 'UGX',
        'name': 'Ugandan shilling',
        'symbol': 'Sh'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'sw',
        'iso639_2': 'swa',
        'name': 'Swahili',
        'nativeName': 'Kiswahili'
      }
    ],
    'translations': {
      'br': 'Uganda',
      'pt': 'Uganda',
      'nl': 'Oeganda',
      'hr': 'Uganda',
      'fa': 'اوگاندا',
      'de': 'Uganda',
      'es': 'Uganda',
      'fr': 'Uganda',
      'ja': 'ウガンダ',
      'it': 'Uganda'
    },
    'flag': 'https://restcountries.eu/data/uga.svg',
    'name': 'Uganda',
    'alpha2Code': 'UG',
    'capital': 'Kampala',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 33860700,
    'borders': [
      'COD',
      'KEN',
      'RWA',
      'SSD',
      'TZA'
    ],
    'nativeName': 'Uganda'
  },
  {
    'currencies': [
      {
        'code': 'UAH',
        'name': 'Ukrainian hryvnia',
        'symbol': '₴'
      }
    ],
    'languages': [
      {
        'iso639_1': 'uk',
        'iso639_2': 'ukr',
        'name': 'Ukrainian',
        'nativeName': 'Українська'
      }
    ],
    'translations': {
      'br': 'Ucrânia',
      'pt': 'Ucrânia',
      'nl': 'Oekraïne',
      'hr': 'Ukrajina',
      'fa': 'وکراین',
      'de': 'Ukraine',
      'es': 'Ucrania',
      'fr': 'Ukraine',
      'ja': 'ウクライナ',
      'it': 'Ucraina'
    },
    'flag': 'https://restcountries.eu/data/ukr.svg',
    'name': 'Ukraine',
    'alpha2Code': 'UA',
    'capital': 'Kiev',
    'region': 'Europa',
    'subregion': 'Eastern Europa',
    'population': 42692393,
    'borders': [
      'BLR',
      'HUN',
      'MDA',
      'POL',
      'ROU',
      'RUS',
      'SVK'
    ],
    'nativeName': 'Україна'
  },
  {
    'currencies': [
      {
        'code': 'AED',
        'name': 'United Arab Emirates dirham',
        'symbol': 'د.إ'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Emirados árabes Unidos',
      'pt': 'Emirados árabes Unidos',
      'nl': 'Verenigde Arabische Emiraten',
      'hr': 'Ujedinjeni Arapski Emirati',
      'fa': 'امارات متحده عربی',
      'de': 'Vereinigte Arabische Emirate',
      'es': 'Emiratos Árabes Unidos',
      'fr': 'Émirats arabes unis',
      'ja': 'アラブ首長国連邦',
      'it': 'Emirati Arabi Uniti'
    },
    'flag': 'https://restcountries.eu/data/are.svg',
    'name': 'United Arab Emirates',
    'alpha2Code': 'AE',
    'capital': 'Abu Dhabi',
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 9856000,
    'borders': [
      'OMN',
      'SAU'
    ],
    'nativeName': 'دولة الإمارات العربية المتحدة'
  },
  {
    'currencies': [
      {
        'code': 'GBP',
        'name': 'British pound',
        'symbol': '£'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Reino Unido',
      'pt': 'Reino Unido',
      'nl': 'Verenigd Koninkrijk',
      'hr': 'Ujedinjeno Kraljevstvo',
      'fa': 'بریتانیای کبیر و ایرلند شمالی',
      'de': 'Vereinigtes Königreich',
      'es': 'Reino Unido',
      'fr': 'Royaume-Uni',
      'ja': 'イギリス',
      'it': 'Regno Unito'
    },
    'flag': 'https://restcountries.eu/data/gbr.svg',
    'name': 'United Kingdom and Northern Ireland',
    'alpha2Code': 'GB',
    'capital': 'London',
    'region': 'Europa',
    'subregion': 'Northern Europa',
    'population': 65110000,
    'borders': [
      'IRL'
    ],
    'nativeName': 'United Kingdom'
  },
  {
    'currencies': [
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Estados Unidos',
      'pt': 'Estados Unidos',
      'nl': 'Verenigde Staten',
      'hr': 'Sjedinjene Američke Države',
      'fa': 'ایالات متحده آمریکا',
      'de': 'Vereinigte Staaten von Amerika',
      'es': 'Estados Unidos',
      'fr': 'États-Unis',
      'ja': 'アメリカ合衆国',
      'it': "Stati Uniti D'America"
    },
    'flag': 'https://restcountries.eu/data/usa.svg',
    'name': 'United States of America',
    'alpha2Code': 'US',
    'capital': 'Washington, D.C.',
    'region': 'Americas',
    'subregion': 'Northern America',
    'population': 323947000,
    'borders': [
      'CAN',
      'MEX'
    ],
    'nativeName': 'United States'
  },
  {
    'currencies': [
      {
        'code': 'UYU',
        'name': 'Uruguayan peso',
        'symbol': '$'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Uruguai',
      'pt': 'Uruguai',
      'nl': 'Uruguay',
      'hr': 'Urugvaj',
      'fa': 'اروگوئه',
      'de': 'Uruguay',
      'es': 'Uruguay',
      'fr': 'Uruguay',
      'ja': 'ウルグアイ',
      'it': 'Uruguay'
    },
    'flag': 'https://restcountries.eu/data/ury.svg',
    'name': 'Uruguay',
    'alpha2Code': 'UY',
    'capital': 'Montevideo',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 3480222,
    'borders': [
      'ARG',
      'BRA'
    ],
    'nativeName': 'Uruguay'
  },
  {
    'currencies': [
      {
        'code': 'UZS',
        'name': "Uzbekistani so'm"
      }
    ],
    'languages': [
      {
        'iso639_1': 'uz',
        'iso639_2': 'uzb',
        'name': 'Uzbek',
        'nativeName': 'Oʻzbek'
      },
      {
        'iso639_1': 'ru',
        'iso639_2': 'rus',
        'name': 'Russian',
        'nativeName': 'Русский'
      }
    ],
    'translations': {
      'br': 'Uzbequistão',
      'pt': 'Usbequistão',
      'nl': 'Oezbekistan',
      'hr': 'Uzbekistan',
      'fa': 'ازبکستان',
      'de': 'Usbekistan',
      'es': 'Uzbekistán',
      'fr': 'Ouzbékistan',
      'ja': 'ウズベキスタン',
      'it': 'Uzbekistan'
    },
    'flag': 'https://restcountries.eu/data/uzb.svg',
    'name': 'Uzbekistan',
    'alpha2Code': 'UZ',
    'capital': 'Tashkent',
    'region': 'Asia',
    'subregion': 'Central Asia',
    'population': 31576400,
    'borders': [
      'AFG',
      'KAZ',
      'KGZ',
      'TJK',
      'TKM'
    ],
    'nativeName': 'O‘zbekiston'
  },
  {
    'currencies': [
      {
        'code': 'VUV',
        'name': 'Vanuatu vatu',
        'symbol': 'Vt'
      }
    ],
    'languages': [
      {
        'iso639_1': 'bi',
        'iso639_2': 'bis',
        'name': 'Bislama',
        'nativeName': 'Bislama'
      },
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Vanuatu',
      'pt': 'Vanuatu',
      'nl': 'Vanuatu',
      'hr': 'Vanuatu',
      'fa': 'وانواتو',
      'de': 'Vanuatu',
      'es': 'Vanuatu',
      'fr': 'Vanuatu',
      'ja': 'バヌアツ',
      'it': 'Vanuatu'
    },
    'flag': 'https://restcountries.eu/data/vut.svg',
    'name': 'Vanuatu',
    'alpha2Code': 'VU',
    'capital': 'Port Vila',
    'region': 'Oceania',
    'subregion': 'Melanesia',
    'population': 277500,
    'borders': [],
    'nativeName': 'Vanuatu'
  },
  {
    'currencies': [
      {
        'code': 'VEF',
        'name': 'Venezuelan bolívar',
        'symbol': 'Bs F'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Venezuela',
      'pt': 'Venezuela',
      'nl': 'Venezuela',
      'hr': 'Venezuela',
      'fa': 'ونزوئلا',
      'de': 'Venezuela',
      'es': 'Venezuela',
      'fr': 'Venezuela',
      'ja': 'ベネズエラ・ボリバル共和国',
      'it': 'Venezuela'
    },
    'flag': 'https://restcountries.eu/data/ven.svg',
    'name': 'Venezuela',
    'alpha2Code': 'VE',
    'capital': 'Caracas',
    'region': 'Americas',
    'subregion': 'South America',
    'population': 31028700,
    'borders': [
      'BRA',
      'COL',
      'GUY'
    ],
    'nativeName': 'Venezuela'
  },
  {
    'currencies': [
      {
        'code': 'VND',
        'name': 'Vietnamese đồng',
        'symbol': '₫'
      }
    ],
    'languages': [
      {
        'iso639_1': 'vi',
        'iso639_2': 'vie',
        'name': 'Vietnamese',
        'nativeName': 'Tiếng Việt'
      }
    ],
    'translations': {
      'br': 'Vietnã',
      'pt': 'Vietname',
      'nl': 'Vietnam',
      'hr': 'Vijetnam',
      'fa': 'ویتنام',
      'de': 'Vietnam',
      'es': 'Vietnam',
      'fr': 'Viêt Nam',
      'ja': 'ベトナム',
      'it': 'Vietnam'
    },
    'flag': 'https://restcountries.eu/data/vnm.svg',
    'name': 'Viet Nam',
    'alpha2Code': 'VN',
    'capital': 'Hanoi',
    'region': 'Asia',
    'subregion': 'South-Eastern Asia',
    'population': 92700000,
    'borders': [
      'KHM',
      'CHN',
      'LAO'
    ],
    'nativeName': 'Việt Nam'
  },
  {
    'currencies': [
      {
        'code': 'XPF',
        'name': 'CFP franc',
        'symbol': 'Fr'
      }
    ],
    'languages': [
      {
        'iso639_1': 'fr',
        'iso639_2': 'fra',
        'name': 'French',
        'nativeName': 'français'
      }
    ],
    'translations': {
      'br': 'Wallis e Futuna',
      'pt': 'Wallis e Futuna',
      'nl': 'Wallis en Futuna',
      'hr': 'Wallis i Fortuna',
      'fa': 'والیس و فوتونا',
      'de': 'Wallis und Futuna',
      'es': 'Wallis y Futuna',
      'fr': 'Wallis-et-Futuna',
      'ja': 'ウォリス・フツナ',
      'it': 'Wallis e Futuna'
    },
    'flag': 'https://restcountries.eu/data/wlf.svg',
    'name': 'Wallis and Futuna',
    'alpha2Code': 'WF',
    'capital': 'Mata-Utu',
    'region': 'Oceania',
    'subregion': 'Polynesia',
    'population': 11750,
    'borders': [],
    'nativeName': 'Wallis et Futuna'
  },
  {
    'currencies': [
      {
        'code': 'MAD',
        'name': 'Moroccan dirham',
        'symbol': 'د.م.'
      },
      {
        'code': 'DZD',
        'name': 'Algerian dinar',
        'symbol': 'د.ج'
      }
    ],
    'languages': [
      {
        'iso639_1': 'es',
        'iso639_2': 'spa',
        'name': 'Spanish',
        'nativeName': 'Español'
      }
    ],
    'translations': {
      'br': 'Saara Ocidental',
      'pt': 'Saara Ocidental',
      'nl': 'Westelijke Sahara',
      'hr': 'Zapadna Sahara',
      'fa': 'جمهوری دموکراتیک عربی صحرا',
      'de': 'Westsahara',
      'es': 'Sahara Occidental',
      'fr': 'Sahara Occidental',
      'ja': '西サハラ',
      'it': 'Sahara Occidentale'
    },
    'flag': 'https://restcountries.eu/data/esh.svg',
    'name': 'Western Sahara',
    'alpha2Code': 'EH',
    'capital': 'El Aaiún',
    'region': 'Africa',
    'subregion': 'Northern Africa',
    'population': 510713,
    'borders': [
      'DZA',
      'MRT',
      'MAR'
    ],
    'nativeName': 'الصحراء الغربية'
  },
  {
    'currencies': [
      {
        'code': 'YER',
        'name': 'Yemeni rial',
        'symbol': '﷼'
      }
    ],
    'languages': [
      {
        'iso639_1': 'ar',
        'iso639_2': 'ara',
        'name': 'Arabic',
        'nativeName': 'العربية'
      }
    ],
    'translations': {
      'br': 'Iêmen',
      'pt': 'Iémen',
      'nl': 'Jemen',
      'hr': 'Jemen',
      'fa': 'یمن',
      'de': 'Jemen',
      'es': 'Yemen',
      'fr': 'Yémen',
      'ja': 'イエメン',
      'it': 'Yemen'
    },
    'flag': 'https://restcountries.eu/data/yem.svg',
    'name': 'Yemen',
    'alpha2Code': 'YE',
    'capital': "Sana'a",
    'region': 'Asia',
    'subregion': 'Western Asia',
    'population': 27478000,
    'borders': [
      'OMN',
      'SAU'
    ],
    'nativeName': 'اليَمَن'
  },
  {
    'currencies': [
      {
        'code': 'ZMW',
        'name': 'Zambian kwacha',
        'symbol': 'ZK'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      }
    ],
    'translations': {
      'br': 'Zâmbia',
      'pt': 'Zâmbia',
      'nl': 'Zambia',
      'hr': 'Zambija',
      'fa': 'زامبیا',
      'de': 'Sambia',
      'es': 'Zambia',
      'fr': 'Zambie',
      'ja': 'ザンビア',
      'it': 'Zambia'
    },
    'flag': 'https://restcountries.eu/data/zmb.svg',
    'name': 'Zambia',
    'alpha2Code': 'ZM',
    'capital': 'Lusaka',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 15933883,
    'borders': [
      'AGO',
      'BWA',
      'COD',
      'MWI',
      'MOZ',
      'NAM',
      'TZA',
      'ZWE'
    ],
    'nativeName': 'Zambia'
  },
  {
    'currencies': [
      {
        'code': 'BWP',
        'name': 'Botswana pula',
        'symbol': 'P'
      },
      {
        'code': 'GBP',
        'name': 'British pound',
        'symbol': '£'
      },
      {
        'code': 'CNY',
        'name': 'Chinese yuan',
        'symbol': '¥'
      },
      {
        'code': 'EUR',
        'name': 'Euro',
        'symbol': '€'
      },
      {
        'code': 'INR',
        'name': 'Indian rupee',
        'symbol': '₹'
      },
      {
        'code': 'JPY',
        'name': 'Japanese yen',
        'symbol': '¥'
      },
      {
        'code': 'ZAR',
        'name': 'South African rand',
        'symbol': 'Rs'
      },
      {
        'code': 'USD',
        'name': 'United States dollar',
        'symbol': '$'
      },
      {
        'code': '(none)'
      }
    ],
    'languages': [
      {
        'iso639_1': 'en',
        'iso639_2': 'eng',
        'name': 'English',
        'nativeName': 'English'
      },
      {
        'iso639_1': 'sn',
        'iso639_2': 'sna',
        'name': 'Shona',
        'nativeName': 'chiShona'
      },
      {
        'iso639_1': 'nd',
        'iso639_2': 'nde',
        'name': 'Northern Ndebele',
        'nativeName': 'isiNdebele'
      }
    ],
    'translations': {
      'br': 'Zimbabwe',
      'pt': 'Zimbabué',
      'nl': 'Zimbabwe',
      'hr': 'Zimbabve',
      'fa': 'زیمباوه',
      'de': 'Simbabwe',
      'es': 'Zimbabue',
      'fr': 'Zimbabwe',
      'ja': 'ジンバブエ',
      'it': 'Zimbabwe'
    },
    'flag': 'https://restcountries.eu/data/zwe.svg',
    'name': 'Zimbabwe',
    'alpha2Code': 'ZW',
    'capital': 'Harare',
    'region': 'Africa',
    'subregion': 'Eastern Africa',
    'population': 14240168,
    'borders': [
      'BWA',
      'MOZ',
      'ZAF',
      'ZMB'
    ],
    'nativeName': 'Zimbabwe'
  }
]

module.exports = countries
