document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信動作を防止

    // フォームデータの取得
    var formData = new FormData(event.target);
    var formObject = {};

    // FormDataオブジェクトを普通のオブジェクトに変換
    formData.forEach(function(value, key) {
        formObject[key] = value;
    });

    // オブジェクトのプロパティを個別に表示
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // 結果表示エリアをクリア

    for (var key in formObject) {
        if (formObject.hasOwnProperty(key)) {
            var p = document.createElement('p');
            p.textContent = key + ': ' + formObject[key];
            resultDiv.appendChild(p);
        }
    }
});

