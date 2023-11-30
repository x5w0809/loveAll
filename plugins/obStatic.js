/* eslint-disable no-useless-escape */
import AOS from 'aos'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

if (process.client) {
  ;(function (OB_STATIC) {
    OB_STATIC.AOS_animation = function () {
      // 首頁各區塊動畫 ex:data-aos="fade-up"
      AOS.init({
        // Global settings:
        // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        // initClassName: 'aos-init', // class applied after initialization
        // animatedClassName: 'aos-animate', // class applied on animation
        // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        /// / Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        // offset: 120, // offset (in px) from the original trigger point
        delay: 300, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease-out-new1', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      })
    }
    // get window width
    OB_STATIC.GetWindowWidth = function () {
      if (self.innerWidth) {
        return self.innerWidth
      }
      if (document.documentElement && document.documentElement.clientWidth) {
        return document.documentElement.clientWidth
      }
      if (document.body) {
        return document.body.clientWidth
      }
    }
    // check isMobile
    OB_STATIC.isMobile = function () {
      let isMobile = false // initiate as false
      // device detection
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4)
        )
      ) {
        isMobile = true
      }
      return isMobile
    }
    // check isIE
    OB_STATIC.isIE = function () {
      var ua = window.navigator.userAgent
      var msie = ua.indexOf('MSIE ')
      var result = false
      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        // If Internet Explorer, return version number
        // alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        result = true
      } // If another browser, return 0
      else {
        // alert('otherbrowser');
        result = false
      }

      return result
    }
    OB_STATIC.docReady = function (fn) {
      // see if DOM is already available
      if (
        document.readyState === 'complete' ||
        document.readyState === 'interactive'
      ) {
        // call on next available tick
        setTimeout(fn, 1)
      } else {
        document.addEventListener('DOMContentLoaded', fn)
      }
    }
    OB_STATIC.OB_getAnchorOffsetY = function (targetEl) {
      const rectTarget = targetEl.getBoundingClientRect()
      const offsetY = targetEl.dataset.anchorOffsetY
      const offsetY_mb = targetEl.dataset.anchorOffsetYMb
      const offsetYBottomToTop = targetEl.dataset.anchorOffsetYBottomToTop
      let extraY = 0
      if (window.OB_STATIC.GetWindowWidth() <= 768 && offsetY_mb) {
        if (offsetY_mb && offsetY_mb.indexOf('%') > -1) {
          extraY =
            (parseFloat(offsetY_mb.replace('%', '')) / 100) * rectTarget.height
        } else {
          if (offsetY_mb) extraY = offsetY_mb
        }
      } else {
        if (offsetY && offsetY.indexOf('%') > -1) {
          extraY =
            (parseFloat(offsetY.replace('%', '')) / 100) * rectTarget.height
        } else {
          if (offsetY) extraY = offsetY
        }

        if (rectTarget.y <= 0 && offsetYBottomToTop) {
          if (offsetYBottomToTop.indexOf('%') > -1) {
            extraY =
              (parseFloat(offsetYBottomToTop.replace('%', '')) / 100) *
              rectTarget.height
          } else {
            extraY = offsetYBottomToTop
          }
        }
      }
      extraY = extraY * -1

      return extraY
    }
    OB_STATIC.OB_gotoSection = function (selector) {
      var _offsetY = 0
      var _dur = 2
      var speed = 0
      var bodyHeight = window.document.body.clientHeight
      var targetDistance = 0
      if (selector !== 0) {
        var target = document.querySelector(selector)
        var targetRect = target.getBoundingClientRect()
        _offsetY = window.OB_STATIC.OB_getAnchorOffsetY(target)
        //計算速度
        targetDistance = Math.abs(
          window.scrollY - (targetRect.top + window.scrollY)
        )
        speed = (targetDistance / bodyHeight) * _dur
        speed = speed < 0.5 ? 0.5 : speed
      } else {
        _offsetY = 0

        //計算速度
        speed = (window.scrollY / bodyHeight) * _dur
      }
      gsap.to(window, {
        duration: speed,
        scrollTo: { y: selector, offsetY: _offsetY },
        ease: 'power3.inOut',
      })
    }
    OB_STATIC.Cubic = function (a, b, c, d) {
      var _this = this
      _this.px3 = 3 * a
      _this.px2 = 3 * (c - a) - _this.px3
      _this.px1 = 1 - _this.px3 - _this.px2
      _this.py3 = 3 * b
      _this.py2 = 3 * (d - b) - _this.py3
      _this.py1 = 1 - _this.py3 - _this.py2
      _this.epsilon = 1e-7 // 目标精度

      _this.getX = function (t) {
        return ((_this.px1 * t + _this.px2) * t + _this.px3) * t
      }

      _this.getY = function (t) {
        return ((_this.py1 * t + _this.py2) * t + _this.py3) * t
      }

      _this.solve = function (x) {
        if (x === 0 || x === 1) {
          // 对 0 和 1 两个特殊 t 不做计算
          return _this.getY(x)
        }
        var t = x
        for (var i = 0; i < 8; i++) {
          // 进行 8 次迭代
          var g = _this.getX(t) - x
          if (Math.abs(g) < _this.epsilon) {
            // 检测误差到可以接受的范围
            return _this.getY(t)
          }
          var d = (3 * _this.px1 * t + 2 * _this.px2) * t + _this.px3 // 对 x 求导
          if (Math.abs(d) < 1e-6) {
            // 如果梯度过低，说明牛顿迭代法无法达到更高精度
            break
          }
          t = t - g / d
        }
        return _this.getY(t) // 对得到的近似 t 求 y
      }
    }
    OB_STATIC.TimeMagic = function (speed) {
      class TimeMagic {
        constructor(speed) {
          this.accumulateTime = -1
          this.lastTime = -1
          this.speed = speed
        }

        updateTime(t) {
          if (this.accumulateTime === -1) {
            this.accumulateTime = t
          } else {
            const deltaT = t - this.lastTime
            this.accumulateTime += deltaT * this.speed
          }

          this.lastTime = t
        }

        updateSpeed(speed) {
          this.speed = speed
        }

        getTime() {
          return this.accumulateTime
        }
      }

      return new TimeMagic(speed)
    }
    OB_STATIC.LineIt_LoadButton = function () {
      LineIt.loadButton()
    }

    OB_STATIC.isWebview = function () {
      var useragent = navigator.userAgent
      var rules = [
        'WebView',
        '(iPhone|iPod|iPad)(?!.*Safari/)',
        'Android.*(wv|.0.0.0)',
      ]
      var regex = new RegExp(`(${rules.join('|')})`, 'ig')
      return Boolean(useragent.match(regex))
    }
  })((window.OB_STATIC = window.OB_STATIC || {}))
}
