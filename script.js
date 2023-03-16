<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	<meta name="generator" content="LibreOffice 7.4.6.2 (Windows)"/>
	<meta name="created" content="2023-03-16T11:12:51.752000000"/>
	<meta name="changed" content="2023-03-16T11:17:42.943000000"/>
	<style type="text/css">
		@page { margin: 0.79in }
		p { line-height: 115%; margin-bottom: 0.1in }
	</style>
</head>
<body lang="en-US" dir="ltr"><p style="line-height: 100%; margin-bottom: 0in">
$(document).ready(function() {</p>
<p style="line-height: 100%; margin-bottom: 0in"> 
$('#search-form').submit(function(event) {</p>
<p style="line-height: 100%; margin-bottom: 0in">   
event.preventDefault();</p>
<p style="line-height: 100%; margin-bottom: 0in">    var ingredients
= $('#ingredients').val();</p>
<p style="line-height: 100%; margin-bottom: 0in">    var url =
'https://api.edamam.com/search?q=' + encodeURIComponent(ingredients)
+ '&amp;app_id=YOUR_APP_ID&amp;app_key=YOUR_APP_KEY';</p>
<p style="line-height: 100%; margin-bottom: 0in">   
$('#results').html('Searching...');</p>
<p style="line-height: 100%; margin-bottom: 0in">    $.getJSON(url,
function(data) {</p>
<p style="line-height: 100%; margin-bottom: 0in">      var html =
'&lt;ul&gt;';</p>
<p style="line-height: 100%; margin-bottom: 0in">     
$.each(data.hits, function(index, hit) {</p>
<p style="line-height: 100%; margin-bottom: 0in">        html +=
'&lt;li&gt;&lt;a href=&quot;' + hit.recipe.url + '&quot;&gt;' +
hit.recipe.label + '&lt;/a&gt;&lt;/li&gt;';</p>
<p style="line-height: 100%; margin-bottom: 0in">      });</p>
<p style="line-height: 100%; margin-bottom: 0in">      html +=
'&lt;/ul&gt;';</p>
<p style="line-height: 100%; margin-bottom: 0in">     
$('#results').html(html);</p>
<p style="line-height: 100%; margin-bottom: 0in">    });</p>
<p style="line-height: 100%; margin-bottom: 0in">  });</p>
<p style="line-height: 100%; margin-bottom: 0in">});</p>
</body>
</html>