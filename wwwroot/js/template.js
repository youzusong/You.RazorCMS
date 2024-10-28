$(function () {

    var modules = {

        'Carousel': {
            styles: ['A'],
            defaultData: {
                interval: 2000,
                items: [
                    { title: '标题111' },
                    { title: '标题222' },
                    { title: '标题333' }
                ]
            },
            renderHtml: function (id, style, data) {
                var entityId = 'hc_module_entity-' + id;
                var html = '<div id="' + entityId + '" class="carousel carousel-dark slide" data-bs-ride="carousel">';

                html += '<div class="carousel-inner">';
                $.each(data.items, function (index, item) {
                    html += '<div class="carousel-item' + (index == 0 ? ' active' : '') + '" data-bs-interval="' + data.interval + '"><h1>' + item.title + '</h1></div>';
                });
                html += '</div>';


                html += '<button class="carousel-control-prev" type="button" data-bs-target="#' + entityId + '" data-bs-slide="prev">\
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
                            <span class="visually-hidden">Previous</span>\
                         </button >';

                html += '<button class="carousel-control-next" type="button" data-bs-target="#' + entityId + '" data-bs-slide="next">\
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>\
                            <span class="visually-hidden">Next</span>\
                         </button >';

                html += '</div>';

                return html;
            }
        }

    }


    var $pageMain = $('#page_mid_body_main');
    var $pageModules = $('#page_right_modules');
    var $pageStyles = $('#page_right_styles');

    var tempModuleId = 100;

    $pageModules.on('click', '.page_right_module_item', function () {
        var name = $(this).data('name');
        var $currGrp = $pageStyles.find('.page_right_style_grp[data-name=' + name + ']');

        $currGrp.show();
        $currGrp.siblings().hide();

        $pageModules.hide();
        $pageStyles.show();
    });

    $pageStyles.on('click', '#btn_backto_modules', function () {
        $pageModules.show();
        $pageStyles.hide();
    });

    $pageStyles.on('click', '.page_right_style_item', function () {
        $(this).addClass('page_right_style_item--active');
        $(this).siblings().removeClass('page_right_style_item--active');
    });

    $pageStyles.on('click', '#btn_add_style', function () {
        tempModuleId += 1;
        var moduleName = 'Carousel';
        var moduleStyle = 'A';

        var moduleId = moduleName + '-' + moduleStyle + '-' + tempModuleId;
        var moduleHtml = modules[moduleName].renderHtml(moduleId, moduleStyle, modules[moduleName].defaultData);
        var $newModule = $('<div class="hc_module hc_module_' + moduleName + ' hc_module_' + moduleName + '_' + moduleStyle + '" data-module-id="' + moduleId + '">' + moduleHtml + '</div>');
        $pageMain.append($newModule);
    });


});






