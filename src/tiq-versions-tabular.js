var versionData = jQuery("div.hist_verEvent");
var versionTitle = jQuery("div.hist_versionTitleBox");
if (versionTitle.length > 0 && versionData.length > 0 && jQuery("div#injectedFlatVersionModal").length === 0) {
    // Get version title from DOM
    var titleList = [];
    jQuery(versionTitle).each(function () {
        var titleId = jQuery(this).attr("id");
        var titleIdDateStamp = titleId.replace("hist_verTitle_", "");
        var title = jQuery(this).find("div.hist_versionTitleLabel").text();

        titleList.push({
            id: titleId,
            idDateStamp: titleIdDateStamp,
            title: title
        });
    });

    // Get version data from DOM and merge with title
    var outputItems = [];
    for (var i = 0; i < titleList.length; i++) {
        var version = jQuery("div.hist_eventVer_" + titleList[i].idDateStamp)[0];

        // Generate UL of all changes in current version
        var changesMade = jQuery("<ul class='changesMade' />");
        jQuery(version).find("div.histEventAudit div.row").each(function () {
            jQuery(changesMade).append("<li>" + jQuery(this).text().trim() + "</li>");
        });

        // Generate UL of assigned labels in current version
        var assignedLabelsList = jQuery("<ul class='assignedLabels' />");
        jQuery(version).find("div.histEventLabels > div.labels > div.label").each(function () {
            jQuery(assignedLabelsList).append("<li>[" + jQuery(this).attr("title").trim() + "]</li>");
        });

        // Generate UL of libraries connected to current version
        var linkedProfilesList = jQuery("<ul class='linkedProfiles' />");
        jQuery(version).find("div.histEventLinkedProfiles div.linkedProfilesList div.listProfile").each(function () {
            jQuery(linkedProfilesList).append("<li>" + jQuery(this).text().trim() + "</li>");
        });

        outputItems.push({
            title: titleList[i].title.trim(),
            idDateStamp: titleList[i].idDateStamp.trim(),
            date: jQuery(version).find("div.histEventDate")[0].textContent.trim(),
            status: jQuery(version).find("div.histEventStatus")[0].textContent.replace("Published to: ", "").trim(),
            operator: jQuery(version).find("div.histEventOperator")[0].textContent.replace("By: ", "").trim(),
            labels: assignedLabelsList[0].outerHTML,
            notes: jQuery(version).find("div.histEventNotes")[0].textContent.trim(),
            linkedProfiles: linkedProfilesList[0].outerHTML,
            changesMade: changesMade[0].outerHTML
        });

    }

    // Generate HTML table with version information
    var outputTable = jQuery("<table />");
    jQuery(outputTable).append("<tr><th style='width: 200px;'>Date</th><th style='width: 440px;'>Title, Notes and Changes</th><th style='width: 200px;'>Libraries</th><th style='width: 250px;'>Operator</th></tr>");

    for (var i = 0; i < outputItems.length; i++) {
        var dateString = new Date(outputItems[i].date);

        jQuery(outputTable).append(
            "<tr>" +
            "<td>" + dateString.toLocaleString("en-GB") + "<br/><br/>" +
            outputItems[i].status + "<br/><br/>" +
            outputItems[i].labels + "<br/></td>" +
            "<td><strong>" + outputItems[i].title + "</strong><br/>" +
            outputItems[i].notes + "<br/><br/>" +
            outputItems[i].changesMade + "<br/></td>" +
            "<td>" + outputItems[i].linkedProfiles + "</td>" +
            "<td>" + outputItems[i].operator + "</td>" +
            "</tr>"
        );
    }

    // Define CSS for HTML table
    var modalCss = jQuery(
        "<style id='injectedFlatVersionCss'>" +
        "div#injectedFlatVersionModal table, div#injectedFlatVersionModal th, div#injectedFlatVersionModal td {" +
        "border: 0;" +
        "border-collapse: collapse;" +
        "}" +
        "div#injectedFlatVersionModal th, div#injectedFlatVersionModal td {" +
        "padding: 5px;" +
        "padding-right: 20px;" +
        "text-align: left;" +
        "vertical-align: top;" +
        "border-bottom: 1px solid #ddd;" +
        "}" +
        "div#injectedFlatVersionModal tr:nth-child(even) {" +
        "background-color: #f2f2f2;" +
        "}" +
        "div#injectedFlatVersionModal tr:hover {" +
        "background-color: #c0c0c0;" +
        "}" +
        "div#injectedFlatVersionModal th {" +
        "background-color: #777;" +
        "color: #fff;" +
        "}" +
        "ul.assignedLabels {" +
        "list-style-type: none;" +
        "padding-left: 0;" +
        "}" +
        "ul.changesMade li, ul.linkedProfiles li {" +
        "padding-bottom: 5px;" +
        "}" +
        "</style>"
    );
    jQuery("body").append(modalCss);

    // Define jQuery UI modal to display HTML table in
    jQuery("<div id='injectedFlatVersionModal' title='TiQ Versions Tabular'>" + outputTable[0].outerHTML + "</div>").dialog({
        height: "auto",
        width: "80%",
        resizable: false,
        modal: true,
        buttons: [
            {
                text: "Close",
                width: "80px",
                height: "30px",
                click: function () {
                    jQuery(this).dialog("close");
                }
            }
        ],
        close: function (ev, ui) {
            jQuery("style#injectedFlatVersionCss").remove();
            jQuery("div#injectedFlatVersionModal").remove();
        }
    });

}
