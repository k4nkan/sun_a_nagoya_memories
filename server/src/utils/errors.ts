export const Errors = {
  // パスワード不一致の際のエラー
  INVALID_PASSWORD: { status: 401, message: "invalid password" },

  // 無効なトークンの際のエラー
  INVALID_TOKEN: { status: 401, message: "invalid token" },

  // トークンがない際のエラー
  MISSING_TOKEN: { status: 401, message: "token missing" },

  // day がない際のエラー
  MISSING_DAY: { status: 400, message: "can't found day query" },

  // フォームで項目に欠けがある際のエラー
  NO_FILE_OR_DAY: { status: 400, message: "no file or day" },

  // urlの取得に失敗した際のエラー
  PUBLIC_URL_FAIL: { status: 500, message: "failed to get public URL" },

  // ストレージからのデータ取得に失敗した際のエラー
  STORAGE_GET_FAIL: { status: 500, message: "failed to get table data" },

  // アップロード失敗の際のエラー
  STORAGE_UPLOAD_FAIL: (msg = "upload failed") => ({
    status: 500,
    message: msg,
  }),

  // データベースへの挿入に失敗した際のエラー
  INSERT_FAIL: (msg = "failed to insert data") => ({
    status: 500,
    message: msg,
  }),

  UNKNOWN_ERROR: (msg = "unknown error") => ({ status: 500, message: msg }),
};
