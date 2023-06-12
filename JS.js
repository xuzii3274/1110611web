

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
