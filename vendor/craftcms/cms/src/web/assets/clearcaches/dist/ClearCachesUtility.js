!function(){var a;a=jQuery,Craft.ClearCachesUtility=Garnish.Base.extend({init:function(t){for(var e=this,s=a("form.utility"),r=function(a){var t=s.eq(a),r=t.find("input[type=checkbox]"),i=t.find(".btn"),n=function(){r.filter(":checked").length?i.removeClass("disabled"):i.addClass("disabled")};r.on("change",n),n(),e.addListener(t,"submit",(function(a){a.preventDefault(),i.hasClass("disabled")||e.onSubmit(a)}))},i=0;i<s.length;i++)r(i)},onSubmit:function(t){var e,s,r=a(t.currentTarget),i=r.find("button.submit"),n=r.find(".utility-status");i.hasClass("disabled")||(r.data("progressBar")?((e=r.data("progressBar")).resetProgressBar(),s=r.data("allDone")):(e=new Craft.ProgressBar(n),r.data("progressBar",e)),e.$progressBar.removeClass("hidden"),e.$progressBar.velocity("stop").velocity({opacity:1},{complete:function(){var t=Garnish.getPostData(r),o=Craft.expandPostArray(t);Craft.sendActionRequest("POST",o.action,{data:o}).then((function(t){e.setProgressPercentage(100),setTimeout((function(){s||((s=a('<div class="alldone" data-icon="done" />').appendTo(n)).css("opacity",0),r.data("allDone",s)),e.$progressBar.velocity({opacity:0},{duration:"fast",complete:function(){s.velocity({opacity:1},{duration:"fast"}),i.removeClass("disabled"),i.trigger("focus")}})}),300)})).catch((function(a){var t=a.response;Craft.cp.displayError(t.data.message)}))}}),s&&s.css("opacity",0),i.addClass("disabled"),i.trigger("blur"))}})}();
//# sourceMappingURL=ClearCachesUtility.js.map