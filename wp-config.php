<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'ViP[e$76_NBt~ic_s&b&YkFeW#z|dgmV4^.BfB-HIpit,;q#3rZv^X>d4SB,PewS' );
define( 'SECURE_AUTH_KEY',   '[OId?,@pR#|8]T8%DbVY7X(dGxZk(H(e]A]Y0q9&;1OJ8Ai<r2y 8(%w^hXa}iF5' );
define( 'LOGGED_IN_KEY',     '2HZqX5ry%/T,ophEuu:Z2Kc$5`_Pau2fh#`wKYVYNa/eP/_@ILM:)^}]uKajGa@@' );
define( 'NONCE_KEY',         'UjSzYu(|_]c5j`KJ2mU~p4kF]#K(3v-6_Ib|LW~~0D{NEEfn;v|X5kZI MYs&k02' );
define( 'AUTH_SALT',         '!j,s.MrYhmsDU?`xP5(3eZ;k~$m]Npv#h:Romb{^5YB}. pk*qY@%k_57!& [iYx' );
define( 'SECURE_AUTH_SALT',  'VMMb%dRz`?I;Y2hXJnsA>bBUCkmM6_54I;hA/!wi% 2flx<0GNA3G6MM A(P*D?{' );
define( 'LOGGED_IN_SALT',    '&QDI5+.cT|<} HE&l?8,P:U:Nq<DNx*[qdcbI1OTc CGcw?qtrP[9]d:%>X/;1*i' );
define( 'NONCE_SALT',        '0ee;jtxk #6_T,(!8.sk[LR>COJQIn[E2iLYOO@J%GM_m]UKVV8+<BzA3NG[fOS2' );
define( 'WP_CACHE_KEY_SALT', '-gPd)?!Rh)_-T*KeL71cm3U7Z>&WU^u7Sqp!M`,J;mv;xqV,; 4,vNtD5]xxy^VU' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
