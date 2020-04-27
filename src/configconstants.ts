// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// tslint:disable: variable-name
export class CoreConfigConstants {
    static app_id = 'edu.sbs.ilearnapp';
    static appname = 'SBS iLearn';
    static desktopappname = 'SBS iLearn';
    static versioncode = 3820;
    static versionname = '3.8.2';
    static cache_update_frequency_usually = 420000;
    static cache_update_frequency_often = 1200000;
    static cache_update_frequency_sometimes = 3600000;
    static cache_update_frequency_rarely = 43200000;
    static default_lang = 'en';
    static languages: any = {
        'ar': 'عربي',
        'bg': 'Български',
        'ca': 'Català',
        'cs': 'Čeština',
        'da': 'Dansk',
        'de': 'Deutsch',
        'de-du': 'Deutsch - Du',
        'el': 'Ελληνικά',
        'en': 'English',
        'en-us': 'English - United States',
        'es': 'Español',
        'es-mx': 'Español - México',
        'eu': 'Euskara',
        'fa': 'فارسی',
        'fi': 'Suomi',
        'fr': 'Français',
        'he': 'עברית',
        'hi': 'हिंदी',
        'hr': 'Hrvatski',
        'hu': 'magyar',
        'id': 'Indonesian',
        'it': 'Italiano',
        'ja': '日本語',
        'km': 'ខ្មែរ',
        'kn': 'ಕನ್ನಡ',
        'ko': '한국어',
        'lt': 'Lietuvių',
        'lv': 'Latviešu',
        'mr': 'मराठी',
        'nl': 'Nederlands',
        'no': 'Norsk - bokmål',
        'pl': 'Polski',
        'pt': 'Português - Portugal',
        'pt-br': 'Português - Brasil',
        'ro': 'Română',
        'ru': 'Русский',
        'sl': 'Slovenščina',
        'sr-cr': 'Српски',
        'sr-lt': 'Srpski',
        'sv': 'Svenska',
        'tg': 'Тоҷикӣ',
        'tr': 'Türkçe',
        'uk': 'Українська',
        'vi': 'Vietnamese',
        'zh-cn': '简体中文',
        'zh-tw': '正體中文'
    };
    static wsservice = 'moodle_mobile_app';
    static wsextservice = 'local_mobile';
    static font_sizes: any = [
        62.5,
        75.89,
        93.75
];
    static customurlscheme = 'sbsilearn';
    static siteurl = 'https://ilearn.sbs.edu';
    static sitename = 'SBS iLearn';
    static multisitesdisplay = '';
    static skipssoconfirmation = false;
    static forcedefaultlanguage = false;
    static privacypolicy = 'https://www.sbs.edu/privacy-policy';
    static notificoncolor = '#2d6fbf';
    static statusbarbg = true;
    static statusbarlighttext = true;
    static statusbarbgios = '#2d6fbf';
    static statusbarlighttextios = true;
    static statusbarbgandroid = '#0a4fa2';
    static statusbarlighttextandroid = true;
    static statusbarbgremotetheme = '#000000';
    static statusbarlighttextremotetheme = true;
    static enableanalytics = false;
    static forceColorScheme = '';
    static compilationtime = 1587357096362;
    static lastcommit = 'd1f1c6d59090b71ffe55e1ac94708e8dffa0e105';
}
