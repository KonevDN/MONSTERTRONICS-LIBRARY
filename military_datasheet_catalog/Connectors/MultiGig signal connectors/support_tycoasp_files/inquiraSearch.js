// Show/hide function for search selector FOR COMPONENTS PAGES
var detailVisible = false; 

function TE_displaySearchText() {
	var locale = TE_getLocale();
	
	dojo.requireLocalization("te", "ewt", locale);
	var ewt = dojo.i18n.getLocalization("te", "ewt", locale);

	var searchSel1Node = dojo.byId("TE_Inquira_searchselector");
	var searchSel2Node = dojo.byId("search_selector");
	var searchByNode = dojo.byId("TE_Inquira_searchBy");
	var searchButton = dojo.byId("TE_searchButton");
	var partNumOption = dojo.byId("inquiraTypePart");
	var textOption = dojo.byId("inquiraTypeText");
	var closeSearchSelImage = dojo.byId("TE_close_searchselector");
	var searchSel1ClassName = "TE_Inquira_searchselector";
	var searchSel2ClassName = "search_selector";	

	var langId = dojo.io.cookie.getCookie("language_id");
	
	if (langId && langId.length > 0 && langId != "1") {
		searchSel1ClassName = searchSel1ClassName + "_" + langId;
		searchSel2ClassName = searchSel2ClassName + "_nonEng";
	}

	dojo.html.setClass(searchSel1Node, searchSel1ClassName);
	dojo.html.setClass(searchSel2Node, searchSel2ClassName);
	
	searchButton.value = "  " + ewt.searchMessage + "  ";
	searchByNode.appendChild(document.createTextNode(ewt.searchByMessage));
	partNumOption.appendChild(document.createTextNode(ewt.partNumberMessage));
	textOption.appendChild(document.createTextNode(ewt.textMessage));
	closeSearchSelImage.alt = ewt.closeSearchSelMessage;
	closeSearchSelImage.title = ewt.closeSearchSelMessage;
}

function showTE_Inquira_searchselector(layerToShow)
{
	if(detailVisible == false)
	{
		dojo.byId(layerToShow).style.display="block";
		detailVisible = true;
		if( dojo.byId("search_type").value == "Text" ){
			dojo.byId("search_selector").selectedIndex = 1
		}
        else {
			dojo.byId("search_selector").selectedIndex = 0
		}

	}
}

function closeTE_Inquira_searchselector(layerToShow)
{
	if(detailVisible == true)
	{
		dojo.html.hide(layerToShow);
		detailVisible = false;
	}
}
// End show/hide function for search selector FOR COMPONENTS PAGES


var qna_submitOK = true;

function TE_SetSearchType(){
	var searchTypeIndex;
	searchTypeIndex = dojo.byId("search_selector").selectedIndex
	if (searchTypeIndex == 1){
		dojo.byId("search_type").value = "Text";
	} 
	else {
		dojo.byId("search_type").value = "Part";
	}
}



function search_inquira_submitQuestion()
{   
    // leave if button is disabled - shouldn't be here...
	if (!qna_submitOK){
        return false;
	}
    // Prevent another quick submit and submit this question
    disableSubmit();    
    // Set the type of search Part vs Text
	TE_SetSearchType()
	// Strip leading and trailing whitespace of all kinds
	var qboxValue = dojo.byId("question_box").value.replace(/^\s+/g,'').replace(/\s+$/g,'');
    dojo.byId("question_box").value = qboxValue;
	// Post the question to the page (action reference)
    dojo.byId("inquiraSearchForm").submit();

    
    // Wait 10 seconds before submit available
    setTimeout("enableSubmit();", 10000);

    return false;
}


/**
  * Disable the submit feature.
  */
function disableSubmit()
{
    qna_submitOK = false;
    dojo.byId("TE_searchButton").disabled = true;
}

/**
  * Enable the submit feature.
  */
function enableSubmit()
{
    qna_submitOK = true;
    dojo.byId("TE_searchButton").disabled = false;
}


