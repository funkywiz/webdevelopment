
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++plone.formwidget.autocomplete/jquery.autocomplete.min.js - */
/*
 * Autocomplete - jQuery plugin 1.0.2
 *
 * Copyright (c) 2007 Dylan Verheul, Dan G. Switzer, Anjesh Tuladhar, Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.autocomplete.js 5747 2008-06-25 18:30:55Z joern.zaefferer $
 *
 */
;(function(e){e.fn.extend({autocomplete:function(t,n){var r=typeof t=="string";n=e.extend({},e.Autocompleter.defaults,{url:r?t:null,data:r?null:t,delay:r?e.Autocompleter.defaults.delay:10,max:n&&!n.scroll?10:150},n);n.highlight=n.highlight||function(e){return e};n.formatMatch=n.formatMatch||n.formatItem;return this.each(function(){new e.Autocompleter(this,n)})},result:function(e){return this.bind("result",e)},search:function(e){return this.trigger("search",[e])},flushCache:function(){return this.trigger("flushCache")},setOptions:function(e){return this.trigger("setOptions",[e])},unautocomplete:function(){return this.trigger("unautocomplete")}});e.Autocompleter=function(t,n){function d(){var e=c.selected();if(!e)return false;var t=e.result;o=t;if(n.multiple){var r=m(i.val());if(r.length>1){t=r.slice(0,r.length-1).join(n.multipleSeparator)+n.multipleSeparator+t}t+=n.multipleSeparator}i.val(t);w();i.trigger("result",[e.data,e.value]);return true}function v(e,t){if(f==r.DEL){c.hide();return}var s=i.val();if(!t&&s==o)return;o=s;s=g(s);if(s.length>=n.minChars){i.addClass(n.loadingClass);if(!n.matchCase)s=s.toLowerCase();S(s,E,w)}else{T();c.hide()}}function m(t){if(!t){return[""]}var r=t.split(n.multipleSeparator);var i=[];e.each(r,function(t,n){if(e.trim(n))i[t]=e.trim(n)});return i}function g(e){if(!n.multiple)return e;var t=m(e);return t[t.length-1]}function y(s,u){if(n.autoFill&&g(i.val()).toLowerCase()==s.toLowerCase()&&f!=r.BACKSPACE){i.val(i.val()+u.substring(g(o).length));e.Autocompleter.Selection(t,o.length,o.length+u.length)}}function b(){clearTimeout(s);s=setTimeout(w,200)}function w(){var r=c.visible();c.hide();clearTimeout(s);T();if(n.mustMatch){i.search(function(e){if(!e){if(n.multiple){var t=m(i.val()).slice(0,-1);i.val(t.join(n.multipleSeparator)+(t.length?n.multipleSeparator:""))}else i.val("")}})}if(r)e.Autocompleter.Selection(t,t.value.length,t.value.length)}function E(e,t){if(t&&t.length&&a){T();c.display(t,e);y(e,t[0].value);c.show()}else{w()}}function S(r,i,s){if(!n.matchCase)r=r.toLowerCase();var o=u.load(r);if(o&&o.length){i(r,o)}else if(typeof n.url=="string"&&n.url.length>0){var a={timestamp:+(new Date)};e.each(n.extraParams,function(e,t){a[e]=typeof t=="function"?t():t});e.ajax({mode:"abort",port:"autocomplete"+t.name,dataType:n.dataType,url:n.url,data:e.extend({q:g(r),limit:n.max},a),success:function(e){var t=n.parse&&n.parse(e)||x(e);u.add(r,t);i(r,t)}})}else{c.emptyList();s(r)}}function x(t){var r=[];var i=t.split("\n");for(var s=0;s<i.length;s++){var o=e.trim(i[s]);if(o){o=o.split("|");r[r.length]={data:o,value:o[0],result:n.formatResult&&n.formatResult(o,o[0])||o[0]}}}return r}function T(){i.removeClass(n.loadingClass)}var r={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var i=e(t).attr("autocomplete","off").addClass(n.inputClass);var s;var o="";var u=e.Autocompleter.Cache(n);var a=0;var f;var l={mouseDownOnSelect:false};var c=e.Autocompleter.Select(n,t,d,l);var h;var p=navigator.userAgent.indexOf("Opera")!=-1;p&&e(t.form).bind("submit.autocomplete",function(){if(h){h=false;return false}});i.bind((p?"keypress":"keydown")+".autocomplete",function(t){f=t.keyCode;switch(t.keyCode){case r.UP:t.preventDefault();if(c.visible()){c.prev()}else{v(0,true)}break;case r.DOWN:t.preventDefault();if(c.visible()){c.next()}else{v(0,true)}break;case r.PAGEUP:t.preventDefault();if(c.visible()){c.pageUp()}else{v(0,true)}break;case r.PAGEDOWN:t.preventDefault();if(c.visible()){c.pageDown()}else{v(0,true)}break;case n.multiple&&e.trim(n.multipleSeparator)==","&&r.COMMA:case r.TAB:case r.RETURN:if(d()){t.preventDefault();h=true;return false}break;case r.ESC:c.hide();break;default:clearTimeout(s);s=setTimeout(v,n.delay);break}}).focus(function(){a++}).blur(function(){a=0;if(!l.mouseDownOnSelect){b()}}).click(function(){if(a++>1&&!c.visible()){v(0,true)}}).bind("search",function(){function n(e,n){var r;if(n&&n.length){for(var s=0;s<n.length;s++){if(n[s].result.toLowerCase()==e.toLowerCase()){r=n[s];break}}}if(typeof t=="function")t(r);else i.trigger("result",r&&[r.data,r.value])}var t=arguments.length>1?arguments[1]:null;e.each(m(i.val()),function(e,t){S(t,n,n)})}).bind("flushCache",function(){u.flush()}).bind("setOptions",function(){e.extend(n,arguments[1]);if("data"in arguments[1])u.populate()}).bind("unautocomplete",function(){c.unbind();i.unbind();e(t.form).unbind(".autocomplete")});};e.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:10,max:100,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(e){return e[0]},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:", ",highlight:function(e,t){return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")},scroll:true,scrollHeight:180};e.Autocompleter.Cache=function(t){function i(e,n){if(!t.matchCase)e=e.toLowerCase();var r=e.indexOf(n);if(r==-1)return false;return r==0||t.matchContains}function s(e,i){if(r>t.cacheLength){u()}if(!n[e]){r++}n[e]=i}function o(){if(!t.data)return false;var n={},r=0;if(!t.url)t.cacheLength=1;n[""]=[];for(var i=0,o=t.data.length;i<o;i++){var u=t.data[i];u=typeof u=="string"?[u]:u;var a=t.formatMatch(u,i+1,t.data.length);if(a===false)continue;var f=a.charAt(0).toLowerCase();if(!n[f])n[f]=[];var l={value:a,data:u,result:t.formatResult&&t.formatResult(u)||a};n[f].push(l);if(r++<t.max){n[""].push(l)}}e.each(n,function(e,n){t.cacheLength++;s(e,n)})}function u(){n={};r=0}var n={};var r=0;setTimeout(o,25);return{flush:u,add:s,populate:o,load:function(s){if(!t.cacheLength||!r)return null;if(!t.url&&t.matchContains){var o=[];for(var u in n){if(u.length>0){var a=n[u];e.each(a,function(e,t){if(i(t.value,s)){o.push(t)}})}}return o}else if(n[s]){return n[s]}else if(t.matchSubset){for(var f=s.length-1;f>=t.minChars;f--){var a=n[s.substr(0,f)];if(a){var o=[];e.each(a,function(e,t){if(i(t.value,s)){o[o.length]=t}});return o}}}return null}}};e.Autocompleter.Select=function(t,n,r,i){function p(){if(!l)return;c=e("<div/>").hide().addClass(t.resultsClass).css("position","absolute").appendTo(document.body);h=e("<ul/>").appendTo(c).mouseover(function(t){if(d(t).nodeName&&d(t).nodeName.toUpperCase()=="LI"){u=e("li",h).removeClass(s.ACTIVE).index(d(t));e(d(t)).addClass(s.ACTIVE)}}).click(function(t){e(d(t)).addClass(s.ACTIVE);r();n.focus();return false}).mousedown(function(){i.mouseDownOnSelect=true}).mouseup(function(){i.mouseDownOnSelect=false});if(t.width>0)c.css("width",t.width);l=false}function d(e){var t=e.target;while(t&&t.tagName!="LI")t=t.parentNode;if(!t)return[];return t}function v(e){o.slice(u,u+1).removeClass(s.ACTIVE);m(e);var n=o.slice(u,u+1).addClass(s.ACTIVE);if(t.scroll){var r=0;o.slice(0,u).each(function(){r+=this.offsetHeight});if(r+n[0].offsetHeight-h.scrollTop()>h[0].clientHeight){h.scrollTop(r+n[0].offsetHeight-h.innerHeight())}else if(r<h.scrollTop()){h.scrollTop(r)}}}function m(e){u+=e;if(u<0){u=o.size()-1}else if(u>=o.size()){u=0}}function g(e){return t.max&&t.max<e?t.max:e}function y(){h.empty();var n=g(a.length);for(var r=0;r<n;r++){if(!a[r])continue;var i=t.formatItem(a[r].data,r+1,n,a[r].value,f);if(i===false)continue;var l=e("<li/>").html(t.highlight(i,f)).addClass(r%2==0?"ac_even":"ac_odd").appendTo(h)[0];e.data(l,"ac_data",a[r])}o=h.find("li");if(t.selectFirst){o.slice(0,1).addClass(s.ACTIVE);u=0}if(e.fn.bgiframe)h.bgiframe()}var s={ACTIVE:"ac_over"};var o,u=-1,a,f="",l=true,c,h;return{display:function(e,t){p();a=e;f=t;y()},next:function(){v(1)},prev:function(){v(-1)},pageUp:function(){if(u!=0&&u-8<0){v(-u)}else{v(-8)}},pageDown:function(){if(u!=o.size()-1&&u+8>o.size()){v(o.size()-1-u)}else{v(8)}},hide:function(){c&&c.hide();o&&o.removeClass(s.ACTIVE);u=-1},visible:function(){return c&&c.is(":visible")},current:function(){return this.visible()&&(o.filter("."+s.ACTIVE)[0]||t.selectFirst&&o[0])},show:function(){var r=e(n).offset();c.css({width:typeof t.width=="string"||t.width>0?t.width:e(n).width(),top:r.top+n.offsetHeight,left:r.left}).show();if(t.scroll){h.scrollTop(0);h.css({maxHeight:t.scrollHeight,overflow:"auto"});if(navigator.userAgent.indexOf("MSIE")!=1&&typeof document.body.style.maxHeight==="undefined"){var i=0;o.each(function(){i+=this.offsetHeight});var s=i>t.scrollHeight;h.css("height",s?t.scrollHeight:i);if(!s){o.width(h.width()-parseInt(o.css("padding-left"))-parseInt(o.css("padding-right")))}}}},selected:function(){var t=o&&o.filter("."+s.ACTIVE).removeClass(s.ACTIVE);return t&&t.length&&e.data(t[0],"ac_data")},emptyList:function(){h&&h.empty()},unbind:function(){c&&c.remove()}}};e.Autocompleter.Selection=function(e,t,n){if(e.createTextRange){var r=e.createTextRange();r.collapse(true);r.moveStart("character",t);r.moveEnd("character",n);r.select()}else if(e.setSelectionRange){e.setSelectionRange(t,n)}else{if(e.selectionStart){e.selectionStart=t;e.selectionEnd=n}}e.focus()}})(jQuery)


/* - ++resource++plone.formwidget.autocomplete/formwidget-autocomplete.js - */
// https://www.biology.cam.ac.uk/portal_javascripts/++resource++plone.formwidget.autocomplete/formwidget-autocomplete.js?original=1
function formwidget_autocomplete_ready(event,data,formatted){(function($){var input_box=$(event.target);formwidget_autocomplete_new_value(input_box,data[0],data[1])}(jQuery))}
function formwidget_autocomplete_new_value(input_box,value,label){(function($){var base_id=input_box[0].id.replace(/-widgets-query$/,"");var base_name=input_box[0].name.replace(/\.widgets\.query$/,"");var widget_base=$('#'+base_id+"-input-fields");var all_fields=widget_base.find('input:radio, input:checkbox');input_box.val("");widget_base.find('input:radio').prop('checked',false);var selected_field=widget_base.find('input[value="'+value+'"]');if(selected_field.length){selected_field.each(function(){this.checked=true});return}
widget_base,base_name,base_id
var idx=all_fields.length;var klass=widget_base.data('klass');var title=widget_base.data('title');var type=widget_base.data('input_type');var multiple=widget_base.data('multiple');var span=$('<span/>').attr("id",base_id+"-"+idx+"-wrapper").attr("class","option");span.append($("<label/>").attr("for",base_id+"-"+idx).append($('<input type="'+type+'"'+' name="'+base_name+(multiple?':list"':'"')+' checked="checked" />').attr("id",base_id+"-"+idx).attr("title",title).attr("value",value).addClass(klass)).append(" ").append($("<span>").attr("class","label").text(label)));widget_base.append(span)}(jQuery))}
function formwidget_autocomplete_parser(formatResult,fieldNum){return function(data){var parsed=[];if(data!==undefined&&data.split){var rows=data.split("\n");for(var i=0;i<rows.length;i++){var row=$.trim(rows[i]);if(row){row=row.split("|");parsed[parsed.length]={data:row,value:row[fieldNum],result:formatResult(row,row[fieldNum])}}}}
return parsed}}


/* - ++resource++plone.formwidget.contenttree/contenttree.js - */
// This is based on jQueryFileTree by   Cory S.N. LaViska
if(jQuery) (function($){

    $.extend($.fn, {
        showDialog: function() {
            $(document.body)
                .append($(document.createElement("div"))
                .addClass("contenttreeWindowBlocker"));
            // store old parent element
            this[0].oldparent = $(this).parent()[0];
            $(".contenttreeWindowBlocker").before(this);
            $(this).show();
            $(this).width($(window).width() * 0.75);
            $(this).height($(window).height() * 0.75);
            $(this).css({
                'left': $(window).width() * 0.125,
                'top': $(window).height() * 0.125
            });
        },

        contentTreeAdd: function() {
            var contenttree_window = (this).parents(".contenttreeWindow");
            var input_box = $('#'+ contenttree_window[0].id
                .replace(/-contenttree-window$/,"-widgets-query"));
            contenttree_window.find('.navTreeCurrentItem > a').each(function () {
                formwidget_autocomplete_new_value(
                    input_box,
                    $(this).attr('href'),
                    $.trim($(this).text())
                );
            });
            $(this).contentTreeCancel();
            input_box.parents('.datagridwidget-cell').triggerHandler('change');
        },

        contentTreeCancel: function() {
            $(".contenttreeWindowBlocker").remove();
            var popup = $(this).parents(".contenttreeWindow");
            popup.hide();
            $(popup[0].oldparent).append(popup);
            popup[0].oldparent = null;
        },

        contentTree: function(o, h) {
            // Defaults
            if (!o) {
                var o = {};
            }
            if (o.script == undefined) {
                o.script = 'fetch';
            }

            if (o.folderEvent == undefined) {
                o.folderEvent = 'click';
            }
            if (o.selectEvent == undefined) {
                o.selectEvent = 'click';
            }

            if (o.expandSpeed == undefined) {
                o.expandSpeed = -1;
            }
            if (o.collapseSpeed == undefined) {
                o.collapseSpeed = -1;
            }

            if (o.multiFolder == undefined) {
                o.multiFolder = true;
            }
            if (o.multiSelect == undefined) {
                o.multiSelect = false;
            }

            function loadTree(c, t, r) {
                $(c).addClass('wait');
                $.post(o.script, {href: t, rel: r}, function(data) {
                    $(c).removeClass('wait').append(data);
                    $(c).find('ul:hidden').slideDown({
                        duration: o.expandSpeed
                    });
                    bindTree(c);
                });
            }

            function handleFolderEvent() {
                var li = $(this).parent();
                if (li.hasClass('collapsed')) {
                    if (!o.multiFolder) {
                        li.parent().find('ul:visible').slideUp({
                            duration: o.collapseSpeed
                        });
                        li.parent().find('li.navTreeFolderish')
                            .removeClass('expanded')
                            .addClass('collapsed');
                    }

                    if (li.find('ul').length == 0)
                        loadTree(
                            li,
                            escape($(this).attr('href')),
                            escape($(this).attr('rel'))
                        );
                    else
                        li.find('ul:hidden').slideDown({
                            duration: o.expandSpeed
                        });
                    li.removeClass('collapsed').addClass('expanded');
                } else {
                    li.find('ul').slideUp({
                        duration: o.collapseSpeed
                    });
                    li.removeClass('expanded').addClass('collapsed');
                }
                return false;
            }

            function handleSelectEvent(event) {
                var li = $(this).parent();
                var selected = true;
                var root = $(this).parents('ul.navTree');
                if (!li.hasClass('navTreeCurrentItem')) {
                    var multi_key = (
                        (event.ctrlKey) ||
                        (navigator.userAgent.toLowerCase()
                            .indexOf('macintosh') != -1 && event.metaKey));

                    if (!o.multiSelect || !multi_key) {
                        root.find('li.navTreeCurrentItem')
                            .removeClass('navTreeCurrentItem');
                    }

                    li.addClass('navTreeCurrentItem');
                    selected = true;
                } else {
                    li.removeClass('navTreeCurrentItem');
                    selected = false;
                }

                h(event, true, $(this).attr('href'), $.trim($(this).text()));
            }

            function bindTree(t) {
                $(t).find('li.navTreeFolderish a').unbind(o.folderEvent);
                $(t).find('li.selectable a').unbind(o.selectEvent);
                $(t).find('li a').bind('click', function() {
                    return false;
                });
                $(t).find('li.navTreeFolderish a').bind(
                    o.folderEvent,
                    handleFolderEvent
                );
                $(t).find('li.selectable a').bind(
                    o.selectEvent,
                    handleSelectEvent
                );
            }

            if ($(this).children('ul.navTree').length <= 0) {
                $(this).each(function() {
                    loadTree(this, o.rootUrl, 0);
                });
            }

        }
    });

})(jQuery);


/* - ++resource++collective.z3cform.datagridfield/datagridfield.js - */
/*global window, console*/

jQuery(function($) {

    // No globals, dude!
    "use strict";

    // Local singleton object containing our functions
    var dataGridField2Functions = {};

    dataGridField2Functions.getInputOrSelect = function(node) {
        /* Get the (first) input or select form element under the given node */

        var inputs = node.getElementsByTagName("input");
        if(inputs.length > 0) {
            return inputs[0];
        }

        var selects = node.getElementsByTagName("select");
        if(selects.length > 0) {
            return selects[0];
        }

        return null;
    };

    dataGridField2Functions.getWidgetRows = function(currnode) {
        /* Return primary nodes with class of datagridwidget-row,
           they can be any tag: tr, div, etc. */
        var tbody = this.getParentByClass(currnode, "datagridwidget-body");
        return this.getRows(tbody);
    };

    dataGridField2Functions.getRows = function(tbody) {
        /* Return primary nodes with class of datagridwidget-row,
           they can be any tag: tr, div, etc. */

        var rows = $(tbody).children('.datagridwidget-row');

        return rows;
    };


    /**
     * Get all visible rows of DGF
     *
     * Incl. normal rows + AA row
     */
    dataGridField2Functions.getVisibleRows = function(tbody) {

        var rows = this.getRows(tbody);
        // We rape jQuery.filter here, because of
        // IE8 Array.filter http://kangax.github.com/es5-compat-table/

        // Consider "real" rows only
        var filteredRows = $(rows).filter(function() {
            var $tr = $(this);
            return !$tr.hasClass("datagridwidget-empty-row");
        });

        return filteredRows;
    };

    /**
     * Handle auto insert events by auto append
     */
    dataGridField2Functions.onInsert = function(e) {
        var currnode = e.currentTarget;
        this.autoInsertRow(currnode);
    },

    /**
     * Add a new row when changing the last row
     *
     * @param {Boolean} ensureMinimumRows we insert a special minimum row so the widget is not empty
     */
    dataGridField2Functions.autoInsertRow = function(currnode, ensureMinimumRows) {

        // fetch required data structure
        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));
        var tbody = dataGridField2Functions.getParentByClass(currnode, "datagridwidget-body");
        var thisRow = dataGridField2Functions.getParentRow(currnode); // The new row we are working on
        var $thisRow = $(thisRow);

        var autoAppendMode = $(tbody).data("auto-append");

        if($thisRow.hasClass("minimum-row")) {
            // The change event was not triggered on real AA row,
            // but on a minimum ensured row (row 0).
            // 1. Don't add new row
            // 2. Make widget to "normal" state now as the user has edited the empty row so we assume it's a real row
            this.supressEnsureMinimum(tbody);
            return;
        }

        // Remove the auto-append functionality from the all rows in this widget
        var autoAppendHandlers = dgf.find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell');
        autoAppendHandlers.unbind('change.dgf');
        $thisRow.removeClass('auto-append');

        // Create a new row
        var newtr = dataGridField2Functions.createNewRow(thisRow), $newtr = $(newtr);
        // Add auto-append functionality to our new row
        $newtr.addClass('auto-append');

        /* Put new row to DOM tree after our current row.  Do this before
         * reindexing to ensure that any Javascript we insert that depends on
         * DOM element IDs (such as plone.formwidget.autocomplete) will
         * pick up this row before any IDs get changed.  At this point,
         * we techinically have duplicate TT IDs in our document
         * (one for this new row, one for the hidden row), but jQuery
         * selectors will pick up elements in this new row first.
         */

        dgf.trigger("beforeaddrowauto", [dgf, newtr]);

        if(ensureMinimumRows) {
            // Add a special class so we can later deal with it
            $newtr.addClass("minimum-row");
            $newtr.insertBefore(thisRow);
        } else {
            $newtr.insertAfter(thisRow);
        }

        // Re-enable auto-append change handler feature on the new auto-appended row
        $(dgf).find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell').bind("change.dgf", $.proxy(dataGridField2Functions.onInsert, dataGridField2Functions));

        dataGridField2Functions.reindexRow(tbody, newtr, 'AA');

        // Update order index to give rows correct values
        dataGridField2Functions.updateOrderIndex(tbody, true, ensureMinimumRows);

        dgf.trigger("afteraddrowauto", [dgf, newtr]);
    };

    /**
     * Creates a new row after the the target row.
     *
     * @param {Object} currnode DOM <tr>
     */
    dataGridField2Functions.addRowAfter = function(currnode) {

        // fetch required data structure
        var tbody = this.getParentByClass(currnode, "datagridwidget-body");
        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));

        var thisRow = this.getParentRow(currnode);

        var newtr = this.createNewRow(thisRow);

        dgf.trigger("beforeaddrow", [dgf, newtr]);

        var filteredRows = this.getVisibleRows(currnode);

        // If using auto-append we add the "real" row before AA
        // We have a special case when there is only one visible in the gid
        if (thisRow.hasClass('auto-append') && !thisRow.hasClass("minimum-row")) {
            $(newtr).insertBefore(thisRow);
        } else {
            $(newtr).insertAfter(thisRow);
        }

        // Ensure minimum special behavior is no longer needed as we have now at least 2 rows
        if(thisRow.hasClass("minimum-row")) {
            this.supressEnsureMinimum(tbody);
        }

        // update orderindex hidden fields
        this.updateOrderIndex(tbody, true);

        dgf.trigger("afteraddrow", [dgf, newtr]);

    };

    /**
     * Creates a new row.
     *
     * The row is not inserted to the table, but is returned.
     *
     * @param {Object} <tr> or <tbody> DOM node in a table where we'll be adding the new row
     */
    dataGridField2Functions.createNewRow = function(node) {

        var tbody = this.getParentByClass(node, "datagridwidget-body");

        // hidden template row
        var emptyRow = $(tbody).children('.datagridwidget-empty-row').first();

        if(emptyRow.size() === 0) {
            // Ghetto assert()
            throw new Error("Could not locate empty template row in DGF");
        }

        var new_row = emptyRow.clone(true).removeClass('datagridwidget-empty-row');

        return new_row;
    };


    dataGridField2Functions.removeFieldRow = function(node) {
        /* Remove the row in which the given node is found */
        var tbody = this.getParentByClass(node, "datagridwidget-body");
        var row = this.getParentRow(node);
        $(row).remove();
        // ensure minimum rows in non-auto-append mode, reindex if no
        // minimal row was added, otherwise reindexing is done by ensureMinimumRows
        if ($(tbody).data("auto-append") || !this.ensureMinimumRows(tbody)) {
            this.updateOrderIndex(tbody, false);
        }
    };

    dataGridField2Functions.moveRow = function(currnode, direction){
        /* Move the given row down one */
        var nextRow;

        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));

        var tbody = this.getParentByClass(currnode, "datagridwidget-body");

        var rows = this.getWidgetRows(currnode);

        var row = this.getParentRow(currnode);
        if(!row) {
            throw new Error("Couldn't find DataGridWidget row");
        }

        var idx = null;

        // We can't use nextSibling because of blank text nodes in some browsers
        // Need to find the index of the row

        rows.each(function (i) {
            if (this == row[0]) {
                idx = i;
            }
        });

        // Abort if the current row wasn't found
        if (idx == null)
            return;


        // The up and down should cycle through the rows, excluding the auto-append and
        // empty-row rows.
        var validrows = 0;
        rows.each(function (i) {
            if (!$(this).hasClass('datagridwidget-empty-row') && !$(this).hasClass('auto-append')) {
                validrows+=1;
            }
        });

        if (idx+1 == validrows) {
            if (direction == "down") {
                this.moveRowToTop(row);
            } else {
                nextRow = rows[idx-1];
                this.shiftRow(nextRow, row);
            }

        } else if (idx === 0) {
            if (direction == "up") {
                this.moveRowToBottom(row);
            } else {
                nextRow = rows[parseInt(idx+1, 10)];
                this.shiftRow(row, nextRow);
            }

        } else {
            if (direction == "up") {
                nextRow = rows[idx-1];
                this.shiftRow(nextRow, row);
            } else {
                nextRow = rows[parseInt(idx+1, 10)];
                this.shiftRow(row, nextRow);
            }
        }

        this.updateOrderIndex(tbody);

        dgf.trigger("aftermoverow", [dgf, row]);
    };

    dataGridField2Functions.moveRowDown = function(currnode){
        this.moveRow(currnode, "down");
    };

    dataGridField2Functions.moveRowUp = function(currnode){
        this.moveRow(currnode, "up");
    };

    dataGridField2Functions.shiftRow = function(bottom, top){
        /* Put node top before node bottom */
        $(top).insertBefore(bottom);
    };

    dataGridField2Functions.moveRowToTop = function (row) {
        var rows = this.getWidgetRows(row);
        $(row).insertBefore(rows[0]);
    };

    dataGridField2Functions.moveRowToBottom = function (row) {
        var rows = this.getWidgetRows(row);

        // make sure we insert the directly above any auto appended rows
        var insert_after = 0;
        rows.each(function (i) {
            if (!$(this).hasClass('datagridwidget-empty-row')  && !$(this).hasClass('auto-append')) {
                insert_after = i;
            }
        });
        $(row).insertAfter(rows[insert_after]);
    };

    /**
     * Fixup all attributes on all child elements that contain
     * the row index. The following attributes are scanned:
     * - name
     * - id
     * - for
     * - href
     * - data-fieldname
     *
     * On the server side, the DGF logic will rebuild rows based
     * on this information.
     *
     * If indexing for some reasons fails you'll get double
     * input values and Zope converts inputs to list, failing
     * in funny ways.
     *
     * @param  {DOM} tbody
     * @param  {DOM} row
     * @param  {Number} newindex
     */
    dataGridField2Functions.reindexRow = function (tbody, row, newindex) {
        var name_prefix = $(tbody).data('name_prefix') + '.';
        var id_prefix = $(tbody).data('id_prefix') + '-';
        var $row = $(row);
        var oldindex = $row.data('index');

        function replaceIndex(el, attr, prefix) {
            if (el.attr(attr)) {
                var val = el.attr(attr);
                var pattern = new RegExp('^' + prefix + oldindex);
                el.attr(attr, val.replace(pattern, prefix + newindex));
                if (attr.indexOf('data-') === 0) {
                    var key = attr.substr(5);
                    var data = el.data(key);
                    el.data(key, data.replace(pattern, prefix + newindex));
                }
            }
        }

        // update index data
        $row.data('index', newindex);
        $row.attr('data-index', newindex);

        $row.find('[id^="formfield-' + id_prefix + '"]').each(function(i, el) {
            replaceIndex($(el), 'id', 'formfield-' + id_prefix);
        });

        $row.find('[name^="' + name_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'name', name_prefix);
        });

        $row.find('[id^="' + id_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'id', id_prefix);
        });

        $row.find('[for^="' + id_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'for', id_prefix);
        });

        $row.find('[href*="#' + id_prefix +'"]').each(function(i, el){
            replaceIndex($(el), 'href', '#' + id_prefix);
        });

        $row.find('[data-fieldname^="' + name_prefix + '"]').each(function(i, el) {
            replaceIndex($(el), 'data-fieldname', name_prefix);
        });
    };

    /**
     * Stop ensure miminum special behavior.
     *
     * The caller is responsible to check there was one and only one minimum-row in the table.
     *
     * Call when data is edited for the first time or a row added.
     */
    dataGridField2Functions.supressEnsureMinimum = function(tbody) {

        var autoAppendHandlers = $(tbody).find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell');
        autoAppendHandlers.unbind('change.dgf');

        tbody.children().removeClass("auto-append");
        tbody.children().removeClass("minimum-row");


        dataGridField2Functions.updateOrderIndex(tbody, true, false);
    };

    /**
     * Update all row indexes on a DGF table.
     *
     * Each <tr> and input widget has recalculated row index number in its name,
     * so that the server can then parsit the submitted data in the correct order.
     *
     * @param  {Object} tbody     DOM of DGF <tbody>
     * @param  {Boolean} backwards iterate rows backwards
     * @param  {Boolean} ensureMinimumRows We have inserted a special auto-append row
     */
    dataGridField2Functions.updateOrderIndex = function (tbody, backwards, ensureMinimumRows) {

        var $tbody = $(tbody);
        var name_prefix = $tbody.attr('data-name_prefix') + '.';
        var i, idx, row, $row, $nextRow;

        // Was this auto-append table
        var autoAppend = false;

        var rows = this.getRows(tbody);
        for (i=0; i<rows.length; i++) {
            idx = backwards ? rows.length-i-1 : i;
            row = rows[idx], $row = $(row);

            if ($row.hasClass('datagridwidget-empty-row')) {
                continue;
            }

            if($row.hasClass('auto-append')) {
                autoAppend = true;
            }

            this.reindexRow(tbody, row, idx);
        }

        // Handle a special case where
        // 1. Widget is empty
        // 2. We don't have AA mode turned on
        // 3. We need to have minimum editable row count of 1
        if(ensureMinimumRows) {
            this.reindexRow(tbody, rows[0], "AA");
            autoAppend = true;
        }

        // Add a special first and class row classes
        // to hide manipulation handles
        // AA handling is different once again
        var visibleRows = this.getVisibleRows(tbody);

        for (i=0; i<visibleRows.length; i++) {
            row = visibleRows[i], $row = $(row);

            if(i<visibleRows.length-2) {
                $nextRow = $(visibleRows[i+1]);
            }

            if(i===0) {
                $row.addClass("datagridfield-first-filled-row");
            } else {
                $row.removeClass("datagridfield-first-filled-row");
            }

            // Last visible before AA
            if(autoAppend) {
                if($nextRow && $nextRow.hasClass("auto-append")) {
                    $row.addClass("datagridfield-last-filled-row");
                } else {
                    $row.removeClass("datagridfield-last-filled-row");
                }
            } else {
                if(i==visibleRows.length-1) {
                    $row.addClass("datagridfield-last-filled-row");
                } else {
                    $row.removeClass("datagridfield-last-filled-row");
                }
            }
        }


        // Set total visible row counts and such and hint CSS
        var vis = this.getVisibleRows(tbody).length;
        $tbody.attr("data-count", this.getRows(tbody).length);
        $tbody.attr("data-visible-count", this.getVisibleRows(tbody).length);
        $tbody.attr("data-many-rows", vis >= 2 ? "true" : "false");

        $(document).find('input[name="' + name_prefix + 'count"]').each(function(){
            // do not include the TT and the AA rows in the count
            var count = rows.length;
            if ($(rows[count-1]).hasClass('datagridwidget-empty-row')) {
                count--;
            }
            if ($(rows[count-1]).hasClass('auto-append')) {
                count--;
            }
            this.value = count;
        });
    };

    dataGridField2Functions.getParentElement = function(currnode, tagname) {
        /* Find the first parent node with the given tag name */

        tagname = tagname.toUpperCase();
        var parent = currnode.parentNode;

        while(parent.tagName.toUpperCase() != tagname) {
            parent = parent.parentNode;
            // Next line is a safety belt
            if(parent.tagName.toUpperCase() == "BODY")
                return null;
        }

        return parent;
    };

    dataGridField2Functions.getParentRow = function (node) {
        return this.getParentByClass(node, 'datagridwidget-row');
    };

    dataGridField2Functions.getParentByClass = function(node, klass) {
        var parent = $(node).closest("." + klass);

        if (parent.length) {
            return parent;
        }

        return null;
    };

    /**
     * Find the first parent node with the given id
     *
     * Id is partially matched: the beginning of
     * an element id matches parameter id string.
     *
     * @param  {DOM} currnode Node where ascending in DOM tree beings
     * @param  {String} id       Id string to look for.
     * @return {DOM} Found node or null
     */
    dataGridField2Functions.getParentElementById = function(currnode, id) {
        /*
        */

        id = id.toLowerCase();
        var parent = currnode.parentNode;

        while(true) {

            var parentId = parent.getAttribute("id");
            if(parentId) {
                 if(parentId.toLowerCase().substring(0, id.length) == id) break;
            }

            parent = parent.parentNode;
            // Next line is a safety belt
            if(parent.tagName.toUpperCase() == "BODY")
                return null;
        }

        return parent;
    };


    /**
     * Make sure there is at least one visible row available in DGF
     * to edit in all the time.
     *
     * We need a lot of special logic for the case where
     * we have empty datagridfield and need to have one OPTIONAL
     * row present there for the editing when the user opens
     * the form for the first time.
     *
     * There are cases where one doesn't want to have the count of DGF
     * rows to go down to zero. Otherwise there no insert handle left
     * on the edit mode and the user cannot add any more rows.
     *
     * One should case is when
     *
     * - DGF is empty on new form
     *
     * - Auto append is set to false (initial row is not visible)
     *
     * We fix this situation by checking the available rows
     * and generating one empty AA row if needed.
     *
     * ... or simply when the user removes all the rows
     *
     * @param {Object} tbody DOM object of <tbody>
     */
    dataGridField2Functions.ensureMinimumRows = function(tbody) {
        var rows = this.getRows(tbody);
        var filteredRows = this.getVisibleRows(tbody);
        var self = this;

        // Rows = 0 -> make one AA row available
        if(filteredRows.length === 0) {
            // XXX: make the function call signatures more sane
            var child = rows[0];
            this.autoInsertRow(child, true);
            return true;
        }
        return false;
    },


    /**
     * When DOM model is ready execute this actions to wire up page logic.
     */
    dataGridField2Functions.init = function() {

        // Reindex all rows to get proper row classes on them
        $(".datagridwidget-body").each(function() {

            // Initialize widget data on <tbody>
            // We keep some mode attributes around
            var $this = $(this);
            var aa;

            // Check if this widget is in auto-append mode
            // and store for later usage
            aa = $this.children(".auto-append").size() > 0;
            $this.data("auto-append", aa);

            // Hint CSS
            if(aa) {
                $this.addClass("datagridwidget-body-auto-append");
            } else {
                $this.addClass("datagridwidget-body-non-auto-append");
            }

            dataGridField2Functions.updateOrderIndex(this, false);

            if(!aa) {
                dataGridField2Functions.ensureMinimumRows(this);
            }
        });

        // Bind the handlers to the auto append rows
        // Use namespaced jQuery events to avoid unbind() conflicts later on
        $('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell').bind("change.dgf", $.proxy(dataGridField2Functions.onInsert, dataGridField2Functions));

        $(document).trigger("afterdatagridfieldinit");
    };


    $(document).ready(dataGridField2Functions.init);

    // Export module for customizers to mess around
    window.dataGridField2Functions = dataGridField2Functions;


});


/* - ++resource++tcp_scripts/cookiepolicy.js - */
function hideCookiePolicy() {
    jQuery("#viewlet-cookiepolicy").each(function() {
        jQuery(this).slideUp(500);
    });
}
function displayCookiePolicy() {
    jQuery("#viewlet-cookiepolicy").each(function() {
        jQuery(this).slideDown(500);
    });
}
jQuery(function() {
    var btn = document.getElementById("tlspu_cookiepolicy_button")
    var chk = document.getElementById("tlspu_cookiepolicy_agreed")

    if (btn == null) {
        return;
    }

    btn.onclick = function() {
        acceptCookiePolicy();
        return false;
    };
    chk.onclick = function() {
        if (chk.checked) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    };
    function acceptCookiePolicy() {
        var date = new Date();
        date.setTime(date.getTime()+(90*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
        document.cookie = "cookie-policy=accepted"+expires+"; path=/";
        hideCookiePolicy();
        return false;
    }
    function confirmAcceptCookiePolicy()
    {   
        if (document.getElementById("cookie-agreed").checked) {
            acceptCookiePolicy();
        } else {
            // This should never happen unless users are removing the disabled flag themselves.
            alert("You must confirm that you have read and understood this message before dismissing it."); 
        }
    }
    
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf("cookie-policy=") == 0) {
            acceptCookiePolicy();
            return;
        }
    }
    setTimeout(displayCookiePolicy, 1000);
});
