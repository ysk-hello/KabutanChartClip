/**
 * 拡張機能アイコンクリック時の処理
 */
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: "https://kabutan.jp"
  });
});
