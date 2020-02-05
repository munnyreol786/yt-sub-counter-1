var YT = {};
var user = "";
var key = "";
var goal = "";

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-119417406-7');

var APIKeys = ["AIzaSyC2yHOH_wuAjkgvrUAZo5dhexZsaZJB1KY", "AIzaSyCj8wGz_c4h5xW-FugbbYOHH-BtLG1psHk", "AIzaSyABWPY0xGFSEV_fp3b7RAthCyegwzr-prw", "AIzaSyBneuqXGHEXQiJlWUOv23_FA4CzpsHaS6I", "AIzaSyDsjY7zKIxE9NG3xluvZepwYHD2vjBt9lo", "AIzaSyA8wEOgIJ7LEY4iDG4Qg_Ad2VgTEWlUIrA", "AIzaSyCAICFzxvKWCfVhQUz1GSSblO3L4X74R0M", "AIzaSyB4Q3icIKTwtGEuxKu09cVaBK30FxT57cs", "AIzaSyCHooIQqQfZ3advyfy-F0KqM9Z5XUN2dTQ", "AIzaSyAs2ErkL9jq7KQ_OGmFSIoj8z4yt2yKHZI", "AIzaSyDT0_OI9Ss2Spi1IjpxhCy6JIwcnJ8cLuI", "AIzaSyBfwGkn-dQxMy_T612ClTxE0akg4FYRVHI", "AIzaSyDvQuHTDU6PE0q25RSHSAHFkY7YNncSTxs", "AIzaSyAt14oAUc2M5P7ddtF6F2o6hNOZb1F9Gh8", "AIzaSyCB4Hj3pIiIb6IaqoJvp0BoKDIygkQnT2c", "AIzaSyBt8lp3CU87gU8AQKz4BWG5mLE5kFOSfmk", "AIzaSyDpzp1OEW-axtoc5O5kyxl0S2-46WfGVJg", "AIzaSyAu5kEu3rb1cCgM6Iqlbamt6D_DNrIex_8", "AIzaSyAZEii_ygokYH2gUS7DISWORzw4dMkLU_w", "AIzaSyDUTMnWBR_DfWz7Obdj_V-YMzPnNgqzKME", "AIzaSyBA3r7t0ranMbGuQte9t7uPPd2UWvri11I", "AIzaSyD87er3n_gedLNfb_uVY6sF-5cbYE-uFHM", "AIzaSyDSrQg06OUouEYvf9eqtwMv1_HGdATZVak", "AIzaSyCSYn85k54O6ZRHhjjVuU3itvxCKuZTha4", "AIzaSyBEgxtwHJGbLdoe_CjEO37kd_eHncFugSQ", "AIzaSyAkedClIJENM-lKk5Hwziprb_E9G5bKopc", "AIzaSyDdck0LEAXOCBVKDpN4ZgxC0Gk6zBedOTM", "AIzaSyBiwDi5co4t3Fopz9oEcfoisthYZz_kivM", "AIzaSyC_oqi_gbXaI29dkJJMRs0a82OWcl-h3tU", "AIzaSyBjPSI5R2dD8SYpTVX-95ihKNIUtwmXqlw", "AIzaSyDhjjxDQ4IkgQjQ4j_8GmfQQudVrVQiD88", "AIzaSyBns4CIvvTInLu8jHUdJadSRot3gnLP_WM", "AIzaSyB0uq8HHarCnpYG4pZxYPwE8wLAtM_gBN0", "AIzaSyCgp_Uc2jj1mAd7HW9AzAATt33rGkvttVQ", "AIzaSyDUUfmvtaHY3lQ11CbkF8gplSJSXwgLe2g", "AIzaSyDzUqDdCGrb5g5YU0fo0pB9QbqurkK3GSc", "AIzaSyBgcyeGD9VK-Nu2pnlP5VQaLWqYSIPWZRk", "AIzaSyAGry7aVXPytGcqt-GrOb4HkIXVGbuL4As", "AIzaSyAiWjUpPAvVy1fLj2VTJitH56Gs-2PBMLY", "AIzaSyA2bieaAnufzw9YNibt0R2WI14L8uU9tbw", "AIzaSyDpTfaINBOTi_1YgYSmk25DPS8ex-duZsQ", "AIzaSyAGFMcByfMdsbQbpK7FE8MfHLZNjMDIWsw", "AIzaSyCLuua085lVPXp0Jmqb_AIePC0hG66N_5U", "AIzaSyDGu5pdf-_0cNIZdNkcLKtdpn0UNulX7hU", "AIzaSyDY8suw3_q3zMX6ZDhdr7IDpPLQ6CbEsoY", "AIzaSyCE9cyVSRDrn0nCjO_ajRDSHXUr3yqLnT0", "AIzaSyACVbv1wiiFdYQsaMQkthBJAUi-Ek-ZNkc", "AIzaSyANLBp5fHf-XEsQnksu_-ygJMHviGQO7TY", "AIzaSyCQXeXdjhu5SKnvLJeYz9SgyKbzT8fnQko", "AIzaSyBlSrOJ-ajuFM4cRpbPbuBnI1Fn3BPFrbg", "AIzaSyC9jt3y7ygY5qTToSUEanHCyMYonkCXz1w", "AIzaSyA5dmZA8HwtRCI24FDlf4E0atZ5KjYxzWA", "AIzaSyBBjLqNnzhnJ5xqRGwfdCmIVG13YNNNk2w", "AIzaSyACZdXbrIijp3kLgAGNIdSCe7uxxIvo9wY", "AIzaSyBKDw28djiaVr2rFLUUHEO2gNoa4SBa5Eo", "AIzaSyAVsW7FWM1bRFZ2Sovyor649wJB0-frc6s", "AIzaSyBqpsmewbPiTDYXnTCDoudNBqNsuIw-mKk", "AIzaSyCJc3jP4mUaHK3H3iKP1tAg5Sre_ZXyRZ8", "AIzaSyC-eb1wfd4BSRYXumrJHVKSZiZhGwMDOCU", "AIzaSyBVvrKtgYwY0_aR6eI-RW9VSNx36DRyMj8", "AIzaSyCmqRC4LPcEzH7VLPj43F16WQc62kwsK_w", "AIzaSyBLG9IhobeWq4GhV3Tj30ul_RTf5OWV-A0", "AIzaSyAx0PuIfN747I7AoH0tqe3ChmmUYwaQ2Hk", "AIzaSyBYUX-FaspbUCmIHRku6Nlk8P7KeuBNv0U", "AIzaSyBx2pYtSpgwRfZKgyyVKr50tvvatYo-qVk", "AIzaSyB8GMc25p2aIAe-c7RprBg-4tWYH1z8Sks", "AIzaSyCpxYGkgA84erP8wjh9wogUIscDjk8CWKU", "AIzaSyD28RI5o_dYgRrlloUuKwafVsPWFiINW0o", "AIzaSyCQ0-h0qSwqYHACIGlftvlHbga1vu6FL68", "AIzaSyCffkLkQMyYCv53KZyQrxsv2M9AftBQVbc", "AIzaSyA3hbM5bSmkZoxIOPBgMh2i9NO1oidlhg0", "AIzaSyBJlU6gE9sWJWlFR3AU-apBEIqUTuBpMMs", "AIzaSyDGPy7EpMnWBakmS--6Zo6he17npKi1Scc", "AIzaSyAriSzreOo8iwur_xbuAnKOALHQ6CYNkdo", "AIzaSyC3NhWVzNbrkKDq5tggtOKWctHQK3jfIeU", "AIzaSyArF3ec1ypsO7ofUGw2WjbubgHNC7SNKCo", "AIzaSyC8cBG9qURY7sGE-gpDEDFMEgryTToVRpc", "AIzaSyBgDrdkGCyNY7NsOsHNijRF0crD2YGwvDg", "AIzaSyBPUsOE-_pAInBPUG_A5NMJ9V78_S1cA5c", "AIzaSyALUMHI1gzc_W5m89245j7hsT-thbe1qjY", "AIzaSyB_iH4g5IpsQJgqd-0eaHZPNLE415-pB_4", "AIzaSyASbvrdZO4sOkjs9zfvFX-L5bdDyDEbi08", "AIzaSyC-2J15Q5Utd2CgpZsHF1Mbv0jnQlRPRaQ", "AIzaSyAtHGrv1TRgjnKgONYNEHj3lDvRockUhNk", "AIzaSyCNtFjts20PEQ8GpitQPVJ5OZFbUGgVhMc", "AIzaSyBgQPSALZZNNA1tACSFDakTZYSEdaBANc4", "AIzaSyAudGmI32QygtkxS80REON501yRkMpPFxc", "AIzaSyAYclzmbzChKrUo9RXiWUd3e08WWl04_T0", "AIzaSyDXbxJEIW1CeXY7xrQAVQSYDA3mSBzC9iM", "AIzaSyC31MIJipeK5A9gkRVIKD9cXmh96pwu1l4", "AIzaSyDfvgOTG8M2GqrrElnmYGeHorF_OgQhlA8", "AIzaSyCLuSMMw3KAXwNJIsrxwxT5ShmSMAsNlro", "AIzaSyDeT0mgsVGuI8D259Bt6l7xKI-qTjbtZYE", "AIzaSyCxKhvvr8CvmJgeo-GHt3a_iog_kMXDsZc", "AIzaSyBx8qy6Wk6Jwdj8ku1D2Aduwjkbt9paaEA", "AIzaSyD-A8AygZFreRhsEzxtRGJUdH_JfDHOn8Y", "AIzaSyBpIe46IyjC0sdn7ENHC7brTIA5kMd8FnA", "AIzaSyAsfUSkfzhz74opMiWzKJ-iXDq0oF29mxQ", "AIzaSyARqPa7dgDil9_OL7jw1UdWFcdUoT57O5U", "AIzaSyBmrN6VwSBvGjRasOq7LBI0dkzVp-dreOk", "AIzaSyA62Z94cavT-ODi6ZzsJSf7MbV3JsRyx4U", "AIzaSyC5sq5uo1MtHPo0nvmhUd_KSdhwGdB8IAk", "AIzaSyCmRPZ4hLkijSTtJYnjIitvAd45z291Bzs", "AIzaSyAm3hJqTq1L1wcz-cz_4zLUNs2PD37hLuY", "AIzaSyApJEbF-pgr5sRc9hR0NznPx6UA_CCJPG4", "AIzaSyCRtJ2uhgYe7p3J-QkC6kHsm7KZz0bDIok", "AIzaSyCo-PwQAtlrchgSAY0hLnE2HYSRhqdsPXk", "AIzaSyC7asPTom1oZVPmZu7UcttGNFvqzRWQiRM", "AIzaSyDmUVXdKMQfp1428NsX0GuBHEp3Hh6VnRQ", "AIzaSyAXrk1HSRZX2tEPDhKoPGm7gQ49--IKp2k", "AIzaSyANRopUwcIy9_Gj_gebyYdSkMlRgLjzlWA", "AIzaSyB5IsxA_-IjXbnBoZ7zx6fSAAPgpCydIxk", "AIzaSyBxeCTQ9eNe5gtkhrVPg_YNZxuOS9kkNN0", "AIzaSyD2aLOfH18P889oz5OUi3Eckb3qGzJ9lvU", "AIzaSyALa1cPhbMdOKjwgJEvqkhGfTukLdIKupE", "AIzaSyDDEbTiTSAK89PFXon3sOGIX3CsTsBL1oA", "AIzaSyCLtRzn0-P2_mPfBKlk7SqzTSI-S49CTSs", "AIzaSyB6JZxYxR9OpxIQ0wbvZD_DnJcTVt4MihU", "AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g", "AIzaSyBmEgHy0Fs50bRDv2N-4LJYSy0-MkT-K50", "AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA", "AIzaSyAXmcBmHfFZfzFPUHnDf55gX-7EESGSUn0", "AIzaSyAFdgjUKpIcWTHRwXq0T8eI1X48qwoXOcs", "AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA", "AIzaSyATnA8iySFAP1TKtLcdcqHgGyM7G9Zpj7c", "AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", "AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE", "AIzaSyCKrVC4PbYLa0S0CmIFj97PdjhwvEcALV4", "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY", "AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ", "AIzaSyBVy4EKrR51E1zb1eybglkT0VRotEbQbEo", "AIzaSyBnIAqzNEjw_ZJjqsRenVctNQMrIwHtAJw", "AIzaSyDsxIyAMEYNxF5s4KqcP2hA0trTYzi5ZaU"]
var rightKeys = [];
var rightKey;
var ok;
var estimatedArray = [];
var previousCount;

var chart = new Highcharts.chart({
	chart: {
		renderTo: 'chart',
		type: 'line'
	},
	title: {
		text: 'Subscriber Count Graph',
		color: '#66666'
	},
	xAxis: {
		type: 'datetime',
		tickPixelInterval: 150
	},
	yAxis: {
		title: {
			text: ''
		}
	},

	credits: {
		enabled: false
	},

	series: [{
		name: 'Subscriber Count',
		marker: {
			enabled: false
		}
	}]
});

setInterval(() => {
	$.each($('iframe'), (arr,x) => {
		let src = $(x).attr('src');
		if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
			$(x).remove();
		}
	});
}, 300);

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value
    });
    return vars
}

if(!getUrlVars()["c"]){
	user="UCaEk4apVOqy-sFVh3xnpJyw";
} else {
	user=getUrlVars()["c"];
}

if (getUrlVars()["o"] == "1") {
	document.getElementById('style').href='../../assets/global/odometer-fast.css';
	$(".checkbox-odo-slow").prop("checked", false);
	$(".checkbox-odo-fast").prop("checked", true);
} else {
	$(".checkbox-odo-slow").prop("checked", true);
	$(".checkbox-odo-fast").prop("checked", false);
}

$(".checkbox-odo-slow").click(function(){
	window.location = window.location.href.replace("o=1", "o=0")
})

$(".checkbox-odo-fast").click(function(){
	window.location = window.location.href.replace("o=0", "o=1")
})

for(var i=0; i < 10; i++){
    setTimeout(function() {
		var checkKey = APIKeys[Math.floor(Math.random()*APIKeys.length)];
		$.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=hHW1oY26kxQ&key='+checkKey, function() {
		if (rightKeys.includes(checkKey)) {
			console.log("Tried to add key that already exists in array! Returning...")
			return;
		} else {
			rightKeys.push(checkKey)
			console.log("Valid key! Added to array, trying more...")
		}
		}).fail(function() {
			if (rightKeys.includes(checkKey)) {
				rightKeys.pop(checkKey)
				console.log("Invalid key detected in array, removing it...")
			}
			console.log("Invalid key, retrying...")
	  })
	}, 1)
}

setInterval(function() {
	if ($(window).width() < 1253) {
		document.querySelector(".card-container").classList.remove('offset-md-1');
		document.querySelector(".goal-container").classList.remove('offset-md-2');
		document.querySelector(".estimatedText").classList.remove('offset-md-3');
		document.querySelector(".search-container").classList.remove('offset-md-4');
		document.querySelector(".search-container").classList.add('offset-md-3');
		document.querySelector(".estimated-container").classList.remove('offset-md-2');
		$('.md1-row').removeClass('offset-md-1');
	} else {
		document.querySelector(".card-container").classList.add('offset-md-1');
		document.querySelector(".goal-container").classList.add('offset-md-2');
		document.querySelector(".estimatedText").classList.add('offset-md-3');
		document.querySelector(".search-container").classList.add('offset-md-4');
		document.querySelector(".search-container").classList.remove('offset-md-3');
		document.querySelector(".estimated-container").classList.add('offset-md-2');
		$('.md1-row').addClass('offset-md-1');
	}
}, 250)

setInterval(function() {

  var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];

  var checkKey = APIKeys[Math.floor(Math.random()*APIKeys.length)];
	$.getJSON('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=hHW1oY26kxQ&key='+checkKey, function() {
	if (rightKeys.includes(checkKey)) {
		console.log("Tried to add key that already exists in array! Returning...")
		return;
	} else {
		rightKeys.push(checkKey)
		console.log("Valid key! Added to array, trying more...")
	}
	}).fail(function() {
		if (rightKeys.includes(checkKey)) {
			rightKeys.pop(checkKey)
			console.log("Invalid key detected in array, removing it...")
		}
		console.log("Invalid key, retrying...")
  })
  

  if (!ok) {
	if (rightKeys) {
		$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id='+user+'&key='+rightKey, function(data) {
			YT.UpdateManager.updateName(data.items[0].snippet.title)
			YT.UpdateManager.updateAvatar(data.items[0].snippet.thumbnails.high.url)
			document.querySelector('.username').innerText = data.items[0].snippet.title;
			if (data.items[0].brandingSettings.image.bannerImageUrl.toString() != "http://s.ytimg.com/yts/img/channels/c4/default_banner-vfl7DRgTn.png") {
				YT.UpdateManager.updateBanner(data.items[0].brandingSettings.image.bannerImageUrl)
				$.post('https://api.livecounts.io/subGainPost', {username: data.items[0].snippet.title, cid: user}, function(response) {
				});
			} else {
				if (user == "UCZJ7m7EnCNodqnu5SAtg8eQ" || user == "UCYiGq8XF7YQD00x7wAd62Zg") {
					YT.UpdateManager.updateBanner("https://livecounts.io/yt-sub-counter/assets/img/german-banner.png")
				} else {
					YT.UpdateManager.updateBanner("https://livecounts.io/yt-sub-counter/compare/assets/img/banner.jpg")
				}
			}
				ok = 1
			})
	} else {
		console.log("Nothing detected in right keys array, can't update avatars and banners")
	}
}

	$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id='+user+'&key='+rightKey, function(data) {
		$.getJSON('https://api.livecounts.io/yt_subs', function(data2) {
			var result = data2.filter(x => x.cid === user);
			if (result.length != 0) {
				YT.UpdateManager.updateSubs(YT.UpdateManager.updateSubs(result[0].subscriberCount))
				YT.GoalManager.load(YT.GoalManager.load(result[0].subscriberCount))

				document.querySelector(".estimatedText").innerText = "Please keep in mind this count is estimated! That means it might not be 100% accurate!!"

				chart.series[0].addPoint([                   
					(new Date()).getTime(),
					parseInt(result[0].subscriberCount)
				])

				if (!isNaN(result[0].subscriberCount)) {
					if (previousCount) {
						estimatedArray.push(result[0].subscriberCount - previousCount)
						if (estimatedArray.length > 61) {
							estimatedArray.shift()
						}
					}
				}
				previousCount = result[0].subscriberCount
				var estimated2Seconds = parseFloat(estimatedArray.reduce((a, b) => a + b, 0) * 2 / estimatedArray.length).toFixed(2)
				var estimated1Minute = parseFloat(estimatedArray.reduce((a, b) => a + b, 0) * 30 / estimatedArray.length).toFixed(2)
				var estimated1Hour = parseFloat(estimatedArray.reduce((a, b) => a + b, 0) * 1800 / estimatedArray.length).toFixed(2)

				YT.UpdateManager.updateEstimatedCounts(estimated2Seconds, estimated1Minute, estimated1Hour)
			} else {
				YT.UpdateManager.updateSubs(data.items[0].statistics.subscriberCount)
				YT.GoalManager.load(data.items[0].statistics.subscriberCount)

				chart.series[0].addPoint([                   
					(new Date()).getTime(),
					parseInt(data.items[0].statistics.subscriberCount)
				])
			}

			YT.UpdateManager.updateTotalViews(parseInt(data.items[0].statistics.viewCount))

	})
}).fail(function() {
	rightKeys.pop(rightKey)
	console.log("Invalid key detected in right keys array, removing it...")
})

}, 2000)

window.onload = () => {
	YT.UrlManager.addUser();
	YT.UrlManager.addTheme();
	YT.UrlManager.addOdometer();
	YT.ThemeManager.load();
	YT.GoalManager.load();
	
	document.querySelector('.share-link').value= window.location.href;
	document.querySelector('.embed-link').value = '<iframe height="180px" width="500px" frameborder="0" src="https://livecounts.io/yt-sub-counter/embed/?c='+user+'" allowfullscreen></iframe>';
	document.querySelector('.embed-obs-link').value = 'https://livecounts.io/yt-sub-counter/embed/?c='+user;
	$(".links").load("/assets/global/other.html");

	if (getUrlVars["t"] == "0") {
		$("#square-white").css("outline-style", "solid")
		$("#square-white").css("outline-color", "black")
	}

	$.getJSON("https://api.livecounts.io/channelPromotions", function(data) {
		data.forEach(function(r){
			console.log(r)
			var HTML = '<li class="link"><i class="fas fa-user"></i><a href="/yt-sub-counter/?c='+r.channelId+'"> '+r.channelName+'</li></a><br>';
			$('.channelPromotions').append(HTML); 
		})
	})
}

YT.GoalManager = {
	load: function(a) {
		if (a < 0) goal = 0;
		if (a < 10 && a > 0) goal = 10 - a;
		if (a < 20 && a > 10) goal = 20 - a;
		if (a < 30 && a > 20) goal = 30 - a;
		if (a < 40 && a > 30) goal = 40 - a;
		if (a < 50 && a > 40) goal = 50 - a;
		if (a < 60 && a > 50) goal = 60 - a;
		if (a < 70 && a > 60) goal = 70 - a;
		if (a < 80 && a > 70) goal = 80 - a;
		if (a < 90 && a > 80) goal = 90 - a;
		if (a < 100 && a > 90) goal = 100 - a;
		if (a < 200 && a > 100) goal = 200 - a;
		if (a < 300 && a > 200) goal = 300 - a;
		if (a < 400 && a > 300) goal = 400 - a;
		if (a < 500 && a > 400) goal = 500 - a;
		if (a < 600 && a > 500) goal = 600 - a;
		if (a < 700 && a > 600) goal = 700 - a;
		if (a < 800 && a > 700) goal = 800 - a;
		if (a < 900 && a > 800) goal = 900 - a;
		if (a < 1000 && a > 900) goal = 1000 - a;
		if (a < 2000 && a > 1000) goal = 2000 - a;
		if (a < 3000 && a > 2000) goal = 3000 - a;
		if (a < 4000 && a > 3000) goal = 4000 - a;
		if (a < 5000 && a > 4000) goal = 5000 - a;
		if (a < 6000 && a > 5000) goal = 6000 - a;
		if (a < 7000 && a > 6000) goal = 7000 - a;
		if (a < 8000 && a > 7000) goal = 8000 - a;
		if (a < 9000 && a > 8000) goal = 9000 - a;
		if (a < 10000 && a > 9000) goal = 10000 - a;
		if (a < 20000 && a > 10000) goal = 20000 - a;
		if (a < 30000 && a > 20000) goal = 30000 - a;
		if (a < 40000 && a > 30000) goal = 40000 - a;
		if (a < 50000 && a > 40000) goal = 50000 - a;
		if (a < 60000 && a > 50000) goal = 60000 - a;
		if (a < 70000 && a > 60000) goal = 70000 - a;
		if (a < 80000 && a > 70000) goal = 80000 - a;
		if (a < 90000 && a > 80000) goal = 90000 - a;
		if (a < 100000 && a > 90000) goal = 100000 - a;
		if (a < 200000 && a > 100000) goal = 200000 - a;
		if (a < 300000 && a > 200000) goal = 300000 - a;
		if (a < 400000 && a > 300000) goal = 400000 - a;
		if (a < 500000 && a > 400000) goal = 500000 - a;
		if (a < 600000 && a > 500000) goal = 600000 - a;
		if (a < 700000 && a > 600000) goal = 700000 - a;
		if (a < 800000 && a > 700000) goal = 800000 - a;
		if (a < 900000 && a > 800000) goal = 900000 - a;
		if (a < 1000000 && a > 900000) goal = 1000000 - a;
		if (a < 2000000 && a > 1000000) goal = 2000000 - a;
		if (a < 3000000 && a > 2000000) goal = 3000000 - a;
		if (a < 4000000 && a > 3000000) goal = 4000000 - a;
		if (a < 5000000 && a > 4000000) goal = 5000000 - a;
		if (a < 6000000 && a > 5000000) goal = 6000000 - a;
		if (a < 7000000 && a > 6000000) goal = 7000000 - a;
		if (a < 8000000 && a > 7000000) goal = 8000000 - a;
		if (a < 9000000 && a > 8000000) goal = 9000000 - a;
		if (a < 10000000 && a > 9000000) goal = 10000000 - a;
		if (a < 20000000 && a > 10000000) goal = 20000000 - a;
		if (a < 30000000 && a > 20000000) goal = 30000000 - a;
		if (a < 40000000 && a > 30000000) goal = 40000000 - a;
		if (a < 50000000 && a > 40000000) goal = 50000000 - a;
		if (a < 60000000 && a > 50000000) goal = 60000000 - a;
		if (a < 70000000 && a > 60000000) goal = 70000000 - a;
		if (a < 80000000 && a > 70000000) goal = 80000000 - a;
		if (a < 90000000 && a > 80000000) goal = 90000000 - a;
		if (a < 100000000 && a > 90000000) goal = 100000000 - a;
		if (a < 200000000 && a > 100000000) goal = 200000000 - a;
		if (a < 300000000 && a > 200000000) goal = 300000000 - a;
		if (a < 400000000 && a > 300000000) goal = 400000000 - a;
		if (a < 500000000 && a > 400000000) goal = 500000000 - a;
		if (a < 600000000 && a > 500000000) goal = 600000000 - a;
		if (a < 700000000 && a > 600000000) goal = 700000000 - a;
		if (a < 800000000 && a > 700000000) goal = 800000000 - a;
		if (a < 900000000 && a > 800000000) goal = 900000000 - a;
		if (a < 1000000000 && a > 900000000) goal = 1000000000 - a;
		YT.UpdateManager.updateGoal(goal);
	}
}

YT.UpdateManager = {
	updateName: function(a) {
		document.querySelector(".name").innerText = a;
	},

	updateBanner: function(a) {
		document.querySelector('.banner').src = a;
	},
	
	updateAvatar: function(a) {
		document.querySelector('.pfp').src = a;
	},
	
	updateSubs: function(a) {
		document.querySelector(".main-odo").innerHTML = a;
	},
	
	updateGoal: function(a) {
		document.querySelector(".goal-odo").innerHTML = a;
	},
	
	updateTotalViews: function(a) {
		document.querySelector(".total-views-odo").innerHTML = a;
	},
	
	updateEstimatedCounts: function(a,b,c) {
		document.querySelector(".estimated-per-2-seconds-odo").innerHTML = a;
		document.querySelector(".estimated-per-1-min-odo").innerHTML = b;
		document.querySelector(".estimated-per-1-hr-odo").innerHTML = c;
	}
}

YT.UrlManager = {
	addUser: function() {
		if (!getUrlVars()["c"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&c='+user)
			} else {
				history.pushState(null,'',window.location.href+'?c='+user);
			}
		}
	},
	addTheme: function() {
		if (!getUrlVars()["t"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&t=0')
			} else {
				history.pushState(null,'',window.location.href+'?t=0');
			}
		}
	},
	
	addOdometer: function() {
		if (!getUrlVars()["o"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&o=0')
			} else {
				history.pushState(null,'',window.location.href+'?o=0');
			}
		}
	}
}


YT.ThemeManager = {
	load: function() {
		if (getUrlVars()["t"] == "0") {
			$(document).ready(function() {
				$("body").css("background-color", "#EFF4F8");
				$(".card").css("background-color", "white");
				$(".odometer").css("color", "#455a64");
				$(".text").css("color", "#000");
				$("h1").css("color", "#455a64");
				$("h4").css("color", "#000");
				$("h6").css("color", "#000");
				$("p").css("color", "#000");
				$("ul").css("background-color", "white");
				$(".odometer").removeClass('rainbow-text');
				$("li").removeClass('rainbow-text');
				$("h1").removeClass('rainbow-text');
				$("h4").removeClass('rainbow-text');
				$("h6").removeClass('rainbow-text');
				$("a").removeClass('rainbow-text');
				$(".links").removeClass('rainbow-text');
				$("p").removeClass('rainbow-text');
				$(".text").removeClass('rainbow-text');
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
				chart.chartBackground.css({color: '#fff'});
			})
		}
		if (getUrlVars()["t"] == "1") {
			$(document).ready(function() {
				$("body").css("background-color", "black");
				$(".card").css("background-color", "black");
				$(".odometer").css("color", "#808080");
				$(".text").css("color", "#808080");
				$("h1").css("color", "#808080");
				$("h4").css("color", "#808080");
				$("h6").css("color", "#808080");
				$("p").css("color", "#808080");
				$("ul").css("background-color", "black");
				$(".odometer").removeClass('rainbow-text');
				$("li").removeClass('rainbow-text');
				$("h1").removeClass('rainbow-text');
				$("h4").removeClass('rainbow-text');
				$("h6").removeClass('rainbow-text');
				$("p").removeClass('rainbow-text');
				$("a").removeClass('rainbow-text');
				$(".links").removeClass('rainbow-text');
				$(".text").removeClass('rainbow-text');
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
				chart.chartBackground.css({color: '#000'});
			})
		}
		if (getUrlVars()["t"] == "2") {
			$(document).ready(function() {
				$("body").css("background-color", "black");
				$(".card").css("background-color", "black");
				$(".odometer").addClass('rainbow-text');
				$(".text").addClass('rainbow-text');
				$("h1").addClass('rainbow-text');
				$("h4").addClass('rainbow-text');
				$("h6").addClass('rainbow-text');
				$("a").addClass('rainbow-text');
				$(".links").addClass('rainbow-text');
				$("p").addClass('rainbow-text');
				$("ul").css("background-color", "black");
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
				chart.chartBackground.css({color: '#000'});
			})
		}
		if (getUrlVars()["t"] == "3") {
			$(document).ready(function() {
				$("body").css("background-color", "#EFF4F8");
				$(".card").css("background-color", "white");
				$(".odometer").addClass('rainbow-text');
				$(".text").addClass('rainbow-text');
				$("h1").addClass('rainbow-text');
				$("h4").addClass('rainbow-text');
				$("h6").addClass('rainbow-text');
				$("a").addClass('rainbow-text');
				$(".links").addClass('rainbow-text');
				$("p").addClass('rainbow-text');
				$("ul").css("background-color", "white");
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
				chart.chartBackground.css({color: '#fff'});
			})
		}
	},
	setTheme: function(theme) {
		switch(theme) {
			case 0: {
				if (window.location.href.indexOf("t=0") > -1) {
				return;
				} else {
					$("body").css("background-color", "#EFF4F8");
					$(".card").css("background-color", "white");
					$(".odometer").css("color", "#455a64");
					$(".text").css("color", "#000");
					$("h1").css("color", "#455a64");
					$("h4").css("color", "#000");
					$("h6").css("color", "#000");
					$("p").css("color", "#000");
					$("ul").css("background-color", "white");
					$(".odometer").removeClass('rainbow-text');
					$("li").removeClass('rainbow-text');
					$("h1").removeClass('rainbow-text');
					$("h4").removeClass('rainbow-text');
					$("h6").removeClass('rainbow-text');
					$("a").removeClass('rainbow-text');
					$(".links").removeClass('rainbow-text');
					$("p").removeClass('rainbow-text');
					$(".text").removeClass('rainbow-text');
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
					chart.chartBackground.css({color: '#fff'});
					if (window.location.href.indexOf("?") > -1) {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=1', '&t=0'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=2', '&t=0'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=3', '&t=0'));
						}
					} else {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=1', '?t=0'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=2', '?t=0'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=3', '?t=0'));
						}
					}
				}
			} break;
			case 1: {
				if (window.location.href.indexOf("t=1") > -1) {
					return;
				} else {
					$("body").css("background-color", "black");
					$(".card").css("background-color", "black");
					$(".odometer").css("color", "#808080");
					$(".text").css("color", "#808080");
					$("h1").css("color", "#808080");
					$("h4").css("color", "#808080");
					$("h6").css("color", "#808080");
					$("p").css("color", "#808080");
					$("ul").css("background-color", "black");
					$(".odometer").removeClass('rainbow-text');
					$("li").removeClass('rainbow-text');
					$("h1").removeClass('rainbow-text');
					$("h4").removeClass('rainbow-text');
					$("h6").removeClass('rainbow-text');
					$("p").removeClass('rainbow-text');
					$("a").removeClass('rainbow-text');
					$(".links").removeClass('rainbow-text');
					$(".text").removeClass('rainbow-text');
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
					chart.chartBackground.css({color: '#000'});
					if (window.location.href.indexOf("?") > -1) {
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=0', '&t=1'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=2', '&t=1'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=3', '&t=1'));
						}
					} else {
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=0', '?t=1'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=2', '?t=1'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=3', '?t=1'));
						}
					}
				}
			} break;
			case 2: {
				if (window.location.href.indexOf("t=2") > -1) {
				return;
				} else {
					$("body").css("background-color", "black");
					$(".card").css("background-color", "black");
					$(".odometer").addClass('rainbow-text');
					$(".text").addClass('rainbow-text');
					$("h1").addClass('rainbow-text');
					$("h4").addClass('rainbow-text');
					$("h6").addClass('rainbow-text');
					$("a").addClass('rainbow-text');
					$(".links").addClass('rainbow-text');
					$("p").addClass('rainbow-text');
					$("ul").css("background-color", "black");
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
					chart.chartBackground.css({color: '#000'});
					if (window.location.href.indexOf("?") > -1) {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=1', '&t=2'));
						}
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=0', '&t=2'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=3', '&t=2'));
						}
					} else {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=1', '?t=2'));
						}
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=0', '?t=2'));
						}
						if (window.location.href.indexOf("t=3") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=3', '?t=2'));
						}
					}
				}
			} break;
			case 3: {
				if (window.location.href.indexOf("t=3") > -1) {
				return;
				} else {
					$("body").css("background-color", "#EFF4F8");
					$(".card").css("background-color", "white");
					$(".odometer").addClass('rainbow-text');
					$(".text").addClass('rainbow-text');
					$("h1").addClass('rainbow-text');
					$("h4").addClass('rainbow-text');
					$("h6").addClass('rainbow-text');
					$("a").addClass('rainbow-text');
					$(".links").addClass('rainbow-text');
					$("p").addClass('rainbow-text');
					$("ul").css("background-color", "white");
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
					chart.chartBackground.css({color: '#fff'});
					if (window.location.href.indexOf("?") > -1) {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=1', '&t=3'));
						}
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=0', '&t=3'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('&t=2', '&t=3'));
						}
					} else {
						if (window.location.href.indexOf("t=1") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=1', '?t=3'));
						}
						if (window.location.href.indexOf("t=0") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=0', '?t=3'));
						}
						if (window.location.href.indexOf("t=2") > -1) {
							history.pushState(null, '', window.location.toString().replace('?t=2', '?t=3'));
						}
					}
				}
			} break;
		}
	}
}

function search() {
	var replaceurl = document.getElementById('search').value.replace("%20", " ");
	var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&fields=items%2Fsnippet%2FchannelId&q=' + replaceurl + '&key=' + rightKey, function(data) {
        window.location.href = '/yt-sub-counter/?c=' + data.items[0].snippet.channelId;
    })
}

$("#searchbutton").click(function(){
	search();
})

document.getElementById("search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search()
    }
})
