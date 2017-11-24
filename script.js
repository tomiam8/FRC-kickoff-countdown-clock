var time, picture, pictureUpdated;
var pictures = [
	"http://www.milwaukeeindependent.com/wp-content/uploads/2017/03/032517_RoboticMatch_308.jpg",
	"https://www.unh.edu/unhtoday/sites/default/files/newsroom//2015/03/images/firstoverview-3269.jpg",
	"https://www.nasa.gov/sites/default/files/thumbnails/image/first_1.jpg",
	"https://www.wired.com/wp-content/uploads/blogs/geekdad/wp-content/uploads/2010/03/img_4381_crop.jpg",
	"https://i.ytimg.com/vi/j43wfPgT5PI/maxresdefault.jpg",
	"https://www.mainstream-engr.com/wp-content/uploads/2017/05/Robots_March10.jpg",
	"https://www.nasa.gov/centers/jpl/images/content/737286main_robots-full.jpg",
	"http://teamupnext.com/wp-content/uploads/2011/12/Event_33.jpg",
	"https://www.nasa.gov/sites/default/files/thumbnails/image/hathawaybrown.jpg",
	"https://www.jpl.nasa.gov/images/first/first2016/robotics20160314-16.jpg",
	"http://www.slingshotdoc.com/wp-content/uploads/2016/11/B_Education_07.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/0/03/2012_FIRST_Robotics_Competition_Palmetto_Regional_%286874513808%29.jpg",
	"http://mms.businesswire.com/media/20140427005027/en/413118/5/Confetti_shot.jpg",
	"http://ww1.prweb.com/prfiles/2012/03/27/9332693/2012_utah_winning_alliance_medium.jpg",
	"http://www.denverpost.com/wp-content/uploads/2017/03/robotics-competition-03242017-ac_ac25137x.jpg",
	"https://fullcircle.asu.edu/wp-content/uploads/2017/11/FIRST-Robotics-Competition-2017-JH3915w.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/8/8f/First_Robotics_Competition_%28835838%29.jpg",
	"https://bloximages.chicago2.vip.townnews.com/azdailysun.com/content/tncms/assets/v3/editorial/b/39/b393c317-5331-5bcb-be60-761eba5bbbb1/56f449a0286f1.image.jpg?resize=1200%2C800",
	"http://static-30.sinclairstoryline.com/resources/media/870edf5d-9349-4e0e-99f1-5119a86a459f-20160319uncarobotics1.jpg",
	"https://c.slashgear.com/wp-content/uploads/2014/05/first-robotics-championship-2014-58.jpg",
	"https://resetrobotics.org/wp-content/uploads/photo-gallery/9470c5985909c7d59da8cc4543891856.jpg",
	"https://www.nasa.gov/sites/default/files/thumbnails/image/redstone_rockets_at_rcr_0.jpg",
	"https://www.usnews.com/dims4/USNEWS/f6123eb/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fe9%2F8d%2F917addf945109d6f146a6cf5d9fa%2Ffirst-championship-stl-4.jpg",
	"http://corporate.comcast.com/images/FRC_Kickoff_Thumbnail_3_Events-Link.jpg",
	"https://s3.amazonaws.com/dsg.files.app.content.prod/gereports/wp-content/uploads/2017/05/12153144/ge_first_snap.jpg",
	"http://team610.com/wp-content/uploads/2013/09/Screen-Shot-2016-09-28-at-11.47.55-AM.png",
	"http://www.ieee-bv-cs.org/wp-content/uploads/2013/04/FIRST_2013_Match_setup.jpg",
	"https://pmdvod.nationalgeographic.com/NG_Video/329/271/140528-robotics-competition-vin%202.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/0/0b/2012_FIRST_Robotics_Competition_Palmetto_Regional_%287020605549%29.jpg",
	"http://www.globeslcc.com/wp-content/uploads/media/com-maverik-center-first-robotics-competition-jhirschi.jpg",
	"https://s3.amazonaws.com/cms.ipressroom.com/254/files/20162/56fc503c602274c545614c32_IMG_5107/IMG_5107_mid.jpg",
	"https://fullcircle.asu.edu/wp-content/uploads/2017/11/FIRST-Robotics-Competition-2017-JH3675w-1200x700.jpg",
	"https://i0.wp.com/littlerockrag.com/wp-content/uploads/2017/03/20170310_105059.jpg?fit=5312%2C2988",
	"https://images.washingtonpost.com/?op=resize&url=http://wp-dbknews.s3-website-us-east-1.amazonaws.com/images/2014/04/0631c9bf543b75f2c180e0434eef2d41.jpg&mode=crop&w=1200&q=99",
	"https://wqtcq1f34a8kduuv3sc0e76o-wpengine.netdna-ssl.com/wp-content/uploads/2017/05/web1_170510-pdn-robotics2-web.jpg",
	"http://stempals.org/wp-content/uploads/2013/04/20130425_154438.jpg",
	"http://content.king5.com/photo/2016/05/04/0504%20Copy%20of%20PNW%20District%20Championship%20-%20159_1462375231343_2098837_ver1.0.jpg",
	"https://sagharborexpress.com/sagharborexpress/wp-content/uploads/2014/04/unnamed5.jpg",
	"http://mediad.publicbroadcasting.net/p/kwmu/files/styles/x_large/public/201104/FIRST_logo.jpg",
	"https://images.washingtonpost.com/?op=resize&url=http://wp-dbknews.s3-website-us-east-1.amazonaws.com/images/2015/04/62c6aee4c100279a5569c3cc2f71258d.jpg&mode=crop&w=1200&q=99",
	"https://www.eletimes.com/wp-content/uploads/2017/03/FIRST2016robots.jpg",
	"https://www.usnews.com/dims4/USNEWS/554f005/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F7e%2F1e%2Faecd818e4128ab67593583079871%2F160429-first10-editorial.JPG",
	"http://mms.businesswire.com/bwapps/mediaserver/ViewMedia?mgid=321853&vid=5",
	"https://www.usnews.com/dims4/USNEWS/86a6ae2/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fd0%2F07%2F9eee3a5a4788bb732dd228bc7881%2F160505-first3-editorial.jpg",
	"http://3.bp.blogspot.com/-S0fXjmKWmh0/VV5iJUyF3PI/AAAAAAAABxU/8qr2Of1y8sA/s1600/Robotics%2B053.JPG",
	"http://team5016.com/img/gallery/PICTURE9.jpeg",
	"https://farm4.staticflickr.com/3804/33520494871_b80789f4f7_b.jpg",
	"https://farm4.staticflickr.com/3724/32836215543_e76e62bf2b_b.jpg",
	"https://farm3.staticflickr.com/2937/33493158492_0501be3b69_b.jpg",
	"https://farm4.staticflickr.com/3845/33493155922_244838b5df_b.jpg",
	"https://farm3.staticflickr.com/2913/33544511211_716845bc2d_b.jpg",
	"https://farm3.staticflickr.com/2817/33544510641_9230604862_b.jpg",
	"https://farm3.staticflickr.com/2812/33517222552_56a170660a_b.jpg",
	"https://farm8.staticflickr.com/7338/26647416170_3ee1dcce91_b.jpg",
	"https://farm8.staticflickr.com/7262/26887020896_7d6d8a772f_b.jpg",
	"https://farm8.staticflickr.com/7437/26920328675_3d4b863181_b.jpg",
	"https://farm8.staticflickr.com/7288/26315132174_8409a2e88a_b.jpg",
	"https://farm8.staticflickr.com/7626/26316411903_2d41327554_b.jpg",
	"https://farm8.staticflickr.com/7666/26852792251_6a70c1dec2_b.jpg",
	"https://farm8.staticflickr.com/7100/26316357643_0506202e53_b.jpg",
	"https://farm8.staticflickr.com/7431/26647352690_2859c57520_b.jpg",
	"https://farm8.staticflickr.com/7349/26826630422_5476bdb6ab_b.jpg",
	"https://farm2.staticflickr.com/1540/26470994285_04fa4ec680_o.jpg",
	"https://farm2.staticflickr.com/1486/25867970463_ae079ff67d_o.jpg",
	"https://farm8.staticflickr.com/7238/14061725123_31e501ac4d_o.jpg",
	"https://farm3.staticflickr.com/2932/14021445486_5786fee1c3_o.jpg",
	"https://farm6.staticflickr.com/5539/14041899192_43b32f6f2c_o.jpg",
	"https://farm4.staticflickr.com/3665/9408661349_a82222fb36_o.jpg",
	"https://farm4.staticflickr.com/3692/9411474160_d3e29fbdc6_o.jpg",
	"https://farm8.staticflickr.com/7348/9407947617_b8273a6263_o.jpg",
	"https://farm6.staticflickr.com/5493/9408115197_09286a8bbe_o.jpg",
	"https://photos.smugmug.com/2011-2012season/S2012-World-Championship/i-jfKmd55/0/2f9cf489/O/IMG_4745.jpg",
	"https://photos.smugmug.com/2011-2012season/S2012-Build-Season/i-8S7SKGT/0/08e30a2d/XL/design_process-XL.jpg",
	"https://photos.smugmug.com/2011-2012season/S2012-Kickoff/i-7GZ6pfJ/0/93cf5a86/O/216800_orig.jpg",
	"https://photos.smugmug.com/2016-2017Season/DHS-Homecoming-Parade-2017/i-JFwZFwj/0/e50dc0fc/X2/DSC_0100-X2.jpg",
	"https://photos.smugmug.com/2016-2017Season/DHS-Homecoming-Parade-2017/i-C3RCSM3/0/4fcb3a61/M/DSC_0117-M.jpg",
	"https://photos.smugmug.com/2016-2017Season/Las-Vegas-Regional-2017/i-DFdRVtj/0/5fe84d95/X2/DSC_8572-X2.jpg",
	"https://photos.smugmug.com/2016-2017Season/Houston-World-Championships-2017/i-zCdt4zn/0/902e41e7/M/DSC_0836-M.jpg",
	"https://photos.smugmug.com/2016-2017Season/Houston-World-Championships-2017/i-bRSvnsz/0/a2bd10a0/M/DSC_1708-M.jpg",
	"https://photos.smugmug.com/2016-2017Season/Houston-World-Championships-2017/i-bzpmDhX/0/d5fd7d38/M/DSC_2524-M.jpg",
	"https://photos.smugmug.com/2016-2017Season/Houston-World-Championships-2017/i-HHXt999/0/a9be8bbc/M/DSC_2814-M.jpg",
	"https://static.wixstatic.com/media/52e8bd_f97096970fba49c9957bad4914d6f674~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_710,h_473,al_c,q_90,usm_0.66_1.00_0.01/52e8bd_f97096970fba49c9957bad4914d6f674~mv2_d_5760_3840_s_4_2.webp",
	"https://photos.smugmug.com/2017/Houston-Championship-2017/i-LB5h6hg/0/b4cecf9b/XL/20170421-8160M-XL.jpg",
	"https://static.wixstatic.com/media/52e8bd_888369122bd0455096ad8ea49e0da311~mv2_d_3264_1836_s_2.jpg/v1/fill/w_709,h_399,al_c,q_90,usm_0.66_1.00_0.01/52e8bd_888369122bd0455096ad8ea49e0da311~mv2_d_3264_1836_s_2.webp",
	"https://static.wixstatic.com/media/52e8bd_3e8bbbb5aeac43e48dea71db52ea087f~mv2_d_5568_3712_s_4_2.jpg/v1/fill/w_710,h_473,al_c,q_90,usm_0.66_1.00_0.01/52e8bd_3e8bbbb5aeac43e48dea71db52ea087f~mv2_d_5568_3712_s_4_2.webp",
	"https://static.wixstatic.com/media/52e8bd_13fa2dbe729646bf8bec0497d25b8163~mv2.jpg/v1/fill/w_1531,h_786,al_c,q_90,usm_0.66_1.00_0.01/52e8bd_13fa2dbe729646bf8bec0497d25b8163~mv2.webp",
	"https://photos.smugmug.com/Team-1619/i-s8XXKkH/0/fa7644be/X2/7RM2_DSC5621-20170323-X2.jpg",
	"https://photos.smugmug.com/Team-1619/i-ptMf3d6/0/411bff32/M/7RM2_DSC6354-20170324-M.jpg",
	"https://photos.smugmug.com/Team-1619/i-GF4pKPJ/0/383a3eb0/M/7M2_DSC6343-20170324-M.jpg",
	"https://photos.smugmug.com/Team-1619/i-s6HqnJT/0/6a3fb4d3/M/7RM2_DSC6519-20170324-M.jpg",
	"https://photos.smugmug.com/Team-1619/i-9qnM7hd/0/a3a48468/M/20170421-8087M-M.jpg",
	"https://photos.smugmug.com/Team-1619/i-R8hPGDp/0/9f94413c/M/DSC05462-M.jpg",
	"https://photos.smugmug.com/Team-1619/i-BfzM2S3/0/c17950ba/M/20170422-8632M-M.jpg",
	"https://photos.smugmug.com/Team-1619/i-97XhWWR/0/229fb6a3/M/20170422-8642M-M.jpg",
	"https://photos.smugmug.com/Team-1619/i-ns22Pbw/0/96d7afbe/M/_DSC4623-M.jpg",
	"https://www.firstinspires.org/sites/default/files/uploads/hero_headers/frc-hero.jpg",
	"https://i.ytimg.com/vi/MQ0VNzIvHx0/maxresdefault.jpg",
	"http://entech281.com/media/photos/robotics/frc/2012/competition/palmetto/Entech-Frc-2012-Competition-Palmetto-RobotTryingToBalance.jpg",
	"https://i.ytimg.com/vi/jZLSDGPRq54/maxresdefault.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/4/4c/FRC_Israel_2012_basketball.JPG",
	"http://www.eastcobbrobotics.org/wp/wp-content/uploads/2017/03/ECR-Columbus.jpg",
	"https://i.ytimg.com/vi/nQzIfNrbslY/maxresdefault.jpg",
	"https://static1.squarespace.com/static/562a4821e4b05e1ace333fae/t/5730b2501d07c088bf71337c/1462812765777/5+Ways+FIRST+is+More+than+Robots+-+FRC+high+school+robotics+competition"
	];

function initial() {
	document.getElementById("imgBackgroundFront").src = pictures[Math.floor(Math.random()*pictures.length)];
	picture = pictures[Math.floor(Math.random()*pictures.length)];
	document.getElementById("imgBackgroundBack").src = picture;
	pictureUpdated = false;
	updateClock();
}

function updateClock() {
	time = 1515252600-Math.round(Date.now() / 1000);
	document.getElementById("days").innerHTML = Math.floor(time/86400);
	document.getElementById("hours").innerHTML = Math.floor((time/3600)%24);
	document.getElementById("minutes").innerHTML = Math.floor((time/60)%60);
	document.getElementById("seconds").innerHTML = Math.floor(time%60);
	
	if ((Math.floor(time%10) > 8) && !pictureUpdated) {
		pictureUpdated = true;
		document.getElementById("imgBackgroundFront").style.opacity = 0;
		
		setTimeout(function(){
			document.getElementById("imgBackgroundFront").src = picture;
			document.getElementById("imgBackgroundFront").style.opacity = 1;
			
			setTimeout(function(){
				picture = pictures[Math.floor(Math.random()*pictures.length)];
				document.getElementById("imgBackgroundBack").src = picture;
				pictureUpdated = false;
			}, 1000);
		}, 1000);
	}
	
	setTimeout(updateClock, 1000);
}