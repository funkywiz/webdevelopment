
/* - ++resource++ucam.falcon.js/datagridfield_fixup.js - */
// https://www.biology.cam.ac.uk/portal_javascripts/++resource++ucam.falcon.js/datagridfield_fixup.js?original=1
jQuery(function($){dataGridField2Functions.reindexRowOLD=dataGridField2Functions.reindexRow
dataGridField2Functions.reindexRow=function(tbody,row,newindex){dataGridField2Functions.reindexRowOLD(tbody,row,newindex);dataGridField2Functions.fixupRow(tbody,row,newindex)};dataGridField2Functions.fixupRow=function(tbody,row,newindex){var id=$(row).find('.contenttreeWindow').attr('id')
var suffix='-contenttree-window';if((id.length>suffix.length)&&id.substring(id.length-suffix.length)==suffix){id=id.substring(0,id.length-suffix.length)}
if($(row).find('#formfield-'+id+'-widgets-query').length>0){return}
var html=$(row).html()
html=html.replace(/form-widgets-links-\w+-/g,"form-widgets-links-"+newindex+"-")
html=html.replace(/form\.widgets\.links\.\w+\./g,"form.widgets.links."+newindex+".")
$(row).html(html)
name="form.widgets.links.0.widgets.content"
var base_href=$('base').attr('href');var path=document.location.pathname
var link=base_href+'/falcon.Linkbox/++widget++'+name;if((path.substring(path.length-5)=="/edit")||(path.substring(path.length-6)=="/edit/")){link=base_href+'/edit/++widget++'+name}
var rootURL="/";var body_classes=$('body').attr('class').split(' ');for(var i=0;i<body_classes.length;i++){if(body_classes[i].substring(0,5)=='site-'){rootURL='/'+body_classes[i].substring(5);break}}
$('#'+id+'-input-fields').
data('klass','contenttree-widget choice-field').
data('title','None').data('input_type','radio');$('#'+id+'-buttons-search').remove();$('#'+id+'-widgets-query').
autocomplete(link+'/@@autocomplete-search',{autoFill:true,minChars:2,max:10,mustMatch:true,matchContains:true,formatItem: function(row,idx,count,value){return row[1]+" ("+row[0]+")"},formatResult: function(row,idx,count){return ""}}).result(formwidget_autocomplete_ready);$('#'+id+'-widgets-query').each(function(){$(this).siblings('input.searchButton').remove()
$(document.createElement('input')).attr({'type':'button','value':'browse...'}).addClass('searchButton').click( function(){var parent=$(this).parents("*[id$='-autocomplete']")
var window=parent.siblings("*[id$='-contenttree-window']")
window.showDialog(link+'/@@contenttree-fetch',200);$('#'+parent.attr('id').
replace('autocomplete','contenttree')).contentTree({script:link+'/@@contenttree-fetch',folderEvent:'click',selectEvent:'click',expandSpeed:200,collapseSpeed:200,multiFolder:true,multiSelect:false,rootUrl:rootURL},
function(event,selected,data,title){})}).insertAfter($(this))});$('#'+id+'-contenttree-window').
find('.contentTreeAdd').unbind('click').
click(function(){$(this).contentTreeAdd()});$('#'+id+'-contenttree-window').
find('.contentTreeCancel').
unbind('click').click(function(){$(this).contentTreeCancel()});$('#'+id+'-widgets-query').after(" ")}});