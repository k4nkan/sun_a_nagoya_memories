// クラスの付与でアニメーション開始
function showLoading() {
  const loading = document.querySelector(".loading");
  if (loading) loading.classList.add("show");
}

// クラスの剥奪でアニメーション終了
function hideLoading() {
  const loading = document.querySelector(".loading");
  if (loading) loading.classList.remove("show");
}

export default { showLoading, hideLoading };
