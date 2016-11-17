var CHECKED_CLASSNAME = '__fbfnchckd';
var BAD_URLS = [
  '100percentfedup.com',
  '21stcenturywire.com',
  '70news.wordpress.com',
  'abcnews.com.co',
  'activistpost.com',
  'addictinginfo.org',
  'americannews.com',
  'anonnews.co',
  'associatedmediacoverage.com',
  'beforeitsnews.com',
  'beingliberal.org',
  'bigamericannews.com',
  'bigpzone.com',
  'bipartisanreport.com',
  'bizpacreview.com',
  'bluenationreview.com',
  'breitbart.com',
  'cap-news.com',
  'christwire.org',
  'chronicle.su',
  'civictribune.com',
  'clickhole.com',
  'coasttocoastam.com',
  'collective-evolution.com',
  'consciouslifenews.com',
  'conservativeoutfitters.com',
  'countdowntozerotime.com',
  'counterpsyops.com',
  'creambmp.com',
  'dailybuzzlive.com',
  'dailycurrant.com',
  'dailywire.com',
  'dcclothesline.com',
  'dcgazette.com',
  'derfmagazine.com',
  'disclose.tv',
  'drudgereport.com.co',
  'duffleblog.com',
  'duhprogressive.com',
  'embols.com',
  'empireherald.com',
  'empirenews.com',
  'empirenews.com',
  'endingthefed.com',
  'enduringvision.com',
  'fprnradio.com',
  'geoengineeringwatch.org',
  'govtslaves.info',
  'gulagbound.com',
  'hangthebankers.com',
  'humansarefree.com',
  'huzlers.com',
  'ifyouonlynews.com',
  'ijr.com',
  'infowars.com',
  'inquisitr.com',
  'intellihub.com',
  'jonesreport.com',
  'lewrockwell.com',
  'liberalamerica',
  'libertytalk.fm',
  'libertyunyielding.com',
  'libertyvideos.org',
  'libertymovementradio.com',
  'mediamass.net',
  'megynkelly.us',
  'msnbc.com.co',
  'msnbc.website',
  'nahadaily.com',
  'nationalreport.net',
  'naturalnews.com',
  'ncscooper.com',
  'newcenturytimes.com',
  'news-hound.com',
  'newsbiscuit.com',
  'newsexaminer.net',
  'newslo.com',
  'newsmutiny.com',
  'newswatch28.com',
  'newswire-24.com',
  'nodisinfo.com',
  'now8news.com',
  'nowtheendbegins.com',
  'occupydemocrats.com',
  'pakalertpress.com',
  'politicalblindspot.com',
  'politicalears.com',
  'politicalo.com',
  'politicususa.com',
  'prisonplanet.com',
  'prisonplanet.tv',
  'private-eye.co.uk',
  'projectveritas.com',
  'react365.com',
  'realfarmacy.com',
  'realnewsrightnow.com',
  'redflagnews.com',
  'redstate.com',
  'reductress.com',
  'rilenews.com',
  'satiratribune.com',
  'sprotspickle.com',
  'theblaze.com',
  'thedailysheeple.com',
  'thefreethoughtproject.com',
  'thenewsnerd.com',
  'theonion.com',
  'other98.com',
  'reporter.bz',
  'therundownlive.com',
  'thestatelyharold.com',
  'theuspatriot.com',
  'truthfrequencyradio.com',
  'twitchy.com',
  'unconfirmedsources.com',
  'blasting.news',
  'usasupreme.com',
  'usuncut.com',
  'veteranstoday.com',
  'wakingupwisconsin.com',
  'wideawakeamerica.com',
  'winningdemocrats.com',
  'witscience.org',
  'wnd.com',
  'worldnewsdailyreport.com',
  'worldtruth.tv',
  'zerohedge.com'];

function getUnmarkedEls() {
  var selector = '._6lz:not(.' + CHECKED_CLASSNAME + ')';
  return document.querySelectorAll(selector);
}

function collectionHas(a, b) {
  for(var i = 0; i < a.length; i ++) {
    if(a[i] == b) return true;
  }
  return false;
}

function findParentBySelector(elm, selector) {
  var all = document.querySelectorAll(selector);
  var cur = elm.parentNode;
  while(cur && !collectionHas(all, cur)) {
    cur = cur.parentNode;
  }
  return cur;
}

function containsDodgyLink(el) {
  var host = el.innerText.toLowerCase();
  for(var i=0; i<BAD_URLS.length; i++) {
    var url = BAD_URLS[i];
    if (host.indexOf(url) > -1) {
      return true;
    }
  };
  return false;
}

function addWarning(el) {
  el.appendChild(createWarningDiv());
}

function getHost(href) {
  var link = document.createElement("a");
  link.href = href;
  return link.hostname;
};

function createWarningDiv() {
  el = document.createElement('div');
  el.innerHTML = '<div class="warning-headline">WARNING</div><p class="warning-text">This website may contain fake, false or misleading articles.<br/><a href="https://docs.google.com/document/d/10eA5-mCZLSS4MQY5QGb5ewC3VAL6pLkT53V_81ZyitM/preview">Further info</a>.</p><div class="dismiss-warning">OK</div>';
  el.classList = ['__fake-warning'];
  // Add listener for click to remove warning
  listenForClick(el.querySelector('.dismiss-warning'));
  return el;
}

function getParamFromURL(url, param) {
  // Check for URLs with no query string
  if (url.indexOf('?') === -1) {
    return '';
  }
  var query = url.split('?')[1];
  var queries = query.split('&');
  for(var i=0; i<queries.length; i++) {
    var item = queries[i].split("=");
    if (item[0] === param) {
      return item[1];
    }
  };
  return '';
}

function removeWarning(event) {
  var warning = event.srcElement.parentElement;
  warning.parentElement.removeChild(warning);
}

function listenForClick(el) {
  el.addEventListener('click', removeWarning);
}

function checkPage() {
  var els = getUnmarkedEls();
  els.forEach(function(el) {
    if (containsDodgyLink(el)) {
      el.classList.add(CHECKED_CLASSNAME);
      var holder = findParentBySelector(el, '._3x-2');
      holder.appendChild(createWarningDiv());
    }
  });
}

function watchDOMMutations() {
  var target = document.body;
  var observer = new MutationObserver(function(mutations) {
    checkPage();
  });
  var config = {
      childList : true,
      attributes : true,
      subtree : true,
  }
  observer.observe(target, config);
}

watchDOMMutations();
