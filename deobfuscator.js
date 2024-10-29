(function () {
  var _0x3d83b5 = _0x3d83b5 || function () {};
  var _0xd184a8 = {
    package: "com.zhuiwenxiaoshuo.app",
    name: "追文小说",
    versionName: "1.1.25",
    versionCode: 0x18aa1,
    minPlatformVersion: 0x42e,
    icon: "/assets/images/logo.png",
    features: [{
      name: "system.animate"
    }, {
      name: "system.request"
    }, {
      name: "system.prompt"
    }, {
      name: "system.router"
    }, {
      name: "system.shortcut"
    }, {
      name: "system.fetch"
    }, {
      name: "system.network"
    }, {
      name: "service.account"
    }, {
      name: "system.storage"
    }, {
      name: "system.device"
    }, {
      name: "system.brightness"
    }, {
      name: "system.app"
    }, {
      name: "service.push"
    }, {
      name: "system.notification"
    }, {
      name: "system.wifi"
    }, {
      name: "system.file"
    }, {
      name: "service.alipay"
    }, {
      name: "service.ad"
    }, {
      name: "system.calendar"
    }, {
      name: "system.package"
    }, {
      name: "system.webview"
    }, {
      name: "service.wxpay",
      params: {
        package: "com.shiyueread.home",
        sign: "MIIGQDCCBCigAwIBAgIJAJa410xto5buMA0GCSqGSIb3DQEBCwUAMIG0MQswCQYDVQQGEwJaSDEQMA4GA1UECAwHSGFpIE5hbjEQMA4GA1UEBwwHSGFpIGtvdTEyMDAGA1UECgwpSGFpbmFuIGd1YW5vdSBOZXR3b3JrIFRlY2hub2xvZ3kgQ28uLCBMdGQxEzARBgNVBAsMCk9wZXJhdGlvbnMxFDASBgNVBAMMC3N5cmVhZHMuY29tMSIwIAYJKoZIhvcNAQkBFhNkZWZhdWx0QGRlZmF1bHQuY29tMB4XDTIyMDMxMDA2NTE1NFoXDTMyMDMwNzA2NTE1NFowgbQxCzAJBgNVBAYTAlpIMRAwDgYDVQQIDAdIYWkgTmFuMRAwDgYDVQQHDAdIYWkga291MTIwMAYDVQQKDClIYWluYW4gZ3Vhbm91IE5ldHdvcmsgVGVjaG5vbG9neSBDby4sIEx0ZDETMBEGA1UECwwKT3BlcmF0aW9uczEUMBIGA1UEAwwLc3lyZWFkcy5jb20xIjAgBgkqhkiG9w0BCQEWE2RlZmF1bHRAZGVmYXVsdC5jb20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC01asXcjKm11x0Ai72IdI+4sCVbDGEHbPcIHJDhtw383fuFZnTdEoQnK1+3OUYmHV9YxT9OBwnfuL/rJHOOsyWjZoe9WUkg4zxQIG96Nr1ioAGqjBKfrDeRlEKkxz82jmijOOYRlekLh2JzpLN65oE70lv8pcPRuzXld741igUvd3blG6Ys6vxHM9PyuQW972osgcxH50bOmOR77G7GgdOFYLsEruL4P3m7/9FuTLF3HqHK5NAF3fOs3pp6sPrmFIGnpdsUSjw++O+TT6lsvC2OHhbpST6pHTsMHdrPsavrKkNe80RmmDI1rlFGfvdWkq8gXHEQSO0ueTDBLfe1UabcCAIvoic8rXC31tAKn72LOSbHzl2726+Ogi3hFAY/d1GAQTL5BNRuaAnL5TXUr9wgTD5UJukiroU9fqnlAlW7g2Yg3XO3eC7mO/nfvzyGyTq5h58CzZ+LOm/IFrDNu+fGa0cskgsQxqVJr+/57b9choaDPEsLi2rfQaJFABEqYZMU7CKzhox5DYNRdIK2mh/AenhcmGuBspx9E225a8XU7c6nZLGDn90IldA/gh3QV85qpfZUy49LKD5cP9W5arePlu/tR79W1H2rsjCzylI9Su6hNIMwNQacHuZhc/jbwbKIiPcTX66NlRIxWxEqIjkYbkN/wTJTnOKZM++lXNNuwIDAQABo1MwUTAdBgNVHQ4EFgQUtW8fbqCF3XYRHPjVmKJar0yKNTUwHwYDVR0jBBgwFoAUtW8fbqCF3XYRHPjVmKJar0yKNTUwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAUc2YZGT86jfrdK4G9Gh55xwl7hUYjEnYG04CB5FR9UXNdOmboySMm2ysMx955kALv1I2gSDAPMsctMGMWEhQEO/nDe7GzQ64OyEJeHvVwRPutXylpMbpbKdr0s4gf6qH45KKWGIHSRsF5wmP2TCACKqy470g//6W53hv09aNLgLYPZ0PiyZK22BW/eWh35foHt4pHulm85nnxJoDNSL5gODoWH+quftMywS4X1Nd7DH/uJGOTFgm1rThKcgo1CqFxtTAVemso9guDTaY7uD70MMNAiyBoSRgwBDq5oKh/Wovsx8LZAUGzjC+75AKklo/75w/7RAxhFSmVYRhJmfGWXUQTycyoOkDZYf+WZiKP9ENVQlLePwJm66Nukehs+iyTKbzyzYsLct7A2isQv5xEc7+PXs1xyOvoTFFSfOX4L7PWIDOOSi38erdNxoiEouttbYH8/mU8676jleMFOdDov7/KoGO6wz+OA2Zz7OOLsMLJu8mFd0PNFH68IJNdWLvOO6iMYZk5rnpMAOuCTM6gIyg0Q9pzzxjTfBxs7ojADrNMkioCV0/cAliiaWALg6jerSO2tGBtC5YC/yue/IjyKk678bLVMO3XT5LZ0GZY9R7/GKcSi8lK14aQdDlxlb69PXJPxMp9AmwavnVBUznhbLRzzcjjmvQcZKcUSa19yI=",
        url: "http://www.syreads.com"
      }
    }, {
      name: "service.share",
      params: {
        appSign: "MIIGQDCCBCigAwIBAgIJAJa410xto5buMA0GCSqGSIb3DQEBCwUAMIG0MQswCQYDVQQGEwJaSDEQMA4GA1UECAwHSGFpIE5hbjEQMA4GA1UEBwwHSGFpIGtvdTEyMDAGA1UECgwpSGFpbmFuIGd1YW5vdSBOZXR3b3JrIFRlY2hub2xvZ3kgQ28uLCBMdGQxEzARBgNVBAsMCk9wZXJhdGlvbnMxFDASBgNVBAMMC3N5cmVhZHMuY29tMSIwIAYJKoZIhvcNAQkBFhNkZWZhdWx0QGRlZmF1bHQuY29tMB4XDTIyMDMxMDA2NTE1NFoXDTMyMDMwNzA2NTE1NFowgbQxCzAJBgNVBAYTAlpIMRAwDgYDVQQIDAdIYWkgTmFuMRAwDgYDVQQHDAdIYWkga291MTIwMAYDVQQKDClIYWluYW4gZ3Vhbm91IE5ldHdvcmsgVGVjaG5vbG9neSBDby4sIEx0ZDETMBEGA1UECwwKT3BlcmF0aW9uczEUMBIGA1UEAwwLc3lyZWFkcy5jb20xIjAgBgkqhkiG9w0BCQEWE2RlZmF1bHRAZGVmYXVsdC5jb20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC01asXcjKm11x0Ai72IdI+4sCVbDGEHbPcIHJDhtw383fuFZnTdEoQnK1+3OUYmHV9YxT9OBwnfuL/rJHOOsyWjZoe9WUkg4zxQIG96Nr1ioAGqjBKfrDeRlEKkxz82jmijOOYRlekLh2JzpLN65oE70lv8pcPRuzXld741igUvd3blG6Ys6vxHM9PyuQW972osgcxH50bOmOR77G7GgdOFYLsEruL4P3m7/9FuTLF3HqHK5NAF3fOs3pp6sPrmFIGnpdsUSjw++O+TT6lsvC2OHhbpST6pHTsMHdrPsavrKkNe80RmmDI1rlFGfvdWkq8gXHEQSO0ueTDBLfe1UabcCAIvoic8rXC31tAKn72LOSbHzl2726+Ogi3hFAY/d1GAQTL5BNRuaAnL5TXUr9wgTD5UJukiroU9fqnlAlW7g2Yg3XO3eC7mO/nfvzyGyTq5h58CzZ+LOm/IFrDNu+fGa0cskgsQxqVJr+/57b9choaDPEsLi2rfQaJFABEqYZMU7CKzhox5DYNRdIK2mh/AenhcmGuBspx9E225a8XU7c6nZLGDn90IldA/gh3QV85qpfZUy49LKD5cP9W5arePlu/tR79W1H2rsjCzylI9Su6hNIMwNQacHuZhc/jbwbKIiPcTX66NlRIxWxEqIjkYbkN/wTJTnOKZM++lXNNuwIDAQABo1MwUTAdBgNVHQ4EFgQUtW8fbqCF3XYRHPjVmKJar0yKNTUwHwYDVR0jBBgwFoAUtW8fbqCF3XYRHPjVmKJar0yKNTUwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAUc2YZGT86jfrdK4G9Gh55xwl7hUYjEnYG04CB5FR9UXNdOmboySMm2ysMx955kALv1I2gSDAPMsctMGMWEhQEO/nDe7GzQ64OyEJeHvVwRPutXylpMbpbKdr0s4gf6qH45KKWGIHSRsF5wmP2TCACKqy470g//6W53hv09aNLgLYPZ0PiyZK22BW/eWh35foHt4pHulm85nnxJoDNSL5gODoWH+quftMywS4X1Nd7DH/uJGOTFgm1rThKcgo1CqFxtTAVemso9guDTaY7uD70MMNAiyBoSRgwBDq5oKh/Wovsx8LZAUGzjC+75AKklo/75w/7RAxhFSmVYRhJmfGWXUQTycyoOkDZYf+WZiKP9ENVQlLePwJm66Nukehs+iyTKbzyzYsLct7A2isQv5xEc7+PXs1xyOvoTFFSfOX4L7PWIDOOSi38erdNxoiEouttbYH8/mU8676jleMFOdDov7/KoGO6wz+OA2Zz7OOLsMLJu8mFd0PNFH68IJNdWLvOO6iMYZk5rnpMAOuCTM6gIyg0Q9pzzxjTfBxs7ojADrNMkioCV0/cAliiaWALg6jerSO2tGBtC5YC/yue/IjyKk678bLVMO3XT5LZ0GZY9R7/GKcSi8lK14aQdDlxlb69PXJPxMp9AmwavnVBUznhbLRzzcjjmvQcZKcUSa19yI=",
        wxKey: "wxf9cfe9377c2396ee"
      }
    }],
    permissions: [{
      origin: "*"
    }],
    "template/official": "demo-template",
    config: {
      logLevel: "debug",
      network: {
        readTimeout: 0x1f40,
        connectTimeout: 0xbb8
      }
    },
    router: {
      entry: "pagesC/Start",
      pages: {
        "pagesA/Main": {
          component: "index"
        },
        "pagesA/WelfareNew": {
          component: "index"
        },
        "pagesB/Money": {
          component: "index"
        },
        "pagesB/Activity": {
          component: "index"
        },
        "pagesB/Vip": {
          component: "index"
        },
        "pagesB/Vip-Agreement": {
          component: "index"
        },
        "pagesB/Login": {
          component: "index"
        },
        "pagesB/Sex": {
          component: "index"
        },
        "pagesB/Setting": {
          component: "index"
        },
        "pagesB/Privacy": {
          component: "index"
        },
        "pagesB/Account": {
          component: "index"
        },
        "pagesB/Subscribe": {
          component: "index"
        },
        "pagesB/Ticket": {
          component: "index"
        },
        "pagesB/Ticket-Describe": {
          component: "index"
        },
        "pagesB/Customer-Service": {
          component: "index"
        },
        "pagesB/Search": {
          component: "index"
        },
        "pagesB/Top": {
          component: "index"
        },
        "pagesC/Start": {
          component: "index"
        },
        "pagesC/Info": {
          component: "index"
        },
        "pagesC/Read": {
          component: "index",
          launchMode: "singleTask"
        },
        "pagesB/Payresult": {
          component: "index"
        },
        "UnionAd/AdPage": {
          component: "index"
        },
        "UnionAd/AdLanding": {
          component: "index"
        },
        "UnionAd/AdReward": {
          component: "index"
        },
        "pagesC/Empty": {
          component: "index"
        },
        "pagesB/Privacy-Setting": {
          component: "index"
        },
        "pagesA/Welfare": {
          component: "index"
        },
        "pagesA/MyIncome": {
          component: "index"
        },
        "pagesA/CashOut": {
          component: "index"
        },
        "pagesA/CashRecord": {
          component: "index"
        },
        "pagesB/Recommend": {
          component: "index"
        },
        "pagesB/Recommend-Read": {
          component: "index"
        },
        "pagesB/Page-Error": {
          component: "index"
        },
        "pagesC/Notice": {
          component: "index"
        },
        "pagesA/BackgroundPage": {
          component: "index",
          launchMode: "singleTask"
        }
      },
      widgets: {}
    },
    subpackages: [{
      name: "pkgB",
      resource: "pagesB"
    }, {
      name: "pkgA",
      resource: "pagesA"
    }],
    display: {
      themeMode: 0x0,
      menu: false,
      titleBar: false,
      statusBarImmersive: true,
      statusBarBackgroundOpacity: 0x0,
      statusBarTextStyle: "dark",
      menuBarData: {
        menuBar: false
      },
      pages: {
        "pagesB/Money": {
          statusBarTextStyle: "light"
        },
        "pagesB/Top": {
          statusBarTextStyle: "light"
        },
        "pagesB/Vip": {
          statusBarTextStyle: "light"
        },
        "pagesA/Welfare": {
          statusBarTextStyle: "light"
        },
        "pagesC/Read": {
          fullScreen: true,
          fitCutout: "portrait|landscape",
          menuBarData: {
            menuBar: false
          }
        },
        "pagesA/WelfareNew": {
          fullScreen: true,
          fitCutout: "portrait|landscape",
          statusBarTextStyle: "light",
          menuBarData: {
            menuBar: false
          }
        },
        "pagesA/Main": {
          menuBarData: {
            menuBar: true
          }
        },
        "UnionAd/AdPage": {
          fullScreen: true,
          titleBar: false,
          statusBarImmersive: true,
          menu: false,
          menuBarData: {
            menuBar: false
          }
        },
        "UnionAd/AdReward": {
          fullScreen: true,
          titleBar: false,
          statusBarImmersive: true,
          menu: false,
          menuBarData: {
            menuBar: false
          }
        },
        "UnionAd/AdLanding": {
          fullScreen: true,
          titleBar: false,
          statusBarImmersive: true,
          menu: false,
          menuBarData: {
            menuBar: false
          }
        },
        "pagesC/Empty": {
          fullScreen: true,
          fitCutout: "portrait|landscape"
        },
        "pagesA/BackgroundPage": {
          fullScreen: true,
          fitCutout: "portrait|landscape",
          menuBarData: {
            menuBar: false
          }
        }
      },
      homePage: "pagesA/Main"
    }
  };
  var _0x2eac28 = function () {
    return (() => {
      var _0x45468b = {
        0xcb04: (_0x2ce80e, _0x2ab82a, _0x3b1f90) => {
          _0x2ce80e.exports = function (_0x3cdec5, _0x50c871, _0xb1f479) {
            "use strict";

            Object.defineProperty(_0x50c871, "__esModule", {
              value: true
            });
            _0x50c871["default"] = undefined;
            _0x3b1f90(0x27a4);
            _0x3b1f90(0x141e4);
            _0x3b1f90(0x3cd3);
            _0x3b1f90(0x596c);
            _0x3b1f90(0x91a);
            _0x3b1f90(0x10e97);
            _0x3b1f90(0x62e);
            _0x3b1f90(0xfac9);
            var _0x34bf51 = _0x3b1f90(0xa662) && _0x3b1f90(0xa662).__esModule ? _0x3b1f90(0xa662) : {
              default: _0x3b1f90(0xa662)
            };
            var _0x7a1b52 = _0x3b1f90(0xd7b2) && _0x3b1f90(0xd7b2).__esModule ? _0x3b1f90(0xd7b2) : {
              default: _0x3b1f90(0xd7b2)
            };
            var _0xb34f62 = _0x3b1f90(0x1808e) && _0x3b1f90(0x1808e).__esModule ? _0x3b1f90(0x1808e) : {
              default: _0x3b1f90(0x1808e)
            };
            var _0x5687a6 = _0x3b1f90(0x154d1) && _0x3b1f90(0x154d1).__esModule ? _0x3b1f90(0x154d1) : {
              default: _0x3b1f90(0x154d1)
            };
            var _0xfe8272 = _0x3b1f90(0xbae5) && _0x3b1f90(0xbae5).__esModule ? _0x3b1f90(0xbae5) : {
              default: _0x3b1f90(0xbae5)
            };
            var _0x529a21 = _0x3b1f90(0x4e53) && _0x3b1f90(0x4e53).__esModule ? _0x3b1f90(0x4e53) : {
              default: _0x3b1f90(0x4e53)
            };
            var _0x3017f1 = _0x3b1f90(0x1201d) && _0x3b1f90(0x1201d).__esModule ? _0x3b1f90(0x1201d) : {
              default: _0x3b1f90(0x1201d)
            };
            var _0x4becef = _0x3b1f90(0x101b0) && _0x3b1f90(0x101b0).__esModule ? _0x3b1f90(0x101b0) : {
              default: _0x3b1f90(0x101b0)
            };
            var _0x1b112c = _0x3b1f90(0xe02f) && _0x3b1f90(0xe02f).__esModule ? _0x3b1f90(0xe02f) : {
              default: _0x3b1f90(0xe02f)
            };
            var _0x1b60f6 = _0xb1f479("@app-module/system.app") && _0xb1f479("@app-module/system.app").__esModule ? _0xb1f479("@app-module/system.app") : {
              default: _0xb1f479("@app-module/system.app")
            };
            var _0x13079a = _0xb1f479("@app-module/system.router") && _0xb1f479("@app-module/system.router").__esModule ? _0xb1f479("@app-module/system.router") : {
              default: _0xb1f479("@app-module/system.router")
            };
            var _0xf1b806 = _0x3b1f90(0x18629) && _0x3b1f90(0x18629).__esModule ? _0x3b1f90(0x18629) : {
              default: _0x3b1f90(0x18629)
            };
            (Object.getPrototypeOf(_0x3b1f90.g) || _0x3b1f90.g).regeneratorRuntime = _0x3b1f90(0xaaf3);
            const _0x363b33 = _0x3b1f90(0x28a7)["default"];
            const _0x19c7af = _0x3b1f90(0xb546)["default"];
            const _0x1a2ef4 = _0x3b1f90.g.__proto__ || _0x3b1f90.g;
            _0x1a2ef4.$utils = _0x363b33;
            _0x1a2ef4.$apis = _0x19c7af;
            _0x1a2ef4.TOOLS_UTILS = _0xb34f62["default"];
            _0x1a2ef4.DEVICE_UTILS = _0x5687a6["default"];
            _0x1a2ef4.AD_UTILS = _0x529a21["default"];
            _0x1a2ef4.POP_TOOLS = _0xfe8272["default"];
            _0x1a2ef4.LOG = _0x7a1b52["default"];
            _0x1a2ef4.EVENT_BUS = new _0x3017f1["default"]();
            _0x1a2ef4.ZHX_UUP_UTILS = _0x1b112c["default"];
            _0x50c871["default"] = {
              versionCode: "",
              versionName: "",
              brand: "",
              oaid: "",
              model: "",
              android: "",
              auditOnline: 0x0,
              intent: 0x1,
              deviceInfo: null,
              adInitFailconut: 0x0,
              tacticsName: "",
              pageCodeInfo: {
                pathUrl: "",
                pageOrigin: "",
                pageCode: "DESK_ROOT",
                pathCurUrl: "桌面"
              },
              hapKey: "",
              channelId: "desktop",
              linkId: "x888",
              materialType: "",
              utm_ad_id: "",
              utm_campaign: "",
              utm_content: "",
              utm_source: "",
              boxConfig: null,
              dataCache: null,
              uniqueId: "",
              imei: "",
              utm_term: "",
              utm_medium: "",
              sourceId: "",
              sourcePkg: "",
              isAppHide: false,
              bqt_ad_id: "",
              bqt_ad_position: "",
              addDeskTopDays: 0x0,
              sex: 0x1,
              regId: "",
              tabListType: [0x0, 0x0, 0x0, 0x0, 0x0],
              loginStatus: 0x0,
              isVip: false,
              screenHeight: 0x0,
              isTacticsSdkInit: false,
              readIndoTakeVideTime: 0x0,
              addDeskTopTimes: 0x0,
              regId: null,
              isTencentBackButtonVisible: false,
              tencentBackName: "",
              tencentBackUrl: "",
              tencentBackPkg: "",
              adDefaultImg1: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg1.png",
              adDefaultImg2: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg2.png",
              adDefaultImg3: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg3.png",
              customADMaterialData: "",
              customADMaterialIndex: 0x0,
              readPageStartTime: Date.now(),
              readPageStartTime2: Date.now(),
              lastReadStatus: 0x0,
              addDeskTopStatus: 0x0,
              appIshow: false,
              isScreenShow: false,
              isSecondScreenShow: false,
              userAgent: "",
              timeoutPopTimer: null,
              hap_brand: "",
              launchMode: "singleTask",
              getScreenStatus() {
                return this.isScreenShow;
              },
              onCreate() {
                this.dataCache = {};
                APP_STATISTICS.app_sta_init(this);
                _0x529a21["default"].ad_utils_init();
              },
              onShow() {
                this.getAddDesktopStatus(true);
                if (!this.$def.isAppHide) {
                  return;
                }
                EVENT_BUS.emit("showPage");
                0x0;
                _0x7a1b52["default"]("app------------------->show");
                COMMON_REPORT_UTILS.app_state_report(this.$def.pageCodeInfo.pathCurUrl, "onShow", _0x1b112c["default"].getReportZhxUup());
                const _0x1cfe39 = TACTICS_SDK.getGlobalData("configInfo").config[_0xb34f62["default"].renameConfig("v`jd^to^hrrtd")];
                const _0x3bd8aa = (_0x1cfe39 && _0x1cfe39.val || "").split("&")[0x3];
                if (_0x3bd8aa) {
                  _0x1b112c["default"][_0x3bd8aa](0x1);
                }
                EVENT_BUS.emit("appShow");
              },
              onHide() {
                0x0;
                _0x7a1b52["default"]("app------------------->hide");
                this.showNotification();
                this.getAddDesktopStatus(false);
                this.$def.isAppHide = true;
                COMMON_REPORT_UTILS.app_state_report(this.$def.pageCodeInfo.pathCurUrl, "onHide");
                const _0x308530 = TACTICS_SDK.getGlobalData("configInfo").config[_0xb34f62["default"].renameConfig("v`jd^to^hrrtd")];
                const _0x2887aa = (_0x308530 && _0x308530.val || "").split("&")[0x3];
                if (_0x2887aa) {
                  _0x1b112c["default"][_0x2887aa](0x0);
                }
                EVENT_BUS.emit("appHide");
              },
              onError(_0x4bf036) {
                try {
                  APP_STATISTICS.on_err(_0x4bf036);
                } catch (_0x5ac356) {}
                try {
                  COMMON_REPORT_UTILS.error_log_report(this.$def.pageCodeInfo.pathCurUrl, "" + JSON.stringify(_0x4bf036).substr(0x0, 0x400).trim(), "全局异常", "程序异常");
                } catch (_0xc9a9b5) {}
              },
              async getAddDesktopDays() {
                await _0x363b33.getStorage("addDesktopTimestamp").then(_0x153561 => {
                  if (_0x153561 && !isNaN(Number(_0x153561)) && Number(_0x153561) > 0x0) {
                    let _0x30235f = Number(_0x153561);
                    let _0x1f1bd7 = new Date().getTime();
                    let _0x307c49 = (_0x30235f - _0x30235f % 0x5265c00) / 0x5265c00;
                    let _0x5881f6 = (_0x1f1bd7 - _0x1f1bd7 % 0x5265c00) / 0x5265c00;
                    if (_0x307c49 < _0x5881f6) {
                      this.addDeskTopDays = _0x5881f6 - _0x307c49;
                    }
                  }
                });
              },
              async initDeviceInfo() {
                let _0x4c433a = this;
                return new Promise(async _0x52497b => {
                  await _0x4c433a.getAddDesktopDays();
                  _0x4c433a.versionName = _0x1b60f6["default"].getInfo().versionName;
                  _0x4c433a.versionCode = _0x1b60f6["default"].getInfo().versionCode;
                  await _0x5687a6["default"].getInfo().then(_0x45cb04 => {
                    0x0;
                    _0x7a1b52["default"]("deviceInfo===>", _0x45cb04);
                    let _0xbf7cb8 = _0x45cb04.model;
                    let _0x527a0b = _0x45cb04.brand.toLowerCase();
                    _0x4c433a.hap_brand = _0x527a0b;
                    if ("oppo" == _0x527a0b || "realme" == _0x527a0b || "oneplus" == _0x527a0b) {
                      _0x527a0b = "oppo";
                    } else if ("honor" == _0x527a0b || "huawei" == _0x527a0b || _0x4becef["default"].includes(_0xbf7cb8)) {
                      _0x527a0b = _0xb1f479("@app-module/service.ad").getProvider();
                    } else if ("redmi" == _0x527a0b || "xiaomi" == _0x527a0b || "小米" == _0x527a0b || "Redmi" == _0x527a0b || "小米红米" == _0x527a0b) {
                      _0x527a0b = "xiaomi";
                    } else if ("vivo" == _0x527a0b) {
                      _0x527a0b = "vivo";
                      _0x4c433a.isBrandVivo = true;
                    } else {
                      _0x527a0b = "other";
                    }
                    _0x4c433a.screenHeight = Math.ceil(0x2ee * _0x45cb04.screenHeight / _0x45cb04.screenWidth);
                    _0x4c433a.deviceInfo = _0x45cb04;
                    _0x4c433a.brand = _0x527a0b;
                    _0x4c433a.model = _0x527a0b + " " + _0x45cb04.model;
                  });
                  await _0x5687a6["default"].getUserId().then(_0x89b803 => {
                    _0x4c433a.android = _0x89b803.userId;
                  });
                  await _0x5687a6["default"].getOAID().then(_0x491ef3 => {
                    _0x4c433a.oaid = _0x491ef3.oaid;
                  });
                  _0x52497b();
                });
              },
              getPagesCodeInfo(_0x296c34 = 0x0) {
                let _0xe242c6 = Object.assign({}, this.pageCodeInfo);
                var _0x254b58 = _0x13079a["default"].getState();
                let _0x10441f = _0x34bf51["default"]["" + _0x254b58.path];
                0x0;
                _0x7a1b52["default"]("pageInfo", _0x10441f);
                0x0;
                _0x7a1b52["default"]("originInfo", _0xe242c6);
                return _0x10441f && _0xe242c6.pageCode == _0x10441f.pageCode && _0xe242c6.pathCurUrl == _0x10441f.pathUrl ? ((0x0, _0x7a1b52["default"])("getPagesCodeInfo==================页面2code" + this.pageCodeInfo.pageCode + "_来源code" + this.pageCodeInfo.pageOrigin, this.pageCodeInfo), this.pageCodeInfo) : (AD_SDK_UTILS.updataAdConfigData({
                  uploadFristPopClick: 0x3
                }), _0x10441f && "MAIN" == _0x10441f.pageCode && _0xe242c6.pageCode == _0x10441f["pageCode" + _0x296c34] && _0xe242c6.pathCurUrl == _0x10441f["pathUrl" + _0x296c34] ? ((0x0, _0x7a1b52["default"])("getPagesCodeInfo==================页面1code" + this.pageCodeInfo.pageCode + "_来源code" + this.pageCodeInfo.pageOrigin, this.pageCodeInfo), this.pageCodeInfo) : (this.pageCodeInfo.pageOrigin = _0xe242c6.pageCode, this.pageCodeInfo.pathUrl = _0xe242c6.pathCurUrl, _0x10441f ? "MAIN" == _0x10441f.pageCode ? (this.pageCodeInfo.pageCode = _0x10441f["pageCode" + _0x296c34], this.pageCodeInfo.pathCurUrl = _0x10441f["pathUrl" + _0x296c34]) : (this.pageCodeInfo.pageCode = _0x10441f.pageCode, this.pageCodeInfo.pathCurUrl = _0x10441f.pathUrl) : (this.pageCodeInfo.pageCode = "", this.pageCodeInfo.pathCurUr = ""), (0x0, _0x7a1b52["default"])("getPagesCodeInfo==================页面code" + this.pageCodeInfo.pageCode + "_来源code" + this.pageCodeInfo.pageOrigin + "_code=", this.pageCodeInfo), this.pageCodeInfo));
              },
              async initAdInfo(_0x443645, _0x4ee611, _0x5f3578 = false, _0x27f074) {
                _0x1a2ef4.APPDEF = _0x4ee611.$def;
                let _0x23359d = await TACTICS_SDK.getNewAdPostionInfo();
                0x0;
                _0x7a1b52["default"]("广告配置请求成功===>", _0x23359d);
                let _0x436996 = new Date().getTime();
                _0x363b33.setStorage("UNION_AD_CACHE", {
                  hasAuthored: {
                    expire_time: _0x436996 - _0x436996 % 0x5265c00 + 0x5265c00 - 0x1b77400,
                    val: true
                  }
                });
                setTimeout(() => {
                  new _0xf1b806["default"](_0x4ee611);
                }, 0x32);
                let _0xfe2ed0 = await TACTICS_SDK.getAdConfigInfo();
                let _0x3755fd = TACTICS_SDK.getBqtAdConfigInfo();
                let _0x127203 = Number(TACTICS_SDK.getGlobalData("configInfo").config.ad_btn_text_type.val);
                let _0xe36a8d = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_ad_button.val);
                let _0x5d92ea = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_bqt_can_show_dialog.val);
                AD_SDK_UTILS.updataAdConfigData({
                  advConfig: _0xfe2ed0,
                  materialType: _0x127203
                });
                let {
                  deviceInfo: _0xba6865,
                  android: _0x3774ad,
                  channelId: _0x88f2dc,
                  manifest: _0x4cc5b2,
                  linkId: _0xb51848,
                  tacticsName: _0x222032,
                  utm_ad_id: _0x5f271d,
                  utm_source: _0x3819f2,
                  utm_content: _0x30e17f
                } = _0x4ee611.$def;
                let _0x3643ac = _0x1b60f6["default"].getInfo();
                _0x4ee611.$def.sourcePkg = _0x3643ac.source.packageName;
                AD_SDK_UTILS.initSdk({
                  isCheckStatus: _0x5f3578,
                  deviceInfo: _0xba6865,
                  android: _0x3774ad,
                  qudao: _0x88f2dc,
                  adPlanId: _0x5f271d,
                  pkg: _0x4cc5b2["package"],
                  link_id: _0xb51848,
                  pageUrl: _0x443645,
                  tacticsName: _0x222032,
                  sourcePkg: _0x3643ac.source.packageName ? _0x3643ac.source.packageName : "noSourcePackage",
                  unionid: _0x3819f2,
                  utm_content: _0x30e17f,
                  vivoChannelFilter: _0xfe2ed0.vivo ? _0xfe2ed0.vivo : "",
                  materialType: _0x127203,
                  isUsedAdButton: _0xe36a8d,
                  adNewPostionConfig: Object.assign({}, _0x23359d, _0x3755fd),
                  isBqtCanShowDialog: _0x5d92ea,
                  applicationInstall: 0x1,
                  success: function () {
                    0x0;
                    _0x7a1b52["default"]("SDK初始化成功");
                    _0x27f074(0x1);
                  },
                  fail: function () {
                    _0x4ee611.$def.adInitFailconut++;
                    if (0x3 == _0x4ee611.$def.adInitFailconut) {
                      _0x4ee611.$def.adInitFailconut = 0x0;
                      0x0;
                      _0x7a1b52["default"]("广告初始化3次失败！");
                      return void _0x27f074(0x2);
                    }
                    _0x4ee611.$def.initAdInfo(_0x443645, _0x4ee611, _0x5f3578, _0x27f074);
                  }
                });
              },
              isNeedShowDialogForAdClick(_0x27bf8e = "img", _0x35a7b3 = false) {
                return new Promise((_0x483818, _0x59a6a3) => {
                  let _0x4f36b1 = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_reviewer.val);
                  let _0x40d0bf = Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_ad_button.val);
                  if ("btn" == _0x27bf8e && _0x40d0bf && this.deviceInfo.platformVersionCode >= 0x44c && "huawei" === this.brand || "huawei" != this.brand && !_0x529a21["default"].isXM1(this.brand) || 0x1 != this.auditOnline && 0x1 != _0x4f36b1) {
                    _0x483818();
                  } else {
                    _0x363b33.showDialog("提示", "确定进行下载吗?", [{
                      text: "确定",
                      color: "#333333"
                    }, {
                      text: "取消",
                      color: "#333333"
                    }], _0x4e8bdc => {
                      if (0x0 == _0x4e8bdc.index) {
                        _0x483818();
                      } else {
                        if (_0x35a7b3) {
                          _0x59a6a3();
                        }
                        _0x363b33.showToast("您已取消");
                      }
                    });
                  }
                });
              },
              changeCommonDataByPageShow(_0x1a2b12) {
                let _0x4f9dc4 = "" + _0x1a2b12.pageDetail.pageUrl;
                0x0;
                _0x7a1b52["default"]("=============>changeCommonDataByPageShow", _0x4f9dc4);
                COMMON_REPORT_UTILS.set_attr("page_url", _0x4f9dc4);
                _0xfe8272["default"].changeCurrentView(_0x1a2b12);
                this.currentView = _0x1a2b12;
                AD_SDK.updatePageUrl(_0x4f9dc4);
              },
              getMaterialUrl: _0x1894d9 => AD_SDK.getMaterialUrlByAdData(_0x1894d9),
              getManuAdvCommon(_0x5ba0a8, _0x2bb651 = "", _0x43a989 = 0x0, _0x6df9c9 = 0x0, _0x2dc958 = "", _0x334f7b = "", _0x57b214 = 0x1) {
                console.log("获取广告", ...arguments);
                return new Promise((_0x28d32a, _0xa65bd0) => {
                  AD_SDK_UTILS.getAd({
                    scenario: _0x5ba0a8,
                    sceneCode: _0x2bb651,
                    adType: _0x43a989,
                    adTimes: _0x6df9c9,
                    popName: _0x2dc958,
                    popGroupName: _0x334f7b,
                    requestNum: _0x57b214,
                    success: async function (_0x1050c1) {
                      _0x28d32a({
                        type: "success",
                        data: _0x1050c1
                      });
                    },
                    fail: function (_0x88933f) {
                      _0x28d32a({
                        type: "failed",
                        data: _0x88933f
                      });
                    }
                  });
                });
              },
              getBannerAdvCommon: _0x13cf61 => new Promise((_0x504e90, _0xe61916) => {
                AD_SDK.getBannerAdv({
                  scenario: _0x13cf61,
                  success: function (_0x2c6702) {
                    _0x504e90(_0x2c6702);
                  },
                  fail: function (_0x28a041) {
                    _0xe61916(_0x28a041);
                  }
                });
              }),
              getAppData(_0x21521d) {
                return this.dataCache.hasOwnProperty("" + _0x21521d) ? this.dataCache[_0x21521d] : "";
              },
              setAppData(_0xebdf74, _0x2c2d8c) {
                this.dataCache[_0xebdf74] = _0x2c2d8c;
              },
              async checkUserInstallShortCut() {
                try {
                  let _0x42fd9a = JSON.parse(await _0x363b33.getStorage("_SD_BD_ICON_STATE_"));
                  if (_0x42fd9a && "object" == typeof _0x42fd9a && _0x42fd9a.last_state.state !== _0x42fd9a.tod_state.state && 0x1 == _0x42fd9a.tod_state.state) {
                    this.setAddDesktopInfo();
                    COMMON_REPORT_UTILS.add_icon_report("成功", "被动加桌", "桌面");
                  }
                } catch (_0x207f4c) {}
              },
              async setAddDesktopInfo() {
                await _0x363b33.setStorage("addDesktopTimestamp", new Date().getTime());
                await _0x363b33.setStorage("addDesktopUserInfo", {
                  linkId: this.linkId,
                  channelId: this.channelId,
                  creativeid: this.utm_content,
                  addTime: _0x363b33.dateToString()
                });
              },
              taskInfoUpdateHandle: _0x2f9ee8 => new Promise(_0xf17165 => {
                _0x19c7af.example.taskUpdataApi(_0x2f9ee8).then(_0x3bf837 => {
                  if (0xc8 == _0x3bf837.code) {
                    _0xf17165();
                    console.log("任务上报成功===>", _0x2f9ee8);
                  }
                });
              }),
              uploadListShow(_0x421039, _0x747117) {
                if (_0x421039.length > 0x0) {
                  var _0x2f2715 = [];
                  _0x421039.forEach(_0x5ecc21 => {
                    _0x2f2715.push("" + _0x5ecc21.bookId);
                  });
                  _0x2f2715.sort((_0x17a8e4, _0xf270f3) => _0x17a8e4 - _0xf270f3);
                  console.log("uploadListShow", _0x2f2715);
                  COMMON_REPORT_UTILS.list_show_report("1", _0x2f2715, _0x747117);
                }
              },
              showNotification() {
                try {
                  if (Number(TACTICS_SDK.getGlobalData("configInfo").config.is_show_notification.val)) {
                    let _0x3a9ae1 = TACTICS_SDK.getGlobalData("configInfo").config.notification_title.val;
                    let _0x24f82a = TACTICS_SDK.getGlobalData("configInfo").config.notification_text.val;
                    let _0x2bff5a = TACTICS_SDK.getGlobalData("configInfo").config.notification_url.val;
                    COMMON_REPORT_UTILS.notification_show_report(_0x3a9ae1, _0x24f82a, _0x2bff5a, this.channelId, this.linkId);
                    _0x2bff5a = _0x2bff5a + ("&notification_title=" + _0x3a9ae1) + ("&notification_text=" + _0x24f82a) + ("&notification_url=" + _0x2bff5a + "&notification_status=1") + ("&oChannelId=" + this.channelId) + ("&oLinkId=" + this.linkId);
                    _0xb1f479("@app-module/system.notification").show({
                      contentTitle: _0x3a9ae1,
                      contentText: _0x24f82a,
                      clickAction: {
                        uri: _0x2bff5a
                      }
                    });
                  }
                } catch (_0x3b7258) {}
              },
              getAddDesktopStatus(_0x410c24 = false) {
                let _0x412cb1 = this;
                0x0;
                _0x7a1b52["default"]("getAddDesktopStatus================>1", _0x412cb1.$def.addDeskTopStatus, _0x410c24);
                if (!(_0x412cb1.$def.addDeskTopStatus || _0x412cb1.$def.appIshow && _0x410c24)) {
                  _0x412cb1.$def.appIshow = true;
                  _0xb1f479("@app-module/system.shortcut").hasInstalled({
                    success: function (_0x53ff48) {
                      0x0;
                      _0x7a1b52["default"]("getAddDesktopStatus================>2", _0x53ff48, _0x412cb1.$def.addDeskTopStatus);
                      if (_0x410c24 && _0x53ff48) {
                        _0x412cb1.$def.addDeskTopStatus = 0x1;
                        0x0;
                        _0x7a1b52["default"]("getAddDesktopStatus================>3", _0x412cb1.$def.addDeskTopStatus);
                      } else if (_0x53ff48 && 0x0 == _0x412cb1.$def.addDeskTopStatus) {
                        0x0;
                        _0x7a1b52["default"]("getAddDesktopStatus================>4", _0x412cb1.$def.addDeskTopStatus);
                        _0x412cb1.$def.addDeskTopStatus = 0x1;
                        _0x412cb1.setAddDesktopInfo();
                        COMMON_REPORT_UTILS.add_icon_report("成功", "系统加桌", "");
                      }
                    }
                  });
                }
              },
              async getUserInfo() {
                await _0x363b33.getStorage("userInfo").then(_0x6850fa => {
                  if ("" != _0x6850fa && undefined !== _0x6850fa) {
                    let _0x440b10 = JSON.parse(_0x6850fa);
                    this.isVip = _0x440b10.isvip;
                  }
                });
              },
              isOpenScreenAd() {
                let _0xe08da0 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_screen_ad;
                _0xe08da0 = _0xe08da0 && Number(_0xe08da0.val) || 0x0;
                if (!_0xe08da0) {
                  this.isScreenShow = true;
                }
                return _0xe08da0 && !this.isScreenShow;
              },
              screenAdHandle() {
                const _0x2de0b8 = this.currentView;
                const _0x3c1054 = this;
                let _0xe7bd68 = this.isOpenScreenAd();
                return new Promise(_0x1cce91 => {
                  if (_0xe7bd68) {
                    _0xfe8272["default"].commonFunc2PatchPopShow(_0x2de0b8.pageDetail, "SCREEN_TOUCH", "", _0x2de0b8.pageDetail.pageRoute, _0x2de0b8.$app.$def);
                    _0x3c1054.isScreenShow = true;
                  }
                  _0x1cce91(_0xe7bd68);
                });
              },
              screenAdEnd(_0x2f440e) {
                if (_0x2f440e) {
                  if ("SCREEN_TOUCH" === _0x2f440e.detail.actionCode || "SECOND_SCREEN_TOUCH" === _0x2f440e.detail.actionCode) {
                    const _0x41639c = this.currentView;
                    for (let _0x1d3671 = 0x0; _0x1d3671 < _0x41639c._childrenVms.length; _0x1d3671++) {
                      if ("start-mask" === _0x41639c._childrenVms[_0x1d3671]._type) {
                        _0x41639c._childrenVms[_0x1d3671].isShowPage = true;
                        break;
                      }
                    }
                    if (_0x41639c.checkPageEnterPop) {
                      _0x41639c.checkPageEnterPop();
                    } else {
                      0x0;
                      _0x7a1b52["default"]("请在页面定义checkPageEnterPop函数");
                    }
                    0x0;
                    _0x7a1b52["default"]("双开p-ing", "双开p-ing结束，打开禁用截屏");
                    _0x363b33.setSecure(_0x41639c, true);
                  }
                } else {
                  0x0;
                  _0x7a1b52["default"]("screenAdEnd请传入参数");
                }
              },
              isOpenSecondScreenAd() {
                let _0x41dbd4 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_second_screen_ad;
                _0x41dbd4 = _0x41dbd4 && Number(_0x41dbd4.val) || 0x0;
                if (!_0x41dbd4) {
                  this.isSecondScreenShow = true;
                }
                return _0x41dbd4 && !this.isSecondScreenShow;
              },
              secondScreenAdHandle() {
                try {
                  const _0x566ba4 = this.currentView;
                  let _0x477a0e = this.isOpenSecondScreenAd();
                  return new Promise(_0x4f8d82 => {
                    if (_0x477a0e) {
                      _0xfe8272["default"].commonFunc2PatchPopShow(_0x566ba4.pageDetail, "SECOND_SCREEN_TOUCH", "", _0x566ba4.pageDetail.pageRoute, _0x566ba4.$app.$def);
                    }
                    _0x4f8d82(_0x477a0e);
                  });
                } catch (_0x18e9ad) {
                  0x0;
                  _0x7a1b52["default"]("双开p-ing", "触发二次开p-ing广告弹框报错", _0x18e9ad);
                }
              }
            };
          };
        },
        0x255b: _0x59036b => {
          "use strict";

          var _0x4825a4 = {
            utf8: {
              stringToBytes: function (_0x431d58) {
                return _0x4825a4.bin.stringToBytes(unescape(encodeURIComponent(_0x431d58)));
              },
              bytesToString: function (_0x5b44af) {
                return decodeURIComponent(escape(_0x4825a4.bin.bytesToString(_0x5b44af)));
              }
            },
            bin: {
              stringToBytes: function (_0x415c15) {
                var _0x3f6cbd = [];
                for (var _0x126957 = 0x0; _0x126957 < _0x415c15.length; _0x126957++) {
                  _0x3f6cbd.push(0xff & _0x415c15.charCodeAt(_0x126957));
                }
                return _0x3f6cbd;
              },
              bytesToString: function (_0x4dfd56) {
                var _0x1f9938 = [];
                for (var _0x328cbe = 0x0; _0x328cbe < _0x4dfd56.length; _0x328cbe++) {
                  _0x1f9938.push(String.fromCharCode(_0x4dfd56[_0x328cbe]));
                }
                return _0x1f9938.join("");
              }
            }
          };
          _0x59036b.exports = _0x4825a4;
        },
        0x16739: _0xfdbc06 => {
          "use strict";

          var _0x38a648;
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          _0x38a648 = {
            rotl: function (_0x5bda3e, _0x551aa2) {
              return _0x5bda3e << _0x551aa2 | _0x5bda3e >>> 0x20 - _0x551aa2;
            },
            rotr: function (_0x570e3f, _0x45e751) {
              return _0x570e3f << 0x20 - _0x45e751 | _0x570e3f >>> _0x45e751;
            },
            endian: function (_0x34486b) {
              if (_0x34486b.constructor == Number) {
                return 0xff00ff & (_0x34486b << 0x8 | _0x34486b >>> 24) | 0xff00ff00 & (_0x34486b << 0x18 | _0x34486b >>> 8);
              }
              for (var _0x3aa561 = 0x0; _0x3aa561 < _0x34486b.length; _0x3aa561++) {
                _0x34486b[_0x3aa561] = _0x38a648.endian(_0x34486b[_0x3aa561]);
              }
              return _0x34486b;
            },
            randomBytes: function (_0x8ccb34) {
              for (var _0x581352 = []; _0x8ccb34 > 0x0; _0x8ccb34--) {
                _0x581352.push(Math.floor(0x100 * Math.random()));
              }
              return _0x581352;
            },
            bytesToWords: function (_0x260264) {
              var _0x2544ba = [];
              var _0x29ea0b = 0x0;
              for (var _0x43f71b = 0x0; _0x29ea0b < _0x260264.length; _0x29ea0b++, _0x43f71b += 0x8) {
                _0x2544ba[_0x43f71b >>> 0x5] |= _0x260264[_0x29ea0b] << 0x18 - _0x43f71b % 0x20;
              }
              return _0x2544ba;
            },
            wordsToBytes: function (_0x4a8199) {
              var _0x2f14c7 = [];
              for (var _0x9fa7ea = 0x0; _0x9fa7ea < 0x20 * _0x4a8199.length; _0x9fa7ea += 0x8) {
                _0x2f14c7.push(_0x4a8199[_0x9fa7ea >>> 0x5] >>> 0x18 - _0x9fa7ea % 0x20 & 0xff);
              }
              return _0x2f14c7;
            },
            bytesToHex: function (_0x8d6ee8) {
              var _0xd01996 = [];
              for (var _0x4fc846 = 0x0; _0x4fc846 < _0x8d6ee8.length; _0x4fc846++) {
                _0xd01996.push((_0x8d6ee8[_0x4fc846] >>> 0x4).toString(0x10));
                _0xd01996.push((0xf & _0x8d6ee8[_0x4fc846]).toString(0x10));
              }
              return _0xd01996.join("");
            },
            hexToBytes: function (_0x172642) {
              var _0x126520 = [];
              for (var _0xb9e5f7 = 0x0; _0xb9e5f7 < _0x172642.length; _0xb9e5f7 += 0x2) {
                _0x126520.push(parseInt(_0x172642.substr(_0xb9e5f7, 0x2), 0x10));
              }
              return _0x126520;
            },
            bytesToBase64: function (_0x325de1) {
              var _0x5c2721 = [];
              for (var _0x131980 = 0x0; _0x131980 < _0x325de1.length; _0x131980 += 0x3) {
                var _0x3c0d17 = _0x325de1[_0x131980] << 0x10 | _0x325de1[_0x131980 + 0x1] << 0x8 | _0x325de1[_0x131980 + 0x2];
                for (var _0x2aeca5 = 0x0; _0x2aeca5 < 0x4; _0x2aeca5++) {
                  if (0x8 * _0x131980 + 0x6 * _0x2aeca5 <= 0x8 * _0x325de1.length) {
                    _0x5c2721.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(_0x3c0d17 >>> 0x6 * (0x3 - _0x2aeca5) & 0x3f));
                  } else {
                    _0x5c2721.push("=");
                  }
                }
              }
              return _0x5c2721.join("");
            },
            base64ToBytes: function (_0x1f31aa) {
              _0x1f31aa = _0x1f31aa.replace(/[^A-Z0-9+\/]/gi, "");
              var _0x480e9a = [];
              var _0x3dceee = 0x0;
              for (var _0x3b9e3b = 0x0; _0x3dceee < _0x1f31aa.length; _0x3b9e3b = ++_0x3dceee % 0x4) {
                if (0x0 != _0x3b9e3b) {
                  _0x480e9a.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x1f31aa.charAt(_0x3dceee - 0x1)) & Math.pow(0x2, -0x2 * _0x3b9e3b + 0x8) - 0x1) << 0x2 * _0x3b9e3b | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x1f31aa.charAt(_0x3dceee)) >>> 0x6 - 0x2 * _0x3b9e3b);
                }
              }
              return _0x480e9a;
            }
          };
          _0xfdbc06.exports = _0x38a648;
        },
        0x4a18: _0xb9d48b => {
          "use strict";

          _0xb9d48b.exports = function (_0x59bd13) {
            return null != _0x59bd13 && (!!_0x59bd13.constructor && "function" == typeof _0x59bd13.constructor.isBuffer && _0x59bd13.constructor.isBuffer(_0x59bd13) || function (_0x1b4914) {
              return "function" == typeof _0x1b4914.readFloatLE && "function" == typeof _0x1b4914.slice && !!_0x1b4914.slice(0x0, 0x0).constructor && "function" == typeof _0x1b4914.slice(0x0, 0x0).constructor.isBuffer && _0x1b4914.slice(0x0, 0x0).constructor.isBuffer(_0x1b4914.slice(0x0, 0x0));
            }(_0x59bd13) || !!_0x59bd13._isBuffer);
          };
        },
        0x195: (_0x3eca78, _0x26a491, _0x161613) => {
          "use strict";

          var _0x26025e;
          var _0x135616;
          var _0x328f6d;
          var _0x26b38a;
          var _0x4985cb;
          _0x26025e = _0x161613(0x16739);
          _0x135616 = _0x161613(0x255b).utf8;
          _0x328f6d = _0x161613(0x4a18);
          _0x26b38a = _0x161613(0x255b).bin;
          (_0x4985cb = function (_0x14b799, _0x43edce) {
            if (_0x14b799.constructor == String) {
              _0x14b799 = _0x43edce && "binary" === _0x43edce.encoding ? _0x26b38a.stringToBytes(_0x14b799) : _0x135616.stringToBytes(_0x14b799);
            } else if (_0x328f6d(_0x14b799)) {
              _0x14b799 = Array.prototype.slice.call(_0x14b799, 0x0);
            } else if (!(Array.isArray(_0x14b799) || _0x14b799.constructor === Uint8Array)) {
              _0x14b799 = _0x14b799.toString();
            }
            var _0x5f2c96 = _0x26025e.bytesToWords(_0x14b799);
            var _0x395cf9 = 0x8 * _0x14b799.length;
            var _0x26404b = 0x67452301;
            var _0x214f16 = -0x10325477;
            var _0x369794 = -0x67452302;
            var _0x5f06c2 = 0x10325476;
            for (var _0x24b0a8 = 0x0; _0x24b0a8 < _0x5f2c96.length; _0x24b0a8++) {
              _0x5f2c96[_0x24b0a8] = 0xff00ff & (_0x5f2c96[_0x24b0a8] << 0x8 | _0x5f2c96[_0x24b0a8] >>> 0x18) | 0xff00ff00 & (_0x5f2c96[_0x24b0a8] << 0x18 | _0x5f2c96[_0x24b0a8] >>> 0x8);
            }
            _0x5f2c96[_0x395cf9 >>> 0x5] |= 0x80 << _0x395cf9 % 0x20;
            _0x5f2c96[0xe + (_0x395cf9 + 0x40 >>> 0x9 << 0x4)] = _0x395cf9;
            var _0x5ae63e = _0x4985cb._ff;
            var _0x227082 = _0x4985cb._gg;
            var _0x10e401 = _0x4985cb._hh;
            var _0x1a5f52 = _0x4985cb._ii;
            for (_0x24b0a8 = 0x0; _0x24b0a8 < _0x5f2c96.length; _0x24b0a8 += 0x10) {
              var _0x35922f = _0x26404b;
              var _0x377617 = _0x214f16;
              var _0x3b9937 = _0x369794;
              var _0x5dec96 = _0x5f06c2;
              _0x26404b = _0x5ae63e(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x0], 0x7, -0x28955b88);
              _0x5f06c2 = _0x5ae63e(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x1], 0xc, -0x173848aa);
              _0x369794 = _0x5ae63e(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0x2], 0x11, 0x242070db);
              _0x214f16 = _0x5ae63e(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x3], 0x16, -0x3e423112);
              _0x26404b = _0x5ae63e(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x4], 0x7, -0xa83f051);
              _0x5f06c2 = _0x5ae63e(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x5], 0xc, 0x4787c62a);
              _0x369794 = _0x5ae63e(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0x6], 0x11, -0x57cfb9ed);
              _0x214f16 = _0x5ae63e(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x7], 0x16, -0x2b96aff);
              _0x26404b = _0x5ae63e(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x8], 0x7, 0x698098d8);
              _0x5f06c2 = _0x5ae63e(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x9], 0xc, -0x74bb0851);
              _0x369794 = _0x5ae63e(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0xa], 0x11, -0xa44f);
              _0x214f16 = _0x5ae63e(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0xb], 0x16, -0x76a32842);
              _0x26404b = _0x5ae63e(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0xc], 0x7, 0x6b901122);
              _0x5f06c2 = _0x5ae63e(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0xd], 0xc, -0x2678e6d);
              _0x369794 = _0x5ae63e(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0xe], 0x11, -0x5986bc72);
              _0x26404b = _0x227082(_0x26404b, _0x214f16 = _0x5ae63e(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0xf], 0x16, 0x49b40821), _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x1], 0x5, -0x9e1da9e);
              _0x5f06c2 = _0x227082(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x6], 0x9, -0x3fbf4cc0);
              _0x369794 = _0x227082(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0xb], 0xe, 0x265e5a51);
              _0x214f16 = _0x227082(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x0], 0x14, -0x16493856);
              _0x26404b = _0x227082(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x5], 0x5, -0x29d0efa3);
              _0x5f06c2 = _0x227082(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0xa], 0x9, 0x2441453);
              _0x369794 = _0x227082(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0xf], 0xe, -0x275e197f);
              _0x214f16 = _0x227082(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x4], 0x14, -0x182c0438);
              _0x26404b = _0x227082(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x9], 0x5, 0x21e1cde6);
              _0x5f06c2 = _0x227082(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0xe], 0x9, -0x3cc8f82a);
              _0x369794 = _0x227082(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0x3], 0xe, -0xb2af279);
              _0x214f16 = _0x227082(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x8], 0x14, 0x455a14ed);
              _0x26404b = _0x227082(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0xd], 0x5, -0x561c16fb);
              _0x5f06c2 = _0x227082(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x2], 0x9, -0x3105c08);
              _0x369794 = _0x227082(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0x7], 0xe, 0x676f02d9);
              _0x26404b = _0x10e401(_0x26404b, _0x214f16 = _0x227082(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0xc], 0x14, -0x72d5b376), _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x5], 0x4, -0x5c6be);
              _0x5f06c2 = _0x10e401(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x8], 0xb, -0x788e097f);
              _0x369794 = _0x10e401(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0xb], 0x10, 0x6d9d6122);
              _0x214f16 = _0x10e401(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0xe], 0x17, -0x21ac7f4);
              _0x26404b = _0x10e401(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x1], 0x4, -0x5b4115bc);
              _0x5f06c2 = _0x10e401(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x4], 0xb, 0x4bdecfa9);
              _0x369794 = _0x10e401(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0x7], 0x10, -0x944b4a0);
              _0x214f16 = _0x10e401(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0xa], 0x17, -0x41404390);
              _0x26404b = _0x10e401(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0xd], 0x4, 0x289b7ec6);
              _0x5f06c2 = _0x10e401(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x0], 0xb, -0x155ed806);
              _0x369794 = _0x10e401(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0x3], 0x10, -0x2b10cf7b);
              _0x214f16 = _0x10e401(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x6], 0x17, 0x4881d05);
              _0x26404b = _0x10e401(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x9], 0x4, -0x262b2fc7);
              _0x5f06c2 = _0x10e401(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0xc], 0xb, -0x1924661b);
              _0x369794 = _0x10e401(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0xf], 0x10, 0x1fa27cf8);
              _0x26404b = _0x1a5f52(_0x26404b, _0x214f16 = _0x10e401(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x2], 0x17, -0x3b53a99b), _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x0], 0x6, -0xbd6ddbc);
              _0x5f06c2 = _0x1a5f52(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x7], 0xa, 0x432aff97);
              _0x369794 = _0x1a5f52(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0xe], 0xf, -0x546bdc59);
              _0x214f16 = _0x1a5f52(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x5], 0x15, -0x36c5fc7);
              _0x26404b = _0x1a5f52(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0xc], 0x6, 0x655b59c3);
              _0x5f06c2 = _0x1a5f52(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0x3], 0xa, -0x70f3336e);
              _0x369794 = _0x1a5f52(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0xa], 0xf, -0x100b83);
              _0x214f16 = _0x1a5f52(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x1], 0x15, -0x7a7ba22f);
              _0x26404b = _0x1a5f52(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x8], 0x6, 0x6fa87e4f);
              _0x5f06c2 = _0x1a5f52(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0xf], 0xa, -0x1d31920);
              _0x369794 = _0x1a5f52(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0x6], 0xf, -0x5cfebcec);
              _0x214f16 = _0x1a5f52(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0xd], 0x15, 0x4e0811a1);
              _0x26404b = _0x1a5f52(_0x26404b, _0x214f16, _0x369794, _0x5f06c2, _0x5f2c96[_0x24b0a8 + 0x4], 0x6, -0x8ac817e);
              _0x5f06c2 = _0x1a5f52(_0x5f06c2, _0x26404b, _0x214f16, _0x369794, _0x5f2c96[_0x24b0a8 + 0xb], 0xa, -0x42c50dcb);
              _0x369794 = _0x1a5f52(_0x369794, _0x5f06c2, _0x26404b, _0x214f16, _0x5f2c96[_0x24b0a8 + 0x2], 0xf, 0x2ad7d2bb);
              _0x214f16 = _0x1a5f52(_0x214f16, _0x369794, _0x5f06c2, _0x26404b, _0x5f2c96[_0x24b0a8 + 0x9], 0x15, -0x14792c6f);
              _0x26404b = _0x26404b + _0x35922f >>> 0x0;
              _0x214f16 = _0x214f16 + _0x377617 >>> 0x0;
              _0x369794 = _0x369794 + _0x3b9937 >>> 0x0;
              _0x5f06c2 = _0x5f06c2 + _0x5dec96 >>> 0x0;
            }
            return _0x26025e.endian([_0x26404b, _0x214f16, _0x369794, _0x5f06c2]);
          })._ff = function (_0x24a4c6, _0x1648a1, _0x79ae00, _0x34ea8, _0x5c9573, _0x14d6fe, _0x877bfe) {
            var _0x18453a = _0x24a4c6 + (_0x1648a1 & _0x79ae00 | ~_0x1648a1 & _0x34ea8) + (_0x5c9573 >>> 0x0) + _0x877bfe;
            return (_0x18453a << _0x14d6fe | _0x18453a >>> 0x20 - _0x14d6fe) + _0x1648a1;
          };
          _0x4985cb._gg = function (_0x50845f, _0x169989, _0x3535f3, _0x4e73a5, _0x5840df, _0x49a9a3, _0x3a9cfa) {
            var _0x7c0ba = _0x50845f + (_0x169989 & _0x4e73a5 | _0x3535f3 & ~_0x4e73a5) + (_0x5840df >>> 0x0) + _0x3a9cfa;
            return (_0x7c0ba << _0x49a9a3 | _0x7c0ba >>> 0x20 - _0x49a9a3) + _0x169989;
          };
          _0x4985cb._hh = function (_0x5e1a4c, _0x51b751, _0x53e940, _0x178f33, _0x511dda, _0x39b52c, _0x173d11) {
            var _0x3d0f19 = _0x5e1a4c + (_0x51b751 ^ _0x53e940 ^ _0x178f33) + (_0x511dda >>> 0x0) + _0x173d11;
            return (_0x3d0f19 << _0x39b52c | _0x3d0f19 >>> 0x20 - _0x39b52c) + _0x51b751;
          };
          _0x4985cb._ii = function (_0x5072ac, _0x20b6f1, _0x286fe5, _0x21261c, _0x2c90e7, _0x5c50be, _0x158776) {
            var _0x3b1797 = _0x5072ac + (_0x286fe5 ^ (_0x20b6f1 | ~_0x21261c)) + (_0x2c90e7 >>> 0x0) + _0x158776;
            return (_0x3b1797 << _0x5c50be | _0x3b1797 >>> 0x20 - _0x5c50be) + _0x20b6f1;
          };
          _0x4985cb._blocksize = 0x10;
          _0x4985cb._digestsize = 0x10;
          _0x3eca78.exports = function (_0x4e64e0, _0x4252a3) {
            if (null == _0x4e64e0) {
              throw new Error("Illegal argument " + _0x4e64e0);
            }
            var _0x41ce8e = _0x26025e.wordsToBytes(_0x4985cb(_0x4e64e0, _0x4252a3));
            return _0x4252a3 && _0x4252a3.asBytes ? _0x41ce8e : _0x4252a3 && _0x4252a3.asString ? _0x26b38a.bytesToString(_0x41ce8e) : _0x26025e.bytesToHex(_0x41ce8e);
          };
        },
        0x18629: (_0x4467ff, _0x5c3b70, _0x36099f) => {
          "use strict";

          Object.defineProperty(_0x5c3b70, "__esModule", {
            value: true
          });
          _0x5c3b70["default"] = undefined;
          var _0x285107 = $app_require$("@app-module/system.device") && $app_require$("@app-module/system.device").__esModule ? $app_require$("@app-module/system.device") : {
            default: $app_require$("@app-module/system.device")
          };
          var _0x5ec4b0 = $app_require$("@app-module/system.app") && $app_require$("@app-module/system.app").__esModule ? $app_require$("@app-module/system.app") : {
            default: $app_require$("@app-module/system.app")
          };
          var _0x4d17fc = $app_require$("@app-module/system.network") && $app_require$("@app-module/system.network").__esModule ? $app_require$("@app-module/system.network") : {
            default: $app_require$("@app-module/system.network")
          };
          var _0x274052 = $app_require$("@app-module/system.fetch") && $app_require$("@app-module/system.fetch").__esModule ? $app_require$("@app-module/system.fetch") : {
            default: $app_require$("@app-module/system.fetch")
          };
          var _0xcc873b = $app_require$("@app-module/system.package") && $app_require$("@app-module/system.package").__esModule ? $app_require$("@app-module/system.package") : {
            default: $app_require$("@app-module/system.package")
          };
          var _0x4443f1 = $app_require$("@app-module/system.webview") && $app_require$("@app-module/system.webview").__esModule ? $app_require$("@app-module/system.webview") : {
            default: $app_require$("@app-module/system.webview")
          };
          var _0x31a51f = $app_require$("@app-module/system.prompt") && $app_require$("@app-module/system.prompt").__esModule ? $app_require$("@app-module/system.prompt") : {
            default: $app_require$("@app-module/system.prompt")
          };
          var _0x2e415b = $app_require$("@app-module/system.router") && $app_require$("@app-module/system.router").__esModule ? $app_require$("@app-module/system.router") : {
            default: $app_require$("@app-module/system.router")
          };
          var _0x5b0471 = $app_require$("@app-module/system.request") && $app_require$("@app-module/system.request").__esModule ? $app_require$("@app-module/system.request") : {
            default: $app_require$("@app-module/system.request")
          };
          var _0x27069d = $app_require$("@app-module/system.storage") && $app_require$("@app-module/system.storage").__esModule ? $app_require$("@app-module/system.storage") : {
            default: $app_require$("@app-module/system.storage")
          };
          var _0x47ba50 = $app_require$("@app-module/service.account") && $app_require$("@app-module/service.account").__esModule ? $app_require$("@app-module/service.account") : {
            default: $app_require$("@app-module/service.account")
          };
          var _0x4ff523 = $app_require$("@app-module/system.sensor") && $app_require$("@app-module/system.sensor").__esModule ? $app_require$("@app-module/system.sensor") : {
            default: $app_require$("@app-module/system.sensor")
          };
          var _0x2e0fa5 = $app_require$("@app-module/system.file") && $app_require$("@app-module/system.file").__esModule ? $app_require$("@app-module/system.file") : {
            default: $app_require$("@app-module/system.file")
          };
          var _0x483a8f = $app_require$("@app-module/system.image") && $app_require$("@app-module/system.image").__esModule ? $app_require$("@app-module/system.image") : {
            default: $app_require$("@app-module/system.image")
          };
          var _0x22e2b2 = _0x36099f(0x3633);
          var _0x27759a = Object.getPrototypeOf(_0x36099f.g) || _0x36099f.g;
          var _0x470cdb = "internal://files/unionad/".concat(_0x22e2b2.version, "/ad-render-quick.min.js");
          function _0x38e936(_0x4c086b, _0x368d6f) {
            var _0x931648 = this;
            try {
              new Function(_0x4c086b)();
            } catch (_0x3bc5c3) {
              if (_0x368d6f) {
                _0x1f5213.call(this).then(function (_0x2aa147) {
                  _0x38e936(_0x2aa147, false);
                  _0x610ac5.call(_0x931648);
                });
              }
            }
          }
          function _0x610ac5(_0x385b23) {
            try {
              if (_0x27759a.$union_quick_app_sdk) {
                _0x27759a.$union_quick_app_sdk.api = {
                  device: _0x285107["default"],
                  app: _0x5ec4b0["default"],
                  network: _0x4d17fc["default"],
                  fetch: _0x274052["default"],
                  pkg: _0xcc873b["default"],
                  webview: _0x4443f1["default"],
                  prompt: _0x31a51f["default"],
                  router: _0x2e415b["default"],
                  request: _0x5b0471["default"],
                  storage: _0x27069d["default"],
                  account: _0x47ba50["default"],
                  file: _0x2e0fa5["default"],
                  sensor: _0x4ff523["default"],
                  image: _0x483a8f["default"]
                };
                _0x27759a.$union_quick_app_sdk.sdkVersion = _0x22e2b2.version;
                _0x27759a.$union_quick_app_sdk.fileUrl = _0x470cdb;
                new _0x27759a.$union_quick_app_sdk(this, _0x385b23);
              }
            } catch (_0x282a4b) {}
          }
          function _0x1f5213() {
            return new Promise(function (_0x5fdb4f, _0x372fc5) {
              _0x274052["default"].fetch({
                url: "https://cpro.baidustatic.com/cpro/xcx/js/ad-render-quick.min.js",
                responseType: "text",
                method: "GET",
                success: function (_0x16c141) {
                  _0x2e0fa5["default"].writeText({
                    uri: _0x470cdb,
                    text: _0x16c141.data,
                    success: function () {},
                    fail: function (_0x3b4a22, _0x772cac) {}
                  });
                  _0x5fdb4f(_0x16c141.data);
                },
                fail: function (_0x511bca, _0x47a45d) {
                  _0x372fc5();
                }
              });
            });
          }
          var _0x4b8297;
          _0x4b8297 = function _0x3610aa(_0x1e7f6a, _0x3ec75e) {
            (function (_0x31285f, _0x591aa6) {
              if (!(_0x31285f instanceof _0x591aa6)) {
                throw new TypeError("Cannot call a class as a function");
              }
            })(this, _0x3610aa);
            if (_0x27759a && _0x27759a.$union_quick_app_sdk) {
              _0x610ac5.call(_0x1e7f6a, _0x3ec75e);
            } else {
              _0x2e0fa5["default"].readText({
                uri: _0x470cdb,
                success: function (_0x458ca7) {
                  _0x38e936.call(_0x1e7f6a, _0x458ca7.text, true);
                  _0x610ac5.call(_0x1e7f6a, _0x3ec75e);
                },
                fail: function (_0x14b478, _0x34d725) {
                  _0x1f5213.call(_0x1e7f6a).then(function (_0xaa0b2d) {
                    _0x38e936.call(_0x1e7f6a, _0xaa0b2d, false);
                    _0x610ac5.call(_0x1e7f6a, _0x3ec75e);
                  });
                }
              });
            }
          };
          Object.defineProperty(_0x4b8297, "prototype", {
            writable: false
          });
          _0x5c3b70["default"] = _0x4b8297;
        },
        0xb1ae: (_0x2ed5f1, _0x26c1fb, _0x43e7e9) => {
          "use strict";

          Object.defineProperty(_0x26c1fb, "__esModule", {
            value: true
          });
          _0x26c1fb["default"] = undefined;
          var _0x236a3a = $app_require$("@app-module/system.fetch") && $app_require$("@app-module/system.fetch").__esModule ? $app_require$("@app-module/system.fetch") : {
            default: $app_require$("@app-module/system.fetch")
          };
          var _0x4b06bf = _0x43e7e9(0x28a7) && _0x43e7e9(0x28a7).__esModule ? _0x43e7e9(0x28a7) : {
            default: _0x43e7e9(0x28a7)
          };
          function _0x565891(_0x5f85bf, _0x4af2f7) {
            console.log("请求信息", JSON.stringify(_0x5f85bf));
            console.log("请求信息page_name==>", _0x4af2f7);
            let _0x4e98c9 = _0x5f85bf.url.split("?")[0x0];
            if (!_0x4e98c9) {
              _0x4e98c9 = _0x5f85bf.url;
            }
            console.log("请求接口前缀", _0x4e98c9);
            return new Promise((_0x57cdd1, _0x54d320) => {
              _0x4b06bf["default"].getStorage("token").then(_0x5a74e9 => {
                let _0xd3851d = new Date().getTime();
                _0x236a3a["default"].fetch({
                  url: _0x5f85bf.url,
                  method: _0x5f85bf.method,
                  data: JSON.stringify(_0x5f85bf.data),
                  header: {
                    authorization: "Bearer " + _0x5a74e9
                  }
                }).then(_0x9e8a5c => {
                  try {
                    COMMON_REPORT_UTILS.error_log_report("" + _0x4e98c9, "" + _0x9e8a5c.data.code, "" + (new Date().getTime() - _0xd3851d), "请求成功");
                  } catch (_0x34e1b9) {}
                  if (new Date().getTime() - _0xd3851d > 0x3e8) {
                    try {
                      COMMON_REPORT_UTILS.error_log_report("" + _0x4e98c9, "响应超过1000ms上报", "接口请求", "响应超时");
                    } catch (_0x19e11a) {}
                  }
                  if (_0x9e8a5c.data.code < 0x1f4) {
                    console.log("🐛 response:", JSON.parse(_0x9e8a5c.data.data));
                    let _0x3bda01 = JSON.parse(_0x9e8a5c.data.data);
                    if (0xc9 === _0x3bda01.tokenCode) {
                      _0x4b06bf["default"].setStorage("token", _0x3bda01.refreshToken);
                    }
                    if (0x194 == _0x3bda01.code) {
                      try {
                        let _0x12769c = JSON.stringify(_0x9e8a5c.data);
                        COMMON_REPORT_UTILS.error_log_report("" + _0x4e98c9, "" + _0x12769c.substring(0x0, 0x400).trim(), "接口请求", "找不到接口");
                      } catch (_0x348fcc) {}
                    }
                    _0x57cdd1(_0x3bda01);
                  } else {
                    try {
                      let _0x126130 = JSON.stringify(_0x9e8a5c.data);
                      COMMON_REPORT_UTILS.error_log_report("" + _0x4e98c9, "" + _0x126130.substring(0x0, 0x400).trim(), "接口请求", "内部错误");
                    } catch (_0x33d112) {}
                    _0x54d320(_0x9e8a5c.data);
                  }
                })["catch"]((_0x386db0, _0x25cb6c) => {
                  try {
                    COMMON_REPORT_UTILS.error_log_report("" + _0x4e98c9, "" + (_0x386db0 && _0x386db0.code && _0x386db0.code), "" + (new Date().getTime() - _0xd3851d), "请求失败");
                  } catch (_0x4e8a6f) {}
                  try {
                    if (_0x386db0 && _0x386db0.code && 0x7d1 == _0x386db0.code) {
                      return;
                    }
                  } catch (_0x593baa) {}
                  try {
                    let _0x45f73c = _0x386db0.constructor == Object ? JSON.stringify(_0x386db0) : "" + _0x386db0;
                    COMMON_REPORT_UTILS.error_log_report("" + _0x4e98c9, "" + _0x45f73c.substring(0x0, 0x400).trim(), "接口请求", "响应超时");
                  } catch (_0x4e64a5) {}
                  _0x54d320(_0x386db0);
                });
              });
            });
          }
          function _0x2939e3(_0xf1ae91, _0x146cf5) {
            try {
              return Promise.race([_0x565891(_0xf1ae91, _0x146cf5)]);
            } catch (_0x579f63) {
              console.log(_0x579f63);
            }
          }
          Promise.prototype["finally"] = function (_0x54882a) {
            const _0x250bbb = this.constructor;
            return this.then(_0x36f6a3 => _0x250bbb.resolve(_0x54882a()).then(() => _0x36f6a3), _0xaab1b2 => _0x250bbb.resolve(_0x54882a()).then(() => {
              throw _0xaab1b2;
            }));
          };
          _0x26c1fb["default"] = {
            post: function (_0x71a1ec, _0xa2bf01, _0x21c69e) {
              return _0x2939e3({
                method: "post",
                url: _0x71a1ec,
                data: _0xa2bf01
              }, _0x21c69e);
            },
            get: function (_0x5b03c5, _0x390b53, _0x3f7a7f) {
              return _0x2939e3({
                method: "get",
                url: _0x4b06bf["default"].queryString(_0x5b03c5, _0x390b53)
              }, _0x3f7a7f);
            },
            put: function (_0x1e5ad5, _0x2319d0, _0x29d0a7) {
              return _0x2939e3({
                method: "put",
                url: _0x1e5ad5,
                data: _0x2319d0
              }, _0x29d0a7);
            },
            delete: function (_0x2b11d4, _0x101825, _0x2be45b) {
              return _0x2939e3({
                method: "delete",
                url: _0x2b11d4,
                data: _0x101825
              }, _0x2be45b);
            },
            getExternal: function (_0x30d395, _0x12875e, _0x3033d2) {
              console.log("请求信息page_name==>", _0x3033d2);
              const _0x4719d7 = {
                method: "get",
                url: _0x4b06bf["default"].queryString(_0x30d395, _0x12875e)
              };
              return new Promise((_0x5b8570, _0x5e551d) => {
                _0x236a3a["default"].fetch({
                  url: _0x4719d7.url,
                  method: "get"
                }).then(_0x4e1415 => {
                  try {
                    if (_0x4e1415.data.code < 0x1f4) {
                      console.log("🐛 response:", JSON.parse(_0x4e1415.data.data));
                      let _0x4eb414 = JSON.parse(_0x4e1415.data.data);
                      _0x5b8570(_0x4eb414);
                    } else {
                      _0x5e551d(_0x4e1415.data);
                    }
                  } catch (_0x297668) {
                    _0x5e551d(_0x297668);
                  }
                })["catch"](_0xbffece => {
                  _0x5e551d(_0xbffece);
                });
              });
            },
            postExternal: function (_0x19f441, _0x1ca374, _0x33565d) {
              console.log("请求信息page_name==>", _0x33565d);
              const _0x3dd4cc = {
                method: "post",
                url: _0x19f441,
                data: _0x1ca374
              };
              return new Promise((_0x52a1cf, _0x594db4) => {
                const _0x56bf5d = setTimeout(() => {
                  _0x594db4();
                }, 0xbb8);
                _0x236a3a["default"].fetch({
                  url: _0x3dd4cc.url,
                  method: "post",
                  data: JSON.stringify(_0x3dd4cc.data),
                  header: {
                    "Content-Type": "application/json; charset=UTF-8"
                  }
                }).then(_0x2c80a3 => {
                  try {
                    clearTimeout(_0x56bf5d);
                    if (_0x2c80a3.data.code < 0x1f4) {
                      console.log("🐛 response:", JSON.parse(_0x2c80a3.data.data));
                      let _0x58a9fe = JSON.parse(_0x2c80a3.data.data);
                      _0x52a1cf(_0x58a9fe);
                    } else {
                      _0x594db4(_0x2c80a3.data);
                    }
                  } catch (_0x3c59cb) {
                    _0x594db4(_0x3c59cb);
                  }
                })["catch"](_0x15e52c => {
                  _0x594db4(_0x15e52c);
                });
              });
            }
          };
        },
        0x28a7: (_0x57cb45, _0x23f061) => {
          "use strict";

          Object.defineProperty(_0x23f061, "__esModule", {
            value: true
          });
          _0x23f061["default"] = undefined;
        },
        0x596c: (_0x11dc81, _0x12b67a, _0x4a4030) => {
          "use strict";

          Object.defineProperty(_0x12b67a, "__esModule", {
            value: true
          });
          _0x12b67a["default"] = undefined;
          var _0x4bffbf = $app_require$("@app-module/system.fetch") && $app_require$("@app-module/system.fetch").__esModule ? $app_require$("@app-module/system.fetch") : {
            default: $app_require$("@app-module/system.fetch")
          };
          var _0x4bb280 = _0x4a4030(0xb1ae) && _0x4a4030(0xb1ae).__esModule ? _0x4a4030(0xb1ae) : {
            default: _0x4a4030(0xb1ae)
          };
          var _0x33ed5d = _0x4a4030(0x195) && _0x4a4030(0x195).__esModule ? _0x4a4030(0x195) : {
            default: _0x4a4030(0x195)
          };
          var _0x345989 = $app_require$("@app-module/system.app") && $app_require$("@app-module/system.app").__esModule ? $app_require$("@app-module/system.app") : {
            default: $app_require$("@app-module/system.app")
          };
          var _0x202b43 = $app_require$("@app-module/system.router") && $app_require$("@app-module/system.router").__esModule ? $app_require$("@app-module/system.router") : {
            default: $app_require$("@app-module/system.router")
          };
          var _0x57b23c = _0x4a4030(0xe367);
          var _0x2e18ca = _0x4a4030(0x101b0) && _0x4a4030(0x101b0).__esModule ? _0x4a4030(0x101b0) : {
            default: _0x4a4030(0x101b0)
          };
          function _0x58b225(_0x10299d, _0x4cefae) {
            var _0x519c37 = Object.keys(_0x10299d);
            if (Object.getOwnPropertySymbols) {
              var _0x35c91a = Object.getOwnPropertySymbols(_0x10299d);
              if (_0x4cefae) {
                _0x35c91a = _0x35c91a.filter(function (_0x165546) {
                  return Object.getOwnPropertyDescriptor(_0x10299d, _0x165546).enumerable;
                });
              }
              _0x519c37.push.apply(_0x519c37, _0x35c91a);
            }
            return _0x519c37;
          }
          function _0x13d289(_0x120a36) {
            for (var _0x4c48bb = 0x1; _0x4c48bb < arguments.length; _0x4c48bb++) {
              var _0x1b54ba = null != arguments[_0x4c48bb] ? arguments[_0x4c48bb] : {};
              if (_0x4c48bb % 0x2) {
                _0x58b225(Object(_0x1b54ba), true).forEach(function (_0x284bad) {
                  _0x5ed89e(_0x120a36, _0x284bad, _0x1b54ba[_0x284bad]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(_0x120a36, Object.getOwnPropertyDescriptors(_0x1b54ba));
              } else {
                _0x58b225(Object(_0x1b54ba)).forEach(function (_0x29ca0f) {
                  Object.defineProperty(_0x120a36, _0x29ca0f, Object.getOwnPropertyDescriptor(_0x1b54ba, _0x29ca0f));
                });
              }
            }
            return _0x120a36;
          }
          function _0x5ed89e(_0xd4f4c6, _0x54c36a, _0x15a831) {
            if ((_0x54c36a = function (_0x573a1b) {
              var _0x15d981 = function (_0x4150ab) {
                if ("object" != typeof _0x4150ab || !_0x4150ab) {
                  return _0x4150ab;
                }
                var _0x23820b = _0x4150ab[Symbol.toPrimitive];
                if (undefined !== _0x23820b) {
                  var _0x2ce8b7 = _0x23820b.call(_0x4150ab, "string");
                  if ("object" != typeof _0x2ce8b7) {
                    return _0x2ce8b7;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(_0x4150ab);
              }(_0x573a1b);
              return "symbol" == typeof _0x15d981 ? _0x15d981 : _0x15d981 + "";
            }(_0x54c36a)) in _0xd4f4c6) {
              Object.defineProperty(_0xd4f4c6, _0x54c36a, {
                value: _0x15a831,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              _0xd4f4c6[_0x54c36a] = _0x15a831;
            }
            return _0xd4f4c6;
          }
          const _0x5097fc = _0x4a4030.g.__proto__ || _0x4a4030.g;
          var _0x235ee5 = null;
          var _0x42037 = null;
          var _0x240e63 = [];
          var _0x7d98c8 = {
            deviceInfo: null,
            pkg: "",
            qudao: "NULL",
            link_id: "NULL",
            serviceAd: true,
            initStatus: 0x0,
            interstAdvIdsConfig: "",
            interstAd: null,
            bannerId: "",
            nativeBannerId: "",
            bannerAd: null,
            videoId: "",
            nativeScreen: "",
            nativeChapter: "",
            nativePageEntry: "",
            nativePageBack: "",
            templateAdvIdsConfig: "",
            nativeBoost: "",
            encourageIds: "",
            templateAdIds: "",
            biddingAdIds: "",
            biddingAdArr: "",
            nativeAdvIdsConfig: null,
            nativeAdvIdArr: [],
            manuAdvSourceArr: [],
            isCreate: false,
            pageUrl: "",
            tacticsName: "",
            loadFailAdIdArr: [],
            adConfigType: 0x1,
            bqtAdIdArr: [],
            kdxfAdIdArr: [],
            ylhAdIdArr: [],
            vivoAdCount: 0x1,
            honorAdCount: 0x1,
            ad_group_id: "NULL",
            ad_plan_id: "NULL",
            isPreloading: false,
            source_pkg: "NULL",
            unionid: "NULL",
            utm_content: "NULL",
            vivoChannelFilter: null,
            vivoChannel: "",
            materialType: 0x1,
            hwPageThis: null,
            applicationInstall: 0x1,
            isUsedAdButton: 0x2,
            isUsedVivoButton: 0x3,
            isUsedHonorButton: 0x3,
            isUsedXiaomiButton: 0x3,
            isUsedOppoButton: 0x3,
            defaultAdImg: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg1.png",
            adNewPostionConfig: null,
            isBqtCanShowDialog: 0x0,
            adgNum: 0x1,
            failObject: {},
            isOpenHome: 0x0,
            isOpenScreen1: 0x0,
            isOpenScreen2: 0x0,
            templateAdConfig: {
              huawei: {
                template_ids: ["JiL3gLazKW4"],
                index: 0x0
              },
              vivo: {
                template_ids: ["a7941daada724b158c231615cbe78659"],
                index: 0x0
              },
              oppo: {
                template_ids: ["635808"],
                index: 0x0
              }
            },
            templateAds: {
              huawei: null,
              vivo: null,
              oppo: null
            },
            adArrComputedType: false,
            adRequestNum: 0x0,
            videoAd: null,
            videoAdCallFnObj: {},
            callFunctionType: 0x1,
            videoAdDebonceObj: {},
            ylhAdvSourceArr: [],
            videoQueue: [],
            doubleBanner1: null,
            doubleBanner2: null,
            doubleBannerTop: " ",
            doubleBannerBottom: ""
          };
          var _0x59136e = {
            adv_data: null,
            context: null,
            func_name: ""
          };
          var _0x3c3e12 = false;
          var _0x440284 = {};
          function _0x17076c(_0x2ef92a, _0x2a454b = false) {
            let _0x4a7dcc = [].concat((_0x2ef92a = _0x2ef92a || []).filter(_0x2fa1c8 => _0x2fa1c8));
            let _0x301110 = _0x4a7dcc.length;
            _0x4a7dcc = _0x4a7dcc.map(_0x50142f => {
              let _0x492798 = _0x2a454b ? _0x50142f.split(",") : function (_0x52e169) {
                var _0x14fe34 = new Array();
                for (var _0x46f204 in _0x52e169) _0x14fe34.push(_0x52e169[_0x46f204]);
                return function (_0xdf9d64) {
                  var _0x389356;
                  var _0x4f0004;
                  for (var _0x215e89 = _0xdf9d64.length; _0x215e89 > 0x0;) {
                    _0x389356 = Math.floor(Math.random() * _0x215e89);
                    _0x4f0004 = _0xdf9d64[_0x215e89 - 0x1];
                    _0xdf9d64[_0x215e89 - 0x1] = _0xdf9d64[_0x389356];
                    _0xdf9d64[_0x389356] = _0x4f0004;
                    _0x215e89--;
                  }
                  LOG("AD", _0xdf9d64);
                  return _0xdf9d64;
                }(_0x14fe34);
              }(_0x50142f.split(","));
              return {
                curIndex: 0x0,
                maxIndex: _0x492798.length,
                adsArr: _0x492798
              };
            });
            return {
              maxLayer: _0x301110,
              curLayer: 0x0,
              layers: _0x4a7dcc
            };
          }
          function _0x428084(_0x4b89e4 = false) {
            LOG("AD", "原生广告");
            null.curLayer = _0x4b89e4 ? 0x0 : null.curLayer;
            const {
              cool_switch: _0x28ed76,
              cool_time: _0x105b20,
              fail_num: _0xbc7173
            } = null.cool_config;
            let _0x50215e = JSON.parse(JSON.stringify(null));
            let _0x5225b2 = "";
            let _0x293b10 = 0x0;
            let _0x1be934 = [];
            for (let _0x2596eb in _0x7d98c8.failObject) if (_0x7d98c8.failObject[_0x2596eb] >= _0xbc7173) {
              _0x1be934.push(_0x2596eb);
            }
            if (0x1 === _0x28ed76 && _0x105b20 > 0x0) {
              if (_0x50215e.curLayer + 0x1 <= _0x50215e.maxLayer) {
                _0x293b10 = _0x50215e.curLayer;
                let _0x53f965 = _0x50215e.layers[_0x293b10];
                const _0x5d2135 = _0x53f965.adsArr[_0x53f965.curIndex];
                _0x5225b2 = _0x1be934.includes(_0x5d2135) ? "冷却" : _0x53f965.adsArr[_0x53f965.curIndex];
                LOG("AD", "第" + (_0x293b10 + 0x1) + "梯度", "对比数据前id:" + _0x5d2135, "当前ID:" + _0x5225b2, "当前失败的key:" + JSON.stringify(_0x1be934), JSON.stringify(_0x7d98c8.failObject), "冷却处理");
                null.curLayer++;
                null.layers[_0x293b10].curIndex = (_0x53f965.curIndex + 0x1) % _0x53f965.maxIndex;
              }
              return {
                id: _0x5225b2,
                layer: _0x293b10
              };
            }
            if (_0x50215e.curLayer + 0x1 <= _0x50215e.maxLayer) {
              _0x293b10 = _0x50215e.curLayer;
              let _0x2f175c = _0x50215e.layers[_0x293b10];
              _0x5225b2 = _0x2f175c.adsArr[_0x2f175c.curIndex];
              null.curLayer++;
              null.layers[_0x293b10].curIndex = (_0x2f175c.curIndex + 0x1) % _0x2f175c.maxIndex;
            }
            return {
              id: _0x5225b2,
              layer: _0x293b10
            };
          }
          function _0x4f3915(_0x589caa = false) {
            "".curIndex = _0x589caa ? 0x0 : "".curIndex;
            let _0x4bbb2f = JSON.parse(JSON.stringify(""));
            let _0x4e6033 = "";
            if (_0x4bbb2f.curIndex + 0x1 <= _0x4bbb2f.maxIndex) {
              _0x4e6033 = "".adsArr["".curIndex];
              "".curIndex++;
            }
            return {
              id: _0x4e6033,
              layer: 0x0
            };
          }
          function _0x325783(_0x54a9d2, _0x4938e2 = false) {
            if ("screen" === _0x54a9d2) {
              "".curLayer = _0x4938e2 ? 0x0 : "".curLayer;
              let _0x265512 = JSON.parse(JSON.stringify(""));
              let _0x44ef43 = "";
              let _0x5a084c = 0x0;
              if (_0x265512.curLayer + 0x1 <= _0x265512.maxLayer) {
                _0x5a084c = _0x265512.curLayer;
                let _0x3d6760 = _0x265512.layers[_0x5a084c];
                _0x44ef43 = _0x3d6760.adsArr[_0x3d6760.curIndex];
                "".curLayer++;
                "".layers[_0x5a084c].curIndex = (_0x3d6760.curIndex + 0x1) % _0x3d6760.maxIndex;
              }
              return {
                id: _0x44ef43,
                layer: _0x5a084c
              };
            }
            {
              "".curLayer = _0x4938e2 ? 0x0 : "".curLayer;
              let _0x56c09f = JSON.parse(JSON.stringify(""));
              let _0x62db91 = "";
              let _0xc8ba83 = 0x0;
              if (_0x56c09f.curLayer + 0x1 <= _0x56c09f.maxLayer) {
                _0xc8ba83 = _0x56c09f.curLayer;
                let _0xccaadc = _0x56c09f.layers[_0xc8ba83];
                _0x62db91 = _0xccaadc.adsArr[_0xccaadc.curIndex];
                "".curLayer++;
                "".layers[_0xc8ba83].curIndex = (_0xccaadc.curIndex + 0x1) % _0xccaadc.maxIndex;
              }
              LOG(_0x62db91, "章首id");
              return {
                id: _0x62db91,
                layer: _0xc8ba83
              };
            }
          }
          function _0x5d8471(_0x1ab93f = false) {
            "".curLayer = _0x1ab93f ? 0x0 : "".curLayer;
            let _0x4bf22b = JSON.parse(JSON.stringify(""));
            let _0x397c92 = "";
            let _0x446830 = 0x0;
            if (_0x4bf22b.curLayer + 0x1 <= _0x4bf22b.maxLayer) {
              _0x446830 = _0x4bf22b.curLayer;
              let _0x1dcefa = _0x4bf22b.layers[_0x446830];
              _0x397c92 = _0x1dcefa.adsArr[_0x1dcefa.curIndex];
              "".curLayer++;
              "".layers[_0x446830].curIndex = (_0x1dcefa.curIndex + 0x1) % _0x1dcefa.maxIndex;
            }
            return {
              id: _0x397c92,
              layer: _0x446830
            };
          }
          function _0x33b35b(_0x2804fa = false) {
            "".curLayer = _0x2804fa ? 0x0 : "".curLayer;
            let _0x380d24 = JSON.parse(JSON.stringify(""));
            let _0x1636b1 = "";
            let _0xf2f46 = 0x0;
            if (_0x380d24.curLayer + 0x1 <= _0x380d24.maxLayer) {
              _0xf2f46 = _0x380d24.curLayer;
              let _0x224d35 = _0x380d24.layers[_0xf2f46];
              _0x1636b1 = _0x224d35.adsArr[_0x224d35.curIndex];
              "".curLayer++;
              "".layers[_0xf2f46].curIndex = (_0x224d35.curIndex + 0x1) % _0x224d35.maxIndex;
            }
            return {
              id: _0x1636b1,
              layer: _0xf2f46
            };
          }
          function _0x799ce7(_0x458138 = false) {
            "".curLayer = _0x458138 ? 0x0 : "".curLayer;
            let _0x185c68 = JSON.parse(JSON.stringify(""));
            const {
              cool_switch: _0x23eac2,
              cool_time: _0xbfac86,
              fail_num: _0x21ed7b
            } = null.cool_config;
            let _0x262de1 = "";
            let _0x3ce3ff = 0x0;
            let _0x479931 = [];
            for (let _0x4f217b in _0x7d98c8.failObject) if (_0x7d98c8.failObject[_0x4f217b] >= _0x21ed7b) {
              _0x479931.push(_0x4f217b);
            }
            if (0x1 === _0x23eac2 && _0xbfac86 > 0x0) {
              if (_0x185c68.curLayer + 0x1 <= _0x185c68.maxLayer) {
                _0x3ce3ff = _0x185c68.curLayer;
                let _0x3264b1 = _0x185c68.layers[_0x3ce3ff];
                const _0x209063 = _0x3264b1.adsArr[_0x3264b1.curIndex];
                _0x262de1 = _0x479931.includes(_0x209063) ? "冷却" : _0x3264b1.adsArr[_0x3264b1.curIndex];
                LOG("AD", "模版第" + (_0x3ce3ff + 0x1) + "梯度", "对比数据前id:" + _0x209063, "当前ID:" + _0x262de1, "当前失败的key:" + JSON.stringify(_0x479931), JSON.stringify(_0x7d98c8.failObject), "冷却处理");
                "".curLayer++;
                "".layers[_0x3ce3ff].curIndex = (_0x3264b1.curIndex + 0x1) % _0x3264b1.maxIndex;
              }
              return {
                id: _0x262de1,
                layer: _0x3ce3ff
              };
            }
            if (_0x185c68.curLayer + 0x1 <= _0x185c68.maxLayer) {
              _0x3ce3ff = _0x185c68.curLayer;
              let _0x4ca26 = _0x185c68.layers[_0x3ce3ff];
              _0x262de1 = _0x4ca26.adsArr[_0x4ca26.curIndex];
              "".curLayer++;
              "".layers[_0x3ce3ff].curIndex = (_0x4ca26.curIndex + 0x1) % _0x4ca26.maxIndex;
            }
            return {
              id: _0x262de1,
              layer: _0x3ce3ff
            };
          }
          function _0x190a54(_0x425ed8, _0x74f593) {
            var _0xdffa6e = new Array();
            for (var _0x36f046 in _0x425ed8) _0xdffa6e.push(_0x425ed8[_0x36f046]);
            var _0x47ca0d = new Array();
            for (var _0x12cd46 = 0x0; _0x12cd46 < _0x74f593 && _0xdffa6e.length > 0x0; _0x12cd46++) {
              var _0x4783c5 = Math.floor(Math.random() * _0xdffa6e.length);
              _0x47ca0d[_0x12cd46] = _0xdffa6e[_0x4783c5];
              _0xdffa6e.splice(_0x4783c5, 0x1);
            }
            return _0x47ca0d;
          }
          function _0x4d6ef7(_0x17933b, _0x15e429 = false) {
            let _0x15221b = null;
            let {
              scenario: _0x3c185c,
              sceneCode: _0xfdf28f,
              adType: _0xbf20d2,
              adTimes: _0x19f578,
              popName: _0x281e76,
              popGroupName: _0x22c6b3,
              requestNum: _0x1a9f9a,
              actionCode: _0x1a3139,
              nativeAdvObj: _0x2900f8
            } = _0x17933b;
            let _0x191b4b = {};
            if ("boost" === _0x1a3139) {
              _0x191b4b = _0x5c694b(_0x15e429, true);
              LOG("AD", "getBoostAdId XmTemplateAd", _0x15e429, _0x191b4b);
            } else {
              _0x191b4b = _0x799ce7(_0x15e429);
            }
            LOG("模版广告", "getNextTemplateAdData", _0x191b4b);
            if (_0x2900f8 && "冷却" !== _0x2900f8.id) {
              if (_0x7d98c8.failObject[_0x2900f8.id]) {
                _0x7d98c8.failObject[_0x2900f8.id]++;
              } else {
                _0x7d98c8.failObject[_0x2900f8.id] = 0x1;
              }
            }
            _0x592508();
            if (_0x191b4b.id) {
              var _0x708b93 = new Object({
                id: _0x191b4b.id,
                ad_network: 0x1,
                ad_type: "模版",
                scenario: _0x3c185c,
                type: "manu_ad",
                popName: _0x281e76,
                popGroupName: _0x22c6b3,
                requestNum: _0x1a9f9a,
                actionCode: _0x1a3139
              });
              0x0++;
              _0xc95620("request", Object.assign(_0x708b93, {
                result: "发起请求",
                adRequestNum: 0x0
              }));
              let _0x1aefcd = {
                adId: ""
              };
              let _0x182da3 = {
                id: _0x191b4b.id,
                layer: _0x191b4b.layer,
                "adMethod": "2.0",
                "brand": null.brand,
                advDetail: _0x1aefcd,
                title: "",
                "type": "manu_ad",
                "clickBtnTxt": "立即查看",
                "source": "",
                "materialUrl": "https://imgs.syreads.com/image/2022-06-29/adDefaultImg1.png",
                "ad_network": 0x1,
                "ad_type": "模版",
                is_ad_click: "no",
                "adType": _0xbf20d2,
                "adTimes": _0x19f578,
                "sceneCode": _0xfdf28f,
                "popName": _0x281e76,
                "popGroupName": _0x22c6b3,
                "requestNum": _0x1a9f9a,
                ad_style: "",
                "scenario": _0x3c185c,
                "isUsedAdButton": 0x2,
                "adRequestNum": 0x0,
                isUsedXiaomiButton: 0x3,
                "actionCode": _0x1a3139,
                result: "有广告"
              };
              _0x15221b = _0x182da3;
              (function (_0x1d309a) {
                if (!null.ad_template_ecpm) {
                  null.ad_template_ecpm = [];
                }
                _0x1d309a.price = Number(null.ad_template_ecpm[_0x1d309a.layer] || 0x0);
              })(_0x182da3);
            }
            return _0x15221b;
          }
          function _0x4be711(_0x3a7afc) {
            return 0x0 && 0x0 && 0x0 ? true && "".layers.length > 0x0 || false && "".layers.length > 0x0 ? (LOG("AD", "取开p-ing", "开p-ing1,开p-ing2,章首都开启", 0x1), _0x325783("screen", _0x3a7afc)) : false && "".layers.length > 0x0 ? (LOG("AD", "取章首", "开p-ing1,开p-ing2,章首都开启", 0x1), _0x325783("frist", _0x3a7afc)) : (LOG("AD", "取原生", "开p-ing1,开p-ing2,章首都开启", 0x1), _0x428084(_0x3a7afc)) : 0x0 && 0x0 && true ? (LOG("AD", "开p-ing1,开p-ing2,章首关闭"), true && "".layers.length > 0x0 || false && "".layers.length > 0x0 ? _0x325783("screen", _0x3a7afc) : (LOG("AD", "取原生", "开p-ing1,开p-ing2,章首关闭"), _0x428084(_0x3a7afc))) : 0x0 && true && 0x0 ? true && "".layers.length > 0x0 ? (LOG("AD", "取开p-ing", "开p-ing1,章首开启,开p-ing2关闭", 0x1), _0x325783("screen", _0x3a7afc)) : false && "".layers.length > 0x0 ? (LOG("AD", "取章首", "开p-ing1,章首开启,开p-ing2关闭", 0x1), _0x325783("frist", _0x3a7afc)) : (LOG("AD", "取原生", "开p-ing1,章首开启,开p-ing2关闭", 0x1), _0x428084(_0x3a7afc)) : true || 0x0 || 0x0 ? true && 0x0 ? true && "".layers.length > 0x0 ? (LOG("AD", "取章首", "仅开启章首", 0x1), _0x325783("frist", _0x3a7afc)) : (LOG("AD", "取原生", "仅开启章首", 0x1), _0x428084(_0x3a7afc)) : _0x428084(_0x3a7afc) : true && "".layers.length > 0x0 ? (LOG("AD", "取开p-ing", "仅开p-ing1开启", 0x1), _0x325783("screen", _0x3a7afc)) : (LOG("AD", "取原生", "仅开p-ing1开启", 0x1), _0x428084(_0x3a7afc));
          }
          async function _0x53a3a8(_0x18802e, _0x39da58, _0x1353ca = true) {
            LOG("AD", "getNewNativeAdv", _0x18802e);
            let {
              scenario: _0x16acb8,
              sceneCode: _0xc50249,
              adType: _0x2f0947,
              adTimes: _0x368dbf,
              popName: _0x2579a0,
              popGroupName: _0x4f768a,
              requestNum: _0xcb79e0,
              actionCode: _0xe6e8b6
            } = _0x18802e;
            let _0x150e6c = {};
            const _0x238921 = 0x7 === _0x2f0947 && ("oppo" === null.brand || "vivo" === null.brand);
            const _0x402d35 = 0x7 === _0x2f0947 && "huawei" === null.brand;
            const _0xf1999a = 0xb === _0x2f0947 && ("oppo" === null.brand || "vivo" === null.brand);
            const _0x1dea16 = 0xc === _0x2f0947 && "vivo" === null.brand;
            if ("AD_SCENE_READ_BANNER" == _0xc50249) {
              _0x150e6c = _0x4f3915(_0x1353ca);
              LOG("AD", "getNextNativeBannerAdId==>", _0x150e6c);
            } else {
              if ("boost" === _0xe6e8b6) {
                _0x150e6c = _0x5c694b(_0x1353ca, _0x238921);
                LOG("AD", "getBoostAdId", _0x150e6c);
              } else {
                if (_0x238921) {
                  const {
                    cool_switch: _0x1eedad,
                    cool_time: _0x23b264,
                    fail_num: _0x41ff17
                  } = null.cool_config;
                  if (0x1 == _0x1eedad && _0x23b264 > 0x0) {
                    _0x150e6c.id = "1";
                  } else {
                    _0x150e6c = _0x799ce7(_0x1353ca);
                    LOG("AD", "getNextTemplateAdId", _0x150e6c);
                  }
                } else if (_0x402d35) {
                  _0x150e6c = _0x799ce7(_0x1353ca);
                } else if (_0xf1999a) {
                  _0x150e6c = function (_0x5ea776 = false) {
                    "".curIndex = _0x5ea776 ? 0x0 : "".curIndex;
                    let _0x233ea5 = JSON.parse(JSON.stringify(""));
                    let _0xbcafc = "";
                    if (_0x233ea5.curIndex + 0x1 <= _0x233ea5.maxIndex) {
                      _0xbcafc = "".adsArr["".curIndex];
                      "".curIndex++;
                    }
                    return {
                      id: _0xbcafc,
                      layer: 0x0
                    };
                  }(_0x1353ca);
                  LOG("AD", "getNextNativeBiddingAdId", _0x150e6c);
                } else if (_0x1dea16) {
                  _0x150e6c = function (_0x3109ea = false) {
                    "".curLayer = _0x3109ea ? 0x0 : "".curLayer;
                    let _0x2c72c4 = JSON.parse(JSON.stringify(""));
                    let _0x263602 = "";
                    let _0x2fcfcb = 0x0;
                    if (_0x2c72c4.curLayer + 0x1 <= _0x2c72c4.maxLayer) {
                      _0x2fcfcb = _0x2c72c4.curLayer;
                      let _0x50d61f = _0x2c72c4.layers[_0x2fcfcb];
                      _0x263602 = _0x50d61f.adsArr[_0x50d61f.curIndex];
                      "".curLayer++;
                      "".layers[_0x2fcfcb].curIndex = (_0x50d61f.curIndex + 0x1) % _0x50d61f.maxIndex;
                    }
                    return {
                      id: _0x263602,
                      layer: _0x2fcfcb
                    };
                  }(_0x1353ca);
                  LOG("AD", "isNativeBidding", _0x150e6c);
                } else if ("vivoTag" === _0xe6e8b6) {
                  _0x150e6c = function (_0x47185a) {
                    let _0xaf1246 = {
                      id: ""
                    };
                    let _0x3e175f = null.ad_multiple_tag;
                    if (_0x47185a && _0x3e175f) {
                      _0xaf1246 = {
                        id: _0x190a54(_0x3e175f.split(","), 0x1)[0x0]
                      };
                    }
                    return _0xaf1246;
                  }(_0x1353ca);
                  LOG("AD", "getVivoTagAdId", _0x150e6c);
                } else if ("PAGE_ENTRY" === _0xe6e8b6) {
                  _0x150e6c = _0x5d8471(_0x1353ca);
                  LOG("AD", "getNextNativePageEntryAdId", _0x150e6c);
                } else if ("PAGE_BACK" === _0xe6e8b6) {
                  _0x150e6c = _0x33b35b(_0x1353ca);
                  LOG("AD", "getNextNativePageBackAdId", _0x150e6c);
                } else if (0x0 || 0x0) {
                  if ("nextAdId" === _0xe6e8b6) {
                    _0x1353ca = false;
                  }
                  _0x150e6c = _0x4be711(_0x1353ca);
                  LOG("AD", "getNextAdId1222==>", _0x150e6c);
                } else {
                  if ("nextAdId" === _0xe6e8b6) {
                    _0x1353ca = false;
                  }
                  _0x150e6c = _0x428084(_0x1353ca);
                  LOG("AD", "getNextAdId==>", _0x150e6c);
                }
              }
            }
            if (_0x150e6c.id && "冷却" !== _0x150e6c.id) {
              LOG("AD", "创建广告组件");
              var _0x3add92 = new Object({
                id: _0x150e6c.id,
                ad_network: 0x1,
                ad_type: "原生",
                scenario: _0x16acb8,
                type: "manu_ad",
                popName: _0x2579a0,
                popGroupName: _0x4f768a,
                requestNum: _0xcb79e0,
                actionCode: _0xe6e8b6
              });
              0x0++;
              if (_0x238921 || _0x402d35) {
                _0x3add92.ad_type = "模版";
              } else if (_0xf1999a) {
                _0x3add92.ad_type = "bidding(比价)";
              } else if (_0x1dea16) {
                _0x3add92.ad_type = "bidding";
              }
              if (!_0x238921) {
                _0xc95620("request", Object.assign(_0x3add92, {
                  result: "发起请求",
                  adRequestNum: 0x0
                }));
              }
              let _0x2876be = await new Promise((_0x3f587b, _0x33788b) => {
                if (_0x238921) {
                  let _0x1a07a7 = _0x4d6ef7(_0x18802e, true);
                  _0x3f587b([_0x1a07a7]);
                } else {
                  if ("vivo" == null.brand && undefined !== $app_require$("@app-module/service.ad").preloadAd && null.platformVersionCode > 0x445) {
                    let _0x4f9d73 = false;
                    try {
                      _0x4f9d73 = $app_require$("@app-module/service.ad").canIUse({
                        type: "feedMultiAd"
                      });
                    } catch (_0x45456f) {}
                    LOG("AD", "vivo是否支持队列请求", _0x4f9d73);
                    let _0x337927 = {
                      adUnitId: _0x150e6c.id,
                      type: "native"
                    };
                    if (_0x4f9d73) {
                      _0x337927.adCount = 0x1;
                    }
                    LOG("AD", "当前位VIVO渠道字段===>", "");
                    _0x337927.channel = "".replace("@@", _0x16acb8);
                    LOG("AD", "当前位VIVO渠道字段===>", _0x337927.channel);
                    $app_require$("@app-module/service.ad").preloadAd(_0x13d289(_0x13d289({}, _0x337927), {}, {
                      success: _0x74fe => {
                        LOG("AD", "广告ADSDK========>vivo2.0获取广告成功", _0x74fe);
                        let _0xb582c0 = [];
                        _0x74fe.adList.map(_0x1b81e3 => {
                          let _0x320403 = {
                            id: _0x150e6c.id,
                            "layer": _0x150e6c.layer,
                            "adMethod": "2.0",
                            "brand": "vivo",
                            "advDetail": _0x1b81e3
                          };
                          _0x320403.title = _0x320403.advDetail.title;
                          _0x320403.type = "manu_ad";
                          _0x320403.clickBtnTxt = _0x320403.advDetail.clickBtnTxt ? _0x320403.advDetail.clickBtnTxt : "立即查看";
                          _0x320403.source = _0x320403.advDetail.desc;
                          _0x320403.materialUrl = _0x4242bb(_0x320403.advDetail);
                          _0x320403.icon = _0x320403.advDetail.icon;
                          _0x320403.ad_network = 0x1;
                          _0x320403.ad_type = _0x3add92.ad_type;
                          _0x320403.is_ad_click = "no";
                          _0x320403.adType = _0x2f0947;
                          _0x320403.adTimes = _0x368dbf;
                          _0x320403.sceneCode = _0xc50249;
                          _0x320403.popName = _0x2579a0;
                          _0x320403.popGroupName = _0x4f768a;
                          _0x320403.requestNum = _0xcb79e0;
                          _0x320403.ad_style = "" + _0x320403.advDetail.interactionType;
                          _0x320403.scenario = _0x16acb8;
                          _0x320403.isUsedAdButton = 0x2;
                          _0x320403.isUsedVivoButton = 0x3;
                          _0x320403.adRequestNum = 0x0;
                          _0x320403.actionCode = _0xe6e8b6;
                          _0x12516c(_0xe6e8b6, _0x1b81e3, _0x320403, _0xf1999a, !_0xf1999a && _0x1b81e3.price > 0x0);
                          _0x4bffbf["default"].fetch({
                            url: _0x320403.materialUrl,
                            method: "get"
                          });
                          _0x320403.result = "有广告" + (_0x320403.price ? _0x320403.price : "");
                          _0xc95620("request", _0x320403);
                          _0xb582c0.push(_0x320403);
                        });
                        _0x3f587b(_0xb582c0);
                      },
                      fail: (_0x5ac02c, _0x12dcc3) => {
                        if (0xcd === _0x12dcc3) {
                          LOG("AD", "205广告ADSDK========>vivo2.0获取广告成功", _0x5ac02c);
                          let _0x24dbed = [];
                          _0x5ac02c.adList.map(_0x10d0b4 => {
                            let _0x543648 = {
                              id: _0x150e6c.id,
                              "layer": _0x150e6c.layer,
                              "adMethod": "2.0",
                              brand: "vivo",
                              advDetail: _0x10d0b4
                            };
                            _0x543648.title = _0x543648.advDetail.title;
                            _0x543648.type = "manu_ad";
                            _0x543648.showCount = 0x1;
                            _0x543648.clickBtnTxt = _0x543648.advDetail.clickBtnTxt ? _0x543648.advDetail.clickBtnTxt : "立即查看";
                            _0x543648.source = _0x543648.advDetail.desc;
                            _0x543648.materialUrl = _0x4242bb(_0x543648.advDetail);
                            _0x543648.icon = _0x543648.advDetail.icon;
                            _0x543648.ad_network = 0x1;
                            _0x543648.ad_type = _0x3add92.ad_type;
                            _0x543648.is_ad_click = "no";
                            _0x543648.adType = _0x2f0947;
                            _0x543648.adTimes = _0x368dbf;
                            _0x543648.sceneCode = _0xc50249;
                            _0x543648.popName = _0x2579a0;
                            _0x543648.popGroupName = _0x4f768a;
                            _0x543648.requestNum = _0xcb79e0;
                            _0x543648.ad_style = "" + _0x543648.advDetail.interactionType;
                            _0x543648.scenario = _0x16acb8;
                            _0x543648.isUsedAdButton = 0x2;
                            _0x543648.isUsedVivoButton = 0x3;
                            _0x543648.adRequestNum = 0x0;
                            _0x12516c(_0xe6e8b6, _0x10d0b4, _0x543648, _0xf1999a, !_0xf1999a && _0x10d0b4.price > 0x0);
                            _0x4bffbf["default"].fetch({
                              url: _0x543648.materialUrl,
                              method: "get"
                            });
                            _0x543648.result = "有广告" + (_0x543648.price ? _0x543648.price : "");
                            _0x543648.actionCode = _0xe6e8b6;
                            _0xc95620("request", _0x543648);
                            _0x24dbed.push(_0x543648);
                          });
                          _0x3f587b(_0x24dbed);
                        } else {
                          LOG("AD", "广告ADSDK========>vivo2.0获取广告失败", _0x5ac02c);
                          _0x3add92.result = "无广告" + (_0x5ac02c.errCode ? _0x5ac02c.errCode : "错误码获取失败");
                          _0x3add92.actionCode = _0xe6e8b6;
                          _0xc95620("request", _0x3add92);
                          if (_0x7d98c8.failObject[_0x150e6c.id]) {
                            _0x7d98c8.failObject[_0x150e6c.id]++;
                          } else {
                            _0x7d98c8.failObject[_0x150e6c.id] = 0x1;
                          }
                          LOG("失败的key", _0x7d98c8.failObject);
                          _0x3f587b(false);
                        }
                      }
                    }));
                  } else {
                    if ("oppo" == null.brand && null.platformVersionCode > 0x443) {
                      let _0x1eaeab = {
                        id: _0x150e6c.id,
                        "layer": _0x150e6c.layer,
                        "adMethod": "2.0",
                        "brand": "oppo",
                        "title": "",
                        "type": "manu_ad",
                        "showCount": 0x1,
                        "clickBtnTxt": "领取奖励",
                        "source": "",
                        materialUrl: "https://imgs.syreads.com/image/2022-06-29/adDefaultImg1.png",
                        ad_network: 0x1,
                        "ad_type": _0x3add92.ad_type,
                        "is_ad_click": "no",
                        "isAdLoadError": true,
                        "result": "无广告",
                        "adType": _0x2f0947,
                        "adTimes": _0x368dbf,
                        sceneCode: _0xc50249,
                        scenario: _0x16acb8,
                        "popName": _0x2579a0,
                        "popGroupName": _0x4f768a,
                        requestNum: _0xcb79e0,
                        "ad_style": "",
                        isUsedAdButton: 0x2,
                        "isUsedOppoButton": 0x3,
                        "adRequestNum": 0x0,
                        "actionCode": _0xe6e8b6
                      };
                      _0x12516c(_0xe6e8b6, {}, _0x1eaeab);
                      if (_0x3f84d1() && "AD_SCENE_READ_BANNER" !== _0xc50249) {
                        $app_require$("@app-module/service.ad").preloadAd({
                          adUnitId: _0x150e6c.id,
                          adCount: 0x1,
                          type: "native",
                          ecpm: _0xf1999a,
                          success: _0x360565 => {
                            LOG(_0x360565, "oppo预加载成功", _0x150e6c.id);
                            _0x1eaeab.advDetail = _0x360565.adList[0x0];
                            _0x12516c(_0xe6e8b6, _0x1eaeab.advDetail, _0x1eaeab, _0xf1999a);
                            if (_0xf1999a) {
                              $app_require$("@app-module/service.ad").setBidECPM({
                                adid: _0x1eaeab.advDetail.adId,
                                ecpm: _0x1eaeab.price
                              });
                            }
                            _0x3f587b([_0x1eaeab]);
                          },
                          fail: (_0x215032, _0x35af59) => {
                            const _0x1f3a84 = _0x215032.errCode || _0x35af59;
                            _0x3add92.result = "无广告" + (_0x1f3a84 || "错误码获取失败");
                            let _0x25d736 = new RegExp(/rawError=.*?/.source + /\[(\d+)\]/.source);
                            try {
                              if (_0x215032.errMsg && _0x25d736.test(_0x215032.errMsg)) {
                                _0x3add92.result = _0x3add92.result + _0x25d736.exec(_0x215032.errMsg)[0x0];
                              }
                            } catch (_0x211cb2) {
                              LOG("refError===>", _0x211cb2);
                            }
                            _0x3add92.actionCode = _0xe6e8b6;
                            LOG(_0x215032, _0x1f3a84, "oppo预加载失败", _0x3add92.result);
                            _0xc95620("request", _0x3add92);
                            if (_0x7d98c8.failObject[_0x150e6c.id]) {
                              _0x7d98c8.failObject[_0x150e6c.id]++;
                            } else {
                              _0x7d98c8.failObject[_0x150e6c.id] = 0x1;
                            }
                            LOG("失败的key", _0x7d98c8.failObject);
                            _0x3f587b(false);
                          }
                        });
                      } else {
                        _0x3f587b([_0x1eaeab]);
                      }
                    } else {
                      if (AD_UTILS.isXM2(null.brand) && undefined !== $app_require$("@app-module/service.ad").preloadAd) {
                        let _0x4ce974 = {
                          adUnitId: _0x150e6c.id,
                          adCount: 0x1,
                          type: "native"
                        };
                        $app_require$("@app-module/service.ad").preloadAd(_0x13d289(_0x13d289({}, _0x4ce974), {}, {
                          success: _0x3c9975 => {
                            let _0x1f1e65 = [];
                            if (_0x3c9975.adList) {
                              LOG("AD", "广告ADSDK========>xiaomi2.0获取广告成功", _0x3c9975);
                              _0x3c9975.adList.map(_0x386d13 => {
                                let _0x4575ce = {
                                  id: _0x150e6c.id,
                                  "layer": _0x150e6c.layer,
                                  "adMethod": "2.0",
                                  "brand": "xiaomi",
                                  "advDetail": _0x386d13
                                };
                                _0x4575ce.title = _0x4575ce.advDetail.title;
                                _0x4575ce.type = "manu_ad";
                                _0x4575ce.clickBtnTxt = _0x4575ce.advDetail.clickBtnTxt ? _0x4575ce.advDetail.clickBtnTxt : "立即查看";
                                _0x4575ce.source = _0x4575ce.advDetail.desc;
                                _0x4575ce.materialUrl = _0x4242bb(_0x4575ce.advDetail);
                                _0x4575ce.icon = _0x4575ce.advDetail.icon;
                                _0x4575ce.ad_network = 0x1;
                                _0x4575ce.ad_type = "原生";
                                _0x4575ce.is_ad_click = "no";
                                _0x4575ce.adType = _0x2f0947;
                                _0x4575ce.adTimes = _0x368dbf;
                                _0x4575ce.sceneCode = _0xc50249;
                                _0x4575ce.popName = _0x2579a0;
                                _0x4575ce.popGroupName = _0x4f768a;
                                _0x4575ce.requestNum = _0xcb79e0;
                                _0x4575ce.ad_style = "" + _0x4575ce.advDetail.interactionType;
                                _0x4575ce.scenario = _0x16acb8;
                                _0x4575ce.isUsedAdButton = 0x2;
                                _0x4575ce.adRequestNum = 0x0;
                                _0x4575ce.isUsedXiaomiButton = 0x3;
                                _0x4bffbf["default"].fetch({
                                  url: _0x4575ce.materialUrl,
                                  method: "get"
                                });
                                _0x4575ce.result = "有广告";
                                _0xc95620("request", _0x4575ce);
                                _0x1f1e65.push(_0x4575ce);
                              });
                              _0x3f587b(_0x1f1e65);
                            } else {
                              LOG("AD", "广告ADSDK========>" + null.brand + "2.0获取广告失败", _0x3c9975.errCode);
                              _0x3add92.result = "无广告" + (_0x3c9975.errCode ? _0x3c9975.errCode : "错误码获取失败");
                              _0xc95620("request", _0x3add92);
                              if (_0x7d98c8.failObject[_0x150e6c.id]) {
                                _0x7d98c8.failObject[_0x150e6c.id]++;
                              } else {
                                _0x7d98c8.failObject[_0x150e6c.id] = 0x1;
                              }
                              _0x3f587b(false);
                            }
                          },
                          fail: function (_0x223b3d, _0x31c606) {
                            const _0xebd0ac = _0x223b3d.errCode || _0x31c606;
                            LOG("AD", "广告ADSDK========>" + null.brand + "2.0获取广告失败", _0x223b3d, _0x31c606, _0xebd0ac);
                            _0x3add92.result = "无广告" + (_0xebd0ac || "错误码获取失败");
                            _0xc95620("request", _0x3add92);
                            if (_0x7d98c8.failObject[_0x150e6c.id]) {
                              _0x7d98c8.failObject[_0x150e6c.id]++;
                            } else {
                              _0x7d98c8.failObject[_0x150e6c.id] = 0x1;
                            }
                            _0x3f587b(false);
                          }
                        }));
                      } else {
                        if ("honor" == null.brand && null.platformVersionCode >= 0x456) {
                          let _0x228d13 = $app_require$("@app-module/service.ad").createPictureAd({
                            adUnitId: _0x150e6c.id,
                            allowRecommend: true
                          });
                          _0x228d13.load({
                            adCount: 0x1,
                            success: _0x5df2b2 => {
                              if (0x0 === _0x5df2b2.resultCode) {
                                LOG("AD", "广告ADSDK========>honor2.0获取广告成功", JSON.stringify(_0x5df2b2));
                                let _0x43ced8 = [];
                                _0x5df2b2.adInstanceList.map(_0x5ea9fe => {
                                  let _0x5303df = {
                                    id: _0x150e6c.id,
                                    "layer": _0x150e6c.layer,
                                    "adMethod": "2.0",
                                    "brand": "honor",
                                    "advDetail": _0x5ea9fe
                                  };
                                  _0x5303df.title = _0x5303df.advDetail.brand;
                                  _0x5303df.type = "manu_ad";
                                  _0x5303df.clickBtnTxt = _0x5303df.advDetail.clickBtnTxt ? _0x5303df.advDetail.clickBtnTxt : "立即查看";
                                  _0x5303df.source = _0x5303df.advDetail.title;
                                  _0x5303df.materialUrl = _0x4242bb(_0x5303df.advDetail, 0x1);
                                  _0x5303df.icon = _0x5303df.advDetail.logo;
                                  _0x5303df.ad_network = 0x1;
                                  _0x5303df.ad_type = "原生";
                                  _0x5303df.is_ad_click = "no";
                                  _0x5303df.adType = _0x2f0947;
                                  _0x5303df.adTimes = _0x368dbf;
                                  _0x5303df.sceneCode = _0xc50249;
                                  _0x5303df.popName = _0x2579a0;
                                  _0x5303df.popGroupName = _0x4f768a;
                                  _0x5303df.requestNum = _0xcb79e0;
                                  _0x5303df.ad_style = "" + _0x5303df.advDetail.promotionPurpose;
                                  _0x5303df.scenario = _0x16acb8;
                                  _0x5303df.adRequestNum = 0x0;
                                  _0x5303df.actionCode = _0xe6e8b6;
                                  _0x5303df.isUsedHonorButton = 0x3;
                                  _0x5303df.adInstance = _0x228d13;
                                  _0x4bffbf["default"].fetch({
                                    url: _0x5303df.materialUrl,
                                    method: "get"
                                  });
                                  _0x5303df.result = "有广告";
                                  _0xc95620("request", _0x5303df);
                                  _0x43ced8.push(_0x5303df);
                                });
                                _0x3f587b(_0x43ced8);
                              } else {
                                LOG("AD", "广告ADSDK========>honor2.0获取广告失败", _0x5df2b2);
                                _0x3add92.result = "无广告" + (_0x5df2b2.resultCode ? _0x5df2b2.resultCode : "错误码获取失败");
                                _0x3add92.actionCode = _0xe6e8b6;
                                _0xc95620("request", _0x3add92);
                                if (_0x7d98c8.failObject[_0x150e6c.id]) {
                                  _0x7d98c8.failObject[_0x150e6c.id]++;
                                } else {
                                  _0x7d98c8.failObject[_0x150e6c.id] = 0x1;
                                }
                                LOG("失败的key", _0x7d98c8.failObject);
                                _0x3f587b(false);
                              }
                            },
                            fail: (_0x41a6f8, _0x5ec898) => {
                              if (0xcd === _0x5ec898) {
                                LOG("AD", "205广告ADSDK========>honor2.0获取广告成功", _0x41a6f8);
                                let _0x25fe74 = [];
                                _0x41a6f8.adList.map(_0x75209d => {
                                  let _0x3e2e29 = {
                                    id: _0x150e6c.id,
                                    "layer": _0x150e6c.layer,
                                    adMethod: "2.0",
                                    brand: "honor",
                                    "advDetail": _0x75209d
                                  };
                                  _0x3e2e29.title = _0x3e2e29.advDetail.brand;
                                  _0x3e2e29.type = "manu_ad";
                                  _0x3e2e29.showCount = 0x1;
                                  _0x3e2e29.clickBtnTxt = _0x3e2e29.advDetail.clickBtnTxt ? _0x3e2e29.advDetail.clickBtnTxt : "立即查看";
                                  _0x3e2e29.source = _0x3e2e29.advDetail.title;
                                  _0x3e2e29.materialUrl = _0x4242bb(_0x3e2e29.advDetail);
                                  _0x3e2e29.icon = _0x3e2e29.advDetail.logo;
                                  _0x3e2e29.ad_network = 0x1;
                                  _0x3e2e29.ad_type = "原生";
                                  _0x3e2e29.is_ad_click = "no";
                                  _0x3e2e29.adType = _0x2f0947;
                                  _0x3e2e29.adTimes = _0x368dbf;
                                  _0x3e2e29.sceneCode = _0xc50249;
                                  _0x3e2e29.popName = _0x2579a0;
                                  _0x3e2e29.popGroupName = _0x4f768a;
                                  _0x3e2e29.requestNum = _0xcb79e0;
                                  _0x3e2e29.ad_style = "" + _0x3e2e29.advDetail.promotionPurpose;
                                  _0x3e2e29.scenario = _0x16acb8;
                                  _0x3e2e29.adRequestNum = 0x0;
                                  _0x3e2e29.isUsedHonorButton = 0x3;
                                  _0x4bffbf["default"].fetch({
                                    url: _0x3e2e29.materialUrl,
                                    method: "get"
                                  });
                                  _0x3e2e29.result = "有广告";
                                  _0x3e2e29.actionCode = _0xe6e8b6;
                                  _0xc95620("request", _0x3e2e29);
                                  _0x25fe74.push(_0x3e2e29);
                                });
                                _0x3f587b(_0x25fe74);
                              } else {
                                LOG("AD", "广告ADSDK========>honor2.0获取广告失败", _0x41a6f8);
                                _0x3add92.result = "无广告" + (_0x41a6f8.resultCode ? _0x41a6f8.resultCode : "错误码获取失败");
                                _0x3add92.actionCode = _0xe6e8b6;
                                _0xc95620("request", _0x3add92);
                                if (_0x7d98c8.failObject[_0x150e6c.id]) {
                                  _0x7d98c8.failObject[_0x150e6c.id]++;
                                } else {
                                  _0x7d98c8.failObject[_0x150e6c.id] = 0x1;
                                }
                                LOG("失败的key", _0x7d98c8.failObject);
                                _0x3f587b(false);
                              }
                            }
                          });
                        } else {
                          let _0x238741 = true && $app_require$("@app-module/service.ad").createNativeAd({
                            adUnitId: _0x150e6c.id
                          });
                          if ("object" == typeof _0x238741) {
                            _0x238741.id = _0x150e6c.id;
                            _0x238741.layer = _0x150e6c.layer;
                            _0x238741.adMethod = "0.0";
                            _0x238741.brand = null.brand;
                            let _0x9f2e1f = false;
                            const _0x31acc0 = _0x2f0947;
                            if (_0x238741) {
                              _0x238741.onLoad(_0x5af7c3 => {
                                if (0x7 === _0x31acc0) {
                                  if (_0x9f2e1f) {
                                    return;
                                  }
                                  _0x9f2e1f = true;
                                }
                                const _0x48b225 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_shield_temp;
                                if (_0x48b225 && Number(_0x48b225.val) && _0x5af7c3.adList && _0x5af7c3.adList[0x0] && _0x5af7c3.adList[0x0].creativeType && 0x63 === _0x5af7c3.adList[0x0].creativeType) {
                                  LOG("AD", "广告ADSDK========>" + null.brand + "0.0获取广告失败", "请求成功但屏蔽模版");
                                  _0x3add92.result = "无广告请求成功但屏蔽模版";
                                  _0x3add92.actionCode = _0xe6e8b6;
                                  _0xc95620("request", _0x3add92);
                                  _0x238741.offLoad();
                                  _0x238741.offError();
                                  _0x238741.destroy();
                                  if (_0x7d98c8.failObject[_0x150e6c.id]) {
                                    _0x7d98c8.failObject[_0x150e6c.id]++;
                                  } else {
                                    _0x7d98c8.failObject[_0x150e6c.id] = 0x1;
                                  }
                                  LOG("失败的key", _0x7d98c8.failObject);
                                  return void _0x3f587b(false);
                                }
                                LOG("AD", "广告ADSDK========>" + null.brand + "0.0获取广告成功", _0x5af7c3);
                                if (_0x5af7c3.adList && _0x5af7c3.adList[0x0] && _0x5af7c3.adList[0x0].creativeType && 0x63 !== _0x5af7c3.adList[0x0].creativeType) {
                                  _0x2f0947 = 0x1;
                                }
                                _0x238741.advDetail = _0x5af7c3.adList && _0x5af7c3.adList[0x0];
                                _0x238741.type = "manu_ad";
                                _0x238741.clickBtnTxt = _0x238741.advDetail.clickBtnTxt ? _0x238741.advDetail.clickBtnTxt : "立即查看";
                                if ("huawei" == null.brand) {
                                  _0x238741.source = _0x238741.advDetail.title;
                                  _0x238741.title = _0x238741.advDetail.source;
                                } else {
                                  _0x238741.source = _0x238741.advDetail.desc;
                                  _0x238741.title = _0x238741.advDetail.title;
                                }
                                _0x238741.materialUrl = _0x4242bb(_0x238741.advDetail);
                                _0x238741.icon = _0x238741.advDetail.icon;
                                _0x238741.ad_network = 0x1;
                                _0x238741.ad_type = _0x3add92.ad_type;
                                _0x238741.is_ad_click = "no";
                                _0x238741.adType = _0x2f0947;
                                _0x238741.adTimes = _0x368dbf;
                                _0x238741.sceneCode = _0xc50249;
                                _0x238741.scenario = _0x16acb8;
                                _0x238741.popName = _0x2579a0;
                                _0x238741.popGroupName = _0x4f768a;
                                _0x238741.requestNum = _0xcb79e0;
                                _0x238741.isUsedAdButton = 0x2;
                                _0x238741.adRequestNum = 0x0;
                                _0x238741.actionCode = _0xe6e8b6;
                                _0x4bffbf["default"].fetch({
                                  url: _0x238741.materialUrl,
                                  method: "get"
                                });
                                _0x238741.ad_style = "" + _0x238741.advDetail.interactionType;
                                if ("huawei" == null.brand) {
                                  _0x238741.ad_style = "" + _0x238741.advDetail.creativeType;
                                }
                                _0x238741.result = "有广告";
                                _0xc95620("request", _0x238741);
                                if (function (_0x2ec4d8) {
                                  try {
                                    let _0x23618d = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").config;
                                    if (!_0x23618d || 0x0 === Number(_0x23618d.tag_switch) || "1" !== AD_SDK_UTILS.getAdDictConfig("is_delete_filter_ad")) {
                                      return false;
                                    }
                                    const _0x424048 = _0x23618d.tag_ads || TACTICS_SDK.getGlobalData("ad_data_pool_tag") || "";
                                    const _0x3da6ee = Number(_0x23618d.huawei_ads_switch) && ("2" == _0x2ec4d8.ad_style || "3" == _0x2ec4d8.ad_style);
                                    let _0x1e6596 = _0x2ec4d8.advDetail && _0x2ec4d8.advDetail.appName;
                                    let _0x52c3a7 = !(Number(_0x23618d.data_pool_limit) && _0x23618d.data_pool_ads);
                                    if (Number(_0x23618d.data_pool_limit) && _0x23618d.data_pool_ads) {
                                      _0x52c3a7 = _0x23618d.data_pool_ads.split(",").includes(_0x2ec4d8.id);
                                    }
                                    if (_0x424048 || _0x3da6ee) {
                                      const _0x4db8ef = _0x424048.split(",");
                                      if (_0x1e6596 && _0x4db8ef.includes(_0x1e6596) && _0x52c3a7 || _0x3da6ee && _0x52c3a7) {
                                        LOG("filterAd HW删除");
                                        return true;
                                      }
                                    }
                                  } catch (_0x4e0df6) {
                                    LOG("filteHWAd", _0x4e0df6);
                                  }
                                  return false;
                                }(_0x238741)) {
                                  _0x238741.isFilterDelAd = true;
                                } else if (_0x238741) {
                                  _0x238741.reportAdShow({
                                    adId: _0x238741.advDetail.adId
                                  });
                                }
                                LOG("AD", "nativeAdvObj", _0x238741);
                                _0x238741.offLoad();
                                _0x238741.offError();
                                _0x3f587b([_0x238741]);
                              });
                            }
                            _0x238741.onError(_0xf617e8 => {
                              if (0x7 === _0x31acc0) {
                                if (_0x9f2e1f) {
                                  return;
                                }
                                _0x9f2e1f = true;
                              }
                              LOG("AD", "广告ADSDK========>" + null.brand + "0.0获取广告失败", _0xf617e8);
                              _0x3add92.result = "无广告" + (_0xf617e8.errCode ? _0xf617e8.errCode : "错误码获取失败");
                              _0x3add92.actionCode = _0xe6e8b6;
                              _0xc95620("request", _0x3add92);
                              _0x238741.offLoad();
                              _0x238741.offError();
                              _0x238741.destroy();
                              if (_0x7d98c8.failObject[_0x150e6c.id]) {
                                _0x7d98c8.failObject[_0x150e6c.id]++;
                              } else {
                                _0x7d98c8.failObject[_0x150e6c.id] = 0x1;
                              }
                              LOG("失败的key", _0x7d98c8.failObject);
                              _0x3f587b(false);
                            });
                            if (0x7 === _0x2f0947) {
                              _0x238741.load({
                                supportTemplate: true
                              });
                            } else {
                              _0x238741.load();
                            }
                          } else {
                            LOG("AD", "广告ADSDK========>" + null.brand + "0.0获取广告失败", _0x238741);
                            _0x3f587b(false);
                          }
                        }
                      }
                    }
                  }
                }
              });
              LOG("AD", "广告ADSDK========>获取的广告", _0x2876be);
              if (_0x2876be) {
                if ("oppo" !== null.brand) {
                  _0x3ebd73 = _0x150e6c.id;
                  if (_0x7d98c8.failObject[_0x3ebd73]) {
                    _0x7d98c8.failObject[_0x3ebd73] = 0x0;
                  }
                }
                _0x7d98c8.manuAdvSourceArr = _0x2876be.concat(_0x7d98c8.manuAdvSourceArr);
                if (_0x39da58) {
                  _0x39da58();
                }
              } else {
                await _0x53a3a8(_0x18802e, _0x39da58, false);
                _0x592508();
              }
            } else if ("冷却" === _0x150e6c.id || undefined === _0x150e6c.id) {
              setTimeout(async () => {
                await _0x53a3a8(_0x18802e, _0x39da58, false);
              }, 0x5dc);
            } else {
              LOG("AD", "广告ADSDK========>无可用广告位ID");
              if (_0x39da58) {
                _0x39da58();
              }
            }
            var _0x3ebd73;
          }
          function _0x592508() {
            if (!null.cool_config || !null.cool_config.cool_switch) {
              return false;
            }
            for (let _0x5b0dce in _0x7d98c8.failObject) if (_0x7d98c8.failObject[_0x5b0dce] >= null.cool_config.fail_num) {
              new _0x57b23c.Countdown().start({
                startTime: new Date().getTime(),
                endTime: new Date().getTime() + 0x3e8 * null.cool_config.cool_time
              }).then(_0x237072 => {
                if (null == _0x237072) {
                  for (let _0x88e1ae in _0x7d98c8.failObject) if (_0x7d98c8.failObject[_0x88e1ae] >= null.cool_config.fail_num) {
                    _0x7d98c8.failObject[_0x88e1ae] = 0x0;
                  }
                  LOG("AD", _0x7d98c8.failObject, "倒计时结束");
                } else {
                  LOG("AD", JSON.stringify(_0x7d98c8.failObject), _0x237072, "倒计时中");
                }
              })["catch"](_0x51df7a => {
                console.log(_0x51df7a);
              });
            }
          }
          function _0x4242bb(_0x34789f, _0x1a502a) {
            let _0x34e3de = "";
            let _0x14ff51 = _0x34789f.icon && "object" != typeof _0x34789f.icon ? _0x34789f.icon : "";
            let _0x394238 = _0x34789f.imgUrlList && _0x34789f.imgUrlList[0x0] ? _0x34789f.imgUrlList[0x0] : "";
            if (_0x1a502a) {
              _0x14ff51 = _0x34789f.logo && "object" != typeof _0x34789f.logo ? _0x34789f.logo : "";
              _0x394238 = _0x34789f.images && _0x34789f.images[0x0] ? _0x34789f.images[0x0] : "";
            }
            _0x34e3de = _0x394238 || _0x14ff51;
            if (_0x34e3de && -0x1 != _0x34e3de.indexOf(".mp4") || !_0x34e3de || "string" != typeof _0x34e3de) {
              _0x34e3de = "https://imgs.syreads.com/image/2022-06-29/adDefaultImg1.png";
            }
            return _0x34e3de;
          }
          let _0x25329e = [];
          function _0x14a6af(_0x28e700, _0x1a988e) {
            if ("huawei" == null.brand && !_0x28e700.isNext && (_0x25329e.push({
              param: _0x28e700,
              callBack: _0x1a988e
            }), _0x25329e.length > 0x1)) {
              return void LOG("入队列");
            }
            let {
              scenario: _0x2dec5e,
              sceneCode: _0x52261e,
              popName: _0x3d6dbb,
              popGroupName: _0x3c6032,
              requestNum: _0x437839
            } = _0x28e700;
            if ("vivo" == null.brand || "oppo" == null.brand || "huawei" == null.brand && null.platformVersionCode > 0x42d || "xiaomi" == null.brand && null.platformVersionCode > 0x431 || "honor" == null.brand && null.platformVersionCode >= 0x456) {
              if (_0x7d98c8.manuAdvSourceArr && _0x7d98c8.manuAdvSourceArr[0x0]) {
                let _0x4f154 = _0x7d98c8.manuAdvSourceArr.splice(0x0, 0x1);
                _0x4f154[0x0].scenario = _0x2dec5e;
                _0x4f154[0x0].sceneCode = _0x52261e;
                _0x4f154[0x0].popName = _0x3d6dbb;
                _0x4f154[0x0].popGroupName = _0x3c6032;
                _0x4f154[0x0].requestNum = _0x437839;
                if (_0x1a988e) {
                  _0x1a988e(_0x4f154[0x0]);
                }
              } else {
                _0x53a3a8(_0x28e700, () => {
                  if ("huawei" == null.brand) {
                    _0x25329e.shift();
                  }
                  LOG("AD", "广告ADSDK========>广告池数据111", _0x7d98c8.manuAdvSourceArr);
                  if (_0x7d98c8.manuAdvSourceArr && _0x7d98c8.manuAdvSourceArr[0x0]) {
                    let _0x54d20c = _0x7d98c8.manuAdvSourceArr.splice(0x0, 0x1);
                    _0x54d20c[0x0].scenario = _0x2dec5e;
                    _0x54d20c[0x0].sceneCode = _0x52261e;
                    if (_0x1a988e) {
                      _0x1a988e(_0x54d20c[0x0]);
                    }
                  } else if (_0x1a988e) {
                    _0x1a988e("");
                  }
                  if ("huawei" == null.brand && _0x25329e.length > 0x0) {
                    LOG("出队列");
                    const _0x30ec4f = _0x25329e.slice(0x0, 0x1);
                    _0x30ec4f[0x0].param.isNext = true;
                    _0x14a6af(_0x30ec4f[0x0].param, _0x30ec4f[0x0].callBack);
                  }
                });
              }
            }
          }
          function _0xc95620(_0x2937b2, _0x4484f1, _0x2116bc = "btn") {
            if (!_0x4484f1 || !_0x4484f1.id) {
              return;
            }
            let _0x2714d8 = new Object();
            _0x2714d8.ad_id = _0x4484f1.id;
            _0x2714d8.ad_network = _0x4484f1.ad_network ? _0x4484f1.ad_network : 0x1;
            _0x2714d8.ad_type = _0x4484f1.ad_type ? _0x4484f1.ad_type : "原生";
            _0x2714d8.result = _0x4484f1.result ? _0x4484f1.result : "";
            _0x2714d8.page_name = _0x4484f1.scenario ? _0x4484f1.scenario : "";
            _0x2714d8.ad_position = _0x4484f1.popName ? _0x4484f1.popName : _0x2714d8.page_name;
            _0x2714d8.page_type = _0x4484f1.popGroupName ? _0x4484f1.popGroupName : _0x2714d8.page_name;
            _0x2714d8.duration = "" + (_0x4484f1.requestNum ? _0x4484f1.requestNum : 0x1);
            _0x2714d8.ad_style = _0x4484f1.ad_style ? _0x4484f1.ad_style : "";
            _0x2714d8.adRequestNum = "" + (_0x4484f1.adRequestNum || "1");
            _0x2714d8.referer = "" + (_0x4484f1.referer || "");
            _0x2714d8.scene = "" + (_0x4484f1.scene || "");
            _0x2714d8.utm_term = ZHX_UUP_UTILS.getReportZhxUup() ? "zhx" : "非zhx";
            if ("boost" === _0x4484f1.actionCode) {
              _0x2714d8.ad_position = _0x2714d8.ad_position + "(曝光池)";
            } else {
              if ("request" == _0x2937b2 && ("huawei" == null.brand || "honor" == null.brand)) {
                let _0xaa5083 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_ad_data_pool;
                _0xaa5083 = _0xaa5083 && Number(_0xaa5083.val) || 0x0;
                if (_0xaa5083) {
                  _0x2714d8.ad_position = _0x2714d8.ad_position + "(数据池广告)";
                }
              }
            }
            let _0x44a8b9 = "btn" == _0x2116bc ? "按钮" : "素材";
            let {
              ad_id: _0x3ad5c7,
              ad_network: _0x435546,
              ad_type: _0x24857b,
              page_name: _0x2f02cd,
              page_type: _0x7e6127,
              ad_position: _0x3eb120,
              result: _0x28ef39,
              duration: _0x7a7786,
              ad_style: _0x2b79d3,
              adRequestNum: _0x279824,
              referer: _0x29a53a,
              scene: _0x4ed566,
              utm_term: _0x3940fb
            } = _0x2714d8;
            LOG("AD", "uploadAdInfo==============>", _0x2937b2, _0x2714d8, _0x2116bc);
            switch (_0x2937b2) {
              case "request":
                COMMON_REPORT_UTILS.ad_sdk_request_report(_0x3ad5c7, _0x435546, _0x24857b, _0x2f02cd, _0x7e6127, _0x3eb120, _0x28ef39, _0x279824, _0x2b79d3);
                break;
              case "show":
                COMMON_REPORT_UTILS.ad_sdk_show_report(_0x3ad5c7, _0x435546, _0x24857b, _0x2f02cd, _0x7e6127, _0x3eb120, _0x279824, _0x2b79d3, _0x28ef39, _0x47c2c5(_0x4484f1, false, 0x3), "" + (_0x4484f1.layer + 0x1), _0x47c2c5(_0x4484f1, false, 0x2));
                break;
              case "click":
                let _0x231f52 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_down_ad_popup;
                _0x231f52 = _0x231f52 && Number(_0x231f52.val);
                COMMON_REPORT_UTILS.ad_sdk_click_report(_0x3ad5c7, _0x435546, _0x24857b, _0x2f02cd, _0x7e6127, _0x3eb120, _0x4484f1.element || _0x44a8b9, _0x279824, _0x2b79d3, _0x4ed566, _0x47c2c5(_0x4484f1, _0x231f52, 0x3), "" + (_0x4484f1.layer + 0x1), _0x3940fb, _0x47c2c5(_0x4484f1, _0x231f52, 0x2));
                break;
              case "success":
                _0x2714d8.event_name = "视频广告播放完成SDK";
                _0x2714d8.event_id = "ad_sdk_success";
                break;
              case "incomplete":
                _0x2714d8.event_name = "视频广告播放未完成SDK";
                _0x2714d8.event_id = "ad_sdk_incomplete";
                break;
              case "install":
                COMMON_REPORT_UTILS.ad_sdk_install_report(_0x3ad5c7, _0x435546, _0x24857b, _0x2f02cd, _0x7e6127, _0x3eb120, _0x44a8b9, _0x279824, _0x2b79d3, _0x4484f1.ext_field_1);
                break;
              case "take":
                COMMON_REPORT_UTILS.ad_sdk_take(_0x2714d8, _0x4484f1.pageName);
            }
          }
          function _0x122760(_0xa56886, _0x31c4e6) {
            let _0x37a169 = "huawei" == null.brand && [0x67, 0x6a, 0x6b, 0x6c, 0x65, 0x66, 0x6e].includes(_0xa56886.advDetail.creativeType);
            let _0x5110ac = "vivo" == null.brand && _0xa56886.advDetail.hasPrivacy;
            if (_0x37a169 || _0x5110ac) {
              let _0x3047ea = null;
              _0x3047ea = _0x5110ac ? $app_require$("@app-module/service.ad").getAppStatus({
                adid: _0xa56886.advDetail.adId
              }) : _0xa56886.getAppStatus({
                adId: _0xa56886.advDetail.adId
              });
              LOG("app类", _0xa56886, _0x3047ea);
              if ("INSTALLED" != _0x3047ea) {
                _0x240e63.push(Object.assign(_0xa56886, {
                  isReport: false
                }));
                if (!_0x235ee5) {
                  _0x282358();
                  _0x42037 = setTimeout(() => {
                    clearTimeout(_0x235ee5);
                    clearTimeout(_0x42037);
                    _0x42037 = null;
                    _0x235ee5 = null;
                    console.log("onStatusChanged=====555 ");
                  }, 0x493e0);
                }
                if (_0x37a169) {
                  $utils.pushAppName(_0xa56886.advDetail.appName);
                }
              } else {
                console.log("app_hxuup=====app_hxuup ", _0xa56886, _0x31c4e6);
                COMMON_REPORT_UTILS.app_hxuup(_0xa56886, _0x31c4e6);
              }
            }
          }
          function _0x282358() {
            let _0x2619d5 = 0x0;
            console.log("onStatusChanged=====000000 ");
            for (var _0x5215a1 = 0x0; _0x5215a1 < _0x240e63.length; _0x5215a1++) {
              if (_0x240e63[_0x5215a1].isReport) {
                _0x2619d5++;
                continue;
              }
              let _0x50b875 = null;
              _0x50b875 = "vivo" == null.brand ? $app_require$("@app-module/service.ad").getAppStatus({
                adid: _0x240e63[_0x5215a1].advDetail.adId
              }) : _0x240e63[_0x5215a1].getAppStatus({
                adId: _0x240e63[_0x5215a1].advDetail.adId
              });
              console.log("onStatusChanged=====1111 ", _0x50b875);
              if ("INSTALLED" === _0x50b875) {
                _0x2619d5++;
                _0x240e63[_0x5215a1].isReport = true;
                _0xc95620("install", _0x240e63[_0x5215a1]);
                console.log("onStatusChanged=====444 ", _0x50b875);
                const _0x4f9680 = _0x240e63[_0x5215a1];
                $utils.openAppByName(_0x240e63[_0x5215a1].advDetail.appName, () => {
                  _0x4f9680.ext_field_1 = "当日激活应用";
                  _0xc95620("install", _0x4f9680);
                });
              }
            }
            if (_0x240e63.length == _0x2619d5) {
              clearTimeout(_0x235ee5);
              clearTimeout(_0x42037);
              _0x42037 = null;
              return void (_0x235ee5 = null);
            }
            _0x235ee5 = setTimeout(() => {
              _0x282358();
            }, 0x1388);
          }
          let _0x12c159 = {};
          function _0x3eeb1a(_0x14b29d, _0x3c778d) {
            ZHX_UUP_UTILS.setVideoTrigger(true);
            return new Promise((_0x43e2c8, _0x216aa4) => {
              let _0x264128 = false;
              null.show().then(_0x50ea1f => {
                _0x264128 = true;
                _0x7d98c8.videoBindFun = _0x3c778d;
                _0x43e2c8(_0x50ea1f);
                const _0x335d36 = TACTICS_SDK.getGlobalData("configInfo");
                if (!_0x335d36) {
                  return void LOG("激励视频toast弹窗", "没有应用配置");
                }
                const _0x43286a = _0x335d36.config.is_open_video_toast;
                if (0x0 === (_0x43286a ? Number(_0x43286a.val) : 0x0)) {
                  return void LOG("激励视频toast弹窗", "未开启激励视频toast提示");
                }
                const _0x19bb63 = _0x335d36.config.video_toast_content;
                const _0x2be5d7 = _0x19bb63 ? _0x19bb63.val : "";
                if ("" !== _0x2be5d7) {
                  $utils.showToast(_0x2be5d7);
                } else {
                  LOG("激励视频toast弹窗", "未配置激励视频toast提示内容");
                }
              })["catch"](_0x1d5de2 => {
                _0x264128 = true;
                ZHX_UUP_UTILS.setVideoTrigger(false);
                _0x216aa4(_0x1d5de2);
              });
              setTimeout(() => {
                if (!_0x264128) {
                  ZHX_UUP_UTILS.setVideoTrigger(false);
                  _0x216aa4("timeout");
                }
              }, 0x3e8);
              _0x7d98c8.callFunctionType = _0x14b29d;
            });
          }
          _0x7d98c8.videoBindFun = null;
          var _0x59e723 = 0x0;
          function _0x5cb3b0(_0x356e7c, _0x29445a, _0x5c19e7) {
            if ("vivo" !== _0x29445a) {
              LOG("激励视频循环", "不支持当前厂商");
              return false;
            }
            const _0x4ad915 = TACTICS_SDK.getGlobalData("configInfo");
            if (!_0x4ad915) {
              LOG("激励视频循环", "没有应用配置");
              return false;
            }
            const _0x3ba88a = _0x4ad915.config.is_open_mutiple_video;
            if (0x0 === (_0x3ba88a ? Number(_0x3ba88a.val) : 0x0)) {
              LOG("激励视频循环", "开关关闭");
              return false;
            }
            const _0x39c83f = _0x4ad915.config.mutiple_video_max_count;
            let _0x7782ee = _0x39c83f ? Number(_0x39c83f.val) : 0x0;
            if (0x0 === _0x7782ee) {
              _0x7782ee = 0x1;
            }
            if (_0x59e723 > _0x7782ee) {
              LOG("激励视频循环", "到达最大次数");
              _0x59e723 = 0x0;
              return false;
            }
            if ("onClose" === _0x356e7c) {
              const _0x5541f6 = _0x59e723 <= _0x7782ee;
              LOG("激励视频循环", "判断回调是否不执行", _0x5541f6);
              if (0x0 === _0x59e723) {
                LOG("激励视频循环", "首次激励视频关闭");
                _0x59e723++;
              }
              return _0x5541f6;
            }
            LOG("激励视频循环", "本次第" + _0x59e723 + "次触发");
            if ("onError" === _0x356e7c) {
              LOG("激励视频循环", "加载失败");
              if (0x0 !== _0x59e723) {
                _0x59e723 = 0x0;
                EVENT_BUS.emit("mutipleVideoShowFail");
              }
            }
            if ("onLoad" === _0x356e7c) {
              LOG("激励视频循环", "加载成功");
              if (0x0 === _0x59e723) {
                LOG("激励视频循环", "首次加载不触发");
                return false;
              }
              _0x59e723++;
              _0x3eeb1a(_0x5c19e7)["catch"](_0x3b28a2 => {
                LOG("激励视频循环", "展示失败");
                _0x59e723 = 0x0;
                EVENT_BUS.emit("mutipleVideoShowFail");
              });
            }
          }
          var _0xd5b3a2 = false;
          var _0x325781 = null;
          var _0x4a8af8 = false;
          function _0x3d4606(_0x4c54c9, _0x519b88, _0x1cbbdd) {
            _0x19ac83();
            if (_0x4c54c9 && _0x4c54c9.success) {
              _0x4c54c9.success("请求成功");
            }
            _0x519b88("请求成功");
          }
          function _0x19ac83() {
            console.log("hideBannerAdv=============>2", null);
            return new Promise(_0x6dfc54 => {
              null.show().then(_0x307d4a => {
                _0x6dfc54("success" === _0x307d4a.data);
              });
            });
          }
          function _0x3c800e() {
            try {
              if (_0x7d98c8.templateAds.huawei) {
                _0x7d98c8.templateAds.huawei.destroy();
                _0x7d98c8.templateAds.huawei = null;
              }
            } catch (_0xd667ab) {}
          }
          async function _0x4ba42c(_0x17c839, _0x250d66, _0x441fdf = true) {
            let {
              scenario: _0x14658c,
              sceneCode: _0x2aeb9c,
              adType: _0x3a2847,
              adTimes: _0x8162b3,
              popName: _0x364755,
              popGroupName: _0x148cca,
              requestNum: _0xbcadba,
              bqtTempId: _0x4cb68f
            } = _0x17c839;
            LOG("YLH_AD", "getYlhAdv", _0x17c839);
            let _0x3c3cb4 = {};
            if (0xa === _0x3a2847) {
              let _0x51340c = _0x190a54(_0x7d98c8.ylhAdIdArr.filter(_0x1c43fb => _0x1c43fb.grade == _0x4cb68f), 0x1);
              LOG("YLH_AD", "ylhCanUseIds", _0x51340c);
              if (_0x51340c.length > 0x0) {
                _0x3c3cb4.id = _0x51340c[0x0].id;
                _0x3c3cb4.appid = _0x51340c[0x0].appid;
              }
            } else {
              _0x3c3cb4 = AD_SDK_UTILS.getNextHandleAd && AD_SDK_UTILS.getNextHandleAd(_0x7d98c8, "ylhcompare", _0x441fdf);
            }
            if (_0x3c3cb4 && _0x3c3cb4.id) {
              let _0x2464f7 = {
                count: 0x1,
                appId: _0x3c3cb4.appid,
                placementId: _0x3c3cb4.id,
                recommendation: 0x0
              };
              let _0x476b4d = await new Promise((_0x2e7bce, _0x36e2f9) => {
                _0x5097fc.YLHSDK.onYlhReady(() => {
                  _0xc95620("request", Object.assign({}, _0x2464f7, {
                    result: "发起请求",
                    adRequestNum: 0x0
                  }));
                  _0x5097fc.YLHSDK.loadFeedAd(_0x2464f7).then(_0x570ab0 => {
                    if (_0x570ab0) {
                      _0xc95620("request", (_0x570ab0 = _0x570ab0.map(_0x1f1a99 => (_0x1f1a99.adId = _0x1f1a99.id, _0x1f1a99.btnTxt = _0x1f1a99.isApp ? "立即下载" : "查看详情", _0x1f1a99.size = (_0x1f1a99.pkgSizeBytes / 0x400 / 0x400).toFixed(0x2) + "MB", _0x1f1a99.layer = _0x3c3cb4.layer, _0x1f1a99.ad_type = "优量汇", _0x1f1a99.showCount = 0x1, _0x1f1a99.ad_network = 0x12, _0x1f1a99.type = "ylh_ad", _0x1f1a99.is_ad_click = "no", _0x1f1a99.adType = _0x3a2847, _0x1f1a99.adTimes = _0x8162b3, _0x1f1a99.sceneCode = _0x2aeb9c, _0x1f1a99.popName = _0x364755, _0x1f1a99.popGroupName = _0x148cca, _0x1f1a99.requestNum = _0xbcadba, _0x1f1a99.scenario = _0x14658c, _0x1f1a99.adRequestNum = 0x0, _0x1f1a99.result = "有广告", _0x1f1a99.price = _0x3c3cb4.low_price, _0x1f1a99.isUsedAdButton = 0x2, _0x1f1a99)))[0x0]);
                      _0x2e7bce(_0x570ab0);
                    } else {
                      _0x2e7bce(false);
                    }
                  })["catch"](_0x4ce076 => {
                    LOG("YLH_AD", _0x4ce076);
                    _0x2e7bce();
                  });
                });
              });
              if (_0x476b4d) {
                LOG("YLH_AD", "优量汇获取广告成功", _0x476b4d);
                _0x7d98c8.ylhAdvSourceArr = _0x476b4d.concat(_0x7d98c8.ylhAdvSourceArr);
                if (_0x250d66) {
                  _0x250d66();
                }
              } else {
                LOG("YLH_AD", "优量汇获取广告失败");
                _0xc95620("request", Object.assign({
                  result: "无广告"
                }, _0x2464f7, _0x17c839));
                if (0x9 === _0x3a2847) {
                  await _0x4ba42c(_0x17c839, _0x250d66, false);
                } else if (_0x250d66) {
                  _0x250d66();
                }
              }
            } else {
              LOG("YLH_AD", "广告ylhSDK========>无可用广告位ID");
              if (_0x250d66) {
                _0x250d66();
              }
            }
          }
          function _0x98af9(_0x48d3f9) {
            let _0x21b4d7 = new Date().getTime();
            let _0x21d980 = _0x7d98c8.videoAdDebonceObj[_0x48d3f9];
            return _0x21d980 && _0x21b4d7 - _0x21d980 <= 0x3e8 ? (LOG("激励视频回调函数防抖false", _0x48d3f9), false) : (_0x7d98c8.videoAdDebonceObj[_0x48d3f9] = _0x21b4d7, true);
          }
          function _0x47c2c5(_0x67add4, _0x18901f, _0x54a5df = 0x1) {
            const _0x3c9bfb = [0x67, 0x6a, 0x6b, 0x6c, 0x65, 0x66, 0x6e];
            if (!(_0x67add4 && "manu_ad" == _0x67add4.type && _0x67add4.advDetail && null && "huawei" == null.brand && null.platformVersionCode > 0x435)) {
              return _0x67add4 && "manu_ad" == _0x67add4.type && _0x67add4.advDetail && _0x67add4.advDetail.appInfo && null && "huawei" !== null.brand ? _0x67add4.advDetail.appInfo.appName ? "" + _0x67add4.advDetail.appInfo.appName : "-" : "";
            }
            {
              const _0x394365 = null.platformVersionCode >= 0x452;
              if (_0x3c9bfb.includes(_0x67add4.advDetail.creativeType)) {
                const _0x4da012 = _0x202b43["default"].getState();
                if (_0x18901f && !AD_SDK_UTILS.adConfigData[_0x4da012.path]) {
                  AD_SDK_UTILS.adConfigData[_0x4da012.path] = _0x67add4;
                }
                const _0x533165 = _0x394365 && _0x67add4.advDetail.appName ? "/" + _0x67add4.advDetail.appName : "";
                return "INSTALLED" === _0x67add4.getAppStatus({
                  adId: _0x67add4.advDetail.adId
                }) ? 0x1 == _0x54a5df ? "$app唤醒" + _0x533165 : 0x2 == _0x54a5df ? "$app唤醒" : _0x394365 && _0x67add4.advDetail.appName ? "" + _0x67add4.advDetail.appName : "" : 0x1 == _0x54a5df ? "$下载" + _0x533165 : 0x2 == _0x54a5df ? "$下载" : _0x394365 && _0x67add4.advDetail.appName ? "" + _0x67add4.advDetail.appName : "";
              }
              if (_0x394365) {
                return _0x67add4.advDetail.appName ? _0x67add4.advDetail.appName : "";
              }
            }
          }
          function _0x12516c(_0x4c407b, _0x14f85c, _0x2c18b7, _0x454b4d, _0xf2dc3b) {
            if ("vivoTag" === _0x4c407b) {
              _0x2c18b7.layer = 0x0;
              _0x2c18b7.priority = 0.0001;
              _0x2c18b7.price = _0x14f85c.price || 0x0;
            } else {
              if (_0x454b4d) {
                _0x2c18b7.priority = 0x0;
                _0x2c18b7.price = _0x14f85c.ecpm || _0x14f85c.price || 0x0;
                _0x2c18b7.isNativeBiddingAd = true;
              } else {
                if (_0xf2dc3b) {
                  _0x2c18b7.priority = 0x0;
                  _0x2c18b7.price = _0x14f85c.price || 0x0;
                  let _0x253f93 = {
                    adid: _0x2c18b7.advDetail.adId,
                    adType: "native",
                    price: parseInt(_0x2c18b7.price)
                  };
                  $app_require$("@app-module/service.ad").sendWinNotification(_0x253f93);
                } else {
                  if (!null.ad_protogenesis_ecpm) {
                    null.ad_protogenesis_ecpm = [];
                  }
                  _0x2c18b7.priority = 0x0;
                  _0x2c18b7.price = Number(null.ad_protogenesis_ecpm[_0x2c18b7.layer] || 0x0);
                }
              }
            }
          }
          function _0x5c694b(_0x56e651, _0x2a8d9a) {
            let _0x55953e = {
              id: ""
            };
            const _0x13ed12 = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_circulate_config;
            let _0x5391bc = null;
            if (_0x2a8d9a) {
              if ((TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").config || {}).ad_click_rate_switch) {
                _0x55953e = function (_0x43a32b = false) {
                  "".curIndex = _0x43a32b ? 0x0 : "".curIndex;
                  let _0x95a8bb = JSON.parse(JSON.stringify(""));
                  let _0x34b246 = "";
                  if (_0x95a8bb.curIndex + 0x1 <= _0x95a8bb.maxIndex) {
                    _0x34b246 = "".adsArr["".curIndex];
                    "".curIndex++;
                  }
                  return {
                    id: _0x34b246,
                    layer: 0x0
                  };
                }(_0x56e651);
              } else {
                _0x5391bc = _0x13ed12 && _0x13ed12.templateAdIds;
                if (_0x5391bc) {
                  _0x55953e = {
                    id: _0x190a54(_0x5391bc.split(","), 0x1)[0x0]
                  };
                }
              }
            } else {
              _0x55953e = function (_0x47a416 = false) {
                "".curLayer = _0x47a416 ? 0x0 : "".curLayer;
                let _0x23c3c4 = JSON.parse(JSON.stringify(""));
                let _0x1cece9 = "";
                let _0x3c96cf = 0x0;
                if (_0x23c3c4.curLayer + 0x1 <= _0x23c3c4.maxLayer) {
                  _0x3c96cf = _0x23c3c4.curLayer;
                  let _0x5d9f1e = _0x23c3c4.layers[_0x3c96cf];
                  _0x1cece9 = _0x5d9f1e.adsArr[_0x5d9f1e.curIndex];
                  "".curLayer++;
                  "".layers[_0x3c96cf].curIndex = (_0x5d9f1e.curIndex + 0x1) % _0x5d9f1e.maxIndex;
                }
                return {
                  id: _0x1cece9,
                  layer: _0x3c96cf
                };
              }(_0x56e651);
            }
            return _0x55953e;
          }
          function _0x3f84d1() {
            let _0x5ed669 = TACTICS_SDK.getGlobalData("configInfo").config.is_ppen_oppo_preload;
            _0x5ed669 = _0x5ed669 && Number(_0x5ed669.val) || 0x0;
            return _0x5ed669;
          }
          function _0x15d03e({
            obj: _0x4ce29b,
            isFirstLoad: _0x2d9f82 = true,
            getAdIdFunc: _0x159ce4,
            adConfig: _0x540677
          }) {
            return new Promise((_0xd36094, _0x430265) => {
              const {
                scenario: _0xbfbcb8
              } = _0x4ce29b;
              let _0x1f2f7c = _0x159ce4(_0x2d9f82, _0x540677.nextIdKey);
              if (_0x1f2f7c.id) {
                LOG("VIEW", _0x540677.adType, _0x1f2f7c.id, _0x1f2f7c.layer);
                _0x1f2f7c = _0x13d289(_0x13d289({}, _0x1f2f7c), {}, {
                  ad_type: _0x540677.adType,
                  ad_network: 0x1,
                  scenario: _0xbfbcb8
                });
                const _0x2e7652 = function (_0xbd5839, _0x38a57e, _0x1fa571) {
                  const _0x3224ab = true && $app_require$("@app-module/service.ad");
                  const _0xf64403 = _0x1fa571.adKey;
                  _0x7d98c8[_0xf64403] = _0x3224ab.createBannerAd({
                    adUnitId: _0xbd5839,
                    style: _0x38a57e
                  });
                  return _0x7d98c8[_0xf64403];
                }(_0x1f2f7c.id, _0x540677.style, _0x540677);
                if ("object" == typeof _0x2e7652) {
                  _0xc95620("request", _0x13d289(_0x13d289({}, _0x1f2f7c), {}, {
                    result: "发起请求"
                  }));
                  _0x2e7652.show();
                  (function (_0x20e633, _0x30ff99, _0x2a94a1) {
                    const {
                      onSuccess: _0x10f350,
                      onFailure: _0x873d69,
                      onComplete: _0x5d7755
                    } = _0x2a94a1;
                    _0x20e633.onLoad(() => {
                      _0x30ff99.result = _0x30ff99.ad_type + "有广告";
                      _0xc95620("request", _0x30ff99);
                      _0xc95620("show", _0x30ff99);
                      if (!(null == _0x10f350)) {
                        _0x10f350(_0x30ff99.ad_type + "请求成功");
                      }
                      if (!(null == _0x5d7755)) {
                        _0x5d7755();
                      }
                    });
                    _0x20e633.onError(_0x293990 => {
                      _0x30ff99.result = _0x30ff99.ad_type + "无广告 " + (_0x293990.errCode || "错误码获取失败");
                      _0xc95620("request", _0x30ff99);
                      if (!(null == _0x873d69)) {
                        _0x873d69(_0x30ff99.ad_type + "请求失败");
                      }
                      if (!(null == _0x5d7755)) {
                        _0x5d7755();
                      }
                    });
                    _0x20e633.onClose(() => {
                      var _0x3a38dd;
                      if (!(null == _0x2a94a1 || null === (_0x3a38dd = _0x2a94a1.onClose) || undefined === _0x3a38dd)) {
                        _0x3a38dd.call(_0x2a94a1);
                      }
                    });
                    _0x20e633.onClick(() => {
                      _0xc95620("click", _0x30ff99);
                    });
                  })(_0x2e7652, _0x1f2f7c, {
                    onSuccess: _0x1edc2c => {
                      var _0x5cd07f;
                      if (!(null == _0x4ce29b || null === (_0x5cd07f = _0x4ce29b.success) || undefined === _0x5cd07f)) {
                        _0x5cd07f.call(_0x4ce29b, _0x1edc2c);
                      }
                      _0xd36094(_0x1edc2c);
                    },
                    onFailure: _0x406089 => {
                      var _0x3a0d8d;
                      if (!(null == _0x4ce29b || null === (_0x3a0d8d = _0x4ce29b.fail) || undefined === _0x3a0d8d)) {
                        _0x3a0d8d.call(_0x4ce29b, _0x406089);
                      }
                      _0x430265(_0x406089);
                    },
                    onComplete: () => {
                      _0x2e7652.offError();
                      _0x2e7652.offLoad();
                    },
                    onClose: () => {
                      var _0x3af3f7;
                      if (!(null == _0x4ce29b || null === (_0x3af3f7 = _0x4ce29b.close) || undefined === _0x3af3f7)) {
                        _0x3af3f7.call(_0x4ce29b);
                      }
                    }
                  });
                }
              } else {
                LOG(_0x540677.adType, "not double banner null id");
                _0xd36094(false);
              }
            });
          }
          const _0x2de378 = {
            doubleBannerTop: {
              adType: "双banner上",
              style: {
                top: 0x0,
                left: 0x0
              },
              adKey: "doubleBanner1",
              nextIdKey: "doubleBannerTop",
              getAdIdFunc: _0x1f7aeb
            },
            doubleBannerBottom: {
              adType: "双banner下",
              style: {},
              adKey: "doubleBanner2",
              nextIdKey: "doubleBannerBottom",
              getAdIdFunc: _0x1f7aeb
            }
          };
          function _0x1f7aeb(_0x2b31c4, _0x39d8a6 = "doubleBannerTop") {
            const _0x383f37 = _0x7d98c8[_0x39d8a6];
            _0x383f37.curLayer = _0x2b31c4 ? 0x0 : _0x383f37.curLayer;
            let _0x1d0cfa = JSON.parse(JSON.stringify(_0x383f37));
            let _0x2487db = "";
            let _0x41d45c = 0x0;
            if (_0x1d0cfa.curLayer + 0x1 <= _0x1d0cfa.maxLayer) {
              _0x41d45c = _0x1d0cfa.curLayer;
              let _0x1701a2 = _0x1d0cfa.layers[_0x41d45c];
              _0x2487db = _0x1701a2.adsArr[_0x1701a2.curIndex];
              _0x383f37.curLayer++;
              _0x383f37.layers[_0x41d45c].curIndex = (_0x1701a2.curIndex + 0x1) % _0x1701a2.maxIndex;
            }
            return {
              id: _0x2487db,
              layer: _0x41d45c
            };
          }
          const _0x441d5b = {
            initSdk: function (_0x23e22b) {
              LOG("AD", "initSdk", _0x23e22b);
              return new Promise((_0x17ae62, _0x55f0dc) => {
                if (false && !_0x23e22b.isCheckStatus) {
                  _0x7d98c8.pageUrl = _0x23e22b.pageUrl ? _0x23e22b.pageUrl : "";
                  if (_0x23e22b && _0x23e22b.success) {
                    _0x23e22b.success();
                  }
                  return _0x17ae62();
                }
                if (!_0x23e22b.deviceInfo || !_0x23e22b.pkg || !_0x23e22b.adNewPostionConfig) {
                  console.error("ADNEWSDK===>初始化部分必传字段为空，请检查");
                  if (_0x23e22b && _0x23e22b.fail) {
                    _0x23e22b.fail();
                  }
                  return _0x55f0dc();
                }
                !function (_0x8e053e) {
                  var _0x5adb03;
                  LOG("AD", "assignParame==>arguments", _0x8e053e);
                  _0x7d98c8.initStatus = 0x1;
                  _0x7d98c8.manuAdvSourceArr = [];
                  _0x7d98c8.nativeAdvIdArr = [];
                  _0x7d98c8.bqtAdIdArr = [];
                  _0x7d98c8.kdxfAdIdArr = [];
                  let _0xaf936b = _0x8e053e.deviceInfo;
                  let _0x1fd2c6 = _0xaf936b.model;
                  let _0x33ce67 = _0xaf936b.brand && _0xaf936b.brand.toLowerCase();
                  _0x33ce67 = "honor" == _0x33ce67 || "huawei" == _0x33ce67 || _0x2e18ca["default"].includes(_0x1fd2c6) ? $app_require$("@app-module/service.ad").getProvider() : "redmi" == _0x33ce67 || "xiaomi" == _0x33ce67 || "小米" == _0x33ce67 || "Redmi" == _0x33ce67 || "小米红米" == _0x33ce67 ? "xiaomi" : "oppo" == _0x33ce67 || "realme" == _0x33ce67 || "oneplus" == _0x33ce67 ? "oppo" : "vivo" == _0x33ce67 ? "vivo" : "other";
                  _0xaf936b.brand = _0x33ce67;
                  _0x7d98c8.deviceInfo = _0xaf936b;
                  _0x7d98c8.pkg = _0x8e053e.pkg;
                  _0x7d98c8.qudao = _0x8e053e.qudao ? _0x8e053e.qudao : "NULL";
                  _0x7d98c8.link_id = _0x8e053e.link_id ? _0x8e053e.link_id : "NULL";
                  _0x7d98c8.ad_plan_id = _0x8e053e.adPlanId ? _0x8e053e.adPlanId : "NULL";
                  _0x7d98c8.ad_group_id = _0x8e053e.adGroupId ? _0x8e053e.adGroupId : "NULL";
                  _0x7d98c8.source_pkg = _0x8e053e.sourcePkg ? _0x8e053e.sourcePkg : "NULL";
                  _0x7d98c8.utm_content = _0x8e053e.utm_content ? _0x8e053e.utm_content : "NULL";
                  _0x7d98c8.unionid = _0x8e053e.unionid ? _0x8e053e.unionid : "NULL";
                  _0x7d98c8.tacticsName = _0x8e053e.tacticsName ? _0x8e053e.tacticsName : "";
                  _0x7d98c8.pageUrl = _0x8e053e.pageUrl ? _0x8e053e.pageUrl : "";
                  _0x7d98c8.vivoChannelFilter = _0x8e053e.vivoChannelFilter;
                  _0x7d98c8.materialType = null !== (_0x5adb03 = _0x8e053e.materialType) && undefined !== _0x5adb03 ? _0x5adb03 : 0x2;
                  _0x7d98c8.applicationInstall = _0x8e053e.applicationInstall ? _0x8e053e.applicationInstall : 0x1;
                  _0x7d98c8.vivoChannel = function () {
                    LOG("AD", "joinVivoChannelParams", null);
                    if ("vivo" !== null.brand) {
                      return "";
                    }
                    if (null && true) {
                      let _0x85535e = "";
                      for (let [_0x37096e, _0x3da2ad] of Object.entries(null)) {
                        LOG("AD", [_0x37096e, _0x3da2ad]);
                        if (_0x3da2ad) {
                          switch (_0x37096e) {
                            case "campaign_id_status":
                              _0x85535e = _0x85535e + "|" + "NULL";
                              break;
                            case "channel_status":
                              _0x85535e = _0x85535e + "|" + "NULL";
                              break;
                            case "link_status":
                              _0x85535e = _0x85535e + "|" + "NULL";
                              break;
                            case "site_status":
                              _0x85535e = _0x85535e + "|" + "NULL";
                              break;
                            case "source_pkg_status":
                              _0x85535e = _0x85535e + "|" + "NULL";
                              break;
                            case "utm_content_status":
                              _0x85535e = _0x85535e + "|" + "NULL";
                              break;
                            case "ad_scene_status":
                              _0x85535e += "|@@";
                              break;
                            case "ad_group_id":
                              _0x85535e = _0x85535e + "|" + "NULL";
                          }
                        } else {
                          _0x85535e += "|NA";
                        }
                      }
                      return "" == _0x85535e ? "|||||||" : _0x85535e.substring(0x1);
                    }
                    return "|||||||";
                  }();
                  _0x7d98c8.isUsedAdButton = _0x8e053e.isUsedAdButton && _0xaf936b.platformVersionCode >= 0x44c && "huawei" === _0xaf936b.brand ? _0x8e053e.isUsedAdButton : 0x0;
                  const _0x508fad = TACTICS_SDK.getGlobalData("configInfo").config.is_used_vivo_button && Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_vivo_button.val);
                  _0x7d98c8.isUsedVivoButton = _0x508fad && "vivo" === _0xaf936b.brand && DEVICE_UTILS.getHost().versionCode >= 0xa89c79 ? _0x508fad : 0x3;
                  const _0x54ae8f = TACTICS_SDK.getGlobalData("configInfo").config.is_used_honor_button && Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_honor_button.val);
                  _0x7d98c8.isUsedHonorButton = _0x54ae8f && "honor" === _0xaf936b.brand ? _0x54ae8f : 0x3;
                  const _0x1111fa = TACTICS_SDK.getGlobalData("configInfo").config.is_used_xiaomi_button && Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_xiaomi_button.val);
                  _0x7d98c8.isUsedXiaomiButton = _0x1111fa && "xiaomi" === _0xaf936b.brand && DEVICE_UTILS.getHost().versionCode >= 0xa8c322 ? _0x1111fa : 0x3;
                  const _0x1948db = TACTICS_SDK.getGlobalData("configInfo").config.is_used_oppo_button && Number(TACTICS_SDK.getGlobalData("configInfo").config.is_used_oppo_button.val);
                  _0x7d98c8.isUsedOppoButton = _0x1948db && "oppo" === _0xaf936b.brand && null.platformVersionCode >= 0x463 ? _0x1948db : 0x3;
                  _0x7d98c8.adNewPostionConfig = _0x8e053e.adNewPostionConfig;
                  _0x7d98c8.isBqtCanShowDialog = _0x8e053e.isBqtCanShowDialog || 0x0;
                  LOG("AD", "joinVivoChannelParams", _0x7d98c8, "", _0x8e053e.isUsedAdButton, _0xaf936b.platformVersionCode, _0xaf936b.brand);
                }(_0x23e22b);
                (function () {
                  let _0xc365c9 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_homeScreen_advert;
                  _0x7d98c8.isOpenHome = _0xc365c9 && Number(_0xc365c9.val) || 0x0;
                  let _0x2c7dcb = TACTICS_SDK.getGlobalData("configInfo").config.is_open_screen_ad;
                  _0x7d98c8.isOpenScreen1 = _0x2c7dcb && Number(_0x2c7dcb.val) || 0x0;
                  let _0x3392a8 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_second_screen_ad;
                  _0x7d98c8.isOpenScreen2 = _0x3392a8 && Number(_0x3392a8.val) || 0x0;
                })();
                try {
                  $app_require$("@app-module/service.ad");
                } catch (_0x3c62d7) {
                  _0x7d98c8.serviceAd = false;
                }
                !function () {
                  _0x7d98c8.bannerId = null.ad_banner;
                  if (null.ad_native_banner) {
                    let _0x293dbc = null.ad_native_banner.split(",");
                    _0x7d98c8.nativeBannerId = {
                      curIndex: 0x0,
                      maxIndex: _0x293dbc.length,
                      adsArr: _0x293dbc
                    };
                  } else {
                    _0x7d98c8.nativeBannerId = {
                      curIndex: 0x0,
                      maxIndex: 0x0,
                      adsArr: []
                    };
                  }
                  if (null.ad_open_screen) {
                    let _0x39cdce = _0x17076c(null.ad_open_screen);
                    _0x7d98c8.nativeScreen = _0x39cdce;
                  } else {
                    _0x7d98c8.nativeScreen = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_chapter_head) {
                    let _0x99d902 = _0x17076c(null.ad_chapter_head);
                    _0x7d98c8.nativeChapter = _0x99d902;
                  } else {
                    _0x7d98c8.nativeChapter = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_page_entry) {
                    let _0x43b027 = _0x17076c(null.ad_page_entry);
                    _0x7d98c8.nativePageEntry = _0x43b027;
                  } else {
                    _0x7d98c8.nativePageEntry = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_page_return) {
                    let _0x4dd048 = _0x17076c(null.ad_page_return);
                    _0x7d98c8.nativePageBack = _0x4dd048;
                  } else {
                    _0x7d98c8.nativePageBack = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_circulate_config && null.ad_circulate_config.newAdIds) {
                    const _0x13952e = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").config || {};
                    let _0x4d7f48 = _0x17076c(null.ad_circulate_config.newAdIds, _0x13952e.ad_click_rate_switch);
                    _0x7d98c8.nativeBoost = _0x4d7f48;
                  } else {
                    _0x7d98c8.nativeBoost = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_template_config) {
                    let _0x298c55 = _0x17076c(null.ad_template_config);
                    _0x7d98c8.templateAdvIdsConfig = _0x298c55;
                  } else {
                    _0x7d98c8.templateAdvIdsConfig = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_interstitial) {
                    let _0x4daec2 = _0x17076c(null.ad_interstitial.split(","));
                    _0x7d98c8.interstAdvIdsConfig = _0x4daec2;
                  } else {
                    _0x7d98c8.interstAdvIdsConfig = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_double_banner_top) {
                    let _0x5ec814 = _0x17076c(null.ad_double_banner_top.split(","));
                    _0x7d98c8.doubleBannerTop = _0x5ec814;
                  } else {
                    _0x7d98c8.doubleBannerTop = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_double_banner_bottom) {
                    let _0x1ef463 = _0x17076c(null.ad_double_banner_bottom.split(","));
                    _0x7d98c8.doubleBannerBottom = _0x1ef463;
                  } else {
                    _0x7d98c8.doubleBannerBottom = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_circulate_config && null.ad_circulate_config.templateAdIds) {
                    let _0x849947 = null.ad_circulate_config.templateAdIds.split(",");
                    _0x7d98c8.templateAdIds = {
                      curIndex: 0x0,
                      maxIndex: _0x849947.length,
                      adsArr: _0x849947
                    };
                  } else {
                    _0x7d98c8.templateAdIds = {
                      curIndex: 0x0,
                      maxIndex: 0x0,
                      adsArr: []
                    };
                  }
                  if (null.ad_bidding) {
                    let _0x30aa46 = null.ad_bidding.split(",");
                    _0x7d98c8.biddingAdIds = {
                      curIndex: 0x0,
                      maxIndex: _0x30aa46.length,
                      adsArr: _0x30aa46
                    };
                  } else {
                    _0x7d98c8.biddingAdIds = {
                      curIndex: 0x0,
                      maxIndex: 0x0,
                      adsArr: []
                    };
                  }
                  if (null.ad_bidding_config) {
                    let _0x467a0c = _0x17076c(null.ad_bidding_config);
                    _0x7d98c8.biddingAdArr = _0x467a0c;
                  } else {
                    _0x7d98c8.biddingAdArr = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  if (null.ad_encourage_price) {
                    let _0x5113a8 = _0x17076c(null.ad_encourage_price);
                    _0x7d98c8.encourageIds = _0x5113a8;
                  } else {
                    _0x7d98c8.encourageIds = {
                      curLayer: 0x0,
                      maxLayer: 0x0,
                      layers: []
                    };
                  }
                  _0x7d98c8.videoId = null.ad_encourage;
                  if (true || true) {
                    let _0x565919 = _0x17076c(null.ad_protogenesis);
                    LOG("AD", "computeAdvId=>advIdsConfig", _0x565919);
                    _0x7d98c8.nativeAdvIdsConfig = _0x565919;
                    _0x7d98c8.adArrComputedType = true;
                  }
                  if (null.baidu_ad) {
                    null.baidu_ad.baidu_ad_config.map((_0x4e9a39, _0x3ea2d9) => {
                      let _0x1abcf4 = _0x4e9a39.ad_ids.split(",");
                      _0x7d98c8.bqtAdIdArr = _0x7d98c8.bqtAdIdArr.concat(_0x1abcf4.map(_0x24271d => ({
                        id: _0x24271d,
                        inUse: false,
                        grade: _0x4e9a39.temp_id,
                        appid: null.baidu_ad.product_id
                      })));
                    });
                    LOG("AD", "百度广告位数组", _0x7d98c8.bqtAdIdArr);
                  }
                  if (null.kdxf_ad) {
                    null.kdxf_ad.kdxf_ad_config.map(_0x4fd415 => {
                      let _0xe4e7b9 = _0x4fd415.ad_ids.split(",");
                      _0x7d98c8.kdxfAdIdArr = _0x7d98c8.kdxfAdIdArr.concat(_0xe4e7b9.map(_0x38aa3f => ({
                        id: _0x38aa3f,
                        grade: _0x4fd415.temp_id
                      })));
                    });
                    LOG("AD", "科大讯飞广告位数组", _0x7d98c8.kdxfAdIdArr);
                  }
                  if (null.ylh_ad_config && 0x0 === _0x7d98c8.ylhAdIdArr.length) {
                    null.ylh_ad_config.map(_0x5d8578 => {
                      let _0x58c676 = _0x5d8578.ad_ids.split(",");
                      _0x7d98c8.ylhAdIdArr = _0x7d98c8.ylhAdIdArr.concat(_0x58c676.map(_0x4751c5 => ({
                        id: _0x4751c5,
                        grade: _0x5d8578.temp_id,
                        appid: null.ylh_product_id
                      })));
                    });
                    LOG("YLH_AD", "优量汇广告位数组", _0x7d98c8.ylhAdIdArr);
                  }
                }();
                _0x7d98c8.initStatus = 0x2;
                if (_0x23e22b && _0x23e22b.success) {
                  _0x23e22b.success();
                }
                _0x17ae62();
              });
            },
            getManuAdv: function _0x44d89(_0x30129e, _0x4ca4ba = 0x0) {
              LOG("AD", "getManuAdv============>", _0x30129e);
              if (_0x4ca4ba < 0x2) {
                LOG("AD", "广告ADSDK========>初始化未完，广告重新拿取次数" + (_0x4ca4ba + 0x1));
                let _0x4438e = setTimeout(() => {
                  _0x44d89(_0x30129e, _0x4ca4ba + 0x1);
                  clearTimeout(_0x4438e);
                  _0x4438e = null;
                }, 0x32);
              } else if (_0x30129e && _0x30129e.fail) {
                _0x30129e.fail("广告sdk还没初始化完");
              }
            },
            setManuAdv: function (_0x493c26) {
              if (_0x493c26 && _0x493c26.id && "function" == typeof _0x493c26.destroy && _0x493c26.destroy) {
                _0x493c26.destroy();
              }
            },
            clickManuAdvForBtn: function (_0x3eafe2, _0xa19a20, _0xe41c49, _0x5989d2 = 0x0) {
              LOG("AD", "广告ADSDK========>广告按钮点击", _0x3eafe2);
              if (_0x3eafe2 && _0x3eafe2.id) {
                if ("boolean" == typeof _0x3eafe2.isAdLoadError && _0x3eafe2.isAdLoadError) {
                  return;
                }
                if (!(_0x3eafe2.is_ad_click && "no" != _0x3eafe2.is_ad_click)) {
                  _0xc95620("click", _0x3eafe2, "btn");
                }
                if ("manu_ad" == _0x3eafe2.type) {
                  _0x440284[_0x3eafe2.title] = true;
                  if ("huawei" == null.brand && null.platformVersionCode > 0x435) {
                    _0x59136e.adv_data = _0x3eafe2;
                    const {
                      context: _0x33613c,
                      func_name: _0x476ff7,
                      adv_data: _0xb32e9d
                    } = _0x59136e;
                    if (_0x33613c && _0x476ff7 && _0xb32e9d) {
                      _0x33613c[_0x476ff7](_0xb32e9d);
                    }
                    try {
                      _0x122760(Object.assign({}, _0x3eafe2), _0xa19a20);
                    } catch (_0x4b9740) {
                      console.log("onStatusChanged======00000", _0x4b9740);
                    }
                  } else {
                    if ("vivo" == null.brand && DEVICE_UTILS.getHost().versionCode >= 0xa89c79) {
                      try {
                        _0x122760(Object.assign({}, _0x3eafe2), _0xa19a20);
                      } catch (_0x5bdb7d) {
                        console.log("vivo onStatusChanged", _0x5bdb7d);
                      }
                    }
                  }
                  if ("xiaomi" == null.brand) {
                    let _0x450ebe = {
                      adX: _0x3eafe2.adX,
                      adY: _0x3eafe2.adY,
                      height: _0x3eafe2.height,
                      width: _0x3eafe2.width,
                      downX: _0x3eafe2.downX,
                      downY: _0x3eafe2.downY,
                      upX: _0x3eafe2.upX,
                      upY: _0x3eafe2.upY
                    };
                    LOG("AD", "小米回传携带坐标", _0x450ebe);
                    if (_0x3eafe2.reportAdClick) {
                      _0x3eafe2.reportAdClick(_0x13d289({
                        adId: _0x3eafe2.advDetail.adId
                      }, _0x450ebe));
                    }
                  } else if (_0xe41c49 || function (_0x49c1ee) {
                    return 0x0 === Number(_0x49c1ee);
                  }(_0x5989d2)) {
                    if (_0x3eafe2.reportAdClick) {
                      _0x3eafe2.reportAdClick({
                        adId: _0x3eafe2.advDetail.adId
                      });
                    }
                  } else {
                    AD_UTILS.simulateAdJump();
                  }
                }
                _0x3c3e12 = true;
              }
            },
            clickManuAdvForImg: function (_0x5084fc, _0x247764) {
              LOG("AD", "广告ADSDK========>广告图片点击", _0x5084fc);
              if (_0x5084fc && _0x5084fc.id) {
                if ("boolean" == typeof _0x5084fc.isAdLoadError && _0x5084fc.isAdLoadError) {
                  return;
                }
                if (!(_0x5084fc.is_ad_click && "no" != _0x5084fc.is_ad_click)) {
                  _0xc95620("click", _0x5084fc, "img");
                }
                if ("manu_ad" == _0x5084fc.type) {
                  _0x440284[_0x5084fc.title] = true;
                  if ("huawei" == null.brand && null.platformVersionCode > 0x435) {
                    _0x59136e.adv_data = _0x5084fc;
                    const {
                      context: _0x1fefdf,
                      func_name: _0x3a1e3c,
                      adv_data: _0x37d32a
                    } = _0x59136e;
                    if (_0x1fefdf && _0x3a1e3c && _0x37d32a) {
                      _0x1fefdf[_0x3a1e3c](_0x37d32a);
                    }
                    try {
                      _0x122760(Object.assign({}, _0x5084fc), _0x247764);
                    } catch (_0x21c897) {
                      console.log("onStatusChanged======00000", _0x21c897);
                    }
                  } else {
                    if ("vivo" == null.brand && DEVICE_UTILS.getHost().versionCode >= 0xa89c79) {
                      try {
                        _0x122760(Object.assign({}, _0x5084fc), _0x247764);
                      } catch (_0x105737) {
                        console.log("vivo onStatusChanged", _0x105737);
                      }
                    }
                  }
                  if ("xiaomi" == null.brand) {
                    let _0x17a5b6 = {
                      adX: _0x5084fc.adX,
                      adY: _0x5084fc.adY,
                      height: _0x5084fc.height,
                      width: _0x5084fc.width,
                      downX: _0x5084fc.downX,
                      downY: _0x5084fc.downY,
                      upX: _0x5084fc.upX,
                      upY: _0x5084fc.upY
                    };
                    LOG("AD", "小米回传携带坐标", _0x17a5b6);
                    if (_0x5084fc.reportAdClick) {
                      _0x5084fc.reportAdClick(_0x13d289({
                        adId: _0x5084fc.advDetail.adId
                      }, _0x17a5b6));
                    }
                  } else if (_0x5084fc.reportAdClick) {
                    _0x5084fc.reportAdClick({
                      adId: _0x5084fc.advDetail.adId
                    });
                  }
                }
                _0x3c3e12 = true;
              }
            },
            pageRedisplay: function (_0x1e3965) {
              return new Promise((_0x8eb00, _0x3a4d2a) => {
                _0x7d98c8.initStatus = 0x1;
                _0x7d98c8.manuAdvSourceArr = [];
                if (_0x7d98c8.nativeAdvIdArr && _0x7d98c8.nativeAdvIdArr[0x0]) {
                  _0x7d98c8.nativeAdvIdArr.map(_0x6c1c9b => {
                    _0x6c1c9b.inUse = false;
                  });
                }
                _0x7d98c8.initStatus = 0x2;
                if (_0x1e3965 && _0x1e3965.success) {
                  _0x1e3965.success();
                }
                _0x8eb00(true);
              });
            },
            getVedioAdv: function (_0xbd979b) {
              return new Promise(async (_0x29b62d, _0x4ef65d) => {
                let _0x116526 = _0xbd979b && _0xbd979b.scenario ? _0xbd979b.scenario : "未知";
                let _0x392c8a = _0xbd979b && _0xbd979b.popName ? _0xbd979b.popName : "未知";
                let _0x55919a = _0xbd979b && _0xbd979b.popGroupName ? _0xbd979b.popGroupName : "未知";
                let _0x47202 = _0xbd979b && _0xbd979b.pageName ? _0xbd979b.pageName : "未知";
                if (false || true) {
                  if (_0xbd979b && _0xbd979b.fail) {
                    _0xbd979b.fail("不支持广告或未配置广告id");
                  }
                  return void _0x4ef65d("不支持广告或未配置广告id");
                }
                var _0x581279 = new Object({
                  id: "",
                  ad_network: 0x1,
                  ad_type: "视频",
                  scenario: _0x116526,
                  type: "manu_ad",
                  popName: _0x392c8a,
                  popGroupName: _0x55919a
                });
                0x0++;
                _0xc95620("request", Object.assign(_0x581279, {
                  result: "发起请求",
                  adRequestNum: 0x0
                }));
                let _0x3ac48b = await $app_require$("@app-module/service.ad").createRewardedVideoAd({
                  adUnitId: ""
                });
                _0x3ac48b.onLoad(function (_0x1687b8) {
                  _0x581279.result = "有广告";
                  _0xc95620("request", _0x581279);
                  _0xc95620("take", Object.assign(_0x581279, {
                    adRequestNum: 0x0,
                    pageName: _0x47202
                  }));
                  _0x3ac48b.show();
                  _0x3ac48b.offError();
                  _0x3ac48b.offLoad();
                });
                _0x3ac48b.onError(function (_0xc66b20) {
                  _0x581279.result = "无广告" + (_0xc66b20.errCode ? _0xc66b20.errCode : "错误码获取失败");
                  _0xc95620("request", _0x581279);
                  if (_0xbd979b && _0xbd979b.fail) {
                    _0xbd979b.fail({
                      msg: "请求失败",
                      videoId: ""
                    });
                  }
                  _0xc95620("take", Object.assign(_0x581279, {
                    adRequestNum: 0x0,
                    pageName: _0x47202
                  }));
                  _0x4ef65d({
                    msg: "请求失败",
                    videoId: ""
                  });
                  _0x3ac48b.offError();
                  _0x3ac48b.offLoad();
                  _0x3ac48b.destroy();
                });
                if ("vivo" != null.brand || false) {
                  _0x3ac48b.load();
                } else {
                  _0x7d98c8.isCreate = true;
                }
                _0x3ac48b.onClose(_0x4ceedc => {
                  if (_0x4ceedc.isEnded) {
                    _0xc95620("show", Object.assign(_0x581279, {
                      result: "播放完成"
                    }));
                    if (_0xbd979b && _0xbd979b.success) {
                      _0xbd979b.success({
                        msg: "播放完成",
                        videoId: ""
                      });
                    }
                    _0x29b62d({
                      msg: "播放完成",
                      videoId: ""
                    });
                  } else {
                    _0xc95620("show", Object.assign(_0x581279, {
                      result: "播放未完成"
                    }));
                    if (_0xbd979b && _0xbd979b.incomplete) {
                      _0xbd979b.incomplete({
                        msg: "播放未完成",
                        videoId: ""
                      });
                    }
                    _0x4ef65d({
                      msg: "播放未完成",
                      videoId: ""
                    });
                  }
                  _0x3ac48b.offClose();
                });
              });
            },
            setPreloadVedioAdv: function _0x4e5be9(_0x5dff24) {
              return new Promise(async (_0x113be7, _0x2220b1) => {
                _0x12c159[_0x5dff24.type] = {
                  ready: _0x5dff24.ready
                };
                if (true && (_0x7d98c8.videoQueue.push(_0x5dff24), _0x7d98c8.videoQueue.length > 0x1)) {
                  return;
                }
                let _0x4f3731 = _0x5dff24 && _0x5dff24.scenario ? _0x5dff24.scenario : "未知";
                let _0x23bb21 = _0x5dff24 && _0x5dff24.popName ? _0x5dff24.popName : "未知";
                let _0x2eb7f3 = _0x5dff24 && _0x5dff24.popGroupName ? _0x5dff24.popGroupName : "未知";
                let _0x40c906 = _0x5dff24 && _0x5dff24.pageName ? _0x5dff24.pageName : "未知";
                if (true && "") {
                  _0x7d98c8.callFunctionType = _0x5dff24.type;
                  _0x7d98c8.videoAdCallFnObj[_0x5dff24.type] = _0x5dff24;
                  if (null && "vivo" !== null.brand) {
                    null.load();
                  } else {
                    if (0x2 === AD_SDK_UTILS.getEcpmType() && AD_SDK_UTILS.getEcpmCompareTypes().includes("2")) {
                      let _0x31c100 = function (_0x4f5327 = false) {
                        "".curLayer = _0x4f5327 ? 0x0 : "".curLayer;
                        let _0x115e08 = JSON.parse(JSON.stringify(""));
                        let _0x21a570 = "";
                        let _0x4025ce = 0x0;
                        if (_0x115e08.curLayer + 0x1 <= _0x115e08.maxLayer) {
                          _0x4025ce = _0x115e08.curLayer;
                          let _0x26fbb5 = _0x115e08.layers[_0x4025ce];
                          _0x21a570 = _0x26fbb5.adsArr[_0x26fbb5.curIndex];
                          "".curLayer++;
                          "".layers[_0x4025ce].curIndex = (_0x26fbb5.curIndex + 0x1) % _0x26fbb5.maxIndex;
                        }
                        return {
                          id: _0x21a570,
                          layer: _0x4025ce
                        };
                      }(!_0x7d98c8.videoAdPrice);
                      if (!_0x31c100.id) {
                        return void (_0x7d98c8.videoAdPrice ? (_0x7d98c8.videoQueue.shift(), "vivo" !== null.brand && (_0x7d98c8.videoAdPrice = 0x0, _0x7d98c8.videoAdCallFnObj[0x1].fail({
                          msg: "ecpm 激励视频未配置广告id"
                        }))) : (_0x7d98c8.videoAdPrice = 0x0, LOG("ecpm 激励视频未配置广告id")));
                      }
                      _0x7d98c8.videoId = _0x31c100.id;
                      _0x7d98c8.videoAdPrice = Number(null.ad_encourage_ecpm[_0x31c100.layer] || 0x0);
                      LOG("ecpm", "videoId", _0x31c100);
                    }
                    var _0x55bd66 = new Object({
                      id: "",
                      ad_network: 0x1,
                      ad_type: "视频",
                      scenario: _0x4f3731,
                      type: "manu_ad",
                      popName: _0x23bb21,
                      popGroupName: _0x2eb7f3
                    });
                    0x0++;
                    _0xc95620("request", Object.assign(_0x55bd66, {
                      result: "发起请求",
                      adRequestNum: 0x0
                    }));
                    _0x7d98c8.videoAd = await $app_require$("@app-module/service.ad").createRewardedVideoAd({
                      adUnitId: ""
                    });
                    _0x7d98c8.videoQueue.shift();
                    if (_0x7d98c8.videoQueue.length > 0x0) {
                      _0x4e5be9(_0x7d98c8.videoQueue[0x0]);
                    }
                    _0x7d98c8.isCreate = false;
                    null.onLoad(function (_0x1f0e8d) {
                      if (_0x98af9("onLoad")) {
                        _0x55bd66.result = "有广告";
                        _0xc95620("request", _0x55bd66);
                        _0xc95620("take", Object.assign(_0x55bd66, {
                          adRequestNum: 0x0,
                          pageName: _0x40c906
                        }));
                        try {
                          for (let _0x36ffed in _0x12c159) _0x12c159[_0x36ffed].ready();
                        } catch (_0xa7f1da) {
                          LOG("video ready", _0xa7f1da);
                        }
                        _0x7d98c8.isVideoReady = true;
                        _0x7d98c8.isVivoLoad = true;
                        _0x5cb3b0("onLoad", null.brand, 0x1);
                      }
                    });
                    null.onError(function (_0x1349cf) {
                      _0x7d98c8.isVideoReady = false;
                      if (_0x98af9("onError")) {
                        _0x55bd66.result = "无广告" + (_0x1349cf.errCode ? _0x1349cf.errCode : "错误码获取失败");
                        _0xc95620("request", _0x55bd66);
                        _0x7d98c8.videoAdCallFnObj[0x1].fail({
                          msg: "请求失败",
                          error: _0x1349cf
                        });
                        _0xc95620("take", Object.assign(_0x55bd66, {
                          adRequestNum: 0x0,
                          pageName: _0x40c906
                        }));
                        _0x5cb3b0("onError", null.brand, 0x1);
                        _0x2220b1({
                          msg: "请求失败",
                          videoId: ""
                        });
                        if (null && "vivo" !== null.brand) {
                          null.offError();
                          null.offLoad();
                          null.offClose();
                          null.destroy();
                          _0x7d98c8.videoAd = null;
                          _0x7d98c8.videoQueue = [];
                        }
                      }
                    });
                    if (false || "vivo" === null.brand) {
                      if (_0x7d98c8.isVivoLoad) {
                        _0x7d98c8.videoAdCallFnObj[0x1].ready();
                      }
                      _0x7d98c8.isVideoReady = true;
                    } else {
                      null.load();
                      _0x7d98c8.isCreate = true;
                    }
                    null.onClose(function (_0x1de699) {
                      _0x7d98c8.isVideoReady = false;
                      if (_0x98af9("onClose")) {
                        if (_0x1de699.isEnded) {
                          _0xc95620("show", Object.assign(_0x55bd66, {
                            result: "播放完成"
                          }));
                          if (_0x5cb3b0("onClose", null.brand)) {
                            EVENT_BUS.on("mutipleVideoShowFail", () => {
                              _0x7d98c8.videoAdCallFnObj[0x1].success({
                                msg: "播放完成",
                                videoId: ""
                              });
                              if (_0x7d98c8.videoBindFun) {
                                _0x7d98c8.videoBindFun();
                              }
                              EVENT_BUS.clear("mutipleVideoShowFail");
                            });
                          } else {
                            _0x7d98c8.videoAdCallFnObj[0x1].success({
                              msg: "播放完成",
                              videoId: ""
                            });
                            if (_0x7d98c8.videoBindFun) {
                              _0x7d98c8.videoBindFun();
                            }
                          }
                          _0x113be7({
                            msg: "播放完成",
                            videoId: ""
                          });
                        } else {
                          _0xc95620("show", Object.assign(_0x55bd66, {
                            result: "播放未完成"
                          }));
                          if (_0x5cb3b0("onClose", null.brand)) {
                            EVENT_BUS.on("mutipleVideoShowFail", () => {
                              _0x7d98c8.videoAdCallFnObj[0x1].incomplete({
                                msg: "播放未完成",
                                videoId: ""
                              });
                              if (_0x7d98c8.videoBindFun) {
                                _0x7d98c8.videoBindFun();
                              }
                              EVENT_BUS.clear("mutipleVideoShowFail");
                            });
                          } else {
                            _0x7d98c8.videoAdCallFnObj[0x1].incomplete({
                              msg: "播放未完成",
                              videoId: ""
                            });
                            if (_0x7d98c8.videoBindFun) {
                              _0x7d98c8.videoBindFun();
                            }
                          }
                          _0x2220b1({
                            msg: "播放未完成",
                            videoId: ""
                          });
                        }
                        if ("huawei" == null.brand) {
                          _0x7d98c8.videoAd = null;
                          _0x4e5be9(_0x5dff24);
                        } else {
                          null.load();
                        }
                      }
                    });
                    if ("honor" == null.brand && null) {
                      null.onReward(function () {
                        _0x7d98c8.isVideoReady = false;
                        if (_0x98af9("onClose")) {
                          _0xc95620("show", Object.assign(_0x55bd66, {
                            result: "播放完成"
                          }));
                          _0x7d98c8.videoAdCallFnObj[0x1].success({
                            msg: "播放完成",
                            videoId: ""
                          });
                          if (_0x7d98c8.videoBindFun) {
                            _0x7d98c8.videoBindFun();
                          }
                          _0x113be7({
                            msg: "播放完成",
                            videoId: ""
                          });
                          null.load();
                        }
                      });
                    }
                  }
                } else {
                  _0x2220b1("不支持广告或未配置广告id");
                }
              });
            },
            getPreloadVedioAdv: _0x3eeb1a,
            destroyVideoAdv: function () {
              if (null && "vivo" !== null.brand) {
                try {
                  null.destroy();
                } catch (_0x2555e5) {
                  console.log("激励视频", _0x2555e5);
                }
                _0x7d98c8.videoAd = null;
                _0x7d98c8.videoAdDebonceObj.onLoad = null;
                _0x7d98c8.videoQueue = [];
              }
            },
            getBannerAdv: function (_0x6bf56e) {
              return new Promise((_0x326f45, _0x129830) => {
                if (_0x3f84d1()) {
                  setTimeout(() => {
                    if (!_0x4a8af8) {
                      _0x4a8af8 = true;
                    }
                    _0x3d4606(_0x6bf56e, _0x326f45, _0x129830);
                  }, _0x4a8af8 ? 0x384 : 0x3e8);
                } else {
                  _0x3d4606(_0x6bf56e, _0x326f45, _0x129830);
                }
              });
            },
            hideBannerAdv: function () {
              console.log("hideBannerAdv=============>1", null);
              return new Promise(_0x35bd95 => {
                null.hide().then(_0x1a73aa => {
                  _0x35bd95("success" === _0x1a73aa.data);
                });
              });
            },
            showBannerAdv: _0x19ac83,
            destroyBannerAdv: function () {
              null.destroy();
              _0x7d98c8.bannerAd = null;
            },
            updatePageUrl: function (_0x3d04ab) {
              _0x7d98c8.pageUrl = _0x3d04ab || "未知";
            },
            updataAdGlobalData: function (_0x249ad6) {
              try {
                Object.assign(_0x7d98c8, _0x249ad6);
                LOG("AD", "广告ADSDK========>ad_sdk_global数据更新完成", _0x7d98c8, _0x249ad6);
              } catch (_0x1d02c1) {
                LOG("AD", "广告ADSDK========>ad_sdk_global数据更新失败", _0x1d02c1);
              }
            },
            getInterstAdv: function _0x3b96f0(_0x3bc213, _0x2b2ce3 = false, _0x4397ab = true) {
              const _0x3866a0 = new Promise(_0x3ff668 => {
                let _0x23f5e1 = _0x3bc213 && _0x3bc213.scenario ? _0x3bc213.scenario : "未知";
                let _0xa0e340 = false;
                AD_SDK.hideInterstAdv(_0x2b2ce3);
                if (null && "vivo" === null.brand) {
                  if (_0xd5b3a2) {
                    LOG("插屏广告", "vivo当前有广告正在展示");
                  } else {
                    null.show().then(() => {
                      LOG("插屏广告", "show成功");
                      _0xd5b3a2 = true;
                      _0xc95620("show", _0x325781);
                      COMMON_REPORT_UTILS.custom_popup_show_report(0x1, "插屏广告", "插屏广告", "插屏广告", "插屏广告", _0x23f5e1, _0x325781.id, "插屏广告", "插屏广告", "插屏广告", "插屏广告", "原生");
                      if (_0x3bc213 && _0x3bc213.success) {
                        _0x3bc213.success("展示成功");
                      }
                      _0x3ff668("展示成功");
                    }, () => {
                      LOG("插屏广告", "show失败");
                      if (_0x3bc213 && _0x3bc213.fail) {
                        _0x3bc213.fail("展示失败");
                      }
                    });
                    LOG("插屏广告", "vivo仅展示广告");
                  }
                } else {
                  let _0xbf9518 = {};
                  _0xbf9518 = function (_0x3371dd = false) {
                    "".curLayer = _0x3371dd ? 0x0 : "".curLayer;
                    let _0x12fa49 = JSON.parse(JSON.stringify(""));
                    let _0x44df95 = "";
                    let _0x34029c = 0x0;
                    if (_0x12fa49.curLayer + 0x1 <= _0x12fa49.maxLayer) {
                      _0x34029c = _0x12fa49.curLayer;
                      let _0x29383b = _0x12fa49.layers[_0x34029c];
                      _0x44df95 = _0x29383b.adsArr[_0x29383b.curIndex];
                      "".curLayer++;
                      "".layers[_0x34029c].curIndex = (_0x29383b.curIndex + 0x1) % _0x29383b.maxIndex;
                    }
                    return {
                      id: _0x44df95,
                      layer: _0x34029c
                    };
                  }(_0x4397ab);
                  if (_0xbf9518.id) {
                    LOG("插屏广告", "id", _0xbf9518.id);
                    _0x7d98c8.interstAd = true && $app_require$("@app-module/service.ad").createInterstitialAd({
                      adUnitId: _0xbf9518.id
                    });
                    null.onLoad(_0x2b5fdb => {
                      LOG("插屏广告", "onLoad", _0x2b5fdb);
                      null.show().then(() => {
                        LOG("插屏广告", "show成功");
                        _0xa0e340 = true;
                        _0xd5b3a2 = true;
                        _0x325781 = _0xbf9518;
                        _0xc95620("show", _0xbf9518);
                        COMMON_REPORT_UTILS.custom_popup_show_report(0x1, "插屏广告", "插屏广告", "插屏广告", "插屏广告", _0x23f5e1, _0xbf9518.id, "插屏广告", "插屏广告", "插屏广告", "插屏广告", "原生");
                        if (_0x3bc213 && _0x3bc213.success) {
                          _0x3bc213.success("展示成功");
                        }
                        _0x3ff668("展示成功");
                      }, () => {
                        LOG("插屏广告", "show失败");
                        _0xa0e340 = true;
                        if (_0x3bc213 && _0x3bc213.fail) {
                          _0x3bc213.fail("展示失败");
                        }
                        _0x3ff668(_0x3b96f0(_0x3bc213, _0x2b2ce3, false));
                      });
                      _0xbf9518.result = "有广告";
                      _0xc95620("request", _0xbf9518);
                      if (_0x3bc213 && _0x3bc213.success) {
                        _0x3bc213.success("请求成功");
                      }
                    });
                    null.onError(_0x2fbe74 => {
                      _0xa0e340 = true;
                      LOG("插屏广告", "onError", _0x2fbe74);
                      _0xbf9518.result = "无广告" + (_0x2fbe74.errCode ? _0x2fbe74.errCode : "错误码获取失败");
                      _0xc95620("request", _0xbf9518);
                      if (_0x3bc213 && _0x3bc213.fail) {
                        _0x3bc213.fail("请求失败");
                      }
                      _0x3ff668(_0x3b96f0(_0x3bc213, _0x2b2ce3, false));
                    });
                    let _0xb77e87 = false;
                    null.onClick(() => {
                      _0xb77e87 = true;
                      LOG("插屏广告", "onClick");
                      _0xd5b3a2 = false;
                      _0xc95620("click", _0xbf9518);
                      COMMON_REPORT_UTILS.custom_popup_click_report("插屏广告", "插屏广告", 0x1, "插屏广告", "插屏广告", "插屏广告", _0x23f5e1, "插屏广告", "插屏广告", _0xbf9518.id, "插屏广告", "插屏广告", "原生");
                      if (_0x3bc213 && _0x3bc213.click) {
                        _0x3bc213.click();
                      }
                    });
                    null.onClose(() => {
                      if (_0xb77e87 && "vivo" === null.brand) {
                        LOG("插屏广告", "onClose", "vivo点击不触发关闭回调");
                        return void (_0xb77e87 = false);
                      }
                      LOG("插屏广告", "onClose");
                      _0xd5b3a2 = false;
                      COMMON_REPORT_UTILS.custom_popup_click_report("插屏广告", "插屏广告", 0x1, "关闭", "插屏广告", "插屏广告", _0x23f5e1, "插屏广告", "插屏广告", _0xbf9518.id, "插屏广告", "插屏广告", "原生");
                      if (_0x3bc213 && _0x3bc213.close) {
                        _0x3bc213.close();
                      }
                    });
                    _0xbf9518.ad_type = "插屏广告";
                    _0xbf9518.ad_network = 0x1;
                    _0xbf9518.scenario = _0x23f5e1;
                    _0xbf9518.result = "发起请求";
                    _0xc95620("request", _0xbf9518);
                    null.load();
                    setTimeout(() => {
                      LOG("插屏广告", "setTimeout", _0xa0e340);
                      if (!_0xa0e340) {
                        LOG("插屏广告", "未触发回调");
                        null.offLoad();
                        null.offError();
                        null.show();
                        _0xbf9518.result = "未触发回调";
                        _0xc95620("request", _0xbf9518);
                        if (_0x3bc213 && _0x3bc213.fail) {
                          _0x3bc213.fail("请求失败");
                        }
                        _0x3ff668(_0x3b96f0(_0x3bc213, _0x2b2ce3, false));
                      }
                    }, 0x7d0);
                  } else {
                    LOG("插屏广告", "else");
                    _0x3ff668(false);
                  }
                }
              });
              return _0x3866a0;
            },
            hideInterstAdv: function (_0x566caf = false) {
              LOG("插屏广告", "销毁广告", _0x566caf);
              if (null && ("vivo" !== null.brand || _0x566caf)) {
                null.destroy();
                _0x7d98c8.interstAd = null;
              }
            },
            uploadAdInfo: _0xc95620,
            setHWAd: function (_0x14b0ec, _0x333543) {
              _0x59136e.context = _0x14b0ec;
              _0x59136e.func_name = _0x333543;
            },
            clearHWAd: function () {
              _0x59136e.adv_data = null;
              _0x59136e.context = null;
              _0x59136e.func_name = "";
            },
            getMaterialUrlByAdData: _0x4242bb,
            getNextAdId: _0x428084,
            getNextOppoAdData: function (_0x158405) {
              let _0x16185b = null;
              let {
                scenario: _0x39d1cf,
                sceneCode: _0x22a6e7,
                adType: _0x2cf473,
                adTimes: _0x35d7fe,
                popName: _0x282d22,
                popGroupName: _0x56f79d,
                requestNum: _0x4d9b74,
                nativeAdvObj: _0x2f8425,
                actionCode: _0x1cc8f2
              } = _0x158405;
              let _0x443363 = {};
              if ("AD_SCENE_READ_BANNER" == _0x22a6e7) {
                _0x443363 = _0x4f3915(false);
                LOG("AD", "getNextNativeBannerAdId==>", _0x443363);
              } else if ("PAGE_ENTRY" === _0x1cc8f2) {
                _0x443363 = _0x5d8471(false);
                LOG("AD", "getNextNativePageEntryAdId", _0x443363);
              } else if ("PAGE_BACK" === _0x1cc8f2) {
                _0x443363 = _0x33b35b(false);
                LOG("AD", "getNextNativePageBackAdId", _0x443363);
              } else if ("boost" === _0x1cc8f2) {
                _0x443363 = _0x5c694b(false, false);
                LOG("AD", "getNextOppoAdData getBoostAdId", _0x443363);
              } else if (0x0 || 0x0) {
                _0x443363 = _0x4be711(false);
                LOG("AD", "getNextAdId1222==>", _0x443363);
              } else {
                _0x443363 = _0x428084(false);
                LOG("AD", "getNextOppoAdData==>", _0x443363);
              }
              if ("冷却" !== _0x2f8425.id) {
                if (_0x7d98c8.failObject[_0x2f8425.id]) {
                  _0x7d98c8.failObject[_0x2f8425.id]++;
                } else {
                  _0x7d98c8.failObject[_0x2f8425.id] = 0x1;
                }
              }
              _0x592508();
              if (_0x443363.id) {
                var _0x5aea17 = new Object({
                  id: _0x443363.id,
                  ad_network: 0x1,
                  ad_type: "原生",
                  scenario: _0x39d1cf,
                  type: "manu_ad",
                  popName: _0x282d22,
                  popGroupName: _0x56f79d,
                  requestNum: _0x4d9b74,
                  actionCode: _0x1cc8f2
                });
                0x0++;
                _0xc95620("request", Object.assign(_0x5aea17, {
                  result: "发起请求",
                  adRequestNum: 0x0
                }));
                let _0x115e97 = {
                  id: _0x443363.id,
                  layer: _0x443363.layer,
                  adMethod: "2.0",
                  "brand": "oppo",
                  "title": "",
                  "type": "manu_ad",
                  "showCount": 0x1,
                  "clickBtnTxt": "领取奖励",
                  "source": "",
                  "materialUrl": "https://imgs.syreads.com/image/2022-06-29/adDefaultImg1.png",
                  "ad_network": 0x1,
                  ad_type: "原生",
                  is_ad_click: "no",
                  "isAdLoadError": true,
                  "result": "无广告",
                  adType: _0x2cf473,
                  "adTimes": _0x35d7fe,
                  sceneCode: _0x22a6e7,
                  scenario: _0x39d1cf,
                  "popName": _0x282d22,
                  "popGroupName": _0x56f79d,
                  requestNum: _0x4d9b74,
                  "ad_style": "",
                  "isUsedAdButton": 0x2,
                  "isUsedOppoButton": 0x3,
                  "adRequestNum": 0x0,
                  "actionCode": _0x1cc8f2
                };
                _0x16185b = _0x115e97;
                _0x12516c(_0x1cc8f2, {}, _0x115e97);
              }
              return _0x16185b;
            },
            getNextTemplateAdData: _0x4d6ef7,
            getRequestHandle: function (_0x50c282) {
              if (_0x50c282) {
                _0x7d98c8.adgNum = _0x50c282;
              } else {
                _0x7d98c8.adgNum += 0x1;
              }
              LOG(_0x50c282, 0x1, "jiajiajia");
            },
            getTempleteAdv: function (_0x13e0cd) {
              return new Promise((_0x5e37fb, _0x106487) => {
                const {
                  scenario: _0x5b7caf,
                  sceneCode: _0x54e5b3,
                  popGroupName: _0x1bdbfa,
                  popName: _0x1a10d5
                } = _0x13e0cd;
                var _0x46c195 = {
                  res_type: "fail",
                  type: "temp_ad",
                  scenario: _0x5b7caf,
                  sceneCode: _0x54e5b3,
                  popGroupName: _0x1bdbfa,
                  popName: _0x1a10d5,
                  advDetail: null,
                  id: "",
                  brand: null.brand,
                  adMethod: "2.0",
                  ad_network: 0x1,
                  ad_type: "icon",
                  result: "发起请求",
                  ad_style: ""
                };
                if ("huawei" == null.brand && null.platformVersionCode > 0x44c) {
                  _0x3c800e();
                  let _0x4467c7 = {
                    adUnitId: _0x7d98c8.templateAdConfig.huawei.template_ids[_0x7d98c8.templateAdConfig.huawei.index],
                    type: "appList",
                    darkMode: 0x0,
                    width: 0x2ee,
                    height: 0x1c2,
                    personalizedAd: 0x0
                  };
                  console.log("getTempleteAdv load ready, _params=", JSON.stringify(_0x4467c7));
                  _0xc95620("request", Object.assign({}, _0x46c195, {
                    id: _0x7d98c8.templateAdConfig.huawei.template_ids[_0x7d98c8.templateAdConfig.huawei.index]
                  }));
                  _0x7d98c8.templateAds.huawei = $app_require$("@app-module/service.ad").createTemplateAd(_0x4467c7);
                  _0x7d98c8.templateAds.huawei.load({
                    success: function (_0x5c00c4) {
                      console.log("getTempleteAdv load success, code=", JSON.stringify(_0x5c00c4));
                      _0x46c195.id = _0x7d98c8.templateAdConfig.huawei.template_ids[_0x7d98c8.templateAdConfig.huawei.index];
                      _0x46c195.res_type = "success";
                      _0x46c195.advDetail = _0x5c00c4;
                      _0x46c195.result = "有广告";
                      _0xc95620("request", _0x46c195);
                      if (_0x13e0cd && _0x13e0cd.success) {
                        _0x13e0cd.success(_0x46c195);
                      }
                      _0x5e37fb(_0x46c195);
                    },
                    fail: function (_0x3e8887, _0x4713fe) {
                      _0x46c195.id = _0x7d98c8.templateAdConfig.huawei.template_ids[_0x7d98c8.templateAdConfig.huawei.index];
                      _0x46c195.res_type = "fail";
                      _0x46c195.result = "无广告";
                      _0xc95620("request", _0x46c195);
                      if (_0x13e0cd && _0x13e0cd.fail) {
                        _0x13e0cd.fail(_0x46c195);
                      }
                      _0x5e37fb(_0x46c195);
                      console.log("getTempleteAdv load fail, code=" + _0x4713fe, _0x3e8887);
                    }
                  });
                } else {
                  console.log("getTempleteAdv 当前环境不支持模板广告");
                  _0x46c195.res_type = "fail";
                  if (_0x13e0cd && _0x13e0cd.fail) {
                    _0x13e0cd.fail(_0x46c195);
                  }
                  _0x5e37fb(_0x46c195);
                  console.log("当前环境不支持模板广告");
                }
              });
            },
            destroyTempleteAdv: _0x3c800e,
            isScreenAdClick: function () {
              return _0x3c3e12;
            },
            resetScreenAdClick: function () {
              _0x3c3e12 = false;
            },
            kdxfAd: function (_0x5f0d70, _0xa6f7cd) {
              let _0x585a16 = {};
              try {
                const _0x4a99ae = Math.round(0x989680 * Math.random()) + "-" + Date.now() + "-" + Math.round(0x989680 * Math.random());
                const {
                  oaid: _0x5d931b,
                  android: _0x191f10,
                  brand: _0x4b09ee,
                  model: _0x1f4a00,
                  mac: _0x41acf3,
                  versionName: _0x265f26,
                  userAgent: _0x4bf9cd,
                  geolocation: _0x664e00 = {}
                } = _0x5f0d70.$app.$def;
                const {
                  name: _0x51f1dc,
                  packageName: _0x5d023e
                } = _0x345989["default"].getInfo();
                _0x585a16 = {
                  id: _0x4a99ae,
                  api_ver: "1.0.0",
                  imps: [{
                    adw: 0x3c0,
                    adh: 0x280,
                    adunit_id: _0xa6f7cd,
                    bidfloor: 0.01,
                    dp_support_status: [0x1, 0x2],
                    secure: 0x2
                  }],
                  app: {
                    bundle: _0x5d023e,
                    app_ver: _0x265f26,
                    app_name: _0x51f1dc
                  },
                  device: {
                    ua: _0x4bf9cd,
                    geo: {
                      lat: _0x664e00.latitude,
                      lon: _0x664e00.longitude
                    },
                    oaid: _0x5d931b,
                    imei: "",
                    imei_md5: "",
                    mac: _0x41acf3,
                    mac_md5: _0x41acf3 ? (0x0, _0x33ed5d["default"])(_0x41acf3) : "",
                    adid: _0x191f10,
                    dvw: 0x2d0,
                    dvh: 0x438,
                    make: _0x4b09ee,
                    model: _0x1f4a00,
                    os: 0x0,
                    osv: "7.0",
                    net: 0x6,
                    carrier: 0x3,
                    lan: "zh-CN",
                    device_type: 0x0,
                    ip: REPORT_SDK.get_attr("ip")
                  }
                };
                LOG("KDXF_AD", "ad_sdk", _0x585a16);
                return new Promise(_0x294d1b => {
                  _0x4bb280["default"].postExternal("https://mt.voiceads.cn/c/req", _0x585a16, _0x5f0d70.pageName).then(_0x17f2fe => {
                    LOG("KDXF_AD", "sdk请求结果", _0x17f2fe);
                    if (_0x17f2fe.ads) {
                      _0x294d1b(_0x17f2fe);
                    } else {
                      _0x294d1b();
                    }
                  })["catch"](_0x363bad => {
                    LOG("KDXF_AD", "fetchAd", _0x363bad);
                    _0x294d1b();
                  });
                });
              } catch (_0x2feb57) {
                LOG("KDXF_AD", "ad_sdk", _0x2feb57);
              }
            },
            isSameAd: function (_0x30bbab) {
              return _0x440284[_0x30bbab];
            },
            getAppStatus: _0x47c2c5,
            isVideoAdLoading: function () {
              return false;
            },
            vivoDestroyVideoAdv: function () {
              if (null && "vivo" === null.brand && !_0x7d98c8.isVivoLoad) {
                try {
                  null.destroy();
                } catch (_0x17a088) {
                  console.log("激励视频", _0x17a088);
                }
                _0x7d98c8.videoAd = null;
                _0x7d98c8.videoQueue = [];
              }
            },
            getVideoEcpm: function () {
              return 0x2 === AD_SDK_UTILS.getEcpmType() && _0x7d98c8.videoAdPrice || 0x0;
            },
            clearVideoCallMap: function () {
              _0x12c159 = {};
            },
            clearAdQueue: function () {
              _0x25329e = [];
            },
            isOpenOppoPreloadAd: _0x3f84d1,
            getDoubleBannerTopVivo: function (_0x23dea0, _0x1e1571 = true) {
              return _0x15d03e({
                obj: _0x23dea0,
                isFirstLoad: _0x1e1571,
                getAdIdFunc: _0x2de378.doubleBannerTop.getAdIdFunc,
                adConfig: _0x2de378.doubleBannerTop
              });
            },
            getDoubleBannerBottomVivo: function (_0x2a8588, _0xfdd8ae = true) {
              return _0x15d03e({
                obj: _0x2a8588,
                isFirstLoad: _0xfdd8ae,
                getAdIdFunc: _0x2de378.doubleBannerBottom.getAdIdFunc,
                adConfig: _0x2de378.doubleBannerBottom
              });
            },
            hideBannerAdvDoubleBottom: function () {
              return new Promise(_0x3c07fc => {
                null.hide().then(_0x5e9e26 => {
                  _0x3c07fc("success" === _0x5e9e26.data);
                });
              });
            },
            hideBannerAdvDouble: function () {
              return new Promise(_0x1dae3d => {
                null.hide().then(_0x2f9cea => {
                  _0x1dae3d("success" === _0x2f9cea.data);
                });
              });
            },
            destroyBannerAdvDouble: function () {
              LOG(null, "destroy1");
              null.destroy();
              _0x7d98c8.doubleBanner1 = null;
              LOG(null, "destroy11");
              LOG(null, "destroy2");
              null.destroy();
              _0x7d98c8.doubleBanner2 = null;
              LOG(null, "destroy22");
            },
            showDoubleBannerAdv: function () {
              null.show();
              null.show();
            },
            getDoubleBannerAdv: function _0x5f5bc5(_0xb1129b, _0x36d841 = true) {
              const {
                scenario: _0x25435f,
                type: _0x37507a
              } = _0xb1129b.obj;
              return new Promise((_0x3e086d, _0x2dcca2) => {
                let _0x443f76 = {};
                _0x443f76 = _0x1f7aeb(_0x36d841);
                if (_0x443f76.id) {
                  LOG("VIEW", "双banner上", _0x443f76.id, _0x443f76.layer);
                  _0x443f76.ad_type = "banner上";
                  _0x443f76.ad_network = 0x1;
                  _0x443f76.scenario = _0x25435f;
                  let _0x4d2256 = {
                    top: 0x5a,
                    left: 0x0
                  };
                  LOG(null, "res展示banner1");
                  _0x7d98c8.doubleBanner1 = true && $app_require$("@app-module/service.ad").createBannerAd({
                    adUnitId: _0x443f76.id,
                    style: _0x4d2256
                  });
                  _0xc95620("request", Object.assign({}, _0x443f76, {
                    result: "发起请求"
                  }));
                  null.show();
                  null.onLoad(() => {
                    _0x443f76.result = "有广告";
                    _0xc95620("request", _0x443f76);
                    _0xc95620("show", _0x443f76);
                    if (_0xb1129b && _0xb1129b.success) {
                      _0xb1129b.success("banner上请求成功");
                    }
                    _0x3e086d("banner上请求成功");
                    null.offError();
                    null.offLoad();
                  });
                  null.onError(_0x5af901 => {
                    _0x443f76.result = "无广告" + (_0x5af901.errCode ? _0x5af901.errCode : "错误码获取失败");
                    _0xc95620("request", _0x443f76);
                    if (_0xb1129b && _0xb1129b.fail) {
                      _0xb1129b.fail("banner上请求失败");
                    }
                    _0x2dcca2("banner上请求失败");
                    null.offLoad();
                    null.offError();
                    _0x3e086d(_0x5f5bc5(_0xb1129b, false));
                  });
                  null.onClose(() => {
                    if (_0xb1129b && _0xb1129b.close) {
                      _0xb1129b.close();
                    }
                  });
                  null.onClick(() => {
                    _0xc95620("click", _0x443f76);
                  });
                } else {
                  LOG("双banner", "not null id");
                  _0x3e086d(false);
                }
              });
            },
            getDoubleBannerBottomAdv: function _0x5cb171(_0x549b1e, _0x3948d6 = true) {
              const {
                scenario: _0x50c621,
                type: _0x2fed40
              } = _0x549b1e.obj;
              return new Promise((_0x141ee3, _0x34cfc7) => {
                let _0x5af480 = {};
                _0x5af480 = function (_0x1f79f4) {
                  "".curLayer = _0x1f79f4 ? 0x0 : "".curLayer;
                  let _0x442298 = JSON.parse(JSON.stringify(""));
                  let _0x106a98 = "";
                  let _0xb5c522 = 0x0;
                  if (_0x442298.curLayer + 0x1 <= _0x442298.maxLayer) {
                    _0xb5c522 = _0x442298.curLayer;
                    let _0x9feb10 = _0x442298.layers[_0xb5c522];
                    _0x106a98 = _0x9feb10.adsArr[_0x9feb10.curIndex];
                    "".curLayer++;
                    "".layers[_0xb5c522].curIndex = (_0x9feb10.curIndex + 0x1) % _0x9feb10.maxIndex;
                  }
                  return {
                    id: _0x106a98,
                    layer: _0xb5c522
                  };
                }(_0x3948d6);
                if (_0x5af480.id) {
                  LOG("VIEW", "双banner下", _0x5af480.id, _0x5af480.layer);
                  _0x5af480.ad_type = "banner下";
                  _0x5af480.ad_network = 0x1;
                  _0x5af480.scenario = _0x50c621;
                  let _0x5d7b59 = {
                    width: 0x2ee,
                    left: 0x14
                  };
                  LOG(null, "res展示banner2");
                  _0x7d98c8.doubleBanner2 = true && $app_require$("@app-module/service.ad").createBannerAd({
                    adUnitId: _0x5af480.id,
                    style: _0x5d7b59
                  });
                  _0xc95620("request", Object.assign({}, _0x5af480, {
                    result: "发起请求"
                  }));
                  null.show();
                  null.onLoad(_0xc6b963 => {
                    LOG(_0xc6b963, "res展示banner2");
                    _0x5af480.result = "有广告";
                    _0xc95620("request", _0x5af480);
                    _0xc95620("show", _0x5af480);
                    if (_0x549b1e && _0x549b1e.success) {
                      _0x549b1e.success("banner下请求成功");
                    }
                    _0x141ee3("banner下请求成功");
                    null.offError();
                    null.offLoad();
                  });
                  null.onError(_0x19f603 => {
                    _0x5af480.result = "无广告" + (_0x19f603.errCode ? _0x19f603.errCode : "错误码获取失败");
                    _0xc95620("request", _0x5af480);
                    if (_0x549b1e && _0x549b1e.fail) {
                      _0x549b1e.fail("banner下请求失败");
                    }
                    _0x34cfc7("banner下请求失败");
                    null.offLoad();
                    null.offError();
                    _0x141ee3(_0x5cb171(_0x549b1e, false));
                  });
                  null.onClose(() => {
                    if (_0x549b1e && _0x549b1e.close) {
                      _0x549b1e.close();
                    }
                  });
                  null.onClick(() => {
                    _0xc95620("click", _0x5af480);
                  });
                } else {
                  LOG("双banner", "not null id");
                  _0x141ee3(false);
                }
              });
            }
          };
          (_0x4a4030.g.__proto__ || _0x4a4030.g).AD_SDK = _0x441d5b;
          _0x12b67a["default"] = _0x441d5b;
        },
        0x13c61: (_0x53ba5d, _0x596f89) => {
          "use strict";

          Object.defineProperty(_0x596f89, "__esModule", {
            value: true
          });
          _0x596f89["default"] = undefined;
          var _0x2a18f3;
          var _0x4e95c4 = _0x4e95c4 || function (_0xc31d3d) {
            var _0x6d9db5 = {};
            var _0x4cf66d = _0x6d9db5.lib = {};
            var _0x18a0ce = function () {};
            var _0x278867 = _0x4cf66d.Base = {
              extend: function (_0x4b21ba) {
                _0x18a0ce.prototype = this;
                var _0x2681ea = new _0x18a0ce();
                if (_0x4b21ba) {
                  _0x2681ea.mixIn(_0x4b21ba);
                }
                if (!_0x2681ea.hasOwnProperty("init")) {
                  _0x2681ea.init = function () {
                    _0x2681ea.$super.init.apply(this, arguments);
                  };
                }
                _0x2681ea.init.prototype = _0x2681ea;
                _0x2681ea.$super = this;
                return _0x2681ea;
              },
              create: function () {
                var _0xc51745 = this.extend();
                _0xc51745.init.apply(_0xc51745, arguments);
                return _0xc51745;
              },
              init: function () {},
              mixIn: function (_0x28a5ab) {
                for (var _0x27830c in _0x28a5ab) if (_0x28a5ab.hasOwnProperty(_0x27830c)) {
                  this[_0x27830c] = _0x28a5ab[_0x27830c];
                }
                if (_0x28a5ab.hasOwnProperty("toString")) {
                  this.toString = _0x28a5ab.toString;
                }
              },
              clone: function () {
                return this.init.prototype.extend(this);
              }
            };
            var _0x94c222 = _0x4cf66d.WordArray = _0x278867.extend({
              init: function (_0x2c52e6, _0xfcfd4e) {
                _0x2c52e6 = this.words = _0x2c52e6 || [];
                this.sigBytes = null != _0xfcfd4e ? _0xfcfd4e : 0x4 * _0x2c52e6.length;
              },
              toString: function (_0x553a20) {
                return (_0x553a20 || _0x548bd5).stringify(this);
              },
              concat: function (_0x3f4b75) {
                var _0x5e46b4 = this.words;
                var _0x425125 = _0x3f4b75.words;
                var _0x76bb7e = this.sigBytes;
                _0x3f4b75 = _0x3f4b75.sigBytes;
                this.clamp();
                if (_0x76bb7e % 0x4) {
                  for (var _0x356896 = 0x0; _0x356896 < _0x3f4b75; _0x356896++) {
                    _0x5e46b4[_0x76bb7e + _0x356896 >>> 0x2] |= (_0x425125[_0x356896 >>> 0x2] >>> 0x18 - _0x356896 % 0x4 * 0x8 & 0xff) << 0x18 - (_0x76bb7e + _0x356896) % 0x4 * 0x8;
                  }
                } else {
                  if (0xffff < _0x425125.length) {
                    for (_0x356896 = 0x0; _0x356896 < _0x3f4b75; _0x356896 += 0x4) {
                      _0x5e46b4[_0x76bb7e + _0x356896 >>> 0x2] = _0x425125[_0x356896 >>> 0x2];
                    }
                  } else {
                    _0x5e46b4.push.apply(_0x5e46b4, _0x425125);
                  }
                }
                this.sigBytes += _0x3f4b75;
                return this;
              },
              clamp: function () {
                var _0x3c8712 = this.words;
                var _0x3264ac = this.sigBytes;
                _0x3c8712[_0x3264ac >>> 0x2] &= 0xffffffff << 0x20 - _0x3264ac % 0x4 * 0x8;
                _0x3c8712.length = _0xc31d3d.ceil(_0x3264ac / 0x4);
              },
              clone: function () {
                var _0x22e24d = _0x278867.clone.call(this);
                _0x22e24d.words = this.words.slice(0x0);
                return _0x22e24d;
              },
              random: function (_0x3aa531) {
                var _0x250303 = [];
                for (var _0x164fbd = 0x0; _0x164fbd < _0x3aa531; _0x164fbd += 0x4) {
                  _0x250303.push(0x100000000 * _0xc31d3d.random() | 0x0);
                }
                return new _0x94c222.init(_0x250303, _0x3aa531);
              }
            });
            var _0x451978 = _0x6d9db5.enc = {};
            var _0x548bd5 = _0x451978.Hex = {
              stringify: function (_0xdcf47d) {
                var _0xe3f18d = _0xdcf47d.words;
                _0xdcf47d = _0xdcf47d.sigBytes;
                var _0x58634f = [];
                for (var _0x1faf1a = 0x0; _0x1faf1a < _0xdcf47d; _0x1faf1a++) {
                  var _0x285824 = _0xe3f18d[_0x1faf1a >>> 0x2] >>> 0x18 - _0x1faf1a % 0x4 * 0x8 & 0xff;
                  _0x58634f.push((_0x285824 >>> 0x4).toString(0x10));
                  _0x58634f.push((0xf & _0x285824).toString(0x10));
                }
                return _0x58634f.join("");
              },
              parse: function (_0xb6c334) {
                var _0x37c858 = _0xb6c334.length;
                var _0x1a93da = [];
                for (var _0x32746b = 0x0; _0x32746b < _0x37c858; _0x32746b += 0x2) {
                  _0x1a93da[_0x32746b >>> 0x3] |= parseInt(_0xb6c334.substr(_0x32746b, 0x2), 0x10) << 0x18 - _0x32746b % 0x8 * 0x4;
                }
                return new _0x94c222.init(_0x1a93da, _0x37c858 / 0x2);
              }
            };
            var _0x4d2064 = _0x451978.Latin1 = {
              stringify: function (_0xb2f5c3) {
                var _0x19943d = _0xb2f5c3.words;
                _0xb2f5c3 = _0xb2f5c3.sigBytes;
                var _0x55202c = [];
                for (var _0x3ae480 = 0x0; _0x3ae480 < _0xb2f5c3; _0x3ae480++) {
                  _0x55202c.push(String.fromCharCode(_0x19943d[_0x3ae480 >>> 0x2] >>> 0x18 - _0x3ae480 % 0x4 * 0x8 & 0xff));
                }
                return _0x55202c.join("");
              },
              parse: function (_0x31d38a) {
                var _0x48b8eb = _0x31d38a.length;
                var _0x19688c = [];
                for (var _0x4e2d59 = 0x0; _0x4e2d59 < _0x48b8eb; _0x4e2d59++) {
                  _0x19688c[_0x4e2d59 >>> 0x2] |= (0xff & _0x31d38a.charCodeAt(_0x4e2d59)) << 0x18 - _0x4e2d59 % 0x4 * 0x8;
                }
                return new _0x94c222.init(_0x19688c, _0x48b8eb);
              }
            };
            var _0x4f4312 = _0x451978.Utf8 = {
              stringify: function (_0x146c7b) {
                try {
                  return decodeURIComponent(escape(_0x4d2064.stringify(_0x146c7b)));
                } catch (_0x357a65) {
                  throw Error("Malformed UTF-8 data");
                }
              },
              parse: function (_0x282ec5) {
                return _0x4d2064.parse(unescape(encodeURIComponent(_0x282ec5)));
              }
            };
            var _0x967683 = _0x4cf66d.BufferedBlockAlgorithm = _0x278867.extend({
              reset: function () {
                this._data = new _0x94c222.init();
                this._nDataBytes = 0x0;
              },
              _append: function (_0x1bef8c) {
                if ("string" == typeof _0x1bef8c) {
                  _0x1bef8c = _0x4f4312.parse(_0x1bef8c);
                }
                this._data.concat(_0x1bef8c);
                this._nDataBytes += _0x1bef8c.sigBytes;
              },
              _process: function (_0x24e1ab) {
                var _0x4136dd = this._data;
                var _0x1afe25 = _0x4136dd.words;
                var _0x5e67ac = _0x4136dd.sigBytes;
                var _0x161af9 = this.blockSize;
                var _0x5857b6 = _0x5e67ac / (0x4 * _0x161af9);
                _0x24e1ab = (_0x5857b6 = _0x24e1ab ? _0xc31d3d.ceil(_0x5857b6) : _0xc31d3d.max((0x0 | _0x5857b6) - this._minBufferSize, 0x0)) * _0x161af9;
                _0x5e67ac = _0xc31d3d.min(0x4 * _0x24e1ab, _0x5e67ac);
                if (_0x24e1ab) {
                  for (var _0x143c13 = 0x0; _0x143c13 < _0x24e1ab; _0x143c13 += _0x161af9) {
                    this._doProcessBlock(_0x1afe25, _0x143c13);
                  }
                  _0x143c13 = _0x1afe25.splice(0x0, _0x24e1ab);
                  _0x4136dd.sigBytes -= _0x5e67ac;
                }
                return new _0x94c222.init(_0x143c13, _0x5e67ac);
              },
              clone: function () {
                var _0x1e100c = _0x278867.clone.call(this);
                _0x1e100c._data = this._data.clone();
                return _0x1e100c;
              },
              _minBufferSize: 0x0
            });
            _0x4cf66d.Hasher = _0x967683.extend({
              cfg: _0x278867.extend(),
              init: function (_0x4c464c) {
                this.cfg = this.cfg.extend(_0x4c464c);
                this.reset();
              },
              reset: function () {
                _0x967683.reset.call(this);
                this._doReset();
              },
              update: function (_0x5bcf21) {
                this._append(_0x5bcf21);
                this._process();
                return this;
              },
              finalize: function (_0x29c904) {
                if (_0x29c904) {
                  this._append(_0x29c904);
                }
                return this._doFinalize();
              },
              blockSize: 0x10,
              _createHelper: function (_0x3cafae) {
                return function (_0x21dee0, _0x537071) {
                  return new _0x3cafae.init(_0x537071).finalize(_0x21dee0);
                };
              },
              _createHmacHelper: function (_0x25a318) {
                return function (_0xc27ad4, _0x52003c) {
                  return new _0x2d9614.HMAC.init(_0x25a318, _0x52003c).finalize(_0xc27ad4);
                };
              }
            });
            var _0x2d9614 = _0x6d9db5.algo = {};
            return _0x6d9db5;
          }(Math);
          _0x2a18f3 = _0x4e95c4.lib.WordArray;
          _0x4e95c4.enc.Base64 = {
            stringify: function (_0x388204) {
              var _0x475709 = _0x388204.words;
              var _0x197215 = _0x388204.sigBytes;
              var _0x1fe8b8 = this._map;
              _0x388204.clamp();
              _0x388204 = [];
              for (var _0x5479b0 = 0x0; _0x5479b0 < _0x197215; _0x5479b0 += 0x3) {
                var _0x1ec8a7 = (_0x475709[_0x5479b0 >>> 0x2] >>> 0x18 - _0x5479b0 % 0x4 * 0x8 & 0xff) << 0x10 | (_0x475709[_0x5479b0 + 0x1 >>> 0x2] >>> 0x18 - (_0x5479b0 + 0x1) % 0x4 * 0x8 & 0xff) << 0x8 | _0x475709[_0x5479b0 + 0x2 >>> 0x2] >>> 0x18 - (_0x5479b0 + 0x2) % 0x4 * 0x8 & 0xff;
                for (var _0x16e371 = 0x0; 0x4 > _0x16e371 && _0x5479b0 + 0.75 * _0x16e371 < _0x197215; _0x16e371++) {
                  _0x388204.push(_0x1fe8b8.charAt(_0x1ec8a7 >>> 0x6 * (0x3 - _0x16e371) & 0x3f));
                }
              }
              if (_0x475709 = _0x1fe8b8.charAt(0x40)) {
                for (; _0x388204.length % 0x4;) {
                  _0x388204.push(_0x475709);
                }
              }
              return _0x388204.join("");
            },
            parse: function (_0xb5b545) {
              var _0x5c3803 = _0xb5b545.length;
              var _0x4abe53 = this._map;
              if ((_0x3cfabe = _0x4abe53.charAt(0x40)) && -0x1 != (_0x3cfabe = _0xb5b545.indexOf(_0x3cfabe))) {
                _0x5c3803 = _0x3cfabe;
              }
              var _0x3cfabe = [];
              var _0x409557 = 0x0;
              for (var _0x426f02 = 0x0; _0x426f02 < _0x5c3803; _0x426f02++) {
                if (_0x426f02 % 0x4) {
                  var _0x9839d2 = _0x4abe53.indexOf(_0xb5b545.charAt(_0x426f02 - 0x1)) << _0x426f02 % 0x4 * 0x2;
                  var _0x3c3ba7 = _0x4abe53.indexOf(_0xb5b545.charAt(_0x426f02)) >>> 0x6 - _0x426f02 % 0x4 * 0x2;
                  _0x3cfabe[_0x409557 >>> 0x2] |= (_0x9839d2 | _0x3c3ba7) << 0x18 - _0x409557 % 0x4 * 0x8;
                  _0x409557++;
                }
              }
              return _0x2a18f3.create(_0x3cfabe, _0x409557);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
          (function (_0x31db8c) {
            function _0x4913c4(_0x34c23, _0x2a5d4d, _0x183064, _0x4579fc, _0x1c1f05, _0x44cc3c, _0x3a3c20) {
              return ((_0x34c23 = _0x34c23 + (_0x2a5d4d & _0x183064 | ~_0x2a5d4d & _0x4579fc) + _0x1c1f05 + _0x3a3c20) << _0x44cc3c | _0x34c23 >>> 0x20 - _0x44cc3c) + _0x2a5d4d;
            }
            function _0xb10362(_0x553acf, _0x105cf5, _0x1734c2, _0x3aac73, _0x1390f5, _0xf3981d, _0x4695ad) {
              return ((_0x553acf = _0x553acf + (_0x105cf5 & _0x3aac73 | _0x1734c2 & ~_0x3aac73) + _0x1390f5 + _0x4695ad) << _0xf3981d | _0x553acf >>> 0x20 - _0xf3981d) + _0x105cf5;
            }
            function _0x16255b(_0xe27bac, _0x4900de, _0x47d1c9, _0x4a242f, _0x2dba6d, _0xa7efc0, _0x3832f2) {
              return ((_0xe27bac = _0xe27bac + (_0x4900de ^ _0x47d1c9 ^ _0x4a242f) + _0x2dba6d + _0x3832f2) << _0xa7efc0 | _0xe27bac >>> 0x20 - _0xa7efc0) + _0x4900de;
            }
            function _0x58dd28(_0x513526, _0x56406f, _0x274495, _0x36cc56, _0x7edd36, _0x27a9b9, _0x4e3cc2) {
              return ((_0x513526 = _0x513526 + (_0x274495 ^ (_0x56406f | ~_0x36cc56)) + _0x7edd36 + _0x4e3cc2) << _0x27a9b9 | _0x513526 >>> 0x20 - _0x27a9b9) + _0x56406f;
            }
            var _0x4bde89 = (_0x5401cd = _0x4e95c4.lib).WordArray;
            var _0x16090a = _0x5401cd.Hasher;
            var _0x5401cd = _0x4e95c4.algo;
            var _0x386ef8 = [];
            for (var _0x316db0 = 0x0; 0x40 > _0x316db0; _0x316db0++) {
              _0x386ef8[_0x316db0] = 0x100000000 * _0x31db8c.abs(_0x31db8c.sin(_0x316db0 + 0x1)) | 0x0;
            }
            _0x5401cd = _0x5401cd.MD5 = _0x16090a.extend({
              _doReset: function () {
                this._hash = new _0x4bde89.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
              },
              _doProcessBlock: function (_0x5c2624, _0x5f6bca) {
                for (var _0x21dfbb = 0x0; 0x10 > _0x21dfbb; _0x21dfbb++) {
                  var _0xeddf4e = _0x5c2624[_0x59acad = _0x5f6bca + _0x21dfbb];
                  _0x5c2624[_0x59acad] = 0xff00ff & (_0xeddf4e << 0x8 | _0xeddf4e >>> 0x18) | 0xff00ff00 & (_0xeddf4e << 0x18 | _0xeddf4e >>> 0x8);
                }
                _0x21dfbb = this._hash.words;
                var _0x59acad = _0x5c2624[_0x5f6bca + 0x0];
                _0xeddf4e = _0x5c2624[_0x5f6bca + 0x1];
                var _0x57e68e = _0x5c2624[_0x5f6bca + 0x2];
                var _0x4ca65d = _0x5c2624[_0x5f6bca + 0x3];
                var _0x58e106 = _0x5c2624[_0x5f6bca + 0x4];
                var _0x3530ca = _0x5c2624[_0x5f6bca + 0x5];
                var _0x5c77a4 = _0x5c2624[_0x5f6bca + 0x6];
                var _0x2aa905 = _0x5c2624[_0x5f6bca + 0x7];
                var _0x95fda7 = _0x5c2624[_0x5f6bca + 0x8];
                var _0x12538c = _0x5c2624[_0x5f6bca + 0x9];
                var _0x1974ef = _0x5c2624[_0x5f6bca + 0xa];
                var _0x3684dc = _0x5c2624[_0x5f6bca + 0xb];
                var _0x51d2f8 = _0x5c2624[_0x5f6bca + 0xc];
                var _0x273e76 = _0x5c2624[_0x5f6bca + 0xd];
                var _0x42f3d4 = _0x5c2624[_0x5f6bca + 0xe];
                var _0x4f91bc = _0x5c2624[_0x5f6bca + 0xf];
                var _0x5531f4 = _0x4913c4(_0x5531f4 = _0x21dfbb[0x0], _0x41b937 = _0x21dfbb[0x1], _0x3863ba = _0x21dfbb[0x2], _0x2bb8f0 = _0x21dfbb[0x3], _0x59acad, 0x7, _0x386ef8[0x0]);
                var _0x2bb8f0 = _0x4913c4(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0xeddf4e, 0xc, _0x386ef8[0x1]);
                var _0x3863ba = _0x4913c4(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x57e68e, 0x11, _0x386ef8[0x2]);
                var _0x41b937 = _0x4913c4(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x4ca65d, 0x16, _0x386ef8[0x3]);
                _0x5531f4 = _0x4913c4(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x58e106, 0x7, _0x386ef8[0x4]);
                _0x2bb8f0 = _0x4913c4(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x3530ca, 0xc, _0x386ef8[0x5]);
                _0x3863ba = _0x4913c4(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x5c77a4, 0x11, _0x386ef8[0x6]);
                _0x41b937 = _0x4913c4(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x2aa905, 0x16, _0x386ef8[0x7]);
                _0x5531f4 = _0x4913c4(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x95fda7, 0x7, _0x386ef8[0x8]);
                _0x2bb8f0 = _0x4913c4(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x12538c, 0xc, _0x386ef8[0x9]);
                _0x3863ba = _0x4913c4(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x1974ef, 0x11, _0x386ef8[0xa]);
                _0x41b937 = _0x4913c4(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x3684dc, 0x16, _0x386ef8[0xb]);
                _0x5531f4 = _0x4913c4(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x51d2f8, 0x7, _0x386ef8[0xc]);
                _0x2bb8f0 = _0x4913c4(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x273e76, 0xc, _0x386ef8[0xd]);
                _0x3863ba = _0x4913c4(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x42f3d4, 0x11, _0x386ef8[0xe]);
                _0x5531f4 = _0xb10362(_0x5531f4, _0x41b937 = _0x4913c4(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x4f91bc, 0x16, _0x386ef8[0xf]), _0x3863ba, _0x2bb8f0, _0xeddf4e, 0x5, _0x386ef8[0x10]);
                _0x2bb8f0 = _0xb10362(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x5c77a4, 0x9, _0x386ef8[0x11]);
                _0x3863ba = _0xb10362(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x3684dc, 0xe, _0x386ef8[0x12]);
                _0x41b937 = _0xb10362(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x59acad, 0x14, _0x386ef8[0x13]);
                _0x5531f4 = _0xb10362(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x3530ca, 0x5, _0x386ef8[0x14]);
                _0x2bb8f0 = _0xb10362(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x1974ef, 0x9, _0x386ef8[0x15]);
                _0x3863ba = _0xb10362(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x4f91bc, 0xe, _0x386ef8[0x16]);
                _0x41b937 = _0xb10362(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x58e106, 0x14, _0x386ef8[0x17]);
                _0x5531f4 = _0xb10362(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x12538c, 0x5, _0x386ef8[0x18]);
                _0x2bb8f0 = _0xb10362(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x42f3d4, 0x9, _0x386ef8[0x19]);
                _0x3863ba = _0xb10362(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x4ca65d, 0xe, _0x386ef8[0x1a]);
                _0x41b937 = _0xb10362(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x95fda7, 0x14, _0x386ef8[0x1b]);
                _0x5531f4 = _0xb10362(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x273e76, 0x5, _0x386ef8[0x1c]);
                _0x2bb8f0 = _0xb10362(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x57e68e, 0x9, _0x386ef8[0x1d]);
                _0x3863ba = _0xb10362(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x2aa905, 0xe, _0x386ef8[0x1e]);
                _0x5531f4 = _0x16255b(_0x5531f4, _0x41b937 = _0xb10362(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x51d2f8, 0x14, _0x386ef8[0x1f]), _0x3863ba, _0x2bb8f0, _0x3530ca, 0x4, _0x386ef8[0x20]);
                _0x2bb8f0 = _0x16255b(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x95fda7, 0xb, _0x386ef8[0x21]);
                _0x3863ba = _0x16255b(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x3684dc, 0x10, _0x386ef8[0x22]);
                _0x41b937 = _0x16255b(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x42f3d4, 0x17, _0x386ef8[0x23]);
                _0x5531f4 = _0x16255b(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0xeddf4e, 0x4, _0x386ef8[0x24]);
                _0x2bb8f0 = _0x16255b(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x58e106, 0xb, _0x386ef8[0x25]);
                _0x3863ba = _0x16255b(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x2aa905, 0x10, _0x386ef8[0x26]);
                _0x41b937 = _0x16255b(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x1974ef, 0x17, _0x386ef8[0x27]);
                _0x5531f4 = _0x16255b(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x273e76, 0x4, _0x386ef8[0x28]);
                _0x2bb8f0 = _0x16255b(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x59acad, 0xb, _0x386ef8[0x29]);
                _0x3863ba = _0x16255b(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x4ca65d, 0x10, _0x386ef8[0x2a]);
                _0x41b937 = _0x16255b(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x5c77a4, 0x17, _0x386ef8[0x2b]);
                _0x5531f4 = _0x16255b(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x12538c, 0x4, _0x386ef8[0x2c]);
                _0x2bb8f0 = _0x16255b(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x51d2f8, 0xb, _0x386ef8[0x2d]);
                _0x3863ba = _0x16255b(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x4f91bc, 0x10, _0x386ef8[0x2e]);
                _0x5531f4 = _0x58dd28(_0x5531f4, _0x41b937 = _0x16255b(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x57e68e, 0x17, _0x386ef8[0x2f]), _0x3863ba, _0x2bb8f0, _0x59acad, 0x6, _0x386ef8[0x30]);
                _0x2bb8f0 = _0x58dd28(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x2aa905, 0xa, _0x386ef8[0x31]);
                _0x3863ba = _0x58dd28(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x42f3d4, 0xf, _0x386ef8[0x32]);
                _0x41b937 = _0x58dd28(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x3530ca, 0x15, _0x386ef8[0x33]);
                _0x5531f4 = _0x58dd28(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x51d2f8, 0x6, _0x386ef8[0x34]);
                _0x2bb8f0 = _0x58dd28(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x4ca65d, 0xa, _0x386ef8[0x35]);
                _0x3863ba = _0x58dd28(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x1974ef, 0xf, _0x386ef8[0x36]);
                _0x41b937 = _0x58dd28(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0xeddf4e, 0x15, _0x386ef8[0x37]);
                _0x5531f4 = _0x58dd28(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x95fda7, 0x6, _0x386ef8[0x38]);
                _0x2bb8f0 = _0x58dd28(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x4f91bc, 0xa, _0x386ef8[0x39]);
                _0x3863ba = _0x58dd28(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x5c77a4, 0xf, _0x386ef8[0x3a]);
                _0x41b937 = _0x58dd28(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x273e76, 0x15, _0x386ef8[0x3b]);
                _0x5531f4 = _0x58dd28(_0x5531f4, _0x41b937, _0x3863ba, _0x2bb8f0, _0x58e106, 0x6, _0x386ef8[0x3c]);
                _0x2bb8f0 = _0x58dd28(_0x2bb8f0, _0x5531f4, _0x41b937, _0x3863ba, _0x3684dc, 0xa, _0x386ef8[0x3d]);
                _0x3863ba = _0x58dd28(_0x3863ba, _0x2bb8f0, _0x5531f4, _0x41b937, _0x57e68e, 0xf, _0x386ef8[0x3e]);
                _0x41b937 = _0x58dd28(_0x41b937, _0x3863ba, _0x2bb8f0, _0x5531f4, _0x12538c, 0x15, _0x386ef8[0x3f]);
                _0x21dfbb[0x0] = _0x21dfbb[0x0] + _0x5531f4 | 0x0;
                _0x21dfbb[0x1] = _0x21dfbb[0x1] + _0x41b937 | 0x0;
                _0x21dfbb[0x2] = _0x21dfbb[0x2] + _0x3863ba | 0x0;
                _0x21dfbb[0x3] = _0x21dfbb[0x3] + _0x2bb8f0 | 0x0;
              },
              _doFinalize: function () {
                var _0x5dc625 = this._data;
                var _0x40590f = _0x5dc625.words;
                var _0x216d51 = 0x8 * this._nDataBytes;
                var _0x4db1eb = 0x8 * _0x5dc625.sigBytes;
                _0x40590f[_0x4db1eb >>> 0x5] |= 0x80 << 0x18 - _0x4db1eb % 0x20;
                var _0x455f66 = _0x31db8c.floor(_0x216d51 / 0x100000000);
                _0x40590f[0xf + (_0x4db1eb + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (_0x455f66 << 0x8 | _0x455f66 >>> 0x18) | 0xff00ff00 & (_0x455f66 << 0x18 | _0x455f66 >>> 0x8);
                _0x40590f[0xe + (_0x4db1eb + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (_0x216d51 << 0x8 | _0x216d51 >>> 0x18) | 0xff00ff00 & (_0x216d51 << 0x18 | _0x216d51 >>> 0x8);
                _0x5dc625.sigBytes = 0x4 * (_0x40590f.length + 0x1);
                this._process();
                _0x40590f = (_0x5dc625 = this._hash).words;
                for (_0x216d51 = 0x0; 0x4 > _0x216d51; _0x216d51++) {
                  _0x4db1eb = _0x40590f[_0x216d51];
                  _0x40590f[_0x216d51] = 0xff00ff & (_0x4db1eb << 0x8 | _0x4db1eb >>> 0x18) | 0xff00ff00 & (_0x4db1eb << 0x18 | _0x4db1eb >>> 0x8);
                }
                return _0x5dc625;
              },
              clone: function () {
                var _0x21d8ac = _0x16090a.clone.call(this);
                _0x21d8ac._hash = this._hash.clone();
                return _0x21d8ac;
              }
            });
            _0x4e95c4.MD5 = _0x16090a._createHelper(_0x5401cd);
            _0x4e95c4.HmacMD5 = _0x16090a._createHmacHelper(_0x5401cd);
          })(Math);
          (function () {
            var _0x440569;
            var _0x1c1f46 = (_0x440569 = _0x4e95c4.lib).Base;
            var _0x51de31 = _0x440569.WordArray;
            var _0x4f62e7 = (_0x440569 = _0x4e95c4.algo).EvpKDF = _0x1c1f46.extend({
              cfg: _0x1c1f46.extend({
                keySize: 0x4,
                hasher: _0x440569.MD5,
                iterations: 0x1
              }),
              init: function (_0x1e68ca) {
                this.cfg = this.cfg.extend(_0x1e68ca);
              },
              compute: function (_0x3d98bf, _0x447b70) {
                var _0x30c40c = (_0x26c418 = this.cfg).hasher.create();
                var _0x25b1ff = _0x51de31.create();
                var _0x46b787 = _0x25b1ff.words;
                var _0x5e07b7 = _0x26c418.keySize;
                for (var _0x26c418 = _0x26c418.iterations; _0x46b787.length < _0x5e07b7;) {
                  if (_0xae33c8) {
                    _0x30c40c.update(_0xae33c8);
                  }
                  var _0xae33c8 = _0x30c40c.update(_0x3d98bf).finalize(_0x447b70);
                  _0x30c40c.reset();
                  for (var _0x552144 = 0x1; _0x552144 < _0x26c418; _0x552144++) {
                    _0xae33c8 = _0x30c40c.finalize(_0xae33c8);
                    _0x30c40c.reset();
                  }
                  _0x25b1ff.concat(_0xae33c8);
                }
                _0x25b1ff.sigBytes = 0x4 * _0x5e07b7;
                return _0x25b1ff;
              }
            });
            _0x4e95c4.EvpKDF = function (_0x233989, _0x310d3a, _0x5c8cbd) {
              return _0x4f62e7.create(_0x5c8cbd).compute(_0x233989, _0x310d3a);
            };
          })();
          if (!_0x4e95c4.lib.Cipher) {
            (function () {
              var _0xaaa154 = (_0x41e2e4 = _0x4e95c4).lib;
              var _0x2ab13c = _0xaaa154.Base;
              var _0x11e687 = _0xaaa154.WordArray;
              var _0x462243 = _0xaaa154.BufferedBlockAlgorithm;
              var _0x5dce50 = _0x41e2e4.enc.Base64;
              var _0x16f9a3 = _0x41e2e4.algo.EvpKDF;
              var _0x94575f = _0xaaa154.Cipher = _0x462243.extend({
                cfg: _0x2ab13c.extend(),
                createEncryptor: function (_0x20715b, _0x3f6e08) {
                  return this.create(this._ENC_XFORM_MODE, _0x20715b, _0x3f6e08);
                },
                createDecryptor: function (_0xf57648, _0x34c310) {
                  return this.create(this._DEC_XFORM_MODE, _0xf57648, _0x34c310);
                },
                init: function (_0x2a3002, _0x6e7b3e, _0x3dacb5) {
                  this.cfg = this.cfg.extend(_0x3dacb5);
                  this._xformMode = _0x2a3002;
                  this._key = _0x6e7b3e;
                  this.reset();
                },
                reset: function () {
                  _0x462243.reset.call(this);
                  this._doReset();
                },
                process: function (_0x43ae05) {
                  this._append(_0x43ae05);
                  return this._process();
                },
                finalize: function (_0xeca9c9) {
                  if (_0xeca9c9) {
                    this._append(_0xeca9c9);
                  }
                  return this._doFinalize();
                },
                keySize: 0x4,
                ivSize: 0x4,
                _ENC_XFORM_MODE: 0x1,
                _DEC_XFORM_MODE: 0x2,
                _createHelper: function (_0x5bbd4f) {
                  return {
                    encrypt: function (_0x218509, _0x4d6524, _0x2f181f) {
                      return ("string" == typeof _0x4d6524 ? _0xad1c7d : _0x474ac0).encrypt(_0x5bbd4f, _0x218509, _0x4d6524, _0x2f181f);
                    },
                    decrypt: function (_0x51a51c, _0x2e6019, _0x269cc3) {
                      return ("string" == typeof _0x2e6019 ? _0xad1c7d : _0x474ac0).decrypt(_0x5bbd4f, _0x51a51c, _0x2e6019, _0x269cc3);
                    }
                  };
                }
              });
              _0xaaa154.StreamCipher = _0x94575f.extend({
                _doFinalize: function () {
                  return this._process(true);
                },
                blockSize: 0x1
              });
              var _0x300c21 = _0x41e2e4.mode = {};
              var _0x42698a = function (_0x34ab22, _0x2c5ad6, _0x19f904) {
                var _0xfe6809 = this._iv;
                if (_0xfe6809) {
                  this._iv = undefined;
                } else {
                  _0xfe6809 = this._prevBlock;
                }
                for (var _0x14cfd8 = 0x0; _0x14cfd8 < _0x19f904; _0x14cfd8++) {
                  _0x34ab22[_0x2c5ad6 + _0x14cfd8] ^= _0xfe6809[_0x14cfd8];
                }
              };
              var _0x3a3310 = (_0xaaa154.BlockCipherMode = _0x2ab13c.extend({
                createEncryptor: function (_0x349de3, _0x3e22a6) {
                  return this.Encryptor.create(_0x349de3, _0x3e22a6);
                },
                createDecryptor: function (_0x576245, _0x1cd338) {
                  return this.Decryptor.create(_0x576245, _0x1cd338);
                },
                init: function (_0x4f53df, _0xe72917) {
                  this._cipher = _0x4f53df;
                  this._iv = _0xe72917;
                }
              })).extend();
              _0x3a3310.Encryptor = _0x3a3310.extend({
                processBlock: function (_0x305d87, _0x199532) {
                  var _0x325bb0 = this._cipher;
                  var _0x5bc8b3 = _0x325bb0.blockSize;
                  _0x42698a.call(this, _0x305d87, _0x199532, _0x5bc8b3);
                  _0x325bb0.encryptBlock(_0x305d87, _0x199532);
                  this._prevBlock = _0x305d87.slice(_0x199532, _0x199532 + _0x5bc8b3);
                }
              });
              _0x3a3310.Decryptor = _0x3a3310.extend({
                processBlock: function (_0x5f54d4, _0x192dfa) {
                  var _0x79209e = this._cipher;
                  var _0xdd11c = _0x79209e.blockSize;
                  var _0x335bec = _0x5f54d4.slice(_0x192dfa, _0x192dfa + _0xdd11c);
                  _0x79209e.decryptBlock(_0x5f54d4, _0x192dfa);
                  _0x42698a.call(this, _0x5f54d4, _0x192dfa, _0xdd11c);
                  this._prevBlock = _0x335bec;
                }
              });
              _0x300c21 = _0x300c21.CBC = _0x3a3310;
              _0x3a3310 = (_0x41e2e4.pad = {}).Pkcs7 = {
                pad: function (_0x30d305, _0x5274e8) {
                  var _0x382de6;
                  var _0x51852f = (_0x382de6 = (_0x382de6 = 0x4 * _0x5274e8) - _0x30d305.sigBytes % _0x382de6) << 0x18 | _0x382de6 << 0x10 | _0x382de6 << 0x8 | _0x382de6;
                  var _0x17e097 = [];
                  for (var _0x5640ef = 0x0; _0x5640ef < _0x382de6; _0x5640ef += 0x4) {
                    _0x17e097.push(_0x51852f);
                  }
                  _0x382de6 = _0x11e687.create(_0x17e097, _0x382de6);
                  _0x30d305.concat(_0x382de6);
                },
                unpad: function (_0x46cff4) {
                  _0x46cff4.sigBytes -= 0xff & _0x46cff4.words[_0x46cff4.sigBytes - 0x1 >>> 0x2];
                }
              };
              _0xaaa154.BlockCipher = _0x94575f.extend({
                cfg: _0x94575f.cfg.extend({
                  mode: _0x300c21,
                  padding: _0x3a3310
                }),
                reset: function () {
                  _0x94575f.reset.call(this);
                  var _0x2269b7 = (_0x395734 = this.cfg).iv;
                  var _0x395734 = _0x395734.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var _0x1a7de5 = _0x395734.createEncryptor;
                  } else {
                    _0x1a7de5 = _0x395734.createDecryptor;
                    this._minBufferSize = 0x1;
                  }
                  this._mode = _0x1a7de5.call(_0x395734, this, _0x2269b7 && _0x2269b7.words);
                },
                _doProcessBlock: function (_0x288ae3, _0x19cdd2) {
                  this._mode.processBlock(_0x288ae3, _0x19cdd2);
                },
                _doFinalize: function () {
                  var _0x3e5128 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    _0x3e5128.pad(this._data, this.blockSize);
                    var _0x515eef = this._process(true);
                  } else {
                    _0x515eef = this._process(true);
                    _0x3e5128.unpad(_0x515eef);
                  }
                  return _0x515eef;
                },
                blockSize: 0x4
              });
              var _0x988654 = _0xaaa154.CipherParams = _0x2ab13c.extend({
                init: function (_0x2010dd) {
                  this.mixIn(_0x2010dd);
                },
                toString: function (_0x27f30b) {
                  return (_0x27f30b || this.formatter).stringify(this);
                }
              });
              _0x300c21 = (_0x41e2e4.format = {}).OpenSSL = {
                stringify: function (_0xbf085a) {
                  var _0x3f85cb = _0xbf085a.ciphertext;
                  return ((_0xbf085a = _0xbf085a.salt) ? _0x11e687.create([0x53616c74, 0x65645f5f]).concat(_0xbf085a).concat(_0x3f85cb) : _0x3f85cb).toString(_0x5dce50);
                },
                parse: function (_0x2a25f0) {
                  var _0x1c3344 = (_0x2a25f0 = _0x5dce50.parse(_0x2a25f0)).words;
                  if (0x53616c74 == _0x1c3344[0x0] && 0x65645f5f == _0x1c3344[0x1]) {
                    var _0x13a51a = _0x11e687.create(_0x1c3344.slice(0x2, 0x4));
                    _0x1c3344.splice(0x0, 0x4);
                    _0x2a25f0.sigBytes -= 0x10;
                  }
                  return _0x988654.create({
                    ciphertext: _0x2a25f0,
                    salt: _0x13a51a
                  });
                }
              };
              var _0x474ac0 = _0xaaa154.SerializableCipher = _0x2ab13c.extend({
                cfg: _0x2ab13c.extend({
                  format: _0x300c21
                }),
                encrypt: function (_0x20cf9c, _0x3621dd, _0x236a3c, _0x3a45e8) {
                  _0x3a45e8 = this.cfg.extend(_0x3a45e8);
                  var _0x4f3d12 = _0x20cf9c.createEncryptor(_0x236a3c, _0x3a45e8);
                  _0x3621dd = _0x4f3d12.finalize(_0x3621dd);
                  _0x4f3d12 = _0x4f3d12.cfg;
                  return _0x988654.create({
                    ciphertext: _0x3621dd,
                    key: _0x236a3c,
                    iv: _0x4f3d12.iv,
                    algorithm: _0x20cf9c,
                    mode: _0x4f3d12.mode,
                    padding: _0x4f3d12.padding,
                    blockSize: _0x20cf9c.blockSize,
                    formatter: _0x3a45e8.format
                  });
                },
                decrypt: function (_0x5c37aa, _0x5a4a39, _0x350afe, _0x2fbabc) {
                  _0x2fbabc = this.cfg.extend(_0x2fbabc);
                  _0x5a4a39 = this._parse(_0x5a4a39, _0x2fbabc.format);
                  return _0x5c37aa.createDecryptor(_0x350afe, _0x2fbabc).finalize(_0x5a4a39.ciphertext);
                },
                _parse: function (_0x307188, _0x3f509b) {
                  return "string" == typeof _0x307188 ? _0x3f509b.parse(_0x307188, this) : _0x307188;
                }
              });
              var _0x41e2e4 = (_0x41e2e4.kdf = {}).OpenSSL = {
                execute: function (_0xe28fcd, _0x48f297, _0x1e99ba, _0x26b65d) {
                  if (!_0x26b65d) {
                    _0x26b65d = _0x11e687.random(0x8);
                  }
                  _0xe28fcd = _0x16f9a3.create({
                    keySize: _0x48f297 + _0x1e99ba
                  }).compute(_0xe28fcd, _0x26b65d);
                  _0x1e99ba = _0x11e687.create(_0xe28fcd.words.slice(_0x48f297), 0x4 * _0x1e99ba);
                  _0xe28fcd.sigBytes = 0x4 * _0x48f297;
                  return _0x988654.create({
                    key: _0xe28fcd,
                    iv: _0x1e99ba,
                    salt: _0x26b65d
                  });
                }
              };
              var _0xad1c7d = _0xaaa154.PasswordBasedCipher = _0x474ac0.extend({
                cfg: _0x474ac0.cfg.extend({
                  kdf: _0x41e2e4
                }),
                encrypt: function (_0x1a210b, _0x324e36, _0x283c91, _0x3eb252) {
                  _0x283c91 = (_0x3eb252 = this.cfg.extend(_0x3eb252)).kdf.execute(_0x283c91, _0x1a210b.keySize, _0x1a210b.ivSize);
                  _0x3eb252.iv = _0x283c91.iv;
                  (_0x1a210b = _0x474ac0.encrypt.call(this, _0x1a210b, _0x324e36, _0x283c91.key, _0x3eb252)).mixIn(_0x283c91);
                  return _0x1a210b;
                },
                decrypt: function (_0x4f34a9, _0x21de92, _0x4553a2, _0x570f4f) {
                  _0x570f4f = this.cfg.extend(_0x570f4f);
                  _0x21de92 = this._parse(_0x21de92, _0x570f4f.format);
                  _0x4553a2 = _0x570f4f.kdf.execute(_0x4553a2, _0x4f34a9.keySize, _0x4f34a9.ivSize, _0x21de92.salt);
                  _0x570f4f.iv = _0x4553a2.iv;
                  return _0x474ac0.decrypt.call(this, _0x4f34a9, _0x21de92, _0x4553a2.key, _0x570f4f);
                }
              });
            })();
          }
          (function () {
            var _0x547957 = _0x4e95c4.lib.BlockCipher;
            var _0x5bf47c = _0x4e95c4.algo;
            var _0x1f9710 = [];
            var _0x1454d7 = [];
            var _0x1b9a41 = [];
            var _0x282aee = [];
            var _0x3f17cf = [];
            var _0x526460 = [];
            var _0x22d637 = [];
            var _0x1f6d6b = [];
            var _0x4df362 = [];
            var _0x4ec720 = [];
            var _0x34ac3e = [];
            for (var _0x145a07 = 0x0; 0x100 > _0x145a07; _0x145a07++) {
              _0x34ac3e[_0x145a07] = 0x80 > _0x145a07 ? _0x145a07 << 0x1 : _0x145a07 << 0x1 ^ 0x11b;
            }
            var _0x11e76c = 0x0;
            var _0x4434bc = 0x0;
            for (_0x145a07 = 0x0; 0x100 > _0x145a07; _0x145a07++) {
              var _0x5b5734 = (_0x5b5734 = _0x4434bc ^ _0x4434bc << 0x1 ^ _0x4434bc << 0x2 ^ _0x4434bc << 0x3 ^ _0x4434bc << 0x4) >>> 0x8 ^ 0xff & _0x5b5734 ^ 0x63;
              _0x1f9710[_0x11e76c] = _0x5b5734;
              _0x1454d7[_0x5b5734] = _0x11e76c;
              var _0x434bc0 = _0x34ac3e[_0x11e76c];
              var _0x572167 = _0x34ac3e[_0x434bc0];
              var _0x90453d = _0x34ac3e[_0x572167];
              var _0x30add7 = 0x101 * _0x34ac3e[_0x5b5734] ^ 0x1010100 * _0x5b5734;
              _0x1b9a41[_0x11e76c] = _0x30add7 << 0x18 | _0x30add7 >>> 0x8;
              _0x282aee[_0x11e76c] = _0x30add7 << 0x10 | _0x30add7 >>> 0x10;
              _0x3f17cf[_0x11e76c] = _0x30add7 << 0x8 | _0x30add7 >>> 0x18;
              _0x526460[_0x11e76c] = _0x30add7;
              _0x30add7 = 0x1010101 * _0x90453d ^ 0x10001 * _0x572167 ^ 0x101 * _0x434bc0 ^ 0x1010100 * _0x11e76c;
              _0x22d637[_0x5b5734] = _0x30add7 << 0x18 | _0x30add7 >>> 0x8;
              _0x1f6d6b[_0x5b5734] = _0x30add7 << 0x10 | _0x30add7 >>> 0x10;
              _0x4df362[_0x5b5734] = _0x30add7 << 0x8 | _0x30add7 >>> 0x18;
              _0x4ec720[_0x5b5734] = _0x30add7;
              if (_0x11e76c) {
                _0x11e76c = _0x434bc0 ^ _0x34ac3e[_0x34ac3e[_0x34ac3e[_0x90453d ^ _0x434bc0]]];
                _0x4434bc ^= _0x34ac3e[_0x34ac3e[_0x4434bc]];
              } else {
                _0x11e76c = _0x4434bc = 0x1;
              }
            }
            var _0x2099fb = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
            _0x5bf47c = _0x5bf47c.AES = _0x547957.extend({
              _doReset: function () {
                var _0x1bbec3 = (_0x1ac038 = this._key).words;
                var _0x3178b8 = _0x1ac038.sigBytes / 0x4;
                var _0x1ac038 = 0x4 * ((this._nRounds = _0x3178b8 + 0x6) + 0x1);
                var _0x2fe2eb = this._keySchedule = [];
                for (var _0x3a9f44 = 0x0; _0x3a9f44 < _0x1ac038; _0x3a9f44++) {
                  if (_0x3a9f44 < _0x3178b8) {
                    _0x2fe2eb[_0x3a9f44] = _0x1bbec3[_0x3a9f44];
                  } else {
                    var _0x2f5b4d = _0x2fe2eb[_0x3a9f44 - 0x1];
                    if (_0x3a9f44 % _0x3178b8) {
                      if (0x6 < _0x3178b8 && 0x4 == _0x3a9f44 % _0x3178b8) {
                        _0x2f5b4d = _0x1f9710[_0x2f5b4d >>> 0x18] << 0x18 | _0x1f9710[_0x2f5b4d >>> 0x10 & 0xff] << 0x10 | _0x1f9710[_0x2f5b4d >>> 0x8 & 0xff] << 0x8 | _0x1f9710[0xff & _0x2f5b4d];
                      }
                    } else {
                      _0x2f5b4d = _0x1f9710[(_0x2f5b4d = _0x2f5b4d << 0x8 | _0x2f5b4d >>> 0x18) >>> 0x18] << 0x18 | _0x1f9710[_0x2f5b4d >>> 0x10 & 0xff] << 0x10 | _0x1f9710[_0x2f5b4d >>> 0x8 & 0xff] << 0x8 | _0x1f9710[0xff & _0x2f5b4d];
                      _0x2f5b4d ^= _0x2099fb[_0x3a9f44 / _0x3178b8 | 0x0] << 0x18;
                    }
                    _0x2fe2eb[_0x3a9f44] = _0x2fe2eb[_0x3a9f44 - _0x3178b8] ^ _0x2f5b4d;
                  }
                }
                _0x1bbec3 = this._invKeySchedule = [];
                for (_0x3178b8 = 0x0; _0x3178b8 < _0x1ac038; _0x3178b8++) {
                  _0x3a9f44 = _0x1ac038 - _0x3178b8;
                  _0x2f5b4d = _0x3178b8 % 0x4 ? _0x2fe2eb[_0x3a9f44] : _0x2fe2eb[_0x3a9f44 - 0x4];
                  _0x1bbec3[_0x3178b8] = 0x4 > _0x3178b8 || 0x4 >= _0x3a9f44 ? _0x2f5b4d : _0x22d637[_0x1f9710[_0x2f5b4d >>> 0x18]] ^ _0x1f6d6b[_0x1f9710[_0x2f5b4d >>> 0x10 & 0xff]] ^ _0x4df362[_0x1f9710[_0x2f5b4d >>> 0x8 & 0xff]] ^ _0x4ec720[_0x1f9710[0xff & _0x2f5b4d]];
                }
              },
              encryptBlock: function (_0x948c0e, _0x8901bb) {
                this._doCryptBlock(_0x948c0e, _0x8901bb, this._keySchedule, _0x1b9a41, _0x282aee, _0x3f17cf, _0x526460, _0x1f9710);
              },
              decryptBlock: function (_0x28aa32, _0x713a70) {
                var _0x2eda68 = _0x28aa32[_0x713a70 + 0x1];
                _0x28aa32[_0x713a70 + 0x1] = _0x28aa32[_0x713a70 + 0x3];
                _0x28aa32[_0x713a70 + 0x3] = _0x2eda68;
                this._doCryptBlock(_0x28aa32, _0x713a70, this._invKeySchedule, _0x22d637, _0x1f6d6b, _0x4df362, _0x4ec720, _0x1454d7);
                _0x2eda68 = _0x28aa32[_0x713a70 + 0x1];
                _0x28aa32[_0x713a70 + 0x1] = _0x28aa32[_0x713a70 + 0x3];
                _0x28aa32[_0x713a70 + 0x3] = _0x2eda68;
              },
              _doCryptBlock: function (_0x1ea909, _0x41e79e, _0x276f82, _0x1b909f, _0x21cf55, _0x2179b9, _0x4f3189, _0x2c3584) {
                var _0x477043 = this._nRounds;
                var _0x503ac7 = _0x1ea909[_0x41e79e] ^ _0x276f82[0x0];
                var _0x53aa1a = _0x1ea909[_0x41e79e + 0x1] ^ _0x276f82[0x1];
                var _0x500441 = _0x1ea909[_0x41e79e + 0x2] ^ _0x276f82[0x2];
                var _0x3352fb = _0x1ea909[_0x41e79e + 0x3] ^ _0x276f82[0x3];
                var _0x501d8c = 0x4;
                for (var _0x4c4110 = 0x1; _0x4c4110 < _0x477043; _0x4c4110++) {
                  var _0x5a5e84 = _0x1b909f[_0x503ac7 >>> 0x18] ^ _0x21cf55[_0x53aa1a >>> 0x10 & 0xff] ^ _0x2179b9[_0x500441 >>> 0x8 & 0xff] ^ _0x4f3189[0xff & _0x3352fb] ^ _0x276f82[_0x501d8c++];
                  var _0x5bfecc = _0x1b909f[_0x53aa1a >>> 0x18] ^ _0x21cf55[_0x500441 >>> 0x10 & 0xff] ^ _0x2179b9[_0x3352fb >>> 0x8 & 0xff] ^ _0x4f3189[0xff & _0x503ac7] ^ _0x276f82[_0x501d8c++];
                  var _0x1ef735 = _0x1b909f[_0x500441 >>> 0x18] ^ _0x21cf55[_0x3352fb >>> 0x10 & 0xff] ^ _0x2179b9[_0x503ac7 >>> 0x8 & 0xff] ^ _0x4f3189[0xff & _0x53aa1a] ^ _0x276f82[_0x501d8c++];
                  _0x3352fb = _0x1b909f[_0x3352fb >>> 0x18] ^ _0x21cf55[_0x503ac7 >>> 0x10 & 0xff] ^ _0x2179b9[_0x53aa1a >>> 0x8 & 0xff] ^ _0x4f3189[0xff & _0x500441] ^ _0x276f82[_0x501d8c++];
                  _0x503ac7 = _0x5a5e84;
                  _0x53aa1a = _0x5bfecc;
                  _0x500441 = _0x1ef735;
                }
                _0x5a5e84 = (_0x2c3584[_0x503ac7 >>> 0x18] << 0x18 | _0x2c3584[_0x53aa1a >>> 0x10 & 0xff] << 0x10 | _0x2c3584[_0x500441 >>> 0x8 & 0xff] << 0x8 | _0x2c3584[0xff & _0x3352fb]) ^ _0x276f82[_0x501d8c++];
                _0x5bfecc = (_0x2c3584[_0x53aa1a >>> 0x18] << 0x18 | _0x2c3584[_0x500441 >>> 0x10 & 0xff] << 0x10 | _0x2c3584[_0x3352fb >>> 0x8 & 0xff] << 0x8 | _0x2c3584[0xff & _0x503ac7]) ^ _0x276f82[_0x501d8c++];
                _0x1ef735 = (_0x2c3584[_0x500441 >>> 0x18] << 0x18 | _0x2c3584[_0x3352fb >>> 0x10 & 0xff] << 0x10 | _0x2c3584[_0x503ac7 >>> 0x8 & 0xff] << 0x8 | _0x2c3584[0xff & _0x53aa1a]) ^ _0x276f82[_0x501d8c++];
                _0x3352fb = (_0x2c3584[_0x3352fb >>> 0x18] << 0x18 | _0x2c3584[_0x503ac7 >>> 0x10 & 0xff] << 0x10 | _0x2c3584[_0x53aa1a >>> 0x8 & 0xff] << 0x8 | _0x2c3584[0xff & _0x500441]) ^ _0x276f82[_0x501d8c++];
                _0x1ea909[_0x41e79e] = _0x5a5e84;
                _0x1ea909[_0x41e79e + 0x1] = _0x5bfecc;
                _0x1ea909[_0x41e79e + 0x2] = _0x1ef735;
                _0x1ea909[_0x41e79e + 0x3] = _0x3352fb;
              },
              keySize: 0x8
            });
            _0x4e95c4.AES = _0x547957._createHelper(_0x5bf47c);
          })();
          _0x596f89["default"] = _0x4e95c4;
        },
        0x2d64: (_0x5485a5, _0x1650cf) => {
          "use strict";

          Object.defineProperty(_0x1650cf, "__esModule", {
            value: true
          });
          _0x1650cf["default"] = undefined;
          _0x1650cf["default"] = {
            getDefaultAdPostionConfigByBrand: function (_0x1ef81f) {
              let _0x3f7da8 = "";
              switch (_0x1ef81f) {
                case "vivo":
                  _0x3f7da8 = "{\"baidu_ad\":{\"product_id\":\"a4036263\",\"baidu_ad_config\":[{\"temp_id\":\"3303\",\"ad_ids\":\"8004118\"},{\"temp_id\":\"3002\",\"ad_ids\":\"8004119\"},{\"temp_id\":\"0\",\"ad_ids\":\"8004119\"}]},\"brand_ad\":{\"ad\":\"44f7da52c38c4e17a1008de38e2550ad,cb61a69a00244b08b064151da1f9baf4,82694f59e3d041c494cfce351cadb01b,80efad734cc14f5a872f90286c85a2cf,889a8b2f25b64c41bfbff53a032c6af8,e4dbde2a0898459b8f203db790b8f868\",\"ad_video\":\"\",\"ad_banner\":\"4e978c216d0f477aa033f6fb316386f3\"}}";
                  break;
                case "oppo":
                  _0x3f7da8 = "{\"baidu_ad\":{\"product_id\":\"a4036263\",\"baidu_ad_config\":[{\"temp_id\":\"3303\",\"ad_ids\":\"8004118\"},{\"temp_id\":\"3002\",\"ad_ids\":\"8004119\"},{\"temp_id\":\"0\",\"ad_ids\":\"8004119\"}]},\"brand_ad\":{\"ad\":\"500792,500793,500794,500797,500799,500802\",\"ad_video\":\"\",\"ad_banner\":\"500806\"}}";
                  break;
                case "huawei":
                  _0x3f7da8 = "{\"baidu_ad\":{\"product_id\":\"a4036263\",\"baidu_ad_config\":[{\"temp_id\":\"3303\",\"ad_ids\":\"8004118\"},{\"temp_id\":\"3002\",\"ad_ids\":\"8004119\"},{\"temp_id\":\"0\",\"ad_ids\":\"8004119\"}]},\"brand_ad\":{\"ad\":\"s7d087h2tx,y6t303q3su,y0vxvrhdlz,c6jlatx5l5\",\"ad_video\":\"\",\"ad_banner\":\"b4m1yad7mk\"}}";
                  break;
                case "xiaomi":
                  _0x3f7da8 = "{\"baidu_ad\":{\"product_id\":\"a4036263\",\"baidu_ad_config\":[{\"temp_id\":\"3303\",\"ad_ids\":\"8004118\"},{\"temp_id\":\"3002\",\"ad_ids\":\"8004119\"},{\"temp_id\":\"0\",\"ad_ids\":\"8004119\"}]},\"brand_ad\":{\"ad\":\"3829b9fadc77d979d5f096dda7005df4,bdd688e3bbb910d8a4e8a7005f35e117,69567393d40b2980641fc53d1c0826a2,4d1cd8d27a63bac48d1c63ff3598da1f,acaad193852c7c9ec23edb23bb6d1aaa,7e80de3455d42e1bd4116b2cbf42e128\",\"ad_video\":\"\",\"ad_banner\":\"a10d390931ab7c025748250b6a43704c\"}}";
              }
              return JSON.parse(_0x3f7da8);
            },
            getNewDefaultAdPostionConfigByBrand: function (_0x109c47) {
              let _0x6da65e = "";
              switch (_0x109c47) {
                case "vivo":
                  _0x6da65e = "{\"ad_protogenesis\":[\"23cdf2ad0c064610b7c0dd4c5248dde4,34cbe912009e4949bef01af1f20e8948,65d4fd1df99848aa9da78f914b8095e9,574088617e1f44298d1cdff4ca7e6377,6174a1bdd9584db6887f46bae79e01ec\"],\"ad_encourage\":\"ae67c5f848a3434e818e9c2ab3acd02e\",\"ad_banner\":\"b07fc453ce1c4b27a58cb0ba0037032a\",\"ad_name\":\"本地广告配置名称\"}";
                  break;
                case "oppo":
                  _0x6da65e = "{\"ad_protogenesis\":[\"527567,527569,527570,527571,527573,527575\"],\"ad_encourage\":\"493635\",\"ad_banner\":\"493635\",\"ad_name\":\"本地广告配置名称\"}";
                  break;
                case "huawei":
                  _0x6da65e = "{\"ad_protogenesis\":[\"x960pk5yaa,b544oqjbe2,y7smp9vlkr,a99081e2jz,i3q2lok1gj,j78ptv4zjb\"],\"ad_encourage\":\"testx9dtjwj8hp\",\"ad_banner\":\"w6w4oz39ap\",\"ad_name\":\"本地广告配置名称\"}";
                  break;
                case "xiaomi":
                  _0x6da65e = "{\"ad_protogenesis\":[\"f17b412625e479097e691d9ff777cf4d,126d8ad6fd7bd4bb390ee7d26b86a940,7a6abd406945dc92cc6b836c227fd34e,1d559ddfc4abeaa83e91774cecda4d84,e7768a42a868d328a25641954888f10d,64f6cb34a97be7d416c6b6186162c661\"],\"ad_encourage\": \"654719afe33c1bf551fdd0bbc8704359\",\"ad_banner\": \"796895139b377c94119e66321eb41b90\",\"ad_name\":\"本地广告配置名称\"}";
              }
              return JSON.parse(_0x6da65e);
            },
            getDefaultAdConfigByBrand: function (_0x1e6543) {
              let _0x4f0a7b = "";
              switch (_0x1e6543) {
                case "vivo":
                  _0x4f0a7b = "{\"scene_switch_list\":[{\"scene_code\":\"AD_SCENE_READ_INFO_BANNER\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_READ_FRIST\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3002\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_READ_BANNER\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3303\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_SHELF\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_STORE\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_WELFARE\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_MINE\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_ZC\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3002\",\"nature_status\":1,\"status\":1}],\"popup_switch_list\":[{\"scene_code\":\"AD_POP_GETWAY\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_COIN\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_BOX\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_EXIT\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_READINFO_BACK_POP\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_WELFARE_BACK_POP\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_EXIT_PROMPT\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_BACK\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_SCENE_BACK_POP_BOTTOM\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_UNLOCK\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"}],\"ad_request_config\":[],\"vivo\":{\"channel_status\":1,\"link_status\":1,\"campaign_id_status\":1,\"utm_content_status\":0,\"site_status\":0,\"source_pkg_status\":0}}";
                  break;
                case "oppo":
                  _0x4f0a7b = "{\"scene_switch_list\":[{\"scene_code\":\"AD_SCENE_READ_INFO_BANNER\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_READ_FRIST\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3002\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_READ_BANNER\",\"native_ad_priority\":2,\"baidu_ad_priority\":3,\"baidu_ad_template\":\"3303\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_SHELF\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_STORE\",\"native_ad_priority\":0,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_WELFARE\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_MINE\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_ZC\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3002\",\"nature_status\":1,\"status\":1}],\"popup_switch_list\":[{\"scene_code\":\"AD_POP_GETWAY\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_COIN\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_BOX\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_EXIT\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_READINFO_BACK_POP\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_WELFARE_BACK_POP\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_EXIT_PROMPT\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_BACK\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_SCENE_BACK_POP_BOTTOM\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_UNLOCK\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"}],\"ad_request_config\":[]}}";
                  break;
                case "huawei":
                  _0x4f0a7b = "{\"scene_switch_list\":[{\"scene_code\":\"AD_SCENE_READ_INFO_BANNER\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_READ_FRIST\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3002\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_READ_BANNER\",\"native_ad_priority\":2,\"baidu_ad_priority\":3,\"baidu_ad_template\":\"3303\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_SHELF\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_STORE\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_WELFARE\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_MINE\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_ZC\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3002\",\"nature_status\":1,\"status\":1}],\"popup_switch_list\":[{\"scene_code\":\"AD_POP_GETWAY\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_COIN\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_BOX\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_EXIT\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_READINFO_BACK_POP\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_WELFARE_BACK_POP\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_EXIT_PROMPT\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_BACK\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_SCENE_BACK_POP_BOTTOM\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_UNLOCK\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"}],\"ad_request_config\":[]}}";
                  break;
                case "xiaomi":
                  _0x4f0a7b = "{\"scene_switch_list\":[{\"scene_code\":\"AD_SCENE_READ_INFO_BANNER\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_READ_FRIST\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3002\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_READ_BANNER\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3303\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_SHELF\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_STORE\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_WELFARE\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_MINE\",\"native_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"0\",\"nature_status\":1,\"status\":1},{\"scene_code\":\"AD_SCENE_ZC\",\"native_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"3002\",\"nature_status\":1,\"status\":1}],\"popup_switch_list\":[{\"scene_code\":\"AD_POP_GETWAY\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_COIN\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_BOX\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_EXIT\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_READINFO_BACK_POP\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_WELFARE_BACK_POP\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":1,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_EXIT_PROMPT\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_BACK\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_SCENE_BACK_POP_BOTTOM\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":1,\"baidu_ad_template\":\"\"},{\"scene_code\":\"AD_POP_UNLOCK\",\"native_ad_download_priority\":0,\"native_ad_awaken_priority\":0,\"app_ad_priority\":2,\"baidu_ad_priority\":0,\"baidu_ad_template\":\"\"}],\"ad_request_config\":[]}}";
              }
              return JSON.parse(_0x4f0a7b);
            },
            getBqtDefaultAdConfigByBrand: function (_0x350948) {
              let _0x1c44b3 = "";
              switch (_0x350948) {
                case "vivo":
                case "oppo":
                case "huawei":
                case "xiaomi":
                  _0x1c44b3 = "{\"baidu_ad\":{\"baidu_ad_config\":[{\"temp_id\": \"3002\", \"ad_ids\": \"8004119\"},{\"temp_id\": \"3303\", \"ad_ids\": \"8004118\"},{\"temp_id\": \"0\", \"ad_ids\": \"8004119\"}],\"product_id\":\"accd5568\"}}";
              }
              return JSON.parse(_0x1c44b3);
            },
            CUSTOM_POP_DEFAULT_DATA: {
              popName: "默认自定义原生弹窗",
              tabBarSwitch: "1",
              adSwitch: "1",
              closeIcon: "https://img.hdyxi.com/image/default/popClose.png",
              popBg: "https://img.hdyxi.com/image/default/pop_bg.jpg",
              maskOpacity: "0.8",
              boxBg: "https://img.hdyxi.com/image/default/box_bg.png",
              popScale: 0.8,
              closeDelay: 0x3e8,
              btnStyle: {
                btnRadius: 0x30,
                btnTop: 0x22a,
                btnText: "查看领取",
                btnBgColor: "#07CC5A",
                btnWidth: 0x226,
                btnHeight: 0x60,
                btnFont: 0x24,
                btnTextColor: "#FFFFFF",
                btnIcon: "https://img.hdyxi.com/image/default/btn_icon.png",
                btnCancelText: "关闭",
                btnCancelFont: 0x1a,
                btnCancelColor: "#B2B2B2",
                btnCancelMarginTop: 0xa
              },
              btnJumpKey: "welfarePage",
              backPressAdSwitch: 0x0,
              templateType: 0x1
            },
            CUSTOM_BACK_POP_DEFAULT_DATA: {
              popName: "默认自定义退出弹窗",
              popKey: "UL9H7FBF",
              topAdShow: 0x1,
              middleAdShow: 0x2,
              middleScale: "0.80",
              bottomAdShow: 0x1,
              boxBg: "https://img.hdyxi.com/image%2F2022-06-28%2F1656385307556_back.png",
              popBg: "",
              closeIcon: "https://img.hdyxi.com/image%2F2022-06-28%2F1656404166255_Group%20330%20(1).png",
              btnIcon: "https://img.hdyxi.com/image%2F2022-06-28%2F1656385299183_button.png",
              negIcon: "",
              maskOpacity: 0.8,
              popScale: "0.90",
              backLockTime: 0x0,
              crowdStyle: {
                crowdSwitch: 0x1,
                crowdText: "确定要离开吗",
                crowdDelay: 0x0,
                crowdDistance: 0x22,
                crowdFont: 0x22,
                crowdHeight: 0x22,
                crowdTextPosition: 0x1,
                crowdTextColor: "#FFFFFF"
              },
              btnStyle: {
                btnHotTop: 0x0,
                btnHotBottom: 0x0,
                btnHotAbout: 0x0,
                btnJumpKey: 0x2,
                btnJumpValue: "",
                btnBreatheSwitch: 0x1,
                btnRadius: "86",
                btnTop: 0x78,
                btnWidth: 0x2d1,
                btnHeight: 0xad,
                btnBgColor: "",
                btnTextColor: "#FFFFFF",
                btnFont: 0x30,
                btnText: "是",
                btnLeft: 0xf
              },
              negStyle: {
                negJumpKey: 0x2,
                negDelay: 0x0,
                negText: "否",
                negFont: 0x20,
                negTextColor: "#DFDFDF",
                negRadius: "",
                negTop: 0x11a,
                negLeft: 0x168,
                negHeight: 0x0,
                negWidth: 0x0
              },
              closeStyle: {
                closePosition: 0x4,
                closeDelay: 0x0,
                closeOpacity: 0x1,
                closeTop: 0x0,
                closeWidth: 0x36,
                closeHeight: 0x36
              }
            },
            COMMON_NATIVE_POP_DEFAULT_DATA: [{
              popName: "自定义通用弹窗",
              popKey: "UL9H7FBF",
              popGroupName: "补量池广告组",
              btnBackIsDisplay: false,
              closeStyle: {
                isShow: true,
                width: 0x19,
                height: 0x19,
                distance: 0x32,
                position: 0x4,
                delay: 0x7d0,
                opacity: 0x1,
                translateX: 0x0,
                top: 0x14,
                image: "https://ims.readnos.com/image%2F2023-06-19%2F1687168698801_def-close.png"
              },
              crowdStyle: {
                isShow: false,
                width: 0x2ee,
                height: 0x28,
                color: "#ff9900",
                text: "这里是挤动文案",
                distance: 0x0,
                position: 0x1,
                delay: 0xbb8,
                image: "",
                font: 0x1e,
                between: 0x1e
              },
              popStyle: {
                height: 0x300,
                width: 0x279,
                image: "https://ims.readnos.com/image%2F2023-06-19%2F1687168686358_def-popup-bg.png"
              },
              btnStyle: {
                width: 0x1f1,
                height: 0x75,
                radio: 0x3b,
                image: "",
                icon: "https://ims.readnos.com/image%2F2022-06-23%2F1655954565193_FL-JB%402x.png",
                iconSwitch: 0x0,
                hotTop: 0x0,
                hotBottom: 0x1e,
                hotAbout: 0x14,
                bgColor: "#3563e0",
                color: "#FFFFFF",
                font: 0x24,
                text: "返回",
                breath: 0x0,
                jumpKey: 0x4,
                jumpValue: "PAGE_CODE",
                top: 0x21f,
                left: 0x44,
                isBindingAd: 0x1
              },
              negStyle: {
                isShow: true,
                width: 0x81,
                height: 0x28,
                font: 0x20,
                color: "#4875E3",
                left: 0xfc,
                top: 0x2b6,
                radio: 0x0,
                jumpKey: 0x4,
                text: "继续观看",
                delay: 0x7d0,
                icon: ""
              },
              materialStyle: {
                width: 0x190,
                height: 0xe1,
                top: 0x327
              },
              maskStyle: {
                opacity: 0.5,
                image: ""
              },
              commonStyle: {
                scale: 0x1,
                backLockTime: 0x1388
              },
              menubarStyle: {
                isShow: false,
                showType: 0x1,
                font: 0x28,
                text: "这里是滚动的menubar",
                image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png",
                width: 0x2ee,
                height: 0x190,
                radio: 0x0
              }
            }],
            COMMON_VIDEO_POP_DEFAULT_DATA: [],
            COMMON_BAIDU_POP_DEFAULT_DATA: [],
            COMMON_MIDDLE_POP_DEFAULT_DATA: [{
              popName: "自定义通用中插广告弹窗",
              popKey: "UL9H7FBF",
              popGroupName: "自定义通用中插广告弹窗组",
              popStyle: {
                layoutType: 0x1,
                width: 0x2ae,
                height: 0x310,
                bgWidth: 0x2ae,
                bgHeight: 0x28e,
                bgColor: "#F2F2F2",
                bgRadio: 0x1c,
                bgType: 0x1,
                bgImage: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg"
              },
              maskStyle: {
                isShow: false,
                maskType: 0x1,
                bgColor: "#000000",
                opacity: 0.5,
                image: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg",
                tip: {
                  position: 0x1,
                  distance: 0x1e,
                  width: 0x2ee,
                  height: 0x78,
                  image: "https://ims.readnos.com/image%2F2022-09-09%2F1662715426617_Slice%205%402x.png"
                }
              },
              wholeStyle: {
                bgType: 0x1,
                bgColor: "#ffffff",
                bgOpacity: 0x1,
                image: "https://ims.readnos.com/image%2F2022-08-19%2F1660905413369_9-9.jpg"
              },
              guideStyle: {
                isShow: true,
                width: 0x2ae,
                height: 0x88,
                top: 0x20c,
                image: "https://ims.readnos.com/image%2F2022-09-13%2F1663057413233_Slice%202%402x.png"
              },
              tipStyle: {
                isShow: true,
                width: 0x2ac,
                height: 0xb8,
                distance: 0x14,
                image: "https://ims.readnos.com/image%2F2022-09-09%2F1662713486488_JRTJ%402x.png"
              },
              commonStyle: {
                lockTime: 0xbb8,
                mistakeType: 0x0,
                isCover: false
              },
              btnStyle: {
                breath: true,
                text: "正向按钮文案",
                type: 0x1,
                radio: 0x32,
                height: 0x64,
                width: 0x2ae,
                bgColor: "#38415f",
                color: "#ffffff",
                size: 0x24,
                top: 0x2a8,
                image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png"
              },
              descStyle: {
                text: "开局只有一个秘书，你能培养她成为你公司的大总裁是嘛我能?",
                top: 0x194,
                width: 0x286,
                height: 0x58,
                size: 0x1c,
                color: "#444444"
              },
              meterialStyle: {
                width: 0x294,
                height: 0x168,
                image: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg",
                top: 0x14,
                radio: 0x14
              },
              functionConfig: {
                isCloseAd2ClickAd: 0x0
              }
            }],
            COMMON_TEMPLETE_POP_DEFAULT_DATA: [{
              popName: "自定义模板中插广告弹窗",
              popKey: "UL9H7FBF",
              popGroupName: "自定义模板中插广告弹窗组",
              popStyle: {
                layoutType: 0x1,
                width: 0x2ee,
                height: 0x320,
                bgWidth: 0x2ee,
                bgHeight: 0x320,
                bgColor: "#F2F2F2",
                bgRadio: 0x0,
                bgType: 0x2,
                bgImage: "https://ims.readnos.com/image%2F2022-09-26%2Fbj%402x.png"
              },
              maskStyle: {
                isShow: false,
                maskType: 0x1,
                bgColor: "#000000",
                opacity: 0.5,
                image: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg",
                tip: {
                  position: 0x1,
                  distance: 0x1e,
                  width: 0x2ee,
                  height: 0xb4,
                  image: "https://ims.readnos.com/image%2F2022-09-09%2F1662715426617_Slice%205%402x.png"
                }
              },
              wholeStyle: {
                bgType: 0x1,
                bgColor: "#ffffff",
                bgOpacity: 0.99,
                image: "https://ims.readnos.com/image%2F2022-08-19%2F1660905413369_9-9.jpg"
              },
              guideStyle: {
                isShow: false,
                width: 0x2ae,
                height: 144.5,
                top: 0x19d,
                image: "https://imgs.syreads.com/image%2F2022-08-19%2F%E7%BB%BF%E8%89%B2.gif"
              },
              tipStyle: {
                isShow: false,
                width: 0x2ac,
                height: 0xb8,
                distance: 0x14,
                image: "https://ims.readnos.com/image%2F2022-09-09%2F1662713486488_JRTJ%402x.png"
              },
              commonStyle: {
                lockTime: 0x0,
                mistakeType: 0x0,
                isCover: false,
                bottomExemptAd: 0x1,
                materialExemptAd: 0x1,
                exemptAdTime: 0x14
              },
              btnStyle: {
                breath: true,
                text: "正向按钮文案",
                type: 0x1,
                radio: 0x32,
                height: 0x64,
                width: 0x2ae,
                bgColor: "#38415f",
                color: "#ffffff",
                size: 0x24,
                top: 0x2a8,
                image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png"
              },
              descStyle: {
                text: "开局只有一个秘书，你能培养她成为你公司的大总裁是嘛我能?",
                top: 0x194,
                width: 0x286,
                height: 0x58,
                size: 0x1c,
                color: "#444444"
              },
              meterialStyle: {
                width: 0x2ee,
                height: 0x1c2,
                image: "https://ims.readnos.com/image%2F2022-09-13%2F1663055558609_BJ%402x.jpg",
                top: 277.4,
                radio: 0x0
              },
              functionConfig: {
                isCloseAd2ClickAd: 0x0
              }
            }],
            COMMON_BAIDU_SCREEN_POP_DEFAULT_DATA: [{
              popName: "自定义百度插屏插屏弹窗",
              popKey: "UCV7BMBN",
              popGroupName: "自定义百度插屏插屏弹窗组",
              configBaseFormData: {
                configure_name: "测试李凡",
                function_type: "common",
                custom_content_code: "1000",
                weight: 0x1,
                close_delay: 0xbb8,
                crowd_delay: 0x0,
                neg_delay: 0x3e8,
                back_lock_time: 0xbb8,
                btn_jump_key: 0x4,
                btn_jump_value: "",
                neg_jump_key: 0x2,
                function_name: "通用",
                custom_content: "h5活动_摇一摇"
              }
            }]
          };
        },
        0x141e4: (_0x301345, _0x517a6f, _0x16afd6) => {
          "use strict";

          Object.defineProperty(_0x517a6f, "__esModule", {
            value: true
          });
          _0x517a6f["default"] = undefined;
          var _0x160271 = $app_require$("@app-module/system.fetch") && $app_require$("@app-module/system.fetch").__esModule ? $app_require$("@app-module/system.fetch") : {
            default: $app_require$("@app-module/system.fetch")
          };
          var _0x37bd5e = $app_require$("@app-module/system.device") && $app_require$("@app-module/system.device").__esModule ? $app_require$("@app-module/system.device") : {
            default: $app_require$("@app-module/system.device")
          };
          var _0x5b077e = $app_require$("@app-module/system.app") && $app_require$("@app-module/system.app").__esModule ? $app_require$("@app-module/system.app") : {
            default: $app_require$("@app-module/system.app")
          };
          var _0x5946ed = $app_require$("@app-module/system.storage") && $app_require$("@app-module/system.storage").__esModule ? $app_require$("@app-module/system.storage") : {
            default: $app_require$("@app-module/system.storage")
          };
          var _0x56b61f = $app_require$("@app-module/system.shortcut") && $app_require$("@app-module/system.shortcut").__esModule ? $app_require$("@app-module/system.shortcut") : {
            default: $app_require$("@app-module/system.shortcut")
          };
          var _0x1e83c0 = _0x16afd6(0x195) && _0x16afd6(0x195).__esModule ? _0x16afd6(0x195) : {
            default: _0x16afd6(0x195)
          };
          var _0x1e949e = $app_require$("@app-module/system.network") && $app_require$("@app-module/system.network").__esModule ? $app_require$("@app-module/system.network") : {
            default: $app_require$("@app-module/system.network")
          };
          if ($app_require$("@app-module/system.prompt") && $app_require$("@app-module/system.prompt").__esModule) {
            $app_require$("@app-module/system.prompt");
          } else {
            ({
              default: $app_require$("@app-module/system.prompt")
            });
          }
          var _0x3948be = $app_require$("@app-module/system.router") && $app_require$("@app-module/system.router").__esModule ? $app_require$("@app-module/system.router") : {
            default: $app_require$("@app-module/system.router")
          };
          var _0x4dbf9c = _0x16afd6(0xb1ae) && _0x16afd6(0xb1ae).__esModule ? _0x16afd6(0xb1ae) : {
            default: _0x16afd6(0xb1ae)
          };
          var _0x5d9de4 = _0x16afd6(0x101b0) && _0x16afd6(0x101b0).__esModule ? _0x16afd6(0x101b0) : {
            default: _0x16afd6(0x101b0)
          };
          var _0x3f5e18 = 0x0;
          var _0x326100 = false;
          var _0x2bbc8c = 0x1;
          var _0x2db041 = [];
          var _0x340401 = "";
          var _0x50ab78 = 0x0;
          var _0x345bbb = {
            event_id: "",
            event_name: "",
            scene: "",
            lib_version: "1.1.4",
            platform: "Quickapp",
            platform_code: 0x0,
            os: "android",
            os_version: "",
            app_version: "",
            first_qid: "",
            this_qid: "",
            first_lid: "",
            this_lid: "",
            brand: "other",
            model: "",
            ip: "",
            time_stamp: "",
            time_stamp_millis: "",
            city: "",
            province: "",
            country: "",
            device_id: "",
            source_pkg: "",
            newer_state: 0x0,
            icon_state: 0x0,
            menubar_state: 0x0,
            ad_style: "",
            ad_type: "",
            ext_field_1: "",
            ext_field_2: "",
            ext_field_3: "",
            ext_field_4: "",
            ext_field_5: "",
            ext_field_6: "",
            ext_field_7: "",
            ext_field_8: "",
            ext_field_9: "",
            ext_field_10: "",
            screen_width: 0x0,
            screen_height: 0x0,
            network: 0x0,
            login_state: 0x0,
            pay_state: 0x0,
            mode_state: "",
            page_url: "",
            ad_id: "",
            ad_network: 0x0,
            result: "",
            ad_position: "",
            referer: "",
            page_type: "",
            page_name: "",
            element_name: "",
            duration: 0x0,
            pay_amount: 0x0,
            session_id: "",
            utm_ad_id: "",
            utm_campaign: "",
            utm_content: "",
            utm_medium: "",
            utm_source: "",
            utm_term: ""
          };
          var _0x3e4deb = null;
          async function _0x3e27ee(_0xae67ff) {
            try {
              if ("object" != typeof _0xae67ff) {
                console.error("SDK传入的参数不正确，必须是对象");
                return false;
              }
              if (!_0xae67ff.event_id) {
                console.error("SDK传入的参数event_id为必传");
                return false;
              }
              if (!_0xae67ff.event_name) {
                console.error("SDK传入的参数event_name为必传");
                return false;
              }
              if (function (_0x56abe2) {
                const _0x419d88 = TACTICS_SDK.getGlobalData("event_info");
                return !!(_0x419d88 && _0x419d88.is_open && _0x419d88.events && _0x419d88.events.split(",").includes(_0x56abe2.event_id));
              }(_0xae67ff)) {
                return void LOG("REPORT", "过滤上报", _0xae67ff);
              }
              let _0x227e61 = Date.now() + 0x3e8 * _0x3f5e18;
              let _0x2c95b8 = Math.floor(_0x227e61 / 0x3e8);
              if (!_0x326100) {
                await new Promise((_0x50cfde, _0x4c3108) => {
                  _0x2bbc8c++;
                  let _0x48cdba = JSON.parse(JSON.stringify(_0x2bbc8c));
                  let _0x4491b1 = setInterval(() => {
                    try {
                      if (_0x326100) {
                        _0x50cfde(true);
                        _0x2db041.forEach(_0x13cb0c => {
                          if (_0x13cb0c.time == _0x48cdba && _0x13cb0c.timer) {
                            clearInterval(_0x13cb0c.timer);
                          }
                        });
                      }
                    } catch (_0x3fd98e) {
                      console.error("----------------上报SDK等待出错", _0x3fd98e);
                      _0x50cfde(true);
                    }
                  }, 0x3e8);
                  _0x2db041.push({
                    timer: _0x4491b1,
                    time: _0x48cdba
                  });
                });
              }
              let _0x4b4c89 = JSON.parse(JSON.stringify(_0x345bbb));
              if ("huawei" === _0x4b4c89.brand) {
                let _0xac6210 = {
                  data: ""
                };
                try {
                  _0xac6210 = await _0x37bd5e["default"].getInfo({});
                } catch (_0xe3816c) {}
                if ("honor" == (_0xac6210.data.brand && _0xac6210.data.brand.toLowerCase())) {
                  _0x4b4c89.brand = "honor";
                }
              }
              _0x4b4c89.time_stamp = _0x2c95b8;
              _0x4b4c89.time_stamp_millis = _0x227e61;
              let _0x2f8fce = Object.assign(_0x4b4c89, _0xae67ff);
              false;
              try {
                _0x2f8fce.pay_amount = parseFloat(_0x2f8fce.pay_amount.toFixed(0x2));
              } catch (_0x1c2116) {
                LOG("REPORT", "----------------转化金额出错", _0x1c2116);
              }
              LOG("REPORT", "----------------上报SDK上报的数据", _0x2f8fce);
              0x0;
              _0x160271["default"].fetch({
                url: "https://applogs-qt.xayabx.com/" + _0x340401,
                data: _0x2f8fce,
                method: "POST",
                header: {
                  "Content-Type": "application/json",
                  Xts: _0x2c95b8,
                  Xsign: _0x1e83c0["default"]("/" + _0x340401 + "yunyousj@2021" + _0x2c95b8)
                }
              }).then(async _0x7ce78d => {
                if (0xc8 != _0x7ce78d.data.code) {
                  console.error("----------------上报接口状态码出错", _0x7ce78d.data.code);
                }
                if (0x193 == _0x7ce78d.data.code && _0x50ab78 < 0xa) {
                  _0x50ab78 += 0x1;
                  try {
                    let _0x12edad = JSON.parse(_0x7ce78d.data.data);
                    if (0x7d0 == _0x12edad.STATUS) {
                      _0x3f5e18 = _0x12edad.DATA.Time - Math.round(new Date() / 0x3e8);
                      _0x5946ed["default"].set({
                        key: "reportsdk_time_diff",
                        value: _0x3f5e18
                      });
                      _0x3e27ee(_0xae67ff);
                    }
                  } catch (_0x2259d3) {
                    console.error("----------------本地时间校验出错", _0x2259d3);
                  }
                }
              })["catch"](_0x490247 => {
                console.error("----------------上报SDK返回逻辑执行出错", _0x490247);
              });
            } catch (_0x471ff3) {
              console.error("----------------上报SDK执行出错", _0x471ff3);
            }
          }
          const _0x1149c9 = {
            sdk_init: async function (_0x5d2b7e) {
              _0x326100 = false;
              let _0x1c4b18 = _0x5b077e["default"].getInfo();
              _0x345bbb.app_version = _0x1c4b18.versionName ? _0x1c4b18.versionName.replace(/\./g, "").toString() : "";
              _0x345bbb.source_pkg = _0x1c4b18.source.packageName ? _0x1c4b18.source.packageName : "";
              _0x340401 = _0x1c4b18.packageName;
              if (_0x5d2b7e && _0x5d2b7e.utm_ad_id) {
                _0x345bbb.utm_ad_id = _0x5d2b7e.utm_ad_id;
              }
              if (_0x5d2b7e && _0x5d2b7e.utm_campaign) {
                _0x345bbb.utm_campaign = _0x5d2b7e.utm_campaign;
              }
              if (_0x5d2b7e && _0x5d2b7e.utm_content) {
                _0x345bbb.utm_content = _0x5d2b7e.utm_content;
              }
              if (_0x5d2b7e && _0x5d2b7e.utm_medium) {
                _0x345bbb.utm_medium = _0x5d2b7e.utm_medium;
              }
              if (_0x5d2b7e && _0x5d2b7e.utm_source) {
                _0x345bbb.utm_source = _0x5d2b7e.utm_source;
              }
              if (_0x5d2b7e && _0x5d2b7e.utm_term) {
                _0x345bbb.utm_term = _0x5d2b7e.utm_term;
              }
              let _0x3f225e = {
                data: ""
              };
              try {
                _0x3f225e = await _0x37bd5e["default"].getInfo({});
              } catch (_0x225463) {}
              _0x345bbb.platform_code = _0x3f225e.data.platformVersionCode ? Number(_0x3f225e.data.platformVersionCode) : 0x0;
              _0x345bbb.os = _0x3f225e.data.osType ? _0x3f225e.data.osType.toLowerCase() : "";
              _0x345bbb.os_version = _0x3f225e.data.osVersionName ? _0x3f225e.data.osVersionName : "";
              _0x345bbb.screen_width = _0x3f225e.data.screenWidth ? ~~_0x3f225e.data.screenWidth : 0x0;
              _0x345bbb.screen_height = _0x3f225e.data.screenHeight ? ~~_0x3f225e.data.screenHeight : 0x0;
              let _0x2778f4 = _0x3f225e.data.model;
              let _0xa0b710 = _0x3f225e.data.brand && _0x3f225e.data.brand.toLowerCase();
              if ("honor" == _0xa0b710 || "huawei" == _0xa0b710 || _0x5d9de4["default"].includes(_0x2778f4)) {
                _0x345bbb.brand = "huawei";
              } else {
                _0x345bbb.brand = "redmi" == _0xa0b710 || "xiaomi" == _0xa0b710 ? "xiaomi" : "oppo" == _0xa0b710 || "realme" == _0xa0b710 || "oneplus" == _0xa0b710 ? "oppo" : "vivo" == _0xa0b710 ? "vivo" : "other";
              }
              _0x345bbb.model = _0x3f225e.data.model ? _0x3f225e.data.model : "";
              let _0x4ec186 = {
                data: ""
              };
              try {
                _0x4ec186 = await _0x1e949e["default"].getType({});
              } catch (_0x2a3db6) {}
              switch (_0x4ec186.data.type) {
                case "2g":
                  _0x345bbb.network = 0x3;
                  break;
                case "3g":
                  _0x345bbb.network = 0x4;
                  break;
                case "4g":
                  _0x345bbb.network = 0x5;
                  break;
                case "wifi":
                  _0x345bbb.network = 0x2;
                  break;
                case "none":
                  _0x345bbb.network = 0x1;
                  break;
                case "5g":
                  _0x345bbb.network = 0x6;
                  break;
                default:
                  _0x345bbb.network = 0x0;
              }
              _0x345bbb.menubar_state = _0x5d2b7e.menubar_state ? 0x1 : 0x0;
              _0x345bbb.login_state = _0x5d2b7e && _0x5d2b7e.login_state ? 0x1 : 0x0;
              _0x345bbb.pay_state = _0x5d2b7e && _0x5d2b7e.pay_state ? 0x1 : 0x0;
              _0x345bbb.mode_state = _0x5d2b7e && _0x5d2b7e.mode_state ? 0x1 : 0x0;
              let _0x1ef36a = {
                data: ""
              };
              try {
                _0x1ef36a = await _0x37bd5e["default"].getUserId({});
              } catch (_0x116bee) {}
              if (_0x1ef36a.data.userId) {
                _0x345bbb.device_id = _0x1ef36a.data.userId;
                LOG("AB分组数据上报埋点1", "" + ("abcdef0123456789".indexOf(_0x1ef36a.data.userId.slice(0x0, 0x1).toLowerCase()) + 0x1));
                _0x345bbb.ext_field_5 = "" + ("abcdef0123456789".indexOf(_0x1ef36a.data.userId.slice(0x0, 0x1).toLowerCase()) + 0x1);
                _0x5946ed["default"].set({
                  key: "reportsdk_deviceid",
                  value: ""
                });
              } else {
                let _0x3a6487 = {
                  data: ""
                };
                try {
                  _0x3a6487 = await _0x5946ed["default"].get({
                    key: "reportsdk_deviceid"
                  });
                } catch (_0x1e9ab2) {}
                if (_0x3a6487.data) {
                  _0x345bbb.device_id = _0x3a6487.data;
                  LOG("AB分组数据上报埋点2", "" + ("abcdef0123456789".indexOf(_0x1ef36a.data.userId.slice(0x0, 0x1).toLowerCase()) + 0x1));
                  _0x345bbb.ext_field_5 = "" + ("abcdef0123456789".indexOf(_0x1ef36a.data.userId.slice(0x0, 0x1).toLowerCase()) + 0x1);
                } else {
                  _0x345bbb.device_id = "SZ00" + Date.now() + parseInt(0xd18c2e27ff * Math.random() + 0x174876e800);
                  LOG("AB分组数据上报埋点3", "" + ("abcdef0123456789".indexOf(_0x1ef36a.data.userId.slice(0x0, 0x1).toLowerCase()) + 0x1));
                  _0x345bbb.ext_field_5 = "" + ("abcdef0123456789".indexOf(_0x1ef36a.data.userId.slice(0x0, 0x1).toLowerCase()) + 0x1);
                  _0x5946ed["default"].set({
                    key: "reportsdk_deviceid",
                    value: ""
                  });
                }
              }
              0x0;
              _0x345bbb.session_id = _0x1e83c0["default"]("") + Date.now();
              let _0x3adc82 = {
                data: ""
              };
              try {
                _0x3adc82 = await _0x5946ed["default"].get({
                  key: "reportsdk_isNewUser"
                });
              } catch (_0x4547e8) {}
              if (_0x3adc82.data) {
                (async function () {
                  let _0x123422 = await _0x5946ed["default"].get({
                    key: "first_visit"
                  });
                  if (!_0x123422.data) {
                    return _0x345bbb.newer_state = 0x0;
                  }
                  try {
                    let _0x165191 = (await _0x5946ed["default"].get({
                      key: "last_login_time"
                    })).data;
                    let _0x1dd113 = new Date().getTime();
                    let _0x3cf926 = Number(_0x165191) + _0x123422.data * 0x5265c00;
                    return Number(_0x1dd113) > Number(_0x3cf926) ? (LOG("首次访问过期"), _0x5946ed["default"].set({
                      key: "last_login_time",
                      value: new Date().getTime()
                    }), _0x345bbb.newer_state = 0x1) : (LOG("首次访问未过期"), _0x5946ed["default"].set({
                      key: "last_login_time",
                      value: new Date().getTime()
                    }), _0x345bbb.newer_state = 0x0);
                  } catch (_0x417c35) {
                    LOG(_0x417c35, "diff time error");
                  }
                })();
              } else {
                _0x345bbb.newer_state = 0x1;
                _0x5946ed["default"].set({
                  key: "last_login_time",
                  value: new Date().getTime()
                });
                _0x5946ed["default"].set({
                  key: "reportsdk_isNewUser",
                  value: "1"
                });
                LOG("开p-ingwh触", "首次进入");
                _0x5946ed["default"].set({
                  key: "FIRST_LOGIN_TIME",
                  value: new Date().getTime()
                });
              }
              if (_0x5d2b7e && _0x5d2b7e.qd_id) {
                _0x345bbb.this_qid = _0x5d2b7e.qd_id;
              } else {
                _0x345bbb.this_qid = "-1";
              }
              if (_0x5d2b7e && _0x5d2b7e.link_id) {
                _0x345bbb.this_lid = _0x5d2b7e.link_id;
              } else {
                _0x345bbb.this_lid = "-1";
              }
              let _0xaf68da = new Date().getFullYear() + "/" + new Date().getMonth() + "/" + new Date().getDate();
              let _0x4055fb = {
                data: ""
              };
              try {
                _0x4055fb = await _0x5946ed["default"].get({
                  key: "reportsdk_qudao"
                });
              } catch (_0x2f494d) {}
              if (_0x4055fb.data) {
                let _0x11d65c = JSON.parse(_0x4055fb.data);
                if (_0x11d65c.date == _0xaf68da) {
                  _0x345bbb.first_qid = _0x11d65c.first_qid;
                  _0x345bbb.first_lid = _0x11d65c.first_lid;
                } else {
                  _0x345bbb.first_qid = "";
                  _0x345bbb.first_lid = "";
                  _0x5946ed["default"].set({
                    key: "reportsdk_qudao",
                    value: {
                      date: _0xaf68da,
                      first_qid: "",
                      first_lid: ""
                    }
                  });
                }
              } else {
                _0x345bbb.first_qid = "";
                _0x345bbb.first_lid = "";
                _0x5946ed["default"].set({
                  key: "reportsdk_qudao",
                  value: {
                    date: _0xaf68da,
                    first_qid: "",
                    first_lid: ""
                  }
                });
              }
              let _0x3afcb8 = {
                data: ""
              };
              try {
                _0x3afcb8 = await _0x56b61f["default"].hasInstalled({});
              } catch (_0x44f1ee) {}
              _0x345bbb.icon_state = _0x3afcb8.data ? 0x1 : 0x0;
              let _0x42dcc0 = {
                data: ""
              };
              try {
                _0x42dcc0 = await _0x5946ed["default"].get({
                  key: "reportsdk_time_diff"
                });
              } catch (_0x1406c2) {}
              if (_0x42dcc0.data) {
                _0x3f5e18 = ~~_0x42dcc0.data;
              }
              if (_0x5d2b7e && _0x5d2b7e.ip && _0x5d2b7e.country && _0x5d2b7e.province && _0x5d2b7e.city) {
                _0x345bbb.ip = _0x5d2b7e.ip;
                _0x345bbb.country = _0x5d2b7e.country;
                _0x345bbb.province = _0x5d2b7e.province;
                _0x345bbb.city = _0x5d2b7e.city;
              } else {
                try {
                  let _0x43b5e3 = Math.round(new Date() / 0x3e8) + _0x3f5e18;
                  0x0;
                  let _0x479574 = await _0x160271["default"].fetch({
                    url: "https://ip.xayabx.com/",
                    header: {
                      Xts: _0x43b5e3,
                      Xsign: _0x1e83c0["default"]("/yunyousj@2021" + _0x43b5e3)
                    }
                  });
                  let _0x59e8fb = JSON.parse(_0x479574.data.data);
                  _0x345bbb.ip = _0x59e8fb.ip ? _0x59e8fb.ip : "";
                  _0x345bbb.country = _0x59e8fb.country ? _0x59e8fb.country : "";
                  _0x345bbb.province = _0x59e8fb.region ? _0x59e8fb.region : "";
                  _0x345bbb.city = _0x59e8fb.city ? _0x59e8fb.city : "";
                } catch (_0x5ae1f0) {
                  LOG("REPORT", "----------------获取ip信息出错", _0x5ae1f0);
                  _0x345bbb.ip = "";
                  _0x345bbb.country = "";
                  _0x345bbb.province = "";
                  _0x345bbb.city = "";
                }
              }
              _0x326100 = true;
            },
            report: _0x3e27ee,
            set_attr: function (_0x2bdd77, _0xb8f919) {
              if (_0x345bbb.hasOwnProperty(_0x2bdd77)) {
                _0x345bbb[_0x2bdd77] = _0xb8f919;
              }
            },
            get_attr: function (_0x1c3684) {
              return _0x345bbb[_0x1c3684];
            },
            page_show: function () {
              {
                let _0x3f2598 = Date.now();
                let _0x5ee6a8 = "";
                try {
                  _0x5ee6a8 = _0x3948be["default"].getState().path || "未知";
                } catch (_0x515aff) {
                  _0x5ee6a8 = "未知";
                }
                _0x3e4deb = {
                  page_time: _0x3f2598,
                  page_url: _0x5ee6a8
                };
              }
            },
            page_hide: async function () {
              if (!_0x3e4deb) {
                return;
              }
              let _0x51c766 = Date.now();
              let _0x48cf80 = _0x51c766 + 0x3e8 * _0x3f5e18;
              let _0x3f37e0 = Math.floor(_0x48cf80 / 0x3e8);
              let _0x238b19 = _0x51c766 - _0x3e4deb.page_time;
              let _0x146435 = _0x3e4deb.page_url;
              _0x3e4deb = null;
              if (!_0x326100) {
                await new Promise((_0x21c15b, _0x327b35) => {
                  _0x2bbc8c++;
                  let _0x5ad390 = JSON.parse(JSON.stringify(_0x2bbc8c));
                  let _0x39b1b3 = setInterval(() => {
                    try {
                      if (_0x326100) {
                        _0x21c15b(true);
                        _0x2db041.forEach(_0x211ab1 => {
                          if (_0x211ab1.time == _0x5ad390 && _0x211ab1.timer) {
                            clearInterval(_0x211ab1.timer);
                          }
                        });
                      }
                    } catch (_0x4afe71) {
                      console.error("----------------上报SDK等待出错", _0x4afe71);
                      _0x21c15b(true);
                    }
                  }, 0x3e8);
                  _0x2db041.push({
                    timer: _0x39b1b3,
                    time: _0x5ad390
                  });
                });
              }
              let _0x2ed819 = JSON.parse(JSON.stringify(_0x345bbb));
              if ("huawei" === _0x2ed819.brand) {
                let _0x146499 = {
                  data: ""
                };
                try {
                  _0x146499 = await _0x37bd5e["default"].getInfo({});
                } catch (_0x5c0d50) {}
                if ("honor" == (_0x146499.data.brand && _0x146499.data.brand.toLowerCase())) {
                  _0x2ed819.brand = "honor";
                }
              }
              let _0x3b9dc2 = {
                event_id: "used_duration",
                event_name: "用户使用时长",
                time_stamp: _0x3f37e0,
                time_stamp_millis: _0x48cf80,
                duration: _0x238b19,
                page_url: _0x146435
              };
              let _0x30b43e = Object.assign(_0x2ed819, _0x3b9dc2);
              LOG("REPORT", "----------------上报SDK用户上报的数据", _0x30b43e);
              0x0;
              _0x160271["default"].fetch({
                url: "https://applogs-qt.xayabx.com/" + _0x340401,
                data: _0x30b43e,
                method: "POST",
                header: {
                  "Content-Type": "application/json",
                  Xts: _0x3f37e0,
                  Xsign: _0x1e83c0["default"]("/" + _0x340401 + "yunyousj@2021" + _0x3f37e0)
                }
              }).then(async _0x3472b0 => {
                if (0xc8 != _0x3472b0.data.code) {
                  console.error("----------------上报接口状态码出错", _0x3472b0.data.code);
                }
                if (0x193 == _0x3472b0.data.code && _0x50ab78 < 0xa) {
                  _0x50ab78 += 0x1;
                  try {
                    let _0x4ef78f = JSON.parse(_0x3472b0.data.data);
                    if (0x7d0 == _0x4ef78f.STATUS) {
                      _0x3f5e18 = _0x4ef78f.DATA.Time - Math.round(new Date() / 0x3e8);
                      _0x5946ed["default"].set({
                        key: "reportsdk_time_diff",
                        value: _0x3f5e18
                      });
                      _0x3e27ee(_0x3b9dc2);
                    }
                  } catch (_0x57d11a) {
                    console.error("----------------本地时间校验出错", _0x57d11a);
                  }
                }
              })["catch"](_0x205efa => {
                console.error("----------------上报SDK返回逻辑执行出错", _0x205efa);
              });
            },
            kdxfReport: function (_0x376dbf, _0x4349c9, _0x273d47) {
              if (0x1 === _0x273d47) {
                let _0x2ae1f8 = _0x376dbf.monitor.impress_urls;
                const _0x457030 = String(Date.now() / 0x3e8).split(".")[0x0];
                for (let _0xe3a951 of _0x2ae1f8) {
                  let _0x2639e5 = _0xe3a951.replace("__REQ_WIDTH__", 0x3c0).replace("__REQ_HEIGHT__", 0x280).replace("__WIDTH__", 0x280).replace("__HEIGHT__", 0x140).replace("__TIMESTAMP__", _0x457030).replace("__TS__", Date.now());
                  _0x4dbf9c["default"].getExternal(_0x2639e5, {}, _0x4349c9);
                }
              } else {
                if (0x2 === _0x273d47) {
                  let _0x1e2ea5 = _0x376dbf.monitor.click_urls;
                  const _0x1f327f = Math.round(0x64 * Math.random()) + 0x21c;
                  const _0x50a7d8 = Math.round(0x64 * Math.random()) + 0xdc;
                  const _0x10282c = String(Date.now() / 0x3e8).split(".")[0x0];
                  for (let _0x10951e of _0x1e2ea5) {
                    let _0x22d528 = _0x10951e.replace("__REQ_WIDTH__", 0x3c0).replace("__REQ_HEIGHT__", 0x280).replace("__WIDTH__", 0x280).replace("__HEIGHT__", 0x140).replace("__DOWN_X__", _0x1f327f).replace("__DOWN_Y__", _0x50a7d8).replace("__UP_X__", _0x1f327f).replace("__UP_Y__", _0x50a7d8).replace("__TIMESTAMP__", _0x10282c).replace("__TS__", Date.now());
                    _0x4dbf9c["default"].getExternal(_0x22d528, {}, _0x4349c9);
                  }
                } else if (0x3 === _0x273d47) {
                  setTimeout(() => {
                    let _0x482bfd = _0x376dbf.monitor.download_start_urls;
                    for (let _0x4f55a0 of _0x482bfd) _0x4dbf9c["default"].getExternal(_0x4f55a0, {}, _0x4349c9);
                  }, 0x1f4);
                  setTimeout(() => {
                    let _0x30a50e = _0x376dbf.monitor.download_complete_urls;
                    for (let _0x4616bd of _0x30a50e) _0x4dbf9c["default"].getExternal(_0x4616bd, {}, _0x4349c9);
                    setTimeout(() => {
                      let _0x2a9809 = _0x376dbf.monitor.install_start_urls;
                      for (let _0x84cf71 of _0x2a9809) _0x4dbf9c["default"].getExternal(_0x84cf71, {}, _0x4349c9);
                      setTimeout(() => {
                        let _0x1a9861 = _0x376dbf.monitor.install_complete_urls;
                        for (let _0x4094cd of _0x1a9861) _0x4dbf9c["default"].getExternal(_0x4094cd, {}, _0x4349c9);
                      }, 0x7d0);
                    }, 0x7d0);
                  }, 0x1388);
                }
              }
            }
          };
          (_0x16afd6.g.__proto__ || _0x16afd6.g).REPORT_SDK = _0x1149c9;
          _0x517a6f["default"] = _0x1149c9;
        },
        0x10e97: (_0x279e56, _0x1a325c, _0x511119) => {
          "use strict";

          Object.defineProperty(_0x1a325c, "__esModule", {
            value: true
          });
          _0x1a325c["default"] = undefined;
          var _0x8f9355 = {
            advConfig: null,
            adClickBetweenTimes: 0x7d0,
            adRequestTimesTemp: 0x0,
            isShowToast: false,
            materialType: 0x1,
            uploadFristPopClick: 0x0,
            hwAdNegClickCount: 0x1,
            hwAdNegClickTime: 0x0,
            isBoostTypeSingle: false,
            hwAdList: []
          };
          function _0x16f0dc(_0x5a5cff, _0x1b33ed, _0x11b61f) {
            try {
              let _0x35840d = {
                native_ad_priority: {
                  adType: 0x1,
                  tempName: ""
                },
                app_ad_priority: {
                  adType: 0x1,
                  tempName: ""
                },
                baidu_ad_priority: {
                  adType: 0x3,
                  tempName: "baidu_ad_template"
                },
                kdxf_ad_priority: {
                  adType: 0x6,
                  tempName: "kdxf_ad_template"
                },
                ylh_ad_priority: {
                  adType: 0xa,
                  tempName: "ylh_ad_template"
                }
              };
              if (-0x1 === _0x11b61f) {
                _0x35840d.native_ad_priority = -0x1;
                _0x35840d.app_ad_priority = -0x1;
              }
              let _0x201b30 = _0x1b33ed;
              let _0x29b95f = 0x0;
              for (let _0x1c1e61 in _0x5a5cff) if (-0x1 !== _0x1c1e61.indexOf("ad_priority") && _0x29b95f < _0x5a5cff[_0x1c1e61]) {
                _0x29b95f = _0x5a5cff[_0x1c1e61];
                _0x201b30 = _0x1c1e61;
              }
              if ("native_ad_priority" !== _0x201b30 && "app_ad_priority" !== _0x201b30) {
                return {
                  adType: _0x35840d[_0x201b30].adType,
                  bqtTempId: _0x5a5cff[_0x35840d[_0x201b30].tempName]
                };
              }
            } catch (_0x1b79cb) {
              LOG("sortAdPriority", _0x1b79cb);
            }
            return null;
          }
          let _0x189136 = 0x0;
          function _0x1872d0(_0x44b534, _0x5ec28f) {
            LOG("AD", "广告ADSDKUTILS=>markAdRequestInterval===========>", _0x44b534, _0x5ec28f, 0x0);
            if (false && -0x1 != _0x5ec28f.sceneCode.indexOf("POP")) {
              COMMON_REPORT_UTILS.page_popup_click_report(_0x5ec28f.popGroupName, _0x5ec28f.popName);
              _0x8f9355.uploadFristPopClick = 0x2;
            }
          }
          function _0x61fc7c() {
            const _0x406185 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_template_ad;
            const _0x53b4b3 = _0x406185 && _0x406185.val;
            return Number(_0x53b4b3) || 0x0;
          }
          function _0x5ba40f() {
            let _0x3b5239 = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_compare_price_type;
            return _0x3b5239 ? _0x3b5239.split(",") : [];
          }
          const _0x7f6860 = {
            adConfigData: _0x8f9355,
            updataAdConfigData: function (_0x3a0897) {
              try {
                Object.assign(_0x8f9355, _0x3a0897);
                LOG("AD", "广告ADSDKUTILS========>updataAdConfigData数据更新完成", _0x8f9355, _0x3a0897);
              } catch (_0x4a09e6) {
                LOG("AD", "广告ADSDKUTILS========>updataAdConfigData数据更新失败", _0x4a09e6);
              }
            },
            getAd: function _0x49eec6(_0x3c77f8) {
              let {
                scenario: _0x323b3a,
                sceneCode: _0x6453a6,
                adType: _0x2f70c4,
                adTimes: _0x302ea6,
                popName: _0x39ae2f,
                popGroupName: _0x148577,
                requestNum: _0x42edd8,
                actionCode: _0x31bdcb
              } = _0x3c77f8;
              if (_0x302ea6 >= 0x2) {
                LOG("AD", "广告ADSDKUTILS========>请求轮询完毕", _0x3c77f8);
                return _0x3c77f8 && _0x3c77f8.fail && _0x3c77f8.fail("没有获取到广告1");
              }
              if (0x5 == _0x2f70c4) {
                LOG("AD", "广告ADSDKUTILS========>请求间隔限制toast提示", _0x3c77f8);
                return _0x3c77f8 && _0x3c77f8.fail && _0x3c77f8.fail({
                  message: "没有获取到广告",
                  code: 0x1
                });
              }
              let _0x4b63f7 = function (_0x444e84) {
                LOG("AD", "广告ADSDKUTILS=>getAdType1", null);
                LOG("AD", "广告ADSDKUTILS=>getAdType2", JSON.parse(JSON.stringify(_0x444e84)));
                let {
                  sceneCode: _0x3e411c,
                  adType: _0x1cc1b3,
                  actionCode: _0x441097
                } = _0x444e84;
                let _0x16be47 = _0x61fc7c();
                if ("AD_POP_COMMON" === _0x3e411c && 0x2 === _0x16be47) {
                  if ("boost" === _0x441097) {
                    _0x16be47 = _0x189136 % 0x2 != 0x0;
                    _0x189136++;
                  } else {
                    if (0xb === AD_SDK_UTILS.adConfigData.adType) {
                      return {
                        adType: 0xb,
                        bqtTempId: ""
                      };
                    }
                    if (_0x5ba40f().includes("1") && _0x5ba40f().includes("3")) {
                      _0x16be47 = 0x7 === AD_SDK_UTILS.adConfigData.adType;
                    } else if (!_0x5ba40f().includes("3")) {
                      _0x16be47 = false;
                    }
                  }
                } else {
                  if (0x4 === _0x16be47) {
                    return {
                      adType: 0xc,
                      bqtTempId: ""
                    };
                  }
                }
                if ("AD_POP_COMMON" === _0x3e411c && _0x16be47) {
                  return {
                    adType: 0x7,
                    bqtTempId: ""
                  };
                }
                if (null.scene_switch_list) {
                  let _0x25dcf7 = null.scene_switch_list.filter(_0x3d5376 => _0x3d5376.scene_code == _0x3e411c && _0x3d5376.status);
                  if (_0x25dcf7.length > 0x0) {
                    let _0x40db62 = _0x25dcf7[0x0];
                    if (0x0 == _0x1cc1b3) {
                      const _0x41e08f = _0x16f0dc(_0x40db62, "native_ad_priority");
                      if (_0x41e08f) {
                        return _0x41e08f;
                      }
                    }
                    if (0x3 == _0x1cc1b3) {
                      return {
                        adType: 0x3,
                        bqtTempId: _0x40db62.baidu_ad_priority ? _0x40db62.baidu_ad_template : ""
                      };
                    }
                    if (0x6 == _0x1cc1b3) {
                      return {
                        adType: 0x6,
                        bqtTempId: _0x40db62.kdxf_ad_priority ? _0x40db62.kdxf_ad_template : ""
                      };
                    }
                    if (0xa == _0x1cc1b3) {
                      return {
                        adType: 0xa,
                        bqtTempId: _0x40db62.ylh_ad_priority ? _0x40db62.ylh_ad_template : ""
                      };
                    }
                    if (-0x1 == _0x1cc1b3) {
                      const _0x15551d = _0x16f0dc(_0x40db62, "native_ad_priority", _0x1cc1b3);
                      if (_0x15551d) {
                        return _0x15551d;
                      }
                    }
                    return {
                      adType: 0x1,
                      bqtTempId: ""
                    };
                  }
                }
                if (null.popup_switch_list) {
                  let _0xe83aea = null.popup_switch_list.filter(_0x10f916 => _0x10f916.scene_code == _0x3e411c);
                  if (_0xe83aea.length > 0x0) {
                    let _0x4b51db = _0xe83aea[0x0];
                    LOG("AD", "广告ADSDKUTILS=>getAdType4", _0x4b51db);
                    if (0x0 == _0x1cc1b3) {
                      const _0x512413 = _0x16f0dc(_0x4b51db, "app_ad_priority");
                      if (_0x512413) {
                        return _0x512413;
                      }
                    }
                    return 0x3 == _0x1cc1b3 ? {
                      adType: 0x3,
                      bqtTempId: _0x4b51db.baidu_ad_priority ? "3002" : ""
                    } : 0x4 == _0x1cc1b3 ? {
                      adType: 0x3,
                      bqtTempId: _0x4b51db.baidu_ad_priority ? "9999" : ""
                    } : 0x6 == _0x1cc1b3 ? {
                      adType: 0x6,
                      bqtTempId: _0x4b51db.kdxf_ad_priority ? "3002" : ""
                    } : 0xa == _0x1cc1b3 ? {
                      adType: 0xa,
                      bqtTempId: _0x4b51db.ylh_ad_priority ? "3002" : ""
                    } : {
                      adType: 0x1,
                      bqtTempId: ""
                    };
                  }
                }
                return null;
              }(_0x3c77f8);
              if (!_0x4b63f7) {
                LOG("AD", "广告ADSDKUTILS========>场景配置关闭", _0x3c77f8);
                return _0x3c77f8 && _0x3c77f8.fail && _0x3c77f8.fail("没有获取到广告");
              }
              if ((0x3 == _0x4b63f7.adType || 0x6 == _0x4b63f7.adType || 0xa == _0x4b63f7.adType) && !_0x4b63f7.bqtTempId && "AD_SCENE_READ_BANNER" === _0x6453a6) {
                const _0x5c5472 = {
                  0x3: "百度",
                  0x6: "科大讯飞",
                  0xa: "优量汇"
                }[_0x4b63f7.adType];
                LOG("AD", "广告ADSDKUTILS========>命中" + _0x5c5472 + "广告，且无" + _0x5c5472 + "配置", _0x4b63f7);
                _0x3c77f8.adTimes++;
                _0x3c77f8.adType = 0x1;
                return _0x49eec6(_0x3c77f8);
              }
              _0x3c77f8.adType = _0x3c77f8 && _0x3c77f8.adType && 0x4 != _0x3c77f8.adType && "AD_SCENE_READ_BANNER" !== _0x6453a6 ? _0x3c77f8.adType : _0x4b63f7.adType;
              if (!(0x7 !== _0x4b63f7.adType && 0xb !== _0x4b63f7.adType && 0xc !== _0x4b63f7.adType)) {
                _0x3c77f8.adType = _0x4b63f7.adType;
              }
              let _0x14663e = function (_0x1b2ef7) {
                let {
                  sceneCode: _0x4c41f7
                } = _0x1b2ef7;
                let _0x48a904 = 0x0;
                if (!(true || null.ad_request_config == [])) {
                  if (0x0 + null.ad_request_config.interval_time > new Date().getTime()) {
                    if ("AD_POP_CUSTOM" == _0x4c41f7) {
                      _0x48a904 = null.ad_request_config.interval_custom_popup_type;
                    }
                    if (-0x1 != _0x4c41f7.indexOf("BACK")) {
                      _0x48a904 = null.ad_request_config.interval_back_popup_type;
                    }
                    LOG("AD", "广告ADSDKUTILS=>checkRequestInterval 请求间隔命中", _0x48a904);
                  }
                  LOG("AD", "广告ADSDKUTILS=>checkIsGetBqtAd", false);
                }
                return _0x48a904;
              }(_0x3c77f8);
              if (0x3 !== _0x3c77f8.adType && 0x6 !== _0x3c77f8.adType && 0xa !== _0x3c77f8.adType && _0x14663e) {
                return 0x1 == _0x14663e ? (LOG("AD", "广告ADSDKUTILS========>命中请求间隔,不触发"), _0x3c77f8.adTimes = 0x2, _0x49eec6(_0x3c77f8)) : 0x2 == _0x14663e ? (LOG("AD", "广告ADSDKUTILS========>命中请求间隔,按照优先级继续请求"), _0x3c77f8.adTimes++, _0x3c77f8.adType = 0x3, _0x49eec6(_0x3c77f8)) : 0x3 == _0x14663e ? (false || (LOG("AD", "广告ADSDKUTILS========>命中请求间隔,Toas提示"), _0x8f9355.isShowToast = true, setTimeout(() => {
                  _0x8f9355.isShowToast = false;
                }, 0x1f4), $app_require$("@app-module/system.prompt").showToast({
                  message: "操作太快了请重试!"
                })), _0x3c77f8.adType = 0x5, _0x49eec6(_0x3c77f8)) : undefined;
              }
              AD_SDK.getManuAdv({
                scenario: _0x323b3a,
                sceneCode: _0x6453a6,
                popName: _0x39ae2f,
                popGroupName: _0x148577,
                requestNum: _0x42edd8,
                adType: _0x3c77f8.adType,
                adTimes: _0x3c77f8.adTimes,
                bqtTempId: _0x4b63f7.bqtTempId,
                actionCode: _0x31bdcb,
                success: function (_0x5b6b26) {
                  if (_0x3c77f8 && _0x3c77f8.success) {
                    _0x3c77f8.success(_0x5b6b26);
                  }
                },
                fail: function (_0x516f01) {
                  _0x3c77f8.adTimes++;
                  if (_0x3c77f8 && _0x3c77f8.adType && 0x4 != _0x3c77f8.adType && "AD_SCENE_READ_BANNER" !== _0x6453a6) {
                    _0x49eec6(_0x3c77f8);
                  }
                }
              });
            },
            markAdRequestInterval: _0x1872d0,
            clickManuAdvForBtn: function (_0x5e2d95, _0xdcc47a, _0x1590e0, _0x38461f) {
              _0x1872d0("adClick", _0x5e2d95);
              if ("manu_ad" == _0x5e2d95.type) {
                POP_TOOLS.setIntervalAttr();
              }
              AD_SDK.clickManuAdvForBtn(_0x5e2d95, _0xdcc47a, _0x1590e0, _0x38461f);
            },
            clickManuAdvForImg: function (_0x33ffa8, _0x19e964) {
              _0x1872d0("adClick", _0x33ffa8);
              if ("manu_ad" == _0x33ffa8.type) {
                POP_TOOLS.setIntervalAttr();
              }
              AD_SDK.clickManuAdvForImg(_0x33ffa8, _0x19e964);
            },
            initSdk: function (_0x18e928) {
              return AD_SDK.initSdk(_0x18e928);
            },
            getNextOppoAdData: function (_0x75f2d2, _0x14690f, _0x55f903, _0x505a55, _0x4fd369, _0x4c9f6b, _0x41dd8a, _0x41d918, _0x922800) {
              return AD_SDK.getNextOppoAdData({
                scenario: _0x75f2d2,
                sceneCode: _0x14690f,
                adType: _0x55f903,
                adTimes: _0x505a55,
                popName: _0x4fd369,
                popGroupName: _0x4c9f6b,
                requestNum: _0x41dd8a,
                nativeAdvObj: _0x41d918,
                actionCode: _0x922800
              });
            },
            getNextTemplateAdData: function (_0x13c190, _0x1d6eea, _0xa9126, _0x574fc7, _0x12ed18, _0x39a750, _0x5f3c08, _0x895253, _0x46bfc4) {
              return AD_SDK.getNextTemplateAdData({
                scenario: _0x13c190,
                sceneCode: _0x1d6eea,
                adType: _0xa9126,
                adTimes: _0x574fc7,
                popName: _0x12ed18,
                popGroupName: _0x39a750,
                requestNum: _0x5f3c08,
                actionCode: _0x895253,
                nativeAdvObj: _0x46bfc4
              });
            },
            getRequestHandle: function (_0x4b421e) {
              return AD_SDK.getRequestHandle(_0x4b421e);
            },
            getSpecialCondJudgment: function () {
              let _0x2fd680;
              let _0x202e81;
              let _0x35774b = 0x0;
              let _0x5e1fca = TACTICS_SDK.getGlobalData("configInfo").config.is_open_homeScreen_advert;
              _0x35774b = _0x5e1fca && Number(_0x5e1fca.val);
              let _0xe60f53 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_screen_ad;
              _0x202e81 = _0xe60f53 && Number(_0xe60f53.val);
              let _0x20de78 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_second_screen_ad;
              _0x2fd680 = _0x20de78 && Number(_0x20de78.val);
              return {
                fristScreen: _0x202e81,
                secondScreen: _0x2fd680,
                homeFristHeader: _0x35774b,
                adScreen: TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_open_screen,
                adChapterHead: TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_chapter_head
              };
            },
            startHwAdNegTimer: function (_0x34f299) {
              setTimeout(() => {
                _0x8f9355.hwAdNegClickTime = 0x0;
              }, 0x3e8 * _0x34f299);
            },
            getEcpmType: _0x61fc7c,
            getEcpmCompareTypes: _0x5ba40f,
            getAdDictConfig: function (_0x1378b0) {
              let _0x18db95 = TACTICS_SDK.getGlobalData("new_ad_pos") && TACTICS_SDK.getGlobalData("new_ad_pos").ad_dict_config;
              if (_0x18db95 && _0x1378b0) {
                const _0x54b180 = JSON.parse(_0x18db95).find(_0x255e33 => _0x255e33.key === _0x1378b0);
                if (_0x54b180 && _0x54b180.val) {
                  return _0x54b180.val;
                }
              }
              return false;
            }
          };
          (_0x511119.g.__proto__ || _0x511119.g).AD_SDK_UTILS = _0x7f6860;
          _0x1a325c["default"] = _0x7f6860;
        },
        0x4e53: (_0x22c56e, _0xe5a12a) => {
          "use strict";

          Object.defineProperty(_0xe5a12a, "__esModule", {
            value: true
          });
          _0xe5a12a["default"] = undefined;
          var _0x151b24 = {
            AD_TYPE: 0x0,
            CURRENT_AD_TYPE: 0x0,
            CURRENT_CONTEXT: null,
            TIMER: null,
            FUNC_NAME: "",
            ARGUMENTS: [],
            TIMES: 0x7d0,
            AD_UTILS_DATA_INIT_TYPE: 0x1,
            CURRENT_REPORT_UTILS: null
          };
          function _0xd8492b(_0x2669fd = false) {
            if (_0x2669fd) {
              _0x151b24.ARGUMENTS = _0x151b24.ARGUMENTS.concat([_0x2669fd]);
            }
            null[""](..._0x151b24.ARGUMENTS);
            _0x151b24.CURRENT_CONTEXT = null;
            _0x151b24.FUNC_NAME = "";
            _0x151b24.ARGUMENTS = [];
            _0x151b24.AD_TYPE = 0x0;
            clearTimeout(null);
            _0x151b24.TIMER = null;
          }
          function _0x15c7a6(_0x59323a) {
            if ("xiaomi" !== _0x59323a) {
              return false;
            }
            let _0x6fcc3b = TACTICS_SDK.getGlobalData("configInfo").config.xiaomi_self_rendering_2;
            _0x6fcc3b = _0x6fcc3b && Number(_0x6fcc3b.val) || 0x0;
            return _0x6fcc3b && DEVICE_UTILS.getHost().versionCode >= 0xa84eb9;
          }
          _0xe5a12a["default"] = {
            ad_utils_init: function () {
              Object.defineProperty(_0x151b24, "AD_TYPE", {
                set: function (_0xc07e45) {
                  _0x151b24.CURRENT_AD_TYPE = _0xc07e45;
                  switch (Number(_0xc07e45)) {
                    case 0x1:
                      _0x151b24.TIMER = setTimeout(() => {
                        LOG("AD_UTILS", "timeout");
                        _0xd8492b(true);
                      }, 0x7d0);
                      break;
                    case 0x2:
                      clearTimeout(null);
                      _0x151b24.TIMER = null;
                  }
                },
                get: function () {
                  return 0x0;
                }
              });
              _0x151b24.AD_UTILS_DATA_INIT_TYPE = 0x2;
            },
            adClickHandler: function (_0x17cba5, _0x2eac7b, _0x5eb9b9) {
              if (true && _0x17cba5 && _0x2eac7b) {
                LOG("AD_UTILS", "adclick");
                _0x151b24.CURRENT_CONTEXT = _0x17cba5;
                _0x151b24.ARGUMENTS = _0x5eb9b9;
                _0x151b24.FUNC_NAME = _0x2eac7b;
                _0x151b24.AD_TYPE = 0x1;
              }
            },
            viewShowHandler: function () {},
            viewHideHandler: function _0x5b7829(_0x2586d8 = true) {
              if ("" || null || !_0x2586d8) {} else {
                setTimeout(() => {
                  _0x5b7829(false);
                }, 0x3e8);
              }
            },
            change_ad_utils_data: function (_0x4e15dd) {
              if ("object" == typeof _0x4e15dd) {
                Object.assign(_0x151b24, _0x4e15dd);
              }
            },
            isXM1: function (_0x125e07) {
              return "xiaomi" === _0x125e07 && !_0x15c7a6(_0x125e07);
            },
            isXM2: _0x15c7a6,
            isVivo1: function (_0x253166) {
              let _0x4b94e7 = false;
              try {
                _0x4b94e7 = _0x253166 && "vivo" == _0x253166.$app.$def.brand && _0x253166.$app.$def.deviceInfo && _0x253166.$app.$def.deviceInfo.platformVersionCode <= 0x445;
              } catch (_0x17e038) {}
              return _0x4b94e7;
            },
            isVivo2: function (_0x329be8) {
              let _0x103566 = false;
              try {
                if (_0x329be8 && "vivo" == _0x329be8.$app.$def.brand) {
                  _0x103566 = true;
                }
                _0x103566 = _0x329be8 && "vivo" == _0x329be8.$app.$def.brand && _0x329be8.$app.$def.deviceInfo && _0x329be8.$app.$def.deviceInfo.platformVersionCode > 0x445;
              } catch (_0x214bbd) {}
              return _0x103566;
            },
            isOpenScreenSlideTouch: function () {
              let _0x4a122e = TACTICS_SDK.getGlobalData("configInfo").config.open_screen_slide_touch;
              return _0x4a122e && Number(_0x4a122e.val) || 0x0;
            },
            simulateAdJump: function _0x2ce88c(_0x418823 = true) {
              if ("" || null || !_0x418823) {
                _0x151b24.AD_TYPE = 0x2;
                _0xd8492b();
              } else {
                setTimeout(() => {
                  _0x2ce88c(true);
                }, 0x0);
              }
            }
          };
        },
        0x91a: (_0x3ac776, _0x297f67, _0x1b7a58) => {
          "use strict";

          Object.defineProperty(_0x297f67, "__esModule", {
            value: true
          });
          _0x297f67["default"] = undefined;
          var _0x5f56af = {
            clickEventNameData: {}
          };
          const _0x5ea614 = {
            clearClickData: function () {
              for (var _0x3607af in _0x5f56af.clickEventNameData) delete _0x5f56af.clickEventNameData[_0x3607af];
            },
            dom_click_vali_shake: function (_0x4161e7, _0x3caf0e = 0x1f4) {
              if (_0x5f56af.clickEventNameData[_0x4161e7]) {
                let _0x2f14df = new Date().getTime();
                if (_0x2f14df <= _0x5f56af.clickEventNameData[_0x4161e7].endTimestamp) {
                  return false;
                }
                {
                  let _0xe82831 = {
                    timestamp: _0x2f14df,
                    endTimestamp: _0x2f14df + _0x3caf0e
                  };
                  _0x5f56af.clickEventNameData[_0x4161e7] = _0xe82831;
                  return true;
                }
              }
              {
                let _0x2cd76c = new Date().getTime();
                _0x5f56af.clickEventNameData[_0x4161e7] = {
                  timestamp: _0x2cd76c,
                  endTimestamp: _0x2cd76c + _0x3caf0e
                };
                return true;
              }
            },
            click_utils_data: _0x5f56af
          };
          (_0x1b7a58.g.__proto__ || _0x1b7a58.g).CLICK_UTILS = _0x5ea614;
          _0x297f67["default"] = _0x5ea614;
        },
        0x62e: (_0x3b924f, _0xa7127c, _0x4fe09f) => {
          "use strict";

          Object.defineProperty(_0xa7127c, "__esModule", {
            value: true
          });
          _0xa7127c["default"] = undefined;
          var _0x8922f0;
          var _0x563a37 = (_0x8922f0 = $app_require$("@app-module/system.router")) && _0x8922f0.__esModule ? _0x8922f0 : {
            default: _0x8922f0
          };
          function _0x21c48f(_0x298e0c, _0x35ec26) {
            var _0x16552c = Object.keys(_0x298e0c);
            if (Object.getOwnPropertySymbols) {
              var _0x3269ad = Object.getOwnPropertySymbols(_0x298e0c);
              if (_0x35ec26) {
                _0x3269ad = _0x3269ad.filter(function (_0x56fdc3) {
                  return Object.getOwnPropertyDescriptor(_0x298e0c, _0x56fdc3).enumerable;
                });
              }
              _0x16552c.push.apply(_0x16552c, _0x3269ad);
            }
            return _0x16552c;
          }
          function _0x236d55(_0xf207a1) {
            for (var _0x36e39c = 0x1; _0x36e39c < arguments.length; _0x36e39c++) {
              var _0xd21522 = null != arguments[_0x36e39c] ? arguments[_0x36e39c] : {};
              if (_0x36e39c % 0x2) {
                _0x21c48f(Object(_0xd21522), true).forEach(function (_0x1eb19b) {
                  _0x15d900(_0xf207a1, _0x1eb19b, _0xd21522[_0x1eb19b]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(_0xf207a1, Object.getOwnPropertyDescriptors(_0xd21522));
              } else {
                _0x21c48f(Object(_0xd21522)).forEach(function (_0x5ec29b) {
                  Object.defineProperty(_0xf207a1, _0x5ec29b, Object.getOwnPropertyDescriptor(_0xd21522, _0x5ec29b));
                });
              }
            }
            return _0xf207a1;
          }
          function _0x15d900(_0x4f241c, _0x88660e, _0x9743b5) {
            if ((_0x88660e = function (_0x15d324) {
              var _0xfcfcc3 = function (_0x3ef1e) {
                if ("object" != typeof _0x3ef1e || !_0x3ef1e) {
                  return _0x3ef1e;
                }
                var _0x4ff2b8 = _0x3ef1e[Symbol.toPrimitive];
                if (undefined !== _0x4ff2b8) {
                  var _0x291e5e = _0x4ff2b8.call(_0x3ef1e, "string");
                  if ("object" != typeof _0x291e5e) {
                    return _0x291e5e;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(_0x3ef1e);
              }(_0x15d324);
              return "symbol" == typeof _0xfcfcc3 ? _0xfcfcc3 : _0xfcfcc3 + "";
            }(_0x88660e)) in _0x4f241c) {
              Object.defineProperty(_0x4f241c, _0x88660e, {
                value: _0x9743b5,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              _0x4f241c[_0x88660e] = _0x9743b5;
            }
            return _0x4f241c;
          }
          var _0x409c64 = {
            ext_field_10: "",
            ext_field_4: "",
            ext_field_1: "",
            page_url: "",
            isCheckReport: false,
            channelId: "",
            linkId: "",
            utm_ad_id: "",
            utm_campaign: "",
            utm_content: "",
            utm_source: "",
            utm_term: "",
            utm_medium: "",
            init_status: 0x0,
            deviceIdPageAd: {}
          };
          function _0x5b047a(_0x32f61b, _0x273b3e) {
            if (_0x409c64.hasOwnProperty(_0x32f61b)) {
              _0x409c64[_0x32f61b] = _0x273b3e;
              console.log("=============>set_attr", _0x32f61b, _0x273b3e, _0x409c64);
            } else {
              console.error("common_report_utils.js -> function (set_attr) error -> reason:reprot_utils_data key:" + _0x32f61b + " is undefined");
            }
          }
          function _0x1b074a(_0x452ac5) {
            const {
              ext_field_10: _0x5013bd,
              page_url: _0x336853,
              ext_field_4: _0x4935d5,
              ext_field_1: _0x27d94e
            } = _0x409c64;
            try {
              let _0x532500 = JSON.parse(JSON.stringify(_0x452ac5));
              LOG("reportFunc==========>", _0x236d55(_0x236d55({}, _0x532500), {}, {
                ext_field_10: _0x5013bd,
                page_url: _0x336853
              }));
              REPORT_SDK.report(_0x236d55(_0x236d55({}, _0x532500), {}, {
                ext_field_10: _0x5013bd,
                page_url: _0x336853,
                ext_field_4: _0x4935d5,
                ext_field_1: _0x27d94e
              }));
            } catch (_0x3aa0cc) {}
          }
          function _0x30f1b8(_0x45867f, _0xa5e79e, _0x109f31) {
            if (_0x45867f && _0xa5e79e) {
              const _0x51893c = _0x409c64[_0x45867f];
              _0x5b047a(_0x45867f, _0xa5e79e);
              if (_0x109f31) {
                _0x109f31();
              }
              _0x5b047a(_0x45867f, _0x51893c || "");
            } else if (_0x109f31) {
              _0x109f31();
            }
          }
          let _0x1a49bb = null;
          function _0x4a7516(_0xb7c0e5, _0x5f582a) {
            try {
              let _0x470af0 = TACTICS_SDK.getGlobalData("configInfo").config.is_single_report_open;
              _0x470af0 = _0x470af0 && Number(_0x470af0.val) || 0x0;
              let _0x37f6e6 = TACTICS_SDK.getGlobalData("configInfo").config.single_report_time;
              _0x37f6e6 = _0x37f6e6 && Number(_0x37f6e6.val) || 0x0;
              if (!_0x470af0 || !_0x37f6e6) {
                return false;
              }
              const _0x20b2a3 = _0xb7c0e5 + REPORT_SDK.get_attr("device_id") + _0x563a37["default"].getState().path + _0x5f582a;
              if (_0x409c64.deviceIdPageAd.hasOwnProperty(_0x20b2a3)) {
                LOG("isInvalidAdClickLOG重复key不上报:", _0x20b2a3);
                return true;
              }
              _0x409c64.deviceIdPageAd[_0x20b2a3] = _0x37f6e6;
              LOG("isInvalidAdClickLOG上报已被标记:", _0x20b2a3);
              if (!_0x1a49bb) {
                _0x1a49bb = setInterval(() => {
                  try {
                    const _0x95db5e = Object.keys(_0x409c64.deviceIdPageAd);
                    for (let _0x1d3ae2 = 0x0; _0x1d3ae2 < _0x95db5e.length; _0x1d3ae2++) {
                      const _0x5825df = _0x95db5e[_0x1d3ae2];
                      _0x409c64.deviceIdPageAd[_0x5825df] = _0x409c64.deviceIdPageAd[_0x5825df] - 0x1;
                      if (_0x409c64.deviceIdPageAd[_0x5825df] <= 0x0) {
                        delete _0x409c64.deviceIdPageAd[_0x5825df];
                        LOG("isInvalidAdClickLOG倒计时结束，删除上报标识:", _0x5825df);
                      }
                    }
                    if (0x0 === _0x95db5e.length) {
                      clearInterval(_0x1a49bb);
                      _0x1a49bb = null;
                      LOG("isInvalidAdClickLOG已无上报标识，清除setInterval");
                    }
                  } catch (_0x2e859b) {
                    LOG("isInvalidAdClickLOG", _0x2e859b);
                  }
                }, 0x3e8);
              }
            } catch (_0x19b41b) {
              LOG("isInvalidAdClickLOG", _0x19b41b);
            }
            return false;
          }
          const _0x50726f = {
            set_attr: _0x5b047a,
            report_initSdk: function (_0x4a28b1) {
              if ("object" != typeof _0x4a28b1 || _0x409c64.init_status) {
                return;
              }
              _0x5b047a("init_status", 0x1);
              const {
                channelId: _0x393b47,
                linkId: _0x5d3d68,
                utm_ad_id: _0x39bccc,
                utm_campaign: _0x430c14,
                utm_content: _0x5a43f1,
                utm_source: _0xa030a2,
                utm_term: _0x1de637,
                utm_medium: _0x18f7de
              } = _0x4a28b1;
              _0x409c64 = Object.assign({}, _0x409c64, _0x4a28b1);
              REPORT_SDK.sdk_init({
                qd_id: _0x393b47,
                link_id: _0x5d3d68,
                utm_ad_id: _0x39bccc,
                utm_campaign: _0x430c14,
                utm_content: _0x5a43f1,
                utm_source: _0xa030a2,
                utm_medium: _0x18f7de,
                menu_bar: 0x0,
                login_state: 0x0,
                pay_state: 0x0,
                mode_state: 0x0
              });
            },
            page_show_report: function (_0x8da056, _0xeded2a = "", _0x22ba4c = "", _0x3217f1 = "", _0x5cd2fe = "", _0xab884e = "") {
              try {
                _0x1b074a({
                  event_id: "page_show",
                  event_name: "n_页面展示",
                  referer: _0x8da056,
                  result: _0xeded2a,
                  page_name: _0x22ba4c,
                  page_type: _0x3217f1,
                  utm_term: _0xab884e,
                  ext_field_9: _0x5cd2fe
                });
              } catch (_0x5c6062) {}
            },
            pop_show_report: function (_0x48dea5, _0x4d1d19, _0x46ed70, _0x4d50fc, _0x28c777, _0x12e85e = "原生") {
              try {
                _0x1b074a({
                  event_id: "popup_show",
                  event_name: "n_弹窗展示",
                  ad_position: _0x48dea5,
                  page_type: _0x4d1d19,
                  ad_network: _0x46ed70,
                  referer: _0x4d50fc,
                  ext_field_9: _0x28c777,
                  ad_type: _0x12e85e
                });
              } catch (_0x117708) {}
            },
            page_click_report: function (_0x5e0f22, _0x4bc1e0 = "", _0x4aed4f = "", _0x50e51e = "", _0x52fabb = "", _0x1d84d2 = "", _0x1dda6d = 0x0, _0x49a880 = "") {
              try {
                _0x1b074a({
                  event_id: "page_click",
                  event_name: "n_页面点击元素",
                  element_name: _0x5e0f22,
                  result: _0x4aed4f,
                  page_name: _0x50e51e,
                  ad_position: _0x52fabb,
                  page_type: _0x1d84d2,
                  duration: _0x1dda6d,
                  ext_field_9: _0x4bc1e0,
                  ext_field_1: _0x49a880
                });
              } catch (_0x36d5c4) {}
            },
            pop_click_report: function (_0x12a3cb, _0x499a93, _0x150841, _0x439c04, _0x375684, _0x27d427, _0x720366) {
              try {
                _0x1b074a({
                  event_id: "popup_click",
                  event_name: "n_弹窗点击",
                  ad_position: _0x12a3cb,
                  result: _0x499a93,
                  ad_network: _0x150841,
                  ad_type: _0x439c04,
                  element_name: _0x375684,
                  ext_field_9: _0x27d427,
                  scene: _0x720366
                });
              } catch (_0x1a7166) {}
            },
            hap_report: function (_0x298d4c = "", _0xde04c = "", _0x3c920e = "", _0x58a129 = "", _0x28dec6 = "", _0x4cd861 = "", _0x22f83e = "", _0x416171 = "") {
              try {
                _0x1b074a({
                  event_id: "hap",
                  event_name: "启动",
                  ad_type: _0x298d4c,
                  ad_position: _0xde04c,
                  ad_id: _0x3c920e,
                  ad_style: _0x58a129,
                  element_name: _0x28dec6,
                  page_type: _0x4cd861,
                  result: _0x22f83e,
                  scene: _0x416171
                });
              } catch (_0x2c8081) {}
            },
            add_icon_report: function (_0x549c93, _0x2489f7, _0x3a9779, _0xde0c94 = "") {
              try {
                _0x1b074a({
                  event_id: "add_icon",
                  event_name: "创建图标",
                  result: _0x549c93,
                  scene: _0x2489f7,
                  referer: _0x3a9779,
                  page_name: _0xde0c94
                });
              } catch (_0x248478) {}
            },
            error_log_report: function (_0x57dc8e, _0x313b78, _0x2207aa, _0x5b0793) {
              try {
                _0x1b074a({
                  event_id: "error_log",
                  event_name: "系统异常",
                  page_name: _0x57dc8e,
                  result: _0x313b78,
                  referer: _0x2207aa,
                  page_type: _0x5b0793
                });
              } catch (_0x20b894) {}
            },
            used_duration_report: function (_0x6684e2) {
              try {
                _0x1b074a({
                  event_id: "used_duration",
                  event_name: "用户使用时长",
                  duration: _0x6684e2
                });
              } catch (_0x42ef74) {}
            },
            strategy_obtain_report: function (_0x394b71, _0x1b1b53, _0x5c6a09, _0x206c74, _0x3b5398) {
              try {
                _0x1b074a({
                  event_id: "strategy_obtain",
                  event_name: "策略获取",
                  result: _0x394b71,
                  element_name: _0x1b1b53,
                  referer: _0x5c6a09,
                  ext_field_4: _0x206c74,
                  scene: _0x3b5398
                });
              } catch (_0x9b3a06) {}
            },
            ad_overtime_report: function (_0xb964b1) {
              try {
                _0x1b074a({
                  event_id: "ad_overtime",
                  event_name: "广告跳转超时",
                  ad_position: _0xb964b1
                });
              } catch (_0x15d6c3) {}
            },
            back_click_report: function (_0x513dc9, _0x4d7059, _0x497322) {
              try {
                _0x1b074a({
                  event_id: "back_click",
                  event_name: "物理返回",
                  ad_position: _0x513dc9,
                  page_type: _0x4d7059,
                  element_name: _0x497322
                });
              } catch (_0x1c8ca8) {}
            },
            app_state_report: function (_0x2b46ca, _0x54d1e, _0x179eab = "") {
              try {
                _0x1b074a({
                  event_id: "app_state",
                  event_name: "应用状态",
                  referer: _0x2b46ca,
                  result: _0x54d1e,
                  utm_term: _0x179eab
                });
              } catch (_0xd5b1e2) {}
            },
            ad_sdk_request_report: function (_0x653c27, _0x1bb3a8, _0x4b613f, _0x121daa, _0x3cb110, _0x8d64ae, _0x2d8cad, _0x4e5f84 = "1", _0x477aa0 = "null") {
              try {
                _0x1b074a({
                  event_id: "ad_sdk_request",
                  event_name: "广告请求SDK",
                  ad_id: _0x653c27,
                  ad_network: _0x1bb3a8,
                  ad_type: _0x4b613f,
                  page_name: _0x121daa,
                  page_type: _0x3cb110,
                  ad_position: _0x8d64ae,
                  result: _0x2d8cad,
                  ext_field_9: _0x4e5f84,
                  ad_style: _0x477aa0
                });
              } catch (_0x5b10cf) {}
            },
            ad_sdk_show_report: function (_0x11fb5d, _0x25da92, _0x7d1897, _0x204fc3, _0x41fde1, _0x3fffe3, _0x232494 = "1", _0x49f0ca = "null", _0x1700f4 = "", _0x3c6a4f, _0x40b97e, _0x43c225) {
              try {
                _0x30f1b8("ext_field_1", _0x3c6a4f, () => {
                  _0x1b074a({
                    event_id: "ad_sdk_show",
                    event_name: "广告展示SDK",
                    ad_id: _0x11fb5d,
                    ad_network: _0x25da92,
                    ad_type: _0x7d1897,
                    page_name: _0x204fc3,
                    page_type: _0x41fde1,
                    ad_position: _0x3fffe3,
                    ext_field_9: _0x232494,
                    ad_style: _0x49f0ca,
                    result: _0x1700f4,
                    ext_field_2: _0x40b97e,
                    ext_field_7: _0x43c225
                  });
                });
              } catch (_0x5eb1e5) {}
            },
            ad_sdk_click_report: function (_0x5deca6, _0x581ef7, _0xac8df2, _0x572b57, _0x2a14ae, _0x529990, _0x31ceae, _0xb03d = "1", _0x1add11 = "null", _0x3fb4c4, _0x5aa27d, _0x3615fe, _0x108a7f, _0x179516) {
              if (CLICK_UTILS.dom_click_vali_shake("ad_sdk_click_report" + _0x5deca6, 0x3e8)) {
                if (!_0x4a7516("ad_sdk_click", _0x5deca6)) {
                  try {
                    _0x30f1b8("ext_field_1", _0x5aa27d, () => {
                      _0x1b074a({
                        event_id: "ad_sdk_click",
                        event_name: "广告点击SDK",
                        ad_id: _0x5deca6,
                        ad_network: _0x581ef7,
                        ad_type: _0xac8df2,
                        page_name: _0x572b57,
                        page_type: _0x2a14ae,
                        ad_position: _0x529990,
                        element_name: _0x31ceae,
                        ext_field_9: _0xb03d,
                        ad_style: _0x1add11,
                        scene: _0x3fb4c4,
                        ext_field_2: _0x3615fe,
                        utm_term: _0x108a7f,
                        ext_field_7: _0x179516
                      });
                    });
                  } catch (_0x4e9e65) {}
                }
              } else {
                LOG("广告点击SDK上报防抖拦截");
              }
            },
            custom_popup_show_report: function (_0x2bb1fe, _0x4b1b76, _0x288384, _0x5c1955, _0x5d2692, _0x8646ae, _0x18bbf2, _0xe43768, _0x4a37c5 = "", _0x3fe072 = "", _0x3f5a3d, _0x4f5556 = "原生", _0x5b050f) {
              try {
                _0x30f1b8("ext_field_1", _0x5b050f, () => {
                  _0x1b074a({
                    event_id: "custom_popup_show",
                    event_name: "n_自定义弹窗展示",
                    ad_id: _0x4a37c5,
                    ad_network: _0x2bb1fe,
                    page_type: _0x4b1b76,
                    ad_position: _0x288384,
                    ad_style: _0x5c1955,
                    page_name: _0x5d2692,
                    ad_type: _0x4f5556,
                    ext_field_9: _0x8646ae,
                    ext_field_2: _0x18bbf2,
                    ext_field_3: _0xe43768,
                    scene: _0x3fe072,
                    referer: _0x3f5a3d
                  });
                });
              } catch (_0x16c4c4) {}
            },
            custom_popup_click_report: function (_0x291075, _0x5e8c76, _0x28aa74, _0x5296c1, _0x1bce2d, _0x237d8e, _0x42fe85, _0x36b342, _0x5c8bc7, _0x1d7734 = "", _0x566cdc = "", _0x5e0d79, _0x576cb7 = "原生", _0xb6ea6b) {
              if (-0x1 == ["素材中", "正向按钮", "关闭按钮wh触广告", "负向按钮wh触广告", "摇一摇正向按钮"].indexOf(_0x5296c1) || !_0x4a7516("custom_popup_click", _0x1d7734)) {
                try {
                  _0x30f1b8("ext_field_1", _0xb6ea6b, () => {
                    _0x1b074a({
                      event_id: "custom_popup_click",
                      event_name: "n_自定义弹窗点击",
                      page_type: _0x291075,
                      ad_position: _0x5e8c76,
                      ad_network: _0x28aa74,
                      element_name: _0x5296c1,
                      ad_style: _0x1bce2d,
                      page_name: _0x237d8e,
                      ext_field_9: _0x42fe85,
                      ad_type: _0x576cb7,
                      ad_id: _0x1d7734,
                      scene: _0x566cdc,
                      ext_field_2: _0x36b342,
                      ext_field_3: _0x5c8bc7,
                      referer: _0x5e0d79
                    });
                  });
                } catch (_0x3c035c) {}
              }
            },
            custom_back_popup_show_report: function (_0x467252, _0x169c5f, _0x38b146, _0x481c36, _0x43762a = "原生") {
              try {
                _0x1b074a({
                  event_id: "custom_back_popup_show",
                  event_name: "n_自定义返回弹窗展示",
                  ad_network: _0x38b146,
                  page_type: _0x467252,
                  ad_position: _0x169c5f,
                  ad_style: _0x481c36,
                  ad_type: _0x43762a
                });
              } catch (_0x420a5c) {}
            },
            custom_back_popup_click_report: function (_0x197a2a, _0x1175cd, _0x5b229b, _0x2150da, _0x11d9ce, _0x55c81d = "原生") {
              try {
                _0x1b074a({
                  event_id: "custom_back_popup_click",
                  event_name: "n_自定义返回弹窗点击",
                  ad_network: _0x5b229b,
                  page_type: _0x197a2a,
                  ad_position: _0x1175cd,
                  element_name: _0x2150da,
                  ad_style: _0x11d9ce,
                  ad_type: _0x55c81d
                });
              } catch (_0x581a76) {}
            },
            page_popup_click_report: function (_0x1f7574, _0x2de8b9) {
              try {
                _0x1b074a({
                  event_id: "page_popup_click",
                  event_name: "n_拉起首个弹窗点击",
                  page_type: _0x1f7574,
                  ad_position: _0x2de8b9
                });
              } catch (_0x540aac) {}
            },
            page_close_report: function (_0x3882d7) {
              try {
                _0x1b074a({
                  event_id: "page_close",
                  event_name: "n_页面关闭",
                  ext_field_9: _0x3882d7
                });
              } catch (_0x11dd4a) {}
            },
            ad_sdk_take: function (_0x469240, _0x1ccc93) {
              try {
                _0x1b074a({
                  event_id: "ad_sdk_take",
                  event_name: "广告拿取SDK",
                  ad_id: _0x469240.id,
                  ad_network: _0x469240.ad_network,
                  ad_type: _0x469240.ad_type,
                  page_name: _0x469240.scenario,
                  page_type: _0x469240.popGroupName,
                  ad_position: _0x469240.popName,
                  ad_style: _0x469240.ad_style,
                  ext_field_9: String(_0x469240.adRequestNum),
                  page_url: _0x1ccc93,
                  result: _0x469240.result,
                  referer: _0x469240.referer || ""
                });
              } catch (_0x37e652) {}
            },
            ad_sdk_back: function (_0x5dd98a, _0x358a49) {
              try {
                _0x1b074a({
                  event_id: "ad_sdk_back",
                  event_name: "广告回池SDK",
                  ad_id: _0x5dd98a.id,
                  ad_network: _0x5dd98a.ad_network,
                  ad_type: _0x5dd98a.ad_type,
                  page_name: _0x5dd98a.scenario,
                  page_type: _0x5dd98a.popGroupName,
                  ad_position: _0x5dd98a.popName,
                  ad_style: _0x5dd98a.ad_style,
                  ext_field_9: String(_0x5dd98a.adRequestNum),
                  page_url: _0x358a49,
                  result: _0x5dd98a.result
                });
              } catch (_0x435093) {}
            },
            app_hxuup: function (_0x4b8c84, _0x239447) {
              try {
                _0x1b074a({
                  event_id: TOOLS_UTILS.renameConfig("`oo^v`jdto"),
                  event_name: "APP唤醒",
                  ad_id: _0x4b8c84.id,
                  ad_type: _0x4b8c84.ad_type,
                  page_name: _0x4b8c84.scenario,
                  page_type: _0x4b8c84.popGroupName,
                  ad_position: _0x4b8c84.popName,
                  ext_field_9: String(_0x4b8c84.adRequestNum),
                  page_url: _0x239447
                });
              } catch (_0xf60d69) {}
            },
            area_show_report: function (_0xf7094c, _0x3787bf, _0x328068, _0x45d8d3, _0xca9d36) {
              try {
                _0x1b074a({
                  event_id: "area_show",
                  event_name: "n_区域展示",
                  ad_network: _0x328068,
                  ad_type: _0x45d8d3,
                  page_name: _0xca9d36,
                  page_type: _0xf7094c,
                  ad_position: _0x3787bf
                });
              } catch (_0x51fa4a) {}
            },
            monitor_control_index_report: function (_0x58f2c1, _0x521075, _0x567d52 = "") {
              const {
                ext_field_10: _0x136830
              } = _0x409c64;
              try {
                let _0x297c92 = JSON.parse(JSON.stringify({
                  event_id: "monitor_control_index",
                  event_name: "监控指标",
                  page_type: _0x58f2c1,
                  duration: _0x521075,
                  result: _0x567d52
                }));
                LOG("reportFunc==========>monitor_control_index_report", _0x236d55(_0x236d55({}, _0x297c92), {}, {
                  page_url: _0x136830
                }));
                REPORT_SDK.report(_0x236d55(_0x236d55({}, _0x297c92), {}, {
                  page_url: _0x136830
                }));
              } catch (_0x4fef6b) {}
            },
            ad_sdk_install_report: function (_0x5e8d0e, _0x1b9a8d, _0x2788a8, _0x55e5f1, _0x250225, _0x39eaca, _0x1ad83e, _0x1b12e6 = "1", _0x41a462 = "null", _0x290697) {
              try {
                _0x30f1b8("ext_field_1", _0x290697, () => {
                  _0x1b074a({
                    event_id: "Install_status",
                    event_name: "安装状态监听",
                    ad_id: _0x5e8d0e,
                    ad_network: _0x1b9a8d,
                    ad_type: _0x2788a8,
                    page_name: _0x55e5f1,
                    page_type: _0x250225,
                    ad_position: _0x39eaca,
                    element_name: _0x1ad83e,
                    ext_field_9: _0x1b12e6,
                    ad_style: _0x41a462
                  });
                });
              } catch (_0x5c1bcb) {}
            },
            list_show_report: function (_0x46b4e6, _0x49495f, _0x2f2df7) {
              try {
                _0x1b074a({
                  event_id: "list_show",
                  event_name: "列表曝光",
                  page_type: _0x46b4e6,
                  item_ids: _0x49495f,
                  result: _0x2f2df7
                });
              } catch (_0x567dd3) {}
            },
            list_click_report: function (_0xbb53cb, _0x15d8d2, _0x4b7e83) {
              try {
                _0x1b074a({
                  event_id: "list_click",
                  event_name: "列表点击",
                  page_type: _0xbb53cb,
                  item_ids: _0x15d8d2,
                  result: _0x4b7e83
                });
              } catch (_0x35b8a9) {}
            },
            notification_show_report: function (_0x6560dd, _0x5ee0d5, _0x3785f7, _0x2525a3 = "", _0x482e06 = "") {
              try {
                _0x1b074a({
                  event_id: "message_show",
                  event_name: "通知消息推送",
                  page_type: _0x6560dd,
                  element_name: _0x5ee0d5,
                  page_name: _0x3785f7,
                  ad_position: _0x2525a3,
                  result: _0x482e06
                });
              } catch (_0xe90339) {}
            },
            notification_click_report: function (_0x20b550, _0x2dd88f, _0x52445d, _0x3760e1 = "", _0x145046 = "") {
              try {
                _0x1b074a({
                  event_id: "message_click",
                  event_name: "通知消息点击",
                  page_type: _0x20b550,
                  element_name: _0x2dd88f,
                  page_name: _0x52445d,
                  ad_position: _0x3760e1,
                  result: _0x145046
                });
              } catch (_0x351fc5) {}
            },
            ad_cancel_report: function (_0x37004c, _0x162756 = "", _0x38d8df = "") {
              try {
                _0x1b074a({
                  event_id: "ad_cancel",
                  event_name: "广告免除",
                  referer: _0x37004c,
                  page_name: _0x38d8df,
                  result: _0x162756
                });
              } catch (_0x14cac6) {}
            },
            element_show_report: function (_0xf98786 = "", _0x25db4c = 0x0, _0x31bbdb = "") {
              try {
                _0x1b074a({
                  event_id: "element_show",
                  event_name: "n_页面展示元素",
                  duration: _0x25db4c,
                  element_name: _0x31bbdb,
                  result: _0xf98786
                });
              } catch (_0x3abf05) {}
            },
            return_source_app_report: function (_0xbdb7f7 = "") {
              try {
                _0x30f1b8("page_url", _0xbdb7f7, () => {
                  _0x1b074a({
                    event_id: "return_source_app",
                    event_name: "返回来源应用"
                  });
                });
              } catch (_0x246bb0) {}
            }
          };
          (_0x4fe09f.g.__proto__ || _0x4fe09f.g).COMMON_REPORT_UTILS = _0x50726f;
          _0xa7127c["default"] = _0x50726f;
        },
        0xe367: (_0x233bf3, _0x145446) => {
          "use strict";

          function _0x5896cf(_0x792ea, _0x203c76) {
            var _0x32ed13 = Object.keys(_0x792ea);
            if (Object.getOwnPropertySymbols) {
              var _0x247b9d = Object.getOwnPropertySymbols(_0x792ea);
              if (_0x203c76) {
                _0x247b9d = _0x247b9d.filter(function (_0x1b8879) {
                  return Object.getOwnPropertyDescriptor(_0x792ea, _0x1b8879).enumerable;
                });
              }
              _0x32ed13.push.apply(_0x32ed13, _0x247b9d);
            }
            return _0x32ed13;
          }
          function _0x3c459d(_0x51e280) {
            for (var _0x309180 = 0x1; _0x309180 < arguments.length; _0x309180++) {
              var _0x2a9385 = null != arguments[_0x309180] ? arguments[_0x309180] : {};
              if (_0x309180 % 0x2) {
                _0x5896cf(Object(_0x2a9385), true).forEach(function (_0x2faa5b) {
                  _0x29feb3(_0x51e280, _0x2faa5b, _0x2a9385[_0x2faa5b]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(_0x51e280, Object.getOwnPropertyDescriptors(_0x2a9385));
              } else {
                _0x5896cf(Object(_0x2a9385)).forEach(function (_0x18c729) {
                  Object.defineProperty(_0x51e280, _0x18c729, Object.getOwnPropertyDescriptor(_0x2a9385, _0x18c729));
                });
              }
            }
            return _0x51e280;
          }
          function _0x29feb3(_0x3c8c7f, _0x462647, _0x344f55) {
            if ((_0x462647 = function (_0x180c0c) {
              var _0x4b0233 = function (_0x20901a) {
                if ("object" != typeof _0x20901a || !_0x20901a) {
                  return _0x20901a;
                }
                var _0x5b0464 = _0x20901a[Symbol.toPrimitive];
                if (undefined !== _0x5b0464) {
                  var _0x72fd36 = _0x5b0464.call(_0x20901a, "string");
                  if ("object" != typeof _0x72fd36) {
                    return _0x72fd36;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(_0x20901a);
              }(_0x180c0c);
              return "symbol" == typeof _0x4b0233 ? _0x4b0233 : _0x4b0233 + "";
            }(_0x462647)) in _0x3c8c7f) {
              Object.defineProperty(_0x3c8c7f, _0x462647, {
                value: _0x344f55,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              _0x3c8c7f[_0x462647] = _0x344f55;
            }
            return _0x3c8c7f;
          }
          Object.defineProperty(_0x145446, "__esModule", {
            value: true
          });
          _0x145446.Countdown = undefined;
          class _0x336763 {
            static ["isEmpty"](_0x2ae3bf) {
              let _0x4c1cf4;
              if ("object" == typeof _0x2ae3bf && null !== _0x2ae3bf) {
                _0x4c1cf4 = Object.keys(_0x2ae3bf).length > 0x0;
              }
              return !_0x4c1cf4;
            }
            static ["fixTime"](_0x46b5f5) {
              return _0x46b5f5 ? 0xd === String(_0x46b5f5).length ? parseInt(String(Number(_0x46b5f5) / 0x3e8)) : Number(_0x46b5f5) : "";
            }
            ["translateTime"](_0x3691df) {
              let _0x274987 = _0x336763.fixTime(_0x3691df);
              const _0x5aa95a = Math.floor(_0x274987 / 0xe10 / 0x18);
              const _0x38dbfe = this.useHeaven ? Math.floor(_0x274987 / 0xe10 % 0x18) : Math.floor(_0x274987 / 0xe10);
              const _0x5cd2d6 = Math.floor(_0x274987 / 0x3c % 0x3c);
              const _0xe95dc4 = Math.floor(_0x274987 % 0x3c);
              const _0x46aee8 = this.msArr[this.msIndex];
              this.msIndex++;
              return {
                heaven: _0x5aa95a,
                hour: _0x38dbfe < 0xa ? "0" + _0x38dbfe : String(_0x38dbfe),
                minute: _0x5cd2d6 < 0xa ? "0" + _0x5cd2d6 : String(_0x5cd2d6),
                second: _0xe95dc4 < 0xa ? "0" + _0xe95dc4 : String(_0xe95dc4),
                ms: _0x46aee8
              };
            }
            constructor(_0x22d654 = {}) {
              const {
                useMs: _0x294d8c = 0x1,
                useHeaven: _0x258dfb,
                useNowTime: _0x5a8a21
              } = _0x22d654;
              this.useMs = _0x294d8c;
              this.useHeaven = _0x258dfb;
              this.useNowTime = _0x5a8a21;
              let _0x24cf11 = _0x294d8c;
              for (this.msArr = []; _0x24cf11 >= 0x0;) {
                this.msArr.push(String(_0x24cf11 - 0x1));
                _0x24cf11--;
              }
              this.msIndex = 0x0;
              this.init();
            }
            ["start"](_0x4b8e99, _0xc38456) {
              this.init();
              const _0x37e59a = _0x336763.isEmpty(_0x4b8e99);
              const _0x4675d4 = _0x336763.isEmpty(this.config);
              if (_0x37e59a) {
                this.error = "params error!";
                return this;
              }
              _0x4b8e99 = _0x4675d4 ? _0x4b8e99 : this.config;
              if (_0x4675d4) {
                this.config = _0x4b8e99;
              }
              this.cb = _0xc38456;
              const _0x11a4a9 = 0x3e8 / this.useMs;
              Object.assign(_0x4b8e99, {
                startTime: _0x336763.fixTime(_0x4b8e99.startTime),
                endTime: _0x336763.fixTime(_0x4b8e99.endTime),
                nowTime: _0x336763.fixTime(_0x4b8e99.nowTime)
              });
              const {
                endTime: _0x1dd739
              } = _0x4b8e99;
              clearInterval(this.timer);
              this.timer = setInterval(() => {
                const _0x4e089f = _0x4b8e99.nowTime || parseInt(String(new Date().getTime() / 0x3e8));
                if (this.msIndex === this.useMs) {
                  this.msIndex = 0x0;
                }
                const _0x8288c6 = this.translateTime(_0x1dd739 - _0x4e089f);
                if (_0x4e089f - 0x1 >= _0x1dd739) {
                  clearInterval(this.timer);
                  if (_0xc38456) {
                    _0xc38456(null);
                  }
                  if (this.callback) {
                    this.callback(null);
                  }
                } else {
                  if (_0xc38456) {
                    _0xc38456(_0x8288c6);
                  }
                  if (this.callback) {
                    this.callback(_0x8288c6);
                  }
                }
                if (this.useNowTime && (0x1 === this.useMs || this.msIndex === this.msArr.length - 0x1)) {
                  this.config.nowTime += 0x1;
                }
              }, _0x11a4a9);
              return this;
            }
            ["stop"]() {
              clearInterval(this.timer);
              this.init();
              return this;
            }
            ["restart"](_0x41530f, _0x58bd0e) {
              this.stop();
              const _0x292803 = _0x58bd0e || this.cb;
              this.start(_0x3c459d(_0x3c459d({}, this.config), _0x41530f), _0x292803);
              return this;
            }
            ["init"]() {
              this.config = {};
              this.cb = null;
              this.error = "";
            }
            ["then"](_0x320e45) {
              this.callback = _0x320e45;
              if (this.useNowTime) {
                this.config.nowTime += 0x1;
              }
              this.start(this.config);
              return this;
            }
            ["finally"](_0x4a208e) {
              this.callback = _0x4a208e;
              this.restart(this.config);
              return this;
            }
            ["catch"](_0x255d92) {
              _0x255d92(this.error);
            }
          }
          _0x145446.Countdown = _0x336763;
        },
        0x154d1: (_0x194aea, _0x585b68) => {
          "use strict";

          Object.defineProperty(_0x585b68, "__esModule", {
            value: true
          });
          _0x585b68["default"] = undefined;
          var _0x730a87 = $app_require$("@app-module/system.device") && $app_require$("@app-module/system.device").__esModule ? $app_require$("@app-module/system.device") : {
            default: $app_require$("@app-module/system.device")
          };
          var _0x2b9fe5 = $app_require$("@app-module/system.sensor") && $app_require$("@app-module/system.sensor").__esModule ? $app_require$("@app-module/system.sensor") : {
            default: $app_require$("@app-module/system.sensor")
          };
          var _0x5db90d = $app_require$("@app-module/system.vibrator") && $app_require$("@app-module/system.vibrator").__esModule ? $app_require$("@app-module/system.vibrator") : {
            default: $app_require$("@app-module/system.vibrator")
          };
          var _0xe5beb8 = {
            getInfo: null,
            getId: null,
            getUserId: null,
            getOAID: null,
            getPlatform: null,
            getHost: null,
            geolocation: null
          };
          function _0xda591() {
            console.log("unbindShake===>>>>");
            _0x2b9fe5["default"].unsubscribeAccelerometer();
          }
          _0x585b68["default"] = {
            getInfo: function () {
              return new Promise((_0x4df639, _0x2d4616) => {
                _0x4df639(null);
              });
            },
            getId: function (_0x3a8d6e = ["device", "mac"]) {
              return new Promise((_0x5c5e40, _0xbadf8d) => {
                _0x5c5e40({
                  id: null,
                  mac: _0xe5beb8.mac
                });
              });
            },
            getUserId: function () {
              return new Promise((_0x4ee02a, _0x4d1fcc) => {
                _0x4ee02a(null);
              });
            },
            getOAID: function () {
              return new Promise((_0x368967, _0x346587) => {
                _0x368967(null);
              });
            },
            getPlatform: function () {
              _0xe5beb8.getPlatform = _0x730a87["default"].platform;
              return null;
            },
            getHost: function () {
              _0xe5beb8.getHost = _0x730a87["default"].host;
              return null;
            },
            getGeolocation: function () {
              return new Promise(_0x2f9147 => {
                _0x2f9147(null);
              });
            },
            bindShake: function (_0x2cff06, _0x252e28) {
              console.log("bindShake===>>>>");
              let _0x32f057 = false;
              return new Promise((_0x5e0dbf, _0x1f4ebd) => {
                _0x2b9fe5["default"].subscribeAccelerometer({
                  callback: function (_0x54f40d) {
                    if (Math.abs(_0x54f40d.x) > _0x2cff06 || Math.abs(_0x54f40d.y) > _0x252e28) {
                      if (_0x32f057) {
                        return;
                      }
                      _0x32f057 = true;
                      console.log("shake succ===>>>>");
                      _0x5e0dbf();
                      _0x5db90d["default"].vibrate({
                        mode: "short"
                      });
                      _0xda591();
                    }
                  }
                });
              });
            },
            unbindShake: _0xda591
          };
        },
        0x1201d: (_0x219802, _0x41da56, _0x32d879) => {
          "use strict";

          Object.defineProperty(_0x41da56, "__esModule", {
            value: true
          });
          _0x41da56["default"] = undefined;
          const _0x101b94 = _0x32d879.g.__proto__ || _0x32d879.g;
          _0x41da56["default"] = class {
            constructor() {
              _0x101b94.eventBus = {};
            }
            ["on"](_0x370887, _0x3143cd, _0x5e7c16) {
              if ("string" != typeof _0x370887) {
                throw TypeError("传入的事件名数据类型需为string类型");
              }
              if ("function" != typeof _0x3143cd) {
                throw TypeError("传入的回调函数数据类型需为function类型");
              }
              let _0x3a3c71 = _0x101b94.eventBus[_0x370887];
              if (!_0x3a3c71) {
                _0x3a3c71 = [];
                _0x101b94.eventBus[_0x370887] = _0x3a3c71;
              }
              _0x3a3c71.push({
                eventCallback: _0x3143cd,
                thisArg: _0x5e7c16
              });
            }
            ["emit"](_0x58bd3a, ..._0x18321f) {
              if ("string" != typeof _0x58bd3a) {
                throw TypeError("传入的事件名数据类型需为string类型");
              }
              const _0x2a72f8 = _0x101b94.eventBus[_0x58bd3a];
              if (_0x2a72f8) {
                _0x2a72f8.forEach(_0x1a1b44 => {
                  _0x1a1b44.eventCallback.apply(_0x1a1b44.thisArg, _0x18321f);
                });
              } else {
                console.warn(_0x2a72f8 + "该触发的事件名并未挂载到 eventBus 上");
              }
            }
            ["off"](_0x400743, _0x35ee5f) {
              if ("string" != typeof _0x400743) {
                throw TypeError("传入的事件名数据类型需为string类型");
              }
              if ("function" != typeof _0x35ee5f) {
                throw TypeError("传入的回调函数数据类型需为function类型");
              }
              const _0x2b2b8c = _0x101b94.eventBus[_0x400743] || [];
              if (_0x2b2b8c.length) {
                const _0xf3c71b = [..._0x2b2b8c];
                for (let _0x4f0c80 = 0x0; _0x4f0c80 < _0xf3c71b.length; _0x4f0c80++) {
                  const _0x1e22c2 = _0xf3c71b[_0x4f0c80];
                  if (_0x1e22c2.eventCallback === _0x35ee5f) {
                    const _0x4fda98 = _0x2b2b8c.indexOf(_0x1e22c2);
                    _0x2b2b8c.splice(_0x4fda98, 0x1);
                  }
                }
              }
              if (0x0 === _0x2b2b8c.length) {
                delete _0x101b94.eventBus[_0x400743];
              }
            }
            ["once"](_0x7c187, _0x2e8ee8, _0x28d272) {
              if ("string" != typeof _0x7c187) {
                throw TypeError("传入的事件名数据类型需为string类型");
              }
              if ("function" != typeof _0x2e8ee8) {
                throw TypeError("传入的回调函数数据类型需为function类型");
              }
              const _0x1c2e25 = (..._0x45f714) => {
                _0x101b94.off(_0x7c187, _0x1c2e25);
                _0x2e8ee8.apply(_0x28d272, _0x45f714);
              };
              _0x101b94.on(_0x7c187, _0x1c2e25);
            }
            ["clear"](_0x4c07e8) {
              if ("string" == typeof _0x4c07e8) {
                _0x101b94.eventBus[_0x4c07e8] = [];
              } else {
                console.warn("传入的事件名数据类型需为string类型");
              }
            }
          };
        },
        0xd7b2: (_0x1380a8, _0x101c20, _0x49bf5c) => {
          "use strict";

          var _0x4e3ca0;
          Object.defineProperty(_0x101c20, "__esModule", {
            value: true
          });
          _0x101c20["default"] = undefined;
          if (_0x4e3ca0 = $app_require$("@app-module/system.fetch")) {
            _0x4e3ca0.__esModule;
          }
          if (!_0x49bf5c.g.__proto__) {
            _0x49bf5c.g;
          }
          _0x101c20["default"] = function (_0x2dae79, ..._0x4db3ec) {};
        },
        0xbae5: (_0x4f0e3e, _0x3f1834, _0x1d0113) => {
          "use strict";

          Object.defineProperty(_0x3f1834, "__esModule", {
            value: true
          });
          _0x3f1834["default"] = undefined;
          var _0x2135ed = _0x1d0113(0xbf07) && _0x1d0113(0xbf07).__esModule ? _0x1d0113(0xbf07) : {
            default: _0x1d0113(0xbf07)
          };
          var _0x530367 = _0x1d0113(0x158b2) && _0x1d0113(0x158b2).__esModule ? _0x1d0113(0x158b2) : {
            default: _0x1d0113(0x158b2)
          };
          function _0x17d42a(_0x4e1d42, _0x55c432) {
            var _0x40dfc3 = Object.keys(_0x4e1d42);
            if (Object.getOwnPropertySymbols) {
              var _0x3307d9 = Object.getOwnPropertySymbols(_0x4e1d42);
              if (_0x55c432) {
                _0x3307d9 = _0x3307d9.filter(function (_0x2ca223) {
                  return Object.getOwnPropertyDescriptor(_0x4e1d42, _0x2ca223).enumerable;
                });
              }
              _0x40dfc3.push.apply(_0x40dfc3, _0x3307d9);
            }
            return _0x40dfc3;
          }
          function _0x1ca5ef(_0x1e08e5) {
            for (var _0x1e7999 = 0x1; _0x1e7999 < arguments.length; _0x1e7999++) {
              var _0x151f95 = null != arguments[_0x1e7999] ? arguments[_0x1e7999] : {};
              if (_0x1e7999 % 0x2) {
                _0x17d42a(Object(_0x151f95), true).forEach(function (_0x5dd946) {
                  _0x2914cb(_0x1e08e5, _0x5dd946, _0x151f95[_0x5dd946]);
                });
              } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(_0x1e08e5, Object.getOwnPropertyDescriptors(_0x151f95));
              } else {
                _0x17d42a(Object(_0x151f95)).forEach(function (_0x3b781e) {
                  Object.defineProperty(_0x1e08e5, _0x3b781e, Object.getOwnPropertyDescriptor(_0x151f95, _0x3b781e));
                });
              }
            }
            return _0x1e08e5;
          }
          function _0x2914cb(_0x273426, _0x2d6ee1, _0x1aa807) {
            if ((_0x2d6ee1 = function (_0x4ccdbe) {
              var _0x38fda1 = function (_0x43f231) {
                if ("object" != typeof _0x43f231 || !_0x43f231) {
                  return _0x43f231;
                }
                var _0xe38cee = _0x43f231[Symbol.toPrimitive];
                if (undefined !== _0xe38cee) {
                  var _0x37b2bc = _0xe38cee.call(_0x43f231, "string");
                  if ("object" != typeof _0x37b2bc) {
                    return _0x37b2bc;
                  }
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(_0x43f231);
              }(_0x4ccdbe);
              return "symbol" == typeof _0x38fda1 ? _0x38fda1 : _0x38fda1 + "";
            }(_0x2d6ee1)) in _0x273426) {
              Object.defineProperty(_0x273426, _0x2d6ee1, {
                value: _0x1aa807,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              _0x273426[_0x2d6ee1] = _0x1aa807;
            }
            return _0x273426;
          }
          if ($app_require$("@app-module/system.prompt") && $app_require$("@app-module/system.prompt").__esModule) {
            $app_require$("@app-module/system.prompt");
          } else {
            ({
              default: $app_require$("@app-module/system.prompt")
            });
          }
          var _0x59fede = null;
          let _0x4aa44f = 0x0;
          let _0x22c1dc = "";
          let _0x1bbbd5 = true;
          let _0x38039c = "";
          let _0x3095d0 = {};
          let _0x5f5493 = {};
          let _0x503ad4 = null;
          function _0x4e61f0(_0x3d8e60, _0x596486, _0xcb6ffd) {
            LOG("customPopBackPressHandler===>无可用广告", _0x1bbbd5, _0x3d8e60, _0x596486);
            switch (_0x3d8e60.actionCode) {
              case "PAGE_ENTRY":
              case "POPUP_CLOSE":
              default:
                if (_0x1bbbd5) {
                  _0x226b02(_0x3d8e60, _0x596486)["catch"](_0x18b97d => {});
                }
                break;
              case "PAGE_BACK":
                if (_0x1bbbd5) {
                  _0x226b02(_0x3d8e60, _0x596486)["catch"](_0x31aa56 => {
                    _0x12827d(_0x596486.pageCode, _0xcb6ffd, true, {
                      ad_position: "",
                      page_type: ""
                    });
                  });
                } else {
                  _0x12827d(_0x596486.pageCode, _0xcb6ffd, true, {
                    ad_position: "",
                    page_type: ""
                  });
                }
            }
          }
          function _0x226b02(_0x3b7e34, _0x35ece5, _0x1745bf = "request_fail") {
            LOG("canShowActionPop mxt ", _0x3b7e34);
            return new Promise((_0x437601, _0x583fc6) => {
              if ("request_fail" == _0x1745bf) {
                _0x1bbbd5 = false;
              }
              TACTICS_SDK_UTILS.getActionPopupCode(_0x3b7e34.actionCode, _0x1745bf, _0x35ece5.pageCode, _0x35ece5.pageOrigin).then(_0x32a24d => {
                LOG("popUtils mxt ", _0x32a24d);
                _0x38039c = _0x1745bf;
                if (_0x32a24d.code) {
                  if ("Baidu" == _0x32a24d.code.split("_")[0x0] || _0x32a24d.code.includes("Encourage")) {
                    _0x59fede.addBqtVideoPop({}, _0x32a24d.code, _0x3b7e34.actionCode, _0x3b7e34.customAction);
                  } else if (-0x1 !== _0x32a24d.code.indexOf("MiddleNative")) {
                    _0x59fede.addMiddlePop({}, _0x32a24d.code, _0x3b7e34.actionCode, _0x3b7e34.customAction);
                  } else if (-0x1 !== _0x32a24d.code.indexOf("MiddleVideo") || -0x1 !== _0x32a24d.code.indexOf("MiddleBaidu")) {
                    _0x59fede.addMiddleBaiduVideoAdPop({}, _0x32a24d.code, _0x3b7e34.actionCode, _0x3b7e34.customAction);
                  } else if (-0x1 !== _0x32a24d.code.indexOf("MiddleApp")) {
                    _0x59fede.addAppMiddlePop({}, _0x32a24d.code, _0x3b7e34.actionCode, _0x3b7e34.customAction);
                  } else if (-0x1 !== _0x32a24d.code.indexOf("AppAd")) {
                    _0x59fede.addAppPop({}, _0x32a24d.code, _0x3b7e34.actionCode, _0x3b7e34.customAction);
                  } else if (-0x1 !== _0x32a24d.code.indexOf("BaiduScreenInsertion")) {
                    _0x59fede.bqtScreenInsPop({}, _0x32a24d.code, _0x3b7e34.actionCode, _0x3b7e34.customAction);
                  } else if ("Kdxf" == _0x32a24d.code.split("_")[0x0] || -0x1 !== _0x32a24d.code.indexOf("MiddleKdxf")) {
                    if (_0x59fede.addKdxfAdPop) {
                      _0x59fede.addKdxfAdPop({}, _0x32a24d.code, _0x3b7e34.actionCode, _0x3b7e34.customAction);
                    }
                  } else if ("Ylh" == _0x32a24d.code.split("_")[0x0] || -0x1 !== _0x32a24d.code.indexOf("MiddleYlh")) {
                    if (_0x59fede.addYlhAdPop) {
                      _0x59fede.addYlhAdPop({}, _0x32a24d.code, _0x3b7e34.actionCode, _0x3b7e34.customAction);
                    }
                  } else {
                    _0x59fede.nativeBoostGroupController.actionCode = _0x3b7e34.actionCode;
                    _0x59fede.nativeBoostGroupController.customAction = _0x3b7e34.customAction;
                    _0x59fede.nativeBoostGroupController.popCode = _0x32a24d.code;
                    _0x59fede.nativeBoostGroupController.backPressTimes++;
                  }
                  _0x59fede.isAllowBackPress = true;
                  _0x437601();
                } else {
                  _0x59fede.isAllowBackPress = true;
                  let _0x359d8e = {
                    ad_id: "",
                    ad_network: 0x1,
                    ad_type: "",
                    page_name: _0x5725a7(_0x3b7e34.actionCode),
                    page_type: "",
                    ad_position: "",
                    ad_style: "",
                    ext_field_9: "1",
                    result: "失败",
                    referer: _0x5725a7(_0x3b7e34.actionCode)
                  };
                  console.log("2222222222", _0x359d8e);
                  COMMON_REPORT_UTILS.ad_sdk_take(_0x359d8e, _0x35ece5.pageName);
                  _0x583fc6();
                }
              })["catch"](_0x14153a => {
                LOG("==err", _0x14153a, _0x3b7e34.actionCode);
                _0x59fede.isAllowBackPress = true;
                if ("READ_AD_TEXT_CUSTOM" == _0x3b7e34.actionCode) {
                  try {
                    _0x59fede.textAdLoadFaildHandler();
                  } catch (_0x58f2f9) {}
                }
                _0x583fc6(_0x14153a);
              });
            });
          }
          function _0x51621c(_0x5d416e, _0x5c66fb, _0x58e9d8, _0x4c7daf) {
            LOG("customPopAdClickHandler===================>广告点击,广告类型：", _0x4c7daf, _0x5c66fb);
            switch (_0x4c7daf) {
              case 0x1:
                AD_SDK_UTILS.clickManuAdvForBtn(_0x5d416e.popData.advConfig, _0x5c66fb.pageName, false);
                break;
              case 0x2:
                AD_SDK_UTILS.clickManuAdvForImg(_0x5d416e.popData.advConfig, _0x5c66fb.pageName, false);
                break;
              case 0x3:
                _0x15ca6a(_0x5d416e, _0x5c66fb, _0x58e9d8);
                break;
              default:
                console.info("dialog 广告点击参数错误");
            }
            if (0x3 != _0x4c7daf) {
              LOG("customPopAdClickHandler===>", _0x5d416e);
              AD_UTILS.adClickHandler(POP_TOOLS, "readFunctionPopAdClick", [_0x5d416e, _0x5c66fb, _0x58e9d8]);
            }
          }
          function _0x387f17(_0x2d4f61, _0x399648, _0x350b08 = false, _0x11c8e3 = null) {
            LOG("-----------------stacksPath", _0x2d4f61, _0x399648);
            if (_0x2d4f61) {
              let _0x473777 = {
                pageOrigin: _0x399648,
                pathUrl: _0x59fede.pathUrl
              };
              _0x473777.pathUrl = _0x59fede.pathUrl;
              var _0x464654 = "";
              if (-0x1 !== _0x2d4f61.indexOf("?")) {
                let _0x2d5383 = _0x2d4f61.split("?");
                _0x464654 = _0x2d5383[0x0];
                if (_0x2d5383.length > 0x1) {
                  if (-0x1 !== _0x2d5383[0x1].indexOf("&")) {
                    let _0x5c1be1 = _0x2d5383[0x1].split("&");
                    for (let _0x3254c2 = 0x0; _0x3254c2 < _0x5c1be1.length; _0x3254c2++) {
                      let _0x439311 = _0x5c1be1[_0x3254c2].split("=");
                      _0x473777[_0x439311[0x0]] = _0x439311[0x1];
                    }
                  } else {
                    let _0x32fc52 = _0x2d5383[0x1].split("=");
                    _0x473777[_0x32fc52[0x0]] = _0x32fc52[0x1];
                  }
                }
              } else {
                _0x464654 = _0x2d4f61;
              }
              let _0x26f65d = $utils.routeCheckUrl(_0x464654);
              LOG("-----------------stacksPath isCur", _0x26f65d);
              if (_0x26f65d) {
                _0x59fede.routerJumpSelfHandeler(_0x473777);
              } else {
                if (_0x59fede.$app) {
                  _0x59fede.$app.$def.tabListType = [0x0, 0x0, 0x0, 0x0, 0x0];
                }
                $utils.routetheUrl(_0x464654, _0x473777, true);
              }
              if (_0x350b08) {
                COMMON_REPORT_UTILS.back_click_report(_0x11c8e3.ad_position, _0x11c8e3.page_type, "跳转页面");
              }
            } else if (!_0x59fede.pageDetail.pageRoute || -0x1 === _0x59fede.pageDetail.pageRoute.indexOf("Main") && -0x1 === _0x59fede.pageDetail.pageRoute.indexOf("Power-Page")) {
              if (_0x350b08) {
                COMMON_REPORT_UTILS.back_click_report(_0x11c8e3.ad_position, _0x11c8e3.page_type, "跳转页面");
              }
              setTimeout(() => {
                if ($utils.routeCheckPages()) {
                  LOG("-----------------stacksPath", 0x2);
                  $utils.goBack();
                } else {
                  let _0xc54a52 = new Object();
                  _0x59fede.$app.$def.tabListType = [0x0, 0x0, 0x0, 0x0, 0x0];
                  _0xc54a52.selectIndex = 0x1;
                  _0xc54a52.pathUrl = _0x59fede.pageDetail.pageName;
                  $utils.routeReplacetheUrl("/pagesA/Main", _0xc54a52);
                  LOG("-----------------stacksPath", 0x3);
                }
              }, 0xc8);
            } else {
              LOG("-----------------stacksPath", 0x1);
              if (_0x350b08) {
                COMMON_REPORT_UTILS.back_click_report(_0x11c8e3.ad_position, _0x11c8e3.page_type, "退出应用");
              }
              _0x59fede.$app.exit();
            }
          }
          async function _0xa47088(_0x380b4a, _0x5bfafa, _0x38f83e = "", _0x227c7b, _0x2b9d24, _0xc8363f = {}) {
            LOG("commonFunc2PatchPopShow===>来源" + _0x380b4a.pageOrigin + "_目标" + _0x380b4a.pageCode + "_动作" + _0x5bfafa + "_弹窗code" + _0x38f83e + "_页面路由" + _0x227c7b, _0xc8363f);
            _0x1bbbd5 = true;
            let _0x593aee = _0x38f83e;
            if (_0x22c1dc) {
              _0x593aee = await TACTICS_SDK_UTILS.getOriginalPopCode(_0x380b4a.pageCode, _0x380b4a.pageOrigin, _0x22c1dc, _0x38f83e);
            }
            _0x22c1dc = "PAGE_BACK" == _0x5bfafa ? "" : _0x5bfafa;
            _0x59fede.isAllowBackPress = false;
            let _0xbcd8bb = $utils.adFreeTimeDifference(_0x2b9d24.readIndoTakeVideTime);
            if ("READ_READINFO" != _0x380b4a.pageCode || !_0xbcd8bb && !_0x2b9d24.isVip) {
              TACTICS_SDK_UTILS.getPopupCodeByTacticsSdk(_0x2b9d24, {
                pageCode: _0x380b4a.pageCode,
                pageOrigin: _0x380b4a.pageOrigin,
                actionCode: _0x5bfafa,
                popupCode: _0x593aee
              }).then(_0x397f98 => {
                let _0xf51e33 = Number(TACTICS_SDK.getGlobalData("configInfo").config.native_ad_click_interval.val);
                let _0x12bf05 = Date.now();
                LOG("mxt  判断点击间隔 ：应用配置的间隔：" + _0xf51e33 + " 当前展示时间：" + _0x12bf05 + " 差值:" + (_0x12bf05 - _0x4aa44f) + ":比较", _0x12bf05 - _0x4aa44f < _0xf51e33);
                if (_0x12bf05 - _0x4aa44f < _0xf51e33) {
                  LOG(" mxt 展示间隔内弹窗");
                  _0x226b02({
                    actionCode: _0x5bfafa,
                    code: _0x593aee,
                    customAction: _0xc8363f
                  }, _0x380b4a, "click_interval").then(() => {})["catch"](_0x13531b => {
                    LOG(" mxt 当前没有配置的弹窗code ", _0x13531b);
                    if ("PAGE_BACK" == _0x5bfafa) {
                      COMMON_REPORT_UTILS.back_click_report("", "", "跳转页面");
                      _0x12827d(_0x380b4a.pageCode, _0x2b9d24);
                    }
                  });
                } else {
                  LOG("commonFunc2PatchPopShow code1===>" + _0x397f98);
                  if ("Baidu" == _0x397f98.split("_")[0x0] || -0x1 !== _0x397f98.indexOf("Encourage")) {
                    _0x59fede.addBqtVideoPop({}, _0x397f98, _0x5bfafa, _0xc8363f);
                  } else if (-0x1 !== _0x397f98.indexOf("MiddleNative")) {
                    if (_0x59fede.isShowNativeBoostGroupComp) {
                      _0x59fede.addMiddlePop({}, _0x397f98, _0x5bfafa, _0xc8363f);
                    } else {
                      _0x4e61f0({
                        actionCode: _0x5bfafa,
                        code: _0x593aee,
                        customAction: _0xc8363f
                      }, _0x380b4a, _0x2b9d24);
                    }
                  } else if (-0x1 !== _0x397f98.indexOf("MiddleVideo") || -0x1 !== _0x397f98.indexOf("MiddleBaidu")) {
                    _0x59fede.addMiddleBaiduVideoAdPop({}, _0x397f98, _0x5bfafa, _0xc8363f);
                  } else if (-0x1 !== _0x397f98.indexOf("MiddleApp")) {
                    _0x59fede.addAppMiddlePop({}, _0x397f98, _0x5bfafa, _0xc8363f);
                  } else if (-0x1 !== _0x397f98.indexOf("AppAd")) {
                    _0x59fede.addAppPop({}, _0x397f98, _0x5bfafa, _0xc8363f);
                  } else if (-0x1 !== _0x397f98.indexOf("BaiduScreenInsertion")) {
                    _0x59fede.bqtScreenInsPop({}, _0x397f98, _0x5bfafa, _0xc8363f);
                  } else if ("Kdxf" == _0x397f98.split("_")[0x0] || -0x1 !== _0x397f98.indexOf("MiddleKdxf")) {
                    if (_0x59fede.addKdxfAdPop) {
                      _0x59fede.addKdxfAdPop({}, _0x397f98, _0x5bfafa, _0xc8363f);
                    }
                  } else if ("Ylh" == _0x397f98.split("_")[0x0] || -0x1 !== _0x397f98.indexOf("MiddleYlh")) {
                    if (_0x59fede.addYlhAdPop) {
                      _0x59fede.addYlhAdPop({}, _0x397f98, _0x5bfafa, _0xc8363f);
                    }
                  } else if (_0x59fede.isShowNativeBoostGroupComp) {
                    _0x59fede.nativeBoostGroupController.actionCode = _0x5bfafa;
                    _0x59fede.nativeBoostGroupController.popCode = _0x397f98;
                    _0x59fede.nativeBoostGroupController.customAction = _0xc8363f;
                    _0x59fede.nativeBoostGroupController.backPressTimes++;
                  } else {
                    _0x4e61f0({
                      actionCode: _0x5bfafa,
                      code: _0x593aee,
                      customAction: _0xc8363f
                    }, _0x380b4a, _0x2b9d24);
                  }
                  _0x59fede.isAllowBackPress = true;
                  if ("PAGE_BACK" == _0x5bfafa) {
                    COMMON_REPORT_UTILS.back_click_report("", "", "触发弹窗");
                  }
                }
              })["catch"](async _0x1e1d78 => {
                LOG("commonFunc2PatchPopShow catch===>", _0x5bfafa, _0x1e1d78);
                switch (_0x5bfafa) {
                  case "PAGE_BACK":
                    const _0x5e88c4 = () => {
                      COMMON_REPORT_UTILS.back_click_report("", "", "跳转页面");
                      _0x12827d(_0x380b4a.pageCode, _0x2b9d24);
                    };
                    if (!(await _0x3a5799(_0x5e88c4))) {
                      _0x5e88c4();
                    }
                    break;
                  case "PAGE_ENTRY":
                  case "POPUP_CLOSE":
                  default:
                    _0x59fede.isAllowBackPress = true;
                    break;
                  case "VIEW_RESULT":
                  case "CHECK_RESULT":
                    if (!_0x1e1d78) {
                      if (_0x59fede.goResultPage) {
                        _0x59fede.goResultPage();
                      }
                    }
                }
              });
            } else {
              _0x59fede.isAllowBackPress = false;
              if ("READ_ADD_DESKTOP" == _0x5bfafa || "READ_ADD_DESKTOP_TIMER" == _0x5bfafa) {
                return;
              }
              if (_0xbcd8bb) {
                COMMON_REPORT_UTILS.ad_cancel_report(_0x5725a7(_0x5bfafa), "" + _0x59fede.bookId, "" + _0x59fede.chapterId);
              }
            }
          }
          function _0x12827d(_0x11b16d, _0x4c9bdb, _0x4dfcb1 = false, _0x3f1708 = null) {
            LOG("getPageBackRoute==> bg");
            LOG(_0x11b16d);
            LOG("getPageBackRoute==> end");
            TACTICS_SDK_UTILS.getPageBackRouterByTacticsSdk(_0x4c9bdb, _0x11b16d).then(_0x3c7e2b => {
              LOG("getPageBackRouterByTacticsSdk pageUrl===>", _0x3c7e2b);
              _0x387f17(_0x3c7e2b, _0x11b16d, _0x4dfcb1, _0x3f1708);
            })["catch"](_0x2f27b6 => {
              LOG("getPageBackRouterByTacticsSdk failed===>", _0x2f27b6);
              _0x387f17("", _0x11b16d, _0x4dfcb1, _0x3f1708);
            });
          }
          async function _0x2a82bb(_0x92e93f, _0x4fcaf6, _0x94b624) {
            let _0x3ff727 = {
              "task_code": _0x4fcaf6,
              brand: _0x92e93f,
              "coupon": _0x94b624
            };
            LOG($apis, "apis");
            return await $apis.example.welfareReceiveNewApi(_0x3ff727).then(_0x53ce8c => (console.log("---commonReceiveCoinFunc--- bg"), console.log(_0x53ce8c), console.log("---commonReceiveCoinFunc--- end"), _0x53ce8c));
          }
          function _0x21ecc1() {
            return "request_fail" == _0x38039c ? "-请求失败" : "click_interval" == _0x38039c ? "-点击间隔" : "";
          }
          async function _0x15ca6a(_0x113742, _0x3309f3, _0x3ebfed, _0x32af25 = false) {
            var _0x226de4;
            var _0x401600;
            LOG("readFunctionPopAdClick===================>", _0x113742.actionCode, _0x113742.customAction);
            if (_0x32af25) {
              try {
                COMMON_REPORT_UTILS.ad_overtime_report(_0x113742.popData.advConfig.scenario);
              } catch (_0x1df5c8) {
                LOG(_0x1df5c8);
              }
            }
            let _0x1a484b = null === (_0x226de4 = _0x113742.popData.popConfig.configBaseFormData) || undefined === _0x226de4 ? undefined : _0x226de4.custom_content_code;
            if (!(null === (_0x401600 = _0x113742.popData.popConfig.configBaseFormData) || undefined === _0x401600)) {
              _0x401600.function_type;
            }
            _0x113742.customAction.task_code = _0x113742.customAction.task_code || "commonTasks";
            LOG("getCoinCode", "====>>>>>", _0x1a484b, _0x113742);
            let _0x37cd2b = "";
            if ("FK_ADD_ONE_TIME" !== _0x113742.customAction.cardName && "COMPOSE_CARD" !== _0x113742.customAction.cardName && undefined !== _0x113742.customAction.cardName) {
              _0x37cd2b = TACTICS_SDK.getGlobalData("configInfo").config[_0x113742.customAction.cardName].val || "";
            }
            _0x113742.customAction.task_code = /^coin_\d+$/.test(_0x1a484b) ? "commonTasks" : _0x113742.customAction.task_code;
            console.log(_0x113742.customAction.task_code, _0x1a484b, /^coin_\d+$/.test(_0x1a484b), "hereeeee3333");
            if (_0x113742.customAction && _0x113742.customAction.task_code && _0x1a484b && /^coin_\d+$/.test(_0x1a484b)) {
              if (["com.bulv.app", "com.ymb.app", "com.lxbj.app", "com.lezhiji.app", "com.fltq.app", "com.gxds.app", "com.yunshengge.app"].includes($app_require$("@app-module/system.app").getInfo().packageName)) {
                if (_0x59fede.playAnimation) {
                  _0x59fede.playAnimation("Coin");
                }
              } else {
                console.log("hereeeee1111");
                let _0x13c352 = _0x1a484b.match(/^coin_(\d+)$/)[0x1];
                if ("CANNON_POP" === _0x113742.actionCode) {
                  _0x113742.customAction.task_code = "shellingActivity";
                }
                if ("DIVINATION_POP" === _0x113742.actionCode) {
                  _0x113742.customAction.task_code = "lotteryActivity";
                }
                console.log("hereeeee2222");
                let _0x2e3df2 = await _0x2a82bb(_0x3ebfed.brand, _0x113742.customAction.task_code, _0x13c352);
                if (0xc8 == _0x2e3df2.code) {
                  if ("CANNON_POP" === _0x113742.actionCode || "DIVINATION_POP" === _0x113742.actionCode) {
                    if (_0x59fede.getGoldPop) {
                      _0x59fede.getGoldPop(_0x13c352);
                    }
                    if (_0x59fede.progressCount) {
                      _0x59fede.progressCount();
                    }
                  } else {
                    $utils.showToast("恭喜您获得" + _0x13c352 + "金币");
                  }
                  try {
                    if (_0x503ad4 && _0x503ad4.isFakePage) {
                      if (_0x503ad4.getWelfarePageData) {
                        _0x503ad4.getWelfarePageData();
                      }
                      if (_0x503ad4.playAnimation) {
                        _0x503ad4.playAnimation("Coin");
                      }
                    } else {
                      if (_0x59fede.getWelfarePageData) {
                        _0x59fede.getWelfarePageData();
                      }
                      if (_0x59fede.playAnimation) {
                        _0x59fede.playAnimation("Coin");
                      }
                      if (_0x59fede.refreshGlod) {
                        _0x59fede.refreshGlodHandle(_0x13c352);
                      }
                    }
                    if ("READ_TIMER_COIN" == _0x113742.actionCode) {
                      if (_0x503ad4 && _0x503ad4.isFakePage) {
                        if (_0x503ad4.reSetCoinTimerData) {
                          _0x503ad4.reSetCoinTimerData();
                        }
                      } else if (_0x59fede.reSetCoinTimerData) {
                        _0x59fede.reSetCoinTimerData();
                      }
                    }
                  } catch (_0x248abf) {
                    LOG(_0x248abf);
                  }
                } else if (_0x2e3df2.msg) {
                  $utils.showToast(_0x2e3df2.msg);
                }
              }
            }
            if (_0x1a484b && /^red_bag_((0|([1-9]\d*))(\.\d+)?)$/.test(_0x1a484b)) {
              let _0x30c58e = _0x1a484b.match(/^red_bag_((0|([1-9]\d*))(\.\d+)?)$/)[0x1];
              $utils.showToast("恭喜您获得" + _0x30c58e + "元红包");
            }
            if (!("OPEN_RED_MONEY" !== _0x113742.actionCode && "OPEN_RED_GOLD" !== _0x113742.actionCode)) {
              if (_0x503ad4 && _0x503ad4.isFakePage) {
                if (_0x503ad4.openCashRequest) {
                  _0x503ad4.openCashRequest();
                }
              } else {
                console.log(_0x59fede, "hereee");
                if (_0x59fede.openCashRequest) {
                  _0x59fede.openCashRequest();
                }
              }
            }
            if ("SIGN_IN" === _0x113742.actionCode) {
              if (_0x503ad4 && _0x503ad4.isFakePage) {
                if (_0x503ad4.openSignNewPop) {
                  _0x503ad4.openSignNewPop();
                }
              } else if (_0x59fede.openSignNewPop) {
                _0x59fede.openSignNewPop();
              }
            }
            LOG(_0x113742.actionCode, _0x37cd2b, "cardNameType");
            if (_0x113742.actionCode === _0x37cd2b && _0x59fede.adFinishCallBack) {
              _0x59fede.adFinishCallBack();
            }
            if ("FK_ADD_ONE_TIME" === _0x113742.actionCode && _0x59fede.againCallback) {
              _0x59fede.againCallback();
            }
            if ("COMPOSE_CARD" === _0x113742.actionCode && _0x59fede.composeCardCallback) {
              _0x59fede.composeCardCallback();
            }
            _0x113742.actionCode;
            switch (_0x113742.actionCode) {
              case "READ_PAGE_CLICK":
                $utils.showToast("章节已解锁");
                break;
              case "READ_MIDDLE_SENCES":
                _0x1ab7b1("isMiddleAdSencesShow", false);
                break;
              case "READ_CHAPTER_END":
                _0x59fede.adConfig.isChapterEndRedBag = 0x0;
                if (_0x59fede.nextPage) {
                  _0x59fede.nextPage();
                }
            }
            switch (Number(_0x113742.popData.popConfig.btnStyle.jumpKey)) {
              case 0x1:
                let _0x285811 = _0x113742.popData.popConfig.btnStyle.jumpValue;
                $utils.routetheUrl(_0x2135ed["default"][_0x285811].path, _0x1ca5ef(_0x1ca5ef({}, _0x2135ed["default"][_0x285811].param), {}, {
                  pathUrl: _0x3309f3.pageName
                }), false);
                break;
              case 0x2:
                _0x12827d(_0x3309f3.pageCode, _0x3ebfed);
                break;
              case 0x3:
                try {
                  _0x59fede.$app.exit();
                } catch (_0x38594a) {}
                break;
              case 0x4:
                _0xa47088(_0x3309f3, "POPUP_CLOSE", _0x113742.popData.popConfig.code, _0x3309f3.pageRoute, _0x3ebfed);
            }
          }
          function _0x370d12(_0x5c03c8, _0x2bd879, _0x42e023, _0x2a2d6e = false) {
            let _0x141148 = Number(_0x2a2d6e ? _0x5c03c8.popData.popConfig.negStyle.jumpKey : _0x5c03c8.popData.popConfig.btnStyle.jumpKey);
            LOG("readFunctionPopClose===================>", _0x141148);
            switch (_0x141148) {
              case 0x1:
                let _0x154fae = _0x5c03c8.popData.popConfig.btnStyle.jumpValue;
                $utils.routetheUrl(_0x2135ed["default"][_0x154fae].path, _0x1ca5ef(_0x1ca5ef({}, _0x2135ed["default"][_0x154fae].param), {}, {
                  pathUrl: _0x2bd879.pageName
                }), false);
                break;
              case 0x2:
                _0x12827d(_0x2bd879.pageCode, _0x42e023);
                break;
              case 0x3:
                try {
                  _0x59fede.$app.exit();
                } catch (_0xc95387) {}
                break;
              case 0x4:
                _0xa47088(_0x2bd879, "POPUP_CLOSE", _0x5c03c8.popData.popConfig.code, _0x2bd879.pageRoute, _0x42e023);
                break;
              case 0x5:
                $utils.routetheUrl("/pagesC/ActivityH5", {
                  webUrl: _0x5c03c8.popData.popConfig.btnStyle.jumpValue
                });
            }
          }
          function _0x5725a7(_0x3a125f) {
            LOG("CUSTOM", "actionCode==>", _0x3a125f);
            let _0x195cb8 = "";
            let _0x38abf7 = _0x1d0113(0x15bfc);
            _0x195cb8 = _0x3a125f && _0x38abf7["" + _0x3a125f] && _0x38abf7["" + _0x3a125f].name ? _0x38abf7["" + _0x3a125f].name : "未知";
            return _0x195cb8 + ("request_fail" == _0x38039c ? "-请求失败" : "click_interval" == _0x38039c ? "-点击间隔" : "");
          }
          function _0x1ab7b1(_0xb95e42, _0xf78feb) {
            if (_0x59fede && _0x59fede.hasOwnProperty(_0xb95e42)) {
              _0x59fede[_0xb95e42] = _0xf78feb;
            } else {
              console.error("poputils->当前页面无该属性===>", _0xb95e42);
            }
          }
          function _0x540aff(_0x31436b) {
            LOG("当前缓存的弹窗数据", _0x3095d0, _0x31436b);
            _0x3095d0[_0x31436b] = "";
          }
          async function _0x590b7b(_0x27bf3e, _0x11a8e2, _0xac8828) {
            const _0x2c1fea = () => {
              AD_SDK.hideInterstAdv();
              if (_0xac8828) {
                _0xac8828();
              }
            };
            return await AD_SDK.getInterstAdv({
              scenario: _0x27bf3e,
              click: _0x2c1fea,
              close: _0x2c1fea
            }, _0x11a8e2);
          }
          async function _0x3a5799(_0x1225dd) {
            const _0x5c1a27 = TACTICS_SDK.getGlobalData("configInfo").config.is_open_back_press_interst_ad;
            if (0x0 === (_0x5c1a27 ? Number(_0x5c1a27.val) : 0x0)) {
              LOG("返回插屏", "开关关闭");
              return false;
            }
            const _0xa7cee = _0x590b7b("物理返回", false, _0x1225dd);
            LOG("返回插屏", "请求结果", _0xa7cee);
            return _0xa7cee;
          }
          let _0x120c02 = null;
          _0x3f1834["default"] = {
            changeCurrentView: function (_0x39c12e) {
              _0x59fede = _0x39c12e;
            },
            commonFunc2PatchPopShow: _0xa47088,
            getPageBackRoute: _0x12827d,
            commonPopControllerEventDispatch: function (_0x24b73a, _0x4aafda, _0x375b89) {
              LOG("commonPopControllerEventDispatch=====>", _0x24b73a);
              let _0x17b804 = _0x24b73a.popData.popConfig.popType.toLowerCase();
              LOG("commonPopControllerEventDispatch=====>", _0x17b804);
              _0x540aff(_0x24b73a.popData.popConfig.code);
              switch (_0x17b804) {
                case "custom":
                case "customback":
                case "common":
                case "baiduscreeninsertion":
                  !function (_0x3cde94, _0x5107e3, _0x3cf4d3) {
                    let _0x38835d = _0x3cde94.action;
                    switch (_0x38835d) {
                      case "adClickBtn":
                      case "adClickImg":
                        _0x51621c(_0x3cde94, _0x5107e3, _0x3cf4d3, "adClickBtn" == _0x38835d ? 0x1 : 0x2);
                        break;
                      case "noClickBtn":
                      case "noClickImg":
                        _0x51621c(_0x3cde94, _0x5107e3, _0x3cf4d3, 0x3);
                        break;
                      case "backPress":
                        !function (_0x4ba307, _0x4a0bdf, _0x590d1f) {
                          LOG("customPopBackPressHandler===>物理返回", _0x4ba307);
                          let _0x243f22 = {
                            ad_position: _0x4ba307.popData.popConfig.popName,
                            page_type: _0x4ba307.popData.popConfig.popGroupName
                          };
                          switch (_0x4ba307.actionCode) {
                            case "PAGE_ENTRY":
                            case "POPUP_CLOSE":
                              _0xa47088(_0x4a0bdf, "POPUP_CLOSE", _0x4ba307.popData.popConfig.code, _0x4a0bdf.pageRoute, _0x590d1f);
                              COMMON_REPORT_UTILS.back_click_report(_0x243f22.ad_position, _0x243f22.page_type, "关闭弹窗");
                              break;
                            case "PAGE_BACK":
                              _0x12827d(_0x4a0bdf.pageCode, _0x590d1f, true, _0x243f22);
                          }
                        }(_0x3cde94, _0x5107e3, _0x3cf4d3);
                        break;
                      case "backIconClick":
                        !function (_0x319e03, _0x424591, _0x10d6e7) {
                          LOG("customPopBackIconClickHandler===>返回按钮", _0x319e03);
                          _0xa47088(_0x424591, "POPUP_CLOSE", _0x319e03.popData.popConfig.code, _0x424591.pageRoute, _0x10d6e7);
                        }(_0x3cde94, _0x5107e3, _0x3cf4d3);
                        break;
                      case "closeClick":
                        !function (_0x21b613, _0x2ef5f6, _0x1f47c3) {
                          LOG("customPopCloseClickHandler===>关闭按钮", _0x21b613);
                          _0xa47088(_0x2ef5f6, "POPUP_CLOSE", _0x21b613.popData.popConfig.code, _0x2ef5f6.pageRoute, _0x1f47c3);
                        }(_0x3cde94, _0x5107e3, _0x3cf4d3);
                        break;
                      case "negClick":
                        !function (_0x21a3fc, _0x471bc9, _0x2bbcb3) {
                          LOG("customPopNegClickHandler===>负向按钮", _0x21a3fc);
                          _0x370d12(_0x21a3fc, _0x471bc9, _0x2bbcb3, true);
                        }(_0x3cde94, _0x5107e3, _0x3cf4d3);
                    }
                  }(_0x24b73a, _0x4aafda, _0x375b89);
                  break;
                case "boost":
                  !function (_0x5d9efe, _0x4a53ad, _0x3a7b46) {
                    LOG("boostCompEventHandler=====>", _0x5d9efe);
                    if ("popCodeError" === _0x5d9efe.action && "PAGE_BACK" == _0x5d9efe.actionCode) {
                      _0x12827d(_0x4a53ad.pageCode, _0x3a7b46, true, {
                        ad_position: "",
                        page_type: ""
                      });
                    }
                  }(_0x24b73a, _0x4aafda, _0x375b89);
              }
            },
            noAd4UseEventHandler: _0x4e61f0,
            bqtVideoAdEventDispatch: function (_0x391c5d, _0x5e4744, _0x3e2d9a) {
              var _0xbe54c9;
              var _0xcd9468;
              LOG("BQT_AD", "bqtVideoAdEventDispatch=====>", _0x391c5d);
              let _0x22a2f8 = _0x391c5d.popStyleName.toLowerCase();
              LOG("BQT_AD", "bqtVideoAdEventDispatch=====>", _0x22a2f8);
              if (null !== (_0xbe54c9 = _0x391c5d.popData) && undefined !== _0xbe54c9 && null !== (_0xcd9468 = _0xbe54c9.popConfig) && undefined !== _0xcd9468 && _0xcd9468.code) {
                _0x540aff(_0x391c5d.popData.popConfig.code);
              }
              switch (_0x22a2f8) {
                case "baidu":
                case "kdxf":
                case "ylh":
                case "appad":
                  !function (_0x365fed, _0x23e66c, _0x1a168c) {
                    LOG("BQT_AD", "baiduPopEventHandler=====>", _0x365fed);
                    switch (_0x365fed.action) {
                      case "adClick":
                        !function (_0x495774, _0x430b82, _0x569bf7) {
                          LOG("BQT_AD", "baiduPopAdClickHandler=====>广告点击", _0x495774);
                          AD_SDK_UTILS.clickManuAdvForBtn(_0x495774.popData.advConfig, _0x430b82.pageName, false);
                          AD_UTILS.adClickHandler(POP_TOOLS, "readFunctionPopAdClick", [_0x495774, _0x430b82, _0x569bf7]);
                        }(_0x365fed, _0x23e66c, _0x1a168c);
                        break;
                      case "backPress":
                        !function (_0x15dc76, _0x4edb92, _0x49f4f7) {
                          LOG("BQT_AD", "baiduPopBackPressHandler=====>物理返回", _0x15dc76);
                          let _0x3c53ed = {
                            ad_position: _0x15dc76.popData.popConfig.popName,
                            page_type: _0x15dc76.popData.popConfig.popGroupName
                          };
                          switch (_0x15dc76.actionCode) {
                            case "PAGE_ENTRY":
                            case "POPUP_CLOSE":
                              _0xa47088(_0x4edb92, "POPUP_CLOSE", _0x15dc76.popData.popConfig.code, _0x4edb92.pageRoute, _0x49f4f7);
                              COMMON_REPORT_UTILS.back_click_report(_0x3c53ed.ad_position, _0x3c53ed.page_type, "关闭弹窗");
                              break;
                            case "PAGE_BACK":
                              _0x12827d(_0x4edb92.pageCode, _0x49f4f7, true, _0x3c53ed);
                          }
                        }(_0x365fed, _0x23e66c, _0x1a168c);
                        break;
                      case "backIconClick":
                        !function (_0xf9ac1a, _0x207c93, _0x4a4f3e) {
                          LOG("BQT_AD", "baiduPopBackIconClickHandler=====>返回按钮点击", _0xf9ac1a);
                          _0xa47088(_0x207c93, "POPUP_CLOSE", _0xf9ac1a.popData.popConfig.code, _0x207c93.pageRoute, _0x4a4f3e);
                        }(_0x365fed, _0x23e66c, _0x1a168c);
                        break;
                      case "closeClick":
                      case "adCloseClick":
                        !function (_0x134c98, _0xe0b91e, _0x343808) {
                          LOG("BQT_AD", "baiduPopCloseClickHandler=====>关闭按钮点击", _0x134c98);
                          _0xa47088(_0xe0b91e, "POPUP_CLOSE", _0x134c98.popData.popConfig.code, _0xe0b91e.pageRoute, _0x343808);
                        }(_0x365fed, _0x23e66c, _0x1a168c);
                        break;
                      case "negClick":
                        !function (_0x48336c, _0xbf3eb5, _0x4c0a53) {
                          LOG("BQT_AD", "baiduPopNegClickHandler=====>负向按钮点击", _0x48336c);
                          _0x370d12(_0x48336c, _0xbf3eb5, _0x4c0a53, true);
                        }(_0x365fed, _0x23e66c, _0x1a168c);
                        break;
                      case "adLoadFailed":
                      case "adRequestFailed":
                      case "popCodeError":
                        !function (_0x5804e2, _0x6b0625, _0x5d5c4d) {
                          LOG("BQT_AD", "baiduPopAdLoadFailedHandler=====>广告获取失败", _0x5804e2);
                          _0x4e61f0(_0x5804e2, _0x6b0625, _0x5d5c4d);
                        }(_0x365fed, _0x23e66c, _0x1a168c);
                    }
                  }(_0x391c5d, _0x5e4744, _0x3e2d9a);
                  break;
                case "encourage":
                  !function (_0x28a7e1, _0x545a3a, _0x2ee20a) {
                    LOG("BQT_AD", "encouragePopEventHandler=====>", _0x28a7e1);
                    switch (_0x28a7e1.action) {
                      case "videoAdClick":
                        !function (_0x3b5336, _0x405b7, _0x57f12e) {
                          var _0x2e34b3;
                          var _0x1cf8c5;
                          var _0x382b1b;
                          LOG("BQT_AD", "encouragePopAdClickHandler=====>广告点击", _0x3b5336);
                          if (0x1 == (null == _0x3b5336 || null === (_0x2e34b3 = _0x3b5336.popData) || undefined === _0x2e34b3 || null === (_0x1cf8c5 = _0x2e34b3.popConfig) || undefined === _0x1cf8c5 || null === (_0x382b1b = _0x1cf8c5.commonStyle) || undefined === _0x382b1b ? undefined : _0x382b1b.useType)) {
                            LOG("VIEW", "当前弹窗的用途为激励视频");
                            AD_SDK.hideBannerAdv();
                            AD_SDK.getVedioAdv({
                              scenario: "激励视频通用弹窗",
                              popGroupName: _0x3b5336.popData.popConfig.popGroupName,
                              popName: _0x3b5336.popData.popConfig.popName,
                              pageName: _0x405b7.pageName,
                              success: _0x58fa2a => {
                                LOG("VIEW", ">>>>>>>>>>>>>>>>视频广告播放完成", _0x58fa2a);
                                AD_SDK.showBannerAdv();
                                _0x59fede.videoBqtConfig.isShow = false;
                                _0x15ca6a(_0x3b5336, _0x405b7, _0x57f12e);
                              },
                              incomplete: _0x47781d => {
                                AD_SDK.showBannerAdv();
                                LOG("VIEW", ">>>>>>>>>>>>>>>>视频广告播放未完成", _0x47781d);
                                LOG("VIEW", "obj.popData.popConfig.commonStyle.notViewBackClosePopup", _0x3b5336.popData.popConfig.commonStyle.notViewBackClosePopup);
                                if (0x1 == _0x3b5336.popData.popConfig.commonStyle.notViewBackClosePopup) {
                                  _0x59fede.videoBqtConfig.isShow = false;
                                  _0x370d12(_0x3b5336, _0x405b7, _0x57f12e);
                                } else {
                                  $utils.showToast("视频广告需要看完呦！");
                                }
                              },
                              fail: _0x2e5521 => {
                                AD_SDK.showBannerAdv();
                                LOG("VIEW", ">>>>>>>>>>>>>>>>视频广告播放失败", _0x2e5521);
                                $utils.showToast("当前暂无广告,请稍后重试");
                                _0x59fede.videoBqtConfig.isShow = false;
                                _0x370d12(_0x3b5336, _0x405b7, _0x57f12e);
                              },
                              error: _0x2703c1 => {
                                AD_SDK.showBannerAdv();
                                LOG("VIEW", ">>>>>>>>>>>>>>>>视频广告拉取失败", _0x2703c1);
                                $utils.showToast("当前暂无广告,请稍后重试");
                                _0x59fede.videoBqtConfig.isShow = false;
                                _0x370d12(_0x3b5336, _0x405b7, _0x57f12e);
                              }
                            });
                          } else {
                            LOG("VIEW", "当前弹窗的用途为非激励视频");
                            _0x59fede.videoBqtConfig.isShow = false;
                            _0x15ca6a(_0x3b5336, _0x405b7, _0x57f12e);
                            (function (_0x14792c, _0x25aa99, _0x59d632) {
                              if (_0x14792c.compData && _0x14792c.compData.addDesktopStatus) {
                                (function (_0x28d318, _0x3aba15, _0x6a8550) {
                                  if (!(0x1 != _0x28d318.compData.addDesktopStatus && 0x2 != _0x28d318.compData.addDesktopStatus)) {
                                    _0x1ab7b1("isIcon", true);
                                  }
                                  switch (_0x28d318.compData.addDesktopStatus) {
                                    case 0x1:
                                      $app_require$("@app-module/system.shortcut").install({
                                        success: function () {
                                          $utils.showToast("加桌成功");
                                          _0x3aba15.addDeskTopStatus = 0x1;
                                          _0x3aba15.setAddDesktopInfo();
                                          COMMON_REPORT_UTILS.add_icon_report("成功", "加桌弹窗", _0x6a8550.pageName, _0x28d318.popData.popConfig.popName);
                                        },
                                        fail: function (_0x4228af, _0x43a040) {
                                          COMMON_REPORT_UTILS.add_icon_report("失败", "加桌弹窗", _0x6a8550.pageName, _0x28d318.popData.popConfig.popName);
                                        }
                                      });
                                      break;
                                    case 0x2:
                                      $utils.showToast("加桌成功");
                                      _0x3aba15.addDeskTopStatus = 0x1;
                                      _0x3aba15.setAddDesktopInfo();
                                      COMMON_REPORT_UTILS.add_icon_report("成功", "加桌弹窗", _0x6a8550.pageName, _0x28d318.popData.popConfig.popName);
                                      break;
                                    case 0x3:
                                      COMMON_REPORT_UTILS.add_icon_report("失败", "加桌弹窗", _0x6a8550.pageName, _0x28d318.popData.popConfig.popName);
                                  }
                                })(_0x14792c, _0x59d632, _0x25aa99);
                              }
                            })(_0x3b5336, _0x405b7, _0x57f12e);
                          }
                        }(_0x28a7e1, _0x545a3a, _0x2ee20a);
                        break;
                      case "backPress":
                        !function (_0x258411, _0x17874e, _0x100796) {
                          LOG("BQT_AD", "encouragePopBackPressHandler=====>物理返回", _0x258411);
                          let _0x19f94e = {
                            ad_position: _0x258411.popData.popConfig.popName,
                            page_type: _0x258411.popData.popConfig.popGroupName
                          };
                          switch (_0x258411.actionCode) {
                            case "PAGE_ENTRY":
                            case "POPUP_CLOSE":
                              _0xa47088(_0x17874e, "POPUP_CLOSE", _0x258411.popData.popConfig.code, _0x17874e.pageRoute, _0x100796);
                              COMMON_REPORT_UTILS.back_click_report(_0x19f94e.ad_position, _0x19f94e.page_type, "关闭弹窗");
                              break;
                            case "PAGE_BACK":
                              _0x12827d(_0x17874e.pageCode, _0x100796, true, _0x19f94e);
                          }
                        }(_0x28a7e1, _0x545a3a, _0x2ee20a);
                        break;
                      case "backIconClick":
                        !function (_0x20d1c6, _0x1a5c00, _0x4d2baf) {
                          LOG("BQT_AD", "encouragePopBackIconClickHandler=====>返回按钮点击", _0x20d1c6);
                          _0xa47088(_0x1a5c00, "POPUP_CLOSE", _0x20d1c6.popData.popConfig.code, _0x1a5c00.pageRoute, _0x4d2baf);
                        }(_0x28a7e1, _0x545a3a, _0x2ee20a);
                        break;
                      case "closeClick":
                        !function (_0x3e5563, _0x7e522c, _0x10c261) {
                          LOG("BQT_AD", "encouragePopCloseClickHandler=====>关闭按钮点击", _0x3e5563);
                          _0xa47088(_0x7e522c, "POPUP_CLOSE", _0x3e5563.popData.popConfig.code, _0x7e522c.pageRoute, _0x10c261);
                        }(_0x28a7e1, _0x545a3a, _0x2ee20a);
                        break;
                      case "negClick":
                        !function (_0x9b81e4, _0x331c8c, _0x244942) {
                          LOG("BQT_AD", "encouragePopNegClickHandler=====>负向按钮点击", _0x9b81e4);
                          _0x370d12(_0x9b81e4, _0x331c8c, _0x244942, true);
                        }(_0x28a7e1, _0x545a3a, _0x2ee20a);
                        break;
                      case "popCodeError":
                        !function (_0x204f57, _0x29c2af, _0x4faf4c) {
                          LOG("BQT_AD", "encourageAdLoadFailedHandler=====>广告获取失败", _0x204f57);
                          _0x4e61f0(_0x204f57, _0x29c2af, _0x4faf4c);
                        }(_0x28a7e1, _0x545a3a, _0x2ee20a);
                    }
                  }(_0x391c5d, _0x5e4744, _0x3e2d9a);
              }
            },
            baiduPopAdClickdCallBack: function (_0x45bff4, _0x227596, _0xfe60dd, _0x452978 = false) {
              LOG("baiduPopAdClickdCallBack===================>", _0x227596);
              if (_0x452978) {
                try {
                  COMMON_REPORT_UTILS.ad_overtime_report(_0x45bff4.popData.advConfig.scenario);
                } catch (_0x1cb6eb) {
                  LOG(_0x1cb6eb);
                }
              }
              switch (Number(_0x45bff4.popData.popConfig.btnStyle.jumpKey)) {
                case 0x1:
                  let _0x48232c = _0x45bff4.popData.popConfig.btnStyle.jumpValue;
                  $utils.routetheUrl(_0x2135ed["default"][_0x48232c].path, _0x1ca5ef(_0x1ca5ef({}, _0x2135ed["default"][_0x48232c].param), {}, {
                    pathUrl: _0x227596.pageName
                  }), false);
                  break;
                case 0x2:
                  _0x12827d(_0x227596.pageCode, _0xfe60dd);
                  break;
                case 0x3:
                  try {
                    _0x59fede.$app.exit();
                  } catch (_0x44b151) {}
                  break;
                case 0x4:
                  _0xa47088(_0x227596, "POPUP_CLOSE", _0x45bff4.popData.popConfig.code, _0x227596.pageRoute, _0xfe60dd);
              }
            },
            reportActionPopType: _0x21ecc1,
            resetActionPopType: function () {
              _0x38039c = "";
            },
            readFunctionPopAdClick: _0x15ca6a,
            setIntervalAttr: function () {
              _0x4aa44f = Date.now();
              LOG(" mxt 设置点击间隔", _0x4aa44f);
            },
            action2Name: _0x5725a7,
            commonReceiveCoinFunc: _0x2a82bb,
            getPopDataOfCode: async function (_0x2bb42d) {
              if (_0x3095d0[_0x2bb42d]) {
                LOG("根据code 获取当前弹窗数据 ，缓存的数据中有", _0x2bb42d);
                return Promise.resolve(JSON.parse(JSON.stringify(_0x3095d0[_0x2bb42d])));
              }
              {
                LOG("根据code 获取当前弹窗数据，缓存的数据中没有，请求一个新的 缓存起来 ", _0x2bb42d);
                let _0x56bc2e = await TACTICS_SDK_UTILS.getPopupConfigByPopupCode(_0x2bb42d);
                _0x3095d0[_0x2bb42d] = _0x56bc2e;
                return Promise.resolve(JSON.parse(JSON.stringify(_0x56bc2e)));
              }
            },
            delPopDataOFCode: _0x540aff,
            getDynamicText: function (_0x246c25) {
              if (_0x246c25) {
                return _0x5f5493[_0x246c25] || "";
              }
            },
            setDynamicText: function (_0x52060e, _0x183d92) {
              _0x5f5493[_0x52060e] = _0x183d92;
            },
            getMainFakePage: function () {
              return _0x59fede;
            },
            handleFakePage: function (_0xb0487a, _0x99be78, _0x461f91) {
              if (_0x59fede && _0x59fede.updatePage) {
                setTimeout(() => {
                  _0x59fede.updatePage(_0xb0487a, _0x1ca5ef(_0x1ca5ef({}, _0x99be78), {}, {
                    clearRouter: _0x461f91
                  }));
                }, 0x64);
              } else {
                LOG(_0x59fede, "请在自身页面定义假页面处理逻辑");
              }
            },
            isFakePage: function (_0x1da67) {
              let _0x96097a = false;
              try {
                _0x96097a = TACTICS_SDK.getGlobalData("configInfo").config.open_false_page;
                _0x96097a = _0x96097a && Number(_0x96097a.val) || 0x0;
                _0x96097a = _0x96097a && _0x59fede && _0x59fede.isFakePage && _0x530367["default"][_0x1da67];
              } catch (_0x5d0583) {}
              return _0x96097a;
            },
            setFakePageView: function (_0x5d1d02) {
              _0x503ad4 = _0x5d1d02;
            },
            getVisible: function () {
              return _0x59fede.$visible;
            },
            interstBackPressHandle: _0x3a5799,
            interstAutoCloseHandle: async function (_0x231f64 = false) {
              const _0x590308 = TACTICS_SDK.getGlobalData("configInfo");
              const _0x1a70fa = _0x590308.config.is_open_app_show_interst_ad;
              if (0x0 === (_0x1a70fa ? Number(_0x1a70fa.val) : 0x0)) {
                LOG("进入插屏", "开关关闭");
                return false;
              }
              const _0x4b6a32 = _0x590308.config.interst_ad_auto_close;
              let _0x2a29c8 = _0x4b6a32 ? Number(_0x4b6a32.val) : 0x0;
              if ("vivo" === _0x59fede.$app.$def.brand) {
                _0x2a29c8 = 0x0;
              }
              if (0x0 === _0x2a29c8) {
                const _0x556d26 = await _0x590b7b("切屏", _0x231f64);
                LOG("进入插屏", "请求结果", _0x556d26);
                return _0x556d26;
              }
              const _0x437dba = _0x590308.config.interst_ad_auto_close_time;
              const _0x3c0095 = _0x437dba ? Number(_0x437dba.val) : 0x0;
              const _0x3c3749 = await _0x590b7b("切屏");
              LOG("进入插屏", "请求结果", _0x3c3749);
              if (_0x120c02) {
                clearTimeout(_0x120c02);
                _0x120c02 = null;
              }
              _0x120c02 = setTimeout(() => {
                AD_SDK.hideInterstAdv();
              }, _0x3c0095);
              return _0x3c3749;
            },
            getPlatformVersionCode: function () {
              return _0x59fede.$app.$def.deviceInfo && _0x59fede.$app.$def.deviceInfo.platformVersionCode;
            }
          };
        },
        0x1808e: (_0x1e07c7, _0x783ae0) => {
          "use strict";

          Object.defineProperty(_0x783ae0, "__esModule", {
            value: true
          });
          _0x783ae0["default"] = undefined;
          var _0x2003d6;
          var _0x11ab48 = (_0x2003d6 = $app_require$("@app-module/system.fetch")) && _0x2003d6.__esModule ? _0x2003d6 : {
            default: _0x2003d6
          };
          _0x783ae0["default"] = {
            array2group: function (_0x4ab3cf, _0x24cd83) {
              let _0x59eb5d = 0x0;
              let _0x252ee2 = [];
              for (; _0x59eb5d < _0x4ab3cf.length;) {
                _0x252ee2.push(_0x4ab3cf.slice(_0x59eb5d, _0x59eb5d += _0x24cd83));
              }
              return _0x252ee2;
            },
            getTxtContent: function (_0x607eec) {
              return new Promise((_0x2e6420, _0x15bf6a) => {
                _0x11ab48["default"].fetch({
                  url: _0x607eec,
                  responseType: "text",
                  success: function (_0x174368) {
                    _0x2e6420(_0x174368.data);
                  },
                  fail: function (_0x55ce3b, _0x492265) {
                    _0x15bf6a();
                  }
                });
              });
            },
            cutStr: function (_0x35b392, _0x1c1402) {
              var _0x5cd6c5 = [];
              let _0x38c43d = 0x0;
              var _0x1518d9 = 0x0;
              for (var _0x21d273 = _0x35b392.length; _0x1518d9 < _0x21d273 / _0x1c1402; _0x1518d9++) {
                var _0x2630dd;
                if ("\0" == _0x35b392.substring(_0x1c1402 * (_0x1518d9 + 0x1) - 0x1, _0x1c1402 * (_0x1518d9 + 0x1) + 0x1)) {
                  _0x2630dd = _0x35b392.slice(_0x1c1402 * _0x1518d9 + _0x38c43d, _0x1c1402 * (_0x1518d9 + 0x1) + 0x1 + _0x38c43d);
                  _0x38c43d++;
                } else {
                  _0x2630dd = _0x35b392.slice(_0x1c1402 * _0x1518d9 + _0x38c43d, _0x1c1402 * (_0x1518d9 + 0x1) + _0x38c43d);
                }
                _0x2630dd += "\n";
                _0x5cd6c5.push(_0x2630dd);
              }
              return _0x5cd6c5;
            },
            getPopCodeConfig: function (_0x2055f8) {
              LOG("getPopCodeConfig", _0x2055f8);
              return new Promise((_0x307f02, _0x1b985f) => {
                _0x11ab48["default"].fetch({
                  url: _0x2055f8,
                  responseType: "text",
                  success: function (_0x1ebcf2) {
                    LOG("getPopCodeConfig", _0x1ebcf2);
                    if (_0x1ebcf2.code >= 0x190) {
                      _0x1b985f();
                    } else {
                      _0x307f02(_0x1ebcf2.data);
                    }
                  },
                  fail: function (_0x58f51e, _0x4d9638) {
                    LOG("getPopCodeConfig", _0x58f51e, _0x4d9638);
                    _0x1b985f();
                  }
                });
              });
            },
            replaceMatchStr: function (_0x423866, _0x4f30b3, _0x30ae88) {
              return _0x423866.replace(_0x4f30b3, function (_0x4da5d9) {
                let _0x257fb5 = "";
                if (-0x1 != _0x30ae88.findIndex(_0x563cfa => "#@&" + _0x563cfa + "&@#" == _0x4da5d9)) {
                  _0x257fb5 = "\0";
                }
                return _0x257fb5;
              });
            },
            customArrayGroup: function (_0x50aba0, _0x2ee61b, _0x352bd4, _0x119ec0) {
              let _0x54a77f = 0x0;
              let _0x423592 = [];
              for (; _0x54a77f < _0x50aba0.length;) {
                _0x423592.push(_0x50aba0.slice(_0x54a77f, _0x54a77f += _0x2ee61b));
              }
              if (!_0x119ec0) {
                let _0x23f3f9 = _0x423592.length;
                let _0x3fead6 = _0x423592[_0x23f3f9 - 0x1];
                let _0x3c94ca = Math.abs(_0x3fead6.length + _0x352bd4 - _0x2ee61b);
                if (_0x3fead6.length + _0x352bd4 > _0x2ee61b) {
                  _0x423592.push([]);
                  _0x423592[_0x423592.length - 0x1].unshift(..._0x3fead6.splice(_0x3c94ca));
                } else {
                  if (0x0 != _0x3c94ca && _0x23f3f9 > 0x1) {
                    let _0x267793 = _0x423592[_0x23f3f9 - 0x2].length;
                    _0x3fead6.unshift(..._0x423592[_0x23f3f9 - 0x2].splice(_0x267793 - _0x3c94ca));
                  }
                }
              }
              return _0x423592;
            },
            renameConfig: function (_0x1c3206) {
              return _0x1c3206.replace(/[^-.]/g, _0x155a35 => String.fromCharCode(_0x155a35.charCodeAt(0x0) + 0x1));
            },
            testRenameConfig: function (_0x4d01c3) {
              return _0x4d01c3.replace(/[^-.]/g, _0x3a5ea6 => String.fromCharCode(_0x3a5ea6.charCodeAt(0x0) - 0x1));
            }
          };
        },
        0xe02f: (_0x5f7bc0, _0x23505a) => {
          "use strict";

          Object.defineProperty(_0x23505a, "__esModule", {
            value: true
          });
          _0x23505a["default"] = undefined;
        },
        0x27a4: (_0x52c544, _0x3f666c, _0x4a22d4) => {
          "use strict";

          Object.defineProperty(_0x3f666c, "__esModule", {
            value: true
          });
          _0x3f666c["default"] = undefined;
          var _0x4ad936 = $app_require$("@app-module/system.storage") && $app_require$("@app-module/system.storage").__esModule ? $app_require$("@app-module/system.storage") : {
            default: $app_require$("@app-module/system.storage")
          };
          var _0x41a6b8 = $app_require$("@app-module/system.fetch") && $app_require$("@app-module/system.fetch").__esModule ? $app_require$("@app-module/system.fetch") : {
            default: $app_require$("@app-module/system.fetch")
          };
          var _0x578413 = $app_require$("@app-module/system.device") && $app_require$("@app-module/system.device").__esModule ? $app_require$("@app-module/system.device") : {
            default: $app_require$("@app-module/system.device")
          };
          var _0x2e9e8e = $app_require$("@app-module/system.network") && $app_require$("@app-module/system.network").__esModule ? $app_require$("@app-module/system.network") : {
            default: $app_require$("@app-module/system.network")
          };
          var _0x1d2a08 = $app_require$("@app-module/service.account") && $app_require$("@app-module/service.account").__esModule ? $app_require$("@app-module/service.account") : {
            default: $app_require$("@app-module/service.account")
          };
          var _0x29d387 = $app_require$("@app-module/system.shortcut") && $app_require$("@app-module/system.shortcut").__esModule ? $app_require$("@app-module/system.shortcut") : {
            default: $app_require$("@app-module/system.shortcut")
          };
          var _0x5d080f = $app_require$("@app-module/system.file") && $app_require$("@app-module/system.file").__esModule ? $app_require$("@app-module/system.file") : {
            default: $app_require$("@app-module/system.file")
          };
          var _0x35fd57 = _0x4a22d4(0x195) && _0x4a22d4(0x195).__esModule ? _0x4a22d4(0x195) : {
            default: _0x4a22d4(0x195)
          };
          var _0x3d6be1 = $app_require$("@app-module/system.app") && $app_require$("@app-module/system.app").__esModule ? $app_require$("@app-module/system.app") : {
            default: $app_require$("@app-module/system.app")
          };
          var _0x1c1850 = $app_require$("@app-module/system.router") && $app_require$("@app-module/system.router").__esModule ? $app_require$("@app-module/system.router") : {
            default: $app_require$("@app-module/system.router")
          };
          var _0x29dbae = _0x4a22d4(0x245a) && _0x4a22d4(0x245a).__esModule ? _0x4a22d4(0x245a) : {
            default: _0x4a22d4(0x245a)
          };
          var _0x20f167;
          var _0x3c0097 = _0x3c0097 || function (_0x40fd79) {
            var _0x57bb25 = {};
            var _0x4ab95c = _0x57bb25.lib = {};
            var _0x3b5737 = function () {};
            var _0x4a2226 = _0x4ab95c.Base = {
              extend: function (_0x443863) {
                _0x3b5737.prototype = this;
                var _0x46e901 = new _0x3b5737();
                if (_0x443863) {
                  _0x46e901.mixIn(_0x443863);
                }
                if (!_0x46e901.hasOwnProperty("init")) {
                  _0x46e901.init = function () {
                    _0x46e901.$super.init.apply(this, arguments);
                  };
                }
                _0x46e901.init.prototype = _0x46e901;
                _0x46e901.$super = this;
                return _0x46e901;
              },
              create: function () {
                var _0x113272 = this.extend();
                _0x113272.init.apply(_0x113272, arguments);
                return _0x113272;
              },
              init: function () {},
              mixIn: function (_0x8507bc) {
                for (var _0x49dd26 in _0x8507bc) if (_0x8507bc.hasOwnProperty(_0x49dd26)) {
                  this[_0x49dd26] = _0x8507bc[_0x49dd26];
                }
                if (_0x8507bc.hasOwnProperty("toString")) {
                  this.toString = _0x8507bc.toString;
                }
              },
              clone: function () {
                return this.init.prototype.extend(this);
              }
            };
            var _0x20cfb0 = _0x4ab95c.WordArray = _0x4a2226.extend({
              init: function (_0x28e2bf, _0x27d4e3) {
                _0x28e2bf = this.words = _0x28e2bf || [];
                this.sigBytes = null != _0x27d4e3 ? _0x27d4e3 : 0x4 * _0x28e2bf.length;
              },
              toString: function (_0x2ed5af) {
                return (_0x2ed5af || _0x554e0d).stringify(this);
              },
              concat: function (_0x3eb372) {
                var _0x3128cd = this.words;
                var _0x139a0b = _0x3eb372.words;
                var _0x451063 = this.sigBytes;
                _0x3eb372 = _0x3eb372.sigBytes;
                this.clamp();
                if (_0x451063 % 0x4) {
                  for (var _0x43a61b = 0x0; _0x43a61b < _0x3eb372; _0x43a61b++) {
                    _0x3128cd[_0x451063 + _0x43a61b >>> 0x2] |= (_0x139a0b[_0x43a61b >>> 0x2] >>> 0x18 - _0x43a61b % 0x4 * 0x8 & 0xff) << 0x18 - (_0x451063 + _0x43a61b) % 0x4 * 0x8;
                  }
                } else {
                  if (0xffff < _0x139a0b.length) {
                    for (_0x43a61b = 0x0; _0x43a61b < _0x3eb372; _0x43a61b += 0x4) {
                      _0x3128cd[_0x451063 + _0x43a61b >>> 0x2] = _0x139a0b[_0x43a61b >>> 0x2];
                    }
                  } else {
                    _0x3128cd.push.apply(_0x3128cd, _0x139a0b);
                  }
                }
                this.sigBytes += _0x3eb372;
                return this;
              },
              clamp: function () {
                var _0x28d031 = this.words;
                var _0x515ce3 = this.sigBytes;
                _0x28d031[_0x515ce3 >>> 0x2] &= 0xffffffff << 0x20 - _0x515ce3 % 0x4 * 0x8;
                _0x28d031.length = _0x40fd79.ceil(_0x515ce3 / 0x4);
              },
              clone: function () {
                var _0x4270e1 = _0x4a2226.clone.call(this);
                _0x4270e1.words = this.words.slice(0x0);
                return _0x4270e1;
              },
              random: function (_0x1d1f8b) {
                var _0x14380c = [];
                for (var _0x14ea1f = 0x0; _0x14ea1f < _0x1d1f8b; _0x14ea1f += 0x4) {
                  _0x14380c.push(0x100000000 * _0x40fd79.random() | 0x0);
                }
                return new _0x20cfb0.init(_0x14380c, _0x1d1f8b);
              }
            });
            var _0x3fd888 = _0x57bb25.enc = {};
            var _0x554e0d = _0x3fd888.Hex = {
              stringify: function (_0x5831e9) {
                var _0xfd55fd = _0x5831e9.words;
                _0x5831e9 = _0x5831e9.sigBytes;
                var _0x3c1571 = [];
                for (var _0x3384d7 = 0x0; _0x3384d7 < _0x5831e9; _0x3384d7++) {
                  var _0x36bd0b = _0xfd55fd[_0x3384d7 >>> 0x2] >>> 0x18 - _0x3384d7 % 0x4 * 0x8 & 0xff;
                  _0x3c1571.push((_0x36bd0b >>> 0x4).toString(0x10));
                  _0x3c1571.push((0xf & _0x36bd0b).toString(0x10));
                }
                return _0x3c1571.join("");
              },
              parse: function (_0x23705f) {
                var _0x1e4b69 = _0x23705f.length;
                var _0x1cf3d3 = [];
                for (var _0x4cf950 = 0x0; _0x4cf950 < _0x1e4b69; _0x4cf950 += 0x2) {
                  _0x1cf3d3[_0x4cf950 >>> 0x3] |= parseInt(_0x23705f.substr(_0x4cf950, 0x2), 0x10) << 0x18 - _0x4cf950 % 0x8 * 0x4;
                }
                return new _0x20cfb0.init(_0x1cf3d3, _0x1e4b69 / 0x2);
              }
            };
            var _0x3d8a6b = _0x3fd888.Latin1 = {
              stringify: function (_0x5ca396) {
                var _0x5b8c62 = _0x5ca396.words;
                _0x5ca396 = _0x5ca396.sigBytes;
                var _0x2e0295 = [];
                for (var _0x1d45ef = 0x0; _0x1d45ef < _0x5ca396; _0x1d45ef++) {
                  _0x2e0295.push(String.fromCharCode(_0x5b8c62[_0x1d45ef >>> 0x2] >>> 0x18 - _0x1d45ef % 0x4 * 0x8 & 0xff));
                }
                return _0x2e0295.join("");
              },
              parse: function (_0x289d8e) {
                var _0x464866 = _0x289d8e.length;
                var _0x3a6d88 = [];
                for (var _0x16b3cb = 0x0; _0x16b3cb < _0x464866; _0x16b3cb++) {
                  _0x3a6d88[_0x16b3cb >>> 0x2] |= (0xff & _0x289d8e.charCodeAt(_0x16b3cb)) << 0x18 - _0x16b3cb % 0x4 * 0x8;
                }
                return new _0x20cfb0.init(_0x3a6d88, _0x464866);
              }
            };
            var _0xea54d1 = _0x3fd888.Utf8 = {
              stringify: function (_0x3306f0) {
                try {
                  return decodeURIComponent(escape(_0x3d8a6b.stringify(_0x3306f0)));
                } catch (_0x2aabea) {
                  throw Error("Malformed UTF-8 data");
                }
              },
              parse: function (_0x4c21b3) {
                return _0x3d8a6b.parse(unescape(encodeURIComponent(_0x4c21b3)));
              }
            };
            var _0x330599 = _0x4ab95c.BufferedBlockAlgorithm = _0x4a2226.extend({
              reset: function () {
                this._data = new _0x20cfb0.init();
                this._nDataBytes = 0x0;
              },
              _append: function (_0x13a0b4) {
                if ("string" == typeof _0x13a0b4) {
                  _0x13a0b4 = _0xea54d1.parse(_0x13a0b4);
                }
                this._data.concat(_0x13a0b4);
                this._nDataBytes += _0x13a0b4.sigBytes;
              },
              _process: function (_0x5314fc) {
                var _0x3c78f0 = this._data;
                var _0x3ee899 = _0x3c78f0.words;
                var _0x13e945 = _0x3c78f0.sigBytes;
                var _0x5e4279 = this.blockSize;
                var _0x149392 = _0x13e945 / (0x4 * _0x5e4279);
                _0x5314fc = (_0x149392 = _0x5314fc ? _0x40fd79.ceil(_0x149392) : _0x40fd79.max((0x0 | _0x149392) - this._minBufferSize, 0x0)) * _0x5e4279;
                _0x13e945 = _0x40fd79.min(0x4 * _0x5314fc, _0x13e945);
                if (_0x5314fc) {
                  for (var _0x5c9287 = 0x0; _0x5c9287 < _0x5314fc; _0x5c9287 += _0x5e4279) {
                    this._doProcessBlock(_0x3ee899, _0x5c9287);
                  }
                  _0x5c9287 = _0x3ee899.splice(0x0, _0x5314fc);
                  _0x3c78f0.sigBytes -= _0x13e945;
                }
                return new _0x20cfb0.init(_0x5c9287, _0x13e945);
              },
              clone: function () {
                var _0x35cf4b = _0x4a2226.clone.call(this);
                _0x35cf4b._data = this._data.clone();
                return _0x35cf4b;
              },
              _minBufferSize: 0x0
            });
            _0x4ab95c.Hasher = _0x330599.extend({
              cfg: _0x4a2226.extend(),
              init: function (_0x2957ba) {
                this.cfg = this.cfg.extend(_0x2957ba);
                this.reset();
              },
              reset: function () {
                _0x330599.reset.call(this);
                this._doReset();
              },
              update: function (_0x57da68) {
                this._append(_0x57da68);
                this._process();
                return this;
              },
              finalize: function (_0x36aa64) {
                if (_0x36aa64) {
                  this._append(_0x36aa64);
                }
                return this._doFinalize();
              },
              blockSize: 0x10,
              _createHelper: function (_0x5d2fe0) {
                return function (_0x1588e6, _0x547be4) {
                  return new _0x5d2fe0.init(_0x547be4).finalize(_0x1588e6);
                };
              },
              _createHmacHelper: function (_0x3d6467) {
                return function (_0xbc8ee2, _0x131c03) {
                  return new _0x1b0f4f.HMAC.init(_0x3d6467, _0x131c03).finalize(_0xbc8ee2);
                };
              }
            });
            var _0x1b0f4f = _0x57bb25.algo = {};
            return _0x57bb25;
          }(Math);
          _0x20f167 = _0x3c0097.lib.WordArray;
          _0x3c0097.enc.Base64 = {
            stringify: function (_0x5de294) {
              var _0x1797eb = _0x5de294.words;
              var _0x13e870 = _0x5de294.sigBytes;
              var _0x2c2570 = this._map;
              _0x5de294.clamp();
              _0x5de294 = [];
              for (var _0x2b104d = 0x0; _0x2b104d < _0x13e870; _0x2b104d += 0x3) {
                var _0x18003d = (_0x1797eb[_0x2b104d >>> 0x2] >>> 0x18 - _0x2b104d % 0x4 * 0x8 & 0xff) << 0x10 | (_0x1797eb[_0x2b104d + 0x1 >>> 0x2] >>> 0x18 - (_0x2b104d + 0x1) % 0x4 * 0x8 & 0xff) << 0x8 | _0x1797eb[_0x2b104d + 0x2 >>> 0x2] >>> 0x18 - (_0x2b104d + 0x2) % 0x4 * 0x8 & 0xff;
                for (var _0x5605f9 = 0x0; 0x4 > _0x5605f9 && _0x2b104d + 0.75 * _0x5605f9 < _0x13e870; _0x5605f9++) {
                  _0x5de294.push(_0x2c2570.charAt(_0x18003d >>> 0x6 * (0x3 - _0x5605f9) & 0x3f));
                }
              }
              if (_0x1797eb = _0x2c2570.charAt(0x40)) {
                for (; _0x5de294.length % 0x4;) {
                  _0x5de294.push(_0x1797eb);
                }
              }
              return _0x5de294.join("");
            },
            parse: function (_0x11ad5c) {
              var _0x436830 = _0x11ad5c.length;
              var _0x48ce29 = this._map;
              if ((_0x5edfd = _0x48ce29.charAt(0x40)) && -0x1 != (_0x5edfd = _0x11ad5c.indexOf(_0x5edfd))) {
                _0x436830 = _0x5edfd;
              }
              var _0x5edfd = [];
              var _0x380362 = 0x0;
              for (var _0x47359f = 0x0; _0x47359f < _0x436830; _0x47359f++) {
                if (_0x47359f % 0x4) {
                  var _0x3121e2 = _0x48ce29.indexOf(_0x11ad5c.charAt(_0x47359f - 0x1)) << _0x47359f % 0x4 * 0x2;
                  var _0x3f03e2 = _0x48ce29.indexOf(_0x11ad5c.charAt(_0x47359f)) >>> 0x6 - _0x47359f % 0x4 * 0x2;
                  _0x5edfd[_0x380362 >>> 0x2] |= (_0x3121e2 | _0x3f03e2) << 0x18 - _0x380362 % 0x4 * 0x8;
                  _0x380362++;
                }
              }
              return _0x20f167.create(_0x5edfd, _0x380362);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
          (function (_0x59973) {
            function _0x2f83c3(_0x44e13a, _0x1944bf, _0x5764bc, _0x2a67ef, _0x3b0da2, _0x43e878, _0x2da5f1) {
              return ((_0x44e13a = _0x44e13a + (_0x1944bf & _0x5764bc | ~_0x1944bf & _0x2a67ef) + _0x3b0da2 + _0x2da5f1) << _0x43e878 | _0x44e13a >>> 0x20 - _0x43e878) + _0x1944bf;
            }
            function _0x11a261(_0x25b1d1, _0x37b504, _0x375cf4, _0x598224, _0x5bf4bc, _0x91a05, _0x5cc3ee) {
              return ((_0x25b1d1 = _0x25b1d1 + (_0x37b504 & _0x598224 | _0x375cf4 & ~_0x598224) + _0x5bf4bc + _0x5cc3ee) << _0x91a05 | _0x25b1d1 >>> 0x20 - _0x91a05) + _0x37b504;
            }
            function _0xb9393a(_0x23c31c, _0x50ead2, _0x4d32fd, _0x45dc53, _0x5b957e, _0x2ec7de, _0x59ee56) {
              return ((_0x23c31c = _0x23c31c + (_0x50ead2 ^ _0x4d32fd ^ _0x45dc53) + _0x5b957e + _0x59ee56) << _0x2ec7de | _0x23c31c >>> 0x20 - _0x2ec7de) + _0x50ead2;
            }
            function _0x1e7cf4(_0x5624da, _0x2aca42, _0xe913ca, _0x744c80, _0x3a6e42, _0x668c00, _0x56c769) {
              return ((_0x5624da = _0x5624da + (_0xe913ca ^ (_0x2aca42 | ~_0x744c80)) + _0x3a6e42 + _0x56c769) << _0x668c00 | _0x5624da >>> 0x20 - _0x668c00) + _0x2aca42;
            }
            var _0x53b09b = (_0x292ab2 = _0x3c0097.lib).WordArray;
            var _0xd69b0a = _0x292ab2.Hasher;
            var _0x292ab2 = _0x3c0097.algo;
            var _0x516c2c = [];
            for (var _0x1d645a = 0x0; 0x40 > _0x1d645a; _0x1d645a++) {
              _0x516c2c[_0x1d645a] = 0x100000000 * _0x59973.abs(_0x59973.sin(_0x1d645a + 0x1)) | 0x0;
            }
            _0x292ab2 = _0x292ab2.MD5 = _0xd69b0a.extend({
              _doReset: function () {
                this._hash = new _0x53b09b.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
              },
              _doProcessBlock: function (_0x3b0470, _0x4e8190) {
                for (var _0x458eb8 = 0x0; 0x10 > _0x458eb8; _0x458eb8++) {
                  var _0x41d222 = _0x3b0470[_0x3c89a8 = _0x4e8190 + _0x458eb8];
                  _0x3b0470[_0x3c89a8] = 0xff00ff & (_0x41d222 << 0x8 | _0x41d222 >>> 0x18) | 0xff00ff00 & (_0x41d222 << 0x18 | _0x41d222 >>> 0x8);
                }
                _0x458eb8 = this._hash.words;
                var _0x3c89a8 = _0x3b0470[_0x4e8190 + 0x0];
                _0x41d222 = _0x3b0470[_0x4e8190 + 0x1];
                var _0x2beb15 = _0x3b0470[_0x4e8190 + 0x2];
                var _0x6f5ddb = _0x3b0470[_0x4e8190 + 0x3];
                var _0x527bef = _0x3b0470[_0x4e8190 + 0x4];
                var _0x3a4cf4 = _0x3b0470[_0x4e8190 + 0x5];
                var _0x55a953 = _0x3b0470[_0x4e8190 + 0x6];
                var _0x3fb414 = _0x3b0470[_0x4e8190 + 0x7];
                var _0x2c99c0 = _0x3b0470[_0x4e8190 + 0x8];
                var _0x62af79 = _0x3b0470[_0x4e8190 + 0x9];
                var _0x527164 = _0x3b0470[_0x4e8190 + 0xa];
                var _0x483506 = _0x3b0470[_0x4e8190 + 0xb];
                var _0x27ed34 = _0x3b0470[_0x4e8190 + 0xc];
                var _0x217729 = _0x3b0470[_0x4e8190 + 0xd];
                var _0x80f053 = _0x3b0470[_0x4e8190 + 0xe];
                var _0xdbfeb = _0x3b0470[_0x4e8190 + 0xf];
                var _0x534511 = _0x2f83c3(_0x534511 = _0x458eb8[0x0], _0xa48568 = _0x458eb8[0x1], _0x249234 = _0x458eb8[0x2], _0x47f4e7 = _0x458eb8[0x3], _0x3c89a8, 0x7, _0x516c2c[0x0]);
                var _0x47f4e7 = _0x2f83c3(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x41d222, 0xc, _0x516c2c[0x1]);
                var _0x249234 = _0x2f83c3(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x2beb15, 0x11, _0x516c2c[0x2]);
                var _0xa48568 = _0x2f83c3(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x6f5ddb, 0x16, _0x516c2c[0x3]);
                _0x534511 = _0x2f83c3(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x527bef, 0x7, _0x516c2c[0x4]);
                _0x47f4e7 = _0x2f83c3(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x3a4cf4, 0xc, _0x516c2c[0x5]);
                _0x249234 = _0x2f83c3(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x55a953, 0x11, _0x516c2c[0x6]);
                _0xa48568 = _0x2f83c3(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x3fb414, 0x16, _0x516c2c[0x7]);
                _0x534511 = _0x2f83c3(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x2c99c0, 0x7, _0x516c2c[0x8]);
                _0x47f4e7 = _0x2f83c3(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x62af79, 0xc, _0x516c2c[0x9]);
                _0x249234 = _0x2f83c3(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x527164, 0x11, _0x516c2c[0xa]);
                _0xa48568 = _0x2f83c3(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x483506, 0x16, _0x516c2c[0xb]);
                _0x534511 = _0x2f83c3(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x27ed34, 0x7, _0x516c2c[0xc]);
                _0x47f4e7 = _0x2f83c3(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x217729, 0xc, _0x516c2c[0xd]);
                _0x249234 = _0x2f83c3(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x80f053, 0x11, _0x516c2c[0xe]);
                _0x534511 = _0x11a261(_0x534511, _0xa48568 = _0x2f83c3(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0xdbfeb, 0x16, _0x516c2c[0xf]), _0x249234, _0x47f4e7, _0x41d222, 0x5, _0x516c2c[0x10]);
                _0x47f4e7 = _0x11a261(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x55a953, 0x9, _0x516c2c[0x11]);
                _0x249234 = _0x11a261(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x483506, 0xe, _0x516c2c[0x12]);
                _0xa48568 = _0x11a261(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x3c89a8, 0x14, _0x516c2c[0x13]);
                _0x534511 = _0x11a261(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x3a4cf4, 0x5, _0x516c2c[0x14]);
                _0x47f4e7 = _0x11a261(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x527164, 0x9, _0x516c2c[0x15]);
                _0x249234 = _0x11a261(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0xdbfeb, 0xe, _0x516c2c[0x16]);
                _0xa48568 = _0x11a261(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x527bef, 0x14, _0x516c2c[0x17]);
                _0x534511 = _0x11a261(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x62af79, 0x5, _0x516c2c[0x18]);
                _0x47f4e7 = _0x11a261(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x80f053, 0x9, _0x516c2c[0x19]);
                _0x249234 = _0x11a261(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x6f5ddb, 0xe, _0x516c2c[0x1a]);
                _0xa48568 = _0x11a261(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x2c99c0, 0x14, _0x516c2c[0x1b]);
                _0x534511 = _0x11a261(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x217729, 0x5, _0x516c2c[0x1c]);
                _0x47f4e7 = _0x11a261(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x2beb15, 0x9, _0x516c2c[0x1d]);
                _0x249234 = _0x11a261(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x3fb414, 0xe, _0x516c2c[0x1e]);
                _0x534511 = _0xb9393a(_0x534511, _0xa48568 = _0x11a261(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x27ed34, 0x14, _0x516c2c[0x1f]), _0x249234, _0x47f4e7, _0x3a4cf4, 0x4, _0x516c2c[0x20]);
                _0x47f4e7 = _0xb9393a(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x2c99c0, 0xb, _0x516c2c[0x21]);
                _0x249234 = _0xb9393a(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x483506, 0x10, _0x516c2c[0x22]);
                _0xa48568 = _0xb9393a(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x80f053, 0x17, _0x516c2c[0x23]);
                _0x534511 = _0xb9393a(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x41d222, 0x4, _0x516c2c[0x24]);
                _0x47f4e7 = _0xb9393a(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x527bef, 0xb, _0x516c2c[0x25]);
                _0x249234 = _0xb9393a(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x3fb414, 0x10, _0x516c2c[0x26]);
                _0xa48568 = _0xb9393a(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x527164, 0x17, _0x516c2c[0x27]);
                _0x534511 = _0xb9393a(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x217729, 0x4, _0x516c2c[0x28]);
                _0x47f4e7 = _0xb9393a(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x3c89a8, 0xb, _0x516c2c[0x29]);
                _0x249234 = _0xb9393a(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x6f5ddb, 0x10, _0x516c2c[0x2a]);
                _0xa48568 = _0xb9393a(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x55a953, 0x17, _0x516c2c[0x2b]);
                _0x534511 = _0xb9393a(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x62af79, 0x4, _0x516c2c[0x2c]);
                _0x47f4e7 = _0xb9393a(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x27ed34, 0xb, _0x516c2c[0x2d]);
                _0x249234 = _0xb9393a(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0xdbfeb, 0x10, _0x516c2c[0x2e]);
                _0x534511 = _0x1e7cf4(_0x534511, _0xa48568 = _0xb9393a(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x2beb15, 0x17, _0x516c2c[0x2f]), _0x249234, _0x47f4e7, _0x3c89a8, 0x6, _0x516c2c[0x30]);
                _0x47f4e7 = _0x1e7cf4(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x3fb414, 0xa, _0x516c2c[0x31]);
                _0x249234 = _0x1e7cf4(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x80f053, 0xf, _0x516c2c[0x32]);
                _0xa48568 = _0x1e7cf4(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x3a4cf4, 0x15, _0x516c2c[0x33]);
                _0x534511 = _0x1e7cf4(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x27ed34, 0x6, _0x516c2c[0x34]);
                _0x47f4e7 = _0x1e7cf4(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x6f5ddb, 0xa, _0x516c2c[0x35]);
                _0x249234 = _0x1e7cf4(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x527164, 0xf, _0x516c2c[0x36]);
                _0xa48568 = _0x1e7cf4(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x41d222, 0x15, _0x516c2c[0x37]);
                _0x534511 = _0x1e7cf4(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x2c99c0, 0x6, _0x516c2c[0x38]);
                _0x47f4e7 = _0x1e7cf4(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0xdbfeb, 0xa, _0x516c2c[0x39]);
                _0x249234 = _0x1e7cf4(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x55a953, 0xf, _0x516c2c[0x3a]);
                _0xa48568 = _0x1e7cf4(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x217729, 0x15, _0x516c2c[0x3b]);
                _0x534511 = _0x1e7cf4(_0x534511, _0xa48568, _0x249234, _0x47f4e7, _0x527bef, 0x6, _0x516c2c[0x3c]);
                _0x47f4e7 = _0x1e7cf4(_0x47f4e7, _0x534511, _0xa48568, _0x249234, _0x483506, 0xa, _0x516c2c[0x3d]);
                _0x249234 = _0x1e7cf4(_0x249234, _0x47f4e7, _0x534511, _0xa48568, _0x2beb15, 0xf, _0x516c2c[0x3e]);
                _0xa48568 = _0x1e7cf4(_0xa48568, _0x249234, _0x47f4e7, _0x534511, _0x62af79, 0x15, _0x516c2c[0x3f]);
                _0x458eb8[0x0] = _0x458eb8[0x0] + _0x534511 | 0x0;
                _0x458eb8[0x1] = _0x458eb8[0x1] + _0xa48568 | 0x0;
                _0x458eb8[0x2] = _0x458eb8[0x2] + _0x249234 | 0x0;
                _0x458eb8[0x3] = _0x458eb8[0x3] + _0x47f4e7 | 0x0;
              },
              _doFinalize: function () {
                var _0x45b819 = this._data;
                var _0x203aa0 = _0x45b819.words;
                var _0x311de5 = 0x8 * this._nDataBytes;
                var _0x21e110 = 0x8 * _0x45b819.sigBytes;
                _0x203aa0[_0x21e110 >>> 0x5] |= 0x80 << 0x18 - _0x21e110 % 0x20;
                var _0x2f05ca = _0x59973.floor(_0x311de5 / 0x100000000);
                _0x203aa0[0xf + (_0x21e110 + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (_0x2f05ca << 0x8 | _0x2f05ca >>> 0x18) | 0xff00ff00 & (_0x2f05ca << 0x18 | _0x2f05ca >>> 0x8);
                _0x203aa0[0xe + (_0x21e110 + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (_0x311de5 << 0x8 | _0x311de5 >>> 0x18) | 0xff00ff00 & (_0x311de5 << 0x18 | _0x311de5 >>> 0x8);
                _0x45b819.sigBytes = 0x4 * (_0x203aa0.length + 0x1);
                this._process();
                _0x203aa0 = (_0x45b819 = this._hash).words;
                for (_0x311de5 = 0x0; 0x4 > _0x311de5; _0x311de5++) {
                  _0x21e110 = _0x203aa0[_0x311de5];
                  _0x203aa0[_0x311de5] = 0xff00ff & (_0x21e110 << 0x8 | _0x21e110 >>> 0x18) | 0xff00ff00 & (_0x21e110 << 0x18 | _0x21e110 >>> 0x8);
                }
                return _0x45b819;
              },
              clone: function () {
                var _0x5dce18 = _0xd69b0a.clone.call(this);
                _0x5dce18._hash = this._hash.clone();
                return _0x5dce18;
              }
            });
            _0x3c0097.MD5 = _0xd69b0a._createHelper(_0x292ab2);
            _0x3c0097.HmacMD5 = _0xd69b0a._createHmacHelper(_0x292ab2);
          })(Math);
          (function () {
            var _0x4b20b8;
            var _0x2ad905 = (_0x4b20b8 = _0x3c0097.lib).Base;
            var _0x41ba0f = _0x4b20b8.WordArray;
            var _0x11c231 = (_0x4b20b8 = _0x3c0097.algo).EvpKDF = _0x2ad905.extend({
              cfg: _0x2ad905.extend({
                keySize: 0x4,
                hasher: _0x4b20b8.MD5,
                iterations: 0x1
              }),
              init: function (_0x126271) {
                this.cfg = this.cfg.extend(_0x126271);
              },
              compute: function (_0x1445d3, _0x512de6) {
                var _0x29eae9 = (_0x3a31e1 = this.cfg).hasher.create();
                var _0x223f45 = _0x41ba0f.create();
                var _0x52fdd0 = _0x223f45.words;
                var _0x243af6 = _0x3a31e1.keySize;
                for (var _0x3a31e1 = _0x3a31e1.iterations; _0x52fdd0.length < _0x243af6;) {
                  if (_0x549d5c) {
                    _0x29eae9.update(_0x549d5c);
                  }
                  var _0x549d5c = _0x29eae9.update(_0x1445d3).finalize(_0x512de6);
                  _0x29eae9.reset();
                  for (var _0x294b78 = 0x1; _0x294b78 < _0x3a31e1; _0x294b78++) {
                    _0x549d5c = _0x29eae9.finalize(_0x549d5c);
                    _0x29eae9.reset();
                  }
                  _0x223f45.concat(_0x549d5c);
                }
                _0x223f45.sigBytes = 0x4 * _0x243af6;
                return _0x223f45;
              }
            });
            _0x3c0097.EvpKDF = function (_0x50c103, _0x5419df, _0x3b7b52) {
              return _0x11c231.create(_0x3b7b52).compute(_0x50c103, _0x5419df);
            };
          })();
          if (!_0x3c0097.lib.Cipher) {
            (function () {
              var _0x592f81 = (_0x34fd19 = _0x3c0097).lib;
              var _0x40e681 = _0x592f81.Base;
              var _0x555474 = _0x592f81.WordArray;
              var _0x35871d = _0x592f81.BufferedBlockAlgorithm;
              var _0x13b25f = _0x34fd19.enc.Base64;
              var _0x2db422 = _0x34fd19.algo.EvpKDF;
              var _0xc957db = _0x592f81.Cipher = _0x35871d.extend({
                cfg: _0x40e681.extend(),
                createEncryptor: function (_0x50d799, _0x433ffd) {
                  return this.create(this._ENC_XFORM_MODE, _0x50d799, _0x433ffd);
                },
                createDecryptor: function (_0x2f252c, _0x4b52f8) {
                  return this.create(this._DEC_XFORM_MODE, _0x2f252c, _0x4b52f8);
                },
                init: function (_0x420b02, _0x26e898, _0x164d1f) {
                  this.cfg = this.cfg.extend(_0x164d1f);
                  this._xformMode = _0x420b02;
                  this._key = _0x26e898;
                  this.reset();
                },
                reset: function () {
                  _0x35871d.reset.call(this);
                  this._doReset();
                },
                process: function (_0x1500e7) {
                  this._append(_0x1500e7);
                  return this._process();
                },
                finalize: function (_0x16d6b7) {
                  if (_0x16d6b7) {
                    this._append(_0x16d6b7);
                  }
                  return this._doFinalize();
                },
                keySize: 0x4,
                ivSize: 0x4,
                _ENC_XFORM_MODE: 0x1,
                _DEC_XFORM_MODE: 0x2,
                _createHelper: function (_0x18d6b6) {
                  return {
                    encrypt: function (_0x3ada11, _0x3cb3b4, _0x5589c7) {
                      return ("string" == typeof _0x3cb3b4 ? _0x12266f : _0x1653b0).encrypt(_0x18d6b6, _0x3ada11, _0x3cb3b4, _0x5589c7);
                    },
                    decrypt: function (_0x3e110e, _0x3dd74f, _0x379e56) {
                      return ("string" == typeof _0x3dd74f ? _0x12266f : _0x1653b0).decrypt(_0x18d6b6, _0x3e110e, _0x3dd74f, _0x379e56);
                    }
                  };
                }
              });
              _0x592f81.StreamCipher = _0xc957db.extend({
                _doFinalize: function () {
                  return this._process(true);
                },
                blockSize: 0x1
              });
              var _0x35a2e5 = _0x34fd19.mode = {};
              var _0x4df8c4 = function (_0x475c51, _0xae9ba7, _0xf6ce02) {
                var _0x1bf2d5 = this._iv;
                if (_0x1bf2d5) {
                  this._iv = undefined;
                } else {
                  _0x1bf2d5 = this._prevBlock;
                }
                for (var _0x2261c0 = 0x0; _0x2261c0 < _0xf6ce02; _0x2261c0++) {
                  _0x475c51[_0xae9ba7 + _0x2261c0] ^= _0x1bf2d5[_0x2261c0];
                }
              };
              var _0x103ffd = (_0x592f81.BlockCipherMode = _0x40e681.extend({
                createEncryptor: function (_0x38905f, _0x45120f) {
                  return this.Encryptor.create(_0x38905f, _0x45120f);
                },
                createDecryptor: function (_0x16fad2, _0x6cf2f3) {
                  return this.Decryptor.create(_0x16fad2, _0x6cf2f3);
                },
                init: function (_0x4be28a, _0x1ff4c4) {
                  this._cipher = _0x4be28a;
                  this._iv = _0x1ff4c4;
                }
              })).extend();
              _0x103ffd.Encryptor = _0x103ffd.extend({
                processBlock: function (_0x554e65, _0x25d350) {
                  var _0xfaeacb = this._cipher;
                  var _0xbaa0b4 = _0xfaeacb.blockSize;
                  _0x4df8c4.call(this, _0x554e65, _0x25d350, _0xbaa0b4);
                  _0xfaeacb.encryptBlock(_0x554e65, _0x25d350);
                  this._prevBlock = _0x554e65.slice(_0x25d350, _0x25d350 + _0xbaa0b4);
                }
              });
              _0x103ffd.Decryptor = _0x103ffd.extend({
                processBlock: function (_0x294716, _0x375e1e) {
                  var _0x5743e2 = this._cipher;
                  var _0x5f501b = _0x5743e2.blockSize;
                  var _0x114a5b = _0x294716.slice(_0x375e1e, _0x375e1e + _0x5f501b);
                  _0x5743e2.decryptBlock(_0x294716, _0x375e1e);
                  _0x4df8c4.call(this, _0x294716, _0x375e1e, _0x5f501b);
                  this._prevBlock = _0x114a5b;
                }
              });
              _0x35a2e5 = _0x35a2e5.CBC = _0x103ffd;
              _0x103ffd = (_0x34fd19.pad = {}).Pkcs7 = {
                pad: function (_0x20fec7, _0x401406) {
                  var _0x572390;
                  var _0x3f751f = (_0x572390 = (_0x572390 = 0x4 * _0x401406) - _0x20fec7.sigBytes % _0x572390) << 0x18 | _0x572390 << 0x10 | _0x572390 << 0x8 | _0x572390;
                  var _0xa489eb = [];
                  for (var _0x3e1fe4 = 0x0; _0x3e1fe4 < _0x572390; _0x3e1fe4 += 0x4) {
                    _0xa489eb.push(_0x3f751f);
                  }
                  _0x572390 = _0x555474.create(_0xa489eb, _0x572390);
                  _0x20fec7.concat(_0x572390);
                },
                unpad: function (_0x43d6c9) {
                  _0x43d6c9.sigBytes -= 0xff & _0x43d6c9.words[_0x43d6c9.sigBytes - 0x1 >>> 0x2];
                }
              };
              _0x592f81.BlockCipher = _0xc957db.extend({
                cfg: _0xc957db.cfg.extend({
                  mode: _0x35a2e5,
                  padding: _0x103ffd
                }),
                reset: function () {
                  _0xc957db.reset.call(this);
                  var _0x181025 = (_0x21edec = this.cfg).iv;
                  var _0x21edec = _0x21edec.mode;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    var _0x57d952 = _0x21edec.createEncryptor;
                  } else {
                    _0x57d952 = _0x21edec.createDecryptor;
                    this._minBufferSize = 0x1;
                  }
                  this._mode = _0x57d952.call(_0x21edec, this, _0x181025 && _0x181025.words);
                },
                _doProcessBlock: function (_0x5a10a7, _0x3c385a) {
                  this._mode.processBlock(_0x5a10a7, _0x3c385a);
                },
                _doFinalize: function () {
                  var _0xfaea9 = this.cfg.padding;
                  if (this._xformMode == this._ENC_XFORM_MODE) {
                    _0xfaea9.pad(this._data, this.blockSize);
                    var _0x4f6f7b = this._process(true);
                  } else {
                    _0x4f6f7b = this._process(true);
                    _0xfaea9.unpad(_0x4f6f7b);
                  }
                  return _0x4f6f7b;
                },
                blockSize: 0x4
              });
              var _0x1ff231 = _0x592f81.CipherParams = _0x40e681.extend({
                init: function (_0x56b960) {
                  this.mixIn(_0x56b960);
                },
                toString: function (_0x23d9b6) {
                  return (_0x23d9b6 || this.formatter).stringify(this);
                }
              });
              _0x35a2e5 = (_0x34fd19.format = {}).OpenSSL = {
                stringify: function (_0x1c76f1) {
                  var _0x37a698 = _0x1c76f1.ciphertext;
                  return ((_0x1c76f1 = _0x1c76f1.salt) ? _0x555474.create([0x53616c74, 0x65645f5f]).concat(_0x1c76f1).concat(_0x37a698) : _0x37a698).toString(_0x13b25f);
                },
                parse: function (_0xbab4c3) {
                  var _0x60d4ee = (_0xbab4c3 = _0x13b25f.parse(_0xbab4c3)).words;
                  if (0x53616c74 == _0x60d4ee[0x0] && 0x65645f5f == _0x60d4ee[0x1]) {
                    var _0x182796 = _0x555474.create(_0x60d4ee.slice(0x2, 0x4));
                    _0x60d4ee.splice(0x0, 0x4);
                    _0xbab4c3.sigBytes -= 0x10;
                  }
                  return _0x1ff231.create({
                    ciphertext: _0xbab4c3,
                    salt: _0x182796
                  });
                }
              };
              var _0x1653b0 = _0x592f81.SerializableCipher = _0x40e681.extend({
                cfg: _0x40e681.extend({
                  format: _0x35a2e5
                }),
                encrypt: function (_0x43e118, _0x24c729, _0x151118, _0x28363f) {
                  _0x28363f = this.cfg.extend(_0x28363f);
                  var _0x2baf30 = _0x43e118.createEncryptor(_0x151118, _0x28363f);
                  _0x24c729 = _0x2baf30.finalize(_0x24c729);
                  _0x2baf30 = _0x2baf30.cfg;
                  return _0x1ff231.create({
                    ciphertext: _0x24c729,
                    key: _0x151118,
                    iv: _0x2baf30.iv,
                    algorithm: _0x43e118,
                    mode: _0x2baf30.mode,
                    padding: _0x2baf30.padding,
                    blockSize: _0x43e118.blockSize,
                    formatter: _0x28363f.format
                  });
                },
                decrypt: function (_0x557e6c, _0x4a7069, _0x4ca757, _0x1ffc5b) {
                  _0x1ffc5b = this.cfg.extend(_0x1ffc5b);
                  _0x4a7069 = this._parse(_0x4a7069, _0x1ffc5b.format);
                  return _0x557e6c.createDecryptor(_0x4ca757, _0x1ffc5b).finalize(_0x4a7069.ciphertext);
                },
                _parse: function (_0x250679, _0x3103ef) {
                  return "string" == typeof _0x250679 ? _0x3103ef.parse(_0x250679, this) : _0x250679;
                }
              });
              var _0x34fd19 = (_0x34fd19.kdf = {}).OpenSSL = {
                execute: function (_0x2434da, _0x4c3d70, _0x3972ee, _0x2c955d) {
                  if (!_0x2c955d) {
                    _0x2c955d = _0x555474.random(0x8);
                  }
                  _0x2434da = _0x2db422.create({
                    keySize: _0x4c3d70 + _0x3972ee
                  }).compute(_0x2434da, _0x2c955d);
                  _0x3972ee = _0x555474.create(_0x2434da.words.slice(_0x4c3d70), 0x4 * _0x3972ee);
                  _0x2434da.sigBytes = 0x4 * _0x4c3d70;
                  return _0x1ff231.create({
                    key: _0x2434da,
                    iv: _0x3972ee,
                    salt: _0x2c955d
                  });
                }
              };
              var _0x12266f = _0x592f81.PasswordBasedCipher = _0x1653b0.extend({
                cfg: _0x1653b0.cfg.extend({
                  kdf: _0x34fd19
                }),
                encrypt: function (_0x4c8c47, _0x31879a, _0x952e30, _0x4e0901) {
                  _0x952e30 = (_0x4e0901 = this.cfg.extend(_0x4e0901)).kdf.execute(_0x952e30, _0x4c8c47.keySize, _0x4c8c47.ivSize);
                  _0x4e0901.iv = _0x952e30.iv;
                  (_0x4c8c47 = _0x1653b0.encrypt.call(this, _0x4c8c47, _0x31879a, _0x952e30.key, _0x4e0901)).mixIn(_0x952e30);
                  return _0x4c8c47;
                },
                decrypt: function (_0x5ef16d, _0x2b5810, _0x248f15, _0x7135ea) {
                  _0x7135ea = this.cfg.extend(_0x7135ea);
                  _0x2b5810 = this._parse(_0x2b5810, _0x7135ea.format);
                  _0x248f15 = _0x7135ea.kdf.execute(_0x248f15, _0x5ef16d.keySize, _0x5ef16d.ivSize, _0x2b5810.salt);
                  _0x7135ea.iv = _0x248f15.iv;
                  return _0x1653b0.decrypt.call(this, _0x5ef16d, _0x2b5810, _0x248f15.key, _0x7135ea);
                }
              });
            })();
          }
          (function () {
            var _0x1c287e = _0x3c0097.lib.BlockCipher;
            var _0x480cf0 = _0x3c0097.algo;
            var _0x174b85 = [];
            var _0x2b369e = [];
            var _0x51117b = [];
            var _0x18fdc3 = [];
            var _0x55b174 = [];
            var _0x3530f5 = [];
            var _0x995ded = [];
            var _0x37c6f1 = [];
            var _0x5e85e4 = [];
            var _0x319e59 = [];
            var _0x32c90f = [];
            for (var _0x1a3433 = 0x0; 0x100 > _0x1a3433; _0x1a3433++) {
              _0x32c90f[_0x1a3433] = 0x80 > _0x1a3433 ? _0x1a3433 << 0x1 : _0x1a3433 << 0x1 ^ 0x11b;
            }
            var _0x5c5d21 = 0x0;
            var _0x3dae7e = 0x0;
            for (_0x1a3433 = 0x0; 0x100 > _0x1a3433; _0x1a3433++) {
              var _0x2e3b5a = (_0x2e3b5a = _0x3dae7e ^ _0x3dae7e << 0x1 ^ _0x3dae7e << 0x2 ^ _0x3dae7e << 0x3 ^ _0x3dae7e << 0x4) >>> 0x8 ^ 0xff & _0x2e3b5a ^ 0x63;
              _0x174b85[_0x5c5d21] = _0x2e3b5a;
              _0x2b369e[_0x2e3b5a] = _0x5c5d21;
              var _0x2a1263 = _0x32c90f[_0x5c5d21];
              var _0x29ee9a = _0x32c90f[_0x2a1263];
              var _0x3b4b3c = _0x32c90f[_0x29ee9a];
              var _0x2b8e69 = 0x101 * _0x32c90f[_0x2e3b5a] ^ 0x1010100 * _0x2e3b5a;
              _0x51117b[_0x5c5d21] = _0x2b8e69 << 0x18 | _0x2b8e69 >>> 0x8;
              _0x18fdc3[_0x5c5d21] = _0x2b8e69 << 0x10 | _0x2b8e69 >>> 0x10;
              _0x55b174[_0x5c5d21] = _0x2b8e69 << 0x8 | _0x2b8e69 >>> 0x18;
              _0x3530f5[_0x5c5d21] = _0x2b8e69;
              _0x2b8e69 = 0x1010101 * _0x3b4b3c ^ 0x10001 * _0x29ee9a ^ 0x101 * _0x2a1263 ^ 0x1010100 * _0x5c5d21;
              _0x995ded[_0x2e3b5a] = _0x2b8e69 << 0x18 | _0x2b8e69 >>> 0x8;
              _0x37c6f1[_0x2e3b5a] = _0x2b8e69 << 0x10 | _0x2b8e69 >>> 0x10;
              _0x5e85e4[_0x2e3b5a] = _0x2b8e69 << 0x8 | _0x2b8e69 >>> 0x18;
              _0x319e59[_0x2e3b5a] = _0x2b8e69;
              if (_0x5c5d21) {
                _0x5c5d21 = _0x2a1263 ^ _0x32c90f[_0x32c90f[_0x32c90f[_0x3b4b3c ^ _0x2a1263]]];
                _0x3dae7e ^= _0x32c90f[_0x32c90f[_0x3dae7e]];
              } else {
                _0x5c5d21 = _0x3dae7e = 0x1;
              }
            }
            var _0x569aed = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
            _0x480cf0 = _0x480cf0.AES = _0x1c287e.extend({
              _doReset: function () {
                var _0x1eb92f = (_0xb2918f = this._key).words;
                var _0x1f38aa = _0xb2918f.sigBytes / 0x4;
                var _0xb2918f = 0x4 * ((this._nRounds = _0x1f38aa + 0x6) + 0x1);
                var _0x1e923c = this._keySchedule = [];
                for (var _0x3c8c79 = 0x0; _0x3c8c79 < _0xb2918f; _0x3c8c79++) {
                  if (_0x3c8c79 < _0x1f38aa) {
                    _0x1e923c[_0x3c8c79] = _0x1eb92f[_0x3c8c79];
                  } else {
                    var _0xbebe9b = _0x1e923c[_0x3c8c79 - 0x1];
                    if (_0x3c8c79 % _0x1f38aa) {
                      if (0x6 < _0x1f38aa && 0x4 == _0x3c8c79 % _0x1f38aa) {
                        _0xbebe9b = _0x174b85[_0xbebe9b >>> 0x18] << 0x18 | _0x174b85[_0xbebe9b >>> 0x10 & 0xff] << 0x10 | _0x174b85[_0xbebe9b >>> 0x8 & 0xff] << 0x8 | _0x174b85[0xff & _0xbebe9b];
                      }
                    } else {
                      _0xbebe9b = _0x174b85[(_0xbebe9b = _0xbebe9b << 0x8 | _0xbebe9b >>> 0x18) >>> 0x18] << 0x18 | _0x174b85[_0xbebe9b >>> 0x10 & 0xff] << 0x10 | _0x174b85[_0xbebe9b >>> 0x8 & 0xff] << 0x8 | _0x174b85[0xff & _0xbebe9b];
                      _0xbebe9b ^= _0x569aed[_0x3c8c79 / _0x1f38aa | 0x0] << 0x18;
                    }
                    _0x1e923c[_0x3c8c79] = _0x1e923c[_0x3c8c79 - _0x1f38aa] ^ _0xbebe9b;
                  }
                }
                _0x1eb92f = this._invKeySchedule = [];
                for (_0x1f38aa = 0x0; _0x1f38aa < _0xb2918f; _0x1f38aa++) {
                  _0x3c8c79 = _0xb2918f - _0x1f38aa;
                  _0xbebe9b = _0x1f38aa % 0x4 ? _0x1e923c[_0x3c8c79] : _0x1e923c[_0x3c8c79 - 0x4];
                  _0x1eb92f[_0x1f38aa] = 0x4 > _0x1f38aa || 0x4 >= _0x3c8c79 ? _0xbebe9b : _0x995ded[_0x174b85[_0xbebe9b >>> 0x18]] ^ _0x37c6f1[_0x174b85[_0xbebe9b >>> 0x10 & 0xff]] ^ _0x5e85e4[_0x174b85[_0xbebe9b >>> 0x8 & 0xff]] ^ _0x319e59[_0x174b85[0xff & _0xbebe9b]];
                }
              },
              encryptBlock: function (_0xf87fa2, _0x5bc933) {
                this._doCryptBlock(_0xf87fa2, _0x5bc933, this._keySchedule, _0x51117b, _0x18fdc3, _0x55b174, _0x3530f5, _0x174b85);
              },
              decryptBlock: function (_0x5e1ee9, _0xe11f92) {
                var _0x5e17d7 = _0x5e1ee9[_0xe11f92 + 0x1];
                _0x5e1ee9[_0xe11f92 + 0x1] = _0x5e1ee9[_0xe11f92 + 0x3];
                _0x5e1ee9[_0xe11f92 + 0x3] = _0x5e17d7;
                this._doCryptBlock(_0x5e1ee9, _0xe11f92, this._invKeySchedule, _0x995ded, _0x37c6f1, _0x5e85e4, _0x319e59, _0x2b369e);
                _0x5e17d7 = _0x5e1ee9[_0xe11f92 + 0x1];
                _0x5e1ee9[_0xe11f92 + 0x1] = _0x5e1ee9[_0xe11f92 + 0x3];
                _0x5e1ee9[_0xe11f92 + 0x3] = _0x5e17d7;
              },
              _doCryptBlock: function (_0x44a051, _0x4e527e, _0x5c2a60, _0x216486, _0x2f9233, _0x55e660, _0x3adc22, _0x2a646b) {
                var _0x472dc1 = this._nRounds;
                var _0x157179 = _0x44a051[_0x4e527e] ^ _0x5c2a60[0x0];
                var _0x292609 = _0x44a051[_0x4e527e + 0x1] ^ _0x5c2a60[0x1];
                var _0x518ead = _0x44a051[_0x4e527e + 0x2] ^ _0x5c2a60[0x2];
                var _0x1d6d9a = _0x44a051[_0x4e527e + 0x3] ^ _0x5c2a60[0x3];
                var _0x581588 = 0x4;
                for (var _0x20a944 = 0x1; _0x20a944 < _0x472dc1; _0x20a944++) {
                  var _0x4c77a5 = _0x216486[_0x157179 >>> 0x18] ^ _0x2f9233[_0x292609 >>> 0x10 & 0xff] ^ _0x55e660[_0x518ead >>> 0x8 & 0xff] ^ _0x3adc22[0xff & _0x1d6d9a] ^ _0x5c2a60[_0x581588++];
                  var _0x959607 = _0x216486[_0x292609 >>> 0x18] ^ _0x2f9233[_0x518ead >>> 0x10 & 0xff] ^ _0x55e660[_0x1d6d9a >>> 0x8 & 0xff] ^ _0x3adc22[0xff & _0x157179] ^ _0x5c2a60[_0x581588++];
                  var _0x41f68a = _0x216486[_0x518ead >>> 0x18] ^ _0x2f9233[_0x1d6d9a >>> 0x10 & 0xff] ^ _0x55e660[_0x157179 >>> 0x8 & 0xff] ^ _0x3adc22[0xff & _0x292609] ^ _0x5c2a60[_0x581588++];
                  _0x1d6d9a = _0x216486[_0x1d6d9a >>> 0x18] ^ _0x2f9233[_0x157179 >>> 0x10 & 0xff] ^ _0x55e660[_0x292609 >>> 0x8 & 0xff] ^ _0x3adc22[0xff & _0x518ead] ^ _0x5c2a60[_0x581588++];
                  _0x157179 = _0x4c77a5;
                  _0x292609 = _0x959607;
                  _0x518ead = _0x41f68a;
                }
                _0x4c77a5 = (_0x2a646b[_0x157179 >>> 0x18] << 0x18 | _0x2a646b[_0x292609 >>> 0x10 & 0xff] << 0x10 | _0x2a646b[_0x518ead >>> 0x8 & 0xff] << 0x8 | _0x2a646b[0xff & _0x1d6d9a]) ^ _0x5c2a60[_0x581588++];
                _0x959607 = (_0x2a646b[_0x292609 >>> 0x18] << 0x18 | _0x2a646b[_0x518ead >>> 0x10 & 0xff] << 0x10 | _0x2a646b[_0x1d6d9a >>> 0x8 & 0xff] << 0x8 | _0x2a646b[0xff & _0x157179]) ^ _0x5c2a60[_0x581588++];
                _0x41f68a = (_0x2a646b[_0x518ead >>> 0x18] << 0x18 | _0x2a646b[_0x1d6d9a >>> 0x10 & 0xff] << 0x10 | _0x2a646b[_0x157179 >>> 0x8 & 0xff] << 0x8 | _0x2a646b[0xff & _0x292609]) ^ _0x5c2a60[_0x581588++];
                _0x1d6d9a = (_0x2a646b[_0x1d6d9a >>> 0x18] << 0x18 | _0x2a646b[_0x157179 >>> 0x10 & 0xff] << 0x10 | _0x2a646b[_0x292609 >>> 0x8 & 0xff] << 0x8 | _0x2a646b[0xff & _0x518ead]) ^ _0x5c2a60[_0x581588++];
                _0x44a051[_0x4e527e] = _0x4c77a5;
                _0x44a051[_0x4e527e + 0x1] = _0x959607;
                _0x44a051[_0x4e527e + 0x2] = _0x41f68a;
                _0x44a051[_0x4e527e + 0x3] = _0x1d6d9a;
              },
              keySize: 0x8
            });
            _0x3c0097.AES = _0x1c287e._createHelper(_0x480cf0);
          })();
          _0x3c0097.pad.ZeroPadding = {
            pad: function (_0x1baa0b, _0xc7fc4f) {
              var _0x57de4e = 0x4 * _0xc7fc4f;
              _0x1baa0b.clamp();
              _0x1baa0b.sigBytes += _0x57de4e - (_0x1baa0b.sigBytes % _0x57de4e || _0x57de4e);
            },
            unpad: function (_0x12d294) {
              var _0x2f00a3 = _0x12d294.words;
              for (var _0x260310 = _0x12d294.sigBytes - 0x1; !(_0x2f00a3[_0x260310 >>> 0x2] >>> 0x18 - _0x260310 % 0x4 * 0x8 & 0xff);) {
                _0x260310--;
              }
              _0x12d294.sigBytes = _0x260310 + 0x1;
            }
          };
          function _0x3d9a91(_0x4dff66) {
            let _0xdca642 = "";
            for (let _0x52dabc in _0x4dff66) _0xdca642 += _0x52dabc + "=" + _0x4dff66[_0x52dabc] + "&";
            return _0xdca642.substring(0x0, _0xdca642.length - 0x1);
          }
          function _0x244295(_0x55172a, _0x3e10f6) {
            0x0;
            let _0x56d5a2 = _0x35fd57["default"]("huanju@quickapp" + _0x3e10f6).substring(0x10).toLowerCase();
            let _0x3aa196 = _0x3c0097.enc.Latin1.parse(_0x56d5a2);
            let _0x2c359a = _0x3c0097.enc.Latin1.parse("2018080716102000");
            return _0x3c0097.AES.encrypt(_0x55172a, _0x3aa196, {
              iv: _0x2c359a,
              mode: _0x3c0097.mode.CBC,
              padding: _0x3c0097.pad.ZeroPadding
            }).toString();
          }
          function _0x38c57e(_0x599c44) {
            let _0x33ff00 = Date.now() + (0x10000000 * (0x1 + Math.random()) | 0x0).toString(0x10) + (0x10000000 * (0x1 + Math.random()) | 0x0).toString(0x10) + (_0x599c44 || (0x10000000 * (0x1 + Math.random()) | 0x0).toString(0x10));
            0x0;
            return _0x35fd57["default"](_0x33ff00);
          }
          const _0x4383c4 = function (_0x2c37db) {
            let {
              url: _0x46a6f6,
              timeout: _0x4b9c85
            } = _0x2c37db;
            let _0x1654af = new Promise((_0x40288b, _0x5ad50e) => {
              try {
                _0x41a6b8["default"].fetch({
                  url: "http://log.tongji.qinglizi.cn" + _0x46a6f6,
                  success: function (_0xac0b07) {
                    _0x40288b(_0xac0b07);
                  },
                  fail: function (_0x1d3178, _0x29efbf) {
                    _0x40288b(_0x1d3178);
                  }
                });
              } catch (_0x5d6eca) {}
            });
            let _0x13537f = new Promise((_0x3de14c, _0x2c05d0) => {
              setTimeout(() => {
                _0x3de14c({
                  code: 0xcc,
                  massage: "Request timed out"
                });
              }, _0x4b9c85 || 0xbb8);
            });
            return Promise.race([_0x13537f, _0x1654af]);
          };
          function _0x1c9474(..._0xa86296) {
            return new Promise((_0x2f0a7f, _0x1a7f11) => {
              try {
                _0x4ad936["default"].set({
                  key: _0xa86296[0x0],
                  value: _0xa86296[0x1] || "",
                  success: function (_0x5d363b) {
                    _0x2f0a7f(true);
                  },
                  fail: function (_0x7a59) {
                    _0x2f0a7f(false);
                  }
                });
              } catch (_0x341dc2) {
                _0x2f0a7f(false);
              }
            });
          }
          function _0x2efe9c(_0x5deb61) {
            return new Promise((_0x5ca05a, _0x7bce10) => {
              try {
                _0x4ad936["default"].get({
                  key: _0x5deb61,
                  success: function (_0x271576) {
                    _0x5ca05a(_0x271576);
                  },
                  fail: function (_0x4e8ef2, _0x559ba7) {
                    _0x5ca05a(false);
                  }
                });
              } catch (_0x1580b7) {
                _0x5ca05a(false);
              }
            });
          }
          function _0x3cb9fa(_0x501b7d) {
            return new Promise((_0x5310e8, _0x2e1b08) => {
              _0x5d080f["default"].readText({
                uri: _0x501b7d,
                success: function (_0x48ab86) {
                  _0x5310e8(_0x48ab86);
                },
                fail: function (_0x5104a2, _0x1360e5) {
                  _0x5310e8(false);
                }
              });
            });
          }
          function _0x3ff5d3(_0x2d06a9, _0x52c894) {
            return new Promise((_0x5e1c4a, _0xf80be4) => {
              try {
                _0x5d080f["default"].writeText({
                  uri: _0x2d06a9,
                  text: _0x52c894,
                  success: function () {
                    _0x5e1c4a(true);
                  },
                  fail: function (_0x2321d6, _0x541839) {
                    _0x5e1c4a(false);
                  }
                });
              } catch (_0x423357) {}
            });
          }
          const _0x22a365 = () => new Promise((_0x593177, _0x41811a) => {
            try {
              _0x578413["default"].getInfo({
                success: function (_0x28deda) {
                  _0x593177(_0x28deda);
                },
                fail: function () {
                  _0x593177({});
                }
              });
            } catch (_0x3958d1) {
              _0x593177({});
            }
          });
          const _0x12add5 = () => new Promise((_0x3321f9, _0x1ceb92) => {
            try {
              _0x29d387["default"].hasInstalled({
                success: function (_0x51e390) {
                  _0x3321f9({
                    has_icon: _0x51e390 ? 0x1 : 0x0
                  });
                },
                fail: function () {
                  _0x3321f9({
                    has_icon: 0x0
                  });
                }
              });
            } catch (_0x2adf08) {
              _0x3321f9({
                has_icon: 0x0
              });
            }
          });
          const _0x5c2ee2 = {
            sdk_version: "1.4.1.0",
            sdk_version_code: 0x57b,
            debug: 0x0
          };
          const _0x2fc626 = {
            has_init: false,
            has_cuid_storage: false,
            has_open_log: false
          };
          const _0x84efed = (_0x19b393 = {}) => Object.assign({
            page_name: "",
            page_path: "",
            sta_time: "",
            end_time: "",
            duration: "",
            is_entry: 0x0
          }, _0x19b393);
          const _0x3b1621 = new class {
            constructor() {
              this.state = {
                is_entry: 0x1,
                cuid: "",
                req: "",
                log_list: [],
                data: null,
                page: null,
                lastday_icon_state: 0x0,
                today_icon_state: 0x0,
                n_u_mark: 0x0,
                icon_states: null
              };
              this.init = this.init.bind(this);
              this.page_stat = this.page_stat.bind(this);
              this.page_end = this.page_end.bind(this);
              this.merge_datas = this.merge_datas.bind(this);
              this.save_to_queue = this.save_to_queue.bind(this);
              this.handle_submit = this.handle_submit.bind(this);
              this.send_queue = this.send_queue.bind(this);
              this.event_log = this.event_log.bind(this);
              this.err_report = this.err_report.bind(this);
              this.isReStart = this.isReStart.bind(this);
              this.reStart = this.reStart.bind(this);
              this.get_app_info = this.get_app_info.bind(this);
              this.combine_err_data = this.combine_err_data.bind(this);
            }
            ["init"](_0x207a7b) {
              _0x2fc626.has_init = true;
              let _0x5a9235 = {};
              let _0x53178f = _0x207a7b || {
                _def: {}
              };
              _0x53178f._def = _0x53178f._def || {
                manifest: {}
              };
              let _0xcd39b1;
              let {
                _def: {
                  manifest: _0x366343
                }
              } = _0x53178f;
              try {
                _0xcd39b1 = _0x3d6be1["default"].getInfo();
              } catch (_0x13362a) {
                let _0x3aa824 = {
                  err_msg: ("string" == typeof _0x13362a.stack ? _0x13362a.stack : JSON.stringify(_0x13362a.stack)) || "",
                  err_site: "app.getInfo"
                };
                _0x3b1621.err_report(_0x3aa824);
              }
              _0x5a9235["package"] = _0x366343["package"] || _0xcd39b1.packageName;
              _0x5a9235.versionName = _0xcd39b1.versionName || _0x366343.versionName;
              _0x5a9235.minPlatformVersion = _0x366343.minPlatformVersion || "";
              _0x5a9235.name = _0x366343.name || _0xcd39b1.name;
              _0x5a9235.source = _0xcd39b1.source && _0xcd39b1.source.type;
              _0x5a9235.extra = _0xcd39b1.source && _0xcd39b1.source.extra;
              try {
                _0x5a9235.channel = _0x1d2a08["default"].getProvider();
              } catch (_0x5c923b) {
                let _0x2659e4 = {
                  err_msg: ("string" == typeof _0x5c923b.stack ? _0x5c923b.stack : JSON.stringify(_0x5c923b.stack)) || "",
                  err_site: "account.getProvider"
                };
                _0x3b1621.err_report(_0x2659e4);
              }
              Promise.all([_0x22a365(), new Promise((_0x43f21d, _0x11b9e7) => {
                try {
                  _0x578413["default"].getUserId({
                    success: function (_0x4dbd85) {
                      _0x43f21d(_0x4dbd85);
                    },
                    fail: function (_0x5bdbfd, _0x1405be) {
                      _0x43f21d({});
                    }
                  });
                } catch (_0xb34330) {
                  _0x43f21d({});
                }
              }), new Promise((_0x38b2c6, _0x57e7c4) => {
                try {
                  _0x2e9e8e["default"].getType({
                    success: function (_0x1d53b4) {
                      _0x38b2c6(_0x1d53b4);
                    },
                    fail: function () {
                      _0x38b2c6({});
                    }
                  });
                } catch (_0x1bd08d) {
                  _0x38b2c6({});
                }
              }), _0x12add5()]).then(_0x488585 => {
                let _0x26d3e0 = Object.assign(_0x5a9235, ..._0x488585);
                let _0x45db07 = {};
                this.state.today_icon_state = _0x488585[0x3].has_icon;
                Promise.all([_0x2efe9c("_SD_BD_CUID_"), _0x3cb9fa("internal://files/wanka/data.txt"), _0x2efe9c("_SD_BD_ICON_STATE_"), _0x3cb9fa("internal://files/wanka/icon.txt")]).then(_0x3dc8fe => {
                  let _0x2c210b = _0x3dc8fe[0x0];
                  let _0x21eb3a = _0x3dc8fe[0x1];
                  _0x3dc8fe[0x2];
                  _0x3dc8fe[0x3];
                  if (_0x2c210b || _0x21eb3a) {
                    if (_0x2c210b && _0x21eb3a) {
                      _0x45db07.cuid = _0x2c210b;
                      _0x45db07.n_u_mark = this.state.n_u_mark = 0x1;
                    } else {
                      _0x45db07.cuid = _0x2c210b || JSON.parse(_0x21eb3a.text)._SD_BD_CUID_;
                      this.save_uuids_to_client(_0x45db07.cuid);
                      _0x45db07.n_u_mark = this.state.n_u_mark = 0x1;
                    }
                  } else {
                    _0x45db07.cuid = function (_0x293e79) {
                      let _0x465b7b = _0x293e79 || (0x10000000 * (0x1 + Math.random()) | 0x0).toString(0x10);
                      0x0;
                      return _0x35fd57["default"](Date.now() + "-" + (0x10000000 * (0x1 + Math.random()) | 0x0).toString(0x10) + "-" + (0x10000000 * (0x1 + Math.random()) | 0x0).toString(0x10) + "-" + (0x10000000 * (0x1 + Math.random()) | 0x0).toString(0x10) + "-" + _0x465b7b);
                    }(_0x26d3e0.userId || "");
                    this.save_uuids_to_client(_0x45db07.cuid);
                    _0x45db07.n_u_mark = this.state.n_u_mark = 0x0;
                  }
                  this.state.cuid = _0x45db07.cuid;
                  _0x45db07.req = this.state.req = _0x38c57e(_0x45db07.cuid);
                  this.state.data = Object.assign({}, {
                    package: _0x26d3e0["package"] || "",
                    channel: (_0x26d3e0.channel || "").toLowerCase(),
                    name: _0x26d3e0.name || "",
                    svr: _0x26d3e0.versionName || "",
                    client_id: _0x244295(_0x26d3e0.device || "", this.state.cuid),
                    info_ma: _0x244295(_0x26d3e0.mac || "", this.state.cuid),
                    os_id: _0x244295(_0x26d3e0.userId || "", this.state.cuid),
                    make: (_0x26d3e0.brand || "").toLowerCase(),
                    manufacturer: (_0x26d3e0.manufacturer || "").toLowerCase(),
                    model: (_0x26d3e0.model || "").toLowerCase(),
                    product: (_0x26d3e0.product || "").toLowerCase(),
                    os_type: (_0x26d3e0.osType || "").toLowerCase(),
                    ovr: (_0x26d3e0.osVersionName || "").toLowerCase(),
                    pla_ver: _0x26d3e0.platformVersionCode || "",
                    lan: (_0x26d3e0.language || "").toLowerCase(),
                    region: (_0x26d3e0.region || "").toLowerCase(),
                    px: (_0x26d3e0.screenWidth || "") + "*" + (_0x26d3e0.screenHeight || ""),
                    net: (_0x26d3e0.type || "").toLowerCase(),
                    has_icon: _0x26d3e0.has_icon || 0x0,
                    source: (_0x26d3e0.source || "").toLowerCase(),
                    extra: ("string" == typeof (_0x26d3e0.extra || "") ? _0x26d3e0.extra || "" : JSON.stringify(_0x26d3e0.extra || "")).toLowerCase(),
                    t_icon_state: _0x26d3e0.t_icon_state || 0x2
                  }, {
                    app_id: _0x29dbae["default"].app_key || "",
                    cuid: _0x45db07.cuid || "",
                    req_id: _0x45db07.req || "",
                    en_code: "cuid",
                    action: 0x2,
                    n_u_mark: _0x45db07.n_u_mark || 0x0
                  });
                });
              });
            }
            ["get_app_info"](_0x4baea8) {
              let _0x4942b5 = {};
              let _0x406773 = {};
              try {
                _0x406773 = _0x3d6be1["default"].getInfo();
              } catch (_0xa933) {
                let _0x302fe6 = {
                  err_msg: ("string" == typeof _0xa933.stack ? _0xa933.stack : JSON.stringify(_0xa933.stack)) || "",
                  err_site: "app.getInfo"
                };
                _0x3b1621.err_report(_0x302fe6);
              }
              _0x4942b5["package"] = _0x406773.packageName;
              _0x4942b5.versionName = _0x406773.versionName;
              _0x4942b5.name = _0x406773.name;
              _0x4942b5.source = _0x406773.source && _0x406773.source.type;
              _0x4942b5.extra = _0x406773.source && _0x406773.source.extra;
              try {
                _0x4942b5.channel = _0x1d2a08["default"].getProvider();
              } catch (_0x1dcc6a) {
                let _0x5d0364 = {
                  err_msg: ("string" == typeof _0x1dcc6a.stack ? _0x1dcc6a.stack : JSON.stringify(_0x1dcc6a.stack)) || "",
                  err_site: "account.getProvider"
                };
                _0x3b1621.err_report(_0x5d0364);
              }
              _0x22a365().then(_0x2c2388 => {
                _0x4942b5 = Object.assign(_0x4942b5, _0x2c2388);
                let _0x3b8f29 = Object.assign({}, {
                  package: _0x4942b5["package"] || "",
                  channel: (_0x4942b5.channel || "").toLowerCase(),
                  name: _0x4942b5.name || "",
                  svr: _0x4942b5.versionName || "",
                  client_id: _0x244295(_0x4942b5.device || "", this.state.cuid),
                  info_ma: _0x244295(_0x4942b5.mac || "", this.state.cuid),
                  os_id: _0x244295(_0x4942b5.userId || "", this.state.cuid),
                  make: (_0x4942b5.brand || "").toLowerCase(),
                  manufacturer: (_0x4942b5.manufacturer || "").toLowerCase(),
                  model: (_0x4942b5.model || "").toLowerCase(),
                  product: (_0x4942b5.product || "").toLowerCase(),
                  os_type: (_0x4942b5.osType || "").toLowerCase(),
                  ovr: (_0x4942b5.osVersionName || "").toLowerCase(),
                  pla_ver: _0x4942b5.platformVersionCode || "",
                  lan: (_0x4942b5.language || "").toLowerCase(),
                  region: (_0x4942b5.region || "").toLowerCase(),
                  px: (_0x4942b5.screenWidth || "") + "*" + (_0x4942b5.screenHeight || ""),
                  net: (_0x4942b5.type || "").toLowerCase(),
                  has_icon: _0x4942b5.has_icon || 0x0,
                  source: (_0x4942b5.source || "").toLowerCase(),
                  extra: ("string" == typeof (_0x4942b5.extra || "") ? _0x4942b5.extra || "" : JSON.stringify(_0x4942b5.extra || "")).toLowerCase(),
                  t_icon_state: _0x4942b5.t_icon_state || 0x2
                }, {
                  app_id: _0x29dbae["default"].app_key || "",
                  cuid: {}.cuid || "",
                  req_id: {}.req || "",
                  en_code: "cuid",
                  action: 0x2,
                  n_u_mark: {}.n_u_mark || 0x0
                });
                if (_0x4baea8) {
                  _0x4baea8(_0x3b8f29);
                }
              });
            }
            ["page_stat"](_0x6b5d95) {
              let _0x178570;
              let _0x1e3ac1;
              let _0x21a0d5;
              Promise.all([_0x12add5(), _0x2efe9c("_SD_BD_ICON_STATE_"), _0x3cb9fa("internal://files/wanka/icon.txt")]).then(_0x47ec50 => {
                let _0x3d887c = _0x47ec50[0x0].has_icon;
                let _0x596dd9 = _0x47ec50[0x1] || _0x47ec50[0x2].text;
                let _0xa9f7ca = parseInt(Date.now() / 0x5265c00);
                if (!_0x596dd9) {
                  this.state.lastday_icon_state = this.state.lastday_icon_state || 0x0;
                  this.icon_states = {
                    tod_state: {
                      update_time: _0xa9f7ca,
                      state: _0x3d887c
                    },
                    last_state: {
                      update_time: _0xa9f7ca,
                      state: this.state.lastday_icon_state
                    }
                  };
                }
                if (_0x596dd9) {
                  let _0x40903a = JSON.parse(_0x596dd9);
                  if (_0xa9f7ca != _0x40903a.tod_state.update_time) {
                    this.state.lastday_icon_state = _0x40903a.tod_state.state;
                    this.icon_states = {
                      tod_state: {
                        update_time: _0xa9f7ca,
                        state: _0x3d887c
                      },
                      last_state: {
                        update_time: _0x40903a.tod_state.update_time,
                        state: _0x40903a.tod_state.state
                      }
                    };
                  } else {
                    this.state.lastday_icon_state = _0x40903a.last_state.state;
                    if (_0x3d887c != _0x40903a.tod_state.state) {
                      this.icon_states = Object.assign({}, _0x40903a, {
                        tod_state: {
                          update_time: _0xa9f7ca,
                          state: _0x3d887c
                        }
                      });
                    }
                  }
                }
                this.state.data.t_icon_state = _0x3d887c == this.state.lastday_icon_state ? 0x2 : _0x3d887c;
                this.state.data.has_icon = _0x3d887c;
              });
              try {
                _0x1e3ac1 = (_0x178570 = _0x1c1850["default"].getState() || {}).name;
                _0x21a0d5 = _0x178570.path;
              } catch (_0x47a688) {
                let _0x4c3347 = {
                  err_msg: ("string" == typeof _0x47a688.stack ? _0x47a688.stack : JSON.stringify(_0x47a688.stack)) || "",
                  err_site: "router.getState"
                };
                _0x3b1621.err_report(_0x4c3347);
              }
              try {
                if (this.isReStart(_0x1e3ac1)) {
                  this.reStart();
                }
              } catch (_0x565ed6) {
                let _0x3c4ad5 = {
                  err_msg: ("string" == typeof _0x565ed6.stack ? _0x565ed6.stack : JSON.stringify(_0x565ed6.stack)) || "",
                  err_site: "computed reStart"
                };
                _0x3b1621.err_report(_0x3c4ad5);
              }
              this.state.page = _0x84efed({
                sta_time: Date.now(),
                page_name: _0x1e3ac1 || "",
                page_path: _0x21a0d5 || "",
                is_entry: this.state.is_entry || 0x0
              });
              this.state.is_entry = 0x0;
              _0x2fc626.has_open_log = true;
            }
            ["page_end"](_0x9d573c) {
              try {
                parseInt(Date.now() / 0x5265c00);
                let _0x5877d7 = Date.now();
                if (!this.state.cuid || !this.state.data) {
                  return;
                }
                if (this.state.page) {
                  this.state.page.duration = _0x5877d7 - this.state.page.sta_time;
                  this.state.page.end_time = _0x5877d7;
                  this.handle_submit({}, () => {
                    if (null != this.icon_states) {
                      this.update_icon_state({}, this.icon_states);
                    }
                  });
                } else {
                  let _0x231141 = {
                    err_msg: "this.state.page is" + this.state.page,
                    err_site: "get_page_data"
                  };
                  _0x3b1621.err_report(_0x231141);
                }
              } catch (_0xd93a39) {
                console.log("error", _0xd93a39);
              }
            }
            ["isReStart"](_0x3729b0) {
              let _0x363b15 = this.state.page || {
                page_name: "",
                end_time: 0x0
              };
              if ("" == _0x363b15.end_time) {
                return false;
              }
              let _0x53ba23 = Date.now() - _0x363b15.end_time;
              return _0x3729b0 && _0x3729b0 === _0x363b15.page_name && _0x53ba23 >= 0x7530;
            }
            ["reStart"]() {
              this.state.is_entry = 0x1;
              this.state.req = _0x38c57e(this.state.cuid);
              if (this.state.data) {
                this.state.data.req_id = this.state.req;
              }
            }
            ["merge_datas"]() {
              return Object.assign(this.state.data || {}, this.state.page || {}, _0x5c2ee2);
            }
            ["handle_submit"](_0x44893a = {}, _0xe98f51) {
              let _0x1646ad = Object.assign({}, this.merge_datas(), _0x44893a);
              let _0x209878 = _0x3d9a91(_0x1646ad);
              let _0x562cef = _0x244295(_0x209878, _0x1646ad.cuid);
              _0x4383c4({
                url: "/a.gif?" + _0x3d9a91({
                  package: _0x1646ad["package"],
                  svr: _0x1646ad.svr,
                  cuid: _0x1646ad.cuid,
                  en_code: "cuid",
                  sdk_version: _0x1646ad.sdk_version,
                  sdk_version_code: _0x1646ad.sdk_version_code,
                  action: _0x1646ad.action,
                  params: _0x562cef
                })
              }).then(_0x208ccc => {
                if (0xc8 == _0x208ccc.code) {
                  this.send_queue();
                  if (_0xe98f51) {
                    _0xe98f51();
                  }
                } else {
                  this.save_to_queue(_0x209878);
                }
              })["catch"](_0x1b8660 => {
                this.save_to_queue(_0x209878);
              });
            }
            ["save_to_queue"](_0x2c5ba0) {
              let _0xbab4e1 = this.state.log_list && this.state.log_list.length;
              if (_0xbab4e1 && _0xbab4e1 < 0x32) {
                this.state.log_list.push(_0x2c5ba0 + "&retry=1");
              }
              return this.state.log_list;
            }
            ["send_queue"]() {
              try {
                let _0x5e02eb = [...this.state.log_list];
                this.state.log_list = [];
                _0x5e02eb.forEach(_0x5b7609 => {
                  _0x4383c4({
                    url: "/a.gif?" + _0x5b7609
                  }).then(_0x54dc60 => {
                    if (0xc8 != _0x54dc60.code) {
                      this.save_to_queue(_0x5b7609);
                    }
                  })["catch"](_0x46becb => {
                    this.save_to_queue(_0x5b7609);
                  });
                });
              } catch (_0x393718) {
                console.log("error", _0x393718);
              }
            }
            ["event_log"](_0x4941c5 = {}) {
              if (!this.state.req) {
                return void console.error("event err:Please execute the “track_event” after the initialization is complete");
              }
              let _0xa43555 = Object.assign({}, _0x4941c5, {
                action: 0x3
              });
              this.handle_submit(_0xa43555);
            }
            ["err_report"](_0x12c00c = {}) {
              if (this.state.data.svr) {
                this.combine_err_data(Object.assign({}, this.merge_datas(), _0x12c00c));
              } else {
                try {
                  this.get_app_info((_0x4fac99 = {}) => {
                    this.combine_err_data(Object.assign({}, _0x4fac99, _0x12c00c));
                  });
                } catch (_0x3add16) {}
              }
            }
            ["combine_err_data"](_0x5e34b7 = {}) {
              let _0x1bdeb2 = Object.assign({
                action: 0x9,
                err_time: new Date().getTime(),
                err_id: ""
              }, _0x5e34b7);
              _0x1bdeb2.app_id = _0x29dbae["default"].app_key || "";
              let _0x3ff2db = _0x244295(_0x3d9a91(_0x1bdeb2), _0x1bdeb2.cuid);
              let _0x3c5be1 = {
                package: _0x1bdeb2["package"] || "",
                svr: _0x1bdeb2.svr,
                app_id: _0x1bdeb2.app_id || "",
                cuid: _0x1bdeb2.cuid || "",
                en_code: "cuid",
                sdk_version: _0x1bdeb2.sdk_version || "",
                sdk_version_code: _0x1bdeb2.sdk_version_code,
                action: _0x1bdeb2.action || "",
                params: _0x3ff2db
              };
              _0x2efe9c("_SD_BD_ERR_MSG_INFO_").then(_0xba1dd8 => {
                let _0x367dfd = new Date().getDate();
                let _0x3772b2 = {
                  day: _0x367dfd,
                  len: 0x0
                };
                if (_0xba1dd8) {
                  try {
                    _0x3772b2 = JSON.parse(_0xba1dd8);
                  } catch (_0x4648b7) {}
                }
                if (_0x3772b2.day !== _0x367dfd) {
                  _0x3772b2.len = 0x0;
                }
                if (_0x3772b2.len < 0x32) {
                  ++_0x3772b2.len;
                }
                if (!(_0x3772b2.len > 0x32)) {
                  (function (_0xa3bb40) {
                    return _0x4383c4({
                      url: "/e.gif?" + _0xa3bb40
                    });
                  })(_0x3d9a91(_0x3c5be1)).then(_0x12d627 => {
                    _0x1c9474("_SD_BD_ERR_MSG_INFO_", "string" == typeof _0x3772b2 ? _0x3772b2 : JSON.stringify(_0x3772b2)).then();
                  });
                }
              })["catch"]();
            }
            ["save_uuids_to_client"](_0x513b5d) {
              _0x1c9474("_SD_BD_CUID_", _0x513b5d).then(_0x4963db => {
                if (_0x4963db) {
                  _0x2fc626.has_cuid_storage = true;
                }
              });
              let _0x352c5c = {
                "_SD_BD_CUID_": _0x513b5d
              };
              _0x3ff5d3("internal://files/wanka/data.txt", _0x352c5c).then(_0x2b6334 => {});
            }
            ["update_icon_state"](_0x4b8b9a, _0x3ed455 = "") {
              _0x1c9474("_SD_BD_ICON_STATE_", _0x3ed455).then(_0x2c7e15 => {});
              _0x3ff5d3("internal://files/wanka/icon.txt", _0x3ed455).then(_0x202a93 => {});
            }
          }();
          const _0x463c2d = {
            open_app(_0x4b585a) {
              try {
                if (!_0x29dbae["default"].app_key) {
                  return void console.error("Not configured app_key!");
                }
                _0x3b1621.init(_0x4b585a);
              } catch (_0x558c98) {
                let _0x538a57 = {
                  err_msg: ("string" == typeof _0x558c98.stack ? _0x558c98.stack : JSON.stringify(_0x558c98.stack)) || "",
                  err_site: "open_app"
                };
                _0x3b1621.err_report(_0x538a57);
              }
            },
            page_show(_0x2fbb52) {
              try {
                _0x3b1621.page_stat(_0x2fbb52);
              } catch (_0x4c35c3) {
                let _0xc2c3aa = {
                  err_msg: ("string" == typeof _0x4c35c3.stack ? _0x4c35c3.stack : JSON.stringify(_0x4c35c3.stack)) || "",
                  err_site: "page_show"
                };
                _0x3b1621.err_report(_0xc2c3aa);
              }
            },
            page_hide(_0x219647) {
              try {
                if (false && false) {
                  _0x3b1621.page_end(_0x219647);
                }
              } catch (_0x3fd608) {
                let _0x3ee5fc = {
                  err_msg: ("string" == typeof _0x3fd608.stack ? _0x3fd608.stack : JSON.stringify(_0x3fd608.stack)) || "",
                  err_site: "open_app"
                };
                _0x3b1621.err_report(_0x3ee5fc);
              }
              _0x2fc626.has_open_log = false;
            },
            track_event(_0x4f7f09, _0xc84d55) {
              try {
                if (!_0x29dbae["default"].app_key) {
                  return void console.error("Not configured app_key!");
                }
                let _0x5e4531 = null == _0xc84d55 ? "" : _0xc84d55;
                if (!function (_0x6110cf) {
                  return "string" == typeof _0x6110cf && "" !== _0x6110cf && /^[0-9a-zA-Z_\u4e00-\u9fa5]{1,255}$/.test(_0x6110cf);
                }(_0x4f7f09)) {
                  return void console.error("\"event error\": please check track_event id. id should be \"string\" and not null.");
                }
                if (!function (_0x297d11) {
                  let _0x374e60 = /^[0-9a-zA-Z_\u4e00-\u9fa5]{0,255}$/;
                  let _0x147b61 = 0x0;
                  if ("string" == typeof _0x297d11 && _0x374e60.test(_0x297d11)) {
                    return true;
                  }
                  if (function (_0x34561b) {
                    if ("object" != typeof _0x34561b || null == _0x34561b) {
                      return false;
                    }
                    if (null === Object.getPrototypeOf(_0x34561b)) {
                      return true;
                    }
                    let _0x828880 = _0x34561b;
                    for (; null !== Object.getPrototypeOf(_0x828880);) {
                      _0x828880 = Object.getPrototypeOf(_0x828880);
                    }
                    return Object.getPrototypeOf(_0x34561b) === _0x828880;
                  }(_0x297d11)) {
                    for (let _0x1dbdac in _0x297d11) {
                      let _0x428f46 = _0x297d11[_0x1dbdac];
                      if ("string" != typeof _0x1dbdac && "number" != typeof _0x1dbdac || !/^[0-9a-zA-Z_\u4e00-\u9fa5]{1,255}$/.test(_0x1dbdac)) {
                        return false;
                      }
                      if ("string" != typeof _0x428f46 && "number" != typeof _0x428f46 || !_0x374e60.test(_0x428f46)) {
                        return false;
                      }
                      _0x147b61++;
                    }
                    return !(_0x147b61 > 0x64);
                  }
                  return false;
                }(_0x5e4531)) {
                  return void console.error("\"event error\":  please check track_event parameter. parameter should be \"string\" or \"object\"");
                }
                _0x3b1621.event_log({
                  ev_id: _0x4f7f09,
                  ev_args: "string" == typeof _0x5e4531 ? _0x5e4531 : "string" == typeof _0x5e4531 ? _0x5e4531 : JSON.stringify(_0x5e4531)
                });
              } catch (_0x356aa6) {
                let _0x21aafd = {
                  err_msg: ("string" == typeof _0x356aa6.stack ? _0x356aa6.stack : JSON.stringify(_0x356aa6.stack)) || "",
                  err_site: "track_event"
                };
                _0x3b1621.err_report(_0x21aafd);
              }
            },
            on_err(_0x37c89a) {
              try {
                if (!_0x29dbae["default"].app_key) {
                  return void console.error("Not configured app_key!");
                }
                0x0;
                let _0x2e3c8e = {
                  err_msg: ("string" == typeof _0x37c89a.stack ? _0x37c89a.stack : JSON.stringify(_0x37c89a.stack)) || "",
                  err_site: "",
                  action: 0x8,
                  err_id: _0x35fd57["default"](_0x37c89a.message.replace(/^[\S\s]+:/, ""))
                };
                _0x3b1621.err_report(_0x2e3c8e);
              } catch (_0x165a7e) {
                let _0x488246 = {
                  err_msg: ("string" == typeof _0x165a7e.stack ? _0x165a7e.stack : JSON.stringify(_0x165a7e.stack)) || "",
                  err_site: "on_err"
                };
                _0x3b1621.err_report(_0x488246);
              }
            }
          };
          const _0x3d9f9a = {
            app_sta_init: _0x463c2d.open_app,
            page_show: _0x463c2d.page_show,
            page_hide: _0x463c2d.page_hide,
            track_event: _0x463c2d.track_event,
            on_err: _0x463c2d.on_err
          };
          const _0xae5b9c = _0x4a22d4.g.__proto__ || _0x4a22d4.g;
          _0xae5b9c.APP_STATISTICS = _0x3d9f9a;
          _0xae5b9c.Custom_page = APP_STATISTICS.Custom_page = function (_0x586a68) {
            let _0x4d7677 = _0x586a68.onShow;
            let _0x3d02b9 = _0x586a68.onHide;
            _0x586a68.onShow = function () {
              _0x463c2d.page_show(this);
              if (_0x4d7677) {
                _0x4d7677.call(this);
              }
            };
            _0x586a68.onHide = function () {
              _0x463c2d.page_hide(this);
              if (_0x3d02b9) {
                _0x3d02b9.call(this);
              }
            };
            return _0x586a68;
          };
          _0x3f666c["default"] = _0x3d9f9a;
        },
        0x17991: (_0x5831ff, _0x343ec5, _0x4fc0f3) => {
          "use strict";

          Object.defineProperty(_0x343ec5, "__esModule", {
            value: true
          });
          _0x343ec5["default"] = undefined;
          var _0x176664;
          var _0x24a17d = (_0x176664 = _0x4fc0f3(0xb1ae)) && _0x176664.__esModule ? _0x176664 : {
            default: _0x176664
          };
          var _0x12d43c = null;
          _0x343ec5["default"] = {
            setAppDef(_0x4a44c4) {
              if (_0x4a44c4) {
                _0x12d43c = _0x4a44c4;
              }
            },
            getCodeApi: _0x2c8a79 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/index/code", _0x2c8a79, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            register: _0x36afbc => _0x24a17d["default"].post("https://zwapi.syreads.com/api/user/register", _0x36afbc, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            login: _0x499057 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/quick/open-v3", _0x499057, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            bookinfo: _0x5402e1 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/home/data", _0x5402e1, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            userDataInfo: _0x3db7aa => _0x24a17d["default"].get("https://zwapi.syreads.com/api/user/mine", _0x3db7aa, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            bookchange: _0x201183 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/home/change", _0x201183, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            rankbookInfo: _0x1497bd => _0x24a17d["default"].get("https://zwapi.syreads.com/api/home/rank", _0x1497bd, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            stackRoomInfo: _0x3ebf19 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/home/category-more", _0x3ebf19, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            bookDetails: _0x2b02c4 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/book/detail", _0x2b02c4, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            bookshelf: _0x59dda1 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/user/bookshelf", _0x59dda1, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            removeBookshelf: _0x1c880d => _0x24a17d["default"].post("https://zwapi.syreads.com/api/user/remove-bookshelf", _0x1c880d, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            getCatalog: _0x21148a => _0x24a17d["default"].get("https://zwapi.syreads.com/api/book/catalog", _0x21148a, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            getChapterContentV3: _0x58ea3c => _0x24a17d["default"].get("https://zwapi.syreads.com/api/book/chapter-content3", _0x58ea3c, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            chapterDeductionCoin: _0x3a1284 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/book/chapter-deduction", _0x3a1284, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            setReadRecord: _0x7da16c => _0x24a17d["default"].get("https://zwapi.syreads.com/api/book/set-read-log", _0x7da16c, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            searchreData: _0x7ba43f => _0x24a17d["default"].get("https://zwapi.syreads.com/api/book/search-recommend-book", _0x7ba43f, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            searchData: _0x10b253 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/index/search", _0x10b253, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            payLogInfo: _0x1f3c59 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/user/pay-log", _0x1f3c59, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            consumeInfo: _0xe191bb => _0x24a17d["default"].get("https://zwapi.syreads.com/api/user/consume-chapter-log", _0xe191bb, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            uploadInfo: _0x3f73e8 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/user/upload", _0x3f73e8, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            logout: _0x45f5b9 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/user/logout", _0x45f5b9, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            alipay: _0x487dae => _0x24a17d["default"].post("https://zwapi.syreads.com/api/payment/alipay", _0x487dae, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            wxPay: _0x2efd91 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/payment/wxpay", _0x2efd91, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            wxpayweb: _0x305246 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/payment/h5wxpay", _0x305246, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            homecategory: _0x402d61 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/home/category", _0x402d61, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            addDeskTopInfo: _0x265048 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/quick/desk", _0x265048, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            pushMessage: _0x2a3da7 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/push/report", _0x2a3da7, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            searchRankBookApi: _0x543112 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/book/search-rank-book", _0x543112, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            shelfBannerApi: _0x214df5 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/bookshelf/banner", _0x214df5, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            categoryApi: _0x595bd1 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/category/second", _0x595bd1, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            paymentMoneyApi: _0x337459 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/payment/money", _0x337459, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            getActivityList: _0x1bf1f1 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/activity/list", _0x1bf1f1, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            getTask: _0x5d6f0f => _0x24a17d["default"].get("https://zwapi.syreads.com/api/weal/index", _0x5d6f0f, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            getTaskNew: _0x2a22c1 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/weal/welfare", _0x2a22c1, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            openCash: _0x392978 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/weal/get-red-packet", _0x392978, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            openSignPop: _0x54b45e => _0x24a17d["default"].get("https://zwapi.syreads.com/api/weal/sign-in-v2", _0x54b45e, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            userBookTickets: _0x32ec36 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/user/book-tickets", _0x32ec36, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            userIncomeDetail: _0x5f4ca5 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/cash/income", _0x5f4ca5, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            cashOutList: _0x4f06ce => _0x24a17d["default"].get("https://zwapi.syreads.com/api/cash/amounts-list", _0x4f06ce, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            cashOutRecordList: _0x15c5ac => _0x24a17d["default"].get("https://zwapi.syreads.com/api/cash/get-cash-list", _0x15c5ac, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            cashOutCheck: _0xb5618 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/cash/check-account", _0xb5618, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            cashOutSubmit: _0x2428fc => _0x24a17d["default"].post("https://zwapi.syreads.com/api/cash/cash-out", _0x2428fc, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            homeBottomApi: _0xc139a8 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/home/bottom", _0xc139a8, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            userLastBookChapterApi: _0x13a156 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/user/last-book-chapter", _0x13a156, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            welfareReceiveApi: _0x2d9b84 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/weal/get-bt", _0x2d9b84, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            welfareReceiveNewApi: _0xf915d1 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/weal/get-bt2", _0xf915d1, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            welfareSignInApi: _0x46cc82 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/weal/sign-in", _0x46cc82, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            complaintApi: _0x336d07 => _0x24a17d["default"].post("https://zwapi.syreads.com/api/complaint/complaint", _0x336d07, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            centerTypeApi: _0x355a0a => _0x24a17d["default"].post("https://zwapi.syreads.com/api/weal/center-type", _0x355a0a, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            writeOffApi: _0xe83362 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/user/del-user", _0xe83362, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            subscribeAddApi: _0xfa5386 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/subscribe/add", _0xfa5386, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            subscribeCheckApi: _0x32c028 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/subscribe/is-subscribe", _0x32c028, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            subscribeListApi: _0x4c70c1 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/subscribe/list", _0x4c70c1, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            subscribeCancelApi: _0x1992d3 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/subscribe/cancel", _0x1992d3, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            vipPriceApi: _0x15e00a => _0x24a17d["default"].get("https://zwapi.syreads.com/api/user/vip-price", _0x15e00a, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            taskUpdataApi: _0x4ed07c => _0x24a17d["default"].get("https://zwapi.syreads.com/api/weal/edit-user-task", _0x4ed07c, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面"),
            bookRecommendApi: _0x541ee5 => _0x24a17d["default"].get("https://zwapi.syreads.com/api/recommend/get-page-recommend", _0x541ee5, _0x12d43c ? _0x12d43c.pageCodeInfo.pathCurUrl : "默认页面")
          };
        },
        0xb546: (_0x37a3c6, _0x44f16f, _0x4c7af2) => {
          "use strict";

          Object.defineProperty(_0x44f16f, "__esModule", {
            value: true
          });
          _0x44f16f["default"] = undefined;
          const _0x139bf0 = _0x4c7af2(0x4821);
          const _0x5acf0b = {};
          _0x139bf0.keys().forEach(_0x5dfdce => {
            if ("./index.js" !== _0x5dfdce) {
              _0x5acf0b[_0x5dfdce.replace(/(^\.\/|\.js$)/g, "")] = _0x139bf0(_0x5dfdce)["default"];
            }
          });
          _0x44f16f["default"] = _0x5acf0b;
        },
        0x3cd3: (_0x26e777, _0x36c0ca, _0x335a92) => {
          "use strict";

          Object.defineProperty(_0x36c0ca, "__esModule", {
            value: true
          });
          _0x36c0ca["default"] = undefined;
          var _0xce1f4a = $app_require$("@app-module/system.fetch") && $app_require$("@app-module/system.fetch").__esModule ? $app_require$("@app-module/system.fetch") : {
            default: $app_require$("@app-module/system.fetch")
          };
          var _0x5f3ee5 = $app_require$("@app-module/system.app") && $app_require$("@app-module/system.app").__esModule ? $app_require$("@app-module/system.app") : {
            default: $app_require$("@app-module/system.app")
          };
          var _0x5725ac = _0x335a92(0x452f) && _0x335a92(0x452f).__esModule ? _0x335a92(0x452f) : {
            default: _0x335a92(0x452f)
          };
          var _0x12fbe7 = $app_require$("@app-module/system.storage") && $app_require$("@app-module/system.storage").__esModule ? $app_require$("@app-module/system.storage") : {
            default: $app_require$("@app-module/system.storage")
          };
          var _0x1a36d = $app_require$("@app-module/system.device") && $app_require$("@app-module/system.device").__esModule ? $app_require$("@app-module/system.device") : {
            default: $app_require$("@app-module/system.device")
          };
          var _0x35ea61 = $app_require$("@app-module/system.package") && $app_require$("@app-module/system.package").__esModule ? $app_require$("@app-module/system.package") : {
            default: $app_require$("@app-module/system.package")
          };
          var _0xeef5a7 = _0x335a92(0x13c61) && _0x335a92(0x13c61).__esModule ? _0x335a92(0x13c61) : {
            default: _0x335a92(0x13c61)
          };
          var _0x19ac52 = _0x335a92(0x101b0) && _0x335a92(0x101b0).__esModule ? _0x335a92(0x101b0) : {
            default: _0x335a92(0x101b0)
          };
          var _0x16ee9a = _0x335a92(0x2d64) && _0x335a92(0x2d64).__esModule ? _0x335a92(0x2d64) : {
            default: _0x335a92(0x2d64)
          };
          let _0x7a0e38 = {
            SECRET_KEY: "",
            HAPKEY: "",
            INTENDED_USER: 0x0,
            CHANNEL: "",
            LINK_ID: "",
            SOURCE_PACKAGR: "",
            DEEP_LINK_ACCESS: 0x0,
            REVIEW_STATUS: 0x0,
            CLIENT_VERSION: "",
            INSTALLED_PACKAGE_NAME: "",
            TIMESTAMP: "",
            MOBIL_FACTORY: "",
            ANDROID_VERSION: "",
            MOBIL_VERSION: "",
            QUICKAPP_VERSION: "",
            ANDROID_ID: "",
            FIRST_VISITED_CITY: "",
            NUMBER_OF_VISITS: 0x0,
            MATERIAL_TYPE: "",
            IDEAS_ID: "",
            PLAN_ID: "",
            UTM_SOURCE_ID: "",
            NUMBER_OF_VISITS_TODAY: "",
            DATE_TIME: 0x0,
            LAST_VISITED_CITY: "",
            INSTALL_APP: {},
            SOURCE_ID: "",
            NUMBER_OF_ADDDESK_START: 0x0,
            VISIT_INTERVAL_TIME: 0x0,
            OAID: ""
          };
          var _0x27b5cd = {
            tacticsInfo: null,
            routesInfo: [],
            popupInfo: null,
            initStatus: 0x0,
            tacticsType: 0x4,
            configInfo: null,
            customPopupData: {},
            backPopupData: {},
            commonNativePopupData: {},
            baiduPopupData: {},
            videoPopupData: {},
            middlePopupData: {},
            adPostionInfo: null,
            adConfigInfo: null,
            appPackageInfo: {},
            reviewStatus: 0x0,
            ad_pool: null,
            app_ad_packet: "",
            new_ad_pos: null,
            bqtAdConfigInfo: null,
            qdConfig: {},
            middleVideoPopupData: {},
            middleBaiduPopupData: {},
            middleTempletePopupData: {},
            baiduScreenInsertionPopupData: {},
            adRequestNum: 0x0,
            appPopupData: {},
            readViewConfig: {},
            event_info: {}
          };
          async function _0x23f6ba() {
            let _0x21f2af = ["com.huawei.fastapp.dev", "org.hapjs.mockup", "org.hapjs.debugger", "com.zouqi.qingfeng", "com.fvcorp.android.aijiasuclient", "com.zaozhu.netplus", "com.qlbd.quanliangpromote", "cn.ccspeed", "com.zx.a2_quickfox", "com.dongguo.feiyu", "com.linghang520.iphainet"];
            const _0x53d23e = await function () {
              const _0x5210d7 = new Date().getTime();
              return new Promise(_0x243310 => {
                _0xce1f4a["default"].fetch({
                  url: "https://ims.readnos.com/json/packageList/zhuiwenxiaoshuo/.json?time=" + _0x5210d7
                }).then(_0x1a5b11 => {
                  if (0xc8 === _0x1a5b11.data.code && _0x1a5b11.data.data) {
                    _0x243310(JSON.parse(_0x1a5b11.data.data));
                  } else {
                    _0x243310([]);
                  }
                })["catch"](_0x23ef8b => {
                  _0x243310([]);
                });
              });
            }();
            return new Promise(_0x1dceac => {
              _0x571912(_0x21f2af, _0x53d23e, _0x1de0fa => {
                LOG("TACTICS", "checkAbnormalPersonsFn==>", _0x1de0fa);
                _0x1dceac(function (_0x4deabb) {
                  try {
                    var _0x2ec611 = _0xeef5a7["default"].enc.Utf8.parse("00F35FCAA967B789");
                    var _0x17e3f8 = _0xeef5a7["default"].enc.Utf8.parse("A041FCA49EF0B983");
                    var _0x44066a = _0xeef5a7["default"].enc.Utf8.parse(_0x4deabb);
                    const _0x1b953c = _0xeef5a7["default"].AES.encrypt(_0x44066a, _0x2ec611, {
                      iv: _0x17e3f8,
                      mode: _0xeef5a7["default"].mode.CBC,
                      padding: _0xeef5a7["default"].pad.Pkcs7
                    });
                    LOG("TACTICS", _0x1b953c.toString());
                    return _0x1b953c.toString();
                  } catch (_0x995f80) {
                    LOG("TACTICS", "aesEncrypt", _0x995f80);
                    return _0x4deabb;
                  }
                }(JSON.stringify(_0x1de0fa)));
              });
            });
          }
          function _0x571912(_0x1bcc4a, _0x520d05, _0x208cb1) {
            !function _0x26fadd(_0x56e842, _0x299c4b, _0x199f93) {
              if (_0x299c4b >= _0x199f93.length) {
                _0x208cb1(_0x56e842);
              } else {
                _0x35ea61["default"].hasInstalled({
                  package: _0x199f93[_0x299c4b],
                  success: function (_0x253050) {
                    if (_0x253050.result) {
                      if (_0x299c4b >= _0x1bcc4a.length) {
                        const _0x5db943 = _0x520d05[_0x299c4b - _0x1bcc4a.length].name;
                        COMMON_REPORT_UTILS.return_source_app_report(_0x5db943);
                      }
                      _0x56e842["" + _0x199f93[_0x299c4b]] = 0x1;
                      _0x299c4b++;
                      _0x26fadd(_0x56e842, _0x299c4b, _0x199f93);
                    } else {
                      _0x56e842["" + _0x199f93[_0x299c4b]] = 0x0;
                      _0x299c4b++;
                      _0x26fadd(_0x56e842, _0x299c4b, _0x199f93);
                    }
                  },
                  fail: function (_0x1c8b2e, _0x34c428) {
                    _0x56e842["" + _0x199f93[_0x299c4b]] = 0x0;
                    _0x299c4b++;
                    _0x26fadd(_0x56e842, _0x299c4b, _0x199f93);
                  }
                });
              }
            }({}, 0x0, _0x1bcc4a.concat(_0x520d05.map(_0x12394d => _0x12394d["package"])));
          }
          async function _0x1b1f35(_0x38c6a5, _0x2458b1, _0xe25e80) {
            return new Promise((_0x32e9fc, _0x52f5b0) => {
              _0xce1f4a["default"].fetch({
                url: "https://clapi.readnos.com/api" + _0x38c6a5,
                method: _0x2458b1,
                data: _0xe25e80,
                header: {
                  "Content-Type": "application/json"
                },
                success: _0x54eef6 => {
                  LOG("TACTICS", "http====>", _0x54eef6);
                  try {
                    const _0x5e8f09 = JSON.parse(_0x54eef6.data);
                    if (0xc8 === _0x5e8f09.code) {
                      _0x32e9fc(_0x5e8f09);
                    } else {
                      _0x52f5b0(_0x5e8f09.message);
                    }
                  } catch (_0x43561d) {
                    _0x52f5b0("接口异常");
                  }
                },
                fail: (_0x3c6e71, _0x284a0d) => {
                  LOG("TACTICS", "🐛tactics request fail, code = " + _0x284a0d + " ", _0x3c6e71);
                  _0x52f5b0(_0x3c6e71);
                }
              });
            });
          }
          function _0x34a63b() {
            return new Promise(_0x3c895b => {
              _0x571912("".split(","), _0x2be7ef => {
                let _0xff362c = [];
                for (let _0x178ff6 in _0x2be7ef) if (_0x2be7ef[_0x178ff6]) {
                  _0xff362c.push(_0x178ff6);
                }
                _0x3c895b(_0xff362c.toString());
              });
            });
          }
          function _0x110f92(_0x534067, _0x342ca0, _0x1afd17 = "btn") {
            if (!_0x342ca0 || !_0x342ca0.id) {
              return;
            }
            let _0x949168 = new Object();
            _0x949168.ad_id = _0x342ca0.id;
            _0x949168.ad_network = _0x342ca0.ad_network ? _0x342ca0.ad_network : 0x1;
            _0x949168.ad_type = _0x342ca0.ad_type ? _0x342ca0.ad_type : "原生";
            _0x949168.result = _0x342ca0.result ? _0x342ca0.result : "";
            _0x949168.page_name = _0x342ca0.scenario ? _0x342ca0.scenario : "";
            _0x949168.ad_position = _0x342ca0.popName ? _0x342ca0.popName : _0x949168.page_name;
            _0x949168.page_type = _0x342ca0.popGroupName ? _0x342ca0.popGroupName : _0x949168.page_name;
            _0x949168.duration = "" + (_0x342ca0.requestNum ? _0x342ca0.requestNum : 0x1);
            _0x949168.ad_style = _0x342ca0.ad_style ? _0x342ca0.ad_style : "";
            _0x949168.adRequestNum = "" + (_0x342ca0.adRequestNum || "1");
            _0x949168.referer = "" + (_0x342ca0.referer || "");
            let _0x1db9b3 = "btn" == _0x1afd17 ? "按钮" : "素材";
            let {
              ad_id: _0x3418aa,
              ad_network: _0x44c3d2,
              ad_type: _0x4c0eef,
              page_name: _0x2f174f,
              page_type: _0x588e48,
              ad_position: _0x5d5515,
              result: _0x46752b,
              duration: _0x25eced,
              ad_style: _0x3293f0,
              adRequestNum: _0x8da84d,
              referer: _0x467d15
            } = _0x949168;
            LOG("TACTICS", "uploadAdInfo==============>", _0x534067, _0x949168, _0x1afd17);
            switch (_0x534067) {
              case "request":
                COMMON_REPORT_UTILS.ad_sdk_request_report(_0x3418aa, _0x44c3d2, _0x4c0eef, _0x2f174f, _0x588e48, _0x5d5515, _0x46752b, _0x8da84d, _0x3293f0);
                break;
              case "show":
                COMMON_REPORT_UTILS.ad_sdk_show_report(_0x3418aa, _0x44c3d2, _0x4c0eef, _0x2f174f, _0x588e48, _0x5d5515, _0x8da84d, _0x3293f0, _0x46752b);
                break;
              case "click":
                COMMON_REPORT_UTILS.ad_sdk_click_report(_0x3418aa, _0x44c3d2, _0x4c0eef, _0x2f174f, _0x588e48, _0x5d5515, _0x1db9b3, _0x8da84d, _0x3293f0);
                break;
              case "take":
                COMMON_REPORT_UTILS.ad_sdk_take(_0x949168, _0x342ca0.pageName);
            }
          }
          const _0x5ab815 = {
            initSdk: async function (_0x58b869) {
              return new Promise((_0x3c3927, _0x2821de) => _0x58b869.secretKey ? _0x58b869.android ? (_0x27b5cd.initStatus = 0x1, void function (_0x5d9802) {
                LOG("TACTICS", "策略路由参数===>", _0x5d9802);
                return new Promise(async _0x590f15 => {
                  _0x7a0e38.OAID = _0x5d9802.oaid;
                  _0x7a0e38.SECRET_KEY = _0x5d9802.secretKey;
                  _0x7a0e38.ANDROID_ID = _0x5d9802.android;
                  _0x7a0e38.CLIENT_VERSION = _0x5f3ee5["default"].getInfo().versionName;
                  _0x7a0e38.SOURCE_PACKAGR = _0x5f3ee5["default"].getInfo().source.packageName;
                  _0x7a0e38.TIMESTAMP = new Date().getTime();
                  _0x7a0e38.CHANNEL = _0x5d9802.channelId ? _0x5d9802.channelId : "";
                  _0x7a0e38.LINK_ID = _0x5d9802.linkId ? _0x5d9802.linkId : "";
                  _0x7a0e38.HAPKEY = _0x5d9802.hapKey ? decodeURIComponent(_0x5d9802.hapKey) : "";
                  _0x7a0e38.INTENDED_USER = _0x5d9802.intendedUser ? _0x5d9802.intendedUser : 0x0;
                  _0x7a0e38.DEEP_LINK_ACCESS = _0x5d9802.deepLinkAccess;
                  _0x7a0e38.REVIEW_STATUS = _0x5d9802.reviewStatus ? 0x1 : 0x0;
                  _0x7a0e38.MATERIAL_TYPE = _0x5d9802.materialType ? _0x5d9802.materialType : "";
                  _0x7a0e38.IDEAS_ID = _0x5d9802.ideasId ? _0x5d9802.ideasId : "";
                  _0x7a0e38.PLAN_ID = _0x5d9802.planId ? _0x5d9802.planId : "";
                  _0x7a0e38.UTM_SOURCE_ID = _0x5d9802.mediaId ? _0x5d9802.mediaId : "";
                  _0x7a0e38.SOURCE_ID = _0x5d9802.sourceId ? _0x5d9802.sourceId : "";
                  _0x7a0e38.NUMBER_OF_ADDDESK_START = _0x5d9802.addDeskTopDays ? _0x5d9802.addDeskTopDays : 0x0;
                  let _0x57c5f5 = new Date().getTime();
                  let _0x680f5a = (_0x57c5f5 - _0x57c5f5 % 0x5265c00) / 0x5265c00;
                  _0x7a0e38.DATE_TIME = _0x680f5a;
                  if (_0x5d9802.deviceInfo) {
                    _0x7a0e38.QUICKAPP_VERSION = _0x5d9802.deviceInfo.platformVersionCode;
                    _0x7a0e38.ANDROID_VERSION = _0x5d9802.deviceInfo.osVersionName;
                    _0x7a0e38.MOBIL_VERSION = _0x5d9802.deviceInfo.model;
                    let _0x447840 = _0x5d9802.deviceInfo.brand && _0x5d9802.deviceInfo.brand.toLowerCase();
                    _0x447840 = "honor" == _0x447840 || "huawei" == _0x447840 || _0x19ac52["default"].includes("") ? $app_require$("@app-module/service.ad").getProvider() : "redmi" == _0x447840 || "xiaomi" == _0x447840 || "小米" == _0x447840 || "Redmi" == _0x447840 || "小米红米" == _0x447840 ? "xiaomi" : "oppo" == _0x447840 || "realme" == _0x447840 || "oneplus" == _0x447840 ? "oppo" : "vivo" == _0x447840 ? "vivo" : "other";
                    _0x7a0e38.MOBIL_FACTORY = _0x447840;
                    _0x7a0e38.INSTALL_APP = await _0x23f6ba();
                    LOG("TACTICS", "策略路由参数===>", _0x7a0e38.INSTALL_APP);
                    _0x590f15(0x1);
                  } else {
                    _0x1a36d["default"].getInfo().then(async _0x3a16fe => {
                      _0x7a0e38.QUICKAPP_VERSION = _0x3a16fe.data.platformVersionCode;
                      _0x7a0e38.ANDROID_VERSION = _0x3a16fe.data.osVersionName;
                      _0x7a0e38.MOBIL_VERSION = _0x3a16fe.data.model;
                      let _0x83f085 = _0x3a16fe.data.brand && _0x3a16fe.data.brand.toLowerCase();
                      _0x83f085 = "honor" == _0x83f085 || "huawei" == _0x83f085 || _0x19ac52["default"].includes("") ? $app_require$("@app-module/service.ad").getProvider() : "redmi" == _0x83f085 || "xiaomi" == _0x83f085 || "小米" == _0x83f085 || "Redmi" == _0x83f085 || "小米红米" == _0x83f085 ? "xiaomi" : "oppo" == _0x83f085 || "realme" == _0x83f085 || "oneplus" == _0x83f085 ? "oppo" : "vivo" == _0x83f085 ? "vivo" : "other";
                      _0x7a0e38.MOBIL_FACTORY = _0x83f085;
                      _0x7a0e38.INSTALL_APP = await _0x23f6ba();
                      LOG("TACTICS", "策略路由参数===>", _0x7a0e38.INSTALL_APP);
                      _0x590f15(0x1);
                    });
                  }
                });
              }(_0x58b869).then(() => {
                LOG("TACTICS", "TACTICE_SDK->初始化获取的城市以及访问次数", _0x7a0e38);
                _0x12fbe7["default"].get({
                  key: "tacticsData"
                }).then(_0x1e914d => {
                  LOG("TACTICS", "TACTICE_SDK->初始化获取的城市以及访问次数", _0x1e914d);
                  let _0x4a5063 = new Date().getTime();
                  if (_0x1e914d.data) {
                    let _0x20b306 = JSON.parse(_0x1e914d.data);
                    _0x7a0e38.FIRST_VISITED_CITY = _0x20b306.first_visited_city ? _0x20b306.first_visited_city : "";
                    _0x7a0e38.LAST_VISITED_CITY = _0x20b306.last_visited_city ? _0x20b306.last_visited_city : "";
                    _0x7a0e38.NUMBER_OF_VISITS = _0x20b306.number_of_visits ? Number(_0x20b306.number_of_visits) : 0x0;
                    _0x7a0e38.NUMBER_OF_VISITS_TODAY = _0x20b306.number_of_visits_today ? Number(_0x20b306.number_of_visits_today) : 0x0;
                    if (Number(_0x20b306.date_time) != 0x0) {
                      _0x7a0e38.NUMBER_OF_VISITS_TODAY = 0x0;
                    }
                    if (_0x20b306.access_time) {
                      _0x7a0e38.VISIT_INTERVAL_TIME = parseInt(("" - _0x20b306.access_time) / 0x3e8 / 0x3c);
                    } else {
                      _0x7a0e38.VISIT_INTERVAL_TIME = 0x5a0;
                    }
                  }
                  _0x1b1f35("/users/sdk_init_v4", "POST", _0x7a0e38).then(_0x14070a => {
                    COMMON_REPORT_UTILS.error_log_report("/users/sdk_init_v4", "响应时间上报", "" + (new Date().getTime() - _0x4a5063), "请求成功");
                    _0x27b5cd.userAgent = _0x14070a.data.user_agent;
                    if (_0x14070a.data.tacticsInfo) {
                      _0x27b5cd.tacticsInfo = _0x14070a.data.tacticsInfo;
                    } else {
                      _0x27b5cd.tacticsInfo = _0x5725ac["default"].tacticsInfo;
                    }
                    if (_0x14070a.data.popupInfo) {
                      _0x27b5cd.popupInfo = _0x14070a.data.popupInfo;
                    } else {
                      _0x27b5cd.popupInfo = _0x5725ac["default"].popupInfo;
                    }
                    if (_0x14070a.data.ad_pool) {
                      _0x27b5cd.ad_pool = _0x14070a.data.ad_pool;
                    } else {
                      _0x27b5cd.ad_pool = {
                        status: 0x0,
                        scene_list: ""
                      };
                    }
                    if (_0x14070a.data.app_ad_packet) {
                      _0x27b5cd.app_ad_packet = _0x14070a.data.app_ad_packet;
                    }
                    if (_0x14070a.data.new_ad_pos) {
                      _0x27b5cd.new_ad_pos = _0x14070a.data.new_ad_pos;
                    } else {
                      _0x27b5cd.new_ad_pos = _0x16ee9a["default"].getNewDefaultAdPostionConfigByBrand("");
                    }
                    if (_0x14070a.data.ad_pos && _0x14070a.data.ad_pos.baidu_ad) {
                      _0x27b5cd.bqtAdConfigInfo = _0x14070a.data.ad_pos;
                    } else {
                      _0x27b5cd.bqtAdConfigInfo = _0x16ee9a["default"].getBqtDefaultAdConfigByBrand("");
                    }
                    _0x27b5cd.qdConfig = {
                      ad_pos: _0x14070a.data.ad_pos,
                      ad_material: _0x14070a.data.ad_material,
                      ad_config: _0x14070a.data.ad_config,
                      page_config: _0x14070a.data.page_config
                    };
                    if (_0x14070a.data.configInfo) {
                      _0x27b5cd.configInfo = _0x14070a.data.configInfo;
                    }
                    if (_0x14070a.data.routesInfo) {
                      _0x27b5cd.routesInfo = _0x14070a.data.routesInfo;
                    } else {
                      _0x27b5cd.routesInfo = _0x5725ac["default"].routesInfo;
                    }
                    if (_0x14070a.data.timeInfo) {
                      _0x27b5cd.timeInfo = _0x14070a.data.timeInfo;
                    }
                    if (_0x14070a.data.event_info) {
                      _0x27b5cd.event_info = _0x14070a.data.event_info;
                    } else {
                      _0x27b5cd.event_info = {
                        is_open: 0x0,
                        events: ""
                      };
                    }
                    _0x27b5cd.ad_data_pool_tag = _0x14070a.data.ad_data_pool_tag;
                    _0x27b5cd.ad_data_pool_tag_adv_type = _0x14070a.data.ad_data_pool_tag_adv_type;
                    if (_0x14070a.data.first_visited_city && _0x14070a.data.number_of_visits) {
                      _0x12fbe7["default"].set({
                        key: "tacticsData",
                        value: {
                          first_visited_city: _0x14070a.data.first_visited_city,
                          number_of_visits: _0x14070a.data.number_of_visits,
                          number_of_visits_today: _0x14070a.data.number_of_visits_today,
                          date_time: 0x0,
                          last_visited_city: _0x14070a.data.currently_visited_city,
                          access_time: new Date().getTime()
                        }
                      });
                    }
                    if ("" !== _0x14070a.data.configInfo && _0x14070a.data.configInfo.config.newer_state_interval_time && "" !== _0x14070a.data.configInfo.config.newer_state_interval_time) {
                      const _0x458d64 = _0x14070a.data.configInfo.config.newer_state_interval_time.val;
                      _0x12fbe7["default"].set({
                        key: "first_visit",
                        value: _0x458d64
                      });
                    }
                    _0x27b5cd.vistisTimes = _0x14070a.data.number_of_visits;
                    _0x27b5cd.reviewStatus = _0x14070a.data.review_status;
                    if (_0x14070a.data.complaint_tel) {
                      _0x27b5cd.complaint_tel = _0x14070a.data.complaint_tel;
                    }
                    _0x27b5cd.initStatus = 0x2;
                    LOG("TACTICS", "TACTICE_SDK->策略路由SDK初始化成功");
                    _0x27b5cd.tacticsType = 0x1;
                    _0x3c3927(_0x27b5cd);
                  })["catch"](_0x365c67 => {
                    COMMON_REPORT_UTILS.error_log_report("/users/sdk_init_v4", "响应时间上报", "" + (new Date().getTime() - _0x4a5063), "请求失败");
                    _0x27b5cd.tacticsInfo = _0x5725ac["default"].tacticsInfo;
                    _0x27b5cd.routesInfo = _0x5725ac["default"].routesInfo;
                    _0x27b5cd.popupInfo = _0x5725ac["default"].popupInfo;
                    _0x27b5cd.new_ad_pos = _0x16ee9a["default"].getNewDefaultAdPostionConfigByBrand("");
                    _0x27b5cd.bqtAdConfigInfo = _0x16ee9a["default"].getBqtDefaultAdConfigByBrand("");
                    _0x27b5cd.ad_pool = {
                      status: 0x0,
                      scene_list: ""
                    };
                    _0x27b5cd.configInfo = _0x5725ac["default"].configInfo;
                    _0x27b5cd.timeInfo = _0x5725ac["default"].timeInfo;
                    _0x27b5cd.vistisTimes = 0x1;
                    _0x27b5cd.initStatus = 0x2;
                    console.error("TACTICE_SDK->策略路由SDK初始化失败,初始化接口出错!已使用默认策略");
                    _0x27b5cd.tacticsType = 0x3;
                    _0x3c3927(_0x27b5cd);
                  });
                });
              })) : (console.error("TACTICE_SDK->参数android为必传"), void _0x2821de("SDK传入的参数android为必传")) : (console.error("TACTICE_SDK->参数secretKey为必传"), void _0x2821de("SDK传入的参数advConfig为必传")));
            },
            getPopupCodeByPageInfo: function _0x51b361(_0x5caad5) {
              console.error("TACTICE_SDK->SDK初始化未完成!");
              return "";
              if (!_0x5caad5.pageCode) {
                console.error("TACTICE_SDK->参数pageCode为必传!");
                return "";
              }
              if (!_0x5caad5.actionCode) {
                console.error("TACTICE_SDK->参数actionCode为必传!");
                return "";
              }
              if (!_0x5caad5.pageOrigin) {
                console.error("TACTICE_SDK->参数pageOrigin为必传!");
                return "";
              }
              if (("BUTTON_CLICK" == _0x5caad5.actionCode || "POPUP_CLOSE" == _0x5caad5.actionCode) && !_0x5caad5.popupCode) {
                console.error("TACTICE_SDK->事件为" + _0x5caad5.actionCode + "时，popupCode不可以为空");
                return "";
              }
              if (null && null.pageTactics) {
                let _0x40b11a = [];
                _0x40b11a = "SCREEN_TOUCH" === _0x5caad5.actionCode || "SECOND_SCREEN_TOUCH" === _0x5caad5.actionCode ? null.pageTactics.filter(_0x2ac794 => "ALL" == _0x2ac794.page_code && "OUTSIDE_FROM" == _0x2ac794.page_origin) : null.pageTactics.filter(_0xd40ac => _0xd40ac.page_code == _0x5caad5.pageCode && _0xd40ac.page_origin == _0x5caad5.pageOrigin);
                if (0x0 == _0x40b11a.length) {
                  return "ALL" != _0x5caad5.pageOrigin && _0x51b361({
                    pageCode: _0x5caad5.pageCode,
                    actionCode: _0x5caad5.actionCode,
                    popupCode: _0x5caad5.popupCode,
                    pageOrigin: "ALL"
                  });
                }
                let _0x1bd756 = _0x40b11a[0x0].popup_config;
                if (!_0x1bd756.hasOwnProperty("" + _0x5caad5.actionCode)) {
                  return "ALL" != _0x5caad5.pageOrigin && _0x51b361({
                    pageCode: _0x5caad5.pageCode,
                    actionCode: _0x5caad5.actionCode,
                    popupCode: _0x5caad5.popupCode,
                    pageOrigin: "ALL"
                  });
                }
                var _0x48284d = "";
                switch (_0x5caad5.actionCode) {
                  case "BUTTON_CLICK":
                    break;
                  case "PAGE_BACK":
                    _0x48284d = _0x1bd756.PAGE_BACK[0x0] && _0x1bd756.PAGE_BACK[0x0].popup_code ? _0x1bd756.PAGE_BACK[0x0].popup_code : "";
                    break;
                  case "PAGE_ENTRY":
                    _0x48284d = _0x1bd756.PAGE_ENTRY[0x0] && _0x1bd756.PAGE_ENTRY[0x0].popup_code ? _0x1bd756.PAGE_ENTRY[0x0].popup_code : "";
                    break;
                  case "POPUP_CLOSE":
                    let _0x15df70 = _0x1bd756.POPUP_CLOSE.filter(_0x2e20db => _0x2e20db.popup_code == _0x5caad5.popupCode);
                    _0x48284d = _0x15df70[0x0] && _0x15df70[0x0].next_popup_code ? _0x15df70[0x0].next_popup_code : "";
                    break;
                  default:
                    _0x48284d = _0x1bd756["" + _0x5caad5.actionCode] && _0x1bd756["" + _0x5caad5.actionCode][0x0] && _0x1bd756["" + _0x5caad5.actionCode][0x0].popup_code ? _0x1bd756["" + _0x5caad5.actionCode][0x0].popup_code : "";
                }
                LOG("TACTICS", "TACTICE_SDK->策略路由匹配到的弹窗code为" + _0x48284d);
                return _0x48284d || "ALL" != _0x5caad5.pageOrigin ? _0x48284d || _0x51b361({
                  pageCode: _0x5caad5.pageCode,
                  actionCode: _0x5caad5.actionCode,
                  popupCode: _0x5caad5.popupCode,
                  pageOrigin: "ALL"
                }) : _0x48284d;
              }
              console.error("TACTICE_SDK->参数策略路由信息为空,请检查初始化或后台配置!");
              return "";
            },
            getPageBackRouter: function (_0x3b0d35) {
              if (!_0x3b0d35) {
                console.error("TACTICE_SDK->参数curPageRouter为必传!");
                return "";
              }
              if (_0x27b5cd.routesInfo && _0x27b5cd.routesInfo.routers && _0x27b5cd.routesInfo.routers.length > 0x1) {
                var _0x37ac60 = "";
                for (let _0xb1f532 = 0x0; _0xb1f532 < _0x27b5cd.routesInfo.routers.length; _0xb1f532++) {
                  if (_0x27b5cd.routesInfo.routers[_0xb1f532].page_code == _0x3b0d35 && _0xb1f532 < _0x27b5cd.routesInfo.routers.length - 0x1) {
                    _0x37ac60 = _0x27b5cd.routesInfo.routers[_0xb1f532 + 0x1].router;
                  }
                }
                LOG("TACTICS", "TACTICE_SDK->获取返回页面路由结果" + _0x37ac60);
                return _0x37ac60;
              }
              console.error("TACTICE_SDK->暂无路由配置或者无效配置!");
              return "";
            },
            getCommonPopupCodeByPrefix: function (_0x55af4e) {
              console.error("TACTICE_SDK->SDK初始化未完成!");
              return "";
              if (!_0x55af4e.popupPrefix) {
                console.error("TACTICE_SDK->参数codePrefix为必传!");
                return "";
              }
              if (null && null.popups) {
                var _0x2bd15e = "";
                if (-0x1 != null.popups.indexOf(",")) {
                  let _0x201686 = null.popups.split(",").filter(_0x1ba532 => _0x1ba532.split("_")[0x0] == _0x55af4e.popupPrefix);
                  if (_0x201686.length > 0x0) {
                    _0x2bd15e = _0x201686[0x0];
                  }
                } else if (null.popups.split("_")[0x0] == _0x55af4e.popupPrefix) {
                  _0x2bd15e = null.popups;
                }
                LOG("TACTICS", "TACTICE_SDK->前缀为" + _0x55af4e.popupPrefix + "的弹窗完整code为" + _0x2bd15e);
                return _0x2bd15e;
              }
              console.error(" ->公共弹窗获取失败!请检查是否配置" + _0x55af4e.popupPrefix + "开头的公共弹窗？");
              return "";
            },
            getPageCommonPopupCodeByPrefix: function (_0x2cfedb) {
              console.error("TACTICE_SDK->SDK初始化未完成!");
              return "";
              if (!_0x2cfedb.pageCode) {
                console.error("TACTICE_SDK->参数pageCode为必传!");
                return "";
              }
              if (!_0x2cfedb.popupPrefix) {
                console.error("TACTICE_SDK->参数popupPrefix为必传!");
                return "";
              }
              if (null && null["" + _0x2cfedb.pageCode]) {
                let _0x4a5b2b = null["" + _0x2cfedb.pageCode].split(",").filter(_0x4f2fea => _0x4f2fea.split("_")[0x0] == _0x2cfedb.popupPrefix);
                return 0x0 == _0x4a5b2b.length ? "" : (LOG("TACTICS", "TACTICE_SDK->策略路由匹配到的页面弹窗code为" + _0x4a5b2b[0x0] + "_页面code为" + _0x2cfedb.pageCode), _0x4a5b2b[0x0]);
              }
              console.error("TACTICE_SDK->页面弹窗获取失败!请检查页面" + _0x2cfedb.pageCode + "是否配置" + _0x2cfedb.popupPrefix + "开头的页面弹窗？");
              return "";
            },
            setGlobalData: function (_0x59f1a2, _0xf0cf07) {
              if (Object.keys(_0x27b5cd).includes(_0x59f1a2)) {
                _0x27b5cd[_0x59f1a2] = _0xf0cf07;
              } else {
                console.error("tactics_sdk setGlobalData key[" + _0x59f1a2 + "] is undefined ! Please check or add key[" + _0x59f1a2 + "]");
              }
            },
            getGlobalData: function (_0x1d47cc) {
              return Object.keys(_0x27b5cd).includes(_0x1d47cc) ? _0x27b5cd[_0x1d47cc] : (console.error("tactics_sdk getGlobalData key[" + _0x1d47cc + "]'s value is undefined ! Please check !"), "");
            },
            getCustomPopupData: function (_0x5d02c2) {
              return new Promise((_0xe9594e, _0x8364c) => {
                if (_0x27b5cd.customPopupData && _0x27b5cd.customPopupData.hasOwnProperty("" + _0x5d02c2)) {
                  return void _0xe9594e(JSON.parse(JSON.stringify(_0x27b5cd.customPopupData["" + _0x5d02c2])));
                }
                let _0x4ba07a = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/" + (-0x1 !== _0x5d02c2.indexOf("Back") ? "back" : "custom") + "/json", "GET", {
                  secret_key: "",
                  packet: _0x4ba07a,
                  pop_code: _0x5d02c2
                }).then(_0x1fb12e => {
                  if (0xc8 == _0x1fb12e.code) {
                    let _0x16b922 = JSON.parse(_0x1fb12e.data);
                    let _0x14703a = {
                      ["" + _0x5d02c2]: _0x16b922
                    };
                    Object.assign(_0x27b5cd.customPopupData, _0x14703a);
                    _0xe9594e(JSON.parse(JSON.stringify(_0x16b922)));
                  } else {
                    _0xe9594e([_0x16ee9a["default"].CUSTOM_POP_DEFAULT_DATA]);
                  }
                })["catch"](_0x11b5f2 => {
                  _0xe9594e([_0x16ee9a["default"].CUSTOM_POP_DEFAULT_DATA]);
                });
              });
            },
            geBackPopupData: function (_0x27ff43) {
              return new Promise((_0x46b8a0, _0x47108a) => {
                if (_0x27b5cd.backPopupData && _0x27b5cd.backPopupData.hasOwnProperty("" + _0x27ff43)) {
                  return void _0x46b8a0(JSON.parse(JSON.stringify(_0x27b5cd.backPopupData["" + _0x27ff43])));
                }
                let _0x526c20 = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/back/json", "GET", {
                  secret_key: "",
                  packet: _0x526c20,
                  pop_code: _0x27ff43
                }).then(_0x3161ac => {
                  if (0xc8 == _0x3161ac.code) {
                    let _0x5ab6ca = JSON.parse(_0x3161ac.data);
                    let _0x22236a = {
                      ["" + _0x27ff43]: _0x5ab6ca
                    };
                    Object.assign(_0x27b5cd.backPopupData, _0x22236a);
                    _0x46b8a0(JSON.parse(JSON.stringify(_0x5ab6ca)));
                  } else {
                    _0x46b8a0([_0x16ee9a["default"].CUSTOM_BACK_POP_DEFAULT_DATA]);
                  }
                })["catch"](_0x2beb21 => {
                  _0x46b8a0([_0x16ee9a["default"].CUSTOM_BACK_POP_DEFAULT_DATA]);
                });
              });
            },
            gePopupShowTimes: function (_0x41d523) {
              return new Promise(_0x1b68a0 => {
                _0x12fbe7["default"].get({
                  key: "popupShowInfo",
                  success(_0x160571) {
                    if (_0x160571) {
                      let _0x281e07 = JSON.parse(_0x160571);
                      if ("object" == typeof _0x281e07 && _0x281e07.hasOwnProperty("" + _0x41d523)) {
                        return _0x1b68a0(Number(_0x281e07["" + _0x41d523]));
                      }
                    }
                    _0x1b68a0(0x0);
                  },
                  fail(_0x5a9c43, _0x1c09aa) {
                    _0x1b68a0(0x0);
                  }
                });
              });
            },
            sePopupShowTimes: async function (_0x59ec93) {
              let _0x166c6e = {
                data: ""
              };
              let _0x497b98 = {};
              try {
                _0x166c6e = await _0x12fbe7["default"].get({
                  key: "popupShowInfo"
                });
              } catch (_0x26b77e) {}
              if (_0x166c6e.data) {
                _0x497b98 = JSON.parse(_0x166c6e.data);
                if (_0x497b98.hasOwnProperty("" + _0x59ec93)) {
                  LOG("TACTICS", "sePopupShowTimes======>2", _0x497b98);
                  _0x497b98["" + _0x59ec93]++;
                } else {
                  let _0x261a4c = {
                    ["" + _0x59ec93]: 0x1
                  };
                  Object.assign(_0x497b98, _0x261a4c);
                }
              } else {
                let _0x31fd3b = {
                  ["" + _0x59ec93]: 0x1
                };
                Object.assign(_0x497b98, _0x31fd3b);
              }
              LOG("TACTICS", "sePopupShowTimes======>3", _0x497b98);
              _0x12fbe7["default"].set({
                key: "popupShowInfo",
                value: _0x497b98
              });
            },
            getNewAdPostionInfo: function () {
              let _0x2d7306 = null;
              _0x2d7306 = null;
              return _0x2d7306;
            },
            getBqtAdConfigInfo: function () {
              let _0x4a915a = null;
              _0x4a915a = null;
              return _0x4a915a;
            },
            getAdConfigInfo: function () {
              return new Promise((_0x57d407, _0x1fdad7) => {
                if (_0x27b5cd.qdConfig.ad_config) {
                  return _0x57d407(_0x27b5cd.qdConfig.ad_config);
                }
                _0x57d407(_0x16ee9a["default"].getDefaultAdConfigByBrand(""));
              });
            },
            getCommonNativePopupData: function (_0x32f608, _0xe7835e) {
              return new Promise((_0x573f59, _0x594668) => {
                if (_0x27b5cd.commonNativePopupData && _0x27b5cd.commonNativePopupData.hasOwnProperty("" + _0x32f608)) {
                  return void _0x573f59(JSON.parse(JSON.stringify(_0x27b5cd.commonNativePopupData["" + _0x32f608])));
                }
                let _0xbd98b8 = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/common/json", "GET", {
                  secret_key: "",
                  packet: _0xbd98b8,
                  group_code: _0x32f608,
                  ad_id: _0xe7835e
                }).then(_0x49e21d => {
                  if (0xc8 == _0x49e21d.code) {
                    let _0x5c37d4 = JSON.parse(_0x49e21d.data);
                    _0x5c37d4.forEach(_0x336df2 => _0x336df2.commonStyle.isAgdAd = _0x49e21d.is_agd_ad);
                    let _0x4a76ce = {
                      ["" + _0x32f608]: _0x5c37d4
                    };
                    Object.assign(_0x27b5cd.commonNativePopupData, _0x4a76ce);
                    _0x573f59(JSON.parse(JSON.stringify(_0x5c37d4)));
                  } else {
                    _0x573f59(_0x16ee9a["default"].COMMON_NATIVE_POP_DEFAULT_DATA);
                  }
                })["catch"](_0x43b943 => {
                  _0x573f59(_0x16ee9a["default"].COMMON_NATIVE_POP_DEFAULT_DATA);
                });
              });
            },
            getEncouragePopupData: function (_0x5851c7) {
              return new Promise((_0x458ba9, _0x363ad2) => {
                if (_0x27b5cd.videoPopupData && _0x27b5cd.videoPopupData.hasOwnProperty("" + _0x5851c7)) {
                  return void _0x458ba9(JSON.parse(JSON.stringify(_0x27b5cd.videoPopupData["" + _0x5851c7])));
                }
                let _0x433035 = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/encourage/json", "GET", {
                  secret_key: "",
                  packet: _0x433035,
                  group_code: _0x5851c7
                }).then(_0x348075 => {
                  if (0xc8 == _0x348075.code) {
                    let _0x3f2539 = JSON.parse(_0x348075.data);
                    let _0x9cf93a = {
                      ["" + _0x5851c7]: _0x3f2539
                    };
                    Object.assign(_0x27b5cd.videoPopupData, _0x9cf93a);
                    _0x458ba9(JSON.parse(JSON.stringify(_0x3f2539)));
                  } else {
                    _0x458ba9(_0x16ee9a["default"].COMMON_VIDEO_POP_DEFAULT_DATA);
                  }
                })["catch"](_0x59701e => {
                  _0x458ba9(_0x16ee9a["default"].COMMON_VIDEO_POP_DEFAULT_DATA);
                });
              });
            },
            getBaiduPopupData: function (_0x54fdef) {
              return new Promise((_0x264047, _0x4a2bfd) => {
                if (_0x27b5cd.baiduPopupData && _0x27b5cd.baiduPopupData.hasOwnProperty("" + _0x54fdef)) {
                  return void _0x264047(JSON.parse(JSON.stringify(_0x27b5cd.baiduPopupData["" + _0x54fdef])));
                }
                let _0x2c8666 = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/" + _0x54fdef.split("_")[0x0].toLowerCase() + "/json", "GET", {
                  secret_key: "",
                  packet: _0x2c8666,
                  group_code: _0x54fdef
                }).then(_0x5bc689 => {
                  if (0xc8 == _0x5bc689.code) {
                    let _0x35c3bb = JSON.parse(_0x5bc689.data);
                    let _0x40cdec = {
                      ["" + _0x54fdef]: _0x35c3bb
                    };
                    Object.assign(_0x27b5cd.baiduPopupData, _0x40cdec);
                    _0x264047(JSON.parse(JSON.stringify(_0x35c3bb)));
                  } else {
                    _0x264047(_0x16ee9a["default"].COMMON_BAIDU_POP_DEFAULT_DATA);
                  }
                })["catch"](_0x54a7e4 => {
                  _0x264047(_0x16ee9a["default"].COMMON_BAIDU_POP_DEFAULT_DATA);
                });
              });
            },
            getAppPopupData: function (_0x1f2c2a) {
              return new Promise((_0x41ee81, _0x649ffe) => {
                if (_0x27b5cd.appPopupData && _0x27b5cd.appPopupData.hasOwnProperty("" + _0x1f2c2a)) {
                  return void _0x41ee81(JSON.parse(JSON.stringify(_0x27b5cd.appPopupData["" + _0x1f2c2a])));
                }
                let _0x151140 = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/ad/app", "GET", {
                  secret_key: "",
                  packet: _0x151140,
                  group_code: _0x1f2c2a
                }).then(_0x7e239c => {
                  if (0xc8 == _0x7e239c.code) {
                    let _0x379c43 = JSON.parse(_0x7e239c.data);
                    let _0x5e6387 = {
                      ["" + _0x1f2c2a]: _0x379c43
                    };
                    LOG("==getAppPopupData555", _0x379c43);
                    Object.assign(_0x27b5cd.appPopupData, _0x5e6387);
                    _0x41ee81(JSON.parse(JSON.stringify(_0x379c43)));
                  } else {
                    _0x41ee81(-0x1 !== _0x1f2c2a.indexOf("Middle") ? _0x16ee9a["default"].COMMON_TEMPLETE_POP_DEFAULT_DATA : _0x16ee9a["default"].COMMON_NATIVE_POP_DEFAULT_DATA);
                  }
                })["catch"](_0xf80982 => {
                  _0x41ee81(-0x1 !== _0x1f2c2a.indexOf("Middle") ? _0x16ee9a["default"].COMMON_TEMPLETE_POP_DEFAULT_DATA : _0x16ee9a["default"].COMMON_NATIVE_POP_DEFAULT_DATA);
                });
              });
            },
            getActionPopupCode: function (_0x104454, _0x41b4b4, _0xb45fc4, _0x28a7dd) {
              LOG("策略sdk mxt:getActionPopupCode ", _0x104454, _0x41b4b4, _0xb45fc4, _0x28a7dd);
              return new Promise((_0x4d2643, _0x54cdf8) => {
                if (null && null.pageTactics) {
                  let _0x32bcb7 = null.pageTactics.filter(_0x389541 => {
                    if (_0x389541.page_code == _0xb45fc4 && _0x389541.page_origin == _0x28a7dd) {
                      return _0x389541;
                    }
                  });
                  let _0x4390cf = null.pageTactics.filter(_0x3ec7bd => {
                    if (_0x3ec7bd.page_code == _0xb45fc4 && "ALL" == _0x3ec7bd.page_origin) {
                      return _0x3ec7bd;
                    }
                  });
                  if (!("SCREEN_TOUCH" !== _0x104454 && "SECOND_SCREEN_TOUCH" !== _0x104454)) {
                    _0x4390cf = null.pageTactics.filter(_0x1b165a => "ALL" == _0x1b165a.page_code && "OUTSIDE_FROM" == _0x1b165a.page_origin);
                  }
                  LOG("策略sdk mxt :actionInfo", _0x104454, _0x32bcb7, _0x4390cf);
                  if (_0x32bcb7.length > 0x0 || _0x4390cf.length > 0x0) {
                    if (_0x32bcb7.length && _0x32bcb7[0x0].popup_config[_0x104454] && _0x32bcb7[0x0].popup_config[_0x104454].length > 0x0 && _0x32bcb7[0x0].popup_config[_0x104454][0x0].action && _0x32bcb7[0x0].popup_config[_0x104454][0x0].action[_0x41b4b4]) {
                      _0x4d2643(_0x32bcb7[0x0].popup_config[_0x104454][0x0].action[_0x41b4b4]);
                    } else if (_0x4390cf.length && _0x4390cf[0x0].popup_config[_0x104454] && _0x4390cf[0x0].popup_config[_0x104454].length > 0x0 && _0x4390cf[0x0].popup_config[_0x104454][0x0].action && _0x4390cf[0x0].popup_config[_0x104454][0x0].action[_0x41b4b4]) {
                      _0x4d2643(_0x4390cf[0x0].popup_config[_0x104454][0x0].action[_0x41b4b4]);
                    } else {
                      _0x54cdf8("withoutCode");
                    }
                  } else {
                    _0x54cdf8("withoutCode");
                  }
                } else {
                  _0x54cdf8("withoutCode");
                }
              });
            },
            getOriginalPopCode: function (_0x26b43a, _0x55999c, _0x3ea225, _0x49f326) {
              LOG("策略sdk mxt:getActionPopupCode ", _0x26b43a, _0x55999c, _0x3ea225, _0x49f326);
              return new Promise((_0x4ce61f, _0x2273d6) => {
                if (null && null.pageTactics) {
                  let _0x2c7cc9 = null.pageTactics.filter(_0x2b9f40 => {
                    if (_0x2b9f40.page_code == _0x26b43a && _0x2b9f40.page_origin == _0x55999c) {
                      return _0x2b9f40;
                    }
                  });
                  LOG("策略sdk mxt :actionInfo", _0x2c7cc9);
                  if (_0x2c7cc9.length > 0x0 && _0x2c7cc9[0x0].popup_config[_0x3ea225] && _0x2c7cc9[0x0].popup_config[_0x3ea225][0x0] && _0x2c7cc9[0x0].popup_config[_0x3ea225][0x0].action) {
                    LOG("== 策略sdk mxt :click_interval", _0x2c7cc9[0x0].popup_config[_0x3ea225][0x0].action.click_interval);
                    LOG("== 策略sdk mxt :request_fail", _0x2c7cc9[0x0].popup_config[_0x3ea225][0x0].action.request_fail);
                    if (!(_0x2c7cc9[0x0].popup_config[_0x3ea225][0x0].action.click_interval != _0x49f326 && _0x2c7cc9[0x0].popup_config[_0x3ea225][0x0].action.request_fail != _0x49f326)) {
                      LOG("== 策略sdk mxt :popup_code", _0x2c7cc9[0x0].popup_config[_0x3ea225][0x0].popup_code);
                      _0x4ce61f("POPUP_CLOSE" == _0x3ea225 ? _0x2c7cc9[0x0].popup_config[_0x3ea225][0x0].next_popup_code : _0x2c7cc9[0x0].popup_config[_0x3ea225][0x0].popup_code);
                    }
                  }
                }
                _0x4ce61f(_0x49f326);
              });
            },
            getQdConfig: function (_0x50aec0) {
              return _0x50aec0 ? _0x27b5cd.qdConfig[_0x50aec0] || {} : _0x27b5cd.qdConfig;
            },
            filterAppRouse: _0x34a63b,
            getMiddlePopupData: function (_0xc7728e) {
              return new Promise((_0x2cc4e0, _0x5570da) => {
                if (_0x27b5cd.middlePopupData && _0x27b5cd.middlePopupData.hasOwnProperty("" + _0xc7728e)) {
                  return void _0x2cc4e0(JSON.parse(JSON.stringify(_0x27b5cd.middlePopupData["" + _0xc7728e])));
                }
                let _0x1d9f7b = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/middle/native", "GET", {
                  secret_key: "",
                  packet: _0x1d9f7b,
                  group_code: _0xc7728e
                }).then(_0x242570 => {
                  if (0xc8 == _0x242570.code) {
                    let _0x108821 = JSON.parse(_0x242570.data);
                    let _0x5648c5 = {
                      ["" + _0xc7728e]: _0x108821
                    };
                    Object.assign(_0x27b5cd.middlePopupData, _0x5648c5);
                    _0x2cc4e0(JSON.parse(JSON.stringify(_0x108821)));
                  } else {
                    _0x2cc4e0(_0x16ee9a["default"].COMMON_MIDDLE_POP_DEFAULT_DATA);
                  }
                })["catch"](_0x105ae7 => {
                  _0x2cc4e0(_0x16ee9a["default"].COMMON_MIDDLE_POP_DEFAULT_DATA);
                });
              });
            },
            getMiddleVideoPopupData: function (_0x553136) {
              return new Promise((_0x2a8308, _0x417dd6) => {
                if (_0x27b5cd.middleVideoPopupData && _0x27b5cd.middleVideoPopupData.hasOwnProperty("" + _0x553136)) {
                  return void _0x2a8308(JSON.parse(JSON.stringify(_0x27b5cd.middleVideoPopupData["" + _0x553136])));
                }
                let _0x1e18d2 = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/middle/video", "GET", {
                  secret_key: "",
                  packet: _0x1e18d2,
                  group_code: _0x553136
                }).then(_0x290512 => {
                  if (0xc8 == _0x290512.code) {
                    let _0x55e287 = JSON.parse(_0x290512.data);
                    let _0xc088d9 = {
                      ["" + _0x553136]: _0x55e287
                    };
                    Object.assign(_0x27b5cd.middleVideoPopupData, _0xc088d9);
                    _0x2a8308(JSON.parse(JSON.stringify(_0x55e287)));
                  } else {
                    _0x2a8308(_0x16ee9a["default"].COMMON_MIDDLE_POP_DEFAULT_DATA);
                  }
                })["catch"](_0x5b45f9 => {
                  _0x2a8308(_0x16ee9a["default"].COMMON_MIDDLE_POP_DEFAULT_DATA);
                });
              });
            },
            getMiddleBaiduPopupData: function (_0x41b81f) {
              return new Promise((_0x19ab73, _0x4e88f8) => {
                if (_0x27b5cd.middleBaiduPopupData && _0x27b5cd.middleBaiduPopupData.hasOwnProperty("" + _0x41b81f)) {
                  return void _0x19ab73(JSON.parse(JSON.stringify(_0x27b5cd.middleBaiduPopupData["" + _0x41b81f])));
                }
                let _0xf601c8 = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/middle/baidu", "GET", {
                  secret_key: "",
                  packet: _0xf601c8,
                  group_code: _0x41b81f
                }).then(_0x12faa0 => {
                  if (0xc8 == _0x12faa0.code) {
                    let _0x510fb8 = JSON.parse(_0x12faa0.data);
                    let _0x5ef23d = {
                      ["" + _0x41b81f]: _0x510fb8
                    };
                    Object.assign(_0x27b5cd.middleBaiduPopupData, _0x5ef23d);
                    _0x19ab73(JSON.parse(JSON.stringify(_0x510fb8)));
                  } else {
                    _0x19ab73(_0x16ee9a["default"].COMMON_MIDDLE_POP_DEFAULT_DATA);
                  }
                })["catch"](_0x479580 => {
                  _0x19ab73(_0x16ee9a["default"].COMMON_MIDDLE_POP_DEFAULT_DATA);
                });
              });
            },
            getMiddleTempletePopupData: function (_0x44c2ee) {
              return new Promise((_0x4e5561, _0x2a2db5) => {
                if (_0x27b5cd.middleTempletePopupData && _0x27b5cd.middleTempletePopupData.hasOwnProperty("" + _0x44c2ee)) {
                  return void _0x4e5561(JSON.parse(JSON.stringify(_0x27b5cd.middleTempletePopupData["" + _0x44c2ee])));
                }
                let _0x1eacc1 = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/middle/templete", "GET", {
                  secret_key: "",
                  packet: _0x1eacc1,
                  group_code: _0x44c2ee
                }).then(_0x240e48 => {
                  if (0xc8 == _0x240e48.code) {
                    let _0x1eb9db = JSON.parse(_0x240e48.data);
                    let _0x23c35e = {
                      ["" + _0x44c2ee]: _0x1eb9db
                    };
                    Object.assign(_0x27b5cd.middleTempletePopupData, _0x23c35e);
                    _0x4e5561(JSON.parse(JSON.stringify(_0x1eb9db)));
                  } else {
                    _0x4e5561(_0x16ee9a["default"].COMMON_TEMPLETE_POP_DEFAULT_DATA);
                  }
                })["catch"](_0x222dc4 => {
                  _0x4e5561(_0x16ee9a["default"].COMMON_TEMPLETE_POP_DEFAULT_DATA);
                });
              });
            },
            getBaiduScreenInsertionPopupData: function (_0x23f1cb) {
              return new Promise((_0x157aa1, _0x3bac16) => {
                if (_0x27b5cd.baiduScreenInsertionPopupData && _0x27b5cd.baiduScreenInsertionPopupData.hasOwnProperty("" + _0x23f1cb)) {
                  return void _0x157aa1(JSON.parse(JSON.stringify(_0x27b5cd.baiduScreenInsertionPopupData["" + _0x23f1cb])));
                }
                let _0x3e128e = _0x5f3ee5["default"].getInfo().source.packageName;
                _0x1b1f35("/ad/baidu-insertion", "GET", {
                  secret_key: "",
                  packet: _0x3e128e,
                  group_code: _0x23f1cb
                }).then(_0x466855 => {
                  if (0xc8 == _0x466855.code) {
                    let _0x432373 = JSON.parse(_0x466855.data);
                    let _0x115de3 = {
                      ["" + _0x23f1cb]: _0x432373
                    };
                    Object.assign(_0x27b5cd.baiduScreenInsertionPopupData, _0x115de3);
                    _0x157aa1(JSON.parse(JSON.stringify(_0x432373)));
                  } else {
                    _0x157aa1(_0x16ee9a["default"].COMMON_BAIDU_SCREEN_POP_DEFAULT_DATA);
                  }
                })["catch"](_0x223478 => {
                  _0x157aa1(_0x16ee9a["default"].COMMON_BAIDU_SCREEN_POP_DEFAULT_DATA);
                });
              });
            },
            showAppAdv: function (_0x498d49) {
              let {
                scenario: _0x4e85ba,
                sceneCode: _0xc95001,
                adTimes: _0x3f30c0,
                popName: _0x31fc5f,
                popGroupName: _0xb0a72,
                requestNum: _0x1a329f
              } = _0x498d49;
              return new Promise((_0x14eed1, _0x792622) => {
                LOG("TACTICS", "广告ADSDK========>获取app唤醒广告", _0x498d49);
                0x0++;
                var _0x37e628 = {
                  type: "app_rouse",
                  clickBtnTxt: "立即查看",
                  source: "",
                  title: "",
                  materialUrl: "",
                  id: "000",
                  icon: "",
                  ad_network: 0x3,
                  ad_type: "APP唤醒",
                  is_ad_click: "no",
                  adType: "4",
                  adTimes: _0x3f30c0,
                  sceneCode: _0xc95001,
                  scenario: _0x4e85ba,
                  popName: _0x31fc5f,
                  popGroupName: _0xb0a72,
                  requestNum: _0x1a329f,
                  adRequestNum: 0x0,
                  ad_style: "4",
                  result: ""
                };
                _0x110f92("request", Object.assign({}, _0x37e628, {
                  result: "发起请求"
                }));
                _0x34a63b().then(_0x54a6cd => {
                  _0x1b1f35("/ad/advertising", "GET", {
                    secret_key: "",
                    brand: "",
                    android_id: "",
                    packet: _0x54a6cd
                  }).then(_0x2d0935 => {
                    _0x37e628.advDetail = {
                      adId: "" + _0x2d0935.data.id,
                      title: _0x2d0935.data.pop_title,
                      desc: _0x2d0935.data.media_name,
                      icon: _0x2d0935.data.adver_url,
                      imgUrlList: [_0x2d0935.data.adver_url],
                      logoUrl: _0x2d0935.data.adver_url,
                      clickBtnTxt: _0x2d0935.data.btn_text,
                      creativeType: "0",
                      interactionType: " 4",
                      adver_name: _0x2d0935.data.adver_name,
                      url: _0x2d0935.data.url,
                      mediaId: "" + _0x2d0935.data.media_id
                    };
                    _0x37e628.source = _0x2d0935.data.media_name;
                    _0x37e628.title = _0x2d0935.data.pop_title;
                    _0x37e628.materialUrl = _0x2d0935.data.adver_url;
                    _0x37e628.icon = _0x2d0935.data.adver_url;
                    _0x37e628.id = "" + _0x2d0935.data.id;
                    _0x37e628.mediaId = "" + _0x2d0935.data.media_id;
                    _0xce1f4a["default"].fetch({
                      url: "",
                      method: "get"
                    });
                    _0x110f92("request", Object.assign({}, _0x37e628, {
                      result: "有广告"
                    }));
                    _0x14eed1(JSON.parse(JSON.stringify(_0x37e628)));
                  })["catch"](_0x49939e => {
                    _0x110f92("request", Object.assign({}, _0x37e628, {
                      result: "无广告"
                    }));
                    _0x792622(false);
                  });
                });
              });
            },
            uploadAdInfo: _0x110f92,
            clickAppAdv: function (_0x1401b8, _0x5431a2) {
              LOG("TASTICS", "点击了唤醒广告，上报给后端");
              return new Promise((_0x2e9645, _0x128e16) => {
                _0x1b1f35("/ad/click-adver", "GET", {
                  id: _0x1401b8,
                  media_id: _0x5431a2,
                  secret_key: "",
                  android_id: ""
                }).then(_0x3230f2 => {
                  _0x2e9645(true);
                })["catch"](_0x55efef => {
                  _0x128e16(false);
                });
              });
            }
          };
          (_0x335a92.g.__proto__ || _0x335a92.g).TACTICS_SDK = _0x5ab815;
          _0x36c0ca["default"] = _0x5ab815;
        },
        0x245a: (_0x4d095f, _0x31efb2) => {
          "use strict";

          Object.defineProperty(_0x31efb2, "__esModule", {
            value: true
          });
          _0x31efb2["default"] = undefined;
          _0x31efb2["default"] = {
            app_key: "2f559ac6b00d51ecbd5eebdbd28592c0"
          };
        },
        0xfac9: (_0x232d00, _0x466f5c, _0x59fd62) => {
          "use strict";

          Object.defineProperty(_0x466f5c, "__esModule", {
            value: true
          });
          _0x466f5c["default"] = undefined;
          var _0x13a52a = _0x59fd62(0x10bdc) && _0x59fd62(0x10bdc).__esModule ? _0x59fd62(0x10bdc) : {
            default: _0x59fd62(0x10bdc)
          };
          var _0x19d7c4 = _0x59fd62(0x1547a) && _0x59fd62(0x1547a).__esModule ? _0x59fd62(0x1547a) : {
            default: _0x59fd62(0x1547a)
          };
          var _0x3b166c = {
            isTacticsSdkInit: false,
            popupConfigData: {},
            currentBoostConfig: {}
          };
          function _0x18629b(_0x171f5e) {
            let _0x3e3d5c = Object.assign({}, _0x171f5e);
            let _0xca21c3 = {};
            let _0x4949c9 = _0x13a52a["default"];
            _0xca21c3.config = _0x3e3d5c.config ? _0x3e3d5c.config : _0x4949c9.config;
            _0xca21c3.appCode = _0x3e3d5c.config ? _0x3e3d5c.appCode : _0x4949c9.appCode;
            _0xca21c3.configName = _0x3e3d5c.config ? _0x3e3d5c.configName : _0x4949c9.configName;
            if (_0x3e3d5c.config) {
              let _0x1c41ed = Object.keys(_0x4949c9.config).filter(_0x43f3f3 => !_0x3e3d5c.config[_0x43f3f3]);
              if (_0x1c41ed.length > 0x0) {
                _0x1c41ed.forEach(_0x463586 => {
                  _0xca21c3.config[_0x463586] = _0x4949c9.config[_0x463586];
                });
              }
            }
            LOG("校验策略返回的应用配置数据是否完整==>", _0xca21c3);
            return _0xca21c3;
          }
          function _0x1898a3(_0x32671c) {
            LOG("tacticsSdkInit======>begin");
            return new Promise((_0x89dbd4, _0x457d91) => {
              LOG("tacticsSdkInit======>in");
              TACTICS_SDK.initSdk({
                secretKey: _0x19d7c4["default"].pro,
                android: _0x32671c.android,
                deviceInfo: _0x32671c.deviceInfo,
                channelId: _0x32671c.channelId,
                linkId: _0x32671c.linkId,
                hapKey: _0x32671c.hapKey ? _0x32671c.hapKey : _0x32671c.uniqueId,
                intendedUser: 0x0,
                deepLinkAccess: Number(_0x32671c.intent) > 0x0 ? Number(_0x32671c.intent) - 0x1 : 0x0,
                materialType: _0x32671c.materialType,
                ideasId: _0x32671c.utm_content,
                planId: _0x32671c.utm_ad_id,
                mediaId: _0x32671c.utm_source,
                addDeskTopDays: _0x32671c.addDeskTopDays || 0x0,
                sourceId: _0x32671c.sourceId,
                oaid: _0x32671c.oaid
              }).then(_0x4d352b => {
                LOG("tacticsSdkInit======>in", _0x4d352b);
                TACTICS_SDK.setGlobalData("configInfo", _0x18629b(_0x4d352b.configInfo));
                TACTICS_SDK.setGlobalData("new_ad_pos", _0x4d352b.new_ad_pos);
                _0x32671c.auditOnline = _0x4d352b.reviewStatus;
                _0x32671c.tacticsName = _0x4d352b.tacticsInfo.tacticsName ? _0x4d352b.tacticsInfo.tacticsName : "策略名称不存在";
                _0x32671c.userAgent = _0x4d352b.userAgent;
                COMMON_REPORT_UTILS.set_attr("ext_field_10", _0x32671c.tacticsName);
                COMMON_REPORT_UTILS.set_attr("ext_field_4", _0x4d352b.configInfo && _0x4d352b.configInfo.configName ? _0x4d352b.configInfo.configName : "");
                let _0x10e61b = TACTICS_SDK.getGlobalData("configInfo").config;
                AD_UTILS.change_ad_utils_data({
                  TIMES: Number(_0x10e61b.ads_show_interval_min.val)
                });
                AD_SDK.updataAdGlobalData({
                  tacticsName: _0x32671c.tacticsName
                });
                _0x3b166c.isTacticsSdkInit = true;
                if (_0x4d352b.tacticsType) {
                  let _0x476473 = "";
                  let _0xb18f1c = _0x32671c.tacticsName;
                  let _0x1b4724 = _0x4d352b.routesInfo && _0x4d352b.routesInfo.routerName ? _0x4d352b.routesInfo.routerName : "路由配置名称不存在";
                  let _0x304729 = _0x4d352b.configInfo && _0x4d352b.configInfo.configName ? _0x4d352b.configInfo.configName : "应用配置名称不存在";
                  let _0x45c0a2 = _0x4d352b.new_ad_pos && _0x4d352b.new_ad_pos.ad_name ? _0x4d352b.new_ad_pos.ad_name : "广告配置名称不存在";
                  switch (Number(_0x4d352b.tacticsType)) {
                    case 0x1:
                      _0x476473 = "成功";
                      break;
                    case 0x2:
                    case 0x3:
                      _0x476473 = "失败";
                  }
                  COMMON_REPORT_UTILS.strategy_obtain_report(_0x476473, _0xb18f1c, _0x1b4724, _0x304729, _0x45c0a2);
                }
                _0x89dbd4(true);
              })["catch"](_0x37686d => {
                _0x89dbd4(false);
              });
            });
          }
          function _0x3afc9e(_0x20e17b, _0x7330b) {
            LOG("CUSTOM", "==>", 0x309, ...arguments);
            let _0x59a89f = {};
            switch (_0x20e17b) {
              case "CUSTOM_BACK":
                _0x59a89f = function (_0x42bf09) {
                  let _0x5db4e9 = {};
                  _0x5db4e9 = {
                    popType: "customBack",
                    popGroupName: _0x42bf09.popGroupName,
                    popName: _0x42bf09.popName,
                    popKey: _0x42bf09.popKey,
                    btnBackIsDisplay: false,
                    closeStyle: {
                      isShow: true,
                      width: _0x42bf09.closeStyle.closeWidth,
                      height: _0x42bf09.closeStyle.closeHeight,
                      distance: 0x32,
                      position: _0x42bf09.closeStyle.closePosition,
                      delay: _0x42bf09.closeStyle.closeDelay,
                      opacity: _0x42bf09.closeStyle.closeOpacity,
                      top: _0x42bf09.closeStyle.closeTop,
                      image: _0x42bf09.closeIcon
                    },
                    crowdStyle: {
                      isShow: 0x1 == _0x42bf09.crowdStyle.crowdSwitch,
                      width: 0x2ee,
                      height: _0x42bf09.crowdStyle.crowdHeight,
                      color: _0x42bf09.crowdStyle.crowdTextColor,
                      text: _0x42bf09.crowdStyle.crowdText,
                      distance: _0x42bf09.crowdStyle.crowdDistance,
                      position: _0x42bf09.crowdStyle.crowdTextPosition,
                      delay: _0x42bf09.crowdStyle.crowdDelay,
                      image: "",
                      font: _0x42bf09.crowdStyle.crowdFont,
                      between: 0x1e
                    },
                    popStyle: {
                      height: _0x42bf09.popHeight,
                      width: 0x2ee,
                      image: _0x42bf09.boxBg
                    },
                    btnStyle: {
                      width: _0x42bf09.btnStyle.btnWidth,
                      height: _0x42bf09.btnStyle.btnHeight,
                      radio: _0x42bf09.btnStyle.btnRadius,
                      image: _0x42bf09.btnIcon,
                      icon: "",
                      iconSwitch: 0x0,
                      hotTop: _0x42bf09.btnStyle.btnHotTop,
                      hotBottom: _0x42bf09.btnStyle.btnHotBottom,
                      hotAbout: _0x42bf09.btnStyle.btnHotAbout,
                      bgColor: "",
                      color: _0x42bf09.btnStyle.btnTextColor,
                      font: _0x42bf09.btnStyle.btnFont,
                      text: _0x42bf09.btnStyle.btnText,
                      breath: _0x42bf09.btnStyle.btnBreatheSwitch,
                      jumpKey: _0x42bf09.btnStyle.btnJumpKey,
                      jumpValue: _0x42bf09.btnStyle.btnJumpValue,
                      top: _0x42bf09.btnStyle.btnTop,
                      left: _0x42bf09.btnStyle.btnLeft
                    },
                    negStyle: {
                      isShow: true,
                      width: _0x42bf09.negStyle.negWidth,
                      height: _0x42bf09.negStyle.negHeight,
                      font: _0x42bf09.negStyle.negFont,
                      color: _0x42bf09.negStyle.negTextColor,
                      left: _0x42bf09.negStyle.negLeft,
                      top: _0x42bf09.negStyle.negTop,
                      radio: _0x42bf09.negStyle.negRadius,
                      jumpKey: _0x42bf09.negStyle.negJumpKey,
                      text: _0x42bf09.negStyle.negText,
                      delay: _0x42bf09.negStyle.negDelay,
                      icon: _0x42bf09.negIcon
                    },
                    materialStyle: {
                      width: _0x42bf09.materialWidth,
                      height: _0x42bf09.materialHeight,
                      top: _0x42bf09.middleTop
                    },
                    maskStyle: {
                      opacity: _0x42bf09.maskOpacity,
                      image: _0x42bf09.popBg
                    },
                    commonStyle: {
                      scale: _0x42bf09.popScale,
                      backLockTime: _0x42bf09.backLockTime
                    },
                    menubarStyle: {
                      isShow: false,
                      showType: 0x2,
                      font: 0x28,
                      text: "这里是滚动的menubar",
                      image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png",
                      width: 0x2ee,
                      height: 0xdc,
                      radio: 0x0
                    }
                  };
                  return _0x5db4e9;
                }(_0x7330b);
                LOG("CUSTOM", "==>", 0x3e7, _0x59a89f);
                break;
              case "CUSTOM":
                _0x59a89f = function (_0x374bfb) {
                  let _0x256c17 = {};
                  _0x256c17 = {
                    popType: "custom",
                    popGroupName: _0x374bfb.popGroupName,
                    popName: _0x374bfb.popName,
                    popKey: _0x374bfb.popKey,
                    btnBackIsDisplay: !!_0x374bfb.btnBackIsDisplay,
                    closeStyle: {
                      isShow: true,
                      width: 0x3c,
                      height: 0x3c,
                      distance: 0x32,
                      position: 0x1,
                      delay: _0x374bfb.closeDelay,
                      opacity: 0x1,
                      top: 0x0,
                      image: _0x374bfb.closeIcon
                    },
                    crowdStyle: {
                      isShow: false,
                      width: 0x2ee,
                      height: 0x0,
                      color: "#ffffff",
                      text: "",
                      distance: 0x0,
                      position: 0x1,
                      delay: 0x0,
                      image: "",
                      font: 0x0,
                      between: 0x0
                    },
                    popStyle: {
                      height: _0x374bfb.popHeight,
                      width: 0x2ee,
                      image: _0x374bfb.boxBg
                    },
                    btnStyle: {
                      width: _0x374bfb.btnStyle.btnWidth,
                      height: _0x374bfb.btnStyle.btnHeight,
                      radio: _0x374bfb.btnStyle.btnRadius,
                      image: _0x374bfb.btnStyle.btnBgImage,
                      icon: _0x374bfb.btnStyle.btnIcon && "0" != _0x374bfb.btnStyle.btnIcon ? _0x374bfb.btnStyle.btnIcon : "",
                      iconSwitch: _0x374bfb.btnStyle.btnIcon && "0" != _0x374bfb.btnStyle.btnIcon ? 0x1 : 0x0,
                      hotTop: 0x0,
                      hotBottom: 0x0,
                      hotAbout: 0x0,
                      bgColor: _0x374bfb.btnStyle.btnBgColor,
                      color: _0x374bfb.btnStyle.btnTextColor,
                      font: _0x374bfb.btnStyle.btnFont,
                      text: _0x374bfb.btnStyle.btnText,
                      breath: _0x374bfb.btnStyle.btnDynamic,
                      jumpKey: "ClosePop" == _0x374bfb.btnJumpKey ? 0x4 : 0x1,
                      jumpValue: "ClosePop" !== _0x374bfb.btnJumpKey ? _0x374bfb.btnJumpKey.replace("toPage$$", "") : "",
                      top: _0x374bfb.btnStyle.btnTop,
                      left: (0x2ee - _0x374bfb.btnStyle.btnWidth) / 0x2
                    },
                    negStyle: {
                      isShow: _0x374bfb.btnStyle.btnCancelText.length > 0x0,
                      width: _0x374bfb.btnStyle.btnCancelText.length * (_0x374bfb.btnStyle.btnCancelFont + 0x2),
                      height: _0x374bfb.btnStyle.btnCancelFont + 0x2,
                      font: _0x374bfb.btnStyle.btnCancelFont,
                      color: _0x374bfb.btnStyle.btnCancelColor,
                      left: (0x2ee - _0x374bfb.btnStyle.btnCancelText.length * (_0x374bfb.btnStyle.btnCancelFont + 0x2)) / 0x2,
                      top: _0x374bfb.btnStyle.btnTop + _0x374bfb.btnStyle.btnHeight + _0x374bfb.btnStyle.btnCancelMarginTop,
                      radio: 0x0,
                      jumpKey: 0x4,
                      text: _0x374bfb.btnStyle.btnCancelText,
                      delay: 0x0,
                      icon: ""
                    },
                    materialStyle: {
                      width: _0x374bfb.materialWidth,
                      height: _0x374bfb.materialHeight,
                      top: _0x374bfb.middleTop
                    },
                    maskStyle: {
                      opacity: _0x374bfb.maskOpacity,
                      image: _0x374bfb.popBg
                    },
                    commonStyle: {
                      scale: _0x374bfb.popScale,
                      backLockTime: _0x374bfb.backLockTime
                    },
                    menubarStyle: {
                      isShow: false,
                      showType: 0x1,
                      font: 0x28,
                      text: "这里是滚动的menubar",
                      image: "https://ims.readnos.com/image%2F2022-06-28%2F1656399103317_button.png",
                      width: 0x2ee,
                      height: 0x190,
                      radio: 0x0
                    }
                  };
                  return _0x256c17;
                }(_0x7330b);
                LOG("CUSTOM", "==>", 0x18a92, _0x59a89f);
            }
            return _0x59a89f;
          }
          const _0x59260c = {
            validataTacticSdkConfigInfo: _0x18629b,
            getPopupCodeByTacticsSdk: function (_0x4ed7d9, _0x5c566f) {
              return new Promise((_0x4351ae, _0x2ef0f9) => {
                _0x1898a3(_0x4ed7d9).then(_0x31f600 => {
                  let _0x31bf4e = TACTICS_SDK.getPopupCodeByPageInfo({
                    pageCode: _0x5c566f.pageCode,
                    pageOrigin: _0x5c566f.pageOrigin ? _0x5c566f.pageOrigin : "null",
                    actionCode: _0x5c566f.actionCode,
                    popupCode: _0x5c566f.popupCode ? _0x5c566f.popupCode : ""
                  });
                  if (_0x31bf4e) {
                    _0x4351ae(_0x31bf4e);
                  } else {
                    _0x2ef0f9(false);
                  }
                })["catch"](_0x3175b7 => {
                  _0x2ef0f9(false);
                });
              });
            },
            tacticsSdkInit: _0x1898a3,
            getPageBackRouterByTacticsSdk: function (_0xe4d3e0, _0x29cc2f) {
              return new Promise((_0x1a70a4, _0x108315) => {
                _0x1898a3(_0xe4d3e0).then(_0x6efecb => {
                  let _0x5712cd = TACTICS_SDK.getPageBackRouter(_0x29cc2f);
                  if (_0x5712cd) {
                    _0x1a70a4(_0x5712cd);
                  } else {
                    _0x108315(false);
                  }
                })["catch"](_0xd6f632 => {
                  _0x108315(false);
                });
              });
            },
            getCommonPopupByPopupPrefix: function (_0x19276b, _0x368fb4) {
              return new Promise((_0x278bbc, _0x77926b) => {
                _0x1898a3(_0x19276b).then(_0x18a699 => {
                  let _0xf81112 = TACTICS_SDK.getCommonPopupCodeByPrefix(_0x368fb4);
                  if (_0xf81112) {
                    _0x278bbc(_0xf81112);
                  } else {
                    _0x77926b(false);
                  }
                })["catch"](_0x1cc6ca => {
                  _0x77926b(false);
                });
              });
            },
            getPageCommonPopupCodeByPrefix: function (_0x353ea1, _0x5c428a) {
              LOG("获取公共弹窗完整 getCommonPopupByPopupPrefix===>", _0x353ea1.auditOnline);
              return new Promise((_0x56bb37, _0x1122b0) => {
                if (0x1 == Number(_0x353ea1.auditOnline)) {
                  let _0x32fd81 = "";
                  let _0x476332 = ["Box_fB4mv61T", "SignIn_PO0msjJq"].filter(_0x262ff9 => _0x262ff9.split("_")[0x0] == _0x5c428a.popupPrefix);
                  if (_0x476332.length > 0x0) {
                    _0x32fd81 = _0x476332[0x0];
                  }
                  LOG("审核模式 TACTICE_SDK->前缀为" + _0x5c428a.popupPrefix + "的弹窗完整code为" + _0x476332[0x0]);
                  if (_0x32fd81) {
                    _0x56bb37(_0x32fd81);
                  } else {
                    _0x1122b0(false);
                  }
                } else {
                  _0x1898a3(_0x353ea1).then(_0x551610 => {
                    let _0x8af4d6 = TACTICS_SDK.getPageCommonPopupCodeByPrefix(_0x5c428a);
                    if (_0x8af4d6) {
                      _0x56bb37(_0x8af4d6);
                    } else {
                      _0x1122b0(false);
                    }
                  })["catch"](_0x73b73e => {
                    _0x1122b0(false);
                  });
                }
              });
            },
            getPopupConfigByPopupCode: function (_0x38c961, _0x28b221 = "", _0xd5f307 = "") {
              return new Promise(async (_0x514644, _0x5b7fbf) => {
                if (_0x3b166c.popupConfigData && _0x3b166c.popupConfigData["" + _0x38c961]) {
                  let _0x4a36ec = _0x38c961.split("_")[0x0].toLowerCase();
                  let _0x4a3b09 = _0x3b166c.popupConfigData["" + _0x38c961];
                  let _0xfbfa53 = -0x1;
                  let _0x284e89 = 0x0;
                  if (_0x28b221) {
                    _0xfbfa53 = _0x4a3b09.findIndex(_0x3d9439 => _0x3d9439.popKey == _0x28b221);
                    _0x284e89 = -0x1 !== _0xfbfa53 ? _0xfbfa53 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                  } else {
                    _0x284e89 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                  }
                  let _0x29e657 = {};
                  switch (_0x4a36ec) {
                    case "custom":
                    case "customback":
                      _0x29e657 = _0x4a3b09[_0x284e89 % _0x4a3b09.length];
                      _0x29e657 = Object.assign({}, {
                        code: _0x38c961,
                        popup_name: _0x29e657.popName
                      }, _0x29e657);
                      _0x29e657 = _0x3afc9e(-0x1 !== _0x38c961.indexOf("Back") ? "CUSTOM_BACK" : "CUSTOM", _0x29e657);
                      _0x514644(JSON.parse(JSON.stringify(_0x29e657)));
                      break;
                    case "common":
                    case "encourage":
                    case "baidu":
                    case "middlenative":
                    case "middlevideo":
                    case "middlebaidu":
                    case "middletemplete":
                    case "encourage":
                    case "appad":
                    case "middleapp":
                    case "baiduscreeninsertion":
                    case "kdxf":
                    case "middlekdxf":
                      _0x29e657 = _0x4a3b09[_0x284e89 % _0x4a3b09.length];
                      _0x29e657 = Object.assign({}, {
                        code: _0x38c961,
                        popup_name: _0x29e657.popName,
                        popType: "middlenative" == _0x4a36ec ? "middle" : _0x4a36ec
                      }, _0x29e657);
                      LOG("==getAppPopupData444 ", _0x29e657);
                      _0x514644(JSON.parse(JSON.stringify(_0x29e657)));
                      break;
                    default:
                      LOG("CUSTOM", "本地存储 传入的弹窗code无效,code=" + _0x38c961);
                      console.error("本地存储 tactics_sdk_utils.js 函数getPopupConfigByPopupCode 传入的弹窗code无效,code=" + _0x38c961);
                      _0x514644();
                  }
                } else {
                  let _0x121cdb = {};
                  let _0x239c28 = 0x0;
                  let _0x191a74 = [];
                  let _0x3e66f2 = -0x1;
                  if (-0x1 !== _0x38c961.indexOf("Custom")) {
                    _0x191a74 = await TACTICS_SDK[-0x1 !== _0x38c961.indexOf("Back") ? "geBackPopupData" : "getCustomPopupData"](_0x38c961);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = _0x3afc9e(-0x1 !== _0x38c961.indexOf("Back") ? "CUSTOM_BACK" : "CUSTOM", _0x121cdb);
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("Common")) {
                    _0x191a74 = await TACTICS_SDK.getCommonNativePopupData(_0x38c961, _0xd5f307);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x3e66f2 = _0x191a74.findIndex(_0xd14852 => _0xd14852.popKey == _0x28b221);
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x3fe54e => _0x3fe54e.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: "common"
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("Encourage")) {
                    _0x191a74 = await TACTICS_SDK.getEncouragePopupData(_0x38c961);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x3e66f2 = _0x191a74.findIndex(_0x5b906c => _0x5b906c.popKey == _0x28b221);
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x568aee => _0x568aee.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: "encourage"
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if ("Baidu" == _0x38c961.split("_")[0x0] || "Kdxf" == _0x38c961.split("_")[0x0]) {
                    _0x191a74 = await TACTICS_SDK.getBaiduPopupData(_0x38c961);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x3e66f2 = _0x191a74.findIndex(_0x31e8b6 => _0x31e8b6.popKey == _0x28b221);
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x169467 => _0x169467.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: _0x38c961.split("_")[0x0].toLowerCase()
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("AppAd")) {
                    _0x191a74 = await TACTICS_SDK.getAppPopupData(_0x38c961);
                    LOG("==getAppPopupData111 ", _0x191a74);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x27d037 => _0x27d037.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: "appad"
                    }, _0x121cdb);
                    LOG("==getAppPopupData 333", JSON.parse(JSON.stringify(_0x121cdb)));
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("MiddleApp")) {
                    _0x191a74 = await TACTICS_SDK.getAppPopupData(_0x38c961);
                    LOG("==getAppPopupData222 ", _0x191a74);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x3b3ea5 => _0x3b3ea5.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: "appad"
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("MiddleNative")) {
                    _0x191a74 = await TACTICS_SDK.getMiddlePopupData(_0x38c961);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x3e66f2 = _0x191a74.findIndex(_0x11a9a0 => _0x11a9a0.popKey == _0x28b221);
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x5bb2e0 => _0x5bb2e0.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: "middle"
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("MiddleVideo")) {
                    _0x191a74 = await TACTICS_SDK.getMiddleVideoPopupData(_0x38c961);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x3e66f2 = _0x191a74.findIndex(_0x4085e7 => _0x4085e7.popKey == _0x28b221);
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x57d6b4 => _0x57d6b4.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: "middlevideo"
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("MiddleBaidu") || -0x1 !== _0x38c961.indexOf("MiddleKdxf")) {
                    _0x191a74 = await TACTICS_SDK.getMiddleBaiduPopupData(_0x38c961);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x3e66f2 = _0x191a74.findIndex(_0x2426b6 => _0x2426b6.popKey == _0x28b221);
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x398ea6 => _0x398ea6.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: _0x38c961.split("_")[0x0].toLowerCase()
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("MiddleTemplete")) {
                    _0x191a74 = await TACTICS_SDK.getMiddleTempletePopupData(_0x38c961);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x3e66f2 = _0x191a74.findIndex(_0x37ebae => _0x37ebae.popKey == _0x28b221);
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x34d227 => _0x34d227.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: "middletemplete"
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else if (-0x1 !== _0x38c961.indexOf("BaiduScreenInsertion")) {
                    _0x191a74 = await TACTICS_SDK.getBaiduScreenInsertionPopupData(_0x38c961);
                    _0x3b166c.popupConfigData["" + _0x38c961] = _0x191a74;
                    _0x3e66f2 = _0x191a74.findIndex(_0x4f3d98 => _0x4f3d98.popKey == _0x28b221);
                    if (_0x28b221) {
                      _0x3e66f2 = _popDataArr.findIndex(_0x52f789 => _0x52f789.popKey == _0x28b221);
                      _0x239c28 = -0x1 !== _0x3e66f2 ? _0x3e66f2 : await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    } else {
                      _0x239c28 = await TACTICS_SDK.gePopupShowTimes(_0x38c961);
                    }
                    _0x121cdb = _0x191a74[_0x239c28 % _0x191a74.length];
                    _0x121cdb = Object.assign({}, {
                      code: _0x38c961,
                      popup_name: _0x121cdb.popName,
                      popType: "baiduscreeninsertion"
                    }, _0x121cdb);
                    _0x514644(JSON.parse(JSON.stringify(_0x121cdb)));
                  } else {
                    LOG("CUSTOM", "传入的弹窗code无效,code=" + _0x38c961);
                    console.error("tactics_sdk_utils.js 函数getPopupConfigByPopupCode 传入的弹窗code无效,code=" + _0x38c961);
                    _0x514644();
                  }
                }
              });
            },
            getActionPopupCode: function (_0x67ccb8, _0x5035f3, _0x933547, _0x1a3e6e) {
              return new Promise(async (_0xc45e4b, _0x41553d) => {
                try {
                  let _0x27df1e = await TACTICS_SDK.getActionPopupCode(_0x67ccb8, _0x5035f3, _0x933547, _0x1a3e6e);
                  LOG(" 策略sdk ：maxt actionPopupCode", _0x27df1e);
                  _0xc45e4b({
                    code: _0x27df1e,
                    adStatus: _0x5035f3
                  });
                } catch (_0x16b62d) {
                  _0x41553d(_0x16b62d);
                }
              });
            },
            getOriginalPopCode: function (_0x1dfa1d, _0x2da50c, _0x329120, _0x11dd6e) {
              return new Promise(async (_0x665166, _0x5c16f7) => {
                try {
                  let _0x46c456 = await TACTICS_SDK.getOriginalPopCode(_0x1dfa1d, _0x2da50c, _0x329120, _0x11dd6e);
                  LOG(" 策略sdk ：maxt originalPopCode", _0x46c456);
                  _0x665166(_0x46c456);
                } catch (_0xeda7a5) {
                  _0x5c16f7(_0xeda7a5);
                }
              });
            },
            initBoostGroupConfig: function (_0x1825c8) {
              let _0xe44d26 = {
                maxAdCount: 0x2,
                isBoostType: false,
                isShowBoostComp: true,
                isAuditUser: false,
                loopTimes: 0x7530
              };
              let _0x5890ea = Number(TACTICS_SDK.getGlobalData("configInfo").config.boost_group_ad_count.val);
              _0xe44d26.isAuditUser = 0x1 == _0x5890ea;
              let _0xb4698a = Number(TACTICS_SDK.getGlobalData("ad_pool").distance);
              _0xe44d26.loopTimes = _0xb4698a || 0x7530;
              try {
                let _0xfcd30a = TACTICS_SDK.getGlobalData("ad_pool").scene_list;
                LOG("CUSTOM", "initBoostGroupConfig==>_scene_list", _0xfcd30a, _0x1825c8);
                let _0x581ddf = _0xfcd30a && _0xfcd30a.length > 0x0 ? _0xfcd30a.filter(_0x2f967d => _0x2f967d.page_code == _0x1825c8) : [];
                LOG("CUSTOM", "initBoostGroupConfig==>_filter_scene", _0x581ddf, _0x1825c8);
                if (_0x581ddf.length > 0x0) {
                  let _0x108fc3 = 0x1 == Number(TACTICS_SDK.getGlobalData("ad_pool").status);
                  let _0xa76836 = _0x581ddf[0x0].is_open;
                  let _0x23d832 = _0x581ddf[0x0].is_polling;
                  let _0x3c8b13 = _0x581ddf[0x0].upper_num;
                  _0xe44d26.maxAdCount = Number(_0x3c8b13);
                  _0xe44d26.isBoostType = _0x108fc3 && 0x1 == _0xa76836 && 0x1 == _0x23d832;
                  _0xe44d26.isShowBoostComp = 0x1 == _0xa76836;
                } else {
                  _0xe44d26.maxAdCount = 0x2;
                  _0xe44d26.isBoostType = false;
                  _0xe44d26.isShowBoostComp = true;
                  _0xe44d26.loopTimes = 0x7530;
                }
              } catch (_0x5b58a2) {
                LOG("CUSTOM", "initBoostGroupConfig==>error", _0x5b58a2);
                _0xe44d26.maxAdCount = 0x2;
                _0xe44d26.isBoostType = false;
                _0xe44d26.isShowBoostComp = true;
                _0xe44d26.loopTimes = 0x7530;
              }
              return _0xe44d26;
            },
            getAppAdvData: function (_0x4bada6) {
              return new Promise(async (_0x5cf4da, _0x1c4670) => {
                try {
                  LOG("+===getAppAdvData2", _0x4bada6);
                  TACTICS_SDK.showAppAdv(_0x4bada6).then(_0xe0907b => {
                    LOG("+===showAppAdv", _0xe0907b);
                    _0x5cf4da(_0xe0907b);
                  })["catch"](_0x19bc1e => {
                    LOG("+===showAppAdv catch err", _0x19bc1e);
                    _0x1c4670(_0x19bc1e);
                  });
                } catch (_0x13fc87) {
                  LOG("+===showAppAdv", res);
                }
              });
            },
            clickAppAdv: function (_0x3236fe, _0xd6dee) {
              return new Promise((_0x36b9ff, _0x2c3270) => {
                try {
                  LOG("+===clickAppAdv", _0x3236fe, _0xd6dee);
                  TACTICS_SDK.clickAppAdv(_0x3236fe, _0xd6dee).then(_0xf4acf9 => {
                    LOG("+===clickAppAdv", _0xf4acf9);
                    _0x36b9ff(_0xf4acf9);
                  })["catch"](_0x14508e => {
                    LOG("+===clickAppAdv catch err", _0x14508e);
                    _0x2c3270(_0x14508e);
                  });
                } catch (_0x5ad3fb) {
                  LOG("+===clickAppAdv", _0x5ad3fb);
                }
              });
            },
            tactics_sdk_data: _0x3b166c
          };
          (_0x59fd62.g.__proto__ || _0x59fd62.g).TACTICS_SDK_UTILS = _0x59260c;
          _0x466f5c["default"] = _0x59260c;
        },
        0x4821: (_0x5f5588, _0x37cf50, _0x1ef4ef) => {
          var _0x1ad6b2 = {
            "./example.js": 0x17991,
            "./index.js": 0xb546
          };
          function _0x50d5ac(_0x5d226f) {
            var _0x3232e3 = _0x33c9f5(_0x5d226f);
            return _0x1ef4ef(_0x3232e3);
          }
          function _0x33c9f5(_0xc89a3) {
            if (!_0x1ef4ef.o(_0x1ad6b2, _0xc89a3)) {
              var _0x11d15f = new Error("Cannot find module '" + _0xc89a3 + "'");
              _0x11d15f.code = "MODULE_NOT_FOUND";
              throw _0x11d15f;
            }
            return _0x1ad6b2[_0xc89a3];
          }
          _0x50d5ac.keys = function () {
            return Object.keys(_0x1ad6b2);
          };
          _0x50d5ac.resolve = _0x33c9f5;
          _0x5f5588.exports = _0x50d5ac;
          _0x50d5ac.id = 0x4821;
        },
        0x12f61: (_0x1095ba, _0x104da5, _0xd6f62f) => {
          "use strict";

          var _0x578bc5 = _0xd6f62f(0x188c)["default"];
          function _0x22e578() {
            _0x1095ba.exports = _0x22e578 = function () {
              return _0x596941;
            };
            _0x1095ba.exports.__esModule = true;
            _0x1095ba.exports["default"] = _0x1095ba.exports;
            var _0x596941 = {};
            var _0x500184 = Object.prototype;
            var _0x1a05b2 = _0x500184.hasOwnProperty;
            var _0x4f34e3 = Object.defineProperty || function (_0x4b7ac4, _0x2522ad, _0x2f9413) {
              _0x4b7ac4[_0x2522ad] = _0x2f9413.value;
            };
            var _0x12df20 = "function" == typeof Symbol ? Symbol : {};
            var _0x43b7d3 = _0x12df20.iterator || "@@iterator";
            var _0x9ce378 = _0x12df20.asyncIterator || "@@asyncIterator";
            var _0x3b1c5e = _0x12df20.toStringTag || "@@toStringTag";
            function _0x444a82(_0x4feabd, _0x4121bc, _0x2402f6) {
              Object.defineProperty(_0x4feabd, _0x4121bc, {
                value: _0x2402f6,
                enumerable: true,
                configurable: true,
                writable: true
              });
              return _0x4feabd[_0x4121bc];
            }
            try {
              _0x444a82({}, "");
            } catch (_0xba196d) {
              _0x444a82 = function (_0xae8a78, _0x333cc3, _0x17f694) {
                return _0xae8a78[_0x333cc3] = _0x17f694;
              };
            }
            function _0x2cf863(_0x40b0fd, _0x233b5d, _0x3d969d, _0x3a9188) {
              var _0x105e38 = _0x233b5d && _0x233b5d.prototype instanceof _0xe30aca ? _0x233b5d : _0xe30aca;
              var _0x11be8b = Object.create(_0x105e38.prototype);
              var _0x2384ef = new _0x25f1b5(_0x3a9188 || []);
              _0x4f34e3(_0x11be8b, "_invoke", {
                value: _0x4a1205(_0x40b0fd, _0x3d969d, _0x2384ef)
              });
              return _0x11be8b;
            }
            function _0x20362d(_0x361f17, _0x3f949e, _0x20a884) {
              try {
                return {
                  type: "normal",
                  arg: _0x361f17.call(_0x3f949e, _0x20a884)
                };
              } catch (_0x4a7746) {
                return {
                  type: "throw",
                  arg: _0x4a7746
                };
              }
            }
            _0x596941.wrap = _0x2cf863;
            var _0x47c197 = {};
            function _0xe30aca() {}
            function _0x577e1d() {}
            function _0x4bee9b() {}
            var _0x461ebf = {};
            _0x444a82(_0x461ebf, _0x43b7d3, function () {
              return this;
            });
            var _0x523cd2 = Object.getPrototypeOf;
            var _0xc6afdb = _0x523cd2 && _0x523cd2(_0x523cd2(_0x26ff8c([])));
            if (_0xc6afdb && _0xc6afdb !== _0x500184 && _0x1a05b2.call(_0xc6afdb, _0x43b7d3)) {
              _0x461ebf = _0xc6afdb;
            }
            var _0x176955 = _0x4bee9b.prototype = _0xe30aca.prototype = Object.create(_0x461ebf);
            function _0x39925b(_0x24c62c) {
              ["next", "throw", "return"].forEach(function (_0xe3448b) {
                _0x444a82(_0x24c62c, _0xe3448b, function (_0xb3ec90) {
                  return this._invoke(_0xe3448b, _0xb3ec90);
                });
              });
            }
            function _0x198d70(_0x45ed7e, _0x582389) {
              function _0x1febdb(_0x56bc4a, _0x1f74f1, _0x1bcb62, _0x50e898) {
                var _0x273f06 = _0x20362d(_0x45ed7e[_0x56bc4a], _0x45ed7e, _0x1f74f1);
                if ("throw" !== _0x273f06.type) {
                  var _0x4172bf = _0x273f06.arg;
                  var _0x1a1272 = _0x4172bf.value;
                  return _0x1a1272 && "object" == _0x578bc5(_0x1a1272) && _0x1a05b2.call(_0x1a1272, "__await") ? _0x582389.resolve(_0x1a1272.__await).then(function (_0xa1243a) {
                    _0x1febdb("next", _0xa1243a, _0x1bcb62, _0x50e898);
                  }, function (_0x14687f) {
                    _0x1febdb("throw", _0x14687f, _0x1bcb62, _0x50e898);
                  }) : _0x582389.resolve(_0x1a1272).then(function (_0x4df360) {
                    _0x4172bf.value = _0x4df360;
                    _0x1bcb62(_0x4172bf);
                  }, function (_0x379e90) {
                    return _0x1febdb("throw", _0x379e90, _0x1bcb62, _0x50e898);
                  });
                }
                _0x50e898(_0x273f06.arg);
              }
              var _0x463886;
              _0x4f34e3(this, "_invoke", {
                value: function (_0x5a7ae3, _0x55db4a) {
                  function _0x491f17() {
                    return new _0x582389(function (_0x474aa7, _0x3754ba) {
                      _0x1febdb(_0x5a7ae3, _0x55db4a, _0x474aa7, _0x3754ba);
                    });
                  }
                  return _0x463886 = _0x463886 ? _0x463886.then(_0x491f17, _0x491f17) : _0x491f17();
                }
              });
            }
            function _0x4a1205(_0x3adc43, _0x46685c, _0x5738c5) {
              var _0x468f40 = "suspendedStart";
              return function (_0xa9d82d, _0x25ee03) {
                if ("executing" === _0x468f40) {
                  throw new Error("Generator is already running");
                }
                if ("completed" === _0x468f40) {
                  if ("throw" === _0xa9d82d) {
                    throw _0x25ee03;
                  }
                  return {
                    value: undefined,
                    done: true
                  };
                }
                _0x5738c5.method = _0xa9d82d;
                for (_0x5738c5.arg = _0x25ee03;;) {
                  var _0x1d4311 = _0x5738c5.delegate;
                  if (_0x1d4311) {
                    var _0x3e2686 = _0x3c5d04(_0x1d4311, _0x5738c5);
                    if (_0x3e2686) {
                      if (_0x3e2686 === _0x47c197) {
                        continue;
                      }
                      return _0x3e2686;
                    }
                  }
                  if ("next" === _0x5738c5.method) {
                    _0x5738c5.sent = _0x5738c5._sent = _0x5738c5.arg;
                  } else {
                    if ("throw" === _0x5738c5.method) {
                      if ("suspendedStart" === _0x468f40) {
                        _0x468f40 = "completed";
                        throw _0x5738c5.arg;
                      }
                      _0x5738c5.dispatchException(_0x5738c5.arg);
                    } else if ("return" === _0x5738c5.method) {
                      _0x5738c5.abrupt("return", _0x5738c5.arg);
                    }
                  }
                  _0x468f40 = "executing";
                  var _0x2a935c = _0x20362d(_0x3adc43, _0x46685c, _0x5738c5);
                  if ("normal" === _0x2a935c.type) {
                    _0x468f40 = _0x5738c5.done ? "completed" : "suspendedYield";
                    if (_0x2a935c.arg === _0x47c197) {
                      continue;
                    }
                    return {
                      value: _0x2a935c.arg,
                      done: _0x5738c5.done
                    };
                  }
                  if ("throw" === _0x2a935c.type) {
                    _0x468f40 = "completed";
                    _0x5738c5.method = "throw";
                    _0x5738c5.arg = _0x2a935c.arg;
                  }
                }
              };
            }
            function _0x3c5d04(_0x2e6b0a, _0x2d9f51) {
              var _0x2f32a4 = _0x2d9f51.method;
              var _0x7e5b2e = _0x2e6b0a.iterator[_0x2f32a4];
              if (undefined === _0x7e5b2e) {
                _0x2d9f51.delegate = null;
                if (!("throw" === _0x2f32a4 && _0x2e6b0a.iterator["return"] && (_0x2d9f51.method = "return", _0x2d9f51.arg = undefined, _0x3c5d04(_0x2e6b0a, _0x2d9f51), "throw" === _0x2d9f51.method))) {
                  if ("return" !== _0x2f32a4) {
                    _0x2d9f51.method = "throw";
                    _0x2d9f51.arg = new TypeError("The iterator does not provide a '" + _0x2f32a4 + "' method");
                  }
                }
                return _0x47c197;
              }
              var _0x22e69b = _0x20362d(_0x7e5b2e, _0x2e6b0a.iterator, _0x2d9f51.arg);
              if ("throw" === _0x22e69b.type) {
                _0x2d9f51.method = "throw";
                _0x2d9f51.arg = _0x22e69b.arg;
                _0x2d9f51.delegate = null;
                return _0x47c197;
              }
              var _0x5a4a24 = _0x22e69b.arg;
              return _0x5a4a24 ? _0x5a4a24.done ? (_0x2d9f51[_0x2e6b0a.resultName] = _0x5a4a24.value, _0x2d9f51.next = _0x2e6b0a.nextLoc, "return" !== _0x2d9f51.method && (_0x2d9f51.method = "next", _0x2d9f51.arg = undefined), _0x2d9f51.delegate = null, _0x47c197) : _0x5a4a24 : (_0x2d9f51.method = "throw", _0x2d9f51.arg = new TypeError("iterator result is not an object"), _0x2d9f51.delegate = null, _0x47c197);
            }
            function _0x374d07(_0x5523fb) {
              var _0xd6b36c = {
                tryLoc: _0x5523fb[0x0]
              };
              if (0x1 in _0x5523fb) {
                _0xd6b36c.catchLoc = _0x5523fb[0x1];
              }
              if (0x2 in _0x5523fb) {
                _0xd6b36c.finallyLoc = _0x5523fb[0x2];
                _0xd6b36c.afterLoc = _0x5523fb[0x3];
              }
              this.tryEntries.push(_0xd6b36c);
            }
            function _0x173998(_0x953cc3) {
              var _0xc12aef = _0x953cc3.completion || {};
              _0xc12aef.type = "normal";
              delete _0xc12aef.arg;
              _0x953cc3.completion = _0xc12aef;
            }
            function _0x25f1b5(_0x1356aa) {
              this.tryEntries = [{
                tryLoc: "root"
              }];
              _0x1356aa.forEach(_0x374d07, this);
              this.reset(true);
            }
            function _0x26ff8c(_0x2857d8) {
              if (_0x2857d8) {
                var _0x1a7d5f = _0x2857d8[_0x43b7d3];
                if (_0x1a7d5f) {
                  return _0x1a7d5f.call(_0x2857d8);
                }
                if ("function" == typeof _0x2857d8.next) {
                  return _0x2857d8;
                }
                if (!isNaN(_0x2857d8.length)) {
                  var _0x3f0ba4 = -0x1;
                  var _0xe3d8c9 = function _0x4da57d() {
                    for (; ++_0x3f0ba4 < _0x2857d8.length;) {
                      if (_0x1a05b2.call(_0x2857d8, _0x3f0ba4)) {
                        _0x4da57d.value = _0x2857d8[_0x3f0ba4];
                        _0x4da57d.done = false;
                        return _0x4da57d;
                      }
                    }
                    _0x4da57d.value = undefined;
                    _0x4da57d.done = true;
                    return _0x4da57d;
                  };
                  return _0xe3d8c9.next = _0xe3d8c9;
                }
              }
              return {
                next: _0x26ea5d
              };
            }
            function _0x26ea5d() {
              return {
                value: undefined,
                done: true
              };
            }
            _0x577e1d.prototype = _0x4bee9b;
            _0x4f34e3(_0x176955, "constructor", {
              value: _0x4bee9b,
              configurable: true
            });
            _0x4f34e3(_0x4bee9b, "constructor", {
              value: _0x577e1d,
              configurable: true
            });
            _0x577e1d.displayName = _0x444a82(_0x4bee9b, _0x3b1c5e, "GeneratorFunction");
            _0x596941.isGeneratorFunction = function (_0x1ce885) {
              var _0x542e74 = "function" == typeof _0x1ce885 && _0x1ce885.constructor;
              return !!_0x542e74 && (_0x542e74 === _0x577e1d || "GeneratorFunction" === (_0x542e74.displayName || _0x542e74.name));
            };
            _0x596941.mark = function (_0x20c021) {
              if (Object.setPrototypeOf) {
                Object.setPrototypeOf(_0x20c021, _0x4bee9b);
              } else {
                _0x20c021.__proto__ = _0x4bee9b;
                _0x444a82(_0x20c021, _0x3b1c5e, "GeneratorFunction");
              }
              _0x20c021.prototype = Object.create(_0x176955);
              return _0x20c021;
            };
            _0x596941.awrap = function (_0x1c6b23) {
              return {
                __await: _0x1c6b23
              };
            };
            _0x39925b(_0x198d70.prototype);
            _0x444a82(_0x198d70.prototype, _0x9ce378, function () {
              return this;
            });
            _0x596941.AsyncIterator = _0x198d70;
            _0x596941.async = function (_0x3dac40, _0x1c82e5, _0x5316ba, _0x51bd50, _0x1df7bc) {
              if (undefined === _0x1df7bc) {
                _0x1df7bc = Promise;
              }
              var _0x34d078 = new _0x198d70(_0x2cf863(_0x3dac40, _0x1c82e5, _0x5316ba, _0x51bd50), _0x1df7bc);
              return _0x596941.isGeneratorFunction(_0x1c82e5) ? _0x34d078 : _0x34d078.next().then(function (_0x569be8) {
                return _0x569be8.done ? _0x569be8.value : _0x34d078.next();
              });
            };
            _0x39925b(_0x176955);
            _0x444a82(_0x176955, _0x3b1c5e, "Generator");
            _0x444a82(_0x176955, _0x43b7d3, function () {
              return this;
            });
            _0x444a82(_0x176955, "toString", function () {
              return "[object Generator]";
            });
            _0x596941.keys = function (_0x37e2ff) {
              var _0x4ee6f9 = Object(_0x37e2ff);
              var _0x1fe81d = [];
              for (var _0x230d2b in _0x4ee6f9) _0x1fe81d.push(_0x230d2b);
              _0x1fe81d.reverse();
              return function _0x41b896() {
                for (; _0x1fe81d.length;) {
                  var _0x105b38 = _0x1fe81d.pop();
                  if (_0x105b38 in _0x4ee6f9) {
                    _0x41b896.value = _0x105b38;
                    _0x41b896.done = false;
                    return _0x41b896;
                  }
                }
                _0x41b896.done = true;
                return _0x41b896;
              };
            };
            _0x596941.values = _0x26ff8c;
            _0x25f1b5.prototype = {
              constructor: _0x25f1b5,
              reset: function (_0x569645) {
                this.prev = 0x0;
                this.next = 0x0;
                this.sent = this._sent = undefined;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined;
                this.tryEntries.forEach(_0x173998);
                if (!_0x569645) {
                  for (var _0x562609 in this) if ("t" === _0x562609.charAt(0x0) && _0x1a05b2.call(this, _0x562609) && !isNaN(+_0x562609.slice(0x1))) {
                    this[_0x562609] = undefined;
                  }
                }
              },
              stop: function () {
                this.done = true;
                var _0x2a5471 = this.tryEntries[0x0].completion;
                if ("throw" === _0x2a5471.type) {
                  throw _0x2a5471.arg;
                }
                return this.rval;
              },
              dispatchException: function (_0x46b6aa) {
                if (this.done) {
                  throw _0x46b6aa;
                }
                var _0x570f45 = this;
                function _0x5f1763(_0x5cf84b, _0x21a1b5) {
                  _0x4333ce.type = "throw";
                  _0x4333ce.arg = _0x46b6aa;
                  _0x570f45.next = _0x5cf84b;
                  if (_0x21a1b5) {
                    _0x570f45.method = "next";
                    _0x570f45.arg = undefined;
                  }
                  return !!_0x21a1b5;
                }
                for (var _0x3d3548 = this.tryEntries.length - 0x1; _0x3d3548 >= 0x0; --_0x3d3548) {
                  var _0x3a969a = this.tryEntries[_0x3d3548];
                  var _0x4333ce = _0x3a969a.completion;
                  if ("root" === _0x3a969a.tryLoc) {
                    return _0x5f1763("end");
                  }
                  if (_0x3a969a.tryLoc <= this.prev) {
                    var _0x1f5c8c = _0x1a05b2.call(_0x3a969a, "catchLoc");
                    var _0x1b2220 = _0x1a05b2.call(_0x3a969a, "finallyLoc");
                    if (_0x1f5c8c && _0x1b2220) {
                      if (this.prev < _0x3a969a.catchLoc) {
                        return _0x5f1763(_0x3a969a.catchLoc, true);
                      }
                      if (this.prev < _0x3a969a.finallyLoc) {
                        return _0x5f1763(_0x3a969a.finallyLoc);
                      }
                    } else {
                      if (_0x1f5c8c) {
                        if (this.prev < _0x3a969a.catchLoc) {
                          return _0x5f1763(_0x3a969a.catchLoc, true);
                        }
                      } else {
                        if (!_0x1b2220) {
                          throw new Error("try statement without catch or finally");
                        }
                        if (this.prev < _0x3a969a.finallyLoc) {
                          return _0x5f1763(_0x3a969a.finallyLoc);
                        }
                      }
                    }
                  }
                }
              },
              abrupt: function (_0x4a26bb, _0x269ef9) {
                for (var _0x2ed103 = this.tryEntries.length - 0x1; _0x2ed103 >= 0x0; --_0x2ed103) {
                  var _0x5f344c = this.tryEntries[_0x2ed103];
                  if (_0x5f344c.tryLoc <= this.prev && _0x1a05b2.call(_0x5f344c, "finallyLoc") && this.prev < _0x5f344c.finallyLoc) {
                    var _0xe9b973 = _0x5f344c;
                    break;
                  }
                }
                if (_0xe9b973 && ("break" === _0x4a26bb || "continue" === _0x4a26bb) && _0xe9b973.tryLoc <= _0x269ef9 && _0x269ef9 <= _0xe9b973.finallyLoc) {
                  _0xe9b973 = null;
                }
                var _0x5ac208 = _0xe9b973 ? _0xe9b973.completion : {};
                _0x5ac208.type = _0x4a26bb;
                _0x5ac208.arg = _0x269ef9;
                return _0xe9b973 ? (this.method = "next", this.next = _0xe9b973.finallyLoc, _0x47c197) : this.complete(_0x5ac208);
              },
              complete: function (_0x39fc71, _0x112f95) {
                if ("throw" === _0x39fc71.type) {
                  throw _0x39fc71.arg;
                }
                if ("break" === _0x39fc71.type || "continue" === _0x39fc71.type) {
                  this.next = _0x39fc71.arg;
                } else if ("return" === _0x39fc71.type) {
                  this.rval = this.arg = _0x39fc71.arg;
                  this.method = "return";
                  this.next = "end";
                } else if ("normal" === _0x39fc71.type && _0x112f95) {
                  this.next = _0x112f95;
                }
                return _0x47c197;
              },
              finish: function (_0x35bcc9) {
                for (var _0xce3bfb = this.tryEntries.length - 0x1; _0xce3bfb >= 0x0; --_0xce3bfb) {
                  var _0x46da62 = this.tryEntries[_0xce3bfb];
                  if (_0x46da62.finallyLoc === _0x35bcc9) {
                    this.complete(_0x46da62.completion, _0x46da62.afterLoc);
                    _0x173998(_0x46da62);
                    return _0x47c197;
                  }
                }
              },
              catch: function (_0x43b529) {
                for (var _0x40dcda = this.tryEntries.length - 0x1; _0x40dcda >= 0x0; --_0x40dcda) {
                  var _0x321d3f = this.tryEntries[_0x40dcda];
                  if (_0x321d3f.tryLoc === _0x43b529) {
                    var _0x553614 = _0x321d3f.completion;
                    if ("throw" === _0x553614.type) {
                      var _0xee9b19 = _0x553614.arg;
                      _0x173998(_0x321d3f);
                    }
                    return _0xee9b19;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (_0x4db9b2, _0x281f2c, _0x6ce623) {
                this.delegate = {
                  iterator: _0x26ff8c(_0x4db9b2),
                  resultName: _0x281f2c,
                  nextLoc: _0x6ce623
                };
                if ("next" === this.method) {
                  this.arg = undefined;
                }
                return _0x47c197;
              }
            };
            return _0x596941;
          }
          _0x1095ba.exports = _0x22e578;
          _0x1095ba.exports.__esModule = true;
          _0x1095ba.exports["default"] = _0x1095ba.exports;
        },
        0x188c: _0x59859e => {
          "use strict";

          function _0x1ab65d(_0x593c52) {
            _0x59859e.exports = _0x1ab65d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x435456) {
              return typeof _0x435456;
            } : function (_0x3e1989) {
              return _0x3e1989 && "function" == typeof Symbol && _0x3e1989.constructor === Symbol && _0x3e1989 !== Symbol.prototype ? "symbol" : typeof _0x3e1989;
            };
            _0x59859e.exports.__esModule = true;
            _0x59859e.exports["default"] = _0x59859e.exports;
            return _0x1ab65d(_0x593c52);
          }
          _0x59859e.exports = _0x1ab65d;
          _0x59859e.exports.__esModule = true;
          _0x59859e.exports["default"] = _0x59859e.exports;
        },
        0xaaf3: (_0x2cef88, _0x942ae9, _0x2c0802) => {
          "use strict";

          var _0x5298a7 = _0x2c0802(0x12f61)();
          _0x2cef88.exports = _0x5298a7;
          try {
            regeneratorRuntime = _0x5298a7;
          } catch (_0x3b4373) {
            if ("object" == typeof globalThis) {
              globalThis.regeneratorRuntime = _0x5298a7;
            } else {
              Function("r", "regeneratorRuntime = r")(_0x5298a7);
            }
          }
        },
        0xa676: _0x20a070 => {
          "use strict";

          _0x20a070.exports = JSON.parse("{\"package\":\"com.zhuiwenxiaoshuo.app\",\"name\":\"追文小说\",\"versionName\":\"1.1.25\",\"versionCode\":101025,\"minPlatformVersion\":1070,\"icon\":\"/assets/images/logo.png\",\"features\":[{\"name\":\"system.animate\"},{\"name\":\"system.request\"},{\"name\":\"system.prompt\"},{\"name\":\"system.router\"},{\"name\":\"system.shortcut\"},{\"name\":\"system.fetch\"},{\"name\":\"system.network\"},{\"name\":\"service.account\"},{\"name\":\"system.storage\"},{\"name\":\"system.device\"},{\"name\":\"system.brightness\"},{\"name\":\"system.app\"},{\"name\":\"service.push\"},{\"name\":\"system.notification\"},{\"name\":\"system.wifi\"},{\"name\":\"system.file\"},{\"name\":\"service.alipay\"},{\"name\":\"service.ad\"},{\"name\":\"system.calendar\"},{\"name\":\"system.package\"},{\"name\":\"system.webview\"},{\"name\":\"service.wxpay\",\"params\":{\"package\":\"com.shiyueread.home\",\"sign\":\"MIIGQDCCBCigAwIBAgIJAJa410xto5buMA0GCSqGSIb3DQEBCwUAMIG0MQswCQYDVQQGEwJaSDEQMA4GA1UECAwHSGFpIE5hbjEQMA4GA1UEBwwHSGFpIGtvdTEyMDAGA1UECgwpSGFpbmFuIGd1YW5vdSBOZXR3b3JrIFRlY2hub2xvZ3kgQ28uLCBMdGQxEzARBgNVBAsMCk9wZXJhdGlvbnMxFDASBgNVBAMMC3N5cmVhZHMuY29tMSIwIAYJKoZIhvcNAQkBFhNkZWZhdWx0QGRlZmF1bHQuY29tMB4XDTIyMDMxMDA2NTE1NFoXDTMyMDMwNzA2NTE1NFowgbQxCzAJBgNVBAYTAlpIMRAwDgYDVQQIDAdIYWkgTmFuMRAwDgYDVQQHDAdIYWkga291MTIwMAYDVQQKDClIYWluYW4gZ3Vhbm91IE5ldHdvcmsgVGVjaG5vbG9neSBDby4sIEx0ZDETMBEGA1UECwwKT3BlcmF0aW9uczEUMBIGA1UEAwwLc3lyZWFkcy5jb20xIjAgBgkqhkiG9w0BCQEWE2RlZmF1bHRAZGVmYXVsdC5jb20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC01asXcjKm11x0Ai72IdI+4sCVbDGEHbPcIHJDhtw383fuFZnTdEoQnK1+3OUYmHV9YxT9OBwnfuL/rJHOOsyWjZoe9WUkg4zxQIG96Nr1ioAGqjBKfrDeRlEKkxz82jmijOOYRlekLh2JzpLN65oE70lv8pcPRuzXld741igUvd3blG6Ys6vxHM9PyuQW972osgcxH50bOmOR77G7GgdOFYLsEruL4P3m7/9FuTLF3HqHK5NAF3fOs3pp6sPrmFIGnpdsUSjw++O+TT6lsvC2OHhbpST6pHTsMHdrPsavrKkNe80RmmDI1rlFGfvdWkq8gXHEQSO0ueTDBLfe1UabcCAIvoic8rXC31tAKn72LOSbHzl2726+Ogi3hFAY/d1GAQTL5BNRuaAnL5TXUr9wgTD5UJukiroU9fqnlAlW7g2Yg3XO3eC7mO/nfvzyGyTq5h58CzZ+LOm/IFrDNu+fGa0cskgsQxqVJr+/57b9choaDPEsLi2rfQaJFABEqYZMU7CKzhox5DYNRdIK2mh/AenhcmGuBspx9E225a8XU7c6nZLGDn90IldA/gh3QV85qpfZUy49LKD5cP9W5arePlu/tR79W1H2rsjCzylI9Su6hNIMwNQacHuZhc/jbwbKIiPcTX66NlRIxWxEqIjkYbkN/wTJTnOKZM++lXNNuwIDAQABo1MwUTAdBgNVHQ4EFgQUtW8fbqCF3XYRHPjVmKJar0yKNTUwHwYDVR0jBBgwFoAUtW8fbqCF3XYRHPjVmKJar0yKNTUwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAUc2YZGT86jfrdK4G9Gh55xwl7hUYjEnYG04CB5FR9UXNdOmboySMm2ysMx955kALv1I2gSDAPMsctMGMWEhQEO/nDe7GzQ64OyEJeHvVwRPutXylpMbpbKdr0s4gf6qH45KKWGIHSRsF5wmP2TCACKqy470g//6W53hv09aNLgLYPZ0PiyZK22BW/eWh35foHt4pHulm85nnxJoDNSL5gODoWH+quftMywS4X1Nd7DH/uJGOTFgm1rThKcgo1CqFxtTAVemso9guDTaY7uD70MMNAiyBoSRgwBDq5oKh/Wovsx8LZAUGzjC+75AKklo/75w/7RAxhFSmVYRhJmfGWXUQTycyoOkDZYf+WZiKP9ENVQlLePwJm66Nukehs+iyTKbzyzYsLct7A2isQv5xEc7+PXs1xyOvoTFFSfOX4L7PWIDOOSi38erdNxoiEouttbYH8/mU8676jleMFOdDov7/KoGO6wz+OA2Zz7OOLsMLJu8mFd0PNFH68IJNdWLvOO6iMYZk5rnpMAOuCTM6gIyg0Q9pzzxjTfBxs7ojADrNMkioCV0/cAliiaWALg6jerSO2tGBtC5YC/yue/IjyKk678bLVMO3XT5LZ0GZY9R7/GKcSi8lK14aQdDlxlb69PXJPxMp9AmwavnVBUznhbLRzzcjjmvQcZKcUSa19yI=\",\"url\":\"http://www.syreads.com\"}},{\"name\":\"service.share\",\"params\":{\"appSign\":\"MIIGQDCCBCigAwIBAgIJAJa410xto5buMA0GCSqGSIb3DQEBCwUAMIG0MQswCQYDVQQGEwJaSDEQMA4GA1UECAwHSGFpIE5hbjEQMA4GA1UEBwwHSGFpIGtvdTEyMDAGA1UECgwpSGFpbmFuIGd1YW5vdSBOZXR3b3JrIFRlY2hub2xvZ3kgQ28uLCBMdGQxEzARBgNVBAsMCk9wZXJhdGlvbnMxFDASBgNVBAMMC3N5cmVhZHMuY29tMSIwIAYJKoZIhvcNAQkBFhNkZWZhdWx0QGRlZmF1bHQuY29tMB4XDTIyMDMxMDA2NTE1NFoXDTMyMDMwNzA2NTE1NFowgbQxCzAJBgNVBAYTAlpIMRAwDgYDVQQIDAdIYWkgTmFuMRAwDgYDVQQHDAdIYWkga291MTIwMAYDVQQKDClIYWluYW4gZ3Vhbm91IE5ldHdvcmsgVGVjaG5vbG9neSBDby4sIEx0ZDETMBEGA1UECwwKT3BlcmF0aW9uczEUMBIGA1UEAwwLc3lyZWFkcy5jb20xIjAgBgkqhkiG9w0BCQEWE2RlZmF1bHRAZGVmYXVsdC5jb20wggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC01asXcjKm11x0Ai72IdI+4sCVbDGEHbPcIHJDhtw383fuFZnTdEoQnK1+3OUYmHV9YxT9OBwnfuL/rJHOOsyWjZoe9WUkg4zxQIG96Nr1ioAGqjBKfrDeRlEKkxz82jmijOOYRlekLh2JzpLN65oE70lv8pcPRuzXld741igUvd3blG6Ys6vxHM9PyuQW972osgcxH50bOmOR77G7GgdOFYLsEruL4P3m7/9FuTLF3HqHK5NAF3fOs3pp6sPrmFIGnpdsUSjw++O+TT6lsvC2OHhbpST6pHTsMHdrPsavrKkNe80RmmDI1rlFGfvdWkq8gXHEQSO0ueTDBLfe1UabcCAIvoic8rXC31tAKn72LOSbHzl2726+Ogi3hFAY/d1GAQTL5BNRuaAnL5TXUr9wgTD5UJukiroU9fqnlAlW7g2Yg3XO3eC7mO/nfvzyGyTq5h58CzZ+LOm/IFrDNu+fGa0cskgsQxqVJr+/57b9choaDPEsLi2rfQaJFABEqYZMU7CKzhox5DYNRdIK2mh/AenhcmGuBspx9E225a8XU7c6nZLGDn90IldA/gh3QV85qpfZUy49LKD5cP9W5arePlu/tR79W1H2rsjCzylI9Su6hNIMwNQacHuZhc/jbwbKIiPcTX66NlRIxWxEqIjkYbkN/wTJTnOKZM++lXNNuwIDAQABo1MwUTAdBgNVHQ4EFgQUtW8fbqCF3XYRHPjVmKJar0yKNTUwHwYDVR0jBBgwFoAUtW8fbqCF3XYRHPjVmKJar0yKNTUwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAgEAUc2YZGT86jfrdK4G9Gh55xwl7hUYjEnYG04CB5FR9UXNdOmboySMm2ysMx955kALv1I2gSDAPMsctMGMWEhQEO/nDe7GzQ64OyEJeHvVwRPutXylpMbpbKdr0s4gf6qH45KKWGIHSRsF5wmP2TCACKqy470g//6W53hv09aNLgLYPZ0PiyZK22BW/eWh35foHt4pHulm85nnxJoDNSL5gODoWH+quftMywS4X1Nd7DH/uJGOTFgm1rThKcgo1CqFxtTAVemso9guDTaY7uD70MMNAiyBoSRgwBDq5oKh/Wovsx8LZAUGzjC+75AKklo/75w/7RAxhFSmVYRhJmfGWXUQTycyoOkDZYf+WZiKP9ENVQlLePwJm66Nukehs+iyTKbzyzYsLct7A2isQv5xEc7+PXs1xyOvoTFFSfOX4L7PWIDOOSi38erdNxoiEouttbYH8/mU8676jleMFOdDov7/KoGO6wz+OA2Zz7OOLsMLJu8mFd0PNFH68IJNdWLvOO6iMYZk5rnpMAOuCTM6gIyg0Q9pzzxjTfBxs7ojADrNMkioCV0/cAliiaWALg6jerSO2tGBtC5YC/yue/IjyKk678bLVMO3XT5LZ0GZY9R7/GKcSi8lK14aQdDlxlb69PXJPxMp9AmwavnVBUznhbLRzzcjjmvQcZKcUSa19yI=\",\"wxKey\":\"wxf9cfe9377c2396ee\"}}],\"permissions\":[{\"origin\":\"*\"}],\"template/official\":\"demo-template\",\"config\":{\"logLevel\":\"debug\",\"network\":{\"readTimeout\":8000,\"connectTimeout\":3000}},\"router\":{\"entry\":\"pagesC/Start\",\"pages\":{\"pagesA/Main\":{\"component\":\"index\"},\"pagesA/WelfareNew\":{\"component\":\"index\"},\"pagesB/Money\":{\"component\":\"index\"},\"pagesB/Activity\":{\"component\":\"index\"},\"pagesB/Vip\":{\"component\":\"index\"},\"pagesB/Vip-Agreement\":{\"component\":\"index\"},\"pagesB/Login\":{\"component\":\"index\"},\"pagesB/Sex\":{\"component\":\"index\"},\"pagesB/Setting\":{\"component\":\"index\"},\"pagesB/Privacy\":{\"component\":\"index\"},\"pagesB/Account\":{\"component\":\"index\"},\"pagesB/Subscribe\":{\"component\":\"index\"},\"pagesB/Ticket\":{\"component\":\"index\"},\"pagesB/Ticket-Describe\":{\"component\":\"index\"},\"pagesB/Customer-Service\":{\"component\":\"index\"},\"pagesB/Search\":{\"component\":\"index\"},\"pagesB/Top\":{\"component\":\"index\"},\"pagesC/Start\":{\"component\":\"index\"},\"pagesC/Info\":{\"component\":\"index\"},\"pagesC/Read\":{\"component\":\"index\",\"launchMode\":\"singleTask\"},\"pagesB/Payresult\":{\"component\":\"index\"},\"UnionAd/AdPage\":{\"component\":\"index\"},\"UnionAd/AdLanding\":{\"component\":\"index\"},\"UnionAd/AdReward\":{\"component\":\"index\"},\"pagesC/Empty\":{\"component\":\"index\"},\"pagesB/Privacy-Setting\":{\"component\":\"index\"},\"pagesA/Welfare\":{\"component\":\"index\"},\"pagesA/MyIncome\":{\"component\":\"index\"},\"pagesA/CashOut\":{\"component\":\"index\"},\"pagesA/CashRecord\":{\"component\":\"index\"},\"pagesB/Recommend\":{\"component\":\"index\"},\"pagesB/Recommend-Read\":{\"component\":\"index\"},\"pagesB/Page-Error\":{\"component\":\"index\"},\"pagesC/Notice\":{\"component\":\"index\"},\"pagesA/BackgroundPage\":{\"component\":\"index\",\"launchMode\":\"singleTask\"}},\"widgets\":{}},\"subpackages\":[{\"name\":\"pkgB\",\"resource\":\"pagesB\"},{\"name\":\"pkgA\",\"resource\":\"pagesA\"}],\"display\":{\"themeMode\":0,\"menu\":false,\"titleBar\":false,\"statusBarImmersive\":true,\"statusBarBackgroundOpacity\":0,\"statusBarTextStyle\":\"dark\",\"menuBarData\":{\"menuBar\":false},\"pages\":{\"pagesB/Money\":{\"statusBarTextStyle\":\"light\"},\"pagesB/Top\":{\"statusBarTextStyle\":\"light\"},\"pagesB/Vip\":{\"statusBarTextStyle\":\"light\"},\"pagesA/Welfare\":{\"statusBarTextStyle\":\"light\"},\"pagesC/Read\":{\"fullScreen\":true,\"fitCutout\":\"portrait|landscape\",\"menuBarData\":{\"menuBar\":false}},\"pagesA/WelfareNew\":{\"fullScreen\":true,\"fitCutout\":\"portrait|landscape\",\"statusBarTextStyle\":\"light\",\"menuBarData\":{\"menuBar\":false}},\"pagesA/Main\":{\"menuBarData\":{\"menuBar\":true}},\"UnionAd/AdPage\":{\"fullScreen\":true,\"titleBar\":false,\"statusBarImmersive\":true,\"menu\":false,\"menuBarData\":{\"menuBar\":false}},\"UnionAd/AdReward\":{\"fullScreen\":true,\"titleBar\":false,\"statusBarImmersive\":true,\"menu\":false,\"menuBarData\":{\"menuBar\":false}},\"UnionAd/AdLanding\":{\"fullScreen\":true,\"titleBar\":false,\"statusBarImmersive\":true,\"menu\":false,\"menuBarData\":{\"menuBar\":false}},\"pagesC/Empty\":{\"fullScreen\":true,\"fitCutout\":\"portrait|landscape\"},\"pagesA/BackgroundPage\":{\"fullScreen\":true,\"fitCutout\":\"portrait|landscape\",\"menuBarData\":{\"menuBar\":false}}},\"homePage\":\"pagesA/Main\"}}");
        },
        0x3633: _0x485b2f => {
          "use strict";

          _0x485b2f.exports = JSON.parse("{\"name\":\"union-quick-app-ad\",\"version\":\"1.0.36\",\"description\":\"百度联盟快应用广告sdk\",\"main\":\"app.js\",\"files\":[\"components/*\",\"app.js\"],\"keywords\":[\"快应用\",\"广告\"],\"author\":\"cm-fe\",\"license\":\"ISC\",\"dependencies\":{},\"devDependencies\":{}}");
        },
        0x15bfc: _0x386e32 => {
          "use strict";

          _0x386e32.exports = JSON.parse("{\"PAGE_ENTRY\":{\"type\":\"common\",\"name\":\"页面进入\"},\"POPUP_CLOSE\":{\"type\":\"common\",\"name\":\"弹窗关闭\"},\"PAGE_BACK\":{\"type\":\"common\",\"name\":\"页面返回\"},\"READ_FIRST_NORMAL\":{\"type\":\"custom\",\"name\":\"章首默认\"},\"READ_FIRST_CUSTOM\":{\"type\":\"custom\",\"name\":\"章首自定义\"},\"READ_AD_TEXT_CUSTOM\":{\"type\":\"custom\",\"name\":\"页内自定义\"},\"READ_AD_TEXT_NORMAL\":{\"type\":\"custom\",\"name\":\"页内默认\"},\"READ_MIDDLE_CUSTOM\":{\"type\":\"custom\",\"name\":\"中插自定义\"},\"READ_MIDDLE_NORMAL\":{\"type\":\"custom\",\"name\":\"中插默认\"},\"READ_PAGE_CLICK\":{\"type\":\"custom\",\"name\":\"翻页解锁\"},\"AWARD_CLICK\":{\"type\":\"custom\",\"name\":\"任务奖励点击\"},\"SIGN_IN\":{\"type\":\"custom\",\"name\":\"签到弹窗\"},\"BOX_CLICK\":{\"type\":\"custom\",\"name\":\"宝箱点击\"},\"READ_ADD_DESKTOP\":{\"type\":\"custom\",\"name\":\"加桌\"},\"READ_ADD_DESKTOP_TIMER\":{\"type\":\"custom\",\"name\":\"计时加桌\"},\"READ_PAGE_SWIPE_COIN\":{\"type\":\"custom\",\"name\":\"翻页金币\"},\"READ_PAGE_SWIPE_RED_BAG\":{\"type\":\"custom\",\"name\":\"翻页红包\"},\"READ_TIMER_COIN\":{\"type\":\"custom\",\"name\":\"阅读金币\"},\"READ_MIDDLE_SENCES\":{\"type\":\"custom\",\"name\":\"中插场景\"},\"READ_CHAPTER_END\":{\"type\":\"custom\",\"name\":\"章尾场景\"},\"SCREEN_TOUCH\":{\"type\":\"common\",\"name\":\"开p-ing场景\"},\"SECOND_SCREEN_TOUCH\":{\"type\":\"common\",\"name\":\"双开p-ing场景\"},\"BUBBLE_CLICK\":{\"type\":\"custom\",\"name\":\"点击气泡\"},\"OPEN_RED\":{\"type\":\"custom\",\"name\":\"拆红包\"},\"POWER_SAVING\":{\"type\":\"custom\",\"name\":\"省电\"},\"BRIGHTNESS\":{\"type\":\"custom\",\"name\":\"亮度\"},\"VOLUME\":{\"type\":\"custom\",\"name\":\"声音\"},\"VIDEO_PAUSE\":{\"type\":\"common\",\"name\":\"短剧暂停\"},\"VIDEO_UNLOCK\":{\"type\":\"common\",\"name\":\"切换剧集\"},\"READ_MIDDLE_TURN\":{\"type\":\"common\",\"name\":\"阅读翻页\"},\"TIME_OUT\":{\"type\":\"common\",\"name\":\"定时弹窗\"},\"DIVINATION_POP\":{\"type\":\"common\",\"name\":\"抽签活动弹窗\"},\"CANNON_POP\":{\"type\":\"common\",\"name\":\"炮击活动弹窗\"},\"LOTTERY_COIN_POP\":{\"type\":\"common\",\"name\":\"抽好礼弹窗\"},\"ROPE_USEUP\":{\"type\":\"common\",\"name\":\"套圈次数用完\"},\"ROPE_BAG\":{\"type\":\"common\",\"name\":\"套红包\"},\"ROPE_BOX\":{\"type\":\"common\",\"name\":\"套宝箱\"},\"ROPE_PHONE\":{\"type\":\"common\",\"name\":\"套手机\"},\"OPEN_FERTILIZER\":{\"type\":\"common\",\"name\":\"领肥料\"},\"OPEN_GOLD\":{\"type\":\"common\",\"name\":\"领金币\"},\"OPEN_WATAR\":{\"type\":\"common\",\"name\":\"领水滴\"},\"ANSWER_PROMPT\":{\"type\":\"common\",\"name\":\"答案提示\"},\"WRONG_ANSWER\":{\"type\":\"common\",\"name\":\"回答错误\"},\"CORRECT_ANSWER\":{\"type\":\"common\",\"name\":\"回答正确\"},\"OPEN_RED_GOLD\":{\"type\":\"common\",\"name\":\"拆红包-金币\"},\"DZ_DRAW_GOLD\":{\"type\":\"common\",\"name\":\"大转盘-抽奖领取金币\"},\"DZ_INCREASED_LUCK\":{\"type\":\"common\",\"name\":\"大转盘-幸运增加\"},\"DZ_PRIZE_DOUBLE\":{\"type\":\"common\",\"name\":\"大转盘-奖金翻倍\"},\"DZ_ADD_ONE_TIME\":{\"type\":\"common\",\"name\":\"大转盘-再加1次\"},\"PAGE_CLICK\":{\"type\":\"common\",\"name\":\"页面点击\"},\"CHANGE_PAGE\":{\"type\":\"common\",\"name\":\"翻页弹窗\"},\"DOWNLOAD_IMG\":{\"type\":\"common\",\"name\":\"下载图片\"},\"SCREEN_CLICK\":{\"type\":\"common\",\"name\":\"屏幕点击\"},\"ACCOUNTING\":{\"type\":\"common\",\"name\":\"确认记账\"},\"CHECK_AMOUNT\":{\"type\":\"common\",\"name\":\"支出选项卡\"},\"CHECK_INCOME\":{\"type\":\"common\",\"name\":\"收入选项卡\"},\"PLAY_MIDDLE_CUSTOM\":{\"type\":\"common\",\"name\":\"中插自定义\"},\"PLAY_FIRST_CUSTOM\":{\"type\":\"common\",\"name\":\"章首自定义\"}}");
        },
        0x158b2: _0x3f192e => {
          "use strict";

          _0x3f192e.exports = JSON.parse("{\"/pagesC/Read\":true,\"/pagesA/Welfare\":true,\"/pagesA/WelfareNew\":true,\"/pagesC/Info\":true}");
        },
        0x101b0: _0x4e26da => {
          "use strict";

          _0x4e26da.exports = JSON.parse("[\"GAR-AN60\",\"TYH622M\",\"FIO-BD00\",\"SP210\",\"GAR-AN00\",\"TYH632M\",\"MNT-BD00\",\"VP005\",\"AVA-PA00\",\"LFT-AN00\",\"VP002\",\"SP200\",\"MRK-BD00\",\"SP100\",\"TYH601M\",\"Hera-BD00\",\"MIZ-BD00\",\"Hebe-BD00\",\"TYH611M\",\"TDT-MA01\",\"SP300\",\"TYH612M\",\"VP001\",\"TYH631M\",\"LGN-AN00\",\"ALH-BD00\",\"VP003\",\"VP004\",\"MGZ-BD00\",\"NAT-TN70\"]");
        },
        0xbf07: _0x7b9647 => {
          "use strict";

          _0x7b9647.exports = JSON.parse("{\"READ_CLASSIFY\":{\"path\":\"/pagesA/Main\",\"pageCode\":\"READ_CLASSIFY\",\"pageName\":\"分类页\",\"param\":{\"selectIndex\":3}},\"READ_WELFARETT\":{\"path\":\"/pagesA/welfareTT\",\"pageCode\":\"READ_WELFARETT\",\"pageName\":\"头条福利页\",\"param\":{}},\"READ_MINE\":{\"path\":\"/pagesA/Main\",\"pageCode\":\"READ_MINE\",\"pageName\":\"我的\",\"param\":{\"selectIndex\":4}},\"READ_BOOKINFO\":{\"path\":\"/pagesC/Info\",\"pageCode\":\"READ_BOOKINFO\",\"pageName\":\"小说详情页\",\"param\":{}},\"READ_READINFO\":{\"path\":\"/pagesC/Read\",\"pageCode\":\"READ_READINFO\",\"pageName\":\"阅读页\",\"param\":{}},\"READ_WELFARE\":{\"path\":\"/pagesA/WelfareNew\",\"pageCode\":\"READ_WELFARE\",\"pageName\":\"福利页\",\"param\":{}},\"READ_INCOME\":{\"path\":\"/pagesA/MyIncome\",\"pageCode\":\"READ_INCOME\",\"pageName\":\"收益页\",\"param\":{}},\"READ_CASHOUT\":{\"path\":\"/pagesA/CashOut\",\"pageCode\":\"READ_CASHOUT\",\"pageName\":\"提现页\",\"param\":{}},\"READ_RECORD\":{\"path\":\"/pagesA/CashRecrod\",\"pageCode\":\"READ_RECORD\",\"pageName\":\"记录页\",\"param\":{}},\"READ_MAIN\":{\"path\":\"/pagesA/Main\",\"pageCode\":\"READ_MAIN\",\"pageName\":\"书城页\",\"param\":{\"selectIndex\":1}},\"READ_SHELF\":{\"path\":\"/pagesA/Main\",\"pageCode\":\"READ_SHELF\",\"pageName\":\"书架页\",\"param\":{\"selectIndex\":0}}}");
        },
        0x10bdc: _0x4d0a21 => {
          "use strict";

          _0x4d0a21.exports = JSON.parse("{\"config\":{\"is_reviewer\":{\"op\":\"is\",\"val\":\"2\"},\"boost_group_ad_count\":{\"op\":\"is\",\"val\":\"2\"},\"ad_btn_text_type\":{\"op\":\"is\",\"val\":\"1\"},\"is_used_ad_button\":{\"op\":\"is\",\"val\":\"1\"},\"is_read_first_adscroll_equal_adclick\":{\"op\":\"is\",\"val\":\"2\"},\"ad_first_close_icon_show_type\":{\"op\":\"is\",\"val\":\"2\"},\"ad_read_first_button_animation_type\":{\"op\":\"is\",\"val\":\"2\"},\"ad_read_middle_button_animation_type\":{\"op\":\"is\",\"val\":\"2\"},\"ad_read_first_adscroll_times\":{\"op\":\"is\",\"val\":\"0\"},\"read_view_back_icon_show_type\":{\"op\":\"is\",\"val\":\"2\"},\"ad_dialog_bottom\":{\"op\":\"is\",\"val\":\"\"},\"first_ad_bottom\":{\"op\":\"is\",\"val\":\"\"},\"back_app_button\":{\"op\":\"is\",\"val\":\"2\"},\"page_read_trigger_unlock_pop\":{\"op\":\"is\",\"val\":\"\"},\"read_enable_tags\":{\"op\":\"is\",\"val\":\"\"},\"read_custom_ad_code\":{\"op\":\"is\",\"val\":\"\"},\"read_tags_adscroll_times\":{\"op\":\"is\",\"val\":\"\"},\"ad_read_middle_amount\":{\"op\":\"is\",\"val\":\"\"},\"exceed_ad_read_middle_amount\":{\"op\":\"is\",\"val\":\"\"},\"ad_read_middle_custom_page\":{\"op\":\"is\",\"val\":\"\"},\"style_ad_middle_custom_a\":{\"op\":\"is\",\"val\":\"\"},\"style_ad_middle_custom_b\":{\"op\":\"is\",\"val\":\"\"},\"is_show_desk_float\":{\"op\":\"is\",\"val\":\"1\"},\"is_read_ad_custom_config\":{\"op\":\"is\",\"val\":\"0\"},\"is_first_ad_custom_config\":{\"op\":\"is\",\"val\":\"0\"},\"custom_ad_material_category_code\":{\"op\":\"is\",\"val\":\"\"},\"is_vivo_back_button\":{\"op\":\"is\",\"val\":\"2\"},\"is_open_welfare_menuBar\":{\"op\":\"is\",\"val\":\"1\"},\"main_list_ad\":{\"op\":\"is\",\"val\":\"1\"},\"info_list_ad\":{\"op\":\"is\",\"val\":\"1\"},\"welfare_list_ad\":{\"op\":\"is\",\"val\":\"1\"},\"read_list_ad\":{\"op\":\"is\",\"val\":\"1\"},\"holdup_ad_middle_custom_a\":{\"op\":\"is\",\"val\":\"\"},\"holdup_ad_middle_custom_b\":{\"op\":\"is\",\"val\":\"\"},\"middle_ad_hold_up_style\":{\"op\":\"is\",\"val\":\"1\"},\"middle_ad_lock_times\":{\"op\":\"is\",\"val\":\"0\"},\"middle_lock_toast\":{\"op\":\"is\",\"val\":\"查看广告阅读更多精彩内容\"},\"ads_show_interval_min\":{\"op\":\"is\",\"val\":\"2000\"},\"vivo_queue_request\":{\"op\":\"is\",\"val\":\"1\"},\"banner_afresh_request\":{\"op\":\"is\",\"val\":\"3\"},\"is_hidden_banner\":{\"op\":\"is\",\"val\":\"0\"},\"is_open_advert\":{\"op\":\"is\",\"val\":\"1\"},\"read_bgpic\":{\"op\":\"is\",\"val\":\"1\"},\"read_font\":{\"op\":\"is\",\"val\":\"54\"},\"is_open_banner\":{\"op\":\"is\",\"val\":\"1\"},\"is_open_homeScreen_advert\":{\"op\":\"is\",\"val\":\"0\"},\"is_exempt_ads\":{\"op\":\"is\",\"val\":\"0\"},\"cross_advert\":{\"op\":\"is\",\"val\":\"0\"},\"is_banner_ad\":{\"op\":\"is\",\"val\":\"0\"},\"is_bqt_can_show_dialog\":{\"op\":\"is\",\"val\":\"0\"},\"native_ad_click_interval\":{\"op\":\"is\",\"val\":\"0\"},\"text_ad_trigger_timing\":{\"op\":\"is\",\"val\":\"1\"},\"lock_vivo_back_times\":{\"op\":\"is\",\"val\":\"0\"},\"is_show_last_read_banner\":{\"op\":\"is\",\"val\":\"0\"},\"is_chapter_end_recommend\":{\"op\":\"is\",\"val\":\"0\"},\"add_desktop_pages\":{\"op\":\"is\",\"val\":\"\"},\"is_used_icon_ad\":{\"op\":\"is\",\"val\":\"0\"},\"is_show_notification\":{\"op\":\"is\",\"val\":\"0\"},\"notification_title\":{\"op\":\"is\",\"val\":\"\"},\"notification_text\":{\"op\":\"is\",\"val\":\"\"},\"notification_url\":{\"op\":\"is\",\"val\":\"\"},\"show_add_desktop_second\":{\"op\":\"is\",\"val\":\"0\"},\"page_swipe_red_bag_nums\":{\"op\":\"is\",\"val\":\"0\"},\"page_swipe_coin_nums\":{\"op\":\"is\",\"val\":\"0\"},\"custom_content_code\":{\"op\":\"is\",\"val\":\"\"},\"ad_chapter_end_switch\":{\"op\":\"is\",\"val\":\"0\"},\"chapter_end_red_bag\":{\"op\":\"is\",\"val\":\"0\"},\"chapter_end_reward\":{\"op\":\"is\",\"val\":\"0\"},\"chapter_end_image_width\":{\"op\":\"is\",\"val\":\"0\"},\"chapter_end_free_ad_time\":{\"op\":\"is\",\"val\":\"0\"},\"chapter_end_image_height\":{\"op\":\"is\",\"val\":\"0\"},\"chapter_end_red_bag_img\":{\"op\":\"is\",\"val\":\"\"},\"chapter_end_reward_coin\":{\"op\":\"is\",\"val\":\"100\"}},\"appCode\":\"qudianyuedu\",\"configName\":\"默认配置数据\"}");
        },
        0xa662: _0x28e696 => {
          "use strict";

          _0x28e696.exports = JSON.parse("{\"/pagesC/Start\":{\"pathUrl\":\"启动页\",\"pageCode\":\"DESK_ROOT\"},\"/pagesC/Read\":{\"pathUrl\":\"小说阅读页\",\"pageCode\":\"READ_READINFO\"},\"/pagesC/Info\":{\"pathUrl\":\"小说详情页\",\"pageCode\":\"READ_BOOKINFO\"},\"/pagesB/Login\":{\"pathUrl\":\"登录页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Privacy\":{\"pathUrl\":\"用户隐私协议\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Sex\":{\"pathUrl\":\"性别选择页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Search\":{\"pathUrl\":\"小说搜索页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Account\":{\"pathUrl\":\"我的账单页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Setting\":{\"pathUrl\":\"我的设置页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Vip\":{\"pathUrl\":\"会员中心页\",\"pageCode\":\"READ_COMMON\"},\"/pagesA/Main\":{\"pathUrl\":\"首页\",\"pageCode\":\"MAIN\",\"pathUrl0\":\"书架页\",\"pageCode0\":\"READ_SHELF\",\"pathUrl1\":\"书城页\",\"pageCode1\":\"READ_MAIN\",\"pathUrl2\":\"分类页\",\"pageCode2\":\"READ_CLASSIFY\",\"pathUrl3\":\"我的页\",\"pageCode3\":\"READ_MINE\"},\"/pagesB/Money\":{\"pathUrl\":\"充值页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Customer-Service\":{\"pathUrl\":\"联系客服页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Payresult\":{\"pathUrl\":\"支付结果页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Ticket\":{\"pathUrl\":\"金币页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Ticket-Describe\":{\"pathUrl\":\"金币说明页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Activity\":{\"pathUrl\":\"分享好友页\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Subscribe\":{\"pathUrl\":\"订阅页面\",\"pageCode\":\"READ_SUBSCRIBE\"},\"/pagesA/WelfareNew\":{\"pathUrl\":\"福利页\",\"pageCode\":\"READ_WELFARE\"},\"/pagesA/Welfare\":{\"pathUrl\":\"福利页\",\"pageCode\":\"READ_WELFARE\"},\"/pagesA/MyIncome\":{\"pathUrl\":\"收益页\",\"pageCode\":\"READ_INCOME\"},\"/pagesA/CashOut\":{\"pathUrl\":\"提现页\",\"pageCode\":\"READ_CASHOUT\"},\"/pagesA/CashRecord\":{\"pathUrl\":\"记录页\",\"pageCode\":\"READ_CASHRECORD\"},\"/pagesB/Privacy-Setting\":{\"pathUrl\":\"隐私设置\",\"pageCode\":\"READ_COMMON\"},\"/pagesB/Vip-Agreement\":{\"pathUrl\":\"协议页\",\"pageCode\":\"VIP_AGREEMENT\"},\"/pagesA/BackgroundPage\":{\"pathUrl\":\"背景页\",\"pageCode\":\"BACKGROUND_PAGE\"}}");
        },
        0x452f: _0x468c09 => {
          "use strict";

          _0x468c09.exports = JSON.parse("{\"configInfo\":{\"config\":{},\"appCode\":\"newshiyueread\",\"configName\":\"默认本地配置数据\"},\"routesInfo\":{\"appCode\":\"newshiyueread\",\"routerName\":\"本地默认路由\",\"routers\":[{\"router\":\"/pagesC/Read\",\"page_code\":\"READ_READINFO\",\"page_name\":\"阅读页\"},{\"router\":\"/pagesA/WelfareNew\",\"page_code\":\"READ_WELFARE\",\"page_name\":\"福利页\"},{\"router\":\"/pagesA/Main?selectIndex=1\",\"page_code\":\"READ_MAIN\",\"page_name\":\"书城页\"}]},\"tacticsInfo\":{\"pageTactics\":[{\"page_code\":\"READ_READINFO\",\"page_origin\":\"CHANNEL_ROOT\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}]}},{\"page_code\":\"READ_WELFARE\",\"page_origin\":\"READ_READINFO\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}],\"PAGE_ENTRY\":[{\"popup_code\":\"Box_fN1YDUS9\"}],\"POPUP_CLOSE\":[{\"popup_code\":\"Box_fN1YDUS9\",\"next_popup_code\":\"SignIn_PO0msjJq\"}]}},{\"page_code\":\"READ_MAIN\",\"page_origin\":\"READ_WELFARE\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_READINFO\",\"page_origin\":\"READ_SHELF\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}]}},{\"page_code\":\"READ_READINFO\",\"page_origin\":\"READ_MAIN\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}]}},{\"page_code\":\"READ_READINFO\",\"page_origin\":\"READ_BOOKINFO\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}]}},{\"page_code\":\"READ_WELFARE\",\"page_origin\":\"READ_SHELF\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}],\"PAGE_ENTRY\":[{\"popup_code\":\"Box_fN1YDUS9\"}]}},{\"page_code\":\"READ_WELFARE\",\"page_origin\":\"READ_MAIN\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}],\"PAGE_ENTRY\":[{\"popup_code\":\"SignIn_PO0msjJq\"}]}},{\"page_code\":\"READ_MAIN\",\"page_origin\":\"READ_SHELF\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_MAIN\",\"page_origin\":\"READ_BOOKINFO\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_MAIN\",\"page_origin\":\"READ_MINE\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_MAIN\",\"page_origin\":\"READ_COMMON\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_WELFARE\",\"page_origin\":\"READ_MINE\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}],\"PAGE_ENTRY\":[{\"popup_code\":\"SignIn_PO0msjJq\"}]}},{\"page_code\":\"READ_WELFARE\",\"page_origin\":\"READ_COMMON\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Back_r3ejNLVa\"}],\"PAGE_ENTRY\":[{\"popup_code\":\"SignIn_PO0msjJq\"}]}},{\"page_code\":\"READ_SHELF\",\"page_origin\":\"READ_WELFARE\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_SHELF\",\"page_origin\":\"READ_MAIN\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_SHELF\",\"page_origin\":\"READ_MINE\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_SHELF\",\"page_origin\":\"READ_COMMON\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_MINE\",\"page_origin\":\"READ_WELFARE\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_MINE\",\"page_origin\":\"READ_MAIN\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_MINE\",\"page_origin\":\"READ_SHELF\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_MINE\",\"page_origin\":\"READ_COMMON\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_SHELF\",\"page_origin\":\"READ_BOOKINFO\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_CLASSIFY\",\"page_origin\":\"READ_MAIN\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_CLASSIFY\",\"page_origin\":\"READ_SHELF\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_CLASSIFY\",\"page_origin\":\"READ_WELFARE\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_CLASSIFY\",\"page_origin\":\"READ_MINE\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}},{\"page_code\":\"READ_CLASSIFY\",\"page_origin\":\"READ_COMMON\",\"popup_config\":{\"PAGE_BACK\":[{\"popup_code\":\"Exit_tYQm7WXc\"}]}}],\"appCode\":\"newshiyueread\",\"tacticsName\":\"本地默认配置\",\"popups\":\"ExtraAward_6gU3D4rv,Award_z7JQ2xE3,GetWay_bcZiJE6s\"},\"popupInfo\":{\"READ_WELFARE\":\"Box_3LS9vea1,Box_eEg5NB2r,Box_bAg3TVLJ,Box_3BnJmAF6,Back_GZtfYwuq,Back_PdLevYFG,Back_tE9DOxus,Back_v6W3SV9E,SignIn_PO0msjJq,Back_FM39QS4m,Box_fB4mv61T,Box_fN1YDUS9,Back_r3ejNLVa\",\"READ_MAIN\":\"Exit_l2HuT6oO,Exit_mwCitjG9,Exit_YPJVSrj5,Exit_hZRPJ871,Exit_tYQm7WXc\",\"READ_MINE\":\"Exit_l2HuT6oO,Exit_mwCitjG9,Exit_YPJVSrj5,Exit_hZRPJ871,Exit_tYQm7WXc\",\"READ_SHELF\":\"Exit_l2HuT6oO,Exit_mwCitjG9,Exit_YPJVSrj5,Exit_hZRPJ871,Exit_tYQm7WXc\",\"READ_CLASSIFY\":\"Exit_l2HuT6oO,Exit_mwCitjG9,Exit_YPJVSrj5,Exit_hZRPJ871,Exit_tYQm7WXc\",\"READ_READINFO\":\"Back_uKxhNLc5,Back_1bJs6pat,Back_IF7aLVqh,Back_ziJyWrBp,Back_r3ejNLVa\"}}");
        },
        0x1547a: _0x5a72a8 => {
          "use strict";

          _0x5a72a8.exports = JSON.parse("{\"dev\":\"3iNHIi2pMIakh-LV\",\"pro\":\"TtelDGiOcqP-_jc3\"}");
        }
      };
      var _0x3c1ff9 = {};
      function _0x22e5c7(_0x527305) {
        var _0x4753e6 = _0x3c1ff9[_0x527305];
        if (undefined !== _0x4753e6) {
          return _0x4753e6.exports;
        }
        var _0x387ca9 = _0x3c1ff9[_0x527305] = {
          exports: {}
        };
        _0x45468b[_0x527305](_0x387ca9, _0x387ca9.exports, _0x22e5c7);
        return _0x387ca9.exports;
      }
      _0x22e5c7.g = function () {
        if ("object" == typeof globalThis) {
          return globalThis;
        }
        try {
          return this || new Function("return this")();
        } catch (_0x342847) {
          if ("object" == typeof window) {
            return window;
          }
        }
      }();
      _0x22e5c7.o = (_0x5bbf93, _0x156a78) => Object.prototype.hasOwnProperty.call(_0x5bbf93, _0x156a78);
      var _0x4fe20c;
      var _0x341d2e;
      _0x4fe20c = {};
      _0x341d2e = _0x22e5c7(0xcb04);
      $app_define$("@app-application/app", [], function (_0x150c61, _0x232ec0, _0x56a289) {
        _0x341d2e(_0x56a289, _0x232ec0, _0x150c61);
        if (_0x232ec0.__esModule && _0x232ec0["default"]) {
          _0x56a289.exports = _0x232ec0["default"];
        }
        _0x56a289.exports.manifest = _0x22e5c7(0xa676);
        _0x56a289.exports.style = {
          list: [_0x4fe20c]
        };
      });
      $app_bootstrap$("@app-application/app", {
        packagerVersion: "1.9.16"
      });
    })();
  };
  if ("undefined" == typeof window) {
    return _0x2eac28();
  }
  window.createAppHandler = _0x2eac28;
  global.manifest = _0xd184a8;
})();