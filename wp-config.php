<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'ss_new_2017');

/** MySQL database username */
define('DB_USER', 'johnnya23');

/** MySQL database password */
define('DB_PASSWORD', 'eDK35{PGndd@');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
define('WP_MEMORY_LIMIT', '512M');
/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', ', ,Opq~XS?cr<Ic[.6Jxy-:#SS00>C ?M4UFXQ] Mf+|Hc-{CS>M:H/[*AB+<kl-');
define('SECURE_AUTH_KEY', 'N5~`%`Wz~.lHHt}oWQwJ,IC@*$_wh=+Wsm{nb`3Cai5/&3=)lG0-?+ d<+lv&[.1');
define('LOGGED_IN_KEY', 'Gm!}CC>RC0v+$nfCX-|Y80TQ~~Bp<*.ZkncARoKY4tg0ym9Z?p8mAhvQ5 ?!Q]^$');
define('NONCE_KEY', 'e,q/+)UeWA;Wv5iEP$E~U#DhkC.d3nQg}+IzAPqgRkcB=%D3D&<+-8k[8d^++{jE');
define('AUTH_SALT', 'DUfI+rE/Fqy/wpiM`aOWn73.SCaJ|%c+gv|p0j=,)KeyL@0dU0=0-ZhCg9eq_!(B');
define('SECURE_AUTH_SALT', '-5$FuW{y,pXE]Pvy|e/8$?3w>x=x{Zw5lr<1y@-W+I&3->)~>o8Uhy<F.tYxuW!L');
define('LOGGED_IN_SALT', '^R+s+*ws#11:d^&T6E0[#A<*!mrSNwYfK9 6TG=uWG;30S(Ddw^|UUu`E6GuwP`g');
define('NONCE_SALT', '{}K#7(-*,!yCy*hsw0}+9in&}I|*|lsym,C(uZMDqI{}-_V)-k.]5tB/E41FUQ1y');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
