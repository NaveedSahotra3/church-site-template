import React from 'react'
import '../../resources/css/main.css'
// import '../../resources/css/bootstrap.min.css'
import '../../resources/css/animations.css'
import '../../resources/css/shop.css'
// import '../../resources/css/fonts.css'
import '../../resources/css/dashboard.css'



const MainPage = () => {


    return (<div>



        {/* <div class="preloader">
			<div class="preloader_image"></div>
		</div> */}

        {/* <!-- search modal --> */}
        <div class="modal" tabindex="-1" role="dialog" aria-labelledby="search_modal" id="search_modal">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    <i class="rt-icon2-cross2"></i>
                </span>
            </button>
            <div class="widget widget_search">
                <form method="get" class="searchform search-form form-inline" action="http://webdesign-finder.com/html/betterlife/">
                    <div class="form-group">
                        <input type="text" value="" name="search" class="form-control" placeholder="Search keyword" id="modal-search-input" />
                    </div>
                    <button type="submit" class="theme_button">Search</button>
                </form>
            </div>
        </div>

        {/* <!-- Unyson messages modal --> */}
        <div class="modal fade" tabindex="-1" role="dialog" id="messages_modal">
            <div class="fw-messages-wrap ls with_padding">
                {/* <!-- Uncomment this UL with LI to show messages in modal popup to your user: --> */}

                <ul class="list-unstyled">
                    <li>Message To User</li>
                </ul>


            </div>
        </div>
        {/* <!-- eof .modal --> */}

        {/* <!-- wrappers for visual page editor and boxed version of template --> */}
        <div id="canvas">
            <div id="box_wrapper">

                {/* <!-- template sections --> */}

                <section class="intro_section ds page_mainslider">
                    <div class="flexslider" data-nav="false">
                        <ul class="slides">

                            <li>
                                <img src="images/slide01.jpg" alt="" />
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12 text-center">
                                            <div class="slide_description_wrapper">
                                                <div class="slide_description">
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <h3>
                                                            There is no other way except Jesus.
													</h3>
                                                    </div>
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <h2 class="bold">
                                                            We love God.
														<br /> We believe in God.
													</h2>
                                                    </div>
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <a class="theme_button color1" href="about.html">Read more</a>
                                                    </div>
                                                </div>
                                                {/* <!-- eof .slide_description --> */}
                                            </div>
                                            {/* <!-- eof .slide_description_wrapper --> */}
                                        </div>
                                        {/* <!-- eof .col-* --> */}
                                    </div>
                                    {/* <!-- eof .row --> */}
                                </div>
                                {/* <!-- eof .container --> */}
                            </li>

                            <li>
                                <img src="images/slide02.jpg" alt="" />
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12 text-center">
                                            <div class="slide_description_wrapper">
                                                <div class="slide_description">
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <h3>
                                                            Living Hope For Real People
													</h3>
                                                    </div>
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <h2 class="bold">
                                                            Where People Gather
														<br /> to Worship  Share
													</h2>
                                                    </div>
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <a class="theme_button color1" href="about.html">Read more</a>
                                                    </div>
                                                </div>
                                                {/* <!-- eof .slide_description --> */}
                                            </div>
                                            {/* <!-- eof .slide_description_wrapper --> */}
                                        </div>
                                        {/* <!-- eof .col-* --> */}
                                    </div>
                                    {/* <!-- eof .row --> */}
                                </div>
                                {/* <!-- eof .container --> */}
                            </li>

                            <li>
                                <img src="images/slide03.jpg" alt="" />
                                <div class="container">
                                    <div class="row">
                                        <div class="col-sm-12 text-center">
                                            <div class="slide_description_wrapper">
                                                <div class="slide_description">
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <h3>
                                                            Building Holy and Healthy Lives
													</h3>
                                                    </div>
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <h2 class="bold">
                                                            We Build Hope
														<br /> and Grow Together
													</h2>
                                                    </div>
                                                    <div class="intro-layer" data-animation="fadeInUp">
                                                        <a class="theme_button color1" href="about.html">Read more</a>
                                                    </div>
                                                </div>
                                                {/* <!-- eof .slide_description --> */}
                                            </div>
                                            {/* <!-- eof .slide_description_wrapper --> */}
                                        </div>
                                        {/* <!-- eof .col-* --> */}
                                    </div>
                                    {/* <!-- eof .row --> */}
                                </div>
                                {/* <!-- eof .container --> */}
                            </li>

                        </ul>
                    </div>
                    {/* <!-- eof flexslider --> */}
                </section>

                <header class="page_header header_white toggler_right with_bottom_border_container">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 display_table">
                                <div class="header_left_logo display_table_cell">
                                    <a href="index.html" class="logo top_logo">
                                        <img src="images/logo.png" alt="" />
                                        <span class="logo_text">
                                            <strong class="playfair">BetterLife</strong>
                                            <span class="small-text">your church</span>
                                        </span>
                                    </a>
                                </div>

                                <div class="header_mainmenu display_table_cell text-right">
                                    {/* <!-- main nav start --> */}
                                    <nav class="mainmenu_wrapper">
                                        <ul class="mainmenu nav sf-menu">
                                            <li class="active">
                                                <a href="#box_wrapper">Home</a>
                                                <ul>
                                                    <li>
                                                        <a href="index-2.html">MultiPage</a>
                                                    </li>
                                                    <li>
                                                        <a href="index_static.html">Static Intro</a>
                                                    </li>
                                                    <li>
                                                        <a href="index_singlepage.html">Single Page</a>
                                                    </li>
                                                    <li>
                                                        <a href="admin_index.html">Admin Dashboard</a>
                                                    </li>
                                                </ul>
                                            </li>


                                            <li>
                                                <a href="#about">About</a>
                                            </li>

                                            <li>
                                                <a href="#events">Events</a>
                                            </li>

                                            <li>
                                                <a href="#reviews">Reviews</a>
                                            </li>

                                            <li>
                                                <a href="#blog">Blog</a>
                                            </li>

                                            <li>
                                                <a href="#subscribe">Sibscribe</a>
                                            </li>

                                        </ul>
                                    </nav>
                                    {/* <!-- eof main nav --> */}
                                    {/* <!-- header toggler --> */}
                                    <span class="toggle_menu">
                                        <span></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section id="about" class="ls section_padding_top_100 section_padding_bottom_75 columns_margin_bottom_30">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-push-3 text-center">
                                <div class="horiz_lg_padding">
                                    <h3>About</h3>
                                    <h2 class="section_header highlight">Our Church</h2>
                                    <p class="grey playfair">Our mission is to share the Good of Jesus Christ, loving, faith and serving.</p>
                                    <p>
                                        We have a strong sense of community with parishioners. People and children of all ages here are encouraged to learn about their own faith and the role of the church in our community and worldwide. We invite anyone and everyone to attend our Sunday gatherings to celebrate God in song, scripture and prayer.
					</p>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3 col-md-pull-6">
                                <div class="with_background with_padding teaser text-center">
                                    <img src="images/icons/priest.png" alt="" />
                                    <h4 class="bottommargin_0 topmargin_10 grey">Daily Prayers</h4>
                                </div>
                                <div class="with_background with_padding teaser text-center topmargin_30">
                                    <img src="images/icons/bible.png" alt="" />
                                    <h4 class="bottommargin_0 topmargin_10 grey">Сontinuous Teaching</h4>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="with_background with_padding teaser text-center">
                                    <img src="images/icons/hands.png" alt="" />
                                    <h4 class="bottommargin_0 topmargin_10 grey">Community Helpers</h4>
                                </div>
                                <div class="with_background with_padding teaser text-center topmargin_30">
                                    <img src="images/icons/church.png" alt="" />
                                    <h4 class="bottommargin_0 topmargin_10 grey">Set of Sermons</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="ls">
                    <div class="owl-carousel center-scale" data-responsive-lg="5" data-responsive-md="5" data-responsive-sm="3" data-responsive-xs="2" data-center="true" data-loop="true" data-margin="0" data-nav="true">

                        <div class="vertical-item content-absolute corporate consulting">
                            <div class="item-media">
                                <img src="images/gallery_square/01.jpg" alt="" />
                                <div class="media-links">
                                    <a class="abs-link prettyPhoto" data-gal="prettyPhoto[gal]" title="" href="images/gallery/01.jpg"></a>
                                </div>
                            </div>
                        </div>

                        <div class="vertical-item content-absolute corporate consulting">
                            <div class="item-media">
                                <img src="images/gallery_square/02.jpg" alt="" />
                                <div class="media-links">
                                    <a class="abs-link prettyPhoto" data-gal="prettyPhoto[gal]" title="" href="images/gallery/02.jpg"></a>
                                </div>
                            </div>
                        </div>

                        <div class="vertical-item content-absolute corporate consulting">
                            <div class="item-media">
                                <img src="images/gallery_square/03.jpg" alt="" />
                                <div class="media-links">
                                    <a class="abs-link prettyPhoto" data-gal="prettyPhoto[gal]" title="" href="images/gallery/03.jpg"></a>
                                </div>
                            </div>
                        </div>

                        <div class="vertical-item content-absolute corporate consulting">
                            <div class="item-media">
                                <img src="images/gallery_square/04.jpg" alt="" />
                                <div class="media-links">
                                    <a class="abs-link prettyPhoto" data-gal="prettyPhoto[gal]" title="" href="images/gallery/04.jpg"></a>
                                </div>
                            </div>
                        </div>

                        <div class="vertical-item content-absolute corporate consulting">
                            <div class="item-media">
                                <img src="images/gallery_square/05.jpg" alt="" />
                                <div class="media-links">
                                    <a class="abs-link prettyPhoto" data-gal="prettyPhoto[gal]" title="" href="images/gallery/05.jpg"></a>
                                </div>
                            </div>
                        </div>

                        <div class="vertical-item content-absolute corporate consulting">
                            <div class="item-media">
                                <img src="images/gallery_square/06.jpg" alt="" />
                                <div class="media-links">
                                    <a class="abs-link prettyPhoto" data-gal="prettyPhoto[gal]" title="" href="images/gallery/06.jpg"></a>
                                </div>
                            </div>
                        </div>

                        <div class="vertical-item content-absolute corporate consulting">
                            <div class="item-media">
                                <img src="images/gallery_square/07.jpg" alt="" />
                                <div class="media-links">
                                    <a class="abs-link prettyPhoto" data-gal="prettyPhoto[gal]" title="" href="images/gallery/07.jpg"></a>
                                </div>
                            </div>
                        </div>

                        <div class="vertical-item content-absolute corporate consulting" />
                        <div class="item-media">
                            <img src="images/gallery_square/08.jpg" alt="" />
                            <div class="media-links">
                                <a class="abs-link prettyPhoto" data-gal="prettyPhoto[gal]" title="" href="images/gallery/08.jpg"></a>
                            </div>
                            {/* </div> */}
                        </div>

                    </div>
                </section>

                <section id="events" class="ls section_padding_top_100 section_padding_bottom_100">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">

                                {/* <!-- Nav tabs --> */}
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="active">
                                        <a href="#tab1" role="tab" data-toggle="tab">Past events</a>
                                    </li>
                                    <li>
                                        <a href="#tab2" role="tab" data-toggle="tab">Upcoming events</a>
                                    </li>
                                </ul>

                                {/* <!-- Tab panes --> */}
                                <div class="tab-content no-border top-color-border">
                                    <div class="tab-pane fade in active" id="tab1">

                                        <div class="row columns_padding_2">

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/01.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Holy Family Jumbo Advent Calendar
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/02.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Minutes of Your Fame
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/03.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            The History of New Thought of Mankind
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/04.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Feeling the God Inside You
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/05.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Series: Let’s Do It God’s Way
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/06.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Developing A Spiritual Mentality
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/07.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Perseverance of the Saints
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/08.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Church Movie Fellowship
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        {/* <!-- .row --> */}

                                    </div>
                                    <div class="tab-pane fade" id="tab2">

                                        <div class="row columns_padding_2">


                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/01.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Holy Family Jumbo Advent Calendar
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/02.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Minutes of Your Fame
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/03.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">

                                                        <h3 class="margin_0">
                                                            The History of New Thought of Mankind
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/04.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Feeling the God Inside You
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/05.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Series: Let’s Do It God’s Way
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/06.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">
                                                        {/* <!-- <div> --> */}
                                                        <h3 class="margin_0">
                                                            Developing A Spiritual Mentality
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/07.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">

                                                        <h3 class="margin_0">
                                                            Perseverance of the Saints
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-3 col-sm-6">
                                                <div class="vertical-item content-absolute vertical-center content-bg-hover cs">
                                                    <div class="item-media">
                                                        <img src="images/events/08.jpg" alt="" />
                                                        <div class="media-links">
                                                            <a class="abs-link" href="event-single-right.html"></a>
                                                        </div>
                                                    </div>
                                                    <div class="item-content">

                                                        <h3 class="margin_0">
                                                            Church Movie Fellowship
													</h3>

                                                        <div class="cs hovered-content thin">
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-calendar grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    Apr 30, 2017
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-map-marker grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    London, UK
															</div>
                                                            </div>
                                                            <div class="media small-teaser">
                                                                <div class="media-left">
                                                                    <i class="fa fa-phone grey fontsize_16"></i>
                                                                </div>
                                                                <div class="media-body">
                                                                    8 800 259 3489
															</div>
                                                            </div>
                                                        </div>
                                                        {/* <!-- </div> --> */}
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="reviews" class="ls ms background_cover page_testimonials section_padding_100">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 col-md-push-6">
                                <h3>Testimonials</h3>
                                <h2 class="section_header highlight">What They Say</h2>
                                <div class="owl-carousel topmargin_40" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" data-dots="true">

                                    <blockquote class="with_quote bottommargin_0">
                                        Ground round tenderloin alcatra, chicken landjaeger kevin short ribs ham hock pork chop. Bresaola capicola brisket shankle shank, strip steak burgdoggen. Pig tenderloin frankfurter porchetta.
									<div class="item-meta">
                                            <h5>
                                                <a href="#">Simon Green</a>
                                            </h5>
                                            <p>Church Visitor</p>
                                        </div>
                                    </blockquote>

                                    <blockquote class="with_quote bottommargin_0">
                                        Ground round tenderloin alcatra, chicken landjaeger kevin short ribs ham hock pork chop. Bresaola capicola brisket shankle shank, strip steak burgdoggen. Pig tenderloin frankfurter porchetta.
									<div class="item-meta">
                                            <h5>
                                                <a href="#">Simon Green</a>
                                            </h5>
                                            <p>Church Visitor</p>
                                        </div>
                                    </blockquote>

                                    <blockquote class="with_quote bottommargin_0">
                                        Ground round tenderloin alcatra, chicken landjaeger kevin short ribs ham hock pork chop. Bresaola capicola brisket shankle shank, strip steak burgdoggen. Pig tenderloin frankfurter porchetta.
									<div class="item-meta">
                                            <h5>
                                                <a href="#">Simon Green</a>
                                            </h5>
                                            <p>Church Visitor</p>
                                        </div>
                                    </blockquote>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="blog" class="ls section_padding_top_100 section_padding_bottom_100">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <h3>Latest News</h3>
                                <h2 class="section_header highlight">From Our Blog</h2>
                            </div>
                        </div>
                        <div class="row topmargin_30">

                            <div class="col-sm-6">
                                <article class="vertical-item post format-standard with_background">

                                    <div class="item-media entry-thumbnail">
                                        <img src="images/gallery/11.jpg" alt="" />
                                        <div class="media-links">
                                            <a class="abs-link" title="" href="blog-single-right.html"></a>
                                        </div>
                                    </div>

                                    <div class="item-content entry-content">
                                        <div class="with_padding">
                                            <header class="entry-header">

                                                <h3 class="entry-title">
                                                    <a href="blog-single-right.html" rel="bookmark">Church Movie Fellowship Inspires Young People</a>
                                                </h3>

                                            </header>
                                            {/* <!-- .entry-header --> */}

                                            <p>Prosciutto tail spare ribs kielbasa pork meatball hamburger alcatra chicken shank corned beef tenderloin pork loin tri-tip ball tip. Tenderloin alcatra meatball tongue chicken fatback.</p>
                                        </div>

                                        <footer class="with_top_border entry-meta highlightlinks">
                                            <div class="content-justify">
                                                <span class="entry-date">
                                                    <time class="entry-date" datetime="2017-03-13T08:50:40+00:00">
                                                        March 13, 2017
												</time>
                                                </span>
                                                <a href="#">by Jason Morrow</a>
                                            </div>
                                        </footer>


                                    </div>
                                    {/* <!-- .item-content.entry-content --> */}
                                </article>
                            </div>

                            <div class="col-sm-6">
                                <article class="vertical-item post format-standard with_background">

                                    <div class="item-media entry-thumbnail">
                                        <img src="images/gallery/09.jpg" alt="" />
                                        <div class="media-links">
                                            <a class="abs-link" title="" href="blog-single-right.html"></a>
                                        </div>
                                    </div>

                                    <div class="item-content entry-content">
                                        <div class="with_padding">
                                            <header class="entry-header">

                                                <h3 class="entry-title">
                                                    <a href="blog-single-right.html" rel="bookmark">Employment for Unemployed Members by Strawberry Business</a>
                                                </h3>

                                            </header>
                                            {/* <!-- .entry-header --> */}

                                            <p>Alcatra capicola chicken, rump pork kielbasa beef ribs pastrami turkey cupim drumstick ham hock bacon ribeye. Frankfurter shankle turducken shoulder.</p>
                                        </div>

                                        <footer class="with_top_border entry-meta highlightlinks">
                                            <div class="content-justify">
                                                <span class="entry-date">
                                                    <time class="entry-date" datetime="2017-03-13T08:50:40+00:00">
                                                        March 13, 2017
												</time>
                                                </span>
                                                <a href="#">by Nicolas Bart</a>
                                            </div>
                                        </footer>


                                    </div>
                                    {/* <!-- .item-content.entry-content --> */}
                                </article>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="subscribe" class="section_subscribe cs parallax section_padding_50 table_section table_section_md">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 text-center text-md-left">
                                <h2 class="bottommargin_10">Do You Want To Be New Member?</h2>
                                <p class="fontsize_20 grey">We have a strong sense of community with parishioners.</p>
                            </div>
                            <div class="col-md-4 text-center text-md-right">
                                <div class="widget widget_mailchimp">
                                    <form class="signup form-inline" action="http://webdesign-finder.com/html/betterlife/" method="get">
                                        <div class="form-group inline-block">
                                            <input class="mailchimp_email form-control" name="email" type="email" placeholder="Email Address" />
                                        </div>
                                        <button type="submit" class="theme_button">Sign Up!</button>
                                        <div class="response"></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer class="page_footer ds section_padding_top_75 section_padding_bottom_65">
                    <div class="container">

                        <div class="row">

                            <div class="col-md-4 col-sm-6 text-center">
                                <a href="index.html" class="logo top_logo text-left bottommargin_10">
                                    <img src="images/logo.png" alt="" />
                                    <span class="logo_text">
                                        <strong class="playfair">BetterLife</strong>
                                        <span class="small-text">your church</span>
                                    </span>
                                </a>

                                <p>
                                    We invite anyone and everyone to attend our Sunday gatherings to celebrate God in song, scripture and prayer.
				</p>

                                <p class="greylinks">
                                    <a href="#" class="social-icon color-icon border-icon rounded-icon soc-facebook"></a>
                                    <a href="#" class="social-icon color-icon border-icon rounded-icon soc-twitter"></a>
                                    <a href="#" class="social-icon color-icon border-icon rounded-icon soc-google"></a>
                                    <a href="#" class="social-icon color-icon border-icon rounded-icon soc-linkedin"></a>
                                    <a href="#" class="social-icon color-icon border-icon rounded-icon soc-pinterest"></a>
                                </p>
                            </div>

                            <div class="col-md-4 col-sm-6 text-center">
                                <div class="widget topmargin_20">
                                    <h3 class="widget-title">Contact Us</h3>

                                    <div>
                                        <div class="media small-teaser inline-block margin_0">
                                            <div class="media-left">
                                                <i class="fa fa-map-marker highlight fontsize_16"></i>
                                            </div>
                                            <div class="media-body">
                                                56B, Street Jein Martin,
											<strong>Rome</strong>
                                            </div>
                                        </div>
                                        <br />

                                        <div class="media small-teaser inline-block">
                                            <div class="media-left">
                                                <i class="fa fa-envelope highlight fontsize_16"></i>
                                            </div>
                                            <div class="media-body underlined-links greylinks">
                                                <a href="mailto:your@mail.com" class="bold">betterlife@support.com</a>
                                            </div>
                                        </div>
                                        <br />

                                        <div class="media small-teaser inline-block">
                                            <div class="media-left">
                                                <i class="fa fa-phone highlight fontsize_16"></i>
                                            </div>
                                            <div class="media-body">
                                                <strong>0 (800) 236 47569</strong>
                                            </div>
                                        </div>
                                        <br />

                                        <div class="media small-teaser inline-block">
                                            <div class="media-left">
                                                <i class="fa fa-clock-o highlight fontsize_16"></i>
                                            </div>
                                            <div class="media-body">
                                                Sun - Sat
											<strong>07:00 - 21:00</strong>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 text-center">
                                <div class="topmargin_20">
                                    <div class="widget widget_twitter">
                                        <h3 class="widget-title">Latest Tweets</h3>
                                        <div class="twitter"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>

                {/* <section class="ls page_copyright table_section section_padding_50">
										<div class="container">
											<div class="row">
												<div class="col-sm-12 text-center">
													<p class="grey thin">&copy; Copyright 2017 All Rights Reserved</p>
												</div>
											</div>
										</div>
									</section> */}

            </div>
            {/* <!-- eof #box_wrapper --> */}
        </div>
        {/* <!-- eof #canvas --> */}

        {/* <script src="js/compressed.js"></script>
							<script src="js/main.js"></script>
							<script src="js/switcher.js"></script> */}

    </div>)



}

export default MainPage
