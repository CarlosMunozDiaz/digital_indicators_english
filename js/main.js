//INIT FUNCTIONS
init2a();
init2b();
init16_18();
init35();
init10();
init42a();
init42b();
init48a();
init48b();
init48c();

//FUNCTIONS
function init2a() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=1296035760&single=true&output=csv';
    let selectElement = document.getElementById('select_2a');
    d3.csv(url, function(error, data) {
        if (error) throw error;
        
        //Listener
        selectElement.addEventListener('change', function(e) {
            alert("Chart 2a > ", e.target.options[e.target.selectedIndex]);
            //updateChart(e.target.options[e.target.selectedIndex])
        });
    });
}

function init2b() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=1296035760&single=true&output=csv';
    let selectBtnBlock = document.getElementById('buttons_2b');
    let selectBtns = selectBtnBlock.getElementsByClassName('btn');
    let currentBtn = 'Both';

    d3.csv(url, function(error, data) {
        if (error) throw error;
        
        //Listener
        for(let i = 0; i < selectBtns.length; i++) {
            selectBtns[i].addEventListener('click', function(e, i) {
                console.log(i);
                if(e.target.textContent != currentBtn) {
                    currentBtn = e.target.textContent;
                    alert("Chart 2b - Button > ", currentBtn);
                    //CSS Class Change
                    e.target.classList.add('active');
                    //updateChart(currentBtn);
                }
            });
        }
    });
}

function init16_18() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=0&single=true&output=csv';
    let selectElement = document.getElementById('select_16_18');
    d3.csv(url, function(error, data) {
        if (error) throw error;
        
        //Listener
        selectElement.addEventListener('change', function(e) {
            alert("Chart 16-17-18 > ", e.target.options[e.target.selectedIndex]);
            //updateChart(e.target.options[e.target.selectedIndex])
        });
    });
}

function init35() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=1437038791&single=true&output=csv';
    d3.csv(url, function(error, data) {
        if (error) throw error;
        
    });
}

function init10() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=355194318&single=true&output=csv';
    let selectBtnBlock = document.getElementById('buttons_10');
    let selectBtns = selectBtnBlock.getElementsByClassName('btn');
    let currentBtn = 'STEM';
    d3.csv(url, function(error, data) {
        if (error) throw error;

        //Listener
        for(let i = 0; i < selectBtns.length; i++) {
            selectBtns[i].addEventListener('click', function(e) {
                console.log(e.target, e.target.textContent);
                if(e.target.textContent != currentBtn) {
                    currentBtn = e.target.textContent;
                    alert("Chart 2b - Button > ", currentBtn);
                    //CSS Class Change
                    e.target.classList.add('active');
                    //updateChart(currentBtn);
                }
            });
        }
        
    });
}

function init42a() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=1639180365&single=true&output=csv';
    d3.csv(url, function(error, data) {
        if (error) throw error;
        
    });
}

function init42b() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=846839345&single=true&output=csv';
    let selectElement = document.getElementById('select_42b');
    d3.csv(url, function(error, data) {
        if (error) throw error;
        
        //Listener
        selectElement.addEventListener('change', function(e) {
            alert("Chart 42b > ", e.target.options[e.target.selectedIndex]);
            //updateChart(e.target.options[e.target.selectedIndex])
        });
    });
}

function init48a() {
    let url = '';
    let selectElement = document.getElementById('select_48a');
    d3.csv(url, function(error, data) {
        if (error) throw error;

        //Listener
        selectElement.addEventListener('change', function(e) {
            alert("Chart 48a > ", e.target.options[e.target.selectedIndex]);
            //updateChart(e.target.options[e.target.selectedIndex])
        });
    });
}

function init48b() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=404906190&single=true&output=csv';
    d3.csv(url, function(error, data) {
        if (error) throw error;
        
    });
}

//Aquí jugaremos con display: none de los distintos SVG y con la visualización del tooltip
function init48c() {
    let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpmJKRvDm4iWZrbYtr2eFi0uQYcV3czLLDugi7M5V3slFP8PJDPHDKyK1Rql6lPUQVMO0AZ8zRk5H6/pub?gid=1192825969&single=true&output=csv';
    let selectElement = document.getElementById('select_48c');
    d3.csv(url, function(error, data) {
        if (error) throw error;

        //Listener
        selectElement.addEventListener('change', function(e) {
            alert("Chart 48c > ", e.target.options[e.target.selectedIndex]);
            //updateChart(e.target.options[e.target.selectedIndex])
        });
    });
}