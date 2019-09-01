# TiQ Versions Tabular
A bookmarklet displaying a simplified tabular view of Versions in open Tealium iQ Profile.

I created this bookmarklet to make it easier for myself to overview Versions created in a Tealium iQ Profile.

The built-in Versions overview in Tealium iQ is very feature-rich and has a very graphical angle.
This is all very good, but often I have experienced a need for a much more basic way of overviewing Versions, while working in Telium iQ.

It would surprise me if others hadn't had the same thoughts as me
So, in the spirit of "Sharing is Caring", I now release this bookmarklet for public use.

I hope you find it useful, and welcome comments and contributions.  
Information about other helper tools you might know of, will also be greatly appreciated.

If you choose to make your own versions, or just make updates to this one, then please do share your work :-)

All the best,  
*Peter*

## How to add it

I wanted to add a link button here, to make it easy to drag the bookmarklet to the browser.
But, sadly that didn't work, probably because of the big "link" size.

You can copy the content of the file [/dist/tiq-versions-tabular-bookmarklet.txt](https://github.com/pmeyerdk/tiq-versions-tabular/blob/master/dist/tiq-versions-tabular-bookmarklet.txt?raw=true) into a bookmark manually.

You can also grab the following bookmarklet code, which might be older than the above mentioned file.

```javascript
javascript:void%20function(){var%20e=jQuery(%22div.hist_verEvent%22),t=jQuery(%22div.hist_versionTitleBox%22);if(t.length%3E0%26%26e.length%3E0%26%260===jQuery(%22div%23injectedFlatVersionModal%22).length){var%20i=[];jQuery(t).each(function(){var%20e=jQuery(this).attr(%22id%22),t=e.replace(%22hist_verTitle_%22,%22%22),r=jQuery(this).find(%22div.hist_versionTitleLabel%22).text();i.push({id:e,idDateStamp:t,title:r})});for(var%20r=[],d=0;d%3Ci.length;d++){var%20l=jQuery(%22div.hist_eventVer_%22+i[d].idDateStamp)[0],a=jQuery(%22%3Cul%20class='changesMade'%20/%3E%22);jQuery(l).find(%22div.histEventAudit%20div.row%22).each(function(){jQuery(a).append(%22%3Cli%3E%22+jQuery(this).text().trim()+%22%3C/li%3E%22)});var%20n=jQuery(%22%3Cul%20class='assignedLabels'%20/%3E%22);jQuery(l).find(%22div.histEventLabels%20%3E%20div.labels%20%3E%20div.label%22).each(function(){jQuery(n).append(%22%3Cli%3E[%22+jQuery(this).attr(%22title%22).trim()+%22]%3C/li%3E%22)});var%20o=jQuery(%22%3Cul%20class='linkedProfiles'%20/%3E%22);jQuery(l).find(%22div.histEventLinkedProfiles%20div.linkedProfilesList%20div.listProfile%22).each(function(){jQuery(o).append(%22%3Cli%3E%22+jQuery(this).text().trim()+%22%3C/li%3E%22)}),r.push({title:i[d].title.trim(),idDateStamp:i[d].idDateStamp.trim(),date:jQuery(l).find(%22div.histEventDate%22)[0].textContent.trim(),status:jQuery(l).find(%22div.histEventStatus%22)[0].textContent.replace(%22Published%20to:%20%22,%22%22).trim(),operator:jQuery(l).find(%22div.histEventOperator%22)[0].textContent.replace(%22By:%20%22,%22%22).trim(),labels:n[0].outerHTML,notes:jQuery(l).find(%22div.histEventNotes%22)[0].textContent.trim(),linkedProfiles:o[0].outerHTML,changesMade:a[0].outerHTML})}var%20s=jQuery(%22%3Ctable%20/%3E%22);jQuery(s).append(%22%3Ctr%3E%3Cth%20style='width:%20200px;'%3EDate%3C/th%3E%3Cth%20style='width:%20440px;'%3ETitle,%20Notes%20and%20Changes%3C/th%3E%3Cth%20style='width:%20200px;'%3ELibraries%3C/th%3E%3Cth%20style='width:%20250px;'%3EOperator%3C/th%3E%3C/tr%3E%22);for(var%20d=0;d%3Cr.length;d++){var%20u=new%20Date(r[d].date);jQuery(s).append(%22%3Ctr%3E%3Ctd%3E%22+u.toLocaleString(%22en-GB%22)+%22%3Cbr/%3E%3Cbr/%3E%22+r[d].status+%22%3Cbr/%3E%3Cbr/%3E%22+r[d].labels+%22%3Cbr/%3E%3C/td%3E%3Ctd%3E%3Cstrong%3E%22+r[d].title+%22%3C/strong%3E%3Cbr/%3E%22+r[d].notes+%22%3Cbr/%3E%3Cbr/%3E%22+r[d].changesMade+%22%3Cbr/%3E%3C/td%3E%3Ctd%3E%22+r[d].linkedProfiles+%22%3C/td%3E%3Ctd%3E%22+r[d].operator+%22%3C/td%3E%3C/tr%3E%22)}var%20h=jQuery(%22%3Cstyle%20id='injectedFlatVersionCss'%3Ediv%23injectedFlatVersionModal%20table,%20div%23injectedFlatVersionModal%20th,%20div%23injectedFlatVersionModal%20td%20{border:%200;border-collapse:%20collapse;}div%23injectedFlatVersionModal%20th,%20div%23injectedFlatVersionModal%20td%20{padding:%205px;padding-right:%2020px;text-align:%20left;vertical-align:%20top;border-bottom:%201px%20solid%20%23ddd;}div%23injectedFlatVersionModal%20tr:nth-child(even)%20{background-color:%20%23f2f2f2;}div%23injectedFlatVersionModal%20tr:hover%20{background-color:%20%23c0c0c0;}div%23injectedFlatVersionModal%20th%20{background-color:%20%23777;color:%20%23fff;}ul.assignedLabels%20{list-style-type:%20none;padding-left:%200;}ul.changesMade%20li,%20ul.linkedProfiles%20li%20{padding-bottom:%205px;}%3C/style%3E%22);jQuery(%22body%22).append(h),jQuery(%22%3Cdiv%20id='injectedFlatVersionModal'%20title='TiQ%20Versions%20Tabular'%3E%22+s[0].outerHTML+%22%3C/div%3E%22).dialog({height:%22auto%22,width:%2280%25%22,resizable:!1,modal:!0,buttons:[{text:%22Close%22,width:%2280px%22,height:%2230px%22,click:function(){jQuery(this).dialog(%22close%22)}}],close:function(e,t){jQuery(%22style%23injectedFlatVersionCss%22).remove(),jQuery(%22div%23injectedFlatVersionModal%22).remove()}})}}();
```

## How to use it

**1. Click the bookmarklet link**

**2. The Versions overview is now shown**
![TiQ Versions Tabular - Opened](https://github.com/pmeyerdk/tiq-versions-tabular/blob/master/docs/tiq-versions-tabular-modal.png?raw=true)
*(Click above screenshot :point_up_2: to see it in a bigger versions)*

Depending on how many versions are listed, a vertical scroll-bar will visible in the right-hand side of the modal.

And yes, the "Operator" column is empty in the screenshot.
For privacy reasons, I have chosen to remove my own email address.

## Table column description

Date | Title, Notes and Changes	| Libraries	| Operator
------------- | ------------- | ------------- | -------------
Version date and time	| Version title	| Libraries connected to the version *(bulleted list)*	| Email address of the person who saved the version
Environments version was published to *(comma-separated list)*	| Notes added to version ||
Labels added to the version *(hard brackes)*| Changes in the version *(bulleted list)* ||

## Contact Details

**Blog**  
https://pmeyer.dk

**Twitter**  
https://twitter.com/pmeyerdk

**LinkedIn**  
https://www.linkedin.com/in/pmeyerdk/
