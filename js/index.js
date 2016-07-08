/**
 * @file
 * @author fanhaiwang
 */

$(function () {
    var $iconDel = $('#iconDel');
    var $iptColor = $('#iptColor');

    $iptColor.on('change', function () {
        $iconDel.css({
            '-webkit-filter': 'drop-shadow(' + $iptColor.val() + ' 20px 0)',
            'filter': 'drop-shadow(' + $iptColor.val() + ' 20px 0)'
        });
    });
});
