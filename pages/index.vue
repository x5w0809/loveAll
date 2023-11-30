<template>
    <div id="main">
        <div class="container">
            <!-- banner -->
            <section id="banner" class="banner">
                <div class="logo">
                    <div class="logo-anime">
                        <div class="logo-anime-obj"></div>
                    </div>
                </div>
                <div class="moon">
                    <div class="moon-anime iconAnime">
                        <div class="moon-anime-obj"></div>
                    </div>
                </div>
                <div class="sun">
                    <div class="sun-anime iconAnime">
                        <div class="sun-anime-obj"></div>
                    </div>
                </div>
                <div class="bgIcon">
                    <div :class="`bgIcon__${index + 1}`" v-for="(item, index) in 3" :key="'bgIcon__' + index">
                        <div :class="`bgIcon__${index + 1}-anime iconAnime`">
                            <div :class="`bgIcon__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="bgGrass">
                    <div :class="`bgGrass__${index + 1}`" v-for="(item, index) in 2" :key="'bgGrass__' + index">
                        <div :class="`bgGrass__${index + 1}-anime turfAnime`">
                            <div :class="`bgGrass__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="bgTurf">
                    <div :class="`bgTurf__${index + 1}`" v-for="(item, index) in 4" :key="'bgTurf__' + index">
                        <div :class="`bgTurf__${index + 1}-anime turfAnime`">
                            <div :class="`bgTurf__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="bgtxt">
                    <div :class="`bgtxt__${index + 1}`" v-for="(item, index) in 11" :key="'bgtxt__' + index">
                        <div :class="`bgtxt__${index + 1}-anime txtAnime`">
                            <div :class="`bgtxt__${index + 1}-anime-obj`"></div>
                        </div>
                    </div>
                </div>
                <div class="bgDes">
                    <div class="bgDes-anime">
                        <div class="bgDes-anime-obj">
                            <div class="bgDesTxt1">
                                <div class="bgDesTxt1-anime">
                                    <div class="bgDesTxt1-anime-obj"></div>
                                </div>
                            </div>
                            <div class="bgDesTxt2">
                                <div class="bgDesTxt2-anime">
                                    <div class="bgDesTxt2-anime-obj"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sign">
                    <div class="sign-anime modelAnime">
                        <div class="sign-anime-obj"></div>
                    </div>
                </div>
                <div class="model">
                    <div class="model-anime modelAnime">
                        <div class="model-anime-obj"></div>
                    </div>
                </div>
                <span class="height"></span>
            </section>
            <div class="mainContent">
                <section id="join" class="join">
                    <div class="joinIcon">
                        <div :class="`joinIcon__${index + 1}`" v-for="(item, index) in 7" :key="'joinIcon__' + index">
                            <div :class="`joinIcon__${index + 1}-anime`">
                                <div :class="`joinIcon__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="joinDes1">
                        <div class="joinDes1-anime">
                            <div class="joinDes1-anime-obj"></div>
                        </div>
                    </div>
                    <div class="movie">
                        <div class="movie-anime">
                            <div class="movie-anime-obj">
                                <div class="video">
                                    <video ref="videoShirt" controls>
                                        <source
                                            src="https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/video/2022-07-18_%E5%85%AC%E7%9B%8A_%E4%BC%8A%E7%94%B8%E5%9F%BA%E9%87%91-%E6%85%A2%E9%A3%9B%E5%A4%A9%E4%BD%BF-%E5%AE%98%E7%B6%B2PC_732%20x%20412.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                    <div class="playVideo__box" v-if="!videoIsPlaying" @click="playVideo">
                                        <a class="btn-playVideo" @click="playVideo"
                                            ><span class="aa-hide">playVideo</span></a
                                        >
                                    </div>
                                    <a class="btn-pauseVideo" @click="pauseVideo" v-else
                                        ><span class="aa-hide">pauseVideo</span></a
                                    >
                                </div>
                                <div class="movieDes">
                                    銷售金額不扣除成本全數捐贈伊甸基金會<br class="mb_br" />「弱勢兒童服務計畫」
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="zhen">
                        <div class="zhen-anime">
                            <div class="zhen-anime-obj"></div>
                        </div>
                    </div>
                    <div class="joinDes2">
                        <div class="joinDes2-anime">
                            <div class="joinDes2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="pic">
                        <div class="pic-anime">
                            <div class="pic-anime-obj"></div>
                        </div>
                    </div>
                    <div class="joinBtn">
                        <!-- <a href="https://lihi1.com/8Qlne" target="_blank"> -->
                        <a @click="clickJoinAnime()">
                            <div class="joinBtn-anime">
                                <div class="joinBtn-anime-obj"></div>
                            </div>
                        </a>
                    </div>
                    <span class="height"></span>
                </section>
                <section id="bg2Layout" class="bg2Layout">
                    <div class="bg2Icon">
                        <div class="bg2Icon-anime">
                            <div class="bg2Icon-anime-obj"></div>
                        </div>
                    </div>
                    <!-- <a href="https://lihi1.com/8Qlne" target="_blank"> -->
                    <a @click="clickJoinAnime()">
                        <div class="bg2Btn">
                            <div class="bg2Btn-anime">
                                <div class="bg2Btn-anime-obj"></div>
                            </div>
                        </div>
                    </a>
                    <span class="height"></span>
                </section>
                <section id="activity" class="activity">
                    <div class="activityDes">
                        <div class="activityDes-anime">
                            <div class="activityDes-anime-obj"></div>
                        </div>
                    </div>
                    <div class="music">
                        <div class="music-anime">
                            <div class="music-anime-obj"></div>
                        </div>
                    </div>
                    <div class="click">
                        <div class="click-anime">
                            <div class="click-anime-obj"></div>
                        </div>
                    </div>
                    <div class="boxTop">
                        <div class="boxTop-anime">
                            <div class="boxTop-anime-obj"></div>
                        </div>
                    </div>
                    <a @click="clickJoinAnime()">
                        <div class="hand2">
                            <div class="hand2-anime">
                                <div class="hand2-anime-obj"></div>
                            </div>
                        </div>
                        <div class="heart">
                            <div class="heart-anime">
                                <div class="heart-anime-obj"></div>
                            </div>
                        </div>
                        <div class="hand">
                            <div class="hand-anime">
                                <div class="hand-anime-obj"></div>
                            </div>
                        </div>
                    </a>
                    <div class="gift">
                        <div :class="`gift__${index + 1}`" v-for="(item, index) in 7" :key="'gift__' + index">
                            <div :class="`gift__${index + 1}-anime giftAnime`">
                                <div :class="`gift__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="popHeart">
                        <div :class="`popHeart__${index + 1}`" v-for="(item, index) in 10" :key="'popHeart__' + index">
                            <div :class="`popHeart__${index + 1}-anime popHeartAnime`">
                                <div :class="`popHeart__${index + 1}-anime-obj`"></div>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box-anime">
                            <div class="box-anime-obj"></div>
                        </div>
                    </div>
                    <div class="lottery">
                        <div class="lottery-anime">
                            <div class="lottery-anime-obj"></div>
                        </div>
                    </div>
                    <div class="attend">
                        已有
                        <span class="attendNum">
                            {{ attendance }}
                        </span>
                        人參與
                    </div>
                    <div class="lineShare">
                        <a @click="lineShare()">
                            <div class="lineShare-anime">
                                <div class="lineShare-anime-obj"></div>
                            </div>
                        </a>
                    </div>
                    <div class="fbShare">
                        <a @click="fbShare()">
                            <div class="fbShare-anime">
                                <div class="fbShare-anime-obj"></div>
                            </div>
                        </a>
                    </div>
                    <span class="height"></span>
                </section>
                <section id="bg3Layout" class="bg3Layout">
                    <span class="height"></span>
                </section>
                <section id="bg4Layout" class="bg4Layout">
                    <div class="basketball">
                        <div class="basketball-anime">
                            <div class="basketball-anime-obj"></div>
                        </div>
                    </div>
                    <div class="bg4color">
                        <div class="bg4color-anime">
                            <div class="bg4color-anime-obj"></div>
                        </div>
                    </div>
                    <div class="colorpen">
                        <div class="colorpen-anime">
                            <div class="colorpen-anime-obj"></div>
                        </div>
                    </div>
                    <div class="colorpen2">
                        <div class="colorpen2-anime">
                            <div class="colorpen2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="zhen_2">
                        <div class="zhen_2-anime">
                            <div class="zhen_2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="pic_2">
                        <div class="pic_2-anime">
                            <div class="pic_2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="bg4Icon">
                        <div class="bg4Icon-anime">
                            <div class="bg4Icon-anime-obj"></div>
                        </div>
                    </div>
                    <div class="bg4Icon2">
                        <div class="bg4Icon2-anime">
                            <div class="bg4Icon2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="bg4Des">
                        <div class="wrap">
                            <div class="logo">
                                <div class="logo-anime">
                                    <div class="logo-anime-obj"></div>
                                </div>
                            </div>
                            <div class="title">長大, 其實不簡單！</div>
                            <p class="des1">
                                &emsp;&emsp;在台灣，平均每15位兒童，就有1位可能是發展遲緩兒─慢飛天使。因為資源的缺乏、不友善的環境，內外的壓力或是歧視，都可能像是一睹無形的高牆，阻礙著發展遲緩兒童與家庭跨出向前的腳步。
                            </p>
                            <p class="des2">
                                &emsp;&emsp;伊甸基金會投入早期療育服務已邁入第29年，服務上因應不同家庭的需求，提供不同服務方案協同家長一起努力，將療育融入日常生活中，幫助孩子克服成長的重重挑戰，展現成長與進步的無限可能。
                            </p>
                        </div>
                    </div>
                    <span class="height"></span>
                </section>
                <section id="bg5Layout" class="bg5Layout">
                    <div class="bg5Icon" style="display: none">
                        <div class="bg5Icon-anime">
                            <div class="bg5Icon-anime-obj"></div>
                        </div>
                    </div>
                    <div class="drum">
                        <div class="drum-anime">
                            <div class="drum-anime-obj"></div>
                        </div>
                    </div>
                    <span class="height"></span>
                </section>
                <section id="celebrity" class="celebrity">
                    <div class="title">
                        <div class="title-anime">
                            <div class="title-anime-obj"></div>
                        </div>
                    </div>
                    <div class="color3">
                        <div class="color3-anime">
                            <div class="color3-anime-obj"></div>
                        </div>
                    </div>
                    <div class="paint">
                        <div class="paint-anime">
                            <div class="paint-anime-obj"></div>
                        </div>
                    </div>
                    <div class="paint2">
                        <div class="paint2-anime">
                            <div class="paint2-anime-obj"></div>
                        </div>
                    </div>
                    <div class="guitar">
                        <div class="guitar-anime">
                            <div class="guitar-anime-obj"></div>
                        </div>
                    </div>
                    <div class="cardwrap">
                        <div class="card">
                            <div
                                :class="`card__${index + 1}`"
                                v-for="(item, index) in celebrity"
                                :key="'card__' + index"
                            >
                                <img :src="item.imgUrl" alt="" />
                                <span>{{ item.name }}</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="almanac" class="almanac">
                    <div class="title">
                        <div class="title-anime">
                            <div class="title-anime-obj"></div>
                        </div>
                    </div>
                    <div class="pen3">
                        <div class="pen3-anime">
                            <div class="pen3-anime-obj"></div>
                        </div>
                    </div>
                    <div class="line">
                        <div class="line-anime">
                            <div class="line-anime-obj">
                                <svg-mapLine></svg-mapLine>
                                <svg-mapLineMb></svg-mapLineMb>
                                <div class="grass">
                                    <div
                                        :class="`grass__${index + 1}`"
                                        v-for="(item, index) in 3"
                                        :key="'grass__' + index"
                                    >
                                        <div :class="`grass__${index + 1}-anime`">
                                            <div :class="`grass__${index + 1}-anime-obj`"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lineLoc">
                                    <div
                                        :class="`lineLoc__${index + 1}`"
                                        v-for="(item, index) in 9"
                                        :key="'lineLoc__' + index"
                                    >
                                        <div :class="`lineLoc__${index + 1}-anime`">
                                            <div :class="`lineLoc__${index + 1}-anime-obj`"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lineIcon">
                                    <div
                                        :class="`lineIcon__${index + 1}`"
                                        v-for="(item, index) in 9"
                                        :key="'lineIcon__' + index"
                                    >
                                        <div :class="`lineIcon__${index + 1}-anime`">
                                            <div :class="`lineIcon__${index + 1}-anime-obj`"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lineTitle">
                                    <div
                                        :class="`lineTitle__${index + 1}`"
                                        v-for="(item, index) in 9"
                                        :key="'lineTitle__' + index"
                                    >
                                        <div :class="`lineTitle__${index + 1}-anime`">
                                            <div :class="`lineTitle__${index + 1}-anime-obj`"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="lineDes">
                                    <div
                                        :class="`lineDes__${index + 1}`"
                                        v-for="(item, index) in 9"
                                        :key="'lineDes__' + index"
                                    >
                                        <div :class="`lineDes__${index + 1}-anime`">
                                            <div :class="`lineDes__${index + 1}-anime-obj`"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="bg6Layout" class="bg6Layout">
                    <span class="height"></span>
                </section>
                <section id="instruction" class="instruction">
                    <div class="title">活動説明</div>
                    <div class="contain">
                        <div class="date">
                            <span class="dateTitle">活動期間：</span>
                            <span class="dateDes"> 2022/8/4 11:00AM - 2022/8/31 23:59PM </span>
                        </div>
                        <div class="detail">
                            <div class="detailTile">
                                <span>活動辦法：</span>
                            </div>
                            <div class="detailDes">
                                <ul>
                                    <li>
                                        <span>1.</span>
                                        進行本活動頁之活動前，請先登入官方帳戶，本頁面之活動限定每一官方ID帳號參與一次。
                                    </li>
                                    <li>
                                        <span>2.</span>
                                        集氣接力賽捐款活動，限每人每帳號參與一次，每一人次完成，OB嚴選即捐贈新台幣伍拾元整，此活動最高累計捐贈新台幣參拾萬元整。
                                    </li>
                                    <li>
                                        <span>3.</span>
                                        參加者於參加本活動同時，即同意接受本活動之活動辦法與注意事項，如有違法相關規定，OB嚴選得取消其參加或得獎資格，並就所衍生之損害向參加者請求損害賠償。
                                    </li>
                                    <li>
                                        <span>4.</span>
                                        參加者同意接受OB嚴選隱私權保護政策，參加者同意OB嚴選得委託協力廠商負責執行前述事項，該廠商得於必要範圍內使用參加者之個人資料；除本活動另有規定外，OB嚴選關於參加者個人資料之使用及參加之權益係依OB嚴選隱私權保護政策之規範。
                                    </li>
                                    <li>
                                        <span>5.</span>
                                        參加者保證所有填寫及送出之資料均為真實且正確，且未冒用或盜用任何第三人之資料，如經查發現有不實或虛偽情事，將被取消參加及得獎資格並不予告知。如因此致OB嚴選無法通知其得獎訊息，OB嚴選將不負任何責任，且如有致損害於OB嚴選或其他任何第三人之權利，參加者須負一切相關法律責任。
                                    </li>
                                    <li>
                                        <span>6.</span>
                                        活動相關問題請於活動期間聯繫客服專線(02)7722-6870，服務時間為週一至週五10:00-12:00/13:30-18:00。
                                    </li>
                                    <li>
                                        <span>7.</span>
                                        活動獎項以公布於本網站之資料為準，OB嚴選仍保留更換或變動其他等值獎項之權利。本活動贈品數量有限，送完為止，不再另行通知。
                                    </li>
                                    <li>
                                        <span>8.</span>
                                        如本活動因特殊原因無法執行時，OB嚴選有權決定取消、終止、修改或暫停本活動，並保留最終活動審核權。
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="receive">
                            <div class="receiveTitle">
                                <span>實體獎品領取方式：</span>
                            </div>
                            <div class="receiveDes">
                                <ul>
                                    <li>
                                        <span>1.</span>
                                        OB嚴選將於活動結束後由專人聯繫得獎者，得獎者須於七日內提供相關聯絡資訊(姓名/電話/地址)，經確認資料無誤後，填寫相關資料後進行領取。得獎者應先繳納中獎所得稅後，始得領取活動獎品。
                                    </li>
                                    <li>
                                        <span>2.</span>
                                        OB嚴選將開立各類所得稅扣繳憑單給得獎者，得獎者於年度報稅時必須計入個人所得合併申報，如得獎者不願意給付得獎商品之稅額，則視為得獎者自動棄權，不具得獎資格。
                                    </li>
                                    <li>
                                        <span>3.</span>
                                        實體獎品規格及顏色以交付為準，獎品圖檔僅供參考，恕不得更換其他等值商品或折換現金。
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="popResult" class="popResult">
                    <div class="closeCard" @click="popclose()"></div>
                    <div class="popcard" id="popcard">
                        <div class="popcard-anime">
                            <div class="popcard-anime-obj">
                                <a :href="getCurentImgPath(pictureUrl)" download="OBx伊甸-公益活動感謝卡">
                                    <div class="downloadBtn">
                                        <div class="downloadBtn-anime">
                                            <div class="downloadBtn-anime-obj"></div>
                                        </div>
                                    </div>
                                </a>
                                <a @click="popclose()">
                                    <div class="closeBtn1"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="popplay" id="popplay">
                        <div class="popplay-anime">
                            <div class="popplay-anime-obj">
                                <a @click="popclose()">
                                    <div class="closeBtn2"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import anime from 'animejs'
import { gsap } from 'gsap'
import * as apiMgmInviteFriends from '~/api/mgmInviteFriends'
import * as commonMsg from '@/constants/common'
import * as apiCommon from '~/api/common.api'

export default {
    data() {
        return {
            loading: false,
            MGMActivityId: '27fd1a01-ed27-4fc3-bfbc-ff7278dbda77',
            invitedCount: 0,
            isLogined: false,
            isBannerAnimeFinished: false,
            schedule: ['0', '2', '4', '6', '8', '10'],
            eachRecommend: 2, //(活動說明描述用)分享人次
            maxRecommend: 10, //分享最高人次
            LinePoint_friend: 20, //每次分享獲得點數
            LinePoint_mission: 100, //任務達成獲得點數
            attendance: '-----',
            part1: false,
            Roulette: {
                LotteryId: 'aded5972-f3fe-4b2c-8c00-981ca2473da0',
            },
            LotteryResult: '',
            updateCountTime: 30,
            popShow: false,
            pictureUrl: '',
            openImg: '',
            animeHandLoading: false,
            videoIsPlaying: false,
            celebrity: [
                {
                    name: '安妮',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/1-celebrity.jpg',
                },
                {
                    name: '成語蕎',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/2-celebrity.jpg',
                },
                {
                    name: '劉倩妏',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/3-celebrity.jpg',
                },
                {
                    name: '林子珊',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/4-celebrity.jpg',
                },
                {
                    name: '柯蘿依',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/5-celebrity.jpg',
                },
                {
                    name: '若綺',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/6-celebrity.jpg',
                },
                {
                    name: '夏乙薇',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/7-celebrity.jpg',
                },
                {
                    name: '賴琳恩',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/8-celebrity.jpg',
                },
                {
                    name: '連靜雯',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/9-celebrity.jpg',
                },
                {
                    name: '夏如芝',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/10-celebrity.jpg',
                },
                {
                    name: '彭正',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/11-celebrity.jpg',
                },
                {
                    name: '楊小黎',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/12-celebrity.jpg',
                },
                {
                    name: '宋依璇',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/13-celebrity.jpg',
                },
                {
                    name: '張雁名',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/14-celebrity.jpg',
                },
                {
                    name: '蘿莉塔',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/15-celebrity.jpg',
                },
                {
                    name: '禾浩辰',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/16-celebrity.jpg',
                },
                {
                    name: '泱泱',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/17-celebrity.jpg',
                },
                {
                    name: '阿部瑪利亞',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/18-celebrity.jpg',
                },
                {
                    name: '孫綻',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/19-celebrity.jpg',
                },
                {
                    name: '峮峮',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/20-celebrity.jpg',
                },
                {
                    name: '袁艾菲',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/21-celebrity.jpg',
                },
                {
                    name: '婕安',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/22-celebrity.jpg',
                },
                {
                    name: '張捷',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/23-celebrity.jpg',
                },
                {
                    name: '郭婷筠',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/24-celebrity.jpg',
                },
                {
                    name: '愛雅',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/25-celebrity.jpg',
                },
                {
                    name: '蔡昌憲',
                    imgUrl: 'https://obcdn4.obdesign.com.tw/OB_Images/html/events/fe22072201/pc/26-celebrity.jpg',
                },
            ],
        }
    },
    computed: {
        // canRunFlag() {
        //     const self = this
        //     return (
        //         self.isLogined === true && self.isBannerAnimeFinished === true
        //     )
        // },
    },
    watch: {
        isloadingAnimationDone(newValue) {
            const self = this

            self.$nextTick(function () {
                self.resetBannerAnimePC()
            })
        },
        afterScreenResizeState(newValue) {
            const self = this
        },
        screenScrollState(newValue, oldValue) {
            const self = this
        },
        // 偵測螢幕滾輪向下事件
        screenScrollDown(newValue, oldValue) {
            const self = this
        },
        // 偵測螢幕滾輪向上事件
        screenScrollUp(newValue, oldValue) {
            const self = this
        },
        //After 呼叫判斷是否登入API
        isLogin(newValue, oldValue) {
            const self = this
            if (typeof oldValue === 'undefined' && !newValue) {
                //尚未登入
            }
            if (typeof oldValue === 'undefined' && newValue) {
                //有登入
                //await self.getLotteryCount()
                //取得受邀人數
                //await self.getInvitedCount()
                self.isLogined = true
            }
        },
        canRunFlag(newValue, oldValue) {
            const self = this
            // if (newValue) window.OB_sectionScheduleScrollAnime()
        },
    },
    created() {
        const self = this
    },
    mounted() {
        const self = this
        // self.$nextTick(function () {
        //     setTimeout(() => {
        //         if (!self.isMobile) {
        //             window.OB_scrollMapAnime()
        //         } else {
        //             window.OB_scrollMapAnime_mb()
        //         }
        //         if (!self.isMobile) {
        //             self.pictureUrl = 'pc/download-PC.jpg'
        //         } else {
        //             self.pictureUrl = 'mb/download-MB.jpg'
        //         }
        //     }, 100)
        // })
        self.getLotteryCount()
        self.countDown()
        self.addPlayEventListen()
        const installFacebookSdkScript = (d, s, id) => {
            if (d.getElementById(id)) {
                this.facebookSdkReady = true
                return
            }
            const fjs = d.getElementsByTagName(s)[0]
            const js = d.createElement(s)
            js.id = id
            js.src = 'https://connect.facebook.net/en_US/sdk.js'
            fjs.parentNode.insertBefore(js, fjs)
        }
        installFacebookSdkScript(document, 'script', 'facebook-jssdk')

        window.fbAsyncInit = () => {
            FB.init({
                appId: '456332644487370',
                cookie: true,
                xfbml: true,
                version: 'v3.2',
            })
            FB.AppEvents.logPageView()
            this.facebookSdkReady = true
        }
    },
    destroyed() {},
    methods: {
        getCurentImgPath(img) {
            return `${process.env.VUE_APP_IMAGE_PATH}image/${img}`
        },
        fbShare() {
            FB.ui(
                {
                    display: 'popup',
                    method: 'share',
                    //href: window.location.origin + '/ld/events/FE22072201/',
                    href: 'https://lihi1.com/FxXZl',
                },
                function (response) {}
            )
        },
        lineShare() {
            const self = this
            const _title = `大手牽小手，讓愛飛起來！邀請你一起參與【OB嚴選x伊甸基金會】線上公益活動，愛心大使-小禎設計上衣限量開賣！在活動頁點點手指完成集氣響應，OB立即幫你捐$50，再加碼抽DYSON吹風機，立即前往>>>`
            const _description = ``

            const objLineShare = {
                title: _title,
                description: _description,
                url: 'https://lihi1.com/SyDv5',
                isAsync: true,
            }
            self.toLineShare(objLineShare)
        },
        resetBannerAnimePC() {
            const self = this
            document.body.style.overflow = 'hidden'

            //banner Anime
            self.$nextTick(function () {
                self.bannerAnime()

                if (!self.isMobile) {
                    window.OB_scrollMapAnime()
                } else {
                    window.OB_scrollMapAnime_mb()
                }
                if (!self.isMobile) {
                    self.pictureUrl = 'pc/download-PC.jpg'
                } else {
                    self.pictureUrl = 'mb/download-MB.jpg'
                }
            })
        },
        //活動說明 look more
        introductionOpenSwitch() {
            const _instruction = document.querySelector('#instruction')
            const _btnLookMore = document.querySelector('.btn-lookMore')
            const _content = document.querySelector('#instruction_content')
            _btnLookMore.addEventListener('click', () => {
                $(_instruction).toggleClass('opened')
                $(_btnLookMore).toggleClass('opened')
                $(_content).stop().slideToggle(250)
            })
        },
        bannerAnime() {
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.turfAnime',
                    keyframes: [
                        {
                            opacity: 0,
                            duration: 0,
                            scale: 0,
                            translateY: 30,
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            translateY: 0,
                            duration: 500,
                            easing: 'cubicBezier(.3,.84,.66,1.32)',
                        },
                    ],
                }).finished
                const anime2 = topAnime.add(
                    {
                        targets: '.modelAnime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 100,
                            },
                            {
                                opacity: 1,
                                translateY: 0,
                                duration: 800,
                                easing: 'cubicBezier(0,0,.58,1)',
                            },
                        ],
                        delay: anime.stagger(300),
                    },
                    '-=300'
                ).finished
                const anime3 = topAnime.add(
                    {
                        targets: '.txtAnime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 50,
                            },
                            {
                                opacity: 1,
                                translateY: 0,
                                duration: 600,
                                easing: 'cubicBezier(.3,.84,.66,1.8)',
                            },
                        ],
                        delay: anime.stagger(100),
                    },
                    '-=800'
                ).finished
                const anime4 = topAnime.add(
                    {
                        targets: '.bgDes-anime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                scale: 1,
                                duration: 500,
                                easing: 'cubicBezier(.3,.84,.66,1.2)',
                            },
                        ],
                    },
                    '-=500'
                ).finished
                const anime5 = topAnime.add(
                    {
                        targets: '.iconAnime',
                        keyframes: [
                            {
                                opacity: 0,
                                duration: 0,
                                translateY: 50,
                                scale: 0,
                            },
                            {
                                opacity: 1,
                                translateY: 0,
                                duration: 500,
                                scale: 1,
                                easing: 'cubicBezier(.3,.84,.66,1.8)',
                            },
                        ],
                        delay: anime.stagger(100),
                    },
                    '-=500'
                ).finished

                await Promise.all([anime1, anime2, anime3, anime4, anime5])
            }
            animePromise().then(() => {
                document.body.style.overflow = ''
                self.isBannerAnimeFinished = true
                this.loopAnime()
                //this.bannerAnime2()
            })
        },
        loopAnime() {
            anime({
                targets: '.click-anime',
                keyframes: [
                    {
                        duration: 0,
                        translateX: -10,
                        translateY: -30,
                    },
                    {
                        translateX: 0,
                        translateY: 0,
                    },
                ],
                duration: 2000,
                easing: 'cubicBezier(.25,.1,.25,1)',
                loop: true,
            })
        },
        clickJoinAnime() {
            var self = this
            self.$store.commit('SET_PAGELOADING', true)
            //活動結束
            // if (self.eventIsExpired) {
            //     self.$Swal2.fire({
            //         text: commonMsg.MSG_EVENT_EXPRIED,
            //     })
            //     self.$store.commit('SET_PAGELOADING', false)
            //     return
            // }
            // const isLogin = await self.$store.dispatch('CHECKLOGIN')
            // if (!isLogin) {
            //     self.$Swal2.fire({
            //         text: commonMsg.MSG_UNLOGING,
            //     })
            //     return
            // }
            self.$store.commit('SET_PAGELOADING', false)
            self.joinClick()
        },
        joinClick() {
            var self = this
            if (self.animeHandLoading) return
            self.animeHandLoading = true
            async function animePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.giftAnime',
                    keyframes: [
                        {
                            opacity: 1,
                            duration: 0,
                        },
                        {
                            opacity: 0,
                            duration: 500,
                            easing: 'linear',
                        },
                    ],
                }).finished
                const anime2 = topAnime.add({
                    targets: '.hand2-anime',
                    keyframes: [
                        {
                            translateX: 0,
                            rotate: 0,
                            duration: 0,
                        },
                        {
                            translateX: -30,
                            rotate: -10,
                            duration: 800,
                            easing: 'cubicBezier(.25,.1,.25,1)',
                        },
                        {
                            translateX: 0,
                            rotate: 0,
                            duration: 500,
                            easing: 'linear',
                        },
                    ],
                }).finished
                const anime3 = topAnime.add(
                    {
                        targets: '.hand-anime',
                        keyframes: [
                            {
                                translateX: 0,
                                rotate: 0,
                                duration: 0,
                            },
                            {
                                translateY: 20,
                                translateX: -30,
                                rotate: -10,
                                duration: 800,
                                easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                            {
                                translateY: 0,
                                translateX: 0,
                                rotate: 0,
                                duration: 500,
                                easing: 'linear',
                            },
                        ],
                    },
                    '-=1300'
                ).finished
                const anime4 = topAnime.add(
                    {
                        targets: '.heart-anime',
                        keyframes: [
                            {
                                opacity: 1,
                                duration: 0,
                                translateY: 0,
                                translateX: 0,
                            },
                            {
                                translateY: 100,
                                translateX: -25,
                                easing: 'linear',
                            },
                            {
                                translateY: 200,
                                translateX: -50,
                                easing: 'linear',
                            },
                            {
                                opacity: 0,
                                translateY: 300,
                                translateX: -80,
                                //easing: 'cubicBezier(.25,.1,.25,1)',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                        duration: 600,
                    },
                    '-=1200'
                ).finished
                const anime5 = topAnime.add(
                    {
                        targets: '.box-anime',
                        keyframes: [
                            {
                                duration: 200,
                                scale: 0.8,
                                easing: 'linear',
                            },
                            {
                                scale: 1,
                                duration: 800,
                                easing: 'spring(1, 80, 10, 10)',
                            },
                        ],
                    },
                    '-=800'
                ).finished
                const anime6 = topAnime.add(
                    {
                        targets: '.boxTop-anime',
                        keyframes: [
                            {
                                duration: 200,
                                translateY: 30,
                                scale: 0.8,
                                easing: 'linear',
                            },
                            {
                                scale: 1,
                                translateY: 0,
                                duration: 800,
                                easing: 'spring(1, 80, 10, 10)',
                            },
                        ],
                    },
                    '-=1000'
                ).finished
                const anime7 = topAnime.add(
                    {
                        targets: '.giftAnime',
                        keyframes: [
                            {
                                duration: 0,
                                scale: 0,
                                opacity: 0,
                            },
                            {
                                scale: 1,
                                opacity: 1,
                                duration: 800,
                                easing: 'spring(1, 100, 10, 0)',
                            },
                        ],
                    },
                    '-=800'
                ).finished
                const anime8 = topAnime.add(
                    {
                        targets: '.popHeart__1-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: 50,
                                duration: 0,
                                scale: 0,
                                opacity: 1,
                            },
                            {
                                rotate: 15,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.4,
                                opacity: 0.8,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=700'
                ).finished
                const anime9 = topAnime.add(
                    {
                        targets: '.popHeart__2-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: 200,
                                duration: 0,
                                scale: 0,
                                opacity: 1,
                            },
                            {
                                translateX: 0,
                                rotate: -15,
                                translateY: 0,
                                scale: 0.3,
                                opacity: 0.7,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=800'
                ).finished
                const anime10 = topAnime.add(
                    {
                        targets: '.popHeart__3-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: 400,
                                duration: 0,
                                scale: 0,
                                opacity: 1,
                            },
                            {
                                rotate: -30,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.4,
                                opacity: 1,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=600'
                ).finished
                const anime11 = topAnime.add(
                    {
                        targets: '.popHeart__4-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                duration: 0,
                                scale: 0,
                                opacity: 0,
                            },
                            {
                                rotate: 40,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.3,
                                opacity: 0.8,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=700'
                ).finished
                const anime12 = topAnime.add(
                    {
                        targets: '.popHeart__5-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: -300,
                                duration: 0,
                                scale: 0,
                                opacity: 0,
                            },
                            {
                                rotate: 80,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.4,
                                opacity: 1,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=600'
                ).finished
                const anime13 = topAnime.add(
                    {
                        targets: '.popHeart__6-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: 100,
                                duration: 0,
                                scale: 0,
                                opacity: 0,
                            },
                            {
                                rotate: -20,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.3,
                                opacity: 1,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=900'
                ).finished
                const anime14 = topAnime.add(
                    {
                        targets: '.popHeart__7-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: 200,
                                duration: 0,
                                scale: 0,
                                opacity: 0,
                            },
                            {
                                rotate: -40,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.4,
                                opacity: 0.9,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=600'
                ).finished
                const anime15 = topAnime.add(
                    {
                        targets: '.popHeart__8-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: -100,
                                duration: 0,
                                scale: 0,
                                opacity: 0,
                            },
                            {
                                rotate: 20,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.3,
                                opacity: 1,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=800'
                ).finished
                const anime16 = topAnime.add(
                    {
                        targets: '.popHeart__9-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: -200,
                                duration: 0,
                                scale: 0,
                                opacity: 0,
                            },
                            {
                                rotate: 45,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.4,
                                opacity: 0.7,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=700'
                ).finished
                const anime17 = topAnime.add(
                    {
                        targets: '.popHeart__10-anime',
                        keyframes: [
                            {
                                translateY: 250,
                                translateX: -300,
                                duration: 0,
                                scale: 0,
                                opacity: 0,
                            },
                            {
                                rotate: 90,
                                translateY: 0,
                                translateX: 0,
                                scale: 0.3,
                                opacity: 1,
                                duration: 500,
                            },
                            {
                                opacity: 0,
                                duration: 200,
                                easing: 'linear',
                            },
                        ],
                        easing: 'cubicBezier(.25,.1,.25,1)',
                    },
                    '-=600'
                ).finished

                await Promise.all([
                    anime1,
                    anime2,
                    anime3,
                    anime4,
                    anime5,
                    anime6,
                    anime7,
                    anime8,
                    anime9,
                    anime10,
                    anime11,
                    anime12,
                    anime13,
                    anime14,
                    anime15,
                    anime16,
                    anime17,
                ])
            }
            animePromise().then(() => {
                self.getLotteryResult()
            })
        },
        async getLotteryCount() {
            var self = this
            const LotteryLogData = await apiCommon.LotteryLogCount(self.Roulette, self)
            if (LotteryLogData.ResultCode === 1) {
                self.attendance = LotteryLogData.Result
            }
        },
        async getLotteryResult() {
            var self = this
            self.$store.commit('SET_PAGELOADING', true)
            const LotteryResultCode = await apiCommon.LotteryResult(self.Roulette, self)
            if (LotteryResultCode.ResultCode === 1) {
                await self.getLotteryCount()
                self.openImg = 'popcard'
                self.closeImg = 'popplay'
            } else {
                self.openImg = 'popplay'
                self.closeImg = 'popcard'
            }
            self.$store.commit('SET_PAGELOADING', false)
            document.getElementById('popResult').style.display = 'block'
            self.animeHandLoading = false
            anime({
                targets: '.' + self.openImg + '-anime',
                keyframes: [
                    {
                        scale: 0,
                        opacity: 0,
                        duration: 0,
                    },
                    {
                        scale: 1,
                        opacity: 1,
                    },
                ],
                duration: 500,
                easing: 'cubicBezier(.25,.1,.25,1)',
            })
            document.getElementById(self.closeImg).style.display = 'none'
        },
        countDown() {
            var self = this
            window.setInterval(() => {
                setTimeout(() => {
                    self.getLotteryCount()
                }, 0)
            }, 30000)
        },
        popclose() {
            var self = this
            async function popclosePromise() {
                var topAnime = anime.timeline({})
                const anime1 = topAnime.add({
                    targets: '.' + self.openImg + '-anime',
                    keyframes: [
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0,
                        },
                        {
                            scale: 0,
                            opacity: 0,
                        },
                    ],
                    duration: 500,
                    easing: 'cubicBezier(.25,.1,.25,1)',
                }).finished
                await Promise.all([anime1])
            }
            popclosePromise().then(() => {
                document.getElementById('popResult').style.display = 'none'
            })
        },
        addPlayEventListen() {
            const self = this
            const _video = self.$refs.videoShirt
            _video.onplaying = function () {
                self.videoIsPlaying = true
            }
            _video.onpause = function () {
                self.videoIsPlaying = false
            }
        },
        playVideo() {
            const _video = this.$refs.videoShirt
            _video.play()
            this.videoIsPlaying = true
        },
        pauseVideo() {
            const _video = this.$refs.videoShirt
            _video.pause()
            this.videoIsPlaying = false
        },
    },
}
</script>

<style lang="scss">
.demoFlex {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        margin-bottom: 10px;
        display: block;
        background-color: black;
        color: #fff;
        padding: 7px 19px 9px;
        cursor: sun;
        transition: all 0.25s ease;
        &:hover {
            background-color: #3abb7d;
        }
    }
}
</style>
