// Credits to Hirako for the full spreadsheet
// Credits to https://github.com/gendelbendel for parsing the save data and making all the constants

/**
 * Creates a custom menu in Google Sheets when the spreadsheet opens.
 */
function onOpen() {
  try {
    SpreadsheetApp.getUi().createMenu('🥔 Menu')
        .addItem('Import your save data', 'ShowImportDialog')
        .addToUi();
  } catch (e) {
    console.log('Failed with error: %s', e.error);
  }
}


function ShowImportDialog() {
  var html = HtmlService.createHtmlOutputFromFile('ImportSaveDialog')
      .setTitle('Import your save file');
  
  SpreadsheetApp
    .getUi()
    .showSidebar(html);
}

function _SetCellValue(cellData) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(cellData.sheetName);
  sheet.getRange(cellData.cell).setValue(cellData.value);
}

function SetAllCellValue(list) {
  list.forEach(_SetCellValue);
}
