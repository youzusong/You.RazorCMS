$(function () {

    var htmlHelper = {
        buildeMarginClassName() {

        },

        builderTextClassName() {

        },

        builderButtonClassName() {

        }
    };

    var modules = {

        'Carousel': {
            label: '輪播圖',
            styles: [
                { value: 'A', label: '一般輪播', sketch: '<div>效果图</div>' },
                { value: 'B', label: '大圖輪播' }
            ],

            defaultData: {
                interval: 2000,
                width: 'static',
                items: [
                    { title: '標題111', image: '/image/demo/carousel_1.jpg' },
                    { title: '標題222', image: '/image/demo/carousel_2.jpg' },
                    { title: '標題333', image: '/image/demo/carousel_3.jpg' }
                ]
            },

            defData: {
                container: {
                    margin: 0,
                    padding: 0,
                    rounded: '',
                    bgColor: 'default',
                    themeColor: 'default'
                },
                form: {
                    interval: 2000,
                    width: 'static',
                    items: [
                        { title: '標題111', image: '/image/demo/carousel_1.jpg' },
                        { title: '標題222', image: '/image/demo/carousel_2.jpg' },
                        { title: '標題333', image: '/image/demo/carousel_3.jpg' }
                    ]
                }
            },

            renderHtml(id, style, data) {
                var entityId = 'u_module_entity-' + id;
                var html = '<div id="' + entityId + '" class="' + (data.width == 'fluid' ? 'container-fluid' : 'container') + ' g-0">';
                html += '<div class="carousel carousel-dark slide" data-bs-ride="carousel">';
                html += '<div class="carousel-inner">';
                $.each(data.items, function (index, item) {
                    html += '<div class="carousel-item' + (index == 0 ? ' active' : '') + '" data-bs-interval="' + data.interval + '">\
                               <img src="' + item.image + '" />\
                             </div>';
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
                html += '</div>';

                return html;
            },

            renderViewHtml() {
                var html = '';


                return html;
            },

            renderFormHtml() {
                var html = '';

                return html;
            }
        },

        'PicWithTxt': {
            label: '圖文並列',
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
            },
            renderHtml(id, style, data) {
                return '<h3>簡易圖文HTML</h3>';
            }
        }
    }

    var tmpModuleId = 100;
    var $view = $('#u_pnl_view_body');
    var $pnlModules = $('#u_pnl_modules');
    var $pnlStyles = $('#u_pnl_styles');
    var $pnlModuleForm = $('#u_pnl_moduleform');

    function initEditor() {
        initView();
    }

    function initView() {
        var modulesHtml = '';
        var stylesHtml = '';

        $.each(Object.keys(modules), function (index, key) {
            modulesHtml += '<div class="u_module_item d-grid" data-value="' + key + '">\
                              <button class="btn btn-primary btn-lg"> ' + modules[key].label + '</button>\
                            </div> ';

            stylesHtml += '<div class="u_module_grp" data-value="' + key + '">';
            $.each(modules[key].styles, function (sIndex, sItem) {
                stylesHtml += '<div class="u_style_item d-grid" data-value="' + sItem.value + '">\
                                 <button class="btn btn-warning btn-lg">' + sItem.label + '</button>\
                               </div > ';
            });
            stylesHtml += '</div>';
        });

        $pnlModules.find('.u_pnl_body').html(modulesHtml);
        $pnlStyles.find('.u_pnl_body').html(stylesHtml);

        $pnlModules.on('click', '.u_module_item', selectModule);
        $pnlStyles.on('click', '.u_style_item', selectModuleStyle);
        $pnlStyles.on('click', '.u_btn_show_modules', function () {
            $pnlModules.show();
            $pnlStyles.hide();
        });

        $view
            .on('click', '.u_btn_moveup_module', moveUpModule)
            .on('click', '.u_btn_movedown_module', moveDownModule)
            .on('click', '.u_btn_del_module', delModule)
            .on('click', '.u_btn_edit_module', editModule);
    }

    function loadPage() {
        var pageData = {
            id: 1001,
            url: '/test',
            title: '測試頁面',
            description: '測試頁面描述內容',
            keywords: '測試頁面關鍵字內容',
            modules: [

            ]
        };
    }

    // 選擇模組
    function selectModule() {
        var key = $(this).data('value');
        var $curr = $pnlStyles.find('.u_module_grp[data-value=' + key + ']');

        $curr.show();
        $curr.siblings().hide();

        $pnlModules.hide();
        $pnlStyles.show();
    }

    // 選擇模組版型
    function selectModuleStyle() {
        var $this = $(this);
        var styleValue = $this.data('value');
        var moduleValue = $this.closest('.u_module_grp').data('value');

        tmpModuleId += 1;
        addModule(null, tmpModuleId, moduleValue, styleValue, modules[moduleValue].defaultData);
    }

    // 新增模組
    function addModule(prevModuleId, newModuleId, moduleValue, styleValue, moduleData) {
        var moduleClassName = 'u_module u_module-' + moduleValue + ' u_module-' + moduleValue + '-' + styleValue;
        var moduleHtml = modules[moduleValue].renderHtml(newModuleId, styleValue, moduleData);
        var moduleInnerHtml = '<div class="u_module_inner"><div class="' + moduleClassName + '">' + moduleHtml + '</div></div>';
        var moduleMaskHtml = '<div class="u_module_mask">\
                                <div class="u_module_mask_bg"></div>\
                                <div class="u_module_mask_body">\
                                  <div class="u_module_mask_body_act">\
                                    <button class="btn btn-sm btn-success u_btn_moveup_module">上移</button>\
                                    <button class="btn btn-sm btn-success u_btn_movedown_module">下移</button>\
                                    <button class="btn btn-sm btn-danger u_btn_del_module">刪除</button>\
                                    <button class="btn btn-sm btn-primary u_btn_edit_module">編輯</button>\
                                  </div>\
                                </div>\
                              </div>';
        var moduleWrapHtml = '<div class="u_module_wrap" data-module="' + moduleValue + '" data-style="' + styleValue + '" data-id="' + newModuleId + '">' + moduleMaskHtml + moduleInnerHtml + '</div>';

        var $newModule = $(moduleWrapHtml);
        $newModule.data('form-data', moduleData);
        $view.append($newModule);
    }

    // 向上移動模組
    function moveUpModule() {
        var $moduleWrap = $(this).closest('.u_module_wrap');
        $moduleWrap.insertBefore($moduleWrap.prev());
    }

    // 向下移動模組
    function moveDownModule() {
        var $moduleWrap = $(this).closest('.u_module_wrap');
        $moduleWrap.insertAfter($moduleWrap.next());
    }

    // 刪除模組
    function delModule() {
        if (confirm('確定要刪除該模組内容嗎')) {
            var $this = $(this);
            $this.closest('.u_module_wrap').remove();
        }
    }

    // 編輯模組
    function editModule() {
        var $this = $(this);
        var $moduleWrap = $this.closest('.u_module_wrap');
        var moduleId = $moduleWrap.data('id');
        var moduleValue = $moduleWrap.data('module');
        var styleValue = $moduleWrap.data('style');
        var moduleFormData = $moduleWrap.data('form-data');

        $view.find('.u_module_wrap--active').removeClass('u_module_wrap--active');
        $moduleWrap.addClass('u_module_wrap--active');

        console.log(moduleValue, styleValue, moduleFormData);
    }

    // 顯示模組表單
    function showModuleForm(moduleValue, moduleFormData) {

    }

    initEditor();
});
