$(document).ready(() => {
    $('.btn').click(() => {
        const value = $('input[name=country-name]').val();
        // 如果欄位沒有填寫
        if (value === '') {
            alert('必須輸入名稱！');
            return;
        }

        $('.list').empty(); // 先把 .list 清空

        // 如果欄位有填寫
        $.ajax({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v2/name/' + value,
            success: countries => {
                for (let country of countries) {
                    $('.list').append(`<div>${country.alpha2Code} ${country.name} ${country.nativeName}</div>`)
                }
            },
            error: err => {
                alert('系統不穩定！');
            }
        })
    })
})

$(document).ready(function(){
    $('.btn').on('click',function(){
// 1.簡單測試抓到資料功能
        // $.ajax({
        // url:'https://ruienyuski.github.io/git_test/data222.json',
        // 	success:function(response){
        // 		$('.info').html('抓到資料囉!');
        // 	},
        // 	error:function(xhr){
        // 		  alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
        // 	}
        // });

//2.顯示json 在網頁上
        $.ajax({
            type: 'GET',
            url: 'https://ruienyuski.github.io/git_test/data.json',
            dataType: 'json',
            success: function (response) {
                $.each(response, function(index, element) {
                    $('.info').append(
                        $('<li>',
                            {text: [index+1]+'.'+'名稱：'+element.place}),
                        $('<li>',
                            {text: [index+1]+'.'+'地址：'+element.address}),
                        $('<p>')
                    );
                });
            },
            error:function(xhr){
                alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
            }
        });

    });
});
