//ҳ�������ɺ�ִ�еĴ���
        $(document).ready(function () {
            //�������ʦ
            $("#banner .yys").css({
                "width": 70,
                "height": 199,
                "top": 38
            });
            $("#banner .yys").animate({
                "left": 50,
                "opacity": 1
            }, 1300);

            //slogon
            $("#banner .slogon").animate({
                "top": "65px",
                "opacity": 1
            }, 1000);

            //shenle
            $("#banner .shenle").animate({
                "top": "0px",
                "opacity": 1
            }, 900);

            //qingmin
            $("#banner .qingming").animate({
                "top": "40px",
                "opacity": 1
            }, 1100);

            $("#banner .qingwa").animate({
                "left": "50%",
                "opacity": 1
            }, 1500);


            //�ײ�

            //��ά��ɨ��
            var bu = 0;
            var interval=1;
            setInterval(function () {
                bu += interval;
                $(".nie_download_wrap  .NIE-qrcode .line").css("top", bu + "px");

                if (bu == 100) {
                    interval = -1;
                }else if(bu == 0){
                    interval = 1;
                }

            }, 17);//17���룬�˶�����ʮ��˳��




    //��ҳ ����ʦ��ʧ
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()) {
            $("#banner .yys").hide();

        }
        //���ֵ����� ����ʦ����
        if ($(window).scrollTop() == 0) {
            $("#banner .yys").show(1000);
        }
    });

    //�ײ�������� �����¼�

    $(".foot .foot_button").mouseenter(function () {

        $(".foot .txt2").stop().animate({
            "opacity": 0
        });
        $(".foot .bar").stop().animate({
            "marginTop": "-13px"
        });
        $(".foot .door").stop().animate({
            "marginTop": "50px"
        });
        $(".foot .foot_button1").stop().animate({
            "marginTop": "-25px",
            "opacity": 1
        });
    });
    //����Ƴ��¼�
    $(".foot .foot_button").mouseleave(function () {

        $(".foot .txt2").stop().animate({
            "opacity": 1
        });
        $(".foot .bar").stop().animate({
            "marginTop": "60px"
        });
        $(".foot .door").stop().animate({
            "marginTop": "0px"
        });
        $(".foot .foot_button1").stop().animate({
            "marginTop": "0px",
            "opacity": 0
        });
    });


    //    section���ַ��ض�����ͷ
    $(".section .back_top ").mouseenter(function () {
        $(this).stop().animate({
            "top": "-20px"
        });
    });

    $(".section .back_top ").mouseleave(function () {
        $(this).stop().animate({
            "top": "0px"
        });
    });

    $(".section .back_top ").click(function () {
        $(document.body).animate({
            "scrollTop": "0px"
        });
    });


    //    activity�����������ͼƬ�Ŵ�

    // $(".activity_wrap .activity_item img").mouseenter(function () {
    //     $(this).stop().animate({
    //         "width": "110%",
    //         "height": "110%"
    //     })
    // })

    $(".activity_wrap .activity_item img").mouseleave(function () {
        $(this).stop().animate({
            "width": "100%",
            "height": "100%"
        })
    })


    //    video�����������ͼƬ�Ŵ�
    $(".video img").mouseenter(function () {
        $(this).stop().animate({
            "opacity": 1
        })
    });

    $(".video img").mouseleave(function () {
        $(this).stop().animate({
            "opacity": 0.5
        })
    });


    //tongren tab���������

    $(".tongren .tongren_tabs li:not(.lastone)").mouseenter(function () {

        //��ť����
        $(this).children().children("span").stop().animate({
            "top": "-1px"
        })
        $(this).children().children("i").stop().animate({
            "top": "24px"
        })

        //��ͬ��ť�л���ͬ����
        var index = $(this).index();
//        console.log(index);
        $(".tongren .tempWrap .tongren_pics_wrap").stop().animate({
            "left": (-1220 * index) + "px"
        })

    });

    $(".tongren .tongren_tabs li:not(.lastone)").mouseleave(function () {
        //��ť����
        $(this).children().children("span").stop().animate({
            "top": "18px"
        })
        $(this).children().children("i").stop().animate({
            "top": "75px"
        })

    })

    $(".tongren .tongren_tabs li:not(.lastone)").on({
        "click": function () {
            console.log(1);
            $(this).siblings("li").children("a").removeClass("on");
            $(this).children("a").addClass("on")
        }
    })

    //�������lastone�ƶ�
    //    $(".tongren .tongren_topbar .to_tuku").mouseenter(function () {
    //        $(this).stop().animate({
    //            "right":"-15px"
    //        });
    //    });
    //
    //    $(".tongren .tongren_topbar .to_tuku").mouseleave(function () {
    //        $(this).stop().animate({
    //            "right":"0px"
    //        });
    //    });

    $(".tongren .tongren_topbar .to_tuku").on({
        "mouseenter": function () {
            $(this).stop().animate({
                "right": "-15px"
            });
        },
        "mouseleave": function () {
            $(this).stop().animate({
                "right": "0px"
            });
        }
    })

    //tongren ���������Ƶ��������
    $(".tongren_pics li a span").mouseenter(function () {
        //��������
        $(this).animate({
            "opacity": 1
        })
    })

    $(".tongren_pics li a span").mouseleave(function () {
        //������ʧ
        $(this).animate({
            "opacity": 0
        })
    })


    //strategy  �Ҳ��ֲ�ͼ
    $(".strategy .com_tabs .tab_item ").on({
                "mouseenter": function () {
                    $(this).children("em").stop().animate({
                        "opacity": 1,
                        "top": "0px"
                    });
                    var index = $(this).index() / 2;
                    $(".tempWrap .strategy_list").stop().animate({
                        "left": -index * 835 + "px"
                    })
                },
                "mouseleave": function () {
                    $(this).children("em").stop().animate({
                        "opacity": 0,
                        "top": "10px"
                    })
                }
            }
    )


    //strategy ���������
    //�ж��Ƿ�Ϊ��
    //    $("#txtSearchKeyword").on({"focus": function () {
    //        console.log(1);
    //        $(this).val("");
    //    },"blur": function () {
    //        if($(this).val()==""){
    //            $(this).val("������弼�����");
    //        }
    //    }})
    //���������ť
    $(".strategy .btn_search").on({
        "click": function () {
            console.log(1);
            if ($("#txtSearchKeyword").val() == "") {
                alert("������ؼ���")
            }
        }
    })

    //    ���������뻬��
    $(".strategy_nav a").on({
        "mouseenter": function () {
            $(this).children("span").stop().animate({"top": "-15px"})
        },
        "mouseleave": function () {
            $(this).children("span").stop().animate({"top": "0px"})
        }
    })
    //�Զ�����
    //    var timer = null;
    //    var a = 1
    //    function scroll(){
    //        $(".tempWrap .strategy_banner_wrap").animate({
    //            "left":-368*a+"px"
    //        })
    //        a = 1? 0:1;
    //        console.log(a);
    //    }
    //
    //    timer=setInterval(function () {
    //        scroll()
    //    },1500)
    $(".strategy_banner_nav a").on({
        "mouseenter": function () {
            var index = $(this).index();
            $(this).siblings("a").removeClass("on");
            $(this).addClass("on");
            $(".tempWrap .strategy_banner_wrap").animate({
                "left": -368 * index + "px"
            }, 600)
        }
    })

    var count = 0;
    var timer = null;
    var firstPic = $(".strategy_banner_wrap a").eq(0).clone();
    $(".tempWrap .strategy_banner_wrap").append(firstPic);
    $(".tempWrap .strategy_banner_wrap").css("width", $(".strategy_banner_wrap a").length * 368 + "px")
    function play() {
        if (count == $(".strategy_banner_wrap a").length - 1) {
            $(".tempWrap .strategy_banner_wrap").css("left", "0px")
            count = 0;
        }
        count++;
        $(".tempWrap .strategy_banner_wrap").stop().animate({
            "left": -count * 368 + "px"
        })
        $(".strategy_banner_nav a").removeClass("on");
        if (count == $(".strategy_banner_nav a").length) {
            $(".strategy_banner_nav a").eq(0).addClass("on")
        } else {
            $(".strategy_banner_nav a").eq(count).addClass("on")
        }
    }
    timer = setInterval(play, 1500)


    $(".strategy_banner").on({
        "mouseenter": function () {
            clearInterval(timer);
        },
        "mouseleave": function () {
            clearInterval(timer);
            timer = setInterval(play, 1500)
        }
    })

    //�����������
    $(".strategy_list ul li a").on({
        "mouseenter": function () {
            $(this).children().children("span").css("color", "#c1831c")
        },
        "mouseleave": function () {
            $(this).children().children("span").css("color", "#333")
        }
    })


    //banner�ֲ�ͼ

    var shu = 0;
    var timer1 = null;
    var onePic = $(".news_section .banner_wrap a").eq(0).clone();
    $(".news_section .banner_wrap").append(onePic);

    $(".news_section .banner_wrap").css("width", $(".news_section .banner_wrap a").length * 360 + "px")
    function player() {
        if (shu == $(".news_section .banner_wrap a").length - 1) {
            $(".news_section .banner_wrap").css("left", "0px")
            shu = 0;
        }
        shu++;
        $(".news_section .banner_wrap").stop().animate({
            "left": -shu * 360 + "px"
        }, 800)
        $(".news_section .banner_nav a").removeClass("on");
        if (shu == $(".news_section .banner_nav a").length) {
            $(".news_section .banner_nav a").eq(0).addClass("on")
        } else {
            $(".news_section .banner_nav a").eq(shu).addClass("on")
        }
    }
    timer1 = setInterval(player, 3000);

    $(".news_section .banner_nav a").on({
        "mouseenter": function () {
            var index = $(this).index();
            $(this).siblings("a").removeClass("on");
            $(this).addClass("on");
            $(".news_section .banner_wrap").stop().animate({
                "left": -360 * index + "px"
            }, 800)
        }
    })

    $(".news_section .banner_item").on({
        "mouseenter": function () {
            clearInterval(timer1);
        },
        "mouseleave": function () {
            clearInterval(timer1);
            timer1 = setInterval(player, 3000)
        }
    })

    //���ֵ������
    $(".nie_download_wrap .nie-download .close_donwloadbar").on({
        "click": function () {
            $(".nie_download_wrap .nie-download").hide(500);
            $(".nie_download_wrap .fold_wrap").show();
            $(".nie_download_wrap").addClass("fold");
            $(".nie_download_wrap.fold").stop().animate({
                "marginLeft": "200px"
            })
        }
    })
    //�������
    $(".nie_download_wrap .fold_wrap a").on({
        "click": function () {
            $(".nie_download_wrap .nie-download").show();
            $(".nie_download_wrap .fold_wrap").hide();
            $(".nie_download_wrap").removeClass("fold");
            $(".nie_download_wrap").stop().animate({
                "marginLeft": "-148px"
            })
        }
    })


    //    new���ֻ�ҳ
    $(".news_wrap .news_tab span").on({
        "mouseenter": function () {
            $(this).siblings("em").stop().animate({
                "opacity": 1,
                "top": "4px"
            }, 300);
            var index = $(this).parent().index();
            console.log(index);
            $(".news_wrap .tempWrap2 .news_list").stop().animate({
                "left": -index * 500 + "px"
            })
        },
        "mouseleave": function () {
            $(this).siblings("em").stop().animate({
                "opacity": 0,
                "top": "12px"
            })
        }

    })
    //������� �����ɫ
    $(".tempWrap2 .news_list ul li a").on({
        "mouseenter": function () {
            $(this).css("color", "#c1831c")
        },
        "mouseleave": function () {
            $(this).css("color", "#333")
        }
    })


    //shishen  �����ť�����沿��
    $(".com_tabs a").on({
        "click": function () {
            $(this).siblings().children("em").stop().animate({
                "opacity": 0,
                "top": "10px"
            })
            $(this).children("em").stop().animate({
                "opacity": 1,
                "top": "0px"
            })
        }
    })

    $(".com_tabs a").eq(0).on({
        "click": function () {

            $(".pingan_container .shishen_container").addClass("show").siblings().removeClass("show");
        }
    })

    $(".com_tabs a").eq(1).on({
        "click": function () {
            $(".pingan_container .zhujue_container").addClass("show").siblings().removeClass("show")
        }
    })

    //������� ��ɫ����
    $(".zhujue_container .zhujue_tabs a").on({
        "click": function () {
            var index = $(this).index();
            $(this).addClass("cur").siblings().removeClass("cur");
            $(".zhujue_container").children(".zhujue_wrap").eq(index).addClass("show").siblings().removeClass("show");
        }
    })

/*    
       $(".shishen_wrap ul li").on({
           "mouseenter": function () {
               $(this).children().children().stop().animate({
                   "opacity":1
               })
           },
           "mouseleave": function () {
               $(this).children().children().stop().animate({
                   "opacity":0
               })
           }
       })*/

    $(".shishen_tabs a").on({
        "click": function () {
            $(this).addClass("cur").siblings().removeClass("cur")
        }
    })


    $(".index_side_bar .link_list .odd").on({
        "mouseenter": function () {
            $(this).stop().animate({
                "marginRight": "13px"
            })
        },
        "mouseleave": function () {
            $(this).stop().animate({
                "marginRight": "28px"
            })
        }
    })

    $(".index_side_bar .link_list .even").on({
        "mouseenter": function () {
            $(this).stop().animate({
                "marginLeft": "43px"
            })
        },
        "mouseleave": function () {
            $(this).stop().animate({
                "marginLeft": "28px"
            })
        }
    })

    $(".index_side_bar .link_list .even1").on({
        "mouseenter": function () {
            $(this).stop().animate({
                "marginTop": "5px"
            })
        },
        "mouseleave": function () {
            $(this).stop().animate({
                "marginTop": "-5px"
            })
        }
    })

    $(".link_list .icon7").on({
        "mouseenter": function () {
            $(".icon7_h").stop().slideDown(function () {
                $(this).css("display", "block")
            })
        },
        "mouseleave": function () {
            $(".icon7_h").stop().slideUp(function () {
                $(this).css("display", "none")
            })
        },
    })





    //top_bar ����ҳ��λ�ù̶�ȡ��
    $(window).scroll(function () {
        if($(this).scrollTop()>$("#top").height()){
            $(".top_bar .left_part").stop().animate({
                "opacity":1
            },200)

            $("#banner .top_bar").addClass("fixed");
        }else{
            $("#banner .top_bar").removeClass("fixed");
            $(".top_bar .left_part").stop().animate({
                "opacity":0
            },200)
        }
    })




    //��������������ֱ�ɫ
    $(".top_bar .topnav_list li").on({
        "mouseenter": function () {
            $(this).children("a").css("color","red")
        },
        "mouseleave": function () {
            $(this).children("a").css("color","#333")
        }
    })
    $(".share6 .share-btn li").on({
        "mouseenter": function () {
            $(this).children("a").css("color","#c1831c")
        },
        "mouseleave": function () {
            $(this).children("a").css("color","#333")
        }
    })


    //���������ϷĿ¼ ����ҳ��
    $("#top-main .two").on({
        "mouseenter": function () {
            $("#table").stop().slideDown(function () {
                $(this).css("display", "block")
            })
        },
//        "mouseleave": function () {
//            $("#table").stop().slideUp(function () {
//                $(this).css("display", "none")
//            })
//        },
    })


    $("#table").on({
        "mouseleave": function () {
            $("#table").stop().slideUp(function () {
                $(this).css("display", "none")
            })
        }
    })
//    $("#top-main .two").on({
//        "mouseenter": function () {
//            console.log(1);
//            console.log($("#top-main #table").length);
//            $("#table").css("display","block");
//        }
//    })


            
        })

