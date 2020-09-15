"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_ERROR = exports.DELETE_USER = exports.ALL_USER = exports.ARTIST_ERROR = exports.DELETE_ARTIST = exports.UPDATE_ARTIST = exports.CLEAN_ARTIST = exports.CREATE_ARTIST = exports.ALL_ARTIST = exports.SETTING_ERROR = exports.GET_SETTING = exports.UPDATE_SETTING = exports.CLEAN_SETTING = exports.CLEAN_TYPE = exports.CLEAN_COLOR = exports.CLEAN_SIZE = exports.VARIANT_ERROR = exports.DELETE_VARIANT = exports.UPDATE_VARIANT = exports.CREATE_VARIANT = exports.DEFAULT_PRICE_VARIANT = exports.DELETE_PRICE_VARIANT = exports.ADD_PRICE_VARIANT = exports.ALL_PRICE_VARIANT = exports.UPDATE_DESCRIPTION_VARIANT = exports.ALL_DESCRIPTION_VARIANT = exports.UPDATE_MERCHANT_PRICE_VARIANT = exports.ALL_MERCHANT_PRICE_VARIANT = exports.UPDATE_IMAGE_VARIANT = exports.ALL_IMAGE_VARIANT = exports.CLEAN_VARIANT = exports.LIST_TYPE = exports.LIST_SIZE = exports.LIST_COLOR = exports.TRADEMARK_ERROR = exports.TRADEMARK_UPDATE_CLASS_WORDS_LIST = exports.TRADEMARK_UPDATE_CLASS_WORD = exports.TRADEMARK_DELETE_WORD = exports.TRADEMARK_UPDATE_WORD = exports.TRADEMARK_CREATE_WORD = exports.CLEAN_TRADEMARK = exports.CATEGORY_ERROR = exports.DELETE_CATEGORY = exports.UPDATE_CATEGORY = exports.CLEAN_CATEGORY = exports.MERGE_CATEGORY = exports.CREATE_CATEGORY = exports.ALL_CATEGORY = exports.KEYWORD_ERROR = exports.DELETE_KEYWORD = exports.UPDATE_KEYWORD = exports.CLEAN_KEYWORD = exports.CREATE_KEYWORD = exports.ALL_KEYWORD = exports.LIST_PRICE_KIDS = exports.LIST_PRICE_HOODIES = exports.LIST_PRICE_CUSHION_COVERS = exports.LIST_PRICE_TOTEBAGS = exports.LIST_PRICE_MUGS = exports.LIST_PRICE_STICKERS = exports.LIST_PRICE_TSHIRTS = exports.CLEAN_PRODUCT = exports.UPDATE_PRODUCT_IMAGESET = exports.LIST_PRODUCT_IMAGESET = exports.PRODUCT_DETAIL = exports.DELETE_PRODUCT = exports.LIST_ALL_PRODUCT_INFO = exports.CREATE_PRODUCT_IMAGES = exports.CREATE_PRODUCT = exports.LIST_PRINT_MODE = exports.LIST_STICKER_TYPE = exports.LIST_ARTIST = exports.PRODUCT_ERROR = exports.ALL_PRODUCT = exports.CLEAN_AUTH = exports.AUTH_ERROR = exports.AUTH_CHECK = exports.AUTH_RESET = exports.AUTH_LOGOUT = exports.AUTH_REGISTER = exports.AUTH_LOGIN = exports.NAV_COLLAPSE_LEAVE = exports.NAV_CONTENT_LEAVE = exports.CHANGE_LAYOUT = exports.FULL_SCREEN_EXIT = exports.FULL_SCREEN = exports.COLLAPSE_TOGGLE = exports.COLLAPSE_MENU = void 0;
// MENU ACTION TYPE
var COLLAPSE_MENU = "COLLAPSE_MENU";
exports.COLLAPSE_MENU = COLLAPSE_MENU;
var COLLAPSE_TOGGLE = "COLLAPSE_TOGGLE";
exports.COLLAPSE_TOGGLE = COLLAPSE_TOGGLE;
var FULL_SCREEN = "FULL_SCREEN";
exports.FULL_SCREEN = FULL_SCREEN;
var FULL_SCREEN_EXIT = "FULL_SCREEN_EXIT";
exports.FULL_SCREEN_EXIT = FULL_SCREEN_EXIT;
var CHANGE_LAYOUT = "CHANGE_LAYOUT";
exports.CHANGE_LAYOUT = CHANGE_LAYOUT;
var NAV_CONTENT_LEAVE = "NAV_CONTENT_LEAVE";
exports.NAV_CONTENT_LEAVE = NAV_CONTENT_LEAVE;
var NAV_COLLAPSE_LEAVE = "NAV_COLLAPSE_LEAVE"; // AUTH ACTION TYPE

exports.NAV_COLLAPSE_LEAVE = NAV_COLLAPSE_LEAVE;
var AUTH_LOGIN = "AUTH_LOGIN";
exports.AUTH_LOGIN = AUTH_LOGIN;
var AUTH_REGISTER = "AUTH_REGISTER";
exports.AUTH_REGISTER = AUTH_REGISTER;
var AUTH_LOGOUT = "AUTH_LOGOUT";
exports.AUTH_LOGOUT = AUTH_LOGOUT;
var AUTH_RESET = "AUTH_RESET";
exports.AUTH_RESET = AUTH_RESET;
var AUTH_CHECK = "AUTH_CHECK";
exports.AUTH_CHECK = AUTH_CHECK;
var AUTH_ERROR = "AUTH_ERROR";
exports.AUTH_ERROR = AUTH_ERROR;
var CLEAN_AUTH = "CLEAN_AUTH"; // PRODUCT ACTION TYPE

exports.CLEAN_AUTH = CLEAN_AUTH;
var ALL_PRODUCT = "ALL_PRODUCT";
exports.ALL_PRODUCT = ALL_PRODUCT;
var PRODUCT_ERROR = "PRODUCT_ERROR";
exports.PRODUCT_ERROR = PRODUCT_ERROR;
var LIST_ARTIST = "LIST_ARTIST";
exports.LIST_ARTIST = LIST_ARTIST;
var LIST_STICKER_TYPE = "LIST_STICKER_TYPE";
exports.LIST_STICKER_TYPE = LIST_STICKER_TYPE;
var LIST_PRINT_MODE = "LIST_PRINT_MODE";
exports.LIST_PRINT_MODE = LIST_PRINT_MODE;
var CREATE_PRODUCT = "CREATE_PRODUCT";
exports.CREATE_PRODUCT = CREATE_PRODUCT;
var CREATE_PRODUCT_IMAGES = "CREATE_PRODUCT_IMAGES";
exports.CREATE_PRODUCT_IMAGES = CREATE_PRODUCT_IMAGES;
var LIST_ALL_PRODUCT_INFO = "LIST_ALL_PRODUCT_INFO";
exports.LIST_ALL_PRODUCT_INFO = LIST_ALL_PRODUCT_INFO;
var DELETE_PRODUCT = "DELETE_PRODUCT";
exports.DELETE_PRODUCT = DELETE_PRODUCT;
var PRODUCT_DETAIL = "PRODUCT_DETAIL";
exports.PRODUCT_DETAIL = PRODUCT_DETAIL;
var LIST_PRODUCT_IMAGESET = "LIST_PRODUCT_IMAGESET";
exports.LIST_PRODUCT_IMAGESET = LIST_PRODUCT_IMAGESET;
var UPDATE_PRODUCT_IMAGESET = "UPDATE_PRODUCT_IMAGESET";
exports.UPDATE_PRODUCT_IMAGESET = UPDATE_PRODUCT_IMAGESET;
var CLEAN_PRODUCT = "CLEAN_PRODUCT"; ///--price--///

exports.CLEAN_PRODUCT = CLEAN_PRODUCT;
var LIST_PRICE_TSHIRTS = "LIST_PRICE_TSHIRTS";
exports.LIST_PRICE_TSHIRTS = LIST_PRICE_TSHIRTS;
var LIST_PRICE_STICKERS = "LIST_PRICE_STICKERS";
exports.LIST_PRICE_STICKERS = LIST_PRICE_STICKERS;
var LIST_PRICE_MUGS = "LIST_PRICE_MUGS";
exports.LIST_PRICE_MUGS = LIST_PRICE_MUGS;
var LIST_PRICE_TOTEBAGS = "LIST_PRICE_TOTEBAGS";
exports.LIST_PRICE_TOTEBAGS = LIST_PRICE_TOTEBAGS;
var LIST_PRICE_CUSHION_COVERS = "LIST_PRICE_CUSHION_COVERS";
exports.LIST_PRICE_CUSHION_COVERS = LIST_PRICE_CUSHION_COVERS;
var LIST_PRICE_HOODIES = "LIST_PRICE_HOODIES";
exports.LIST_PRICE_HOODIES = LIST_PRICE_HOODIES;
var LIST_PRICE_KIDS = "LIST_PRICE_KIDS"; // KEYWORD ACTION TYPE

exports.LIST_PRICE_KIDS = LIST_PRICE_KIDS;
var ALL_KEYWORD = "ALL_KEYWORD";
exports.ALL_KEYWORD = ALL_KEYWORD;
var CREATE_KEYWORD = "CREATE_KEYWORD";
exports.CREATE_KEYWORD = CREATE_KEYWORD;
var CLEAN_KEYWORD = "CLEAN_KEYWORD";
exports.CLEAN_KEYWORD = CLEAN_KEYWORD;
var UPDATE_KEYWORD = "UPDATE_KEYWORD";
exports.UPDATE_KEYWORD = UPDATE_KEYWORD;
var DELETE_KEYWORD = "DELETE_KEYWORD";
exports.DELETE_KEYWORD = DELETE_KEYWORD;
var KEYWORD_ERROR = "KEYWORD_ERROR"; //CATEGORY ACTION TYPE

exports.KEYWORD_ERROR = KEYWORD_ERROR;
var ALL_CATEGORY = "ALL_CATEGORY";
exports.ALL_CATEGORY = ALL_CATEGORY;
var CREATE_CATEGORY = "CREATE_CATEGORY";
exports.CREATE_CATEGORY = CREATE_CATEGORY;
var MERGE_CATEGORY = "MERGE_CATEGORY";
exports.MERGE_CATEGORY = MERGE_CATEGORY;
var CLEAN_CATEGORY = "CLEAN_CATEGORY";
exports.CLEAN_CATEGORY = CLEAN_CATEGORY;
var UPDATE_CATEGORY = "UPDATE_CATEGORY";
exports.UPDATE_CATEGORY = UPDATE_CATEGORY;
var DELETE_CATEGORY = "DELETE_CATEGORY";
exports.DELETE_CATEGORY = DELETE_CATEGORY;
var CATEGORY_ERROR = "CATEGORY_ERROR"; //TRADEMARK ACTION TYPE

exports.CATEGORY_ERROR = CATEGORY_ERROR;
var CLEAN_TRADEMARK = "CLEAN_TRADEMARK";
exports.CLEAN_TRADEMARK = CLEAN_TRADEMARK;
var TRADEMARK_CREATE_WORD = "TRADEMARK_CREATE_WORD";
exports.TRADEMARK_CREATE_WORD = TRADEMARK_CREATE_WORD;
var TRADEMARK_UPDATE_WORD = "TRADEMARK_UPDATE_WORD";
exports.TRADEMARK_UPDATE_WORD = TRADEMARK_UPDATE_WORD;
var TRADEMARK_DELETE_WORD = "TRADEMARK_DELETE_WORD";
exports.TRADEMARK_DELETE_WORD = TRADEMARK_DELETE_WORD;
var TRADEMARK_UPDATE_CLASS_WORD = "TRADEMARK_UPDATE_CLASS_WORD";
exports.TRADEMARK_UPDATE_CLASS_WORD = TRADEMARK_UPDATE_CLASS_WORD;
var TRADEMARK_UPDATE_CLASS_WORDS_LIST = "TRADEMARK_UPDATE_CLASS_WORDS_LIST";
exports.TRADEMARK_UPDATE_CLASS_WORDS_LIST = TRADEMARK_UPDATE_CLASS_WORDS_LIST;
var TRADEMARK_ERROR = "TRADEMARK_ERROR"; //VARIANT ACTION TYPE

exports.TRADEMARK_ERROR = TRADEMARK_ERROR;
var LIST_COLOR = "LIST_COLOR";
exports.LIST_COLOR = LIST_COLOR;
var LIST_SIZE = "LIST_SIZE";
exports.LIST_SIZE = LIST_SIZE;
var LIST_TYPE = "LIST_TYPE";
exports.LIST_TYPE = LIST_TYPE;
var CLEAN_VARIANT = "CLEAN_VARIANT";
exports.CLEAN_VARIANT = CLEAN_VARIANT;
var ALL_IMAGE_VARIANT = "ALL_IMAGE_VARIANT";
exports.ALL_IMAGE_VARIANT = ALL_IMAGE_VARIANT;
var UPDATE_IMAGE_VARIANT = "UPDATE_IMAGE_VARIANT";
exports.UPDATE_IMAGE_VARIANT = UPDATE_IMAGE_VARIANT;
var ALL_MERCHANT_PRICE_VARIANT = "ALL_MERCHANT_PRICE_VARIANT";
exports.ALL_MERCHANT_PRICE_VARIANT = ALL_MERCHANT_PRICE_VARIANT;
var UPDATE_MERCHANT_PRICE_VARIANT = "UPDATE_MERCHANT_PRICE_VARIANT";
exports.UPDATE_MERCHANT_PRICE_VARIANT = UPDATE_MERCHANT_PRICE_VARIANT;
var ALL_DESCRIPTION_VARIANT = "ALL_DESCRIPTION_VARIANT";
exports.ALL_DESCRIPTION_VARIANT = ALL_DESCRIPTION_VARIANT;
var UPDATE_DESCRIPTION_VARIANT = "UPDATE_DESCRIPTION_VARIANT";
exports.UPDATE_DESCRIPTION_VARIANT = UPDATE_DESCRIPTION_VARIANT;
var ALL_PRICE_VARIANT = "ALL_PRICE_VARIANT";
exports.ALL_PRICE_VARIANT = ALL_PRICE_VARIANT;
var ADD_PRICE_VARIANT = "ADD_PRICE_VARIANT";
exports.ADD_PRICE_VARIANT = ADD_PRICE_VARIANT;
var DELETE_PRICE_VARIANT = "DELETE_PRICE_VARIANT";
exports.DELETE_PRICE_VARIANT = DELETE_PRICE_VARIANT;
var DEFAULT_PRICE_VARIANT = "DEFAULT_PRICE_VARIANT";
exports.DEFAULT_PRICE_VARIANT = DEFAULT_PRICE_VARIANT;
var CREATE_VARIANT = "CREATE_VARIANT";
exports.CREATE_VARIANT = CREATE_VARIANT;
var UPDATE_VARIANT = "UPDATE_VARIANT";
exports.UPDATE_VARIANT = UPDATE_VARIANT;
var DELETE_VARIANT = "DELETE_VARIANT";
exports.DELETE_VARIANT = DELETE_VARIANT;
var VARIANT_ERROR = "VARIANT_ERROR";
exports.VARIANT_ERROR = VARIANT_ERROR;
var CLEAN_SIZE = "CLEAN_SIZE";
exports.CLEAN_SIZE = CLEAN_SIZE;
var CLEAN_COLOR = "CLEAN_COLOR";
exports.CLEAN_COLOR = CLEAN_COLOR;
var CLEAN_TYPE = "CLEAN_TYPE"; //SETTING ACTION TYPE

exports.CLEAN_TYPE = CLEAN_TYPE;
var CLEAN_SETTING = "CLEAN_SETTING";
exports.CLEAN_SETTING = CLEAN_SETTING;
var UPDATE_SETTING = "UPDATE_SETTING";
exports.UPDATE_SETTING = UPDATE_SETTING;
var GET_SETTING = "GET_SETTING";
exports.GET_SETTING = GET_SETTING;
var SETTING_ERROR = "SETTING_ERROR"; //ARTIST ACTION TYPE

exports.SETTING_ERROR = SETTING_ERROR;
var ALL_ARTIST = "ALL_ARTIST";
exports.ALL_ARTIST = ALL_ARTIST;
var CREATE_ARTIST = "CREATE_ARTIST";
exports.CREATE_ARTIST = CREATE_ARTIST;
var CLEAN_ARTIST = "CLEAN_ARTIST";
exports.CLEAN_ARTIST = CLEAN_ARTIST;
var UPDATE_ARTIST = "UPDATE_ARTIST";
exports.UPDATE_ARTIST = UPDATE_ARTIST;
var DELETE_ARTIST = "DELETE_ARTIST";
exports.DELETE_ARTIST = DELETE_ARTIST;
var ARTIST_ERROR = "ARTIST_ERROR";
exports.ARTIST_ERROR = ARTIST_ERROR;
var ALL_USER = "ALL_USER";
exports.ALL_USER = ALL_USER;
var DELETE_USER = "DELETE_USER";
exports.DELETE_USER = DELETE_USER;
var USER_ERROR = "USER_ERROR";
exports.USER_ERROR = USER_ERROR;