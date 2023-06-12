$(document).ready(function() {
    $('#fetchDataBtn').click(function() {
        $.ajax({
            url: 'your_api_endpoint',
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                // 在此處處理成功回應的程式碼
            },
            error: function(xhr, status, error) {
                // 在此處處理錯誤回應的程式碼
            }
        });
    });
});
