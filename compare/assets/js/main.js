var YT = {};
var user1 = "";
var user2 = "";
var key = "";
var APIKeys = ["AIzaSyC2yHOH_wuAjkgvrUAZo5dhexZsaZJB1KY", "AIzaSyCj8wGz_c4h5xW-FugbbYOHH-BtLG1psHk", "AIzaSyABWPY0xGFSEV_fp3b7RAthCyegwzr-prw", "AIzaSyBneuqXGHEXQiJlWUOv23_FA4CzpsHaS6I", "AIzaSyDsjY7zKIxE9NG3xluvZepwYHD2vjBt9lo", "AIzaSyA8wEOgIJ7LEY4iDG4Qg_Ad2VgTEWlUIrA", "AIzaSyCAICFzxvKWCfVhQUz1GSSblO3L4X74R0M", "AIzaSyB4Q3icIKTwtGEuxKu09cVaBK30FxT57cs", "AIzaSyCHooIQqQfZ3advyfy-F0KqM9Z5XUN2dTQ", "AIzaSyAs2ErkL9jq7KQ_OGmFSIoj8z4yt2yKHZI", "AIzaSyDT0_OI9Ss2Spi1IjpxhCy6JIwcnJ8cLuI", "AIzaSyBfwGkn-dQxMy_T612ClTxE0akg4FYRVHI", "AIzaSyDvQuHTDU6PE0q25RSHSAHFkY7YNncSTxs", "AIzaSyAt14oAUc2M5P7ddtF6F2o6hNOZb1F9Gh8", "AIzaSyCB4Hj3pIiIb6IaqoJvp0BoKDIygkQnT2c", "AIzaSyBt8lp3CU87gU8AQKz4BWG5mLE5kFOSfmk", "AIzaSyDpzp1OEW-axtoc5O5kyxl0S2-46WfGVJg", "AIzaSyAu5kEu3rb1cCgM6Iqlbamt6D_DNrIex_8", "AIzaSyAZEii_ygokYH2gUS7DISWORzw4dMkLU_w", "AIzaSyDUTMnWBR_DfWz7Obdj_V-YMzPnNgqzKME", "AIzaSyBA3r7t0ranMbGuQte9t7uPPd2UWvri11I", "AIzaSyD87er3n_gedLNfb_uVY6sF-5cbYE-uFHM", "AIzaSyDSrQg06OUouEYvf9eqtwMv1_HGdATZVak", "AIzaSyCSYn85k54O6ZRHhjjVuU3itvxCKuZTha4", "AIzaSyBEgxtwHJGbLdoe_CjEO37kd_eHncFugSQ", "AIzaSyAkedClIJENM-lKk5Hwziprb_E9G5bKopc", "AIzaSyDdck0LEAXOCBVKDpN4ZgxC0Gk6zBedOTM", "AIzaSyBiwDi5co4t3Fopz9oEcfoisthYZz_kivM", "AIzaSyC_oqi_gbXaI29dkJJMRs0a82OWcl-h3tU", "AIzaSyBjPSI5R2dD8SYpTVX-95ihKNIUtwmXqlw", "AIzaSyDhjjxDQ4IkgQjQ4j_8GmfQQudVrVQiD88", "AIzaSyBns4CIvvTInLu8jHUdJadSRot3gnLP_WM", "AIzaSyB0uq8HHarCnpYG4pZxYPwE8wLAtM_gBN0", "AIzaSyCgp_Uc2jj1mAd7HW9AzAATt33rGkvttVQ", "AIzaSyDUUfmvtaHY3lQ11CbkF8gplSJSXwgLe2g", "AIzaSyDzUqDdCGrb5g5YU0fo0pB9QbqurkK3GSc", "AIzaSyBgcyeGD9VK-Nu2pnlP5VQaLWqYSIPWZRk", "AIzaSyAGry7aVXPytGcqt-GrOb4HkIXVGbuL4As", "AIzaSyAiWjUpPAvVy1fLj2VTJitH56Gs-2PBMLY", "AIzaSyA2bieaAnufzw9YNibt0R2WI14L8uU9tbw", "AIzaSyDpTfaINBOTi_1YgYSmk25DPS8ex-duZsQ", "AIzaSyAGFMcByfMdsbQbpK7FE8MfHLZNjMDIWsw", "AIzaSyCLuua085lVPXp0Jmqb_AIePC0hG66N_5U", "AIzaSyDGu5pdf-_0cNIZdNkcLKtdpn0UNulX7hU", "AIzaSyDY8suw3_q3zMX6ZDhdr7IDpPLQ6CbEsoY", "AIzaSyCE9cyVSRDrn0nCjO_ajRDSHXUr3yqLnT0", "AIzaSyACVbv1wiiFdYQsaMQkthBJAUi-Ek-ZNkc", "AIzaSyANLBp5fHf-XEsQnksu_-ygJMHviGQO7TY", "AIzaSyCQXeXdjhu5SKnvLJeYz9SgyKbzT8fnQko", "AIzaSyBlSrOJ-ajuFM4cRpbPbuBnI1Fn3BPFrbg", "AIzaSyC9jt3y7ygY5qTToSUEanHCyMYonkCXz1w", "AIzaSyA5dmZA8HwtRCI24FDlf4E0atZ5KjYxzWA", "AIzaSyBBjLqNnzhnJ5xqRGwfdCmIVG13YNNNk2w", "AIzaSyACZdXbrIijp3kLgAGNIdSCe7uxxIvo9wY", "AIzaSyBKDw28djiaVr2rFLUUHEO2gNoa4SBa5Eo", "AIzaSyAVsW7FWM1bRFZ2Sovyor649wJB0-frc6s", "AIzaSyBqpsmewbPiTDYXnTCDoudNBqNsuIw-mKk", "AIzaSyCJc3jP4mUaHK3H3iKP1tAg5Sre_ZXyRZ8", "AIzaSyC-eb1wfd4BSRYXumrJHVKSZiZhGwMDOCU", "AIzaSyBVvrKtgYwY0_aR6eI-RW9VSNx36DRyMj8", "AIzaSyCmqRC4LPcEzH7VLPj43F16WQc62kwsK_w", "AIzaSyBLG9IhobeWq4GhV3Tj30ul_RTf5OWV-A0", "AIzaSyAx0PuIfN747I7AoH0tqe3ChmmUYwaQ2Hk", "AIzaSyBYUX-FaspbUCmIHRku6Nlk8P7KeuBNv0U", "AIzaSyBx2pYtSpgwRfZKgyyVKr50tvvatYo-qVk", "AIzaSyB8GMc25p2aIAe-c7RprBg-4tWYH1z8Sks", "AIzaSyCpxYGkgA84erP8wjh9wogUIscDjk8CWKU", "AIzaSyD28RI5o_dYgRrlloUuKwafVsPWFiINW0o", "AIzaSyCQ0-h0qSwqYHACIGlftvlHbga1vu6FL68", "AIzaSyCffkLkQMyYCv53KZyQrxsv2M9AftBQVbc", "AIzaSyA3hbM5bSmkZoxIOPBgMh2i9NO1oidlhg0", "AIzaSyBJlU6gE9sWJWlFR3AU-apBEIqUTuBpMMs", "AIzaSyDGPy7EpMnWBakmS--6Zo6he17npKi1Scc", "AIzaSyAriSzreOo8iwur_xbuAnKOALHQ6CYNkdo", "AIzaSyC3NhWVzNbrkKDq5tggtOKWctHQK3jfIeU", "AIzaSyArF3ec1ypsO7ofUGw2WjbubgHNC7SNKCo", "AIzaSyC8cBG9qURY7sGE-gpDEDFMEgryTToVRpc", "AIzaSyBgDrdkGCyNY7NsOsHNijRF0crD2YGwvDg", "AIzaSyBPUsOE-_pAInBPUG_A5NMJ9V78_S1cA5c", "AIzaSyALUMHI1gzc_W5m89245j7hsT-thbe1qjY", "AIzaSyB_iH4g5IpsQJgqd-0eaHZPNLE415-pB_4", "AIzaSyASbvrdZO4sOkjs9zfvFX-L5bdDyDEbi08", "AIzaSyC-2J15Q5Utd2CgpZsHF1Mbv0jnQlRPRaQ", "AIzaSyAtHGrv1TRgjnKgONYNEHj3lDvRockUhNk", "AIzaSyCNtFjts20PEQ8GpitQPVJ5OZFbUGgVhMc", "AIzaSyBgQPSALZZNNA1tACSFDakTZYSEdaBANc4", "AIzaSyAudGmI32QygtkxS80REON501yRkMpPFxc", "AIzaSyAYclzmbzChKrUo9RXiWUd3e08WWl04_T0", "AIzaSyDXbxJEIW1CeXY7xrQAVQSYDA3mSBzC9iM", "AIzaSyC31MIJipeK5A9gkRVIKD9cXmh96pwu1l4", "AIzaSyDfvgOTG8M2GqrrElnmYGeHorF_OgQhlA8", "AIzaSyCLuSMMw3KAXwNJIsrxwxT5ShmSMAsNlro", "AIzaSyDeT0mgsVGuI8D259Bt6l7xKI-qTjbtZYE", "AIzaSyCxKhvvr8CvmJgeo-GHt3a_iog_kMXDsZc", "AIzaSyBx8qy6Wk6Jwdj8ku1D2Aduwjkbt9paaEA", "AIzaSyD-A8AygZFreRhsEzxtRGJUdH_JfDHOn8Y", "AIzaSyBpIe46IyjC0sdn7ENHC7brTIA5kMd8FnA", "AIzaSyAsfUSkfzhz74opMiWzKJ-iXDq0oF29mxQ", "AIzaSyARqPa7dgDil9_OL7jw1UdWFcdUoT57O5U", "AIzaSyBmrN6VwSBvGjRasOq7LBI0dkzVp-dreOk", "AIzaSyA62Z94cavT-ODi6ZzsJSf7MbV3JsRyx4U", "AIzaSyC5sq5uo1MtHPo0nvmhUd_KSdhwGdB8IAk", "AIzaSyCmRPZ4hLkijSTtJYnjIitvAd45z291Bzs", "AIzaSyAm3hJqTq1L1wcz-cz_4zLUNs2PD37hLuY", "AIzaSyApJEbF-pgr5sRc9hR0NznPx6UA_CCJPG4", "AIzaSyCRtJ2uhgYe7p3J-QkC6kHsm7KZz0bDIok", "AIzaSyCo-PwQAtlrchgSAY0hLnE2HYSRhqdsPXk", "AIzaSyC7asPTom1oZVPmZu7UcttGNFvqzRWQiRM", "AIzaSyDmUVXdKMQfp1428NsX0GuBHEp3Hh6VnRQ", "AIzaSyAXrk1HSRZX2tEPDhKoPGm7gQ49--IKp2k", "AIzaSyANRopUwcIy9_Gj_gebyYdSkMlRgLjzlWA", "AIzaSyB5IsxA_-IjXbnBoZ7zx6fSAAPgpCydIxk", "AIzaSyBxeCTQ9eNe5gtkhrVPg_YNZxuOS9kkNN0", "AIzaSyD2aLOfH18P889oz5OUi3Eckb3qGzJ9lvU", "AIzaSyALa1cPhbMdOKjwgJEvqkhGfTukLdIKupE", "AIzaSyDDEbTiTSAK89PFXon3sOGIX3CsTsBL1oA", "AIzaSyCLtRzn0-P2_mPfBKlk7SqzTSI-S49CTSs", "AIzaSyB6JZxYxR9OpxIQ0wbvZD_DnJcTVt4MihU", "AIzaSyDHEyizXx6ExuMfrpgqSP_5aTIoqmDhk4g", "AIzaSyBmEgHy0Fs50bRDv2N-4LJYSy0-MkT-K50", "AIzaSyBBTwxet9VGR9jK9le2mE6uSvTfr2XDRJA", "AIzaSyAXmcBmHfFZfzFPUHnDf55gX-7EESGSUn0", "AIzaSyAFdgjUKpIcWTHRwXq0T8eI1X48qwoXOcs", "AIzaSyC03yZIC1TYRqDYYjLAxFgg2TcTsBzwSeA", "AIzaSyATnA8iySFAP1TKtLcdcqHgGyM7G9Zpj7c", "AIzaSyC3lXNm8-OC5y3uFLUQjPkTCTP6qR7Bv0s", "AIzaSyAZ1uTYfKguS-o-xru-icR8PM44F4DQhdE", "AIzaSyCKrVC4PbYLa0S0CmIFj97PdjhwvEcALV4", "AIzaSyCJzUJFzbjfByeeiDL0zjIrABvBZvqwTeY", "AIzaSyBKMRMYEiUIePp2IKzBNgCaxVLgFhjMSlQ", "AIzaSyBVy4EKrR51E1zb1eybglkT0VRotEbQbEo", "AIzaSyBnIAqzNEjw_ZJjqsRenVctNQMrIwHtAJw", "AIzaSyDsxIyAMEYNxF5s4KqcP2hA0trTYzi5ZaU"]
var rightKeys = [];
var rightKey;
var ok;

setInterval(() => {
	$.each($('iframe'), (arr,x) => {
		let src = $(x).attr('src');
		if (src && src.match(/(ads-iframe)|(disqusads)/gi)) {
			$(x).remove();
		}
	});
}, 300);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-119417406-7');

var chart = new Highcharts.chart({
    chart: {
        renderTo: 'chart',
        type: 'line'
    },
    title: {
        text: 'Subscriber Difference Graph'
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
        name: 'Subscriber Difference',
        marker: {
            enabled: false
        }
    }]
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value
    });
    return vars
}

if (getUrlVars()["o"] == "1") {
    document.getElementById('style').href='../../../assets/global/odometer-fast.css';
}

if (!getUrlVars()["c1"]) {
    user1 = "UC-lHJZR3Gqxm24_Vd_AJ5Yw";
} else {
    user1 = getUrlVars()["c1"];
}
if (!getUrlVars()["c2"]) {
    user2 = "UCq-Fj5jknLsUf-MWSy4_brA";
} else {
    user2 = getUrlVars()["c2"];
}

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

  var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];

  if (!ok) {
	if (rightKeys) {
		$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id='+user1+'&key='+rightKey, function(data) {
			$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=snippet,brandingSettings&id='+user2+'&key='+rightKey, function(data2) {
				YT.UpdateManager.updateAvatars(data.items[0].snippet.thumbnails.high.url, data2.items[0].snippet.thumbnails.high.url)
				YT.UpdateManager.updateDisqusNames(data.items[0].snippet.title, data2.items[0].snippet.title)

				if (data.items[0].brandingSettings.image.bannerImageUrl != "http://s.ytimg.com/yts/img/channels/c4/default_banner-vfl7DRgTn.png") {
					if (data2.items[0].brandingSettings.image.bannerImageUrl != "http://s.ytimg.com/yts/img/channels/c4/default_banner-vfl7DRgTn.png") {
						YT.UpdateManager.updateBanners(data.items[0].brandingSettings.image.bannerImageUrl, data2.items[0].brandingSettings.image.bannerImageUrl)
					} else {
						YT.UpdateManager.updateBanners(data.items[0].brandingSettings.image.bannerImageUrl, "https://livecounts.io/yt-sub-counter/compare/assets/img/banner.jpg")
					}
				} else {
					YT.UpdateManager.updateBanners("https://livecounts.io/yt-sub-counter/compare/assets/img/banner.jpg", data2.items[0].brandingSettings.image.bannerImageUrl)
				}

				if (data.items[0].brandingSettings.image.bannerImageUrl == "http://s.ytimg.com/yts/img/channels/c4/default_banner-vfl7DRgTn.png" && data2.items[0].brandingSettings.image.bannerImageUrl == "http://s.ytimg.com/yts/img/channels/c4/default_banner-vfl7DRgTn.png") {
					YT.UpdateManager.updateBanners("https://livecounts.io/yt-sub-counter/compare/assets/img/banner.jpg", "https://livecounts.io/yt-sub-counter/compare/assets/img/banner.jpg")
				}

				YT.UpdateManager.updateNames(data.items[0].snippet.title, data2.items[0].snippet.title)
				ok = 1
			})
		})
	} else {
		console.log("Nothing detected in right keys array, can't update avatars and banners")
	}
}

	$.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+user1+'&key='+rightKey, function(data) {
        $.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics&id='+user2+'&key='+rightKey, function(data2) {
            $.getJSON('https://api.livecounts.io/yt_subs', function(data3) {
                var result1 = data3.filter(x => x.cid === user1);
                var result2 = data3.filter(x => x.cid === user2);
                if (result1.length != 0) {
                    if (result2.length != 0) {
                        if (result1[0].cid == user1) {
                            YT.UpdateManager.updateSubs(result1[0].subscriberCount, result2[0].subscriberCount)
							YT.UpdateManager.updateDifference(Math.abs(result1[0].subscriberCount - result2[0].subscriberCount))
							
							chart.series[0].addPoint([                   
								(new Date()).getTime(),
								Math.abs(parseInt(result1[0].subscriberCount - result2[0].subscriberCount))
							])
							
                        } else {
                            YT.UpdateManager.updateSubs(result2[0].subscriberCount, result1[0].subscriberCount)
							YT.UpdateManager.updateDifference(Math.abs(result2[0].subscriberCount - result1[0].subscriberCount))
							
							chart.series[0].addPoint([                   
								(new Date()).getTime(),
								Math.abs(parseInt(result1[0].subscriberCount - result2[0].subscriberCount))
							])
                        }
                    } else {
                        if (result1[0].cid == user1) {
                            YT.UpdateManager.updateSubs(result1[0].subscriberCount, data2.items[0].statistics.subscriberCount)
							YT.UpdateManager.updateDifference(Math.abs(result1[0].subscriberCount - data2.items[0].statistics.subscriberCount))
							
							chart.series[0].addPoint([                   
								(new Date()).getTime(),
								Math.abs(parseInt(result1[0].subscriberCount - data2.items[0].statistics.subscriberCount))
							])

                        } else {
                            YT.UpdateManager.updateSubs(data2.items[0].statistics.subscriberCount, result1[0].subscriberCount)
							YT.UpdateManager.updateDifference(Math.abs(data2.items[0].statistics.subscriberCount - result1[0].subscriberCount))
							
							chart.series[0].addPoint([                   
								(new Date()).getTime(),
								Math.abs(parseInt(result1[0].subscriberCount - data2.items[0].statistics.subscriberCount))
							])
                        }
                    }
                } else {
                    if (result2.length != 0) {
                        if (result2[0].cid == user2) {
                            YT.UpdateManager.updateSubs(data.items[0].statistics.subscriberCount, result2[0].subscriberCount)
							YT.UpdateManager.updateDifference(Math.abs(data.items[0].statistics.subscriberCount - result2[0].subscriberCount))

							chart.series[0].addPoint([                   
								(new Date()).getTime(),
								Math.abs(parseInt(data.items[0].statistics.subscriberCount - result2[0].subscriberCount))
							])
                        } else {
                            YT.UpdateManager.updateSubs(result2[0].subscriberCount, data.items[0].statistics.subscriberCount)
							YT.UpdateManager.updateDifference(Math.abs(result2[0].subscriberCount - data.items[0].statistics.subscriberCount))
							
							chart.series[0].addPoint([                   
								(new Date()).getTime(),
								Math.abs(parseInt(data.items[0].statistics.subscriberCount - result2[0].subscriberCount))
							])

                        }
                    } else {
                        if (data.items[0].id == user1) {
                            YT.UpdateManager.updateSubs(data.items[0].statistics.subscriberCount, data2.items[0].statistics.subscriberCount)
							YT.UpdateManager.updateDifference(Math.abs(data.items[0].statistics.subscriberCount - data2.items[0].statistics.subscriberCount))
							
							chart.series[0].addPoint([                   
								(new Date()).getTime(),
								Math.abs(parseInt(data.items[0].statistics.subscriberCount - data2.items[0].statistics.subscriberCount))
							])
                        } else {
                            YT.UpdateManager.updateSubs(data2.items[0].statistics.subscriberCount, data.items[0].statistics.subscriberCount)
							YT.UpdateManager.updateDifference(Math.abs(data2.items[0].statistics.subscriberCount - data.items[0].statistics.subscriberCount))
							
							chart.series[0].addPoint([                   
								(new Date()).getTime(),
								Math.abs(parseInt(data.items[0].statistics.subscriberCount - data2.items[0].statistics.subscriberCount))
							])
                        }
                    }
                }
            })

            }).fail(function() {
			rightKeys.pop(checkKey)
			console.log("Invalid key detected in right keys array, removing it...")
    })

	}).fail(function() {
		rightKeys.pop(checkKey)
		console.log("Invalid key detected in right keys array, removing it...")
})
}, 2000)

window.onload = () => {
    YT.UrlManager.addUser1();
    YT.UrlManager.addUser2();
	YT.ThemeManager.load();

    if (getUrlVars["t"] == "0") {
		$("#square-white").css("outline-style", "solid")
		$("#square-white").css("outline-color", "black")
	}

    if (!getUrlVars()["t"]) {
        if (window.location.href.indexOf("?")>-1){
            history.pushState(null,'',window.location.href+'&t=0')
        } else {
            history.pushState(null,'',window.location.href+'?t=0');
        }
    }

    if (!getUrlVars()["o"]) {
        if (window.location.href.indexOf("?")>-1){
            history.pushState(null,'',window.location.href+'&o=0')
        } else {
            history.pushState(null,'',window.location.href+'?o=0');
        }
    }
}

YT.UpdateManager = {
	updateNames: function(a,b) {
        document.querySelector("#name1").innerText = a;
        document.querySelector("#name2").innerText = b;
	},

	updateBanners: function(a,b) {
        document.querySelector('#banner1').src = a;
        document.querySelector('#banner2').src = b;
	},
	
	updateAvatars: function(a,b) {
        document.querySelector('#user_pic1').src = a;
        document.querySelector('#user_pic2').src = b;
	},
	
	updateSubs: function(a,b) {
        document.querySelector("#odometer1").innerHTML = a;
        document.querySelector("#odometer2").innerHTML = b;
    },
    
    updateDifference: function(a) {
        document.querySelector("#difference").innerHTML = a;
	},
	
	updateDisqusNames: function(a,b) {
		document.querySelector(".channel1").innerText = a;
		document.querySelector(".channel2").innerText = b;
	}
}

YT.UrlManager = {
	addUser1: function() {
		if (!getUrlVars()["c1"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&c1='+user1)
			} else {
				history.pushState(null,'',window.location.href+'?c1='+user1);
			}
		}
    },
    addUser2: function() {
        if (!getUrlVars()["c2"]) {
			if (window.location.href.indexOf("?")>-1){
				history.pushState(null,'',window.location.href+'&c2='+user2)
			} else {
				history.pushState(null,'',window.location.href+'?c2='+user2);
			}
		}
    }
}

document.getElementById("search1").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search1()
    }
})
document.getElementById("search2").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        search2()
    }
})

function search1() {
	var replaceurl = document.getElementById('search1').value.replace("%20", " ");
	var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&fields=items%2Fsnippet%2FchannelId&q=' + replaceurl + '&key=' + rightKey, function(data) {
        window.location.href = '/yt-sub-counter/compare/?c1=' + data.items[0].snippet.channelId + '&c2=' + user2;
    })
}

function search2() {
	var replaceurl = document.getElementById('search2').value.replace("%20", " ");
	var rightKey = rightKeys[Math.floor(Math.random()*rightKeys.length)];
    $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&fields=items%2Fsnippet%2FchannelId&q=' + replaceurl + '&key=' + rightKey, function(data) {
        window.location.href = '/yt-sub-counter/compare/?c1=' + user1 + '&c2=' + data.items[0].snippet.channelId;
    })
}

YT.ThemeManager = {
	load: function() {
		if (getUrlVars()["t"] == "0") {
			$(document).ready(function() {
				$("html").css("background-color", "transparent");
				$(".card").css("background-color", "white");
				$(".odometer").css("color", "#455a64");
				$(".text").css("color", "#455a64");
				$("ul").css("background-color", "white");
                $(".odometer").removeClass('rainbow-text');
                $("h6").removeClass('rainbow-text');
				$(".text").removeClass('rainbow-text');
				$("li").removeClass('rainbow-text');
				$("#square-dark").css("outline", "none")
				$("#square-white").css("outline-style", "solid")
				$("#square-white").css("outline-color", "black")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
			})
		}
		if (getUrlVars()["t"] == "1") {
			$(document).ready(function() {
				$("html").css("background-color", "black");
				$(".card").css("background-color", "black");
				$(".odometer").css("color", "#808080");
                $(".text").css("color", "#808080");
                $("h6").css("color", "#808080");
                $("h6").removeClass('rainbow-text');
                $("h3").css("color", "#808080");
				$("ul").css("background-color", "black");
				$(".odometer").removeClass('rainbow-text');
				$("li").removeClass('rainbow-text');;
				$("#square-dark").css("outline-style", "solid")
				$("#square-dark").css("outline-color", "white")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
			})
		}
		if (getUrlVars()["t"] == "2") {
			$(document).ready(function() {
				$("html").css("background-color", "black");
				$(".card").css("background-color", "black");
				$("ul").css("background-color", "black");
                $(".odometer").addClass('rainbow-text');
                $("h6").addClass('rainbow-text');
                $("h3").addClass('rainbow-text');
				$(".text").addClass('rainbow-text');
				$("li").addClass('rainbow-text');
				$("#square-dark").css("outline", "none")
				$("#square-white").css("outline-style", "solid")
				$("#square-white").css("outline-color", "black")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
			})
		}
		if (getUrlVars()["t"] == "3") {
			$(document).ready(function() {
				$("html").css("background-color", "white");
				$(".card").css("background-color", "white");
				$("ul").css("background-color", "white");
                $(".odometer").addClass('rainbow-text');
                $("h6").addClass('rainbow-text');
                $("h3").addClass('rainbow-text');
				$(".text").addClass('rainbow-text');
				$("li").addClass('rainbow-text');
				$("#square-dark").css("outline", "none")
				$("#square-rainbow-white").css("outline-style", "solid")
				$("#square-rainbow-white").css("outline-color", "black")
				$("#square-white").css("outline", "none")
				$("#square-rainbow-black").css("outline", "none")
			})
		}
	},
	setTheme: function(theme) {
		switch(theme) {
			case 0: {
				if (window.location.href.indexOf("t=0") > -1) {
				return;
				} else {
					$("html").css("background-color", "transparent");
					$(".card").css("background-color", "white");
					$(".odometer").css("color", "#455a64");
					$(".text").css("color", "#455a64");
                    $("ul").css("background-color", "white");
                    $("h3").removeClass('rainbow-text')
                    $("h6").removeClass('rainbow-text');
					$(".odometer").removeClass('rainbow-text');
					$(".text").removeClass('rainbow-text');
					$("li").removeClass('rainbow-text');
					$("#square-dark").css("outline", "none")
					$("#square-white").css("outline-style", "solid")
					$("#square-white").css("outline-color", "black")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
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
					$("html").css("background-color", "black");
					$(".card").css("background-color", "black");
					$(".odometer").css("color", "#808080");
                    $(".text").css("color", "#808080");
                    $("h3").css("color", "#808080");
                    $("h6").css("color", "#808080");
                    $("h3").removeClass('rainbow-text')
                    $("h6").removeClass('rainbow-text');
					$("ul").css("background-color", "black");
					$(".odometer").removeClass('rainbow-text');
					$(".text").removeClass('rainbow-text');
					$("li").removeClass('rainbow-text');;
					$("#square-dark").css("outline-style", "solid")
					$("#square-dark").css("outline-color", "white")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline", "none")
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
					$("html").css("background-color", "black");
				$(".card").css("background-color", "black");
				$("ul").css("background-color", "black");
				$(".odometer").addClass('rainbow-text');
                $(".text").addClass('rainbow-text');
                $("h3").addClass('rainbow-text')
                $("h6").addClass('rainbow-text');
				$("li").addClass('rainbow-text');
				$("#square-dark").css("outline", "none")
				$("#square-white").css("outline-style", "solid")
				$("#square-white").css("outline-color", "black")
				$("#square-rainbow-black").css("outline", "none")
				$("#square-rainbow-white").css("outline", "none")
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
					$("html").css("background-color", "transparent");
					$("ul").css("background-color", "white");
					$(".odometer").addClass('rainbow-text');
					$(".text").addClass('rainbow-text');
                    $("li").addClass('rainbow-text');
                    $("h3").addClass('rainbow-text')
                    $("h6").addClass('rainbow-text');
					$(".card").css("background-color", "white");
					$("#square-dark").css("outline", "none")
					$("#square-white").css("outline", "none")
					$("#square-rainbow-black").css("outline", "none")
					$("#square-rainbow-white").css("outline-style", "solid")
					$("#square-rainbow-white").css("outline-color", "black")
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