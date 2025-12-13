import { type Cookie, createCookie } from '@remix-run/node';

export const themeCookie: Cookie = createCookie('theme', { httpOnly: true });
