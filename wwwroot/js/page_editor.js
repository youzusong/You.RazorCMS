$(function () {

    var tmpModuleId = 100;
    var $view = $('#u_pnl_view_body');
    var $pnlModules = $('#u_pnl_modules');
    var $pnlModuleStyles = $('#u_pnl_modulestyles');
    var $pnlModuleForm = $('#u_pnl_moduleform');

    const ModuleFieldTypes = {
        Text: 'text',
        TextArea: 'textarea',
        CheckBox: 'checkbox',
        Button: 'button',
        Image: 'image',
        ImageArray: 'imageArray'
    };

    // 所有模組
    var modules = {

        Carousel: {
            label: '輪播圖',
            templates: [
                { value: 'A', label: '一般輪播', cover: '' },
                { value: 'B', label: '大圖輪播', cover: '' }
            ],
            contentFields: [
                { name: 'items', type: 'imageArray', label: '輪播圖檔' },
                { name: 'interval', type: 'number', label: '輪播間隔' }
            ],
            defaultData: {
                container: {
                    margin: true,
                    padding: false,
                    rounded: [1, 1, 1, 1],
                    bgColor: 'none',
                    themeColor: 'light'
                },
                content: {
                    interval: 2000,
                    items: [
                        { title: '標題111', image: '/image/demo/Carousel_1.jpg' },
                        { title: '標題222', image: '/image/demo/Carousel_2.jpg' },
                        { title: '標題333', image: '/image/demo/Carousel_3.jpg' }
                    ]
                }
            },

            buildViewHtml(id, template, data) {
                var containerData = data.container;
                var contentData = data.content;
                var entityId = 'u_module_entity-' + id;
                var html = '';
                html += '<div class="u_module u_module-Carousel u_module-Carousel-' + template + (containerData.margin ? ' mb-3' : ' mb-0') + '">';
                html += '  <div class="container">';

                html += '    <div id="' + entityId + '" class="carousel slide" data-bs-ride="carousel">';
                html += '      <div class="carousel-inner">';

                $.each(contentData.items, function (index, item) {
                    html += '    <div class="carousel-item' + (index == 0 ? ' active' : '') + '" data-bs-interval="' + contentData.interval + '">\
                                   <img src="' + item.image + '" />\
                                 </div>';
                });

                html += '      </div>';
                html += '      <button class="carousel-control-prev" type="button" data-bs-target="#' + entityId + '" data-bs-slide="prev">\
                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
                                 <span class="visually-hidden">Previous</span>\
                               </button >';
                html += '      <button class="carousel-control-next" type="button" data-bs-target="#' + entityId + '" data-bs-slide="next">\
                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>\
                                 <span class="visually-hidden">Next</span>\
                               </button >';
                html += '    </div>';

                html += '  </div>';
                html += '</div>';
                return html;
            }
        },

        PicWithTxt: {
            label: '圖文並列',
            templates: [
                { value: 'A1', label: '左圖右文', cover: '' },
                { value: 'A2', label: '左文右圖', cover: '' }
            ],
            contentFields: [
                { name: 'pic', type: 'image', label: '圖檔' },
                { name: 'title', type: 'text', label: '標題' },
                { name: 'desc', type: 'textarea', label: '描述' },
                { name: 'btn', type: 'button', label: '按鈕' }
            ],
            defaultData: {
                container: {
                    margin: true,
                    padding: false,
                    rounded: [1, 1, 1, 1],
                    bgColor: 'none',
                    themeColor: 'light'
                },
                content: {
                    pic: '/image/demo/PicWithTxt_pic.jpg',
                    title: '標題內容...',
                    desc: '描述內容...',
                    btn: { txt: '查看詳情', link: '' },
                    padding: false
                }
            },
            buildViewHtml(id, template, data) {
                var containerData = data.container;
                var contentData = data.content;
                var isLPRT = template == 'A1';
                var isLight = containerData.themeColor == 'light';
                var isPadding = contentData.padding;

                var html = '';
                html += '<div class="u_module u_module-PicWithTxt u_module-PicWithTxt-' + template + (isPadding ? ' u_module-PicWithTxt-' + template + '--padding' : '') + (containerData.margin ? ' mb-3' : ' mb-0') + '">';
                html += '  <div class="container">';

                html += '    <div class="row g-0 rounded-3 text-bg-' + containerData.themeColor + '">';

                if (isLPRT) {
                    html += '      <div  class="col-12 col-lg-6">';
                    html += '        <div class="u_module-PicWithTxt_pic">';
                    html += '          <img class="u_module-PicWithTxt_pic_img' + (isPadding ? ' rounded-3' : '') + '" src="' + contentData.pic + '" />';
                    html += '        </div>';
                    html += '      </div>';
                    html += '      <div class="col-12 col-lg-6">';
                    html += '        <div class="u_module-PicWithTxt_txt">';
                    html += '          <div class="u_module-PicWithTxt_txt_title fs-3 mb-3">' + contentData.title + '</div>';
                    html += '          <div class="u_module-PicWithTxt_txt_desc fs-5 mb-2">' + contentData.desc + '</div>';
                    html += '          <div class="u_module-PicWithTxt_txt_act text-end"><a href="/" class="btn ' + (isLight ? 'btn-primary' : 'btn-outline-light') + '">' + contentData.btn.txt + '</a></div>';
                    html += '        </div>';
                    html += '      </div>';
                } else {
                    html += '      <div class="col-12 col-lg-6 u_module-PicWithTxt_txt--source">';
                    html += '        <div class="u_module-PicWithTxt_txt">';
                    html += '          <div class="u_module-PicWithTxt_txt_title fs-3 mb-3">' + contentData.title + '</div>';
                    html += '          <div class="u_module-PicWithTxt_txt_desc fs-5 mb-2">' + contentData.desc + '</div>';
                    html += '          <div class="u_module-PicWithTxt_txt_act text-start"><a href="/" class="btn ' + (isLight ? 'btn-primary' : 'btn-outline-light') + '">' + contentData.btn.txt + '</a></div>';
                    html += '        </div>';
                    html += '      </div>';
                    html += '      <div  class="col-12 col-lg-6 ">';
                    html += '        <div class="u_module-PicWithTxt_pic">';
                    html += '          <img class="u_module-PicWithTxt_pic_img' + (isPadding ? ' rounded-3' : '') + '" src="' + contentData.pic + '" />';
                    html += '        </div>';
                    html += '      </div>';
                    html += '      <div class="col-12 col-lg-6 u_module-PicWithTxt_txt--clone">';
                    html += '        <div class="u_module-PicWithTxt_txt">';
                    html += '          <div class="u_module-PicWithTxt_txt_title fs-3 mb-3">' + contentData.title + '</div>';
                    html += '          <div class="u_module-PicWithTxt_txt_desc fs-5 mb-2">' + contentData.desc + '</div>';
                    html += '          <div class="u_module-PicWithTxt_txt_act text-end"><a href="/" class="btn ' + (isLight ? 'btn-primary' : 'btn-outline-light') + '">' + contentData.btn.txt + '</a></div>';
                    html += '        </div>';
                }

                html += '    </div>';

                html += '  </div>';
                html += '</div>';
                return html;
            }
        }
    }

    // HTML助手
    var htmlHelper = {
        buildeMarginClassName() {

        },

        builderTextClassName() {

        },

        builderButtonClassName() {

        },

        builderModuleFieldFormHtml(moduleId, field) {
            var id = 'uField_' + moduleId + '_' + field.name;
            var html = '';
            html += '<div class="u_form_field" data-name="' + field.name + '" data-type="' + field.type + '">';
            html += '  <div class="mb-3">';
            html += '    <label class= "form-label">' + field.label + '</label>';

            switch (field.type) {
                case ModuleFieldTypes.Text:
                    html += '<input type="text" class="form-control" value="' + field.value + '" />';
                    break;

                case ModuleFieldTypes.TextArea:
                    html += '<textarea  class="form-control" rows="3">' + field.value + '</textarea>';
                    break;

                case ModuleFieldTypes.CheckBox:
                    html += '<div class="form-check form-switch">\
                               <input class="form-check-input" type="checkbox" role="switch" id="' + id + '"' + (field.value ? ' checked' : '') + ' />\
                               <label class="form-check-label" for="'+ id + '"></label>\
                             </div>';
                    break;

                case ModuleFieldTypes.Button:
                    html += '<div class="row mb-3">\
                               <div class="col-3">文字</div>\
                               <div class="col-9"><input type="text" class="form-control" data-name="txt" value="' + field.value.txt + '" /></div>\
                             </div>\
                             <div class="row mb3">\
                               <div class="col-3">鏈接</div>\
                               <div class="col-9"><input type="text" class="form-control" data-name="link" value="' + field.value.link +'" /></div>\
                             </div>';
                    break;

                case ModuleFieldTypes.Image:
                    html += '<div><img src="' + field.value + '" class="img-thumbnail" /></div>';
                    break;

                default:
                    html += '<input type="text" class="form-control" value="' + field.value + '" />';
                    break;
            }

            html += '  </div>';
            html += '</div>';
            return html;
        },

        builderModuleContainerFormHtml(moduleId, containerData) {
            var html = '';
            html += this.builderModuleFieldFormHtml(moduleId, {
                name: 'margin',
                label: '外部間距',
                type: 'checkbox',
                value: containerData.margin
            });
            html += this.builderModuleFieldFormHtml(moduleId, {
                name: 'padding',
                label: '內部間距',
                type: 'checkbox',
                value: containerData.padding
            });
            return html;
        },

        builderModuleFormHtml(moduleId, moduleData, moduleContentFields) {
            var that = this;
            var html = '';
            html += '<div class="u_module_form">';
            html += '  <div class="u_module_form_grp" id="u_module_form_grp-container">';
            html += '    <div class="u_module_form_grp_header">';
            html += '      <h3>容器</h3>';
            html += '    </div>';
            html += '    <div class="u_module_form_grp_body">';
            html += that.builderModuleContainerFormHtml(moduleId, moduleData.container);
            html += '    </div>';
            html += '  </div>';
            html += '  <div class="u_module_form_grp" id="u_module_form_grp-content">';
            html += '    <div class="u_module_form_grp_header">';
            html += '      <h3>內容</h3>';
            html += '    </div>';
            html += '    <div class="u_module_form_grp_body">';
            $.each(moduleContentFields, function (index, field) {
                field.value = moduleData.content[field.name];
                html += that.builderModuleFieldFormHtml(moduleId, field);
            });
            html += '    </div>';
            html += '  </div>';
            html += '</div>';
            return html;
        },

        getModuleFieldValue($field, fieldType) {
            switch (fieldType) {
                case ModuleFieldTypes.Text:
                    return $field.find('input[type=text]').val().trim();

                case ModuleFieldTypes.TextArea:
                    return $field.find('textarea').val().trim();

                case ModuleFieldTypes.CheckBox:
                    return false;

                case ModuleFieldTypes.Button:
                    return {
                        txt: $field.find('input[data-name=txt]').val().trim(),
                        link: $field.find('input[data-name=link]').val().trim()
                    };

                case ModuleFieldTypes.Image:
                    return $field.find('img').attr('src');

                default:
                    return '';
            }
        }
    };

    // 初始化編輯器
    function initEditor() {
        initPages();
        initModules();
    }

    // 初始化頁面
    function initPages() {

    }

    // 初始化模組
    function initModules() {
        var modulesHtml = '';
        var moduleStylesHtml = '';

        $.each(Object.keys(modules), function (index, key) {
            modulesHtml += '<div class="u_module_item d-grid" data-value="' + key + '">\
                              <button class="btn btn-primary btn-lg"> ' + modules[key].label + '</button>\
                            </div> ';

            moduleStylesHtml += '<div class="u_module_grp" data-value="' + key + '">';
            $.each(modules[key].templates, function (sIndex, sItem) {
                moduleStylesHtml += '<div class="u_style_item d-grid" data-value="' + sItem.value + '">\
                                 <button class="btn btn-warning btn-lg">' + sItem.label + '</button>\
                               </div > ';
            });
            moduleStylesHtml += '</div>';
        });

        $pnlModules.find('.u_pnl_body').html(modulesHtml);
        $pnlModuleStyles.find('.u_pnl_body').html(moduleStylesHtml);

        $pnlModules.on('click', '.u_module_item', selectModule);
        $pnlModuleStyles.on('click', '.u_style_item', selectModuleStyle);
        $pnlModuleStyles.on('click', '.u_btn_show_modules', showModules);
        $pnlModuleForm.on('click', '.u_btn_show_modules', showModules);
        $pnlModuleForm.on('click', '.u_btn_save_module', saveModule);

        $view
            .on('click', '.u_btn_moveup_module', moveUpModule)
            .on('click', '.u_btn_movedown_module', moveDownModule)
            .on('click', '.u_btn_del_module', delModule)
            .on('click', '.u_btn_edit_module', editModule);
    }

    // 新增頁面
    function addPage() {

    }

    // 刪除頁面
    function delPage() {

    }

    // 加載頁面
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

    // 顯示模組
    function showModules() {
        $pnlModules.show();
        $pnlModuleStyles.hide();
        $pnlModuleForm.hide();
    }

    // 選擇模組
    function selectModule() {
        var key = $(this).data('value');
        var $curr = $pnlModuleStyles.find('.u_module_grp[data-value=' + key + ']');

        $curr.show();
        $curr.siblings().hide();

        $pnlModules.hide();
        $pnlModuleStyles.show();
    }

    // 選擇模組版型
    function selectModuleStyle() {
        var $this = $(this);
        var styleValue = $this.data('value');
        var moduleValue = $this.closest('.u_module_grp').data('value');

        tmpModuleId += 1;
        addModule(tmpModuleId, moduleValue, styleValue, modules[moduleValue].defaultData);
    }

    // 新增模組
    function addModule(moduleId, moduleValue, styleValue, moduleData) {
        var moduleViewHtml = modules[moduleValue].buildViewHtml(moduleId, styleValue, moduleData);
        var moduleInnerHtml = '<div class="u_module_inner">' + moduleViewHtml + '</div>';
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
        var moduleWrapHtml = '<div class="u_module_wrap" data-module="' + moduleValue + '" data-style="' + styleValue + '" data-id="' + moduleId + '">' + moduleMaskHtml + moduleInnerHtml + '</div>';

        var $newModule = $(moduleWrapHtml);
        $newModule.data('data', moduleData);
        $newModule.data('props', {
            id: moduleId,
            name: moduleValue,
            style: styleValue,
            data: moduleData
        });
        $view.append($newModule);

        $('.u_module_wrap[data-id="' + moduleId + '"] .u_btn_edit_module').trigger('click');
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
        var moduleName = $moduleWrap.data('module');
        var moduleData = $moduleWrap.data('data');

        var moduleProps = $moduleWrap.data('props');

        $view.find('.u_module_wrap--active').removeClass('u_module_wrap--active');
        $moduleWrap.addClass('u_module_wrap--active');

        $pnlModuleForm.data('moduleId', moduleId);
        $pnlModuleForm.data('moduleName', moduleName);

        var moduleFormHtml = htmlHelper.builderModuleFormHtml(moduleId, moduleData, modules[moduleName].contentFields);
        $pnlModuleForm.find('.u_pnl_body').html(moduleFormHtml);
        $pnlModuleForm.show();
        $pnlModuleStyles.hide();
        $pnlModules.hide();
    }

    // 保存模組
    function saveModule() {
        var moduleId = $pnlModuleForm.data('moduleId');
        var moduleName = $pnlModuleForm.data('moduleName');

        var $containerFiels = $('#u_module_form_grp-container').find('.u_form_field');
        var $contentFields = $('#u_module_form_grp-content').find('.u_form_field');

        var moduleData = {
            container: {},
            content: {}
        };

        moduleData.container = {
            margin: true,
            padding: false,
            rounded: [1, 1, 1, 1],
            bgColor: 'none',
            themeColor: 'light'
        };

        $.each($contentFields, function () {
            var $this = $(this);
            var fieldName = $this.data('name');
            var fieldType = $this.data('type');
            moduleData.content[fieldName] = htmlHelper.getModuleFieldValue($this, fieldType);

        });


        
    }

    // 初始化
    initEditor();
});
