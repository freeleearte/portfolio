$(function () {
    $('.email #copyBtn').on('click', function () {
        const text = $('.email #copyTxt').text();

        navigator.clipboard.writeText(text)
            .then(() => alert('이메일이 복사되었습니다.'))
            .catch(err => alert('복사 실패: ' + err));
    });

    $('.personal #copyBtn').on('click', function () {
        const text = $('.personal #copyTxt').text();

        navigator.clipboard.writeText(text)
            .then(() => alert('Personal 인스타그램이 복사되었습니다.'))
            .catch(err => alert('복사 실패: ' + err));
    });

    $('.art #copyBtn').on('click', function () {
        const text = $('.art #copyTxt').text();

        navigator.clipboard.writeText(text)
            .then(() => alert('Art 인스타그램이 복사되었습니다.'))
            .catch(err => alert('복사 실패: ' + err));
    });
});