import { createClient } from '@supabase/supabase-js';

// 服务器端 Supabase 客户端封装
// 通过环境变量读取 Supabase 的 URL 与匿名密钥
export const SUPABASE_ENV_VARS = {
  url: process.env.SUPABASE_URL,
  anonKey: process.env.SUPABASE_ANON_KEY
} as const;

if (!SUPABASE_ENV_VARS.url || !SUPABASE_ENV_VARS.anonKey) {
  throw new Error(
    'Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables'
  );
}

// 单例客户端，避免每次请求都创建新实例
export const supabase = createClient(
  SUPABASE_ENV_VARS.url,
  SUPABASE_ENV_VARS.anonKey
);


