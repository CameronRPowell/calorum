(function(n) {
    function t(r) {
        if (i[r])
            return i[r].exports;
        var u = i[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return n[r].call(u.exports, u, u.exports, t),
        u.l = !0,
        u.exports
    }
    var i = {};
    return t.m = n,
    t.c = i,
    t.d = function(n, i, r) {
        t.o(n, i) || Object.defineProperty(n, i, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }
    ,
    t.n = function(n) {
        var i = n && n.__esModule ? function() {
            return n["default"]
        }
        : function() {
            return n
        }
        ;
        return t.d(i, "a", i),
        i
    }
    ,
    t.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }
    ,
    t.p = "",
    t(t.s = 0)
}
)([function(n, t, i) {
    "use strict";
    i(1);
    ["AccountMerge", "Achievement", "AdminPanel", "Advertising", "Announcement", "Attachment", "Auth", "Avatar", "BetterTimeSpanField", "Billing", "BulkModeration", "BunnyEars", "CMS", "Collapse", "Comment", "Constants", "Core", "Countdown", "CP", "CPAdvertising", "CPBan", "CPCaching", "CPForumThreadPrefix", "CPNotifications", "CPSiteSettings", "CPSkinManager", "CPUserProfileTitle", "DateTimeField", "DayTimeSelector", "Dice", "Expandable", "ExportImportSettings", "Favorites", "Feedback", "FieldLists", "Filters", "flot", "Forms", "Forum", "ForumFilters", "ForumManager", "ForumThreadForm", "Gallery", "ImageManager", "ImageTagging", "Infractions", "LegacyPayment", "Listing", "Localization", "LocalizationEditor", "ViewState", "Markup", "MarkupEditor", "Modal", "ModelMultipleSymbolicField", "ModPositions", "MultiFileUpload", "Navigation", "NavigationEditor", "NavigationItem", "NavigationManager", "NewContent", "NiceDates", "Notifications", "PageBlock", "PageRegion", "PageStructureManager", "Permissions", "Poll", "PollingThrottle", "PopOut", "PostWidget", "ProfileFields", "QueryParser", "Rating", "Reports", "Roles", "Routes", "Shoutbox", "Smilies", "Social", "Social_Facebook", "Social_Twitter", "SourcePoint", "StickyElement", "Tabs", "Tags", "TemplateAndSkin", "Throttle", "TinyMCE", "UI", "User", "UserContentManager", "UserManagement", "UserProfile", "UserSurrogateAvatars", "UserTitles", "Utils", "VideoEmbed", "VoiceWidget", "Warning", "WarningNotification", "Widget", "WidgetSettings", "Analytics", "Burger", "Footer", "Tidbit", "PrivateMessage", "Table", "CPJobs", "Mobile", "MurmurHash2", "NavigationLists", "HomePage", "ResponsiveUtility", "MobileAdvertising", "Device", "ViewTracking"].forEach(function(n) {
        i(2)("./Cobalt." + n + ".js")
    });
    i(131)
}
, function() {
    "use strict";
    (function(n, t, i) {
        var f = []
          , e = []
          , o = !1
          , s = !1
          , u = !0
          , r = {
            load: function() {
                var t, e;
                if (!o) {
                    for (r.startTime = new Date,
                    o = !0,
                    t = f,
                    f = null,
                    t && u && console.debug("Initializing " + t.length + " explicit functions (bad)"),
                    e = 0; e < t.length; e++)
                        try {
                            t[e]()
                        } catch (h) {
                            r.Constants.IsDevelopment && (console.log(t[e]),
                            n.log("Error: " + h),
                            h && h.stack && n.log(h.stack))
                        }
                    s = !0;
                    r.triggerHtmlInsert(n(document));
                    window.console && r.startTime !== i && u && console.info("Cobalt initialized in " + (new Date - r.startTime) + "ms")
                }
            },
            initialize: function(t) {
                var h, o, f, s, l;
                console.log("Initializing..");
                h = [];
                n.each(t, function(n, t) {
                    t.dependency != null && t.dependency.priority != null && t.dependency.priority < t.priority && (t.priority = t.dependency.priority);
                    r.buildDependencyTree(t, h)
                });
                var e = {}
                  , i = []
                  , c = t.concat(h);
                for (o = 0; o < c.length; o++)
                    f = c[o],
                    s = e[f.name],
                    (s == null || s.priority == null || s.priority > f.priority) && (e[f.name] = f);
                for (l in e)
                    i.push(e[l]);
                i.sortBy(function(n) {
                    return n.priority
                });
                i && u && n.debug("Initializing " + i.length + " dependant funcs (good)");
                n.each(i, function(t, i) {
                    r.profile(function() {
                        try {
                            i.dependency.initialize()
                        } catch (t) {
                            n.error("An error occurred attempting to initialize the dependency '" + i.name + "'");
                            throw t;
                        }
                    }, i.name)
                })
            },
            profile: function(n, t) {
                var r = new Date, i;
                n();
                i = new Date - r;
                u && console.log((t || "Profiling took") + ": " + i + "ms")
            },
            runOnLoad: function(n) {
                if (!n)
                    throw "Null function set to run on load";
                o ? n() : f.push(n)
            },
            runOnHtmlInsert: function(t) {
                if (!t)
                    throw "Undefined function passed to runOnHtmlInsert";
                e.push(t);
                s && t(n(document))
            },
            triggerHtmlInsert: function(n) {
                var t, i;
                if (!n)
                    throw "Cannot pass null into triggerHtmlInsert";
                for (t = 0; t < e.length; t++)
                    i = e[t],
                    i(n)
            },
            buildDependencyTree: function(t, u) {
                var e, o, f;
                if (t.dependency === i)
                    throw "Tried to init undefined type: " + t.name;
                e = 99;
                o = null;
                t.dependency.dependentScripts !== i && (f = t.dependency.dependentScripts(),
                n.each(f, function(n, i) {
                    i.priority = i.priority || (t.priority || 99) - 1;
                    u.push(i);
                    r.buildDependencyTree(i, u)
                }))
            },
            newDate: function(n) {
                return typeof n == "number" ? new Date(n) : new Date
            },
            detectIsOnMobile: function() {
                var n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                return n <= 1023 ? !0 : !1
            }
        };
        t.Cobalt = r;
        window.console && console.firebug || !function(n) {
            var i, t = 0;
            for (n.console || (n.console = {}),
            n.console.log && !n.console.debug && (n.console.debug = n.console.log),
            i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "getFirebugElement", "group", "groupCollapsed", "groupEnd", "info", "log", "notifyFirebug", "profile", "profileEnd", "time", "timeEnd", "trace", "warn"],
            t = 0; t < i.length; ++t)
                n.console[i[t]] || (n.console[i[t]] = function() {}
                )
        }(window);
        n(function() {
            r.load()
        })
    }
    )(jQuery, window || undefined)
}
, function(n, t, i) {
    function r(n) {
        return i(f(n))
    }
    function f(n) {
        var t = u[n];
        if (!(t + 1))
            throw new Error("Cannot find module '" + n + "'.");
        return t
    }
    var u = {
        "./Cobalt.AccountMerge.js": 3,
        "./Cobalt.Achievement.js": 4,
        "./Cobalt.AdminPanel.js": 5,
        "./Cobalt.Advertising.js": 6,
        "./Cobalt.Analytics.js": 7,
        "./Cobalt.Announcement.js": 8,
        "./Cobalt.Attachment.js": 9,
        "./Cobalt.Auth.js": 10,
        "./Cobalt.Avatar.js": 11,
        "./Cobalt.BetterTimeSpanField.js": 12,
        "./Cobalt.Billing.js": 13,
        "./Cobalt.BulkModeration.js": 14,
        "./Cobalt.BunnyEars.js": 15,
        "./Cobalt.Burger.js": 16,
        "./Cobalt.CMS.js": 17,
        "./Cobalt.CP.js": 18,
        "./Cobalt.CPAdvertising.js": 19,
        "./Cobalt.CPBan.js": 20,
        "./Cobalt.CPCaching.js": 21,
        "./Cobalt.CPForumThreadPrefix.js": 22,
        "./Cobalt.CPJobs.js": 23,
        "./Cobalt.CPNotifications.js": 24,
        "./Cobalt.CPSiteSettings.js": 25,
        "./Cobalt.CPSkinManager.js": 26,
        "./Cobalt.CPUserProfileTitle.js": 27,
        "./Cobalt.Collapse.js": 28,
        "./Cobalt.Comment.js": 29,
        "./Cobalt.Constants.js": 30,
        "./Cobalt.Core.js": 31,
        "./Cobalt.Countdown.js": 32,
        "./Cobalt.DateTimeField.js": 33,
        "./Cobalt.DayTimeSelector.js": 34,
        "./Cobalt.Device.js": 35,
        "./Cobalt.Dice.js": 36,
        "./Cobalt.Expandable.js": 37,
        "./Cobalt.ExportImportSettings.js": 38,
        "./Cobalt.Favorites.js": 39,
        "./Cobalt.Feedback.js": 40,
        "./Cobalt.FieldLists.js": 41,
        "./Cobalt.Filters.js": 42,
        "./Cobalt.Footer.js": 43,
        "./Cobalt.Forms.js": 44,
        "./Cobalt.Forum.js": 45,
        "./Cobalt.ForumFilters.js": 46,
        "./Cobalt.ForumManager.js": 47,
        "./Cobalt.ForumThreadForm.js": 48,
        "./Cobalt.Gallery.js": 49,
        "./Cobalt.HomePage.js": 50,
        "./Cobalt.ImageManager.js": 51,
        "./Cobalt.ImageTagging.js": 52,
        "./Cobalt.Infractions.js": 53,
        "./Cobalt.JQuery.Center-test.js": 54,
        "./Cobalt.JQuery.Center.js": 55,
        "./Cobalt.JQuery.Grid.js": 56,
        "./Cobalt.JQuery.Lightbox.js": 57,
        "./Cobalt.JQuery.Tooltip.js": 58,
        "./Cobalt.JQuery.autocomplete.js": 59,
        "./Cobalt.JQuery.stripTags.js": 60,
        "./Cobalt.JQueryUtils.js": 61,
        "./Cobalt.LegacyPayment.js": 62,
        "./Cobalt.Listing.js": 63,
        "./Cobalt.Localization.js": 64,
        "./Cobalt.LocalizationEditor.js": 65,
        "./Cobalt.Markup.js": 66,
        "./Cobalt.MarkupEditor.js": 67,
        "./Cobalt.Mobile.js": 68,
        "./Cobalt.MobileAdvertising.js": 69,
        "./Cobalt.ModPositions.js": 70,
        "./Cobalt.Modal.js": 71,
        "./Cobalt.ModelMultipleSymbolicField.js": 72,
        "./Cobalt.MultiFileUpload.js": 73,
        "./Cobalt.MurmurHash2.js": 74,
        "./Cobalt.Navigation.js": 75,
        "./Cobalt.NavigationEditor.js": 76,
        "./Cobalt.NavigationItem.js": 77,
        "./Cobalt.NavigationLists.js": 78,
        "./Cobalt.NavigationManager.js": 79,
        "./Cobalt.NewContent.js": 80,
        "./Cobalt.NiceDates.js": 81,
        "./Cobalt.Notifications.js": 82,
        "./Cobalt.PageBlock.js": 83,
        "./Cobalt.PageRegion.js": 84,
        "./Cobalt.PageStructureManager.js": 85,
        "./Cobalt.Permissions.js": 86,
        "./Cobalt.Poll.js": 87,
        "./Cobalt.PollingThrottle.js": 88,
        "./Cobalt.PopOut.js": 89,
        "./Cobalt.PostWidget.js": 90,
        "./Cobalt.PrivateMessage.js": 91,
        "./Cobalt.ProfileFields.js": 92,
        "./Cobalt.QueryParser.js": 93,
        "./Cobalt.Rating.js": 94,
        "./Cobalt.Reports.js": 95,
        "./Cobalt.ResponsiveUtility.js": 96,
        "./Cobalt.Roles.js": 97,
        "./Cobalt.Routes.js": 98,
        "./Cobalt.Shoutbox.js": 99,
        "./Cobalt.Smilies.js": 100,
        "./Cobalt.Social.js": 101,
        "./Cobalt.Social_Facebook.js": 102,
        "./Cobalt.Social_Twitter.js": 103,
        "./Cobalt.SourcePoint.js": 104,
        "./Cobalt.StickyElement.js": 105,
        "./Cobalt.Table.js": 106,
        "./Cobalt.Tabs.js": 107,
        "./Cobalt.Tags.js": 108,
        "./Cobalt.TemplateAndSkin.js": 109,
        "./Cobalt.Throttle.js": 110,
        "./Cobalt.Tidbit.js": 111,
        "./Cobalt.TinyMCE.js": 112,
        "./Cobalt.UI.js": 113,
        "./Cobalt.User.js": 114,
        "./Cobalt.UserContentManager.js": 115,
        "./Cobalt.UserManagement.js": 116,
        "./Cobalt.UserProfile.js": 117,
        "./Cobalt.UserSurrogateAvatars.js": 118,
        "./Cobalt.UserTitles.js": 119,
        "./Cobalt.Utils.js": 120,
        "./Cobalt.VideoEmbed.js": 121,
        "./Cobalt.ViewState.js": 122,
        "./Cobalt.ViewTracking.js": 123,
        "./Cobalt.VoiceWidget.js": 124,
        "./Cobalt.Warning.js": 125,
        "./Cobalt.WarningNotification.js": 126,
        "./Cobalt.Widget.js": 127,
        "./Cobalt.WidgetSettings.js": 128,
        "./Cobalt.flot.js": 129,
        "./Cobalt.jQuery.Syndication.js": 130
    };
    r.keys = function() {
        return Object.keys(u)
    }
    ;
    r.resolve = f;
    n.exports = r;
    r.id = 2
}
, function() {
    "use strict";
    (function(n, t) {
        t.AccountMerge = {
            initialize: function() {
                var i = n("#account-merge-form");
                i.length > 0 && (t.AccountMerge.handleStepChange({
                    nextStep: i.find("#field-step").val()
                }),
                i.ajaxForm({
                    beforeSubmit: function() {
                        i.find("#field-step").val().toString() === "3" ? n(".j-confirm-warning-message").show() : n(".j-confirm-warning-message").hide();
                        i.mask()
                    },
                    success: function(r) {
                        n.info(r);
                        r && r.status == "success" ? (i.find(".error-message").text(""),
                        r.returnUrl ? document.location = r.returnUrl : t.AccountMerge.handleStepChange(r)) : r.errors && (n.info(r.errors),
                        i.find(".error-message").text(r.errors.join(", ")).css("color", "red"));
                        i.unmask()
                    },
                    error: function() {
                        i.unmask()
                    }
                }))
            },
            handleStepChange: function(t) {
                n.info(t.nextStep);
                var i = n(".account-merge-step-logout")
                  , r = n(".account-merge-step-1")
                  , u = n(".account-merge-step-2")
                  , f = n(".account-merge-step-3")
                  , e = n(".account-merge-step-complete");
                n("#field-step").val(t.nextStep);
                switch (t.nextStep.toString()) {
                case "logout":
                case "new":
                    n("#field-step").val("logout");
                    i.fadeIn();
                    r.hide();
                    u.hide();
                    f.hide();
                    e.hide();
                    break;
                case "1":
                    i.fadeOut(function() {
                        r.fadeIn()
                    });
                    u.hide();
                    f.hide();
                    e.hide();
                    break;
                case "2":
                    i.hide();
                    r.fadeOut(function() {
                        n(".curse-email").text(t.curseEmail);
                        n(".curse-username").text(t.curseUsername);
                        n("#field-curse-userid").val(t.curseUserID);
                        u.fadeIn()
                    });
                    f.hide();
                    e.hide();
                    break;
                case "3":
                    i.hide();
                    r.hide();
                    u.fadeOut(function() {
                        n(".site-email").text(t.siteUser.email);
                        n(".site-username").text(t.siteUser.username);
                        n(".site-posts").text(t.siteUser.postCount);
                        n(".site-private-messages").text(t.siteUser.pmCount);
                        n("#field-external-site-userid").val(t.siteUser.id);
                        n(".curse-email").text(t.curseUser.email);
                        n(".curse-username").text(t.curseUser.username);
                        n(".curse-posts").text(t.curseUser.postCount);
                        n(".curse-private-messages").text(t.curseUser.pmCount);
                        n(".curse-posts-add").text("(+" + t.siteUser.postCount + ")");
                        n(".curse-private-messages-add").text("(+" + t.siteUser.pmCount + ")");
                        f.fadeIn()
                    });
                    e.hide();
                    break;
                case "complete":
                    i.hide();
                    r.hide();
                    u.hide();
                    f.fadeOut(function() {
                        e.fadeIn()
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ;
    (function(t, i, r) {
        i.Achievement = {
            initialize: function() {
                t("[data-action=delete-achievement]").click(function() {
                    if (prompt('Are you sure you want to delete this achievement? Everyone who has earned it will be unawarded it. This action cannot be undone. Type "DELETE" if you are sure.') == "DELETE") {
                        var n = t(this).data("id");
                        i.Utils.getRequestVerificationToken().done(function(i) {
                            t.post("/cp/achievements/delete/" + n, {
                                "request-verification-token": i
                            }, function(n) {
                                n.Success && location.reload()
                            })
                        })
                    }
                });
                t("#field-trigger").change(function() {
                    i.Achievement.onTriggerChange()
                });
                t("#field-req-amount").change(function() {
                    i.Achievement.onTriggerChange()
                });
                i.Achievement.onTriggerChange();
                i.Achievement.notify();
                i.runOnHtmlInsert(i.Achievement.setupTooltips)
            },
            initalizetUserAchievementStats: function(n) {
                t(".p-achievement-details").each(function() {
                    var o = t(this), u = o.find("> a"), s = u.find("> div"), h = u.data("id"), f = i.Achievement.Data.Earned[h], e;
                    u.data("req-amount") > 0 && !n && s.addClass("p-achievement-has-progress-bar").append(t("<span>").addClass("p-achievement-progress-bar"));
                    f !== r && (n && o.attr("data-count", f.Earned),
                    u.data("req-amount") > 0 && !n && f.Progress && s.find("span.p-achievement-progress-bar").width(f.Progress / u.data("req-amount") * 100 + "%"));
                    e = parseInt(t(this).data("count")) || parseInt(t(this).parent().data("count"));
                    (e > 1 || t(this).data("always-display-count") && e > 0) && u.append(t("<figure>").html("&times;" + t(this).data("count").toCommaThousands()))
                })
            },
            writeAchievementCounts: function() {
                var n = parseInt(i.Achievement.Data.Counts.GoldAchievements) || 0
                  , t = parseInt(i.Achievement.Data.Counts.SilverAchievements) || 0
                  , r = parseInt(i.Achievement.Data.Counts.BronzeAchievements) || 0;
                document.write('<ul class="p-achievement p-achievement-user-count tip">');
                n > 0 && document.write('<li class="p-achievement-user-count-tier-3">' + n + "<\/li>");
                t > 0 && document.write('<li class="p-achievement-user-count-tier-2">' + t + "<\/li>");
                (r > 0 || n == 0 && t == 0) && document.write('<li class="p-achievement-user-count-tier-1">' + r + "<\/li>");
                document.write("<\/ul>")
            },
            onTriggerChange: function() {
                var n = t("#field-trigger option:selected");
                if (n.length != 0) {
                    var i = n.attr("data-trigger-help") || null
                      , r = n.attr("data-amount-help") || null
                      , u = null
                      , f = t("#field-req-amount").val().length == 0 ? null : parseInt(t("#field-req-amount").val());
                    n.attr("data-req-string") == "true" && (u = r,
                    r = null);
                    f != null && i != null && (i = i.replace("$a", f));
                    i ? t("#trigger-help").text(i).show() : t("#trigger-help").hide();
                    r ? t("#amount-help").text(r).show().parents("tr").show() : t("#amount-help").hide().parents("tr").hide();
                    u ? t("#string-help").text(u).show().parents("tr").show() : t("#string-help").hide().parents("tr").hide();
                    n.attr("data-req-other-achievements") == "true" ? t("#field-required-achievements").parents("tr").show() : t("#field-required-achievements").parents("tr").hide();
                    n.attr("data-req-string") == "true" ? t("#field-string-data").parents("tr").show() : t("#field-string-data").parents("tr").hide();
                    n.attr("data-req-url") == "true" ? (t("#field-url").parents("tr").show(),
                    t("#field-controller").parents("tr").show(),
                    t("#field-controller-action").parents("tr").show()) : (t("#field-url").parents("tr").hide(),
                    t("#field-controller").parents("tr").hide(),
                    t("#field-controller-action").parents("tr").hide())
                }
            },
            notify: function() {
                i.Achievement.Data && i.Achievement.Data.Pending && (i.Achievement.displayAchievements(),
                i.Achievement.Data.Pending = null)
            },
            displayAchievements: function() {
                var r = t(".p-achievement.p-achievement-notices"), u = !0, n, f;
                r.length || (r = t("<div>").addClass("p-achievement p-achievement-notices"),
                u = !1);
                n = 0;
                for (f in i.Achievement.Data.Pending)
                    i.Achievement.Data.Pending.hasOwnProperty(f) && n++;
                t.each(i.Achievement.Data.Pending, function() {
                    n--;
                    var i = t("<div>").addClass("p-achievement-notice p-achievement-tier-" + this.Tier);
                    i.append(t("<h1>").addClass("p-achievement-name").text(this.Name), t("<p>").addClass("p-achievement-description").text(this.Description)).animate({
                        minHeight: "85px",
                        height: "auto",
                        borderWidth: "2px"
                    }, 250);
                    i.delay(100 + n * 250).animate({
                        left: "0px"
                    }, 600, "easeOutBack").delay(5e3 + n * 250).animate({
                        left: "350px"
                    }, 600, "easeInBack", function() {
                        t(this).animate({
                            minHeight: 0,
                            height: 0,
                            borderWidth: 0,
                            marginTop: 0
                        }, 250)
                    });
                    r.append(i)
                });
                t(document.body).on("click", ".p-achievement-notice", function() {
                    location.href = "/members/" + i.User.username + "/achievements"
                });
                u || t(document.body).append(r)
            },
            setupTooltips: function(n) {
                n.find(".p-achievement-details > a").each(function() {
                    t(this).tooltip({
                        content: i.Achievement.getTooltipText,
                        customCssClass: "p-achievement p-achievement-tooltip"
                    })
                })
            },
            getTooltipText: function(n) {
                var o = t("<div/>").addClass("p-achievement-tooltip-tier-" + n.data("tier")), y = t("<h2/>").append(n.data("name")), p = t("<p/>").addClass("description").text(n.data("description")), r = t("<p/>").addClass("details").hide(), u = null, l = parseInt(n.data("req-amount")) || 0, s = (n.data("req-achievements") || "").split(","), e, h, a, f, c, v;
                if (i.Achievement.Data && i.Achievement.Data.Earned && i.Achievement.Data.Earned[n.data("id")] && (u = i.Achievement.Data.Earned[n.data("id")]),
                n.data("text"))
                    r.text(n.data("text")).show();
                else if (n.parent().data("earned-time"))
                    e = n.parent().data("count"),
                    r.addClass("earned").html(((e > 1 ? "First " : "") + "Earned {0}.").format(n.parent().data("earned-time"))).show();
                else if (u != null && u.Earned)
                    e = n.parent().data("count"),
                    r.addClass("earned").html(((e > 1 ? "First " : "") + "Earned {0}.").format(u.EarnedDate)).show();
                else if (l)
                    r.addClass("progress").html("Your progress: <span>{0} / {1}<\/span>".format(u == null ? 0 : u.Progress, l)).show();
                else if (s[0] != "") {
                    h = t("<ul/>");
                    for (a in s)
                        (f = parseInt(s[a]) || 0,
                        f != 0) && (c = i.Achievement && i.Achievement.Data && i.Achievement.Data.Names && i.Achievement.Data.Names[f] ? i.Achievement.Data.Names[f] : null,
                        c) && (v = i.Achievement.Data.Earned[f],
                        h.append(t("<li/>").text(" " + c).addClass(v ? "earned" : "")));
                    r.html(h).show()
                }
                return o.append(y).append(p),
                r.isVisible() && o.append(r),
                o
            },
            doAjaxCheck: function() {
                t.get("/site-achievements/ajax", null, function(t) {
                    (typeof t == "undefined" ? "undefined" : n(t)) == "object" && (i.Achievement.Data = t,
                    i.Achievement.notify())
                })
            },
            trigger: function(r) {
                i.Utils.getRequestVerificationToken().done(function(u) {
                    t.post("/site-achievements/trigger", {
                        triggerName: r,
                        "request-verification-token": u
                    }, function(t) {
                        (typeof t == "undefined" ? "undefined" : n(t)) == "object" && (i.Achievement.Data = t,
                        i.Achievement.notify())
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.AdminPanel = {
            adminGetSubnamespacesRoute: null,
            adminGetRouteNamesRoute: null,
            initialize: function() {
                t.AdminPanel.initializeCacheManager();
                t.runOnHtmlInsert(function() {
                    t.AdminPanel.initializeControllerActionForm()
                });
                t.AdminPanel.initializeSiteSearch();
                t.AdminPanel.initializeAdvertisingContentForm();
                t.AdminPanel.initializeSocialPlatforms();
                t.AdminPanel.initializeUserContentManager()
            },
            initializeUserContentManager: function() {
                n("form.j-user-content-moderation").ajaxForm({
                    success: function(n, i, r, u) {
                        var f = u.parents("tr");
                        f.remove();
                        t.Core.resetBulkModerationCookie("userContentFolderBulkModeration");
                        t.Core.resetBulkModerationCookie("userContentPostBulkModeration")
                    },
                    error: function() {
                        alert("An error occurred while trying to moderate this folder.")
                    }
                })
            },
            initializeSocialPlatforms: function() {
                n("div.social-platform").each(function() {
                    var t = n(this).find("form"), i = n(this).find("div.social-link"), r;
                    n.log(t);
                    t.ajaxForm({
                        type: "post",
                        cache: !1,
                        success: function(t) {
                            n.log(t);
                            t.LinkingAvailable ? i.css("visibility", "visible") : i.css("visibility", "hidden")
                        }
                    });
                    r = t.find("input").change(function() {
                        t.submit()
                    })
                })
            },
            initializeAdvertisingContentForm: function() {
                t.runOnHtmlInsert(function() {
                    var u = n("#field-is-enabled")
                      , i = n("#form-field-content")
                      , r = n("#form-field-secure-content")
                      , t = !0;
                    u.attr("checked") != "checked" && (t = !1,
                    i.hide(),
                    r.hide());
                    u.change(function() {
                        t ? (t = !1,
                        i.hide(),
                        r.hide()) : (t = !0,
                        i.show(),
                        r.show())
                    })
                })
            },
            initializeSiteSearch: function() {
                var r = n("#field-siteSearch"), u, f;
                r.length != 0 && (u = n("#field-site"),
                t.Routes.Instance.CPAjaxAutoCompleteSiteName != i && (r.autocomplete(t.Routes.Instance.CPAjaxAutoCompleteSiteName(), {
                    minChars: 3,
                    scroll: !1
                }).result(function(n, t) {
                    u.val(t[1])
                }),
                r.blur(function() {
                    r.val() == "" && u.val("")
                }),
                u.length > 0 && (f = u.val(),
                f != "" && n.getJSON(t.Routes.Instance.CPGetNameForSite({
                    siteID: f
                }), null, function(n) {
                    r.val(n.Title)
                }))))
            },
            updateControllerActions: function(t, i, r) {
                var u;
                n.log(i);
                var f = i || n(this)
                  , e = f.val()
                  , o = f.attr("data-action-field-id");
                (n.log(o),
                u = n("#" + o),
                n.log(u),
                u = u.empty().disable(),
                e) && n.get("/cp/get-controller-actions/" + e, function(t) {
                    var i, f;
                    if (n('<option value="">').text("*").appendTo(u),
                    !!t && t.length > 0)
                        for (i = 0; i < t.length; i++)
                            f = t[i],
                            n("<option>").attr("value", f).text(f).appendTo(u);
                    u.enable();
                    r && typeof r == "function" && r()
                })
            },
            initializeControllerActionForm: function() {
                n("select.j-controller-name-field").change(t.AdminPanel.updateControllerActions);
                n("#field-url").change(function() {
                    var i = n(this);
                    i.val() !== "" && n.get("/cp/get-route-data?url=" + n(this).val(), function(i) {
                        n("#field-controller-name").val(i.controller);
                        t.AdminPanel.updateControllerActions(null, n("#field-controller-name"), function() {
                            n("#field-action-name").val(i.action)
                        })
                    })
                })
            },
            initializeLocalizationForm: function() {
                n(".edit-phrase").focus(function() {
                    n(this).css("height", "200px")
                });
                n("select#field-namespace").change(function() {
                    var i = n("select#field-subNamespace")
                      , r = n("select#field-namespace").val();
                    if (r == "") {
                        n(i).attr("disabled", !0).html("");
                        return
                    }
                    n.ajax({
                        type: "GET",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        url: t.AdminPanel.adminGetSubnamespacesRoute(r),
                        success: function(t) {
                            var r, u;
                            if (n("select#field-subNamespace > option + option").remove(),
                            t.length > 0) {
                                for (r = 0; r < t.length; r++)
                                    u = t[r],
                                    u != null && i.append(n("<option>").attr("value", u.ID).text(u.Name));
                                i.removeAttr("disabled")
                            } else
                                i.attr("disabled", !0).html("")
                        }
                    })
                })
            },
            initializeCacheManager: function() {
                n(".listing-cache-entry .invalidate-button").each(function() {
                    n(this).click(function() {
                        var i = n(this).parent().parent()
                          , r = escape(n(this).attr("data-cache-key"))
                          , u = t.Routes.Instance.CPCacheManagerInvalidateDataKey();
                        n.ajax({
                            url: u,
                            data: {
                                cacheKey: r
                            },
                            type: "POST",
                            dataType: "html",
                            success: function() {
                                i.remove()
                            },
                            error: function() {
                                alert("Unable to remove cache key!")
                            }
                        })
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Advertising = {
            processAds: function() {
                n(document).ready(function() {
                    t.Advertising.onLoaded()
                })
            },
            onLoaded: function() {
                n(".queued-ad").each(function() {
                    var t = n(this), i, r;
                    t.removeClass("queued-ad");
                    i = t.attr("data-related-ad");
                    r = t[0].innerHTML;
                    t.remove();
                    n("#" + i)[0].innerHTML = r
                })
            }
        };
        i.bodyClick = function(t, i) {
            n("body").css({
                "min-height": "100%",
                height: "auto",
                cursor: "pointer"
            }).addClass("ad-skin");
            n("#page").css({
                "min-height": "100%",
                height: "auto",
                cursor: "pointer"
            });
            n("#content").css({
                cursor: "default"
            });
            n("#header").css("cursor", "pointer");
            n("#header div.hdbox").css("cursor", "default");
            n("body").click(function(n) {
                var i = n.target ? n.target : n.srcElement;
                return i.nodeName != "BODY" && i.id != "site" ? !0 : (window.open(t),
                !1)
            });
            i == "1" && n("#header").click(function(n) {
                var i = n.target ? n.target : n.srcElement;
                return i.id != "header" ? !0 : (window.open(t),
                !1)
            })
        }
    }
    )(jQuery, Cobalt, window || undefined)
}
, function() {
    "use strict";
    (function(n) {
        var t = function() {
            function t() {}
            return t.initialize = function() {
                t.trackingId.length < 1 || this.initialized || (this.initializeAnalytics(),
                ga("create", this.trackingId, "auto", {
                    name: t.trackerName
                }),
                this.handleClicks(),
                this.initialized = !0)
            }
            ,
            t.sendEvent = function(n, i, r, u) {
                var f = {
                    hitType: "event",
                    eventCategory: n,
                    eventAction: i,
                    eventLabel: r,
                    eventValue: u
                };
                ga(t.sendCommand, f)
            }
            ,
            t.initializeAnalytics = function() {
                (function(n, t, i, r, u) {
                    n.GoogleAnalyticsObject = u;
                    n[u] = n[u] || function() {
                        (n[u].q = n[u].q || []).push(arguments)
                    }
                    ;
                    n[u].l = +new Date;
                    var f = t.createElement(i)
                      , e = t.getElementsByTagName(i)[0];
                    f.async = 1;
                    f.src = r;
                    e.parentNode.insertBefore(f, e)
                }
                )(window, document, "script", "//www.google-analytics.com/analytics.js", "ga")
            }
            ,
            t.handleClicks = function() {
                $(document).on("click", "[data-ga-click-event-tracking-category]", function() {
                    var i = $(this).data("ga-click-event-tracking-category"), t, r;
                    i && i.trim().length != 0 && (t = +$(this).data("ga-click-event-tracking-value"),
                    !isNaN(t) && t > -1 && (r = t),
                    n.Analytics.sendEvent($(this).data("ga-click-event-tracking-category"), "click", $(this).data("ga-click-event-tracking-label"), r))
                })
            }
            ,
            t.trackerName = "downloadTracker",
            t.sendCommand = t.trackerName + ".send",
            t.initialized = !1,
            t
        }();
        n.Analytics = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t) {
        t.Announcement = {
            cookieName: "Cobalt.SeenAnnouncements",
            containerName: ".link-annoucement",
            countContainerName: ".notify-count",
            initialize: function() {
                var u = n(t.Announcement.containerName), r, f, i, e;
                if (u && !(u.length < 1) && (r = u.find(t.Announcement.countContainerName),
                r && !(r.length < 1))) {
                    if (f = n.cookie(t.Announcement.cookieName),
                    i = u.attr("data-hash"),
                    i === f)
                        n(t.Announcement.containerName).removeClass("link-annoucement-unread").text("");
                    else if (f != null && i != null) {
                        var h = f.split("-")
                          , o = i.split("-")
                          , s = !0;
                        for (e = 0; e < o.length; e++)
                            h.indexOf(o[e]) == -1 && (s = !1);
                        s ? (n(t.Announcement.containerName).removeClass("link-annoucement-unread"),
                        n.cookie(t.Announcement.cookieName, i)) : r.show()
                    }
                    n(t.Announcement.containerName).mouseover(function() {
                        r.hide();
                        n.cookie(t.Announcement.cookieName, i, {
                            expires: 365
                        });
                        n(this).removeClass("link-annoucement-unread")
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Attachment = {
            initialize: function() {
                t.runOnHtmlInsert(function(t) {
                    t.find(".j-attachments-form").each(function() {
                        var r = n(this), t = r.find("input.j-multi-file-upload"), i;
                        t.disable();
                        r.find("#field-title").keypress(function() {
                            var i = n(this);
                            setTimeout(function() {
                                i.valid() ? t.enable() : t.disable()
                            }, 1)
                        });
                        i = null;
                        t.change(function() {
                            setTimeout(function() {
                                i && i >= +new Date || (i = 500 + new Date,
                                t.val() && t.is(":enabled") && r.submit())
                            }, 17)
                        })
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Auth = {
            modalLoadTime: 500,
            dependentScripts: function() {
                return [{
                    dependency: t.User,
                    name: "Cobalt.User"
                }]
            },
            initialize: function() {},
            bindLoginLink: function() {
                n("body").delegate("#login-link,.j-login-link", "click", function(n) {
                    n.preventDefault();
                    t.Auth.showLoginModal(window.location.pathname)
                })
            },
            bindRegisterLink: function() {
                n("body").delegate("#register-link,.j-register-link", "click", function(n) {
                    n.preventDefault();
                    t.detectIsOnMobile() ? window.location = "/register?returnUrl=" + window.location.pathname : t.Auth.showRegisterModal(window.location.pathname)
                })
            },
            showLoginModal: function(i) {
                if (t.detectIsOnMobile())
                    window.location = "https://" + window.location.hostname + "/login?returnUrl=" + window.location.pathname;
                else {
                    var r = n('<section class="p-login p-login-b group j-login-modal"><\/section>');
                    n("body").append(r);
                    r.dialog({
                        autoOpen: !1,
                        width: 449,
                        modal: !0,
                        title: "Login to Curse",
                        dialogClass: "loginModal",
                        close: function() {
                            r.remove()
                        }
                    });
                    r.dialog("open");
                    r.parent().center();
                    r.append('<div class="loadmask"><\/div>');
                    n.get("https://" + window.location.hostname + "/login-modal", {
                        returnUrl: i
                    }, function(i) {
                        if (!i.length) {
                            r.find("div.loadmask").remove();
                            r.remove();
                            return
                        }
                        var u = n(i);
                        r.append(u);
                        r.find("div.loadmask").remove();
                        t.triggerHtmlInsert(r);
                        r.parent().center();
                        r.find("a.j-register-modal").on("click", function() {
                            t.Auth.replaceWithRegisterModel(r)
                        });
                        n("#field-username").focus()
                    })
                }
            },
            showRegisterModal: function(i) {
                var r = n('<section class="p-register p-register-b group j-register-modal"><\/section>');
                r.dialog({
                    autoOpen: !1,
                    width: 449,
                    modal: !0,
                    title: "Register with Curse",
                    dialogClass: "register-modal",
                    close: function() {
                        r.remove()
                    }
                });
                r.dialog("open");
                r.append('<div class="loadmask"><\/div>');
                n.get("https://" + window.location.hostname + "/register-modal", {
                    returnUrl: i
                }, function(i) {
                    if (!i.length) {
                        r.find("div.loadmask").remove();
                        r.remove();
                        return
                    }
                    var u = n(i);
                    r.append(u);
                    r.find("div.loadmask").remove();
                    t.triggerHtmlInsert(r);
                    r.parent().center();
                    r.find("a.j-login-modal").on("click", function() {
                        t.Auth.replaceWithLoginModel(r)
                    });
                    n("#field-username").focus()
                })
            },
            loadLoginContainer: function(n, i) {
                n.html(i);
                n.find("a.j-register-modal").on("click", function() {
                    t.Auth.replaceWithRegisterModel(n)
                });
                return t.triggerHtmlInsert(n),
                n
            },
            loadRegisterContainer: function(n, i) {
                n.html(i);
                n.find("a.j-login-modal").on("click", function() {
                    t.Auth.replaceWithLoginModel(n)
                });
                return t.triggerHtmlInsert(n),
                n
            },
            replaceWithRegisterModel: function(i) {
                var r = !1;
                setTimeout(function() {
                    r || i.append('<div class="loadmask"><\/div>')
                }, t.Auth.modalLoadTime);
                n.ajax({
                    url: "https://" + window.location.hostname + "/register-modal",
                    xhrFields: {
                        withCredentials: !0
                    },
                    data: {
                        returnUrl: window.location.pathname
                    },
                    success: function(u) {
                        i.removeClass();
                        i.addClass("p-register p-register-b group j-register-modal ui-dialog-content ui-widget-content");
                        i.parent().removeClass("loginModal").addClass("register-modal");
                        t.Auth.loadRegisterContainer(i, u);
                        n("#field-username").focus();
                        r = !0
                    }
                });
                r && i.find("div.loadmask").remove()
            },
            replaceWithLoginModel: function(i) {
                var r = !1;
                setTimeout(function() {
                    r || i.append('<div class="loadmask"><\/div>')
                }, t.Auth.modalLoadTime);
                n.ajax({
                    url: "https://" + window.location.hostname + "/login-modal",
                    xhrFields: {
                        withCredentials: !0
                    },
                    data: {
                        returnUrl: window.location.pathname
                    },
                    success: function(u) {
                        i.removeClass();
                        i.addClass("p-login p-login-b group j-login-modal ui-dialog-content ui-widget-content");
                        i.parent().removeClass("register-modal").addClass("loginModal");
                        t.Auth.loadLoginContainer(i, u);
                        n("#field-username").focus();
                        r = !0
                    }
                });
                r && i.find("div.loadmask").remove()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Avatar = {
            initialize: function() {
                n("form.avatar-form").each(function() {
                    var i = n(this);
                    i.ajaxForm({
                        type: "post",
                        iframe: !0,
                        dataType: "json",
                        beforeSubmit: function() {
                            if (i.valid())
                                i.mask();
                            else
                                return !1
                        },
                        success: function(n) {
                            switch (n.result) {
                            case "success":
                                parent.location.reload();
                                break;
                            case "invalid":
                                i.unmask();
                                t.Forms.displayErrors(i, n.errors);
                                break;
                            default:
                                i.unmask();
                                throw "Unknown data result from upload avatar form: " + n.result.toString();
                            }
                        },
                        error: function() {
                            i.unmask()
                        }
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.BetterTimeSpanField = {
            initialize: function() {
                n("body").delegate(".time-span-container select, .time-span-container > .better-time-span", "change", function() {
                    t.BetterTimeSpanField.setTimespanValue(n(this).parent())
                });
                n("body").delegate(".time-span-container > .better-time-span", "keyup", function() {
                    t.BetterTimeSpanField.setTimespanValue(n(this).parent())
                });
                n(".time-span-container").each(function() {
                    var i = n(this).find(".hidden-time-span").val(), r = n(this).find(".better-time-span"), u = n(this).find("select"), f, t;
                    i != "" && (f = i.split("."),
                    f.length > 1 ? (r.val(f[0]),
                    u.val("days")) : (t = i.split(":"),
                    t[0] != "00" && t[0] != "" ? (t[0].substring(0, 1) == "0" && (t[0] = t[0].substring(1)),
                    r.val(t[0]),
                    u.val("hours")) : t[1] != "00" && t[1] != "" && (t[1].substring(0, 1) == "0" && (t[1] = t[1].substring(1)),
                    r.val(t[1]),
                    u.val("minutes"))))
                })
            },
            setTimespanValue: function(n) {
                var f = n.find("select").val(), r = n.find(".better-time-span").val(), e;
                if (r != "") {
                    var t = "00"
                      , i = "00"
                      , u = "00";
                    f == "hours" ? (t = parseInt(r, 10),
                    t > 23 && (u = parseInt(t / 23, 10),
                    t = parseInt(t % 24, 10))) : f == "days" ? u = r : f == "minutes" && (i = parseInt(r, 10),
                    i > 59 && (t = parseInt(i / 59, 10),
                    i = parseInt(i % 60, 10),
                    t > 23 && (u = parseInt(t / 23, 10),
                    t = parseInt(t % 24, 10))));
                    e = u + ":" + t.toString() + ":" + i.toString() + ":0";
                    n.find(".hidden-time-span").val(e)
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Billing = {
            initialize: function() {
                function t(t, i) {
                    n(t).change(function() {
                        n(this).val() != "US" ? (n(i).val(""),
                        n(i).parent().hide()) : n(i).parent().show()
                    }).change()
                }
                this.bindSameAddressCheckbox();
                t("#field-billing-country", "#field-billing-state");
                t("#field-shipping-country", "#field-shipping-state")
            },
            bindSameAddressCheckbox: function() {
                function t() {
                    var t = n("#field-same-address")[0], i;
                    t && (i = t.checked,
                    i && (n("#field-billing-first-name").val(n("#field-shipping-first-name").val()),
                    n("#field-billing-last-name").val(n("#field-shipping-last-name").val()),
                    n("#field-billing-street-address-1").val(n("#field-shipping-street-address-1").val()),
                    n("#field-billing-street-address-2").val(n("#field-shipping-street-address-2").val()),
                    n("#field-billing-locality").val(n("#field-shipping-locality").val()),
                    n("#field-billing-state").val(n("#field-shipping-state").val()),
                    n("#field-billing-postal-code").val(n("#field-shipping-postal-code").val()),
                    n("#field-billing-country").val(n("#field-shipping-country").val())))
                }
                n("#field-same-address").click(function() {
                    var i = n(this)
                      , t = n("#billing-address");
                    i.attr("checked") ? t.hide() : t.show()
                });
                n("#checkout").submit(function() {
                    t()
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.BulkModeration = {
            isInitialized: !1,
            initialize: function() {
                var i, u, r;
                if (!t.BulkModeration.isInitialized) {
                    i = n(".j-bulk-moderation").attr("data-bulk-moderation-cookie") || "selectedEntityIDs";
                    t.BulkModeration.bulkModerationOptions = n(".j-bulk-moderation select[name='actionName'] option").clone();
                    u = function() {
                        var r = t.BulkModeration.getIDsFromCookie(i).split(",").clean();
                        r && n(":checkbox.col-actions-checkbox").each(function() {
                            var t = n(this);
                            n.inArray(t.val(), r) > -1 ? t.prop("checked", !0) : t.prop("checked", !1)
                        })
                    }
                    ;
                    t.runOnHtmlInsert(u);
                    n("#image-manager").length > 0 && n("#image-manager").bind("onLoadComplete", u);
                    n("body").on("change", ":checkbox.col-actions-checkbox", function() {
                        var f = n(this), r, u;
                        t.BulkModeration.saveIDsToCookie(i);
                        r = t.BulkModeration.getIDsFromCookie(i).split(",").clean();
                        f.attr("checked") || (u = n.inArray(f.val(), r),
                        u > -1 && (r.splice(u, 1),
                        t.BulkModeration.setIDsToCookie(i, r.join())));
                        t.BulkModeration.updateBulkModerationBox()
                    });
                    t.BulkModeration.updateBulkModerationBox();
                    n("body").on("click", ":checkbox.col-actions-select-all", function() {
                        var t = n(this).is(":checked");
                        n(":checkbox.col-actions-checkbox").each(function() {
                            var i = n(this).prop("checked");
                            i != t && (n(this).prop("checked", t),
                            n(this).trigger("change"))
                        })
                    });
                    n("body").on("click", ".j-bulk-moderation > form button[type='submit']", function(r) {
                        var f, s, o, u, c, h, e;
                        if (r.preventDefault(),
                        f = n(this).parents("form"),
                        s = !0,
                        n(".j-bulk-moderation-errors").empty(),
                        n(".j-bulk-moderation-errors").hide(),
                        o = t.BulkModeration.getIDsFromCookie(i),
                        u = n(f).find("select:not(:hidden)").last().find(":selected"),
                        u.val() == "")
                            return !1;
                        if (o != "") {
                            if (c = o.split(",").clean().length,
                            n("#forum-threads").length > 0 && u.val() == 8 && c < 2) {
                                alert("You must select at least 2 threads to perform a merge action.");
                                return
                            }
                            s = n("#forum-threads").length > 0 && (u.val() == 8 || u.val() == 7) || window.location.pathname.indexOf("/cp/") != -1 ? !1 : !0;
                            h = "";
                            h = n("option#field-action-moveto").is(":selected") ? L.Global.ControlPanel.MovePrivateMessagesPrompt(u.text()) : L.Global.ControlPanel.BulkConfirm(u.text());
                            (u.attr("data-show-confirm") === "false" || confirm(h)) && (e = n(f).find("input[name='entityIDs']"),
                            e.length == 0 && (e = n('<input type="hidden" name="entityIDs" />'),
                            n(f).append(e)),
                            e.attr("value", o),
                            s ? n(f).ajaxSubmit({
                                dataType: "json",
                                beforeSubmit: function() {
                                    n(".j-bulk-moderation").mask()
                                },
                                success: function(r) {
                                    var f, u;
                                    if (r && r.errors && r.errors.length) {
                                        for (f = 0; f < r.errors.length; f++)
                                            n(".j-bulk-moderation-errors").append("<li>" + r.errors[f] + "<\/li>");
                                        n(".j-bulk-moderation-errors").show()
                                    } else
                                        r && r.html ? (u = n('<div id="move-bulk-modal">'),
                                        u.append(r.html),
                                        u.dialog({
                                            modal: !0,
                                            height: 500,
                                            width: 600,
                                            title: r.title,
                                            resizable: !1,
                                            close: function() {
                                                u.dialog("destroy");
                                                u.remove()
                                            }
                                        }),
                                        t.triggerHtmlInsert(u),
                                        u.parent().center()) : (t.BulkModeration.resetBulkModerationCookie(i),
                                        self.location.reload());
                                    n(".j-bulk-moderation").unmask()
                                }
                            }) : (n(f).submit(),
                            t.BulkModeration.resetBulkModerationCookie(i)))
                        }
                    });
                    n("body").on("click", ".j-bulk-moderation .j-clear-selection", function(r) {
                        r.preventDefault();
                        n(":checkbox.col-actions-checkbox").each(function() {
                            var t = n(this);
                            t.prop("checked", !1)
                        });
                        t.BulkModeration.resetBulkModerationCookie(i);
                        n(".j-bulk-moderation.toggle").hide()
                    });
                    r = "#form-field-mod-prefix";
                    n(r).length > 0 && (n(r).addClass("hide-always"),
                    n("#field-action").change(function(t) {
                        var u = n(this).parents("form"), i;
                        t.preventDefault();
                        i = n(u).find("select:not(:hidden)").last().find(":selected");
                        i.val() == 11 ? n(r).removeClass("hide-always") : n(r).addClass("hide-always")
                    }));
                    t.BulkModeration.isInitialized = !0
                }
            },
            updateBulkModerationBox: function() {
                for (var e, u, o = n(".j-bulk-moderation").attr("data-bulk-moderation-cookie") || "selectedEntityIDs", i = t.BulkModeration.getIDsFromCookie(o).split(","), f = [], r = 0; r < i.length; r++)
                    i[r] != "" && f.push(i[r]);
                i = f;
                n(".j-bulk-moderation").find(".j-apply-selection").text(L.Global.ContentManagement.OnSelectedTemplate(i.length));
                i.length > 0 ? n(".j-bulk-moderation.toggle").show() : n(".j-bulk-moderation.toggle").hide();
                e = n(n.grep(n(":checkbox.col-actions-checkbox"), function(t) {
                    return n.inArray(n(t).val(), i) > -1
                }));
                u = e.closest(".j-comment");
                u.length && t.BulkModeration.forumUpdateBulkModeration(u)
            },
            forumUpdateBulkModeration: function(i) {
                var u = t.BulkModeration.bulkModerationOptions
                  , r = n(".j-bulk-moderation select[name='actionName']");
                r.find("option").remove();
                i.filter(":not(.comment-deleted)").length && u.filter("[value='delete']").appendTo(r);
                i.filter(".comment-deleted").length && u.filter("[value='undelete']").appendTo(r);
                i.filter(":not(.comment-spam)").length && u.filter("[value='spam']").appendTo(r);
                i.filter(".comment-spam").length && u.filter("[value='notspam']").appendTo(r);
                i.length > 1 && u.filter("[value='merge']").appendTo(r);
                u.filter("[value='move']").appendTo(r)
            },
            bulkModerationOptions: null,
            resetBulkModerationCookie: function(t) {
                t == i && (t = "selectedEntityIDs");
                var r = document.domain.split(".")
                  , u = "." + r[1] + "." + r[2];
                n.cookie(t, null, {
                    path: "/",
                    domain: u
                });
                n(".j-bulk-moderation").find(".j-apply-selection").text(L.Global.ContentManagement.OnSelectedTemplate(0))
            },
            getIDsFromCheckBoxes: function(t) {
                var i = "";
                return n(t).each(function() {
                    var t = n(this).val();
                    i == "" ? i = t : i += "," + t
                }),
                i
            },
            saveIDsToCookie: function(n) {
                var i = t.BulkModeration.getIDsFromCheckBoxes(":checkbox.col-actions-checkbox:checked"), r = t.BulkModeration.getIDsFromCookie(n), u;
                r == "" ? t.BulkModeration.setIDsToCookie(n, i) : (u = (i + "," + r).split(",").distinct(),
                t.BulkModeration.setIDsToCookie(n, u))
            },
            setIDsToCookie: function(t, i) {
                var u = document.domain.split("."), f = "." + u[1] + "." + u[2], r;
                r = typeof i == "string" ? i.replace("null", "").replace("undefined", "") : i.filter(function(n) {
                    return n != null
                });
                console.log(r);
                n.cookie(t, r, {
                    path: "/",
                    domain: f
                })
            },
            getIDsFromCookie: function(t) {
                var r = t + "="
                  , i = n.cookie(t);
                return i ? i : ""
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.BunnyEars = {
            configOptions: {},
            contentWrapper: null,
            liveOnTwitchCon: null,
            liveOnTwitchBtn: null,
            api: null,
            loading: !1,
            contentLoaded: !1,
            sendHoverEventToGA: !1,
            initialize: function() {
                n(function() {
                    t.Analytics.initialize();
                    var i = n(".cobalt-bunny-ears-config");
                    i.data("track-hover") && (t.BunnyEars.sendHoverEventToGA = !0);
                    i.length && ga(function() {
                        t.BunnyEars.configOptions = i.data();
                        n.ajax({
                            url: "https://stations.cursetech.com/be/bunnyears-1.1.min.js",
                            dataType: "script",
                            success: t.BunnyEars.onBunnyEarsScriptLoad,
                            async: !1
                        })
                    })
                })
            },
            showContent: function() {
                var i, r, u;
                t.BunnyEars.loading || t.BunnyEars.loaded || t.BunnyEars.tuneBunnyEars();
                i = null;
                r = 0;
                t.BunnyEars.contentWrapper.show();
                t.BunnyEars.contentWrapper.find(".beFlexItem").show().removeClass("beFlexHidden beFlexShowing").each(function() {
                    var t = n(this)
                      , u = t.offset().top;
                    i || (i = u);
                    t.hasClass("beFlexItemMore") || (u == i ? t.addClass("beFlexShowing").removeClass("beFlexHidden") : (t.removeClass("beFlexShowing").addClass("beFlexHidden"),
                    r++))
                });
                r ? t.BunnyEars.contentWrapper.find(".beFlexShowing").last().removeClass("beFlexShowing").addClass("beFlexHidden") : (u = t.BunnyEars.contentWrapper.find(".beFlexItemMore"),
                u.length && u.offset().top !== i && t.BunnyEars.contentWrapper.find(".beFlexShowing").last().removeClass("beFlexShowing").addClass("beFlexHidden"));
                t.BunnyEars.contentWrapper.find(".beFlexShowing").show();
                t.BunnyEars.contentWrapper.find(".beFlexHidden").hide()
            },
            hideContent: function() {
                t.BunnyEars.contentWrapper.hide();
                t.BunnyEars.contentWrapper.find(".beFlexItem").show().removeClass("beFlexShowing beFlexHidden")
            },
            onBunnyEarsScriptLoad: function() {
                var i = n(".netbar .netbar-help");
                if (i.length || (i = n(".netbar .netbar-support")),
                i.length) {
                    t.BunnyEars.contentWrapper = n('<div id="lotBeWrapper" />').appendTo("body");
                    t.BunnyEars.liveOnTwitchCon = n('<div class="live-on-twitch netbar-left"><span class="live-on-twitch-btn" /><\/div>').insertAfter(i);
                    t.BunnyEars.liveOnTwitchBtn = t.BunnyEars.liveOnTwitchCon.find(".live-on-twitch-btn");
                    t.BunnyEars.liveOnTwitchBtn.add(t.BunnyEars.contentWrapper).on("mouseenter", function() {
                        t.BunnyEars.liveOnTwitchBtn.addClass("live-on-twitch-btn-hover");
                        t.BunnyEars.showContent();
                        t.BunnyEars.sendHoverEventToGA && (t.Analytics.sendEvent("BunnyEars", "HoverMenu"),
                        t.BunnyEars.sendHoverEventToGA = !1)
                    }).on("mouseleave", function() {
                        t.BunnyEars.liveOnTwitchBtn.removeClass("live-on-twitch-btn-hover");
                        t.BunnyEars.hideContent()
                    })
                }
            },
            tuneBunnyEars: function() {
                t.BunnyEars.loading || (t.BunnyEars.contentWrapper.mask(),
                t.BunnyEars.api = (new BunnyEars).tuneIn("#lotBeWrapper", t.BunnyEars.configOptions, t.BunnyEars.onBunnyEarsTuned),
                t.BunnyEars.loading = !0)
            },
            onBunnyEarsTuned: function() {
                t.BunnyEars.contentWrapper.unmask();
                t.BunnyEars.loading = !1;
                t.BunnyEars.loaded = !0
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        var t = jQuery
          , i = function() {
            function n() {}
            return n.initializeEarly = function() {
                (this.Html = t("html"),
                this.MenuButton = t("<i>"),
                this.SearchButton = t("<i>"),
                this.Body = t("body"),
                this.Header = t("header.main"),
                this.Nav = t("nav.main"),
                this.Netbar = t("div#netbar"),
                this.SiteContainer = t("div.container"),
                this.SubNavLink = t("nav.p-nav-a li.section > a"),
                this.SiteOverlay = t('<div class="site-overlay">'),
                this.Window = t(window),
                this.Body.hasClass("responsive-enabled")) && (this.Body.css("border-style") == "double" && n.Body.addClass("burger-ready"),
                this.grillBurger(),
                this.bindEvents())
            }
            ,
            n.grillBurger = function() {
                this.MenuButton.addClass("menu-button").appendTo(this.Header);
                this.SearchButton.addClass("search-button").insertAfter(this.MenuButton);
                this.SiteOverlay.appendTo(this.Body)
            }
            ,
            n.bindEvents = function() {
                this.SubNavLink.on("click", this.getEventHandler("navItemClick"));
                this.MenuButton.on("click", this.getEventHandler("menuClick"));
                this.SiteOverlay.on("click", this.getEventHandler("closeMenu"));
                this.SearchButton.on("click", this.getEventHandler("searchClick"));
                this.Window.on("resize", this.getEventHandler("windowResize"))
            }
            ,
            n.getEventHandler = function(n) {
                var i = this;
                if (n && this.EventHandlers[n] !== undefined)
                    return function() {
                        var r = Array.prototype.slice.call(arguments, 0);
                        r.unshift(t(this));
                        i.EventHandlers[n].apply(i, r)
                    }
            }
            ,
            n.Resize = function() {
                n.Body.css("border-style") != "double" || n.Body.hasClass("burger-ready") ? n.Body.css("border-style") != "double" && n.Body.removeClass("burger-ready") : setTimeout(function() {
                    n.Body.addClass("burger-ready")
                }, 50)
            }
            ,
            n.EventHandlers = {
                windowResize: function(t, i) {
                    clearTimeout(this.resizeTimer);
                    this.resizeTimer = setTimeout(function() {
                        n.Resize(t, i)
                    }, 1e3)
                },
                menuClick: function() {
                    this.Body.hasClass("burger-open") ? this.Body.removeClass("burger-open") : (this.Body.addClass("burger-open"),
                    this.Body.removeClass("search-open"))
                },
                closeMenu: function() {
                    this.Body.removeClass("burger-open")
                },
                navItemClick: function(n, i) {
                    var r = n.parent();
                    (this.Html.hasClass("mobile") || t("body").hasClass("responsive-enabled") && this.Window.innerWidth() < 1024) && i.preventDefault();
                    r.hasClass("section") && r.hasClass("subnav-open") == !1 ? r.addClass("subnav-open") : r.removeClass("subnav-open")
                },
                searchClick: function() {
                    this.Body.hasClass("search-open") ? this.Body.removeClass("search-open") : this.Body.addClass("search-open")
                }
            },
            n
        }();
        n.Burger = i
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.CMS = {
            dependentScripts: function() {
                return [{
                    dependency: t.TinyMCE,
                    name: "Cobalt.TinyMCE"
                }]
            },
            formType: null,
            CobaltCss: [],
            ProjectCss: [],
            getTinyMCECss: function() {
                return t.CMS.CobaltCss.concat(t.CMS.ProjectCss).join(",")
            },
            initialized: !1,
            priority: 0,
            initialize: function() {
                var r, f, e, u;
                if (t.CMS.initialized = !0,
                r = null,
                n("#post-form").length > 0 ? (t.CMS.formType = "post",
                r = n("#post-form"),
                t.CMS.initializeRevisionSystem()) : n("#page-form").length > 0 && (t.CMS.formType = "page",
                r = n("#page-form").parents("form")),
                r != null) {
                    t.TinyMCE.optionsOverridden = !0;
                    t.TinyMCE.options = {
                        skin_url: t.TinyMCE.skin_url,
                        setup: function(i) {
                            i.on("init", function(i) {
                                var r = i.target;
                                t.TinyMCE._enableBlockQuoteBreakout(r);
                                n("#" + r.id + "_blockquote").on("click", function() {
                                    r.dom.add(r.getBody(), "p", null, "<br />")
                                });
                                t.TinyMCE.tinyMCELoaded(r)
                            })
                        },
                        end_container_on_empty_block: !0,
                        body_class: "text u-typography-format content-container cms-editor",
                        content_css: t.CMS.getTinyMCECss(),
                        formats: {
                            bold: {
                                inline: "strong"
                            },
                            italic: {
                                inline: "em"
                            },
                            strikethrough: {
                                inline: "del"
                            },
                            address: {
                                inline: "addr"
                            },
                            removeformat: [{
                                selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del",
                                remove: "all",
                                split: !0,
                                expand: !1,
                                block_expand: !0,
                                deep: !0
                            }, {
                                selector: "span",
                                attributes: ["style", "class"],
                                remove: "empty",
                                split: !0,
                                expand: !1,
                                deep: !0
                            }, {
                                selector: "*",
                                attributes: ["style", "class"],
                                split: !1,
                                expand: !1,
                                deep: !0
                            }]
                        },
                        selector: "#field-body-wysiwyg",
                        menubar: !1,
                        width: "100%",
                        height: "400px",
                        plugins: "colorpicker,fullscreen,hr,image,link,lists,media,noneditable,paste,searchreplace,tabfocus,table,textcolor",
                        tabfocus_elements: "field-custom-css",
                        external_plugins: t.TinyMCE._addExtraCustomPlugins("imageborder,postexcerpt,postpagebreak,postwidget,spoiler,tabgroupaddtab,videoembed,xenonmedia,incontentad"),
                        dialog_type: "modal",
                        toolbar: "paste bold italic underline strikethrough blockquote | formatselect alignleft aligncenter alignright | fontselect fontsizeselect forecolor | searchreplace | fullscreen | bullist numlist | hr removeformat | outdent indent spoiler | link unlink | image | imageborder | xenonmedia | tabgroupaddtab | videoembed | postpagebreak | postwidget | postexcerpt | table | incontentad",
                        extended_valid_elements: "article[id|class],header,aside[*],div[*],tab[*],iframe[*]",
                        custom_elements: "tab",
                        block_formats: "Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6;Pre=pre;",
                        relative_urls: !1,
                        paste_auto_cleanup_on_paste: !0,
                        paste_remove_styles: !0,
                        paste_remove_styles_if_webkit: !0,
                        paste_strip_class_attributes: "all",
                        gecko_spellcheck: !0,
                        paste_text_sticky: !0,
                        forced_root_block: "p",
                        heading_clear_tag: "p",
                        schema: "html5",
                        remove_script_host: !1,
                        media_live_embeds: !1
                    };
                    (n("div#page-form").html() != i || n("div#post-form").html() != i) && t.CMS.setupPageForm();
                    n(".module.cms.page-form .user-action-save-changes").click(function() {
                        n("#page-form #field-save-changes").click()
                    });
                    n(".module.cms.post-form .user-action-save-changes").click(function() {
                        n("#post-form #field-save-changes").click()
                    });
                    n(".module.cms.post-form #field-preview").click(function(t) {
                        t.preventDefault();
                        var i = n("form#post-form")
                          , r = n(this).attr("data-post-id");
                        r > 0 ? i.attr("action", "/cp/cms/posts/" + r + "/preview") : i.attr("action", "/cp/cms/posts/preview");
                        i.attr("target", "preview");
                        i.submit();
                        i.attr("action", "");
                        i.attr("target", "")
                    });
                    n(".post-tab-item-link,.b-pagination-next a,.b-pagination-prev a").click(function(t) {
                        t.preventDefault();
                        var u = n(this).attr("data-post-id")
                          , f = n(this).attr("data-category-id")
                          , r = n(this).attr("data-page-number")
                          , i = n("form#post-form")
                          , e = n(".user-content").length > 0;
                        u > 0 ? e ? i.attr("action", "/my-content/" + f + "/posts/" + u + "/preview/page-" + r) : i.attr("action", "/cp/cms/posts/" + u + "/preview/page-" + r) : e ? i.attr("action", "/my-content/" + f + "/posts/preview/page-" + r) : i.attr("action", "/cp/cms/posts/preview/page-" + r);
                        i.attr("target", "preview");
                        i.submit();
                        i.attr("action", "");
                        i.attr("target", "")
                    });
                    n.fn.extend({
                        disableSelection: function() {
                            this.each(function() {
                                this.onselectstart = function() {
                                    return !1
                                }
                                ;
                                this.unselectable = "on";
                                jQuery(this).css("-moz-user-select", "none")
                            })
                        }
                    });
                    f = "You appear to have unsaved changes. Any unsaved changes will be lost if you leave this page.";
                    r.data("_submitClicked", !1);
                    e = function() {
                        if (r.data("_submitClicked"))
                            return null;
                        r.data("_submitClicked", !1);
                        var i = !1;
                        return n("input[type=text]").each(function() {
                            this.value != this.defaultValue && (i = !0)
                        }),
                        n("input[type=checkbox]").each(function() {
                            this.checked != this.defaultChecked && (i = !0)
                        }),
                        n("textarea:not(.j-wysiwyg-editor)").each(function() {
                            this.value != this.defaultValue && (i = !0)
                        }),
                        n("select").each(function() {
                            n(this).is(":visible") && this.options.selectedIndex != -1 && !this.options[this.selectedIndex].defaultSelected && (i = !0)
                        }),
                        r.find("textarea").each(function() {
                            var n = t.TinyMCE.getEditorFromForm(r);
                            n && n.isDirty() && (i = !0)
                        }),
                        i ? f : null
                    }
                    ;
                    n(window).on("beforeunload", e);
                    n("button[type=submit]").on("click", function() {
                        r.data("_submitClicked", !0)
                    });
                    n(".col-right .sub-caption > span").on("click", function() {
                        var t = n(this).parent().find(".cms-toggle-section");
                        t.length > 0 && t.click()
                    });
                    u = function u() {
                        var i = n("div#post-form,div.post-form"), f, e, r;
                        if (i.length > 0 && i.attr("data-template-id")) {
                            if (typeof tinyMCE == "undefined" || tinyMCE.activeEditor == null) {
                                setTimeout(u, 200);
                                return
                            }
                            f = i.data("post-type") === 3;
                            e = i.data("saved") === "True";
                            f || e || (r = i.data("template-id"),
                            r && t.CMS.copyTemplate(r))
                        }
                    }
                    ;
                    u();
                    t.CMS.initializeRedirectUrlField()
                }
            },
            initializeRedirectUrlField: function() {
                var t = n("#field-set-redirect-url"), i;
                t.length > 0 && (i = n("#form-field-redirect-url"),
                t.is(":checked") && i.removeClass("hide").show(),
                t.click(function() {
                    t.is(":checked") ? i.removeClass("hide").show() : i.hide()
                }))
            },
            calculatePageUrl: function() {
                var i = n("#field-slug").val(), r;
                i.length == 0 && (i = n("#field-title").val(),
                i == n("#field-title").attr("placeholder") && (i = n("#field-display-slug").text()));
                i.length > 1 && (r = t.Routes.Instance.CPPageGetUrl(n("#field-category").val(), {
                    title: i
                }),
                n.ajax({
                    url: r,
                    success: function(t) {
                        var i = t.Url
                          , r = t.Slug;
                        n("#field-display-url").html('<a href="' + i + '" target="blank">' + i + "<\/a>");
                        n("#field-display-slug").text(r)
                    }
                }))
            },
            calculatePostUrl: function() {
                var i = n("#field-title").val(), r, u;
                if (i == n("#field-title").attr("placeholder") && (i = ""),
                i == "" && (i = "your-title"),
                i.length > 1) {
                    if (r = n("#field-parent-category").val(),
                    r == "")
                        return;
                    u = t.Routes.Instance.CPPostGetUrl(r, {
                        title: i,
                        pageID: n("#field-parent-page").val(),
                        postID: n("#field-post").val()
                    });
                    n.ajax({
                        url: u,
                        success: function(t) {
                            var i = t.Url;
                            i != null ? n("#field-display-url").html('<a href="' + i + '" target="blank">' + i + "<\/a>") : n("#field-display-url").html("Choose a valid folder")
                        }
                    })
                }
            },
            setupPageForm: function() {
                var u, f, r;
                if (n("#field-title").focusout(function() {
                    t.CMS.formType == "page" ? t.CMS.calculatePageUrl() : t.CMS.calculatePostUrl()
                }),
                n("#field-category").change(function() {
                    t.CMS.calculatePageUrl()
                }),
                n("#field-parent-page").change(function() {
                    t.CMS.calculatePostUrl()
                }),
                n("#field-parent-category").change(function() {
                    t.CMS.calculatePostUrl()
                }),
                n("#field-slug").tAutoSizer({
                    maxWidth: 400,
                    stepSize: 10
                }),
                n(".field-url-wrapper > a.accept").click(function() {
                    n("#field-slug").hasClass("hidden") ? (n("#field-display-slug").hide(),
                    n("#field-slug").val().length == 0 && n("#field-slug").val(n("#field-display-slug").text()),
                    n("#field-slug").removeClass("hidden"),
                    n("#field-slug").keyup(),
                    n(this).text("Ok"),
                    n(".field-url-wrapper > a.cancel").removeClass("hidden")) : (n(".field-url-wrapper > a.cancel").addClass("hidden"),
                    n("#field-display-slug").show(),
                    n("#field-slug").addClass("hidden"),
                    n(this).text("Edit"),
                    t.CMS.calculatePageUrl())
                }),
                n(".field-url-wrapper > a.cancel").click(function() {
                    n(this).addClass("hidden");
                    n("#field-slug").addClass("hidden");
                    n("#field-slug").val("");
                    n("#field-display-slug").show();
                    n(".field-url-wrapper > a.accept").text("Edit")
                }),
                u = n(":radio[name='type']"),
                u.length > 0 && (u.change(t.CMS.toggleTypeFields),
                t.CMS.toggleTypeFields()),
                f = n("#field-is-scheduled"),
                f.length > 0) {
                    var s = n("#form-field-publish-date").find("label")
                      , e = L.Global.ContentManagement.PageFormSetDate()
                      , o = n("<a>").attr("href", "#").html(e).click(function() {
                        return n(this).html() == e ? t.CMS.togglePublishDate(n(this), !0) : t.CMS.togglePublishDate(n(this), !1),
                        !1
                    });
                    s.append(o);
                    t.CMS.togglePublishDate(o, f.val() == "y")
                }
                n("#field-title").trigger("focusout");
                r = n("div#post-form");
                r.length > 0 && r.attr("data-post-type") !== i && setTimeout(function() {
                    t.ImageManager.setPostType(r.attr("data-post-type"));
                    t.ImageManager.showModal(document, t.CMS.copyTemplate, "template-select", n("#field-parent-category").val())
                }, 500)
            },
            togglePublishDate: function(t, i) {
                var s = L.Global.ContentManagement.PageFormSetDate()
                  , r = n("#field-publish-date-date")
                  , u = n("#field-publish-date-time")
                  , f = n("#form-field-publish-date span.timezone")
                  , h = n("#form-field-publish-date")
                  , e = h.find("label")
                  , o = n("#field-is-scheduled");
                i ? (t.html(L.Global.ContentManagement.PageFormDoNotSetDate()),
                o.val("y"),
                e.find("span").html("Publish as Scheduled"),
                n("div#post-form .j-publish-submit").text("Publish as Scheduled"),
                r.show(),
                u.show(),
                f.show()) : (o.val("n"),
                e.find("span").html("Publish Immediately"),
                n("div#post-form .j-publish-submit").text("Publish"),
                t.html(s),
                r.hide(),
                u.hide(),
                f.hide())
            },
            copyTemplate: function(i) {
                n.getJSON(t.Routes.Instance.CategoryPostGetData(i), function(t) {
                    var i = n("#form-field-body");
                    i.find("ul.tabbed-tabs li").first().click();
                    tinyMCE.activeEditor.setContent(t.Body);
                    n("#field-exerpt").val(t.Exerpt);
                    n(t.Tags).each(function(t, i) {
                        n("#field-tags")[0].appendTag(i)
                    });
                    n("#field-status").val(t.Status);
                    n("#field-post-image-id").val(t.PostImageID);
                    t.PostImageUrl !== "" && n("#field-post-image").parent().append(n("<img>").attr("src", t.PostImageUrl));
                    t.Pinned === !0 && n("#field-is-pinned").attr("checked", "checked");
                    n("#field-allow-comments").val(t.AllowComments);
                    n("#field-allow-ratings").val(t.AllowRatings);
                    t.Security === !0 && n("#field-body-disable-security").attr("checked", "checked")
                })
            },
            toggleTypeFields: function() {
                var t = n(":radio[name='type']:checked").val();
                t = parseInt(t, null);
                var i = n("#static-type-fields")
                  , r = n("#collection-options")
                  , u = n("#tag-collection-options")
                  , f = n("#form-field-allow-comments")
                  , e = n("#form-field-allow-ratings");
                switch (t) {
                case 1:
                    i.show();
                    e.show();
                    f.show();
                    r.hide();
                    u.hide();
                    break;
                case 2:
                    i.hide();
                    e.hide();
                    f.hide();
                    r.show();
                    u.hide();
                    break;
                case 4:
                    i.hide();
                    e.hide();
                    f.hide();
                    r.show();
                    u.show()
                }
            },
            initializeRevisionSystem: function() {
                var t = n("#field-post").val();
                n("ul.revisions>li>a").each(function() {
                    n(this).click(function() {
                        var i = n(this).attr("data-revision"), r, u;
                        confirm("Are you sure you want to restore the content of this post to an earlier revision (Revision " + i + ")?") && (r = n("div#form-field-body ul.tabbed-tabs > li.selected").attr("data-markup-mode"),
                        u = n.ajax({
                            type: "POST",
                            url: "/ajax/posts/" + t + "/restore-revision?revisionNumber=" + i,
                            dataType: "json",
                            success: function(t) {
                                n("#field-body-wysiwyg").val(t.Body);
                                tinymce.editors["field-body-wysiwyg"].setContent(t.Body);
                                n("#field-body").val(t.Body)
                            }
                        }))
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.CP = {
            initialize: function() {
                t.CP.toggleCommentableRating();
                t.CP.userCPIsReadOnly()
            },
            toggleCommentableRating: function() {
                var t = n(".j-rating-type-field"), i;
                if (t.length > 0) {
                    i = n("input[id*='enableratings']");
                    i.each(function() {
                        var t = n(this);
                        t.on("click", function() {
                            t.prop("checked") ? t.parents(".expandable").find(".j-rating-type-field").removeClass("hide") : t.parents(".expandable").find(".j-rating-type-field").addClass("hide")
                        })
                    });
                    t.on("change", function() {
                        alert("WARNING! When changed, any prior ratings for this entity type will be removed!")
                    })
                }
            },
            userCPIsReadOnly: function() {
                var t = n(".user-edit.user-cp-read-only");
                if (t.length > 0) {
                    t.find(":input").prop("disabled", !0);
                    t.find("#form-field-email,#form-field-mobile-phone-number").hide();
                    t.find("form").on("click", "input[type='submit']", function(t) {
                        t.preventDefault();
                        n.get("cp/users/validate-edit", function(t) {
                            t && t.isValid && n(this).parents("form").submit()
                        })
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.CPAdvertising = {
            initialize: function() {
                t.runOnHtmlInsert(function() {
                    t.CPAdvertising.attachTargetChange();
                    n("form.j-target-form").each(t.CPAdvertising.bindTargetForm);
                    t.CPAdvertising.bindRemove()
                })
            },
            attachTargetChange: function() {
                n("#ad-target-form").on("change", "select.j-target-type", function() {
                    var r = n(this)
                      , i = r.val()
                      , t = n("#ad-target-form");
                    i == 1 ? (t.find("#form-field-url-pattern").hide(),
                    t.find("#form-field-controller-name").show(),
                    t.find("#form-field-controller-action").show()) : i == 2 && (t.find("#form-field-controller-name").hide(),
                    t.find("#form-field-controller-action").hide(),
                    t.find("#form-field-url-pattern").show())
                });
                n("#ad-target-form").find("select.j-target-type").change()
            },
            bindTargetForm: function() {
                var i = n(this);
                i.ajaxForm({
                    success: function(r) {
                        var u, f;
                        switch (r.Status) {
                        case "success":
                            u = n(r.html);
                            t.triggerHtmlInsert(u);
                            n("ul.advertising-target-listing > li.no-results").remove();
                            i.hasClass("j-target-edit-form") ? (f = n("div.j-target." + r.targetID),
                            f.find("div.j-target-content").html(u.find("div.j-target-content").html())) : n("ul.advertising-target-listing").append(u);
                            t.Forms.bindModalLinks(n(".advertising-target-listing"));
                            n(".ui-dialog-titlebar-close").click();
                            break;
                        case "invalid":
                            t.Forms.displayErrors(i, r.Errors);
                        default:
                            throw "Unknown data result from target form: " + r.Status;
                        }
                    },
                    dataType: "json"
                })
            },
            bindRemove: function() {
                n("ul.advertising-target-listing").on("deleteConfirmPost", ".j-target-content .remove-link", function() {
                    var i = n(this)
                      , r = i.closest(".ad-target-item");
                    i.closest(".ad-target-item").remove();
                    t.triggerHtmlInsert(n("ul.advertising-target-listing"))
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        var i = 2;
        t.CPBan = {
            initialize: function() {
                n(".user-edit").on("change", "#field-ban-type", function() {
                    t.CPBan.handleBanTypeChanged(n(this))
                });
                t.CPBan.handleBanTypeChanged(n("#field-ban-type"))
            },
            handleBanTypeChanged: function(t) {
                var f = t.find("option:selected");
                f.data("is-forum-ban-definition") === "True" ? n("div.forum-selection").show() : n("div.forum-selection").hide();
                var r = n("#field-is-permanent-warning")
                  , u = n("#field-expire-value")
                  , e = n("#field-expire > .hidden-time-span");
                f.data("ban-type") === i ? (u.val(null),
                e.val(null),
                u.prop("disabled", !0),
                r.attr("checked", "checked"),
                r.prop("disabled", !0)) : (r.prop("disabled", !1),
                u.prop("disabled", !1))
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.CPCaching = {
            initialize: function() {
                n(".j-stats").each(function(t, i) {
                    var r = n(i).attr("data-host")
                      , u = "/api/get-cache-stats-for-server?host=" + r
                      , f = n(i).attr("data-apikey");
                    n.ajax({
                        type: "POST",
                        dataType: "json",
                        beforeSend: function(t) {
                            t.setRequestHeader("Access-Control-Request-Headers", "x-requested-with");
                            t.setRequestHeader("apikey", f);
                            n(i).mask()
                        },
                        url: u,
                        success: function(t) {
                            if (t.Status === "Success") {
                                var r = n(i).find("ul");
                                r.prepend(t.Html)
                            }
                            n(i).unmask()
                        }
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        var i = function() {
            location.search.indexOf("filter") < 0 ? (n(".forum-thread-prefix-listing").tableDnD({
                onDragClass: "dragHandle",
                dragHandle: "col-icon-drag-handle",
                onDrop: function() {},
                onDragStart: function() {},
                onAllowDrop: function() {
                    return !0
                }
            }),
            n("#sort-prefix-display-order-form").submit(function() {
                var t = [];
                n(".forum-thread-prefix-listing > tbody > tr > td:first-child").each(function(n, i) {
                    t.push(i.firstChild.getAttribute("data-id"))
                });
                n("#field-prefix-order").val(t)
            })) : (n(".forum-thread-prefix-listing").find("thead>tr>th").first().hide(),
            n(".forum-thread-prefix-listing").find("tbody>tr").each(function() {
                var t = n(this);
                t.find("td").first().hide()
            }),
            n(".update-prefix-order").hide())
        };
        t.CPForumThreadPrefix = {
            initialize: function() {
                i()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        var t = jQuery
          , i = function() {
            function n() {
                n.BindJobSearch()
            }
            return n.initialize = function() {}
            ,
            n.BindJobSearch = function() {
                t("#j-job-search").on("input", function() {
                    var n = t(this).val()
                      , i = t("tr[data-job-name]");
                    i.each(function() {
                        var i = t(this);
                        i.data("job-name").toLowerCase().indexOf(n.toLowerCase()) <= -1 ? i.hide() : i.show()
                    })
                })
            }
            ,
            n
        }();
        n.CPJobs = i
    }
    )(Cobalt || (window.Cobalt = {}));
    $(document).ready(function() {
        var n = new Cobalt.CPJobs
    })
}
, function() {
    "use strict";
    (function(n, t) {
        t.CPNotifications = {
            initialize: function() {
                var t = n(".j-notification-type-display-order")
                  , i = n("#field-order-values");
                t.length > 0 && i.length > 0 && t.sortable({
                    stop: function() {
                        var t = [];
                        n(".j-notification-type-display-order > li[data-id]").each(function(i, r) {
                            t.push(n(r).data("id"))
                        });
                        i.val(t.join())
                    }
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.CPSiteSettings = {
            initialize: function() {
                n(document).on("change", ".j-enable-auto-post-merge", function() {
                    t.CPSiteSettings.handleEnableAutoPostMergeChange(n(this))
                });
                t.CPSiteSettings.handleEnableAutoPostMergeChange(n(".j-enable-auto-post-merge"));
                var i = n("#field-gravatar-default")
                  , r = n("#field-gravatar-custom");
                if (i.length > 0 && r.length > 0) {
                    t.CPSiteSettings.loadExampleGravatarImage(i, t.CPSiteSettings.getGravatarDefaultValue(i, r));
                    i.val() === "custom" && r.parent().removeClass("hide").show();
                    i.on("change", function() {
                        n(this).val() === "custom" ? (r.parent().removeClass("hide").show(),
                        t.CPSiteSettings.loadExampleGravatarImage(i, t.CPSiteSettings.getGravatarDefaultValue(i, r))) : (r.parent().removeClass("hide").hide(),
                        t.CPSiteSettings.loadExampleGravatarImage(n(this), t.CPSiteSettings.getGravatarDefaultValue(i, r)))
                    });
                    r.on("keyup", function() {
                        t.CPSiteSettings.loadExampleGravatarImage(i, n(this).val())
                    })
                }
            },
            getGravatarDefaultValue: function(n, t) {
                return n.val() === "custom" ? t.val() : n.val()
            },
            loadExampleGravatarImage: function(t, i) {
                var e = "http://www.gravatar.com/avatar/00000000000000000000000000000000?d=" + encodeURIComponent(i) + "&f=y", r = t.parent(), f, u;
                r.length > 0 && (f = n("<img>").attr("src", e).attr("alt", "Example").attr("title", "Example"),
                u = n("<span>").addClass("j-image").append(f),
                r.find(".j-image").length > 0 ? r.find(".j-image").replaceWith(u) : r.append(u))
            },
            handleEnableAutoPostMergeChange: function(t) {
                t.is(":checked") ? n(".j-auto-post-merge-timeframe").show() : n(".j-auto-post-merge-timeframe").hide()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.CPSkinManager = {
            initialize: function() {
                this.toggleDefaultSkin();
                this.toggleSkinOptions()
            },
            toggleDefaultSkin: function() {
                n("#field-skins").on("click", ".default-skin", function() {
                    var t = n(this)
                      , i = t.hasClass("selected");
                    n(".default-skin").removeClass("selected");
                    i || (t.addClass("selected"),
                    n("#field-default-skin").val(t.attr("data-id")))
                })
            },
            toggleSkinOptions: function() {
                n("#field-skins").on("change", "input.j-skin", function() {
                    var t = n(this);
                    t.is(":checked") ? t.parents("li.j-skin").find(".j-skin-roles,.j-default-skin").removeClass("hide") : t.parents("li.j-skin").find(".j-skin-roles,.j-default-skin").addClass("hide")
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.CPUserProfileTitle = {
            initialize: function() {
                n(document).on("change", ".j-enable", function() {
                    t.CPUserProfileTitle.handleCustomTitlePermissionEnableChange(n(this))
                })
            },
            handleCustomTitlePermissionEnableChange: function(n) {
                n.is(":checked") ? n.closest("tr").find(".j-post-count-threshold").show() : n.closest("tr").find(".j-post-count-threshold").hide()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Collapse = {
            initialize: function() {
                return
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        function u(n) {
            if (n.find("#field-parent-comment").val(""),
            n.find(".in-reply-to").hide(),
            n[0].reset(),
            n.find(".j-attachments").hide(),
            n.find("ul.j-attachments-list").empty(),
            n.hasClass("j-comment-reply-form") || n.hasClass("j-comment-edit-form")) {
                var i = n.find(".j-markup-type").val();
                (i == "1" || i == "3") && t.TinyMCE.removeEditor(n);
                n.parent().remove()
            }
            k()
        }
        function d(t) {
            t = t || n(".comment-form").find(".in-reply-to");
            t.hide().find("a.link").attr("href", "#").text("")
        }
        function g() {
            var r = n(this), s, h, e;
            if (!r.hasClass("j-comment-no-bind")) {
                r.bind("form-pre-serialize", function() {
                    t.TinyMCE.saveEditorInForm(r)
                });
                var o = r.find(".form-footer")
                  , f = n.cookie("Cobalt.Comment.LastSavedContent")
                  , c = n.cookie("Cobalt.Comment.LastSavedContentType");
                f != "" && f != null && (o.append(n("<button title='" + L.Global.Forums.RestoreContentDescription() + "' type='button' class='tip button'><\/button>").click(function() {
                    c == "markup" ? r.find("#field-body").val(f) : r.find("#field-body-wysiwyg").val(f)
                }).append(n("<span>" + L.Global.Common.RestoreContent() + "<\/span>"))),
                t.triggerHtmlInsert(o));
                s = "You appear to have unsaved changes. Any unsaved changes will be lost if you leave this page.";
                n(window).on("beforeunload", function() {
                    var t, u;
                    return r.data("_submitClicked") ? null : (r.data("_submitClicked", !1),
                    t = !1,
                    r.find("input[type=text]").each(function() {
                        this.value != this.defaultValue && (n.log("Found change!"),
                        n.log(this),
                        t = !0)
                    }),
                    r.find("textarea:not(.j-wysiwyg-editor)").each(function() {
                        this.value == this.defaultValue || n(this).hasClass("j-wysiwyg-editor") || (n.log("Found change!"),
                        n.log(this),
                        t = !0)
                    }),
                    window.tinymce !== i && (u = window.tinymce.EditorManager.activeEditor),
                    u != null && u.isDirty() && (n.log("Found TinyMCE Change!"),
                    n.log(u),
                    n.log(u.isDirty),
                    t = !0),
                    t ? s : void 0)
                });
                r.find("button[type=submit]").on("click", function() {
                    r.data("_submitClicked", !0)
                });
                h = r.find("#reply");
                r.ajaxForm({
                    beforeSubmit: function() {
                        r.mask();
                        e = setTimeout(function() {
                            h.form()
                        }, 1e4);
                        var t = r.find("#field-body").val();
                        t != "" ? (n.cookie("Cobalt.Comment.LastSavedContent", t),
                        n.cookie("Cobalt.Comment.LastSavedContentType", "markup")) : (n.cookie("Cobalt.Comment.LastSavedContent", r.find("#field-body-wysiwyg").val()),
                        n.cookie("Cobalt.Comment.LastSavedContentType", "wysiwyg"))
                    },
                    error: function() {
                        r.unmask();
                        clearTimeout(e)
                    },
                    success: function(i) {
                        var d, g, nt, y, f, tt, it, l, h, p, a, b, v;
                        n.cookie("Cobalt.Comment.LastSavedContent", "");
                        clearTimeout(e);
                        var s = n("ul.j-comment-listing:visible")
                          , c = r.attr("data-preview-id") || "comment-preview"
                          , o = n("#" + c);
                        i.commentId && (o = s.find("div[data-preview-comment-id=" + i.commentId + "]"));
                        switch (i.result) {
                        case "AjaxRedirect":
                            break;
                        case "preview":
                            n("div[data-preview-comment-id]").empty();
                            d = i.preview;
                            o.length == 0 && (i.commentId ? (g = s.find("div[data-id=" + i.commentId + "]"),
                            o = n("<div>").attr("data-preview-comment-id", i.commentId).addClass("module comment-preview"),
                            g.after(o)) : (nt = r,
                            nt.before(n("<div>").attr("id", c)),
                            y = n("button#field-preview-submit"),
                            y.find("span").text("Cancel Preview"),
                            y.click(function(t) {
                                t.preventDefault();
                                n(this).parents("div.j-comment-form-container").find("div#" + c.toString()).remove();
                                n(this).find("span").text("Preview");
                                n(this).unbind("click")
                            }),
                            o = n("#" + c)));
                            o.html(d);
                            r.unmask();
                            t.triggerHtmlInsert(o);
                            o[0].scrollIntoView();
                            k();
                            break;
                        case "success":
                            if (n("div[data-preview-comment-id]").empty(),
                            o.length > 0 && o.empty(),
                            i.returnUrl !== "" && typeof i.returnUrl != "undefined" && (document.location = i.returnUrl),
                            f = n(i.html),
                            t.triggerHtmlInsert(f),
                            n("ul.j-comment-listing:visible > li.no-results").remove(),
                            i.newForumTitle && (tt = f.find(".j-comment").data("author-id"),
                            it = n(".j-comment").filter(function() {
                                return n(this).data("author-id") === tt
                            }),
                            it.find(".p-comment-statitem.forum-title").text(i.newForumTitle)),
                            r.hasClass("j-comment-edit-form"))
                                l = r.parents("div.j-comment"),
                                l.find("div.j-comment-content").html(f.find("div.j-comment-content").html()),
                                u(r),
                                t.triggerHtmlInsert(l),
                                w(l),
                                r.unmask();
                            else {
                                u(r);
                                f.css("visibility", "hidden");
                                h = null;
                                i.parentCommentID && (i.childOrderReversed && (h = s.find("div[data-parent-comment=" + i.parentCommentID + "]").last().parent()),
                                (h == null || h.length == 0) && (h = s.find("div[data-id=" + i.parentCommentID + "]").parent()));
                                h != null && h.length > 0 ? h.after(f) : (p = s.attr("data-sort-method"),
                                a = !0,
                                p == "wilson-score" ? i.orderDescending || (a = !1) : (p != "date-created",
                                i.orderDescending && (a = !1)),
                                a ? (i.mergedIntoPreviousComment && s.children("li:last").remove(),
                                s.append(f)) : (i.mergedIntoPreviousComment && s.children("li:first").remove(),
                                s.prepend(f)));
                                b = f.offset();
                                v = b.top + f.height() / 2 - n(window).height() / 2;
                                v < 0 && (v = 0);
                                var rt = document.documentElement.scrollTop || document.body.scrollTop
                                  , ut = b.top
                                  , ft = window.innerHeight && window.innerHeight < n(window).height() ? window.innerHeight : n(window).height()
                                  , et = ut > rt && f.height() + ut < rt + ft;
                                f.hide();
                                f.css("visibility", "visible");
                                n("body,html,document").animate({
                                    scrollTop: v
                                }, 500, function() {
                                    f.fadeIn(500);
                                    r.unmask()
                                });
                                t.Comment.commentCreated(f, r, i);
                                t.UI.bindSpoilers()
                            }
                            break;
                        case "invalid":
                            r.unmask();
                            t.Forms.displayErrors(r, i.errors);
                            break;
                        default:
                            r.unmask();
                            throw "Unknown data result from comment form: " + i.result.toString();
                        }
                        t.Comment.absolutifyLinks()
                    },
                    dataType: "json"
                });
                r.find(".close").click(function() {
                    r.find("#field-parent-comment").val("");
                    d()
                })
            }
        }
        function nt(i) {
            var r, u, o;
            if (i.preventDefault(),
            r = n(this).closest(".j-comment"),
            u = r.find(".j-comment-editor"),
            u.length <= 0) {
                var s = r.find(".forum-post-body")
                  , f = r.find(".forum-post-body-container")
                  , e = r.find(".forum-post-body-content");
                if (s.length != 1)
                    throw "Cannot find body content to replace";
                o = n(this).attr("href").toString();
                n.ajax({
                    url: o,
                    success: function(i) {
                        e.hide();
                        var r = n("<div/>").addClass("p-comment-editor").addClass("j-comment-editor");
                        r.html(i);
                        r.find(".j-cancel-button").click(function(n) {
                            n.preventDefault();
                            t.TinyMCE.removeEditor(r);
                            r.remove();
                            e.show()
                        });
                        f.append(r);
                        r[0].scrollIntoView();
                        t.triggerHtmlInsert(f)
                    },
                    dataType: "html",
                    type: "GET"
                })
            }
            return !1
        }
        function h(n) {
            return n.replace(/<\/?[^>]+>/gi, "")
        }
        function f(n, i) {
            var r = n.find("#field-body"), u;
            r.length === 0 && (r = n.find(".j-markup-editor"));
            u = t.Markup.currentSelectedMarkup(n);
            jQuery.ajax({
                url: "/comments/" + i + "/quote",
                data: {
                    destinationType: u
                },
                success: function(t) {
                    t.body && it(n, t.authorName, t.authorLink, t.postLink, t.body, u, r, t.quoteMarkup)
                },
                async: !1
            })
        }
        function tt(n) {
            return n + "<p><\/p>"
        }
        function it(i, r, u, f, e, o, s, v) {
            var k, p;
            e = '<div class="quote-body">' + e + "<\/div>";
            var d = e
              , nt = n("<a>").attr("href", f).addClass("go-next").text(">>")
              , tt = n("<div>").addClass("quote-source").html(L.Global.Common.QuoteFrom('<a class="quote-author" href="' + u + '">' + r + "<\/a> ")).append(nt)
              , it = n("<blockquote>").addClass("source-quote").append(tt).append(e)
              , y = n("<div>").append(it).html()
              , w = s.val() || s.text()
              , ut = n.cookie("Preferences.NestQuotes")
              , g = t.Constants.NestedQuotePreference
              , b = t.User.MaxQuoteDepth;
            (g === 2 || g === 0 && ut === "false") && (b = 1);
            switch (o) {
            case 1:
                y = a(y, b);
                t.TinyMCE.getEditorFromForm(i, function(n) {
                    var i = c(n, y);
                    n.setContent(i);
                    t.TinyMCE.focusEditor(n)
                });
                break;
            case 3:
                y = l(y, b);
                t.TinyMCE.getEditorFromForm(i, function(i) {
                    n(i.editorContainer).attr("insertHtmlQuote", v == 1 || v == 2 ? "true" : "false");
                    var r = c(i, y);
                    r = r.replace("[/quote]<blockquote", "[/quote]<blockquote");
                    i.setContent(r);
                    n(i.editorContainer).removeAttr("insertHtmlQuote");
                    t.TinyMCE.focusEditor(i)
                });
                break;
            case 4:
            case 6:
                s.val(w + y).focus();
                break;
            case 2:
                k = L.Global.Common.QuoteFrom(r) + "\n" + h(d).replace(/(&nbsp;)+/gi, " ");
                k = k.split("\n").join("\n\t");
                s.val(w + k);
                break;
            case 8:
                p = '[quote from="{0} &raquo;" url="{1}"]{2}[/quote]'.format(r, f, h(d).replace(/(&nbsp;)+/gi, " "));
                p = l(p, b);
                s.val(w + p);
                s.val(w + p);
                rt(s)
            }
        }
        function c(n, t) {
            var i = n.getContent({
                format: "html"
            }) + t;
            return tt(i)
        }
        function rt(n) {
            n.focus();
            var t = n.val();
            n.val("");
            n.val(t)
        }
        function l(n, t) {
            return n = n.split(/\[quote/).join("<blockquote>[quote"),
            n = n.split(/\[\/quote\]/).join("[/quote]<\/blockquote>"),
            n = a(n, t),
            n = n.split("<blockquote>[quote").join("[quote"),
            n = n.split('<blockquote class="source-quote">[quote').join("[quote"),
            n = n.split("[/quote]<\/blockquote>").join("[/quote]"),
            n.split("[quote][/quote]").join("[quote]\r\n[/quote]")
        }
        function a(t, i) {
            var r = "", u;
            for (i > 0 && (r = "blockquote"),
            u = 0; u < i - 1; u++)
                r += " > blockquote";
            return t = n(t),
            t.find(r).remove(),
            '<blockquote class="source-quote">' + t.html() + "<\/blockquote>"
        }
        function ut(t) {
            t.preventDefault();
            var r = n(this).closest(".comment")
              , u = r.attr("data-id")
              , i = n(".j-comment-form-container form.j-comment-form");
            i.length > 0 ? (f(i, u, !1),
            n("body").animate({
                scrollTop: i.offset().top
            }, 500)) : v(r, function(n) {
                f(n, u, !1)
            })
        }
        function v(i, r) {
            var e = i.parent(), a = e.parent(), f = ot(i), o = a.find(".j-comment-form-container"), h = o.parent(), s, c, l;
            if (h.length == 1 && h[0] != e[0] && (t.TinyMCE.removeEditor(o),
            o.remove()),
            s = e.find(".j-comment-form-container"),
            s.length > 0) {
                c = s.find("form.j-comment-reply-form").first();
                u(c);
                return
            }
            l = "/comments/create-" + i.attr("data-parent-type-id") + "-" + i.attr("data-parent-id") + "/form";
            n.get(l, function(u) {
                var o = n(u.html).find(".j-comment-form-container"), e, h, c, s;
                o.addClass("p-comment-reply-form");
                e = o.find("form").first();
                e.removeClass("j-comment-form").addClass("j-comment-reply-form");
                e.attr("data-parent-comment-id", f);
                e.attr("data-preview-id", f);
                e.find("#field-reply-comment").val(et(i));
                e.find("#field-parent-comment").val(f);
                e.css("visibility", "hidden");
                o.find(".j-attachments").attr("id", "j-attachments-reply-" + f);
                h = o.find(".j-upload-attachment-0");
                h.addClass("j-upload-attachment-reply-" + f).removeClass("j-upload-attachment-0");
                o.find(".j-attachments-form input.j-multi-file-upload").attr("data-attach-to-element-id", "j-attachments-reply-" + f);
                o.find(".j-attachments-form input.j-multi-file-upload").attr("data-button-element-id", ".j-upload-attachment-reply-" + f);
                i.after(o);
                c = e.find("textarea").first().attr("id") + f;
                e.find("textarea").first().attr("id", c);
                t.triggerHtmlInsert(e.parent());
                e.hide();
                e.css("visibility", "visible");
                e.fadeIn(500);
                s = e.find(".j-markup-type").val();
                (s == "1" || s == "3") && t.TinyMCE.getEditorFromForm(e, function(n) {
                    n.focus()
                });
                r != null && r(e)
            })
        }
        function ft(t) {
            t.preventDefault();
            var i = n(this).closest(".comment");
            v(i)
        }
        function et(n) {
            return n.attr("data-id")
        }
        function ot(t) {
            var i = n("form.j-comment-form")
              , r = parseInt(i.data("max-comment-depth"), null)
              , u = parseInt(t.attr("data-depth"), null) + 1;
            return u > r ? t.attr("data-parent-comment") : t.attr("data-id")
        }
        function st() {
            var u = n(".j-comment-delete-form #form-field-message"), f = n(".j-comment-delete-form #field-show-message"), r;
            u.css("display", "none");
            f.change(function() {
                f.is(":checked") ? u.css("display", "block") : u.css("display", "none")
            });
            r = n(".ajax-delete");
            r.ajaxForm({
                beforeSubmit: function() {
                    r.find(":submit").attr("disabled", "disabled")
                },
                success: function(u) {
                    var f, o;
                    u.Status === i || u.Status !== i && u.Status != "invalid" ? (u.ThreadDeleted && location.reload(!0),
                    n(".ui-dialog-titlebar-close").click(),
                    f = n(".j-comment[data-id='" + r.data("id") + "']"),
                    f.length > 0 && (o = f.parent(),
                    o.replaceWith(u.View),
                    t.runOnHtmlInsert(function() {
                        b()
                    }),
                    e())) : (r.find(":submit").removeAttr("disabled"),
                    t.Forms.displayErrors(r, u.Errors))
                }
            })
        }
        function e() {
            t.triggerHtmlInsert(n("#content"))
        }
        function ht() {
            n("#comments").length > 0 && n("#comments").bind("hide-share-modal", function() {
                n("body").on("click", function(t) {
                    var r = n(t.target), i;
                    r.hasClass("isOpen") || (i = n("#share-link-comment").parent(),
                    i.is(":visible") && i.find(r).length === 0 && i.find("a.ui-dialog-titlebar-close").click())
                })
            });
            n("#comments .comment .post-index > a[data-link-prompt=true]").each(function() {
                var i = n(this)
                  , r = n("body").width() <= 640 || t.detectIsOnMobile() ? i.parents(".j-comment").find(".mobile-share-target") : i;
                r.on("click", {
                    link: i
                }, function(i) {
                    var o, u, r;
                    if (i.preventDefault(),
                    n("#share-link-comment").length > 0 && n("#share-link-comment").parent().find("a.ui-dialog-titlebar-close").click(),
                    o = i.data.link,
                    u = n(this),
                    !u.hasClass("isOpen")) {
                        u.addClass("isOpen");
                        var f = '<div id="share-link-comment"><input type="text" value="{0}" class="full-width" /><\/div>'
                          , s = o.prop("href").toString()
                          , e = s;
                        e.indexOf("http") === -1 && (e = location.protocol + "//" + location.host + "/" + s);
                        f = f.format(e);
                        r = n(f);
                        t.triggerHtmlInsert(r);
                        r.dialog({
                            title: "Share Post",
                            modal: !1,
                            position: [i.clientX - 295, i.clientY + 25],
                            height: 100,
                            dialogClass: "share-post",
                            close: function() {
                                r.dialog("destroy");
                                r.remove();
                                u.removeClass("isOpen")
                            }
                        });
                        n("#share-link-comment input").select();
                        n("#comments").trigger("hide-share-modal")
                    }
                })
            })
        }
        function y(n, t, i, r, u, f) {
            this.commentID = n;
            this.revisionID = t;
            this.body = i;
            this.processedBody = r;
            this.revisionStatus = u;
            this.commentStatus = f
        }
        function p(t, i) {
            if (r.length > 0)
                return n.grep(r, function(n) {
                    return n.commentID === t && n.revisionID === i
                })[0]
        }
        function w(u) {
            var f = n(".j-comment-revisions");
            if (f.length > 0) {
                u.on("click", ".j-comment-revisions", function(f) {
                    var o, e;
                    f.preventDefault();
                    f.stopImmediatePropagation();
                    o = u.find(".j-comment-revisions-history").toggle().is(":visible");
                    o ? n(this).addClass("selected") : (u.find(".j-comment-revisions-select option").length > 0 && u.find(".j-comment-revisions-select option:eq(0)").attr("selected", "selected").change(),
                    n(this).removeClass("selected"));
                    e = u.find(".j-comment-revisions-select");
                    e.find("option").length <= 0 && (u.mask(),
                    n.get(t.Routes.Instance.CommentGetCommentRevisions(u.data("id")), function(f) {
                        var h, s;
                        if (f && f.revisions && f.revisions.length > 0) {
                            for (f.revisions = n.parseJSON(f.revisions),
                            e.append("<option value='0'>-<\/option>"),
                            h = u.find(".j-comment-body").html(),
                            r.push(new y(u.data("id"),0,h,h,f.revisionStatus)),
                            s = 0; s < f.revisions.length; s++) {
                                s === 0 && (u.commentStatus = f.revisions[0].commentStatus);
                                var o = f.revisions[s]
                                  , c = t.newDate(o.epoch * 1e3)
                                  , l = c.toLocaleDateString() + " " + c.toLocaleTimeString()
                                  , a = n("<option value='" + o.revisionNumber + "'>#" + o.revisionNumber + " " + l + " by: " + o.author + (o.revisionStatus !== i ? "(" + o.revisionStatus + ")" : "") + "<\/option>").addClass("localized-date-string");
                                e.append(a)
                            }
                            t.triggerHtmlInsert(e)
                        }
                        u.unmask()
                    }))
                });
                u.on("change", ".j-comment-revisions-select", function() {
                    var l = n(this).find("option:selected"), o = function(n) {
                        u.find(".j-comment-body").empty().append(n);
                        t.UI.bindSpoilers()
                    }, s = function(n) {
                        u.find(".j-comment-editor").length > 0 && (window.tinymce && window.tinymce.activeEditor && u.find(".markItUpEditor").length === 0 ? window.tinymce.activeEditor.setContent(n) : u.find(".j-markup-editor").text(n))
                    }, a = function(n) {
                        n !== i && (u.removeClass("comment-" + u.currentStatus).addClass("comment-" + n),
                        u.currentStatus = n)
                    }, f;
                    if (l.index() === 0) {
                        f = p(u.data("id"), 0);
                        f && (o(f.processedBody),
                        s(f.body));
                        return
                    }
                    var h = u.data("id")
                      , c = l.val()
                      , e = p(h, c);
                    e ? (o(e.processedBody),
                    s(e.body),
                    a(e.revisionStatus)) : (u.mask(),
                    n.get(t.Routes.Instance.CommentGetCommentRevision(h, c), function(n) {
                        n && n.status === "success" && (r.push(new y(h,c,n.body,n.processedBody,n.revisionStatus)),
                        o(n.processedBody),
                        s(n.body),
                        a(n.revisionStatus));
                        u.unmask()
                    }))
                });
                u.on("click", ".j-comment-revisions-rollback", function(i) {
                    if ((i.stopImmediatePropagation(),
                    u.find(".j-comment-revisions-select option:selected").prop("index") !== 0) && confirm("Are you sure you want to rollback to this revision?")) {
                        var r = u.data("id")
                          , f = u.find(".j-comment-revisions-select option:selected").val()
                          , e = n.cookie("RequestVerificationToken");
                        e ? n.post(t.Routes.Instance.CommentRevisionRollback(r, f), {
                            "request-verification-token": e
                        }, function() {
                            u.find(".j-comment-revisions-history").toggle()
                        }) : n.ajax({
                            url: "/refresh-request-verification-token",
                            type: "POST",
                            dataType: "json",
                            success: function() {
                                n.post(t.Routes.Instance.CommentRevisionRollback(r, f), {
                                    "request-verification-token": n.cookie("RequestVerificationToken")
                                }, function() {
                                    u.find(".j-comment-revisions-history").toggle()
                                })
                            }
                        })
                    }
                });
                u.on("click", ".j-comment-revisions-cancel", function(t) {
                    t.preventDefault();
                    var i = u.find(".j-comment-revisions-history").toggle()
                      , r = i.is(":visible");
                    r ? n(this).addClass("selected") : (u.find(".j-comment-revisions-select option").length > 0 && u.find(".j-comment-revisions-select option:eq(0)").attr("selected", "selected").change(),
                    n(this).removeClass("selected"))
                })
            }
        }
        function ct() {
            n("body").on("click", "div.j-comment-actions a.spam-post", function(r) {
                var u, f, e, s, h;
                (r.preventDefault(),
                u = n(this),
                u.hasClass("disabled") || u.hasClass("loading")) || (f = u.attr("data-confirm-message"),
                e = u.attr("data-parent-selector"),
                !f && u.hasClass("confirm") && (f = "Are you sure?"),
                f === i || confirm(f)) && (s = u.attr("href"),
                h = n("<form>").attr("method", "post").attr("action", s).hide(),
                u.parent().append(h),
                u.hasClass("silent") || u.addClass("loading"),
                t.Utils.getRequestVerificationToken().done(function(n) {
                    t.Forms.AjaxPostSubmit(u, n).done(function() {
                        var n, t;
                        e !== i && e !== "" && (n = $this.parents(e),
                        n.fadeOut(function() {
                            n.remove()
                        }));
                        t = u.closest(".j-comment");
                        o(t)
                    })
                }))
            })
        }
        function lt() {
            n("body").on("click", "div.j-comment-actions a.spam-sig-post", function(r) {
                var u, f, e, s, h;
                (r.preventDefault(),
                u = n(this),
                u.hasClass("disabled") || u.hasClass("loading")) || (f = u.attr("data-confirm-message"),
                e = u.attr("data-parent-selector"),
                !f && u.hasClass("confirm") && (f = "Are you sure?"),
                f === i || confirm(f)) && (s = u.attr("href"),
                h = n("<form>").attr("method", "post").attr("action", s).hide(),
                u.parent().append(h),
                u.hasClass("silent") || u.addClass("loading"),
                t.Utils.getRequestVerificationToken().done(function(n) {
                    t.Forms.AjaxPostSubmit(u, n).done(function() {
                        var n, t;
                        e !== i && e !== "" && (n = $this.parents(e),
                        n.fadeOut(function() {
                            n.remove()
                        }));
                        t = u.closest(".j-comment");
                        o(t)
                    })
                }))
            })
        }
        function o(i) {
            var r = i.data("id")
              , u = "/comments/" + r + "/get-partial-view";
            i.mask();
            n.get(u, function(n) {
                i.parent().replaceWith(n.View);
                e();
                i.unmask()
            });
            t.UI.bindSpoilers()
        }
        function b() {
            n("body").on("click", "div.j-comment-actions a.undelete-post", function(t) {
                var r, u, f, s, o;
                (t.preventDefault(),
                r = n(this),
                r.hasClass("disabled") || r.hasClass("loading")) || (u = r.attr("data-confirm-message"),
                f = r.attr("data-parent-selector"),
                u || (u = "Are you sure you want to undelete this comment?"),
                u === i || confirm(u)) && (s = r.attr("href"),
                o = n("<form>").attr("method", "post").attr("action", s).hide(),
                r.parent().append(o),
                r.hasClass("silent") || r.addClass("loading"),
                o.ajaxSubmit(function(n) {
                    var t, u, o;
                    n.ThreadUndeleted && location.reload(!0);
                    r.removeClass("loading");
                    f !== i && f !== "" && (t = $this.parents(f),
                    t.fadeOut(function() {
                        t.remove()
                    }));
                    u = r.closest(".j-comment");
                    o = u.parent();
                    o.replaceWith(n.View);
                    e()
                }))
            })
        }
        function at() {
            n("body").on("change", ".comment-move-form #field-choose-type input", function() {
                var t = n(".comment-move-form")
                  , i = t.find("#form-field-search-specific-forums")
                  , r = t.find("#form-field-forum")
                  , u = t.find("#form-field-thread-title")
                  , f = t.find("#form-field-existing-thread-url");
                n(this).is(":checked") && (n(this).val() === "Move Post(s) to New Thread" ? (i.show(),
                r.show(),
                u.show(),
                f.hide()) : (i.hide(),
                r.hide(),
                u.hide(),
                f.show()))
            })
        }
        function vt() {
            yt();
            pt();
            var r = "Cobalt.Comment.MultiQuote"
              , i = n(".j-multi-quote-container");
            t.runOnHtmlInsert(function() {
                var t, u, f;
                n("#comments").length > 0 && (t = n.cookie(r),
                t ? (u = s(t),
                f = n("#comments").find(".j-comment:first").attr("data-parent-id"),
                f !== u.parentID ? n.cookie(r, null) : (i.find(".j-quote-number").text(u.commentIDs.length),
                i.removeClass("hide"))) : i.addClass("hide"))
            });
            n("#comments").on("click", ".j-comment-multi-quote", function(t) {
                var f, u;
                t.preventDefault();
                f = n(this);
                f.toggleClass("multi-quote-selected");
                var o = f.parents(".j-comment")
                  , h = o.attr("data-parent-id")
                  , e = o.attr("data-id")
                  , c = n.cookie(r);
                c ? (u = s(c),
                u.parentID === h && (n.inArray(e, u.commentIDs) > -1 ? u.commentIDs.splice(n.inArray(e, u.commentIDs), 1) : u.commentIDs.push(e),
                i.find(".j-quote-number").text(u.commentIDs.length),
                n.cookie(r, u.parentID + "-" + (u.commentIDs.length > 0 ? u.commentIDs.join() : "")),
                u.commentIDs.length <= 0 ? (i.addClass("hide"),
                f.removeClass("multi-quote-selected")) : i.removeClass("hide"))) : (n.cookie(r, h + "-" + e),
                i.find(".j-quote-number").text("1"),
                i.removeClass("hide"))
            })
        }
        function s(n) {
            var t = /^(.*?)\-(.*?)$/g.exec(n);
            return t ? {
                parentID: t[1],
                commentIDs: t[2].split(",").clean()
            } : {
                parentID: null,
                commentIDs: []
            }
        }
        function yt() {
            n(".j-multi-quote-reply").on("click", function() {
                var u = "Cobalt.Comment.MultiQuote", o = n(this), i, r, e, t;
                if (o.is(":visible") && (i = n.cookie(u),
                i)) {
                    for (r = s(i),
                    e = n("#reply").find(".j-comment-form"),
                    t = 0; t < r.commentIDs.length; t++)
                        f(e, r.commentIDs[t]);
                    n.cookie(u, null);
                    n(".j-multi-quote-container").addClass("hide");
                    window.location.hash = "#reply";
                    n(".j-comment-multi-quote").removeClass("multi-quote-selected")
                }
            })
        }
        function pt() {
            n(".j-multi-quote-clear").on("click", function() {
                n.cookie("Cobalt.Comment.MultiQuote", null);
                n(".j-multi-quote-container").addClass("hide");
                n(".j-comment-multi-quote").removeClass("multi-quote-selected")
            })
        }
        function wt(i) {
            var u, r;
            if (i && (u = t.Comment.anchorScrollHeight,
            i.charAt(0) == "#")) {
                try {
                    r = n("div" + i)
                } catch (f) {
                    return !1
                }
                r.length && (n("html, body").animate({
                    scrollTop: r.offset().top - u
                }),
                window.location.hash !== i && window.history && window.history.pushState && window.history.pushState({}, document.title, window.location.pathname + i))
            }
        }
        function k() {
            n("div.g-recaptcha").each(function() {
                grecaptcha.reset(n(this).attr("widgetID"))
            })
        }
        function bt() {
            n(t.Comment.commentSelector).each(function() {
                var f = n(this).attr("data-surrogate-id"), u = 0, i, r;
                isNaN(t.User.userID) || (u = t.User.userID);
                u == f && (i = n(this).find(".j-user-ignore"),
                i.length > 0 && i.hide(),
                r = n(this).find(".j-notification-sub"),
                r.length > 0 && r.parent().hide())
            })
        }
        t.Comment = {
            anchorScrollHeight: 35,
            priority: 2,
            commentCreatedFunctions: [],
            commentSelector: ".j-comment",
            dependentScripts: function() {
                return [{
                    dependency: t.TinyMCE,
                    name: "Cobalt.TinyMCE"
                }, {
                    dependency: t.Warning,
                    name: "Cobalt.Warning"
                }]
            },
            onCommentCreated: function(n) {
                t.Comment.commentCreatedFunctions.push(n)
            },
            commentCreated: function(n, i, r) {
                for (var u = 0; u < t.Comment.commentCreatedFunctions.length; u++)
                    t.Comment.commentCreatedFunctions[u](n, i, r)
            },
            initialize: function() {
                t.runOnHtmlInsert(function(i) {
                    i.find("form.comment-form").each(g);
                    i.find("div.j-comment").each(function() {
                        var t = n(this)
                          , i = t.find(".j-comment-body");
                        t.data("preprocessedBody", i.html());
                        w(t)
                    });
                    st();
                    t.Warning.handleWarnForm(t.Comment.warningSuccess);
                    t.Comment.absolutifyLinks()
                });
                n(".comment .user-action-edit a").live("click", nt);
                n(".comment .user-action-quote a").live("click", ut);
                vt();
                n(".comment .user-action-reply a").live("click", ft);
                n(".p-forum .comment-spam > .expandable").hide();
                n(".p-forum .comment-deleted > .expandable").hide();
                n(".p-forum .comment-mute-banned > .expandable").hide();
                n(".p-forum .comment-deleted-with-note > .expandable").hide();
                ht();
                bt();
                ct();
                lt();
                b();
                at();
                t.MultiFileUpload.addAttachmentPadding();
                n("button#field-preview-submit").click(function() {
                    var t = n(this);
                    t.find("span").text("Cancel Preview");
                    t.click(function(t) {
                        t.preventDefault();
                        n("div#comment-preview").remove();
                        n(this).find("span").text("Preview");
                        n(this).unbind("click")
                    })
                });
                wt(window.location.hash)
            },
            warningSuccess: function(t, i) {
                t.ThreadDeleted && location.reload(!0);
                var r = n(".j-comment[data-id='" + i.data("id") + "']");
                r.length > 0 ? o(r) : location.reload(!0)
            },
            absolutifyLinks: function() {
                t.TinyMCE.options.relative_urls === !1 && n(t.Comment.commentSelector).each(function() {
                    n(this).find(".p-comment-content").each(function() {
                        n(this).find("a").each(function() {
                            var t = n(this).attr("href");
                            t !== i && t.indexOf("http://") !== 0 && t.indexOf("https://") !== 0 && t.indexOf("/") !== 0 && t.indexOf("#") !== 0 && n(this).attr("href", "http://" + n(this).attr("href"))
                        })
                    })
                })
            }
        };
        var r = []
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Constants = {
            StaticURL: null,
            initialize: function(i) {
                n.each(i, function(n, i) {
                    t.Constants[n] = i
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        var r = !1
          , u = function(t, r) {
            var u = i;
            try {
                u = n.parseJSON(r.responseText)
            } catch (f) {
                u = i
            }
            u !== i && u !== null && u.result === "AjaxRedirect" && (document.location = u.url)
        }
          , f = function(i, u, f) {
            var h;
            if (!r && f.mode !== "abort" && u.status !== 0) {
                var s = "Error"
                  , e = ""
                  , o = u.status;
                (t.Constants.ActiveConfiguration != "production" || o != 404) && (o && u.statusText && (s = s + " - " + u.statusText),
                o && (e += "HTTP Code: " + o + "\n"),
                u.statusText && (e += "Status Text: " + u.statusText + "\n"),
                e += "Address: " + location.href + "\n",
                e += "Date: " + new Date + "\n",
                f.url && (h = f.type || "GET",
                e += "Request: " + h + " " + f.url + "\n"),
                n("<div/>").append(n("<div/>").html("We apologize but an unexpected error occured. <i>This is our fault, and the error has been logged<\/i>. If you want to report this to us include the following information:").css("padding-bottom", "1em")).append(n("<textarea/>").val(e).css("height", "150px")).dialog({
                    draggable: !1,
                    modal: !0,
                    title: s,
                    resizable: !1,
                    dialogClass: "modal"
                }).parent().center())
            }
        };
        t.Core = {
            priority: 1,
            initialize: function() {
                t.Core.mapRoutes();
                t.Core.initializeContent()
            },
            initializeContent: function() {
                var o, s;
                n(window).bind("beforeunload", function() {
                    r = !0
                });
                t.User.drawLanguageSelection();
                n("body").ajaxError(f);
                n(document).on("ajaxSuccess", u);
                t.runOnHtmlInsert(function(n) {
                    n.find(".no-select").disableSelection()
                });
                t.runOnHtmlInsert(function(n) {
                    n.find("input.auto-select").click(function() {
                        this.select()
                    })
                });
                t.runOnHtmlInsert(function(n) {
                    n.find(".tip,.j-tooltip").tooltip()
                });
                t.runOnHtmlInsert(function(n) {
                    n.find(".ui-dialog").addClass("p-modal-a")
                });
                n(window).delegate("body", "click", t.Core.processDocumentClick);
                var e = {
                    imageLoading: t.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-ico-loading.gif",
                    imageBtnPrev: t.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-prev.gif",
                    imageBtnNext: t.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-next.gif",
                    imageBtnClose: t.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-close.gif",
                    imageBlank: t.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-blank.gif"
                }
                  , h = "NicknameCreditSite" + t.Constants.SiteID + "_User" + t.User.ID
                  , c = n.cookie(h)
                  , l = window.location.href.indexOf("twitch-merge") == -1 && window.location.href.indexOf("twitch-login") == -1;
                c && l && n.get("/change-nickname/" + c + "/json", function(r) {
                    var u, f, e;
                    if (r && r.html) {
                        u = n(r.html);
                        t.triggerHtmlInsert(u);
                        u.dialog({
                            modal: !0,
                            width: 500,
                            height: 320,
                            dialogClass: "p-change-nickname-modal",
                            closeOnEscape: !1,
                            open: function() {
                                n(".ui-dialog-titlebar").hide()
                            },
                            close: function() {
                                u.dialog("destroy");
                                u.remove()
                            }
                        });
                        f = n("#change-nickname-form");
                        e = n.cookie("NicknameMerge" + t.Constants.SiteID);
                        e && f.find("#field-new-username").val(e);
                        f.ajaxForm({
                            success: function(r) {
                                r.status !== i && r.status !== "invalid" ? (n.cookie(h, null),
                                n.cookie("NicknameMerge" + t.Constants.SiteID, null),
                                r.nickname && r.nickname !== "" && (n("ul.t-netbar-account a.t-netbar-label").text(" Welcome, " + r.nickname + "!"),
                                n("li.user span.user-name").text(r.nickname)),
                                u.dialog("close")) : r.errors && t.Forms.displayErrors(f, r.errors)
                            }
                        });
                        f.find("#field-new-username").on("keypress", function(t) {
                            t.which == 13 && n(this).val() && f.find("#field-submit").click()
                        })
                    }
                });
                n(".forum-topics-page-block").length > 0 && (o = n.cookie(t.ForumFilters.getCookieName(t.User.ID)),
                o && t.ForumFilters.updatePageBlock(o));
                t.runOnHtmlInsert(function() {
                    n("a.lightbox").lightBox(e)
                });
                t.runOnHtmlInsert(function(t) {
                    n(".j-gallery-post-widget").each(function(t, i) {
                        n(i).find(".gallery-lightbox").lightBox(e)
                    });
                    t.find(".j-gallery-post-widget").each(function(t, i) {
                        n(i).find(".gallery-lightbox").lightBox(e)
                    })
                });
                s = ["info", "tip", "success", "warning", "error", "interstitial"];
                t.Core.processFlashMessages("FlashMessage", s);
                setInterval(function() {
                    t.Core.processFlashMessages("FlashMessageAjax", s)
                }, 2500);
                n("body").delegate(".modal a.close", "click", function() {
                    var t = n(this).parents(".modal");
                    return t.hide(),
                    t.trigger("hide"),
                    !1
                });
                n("body").delegate(".flash-messages .message-close", "click", function(t) {
                    n(this).parents(".message").slideUp();
                    t.preventDefault()
                });
                n("body").delegate(".flash-messages .message-no", "click", function(t) {
                    n(this).parents(".message").slideUp();
                    t.preventDefault()
                });
                t.runOnHtmlInsert(function() {
                    (t.Constants == null || t.Constants.IgnoredUserIDs == null || t.Constants.IgnoredUserIDs.length != 0) && n.each(t.Constants.IgnoredUserIDs, function(t, i) {
                        n(".forum-threads").length > 0 ? n("[data-author-id=" + i + "]").find(".thread-author").append("<span class='ignoring-user'>(You are ignoring this user)<\/span>") : n("[data-author-id=" + i + "]").remove()
                    })
                });
                t.runOnHtmlInsert(function(t) {
                    t.find(".j-playlist-item").on("click", ".j-playlist-action", function() {
                        var i = n(this)
                          , r = i.parents(".audio-gallery").find("audio.j-media-player");
                        r.length > 0 && r.each(function() {
                            n(this).attr("src") === i.data("url") ? i.hasClass("playing") ? this.player.pause() : (this.player.play(),
                            i.addClass("playing").find("i").removeClass("u-icon-play").addClass("u-icon-pause")) : (this.player.pause(),
                            this.player.setSrc(i.data("url")),
                            this.player.play(),
                            t.find(".j-playlist-item .playing").removeClass("playing").find("i").removeClass("u-icon-pause").addClass("u-icon-play"),
                            i.addClass("playing").find("i").removeClass("u-icon-play").addClass("u-icon-pause"));
                            this.addEventListener("ended", function() {
                                i.removeClass("playing").find("i").removeClass("u-icon-pause").addClass("u-icon-play")
                            }, !0);
                            this.addEventListener("pause", function() {
                                i.removeClass("playing").find("i").removeClass("u-icon-pause").addClass("u-icon-play")
                            }, !0)
                        })
                    })
                });
                t.runOnHtmlInsert(function(r) {
                    r.find(".expandable,.j-expandable").each(function() {
                        var r = n(this), u, f, s = r.attr("data-related-button"), o, e;
                        s && (u = r.parent().find(s),
                        f = u.attr("data-persist-cookie") || r.attr("data-persist-cookie"));
                        f === i && (f = r.attr("data-persist-cookie"));
                        r.attr("processed") != "true" && (u || (u = r.prev().is(".expandable-link") ? r.prev() : n('<a class="expand-link" href="#">'),
                        r.before(u)),
                        u.data("show-arrow") === !0 && (o = n('<a class="expand-link" href="#">'),
                        u.after(o),
                        o.click(function(n) {
                            n.preventDefault();
                            u.click()
                        })),
                        e = !1,
                        f && n.cookie(f) ? e = n.cookie(f) == "1" : r.hasClass("expanded-by-default") && (e = !0),
                        e ? (r.removeClass("u-hidden").removeClass("hidden"),
                        u && u.addClass("expanded")) : r.hasClass("expanded-by-default") && !e && r.hide(),
                        t.Core.setExpandableLinkText(r, u),
                        u.click(function(n) {
                            t.Core.handleExpandableClick(u, r, f, o);
                            n.preventDefault()
                        }),
                        r.attr("processed", "true"))
                    })
                });
                n.browser.msie === !0 && +n.browser.version < 9 && t.Core.handleIE();
                t.runOnHtmlInsert(function(r) {
                    var u = r.find("input[type=text].date");
                    u.datepicker({
                        changeMonth: !0,
                        changeYear: !0,
                        yearRange: "-100:+10"
                    });
                    u.each(function(t, i) {
                        n(i).blur()
                    });
                    r.find("[data-date-time-watermark-format]").each(function() {
                        n(this).watermark(n(this).attr("data-date-time-watermark-format"))
                    });
                    r.find("[data-date-time-mask-format]").each(function() {
                        n(this).mask(n(this).attr("data-date-time-mask-format"))
                    });
                    r.find(".listing-client-side").each(function() {
                        n(this).grid({
                            pagerElements: i
                        })
                    });
                    r.find(".delete-prompt, .user-action-delete-prompt a").each(function() {
                        var i = n(this);
                        t.Utils.setConfirmDelete(i)
                    });
                    r.find(".hidden-prompt").each(function() {
                        var i = n(this);
                        t.Utils.setPromptHidden(i)
                    });
                    r.find("[data-prompt-message]").each(function() {
                        var i = n(this);
                        t.Utils.setPrompt(i)
                    });
                    r.find("[data-ajax-load-url]").each(function() {
                        var i = n(this)
                          , u = i.attr("data-ajax-load-url")
                          , r = parseFloat(i.attr("data-ajax-load-time"));
                        (!isFinite(r) || r < 0) && (r = 0);
                        setTimeout(function() {
                            n.get(u, function(n) {
                                i.html(n);
                                t.triggerHtmlInsert(i)
                            })
                        }, r)
                    })
                });
                t.BulkModeration.initialize();
                t.runOnHtmlInsert(function(i) {
                    i.find("[data-user-only]").each(function() {
                        var i = n(this)
                          , r = i.attr("data-user-only");
                        r != t.User.userID || i.attr("data-ignore-user-only") || i.removeAttr("data-user-only").show()
                    });
                    i.find("[data-user-except]").each(function() {
                        var i = n(this)
                          , r = i.attr("data-user-except");
                        r != t.User.userID && i.removeAttr("data-user-except").show()
                    })
                });
                t.runOnHtmlInsert(function(i) {
                    var r = i.find("select.entity-protection, select.forum-visibility, select.page-visibility, select.post-visibility, select.category-visibility");
                    r.length > 0 && r.each(function(i, r) {
                        n(r).is("select") && t.Core.bindVisibilityField(n(r))
                    })
                });
                n("body").delegate("a.print", "click", function() {
                    window.print()
                });
                n.extend(n.ui.dialog.prototype.options, {
                    modal: !0,
                    resizable: !1,
                    draggable: !1
                });
                n(".report-translations a").click(function(i) {
                    i.preventDefault();
                    var u = t.Utils.queryStringToObject()
                      , r = "";
                    n(this).hasClass("cancel-reporting") ? r = t.Utils.removeFromQueryString("report-translations") : (u["report-translations"] = !0,
                    r = t.Utils.objectToQueryString(u));
                    window.location.search = r
                })
            },
            bindVisibilityField: function(t) {
                var r = n(t)
                  , i = r.parents("form").find(".entity-role-requirements, .forum-role-required, .page-role-required, .post-role-required, .category-role-required").parents(".form-field");
                i.hide();
                r.val() == 2 && i.show();
                r.change(function() {
                    var t = n(this).val();
                    i.hide();
                    t === "2" ? i.show() : i.hide()
                })
            },
            mapRoutes: function() {
                t.Rating.ratingsRoute = t.Routes.Instance.RatingGetUserRatings;
                t.AdminPanel.adminGetSubnamespacesRoute = t.Routes.Instance.CPGetSubNamespaces;
                t.AdminPanel.adminGetRouteNamesRoute = t.Routes.Instance.CPGetRoutesForController;
                t.Shoutbox.getNewCommentsRoute = t.Routes.Instance.ShoutboxGetNewComments;
                t.Shoutbox.deleteMessageRoute = t.Routes.Instance.ShoutboxDeleteMessage;
                t.Shoutbox.addMessageRoute = t.Routes.Instance.ShoutboxAddMessage;
                t.Shoutbox.showShoutboxRoute = t.Routes.Instance.ShoutboxGetShowShoutboxPreference;
                t.Shoutbox.saveShowShoutboxPreferenceRoute = t.Routes.Instance.ShoutboxSaveShowShoutboxPreference;
                t.Rating.ratingsRoute = t.Routes.Instance.RatingGetUserRatings;
                t.MultiFileUpload.deleteAttachmentRoute = t.Routes.Instance.AttachmentDeleteAttachment
            },
            htmlDecode: function(n) {
                var t = n.replace(/\&amp;/g, "&");
                return t = t.replace(/\&lt;/g, "<"),
                t = t.replace(/\&gt;/g, ">"),
                t = t.replace(/\&quot;/g, '"'),
                t.replace(/\&#x27;/g, "'")
            },
            addFlashMessage: function(t, i, r) {
                var f = "FlashMessage." + i
                  , e = JSON.stringify({
                    Message: t,
                    Data: r
                })
                  , u = document.domain.split(".")
                  , o = "." + u[1] + "." + u[2];
                n.cookie(f, e, {
                    path: "/",
                    domain: o
                })
            },
            processFlashMessages: function(i, r) {
                n(document).ready(function() {
                    n.each(r, function(r, u) {
                        var h = i + "." + u, o = n.cookie(h), f, e, s, c;
                        if (o) {
                            if (o = unescape(o).replace(/\+/g, " "),
                            f = JSON.parse(o),
                            !f)
                                return;
                            f.Message = t.Core.htmlDecode(f.Message);
                            e = n("<div>").addClass("message message-" + u + " flash-message flash-message-" + u);
                            n(".flash-messages").length == 0 && n("body").prepend(n('<div class="flash-messages"><\/div>'));
                            n(e).text(f.Message);
                            f.Data && f.Data.Actions && n.each(f.Data.Actions, function(i, r) {
                                if (r.link && !(r.link.indexOf(":") > -1 || r.link.indexOf("//") > -1)) {
                                    var u = n("<a>").addClass("button").text(t.Core.htmlDecode(r.text));
                                    r.cssClass && n(u.addClass(r.cssClass));
                                    n(u).attr("href", r.link);
                                    n(e).append(u)
                                }
                            });
                            n(e).append(n('<a href="#" class="message-close"><\/a>')).hide();
                            n(e).appendTo(n(".flash-messages")).slideDown();
                            s = document.domain.split(".");
                            c = "." + s[1] + "." + s[2];
                            n.removeCookie(h, {
                                domain: c,
                                path: "/"
                            });
                            u == "success" && setTimeout(function() {
                                e.slideUp()
                            }, 5e3)
                        }
                    })
                })
            },
            processDocumentClick: function(t) {
                var f, i, r, u;
                if (n(t.target).is("label[for=page]"))
                    return !1;
                f = n("#goto-page");
                n("#goto-page:visible").length > 0 && !n(t.target).parents().andSelf().is("#goto-page") && f.hide();
                i = n("#forum-tools");
                i.length > 0 && !n(t.target).parents().andSelf().is("#forum-tools") && i.hide();
                r = n(".time-selector");
                r.length > 0 && !n(t.target).parents().andSelf().is(".time-selector") && !n(t.target).parents().andSelf().is("input.date-time.time") && r.hide();
                u = n(".date-events");
                u.length > 0 && !n(t.target).parents().andSelf().is(".date-events") && u.hide()
            },
            setExpandableLinkText: function(n, t) {
                var i = i, r, u;
                t.hasClass("expanded") ? (u = t.attr("data-hide-text"),
                i = u ? u : "Hide") : (r = t.attr("data-show-text"),
                i = r ? r : "Show");
                n.removeClass("not-hidden");
                t.is(".button") ? t.children("span").text(i) : t.text(i)
            },
            handleExpandableClick: function(i, r, u, f) {
                var o = i
                  , e = r
                  , s = f;
                u && n.cookie(u, e.is(":visible") ? 0 : 1, {
                    path: "/",
                    expires: 365
                });
                e.is(":visible") ? (o.removeClass("expanded"),
                s && s.removeClass("expanded"),
                e.removeClass("expanded-panel"),
                e.slideUp("fast", function() {
                    t.Core.setExpandableLinkText(e, o)
                })) : (e.removeClass("u-hidden").removeClass("hidden"),
                o.addClass("expanded"),
                s && s.addClass("expanded"),
                e.slideDown("fast", function() {
                    t.Core.setExpandableLinkText(e, o);
                    e.addClass("expanded-panel")
                }));
                t.Core.setExpandableLinkText(e, o)
            },
            handleIE: function() {
                (function(n, i) {
                    var r = function(t, r) {
                        var u = n(this), f;
                        u.is("input:checkbox") && (f = r != i ? n(r) : n("label[for='" + u.attr("id") + "']"),
                        u.is(":checked") ? f.addClass("check-checked").removeClass("check-unchecked") : f.addClass("check-unchecked").removeClass("check-checked"))
                    };
                    n("input:checkbox").live("change", r);
                    n("input:checkbox").each(function(t, i) {
                        var r = n(i)
                          , u = n("label[for='" + r.attr("id") + "']");
                        u.length > 0 && r.trigger("change", u)
                    });
                    t.Forms.fixIEButtons()
                }
                )(jQuery)
            },
            processPrivacyPolicy: function() {
                n(document).ready(function() {
                    var i = "Auth.PrivacyPolicy.Signed"
                      , r = n.cookie(i)
                      , u = parseInt(t.Constants.PrivacyPolicyLastUpdated);
                    u > 0 && (!r || u > parseInt(r)) && n(".privacy-policy-change").length == 0 && n.get(t.Routes.Instance.AuthenticationPrivacyPolicyJson(), function(r) {
                        var f = document.domain.split("."), u = "." + f[1] + "." + f[2], e;
                        r.result == "unsigned" ? (n("body").prepend(n('<div class="privacy-policy-change"><\/div>')),
                        e = n("<div>").addClass("policy-message"),
                        n(e).html(r.html).appendTo(n(".privacy-policy-change")).slideDown(),
                        n('[data-action="accept-policy-change"]').click(function(r) {
                            n(this).parents(".privacy-policy-change").slideUp();
                            n.get(t.Routes.Instance.AuthenticationPrivacyPolicySignedJson(), function(t) {
                                t.result == "success" ? n.cookie(i, t.date, {
                                    domain: u,
                                    path: "/",
                                    expires: 365
                                }) : n.cookie(i, t.date, {
                                    domain: u,
                                    path: "/",
                                    expires: 30
                                })
                            });
                            r.preventDefault()
                        })) : r.result == "signed" && n.cookie(i, r.date, {
                            domain: u,
                            path: "/",
                            expires: 365
                        })
                    })
                })
            },
            withRequestVerificationToken: function(t) {
                var i = n.cookie("RequestVerificationToken");
                if (i) {
                    t(i);
                    return
                }
                n.ajax({
                    url: "/refresh-request-verification-token",
                    type: "POST",
                    dataType: "json",
                    async: !1,
                    success: function() {
                        i = n.cookie("RequestVerificationToken");
                        t(i)
                    }
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Countdown = {
            units: {
                y: 31536e3,
                w: 604800,
                d: 86400,
                h: 3600,
                m: 60,
                s: 1
            },
            initialize: function(i) {
                n(".countdown").each(function() {
                    var u = n(this), e = u.attr("data-countdown-end"), h = u.attr("data-countdown-format"), r = u.attr("data-countdown-remaining"), f = 0, o, s;
                    r && (r = parseInt(r));
                    o = function() {
                        clearInterval(s);
                        i && i()
                    }
                    ;
                    s = setInterval(function() {
                        var l, v, a, i, s, c, n;
                        e && (l = 0,
                        v = new Date,
                        l = Math.floor(v / 1e3),
                        f = e - l);
                        r && (f = r--);
                        a = 0;
                        i = h;
                        for (s in t.Countdown.units)
                            t.Countdown.units.hasOwnProperty(s) && i.indexOf("%" + s) > -1 && (c = t.Countdown.units[s],
                            n = Math.floor((f - a) / c),
                            c <= 60 && ("" + n).length == 1 && (n = "0" + n),
                            n < 0 && (n = 0),
                            i = i.replace(new RegExp("%" + s), n),
                            a += c * n);
                        u.html(i);
                        r <= 0 && o()
                    }, 1e3)
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.DateTimeField = {
            initialize: function() {
                var r = n(".date-time.time"), t, i;
                if (r.length > 0) {
                    t = t || [{
                        timeValue: "00:00",
                        timeKey: "12:00 AM"
                    }, {
                        timeValue: "00:30",
                        timeKey: "12:30 AM"
                    }, {
                        timeValue: "01:00",
                        timeKey: "1:00 AM"
                    }, {
                        timeValue: "01:30",
                        timeKey: "1:30 AM"
                    }, {
                        timeValue: "02:00",
                        timeKey: "2:00 AM"
                    }, {
                        timeValue: "02:30",
                        timeKey: "2:30 AM"
                    }, {
                        timeValue: "03:00",
                        timeKey: "3:00 AM"
                    }, {
                        timeValue: "03:30",
                        timeKey: "3:30 AM"
                    }, {
                        timeValue: "04:00",
                        timeKey: "4:00 AM"
                    }, {
                        timeValue: "04:30",
                        timeKey: "4:30 AM"
                    }, {
                        timeValue: "05:00",
                        timeKey: "5:00 AM"
                    }, {
                        timeValue: "05:30",
                        timeKey: "5:30 AM"
                    }, {
                        timeValue: "06:00",
                        timeKey: "6:00 AM"
                    }, {
                        timeValue: "06:30",
                        timeKey: "6:30 AM"
                    }, {
                        timeValue: "07:00",
                        timeKey: "7:00 AM"
                    }, {
                        timeValue: "07:30",
                        timeKey: "7:30 AM"
                    }, {
                        timeValue: "08:00",
                        timeKey: "8:00 AM"
                    }, {
                        timeValue: "08:30",
                        timeKey: "8:30 AM"
                    }, {
                        timeValue: "09:00",
                        timeKey: "9:00 AM"
                    }, {
                        timeValue: "09:30",
                        timeKey: "9:30 AM"
                    }, {
                        timeValue: "10:00",
                        timeKey: "10:00 AM"
                    }, {
                        timeValue: "10:30",
                        timeKey: "10:30 AM"
                    }, {
                        timeValue: "11:00",
                        timeKey: "11:00 AM"
                    }, {
                        timeValue: "11:30",
                        timeKey: "11:30 AM"
                    }, {
                        timeValue: "12:00",
                        timeKey: "12:00 PM"
                    }, {
                        timeValue: "12:30",
                        timeKey: "12:30 PM"
                    }, {
                        timeValue: "13:00",
                        timeKey: "1:00 PM"
                    }, {
                        timeValue: "13:30",
                        timeKey: "1:30 PM"
                    }, {
                        timeValue: "14:00",
                        timeKey: "2:00 PM"
                    }, {
                        timeValue: "14:30",
                        timeKey: "2:30 PM"
                    }, {
                        timeValue: "15:00",
                        timeKey: "3:00 PM"
                    }, {
                        timeValue: "15:30",
                        timeKey: "3:30 PM"
                    }, {
                        timeValue: "16:00",
                        timeKey: "4:00 PM"
                    }, {
                        timeValue: "16:30",
                        timeKey: "4:30 PM"
                    }, {
                        timeValue: "17:00",
                        timeKey: "5:00 PM"
                    }, {
                        timeValue: "17:30",
                        timeKey: "5:30 PM"
                    }, {
                        timeValue: "18:00",
                        timeKey: "6:00 PM"
                    }, {
                        timeValue: "18:30",
                        timeKey: "6:30 PM"
                    }, {
                        timeValue: "19:00",
                        timeKey: "7:00 PM"
                    }, {
                        timeValue: "19:30",
                        timeKey: "7:30 PM"
                    }, {
                        timeValue: "20:00",
                        timeKey: "8:00 PM"
                    }, {
                        timeValue: "20:30",
                        timeKey: "8:30 PM"
                    }, {
                        timeValue: "21:00",
                        timeKey: "9:00 PM"
                    }, {
                        timeValue: "21:30",
                        timeKey: "9:30 PM"
                    }, {
                        timeValue: "22:00",
                        timeKey: "10:00 PM"
                    }, {
                        timeValue: "22:30",
                        timeKey: "10:30 PM"
                    }, {
                        timeValue: "23:00",
                        timeKey: "11:00 PM"
                    }, {
                        timeValue: "23:30",
                        timeKey: "11:30 PM"
                    }];
                    n(r).on("focus", function() {
                        var i = n(this), r = n(".time-selector"), e, f, u;
                        if (r.length <= 0) {
                            for (r = n("<div>"),
                            r.addClass("time-selector").css("top", i.position().top + i.outerHeight(!0) + "px").css("left", i.position().left).css("position", "absolute"),
                            e = n("<ul>"),
                            f = 0; f < t.length; f++)
                                u = n("<li>"),
                                u.addClass("row"),
                                u.addClass("time-value-selector"),
                                u.attr("data-time-value", t[f].timeKey),
                                u.html("<a>" + t[f].timeKey + "<\/a>"),
                                e.append(u);
                            r.append(e)
                        } else
                            r.css("top", i.position().top + i.outerHeight(!0) + "px").css("left", i.position().left),
                            r.show();
                        i.after(r);
                        n(".time-selector .row").unbind("mousedown");
                        n(".time-selector .row").on("mousedown", function() {
                            i.val(n(this).attr("data-time-value"));
                            r.hide();
                            i.change()
                        })
                    });
                    i = null;
                    n(document).on("mousedown", function(t) {
                        i = n(t.target)
                    });
                    n(r).on("blur", function() {
                        var t = n(".time-selector");
                        !t.is(":visible") || i.hasClass("time-selector") || n.contains(t, i) || t.hide();
                        i = null
                    });
                    n("body").click(function(t) {
                        var r = n(t.target)
                          , i = n(".time-selector");
                        !i.is(":visible") || r.hasClass("time") || n.contains(i, r) || i.hide()
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.DayTimeSelector = {
            startEndSelectors: ["start", "end"],
            initialize: function() {
                n(".day-time-selector.editable .day").click(function(i, r) {
                    var u = n(this).parents(".day-of-week"), e = u.find(".time-value, .time-start, .time-end"), f;
                    u.hasClass("active") ? (e.css("visibility", "hidden"),
                    u.removeClass("active")) : (e.css("visibility", "visible"),
                    u.addClass("active"));
                    r || (f = u.parents(".day-time-selector"),
                    f.trigger("change"),
                    t.DayTimeSelector.updateInputFieldsFromForm(f))
                });
                n(".day-time-selector.editable").each(function() {
                    var r = n(this), f = n(this).parents(".day-time-selector-field"), u, i;
                    f.length == 1 && r.data("form", f);
                    u = (new Date).getTimezoneOffset() * -1;
                    i = r.find(".time-zone .zones");
                    r.find(".time-zone .go-next").click(function() {
                        return i.val(i.find(":selected").next().attr("value")),
                        i.change(),
                        !1
                    });
                    r.find(".time-zone .go-prev").click(function() {
                        return i.val(i.find(":selected").prev().attr("value")),
                        i.change(),
                        !1
                    });
                    i.change(function() {
                        r.find(".time-zone .time-zone-display").text(i.find(":selected").text())
                    });
                    i.children("[value=" + u + "]").length == 1 ? i.val(u) : i.val(0);
                    i.change();
                    t.DayTimeSelector.updateFormFromInputFields(r)
                });
                n(".day-time-selector.editable .time-add, .day-time-selector.editable .time-minus").click(function(r, u) {
                    var e = n(this), y = e.hasClass("time-start"), h = e.hasClass("time-add"), o, l, f, s, a, c, v;
                    o = h ? e.prev() : e.next();
                    l = h ? 30 : -30;
                    f = o.data("time");
                    f += l;
                    f > 1410 ? f = 0 : f < 0 && (f = 1410);
                    o.data("time", f);
                    s = e.parents(".day-of-week").find(".time-" + (y ? "end" : "start") + "-value");
                    a = s.data("time");
                    f == a && (h ? s.next().click() : s.prev().click());
                    u != i && u || (c = o.parents(".day-time-selector"),
                    c.trigger("change"),
                    t.DayTimeSelector.updateInputFieldsFromForm(c));
                    v = t.DayTimeSelector.getFormattedTime(f);
                    o.text(v)
                });
                n(".day-time-selector.editable .time-add-all, .day-time-selector.editable .time-minus-all").click(function() {
                    var r = n(this)
                      , i = r.parents(".day-time-selector")
                      , u = i.find(".day-of-week.active").length;
                    if (u > 0) {
                        var f = r.hasClass("time-add-all")
                          , e = r.hasClass("time-start")
                          , o = ".day-of-week.active .time-" + (f ? "add" : "minus") + ".time-" + (e ? "start" : "end");
                        i.find(o).trigger("click", {
                            fromCode: !0
                        });
                        t.DayTimeSelector.updateInputFieldsFromForm(i);
                        i.trigger("change")
                    }
                })
            },
            getFormattedTime: function(n) {
                var t = Math.floor(n / 60)
                  , i = n % 60;
                return (t < 10 ? "0" + t : t) + ":" + (i < 10 ? "0" + i : i)
            },
            updateInputFieldsFromForm: function(t) {
                var r = t.data("form"), u;
                r != i && (u = r.find(".input-fields"),
                r.find(".day-of-week").each(function() {
                    var t = n(this), f = t.attr("data-day").toLowerCase(), i, r;
                    t.hasClass("active") ? (i = t.find(".time-start-value").data("time"),
                    r = t.find(".time-end-value").data("time")) : (i = null,
                    r = null);
                    u.find("#field-" + f + "-start").val(i);
                    u.find("#field-" + f + "-end").val(r)
                }))
            },
            updateFormFromInputFields: function(r) {
                var f = !1, e = r.data("form"), u;
                e != i && (f = !0,
                u = e.find(".input-fields"));
                r.find(".day-of-week").each(function() {
                    var i = n(this)
                      , c = i.find(".time-start-value")
                      , l = i.find(".time-end-value")
                      , r = 1020
                      , e = 1380;
                    if (f) {
                        var o = i.attr("data-day")
                          , s = parseInt(u.find("#field-" + o + "-start").val())
                          , h = parseInt(u.find("#field-" + o + "-end").val());
                        isNaN(s) || isNaN(h) || (r = s,
                        e = h,
                        i.find(".day").trigger("click", {
                            fromCode: !0
                        }))
                    }
                    t.DayTimeSelector.setTimeValue(c, r);
                    t.DayTimeSelector.setTimeValue(l, e)
                })
            },
            setTimeValue: function(n, i) {
                n.text(t.DayTimeSelector.getFormattedTime(i));
                n.data("time", i)
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        var t = function() {
            function n() {}
            return Object.defineProperty(n, "Properties", {
                get: function() {
                    return {
                        osx: this.OSX,
                        ios: this.iOS,
                        iphone: this.iPhone,
                        ipad: this.iPad,
                        android: this.Android,
                        blackberry: this.BlackBerry,
                        windows: this.Windows,
                        mobile: this.Mobile,
                        tablet: this.Tablet,
                        portrait: this.Portrait,
                        landscape: this.Landscape
                    }
                },
                enumerable: !0,
                configurable: !0
            }),
            n.ResponsiveCookieName = function() {
                return "ResponsiveSwitch.DesktopMode"
            }
            ,
            n.Find = function(n) {
                return this.UserAgent.indexOf(n) !== -1
            }
            ,
            Object.defineProperty(n, "OSX", {
                get: function() {
                    return this.Find("mac os x") && !this.iOS
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "iOS", {
                get: function() {
                    return this.iPhone || this.iPod || this.iPad
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "iPhone", {
                get: function() {
                    return this.Find("iphone")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "iPod", {
                get: function() {
                    return this.Find("ipod")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "iPad", {
                get: function() {
                    return this.Find("ipad")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "Android", {
                get: function() {
                    return this.Find("android")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "AndroidPhone", {
                get: function() {
                    return this.Find("android") && this.Find("mobile")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "AndroidTablet", {
                get: function() {
                    return this.Find("android") && !this.Find("mobile")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "BlackBerry", {
                get: function() {
                    return this.Find("blackberry") || this.Find("bb10") || this.Find("rim")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "Windows", {
                get: function() {
                    return this.Find("windows")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "WindowsPhone", {
                get: function() {
                    return this.Windows && this.Find("phone")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "WindowsTablet", {
                get: function() {
                    return this.Windows && this.Find("touch")
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "Mobile", {
                get: function() {
                    return this.AndroidPhone || this.iPhone || this.iPod || this.WindowsPhone
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "Tablet", {
                get: function() {
                    return this.AndroidTablet || this.iPad || this.WindowsTablet
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "Desktop", {
                get: function() {
                    return !this.Mobile && !this.Tablet
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "Portrait", {
                get: function() {
                    return window.innerHeight > window.innerWidth
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(n, "Landscape", {
                get: function() {
                    return !this.Portrait
                },
                enumerable: !0,
                configurable: !0
            }),
            n.AddClasses = function() {
                for (var n in this.Properties)
                    this.Properties.hasOwnProperty(n) && this.Properties[n] && !this.Html.hasClass(n) && $("html").addClass(n)
            }
            ,
            n.RemoveClasses = function() {
                for (var n in this.Properties)
                    this.Properties.hasOwnProperty(n) && $("html").removeClass(n)
            }
            ,
            n.initResponsiveLayout = function() {
                var t = $.cookie(n.ResponsiveCookieName());
                t || ($.cookie(n.ResponsiveCookieName(), 1, {
                    expires: 360,
                    path: "/"
                }),
                t = $.cookie(n.ResponsiveCookieName()));
                t == "1" ? $("#responsive-footer-button").css("display", "none") : $("#responsive-footer-button").css("display", "block");
                $(".rs-link").click(function(i) {
                    i.preventDefault();
                    switch (t) {
                    case "0":
                        $.cookie(n.ResponsiveCookieName(), 1, {
                            expires: 360,
                            path: "/"
                        });
                        break;
                    case "1":
                        $.cookie(n.ResponsiveCookieName(), 0, {
                            expires: 360,
                            path: "/"
                        })
                    }
                    location.reload()
                })
            }
            ,
            n.resize = function(n) {
                n != "portrait" || this.Portrait ? n != "landscape" || this.Landscape || $("html").removeClass("landscape").addClass("portrait") : $("html").removeClass("portrait").addClass("landscape")
            }
            ,
            n.initialize = function() {
                var t = this, i;
                n.initResponsiveLayout();
                this.Html = $("html");
                this.AddClasses();
                i = $("html").hasClass("portait") ? "portrait" : "landscape";
                $(window).on("resize", function() {
                    clearTimeout(t.resizeTimer);
                    t.resizeTimer = setTimeout(function() {
                        n.resize(i)
                    }, 100)
                })
            }
            ,
            n.UserAgent = window.navigator.userAgent.toLowerCase(),
            n
        }();
        n.Device = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t) {
        var i, r = !1;
        t.Dice = {
            initialize: function() {},
            hideModal: function() {
                i.length > 0 && (i.dialog("destroy"),
                i.remove(),
                r = !1)
            },
            showModal: function(t) {
                if (!r) {
                    r = !0;
                    i = n('<div id="dice-modal">');
                    i.append("<label>Count<\/label><input id='dice-count' type='text' placeholder='Enter in number of dice to roll' />");
                    i.append("<label>Sides<\/label><input id='dice-size' type='text' placeholder='Enter in sides of dice (6)' />");
                    i.append("<label>Modifier<\/label><input id='dice-modifier-check' type='checkbox' />");
                    i.append("<select id='dice-modifier'><option value='+'>+<\/option><option value='-'>-<\/option><\/select>");
                    i.append("<input id='dice-modifier-value' type='text' placeholder='Enter in a number modifier to the end of a roll' />");
                    i.append("<span id='dice-error' style='color:red'><\/span>");
                    i.append("<input id='dice-submit' type='submit' value='OK' />");
                    i.dialog({
                        modal: !0,
                        height: 300,
                        width: 300,
                        title: "Dice Roller",
                        resizable: !1,
                        close: function() {
                            i.dialog("destroy");
                            i.remove();
                            r = !1
                        }
                    });
                    i.parent().center();
                    n("#dice-modifier").hide();
                    n("#dice-modifier-value").hide();
                    n("#dice-modal").on("change", "#dice-modifier-check", function() {
                        n.log("sup");
                        n(this).is(":checked") ? (n("#dice-modifier").show(),
                        n("#dice-modifier-value").show()) : (n("#dice-modifier").hide(),
                        n("#dice-modifier-value").hide())
                    });
                    var f = function(n) {
                        return !isNaN(parseFloat(n)) && isFinite(n)
                    }
                      , u = n("#dice-error");
                    n("#dice-modal").on("click", "#dice-submit", function(e) {
                        var o, s, c;
                        if (e.preventDefault(),
                        o = n("#dice-count").val(),
                        !f(o)) {
                            u.text("Count must be a number.");
                            return
                        }
                        if (s = n("#dice-size").val(),
                        !f(s)) {
                            u.text("Size must be a number.");
                            return
                        }
                        var l = n("#dice-modifier").val()
                          , h = n("#dice-modifier-value").val()
                          , a = n("#dice-modifier-check").is(":checked") && l && h;
                        if (a && !f(h)) {
                            u.text("Modifier must be a number.");
                            return
                        }
                        u.text("");
                        c = "[dice={0}]{1}{2}[/dice]".format(o, s, a ? l.toString() + h : "");
                        t && tinyMCE && tinyMCE.editors.length ? t.execCommand("mceInsertContent", !1, c) : n.markItUp({
                            replaceWith: c
                        });
                        i.dialog("destroy");
                        i.remove();
                        r = !1
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        var i = !1;
        t.Expandable = {
            initialize: function() {
                var u;
                if (!i) {
                    i = !0;
                    var r = "Navigation"
                      , f = 200
                      , t = "expanded";
                    n("#navigation.expandable .section > span").click(function() {
                        n(this).parent().toggleClass(t);
                        n(this).siblings("ul").toggle(f);
                        var i = "";
                        n(this).parents("#navigation").find("." + t).each(function() {
                            i += "#" + n(this).attr("id") + ","
                        });
                        n.cookie(r, i, {
                            path: "/"
                        })
                    });
                    n.cookie(r) && (u = n.cookie(r).split(","),
                    n.each(u, function(i, r) {
                        r && (n(r).toggleClass(t),
                        n(r).find("ul").toggle())
                    }));
                    n("#navigation.expandable .section .selected").each(function() {
                        n(this).parent().show();
                        n(this).parents(".section").addClass(t)
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.ExportImportSettings = {
            initialize: function() {
                n("#form-field-export-roles").hide();
                n("#form-field-export-structures").hide();
                n("#field-export-settings-role").on("change", function() {
                    n(this).prop("checked") ? (n("#form-field-export-roles").show(),
                    n("#form-field-export-roles li input").prop("checked", !0)) : n("#form-field-export-roles").hide()
                });
                n("#field-export-settings-pagestructure").on("change", function() {
                    n(this).prop("checked") ? n("#form-field-export-structures").show() : n("#form-field-export-structures").hide()
                });
                n("#form-field-export-advertising-content").hide();
                n("#field-export-settings-advertisingslot").on("change", function() {
                    n(this).prop("checked") ? n("#form-field-export-advertising-content").show() : n("#form-field-export-advertising-content").hide()
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Favorites = {
            dependentScripts: function() {
                return [{
                    dependency: t.User,
                    name: "Cobalt.User"
                }]
            },
            initialize: function() {
                var i = !1;
                n("body").delegate(".add-favorite", "click", function(r) {
                    r.preventDefault();
                    var u = n(this)
                      , f = u.attr("data-favorite-url");
                    i || (i = !0,
                    t.Core.withRequestVerificationToken(function(n) {
                        t.Favorites.favoritePost(u, f, n, !0);
                        i = !1
                    }))
                });
                n("body").delegate(".delete-favorite", "click", function(i) {
                    i.preventDefault();
                    var r = n(this)
                      , u = r.attr("data-unfavorite-url")
                      , f = n.cookie("RequestVerificationToken");
                    t.Core.withRequestVerificationToken(function(n) {
                        t.Favorites.favoritePost(r, u, n, !1)
                    })
                })
            },
            favoritePost: function(t, i, r, u) {
                n.ajax({
                    type: "POST",
                    url: i,
                    data: {
                        "request-verification-token": r
                    },
                    success: function() {
                        u ? (t.removeClass("add-favorite").addClass("delete-favorite"),
                        t.text("Remove from Favorites")) : (t.removeClass("delete-favorite").addClass("add-favorite"),
                        t.text("Add to Favorites"))
                    }
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Feedback = {
            _thankyouTitle: "",
            _thankyouText: "",
            _submitText: "",
            initialize: function() {
                var i = n("#site-feedback-block");
                i.length > 0 && i.css("visibility", "visible");
                t.Feedback.hookFeedback()
            },
            hookFeedback: function() {
                n("body").on("click", ".j-feedback, .j-feedback-tab", function(i) {
                    i.preventDefault();
                    var r = n(this)
                      , f = r.data("form-title") || "Send Us Feedback"
                      , e = r.data("max-width") || 500
                      , u = r.data("field-description")
                      , o = r.data("modal-class") || "";
                    t.Feedback._thankyouTitle = r.data("thankyou-title") || "Thank you for Feedback";
                    t.Feedback._thankyouText = r.data("thankyou-text") || "Thanks for the feedback!";
                    t.Feedback._submitText = r.data("submit-text") || "Submit Feedback";
                    n.get(t.Routes.Instance.FeedbackSend(), function(i) {
                        var s, r, h;
                        i && (s = n.parseJSON(i),
                        s.html && (r = n(s.html),
                        t.triggerHtmlInsert(r),
                        u && (h = r.find("#form-field-description label span"),
                        h.text(u)),
                        r.find(".j-submit-field > span").text(t.Feedback._submitText),
                        r.dialog({
                            dialogClass: o,
                            title: f,
                            width: e,
                            close: function() {
                                r.dialog("destroy");
                                r.remove()
                            }
                        }),
                        t.Feedback.handleFeedbackForm()))
                    })
                })
            },
            handleFeedbackForm: function() {
                var i = n("#feedback-form"), r;
                i.length > 0 && (r = i.find("form"),
                r.ajaxForm({
                    success: function(r) {
                        var u, o, f, e;
                        if (r)
                            if (u = n.parseJSON(r),
                            u.hasErrors)
                                o = i.find(".errors"),
                                o.text(u.errors.join(","));
                            else if (f = n(u.html),
                            f.find(".j-feedback-thankyou-text").text(t.Feedback._thankyouText),
                            i.empty(),
                            i.append(f),
                            n("#ui-dialog-title-feedback-form").text(t.Feedback._thankyouTitle),
                            e = i.find("a.j-feedback-close"),
                            e.length > 0)
                                e.on("click", function(t) {
                                    t.preventDefault();
                                    n("#feedback-form").parent().find("a.ui-dialog-titlebar-close").click()
                                })
                    },
                    error: function(n) {
                        if (n) {
                            var t = i.find(".errors");
                            t.text("An unknown error has occurred.")
                        }
                    }
                }))
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        function i(n) {
            function r(n) {
                return n.getAttribute("value").length > 0 || n.classList.contains("valid")
            }
            var t = n.querySelectorAll("input").length
              , i = [].slice.call(n.querySelectorAll("input[type=text]"))
              , u = i.filter(r);
            return t > 0 && t > u.length ? !1 : !0
        }
        t.FieldLists = {
            initialize: function(r) {
                r.find(".field-list").each(function() {
                    var r = n(this), u = r.find(".example-form-field"), f, e, o;
                    if (u.removeClass("example-form-field"),
                    f = u.find("input").attr("name"),
                    f || (f = u.find("select").attr("name")),
                    e = /^(.*)-(\d+)$/.exec(f),
                    e !== null) {
                        o = u.clone();
                        o.find("input").removeAttr("id");
                        u.remove();
                        var l = e[1]
                          , a = function() {
                            for (var n = 1; ; n++)
                                if (r.find("[name=" + l + "-" + n + "]").length == 0)
                                    return n
                        }
                          , h = function() {
                            var t = 0;
                            r.find(".form-field").each(function() {
                                var i = n(this);
                                t++;
                                i.find("input").each(function() {
                                    var i = /^(.*)-(\d+)$/.exec(n(this).attr("name"));
                                    i !== null && n(this).attr("name", i[1] + "-" + t)
                                })
                            })
                        }
                          , c = function(t) {
                            var i = n("<a />").attr("href", "#").addClass("remove-link").click(function() {
                                return v(t),
                                t.remove(),
                                h(),
                                !1
                            });
                            t.append(i)
                        }
                          , v = function(t) {
                            var r = t.find("input"), i, u;
                            r.length && (i = r.data("autoHide"),
                            i && (u = n("[data-auto-hide='" + i + "'][type='hidden']").remove()))
                        }
                          , s = n("<a />").attr("href", "#").text(r.data("add-label") || "New entry").addClass("field-list-new-entry").click(function() {
                            if (!i(r[0]))
                                return !1;
                            var u = o.clone()
                              , f = a();
                            return u.find("input").each(function() {
                                var t = /^(.*)-(\d+)$/.exec(n(this).attr("name"));
                                t !== null && n(this).attr("name", t[1] + "-" + f)
                            }),
                            s.before(u),
                            r.data("render-remove-link") === "True" && c(u),
                            t.triggerHtmlInsert(u),
                            !1
                        });
                        r.data("hide-add-link") === "True" && s.hide();
                        r.append(s);
                        r.data("render-remove-link") === "True" && r.find(".form-field").each(function() {
                            c(n(this))
                        });
                        r.sortable({
                            containment: "parent",
                            handle: ".sort-gripper"
                        }).bind("sortstop", function() {
                            setTimeout(h, 1)
                        })
                    } else
                        u.remove()
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    function n() {
        var n = {};
        return function() {
            for (var t, r = /\+/g, u = /([^&=]+)=?([^&]*)/g, i = function(n) {
                return decodeURIComponent(n.replace(r, " "))
            }, f = window.location.search.substring(1); t = u.exec(f); )
                n[i(t[1])] = i(t[2])
        }(),
        n
    }
    (function(t, i) {
        i.Filters = {
            initialize: function() {
                t(document).ready(function() {
                    function i(i) {
                        function f() {
                            var f = null, e = {}, i = t(".j-filters").find("input, select, textarea").filter(':not([data-bitmask-name] *, [value=""])').serialize() || "", u = n(), s = t("#dynamic-filters"), o, h;
                            s.length > 0 && (f = s.data("serialize")());
                            r.find("fieldset[data-bitmask]").each(function() {
                                var n = t(this).attr("data-bitmask-name")
                                  , i = parseInt(t(this).attr("data-bitmask"));
                                n && i && (e[n] = i)
                            });
                            t.isEmptyObject(f) || (i += (i.length ? "&" : "") + t.param(f));
                            t.isEmptyObject(e) || (i += (i.length ? "&" : "") + t.param(e));
                            u.sort && (i += (i.length ? "&" : "") + "sort=" + u.sort);
                            u.display && (i += (i.length ? "&" : "") + "display=" + u.display);
                            o = location.href;
                            location.href.indexOf("?") != -1 && (o = location.href.substr(0, location.href.indexOf("?")));
                            h = o + (i.length ? "?" + i : "");
                            location.href = h.replace(/%5B%5D/g, "")
                        }
                        function e(n) {
                            function u(n) {
                                var t = parseInt(n.val());
                                n.attr("checked") ? f(t, !0) : f(t, !1)
                            }
                            function f(t, u) {
                                var f = i;
                                t < 1 || (e ? u ? f |= t : f &= ~t : u ? f |= 1 << t - 1 : f &= ~(1 << t - 1),
                                f != i && (i = f,
                                n.attr("data-bitmask", i),
                                i == 0 ? r.hide() : r.show()))
                            }
                            var i = parseInt(n.attr("data-bitmask"))
                              , r = n.find(".delete-button")
                              , e = n.attr("data-isbitmask") == "true";
                            n.find("input[type=checkbox]").change(function() {
                                u(t(this))
                            }).change();
                            n.data("clear-all", function() {
                                n.find("input[type=checkbox]").each(function() {
                                    t(this).attr("checked", null);
                                    u(t(this))
                                })
                            });
                            r.click(function() {
                                i = 0;
                                n.attr("data-bitmask", 0);
                                n.find("input[type=checkbox]").attr("checked", null);
                                r.hide()
                            })
                        }
                        var r = i
                          , u = t("#clear-all-filters");
                        r.submit(function() {
                            return f(t(this)),
                            !1
                        });
                        r.find("fieldset[data-bitmask-name]").each(function() {
                            e(t(this))
                        });
                        u.click(function() {
                            var n = t("#dynamic-filters");
                            n && n.length > 0 && n.data("clear-all")();
                            r.find("fieldset[data-bitmask-name]").each(function() {
                                t(this).data("clear-all")()
                            });
                            r.find("input[type=text]:not(.chosen-container-multi input),input[type=search],select").val(null).attr("checked", null);
                            r.find(".search-choice-close").click()
                        })
                    }
                    t("form.j-filters").each(function() {
                        i(t(this))
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        var t = function() {
            function n() {}
            function t() {
                n.SiteMain.style.marginBottom = n.FooterHeight * -1 + "px !important";
                n.FooterPush.style.height = n.FooterHeight + "px !important"
            }
            return n.initialize = function() {
                n.SiteMain = document.querySelector("div#site-main");
                n.FooterPush = document.querySelector("div#footer-push");
                n.FooterContainer = document.querySelector("footer#footer");
                n.FooterHeight = n.FooterContainer ? n.FooterContainer.offsetHeight : 0;
                n.timeoutLength = 500;
                n.SiteMain && n.FooterPush && n.FooterContainer && (window.setTimeout(t, n.timeoutLength),
                window.addEventListener("resize", function() {
                    window.clearTimeout(n.resizeTimer);
                    n.resizeTimer = window.setTimeout(t, n.timeoutLength)
                }))
            }
            ,
            n
        }();
        n.Footer = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t, i) {
        function e(t, i, r) {
            var f = t.parents("ul")
              , o = t.val()
              , u = f.find(".tree-parent-" + o + " input");
            i == null && (i = t.is(":checked"));
            u.attr("checked", i);
            r && (i ? u.attr("disabled", !0) : u.removeAttr("disabled"));
            u.each(function() {
                e(n(this), i, r)
            })
        }
        var u = ["yowzer", "juju", "voodoo"]
          , r = "choice-selected"
          , f = "data-validation-check-availability-url";
        t.Forms = {
            previousActiveValues: {},
            hasUnsavedChanges: {},
            Select2Options: {},
            initialize: function() {
                var i = n("body"), u;
                t.runOnHtmlInsert(t.FieldLists.initialize);
                t.runOnHtmlInsert(t.Forms.handleFormUnsavedWarnings);
                t.runOnHtmlInsert(t.Forms.removeHoneypots);
                t.runOnHtmlInsert(t.Forms.attachAjaxForms);
                t.runOnHtmlInsert(t.Forms.attachAjaxFileForms);
                t.runOnHtmlInsert(t.Forms.setupAvailabilityChecks);
                t.runOnHtmlInsert(t.Forms.setupEmailAvailabilityChecks);
                t.runOnHtmlInsert(t.Forms.bindDeleteLinks);
                t.runOnHtmlInsert(t.Forms.bindModalLinks);
                t.runOnHtmlInsert(t.Forms.bindFieldLocks);
                t.runOnHtmlInsert(t.Forms.handleSelectAdornment);
                t.runOnHtmlInsert(t.Forms.handlegReCaptchaRender);
                t.runOnHtmlInsert(t.Forms.setupCascadingDropdowns);
                n.browser.msie && t.runOnHtmlInsert(t.Forms.fixIEButtons);
                i.on("click", "a[href].ajax-post, li.user-action-ajax-post > a[href]", t.Forms.bindAjaxPost);
                i.on("click", "a[data-href].ajax-post > a[data-href]", t.Forms.bindAjaxPost);
                i.delegate("ul.user-actions > li.ajax-post > a", "click", t.Forms.bindAjaxPost);
                jQuery.validator.addMethod("equalvalue", function(t, i) {
                    return t === n(i).attr("data-validation-equal-value")
                });
                jQuery.validator.addMethod("regex", function(t, i) {
                    return n(i).attr("data-validation-optional") == "true" && t == "" ? !0 : new RegExp(n(i).attr("data-validation-regex"),n(i).attr("data-validation-regex-options")).test(t)
                });
                t.runOnHtmlInsert(function(n) {
                    t.Forms.addValidators(n)
                });
                i.delegate(".choices .choice, .choices.choice", "click", function() {
                    var t = n(this), u = t.parent(".choices"), f = u.hasClass("choices-exclusive"), e = t.hasClass("choices"), i;
                    t.toggleClass(r);
                    e && (i = t.find(".choice"),
                    t.hasClass(r) ? i.addClass(r) : i.removeClass(r));
                    f && t.hasClass(r) && t.siblings(".choice").removeClass(r);
                    t.trigger("choiceChanged")
                });
                i.delegate(".choices", "reset", function() {
                    var t = n(this);
                    t.find(".choice.choice-selected").each(function() {
                        n(this).trigger("click")
                    })
                });
                i.delegate(".inherit-parent input", "change", function() {
                    var i = n(this), t;
                    e(i, null, i.attr("data-disable-children") === "true");
                    t = n("#field-forum");
                    t.length > 0 && t.find(".inherit-parent input").trigger("hide-hidden-inputs")
                });
                t.runOnHtmlInsert(function(n) {
                    n.find(".inherit-parent input:checked[data-disable-children='true']").change()
                });
                u = function(t) {
                    t.find("label.button").each(function() {
                        var t = n(this);
                        t.removeClass("selected");
                        n(this).find("input:checked").length > 0 && t.addClass("selected")
                    })
                }
                ;
                t.runOnHtmlInsert(function(t) {
                    t.find(".button-list").each(function() {
                        var t = n(this);
                        u(t);
                        n(this).find("label.button").click(function() {
                            setTimeout(function() {
                                u(t)
                            }, 0)
                        })
                    })
                });
                t.runOnHtmlInsert(function(t) {
                    setTimeout(function() {
                        t.find("form.prevent-multiple-submit").each(function() {
                            var t = n(this)
                              , r = this
                              , i = !1
                              , u = function() {
                                return !i && t.valid() ? (t.find("[type=submit]").each(function() {
                                    n(this).attr("disabled", "disabled")
                                }),
                                i = !0,
                                r.submit(),
                                !0) : !1
                            };
                            t.submit(u)
                        })
                    }, 1);
                    t.find(".select-full-text").click(function() {
                        n(this).focus();
                        n(this).select()
                    })
                })
            },
            setupCascadingDropdowns: function(t) {
                t.find("select[data-ajax-target]").each(function() {
                    var i = n(this)
                      , t = n("#" + i.attr("data-ajax-target"))
                      , r = i.attr("data-ajax-url")
                      , u = r.match(/{(.*?)}/gi);
                    i.attr({
                        "data-ajax-url": null,
                        "data-ajax-target": null
                    });
                    i.on("change", function() {
                        var i = n(this), f;
                        t.empty();
                        t.append(n("<option>").html("&mdash;").val(""));
                        i.val().length ? (n(u).each(function() {
                            var n = this
                              , t = n.substring(1, n.length - 1);
                            f = r.replace(new RegExp(n), i.attr(t))
                        }),
                        n.get(f, function(i) {
                            n.each(i, function(i, r) {
                                t.append(n("<option>").html(r).val(i))
                            });
                            t.attr("disabled", !1)
                        })) : t.attr("disabled", !0)
                    })
                })
            },
            handleFormUnsavedWarnings: function(i) {
                function r(n) {
                    return n.attr("type") == "checkbox" ? n.attr("checked") ? !0 : !1 : n.val()
                }
                var u = i.find(".j-warn-unsaved-changes")
                  , f = function(n) {
                    return n.returnText = "The changes made to the Manual Data were not saved.",
                    n.returnText
                };
                n.each(u, function(i, u) {
                    var e = n(u).attr("id");
                    e != null && (n(u).bind("destroyed", function() {
                        t.Forms.hasUnsavedChanges[e] = !1;
                        t.Forms.previousActiveValues[e] = {};
                        var i = !1;
                        n.each(t.Forms.hasUnsavedChanges, function(n) {
                            t.Forms.hasUnsavedChanges[n] == !0 && (i = !0)
                        });
                        i || (window.onbeforeunload = null)
                    }),
                    t.Forms.previousActiveValues[e] = {},
                    t.Forms.hasUnsavedChanges[e] = !1,
                    n(u).find("input,select,textarea").each(function() {
                        t.Forms.previousActiveValues[e][n(this).attr("name")] = r(n(this));
                        n(this).change(function() {
                            var i = !1;
                            n(u).find("input,select,textarea").each(function() {
                                var u = r(n(this));
                                u != t.Forms.previousActiveValues[n(this).attr("id")] && (t.Forms.hasUnsavedChanges[e] = !0,
                                i = !0)
                            });
                            window.onbeforeunload = i ? f : null
                        })
                    }),
                    n(u).submit(function() {
                        t.Forms.hasUnsavedChanges[e] = !1;
                        var i = !1;
                        n.each(t.Forms.hasUnsavedChanges, function(n) {
                            t.Forms.hasUnsavedChanges[n] == !0 && (i = !0)
                        });
                        i || (window.onbeforeunload = null)
                    }))
                })
            },
            fixIEButtons: function() {
                n(document).ready(function() {
                    for (var t, i = document.getElementsByTagName("button"), n = 0; n < i.length; n++)
                        (t = i[n],
                        t.onclick) || (t.onclick = function() {
                            for (var t, n = 0; n < this.form.elements.length; n++)
                                this.form.elements[n].tagName == "BUTTON";
                            this.disabled = !1;
                            t = this.attributes.getNamedItem("value");
                            t != null && (this.value = t.nodeValue)
                        }
                        )
                })
            },
            removeErrors: function(t) {
                n(t).find("span.field-errors").remove()
            },
            attachAjaxForms: function() {
                var r = n("form.ajax");
                n.each(r, function(r, u) {
                    var f = n(u);
                    f.on("click", "input[type=submit]", function() {
                        var i = n(this);
                        t.TinyMCE.saveEditorInForm(i)
                    });
                    f.ajaxForm({
                        beforeSubmit: function() {
                            f.find(":submit").attr("disabled", "disabled")
                        },
                        success: function(r) {
                            if (r.Status === i || r.Status !== i && r.Status != "invalid") {
                                if (f.hasClass("auto-close") && n(".ui-dialog-titlebar-close").click(),
                                f.hasClass("auto-reload")) {
                                    document.location.reload();
                                    return
                                }
                            } else
                                f.find(":submit").removeAttr("disabled"),
                                t.Forms.displayErrors(f, r.Errors);
                            r.RedirectUrl && t.Utils.isUrlCurrentSite(r.RedirectUrl) && (document.location = r.RedirectUrl)
                        },
                        error: function(t) {
                            n.error(t.message, "color:red;")
                        }
                    })
                })
            },
            attachAjaxFileForms: function() {
                setTimeout(function() {
                    var r = n("form").filter(function() {
                        return n(this).attr("ajax-form") == "true" && n(this).attr("form-type") == "file-upload"
                    });
                    n.each(r, function(r, u) {
                        var f = n(u);
                        f.ajaxForm({
                            type: "post",
                            beforeSubmit: function() {
                                f.find(":submit").attr("disabled", "disabled")
                            },
                            iframe: !0,
                            success: function(r) {
                                var f = null;
                                try {
                                    f = JSON.parse(r)
                                } catch (e) {}
                                r.indexOf("HttpRequestTooLargeException") > -1 ? t.Forms.displayErrors(n(u), {
                                    "field-attachment": [L.Global.Files.FileTooLarge("5 MB")]
                                }) : f != null && f.Errors != i ? (t.Forms.displayErrors(n(u), f.Errors),
                                n(u).find(":submit").removeAttr("disabled")) : (n(u).find("input").val(""),
                                document.location.reload())
                            },
                            error: function() {
                                f.find(":submit").removeAttr("disabled")
                            }
                        })
                    })
                }, 1)
            },
            displayErrors: function(i, r) {
                var u, e, o, f;
                for (u in r)
                    e = n(i).find("#form-" + u),
                    e.length || (e = n(i).find("#" + u)),
                    o = r[u],
                    f = n("span.field-errors[for='" + u + "']"),
                    f.length == 0 && (e.after(n("<span>").addClass("field-errors").attr("for", u).attr("generated", "true")),
                    f = n("span.field-errors[for='" + u + "']")),
                    f.html(o.join(", ")),
                    f.show();
                t.Forms.resetReCaptchas(n(i))
            },
            setupAvailabilityChecks: function(t) {
                var i = t.find("input[" + f + "]");
                i.each(function() {
                    var t = n(this)
                      , i = t.parents("form").first();
                    t.blur(function() {
                        n.ajax({
                            url: t.attr(f) + "?c=" + t.val(),
                            dataType: "json",
                            success: function(i) {
                                t.removeClass("available-yes").removeClass("available-no");
                                t.parent().find("span.username-taken").remove();
                                i.Available ? t.addClass("available-yes") : (t.addClass("available-no"),
                                t.after(n("<span class='field-errors username-taken' htmlfor='field-username'>" + L.Global.UserRegistration.UsernameIsTaken() + "<\/span>")));
                                n("span#field-error-field-username").css("display", "none")
                            }
                        })
                    })
                })
            },
            setupEmailAvailabilityChecks: function(t) {
                var i = t.find("input#field-email");
                i.each(function() {
                    var t = n(this)
                      , i = "/user/email/available";
                    t.blur(function() {
                        n.ajax({
                            url: i,
                            data: {
                                emailAddress: t.val()
                            },
                            dataType: "json",
                            success: function(i) {
                                t.removeClass("available-yes").removeClass("available-no");
                                t.parent().find("span.email-taken").remove();
                                t.parent().find("span.email-not-valid").remove();
                                i.Available || (t.addClass("available-no"),
                                t.after(n("<span class='field-errors email-taken' htmlfor='field-email'>That email address is not available.<\/span>")));
                                i.Valid || (t.addClass("available-no"),
                                t.after(n("<span class='field-errors email-not-valid' htmlfor='field-email'>That email address is not valid.<\/span>")));
                                n("span#field-error-field-email").css("display", "none")
                            }
                        })
                    })
                })
            },
            removeHoneypots: function(t) {
                var i, r;
                if (u.length > 0) {
                    for (i = t.find("." + u[0]),
                    r = 1; r < u.length; r++)
                        i = i.add(t.find("." + u[r]));
                    i.each(function() {
                        for (var t = n(this), i; t; )
                            i = t.parent(),
                            t.remove(),
                            t = null,
                            i.children().length == 0 && (t = i)
                    })
                }
            },
            addValidators: function(t) {
                var r = function(t, i) {
                    var r = function(t, r) {
                        var f = n(r), u;
                        f.attr("data-validation-disabled") != "true" && n(r.form).attr("data-validation-disabled") != "true" && (u = i.call(t, r),
                        u && f.rules("add", u))
                    };
                    t.each(function() {
                        var t, i;
                        this.form ? (i = this,
                        r(i, i)) : (t = this,
                        n(t).find("input:not([data-validation-disabled=true])").each(function() {
                            r(t, this)
                        }))
                    })
                }
                  , u = function() {
                    n(this).attr("data-validation-disabled") != "true" && n(this).validate({
                        ignore: ":hidden:not(.chosen-done)",
                        errorClass: "field-errors",
                        errorElement: "span",
                        errorPlacement: function(t, i) {
                            i.attr("type") == "radio" ? n(i).parents("dd").prev("dt").append(" ").append(t) : n(i).parent().append(" ").append(t)
                        },
                        onkeyup: function(n, t) {
                            (t.which !== 9 || this.elementValue(n) !== "") && (n.name in this.submitted || n === this.lastActive) && (n.type == "text" || n.type == "textarea") && this.element(n)
                        }
                    })
                };
                t.is("form") ? t.each(u) : t.find("form").each(u);
                r(t.find("[data-validation-required]").not(".text-editor"), function() {
                    var t = n(this).attr("data-validation-required-message");
                    return {
                        required: !0,
                        messages: {
                            required: t != i ? t : L.Global.Common.RequiredErrorMessage()
                        }
                    }
                });
                r(t.find("[data-validation-length]"), function() {
                    var u = n(this).attr("data-validation-length")
                      , r = n(this).attr("data-validation-length-message")
                      , t = u.split("..");
                    return (t[1] == "" || t[1] == i) && (t[1] = Infinity),
                    {
                        minlength: t[0],
                        maxlength: t[1],
                        messages: {
                            minlength: r != i ? r : L.Global.Common.LengthErrorMessageMinimum(t[0]),
                            maxlength: r != i ? r : L.Global.Common.LengthErrorMessageMaximum(t[1])
                        }
                    }
                });
                r(t.find("[data-validation-range]"), function() {
                    if (!n(this).hasClass("date-time") && !n(this).hasClass("date") && !n(this).hasClass("timespan")) {
                        var u = n(this).attr("data-validation-range")
                          , r = n(this).attr("data-validation-range-message")
                          , t = u.split("..");
                        return t[1] != "" ? {
                            min: t[0],
                            max: t[1],
                            messages: {
                                min: r != i ? r : L.Global.Common.IntegerValueErrorMessageMinimum(t[0]),
                                max: r != i ? r : L.Global.Common.IntegerValueErrorMessageMaximum(t[1])
                            }
                        } : {
                            min: t[0],
                            messages: {
                                min: r != i ? r : L.Global.Common.IntegerValueErrorMessageMinimum(t[0])
                            }
                        }
                    }
                });
                r(t.find("[data-validation-equal-value]"), function() {
                    var r = n(this).attr("data-validation-equal-value")
                      , t = n(this).attr("data-validation-equal-value-message");
                    return {
                        equalvalue: r,
                        messages: {
                            equalvalue: function(r, u) {
                                return t != i ? t : L.Global.Common.EqualErrorMessage(n(u).val(), r)
                            }
                        }
                    }
                });
                r(t.find("[data-validation-equal-field]"), function() {
                    var r = n(this).attr("data-validation-equal-field")
                      , t = n(this).attr("data-validation-equal-field-message");
                    return {
                        equalTo: "#{0}".format(r),
                        messages: {
                            equalTo: function(r, u) {
                                return t != i ? t : L.Global.Common.EqualErrorMessage(n(u).val(), n(r).val())
                            }
                        }
                    }
                });
                r(t.find("[data-validation-regex]"), function() {
                    var r = n(this).attr("data-validation-regex")
                      , t = n(this).attr("data-validation-regex-message");
                    return {
                        regex: r,
                        messages: {
                            regex: t != i ? t : "Text does not match required pattern"
                        }
                    }
                });
                r(t.find("[data-validation-file-extension]"), function() {
                    var t = n(this).attr("data-validation-file-extension");
                    return {
                        accept: t,
                        messages: {
                            accept: t.split("|").join(", ")
                        }
                    }
                });
                t.find("[data-autocomplete-url]").each(function() {
                    var t = n(this)
                      , u = t.attr("data-autocomplete-url")
                      , f = t.attr("data-autocomplete-width")
                      , i = t.attr("data-min-chars")
                      , r = t.attr("data-max-results")
                      , e = t.autocomplete(u, {
                        dataType: "json",
                        max: r ? parseInt(r) : 25,
                        cache: 500,
                        minChars: i ? parseInt(i) : 1,
                        scroll: !1,
                        selectFirst: !1,
                        width: f,
                        parse: function(n) {
                            var i = [], t;
                            if (n == null)
                                return i;
                            for (t = 0; t < n.length; t++)
                                i[t] = {
                                    data: n[t],
                                    value: n[t].Value,
                                    result: n[t].Key
                                };
                            return i
                        },
                        formatItem: function(n) {
                            return n.Display || n.Key
                        }
                    }).result(function(t, i) {
                        var r = this.id;
                        n("#" + r + "-previous").val(i.Key);
                        n("#" + r + "-symbol").val(i.Value)
                    })
                });
                t.find("[data-autocomplete-search-url]").each(function() {
                    var t = n(this)
                      , f = t.attr("data-autocomplete-search-url")
                      , e = t.attr("data-autocomplete-width")
                      , r = t.attr("data-min-chars")
                      , u = t.attr("data-max-results")
                      , i = t.attr("data-class")
                      , o = t.autocomplete_search(f, {
                        resultsClass: "ac_results" + (i ? " " + i : ""),
                        loadingClass: "ac_loading" + (i ? " " + i : ""),
                        dataType: "json",
                        max: u ? parseInt(u) : 25,
                        cache: 500,
                        minChars: r ? parseInt(r) : 1,
                        scroll: !1,
                        selectFirst: !1,
                        width: e,
                        parse: function(n) {
                            var i = [], t;
                            if (n == null)
                                return i;
                            for (t = 0; t < n.length; t++)
                                i[t] = {
                                    data: n[t],
                                    value: n[t].Value,
                                    result: n[t].Key
                                };
                            return i
                        },
                        formatItem: function(n) {
                            return n.Display || n.Key
                        }
                    }).result(function(t, i) {
                        var r = this.id;
                        n("#" + r + "-previous").val(i.Key);
                        n("#" + r + "-symbol").val(i.Value)
                    })
                });
                t.find("form.listing-filters").submit(function() {
                    var e = n(this), t, i, u, o, r, f;
                    if (e.hasClass("ajax-listing"))
                        return !0;
                    for (t = this.action,
                    i = n(this).formToArray(),
                    u = i.length - 1; u >= 0; u--)
                        i[u].value == "" && i.splice(u, 1);
                    return o = n.param(i),
                    r = "",
                    t.indexOf("#") != -1 && (r = t.substring(t.indexOf("#")),
                    t = t.substring(0, t.indexOf("#"))),
                    r || (r = window.location.hash),
                    f = "",
                    o == "" && (f = t + r),
                    f = t + "?" + n.param(i) + r,
                    e.attr("action", f),
                    !0
                });
                t.find(".listing .col-delete a").click(function(t) {
                    if (t.preventDefault(),
                    confirm("Delete?")) {
                        var i = n(this)
                          , r = i.attr("href");
                        n.post(r, function() {
                            window.location.reload()
                        })
                    }
                })
            },
            bindDeleteLinks: function(t) {
                t.find(".user-actions .user-action-delete[data-delete-url][data-redirect-url]").click(function(t) {
                    if (confirm("Delete?")) {
                        var i = n(this)
                          , r = i.attr("data-delete-url");
                        n.post(r, function() {
                            var n = i.attr("data-redirect-url");
                            window.location = n
                        });
                        t.preventDefault()
                    }
                })
            },
            bindFieldLocks: function(n) {
                n.find("[data-lock-for]").click(t.Forms.handleFieldLockClick)
            },
            handleFieldLockClick: function(t) {
                var r, u, i;
                t.preventDefault();
                r = n(this).attr("data-lock-for");
                r && (u = n(this).hasClass("unlock") ? !0 : !1,
                i = n("#" + r),
                i.length > 0 && (u ? (n(this).removeClass("unlock").addClass("lock"),
                i.removeAttr("readonly")) : (n(this).removeClass("lock").addClass("unlock"),
                i.attr("readonly", "readonly"))))
            },
            bindModalLinks: function(n) {
                n.find(".modal-link").off("click", t.Forms.handleModalLinks);
                n.find(".modal-link").on("click", t.Forms.handleModalLinks)
            },
            handleModalLinks: function(i) {
                i.preventDefault();
                var r = n(this);
                t.Forms.loadModalFromLink(r)
            },
            loadModalFromLink: function(n) {
                var i, r;
                if (!n.hasClass("modal-loading") && !n.hasClass("modal-disabled")) {
                    if (i = n.attr("data-modal-href") || n.attr("href"),
                    r = n.attr("data-title"),
                    !i)
                        throw "No href in model-link";
                    var u = parseInt(n.attr("data-max-width"))
                      , f = parseInt(n.attr("data-min-width"))
                      , e = parseInt(n.attr("data-max-height"))
                      , o = parseInt(n.attr("data-modal-width"))
                      , s = parseInt(n.attr("data-modal-height"))
                      , h = n.attr("data-modal-allowpagescrolling") == "true" ? !1 : !0
                      , c = n.attr("data-modal-class") || "modal"
                      , l = n.attr("data-auto-height") == "true"
                      , a = n.attr("data-modal-size-to-window") != null || u > 0 || f > 0 || e > 0;
                    t.Modal.openModal(i, r, o, s, c, h, a, f, u, e, l)
                }
            },
            loadModal: function(i, r, u, f, e, o) {
                n.get(i, function(i) {
                    var s = n(i), h;
                    s.dialog({
                        draggable: !1,
                        title: r,
                        modal: !0,
                        resizable: !1,
                        dialogClass: "modal",
                        close: function() {
                            s.dialog("destroy");
                            s.remove()
                        }
                    });
                    h = s.dialog("widget");
                    t.triggerHtmlInsert(s.parent());
                    h.center({
                        sizeToWindow: !0,
                        minWidth: f,
                        maxWidth: u,
                        maxHeight: e,
                        autoHeight: o
                    })
                })
            },
            bindAjaxPost: function(r) {
                var u, f;
                (r.preventDefault(),
                u = n(this),
                u.hasClass("disabled") || u.hasClass("loading")) || (f = u.attr("data-confirm-message"),
                !f && u.hasClass("confirm") && (f = "Are you sure?"),
                f === i || confirm(f)) && (u.hasClass("silent") || u.addClass("loading"),
                t.Utils.getRequestVerificationToken().done(function(n) {
                    t.Forms.AjaxPostSubmit(u, n)
                }))
            },
            AjaxPostSubmit: function(t, r) {
                var u = t.attr("data-parent-selector"), o = t.attr("href"), f = n("<form>").attr("method", "post").attr("action", o).hide(), s = n("<input>").attr("name", "request-verification-token").attr("type", "hidden").val(r), e;
                return f.append(s),
                t.parent().append(f),
                e = n.Deferred(),
                f.ajaxSubmit({
                    success: function(n) {
                        if (e.resolve(n),
                        t.removeClass("loading"),
                        u !== i && u !== "") {
                            var r = t.parents(u);
                            r.fadeOut(function() {
                                r.remove()
                            })
                        }
                        t.data("redirect-url") ? self.location.replace(t.data("redirect-url")) : t.hasClass("no-refresh") || self.location.reload()
                    }
                }),
                e.promise()
            },
            initializeSelect2: function(t) {
                var r = t.attr("id"), u = {}, i;
                this.Select2Options[r] && (u = this.Select2Options[r]);
                i = {
                    width: "resolve",
                    dropdownAutoWidth: !0,
                    dropdownCss: {
                        "min-width": "180px"
                    }
                };
                i = {
                    width: "resolve",
                    dropdownAutoWidth: !0,
                    dropdownCss: {
                        "min-width": "180px"
                    }
                };
                t.select2(n.extend(!0, {}, i, u))
            },
            handleSelectAdornment: function(i) {
                i.find("select.is-chosen-select").each(function() {
                    var t = n(this)
                      , i = t.data("chosen-config");
                    try {
                        i ? t.chosen(i) : t.chosen()
                    } catch (r) {}
                });
                i.find("select.is-select2-select").each(function() {
                    try {
                        t.Forms.initializeSelect2(n(this))
                    } catch (i) {
                        n.log(i)
                    }
                })
            },
            handlegReCaptchaRender: function(t) {
                n(".g-recaptcha").length > 0 && typeof grecaptcha != "undefined" && t.find("div.g-recaptcha").each(function() {
                    try {
                        var t = n(this).attr("data-sitekey")
                          , i = n(this).attr("data-theme")
                          , r = grecaptcha.render(this, {
                            sitekey: t,
                            theme: i
                        });
                        n(this).attr("widgetID", r)
                    } catch (u) {
                        n.log(u)
                    }
                })
            },
            resetReCaptchas: function() {
                n("div.g-recaptcha").each(function() {
                    grecaptcha.reset(n(this).attr("widgetID"))
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Forum = {
            dependentScripts: function() {
                return [{
                    dependency: t.User,
                    name: "Cobalt.User"
                }, {
                    dependency: t.Markup,
                    name: "Cobalt.Markup"
                }]
            },
            initialize: function() {
                t.Forum.bindSearchForm();
                t.Forum.bindForumSearchBox();
                t.Forum.markForumAsFiltered();
                t.Forum.bindBulkThreadMergeForm();
                t.Forum.enableMobileNavigation();
                t.runOnHtmlInsert(t.Forum.addReadStatuses);
                t.runOnHtmlInsert(t.Forum.handleForumMarkAllRead);
                t.runOnHtmlInsert(t.Forum.createUserMenu);
                t.runOnHtmlInsert(t.Forum.deleteThreadMenu);
                t.runOnHtmlInsert(t.Forum.modalCancelButton);
                t.runOnHtmlInsert(t.Forum.handleWarnForm);
                t.Forum.bindResponsiveHeaders();
                t.runOnHtmlInsert(t.Forum.bindTreeMultipleSelectField);
                t.Forum.bindForumSearch();
                n().ready(function() {
                    function i(i) {
                        i.preventDefault();
                        var u = n(this)
                          , f = parseInt(n(this).attr("data-id"));
                        f && t.Utils.getRequestVerificationToken().done(function(i) {
                            n.post(t.Forum.getThreadActionUrl(f, "lock"), {
                                "request-verification-token": i
                            }, function() {
                                u.closest("tr.j-forum-thread-row").removeClass("forum-thread-row-normal").removeClass("forum-thread-row-deleted").addClass("forum-thread-row-locked");
                                var n = u.closest(".thread-action-lock");
                                n.removeClass("thread-action-lock").addClass("thread-action-unlock").attr("title", "Unlock");
                                n.off("click");
                                n.on("click", r);
                                t.triggerHtmlInsert(n.parent())
                            })
                        })
                    }
                    function r(r) {
                        r.preventDefault();
                        var u = n(this)
                          , f = parseInt(n(this).attr("data-id"));
                        f && t.Utils.getRequestVerificationToken().done(function(r) {
                            n.post(t.Forum.getThreadActionUrl(f, "unlock"), {
                                "request-verification-token": r
                            }, function() {
                                u.closest("tr.j-forum-thread-row").removeClass("forum-thread-row-locked").addClass("forum-thread-row-normal");
                                var n = u.closest(".thread-action-unlock");
                                n.removeClass("thread-action-unlock").addClass("thread-action-lock").attr("title", "Lock");
                                n.off("click");
                                n.on("click", i);
                                t.triggerHtmlInsert(n.parent())
                            })
                        })
                    }
                    function u(i) {
                        i.preventDefault();
                        var r = n(this)
                          , u = parseInt(n(this).attr("data-id"));
                        u && t.Utils.getRequestVerificationToken().done(function(i) {
                            n.post(t.Forum.getThreadActionUrl(u, "pin"), {
                                "request-verification-token": i
                            }, function() {
                                r.closest("tr.j-forum-thread-row").removeClass("forum-thread-row-typical").addClass("forum-thread-row-pinned");
                                var n = r.closest(".thread-action-pin");
                                n.removeClass("thread-action-pin").addClass("thread-action-unpin").attr("title", "Unpin");
                                n.off("click");
                                n.on("click", f);
                                t.triggerHtmlInsert(n.parent())
                            })
                        })
                    }
                    function f(i) {
                        i.preventDefault();
                        var r = n(this)
                          , f = parseInt(n(this).attr("data-id"));
                        f && t.Utils.getRequestVerificationToken().done(function(i) {
                            n.post(t.Forum.getThreadActionUrl(f, "unpin"), {
                                "request-verification-token": i
                            }, function() {
                                r.closest("tr.j-forum-thread-row").removeClass("forum-thread-row-pinned").addClass("forum-thread-row-typical");
                                var n = r.closest(".thread-action-unpin");
                                n.removeClass("thread-action-unpin").addClass("thread-action-pin").attr("title", "Pin");
                                n.off("click");
                                n.on("click", u);
                                t.triggerHtmlInsert(n.parent())
                            })
                        })
                    }
                    n("a.j-mark-forum-read").click(function(i) {
                        i.preventDefault();
                        var r = n(this).parents("tr")
                          , u = r.attr("data-id")
                          , f = r.attr("data-latest-comment-date");
                        t.Forum.markForumRead(u, f);
                        t.Forum.setForumStatus(r);
                        t.Utils.getRequestVerificationToken().done(function(i) {
                            n.post(t.Routes.Instance.ForumSetForumSeen(u), {
                                "request-verification-token": i
                            }, function() {})
                        })
                    });
                    n("#begin-date").datepicker();
                    n("#end-date").datepicker();
                    n(".thread-action-rename").click(function(i) {
                        var u, e;
                        if (i.preventDefault(),
                        u = parseInt(n(this).attr("data-id")),
                        u) {
                            var o = n(this).parents("td.col-thread").find("span.j-thread-title")
                              , f = n(".thread-title[data-id=" + u + "]")
                              , s = f.find("a.title")
                              , h = t.Forum.getThreadActionUrl(u, "rename")
                              , c = s.html()
                              , r = n('<form method="post">').attr("action", h)
                              , l = n('<input type="text" name="title">').attr("value", c).attr("data-id", u)
                              , a = n('<input type="submit" name="update">').attr("value", L.Global.Buttons.Update())
                              , v = n('<a id="cancel-thread-title-edit">').attr("href", document.location).text(L.Global.Buttons.Cancel());
                            n(r).append(n(l)).append(n(a)).append(n(v));
                            t.Utils.getRequestVerificationToken().done(function(t) {
                                n(r).append(n('<input type="hidden" name="request-verification-token">').attr("value", t))
                            });
                            e = f.clone();
                            f.replaceWith(n(r));
                            t.triggerHtmlInsert(f.parent());
                            r.ajaxForm({
                                beforeSubmit: function() {
                                    r.mask()
                                },
                                success: function(n) {
                                    e.find("a.title").text(n);
                                    r.unmask();
                                    r.replaceWith(e)
                                },
                                error: function() {
                                    r.unmask()
                                }
                            });
                            n(":text[data-id=" + u + "]").click(function() {
                                return !1
                            });
                            n("a#cancel-thread-title-edit").click(function(t) {
                                t.preventDefault();
                                n(this).parent().replaceWith(o)
                            })
                        }
                    });
                    n(".thread-action-lock").on("click", i);
                    n(".thread-action-unlock").on("click", r);
                    n(".thread-action-pin").on("click", u);
                    n(".thread-action-unpin").on("click", f);
                    n(".thread-action-add").click(function(i) {
                        i.preventDefault();
                        var u = n(this)
                          , r = parseInt(n(this).attr("data-id"));
                        r && t.Utils.getRequestVerificationToken().done(function(i) {
                            n.post(t.Forum.getThreadActionUrl(r, "add"), {
                                "request-verification-token": i
                            }, function() {
                                window.location.reload()
                            }, "json")
                        })
                    });
                    n("li.user-action-tools > a").on("click", function(n) {
                        n.preventDefault()
                    });
                    n("a.comment-right-side-user-action.disabled").on("click", function(n) {
                        return n.preventDefault(),
                        !1
                    })
                });
                var r = n("#field-create-redirect")
                  , u = n("#field-is-permanent")
                  , i = n(".j-redirect-fields");
                r.is(":checked") && i.removeClass("hide").show();
                u.is(":checked") && i.find("#field-redirect-time input").attr("disabled", "disabled");
                r.change(function() {
                    n(this).is(":checked") ? i.removeClass("hide").show() : i.hide()
                });
                u.change(function() {
                    var t = n("#field-redirect-time input");
                    n(this).is(":checked") ? t.attr("disabled", "disabled") : t.removeAttr("disabled")
                })
            },
            bindForumSearchBox: function() {
                var t, r, i;
                n("#field-search-specific-forums").live("input", function() {
                    var i = n("#field-forum"), t;
                    i.length > 0 && (t = n(this).val().toLowerCase(),
                    n("div.forum-selection div").children(".tree-item").each(function() {
                        var i = n(this).text();
                        n(this).show();
                        i.toLowerCase().indexOf(t) === -1 && n(this).hide()
                    }))
                });
                t = n("#field-search-specific-forums");
                t.length > 0 && (r = t.attr("data-search-elem"));
                i = n("#field-forum");
                i.length > 0 && i.find(".inherit-parent input").bind("hide-hidden-inputs", function() {
                    n(this).find(r || "li").is(":hidden") && n(this).attr("checked", !1)
                })
            },
            getThreadActionUrl: function(t, i) {
                var u = n(".thread-title[data-id=" + t + "]")
                  , r = n(u.selector.toString());
                return r.attr("data-thread-link") ? r.attr("data-thread-link") + "/" + i : document.location
            },
            markForumRead: function(n, r) {
                if (n = parseInt(n),
                n != i && r != i) {
                    var u = t.Forum.ForumSeen;
                    u instanceof Object || (u = {});
                    u[n] = r;
                    t.Forum.ForumSeen = u
                }
            },
            addReadStatuses: function() {
                n(".j-forum-thread-row").each(function() {
                    var r = n(this), s = parseInt(r.attr("data-id")), v = parseInt(r.attr("data-forum-id")), b = parseInt(r.attr("data-latest-comment-date")), y = parseInt(r.data("latest-comment-author")), h, e, o, w, l, a, u, f;
                    if (s && (h = parseInt(r.attr("data-latest-post-index")),
                    h) && !r.hasClass("forum-thread-row-redirect")) {
                        e = t.Forum.ForumThreadSeen;
                        e instanceof Object || (e = {});
                        o = t.Forum.ForumThreadCommented;
                        o instanceof Object || (o = {});
                        var k = o[s] || 0
                          , c = e[s] || 0
                          , p = t.Forum.ForumSeen != i && t.Forum.ForumSeen[v] != i && b <= t.Forum.ForumSeen[v];
                        isNaN(y) || isNaN(t.User.userID) || y !== parseInt(t.User.userID) || (p = !0);
                        w = h > c && !p;
                        w ? (r.addClass("forum-thread-row-unread"),
                        r.removeClass("forum-thread-row-read"),
                        f = r.find(".j-thread-status"),
                        c > 0 && (u = r.find("a.status-icon"),
                        u.attr("href").indexOf("comment=") === -1 && (l = "{0}?comment={1}".format(u.attr("href"), ++c),
                        a = r.find("#go-next"),
                        a.attr("href", l),
                        a.addClass("go-next").removeClass("hide"),
                        f.find("a").attr("href", l),
                        r.addClass("forum-thread-has-unread")))) : (r.hasClass("forum-thread-row-read") || r.addClass("forum-thread-row-read"),
                        r.removeClass("forum-thread-row-unread"),
                        r.removeClass("forum-thread-has-unread"),
                        u = r.find("#go-next"),
                        u.hasClass("hide") || u.removeClass("go-next").addClass("hide"));
                        k > 0 && (f = r.find(".j-thread-status"),
                        f.addClass("forum-thread-commented"),
                        f.prop("title", "You have commented on this thread"))
                    }
                });
                n(".forum-row, .top-level-forum.can-have-threads").each(function() {
                    t.Forum.setForumStatus(n(this))
                })
            },
            createUserMenu: function() {
                n(".forum-post-author").each(function() {
                    var i = n(this).find(".username")
                      , t = n(this).find(".user-actions-forum-post-author-menu");
                    t.hide();
                    n(i).find("a").attr("href") != "" && i.hover(function() {
                        t.stop(!0, !0).slideDown(100)
                    }, function() {
                        t.stop(!0, !0).slideUp(100)
                    })
                })
            },
            setForumStatus: function(n) {
                var u = parseInt(n.attr("data-id")), f = parseInt(n.attr("data-latest-comment-date")), s = parseInt(n.attr("data-latest-post-index")), h = parseInt(n.attr("data-latest-thread-id")), e = parseInt(n.data("latest-comment-author")), o = t.Forum.ForumThreadSeen, r;
                o instanceof Object || (o = {});
                r = !1;
                f == 0 ? r = !0 : t.Forum.ForumSeen != i && t.Forum.ForumSeen[u] != i && f <= t.Forum.ForumSeen[u] && (r = !0);
                isNaN(e) || isNaN(t.User.userID) || e !== parseInt(t.User.userID) || (r = !0);
                r ? (n.removeClass("forum-row-not-seen-latest-thread"),
                n.addClass("forum-row-seen-latest-thread")) : (n.find(".col-status>a").attr("title", t.Localization.Main.Global.Forums.MarkForumRead()),
                n.removeClass("forum-row-seen-latest-thread"),
                n.addClass("forum-row-not-seen-latest-thread"))
            },
            handleForumMarkAllRead: function(i) {
                i.find(".j-forum-mark-all-as-read").click(function(i) {
                    i.preventDefault();
                    t.Utils.getRequestVerificationToken().done(function(i) {
                        n.post(t.Routes.Instance.ForumSetAllForumSeen(), {
                            "request-verification-token": i
                        }, function(i) {
                            i.Success && (t.Forum.ForumSeen = n.parseJSON(i.ForumSeen),
                            n(".forum-row, .top-level-forum.can-have-threads").each(function() {
                                t.Forum.setForumStatus(n(this))
                            }))
                        })
                    });
                    var r = n(this).parents(".u-dropDownMenu");
                    r.hide();
                    setTimeout(function() {
                        r.show()
                    }, 100)
                });
                i.find(".j-forum-thread-mark-all-as-read").click(function(i) {
                    i.preventDefault();
                    var r = n(i.currentTarget).attr("data-forum-id");
                    t.Utils.getRequestVerificationToken().done(function(i) {
                        n.post(t.Routes.Instance.ForumSetAllForumThreadSeen(r), {
                            "request-verification-token": i
                        }, function(i) {
                            i.Success && (t.Forum.ForumSeen = n.parseJSON(i.ForumSeen),
                            t.Forum.addReadStatuses())
                        })
                    })
                })
            },
            bindSearchForm: function() {
                var r, i, u;
                n("div.j-advanced-forum-search").find(".j-search-scope input").on("change", function() {
                    var t = n(this);
                    t.val() == "t" ? (n("#field-forum").show(),
                    n("#field-search-specific-forums").show()) : (n("#field-forum").hide(),
                    n("#field-search-specific-forums").hide())
                });
                if (n("div.j-advanced-forum-search").find(".j-search-scope input:checked:visible").trigger("change"),
                r = n("#form-field-forum-link-field"),
                r.length > 0 && (i = n("#field-forum"),
                i.length > 0)) {
                    u = [];
                    i.find("input:checked").each(function() {
                        u.push(n(this).val())
                    });
                    var f = "Select Additional Forums"
                      , o = "Don't Select Additional Forums"
                      , e = n("<a>").attr("href", "#").addClass("j-forum-search-select").addClass("expand").addClass("tip").text(f).attr("title", f).on("click", function(t) {
                        t.preventDefault();
                        n(this).hasClass("expand") ? n(this).text(o).removeClass("expand").addClass("collapse") : (n(this).text(f).removeClass("collapse").addClass("expand"),
                        i.find("input[type='checkbox']").each(function() {
                            n(this).removeAttr("checked")
                        }),
                        n(u).each(function(n, t) {
                            i.find("input[value='" + t + "']").attr("checked", "checked")
                        }));
                        i.removeClass("hide").toggle()
                    });
                    t.triggerHtmlInsert(e.parent());
                    r.append(e)
                }
            },
            deleteThreadMenu: function() {
                var i = n("#form-field-field-message"), t;
                i.hide();
                t = !1;
                n("#field-show-status-note").click(function() {
                    t ? i.hide() : i.show();
                    t = !t
                })
            },
            modalCancelButton: function() {
                n("body").on("click", "a.j-cancel-button", function() {
                    n(this).parents("div.ui-dialog-content").dialog("close")
                })
            },
            handleWarnForm: function() {
                var r = n(".ajax-jump");
                r.length > 0 && r.ajaxForm({
                    beforeSubmit: function() {
                        r.find(":submit").attr("disabled", "disabled")
                    },
                    success: function(u) {
                        u.Status === i || u.Status !== i && u.Status != "invalid" ? (n(".ui-dialog-titlebar-close").click(),
                        document.location = u.RedirectUrl) : (r.find(":submit").removeAttr("disabled"),
                        t.Forms.displayErrors(r, u.Errors))
                    }
                })
            },
            markForumAsFiltered: function() {
                n("th.b-table-heading").each(function() {
                    n(this).find("a").hasClass("selected") && n(this).parents("table").find("tbody").addClass("filtered")
                })
            },
            bindBulkThreadMergeForm: function() {
                var t = n("div#form-field-thread-redirect-duration")
                  , i = n("div#form-field-thread-no-redirect");
                t.hide();
                i.click(function() {
                    t.is(":visible") && !n(this).find("input").is(":checked") ? t.hide() : t.show()
                })
            },
            enableMobileNavigation: function() {
                var t = n(window);
                n("tr.j-forum-thread-row,li.j-forum-thread-row").each(function() {
                    var i = n(this);
                    i.on("click", function() {
                        var u, r;
                        t.width() <= 640 && n("body").hasClass("responsive-enabled") && (u = n(event.target),
                        u.hasClass("go-latest") ? i.hasClass("forum-thread-has-unread") && (r = i.find("td.j-thread-status > a.status-icon").attr("href"),
                        event.preventDefault(),
                        window.location = r) : (r = i.find(".j-thread-title").attr("data-thread-link"),
                        event.preventDefault(),
                        window.location = r))
                    })
                });
                n("tr.forum-row").each(function() {
                    var i = n(this);
                    i.on("click", function() {
                        var r, u;
                        t.width() <= 640 && n("body").hasClass("responsive-enabled") && (r = n(event.target),
                        r.hasClass("go-latest") || (u = i.find("td.col-forum > .title > a").attr("href"),
                        event.preventDefault(),
                        window.location = u))
                    })
                })
            },
            relabelResponsiveLinks: function() {
                n("ul.user-actions-forum-post-author-menu").each(function() {
                    var i = 0;
                    n(this).find("li.user-action-link-responsive").each(function() {
                        var r = "";
                        t.detectIsOnMobile() ? (r = n(this).find("a").attr("data-responsive-label"),
                        i++) : r = n(this).find("a").attr("data-non-responsive-label");
                        n(this).find("span.label").text(r)
                    });
                    n(this).find("li.user-action-link-responsive").each(function() {
                        n(this).addClass("link-responsive-nav-count-" + i)
                    })
                });
                n("nav.p-comment-actionsUser").each(function() {
                    var t = n(this).find("a.comment-right-side-user-action").length;
                    n(this).find("a.comment-right-side-user-action").each(function() {
                        n(this).parent().addClass("responsive-bottom-nav-" + t)
                    })
                })
            },
            bindResponsiveHeaders: function() {
                n("div.mobile-profile-target").on("click", function() {
                    (n("body").width() <= 640 || t.detectIsOnMobile()) && (location.href = n(this).parent().find("div.p-comment-micro-author > a").prop("href"))
                });
                n("td.col-count .modal-link").click(function(i) {
                    (n("body").width() <= 640 || t.detectIsOnMobile()) && i.preventBubble()
                })
            },
            bindTreeMultipleSelectField: function() {
                n("select.tree-item > option").each(function() {
                    for (var i = "", t = 1; t < 10; t++)
                        i += "- ",
                        n(this).hasClass("tree-field-level-" + t) && n(this).text(i + n(this).text())
                });
                n("select.tree-item").change(function() {
                    n(this).parent().submit()
                })
            },
            bindForumSearch: function() {
                n("input.b-search-submit").click(function(t) {
                    return n(this).siblings("input.b-search-input").val().length < 3 ? (t.preventDefault(),
                    n(this).siblings("span.field-errors").remove(),
                    n(this).after('<span class="field-errors">Search must have 3 or more characters.<\/span>'),
                    !1) : !0
                });
                n("input.b-search-input").change(function() {
                    n(this).siblings(".field-errors").remove()
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.ForumFilters = {
            getCookieName: function(n) {
                return "userForumFilters_" + (n || 0)
            },
            initialize: function() {
                var i = n("#forum-filters-form"), r, u, f;
                if (i.length > 0) {
                    r = n.cookie(t.ForumFilters.getCookieName(t.User.ID));
                    r ? (u = i.find("input.j-forum-filters"),
                    f = r.split(","),
                    u.filter(function() {
                        return n.inArray(n(this).val(), f) >= 0
                    }).prop("checked", !0)) : i.find("input.j-forum-filters").prop("checked", !0);
                    i.on("click", ".j-reset", function(r) {
                        r.preventDefault();
                        i.find("input.j-forum-filters").prop("checked", !0);
                        var u = i.find("input.j-forum-filters:checked").map(function() {
                            return n(this).val()
                        }).toArray().join();
                        t.ForumFilters.updatePageBlock(u);
                        n.cookie(t.ForumFilters.getCookieName(t.User.ID), null);
                        n(".ui-dialog-titlebar-close").click()
                    });
                    i.on("click", ".j-accept", function(r) {
                        r.preventDefault();
                        var u = i.find("input.j-forum-filters:checked").map(function() {
                            return n(this).val()
                        }).toArray().join();
                        if (u)
                            i.find(".errors").text("");
                        else {
                            i.find(".errors").text("At least one Forum must be selected.").css("color", "red");
                            return
                        }
                        t.ForumFilters.updatePageBlock(u);
                        n.cookie(t.ForumFilters.getCookieName(t.User.ID), u);
                        n(".ui-dialog-titlebar-close").click()
                    })
                }
            },
            updatePageBlock: function(i) {
                if (i) {
                    var r = n(".forum-topics-page-block[data-allow-user-filtering='true']");
                    r.each(function() {
                        var r = n(this)
                          , u = r.data("items-to-display")
                          , f = r.data("order-by-comment") === !0 ? 1 : 0;
                        n.get(t.Routes.Instance.ForumGetForumLatestThreads({
                            forumIDs: i,
                            itemsToDisplay: u,
                            orderByComments: f
                        }), function(n) {
                            n && n.status === "success" && n.threadHtml && r.empty().append(n.threadHtml)
                        })
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.ForumManager = {
            newForumCount: 0,
            form: null,
            initialize: function() {
                var r, i, u;
                t.ForumManager.form = n("form.j-forum-manager-form");
                t.ForumManager.form.ajaxForm({
                    type: "post",
                    cache: !1,
                    beforeSubmit: function() {
                        t.ForumManager.form.mask()
                    },
                    success: function() {
                        setTimeout(function() {
                            t.ForumManager.form.unmask()
                        }, 500)
                    }
                });
                t.ForumManager.form.length > 0 && (r = n("ol.sortable"),
                r.nestedSortable({
                    disableNesting: "no-nest",
                    forcePlaceholderSize: !0,
                    handle: "div.drag-handle .icon-drag-handle",
                    items: "li",
                    opacity: .6,
                    placeholder: "placeholder",
                    tabSize: 25,
                    tolerance: "pointer",
                    toleranceElement: "> div",
                    stop: function(i, u) {
                        var f = n(u.item);
                        if (f.length != 0) {
                            var o = f.attr("data-forum-id")
                              , s = n("#field-parent-forum-" + o)
                              , c = s.val()
                              , h = f.parents("li.forum-item").first()
                              , e = 0;
                            e = h.length > 0 ? h.attr("data-forum-id") : n(r[0]).attr("data-root-forum-id");
                            s.val(e);
                            n(".icon[data-forum-id='" + o + "']").each(function(t, i) {
                                n(i).attr("data-parent-forum-id", e)
                            });
                            f.siblings("li.forum-item").andSelf().each(function(t, i) {
                                var r = n(i)
                                  , u = n("#field-display-order-" + r.attr("data-forum-id"));
                                u.length > 0 && (u.val(t),
                                r.attr("data-display-order", t),
                                r.find(".icon[data-forum-id='" + r.attr("data-forum-id") + "']").each(function(i, r) {
                                    n(r).attr("data-display-order", t)
                                }))
                            });
                            t.ForumManager.form.submit()
                        }
                    }
                }),
                t.ForumManager.form.find(".icon-edit").click(function(i) {
                    i.preventDefault();
                    t.ForumManager.form.mask();
                    var r = n(this).attr("data-forum-id")
                      , u = n(this).attr("data-parent-forum-id") || 0
                      , f = n(this).attr("data-display-order")
                      , e = n(this)
                      , o = e.parents("li[data-forum-id='" + r + "']");
                    n.ajax({
                        url: t.Routes.Instance.CPForumForm(u, f, {
                            forumID: r
                        }),
                        cache: !1,
                        success: function(i) {
                            var h = n("<div/>"), c = n("<div/>"), e = n(i).find("form"), l = o.find("table"), s;
                            c.append(e);
                            h.append(c);
                            s = h.dialog({
                                modal: !0,
                                dialogClass: "forum-form-modal",
                                draggable: !1,
                                resizable: !1,
                                close: function(i) {
                                    n(i.target).remove();
                                    t.ForumManager.form.unmask()
                                },
                                open: function() {
                                    t.ForumManager.form.unmask()
                                },
                                title: L.Global.Forums.EditForum()
                            });
                            n(s).parent().center({
                                sizeToWindow: !0,
                                maxWidth: 600,
                                maxHeight: 500
                            });
                            t.triggerHtmlInsert(n(s).parent());
                            e.attr("action", t.Routes.Instance.CPForumForm(u, f, {
                                forumID: r
                            }));
                            e.ajaxForm({
                                type: "post",
                                cache: !1,
                                beforeSubmit: function() {
                                    e.find("#field-submit").attr("disabled", "disabled")
                                },
                                success: function() {
                                    s.dialog("close");
                                    self.location.reload()
                                },
                                error: function(t, i, r) {
                                    n.log("TextStatus: " + i + "; ErrorThrown: " + r)
                                }
                            })
                        }
                    })
                }),
                t.ForumManager.form.find(".icon-add").click(t.ForumManager.addButtonClicked),
                n("#forums-sortable").find(".user-action-add-forum .button").click(t.ForumManager.addButtonClicked),
                i = t.ForumManager.form.find(".j-see-deleted"),
                i.change(function() {
                    var i = n(this).is(":checked");
                    n.cookie("Cobalt.ForumManager.SeeDeleted", i);
                    t.ForumManager.form.attr("data-see-deleted", i)
                }),
                u = n.cookie("Cobalt.ForumManager.SeeDeleted"),
                u == "true" && (i.prop("checked", !0),
                i.trigger("change")));
                t.runOnHtmlInsert(function(t) {
                    var i = t.find(".j-can-have-forum-url");
                    i.change(function() {
                        var i = t.find("#form-field-linkout-url");
                        this.checked ? (i.show(),
                        n("#form-field-can-have-threads, #form-field-can-have-threads input").hide()) : (i.hide(),
                        n("#form-field-can-have-threads, #form-field-can-have-threads input").removeClass("hide").show())
                    });
                    i.change()
                })
            },
            addButtonClicked: function(i) {
                i.preventDefault();
                t.ForumManager.form.mask();
                var r = n(this).attr("data-forum-id")
                  , u = n(this).attr("data-forum-id")
                  , f = n(this)
                  , e = f.parents("li[data-forum-id='" + r + "']");
                n.ajax({
                    url: t.Routes.Instance.CPForumForm(u, 0),
                    cache: !1,
                    success: function(i) {
                        var f = n("<div/>"), o = n("<div/>"), u = n(i).find("form"), s = e.find("table"), r;
                        o.append(u);
                        f.append(o);
                        r = f.dialog({
                            modal: !0,
                            dialogClass: "forum-form-modal",
                            draggable: !1,
                            resizable: !1,
                            close: function(i) {
                                n(i.target).remove();
                                t.ForumManager.form.unmask()
                            },
                            open: function() {
                                t.ForumManager.form.unmask()
                            },
                            title: L.Global.Forums.CreateForum()
                        });
                        n(r).parent().center({
                            sizeToWindow: !0,
                            maxWidth: 600,
                            maxHeight: 500
                        });
                        t.triggerHtmlInsert(n(r).parent());
                        u.ajaxForm({
                            type: "post",
                            cache: !1,
                            dataType: "json",
                            beforeSubmit: function() {
                                u.find("#field-submit").attr("disabled", "disabled")
                            },
                            success: function() {
                                r.dialog("close");
                                self.location.reload()
                            },
                            error: function(t, i, r) {
                                n.log("TextStatus: " + i + "; ErrorThrown: " + r)
                            }
                        })
                    }
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.ForumThreadForm = {
            dependentScripts: function() {
                return [{
                    dependency: t.User,
                    name: "Cobalt.User"
                }, {
                    dependency: t.Markup,
                    name: "Cobalt.Markup"
                }, {
                    dependency: t.UI,
                    name: "Cobalt.UI"
                }, {
                    dependency: t.Forms,
                    name: "Cobalt.Forms"
                }]
            },
            initialize: function() {
                var i, r;
                n("form.j-thread-form input").bind("keypress", function(n) {
                    n.keyCode == 13 && n.preventDefault()
                });
                i = n(".forum-create, .j-thread-form").find(".j-forum-thread-type");
                i.change(function() {
                    n(this).val() === "3" ? n(".j-toggle-announcement-form").show() : (n(".j-toggle-announcement-form").hide(),
                    n(".j-announcement-form").hide())
                });
                r = !0;
                n(".j-show-poll-button").click(function() {
                    if (n(".j-poll div").length || n(".j-add-poll-button").trigger("click"),
                    !r) {
                        var t = n(".j-attach-poll").val() == "y";
                        n(".j-attach-poll").val(t ? "n" : "y")
                    }
                });
                t.runOnHtmlInsert(function() {
                    i.change(!0);
                    n(".j-attach-poll").val() == "y" && n(".p-poll-form-a").is(":hidden") && (n.log("Showing poll form"),
                    n(".j-show-poll-button").trigger("click"));
                    r = !1
                });
                n("#field-submit").click(function() {
                    n(this).parents(".j-thread-form").valid() && n(".p-forum").mask()
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Gallery = {
            areaSelected: function() {},
            createTag: function() {},
            fullImageID: 0,
            initialize: function() {
                var r, i;
                n(".module.gallery .user-action-add-category-content a").click(function() {
                    try {
                        var i = n(this).attr("href");
                        n.get(i, function(i) {
                            var r = n("<div>");
                            r.html(i);
                            r.dialog({
                                modal: !0,
                                dialogClass: "modal",
                                draggable: !1,
                                title: "Add Content",
                                resizable: !1,
                                close: function(t) {
                                    n(t.target).hide()
                                }
                            });
                            r.parent().center({
                                sizeToWindow: !0,
                                maxWidth: 400,
                                maxHeight: 300
                            });
                            t.triggerHtmlInsert(r)
                        })
                    } catch (r) {}
                    return !1
                });
                r = n("#gallery-item");
                r.length > 0 && (i = n(".guild-galleries .image-viewer"),
                i.length > 0 && (t.Gallery.setFullImageID(parseInt(i.attr("data-id"))),
                t.Gallery.displayImagesSeen(),
                t.Gallery.setupTagger(i)));
                t.Gallery.displayImagesSeen()
            },
            setupTagger: function(r) {
                var u, f;
                r = r === i ? n(".guild-galleries .image-viewer") : r;
                u = [];
                n(".guild-galleries").find(".tagged-list li[data-tag-id]").each(function() {
                    var t = n(this), i;
                    t.find("a").length <= 0 && t.html(n("<a>").attr("href", "#").html(t.html()));
                    i = n.parseJSON(n(this).attr("data-tag-json"));
                    u.push(i)
                });
                f = r.attr("data-allow-tagging") === "True";
                n(".guild-galleries").delegate(".guild-galleries .image-viewer, .guild-galleries .tagged-list, .guild-galleries .tag-button", "mouseover", function() {
                    r.tagger === i && (r.tagger = new t.GalleryImageTagger({
                        imageViewer: r,
                        initialTags: u,
                        tagList: ".guild-galleries .tagged-list",
                        isEnabled: f
                    }))
                });
                r.find("a").click(function(i) {
                    i.preventDefault();
                    t.Gallery.handleImageLinkClick(n(this))
                })
            },
            displayImagesSeen: function() {
                var i = t.Gallery.ImagesSeen, r;
                i instanceof Object || (i = {});
                n(".latest-gallery-image[data-image-id]").each(function(r, u) {
                    var o = n(u).find("img"), s = parseInt(n(u).attr("data-image-id")), h = n(u).attr("data-gallery-id"), f = i[h], e;
                    f && f.indexOf(s) < 0 && (e = n("<span>").addClass("images-added").html(t.Localization.Main.Global.Common.New()),
                    o.parents("a").append(e))
                });
                r = n(".gallery-has-images");
                r.each(function(r, u) {
                    var e = n(u)
                      , s = parseInt(e.attr("data-id"));
                    if (s) {
                        var h = i[s]
                          , o = n.parseJSON(e.attr("data-image-ids"))
                          , f = 0;
                        h ? n(o).each(function(n) {
                            var t = o[n];
                            h.indexOf(t) < 0 && f++
                        }) : f = o.length;
                        f > 0 && e.append(n("<span>").addClass("images-added").html(f + " " + t.Localization.Main.Global.Common.New()))
                    }
                })
            },
            setFullImageID: function(i) {
                t.Gallery.fullImageID = i;
                t.Gallery.fullImageID > 0 && n.post(t.Routes.Instance.GallerySetImageSeen(t.Gallery.fullImageID), function() {})
            },
            handleImageLinkClick: function(r) {
                r.addClass("modal-loading");
                var u = r.attr("href")
                  , f = r.attr("data-title")
                  , e = parseInt(r.attr("data-max-width"))
                  , o = parseInt(r.attr("data-min-width"))
                  , s = parseInt(r.attr("data-max-height"))
                  , h = r.attr("data-auto-height") == "true";
                n.get(u, function(u) {
                    var c = n(u), l;
                    c.dialog({
                        draggable: !1,
                        title: f,
                        modal: !0,
                        resizable: !1,
                        dialogClass: "modal",
                        open: function() {
                            var r = n(".gallery-item-modal .image-viewer"), u, f;
                            r.length > 0 && (u = [],
                            n(".gallery-item-modal").find(".tagged-list li[data-tag-id]").each(function() {
                                var t = n(this), i;
                                t.find("a").length <= 0 && t.html(n("<a>").attr("href", "#").html(t.html()));
                                i = n.parseJSON(n(this).attr("data-tag-json"));
                                u.push(i)
                            }),
                            f = !0,
                            n(".gallery-item-modal").delegate(".gallery-item-modal .image-viewer, .gallery-item-modal .tagged-list", "mouseover", function() {
                                r.tagger === i && (r.tagger = new t.GalleryImageTagger({
                                    imageViewer: r,
                                    initialTags: u,
                                    tagList: ".gallery-item-modal .tagged-list",
                                    isEnabled: f
                                }))
                            }))
                        },
                        close: function() {
                            c.dialog("destroy");
                            c.remove()
                        }
                    });
                    l = c.dialog("widget");
                    t.triggerHtmlInsert(c.parent());
                    l.center({
                        sizeToWindow: !0,
                        minWidth: o,
                        maxWidth: e,
                        maxHeight: s,
                        autoHeight: h
                    });
                    r.removeClass("modal-loading")
                })
            }
        };
        t.GalleryImageTagger = function(n) {
            this.bind(n)
        }
        ;
        t.GalleryImageTagger.prototype = {
            bind: function(n) {
                this.areaSelected = function(n, i, r) {
                    t.Gallery.areaSelected(n, i, r)
                }
                ;
                this.createTag = function(n, i, r) {
                    return t.Gallery.createTag(n, i, r)
                }
                ;
                this.tagger = n.tagger;
                this.imageViewer = n.imageViewer;
                this.initialTags = n.initialTags;
                this.isEnabled = n.isEnabled;
                this.tagList = n.tagList;
                this.imageParent = n.imageParent;
                this.setupImageTagging()
            },
            setupImageTagging: function() {
                var r = this;
                r.tagger = new t.ImageTagging({
                    enableEditing: this.isEnabled,
                    imageSelector: ".taggable-image",
                    imageParent: r.imageParent !== i ? r.imageParent : r.imageViewer.selector,
                    initializeTaggingButton: ".tag-button",
                    tagList: r.tagList,
                    availableTags: {},
                    initialTags: this.initialTags !== i ? this.initialTags : {},
                    autoStartTagging: !1,
                    onAreaSelected: this.onAreaSelected,
                    onSelectChange: function(t, i) {
                        i.x1 /= t.width;
                        i.x2 /= t.width;
                        i.y1 /= t.height;
                        i.y2 /= t.height;
                        i.height /= t.height;
                        i.width /= t.width;
                        n("#field-position-x").val(i.x1);
                        n("#field-position-y").val(i.y1);
                        n("#field-width").val(i.width);
                        n("#field-height").val(i.height)
                    },
                    createTag: this.createTag,
                    createDeleteLink: function(i, u, f, e) {
                        var s = e.attr("data-tag-id"), h = n(r.tagList).find("[data-tag-id='" + s + "']"), c;
                        if (h.length > 0 && (c = h.attr("data-enable-deletion"),
                        c === "true")) {
                            var l = parseInt(e.css("border-left-width").replace("px", "") || "0")
                              , a = parseInt(e.css("border-top-width").replace("px", "") || "0")
                              , v = (f.width() - u.width()) / 2 - l
                              , y = (f.height() - u.height()) / 2 - a
                              , p = i.y1 * u.height() + y
                              , w = i.x1 * u.width() + v
                              , o = n("<a>").addClass("close").attr("href", t.Routes.Instance.GalleryRemoveTag(s)).html("[x]");
                            return o.click(function(t) {
                                if (t.stopImmediatePropagation(),
                                t.preventDefault(),
                                confirm("Delete?")) {
                                    var i = n("#gallery-item");
                                    i.mask();
                                    n.post(n(this).attr("href"), function() {
                                        document.location.reload()
                                    })
                                }
                            }),
                            o.css("top", p + 5).css("left", e.width() + w - 10),
                            o
                        }
                        return ""
                    }
                });
                n(".tag-button").click(function(i) {
                    if (r.tagger.taggingStarted)
                        n(this).html("<span>Stop Tagging<\/span>");
                    else {
                        var u = n("#gallery-item");
                        u.mask();
                        n.get(t.Routes.Instance.GalleryReloadImage(u.attr("data-id")), function(i) {
                            u.empty().html(n(i));
                            u.unmask();
                            t.Gallery.setupTagger();
                            t.triggerHtmlInsert(n(r.tagger.imageParent).parent())
                        })
                    }
                    i.stopImmediatePropagation()
                })
            },
            onAreaSelected: function(r, u) {
                var f = n("#tagging-form");
                if (f.html() === "") {
                    var e = this
                      , s = n(e.imageParent)
                      , o = u.Value;
                    n.ajax({
                        url: t.Routes.Instance.GalleryAddTag(s.attr("data-id")),
                        cache: !1,
                        success: function(u) {
                            var h, s, l, c;
                            f.empty().show().addClass("modal").html(u);
                            h = n(".imgareaselect-selection");
                            h.css("font-size", "inherit").append(f).parent().css("overflow", "visible");
                            n("#field-position-x").val(o.x1);
                            n("#field-position-y").val(o.y1);
                            n("#field-width").val(o.width);
                            n("#field-height").val(o.height);
                            s = f.find(".tag-form");
                            s.unbind("submit");
                            s.ajaxForm({
                                beforeSubmit: function() {
                                    s.find(":submit").attr("disabled", "disabled")
                                },
                                success: function(r) {
                                    var h, u, o;
                                    r !== null && r !== i && r.Status === i || r.Status !== i && r.Status != "invalid" ? (r = n.parseJSON(r),
                                    f.empty().hide(),
                                    h = '{"id":' + r.ID + ',"name":"' + r.Text + '","rect":{"x1":' + r.PositionX + ',"y1":' + r.PositionY + ',"width":' + r.Width + ',"height":' + r.Height + "}}",
                                    u = r.Text,
                                    n(r.Text).find("a").length < 1 && (u = n("<a>").attr("href", "#").html(r.Text)),
                                    o = n("<li>").attr("data-tag-id", r.ID).attr("data-enable-deletion", "true").html(u),
                                    n(e.tagList).find("li").last().append(", "),
                                    n(e.tagList).append(o),
                                    e.createTaggedRegion(r.ID, r.Text, {
                                        x1: r.PositionX,
                                        y1: r.PositionY,
                                        width: r.Width,
                                        height: r.Height
                                    }),
                                    n("#tagging-form a.close").click(),
                                    n(".ac_results").hide(),
                                    n(".ac_results").remove(),
                                    t.triggerHtmlInsert(f)) : (f.find(":submit").removeAttr("disabled"),
                                    t.Forms.displayErrors(s, r.Errors))
                                },
                                error: function() {
                                    n.log("error")
                                }
                            });
                            l = n("#tagging-form .tag-field");
                            c = n("#tagging-form a.close");
                            l.focus();
                            f.mousedown(function(t) {
                                n(t.target) != c && t.stopImmediatePropagation()
                            });
                            c.click(function(t) {
                                t.preventDefault();
                                n("#tagging-form").removeClass("modal").hide();
                                n("#tagging-form").empty();
                                e.imgAreaSelect.cancelSelection();
                                t.stopImmediatePropagation()
                            });
                            t.Gallery.areaSelected(r, h, t.Gallery.imageViewer)
                        }
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        var t = function() {
            function n() {}
            return n.RegisterAboveContentMobileNav = function() {
                $(document).ready(function() {
                    var i = $("div.mobile-view-1")
                      , r = $("div.mobile-view-2")
                      , n = $("div.first-nav a")
                      , t = $("div.second-nav a");
                    n.click(function() {
                        n.parent().addClass("selected");
                        t.parent().removeClass("selected");
                        r.removeClass("selected");
                        i.addClass("selected")
                    });
                    t.click(function() {
                        t.parent().addClass("selected");
                        n.parent().removeClass("selected");
                        r.addClass("selected");
                        i.removeClass("selected")
                    })
                })
            }
            ,
            n
        }();
        n.HomePage = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ;
    (function(t, i, r) {
        var l, u, st, ht, a, v, g, e, o, ct, f, s, p, b, k, lt = !1, d = !1, nt, tt, it, rt, h, ut, ft, at, et, ot = !1, c, w, y = 0;
        i.ImageManager = {
            uploadMode: function() {
                return y
            },
            showInstructions: function() {
                u.is(":visible") && (ot && y != 0 && !t(".instructions").is(":visible") && t.cookie("Cobalt.ImageManager.instructions") == null ? setTimeout(function() {
                    t(".instructions").fadeIn("slow");
                    setTimeout(function() {
                        t(".instructions").is(":visible") && t(".instructions").fadeOut("slow")
                    }, 5e3)
                }, 2e3) : c.value == "template-select" && setTimeout(function() {
                    t(".template-select-instructions").fadeIn("slow")
                }, 2e3))
            },
            hideModal: function() {
                l.hide();
                t("body").css("overflow", "auto")
            },
            showModal: function(n, f, e, o, h) {
                ft = f;
                e !== r && (c === r ? c = i.ViewStateManager.getViewState("m", e) : c.setValue(e));
                h !== r && (w === r ? w = i.ViewStateManager.getViewState("f", h) : w.setValue(h));
                o !== r && (s === r ? s = i.ViewStateManager.getViewState("c", o) : s.setValue(o));
                e !== r || o !== r ? (t(window).trigger("hashchange"),
                setTimeout(function() {
                    l.show();
                    t("body").css("overflow", "hidden");
                    i.ImageManager.showInstructions()
                }, 200)) : (l.show(),
                t("body").css("overflow", "hidden"),
                i.ImageManager.showInstructions());
                switch (e) {
                case "image":
                    u.find(".insert-image-options").show()
                }
            },
            setPostType: function(n) {
                p === r ? p = i.ViewStateManager.getViewState("pt", n) : p.setValue(n)
            },
            dependentScripts: function() {
                return [{
                    dependency: i.User,
                    name: "Cobalt.User"
                }, {
                    dependency: i.UI,
                    name: "Cobalt.UI"
                }, {
                    dependency: i.Listing,
                    name: "Cobalt.Listing"
                }, {
                    dependency: i.Markup,
                    name: "Cobalt.Markup"
                }, {
                    dependency: i.BulkModeration,
                    name: "Cobalt.BulkModeration"
                }]
            },
            initialize: function() {
                var vt, n, kt, wt;
                i.ViewStateManager.createBrowserHistory = !0;
                ot = typeof FileReader != "undefined" && FileReader != null;
                u = t("#image-manager");
                st = 1;
                ht = u.attr("data-thumbnail-size-value");
                a = u.attr("data-thumbnail-width");
                v = u.attr("data-thumbnail-height");
                g = u.attr("data-entity-type-id");
                e = u.attr("data-entity-id");
                at = u.attr("data-default-image-width");
                s = i.ViewStateManager.getViewState("c", e);
                p = i.ViewStateManager.getViewState("pt", "");
                b = i.ViewStateManager.getViewState("v", 2);
                k = i.ViewStateManager.getViewState("s", 1);
                c = i.ViewStateManager.getViewState("m", "");
                w = i.ViewStateManager.getViewState("f", !1);
                ct = u.find("div.bulk-moderation > form");
                vt = u.find("ul.listing");
                f = u.find("div.listing-container > div.loading");
                n = u.find(".j-tablesorter-pager");
                o = u.find("form.listing-filters");
                var dt = u.attr("data-listing-url")
                  , ti = u.find("form.image-manager-form")
                  , bt = null;
                h = o.find("#filter-search");
                h.watermark("Search by name");
                h.attr("autocomplete", "off");
                l = t("#image-manager-modal");
                var yt = t('<a class="reset">x<\/a').click(function() {
                    h.val() != "" && (h.val(""),
                    i.ImageManager.refreshListing())
                })
                  , gt = "You appear to have unsaved changes. Any unsaved changes will be lost if you close this window."
                  , pt = !1
                  , ni = function() {
                    if (pt)
                        return null;
                    pt = !1;
                    var i = t(".content-manager-form")
                      , n = !1;
                    return i.find("input[type=text]").each(function() {
                        if (this.value != this.defaultValue) {
                            n = !0;
                            return
                        }
                    }),
                    i.find("textarea").each(function() {
                        if (this.value != this.defaultValue) {
                            n = !0;
                            return
                        }
                    }),
                    i.find(".select").each(function() {
                        if (t(this).is(":visible") && !this.options[this.selectedIndex].defaultSelected) {
                            n = !0;
                            return
                        }
                    }),
                    n ? gt : void 0
                };
                t(window).on("beforeunload", ni);
                t("button[type=submit]").on("click", function() {
                    pt = !0
                });
                l.length > 0 && (l.find("div.close").click(function() {
                    if (i.ImageManager.hideModal(),
                    c.value === "template-select") {
                        p.setValue("");
                        c.setValue("");
                        var n = "/cp/cms/folders" + self.location.hash;
                        self.location = n
                    }
                }),
                t("html,body").bind("keyup", function(n) {
                    n.keyCode == "27" && i.ImageManager.hideModal()
                }));
                u.delegate("ul#categories > li > div.wrapper > img, ul#categories > li > div.wrapper > div.modifier-icon", "click", i.ImageManager.handleFolderClick);
                u.delegate("div.folder-breadcrumbs > ul > li", "click", i.ImageManager.handleFolderClick);
                u.delegate("li.post > div > a", "click", i.ImageManager.handlePostClick);
                u.delegate("li.category div.micro-controls > a.edit-button", "click", i.ImageManager.editFolder);
                u.delegate("li.video a.edit-button", "click", i.ImageManager.editVideo);
                u.delegate("li.audio a.edit-button", "click", i.ImageManager.editAudio);
                i.User.Preferences.ShowDeletedContent && u.find("input.show-deleted").attr("checked", "true");
                u.find("input.show-deleted").change(function() {
                    i.User.Preferences.ShowDeletedContent = u.find("input.show-deleted").is(":checked");
                    i.User.savePreferences(!0);
                    i.ImageManager.refreshListing()
                });
                u.find("input.show-featured").change(function() {
                    w.setValue(t(this).is(":checked"));
                    i.ImageManager.refreshListing()
                });
                u.delegate("div.micro-controls > a.undelete-button,div.micro-controls > a.delete-button", "click", function(n) {
                    n.preventDefault();
                    var e = t(this).attr("href")
                      , r = t(this).parents("div.wrapper")
                      , u = t(this).hasClass("delete-button") ? "delete" : "undelete"
                      , f = t(this);
                    i.Utils.getRequestVerificationToken().done(function(n) {
                        i.Forms.AjaxPostSubmit(f, n).done(function() {
                            u == "undelete" ? r.removeClass("status-deleted") : (r.removeClass("status-draft"),
                            r.removeClass("status-published"),
                            r.addClass("status-deleted"))
                        })
                    })
                });
                u.delegate("div.micro-controls > a.social-button", "click", function() {
                    var r = t(this).attr("href")
                      , n = t(this).parents("div.wrapper");
                    return n.addClass("social-loading"),
                    i.Utils.postWithToken(r, {}).done(function() {
                        n.removeClass("social-loading")
                    }),
                    !1
                });
                u.delegate("div.micro-controls > a.representative-button", "click", function(n) {
                    n.preventDefault();
                    var f = t(this).attr("href")
                      , r = t(this).parents("div.wrapper")
                      , e = t(this).parents("ul#files, ul#videos, ul#posts").find("div.wrapper")
                      , u = t(this)
                      , u = t(this);
                    i.Utils.getRequestVerificationToken().done(function(n) {
                        i.Forms.AjaxPostSubmit(u, n).done(function() {
                            r.toggleClass("representative")
                        })
                    })
                });
                u.delegate("div.micro-controls > a.feature-button", "click", function(n) {
                    var r, u, f;
                    (n.preventDefault(),
                    r = t(this).attr("href"),
                    r != null) && (u = t(this).parents("div.wrapper"),
                    f = t(this),
                    i.Utils.getRequestVerificationToken().done(function(n) {
                        i.Forms.AjaxPostSubmit(f, n).done(function() {
                            u.toggleClass("featured")
                        })
                    }))
                });
                u.delegate("div.micro-controls > a.index-button", "click", function(n) {
                    var r, u, f;
                    (n.preventDefault(),
                    r = t(this).attr("href"),
                    r != null) && (u = t(this).parents("div.wrapper"),
                    f = t(this),
                    i.Utils.getRequestVerificationToken().done(function(n) {
                        i.Forms.AjaxPostSubmit(f, n).done(function() {
                            u.toggleClass("index-entity")
                        })
                    }))
                });
                u.find("div.controls div.actions a.select-all > ul.sub-menu > li").click(function() {
                    t("div.controls div.actions a.select-all > ul.sub-menu").hide();
                    var n = ""
                      , i = t(this).attr("data-value");
                    switch (i) {
                    case "everything":
                    case "nothing":
                        n = "div.listing-container div.wrapper:not(.parent-category) div.micro-controls > input[type=checkbox]";
                        break;
                    case "folders":
                        n = "div.listing-container ul#categories div.wrapper:not(.parent-category) div.micro-controls > input[type=checkbox]";
                        break;
                    case "pages":
                        n = "div.listing-container ul#pages div.micro-controls > input[type=checkbox]";
                        break;
                    case "posts":
                        n = "div.listing-container ul#posts div.micro-controls > input[type=checkbox]";
                        break;
                    case "images":
                        n = "div.listing-container ul#files div.micro-controls > input[type=checkbox]";
                        break;
                    case "audio":
                        n = "div.listing-container ul#audio div.micro-controls > input[type=checkbox]";
                        break;
                    case "file":
                        n = "div.listing-container ul#file-attachments div.micro-controls > input[type=checkbox]"
                    }
                    i == "nothing" ? u.find(n).removeAttr("checked") : u.find(n).attr("checked", "checked");
                    u.find(n).trigger("change")
                });
                t.browser.msie ? u.find(".fileinput-button").removeClass("hide") : u.find("div.controls div.actions a.j-new-image").click(function(n) {
                    n.preventDefault();
                    u.find(".j-add-file").click()
                });
                u.find("div.controls div.actions a.new-folder").click(function() {
                    i.ImageManager.createFolder()
                });
                u.find("div.controls div.actions a.new-post").click(function() {
                    self.location = "/cp/cms/posts/create?parentCategoryID=" + e
                });
                u.find("div.controls div.actions a.create-new-post").click(function() {
                    self.location = "/cp/cms/posts/create?parentCategoryID=" + e
                });
                u.find("div.controls div.actions .create-new-post-from-template").click(function(n) {
                    n.stopImmediatePropagation();
                    self.location = "/cp/cms/posts/create?parentCategoryID=" + e + "&post-type=3"
                });
                u.find("div.controls div.actions li.new-post").mouseover(function() {
                    t(this).find(".post-menu").show()
                });
                u.find("div.controls div.actions li.new-post").mouseout(function() {
                    t(this).find(".post-menu").hide()
                });
                u.find("div.controls div.actions a.new-page").click(function() {
                    self.location = "/cp/cms/pages/create?parentCategoryID=" + e
                });
                u.find("div.controls div.actions a.edit-folder").click(function(n) {
                    i.ImageManager.editFolder(n, e)
                });
                u.find("div.controls div.actions a.new-video").click(function() {
                    i.ImageManager.createVideo()
                });
                h.keyup(function() {
                    t(this).val() == "" ? yt.fadeOut() : yt.fadeIn();
                    clearTimeout(bt);
                    bt = setTimeout(function() {
                        i.ImageManager.refreshListing()
                    }, 500)
                });
                h.parent().append(yt);
                h.val() != "" && h.keyup();
                kt = t("#image-manager").fileupload({
                    autoUpload: !0,
                    previewMaxWidth: a,
                    previewMaxHeight: v,
                    sequentialUploads: !0,
                    timeout: 0
                });
                wt = t(kt).data("fileupload");
                i.ImageManager.updateUploadAction();
                nt = u.find("div.view > ul > li");
                tt = nt.find("a");
                tt.each(function() {
                    t(this).click(function() {
                        return b.setValue(t(this).attr("data-value")),
                        a = t(this).attr("data-thumbnail-width"),
                        v = t(this).attr("data-thumbnail-height"),
                        wt.options.previewMaxWidth = a,
                        wt.options.previewMaxHeight = v,
                        i.ImageManager.updateUploadAction(),
                        !1
                    })
                });
                it = u.find("div.sort > ul > li");
                rt = it.find("a");
                rt.each(function() {
                    t(this).click(function() {
                        return k.setValue(t(this).attr("data-value")),
                        !1
                    })
                });
                i.runOnHtmlInsert(function() {
                    n.find("a").unbind("click");
                    n.find("a").click(function() {
                        var r = o.attr("action"), e = r, n, u, f;
                        r.indexOf("?") > 0 && (e = r.substring(0, r.indexOf("?")));
                        n = t.query.load(t(this).attr("href"));
                        n.get("page") == "" && (n = n.set("page", "1"));
                        u = t.query.load(r);
                        for (f in n.keys)
                            u = u.set(f, n.keys[f]);
                        return o.attr("action", e + u.toString()),
                        i.ImageManager.refreshListing(),
                        !1
                    })
                });
                l.length > 0 ? (u.delegate("ul#files > li div.wrapper a", "click", function() {
                    var n = t(this).parents("li.attachment").attr("data-id");
                    return t.ajax({
                        url: "/cp/cms/image-manager/attachment-url/" + n,
                        success: function(n) {
                            var f = n.thumbnailUrl, e = n.fullSizeUrl, u = t("input[name=image-insert-option]:checked").val(), r;
                            (u == null || u == "") && (u = "thumb");
                            r = "";
                            switch (u) {
                            case "thumb":
                                r = '<img src="' + f + '">';
                                break;
                            case "lightbox":
                                r = '<a class="lightbox" href="' + e + '"><img src="' + f + '"><\/a>';
                                break;
                            case "full":
                                r = '<img src="' + e + '">'
                            }
                            ft(r);
                            i.ImageManager.hideModal()
                        }
                    }),
                    !1
                }),
                i.runOnHtmlInsert(function(n) {
                    n.find("div.attachment-wrapper a").attr("title", '<div class="header">Insert Image<\/div>Click here to insert this image at the default width (<b>' + at + " pixels<\/b>).<br><br>Note: You can set the default width in the Settings section of the News and Media Control Panel.").tooltip()
                })) : i.runOnHtmlInsert(function() {
                    u.find("ul#files > li div.wrapper > a").addClass("lightbox")
                });
                o.addClass("ajax-listing");
                o.attr("action", dt);
                o.ajaxForm({
                    type: "get",
                    cache: !1,
                    beforeSubmit: function() {
                        if (d)
                            return !1;
                        d = !0;
                        f.fadeIn()
                    },
                    success: function(e) {
                        var c, s, l, a, h, v, o;
                        if (f.hide(),
                        d = !1,
                        lt = !0,
                        u.attr("data-thumbnail-size", e.ThumbnailSize),
                        c = t(e.Results),
                        vt.replaceWith(c),
                        vt = c,
                        s = t(e.Pagination),
                        n.length == 0 ? (u.find("div.listing-header").append(s),
                        u.find("div.listing-footer").append(s.clone())) : n.each(function() {
                            t(this).replaceWith(s.clone())
                        }),
                        n = u.find(".j-tablesorter-pager"),
                        e.CategoryPath != null) {
                            for (l = t("<ul>").addClass("group"),
                            o = 0; o < e.CategoryPath.length; o++)
                                a = e.CategoryPath[o],
                                h = t("<li>"),
                                h.html(a.label),
                                h.attr("data-id", a.id),
                                l.append(h);
                            u.find("div.folder-breadcrumbs > ul").replaceWith(l)
                        }
                        for (u.attr("data-display-mode", e.DisplayMode),
                        u.attr("data-upload-mode", e.UploadMode),
                        y = e.UploadMode,
                        t.info(y),
                        y == r || y == 0 ? t(".image-manager-form").hide() : t(".image-manager-form").show(),
                        u.attr("class", ""),
                        ut = e.ParentCategoryID,
                        v = u.find("ul#categories > li:first-child > div"),
                        v.attr("data-id") == ut && v.addClass("parent-category"),
                        i.ImageManager.showInstructions(),
                        et = e.AllowedContentTypes,
                        u.find("div.actions li.contextual").hide(),
                        o = 0; o < et.length; o++)
                            u.find("div.actions li.new-" + et[o]).css("display", "inline-block");
                        return i.triggerHtmlInsert(vt),
                        i.triggerHtmlInsert(n),
                        i.ImageManager.updateUploadAction(),
                        u.trigger("onLoadComplete"),
                        !1
                    },
                    error: function() {
                        return d = !1,
                        f.hide(),
                        !1
                    }
                });
                ot || t(".image-manager-form").show();
                i.runOnHtmlInsert(function(n) {
                    var r = n.find("#field-display-mode"), i;
                    r.change(function() {
                        t(this).val() == "4" ? (t("#j-itunes-categories").show(),
                        t("#j-syndication-itunes-notes").show()) : (t("#j-itunes-categories").hide(),
                        t("#j-syndication-itunes-notes").hide())
                    });
                    r.change();
                    i = n.find("#field-include-listing-avatar");
                    i.change(function() {
                        t(this).val() == "t" ? t("#j-avatar-thumbnail-size").show() : t("#j-avatar-thumbnail-size").hide()
                    });
                    i.change()
                });
                i.runOnHtmlInsert(function(n) {
                    n.find("div.wrapper > div.micro-controls > input[type=checkbox]").each(i.ImageManager.wireupCheckbox);
                    n.find("div.wrapper > p.title").each(i.ImageManager.wireupTitles)
                });
                e = s.value;
                ht = b.value;
                st = k.value;
                i.ImageManager.refreshListing();
                t(window).bind("hashchange", function() {
                    lt && (i.ViewStateManager.updateFromHash(),
                    i.ImageManager.refreshListing())
                })
            },
            handlePostClick: function(n) {
                c.value === "template-select" && (n.preventDefault(),
                ft(t(this).parent().attr("data-id")),
                l.hide())
            },
            createVideo: function() {
                try {
                    f.fadeIn();
                    var n = "/cp/cms/videos/" + e + "/create?width=" + a + "&height=" + v;
                    t.ajax({
                        url: n,
                        success: function(n) {
                            i.ImageManager.createVideoModal(n.html, "New Video", "create")
                        },
                        dataType: "json"
                    })
                } catch (u) {}
            },
            editVideo: function(n, r, u) {
                var o, e, s;
                try {
                    f.fadeIn();
                    o = t(this);
                    e = o.parents("div.wrapper");
                    r = r || e.attr("data-id");
                    u = u || e.attr("data-category-id");
                    s = "/cp/cms/videos/" + u + "/" + r + "/edit?width=" + a + "&height=" + v;
                    t.ajax({
                        url: s,
                        success: function(n) {
                            i.ImageManager.createVideoModal(n.html, "Edit Video", "edit", r)
                        },
                        dataType: "json"
                    })
                } catch (c) {}
            },
            createVideoModal: function(n, r, e, o) {
                var s, h;
                f.hide();
                s = t("<div>");
                s.html(n);
                e = e || "create";
                s.dialog({
                    modal: !0,
                    dialogClass: "modal video-modal category-modal",
                    draggable: !1,
                    title: r,
                    resizable: !1,
                    close: function(n) {
                        i.TinyMCE.unload();
                        t(n.target).dialog("destroy");
                        t(n.target).remove()
                    }
                });
                s.find("button#field-cancel").click(function() {
                    return s.dialog("close"),
                    !1
                });
                s.find("button#field-submit").click(function() {
                    tinyMCE.triggerSave()
                });
                i.Tags.initialize();
                s.parent().center({
                    sizeToWindow: !0,
                    maxWidth: 640,
                    maxHeight: 500
                });
                h = function(n) {
                    return s.dialog("close"),
                    f.hide(),
                    n.Success ? t.get("/cp/cms/videos/" + n.id + "/manager-item?width=" + a + "&height=" + v, function(n) {
                        var r = t(n)
                          , f = u.find("ul#videos")
                          , e = f.find('li[data-id="' + o + '"]');
                        setTimeout(function() {
                            e.length > 0 ? (r.hide(),
                            e.replaceWith(r)) : f.prepend(r);
                            i.triggerHtmlInsert(r);
                            r = f.find('li[data-id="' + o + '"]');
                            r.fadeIn(function() {
                                t(this).show()
                            })
                        }, 200)
                    }) : i.ImageManager.createVideoModal(n.html, r, e, o),
                    !1
                }
                ;
                s.find("form").ajaxForm({
                    type: "post",
                    dataType: "json",
                    beforeSubmit: function() {
                        f.fadeIn()
                    },
                    error: h,
                    success: h
                });
                i.triggerHtmlInsert(s)
            },
            createFolder: function() {
                try {
                    f.fadeIn();
                    var n = "/cp/cms/folders/" + e + "/create";
                    t.ajax({
                        url: n,
                        success: function(n) {
                            i.ImageManager.createFolderModal(n.html, "New Folder", "create")
                        },
                        dataType: "json"
                    })
                } catch (u) {}
            },
            editFolder: function(n, r) {
                var u, e;
                try {
                    f.fadeIn();
                    u = t(this);
                    r = r || u.parents("div.wrapper").attr("data-id");
                    e = "/cp/cms/folders/" + r + "/edit";
                    t.get(e, function(n) {
                        i.ImageManager.createFolderModal(n.html, "Edit Folder", "edit", r)
                    })
                } catch (o) {}
            },
            createFolderModal: function(n, r, e, o) {
                f.hide();
                var s = t("<div>");
                s.html(n);
                e = e || "create";
                s.dialog({
                    modal: !0,
                    dialogClass: "modal category-modal",
                    draggable: !1,
                    title: r,
                    resizable: !1,
                    close: function(n) {
                        t(n.target).dialog("destroy");
                        t(n.target).remove()
                    }
                });
                s.find("button#field-cancel").click(function() {
                    return s.dialog("close"),
                    !1
                });
                i.Tags.initialize();
                s.parent().center({
                    sizeToWindow: !0,
                    maxWidth: 800,
                    maxHeight: 550,
                    minHeight: 540
                });
                s.find("form").ajaxForm({
                    type: "post",
                    dataType: "json",
                    beforeSubmit: function() {
                        f.fadeIn()
                    },
                    success: function(n) {
                        if (s.dialog("close"),
                        f.hide(),
                        n.Success) {
                            var h = t.tmpl(t("#category-template"), n)
                              , a = u.find("ul#categories")
                              , c = a.find('li > div[data-id="' + ut + '"]')
                              , l = null;
                            if (e == "edit" && (l = a.find('li > div[data-id="' + o + '"]').parent(),
                            l.length == 0))
                                return;
                            c.length > 0 && (c = c.parent());
                            setTimeout(function() {
                                h.hide();
                                l != null && l.length > 0 ? (l.replaceWith(h),
                                h = a.find('li > div[data-id="' + o + '"]').parent()) : c.length > 0 ? h.insertAfter(c) : a.prepend(h);
                                h.fadeIn(function() {
                                    t(this).show()
                                })
                            }, 200)
                        } else
                            i.ImageManager.createFolderModal(n.html, r, e, o);
                        return !1
                    }
                });
                i.triggerHtmlInsert(s)
            },
            editAudio: function(n, r) {
                var u, e;
                try {
                    f.fadeIn();
                    u = t(this);
                    r = r || u.parents("li.audio").attr("data-id");
                    e = "/cp/cms/audio/" + r + "/edit";
                    t.get(e, function(n) {
                        i.ImageManager.createAudioModal(n.html, "Edit Podcast", r)
                    })
                } catch (o) {}
            },
            createAudioModal: function(n, r, e) {
                var o, s;
                f.hide();
                o = t("<div>");
                o.html(n);
                o.dialog({
                    modal: !0,
                    dialogClass: "modal category-modal",
                    draggable: !1,
                    title: r,
                    resizable: !1,
                    close: function(n) {
                        t(n.target).dialog("destroy");
                        t(n.target).remove()
                    }
                });
                o.find("button#field-cancel").click(function() {
                    return o.dialog("close"),
                    !1
                });
                i.Tags.initialize();
                o.parent().center({
                    sizeToWindow: !0,
                    maxWidth: 540,
                    maxHeight: 500,
                    autoHeight: !0,
                    minHeight: 400
                });
                s = function(n) {
                    return o.dialog("close"),
                    f.hide(),
                    n.Success ? t.get("/cp/cms/audio/" + n.id + "/manager-item", function(r) {
                        var f = t(r)
                          , o = u.find("ul#audio")
                          , s = o.find('li[data-id="' + e + '"]');
                        setTimeout(function() {
                            f.hide();
                            s.replaceWith(f);
                            i.triggerHtmlInsert(f);
                            f = o.find('li[data-id="' + e + '"]');
                            f.fadeIn(function() {
                                n.RecentlyPublished && confirm("This appears to be recently published audio. Would you like to create a Post for it?") && (self.location = "/cp/cms/posts/create?audio-id=" + e);
                                t(this).show()
                            })
                        }, 200)
                    }) : i.ImageManager.createAudioModal(n.html, r, e),
                    !1
                }
                ;
                o.find("form").ajaxForm({
                    type: "post",
                    dataType: "json",
                    beforeSubmit: function() {
                        f.fadeIn()
                    },
                    error: s,
                    success: s
                });
                i.triggerHtmlInsert(o)
            },
            handleFolderClick: function() {
                var n = t(this), r, f, u, c;
                (n.is("img") || n.hasClass("modifier-icon")) && (n = n.parent());
                h.val("");
                r = o.attr("action");
                r.indexOf("?") > 0 && (f = r.substring(0, r.indexOf("?")),
                u = t.query.load(r),
                u.get("page") != "" && (u = u.remove("page")),
                c = f + u.toString(),
                o.attr("action", c));
                e = n.attr("data-id");
                s != null && s.value == e ? i.ImageManager.refreshListing() : s.setValue(e)
            },
            refreshListing: function() {
                var r = o.attr("action"), u = r, n;
                r != null && r.indexOf("?") > 0 && (u = r.substring(0, r.indexOf("?")));
                n = t.query.load(r);
                rt.removeClass("active");
                it.find("a[data-value=" + k.value + "]").addClass("active");
                tt.removeClass("active");
                nt.find("a[data-value=" + b.value + "]").addClass("active");
                n = n.remove("filter-search");
                n = n.set("t", b.value);
                n = n.set("s", k.value);
                n = n.set("entity-type-id", g);
                n = n.set("entity-id", s.value);
                n = n.set("post-type", p.value);
                n = n.set("m", c.value);
                n = n.set("f", w.value.toString());
                ct.attr("action", i.Routes.Instance.CPCategoryContentBulkModeration(s.value));
                t("#page-container-content").animate({
                    scrollTop: 0
                }, 0);
                o.attr("action", u + n.toString());
                o.submit()
            },
            wireupCheckbox: function() {
                var n = t(this);
                n.is(":checked") && n.parents("div.wrapper").addClass("selected");
                n.change(function() {
                    var n = t(this);
                    n.is(":checked") ? n.parents("div.wrapper").addClass("selected") : n.parents("div.wrapper").removeClass("selected")
                })
            },
            updateUploadAction: function() {
                function n() {
                    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
                }
                function i() {
                    return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
                }
                t(".image-manager-form").attr("action", "/upload.ashx?thumbnail-width=" + a + "&thumbnail-height=" + v + "&entity-type-id=" + g + "&entity-id=" + e + "&upload-mode=" + y + "&guid=" + i())
            },
            wireupTitles: function() {
                var n = t(this);
                n.click(function() {
                    var u = t(this), s = "attachment", f = u.parents("li.attachment"), e;
                    if (f.length == 0 && (f = u.parents("li.audio"),
                    s = "audio"),
                    e = f.attr("data-id"),
                    e) {
                        var h = s == "attachment" ? i.Routes.Instance.AttachmentRename(e) : i.Routes.Instance.AudioRename(e)
                          , c = u.text()
                          , n = t('<form method="post">').attr("action", h)
                          , o = t('<input type="text" name="title">').attr("value", c);
                        n.append(t(o)).hide();
                        n.ajaxForm({
                            success: function(t) {
                                t.Status === r || t.Status !== r && t.Status != "Invalid" ? n.fadeOut(function() {
                                    var t = n.find("input[name=title]").val();
                                    u.html(t);
                                    n.remove();
                                    u.fadeIn()
                                }) : n.effect("shake", {
                                    times: 6
                                }, 30)
                            },
                            error: function() {}
                        });
                        t(n).fadeIn(function() {
                            t(o).focus();
                            t(o).select()
                        });
                        u.hide();
                        u.before(t(n));
                        f.unbind("click");
                        f.click(function(i) {
                            t(i.target).is("input") || n.fadeOut(function() {
                                n.remove();
                                u.show()
                            })
                        })
                    }
                    return !1
                })
            }
        };
        t.widget("blueimpUI.fileupload", t.blueimp.fileupload, {
            getFileListing: function() {
                var n = t("#image-manager");
                if (n.length > 0)
                    switch (i.ImageManager.uploadMode()) {
                    case 1:
                        return n.find("ul.listing-files");
                    case 2:
                        return n.find("ul.listing-audio");
                    case 3:
                        return n.find("ul.listing-file-attachments")
                    }
            },
            options: {
                autoUpload: !1,
                maxNumberOfFiles: r,
                maxFileSize: r,
                minFileSize: 1,
                acceptFileTypes: /.+$/i,
                previewFileTypes: /^image\/(gif|jpeg|png)$/,
                previewMaxWidth: 80,
                previewMaxHeight: 80,
                previewAsCanvas: !0,
                uploadTemplate: function() {
                    var n = t("#image-manager");
                    if (n.length > 0)
                        switch (i.ImageManager.uploadMode()) {
                        case 1:
                            return t("#image-template-upload");
                        case 2:
                            return t("#audio-template-upload");
                        case 3:
                            return t("#file-template-upload")
                        }
                },
                dataType: "json",
                drop: function() {
                    t("#image-manager").length > 0 && (setTimeout(function() {
                        t(".instructions").fadeOut()
                    }, 500),
                    t.cookie("Cobalt.ImageManager.instructions") == null && t.cookie("Cobalt.ImageManager.instructions", "1", {
                        path: "/",
                        expires: 365
                    }))
                },
                add: function(n, r) {
                    var f, u, e;
                    (i.ImageManager.updateUploadAction(),
                    y != 0) && (f = t(this).find(".no-results"),
                    f.length > 0 && f.remove(),
                    u = t(this).data("fileupload"),
                    u._adjustMaxNumberOfFiles(-r.files.length),
                    r.isAdjusted = !0,
                    r.isValidated = u._validate(r.files),
                    e = u.getFileListing(),
                    r.context = u._renderUpload(r.files).prependTo(e).fadeIn(function() {
                        t(this).show()
                    }).data("data", r),
                    (u.options.autoUpload || r.autoUpload) && r.isValidated && (r.jqXHR = r.submit()))
                },
                send: function(n, i) {
                    if (!i.isValidated) {
                        var r = t(this).data("fileupload");
                        if (i.isAdjusted || r._adjustMaxNumberOfFiles(-i.files.length),
                        !r._validate(i.files))
                            return !1
                    }
                    i.context && i.dataType && i.dataType.substr(0, 6) === "iframe" && i.context.find(".ui-progressbar").progressbar("value", parseInt(100, 10))
                },
                done: function(n, r) {
                    var u = t(this).data("fileupload");
                    r.context && r.context.each(function(n) {
                        var f = t.isArray(r.result) && r.result[n] || {
                            error: "emptyResult"
                        };
                        if (f.error) {
                            u._adjustMaxNumberOfFiles(1);
                            t(this).fadeOut(function() {
                                u._renderUpload([f]).css("display", "none").replaceAll(this).fadeIn(function() {
                                    t(this).show();
                                    var n = t(this);
                                    setTimeout(function() {
                                        n.fadeOut(function() {
                                            n.remove()
                                        })
                                    }, 5e3)
                                })
                            });
                            return
                        }
                        t(this).fadeOut(function() {
                            var n = t(f.html);
                            n.css("display", "none").replaceAll(this).fadeIn(function() {
                                t(this).show();
                                i.triggerHtmlInsert(t(this))
                            })
                        })
                    })
                },
                fail: function(n, i) {
                    var r = t(this).data("fileupload");
                    r._adjustMaxNumberOfFiles(i.files.length);
                    i.context ? i.context.each(function(n) {
                        t(this).fadeOut(function() {
                            if (i.errorThrown !== "abort") {
                                var u = i.files[n];
                                u.error = u.error || i.errorThrown || !0;
                                r._renderDownload([u]).css("display", "none").replaceAll(this).fadeIn(function() {
                                    t(this).show()
                                })
                            } else
                                i.context.remove()
                        })
                    }) : i.errorThrown !== "abort" && (r._adjustMaxNumberOfFiles(-i.files.length),
                    i.context = r._renderUpload(i.files).css("display", "none").appendTo(this.getFileListing()).fadeIn(function() {
                        t(this).show()
                    }).data("data", i))
                },
                progress: function(n, t) {
                    t.context && t.context.find(".ui-progressbar").progressbar("value", parseInt(t.loaded / t.total * 100, 10))
                },
                progressall: function(n, i) {
                    t(this).find(".overall-progressbar").progressbar("value", parseInt(i.loaded / i.total * 100, 10))
                },
                start: function() {
                    t(this).find(".overall-progressbar").progressbar("value", 0).fadeIn()
                },
                stop: function() {
                    t(this).find(".overall-progressbar").fadeOut()
                },
                destroy: function(n, i) {
                    var r = t(this).data("fileupload");
                    i.url ? t.ajax(i).success(function() {
                        r._adjustMaxNumberOfFiles(1);
                        t(this).fadeOut(function() {
                            t(this).remove()
                        })
                    }) : i.context.fadeOut(function() {
                        t(this).remove()
                    })
                }
            },
            _scaleImage: function(n, t) {
                var i, r, u, f;
                return (t = t || {},
                i = document.createElement("canvas"),
                r = Math.min((t.maxWidth || n.width) / n.width, (t.maxHeight || n.height) / n.height),
                r >= 1 && (r = Math.max((t.minWidth || n.width) / n.width, (t.minHeight || n.height) / n.height)),
                u = parseInt(n.width * r, 10),
                f = parseInt(n.height * r, 10),
                n.width = u > t.maxWidth ? t.maxWidth : u,
                n.height = f > t.maxHeight ? t.maxHeight : f,
                !t.canvas || !i.getContext) ? n : (i.width = n.width,
                i.height = n.height,
                i.getContext("2d").drawImage(n, 0, 0, n.width, n.height),
                i)
            },
            _createObjectURL: function(t) {
                var i = "undefined"
                  , r = n(window.createObjectURL) !== i && window || (typeof URL == "undefined" ? "undefined" : n(URL)) !== i && URL || (typeof webkitURL == "undefined" ? "undefined" : n(webkitURL)) !== i && webkitURL;
                return r ? r.createObjectURL(t) : !1
            },
            _revokeObjectURL: function(t) {
                var i = "undefined"
                  , r = n(window.revokeObjectURL) !== i && window || (typeof URL == "undefined" ? "undefined" : n(URL)) !== i && URL || (typeof webkitURL == "undefined" ? "undefined" : n(webkitURL)) !== i && webkitURL;
                return r ? r.revokeObjectURL(t) : !1
            },
            _loadFile: function(n, t) {
                if (typeof FileReader != "undefined" && FileReader.prototype.readAsDataURL) {
                    var i = new FileReader;
                    return i.onload = function(n) {
                        t(n.target.result)
                    }
                    ,
                    i.readAsDataURL(n),
                    !0
                }
                return !1
            },
            _loadImage: function(n, i, r) {
                var e = this, u, f;
                r && r.fileTypes && !r.fileTypes.test(n.type) || (u = this._createObjectURL(n),
                f = t("<img>").bind("load", function() {
                    t(this).unbind("load");
                    e._revokeObjectURL(u);
                    i(e._scaleImage(f[0], r))
                }),
                u ? f.prop("src", u) : this._loadFile(n, function(n) {
                    f.prop("src", n)
                }))
            },
            _enableDragToDesktop: function() {
                var n = t(this)
                  , i = n.prop("href")
                  , r = decodeURIComponent(i.split("/").pop()).replace(/:/g, "-")
                  , u = "application/octet-stream";
                n.bind("dragstart", function(n) {
                    try {
                        n.originalEvent.dataTransfer.setData("DownloadURL", [u, r, i].join(":"))
                    } catch (t) {}
                })
            },
            _adjustMaxNumberOfFiles: function(n) {
                typeof this.options.maxNumberOfFiles == "number" && (this.options.maxNumberOfFiles += n,
                this.options.maxNumberOfFiles < 1 ? this._disableFileInputButton() : this._enableFileInputButton())
            },
            _formatFileSize: function(n) {
                return typeof n.size != "number" ? "" : n.size >= 1e9 ? (n.size / 1e9).toFixed(2) + " GB" : n.size >= 1e6 ? (n.size / 1e6).toFixed(2) + " MB" : (n.size / 1e3).toFixed(2) + " KB"
            },
            _hasError: function(n) {
                return n.error ? n.error : this.options.maxNumberOfFiles < 0 ? "maxNumberOfFiles" : (this.options.acceptFileTypes.test(n.type) || this.options.acceptFileTypes.test(n.name)) ? this.options.maxFileSize && n.size > this.options.maxFileSize ? "maxFileSize" : typeof n.size == "number" && n.size < this.options.minFileSize ? "minFileSize" : null : "acceptFileTypes"
            },
            _validate: function(n) {
                var r = this, i;
                return t.each(n, function(n, t) {
                    t.error = r._hasError(t);
                    i = !t.error
                }),
                i
            },
            _uploadTemplateHelper: function(n) {
                return n.sizef = this._formatFileSize(n),
                n
            },
            _renderUploadTemplate: function(n) {
                var i = this;
                return t.tmpl(this.options.uploadTemplate(), t.map(n, function(n) {
                    return i._uploadTemplateHelper(n)
                }))
            },
            _renderUpload: function(n) {
                var u = this
                  , r = this.options
                  , i = this._renderUploadTemplate(n);
                return (i instanceof t) ? (i.css("display", "none"),
                i.find(".progress div").slice(1).remove().end().first().progressbar(),
                i.find(".start button").slice(this.options.autoUpload ? 0 : 1).remove().end().first().button({
                    text: !1,
                    icons: {
                        primary: "ui-icon-circle-arrow-e"
                    }
                }),
                i.find(".cancel button").slice(1).remove().end().first().button({
                    text: !1,
                    icons: {
                        primary: "ui-icon-cancel"
                    }
                }),
                i.find(".preview").each(function(i, f) {
                    u._loadImage(n[i], function(n) {
                        t(n).hide().appendTo(f).fadeIn()
                    }, {
                        maxWidth: r.previewMaxWidth,
                        maxHeight: r.previewMaxHeight,
                        fileTypes: r.previewFileTypes,
                        canvas: r.previewAsCanvas
                    })
                }),
                i) : t()
            },
            _downloadTemplateHelper: function(n) {
                return n.sizef = this._formatFileSize(n),
                n
            },
            _renderDownloadTemplate: function() {
                return
            },
            _renderDownload: function() {
                return
            },
            _startHandler: function(n) {
                n.preventDefault();
                var r = t(this).closest(".template-upload")
                  , i = r.data("data");
                i && i.submit && !i.jqXHR && (i.jqXHR = i.submit(),
                t(this).fadeOut())
            },
            _cancelHandler: function(n) {
                n.preventDefault();
                var r = t(this).closest(".template-upload")
                  , i = r.data("data") || {};
                i.jqXHR ? i.jqXHR.abort() : (i.errorThrown = "abort",
                n.data.fileupload._trigger("fail", n, i))
            },
            _deleteHandler: function(n) {
                n.preventDefault();
                var i = t(this);
                n.data.fileupload._trigger("destroy", n, {
                    context: i.closest(".template-download"),
                    url: i.attr("data-url"),
                    type: i.attr("data-type"),
                    dataType: n.data.fileupload.options.dataType
                })
            },
            _initEventHandlers: function() {
                t.blueimp.fileupload.prototype._initEventHandlers.call(this)
            },
            _destroyEventHandlers: function() {
                var n = this.getFileListing();
                n && (n.find(".start button").die("click." + this.options.namespace),
                n.find(".cancel button").die("click." + this.options.namespace),
                n.find(".delete button").die("click." + this.options.namespace));
                t.blueimp.fileupload.prototype._destroyEventHandlers.call(this)
            },
            _initFileUploadButtonBar: function() {
                var n = this.element.find(".fileupload-buttonbar")
                  , i = this.getFileListing()
                  , r = this.options.namespace;
                n.addClass("ui-widget-header ui-corner-top");
                this.element.find(".fileinput-button").each(function() {
                    var n = t(this).find("input:file").detach();
                    t(this).button({
                        icons: {
                            primary: "ui-icon-plusthick"
                        }
                    }).append(n)
                });
                i && (n.find(".start").button({
                    icons: {
                        primary: "ui-icon-circle-arrow-e"
                    }
                }).bind("click." + r, function(n) {
                    n.preventDefault();
                    i.find(".start button").click()
                }),
                n.find(".cancel").button({
                    icons: {
                        primary: "ui-icon-cancel"
                    }
                }).bind("click." + r, function(n) {
                    n.preventDefault();
                    i.find(".cancel button").click()
                }),
                n.find(".delete").button({
                    icons: {
                        primary: "ui-icon-trash"
                    }
                }).bind("click." + r, function(n) {
                    n.preventDefault();
                    i.find(".delete button").click()
                }))
            },
            _destroyFileUploadButtonBar: function() {
                this.element.find(".fileupload-buttonbar").removeClass("ui-widget-header ui-corner-top");
                this.element.find(".fileinput-button").each(function() {
                    var n = t(this).find("input:file").detach();
                    t(this).button("destroy").append(n)
                });
                this.element.find(".fileupload-buttonbar button").unbind("click." + this.options.namespace).button("destroy")
            },
            _enableFileInputButton: function() {
                this.element.find(".fileinput-button input:file:disabled").each(function() {
                    var n = t(this)
                      , i = n.parent();
                    n.detach().prop("disabled", !1);
                    i.button("enable").append(n)
                })
            },
            _disableFileInputButton: function() {
                this.element.find(".fileinput-button input:file:enabled").each(function() {
                    var n = t(this)
                      , i = n.parent();
                    n.detach().prop("disabled", !0);
                    i.button("disable").append(n)
                })
            },
            _initTemplates: function() {},
            _create: function() {
                t.blueimp.fileupload.prototype._create.call(this);
                this._initTemplates();
                this.element.addClass("ui-widget");
                this._initFileUploadButtonBar();
                this.element.find(".fileupload-content").addClass("ui-widget-content ui-corner-bottom");
                this.element.find(".overall-progressbar").hide().progressbar()
            },
            destroy: function() {
                this.element.find(".overall-progressbar").progressbar("destroy");
                this.element.find(".fileupload-content").removeClass("ui-widget-content ui-corner-bottom");
                this._destroyFileUploadButtonBar();
                this.element.removeClass("ui-widget");
                t.blueimp.fileupload.prototype.destroy.call(this)
            },
            enable: function() {
                t.blueimp.fileupload.prototype.enable.call(this);
                this.element.find(":ui-button").not(".fileinput-button").button("enable");
                this._enableFileInputButton()
            },
            disable: function() {
                this.element.find(":ui-button").not(".fileinput-button").button("disable");
                this._disableFileInputButton();
                t.blueimp.fileupload.prototype.disable.call(this)
            }
        })
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.ImageTagging = function(i) {
            this.bind(i);
            var r = this;
            i.initializeTaggingButton ? (n(document).ready(function() {
                r.autoStartTagging = !1;
                r.initialize()
            }),
            n(i.initializeTaggingButton).click(function(n) {
                n.preventDefault();
                r.autoStartTagging = !0;
                r.initialized ? r.enableEditing && (r.taggingStarted ? r.stopTagging() : r.startTagging()) : r.initialize()
            })) : t.runOnLoad(function() {
                n(window).load(function() {
                    r.initialize()
                });
                n(r.imageSelector)[0].complete
            })
        }
        ;
        t.ImageTagging.prototype = {
            bind: function(n) {
                this.imageOwner = n.imageOwner;
                this.autoStartTagging = n.autoStartTagging || !1;
                this.enableEditing = n.enableEditing === i ? this.imageOwner === t.User.userID : n.enableEditing;
                this.imageSelector = n.imageSelector;
                this.imageParent = n.imageParent;
                this.initializeTaggingButton = n.initializeTaggingButton;
                this.tagButton = n.tagButton;
                this.tagSelector = n.tagSelector;
                this.tagList = n.tagList;
                this.availableTags = n.availableTags;
                this.initialTags = n.initialTags;
                this.tags = [];
                this.onTagAdded = n.onTagAdded;
                this.onTagRemoved = n.onTagRemoved;
                this.nextColorIndex = 1;
                this.tagColorIndex = [];
                this.taggingStarted = !1;
                this.initialized = !1;
                this.onAreaSelected = n.onAreaSelected;
                this.createTag = n.createTag;
                this.createDeleteLink = n.createDeleteLink;
                this.onSelectChange = n.onSelectChange;
                this.onInitialized = n.onInitialized
            },
            initialize: function() {
                var t = this, i;
                n(t.tagButton).click(function() {
                    t.handleTagButton.call(t)
                });
                n(t.tagButton).enable(!1);
                i = n(t.tagSelector);
                n.each(t.availableTags, function() {
                    var t = n("<option>").text(this.name).attr("value", this.id);
                    i.append(t)
                });
                n.each(t.initialTags, function() {
                    t.createTaggedRegion(this.id, this.name, this.rect, this)
                });
                t.enableEditing && this.autoStartTagging && t.startTagging();
                !t.onInitialized || t.onInitialized();
                t.initialized = !0
            },
            clearSelection: function() {
                this.imgAreaSelect && this.imgAreaSelect.cancelSelection()
            },
            startTagging: function() {
                var t = this;
                n(t.imageParent).find(".tag-wrapper").hide();
                n(t.imageSelector).each(function() {
                    t.imgAreaSelect = n(this).imgAreaSelect({
                        handles: !1,
                        enable: !0,
                        onSelectEnd: function(n, i) {
                            t.handleSelection.call(t, n, i)
                        },
                        onSelectChange: t.onSelectChange
                    }).data("imgAreaSelect")
                });
                n(t.imageSelector).css("cursor", "crosshair");
                t.taggingStarted = !0
            },
            stopTagging: function() {
                var t = this;
                n(t.imageSelector).each(function() {
                    t.imgAreaSelect.remove()
                });
                t.taggingStarted = !1;
                n(t.imageSelector).css("cursor", "default");
                t.initialized = !1
            },
            handleSelection: function(t, r) {
                if (r.x1 /= t.width,
                r.x2 /= t.width,
                r.y1 /= t.height,
                r.y2 /= t.height,
                r.width > 10 && r.height > 10 ? n(this.tagButton).enable(!0) : n(this.tagButton).enable(!1),
                r.height /= t.height,
                r.width /= t.width,
                this.selection = r,
                this.onAreaSelected !== i)
                    this.onAreaSelected(t, {
                        Value: r
                    })
            },
            handleTagButton: function() {
                var t = n(tagger.imageParent).find(this.tagSelector + " option:selected").text()
                  , i = n(tagger.imageParent).find(this.tagSelector).val();
                if (this.createTaggedRegion(i, t, this.selection),
                this.onTagAdded != null)
                    this.onTagAdded(i, t, this.selection)
            },
            createTaggedRegion: function(r, u, f, e) {
                var l, w, a, v, y, c, b;
                e ? l = e.url : this.availableTags[r] != null && (l = this.availableTags[r].url);
                l = l || "#";
                var p = n("<div>").addClass("tag-wrapper")
                  , s = this.createTag(r, u, l, e)
                  , o = n(this.imageParent)
                  , h = o.find(this.imageSelector)
                  , k = parseInt(s.css("border-left-width").replace("px", "") || "0")
                  , d = parseInt(s.css("border-top-width").replace("px", "") || "0")
                  , g = (o.width() - h.width()) / 2 - k
                  , nt = (o.height() - h.height()) / 2 - d
                  , tt = f.y1 * h.height() + nt
                  , it = f.x1 * h.width() + g;
                s.css("top", tt);
                s.css("left", it);
                s.width(f.width * h.width());
                s.height(f.height * h.height());
                this.createDeleteLink && (w = this.createDeleteLink(f, h, o, s),
                p.append(w));
                o.append(p.append(s));
                t.triggerHtmlInsert(o);
                this.imgAreaSelect != null && this.imgAreaSelect.setOptions({
                    hide: !0
                });
                this.tagColorIndex[r] === i && (this.tagColorIndex[r] = this.nextColorIndex++);
                this.availableTags[r] != null ? this.tags[r] == null && (this.tags[r] = u,
                a = n("<li>").attr("data-tag-id", r),
                v = n("<span>"),
                v.addClass("tag-legend").addClass("image-tag-" + this.tagColorIndex[r]),
                y = n(document.createElement("A")),
                y.attr("href", l).attr("title", u).text(u),
                a.append(v),
                a.append(y),
                this.enableEditing && (c = n("<span>"),
                c.addClass("icon delete"),
                c.attr("title", "Remove tag"),
                c.html("delete"),
                c.attr("data-tag-id", r),
                c.click(function() {
                    tagger.handleDeleteClicked(n(this))
                }),
                a.append(c)),
                n(this.tagList).append(a),
                a.hover(function() {
                    var t = n(this);
                    o.find(".image-tag[data-tag-id=" + t.attr("data-tag-id") + "]").addClass("show")
                }, function() {
                    var t = n(this);
                    o.find(".image-tag[data-tag-id=" + t.attr("data-tag-id") + "]").removeClass("show")
                })) : (b = n(this.tagList).find("[data-tag-id='" + r + "']"),
                b.hover(function() {
                    var t = n(this);
                    o.find(".image-tag[data-tag-id=" + t.attr("data-tag-id") + "]").addClass("show")
                }, function() {
                    var t = n(this);
                    o.find(".image-tag[data-tag-id=" + t.attr("data-tag-id") + "]").removeClass("show")
                }));
                s.hover(function() {
                    var t = n(this);
                    o.find(".image-tag[data-tag-id=" + t.attr("data-tag-id") + "]").addClass("show")
                }, function() {
                    var t = n(this);
                    o.find(".image-tag[data-tag-id=" + t.attr("data-tag-id") + "]").removeClass("show")
                });
                s.addClass("image-tag-" + this.tagColorIndex[r]);
                n(this.tagButton).enable(!1)
            },
            showTag: function(t) {
                var i = n(this.imageParent);
                i.find(".image-tag[data-tag-id=" + t + "]").addClass("show")
            },
            unshowTag: function(t) {
                var i = n(this.imageParent);
                i.find(".image-tag[data-tag-id=" + t + "]").removeClass("show")
            },
            createTag: function(t, i, r) {
                var u = n("<a>");
                return u.addClass("image-tag no-tooltip").attr("title", i).attr("data-tag-id", t).attr("href", r),
                u
            },
            handleDeleteClicked: function(t) {
                var i = t.attr("data-tag-id")
                  , r = this.tags[i];
                if (confirm("Remove all tags for " + r + "?")) {
                    if (this.onTagRemoved != null)
                        this.onTagRemoved(i);
                    n(this.imageParent).find(".image-tag[data-tag-id=" + i + "]").remove();
                    t.parent().remove();
                    this.tags[i] = null
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Infractions = {
            showAutomaticDescription: function(t) {
                n(".j-automatic-description").text(t);
                t == null || t == "" ? n(".j-automatic-description").hide() : n(".j-automatic-description").fadeIn()
            },
            initialize: function() {
                var o, r, i, f, c, e;
                t.Infractions.handleBanDefinitionRules();
                o = [3, 4];
                n(".ban-access-rules").closest(".form-field").hide();
                n("#field-ban-type").change(function() {
                    var t = n(this).val();
                    o.indexOf(t * 1) != -1 ? n(".ban-access-rules").closest(".form-field").show() : n(".ban-access-rules").closest(".form-field").hide()
                });
                n("#field-ban-type").change();
                r = n(".infraction-actions");
                r.length > 0 && (i = n(".infraction-action-delete-reason"),
                i.hide(),
                r.find("#field-delete-content").click(function() {
                    var t = n(".infraction-warning-text");
                    n(this).is(":checked") ? (t.hide(),
                    i.show()) : (t.show(),
                    i.hide())
                }));
                n("body").on("click", ".j-warning-definition input", function() {
                    var i = n(this)
                      , t = i.data("id");
                    s(t);
                    n(".j-is-slap-on-wrist").prop("disabled", !0);
                    n("#field-warning-" + t).prop("disabled", !1)
                });
                n("body").on("change", ".j-is-slap-on-wrist", function(t) {
                    t.stopImmediatePropagation();
                    var i = n(this);
                    s(i.data("definition-id"))
                });
                var s = function(i) {
                    var r = n(".j-warning-definition input[value='" + i + "']"), f = !1, u = "", e;
                    r.is(":checked") && (n(".infraction-custom-creation").hide(),
                    e = n("#field-warning-" + i).prop("checked"),
                    e ? (t.Infractions.showAutomaticDescription("Only an informal warning."),
                    f = r.data("has-custom-message-inf"),
                    u = r.data("specific-message-inf"),
                    n(".infraction-notification-message-text").html(u)) : (t.Infractions.showAutomaticDescription(r.data("description")),
                    f = r.data("has-custom-message"),
                    u = r.data("specific-message"),
                    n(".infraction-notification-message-text").html(u)),
                    h(f),
                    n(".infraction-notification-custom-message").toggle(f));
                    n(".infraction-notification-message").toggle(u ? !0 : !1)
                }
                  , u = !1
                  , h = function(t) {
                    t && !u && (n("ul.b-tab-nav").find("[data-tab-id='#notification']").find("span").append('<span id="custom-warning-icon" class="tip" title="This warning allows you to enter a custom message. Use the Notification tab to create one."><i class="u-icon u-icon-warning">!<\/i><\/span>'),
                    n("div.ui-dialog-footer").prepend('<span id="custom-warning-warning" class="tip" title="This warning allows you to enter a custom message. Use the Notification tab to create one."><i class="u-icon u-icon-warning">!<\/i><\/span>'),
                    n(".ui-widget .tip").tooltip(),
                    u = !0);
                    t || (n("span#custom-warning-icon").remove(),
                    n("span#custom-warning-warning").remove(),
                    u = !1)
                };
                n(".j-create-custom-warning").on("click", function(i) {
                    i.stopImmediatePropagation();
                    var r = n(".infraction-custom-creation").toggle().isVisible()
                      , u = n(this);
                    h(!0);
                    n(".infraction-notification-custom-message").toggle(r);
                    n(".infraction-notification-message").val("");
                    n(".infraction-notification-message").hide();
                    n(".j-warning-definition input:checked").prop("checked", !1);
                    t.Infractions.showAutomaticDescription(r ? "Custom warning." : "")
                });
                f = function() {
                    var t = n("#field-is-permanent-warning");
                    t.prop("checked") ? t.parents(".permanent-duration").find(".time-span-container > input,select").prop("disabled", !0) : t.parents(".permanent-duration").find(".time-span-container > input,select").prop("disabled", !1)
                }
                ;
                n("#field-is-permanent-warning").on("change", f);
                f();
                c = 2;
                e = function() {
                    var r = n(this).find("option:selected")
                      , t = n("#field-is-permanent-warning")
                      , i = n("#field-expire-value")
                      , u = n("#field-expire > .hidden-time-span");
                    r.data("ban-type") === c ? (i.val(null),
                    u.val(null),
                    i.prop("disabled", !0),
                    t.attr("checked", "checked"),
                    t.prop("disabled", !0)) : (t.prop("disabled", !1),
                    i.prop("disabled", !1))
                }
                ;
                n("#field-ban").on("change", e);
                e();
                n("#field-custom-points").on("keyup", function() {
                    if (n("#field-custom-warning:checked").length > 0)
                        t.Infractions.showAutomaticDescription("Only a an informal warning.");
                    else {
                        var r = n(".j-warning-for").attr("data-userid")
                          , i = n("#field-custom-points").val()
                          , u = n(".ajax-warn").data("id")
                          , f = n(".ajax-warn").data("is-comment");
                        i && i > 0 ? f === "True" ? n.get(t.Routes.Instance.InfractionsGetWarningDefinitionDescriptionByComment(r, u, i), function(n) {
                            n && n.description && t.Infractions.showAutomaticDescription(n.description)
                        }) : n.get(t.Routes.Instance.InfractionsGetWarningDefinitionDescription(r, i), function(n) {
                            n && n.description && t.Infractions.showAutomaticDescription(n.description)
                        }) : t.Infractions.showAutomaticDescription("Points input is required.")
                    }
                });
                n("body").on("click", "a.j-cancel-button", function() {
                    n(this).parents("div.ui-dialog-content").dialog("close")
                })
            },
            handleBanDefinitionRules: function() {
                if (n(".ban-form-container").length) {
                    n("#field-ban-type").on("change", function() {
                        n(this).val() === "2" ? n(".access-rules-container").hide() : n(".access-rules-container").show()
                    });
                    n("#field-ban-type").change();
                    n("#field-access-rule-type").on("change", function() {
                        var t = n(this).find("input:checked").val();
                        t === "3" ? (n(".sectional-rules").show(),
                        n(".hidden-rule-field").hide()) : (n(".sectional-rules").hide(),
                        n(".hidden-rule-field").show(),
                        t === "1" && n(".hidden-rule-field").css("margin-top", "-62px"),
                        t === "2" && n(".hidden-rule-field").css("margin-top", "-40px"))
                    });
                    n("#field-access-rule-type").change();
                    n(".sectional-rules .section-group input").on("change", function() {
                        n(this).is(":checked") ? n(this).parents(".section-group").find("select").show() : n(this).parents(".section-group").find("select").hide()
                    });
                    n(".sectional-rules .section-group input").change();
                    n("#content").css("min-height", "500px")
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        n.fn.center = function(i) {
            function u() {
                var t = n(this)
                  , r = parseInt(t.css("zIndex"));
                t.css({
                    position: i.absolute ? "absolute" : "fixed",
                    left: "50%",
                    top: "50%",
                    zIndex: r + 1
                }).css({
                    marginLeft: "-" + t.outerWidth() / 2 + "px",
                    marginTop: "-" + t.outerHeight() / 2 + "px"
                });
                i.absolute && t.css({
                    marginTop: parseInt(t.css("marginTop"), 10) + jQuery(window).scrollTop(),
                    marginLeft: parseInt(t.css("marginLeft"), 10) + jQuery(window).scrollLeft()
                })
            }
            function f() {
                var r = n(this)
                  , u = n(window).width() - i.paddingWidth
                  , f = n(window).height() - i.paddingWidth
                  , t = f;
                if (i.maxWidth && u > i.maxWidth ? u = i.maxWidth : i.minWidth && u < i.minWidth && (u = i.minWidth),
                r.css("width", u),
                i.autoHeight) {
                    r.attr("data-auto-height") == null && (r.css("height", "auto"),
                    t = r.outerHeight(),
                    r.attr("data-auto-height", "1"));
                    return
                }
                i.maxHeight && t > i.maxHeight && (t = i.maxHeight);
                i.minHeight && t < i.minHeight && (t = i.minHeight);
                t > f && (t = f)
            }
            function e() {
                var t = n(this);
                t[0]._centerEventsBound || (n(window).bind("resize", function() {
                    i.sizeToWindow && t.each(f);
                    t.each(u)
                }),
                n(window).bind("scroll", function() {
                    t.each(u)
                }),
                t[0]._centerEventsBound = !0)
            }
            var i = i || {}, r;
            return i.paddingWidth == t && (i.paddingWidth = 150),
            r = this,
            i.sizeToWindow && r.each(f),
            r.each(u),
            r.each(e),
            r
        }
    }
    )(jQuery)
}
, function() {
    "use strict";
    (function(n, t) {
        n.fn.center = function(i) {
            function u() {
                var t = n(this)
                  , r = parseInt(t.css("zIndex"));
                t.css({
                    position: i.absolute ? "absolute" : "fixed",
                    left: "50%",
                    top: "50%",
                    zIndex: r + 1
                }).css({
                    marginLeft: "-" + t.outerWidth() / 2 + "px",
                    marginTop: "-" + t.outerHeight() / 2 + "px"
                });
                i.absolute && t.css({
                    marginTop: parseInt(t.css("marginTop"), 10) + jQuery(window).scrollTop(),
                    marginLeft: parseInt(t.css("marginLeft"), 10) + jQuery(window).scrollLeft()
                })
            }
            function f() {
                var u = n(this)
                  , r = n(window).width() - i.paddingWidth
                  , t = n(window).height() - i.paddingWidth;
                i.maxWidth && r > i.maxWidth ? r = i.maxWidth : i.minWidth && r < i.minWidth && (r = i.minWidth);
                i.autoHeight ? t = "auto" : (i.maxHeight && t > i.maxHeight && (t = i.maxHeight),
                i.minHeight && t < i.minHeight && (t = i.minHeight));
                u.css("width", r);
                u.css("height", t)
            }
            function e() {
                var t = n(this);
                t[0]._centerEventsBound || (n(window).bind("resize", function() {
                    i.sizeToWindow && t.each(f);
                    i.fixed || t.each(u)
                }),
                n(window).bind("scroll", function() {
                    i.fixed || t.each(u)
                }),
                t[0]._centerEventsBound = !0)
            }
            var i = i || {}, r;
            return i.paddingWidth == t && (i.paddingWidth = 150),
            r = this,
            i.sizeToWindow && r.each(f),
            r.each(u),
            r.each(e),
            r
        }
    }
    )(jQuery)
}
, function() {
    "use strict";
    (function(n, t) {
        var r = "grid"
          , d = {
            pagerElements: t,
            pagerFirstSelector: ".pager-first",
            pagerPreviousSelector: ".pager-prev",
            pagerNextSelector: ".pager-next",
            pagerLastSelector: ".pager-last",
            pagerDisplaySelector: ".pager-display",
            pagerPageNumbersSelector: "ul",
            pageSizeAttr: "data-page-size",
            rowSelectorAttr: "data-row-selector",
            rowSelector: "> tbody > tr",
            pageSizes: [10, 25, 50],
            pageSize: t,
            enableCircularPaging: !1,
            pageCount: 0,
            currentPage: 1,
            sortable: !0,
            parsers: {},
            defaultSortOrder: {},
            sortAscClass: "asc",
            sortDescClass: "desc",
            pagingEnabled: !0,
            sortingEnabled: !0,
            showFirstSelector: !0,
            showLastSelector: !0,
            maxNumOfPageNumbers: 6
        }
          , i = function(n) {
            return n.data(r)
        }
          , l = function(r, u, f, e) {
            var s = i(r), o = s.parentRows, l = s.filterPredicate, h, c;
            return l && (h = s.filteredRows,
            h === t && (s.filteredRows = h = o.filter(l)),
            o = h),
            u != t && (o = n(o).slice(u, f)),
            e ? (c = [],
            o.each(function(n, t) {
                if (c.push(t),
                t.attachedRows && t.attachedRows.length > 0)
                    for (var n = 0; n < t.attachedRows.length; n++)
                        c.push(t.attachedRows[n])
            }),
            n(c)) : o
        }
          , e = {
            int: function(n) {
                var t = parseInt(n);
                return isNaN(t) ? 0 : t
            },
            float: function(n) {
                var t = parseFloat(n);
                return isNaN(t) ? 0 : t
            },
            percent: function() {
                return e.float(s.replace(/%/g, ""))
            },
            url: function(n) {
                return n.replace(/(https?|ftp|file):\/\//, "")
            },
            currency: function(n) {
                return n.replace(/[^0-9.]/g, "")
            },
            date: function(t) {
                return n(t).data("epoch") ? n(t).attr("data-epoch") : new Date(t)
            },
            time: function(n) {
                return e.float(new Date("2000/01/01 " + n).getTime())
            },
            "time-ms": function(n) {
                return e.float(n.replace(/ms/g, ""))
            },
            text: function(n) {
                return n
            },
            author: function(t) {
                return n(t).find("span").text()
            },
            html: function(t) {
                return n(t).text()
            }
        }
          , p = function(t) {
            var r = i(t), h = t.attr(r.rowSelectorAttr) || r.rowSelector, u, f, o, s, c, l;
            r.rowSelector = h;
            u = t.find(h);
            r.parentRows || (r.parentRows = u);
            t.attr("data-update") === "add" && (r.parentRows = r.parentRows.add(u.not(".even").not(".odd")),
            t.removeAttr("data-update"));
            t.attr("data-remove") && (r.parentRows = r.parentRows.not("li[data-surrogate-id='" + t.attr("data-remove") + "']"),
            t.removeAttr("data-remove"));
            r.sortingEnabled && (t.find("> thead > tr > th").each(function(t, i) {
                var u = n(i), o = u.attr("data-sort-value-type"), f;
                r.parsers[t] = e[o] || e.text;
                f = u.attr("data-default-sort-order");
                r.defaultSortOrder[t] = f
            }),
            f = n([]),
            o = null,
            u.each(function(t, i) {
                if (n(i).attr("data-sort-attached-to-above") === "true") {
                    o && o.attachedRows.push(i);
                    return
                }
                i.attachedRows = [];
                o = i;
                f = f.add(i)
            }),
            u = f,
            r.parsers && u.each(function(t, i) {
                i.columns = {};
                n(i).find("> td").each(function(t, u) {
                    var f = n.trim(n(u).attr("data-sort-value") || u.innerHTML.toUpperCase());
                    i.columns[t] = r.parsers[t](f)
                })
            }));
            r.rowsParent = u.parent();
            r.rows = u;
            r.currentPage = 1;
            r.sortingEnabled && (s = t.attr("data-default-sort-slug"),
            s && (c = t.attr("data-default-sort-order") == "asc" ? 1 : -1,
            l = t.find("> thead > tr > th").index(t.find('[data-sort-slug="' + s + '"]')),
            k(t, l, c)))
        }
          , o = function(t, i) {
            var r = n(t).parent();
            r.parent().hasClass("listing-footer") && n(window).scrollTo(i.container, 500, {
                offset: -50
            })
        }
          , g = function(n, t, r) {
            n.preventDefault();
            var u = i(t);
            u.currentPage != r && (o(this, u),
            u.currentPage = r,
            f(t))
        }
          , nt = function(t) {
            t.preventDefault();
            var e = n(this).data(r)
              , u = i(e);
            o(this, u);
            u.currentPage != 1 && (u.currentPage = 1,
            f(e))
        }
          , tt = function(t) {
            t.preventDefault();
            var e = n(this).data(r)
              , u = i(e);
            o(this, u);
            u.currentPage + 1 > u.pageCount ? u.enableCircularPaging == !0 && (u.currentPage = 1,
            f(e)) : (u.currentPage = u.currentPage + 1,
            f(e))
        }
          , it = function(t) {
            t.preventDefault();
            var e = n(this).data(r)
              , u = i(e);
            o(this, u);
            u.currentPage - 1 <= 0 ? u.enableCircularPaging == !0 && (u.currentPage = u.pageCount,
            f(e)) : (u.currentPage = u.currentPage - 1,
            f(e))
        }
          , rt = function(t) {
            t.preventDefault();
            var e = n(this).data(r)
              , u = i(e);
            o(this, u);
            u.currentPage != u.pageCount && (u.currentPage = u.pageCount,
            f(e))
        }
          , w = function(n) {
            var r = i(n)
              , f = l(n, t, t, !0).length
              , u = Math.ceil(f / r.pageSize);
            return r.pageCount = u,
            u
        }
          , ut = function(n) {
            var t = i(n)
              , u = t.pageSizeAttr
              , f = n.attr(u)
              , r = parseInt(f) || t.pageSize || 25;
            return t.pageSize != r && (t.pageSize = r),
            r
        }
          , ft = function(n) {
            var t = i(n)
              , r = (t.currentPage - 1) * t.pageSize
              , u = Math.floor(r + t.pageSize, t.rowCount);
            return {
                start: r,
                end: u
            }
        }
          , et = function(n) {
            var t = i(n);
            n.find(t.rowSelector).detach()
        }
          , u = function(t, u, f, e) {
            var h = i(u), o, s;
            e || (e = f);
            o = n("<li/>").addClass("b-pagination-item");
            s = n("<a/>").addClass("b-pagination-item").text(e).attr("data-pagenum", f).data(r, u).click(function(t) {
                g(t, n(this).data(r), parseInt(n(this).attr("data-pagenum")))
            });
            f == h.currentPage && s.addClass("active").addClass("s-active");
            o.append(s);
            t.append(o)
        }
          , ot = function(n, t) {
            var r = i(t), e, o, f;
            if (n.find("li").remove(),
            e = "<li>...<\/li>",
            r.currentPage > 1 && u(n, t, r.currentPage - 1, "Prev"),
            r.pageCount <= r.maxNumOfPageNumbers)
                for (f = 1; f <= r.pageCount; ++f)
                    u(n, t, f);
            else if (r.currentPage < r.maxNumOfPageNumbers - 1) {
                for (f = 1; f < r.maxNumOfPageNumbers; ++f)
                    u(n, t, f);
                n.append(e);
                u(n, t, r.pageCount)
            } else if (r.currentPage > r.pageCount - r.maxNumOfPageNumbers + 1)
                for (u(n, t, 1),
                n.append(e),
                f = r.pageCount - r.maxNumOfPageNumbers + 1; f <= r.pageCount; ++f)
                    u(n, t, f);
            else {
                for (u(n, t, 1),
                n.append(e),
                o = Math.ceil(r.maxNumOfPageNumbers / 2) - 1,
                f = r.currentPage - o; f <= r.currentPage + o; ++f)
                    u(n, t, f);
                n.append(e);
                u(n, t, r.pageCount)
            }
            r.currentPage < r.pageCount && u(n, t, r.currentPage + 1, "Next");
            n.show()
        }
          , b = function(t) {
            var r = i(t), f = ft(t), e, u;
            et(t);
            e = l(t, f.start, f.end, !0);
            u = n(r.rowsParent).append(e);
            u.find("> :odd").not(".odd").addClass("odd").removeClass("even");
            u.find("> :even").not(".even").addClass("even").removeClass("odd");
            r.pagingEnabled && r.pagerElements.each(function() {
                var e = n(this), i, u, f, o;
                if (r.pageCount <= 1 ? e.hide() : ot(e, t),
                i = n(this).find(r.pagerPageNumbersSelector),
                i)
                    for (i.find("li").remove(),
                    u = 1; u <= r.pageCount; ++u)
                        f = n("<li/>").addClass("b-pagination-item"),
                        o = n("<span/>").text(u),
                        f.append(o),
                        i.append(f)
            })
        }
          , st = function(t, r, u) {
            var f = i(t)
              , e = n(r)
              , o = !e.hasClass(f.sortAscClass) && !e.hasClass(f.sortDescClass);
            return o ? u == "desc" ? -1 : 1 : e.hasClass(f.sortDescClass) ? 1 : -1
        }
          , a = function(n, i) {
            var r = n.find(" > thead > tr > th a");
            return (r.length == 0 && (r = n.find(" > thead > tr > th")),
            i != t) ? r.eq(i) : r
        }
          , ht = function(n, t, r) {
            var u = i(n)
              , f = a(n, t);
            r == -1 ? f.removeClass(u.sortAscClass).addClass(u.sortDescClass) : f.removeClass(u.sortDescClass).addClass(u.sortAscClass);
            f.addClass("selected");
            a(n).not(f).removeClass(u.sortAscClass + " .selected " + u.sortDescClass)
        }
          , k = function(r, u, e) {
            var s = i(r)
              , o = l(r, t, t, !1, !1).get();
            o.sort(function(t, i) {
                var r = t.columns[u]
                  , f = i.columns[u];
                if (n.type(r) !== n.type(f)) {
                    if (r % 1 != 0)
                        return -1 * e;
                    if (f % 1 != 0)
                        return 1 * e
                }
                return r < f ? -1 * e : r > f ? 1 * e : 0
            });
            s.parentRows = n(o);
            ht(r, u, e);
            f(r)
        }
          , f = function(n) {
            var t, r;
            ut(n);
            w(n);
            b(n);
            t = i(n);
            t.enableCircularPaging == !1 && (r = t.pagerElements,
            t.currentPage != 1 && t.currentPage != t.pageCount ? (v(r, t, !0),
            y(r, t, !0)) : t.currentPage == 1 ? (v(r, t, !1),
            y(r, t, !0)) : t.currentPage == t.pageCount && (v(r, t, !0),
            y(r, t, !1)));
            Cobalt.triggerHtmlInsert(n)
        }
          , v = function(n, t, i) {
            i ? (t.showFirstSelector && h(n.find(t.pagerFirstSelector)),
            h(n.find(t.pagerPreviousSelector))) : (t.showFirstSelector && c(n.find(t.pagerFirstSelector)),
            c(n.find(t.pagerPreviousSelector)))
        }
          , y = function(n, t, i) {
            i ? (t.showLastSelector && h(n.find(t.pagerLastSelector)),
            h(n.find(t.pagerNextSelector))) : (t.showLastSelector && c(n.find(t.pagerLastSelector)),
            c(n.find(t.pagerNextSelector)))
        }
          , h = function(n) {
            n.removeClass("pager-hidden");
            n.addClass("pager-visible")
        }
          , c = function(n) {
            n.removeClass("pager-visible");
            n.addClass("pager-hidden")
        }
          , ct = function(i, u) {
            var e, o;
            if (u !== t)
                i.data(r, u);
            else
                return;
            u.pagingEnabled && (e = u.pagerElements,
            e === t,
            e.each(function() {
                var t = n(this);
                t.find(u.pagerNextSelector).unbind("click");
                t.find(u.pagerPreviousSelector).unbind("click");
                t.find(u.pagerFirstSelector).click(nt).data(r, i).addClass("pager-hidden");
                t.find(u.pagerNextSelector).click(tt).data(r, i);
                t.find(u.pagerPreviousSelector).click(it).data(r, i).addClass("pager-hidden");
                t.find(u.pagerLastSelector).click(rt).data(r, i);
                t.find(u.pagerFirstSelector).is(":visible") || (u.showFirstSelector = !1);
                t.find(u.pagerLastSelector).is(":visible") || (u.showLastSelector = !1)
            }));
            p(i);
            f(i);
            u.sortingEnabled && (o = a(i),
            o.each(function(t) {
                var f = n(this);
                f.click(function(i) {
                    i.preventDefault();
                    var f = n(this)
                      , e = f.data(r)
                      , o = u.defaultSortOrder[t]
                      , s = st(e, f, o);
                    k(e, t, s)
                }).data(r, i)
            }))
        };
        n.fn.grid = function(r) {
            return this.each(function() {
                var e = n(this), u = n.extend({}, d, r), o;
                return u.container = e.parents(".listing-container:eq(0)"),
                u.pagerElements === t && (u.pagerElements = u.container.find("> .listing-header").add(u.container.find("> .listing-footer")).find(".j-tablesorter-pager")),
                u.pagingEnabled = u.pagerElements === t || u.pagerElements.length < 1 ? !1 : !0,
                (!e.is("table") || e.find("> thead > tr > th").length < 1) && (u.sortingEnabled = !1),
                o = i(e),
                o === t ? ct(e, u) : (p(e),
                f(e, u)),
                this
            })
        }
        ;
        n.fn.gridFilter = function(r) {
            return this.each(function() {
                var f = n(this), u = i(f), e;
                u != t && u.filterPredicate != r && (u.filterPredicate = r,
                delete u.filteredRows,
                e = w(f),
                e < u.currentPage && (u.currentPage = e),
                u.currentPage <= 0 && (u.currentPage = 1),
                b(f))
            })
        }
    }
    )(jQuery)
}
, function() {
    "use strict";
    (function(n) {
        n.fn.lightBox = function(t) {
            function e() {
                return o(this, f),
                !1
            }
            function o(r, u) {
                if (n("embed, object, select").css({
                    visibility: "hidden"
                }),
                s(),
                t.imageArray.length = 0,
                t.activeImage = 0,
                u.length == 1)
                    t.imageArray.push([r.getAttribute("href"), r.getAttribute("title")]);
                else
                    for (var f = 0; f < u.length; f++)
                        t.imageArray.push([u[f].getAttribute("href"), u[f].getAttribute("title")]);
                while (t.imageArray[t.activeImage][0] != r.getAttribute("href"))
                    t.activeImage++;
                i()
            }
            function s() {
                var i, f;
                n("body").append('<div id="jquery-overlay"><\/div><div id="jquery-lightbox"><div id="lightbox-container-image-box"><div id="lightbox-container-image"><img id="lightbox-image"><div style="" id="lightbox-nav"><a href="#" id="lightbox-nav-btnPrev"><\/a><a href="#" id="lightbox-nav-btnNext"><\/a><\/div><div id="lightbox-loading"><a href="#" id="lightbox-loading-link"><img src="' + t.imageLoading + '"><\/a><\/div><\/div><\/div><div id="lightbox-container-image-data-box"><div id="lightbox-container-image-data"><div id="lightbox-image-details"><span id="lightbox-image-details-caption"><\/span><span id="lightbox-image-details-currentNumber"><\/span><\/div><div id="lightbox-secNav"><a href="#" id="lightbox-secNav-btnClose"><img src="' + t.imageBtnClose + '"><\/a><\/div><\/div><\/div><\/div>');
                i = u();
                n("#jquery-overlay").css({
                    backgroundColor: t.overlayBgColor,
                    opacity: t.overlayOpacity,
                    width: i[0],
                    height: i[1]
                }).fadeIn();
                f = b();
                n("#jquery-lightbox").show();
                n("#jquery-lightbox").center({
                    keepCentered: !0
                });
                n("#jquery-overlay,#jquery-lightbox").click(function() {
                    r()
                });
                n("#lightbox-loading-link,#lightbox-secNav-btnClose").click(function(n) {
                    n.preventDefault();
                    r()
                });
                n(window).resize(function() {
                    var t = u();
                    n("#jquery-overlay").css({
                        width: t[0],
                        height: t[1]
                    })
                });
                v()
            }
            function i() {
                n("#lightbox-loading").show();
                t.fixedNavigation ? n("#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide() : n("#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber").hide();
                var i = new Image;
                i.onload = function() {
                    n("#lightbox-image").attr("src", t.imageArray[t.activeImage][0]);
                    var r = i.width
                      , f = n(window).width() - 150
                      , e = n(window).height() - 150
                      , u = i.height;
                    if (r > f || u > e) {
                        var s = f / r
                          , c = e / u
                          , o = Math.min(s, c);
                        r = r * o;
                        u = u * o
                    }
                    n("#lightbox-image").attr("width", r);
                    n("#lightbox-image").attr("height", u);
                    n("#jquery-lightbox").center({
                        keepCentered: !0
                    });
                    h(r, u);
                    i.onload = function() {}
                }
                ;
                i.src = t.imageArray[t.activeImage][0]
            }
            function h(i, r) {
                var e = n("#lightbox-container-image-box").width()
                  , o = n("#lightbox-container-image-box").height()
                  , u = i + t.containerBorderSize * 2
                  , f = r + t.containerBorderSize * 2
                  , s = e - u
                  , h = o - f;
                r = r + t.containerBorderSize * 2;
                u >= t.minWidth && n("#lightbox-container-image-data-box").css({
                    padding: "0 10px 0"
                });
                u = u < t.minWidth ? t.minWidth : u;
                i = i < t.minWidth ? t.minWidth : i;
                n("#lightbox-container-image-box").css("width", u);
                n("#lightbox-container-image-box").css("height", f);
                c();
                n("#lightbox-container-image-data-box").css({
                    width: i
                });
                n("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({
                    height: r
                })
            }
            function c() {
                n("#lightbox-loading").hide();
                n("#lightbox-image").fadeIn(function() {
                    l();
                    a()
                });
                n("#jquery-lightbox").center({
                    keepCentered: !0
                });
                w()
            }
            function l() {
                n("#lightbox-container-image-data-box").slideDown("fast");
                n("#lightbox-image-details-caption").hide();
                t.imageArray[t.activeImage][1] && n("#lightbox-image-details-caption").html(t.imageArray[t.activeImage][1]).show();
                t.imageArray.length > 1 && n("#lightbox-image-details-currentNumber").html(t.txtImage + " " + (t.activeImage + 1) + " " + t.txtOf + " " + t.imageArray.length).show()
            }
            function a() {
                n("#lightbox-nav").show();
                n("#lightbox-nav-btnPrev,#lightbox-nav-btnNext").css({
                    background: "transparent url(" + t.imageBlank + ") no-repeat"
                });
                t.activeImage != 0 && (t.fixedNavigation ? n("#lightbox-nav-btnPrev").css({
                    background: "url(" + t.imageBtnPrev + ") left 15% no-repeat"
                }).unbind().bind("click", function() {
                    return t.activeImage = t.activeImage - 1,
                    i(),
                    !1
                }) : n("#lightbox-nav-btnPrev").unbind().hover(function() {
                    n(this).css({
                        background: "url(" + t.imageBtnPrev + ") left 15% no-repeat"
                    })
                }, function() {
                    n(this).css({
                        background: "transparent url(" + t.imageBlank + ") no-repeat"
                    })
                }).show().bind("click", function() {
                    return t.activeImage = t.activeImage - 1,
                    i(),
                    !1
                }));
                t.activeImage != t.imageArray.length - 1 && (t.fixedNavigation ? n("#lightbox-nav-btnNext").css({
                    background: "url(" + t.imageBtnNext + ") right 15% no-repeat"
                }).unbind().bind("click", function() {
                    return t.activeImage = t.activeImage + 1,
                    i(),
                    !1
                }) : n("#lightbox-nav-btnNext").unbind().hover(function() {
                    n(this).css({
                        background: "url(" + t.imageBtnNext + ") right 15% no-repeat"
                    })
                }, function() {
                    n(this).css({
                        background: "transparent url(" + t.imageBlank + ") no-repeat"
                    })
                }).show().bind("click", function() {
                    return t.activeImage = t.activeImage + 1,
                    i(),
                    !1
                }))
            }
            function v() {
                n(document).keydown(function(n) {
                    p(n)
                })
            }
            function y() {}
            function p(n) {
                var u, f;
                u = n == null ? event.keyCode : n.keyCode;
                f = String.fromCharCode(u).toLowerCase();
                (f == t.keyToClose || f == "x" || u == 27) && r();
                (f == t.keyToPrev || u == 37) && t.activeImage != 0 && (t.activeImage = t.activeImage - 1,
                i());
                (f == t.keyToNext || u == 39) && t.activeImage != t.imageArray.length - 1 && (t.activeImage = t.activeImage + 1,
                i())
            }
            function w() {
                var n, i;
                t.imageArray.length - 1 > t.activeImage && (i = new Image,
                i.src = t.imageArray[t.activeImage + 1][0]);
                t.activeImage > 0 && (n = new Image,
                n.src = t.imageArray[t.activeImage - 1][0])
            }
            function r() {
                y();
                n("#jquery-lightbox").remove();
                n("#jquery-overlay").fadeOut(function() {
                    n("#jquery-overlay").remove()
                });
                n("embed, object, select").css({
                    visibility: "visible"
                })
            }
            function u() {
                var i, r, u, f, n, t;
                return window.innerHeight && window.scrollMaxY ? (i = window.innerWidth + window.scrollMaxX,
                r = window.innerHeight + window.scrollMaxY) : document.body.scrollHeight > document.body.offsetHeight ? (i = document.body.scrollWidth,
                r = document.body.scrollHeight) : (i = document.body.offsetWidth,
                r = document.body.offsetHeight),
                self.innerHeight ? (n = document.documentElement.clientWidth ? document.documentElement.clientWidth : self.innerWidth,
                t = self.innerHeight) : document.documentElement && document.documentElement.clientHeight ? (n = document.documentElement.clientWidth,
                t = document.documentElement.clientHeight) : document.body && (n = document.body.clientWidth,
                t = document.body.clientHeight),
                f = r < t ? t : r,
                u = i < n ? i : n,
                [u, f, n, t]
            }
            function b() {
                var n, t;
                return self.pageYOffset ? (t = self.pageYOffset,
                n = self.pageXOffset) : document.documentElement && document.documentElement.scrollTop ? (t = document.documentElement.scrollTop,
                n = document.documentElement.scrollLeft) : document.body && (t = document.body.scrollTop,
                n = document.body.scrollLeft),
                [n, t]
            }
            t = jQuery.extend({
                overlayBgColor: "#000",
                overlayOpacity: .8,
                fixedNavigation: !1,
                imageLoading: Cobalt.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-ico-loading.gif",
                imageBtnPrev: Cobalt.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-prev.gif",
                imageBtnNext: Cobalt.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-next.gif",
                imageBtnClose: Cobalt.Constants.StaticURL + "/skins/global/images/lightbox/lightbox-btn-close.gif",
                imageBlank: Cobalt.Constants.StaticURL + "/skins/global/images/lightboximages/lightbox-blank.gif",
                containerBorderSize: 10,
                containerResizeSpeed: 400,
                txtImage: "Image",
                txtOf: "of",
                keyToClose: "c",
                keyToPrev: "p",
                keyToNext: "n",
                imageArray: [],
                activeImage: 0,
                minWidth: 250
            }, t);
            var f = this;
            return this.unbind("click").click(e)
        }
    }
    )(jQuery)
}
, function() {
    "use strict";
    var n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ;
    (function(t, i) {
        var s = !1, u = "tooltip", f, e, h, c, l, y = {
            content: null,
            track: !0
        }, r, o = function(n) {
            return n.data(u)
        }, p = function(n) {
            var t, i, r;
            return n = n || window.event,
            t = {
                x: 0,
                y: 0
            },
            n.pageX || n.pageY ? (t.x = n.pageX,
            t.y = n.pageY) : (i = document.documentElement,
            r = document.body,
            t.x = n.clientX + (i.scrollLeft || r.scrollLeft) - (i.clientLeft || 0),
            t.y = n.clientY + (i.scrollTop || r.scrollTop) - (i.clientTop || 0)),
            t
        }, w = function(n) {
            if (!!r && r.css("display") != "none") {
                var t = p(n);
                f = t.x;
                e = t.y;
                h = f + 15;
                c = e - 20;
                nt()
            }
        }, a = function(r) {
            var u = o(r), f, e;
            return u.content == null ? (f = r.attr("title"),
            e = r.find("> .tooltip-html"),
            e.length > 0 ? (u.content = e.html(),
            u.html = u.content) : f != i && f != "" && (u.html = r.attr("title"),
            r.removeAttr("title"))) : typeof u.content == "string" ? u.html = u.content : n(u.content) == "object" ? u.html = t("<div>").append(t(u.content).clone(!1).css("display", "")).remove().html() : typeof u.content == "function" && (u.html = u.content(r)),
            u.html
        }, b = function(n, t) {
            var i = o(n);
            a(n);
            r.html(t)
        }, k = function() {
            var i = t(this), n;
            l = i;
            n = o(i);
            n.customCssClass != null ? r.attr("class", "u-tooltips-a " + n.customCssClass) : r.attr("class", "u-tooltips-a");
            a(i);
            n.html != null && (b(i, n.html),
            d())
        }, v = function() {
            var n = t(this);
            l = null;
            g()
        }, d = function() {
            Cobalt.detectIsOnMobile() || r.show()
        }, g = function() {
            r.hide()
        }, nt = function() {
            var n, a;
            if (r !== i && (n = r[0],
            n !== i)) {
                var v = f
                  , o = e
                  , s = h
                  , l = c
                  , t = document.documentElement
                  , u = document.body;
                o + n.offsetHeight > t.clientHeight + u.scrollTop + t.scrollTop && (a = t.clientHeight + u.scrollTop + t.scrollTop - (o + n.offsetHeight),
                l += a);
                v + n.offsetWidth + 27 > t.clientWidth + u.scrollLeft + t.scrollLeft && (s -= n.offsetWidth + 27);
                n.style.left = "" + s + "px";
                n.style.top = "" + l + "px"
            }
        }, tt = function(n) {
            n.on("mouseover", k);
            n.on("mouseout click", v);
            t(document).keyup(function(n) {
                n.keyCode == 27 && v()
            })
        }, it = function() {
            return t("<div>").attr("id", "tooltip-container").attr("class", "u-tooltips-a").css("position", "absolute").css("display", "none")
        };
        t.fn.tooltip = function(n) {
            if (this && !(this.length < 1))
                return s || (t(document).mousemove(w),
                s = !0),
                r || (r = it(),
                r.appendTo(document.body)),
                this.each(function() {
                    var f = t(this), e = f.data(u), r;
                    e == i && (r = t.extend({}, y, n),
                    r.customCssClass || (r.customCssClass = t(this).attr("data-tooltip-class")),
                    f.data(u, r),
                    tt(f))
                })
        }
    }
    )(jQuery)
}
, function() {
    "use strict";
    (function(n) {
        n.fn.extend({
            autocomplete_search: function(t, i) {
                var r = typeof t == "string";
                return i = n.extend({}, n.S_Autocompleter.defaults, {
                    url: r ? t : null,
                    data: r ? null : t,
                    delay: r ? n.S_Autocompleter.defaults.delay : 10,
                    max: i && !i.scroll ? 10 : 150
                }, i),
                i.highlight = i.highlight || function(n) {
                    return n
                }
                ,
                i.formatMatch = i.formatMatch || i.formatItem,
                this.each(function() {
                    new n.S_Autocompleter(this,i)
                })
            },
            result: function(n) {
                return this.bind("result", n)
            },
            search: function(n) {
                return this.trigger("search", [n])
            },
            flushCache: function() {
                return this.trigger("flushCache")
            },
            setOptions: function(n) {
                return this.trigger("setOptions", [n])
            },
            unautocomplete: function() {
                return this.trigger("unautocomplete")
            },
            hideResults: function(t) {
                return n(this).trigger("hideResults"),
                this.bind("hideResults", t)
            }
        });
        n.S_Autocompleter = function(t, i) {
            function k() {
                var f = u.selected(), o, h;
                if (!f || f.data.Display != null && f.data.Display.indexOf("href") != -1)
                    return !1;
                if (o = f.result,
                e = o,
                i.multiple) {
                    if (h = s(r.val()),
                    h.length > 1) {
                        var a = i.multipleSeparator.length, v = n(t).selection().start, l, c = 0;
                        n.each(h, function(n, t) {
                            if (c += t.length,
                            v <= c)
                                return l = n,
                                !1;
                            c += a
                        });
                        h[l] = o;
                        o = h.join(i.multipleSeparator)
                    }
                    o += i.multipleSeparator
                }
                return r.val(o),
                y(),
                r.trigger("result", [f.data, f.value]),
                r.attr("data-auto-submit") == "true" && r.parent("form").trigger("submit"),
                !0
            }
            function o(n, t) {
                if (p == f.DEL) {
                    r.trigger("hideResults");
                    return
                }
                var u = r.val();
                (t || u != e) && (e = u,
                u = v(u),
                u.length >= i.minChars ? (r.addClass(i.loadingClass),
                i.matchCase || (u = u.toLowerCase()),
                d(u, tt, y)) : (w(),
                r.trigger("hideResults")))
            }
            function s(t) {
                return t ? i.multiple ? n.map(t.split(i.multipleSeparator), function(i) {
                    return n.trim(t).length ? n.trim(i) : null
                }) : [n.trim(t)] : [""]
            }
            function v(r) {
                var u, f;
                return i.multiple ? (u = s(r),
                u.length == 1) ? u[0] : (f = n(t).selection().start,
                u = f == r.length ? s(r) : s(r.replace(r.substring(f), "")),
                u[u.length - 1]) : r
            }
            function g(u, o) {
                i.autoFill && v(r.val()).toLowerCase() == u.toLowerCase() && p != f.BACKSPACE && (r.val(r.val() + o.substring(v(e).length)),
                n(t).selection(e.length, e.length + o.length))
            }
            function nt() {
                clearTimeout(h);
                h = setTimeout(y, 200)
            }
            function y() {
                var n = u.visible();
                r.trigger("hideResults");
                clearTimeout(h);
                w();
                i.mustMatch && r.search(function(n) {
                    if (!n)
                        if (i.multiple) {
                            var t = s(r.val()).slice(0, -1);
                            r.val(t.join(i.multipleSeparator) + (t.length ? i.multipleSeparator : ""))
                        } else
                            r.val(""),
                            r.trigger("result", null)
                })
            }
            function tt(n, t) {
                t && t.length && c ? (w(),
                u.display(t, n),
                g(n, t[0].value),
                u.show()) : y()
            }
            function d(r, f, e) {
                var o, s;
                i.matchCase || (r = r.toLowerCase());
                o = l.load(r);
                o && o.length ? f(r, o) : typeof i.url == "string" && i.url.length > 0 ? (s = {
                    timestamp: +new Date
                },
                n.each(i.extraParams, function(n, t) {
                    s[n] = typeof t == "function" ? t() : t
                }),
                n.ajax({
                    mode: "abort",
                    port: "autocomplete" + t.name,
                    dataType: i.dataType,
                    url: i.url,
                    data: n.extend({
                        q: v(r),
                        limit: i.max
                    }, s),
                    beforeSend: function(n, t) {
                        i.beforeSend && i.beforeSend(n, t)
                    },
                    success: function(n) {
                        var t = i.parse && i.parse(n) || it(n);
                        l.add(r, t);
                        f(r, t)
                    }
                })) : (u.emptyList(),
                e(r))
            }
            function it(t) {
                for (var r, u = [], e = t.split("\n"), f = 0; f < e.length; f++)
                    r = n.trim(e[f]),
                    r && (r = r.split("|"),
                    u[u.length] = {
                        data: r,
                        value: r[0],
                        result: i.formatResult && i.formatResult(r, r[0]) || r[0]
                    });
                return u
            }
            function w() {
                r.removeClass(i.loadingClass)
            }
            var f = {
                UP: 38,
                DOWN: 40,
                DEL: 46,
                TAB: 9,
                RETURN: 13,
                ESC: 27,
                COMMA: 188,
                PAGEUP: 33,
                PAGEDOWN: 34,
                BACKSPACE: 8
            }, r = n(t).attr("autocomplete", "off").addClass(i.inputClass), h, e = "", l = n.S_Autocompleter.Cache(i), c = 0, p, b = {
                mouseDownOnSelect: !1
            }, u = n.S_Autocompleter.Select(i, t, k, b), a;
            n.browser.opera && n(t.form).bind("submit.autocomplete", function() {
                if (a)
                    return a = !1,
                    !1
            });
            r.bind((n.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(t) {
                c = 1;
                p = t.keyCode;
                switch (t.keyCode) {
                case f.UP:
                    t.preventDefault();
                    u.visible() ? u.prev() : o(0, !0);
                    break;
                case f.DOWN:
                    t.preventDefault();
                    u.visible() ? u.next() : o(0, !0);
                    break;
                case f.PAGEUP:
                    t.preventDefault();
                    u.visible() ? u.pageUp() : o(0, !0);
                    break;
                case f.PAGEDOWN:
                    t.preventDefault();
                    u.visible() ? u.pageDown() : o(0, !0);
                    break;
                case i.multiple && n.trim(i.multipleSeparator) == "," && f.COMMA:
                case f.TAB:
                case f.RETURN:
                    var e = u.selected();
                    if (e.data.Url != null)
                        return t.stopPropagation(),
                        window.location = e.data.Url,
                        a = !0,
                        !1;
                    if (k())
                        return t.preventDefault(),
                        a = !0,
                        !1;
                    break;
                case f.ESC:
                    r.trigger("hideResults");
                    break;
                default:
                    clearTimeout(h);
                    h = setTimeout(o, i.delay)
                }
            }).focus(function() {
                c++
            }).blur(function() {
                c = 0;
                b.mouseDownOnSelect || nt()
            }).click(function() {
                c++ > 1 && !u.visible() && o(0, !0)
            }).bind("search", function() {
                function i(n, i) {
                    var u, f;
                    if (i && i.length)
                        for (f = 0; f < i.length; f++)
                            if (i[f].result.toLowerCase() == n.toLowerCase()) {
                                u = i[f];
                                break
                            }
                    typeof t == "function" ? t(u) : (r.trigger("result", u && [u.data, u.value]),
                    r.attr("data-auto-submit") == "true" && r.parent("form").trigger("submit"))
                }
                var t = arguments.length > 1 ? arguments[1] : null;
                n.each(s(r.val()), function(n, t) {
                    d(t, i, i)
                })
            }).bind("flushCache", function() {
                l.flush()
            }).bind("setOptions", function() {
                n.extend(i, arguments[1]);
                "data"in arguments[1] && l.populate()
            }).bind("unautocomplete", function() {
                u.unbind();
                r.unbind();
                n(t.form).unbind(".autocomplete")
            }).bind("hideResults", function() {
                u.hide()
            })
        }
        ;
        n.S_Autocompleter.defaults = {
            inputClass: "ac_input",
            resultsClass: "ac_results",
            loadingClass: "ac_loading",
            minChars: 1,
            delay: 400,
            matchCase: !1,
            matchSubset: !0,
            matchContains: !1,
            cacheLength: 10,
            max: 100,
            mustMatch: !1,
            extraParams: {},
            selectFirst: !0,
            formatItem: function(n) {
                return n[0]
            },
            formatMatch: null,
            autoFill: !1,
            width: 0,
            multiple: !1,
            multipleSeparator: ", ",
            highlight: function(n, t) {
                return n.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)","gi"), "<strong>$1<\/strong>")
            },
            scroll: !0,
            scrollHeight: 180
        };
        n.S_Autocompleter.Cache = function(t) {
            function u(n, i) {
                t.matchCase || (n = n.toString().toLowerCase());
                var r = n.indexOf(i);
                return (t.matchContains == "word" && (r = n.toLowerCase().search("\\b" + i.toLowerCase())),
                r == -1) ? !1 : r == 0 || t.matchContains
            }
            function f(n, u) {
                r > t.cacheLength && o();
                i[n] || r++;
                i[n] = u
            }
            function e() {
                var r, h, u, c, i, e, o, s;
                if (!t.data)
                    return !1;
                for (r = {},
                h = 0,
                t.url || (t.cacheLength = 1),
                r[""] = [],
                u = 0,
                c = t.data.length; u < c; u++)
                    (i = t.data[u],
                    i = typeof i == "string" ? [i] : i,
                    e = t.formatMatch(i, u + 1, t.data.length),
                    e !== !1) && (o = e.charAt(0).toLowerCase(),
                    r[o] || (r[o] = []),
                    s = {
                        value: e,
                        data: i,
                        result: t.formatResult && t.formatResult(i) || e
                    },
                    r[o].push(s),
                    h++ < t.max && r[""].push(s));
                n.each(r, function(n, i) {
                    t.cacheLength++;
                    f(n, i)
                })
            }
            function o() {
                i = {};
                r = 0
            }
            var i = {}
              , r = 0;
            return setTimeout(e, 25),
            {
                flush: o,
                add: f,
                populate: e,
                load: function(f) {
                    var h, s, o, e;
                    if (!t.cacheLength || !r)
                        return null;
                    if (!t.url && t.matchContains) {
                        e = [];
                        for (h in i)
                            h.length > 0 && (o = i[h],
                            n.each(o, function(n, t) {
                                u(t.value, f) && e.push(t)
                            }));
                        return e
                    }
                    if (i[f])
                        return i[f];
                    if (t.matchSubset)
                        for (s = f.length - 1; s >= t.minChars; s--)
                            if (o = i[f.substr(0, s)],
                            o)
                                return e = [],
                                n.each(o, function(n, t) {
                                    u(t.value, f) && (e[e.length] = t)
                                }),
                                e;
                    return null
                }
            }
        }
        ;
        n.S_Autocompleter.Select = function(t, i, r, u) {
            function p() {
                y && (s = n("<div/>").hide().addClass(t.resultsClass).css("position", "absolute").appendTo(document.body),
                o = n("<ul/>").appendTo(s).mouseover(function(t) {
                    a(t).nodeName && a(t).nodeName.toUpperCase() == "LI" && (e = n("li", o).removeClass(h.ACTIVE).index(a(t)),
                    n(a(t)).addClass(h.ACTIVE))
                }).click(function(t) {
                    return n(a(t)).addClass(h.ACTIVE),
                    r() ? (i.focus(),
                    !1) : void 0
                }).mousedown(function() {
                    u.mouseDownOnSelect = !0
                }).mouseup(function() {
                    u.mouseDownOnSelect = !1
                }),
                t.width > 0 && s.css("width", t.width),
                y = !1)
            }
            function a(n) {
                for (var t = n.target; t && t.tagName != "LI"; )
                    t = t.parentNode;
                return t ? t : []
            }
            function l(n) {
                var r, i;
                f.slice(e, e + 1).removeClass(h.ACTIVE);
                w(n);
                r = f.slice(e, e + 1).addClass(h.ACTIVE);
                t.scroll && (i = 0,
                f.slice(0, e).each(function() {
                    i += this.offsetHeight
                }),
                i + r[0].offsetHeight - o.scrollTop() > o[0].clientHeight ? o.scrollTop(i + r[0].offsetHeight - o.innerHeight()) : i < o.scrollTop() && o.scrollTop(i))
            }
            function w(n) {
                e += n;
                e < 0 ? e = f.size() - 1 : e >= f.size() && (e = 0)
            }
            function b(n) {
                return t.max && t.max < n ? t.max : n
            }
            function k() {
                var r, i, u, s;
                for (o.empty(),
                r = b(c.length),
                i = 0; i < r; i++)
                    c[i] && (u = t.formatItem(c[i].data, i + 1, r, c[i].value, v),
                    u !== !1) && (s = n("<li/>").html(t.highlight(u, v)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(o)[0],
                    n.data(s, "ac_data", c[i]));
                f = o.find("li");
                t.selectFirst && (f.slice(0, 1).addClass(h.ACTIVE),
                e = 0);
                n.fn.bgiframe && o.bgiframe();
                Cobalt.triggerHtmlInsert(o)
            }
            var h = {
                ACTIVE: "ac_over"
            }, f, e = -1, c, v = "", y = !0, s, o;
            return {
                display: function(n, t) {
                    p();
                    c = n;
                    v = t;
                    k()
                },
                next: function() {
                    l(1)
                },
                prev: function() {
                    l(-1)
                },
                pageUp: function() {
                    e != 0 && e - 8 < 0 ? l(-e) : l(-8)
                },
                pageDown: function() {
                    e != f.size() - 1 && e + 8 > f.size() ? l(f.size() - 1 - e) : l(8)
                },
                hide: function() {
                    s && s.hide();
                    f && f.removeClass(h.ACTIVE);
                    e = -1
                },
                visible: function() {
                    return s && s.is(":visible")
                },
                current: function() {
                    return this.visible() && (f.filter("." + h.ACTIVE)[0] || t.selectFirst && f[0])
                },
                show: function() {
                    var r = n(i).offset(), c = n(i).outerWidth(), h, u, e;
                    s.css({
                        width: typeof t.width == "string" || t.width > 0 ? t.width : n(i).width(),
                        top: r.top + i.offsetHeight
                    });
                    s.width() + r.left >= window.innerWidth ? (h = r.left + c - s.width(),
                    s.css({
                        left: h
                    })) : s.css({
                        left: r.left
                    });
                    s.show();
                    t.scroll && (o.scrollTop(0),
                    o.css({
                        maxHeight: t.scrollHeight,
                        overflow: "auto"
                    }),
                    n.browser.msie && typeof document.body.style.maxHeight == "undefined" && (u = 0,
                    f.each(function() {
                        u += this.offsetHeight
                    }),
                    e = u > t.scrollHeight,
                    o.css("height", e ? t.scrollHeight : u),
                    e || f.width(o.width() - parseInt(f.css("padding-left")) - parseInt(f.css("padding-right")))))
                },
                selected: function() {
                    var t = f && f.filter("." + h.ACTIVE).removeClass(h.ACTIVE);
                    return t && t.length && n.data(t[0], "ac_data")
                },
                emptyList: function() {
                    o && o.empty()
                },
                unbind: function() {
                    s && s.remove()
                }
            }
        }
        ;
        n.fn.selection = function(n, t) {
            var i, r;
            if (n !== undefined)
                return this.each(function() {
                    if (this.createTextRange) {
                        var i = this.createTextRange();
                        t === undefined || n == t ? (i.move("character", n),
                        i.select()) : (i.collapse(!0),
                        i.moveStart("character", n),
                        i.moveEnd("character", t),
                        i.select())
                    } else
                        this.setSelectionRange ? this.setSelectionRange(n, t) : this.selectionStart && (this.selectionStart = n,
                        this.selectionEnd = t)
                });
            if (i = this[0],
            i.createTextRange) {
                var u = document.selection.createRange()
                  , o = i.value
                  , f = "<->"
                  , e = u.text.length;
                return u.text = f,
                r = i.value.indexOf(f),
                i.value = o,
                this.selection(r, r + e),
                {
                    start: r,
                    end: r + e
                }
            }
            if (i.selectionStart !== undefined)
                return {
                    start: i.selectionStart,
                    end: i.selectionEnd
                }
        }
    }
    )(jQuery)
}
, function() {
    "use strict";
    (function(n) {
        var t = /<\/?[^>]+>/gi;
        n.fn.stripTags = function() {
            var n = this.html();
            return n.replace(t, "")
        }
        ;
        n.fn.stripTagsFromValue = function() {
            var n = this.val();
            return n.replace(t, "")
        }
    }
    )(jQuery)
}
, function() {
    "use strict";
    (function(n, t) {
        function u(i) {
            var r = i || window.event
              , o = [].slice.call(arguments, 1)
              , u = 0
              , e = 0
              , f = 0;
            return i = n.event.fix(r),
            i.type = "mousewheel",
            r.wheelDelta && (u = r.wheelDelta / 120),
            r.detail && (u = -r.detail / 3),
            f = u,
            r.axis !== t && r.axis === r.HORIZONTAL_AXIS && (f = 0,
            e = -1 * u),
            r.wheelDeltaY !== t && (f = r.wheelDeltaY / 120),
            r.wheelDeltaX !== t && (e = r.wheelDeltaX / -120),
            o.unshift(i, u, e, f),
            (n.event.dispatch || n.event.handle).apply(this, o)
        }
        var f, i, r;
        if (n.fn.hasHandler = function() {
            var t = 0
              , i = n(this).data("events");
            for (e in i)
                i.hasOwnProperty(e) && t++;
            return t > 0
        }
        ,
        f = jQuery.cleanData,
        n.cleanData = function(i) {
            try {
                for (var r = 0, u; (u = i[r]) !== t; r++)
                    n(u).triggerHandler("destroyed")
            } catch (e) {}
            f(i)
        }
        ,
        n.extend(n, {
            hasHandler: n.fn.hasHandler
        }),
        function(n) {
            n.fn.outerHTML = function() {
                return n(this).clone().wrap("<div><\/div>").parent().html()
            }
        }(jQuery),
        i = ["DOMMouseScroll", "mousewheel"],
        n.event.fixHooks)
            for (r = i.length; r; )
                n.event.fixHooks[i[--r]] = n.event.mouseHooks;
        n.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener)
                    for (var n = i.length; n; )
                        this.addEventListener(i[--n], u, !1);
                else
                    this.onmousewheel = u
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var n = i.length; n; )
                        this.removeEventListener(i[--n], u, !1);
                else
                    this.onmousewheel = null
            }
        };
        n.fn.extend({
            mousewheel: function(n) {
                return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
            },
            unmousewheel: function(n) {
                return this.unbind("mousewheel", n)
            }
        });
        n.fn.waitUntilExists = function(t, i, r) {
            var f = "found"
              , u = n(this.selector)
              , e = u.not(function() {
                return n(this).data(f)
            }).each(t).data(f, !0);
            return r ? i && e.length && window.clearInterval(window.waitUntilExists_Intervals[this.selector]) : (window.waitUntilExists_Intervals = window.waitUntilExists_Intervals || {})[this.selector] = window.setInterval(function() {
                u.waitUntilExists(t, i, !0)
            }, 500),
            u
        }
    }
    )(jQuery)
}
, function() {
    "use strict";
    (function(n, t) {
        var i = function() {
            (n("div.module.user-edit").length != 0 || n(".user-action-legacysub-resync").length != 0) && (n("#tab-legacysubscription-history").delegate(".user-action-legacysub-comp", "click", function(t) {
                var f, r, u, i;
                t.preventDefault();
                var s = n(this)
                  , h = s.attr("href")
                  , c = n("<label>How many months do you wish to comp the subscription?<\/label>")
                  , o = n('<input type="text" size="4"/>')
                  , e = n("<div>");
                e.append(c);
                e.append(o);
                f = n('<a class="button"><span>Issue Comp<\/span><\/a>');
                r = n("<div>");
                r.html("Issuing comp...");
                r.hide();
                u = n("<div>");
                u.append(e);
                u.append(f);
                u.append(r);
                i = n("<div>");
                i.append(u);
                i.show();
                i.dialog({
                    draggable: !1,
                    title: "Comp Subscription",
                    modal: !0,
                    resizable: !1,
                    dialogClass: "modal credit-subscription-modal"
                });
                i.parent().center({
                    sizeToWindow: !0,
                    maxWidth: 425,
                    maxHeight: 90
                });
                f.click(function() {
                    r.show();
                    f.addClass("disabled");
                    var t = h + "?m=" + o.val();
                    n.ajax({
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        url: t,
                        dataType: "json",
                        success: function(n) {
                            n.IsSuccessful ? (alert("The subscription has been credited. The page will now reload."),
                            self.location.reload()) : alert(n.Message);
                            i.dialog("destroy")
                        }
                    })
                })
            }),
            n("#tab-legacysubscription-history").delegate(".user-action-legacysub-resync", "click", function(t) {
                t.preventDefault();
                var r = n(this)
                  , i = n(this).attr("href");
                n.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: i,
                    dataType: "json",
                    success: function(n) {
                        n.IsSuccessful ? (alert("Legacy Subscriptions for this account have been resynced with the Payment Service. The page will now reload."),
                        self.location.reload()) : alert(n.Message)
                    }
                })
            }))
        };
        t.LegacyPayment = {
            initialize: function() {
                i()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Listing = {
            processRowClick: function(t) {
                var r = t.target, f = n(r).parent(), e = n(this), u, i;
                if (r != null) {
                    if (u = ["INPUT", "TEXTAREA", "A", "BUTTON"],
                    n.inArray(r.tagName, u) > -1)
                        return;
                    if (f != null && n.inArray(f[0].tagName, u) > -1)
                        return;
                    if (n(r).find("input").length > 0 || n(r).find("form").length > 0)
                        return
                }
                i = n(this).find("a.title");
                i.length == 0 && (i = n(this).find(".title a"));
                i.length == 0 && (i = n(this).find("a:first"));
                i.length >= 1 && (t.preventDefault(),
                document.location = i.attr("href"))
            },
            processPagination: function() {
                var u = n(".listing-container"), t, r;
                u.each(function() {
                    var t = n(this).find("[data-viewstate]").attr("data-viewstate"), r;
                    t != "" && t != i && (r = n(this).find("form.listing-filters"),
                    r.each(function() {
                        var i = n(this).attr("action");
                        i.indexOf("#") == -1 && n(this).attr("action", i + t)
                    }))
                });
                t = n(".paging-list");
                t.each(function() {
                    var r = t.attr("data-viewstate"), u;
                    r != "" && r != i && (u = t.find("> li > a"),
                    u.each(function() {
                        var t = n(this).attr("href");
                        t.indexOf("#") == -1 && n(this).attr("href", t + r)
                    }))
                });
                r = n("table.listing");
                r.each(function() {
                    var t = n(this).attr("data-viewstate"), r;
                    t != "" && t != i && (r = n(this).find("> thead > tr > th > a"),
                    r.each(function() {
                        var i = n(this).attr("href");
                        i.indexOf("#") == -1 && n(this).attr("href", i + t)
                    }))
                })
            },
            initialize: function() {
                t.Listing.CurrentListingUrl = encodeURIComponent(self.location.pathname);
                t.runOnHtmlInsert(t.Listing.process);
                t.Listing.bindAjaxScrolling()
            },
            bindAjaxScrolling: function() {
                var r = n(".listing[data-ajax-url]");
                r.each(function(r, u) {
                    var f = n(u), e = f.parents(".listing-container"), s = f.data("scroll-inline") === "True", o;
                    if (s)
                        n(document).on("scroll.get-next-page", function() {
                            clearTimeout(o);
                            o = setTimeout(function() {
                                var o = f.children("li").last()[0].getBoundingClientRect().top
                                  , r = e.find("a[data-next-page]").attr("href")
                                  , u = r != i;
                                o < 1e3 && u ? t.Listing.getNextPage(r, f.attr("data-ajax-url"), f, e) : u || n(document).off("scroll.get-next-page")
                            }, 100)
                        })
                })
            },
            processAjax: function() {
                var i = n(".listing[data-ajax-url]");
                i.each(function(i, r) {
                    var f = n(r)
                      , u = f.parents(".listing-container");
                    if (!u.data("ajax-paging-initialized")) {
                        u.data("ajax-paging-initialized", !0);
                        u.find(".j-listing-pagination,.j-listing-table-header").on("click", "a", function(i) {
                            i.preventDefault();
                            i.stopImmediatePropagation();
                            var r = n(this).attr("href")
                              , e = f.attr("data-ajax-url");
                            t.Listing.getNextPage(r, e, f, u)
                        })
                    }
                })
            },
            getNextPage: function(i, r, u, f) {
                var s = u.attr("data-ajax-set-window-state"), h = u.data("page-inline") === "True", o = new t.QueryParser(i), c = new t.QueryParser(r), e;
                return o.mergeFrom(c.keyValuePairs),
                r.indexOf("?") > 0 && (r = r.substring(0, r.indexOf("?"))),
                r = r + o.toString(),
                e = i,
                i.indexOf("#") < 0 && (e = e + self.location.hash),
                f.mask(),
                n.ajax({
                    url: r,
                    cache: !1,
                    headers: {
                        "x-cobalt-listing-url": t.Listing.CurrentListingUrl
                    },
                    error: function() {
                        return f.unmask(),
                        !1
                    },
                    success: function(i) {
                        var l;
                        s === "true" && window.history.replaceState != null && window.history.replaceState(null, "", e);
                        f.unmask();
                        var r = n(i)
                          , o = u.parents(".listing-container")
                          , c = o.parent()
                          , v = r.find(".listing").attr("data-prevent-ajax-scroll");
                        if (!v)
                            if (h)
                                l = r.find(".listing-footer"),
                                r = r.find(".listing-body >ul").children(),
                                c.find(".listing").append(r),
                                l.find("a[data-next-page]").length > 0 ? o.find(".listing-footer").find("a").attr("href", l.find("a[data-next-page]").attr("href")) : o.find(".listing-footer").remove();
                            else {
                                o.remove();
                                c.append(r);
                                var y = document.documentElement.scrollTop || document.body.scrollTop
                                  , p = r.find(".listing-header").length > 0 && r.find(".listing-header").is(":visible")
                                  , a = (p ? r.find(".listing-header") : r).offset().top - 20
                                  , b = window.innerHeight && window.innerHeight < n(window).height() ? window.innerHeight : n(window).height()
                                  , w = a > y;
                                w || n("body,html,document").animate({
                                    scrollTop: a
                                }, 1e3)
                            }
                        return t.triggerHtmlInsert(c),
                        window._gaq && _gaq.push(["_trackPageview"]),
                        !0
                    }
                }),
                !1
            },
            process: function() {
                n("table.listing-auto-link > tbody > tr").click(t.Listing.processRowClick);
                n("ul.listing-auto-link > li").click(t.Listing.processRowClick);
                t.Listing.processAjax();
                t.Listing.processPagination()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        var i = 1
          , r = function() {
            var n = {
                0: function(n, t) {
                    return t[0]
                },
                1: function(n, t) {
                    return n == 1 ? t[0] : t[1]
                },
                2: function(n, t) {
                    return n == 1 || n == 0 ? t[0] : t[1]
                },
                3: function(n, t) {
                    return t.length < 3 || n == 0 ? t[0] : n % 1 != 0 ? t[2] : n % 10 == 1 && n % 100 != 11 ? t[1] : t[2]
                },
                4: function(n, t) {
                    return t.length < 3 || n == 1 ? t[0] : n == 2 ? t[1] : t[2]
                },
                5: function(n, t) {
                    return t.length < 3 || n == 1 ? t[0] : n % 1 != 0 ? t[2] : n == 0 || n % 100 >= 1 && n % 100 <= 19 ? t[1] : t[2]
                },
                6: function(n, t) {
                    return t.length < 3 || n % 10 == 1 && n % 100 != 11 ? t[0] : n % 1 != 0 ? t[2] : n % 10 == 0 || n % 100 >= 10 && n % 100 <= 20 ? t[1] : t[2]
                },
                7: function(n, t) {
                    return t.length < 3 || n % 10 == 1 && n % 100 != 11 ? t[0] : n % 1 != 0 ? t[2] : n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14) ? t[1] : t[2]
                },
                8: function(n, t) {
                    return t.length < 3 || n == 1 ? t[0] : n % 1 != 0 ? t[2] : n % 10 >= 2 && n % 10 <= 4 ? t[1] : t[2]
                },
                9: function(n, t) {
                    return t.length < 3 || n == 1 ? t[0] : n % 1 != 0 ? t[2] : n % 10 >= 2 && n % 10 <= 4 && !(n % 100 >= 12 && n % 100 <= 14) ? t[1] : t[2]
                },
                10: function(n, t) {
                    return t.length < 4 || n % 100 == 1 ? t[0] : n % 100 == 2 ? t[1] : n % 100 == 3 || n % 100 == 4 ? t[2] : t[3]
                },
                11: function(n, t) {
                    return t.length < 5 || n == 1 ? t[0] : n == 2 ? t[1] : n % 1 != 0 ? t[4] : n >= 3 && n <= 6 ? t[2] : n >= 7 && n <= 10 ? t[3] : t[4]
                },
                12: function(n, t) {
                    return t.length < 6 || n == 1 ? t[0] : n == 2 ? t[1] : n % 1 != 0 ? t[4] : n % 100 >= 3 && n % 100 <= 10 ? t[2] : n % 100 >= 11 && n % 100 <= 99 ? t[3] : n == 0 ? t[5] : t[4]
                },
                13: function(n, t) {
                    return t.length < 4 || n == 1 ? t[0] : n % 1 != 0 ? t[3] : n == 0 || n % 100 >= 1 && n % 100 <= 10 ? t[1] : n % 100 >= 11 && n % 100 <= 19 ? t[2] : t[3]
                },
                14: function(n, t) {
                    return t.length < 3 || n % 10 == 1 ? t[0] : n % 10 != 2 ? t[1] : t[2]
                },
                15: function(n, t) {
                    return n % 10 == 1 && n % 100 != 11 ? t[0] : t[1]
                }
            }
              , t = /PLURAL\[([^\]]+)\]/g;
            return function(i, r) {
                return r ? r.replace(t, function(t, r) {
                    var u = r.split(";"), f;
                    return u.length < 2 ? "" : u.length == 2 ? u[1] : (f = parseFloat(u[0]),
                    f != f && (f = 0),
                    u.shift(),
                    n[i](f, u))
                }) : ""
            }
        }();
        t.Localization = function(n) {
            n && (t.Localization.Main = this);
            var u = 1
              , f = {}
              , e = {}
              , o = function(n) {
                var t = e[n], i, r;
                if (typeof t == "undefined") {
                    for (t = 0,
                    i = 0; i < f.length; i++)
                        if (r = f[i],
                        r.id == n) {
                            t = r.pluralForm;
                            break
                        }
                    e[n] = t
                }
                return t
            };
            this.getCurrentLanguageID = function() {
                return u
            }
            ;
            this.setCurrentLanguageID = function(n) {
                u = n
            }
            ;
            this.setLanguages = function(n) {
                e = {};
                f = n;
                this.Languages = n
            }
            ;
            this.populate = function(n, t) {
                var i, r, u;
                for (i in t)
                    for (r in t[i])
                        for (u in t[i][r])
                            this[i] && this[i][r] && this[i][r][u] && (this[i][r][u][n] = t[i][r][u])
            }
            ;
            this.localize = function(n) {
                var e = n.callee, f = u, t = e[f], s;
                if (typeof t == "undefined" && u != i && (f = i,
                t = e[f],
                typeof t == "undefined"))
                    throw "Can't find translation.";
                return n.length > 0 && (t = String.prototype.format.apply(t, n)),
                s = o(f),
                r(s, t)
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.LocalizationEditor = {
            adminLocalizationPhraseEditRoute: null,
            adminLocalizationIndexRoute: null,
            initialize: function() {
                var i, r;
                n(t.LocalizationEditor.toggleId).click(function() {
                    t.LocalizationEditor.localizationEditorEnabled = !t.LocalizationEditor.localizationEditorEnabled;
                    t.LocalizationEditor.toggleInPlaceEditor(t.LocalizationEditor.localizationEditorEnabled);
                    t.LocalizationEditor.localizationEditorEnabled ? n(this).addClass("enabled") : n(this).removeClass("enabled")
                });
                i = n("#namespaceList");
                n(".namespaceSelector").hover(function() {
                    i.stop(!0, !0).slideDown(100)
                }, function() {
                    i.stop(!0, !0).slideUp(100)
                });
                r = n("#subNamespaceList");
                n(".subNamespaceSelector").hover(function() {
                    r.stop(!0, !0).slideDown(100)
                }, function() {
                    r.stop(!0, !0).slideUp(100)
                })
            },
            toggleInPlaceEditor: function(i) {
                i ? (n(".trans").addClass("hover"),
                n(".trans:not(.todo)").attr("title", "Click to edit"),
                n(".trans:not(.todo)").click(function() {
                    return t.LocalizationEditor.clickToEdit(n(this))
                }),
                n(".trans.todo").attr("title", "Search for text"),
                n(".trans.todo").click(function() {
                    return t.LocalizationEditor.clickToSearch(n(this))
                })) : (n(".trans").removeClass("hover"),
                n(".trans").unbind("click"))
            },
            clickToEdit: function(n) {
                var i = n.attr("data-phrase-id");
                if (i)
                    return window.location = t.LocalizationEditor.adminLocalizationPhraseEditRoute(i),
                    !1
            },
            clickToSearch: function(n) {
                var i = n.html();
                if (i)
                    return window.location = t.LocalizationEditor.adminLocalizationIndexRoute() + "?search=" + escape(i),
                    !1
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Markup = {
            customBBcodeButtons: [],
            dependentScripts: function() {
                return [{
                    dependency: t.User,
                    name: "Cobalt.User"
                }]
            },
            initialize: function() {
                var i = {
                    markdownTitle: function(t, i) {
                        for (var r = "", f = n.trim(t.selection || t.placeHolder).length, u = 0; u < f; u++)
                            r += i;
                        return "\n" + r
                    }
                };
                n("body").on("click", ".markItUpButton-smiley", function(n) {
                    n.preventDefault();
                    t.Smilies.showModal()
                });
                n("body").on("click", ".markItUpButton-dice", function(n) {
                    n.preventDefault();
                    t.Dice.showModal()
                });
                t.Markup.markItUpSets = {
                    base: {
                        resizeHandle: !0
                    },
                    creole: {
                        nameSpace: "markItUp-creole",
                        onShiftEnter: {
                            keepDefault: !1,
                            replaceWith: "\n\n"
                        },
                        previewParserPath: "/markup-preview/creole",
                        markupSet: [{
                            name: "Heading 1",
                            key: "1",
                            openWith: "= ",
                            closeWith: " =",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-1"
                        }, {
                            name: "Heading 2",
                            key: "2",
                            openWith: "== ",
                            closeWith: " ==",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-2"
                        }, {
                            name: "Heading 3",
                            key: "3",
                            openWith: "=== ",
                            closeWith: " ===",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-3"
                        }, {
                            name: "Heading 4",
                            key: "4",
                            openWith: "==== ",
                            closeWith: " ====",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-4"
                        }, {
                            name: "Heading 5",
                            key: "5",
                            openWith: "===== ",
                            closeWith: " =====",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-5"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Bold",
                            key: "B",
                            openWith: "**",
                            closeWith: "**",
                            className: "markItUpButton-bold"
                        }, {
                            name: "Italic",
                            key: "I",
                            openWith: "//",
                            closeWith: "//",
                            className: "markItUpButton-italic"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Bulleted list",
                            openWith: "(!(* |!|*)!)",
                            className: "markItUpButton-list-bullet"
                        }, {
                            name: "Numeric list",
                            openWith: "(!(# |!|#)!)",
                            className: "markItUpButton-list-numeric"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Picture",
                            key: "P",
                            replaceWith: "{{[![Url:!:http://]!]|[![name]!]}}",
                            className: "markItUpButton-insert-image"
                        }, {
                            name: "Link",
                            key: "L",
                            openWith: "[[[![Link]!]|",
                            closeWith: "]]",
                            placeHolder: "Your text to link here...",
                            className: "markItUpButton-insert-link"
                        }]
                    },
                    bbcode: {
                        nameSpace: "markItUp-bbcode",
                        onShiftEnter: {
                            keepDefault: !1,
                            replaceWith: "\n\n"
                        },
                        previewParserPath: "/markup-preview/bbcode",
                        markupSet: [{
                            name: "Bold",
                            key: "B",
                            openWith: "[b]",
                            closeWith: "[/b]",
                            className: "markItUpButton-bold"
                        }, {
                            name: "Italic",
                            key: "I",
                            openWith: "[i]",
                            closeWith: "[/i]",
                            className: "markItUpButton-italic"
                        }, {
                            name: "Underline",
                            key: "U",
                            openWith: "[u]",
                            closeWith: "[/u]",
                            className: "markItUpButton-underline"
                        }, {
                            name: "Strikethrough",
                            key: "S",
                            openWith: "[s]",
                            closeWith: "[/s]",
                            className: "markItUpButton-strikethrough"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "List Item",
                            openWith: "[*]",
                            closeWith: "\n",
                            className: "markItUpButton-list-item"
                        }, {
                            name: "Bulleted list",
                            openWith: "[list]\n[*]",
                            closeWith: "\n[/list]",
                            className: "markItUpButton-list-bullet"
                        }, {
                            name: "Numeric list",
                            openWith: "[numlist]\n[*]",
                            closeWith: "\n[/numlist]",
                            className: "markItUpButton-list-numeric"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Picture",
                            key: "P",
                            replaceWith: "[img][![Url:!:http://]!][/img]",
                            className: "markItUpButton-insert-image"
                        }, {
                            name: "Link",
                            openWith: "[url=[![Url:!:http://]!]]",
                            closeWith: "[/url]",
                            className: "markItUpButton-insert-link"
                        }, {
                            name: "Embed a video",
                            openWith: "[youtube][![Url:!:http://]!]",
                            closeWith: "[/youtube]",
                            className: "markItUpButton-insert-video"
                        }]
                    },
                    standardbbcode: {
                        nameSpace: "markItUp-bbcode",
                        onShiftEnter: {
                            keepDefault: !1,
                            replaceWith: "\n\n"
                        },
                        previewParserPath: "/markup-preview/bbcode",
                        markupSet: [{
                            name: "Bold",
                            key: "B",
                            openWith: "[b]",
                            closeWith: "[/b]",
                            className: "markItUpButton-bold"
                        }, {
                            name: "Italic",
                            key: "I",
                            openWith: "[i]",
                            closeWith: "[/i]",
                            className: "markItUpButton-italic"
                        }, {
                            name: "Underline",
                            key: "U",
                            openWith: "[u]",
                            closeWith: "[/u]",
                            className: "markItUpButton-underline"
                        }, {
                            name: "Strikethrough",
                            key: "S",
                            openWith: "[s]",
                            closeWith: "[/s]",
                            className: "markItUpButton-strikethrough"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Bulleted list",
                            className: "markItUpButton-list-bullet"
                        }, {
                            name: "Numeric list",
                            className: "markItUpButton-list-numeric"
                        }, {
                            name: "List Item",
                            openWith: "[*]",
                            closeWith: "\n",
                            className: "markItUpButton-list-item"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Picture",
                            key: "P",
                            replaceWith: "[img][![Url:!:http://]!][/img]",
                            className: "markItUpButton-insert-image"
                        }, {
                            name: "Link",
                            openWith: "[url=[![Url:!:http://]!]]",
                            closeWith: "[/url]",
                            className: "markItUpButton-insert-link"
                        }, {
                            name: "Size",
                            openWith: "[size=[![Text size]!]]",
                            closeWith: "[/size]",
                            className: "markItUpButton-font-size"
                        }, {
                            name: "Colors",
                            openWith: "[color=[![Color]!]]",
                            closeWith: "[/color]",
                            className: "markItUpButton-color"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Left",
                            openWith: "[left]",
                            closeWith: "[/left]",
                            className: "markItUpButton-left"
                        }, {
                            name: "Center",
                            openWith: "[center]",
                            closeWith: "[/center]",
                            className: "markItUpButton-center"
                        }, {
                            name: "Right",
                            openWith: "[right]",
                            closeWith: "[/right]",
                            className: "markItUpButton-right"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Spoiler",
                            openWith: "[spoiler=[![Label]!]]",
                            closeWith: "[/spoiler]",
                            className: "markItUpButton-spoiler"
                        }, {
                            name: "Quote",
                            openWith: "[quote]",
                            closeWith: "[/quote]",
                            className: "markItUpButton-quote"
                        }, {
                            name: "Smiley",
                            className: "markItUpButton-smiley"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Dice",
                            className: "markItUpButton-dice"
                        }]
                    },
                    rawhtml: {
                        nameSpace: "markItUp-rawhtml",
                        previewParserPath: "/markup-preview/rawhtml",
                        onShiftEnter: {
                            keepDefault: !1,
                            replaceWith: "<br />\n"
                        },
                        onCtrlEnter: {
                            keepDefault: !1,
                            openWith: "\n<p>",
                            closeWith: "<\/p>\n"
                        },
                        onTab: {
                            keepDefault: !1,
                            openWith: "\t "
                        },
                        markupSet: [{
                            name: "Heading 1",
                            key: "1",
                            openWith: '<h1(!( class="[![Class]!]")!)>',
                            closeWith: "<\/h1>",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-1"
                        }, {
                            name: "Heading 2",
                            key: "2",
                            openWith: '<h2(!( class="[![Class]!]")!)>',
                            closeWith: "<\/h2>",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-2"
                        }, {
                            name: "Heading 3",
                            key: "3",
                            openWith: '<h3(!( class="[![Class]!]")!)>',
                            closeWith: "<\/h3>",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-3"
                        }, {
                            name: "Heading 4",
                            key: "4",
                            openWith: '<h4(!( class="[![Class]!]")!)>',
                            closeWith: "<\/h4>",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-4"
                        }, {
                            name: "Heading 5",
                            key: "5",
                            openWith: '<h5(!( class="[![Class]!]")!)>',
                            closeWith: "<\/h5>",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-5"
                        }, {
                            name: "Heading 6",
                            key: "6",
                            openWith: '<h6(!( class="[![Class]!]")!)>',
                            closeWith: "<\/h6>",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-6"
                        }, {
                            name: "Paragraph",
                            openWith: '<p(!( class="[![Class]!]")!)>',
                            closeWith: "<\/p>"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Bold",
                            key: "B",
                            openWith: "(!(<strong>|!|<b>)!)",
                            closeWith: "(!(<\/strong>|!|<\/b>)!)",
                            className: "markItUpButton-bold"
                        }, {
                            name: "Italic",
                            key: "I",
                            openWith: "(!(<em>|!|<i>)!)",
                            closeWith: "(!(<\/em>|!|<\/i>)!)",
                            className: "markItUpButton-italic"
                        }, {
                            name: "Stroke through",
                            key: "S",
                            openWith: "<del>",
                            closeWith: "<\/del>",
                            className: "markItUpButton-strikethrough"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Ul",
                            openWith: "<ul>\n",
                            closeWith: "<\/ul>\n",
                            className: "markItUpButton-list-bullet"
                        }, {
                            name: "Ol",
                            openWith: "<ol>\n",
                            closeWith: "<\/ol>\n",
                            className: "markItUpButton-list-numeric"
                        }, {
                            name: "Li",
                            openWith: "<li>",
                            closeWith: "<\/li>"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Picture",
                            key: "P",
                            replaceWith: '<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />',
                            className: "markItUpButton-insert-image"
                        }, {
                            name: "Link",
                            key: "L",
                            openWith: '<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>',
                            closeWith: "<\/a>",
                            placeHolder: "Your text to link...",
                            className: "markItUpButton-insert-link"
                        }]
                    },
                    markdown: {
                        onShiftEnter: {
                            keepDefault: !1,
                            openWith: "\n\n"
                        },
                        markupSet: [{
                            name: "Heading 1",
                            key: "1",
                            placeHolder: "Your title here...",
                            closeWith: function(n) {
                                return i.markdownTitle(n, "=")
                            },
                            className: "markItUpButton-heading-1"
                        }, {
                            name: "Heading 2",
                            key: "2",
                            placeHolder: "Your title here...",
                            closeWith: function(n) {
                                return i.markdownTitle(n, "-")
                            },
                            className: "markItUpButton-heading-2"
                        }, {
                            name: "Heading 3",
                            key: "3",
                            openWith: "### ",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-3"
                        }, {
                            name: "Heading 4",
                            key: "4",
                            openWith: "#### ",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-4"
                        }, {
                            name: "Heading 5",
                            key: "5",
                            openWith: "##### ",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-5"
                        }, {
                            name: "Heading 6",
                            key: "6",
                            openWith: "###### ",
                            placeHolder: "Your title here...",
                            className: "markItUpButton-heading-6"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Bold",
                            key: "B",
                            openWith: "**",
                            closeWith: "**",
                            className: "markItUpButton-bold"
                        }, {
                            name: "Italic",
                            key: "I",
                            openWith: "_",
                            closeWith: "_",
                            className: "markItUpButton-italic"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Bulleted List",
                            openWith: "- ",
                            className: "markItUpButton-list-bullet"
                        }, {
                            name: "Numeric List",
                            openWith: function(n) {
                                return n.line + ". "
                            },
                            className: "markItUpButton-list-numeric"
                        }, {
                            separator: "---------------"
                        }, {
                            name: "Picture",
                            key: "P",
                            replaceWith: '![[![Alternative text]!]]([![Url:!:http://]!] "[![Title]!]")',
                            className: "markItUpButton-insert-image"
                        }, {
                            name: "Link",
                            key: "L",
                            openWith: "[",
                            closeWith: ']([![Url:!:http://]!] "[![Title]!]")',
                            placeHolder: "Your text to link here...",
                            className: "markItUpButton-insert-link"
                        }]
                    }
                };
                n.each(t.Markup.customBBcodeButtons, function(n, i) {
                    t.Markup.markItUpSets.standardbbcode.markupSet.push(i)
                });
                t.runOnHtmlInsert(t.Markup.addTabSupport);
                t.runOnHtmlInsert(t.Markup.handleShowMarkupTypeSelection);
                t.runOnHtmlInsert(t.Markup.loadCustomButtonActions)
            },
            editors: [],
            addTabSupport: function(i) {
                i.find(".j-content-editor").each(function() {
                    t.Markup.editors.push(new t.MarkupEditor(n(this)))
                })
            },
            currentSelectedMarkup: function(n) {
                return parseInt(n.find("input.j-markup-type").val(), null)
            },
            handleShowMarkupTypeSelection: function(t) {
                t.find('.j-content-editor[data-show-markup-selection="false"]').each(function() {
                    n(this).find(".j-tab-nav > .b-tab-item").hide();
                    n(this).find(".j-markup-type-selector").hide()
                })
            },
            getSelectionHtml: function(n) {
                if (window.getSelection)
                    try {
                        var i = n.closest("div.markItUp")
                          , t = i.find("textarea.j-markup-editor").get(0);
                        return t.value.substring(t.selectionStart, t.selectionEnd)
                    } catch (r) {
                        console.log("Cant get selection text " + r)
                    }
                if (document.selection && document.selection.type != "Control")
                    return document.selection.createRange().text
            },
            getNewLinesForBBCodeList: function(n, t) {
                var u = n.split("\n"), i = "", r;
                for (i += t ? "[list]" : "[numlist]",
                r = 0; r < u.length; r++)
                    i += "\n[*]" + u[r];
                return i += "\n",
                i + (t ? "[/list]" : "[/numlist]")
            },
            replaceSelectedText: function(t, i) {
                var r = n(t).parent().parent(".markItUpHeader").siblings(".markItUpEditor").get(0)
                  , u = r.value.substring(0, r.selectionStart)
                  , f = r.value.substring(r.selectionEnd)
                  , e = u + i + f;
                n(t).parent().parent(".markItUpHeader").siblings(".markItUpEditor").val(e)
            },
            loadCustomButtonActions: function() {
                n(".markItUpButton-list-bullet").unbind("click");
                n(".markItUpButton-list-numeric").unbind("click");
                n(".markItUpButton-list-bullet").bind("click", function(i) {
                    i.preventDefault();
                    var r = t.Markup.getSelectionHtml(n(this));
                    t.Markup.replaceSelectedText(this, t.Markup.getNewLinesForBBCodeList(r, !0))
                });
                n(".markItUpButton-list-numeric").bind("click", function(i) {
                    i.preventDefault();
                    var r = t.Markup.getSelectionHtml(n(this));
                    t.Markup.replaceSelectedText(this, t.Markup.getNewLinesForBBCodeList(r, !1))
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    Cobalt.MarkupEditor = function(n) {
        this.editor = n;
        this.richEditor = this.editor.find(".j-wysiwyg-editor");
        this.textEditor = this.editor.find(".j-markup-editor");
        this.tabNav = this.editor.find(".j-tab-nav");
        this.tabContent = this.editor.find(".j-tab-content");
        this.isNewContent = this.editor.attr("data-is-new-content") == "true";
        this.markupTypeField = this.editor.find(".j-markup-type");
        this.markupSelectField = this.editor.find(".j-markup-type-selector");
        this.initialize()
    }
    ;
    Cobalt.MarkupEditor.prototype = {
        editor: null,
        richEditor: null,
        textEditor: null,
        tabNav: null,
        tabContent: null,
        isNewContent: !1,
        markupTypeField: null,
        markupSelectField: null,
        initialize: function() {
            var n = this;
            this.setDefaultMarkupType();
            this.getMarkupMode() != "1" && (this.getMarkupMode() != "3" || document.location.pathname.startsWith("/cp/cms/")) ? this.setMode("markup") : this.setMode("editor");
            this.tabNav.bind("tabsselect", function(t, i) {
                n.handleTabClick(t, i)
            });
            this.markupSelectField.data("previous-value", this.markupSelectField.val());
            this.markupSelectField.focus(function() {
                $(this).data("previous-value", $(this).val())
            });
            this.markupSelectField.change(function(t, i) {
                n.handleMarkupTypeChange(t, i)
            });
            this.markupSelectField.trigger("change", !0);
            this.editor.data("markup-editor", this)
        },
        getMarkupMode: function() {
            return this.markupTypeField.val().toString()
        },
        getMarkupModeName: function() {
            return this.markupTypeField.val().toString() == "1" ? "editor" : "markup"
        },
        getMarkupType: function() {
            return (this.markupSelectField.val() || "").toString()
        },
        getPreviousMarkupType: function() {
            return (this.markupSelectField.data("previous-value") || "").toString()
        },
        setMode: function(n) {
            this.tabNav.find("li[data-markup-mode]").removeClass("selected");
            this.tabNav.find("li[data-markup-mode=" + n + "]").addClass("selected");
            this.tabContent.find("div[data-markup-mode]").hide();
            this.tabContent.find("div[data-markup-mode=" + n + "]").show()
        },
        setDefaultMarkupType: function() {
            this.isNewContent && Cobalt.User.Preferences.MarkupType != null && this.markupSelectField.find("option[value=" + Cobalt.User.Preferences.MarkupType + "]").length > 0 && (this.markupTypeField.val(Cobalt.User.Preferences.MarkupType),
            this.markupSelectField.val(Cobalt.User.Preferences.MarkupType))
        },
        handleMarkupTypeChange: function(n, t) {
            var s = this.getPreviousMarkupType(), r = this.getMarkupType(), e = this.textEditor.val(), o, u, f, i;
            if (e != null && e != "" && s == "6" && r == "2")
                if (confirm("Are you sure you wish to switch to plain text editing? Any rich HTML you've created will be converted to plain text."))
                    o = $("<div>").html(this.textEditor.val())[0].textContent,
                    this.textEditor.val(o);
                else {
                    $(this).val(6);
                    return
                }
            this.textEditor.markItUpRemove();
            u = this.markupSelectField.find("option[value=" + r + "]");
            this.markupSelectField.parent().attr("data-markup-name", u.attr("data-name"));
            this.markupSelectField.is(":enabled") && !t && this.markupTypeField.val(r);
            f = u.attr("data-name");
            f && (i = Cobalt.Markup.markItUpSets[f.toLowerCase()],
            i && (i = $.extend(Cobalt.Markup.markItUpSets.base, i),
            this.textEditor.markItUp(i)))
        },
        handleTabClick: function(n, t) {
            var r, i;
            if (t = $(t),
            this.richEditor.tinymce = Cobalt.TinyMCE.editors[this.richEditor.attr("id")],
            this.richEditor.tinymce == undefined) {
                $.log("TinyMCE is undefined!");
                return
            }
            if (r = t.attr("data-markup-mode"),
            r == "editor")
                i = this.textEditor.val(),
                i != null && (this.richEditor.tinymce !== undefined ? this.richEditor.tinymce.setContent(i) : this.richEditor.val(i)),
                this.markupTypeField.val(1);
            else if (t.is(".tab-markup")) {
                var i = this.richEditor.tinymce !== undefined ? this.richEditor.tinymce.getContent() : this.richEditor.val()
                  , u = 6;
                i != null && (this.markupSelectField.find("option[value=" + u + "]").length > 0 && this.markupSelectField.val(u),
                this.textEditor.val(i));
                this.markupSelectField.change()
            }
        },
        getCurrentValue: function() {
            var n = this.getMarkupModeName();
            return n == "editor" ? this.richEditor.val() : this.textEditor.val()
        }
    }
}
, function() {
    "use strict";
    (function(n) {
        var t = function() {
            function n() {}
            return n.DetectMobileDevice = function() {
                var n = navigator.userAgent
                  , t = "windows";
                return n.match(/Windows Phone 8/i) != null && n.match(/Touch/i) !== null ? t = "windows" : n.match(/iPhone|iPod/i) != null || n.match(/iPad/) ? t = "ios" : n.match(/Android/i) != null ? t = "android" : n.match(/Mac_PowerPC|Macintosh/i) && (t = "mac"),
                t
            }
            ,
            n
        }();
        n.Mobile = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n) {
        var t = jQuery
          , i = function() {
            function n() {
                this.ResizeTimeout = 0;
                this.ResizeTimeoutDuration = 500;
                this.Thresholds = [1024, 680];
                this.LastWidth = window.innerWidth;
                this.EventHandlers = new n.EventHandlers(this);
                this.bindEvents();
                this.IsMobileWidth = this.CheckIfThresholdCrossed()
            }
            return n.prototype.bindEvents = function() {
                t(window).on("resize", this.getEventHandler("windowResized"))
            }
            ,
            n.prototype.getEventHandler = function(n) {
                var i = this;
                if (n && this.EventHandlers[n] !== undefined)
                    return function() {
                        var r = Array.prototype.slice.call(arguments, 0);
                        r.unshift(t(this));
                        i.EventHandlers[n].apply(i.EventHandlers, r)
                    }
            }
            ,
            n.prototype.CheckIfThresholdCrossed = function() {
                for (var n, t = !1, i = 0; i < this.Thresholds.length; i++)
                    if (n = this.Thresholds[i],
                    t = n < this.LastWidth && window.innerWidth < n || n >= this.LastWidth && window.innerWidth > n,
                    t)
                        break;
                return t
            }
            ,
            n
        }();
        n.MobileAdvertising = i,
        function(n) {
            var t = function() {
                function n(n) {
                    this.MobileAdvertising = n
                }
                return n.prototype.windowResized = function() {
                    this.MobileAdvertising.ResizeTimeout && clearTimeout(this.MobileAdvertising.ResizeTimeout);
                    this.MobileAdvertising.ResizeTimeout = setTimeout(this.MobileAdvertising.getEventHandler("windowResizeTimeoutFired"), this.MobileAdvertising.ResizeTimeoutDuration)
                }
                ,
                n.prototype.windowResizeTimeoutFired = function() {
                    this.MobileAdvertising.CheckIfThresholdCrossed() && window.cdmRemoveAds && window.cdmRemoveAds();
                    this.MobileAdvertising.LastWidth = window.innerWidth
                }
                ,
                n
            }();
            n.EventHandlers = t
        }(i = n.MobileAdvertising || (n.MobileAdvertising = {}))
    }
    )(Cobalt || (window.Cobalt = {}));
    $(function() {
        $("body").hasClass("responsive-enabled") && new Cobalt.MobileAdvertising
    })
}
, function() {
    "use strict";
    (function(n, t) {
        t.ModPositions = {
            dependentScripts: function() {
                return [{
                    dependency: t.Forms,
                    name: "Cobalt.Forms"
                }]
            },
            initialize: function() {
                t.ModPositions.attachRemove();
                t.ModPositions.attachAddForm()
            },
            attachDialogClose: function() {
                n("#cp-modposition-question-choice").closest(".ui-dialog").bind("dialogclose", function() {
                    window.location.reload()
                })
            },
            attachDialogCloseNoReload: function() {
                n("#cp-modposition-question-choice").closest(".ui-dialog").bind("dialogclose", function() {
                    n(".ac_results").remove()
                })
            },
            attachRemove: function() {
                n("body").delegate("#cp-modposition-question-choice-delete", "deleteConfirmPost", function() {
                    var i = n(this)
                      , r = i.closest(".modposition-question-choice");
                    i.closest(".modposition-question-choice").remove();
                    r.closest(".ui-dialog").center();
                    t.ModPositions.attachDialogClose();
                    t.triggerHtmlInsert(r.parent())
                })
            },
            attachAddForm: function() {
                n("body").delegate("#cp-modposition-question-choice form.quick-add", "submit", function() {
                    return !1
                });
                t.runOnHtmlInsert(function() {
                    var i = n("#cp-modposition-question-choice").find("form.quick-add");
                    i.length < 1 || (i.ajaxForm({
                        beforeSubmit: function() {
                            var n = i.valid();
                            if (!n)
                                return !1
                        },
                        clearForm: !0,
                        resetForm: !0,
                        success: function(i) {
                            var u = !isNaN(+i), r;
                            u || (t.ModPositions.attachDialogClose(),
                            r = n("#cp-modposition-question-choice").find(".listing"),
                            r.append(i),
                            r.find(".no-results").remove(),
                            r.closest(".ui-dialog").center(),
                            t.triggerHtmlInsert(r.parent()))
                        }
                    }),
                    t.ModPositions.attachDialogClose())
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Modal = {
            initialize: function() {},
            openModal: function(i, r, u, f, e, o, s, h, c, l, a) {
                var v = n("<div>")
                  , y = !1;
                v.dialog({
                    draggable: !1,
                    title: r,
                    autoOpen: !1,
                    width: u > 0 ? u : "auto",
                    height: f > 0 ? f : "auto",
                    modal: !0,
                    resizable: !1,
                    closeText: "×",
                    dialogClass: e,
                    close: function() {
                        t.TinyMCE.removeEditor(v);
                        v.dialog("destroy");
                        v.remove();
                        y = !1;
                        o && n("body").css({
                            overflow: "inherit"
                        })
                    },
                    open: function() {
                        function f(i) {
                            var r = n(window).scrollTop()
                              , u = i.offset().top
                              , f = u - r
                              , e = i.height();
                            return f + e + t
                        }
                        y = !0;
                        var i = v.parent()
                          , r = i.height() - v.height()
                          , t = 50
                          , u = n(window).height() - r - t;
                        (v.css({
                            "max-height": u
                        }),
                        o && n("body").css({
                            overflow: "hidden"
                        }),
                        n(window).resize(function() {
                            if (y) {
                                var i = n(window).height() - r - t;
                                v.css({
                                    "max-height": i
                                })
                            }
                        }),
                        s) || v.mutate("height", function() {
                            var t = f(i);
                            t > n(window).height() && n(window).trigger("resize")
                        })
                    }
                });
                v.dialog("open");
                v.append('<div class="loadmask"><\/div>');
                n.get(i, function(i) {
                    if (!i.length) {
                        v.find("div.loadmask").remove();
                        v.remove();
                        return
                    }
                    var r = n(i);
                    v.append(r);
                    v.find("div.loadmask").remove();
                    t.triggerHtmlInsert(v);
                    v.parent().center({
                        sizeToWindow: s,
                        minWidth: h,
                        maxWidth: c,
                        maxHeight: l,
                        autoHeight: a
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.ModelMultiSymbolField = function(i) {
            var r = this, u;
            this.field = i;
            this.delimiter = this.field.attr("data-delimiter");
            this.symbolsID = r.field.attr("id");
            this.previousSymbol = n("#" + this.symbolsID + "-previous");
            this.symbol = n("#" + this.symbolsID + "-symbol");
            this.newField = n("<input>").attr("type", "text").attr("name", "newmmsfield").attr("data-symbol-id", this.field.attr("id")).attr("data-each-validation-length-message", this.field.attr("data-each-validation-length-message")).attr("data-each-validation-length", this.field.attr("data-each-validation-length"));
            this.autoCompleteMenu = null;
            this.hasAutoComplete = !1;
            this.addCurrentModels = function() {
                var t = r.field.val()
                  , i = r.symbol.val()
                  , u = t.split(r.delimiter)
                  , f = i.split(r.delimiter);
                n(u).each(function(n, t) {
                    t != "" && r.addFieldValue(t, f[n].trim())
                })
            }
            ;
            this.appendFieldValue = function(t, i) {
                var f, u;
                if (r.newField.val(""),
                r.autoCompleteMenu != null && (n(".modal.tag-autocomplete").hide(),
                r.hasAutoComplete = !1),
                t != "") {
                    if (this.symbol.val().length > 0) {
                        for (f = this.field.val().split(this.delimiter),
                        u = 0; u < f.length; u++)
                            if (f[u] == i)
                                return;
                        this.symbol.val(this.symbol.val() + this.delimiter + i);
                        this.previousSymbol.val(this.previousSymbol.val() + this.delimiter + t)
                    } else
                        this.symbol.val(i),
                        this.previousSymbol.val(t);
                    this.field.val(this.symbol.val());
                    this.addFieldValue(t, i)
                }
            }
            ;
            this.addFieldValue = function(t, i) {
                var u = r.newField.parent().find(".tags-cloud"), e;
                u.length <= 0 && (u = n("<ul>").addClass("flat-list").addClass("tags-cloud"),
                e = n("<div>").addClass("tag-cloud").append(u),
                n(r.newField).parent().append(e));
                var o = n("<a>").attr("href", "#").addClass("tag-remove").text("remove")
                  , s = n("<span>").addClass("tag-text").attr("data-id", i).html(t)
                  , f = n("<li>").addClass("tag");
                f.append(o).append(s);
                o.click(function(t) {
                    for (var o = r.symbol.val(), u = o.split(r.delimiter), e = [], s = n(this).siblings(".tag-text").attr("data-id"), i = 0; i < u.length; i++)
                        u[i].trim() != s && e.push(u[i].trim());
                    r.symbol.val(e.join(r.delimiter));
                    r.field.val(e.join(r.delimiter));
                    r.field.val() == "" ? f.parent().remove() : f.remove();
                    t.preventDefault()
                });
                u.append(f)
            }
            ;
            u = this.field.parents("form");
            this.field.parent().append(this.newField);
            this.field.removeAttr("data-validation-optional").removeAttr("data-each-validation-length").removeAttr("maxlength");
            u.length > 0 && u.submit(function() {
                var n = r.newField.val();
                r.newField.valid() && r.appendFieldValue(n)
            });
            this.newField.keydown(function(i) {
                var f, e;
                i.which == 13 && (r.hasAutoComplete || (f = n(this).val(),
                n(this).valid() ? (n(this).val(""),
                r.appendFieldValue(f)) : f == "" && (e = {
                    Errors: {}
                },
                e.Errors[n(this).attr("id")] = [L.Global.ErrorMessages.TagEmpty()],
                t.Forms.displayErrors(u, e.Errors))),
                i.preventDefault())
            });
            this.addCurrentModels();
            this.field.hide();
            this.autoCompleteMenu = this.newField.autocomplete(this.field.attr("data-autocomplete-url"), {
                minChars: 3,
                scroll: !1,
                dataType: "json",
                selectFirst: !1,
                parse: function(n) {
                    var i = [], t;
                    if (n)
                        for (t = 0; t < n.length; t++)
                            i[t] = {
                                data: n[t],
                                value: n[t].Value,
                                result: n[t].Key
                            };
                    return i
                },
                highlight: function(n, t) {
                    return r.hasAutoComplete = !0,
                    n.replace(t, "<strong>" + t + "<\/strong>")
                },
                formatItem: function(t) {
                    var i = n("<div>").html(t.Display || t.Key);
                    return i.html()
                },
                resultsClass: "modal tag-autocomplete ac_results"
            }).result(function(n, t) {
                r.appendFieldValue(t.Display || t.Key, t.Value)
            }).hideResults(function() {
                r.hasAutoComplete = !1
            })
        }
        ;
        t.ModelMultipleSymbolicField = {
            initialize: function() {
                t.runOnHtmlInsert(function() {
                    var i = n(".j-model-multiple-symbolic-field");
                    i.each(function() {
                        var i = n(this);
                        i.data("CobaltModelMultiSymbolFieldInit") == null && (i.data("CobaltTagInitCobaltModelMultiSymbolFieldInit", !0),
                        n.extend(i, new t.ModelMultiSymbolField(i)))
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.MultiFileUpload = {
            deleteAttachmentRoute: null,
            fileUploadObjects: null,
            initialize: function() {
                t.Comment.onCommentCreated(function(i) {
                    setTimeout(function() {
                        t.MultiFileUpload.addAttachmentPadding(i)
                    }, 1200);
                    var r = t.MultiFileUpload.fileUploadObjects["j-attachments-0"];
                    r && (r.CurrentFileCount = 0,
                    r.toggleMaxAttachmentsMessage(!1),
                    r.AttachButton.is(":disabled") && (r.AttachButton.removeAttr("disabled"),
                    r.AttachToElement.removeClass("disabled"),
                    n(r.Form).find(":input").each(function() {
                        n(this).removeAttr("disabled")
                    })))
                });
                t.runOnHtmlInsert(function(i) {
                    var r = i.find("input.j-multi-file-upload");
                    r.each(function() {
                        if (!n(this).data("Cobalt.MultiFileUpload")) {
                            var r = n(this).attr("data-attach-to-element-id")
                              , u = n(this).attr("data-button-element-id")
                              , i = new t.FileUpload(n(this),r,u);
                            t.MultiFileUpload.fileUploadObjects = {};
                            t.MultiFileUpload.fileUploadObjects[r] = i;
                            n(this).data("Cobalt.MultiFileUpload", "1");
                            i.ButtonElement.on("mouseenter", function(t) {
                                t.stopImmediatePropagation();
                                var i = n(this).parent();
                                i.after("<div class='minimal-drop-box'><span class='minimal-drop-text'>Drop image to upload.<\/span><\/div>").fadeIn();
                                n(this).parent(".form-tools").css("float", "none")
                            });
                            i.ButtonElement.on("mouseleave", function() {
                                t.MultiFileUpload.uploadButtonMouseLeaveFunc();
                                n(this).parent(".form-tools").css("float", "left")
                            })
                        }
                    })
                });
                n("body").on("mouseenter", ".j-attachment-image-item", function() {
                    n(this).find(".j-attachment-image-name-container").fadeIn()
                });
                n("body").on("mouseleave", ".j-attachment-image-item", function() {
                    n(this).find(".j-attachment-image-name-container").fadeOut()
                })
            },
            addAttachmentPadding: function(t) {
                var i;
                i = t && t.length ? t.find(".attachment-image-container") : n(".attachment-image-container");
                i.each(function() {
                    var t = n(this).find("img");
                    t.length && t.is(":visible") && t.width() < 100 && t.height() < 115 && (t.css("padding-left", "20px"),
                    t.css("padding-right", "20px"))
                })
            },
            uploadButtonMouseLeaveFunc: function() {
                n(".minimal-drop-box").remove();
                n(this).parent(".form-tools").css("float", "left")
            }
        }
    }
    )(jQuery, Cobalt);
    Cobalt.FileUpload = function(n, t, i) {
        var r, u, f, e;
        if (this.AttachToElement = t != null ? $(".attachments[id='" + t + "']") : null,
        this.FileInput = n,
        this.Form = $(n).parents("form").first().bind("fileAttached", this.fileAttached).bind("fileRemoved", this.fileRemoved),
        this.NewFileUpload = "",
        this.AttachToElement != null)
            for (r = this.AttachToElement.find("li[data-id]"),
            this.CurrentFileCount = r.length,
            u = 0; u < r.length; u++)
                this.bindFileEvents(r[u]);
        else
            this.CurrentFileCount = 0;
        this.AttachToElement != null && this.CurrentFileCount > 0 && this.AttachToElement.show();
        f = parseInt(n.attr("data-max-files"));
        this.MaxFiles = f != null ? f : 1;
        e = n.attr("data-fieldset-label");
        this.FieldSetLabel = e ? e : "";
        this.AttachButton = this.Form.find(":submit");
        this.AttachButton && this.AttachButton.attr("value", n.attr("data-button-value"));
        this.CurrentFileCount >= this.MaxFiles && (this.AttachButton.attr("disabled", !0),
        this.AttachToElement.addClass("disabled"),
        this.toggleMaxAttachmentsMessage(!0),
        $.info(this.Form),
        this.Form.find(".j-multi-file-upload").each(function() {
            $(this).attr("disabled", !0)
        }));
        this.ButtonElement = $(i);
        this.rebindAttachButton()
    }
    ;
    Cobalt.FileUpload.prototype = {
        toggleMaxAttachmentsMessage: function(n) {
            var t = this.AttachToElement.next(".j-max-attachments-message");
            n ? (t.length < 1 && this.AttachToElement.after($("<div>").addClass("field-errors").addClass("j-max-attachments-message").html("You have uploaded the maximum number of attachments (" + this.MaxFiles + ").")),
            this.AttachToElement.next(".j-max-attachments-message").show()) : t.length > 0 && t.hide()
        },
        fileAttached: function(n, t) {
            t.CurrentFileCount++;
            var i = $("div.attachment-errors#" + $(t.FileInput).attr("name"));
            i.remove();
            t.CurrentFileCount >= t.MaxFiles ? (t.AttachButton.attr("disabled", !0),
            t.AttachToElement.addClass("disabled"),
            t.toggleMaxAttachmentsMessage(!0),
            $(t.Form).find(":input").each(function() {
                $(this).attr("disabled", !0)
            })) : t.rebindAttachButton();
            $(t.Form).resetForm()
        },
        fileRemoved: function(n, t) {
            t.AttachButton.is(":disabled") && (t.AttachButton.removeAttr("disabled"),
            t.AttachToElement.removeClass("disabled"),
            t.toggleMaxAttachmentsMessage(!1),
            $(t.Form).find(":input").each(function() {
                $(this).removeAttr("disabled")
            }));
            t.CurrentFileCount--;
            t.CurrentFileCount == 0 && t.AttachToElement.hide();
            t.rebindAttachButton()
        },
        isUploading: !1,
        monitorForm: function(n, t) {
            if (this.isUploading != !0) {
                var i = t.Form;
                if (i.valid()) {
                    if (this.AttachToElement.find(".j-error-message").hide(),
                    t.AttachButton.removeAttr("disabled"),
                    t.AttachToElement.removeClass("disabled"),
                    t.toggleMaxAttachmentsMessage(!1),
                    n.type == "file")
                        try {
                            this.isUploading = !0;
                            i.submit()
                        } catch (r) {
                            try {
                                t.AttachButton.click()
                            } catch (u) {}
                        }
                } else
                    t.AttachButton.attr("disabled", !0),
                    t.AttachToElement.addClass("disabled"),
                    t.toggleMaxAttachmentsMessage(!0)
            }
        },
        rebindAttachButton: function() {
            var e = this.Form, n = this, s, i, t, r, c;
            if (this.AttachButton.attr("disabled", !0),
            s = e.find(":input"),
            s.each(function() {
                $(this).keypress(function() {
                    n.monitorForm(this, n)
                });
                $(this).change(function() {
                    n.monitorForm(this, n)
                })
            }),
            i = this,
            $(this.Form).unbind("submit"),
            $(this.Form).ajaxForm({
                type: "post",
                beforeSubmit: function() {
                    var t = e.valid();
                    return t && (n.AttachToElement.show(),
                    n.AttachToElement.mask()),
                    t
                },
                success: function(t) {
                    var r, u, f;
                    n.AttachToElement.unmask();
                    r = null;
                    try {
                        r = JSON.parse(t)
                    } catch (e) {}
                    if (t.indexOf("HttpRequestTooLargeException") > -1)
                        i.displayError(L.Global.Files.FileTooLarge("5 MB")),
                        $(n.Form).resetForm();
                    else if (r != null && r.Errors != undefined) {
                        u = [];
                        for (f in r.Errors)
                            u.push(r.Errors[f]);
                        n.displayError("An error has occurred while trying to save the file you uploaded: " + u.join(", "));
                        $(n.Form).resetForm();
                        n.rebindAttachButton()
                    } else
                        i.attachFile(t);
                    i.isUploading = !1
                },
                error: function() {
                    n.AttachToElement.unmask();
                    n.displayError("An unknown error has occurred.");
                    $(n.Form).resetForm();
                    i.isUploading = !1
                }
            }),
            this.ButtonElement.unbind("click"),
            this.ButtonElement.click(function() {
                $.browser.msie ? i.Form.parent().css("left", "auto").css("position", "relative") : i.FileInput.trigger("click");
                Cobalt.MultiFileUpload.uploadButtonMouseLeaveFunc()
            }),
            typeof FileReader != "undefined" && FileReader != null) {
                $(document).bind("drop dragover", function(n) {
                    n.preventDefault()
                });
                var u = e.find(".j-dd")
                  , l = u.attr("id")
                  , a = u.attr("name")
                  , o = $('<input type="file" class="j-dd">')
                  , f = !1
                  , h = -1;
                o.attr("id", l).attr("name", a);
                u.after(o);
                u.remove();
                t = this.AttachToElement;
                t.is(":not(visible)") && (r = "attachment-drag-drop-hover",
                c = "<div class='attachment-drag-drop-container'><span class='drop-text'>Drop image to upload.<\/span><\/div>",
                $(document).bind("dragenter", function() {
                    t.is(":not(visible)") && i.CurrentFileCount < i.MaxFiles && (t.show(),
                    t.addClass(r));
                    t.find(".attachment-drag-drop-container").length === 0 && i.CurrentFileCount < i.MaxFiles && t.append($(c));
                    f = !0
                }),
                $(document).bind("dragover", function() {
                    f = !0
                }),
                $("html").bind("dragleave", function() {
                    f = !1;
                    clearTimeout(h);
                    h = setTimeout(function() {
                        f || (t.hasClass(r) && i.CurrentFileCount <= 0 && t.hide(),
                        t.removeClass(r),
                        t.find(".attachment-drag-drop-container").remove())
                    }, 200)
                }),
                $(document).bind("drop", function(n) {
                    if (i.CurrentFileCount == i.MaxFiles) {
                        n.preventDefault();
                        return
                    }
                    t.hasClass(r) && i.CurrentFileCount <= 0 && !t.is(":hover") && t.hide();
                    t.removeClass(r);
                    t.find(".attachment-drag-drop-container").remove()
                }));
                o.fileupload({
                    dropZone: t,
                    autoUpload: !0,
                    dataType: "html",
                    add: function(n, t) {
                        $("body").append('<div class="loadmask"><\/div>');
                        t.submit()
                    },
                    send: function() {},
                    done: function(t, i) {
                        try {
                            if (i.result.indexOf("HttpRequestTooLargeException") > -1) {
                                n.displayError(L.Global.Files.FileTooLarge("5 MB"));
                                return
                            }
                            n.clearErrors();
                            var r = JSON.parse(i.result);
                            if (r !== undefined && r.Errors !== undefined) {
                                n.displayError(r.Errors["field-attachments"][0]);
                                return
                            }
                            n.clearErrors()
                        } catch (u) {}
                        n.attachFile(i.result, !0);
                        $("body").find(".loadmask").remove()
                    },
                    fail: function() {
                        try {
                            $("body").find(".loadmask").remove()
                        } catch (e) {}
                    }
                })
            }
        },
        removeFile: function(n) {
            if (confirm("Are you sure you want to remove this attachment?")) {
                var t = this;
                Cobalt.Utils.getRequestVerificationToken().done(function(i) {
                    $.post(Cobalt.MultiFileUpload.deleteAttachmentRoute($(n).attr("data-model-type-id"), $(n).attr("data-id")), {
                        "request-verification-token": i
                    }, function(i) {
                        i == "1" ? ($(n).remove(),
                        $(t.Form).trigger("fileRemoved", [t])) : i.Error
                    })
                })
            }
        },
        attachFile: function(n, t) {
            var i = this;
            ($(i.FileInput).val() != "" || t) && (this.MaxFiles == -1 || this.MaxFiles > 0 && this.CurrentFileCount < this.MaxFiles) && (i.NewFileUpload = $('<input type="file" class="multi-file-upload">'),
            i.NewFileUpload.attr("name", $(i.FileInput).attr("name")),
            this.displayFileInfo(n),
            $(i.FileInput).after(i.NewFileUpload),
            $(i.FileInput).remove(),
            i.FileInput = i.NewFileUpload,
            $(i.Form).trigger("fileAttached", [i]))
        },
        displayError: function(n) {
            var t = this.AttachToElement.find(".j-error-message");
            t.length != 0 && (t.empty(),
            t.append(n),
            t.show(),
            this.rebindAttachButton())
        },
        clearErrors: function() {
            var n = this.AttachToElement.find(".j-error-message");
            n.length !== 0 && (n.empty(),
            this.rebindAttachButton())
        },
        displayFileInfo: function(n) {
            var i = this, r = $(n), u = i.AttachToElement.find("ul"), f, t;
            u.length === 0 && (u = i.AttachToElement.append("<ul/>"));
            f = $("<div>");
            t = r.find(".j-remove-attachment");
            t.length == 0 && (t = $("<button/>"),
            t.addClass("j-remove-attachment"),
            t.val(L.Global.Buttons.Delete()),
            r.append(t));
            u.append(r);
            $(i.AttachToElement).hasClass("no-results") && $(i.AttachToElement).removeClass("no-results");
            this.bindFileEvents(r);
            Cobalt.triggerHtmlInsert(u);
            i.AttachToElement.show()
        },
        bindFileEvents: function(n) {
            var t = $(n).find(".j-remove-attachment")
              , i = this;
            t.click(function(t) {
                t.preventDefault();
                i.removeFile(n)
            })
        }
    }
}
, function() {
    "use strict";
    (function(n) {
        var i = jQuery
          , t = function() {
            function n() {}
            return n.compute = function(t) {
                for (var u = new Uint8Array(t), e = u.length, i = n.seed ^ e, f = 0, r = 0; e >= 4; )
                    r = u[f] & 255 | (u[++f] & 255) << 8 | (u[++f] & 255) << 16 | (u[++f] & 255) << 24,
                    r = (r & 65535) * 1540483477 + (((r >>> 16) * 1540483477 & 65535) << 16),
                    r ^= r >>> 24,
                    r = (r & 65535) * 1540483477 + (((r >>> 16) * 1540483477 & 65535) << 16),
                    i = (i & 65535) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16) ^ r,
                    e -= 4,
                    ++f;
                switch (e) {
                case 3:
                    i ^= (u[f + 2] & 255) << 16;
                case 2:
                    i ^= (u[f + 1] & 255) << 8;
                case 1:
                    i ^= u[f] & 255;
                    i = (i & 65535) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16)
                }
                return i ^= i >>> 13,
                i = (i & 65535) * 1540483477 + (((i >>> 16) * 1540483477 & 65535) << 16),
                i ^= i >>> 15,
                i >>> 0
            }
            ,
            n.seed = 1,
            n
        }();
        n.MurmurHash2 = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t) {
        t.Navigation = {
            initialize: function() {},
            enableDropDownMenus: function() {
                n(t.Navigation.navigationSelector + " .section ul").css("visibility", "hidden");
                n(t.Navigation.navigationSelector + " .section").hover(function() {
                    n(this).addClass("hover");
                    n("ul:first", this).css("visibility", "visible")
                }, function() {
                    n(this).removeClass("hover");
                    n("ul:first", this).css("visibility", "hidden")
                });
                n("ul#nav li ul li:has(ul)").find("a:first").append(" &raquo; ")
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.NavigationEditor = function(r, u) {
            this.navList = n(r);
            this.errorCssClass = "vld-error";
            this.nextRow = 1;
            this.linkRegex = new RegExp("^((https?://([-w]+)(.w+)+(:d+)?)|/)");
            this.roleList = u;
            this.linkSelectorID;
            this.addInputLine = function(r, u, f, e, o, s, h, c, l, a, v) {
                var w = this, vt = n("<li>").attr("id", this.nextRow), bt = vt.append(n("<table>")), y = bt.append("<tr>"), nt, yt, tt, b, ft, et, ot, pt, st, g, k, rt, ut, ht;
                y.append(n('<td class="col-drag"><a href="#" class="icon icon-drag-handle">Drag<\/a><\/td>'));
                nt = n("<input type='text' size='32'>").attr("id", "name" + this.nextRow).attr("name", "name" + this.nextRow).val(r);
                y.append(n("<td class='col-label'>").append(nt));
                c && y.addClass("sub-nav");
                yt = n("<input type='text' size='48'>").attr("id", "css" + this.nextRow).attr("name", "css" + this.nextRow).val(u);
                y.append(n('<td class="col-css">').append(yt));
                tt = n("<input type='text' size='48'>").attr("id", "link" + this.nextRow).attr("name", "link" + this.nextRow).val(f);
                (o || s || v) && tt.attr("disabled", "true");
                b = n("<td class='col-link'>").append(tt);
                b.append(n("<input>").attr("type", "hidden").attr("id", "nav" + this.nextRow).attr("name", "nav" + this.nextRow));
                o ? (ft = "linkID" + this.nextRow,
                nt.attr("disabled", "true"),
                b.append(n("<input>").addClass("linkID").attr("type", "hidden").attr("id", ft).attr("name", ft).val(o))) : s ? (et = "pageID" + this.nextRow,
                b.append(n("<input>").addClass("pageID").attr("type", "hidden").attr("id", et).attr("name", et).val(s))) : v && (ot = "filterID" + this.nextRow,
                nt.attr("disabled", "true"),
                tt.attr("disabled", "true"),
                b.append(n("<input>").addClass("filterID").attr("type", "hidden").attr("id", ot).attr("name", ot).val(v)));
                y.append(b);
                pt = n("<input type='text' size='24'>").attr("id", "child-partial-view" + this.nextRow).attr("name", "child-partial-view" + this.nextRow).val(a);
                y.append(n('<td class="col-child-partial-view">').append(pt));
                st = n("<input>").attr("type", "checkbox").attr("id", "new" + this.nextRow).attr("name", "new" + this.nextRow);
                l == "True" && st.attr("checked", "checked");
                y.append(n("<td class='col-new'>").append(st));
                var p = n("<div>").attr("class", "role-selector").attr("id", "roleID" + this.nextRow)
                  , wt = !1
                  , d = n("<select>").attr("class", "visibility-selector")
                  , it = n("<option>");
                if (it.val("Public"),
                it.text("Public"),
                g = n("<option>"),
                g.val("Rank Protected"),
                g.text("Rank Protected"),
                e != null && e.length > 0 ? g.attr("selected", "selected") : it.attr("selected", "selected"),
                d.append(it),
                d.append(g),
                this.roleList)
                    for (k = 0; k < this.roleList.length; k++)
                        rt = n("<div>").attr("class", "role-container"),
                        ut = n("<input>").attr("type", "checkbox").attr("id", "roleID" + this.nextRow).attr("name", "roleID" + this.nextRow),
                        ut.val(this.roleList[k].ID),
                        e != null && n.inArray(this.roleList[k].ID, e) > -1 && (ut.attr("checked", "checked"),
                        wt = !0),
                        rt.append(ut),
                        ht = n("<label>").attr("for", "roleID" + this.nextRow),
                        ht.append(this.roleList[k].Name),
                        rt.append(ht),
                        p.append(rt);
                if (d.change(function() {
                    var r = d.val(), t, i;
                    if (r == "Public")
                        for (p.attr("style", "display:none;"),
                        t = n(p).find(":input"),
                        i = 0; i < t.length; i++)
                            t.attr("checked", !1);
                    else
                        p.attr("style", "")
                }),
                wt || p.attr("style", "display:none;"),
                y.append(n("<td class='col-role'>").append(d).append(p)),
                c && this.appendHiddenParentIDField(y, c, this.nextRow),
                h == "true")
                    y.append(n("<td class='col-actions'>")),
                    p.disable();
                else {
                    var ct = t.Localization.Main.Global.ControlPanel.RemoveLinkTooltip()
                      , f = n("<a>").addClass("icon").addClass("delete").addClass("tip").attr("title", ct)
                      , lt = n("<td>").addClass("col-actions");
                    lt.append(f);
                    c || (ct = t.Localization.Main.Global.ControlPanel.AddSubNavigationLink(),
                    f = n("<a>").addClass("icon").addClass("add").addClass("tip").attr("title", ct),
                    lt.append(" ").append(f));
                    y.append(lt);
                    c == i && y.find(".add").click(function() {
                        if (w.linkSelectorID) {
                            var t = n(this).parent().parent().attr("id");
                            t && w.addInputLine("", "", "", "", "", "", "", t, !1)
                        }
                    });
                    y.find(".delete").click(function() {
                        var i, r, u, t, f;
                        w.linkSelectorID && (i = n(this).parent().parent().find(".linkID").val(),
                        i && n("#" + w.linkSelectorID + " option[data-modulelinkid=" + i + "]").enable(),
                        r = n(this).parent().parent().find(".pageID").val(),
                        r && n("#" + w.linkSelectorID + " option[data-pageid=" + r + "]").enable(),
                        u = n(this).parent().parent().find(".filterID").val(),
                        u && n("#" + w.linkSelectorID + " option[data-filter-id=" + u + "]").enable());
                        t = n(this).parent().parent();
                        f = t.siblings("tr.sub-nav").find(":hidden[value='" + t.attr("id") + "']").parents("tr.sub-nav");
                        f.remove();
                        t.remove()
                    })
                }
                if (c) {
                    var kt = this.navList.find
                      , dt = this.navList.find("ul[data-parent-id='" + c + "']")
                      , at = n(tableId).find(':hidden[value="' + c + '"]').last().parents("tr#" + c);
                    at.length <= 0 && (at = n(tableId).find("tr[id='" + c + "']"));
                    at.after(y)
                } else
                    this.navList.append(vt);
                this.nextRow++;
                t.triggerHtmlInsert(y)
            }
            ;
            this.appendHiddenParentIDField = function(t, i, r) {
                var u = n("<input>").attr("type", "hidden").attr("value", i).attr("name", "sub-nav" + r).addClass("sub-nav-parent-field");
                t.find(":hidden.sub-nav-parent-field").remove();
                t.append(u);
                n("#" + i).addClass("has-sub-nav")
            }
            ;
            this.initialize = function() {
                n(r).nestedSortable({
                    disableNesting: "no-nest",
                    forcePlaceholderSize: !0,
                    handle: "div.drag-handle .icon-drag-handle",
                    items: ">tbody>tr",
                    opacity: .6,
                    placeholder: "placeholder",
                    tabSize: 25,
                    tolerance: "pointer",
                    stop: function(t, i) {
                        var r = n(i.item);
                        r.length > 0
                    }
                })
            }
            ;
            this.enableDragging = function(t) {
                var i = this;
                t == null && (t = !0);
                t && (n(tableId).tableDnD({
                    onDragClass: "dragHandle",
                    onDrop: function(t, i) {
                        var u, r;
                        if (i = n(i),
                        t = n(t),
                        u = [],
                        t.find("tbody").children().each(function(t, i) {
                            u.push(n(i))
                        }),
                        i.hasClass("sub-nav")) {
                            var f = n("tr#" + i.find(":hidden.sub-nav-parent-field").val())
                              , e = -1
                              , o = -1;
                            for (r = 0; r < u.length; r++) {
                                if (n(u[r]).attr("id") == i.attr("id")) {
                                    e = r;
                                    continue
                                }
                                if (n(u[r]).attr("id") == f.attr("id")) {
                                    o = r;
                                    continue
                                }
                            }
                            e < o && f.after(i)
                        }
                    },
                    onDragStart: function(t, i) {
                        if (i = n(i),
                        t = n(t),
                        i.hasClass("sub-nav")) {
                            var r = i.find(":hidden.sub-nav-parent-field").val()
                              , u = t.find("tr#" + r);
                            t.find("tbody").children().addClass("nodrop");
                            t.find(':hidden.sub-nav-parent-field[value="' + r + '"]').each(function(t, i) {
                                n(i).parent().removeClass("nodrop")
                            })
                        } else
                            t.find("tr :hidden.sub-nav-parent-field").parent().addClass("nodrop"),
                            n("tr :hidden.sub-nav-parent-field").each(function(t, i) {
                                n("tr#" + n(i).val()).addClass("nodrop")
                            })
                    },
                    onAllowDrop: function(t, i) {
                        var r = n(t), u;
                        if (r.hasClass("has-sub-nav")) {
                            if (n(i).hasClass("sub-nav"))
                                return !1;
                            u = r.attr("id");
                            n(":hidden.sub-nav-parent-field[value='" + u + "']").each(function(t, i) {
                                var u = n(i).parent();
                                r.after(u)
                            })
                        }
                        return !0
                    }
                }),
                n(tableId + " tbody tr").hover(function() {
                    n(this.cells[0]).addClass("showDragHandle")
                }, function() {
                    n(this.cells[0]).removeClass("showDragHandle")
                }))
            }
            ;
            this.bindBuiltInLinkSelector = function(t) {
                var i = this;
                i.linkSelectorID = t;
                n("#" + t).change(function() {
                    if (this.options[this.selectedIndex].value != "null") {
                        var n = this.options[this.selectedIndex].value
                          , t = this.options[this.selectedIndex].getAttribute("data-modulelinkid")
                          , r = this.options[this.selectedIndex].getAttribute("data-pageid")
                          , u = this.options[this.selectedIndex].getAttribute("data-nonremovable")
                          , f = this.options[this.selectedIndex].getAttribute("data-filter-id");
                        i.addInputLine(this.options[this.selectedIndex].text, "", n == "" ? "/" : n, null, t, r, u, "", !1, null, f);
                        this.options[this.selectedIndex].disabled = "disabled"
                    }
                    this.selectedIndex = 0
                })
            }
            ;
            this.bindAddLineButton = function(t) {
                var i = this;
                n("#" + t).click(function(n) {
                    i.addInputLine("", "", "");
                    n.preventDefault()
                })
            }
            ;
            this.bindAddSeparatorButton = function(t) {
                var i = this;
                n("#" + t).click(function() {
                    i.addInputLine("--", "", "-------------------------")
                })
            }
            ;
            this.bindSubmitButton = function(t) {
                var i = this;
                n("#" + t).click(function() {
                    var t = !0;
                    return n("td.link input").each(function() {
                        var r = n(this).val();
                        r == "" || i.linkRegex.test(r) ? n(this).removeClass(i.errorCssClass) : (n(this).addClass("vld-error"),
                        t = !1)
                    }),
                    n("td.label input").each(function() {
                        n(this).val() == "" ? (n(this).addClass(i.errorCssClass),
                        t = !1) : n(this).removeClass(i.errorCssClass)
                    }),
                    t
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    Cobalt.NavigationItem = function(n) {
        this.parent = n.parent;
        this.children = [];
        this.element = n.element;
        this.ordinal = this.element.find("div.drag-handle>input.j-ordinal").val();
        this.element.data("navigation-item", this)
    }
    ;
    Cobalt.NavigationItem.prototype = {
        ordinal: null,
        parent: null,
        element: null,
        setParentOrdinal: function(n) {
            this.element.find("input#field-" + this.ordinal + "-parent-ordinal").val(n)
        },
        setDisplayOrder: function(n) {
            $("input#field-" + this.ordinal + "-display-order").val(n)
        },
        remove: function() {
            this.parent && this.parent._removeItem(this);
            this.element.remove()
        },
        _removeItem: function(n) {
            this.children.splice(this.children.indexOf(n), 1)
        },
        addItem: function(n, t) {
            var i = new Cobalt.NavigationItem({
                parent: this,
                element: n
            });
            return this.children.push(i),
            t || this.element.append(n),
            i
        },
        pushItem: function(n) {
            this.children.push(n)
        },
        moveTo: function(n) {
            this.parent && this.parent._removeItem(this);
            n != null ? (n.pushItem(this),
            this.parent = n,
            this.setParentOrdinal(n.ordinal)) : this.setParentOrdinal(0);
            $.log("Moved!")
        }
    }
}
, function() {
    "use strict";
    (function(n) {
        var t = function() {
            function n() {}
            return n.EnableResponsiveness = function(n, t, i, r, u) {
                var f = this, e;
                if (this.selectedListItem = $(i + ".selected"),
                this.elementWithOverflow = $(n),
                this.unorderedList = $(t),
                this.listItems = $(i),
                this.enableDesktopSupport = u,
                this.scrollbarWidth = 20,
                e = this.elementWithOverflow.width(),
                this.handleScrollEvent(this.elementWithOverflow, this.scrollbarWidth, e),
                this.registerRightArrowHandler(this.elementWithOverflow, e),
                this.registerLeftArrowHandler(this.elementWithOverflow, e),
                $("body").hasClass("responsive-disabled")) {
                    this.setULWidth(this.unorderedList, this.listItems, this.scrollbarWidth, r);
                    this.handleArrows(this.elementWithOverflow, this.scrollbarWidth, e);
                    this.centerListItem(this.elementWithOverflow, this.listItems, this.selectedListItem);
                    return
                }
                window.onresize = function() {
                    f.setULWidth(f.unorderedList, f.listItems, f.scrollbarWidth, r);
                    f.handleArrows(f.elementWithOverflow, f.scrollbarWidth, f.elementWithOverflow.width());
                    f.centerListItem(f.elementWithOverflow, f.listItems, f.selectedListItem)
                }
                ;
                this.setULWidth(this.unorderedList, this.listItems, this.scrollbarWidth, r);
                this.handleArrows(this.elementWithOverflow, this.scrollbarWidth, e);
                this.centerListItem(this.elementWithOverflow, this.listItems, this.selectedListItem)
            }
            ,
            n.setULWidth = function(n, t, i, r) {
                if (window.innerWidth <= r || this.enableDesktopSupport) {
                    var u = 0;
                    t.each(function(n, t) {
                        u += $(t).outerWidth(!0)
                    });
                    n.width(u + i)
                } else
                    n.css("width", "")
            }
            ,
            n.centerListItem = function(n, t, i) {
                for (var f = n.outerWidth(!0) / 2, u = 0, r = 0; r < i.index(); r++)
                    u += $(t[r]).outerWidth(!0);
                n.scrollLeft(u - f + i.outerWidth(!0) / 2)
            }
            ,
            n.handleScrollEvent = function(n, t, i) {
                var r = this;
                n.scroll(function() {
                    r.handleArrows(n, t, i)
                })
            }
            ,
            n.handleArrows = function(n, t, i) {
                n.scrollLeft() > 30 ? $("#leftArrow").addClass("left-arrow") : $("#leftArrow").removeClass("left-arrow");
                var r = n.find("ul").width() - i - t;
                n.scrollLeft() < r ? $("#rightArrow").addClass("right-arrow") : $("#rightArrow").removeClass("right-arrow")
            }
            ,
            n.registerRightArrowHandler = function(n, t) {
                $("#rightArrow").click(function() {
                    var i = n.scrollLeft() + t;
                    n.scrollLeft(i)
                })
            }
            ,
            n.registerLeftArrowHandler = function(n, t) {
                var i = t;
                $("#leftArrow").click(function() {
                    var t = n.scrollLeft() - i;
                    n.scrollLeft(t)
                })
            }
            ,
            n
        }();
        n.NavigationLists = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t) {
        function f() {
            var t = 0;
            r.find("li.j-navigation-item").each(function() {
                var i = n(this).data("navigation-item");
                i.setDisplayOrder(++t)
            })
        }
        function h(n) {
            u = n;
            i.find("input.j-max-ordinal").val(n)
        }
        function e(i, r) {
            h(++u);
            var f = null;
            f = r == null ? new t.NavigationItem({
                parent: r,
                element: i
            }) : r.addItem(i, !0);
            i.find("ol > li").each(function() {
                e(n(this), f)
            })
        }
        function s(u, o) {
            i.mask();
            n.ajax({
                type: "POST",
                dataType: "json",
                url: u,
                success: function(u) {
                    var s, h;
                    (i.unmask(),
                    u.Success) && (s = n(u.html),
                    o != null && o.length > 0 ? (h = o.find(">ol"),
                    h.length == 0 && (h = n("<ol>"),
                    o.append(h)),
                    h.append(s)) : r.append(s),
                    t.triggerHtmlInsert(s),
                    e(s, null),
                    f())
                }
            })
        }
        function c() {
            n("#j-navigation-manager").on("change", "input.j-nav-visibility", function() {
                var i = n(this).parents("li.j-roles-management")
                  , t = i.find("div.j-required-roles");
                n(this).is(":checked") ? t.show() : t.hide()
            });
            n("li.j-roles-management").each(function() {
                n(this).find("input.j-nav-visibility").is("checked") && n(this).find("div.j-required-roles").show()
            });
            n("#j-navigation-manager").delegate("a.icon.delete", "click", function() {
                var t = n(this).parents(".j-navigation-item").data("navigation-item");
                t.remove()
            });
            n("#j-navigation-manager").delegate("a.j-show-advanced", "click", function() {
                n(this).parents("table").toggleClass("show-advanced");
                n(this).parents("table").hasClass("show-advanced") ? n(this).text("Hide Advanced") : n(this).text("Show Advanced")
            });
            n("#j-navigation-manager").delegate("select.j-add-special-nav", "change", function() {
                var t = n(this).find("option:selected"), i;
                if (t && (i = t.attr("data-nav-type"),
                i)) {
                    var r = t.attr("data-entity-type-id")
                      , f = t.attr("data-entity-id")
                      , e = "/cp/navigation/add-item?type=" + i + "&ordinal=" + u + "&parentOrdinal=0&entityTypeID=" + r + "&entityID=" + f;
                    s(e, null)
                }
            });
            n("#j-navigation-manager").delegate("a.j-add-nav", "click", function() {
                var t = n(this).parents(".j-navigation-item").first(), i = t.data("navigation-item"), r = i != null ? i.ordinal : 0, f;
                n.log(r);
                f = "/cp/navigation/add-item?type=1&ordinal=" + u + "&parentOrdinal=" + r;
                s(f, t)
            })
        }
        function l() {
            (i = n("div#j-navigation-manager"),
            i.data("navigation-manager-attached")) || (u = 0,
            i.data("navigation-manager-attached", !0),
            r = n("div#j-navigation-manager ol.j-navigation-list").first(),
            r.find("> li").each(function() {
                e(n(this), null)
            }),
            i.find(">form").ajaxForm({
                type: "post",
                cache: !1,
                beforeSubmit: function() {
                    i.mask()
                },
                success: function(t) {
                    setTimeout(function() {
                        i.unmask()
                    }, 500);
                    n.log(t)
                }
            }),
            r.nestedSortable({
                disableNesting: "no-nest",
                forcePlaceholderSize: !0,
                handle: "div.drag-handle > a.icon-drag-handle",
                items: "li.j-navigation-item",
                placeholder: "placeholder",
                tabSize: 25,
                opacity: .65,
                tolerance: "pointer",
                toleranceElement: "> div",
                stop: function(t, i) {
                    var r = n(i.item), e, o, u;
                    r.length != 0 && (n.log("Stop!"),
                    n.log(r),
                    e = r.data("navigation-item"),
                    e != null) && (o = r.parents("li.j-navigation-item"),
                    u = null,
                    o.length >= 1 && (u = o.data("navigation-item")),
                    e.moveTo(u),
                    f(),
                    n.log(u))
                }
            }),
            f(),
            c())
        }
        var i = null
          , r = null
          , u = 0
          , o = !1;
        t.NavigationManager = {
            initialize: function() {
                o || (o = !0,
                t.runOnHtmlInsert(function(n) {
                    l(n)
                }))
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        var i = !0
          , r = [];
        t.NewContent = {
            dependentScripts: function() {
                return [{
                    dependency: t.Listing,
                    name: "Cobalt.Listing"
                }]
            },
            initialize: function() {
                var u = n(".j-auto-refresh:checked"), r;
                u.length > 0 && (r = u.parents(".listing-container"),
                t.runOnHtmlInsert(function(n) {
                    r = n.find(".j-auto-refresh:checked").parents(".listing-container")
                }),
                n(window).focus(function() {
                    i = !0;
                    t.NewContent.setPageTitle()
                }).blur(function() {
                    i = !1
                }),
                setInterval(function() {
                    n.get(t.Routes.Instance.ForumGetAllForumSeenInfo(), function(i) {
                        i.Success && (t.Forum.ForumSeen = n.parseJSON(i.ForumSeen),
                        t.Forum.ForumThreadSeen = n.parseJSON(i.ForumThreadSeen),
                        t.Forum.ForumThreadCommented = n.parseJSON(i.ForumThreadCommented))
                    });
                    n.ajax({
                        url: document.location.href,
                        cache: !1,
                        headers: {
                            "x-cobalt-listing-url": t.Listing.CurrentListingUrl
                        },
                        error: function() {
                            r.unmask()
                        },
                        beforeSend: function() {
                            r.mask()
                        },
                        success: function(i) {
                            var e = n(i)
                              , u = r
                              , f = u.parent();
                            u.remove();
                            f.append(e);
                            t.triggerHtmlInsert(f)
                        }
                    })
                }, 15e3),
                t.runOnHtmlInsert(t.NewContent.setPageTitle));
                n("body").on("change", ".j-auto-refresh, .j-mod-view", function() {
                    n(this).parents("form").submit()
                });
                t.NewContent.setPageTitle()
            },
            setPageTitle: function() {
                var u = n(document).attr("title"), h = /\(([0-9]+)\+?\)/g, k = n(".j-mod-view:checked"), a = 15, c, e, b, l;
                if (k.length == 0) {
                    u = u.replace(h, "");
                    var v = n(".forum-thread-listing")
                      , o = v.attr("data-unread-thread-count")
                      , y = v.attr("data-max-unread-thread-count");
                    o && parseInt(o) > 0 && (u = parseInt(o) > parseInt(y) ? "(" + y + "+) " + u : "(" + o + ") " + u)
                } else {
                    var p = n(".p-comment-post")
                      , w = 0
                      , s = 0
                      , f = t.NewContent.getQueryStringValue("page");
                    for (f || (f = 1),
                    i || (c = h.exec(u),
                    c && (s = parseInt(c[1]))),
                    u = u.replace(h, ""),
                    e = 0; e < p.length; e++) {
                        if (b = n(p[e]),
                        l = parseInt(b.attr("data-comment-date")),
                        e == 0 && (w = l),
                        !r[f])
                            break;
                        if (l > r[f])
                            s++;
                        else
                            break
                    }
                    r[f] = w;
                    u = parseInt(s) >= parseInt(a) ? "(" + a + "+) " + u : "(" + s + ") " + u
                }
                n(document).attr("title", u)
            },
            getQueryStringValue: function(t) {
                var i = {};
                return n.each(document.location.search.substr(1).split("&"), function(n, t) {
                    var r = t.split("=");
                    i[r[0].toString()] = r[1].toString()
                }),
                i[t]
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        var e = ["SundayAbbr", "MondayAbbr", "TuesdayAbbr", "WednesdayAbbr", "ThursdayAbbr", "FridayAbbr", "SaturdayAbbr"]
          , o = function(n) {
            var r = e[n], i;
            if (r != null)
                return (i = t.Localization.Main,
                i && i.Global && i.Global.Dates && i.Global.Dates[r]) ? i.Global.Dates[r]() : r.substring(0, 3)
        }
          , s = ["JanuaryAbbr", "FebruaryAbbr", "MarchAbbr", "AprilAbbr", "MayAbbr", "JuneAbbr", "JulyAbbr", "AugustAbbr", "SeptemberAbbr", "OctoberAbbr", "NovemberAbbr", "DecemberAbbr"]
          , h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          , u = function(n) {
            var r = s[n]
              , i = t.Localization.Main;
            return i && i.Global && i.Global.Dates && i.Global.Dates[r] ? i.Global.Dates[r]() : r.substring(0, 3)
        }
          , c = function(n) {
            var r = h[n]
              , i = t.Localization.Main;
            return i && i.Global && i.Global.Dates && i.Global.Dates[r] ? i.Global.Dates[r]() : r
        }
          , f = function() {
            return typeof NiceDatesSettings != "undefined" ? NiceDatesSettings : [59, 1380, 8640]
        }
          , i = function(n, i) {
            var r = t.Localization.Main;
            return r && r.Global && r.Global.Dates && r.Global.Dates[n] ? function() {
                return r.Global.Dates[n].apply(null, arguments)
            }
            : i.indexOf("{0") != -1 ? function() {
                return i.format.apply(i, arguments)
            }
            : function() {
                return i
            }
        }
          , r = function(n, t) {
            for (n = n.toString(); n.length < t; )
                n = "0" + n;
            return n
        };
        t.NiceDates = {
            priority: 0,
            isRunningNiceDates: !1,
            isRunningNicePreciceDates: !1,
            initialize: function() {
                var i = f();
                t.NiceDates.runNiceDates(n(document), i);
                t.NiceDates.runNicePreciseDates(n(document), i);
                t.runOnHtmlInsert(t.NiceDates.runNiceDates);
                t.runOnHtmlInsert(t.NiceDates.runNicePreciseDates)
            },
            initializeNiceDates: function(i) {
                t.NiceDates.runNiceDates(n(document), i);
                setTimeout(t.NiceDates.initializeNiceDates, 6e4)
            },
            initializeNicePreciseDates: function(i) {
                t.NiceDates.runNicePreciseDates(n(document), i);
                setTimeout(t.NiceDates.initializeNicePreciseDates, 1e3)
            },
            runNiceDates: function(i, r) {
                i || (i = n(document));
                r || (r = f());
                var u = i.find(".standard-datetime, .standard-date, .localized-date-string");
                u.length > 0 && t.NiceDates.isRunningNiceDates == !1 && (t.NiceDates.isRunningNiceDates = !0,
                t.NiceDates.initializeNiceDates(r));
                u.each(function() {
                    t.NiceDates.preFormatTitleAttribute(n(this));
                    t.NiceDates.formatNiceDate(n(this), r)
                })
            },
            preFormatTitleAttribute: function(n) {
                var u, f;
                if (n.is("[title]") && n.attr("time-processed") == null) {
                    var e = n.attr("data-date-prefix")
                      , r = new Date(n.attr("title"))
                      , o = r.toLocaleDateString()
                      , t = r.getHours()
                      , i = r.getMinutes();
                    i < 10 && (i = "0" + i.toString());
                    u = "";
                    u = t < 12 ? "AM" : "PM";
                    t == 0 && (t = 12);
                    t > 12 && (t = t - 12);
                    f = (e || "") + o + " " + t + ":" + i + " " + u;
                    n.attr("title", f);
                    n.attr("time-processed", "true")
                }
            },
            runNicePreciseDates: function(i, r) {
                i || (i = n(document));
                r || (r = f());
                var u = i.find(".standard-datetime-precise");
                u.length > 0 && t.NiceDates.isRunningNicePreciceDates == !1 && (t.NiceDates.isRunningNicePreciceDates = !0,
                t.NiceDates.initializeNicePreciseDates(r));
                u.each(function() {
                    t.NiceDates.formatNiceDate(n(this), r)
                })
            },
            formatNiceDate: function(n, f) {
                var v = t.newDate(), a = n.attr("data-epoch"), c, l, s;
                if (a) {
                    var y = parseInt(a)
                      , e = new Date(parseInt(a) * 1e3)
                      , h = (v - e) / 6e4;
                    h = h < 0 ? Math.ceil(h) : Math.floor(h);
                    h < 0 ? (c = i("FutureFormat", "{0} from now"),
                    h *= -1) : (c = i("PastFormat", "{0} ago"),
                    n.closest(".j-nicedate").find(".j-nicedate-future").hide().end().find(".j-nicedate-past").show());
                    l = n.hasClass("standard-datetime-precise");
                    l && h >= 1 && (n.removeClass("standard-datetime-precise").addClass("standard-datetime"),
                    l = !1);
                    n.hasClass("localized-date-string") ? (s = i("StandardLocalizedDateString", "{0}, {1} {2} {3}:{4}:{5}"),
                    n.text(s(u(e.getMonth()), e.getDate(), e.getFullYear(), r(e.getHours(), 2), r(e.getMinutes(), 2), r(e.getSeconds(), 2)))) : h < 1 ? l ? (s = i("Seconds", "{0} sec"),
                    n.text(c(s(Math.floor((v - e) / 1e3))))) : (s = i("LessThanOneMinute", "<1 min"),
                    n.text(c(s()))) : h == 1 ? (s = i("OneMinute", "1 min"),
                    n.text(c(s()))) : h < f[0] ? (s = i("Minutes", "{0} mins"),
                    n.text(c(s(h)))) : h < f[1] ? (s = i("Hours", "{0} hours"),
                    n.text(c(s(Math.round(h / 60))))) : h < f[2] ? (s = i("Days", "{0} days"),
                    n.text(c(s(Math.round(h / 1440))))) : n.hasClass("standard-date") ? (s = i("StandardDateFormat", "{0} {1} {2}"),
                    n.text(s(e.getDate(), u(e.getMonth()), e.getFullYear()))) : (s = i("StandardDateTimeFormat", "{2}, {3} {1} {0} {4}:{5}:{6}"),
                    n.text(s(e.getDate(), o(e.getDay()), r(e.getHours(), 2), r(e.getMinutes(), 2), u(e.getMonth()), r(e.getSeconds(), 2), e.getFullYear())))
                }
            },
            formatMobileDates: function() {}
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Notifications = {
            initialize: function() {
                t.Notifications.bindNotificationsNavBar();
                t.Notifications.bindNotificationPreferencesForm();
                t.Notifications.bindSubscribeLabel();
                t.Notifications.bindCollapsedLinks();
                var i = n(".j-notifications-view");
                i.length > 0 && t.Notifications.markNotificationsAsRead(i, n(".t-netbar-notifications .t-netbar-label"))
            },
            bindCollapsedLinks: function() {
                var t = n(".j-show-notifications");
                t.length > 0 && t.each(function(t, i) {
                    var r = n(i);
                    r.click(function(t) {
                        t.preventDefault();
                        var i = n(this).parent().siblings(".j-notifications");
                        i.is(":visible") ? (n(this).addClass("hidden"),
                        i.hide()) : (n(this).removeClass("hidden"),
                        i.show())
                    })
                })
            },
            bindNotificationsNavBar: function() {
                var i = n("#notifications");
                n(".j-netbar-link").click(function(r) {
                    if (r.preventDefault(),
                    n("body").hasClass("responsive-enabled") && n("body").width() <= 1023 || t.detectIsOnMobile())
                        window.location = "/my-notifications";
                    else {
                        var u = n(this), e = u.attr("data-ajax-url"), f;
                        i.is(":visible") ? (n(".netbar .netbar-notifications").removeClass("notifications-open"),
                        i.hide()) : n.get(e, function(r) {
                            f = n(r);
                            i.length < 1 && (i = n("<div>").attr("id", "notifications").hide(),
                            n("body").append(i));
                            i.html(r);
                            var e = u.offset().top + 30
                              , o = u.offset().left - 272;
                            i.css("top", e.toString() + "px");
                            i.css("left", o.toString() + "px");
                            n(".netbar .netbar-notifications").addClass("notifications-open");
                            i.show();
                            t.triggerHtmlInsert(i);
                            t.Notifications.markNotificationsAsRead(f, u)
                        })
                    }
                });
                n("body").click(function(t) {
                    var r = n(t.target);
                    r.parents("#notifications").length < 1 && i.is(":visible") && (r.is("#notifications") || (n(".netbar .netbar-notifications").removeClass("notifications-open"),
                    i.hide()))
                })
            },
            bindNotificationPreferencesForm: function() {
                var u = n("#field-wants-digest-email:checkbox"), r = n(".p-delivery-options"), i, t;
                u.length > 0 && r.length > 0 && (u.is(":checked") ? r.show() : r.hide(),
                u.click(function() {
                    r.toggle()
                }));
                i = n("#field-enable-notifications:checkbox");
                t = n(".notification-setting:checkbox");
                i.length > 0 && (t.filter(":checked").length == t.length && i.attr("checked", "checked"),
                i.click(function() {
                    var i = n(this).is(":checked");
                    t.each(function() {
                        i ? n(this).attr("checked", "checked") : n(this).removeAttr("checked")
                    })
                }),
                t.each(function() {
                    n(this).change(function() {
                        t.filter(":checked").length == t.length ? i.attr("checked", "checked") : i.removeAttr("checked")
                    })
                }))
            },
            bindSubscribeLabel: function() {
                n("body").on("click", ".j-notification-sub", function() {
                    var t = n(this)
                      , i = t.find("span")
                      , r = t.attr("data-subscribe-text") || "Subscribe"
                      , u = t.attr("data-unsubscribe-text") || "Unsubscribe";
                    t.hasClass("favorited") ? (t.removeClass("favorited"),
                    t.attr("title", r)) : (t.addClass("favorited"),
                    t.attr("title", u));
                    i && (i.text().trim() === r ? i.html(u) : i.html(r))
                });
                n("a.j-lock-sub").on("click", function() {
                    var i = n(this)
                      , t = i.find("span");
                    t && (t.text() == "Lock Thread" ? t.html("Unlock Thread") : t.html("Lock Thread"));
                    location.reload()
                });
                var i = n("ul.user-actions li a.j-notification-not-sub");
                if (i.length > 0)
                    i.on("click", function(n) {
                        n.preventDefault()
                    });
                t.Comment.onCommentCreated(function(t, i, r) {
                    var u, f, e;
                    if (r.notificationTypes)
                        for (u = 0; u < r.notificationTypes.length; u++)
                            f = r.notificationTypes[u],
                            e = n(".j-notification-sub[data-notification-type=" + f + "]"),
                            e.each(function(t, i) {
                                var r = n(i).find("span")
                                  , u = n(i).attr("data-unsubscribe-text") || "Unsubscribe";
                                r.html(u)
                            })
                })
            },
            markNotificationsAsRead: function(t, i) {
                var r = t.attr("data-mark-as-read-url")
                  , u = n.cookie("RequestVerificationToken");
                u ? n.post(r, {
                    "request-verification-token": u
                }, function() {
                    i.find(".option-count").remove()
                }) : n.ajax({
                    url: "/refresh-request-verification-token",
                    type: "POST",
                    dataType: "json",
                    success: function() {
                        n.post(r, {
                            "request-verification-token": n.cookie("RequestVerificationToken")
                        }, function() {
                            i.find(".option-count").remove()
                        })
                    }
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    Cobalt.PageBlock = function(n) {
        this.guid = Cobalt.PageBlock.counter++;
        this.blockID = n.blockID;
        this.placementID = n.placementID;
        this.region = n.region;
        this.element = n.element;
        this.element.data("page-block", this)
    }
    ;
    Cobalt.PageBlock.counter = 0;
    Cobalt.PageBlock.prototype = {
        blockID: null,
        placementID: null,
        config: null,
        guid: null,
        region: null,
        element: null,
        remove: function() {
            this.region.removeBlock(this)
        },
        undelete: function() {
            this.region.undeleteBlock(this)
        },
        moveTo: function(n) {
            this.region.moveBlock(this, n)
        },
        getDisplayOrder: function() {
            return this.element.prevAll().length
        },
        saveDelete: function() {
            var n = "/cp/page-structure/" + this.region.structureID + "/delete-block?placementID=" + this.placementID
              , t = this;
            Cobalt.Utils.getRequestVerificationToken().done(function(t) {
                $.ajax({
                    url: n,
                    type: "POST",
                    data: {
                        "request-verification-token": t
                    },
                    success: function() {}
                })
            })
        },
        saveUndelete: function() {
            var n = "/cp/page-structure/" + this.region.structureID + "/undelete-block?placementID=" + this.placementID
              , t = this;
            Cobalt.Utils.getRequestVerificationToken().done(function(t) {
                $.ajax({
                    url: n,
                    type: "POST",
                    data: {
                        "request-verification-token": t
                    },
                    success: function() {}
                })
            })
        },
        savePlacement: function(n) {
            var i = "/cp/page-structure/" + this.region.structureID + "/place-block?blockID=" + this.blockID + "&pageRegionSlug=" + this.region.slug + "&displayOrder=" + this.getDisplayOrder() + (this.placementID != null ? "&placementID=" + this.placementID : "")
              , t = this;
            this.element.toggleClass("saving");
            Cobalt.Utils.getRequestVerificationToken().done(function(r) {
                $.ajax({
                    url: i,
                    type: "POST",
                    data: {
                        "request-verification-token": r
                    },
                    success: function(i) {
                        setTimeout(function() {
                            t.element.toggleClass("saving")
                        }, 500);
                        t.placementID = i.placementID;
                        n && t.configure()
                    }
                })
            })
        },
        configure: function() {
            var n = this;
            $.get(this.configurationURL(), function(t) {
                n.createConfigureModal(t.html)
            })
        },
        configurationURL: function() {
            return "/cp/page-structure/" + this.region.structureID + "/configure-block?blockID=" + this.blockID + (this.placementID != null ? "&placementID=" + this.placementID : "")
        },
        createConfigureModal: function(n) {
            var e = this, t = $("<div>"), r = !1, u, i;
            if (t.dialog({
                modal: !0,
                dialogClass: "modal category-modal",
                draggable: !1,
                title: "Configure Page Block",
                resizable: !1,
                beforeclose: function() {
                    Cobalt.TinyMCE.unload()
                },
                close: function(n) {
                    $(n.target).dialog("destroy");
                    $(n.target).remove()
                }
            }),
            t.parent().center({
                sizeToWindow: !0,
                maxWidth: 640,
                maxHeight: 510,
                minHeight: 540
            }),
            t.dialog("open"),
            t.mask(),
            u = $(n),
            t.append(u),
            t.find("form#form-page-block").ajaxForm({
                type: "POST",
                dataType: "json",
                beforeSubmit: function() {
                    t.parent().mask()
                },
                success: function(n) {
                    return n.Success ? r ? t.dialog("close") : setTimeout(function() {
                        t.parent().unmask()
                    }, 250) : (t.dialog("close"),
                    e.createConfigureModal(n.html)),
                    !1
                }
            }),
            Cobalt.triggerHtmlInsert(t),
            t.find(".j-save-and-close-button").click(function() {
                r = !0
            }),
            t.unmask(),
            i = t.find(".field-errors"),
            i.length > 0) {
                var f = $(i[0])
                  , o = f.parents("div.tab-content-item").attr("data-tab-id")
                  , s = f.parents("form").find("ul.tabbed-tabs").find("li[data-tab-id=" + o + "]>a");
                s.trigger("click")
            }
        }
    }
}
, function() {
    "use strict";
    Cobalt.PageRegion = function(n) {
        this.blocks = n.blocks;
        this.slug = n.slug;
        this.structureID = n.structureID;
        this.container = n.container;
        this.inheritedBlocks = n.inheritedBlocks;
        this.dropzone = this.container.find("div.j-dropzone")
    }
    ;
    Cobalt.PageRegion.prototype = {
        container: null,
        inheritedBlocks: null,
        blocks: [],
        structureID: null,
        slug: null,
        removeBlock: function(n) {
            n.saveDelete();
            n.element.addClass("page-block-placement-deleted");
            this.blocks.splice(this.blocks.indexOf(n), 1)
        },
        undeleteBlock: function(n) {
            n.saveUndelete();
            n.element.removeClass("page-block-placement-deleted");
            this.blocks.push(n)
        },
        addBlock: function(n, t) {
            var i = new Cobalt.PageBlock({
                region: this,
                element: n,
                blockID: n.attr("data-block-id"),
                placementID: n.attr("data-placement-id")
            });
            this.blocks.push(i);
            t || (this.dropzone.append(n),
            this.saveBlockPlacements(i))
        },
        saveBlockPlacements: function(n) {
            for (var i, t = 0; t < this.blocks.length; t++)
                i = this.blocks[t],
                i.savePlacement(i == n)
        },
        moveBlock: function(n, t) {
            this.blocks.splice(this.blocks.indexOf(n), 1);
            t.blocks.push(n);
            t.dropzone.append(n.element);
            n.region = t;
            this.saveBlockPlacements();
            t.saveBlockPlacements()
        },
        lock: function() {
            var t = "/cp/page-structure/" + this.structureID + "/lock-region?regionSlug=" + this.slug
              , n = this;
            Cobalt.Utils.getRequestVerificationToken().done(function(i) {
                $.ajax({
                    url: t,
                    type: "POST",
                    data: {
                        "request-verification-token": i
                    },
                    success: function() {
                        var t, i, r;
                        for (n.container.attr("data-locked", "true"),
                        n.container.find("div.j-dropzone > div.j-page-block").remove(),
                        n.dropzone.droppable("option", "disabled", !0),
                        t = 0; t < n.inheritedBlocks.length; t++)
                            i = n.inheritedBlocks[t],
                            r = $(i).clone(),
                            n.dropzone.append(r)
                    }
                })
            })
        },
        unlock: function() {
            var t = "/cp/page-structure/" + this.structureID + "/unlock-region?regionSlug=" + this.slug
              , n = this;
            Cobalt.Utils.getRequestVerificationToken().done(function(i) {
                $.ajax({
                    url: t,
                    type: "POST",
                    data: {
                        "request-verification-token": i
                    },
                    success: function(t) {
                        var s = t.placements, i, r, e;
                        for (n.container.attr("data-locked", "false"),
                        n.container.find("div.j-dropzone > div.j-page-block").remove(),
                        n.dropzone.droppable("option", "disabled", !1),
                        i = 0; i < t.placements.length; i++) {
                            var u = t.placements[i].blockID
                              , o = t.placements[i].placementID
                              , f = $("#page-blocks-gallery").find("div[data-block-id=" + u + "]");
                            f != null && (r = f.clone(),
                            e = new Cobalt.PageBlock({
                                region: n,
                                element: r,
                                blockID: u,
                                placementID: o
                            }),
                            n.blocks.push(e),
                            n.dropzone.append(r))
                        }
                    }
                })
            })
        },
        configure: function() {
            var n = "/cp/page-structure/" + this.structureID + "/configure-region?regionSlug=" + this.slug
              , t = this;
            $.get(n, function(n) {
                t.createConfigureModal(n.html)
            })
        },
        createConfigureModal: function(n) {
            var u = this, t = $("<div>"), i;
            if (t.html(n),
            t.dialog({
                modal: !0,
                dialogClass: "modal category-modal",
                draggable: !1,
                title: "Configure Page Region",
                resizable: !1,
                close: function(n) {
                    $(n.target).dialog("destroy");
                    $(n.target).remove()
                }
            }),
            t.parent().center({
                sizeToWindow: !0,
                maxWidth: 640,
                maxHeight: 500,
                minHeight: 540
            }),
            t.find("form").ajaxForm({
                type: "POST",
                dataType: "json",
                beforeSubmit: function() {},
                success: function(n) {
                    return t.dialog("close"),
                    n.Success || u.createConfigureModal(n.html),
                    !1
                }
            }),
            Cobalt.triggerHtmlInsert(t),
            i = t.find(".field-errors"),
            i.length > 0) {
                var r = $(i[0])
                  , f = r.parents("div.tab-content-item").attr("data-tab-id")
                  , e = r.parents("form").find("ul.tabbed-tabs").find("li[data-tab-id=" + f + "]>a");
                e.trigger("click")
            }
        }
    }
}
, function() {
    "use strict";
    (function(n, t) {
        var i = {};
        t.PageStructureManager = {
            structureID: null,
            getRegion: function(n) {
                return i[n]
            },
            initialize: function() {
                var r, u;
                n("input#show-deleted").change(function() {
                    var t = n(this).is(":checked");
                    n("#page-blocks-container").attr("data-show-deleted", t);
                    n.cookie("Cobalt.ImageManager.showDeleted", t ? "1" : "0", {
                        path: "/",
                        expires: 365
                    })
                });
                r = n.cookie("Cobalt.ImageManager.showDeleted");
                r != null && r == "1" && (n("input#show-deleted").attr("checked", !0),
                n("input#show-deleted").trigger("change"));
                n("#page-structure-options").change(function() {
                    var t = n(this).val();
                    self.location = "/cp/page-structure/" + t
                });
                u = n("div#page-blocks-cp").attr("data-page-structure-id");
                t.PageStructureManager.structureID = parseInt(u);
                n("div#page-blocks-layout div.j-page-region").each(function() {
                    var r = n(this)
                      , s = n(this).find("div.j-inherited-blocks > div.j-page-block")
                      , e = r.attr("data-slug")
                      , o = r.attr("data-locked") == "true"
                      , f = new t.PageRegion({
                        structureID: u,
                        slug: e,
                        isLocked: o,
                        blocks: [],
                        container: r,
                        inheritedBlocks: s
                    });
                    r.data("page-region", f);
                    o || r.find("div.j-page-block").each(function() {
                        var t = n(this);
                        f.addBlock(t, !0)
                    });
                    i[e] = f
                });
                n.log(i);
                n("div#page-blocks-gallery > div.page-block").draggable({
                    containment: "#page-blocks-cp",
                    helper: "clone",
                    revert: "invalid",
                    handle: ".drag-handle",
                    stop: function() {
                        n.log("Dragging stopped!")
                    }
                });
                n("div#page-blocks-layout div.j-dropzone > div.page-block").draggable({
                    revert: "invalid",
                    helper: "clone",
                    handle: ".drag-handle",
                    stop: function() {
                        n.log("Dragging stopped!")
                    }
                });
                n("div#page-blocks-layout div.p-page-region > div.j-dropzone").droppable({
                    hoverClass: "droppable-hover",
                    accept: ".j-page-block",
                    drop: function(t, i) {
                        var e = i.draggable, h = e.parent().attr("id"), c = h == "page-blocks-gallery", s = n(this), o, f, r, u;
                        if (n.log(s),
                        o = s.parents("div.p-page-region"),
                        o.attr("data-locked") != "true")
                            if (f = o.data("page-region"),
                            c)
                                r = e.clone(),
                                r.find("span.title").removeClass("tip"),
                                r.draggable({
                                    revert: "invalid",
                                    helper: "clone",
                                    handle: ".drag-handle"
                                }),
                                n.log(r),
                                f.addBlock(r);
                            else {
                                if (u = e.data("page-block"),
                                u == null)
                                    return;
                                n.log("Block Dragged:");
                                n.log(u);
                                u.region != f && u.moveTo(f)
                            }
                    }
                });
                n("div#page-blocks-layout div.j-page-region[data-locked=true] > div.j-dropzone").droppable("option", "disabled", !0);
                n("div#page-blocks-layout div.p-page-region > div.j-dropzone").each(function() {
                    var t = n(this).parent().hasClass("p-page-region-orientation-horizontal") ? null : "y";
                    n(this).sortable({
                        handle: ".sort-handle",
                        axis: t,
                        tolerance: "pointer",
                        stop: function(t, i) {
                            var r = i.item
                              , u = r.data("page-block");
                            n(this).removeAttr("style");
                            u.region.saveBlockPlacements()
                        }
                    })
                });
                n("div#page-blocks-layout").delegate("div.page-block ul.micro-controls a.delete", "click", function() {
                    var t = n(this).parents("div.j-page-block")
                      , i = t.data("page-block");
                    confirm("Are you sure you want to remove this block?") && i.remove()
                });
                n("div#page-blocks-layout").delegate("div.page-block ul.micro-controls a.undelete", "click", function() {
                    var t = n(this).parents("div.j-page-block")
                      , i = t.data("page-block");
                    i.undelete()
                });
                n("div#page-blocks-layout").delegate("div.page-block ul.micro-controls a.configure", "click", function() {
                    var t = n(this).parents("div.j-page-block")
                      , i = t.data("page-block");
                    i.configure()
                });
                n("div#page-blocks-layout").delegate("div.j-page-region > div.region-title > ul.micro-controls a.configure", "click", function() {
                    var t = n(this).parents("div.j-page-region")
                      , i = t.data("page-region");
                    i.configure()
                });
                n("div#page-blocks-layout").delegate("div.j-page-region > div.region-title > ul.micro-controls a.lock", "click", function() {
                    if (confirm("Are you sure you want to lock this region? Doing so will delete any existing blocks, and use the default page structure's blocks.")) {
                        var t = n(this).parents("div.j-page-region").data("page-region");
                        t.lock();
                        n("div#page-blocks-layout div.j-page-region[data-locked=true] > div.j-dropzone").droppable("option", "disabled", !0)
                    }
                });
                n("div#page-blocks-layout").delegate("div.j-page-region > div.region-title > ul.micro-controls a.unlock", "click", function() {
                    if (confirm("Are you sure you want to unlock this region? Doing so will clone the existing blocks, and allow you to change them.")) {
                        var t = n(this).parents("div.j-page-region").data("page-region");
                        t.unlock()
                    }
                });
                n("div#page-blocks-toolbar > ul > li > a.new-structure").click(function() {
                    n.get("/cp/page-structure/create", function(n) {
                        t.PageStructureManager.createPageStructureModal("Create a New Page Structure", n.html)
                    })
                });
                n("div#page-blocks-toolbar > ul > li > a.edit-structure").click(function() {
                    n.get("/cp/page-structure/" + t.PageStructureManager.structureID + "/edit", function(n) {
                        t.PageStructureManager.createPageStructureModal("Edit Page Structure", n.html)
                    })
                });
                n("div#page-blocks-toolbar > ul > li > a.dup-structure").click(function() {
                    confirm("Are you sure you want to duplicate this page structure?") && n.get("/cp/page-structure/" + t.PageStructureManager.structureID + "/duplicate", function(n) {
                        n.Success && t.PageStructureManager.createPageStructureModal("Edit Page Structure", n.html)
                    })
                });
                t.runOnHtmlInsert(function() {
                    n("#page-block-form").delegate("select.j-target-type", "change", function() {
                        var t = n(this)
                          , r = t.val()
                          , i = t.parents("li");
                        i.find(".j-target-fields").hide();
                        i.find(".j-target-fields-" + r).show()
                    });
                    n("#page-block-form").find("select.j-target-type").trigger("change");
                    n("#form-field-enable-responsive").click(function() {
                        var t = n("#field-user-scalable");
                        n(this).find("input").is(":checked") ? t.removeAttr("disabled") : t.attr("disabled", "disabled")
                    })
                });
                t.runOnHtmlInsert(function() {
                    n("#page-block-form .b-tab-item[data-markup-mode='markup']").click();
                    var t = setInterval(function() {
                        n("#page-block-form .markup-selector").length && (n("#page-block-form .b-tab-item[data-markup-mode='markup']").click(),
                        n("#page-block-form .markup-selector").val("6"),
                        n("#page-block-form .markup-selector").hide(),
                        clearInterval(t))
                    }, 200)
                })
            },
            createPageStructureModal: function(i, r) {
                var u = n("<div>"), f;
                if (u.html(r),
                u.dialog({
                    modal: !0,
                    dialogClass: "modal category-modal",
                    draggable: !1,
                    title: i,
                    resizable: !1,
                    close: function(t) {
                        n(t.target).dialog("destroy");
                        n(t.target).remove()
                    }
                }),
                u.parent().center({
                    sizeToWindow: !0,
                    maxWidth: 640,
                    maxHeight: 510,
                    minHeight: 540
                }),
                u.find("form").ajaxForm({
                    type: "POST",
                    dataType: "json",
                    beforeSubmit: function() {},
                    success: function(n) {
                        return u.dialog("close"),
                        n.Success ? n.structureID != t.PageStructureManager.structureID ? self.location = "/cp/page-structure/" + n.structureID : n.requiresReload && self.location.reload() : t.PageStructureManager.createPageStructureModal(i, n.html),
                        !1
                    }
                }),
                n.log("Html Syncing!"),
                t.triggerHtmlInsert(u),
                f = u.find(".field-errors"),
                f.length > 0) {
                    var e = n(f[0])
                      , o = e.parents("div.tab-content-item").attr("data-tab-id")
                      , s = e.parents("form").find("ul.tabbed-tabs").find("li[data-tab-id=" + o + "]>a");
                    s.trigger("click")
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Permissions = {
            initialize: function() {
                var e = n("#permission-manager"), r = null, f = !1, o = n("ol.sortable"), u;
                o.sortable({
                    disableNesting: "no-nest",
                    forcePlaceholderSize: !0,
                    handle: "div.drag-handle",
                    items: "li",
                    placeholder: "placeholder",
                    tabSize: 25,
                    tolerance: "pointer",
                    axis: "y",
                    toleranceElement: "> div",
                    stop: function(i, u) {
                        f && r != null && r[0] != n(this)[0] && u.item.appendTo(r);
                        f = !1;
                        t.Permissions.save(!0)
                    }
                });
                n("ol.sortable").droppable({
                    hoverClass: "droppable-hover",
                    accept: ".j-permission-item",
                    drop: function() {
                        r = n(this);
                        f = !0
                    }
                });
                u = function() {
                    n("li.j-permission-item").find("form").remove();
                    n("li.j-permission-item").find("h4").show();
                    n("li.j-permission-item").find("h5").show()
                }
                ;
                n("li.j-permission-item").on("click", "h4", function() {
                    u();
                    var f = n(this)
                      , e = n(this).parents(".j-permission-item")
                      , r = n('<form method="post">').attr("action", "/cp/permissions/" + e.attr("data-permission-id") + "/set-name").append('<input class="j-rename" name="permission-name" type="text" value="' + n(this).text() + '" />');
                    t.Utils.getRequestVerificationTokenElement().done(function(n) {
                        r.append(n)
                    });
                    f.parent().append(r);
                    f.hide();
                    r.find("input").focus();
                    r.ajaxForm({
                        beforeSubmit: function() {
                            r.find("input").attr("readonly", "readonly")
                        },
                        success: function(t) {
                            n.log(t);
                            t.Status === i || t.Status !== i && t.Status != "invalid" ? r.fadeOut(function() {
                                r.remove();
                                var n = r.find("input").val();
                                f.html(n);
                                f.fadeIn()
                            }) : (r.find("input").removeAttr("readonly"),
                            r.effect("shake", {
                                times: 6
                            }, 30))
                        },
                        error: function() {}
                    })
                });
                n("li.j-permission-item").on("click", "h5", function() {
                    u();
                    var f = n(this)
                      , e = n(this).parents(".j-permission-item")
                      , r = n('<form method="post">').attr("action", "/cp/permissions/" + e.attr("data-permission-id") + "/set-description").append('<input class="j-rename" name="permission-description" type="text" value="' + n(this).text() + '" />');
                    t.Utils.getRequestVerificationTokenElement().done(function(n) {
                        r.append(n)
                    });
                    f.parent().append(r);
                    f.hide();
                    r.find("input").focus();
                    r.ajaxForm({
                        beforeSubmit: function() {
                            r.find("input").attr("readonly", "readonly")
                        },
                        success: function(n) {
                            n.Status === i || n.Status !== i && n.Status != "invalid" ? r.fadeOut(function() {
                                r.remove();
                                var n = r.find("input").val();
                                f.html(n);
                                f.fadeIn()
                            }) : (r.find("input").removeAttr("readonly"),
                            r.effect("shake", {
                                times: 6
                            }, 30))
                        },
                        error: function() {}
                    })
                });
                n("div.context-menu").appendTo(n("body"));
                n("li.j-permission-item").on("contextmenu", function(t) {
                    var u, i, r;
                    return n("div.context-menu").data("_activePermission", n(this)),
                    u = n(this).parents("li.j-permission-group").attr("data-permission-group-id"),
                    n("div.context-menu").find("h5").text(n(this).attr("data-permission-name")),
                    n("div.context-menu").find("[data-permission-group-id]").removeClass("selected"),
                    n("div.context-menu").find("[data-permission-group-id=" + u + "]").addClass("selected"),
                    n("div.context-menu").css({
                        left: t.pageX,
                        top: t.pageY,
                        zIndex: "101"
                    }).show(),
                    i = document.documentElement.scrollTop || document.body.scrollTop,
                    r = window.innerHeight && window.innerHeight < n(window).height() ? window.innerHeight : n(window).height(),
                    n("div.context-menu").offset().top + n("div.context-menu").height() - i > r && n("div.context-menu").css("top", r - n("div.context-menu").height() - 10 + i),
                    !1
                });
                n("div.context-menu").on("click", "div.item", function() {
                    var r, i, f, o, u;
                    n(this).hasClass("selected") || (n("div.context-menu").hide(),
                    r = n(this).attr("data-permission-group-id"),
                    n("div.context-menu").find("[data-permission-group-id]").removeClass("selected"),
                    n("div.context-menu").find("[data-permission-group-id=" + r + "]").addClass("selected"),
                    i = n("div.context-menu").data("_activePermission"),
                    f = e.find("li.j-permission-group[data-permission-group-id=" + r + "]"),
                    f.find("ol").append(i),
                    o = i.offset().top + i.height() / 2 - n(window).height() / 2,
                    i.hide(),
                    u = !1,
                    t.Permissions.save(!1),
                    n("body,html,document").animate({
                        scrollTop: o
                    }, 1e3, function() {
                        u || (u = !0,
                        i.fadeIn("slow"))
                    }))
                });
                n("body").on("click", function(t) {
                    n(t.target).hasClass("j-rename") || n(t.target).hasClass("j-name") || n(t.target).hasClass("j-description") || u();
                    n.contains(n("div.context-menu")[0], t.target) || n("div.context-menu").hide()
                });
                t.Permissions.bindRankLinks()
            },
            save: function(i) {
                var r = [];
                n("li.j-permission-group").each(function() {
                    var t = n(this)
                      , u = parseInt(t.attr("data-permission-group-id"))
                      , i = [];
                    t.find("li.j-permission-item").each(function() {
                        var t = n(this);
                        i.push({
                            id: parseInt(t.attr("data-permission-id")),
                            order: t.prevAll().length + 1
                        })
                    });
                    r.push({
                        id: u,
                        order: t.prevAll().length + 1,
                        permissions: i
                    })
                });
                i && n("#permission-manager").mask();
                t.Utils.postWithToken("/cp/permissions/save-order", {
                    "permission-order": JSON.stringify(r)
                }).done(function() {
                    i && setTimeout(function() {
                        n("#permission-manager").unmask()
                    }, 250)
                })
            },
            bindRankLinks: function() {
                n(".j-permission-manager").on("click", "a.j-up", function() {
                    t.Permissions.adjustRank(n(this), "up")
                });
                n(".j-permission-manager").on("click", "a.j-down", function() {
                    t.Permissions.adjustRank(n(this), "down")
                })
            },
            adjustRank: function(n, i) {
                var r = n.parents("li.j-permission-group")
                  , f = r.parent()
                  , u = r.prevAll().length - 1;
                if (i == "up")
                    r.fadeOut(300, function() {
                        r.siblings().eq(u).before(r);
                        t.Permissions.save(!1);
                        r.fadeIn()
                    });
                else {
                    if (r.is(":last-child"))
                        return;
                    r.fadeOut(300, function() {
                        r.siblings().eq(u + 1).after(r);
                        t.Permissions.save(!1);
                        r.fadeIn()
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Poll = {
            toggleButtonSelector: ".user-action-poll-view-results-link",
            labelSelector: ".user-action-poll-view-results-link > a > span",
            resultsSelector: ".poll-results",
            result: null,
            initialize: function(i) {
                t.Poll.initializeAjaxForms();
                i && (i.toggleButtonSelector != null && (t.Poll.toggleButtonSelector = i.toggleButtonSelector),
                i.labelSelector != null && (t.Poll.labelSelector = i.labelSelector),
                i.resultsSelector != null && (t.Poll.resultsSelector = i.resultsSelector));
                t.Poll.results = n(t.Poll.resultsSelector);
                n.each(t.Poll.results, function(i, r) {
                    var f = n(r).attr("results-poll-id")
                      , u = n(t.Poll.labelSelector).filter(function() {
                        return n(this).parents("li:first").attr("data-poll-id") == f
                    })
                      , e = n.trim(n(u).text());
                    e == L.Global.Polls.HideResults() ? n(r).show() : n(u).length > 0 ? n(r).hide() : n(r).show()
                });
                n(t.Poll.toggleButtonSelector).click(function() {
                    var r = n(this).attr("data-poll-id")
                      , i = t.Poll.results.filter(function() {
                        return n(this).attr("results-poll-id") == r
                    })
                      , u = "li[data-poll-id='" + r + "']" + t.Poll.labelSelector;
                    return i.is(":hidden") ? (i.show(),
                    n(u).html(L.Global.Polls.HideResults())) : (i.hide(),
                    n(u).html(L.Global.Polls.ViewResults())),
                    !1
                });
                n("#field-poll-add-poll-button").click(function() {
                    var t = n("#div-poll");
                    n(this).val() == L.Global.Polls.RemovePoll() ? n("#field-poll-form-create-poll").val("") : n("#field-poll-form-create-poll").val("y")
                });
                n(document).on("change", ".j-poll-type", function() {
                    var i = n.map(n(this).find("option"), function(t) {
                        return n(t).val()
                    })
                      , t = n(this).closest(".j-poll-form").find(".j-poll-type-example");
                    n.each(i, function(n, i) {
                        t.removeClass("j-poll-type-example-" + i)
                    });
                    t.addClass("j-poll-type-example-" + n(this).val())
                });
                n(".j-add-poll-button").click(function() {
                    var i = n(this).closest("form").find("input[name=hidden-poll-indexes]")
                      , r = 0;
                    i.val() && (r = parseInt(i.val().split(",").slice(-1)[0], 10) + 1);
                    n.get(t.Routes.Instance.PollGetPollForm(n("#field-forum").val(), r), function(u) {
                        var f = n(u);
                        n(".j-poll").append(f);
                        t.triggerHtmlInsert(f);
                        i.val() ? i.val(i.val() + "," + r) : i.val(r);
                        t.Poll.updateChoiceOrder()
                    })
                });
                n(document).on("click", ".j-delete-poll-button", function() {
                    var r;
                    if (confirm("Delete?")) {
                        var u = n(this).closest(".j-poll-form")
                          , e = u.find(".j-poll-index").val()
                          , f = n(this).parents("form").find(".j-poll-index")
                          , o = f.val().split(",")
                          , s = n.grep(o, function(n) {
                            return n != e
                        })
                          , i = "";
                        n.each(s, function(n, t) {
                            i += t + ","
                        });
                        var h = n("#div-poll").attr("data-poll-id")
                          , c = n("#div-poll").attr("data-parent-id")
                          , l = n("#div-poll").attr("data-parent-type-id");
                        i = i.substr(0, i.length - 1);
                        f.val(i);
                        u.remove();
                        t.Poll.setOddEvenPolls();
                        t.Poll.updateTabIndexes();
                        t.Poll.updatePollIndexes();
                        r = n(".edit-poll-modal");
                        r.length > 0 && n.post(t.Routes.Instance.PollDelete(l, c, h), function(n) {
                            n.success && (r.find(".ui-dialog-titlebar-close").click(),
                            location.reload())
                        });
                        n(".j-poll-form").length === 0 && n("#field-poll-add-poll-button").click()
                    }
                });
                t.Poll.updateTabIndexesOnSort(n(".j-poll"));
                t.runOnHtmlInsert(function(n) {
                    n.find(".j-poll-type").trigger("change")
                });
                t.runOnHtmlInsert(t.Poll.setOddEvenPolls);
                t.runOnHtmlInsert(t.Poll.updateTabIndexes);
                t.runOnHtmlInsert(t.Poll.updateTabIndexesOnSort);
                var r = n("#field-poll-form-choices")
                  , u = t.Poll.getChoiceCount()
            },
            setOddEvenPolls: function() {
                n.each(n(".j-poll-form"), function(t, i) {
                    n(i).removeClass("even odd");
                    (t + 1) % 2 == 0 ? n(i).addClass("even") : n(i).addClass("odd");
                    n(this).find("#field-poll-form-poll-index-" + t).attr("value", t)
                })
            },
            updatePollIndexes: function() {
                var t = 0
                  , i = "";
                n(".j-poll-form").each(function() {
                    n(this).find("#div-poll").attr("data-poll-id", t);
                    i += t + ",";
                    t++
                });
                n("#field-hidden-poll-indexes").val(i)
            },
            updateTabIndexes: function() {
                n(".j-poll").find("input, select, textarea").each(function(t) {
                    n(this).attr("tabindex", t + 1)
                });
                t.Poll.updateChoiceOrder()
            },
            updateTabIndexesOnSort: function(i) {
                n(i).find(".field-list").bind("sortstop", t.Poll.updateTabIndexes)
            },
            getChoiceCount: function() {
                return n("#field-poll-form-choices").find('input[type="text"]').length
            },
            bindRemoveLink: function(t, i) {
                var f = n(t)
                  , r = n(t).parent().find("input[type='text']")
                  , u = n("input.hidden-poll-choice[data-choice-id='" + r.attr("data-choice-id") + "']");
                i.remove();
                u.remove()
            },
            initializeAjaxForms: function() {
                n("div.j-ajax-poll").each(function() {
                    var r = n(this).find("#poll-vote").attr("data-poll-id"), t = n(this).find("form"), o = t.find("button"), u = o.find("span"), f = n.cookie("PollVote-" + r), i = "", e;
                    f != null && (i = f.split(","));
                    i.length > 0 && (e = t.find(".j-poll-choice > input"),
                    e.each(function() {
                        var t = n(this)
                          , r = t.val();
                        n.inArray(r, i) >= 0 && t.attr("checked", "checked")
                    }),
                    u.text("Voted!"));
                    t.ajaxForm({
                        type: "post",
                        cache: !1,
                        success: function(t) {
                            n.cookie("PollVote-" + r, t.choices, {
                                expires: 365
                            });
                            u.text("Voted!")
                        }
                    })
                })
            },
            updateChoiceOrder: function() {
                var t = "";
                n(".p-poll-choice").each(function(i, r) {
                    var u = n(r).attr("data-choice-id");
                    t += u + ":" + i + ";"
                });
                n("input[name=poll-form-choice-positions]").val(t)
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.TimerFunction = function(n, t, i) {
            this.functionName = n;
            this.callback = t;
            this.lastActivity = null;
            this.pollRate = null;
            this.lastDate = (new Date).getTime();
            var u = this
              , r = function() {
                u.onAction()
            };
            i.mousemove(r);
            i.keydown(r);
            i.ready(r)
        }
        ;
        t.TimerFunction.prototype.run = function() {
            this.lastDate = (new Date).getTime();
            this.callback();
            this.calculateThrottle()
        }
        ;
        t.TimerFunction.prototype.onAction = function() {
            this.lastActivity = (new Date).getTime();
            this.pollRate = t.PollingThrottle.fastPollRate * (Math.random() * .4 + .8)
        }
        ;
        t.TimerFunction.prototype.calculateThrottle = function() {
            var n, r, i;
            if (this.lastActivity === null) {
                this.pollRate = t.PollingThrottle.slowPollRate * (Math.random() * .4 + .8);
                return
            }
            n = (new Date).getTime() - this.lastActivity;
            r = this.pollRate;
            n > t.PollingThrottle.slowestActivityThreshold ? this.pollRate = null : n <= t.PollingThrottle.fastActivityThreshold ? this.pollRate = t.PollingThrottle.fastPollRate : n <= t.PollingThrottle.midActivityThreshold ? (i = 1 - (t.PollingThrottle.midActivityThreshold - n) / (t.PollingThrottle.midActivityThreshold - t.PollingThrottle.fastActivityThreshold),
            this.pollRate = t.PollingThrottle.fastPollRate + i * (t.PollingThrottle.midPollRate - t.PollingThrottle.fastPollRate)) : n <= t.PollingThrottle.slowActivityThreshold ? (i = 1 - (t.PollingThrottle.slowActivityThreshold - n) / (t.PollingThrottle.slowActivityThreshold - t.PollingThrottle.midActivityThreshold),
            this.pollRate = t.PollingThrottle.midPollRate + i * (t.PollingThrottle.slowPollRate - t.PollingThrottle.midPollRate)) : (i = 1 - (t.PollingThrottle.slowestActivityThreshold - n) / (t.PollingThrottle.slowestActivityThreshold - t.PollingThrottle.slowActivityThreshold),
            this.pollRate = t.PollingThrottle.slowPollRate + i * (t.PollingThrottle.slowestPollRate - t.PollingThrottle.slowPollRate));
            this.pollRate !== null && (this.pollRate = this.pollRate * (Math.random() * .4 + .8))
        }
        ;
        t.PollingThrottle = {
            slowestActivityThreshold: 12e4,
            slowActivityThreshold: 3e4,
            midActivityThreshold: 1e4,
            fastActivityThreshold: 2e3,
            fastPollRate: 2e3,
            midPollRate: 1e4,
            slowPollRate: 3e4,
            slowestPollRate: 12e4,
            isStopped: !1,
            timer: null,
            timerFunctions: [],
            isInitialize: !1,
            initialize: function() {
                t.PollingThrottle.runTimerFunctions();
                t.PollingThrottle.isInitialized = !0
            },
            clearTimer: function() {
                clearTimeout(t.PollingThrottle.timer)
            },
            registerTimerFunction: function(i, r, u) {
                if (t.PollingThrottle.isInitialized || t.PollingThrottle.initialize(),
                typeof r == "function") {
                    var f = new t.TimerFunction(i,r,u || n(window));
                    t.PollingThrottle.timerFunctions.push(f)
                }
            },
            removeTimerFunction: function(n) {
                for (var r = -1, i = 0; i < t.PollingThrottle.timerFunctions.length; i++)
                    if (n == t.PollingThrottle.timerFunctions[i].functionName) {
                        r = i;
                        break
                    }
                r >= 0 && t.PollingThrottle.timerFunctions.splice(r, 1)
            },
            runTimerFunctions: function() {
                t.PollingThrottle.timerFunctions.length > 0 && n.each(t.PollingThrottle.timerFunctions, function(n, t) {
                    if (t.pollRate !== null) {
                        var i = t.lastDate + t.pollRate;
                        i < (new Date).getTime() && t.run()
                    }
                });
                t.PollingThrottle.timer = setTimeout(t.PollingThrottle.runTimerFunctions, 100)
            },
            focusWindow: function() {},
            blurWindow: function() {
                n.each(t.PollingThrottle.timerFunctions, function(n, t) {
                    t.lastActivity = null;
                    t.pollRate = null
                })
            }
        };
        n(window).focus(function() {
            t.PollingThrottle.focusWindow()
        }).blur(function() {
            t.PollingThrottle.blurWindow()
        })
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.PopOut = {
            initialize: function() {
                var t = n(".user-action-pop-out").find("a");
                n(t).click(function(t) {
                    var i = n(this).attr("data-pop-out-url");
                    return (i == "" || i == null) && (i = n(this).attr("href")),
                    window.open(i, "test", "status=0,toolbar=0,location=0,menubar=0,resizable=1,scrollbars=1,width=760,height=505"),
                    t.preventDefault(),
                    !1
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        var f, r, u = !1;
        t.PostWidget = {
            currentPostID: null,
            showPostWidgets: !0,
            dependentScripts: function() {
                return [{
                    dependency: t.User,
                    name: "Cobalt.User"
                }, {
                    dependency: t.UI,
                    name: "Cobalt.UI"
                }, {
                    dependency: t.Tabs,
                    name: "Cobalt.Tabs"
                }, {
                    dependency: t.Listing,
                    name: "Cobalt.Listing"
                }]
            },
            defaultMarkup: '<curse_postwidget data-slug="{0}" data-config="{1}" />',
            initialize: function() {},
            postWidgetReady: function() {},
            showLoading: function() {
                r.addClass("loading")
            },
            hideLoading: function() {
                r.removeClass("loading")
            },
            hideModal: function(t) {
                r.length > 0 && (r.dialog("destroy"),
                r.remove(),
                typeof tinyMCE != "undefined" && tinyMCE.activeEditor != null && (t && t !== i || (n(".b-tab-item[data-markup-mode='markup']").click(),
                n(".b-tab-item[data-markup-mode='editor']").click()),
                tinyMCE.activeEditor.execCommand("mceRepaint")),
                n(".ui-dialog-titlebar-close").off("click"))
            },
            showWidgetEditor: function(i, r, e) {
                var o = n("ul#postWidgets"), s;
                o.hide();
                t.PostWidget.showLoading();
                s = {
                    config: e,
                    postID: t.PostWidget.currentPostID
                };
                n.ajax({
                    type: "POST",
                    data: s,
                    url: "/ajax/posts/widgets/" + r,
                    dataType: "html",
                    success: function(e) {
                        var s = n("<div>").addClass("postwidget-editor")
                          , h = n(e);
                        h.appendTo(s);
                        t.PostWidget.hideLoading();
                        u || s.hide();
                        n("#postwidget-manager").append(s);
                        n("#postwidget-manager").on("click", "#field-cancel", function(i) {
                            return i.preventDefault(),
                            u && t.PostWidget.hideModal(),
                            s.fadeOut(function() {
                                n("#postwidget-manager").off("submit");
                                s.remove();
                                o.fadeIn()
                            }),
                            !1
                        });
                        n("#postwidget-manager").on("submit", "form.post-widget-form", function(i) {
                            i.preventDefault();
                            var u = n("#field-config").val();
                            return t.PostWidget.hideModal(!0),
                            f(t.PostWidget.defaultMarkup.format(r, u)),
                            !1
                        });
                        u || o.fadeOut(function() {
                            s.fadeIn(function() {})
                        });
                        t.triggerHtmlInsert(n("#postwidget-manager"));
                        i();
                        t.PostWidget.postWidgetReady()
                    },
                    error: function() {
                        return alert("Error loading configuration editor for widget"),
                        t.PostWidget.hideLoading(),
                        !1
                    }
                })
            },
            showWidgets: function(i, f, e, o) {
                t.PostWidget.showLoading();
                n.get("/ajax/posts/widgets", function(s) {
                    var c, l, h;
                    t.PostWidget.hideLoading();
                    c = n(s);
                    n("body").on("click", "ul#postWidgets > li:not(.selected) div.wrapper", function(i) {
                        i.stopImmediatePropagation();
                        setTimeout(function() {
                            n(".instructions").fadeOut("slow")
                        }, 500);
                        n.cookie("Cobalt.PostWidgetManager.instructions") == null && n.cookie("Cobalt.PostWidgetManager.instructions", "1", {
                            path: "/",
                            expires: 365
                        });
                        var r = n(this)
                          , u = r.parents("li.postwidget").attr("data-slug");
                        t.PostWidget.showWidgetEditor(f, u)
                    });
                    l = r.find("#postwidget-manager");
                    r.append(c);
                    h = n("ul#postWidgets");
                    h.hide();
                    u ? (t.PostWidget.showWidgetEditor(f, e, o),
                    t.triggerHtmlInsert(l)) : h.fadeIn(function() {
                        t.triggerHtmlInsert(h)
                    });
                    i()
                })
            },
            showModal: function(i, e, o, s) {
                u = s != null;
                f = e;
                try {
                    r = n("<div>");
                    r.dialog({
                        title: "Configure Post Widget",
                        modal: !0,
                        position: "center",
                        resizable: !1,
                        draggable: !1,
                        dialogClass: "modal modal-post-widget-manager",
                        width: 865,
                        height: 540,
                        close: t.PostWidget.hideModal
                    });
                    r.parent().center({
                        fixed: !0,
                        absolute: !0,
                        sizeToWindow: !0,
                        maxWidth: 865,
                        maxHeight: 540
                    });
                    t.PostWidget.showWidgets(function() {
                        if (n("#postwidget-manager").length > 0)
                            n(".ui-dialog-titlebar-close").on("click", function(n) {
                                n.preventDefault();
                                t.PostWidget.hideModal()
                            });
                        n.cookie("Cobalt.PostWidgetManager.instructions") == null && (o || setTimeout(function() {
                            n(".instructions").fadeIn("slow")
                        }, 1e3))
                    }, function() {
                        s && n("#field-config").val(s)
                    }, o, s)
                } catch (h) {}
                n([document, window]).bind("keyup", function(n) {
                    n.keyCode == "27" && t.PostWidget.hideModal()
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        var t = function() {
            function t() {}
            return t.initialize = function() {
                $("#field-recipients,#field-bcc").each(function() {
                    var t = $(this).attr("data-delimiter");
                    t = t ? t + " " : ", ";
                    $(this).autocomplete(n.Routes.Instance.PrivateMessageAjaxAutoCompleteContact(), "Auto-Complete-Contact", {
                        multiple: !0,
                        multipleSeparator: t,
                        scroll: !1,
                        dataType: "json",
                        parse: function(n) {
                            for (var t, i, f, r = [], u = 0; u < n.length; u++)
                                t = n[u],
                                t.Type == "role" ? (i = "",
                                f = this.multipleSeparator,
                                $.each(t.Values, function(n, r) {
                                    i += r;
                                    n !== t.Values.length - 1 && (i += f)
                                }),
                                r.push({
                                    data: t,
                                    value: t.Name,
                                    result: i
                                })) : r.push({
                                    data: t,
                                    value: t.Username,
                                    result: t.Username
                                });
                            return r
                        },
                        formatItem: function(n) {
                            var t = $("<div>").addClass("character-autocomplete-result-row"), i;
                            return n.Avatar != null ? (i = $("<img>").attr("src", n.Avatar),
                            t.append(i),
                            t.addClass("with-avatar")) : (n.GameAvatarSmall != null || n.GameName != null) && (i = $("<img>").attr("src", n.GameAvatarSmall).attr("alt", n.GameName),
                            t.append(i)),
                            n.Type == "role" ? t.append(n.Name + " ") : t.append(n.Username + " "),
                            $("<div>").append(t).html()
                        }
                    })
                });
                $(".send-pm #field-submit").text("Send Message");
                this.handleMoveToFolder();
                this.handleDeleteFolder();
                $("#field-preview-submit").hide();
                var t = $("#form-field-pm-folder");
                t.hide();
                $(".j-bulk-moderation").on("change", "#field-action", function() {
                    $(this).val() === "4" ? t.show() : t.hide()
                });
                $("#field-pm-folder option:first").val("0");
                n.PrivateMessage.conversationHistory && $.each(n.PrivateMessage.conversationHistory, function() {
                    var n = $("[data-after-comment='" + this.AfterCommentID + "']")
                      , t = $(".j-comment[data-id=" + this.AfterCommentID + "]");
                    t.parent().find($("[data-after-comment='" + this.AfterCommentID + "']")).length < 1 && (n = $("<div>").attr("data-after-comment", this.AfterCommentID),
                    n.insertAfter(t));
                    n.append($("#comment-history-template").tmpl(this))
                })
            }
            ,
            t.handleMoveToFolder = function() {
                $(".p-pm-move-to").on("click", ".j-folder-select", function(t) {
                    t.preventDefault();
                    var i = $(this).attr("data-conversation-id")
                      , r = $(this).attr("data-folder-id")
                      , u = $.cookie("RequestVerificationToken");
                    u ? n.PrivateMessage.moveToFolder(i, r, u) : $.ajax({
                        url: "/refresh-request-verification-token",
                        type: "POST",
                        dataType: "json",
                        success: function() {
                            n.PrivateMessage.moveToFolder(i, r, $.cookie("RequestVerificationToken"))
                        }
                    })
                })
            }
            ,
            t.moveToFolder = function(t, i, r) {
                $.ajax({
                    url: n.Routes.Instance.PrivateMessageMoveToConversationFolder(t, i),
                    type: "POST",
                    data: {
                        "request-verification-token": r
                    },
                    success: function(t) {
                        t.success && ($(".p-pm-a .j-pm-folder").empty(),
                        $(".p-pm-a .j-pm-folder").append('<a href="' + n.Routes.Instance.PrivateMessageIndex() + "?view=folder&folder-id=" + t.folderID + '">[' + t.folder + "]<\/a>"))
                    }
                })
            }
            ,
            t.handleDeleteFolder = function() {
                $("li.j-folder-delete").each(function() {
                    $(this).hasClass("hasDelete") || ($(this).hasClass("selected") ? $(this).append('<span class="remove-link j-pm-folder-delete"><\/span>') : $(this).hover(function() {
                        $(this).append('<span class="remove-link j-pm-folder-delete"><\/span>')
                    }, function() {
                        $(this).find("span.remove-link:last").remove()
                    }),
                    $(this).addClass("hasDelete"))
                });
                $("body").on("click", ".j-pm-folder-delete", function(t) {
                    var i, r;
                    t.preventDefault();
                    t.stopPropagation();
                    i = $(this).parent().attr("data-folder-id");
                    confirm("Are you sure you want to remove this folder?  All private messages in this folder will be moved to inbox.") && (r = $.cookie("RequestVerificationToken"),
                    r ? n.PrivateMessage.deleteFolder(i, r) : $.ajax({
                        url: "/refresh-request-verification-token",
                        type: "POST",
                        dataType: "json",
                        success: function() {
                            n.PrivateMessage.deleteFolder(i, $.cookie("RequestVerificationToken"))
                        }
                    }))
                })
            }
            ,
            t.deleteFolder = function(t, i) {
                $.ajax({
                    url: n.Routes.Instance.PrivateMessageDeleteConversationFolder(t),
                    type: "POST",
                    data: {
                        "request-verification-token": i
                    },
                    success: function(n) {
                        n.success ? self.location.href = n.returnUrl : alert("An unexpected error occurred")
                    }
                })
            }
            ,
            t
        }();
        n.PrivateMessage = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t) {
        t.ProfileFields = {
            dependentScripts: function() {
                return [{
                    dependency: t.Forms,
                    name: "Cobalt.Forms"
                }]
            },
            initialized: !1,
            initialize: function() {
                var r = n("#profile-field-groups-manager"), i;
                r.sortable({
                    handle: ".icon-drag-handle:not(.icon-field-drag-handle)",
                    items: "> li.group-item",
                    stop: function() {
                        var u, f, i, e, o;
                        for (r.mask(),
                        u = r.find("li.profile-field-group-normal"),
                        f = [],
                        i = 0; i < u.length; i++)
                            f[i] = n(u[i]).attr("data-group-id");
                        e = {
                            groupIDs: f.join("-")
                        };
                        o = t.Routes.Instance.CPProfileFieldGroupUpdateDisplayOrder();
                        t.Utils.postWithToken(o, e).done(function() {
                            r.unmask()
                        })
                    }
                });
                i = n(".profile-fields-manager");
                i.sortable({
                    handle: ".icon-field-drag-handle",
                    items: "> li.field-item",
                    start: function(n, t) {
                        var i = t.item;
                        i.parents(".group-item").siblings().find(".profile-fields-manager .placeholder").show()
                    },
                    stop: function(r, u) {
                        var s = u.item, e, o, f, h, c;
                        for (s.parents(".group-item").siblings().find(".profile-fields-manager .placeholder").hide(),
                        i.mask(),
                        e = s.parent().find("li.profile-field-normal"),
                        o = [],
                        f = 0; f < e.length; f++)
                            o[f] = n(e[f]).attr("data-field-id");
                        h = {
                            fieldIDs: o.join("-")
                        };
                        c = t.Routes.Instance.CPProfileFieldUpdateDisplayOrder();
                        t.Utils.postWithToken(c, h).done(function() {
                            i.unmask()
                        })
                    }
                });
                i.droppable({
                    hoverClass: "drop-hover",
                    accept: "li.field-item",
                    drop: function(i, r) {
                        var f = r.draggable, e = n(this).parents(".group-item").attr("data-group-id"), u, o, s;
                        f.attr("data-group-id") !== e && (u = f.clone().removeAttr("style").attr("data-group-id", e),
                        f.remove(),
                        n(this).append(u),
                        t.triggerHtmlInsert(u),
                        n(".profile-fields-manager .placeholder").hide(),
                        n(this).mask(),
                        o = {
                            fieldID: u.attr("data-field-id"),
                            newGroupID: e
                        },
                        s = t.Routes.Instance.CPProfileFieldChangeGroup(),
                        t.Utils.postWithToken(s, o).done(function() {
                            n(this).unmask()
                        }))
                    }
                });
                n("#profile-fields-sortable .j-see-deleted").on("change", function() {
                    var i = n(this).is(":checked")
                      , t = n("#profile-fields-sortable");
                    i ? t.addClass("show-deleted") : t.removeClass("show-deleted")
                });
                t.runOnHtmlInsert(function() {
                    if (n("#profile-field-form").closest(".ui-dialog-content").bind("dialogclose", function() {
                        t.ProfileFields.initialized = !1
                    }),
                    !t.ProfileFields.initialized) {
                        var i = n("#profile-field-form");
                        i.length > 0 && (t.ProfileFields.bindFieldLists(),
                        t.ProfileFields.bindTypeField(),
                        t.ProfileFields.bindValidatorsField(),
                        t.ProfileFields.initialized = !0)
                    }
                })
            },
            moveFileField: function(t, i) {
                var r, u, f;
                n(i).find(".sort-gripper").hide();
                n(i).find(".remove-link").hide();
                r = n(i).find("input");
                u = r.attr("name").split("-")[0] + "-" + (t + 1).toString();
                r.attr("name", u);
                f = n(n("#field-values .form-field")[t]);
                f.find("input[type=text]").after(r)
            },
            bindFieldLists: function() {
                n("#field-values .field-list-new-entry").on("click", function() {
                    var r = n("#field-images .field-list-new-entry"), t, i;
                    r.click();
                    t = n("#field-values .form-field");
                    i = t.length;
                    t.find("input[name*=values-]").removeClass("hide").show();
                    t.find("input[name=values-" + i + "]").focus()
                })
            },
            bindValidatorsField: function() {
                var t = n("#field-validator");
                if (t.length > 0)
                    t.on("change", function() {
                        var t = n(this).find(":selected"), i;
                        t.length > 0 && (i = "#" + t.attr("data-additional-validator-id"),
                        n(".additional-validator").hide(),
                        n(i).removeClass("hide").show().find(".additional-validator").show())
                    })
            },
            bindTypeField: function() {
                var t = n("#field-values"), u = n("#option-labeling"), r = n("#validators"), i, f;
                if (t.find("input[type=text]").removeClass("hide"),
                i = n("#field-type"),
                i.length > 0) {
                    i.find(":selected").attr("data-allow-multiple-values") === "true" && t.removeClass("hide").show();
                    i.find(":selected").attr("data-allow-additional-validation") === "true" && (r.removeClass("hide").show(),
                    f = "#" + r.find("option:selected").attr("data-additional-validator-id"),
                    n(f).removeClass("hide").show().find(".additional-validator").show());
                    i.on("change", function() {
                        n(".field-errors[htmlfor=field-values]").remove();
                        var i = n(this).find(":selected")
                          , f = i.attr("data-allow-multiple-values") === "true"
                          , e = i.attr("data-allow-additional-validation") === "true";
                        i.length > 0 && (i.val() === "" ? (t.hide(),
                        u.hide()) : (f ? (t.removeClass("hide").show(),
                        u.html("Field Labels").show()) : (u.hide(),
                        t.hide()),
                        e ? r.removeClass("hide").show() : r.hide()))
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    Cobalt.QueryParser = function(n) {
        var t, u, f;
        this.originalQuery = n;
        this.keyValuePairs = [];
        var e = /([^&=]+)=?([^&]*)/g
          , o = /\+/g
          , i = function(n) {
            return decodeURIComponent(n.replace(o, " "))
        }
          , r = n.indexOf("?");
        for (n = r >= 0 ? n.substring(r + 1) : ""; t = e.exec(n); )
            u = i(t[1]),
            f = i(t[2]),
            this.keyValuePairs.push({
                key: u,
                value: f
            })
    }
    ;
    Cobalt.QueryParser.prototype = {
        originalQuery: null,
        keyValuePairs: null,
        toString: function() {
            for (var t, i = "", n = 0; n < this.keyValuePairs.length; n++)
                t = this.keyValuePairs[n],
                i += "&" + t.key + "=" + t.value;
            return "?" + i.substring(1)
        },
        getByKey: function(n) {
            for (var t = 0; t < this.keyValuePairs.length; t++)
                if (n === this.keyValuePairs[t].key)
                    return this.keyValuePairs[t].value;
            return undefined
        },
        set: function(n, t) {
            for (var r, u = !1, i = 0; i < this.keyValuePairs.length; i++)
                r = this.keyValuePairs[i],
                r.key == n && (r.value = t,
                u = !0);
            u || this.keyValuePairs.push({
                key: n,
                value: t
            })
        },
        add: function(n, t) {
            this.keyValuePairs.push({
                key: n,
                value: t
            })
        },
        mergeFrom: function(n) {
            for (var i, t = 0; t < n.length; t++)
                i = n[t],
                this.set(i.key, i.value)
        }
    }
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.RatingForm = function(r) {
            var u = this, f, e;
            this.ratingsType = r.attr("data-rating-form-type");
            this.ratingForm = r;
            this.ratingCount = r.attr("data-rating-count");
            this.ratingAverage = r.attr("data-rating-average");
            this.ratingSum = r.attr("data-rating-sum");
            this.ratingPositive = r.attr("data-rating-countpositive");
            this.ratingNegative = r.attr("data-rating-countnegative");
            this.ratingForm.unbind("submit");
            this.showRatingDetails = !1;
            this.ratingsType === "like" && (f = r.find("span.like"),
            e = f.attr("data-user-id"),
            e == t.User.userID && (f.find("input").hide(),
            f.addClass("user-owned"),
            f.attr("title", "You may not vote on your own content")),
            r.find("#field-like").click(function() {
                var n = r.find(".num-likes"), u = r.find(".rating-sum"), t = r.find("#field-like"), i;
                t.length > 0 && (i = t.parent(),
                t.hasClass("liked") ? n.text(parseInt(n.text()) - 1) : n.text(parseInt(n.text()) + 1))
            }));
            r.find(".rating-sum.rating-average").click(function() {
                u.showRatingDetails ? (n(this).html('<span class="rating-sum ">' + (u.ratingSum > 0 ? "+" : "") + u.ratingSum + "<\/span>"),
                n(this).attr("title", "Click to see breakdown").tooltip(),
                u.showRatingDetails = !1) : (n(this).html('<span class="rating-sum rating-average-ratingPositive">+' + u.ratingPositive + '<\/span><span class="rating-sum rating-average-ratingNegative">-' + u.ratingNegative + "<\/span>"),
                n(this).attr("title", "Click to hide breakdown").tooltip(),
                u.showRatingDetails = !0)
            });
            r.find(".rating-up,.rating-down").each(function() {
                var i = n(this).attr("data-user-id");
                i == t.User.userID && (n(this).addClass("rating-disabled").addClass("rating-ownpost"),
                n(this).find("input").attr("title", "You may not vote on your own content").tooltip())
            });
            r.find(".rating-disabled.rating-login input").click(function() {
                return !1
            });
            r.find(".rating-disabled.rating-ownpost input").click(function() {
                return !1
            });
            t.User.IsAuthenticated || r.find(".need-login").click(function() {
                return !1
            });
            this.ratingForm.ajaxForm({
                type: "post",
                dataType: "json",
                beforeSubmit: function() {
                    u.ratingForm.find("input").each(function() {
                        n(this).attr("disabled", "disabled")
                    })
                },
                success: function(t) {
                    u.ratingForm.find("input").each(function() {
                        n(this).removeAttr("disabled")
                    });
                    var i = t.EntityTypeID
                      , r = t.EntityID
                      , f = t.RatingValue;
                    u.ratingCount = t.RatingAverage.Count;
                    u.ratingAverage = t.RatingAverage.Average;
                    u.ratingSum = t.RatingAverage.Sum;
                    u.ratingPositive = t.RatingAverage.CountPositive;
                    u.ratingNegative = t.RatingAverage.CountNegative;
                    u.addCookieValue(i, r, f, t.Timestamp)
                }
            });
            this.applyRatings = function(n, t, r) {
                if (r != i)
                    switch (this.ratingsType) {
                    case "five-star":
                        this.selectStars(r, !0, n, t);
                        break;
                    case "like":
                        this.setLike(r);
                        break;
                    case "thank":
                        this.setThank(r, n, t);
                        break;
                    case "up-down":
                        this.upDown(r, n, t);
                        break;
                    default:
                        this.selectStars(r, !1, n, t)
                    }
            }
            ;
            this.parseRatingsCookie = function() {
                var n = this.ratingForm.attr("data-entity-type-id")
                  , i = this.ratingForm.attr("data-entity-id")
                  , r = t.Rating.getRatingsValue(n, i)
                  , u = t.Rating.getRatingsTimestamp(n, i);
                this.applyRatings(n, i, r, u)
            }
            ;
            this.setRatingsCookie = function(i) {
                var r = {
                    domain: t.Utils.getCurrentDomain(),
                    path: "/",
                    skipEncoding: !0,
                    expires: 30
                };
                n.cookie("Ratings", i, r);
                t.User.Ratings = i;
                this.parseRatingsCookie()
            }
            ;
            this.selectStars = function(n, t) {
                if (t) {
                    var i = this.ratingForm.find("li.current-rating");
                    i[0].style.width = n * 20 + "%"
                }
                this.ratingForm.find("input").attr("title", L.Global.Ratings.YouRatedThis(n, this.ratingAverage, this.ratingCount))
            }
            ;
            this.upDown = function(t, r, f) {
                n("div.rating-form").each(function() {
                    var e = n(this)
                      , a = e.find("input#field-ratableEntity")
                      , l = a.val().split(":")
                      , v = l[0]
                      , y = l[1];
                    if (r == v && f == y) {
                        var h = e.find("div.rating-up")
                          , o = e.find("div.rating-sum")
                          , c = e.find("div.rating-down")
                          , s = u.ratingSum;
                        if (t != i) {
                            switch (parseInt(t)) {
                            case 1:
                                h.addClass("ratingSelected").find("input").attr("title", "Click to undo your vote");
                                c.removeClass("ratingSelected").find("input").attr("title", "Vote Down");
                                break;
                            case -1:
                                c.addClass("ratingSelected").find("input").attr("title", "Click to undo your vote");
                                h.removeClass("ratingSelected").find("input").attr("title", "Vote Up");
                                break;
                            case 0:
                                h.removeClass("ratingSelected").find("input").attr("title", "Vote Up");
                                c.removeClass("ratingSelected").find("input").attr("title", "Vote Down")
                            }
                            e.find(".tip").tooltip()
                        }
                        parseInt(s) >= 0 ? (o.removeClass("rating-average-ratingNegative").addClass("rating-average-ratingPositive"),
                        parseInt(s) == 0 ? o.html(0) : o.html("+" + s)) : (o.removeClass("rating-average-ratingPositive").addClass("rating-average-ratingNegative"),
                        o.html(s))
                    }
                })
            }
            ;
            this.addCookieValue = function(i, r, f, e) {
                var o = n.cookie("Ratings"), s, h;
                o == null && (o = "");
                s = t.Rating.getRatingsValue(i, r);
                s == null ? (h = i + "," + r + "," + f + "," + e + "|",
                o += h,
                this.setRatingsCookie(o)) : (this.ratingsType == "like" || this.ratingsType == "thank" ? t.Rating.removeRatingsValue(i, r) : t.Rating.setRatingsValue(i, r, f, e),
                u.applyRatings(i, r, f, e))
            }
            ;
            this.setLike = function() {
                var i = this.ratingForm.find(".num-likes"), t = this.ratingForm.find("#field-like"), n;
                t.length > 0 && (n = t.parent(),
                t.hasClass("liked") ? (t.removeClass("liked"),
                n.removeClass("liked"),
                n.attr("title", "Click to like this"),
                n.tooltip()) : (t.addClass("liked"),
                n.addClass("liked"),
                n.attr("title", "You like this."),
                n.tooltip()))
            }
            ;
            this.setThank = function(r, u, f) {
                var o = this.ratingForm.find(".num-likes"), s = this.ratingForm.find("#field-like"), e, h;
                s.length > 0 && (e = s.parent(),
                s.hasClass("liked") ? (s.removeClass("liked"),
                e.removeClass("liked"),
                e.attr("title", "Thank {0} for this post.".format(e.data("display-name"))),
                e.tooltip()) : (e.addClass("liked"),
                s.addClass("liked"),
                e.attr("title", "Remove thanks".format(e.data("display-name"))),
                e.tooltip()));
                r != i && (o.parents(".j-like-modal").length < 1 ? (h = n("<a href='" + t.Routes.Instance.CommentRatingModal(u, f) + "' class='modal-link j-like-modal' data-title='Thanks'><\/a>"),
                o.wrap(h),
                t.triggerHtmlInsert(o.parents(".rating-form"))) : r === 0 ? (o.parents(".j-like-modal").remove(),
                this.ratingForm.find("div.b-rating-a").prepend("<span class='num-likes'>0<\/span>")) : o.text(r),
                o.text() === "0" && o.text(r))
            }
            ;
            this.ratingsType == "social-like" && n(t.Social_Facebook).bind("facebookLoaded", function() {
                try {
                    FB.Event.subscribe("edge.create", function() {
                        r.submit()
                    })
                } catch (n) {}
            })
        }
        ;
        t.Rating = {
            ratingsRoute: null,
            ratingForms: null,
            customRoute: null,
            initialize: function(n) {
                t.Rating.customRoute = n;
                this.updateElements()
            },
            updateElements: function() {
                var i = t.Rating.ratingForm = n("form.rating-form");
                i.length != 0 && (t.Rating.ratingForms = [],
                i.each(function(i, r) {
                    var u = new t.RatingForm(n(r)), f;
                    t.Rating.ratingForms[i] = u;
                    t.User.IsAuthenticated && !t.Rating.userHasRatingsCookie() && (f = t.customRoute != null ? t.customRoute : t.Rating.ratingsRoute(),
                    n.getJSON(f, null, function(n) {
                        n != "" && u.setRatingsCookie(n)
                    }));
                    t.Rating.userHasRatingsCookie() && u.parseRatingsCookie()
                }))
            },
            getRatingsValue: function(i, r) {
                var o, e, u, f;
                if (t.Rating.userHasRatingsCookie())
                    for (o = n.cookie("Ratings"),
                    e = o.split("|"),
                    u = 0; u < e.length; u++)
                        if (f = e[u].split(","),
                        f[0] == i && f[1] == r)
                            return f[2];
                return null
            },
            getRatingsTimestamp: function(i, r) {
                var o, e, u, f;
                if (t.Rating.userHasRatingsCookie())
                    for (o = n.cookie("Ratings"),
                    e = o.split("|"),
                    u = 0; u < e.length; u++)
                        if (f = e[u].split(","),
                        f[0] == i && f[1] == r)
                            return parseInt(f[3], 10);
                return null
            },
            removeRatingsValue: function(i, r) {
                if (t.Rating.userHasRatingsCookie()) {
                    var u = n.cookie("Ratings")
                      , f = new RegExp(i + "," + r + ",\\d+\\|","g")
                      , e = u.replace(f, "");
                    this.setRatingsCookie(e)
                }
                return null
            },
            setRatingsValue: function(i, r, u, f) {
                var h, o, s, e;
                if (t.Rating.userHasRatingsCookie()) {
                    for (h = n.cookie("Ratings"),
                    o = h.split("|"),
                    s = 0; s < o.length; s++)
                        e = o[s].split(","),
                        e[0] == i && e[1] == r && (e[2] = u,
                        e[3] = f),
                        o[s] = e.join(",");
                    t.Rating.setRatingsCookie(o.join("|"))
                }
            },
            setRatingsCookie: function(i) {
                var r = {
                    domain: t.Utils.getCurrentDomain(),
                    path: "/",
                    skipEncoding: !0,
                    expires: 30
                };
                n.cookie("Ratings", i, r);
                t.User.Ratings = i
            },
            addCookieValue: function(i, r, u, f) {
                var e = n.cookie("Ratings"), o, s;
                e == null && (e = "");
                o = t.Rating.getRatingsValue(i, r);
                o == null ? (s = i + "," + r + "," + u + "," + f + "|",
                e += s,
                t.Rating.setRatingsCookie(e)) : t.Rating.setRatingsValue(i, r, u)
            },
            userHasRatingsCookie: function() {
                return n.cookie("Ratings") != null
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        function u(n, t, i, r, u, f) {
            this.commentID = n;
            this.revisionID = t;
            this.body = i;
            this.processedBody = r;
            this.revisionStatus = u;
            this.commentStatus = f
        }
        function f(t, i) {
            if (r.length > 0)
                return n.grep(r, function(n) {
                    return n.commentID === t && n.revisionID === i
                })[0]
        }
        function o(o) {
            var h = o.find(".j-comment-revisions-history"), s, c;
            if (h.length > 0) {
                s = o.find(".j-comment-revisions-select");
                s.find("option").length <= 0 && (o.mask(),
                c = o.data("id"),
                n.get(t.Routes.Instance.CommentGetCommentRevisions(o.data("id")), function(t) {
                    var h, e, f, c;
                    if (t && t.revisions && t.revisions.length > 0)
                        for (t.revisions = n.parseJSON(t.revisions),
                        s.append("<option value='0'>-<\/option>"),
                        h = o.find(".j-comment-body").html(),
                        r.push(new u(o.data("id"),0,h,h,t.revisionStatus)),
                        e = 0; e < t.revisions.length; e++)
                            e === 0 && (o.commentStatus = t.revisions[0].commentStatus),
                            f = t.revisions[e],
                            s.append("<option value='" + f.revisionNumber + "'>#" + f.revisionNumber + " " + f.dateCreated + " by: " + f.author + (f.revisionStatus !== i ? "(" + f.revisionStatus + ")" : "") + "<\/option>");
                    c = o.data("revision-number");
                    s.val(c);
                    o.unmask()
                }));
                e(o.data("revision-number"));
                o.on("change", ".j-comment-revisions-select", function() {
                    var l = n(this).find("option:selected"), s = function(n) {
                        o.find(".j-comment-body").empty().append(n)
                    }, h;
                    if (l.index() === 0) {
                        h = f(o.data("id"), 0);
                        h && s(h.processedBody);
                        return
                    }
                    var c = o.data("id")
                      , i = l.val()
                      , a = f(c, i);
                    a ? s(a.processedBody) : (o.mask(),
                    n.get(t.Routes.Instance.CommentGetCommentRevision(c, i), function(n) {
                        n && n.status === "success" && (r.push(new u(c,i,n.body,n.processedBody,n.revisionStatus)),
                        s(n.processedBody));
                        o.unmask()
                    }));
                    e(i)
                })
            }
        }
        function e(t) {
            n("div.j-comment").each(function() {
                var i = n(this)
                  , r = i.data("revision-id");
                r == t ? i.addClass("revision-highlight") : i.removeClass("revision-highlight")
            })
        }
        t.Reports = {
            initialize: function() {
                var i, r, u;
                t.runOnHtmlInsert(t.Reports.bindReportModalDescriptions);
                i = n(".j-cp-report");
                i.length > 0 && (r = n("#report-info"),
                u = r.parent(),
                i.delegate("#reported-entity-quick-update-form input:radio", "change", function() {
                    var t = n("#reported-entity-quick-update-form");
                    u.mask();
                    t.ajaxSubmit(function() {
                        window.location.reload()
                    })
                }));
                n("div.j-comment").first().data("revision-number") > 0 && (n("div.j-comment").each(function() {
                    var t = n(this);
                    o(t)
                }),
                n("a.revision-report").each(function() {
                    var t = n(this);
                    t.on("click", function() {
                        var t = n(this).data("revision-id")
                          , i = n("select.j-comment-revisions-select");
                        i.val(t).trigger("change")
                    })
                }))
            },
            bindReportModalDescriptions: function() {
                var t = n("select#field-report-reason");
                t.unbind("change");
                t.change(function() {
                    var t = n(this).find("option:selected");
                    if (t.text() === "—") {
                        n(this).parents("div#form-field-report-reason").find("div#report-description").remove();
                        return
                    }
                    n(this).parents("div#form-field-report-reason").find("div#report-description").remove();
                    n(this).parents("div#form-field-report-reason").append('<div id="report-description">' + t.attr("data-report-description") + "<\/div>")
                })
            }
        };
        var r = []
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        var i = function() {
            function n() {
                this.breakWidthSubscribers = {};
                this.lastWidth = null;
                this.isInitialized = !1;
                this.nextId = 0;
                this.breakWidthManager = this
            }
            return n.prototype.Subscribe = function(n, t) {
                return (this.nextId++,
                this.breakWidthSubscribers[this.nextId] = {
                    width: n,
                    callback: t
                },
                this.isInitialized) ? this.nextId : (this.initializeResizeHandler(),
                this.nextId)
            }
            ,
            n.prototype.UnSubscribe = function(n) {
                delete this.breakWidthSubscribers[n]
            }
            ,
            n.prototype.resize = function() {
                var i = window.outerWidth, r, n, u;
                for (r in this.breakWidthManager.breakWidthSubscribers)
                    n = this.breakWidthManager.breakWidthSubscribers[r],
                    (this.breakWidthManager.lastWidth == null || this.breakWidthManager.lastWidth > n.width && i <= n.width || this.breakWidthManager.lastWidth <= n.width && i > n.width) && (u = i <= n.width ? t.BelowOrEqual : t.Above,
                    n.callback(u));
                this.lastWidth = i
            }
            ,
            n.prototype.initializeResizeHandler = function() {
                var n = this;
                this.isInitialized = !0;
                this.breakWidthManager = this;
                window.onresize = function() {
                    clearTimeout(n.resizeTimer);
                    n.resizeTimer = setTimeout(n.resize, 1e3)
                }
            }
            ,
            n
        }(), r = function() {
            function n() {}
            return n.AbbreviateCounts = function(t, i, r, u) {
                var f = this
                  , e = $(t);
                n.BreakwidthNotifier.Subscribe(u, function(n) {
                    f.handleCounts(e, i, r, n)
                })
            }
            ,
            n.handleCounts = function(n, i, r, u) {
                var f = function(n, f) {
                    var e = $(f), o, s;
                    u == t.Above ? (o = e.data(i),
                    o && e.text(o)) : (s = e.data(r),
                    s && e.text(s))
                };
                n.each(f)
            }
            ,
            n.BreakwidthNotifier = new i,
            n
        }(), t;
        n.ResponsiveUtility = r,
        function(n) {
            n[n.Above = 0] = "Above";
            n[n.BelowOrEqual = 1] = "BelowOrEqual"
        }(t = n.BreakWidthLocation || (n.BreakWidthLocation = {}))
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t) {
        t.Roles = {
            dependentScripts: function() {
                return [{
                    dependency: t.Forms,
                    name: "Cobalt.Forms"
                }]
            },
            initialize: function() {
                var u = n("#role-manager");
                if (!u.hasClass("j-read-only")) {
                    var i = null
                      , r = !1
                      , f = n("ol.sortable");
                    f.sortable({
                        disableNesting: "no-nest",
                        forcePlaceholderSize: !0,
                        handle: "div.drag-handle",
                        items: "li:not(.protected)",
                        placeholder: "placeholder",
                        tabSize: 25,
                        tolerance: "pointer",
                        axis: "y",
                        toleranceElement: "> div",
                        stop: function(u, f) {
                            r && i != null && i[0] != n(this)[0] && f.item.appendTo(i);
                            r = !1;
                            t.Roles.saveRoleOrder(!0)
                        }
                    });
                    n("ol.sortable").droppable({
                        hoverClass: "droppable-hover",
                        accept: ".j-role-item",
                        drop: function() {
                            i = n(this);
                            r = !0
                        }
                    })
                }
                t.Roles.attachAddForm();
                t.Roles.attachRemove();
                t.Roles.bindRankLinks();
                t.runOnHtmlInsert(t.Roles.bindGrantDenySelects);
                t.Roles.refreshRankState();
                t.runOnHtmlInsert(t.Roles.bindRoleEditor);
                t.runOnHtmlInsert(t.Roles.bindBulkActions)
            },
            bindRoleEditor: function(i) {
                function c() {
                    var o = null, c = r.find("span.j-no-matches"), b = u.find("b.j-filter-match-count"), v = f.val().toLowerCase(), t, s, h, w;
                    if (v.length == 0) {
                        for (e.hide(),
                        b.hide(),
                        t = 1; t < u.length; t++)
                            var i = n(u[t])
                              , y = i.data("tabContent")
                              , p = y.find("div[data-permission-name]").show();
                        u.show();
                        c.hide();
                        return
                    }
                    for (e.show(),
                    t = 1; t < u.length; t++) {
                        var i = n(u[t])
                          , l = i.find("b.j-filter-match-count")
                          , y = i.data("tabContent")
                          , p = y.find("div[data-permission-name]")
                          , a = 0;
                        for (s = 0; s < p.length; s++)
                            h = n(p[s]),
                            w = h.attr("data-permission-name"),
                            w.indexOf(v) == -1 ? h.hide() : (++a,
                            h.show());
                        a == 0 ? (i.hide(),
                        l.hide()) : (o == null && (o = i),
                        i.show(),
                        l.text(a),
                        l.show())
                    }
                    o != null ? (o.trigger("click"),
                    c.hide()) : (n(u[0]).trigger("click"),
                    c.show())
                }
                var r = null, f, e, u, o, s, h;
                if ((i.find(".j-role-form").length == 1 && (r = i.find(".j-role-form")),
                r != null && r.data("_isBound") == null) && (r.data("_isBound", !0),
                r.find("form").ajaxForm({
                    type: "POST",
                    beforeSubmit: function() {
                        r.find("#field-save-button").attr("disabled", "disabled");
                        r.find("#field-save-button").parent().addClass("loading")
                    },
                    success: function(i) {
                        if (i == "")
                            self.location.reload();
                        else {
                            var u = n(i);
                            r.replaceWith(u);
                            t.triggerHtmlInsert(n(document))
                        }
                    }
                }),
                f = r.find("input.j-permission-search"),
                f.length != 0 && f.data("_initialized") == null)) {
                    for (e = r.find(".j-clear-filter"),
                    f.data("_initialized", !0),
                    u = r.find("ul.tabbed-tabs > li"),
                    o = 1; o < u.length; o++)
                        s = n(u[o]),
                        h = n('<b class="filter-match-count j-filter-match-count"/>'),
                        s.append(h);
                    e.click(function() {
                        f.val("");
                        f.focus();
                        f.trigger("change")
                    });
                    f.keyup(c)
                }
            },
            saveRoleOrder: function(i) {
                var r = [];
                n("li.j-role-category").each(function() {
                    var t = n(this)
                      , u = parseInt(t.attr("data-role-category-id"))
                      , i = [];
                    t.find("li.j-role-item").each(function() {
                        var t = n(this);
                        i.push({
                            id: parseInt(t.attr("data-role-id")),
                            order: t.prevAll().length + 1
                        })
                    });
                    r.push({
                        id: u,
                        order: t.prevAll().length + 1,
                        roles: i
                    })
                });
                i && n("#role-manager").mask();
                t.Utils.postWithToken("/cp/user-groups/save-order", {
                    "role-order": JSON.stringify(r)
                }).done(function() {
                    t.Roles.refreshRankState();
                    i && setTimeout(function() {
                        n("#role-manager").unmask()
                    }, 250)
                })
            },
            bindRankLinks: function() {
                n(".j-role-manager").on("click", "a.j-role-category-up", function() {
                    t.Roles.adjustRank(n(this), "up")
                });
                n(".j-role-manager").on("click", "a.j-role-category-down", function() {
                    t.Roles.adjustRank(n(this), "down")
                })
            },
            adjustRank: function(n, i) {
                var r = n.parents("li.j-role-category"), f, u, e;
                if (!r.hasClass("j-protected"))
                    if (f = r.parent(),
                    u = r.prevAll().length - 1,
                    i == "up") {
                        if (e = f.children().eq(u),
                        e.hasClass("j-protected"))
                            return;
                        r.fadeOut(300, function() {
                            r.siblings().eq(u).before(r);
                            t.Roles.saveRoleOrder(!1);
                            r.fadeIn(500)
                        })
                    } else {
                        if (r.is(":last-child"))
                            return;
                        r.fadeOut(300, function() {
                            r.siblings().eq(u + 1).after(r);
                            t.Roles.saveRoleOrder(!1);
                            r.fadeIn(500)
                        })
                    }
            },
            refreshRankState: function() {
                n("li.j-role-category").each(function() {
                    var t = n(this)
                      , u = t.parent()
                      , i = t.find("a.j-role-category-up")
                      , r = t.find("a.j-role-category-down")
                      , f = t.prevAll().length - 1
                      , e = u.children().eq(f);
                    e.hasClass("j-protected") ? i.addClass("disabled") : i.removeClass("disabled");
                    t.nextAll().length == 0 ? r.addClass("disabled") : r.removeClass("disabled")
                })
            },
            attachDialogClose: function() {
                n("#cp-role-members").closest(".ui-dialog").bind("dialogclose", function() {
                    window.location.reload()
                })
            },
            attachDialogCloseNoReload: function() {
                n("#cp-role-members").closest(".ui-dialog").bind("dialogclose", function() {
                    n(".ac_results").remove()
                })
            },
            bindGrantDenySelects: function() {
                n("div#cp-role-edit").delegate("div.permission-field>select", "change", function() {
                    var t = n(this)
                      , i = t.val();
                    t.parent().removeClass("granted").removeClass("denied").removeClass("unset");
                    switch (i) {
                    case "1":
                    case "3":
                        t.parent().addClass("granted");
                        break;
                    case "2":
                    case "4":
                        t.parent().addClass("denied");
                        break;
                    default:
                        t.parent().addClass("unset")
                    }
                })
            },
            attachAddForm: function() {
                n("body").delegate("#cp-role-members form.quick-add #field-name", "result", function() {
                    n(this).closest("form.quick-add").find(":submit").removeAttr("disabled", null)
                });
                n("body").delegate("#cp-role-members form.quick-add", "submit", function() {
                    return !1
                });
                t.runOnHtmlInsert(function(i) {
                    var r = i.find("#cp-role-members").find("form.quick-add");
                    r.length < 1 || r.data("_initialized") != null || (r.data("_initialized", !0),
                    r.find(":submit").attr("disabled", "disabled"),
                    r.ajaxForm({
                        beforeSubmit: function() {
                            var n = r.valid();
                            if (!n)
                                return !1;
                            r.find(":submit").attr("disabled", "disabled")
                        },
                        clearForm: !0,
                        resetForm: !0,
                        success: function(i) {
                            var u = !isNaN(+i), r;
                            u || (t.Roles.attachDialogClose(),
                            r = n("#cp-role-members").find(".listing"),
                            r.append(i),
                            r.attr("data-update", "add"),
                            r.closest(".ui-dialog").center(),
                            t.triggerHtmlInsert(r.parent()),
                            r.find(".no-results").remove())
                        }
                    }),
                    t.Roles.attachDialogCloseNoReload())
                })
            },
            attachRemove: function() {
                n("body").delegate("#cp-role-members .role-member .remove-link", "deleteConfirmPost", function() {
                    var u = n(this)
                      , i = n("#cp-role-members").find(".listing")
                      , r = u.closest(".role-member");
                    i.attr("data-remove", r.data("surrogate-id"));
                    r.remove();
                    i.closest(".ui-dialog").center();
                    t.Roles.attachDialogClose();
                    t.triggerHtmlInsert(i.parent())
                })
            },
            bindBulkActions: function() {
                var t = n("#Roles").find("div.bulk-actions");
                if (t.length > 0)
                    t.on("click", "span", function() {
                        var t = n(this).data("value");
                        n("#Roles").find(".b-tab-contentArea:not(:hidden) .permission-field select").val(t).change()
                    })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        n.Routes = function() {
            n.Routes.Instance = this;
            this.buildRoute = function(t, i) {
                return t + n.Utils.objectToQueryString(i)
            }
        }
    }
    )(Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Shoutbox = {
            dependentScripts: function() {
                return [{
                    dependency: t.User,
                    name: "Cobalt.User"
                }]
            },
            latestCommentID: 0,
            cursorPosition: 0,
            emotes: [],
            shoutboxes: null,
            shoutboxContainers: null,
            isStopped: !1,
            getNewCommentsRoute: null,
            deleteMessageRoute: null,
            addMessageRoute: null,
            showShoutboxRoute: null,
            saveShowShoutboxPreferenceRoute: null,
            deleteIDs: null,
            showShoutbox: null,
            numComments: 20,
            timerFunctionName: "refreshShoutbox",
            template: '<% var isDeleted = CssClass.indexOf("deleted") > 0; %>                   <tr class="message <%= CssClass %>" data-id="<%= ID %>">                        <td class="message-time">[<%= DateCreated %>]&nbsp;<\/td>                        <td class="message-author">                            <div class="author"><a target="_blank" rel="noopener" href="<%= AuthorLink %>"><span class="<%= AuthorLinkCss %>"><%= AuthorName %><\/span><\/a>:<\/div> <%= Text %>                            <% if (CanModerate) { %>                                <div class="message-actions">                                    <ul class="message-actions-icons">                                        <% if (!isDeleted) { %>                                        <li>                                            <a class="message-action-delete tip" title="Delete" data-id="<%= ID %>" href="#">&nbsp;<\/a>                                        <\/li>                                        <% }                                            else { %>                                        <li>                                            <a class="message-action-add tip" title="Undelete" data-id="<%= ID %>" href="#">&nbsp;<\/a>                                        <\/li>                                        <% } %>                                    <\/ul>                                <\/div>                            <% } %>                        <\/td>                    <\/tr>',
            initialize: function() {
                var a = n(".shoutbox-messages-container"), e = n(".shoutbox-messages"), h, r, s;
                if (e.length > 0) {
                    n(".shoutbox-messages").delegate(".message-action-delete, .message-action-add", "click", function(i) {
                        t.Shoutbox.bindModerationMethod(n(this));
                        i.preventDefault()
                    });
                    e.each(function(t, i) {
                        n(i).bind("scrollShoutbox", function(t, i) {
                            if (i) {
                                var r = n(this)[0];
                                r.scrollTop = i.scrollHeight;
                                r.autoScrolledHeight = r.scrollTop;
                                r.autoScrolled = !0
                            }
                        })
                    });
                    e.scroll(function() {
                        var t = n(this)[0];
                        t.autoScrolledHeight !== i && t.scrollTop < t.autoScrolledHeight && (t.userScrolledHeight = t.scrollTop);
                        t.userScrolledHeight !== i && t.autoScrolledHeight !== i && t.userScrolledHeight < t.autoScrolledHeight && t.autoScrolled && (t.scrollTop = t.userScrolledHeight,
                        t.autoScrolled = !1)
                    });
                    h = n(".user-action-pop-out>a");
                    h.click(function(n) {
                        n.preventDefault();
                        t.Shoutbox.popOut()
                    });
                    n(".module.shoutbox.pop-out").length > 0 && n("body").addClass("body-shoutbox-pop-out");
                    var u = n(".user-action-collapse")
                      , c = n(u).find("a")
                      , l = c.find("span");
                    c.click(function() {
                        var i = n(".expand-collapse .collapseable");
                        return n(u).hasClass("user-action-collapse") ? (i.hide(),
                        t.Shoutbox.showShoutbox = !1,
                        n(u).removeClass("user-action-collapse"),
                        n(u).addClass("user-action-expand"),
                        l.text("Expand")) : n(u).hasClass("user-action-expand") && (i.show(),
                        t.Shoutbox.showShoutbox = !0,
                        n(u).removeClass("user-action-expand"),
                        n(u).addClass("user-action-collapse"),
                        l.text("Collapse")),
                        n.post(t.Shoutbox.saveShowShoutboxPreferenceRoute(t.Shoutbox.showShoutbox), null, function(n) {
                            t.Shoutbox.showShoutbox = n;
                            t.User.Preferences.ShowShoutbox = n;
                            t.User.savePreferences(!0)
                        }, "json"),
                        !1
                    });
                    var o = n("label[for='field-roleRequired']")
                      , f = n("#field-roleRequired")
                      , v = f.nextAll("span.field-errors");
                    v.length <= 0 && f.val() == "" && (o.hide(),
                    f.hide());
                    n("#field-isRoleRequired").click(function() {
                        n(this).attr("checked") ? (o.show(),
                        f.show()) : (o.hide(),
                        f.hide())
                    });
                    t.Shoutbox.shoutboxes = e;
                    t.Shoutbox.shoutboxContainers = a;
                    r = n("input.shoutbox-form-message");
                    r.length > 0 && r.keydown(function() {
                        t.Shoutbox.cursorPosition = r.caret().start
                    }).keypress(function() {
                        t.Shoutbox.cursorPosition = r.caret().start
                    }).mousemove(function() {
                        t.Shoutbox.cursorPosition = r.caret().start
                    });
                    n("a#shoutbox-emotes-link").click(function() {
                        var t = n("#shoutbox-emotes-div");
                        return t.is(":visible") ? t.hide() : (t.addClass("modal").css("top", n(this).position().top - (n(t).height() + 15)).css("left", n(this).position().left).css("position", "absolute"),
                        t.show()),
                        !1
                    });
                    n("a.shoutbox-emotes-emote").each(function() {
                        var f = n(this).attr("data-emote"), i, e, r;
                        if (f && (i = f.toString().split(", "),
                        e = n(this).find("img").attr("src"),
                        i))
                            for (r = 0; r < i.length; r++) {
                                var o = i[r]
                                  , s = o.toString().replace("'", "").replace("'", "")
                                  , u = {};
                                u.key = s;
                                u.value = e;
                                t.Shoutbox.emotes.push(u)
                            }
                    });
                    n("a.shoutbox-emotes-emote").each(function() {
                        var i = n(this);
                        i.click(function(u) {
                            var e = i.attr("data-emote").toString().split(",")
                              , o = e[0].replace("'", "").replace("'", "")
                              , f = t.Shoutbox.cursorPosition
                              , s = r.val().substr(0, f + 1) + o + r.val().substr(f);
                            r.val(s);
                            n("#shoutbox-emotes-div").hide();
                            r.focus();
                            u.preventDefault()
                        })
                    });
                    s = n(".shoutbox-form");
                    s.length > 0 && n(s).each(function(r, u) {
                        var f = n(u).find("form");
                        f.ajaxForm({
                            type: "post",
                            beforeSubmit: function() {
                                n(f).find("#field-submit").attr("disabled", "disabled")
                            },
                            success: function(r) {
                                var u = null;
                                try {
                                    u = JSON.parse(r)
                                } catch (e) {}
                                u != null && u.Errors != i ? t.Forms.displayErrors(f, u.Errors) : (t.Shoutbox.addMessageResults(t.Shoutbox.shoutboxes, t.Shoutbox.shoutboxContainers, r, !0),
                                f.find("#field-message").val(""),
                                t.Shoutbox.lastActivity = new Date,
                                t.Shoutbox.isStopped && (t.Shoutbox.isStopped = !1));
                                n(f).find("#field-submit").removeAttr("disabled")
                            },
                            error: function(t, i, r) {
                                n(f).find("#field-submit").removeAttr("disabled");
                                n("#shoutbox-form-errors").html(r)
                            }
                        })
                    });
                    t.Shoutbox.startingMessages && t.Shoutbox.addMessageResults(t.Shoutbox.shoutboxes, t.Shoutbox.shoutboxContainers, {
                        DeletedIDs: [],
                        Comments: t.Shoutbox.startingMessages
                    }, !0, !0);
                    t.PollingThrottle.registerTimerFunction(t.Shoutbox.timerFunctionName, t.Shoutbox.refreshShoutbox, n(".shoutbox"))
                }
            },
            setStartingMessages: function(n) {
                n && (t.Shoutbox.startingMessages = n)
            },
            popOut: function() {
                t.PollingThrottle.removeTimerFunction(t.Shoutbox.timerFunctionName)
            },
            addMessageResults: function(i, r, u, f, e) {
                var s, c, o, h;
                u != null && (u.DeletedIDs.length != 0 || u.Comments.length != 0) && (s = u.Comments,
                s.reverse(),
                r.each(function(r, u) {
                    var e = n(u), c = e.parent(), o, h;
                    for (e.detach(),
                    n.each(s, function(i, r) {
                        var f = e.find("tr[data-id=" + r.ID + "]"), i, u;
                        if (!(f.length > 0)) {
                            for (i = 0; i < t.Shoutbox.emotes.length; i++)
                                while (r.Text.toString().indexOf(t.Shoutbox.emotes[i].key) >= 0)
                                    r.Text = r.Text.toString().replace(t.Shoutbox.emotes[i].key, '<img src="' + t.Shoutbox.emotes[i].value + '" />');
                            u = n.srender(t.Shoutbox.template, r);
                            e.append(u);
                            t.Shoutbox.latestCommentID = r.ID;
                            n(":hidden#field-latestCommentID").val(r.ID);
                            t.NiceDates.runNiceDates()
                        }
                    }),
                    o = e.find("tr.message"); o.length >= t.Shoutbox.numComments; )
                        n(o[0]).remove(),
                        o = e.find("tr.message");
                    c.append(e);
                    h = t.Shoutbox.getShoutboxHeight();
                    f != !0 && n(i).each(function(t, i) {
                        n(i).trigger("scrollShoutbox", {
                            scrollHeight: h
                        })
                    })
                }),
                c = t.Shoutbox.getShoutboxHeight(),
                f == !0 && n(i).each(function(t, i) {
                    n(i).trigger("scrollShoutbox", {
                        scrollHeight: c + 100
                    })
                }),
                o = u.DeletedIDs,
                o.length > 0 && (h = o.join(","),
                h != t.Shoutbox.deleteIDs && (n.each(o, function(t, r) {
                    n(i).find("tr.message[data-id='" + r + "']").remove()
                }),
                t.Shoutbox.deleteIDs = h)),
                e || t.triggerHtmlInsert(t.Shoutbox.shoutboxes))
            },
            refreshShoutbox: function() {
                t.Shoutbox.shoutboxContainers.is(":visible") && n.getJSON(t.Shoutbox.getNewCommentsRoute({
                    amount: t.Shoutbox.numComments,
                    latestCommentID: t.Shoutbox.latestCommentID || i
                }), function(n) {
                    t.Shoutbox.addMessageResults(t.Shoutbox.shoutboxes, t.Shoutbox.shoutboxContainers, n, !1)
                })
            },
            bindModerationMethod: function(i) {
                var u = ""
                  , r = parseInt(n(i).attr("data-id"))
                  , f = n(i).hasClass("message-action-add")
                  , e = n(i).hasClass("message-action-delete");
                f ? u = t.Shoutbox.addMessageRoute(r) : e && (u = t.Shoutbox.deleteMessageRoute(r));
                r && n.post(u, null, function() {
                    var o = n(i).parent("li")
                      , u = n("tr.message[data-id='" + r + "']");
                    o && (f ? (n(o).attr("title", L.Global.Forums.Delete()),
                    n(u).removeClass("comment-deleted"),
                    n(u).addClass("comment-normal"),
                    n(i).removeClass("message-action-add"),
                    n(i).addClass("message-action-delete")) : e && (n(o).attr("title", L.Global.Forums.Add()),
                    n(u).removeClass("comment-normal"),
                    n(u).addClass("comment-deleted"),
                    n(i).removeClass("message-action-delete"),
                    n(i).addClass("message-action-add")));
                    n(i).unbind("click");
                    n(i).click(function() {
                        return t.Shoutbox.bindModerationMethod(n(this)),
                        !1
                    })
                }, "json")
            },
            getShoutboxHeight: function() {
                var r = t.Shoutbox.shoutboxContainers
                  , i = r.innerHeight();
                return n.browser.msie && (i = r.height()),
                n(r).each(function(t, r) {
                    var u = n(r).innerHeight();
                    n.browser.msie && (u = n(r).height());
                    u > i && (i = u)
                }),
                i
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        var i, r = !1;
        t.Smilies = {
            dependentScripts: function() {
                return [{
                    dependency: t.Listing,
                    name: "Cobalt.Listing"
                }]
            },
            initialize: function() {},
            smiliesReady: function() {},
            showLoading: function() {
                i.find("#smilies-manager").addClass("loading")
            },
            hideLoading: function() {
                i.find("#smilies-manager").removeClass("loading")
            },
            hideModal: function() {
                i.length > 0 && (i.dialog("destroy"),
                i.remove(),
                r = !1,
                n("body").off("click", "#smiley-listing > li"))
            },
            showModal: function(u) {
                n("body").on("click", "#smiley-listing > li", function(i) {
                    i.preventDefault();
                    var f = n(this)
                      , r = f.attr("data-text-replacement");
                    u && tinyMCE && tinyMCE.editors.length ? (u.selection.moveToBookmark(u.selection.getBookmark()),
                    u.execCommand("mceInsertContent", !1, r)) : n.markItUp({
                        replaceWith: r
                    });
                    t.Smilies.hideModal()
                });
                r || (r = !0,
                i = n('<div id="smiley-modal">'),
                i.dialog({
                    modal: !0,
                    height: 275,
                    width: 330,
                    title: "Insert a Smiley",
                    resizable: !1,
                    close: function(t) {
                        n(t.target).dialog("destroy");
                        n(t.target).remove();
                        r = !1
                    }
                }),
                i.parent().center(),
                i.mask(),
                n.get(t.Routes.Instance.SmileyGetSmilies(), function(r) {
                    var c = n(r);
                    i.unmask();
                    i.append(c);
                    t.triggerHtmlInsert(i);
                    i.dialog({
                        position: "center"
                    });
                    var s, u = [], o = 0, f = 0, e = 0, h = n("#smilies-manager").outerWidth() - n("#smilies-manager button#right-arrow").outerWidth();
                    for (n("#smiley-modal ul.tabbed-tabs li").each(function(t) {
                        u[t] = n(this).width()
                    }),
                    s = 0; s < u.length; s++)
                        o = u[s] + o;
                    n("#smilies-manager button#left-arrow").click(function() {
                        if (f == 0 || o < h)
                            return !1;
                        f--;
                        n("#smiley-modal ul.tabbed-tabs").css("left", "-" + (e - u[f]) + "px");
                        e = e - u[f]
                    });
                    n("#smilies-manager button#right-arrow").click(function() {
                        if (o - (e + u[f]) <= h)
                            n("#smiley-modal ul.tabbed-tabs").css("left", "-" + (o - h + 18) + "px");
                        else {
                            if (o < h)
                                return !1;
                            n("#smiley-modal ul.tabbed-tabs").css("left", "-" + (u[f] + e) + "px");
                            f++;
                            e = u[f - 1] + e
                        }
                    })
                }))
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    var n = n || {}
      , t = t || [];
    n.trackSocial = function(t, i) {
        n.trackFacebook(t, i);
        n.trackTwitter(t, i)
    }
    ;
    n.trackFacebook = function(i, r) {
        var u = n.buildTrackerName_(r);
        try {
            FB && FB.Event && FB.Event.subscribe && (FB.Event.subscribe("edge.create", function(n) {
                t.push([u + "_trackSocial", "facebook", "like", n, i])
            }),
            FB.Event.subscribe("edge.remove", function(n) {
                t.push([u + "_trackSocial", "facebook", "unlike", n, i])
            }),
            FB.Event.subscribe("message.send", function(n) {
                t.push([u + "_trackSocial", "facebook", "send", n, i])
            }))
        } catch (f) {}
    }
    ;
    n.buildTrackerName_ = function(n) {
        return n ? n + "." : ""
    }
    ;
    n.trackTwitter = function(i, r) {
        var u = n.buildTrackerName_(r);
        try {
            twttr && twttr.events && twttr.events.bind && twttr.events.bind("tweet", function(r) {
                if (r) {
                    var f;
                    r.target && r.target.nodeName == "IFRAME" && (f = n.extractParamFromUri_(r.target.src, "url"));
                    t.push([u + "_trackSocial", "twitter", "tweet", f, i])
                }
            })
        } catch (f) {}
    }
    ;
    n.extractParamFromUri_ = function(n, t) {
        var n, i, f, e, r, u;
        if (n && (n = n.split("#")[0],
        i = n.split("?"),
        i.length != 1)) {
            for (f = decodeURI(i[1]),
            t += "=",
            e = f.split("&"),
            r = 0; u = e[r]; ++r)
                if (u.indexOf(t) === 0)
                    return unescape(u.split("=")[1]);
            return
        }
    }
    ,
    function(n, t) {
        t.Social = {
            initialize: function() {
                n("button.social-share").each(function() {
                    var i = n(this)
                      , t = i.closest("div.social-container")
                      , r = t.find(".social-sharing");
                    r.hide();
                    i.on("click", function() {
                        t.toggleClass("visible");
                        r.show();
                        i.hide();
                        t.hasClass("visible") && (FB != null && FB.XFBML.parse(t.find(".facebook").get(0)),
                        twttr != null && twttr.widgets.load(t.find(".twitter").get(0)))
                    })
                })
            }
        }
    }(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Social_Facebook = {
            isLoaded: !1,
            initialize: function() {
                window.fbAsyncInit = function() {
                    FB.init({
                        appId: t.Constants.FacebookAppID,
                        status: !0,
                        cookie: !0,
                        xfbml: !1
                    });
                    window._ga != null && window._ga.trackFacebook();
                    n(t.Social_Facebook).trigger("facebookLoaded")
                }
                ;
                var r = document, i, u = "facebook-jssdk";
                r.getElementById(u) || (i = r.createElement("script"),
                i.id = u,
                i.async = !0,
                i.src = "//connect.facebook.net/en_US/all.js",
                i.defer = !0,
                r.getElementsByTagName("head")[0].appendChild(i))
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.Social_Twitter = {
            initialize: function() {
                n(".twitter-share").removeClass("twitter-share-button");
                window.twttr = function(n, t, i) {
                    var u, f = n.getElementsByTagName(t)[0], r = window.twttr || {};
                    return n.getElementById(i) ? r : (u = n.createElement(t),
                    u.id = i,
                    u.src = "https://platform.twitter.com/widgets.js",
                    f.parentNode.insertBefore(u, f),
                    r._e = [],
                    r.ready = function(n) {
                        r._e.push(n)
                    }
                    ,
                    window._ga && window._ga.trackTwitter(),
                    r)
                }(document, "script", "twitter-wjs");
                twttr.ready(function() {
                    n(".twitter-share").addClass("twitter-share-button")
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.SourcePoint = {
            site: "Curse",
            initialize: function() {
                var n = document.createElement("div");
                document.body.classList.add("sourcepoint-blocked");
                n.classList.add("sourcepoint-wrapper");
                t.SourcePoint.createSiteLogo(n);
                t.SourcePoint.createHeader(n);
                t.SourcePoint.createParagraph(n);
                t.SourcePoint.createButton(n);
                document.body.appendChild(n)
            },
            createSiteLogo: function(n) {
                var t = document.createElement("div");
                n.appendChild(t)
            },
            createHeader: function(n) {
                var t = document.createElement("h2");
                t.innerHTML = "It looks like you're running an ad blocker :(";
                n.appendChild(t)
            },
            createParagraph: function(n) {
                var i = document.createElement("p");
                i.innerHTML = "Your ad blocker is interfering with the operation of this site. Please show your support and whitelist " + t.SourcePoint.site;
                n.appendChild(i)
            },
            createButton: function(n) {
                var i = document.createElement("button");
                i.innerHTML = "I don't want to support " + t.SourcePoint.site;
                i.addEventListener("click", function(n) {
                    n.preventDefault();
                    document.body.removeChild(n.target.parentNode);
                    document.body.classList.remove("sourcepoint-blocked")
                });
                n.appendChild(i)
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.StickyElement = {
            parentHeight: 0,
            parentTop: 0,
            parentBottom: 0,
            scrollTop: 0,
            elHeight: 0,
            el: null,
            parent: null,
            initialize: function(n) {
                t.Throttle.initialize();
                n.css({
                    position: "sticky",
                    top: "20px",
                    "align-self": "flex-start"
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n) {
        var t = function() {
            function t() {}
            return t.EnableMobileNavigation = function(n, t) {
                var i = this;
                this.registerRowClickHandler(n, t);
                $(window).on("resize", function() {
                    i.registerRowClickHandler(n, t)
                })
            }
            ,
            t.registerRowClickHandler = function(t, i) {
                var r = $(window).width();
                $(t + " tr").each(function() {
                    $(this).off("click", n.Table.rowClickHandler);
                    var t = {
                        linkSelector: i
                    };
                    if (r <= 640)
                        $(this).on("click", t, n.Table.rowClickHandler)
                })
            }
            ,
            t.rowClickHandler = function(n) {
                var t = $(this).find(n.data.linkSelector).attr("href");
                n.preventDefault();
                t != "undefined" && (window.location.href = t)
            }
            ,
            t
        }();
        n.Table = t
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t, i) {
        var r = 0;
        t.Tabs = {
            priority: 1,
            initialize: function() {
                t.runOnHtmlInsert(t.Tabs.addDelayedLoadingSupport);
                t.runOnHtmlInsert(t.Tabs.addTabSupport);
                t.runOnHtmlInsert(t.Tabs.addLegacyTabSupport)
            },
            addDelayedLoadingSupport: function(r) {
                r.find(".j-tab-content").each(function() {
                    var r = n(this), f = r.find(".listing[data-delay-load-url]").length > 0, u;
                    f && (u = n(".j-tab-search").find("ul.tabbed-tabs:first > li"),
                    u.each(function(u, f) {
                        n(f).bind("tabsselect", function(u, f) {
                            var f = n(f), e, o, s;
                            f.length > 0 && (e = f.find(".listing"),
                            e.length > 0 && (o = e.attr("data-delay-load-url"),
                            o != i && o != "" && (s = e.attr("data-delay-load-done"),
                            s != i && s || (r.mask(),
                            n.get(o, null, function(n) {
                                e.find("tbody").html(n);
                                t.triggerHtmlInsert(e.parent());
                                e.attr("data-delay-load-done", !0);
                                r.unmask()
                            })))))
                        })
                    }))
                })
            },
            addLegacyTabSupport: function(t) {
                t.find(".tab-container").each(function() {
                    n("div.tab-tabs-container").children("span.tab.tab-selected").each(function() {
                        var t = n(this).attr("data-tab-id");
                        n("div.tab-content-container").children("div.tab-content#" + t).show()
                    });
                    n("span.tab").click(function() {
                        var t = n(this).attr("data-tab-id");
                        return n(this).siblings().removeClass("tab-selected"),
                        n(this).addClass("tab-selected"),
                        n("div.tab-content-container > div.tab-content").hide(),
                        n("div.tab-content-container > div.tab-content#" + t).show(),
                        !1
                    })
                })
            },
            addTabSupport: function(u) {
                u.find(".tabbed-container").each(function() {
                    var e = n(this), u = e.find("ul.tabbed-tabs:first > li"), c, s, f, h, l, a;
                    if (!e[0].tabsInitialized && u.length != 0) {
                        e[0].tabsInitialized = !0;
                        var v = e[0].id || "t" + ++r
                          , o = null
                          , y = !n(this).hasClass("no-view-state");
                        if (y) {
                            for (c = [],
                            s = 0; s < u.length; s++)
                                c.push(n(u[s].children[0]).attr("href").replace("#", ""));
                            f = t.ViewStateManager.getViewState(v)
                        }
                        f != null && f.value != null && f.value != i && c.indexOf(f.value) > -1 ? (o = "#tab-" + f.value,
                        u.find("a[href=#" + f.value + "]").length == 0 && (o = null)) : (h = u.filter(".selected"),
                        h.length == 0 && (h = n(u[0])),
                        l = h.find("a").attr("href"),
                        l.length > 0 && (o = "#tab-" + l.substring(1)));
                        a = e.find(".tabbed-pager");
                        a.length > 0 && t.Tabs.setupTabPager(a, u, o, e, f);
                        u.each(function() {
                            var c = n(this).find("a")
                              , i = n(this).find("a").attr("href");
                            n(this).find("a").removeAttr("href");
                            i = i.substring(i.indexOf("#") + 1);
                            var r = "#tab-" + i
                              , s = n(e).find(r)
                              , h = {
                                viewState: f,
                                tab: n(this),
                                tabID: i,
                                content: s,
                                tabs: u
                            };
                            n(this).hasClass("tab-disabled") || n(this).bind("click", h, t.Tabs.selectTab);
                            n(this).data("tabContent", s);
                            r == o && t.Tabs.selectTab({
                                data: h,
                                isFirstLoad: !0
                            })
                        })
                    }
                })
            },
            setupTabPager: function(i, r, u) {
                var f = i.find(".tabbed-pager-next"), e = i.find(".tabbed-pager-prev"), s, h, o, c;
                if (f.length > 0 && e.length > 0) {
                    for (s = [],
                    h = 0; h < r.length; h++)
                        o = n(r[h]).find("a").attr("href"),
                        o = o.substring(o.indexOf("#") + 1),
                        s.push("#tab-" + o);
                    var l = s.indexOf(u)
                      , a = l + 1
                      , v = l - 1;
                    a >= s.length ? f.addClass("disabled") : f.removeClass("disabled");
                    v <= 0 ? e.addClass("disabled") : e.removeClass("disabled");
                    c = {
                        tabs: r,
                        nextTabIndex: a,
                        previousTabIndex: v,
                        nextTabButton: f,
                        previousTabButton: e
                    };
                    f.bind("click", c, t.Tabs.selectNextTab);
                    e.bind("click", c, t.Tabs.selectPreviousTab)
                }
            },
            selectNextTab: function(i) {
                i.preventDefault();
                var r = n(i.data.tabs[i.data.nextTabIndex]);
                r.length > 0 && (r.click(),
                i.data.nextTabButton.unbind("click"),
                i.data.previousTabButton.unbind("click"),
                i.data.nextTabIndex++,
                i.data.previousTabIndex++,
                i.data.nextTabButton.bind("click", i.data, t.Tabs.selectNextTab),
                i.data.previousTabButton.bind("click", i.data, t.Tabs.selectPreviousTab),
                i.data.nextTabIndex >= i.data.tabs.length ? i.data.nextTabButton.addClass("disabled") : i.data.nextTabButton.removeClass("disabled"),
                i.data.previousTabIndex >= 0 && i.data.previousTabButton.removeClass("disabled"))
            },
            selectPreviousTab: function(i) {
                i.preventDefault();
                var r = n(i.data.tabs[i.data.previousTabIndex]);
                r.length > 0 && (r.click(),
                i.data.nextTabButton.unbind("click"),
                i.data.previousTabButton.unbind("click"),
                i.data.nextTabIndex--,
                i.data.previousTabIndex--,
                i.data.previousTabButton.bind("click", i.data, t.Tabs.selectPreviousTab),
                i.data.nextTabButton.bind("click", i.data, t.Tabs.selectNextTab),
                i.data.previousTabIndex < 0 ? i.data.previousTabButton.addClass("disabled") : i.data.previousTabButton.removeClass("disabled"),
                i.data.nextTabIndex < i.data.tabs.length && i.data.nextTabButton.removeClass("disabled"))
            },
            selectTab: function(i) {
                var u = i.data.content
                  , r = i.data.tab
                  , e = i.data.tabID
                  , o = i.data.tabs
                  , f = i.data.viewState;
                f == null || i.isFirstLoad || n(r).hasClass("first-load") || f.setValue(e);
                n(r).removeClass("first-load");
                t.Tabs.hideContent(u);
                o.removeClass("selected");
                r.addClass("selected");
                t.Tabs.showContent(u);
                r.trigger("tabsselect", u, r)
            },
            showContent: function(n) {
                n.show()
            },
            hideContent: function(n) {
                n.siblings().hide()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.TagField = function(i) {
            var r = this;
            this.tagsField = i;
            this.newTagField = n("<input>").attr("type", "text").attr("name", "newtagfield").attr("placeholder", i.attr("placeholder")).addClass("tags-field").attr("data-each-validation-length-message", this.tagsField.attr("data-each-validation-length-message")).attr("data-each-validation-length", this.tagsField.attr("data-each-validation-length"));
            this.autoCompleteMenu = null;
            this.hasAutoComplete = !1;
            this.addCurrentTags = function() {
                var t = r.tagsField.val()
                  , i = t.split(",");
                n(i).each(function(n, t) {
                    t != "" && r.addTag(t)
                })
            }
            ;
            this.appendTag = function(t) {
                var u, i;
                if (r.newTagField.val(""),
                r.autoCompleteMenu != null && (n(".modal.tag-autocomplete").hide(),
                r.hasAutoComplete = !1),
                t != "") {
                    if (r.tagsField.val().length > 0) {
                        for (u = r.tagsField.val().split(","),
                        i = 0; i < u.length; i++)
                            if (u[i] == t)
                                return;
                        r.tagsField.val(r.tagsField.val() + "," + t)
                    } else
                        r.tagsField.val(t);
                    r.addTag(t)
                }
            }
            ;
            this.addTag = function(t) {
                var i = r.newTagField.parent().find(".tags-cloud"), f;
                i.length <= 0 && (i = n("<ul>").addClass("flat-list").addClass("tags-cloud"),
                f = n("<div>").addClass("tag-cloud").append(i),
                n(r.newTagField).parent().append(f));
                var e = n("<a>").attr("href", "#").addClass("tag-remove").text("remove")
                  , o = n("<span>").addClass("tag-text").html(t)
                  , u = n("<li>").addClass("tag");
                u.append(e).append(o);
                e.click(function(t) {
                    for (var o = r.tagsField.val(), f = o.split(","), e = [], s = n(this).siblings(".tag-text").text(), i = 0; i < f.length; i++)
                        f[i] != s && e.push(f[i]);
                    r.tagsField.val(e.join(","));
                    r.tagsField.val() == "" ? u.parent().remove() : u.remove();
                    t.preventDefault()
                });
                i.append(u)
            }
            ;
            var e = this.tagsField.attr("data-each-validation-length")
              , f = e.split("..")
              , o = f[0]
              , s = f[1]
              , u = this.tagsField.parents("form");
            this.tagsField.parent().append(this.newTagField);
            this.tagsField.removeAttr("data-validation-optional").removeAttr("data-each-validation-length").removeAttr("maxlength");
            u.length > 0 && u.submit(function() {
                var n = r.newTagField.val();
                r.newTagField.valid() && r.appendTag(n)
            });
            this.newTagField.keydown(function(i) {
                var f, e;
                i.which == 13 && (r.hasAutoComplete || (f = n(this).val(),
                n(this).valid() ? (n(this).val(""),
                r.appendTag(f)) : f == "" && (e = {
                    Errors: {}
                },
                e.Errors[n(this).attr("id")] = [L.Global.ErrorMessages.TagEmpty()],
                t.Forms.displayErrors(u, e.Errors))),
                i.preventDefault())
            });
            this.addCurrentTags();
            this.tagsField.hide();
            this.autoCompleteMenu = this.newTagField.autocomplete(t.Routes.Instance.TagAjaxGetTags(), {
                minChars: 3,
                scroll: !1,
                dataType: "json",
                selectFirst: !1,
                parse: function(n) {
                    var i = [], t;
                    if (n)
                        for (t = 0; t < n.length; t++)
                            i[t] = {
                                data: n[t],
                                value: n[t].ID,
                                result: n[t].Text
                            };
                    return i
                },
                highlight: function(n, t) {
                    return r.hasAutoComplete = !0,
                    n.replace(t, "<strong>" + t + "<\/strong>")
                },
                formatItem: function(t) {
                    var i = n("<div>").html(t.Text);
                    return i.html()
                },
                resultsClass: "modal tag-autocomplete"
            }).result(function(n, t) {
                r.appendTag(t.Text)
            }).hideResults(function() {
                r.hasAutoComplete = !1
            })
        }
        ;
        t.Tags = {
            tagsField: null,
            newTagField: null,
            autoCompleteMenu: null,
            hasAutoComplete: !1,
            initialize: function() {
                t.runOnHtmlInsert(function() {
                    var i = n("input.j-tags-field");
                    i.each(function() {
                        var i = n(this);
                        i.data("CobaltTagInit") == null && (i.data("CobaltTagInit", !0),
                        n.extend(i, new t.TagField(i)))
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        var r = !1;
        t.TemplateAndSkin = {
            skinMap: "",
            initalTemplateID: "",
            initialSkinID: "",
            siteID: null,
            initialize: function(r, u, f, e) {
                var s, h, o, c;
                t.TemplateAndSkin.skinMap = r;
                t.TemplateAndSkin.initalTemplateID = u;
                t.TemplateAndSkin.initialSkinID = f;
                t.TemplateAndSkin.siteID = e;
                u != null ? t.TemplateAndSkin.selectTemplate(u) : (s = n("li[data-template-id]")[0],
                n(s) != i && n(s).length > 0 && t.TemplateAndSkin.selectTemplate(n(s).attr("data-template-id")));
                f != null ? t.TemplateAndSkin.skinMap[u] != i && (h = n.grep(t.TemplateAndSkin.skinMap[u], function(n) {
                    return n.id == f
                }),
                o = h[0],
                o != null && t.TemplateAndSkin.selectSkin(o.id, o, o.previewUrl)) : n("img#preview").attr("src", t.TemplateAndSkin.noPreview);
                n(".template-selector").click(function(i) {
                    var u = parseInt(n(this).attr("data-index")), r;
                    t.TemplateAndSkin.selectTemplate(u);
                    r = h[u];
                    r != null && t.TemplateAndSkin.selectSkin(r.id, r, r.previewUrl);
                    i.preventDefault()
                });
                c = n("li[data-template-id]");
                c.each(function() {
                    var t = this;
                    n(t).tooltip({
                        content: n(t).attr("data-qtip")
                    })
                })
            },
            noPreview: "/content/skins/global/images/skin-preview.jpg",
            selectTemplate: function(u) {
                var h, f, e, o, s;
                n("#Template").val(u);
                n("#Skin").val("");
                h = n(".template-selector[data-index=" + u + "]").text();
                n("ul#template-selection li").removeClass("selected");
                f = n("li[data-template-id='" + u + "']");
                f.addClass("selected");
                n("#selectedTemplateName").html(h);
                n("#skin-selection, #skin-selection-detailed").empty();
                r = f.attr("data-is-topnav") === "true";
                r ? n("#widget-area-navigation").hide() : n("#widget-area-navigation").show().addClass("widget-widget-locked");
                t.TemplateAndSkin.selectSkin("", null, t.TemplateAndSkin.noPreview);
                t.TemplateAndSkin.skinMap[u] != i && n.each(t.TemplateAndSkin.skinMap[u], function() {
                    var i = this, u = i != null && i.cssClass.search("disabled") > -1, f = n("ul#skin-selection-detailed"), r;
                    n(f).append(n("<li>").addClass(i.cssClass).attr("data-skin-id", i.id).attr("data-qtip", '<img src="' + i.previewUrl + '" />').append(function() {
                        return u ? n("<img>").attr("src", i.previewSmallUrl) : n("<a>").attr("href", "#").append(n("<img>").attr("src", i.previewSmallUrl)).click(function(n) {
                            t.TemplateAndSkin.selectSkin(i.id, i, i.previewUrl);
                            n.preventDefault()
                        })
                    }).append(n("<div>").addClass("skin-caption").append(function() {
                        var r = n("<a>").attr("href", "#").append(i.name);
                        return u || (r = r.click(function(n) {
                            t.TemplateAndSkin.selectSkin(i.id, i, i.previewUrl);
                            n.preventDefault()
                        })),
                        r
                    })));
                    r = n("li[data-skin-id='" + i.id + "']");
                    n(r).tooltip({
                        content: n(r).attr("data-qtip")
                    })
                });
                e = n("li[data-skin-id]")[0];
                e && (o = n(e).attr("data-skin-id"),
                n(t.TemplateAndSkin.skinMap[u]).each(function(n, t) {
                    t.id == o && (s = t)
                }),
                t.TemplateAndSkin.selectSkin(o, s, s.previewUrl));
                t.Widget.getWidgetSelector(u, t.TemplateAndSkin.siteID, function() {
                    r ? n("#widget-area-navigation").hide() : n("#widget-area-navigation").show().addClass("widget-widget-locked")
                })
            },
            selectSkin: function(t, i, r) {
                var u = "--", f;
                i != null && (u = i.Name);
                n("#Skin").val(t);
                f = n("ul#skin-selection li, ul#skin-selection-detailed li");
                f.removeClass("selected");
                t != "" && n("li[data-skin-id='" + t + "']").addClass("selected");
                n("#selectedSkinName").html(u);
                n("fieldset#selected img#preview").attr("src", r)
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    function n(n, t, i) {
        t || (t = 250);
        var r, u;
        return function() {
            var e = i || this
              , f = +new Date
              , o = arguments;
            r && f < r + t ? (clearTimeout(u),
            u = setTimeout(function() {
                r = f;
                n.apply(e, o)
            }, t + r - f)) : (r = f,
            n.apply(e, o))
        }
    }
    (function(t, i) {
        i.Throttle = {
            isInit: !1,
            initialize: function() {
                return i.Throttle.isInit ? console.debug("Cobalt.Throttle is being initialized again.") : (i.Throttle.isInit = !0,
                window.throttle = n),
                !1
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    var n = undefined && undefined.__extends || function() {
        var n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (n[i] = t[i])
        }
        ;
        return function(t, i) {
            function r() {
                this.constructor = t
            }
            n(t, i);
            t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
            new r)
        }
    }();
    (function(t) {
        var i = function() {
            function n() {}
            return n.initialize = function() {
                this.ListingComments = $("ul.listing-comments");
                this.BindEvents()
            }
            ,
            n.BindEvents = function() {
                this.ListingComments.delegate("ul.p-comment-stats li:last-child", "click", this.getEventHandler("memberDetailsClick"))
            }
            ,
            n.getEventHandler = function(n) {
                var t = this;
                if (n && this.EventHandlers[n] !== undefined)
                    return function() {
                        var i = Array.prototype.slice.call(arguments, 0);
                        i.unshift($(this));
                        t.EventHandlers[n].apply(t, i)
                    }
            }
            ,
            n
        }();
        t.Tidbit = i,
        function(t) {
            var i = function(t) {
                function i() {
                    return t !== null && t.apply(this, arguments) || this
                }
                return n(i, t),
                i.memberDetailsClick = function(n) {
                    window.innerWidth <= 640 && n.parent().toggleClass("open")
                }
                ,
                i
            }(t);
            t.EventHandlers = i
        }(i = t.Tidbit || (t.Tidbit = {}))
    }
    )(Cobalt || (window.Cobalt = {}))
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.TinyMCE = {
            dependentScripts: function() {
                return [{
                    dependency: t.User,
                    name: "Cobalt.User"
                }]
            },
            fontColorEnabled: !0,
            fontSizeEnabled: !0,
            fontFamilyEnabled: !0,
            textAlignmentEnabled: !0,
            smiliesEnabled: !0,
            initialized: !1,
            loadAttempts: 0,
            extraPlugins: "",
            extraCustomPlugins: "",
            extraButtons: "",
            extended_valid_elements: "style",
            selector: "textarea[class*='j-wysiwyg-editor']",
            optionsOverridden: !1,
            forceSimpleBBCodeEditor: !1,
            editors: {},
            options: {},
            setupPlaceholder: function(t) {
                var i = n("#" + t.id)
                  , r = i.attr("placeholder");
                if (typeof r != "undefined" && r !== !1) {
                    t.placeholder = i.attr("placeholder");
                    t.on("init", function(n) {
                        n.getContent().length == 0 && (n.setContent(i.attr("placeholder")),
                        n.placeholder = n.getContent())
                    });
                    t.on("init", function(n) {
                        tinymce.dom.Event.add(n.getBody(), "focus", function() {
                            n.getContent() == n.placeholder && n.setContent("")
                        })
                    });
                    t.on("init", function(n) {
                        tinymce.dom.Event.add(n.getBody(), "blur", function() {
                            n.getContent().length == 0 && (n.setContent(n.placeholder),
                            n.placeholder = n.getContent())
                        })
                    })
                }
            },
            initialize: function() {
                t.TinyMCE.initialized || (t.TinyMCE.options.content_css = t.CMS.getTinyMCECss(),
                t.runOnHtmlInsert(t.TinyMCE.loadTinyMCE),
                t.TinyMCE.initialized = !0)
            },
            loadTinyMCE: function(n) {
                var r, u, i;
                if (!t.TinyMCE.optionsOverridden && (r = n.find(".j-markup-type").val(),
                r || (r = n.parents(".j-comment").attr("data-markup-type")),
                r))
                    switch (r) {
                    case "3":
                    case "7":
                        t.TinyMCE.bbcodeOptions();
                        break;
                    case "1":
                    default:
                        t.TinyMCE.htmlOptions()
                    }
                u = n.find("textarea.text-editor");
                u.length > 0 && (window.tinyMCE ? t.TinyMCE._actuallyLoadTinyMCE(u) : (i = document.createElement("script"),
                i.onload = function() {
                    window.tinyMCE && t.TinyMCE._actuallyLoadTinyMCE(u)
                }
                ,
                i.setAttribute("type", "text/javascript"),
                i.setAttribute("src", t.TinyMCE.url),
                typeof i != "undefined" && document.getElementsByTagName("head")[0].appendChild(i)))
            },
            _actuallyLoadTinyMCE: function(i) {
                window.tinyMCE && (n.log("Initializing tinymce editor(s)."),
                i.each(function() {
                    var i = n(this).attr("id"), r = window.tinymce.EditorManager.get(i), u;
                    r || (u = t.TinyMCE.options,
                    delete u.selector,
                    r = new tinymce.Editor(i,u,tinymce.EditorManager),
                    r.render(),
                    n.log("Called render for tinymce editor: " + i))
                }))
            },
            removeEditor: function(n) {
                var u = n.find(t.TinyMCE.selector)
                  , r = u.attr("id")
                  , i = t.TinyMCE.editors[r];
                i && (i.remove(),
                i.destroy(),
                delete t.TinyMCE.editors[r])
            },
            _enableBlockQuoteBreakout: function(t) {
                tinymce.dom.Event.bind(t.getBody(), "keydown", function(i) {
                    if (i.which == 40) {
                        var r = n(t.getBody()).find(":last").parentsUntil("body");
                        r.is("blockquote") && n(t.getBody()).append('<br data-mce-bogus="1" />')
                    }
                })
            },
            _addExtraPlugins: function(n) {
                return t.TinyMCE.extraPlugins != "" && t.TinyMCE.extraPlugins != null && (n += "," + t.TinyMCE.extraPlugins),
                n
            },
            _addExtraCustomPlugins: function(r) {
                var e = n(r.split(",")), u = {}, f;
                return e.each(function() {
                    u[this] = t.TinyMCE.customPluginUrl + "/" + this + "/plugin.js"
                }),
                t.TinyMCE.extraCustomPlugins !== i && t.TinyMCE.extraCustomPlugins !== "" && (f = n(t.TinyMCE.extraCustomPlugins.split(",")),
                f.each(function() {
                    u[this] || (u[this] = t.TinyMCE.customPluginUrl + "/" + this + "/plugin.js")
                })),
                u
            },
            _addExtraButtons: function(n) {
                return t.TinyMCE.extraButtons != "" && t.TinyMCE.extraButtons != null && (n += ",|," + t.TinyMCE.extraButtons),
                n
            },
            _removeDisabledControls: function(n) {
                return t.CMS.initialized || (t.TinyMCE.fontColorEnabled || (n = n.replace(/(\s*|,?)forecolor/g, "")),
                t.TinyMCE.fontFamilyEnabled || (n = n.replace(/(\s*|,?)fontselect/g, "")),
                t.TinyMCE.fontSizeEnabled || (n = n.replace(/(\s*|,?)fontsizeselect/g, "")),
                t.TinyMCE.smiliesEnabled || (n = n.replace(/(\s*|,?)smilies/g, "")),
                t.TinyMCE.textAlignmentEnabled || (n = n.replace(/(\s*|,?)alignleft/g, ""),
                n = n.replace(/(\s*|,?)aligncenter/g, ""),
                n = n.replace(/(\s*|,?)alignright/g, ""))),
                n
            },
            tinyMCELoaded: function(r) {
                var o, u, f, e, s;
                if (r) {
                    if (o = r.id,
                    u = r.target,
                    u) {
                        if (f = i,
                        u.editors)
                            for (e = 0; e < u.editors.length; e++)
                                if (u.editors[e].id === o && n("#" + o).hasClass("j-wysiwyg-editor")) {
                                    f = u.editors[e];
                                    break
                                }
                        f && (t.TinyMCE.editors[f.id] = f,
                        s = n.Event("EditorLoaded", {
                            editor: f
                        }),
                        n(t.TinyMCE).trigger(s))
                    }
                    n(r.getElement()).parents(".j-loading-message").removeClass("unloaded")
                }
            },
            focusEditor: function(t) {
                t.focus();
                t.selection.select(t.getBody(), !0);
                t.selection.collapse(!1);
                var i = n(t.getDoc());
                i.scrollTop(i.height())
            },
            unload: function() {
                typeof tinyMCE != "undefined" && tinymce.each(tinyMCE.editors, function(n) {
                    typeof n != "undefined" && (tinyMCE.execCommand("mceRemoveControl", !1, n.id),
                    tinymce.remove(n))
                })
            },
            htmlOptions: function() {
                t.TinyMCE.options = {
                    skin_url: t.TinyMCE.skin_url,
                    setup: function(i) {
                        t.TinyMCE.setupPlaceholder(i);
                        i.on("init", function(i) {
                            var r = i.target;
                            t.TinyMCE._enableBlockQuoteBreakout(r);
                            tinymce.dom.Event.bind(r.getBody(), "focus", function() {
                                n(document).trigger("tinymce-focus", n("#" + r.id))
                            });
                            n("#" + r.id + "_blockquote").on("click", function() {
                                r.dom.add(r.getBody(), "p", null, "<br />")
                            });
                            t.TinyMCE.tinyMCELoaded(r)
                        })
                    },
                    doctype: "<!DOCTYPE html>",
                    end_container_on_empty_block: !0,
                    body_class: "text u-typography-format",
                    content_css: t.CMS.getTinyMCECss(),
                    selector: t.TinyMCE.selector,
                    menubar: !1,
                    height: "250px",
                    width: "100%",
                    formats: {
                        bold: {
                            inline: "strong"
                        },
                        italic: {
                            inline: "em"
                        },
                        strikethrough: {
                            inline: "del"
                        },
                        address: {
                            inline: "addr"
                        },
                        removeformat: [{
                            selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del",
                            remove: "all",
                            split: !0,
                            expand: !1,
                            block_expand: !0,
                            deep: !0
                        }, {
                            selector: "span",
                            attributes: ["style", "class"],
                            remove: "empty",
                            split: !0,
                            expand: !1,
                            deep: !0
                        }, {
                            selector: "*",
                            attributes: ["style", "class"],
                            split: !1,
                            expand: !1,
                            deep: !0
                        }]
                    },
                    plugins: t.TinyMCE._addExtraPlugins("code,hr,image,link,lists,media,paste,tabfocus,textcolor"),
                    external_plugins: t.TinyMCE._addExtraCustomPlugins("smilies,spoiler,videoembed,codeBlock,dieroller,dieTranslator"),
                    tabfocus_elements: "field-submit",
                    dialog_type: "modal",
                    extended_valid_elements: "iframe[allowfullscreen|src|height|width]",
                    toolbar: t.TinyMCE._addExtraButtons(t.TinyMCE._removeDisabledControls("undo,|,paste,|,bold,|,italic,|,underline,|,strikethrough,|,blockquote,|,code,|,formatselect,|,alignleft,|,aligncenter,|,alignright,|,fontselect,|,fontsizeselect,|,forecolor,|,bullist,|,numlist,|,hr,|,removeformat,|,outdent,|,indent,|,spoiler,|,link,|,unlink,|,image,|,videoembed,|,smilies,|,codeBlock,|,dieroller,|,dieTranslator")),
                    relative_urls: !1,
                    block_formats: "Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6;Pre=pre;",
                    fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",
                    paste_auto_cleanup_on_paste: !0,
                    paste_remove_styles: !0,
                    paste_remove_styles_if_webkit: !0,
                    paste_strip_class_attributes: "all",
                    paste_block_drop: !0,
                    gecko_spellcheck: !0,
                    forced_root_block: "p",
                    schema: "html5",
                    remove_script_host: !1,
                    media_live_embeds: !1
                }
            },
            bbcodeOptions: function() {
                t.TinyMCE.options = {
                    skin_url: t.TinyMCE.skin_url,
                    setup: function(i) {
                        t.TinyMCE.setupPlaceholder(i);
                        i.on("init", function(r) {
                            var u = r.target;
                            t.TinyMCE._enableBlockQuoteBreakout(u);
                            tinymce.dom.Event.bind(u.getBody(), "focus", function() {
                                n(document).trigger("tinymce-focus", n("#" + i.id))
                            });
                            t.TinyMCE.forceSimpleBBCodeEditor && (u.buttons.hideeditor.onclick(),
                            n("#" + u.id).val() === "[p][/p]" && n("#" + u.id).html(""));
                            n("#" + u.id + "_blockquote").on("click", function() {
                                u.dom.add(u.getBody(), "p", null, "<br />")
                            });
                            t.TinyMCE.tinyMCELoaded(u)
                        })
                    },
                    doctype: "<!DOCTYPE html>",
                    end_container_on_empty_block: !0,
                    selector: t.TinyMCE.selector,
                    menubar: !1,
                    body_class: "text u-typography-format",
                    content_css: t.CMS.getTinyMCECss(),
                    height: "250px",
                    width: "100%",
                    plugins: t.TinyMCE._addExtraPlugins("code,hr,image,link,lists,media,paste,tabfocus,textcolor"),
                    external_plugins: t.TinyMCE._addExtraCustomPlugins("CobaltHideEditor,CobaltBBCode,smilies,spoiler,videoembed,codeBlock"),
                    tabfocus_elements: "field-submit",
                    dialog_type: "modal",
                    formats: {
                        strikethrough: {
                            inline: "del"
                        },
                        removeformat: [{
                            selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del",
                            remove: "all",
                            split: !0,
                            expand: !1,
                            block_expand: !0,
                            deep: !0
                        }, {
                            selector: "span",
                            attributes: ["style", "class"],
                            remove: "empty",
                            split: !0,
                            expand: !1,
                            deep: !0
                        }, {
                            selector: "*",
                            attributes: ["style", "class"],
                            split: !1,
                            expand: !1,
                            deep: !0
                        }]
                    },
                    extended_valid_elements: "section,u",
                    toolbar1: t.TinyMCE._addExtraButtons(t.TinyMCE._removeDisabledControls("undo,|,removeformat,|,formatselect,|,fontselect,|,fontsizeselect,|,forecolor,|,alignleft,|,aligncenter,|,alignright,|,bullist,|,numlist,|,outdent,|,indent,|,bold,|,italic,|,underline,|,strikethrough,|,subscript,|,superscript,|,blockquote,|,image,|,spoiler,|,link,|,unlink,|,smilies,|,codeBlock,|,hideeditor")),
                    relative_urls: !1,
                    block_formats: "Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6;Pre=pre;",
                    fontsize_formats: "8px 10px 12px 14px 18px 24px 36px",
                    paste_auto_cleanup_on_paste: !0,
                    paste_remove_styles: !0,
                    paste_remove_styles_if_webkit: !0,
                    paste_strip_class_attributes: "all",
                    paste_block_drop: !0,
                    gecko_spellcheck: !0,
                    forced_root_block: "p",
                    schema: "html5",
                    remove_script_host: !1,
                    media_live_embeds: !1
                }
            },
            getEditorFromForm: function(i, r) {
                var e = i.find("textarea.text-editor")
                  , f = e.attr("id")
                  , u = t.TinyMCE.editors[f];
                if (u)
                    r && r(u);
                else
                    n(t.TinyMCE).on("EditorLoaded", function(n) {
                        n.editor.id === f && r(n.editor)
                    });
                return u
            },
            saveEditorInForm: function(n) {
                var i = t.TinyMCE.getEditorFromForm(n);
                i && i.save()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.UI = {
            CensoredWords: [{}],
            initialize: function() {
                n(".accordion").accordion({
                    clearStyle: !0,
                    autoHeight: !1
                });
                n(".t-footer-browse").length > 0 && n(".t-footer-browse").delegate(".j-footer-item > a", "click", function(t) {
                    t.preventDefault();
                    var i = n(this).closest(".t-footer-browse");
                    i.find(".j-footer-item ul").removeClass("j-list-selected");
                    i.find(".j-footer-item > a").removeClass("j-selected");
                    n(this).parent().find("ul").addClass("j-list-selected");
                    n(this).addClass("j-selected")
                });
                t.runOnHtmlInsert(t.UI.bindSpoilers)
            },
            bindSpoilers: function() {
                n(".spoiler").each(function() {
                    var i = n(this), r, u, f;
                    i.prev().remove(".spoiler-button-wrapper");
                    r = "Spoiler";
                    i.attr("data-spoiler-title") != null && i.attr("data-spoiler-title").length && (r = i.attr("data-spoiler-title"),
                    r && (r = t.UI.processCensorship(r)));
                    u = n("<div>").addClass("spoiler-button-wrapper");
                    f = n("<a>").text(r + " (click to show)").addClass("button").click(function() {
                        return i.isVisible() ? (n(this).text(r + " (click to show)"),
                        i.hide()) : (n(this).text(r + " (click to hide)"),
                        i.css("display", "block")),
                        !1
                    });
                    u.append(f);
                    i.before(u)
                })
            },
            processCensorship: function(n) {
                var f, i, r, u, e, o;
                for (f in t.UI.CensoredWords)
                    if (i = t.UI.CensoredWords[f].CensoredWord,
                    i) {
                        for (r = "",
                        u = 0; u < i.length; u++)
                            r += "*";
                        e = i.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
                        o = new RegExp(e,"gi");
                        n = n.replace(o, r)
                    }
                return n
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.User = {
            ID: null,
            Preferences: null,
            Ratings: null,
            IsAuthenticated: !1,
            EnabledLanguageIDs: [],
            MaxQuoteDepth: 5,
            DefaultLanguageID: null,
            reloadCookies: function() {
                var r, o, e, s, u, f;
                if (t.User.userID = t.User.ID,
                t.User.username = n.cookie("User.Username"),
                r = n.cookie("Preferences", i, {
                    skipEncoding: !0
                }),
                r) {
                    try {
                        r = JSON.parse(r)
                    } catch (h) {
                        r = null
                    }
                    (r == null || r == "") && (r = {})
                } else
                    for (r = {},
                    o = document.cookie.split("; "),
                    e = 0; e < o.length; e++)
                        if (s = o[e],
                        s.startsWith("Preferences.") && (u = s.split("=", 1)[0],
                        u && u !== "Preferences.ForumThreadSeen" && u !== "Preferences.ForumSeen" && u !== "Preferences.ForumThreadCommented")) {
                            if (f = n.cookie(u, i, {
                                skipEncoding: !0
                            }),
                            f)
                                try {
                                    f = JSON.parse(f)
                                } catch (h) {
                                    f = null
                                }
                            r[u.substring(12)] = f
                        }
                t.User.Preferences = r
            },
            dependentScripts: function() {
                return [{
                    dependency: t.Core,
                    name: "Cobalt.Core"
                }]
            },
            initialize: function() {
                var r, u, f, e, o, s, h, c, l, a, i;
                t.User.reloadCookies();
                t.User.defaultLanguage = n("body").attr("data-user-lang");
                t.Localization.Main.setCurrentLanguageID(t.User.getLanguage());
                t.User.toggleUserContent();
                r = !1;
                u = function() {
                    if (!r) {
                        r = !0;
                        var i = n("#entitlements")
                          , u = i.attr("data-url");
                        n.ajax({
                            url: u,
                            success: function(i) {
                                n("#tab-entitlements").html(i);
                                t.triggerHtmlInsert(n("#tab-entitlements"))
                            },
                            dataType: "html",
                            type: "GET"
                        })
                    }
                }
                ;
                n("#entitlements").click(u);
                setTimeout(function() {
                    n("#tab-entitlements .loading").is(":visible") && u()
                }, 500);
                f = !1;
                e = function() {
                    if (!f) {
                        f = !0;
                        var i = n("#subscription-history")
                          , r = i.attr("data-url");
                        n.ajax({
                            url: r,
                            success: function(i) {
                                n("#tab-subscription-history").html(i);
                                t.triggerHtmlInsert(n("#tab-subscription-history"))
                            },
                            dataType: "html",
                            type: "GET"
                        })
                    }
                }
                ;
                n("#subscription-history").click(e);
                setTimeout(function() {
                    n("#tab-subscription-history .loading").is(":visible") && e()
                }, 500);
                o = !1;
                s = function() {
                    if (!o) {
                        o = !0;
                        var i = n("#transaction-history")
                          , r = i.attr("data-url");
                        n.ajax({
                            url: r,
                            success: function(i) {
                                n("#tab-transaction-history").html(i);
                                t.triggerHtmlInsert(n("#tab-transaction-history"))
                            },
                            dataType: "html",
                            type: "GET"
                        })
                    }
                }
                ;
                n("#transaction-history").click(s);
                setTimeout(function() {
                    n("#tab-transaction-history .loading").is(":visible") && s()
                }, 500);
                h = !1;
                c = function() {
                    if (!h) {
                        h = !0;
                        var i = n("#legacy-subscription-history")
                          , r = i.attr("data-url");
                        n.ajax({
                            url: r,
                            success: function(i) {
                                n("#tab-legacysubscription-history").html(i);
                                t.triggerHtmlInsert(n("#tab-legacysubscription-history"))
                            },
                            dataType: "html",
                            type: "GET"
                        })
                    }
                }
                ;
                n("#legacy-subscription-history").click(c);
                setTimeout(function() {
                    n("#tab-legacysubscription-history .loading").is(":visible") && c()
                }, 500);
                l = !1;
                a = function() {
                    if (!l) {
                        l = !0;
                        var i = n("#nonce-billing-transaction-history")
                          , r = i.attr("data-url");
                        n.ajax({
                            url: r,
                            success: function(i) {
                                n("#tab-nonce-billing-transaction-history").html(i);
                                t.triggerHtmlInsert(n("#tab-nonce-billing-transaction-history"))
                            },
                            dataType: "html",
                            type: "GET"
                        })
                    }
                }
                ;
                n("#nonce-billing-transaction-history").click(a);
                setTimeout(function() {
                    n("#tab-nonce-billing-transaction-history .loading").is(":visible") && a()
                }, 500);
                i = n("#field-will-not-rename");
                i.length > 0 && (i.is(":checked") && newUserNameDiv.length > 0 && confirmUserNameDiv.length > 0 && (newUserNameDiv.hide(),
                newUserNameDiv.find("input").attr("disabled", "disabled"),
                confirmUserNameDiv.hide(),
                confirmUserNameDiv.find("input").attr("disabled", "disabled")),
                i.click(function() {
                    var t = n("#form-field-new-username")
                      , i = n("#form-field-confirm-username");
                    n(this).is(":checked") ? t.length > 0 && i.length > 0 && (t.hide(),
                    t.find("input").attr("disabled", "disabled"),
                    i.hide(),
                    i.find("input").attr("disabled", "disabled")) : t.length > 0 && i.length > 0 && (t.show(),
                    t.find("input").removeAttr("disabled"),
                    i.show(),
                    i.find("input").removeAttr("disabled"))
                }));
                n(".p-user.p-user-a.s_myProfile").length > 0 && t.runOnHtmlInsert(function() {
                    t.Warning.handleWarnForm(function(t) {
                        var i = n(".user-action-warn a.modal-link");
                        i.length > 0 && i.attr("data-multi-warning") === "false" && (i.removeClass("modal-link").attr("href", "/cp/warning-records/" + t.warningRecordID).find("span").text("Warned!"),
                        i.unbind("click"))
                    })
                })
            },
            toggleUserContent: function() {
                n(".toggle-user-visible").each(function() {
                    var i = n(this).attr("data-user-id");
                    i == t.User.userID ? n(this).show() : n(this).hide()
                });
                n(".toggle-user-hidden").each(function() {
                    var i = n(this).attr("data-user-id");
                    i == t.User.userID ? n(this).hide() : n(this).show()
                })
            },
            setLanguage: function(n) {
                t.User.Preferences.Language != n && (t.User.Preferences.Language = n,
                t.User.savePreferences(!0),
                document.location.reload())
            },
            getLanguage: function() {
                return t.User.Preferences == i || t.User.Preferences.Language == i ? t.User.defaultLanguage : t.User.EnabledLanguageIDs.indexOf(t.User.Preferences.Language) == -1 ? t.User.defaultLanguage : t.User.Preferences.Language
            },
            defaultLanguage: null,
            savePreferences: function(i) {
                var u = {
                    domain: t.Utils.getCurrentDomain(),
                    path: "/",
                    expires: 700,
                    skipEncoding: !0
                }, r, f;
                n.cookie("Preferences", null, n.extend({}, u));
                for (r in t.User.Preferences)
                    t.User.Preferences.hasOwnProperty(r) && (f = JSON.stringify(t.User.Preferences[r]),
                    n.cookie("Preferences." + r, f, n.extend({}, u)));
                i && t.User.userID && n.ajax({
                    url: t.Routes.Instance.CommonStorePreferences(),
                    dataType: "json",
                    type: "POST"
                })
            },
            drawLanguageSelection: function() {
                var i, r;
                t.User.EnabledLanguageIDs.length <= 1 || (i = n("#language-list"),
                i.length != 0) && (r = t.Localization.Main.Languages.concat(),
                r.sortBy(function(n) {
                    return n.name.toLowerCase()
                }),
                n.each(r, function(r, u) {
                    var f, e, o, s, h;
                    t.User.EnabledLanguageIDs.indexOf(u.id) != -1 && (f = u.localizedName,
                    f == null ? f = u.name : (e = u.phraseID,
                    e == null ? f = u.name : (o = t.Localization.Main[e],
                    typeof o == "function" ? (s = o(),
                    s != f && (f = "{0} ({1})".format(f, s))) : f = u.name)),
                    u.fullName = f,
                    h = n("<a/>").attr("href", "javascript:;").addClass("lang-select-" + u.code).text(f).click(function() {
                        return i.hide(),
                        t.User.setLanguage(u.id),
                        document.location = document.location.toString().split("#")[0],
                        !1
                    }),
                    i.append(n("<li/>").append(h)),
                    u.id == t.User.getLanguage() && n("#language-selected").addClass("lang-select-" + u.code).html(n("<span/>").text(f)))
                }),
                i.width(n(".language-selector").width() - 2),
                n("#language-selector").hover(function() {
                    i.stop(!0, !0).slideDown(100)
                }, function() {
                    i.stop(!0, !0).slideUp(100)
                }))
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.UserContentManager = {
            dependentScripts: function() {
                return [{
                    dependency: t.CMS,
                    name: "Cobalt.CMS"
                }]
            },
            initialize: function() {
                n.browser.msie && (window.onbeforeunload = null);
                n(".j-user-content-list").on("change", "input.j-content-item-checkbox", function() {
                    var t = n(this)
                      , i = t.parents("div.wrapper");
                    t.is(":checked") ? i.addClass("selected") : i.removeClass("selected")
                });
                n(".j-display-style-toggle").on("click", "a", function() {
                    var t = n(this).attr("data-display-style");
                    n.cookie("Cobalt.UserContentManager.DisplayStyle", t, {
                        expires: 365
                    });
                    self.location.reload()
                });
                n("#field-preview").click(function(t) {
                    t.preventDefault();
                    var i = n("form#post-form")
                      , r = i.attr("data-category-id")
                      , u = i.attr("data-post-id");
                    u > 0 ? i.attr("action", "/my-content/" + r + "/posts/" + u + "/preview") : i.attr("action", "/my-content/" + r + "/posts/preview");
                    i.attr("target", "preview");
                    i.submit();
                    i.attr("action", "");
                    i.attr("target", "")
                });
                n("body").on("change", "#field-parent-category", function() {
                    var i = n(this).find("option[value='" + n(this).val() + "']")
                      , t = n("#form-field-title");
                    i.length > 0 && t.length > 0 && (i.attr("data-naming-enabled") === "True" ? t.show() : t.hide())
                });
                n("body").on("click", "a.j-cancel-button", function() {
                    n(this).parents("div.ui-dialog-content").dialog("close")
                });
                t.TinyMCE.optionsOverridden = !0;
                var i = "imageborder,postexcerpt,postpagebreak,postwidget,spoiler,tabgroupaddtab,videoembed,xenonmedia"
                  , r = "paste bold italic underline strikethrough blockquote | formatselect alignleft aligncenter alignright | fontselect fontsizeselect forecolor | searchreplace | fullscreen | bullist numlist | hr removeformat | outdent indent spoiler | link unlink | image | imageborder | videoembed | postpagebreak";
                t.PostWidget.showPostWidgets && (i += ",postwidget",
                r += " postwidget");
                t.TinyMCE.options = {
                    skin_url: t.TinyMCE.skin_url,
                    setup: function(i) {
                        i.on("init", function(i) {
                            var r = i.target;
                            t.TinyMCE._enableBlockQuoteBreakout(r);
                            n("#" + r.id + "_blockquote").on("click", function() {
                                r.dom.add(r.getBody(), "p", null, "<br />")
                            });
                            t.TinyMCE.tinyMCELoaded(r)
                        })
                    },
                    formats: {
                        bold: {
                            inline: "strong"
                        },
                        italic: {
                            inline: "em"
                        },
                        strikethrough: {
                            inline: "del"
                        },
                        address: {
                            inline: "addr"
                        },
                        removeformat: [{
                            selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del",
                            remove: "all",
                            split: !0,
                            expand: !1,
                            block_expand: !0,
                            deep: !0
                        }, {
                            selector: "span",
                            attributes: ["style", "class"],
                            remove: "empty",
                            split: !0,
                            expand: !1,
                            deep: !0
                        }, {
                            selector: "*",
                            attributes: ["style", "class"],
                            split: !1,
                            expand: !1,
                            deep: !0
                        }]
                    },
                    end_container_on_empty_block: !0,
                    body_class: "text u-typography-format",
                    content_css: t.CMS.getTinyMCECss(),
                    selector: "#field-body-wysiwyg",
                    menubar: !1,
                    width: "100%",
                    height: "400px",
                    plugins: "colorpicker,fullscreen,hr,image,link,media,noneditable,paste,searchreplace,table,textcolor",
                    external_plugins: t.TinyMCE._addExtraCustomPlugins(i),
                    dialog_type: "modal",
                    toolbar: r,
                    extended_valid_elements: "article[id|class],header,aside[class],div[*],tab[*],iframe[allowfullscreen|src|height|width]",
                    custom_elements: "tab",
                    block_formats: "Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Header 5=h5;Header 6=h6;Pre=pre;",
                    relative_urls: !1,
                    paste_auto_cleanup_on_paste: !0,
                    paste_remove_styles: !0,
                    paste_remove_styles_if_webkit: !0,
                    paste_strip_class_attributes: "all",
                    gecko_spellcheck: !0,
                    paste_text_sticky: !0,
                    forced_root_block: "p",
                    heading_clear_tag: "p",
                    schema: "html5",
                    remove_script_host: !1,
                    media_live_embeds: !1
                };
                t.runOnHtmlInsert(function(i) {
                    var r = i.find("form.j-modal-form");
                    r.length != 0 && r.data("_initialized") == null && (r.data("_initialized", !0),
                    r.ajaxForm({
                        type: "post",
                        cache: !1,
                        beforeSubmit: function() {
                            r.find(".j-cancel-button").hide();
                            r.find(".j-submit-button").addClass("disabled");
                            r.find(".j-form-saving").show()
                        },
                        success: function(i) {
                            if (i.Successful)
                                i.Url != null ? self.location.href = i.Url : self.location.reload();
                            else {
                                var u = n(i.html)
                                  , f = u.find("form").html();
                                r.html(f);
                                t.triggerHtmlInsert(r)
                            }
                        }
                    }))
                });
                t.UserContentManager.initializeRevisionSystem()
            },
            initializeRevisionSystem: function() {
                n("div.j-revision-selector").on("click", "a.j-revision", function() {
                    var i = n(this).attr("data-revision"), r = n(this).attr("data-post-id"), u;
                    confirm("Are you sure you want to restore the content of this post to an earlier revision (Revision " + i + ")? You will lose any unsaved changes to your post.") && (u = n.ajax({
                        type: "POST",
                        url: t.Routes.Instance.UserContentPostRestoreRevision(r, i),
                        dataType: "json",
                        success: function(t) {
                            n("#field-body-wysiwyg").val(t.Body);
                            n("#field-body").val(t.Body)
                        }
                    }))
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.UserManagement = {
            initialize: function() {
                var u, f;
                n(".ban-description").hide();
                n("#field-ban-type").change(function() {
                    n(".ban-description").hide();
                    var t = n(this).val();
                    n("#ban-desc-" + t).show()
                });
                var e = n("div#user-advanced-search-form")
                  , s = n('input[type="submit"]#user-search-form-submit')
                  , o = n('input[type="button"]#user-search-advanced-button')
                  , i = n("select#field-searchBy")
                  , r = n("select#field-searchMethod");
                (i.val() == "4" || i.val() == "2") && (r.val("2"),
                r.attr("disabled", "disabled"));
                i.change(function() {
                    i.val() == "4" || i.val() == "2" ? (r.val("2"),
                    r.attr("disabled", "disabled")) : r.removeAttr("disabled")
                });
                n("#filter-search-by").change(function() {
                    t.UserManagement.saveFilterConditions(this, "Preferences.CPUserSearch.ConstraintBy")
                });
                n("#filter-search-method").change(function() {
                    t.UserManagement.saveFilterConditions(this, "Preferences.CPUserSearch.ConstraintMethod")
                });
                u = n("select#field-sort");
                f = n("select#advanced-search-sort-order");
                t.UserManagement.bindSortOrderChangeEvent(f, u);
                e.length > 0 && (n("#user-search-is-advanced").val() == "true" ? o.val(L.Global.Common.SimpleSearch()) : n("div#user-advanced-search-form").remove());
                o.click(function() {
                    n(this).val() == L.Global.Common.SimpleSearch() ? (n("div#user-advanced-search-form").remove(),
                    n(this).val(L.Global.Common.AdvancedSearch())) : (s.before(e),
                    t.UserManagement.bindSortOrderChangeEvent(f, u),
                    n("input[type=text].date").datepicker({
                        changeMonth: !0,
                        changeYear: !0
                    }),
                    n(this).val(L.Global.Common.SimpleSearch()))
                });
                n(".j-user-ip-history").on("click", ".j-user-ip-whitelisted", function() {
                    var t = n(this)
                      , i = t.is(":checked")
                      , r = t.attr("data-user-slug")
                      , u = t.val();
                    if (!confirm("Are you sure you want to " + (i ? "add this IP address to the white list?" : "remove this IP address from the white list?")))
                        return !1;
                    n.ajax({
                        type: "POST",
                        url: "/cp/users/" + r + "/whitelist-ip/" + u,
                        success: function() {
                            location.reload()
                        }
                    })
                });
                n(".j-user-ip-history").on("click", ".j-user-ip-whitelisted-by-subnet", function() {
                    var t = n(this)
                      , i = t.is(":checked")
                      , r = t.attr("data-user-slug")
                      , u = t.val();
                    if (!confirm("Are you sure you want to " + (i ? "whitelist this IP by subnet? Be aware of the risks." : "from the white list?")))
                        return !1;
                    n.ajax({
                        type: "POST",
                        url: "/cp/users/" + r + "/whitelist-ip-by-subnet/" + u,
                        success: function() {
                            location.reload()
                        }
                    })
                })
            },
            saveFilterConditions: function(i, r) {
                n.cookie(r, n(i).val(), {
                    expires: 365,
                    domain: "." + t.Utils.getCurrentDomain(),
                    path: "/",
                    secure: !0
                })
            },
            bindSortOrderChangeEvent: function(t, i) {
                n(t).change(function() {
                    n(this).val() == L.Global.Common.Ascending() ? i.children("option").each(function() {
                        n(this).val().startsWith("-") && n(this).val(n(this).val().slice(1, n(this).val().length))
                    }) : n(this).val() == L.Global.Common.Descending() && i.children("option").each(function() {
                        var t = "-" + n(this).val();
                        n(this).val(t)
                    })
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.UserProfile = {
            initialize: function() {
                t.UserProfile.addCustomProfileValidation();
                n("#advanced-profile-form").on("submit", function() {
                    return t.UserProfile.addCustomProfileValidation(!0)
                })
            },
            addCustomProfileValidation: function(t) {
                var i = !1;
                return n(".j-profile-field").each(function() {
                    var e = n(this)
                      , o = e.find(":input")
                      , u = e.find(".j-field-error-label")
                      , f = e.data("field-label")
                      , s = e.data("field-type")
                      , r = e.data("field-validators");
                    o.on("change", function() {
                        var n = o.val(), t, i;
                        if (u.text(""),
                        n.length > 0)
                            switch (r.PrimaryValidator) {
                            case 1:
                                !isNaN(parseFloat(n)) && isFinite(n) || u.text(f + " must be a number.");
                                r.NumericMinimum !== null && n < r.NumericMinimum && u.text(f + " must be at least " + r.NumericMinimum);
                                r.NumericMaximum !== null && n > r.NumericMaximum && u.text(f + " must be less than " + r.NumericMaximum);
                                break;
                            case 2:
                                r.StringMinLength !== null && n.length < r.StringMinLength && u.text(f + " must be at least " + r.StringMinLength + " characters.");
                                r.StringMaxLength !== null && n.length > r.StringMaxLength && u.text(f + " must be less than " + r.StringMaxLength + " characters.");
                                break;
                            case 3:
                                t = new RegExp("^(http[s]?://(www.)?|ftp://(www.)?|www.){1}([0-9A-Za-z-.@:%_+~#=]+)+((‌​.[a-zA-Z]{2,3})+)(/(.)*)?(?(.)*)?","g");
                                t.test(n) || u.text(f + " must be a URL.");
                                break;
                            case 4:
                                i = new RegExp(r.RegularExpression,"g");
                                i.test(n) || u.text(f + " failed validation.")
                            }
                    });
                    t && (o.change(),
                    u.text().length > 0 && (i = !0))
                }),
                !i
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.UserSurrogateAvatars = {
            initialize: function() {
                var i = n(".avatar-select"), e, f;
                if (i.length > 0) {
                    var u = i.find("#field-user-surrogates")
                      , r = t.UserSurrogateAvatars.getActiveSurrogateModelIDPair(u.val())
                      , o = r[0]
                      , s = r[1];
                    t.UserSurrogateAvatars.hideAvatars(o, s);
                    u.length > 0 && (e = {
                        avatarSelection: i
                    },
                    u.bind("change", e, t.UserSurrogateAvatars.userSurrogateChanged),
                    f = t.UserSurrogateAvatars.getIDPairHash(),
                    f != "" && (u.val(f),
                    u.trigger("change")));
                    i.find(".avatar-link").click(function(u) {
                        var f, e, o;
                        u.preventDefault();
                        f = i.find(".avatar-selected");
                        f.length > 0 && f.removeClass("avatar-selected");
                        n(this).parent().addClass("avatar-selected");
                        e = n(this);
                        o = e.attr("href");
                        r = t.UserSurrogateAvatars.getActiveSurrogateModelIDPair(i.find("#field-user-surrogates").val());
                        t.Core.withRequestVerificationToken(function(u) {
                            n.ajax({
                                type: "POST",
                                url: o,
                                cache: !1,
                                data: {
                                    "request-verification-token": u
                                },
                                success: function() {
                                    t.UserSurrogateAvatars.getUpdatedUserSurrogateAvatars(i, r[0], r[1])
                                }
                            })
                        })
                    });
                    i.find(".disable-avatar").click(function(u) {
                        u.preventDefault();
                        var f = n(this)
                          , e = f.attr("href");
                        r = t.UserSurrogateAvatars.getActiveSurrogateModelIDPair(i.find("#field-user-surrogates").val());
                        t.Core.withRequestVerificationToken(function(u) {
                            n.ajax({
                                type: "POST",
                                url: e,
                                cache: !1,
                                data: {
                                    "request-verification-token": u
                                },
                                success: function() {
                                    t.UserSurrogateAvatars.getUpdatedUserSurrogateAvatars(i, r[0], r[1])
                                }
                            })
                        })
                    })
                }
            },
            userSurrogateChanged: function(i) {
                var e = i.data.avatarSelection, f = t.UserSurrogateAvatars.getActiveSurrogateModelIDPair(n(this).val()), r, u, o;
                f.length == 2 && (r = f[0],
                u = f[1],
                r > 0 && u > 0 && (t.UserSurrogateAvatars.getUpdatedUserSurrogateAvatars(e, r, u),
                o = e.find(".avatar"),
                o.each(function(i, f) {
                    var o = n(f).attr("data-avatar-id")
                      , e = n(f).find("a.avatar-link");
                    e.length > 0 && e.attr("href", t.Routes.Instance.AvatarActivateAvatar({
                        entityTypeID: r,
                        entityID: u,
                        avatarID: o
                    }))
                }),
                t.UserSurrogateAvatars.setIDPairHash(r, u),
                t.UserSurrogateAvatars.updateUploadForm(r, u),
                t.UserSurrogateAvatars.updateDeleteLinks(r, u)))
            },
            setIDPairHash: function(n, i) {
                var r = self.location.hash
                  , u = t.UserSurrogateAvatars.getIDPairHash()
                  , f = "{0}:{1}".format(n, i);
                u != "" ? r = r.toString().replace(u, f) : r += ";" + f;
                self.location.hash = r
            },
            getIDPairHash: function() {
                var t = self.location.hash, i = "", r, n;
                return t != "" && (r = /\d+\:\d+/,
                n = r.exec(t),
                n && n.length > 0 && (i = n[0])),
                i
            },
            updateUploadForm: function(i, r) {
                var u = n(".avatar-form"), f;
                u.length > 0 && (f = t.Routes.Instance.AvatarUploadAvatar(i, r, {
                    returnUrl: self.location.host + self.location.hash
                }),
                u.attr("action", f))
            },
            updateDeleteLinks: function(i, r) {
                n("a.user-avatar-delete-link").each(function(u, f) {
                    n(f).attr("href", t.Routes.Instance.AvatarDeleteAvatar({
                        entityTypeID: i,
                        entityID: r,
                        avatarID: n(f).parents("li").attr("data-avatar-id")
                    }))
                })
            },
            getUpdatedUserSurrogateAvatars: function(i, r, u) {
                var f = i.find(".current-avatar");
                f.length > 0 && (f.mask(),
                n.ajax({
                    url: t.Routes.Instance.UserGetUserSurrogateShortDetails({
                        entityTypeID: r,
                        entityID: u
                    }),
                    dataType: "json",
                    cache: !1,
                    success: function(e) {
                        var s = e.avatarID, l = e.fallbackAvatarUrl, h, o, c;
                        f.attr("data-avatar-id", s);
                        f.html(e.html);
                        h = i.find(".avatar-selected");
                        h.length > 0 && h.removeClass("avatar-selected");
                        o = n("#fallback-avatar");
                        o.length > 0 && o.attr("src", l);
                        s > 0 ? (c = i.find(".avatar[data-avatar-id='" + s + "']"),
                        c.length > 0 ? c.addClass("avatar-selected") : o.parents("li").addClass("avatar-selected")) : o.parents("li").addClass("avatar-selected");
                        f.unmask();
                        t.UserSurrogateAvatars.hideAvatars(r, u);
                        t.UserSurrogateAvatars.resetDisableAvatar(r, u)
                    }
                }))
            },
            getActiveSurrogateModelIDPair: function(n) {
                return n.split(":")
            },
            hideAvatars: function(t, i) {
                n(".user-avatars .avatar").each(function(r, u) {
                    var f = n(u).attr("data-entity-type-id")
                      , e = n(u).attr("data-entity-id")
                      , o = n(u).attr("data-is-generated");
                    o == "true" && (t == f && i != e || t != f) ? n(u).hide() : n(u).show()
                })
            },
            resetDisableAvatar: function(i, r) {
                var f = t.Routes.Instance.AvatarDisableAvatar({
                    entityTypeID: i,
                    entityID: r
                })
                  , u = n(".disable-avatar");
                u.length > 0 && u.attr("href", f)
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.UserTitles = {
            initialize: function() {
                n(".j-custom-title").show();
                n(".j-custom-title").addClass("tip");
                n(".j-custom-title").html("<div class='tooltip-html'>Select this option to edit title<\/div>");
                console.log(n(".j-custom-title"));
                n(".j-custom-title-radio input[type='radio']").is(":checked") ? (n(".j-custom-title").removeClass("reduce-opacity"),
                n(".j-custom-title").attr("readonly", !1)) : (n(".j-custom-title").addClass("reduce-opacity"),
                n(".j-custom-title").attr("readonly", !0));
                n(".j-custom-title").attr("placeholder", "Your awesome title here");
                n(document).on("change", ".j-title-radio", function() {
                    t.UserTitles.handleTitleRadioChange(n(this))
                })
            },
            handleTitleRadioChange: function(t) {
                t.hasClass("j-custom-title-radio") ? (n(".j-custom-title").show(),
                n(".j-custom-title").removeClass("reduce-opacity"),
                n(".j-custom-title").attr("readonly", !1),
                n(".j-title-radio:not(.j-custom-title-radio) input").prop("checked", !1)) : (n(".j-custom-title").addClass("reduce-opacity"),
                n(".j-custom-title").attr("readonly", !0),
                n(".j-custom-title").attr("placeholder", "Your awesome title here"),
                n(".j-custom-title-radio input").prop("checked", !1))
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Utils = {
            disable: function(t) {
                n(t).addClass("disabled");
                n(t).on("click", function(n) {
                    return n.stopPropagation(),
                    n.preventDefault(),
                    !1
                })
            },
            isUrlCurrentSite: function(n) {
                var t = "http://" + window.location.host
                  , i = "https://" + window.location.host;
                return n.indexOf(t + "/") === 0 || n.indexOf(i + "/") === 0 || n.indexOf("/") === 0 && n.indexOf("//") !== 0 || n === t || n === i
            },
            getCurrentDomain: function() {
                var t = self.location.host
                  , n = t.split(".");
                return n[n.length - 2] + "." + n[n.length - 1]
            },
            getStaticDomain: function() {
                return "http://static." + t.Utils.getCurrentDomain()
            },
            cookiesDisabled: function() {
                var i = {
                    domain: t.Utils.getCurrentDomain(),
                    path: "/"
                }, r;
                return n.cookie("_cookieTest", !0, i),
                r = n.cookie("_cookieTest"),
                n.cookie("_cookieTest", null, i),
                r == null
            },
            getSlug: function(n) {
                for (n = n.toLowerCase(); n.match(/[^A-Za-z0-9_\-\s]+/) != null; )
                    n = n.replace(/[^A-Za-z0-9_\-\s]/, "");
                var t = n.split(" ");
                return t.join("-")
            },
            getCookieValues: function(n) {
                var f, e, r, i, u, o, t;
                if (n == null)
                    return null;
                for (f = {},
                e = n.split("&"),
                r = 0; r < e.length; r++) {
                    i = e[r];
                    u = i.indexOf("=");
                    u == -1 ? (o = i,
                    t = "") : (o = i.substring(0, u),
                    t = i.substring(u + 1));
                    t = unescape(t);
                    try {
                        t = JSON.parse(t)
                    } catch (s) {
                        t = null
                    }
                    f[o] = t
                }
                return f
            },
            serializeCookieValues: function(n) {
                var u = [], i = [], r;
                for (var t in n)
                    i.push(t);
                for (i.sort(),
                r = 0; r < i.length; r++)
                    t = i[r],
                    t && t != null && typeof t != "undefined" && u.push(t + "=" + encodeURIComponent(JSON.stringify(n[t])));
                return u.join("&")
            },
            objectToQueryString: function(n, t) {
                var u, r, e, f;
                if (n == i || n.constructor !== Object)
                    return "";
                u = [];
                for (f in n)
                    u.push(f);
                for (u.sort(),
                r = [],
                e = 0; e < u.length; e++)
                    r.push(e == 0 ? "?" : "&"),
                    f = u[e],
                    r.push(encodeURIComponent(f)),
                    r.push("="),
                    r.push(encodeURIComponent(n[f]));
                return t && r.shift(),
                r.join("")
            },
            queryStringToObject: function() {
                var i = location.search.length, n, t;
                if (i > 0) {
                    var f = location.search.substring(1, i)
                      , r = f.split("&")
                      , u = {};
                    for (n = 0; n < r.length; n++)
                        t = r[n].split("="),
                        u[t[0]] = t[1];
                    return u
                }
                return {}
            },
            removeFromQueryString: function(n) {
                var u = location.search.length, i, r;
                if (u > 0) {
                    var o = location.search.substring(1, u)
                      , f = o.split("&")
                      , e = {};
                    for (i = 0; i < f.length; i++)
                        (r = f[i].split("="),
                        r[0] != n) && (e[r[0]] = r[1]);
                    return t.Utils.objectToQueryString(e)
                }
                return ""
            },
            getQueryStringValue: function(n) {
                var i = location.search.length;
                if (i === 0)
                    return "";
                var r = location.search.replace("?", "")
                  , u = r.split("&")
                  , t = u.find(function(t) {
                    return t.indexOf(n) > -1
                });
                return !t || t.indexOf("=") === -1 ? "" : t.split("=")[1]
            },
            confirmDelete: function(r, u, f, e, o) {
                (e.preventDefault(),
                confirm(u)) && t.Utils.getRequestVerificationToken().done(function(u) {
                    var e = f[0].tagName
                      , s = f.parents("form:first");
                    return s.length && e == "BUTTON" ? (f.unbind("click"),
                    f.click(),
                    !1) : (f.attr("data-show-loading") !== i && f.addClass("loading"),
                    o === "no-reload" ? t.Forms.AjaxPostSubmit(f, u).done(function(t) {
                        t !== i && t.redirectURL !== i ? window.location = t.redirectURL : n(f).trigger("deleteConfirmPost")
                    }) : o === "no-ajax" ? window.location = r : t.Forms.AjaxPostSubmit(f, u).done(function(t) {
                        if (t != null && t.errorMessage != null) {
                            var i = n("<div><div>" + t.errorMessage + "<\/div><\/div>");
                            i.dialog({
                                draggable: !1,
                                title: "Unable to Delete",
                                modal: !0,
                                resizable: !1,
                                dialogClass: "modal"
                            })
                        } else
                            window.location.reload();
                        return !1
                    }),
                    !1)
                })
            },
            setPromptHidden: function(t) {
                var i = n("<a>").text("Click to show Auto Hidden Content").addClass("hidden-prompt-link");
                i.click(function() {
                    n(this).next().show().removeClass("hide");
                    n(this).remove()
                });
                t.before(i)
            },
            setPrompt: function(n) {
                var t = n.attr("data-prompt-message");
                n.click(function(n) {
                    if (!confirm(t)) {
                        n.preventDefault();
                        return
                    }
                })
            },
            setConfirmDelete: function(n) {
                var i = n.attr("data-delete-prompt-message")
                  , u = n.attr("data-delete-type")
                  , r = n.attr("href");
                (i == "" || i == null) && (i = n.parent().attr("data-delete-prompt-message"),
                (i == "" || i == null) && (i = "Delete?"));
                r != "" && i != "" && (n.unbind("click"),
                n.bind("click", function(f) {
                    return t.Utils.confirmDelete(r, i, n, f, u),
                    !1
                }))
            },
            getRequestVerificationToken: function() {
                var t = n.cookie("RequestVerificationToken");
                return t ? n.Deferred().resolve(t) : n.ajax({
                    url: "/refresh-request-verification-token",
                    type: "POST",
                    dataType: "json"
                }).pipe(function() {
                    return n.cookie("RequestVerificationToken")
                })
            },
            postWithToken: function(i, r) {
                return r = r || {},
                t.Utils.getRequestVerificationToken().pipe(function(t) {
                    r["request-verification-token"] = t;
                    n.post(i, r)
                })
            },
            postNewFormWithToken: function(n, i) {
                return i = i || {},
                t.Utils.getRequestVerificationToken().pipe(function(t) {
                    var r, f, u;
                    i["request-verification-token"] = t;
                    r = document.createElement("form");
                    r.method = "post";
                    r.action = n;
                    for (f in i)
                        u = document.createElement("input"),
                        u.type = "hidden",
                        u.name = f,
                        u.value = i[f],
                        r.appendChild(u);
                    document.body.appendChild(r);
                    r.submit()
                })
            },
            getRequestVerificationTokenElement: function() {
                return t.Utils.getRequestVerificationToken().pipe(function(n) {
                    return '<input name="request-verification-token" type="hidden" value="' + n + '" />'
                })
            }
        };
        n.fn.setCursorPosition = function(t) {
            if (n(this).get(0).setSelectionRange)
                n(this).get(0).setSelectionRange(t, t);
            else if (n(this).get(0).createTextRange) {
                var i = n(this).get(0).createTextRange();
                i.collapse(!0);
                i.moveEnd("character", t);
                i.moveStart("character", t);
                i.select()
            }
        }
        ;
        n.fn.getCursorPosition = function() {
            var i = 0, t = n(this).get(0), r, u;
            return document.selection ? (t.focus(),
            r = document.selection.createRange(),
            u = document.selection.createRange().text.length,
            r.moveStart("character", -t.value.length),
            i = r.text.length - u) : (t.selectionStart || t.selectionStart == "0") && (i = t.selectionStart),
            i
        }
        ;
        n.log = function(n) {
            window.console && console.log(n)
        }
        ;
        n.debug = function(n) {
            window.console && console.debug(n)
        }
        ;
        n.info = function(n) {
            window.console && console.info(n)
        }
        ;
        n.warn = function(n) {
            window.console && console.warn(n)
        }
        ;
        n.error = function(n) {
            window.console && console.error(n)
        }
        ;
        n.group = function(n, t, i) {
            window.console && console.group && console.groupCollapsed && (i ? console.groupCollapsed(n) : console.group(n),
            t && (t(),
            console.groupEnd()))
        }
        ;
        n.endGroup = function() {
            window.console && console.groupEnd && console.groupEnd()
        }
    }
    )($, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        var r;
        t.VideoEmbed = {
            dependentScripts: function() {
                return [{
                    dependency: t.UI,
                    name: "Cobalt.UI"
                }]
            },
            initialize: function() {
                t.runOnHtmlInsert(function(i) {
                    var r = i.find("a[data-video-embed]")
                      , f = n("a[data-video-embed]").not(r)
                      , u = f.length;
                    r.length > 0 && r.each(function() {
                        u = t.VideoEmbed.bindEmbed(n(this), u)
                    })
                })
            },
            bindEmbed: function(i, r) {
                var o = t.Constants.StaticURL + "/skins/global/images/ui/video-embed-play.png"
                  , s = t.Constants.StaticURL + "/skins/global/images/ui/video-embed-close.png"
                  , f = "video-embed-inline-play-" + r
                  , e = "video-embed-code-" + r
                  , u = n("<span>").addClass("u-videoEmbed");
                return i.before(u),
                u.append(i),
                u.prepend(n("<span>").attr("id", f).addClass("play-video").addClass("tip").attr("title", "Click to watch video")),
                u.append(n("<span>").attr("id", e).addClass("video-container").hide()),
                n("#" + f).live("click", function() {
                    var t = n("#" + e);
                    u.addClass("s-expanded");
                    t.is(":hidden") ? (t.html().length === 0 && t.append(i.attr("data-video-embed")),
                    t.show(),
                    n(this).attr("src", s)) : (t.hide(),
                    t.empty(),
                    u.removeClass("s-expanded"),
                    n(this).attr("src", o))
                }),
                r + 1
            },
            showForm: function(t, u, f) {
                n.get("/video-embed-platform/get-form", function(e) {
                    var s = n(e), c = s.find("#form-field-manual-width"), l = s.find("#form-field-manual-height"), h = s.find("#field-manual-width-and-height"), a = h.attr("data-manual-width") != u || h.attr("data-manual-height") != f, v = h.length > 0, o;
                    v && (u !== i && u !== 0 && (s.find("#field-manual-width").val(u),
                    a ? h.attr("checked", "checked") : c.hide()),
                    f !== i && f !== 0 && (s.find("#field-manual-height").val(f),
                    a ? h.attr("checked", "checked") : l.hide()),
                    h.click(function() {
                        var t = n(this);
                        t.is(":checked") ? (c.show(),
                        l.show()) : (c.hide(),
                        l.hide())
                    }));
                    o = n("<div/>");
                    o.append(s);
                    t != "" && o.find("#video-embed-form form #field-embed-url").val(t);
                    o.find("#video-embed-form form").submit(function(t) {
                        var u, i, f, e;
                        t.preventDefault();
                        u = n("#field-embed-url").val();
                        i = null;
                        v ? (f = n("#field-manual-width").val(),
                        e = n("#field-manual-height").val(),
                        i = {
                            url: u,
                            width: f,
                            height: e
                        }) : i = {
                            url: u
                        };
                        n.get("/video-embed-platform/get-embed-code.json", i, function(n) {
                            return n.hasError ? (alert(n.errorDescription),
                            !1) : (o.dialog("destroy"),
                            o.remove(),
                            r(n.embedCode),
                            !1)
                        })
                    });
                    o.dialog({
                        modal: !0,
                        width: 500,
                        dialogClass: "modal",
                        draggable: !1,
                        title: "Video URL",
                        resizable: !1,
                        close: function(t) {
                            n(t.target).dialog("destroy");
                            n(t.target).remove()
                        }
                    })
                })
            },
            showModal: function(n, i, u, f) {
                r = f;
                try {
                    t.VideoEmbed.showForm(n, i, u)
                } catch (e) {}
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.ViewStateManager = {
            separator: ";",
            subSeparator: ":",
            trackers: [],
            createBrowserHistory: !1,
            initialize: function() {
                var r, i, n, u;
                if (self.location.hash != "")
                    for (r = self.location.hash.substring(1).split(t.ViewStateManager.separator),
                    i = 0; i < r.length; i++)
                        n = r[i],
                        u = null,
                        n.indexOf(t.ViewStateManager.subSeparator) > 0 && (u = n.split(t.ViewStateManager.subSeparator)[0],
                        n = n.split(t.ViewStateManager.subSeparator)[1]),
                        new t.ViewState(i,u,n)
            },
            updateFromHash: function() {
                var u = self.location.hash.substring(1).split(t.ViewStateManager.separator), r, n, i, f, e;
                if (u[0] == "")
                    for (r = t.ViewStateManager.trackers,
                    n = 0; n < r.length; n++)
                        r[n].value = r[n].defaultValue;
                for (n = 0; n < u.length; n++)
                    i = u[n],
                    f = null,
                    i.indexOf(t.ViewStateManager.subSeparator) > 0 && (f = i.split(t.ViewStateManager.subSeparator)[0],
                    i = i.split(t.ViewStateManager.subSeparator)[1],
                    e = t.ViewStateManager.getById(f),
                    e.value != i && e.setValue(i))
            },
            getById: function(n) {
                for (var r = t.ViewStateManager.trackers, i = 0; i < r.length; i++)
                    if (r[i].id == n)
                        return r[i];
                return null
            },
            removeById: function(n) {
                for (var i = t.ViewStateManager.trackers, u = -1, r = 0; r < i.length; r++)
                    i[r].id == n && (u = r);
                u > -1 && i.splice(u, 1);
                t.ViewStateManager.trackers = i;
                t.ViewStateManager.update()
            },
            getViewState: function(n, i) {
                var u = t.ViewStateManager.trackers, f = null, r;
                return n != null && (f = t.ViewStateManager.getById(n),
                f != null) ? f : (r = u.length,
                u[r] != null ? u[r] : new t.ViewState(r + 1,n,i))
            },
            update: function() {
                for (var o, e, n, r, u = [], f = 0; f < t.ViewStateManager.trackers.length; f++)
                    (o = t.ViewStateManager.trackers[f].id,
                    e = t.ViewStateManager.trackers[f].value,
                    e != i) && (o != null ? u.push(o + t.ViewStateManager.subSeparator + e) : u.push(e));
                if (u.length > 0) {
                    for (n = ("#" + u.join(t.ViewStateManager.separator)).trim(); n.endsWith(t.ViewStateManager.separator); )
                        n = n.substring(0, n.length - 1);
                    r = self.location.href;
                    r.indexOf("#") >= 0 && (r = r.substring(0, r.indexOf("#")));
                    t.ViewStateManager.createBrowserHistory ? self.location.hash = n : self.location.replace(r + n)
                } else
                    self.location.hash = ""
            }
        };
        t.ViewState = function(n, i, r) {
            return i == "" && (i = null),
            this.index = n,
            this.value = r,
            this.defaultValue = r,
            this.id = i,
            t.ViewStateManager.trackers.push(this),
            this
        }
        ;
        t.ViewState.prototype = {
            setValue: function(n) {
                n != i && (this.value = n,
                t.ViewStateManager.update())
            }
        };
        t.ViewStateManager.initialize()
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.ViewTracking = {
            initialize: function() {
                for (var i, n = 0; n < window.cobaltVcmList.length; n++)
                    i = window.cobaltVcmList[n],
                    t.ViewTracking.trackView(i.type, i.id)
            },
            trackView: function(n, i) {
                try {
                    t.Utils.postWithToken("/api/vcm/" + n + "-" + i, {})
                } catch (r) {}
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.VoiceWidget = {
            widgetSettings: "",
            url: "",
            id: "",
            initialize: function(i, r, u) {
                t.VoiceWidget.widgetSettings = u;
                t.VoiceWidget.url = i;
                t.VoiceWidget.id = r;
                var f = n(r);
                n(f).addClass("loading");
                n.ajax({
                    url: i,
                    success: function(i) {
                        n(f).removeClass("loading");
                        n(f).hide();
                        n(f).html(i);
                        n(f).slideDown("fast");
                        n("div.vchans").each(function(t, i) {
                            var r = n(i).attr("data-channel-id")
                              , f = n(".vlabel[data-channel-id='" + r + "']")
                              , u = n(".vchan-tooltip[data-channel-id='" + r + "']");
                            n(u).length > 0 && n(f).tooltip({
                                content: u.html()
                            })
                        });
                        n("div.vclient").each(function(t, i) {
                            var r = n(i).find(".client-tooltip").html();
                            n(i).tooltip({
                                content: r
                            })
                        });
                        t.NiceDates.runNiceDates()
                    }
                });
                n(r).delegate("a.vchan-link", "click", function(t) {
                    var i = n(this).find(".vlabel");
                    i.hasClass("vchanpass") || i.hasClass("vchan") ? (i.hasClass("vchanpass") ? i.removeClass("vchanpass").addClass("vchanpassopen") : i.hasClass("vchan") && i.removeClass("vchan").addClass("vchanopen"),
                    n(i).parent("a").siblings(".vchans").show(),
                    n(i).parent("a").siblings(".vclient").show()) : (i.hasClass("vchanpassopen") || i.hasClass("vchanopen")) && (i.hasClass("vchanpassopen") ? i.removeClass("vchanpassopen").addClass("vchanpass") : i.hasClass("vchanopen") && i.removeClass("vchanopen").addClass("vchan"),
                    n(i).parent("a").siblings(".vchans").hide(),
                    n(i).parent("a").siblings(".vclient").hide());
                    t.preventDefault()
                })
            }
        }
    }
    )(jQuery, Cobalt, undefined)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Warning = {
            initialize: function() {
                var r, u, f, e, o;
                n("#form-field-View-visibility").hide();
                r = function() {
                    n("#field-is-restricted-to-roles").prop("checked") ? (n("#field-View-visibility option.j-protection-mode-roleprotected").prop("selected", !0).change(),
                    n(".restrict-role-container").show()) : (n(".restrict-role-container").hide(),
                    n("#field-View-visibility option.j-protection-mode-public").prop("selected", !0).change())
                }
                ;
                n("#field-is-restricted-to-roles").on("change", r);
                r();
                u = function() {
                    var t = this !== i ? n(this) : n("div.permanent-duration .permanent-field input");
                    t.prop("checked") ? t.parents(".permanent-duration").find(".time-span-container > input,select").prop("disabled", !0) : t.parents(".permanent-duration").find(".time-span-container > input,select").prop("disabled", !1)
                }
                ;
                n("div.permanent-duration .permanent-field input").on("change", u);
                u();
                f = function() {
                    var t = n("div.danger-zone-container");
                    t.hasClass("collapsed") ? (t.removeClass("collapsed"),
                    t.addClass("expanded"),
                    n(".danger-zone").show()) : (t.removeClass("expanded"),
                    t.addClass("collapsed"),
                    n(".danger-zone").hide())
                }
                ;
                n("div.danger-zone-container .title").on("click", f);
                f();
                e = function() {
                    n("#field-can-warning").prop("checked") ? n("#informal-message-edit-container").show() : n("#informal-message-edit-container").hide()
                }
                ;
                n("#field-can-warning").on("change", e);
                e();
                n("#field-warning-message").on("change", function() {
                    o(n(this), "#field-warning-message-preview")
                });
                n("#field-warning-message-inf").on("change", function() {
                    o(n(this), "#field-warning-message-preview-inf")
                });
                o = function(i, r) {
                    var u = i.val()
                      , f = n(r);
                    u ? n.get(t.Routes.Instance.CPGetWarningMessageTemplate(u), function(n) {
                        if (n) {
                            var t = "{0}\r\n\r\n{1}".format(n.title, n.body);
                            f.val(t)
                        }
                    }) : f.val("")
                }
            },
            handleWarnForm: function(t) {
                var r = n(".ajax-warn");
                r.length > 0 && r.ajaxForm({
                    beforeSubmit: function() {
                        r.find(":submit").attr("disabled", "disabled")
                    },
                    success: function(u) {
                        if (u.Status === i || u.Status !== i && u.Status != "invalid")
                            n(".ui-dialog-titlebar-close").click(),
                            t && t(u, r);
                        else {
                            r.find(":submit").removeAttr("disabled");
                            for (var f in u.Errors)
                                n(".ui-dialog-footer").prepend('<span class="field-errors">' + u.Errors[f][0] + "<\/span>");
                            n(".field-errors").is(":visible") && n(".p-modal-a").addClass("warning-error-visible")
                        }
                    }
                })
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.WarningNotification = {
            initialize: function() {
                var e = t.User.ID, o = n.cookie("WarningNotification.Lock"), r, u, f;
                e && !o && (r = new Date,
                r.setTime(r.getTime() + 3e5),
                n.cookie("WarningNotification.Lock", 1, {
                    expires: r,
                    path: "/"
                }),
                u = 500,
                f = 320,
                n.get(t.Routes.Instance.UserWarningAcknowledgementModal(), function(n) {
                    n.length && t.Modal.openModal(t.Routes.Instance.UserWarningAcknowledgementModal(), i, u, f, "p-warning-ack-modal", !1, !1, u, u, f, !1)
                }))
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t, i) {
        t.Widget = {
            editingEnabled: !1,
            widgetAreaWorkspaceID: "widget-area-workspace",
            widgetAreaWorkspaceSelector: "#widget-area-workspace",
            widgetTrashbinSelector: "#widget-trash-bin",
            widgetTrashbinID: "widget-trash-bin",
            initialize: function() {
                t.Widget.createSettings()
            },
            createSettings: function() {
                if (this.settings == null) {
                    this.settings = {};
                    this.settings.widgetSelector = ".widget";
                    this.settings.styleDragging = "dragging";
                    this.settings.widgetPlaceSelector = ".widget-place";
                    this.settings.widgetPlaceLockedSelector = ".widget-place-locked";
                    var t = this;
                    this.callbacks = {
                        onUpdated: function() {
                            var i = t.serializeWidgetPositions();
                            n(t.settings.placementFieldId).val(i)
                        }
                    }
                }
            },
            allAreas: null,
            highlightAcceptableAreas: function(t) {
                var c = t.attr("class"), r = this.allAreas.slice(0), u = c.split(/ /), e = new RegExp(/widget-allowed/), f, o, s, i, h;
                for (f in u)
                    o = e.exec(u[f]),
                    o && (s = u[f].replace(e, "#widget-area"),
                    r = jQuery.grep(r, function(n) {
                        return n != s
                    }));
                n(r.join(",")).sortable("disable");
                i = n("#widget-area-dashboard");
                h = i.length > 0 && i.find(".widget").length >= 3 && t.parents(i.selector).length <= 0;
                h && i.sortable("disable")
            },
            unhighlightAcceptableAreas: function() {
                n(".widget-place").sortable("enable")
            },
            activateWidgets: function() {
                var i = this, r = n(i.settings.widgetPlaceSelector), u;
                this.allAreas = [];
                u = this.allAreas;
                r.each(function() {
                    var t = n(this).attr("id");
                    t != i.widgetAreaWorkspaceID && u.push("#" + t)
                });
                r.sortable({
                    connectWith: i.settings.widgetPlaceSelector,
                    placeholder: "widget-placeholder",
                    items: ".widget:not(.widget-widget-locked)",
                    start: function(t, r) {
                        if (n(r.item).parents(".widget-place-locked").length > 0)
                            return !1;
                        r.item.addClass(i.settings.styleDragging)
                    },
                    stop: function(r, u) {
                        var f = !0
                          , e = n(u.item).parents("#widget-area-dashboard");
                        if (e.length > 0 && e.find(".widget").length > 3 && (f = !1),
                        n(u.item).parents(".disallowed").length > 0 && (f = !1),
                        u.item.removeClass(i.settings.styleDragging),
                        f)
                            n(u.item).parents(".widget-place").length < 1 && n(t.Widget.widgetAreaWorkspaceSelector).append(n(u.item)),
                            n.isFunction(i.callbacks.onUpdated) && i.callbacks.onUpdated();
                        else
                            return !1
                    }
                });
                n(i.settings.widgetSelector).mousedown(function() {
                    i.highlightAcceptableAreas(n(this));
                    n(this).parents(".widget-place-locked").length == 0 && n(i.settings.widgetPlaceSelector).addClass("widget-place-editable")
                });
                n("body").mouseup(function() {
                    i.unhighlightAcceptableAreas();
                    n(i.settings.widgetPlaceSelector).removeClass("widget-place-editable")
                })
            },
            deactivateWidgets: function() {
                n(this.settings.widgetPlaceSelector).sortable("disable")
            },
            serializeWidgetPositions: function() {
                var i = []
                  , r = 0
                  , u = this;
                return n(this.settings.widgetPlaceSelector + "," + this.settings.widgetPlaceLockedSelector).each(function() {
                    var s = this, e = n(s).attr("id"), f, o;
                    e != t.Widget.widgetAreaWorkspaceID && e != t.Widget.widgetTrashbinID && (f = [],
                    o = 0,
                    n(this).find(u.settings.widgetSelector).each(function() {
                        f[o++] = n(this)[0].id
                    }),
                    i[r++] = n(this)[0].id + "=" + f.join(","))
                }),
                i.join("|")
            },
            initializeStaticEditor: function(i, r, u) {
                n(i).hide();
                this.createSettings();
                this.settings.placementFieldId = r;
                this.activateWidgets();
                t.Widget.nextWidgetPlacementID = 0;
                n(i).find("option").each(function(i, r) {
                    var f, e, o;
                    n(r).val() != "" && (f = n(r).val(),
                    e = !0,
                    n(u).each(function(n, t) {
                        t == f && (e = !1)
                    }),
                    e && (o = n(this).attr("data-widget-class"),
                    t.Widget.createWidget(!1, null, f, n(r).text(), t.Widget.widgetAreaWorkspaceID, null, o)))
                })
            },
            getWidgetSelector: function(r, u, f) {
                var e = n("#widget-selection");
                e != i && e.length > 0 && n.ajax({
                    url: t.Routes.Instance.GuildGetWidgetSelector() + "?templateID=" + r + "&siteID=" + u,
                    success: function(t) {
                        n(e).empty();
                        n(e).html(t);
                        n(".accordion").accordion({
                            clearStyle: !0,
                            autoHeight: !1
                        });
                        f && f()
                    }
                })
            },
            createWidget: function(i, r, u, f, e, o, s) {
                var h, v, c, l, a, p, y;
                u != null && u != 0 && (n("#field-AvailableWidgets option[value='" + u + "']").remove(),
                o == null && (o = "+" + t.Widget.nextWidgetPlacementID++),
                h = n('<div class="divborder widget">'),
                s && h.addClass(s),
                v = "w-" + u + "_" + o,
                h.attr("id", v),
                c = n('<div class="divheader widget-header">').append(n("<span>").append(f).append(" ")),
                l = n('<div class="widget-menu">'),
                i && l.append(n("<a>").attr("href", t.Routes.Instance.ControlPanelWidgetSettings(r)).append(n('<span class="icon edit">'))),
                a = this,
                p = n('<span class="icon cancel">').click(function() {
                    n(this).parents(a.settings.widgetSelector).remove();
                    a.callbacks.onUpdated()
                }),
                c.append(l),
                y = n('<div class="divcontent widget-content">').append("(" + L.GuildSite.GuildRegistration.WidgetContent() + ")"),
                h.append(c).append(y),
                this.addWidget(h, e),
                this.callbacks.onUpdated())
            },
            addWidget: function(t, i) {
                var r = n("#" + i);
                r.length > 0 ? r.append(t) : n("#widget-area-workspace").append(t);
                this.activateWidgets()
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict";
    (function(n, t) {
        t.WidgetSettings = {
            initialize: function() {
                var t;
                if (n(".body-cp-widgetsettings").length != 0 && (t = n("#field-use-ice"),
                t.length > 0)) {
                    var f = t.is(":checked")
                      , i = n("#form-field-host")
                      , r = n("#form-field-port")
                      , u = n("#form-field-json-url");
                    f ? (i.show(),
                    r.show(),
                    u.hide()) : (i.hide(),
                    r.hide(),
                    u.show());
                    t.change(function() {
                        i.toggle();
                        r.toggle();
                        u.toggle()
                    })
                }
            }
        }
    }
    )(jQuery, Cobalt, undefined)
}
, function() {
    "use strict";
    (function(n, t) {
        var i = function(n) {
            if (n) {
                var t = n.transformType;
                delete n.transformType;
                t == "Linear" || (t == "Logarithmic" ? (n.transform = function(n) {
                    return Math.log(n)
                }
                ,
                n.inverseTransform = function(n) {
                    return Math.exp(n)
                }
                ) : t == "Logarithmic10" ? (n.transform = function(n) {
                    return Math.log(n) / Math.LN2
                }
                ,
                n.inverseTransform = function(n) {
                    return Math.pow(2, n)
                }
                ) : t == "Logarithmic10" ? (n.transform = function(n) {
                    return Math.log(n) / Math.LN10
                }
                ,
                n.inverseTransform = function(n) {
                    return Math.pow(10, n)
                }
                ) : t == "Exponential" ? (n.transform = function(n) {
                    return Math.exp(n)
                }
                ,
                n.inverseTransform = function(n) {
                    return Math.log(n)
                }
                ) : t == "Exponential2" ? (n.transform = function(n) {
                    return Math.pow(2, n)
                }
                ,
                n.inverseTransform = function(n) {
                    return Math.log(n) / Math.LN2
                }
                ) : t == "Exponential10" && (n.transform = function(n) {
                    return Math.pow(10, n)
                }
                ,
                n.inverseTransform = function(n) {
                    return Math.log(n) / Math.LN10
                }
                ))
            }
        };
        t.flot = {
            fixOptions: function(n) {
                return i(n.xaxis),
                i(n.yaxis),
                n
            }
        }
    }
    )(jQuery, Cobalt)
}
, function() {
    "use strict"
}
, function(n, t, i) {
    "use strict";
    ["Array.clean", "Array.distinct", "Array.every", "Array.filter", "Array.forEach", "Array.indexOf", "Array.lastIndexOf", "Array.map", "Array.reduce", "Array.reduceRight", "Array.some", "Array.sortBy", "String.endsWith", "String.compare", "String.format", "String.startsWith", "String.trim", "String.trimLeft", "String.trimRight", "Object.toCommaThousands"].forEach(function(n) {
        i(132)("./" + n + ".js")
    })
}
, function(n, t, i) {
    function r(n) {
        return i(f(n))
    }
    function f(n) {
        var t = u[n];
        if (!(t + 1))
            throw new Error("Cannot find module '" + n + "'.");
        return t
    }
    var u = {
        "./Array.clean.js": 133,
        "./Array.distinct.js": 134,
        "./Array.every.js": 135,
        "./Array.filter.js": 136,
        "./Array.forEach.js": 137,
        "./Array.inArray.js": 138,
        "./Array.indexOf.js": 139,
        "./Array.lastIndexOf.js": 140,
        "./Array.map.js": 141,
        "./Array.reduce.js": 142,
        "./Array.reduceRight.js": 143,
        "./Array.some.js": 144,
        "./Array.sortBy.js": 145,
        "./Object.toCommaThousands.js": 146,
        "./String.compare.js": 147,
        "./String.endsWith.js": 148,
        "./String.format.js": 149,
        "./String.startsWith.js": 150,
        "./String.trim.js": 151,
        "./String.trimLeft.js": 152,
        "./String.trimRight.js": 153
    };
    r.keys = function() {
        return Object.keys(u)
    }
    ;
    r.resolve = f;
    n.exports = r;
    r.id = 132
}
, function() {
    "use strict";
    (function() {
        Array.prototype.clean || (Array.prototype.clean = function() {
            return this.filter(function(n) {
                return n != ""
            })
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.distint || (Array.prototype.distinct = function() {
            for (var r = this.length, t = [], i = {}, n = 0; n < r; n++)
                i[this[n]] = 0;
            for (n in i)
                t.push(n);
            return t
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.every || (Array.prototype.every = function(n) {
            var r = this.length >>> 0, i, t;
            if (typeof n != "function")
                throw new TypeError;
            for (i = arguments[1],
            t = 0; t < r; t++)
                if (t in this && !n.call(i, this[t], t, this))
                    return !1;
            return !0
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.filter || (Array.prototype.filter = function(n) {
            var f = this.length >>> 0, i, u, t, r;
            if (typeof n != "function")
                throw new TypeError;
            for (i = [],
            u = arguments[1],
            t = 0; t < f; t++)
                t in this && (r = this[t],
                n.call(u, r, t, this) && i.push(r));
            return i
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.forEach || (Array.prototype.forEach = function(n) {
            var r = this.length >>> 0, i, t;
            if (typeof n != "function")
                throw new TypeError;
            for (i = arguments[1],
            t = 0; t < r; t++)
                t in this && n.call(i, this[t], t, this)
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.inArray || (Array.prototype.inArray = function(n, t) {
            for (var i = 0; i < this.length; i++)
                if (t) {
                    if (this[i].toLowerCase() == n.toLowerCase())
                        return !0
                } else if (this[i] == n)
                    return !0;
            return !1
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(n) {
            var i = this.length >>> 0
              , t = Number(arguments[1]) || 0;
            for (t = t < 0 ? Math.ceil(t) : Math.floor(t),
            t < 0 && (t += i); t < i; t++)
                if (t in this && this[t] === n)
                    return t;
            return -1
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function(n) {
            var i = this.length
              , t = Number(arguments[1]);
            for (isNaN(t) ? t = i - 1 : (t = t < 0 ? Math.ceil(t) : Math.floor(t),
            t < 0 ? t += i : t >= i && (t = i - 1)); t > -1; t--)
                if (t in this && this[t] === n)
                    return t;
            return -1
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.map || (Array.prototype.map = function(n) {
            var r = this.length >>> 0, i, u, t;
            if (typeof n != "function")
                throw new TypeError;
            for (i = new Array(r),
            u = arguments[1],
            t = 0; t < r; t++)
                t in this && (i[t] = n.call(u, this[t], t, this));
            return i
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.reduce || (Array.prototype.reduce = function(n) {
            var r = this.length >>> 0, t, i;
            if (typeof n != "function")
                throw new TypeError;
            if (r == 0 && arguments.length == 1)
                throw new TypeError;
            if (t = 0,
            arguments.length >= 2)
                i = arguments[1];
            else
                do {
                    if (t in this) {
                        i = this[t++];
                        break
                    }
                    if (++t >= r)
                        throw new TypeError;
                } while (1);
            for (; t < r; t++)
                t in this && (i = n.call(null, i, this[t], t, this));
            return i
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.reduceRight || (Array.prototype.reduceRight = function(n) {
            var r = this.length >>> 0, t, i;
            if (typeof n != "function")
                throw new TypeError;
            if (r == 0 && arguments.length == 1)
                throw new TypeError;
            if (t = r - 1,
            arguments.length >= 2)
                i = arguments[1];
            else
                do {
                    if (t in this) {
                        i = this[t--];
                        break
                    }
                    if (--t < 0)
                        throw new TypeError;
                } while (1);
            for (; t >= 0; t--)
                t in this && (i = n.call(null, i, this[t], t, this));
            return i
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        Array.prototype.some || (Array.prototype.some = function(n) {
            var t = 0, r = this.length >>> 0, i;
            if (typeof n != "function")
                throw new TypeError;
            for (i = arguments[1]; t < r; t++)
                if (t in this && n.call(i, this[t], t, this))
                    return !0;
            return !1
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        if (!Array.prototype.sortBy) {
            var n = function(n, t) {
                var i = n.key
                  , r = t.key;
                return i < r ? -1 : i > r ? 1 : 0
            };
            Array.prototype.sortBy = function(t) {
                for (var r, u = this.length, i = 0; i < u; i++)
                    r = this[i],
                    this[i] = {
                        value: r,
                        key: t(r)
                    };
                for (this.sort(n),
                i = 0; i < u; i++)
                    this[i] = this[i].value
            }
        }
    }
    )()
}
, function() {
    "use strict";
    (function() {
        var n = /\B(?=(\d{3})+(?!\d))/g;
        String.prototype.toCommaThousands = function() {
            return (parseInt(this) || 0).toString().replace(n, ",")
        }
        ;
        Number.prototype.toCommaThousands = function() {
            return this.toString().replace(n, ",")
        }
    }
    )()
}
, function() {
    "use strict";
    (function() {
        String.prototype.compare || (String.prototype.compare = function(n) {
            var t = this;
            return t == n ? 0 : t == null ? -1 : n == null ? 1 : t < n ? -1 : 1
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        String.prototype.endsWith || (String.prototype.endsWith = function(n) {
            return n = String(n),
            this.length >= n.length && this.substring(this.length - n.length, this.length) == n
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        var n = /\{(\d+)(?::[^\}]+)?\}/g;
        String.prototype.format = function() {
            var t = arguments;
            return this.replace(n, function(n, i) {
                return String(t[parseInt(i, 10)])
            })
        }
    }
    )()
}
, function() {
    "use strict";
    (function() {
        String.prototype.startsWith || (String.prototype.startsWith = function(n) {
            return n = String(n),
            this.length >= n.length && this.substring(0, n.length) == n
        }
        )
    }
    )()
}
, function() {
    "use strict";
    (function() {
        if (!String.prototype.trim) {
            var n = /^\s*(.*?)\s*$/;
            String.prototype.trim = function() {
                return this.replace(n, "$1")
            }
        }
    }
    )()
}
, function() {
    "use strict";
    (function() {
        if (!String.prototype.trimLeft) {
            var n = /^\s*(.*)$/;
            String.prototype.trimLeft = function() {
                return this.replace(n, "$1")
            }
        }
    }
    )()
}
, function() {
    "use strict";
    (function() {
        if (!String.prototype.trimRight) {
            var n = /^(.*?)\s*$/;
            String.prototype.trimRight = function() {
                return this.replace(n, "$1")
            }
        }
    }
    )()
}
]),
function(n, t, i, r) {
    function s(n, t) {
        return typeof n === t
    }
    function it() {
        var i, n, r, f, e, o, t;
        for (var h in c)
            if (c.hasOwnProperty(h)) {
                if (i = [],
                n = c[h],
                n.name && (i.push(n.name.toLowerCase()),
                n.options && n.options.aliases && n.options.aliases.length))
                    for (r = 0; r < n.options.aliases.length; r++)
                        i.push(n.options.aliases[r].toLowerCase());
                for (f = s(n.fn, "function") ? n.fn() : n.fn,
                e = 0; e < i.length; e++)
                    o = i[e],
                    t = o.split("."),
                    t.length === 1 ? u[t[0]] = f : (u[t[0]] && (!u[t[0]] || u[t[0]]instanceof Boolean) || (u[t[0]] = new Boolean(u[t[0]])),
                    u[t[0]][t[1]] = f),
                    v.push((f ? "" : "no-") + t.join("-"))
            }
    }
    function rt(n) {
        var t = o.className, i = u._config.classPrefix || "", r;
        l && (t = t.baseVal);
        u._config.enableJSClass && (r = new RegExp("(^|\\s)" + i + "no-js(\\s|$)"),
        t = t.replace(r, "$1" + i + "js$2"));
        u._config.enableClasses && (n.length > 0 && (t += " " + i + n.join(" " + i)),
        l ? o.className.baseVal = t : o.className = t)
    }
    function h() {
        return typeof i.createElement != "function" ? i.createElement(arguments[0]) : l ? i.createElementNS.call(i, "http://www.w3.org/2000/svg", arguments[0]) : i.createElement.apply(i, arguments)
    }
    function ut() {
        var n = i.body;
        return n || (n = h(l ? "svg" : "body"),
        n.fake = !0),
        n
    }
    function k(n, t, r, u) {
        var c = "modernizr", e, a, l, v, s = h("div"), f = ut();
        if (parseInt(r, 10))
            while (r--)
                l = h("div"),
                l.id = u ? u[r] : c + (r + 1),
                s.appendChild(l);
        return e = h("style"),
        e.type = "text/css",
        e.id = "s" + c,
        (f.fake ? f : s).appendChild(e),
        f.appendChild(s),
        e.styleSheet ? e.styleSheet.cssText = n : e.appendChild(i.createTextNode(n)),
        s.id = c,
        f.fake && (f.style.background = "",
        f.style.overflow = "hidden",
        v = o.style.overflow,
        o.style.overflow = "hidden",
        o.appendChild(f)),
        a = t(s, n),
        f.fake && f.parentNode ? (f.parentNode.removeChild(f),
        o.style.overflow = v,
        o.offsetHeight) : s.parentNode.removeChild(s),
        !!a
    }
    function ft(n, t) {
        return !!~("" + n).indexOf(t)
    }
    function g(n) {
        return n.replace(/([A-Z])/g, function(n, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function et(n, i, r) {
        var u, f, e;
        return "getComputedStyle"in t ? (u = getComputedStyle.call(t, n, i),
        f = t.console,
        u !== null ? r && (u = u.getPropertyValue(r)) : f && (e = f.error ? "error" : "log",
        f[e].call(f, "getComputedStyle returning null, its possible modernizr test results are inaccurate"))) : u = !i && n.currentStyle && n.currentStyle[r],
        u
    }
    function ot(n, i) {
        var f = n.length, u;
        if ("CSS"in t && "supports"in t.CSS) {
            while (f--)
                if (t.CSS.supports(g(n[f]), i))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in t) {
            for (u = []; f--; )
                u.push("(" + g(n[f]) + ":" + i + ")");
            return u = u.join(" or "),
            k("@supports (" + u + ") { #modernizr { position: absolute; } }", function(n) {
                return et(n, null, "position") === "absolute"
            })
        }
        return r
    }
    function st(n) {
        return n.replace(/([a-z])-([a-z])/g, function(n, t, i) {
            return t + i.toUpperCase()
        }).replace(/^-/, "")
    }
    function ht(n, t, i, u) {
        function a() {
            v && (delete f.style,
            delete f.modElem)
        }
        var c, v, o, y, e, p, l;
        if (u = s(u, "undefined") ? !1 : u,
        !s(i, "undefined") && (c = ot(n, i),
        !s(c, "undefined")))
            return c;
        for (l = ["modernizr", "tspan", "samp"]; !f.style && l.length; )
            v = !0,
            f.modElem = h(l.shift()),
            f.style = f.modElem.style;
        for (y = n.length,
        o = 0; o < y; o++)
            if (e = n[o],
            p = f.style[e],
            ft(e, "-") && (e = st(e)),
            f.style[e] !== r) {
                if (u || s(i, "undefined"))
                    return a(),
                    t === "pfx" ? e : !0;
                try {
                    f.style[e] = i
                } catch (w) {}
                if (f.style[e] !== p)
                    return a(),
                    t === "pfx" ? e : !0
            }
        return a(),
        !1
    }
    function ct(n, t) {
        return function() {
            return n.apply(t, arguments)
        }
    }
    function lt(n, t, i) {
        var r;
        for (var u in n)
            if (n[u]in t)
                return i === !1 ? n[u] : (r = t[n[u]],
                s(r, "function")) ? ct(r, i || t) : r;
        return !1
    }
    function nt(n, t, i, r, u) {
        var f = n.charAt(0).toUpperCase() + n.slice(1)
          , e = (n + " " + p.join(f + " ") + f).split(" ");
        return s(t, "string") || s(t, "undefined") ? ht(e, t, r, u) : (e = (n + " " + b.join(f + " ") + f).split(" "),
        lt(e, t, i))
    }
    function tt(n, t, i) {
        return nt(n, r, r, t, i)
    }
    var c = [], e = {
        _version: "3.11.8",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(n, t) {
            var i = this;
            setTimeout(function() {
                t(i[n])
            }, 0)
        },
        addTest: function(n, t, i) {
            c.push({
                name: n,
                fn: t,
                options: i
            })
        },
        addAsyncTest: function(n) {
            c.push({
                name: null,
                fn: n
            })
        }
    }, u = function() {}, v, o, l, d, y, p, w, f, b, a;
    for (u.prototype = e,
    u = new u,
    v = [],
    o = i.documentElement,
    l = o.nodeName.toLowerCase() === "svg",
    d = e.testStyles = k,
    u.addTest("hiddenscroll", function() {
        return d("#modernizr {width:100px;height:100px;overflow:scroll}", function(n) {
            return n.offsetWidth === n.clientWidth
        })
    }),
    y = "Moz O ms Webkit",
    p = e._config.usePrefixes ? y.split(" ") : [],
    e._cssomPrefixes = p,
    w = {
        elem: h("modernizr")
    },
    u._q.push(function() {
        delete w.elem
    }),
    f = {
        style: w.elem.style
    },
    u._q.unshift(function() {
        delete f.style
    }),
    b = e._config.usePrefixes ? y.toLowerCase().split(" ") : [],
    e._domPrefixes = b,
    e.testAllProps = nt,
    e.testAllProps = tt,
    u.addTest("cssmask", tt("maskRepeat", "repeat-x", !0)),
    it(),
    rt(v),
    delete e.addTest,
    delete e.addAsyncTest,
    a = 0; a < u._q.length; a++)
        u._q[a]();
    n.Modernizr = u
}(window, window, document)
