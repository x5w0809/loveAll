import Animejs from 'animejs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(MotionPathPlugin)
if (process.client) {
    const _cusEase1 = 'cusEase1'
    const _cusEase2 = 'cusEase2'
    const easePower1In = 'power1.in'
    const easePower1InOut = 'power1.inOut'
    const _preventOverlaps = 'group1'
    const _anticipatePin = 1
    var rainBowDisplay = false
    const merge = (target, source) => {
        // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
        for (const key of Object.keys(source)) {
            if (source[key] instanceof Object) Object.assign(source[key], merge(target[key], source[key]))
        }

        // Join `target` and modified `source`
        Object.assign(target || {}, source)
        return target
    }
    var random = function (min, max) {
        return Math.random() * (max - min) + min
    }
    window.OB_bannerAnime = function (_isMobile, self) {
        var banner = document.querySelector('#banner')
        var bannerBox = banner.querySelector('.banner--box')
        var bannerBoxRec = bannerBox.getBoundingClientRect()
        var stuffEl = bannerBox.querySelectorAll('[data-stuff]')

        var cloudEl = bannerBox.querySelectorAll('.cloud-anime')
        var ttEl = bannerBox.querySelectorAll('.tt-anime')
        var titleBgEl = bannerBox.querySelector('.title-bg-anime')
        var P500El = bannerBox.querySelector('.P500-anime')
        var peopleEl = bannerBox.querySelector('.people-anime')
        var menEl = bannerBox.querySelector('.men-anime')
        var womenEl = bannerBox.querySelector('.women-anime')
        var leaf01El = bannerBox.querySelector('.leaf-01-anime')
        var leaf02El = bannerBox.querySelector('.leaf-02-anime')
        var P10El = bannerBox.querySelector('.P10-anime')
        var P300El = bannerBox.querySelector('.P300-anime')
        var treeEl = bannerBox.querySelector('.tree-anime')
        var dateEl = bannerBox.querySelector('.date-anime')
        var watermelonEl = bannerBox.querySelector('.watermelon-anime')
        var crabEl = bannerBox.querySelector('.crab-anime')
        var menShadowEl = bannerBox.querySelector('.men-shadow-anime')
        var womenShadowEl = bannerBox.querySelector('.women-shadow-anime')
        var bgEl = bannerBox.querySelector('.bg-anime')

        gsap.registerEffect({
            name: 'shakeAppear',
            effect: (targets, config) => {
                const duration_s = 0.5
                let delay = gsap.utils.distribute(config.stagger)
                let animation = gsap.timeline()
                targets.forEach((target, i) => {
                    const tl = gsap
                        .timeline({
                            delay: 0,
                            paused: false,
                        })
                        .to(
                            target,
                            {
                                duration: 0.6,
                                keyframes: {
                                    '0%': { opacity: 0, rotate: 0, scale: 1 },
                                    // '25%': { opacity: 1 },
                                    '40%': { rotate: `-10deg`, scale: 1.5 },
                                    '60%': { rotate: `6deg` },
                                    '80%': { rotate: `-3deg` },
                                    '100%': {
                                        rotate: `0deg`,
                                        scale: 1,
                                        opacity: 1,
                                    },
                                    //easeEach: 'power3.out',
                                },
                                ease: 'power1.out',
                            },
                            0.2
                        )
                        .to(
                            target,
                            {
                                duration: 0.8,
                                keyframes: {
                                    '0%': { y: '0%' },
                                    '50%': { y: '-20%', ease: 'power1.in' },
                                    '100%': { y: 0, ease: 'power1.out' },
                                    //easeEach: 'power3.out',
                                },
                                //ease: 'power1.out',
                            },
                            0
                        )
                    animation.add(tl, delay(i, target, targets))
                })
                return animation
            },
            defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
            extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
        })

        const tl = gsap.timeline({
            delay: 0,
            paused: true,
        })

        tl.set([stuffEl], {
            opacity: 0,
        })
            .addLabel('start')
            .shakeAppear(
                [ttEl, peopleEl, P500El],
                {
                    duration: 2,
                    stagger: {
                        // wrap advanced options in an object
                        each: 0.1,
                        ease: 'power1.inOut',
                    },
                },
                'start'
            )
            .addLabel('ttEnd')
            .to(
                [titleBgEl],
                {
                    keyframes: {
                        '0%': { opacity: 0, scale: 0.8 },
                        '100%': { opacity: 1, scale: 1 },
                        easeEach: 'elastic.out(1.5, 0.3)',
                    },
                    //ease: 'elastic.out(1.5, 0.5)',
                    duration: 2.5,
                },
                'start+=0.2'
            )
            .to(
                [bgEl],
                {
                    keyframes: {
                        '0%': { scale: 1 },
                        '35%': { scale: 1.1 },
                        '55%': { scale: 1 },
                        '70%': { scale: 1.04 },
                        '100%': { scale: 1 },
                    },
                    //ease: 'elastic.out(1.5, 0.5)',
                    duration: 1.2,
                },
                'start+=0.3'
            )
            .shakeAppear(
                [leaf02El, leaf01El, treeEl, menEl, womenEl, P10El, P300El, watermelonEl, crabEl],
                {
                    duration: 1.5,
                    stagger: {
                        // wrap advanced options in an object
                        each: 0.15,
                        ease: 'power1.inOut',
                    },
                },
                'start'
            )
            .addLabel('stuffEnd')
            .to(
                [dateEl],
                {
                    opacity: 1,
                    //ease: 'elastic.out(1.5, 0.5)',
                    duration: 1,
                },
                'ttEnd'
            )
            .to(
                [menShadowEl, womenShadowEl],
                {
                    keyframes: {
                        '0%': { rotate: `-15deg`, transformOrigin: '0 100%' },
                        '100%': { rotate: `0deg`, opacity: 1 },
                    },
                    //ease: 'elastic.out(1.5, 0.5)',
                    stagger: 0.15,
                    duration: 1.5,
                },
                'stuffEnd-=100%'
            )
            .to(
                [cloudEl],
                {
                    keyframes: {
                        '0%': { opacity: 0, x: '-50%' },
                        '100%': { opacity: 1, x: 0 },
                    },
                    //ease: 'elastic.out(1.5, 0.5)',
                    stagger: {
                        // wrap advanced options in an object
                        each: 0.1,
                        from: 'random',
                        ease: 'power1.inOut',
                    },
                    duration: 2,
                },
                'stuffEnd-=100%'
            )

        return tl
    }
    window.OB_sectionScheduleScrollAnime = function (_maxRecommend) {
        const _duration = 1
        const el_sectionProgress = document.querySelector('.section_progress')
        const el_progressLine = document.querySelector('#progressLine')
        const el_line_solid = document.querySelector('#line_solid')

        const count =
            el_line_solid.dataset.count > _maxRecommend ? _maxRecommend : parseInt(el_line_solid.dataset.count)

        if (count <= 0) return

        let el_flagBoxs = document.querySelectorAll('.flagBox')
        const filter = Array.prototype.filter
        const el_flagBoxs_filtered = filter.call(el_flagBoxs, function (item) {
            const data_index = parseInt(item.dataset.position)
            return data_index <= count
        })
        let el_phrase_balls = document.querySelectorAll('.phrase_ball')
        const el_phrase_balls_filtered = filter.call(el_phrase_balls, function (item) {
            const data_index = parseInt(item.dataset.position)
            return data_index <= count
        })

        const el_phrase_balls_filtered_pre = el_phrase_balls_filtered.slice(0, el_phrase_balls_filtered.length - 1)
        const el_phrase_balls_filtered_last = el_phrase_balls_filtered[el_phrase_balls_filtered.length - 1]

        const progressValue = count / _maxRecommend + 0.01
        const flag_tl = gsap
            .timeline({
                delay: 0,
                paused: true,
            })
            .to(el_phrase_balls_filtered, {
                color: '#427913',
                ease: 'elastic.out(1, 0.75)',
                duration: 1,
                stagger: 0.5,
            })

        const schedule_tl = gsap
            .timeline({
                delay: 0,
                paused: true,
            })
            .to(el_line_solid, {
                width: `${progressValue * 100}%`,
                duration: _duration,
                ease: easePower1In,
            })
            .to(el_flagBoxs, {
                scaleY: 1,
                ease: 'elastic.out(1, 0.75)',
                duration: 1,
            })
            .to(
                el_phrase_balls_filtered_last,
                {
                    scale: count % 2 === 0 ? 0 : 1,
                    ease: 'elastic.out(1, 0.75)',
                    duration: 1,
                },
                '-=1'
            )

        ScrollTrigger.create({
            trigger: el_sectionProgress,
            animation: schedule_tl,
            start: '50% 100%',
            end: '100% 100%',
            ease: 'power3.out',
            scrub: 1,
            // markers: true,
            // anticipatePin: _anticipatePin,
            // snap: 1,
        })
        ScrollTrigger.create({
            trigger: el_sectionProgress,
            animation: flag_tl,
            start: '50% 100%',
            end: '100% 100%',
            ease: 'power3.out',
            scrub: 1,
            // markers: true,
            // anticipatePin: _anticipatePin,
            // snap: 1,
        })
    }
    window.OB_displayAnime = function (animeIndex) {
        var animeDiv = '.lineIcon__' + animeIndex + '-anime'
        var animeTitle = '.lineTitle__' + animeIndex + '-anime'
        var animeLoc = '.lineLoc__' + animeIndex + '-anime'
        var animeDes = '.lineDes__' + animeIndex + '-anime'
        Animejs({
            targets: animeLoc,
            keyframes: [
                {
                    scale: 1.3,
                    duration: 200,
                    easing: 'cubicBezier(.25,.1,.25,1.8)',
                },
                {
                    scale: 1,
                    duration: 300,
                    easing: 'cubicBezier(.25,.1,.25,1)',
                },
            ],
        })
        // Animejs({
        //     targets: animeTitle,
        //     keyframes: [
        //         {
        //             scale: 0.3,
        //             duration: 0,
        //         },
        //         {
        //             scale: 1,
        //             duration: 500,
        //         },
        //     ],
        //     easing: 'cubicBezier(.25,.1,.25,1)',
        //     delay: 100,
        // })
        Animejs({
            targets: animeDiv,
            keyframes: [
                {
                    scale: 0.3,
                    duration: 0,
                },
                {
                    scale: 1,
                    duration: 500,
                },
            ],
            easing: 'cubicBezier(.25,.1,.25,1)',
            delay: 200,
        })
        Animejs({
            targets: animeDes,
            keyframes: [
                {
                    opacity: 0,
                    translateY: 30,
                },
                {
                    opacity: 1,
                    translateY: 0,
                },
            ],
            duration: 500,
            easing: 'cubicBezier(.25,.1,.25,1)',
            delay: 200,
        })
    }
    window.OB_hideAnime = function (animeIndex) {
        var animeDiv = '.lineIcon__' + animeIndex + '-anime'
        var animeTitle = '.lineTitle__' + animeIndex + '-anime'
        var animeLoc = '.lineLoc__' + animeIndex + '-anime'
        var animeDes = '.lineDes__' + animeIndex + '-anime'
        // Animejs({
        //     targets: animeTitle,
        //     scale: 0.3,
        //     duration: 1000,
        //     easing: 'cubicBezier(.25,.1,.25,1)',
        // })
        Animejs({
            targets: animeDiv,
            scale: 0.3,
            duration: 1000,
            easing: 'cubicBezier(.25,.1,.25,1)',
            delay: 100,
        })
        Animejs({
            targets: animeDes,
            keyframes: [
                {
                    opacity: 1,
                    translateY: 0,
                },
                {
                    opacity: 0,
                    translateY: 30,
                },
            ],
            duration: 500,
            easing: 'cubicBezier(.25,.1,.25,1)',
            delay: 200,
        })
    }
    window.OB_rainbowAnime = function () {
        Animejs({
            targets: '.line_svg2',
            keyframes: [
                {
                    opacity: 0,
                    duration: 0,
                },
                {
                    opacity: 1,
                },
            ],
            duration: 800,
            easing: 'cubicBezier(.25,.1,.25,1)',
        })
        Animejs({
            targets: '#redPoint',
            keyframes: [
                {
                    opacity: 1,
                    duration: 0,
                },
                {
                    opacity: 0,
                },
            ],
            duration: 500,
            easing: 'cubicBezier(.25,.1,.25,1)',
        })
    }
    window.OB_rainbowBackAnime = function () {
        Animejs({
            targets: '.line_svg2',
            keyframes: [
                {
                    opacity: 1,
                    duration: 0,
                },
                {
                    opacity: 0,
                },
            ],
            duration: 800,
            easing: 'cubicBezier(.25,.1,.25,1)',
        })
        Animejs({
            targets: '#redPoint',
            keyframes: [
                {
                    opacity: 0,
                    duration: 0,
                },
                {
                    opacity: 1,
                },
            ],
            duration: 500,
            easing: 'cubicBezier(.25,.1,.25,1)',
        })
    }
    window.OB_redPointPop = function () {
        const scaleNum = 1.5
        var tl = Animejs.timeline({
            duration: 500,
            delay: 500,
            loop: true,
            easing: 'cubicBezier(.25,.1,.25,1)',
        })
        tl.add({
            targets: '#redPoint2',
            scale: 1.6 * scaleNum,
            opacity: 0,
        }).add(
            {
                targets: '#redPoint3',
                scale: 2.5 * scaleNum,
                opacity: 0,
            },
            0
        )
    }
    window.OB_scrollMapAnime = function () {
        var map = document.querySelector('.line-anime')
        var balloonRightSvgEl = document.querySelector('#line_svg')
        var balloonRightSvgPathEl = document.querySelector('#line_svg path')
        var balloonRightSvgPathEl_Dashoffset = 3000
        var defaultVal = balloonRightSvgPathEl_Dashoffset * -1
        var newVal = defaultVal
        balloonRightSvgEl.style.strokeDashoffset = newVal
        balloonRightSvgEl.style.strokeDasharray = balloonRightSvgPathEl_Dashoffset

        const percentAry = [0.91, 0.83, 0.68, 0.58, 0.48, 0.31, 0.2, 0.1, 0.02]
        const progressAry = []
        percentAry.forEach((x) => {
            const obj = {
                trigger: x * balloonRightSvgPathEl_Dashoffset * -1,
                isStart: false,
            }
            progressAry.push(obj)
        })
        gsap.to(map, {
            scrollTrigger: {
                trigger: map,
                start: 'top 0%',
                end: `150% 0%`,
                scrub: 1,
                pin: true,
            },
        })
        gsap.to('#redPoint', {
            scrollTrigger: {
                trigger: '#pathRoad',
                start: 'top 0%',
                end: `200% 0%`,
                scrub: 1,
                onUpdate: (self) => {
                    let _Dashoffset =
                        balloonRightSvgPathEl_Dashoffset * -1 +
                        balloonRightSvgPathEl_Dashoffset * parseFloat(self.progress)
                    if (_Dashoffset < newVal) _Dashoffset = newVal
                    balloonRightSvgEl.style.strokeDashoffset = _Dashoffset
                    progressAry.forEach((element, index) => {
                        const next = progressAry[index + 1]
                        const last = progressAry[index - 1]
                        var animeIndex = index + 1
                        let current = null
                        if (_Dashoffset >= element.trigger) {
                            current = element
                            if (!current.isStart) {
                                window.OB_displayAnime(animeIndex)
                            }
                            current.isStart = true
                        } else if (_Dashoffset <= element.trigger) {
                            current = element
                            if (current.isStart) {
                                window.OB_hideAnime(animeIndex)
                            }
                            current.isStart = false
                        }
                        if (_Dashoffset >= 0) {
                            window.OB_rainbowAnime()
                            rainBowDisplay = true
                        } else if (_Dashoffset < 0 && rainBowDisplay) {
                            window.OB_rainbowBackAnime()
                            rainBowDisplay = false
                        }
                    })
                },
            },
            duration: 10,
            ease: 'none',
            immediateRender: true,
            motionPath: {
                path: '#pathRoad',
                align: '#pathRoad',
                start: 0.97,
                end: 0,
                alignOrigin: [0.5, 0],
                autoRotate: 90,
            },
        })
        window.OB_redPointPop()
    }
    window.OB_scrollMapAnime_mb = function () {
        var map = document.querySelector('.line-anime')
        var balloonRightSvgEl = document.querySelector('#line_svg_mb')
        var balloonRightSvgPathEl = document.querySelector('#line_svg_mb path')
        var balloonRightSvgPathEl_Dashoffset = 3500
        balloonRightSvgEl.style.strokeDashoffset = balloonRightSvgPathEl_Dashoffset * 1
        balloonRightSvgEl.style.strokeDasharray = balloonRightSvgPathEl_Dashoffset
        const percentAry = [0.92, 0.85, 0.68, 0.55, 0.5, 0.4, 0.25, 0.14, 0.02]
        const progressAry = []
        percentAry.forEach((x) => {
            const obj = {
                trigger: x * balloonRightSvgPathEl_Dashoffset,
                isStart: false,
            }
            progressAry.push(obj)
        })
        // gsap.to(map, {
        //     scrollTrigger: {
        //         trigger: map,
        //         start: 'top 70%',
        //         end: `bottom 60%`,
        //         scrub: 2,
        //         pin: false,
        //         //markers: true,
        //     },
        // })
        gsap.to('#redPoint', {
            scrollTrigger: {
                trigger: '#pathRoad_mb',
                start: 'top 80%',
                end: `100% 50%`,
                scrub: 1,
                onUpdate: (self) => {
                    const _Dashoffset =
                        balloonRightSvgPathEl_Dashoffset * 1 -
                        balloonRightSvgPathEl_Dashoffset * parseFloat(self.progress)
                    balloonRightSvgEl.style.strokeDashoffset = _Dashoffset
                    progressAry.forEach((element, index) => {
                        const next = progressAry[index + 1]
                        const last = progressAry[index - 1]
                        var animeIndex = index + 1
                        let current = null
                        if (_Dashoffset <= element.trigger) {
                            current = element
                            if (!current.isStart) {
                                window.OB_displayAnime(animeIndex)
                            }
                            current.isStart = true
                        } else if (_Dashoffset >= element.trigger) {
                            current = element
                            if (current.isStart) {
                                window.OB_hideAnime(animeIndex)
                            }
                            current.isStart = false
                        }
                        if (_Dashoffset <= 0) {
                            window.OB_rainbowAnime()
                            rainBowDisplay = true
                        } else if (_Dashoffset >= 0 && rainBowDisplay) {
                            window.OB_rainbowBackAnime()
                            rainBowDisplay = false
                        }
                    })
                },
            },
            duration: 10,
            ease: 'none',
            immediateRender: true,
            motionPath: {
                path: '#pathRoad_mb',
                align: '#pathRoad_mb',
                start: 0,
                end: 1,
                alignOrigin: [0.5, 0],
                autoRotate: 90,
            },
        })
        window.OB_redPointPop()
    }
    $.fn.menuFloat = function (options) {
        //top
        //right-bottom,right,right-top
        //bottom
        //left-bottom,left,left-top
        var defaults = {
            activeClass: '',
            position: 'right',
            scrollHeight_show: 0, //px
            responsive: {},
            responsiveRefreshRate: 50,
            responsiveBaseElement: window,
            responsiveTemp: null,
            resizeTimer: null,
        }
        var settings = (this.options = $.extend(
            {
                ori_activeClass: 'float-bar-fixed',
            },
            defaults,
            options
        ))

        var $this = $(this),
            $body = $('body')

        $body.addClass(settings.ori_activeClass).addClass(settings.activeClass)

        var _loadfloat = function (loadttype, refresh) {
            refresh = !refresh ? false : refresh
            if (refresh) {
                var getClass = $this
                    .attr('class')
                    .split(' ')
                    .filter(function (item, index) {
                        return item.indexOf('fbf-') > -1
                    })
                $this
                    .removeClass(getClass)
                    .addClass('menufloat')
                    .addClass('fbf-' + settings.position)
            }

            // if ($(window).scrollTop() >= settings.scrollHeight_show) {
            if ($(window).scrollTop() >= document.body.clientHeight * settings.scrollHeight_show) {
                $this.addClass('active').removeClass('inactive')
                //$this.addClass("active");
            } else {
                if (loadttype == 'scroll' && $this.hasClass('active')) {
                    $this
                        .addClass('inactive')
                        .delay(100)
                        .stop()
                        .promise()
                        .done(function () {
                            $this.removeClass('active')
                        })
                }
                //$this.removeClass("active");
            }
        }

        var setup = function (type) {
            var overwrites = options ? (options.hasOwnProperty('responsive') ? options.responsive : null) : null,
                match = -1

            if (!overwrites) {
                settings = $.extend({}, settings)
                _loadfloat(type, true)
            } else {
                $.each(overwrites, function (breakpoint) {
                    if (breakpoint <= window.OB_STATIC.GetWindowWidth() && breakpoint > match) {
                        match = Number(breakpoint)
                    }
                })
                var istemp = false
                if (settings.responsiveTemp && settings.responsiveTemp == overwrites[match]) istemp = true

                settings.responsiveTemp = overwrites[match]
                settings = $.extend({}, settings, overwrites[match])

                delete settings.responsive

                _loadfloat(type, !istemp)
            }
        }

        /**
         * Checks window `resize` event.
         * @protected
         */
        var onResize = function () {
            setup('firstload')
        }

        /**
         * Checks window `resize` event.
         * @protected
         */
        var onThrottledResize = function () {
            window.clearTimeout(settings.resizeTimer)
            settings.resizeTimer = window.setTimeout(onResize, settings.responsiveRefreshRate)
        }

        var addevent = function (element, event, listener, capture) {
            if (element.addEventListener) {
                element.addEventListener(event, listener, capture)
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, listener)
            }
        }

        if (settings.responsive !== false) {
            addevent(window, 'resize', onThrottledResize)
        }

        setup('firstload')
        $(window).scroll(function () {
            _loadfloat('scroll')
        })
    }
}
