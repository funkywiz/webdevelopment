
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - kss-bbb.js - */
// https://www.biology.cam.ac.uk/portal_javascripts/kss-bbb.js?original=1
(function($){
function refreshPortlet(hash,_options){var options={data:{},success: function(){},error: function(){},ajaxOptions:{}};$.extend(options,_options);options.data.portlethash=hash;ajaxOptions=options.ajaxOptions;ajaxOptions.url=$('base').attr('href')+'/@@render-portlet';ajaxOptions.success=function(data){var container=$('[data-portlethash="'+hash+'"]');var portlet=$(data);container.html(portlet);options.success(data,portlet)}
ajaxOptions.error=function(){options.error()}
ajaxOptions.data=options.data;$.ajax(ajaxOptions)}
function applyPortletTimeout(portlet){var timeout=portlet.data('timeout');if(timeout==undefined){timeout=30}else{timeout=parseInt(timeout)}
timeout=timeout * 1000;setTimeout($.proxy(function(){refreshPortlet(this.parents('.portletWrapper').data('portlethash'),{success: function(data,portlet){apply_timeout(portlet)}})},portlet),timeout)}
$(document).ready(function(){var spinner=$('<div id="ajax-spinner"><img src="'+portal_url+'/spinner.gif" alt=""/></div>');spinner.appendTo('body').hide();$(document).ajaxStart(function(){spinner.show()});$(document).ajaxStop(function(){spinner.hide()});$('body').delegate('#calendar-next,#calendar-previous','click', function(e){e.preventDefault();var el=$(this);var container=el.parents('.portletWrapper');refreshPortlet(container.data('portlethash'),{data:{month:el.data('month'),year:el.data('year')}});return false});$('.kssPortletRefresh,.refreshPortlet').each(function(){applyPortletTimeout($(this))});$('.portlet-deferred').each(function(){refreshPortlet($(this).parents('.portletWrapper').data('portlethash'))});
function updateSharing(data){var sharing=data.body;var messages=$(data.messages).filter(function(){return this.tagName=='DL'});$('.portalMessage').remove();$('#user-group-sharing').replaceWith(sharing);$('#content').prepend(messages)}
var search_timeout=null;$('#content-core').delegate('#sharing-user-group-search','input', function(){var text=$(this);if(search_timeout!=null){clearTimeout(search_timeout)}
if(text.val().length>3){search_timeout=setTimeout($.proxy(function(){$('#sharing-search-button').trigger('click')},text),300)}});$('#content-core').delegate('#sharing-search-button','click', function(){$.ajax({url:$('base').attr('href')+'/@@updateSharingInfo',data:{search_term:$('#sharing-user-group-search').val(),'form.button.Search':'Search'},type:'GET',dataType:'json',success:updateSharing});return false});$('#content-core').delegate('#sharing-save-button','click', function(){var btn=$(this);var form=btn.parents('form');var data=form.serializeArray();data.push({name:'form.button.Save',value:'Save'});$.ajax({url:$('base').attr('href')+'/@@updateSharingInfo',data:data,type:'POST',dataType:'json',success:updateSharing});return false})})})(jQuery);

/* - inline_validation.js - */
// https://www.biology.cam.ac.uk/portal_javascripts/inline_validation.js?original=1
jQuery(function($){var render_error=function($field,errmsg){var $errbox=$('div.fieldErrorBox',$field);if(errmsg!==''){$field.addClass('error');$errbox.html(errmsg)} else{$field.removeClass('error');$errbox.html('')}};$(document).on('blur','.field input.blurrable, '+'.field select.blurrable, '+'.field textarea.blurrable',
function(){var $input=$(this),$field=$input.closest('.field'),uid=$field.attr('data-uid'),fname=$field.attr('data-fieldname'),$form=$field.closest('form'),url='',index=-1,value=$input.val();if($input.attr('multiple')==='multiple'&&value===null){value=$([]).serialize()}
params=$.param({uid:uid,fname:fname,value:value},traditional=true);if($field&&uid&&fname){url=$form.attr('action');index=url.lastIndexOf('/');if(index>-1&&url.lastIndexOf('edit')>index){url=url.slice(0,index)}
$.post(url+'/at_validate_field',params, function(data){if(data.errmsg===undefined){return};render_error($field,data.errmsg)})}});var formlib_validate_field=function(input){var $input=$(input),$field=$input.closest('.field'),$form=$field.closest('form'),fname=$field.attr('data-fieldname');$form.ajaxSubmit({url:$form.attr('action')+'/@@formlib_validate_field',data:{fname:fname},iframe:false,success: function(data){render_error($field,data.errmsg)},dataType:'json'})};$(document).on('blur','.formlibInlineValidation input[type="text"], '+'.formlibInlineValidation input[type="password"], '+'.formlibInlineValidation input[type="checkbox"], '+'.formlibInlineValidation input[type="radio"], '+'.formlibInlineValidation select, '+'.formlibInlineValidation textarea',
function(){formlib_validate_field(this)});var z3cform_validate_field=function(input){var $input=$(input),$field=$input.closest('.field'),$form=$field.closest('form'),fset=$input.closest('fieldset').attr('data-fieldset'),fname=$field.attr('data-fieldname');if(fname){$form.ajaxSubmit({url:$form.attr('action')+'/@@z3cform_validate_field',data:{fname:fname,fset:fset},iframe:false,success: function(data){render_error($field,data.errmsg)},dataType:'json'})}};$(document).on('blur','.z3cformInlineValidation input[type="text"], '+'.z3cformInlineValidation input[type="password"], '+'.z3cformInlineValidation input[type="checkbox"], '+'.z3cformInlineValidation input[type="radio"], '+'.z3cformInlineValidation select, '+'.z3cformInlineValidation textarea',
function(){z3cform_validate_field(this)})});

/* - ++resource++collective.oembed.js - */
// https://www.biology.cam.ac.uk/portal_javascripts/++resource++collective.oembed.js?original=1
﻿(function($){$.fn.oembed=function(url,options,embedAction){settings=$.extend(true,$.fn.oembed.defaults,options);initializeProviders();var div=document.createElement('div'),ref=document.getElementsByTagName('base')[0]||document.getElementsByTagName('script')[0];div.className='fit-vids-style';div.innerHTML='&shy;<style>\.fluid-width-video-wrapper{\
width:100%;\
position:relative;\
padding:0;\} \.fluid-width-video-wrapper iframe,\.fluid-width-video-wrapper object,\.fluid-width-video-wrapper embed{\
position:absolute;\
top:0;\
left:0;\
width:100%;\
height:100%;\} \</style>';ref.parentNode.insertBefore(div,ref);return this.each(function(){var container=$(this),resourceURL=(url!==null)?url:container.attr("href"),provider;if(embedAction){settings.onEmbed=embedAction} else{settings.onEmbed=function(oembedData){$.fn.oembed.insertCode(this,settings.embedMethod,oembedData)}}
if(resourceURL!==null){provider=$.fn.oembed.getOEmbedProvider(resourceURL);if(provider!==null){provider.params=getNormalizedParams(settings[provider.name])||{};provider.maxWidth=settings.maxWidth;provider.maxHeight=settings.maxHeight;embedCode(container,resourceURL,provider)} else{settings.onProviderNotFound.call(container,resourceURL)}}
return container})};var settings,activeProviders=[];$.fn.oembed.defaults={maxWidth:null,maxHeight:null,embedMethod:"replace",defaultOEmbedProvider:"plone",allowedProviders:null,disallowedProviders:null,customProviders:null,defaultProvider:null,greedy:true,onProviderNotFound: function(){},beforeEmbed: function(){},afterEmbed: function(){},onEmbed: function(){},onError: function(){},ajaxOptions:{}};
function getRequestUrl(container,externalUrl,provider){var url=provider.apiendpoint,qs="";var i;if(url.indexOf("?")<=0)
url=url+"?";else
url=url+"&";if(provider.maxWidth!==null&&provider.params.maxwidth===null)
provider.params.maxwidth=provider.maxWidth;if(provider.maxHeight!==null&&provider.params.maxheight===null)
provider.params.maxheight=provider.maxHeight;for(i in provider.params){if(provider.params[i]!==null)
qs+="&"+encodeURIComponent(i)+"="+provider.params[i]}
url+="format=json&url="+encodeURIComponent(externalUrl)+qs ;if(container[0].getAttribute("data-maxwidth")!==null)
url+="&maxwidth="+container[0].getAttribute("data-maxwidth");if(container[0].getAttribute("data-maxheight")!==null)
url+="&maxheight="+container[0].getAttribute("data-height");return url}
function embedCode(container,externalUrl,embedProvider){var requestUrl=getRequestUrl(container,externalUrl,embedProvider);var ajaxopts=$.extend({url:requestUrl,type:'get',dataType:'json',success: function(data){var oembedData=$.extend({},data);switch(oembedData.type){case "photo":console.log("photo");oembedData.code=$.fn.oembed.getPhotoCode(externalUrl,oembedData);break;case "video":oembedData.code=$.fn.oembed.getVideoCode(externalUrl,oembedData);break;case "rich":oembedData.code=$.fn.oembed.getRichCode(externalUrl,oembedData);break;default:oembedData.code=$.fn.oembed.getGenericCode(externalUrl,oembedData);break}
settings.beforeEmbed.call(container,oembedData);settings.onEmbed.call(container,oembedData);settings.afterEmbed.call(container,oembedData)},error: function(xhr,ajaxOptions,thrownError){console.log(xhr.responseText);console.log(thrownError)}},settings.ajaxOptions||{});$.ajax(ajaxopts)}
function initializeProviders(){activeProviders=[];var defaultProvider,restrictedProviders=[],i,provider;if(!isNullOrEmpty(settings.allowedProviders)){for(i=0;i<$.fn.oembed.providers.length;i++){if($.inArray($.fn.oembed.providers[i].name,settings.allowedProviders)>=0)
activeProviders.push($.fn.oembed.providers[i])}
settings.greedy=false} else{activeProviders=$.fn.oembed.providers}
if(!isNullOrEmpty(settings.disallowedProviders)){for(i=0;i<activeProviders.length;i++){if($.inArray(activeProviders[i].name,settings.disallowedProviders)<0)
restrictedProviders.push(activeProviders[i])}
activeProviders=restrictedProviders;settings.greedy=false}
if(!isNullOrEmpty(settings.customProviders)){$.each(settings.customProviders, function(n,customProvider){if(customProvider instanceof $.fn.oembed.OEmbedProvider){activeProviders.push(provider)} else{provider=new $.fn.oembed.OEmbedProvider();if(provider.fromJSON(customProvider))
activeProviders.push(provider)}})}
defaultProvider=getDefaultOEmbedProvider(settings.defaultOEmbedProvider);if(settings.greedy===true){activeProviders.push(defaultProvider)}
for(i=0;i<activeProviders.length;i++){if(activeProviders[i].apiendpoint===null)
activeProviders[i].apiendpoint=defaultProvider.apiendpoint}}
function getDefaultOEmbedProvider(defaultOEmbedProvider){var url="http://oohembed.com/oohembed/";if(defaultOEmbedProvider=="embed.ly")
url="http://api.embed.ly/v1/api/oembed?";if(defaultOEmbedProvider=="plone")
url=portal_url+'/@@proxy-oembed-provider';return new $.fn.oembed.OEmbedProvider(defaultOEmbedProvider,null,null,url,"callback")}
function getNormalizedParams(params){if(params===null)
return null;var key,normalizedParams={};for(key in params){if(key!==null)
normalizedParams[key.toLowerCase()]=params[key]}
return normalizedParams}
function isNullOrEmpty(object){if(typeof object=="undefined")
return true;if(object===null)
return true;if($.isArray(object)&&object.length===0)
return true;return false}
$.fn.oembed.insertCode=function(container,embedMethod,oembedData){var html=$(oembedData.code);if(oembedData===null)
return;switch(embedMethod){case "auto":if(container.attr("href")!==null){$.fn.oembed.insertCode(container,"append",oembedData)}
else{$.fn.oembed.insertCode(container,"replace",oembedData)}
break;case "replace":if(html.is("a")&&html.length==1){break}
if(container.hasClass("oembed-responsive")){if(html.is("iframe")||html.is("object")||html.is("embed")){var width=parseInt(html.attr("width"),null),height=parseInt(html.attr("height"),null);var ratio=height/width;container.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(ratio * 100)+"%");html.removeAttr('height').removeAttr('width');oembedData.code=html[0].outerHTML}
if(oembedData.type=="photo"){html.find('img').css('max-width',"100%");oembedData.code=html[0].outerHTML}}
container.replaceWith(oembedData.code);break;case "fill":container.html(oembedData.code);break;case "append":var oembedContainer=container.next();if(oembedContainer===null||!oembedContainer.hasClass("oembed-container")){oembedContainer=container.after('<div class="oembed-container"></div>').next(".oembed-container");if(oembedData!==null&&oembedData.provider_name!==null)
oembedContainer.toggleClass("oembed-container-"+oembedData.provider_name)}
oembedContainer.html(oembedData.code);break}};$.fn.oembed.getPhotoCode=function(url,oembedData){var code,alt=oembedData.title?oembedData.title:'';alt+=oembedData.author_name?' - '+oembedData.author_name:'';alt+=oembedData.provider_name?' - '+oembedData.provider_name:'';code='<div><a href="'+url+'" target=\'_blank\'><img src="'+oembedData.url+'" alt="'+alt+'"/></a></div>';if(oembedData.html)
code+="<div>"+oembedData.html+"</div>";return code};$.fn.oembed.getVideoCode=function(url,oembedData){var code=oembedData.html;return code};$.fn.oembed.getRichCode=function(url,oembedData){var code=oembedData.html;return code};$.fn.oembed.getGenericCode=function(url,oembedData){var title=(oembedData.title!==null)?oembedData.title:url,code='<a href="'+url+'">'+title+'</a>';if(oembedData.html)
code+="<div>"+oembedData.html+"</div>";return code};$.fn.oembed.isProviderAvailable=function(url){var provider=getOEmbedProvider(url);return(provider!==null)};$.fn.oembed.getOEmbedProvider=function(url){for(var i=0;i<activeProviders.length;i++){if(activeProviders[i].matches(url))
return activeProviders[i]}
return null};$.fn.oembed.OEmbedProvider=function(name,type,urlschemesarray,apiendpoint,callbackparameter){this.name=name;this.type=type;this.urlschemes=getUrlSchemes(urlschemesarray);this.apiendpoint=apiendpoint;this.callbackparameter=callbackparameter;this.maxWidth=500;this.maxHeight=400;var i,property,regExp;this.matches=function(externalUrl){if(typeof externalUrl==='undefined'){return false}
for(i=0;i<this.urlschemes.length;i++){regExp=new RegExp(this.urlschemes[i],"i");if(externalUrl.match(regExp)!==null)
return true}
return false};this.fromJSON=function(json){for(var property in json){if(property!="urlschemes")
this[property]=json[property];else
this[property]=getUrlSchemes(json[property])}
return true};
function getUrlSchemes(urls){if(isNullOrEmpty(urls))
return ["."];if($.isArray(urls))
return urls;return urls.split(";")}};$.fn.oembed.providers=[]})(jQuery);