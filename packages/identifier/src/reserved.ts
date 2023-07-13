const atpSpecific = [
  'at',
  'atp',
  'plc',
  'pds',
  'did',
  'repo',
  'tid',
  'nsid',
  'xrpc',
  'lex',
  'lexicon',
  'bsky',
  'bluesky',
  'handle',
]

// naively pulled from: https://radwebhosting.com/client_area/knowledgebase/196/List-of-Banned-Subdomain-Prefixes.html
const commonlyReserved = [
  'about',
  'abuse',
  'access',
  'account',
  'accounts',
  'acme',
  'activate',
  'activities',
  'activity',
  'ad',
  'add',
  'address',
  'adm',
  'admanager',
  'admin',
  'administration',
  'administrator',
  'administrators',
  'admins',
  'ads',
  'adsense',
  'adult',
  'advertising',
  'adwords',
  'affiliate',
  'affiliatepage',
  'affiliates',
  'afp',
  'ajax',
  'all',
  'alpha',
  'analysis',
  'analytics',
  'android',
  'anon',
  'anonymous',
  'answer',
  'answers',
  'ap',
  'api',
  'apis',
  'app',
  'appengine',
  'appnews',
  'apps',
  'archive',
  'archives',
  'article',
  'asdf',
  'asset',
  'assets',
  'auth',
  'authentication',
  'avatar',
  'backup',
  'bank',
  'banner',
  'banners',
  'base',
  'beginners',
  'beta',
  'billing',
  'bin',
  'binaries',
  'binary',
  'blackberry',
  'blog',
  'blogs',
  'blogsearch',
  'board',
  'book',
  'bookmark',
  'bookmarks',
  'books',
  'bot',
  'bots',
  'bug',
  'bugs',
  'business',
  'buy',
  'buzz',
  'cache',
  'calendar',
  'call',
  'campaign',
  'cancel',
  'captcha',
  'career',
  'careers',
  'cart',
  'catalog',
  'catalogs',
  'categories',
  'category',
  'cdn',
  'cgi',
  'cgi-bin',
  'changelog',
  'chart',
  'charts',
  'chat',
  'check',
  'checked',
  'checking',
  'checkout',
  'client',
  'cliente',
  'clients',
  'clients1',
  'cnarne',
  'code',
  'comercial',
  'comment',
  'comments',
  'communities',
  'community',
  'company',
  'compare',
  'compras',
  'config',
  'configuration',
  'confirm',
  'confirmation',
  'connect',
  'contact',
  'contacts',
  'contactus',
  'contact-us',
  'contact_us',
  'content',
  'contest',
  'contribute',
  'contributor',
  'contributors',
  'coppa',
  'copyright',
  'copyrights',
  'core',
  'corp',
  'countries',
  'country',
  'cpanel',
  'create',
  'css',
  'cssproxy',
  'customise',
  'customize',
  'dashboard',
  'data',
  'db',
  'default',
  'delete',
  'demo',
  'design',
  'designer',
  'desktop',
  'destroy',
  'dev',
  'devel',
  'developer',
  'developers',
  'devs',
  'diagram',
  'diary',
  'dict',
  'dictionary',
  'die',
  'dir',
  'directory',
  'direct_messages',
  'direct-messages',
  'dist',
  'diversity',
  'dl',
  'dmca',
  'doc',
  'docs',
  'documentation',
  'documentations',
  'documents',
  'domain',
  'domains',
  'donate',
  'download',
  'downloads',
  'e',
  'e-mail',
  'earth',
  'ecommerce',
  'edit',
  'edits',
  'editor',
  'edu',
  'education',
  'email',
  'embed',
  'embedded',
  'employment',
  'employments',
  'empty',
  'enable',
  'encrypted',
  'end',
  'engine',
  'enterprise',
  'enterprises',
  'entries',
  'entry',
  'error',
  'errorlog',
  'errors',
  'eval',
  'event',
  'example',
  'examplecommunity',
  'exampleopenid',
  'examplesyn',
  'examplesyndicated',
  'exampleusername',
  'exchange',
  'exit',
  'explore',
  'fag',
  'fags',
  'faggot',
  'faggots',
  'faq',
  'faqs',
  'favorite',
  'favorites',
  'favourite',
  'favourites',
  'feature',
  'features',
  'feed',
  'feedback',
  'feedburner',
  'feedproxy',
  'feeds',
  'file',
  'files',
  'finance',
  'folder',
  'folders',
  'first',
  'following',
  'forgot',
  'form',
  'forms',
  'forum',
  'forums',
  'founder',
  'free',
  'friend',
  'friends',
  'ftp',
  'fuck',
  'fun',
  'fusion',
  'gadget',
  'gadgets',
  'game',
  'games',
  'gears',
  'general',
  'geographic',
  'get',
  'gettingstarted',
  'gift',
  'gifts',
  'gist',
  'git',
  'github',
  'gmail',
  'go',
  'golang',
  'goto',
  'gov',
  'graph',
  'graphs',
  'group',
  'groups',
  'guest',
  'guests',
  'guide',
  'guides',
  'hack',
  'hacks',
  'head',
  'help',
  'home',
  'homepage',
  'host',
  'hosting',
  'hostmaster',
  'hostname',
  'howto',
  'how-to',
  'how_to',
  'html',
  'htrnl',
  'http',
  'httpd',
  'https',
  'i',
  'iamges',
  'icon',
  'icons',
  'id',
  'idea',
  'ideas',
  'im',
  'image',
  'images',
  'img',
  'imap',
  'inbox',
  'inboxes',
  'index',
  'indexes',
  'info',
  'information',
  'inquiry',
  'intranet',
  'investor',
  'investors',
  'invitation',
  'invitations',
  'invite',
  'invoice',
  'invoices',
  'imac',
  'ios',
  'ipad',
  'iphone',
  'irc',
  'irnages',
  'irng',
  'is',
  'issue',
  'issues',
  'it',
  'item',
  'items',
  'java',
  'javascript',
  'job',
  'jobs',
  'join',
  'js',
  'json',
  'jump',
  'kb',
  'knowledge-base',
  'knowledgebase',
  'lab',
  'labs',
  'language',
  'languages',
  'last',
  'ldap_status',
  'ldap-status',
  'ldapstatus',
  'legal',
  'license',
  'licenses',
  'link',
  'links',
  'linux',
  'list',
  'lists',
  'livejournal',
  'lj',
  'local',
  'locale',
  'location',
  'log',
  'log-in',
  'log-out',
  'login',
  'logout',
  'logs',
  'log_in',
  'log_out',
  'm',
  'mac',
  'macos',
  'macosx',
  'mac-os',
  'mac-os-x',
  'mac_os_x',
  'mail',
  'mailer',
  'mailing',
  'main',
  'maintenance',
  'manage',
  'manager',
  'manual',
  'map',
  'maps',
  'marketing',
  'master',
  'me',
  'media',
  'member',
  'members',
  'memories',
  'memory',
  'merchandise',
  'message',
  'messages',
  'messenger',
  'mg',
  'microblog',
  'microblogs',
  'mine',
  'mis',
  'misc',
  'mms',
  'mob',
  'mobile',
  'model',
  'models',
  'money',
  'movie',
  'movies',
  'mp3',
  'mp4',
  'msg',
  'msn',
  'music',
  'mx',
  'my',
  'mymme',
  'mysql',
  'name',
  'named',
  'nan',
  'navi',
  'navigation',
  'net',
  'network',
  'networks',
  'new',
  'news',
  'newsletter',
  'nick',
  'nickname',
  'nil',
  'none',
  'notes',
  'noticias',
  'notification',
  'notifications',
  'notify',
  'ns',
  'ns1',
  'ns2',
  'ns3',
  'ns4',
  'ns5',
  'null',
  'oauth',
  'oauth-clients',
  'oauth_clients',
  'ocsp',
  'offer',
  'offers',
  'official',
  'old',
  'online',
  'openid',
  'operator',
  'option',
  'options',
  'order',
  'orders',
  'org',
  'organization',
  'organizations',
  'other',
  'overview',
  'owner',
  'owners',
  'p0rn',
  'pack',
  'page',
  'pager',
  'pages',
  'paid',
  'panel',
  'partner',
  'partnerpage',
  'partners',
  'password',
  'patch',
  'pay',
  'payment',
  'people',
  'perl',
  'person',
  'phone',
  'photo',
  'photoalbum',
  'photos',
  'php',
  'phpmyadmin',
  'phppgadmin',
  'phpredisadmin',
  'pic',
  'pics',
  'picture',
  'pictures',
  'ping',
  'pixel',
  'places',
  'plan',
  'plans',
  'plugin',
  'plugins',
  'podcasts',
  'policies',
  'policy',
  'pop',
  'pop3',
  'popular',
  'porn',
  'portal',
  'portals',
  'post',
  'postfix',
  'postmaster',
  'posts',
  'pr',
  'pr0n',
  'premium',
  'press',
  'price',
  'pricing',
  'principles',
  'print',
  'privacy',
  'privacy-policy',
  'privacypolicy',
  'privacy_policy',
  'private',
  'prod',
  'product',
  'production',
  'products',
  'profile',
  'profiles',
  'project',
  'projects',
  'promo',
  'promotions',
  'proxies',
  'proxy',
  'pub',
  'public',
  'purchase',
  'purpose',
  'put',
  'python',
  'queries',
  'query',
  'radio',
  'random',
  'ranking',
  'read',
  'reader',
  'readme',
  'recent',
  'recruit',
  'recruitment',
  'redirect',
  'register',
  'registration',
  'release',
  'remove',
  'replies',
  'report',
  'reports',
  'repositories',
  'repository',
  'req',
  'request',
  'requests',
  'research',
  'reset',
  'resolve',
  'resolver',
  'review',
  'rnail',
  'rnicrosoft',
  'roc',
  'root',
  'rss',
  'ruby',
  'rule',
  'sag',
  'sale',
  'sales',
  'sample',
  'samples',
  'sandbox',
  'save',
  'scholar',
  'school',
  'schools',
  'script',
  'scripts',
  'search',
  'secure',
  'security',
  'self',
  'seminars',
  'send',
  'server',
  'server-info',
  'server_info',
  'server-status',
  'server_status',
  'servers',
  'service',
  'services',
  'session',
  'sessions',
  'setting',
  'settings',
  'setup',
  'share',
  'shop',
  'shopping',
  'shortcut',
  'shortcuts',
  'show',
  'sign-in',
  'sign-up',
  'signin',
  'signout',
  'signup',
  'sign_in',
  'sign_up',
  'site',
  'sitemap',
  'sitemaps',
  'sitenews',
  'sites',
  'sketchup',
  'sky',
  'slash',
  'slashinvoice',
  'slut',
  'smartphone',
  'sms',
  'smtp',
  'soap',
  'software',
  'sorry',
  'source',
  'spec',
  'special',
  'spreadsheet',
  'spreadsheets',
  'sql',
  'src',
  'srntp',
  'ssh',
  'ssl',
  'ssladmin',
  'ssladministrator',
  'sslwebmaster',
  'ssytem',
  'staff',
  'stage',
  'staging',
  'start',
  'stat',
  'state',
  'static',
  'statistics',
  'stats',
  'status',
  'store',
  'stores',
  'stories',
  'style',
  'styleguide',
  'styles',
  'stylesheet',
  'stylesheets',
  'subdomain',
  'subscribe',
  'subscription',
  'subscriptions',
  'suggest',
  'suggestqueries',
  'support',
  'survey',
  'surveys',
  'surveytool',
  'svn',
  'swf',
  'syn',
  'sync',
  'syndicated',
  'sys',
  'sysadmin',
  'sysadministrator',
  'sysadmins',
  'system',
  'tablet',
  'tablets',
  'tag',
  'tags',
  'talk',
  'talkgadget',
  'task',
  'tasks',
  'team',
  'teams',
  'tech',
  'telnet',
  'term',
  'terms',
  'terms-of-service',
  'termsofservice',
  'terms_of_service',
  'test',
  'testing',
  'tests',
  'text',
  'theme',
  'themes',
  'thread',
  'threads',
  'ticket',
  'tickets',
  'tmp',
  'todo',
  'to-do',
  'to_do',
  'toml',
  'tool',
  'toolbar',
  'toolbars',
  'tools',
  'top',
  'topic',
  'topics',
  'tos',
  'tour',
  'trac',
  'translate',
  'tranny',
  'trace',
  'translation',
  'translations',
  'translator',
  'trends',
  'tutorial',
  'tux',
  'tv',
  'twitter',
  'txt',
  'ul',
  'undef',
  'unfollow',
  'unsubscribe',
  'update',
  'updates',
  'upgrade',
  'upgrades',
  'upi',
  'upload',
  'uploads',
  'url',
  'usage',
  'user',
  'username',
  'usernames',
  'users',
  'uuid',
  'validation',
  'validations',
  'ver',
  'version',
  'video',
  'videos',
  'video-stats',
  'visitor',
  'visitors',
  'voice',
  'volunteer',
  'volunteers',
  'w',
  'watch',
  'wave',
  'weather',
  'web',
  'webdisk',
  'webhook',
  'webhooks',
  'webmail',
  'webmaster',
  'webmasters',
  'webrnail',
  'website',
  'websites',
  'welcome',
  'whm',
  'whois',
  'widget',
  'widgets',
  'wifi',
  'wiki',
  'wikis',
  'win',
  'windows',
  'word',
  'work',
  'works',
  'workshop',
  'wpad',
  'ww',
  'wws',
  'www',
  'wwws',
  'wwww',
  'xfn',
  'xhtml',
  'xhtrnl',
  'xml',
  'xmpp',
  'xpg',
  'xxx',
  'yaml',
  'year',
  'yml',
  'you',
  'yourdomain',
  'yourname',
  'yoursite',
  'yourusername',
]

const famousAccounts = [
  // reserving some large twitter accounts (top 100 by followers according to wikidata dump)
  '10ronaldinho',
  '3gerardpique',
  'aclu',
  'adele',
  'akshaykumar',
  'aliaa08',
  'aliciakeys',
  'amitshah',
  'andresiniesta8',
  'anushkasharma',
  'arianagrande',
  'arrahman',
  'arvindkejriwal',
  'avrillavigne',
  'barackobama',
  'bbcbreaking',
  'bbcworld',
  'beingsalmankhan',
  'billgates',
  'britneyspears',
  'brunomars',
  'bts_bighit',
  'bts_twt',
  'championsleague',
  'chrisbrown',
  'cnnbrk',
  'coldplay',
  'conanobrien',
  'cristiano',
  'danieltosh',
  'davidguetta',
  'ddlovato',
  'deepikapadukone',
  'drake',
  'elisapie',
  'ellendegeneres',
  'elonmusk',
  'eminem',
  'emmawatson',
  'fcbarcelona',
  'foxnews',
  'harry_styles',
  'hillaryclinton',
  'iamsrk',
  'ihrithik',
  'imvkohli',
  'instagram',
  'jimmyfallon',
  'jlo',
  'joebiden',
  'jtimberlake',
  'justinbieber',
  'kaka',
  'kanyewest',
  'katyperry',
  'kendalljenner',
  'kevinhart4real',
  'khloekardashian',
  'kimkardashian',
  'kingjames',
  'kourtneykardash',
  'kyliejenner',
  'ladygaga',
  'liampayne',
  'liltunechi',
  'manutd',
  'mariahcarey',
  'mileycyrus',
  'mohamadalarefe',
  'narendramodi',
  'nasa',
  'nba',
  'neymarjr',
  'nfl',
  'niallofficial',
  'nickiminaj',
  'npr',
  'nytimes',
  'onedirection',
  'oprah',
  'pink',
  'pitbull',
  'playstation',
  'pmoindia',
  'premierleague',
  'priyankachopra',
  'realdonaldtrump',
  'ricky_martin',
  'rihanna',
  'sachin_rt',
  'selenagomez',
  'shakira',
  'shawnmendes',
  'sportscenter',
  'srbachchan',
  'subhisharma100',
  'taylorswift13',
  'theeconomist',
  'twitter',
  'virendersehwag',
  'whitehouse45',
  'wizkhalifa',
  'youtube',
  'zaynmalik',

  // some top instagram (https://en.wikipedia.org/wiki/List_of_most-followed_Instagram_accounts)
  'beyonce',
  'billieeilish',
  'leomessi',
  'natgeo',
  'nike',
  'snoopdogg',
  'taylorswift',
  'therock',

  // ... and a couple more prominent accounts, subjectively
  '10downingstreet',
  'aoc',
  'carterjwm',
  'dril',
  'gretathunberg',
  'kamalaharris',
  'kremlinrussia_e',
  'potus',
  'rondesantisfl',
  'ukraine',
  'washingtonpost',
  'yousuck2020',
  'zelenskyyua',

  // top japan-specific accounts
  'akiko_lawson',
  'ariyoshihiroiki',
  'asahi',
  'dozle_official',
  'famima_now',
  'ff_xiv_jp',
  'fujitv',
  'gigazine',
  'hajimesyacho',
  'hikakin',
  'jocx',
  'jotx',
  'kiyo_saiore',
  'mainichi',
  'matsu_bouzu',
  'naomiosaka',
  'nhk',
  'nikkei',
  'nintendo',
  'ntv',
  'oowareware1945',
  'pamyurin',
  'poke_times',
  'rolaworld',
  'seikintv',
  'starbucksjapan',
  'tbs',
  'tbs_pr',
  'tvasahi',
  'tvtokyo',
  'yokoono',
  'yomiuri_online',

  // top brazil-specific accounts
  'brasildefato',
  'claudialeitte',
  'correio',
  'em_com',
  'estadao',
  'folha',
  'gazetadopovo',
  'ivetesangalo',
  'jairbolsonaro',
  'jornaldobrasil',
  'jornaloglobo',
  'lucianohuck',
  'lulaoficial',
  'marcosmion',
  'paulocoelho',
  'portalr7',
  'rede_globo',
  'zerohora',
]

// naive, incomplete list of slurs and unacceptable words
const slurs = [
  'bluegum',
  'chink',
  'chinks',
  'coolie',
  'coolies',
  'coon',
  'coons',
  'coont',
  'golliwog',
  'golliwogs',
  'gook',
  'gooks',
  'gyp',
  'gyps',
  'half-breed',
  'halfbreed',
  'half-breeds',
  'halfbreeds',
  'heeb',
  'heebs',
  'hitler',
  'kaffer',
  'kaffers',
  'kaffir',
  'kaffirs',
  'kaffre',
  'kaffres',
  'kafir',
  'kafirs',
  'kike',
  'kikes',
  'kkk',
  'klukluxklan',
  'muzzie',
  'n1gga',
  'n1gger',
  'nazi ',
  'negorid',
  'negress',
  'nig',
  'nigg3r',
  'nigg4h',
  'nigga',
  'niggah',
  'niggas',
  'niggaz',
  'nigger',
  'niggerachi',
  'niggerette',
  'niggerican',
  'niggerino',
  'niggeroid',
  'niggers',
  'nigglet',
  'nigguh',
  'nigguhs',
  'nig-nog',
  'nig-nogs',
  'nigs',
  'paki',
  'pakis',
  'pedophile',
  'pickaninnie',
  'pickaninnies',
  'pickaninny',
  'pickaninnys',
  'raghead',
  'ragheads',
  'redskin',
  'sambo',
  'sambos',
  'spade',
  'spades',
  'spic',
  'spics',
  'squaw',
  'squaws',
  'wetback',
  'wetbacks',
  'yid',
  'yids',
]

export const reservedSubdomains: Record<string, boolean> = [
  ...atpSpecific,
  ...commonlyReserved,
  ...famousAccounts,
  ...slurs,
].reduce((acc, cur) => {
  return {
    ...acc,
    [cur]: true,
  }
}, {})
