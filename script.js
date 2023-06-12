$(document).ready(function() {
    $('#fetchDataBtn').click(function() {
        $.ajax({
            url: 'your_api_endpoint',  // 替換為您的 API 端點
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                // 成功接收到回應時的處理程式碼
                console.log(response);   // 在控制台中顯示回應資料
                $('#dataContainer').html('<pre>' + JSON.stringify(response, null, 2) + '</pre>');
            },
            error: function(xhr, status, error) {
                // 發生錯誤時的處理程式碼
                console.log(error);      // 在控制台中顯示錯誤訊息
                $('#dataContainer').text('發生錯誤 : 怎麼可能會錯誤，我期末要過啦! ' + error);
            }
        });
    });
});
