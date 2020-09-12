# gsshop_copy_make
### GS SHOP 클론 코딩입니다.
### 코드 설명만 하도록 하겠습니다.
### html, scss, javascript로 구성된 코드입니다.
Link: [Google][googlelink]
[googlelink]: https://company.gsshop.com/main/index 'go'
## 1.SCSS
```
$grin: rgb(111, 194, 34); //색 지정

#header_wrap_menu {
  //전체 메인메뉴 구성
  margin: 0; //화면 꽉 차게
  padding: 0; //화면 꽉 차게
  width: 100%; //화면 꽉 차게 전체 차지
  display: flex; //메뉴 정렬
  flex-direction: column; //메인메뉴와 메인메뉴의 메뉴들을 열 정렬
  position: fixed; //위치 고정 -->다음 스크롤로 넘어가도 위치가 변하지 않고 고정
  z-index: 10; //항상 가장 상위에 존재 하므로
}
#header_wrap {
  //항상 보이는 메인메뉴 구성
  width: 100%; //화면 꽉 차게
  padding: 2rem 0; //위아래 여백
  display: flex; //메뉴 행 정렬
  font-weight: bolder; //글씨 모두 굵게
  color: white; //글씨 색
}
.header_title {
  flex-grow: 3; //차지하는 비율 설정
  margin-left: 4%; //왼쪽 여백
  font-size: 6rem; //글씨 크기
  & h1:hover {
    cursor: pointer; //커서 모양 변화
  }
}
.header_mainbar {
  flex-grow: 3; //차지하는 비율 설정
  margin: 3rem 10rem; //가운데로 글씨 모으기
  display: flex; //안에 속성 정렬
  align-items: center; //가운데 정렬
  font-size: 2.8rem; //글씨 크기
  justify-content: space-between; //비율 똑같이 나누기
  & a {
    &:hover {
      cursor: pointer;
    }
  }
}
.header_bar {
  flex-grow: 2; //차지하는 비율 설정
  justify-content: flex-end; //맨 끝에 맞추기
  display: flex; //안에 속성들 정렬
  text-align: center; //가운데로
  padding-top: 2rem; //조금 더 내리기
  font-size: 2.3rem; //글씨 크기
  & a {
    padding-right: 1rem; //사이 사이 여백
    &:hover {
      cursor: pointer;
    }
  }
}
.langg {
  flex-grow: 1; //차지하는 비율 설정
  margin-top: 1rem; //위치 맞추기
  & div {
    width: 70%; //사용할 길이
    border: 1px solid gray; //박스 만들기
    border-radius: 2rem; //곡선으로
    font-size: 2.5rem; //글씨 크기
  }
  & p {
    display: flex; //안에 속성 정렬
    flex-direction: column; //열 정렬
    text-align: center; //가운데 오도록
    padding: 0.5rem; //여백
  }
  .k:hover {
    color: $grin;
    cursor: pointer;
  }
  .eng {
    display: none;
  }
  &:hover {
    .eng {
      display: block;
      &:hover {
        color: $grin;
        cursor: pointer;
      }
    }
  }
}
#header_menu {
  display: none; //평소에 안보이게
  margin: 0; //여백 없이
  padding: 0; //여백 없이
  background-color: white; //배경 흰색
  height: 25rem; //전체 높이
  width: 100%; //꽉차게
  .header_line {
    border-bottom: 0.1rem gray solid; //중간에 선 넣기
    margin-bottom: 4rem; //밑에 여백 주기
  }
  .main_menu {
    width: 35%; //메뉴가 차지할 기링
    margin: 0 auto; //가운데 오도록
    display: flex; //안에 메뉴들 정렬
    justify-content: space-between; //똑같이 넓이 나눠 정렬
    padding-left: 5.2rem; //위에 메인 메뉴 바와 맞추기 위해서
    .main_menu1 {
      display: flex; //인에 메뉴들 정렬
      flex-direction: column; //가로 정렬
      text-align: center; //가운데 글씨오게
    }
    & a {
      font-size: 1.6rem; //글씨 크기
      color: gray; //글씨색
      text-decoration: none; //밑줄 없애기
      margin-bottom: 2rem; //글씨 끼리 간격
      &:hover {
        color: $grin;
      }
    }
  }
}

.section_wrap {
  height: 100vh; //모든 페이지한테 화면 꽉차게 높이 설정
}
#section1 {
  .section_bg {
    //비디오 전체 꽉차게
    width: 100%;
    height: 100%;
  }
  .section_img1 {
    //이미지 전체 꽉차게
    width: 100%;
    height: 100%;
    display: none; //처음에 안 보이게 표시
  }
  .section1_write {
    position: absolute; //안의 top,left 설정을 위해서
    //글씨 중앙 배치
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    //글씨가 차지하는 면적 설정
    //width: 25%;
    //height: 100%;
    display: flex; //글씨 정렬
    flex-direction: column; //세로로 정렬
    justify-content: center; //글씨 가운데로
    text-align: center; //글씨 가운데로
    font-size: 13rem; //글씨 크기
    font-weight: 1000; //글씨 두께
    & a {
      color: rgba(114, 109, 109, 0.5); //글씨 색
      &:hover {
        cursor: pointer;
      }
    }
    //글씨들 사이에 가운데 동그라미
    ::after {
      content: "";
      width: 1.8rem;
      height: 1.8rem;
      display: flex;
      margin-top: 3%;
      margin-left: 49.5%;
      border-radius: 5rem;
      background-color: rgba(114, 109, 109, 0.466);
    }
    //마지막엔 안 보이게
    :last-child::after {
      display: none;
    }
  }
  .section1_word {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center; //글씨 가운데
    font-size: 2.2rem; //글씨 크기
    display: block; //글씨 보이게(자바스크립트에서 안보이게 설정)
    color: white; //글씨 색
    top: 75%; //글씨 위치
    animation-duration: 0.3s; //0.3초안에 글씨가 올라오도록
    animation-name: slidein;
  }
  @keyframes slidein {
    from {
      top: 85%;
    }

    to {
      top: 75%;
    }
  }

  #scroll_wrap {
    position: absolute;
    left: 48.5%; //글씨 위치 지정
    transform: translateY(-15rem);
    //차지하는 면적 설정
    width: 4%;
    height: 10%;
    display: flex; //글씨랑 스크롤 정렬
    flex-direction: column;
    text-align: center; //가운데로
    .scroll_write {
      //글씨 크기,색,두께
      font-size: 3rem;
      color: white;
      font-weight: 1000;
      margin-bottom: 1rem; //스크롤과 간격
    }
    .scroll {
      margin: 0 auto; //가운데로
      width: 2.5rem; //스크롤 가로
      height: 4rem; //스크롤 세로
      border: 0.2rem gray solid; //스크롤 모양잡기
      border-radius: 3rem; //스크롤 둥글게
      & div {
        //위치
        position: absolute;
        top: 50%;
        left: 46%;
        //동그라미 크기
        width: 0.5rem;
        height: 0.5rem;
        background-color: gray; //회색
        border-radius: 4rem; //모양 동그랗게
        animation-name: scroll_dot; //위아래로
        animation-duration: 0.5s; //0.5초안에
        animation-direction: alternate; //양쪽으로 전부 작동
        animation-iteration-count: infinite; //무한대로 작동
      }
    }
  }
  @keyframes scroll_dot {
    from {
      top: 42%;
    }
    to {
      top: 50%;
    }
  }
}

#section2 {
  position: relative;
  width: 100%;
  height: 100vh; //전체 면적 고정
  background: linear-gradient(90deg, white 70%, $grin 30%); //배경화면
  .section2_wirte {
    //위치 지정
    position: absolute;
    width: 60%;
    left: 15%;
    top: 35%;
    height: 45%;
    //정렬
    display: flex;
    flex-direction: column;
    justify-content: space-between; //간격 똑같이
    //글씨 크기 색 굵기 설정
    .section2_p1 {
      font-size: 3.5rem;
      color: $grin;
      font-weight: bolder;
    }
    .section2_p3 {
      font-size: 2rem;
    }
    .section2_p4 {
      font-size: 3.5rem;
      font-weight: bolder;
      & a {
        color: black;
        &:hover {
          cursor: pointer;
          color: $grin;
        }
      }
    }
  }
  .section2_p2 {
    //글씨 위치 크기 굵기
    position: absolute;
    width: 60%;
    left: 15%;
    top: 37%;
    z-index: 2;
    font-size: 10rem;
    font-weight: bolder;
    padding: 2rem 0;
    transition: font-size 0.3s, top 0.3s; //글씨 크기 위치에 따른 transition
  }

  .section2_button {
    z-index: 2; //버튼이 잘 작동하도록 위에 배치
    //버튼 위치
    position: absolute;
    width: 80%;
    top: 58%;
    left: 43%;
    transform: translate(-50%, -50%);
    //똑같이 나눔
    display: flex;
    justify-content: space-between;
    & .section2_button1,
    & .section2_button2 {
      //버튼 크기 위치 색
      width: 13rem;
      height: 13rem;
      background-color: rgba(158, 157, 157, 0.644);
      border-radius: 80rem;
      //안에 > < 크기 위치 색 설정
      font-size: 8rem;
      display: flex;
      justify-content: center;
      color: white;
      &:hover {
        cursor: pointer;
        background-color: rgba(158, 157, 157, 0.844);
      }
    }
  }
  #section2_slide {
    //안에 기사들 크기
    width: 123%;
    height: 100%;
    //안에 기사들 위치 설정
    position: absolute;
    top: 40%;
    left: 45%;
    //정렬, 간격 나누기
    display: flex;
    justify-content: space-between;
    //0.3초마다 왼쪽으로
    transition: left 0.3s;
    & .section2_slide1 {
      //나중에 큰 글씨 보다위로 올라오게
      z-index: 1;
      position: relative;
      //위치 설정
      left: 0;
      top: 0;
      //크기 설정
      width: 30%;
      height: 40%;
      overflow: hidden; //넘어간 박스 가리기
      & .section2_slide1_img {
        //이미지 넣을 박스 설정
        position: absolute;
        width: 95%;
        height: 100%;
        & img {
          //이미지 설정
          width: 100%;
          height: 100%;
        }
      }
      & .section2_box {
        //글씨있는 박스 크기 위치 설정
        position: absolute;
        width: 80%;
        height: 70%;
        top: 70%;
        transition: top 0.5s; //마우스 대면 올라오게
        & p {
          &:first-child {
            color: white; //위에 보이는 글씨는 흰색
            padding: 4rem;
            font-size: 2.5rem;
            font-weight: bolder;
          }
          &:last-child {
            font-size: 1.8rem;
            color: gray; //안보이는 글씨는 회색
            padding-left: 4rem;
          }
        }
        & :hover {
          cursor: pointer;
        }
      }
    }
  }
}

#section3 {
  //화면 고정
  width: 100%;
  height: 100vh;
  position: relative;
  .section3_bg {
    width: 100%;
    height: 100%;
  }
  .section3_img1 {
    width: 100%;
    height: 100%;
    display: none;
  }
  & .section3_title_write {
    //위의 글씨 중앙에 배치
    position: absolute;
    left: 50%;
    top: 27%;
    text-align: center;
    transform: translate(-50%, -50%);
    & div {
      //큰 글씨 크기 굵기 색 여백
      font-size: 6rem;
      font-weight: 800;
      padding-bottom: 4rem;
      color: white;
    }
    & p {
      //작은 글씨 크기 색
      font-size: 1.8rem;
      color: white;
    }
  }
  & .section3_title_write1 {
    // 전체 화면 차지하도록
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    //글씨 가운데 오도록
    text-align: center;
    #section3_menu {
      //4구역으로 나누기
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      & .section3_write {
        position: relative;
        height: 100vh; //각 섹션이 전체 높이를 차지하도록
        //글씨 색 굵기 크기
        color: white;
        font-size: 6rem;
        font-weight: 1000;
        //섹션 마다의 왼쪽에 회색 경계선
        border-left: 0.1rem rgba(133, 133, 133, 0.671) solid;
        & .section3_write1 {
          //메인 글시 위치 고정
          position: absolute;
          left: 50%;
          top: 70%;
          transform: translate(-50%, -50%);
          transition: top 0.5s; //마우스 댈 때의 변화
        }
        & .section3_word {
          //안보이다가 나중에 올라오도록
          display: none;
          //글씨 위치 고정
          position: absolute;
          left: 50%;
          top: 90%;
          transform: translate(-50%, -50%);
          & p {
            //글씨 색 크기
            font-size: 1.8rem;
            color: rgb(75, 74, 74);
          }
          & .section3_box {
            //박스들 정렬 박스끼리 간격
            display: flex;
            flex-direction: column;
            padding-top: 5rem;
            & span {
              //박스 안의 글씨 색 위치 가운데로
              color: white;
              margin-bottom: 0.8rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              font-size: 1.8rem;
              //박스 크기, 테두리 만들기
              width: 30rem;
              height: 6rem;
              border: 0.1rem gray solid;
              &:hover {
                cursor: pointer;
              }
            }
          }
          //마우스 댈 때 땔 때 반응 애니메이션
          animation-duration: 0.5s;
          animation-name: section3_slide;
        }
      }
    }
  }
}
@keyframes section3_slide {
  from {
    top: 90%;
  }
  to {
    top: 70%;
  }
}

#section4 {
  //위치 고정
  width: 100%;
  height: 100vh;
  position: relative;
  & .section4_title_write {
    //위에 글시들 위치 크기 고정
    width: 66%;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    //정렬, 똑같이 비율 나눔
    display: flex;
    justify-content: space-between;
    align-items: flex-end; //글씨가 밑에 붙도록
    & a {
      font-weight: bolder;
      &:first-child {
        //앞에 글씨는 더 크게, 색도 바꾸기
        display: inline;
        text-decoration: none; //a태그 밑줄 없애기
        font-size: 5.5rem;
        color: black;
        //앞에 글씨 밑줄 생성
        &::before {
          content: " ";
          position: absolute;
          width: 14.5%;
          top: 75%;
          border-bottom: 1.2rem $grin solid;
          z-index: -1;
        }
      }
      &:last-child {
        //뒤에 글씨 색, 크기
        color: black;
        font-size: 2rem;
        &:hover {
          //호버시 색 변경
          color: $grin;
        }
      }
    }
  }
  & .section4_write_wrap {
    //게시판 크기 설정
    width: 68%;
    height: 75%;
    //게시판 위치 설정
    position: relative;
    margin: 0 auto;
    top: 27%;
    //게시판 시작점에 회색 줄
    border-top: 0.1rem gray solid;
    & .section4_write {
      //여백
      padding: 4rem;
      //각각의 뉴스 아래에 회색 줄
      border-bottom: 0.1rem gray solid;
      //높이 설정
      height: 10%;
      //마우스 댈 때(자바스크립트) 높이 변화
      transition: height 0.3s;
      & .section4_write1 {
        & p {
          font-weight: bolder;
          &:first-child {
            //위에 글씨 색 크기 여백
            color: $grin;
            font-size: 1.8rem;
            padding-bottom: 1rem;
          }
          &:last-child {
            //아래 글씨 크기
            font-size: 2.5rem;
          }
        }
      }
      & .section4_word {
        //기사 내용 안 보이게
        display: none;
        & p {
          //기사 글씨 회색으로, 사이즈
          font-weight: bolder;
          font-size: 1.8rem;
          color: gray;
          &:first-child {
            //여백 설정
            padding-top: 1.6rem;
            padding-bottom: 5rem;
          }
        }
      }
    }
    //시작할 때는 첫 기사는 보이도록 설정
    & .s1 {
      height: 30%;
      background-color: rgb(251, 255, 193);
      & .section4_word {
        display: block;
      }
    }
  }
}

#section5 {
  //위치 고정
  position: relative;
  width: 100%;
  height: 100vh;
  & .section5_title_write {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 27%;
    transform: translate(-50%, -50%);
    & .section5_title_write1 p {
      //글씨 가운데로, 색
      text-align: center;
      color: white;
      &:first-child {
        //위에 글씨 크기 사이즈 위치
        font-weight: 1000;
        font-size: 6rem;
        margin-bottom: 3rem;
      }
      &:last-child {
        //아래 글씨 크기 위치
        font-size: 1.8rem;
        margin-bottom: 6rem;
      }
    }
  }
  & .section5_write_wrap {
    //박스 크기, 위치 설정
    position: absolute;
    height: 70%;
    width: 70%;
    margin: 0 auto;
    left: 50%;
    top: 37%;
    transform: translateX(-50%);
    //3등분
    display: flex;
    justify-content: space-between;
    & .section5_write {
      //박스 크기
      width: 100%;
      height: 50rem;
      .section5_write1 {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 93%; //안의 왼쪽 조금씩 비도록
        & div {
          //전체 차지 비율
          height: 100%;
          width: 100%;
          & img {
            //이미지 차지 비율
            height: 100%;
            width: 100%;
          }
          :hover {
            //마우스 갖다댈 시 그림 당기기
            cursor: pointer;
            transform: scale(1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            -o-transform: scale(1.2);
            transition: all 0.3s ease-in-out;
          }
        }
        & a {
          //안에 글씨 위치 설정
          position: absolute;
          width: 100%;
          left: 10%;
          top: 25%;
          transform: translate(0, -50%);
          p {
            //글씨 크기 사이즈 색 여백 설정
            color: white;
            &:first-child {
              font-weight: 1000;
              font-size: 2.3rem;
              margin-bottom: 3rem;
            }
            &:last-child {
              font-size: 1.8rem;
              margin-bottom: 6rem;
            }
          }
        }
      }
      & .section5_write2 {
        //왼쪽 비도록 박스 사이즈 설정
        height: 100%;
        width: 93%;
        background-color: white;
        & .section5_write2_1 {
          //안의 글씨 여백 크기 색 사이즈 설정
          margin: 5rem;
          & p {
            font-weight: bolder;
            &:first-child {
              font-size: 2rem;
            }
            &:nth-child(2) {
              color: red;
              font-size: 6rem;
              margin-bottom: 2rem;
            }
            &:last-child {
              width: 12rem;
              height: 4rem;
              font-size: 1.3rem;
              border: 0.2rem gray solid;
              border-radius: 4rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
              &:hover {
                cursor: pointer;
              }
            }
          }
        }
        & .section5_write2_line {
          //안에 회색 줄 긋기
          margin: 1rem 5rem;
          margin-top: 10rem;
          border-bottom: 0.1rem gray solid;
        }
        & .section5_write2_2 {
          //안에 여백
          margin: 0 5rem;
          & div {
            //안에 글씨 정렬 똑같이 나누기
            margin: 2rem 0;
            display: flex;
            justify-content: space-between;
            font-size: 2.5rem;
            & .section5_write2_2r {
              color: red;
            }
          }
        }
      }
      & .section5_write3 {
        //박스 크기
        height: 100%;
        width: 100%;
        //박스 두 개로 나누기
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & .section5_write3_1 {
          //첫번째 박스 크기 설정
          height: 48%;
          width: 100%;
          background-color: white;
          position: relative; //안에 설정을 위해서 position 설정해둠
          & .section5_write3_1_ti {
            //글씨 위치 크기 색 설정
            position: absolute;
            top: 15%;
            left: 10%;
            font-size: 2rem;
            font-weight: bolder;
          }
          & .section5_write3_1_bu {
            //글씨 위치 설정
            position: absolute;
            top: 12%;
            left: 74%;
            & .section5_write3_1_bu_plu,
            & .section5_write3_1_bu_min {
              //글씨 크기 여백 색 설정
              padding: 0.5rem;
              font-size: 3rem;
              font-weight: bolder;
              color: gray;
              &:hover {
                cursor: pointer;
              }
            }
          }
          & .section5_write3_2_ti {
            display: none; //글씨 모두 안보이게 설정
            //글씨 위치 설정
            position: absolute;
            left: 9%;
            top: 55%;
            transform: translate(0, -50%);
            //글씨 색 여백 설정
            font-size: 1.6rem;
            padding-right: 3rem;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
        & .section5_write3_3 {
          //두번째 박스 크기 설정
          height: 48%;
          width: 100%;
          background-color: black;
          position: relative; //안에 position설정 위해서
          & .section5_write3_3_ti {
            //위치 설정
            position: absolute;
            top: 15%;
            left: 10%;
            //글씨 크기 사이즈 색 설정
            font-size: 2rem;
            font-weight: bolder;
            color: white;
          }
          & .section5_write3_3 {
            //위치 설정
            position: absolute;
            left: 9%;
            top: 66%;
            transform: translate(0, -50%);
            //글씨 크기 사이즈 색 설정
            font-size: 1.6rem;
            font-weight: bolder;
            color: gray;
          }
          &:hover {
            //마우스 갖다대면 배경 색 변화
            cursor: pointer;
            background-color: $grin;
            & .section5_write3_3 {
              background-color: $grin;
            }
            & .section5_write3_3_img {
              //그림 위로 올라오게
              animation-duration: 0.7s;
              animation-name: section5_5png;
              animation-fill-mode: forwards; //애니메이션 작동 후 고정
            }
          }

          & .section5_write3_3_img {
            //이미지 크기
            width: 40%;
            height: 90%;
            //이미지 위치
            position: absolute;
            left: 60%;
            top: 145%;
            & img {
              //이미지 보이는 영역-전부 다 보이게
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
@keyframes section5_5png {
  from {
    top: 145%;
  }
  to {
    top: 20%;
  }
}

//사이드에 버튼
#button_wrap {
  z-index: 2; //반응이 가장 잘 되도록
  width: 8rem; //차지하는 크기 설정
  //버튼 정렬
  display: flex;
  flex-direction: column;
  //위치 설정
  transform: translateY(45rem);
  top: 0;
  right: 0;
  //고정
  position: fixed;
  //맨 bottom만났을 때 버튼 사라졌다가 나타났다가 하도록
  transition: all 0.3s;
}
.section_button {
  //안에 버튼들끼리 여백
  margin: 1rem;
  //버튼 크기
  height: 1.3rem;
  width: 1.3rem;
  //버튼 테두리 색
  border: 0.2rem rgba(182, 182, 182, 0.705) solid;
  //버튼 동그랗게
  border-radius: 40rem;
  //버튼 색
  background-color: rgba(0, 0, 255, 0);
  &:hover {
    cursor: pointer; //마우스 대면 포인터로
  }
}

#footer_wrap {
  //차지하는 영역
  width: 94%;
  height: 18rem;
  //가운데로 오도록
  margin: 0 auto;
  position: relative;
  //여백
  padding-top: 8rem;
  & .footer_1 {
    //위치 설정
    position: absolute;
    left: 0;
    //글씨 크기 굵기
    font-size: 4rem;
    font-weight: 1000;
  }
  & .footer_2 {
    //글씨 차지하는 비율, 위치 설정
    width: 30%;
    position: absolute;
    left: 15%;
    & .footer_2_1 {
      //글씨들 정렬, 같은 크기만큼 나누기
      display: flex;
      justify-content: space-between;
      & p {
        //글씨 크기 굵기 설정
        font-size: 1.8rem;
        &:hover {
          cursor: pointer;
        }
        &:first-child {
          font-weight: 1000;
        }
        &:last-child {
          //마지막 글씨만 색 입히기
          font-weight: 1000;
          color: $grin;
        }
      }
    }
    & .footer_2_2 {
      //글씨 색 굵기 색
      padding-top: 3rem;
      & p {
        font-size: 1.8rem;
        color: gray;
      }
    }
  }
  & .footer_3 {
    //위치 설정
    position: absolute;
    right: 0;
    //글씨 박스
    border: 0.15rem gray solid;
    border-radius: 5rem;
    //글씨 넣고 여백
    padding: 1.5rem 5rem;
    //글씨 크기
    font-size: 1.8rem;
    &:hover {
      cursor: pointer;
    }
  }
}
```

## 2.JAVA SCRIPT-main.js
#### 기능 설명
* 스크롤에 따른 페이지 이동
* 버튼 클릭 시 스크롤 페이지 이동
* 스크롤 페이지에 따라 메인메뉴 글씨 색 변화
```
const section_wrap = document.getElementsByClassName("section_wrap"),
  section_button = document.getElementsByClassName("section_button"),
  button_wrap = document.getElementById("button_wrap"),
  header_wrap = document.getElementById("header_wrap"),
  header_wrap_menu = document.getElementById("header_wrap_menu");
const section_wrap_length = section_wrap.length;
const section_wrap_Height = window.innerHeight;

window.onbeforeunload = function () {
  //화면 새로고침 하거나 나갔을 때 발생 시키기
  window.scrollTo(0, 0); //스크롤을 맨 위로 올려줌
};
//페이지 버튼을 누르면 색 변화
function button_color(i) {
  for (let j = 0; j < section_button.length; j++) {
    if (j != i) {
      section_button[j].style.backgroundColor = "rgba(0, 0, 255, 0)"; //현재 페이지 화면이 아니면, 버튼 색 투명하게
    }
  }
  section_button[i].style.backgroundColor = "rgba(182, 182, 182, 0.705)"; //현재 페이지 화면은 버튼 색 칠해짐
}

let k = 0; //페이지 위치를 나타내는 역할
let mouseWheel = true; //휠을 몇 초가 정지시키기 위해 만듬.
document.addEventListener("mousewheel", function (e) {
  if (!mouseWheel) {
    return false; //만약 mouseWheel=false면 마우스휠 이벤트가 작동 안됨.
  }
  mouseWheel = false; //mouseWheel=false 만들어줌
  setTimeout(function () {
    mouseWheel = true;
  }, 700); //0.7초가 mouseWheel=false로 해서 마우스 휠 이벤트를 정지시켰다가 mouseWheel = true로 바꿔줌
  let delta = e.wheelDelta; //e.wheelDelta는 마우스휠이 내려가면 -, 마우스휠이 올라가면 +로 바뀜
  if (delta < 0) {
    //e.wheelDelta가 -이면
    if (section_wrap_length - 2 > k) {
      //전체 페이지 길이-2(마지막 바텀에서는 버튼들 안보이게 해 줄 거임.)보다 k가 작다면
      k++; //페이지 +1
      button_color(k); //다음 페이지로 바뀌므로 버튼 색도 변화 시켜줌
    } else if (section_wrap_length - 1 > k) {
      //전체 페이지 길이-1 ==> 바텀 페이지
      k++; //페이지 +1
      button_wrap.style.right = "-10rem"; //버튼이 화면 밖으로 나가도록 (css에서 애니메이션 같이 구현)
      header_wrap.style.color = "black"; //바텀 페이지에서는  메인 메뉴 글씨색은 검정으로
    }
  } else {
    //e.wheelDelta가 +이면
    if (0 < k) {
      k--; //페이지 -1
      button_color(k); //위 페이지로 바뀌므로 버튼 색도 변화
      if (button_wrap.style.right === "-10rem") {
        //만약 버튼이 화면 밖에 있다면(즉 바텀 페이지라면,)
        button_wrap.style.right = "0rem"; //다시 버튼이 보이도록 버튼 right 이동
      }
    }
  }
  header_wrap_color(k); //페이지가 짝수일때와 홀수일때 메인메뉴 글씨색 달리하기.
  window.scrollTo({
    //스크롤 시,
    top: section_wrap_Height * k, //전체 보여지는 화면 크기에 k갯수 만큼 페이지가 넘겨짐
    behavior: "smooth", //부드러운 효과
  });
});

//버튼 클릭시 페이지 이동
for (let i = 0; i < section_button.length; i++) {
  section_button[i].addEventListener("click", function () {
    button_color(i); //눌러진 버튼 색 변경
    header_wrap_color(i); //메인 메뉴 페이지 짝수 홀수 따라서 글씨색 바뀜
    window.scrollTo({
      //스크롤 작동
      top: section_wrap_Height * i, //전체 보여지는 화면 크기에 i만큼 페이지가 넘겨짐.(top길이가 바뀌기 때문)
      behavior: "smooth",
    });
    k = i;
  });
}

//메인 메뉴 글씨 색 변경
function header_wrap_color(k) {
  if (k % 2 === 1) {
    //홀수 일때는 검정, 짝수 일 때는 흰색
    header_wrap.style.color = "black";
  } else {
    header_wrap.style.color = "white";
  }
}

header_wrap_menu.addEventListener("mouseenter", function () {
  //메인메뉴에 마우스 갖다대면
  header_wrap.style.color = "black"; //메인메뉴 색 검정으로
  header_menu.style.display = "block"; //메인메뉴 펼쳐짐
  header_wrap.style.backgroundColor = "white"; //메인메뉴 배경색 흰색으로 바뀜
});
header_wrap_menu.addEventListener("mouseleave", function () {
  //메인메뉴에 마우스 때면
  if (k % 2 === 1) {
    //페이지가 홀 수 일때는 검정으로 그대로
    header_wrap.style.color = "black";
  } else {
    //짝수는 흰색
    header_wrap.style.color = "white";
  }
  header_menu.style.display = "none"; //메인메뉴 안보이게
  header_wrap.style.backgroundColor = "transparent"; //메인 메뉴 색 없음으로(투명)
});

header_wrap_color(k);
```

## 3.JAVA SCRIPT-section1.js
#### (section은 각 슬라이드 페이지마다 기능 구현이다.)
#### 기능 설명
* 특정 글씨에 마우스 호버시 배경화면 변경+글씨 색, 글 변화
* 몇 초 마다 특정 글씨 색, 글 변화
```
const section1_write = document.getElementsByClassName("section1_write"),
  section1_word = document.getElementsByClassName("section1_word"),
  section_img1 = document.getElementsByClassName("section_img1"),
  section_bg = document.getElementsByClassName("section_bg");
const section1_write_a = section1_write[0].getElementsByTagName("a");

let i = -1; //특정 메뉴에 2초마다 변화주기 위하여-->들어가자마자 +1이 되므로 -1부터 시작해야 맨 위의 특정 메뉴 0부터 작동
for (let k = 0; k < section1_write_a.length; k++) {
  section1_write_a[k].style.color = "white"; //모든 특정 메뉴 글씨 색을 회색
  section1_word[k].style.display = "none"; //모든 특정 메뉴에 따른 설명 글도 안보이게 설정 한뒤
}
function time_section1_write() {
  i++; //i 값 올리기
  if (i == section1_write_a.length) {
    //만약 i가 특정 메뉴 글씨 수와 같다면
    for (let j of section1_write_a) {
      j.style.color = "white"; //모든 글씨 색을 화이트로 만들어줌
      section1_word[i - 1].style.display = "none"; //밑에 설명은 안보이게
    }
  } else if (i == section1_write_a.length + 1) {
    //만약 i가 특정 메뉴 수의 범위를 벗어난다면 -1로 처리
    i = -1; //그래야 다시 time_section1_write()돌아가면서 특정 메뉴 0부터 돌아감.
  } else {
    for (let k = 0; k < section1_write_a.length; k++) {
      if (k == i) {
        //해당 i값을 가진 특정 메뉴는
        section1_write_a[i].style.color = "white"; //특정 메뉴 색이 흰색으로 바뀜
        section1_word[i].style.display = "block"; //특정 메뉴 설명 글만 보이게
      } else {
        section1_write_a[k].style.color = "rgba(114, 109, 109, 0.5)"; //나머지 메뉴 색은 회색
        section1_word[k].style.display = "none"; //나머지 설명 글도 안보이게
      }
    }
  }
}
let pause = true; //평소엔 true지만, 특정 메뉴 글씨에 갖다대면 false로 바뀌어서 글씨 색이 2초마다 돌아가는게 멈추게 됨.
for (let k = 0; k < section1_write_a.length; k++) {
  //특정 메뉴 글씨에 갖다댐
  section1_write_a[k].addEventListener("mouseenter", function () {
    for (let k = 0; k < section1_write_a.length; k++) {
      section1_write_a[k].style.color = "rgba(114, 109, 109, 0.5)"; //모든 특정 메뉴 글씨 색을 회색
      section1_word[k].style.display = "none"; //모든 특정 메뉴에 따른 설명 글도 안보이게 설정 한뒤
    }
    //다시 내가 갖다댄 특정 메뉴만 변화하게 해줌
    section1_write_a[k].style.color = "white"; //흰색으로
    section1_word[k].style.display = "block"; //특정 메뉴에 따른 설명 글만 보이게
    section_img1[k].style.display = "block"; //특정 메뉴에 따른 배경 이미지가 보이게
    section_bg[0].style.display = "none"; //동영상은 안보이게
    pause = false; //false로 바뀌어서 2초마다 메인 글씨 색이 변화하는 걸 멈춤
    i = -1; //나중에 마우스를 땠을 때, 글씨가 처음부터 time_section1_write()이 작동하도록 하기 위해서
  });
  section1_write_a[k].addEventListener("mouseleave", function () {
    //특정 메뉴에 마우스 때기
    section1_write_a[k].style.color = "rgba(114, 109, 109, 0.5)"; //색 다시 회색으로
    section1_word[k].style.display = "none"; //글씨 안보이게
    section_img1[k].style.display = "none"; //배경 이미지 안보이게
    section_bg[0].style.display = "block"; //다시 동영상 보이게
    pause = true; //다시 true로 바꿔서 time_section1_write()이 2초마다 돌아가도록
  });
}

setInterval(function () {
  if (pause) {
    //만약 true라면
    time_section1_write(); //애가 2초마다 돌아감
  }
}, 2000);
```

## 4.JAVA SCRIPT-section2.js
#### 기능 설명
* 버튼 클릭 시 박스 이동+특정 글씨 움직임,크기 변화
* 각 박스 마다 마우스 호버 시 안 보이던 글 생성
```
const section2_slide = document.getElementById("section2_slide"),
  section2_slide1 = document.getElementsByClassName("section2_slide1"),
  section2_box = document.getElementsByClassName("section2_box"),
  section2_box_p1 = document.getElementsByClassName("section2_box_p1"),
  section2_button1 = document.getElementsByClassName("section2_button1"),
  section2_button2 = document.getElementsByClassName("section2_button2"),
  section2_wirte = document.getElementsByClassName("section2_wirte"),
  section2_p2 = document.getElementsByClassName("section2_p2");
for (let k = 0; k < section2_box.length; k++) {
  //각각의 뉴스 박스에 마우스 갖다 댈 때,
  section2_box[k].addEventListener("mouseenter", function () {
    section2_slide1[k].style.overflow = "visible"; //그림 크기 밖에서도 기사 박스가 보이도록 visible
    section2_box[k].style.backgroundColor = "white"; //기사 박스색 흰색으로
    section2_box[k].style.top = "50%"; //그림 위로 기사 박스가 올라오게
    section2_box[k].style.boxShadow = //기사 박스에 그림자
      " 5px 5px 5px 5px rgba(158, 157, 157, 0.644)";
    section2_box_p1[k].style.color = "black"; //기사 글씨 색 검정으로 변경
  });
  section2_box[k].addEventListener("mouseleave", function () {
    //각각의 뉴스 박스에 마우스 떼면,
    section2_slide1[k].style.overflow = "hidden"; //그림 크기 밖에서 기사 박스가 안보이게
    section2_box[k].style.backgroundColor = "transparent"; //기사 박스 배경색 없애기
    section2_box[k].style.top = "70%"; //기사 글씨가 그림 아래로 내려가게
    section2_box[k].style.boxShadow = "none"; //그림자 없애기
    section2_box_p1[k].style.color = "white"; //기사 글씨 색 흰색으로 변경
  });
}

//버튼 양쪽으로 움직이기 --> 기사 박스 넘기기
let a = section2_slide.offsetLeft; //전체 기사들을 포함하는 박스를 뺀 나머지 left의 길이
let section2_slide1_width = section2_slide1[0].clientWidth; //하나의 기사의 길이
let section2_button_i = 0; //기사 번호
function section2_button_fc(j) {
  section2_button_i = j; //버튼에 따라서 기사 번호를 받아옴
  console.log(section2_button_i);
  if (section2_button_i === -1) {
    //만약 기사 번호보다 낮은 값이라면
    section2_button_i = 0; //기사가 더 이상 갈 수 없으므로 값 기사 번호가 0으로 고정 됨
  } else if (section2_button_i === section2_box.length) {
    //만약 기사 번호보다 큰 값이라면
    section2_button_i = section2_box.length - 1; //마지막 기사 번호로 고정됨
  }
  section2_slide.style.left = //전체 기사를 포함하는 박스의 left는
    a - section2_slide1_width * section2_button_i + "px"; //offsetLeft에서 기사길이*기사 번호만큼 빼줌.(전체 기사박스가 그만큼의 left만 남김.)
  section2_wirte[0].style.display = "none"; //화면 왼쪽 글씨들 안보이게
  section2_p2_big(); //특정 글씨 위치 크기 변경 function
  if (section2_button_i === 0) {
    //만약 기사가 맨 첨으로 돌아온다면
    section2_wirte[0].style.display = "flex"; //화면 왼쪽 글씨들 다시 보이게
    section2_p2_small(); //특정 글씨 위치 크기 변경 function
  }
}
section2_button1[0].addEventListener("click", function () {
  section2_button_i--; //뒤로 가는 버튼 클릭 시 기사 번호 -
  section2_button_fc(section2_button_i);
});
section2_button2[0].addEventListener("click", function () {
  section2_button_i++; //앞으로가는 버튼 클릭 시 기사 번호 +
  section2_button_fc(section2_button_i);
});
function section2_p2_big() {
  //기사 박스가 움직이면 특정 글씨 위치,사이즈,zindex,색 크게 변경
  section2_p2[0].style.top = "22%";
  section2_p2[0].style.fontSize = "150px";
  section2_p2[0].style.left = "13.7%";
  section2_p2[0].style.zIndex = "0";
  section2_p2[0].style.color = "gray";
}
function section2_p2_small() {
  //기사 박스가 처음으로 돌아오면 특정 글씨 위치,사이즈,zindex,색 크게 변경
  section2_p2[0].style.top = "37%";
  section2_p2[0].style.fontSize = "100px";
  section2_p2[0].style.left = "15%";
  section2_p2[0].style.zIndex = "2";
  section2_p2[0].style.color = "black";
}
```

## 5.JAVA SCRIPT-section3.js
#### 기능 설명
* 특정 메뉴에 마우스 호버 시 메뉴 생성, 움직임 변화, 배경 변화
```
const section3_write1 = document.getElementsByClassName("section3_write1"),
  section3_word = document.getElementsByClassName("section3_word"),
  section3_img1 = document.getElementsByClassName("section3_img1"),
  section3_bg = document.getElementsByClassName("section3_bg"),
  section3_write = document.getElementsByClassName("section3_write");

for (let k = 0; k < section3_write.length; k++) {
  section3_write1[k].addEventListener("mouseenter", function () {
    //선택된 메뉴에
    section3_write[k].style.backgroundColor = "rgb(19,19,19,0.3)"; //전체 배경 색 회색으로
    section3_write1[k].style.top = "50%"; //메인 글씨 위로 올라오게
    section3_word[k].style.top = "70%"; //부과 글씨 위로 올라오게
    section3_word[k].style.display = "block"; //부과 글씨 보이게
    section3_img1[k].style.display = "block"; //선택된 메뉴에 배경화면 보이게
    section3_bg[0].style.display = "none"; //동영상 화면 안 보이게
  });
  section3_write[k].addEventListener("mouseleave", function () {
    //선택된 메뉴에서 마우스 떼면
    section3_write[k].style.backgroundColor = "transparent"; //전체 배경 색 없애기
    section3_write1[k].style.top = "70%"; //메인 글씨 아래로 내려보냄
    section3_word[k].style.top = "90%"; //부과 글씨 아래로
    section3_word[k].style.display = "none"; //부과 글씨 안보이게
    section3_img1[k].style.display = "none"; //선택된 메뉴 배경화면 다시 안보이게
    section3_bg[0].style.display = "block"; //동영상 화면 보이게
  });
}
```

## 6.JAVA SCRIPT-section4.js
#### 기능 설명
* 각 기사에 따른 마우스 호버 시 크기 변화, 글 생성, 다른 기사 축소
```
const section4_word = document.getElementsByClassName("section4_word"),
  section4_write = document.getElementsByClassName("section4_write"),
  section4_write_wrap = document.getElementsByClassName("section4_write_wrap");

let section4_i = 0; //기사를 위한 번호
for (let k = 0; k < section4_write.length; k++) {
  section4_write[k].addEventListener("mouseenter", function () {
    //해당 기사에 마우스 올리면
    section4_write[k].style.height = "30%"; //높이 커지고
    section4_write[k].style.backgroundColor = "rgb(251, 255, 193)"; //배경색 바꾸고
    section4_word[k].style.display = "block"; //안 보이던 기사 글씨들 보이게
    for (let j = 0; j < section4_write.length; j++) {
      if (k != j) {
        //나머지 기사들
        section4_write[j].style.height = "10%"; //높이 작게
        section4_write[j].style.backgroundColor = "transparent"; //배경색 없애기
        section4_word[j].style.display = "none"; //기사 글씨 안보이게
      }
    }
  });
}
```

## 6.JAVA SCRIPT-section5.js
#### 기능 설명
* 버튼 클릭 시 기사 변화
```
const section5_write3_1_bu_min = document.getElementsByClassName(
    "section5_write3_1_bu_min"
  ),
  section5_write3_1_bu_plu = document.getElementsByClassName(
    "section5_write3_1_bu_plu"
  ),
  section5_write3_2_ti = document.getElementsByClassName(
    "section5_write3_2_ti"
  );
let section5_i = 0; //넘기는 페이지 번호
section5_write3_2_ti[section5_i].style.display = "block";
function section5_button(j) {
  section5_i = j; //버튼 클릭으로 받은 값을 section5_i에 넣어줌. 그러면 그 값이 자동으로 저장.(페이지 누를 때 그래야 값을 기억하니)
  if (section5_i < 0) {
    //0보다 작다면 마지막 페이지 번호로 바뀜
    section5_i = section5_write3_2_ti.length - 1;
  } else if (section5_i > section5_write3_2_ti.length - 1) {
    //마지막 페이지 번호보다 크다면 페이지 번호 0으로 바뀜
    section5_i = 0;
  }
  for (let k = 0; k < section5_write3_2_ti.length; k++) {
    if (k === section5_i) {
      //해당 페이지 번호의 글씨 보이게
      section5_write3_2_ti[k].style.display = "block";
    } else {
      //다른 페이지 번호의 글씨는 안 보이게
      section5_write3_2_ti[k].style.display = "none";
    }
  }
}
//-페이지 누르면 페이지 뒤로
section5_write3_1_bu_min[0].addEventListener("click", function () {
  section5_i--; //버튼 -
  section5_button(section5_i); //버튼에 페이지 번호 넣어줌
});
//+페이지 누르면 페이지 앞으로
section5_write3_1_bu_plu[0].addEventListener("click", function () {
  section5_i++; //버튼 +
  section5_button(section5_i); //버튼에 페이지 번호 넣어줌
});
```
