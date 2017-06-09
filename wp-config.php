<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'mindstsc_careem');

/** Имя пользователя MySQL */
define('DB_USER', 'mindstsc_wp_w6i3');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'ukraine-team');

/** Имя сервера MySQL */
define('DB_HOST', '127.0.0.1');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+i%g,&H|0$)yJZm%=*?E=6v$Er5# +q7xN2R<Iu[fzU*Eg?BNM~^]w)g^?RHi!i$');
define('SECURE_AUTH_KEY',  '8,,9dRk A<Y=XoMLCmLTKvh5uAuBgPJRJKtv{H-ln7~^^72JqDy+=f{SuRDGe|d_');
define('LOGGED_IN_KEY',    '=b,dj`ENsQ8od@6^GHGvkPBj-G4C07=WNP]9_v[5.HL[G!Tq#WJ=zg~lv0-JP`Vx');
define('NONCE_KEY',        '`/Rz:NZb g{4xZckrYkzBs,npKEd)MY8b2w_BU28qrb15l>+sV[Ta3b99ZjruZ8o');
define('AUTH_SALT',        '02)vG6T{Kgc!s<r?>n-y%9+tO3=mn5.BRpgTC$ndoaW bgS<;qQ_V.bIuweM_OWY');
define('SECURE_AUTH_SALT', 'lD^{VPv^}<@]^OceJ:mOYZRjsj_ 3 K4Tf776dMcAf4]D#CK,DrUgfOUt0(8g/>s');
define('LOGGED_IN_SALT',   '!LR=}  ^DJV*Z5)2[C1.SXYt7DBfin^PB%X)krYgX<vS*8`#XcO5}*_LwVG<aO l');
define('NONCE_SALT',       'm!jvAI&G]8>R6:QZvX Au`7!N1?BvEBubH=OF:AdXjIs}SDT_9S*:]bfH@Y[:74k');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 * 
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
