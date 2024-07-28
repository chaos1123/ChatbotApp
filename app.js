document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信動作を防止

    // フォームデータの取得
    var formData = new FormData(event.target);
    var formObject = {};

    // FormDataオブジェクトを普通のオブジェクトに変換
    formData.forEach(function(value, key) {
        formObject[key] = value;
    });

    // オブジェクトをJSON形式の文字列に変換
    var jsonString = JSON.stringify(formObject, null, 2);

    // 結果を表示
    document.getElementById('result').textContent = jsonString;
});
