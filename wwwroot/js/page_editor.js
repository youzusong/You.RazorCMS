$(function () {

    var modules = {

        'Carousel': {
            name: '輪播圖',
            styles: [
                { value: 'A', label: '一般輪播' },
            ],
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
        },

        'PicWithTxt': {
            name: '簡易圖文',
            styles: [
                { value: 'A1', label: '左圖右文' },
                { value: 'B1', label: '左文右圖' }
            ],
            defaultData: {
                src: '/wwwroot/media/editor/modules/PicWithTxt/pic.jpg',
                title: '標題',
                desc: '內容',
                btn: {
                    txt: '查看詳情',
                    link: 'http://www.handcome.com.tw'
                }
            }
        }

    }

    var tmpModuleId = 100;
    var $viewModules = $('#u_page_view_modules');
    var $viewStyles = $('#u_page_view_styles');

    function initEditor() {
        initView();
    }

    function initView() {
        var modulesHtml = '';
        var stylesHtml = '';

        $.each(Object.keys(modules), function (index, key) {
            modulesHtml += '<div class="u_module_item" data-key="' + key + '">' + modules[key].name + '</div>';
            stylesHtml += '<div class="u_module_grp" data-key="' + key + '">';
            $.each(modules[key].styles, function (sIndex, sItem) {
                stylesHtml += '<div class="u_style_item" data-value="' + sItem.value + '">' + sItem.label + '</div>';
            });
            stylesHtml += '</div>';
        });

        $viewModules.find('.u_pnl_main').html(modulesHtml);
        $viewStyles.find('.u_pnl_main').html(stylesHtml);

        // 選中模組
        $viewModules.on('click', '.u_module_item', function () {
            var key = $(this).data('key');
            var $curr = $viewStyles.find('.u_module_grp[data-key=' + key + ']');


            $curr.show();
            $curr.siblings().hide();

            $viewModules.hide();
            $viewStyles.show();
        });

        // 選中版型


    }


    initEditor();
    return;




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






