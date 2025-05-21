export const Errors = {
  INVALID_PASSWORD: {
    code: 401,
    message: "invalid password",
    details: "パスワードが間違っています",
  },

  INVALID_TOKEN: {
    code: 401,
    message: "invalid token",
    details: "トークンが不正です",
  },

  MISSING_TOKEN: {
    code: 401,
    message: "token missing",
    details: "トークンが見つかりません",
  },

  MISSING_DAY: {
    code: 400,
    message: "can't found day query",
    details: "クエリ 'day' が不足しています",
  },

  NO_FILE_OR_DAY: {
    code: 400,
    message: "no file or day",
    details: "画像と日付をフォームに入力してください",
  },

  PUBLIC_URL_FAIL: {
    code: 500,
    message: "failed to get public URL",
    details: "画像URLの取得に失敗しました",
  },

  STORAGE_GET_FAIL: {
    code: 500,
    message: "failed to get table data",
    details: "データベースからデータの取得に失敗しました",
  },

  STORAGE_UPLOAD_FAIL: (msg = "upload failed") => ({
    code: 500,
    message: msg,
    details: "画像のアップロード中にエラーが発生しました",
  }),

  INSERT_FAIL: (msg = "failed to insert data") => ({
    code: 500,
    message: msg,
    details: "データベースへの保存に失敗しました",
  }),

  UNKNOWN_ERROR: (msg = "unknown error") => ({
    code: 500,
    message: msg,
    details: "予期しないエラーが発生しました",
  }),
};
