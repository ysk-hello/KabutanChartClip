/**
 * キーボードを押した時の処理
 * @param {*} event イベント
 */
document.body.onkeydown = function (event) {
	if (event.key === "Escape") {
		let company = document.querySelector('#header > div.fs0 > div > ol > li:nth-child(2) > a > span').innerText;
		let today = new moment();
		let fileName = company + '_' + today.format('YYYYMMDD') + '.png';

		html2canvas(document.querySelector('#kc_area')).then((canvas) => {
			const link = document.createElement('a');
			link.href = canvas.toDataURL();
			link.download = fileName;
			link.click();

			canvas.toBlob(async (blob) => {
				// 画像データをクリップボードに書き込む
				const item = new ClipboardItem({
					'image/png': blob
				});

				await navigator.clipboard.write([item]);
				//window.alert('クリップボードにコピーしました。');
			});
		});
	}
}