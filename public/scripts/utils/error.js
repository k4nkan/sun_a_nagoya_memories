export function displayError(errorData, showAlert = true) {
  console.error("⚠️ API Error Response");
  console.error(JSON.stringify(errorData, null, 2));

  if (showAlert) {
    alert(errorData.error?.details || "不明なエラー");
  }
}
