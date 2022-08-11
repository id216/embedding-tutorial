console.log("hey back to school DS23")
let viz;
//Create a variable to store the viz container 
//create a variable to store the dashboard options 
//create a variable to store the URL
const vizContainer = document.getElementById("vizContainer");
const option ={
    device:"desktop",
    height:"800px",
    width:"1100px"

    
};
const url="https://public.tableau.com/views/SpaceXvsBlueOrigin/Dashboard1?";
function initViz(){
    viz = new tableau.Viz(vizContainer,url,option)
}


//listeners go here
document.addEventListener("DOMContentLoaded",initViz);


//Buttons goe here
const exportpdfbutton = document.getElementById("exportPDF");
exportpdfbutton.addEventListener("click",exportPDFfunction);
function exportPDFfunction() {
    viz.showExportPDFDialog();
}

const exportPowerPointbutton = document.getElementById("exportPowerPoint");
exportPowerPointbutton.addEventListener("click",exportPowerPointfunction);
function exportPowerPointfunction() {
    viz.showExportPowerPointDialog();
}

//Filter function 
document.getElementById("FilterButton").addEventListener
("click",applyfilterfunction)

function applyfilterfunction(){
    console.log("test the filter function")
    const minValue = document.getElementById("minValue").
    value;
    const maxValue = document.getElementById("maxValue").
    value;
    console.log(minValue, maxValue);
    const workbook = viz.getWorkbook();
    const activeSheet = workbook.getActiveSheet();
    console.log(activeSheet);
    const sheet = activeSheet.getWorsheets();
    console.log(sheets)
    const sheetoffilter = sheets[0];
sheetoffilter
.applyRangeFilterAsync("SUM(sales)", { min: minValue,
    max: maxValue })
.then(alert("viz filter"));



}