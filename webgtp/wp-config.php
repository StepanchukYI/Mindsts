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
define('DB_NAME', 'webgtp');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         '-@^[cJAj+Zo=ydR7jGhd$V:,ALz4IlrYTLp&nq2}DR.BZuNJ@uD9n3mre<f~U$Gq');
define('SECURE_AUTH_KEY',  '+O?vAmyF_cptXB-?#,xM[k6P/bdaqM!]%/bh$TX;~ZC0bQ@T?dC7poP2RrXOyq_&');
define('LOGGED_IN_KEY',    '.WpHpF%6q8VGbFP=*cnPz6u,6c+lGDJqI(3=oY<w2;H=noWoyAfEKGes*%>1c`So');
define('NONCE_KEY',        '!@y q6![%PMp_TtT:R0ZC/d2;?bPk|kBwZ)&Qv-L<rv1/CU9CzJ]~M&PT#hN]2DS');
define('AUTH_SALT',        'A5L*NR;)}*NFJKWgp)QE+FRlPmDT02__=Uv^A.:xnD3(DJG;$<8E@WBt{MGT.i?z');
define('SECURE_AUTH_SALT', 'xv7zD3R_=/XbIbZ(}IS2jtue#HY{%4a3]VylJH;,AWo#m{`,oHKRB`c,L(dLT-[+');
define('LOGGED_IN_SALT',   'h4PD?m-Sh?GcmG59JIV?pbU/hAVw4v_=A>9#2IaOJV[R1X#v]s<j9>O{u0B);5zG');
define('NONCE_SALT',       'Ts-YG]Vrv D;8il# Lpk<ASFb@MgMuw58v~h>g+9Q+g4nw,q)ER=be>LU-$p)W/N');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'ojcql_';

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
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
